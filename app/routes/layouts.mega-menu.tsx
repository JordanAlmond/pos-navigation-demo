/// <reference types="react" />
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import type { DetailedHTMLProps, HTMLAttributes, ButtonHTMLAttributes, LiHTMLAttributes } from "react";
import Sales from "~/routes/sales";
import Marketing from "~/routes/marketing";
import Memberships from "~/routes/memberships";
import Products from "~/routes/products";
import Reporting from "~/routes/reporting";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      nav: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      main: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      h1: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      p: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      ul: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
      li: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
      strong: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export const meta: MetaFunction = () => {
  return [
    { title: "Mega Menu Layout" },
    { name: "description", content: "Mega menu navigation layout demo" },
  ];
};

export default function MegaMenuLayout() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Close menu when clicking outside of menu and button
      if (!menuRef.current?.contains(e.target as Node) && 
          !buttonRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar */}
      <nav className="bg-gray-800 text-white relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-start items-center h-16">
            <h1 className="text-xl font-bold">Demo App</h1>
            
            {/* Mega menu trigger */}
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 hover:text-gray-300 pl-8"
            >
              <span>Menu</span>
              <svg
                className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
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
          </div>

          {/* Mega menu content */}
          {isMenuOpen && (
            <div 
              ref={menuRef}
              className="absolute bg-white shadow-lg rounded-lg p-6 mt-0 z-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales</h2>
                  <button
                    onClick={() => {
                      setActiveSection('sales');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Sales Dashboard
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('sales');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Leaderboard
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('sales');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Widgets
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('sales');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Quick links
                  </button>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Memberships</h2>
                  <button
                    onClick={() => {
                      setActiveSection('memberships');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Memberships
                  </button>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Marketing</h2>
                  <button
                    onClick={() => {
                      setActiveSection('marketing');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Marketing
                  </button>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Reporting</h2>
                  <button
                    onClick={() => {
                      setActiveSection('reporting');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Reporting Dashboard
                  </button>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Products</h2>
                  <button
                    onClick={() => {
                      setActiveSection('products');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Products
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto p-8">
        <Link 
          to="/patterns/navigation" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Navigation Patterns
        </Link>

        {activeSection === 'sales' && <Sales />}
        {activeSection === 'marketing' && <Marketing />}
        {activeSection === 'memberships' && <Memberships />}
        {activeSection === 'products' && <Products />}
        {activeSection === 'reporting' && <Reporting />}

        {activeSection === 'dashboard' && (
          <>
            <h1 className="text-2xl font-bold mb-4">Mega Menu Layout Demo</h1>
            <p>This is an example of a mega menu navigation layout.</p>
          </>
        )}
      </main>
    </div>
  );
} 
