import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Business & Statutory Registrations
              </h1>

              <p className="text-lg text-foreground/60 mb-8">
                End-to-end support for business incorporation and statutory registrations
                so that you can focus on running your business while we handle compliance.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Get Registration Support <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                We help you with:
              </h2>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Business incorporation and legal structure selection.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>Online registrations on GST, MSME, EPFO, ESIC and more.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-primary mt-0.5" size={18} />
                  <span>End-to-end documentation and follow-up with authorities.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Registration Services We Offer
          </h2>
          <p className="text-foreground/60 mb-10 max-w-3xl">
            From company incorporation to labour and tax registrations, we take care of
            the entire registration process with proper guidance and documentation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Company / Partnership / LLP / Proprietorship Registration",
                description:
                  "Legal entity formation including Private Limited, Partnership Firm, LLP and Proprietorship with complete documentation.",
              },
              {
                title: "MSME Registration",
                description:
                  "Udyam/MSME registration for availing government benefits, subsidies and easier access to finance.",
              },
              {
                title: "Startup India Registration",
                description:
                  "Support for Startup recognition and documentation as per Startup India norms.",
              },
              {
                title: "GST Registration",
                description:
                  "GST registration for businesses and professionals with guidance on category and compliance.",
              },
              {
                title: "Shop Act Registration",
                description:
                  "Registration under local Shop & Establishment Act for offices, shops and commercial units.",
              },
              {
                title: "PAN Card Registration",
                description:
                  "Assistance in PAN application for individuals, firms and companies with correct category selection.",
              },
              {
                title: "ESIC Registration",
                description:
                  "Employer and employee ESIC registration for applicable organisations and units.",
              },
              {
                title: "EPFO Registration",
                description:
                  "EPFO code allotment and registration for employers with required documentation.",
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
              Confused which registration you need?
            </h2>
            <p className="text-foreground/60 max-w-xl">
              Share your business details with us and we will suggest the right
              structure and registrations required as per law.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Talk to Our Team <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
