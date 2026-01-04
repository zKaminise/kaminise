import { motion } from "framer-motion";
import { ArrowRight, Zap, ShoppingCart, Monitor, Rocket } from "lucide-react";
import mockupSites from "@/assets/mockup-sites.png";
import mockupLoja from "@/assets/mockup-loja.png";
import mockupSistema from "@/assets/mockup-sistema.png";
import mockupLanding from "@/assets/mockup-landing.png";

const services = [
  {
    id: 1,
    title: "Sites Institucionais",
    description: "Transmita autoridade e conquiste clientes com um site moderno, rápido e estratégico.",
    image: mockupSites,
    icon: Monitor,
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "group-hover:text-cyan-400",
    featured: true,
  },
  {
    id: 2,
    title: "Lojas Virtuais",
    description: "Vendas acontecendo 24h por dia com uma loja profissional, segura e feita para converter.",
    image: mockupLoja,
    icon: ShoppingCart,
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "group-hover:text-purple-400",
    featured: false,
  },
  {
    id: 3,
    title: "Sistemas On-line",
    description: "Soluções personalizadas para automatizar processos e escalar seu negócio.",
    image: mockupSistema,
    icon: Zap,
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "group-hover:text-emerald-400",
    featured: false,
  },
  {
    id: 4,
    title: "Landing Pages",
    description: "Páginas focadas em alta conversão. Ideal para campanhas de tráfego pago no Google, Facebook e Instagram.",
    image: mockupLanding,
    icon: Rocket,
    gradient: "from-orange-500/20 to-amber-500/20",
    accent: "group-hover:text-orange-400",
    featured: true,
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

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      variants={itemVariants}
      className={`
        group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm
        transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10
        ${service.featured ? "md:col-span-2 md:row-span-1" : ""}
      `}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Content container */}
      <div className={`relative z-10 flex flex-col ${service.featured ? "md:flex-row" : ""} h-full min-h-[380px] md:min-h-[420px]`}>
        
        {/* Text Content */}
        <div className={`p-6 md:p-8 flex flex-col justify-center ${service.featured ? "md:w-1/2" : ""}`}>
          {/* Icon with animated ring */}
          <div className="relative w-14 h-14 mb-6">
            <div className="absolute inset-0 rounded-xl bg-accent/20 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-xl bg-accent/10 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
              <Icon className={`w-7 h-7 text-accent transition-colors duration-300 ${service.accent}`} />
            </div>
          </div>
          
          {/* Title with animated underline */}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 relative inline-block">
            {service.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-md">
            {service.description}
          </p>
          
          {/* CTA Button */}
          <div className="mt-auto">
            <button className="inline-flex items-center gap-2 text-accent font-medium group/btn">
              <span className="relative">
                Saiba mais
                <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className={`relative ${service.featured ? "md:w-1/2" : ""} flex-1 overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/5 blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-accent/5 blur-3xl group-hover:scale-150 transition-transform duration-700" />
          
          {/* Image container with perspective effect */}
          <div className={`
            absolute inset-0 flex items-end justify-center
            ${isEven ? "md:justify-end" : "md:justify-start"}
            p-4 md:p-6
          `}>
            <motion.div
              className="relative w-full max-w-[280px] md:max-w-[340px]"
              whileHover={{ 
                scale: 1.05,
                rotateY: isEven ? -5 : 5,
                z: 50,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ perspective: 1000 }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-2xl shadow-black/50 border border-white/10"
              />
              
              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Number indicator */}
      <div className="absolute top-4 right-4 text-7xl font-bold text-white/5 group-hover:text-accent/10 transition-colors duration-500 select-none">
        0{service.id}
      </div>
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
        {/* Header with animated elements */}
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

        {/* Cards Grid with stagger animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
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
            {/* Animated background shine */}
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
