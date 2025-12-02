import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccountingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Complete Accounting & Bookkeeping Services
              </h1>

              <p className="text-lg text-foreground/60 mb-8">
                From day-to-day bookkeeping to GST invoicing and financial
                statements, we manage your accounts with accuracy and clarity.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Schedule Accounting Consultation <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Accounting That Supports Your Growth
              </h2>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Accurate record keeping and reconciliations.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Timely reports for better decision making.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Seamless integration with GST and payroll.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accounting Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Accounting Services
          </h2>
          <p className="text-foreground/60 mb-10 max-w-3xl">
            We provide end-to-end accounting services tailored for small and
            growing businesses, ensuring your books are updated and compliant.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bookkeeping",
                description:
                  "Day-to-day recording of sales, purchases, expenses and all financial transactions.",
              },
              {
                title: "GST Invoicing",
                description:
                  "Creation of GST-compliant invoices, credit notes and sales registers.",
              },
              {
                title: "Payroll",
                description:
                  "Salary processing, statutory deductions and payroll summaries for employees.",
              },
              {
                title: "Document Keeping",
                description:
                  "Organised storage of bills, vouchers, invoices and financial documents.",
              },
              {
                title: "Balance Sheets & P&L",
                description:
                  "Preparation of Balance Sheet, Profit & Loss Account and other periodic reports.",
              },
              {
                title: "Other Financial Statements",
                description:
                  "Cash flow statements, ledgers and customised MIS reports as per your business needs.",
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
              Want clean and updated books?
            </h2>
            <p className="text-foreground/60 max-w-xl">
              Let our team manage your books and reports, so you always know
              where your business stands financially.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Get Accounting Help <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
