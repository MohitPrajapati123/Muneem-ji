"use client";

import { useState } from "react";
import { CheckCircle, Users } from "lucide-react";

const hrTopics = [
  "HR Compliance",
  "ESIC Management",
  "PF (Provident Fund) Compliance",
  "PR Accounting",
  "Payroll Compliance",
  "Employee Documentation & Record Keeping",
];

const hrDetails = [
  {
    title: "HR Compliance",
    desc: "We handle employee documentation, policy creation, record maintenance, and complete HR compliance support.",
  },
  {
    title: "ESIC Management",
    desc: "Complete ESIC compliance including deductions, challan filing, returns submission, and employee insurance support.",
  },
  {
    title: "PF (Provident Fund) Compliance",
    desc: "Accurate PF calculation, challan preparation, monthly return filing, KYC updates, and compliance advisory.",
  },
  {
    title: "PR Accounting",
    desc: "Comprehensive payroll accounting support including salary reports, statutory deductions, and reconciliations.",
  },
  {
    title: "Payroll Compliance",
    desc: "Salary processing, TDS, EPFO, ESIC deductions, form generations, and monthly compliance management.",
  },
  {
    title: "Employee Documentation & Record Keeping",
    desc: "Maintaining employee files, onboarding documents, attendance sheets, register entries, and HR reports.",
  },
];

export default function HRSection() {
  const [expandedTopic, setExpandedTopic] = useState(0);

  return (
    <section id="hr-services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Illustration */}
          <div className="bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl h-96 flex items-center justify-center order-2 md:order-1">
            <div className="text-center">
              <Users size={80} className="text-primary/40 mx-auto mb-4" />
              <p className="text-foreground/50">Human Resource Management</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              👥 HR Services
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Complete HR Compliance & Workforce Management
            </h2>

            <p className="text-foreground/70 mb-8">
              We ensure smooth HR operations for your organization through accurate payroll, employee documentation, 
              statutory compliance, and welfare management.
            </p>

            {/* Topics List */}
            <div className="space-y-3">
              {hrTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => setExpandedTopic(expandedTopic === index ? -1 : index)}
                  className="w-full text-left flex items-start gap-3 p-4 rounded-lg border border-border 
                             hover:border-primary hover:bg-primary/5 transition cursor-pointer"
                >
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />

                  <div>
                    <span className="text-foreground font-medium block">{topic}</span>

                    {expandedTopic === index && (
                      <span className="text-sm text-foreground/70 mt-2 block animate-in fade-in">
                        {hrDetails[index].desc}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
