'use client';

import { useState } from 'react';

const Location = () => {
  const locations = [
    {
      id: 'polgahawela',
      name: "Polgahawela Branch",
      address: "No 5/1, Colombo Road, Polgahawela",
      city: "Kurunegala",
      postalCode: "60300",
      phone: "037 206 8605",
      whatsapp: "070 601 3096",
      hours: {
        weekdays: "Monday - Saturday: 8:00 AM - 6:00 PM",
        weekend: "Sunday: 8:00 AM - 4:30 PM"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1723956556843!2d80.29661277448541!3d7.334527313208668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33d6068fb0c75%3A0x66e88abda31ad06f!2sBuyMore%20Computer%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1767713303356!5m2!1sen!2slk",
      googleMapsLink: "https://www.google.com/maps/place/BuyMore+Computer+(Pvt)+Ltd/@7.334527313208668,80.29661277448541",
      isMain: true
    },
    {
      id: 'kurunegala',
      name: "Kurunegala Branch",
      address: "184/A Kandy Road",
      city: "Kurunegala",
      postalCode: "",
      phone: "037 207 7061",
      whatsapp: "070 601 3098",
      hours: {
        weekdays: "Monday - Saturday: 8:00 AM - 6:00 PM",
        weekend: "Sunday: 8:00 AM - 4:30 PM"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8374824283505!2d80.36516697448647!3d7.483191011268703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae339db17c8fa4f%3A0xb413aa020d5ebe19!2sBuyMore%20Computer%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1767713424564!5m2!1sen!2slk",
      googleMapsLink: "https://www.google.com/maps/place/BuyMore+Computer+(Pvt)+Ltd/@7.483191011268703,80.36516697448647",
      isMain: false
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-accent-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Visit Us
            </span>
          </div>
          <h2 className="section-title">Our Locations</h2>
          <p className="section-subtitle">
            Visit our stores in Kurunegala for all your computer and tech needs
          </p>
        </div>

        {/* Branch Selector */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex bg-white rounded-xl shadow-lg p-2 gap-2">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedLocation.id === location.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {location.name}
                {location.isMain && (
                  <span className="ml-2 text-xs">⭐</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Location Details and Map */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Location Info Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedLocation.name}
                  </h3>
                  {selectedLocation.isMain && (
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Main Branch
                    </span>
                  )}
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600">{selectedLocation.address}</p>
                    <p className="text-gray-600">{selectedLocation.city} {selectedLocation.postalCode}</p>
                    <p className="text-gray-600">Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Contact</p>
                    <p className="text-gray-600">Phone: {selectedLocation.phone}</p>
                    <p className="text-gray-600">WhatsApp: {selectedLocation.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Business Hours</p>
                    <p className="text-gray-600">{selectedLocation.hours.weekdays}</p>
                    <p className="text-gray-600">{selectedLocation.hours.weekend}</p>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href={selectedLocation.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <iframe
                key={selectedLocation.id}
                src={selectedLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title={`${selectedLocation.name} - BuyMore Computer Location`}
                aria-label={`Map showing ${selectedLocation.name}`}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Service Area Info */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl p-8 sm:p-10 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Serving Kurunegala & Surrounding Areas</h3>
          <p className="text-lg text-gray-100 mb-6 max-w-3xl mx-auto">
            We provide sales, repairs, installations, and technical support throughout Kurunegala district.
            Contact us for home visits, on-site support, and delivery services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0707696666"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/94707696666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-secondary text-primary hover:bg-secondary-dark"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
