import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Header */}
        <section className="bg-linear-to-r from-red-600 to-red-700 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                  We collect information you provide directly to us, such as when you fill out forms, submit inquiries,
                  or contact us. This may include your name, email address, phone number, and any other information you
                  choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates and newsletters (with your consent)</li>
                  <li>Analyze usage patterns and improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information from unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Third-Party Sharing</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or share your personal information with third parties without your explicit
                  consent, except as required by law or to service providers who assist in operating our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at
                  finance@diamondore.in or call +91 9654796526.
                </p>
              </div>

              <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
                <p>Last updated: November 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
