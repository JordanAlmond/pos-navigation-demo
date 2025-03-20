import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import Sales from "~/routes/sales";
import Marketing from "~/routes/marketing";
import Memberships from "~/routes/memberships";
import Reporting from "~/routes/reporting";

export const meta: MetaFunction = () => {
  return [
    { title: "Hybrid Navigation Layout" },
    { name: "description", content: "Hybrid navigation layout demo" },
  ];
};

type RecentActivity = {
  section: string;
  timestamp: Date;
};

export default function HybridNavLayout() {
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
    <div className="min-h-screen">
      {/* Top navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">Demo App</h1>
            <div className="flex items-center space-x-4">
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

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
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
                  onClick={() => index === 0 ? setActiveSection('dashboard') : setActiveSection(crumb.toLowerCase())}
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
            <h1 className="text-2xl font-bold mb-4">Hybrid Navigation Layout Demo</h1>
            <p className="mb-4">This is an example of a hybrid navigation layout, combining top navigation with a responsive design.</p>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Welcome to the Dashboard</h2>
              <p>Select a section from the navigation to view its content.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 