import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Marketing" },
    { name: "description", content: "Marketing campaigns and analytics" },
  ];
};

export default function Marketing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Marketing Dashboard</h1>

      {/* Campaign Overview */}
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Active Campaigns</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
          <p className="mt-1 text-sm text-green-600">↑ 2 from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Total Reach</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">45.2K</p>
          <p className="mt-1 text-sm text-green-600">↑ 12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Engagement Rate</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">3.8%</p>
          <p className="mt-1 text-sm text-red-600">↓ 0.5% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">2.4%</p>
          <p className="mt-1 text-sm text-green-600">↑ 0.3% from last month</p>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="bg-white rounded-lg shadow-md mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Active Campaigns</h2>
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              New Campaign
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Spring Sale 2024</h3>
                <p className="text-sm text-gray-600">Email Campaign • Ends in 5 days</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <p className="font-medium">15.2K</p>
                  <p className="text-gray-500">Reached</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">4.8%</p>
                  <p className="text-gray-500">CTR</p>
                </div>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Edit</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">New Product Launch</h3>
                <p className="text-sm text-gray-600">Social Media • Ends in 12 days</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <p className="font-medium">8.7K</p>
                  <p className="text-gray-500">Reached</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">3.2%</p>
                  <p className="text-gray-500">CTR</p>
                </div>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Edit</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Calendar */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Upcoming Campaigns</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 rounded-lg p-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold">Summer Collection Launch</h3>
                <p className="text-sm text-gray-600">Starting April 15, 2024</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-purple-100 rounded-lg p-3">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold">Customer Appreciation Week</h3>
                <p className="text-sm text-gray-600">Starting May 1, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 