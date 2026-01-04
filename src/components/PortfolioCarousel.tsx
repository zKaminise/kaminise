import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";
import portfolio4 from "@/assets/portfolio-4.png";
import portfolio5 from "@/assets/portfolio-5.png";
import portfolio6 from "@/assets/portfolio-6.png";
import portfolio7 from "@/assets/portfolio-7.png";
import portfolio8 from "@/assets/portfolio-8.png";
import portfolio9 from "@/assets/portfolio-9.png";

const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
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
      <div ref={containerRef} className="relative mb-12">
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

      {/* CTA Section */}
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center relative z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-muted-foreground mb-6 text-lg">
          Quer um projeto <span className="text-accent font-medium">exclusivo</span> como esses?
        </p>
        
        <motion.a
          href="https://wa.me/5534998275292?text=Vim%20através%20do%20site%20e%20gostaria%20de%20atendimento"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-gradient-cta text-accent-foreground font-bold px-10 py-5 rounded-full overflow-hidden shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
          <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
          <span className="relative z-10 text-lg">QUERO MEU PROJETO AGORA</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
    </section>
  );
};

export default PortfolioCarousel;
