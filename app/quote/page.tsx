'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    serviceType: '',
    // POS System fields
    posHosting: '',
    posPlatform: '',
    posProductRange: '',
    // Custom requirements
    customRequirements: ''
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  // Calculate running total based on current selections
  const calculateRunningTotal = () => {
    if (formData.serviceType !== 'pos-system') return 0;

    let total = 0;
    const hosting = posHostingOptions.find(opt => opt.id === formData.posHosting);
    const platform = posPlatformOptions.find(opt => opt.id === formData.posPlatform);
    const productRange = posProductRangeOptions.find(opt => opt.id === formData.posProductRange);

    if (hosting) total += hosting.price;
    if (platform) total += platform.price;
    if (productRange) total += productRange.price;

    return total;
  };

  const services = [
    {
      id: 'pos-system',
      name: 'POS System',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      hasEstimation: true
    },
    {
      id: 'cctv-system',
      name: 'CCTV Security System',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      hasEstimation: false
    },
    {
      id: 'web-development',
      name: 'Web Development',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      hasEstimation: false
    },
    {
      id: 'software-development',
      name: 'Software Development',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      hasEstimation: false
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      hasEstimation: false
    },
    {
      id: 'computer-repair',
      name: 'Computer Repair & Maintenance',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      hasEstimation: false
    },
    {
      id: 'other',
      name: 'Other Services',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      hasEstimation: false
    }
  ];

  const posHostingOptions = [
    { id: 'cloud', name: 'Cloud Hosting', price: 150000, description: 'Access from anywhere, automatic backups' },
    { id: 'local', name: 'Local Hosting', price: 100000, description: 'On-premise installation, one-time cost' }
  ];

  const posPlatformOptions = [
    { id: 'web', name: 'Web Only', price: 0, description: 'Browser-based access' },
    { id: 'web-mobile', name: 'Web + Mobile App', price: 80000, description: 'iOS & Android apps included' }
  ];

  const posProductRangeOptions = [
    { id: 'basic', name: 'Basic (up to 100 products)', price: 0, description: 'Suitable for small shops' },
    { id: 'standard', name: 'Standard (up to 500 products)', price: 50000, description: 'Suitable for medium businesses' },
    { id: 'advanced', name: 'Advanced (up to 2000 products)', price: 120000, description: 'Suitable for large businesses' },
    { id: 'enterprise', name: 'Enterprise (Unlimited products)', price: 200000, description: 'For large-scale operations' }
  ];

  const calculatePOSCost = () => {
    let total = 0;
    const hosting = posHostingOptions.find(opt => opt.id === formData.posHosting);
    const platform = posPlatformOptions.find(opt => opt.id === formData.posPlatform);
    const productRange = posProductRangeOptions.find(opt => opt.id === formData.posProductRange);

    if (hosting) total += hosting.price;
    if (platform) total += platform.price;
    if (productRange) total += productRange.price;

    setEstimatedCost(total);
  };

  const handleNext = () => {
    if (step === 1 && formData.firstName && formData.lastName && formData.email && formData.mobile) {
      setStep(2);
    } else if (step === 2 && formData.serviceType) {
      if (formData.serviceType === 'pos-system') {
        setStep(3);
      } else {
        setStep(5); // Custom requirements step
      }
    } else if (step === 3 && formData.posHosting) {
      setStep(4);
    } else if (step === 4 && formData.posPlatform) {
      setStep(6); // Product range step
    } else if (step === 6 && formData.posProductRange) {
      calculatePOSCost();
      setStep(7); // Final estimation
    } else if (step === 5 && formData.customRequirements) {
      setStep(7); // Final submission for custom quote
    }
  };

  const handleBack = () => {
    if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
    else if (step === 5) setStep(2);
    else if (step === 6) setStep(4);
    else if (step === 7 && formData.serviceType === 'pos-system') setStep(6);
    else if (step === 7) setStep(5);
    else setStep(step - 1);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      serviceType: '',
      posHosting: '',
      posPlatform: '',
      posProductRange: '',
      customRequirements: ''
    });
    setEstimatedCost(0);
    setStep(1);
  };

  const progressPercentage = (step / 7) * 100;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get Your Quote
            </h1>
            <p className="text-lg text-gray-600">
              Let us help you estimate the cost for your project
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-primary">Step {step} of 7</span>
              <span className="text-sm font-medium text-gray-600">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary-light h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Floating Price Display - Only show for POS system after step 2 */}
          {formData.serviceType === 'pos-system' && step >= 3 && step < 7 && (
            <div className="sticky top-24 z-10 mb-8 animate-slideDown">
              <div className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl shadow-2xl p-6 border-4 border-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Current Estimate</p>
                      <p className="text-white text-3xl font-bold animate-pulse">
                        LKR {calculateRunningTotal().toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end space-y-1">
                    {formData.posHosting && (
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          {posHostingOptions.find(opt => opt.id === formData.posHosting)?.name}
                        </span>
                      </div>
                    )}
                    {formData.posPlatform && (
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          {posPlatformOptions.find(opt => opt.id === formData.posPlatform)?.name}
                        </span>
                      </div>
                    )}
                    {formData.posProductRange && (
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-medium">
                          {posProductRangeOptions.find(opt => opt.id === formData.posProductRange)?.name.split('(')[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-8">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Let&apos;s Get Started</h2>
                  <p className="text-gray-600">Please provide your contact information</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="Alex"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="Warren"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="alex@buymorecomputer.lk"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="+94 70 123 4567"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">What Service Do You Need?</h2>
                  <p className="text-gray-600">Select the service you&apos;re interested in</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setFormData({ ...formData, serviceType: service.id })}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                        formData.serviceType === service.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 ${formData.serviceType === service.id ? 'text-primary' : 'text-gray-400'}`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                          {service.hasEstimation && (
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Instant Estimation
                            </span>
                          )}
                        </div>
                        {formData.serviceType === service.id && (
                          <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: POS Hosting */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Hosting Type</h2>
                  <p className="text-gray-600">Where would you like to host your POS system?</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {posHostingOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFormData({ ...formData, posHosting: option.id })}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                        formData.posHosting === option.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-900">{option.name}</h3>
                        {formData.posHosting === option.id && (
                          <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                      <div className="bg-gray-100 rounded-lg px-4 py-2 inline-block">
                        <span className="text-primary font-bold">LKR {option.price.toLocaleString()}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: POS Platform */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Platform</h2>
                  <p className="text-gray-600">Which platform do you need?</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {posPlatformOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFormData({ ...formData, posPlatform: option.id })}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                        formData.posPlatform === option.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-900">{option.name}</h3>
                        {formData.posPlatform === option.id && (
                          <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                      <div className="bg-gray-100 rounded-lg px-4 py-2 inline-block">
                        {option.price === 0 ? (
                          <span className="text-primary font-bold">Included</span>
                        ) : (
                          <span className="text-primary font-bold">+LKR {option.price.toLocaleString()}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: POS Product Range */}
            {step === 6 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Range</h2>
                  <p className="text-gray-600">How many products will you manage?</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {posProductRangeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFormData({ ...formData, posProductRange: option.id })}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                        formData.posProductRange === option.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-900">{option.name}</h3>
                        {formData.posProductRange === option.id && (
                          <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                      <div className="bg-gray-100 rounded-lg px-4 py-2 inline-block">
                        {option.price === 0 ? (
                          <span className="text-primary font-bold">Included</span>
                        ) : (
                          <span className="text-primary font-bold">+LKR {option.price.toLocaleString()}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Custom Requirements */}
            {step === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us Your Requirements</h2>
                  <p className="text-gray-600">Please describe what you need in detail</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    value={formData.customRequirements}
                    onChange={(e) => setFormData({ ...formData, customRequirements: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Please describe your project requirements, timeline, budget range, and any specific features you need..."
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 7: Final Estimation */}
            {step === 7 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-8">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {formData.serviceType === 'pos-system' ? 'Your Estimated Quote' : 'Quote Request Received'}
                  </h2>
                  <p className="text-gray-600">
                    {formData.serviceType === 'pos-system'
                      ? 'Here\'s an estimated cost for your POS system'
                      : 'We\'ll review your requirements and send you a detailed quote'}
                  </p>
                </div>

                {formData.serviceType === 'pos-system' ? (
                  <>
                    {/* Cost Breakdown */}
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="text-gray-700">Hosting Type</span>
                        <span className="font-semibold text-gray-900">
                          {posHostingOptions.find(opt => opt.id === formData.posHosting)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="text-gray-700">Platform</span>
                        <span className="font-semibold text-gray-900">
                          {posPlatformOptions.find(opt => opt.id === formData.posPlatform)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="text-gray-700">Product Range</span>
                        <span className="font-semibold text-gray-900">
                          {posProductRangeOptions.find(opt => opt.id === formData.posProductRange)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-4 bg-white rounded-lg px-4 mt-4">
                        <span className="text-xl font-bold text-gray-900">Estimated Total</span>
                        <span className="text-2xl font-bold text-primary">LKR {estimatedCost.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <div className="flex">
                        <svg className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h3 className="text-sm font-semibold text-yellow-800 mb-1">Please Note</h3>
                          <p className="text-sm text-yellow-700">
                            This is just an estimation. Final pricing may vary based on specific customizations, integrations, training requirements, and other factors. Our team will provide you with a detailed quote.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Your Request Summary</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-600">Name:</span>
                        <p className="font-semibold text-gray-900">{formData.firstName} {formData.lastName}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Email:</span>
                        <p className="font-semibold text-gray-900">{formData.email}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Mobile:</span>
                        <p className="font-semibold text-gray-900">{formData.mobile}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Service:</span>
                        <p className="font-semibold text-gray-900">
                          {services.find(s => s.id === formData.serviceType)?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      alert('Your quote request has been submitted! Our team will contact you within 24 hours.');
                      window.location.href = '/';
                    }}
                    className="btn-primary w-full text-lg py-4"
                  >
                    Request Final Quotation
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full px-6 py-4 border-2 border-primary rounded-lg font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Start New Estimation
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 7 && (
              <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile)) ||
                    (step === 2 && !formData.serviceType) ||
                    (step === 3 && !formData.posHosting) ||
                    (step === 4 && !formData.posPlatform) ||
                    (step === 5 && !formData.customRequirements) ||
                    (step === 6 && !formData.posProductRange)
                  }
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    (step === 1 && (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile)) ||
                    (step === 2 && !formData.serviceType) ||
                    (step === 3 && !formData.posHosting) ||
                    (step === 4 && !formData.posPlatform) ||
                    (step === 5 && !formData.customRequirements) ||
                    (step === 6 && !formData.posProductRange)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                  }`}
                >
                  Continue
                </button>
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Need help or have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0372068605" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us: 037 206 8605
              </a>
              <a href="https://wa.me/94706013096" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: 070 601 3096
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideDown {
            animation: slideDown 0.6s ease-out;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
