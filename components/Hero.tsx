'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow images related to your business
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      alt: 'Modern Computer Setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      alt: 'Computer Repair and Maintenance',
    },
    {
      url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      alt: 'CCTV Security System',
    },
    {
      url: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800',
      alt: 'Laptop and Technology',
    },
    {
      url: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800',
      alt: 'Desktop Computer Workspace',
    },
  ];

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="bg-secondary px-4 py-2 rounded-full text-sm font-semibold text-primary">
                Since 2015 - Your Trusted Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Quality Tech
              <span className="block text-secondary">Solutions</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed">
              Premium computers, expert repairs, CCTV systems, and cutting-edge tech gadgets for all your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#services" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Explore Services
              </Link>
              <Link href="#contact" className="bg-transparent border-2 border-white text-secondary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-primary shadow-lg">
                Get in Touch
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary">10+</div>
                <div className="text-xs sm:text-sm text-gray-200">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary">1000+</div>
                <div className="text-xs sm:text-sm text-gray-200">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary">24/7</div>
                <div className="text-xs sm:text-sm text-gray-200">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Slideshow */}
          <div className="relative hidden md:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Slideshow Images */}
              <div className="relative h-[400px] lg:h-[500px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={slide.url}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-secondary w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl z-20">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Quality Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
