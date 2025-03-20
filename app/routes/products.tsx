import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Products" },
    { name: "description", content: "Product management and package configuration" },
  ];
};

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>
            
      {/* Product Packages Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Package */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Wash</h3>
            <p className="text-gray-600 mb-4">Entry-level package with essential services</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Exterior Wash
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Spot-Free Rinse
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Power Dry
              </li>
            </ul>
            <p className="text-lg font-semibold text-gray-800">$19.99/month</p>
          </div>

          {/* Premium Package */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Wash</h3>
            <p className="text-gray-600 mb-4">Enhanced package with additional features</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                All Basic Features
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Wheel Cleaning
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Undercarriage Wash
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Triple Foam Polish
              </li>
            </ul>
            <p className="text-lg font-semibold text-gray-800">$29.99/month</p>
          </div>

          {/* Ultimate Package */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ultimate Wash</h3>
            <p className="text-gray-600 mb-4">Complete package with premium services</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                All Premium Features
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Hot Wax Treatment
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Rain-X Protection
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Interior Vacuum
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                Tire Shine
              </li>
            </ul>
            <p className="text-lg font-semibold text-gray-800">$39.99/month</p>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add-on Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">+</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Interior Detail</h3>
                <p className="text-sm text-gray-500">$15.00 per visit</p>
              </div>
            </div>
            <p className="text-gray-600">Deep cleaning of all interior surfaces</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">+</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Clay Bar Treatment</h3>
                <p className="text-sm text-gray-500">$25.00 per visit</p>
              </div>
            </div>
            <p className="text-gray-600">Remove contaminants and restore shine</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600">+</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Ceramic Coating</h3>
                <p className="text-sm text-gray-500">$30.00 per visit</p>
              </div>
            </div>
            <p className="text-gray-600">Long-lasting paint protection</p>
          </div>
        </div>
      </div>

      {/* Seasonal Promotions */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Promotions</h2>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Summer Special Offer</h3>
          <p className="mb-4">Get 20% off any package when you sign up for 3 months</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              No commitment required
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Free upgrade in first month
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Bonus reward points
            </li>
          </ul>
          <p className="text-sm">*Offer valid until August 31st</p>
        </div>
      </div>
    </div>
  );
} 