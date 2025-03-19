import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Dropdown Layout" },
    { name: "description", content: "Dropdown navigation layout demo" },
  ];
};

export default function DropdownLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Demo App</h1>
          
          {/* Dropdown menu */}
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

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Link
                  to="/sales"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Sales Dashboard
                </Link>
                <Link
                  to="/reports"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Reports
                </Link>
                <Link
                  to="/marketing"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Marketing
                </Link>
                <Link
                  to="/memberships"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Memberships
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Dropdown Layout Demo</h1>
        <p>This is an example of a dropdown navigation layout.</p>
      </main>
    </div>
  );
} 