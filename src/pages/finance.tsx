import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import business from "../assets/business-finance-accounting-concept.jpg";

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Master Your Business Finances
              </h1>

              <p className="text-lg text-foreground/60 mb-8">
                Complete guidance on accounting, taxation, GST, and financial management for your business.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Get Expert Guidance <ArrowRight size={20} />
              </Link>
            </div>

            <img
              src={business}
              alt="Finance Management"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Key Financial Topics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bookkeeping Basics",
                description:
                  "Learn how to maintain proper financial records and books of accounts.",
              },
              {
                title: "GST Registration & Compliance",
                description:
                  "Understanding GST, registration process, filing returns, and compliance.",
              },
              {
                title: "Income Tax Planning",
                description:
                  "Tax planning strategies, filing returns, and claiming deductions.",
              },
              {
                title: "Financial Statements",
                description:
                  "Prepare balance sheets, income statements, and cash flow statements.",
              },
              {
                title: "Audit & Compliance",
                description:
                  "Statutory audit requirements and compliance procedures.",
              },
              {
                title: "Business Banking",
                description:
                  "Setting up business accounts and managing cash flow effectively.",
              },
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex gap-4">
                  <CheckCircle className="text-primary shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{topic.title}</h3>
                    <p className="text-sm text-foreground/60">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
