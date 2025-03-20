import { useState } from 'react';
import { Link, Outlet } from '@remix-run/react';

export default function LayoutPatterns() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Layout Patterns</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Admin Dashboard Layouts Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 md:col-span-2">Admin Dashboard Layouts</h2>

          {/* Data-First Dashboard Layout */}
          <div id='data-first-dashboard' className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Data-First Dashboard</h2>
              <Link 
                to="/layouts/data-first"
                className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                View Demo →
              </Link>
            </div>
            <div className="h-96 bg-gray-100 rounded-md flex">
              {/* Sidebar */}
              <div className="w-48 bg-gray-200 p-4">
                <div className="space-y-3">
                  <div className="h-8 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* KPI Widgets */}
                  <div className="bg-white rounded shadow p-3">
                    <div className="h-4 bg-blue-200 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-blue-100 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white rounded shadow p-3">
                    <div className="h-4 bg-green-200 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-green-100 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white rounded shadow p-3">
                    <div className="h-4 bg-red-200 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-red-100 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded shadow p-4 h-48">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                  </div>
                  <div className="bg-white rounded shadow p-4 h-48">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Right Panel */}
              <div className="w-64 bg-gray-200 p-4">
                <div className="space-y-4">
                  <div className="h-24 bg-gray-300 rounded"></div>
                  <div className="h-24 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Data-first dashboard with KPI widgets, charts, and quick insights panel.
            </div>
          </div>

          {/* List & Table Layout */}
          <div id='list-table-layout' className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">List & Table Layout</h2>
              <Link 
                to="/layouts/list-table"
                className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
              >
                View Demo →
              </Link>
            </div>
            <div className="h-96 bg-gray-100 rounded-md flex">
              {/* Sidebar */}
              <div className="w-48 bg-gray-200 p-4">
                <div className="space-y-3">
                  <div className="h-8 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-4">
                {/* Toolbar */}
                <div className="bg-white rounded-t shadow p-3 flex justify-between items-center mb-2">
                  <div className="flex space-x-2">
                    <div className="h-8 w-24 bg-gray-200 rounded"></div>
                    <div className="h-8 w-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-8 w-32 bg-gray-200 rounded"></div>
                </div>
                {/* Table */}
                <div className="bg-white rounded-b shadow">
                  <div className="p-3 border-b">
                    <div className="grid grid-cols-6 gap-4">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="p-3 border-b">
                      <div className="grid grid-cols-6 gap-4">
                        <div className="h-4 bg-gray-100 rounded"></div>
                        <div className="h-4 bg-gray-100 rounded"></div>
                        <div className="h-4 bg-gray-100 rounded"></div>
                        <div className="h-4 bg-gray-100 rounded"></div>
                        <div className="h-4 bg-gray-100 rounded"></div>
                        <div className="h-4 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Data management layout with filters, bulk actions, and sortable table.
            </div>
          </div>

          {/* Detail Page Layout */}
          <div id='detail-page-layout' className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Detail Page Layout</h2>
              <Link 
                to="/layouts/detail"
                className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
              >
                View Demo →
              </Link>
            </div>
            <div className="h-96 bg-gray-100 rounded-md flex">
              {/* Left Column */}
              <div className="flex-1 p-4">
                <div className="bg-white rounded shadow p-4 h-full">
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="h-4 bg-gray-100 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-gray-200 rounded"></div>
                      </div>
                      <div>
                        <div className="h-4 bg-gray-100 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                    <div className="h-24 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="w-64 p-4">
                <div className="space-y-4">
                  <div className="bg-white rounded shadow p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-8 bg-blue-100 rounded"></div>
                      <div className="h-8 bg-red-100 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded shadow p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="h-24 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Two-column layout for detailed views with quick actions panel.
            </div>
          </div>

          {/* Multi-Step Form Layout */}
          <div id='multi-step-form-layout' className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Multi-Step Form Layout</h2>
              <Link 
                to="/layouts/onboarding"
                className="inline-flex items-center px-4 py-2 bg-pink-50 text-pink-700 rounded-lg hover:bg-pink-100 transition-colors"
              >
                View Demo →
              </Link>
            </div>
            <div className="h-96 bg-gray-100 rounded-md p-4">
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`h-8 w-8 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-gray-300'} flex items-center justify-center text-white`}>
                        {i + 1}
                      </div>
                      {i < 3 && <div className={`h-1 w-24 ${i === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-blue-500">Basic Info</div>
                  <div className="text-gray-400">Features</div>
                  <div className="text-gray-400">Pricing</div>
                  <div className="text-gray-400">Review</div>
                </div>
              </div>
              {/* Form Content */}
              <div className="bg-white rounded shadow p-6 mb-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-10 bg-gray-100 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-10 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-24 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Navigation */}
              <div className="flex justify-between items-center">
                <div className="h-10 w-24 bg-gray-300 rounded"></div>
                <div className="flex space-x-2">
                  <div className="h-10 w-24 bg-gray-200 rounded"></div>
                  <div className="h-10 w-24 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Multi-step form with progress indicator and navigation controls.
            </div>
          </div>

          {/* Split Panel Layout */}
          <div id='split-panel-layout' className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Split Panel Layout</h2>
              <Link 
                to="/layouts/settings"
                className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
              >
                View Demo →
              </Link>
            </div>
            <div className="h-96 bg-gray-100 rounded-md flex">
              {/* Left Panel - Filters */}
              <div className="w-64 bg-gray-200 p-4">
                <div className="space-y-4">
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-white rounded"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-6 bg-white rounded"></div>
                      <div className="h-6 bg-white rounded"></div>
                      <div className="h-6 bg-white rounded"></div>
                    </div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-24 bg-white rounded"></div>
                  </div>
                </div>
              </div>
              {/* Right Panel - Live Data */}
              <div className="flex-1 p-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded shadow p-4">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                      <div className="h-32 bg-gray-100 rounded"></div>
                    </div>
                    <div className="bg-white rounded shadow p-4">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                      <div className="h-32 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded shadow p-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-32 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Split panel layout with filters and live data updates.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 