"use client";

import { useState } from "react";
import { FileSpreadsheet } from "lucide-react";

const accountingPoints = [
  {
    title: "Bookkeeping",
    desc: "Daily transaction entry, ledgers, journals, and account reconciliation for accurate financial records.",
  },
  {
    title: "GST Invoicing",
    desc: "Create GST-compliant invoices, track outward & inward supplies, and maintain tax records.",
  },
  {
    title: "Payroll Processing",
    desc: "Monthly salary processing with PF, ESIC, TDS deductions and automated pay slips.",
  },
  {
    title: "Document Keeping",
    desc: "Manage invoices, receipts, purchase bills, bank statements, agreements, and compliance documents.",
  },
  // {
  //   title: "Financial Statements",
  //   desc: "Prepare balance sheets, profit & loss statements, cash flow statements, and trial balance reports.",
  // },
];

export default function AccountingSection() {
  const [selectedPoint, setSelectedPoint] = useState(0);

  return (
    <section id="accounting" className="py-16 md:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            📊 Accounting & Bookkeeping
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Complete Accounting & Financial Management
          </h2>

          <p className="text-foreground/70 max-w-2xl mx-auto">
            Manage your financial records smoothly with bookkeeping, payroll, GST invoicing, and accurate reporting.
          </p>
        </div>

        {/* Accounting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accountingPoints.map((point, index) => (
            <div
              key={index}
              onClick={() => setSelectedPoint(index)}
              className={`bg-background border-2 rounded-xl p-6 cursor-pointer transition-all transform hover:scale-105 ${
                selectedPoint === index
                  ? "border-primary shadow-lg bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <FileSpreadsheet
                  className={`shrink-0 mt-1 ${
                    selectedPoint === index ? "text-primary" : "text-foreground/60"
                  }`}
                  size={24}
                />

                <div>
                  <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
                  <p className="text-foreground/70">{point.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
