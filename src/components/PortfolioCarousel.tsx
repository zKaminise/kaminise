import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Placeholder images - será substituído pelas imagens reais
const portfolioImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1522542550221-31fd8575f5a6?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
];

const PortfolioCarousel = () => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  
  // Duplicar imagens para criar loop infinito
  const duplicatedImages = [...portfolioImages, ...portfolioImages, ...portfolioImages];
  
  useEffect(() => {
    const speed = 0.5; // pixels por frame
    
    const animate = () => {
      setPosition((prev) => {
        const newPos = prev + speed;
        // Reset quando passou por um conjunto completo de imagens
        const imageWidth = 420; // largura + gap
        const resetPoint = portfolioImages.length * imageWidth;
        if (newPos >= resetPoint) {
          return 0;
        }
        return newPos;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12 md:mb-16">
        {/* Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Portfólio
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Projetos que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent">
                geram resultados
              </span>
              <motion.span 
                className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Conheça alguns dos sites que desenvolvemos para nossos clientes.
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Gradient masks for blur effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />
        
        {/* Carousel Track */}
        <div 
          ref={containerRef}
          className="flex gap-6 px-4"
          style={{
            transform: `translateX(-${position}px)`,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[350px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Card container with hover effects */}
              <div className="relative w-full h-full border border-border/50 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-2xl group-hover:shadow-accent/20">
                {/* Image */}
                <img
                  src={image}
                  alt={`Projeto ${(index % portfolioImages.length) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-foreground font-bold text-lg mb-1">Projeto {(index % portfolioImages.length) + 1}</h4>
                  <p className="text-muted-foreground text-sm">Site institucional moderno</p>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decoration line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default PortfolioCarousel;
