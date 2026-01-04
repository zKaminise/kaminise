import { motion } from "framer-motion";
import { Video, FileText, Rocket, Eye, Link2, CheckCircle2, ArrowRight } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const steps = [
  {
    id: 1,
    label: "Primeiro contato",
    title: "Ligação de Vídeo",
    description: "Iniciamos o processo com uma ligação de vídeo, onde discutimos seus objetivos, ideias e expectativas para garantir que entendemos completamente a visão do seu projeto.",
    icon: Video,
    side: "right",
  },
  {
    id: 2,
    label: "Briefing",
    title: "Formulário de Criação",
    description: "Após a reunião, você preenche um formulário detalhado para que possamos capturar as informações essenciais, como preferências de design, funcionalidades e objetivos do site.",
    icon: FileText,
    side: "left",
  },
  {
    id: 3,
    label: "Início",
    title: "Início ao Projeto",
    description: "Com todos os detalhes em mãos, nossa equipe começa a trabalhar no desenvolvimento do projeto, com base nas informações do formulário e no briefing inicial.",
    icon: Rocket,
    side: "right",
  },
  {
    id: 4,
    label: "Preview",
    title: "Modificações Necessárias",
    description: "Entregamos um preview inicial do projeto para que você possa revisar. Se necessário, fazemos as modificações e ajustes conforme seu feedback para que o site fique exatamente como você deseja.",
    icon: Eye,
    side: "left",
  },
  {
    id: 5,
    label: "Briefing 2",
    title: "Formulário de Integrações",
    description: "Enviaremos um formulário para coletar as informações sobre integrações, como sistemas de pagamento, plataformas de e-commerce e ferramentas de marketing, garantindo que tudo esteja conectado de forma eficiente.",
    icon: Link2,
    side: "right",
  },
  {
    id: 6,
    label: "Projeto concluído",
    title: "Finalizado",
    description: "Após todas as revisões e integrações, entregamos o projeto finalizado, pronto para ser lançado e proporcionar a melhor experiência para seus usuários.",
    icon: CheckCircle2,
    side: "left",
  },
];

const BriefingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
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
            Briefing
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Como é o processo de{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent">
                criação
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
            A cada projeto, seguimos um processo claro e colaborativo, garantindo que suas ideias
            se tornem realidade, com transparência e eficiência em cada etapa.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-accent/50 transform -translate-x-1/2 hidden md:block" />
          
          {/* Mobile vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-accent/50 md:hidden" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";

              return (
                <motion.div
                  key={step.id}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    {/* Card */}
                    <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? 'md:text-right' : ''}`}>
                      <motion.div
                        className="relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm group hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
                        whileHover={{ y: -5 }}
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Step number */}
                        <div className={`absolute top-6 ${isLeft ? 'left-6 md:right-6 md:left-auto' : 'right-6'} text-5xl font-bold text-white/5 group-hover:text-accent/10 transition-colors duration-500`}>
                          0{step.id}
                        </div>
                      </motion.div>
                    </div>

                    {/* Center icon and label */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                      {/* Label */}
                      <motion.span
                        className={`hidden md:block text-xs text-accent/70 font-medium mb-2 whitespace-nowrap ${isLeft ? 'md:order-last md:mt-2 md:mb-0' : ''}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {step.label}
                      </motion.span>

                      {/* Icon circle */}
                      <motion.div
                        className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-accent/50 flex items-center justify-center group-hover:border-accent transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent" />
                        <Icon className="w-6 h-6 text-accent relative z-10" />
                      </motion.div>
                    </div>

                    {/* Empty space for the other side on desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End dot */}
          <motion.div
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -bottom-4 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring" }}
          />
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Pronto para começar seu projeto?{" "}
            <span className="text-accent font-medium">Vamos dar o primeiro passo.</span>
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
            <span className="relative z-10 text-lg">FALAR COM UM ESPECIALISTA</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom decoration line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default BriefingSection;
