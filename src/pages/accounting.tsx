"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccountingPage() {
  const accountingServices = [
    {
      title: "Bookkeeping",
      meaning:
        "Bookkeeping is recording daily business transactions like sales, purchases, income & expenses in an organized manner.",
      why: "Incorrect bookkeeping causes tax issues, wrong profits, cashflow confusion & loan rejection.",
      learn: [
        "What counts as business income & expenses",
        "Cash vs Accrual Accounting",
        "How to maintain Registers (Sales/Purchase)",
        "Monthly bookkeeping cycle",
        "How to avoid GST/IT notices",
        "Common mistakes small firms make",
      ],
      help:
        "We maintain real-time books with professional software so you always know accurate profit & cash flow.",
    },

    {
      title: "GST Invoicing",
      meaning:
        "Issuing correct GST Tax Invoice using proper GST rate, HSN/SAC code & compulsory government fields.",
      why: "Wrong invoicing leads to ITC loss, penalties, rejection during audit and payment disputes.",
      learn: [
        "Rules of GST Invoice format",
        "Tax Invoice vs Bill of Supply",
        "HSN/SAC code mapping",
        "E-Invoicing eligibility",
        "Credit/Debit note handling",
        "How proper invoicing improves cashflow",
      ],
      help:
        "We design GST-compliant invoices & automate tax calculations to ensure smooth ITC claims.",
    },

    {
      title: "Payroll",
      meaning:
        "Payroll is salary calculation, attendance management, PF/ESI/TDS deduction & payslip generation.",
      why: "Payroll errors cause penalties & employee dissatisfaction + legal issues.",
      learn: [
        "Salary breakup (Basic/HRA/Allowance)",
        "Payroll compliance PF/ESIC/TDS",
        "Payslip & salary sheet preparation",
        "Leave & Attendance policy",
        "FNF Settlement",
        "Monthly vs Weekly Payroll",
      ],
      help:
        "We manage payroll end-to-end including salary sheet, challans & Form 16 generation.",
    },

    {
      title: "Document Keeping",
      meaning:
        "Organised storage of all bills, invoices, challans, agreements, vouchers & business records.",
      why: "Missing documents cause failed audits, disallowed expenses & delayed ITC refund.",
      learn: [
        "Mandatory documents to store",
        "Digital vs Physical record keeping",
        "How long documents must be preserved",
        "How to store GST challans/proofs",
        "Audit-ready documentation",
        "How mismatches are prevented",
      ],
      help:
        "We organize financial docs (digital/physical) to ensure quick retrieval during audit & filing.",
    },

    {
      title: "Financial Statements & Reports",
      meaning:
        "Financial Statements reflect actual business health using Balance Sheet, P&L & Cashflow reports.",
      why: "Essential for loan approval, investor pitch & tax filing. Helps track real business growth.",
      learn: [
        "Components of Balance Sheet",
        "Gross Profit vs Net Profit",
        "Cashflow vs Profit difference",
        "Depreciation & adjustments",
        "Monthly/Quarterly/Annual reporting",
        "How reports show growth issues",
      ],
      help:
        "We prepare detailed reports which help you make smart decisions and scale confidently.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="py-20bg-linear-to-brfrom-primary/20 to-primary/5 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900"> Accounting & Bookkeeping Services</h1>

          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            We manage day-to-day accounts, invoicing & reporting with accuracy, ensuring complete GST & IT compliance.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90"
          >
            Get Accounting Support <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* DETAILS BLOCKS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid gap-10">
          {accountingServices.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md p-6 md:p-8 transition">
              <div className="flex items-center gap-3 mb-4">
                <FileText size={26} className="text-primary" />
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>

              <p className="text-foreground/70"><b>What it means:</b> {item.meaning}</p>
              <p className="text-foreground/70 mt-1"><b>Why it matters:</b> {item.why}</p>

              <div className="mt-4">
                <b>What you will learn:</b>
                <ul className="pl-6 list-disc space-y-2 text-foreground/70 mt-2">
                  {item.learn.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 bg-primary/10 text-primary font-medium p-4 rounded-lg border">
                {item.help}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary/10 text-center">
        <h2 className="text-3xl font-bold mb-3 text-black">Need updated business accounts?</h2>
        <p className="text-foreground/70 max-w-xl mx-auto mb-6">
          We maintain books, create invoices, prepare reports & handle compliance — so you stay financial stress free.
        </p>

        <Link
          to="/contact"
          className="bg-primary text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-primary/90"
        >
          Talk to Accounting Expert <ArrowRight size={20} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
