"use client";

import { useState } from "react";
import {
  DollarSign,
  Users,
  FileText,
  Briefcase,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// Correct image imports
import financeImg from "../assets/business-finance-accounting-professional.png";
import hrImg from "../assets/human-resource-team-management-collaboration.png";
import esicImg from "../assets/insurance-employee-protection-coverage.png";
import epfoImg from "../assets/pension-retirement-savings-financial-security.png";
import startupImg from "../assets/startup-business-launch-entrepreneurship.jpg";

const services = [
  {
    icon: DollarSign,
    title: "Taxation",
    description:
      "GST, TDS, ITR filing, reconciliation, tax planning & financial compliance services.",
    route: "/taxation",
    image: financeImg,
  },
  {
    icon: Users,
    title: "Labour & Legal Compliance",
    description:
      "PF, ESIC, payroll compliance, employee documentation & HR regulatory support.",
    route: "/labour-legal-compliance",
    image: hrImg,
  },
  {
    icon: FileText,
    title: "Financial Reporting",
    description:
      "Financial statements, MIS reporting, consolidation & statutory reporting.",
    route: "/financial-reporting",
    image: esicImg,
  },
  {
    icon: Briefcase,
    title: "Registration",
    description:
      "Company, LLP, Proprietorship, GST, MSME, EPFO, ESIC & other business registrations.",
    route: "/registration",
    image: epfoImg,
  },
  {
    icon: Rocket,
    title: "Startup Guide",
    description:
      "Complete roadmap for launching your startup including registration & legal setup.",
    route: "/startup",
    image: startupImg,
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            All-Inclusive Business Solutions
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Everything you need to operate and grow a successful, fully regulated business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link to={service.route} key={index}>
                <div
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="bg-card border border-border rounded-xl overflow-hidden 
                            hover:shadow-2xl hover:border-primary transition-all duration-300
                            cursor-pointer transform hover:scale-105 h-full"
                >
                  {/* Service image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>

                    <h3 className="font-bold text-foreground mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-foreground/60">
                      {service.description}
                    </p>

                    {hoveredService === index && (
                      <div className="flex items-center gap-2 text-primary mt-4 animate-pulse">
                        <span className="text-xs font-semibold">View Details</span>
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
