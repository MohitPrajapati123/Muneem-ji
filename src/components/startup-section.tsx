"use client"

import { useState } from "react"

const startupSteps = [
  {
    step: "01",
    title: "Business Plan",
    desc: "Define your business idea, target market, and financial projections",
  },
  {
    step: "02",
    title: "Legal Structure",
    desc: "Choose between Sole Proprietor, Partnership, Private Limited, or LLP",
  },
  {
    step: "03",
    title: "Registration",
    desc: "Register with GST, obtain PAN, TAN, and other required licenses",
  },
  {
    step: "04",
    title: "Bank Account",
    desc: "Open a business bank account and set up accounting system",
  },
  {
    step: "05",
    title: "HR & Compliance",
    desc: "Set up ESIC, EPF, and establish employee policies",
  },
  {
    step: "06",
    title: "Growth",
    desc: "Scale your business with proper financial and operational management",
  },
]

export default function StartupSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="startup-guide" className="py-16 md:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            🚀 Startup Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">How to Create a Startup</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Step-by-step guide to launch your entrepreneurial journey successfully
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startupSteps.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className={`border-2 rounded-xl p-6 transition-all cursor-pointer transform hover:scale-105 ${
                activeStep === index
                  ? "bg-primary border-primary shadow-xl"
                  : "bg-background border-border hover:border-primary/50"
              }`}
            >
              <div className={`text-4xl font-bold mb-3 ${activeStep === index ? "text-white/30" : "text-primary/30"}`}>
                {item.step}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${activeStep === index ? "text-white" : "text-foreground"}`}>
                {item.title}
              </h3>
              <p className={activeStep === index ? "text-white/80" : "text-foreground/70"}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
