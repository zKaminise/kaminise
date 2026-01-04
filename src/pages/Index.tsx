import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
