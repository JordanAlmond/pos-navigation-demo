import { useState } from 'react';
import { Link } from '@remix-run/react';

// Mock data
const mockCustomer = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  phone: '(555) 123-4567',
  plan: 'Premium',
  status: 'Active',
  joinDate: '2023-09-15',
  lastVisit: '2024-03-20',
  totalSpent: 890,
  visits: 24,
  preferredLocation: 'Downtown Branch',
  notes: 'Prefers weekend visits, usually early morning.',
  paymentMethod: {
    type: 'Credit Card',
    last4: '4242',
    expiry: '09/25'
  },
  recentTransactions: [
    { id: 1, date: '2024-03-20', service: 'Premium Wash', amount: 45 },
    { id: 2, date: '2024-03-13', service: 'Interior Clean', amount: 35 },
    { id: 3, date: '2024-03-06', service: 'Premium Wash', amount: 45 }
  ],
  membershipBenefits: [
    'Unlimited Premium Washes',
    'Free Interior Cleaning (2x/month)',
    'Priority Lane Access',
    'Mobile App Check-in'
  ]
};

export default function DetailPageLayout() {
  const [showConfirmCancel, setShowConfirmCancel] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <Link to="#" className="text-blue-600 hover:text-blue-700">
                ← Back to Customers
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mt-2">Customer Details</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              mockCustomer.status === 'Active'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {mockCustomer.status}
            </span>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Left Column - Customer Details */}
          <div className="flex-1">
            {/* Basic Information */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-600">
                    {mockCustomer.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900">{mockCustomer.name}</h2>
                    <div className="mt-1 text-sm text-gray-500">Member since {mockCustomer.joinDate}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Email</label>
                    <div className="mt-1 text-sm text-gray-900">{mockCustomer.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Phone</label>
                    <div className="mt-1 text-sm text-gray-900">{mockCustomer.phone}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Preferred Location</label>
                    <div className="mt-1 text-sm text-gray-900">{mockCustomer.preferredLocation}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Total Visits</label>
                    <div className="mt-1 text-sm text-gray-900">{mockCustomer.visits} visits</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Details */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Membership Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Current Plan</label>
                      <div className="mt-1">
                        <span className={`px-2 py-1 text-sm font-medium rounded-full ${
                          mockCustomer.plan === 'Premium'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {mockCustomer.plan}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Total Spent</label>
                      <div className="mt-1 text-lg font-semibold text-gray-900">
                        ${mockCustomer.totalSpent}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Benefits</label>
                    <ul className="space-y-2">
                      {mockCustomer.membershipBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Transactions</h3>
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockCustomer.recentTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {transaction.service}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                            ${transaction.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="w-80">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Upgrade Membership
                  </button>
                  <button
                    onClick={() => setShowConfirmCancel(true)}
                    className="w-full px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg hover:bg-red-50"
                  >
                    Cancel Membership
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-gray-200 rounded flex items-center justify-center">
                      💳
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        •••• {mockCustomer.paymentMethod.last4}
                      </div>
                      <div className="text-sm text-gray-500">
                        Expires {mockCustomer.paymentMethod.expiry}
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Edit
                  </button>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Notes</h3>
                <div className="text-sm text-gray-600">
                  {mockCustomer.notes}
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cancel Membership Modal */}
        {showConfirmCancel && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Cancel Membership</h3>
              <p className="text-sm text-gray-500 mb-4">
                Are you sure you want to cancel this membership? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowConfirmCancel(false)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Keep Membership
                </button>
                <button
                  onClick={() => setShowConfirmCancel(false)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Confirm Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 