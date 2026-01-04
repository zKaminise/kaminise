import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import BriefingSection from "@/components/BriefingSection";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import CasesSection from "@/components/CasesSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <BriefingSection />
      <PortfolioCarousel />
      <CasesSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
