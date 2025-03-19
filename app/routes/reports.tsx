import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Reports" },
    { name: "description", content: "Business reports and analytics" },
  ];
};

export default function Reports() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>

      {/* Report filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div>
            <label htmlFor="report-type" className="block text-sm font-medium text-gray-700 mb-1">
              Report Type
            </label>
            <select
              id="report-type"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option>Sales Report</option>
              <option>Revenue Report</option>
              <option>Customer Report</option>
              <option>Inventory Report</option>
            </select>
          </div>

          <div>
            <label htmlFor="date-range" className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <select
              id="date-range"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Custom Range</option>
            </select>
          </div>

          <div>
            <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-1">
              Format
            </label>
            <select
              id="format"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Recent Reports</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Monthly Sales Report</h3>
                <p className="text-sm text-gray-600">Generated on March 1, 2024</p>
              </div>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Download PDF
              </button>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Q1 Revenue Analysis</h3>
                <p className="text-sm text-gray-600">Generated on February 28, 2024</p>
              </div>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Download PDF
              </button>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Customer Satisfaction Report</h3>
                <p className="text-sm text-gray-600">Generated on February 25, 2024</p>
              </div>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Reports */}
      <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Scheduled Reports</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Weekly Sales Summary</h3>
                <p className="text-sm text-gray-600">Every Monday at 9:00 AM</p>
              </div>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800"
              >
                Edit Schedule
              </button>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Monthly Performance Report</h3>
                <p className="text-sm text-gray-600">1st of every month at 8:00 AM</p>
              </div>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800"
              >
                Edit Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 