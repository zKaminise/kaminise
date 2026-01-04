import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import CasesSection from "@/components/CasesSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <ServicesSection />
      <MarqueeSection />
      <CasesSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
