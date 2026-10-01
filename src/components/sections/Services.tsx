import { ContactLink } from "../layout/ProjectLink";
import { services } from "@/data/site";
import { imageUrl } from "@/data/projects";
import { useLayoutEffect, useRef } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import { gsap, ScrollTrigger } from "@/lib/motion";
export default function Services() {
  const root = useRef<HTMLElement>(null);
  const reduced = useMotionPreference();

  useLayoutEffect(() => {
    if (reduced) return;
    const media = gsap.matchMedia();
    media.add(
      { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" },
      (context) => {
        const desktop = context.conditions?.desktop;
        root.current
          ?.querySelectorAll<HTMLElement>(".service")
          .forEach((row, index) => {
            const title = row.querySelector(".service-title-motion");
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: row,
                start: "top 94%",
                end: "top 60%",
                scrub: desktop ? 0.6 : 0.25,
              },
            });
            timeline.fromTo(
              row,
              { "--service-line": 0 },
              { "--service-line": 1, duration: 1, ease: "none" },
            );
            if (title)
              timeline.from(
                title,
                {
                  x: (index % 2 === 0 ? -1 : 1) * (desktop ? 90 : 22),
                  skewX: desktop ? (index % 2 === 0 ? -4 : 4) : 0,
                  opacity: 0.35,
                  duration: 1,
                  ease: "power2.out",
                },
                0,
              );
          });

        gsap.from(".principle-tags > span", {
          rotation: (index) => (index % 2 === 0 ? -9 : 9),
          y: desktop ? 35 : 16,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".principle-tags",
            start: "top 96%",
            end: "bottom 78%",
            scrub: 0.45,
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
      id="servicos"
      className="services section-pad"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-kicker">02 / O QUE EU CRIO</p>
          <h2 id="services-title">
            Criação de sites.
            <br />
            <span className="serif">Para o seu negócio.</span>
          </h2>
        </div>
        <p>
          Sites responsivos, landing pages e sistemas web sob medida.
          <br />
          Design, desenvolvimento e orientação para a publicação.
        </p>
      </div>
      <div className="services-list">
        {services.map((service, index) => (
          <details
            key={service.title}
            className="service"
            onToggle={() => ScrollTrigger.refresh()}
          >
            <summary>
              <span className="eyebrow">0{index + 1}</span>
              <h3>
                <span className="service-title-motion">{service.title}</span>
              </h3>
              <span className="service-hint">EXPLORAR</span>
              <span className="expand-sign" aria-hidden="true">
                ↗
              </span>
            </summary>
            <div className="service-content">
              <div>
                <h4>{service.subtitle}</h4>
                <p>{service.description}</p>
                <span className="eyebrow">{service.tags}</span>
                <ContactLink className="service-contact">
                  Solicitar orçamento
                </ContactLink>
              </div>
              <img
                src={imageUrl(service.image)}
                alt={`Composição de interfaces para ${service.title.toLowerCase()}`}
                width="800"
                height="512"
                loading="lazy"
              />
            </div>
          </details>
        ))}
      </div>
      <div className="principles">
        <span className="eyebrow">DO PRIMEIRO PIXEL AO ÚLTIMO CLIQUE.</span>
        <p>
          Estratégia para orientar.
          <br />
          Design para diferenciar.
          <br />
          Código para fazer acontecer.
        </p>
        <div className="principle-tags">
          <span>ESTRATÉGIA</span>
          <span>DESIGN</span>
          <span>DESENVOLVIMENTO</span>
          <span>MOVIMENTO</span>
          <span>PERFORMANCE</span>
        </div>
      </div>
    </section>
  );
}
