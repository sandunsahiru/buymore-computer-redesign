import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function TechNETEventPage() {
  const eventImages = [
    { src: '/images/events/01/1.jpg', alt: 'TechNET Event Photo 1' },
    { src: '/images/events/01/2.jpg', alt: 'TechNET Event Photo 2' },
    { src: '/images/events/01/3.jpg', alt: 'TechNET Event Photo 3' },
    { src: '/images/events/01/4.jpg', alt: 'TechNET Event Photo 4' },
    { src: '/images/events/01/5.jpg', alt: 'TechNET Event Photo 5' },
    { src: '/images/events/01/6.jpg', alt: 'TechNET Event Photo 6' },
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
              <span className="text-primary font-medium">TechNET with Malinda Alahakoon</span>
            </div>
          </div>
        </section>

        {/* Hero Section with Main Image */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/images/events/01/main.jpg"
                alt="TechNET with Malinda Alahakoon - Main Event Photo"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Event Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Tech Talk
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                TechNET with Malinda Alahakoon
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-6">
                ESOFT Metro Campus | Batch 62
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
                    <p className="text-gray-700">December 19, 2025</p>
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
                    <p className="text-gray-700">9:00 AM – 12:00 PM</p>
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
                    <h3 className="font-semibold text-gray-900 mb-1">Venue</h3>
                    <p className="text-gray-700">ESOFT Metro Campus, Kurunegala (Degree Division)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About This Event</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-primary">TechNET is here!</strong> Join Batch 62 for an engaging tech talk session with industry expert <strong>Mr. Malinda Alahakoon</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is your opportunity to gain insights, ask questions, and connect with peers shaping the future of technology. The session covered cutting-edge topics in the tech industry, providing students with valuable knowledge and practical insights from a seasoned professional.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This event was held in collaboration with <strong className="text-primary">ESOFT Metro Campus</strong> and <strong className="text-primary">BuyMore Computer</strong>, bringing together education and industry expertise to empower the next generation of tech professionals.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Event Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Industry Expert Speaker</h3>
                    <p className="text-white/90 text-sm">Insights from Mr. Malinda Alahakoon, a leading tech industry professional</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Interactive Q&A Session</h3>
                    <p className="text-white/90 text-sm">Students had the opportunity to ask questions and engage directly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Networking Opportunity</h3>
                    <p className="text-white/90 text-sm">Connect with fellow tech enthusiasts and industry professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Industry-Academia Collaboration</h3>
                    <p className="text-white/90 text-sm">Bridging the gap between education and real-world tech industry</p>
                  </div>
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

            {/* Partners Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Event Partners</h2>
              <div className="flex flex-wrap justify-center items-center gap-12">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">ESOFT Metro Campus</h3>
                  <p className="text-gray-600">Education Partner</p>
                </div>
                <div className="h-12 w-px bg-gray-300" />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">BuyMore Computer</h3>
                  <p className="text-gray-600">Technology Partner</p>
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
