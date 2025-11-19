"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function LearnMorePage() {
  const resources = [
    {
      title: "Getting Started with Business Compliance",
      description: "Learn the basics of business compliance and why it matters for your organization.",
      points: [
        "Understanding business compliance requirements",
        "Legal obligations and regulations",
        "Best practices for compliance management",
        "Compliance calendar and deadlines",
      ],
    },
    {
      title: "Financial Management Essentials",
      description: "Master the fundamentals of financial planning and management.",
      points: [
        "Bookkeeping and accounting basics",
        "Tax planning and optimization",
        "Financial statement analysis",
        "Budget planning and forecasting",
      ],
    },
    {
      title: "Human Resource Management",
      description: "Build an effective HR strategy for your business.",
      points: [
        "Employee recruitment and onboarding",
        "Payroll management systems",
        "Performance management",
        "Employee engagement and retention",
      ],
    },
    {
      title: "Employee Insurance & Benefits",
      description: "Understand ESIC, EPFO, and employee welfare programs.",
      points: [
        "ESIC coverage and benefits",
        "EPFO schemes and retirement planning",
        "Health insurance options",
        "Employee welfare programs",
      ],
    },
    {
      title: "Startup Success Strategies",
      description: "Complete guide to launching and growing your startup.",
      points: [
        "Business planning and validation",
        "Registration and legal setup",
        "Funding and financial planning",
        "Growth strategies and scaling",
      ],
    },
    {
      title: "Digital Transformation",
      description: "Leverage technology for business efficiency.",
      points: [
        "Digital accounting tools",
        "HR management software",
        "Compliance automation",
        "Data security and protection",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-linear-to-r from-primary to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-balance">Learn More About Business Compliance</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              In-depth resources and guides to help you succeed in your business journey
            </p>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{resource.title}</h3>
                  <p className="text-slate-600 mb-6">{resource.description}</p>
                  <ul className="space-y-3">
                    {resource.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-linear-to-r from-primary to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance">Ready to Master Your Business?</h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of entrepreneurs and business professionals using Muneem Ji for their compliance needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-slate-100 transition font-semibold"
              >
                Contact Us Today
              </a>
              <a
                href="/"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-semibold"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
