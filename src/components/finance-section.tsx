"use client"

import { useState } from "react"
import { CheckCircle, ChevronDown, DollarSign } from "lucide-react"

const financeTopics = [
  {
    title: "Bookkeeping & Record Keeping",
    details:
      "Maintain organized financial records using GST invoice systems, bank reconciliation, and ledger management.",
  },
  {
    title: "GST (Goods and Services Tax)",
    details: "Understand GST registration, filing returns, managing input tax credit, and compliance requirements.",
  },
  {
    title: "Income Tax & Tax Planning",
    details: "Learn about income tax slabs, deductions, savings schemes, and effective tax planning strategies.",
  },
  {
    title: "Financial Statements",
    details: "Create profit & loss statements, balance sheets, and cash flow statements for business analysis.",
  },
  {
    title: "Auditing & Compliance",
    details: "Understand statutory audits, internal audits, and compliance with Companies Act requirements.",
  },
  {
    title: "Cash Flow Management",
    details: "Master working capital management, cash reserves, and liquidity planning for business growth.",
  },
]

export default function FinanceSection() {
  const [expandedTopic, setExpandedTopic] = useState(0)

  return (
    <section id="finance-accounts" className="py-16 md:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              💰 Finance & Accounts
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Streamline Financial Processes
            </h2>
            <p className="text-foreground/70 mb-8">
              Effectively manage financial records, optimize tax strategies, and ensure full compliance with government regulations.
            </p>

            <div className="space-y-3">
              {financeTopics.map((topic, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary transition"
                >
                  <button
                    onClick={() => setExpandedTopic(expandedTopic === index ? -1 : index)}
                    className="w-full flex items-center justify-between gap-3 p-4 bg-background hover:bg-background/80 transition"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <CheckCircle className="text-primary shrink-0" size={20} />
                      <span className="text-foreground font-medium">{topic.title}</span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-primary transition-transform ${expandedTopic === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedTopic === index && (
                    <div className="px-4 py-3 bg-primary/5 border-t border-border text-foreground/70 text-sm animate-in fade-in">
                      {topic.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl h-96 flex items-center justify-center sticky top-20">
            <div className="text-center">
              <DollarSign size={80} className="text-primary/40 mx-auto mb-4" />
              <p className="text-foreground/50">Financial Data Visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
