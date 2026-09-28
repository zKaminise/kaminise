import { useLayoutEffect, useRef, useState } from "react";
import { processSteps } from "@/data/site";
import { gsap, ScrollTrigger } from "@/lib/motion";
export default function Process() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      root.current?.querySelectorAll(".process-step").forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });
    }, root);
    return () => context.revert();
  }, []);
  return (
    <section
      className="process section-pad"
      id="processo"
      ref={root}
      aria-labelledby="process-title"
    >
      <div className="process-sticky">
        <p className="eyebrow section-kicker">03 / DA CONVERSA AO LANÇAMENTO</p>
        <h2 id="process-title">
          Um processo
          <br />
          <span className="serif">feito a dois.</span>
        </h2>
        <p>
          Você traz a visão do seu negócio.
          <br />
          Eu conecto estratégia, design e código.
        </p>
        <nav aria-label="Etapas do projeto">
          {processSteps.map((step, index) => (
            <a
              key={step.label}
              href={`#etapa-${index + 1}`}
              className={active === index ? "is-active" : ""}
              aria-current={active === index ? "step" : undefined}
            >
              <span>0{index + 1}</span>
              <span>{step.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="process-content">
        {processSteps.map((step, index) => (
          <article
            key={step.label}
            className="process-step"
            id={`etapa-${index + 1}`}
          >
            <span className="process-number" aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <p className="eyebrow">
                0{index + 1} / {step.detail}
              </p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
