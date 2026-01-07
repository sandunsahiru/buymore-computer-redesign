const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "IT Hardware & Software Solutions",
      description: "Complete range of IT products including computers, laptops, printers, mobile phones, and software solutions for businesses and individuals.",
      features: ["Latest Computer & Laptop Models", "Mobile Devices", "Printers & Peripherals", "Licensed Software", "Genuine Products Only"],
      badge: "Most Popular"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "CCTV & Security Systems",
      description: "Professional security solutions including CCTV installation, monitoring, and complete security infrastructure for businesses and homes.",
      features: ["HD Camera Installation", "24/7 Monitoring Support", "Remote Viewing", "Security Infrastructure", "Authorized Hikvision & Dahua Partner"],
      badge: "24/7 Support"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Network Infrastructure",
      description: "Complete network solutions including design, installation, and maintenance of business networks with optimal performance and security.",
      features: ["Network Design & Setup", "Router & Switch Configuration", "WiFi Solutions", "Network Security", "Performance Optimization"],
      badge: null
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Annual Maintenance Contracts (AMC)",
      description: "Comprehensive maintenance packages with transparent pricing, proactive system monitoring, and priority support to safeguard your IT investments.",
      features: ["Preventive Maintenance", "Priority Support", "Transparent Pricing", "Regular System Checks", "Discounts on Pre-Payment"],
      badge: "Best Value"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Data Backup Solutions",
      description: "Secure and reliable data backup systems to protect your critical business data with automated backups and quick recovery options.",
      features: ["Automated Backups", "Cloud & Local Storage", "Disaster Recovery", "Data Encryption", "24/7 Monitoring"],
      badge: null
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Technical Repair Services",
      description: "Expert repair services for computers, printers, mobile devices, and all IT equipment with rapid response and genuine parts.",
      features: ["Computer & Laptop Repairs", "Printer Servicing", "Mobile Device Repairs", "Hardware Upgrades", "Quick Turnaround"],
      badge: "Expert Service"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      title: "Event Equipment Rental",
      description: "Complete event equipment rental service with projectors, sound systems, and professional technical support for all your events.",
      features: ["Projectors & Screens", "Sound Systems", "Technician Included", "Laptop Provided", "Flexible Duration"],
      badge: "New Service"
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-accent-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Expert Solutions
            </span>
          </div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional technology services delivered by certified experts with years of experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary/30 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-secondary to-secondary-dark text-primary px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-secondary-light to-secondary rounded-xl text-primary group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Get Quote Link */}
                <div className="pt-6 border-t border-gray-100">
                  <a href="#contact" className="text-primary font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    Get a Quote
                    <svg className="w-5 h-5 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Guarantees */}
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary to-primary-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Quality Guaranteed</h4>
            <p className="text-gray-600">All services backed by our quality guarantee and warranty</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-secondary to-secondary-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Fast Turnaround</h4>
            <p className="text-gray-600">Quick and efficient service delivery without compromising quality</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-primary to-primary-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h4>
            <p className="text-gray-600">Certified professionals with extensive industry experience</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary via-primary-dark to-primary-light rounded-2xl p-8 sm:p-10 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need a Custom Service Package?</h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100 max-w-2xl mx-auto">
                We create tailored service solutions to match your unique requirements and budget
              </p>
              <a href="#contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Contact Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
