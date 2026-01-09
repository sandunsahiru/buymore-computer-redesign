const Newsletter = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Subscribe to our newsletter for the latest tech deals, product launches, and exclusive offers
            </p>
          </div>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all backdrop-blur-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-sm text-white/70 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">5000+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
