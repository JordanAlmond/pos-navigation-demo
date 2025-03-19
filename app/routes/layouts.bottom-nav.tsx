import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Bottom Navigation Layout" },
    { name: "description", content: "Bottom navigation layout demo" },
  ];
};

export default function BottomNavLayout() {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      {/* Main content */}
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Bottom Navigation Layout Demo</h1>
        <p className="mb-4">This is an example of a bottom navigation layout, commonly used in mobile applications.</p>
        
        {/* Sample content */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
            <p>Your sales dashboard content would go here.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Recent Reports</h2>
            <p>Your reports content would go here.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Marketing Campaigns</h2>
            <p>Your marketing content would go here.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Membership Status</h2>
            <p>Your membership content would go here.</p>
          </div>
        </div>
      </main>

      {/* Bottom navigation - visible only on mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="grid grid-cols-4 h-16">
          <Link
            to="/sales"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600"
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
          </Link>

          <Link
            to="/reports"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600"
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
          </Link>

          <Link
            to="/marketing"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600"
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
          </Link>

          <Link
            to="/memberships"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600"
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
          </Link>
        </div>
      </nav>

      {/* Desktop alternative - top navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">Demo App</h1>
            <div className="flex space-x-4">
              <Link
                to="/sales"
                className="text-gray-600 hover:text-blue-600"
              >
                Sales
              </Link>
              <Link
                to="/reports"
                className="text-gray-600 hover:text-blue-600"
              >
                Reports
              </Link>
              <Link
                to="/marketing"
                className="text-gray-600 hover:text-blue-600"
              >
                Marketing
              </Link>
              <Link
                to="/memberships"
                className="text-gray-600 hover:text-blue-600"
              >
                Members
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
} 