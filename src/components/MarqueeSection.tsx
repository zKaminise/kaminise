const MarqueeSection = () => {
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
          <span className="text-foreground font-medium text-sm md:text-base whitespace-nowrap">
            {word}
          </span>
          <span className="mx-3 md:mx-4 text-accent text-lg">·</span>
        </span>
      ))}
    </>
  );

  return (
    <section className="w-full py-3 bg-secondary/80 backdrop-blur-sm border-y border-border overflow-hidden">
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
