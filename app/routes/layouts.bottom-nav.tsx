import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import Sales from "~/routes/sales";
import Marketing from "~/routes/marketing";
import Memberships from "~/routes/memberships";
import Reporting from "~/routes/reporting";

export const meta: MetaFunction = () => {
  return [
    { title: "Bottom Navigation Layout" },
    { name: "description", content: "Bottom navigation layout demo" },
  ];
};

type RecentActivity = {
  section: string;
  timestamp: Date;
};

export default function BottomNavLayout() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Home']);

  // Update recent activities when section changes
  useEffect(() => {
    if (activeSection === 'dashboard') return;

    const newActivity = {
      section: activeSection,
      timestamp: new Date(),
    };

    setRecentActivities(prev => {
      const updated = [newActivity, ...prev].slice(0, 5);
      return updated;
    });
  }, [activeSection]);

  // Update breadcrumbs when section changes
  useEffect(() => {
    if (activeSection === 'dashboard') {
      setBreadcrumbs(['Home']);
    } else {
      setBreadcrumbs(['Home', activeSection.charAt(0).toUpperCase() + activeSection.slice(1)]);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      {/* Main content */}
      <main className="container mx-auto p-4">
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
                  onClick={() => index === 0 ? setActiveSection('dashboard') : setActiveSection(crumb.toLowerCase)}
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
                    onClick={() => setActiveSection(activity.section)}
                    className="text-blue-600 hover:underline"
                  >
                    {activity.section.charAt(0).toUpperCase() + activity.section.slice(1)}
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
            <h1 className="text-2xl font-bold mb-4">Bottom Navigation Layout Demo</h1>
            <p className="mb-4">This is an example of a bottom navigation layout, commonly used in mobile applications.</p>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Welcome to the Dashboard</h2>
              <p>Select a section from the navigation to view its content.</p>
            </div>
          </div>
        )}
      </main>

      {/* Bottom navigation - visible only on mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="grid grid-cols-4 h-16">
          <button
            onClick={() => setActiveSection('sales')}
            className={`flex flex-col items-center justify-center ${
              activeSection === 'sales' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5M8 8v8m8-16l4 4m0 0l4-4m-4 4v12"
              />
            </svg>
            <span className="text-xs mt-1">Sales</span>
          </button>

          <button
            onClick={() => setActiveSection('reports')}
            className={`flex flex-col items-center justify-center ${
              activeSection === 'reports' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-xs mt-1">Reports</span>
          </button>

          <button
            onClick={() => setActiveSection('marketing')}
            className={`flex flex-col items-center justify-center ${
              activeSection === 'marketing' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            <span className="text-xs mt-1">Marketing</span>
          </button>

          <button
            onClick={() => setActiveSection('memberships')}
            className={`flex flex-col items-center justify-center ${
              activeSection === 'memberships' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-xs mt-1">Members</span>
          </button>
        </div>
      </nav>

      {/* Desktop alternative - top navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">Demo App</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveSection('sales')}
                className={`${
                  activeSection === 'sales' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Sales
              </button>
              <button
                onClick={() => setActiveSection('reports')}
                className={`${
                  activeSection === 'reports' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Reports
              </button>
              <button
                onClick={() => setActiveSection('marketing')}
                className={`${
                  activeSection === 'marketing' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Marketing
              </button>
              <button
                onClick={() => setActiveSection('memberships')}
                className={`${
                  activeSection === 'memberships' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Members
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
} 