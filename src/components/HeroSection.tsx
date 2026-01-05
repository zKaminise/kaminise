import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { Sparkles, Palette, Layout, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Icosahedron vertices (20-faced polyhedron)
const phi = (1 + Math.sqrt(5)) / 2;
const icosahedronVertices = [
  [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
  [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
  [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
];

// Icosahedron edges
const icosahedronEdges = [
  [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
  [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
  [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
  [4, 9], [2, 4], [6, 2], [8, 6], [9, 8],
  [1, 9], [5, 4], [11, 2], [10, 6], [7, 8],
  [4, 5], [2, 11], [6, 10], [8, 7], [9, 1],
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const geometryY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const geometryScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const geometryOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-hero flex items-center justify-center"
    >
      {/* Grid Background with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        {/* Perspective Grid Floor */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center top",
          }}
        />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      {/* 3D Holographic Icosahedron with Parallax */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ 
          y: geometryY, 
          scale: geometryScale,
          opacity: geometryOpacity,
        }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 60%)",
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

        {/* Main 3D Icosahedron */}
        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          style={{ perspective: "1200px" }}
        >
          {/* Primary Icosahedron */}
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ 
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 180],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Render edges as lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="-2 -2 4 4">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="hsl(190, 90%, 50%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(280, 80%, 60%)" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.02" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {icosahedronEdges.map(([start, end], i) => {
                const [x1, y1] = icosahedronVertices[start];
                const [x2, y2] = icosahedronVertices[end];
                return (
                  <motion.line
                    key={i}
                    x1={x1 / phi}
                    y1={y1 / phi}
                    x2={x2 / phi}
                    y2={y2 / phi}
                    stroke="url(#lineGradient)"
                    strokeWidth="0.015"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0.4, 1, 0.4] }}
                    transition={{
                      pathLength: { duration: 2, delay: i * 0.05 },
                      opacity: { duration: 3, repeat: Infinity, delay: i * 0.1 },
                    }}
                  />
                );
              })}
              {/* Vertices as glowing points */}
              {icosahedronVertices.map(([x, y], i) => (
                <motion.circle
                  key={`vertex-${i}`}
                  cx={x / phi}
                  cy={y / phi}
                  r="0.04"
                  fill="hsl(var(--accent))"
                  filter="url(#glow)"
                  animate={{
                    r: [0.03, 0.05, 0.03],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Secondary rotating ring */}
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: -360, rotateX: 180 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-cyan-400/30"
              style={{ transform: "rotateX(75deg)" }}
            />
          </motion.div>

          {/* Third rotating ring */}
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateZ: 360, rotateY: -180 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-purple-400/20"
              style={{ transform: "rotateX(60deg) rotateY(45deg)" }}
            />
          </motion.div>
        </motion.div>

        {/* Orbiting particles around the shape */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent"
            style={{
              boxShadow: "0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent) / 0.5)",
            }}
            animate={{
              x: [
                Math.cos((i * Math.PI * 2) / 6) * 180,
                Math.cos((i * Math.PI * 2) / 6 + Math.PI) * 180,
                Math.cos((i * Math.PI * 2) / 6) * 180,
              ],
              y: [
                Math.sin((i * Math.PI * 2) / 6) * 180,
                Math.sin((i * Math.PI * 2) / 6 + Math.PI) * 180,
                Math.sin((i * Math.PI * 2) / 6) * 180,
              ],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Bottom glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none"></div>

      {/* Content with Parallax */}
      <motion.div 
        className="container relative z-10 py-12 md:py-20"
        style={{ y: contentY }}
      >
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
      </motion.div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
