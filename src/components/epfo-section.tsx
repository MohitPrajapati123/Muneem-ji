"use client";

import { useState } from "react";
import { Shield } from "lucide-react";

const epfoPoints = [
  {
    title: "Provident Fund (PF)",
    desc: "Mandatory monthly savings scheme for employee retirement benefits",
  },
  {
    title: "Employees Contribution",
    desc: "12% of basic salary + DA deducted from salary",
  },
  {
    title: "Employer Contribution",
    desc: "12% of basic salary + DA contributed by employer",
  },
  {
    title: "Pension & Gratuity",
    desc: "Additional benefits including family pension and gratuity schemes",
  },
];

export default function EPFOSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="epfo" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            🛡️ EPFO Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Employees' Provident Fund Organization
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Secure your employees' retirement and benefits through EPFO schemes
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {epfoPoints.map((point, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() =>
                setHoveredCard(hoveredCard === index ? null : index)
              }
              className={`bg-card border border-border rounded-xl p-6 transition-all cursor-pointer 
              ${hoveredCard === index ? "shadow-xl border-primary scale-[1.03]" : "hover:shadow-lg hover:scale-105"}`}
            >
              <div className="flex items-start gap-4">
                <Shield className="text-primary shrink-0 mt-1" size={24} />

                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-foreground/70">{point.desc}</p>

                  {hoveredCard === index && (
                    <button className="mt-4 text-primary font-semibold text-sm hover:underline opacity-100 transition-all">
                      Learn More →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
