import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Header */}
        <section className="bg-linear-to-r from-red-600 to-red-700 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">Disclaimer</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">General Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The information provided on this website is for general informational purposes only. While we strive
                  to provide accurate and up-to-date information, we make no warranties or representations about the
                  accuracy, completeness, or reliability of the information contained on this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Advice</h2>
                <p className="text-gray-700 leading-relaxed">
                  The content on this website should not be construed as professional financial, legal, tax, or business
                  advice. Before making any financial or business decisions, please consult with qualified professionals
                  including accountants, lawyers, and financial advisors who understand your specific situation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Regulatory Changes</h2>
                <p className="text-gray-700 leading-relaxed">
                  Laws and regulations are subject to change. The information provided may become outdated due to
                  changes in tax laws, labor laws, compliance requirements, or other regulations. We recommend verifying
                  all information with official government sources and qualified professionals.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">External Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  This website may contain links to external websites. We are not responsible for the content, accuracy,
                  or practices of these external sites. Your use of external websites is at your own risk and subject to
                  their terms and conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Muneem Ji be liable for any direct, indirect, incidental, special, or consequential
                  damages arising from the use or inability to use this website or its content, even if advised of the
                  possibility of such damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">No Warranty</h2>
                <p className="text-gray-700 leading-relaxed">
                  This website and all information, content, materials, and services are provided on an 'as is' basis
                  without any warranty of any kind, either express or implied, including but not limited to the implied
                  warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Use at Your Own Risk</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your use of this website is at your own risk. You are responsible for ensuring that you understand all
                  information provided and for verifying any information before taking action based on it.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <p className="text-red-800 font-semibold mb-2">Important Notice:</p>
                <p className="text-red-700 text-sm leading-relaxed">
                  For any financial, legal, tax, or business decisions, always consult with qualified professionals.
                  Muneem Ji provides educational information only and is not responsible for any decisions made based on
                  this information.
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
