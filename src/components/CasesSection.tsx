import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import case01 from "@/assets/case-01.png";
import case02 from "@/assets/case-02.png";
import case03 from "@/assets/case-03.png";
import case04 from "@/assets/case-04.png";
import case05 from "@/assets/case-05.png";
import case06 from "@/assets/case-06.png";
import case07 from "@/assets/case-07.png";

// Cases de sucesso
const cases = [
  {
    id: 1,
    title: "Alçar Humà",
    category: "Site Institucional",
    description: "Consultoria em gestão de pessoas e desenvolvimento organizacional",
    image: case01,
    displayUrl: "alcarhuma.com.br",
    url: "https://alcarhuma.com.br",
  },
  {
    id: 2,
    title: "Odontologia FL",
    category: "Site Institucional",
    description: "Clínica odontológica especializada em transformar sorrisos",
    image: case02,
    displayUrl: "odontologiafl.com.br",
    url: "https://www.odontologiafl.com.br",
  },
  {
    id: 3,
    title: "Kamini Script",
    category: "Landing Page",
    description: "Automação de agendamentos via WhatsApp para clínicas",
    image: case03,
    displayUrl: "script.kaminisegrowth.com.br",
    url: "https://script.kaminisegrowth.com.br",
  },
  {
    id: 4,
    title: "Clube das Zizas",
    category: "Plataforma de Membros",
    description: "Comunidade feminina de desenvolvimento pessoal",
    image: case04,
    displayUrl: "clube-zizas.com.br",
    url: "https://clube-zizas.vercel.app",
  },
  {
    id: 5,
    title: "Acquagyn",
    category: "Site Institucional",
    description: "Academia de natação e hidroginástica com 30 anos de excelência",
    image: case05,
    displayUrl: "acquagyn.com.br",
    url: "https://acquagyn.com.br",
  },
  {
    id: 6,
    title: "Saldanha Móveis",
    category: "E-commerce",
    description: "Móveis sofisticados para espaços de beleza",
    image: case06,
    displayUrl: "saldanhamoveis.com.br",
    url: "https://saldanhamoveis.com.br",
  },
  {
    id: 7,
    title: "Ecos da Alma",
    category: "Landing Page",
    description: "Plataforma de autodescoberta e consciência de si",
    image: case07,
    displayUrl: "ecosdaalma.com.br",
    url: "https://ecosdaalma.com.br",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

interface CaseCardProps {
  caseItem: typeof cases[0];
  index: number;
}

const CaseCard = ({ caseItem, index }: CaseCardProps) => {
  const handleCardClick = () => {
    window.open(caseItem.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20">
        
        {/* Image Container - Scroll on hover */}
        <div className="relative h-[280px] md:h-[320px] overflow-hidden">
          {/* Browser mockup frame */}
          <div className="absolute top-0 left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border/50 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 ml-3">
              <div className="bg-muted/50 rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-2 max-w-[200px]">
                <span className="truncate">{caseItem.displayUrl}</span>
              </div>
            </div>
          </div>
          
          {/* Scrolling image container */}
          <div className="absolute inset-0 pt-12">
            <div 
              className="absolute inset-0 transition-transform duration-[3s] ease-in-out group-hover:-translate-y-[60%]"
              style={{ willChange: 'transform' }}
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-auto object-cover object-top"
                style={{ minHeight: '300%' }}
              />
            </div>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />
          
          {/* Hover overlay with CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end justify-center pb-6">
            <motion.div
              className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Ver Projeto</span>
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
            {caseItem.category}
          </span>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {caseItem.title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm line-clamp-2">
            {caseItem.description}
          </p>
        </div>
        
        {/* Number indicator */}
        <div className="absolute top-16 right-4 text-6xl font-bold text-white/5 group-hover:text-accent/10 transition-colors duration-500 select-none pointer-events-none z-30">
          0{index + 1}
        </div>
        
        {/* Corner hover accent */}
        <div className="absolute top-12 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const CasesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
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
            Cases de Sucesso
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Resultados que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent">
                falam por si
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
            Cada projeto é uma história de transformação. Conheça alguns dos negócios 
            que escalamos com sites de alta performance.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Quer ver seu negócio aqui?{" "}
            <span className="text-accent font-medium">Vamos conversar.</span>
          </p>
          
          <motion.a
            href="https://wa.me/5511999999999?text=Olá! Vi os cases de sucesso de vocês e quero um site assim para meu negócio!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-cta text-accent-foreground font-bold px-10 py-5 rounded-full overflow-hidden shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10 text-lg">QUERO RESULTADOS ASSIM</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Bottom decoration line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default CasesSection;
