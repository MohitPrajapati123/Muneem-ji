"use client"

import { useState } from "react"
import { CheckCircle, Users } from "lucide-react"

const hrTopics = [
  "Employee Recruitment & Selection",
  "Payroll Management",
  "Leave & Attendance Policy",
  "Employee Benefits & Welfare",
  "Labour Laws Compliance",
  "Performance Management",
]

const hrDetails = [
  { title: "Employee Recruitment & Selection", desc: "Streamlined hiring process with documentation and onboarding" },
  { title: "Payroll Management", desc: "Accurate salary calculation with statutory deductions and timely payment" },
  { title: "Leave & Attendance Policy", desc: "Track attendance and manage various leave types with compliance" },
  { title: "Employee Benefits & Welfare", desc: "Health insurance, gratuity, bonus schemes, and welfare programs" },
  { title: "Labour Laws Compliance", desc: "Adherence to all labor laws and employee protection regulations" },
  { title: "Performance Management", desc: "Regular reviews, KPIs, and employee development programs" },
]

export default function HRSection() {
  const [expandedTopic, setExpandedTopic] = useState(0)

  return (
    <section id="hr-services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl h-96 flex items-center justify-center order-2 md:order-1">
            <div className="text-center">
              <Users size={80} className="text-primary/40 mx-auto mb-4" />
              <p className="text-foreground/50">HR Management System</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              👥 HR Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Effective Human Resource Management
            </h2>
            <p className="text-foreground/70 mb-8">
              Build a strong HR foundation for your organization with proper policies, compliance, and employee
              management strategies.
            </p>
            <div className="space-y-3">
              {hrTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => setExpandedTopic(expandedTopic === index ? -1 : index)}
                  className="w-full text-left flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition cursor-pointer"
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
  )
}
