"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
  const registrations = [
    {
      title: "Company / Partnership / LLP / Proprietorship Incorporation",
      meaning:
        "Choosing the right legal structure defines taxation, compliance & growth opportunities.",
      why: "Wrong selection may cause higher tax, funding issues & legal risks later.",
      learn: [
        "Difference between Proprietorship, Partnership, LLP, Pvt Ltd",
        "Best structure based on business type",
        "Minimum capital requirement",
        "Registration cost & timelines",
        "Annual compliance & taxation impact",
      ],
      help:
        "We help you choose the best structure & complete full registration with documentation & approvals.",
    },

    {
      title: "MSME (Udyam) Registration",
      meaning:
        "Government recognition for Micro, Small & Medium businesses offering benefits.",
      why: "Helps secure loans, subsidies & delayed payment protection.",
      learn: [
        "Eligibility for MSME categories",
        "Investment & turnover limits",
        "Govt subsidy schemes",
        "Documents required",
        "How to apply without rejection",
      ],
      help: "We register your business on Udyam portal & guide subsidy eligibility.",
    },

    {
      title: "Startup India Registration",
      meaning:
        "DPIIT recognition offering funding, tax exemption & innovation support.",
      why: "Eligible startups can get 3-year tax holiday & investor access.",
      learn: [
        "Who qualifies for Startup recognition",
        "Tax exemption under 80-IAC",
        "Funding & incubation support",
        "Documents required & timeline",
        "Approval success strategy",
      ],
      help:
        "We prepare pitch deck + documentation & process DPIIT approval end-to-end.",
    },

    {
      title: "GST Registration",
      meaning:
        "Mandatory for businesses crossing turnover limit or selling inter-state.",
      why: "Without GSTIN, you cannot issue GST invoice or claim ITC.",
      learn: [
        "Turnover limits & voluntary registration",
        "GST for e-commerce sellers",
        "Documents required",
        "Portal verification process",
        "Post-registration compliance",
      ],
      help:
        "We apply, track verification & complete GSTIN approval smoothly.",
    },

    {
      title: "Shop & Establishment Act License",
      meaning:
        "Required for shops, offices & commercial establishments operating physically.",
      why: "Needed for bank current account, inspections & hiring employees.",
      learn: [
        "Who needs Shop Act registration",
        "Documents & renewal rules",
        "State-specific regulations",
        "Penalty for non-registration",
      ],
      help: "We liaise with local authority & get certificate quickly.",
    },

    {
      title: "PAN Card Registration",
      meaning:
        "Required for tax filing, banking & financial transactions of individuals & businesses.",
      why: "PAN is mandatory for GST, ITR, TDS & company operations.",
      learn: [
        "PAN for individual vs business entity",
        "Documents required",
        "Correction / reissue procedures",
        "PAN-Aadhaar linking rules",
      ],
      help: "We apply PAN online via NSDL/UTI with fast processing.",
    },

    {
      title: "ESIC Registration",
      meaning:
        "Employee medical insurance & benefits scheme for eligible workers.",
      why: "Mandatory if employees ≥ 10, non-compliance causes penalties.",
      learn: [
        "Coverage salary limit",
        "Contribution % employer/employee",
        "Documents required",
        "Monthly filing & challan rules",
        "ESIC benefits employees receive",
      ],
      help:
        "We complete ESIC code registration + monthly filing & compliance.",
    },

    {
      title: "EPFO Registration",
      meaning:
        "Provident Fund registration mandatory for organisations with 20+ employees.",
      why: "PF is essential for audits & employee retirement benefits.",
      learn: [
        "PF contribution calculations",
        "Employer/employee rules",
        "UAN generation process",
        "Monthly ECR filing",
        "Employee claim settlement",
      ],
      help:
        "We register employer PF, generate UAN & handle monthly compliance.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="py-20 bg-linear-to-br from-primary/20 to-primary/5 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4  text-neutral-900">Business & Statutory Registrations</h1>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            Company formation, Government registrations & complete compliance — handled by experts so you can focus on business growth.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90"
          >
            Get Registration Help <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-10">
          {registrations.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md p-6 md:p-8 transition">
              <div className="flex items-center gap-3 mb-4">
                <FileText size={28} className="text-primary" />
                <h2 className="text-2xl font-bold">{item.title}</h2>
              </div>

              <p className="text-foreground/70"><b>What it means:</b> {item.meaning}</p>
              <p className="text-foreground/70 mt-1"><b>Why it matters:</b> {item.why}</p>

              <div className="mt-4">
                <b>What you will learn:</b>
                <ul className="space-y-2 mt-2 text-foreground/70 pl-6 list-disc">
                  {item.learn.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 bg-primary/10 text-primary p-4 rounded-lg border text-sm font-medium">
                {item.help}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary/10 text-center">
        <h2 className="text-3xl font-bold mb-3">Confused which registration you need?</h2>
        <p className="text-foreground/70 max-w-xl mx-auto mb-6">
          Tell us about your business — We suggest the right registration & handle everything for you.
        </p>

        <Link
          to="/contact"
          className="bg-primary text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-primary/90"
        >
          Talk to Experts <ArrowRight size={20} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
