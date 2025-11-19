"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LearnMorePage1() {
  const learnMoreCards = [
    {
      step: "01",
      title: "Understanding Startup Success",
      desc: "Learn the foundational elements that make startups successful from the beginning.",
      points: ["Product-market fit", "Customer understanding", "Scalable business model"],
    },
    {
      step: "02",
      title: "Market Research & Analysis",
      desc: "Validate your idea with data-driven market research and insights.",
      points: ["Demand research", "Competitor analysis", "TAM / SAM / SOM"],
    },
    {
      step: "03",
      title: "Business Models",
      desc: "Discover different startup business models.",
      points: ["D2C / B2C", "SaaS", "Subscription models"],
    },
    {
      step: "04",
      title: "Legal & Compliance",
      desc: "Learn all essential business compliance requirements.",
      points: ["GST / PAN / TAN", "Company registration", "Trademark & IP"],
    },
    {
      step: "05",
      title: "Finance & Budgeting",
      desc: "Keep finances strong and compliant.",
      points: ["Bookkeeping", "Tax planning", "Cash flow management"],
    },
    {
      step: "06",
      title: "HR, Payroll & Team Building",
      desc: "Hire & manage your team properly.",
      points: ["Hiring", "Payroll", "EPF / ESIC compliance"],
    },
    {
      step: "07",
      title: "Product Development & MVP",
      desc: "Build a Minimum Viable Product customers love.",
      points: ["Core features", "User testing", "Roadmap development"],
    },
    {
      step: "08",
      title: "Marketing & Growth",
      desc: "Grow with modern digital marketing techniques.",
      points: ["SEO / Social Media", "Branding", "Paid Ads"],
    },
    {
      step: "09",
      title: "Funding & Investment",
      desc: "Learn about startup funding opportunities.",
      points: ["Angel investors", "VC funding", "Govt schemes"],
    },
    {
      step: "10",
      title: "Scaling Your Startup",
      desc: "Scale operations & expand markets.",
      points: ["KPIs tracking", "Automation tools", "Market expansion"],
    },
  ]

  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground text-center border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Learn More About Building a Successful Startup
          </h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Deep knowledge to help you plan, launch & scale your business with confidence.
          </p>
        </div>
      </section>

      {/* Main Cards Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Detailed Startup Knowledge</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-pretty">
              Explore expert-level business knowledge designed for entrepreneurs & startups.
            </p>
          </div>

          {/* Cards Grid (Same UI as Startup Section) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnMoreCards.map((card, index) => (
              <div
                key={index}
                className="border-2 rounded-xl p-6 transition-all cursor-pointer transform hover:scale-105 
                bg-background border-border hover:border-primary/50 shadow-sm hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="text-4xl font-bold mb-3 text-primary/30">{card.step}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-foreground">{card.title}</h3>

                {/* Description */}
                <p className="text-foreground/70 mb-4">{card.desc}</p>

                {/* Points */}
                <ul className="list-disc ml-5 space-y-1 text-foreground/70">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}
