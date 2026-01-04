import { motion } from "framer-motion";
import { ArrowRight, Monitor, ShoppingCart, Zap, Rocket } from "lucide-react";
import serviceSites from "@/assets/service-sites.png";
import mockupLoja from "@/assets/mockup-loja.png";
import mockupSistema from "@/assets/mockup-sistema.png";
import serviceLanding from "@/assets/service-landing.png";
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
            relative md:w-[55%] flex-1 overflow-hidden
            ${imagePosition === "left" ? "md:order-1" : ""}
          `}>
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
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
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent to-cyan-500 text-accent-foreground font-bold px-10 py-5 rounded-full overflow-hidden shadow-xl shadow-accent/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated shine */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="relative z-10 text-lg">QUERO MEU SITE AGORA</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
