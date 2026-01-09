import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function KurunegalaBranchOpeningPage() {
  const eventImages = [
    { src: '/images/events/02/01.png', alt: 'Kurunegala Branch Opening Photo 1' },
    { src: '/images/events/02/02.png', alt: 'Kurunegala Branch Opening Photo 2' },
    { src: '/images/events/02/03.png', alt: 'Kurunegala Branch Opening Photo 3' },
    { src: '/images/events/02/04.png', alt: 'Kurunegala Branch Opening Photo 4' },
    { src: '/images/events/02/05.png', alt: 'Kurunegala Branch Opening Photo 5' },
    { src: '/images/events/02/06.png', alt: 'Kurunegala Branch Opening Photo 6' },
    { src: '/images/events/02/07.png', alt: 'Kurunegala Branch Opening Photo 7' },
    { src: '/images/events/02/08.png', alt: 'Kurunegala Branch Opening Photo 8' },
    { src: '/images/events/02/09.png', alt: 'Kurunegala Branch Opening Photo 9' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/events" className="hover:text-primary transition-colors">
                Events
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-primary font-medium">Kurunegala Branch Opening</span>
            </div>
          </div>
        </section>

        {/* Hero Section with Main Image */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/images/events/02/image.png"
                alt="BuyMore Computer Kurunegala Branch Grand Opening"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Event Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Grand Opening
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                BuyMore Computer Kurunegala Branch Opening
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6">
                Expanding Our Reach to Serve You Better
              </p>
            </div>

            {/* Event Details Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Date</h3>
                    <p className="text-gray-700">September 26, 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Time</h3>
                    <p className="text-gray-700">8:00 AM onwards</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">184/A Kandy Road, Kurunegala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About This Event</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  On <strong className="text-primary">September 26, 2025</strong>, BuyMore Computer celebrated a significant milestone in our journey - the grand opening of our <strong className="text-primary">Kurunegala Branch</strong>. This marks an exciting expansion of our business, bringing our trusted computer solutions and services closer to the heart of Kurunegala city.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Located at <strong>184/A Kandy Road, Kurunegala</strong>, our new branch is strategically positioned to serve customers throughout the Kurunegala district. With over <strong className="text-primary">10 years of industry experience</strong> from our main branch in Polgahawela, we bring the same commitment to quality, expertise, and customer satisfaction to our new location.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The opening day was filled with excitement as customers explored our comprehensive range of products and services. From desktop and laptop computers to CCTV security systems, computer components, networking equipment, and tech gadgets - our Kurunegala branch offers everything you need under one roof.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Beyond sales, our Kurunegala branch provides expert technical services including <strong>computer repair & maintenance</strong>, <strong>CCTV installation & setup</strong>, <strong>printer repair & service</strong>, and comprehensive IT support. We also offer <strong>software development</strong>, <strong>web design & development</strong>, <strong>digital marketing</strong>, and <strong>event equipment rental services</strong> (projectors, sound systems, and more).
                </p>
              </div>
            </div>

            {/* Branch Information */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Kurunegala Branch Information</h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-white/90">184/A Kandy Road</p>
                      <p className="text-white/90">Kurunegala, Sri Lanka</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">Contact</h3>
                      <p className="text-white/90">Phone: 037 207 7061</p>
                      <p className="text-white/90">WhatsApp: 070 601 3098</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:col-span-2">
                  <div className="flex items-start mb-4">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-white/90">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                      <p className="text-white/90">Sunday: 8:00 AM - 4:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0372077061"
                  className="btn-primary bg-white text-primary hover:bg-gray-100"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/94706013098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-secondary text-primary hover:bg-secondary-dark"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Event Video */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Opening Day Highlights</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/tkCe_nIObYg"
                    title="BuyMore Computer Kurunegala Branch Opening"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Event Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Event Gallery</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Location */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Visit Our Location</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full h-[400px] lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8374824283505!2d80.36516697448647!3d7.483191011268703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae339db17c8fa4f%3A0xb413aa020d5ebe19!2sBuyMore%20Computer%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1767713424564!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="BuyMore Computer Kurunegala Branch Location"
                  ></iframe>
                </div>
                <div className="p-6 bg-gray-50 border-t">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">184/A Kandy Road, Kurunegala</h3>
                      <p className="text-gray-600">Get directions to our new branch</p>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/BuyMore+Computer+(Pvt)+Ltd/@7.483191011268703,80.36516697448647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Desktop & Laptop Computers</h3>
                    <p className="text-gray-600 text-sm">Wide range of computers for all needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">CCTV Security Systems</h3>
                    <p className="text-gray-600 text-sm">Sales, installation & maintenance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Computer Repair & Service</h3>
                    <p className="text-gray-600 text-sm">Expert technical support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Software Development</h3>
                    <p className="text-gray-600 text-sm">Custom software solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Web Design & Development</h3>
                    <p className="text-gray-600 text-sm">Professional web solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Event Equipment Rental</h3>
                    <p className="text-gray-600 text-sm">Projectors, sound systems & more</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Link
                href="/events"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Events
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
