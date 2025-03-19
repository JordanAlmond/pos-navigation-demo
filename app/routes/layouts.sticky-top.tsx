import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Sticky Top Navigation Layout" },
    { name: "description", content: "Sticky top navigation layout demo" },
  ];
};

export default function StickyTopLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Sticky navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Demo App
              </h1>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/sales"
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                Sales
              </Link>
              <Link
                to="/reports"
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                Reports
              </Link>
              <Link
                to="/marketing"
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                Marketing
              </Link>
              <Link
                to="/memberships"
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                Memberships
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:text-gray-200 hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/sales"
                className={`block px-3 py-2 rounded-md ${
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sales
              </Link>
              <Link
                to="/reports"
                className={`block px-3 py-2 rounded-md ${
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reports
              </Link>
              <Link
                to="/marketing"
                className={`block px-3 py-2 rounded-md ${
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketing
              </Link>
              <Link
                to="/memberships"
                className={`block px-3 py-2 rounded-md ${
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Memberships
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-96 flex items-center">
        <div className="container mx-auto px-4 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sticky Top Navigation Demo
          </h1>
          <p className="text-xl text-white/90">
            Scroll down to see how the navigation bar transforms.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Sample sections */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Sales Dashboard</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                Track your sales performance and monitor key metrics in real-time.
                The dashboard provides comprehensive analytics and insights to help
                you make data-driven decisions.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Daily Sales</h3>
                  <p className="text-gray-600">View your daily sales metrics</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Revenue</h3>
                  <p className="text-gray-600">Track revenue and growth</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Projections</h3>
                  <p className="text-gray-600">Analyze future trends</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Marketing Campaigns</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                Plan and execute your marketing campaigns effectively. Monitor
                engagement metrics and optimize your strategies for better results.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Active Campaigns</h3>
                  <p className="text-gray-600">View and manage current campaigns</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Performance Metrics</h3>
                  <p className="text-gray-600">Analyze campaign effectiveness</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Membership Overview</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                Manage your members and their subscriptions efficiently. Keep track
                of membership status and handle renewals seamlessly.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Active Members</h3>
                  <p className="text-gray-600">View current membership status</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Renewals</h3>
                  <p className="text-gray-600">Track upcoming renewals</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 