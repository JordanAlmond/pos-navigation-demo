import { useState } from 'react';
import { Link } from '@remix-run/react';

// Mock data
const mockData = {
  customers: [
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Premium', status: 'Active', lastVisit: '2024-03-19', totalSpent: 450 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Basic', status: 'Inactive', lastVisit: '2024-02-28', totalSpent: 150 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', plan: 'Elite', status: 'Active', lastVisit: '2024-03-20', totalSpent: 890 },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', plan: 'Premium', status: 'Active', lastVisit: '2024-03-18', totalSpent: 560 },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', plan: 'Basic', status: 'Pending', lastVisit: '2024-03-15', totalSpent: 220 },
    { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', plan: 'Elite', status: 'Active', lastVisit: '2024-03-20', totalSpent: 1200 },
    { id: 7, name: 'James Wilson', email: 'james@example.com', plan: 'Premium', status: 'Active', lastVisit: '2024-03-19', totalSpent: 670 },
    { id: 8, name: 'Emily Davis', email: 'emily@example.com', plan: 'Basic', status: 'Inactive', lastVisit: '2024-02-25', totalSpent: 90 },
  ]
};

export default function ListTableLayout() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [sortConfig, setSortConfig] = useState({ key: 'lastVisit', direction: 'desc' });
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPlan, setFilterPlan] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and sort data
  const filteredData = mockData.customers
    .filter(customer => {
      const matchesStatus = filterStatus === 'all' || customer.status === filterStatus;
      const matchesPlan = filterPlan === 'all' || customer.plan === filterPlan;
      const matchesSearch = searchQuery === '' || 
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesPlan && matchesSearch;
    })
    .sort((a, b) => {
      const key = sortConfig.key as keyof typeof mockData.customers[0];
      if (a[key] < b[key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleSelectAll = () => {
    if (selectedItems.length === filteredData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredData.map(item => item.id));
    }
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white h-screen shadow-lg">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Customers</h2>
            <nav className="space-y-2">
              <Link to="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
                <span className="mr-3">👥</span>
                All Customers
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">⭐</span>
                VIP Members
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">⚠️</span>
                At Risk
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📊</span>
                Reports
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Customer Management</h1>
            
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-4 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Search customers..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filterPlan}
                    onChange={(e) => setFilterPlan(e.target.value)}
                  >
                    <option value="all">All Plans</option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="Elite">Elite</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Export
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Add Customer
                  </button>
                </div>
              </div>
              {selectedItems.length > 0 && (
                <div className="p-4 bg-blue-50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-700">{selectedItems.length} items selected</span>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm text-blue-700 hover:bg-blue-100 rounded">
                        Send Email
                      </button>
                      <button className="px-3 py-1 text-sm text-red-700 hover:bg-red-100 rounded">
                        Delete Selected
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedItems.length === filteredData.length}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('name')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Name</span>
                        {sortConfig.key === 'name' && (
                          <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('plan')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Plan</span>
                        {sortConfig.key === 'plan' && (
                          <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('status')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Status</span>
                        {sortConfig.key === 'status' && (
                          <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('lastVisit')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Last Visit</span>
                        {sortConfig.key === 'lastVisit' && (
                          <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => handleSort('totalSpent')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Total Spent</span>
                        {sortConfig.key === 'totalSpent' && (
                          <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(customer.id)}
                          onChange={() => handleSelectItem(customer.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500 text-sm">
                                {customer.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                            <div className="text-sm text-gray-500">{customer.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          customer.plan === 'Elite'
                            ? 'bg-purple-100 text-purple-800'
                            : customer.plan === 'Premium'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {customer.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          customer.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : customer.status === 'Inactive'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.lastVisit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${customer.totalSpent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 