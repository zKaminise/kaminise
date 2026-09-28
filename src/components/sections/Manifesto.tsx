import { useMotionPreference } from "@/hooks/useMotionPreference";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/motion";
import "./editorial-motion.css";

export default function Manifesto() {
  const reduced = useMotionPreference();
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (reduced) return;
    const media = gsap.matchMedia();
    media.add(
      { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" },
      (context) => {
        const desktop = context.conditions?.desktop;
        const heading = root.current?.querySelector("h2");
        if (!heading) return;

        const sentence = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            end: desktop ? "bottom 48%" : "bottom 66%",
            scrub: desktop ? 0.6 : 0.3,
          },
        });
        sentence
          .from(".manifesto-word", {
            yPercent: 110,
            rotation: desktop ? 5 : 0,
            opacity: 0.25,
            stagger: 0.055,
            duration: 0.6,
            ease: "power2.out",
          })
          .fromTo(
            ".manifesto-closing",
            { "--manifesto-underline": "0%" },
            {
              "--manifesto-underline": "100%",
              duration: 0.65,
              ease: "none",
            },
            "-=0.3",
          );

        gsap.fromTo(
          ".manifesto-note .asterisk",
          { rotation: -45 },
          {
            rotation: desktop ? 150 : 65,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      },
      root,
    );
    return () => media.revert();
  }, [reduced]);
  return (
    <section className="manifesto section-pad" ref={root}>
      <p className="eyebrow section-kicker">
        <span className="accent">↳</span> A PRIMEIRA IMPRESSÃO IMPORTA
      </p>
      <h2>
        {"Seu site merece mais do que uma visita.".split(" ").map((word, i) => (
          <span className="manifesto-word-mask" key={i}>
            <span className="manifesto-word">{word}</span>{" "}
          </span>
        ))}
        <br />
        <span className="manifesto-closing accent">
          {"Merece ser lembrado.".split(" ").map((word, i) => (
            <span className="manifesto-word-mask" key={i}>
              <span className="manifesto-word">{word}</span>{" "}
            </span>
          ))}
        </span>
      </h2>
      <div className="manifesto-note">
        <span className="asterisk" aria-hidden="true">
          ✳
        </span>
        <p>
          Design chama atenção. Uma boa experiência mantém.
          <br />
          Eu conecto os dois para transformar interesse em conversa.
        </p>
      </div>
    </section>
  );
}
