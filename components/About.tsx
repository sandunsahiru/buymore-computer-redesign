const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </span>
          </div>
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Your trusted technology partner since 2015, delivering innovative, reliable, and customized IT solutions
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              BuyMore Computer (Pvt) Ltd
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              BuyMore Computer (Pvt) Ltd is a trusted and dynamic technology solutions provider located at No 5/1 Colombo Road, Polgahawela. Established in 2015 to meet the growing demand for reliable IT products and services, we specialize in offering comprehensive solutions tailored to the needs of both individual and corporate clients.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We pride ourselves on being a one-stop destination for all your technology needs, serving clients across Sri Lanka with dedication and expertise.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="bg-secondary rounded-full p-4 mr-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-100 leading-relaxed text-lg">
              To be Sri Lanka&apos;s most trusted technology partner by delivering innovative, reliable, and customized IT solutions that empower businesses and individuals to thrive in a digital world.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-secondary to-secondary-dark text-primary rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="bg-primary rounded-full p-4 mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="leading-relaxed text-lg">
              At BuyMore Computer, we are committed to providing comprehensive tech solutions, ensuring unmatched reliability with 24/7 support, customizing solutions for every need, building long-term partnerships through Annual Maintenance Contracts, and driving innovation with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Mission Points */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Stand For</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Solutions</h4>
                <p className="text-gray-600 text-sm">One-stop destination for all IT products and expert technical services</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Rapid-response repairs and support, minimizing downtime for clients</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Customized Solutions</h4>
                <p className="text-gray-600 text-sm">Tailored IT and security solutions matching unique business requirements</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Long-Term Partnerships</h4>
                <p className="text-gray-600 text-sm">Annual Maintenance Contracts with transparent pricing and proactive monitoring</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Driving Innovation</h4>
                <p className="text-gray-600 text-sm">Continuously upgrading expertise and technology for cutting-edge solutions</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
                <p className="text-gray-600 text-sm">Value for money across all products and services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
