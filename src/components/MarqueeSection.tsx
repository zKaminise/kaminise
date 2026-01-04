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
          <span className="text-foreground font-semibold text-lg md:text-xl whitespace-nowrap">
            {word}
          </span>
          <span className="mx-4 md:mx-6 text-primary text-2xl">·</span>
        </span>
      ))}
    </>
  );

  return (
    <section className="w-full py-6 bg-secondary/50 border-y border-border overflow-hidden">
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
