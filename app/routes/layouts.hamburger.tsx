import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Hamburger Menu Layout" },
    { name: "description", content: "Hamburger menu navigation layout demo" },
  ];
};

export default function HamburgerLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation header */}
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Demo App</h1>
            </div>

            {/* Hamburger button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } transition-all duration-300 ease-in-out`}
        >
          <div className="container mx-auto px-4 pb-3 space-y-1">
            <Link
              to="/sales"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Sales Dashboard
            </Link>
            <Link
              to="/reports"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Reports
            </Link>
            <Link
              to="/marketing"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketing
            </Link>
            <Link
              to="/memberships"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Memberships
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Hamburger Menu Layout Demo</h1>
          <p className="mb-6">
            This is an example of a hamburger menu layout, commonly used for responsive navigation.
            The menu can be toggled using the button in the top-right corner on mobile devices.
          </p>

          {/* Sample content */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
              <p>
                Track your sales performance and monitor key metrics in real-time.
                View detailed analytics and generate comprehensive reports.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Marketing Insights</h2>
              <p>
                Analyze your marketing campaigns and measure their effectiveness.
                Optimize your strategies based on data-driven insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Report Generation</h2>
              <p>
                Create custom reports and export them in various formats.
                Schedule automated reports for regular updates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Membership Management</h2>
              <p>
                Manage your members and their subscriptions efficiently.
                Track membership status and handle renewals seamlessly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 