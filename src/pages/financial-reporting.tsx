import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinancialReportingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Financial Reporting & Analysis
              </h1>

              <p className="text-lg text-foreground/60 mb-8">
                Structured, accurate and timely financial reporting to help you
                meet statutory requirements and make better business decisions.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Discuss Your Reporting Needs <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                What You Get with Our Reporting Services
              </h2>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Clear and timely financial statements.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Compliance-focused statutory and regulatory reports.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Management-focused MIS for decision making.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reporting Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Financial Reporting Services
          </h2>
          <p className="text-foreground/60 mb-10 max-w-3xl">
            We support your business with structured reporting frameworks –
            covering regular, statutory and management reporting requirements,
            backed by strong accounting support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Preparation of Financial Statements",
                description:
                  "Preparation of Balance Sheet, Profit & Loss Account and other core financial statements as per applicable standards.",
              },
              {
                title: "Monthly / Quarterly / Annual Reporting",
                description:
                  "Periodic reporting packs for management, lenders and stakeholders, aligned with your business cycles.",
              },
              {
                title: "Statutory Reporting",
                description:
                  "Reports and statements required under company law, tax law and other regulatory frameworks.",
              },
              {
                title: "Consolidation of Accounts",
                description:
                  "Consolidated financial statements for group entities, branches, divisions and related entities.",
              },
              {
                title: "Management Reporting",
                description:
                  "Customised MIS, variance analysis and KPI reports to support data-driven decision making.",
              },
              {
                title: "Regulatory Reporting",
                description:
                  "Support in preparing reporting formats required by regulators, banks, investors and authorities.",
              },
              {
                title: "Accounting & Bookkeeping Support",
                description:
                  "Underlying bookkeeping and accounting support to ensure all reports are backed by accurate records.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex gap-4">
                  <CheckCircle className="text-primary shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Need a reliable reporting partner?
            </h2>
            <p className="text-foreground/60 max-w-xl">
              Whether you need monthly MIS, statutory reports or consolidated
              financials, our team can design and manage a reporting system
              tailored to your business.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Get Reporting Support <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
