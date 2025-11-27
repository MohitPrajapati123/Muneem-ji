import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import human from "../assets/human-resource-management-team-collaboration.png";

export default function HRServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src={human}
              alt="HR Services"
              className="rounded-xl shadow-lg"
            />

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Effective Human Resource Management
              </h1>

              <p className="text-lg text-foreground/60 mb-8">
                Complete HR solutions for employee management, payroll processing, and workplace compliance.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
              >
                Consult Our HR Experts <ArrowRight size={20} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our HR Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Employee Recruitment",
                description:
                  "Hiring best practices, interview processes, and onboarding procedures.",
              },
              {
                title: "Payroll Management",
                description:
                  "Salary processing, statutory deductions, and salary slips generation.",
              },
              {
                title: "Leave Management",
                description:
                  "Leave policies, attendance tracking, and leave balance management.",
              },
              {
                title: "Employee Benefits",
                description:
                  "Health insurance, gratuity, bonus schemes, and incentive programs.",
              },
              {
                title: "Labor Compliance",
                description:
                  "Labor laws, employee rights, and statutory compliance requirements.",
              },
              {
                title: "Performance Management",
                description:
                  "Appraisal systems, performance tracking, and employee development.",
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

      <Footer />
    </main>
  );
}
