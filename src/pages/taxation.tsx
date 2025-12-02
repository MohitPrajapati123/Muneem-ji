import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function TaxationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                GST & Taxation Services
              </h1>

              <p className="text-lg text-foreground/60 mb-8">
                End-to-end GST, TDS and Income Tax support – from data
                preparation and reconciliation to return filing and tax
                planning, so your business stays fully compliant.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Talk to Our Tax Experts <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Why Choose Our Taxation Services?
              </h2>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Accurate GST & TDS calculations and filings.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Timely compliance to avoid penalties & notices.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Practical tax planning to optimise your tax outgo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GST / TDS / ITR Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Taxation Services
          </h2>
          <p className="text-foreground/60 mb-10 max-w-3xl">
            We support businesses and individuals with complete GST, TDS and
            Income Tax services – from basic data preparation to advanced
            reconciliations and tax planning.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "GSTR-1 & GSTR-2A Data Preparation",
                description:
                  "Compiling sales and purchase data, invoice-wise details and preparing accurate data for GSTR-1 and GSTR-2A.",
              },
              {
                title: "GSTR-1 & GSTR-2A Reconciliation",
                description:
                  "Matching books of accounts with portal data to identify mismatches and ensure correct GST credit.",
              },
              {
                title: "GSTR-1, GST-2A, GSTR-9 & 9C",
                description:
                  "Annual GST return preparation and assistance for GSTR-9 and 9C with proper working and documentation.",
              },
              {
                title: "TDS Calculation on Services",
                description:
                  "Correct TDS deduction on professional fees, contracts, rent and other applicable payments as per law.",
              },
              {
                title: "TDS Reconciliation with Form 26AS",
                description:
                  "Reconciling TDS deducted and reflected in Form 26AS to avoid demand notices and mismatches.",
              },
              {
                title: "TDS Return Filing",
                description:
                  "Preparation and filing of quarterly TDS returns with correction statements if required.",
              },
              {
                title: "Tax Planning",
                description:
                  "Guided planning to legally reduce tax liability using available deductions, exemptions and investments.",
              },
              {
                title: "ITR Filing",
                description:
                  "Income Tax Return filing for individuals, proprietors, firms and companies with proper documentation.",
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
              Need help with GST, TDS or ITR?
            </h2>
            <p className="text-foreground/60 max-w-xl">
              Share your requirements with us and our team will assist you with
              compliant and hassle-free taxation services.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Get Tax Support <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
