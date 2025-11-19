import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import insurance from "../assets/insurance-protection-employee-security.jpg";

export default function ESICPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ESIC - Employee State Insurance Corporation
          </h1>

          <p className="text-lg text-foreground/60 mb-8 max-w-3xl mx-auto">
            Complete information about ESIC registration, benefits, contributions, and employee protection schemes
          </p>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Get ESIC Assistance <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ESIC Information */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">ESIC Registration</h2>

              <div className="space-y-4">
                {[
                  "Mandatory for employers with 10+ employees",
                  "Online registration through ESIC portal",
                  "Required documents for registration",
                  "Registration validity and renewal",
                  "Penalties for non-compliance",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="text-primary shrink-0" size={20} />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={insurance}
              alt="ESIC Information"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Medical Benefits",
                description: "Free medical treatment, hospitalization, and emergency care coverage",
              },
              {
                title: "Cash Benefits",
                description: "Disability benefits, dependent benefits, and funeral expenses",
              },
              {
                title: "Contribution Rates",
                description: "Employee and employer contribution percentages and calculation",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-foreground/60">{benefit.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
