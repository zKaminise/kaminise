import { projects } from "@/data/projects";
import { ContactLink } from "../layout/ProjectLink";
import { useLayoutEffect, useRef } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import { gsap } from "@/lib/motion";
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
        const composition = gsap.timeline({
          scrollTrigger: {
            trigger: graphic,
            start: "top bottom",
            end: "bottom top",
            scrub: desktop ? 0.8 : 0.3,
          },
        });
        composition.fromTo(
          ".monogram",
          {
            rotation: desktop ? -14 : -10,
            y: desktop ? 42 : 15,
            scale: 0.91,
          },
          {
            rotation: desktop ? -2 : -5,
            y: desktop ? -28 : -10,
            scale: 1.02,
            ease: "none",
            duration: 1,
          },
        );
        composition.fromTo(
          ".monogram > span",
          {
            y: desktop ? 30 : 12,
          },
          {
            y: desktop ? -15 : -5,
            ease: "none",
            duration: 1,
          },
          0,
        );
        composition.fromTo(
          ".monogram > i",
          { rotation: -35 },
          {
            rotation: 25,
            ease: "none",
            duration: 1,
          },
          0,
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
      <div className="about-composition">
        <div className="monogram" aria-hidden="true">
          g<span>m</span>
          <i>↗</i>
        </div>
        <div className="eyebrow">
          <span>DESIGNER POR OLHAR.</span>
          <span>DEVELOPER POR OFÍCIO.</span>
        </div>
      </div>
      <div className="about-copy">
        <p className="eyebrow section-kicker">
          04 / A PESSOA POR TRÁS DOS PIXELS
        </p>
        <h2 id="about-title">
          Muito prazer.
          <br />
          Gabriel <span className="serif">Misao.</span>
        </h2>
        <p className="about-lead">
          Entre design, código e movimento,
          <br />
          eu encontro novas formas de comunicar.
        </p>
        <p>
          Sou desenvolvedor e criador de experiências digitais. Trabalho
          diretamente com você para transformar o que torna seu negócio único em
          algo que as pessoas possam ver, entender e explorar.
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
