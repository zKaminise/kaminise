import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { Sparkles, Palette, Layout, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

// Simplified cube vertices for better performance
const cubeVertices = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
];

const cubeEdges = [
  [0, 1], [1, 2], [2, 3], [3, 0], // back face
  [4, 5], [5, 6], [6, 7], [7, 4], // front face
  [0, 4], [1, 5], [2, 6], [3, 7], // connections
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms - more noticeable values
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const geometryY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const geometryScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Pre-calculate particle positions for better performance
  const particles = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      left: `${10 + (i * 7.5)}%`,
      top: `${15 + (i % 4) * 20}%`,
      delay: i * 0.2,
    })), []
  );

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-hero flex items-center justify-center"
    >
      {/* Grid Background with Parallax - GPU accelerated */}
      <motion.div 
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={{ 
          y: backgroundY,
          transform: "translateZ(0)",
        }}
      >
        {/* Perspective Grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / 0.4) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "perspective(500px) rotateX(60deg) translateZ(0)",
            transformOrigin: "center top",
            willChange: "transform",
          }}
        />

        {/* Static particles - no continuous animation for performance */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent/50 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              transform: "translateZ(0)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, delay: particle.delay }}
          />
        ))}
      </motion.div>

      {/* 3D Cube with Parallax - Optimized */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
        style={{ 
          y: geometryY, 
          scale: geometryScale,
          transform: "translateZ(0)",
        }}
      >
        {/* Glow effect - static, no animation */}
        <div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 60%)",
          }}
        />

        {/* Main 3D Cube - Single rotation animation */}
        <div 
          className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
          style={{ perspective: "800px" }}
        >
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ 
              transformStyle: "preserve-3d",
              transform: "translateZ(0)",
            }}
            animate={{ 
              rotateX: 360,
              rotateY: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Cube edges - static SVG, only container rotates */}
            <svg className="absolute inset-0 w-full h-full" viewBox="-2 -2 4 4">
              <defs>
                <linearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(190, 90%, 55%)" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {cubeEdges.map(([start, end], i) => {
                const [x1, y1] = cubeVertices[start];
                const [x2, y2] = cubeVertices[end];
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#cubeGradient)"
                    strokeWidth="0.04"
                    strokeLinecap="round"
                  />
                );
              })}
              {/* Vertices */}
              {cubeVertices.map(([x, y], i) => (
                <circle
                  key={`v-${i}`}
                  cx={x}
                  cy={y}
                  r="0.08"
                  fill="hsl(var(--accent))"
                />
              ))}
            </svg>
          </motion.div>

          {/* Outer ring - single rotation */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full border-2 border-accent/25 will-change-transform"
            style={{ transform: "translateZ(0)" }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Second ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full border border-cyan-400/15 will-change-transform"
            style={{ transform: "translateZ(0)" }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Corner accents - static */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px]">
          {[0, 90, 180, 270].map((angle) => (
            <div
              key={angle}
              className="absolute w-3 h-3 bg-accent/70 rounded-full"
              style={{
                top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 15px hsl(var(--accent) / 0.5)",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none"></div>

      {/* Content with Parallax */}
      <motion.div 
        className="container relative z-10 py-12 md:py-20 will-change-transform"
        style={{ 
          y: contentY,
          transform: "translateZ(0)",
        }}
      >
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Gabriel Misao" className="h-12 md:h-16 w-auto" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Agência Premium</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground"
          >
            Pare de perder vendas <span className="text-accent">por não ter</span>{" "}
            <span className="text-accent">um site profissional.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Criamos sites e identidades visuais que elevam sua marca ao próximo nível. Sites feitos sob medida por
            especialistas de alto nível.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
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
            transition={{ duration: 0.5, delay: 0.3 }}
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
