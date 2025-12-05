"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinancialReportingPage() {
  const reportingData = [
    {
      title: "Preparation of Financial Statements",
      what: "Financial statements such as Balance Sheet, Profit & Loss and Cash Flow represent your business performance.",
      why: "Banks, investors and auditors use these reports to judge business financial health.",
      learn: [
        "Components of financial statements",
        "Difference between profit & cash flow",
        "How assets, liabilities, revenue & expenses are recorded",
        "Important financial ratios every owner should know",
        "Role of accurate bookkeeping in final accounts",
      ],
      help: "We prepare complete audit-ready statements that reflect the true business position.",
    },
    {
      title: "Monthly / Quarterly / Annual Reporting",
      what: "Regular reporting helps track business growth and identify financial issues early.",
      why: "Most businesses fail because owners don’t monitor financial data regularly.",
      learn: [
        "What monthly reports must include",
        "Monthly vs quarterly vs annual reporting",
        "Cash flow & revenue tracking",
        "Budget vs actual comparison",
        "How timely reporting prevents losses",
      ],
      help: "We provide easy, periodic reports so you always know your numbers clearly.",
    },
    {
      title: "Statutory Reporting",
      what: "Reports required under law such as ROC filings, tax reports, and audit-linked documents.",
      why: "Late or incorrect reports lead to penalties and compliance issues.",
      learn: [
        "ROC filings for Company & LLP",
        "Income tax reporting formats",
        "GST related financial reporting",
        "Audit documentation",
        "Statutory proofs required",
      ],
      help: "We prepare & file statutory reports on time to maintain full compliance.",
    },
    {
      title: "Consolidation of Accounts",
      what: "Combining multiple branches or companies into one financial statement.",
      why: "Owners cannot judge business performance without consolidated reports.",
      learn: [
        "When consolidation is required",
        "Multi-branch consolidation",
        "Inter-company transaction elimination",
        "Consolidated P&L & Balance Sheet",
        "Holding-subsidiary reporting",
      ],
      help: "We prepare consolidated financials for complete business performance view.",
    },
    {
      title: "Management Reporting (MIS Reporting)",
      what: "Reports that help decision making based on performance trends & profitability.",
      why: "Good business decisions require accurate real-time data.",
      learn: [
        "Monthly MIS dashboards",
        "Profitability by product/service",
        "Cash flow forecasting",
        "Budget vs actual variance analysis",
        "KPI tracking",
      ],
      help: "We design MIS reports that help you make confident growth decisions.",
    },
    {
      title: "Regulatory Reporting",
      what: "Reporting submissions for authorities like RBI, SEBI, MCA & GST Department.",
      why: "Non-compliance may freeze transactions or lead to penalties.",
      learn: [
        "RBI filings for foreign investments",
        "Annual ROC/MCA filings",
        "SEBI & regulatory submissions",
        "NBFC reporting formats",
        "Record keeping rules",
      ],
      help: "We ensure all filings are accurate, timely & compliant.",
    },
    {
      title: "Accounting & Bookkeeping Support",
      what: "Ongoing accounts management, reconciliation & clean book maintenance.",
      why: "Without bookkeeping, reports become inaccurate & unreliable.",
      learn: [
        "Daily/weekly bookkeeping",
        "Bank & cash reconciliation",
        "AP/AR management",
        "GST/TDS data entry",
        "Audit-ready documentation",
      ],
      help: "We maintain clean books year-round to support reliable reporting.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Financial Reporting & Analysis
            </h1>
            <p className="text-lg text-foreground/60 mb-8">
              Accurate financial statements, compliance-ready reports and MIS dashboards 
              for growth-focused businesses.
            </p>

            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-primary/90 transition"
            >
              Discuss Reporting Needs <ArrowRight size={20} />
            </Link>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Why Your Business Needs Reporting?
            </h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex gap-2"><CheckCircle className="text-primary" size={18}/> Better business decision making</li>
              <li className="flex gap-2"><CheckCircle className="text-primary" size={18}/> Required for audit, tax & compliance</li>
              <li className="flex gap-2"><CheckCircle className="text-primary" size={18}/> Essential for loans & investors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FULL DETAILED SECTIONS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">

          {reportingData.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-primary mb-6">{item.title}</h2>

              <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
                <p><b>What it means:</b> {item.what}</p>
                <p><b>Why it matters:</b> {item.why}</p>

                <div>
                  <b className="text-primary">You will learn:</b>
                  <ul className="list-disc mt-2 ml-6 space-y-1">
                    {item.learn.map((l,k)=> <li key={k}>{l}</li>)}
                  </ul>
                </div>

                <p><b>How Muneem Jee helps:</b> {item.help}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black">Need a reporting partner?</h3>
            <p className="text-foreground/60 max-w-xl">
              From MIS dashboards to consolidated financial statements, we manage everything end-to-end.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition flex items-center gap-2"
          >
            Request Consultation <ArrowRight size={20}/>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
