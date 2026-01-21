import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Between Days – Terms of Use & Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: January 2026
        </p>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            1. Overview
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Between Days is an iOS application designed to help people who
              live alone signal their well-being through daily check-ins. If a
              user does not check in for two consecutive days, the app
              automatically sends an email alert on the third day to a
              designated emergency contact asking them to check on the user.
            </p>
            <p>
              By using the app, you agree to the terms and practices described
              below.
            </p>
          </div>
        </section>

        {/* Terms of Use Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            2. Terms of Use
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2.1 Intended Use
            </h3>
            <p>
              Between Days is a well-being support tool,{" "}
              <strong>not an emergency service</strong>. It does not replace
              medical care, emergency responders, or welfare checks by
              authorities.
            </p>
            <p className="font-semibold">
              Do not rely on this app for life-critical situations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2.2 Automated Alerts
            </h3>
            <p>
              If you miss check-ins for two consecutive days, the app will
              automatically send an email on the third day to your chosen
              emergency contact.
            </p>
            <p>You acknowledge and accept that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Emails are sent automatically without manual intervention</li>
              <li>
                Email delivery cannot be guaranteed (depends on email providers,
                internet connectivity)
              </li>
              <li>
                The app cannot confirm whether the recipient reads or acts on
                the message
              </li>
              <li>False alerts may occur if you forget to check in</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2.3 Accuracy of Information
            </h3>
            <p>You are responsible for providing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your correct name (optional but recommended)</li>
              <li>A valid and monitored emergency contact email address</li>
            </ul>
            <p>
              Incorrect or outdated information may prevent alerts from being
              delivered to the right person.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2.4 No Liability
            </h3>
            <p>
              Between Days is provided <strong>"as is"</strong> without
              warranties of any kind. The developer is not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Missed, delayed, or undelivered emails</li>
              <li>Internet, device, or third-party service outages</li>
              <li>Any actions or inactions taken by emergency contacts</li>
              <li>
                Consequences arising from reliance on this app for safety
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2.5 User Responsibility
            </h3>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Checking in daily if you wish to prevent alerts</li>
              <li>Keeping your emergency contact information up to date</li>
              <li>
                Informing your emergency contact that they may receive automated
                alerts
              </li>
              <li>
                Understanding that this is a supplementary tool, not a
                substitute for professional care
              </li>
            </ul>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            3. Privacy Policy
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3.1 What Data We Collect
            </h3>
            <p>
              Between Days collects only the minimum data required for
              functionality. No accounts, passwords, or social logins are
              required.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Stored on Your Device (Local Storage)
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name (optional)</li>
              <li>Emergency contact email address</li>
              <li>Check-in history (dates of your last 30 check-ins)</li>
              <li>Last check-in date and time</li>
              <li>App language preference</li>
              <li>Text/icon size preference</li>
              <li>Onboarding completion status</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Synced to iCloud
            </h4>
            <p>
              To enable data recovery if you reinstall the app or switch
              devices, the following data is automatically synced to your
              personal iCloud account:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name</li>
              <li>Emergency contact email address</li>
              <li>Last check-in date</li>
              <li>Check-in history (last 30 days)</li>
              <li>Number of consecutive missed days (calculated value)</li>
              <li>App preferences (language, text size)</li>
            </ul>
            <p className="font-semibold">
              **Important:** Your data is synced via iCloud Key-Value Storage,
              which is tied to your Apple ID. Only you can access this data
              across your devices. We do not have access to your iCloud data.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3.2 How Data Is Used
            </h3>
            <p>
              Your data is used <strong>only</strong> for the following
              purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tracking your daily check-ins</li>
              <li>Calculating consecutive missed days</li>
              <li>
                Sending automated email alerts to your emergency contact if
                needed
              </li>
              <li>
                Syncing your data to your personal iCloud account for backup and
                recovery
              </li>
              <li>Personalizing app settings (language, text size)</li>
            </ul>

            <p className="font-semibold">We do not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sell your data to third parties</li>
              <li>Use your data for advertising</li>
              <li>Share your data except as described in this policy</li>
              <li>Track your location</li>
              <li>Access other apps or data on your device</li>
              <li>
                Have access to your iCloud data (it's encrypted and only
                accessible to you)
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3.3 Email Sending
            </h3>
            <p>
              Automated alert emails are sent via <strong>SendGrid</strong>, a
              third-party email service provider.
            </p>
            <p>When an alert is triggered:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                An email is sent <strong>only</strong> to your specified
                emergency contact
              </li>
              <li>
                The email contains: your name (if provided), the number of
                missed days, and instructions for the recipient
              </li>
              <li>
                Emails are marked as automated with "DO NOT REPLY" notices
              </li>
              <li>The email is sent from: safety@betweendays.app</li>
            </ul>
            <p>
              SendGrid processes the email content solely for delivery purposes
              and does not use your data for other purposes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3.4 Data Storage and Security
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Local Storage
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Data is stored securely on your device using iOS UserDefaults
              </li>
              <li>
                Protected by your device's built-in security (passcode, Face ID,
                etc.)
              </li>
              <li>Automatically deleted when you uninstall the app</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Cloud Storage (iCloud)
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data is stored in your personal iCloud account (operated by Apple)</li>
              <li>Transmitted over encrypted connections</li>
              <li>Protected by your Apple ID password and two-factor authentication</li>
              <li>
                <strong>Persists even after you uninstall the app</strong> (to
                allow data recovery)
              </li>
              <li>Only accessible from devices signed into your Apple ID</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3.5 Data Retention
            </h3>
            <p>
              Your data is stored in two locations with different retention
              policies:
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              On Your Device
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data remains until you uninstall the app</li>
              <li>
                Uninstalling the app <strong>permanently deletes</strong> all
                local data
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              In iCloud
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Data persists <strong>even after app deletion</strong>
              </li>
              <li>
                This allows you to recover your data if you reinstall the app
              </li>
              <li>To <strong>permanently delete</strong> cloud data:</li>
            </ul>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open the app</li>
              <li>Go to Settings</li>
              <li>Use "Reset All Data" option</li>
              <li>Then uninstall the app</li>
            </ol>
            <p>
              If you only uninstall without resetting, your data remains in
              iCloud and will be restored if you reinstall the app on any
              device with the same Apple ID.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3.6 Your Rights and Control
            </h3>
            <p>You may, at any time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>View</strong> your stored information in the Settings
                screen
              </li>
              <li>
                <strong>Update</strong> your name or emergency contact email
              </li>
              <li>
                <strong>Change</strong> app preferences (language, text size)
              </li>
              <li>
                <strong>Stop future alerts</strong> by removing your emergency
                contact email
              </li>
              <li>
                <strong>Delete all data</strong> using the "Reset All Data"
                option in Settings
              </li>
              <li>
                <strong>Request data deletion</strong> by contacting support
                (see Section 6)
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3.7 Third-Party Services
            </h3>
            <p>Between Days uses the following third-party services:</p>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              iCloud (Apple)
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Purpose: Cloud data storage and synchronization</li>
              <li>
                Data shared: Your app data is synced to your personal iCloud
                account
              </li>
              <li>
                Privacy Policy:{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  className="text-[#4A7BA7] hover:text-[#3d6a8f] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.apple.com/legal/privacy/
                </a>
              </li>
              <li>
                Note: This is your own iCloud account - we do not have access to
                this data
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              SendGrid (Twilio)
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Purpose: Email delivery for alerts</li>
              <li>
                Data shared: Emergency contact email, your name, alert message
                content
              </li>
              <li>
                Privacy Policy:{" "}
                <a
                  href="https://www.twilio.com/legal/privacy"
                  className="text-[#4A7BA7] hover:text-[#3d6a8f] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.twilio.com/legal/privacy
                </a>
              </li>
            </ul>
            <p>
              These services are bound by their own privacy policies. We select
              reputable providers with strong privacy practices.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3.8 Data Sharing and Disclosure
            </h3>
            <p>We do not sell or rent your data to third parties.</p>
            <p>We may disclose your information only:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To your designated emergency contact (as part of the alert
                email)
              </li>
              <li>
                To third-party service providers (SendGrid) as necessary to
                deliver alert emails
              </li>
              <li>If required by law or legal process</li>
              <li>To protect rights, property, or safety</li>
            </ul>
            <p>
              Note: Your iCloud data is stored in your personal iCloud account
              and is not shared with us or any third parties.
            </p>
          </div>
        </section>

        {/* Children's Privacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            4. Children's Privacy
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Between Days is not intended for users under the age of 13. We do
              not knowingly collect personal information from children under 13.
            </p>
            <p>
              If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us
              immediately so we can delete it.
            </p>
          </div>
        </section>

        {/* International Users Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            5. International Users
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Your iCloud data is stored in Apple's data centers, which may be
              located in various countries depending on your region and Apple ID
              settings. SendGrid email service operates from the United States.
            </p>
            <p>
              By using the app, you consent to the processing of your data as
              described in this policy. These countries may have different data
              protection laws than your country of residence.
            </p>
            <p className="font-semibold">
              **For users in China:** iCloud data is stored in Apple's China data
              centers operated by GCBD (Guizhou on the Cloud Big Data), in
              compliance with Chinese data regulations.
            </p>
          </div>
        </section>

        {/* Changes to This Policy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            6. Changes to This Policy
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              We may update these Terms of Use and Privacy Policy from time to
              time. Changes will be reflected by updating the "Last updated"
              date at the top.
            </p>
            <p className="font-semibold">
              Continued use of the app after changes constitutes acceptance of
              the updated terms.
            </p>
            <p>
              For significant changes affecting your privacy rights, we will
              provide notice within the app when feasible.
            </p>
          </div>
        </section>

        {/* Your Consent Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            7. Your Consent
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              By downloading, installing, and using Between Days, you consent
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The collection and use of your data as described in this policy
              </li>
              <li>The automated sending of alerts to your emergency contact</li>
              <li>
                The storage of your data in your personal iCloud account
              </li>
              <li>The terms and limitations described in Section 2</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">8. Contact</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              If you have questions, concerns, or requests regarding these terms
              or privacy practices, please contact:
            </p>
            <div className="bg-white border border-[#E5DCC8] rounded-2xl p-6 my-6">
              <p className="font-semibold text-gray-900">
                Between Days Support
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:avdev2024@gmail.com"
                  className="text-[#4A7BA7] hover:text-[#3d6a8f] underline"
                >
                  avdev2024@gmail.com
                </a>
              </p>
            </div>
            <p>
              For data deletion requests, you can delete all data directly from
              the app:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open Settings</li>
              <li>Scroll to "Data" section</li>
              <li>Tap "Reset All Data"</li>
            </ol>
            <p>
              This will delete both local and iCloud data. We will respond to
              privacy inquiries within 30 days.
            </p>
          </div>
        </section>

        {/* Legal Basis for Processing (GDPR) Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            9. Legal Basis for Processing (GDPR)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              If you are located in the European Economic Area (EEA), our legal
              basis for collecting and using your data is:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Consent:</strong> You provide explicit consent by
                setting up an emergency contact
              </li>
              <li>
                <strong>Legitimate Interest:</strong> Operating the app's core
                functionality (check-in tracking)
              </li>
            </ul>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Erase your data ("right to be forgotten")</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:avdev2024@gmail.com"
                className="text-[#4A7BA7] hover:text-[#3d6a8f] underline"
              >
                avdev2024@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* California Privacy Rights (CCPA) Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            10. California Privacy Rights (CCPA)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>If you are a California resident, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Know what personal information we collect and how it's used
              </li>
              <li>Request deletion of your personal information</li>
              <li>
                Opt-out of sale of personal information (we do not sell your
                data)
              </li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:avdev2024@gmail.com"
                className="text-[#4A7BA7] hover:text-[#3d6a8f] underline"
              >
                avdev2024@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* Final Note */}
        <section className="bg-white border border-[#E5DCC8] rounded-2xl p-8 mb-12">
          <p className="text-gray-700 text-center italic">
            By using Between Days, you acknowledge that you have read and
            understood this Privacy Policy and Terms of Use.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}