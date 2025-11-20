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

// ✅ Correct image imports
import financeImg from "../assets/business-finance-accounting-professional.jpg";
import hrImg from "../assets/human-resource-team-management-collaboration.jpg";
import esicImg from "../assets/insurance-employee-protection-coverage.jpg";
import epfoImg from "../assets/pension-retirement-savings-financial-security.jpg";
import startupImg from "../assets/startup-business-launch-entrepreneurship.jpg";

const services = [
  {
    icon: DollarSign,
    title: "Finance & Accounts",
    description: "Learn bookkeeping, GST, taxation, and financial management",
    route: "/finance",
    image: financeImg, // ✅ Correct variable
  },
  {
    icon: Users,
    title: "HR Services",
    description: "Employee management, payroll, and workplace compliance",
    route: "/hr-services",
    image: hrImg,
  },
  {
    icon: FileText,
    title: "ESIC",
    description: "Employees' State Insurance Corporation guidelines",
    route: "/esic",
    image: esicImg,
  },
  {
    icon: Briefcase,
    title: "EPFO",
    description: "Provident fund, gratuity, and retirement benefits",
    route: "/epfo",
    image: epfoImg,
  },
  {
    icon: Rocket,
    title: "Startup Guide",
    description: "Complete roadmap to launch and grow your business",
    route: "/startup",
    image: startupImg,
  },
];

export default function Services() {
  // Type: number | null for hover index
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
