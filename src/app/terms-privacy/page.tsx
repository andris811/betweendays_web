import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Terms of Service & Privacy Policy</h1>

        {/* Privacy Policy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">Privacy Policy</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-sm text-gray-500">Last updated: January 20, 2026</p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h3>
            <p>
              Between Days ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h3>
            <p>We collect minimal information necessary to provide our service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Check-in Data:</strong> Timestamps of your daily check-ins</li>
              <li><strong>Emergency Contact Information:</strong> Name and contact details of your designated emergency contact</li>
              <li><strong>Device Information:</strong> Basic device information for app functionality</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h3>
            <p>Your information is used solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Track your daily check-ins</li>
              <li>Send notifications to your emergency contact when needed</li>
              <li>Improve app functionality and user experience</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your data. All information is encrypted both in transit and at rest. We do not sell, trade, or share your personal information with third parties.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Retention</h3>
            <p>
              Check-in data is retained for 90 days. You can request deletion of your data at any time by contacting us at avdev2024@gmail.com.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of our service at any time</li>
            </ul>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">Terms of Service</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-sm text-gray-500">Last updated: January 20, 2026</p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h3>
            <p>
              By accessing and using Between Days, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Description</h3>
            <p>
              Between Days is a well-being monitoring app that allows users to check in daily. If a user misses check-ins for three consecutive days, their designated emergency contact will be notified.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Responsibilities</h3>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate emergency contact information</li>
              <li>Inform your emergency contact that they may receive notifications</li>
              <li>Use the service responsibly and not for any unlawful purpose</li>
              <li>Maintain the confidentiality of your account</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitations of Service</h3>
            <p>
              Between Days is designed as a well-being check tool and should not be relied upon as a substitute for emergency services or professional medical monitoring. We do not guarantee uninterrupted service or immediate notification delivery.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer of Warranties</h3>
            <p>
              The service is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted or error-free.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h3>
            <p>
              Between Days and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white border border-[#E5DCC8] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms or Privacy Policy, please contact us at:
          </p>
          <p className="mt-4">
            <a href="mailto:avdev2024@gmail.com" className="text-[#4A7BA7] hover:text-[#3d6a8f] font-semibold">
              avdev2024@gmail.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
