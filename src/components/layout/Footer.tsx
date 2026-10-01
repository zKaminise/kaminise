import MotionPreference from "../motion/MotionPreference";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import { useLayoutEffect, useRef } from "react";
import { contact } from "@/data/site";
import { ContactLink } from "./ProjectLink";
import { gsap } from "@/lib/motion";
import BrandLogo from "./BrandLogo";
export default function Footer() {
  const reduced = useMotionPreference();
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (reduced) return;
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".footer-brand", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
      },
      root,
    );
    return () => media.revert();
  }, [reduced]);
  return (
    <footer className="footer section-pad" id="contato" ref={root}>
      <div className="footer-top eyebrow">
        <span>TEM UMA IDEIA EM MENTE?</span>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
      <div className="footer-invitation">
        <h2>
          VAMOS CRIAR
          <br />
          <span className="serif">algo memorável?</span>
        </h2>
        <a
          className="big-arrow"
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar sobre meu projeto pelo WhatsApp"
          data-cursor="GO"
        >
          ↗
        </a>
      </div>
      <div className="footer-conversation">
        <p>
          Precisa criar um site ou renovar o atual? Me conte seu tipo de
          negócio, o que você precisa e o prazo desejado. Você recebe uma
          proposta com escopo, investimento e etapas definidas.
        </p>
        <div className="budget-contact">
          <ContactLink>Pedir orçamento pelo WhatsApp</ContactLink>
          <a
            className="budget-phone"
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            (34) 99827-5292
          </a>
          <span>Atendimento direto com Gabriel Misao.</span>
        </div>
      </div>
      <div className="footer-details">
        <div className="footer-identity">
          <BrandLogo variant="monogram" decorative />
          <span>Desenvolvedor web · Brasil</span>
        </div>
        <div className="footer-social">
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
            Instagram ↗
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp ↗
          </a>
        </div>
      </div>
      <div className="footer-brand">
        <BrandLogo variant="principal" />
      </div>
      <MotionPreference />
      <div className="footer-bottom eyebrow">
        <span>© {new Date().getFullYear()} GABRIEL MISAO</span>
        <span>FEITO COM INTENÇÃO, ATÉ O ÚLTIMO PIXEL.</span>
        <span>DESIGN + CODE</span>
      </div>
    </footer>
  );
}
