import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Memberships" },
    { name: "description", content: "Membership management and analytics" },
  ];
};

export default function Memberships() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Membership Management</h1>

      {/* Membership Stats */}
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Total Members</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">2,547</p>
          <p className="mt-1 text-sm text-green-600">↑ 125 this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Active Members</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">2,103</p>
          <p className="mt-1 text-sm text-green-600">82.5% active rate</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Premium Members</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">892</p>
          <p className="mt-1 text-sm text-green-600">42.4% conversion rate</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Avg. Membership Age</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">1.8y</p>
          <p className="mt-1 text-sm text-gray-600">↑ 0.3y from last year</p>
        </div>
      </div>

      {/* Membership Tiers */}
      <div className="bg-white rounded-lg shadow-md mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Membership Tiers</h2>
        </div>
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Basic</h3>
              <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic Features
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email Support
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                View Details
              </button>
            </div>

            <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Pro</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Popular</span>
              </div>
              <p className="text-3xl font-bold mb-4">$19.99<span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All Basic Features
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority Support
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced Analytics
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">$49.99<span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All Pro Features
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Support
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom Solutions
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Members */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Recent Members</h2>
            <button className="text-blue-600 hover:text-blue-800">View All</button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">JD</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold">John Doe</h3>
                <p className="text-sm text-gray-600">Pro Member • Joined March 15, 2024</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">AS</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold">Alice Smith</h3>
                <p className="text-sm text-gray-600">Basic Member • Joined March 14, 2024</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">RJ</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-semibold">Robert Johnson</h3>
                <p className="text-sm text-gray-600">Enterprise Member • Joined March 12, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 