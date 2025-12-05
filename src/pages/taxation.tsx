"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function TaxationPage() {
  const taxationServices = [
    {
      title: "GST Compliance / Filing",
      meaning: "Filing monthly/quarterly GST returns for sales, purchase & ITC tracking.",
      why: "Late or incorrect filing leads to ITC blockage & penalties.",
      learn: [
        "GSTR-1 vs GSTR-3B vs GSTR-9",
        "Monthly/QRMP filing process",
        "How missing invoices affect ITC",
        "Ways to avoid GST notices",
      ],
      help: "We manage GST preparation, reconciliation & complete filing.",
    },
    {
      title: "Income Tax Filing",
      meaning: "Annual filing of business income & deductions using ITR forms.",
      why: "Helps avoid scrutiny, loan rejection & incorrect tax payment.",
      learn: [
        "Which ITR is correct for your business?",
        "Profit calculation basics",
        "Allowable business deductions",
        "Presumptive taxation (44AD/44ADA)",
      ],
      help: "We calculate tax, prepare computation & file ITR accurately.",
    },
    {
      title: "TDS & Payroll Tax",
      meaning: "Tax deducted before paying salaries, rent, contractors & professional fees.",
      why: "Wrong TDS rate = penalty + extra tax payable later.",
      learn: [
        "TDS on salary vs TDS on vendors",
        "TDS challenging deadlines",
        "Quarterly returns (24Q/26Q)",
        "Form 16 preparation",
      ],
      help: "Complete handling of payroll TDS, challans & filing.",
    },
    {
      title: "TCS Filing",
      meaning: "Tax collected at source on specific goods/services like scrap & alcohol.",
      why: "Many businesses unknowingly fall under TCS leading to notices.",
      learn: [
        "TCS eligibility",
        "Section 206C rules",
        "Quarterly return filing",
        "TCS vs TDS difference",
      ],
      help: "We manage TCS calculation, collection & return submission.",
    },
    {
      title: "Corporate Taxation",
      meaning: "Tax compliance for Pvt Ltd, LLP & Registered Firms.",
      why: "Non-compliance affects finance & audit reports.",
      learn: [
        "Corporate tax slabs",
        "MAT, AMT regulations",
        "Depreciation & incentives",
        "Advance tax payment process",
      ],
      help: "We handle tax planning, audit coordination & annual filing.",
    },
    {
      title: "Indirect Taxes",
      meaning: "Includes GST, Customs, Excise, Import/Export duties.",
      why: "Wrong documentation can stop shipments & goods clearance.",
      learn: [
        "Customs duty rules",
        "Excise & VAT applicability",
        "Anti-dumping duties",
        "Documentation required",
      ],
      help: "Full indirect tax support for import/export businesses.",
    },
    {
      title: "Financial & Investment Tax Planning",
      meaning: "Legal tax saving using correct investments & deductions.",
      why: "Smart planning reduces tax burden & boosts cash flow.",
      learn: [
        "80C/80D/80G tax deductions",
        "Best investment options",
        "Advance vs last minute planning",
        "Tax-efficient business structure",
      ],
      help: "We create a customized tax-saving plan for businesses.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="py-20 bg-linear-to-br from-primary/20 to-primary/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GST & Taxation Services</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Complete GST, TDS, TCS & Income Tax compliance for individuals & businesses.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90"
          >
            Talk To Tax Expert <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-10">
          {taxationServices.map((item, i) => (
            <div key={i} className="bg-white dark:bg-card border border-border shadow-sm hover:shadow-md p-6 md:p-8 rounded-xl transition">
              <div className="flex items-center gap-3 mb-3">
                <FileText size={28} className="text-primary" />
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>

              <p className="text-foreground/70"><b>Meaning:</b> {item.meaning}</p>
              <p className="text-foreground/70 mt-1"><b>Why it matters:</b> {item.why}</p>

              <div className="mt-4">
                <b>What you will learn:</b>
                <ul className="mt-2 space-y-2 text-foreground/70 pl-6 list-disc">
                  {item.learn.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 bg-primary/10 text-primary p-4 rounded-lg text-sm font-medium border">
                {item.help}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Need support with GST, TDS or ITR?</h2>
          <p className="text-foreground/70 mb-6">Our experts will handle all compliance for you.</p>

          <Link
            to="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-primary/90"
          >
            Get Tax Assistance <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
