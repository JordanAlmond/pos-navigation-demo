import { useState } from 'react';
import { Link } from '@remix-run/react';

// Mock data
const mockData = {
  totalRevenue: 124500,
  revenueGrowth: 12.5,
  activeMembers: 1250,
  memberGrowth: 8.2,
  avgWashesPerDay: 185,
  washGrowth: 15.3,
  topLocations: [
    { name: 'Downtown Branch', revenue: 45000, washes: 850 },
    { name: 'Westside Location', revenue: 38000, washes: 720 },
    { name: 'North Station', revenue: 28000, washes: 520 },
    { name: 'East End', revenue: 13500, washes: 260 }
  ],
  membershipTiers: [
    { name: 'Basic', count: 450, percentage: 36 },
    { name: 'Premium', count: 550, percentage: 44 },
    { name: 'Elite', count: 250, percentage: 20 }
  ]
};

export default function AnalyticsDashboardLayout() {
  const [timeRange, setTimeRange] = useState('month');
  const [selectedLocation, setSelectedLocation] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <div className="flex items-center space-x-4">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="rounded-lg border-gray-300 text-sm"
              >
                <option value="all">All Locations</option>
                {mockData.topLocations.map((location) => (
                  <option key={location.name} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
              <div className="flex rounded-lg border border-gray-300 p-1">
                <button
                  onClick={() => setTimeRange('week')}
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === 'week'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setTimeRange('month')}
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === 'month'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Month
                </button>
                <button
                  onClick={() => setTimeRange('quarter')}
                  className={`px-3 py-1 text-sm rounded-md ${
                    timeRange === 'quarter'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Quarter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Revenue Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Total Revenue</h3>
              <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${
                mockData.revenueGrowth >= 0
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {mockData.revenueGrowth >= 0 ? '+' : ''}{mockData.revenueGrowth}%
              </span>
            </div>
            <div className="flex items-baseline">
              <p className="text-3xl font-semibold text-gray-900">
                ${(mockData.totalRevenue).toLocaleString()}
              </p>
              <p className="ml-2 text-sm text-gray-500">this {timeRange}</p>
            </div>
            <div className="mt-4 h-16 bg-gray-100 rounded">
              {/* Placeholder for revenue chart */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Revenue Chart
              </div>
            </div>
          </div>

          {/* Active Members Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Active Members</h3>
              <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${
                mockData.memberGrowth >= 0
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {mockData.memberGrowth >= 0 ? '+' : ''}{mockData.memberGrowth}%
              </span>
            </div>
            <div className="flex items-baseline">
              <p className="text-3xl font-semibold text-gray-900">
                {mockData.activeMembers.toLocaleString()}
              </p>
              <p className="ml-2 text-sm text-gray-500">members</p>
            </div>
            <div className="mt-4 h-16 bg-gray-100 rounded">
              {/* Placeholder for members chart */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Members Chart
              </div>
            </div>
          </div>

          {/* Average Washes Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Avg. Washes/Day</h3>
              <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${
                mockData.washGrowth >= 0
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {mockData.washGrowth >= 0 ? '+' : ''}{mockData.washGrowth}%
              </span>
            </div>
            <div className="flex items-baseline">
              <p className="text-3xl font-semibold text-gray-900">
                {mockData.avgWashesPerDay}
              </p>
              <p className="ml-2 text-sm text-gray-500">washes</p>
            </div>
            <div className="mt-4 h-16 bg-gray-100 rounded">
              {/* Placeholder for washes chart */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Washes Chart
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Location Performance */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Location Performance</h3>
            <div className="space-y-4">
              {mockData.topLocations.map((location) => (
                <div key={location.name} className="flex items-center">
                  <div className="w-32 truncate">
                    <div className="text-sm font-medium text-gray-900">{location.name}</div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex items-center">
                      <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600"
                          style={{
                            width: `${(location.revenue / mockData.topLocations[0].revenue) * 100}%`
                          }}
                        />
                      </div>
                      <span className="ml-4 text-sm text-gray-500">
                        ${location.revenue.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Distribution */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Membership Distribution</h3>
            <div className="grid grid-cols-3 gap-4">
              {mockData.membershipTiers.map((tier) => (
                <div key={tier.name} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-2">
                    <span className="text-xl font-semibold text-blue-600">
                      {tier.percentage}%
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{tier.name}</div>
                  <div className="text-sm text-gray-500">{tier.count} members</div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-48 bg-gray-100 rounded">
              {/* Placeholder for membership distribution chart */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Membership Distribution Chart
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Stats Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Detailed Statistics</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Washes
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg. per Wash
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockData.topLocations.map((location) => (
                  <tr key={location.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {location.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                      ${location.revenue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                      {location.washes.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                      ${(location.revenue / location.washes).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 