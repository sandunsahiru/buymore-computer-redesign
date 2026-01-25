import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CookiePolicy() {
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
            <span className="text-gray-600">Cookie Policy</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: January 6, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About Buymore Computer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Buymore Computer (established 2015) is your trusted partner for quality computers,
                repairs, CCTV systems, and tech services in Kurunegala, Sri Lanka.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Contact Information:</strong><br />
                Main Branch: 5/1, Colombo Road, Polgahawela, Kurunegala 60300<br />
                BuyMore Hotline: (070) 769 6666 | Email: info@buymorecomputer.lk<br />
                Website: www.buymorecomputer.lk
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and provide information to
                website owners. Cookies help us understand how you use our
                website and improve your experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Buymore Computer uses cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To enable certain functions of the website</li>
                <li>To provide analytics and track website usage</li>
                <li>To store your preferences and settings</li>
                <li>To personalize content and advertisements</li>
                <li>To improve website security</li>
                <li>To remember your login information</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our website uses various types of cookies to improve your experience
                and provide essential functionality:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                1. Comment Cookies (Functionality)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                <strong>Duration:</strong> 1 year
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you leave a comment on our site, you may opt-in to save your name, email
                address, and website in cookies for your convenience. These cookies allow you
                to avoid re-entering this information when leaving subsequent comments.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                2. Login Cookies (Essential)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                <strong>Duration:</strong> 2 days (standard) or 2 weeks (with &quot;Remember Me&quot;)
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you log in to your account, we set up temporary cookies to verify your
                login status. These cookies are removed when you log out. If you select
                &quot;Remember Me,&quot; your login will persist for two weeks for convenience.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                3. Screen Options Cookies (Functionality)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                <strong>Duration:</strong> 1 year
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies save your screen display preferences, ensuring your preferred
                viewing options are remembered across sessions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                4. Editing Cookies (Essential)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                <strong>Duration:</strong> 1 day
              </p>
              <p className="text-gray-600 leading-relaxed">
                When you edit or publish an article, an additional cookie is saved in your
                browser. This cookie contains no personal data and simply indicates you
                recently edited content. It expires after one day.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Specific Cookies We Use
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-gray-600 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold border-b">
                        Cookie Name
                      </th>
                      <th className="px-4 py-3 text-left font-semibold border-b">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left font-semibold border-b">
                        Duration
                      </th>
                      <th className="px-4 py-3 text-left font-semibold border-b">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">comment_author_*</td>
                      <td className="px-4 py-3">Functionality</td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3">Stores comment author information</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">comment_author_email_*</td>
                      <td className="px-4 py-3">Functionality</td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3">Stores comment author email</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">comment_author_url_*</td>
                      <td className="px-4 py-3">Functionality</td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3">Stores comment author website</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">wordpress_logged_in_*</td>
                      <td className="px-4 py-3">Essential</td>
                      <td className="px-4 py-3">2 days / 2 weeks</td>
                      <td className="px-4 py-3">Maintains user login session</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">wp-settings-*</td>
                      <td className="px-4 py-3">Functionality</td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3">Stores screen display preferences</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">wordpress_test_cookie</td>
                      <td className="px-4 py-3">Essential</td>
                      <td className="px-4 py-3">Session</td>
                      <td className="px-4 py-3">Tests cookie functionality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-Party Cookies and Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website integrates with third-party services that may set their own cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-3 mb-4">
                <li>
                  <strong>Gravatar (Automattic):</strong> If you upload a profile picture or leave
                  comments, an anonymized string created from your email address (called a hash) is
                  provided to the Gravatar service to display your profile picture. The Gravatar
                  service privacy policy is available at:{' '}
                  <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    automattic.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Spam Detection Services:</strong> Automated spam detection services
                  process comment data to protect against spam
                </li>
                <li>
                  <strong>Embedded Content:</strong> Articles on our site may include embedded content
                  from third parties (e.g., videos, images, articles from YouTube, Facebook, etc.).
                  These embedded services behave as if you visited their website directly and may:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Collect data about you</li>
                    <li>Use cookies</li>
                    <li>Embed additional third-party tracking</li>
                    <li>Monitor your interaction with embedded content</li>
                  </ul>
                </li>
                <li>
                  <strong>Social Media:</strong> Facebook and other social media integration for
                  sharing and engagement features
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                These third parties have their own privacy policies governing their use of cookies
                and data collection. We recommend reviewing their policies for detailed information
                about how they handle your data.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Managing Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Browser Settings
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most browsers allow you to control cookies through their settings
                preferences. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>View cookies stored on your device</li>
                <li>Delete existing cookies</li>
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Receive notifications before cookies are stored</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Browser-Specific Instructions
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Google Chrome:</strong> Settings &gt; Privacy and
                  security &gt; Cookies
                </li>
                <li>
                  <strong>Firefox:</strong> Options &gt; Privacy &amp; Security
                  &gt; Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies
                  and website data
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Settings &gt; Cookies and site
                  permissions
                </li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Note:</strong> Blocking or deleting cookies may impact
                  your experience on our website, and some features may not work
                  properly.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookie Consent
              </h2>
              <p className="text-gray-600 leading-relaxed">
                When you first visit our website, you will be asked to consent to
                our use of cookies. By clicking &quot;Accept&quot; or continuing to use our
                website, you consent to our use of cookies as described in this
                policy. You can withdraw your consent at any time by adjusting
                your cookie settings in your browser or by contacting us.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in technology, legislation, or our business practices. We
                will notify you of any significant changes by posting a notice on
                our website or updating the &quot;Last updated&quot; date at the top of
                this policy.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                More Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For more information about how we handle your personal data,
                please see our Privacy Policy. If you would like to learn more
                about cookies in general, visit:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>www.allaboutcookies.org</li>
                <li>www.youronlinechoices.eu (for EU visitors)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please
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
