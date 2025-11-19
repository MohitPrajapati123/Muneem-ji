import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import FinanceSection from "@/components/finance-section"
import HRSection from "@/components/hr-section"
import ESICSection from "@/components/esic-section"
import EPFOSection from "@/components/epfo-section"
import StartupSection from "@/components/startup-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <FinanceSection />
      <HRSection />
      <ESICSection />
      <EPFOSection />
      <StartupSection />
      <CTA />
      <Footer />
    </main>
  )
}
