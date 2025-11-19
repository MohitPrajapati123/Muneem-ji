import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const services = [
    {
      title: "Finance & Accounts",
      description: "Master bookkeeping, GST, income tax, and financial statements",
      icon: "💰",
      link: "/finance",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "HR Services",
      description: "Complete guide to employee management, payroll, and compliance",
      icon: "👥",
      link: "/hr-services",
      color: "from-green-500 to-green-600",
    },
    {
      title: "ESIC",
      description: "Employee State Insurance registration, benefits, and contributions",
      icon: "🛡️",
      link: "/esic",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "EPFO",
      description: "Provident fund, pension schemes, and gratuity information",
      icon: "📈",
      link: "/epfo",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Startup Guide",
      description: "6-step roadmap to launch your business successfully",
      icon: "🚀",
      link: "/startup",
      color: "from-red-500 to-red-600",
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
              Comprehensive solutions for all your business and compliance needs
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
