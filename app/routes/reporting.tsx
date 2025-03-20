import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Reporting Dashboard" },
    { name: "description", content: "Financial and strategic reporting dashboard" },
  ];
};

export default function Reporting() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Reporting Dashboard</h1>
        <p className="text-gray-600 mb-8">Access financial and strategic reports across your business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Financial Reports */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Financial Reports</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Monthly Financial Summary</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Quarterly Business Review</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Financial Planning</a>
            </li>
          </ul>
        </div>

        {/* Sales & Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales & Revenue</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Location Revenue Analysis</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Sales Performance Metrics</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Revenue Trends</a>
            </li>
          </ul>
        </div>

        {/* Subscription Analytics */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Subscription Analytics</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Growth Metrics</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Retention Analysis</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Churn Reports</a>
            </li>
          </ul>
        </div>

        {/* Transaction Reports */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Transaction Reports</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Refund Analysis</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Chargeback Reports</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Profitability Metrics</a>
            </li>
          </ul>
        </div>

        {/* Employee Reports */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Employee Reports</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Badge Wash Tracking</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Employee Performance</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Corporate Reports</a>
            </li>
          </ul>
        </div>

        {/* Customer Analytics */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Customer Analytics</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">Usage Reports</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Retail Analytics</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">Customer Behavior</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 