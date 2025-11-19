"use client"

import { useState } from "react"
import { Info } from "lucide-react"

const esicPoints = [
  {
    title: "Who Needs ESIC Registration?",
    desc: "Establishments with 10 or more employees, manufacturing or non-manufacturing",
  },
  {
    title: "ESIC Benefits",
    desc: "Medical, disability, employment injury, and cash benefits for workers",
  },
  {
    title: "Contribution Rate",
    desc: "Employee: 0.75%, Employer: 3.25% of wages",
  },
  {
    title: "Claim Process",
    desc: "Simple and quick claim settlement for insured workers",
  },
]

export default function ESICSection() {
  const [selectedPoint, setSelectedPoint] = useState(0)

  return (
    <section id="esic" className="py-16 md:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            📋 ESIC Information
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Employees' State Insurance Corporation
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive information about ESIC registration, benefits, and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {esicPoints.map((point, index) => (
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
                <Info
                  className={`shrink-0 mt-1 ${selectedPoint === index ? "text-primary" : "text-foreground/60"}`}
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
  )
}
