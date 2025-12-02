"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle } from "lucide-react";

export default function LearnMorePage() {
  const resources = [
    {
      title: "Taxation & Compliance",
      description:
        "Understand GST, TDS, ITR and complete taxation framework to keep your business fully compliant.",
      points: [
        "GST – GSTR-1, 2A, 3B, 9 & 9C understanding",
        "TDS deduction, calculation & Form 26AS reconciliation",
        "Income Tax Return (ITR) types and filing",
        "Tax planning & compliance best practices",
      ],
    },
    {
      title: "Labour & Legal Compliance",
      description:
        "Master employee compliance, labour laws, PF, ESIC and HR regulatory processes.",
      points: [
        "EPFO registration, challan filing & returns",
        "ESIC deductions, benefits & compliance",
        "Payroll compliance & employee documentation",
        "Labour law rules every employer must know",
      ],
    },
    {
      title: "Financial Reporting",
      description:
        "Learn how to prepare financial statements, MIS reports and statutory submissions.",
      points: [
        "Balance Sheet, Profit & Loss, Cash Flow statement",
        "Monthly, quarterly & annual financial reporting",
        "MIS, budgeting & management analysis",
        "Consolidation of accounts for multi-branch firms",
      ],
    },
    {
      title: "Registration Services Overview",
      description:
        "Know the right business registration and legal setup required for your new or existing business.",
      points: [
        "Company, LLP & Proprietorship registration",
        "GST, MSME, Startup India registration",
        "EPFO & ESIC employer onboarding",
        "PAN, TAN & Shop Act registration process",
      ],
    },
    {
      title: "Accounting & Bookkeeping Essentials",
      description:
        "Learn how to manage your books, GST invoicing, payroll and financial records efficiently.",
      points: [
        "Bookkeeping fundamentals & accounting cycle",
        "GST-compliant invoicing & record management",
        "Payroll processing & salary structures",
        "P&L, ledgers and financial data organisation",
      ],
    },
    {
      title: "Startup Growth Blueprint",
      description:
        "Step-by-step roadmap to start, launch and scale your startup successfully.",
      points: [
        "Business model planning & market validation",
        "Registration & legal foundation for startups",
        "Funding options & financial planning",
        "Branding, marketing & scaling strategies",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-linear-to-r from-primary to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-balance">
              Learn More About Business Operations & Compliance
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Practical guides and insights to help you run your business more efficiently
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {resource.title}
                  </h3>
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
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance">
              Ready to Upgrade Your Business Knowledge?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of entrepreneurs and businesses who trust Muneem Ji for expert guidance.
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
  );
}
