import { useState } from 'react';
import { Link } from '@remix-run/react';

const steps = [
  { id: 'company', name: 'Company Info', status: 'current' },
  { id: 'locations', name: 'Locations', status: 'upcoming' },
  { id: 'services', name: 'Services', status: 'upcoming' },
  { id: 'team', name: 'Team Members', status: 'upcoming' },
  { id: 'billing', name: 'Billing', status: 'upcoming' }
];

const mockLocations = [
  { id: 1, name: 'Downtown Branch', address: '123 Main St, New York, NY 10001' },
  { id: 2, name: 'Westside Location', address: '456 West Ave, New York, NY 10002' }
];

const mockServices = [
  { id: 1, name: 'Basic Wash', price: 15, duration: '15 min' },
  { id: 2, name: 'Premium Wash', price: 25, duration: '25 min' },
  { id: 3, name: 'Interior Clean', price: 35, duration: '30 min' },
  { id: 4, name: 'Full Detail', price: 150, duration: '120 min' }
];

export default function OnboardingLayout() {
  const [currentStep, setCurrentStep] = useState('company');
  const [formData, setFormData] = useState({
    company: {
      name: '',
      website: '',
      phone: '',
      email: ''
    },
    locations: [],
    services: [],
    team: [],
    billing: {
      plan: 'premium',
      paymentMethod: {}
    }
  });

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Progress Steps */}
        <nav aria-label="Progress" className="mb-12">
          <ol role="list" className="flex items-center justify-between max-w-2xl mx-auto px-8">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="flex-1 relative">
                <div className="flex items-center justify-center">
                  {stepIdx !== 0 && (
                    <div 
                      className={`absolute left-0 right-1/2 -translate-x-1/2 top-4 h-[2px] ${
                        stepIdx <= steps.findIndex(s => s.id === currentStep)
                          ? 'bg-blue-500'
                          : 'bg-gray-200'
                      }`} 
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex flex-col items-center relative">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center relative z-10 bg-white
                      ${stepIdx < steps.findIndex(s => s.id === currentStep)
                        ? 'bg-blue-500' // Completed step
                        : step.id === currentStep
                          ? 'border-2 border-blue-500' // Current step
                          : 'border-2 border-gray-300'} // Future step
                    `}>
                      {stepIdx < steps.findIndex(s => s.id === currentStep) ? (
                        <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className={`text-sm ${
                          step.id === currentStep ? 'text-blue-500' : 'text-gray-500'
                        }`}>
                          {stepIdx + 1}
                        </span>
                      )}
                    </div>
                    <span className={`mt-2 text-xs ${
                      step.id === currentStep ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Form Content */}
        <div className="mt-12">
          {currentStep === 'company' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-8 py-6">
                <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Tell us about your car wash business
                </p>
              </div>
              <div className="border-t border-gray-200 px-8 py-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <input
                      type="url"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="contact@example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'locations' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-8 py-6">
                <h2 className="text-xl font-semibold text-gray-900">Locations</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Add your car wash locations
                </p>
              </div>
              <div className="border-t border-gray-200">
                <ul role="list" className="divide-y divide-gray-200">
                  {mockLocations.map((location) => (
                    <li key={location.id} className="px-8 py-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{location.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">{location.address}</p>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-700">
                          Edit
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-8 py-6">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Location
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'services' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-8 py-6">
                <h2 className="text-xl font-semibold text-gray-900">Services</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Configure your service offerings
                </p>
              </div>
              <div className="border-t border-gray-200">
                <ul role="list" className="divide-y divide-gray-200">
                  {mockServices.map((service) => (
                    <li key={service.id} className="px-8 py-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{service.name}</h3>
                          <div className="mt-1 text-sm text-gray-500">
                            ${service.price} • {service.duration}
                          </div>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-700">
                          Edit
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-8 py-6">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Service
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'team' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-8 py-6">
                <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Invite your team members to join
                </p>
              </div>
              <div className="border-t border-gray-200 px-8 py-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Addresses
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter email addresses, one per line"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Team members will receive an email invitation to join your organization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'billing' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-8 py-6">
                <h2 className="text-xl font-semibold text-gray-900">Billing Setup</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Choose your plan and payment method
                </p>
              </div>
              <div className="border-t border-gray-200 px-8 py-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Select Plan
                    </label>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-sm cursor-pointer hover:border-blue-500">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">Premium</h3>
                            <div className="mt-1 flex items-baseline">
                              <span className="text-2xl font-semibold text-gray-900">$99</span>
                              <span className="ml-1 text-sm text-gray-500">/month</span>
                            </div>
                          </div>
                          <div className="h-5 w-5 rounded-full border-2 border-blue-600">
                            <div className="h-2.5 w-2.5 m-0.5 rounded-full bg-blue-600" />
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-sm cursor-pointer hover:border-blue-500">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">Enterprise</h3>
                            <div className="mt-1 flex items-baseline">
                              <span className="text-2xl font-semibold text-gray-900">$299</span>
                              <span className="ml-1 text-sm text-gray-500">/month</span>
                            </div>
                          </div>
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Payment Method
                    </label>
                    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-gray-200 rounded flex items-center justify-center">
                            💳
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Credit Card</div>
                            <div className="text-sm text-gray-500">Securely stored</div>
                          </div>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-700">
                          Add Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handleBack}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentStep === steps[0].id
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
            }`}
            disabled={currentStep === steps[0].id}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentStep === steps[steps.length - 1].id
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {currentStep === steps[steps.length - 1].id ? 'Complete Setup' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
} 