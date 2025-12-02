"use client";

import { useState } from "react";
import { Shield } from "lucide-react";

const registrationPoints = [
  {
    title: "Company / LLP / Partnership / Proprietorship Registration",
    desc: "Register your business legally and choose the right structure as per your operational needs.",
  },
  {
    title: "MSME Registration",
    desc: "Get government recognition for your business and avail subsidies & benefits under MSME.",
  },
  {
    title: "Startup India Registration",
    desc: "Official DPIIT Startup Recognition to enjoy tax exemptions, funding opportunities, and compliance support.",
  },
  {
    title: "GST Registration",
    desc: "Obtain GSTIN for your business, enabling GST-compliant invoicing and tax credit claims.",
  },
  {
    title: "Shop Act Registration",
    desc: "Register commercial establishments under local state regulations for legal business operation.",
  },
  {
    title: "PAN Card Registration",
    desc: "Apply for new PAN or corrections for businesses and individuals for all financial transactions.",
  },
  {
    title: "ESIC Registration",
    desc: "Mandatory registration for employers with 10+ workers for employee insurance and benefits.",
  },
  {
    title: "EPFO Registration",
    desc: "Register your establishment for PF compliance, pension schemes, and employee retirement benefits.",
  },
];

export default function RegistrationSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="registration" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            📝 Business Registration Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Business Registration & Setup
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Get your business legally recognized with smooth, hassle-free registration services.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registrationPoints.map((point, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() =>
                setHoveredCard(hoveredCard === index ? null : index)
              }
              className={`bg-card border border-border rounded-xl p-6 transition-all cursor-pointer 
              ${
                hoveredCard === index
                  ? "shadow-xl border-primary scale-[1.03]"
                  : "hover:shadow-lg hover:scale-105"
              }`}
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
