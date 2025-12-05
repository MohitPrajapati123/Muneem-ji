"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, FileText } from "lucide-react";   // ✔ Only required icons imported
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
        "TDS due date & challan process",
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
        "TCS eligibility rules",
        "Section 206C rates",
        "Quarterly return filing",
        "Difference between TCS & TDS",
      ],
      help: "We manage TCS calculation, collection & return submission.",
    },
    {
      title: "Corporate Taxation",
      meaning: "Tax compliance for Pvt Ltd, LLP & Registered Firms.",
      why: "Non-compliance affects finance & audit reports.",
      learn: [
        "Corporate tax slabs",
        "MAT / AMT rules",
        "Depreciation & deductions",
        "Advance tax payment process",
      ],
      help: "We manage corporate tax planning, audit coordination & annual filing.",
    },
    {
      title: "Indirect Taxes",
      meaning: "Includes GST, Customs, Excise, Import/Export duties.",
      why: "Wrong documentation can stop shipments & hamper clearance.",
      learn: [
        "Customs import duty rules",
        "Excise/VAT applicability",
        "Anti-dumping duties",
        "Documentation required",
      ],
      help: "Full tax support for import/export-based businesses.",
    },
    {
      title: "Financial & Investment Tax Planning",
      meaning: "Tax saving using correct investments & deduction planning.",
      why: "Smart planning reduces tax burden & increases cashflow.",
      learn: [
        "80C/80D/80G deductions",
        "Best investment strategies",
        "Advance vs last-minute planning",
        "Tax-efficient business structure",
      ],
      help: "We build personalized yearly tax-saving plan.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO SECTION */}
      <section className="py-20 bg-linear-to-br from-primary/20 to-primary/5 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GST & Taxation Services</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Complete GST, TDS, TCS & Income Tax compliance for individuals & businesses.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Talk To Tax Expert <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-10">
          {taxationServices.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileText size={28} className="text-primary" />
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>

              <p className="text-foreground/70"><b>Meaning:</b> {item.meaning}</p>
              <p className="text-foreground/70 mt-1"><b>Why it matters:</b> {item.why}</p>

              <div className="mt-4">
                <b>What you will learn:</b>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-foreground/70">
                  {item.learn.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>

              <div className="mt-4 bg-primary/10 border text-primary p-4 rounded-lg font-medium">
                {item.help}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 bg-primary/10">
        <div className="text-center max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Need help with GST or Income Tax?</h2>
          <p className="text-foreground/70 mt-2 mb-6">Let our experts manage compliance for you.</p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Get Tax Assistance <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
