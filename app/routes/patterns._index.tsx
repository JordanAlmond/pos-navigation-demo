import { Link } from '@remix-run/react';

  export default function PatternsIndex() {
    const layouts = [
      {
        name: "Sidebar",
        description: "Classic sidebar navigation with collapsible menu items",
        path: "/layouts/sidebar",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ),
      },
      {
        name: "Dropdown",
        description: "Dropdown menu navigation for clean interfaces",
        path: "/layouts/dropdown",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ),
      },
      {
        name: "Mega Menu",
        description: "Expansive mega menu for complex navigation hierarchies",
        path: "/layouts/mega-menu",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        ),
      },
      {
        name: "Hybrid",
        description: "Combination of sidebar and top navigation",
        path: "/layouts/hybrid",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM4 13h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1z" />
          </svg>
        ),
      },
      {
        name: "Bottom Navigation (Mobile)",
        description: "Mobile-first bottom navigation bar",
        path: "/layouts/bottom-nav",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        ),
      },
      {
        name: "Hamburger Menu (Mobile)",
        description: "Classic hamburger menu for mobile-responsive design",
        path: "/layouts/hamburger",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ),
      },
      {
        name: "Sticky Top",
        description: "Sticky top navigation with scroll transformation",
        path: "/layouts/sticky-top",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        ),
      },
      {
        name: "Search Patterns",
        description: "Different search pattern implementations including command palette, global search, and more",
        path: "/layouts/search",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        ),
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">UI Pattern Library</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Search Patterns */}
            <Link to="/patterns/search" className="group">
              <div className="bg-white rounded-lg shadow p-6 transform transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Search Patterns</h2>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-500">
                  Explore different search patterns including command palette, predictive search, and advanced filtering.
                </p>
              </div>
            </Link>
  
            {/* Navigation Patterns */}
            <Link to="/patterns/navigation" className="group">
              <div className="bg-white rounded-lg shadow p-6 transform transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Navigation Patterns</h2>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-500">
                  View various navigation patterns including sidebar, top navigation, and mobile-friendly options.
                </p>
              </div>
            </Link>
  
            {/* Layout Patterns */}
            <Link to="/patterns/layout" className="group">
              <div className="bg-white rounded-lg shadow p-6 transform transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Layout Patterns</h2>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-500">
                  Discover different layout patterns for organizing content and navigation in your application.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
