import { useState } from 'react';
import { Link } from '@remix-run/react';

const settingsSections = [
  { id: 'general', name: 'General', icon: '⚙️' },
  { id: 'notifications', name: 'Notifications', icon: '🔔' },
  { id: 'billing', name: 'Billing', icon: '💳' },
  { id: 'integrations', name: 'Integrations', icon: '🔌' },
  { id: 'team', name: 'Team Members', icon: '👥' },
  { id: 'security', name: 'Security', icon: '🔒' }
];

const mockSettings = {
  general: {
    companyName: 'SparkleWash Inc.',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    language: 'English'
  },
  notifications: {
    emailAlerts: true,
    pushNotifications: true,
    smsAlerts: false,
    dailyReports: true,
    weeklyReports: true
  },
  billing: {
    plan: 'Enterprise',
    billingCycle: 'Monthly',
    nextBilling: '2024-04-15',
    paymentMethod: {
      type: 'Credit Card',
      last4: '4242',
      expiry: '09/25'
    }
  }
};

export default function SettingsLayout() {
  const [activeSection, setActiveSection] = useState('general');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Settings Sidebar */}
          <div className="w-64 bg-white shadow-sm min-h-screen py-8">
            <h2 className="px-6 text-lg font-semibold text-gray-900 mb-6">Settings</h2>
            <nav className="space-y-1">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center px-6 py-3 text-sm font-medium ${
                    activeSection === section.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-3">{section.icon}</span>
                  {section.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="flex-1 py-8">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {settingsSections.find(s => s.id === activeSection)?.name} Settings
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your {activeSection} settings and preferences
                </p>
              </div>
              <div className="flex items-center space-x-4">
                {saved && (
                  <span className="text-sm text-green-600">Settings saved successfully!</span>
                )}
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </div>

            {/* Settings Forms */}
            {activeSection === 'general' && (
              <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Company Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Company Name</label>
                      <input
                        type="text"
                        defaultValue={mockSettings.general.companyName}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                        <select
                          defaultValue={mockSettings.general.timezone}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option>America/New_York</option>
                          <option>America/Chicago</option>
                          <option>America/Denver</option>
                          <option>America/Los_Angeles</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Date Format</label>
                        <select
                          defaultValue={mockSettings.general.dateFormat}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option>MM/DD/YYYY</option>
                          <option>DD/MM/YYYY</option>
                          <option>YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'notifications' && (
              <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h3>
                  <div className="space-y-4">
                    {Object.entries(mockSettings.notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium text-gray-700">
                            {key.split(/(?=[A-Z])/).join(' ')}
                          </label>
                          <p className="text-sm text-gray-500">
                            Receive notifications for {key.toLowerCase()}
                          </p>
                        </div>
                        <button
                          type="button"
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            value ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                          role="switch"
                          aria-checked={value}
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              value ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'billing' && (
              <div className="space-y-6">
                {/* Current Plan */}
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Current Plan</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {mockSettings.billing.plan} Plan
                      </div>
                      <div className="text-sm text-gray-500">
                        Billed {mockSettings.billing.billingCycle.toLowerCase()}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                      Change Plan
                    </button>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Payment Method</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-gray-200 rounded flex items-center justify-center">
                        💳
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          •••• {mockSettings.billing.paymentMethod.last4}
                        </div>
                        <div className="text-sm text-gray-500">
                          Expires {mockSettings.billing.paymentMethod.expiry}
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Update
                    </button>
                  </div>
                </div>

                {/* Billing History */}
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Billing History</h3>
                  </div>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Mar 15, 2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Enterprise Plan - Monthly
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                          $299.00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-blue-600 hover:text-blue-700">Download</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Feb 15, 2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Enterprise Plan - Monthly
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                          $299.00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-blue-600 hover:text-blue-700">Download</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 