import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsOfService() {
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
            <span className="text-gray-600">Terms of Service</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
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
              <p className="text-gray-600 leading-relaxed">
                Welcome to Buymore Computer. These Terms of Service ("Terms")
                govern your use of our website and services. By accessing or
                using our services, you agree to be bound by these Terms. If you
                do not agree with any part of these Terms, you may not access our
                services.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Services Provided
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Buymore Computer, established in 2015, provides the following services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Computer sales and repairs (desktops and laptops)</li>
                <li>CCTV system installation and maintenance</li>
                <li>Printer solutions and repairs</li>
                <li>Software development and custom solutions</li>
                <li>Web design and development services</li>
                <li>Social media marketing and digital marketing</li>
                <li>Event equipment rental (projectors, sound systems, screens)</li>
                <li>Tech gadgets and accessories sales</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Business Hours:</strong><br />
                Monday to Saturday: 8:00 AM – 6:00 PM<br />
                Sunday: 8:00 AM – 4:30 PM
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Location:</strong><br />
                5/1, Colombo Road, Polgahawela, Kurunegala 60300, Sri Lanka
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                User Accounts
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate and
                complete information. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Ensuring your account information is accurate and up-to-date</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Orders and Payments
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Order Acceptance
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All orders are subject to acceptance and availability. We reserve
                the right to refuse or cancel any order at any time for reasons
                including but not limited to: product availability, errors in
                pricing or product information, or suspected fraudulent activity.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Pricing
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All prices are listed in Sri Lankan Rupees (LKR) and are subject
                to change without notice. We strive to provide accurate pricing
                information, but errors may occur. If we discover an error in
                pricing, we will inform you and give you the option to cancel or
                confirm your order at the correct price.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Payment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Payment must be made in full before delivery or service
                provision. We accept various payment methods including cash, bank
                transfer, and online payment systems. All payments are processed
                securely.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Warranties and Returns
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Product Warranties
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Products sold by Buymore Computer come with manufacturer
                warranties where applicable. We provide additional warranty
                support as per our warranty policy. Warranty terms vary by
                product and will be specified at the time of purchase.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Returns and Refunds
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Returns and refunds are subject to our return policy:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Products must be returned within 7 days of purchase (where
                  applicable)
                </li>
                <li>Products must be in original condition with all packaging</li>
                <li>Proof of purchase is required</li>
                <li>Some products may not be eligible for return</li>
                <li>Refunds will be processed within 14 business days</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Service Terms
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Repair Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For repair services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Diagnostic fees may apply</li>
                <li>Repairs are guaranteed for a specified period</li>
                <li>
                  We are not responsible for data loss; backup your data before
                  service
                </li>
                <li>Estimated repair times are approximate</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Installation Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For CCTV and other installation services, site surveys may be
                required. Installation timelines and costs will be provided in
                writing before work begins. Additional charges may apply for
                unforeseen circumstances.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Equipment Rental Services
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For event equipment rental services (projectors, sound systems, screens):
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Package 1 - Projector Only:</strong> Rs. 5,000 for first 5 hours, Rs. 500 per additional hour
                </li>
                <li>
                  <strong>Package 2 - Projector + Screen:</strong> Rs. 6,000 for first 5 hours, Rs. 500 per additional hour
                </li>
                <li>All rental packages include a technician and laptop</li>
                <li>Professional setup and technical support provided throughout rental period</li>
                <li>Delivery and pickup services available</li>
                <li>Rentals available for business meetings, conferences, weddings, birthday parties, movie nights, and other events</li>
                <li>Advance booking is recommended to ensure availability</li>
                <li>Damage or loss of equipment will be charged at replacement cost</li>
                <li>Client is responsible for equipment security during rental period</li>
                <li>
                  Contact us for bookings: 037 206 8605 | WhatsApp: 071 636 6865, 070 300 3091, 070 601 3095
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Buymore Computer shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our
                services or products. Our total liability shall not exceed the
                amount paid by you for the specific product or service in
                question.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on our website, including text, graphics, logos,
                images, and software, is the property of Buymore Computer or its
                licensors and is protected by copyright and other intellectual
                property laws. You may not reproduce, distribute, or create
                derivative works without our express written permission.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Prohibited Uses
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to use our services for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Any unlawful purpose</li>
                <li>Fraudulent or malicious activities</li>
                <li>Violating any intellectual property rights</li>
                <li>Transmitting harmful code or malware</li>
                <li>Interfering with the security of our systems</li>
                <li>Impersonating another person or entity</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with
                the laws of Sri Lanka. Any disputes arising from these Terms
                shall be subject to the exclusive jurisdiction of the courts of
                Sri Lanka.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting on our website.
                Continued use of our services after changes constitutes
                acceptance of the modified Terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
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
                  <p>Phone: 037 206 8605</p>
                  <p>Technical Support: 070 300 3091</p>
                  <p>CCTV Inquiries: 070 601 3095</p>
                  <p>WhatsApp: 071 636 6865, 070 300 3091, 070 601 3095</p>
                  <p>Email: info@buymorecomputer.lk</p>
                  <p>Website: www.buymorecomputer.lk</p>
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
