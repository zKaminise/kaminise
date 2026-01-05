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
        {[...Array(40)].map((_, i) => (
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

      {/* 3D Rotating Cube - Enhanced */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main 3D Cube Container */}
        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96" 
          style={{ perspective: "1000px" }}
        >
          {/* Primary Cube */}
          <motion.div
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Cube faces with glassmorphism effect */}
            {[
              { transform: "translateZ(120px)", gradient: "from-accent/20 to-cyan-500/20" },
              { transform: "rotateY(180deg) translateZ(120px)", gradient: "from-purple-500/20 to-accent/20" },
              { transform: "rotateY(90deg) translateZ(120px)", gradient: "from-cyan-500/20 to-blue-500/20" },
              { transform: "rotateY(-90deg) translateZ(120px)", gradient: "from-accent/20 to-purple-500/20" },
              { transform: "rotateX(90deg) translateZ(120px)", gradient: "from-blue-500/20 to-accent/20" },
              { transform: "rotateX(-90deg) translateZ(120px)", gradient: "from-cyan-500/20 to-accent/20" },
            ].map((face, index) => (
              <motion.div
                key={index}
                className={`absolute inset-[15%] bg-gradient-to-br ${face.gradient} backdrop-blur-sm rounded-lg`}
                style={{
                  transform: face.transform,
                  transformStyle: "preserve-3d",
                  border: "1px solid",
                  borderImage: "linear-gradient(135deg, hsl(var(--accent) / 0.6), hsl(190, 90%, 50% / 0.6), hsl(280, 80%, 60% / 0.4)) 1",
                  boxShadow: "inset 0 0 30px hsl(var(--accent) / 0.1), 0 0 20px hsl(var(--accent) / 0.2)",
                }}
                animate={{
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}

            {/* Cube edges - glowing lines */}
            {/* Vertical edges */}
            {[
              { x: -120, z: -120 },
              { x: 120, z: -120 },
              { x: 120, z: 120 },
              { x: -120, z: 120 },
            ].map((pos, i) => (
              <div
                key={`v-edge-${i}`}
                className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-cyan-400 to-accent"
                style={{
                  transform: `translateX(${pos.x}px) translateZ(${pos.z}px)`,
                  boxShadow: "0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent) / 0.5)",
                }}
              />
            ))}

            {/* Horizontal edges - top */}
            {[
              { x: 0, y: -120, z: -120, rotateY: 0 },
              { x: 120, y: -120, z: 0, rotateY: 90 },
              { x: 0, y: -120, z: 120, rotateY: 0 },
              { x: -120, y: -120, z: 0, rotateY: 90 },
            ].map((pos, i) => (
              <div
                key={`h-top-${i}`}
                className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-accent via-cyan-400 to-accent"
                style={{
                  transform: `translateX(${pos.x}px) translateY(${pos.y}px) translateZ(${pos.z}px) rotateY(${pos.rotateY}deg)`,
                  boxShadow: "0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent) / 0.5)",
                }}
              />
            ))}

            {/* Horizontal edges - bottom */}
            {[
              { x: 0, y: 120, z: -120, rotateY: 0 },
              { x: 120, y: 120, z: 0, rotateY: 90 },
              { x: 0, y: 120, z: 120, rotateY: 0 },
              { x: -120, y: 120, z: 0, rotateY: 90 },
            ].map((pos, i) => (
              <div
                key={`h-bot-${i}`}
                className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-accent to-cyan-400"
                style={{
                  transform: `translateX(${pos.x}px) translateY(${pos.y}px) translateZ(${pos.z}px) rotateY(${pos.rotateY}deg)`,
                  boxShadow: "0 0 10px hsl(190, 90%, 50%), 0 0 20px hsl(190, 90%, 50% / 0.5)",
                }}
              />
            ))}

            {/* Corner vertices - glowing points */}
            {[
              [-120, -120, -120], [120, -120, -120], [120, 120, -120], [-120, 120, -120],
              [-120, -120, 120], [120, -120, 120], [120, 120, 120], [-120, 120, 120],
            ].map(([x, y, z], i) => (
              <motion.div
                key={`vertex-${i}`}
                className="absolute w-3 h-3 rounded-full bg-accent"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                  boxShadow: "0 0 15px hsl(var(--accent)), 0 0 30px hsl(var(--accent) / 0.5)",
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </motion.div>

          {/* Inner cube - smaller, different rotation */}
          <motion.div
            className="absolute inset-[25%]"
            style={{ 
              perspective: "600px",
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateY: -360, rotateZ: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[
              { transform: "translateZ(40px)" },
              { transform: "rotateY(180deg) translateZ(40px)" },
              { transform: "rotateY(90deg) translateZ(40px)" },
              { transform: "rotateY(-90deg) translateZ(40px)" },
              { transform: "rotateX(90deg) translateZ(40px)" },
              { transform: "rotateX(-90deg) translateZ(40px)" },
            ].map((face, index) => (
              <div
                key={`inner-${index}`}
                className="absolute inset-[10%] border border-purple-400/40 rounded-sm"
                style={{
                  transform: face.transform,
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, hsl(280, 80%, 60% / 0.1), transparent)",
                }}
              />
            ))}
          </motion.div>

          {/* Orbiting ring around cube */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border-2 border-accent/30"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(70deg)",
            }}
            animate={{ rotateZ: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbital particle */}
            <motion.div
              className="absolute w-4 h-4 bg-accent rounded-full"
              style={{
                top: "0%",
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 20px hsl(var(--accent)), 0 0 40px hsl(var(--accent) / 0.5)",
              }}
            />
          </motion.div>

          {/* Second orbital ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] rounded-full border border-cyan-400/20"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(70deg) rotateY(45deg)",
            }}
            animate={{ rotateZ: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute w-3 h-3 bg-cyan-400 rounded-full"
              style={{
                top: "0%",
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 15px hsl(190, 90%, 50%), 0 0 30px hsl(190, 90%, 50% / 0.5)",
              }}
            />
          </motion.div>
        </motion.div>
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
