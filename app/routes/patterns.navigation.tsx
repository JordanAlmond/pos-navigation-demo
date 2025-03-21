import { useState } from 'react';
import { Link, Outlet } from '@remix-run/react';

export default function NavigationPatterns() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Link */}
          <Link 
            to="/patterns"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Patterns
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Navigation Patterns</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Local Navigation */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Local Navigation</h2>
                <Link
                  to="/layouts/local"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                >
                  View Demo
                </Link>
              </div>
              <div className="h-64 bg-gray-100 rounded-md flex flex-col">
                <div className="p-4 space-y-4">
                  {/* Breadcrumbs mockup */}
                  <div className="flex items-center space-x-2">
                    <div className="h-2 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 w-4 text-gray-300">›</div>
                    <div className="h-2 bg-gray-300 rounded w-20"></div>
                  </div>
                  {/* Tabs mockup */}
                  <div className="flex space-x-4 border-b border-gray-200">
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                  </div>
                  {/* Filters mockup */}
                  <div className="flex space-x-4">
                    <div className="h-8 bg-gray-200 rounded w-32"></div>
                    <div className="h-8 bg-gray-200 rounded w-32"></div>
                  </div>
                  {/* Content mockup */}
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                  {/* Pagination mockup */}
                  <div className="flex justify-between items-center">
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 w-8 bg-gray-300 rounded"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                A comprehensive local navigation system with tabs, breadcrumbs, filters, and pagination.
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Sidebar Navigation</h2>
                <Link
                  to="/layouts/sidebar"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                >
                  View Demo
                </Link>
              </div>
              <div className="h-64 bg-gray-100 rounded-md flex">
                <div className="w-64 bg-gray-200 p-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                A traditional sidebar navigation with collapsible menu items and nested navigation.
              </div>
            </div>

            {/* Top Navigation */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Top Navigation</h2>
                <Link
                  to="/layouts/sticky-top"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                >
                  View Demo
                </Link>
              </div>
              <div className="h-64 bg-gray-100 rounded-md flex flex-col">
                <div className="h-12 bg-gray-200 p-4 flex items-center space-x-4">
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                </div>
                <div className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                A modern top navigation bar with dropdown menus and responsive design.
              </div>
            </div>

            {/* Mega Menu */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Mega Menu</h2>
                <Link
                  to="/layouts/mega-menu"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                >
                  View Demo
                </Link>
              </div>
              <div className="h-64 bg-gray-100 rounded-md flex flex-col">
                <div className="h-12 bg-gray-200 p-4 flex items-center justify-between">
                  <div className="flex space-x-4">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                  </div>
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-1 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                An expansive mega menu for complex navigation hierarchies with rich content.
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Bottom Navigation</h2>
                <Link
                  to="/layouts/bottom-nav"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                >
                  View Demo
                </Link>
              </div>
              <div className="h-64 bg-gray-100 rounded-md flex flex-col">
                <div className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="h-16 bg-gray-200 p-4 flex items-center justify-around">
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                A mobile-first bottom navigation bar for easy thumb access to primary actions.
              </div>
            </div>

            {/* Hybrid Navigation */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Hybrid Navigation</h2>
                <Link
                  to="/layouts/hybrid"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                >
                  View Demo
                </Link>
              </div>
              <div className="h-64 bg-gray-100 rounded-md flex flex-col">
                <div className="h-12 bg-gray-200 p-4 flex items-center justify-between">
                  <div className="flex space-x-4">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                  </div>
                  <div className="h-8 w-8 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-1 flex">
                  <div className="w-48 bg-gray-200 p-4">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="space-y-4">
                      <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                A combination of top navigation and sidebar for complex applications.
              </div>
            </div>

            {/* Hamburger Menu */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">Hamburger Menu</h2>
                <Link
                  to="/layouts/hamburger"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                >
                  View Demo
                </Link>
              </div>
              <div className="h-64 bg-gray-100 rounded-md flex flex-col">
                <div className="h-12 bg-gray-200 p-4 flex items-center">
                  <div className="h-6 w-6 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                A mobile-friendly hamburger menu with slide-out navigation panel.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
} 