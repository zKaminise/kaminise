import { motion } from "framer-motion";
import { ArrowRight, Monitor, ShoppingCart, Zap, Rocket } from "lucide-react";
import serviceSites from "@/assets/service-sites.png";
import mockupLoja from "@/assets/mockup-loja.png";
import mockupSistema from "@/assets/mockup-sistema.png";
import serviceLanding from "@/assets/service-landing.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
const services = [
  {
    id: 1,
    title: "Sites Institucionais",
    description: "Transmita autoridade e conquiste clientes com um site moderno, rápido e estratégico.",
    image: serviceSites,
    icon: Monitor,
  },
  {
    id: 2,
    title: "Lojas Virtuais",
    description: "Vendas acontecendo 24h por dia com uma loja profissional, segura e feita para converter.",
    image: mockupLoja,
    icon: ShoppingCart,
  },
  {
    id: 3,
    title: "Sistemas On-line",
    description: "Soluções personalizadas para automatizar processos e escalar seu negócio.",
    image: mockupSistema,
    icon: Zap,
  },
  {
    id: 4,
    title: "Landing Pages",
    description: "Páginas focadas em alta conversão. Ideal para campanhas de tráfego pago no Google, Facebook e Instagram.",
    image: serviceLanding,
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

interface ServiceCardProps {
  service: typeof services[0];
  isLarge: boolean;
  imagePosition: "right" | "left";
}

const ServiceCard = ({ service, isLarge, imagePosition }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 h-full"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className={`relative z-10 flex flex-col ${isLarge ? "md:flex-row" : ""} h-full min-h-[400px]`}>
        
        {/* Text Content */}
        <div className={`
          p-6 md:p-8 flex flex-col justify-center
          ${isLarge ? "md:w-[45%]" : "w-full"}
          ${isLarge && imagePosition === "left" ? "md:order-2" : ""}
        `}>
          {/* Icon */}
          <div className="relative w-14 h-14 mb-6">
            <div className="absolute inset-0 rounded-xl bg-accent/20 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
              <Icon className="w-7 h-7 text-accent" />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 relative inline-block">
            {service.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            {service.description}
          </p>
          
          {/* CTA */}
          <button className="inline-flex items-center gap-2 text-accent font-medium group/btn w-fit">
            <span className="relative">
              Saiba mais
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Image Section - Only for large cards */}
        {isLarge && (
          <div className={`
            relative md:w-[60%] flex-1 overflow-hidden min-h-[300px] md:min-h-[450px]
            ${imagePosition === "left" ? "md:order-1" : ""}
          `}>
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center p-0 md:p-4">
              <motion.div
                className="relative w-full h-full md:max-w-[600px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover md:object-contain drop-shadow-2xl scale-125 md:scale-110"
                />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </div>
        )}
        
        {/* Image for small cards - positioned better */}
        {!isLarge && (
          <div className="relative flex-1 overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.div
                className="relative w-full max-w-[280px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        )}
      </div>
      
      {/* Number indicator */}
      <div className="absolute top-4 right-4 text-7xl font-bold text-white/5 group-hover:text-accent/10 transition-colors duration-500 select-none pointer-events-none">
        0{service.id}
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
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
            Nossos Serviços
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Entenda qual é o tipo de site{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent">
                ideal para seu negócio
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
            Projetos sob medida, otimizados para gerar resultados reais e escalar seu negócio.
          </p>
        </motion.div>

        {/* Cards Grid - 65/35 layout */}
        <motion.div 
          className="space-y-6 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* First row: 65% / 35% */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <ServiceCard service={services[0]} isLarge={true} imagePosition="right" />
            </div>
            <div className="md:col-span-4">
              <ServiceCard service={services[1]} isLarge={false} imagePosition="right" />
            </div>
          </div>
          
          {/* Second row: 35% / 65% */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <ServiceCard service={services[2]} isLarge={false} imagePosition="left" />
            </div>
            <div className="md:col-span-8">
              <ServiceCard service={services[3]} isLarge={true} imagePosition="left" />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-8 text-lg md:text-xl">
            Cada dia sem site = novos clientes indo para o concorrente.{" "}
            <span className="text-accent font-medium">Vamos mudar isso hoje.</span>
          </p>
          
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-cta text-accent-foreground font-bold px-10 py-5 rounded-lg overflow-hidden shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated shine */}
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
            
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10 text-lg">QUERO MEU SITE AGORA</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
