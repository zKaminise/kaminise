import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { Sparkles, Palette, Layout, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero flex items-center justify-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full"
            style={{
              left: `${5 + (i * 4)}%`,
              top: `${10 + (i % 5) * 18}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3D Rotating Torus/Donut Shape */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Central Glow */}
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 3D Container */}
        <div 
          className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
          style={{ perspective: "1000px" }}
        >
          {/* Main 3D Rotating Element - Layered Rings */}
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: 360, rotateX: 15 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Multiple 3D rings creating torus effect */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 rounded-full border-2"
                style={{
                  width: `${70 + i * 2}%`,
                  height: `${70 + i * 2}%`,
                  marginLeft: `-${35 + i}%`,
                  marginTop: `-${35 + i}%`,
                  transform: `rotateX(90deg) translateZ(${(i - 6) * 12}px)`,
                  borderColor: i % 2 === 0 
                    ? "hsl(var(--accent) / 0.6)" 
                    : "hsl(190, 90%, 50% / 0.4)",
                  boxShadow: `0 0 20px hsl(var(--accent) / 0.3)`,
                }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Second 3D Element - Vertical Rings */}
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: 360, rotateZ: 45 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute top-1/2 left-1/2 rounded-full border"
                style={{
                  width: `${60 + i * 3}%`,
                  height: `${60 + i * 3}%`,
                  marginLeft: `-${30 + i * 1.5}%`,
                  marginTop: `-${30 + i * 1.5}%`,
                  transform: `rotateY(90deg) translateZ(${(i - 4) * 15}px)`,
                  borderColor: "hsl(280, 70%, 55% / 0.3)",
                }}
              />
            ))}
          </motion.div>

          {/* Outer rotating ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full border-2 border-accent/30"
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbital dots on the ring */}
            {[0, 90, 180, 270].map((angle) => (
              <div
                key={angle}
                className="absolute w-3 h-3 bg-accent rounded-full"
                style={{
                  top: `${50 + 48 * Math.sin((angle * Math.PI) / 180)}%`,
                  left: `${50 + 48 * Math.cos((angle * Math.PI) / 180)}%`,
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 15px hsl(var(--accent)), 0 0 30px hsl(var(--accent) / 0.5)",
                }}
              />
            ))}
          </motion.div>

          {/* Second outer ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full border border-cyan-400/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Center glowing core */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/20"
            style={{
              boxShadow: "0 0 60px hsl(var(--accent) / 0.6), 0 0 100px hsl(var(--accent) / 0.3)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating accent particles around the shape */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full"
            style={{
              background: i % 2 === 0 ? "hsl(var(--accent))" : "hsl(190, 90%, 55%)",
              boxShadow: `0 0 15px ${i % 2 === 0 ? "hsl(var(--accent))" : "hsl(190, 90%, 55%)"}`,
            }}
            animate={{
              x: [
                Math.cos((i * Math.PI * 2) / 6) * 200,
                Math.cos((i * Math.PI * 2) / 6 + Math.PI / 2) * 220,
                Math.cos((i * Math.PI * 2) / 6 + Math.PI) * 200,
                Math.cos((i * Math.PI * 2) / 6 + (3 * Math.PI) / 2) * 220,
                Math.cos((i * Math.PI * 2) / 6) * 200,
              ],
              y: [
                Math.sin((i * Math.PI * 2) / 6) * 200,
                Math.sin((i * Math.PI * 2) / 6 + Math.PI / 2) * 220,
                Math.sin((i * Math.PI * 2) / 6 + Math.PI) * 200,
                Math.sin((i * Math.PI * 2) / 6 + (3 * Math.PI) / 2) * 220,
                Math.sin((i * Math.PI * 2) / 6) * 200,
              ],
              scale: [1, 1.3, 1, 1.3, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bottom glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none"></div>

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-20">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Gabriel Misao" className="h-12 md:h-16 w-auto" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Agência Premium</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground"
          >
            Pare de perder vendas <span className="text-accent">por não ter</span>{" "}
            <span className="text-accent">um site profissional.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Criamos sites e identidades visuais que elevam sua marca ao próximo nível. Sites feitos sob medida por
            especialistas de alto nível.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[
              { icon: Sparkles, text: "Sites Responsivos" },
              { icon: Palette, text: "Identidade Visual" },
              { icon: Layout, text: "Design Criativo" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              size="lg"
              variant="cta"
              className="group text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full"
              asChild
            >
              <a
                href="https://wa.me/5534998275292?text=Vim%20através%20do%20site%20e%20gostaria%20de%20atendimento"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-5 h-5 md:w-6 md:h-6 mr-2 group-hover:scale-110 transition-transform"
                />
                QUERO UM ORÇAMENTO
              </a>
            </Button>

            {/* Social proof */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>+10 empresas satisfeitas</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
