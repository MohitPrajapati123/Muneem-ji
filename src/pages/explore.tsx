import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const services = [
    {
      title: "Taxation",
      description:
        "GST, TDS, ITR filing, reconciliation, tax planning & compliance solutions.",
      icon: "💰",
      link: "/taxation",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Labour & Legal Compliance",
      description:
        "PF, ESIC, payroll compliance, employee documentation & HR regulatory support.",
      icon: "👥",
      link: "/labour-legal-compliance",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Financial Reporting",
      description:
        "Financial statements, MIS, consolidation & statutory reporting services.",
      icon: "📊",
      link: "/financial-reporting",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Registration Services",
      description:
        "Company, LLP, GST, MSME, EPFO, ESIC & all business registrations.",
      icon: "📝",
      link: "/registration",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Startup Guide",
      description:
        "Step-by-step roadmap for launching and growing your startup legally.",
      icon: "🚀",
      link: "/startup",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Accounting",
      description:
        "Bookkeeping, GST invoicing, payroll, and financial statement preparation.",
      icon: "📘",
      link: "/accounting",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-linear-to-r from-primary to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Explore All Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Your complete business compliance and financial management partner.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link to={service.link} key={index}>
                  <div className="group h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-slate-100 hover:border-primary cursor-pointer">
                    
                    <div className="text-5xl mb-4">{service.icon}</div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-6">{service.description}</p>

                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition gap-1">
                      Explore <ArrowRight size={18} />
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
