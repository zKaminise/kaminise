import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { navigation } from "@/data/site";
import { ContactLink } from "./ProjectLink";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import { motionEase } from "@/lib/motion";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const reduced = useMotionPreference();
  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 801px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      element?.close();
      document.body.style.overflow = previous;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="#inicio"
          aria-label="Gabriel Misao — início"
        >
          <BrandLogo variant="monogram" decorative loading="eager" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <ContactLink className="header-contact">Iniciar projeto</ContactLink>
        <button
          className="menu-button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu <span aria-hidden="true">＋</span>
        </button>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Navegação"
        onClose={() => setOpen(false)}
        data-lenis-prevent
      >
        <div className="menu-top">
          <span className="wordmark">
            <BrandLogo variant="monogram" loading="eager" />
          </span>
          <button
            onClick={() => setOpen(false)}
            autoFocus
            aria-label="Fechar menu"
          >
            Fechar ×
          </button>
        </div>
        <motion.nav
          aria-label="Navegação mobile"
          initial={false}
          animate={open ? "open" : "closed"}
        >
          {navigation.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              variants={{
                closed: { y: 30, opacity: 0 },
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: reduced ? 0 : 0.5,
                    delay: reduced ? 0 : index * 0.06,
                    ease: motionEase,
                  },
                },
              }}
            >
              <small>0{index + 1}</small>
              {item.label}
              <span aria-hidden="true">↗</span>
            </motion.a>
          ))}
        </motion.nav>
        <ContactLink onClick={() => setOpen(false)}>
          Falar sobre meu projeto
        </ContactLink>
        <p className="eyebrow">CREATIVE DEVELOPER · BRASIL</p>
      </dialog>
    </>
  );
}
