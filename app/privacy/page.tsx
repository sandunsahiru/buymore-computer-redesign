import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Privacy Policy</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: January 6, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Buymore Computer (established 2015), we are committed to protecting your privacy
                and ensuring the security of your personal information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Buymore Computer</strong><br />
                5/1, Colombo Road, Polgahawela, Kurunegala 60300, Sri Lanka<br />
                BuyMore Hotline: (070) 769 6666<br />
                Email: info@buymorecomputer.lk<br />
                Website: www.buymorecomputer.lk
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information</li>
                <li>Account credentials and user profile information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Comments and Interactions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When visitors leave comments on our website, we collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Data shown in the comments form</li>
                <li>Visitor&apos;s IP address</li>
                <li>Browser user agent string for spam detection</li>
                <li>Email addresses (hashed for Gravatar service integration)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Media and Uploads
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you upload images to our website, you should avoid uploading images with embedded location data (EXIF GPS) included, as visitors can download and extract location data from these images.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type, version, and user agent string</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to provide our services including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Computer sales, repairs, and maintenance services</li>
                <li>CCTV system installation and security solutions</li>
                <li>Printer repairs and solutions</li>
                <li>Software development projects</li>
                <li>Web design and development services</li>
                <li>Digital marketing campaigns</li>
                <li>Event equipment rental bookings (projectors, sound systems)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specifically, we use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process and fulfill your orders and service requests</li>
                <li>Schedule appointments and on-site visits</li>
                <li>Provide technical support via BuyMore Hotline (070) 769 6666 or WhatsApp</li>
                <li>Send service-related notifications and updates</li>
                <li>Improve our services and customer experience</li>
                <li>Maintain warranty and service records</li>
                <li>Process rental equipment bookings and deposits</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  Service providers who assist in our operations (payment
                  processors, shipping companies, etc.)
                </li>
                <li>Business partners with your consent</li>
                <li>Law enforcement when required by law</li>
                <li>
                  Other parties in connection with a business transaction (merger,
                  acquisition, etc.)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Third-Party Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may contain embedded content from third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Gravatar:</strong> Profile pictures are provided by Gravatar service.
                  View their privacy policy at:
                  <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    automattic.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Spam Detection:</strong> Automated spam detection services process comment data
                </li>
                <li>
                  <strong>Embedded Content:</strong> Articles on our site may include embedded content
                  (e.g., videos, images, articles). Embedded content from other websites behaves exactly
                  as if you visited the other website directly, and these sites may collect data about you,
                  use cookies, embed additional third-party tracking, and monitor your interaction with
                  that embedded content
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal data for as long as necessary to provide our services and comply with legal obligations:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Comments:</strong> Comments and their metadata are retained indefinitely to enable
                  automatic recognition and approval of follow-up comments
                </li>
                <li>
                  <strong>Account Data:</strong> For registered users, we store the personal information
                  provided in your user profile indefinitely. Users can view, edit, or delete their personal
                  information at any time (except username changes)
                </li>
                <li>
                  <strong>Service Records:</strong> Warranty and service history information is maintained
                  for the duration required for business and legal purposes
                </li>
                <li>
                  <strong>Rental Records:</strong> Event equipment rental records are kept for accounting
                  and liability purposes
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information from unauthorized
                access, disclosure, alteration, or destruction. However, no method
                of transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under Sri Lanka&apos;s Personal Data Protection Act and our privacy commitments, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Right to Access:</strong> You can request to receive an exported file of the
                  personal data we hold about you, including any data you have provided to us
                </li>
                <li>
                  <strong>Right to Rectification:</strong> You can view, edit, and correct inaccurate
                  personal information in your user profile at any time
                </li>
                <li>
                  <strong>Right to Erasure:</strong> You can request that we erase any personal data
                  we hold about you. This does not include any data we are obliged to keep for
                  administrative, legal, or security purposes
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Request a copy of your data in a
                  structured, commonly used format
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Opt-out of marketing communications
                  and withdraw consent where applicable
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To exercise any of these rights, please contact us at info@buymorecomputer.lk or
                call our hotline (070) 769 6666. We will respond to your request within a reasonable timeframe.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your
                browsing experience, analyze website traffic, and personalize content.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Cookies We Use
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Comment Cookies:</strong> If you leave a comment, you may opt-in to save
                  your name, email, and website in cookies for your convenience. These cookies
                  will last for one year
                </li>
                <li>
                  <strong>Login Cookies:</strong> When you log in, we set up login cookies that
                  last for two days. If you select &quot;Remember Me,&quot; your login will persist for
                  two weeks
                </li>
                <li>
                  <strong>Screen Options Cookies:</strong> These save your screen display
                  preferences and last for one year
                </li>
                <li>
                  <strong>Editing Cookies:</strong> When you edit or publish an article, an
                  additional cookie is saved in your browser, containing no personal data
                  and expiring after one day
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                You can control cookies through your browser settings. For detailed information
                about cookies and how we use them, please see our{' '}
                <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong className="block text-gray-900 mb-1">Polgahawela Branch (Main):</strong>
                  <p>5/1, Colombo Road, Polgahawela</p>
                  <p>Kurunegala 60300, Sri Lanka</p>
                </div>
                <div>
                  <strong className="block text-gray-900 mb-1">Kurunegala Branch:</strong>
                  <p>BuyMore Computer, Kurunegala</p>
                </div>
                <div>
                  <strong className="block text-gray-900 mb-1">Contact:</strong>
                  <p>BuyMore Hotline: (070) 769 6666</p>
                  <p>Email: info@buymorecomputer.lk</p>
                </div>
                <div>
                  <strong className="block text-gray-900 mb-1">Business Hours:</strong>
                  <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday: 8:00 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
