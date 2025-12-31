const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Computer Repair & Maintenance",
      description: "Expert repair services for desktops and laptops with genuine parts and professional technicians.",
      features: ["Hardware Repairs", "Software Troubleshooting", "Virus Removal", "Data Recovery", "System Upgrades"],
      badge: "Most Popular"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "CCTV Installation & Setup",
      description: "Professional installation and configuration of security camera systems for complete peace of mind.",
      features: ["Site Survey", "Professional Installation", "System Configuration", "Remote Access Setup", "Training & Support"],
      badge: null
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Printer Repair & Service",
      description: "Complete printer repair and maintenance services for all major brands with quick turnaround.",
      features: ["All Brands Supported", "Parts Replacement", "Print Quality Issues", "Maintenance Plans", "Urgent Repairs"],
      badge: null
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs using modern technologies and best practices.",
      features: ["Web Applications", "Mobile Apps", "Custom Solutions", "API Integration", "Database Design"],
      badge: "Professional"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Design & Development",
      description: "Professional, responsive websites that drive results and grow your online presence effectively.",
      features: ["Responsive Design", "E-commerce Sites", "CMS Development", "SEO Optimization", "Hosting & Support"],
      badge: "Professional"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Strategic digital marketing services to boost your brand visibility and engage your target audience.",
      features: ["Social Media Marketing", "Content Creation", "Campaign Management", "Analytics & Reporting", "Brand Strategy"],
      badge: "Professional"
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
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

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
