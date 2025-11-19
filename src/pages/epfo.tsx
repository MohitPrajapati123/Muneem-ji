"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import retirement from "../assets/retirement-pension-planning-financial-security.jpg";

export default function EPFOPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            EPFO - Employees Provident Fund Organization
          </h1>

          <p className="text-lg text-foreground/60 mb-8 max-w-3xl mx-auto">
            Secure your retirement with EPFO's pension and provident fund schemes for long-term financial security.
          </p>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              EPFO Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* EPFO Plans */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-foreground mb-12">
            EPFO Schemes
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <img
              src={retirement}
              alt="EPFO Schemes"
              className="rounded-xl shadow-lg"
            />

            <div className="space-y-6">
              {[
                {
                  title: "Employees Provident Fund (EPF)",
                  description: "Retirement savings scheme with employer and employee contributions",
                },
                {
                  title: "Pension Scheme (EPS)",
                  description: "Pension benefits after retirement based on service and salary",
                },
                {
                  title: "Insurance Scheme (EIS)",
                  description: "Death and disability insurance coverage for employees",
                },
              ].map((scheme, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">{scheme.title}</h3>
                  <p className="text-sm text-foreground/60">{scheme.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EPFO Topics / Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Registration Process",
              "Contribution Calculation",
              "Withdrawal Rules",
              "Claim Benefits",
              "KYC Requirements",
              "Member Portal",
              "Form Submissions",
              "Grievance Redressal",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 
                           flex items-center gap-3 hover:bg-primary/5 transition cursor-pointer"
              >
                <CheckCircle size={20} className="text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
