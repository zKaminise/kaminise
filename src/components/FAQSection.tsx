import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";
import { useState } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const faqs = [
  {
    id: 1,
    question: "Em quanto tempo meu Site fica pronto?",
    answer: "Normalmente dentro de 7 dias já entregamos um preview do projeto para que você possa revisar e assim fazermos ajustes e modificações com base no seu feedback, e após isso com mais 7 dias realizamos todas alterações finais de configurações. Um prazo de até 14 dias o seu site já está entregue e funcionando para o Brasil todo.",
  },
  {
    id: 2,
    question: "Preciso pagar Mensalidade?",
    answer: "Não, o site é inteiramente seu, sem mensalidade obrigatória. Somente poderá ter custos de mensalidades em caso de precisar de Hospedagem, Suporte Contínuo e atualizações.",
  },
  {
    id: 3,
    question: "Vocês ajudam com Domínio e Hospedagem?",
    answer: "Claro! Podemos orientar e publicar o site em uma Hospedagem que você já tenha ou posso oferecer o uso a hospedagem que já usamos aqui, apoiamos na configurações geral do Domínio, Hospedagem e caso precise também email profissional!",
  },
  {
    id: 4,
    question: "Não tenho conteúdo pronto e também tenho medo de não gostar do layout. E agora?",
    answer: "Relaxa, Ajudamos você com toda a estrutura, ideias de conteúdo, textos, imagens e posicionamento. E se não gostar do layout inicial, ajustamos até ficar do seu jeito.",
  },
  {
    id: 5,
    question: "Quanto custa um site completo?",
    answer: "Depende do tamanho, páginas e integrações. Mas podemos montar uma proposta comercial personalizada e te enviar rapidamente.",
  },
  {
    id: 6,
    question: "O site vai ajudar meu negócio a vender mais?",
    answer: "Sim — esse é o objetivo principal. Criamos sites focados em conversão, não apenas em estética. Layout, textos, estrutura e chamadas pensados para transformar visitas em vendas.",
  },
];

interface FAQItemProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem = ({ faq, isOpen, onToggle, index }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-500
          ${isOpen 
            ? 'border-accent/50 bg-card/90 shadow-xl shadow-accent/10' 
            : 'border-border/50 bg-card/50 hover:border-accent/30 hover:bg-card/70'
          }
        `}
      >
        {/* Glow effect when open */}
        {isOpen && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
        )}
        
        {/* Question */}
        <button
          onClick={onToggle}
          className="w-full flex items-start gap-4 p-6 text-left relative z-10"
        >
          {/* Number */}
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
            {String(faq.id).padStart(2, '0')}
          </span>
          
          {/* Question text */}
          <span className={`flex-1 text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent'}`}>
            {faq.question}
          </span>
          
          {/* Toggle icon */}
          <motion.span
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-accent text-accent-foreground' : 'bg-accent/10 text-accent'}`}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </motion.span>
        </button>
        
        {/* Answer */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pl-20">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-[150px]" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Perguntas que você{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent">
                pode ter
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
            Tire suas dúvidas antes de começar seu projeto. 
            Se não encontrar a resposta aqui, é só chamar no WhatsApp!
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6 text-lg md:text-xl max-w-2xl mx-auto">
            Se chegou até aqui acredito que esteja decidido a{" "}
            <span className="text-accent font-medium">elevar o nível da sua presença digital</span>
          </p>
          
          <motion.a
            href="https://wa.me/5511999999999?text=Olá! Tenho algumas dúvidas sobre o desenvolvimento de sites."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-cta text-accent-foreground font-bold px-10 py-5 rounded-full overflow-hidden shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10 text-lg">SOLICITAR ORÇAMENTO</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom decoration line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default FAQSection;
