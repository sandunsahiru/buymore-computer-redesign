import Link from 'next/link';

const Products = () => {
  const products = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Desktop & Laptop Computers",
      description: "Premium quality desktops and laptops from leading brands with warranty and after-sales support.",
      features: ["Latest Configurations", "Gaming PCs", "Business Laptops", "Custom Builds"],
      badge: "Best Sellers"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "CCTV Security Systems",
      description: "High-definition surveillance cameras and complete security solutions for home and business.",
      features: ["HD/4K Cameras", "NVR/DVR Systems", "Night Vision", "Mobile App Access"],
      badge: "Popular"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      ),
      title: "Printers & Accessories",
      description: "Wide range of printers for home and office use with genuine ink and toner supplies.",
      features: ["Inkjet Printers", "Laser Printers", "All-in-One", "Genuine Supplies"],
      badge: null
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Computer Components",
      description: "High-quality computer parts and peripherals for upgrades and custom builds.",
      features: ["Processors & RAM", "Graphics Cards", "Storage Devices", "Keyboards & Mice"],
      badge: null
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      title: "Networking Equipment",
      description: "Professional networking solutions including routers, switches, and Wi-Fi systems.",
      features: ["Routers & Switches", "Wi-Fi Systems", "Network Cables", "Access Points"],
      badge: null
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Tech Gadgets & Accessories",
      description: "Latest tech gadgets, accessories, and peripherals for all your technology needs.",
      features: ["USB Devices", "External Storage", "Cables & Adapters", "Tech Accessories"],
      badge: null
    },
  ];

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Shop With Confidence
            </span>
          </div>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Quality technology products from trusted brands with warranty and support
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-accent-light-gray rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-primary/30 relative overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 inline-block p-4 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* View Products Link */}
              <div className="pt-6 border-t border-gray-200">
                <Link
                  href="https://buymore.lk"
                  target="_blank"
                  className="text-primary font-semibold inline-flex items-center group-hover:gap-2 transition-all"
                >
                  View Products
                  <svg className="w-5 h-5 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Shop CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 sm:p-10 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Visit Our Online Store</h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">
                Browse our complete catalog of products with competitive pricing and fast delivery
              </p>
              <Link
                href="https://buymore.lk"
                target="_blank"
                className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Now at Buymore.lk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
