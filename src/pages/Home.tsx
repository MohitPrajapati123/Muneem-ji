import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FinanceSection from "@/components/finance-section";
import HRSection from "@/components/hr-section";
import AccountingSection from "@/components/accounting-section";
import BusinessSection from "@/components/Business-section"; // ✅ FIXED
import StartupSection from "@/components/startup-section";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <FinanceSection />
      <HRSection />
      <AccountingSection />
      <BusinessSection /> {/* ✅ FIXED */}
      <StartupSection />
      <CTA />
      <Footer />
    </main>
  );
}
