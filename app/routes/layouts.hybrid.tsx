import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hybrid Layout" },
    { name: "description", content: "Combination of sidebar and top navigation" },
  ];
};

export default function HybridLayout() {
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/demo" className="text-gray-800 hover:text-gray-600">
                  ← Back to Demo
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/sales" className="text-gray-800 hover:text-gray-600">
                  Sales
                </Link>
                <Link to="/reports" className="text-gray-800 hover:text-gray-600">
                  Reports
                </Link>
                <Link to="/marketing" className="text-gray-800 hover:text-gray-600">
                  Marketing
                </Link>
                <Link to="/memberships" className="text-gray-800 hover:text-gray-600">
                  Memberships
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">User Profile</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white min-h-screen">
          <nav className="p-4">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="block hover:text-gray-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="block hover:text-gray-300">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/settings" className="block hover:text-gray-300">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-4">Hybrid Layout Demo</h1>
          <p className="mb-4">This is an example of a hybrid navigation layout combining sidebar and top navigation.</p>
          
          {/* Demo content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Card {i + 1}</h2>
                <p className="text-gray-600">
                  This hybrid layout combines the benefits of both top navigation and sidebar navigation,
                  providing quick access to main features while maintaining a clear hierarchy.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              <strong>Demo Note:</strong> This layout demonstrates a hybrid navigation pattern that
              combines top navigation for primary actions with a sidebar for secondary navigation.
              It's particularly useful for complex applications with multiple navigation levels.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
} 