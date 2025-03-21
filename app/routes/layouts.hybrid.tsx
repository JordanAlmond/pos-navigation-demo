import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

type SortKey = keyof Omit<Product, 'id'>;
type SortConfig = {
  key: SortKey | '';
  direction: 'ascending' | 'descending' | '';
};

export const meta: MetaFunction = () => {
  return [
    { title: "Hybrid Layout" },
    { name: "description", content: "Combination of sidebar and local navigation patterns" },
  ];
};

// Mock data
const ITEMS_PER_PAGE = 5;
const mockProducts: Product[] = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ['Electronics', 'Clothing', 'Books', 'Home'][Math.floor(Math.random() * 4)],
  price: Math.floor(Math.random() * 1000) + 10,
  stock: Math.floor(Math.random() * 100),
}));

export default function HybridLayout() {
  const [activeTab, setActiveTab] = useState('products');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: '' });

  // Filter logic
  const filteredProducts = mockProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    return true;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const direction = sortConfig.direction === 'ascending' ? 1 : -1;
    if (a[sortConfig.key] < b[sortConfig.key]) return -1 * direction;
    if (a[sortConfig.key] > b[sortConfig.key]) return 1 * direction;
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (key: SortKey) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' 
      ? 'descending' 
      : 'ascending';
    setSortConfig({ key, direction });
  };

  return (
    <div className="min-h-screen">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white h-screen sticky top-0 overflow-y-auto">
          <div className="p-4">
            <Link to="/demo" className="text-white hover:text-gray-300 mb-8 inline-flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Demo
            </Link>
          </div>
          <nav className="p-4">
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <Link to="#dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="#products" className="block py-2 px-4 rounded bg-gray-700">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#customers" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Customers
                </Link>
              </li>
              <li>
                <Link to="#analytics" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Analytics
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-h-screen flex flex-col">
          {/* Top Navigation */}
          <div className="bg-white border-b sticky top-0 z-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center h-16 px-4">
                <nav className="flex-1 flex">
                  <Link 
                    to="#" 
                    className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                  >
                    Overview
                  </Link>
                  <Link 
                    to="#" 
                    className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 border-b-2 border-blue-600"
                  >
                    Products
                  </Link>
                  <Link 
                    to="#" 
                    className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                  >
                    Categories
                  </Link>
                  <Link 
                    to="#" 
                    className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                  >
                    Inventory
                  </Link>
                </nav>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>
            </div>

            {/* Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('products')}
                  className={`${
                    activeTab === 'products'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  All Products
                </button>
                <button
                  onClick={() => setActiveTab('active')}
                  className={`${
                    activeTab === 'active'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Active
                </button>
                <button
                  onClick={() => setActiveTab('archived')}
                  className={`${
                    activeTab === 'archived'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Archived
                </button>
              </nav>
            </div>

            {/* Filters */}
            <div className="mb-8 bg-white p-4 rounded-lg shadow">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex-1 min-w-[200px]">
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="all">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Books">Books</option>
                    <option value="Home">Home</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Content Table */}
            <div className="bg-white shadow rounded-lg mb-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th 
                      onClick={() => handleSort('name')}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      Product
                    </th>
                    <th 
                      onClick={() => handleSort('category')}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      Category
                    </th>
                    <th 
                      onClick={() => handleSort('price')}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      Price
                    </th>
                    <th 
                      onClick={() => handleSort('stock')}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    >
                      Stock
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedProducts.map((product) => (
                    <tr 
                      key={product.id}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${product.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.stock}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing{' '}
                    <span className="font-medium">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span>
                    {' '}-{' '}
                    <span className="font-medium">
                      {Math.min(currentPage * ITEMS_PER_PAGE, sortedProducts.length)}
                    </span>
                    {' '}of{' '}
                    <span className="font-medium">{sortedProducts.length}</span>
                    {' '}results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`${
                          page === currentPage
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                      >
                        {page}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 