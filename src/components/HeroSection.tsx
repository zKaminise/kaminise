import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { Sparkles, Palette, Layout, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero flex items-center justify-center">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs - Organic Blob Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main floating orbs with blob animation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent)) 0%, hsl(var(--accent) / 0.3) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, hsl(190, 90%, 50%) 0%, hsl(190, 80%, 40% / 0.3) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-56 h-56 md:w-72 md:h-72 rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, hsl(280, 80%, 55%) 0%, hsl(280, 70%, 45% / 0.3) 40%, transparent 70%)",
            filter: "blur(45px)",
          }}
          animate={{
            x: [0, 30, -50, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Spinning Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-accent/20"
            style={{ perspective: "800px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border border-cyan-400/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full border border-purple-500/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Central Pulsing Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Mini Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent/60"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i % 3) * 20}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bottom glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none"></div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
