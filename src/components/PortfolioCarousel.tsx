import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Placeholder images - will be replaced with actual portfolio images
const portfolioImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
];

const PortfolioCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate images for seamless loop
  const allImages = [...portfolioImages, ...portfolioImages, ...portfolioImages];

  return (
    <section className="py-20 bg-background overflow-hidden relative">
      {/* Gradient overlays for blur effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-48 md:w-72 z-10 pointer-events-none bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-48 md:w-72 z-10 pointer-events-none bg-gradient-to-l from-background via-background/80 to-transparent" />
      
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-20 text-center relative z-20">
        <motion.span 
          className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Portfólio
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
        >
          Projetos que{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent">
              Transformam
            </span>
            <motion.span 
              className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
        >
          Conheça alguns dos projetos que desenvolvemos para nossos clientes
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div ref={containerRef} className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -((portfolioImages.length) * (320 + 24))],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Portfolio ${(index % portfolioImages.length) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
    </section>
  );
};

export default PortfolioCarousel;
