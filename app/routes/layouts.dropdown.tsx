import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from "react";
import { Link } from "@remix-run/react";
import Sales from "~/routes/sales";
import Marketing from "~/routes/marketing";
import Memberships from "~/routes/memberships";
import Reporting from "~/routes/reporting";

export const meta: MetaFunction = () => {
  return [
    { title: "Dropdown Navigation Layout" },
    { name: "description", content: "Dropdown navigation layout demo" },
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
    label: 'Membership Management',
    subsections: [
      { id: 'memberships-addons', label: 'Memberships & Add-Ons' },
      { id: 'prepaid', label: 'Prepaid Washes' },
      { id: 'location-availability', label: 'Location Availability' }
    ]
  },
  {
    id: 'products',
    label: 'Product Management',
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

export default function DropdownNavLayout() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeSubsection, setActiveSubsection] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Home']);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        ref => ref && !ref.contains(event.target as Node)
      );
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top navigation */}
      <nav className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">Demo App</h1>
            <div className="flex items-center space-x-4">
              <Link 
                to="/patterns/navigation" 
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Back to Navs
              </Link>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setActiveSection('dashboard');
                    setActiveSubsection(null);
                    setOpenDropdown(null);
                  }}
                  className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
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
                  <div key={item.id} className="relative" ref={el => dropdownRefs.current[item.id] = el}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                      className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
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
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openDropdown === item.id ? "rotate-180" : ""
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

                    {openDropdown === item.id && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              setActiveSection(item.id);
                              setActiveSubsection(null);
                              setOpenDropdown(null);
                            }}
                            className={`w-full text-left px-4 py-2 flex items-center space-x-2 ${
                              activeSection === item.id && !activeSubsection
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {/* Section-specific icons in dropdown */}
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
                          </button>

                          {item.subsections && (
                            <div className="bg-gray-50">
                              {item.subsections.map((subsection) => (
                                <button
                                  key={subsection.id}
                                  onClick={() => {
                                    setActiveSection(item.id);
                                    setActiveSubsection(subsection.id);
                                    setOpenDropdown(null);
                                  }}
                                  className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 ${
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
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
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
            <h1 className="text-2xl font-bold mb-4">Dropdown Navigation Layout Demo</h1>
            <p className="mb-4">This is an example of a dropdown navigation layout with nested menu items.</p>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Welcome to the Dashboard</h2>
              <p>Select a section from the menu to view its content.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 