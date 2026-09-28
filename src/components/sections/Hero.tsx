import { useMotionPreference } from "@/hooks/useMotionPreference";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/motion";
import { imageSet, imageUrl, projects } from "@/data/projects";
import { Arrow } from "../layout/ProjectLink";
import "./hero-motion.css";

export default function Hero() {
  const reduced = useMotionPreference();
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (reduced) return;
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".hero-line > span", {
          yPercent: 110,
          stagger: 0.09,
          duration: 1,
          ease: "power4.out",
        });
      },
      root,
    );
    media.add(
      "(min-width: 801px) and (prefers-reduced-motion: no-preference)",
      () => {
        const stage = root.current?.querySelector<HTMLElement>(".hero-stage");
        const heading =
          root.current?.querySelector<HTMLElement>(".hero-heading-wrap");
        const art = root.current?.querySelector<HTMLElement>(".hero-art");
        if (!stage || !heading || !art) return;

        // Measure the untransformed layout so resizing or a ScrollTrigger refresh
        // cannot progressively move the composition away from the viewport.
        const centerX = () =>
          stage.clientWidth / 2 -
          heading.offsetLeft -
          art.offsetLeft -
          art.offsetWidth / 2;
        const centerY = () =>
          stage.clientHeight * 0.52 -
          heading.offsetTop -
          art.offsetTop -
          art.offsetHeight / 2;
        const expansion = () =>
          Math.min(1.5, (stage.clientHeight - 220) / art.offsetHeight);

        const timeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        timeline
          .to(
            ".hero-line-one",
            { xPercent: -24, yPercent: -20, opacity: 0.08, duration: 0.38 },
            0,
          )
          .to(
            ".hero-line-two",
            { xPercent: 30, opacity: 0.06, duration: 0.4 },
            0.025,
          )
          .to(
            ".hero-line-three",
            { xPercent: -16, yPercent: 18, opacity: 0.06, duration: 0.4 },
            0.05,
          )
          .to(".hero-bottom", { autoAlpha: 0, y: 24, duration: 0.2 }, 0)
          .to(".art-coordinate", { opacity: 0, duration: 0.2 }, 0)
          .to(
            ".hero-art",
            {
              x: centerX,
              y: centerY,
              scale: expansion,
              duration: 0.68,
            },
            0.1,
          )
          .to(
            ".hero-screen-back",
            {
              xPercent: -55,
              yPercent: -5,
              rotation: -8,
              rotationY: -12,
              z: 35,
              scale: 0.91,
              duration: 0.62,
            },
            0.14,
          )
          .to(
            ".hero-screen-middle",
            {
              xPercent: 5,
              yPercent: 12,
              rotation: -2,
              rotationX: 5,
              z: 65,
              scale: 1.02,
              duration: 0.61,
            },
            0.2,
          )
          .to(
            ".hero-screen-front",
            {
              xPercent: 48,
              yPercent: -100,
              rotation: 7,
              rotationY: 12,
              z: 25,
              scale: 0.92,
              duration: 0.62,
            },
            0.26,
          )
          .to(
            ".orbit-one",
            { rotation: 48, scale: 1.3, opacity: 0.3, duration: 0.88 },
            0.1,
          )
          .to(
            ".orbit-two",
            { rotation: -48, scale: 0.8, opacity: 0.2, duration: 0.88 },
            0.1,
          )
          .to(
            ".art-cross",
            { rotation: 180, scale: 0.7, opacity: 0.3, duration: 0.88 },
            0.1,
          )
          .to(
            ".hero-screen",
            { rotationY: 0, rotationX: 0, z: 0, duration: 0.2 },
            0.8,
          )
          .fromTo(
            ".hero-scene-caption",
            { y: 15, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.18 },
            0.72,
          )
          .fromTo(
            ".hero-scroll-progress",
            { scaleX: 0 },
            { scaleX: 1, duration: 1, ease: "none" },
            0,
          );
      },
      root,
    );
    media.add(
      "(max-width: 800px) and (prefers-reduced-motion: no-preference)",
      () => {
        // A short passing motion keeps the mobile reading flow natural.
        gsap.fromTo(
          ".hero-screen",
          { y: (index) => 12 + index * 5 },
          {
            y: (index) => -8 - index * 4,
            ease: "none",
            stagger: 0.06,
            scrollTrigger: {
              trigger: root.current?.querySelector(".hero-art"),
              start: "top 90%",
              end: "bottom 15%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          },
        );
      },
      root,
    );
    media.add(
      "(min-width: 801px) and (pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)",
      () => {
        const inner =
          root.current?.querySelector<HTMLElement>(".hero-art-inner");
        if (!inner) return;
        // Pointer tilt owns the inner wrapper; scroll owns the outer wrapper
        // and individual screens, so both effects can run without competing.
        const rx = gsap.quickTo(inner, "rotationY", {
          duration: 1.1,
          ease: "power3.out",
        });
        const ry = gsap.quickTo(inner, "rotationX", {
          duration: 1.1,
          ease: "power3.out",
        });
        const move = (event: PointerEvent) => {
          if (event.pointerType !== "mouse") return;
          rx((event.clientX / window.innerWidth - 0.5) * 7);
          ry((event.clientY / window.innerHeight - 0.5) * -5);
        };
        const reset = () => {
          rx(0);
          ry(0);
        };
        const el = root.current;
        el?.addEventListener("pointermove", move, { passive: true });
        el?.addEventListener("pointerleave", reset);
        return () => {
          el?.removeEventListener("pointermove", move);
          el?.removeEventListener("pointerleave", reset);
          rx.tween.kill();
          ry.tween.kill();
        };
      },
      root,
    );
    return () => media.revert();
  }, [reduced]);

  return (
    <section
      className="hero hero-motion"
      id="inicio"
      ref={root}
      aria-labelledby="hero-title"
    >
      <div className="hero-stage">
        <div className="hero-topline eyebrow">
          <span>DESIGN & DESENVOLVIMENTO INDEPENDENTE</span>
          <span>
            BRASIL · DISPONÍVEL PARA PROJETOS <i />
          </span>
        </div>
        <div className="hero-heading-wrap">
          <h1 id="hero-title">
            <span className="hero-line hero-line-one">
              <span>IDEIAS QUE</span>
            </span>
            <span className="hero-line hero-line-two">
              <span>GANHAM</span>
            </span>
            <span className="hero-line hero-line-three">
              <span>
                PRESENÇA<span className="accent">.</span>
              </span>
            </span>
          </h1>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-inner">
              <span className="art-coordinate eyebrow">
                FIG. 01 — IDEIAS EM MOVIMENTO
              </span>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              {[projects[2], projects[0], projects[1]].map((project, index) => (
                <div
                  className={`hero-screen hero-screen-${["back", "middle", "front"][index]}`}
                  key={project.id}
                >
                  <div className="mini-browser">
                    <span>● ● ●</span>
                    <span>{new URL(project.url).hostname}</span>
                    <span>↗</span>
                  </div>
                  <img
                    src={imageUrl(project.image, 640)}
                    srcSet={imageSet(project.image)}
                    sizes="(max-width: 800px) 55vw, 27vw"
                    width="1920"
                    height="1080"
                    alt=""
                  />
                </div>
              ))}
              <span className="art-cross">+</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#projetos" className="explore-link">
            <span className="round-arrow">
              <Arrow diagonal={false} />
            </span>
            <span>
              EXPLORE OS PROJETOS
              <small>Design que você pode ver. Código que pode explorar.</small>
            </span>
          </a>
          <p>
            Sou Gabriel Misao. Crio sites e experiências digitais que dão à sua
            marca uma presença à altura.
          </p>
          <span className="hero-index eyebrow">
            SCROLL TO DISCOVER
            <br />↓
          </span>
        </div>
        <div className="hero-baseline eyebrow">
          <span>CREATIVE DEVELOPER</span>
          <span>DESIGN COM INTENÇÃO. CÓDIGO COM PRECISÃO.</span>
          <span>PORTFÓLIO / {new Date().getFullYear()}</span>
        </div>
        <div className="hero-scene-caption eyebrow" aria-hidden="true">
          <span>TRÊS IDEIAS. TRÊS UNIVERSOS.</span>
          <span>PROJETOS REAIS, EM MOVIMENTO ↘</span>
        </div>
        <div className="hero-scroll-track" aria-hidden="true">
          <span className="hero-scroll-progress" />
        </div>
      </div>
    </section>
  );
}
