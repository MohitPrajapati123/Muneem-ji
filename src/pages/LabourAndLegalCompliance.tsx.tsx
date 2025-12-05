"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react"; // CheckCircle removed because not used
import { Link } from "react-router-dom";
import human from "../assets/human-resource-management-team-collaboration.png";

export default function HRServicesPage() {

  const complianceData = [
    {
      title: "PF & ESIC Compliances",
      what: "Mandatory social security schemes for employees involving contributions, challans and monthly filings.",
      why: "Non-compliance leads to penalties, interest, inspections & legal action.",
      learn: [
        "Applicability rules for PF & ESIC",
        "Employee/Employer contribution rates",
        "UAN creation & KYC updates",
        "Monthly challan & return filing",
        "Audit & inspection requirements",
      ],
      help: "We manage all PF/ESIC challans, monthly filings, employee onboarding & compliance end-to-end."
    },
    {
      title: "Payroll & Salary Compliance",
      what: "Legally compliant payroll structure with deductions, registers & timely employee payout.",
      why: "Incorrect salary breakup leads to disputes, penalties & legal notices.",
      learn: [
        "Minimum wages, overtime rules",
        "Pay registers & muster roll",
        "PF/ESIC/TDS/Professional Tax deductions",
        "Payslip formats & digital payroll",
      ],
      help: "We manage salary setup, deductions & compliance payroll filing monthly."
    },
    {
      title: "Professional Tax (PT)",
      what: "A state-wise mandatory tax to be deducted from employee salaries.",
      why: "Wrong deduction or late deposit invites penalties.",
      learn: [
        "PT applicability per state",
        "Salary-wise slab deduction",
        "Registration process",
        "Monthly returns & compliance",
      ],
      help: "We handle PT registration, challans & return filing seamlessly."
    },
    {
      title: "Shop & Establishment Act",
      what: "Legal registration for shops/offices mandatory for hiring & inspections.",
      why: "Required for bank account opening & labour inspections.",
      learn: [
        "Who must register?",
        "Leave rules & weekly off",
        "Record & document requirements",
        "Renewal & amendment procedure",
      ],
      help: "We obtain certificate & maintain full compliance under labour laws."
    },
    {
      title: "Contract Labour Compliance",
      what: "Compliance under Contract Labour Act for companies using third-party workforce.",
      why: "Mismanagement leads to penalties, wage disputes & legal inspection.",
      learn: [
        "CLRA registration applicability",
        "Contractor licensing rules",
        "Wage & overtime compliance",
        "Statutory register maintenance",
      ],
      help: "We complete contractor licensing, registers & compliance audits."
    },
    {
      title: "Labour Welfare Fund (LWF)",
      what: "Statutory contribution for labour welfare benefits.",
      why: "State-wise rule difference causes compliance gaps often unnoticed.",
      learn: [
        "LWF applicability",
        "Contribution rates",
        "Return filings",
        "Employee benefit eligibility",
      ],
      help: "We ensure timely payments & state-wise compliance monitoring."
    },
    {
      title: "Factory License & Trade License",
      what: "Mandatory for manufacturing units & commercial operations.",
      why: "Non-compliance results in license rejection or operation halt.",
      learn: [
        "Factory establishment eligibility",
        "Safety & shift rules",
        "Municipal trade license rules",
        "Renewal & inspection compliance",
      ],
      help: "We assist in application, renewal & documentation support."
    },
    {
      title: "HR & Labour Law Record Maintenance",
      what: "Maintenance of registers for attendance, salary, OT, PF/ESIC etc.",
      why: "Missing records cause penalties in labour inspections.",
      learn: [
        "Attendance & muster rolls",
        "Wage register maintenance",
        "Leave & OT records",
        "PF/ESIC statutory registers",
      ],
      help: "We setup complete HR documentation for audit readiness."
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

          <img src={human} alt="HR Services" className="rounded-xl shadow-lg w-full" />

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Human Resource & Labour Compliance Solutions
            </h1>
            <p className="text-lg text-foreground/70 mb-8">
              End-to-end HR operations, labour law compliance, payroll processing, 
              PF/ESIC statutory filing & organization documentation handled smoothly.
            </p>

            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-primary/90 transition">
              Talk to HR Specialist <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS LIST */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">

          {complianceData.map((item, i) => (
            <div key={i}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition">

              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {i+1}. {item.title}
              </h2>

              <p className="text-sm text-foreground/80 mb-2">
                <b>What it means:</b> {item.what}
              </p>
              <p className="text-sm text-foreground/80 mb-4">
                <b>Why it matters:</b> {item.why}
              </p>

              <div className="mb-4">
                <b className="text-primary">What you will learn:</b>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-foreground/70">
                  {item.learn.map((l,k)=> <li key={k}>{l}</li> )}
                </ul>
              </div>

              <p className="text-sm text-foreground/80">
                <b>How Muneem Jee helps:</b> {item.help}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary/5 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black">Need HR & Labour Law Support?</h3>
            <p className="text-foreground/60 max-w-xl">
              Our team handles compliance end-to-end — payroll, PF/ESIC, registers, 
              documentation & inspections — so you can focus on business.
            </p>
          </div>

          <Link to="/contact"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition flex items-center gap-2">
            Contact HR Team <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
