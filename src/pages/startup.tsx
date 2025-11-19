import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, CheckCircle, Play } from "lucide-react"
import { Link } from "react-router-dom";

export default function StartupPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance text-center">
            How to Create a Startup
          </h1>
          <p className="text-lg text-foreground/60 mb-8 text-center max-w-3xl mx-auto">
            Complete step-by-step guide to launch your startup and build a successful business from scratch
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Get Startup Guidance <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
              <Play size={28} className="text-primary" />
              Watch: Startup Launch Guide
            </h2>
            <p className="text-foreground/60">Learn how successful entrepreneurs build and scale their startups</p>
          </div>

          <div
            className="relative w-full bg-black rounded-xl overflow-hidden shadow-xl"
            style={{ aspectRatio: "16/9" }}
          >
            {/* <iframe
              width="100%"
              height="100%"
              src=""
              title="How to Start a Startup - Complete Guide"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            /> */}
            <iframe width="100%" height="100%"
             src="https://www.youtube.com/embed/oqQJBVjKQK0?si=2v_esQujxL9PieND" 
             title="YouTube video player" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen></iframe>
          </div>

          <p className="text-center text-foreground/60 mt-6 text-sm">
            Watch this comprehensive guide to understand the complete startup journey
          </p>
        </div>
      </section>

      {/* Startup Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">6 Steps to Launch Your Startup</h2>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Validate Your Business Idea",
                description:
                  "Research market demand, identify your target customers, analyze competition, and validate that your idea solves a real problem",
                details: ["Market research", "Customer surveys", "Competitor analysis", "Problem validation"],
              },
              {
                step: 2,
                title: "Create a Business Plan",
                description:
                  "Develop a comprehensive business plan that outlines your vision, mission, market strategy, financial projections, and growth roadmap",
                details: ["Business model", "Revenue streams", "Financial projections", "Marketing strategy"],
              },
              {
                step: 3,
                title: "Choose Business Structure & Register",
                description:
                  "Select appropriate business structure (Sole Proprietor, Partnership, or Company) and complete registration with ROC",
                details: ["PAN registration", "Company registration", "GST registration", "Statutory compliance"],
              },
              {
                step: 4,
                title: "Set Up Banking & Finance",
                description:
                  "Open business bank account, set up accounting system, and maintain financial records for compliance",
                details: ["Business bank account", "Bookkeeping system", "Tax planning", "Financial management"],
              },
              {
                step: 5,
                title: "Hire & Manage Employees",
                description: "Recruit team members, handle HR compliance, payroll, ESIC, and EPFO registration",
                details: ["Team hiring", "Payroll setup", "HR compliance", "Employee benefits"],
              },
              {
                step: 6,
                title: "Launch & Scale",
                description:
                  "Execute your go-to-market strategy, engage customers, and continuously improve your product or service",
                details: ["Marketing launch", "Customer acquisition", "Growth tracking", "Scaling strategy"],
              },
            ].map((item) => (
              <div key={item.step} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/60 mb-4">{item.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {item.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={16} className="text-primary shrink-0" />
                          <span className="text-foreground/70">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
