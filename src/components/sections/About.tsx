import { projects } from "@/data/projects";
import { ContactLink } from "../layout/ProjectLink";
import { useLayoutEffect, useRef } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import { gsap } from "@/lib/motion";
import "./about-portrait.css";
export default function About() {
  const root = useRef<HTMLElement>(null);
  const reduced = useMotionPreference();

  useLayoutEffect(() => {
    if (reduced) return;
    const media = gsap.matchMedia();
    media.add(
      { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" },
      (context) => {
        const desktop = context.conditions?.desktop;
        const graphic = root.current?.querySelector(".about-composition");
        if (!graphic) return;
        gsap.fromTo(
          ".about-portrait",
          { yPercent: desktop ? 1.2 : 0.6, scale: desktop ? 1.045 : 1.025 },
          {
            yPercent: desktop ? -1.2 : -0.6,
            scale: desktop ? 1.045 : 1.025,
            ease: "none",
            scrollTrigger: {
              trigger: graphic,
              start: "top bottom",
              end: "bottom top",
              scrub: desktop ? 0.8 : 0.3,
            },
          },
        );

        gsap.from(".client-name", {
          yPercent: 110,
          rotation: desktop ? 4 : 0,
          stagger: 0.065,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".clients",
            start: "top 92%",
            end: "bottom 76%",
            scrub: desktop ? 0.5 : 0.25,
          },
        });
      },
      root,
    );
    return () => media.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      id="sobre"
      className="about section-pad"
      aria-labelledby="about-title"
    >
      <figure className="about-composition">
        <div className="about-portrait-frame">
          <img
            className="about-portrait"
            src="/brand/gabriel-misao-portrait-800.webp"
            srcSet="/brand/gabriel-misao-portrait-480.webp 480w, /brand/gabriel-misao-portrait-800.webp 800w, /brand/gabriel-misao-portrait-1122.webp 1122w"
            sizes="(max-width: 800px) min(440px, 90vw), (max-width: 1400px) 40vw, 560px"
            width={1122}
            height={1402}
            alt="Gabriel Misao sorrindo, usando terno azul-marinho e camisa branca."
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="eyebrow">
          <span>DESIGNER POR OLHAR.</span>
          <span>DEVELOPER POR OFÍCIO.</span>
        </figcaption>
      </figure>
      <div className="about-copy">
        <p className="eyebrow section-kicker">
          04 / A PESSOA POR TRÁS DOS PIXELS
        </p>
        <h2 id="about-title">Muito prazer.</h2>
        <p className="about-lead">
          Entre design, código e movimento,
          <br />
          eu encontro novas formas de comunicar.
        </p>
        <p>
          Sou Gabriel Misao, desenvolvedor web independente e web designer.
          Trabalho diretamente com você para transformar o que torna seu negócio
          único em algo que as pessoas possam ver, entender e explorar.
        </p>
        <p>
          Sites, landing pages, lojas e sistemas. Do conceito à publicação, cada
          decisão tem uma razão para estar ali.
        </p>
        <ContactLink>Vamos nos conhecer</ContactLink>
      </div>
      <div className="clients">
        <p className="eyebrow">PROJETOS PARA MARCAS DE DIFERENTES SEGMENTOS</p>
        <div>
          {projects.map((project) => (
            <span className="client-name-mask" key={project.id}>
              <span className="client-name">{project.title}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
