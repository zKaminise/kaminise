import { useState, useEffect } from "react";

const MarqueeSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approximately)
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = [
    "SITES PROFISSIONAIS",
    "SUPORTE NO WHATSAPP",
    "ALTA PERFORMANCE",
    "RESULTADOS GARANTIDOS",
    "ALTA CONVERSÃO",
    "ENTREGA RÁPIDA",
    "UI DESIGN",
    "UX DESIGN",
    "OTIMIZAÇÃO"
  ];

  const MarqueeContent = () => (
    <>
      {words.map((word, index) => (
        <span key={index} className="flex items-center">
          <span className={`text-foreground font-semibold whitespace-nowrap transition-all duration-300 ${
            isSticky ? "text-sm md:text-base" : "text-lg md:text-xl"
          }`}>
            {word}
          </span>
          <span className={`mx-4 md:mx-6 text-primary transition-all duration-300 ${
            isSticky ? "text-lg" : "text-2xl"
          }`}>·</span>
        </span>
      ))}
    </>
  );

  return (
    <section className={`w-full bg-secondary/80 backdrop-blur-sm border-y border-border overflow-hidden sticky top-0 z-50 transition-all duration-300 ${
      isSticky ? "py-2" : "py-4"
    }`}>
      <div className="flex animate-marquee">
        <div className="flex items-center">
          <MarqueeContent />
        </div>
        <div className="flex items-center">
          <MarqueeContent />
        </div>
        <div className="flex items-center">
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
