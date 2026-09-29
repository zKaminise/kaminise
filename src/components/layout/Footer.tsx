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
          Se você tem uma empresa, produto ou ideia e quer apresentar isso de um
          jeito próprio, vamos conversar.
        </p>
        <ContactLink>Falar sobre meu projeto</ContactLink>
      </div>
      <div className="footer-details">
        <div className="footer-identity">
          <BrandLogo variant="monogram" decorative />
          <span>Creative Developer · Brasil</span>
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
