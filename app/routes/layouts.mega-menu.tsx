import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Mega Menu Layout" },
    { name: "description", content: "Mega menu navigation layout demo" },
  ];
};

export default function MegaMenuLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation bar */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">Demo App</h1>
            
            {/* Mega menu trigger */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 hover:text-gray-300"
              >
                <span>Menu</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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

              {/* Mega menu content */}
              {isOpen && (
                <div className="absolute top-full left-0 w-screen bg-white text-gray-800 shadow-lg">
                  <div className="container mx-auto p-6">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Sales Section */}
                      <div>
                        <h3 className="font-bold text-lg mb-4">Sales</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/sales" className="hover:text-blue-600">
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link to="/sales/analytics" className="hover:text-blue-600">
                              Analytics
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Reports Section */}
                      <div>
                        <h3 className="font-bold text-lg mb-4">Reports</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/reports" className="hover:text-blue-600">
                              Overview
                            </Link>
                          </li>
                          <li>
                            <Link to="/reports/monthly" className="hover:text-blue-600">
                              Monthly Reports
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Marketing Section */}
                      <div>
                        <h3 className="font-bold text-lg mb-4">Marketing</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/marketing" className="hover:text-blue-600">
                              Campaigns
                            </Link>
                          </li>
                          <li>
                            <Link to="/marketing/social" className="hover:text-blue-600">
                              Social Media
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Memberships Section */}
                      <div>
                        <h3 className="font-bold text-lg mb-4">Memberships</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/memberships" className="hover:text-blue-600">
                              Overview
                            </Link>
                          </li>
                          <li>
                            <Link to="/memberships/tiers" className="hover:text-blue-600">
                              Membership Tiers
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Mega Menu Layout Demo</h1>
        <p>This is an example of a mega menu navigation layout.</p>
      </main>
    </div>
  );
} 