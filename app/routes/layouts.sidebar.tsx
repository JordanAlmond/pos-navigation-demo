import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Sidebar Layout" },
    { name: "description", content: "Sidebar navigation layout demo" },
  ];
};

function SalesContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sales Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-green-600">$24,500</p>
          <p className="text-sm text-gray-500">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-blue-600">156</p>
          <p className="text-sm text-gray-500">+5% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Customers</h3>
          <p className="text-3xl font-bold text-purple-600">89</p>
          <p className="text-sm text-gray-500">+8% from last month</p>
        </div>
      </div>
    </div>
  );
}

function ReportsContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Monthly Sales Report</h3>
          <p className="text-gray-600">View detailed sales analytics and trends.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Customer Analytics</h3>
          <p className="text-gray-600">Analyze customer behavior and demographics.</p>
        </div>
      </div>
    </div>
  );
}

function MarketingContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Marketing</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Campaigns</h3>
          <p className="text-gray-600">Manage and track marketing campaigns.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <p className="text-gray-600">Monitor social media engagement.</p>
        </div>
      </div>
    </div>
  );
}

function MembershipsContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Memberships</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Active Members</h3>
          <p className="text-gray-600">View and manage member accounts.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Membership Plans</h3>
          <p className="text-gray-600">Configure membership tiers and pricing.</p>
        </div>
      </div>
    </div>
  );
}

export default function SidebarLayout() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleSectionChange = (section: string) => {
    console.log('Button clicked for section:', section);
    console.log('Previous activeSection:', activeSection);
    setActiveSection(section);
    console.log('Setting activeSection to:', section);
  };

  // Debug logging
  useEffect(() => {
    console.log('activeSection changed to:', activeSection);
  }, [activeSection]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <nav className="p-4">
          <div className="mb-8">
            <Link to="/demo" className="text-white hover:text-gray-300">
              ← Back to Demo
            </Link>
          </div>
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => handleSectionChange('sales')}
                className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${
                  activeSection === 'sales' ? 'bg-gray-700 text-blue-400' : 'text-white'
                }`}
              >
                Sales Dashboard
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionChange('reports')}
                className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${
                  activeSection === 'reports' ? 'bg-gray-700 text-blue-400' : 'text-white'
                }`}
              >
                Reports
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionChange('marketing')}
                className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${
                  activeSection === 'marketing' ? 'bg-gray-700 text-blue-400' : 'text-white'
                }`}
              >
                Marketing
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionChange('memberships')}
                className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${
                  activeSection === 'memberships' ? 'bg-gray-700 text-blue-400' : 'text-white'
                }`}
              >
                Memberships
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        {activeSection === 'sales' && <SalesContent />}
        {activeSection === 'reports' && <ReportsContent />}
        {activeSection === 'marketing' && <MarketingContent />}
        {activeSection === 'memberships' && <MembershipsContent />}

        {activeSection === 'dashboard' && (
          <>
            <h1 className="text-2xl font-bold mb-4">Sidebar Layout Demo</h1>
            <p className="mb-4">This is an example of a sidebar navigation layout.</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>Demo Note:</strong> This layout demonstrates a classic sidebar navigation pattern.
                Click on the sidebar links to see different content sections without page reloads.
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
} 