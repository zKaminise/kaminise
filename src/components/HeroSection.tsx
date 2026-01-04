import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import DeviceMockup from "./DeviceMockup";
import SocialProof from "./SocialProof";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Bottom glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none"></div>
      
      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column - Content */}
          <div 
            className="flex flex-col gap-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">Astro Sites</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Pare de perder vendas por não ter{" "}
              <span className="text-accent">um site profissional.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Seu negócio precisa aparecer, gerar confiança e transformar visitantes em clientes, 
              mesmo enquanto você dorme. Sites feitos sob medida por especialistas de alto nível. 
              Clique no botão abaixo e receba uma Consultoria Gratuita pelo Whatsapp:
            </p>

            {/* CTA Button */}
            <div>
              <Button 
                size="lg" 
                variant="cta"
                className="group"
                asChild
              >
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  QUERO UM ORÇAMENTO
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <SocialProof />
          </div>

          {/* Right Column - Device Mockup */}
          <div 
            className="relative animate-fade-up lg:pl-8"
            style={{ animationDelay: "0.3s" }}
          >
            <DeviceMockup />
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
