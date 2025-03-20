import { useState } from 'react';
import { Link } from '@remix-run/react';

// Mock data
const mockData = {
  washCount: {
    today: 342,
    trend: '+12%',
    lastWeek: [280, 310, 290, 320, 350, 330, 342]
  },
  revenue: {
    today: 4850,
    trend: '+8%',
    lastWeek: [4200, 4300, 4100, 4600, 4700, 4500, 4850]
  },
  churnAlerts: [
    { id: 1, customer: 'John Doe', risk: 'High', lastVisit: '45 days ago', spending: -35 },
    { id: 2, customer: 'Jane Smith', risk: 'Medium', lastVisit: '30 days ago', spending: -20 },
    { id: 3, customer: 'Mike Johnson', risk: 'High', lastVisit: '60 days ago', spending: -45 }
  ],
  quickInsights: [
    { id: 1, title: 'Peak Hours', content: '2PM - 5PM', trend: 'Consistent with last week' },
    { id: 2, title: 'Popular Service', content: 'Premium Wash', trend: 'Up 15% this week' }
  ]
};

export default function DataFirstDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 bg-white shadow-lg">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Dashboard</h2>
            <nav className="space-y-2">
              <Link to="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
                <span className="mr-3">📊</span>
                Overview
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">💰</span>
                Revenue
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">👥</span>
                Customers
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">⚙️</span>
                Settings
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Dashboard Overview</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedPeriod('today')}
                className={`px-4 py-2 rounded-lg ${
                  selectedPeriod === 'today'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                Today
              </button>
              <button
                onClick={() => setSelectedPeriod('week')}
                className={`px-4 py-2 rounded-lg ${
                  selectedPeriod === 'week'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                This Week
              </button>
              <button
                onClick={() => setSelectedPeriod('month')}
                className={`px-4 py-2 rounded-lg ${
                  selectedPeriod === 'month'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                This Month
              </button>
            </div>
          </div>

          {/* KPI Grid - Modified for responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
            {/* Live Wash Count */}
            <div className="bg-white rounded-lg shadow p-6 col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Live Wash Count</h3>
                <span className="text-green-500 text-sm font-medium">{mockData.washCount.trend}</span>
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{mockData.washCount.today}</p>
                <p className="ml-2 text-sm text-gray-500">washes today</p>
              </div>
              <div className="mt-4 h-16 bg-gray-50 rounded-lg"></div>
            </div>

            {/* Revenue */}
            <div className="bg-white rounded-lg shadow p-6 col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
                <span className="text-green-500 text-sm font-medium">{mockData.revenue.trend}</span>
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">${mockData.revenue.today}</p>
                <p className="ml-2 text-sm text-gray-500">today</p>
              </div>
              <div className="mt-4 h-16 bg-gray-50 rounded-lg"></div>
            </div>

            {/* Churn Risk */}
            <div className="bg-white rounded-lg shadow p-6 col-span-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Churn Risk</h3>
                <span className="text-red-500 text-sm font-medium">3 alerts</span>
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">High</p>
                <p className="ml-2 text-sm text-gray-500">attention needed</p>
              </div>
              <div className="mt-4 h-16 bg-gray-50 rounded-lg"></div>
            </div>
          </div>

          {/* Charts Grid - Modified for responsiveness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Wash Volume Trend */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Wash Volume Trend</h3>
              <div className="h-64 bg-gray-50 rounded-lg"></div>
            </div>

            {/* Revenue Trend */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
              <div className="h-64 bg-gray-50 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Right Panel - Modified for responsiveness */}
        <div className="w-full lg:w-80 bg-white border-t lg:border-l lg:border-t-0 border-gray-200 p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Insights</h2>
          
          {/* Churn Alerts */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Churn Alerts</h3>
            <div className="space-y-4">
              {mockData.churnAlerts.map(alert => (
                <div key={alert.id} className="bg-red-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{alert.customer}</p>
                      <p className="text-sm text-gray-500">Last visit: {alert.lastVisit}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      alert.risk === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {alert.risk}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm text-red-600">{alert.spending}% spending</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              {mockData.quickInsights.map(insight => (
                <div key={insight.id} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-900">{insight.title}</h4>
                  <p className="text-lg font-semibold text-gray-900 mt-1">{insight.content}</p>
                  <p className="text-sm text-gray-500 mt-1">{insight.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 