'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Partners = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      name: 'Alpha Apparel',
      logo: 'https://buymoretech.lk/wp-content/uploads/2025/02/Alpha-Apperal.png'
    },
    {
      name: 'BIMT Campus',
      logo: 'https://buymoretech.lk/wp-content/uploads/2025/02/BIMT-Campus.png'
    },
    {
      name: 'Client Partner',
      logo: 'https://buymoretech.lk/wp-content/uploads/2025/02/Untitled-1.png'
    },
  ];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone items for infinite scroll
    const scrollerInner = scroller.querySelector('.scroller-inner');
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by leading brands worldwide
          </p>
        </div>

        {/* Partners Slider */}
        <div ref={scrollerRef} className="scroller" data-speed="slow">
          <div className="scroller-inner flex gap-8 sm:gap-12 md:gap-16 items-center animate-scroll">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="w-40 sm:w-48 md:w-56 h-20 sm:h-24 relative flex items-center justify-center bg-white rounded-lg p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroller {
          max-width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .scroller-inner {
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .scroller:hover .scroller-inner {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
