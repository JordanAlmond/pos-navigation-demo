import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Navigation Demo" },
    { name: "description", content: "Demo of different navigation layout patterns" },
  ];
};

export default function Demo() {
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
      name: "Bottom Navigation",
      description: "Mobile-first bottom navigation bar",
      path: "/layouts/bottom-nav",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      ),
    },
    {
      name: "Hamburger Menu",
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Navigation Patterns
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Explore different navigation layout patterns for your web applications.
              Click on any pattern to see it in action.
            </p>
          </div>
        </div>
      </div>

      {/* Layout grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {layouts.map((layout) => (
            <Link
              key={layout.name}
              to={layout.path}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {layout.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {layout.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {layout.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-lg ring-1 ring-black ring-opacity-5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Different Navigation Patterns?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Different navigation patterns serve different purposes and user needs.
              Choose the right pattern based on your application's complexity,
              content hierarchy, and target devices.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">User Experience</h3>
              <p className="mt-2 text-base text-gray-500">
                The right navigation pattern can significantly improve user experience
                by making content discovery intuitive and efficient.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Responsiveness</h3>
              <p className="mt-2 text-base text-gray-500">
                Different patterns work better on different devices. Mobile-first
                patterns ensure a great experience across all screen sizes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Content Structure</h3>
              <p className="mt-2 text-base text-gray-500">
                Match your navigation pattern to your content hierarchy for the most
                natural and efficient user flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
