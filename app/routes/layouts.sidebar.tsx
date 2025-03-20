import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from "react";
import { Link } from "@remix-run/react";
import Sales from "~/routes/sales";
import Marketing from "~/routes/marketing";
import Memberships from "~/routes/memberships";
import Reporting from "~/routes/reporting";

export const meta: MetaFunction = () => {
  return [
    { title: "Sidebar Navigation Layout" },
    { name: "description", content: "Sidebar navigation layout demo" },
  ];
};

type RecentActivity = {
  section: string;
  subsection?: string;
  timestamp: Date;
};

type MenuItem = {
  id: string;
  label: string;
  subsections?: {
    id: string;
    label: string;
  }[];
};

const menuItems: MenuItem[] = [
  {
    id: 'sales',
    label: 'Sales Dashboard',
    subsections: [
      { id: 'member-dashboard', label: 'Member Dashboard' },
      { id: 'leaderboard', label: 'Leaderboard' },
      { id: 'widgets', label: 'Custom Widgets' },
      { id: 'quick-links', label: 'Quick Links' },
      { id: 'performance', label: 'Business Performance' }
    ]
  },
  {
    id: 'memberships',
    label: 'Membership',
    subsections: [
      { id: 'memberships-addons', label: 'Memberships & Add-Ons' },
      { id: 'prepaid', label: 'Prepaid Washes' },
      { id: 'location-availability', label: 'Location Availability' }
    ]
  },
  {
    id: 'products',
    label: 'Product',
    subsections: [
      { id: 'descriptions', label: 'Product Descriptions' },
      { id: 'builder', label: 'Product Builder' },
      { id: 'inventory', label: 'Product Inventory' }
    ]
  },
  {
    id: 'marketing',
    label: 'Marketing',
    subsections: [
      { id: 'coupons', label: 'Coupons' },
      { id: 'targeting', label: 'Customer Targeting' },
      { id: 'bulk-actions', label: 'Bulk Actions' }
    ]
  },
  {
    id: 'reports',
    label: 'Reporting',
    subsections: [
      { id: 'sales-revenue', label: 'Sales & Revenue' },
      { id: 'subscription', label: 'Subscription Analytics' },
      { id: 'transactions', label: 'Transaction Reports' },
      { id: 'cash', label: 'Cash Reports' },
      { id: 'employee', label: 'Employee Reports' },
      { id: 'customer', label: 'Customer Usage' },
      { id: 'retail', label: 'Retail Analytics' }
    ]
  }
];

type SearchResult = {
  id: string;
  label: string;
  type: 'section' | 'subsection' | 'action';
  section?: string;
  icon?: React.ReactNode;
};

export default function SidebarLayout() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeSubsection, setActiveSubsection] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Home']);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);
  const commandPaletteRef = useRef<HTMLDivElement>(null);

  // Update recent activities when section changes
  useEffect(() => {
    if (activeSection === 'dashboard') return;

    const newActivity = {
      section: activeSection,
      subsection: activeSubsection || undefined,
      timestamp: new Date(),
    };

    setRecentActivities(prev => {
      const updated = [newActivity, ...prev].slice(0, 5);
      return updated;
    });
  }, [activeSection, activeSubsection]);

  // Update breadcrumbs when section changes
  useEffect(() => {
    if (activeSection === 'dashboard') {
      setBreadcrumbs(['Home']);
    } else {
      const section = menuItems.find(item => item.id === activeSection);
      const subsection = section?.subsections?.find(sub => sub.id === activeSubsection);
      const breadcrumbItems = ['Home', section?.label || ''];
      if (subsection) {
        breadcrumbItems.push(subsection.label);
      }
      setBreadcrumbs(breadcrumbItems);
    }
  }, [activeSection, activeSubsection]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
        setSearchQuery("");
        setSelectedResultIndex(0);
      }
      if (isCommandPaletteOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedResultIndex(prev => 
            prev < searchResults.length - 1 ? prev + 1 : 0
          );
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedResultIndex(prev => 
            prev > 0 ? prev - 1 : searchResults.length - 1
          );
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          const selectedResult = searchResults[selectedResultIndex];
          if (selectedResult) {
            handleSearchResultSelect(selectedResult);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, searchResults, selectedResultIndex]);

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results: SearchResult[] = [];
    
    // Search in menu items
    menuItems.forEach(item => {
      if (item.label.toLowerCase().includes(searchQuery.toLowerCase())) {
        results.push({
          id: item.id,
          label: item.label,
          type: 'section',
          icon: getSectionIcon(item.id)
        });
      }

      // Search in subsections
      item.subsections?.forEach(subsection => {
        if (subsection.label.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            id: subsection.id,
            label: subsection.label,
            type: 'subsection',
            section: item.label,
            icon: getSectionIcon(item.id)
          });
        }
      });
    });

    // Add some example actions
    if (searchQuery.toLowerCase().includes('create')) {
      results.push({
        id: 'create-report',
        label: 'Create New Report',
        type: 'action',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )
      });
    }

    setSearchResults(results);
    setSelectedResultIndex(0);
  }, [searchQuery]);

  const getSectionIcon = (sectionId: string) => {
    // ... existing icon logic ...
  };

  const handleSearchResultSelect = (result: SearchResult) => {
    if (result.type === 'section') {
      setActiveSection(result.id);
      setActiveSubsection(null);
    } else if (result.type === 'subsection') {
      const section = menuItems.find(item => item.subsections?.some(sub => sub.id === result.id));
      if (section) {
        setActiveSection(section.id);
        setActiveSubsection(result.id);
      }
    }
    setIsCommandPaletteOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex">
      {/* Command Palette */}
      {isCommandPaletteOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div 
            ref={commandPaletteRef}
            className="w-full max-w-2xl bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 border-b">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search commands, sections, or actions..."
                  className="w-full outline-none text-gray-900"
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {searchResults.length > 0 ? (
                <ul className="py-2">
                  {searchResults.map((result, index) => (
                    <li key={result.id}>
                      <button
                        onClick={() => handleSearchResultSelect(result)}
                        className={`w-full flex items-center space-x-2 px-4 py-2 text-left ${
                          index === selectedResultIndex ? 'bg-blue-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        {result.icon}
                        <div>
                          <div className="text-sm font-medium text-gray-900">{result.label}</div>
                          {result.type === 'subsection' && (
                            <div className="text-xs text-gray-500">{result.section}</div>
                          )}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-8 text-center text-gray-500">
                  No results found. Try a different search term.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold">Demo App</h1>
            <Link 
              to="/" 
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Back to Demo
            </Link>
          </div>

          {/* Global Search */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsCommandPaletteOpen(true)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => {
                setActiveSection('dashboard');
                setActiveSubsection(null);
              }}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${
                activeSection === 'dashboard'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
            </button>

            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setActiveSubsection(null);
                    setExpandedSection(expandedSection === item.id ? null : item.id);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-md ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {/* Section-specific icons */}
                    {item.id === 'sales' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {item.id === 'memberships' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {item.id === 'products' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    )}
                    {item.id === 'marketing' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    )}
                    {item.id === 'reports' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    <span>{item.label}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      expandedSection === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedSection === item.id && item.subsections && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subsections.map((subsection) => (
                      <button
                        key={subsection.id}
                        onClick={() => {
                          setActiveSection(item.id);
                          setActiveSubsection(subsection.id);
                        }}
                        className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md text-sm ${
                          activeSection === item.id && activeSubsection === subsection.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{subsection.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Breadcrumb navigation */}
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb} className="inline-flex items-center">
                {index > 0 && (
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                <button 
                  onClick={() => {
                    if (index === 0) {
                      setActiveSection('dashboard');
                      setActiveSubsection(null);
                    } else if (index === 1) {
                      const section = menuItems.find(item => item.label === crumb);
                      if (section) {
                        setActiveSection(section.id);
                        setActiveSubsection(null);
                      }
                    }
                  }}
                  className={`inline-flex items-center text-sm font-medium ${
                    index === breadcrumbs.length - 1
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {crumb}
                </button>
              </li>
            ))}
          </ol>
        </nav>

        {/* Recent Activity */}
        {recentActivities.length > 0 && (
          <div className="mb-6 bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
            <ul className="space-y-2">
              {recentActivities.map((activity, index) => (
                <li key={index} className="flex justify-between items-center text-sm">
                  <button
                    onClick={() => {
                      setActiveSection(activity.section);
                      setActiveSubsection(activity.subsection || null);
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    {activity.subsection 
                      ? `${activity.section.charAt(0).toUpperCase() + activity.section.slice(1)} > ${activity.subsection}`
                      : activity.section.charAt(0).toUpperCase() + activity.section.slice(1)
                    }
                  </button>
                  <span className="text-gray-500">
                    {activity.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Section Content */}
        {activeSection === 'sales' && <Sales />}
        {activeSection === 'reports' && <Reporting />}
        {activeSection === 'marketing' && <Marketing />}
        {activeSection === 'memberships' && <Memberships />}

        {activeSection === 'dashboard' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold mb-4">Sidebar Navigation Layout Demo</h1>
            <p className="mb-4">This is an example of a sidebar navigation layout with nested menu items.</p>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Welcome to the Dashboard</h2>
              <p>Select a section from the sidebar to view its content.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 