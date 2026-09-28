import { useMotionPreference } from "@/hooks/useMotionPreference";
import { Fragment, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion";
import {
  imageSet,
  imageUrl,
  projects,
  visualArchive,
  type Project,
} from "@/data/projects";
import { Arrow, ContactLink } from "../layout/ProjectLink";
import "./work-motion.css";

function ProjectImage({ project }: { project: Project }) {
  return (
    <img
      src={imageUrl(project.image)}
      srcSet={imageSet(project.image)}
      sizes="(max-width: 800px) 92vw, 75vw"
      loading="lazy"
      decoding="async"
      alt={`Página inicial do projeto ${project.title}`}
      width={project.image.startsWith("portfolio") ? 1920 : 385}
      height={project.image.startsWith("portfolio") ? 1080 : 1920}
    />
  );
}
function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`featured-project feature-${index} tone-${project.tone}`}
      style={{ zIndex: index + 1 }}
      onFocusCapture={(event) => {
        if (event.target.matches(":focus-visible")) {
          document
            .getElementById(`case-${project.id}`)
            ?.scrollIntoView({ block: "start", behavior: "instant" });
        }
      }}
    >
      <div className="project-panel">
        <div className="project-info">
          <div className="eyebrow project-meta">
            <span>PROJETO / {project.id}</span>
            <span>{project.category}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            className="text-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="VIEW"
          >
            Visitar projeto <Arrow />
          </a>
        </div>
        <a
          className="project-stage"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="VIEW"
          aria-label={`Visitar ${project.title} em uma nova aba`}
        >
          <span className="stage-label eyebrow">DESIGN + DEVELOPMENT</span>
          <span className="stage-cross" aria-hidden="true">
            +
          </span>
          <div className="project-browser">
            <div className="browser-bar">
              <span className="browser-dots">● ● ●</span>
              <span>{new URL(project.url).hostname.replace("www.", "")}</span>
              <Arrow />
            </div>
            <div className="project-image-mask">
              <ProjectImage project={project} />
            </div>
          </div>
          <span className="stage-bottom eyebrow">
            UMA IDEIA. UMA IDENTIDADE.
          </span>
          <span className="stage-number" aria-hidden="true">
            {project.id}
          </span>
        </a>
        <span className="project-shade" aria-hidden="true" />
      </div>
    </article>
  );
}
export default function SelectedProjects() {
  const reduced = useMotionPreference();
  const root = useRef<HTMLElement>(null);
  const featured = [projects[0], projects[1], projects[4]];
  const more = [projects[2], projects[3], projects[5], projects[6]];
  useLayoutEffect(() => {
    if (reduced) return;
    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 1000px) and (min-height: 650px)",
        compact: "(max-width: 999px), (max-height: 649px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (!context.conditions?.motion || !root.current) return;
        const section = root.current;
        const desktop = context.conditions.desktop;
        const cards = Array.from(
          section.querySelectorAll<HTMLElement>(".featured-project"),
        );
        const markers = Array.from(
          section.querySelectorAll<HTMLElement>(".project-marker"),
        );
        if (desktop) section.classList.add("work-motion-enabled");

        cards.forEach((card, index) => {
          const panel = card.querySelector<HTMLElement>(".project-panel");
          const browser = card.querySelector<HTMLElement>(".project-browser");
          const image = card.querySelector(".project-image-mask img");
          if (!panel || !browser) return;
          const entrance = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: markers[index],
              start: "top 95%",
              end: desktop ? "top 116px" : "top 40%",
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          });
          entrance
            .fromTo(
              browser,
              {
                yPercent: desktop ? 18 : 7,
                rotate: index % 2 ? 5 : -5,
                scale: desktop ? 0.82 : 0.94,
              },
              { yPercent: 0, rotate: 0, scale: 1, duration: 1 },
              0,
            )
            .fromTo(
              card.querySelector(".project-stage"),
              {
                clipPath: desktop
                  ? "inset(10% 8% 10% 8%)"
                  : "inset(3% 3% 3% 3%)",
              },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 0.85 },
              0,
            )
            .fromTo(
              card.querySelector(".project-info h3"),
              { yPercent: 24, clipPath: "inset(0% 0% 55% 0%)" },
              { yPercent: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.6 },
              0.12,
            );
          if (image)
            entrance.fromTo(
              image,
              { scale: 1.12 },
              { scale: 1, duration: 1 },
              0,
            );

          if (desktop && cards[index + 1]) {
            gsap
              .timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                  trigger: markers[index + 1],
                  start: "top 90%",
                  end: "top 116px",
                  scrub: 0.45,
                  invalidateOnRefresh: true,
                },
              })
              .to(
                panel,
                { scale: 0.91, y: -18, rotation: index % 2 ? 1.5 : -1.5 },
                0,
              )
              .to(card.querySelector(".project-shade"), { opacity: 0.45 }, 0);
          }
        });

        section
          .querySelectorAll<HTMLElement>(".project-row")
          .forEach((row, index) => {
            gsap.from(row.querySelectorAll("summary > *"), {
              x: (itemIndex) => (itemIndex === 1 ? (index % 2 ? -36 : 36) : 0),
              y: 14,
              opacity: 0.5,
              stagger: 0.035,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 95%",
                end: "top 72%",
                scrub: 0.35,
              },
            });
          });

        const archive = section.querySelector<HTMLElement>(".visual-archive");
        const track = section.querySelector<HTMLElement>(".archive-track");
        const viewport = section.querySelector<HTMLElement>(".archive-window");
        if (archive && track && viewport && desktop) {
          const distance = () =>
            Math.max(0, track.scrollWidth - viewport.clientWidth);
          const gallery = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: archive,
              start: "top 110px",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
          gallery.to(track, { x: () => -distance(), duration: 1 }, 0);
          gallery.fromTo(
            section.querySelector(".archive-progress span"),
            { scaleX: 0 },
            { scaleX: 1, duration: 1 },
            0,
          );
          Array.from(track.children).forEach((figure, index) => {
            gallery.fromTo(
              figure,
              { rotation: [4, -4, 3][index], y: [25, -16, 22][index] },
              {
                rotation: [-3, 3, 0][index],
                y: [-18, 20, 0][index],
                duration: 1,
              },
              0,
            );
          });
        } else if (archive) {
          archive.querySelectorAll("figure").forEach((figure, index) => {
            gsap.fromTo(
              figure,
              { rotation: index % 2 ? 2 : -2, y: 20 },
              {
                rotation: 0,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: figure,
                  start: "top 95%",
                  end: "top 55%",
                  scrub: 0.35,
                },
              },
            );
          });
        }
        return () => section.classList.remove("work-motion-enabled");
      },
      root,
    );
    return () => media.revert();
  }, [reduced]);
  return (
    <section
      id="projetos"
      className="selected-work section-pad"
      ref={root}
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-kicker">01 / SELECTED WORK</p>
          <h2 id="work-title">
            O trabalho
            <br />
            <span className="serif">fala por si.</span>
          </h2>
        </div>
        <p>
          Negócios diferentes.
          <br />A mesma atenção a cada detalhe.
          <br />
          <span className="muted">Explore uma seleção de projetos.</span>
        </p>
      </div>
      <div className="featured-list">
        {featured.map((project, index) => (
          <Fragment key={project.id}>
            <div
              className="project-marker"
              id={`case-${project.id}`}
              aria-hidden="true"
            />
            <FeaturedProject key={project.id} project={project} index={index} />
          </Fragment>
        ))}
      </div>
      <div className="more-work-heading">
        <p className="eyebrow">CONTINUE EXPLORANDO</p>
        <span className="eyebrow">OUTROS PROJETOS ↙</span>
      </div>
      <div className="project-index">
        {more.map((project) => (
          <details
            className="project-row"
            key={project.id}
            onToggle={() => ScrollTrigger.refresh()}
          >
            <summary>
              <span className="eyebrow">/{project.id}</span>
              <h3>{project.title}</h3>
              <span className="project-row-category">{project.category}</span>
              <span className="expand-sign" aria-hidden="true">
                ＋
              </span>
            </summary>
            <div className={`project-row-content tone-${project.tone}`}>
              <div>
                <p>{project.description}</p>
                <a
                  href={project.url}
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="VIEW"
                >
                  Visitar projeto <Arrow />
                </a>
                <span className="eyebrow project-domain">
                  {new URL(project.url).hostname}
                </span>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VIEW"
                className={`archive-preview ${project.image.startsWith("case") ? "long-preview" : ""}`}
                aria-label={`Visitar ${project.title}`}
              >
                <ProjectImage project={project} />
              </a>
            </div>
          </details>
        ))}
      </div>
      <div className="visual-archive">
        <div className="archive-sticky">
          <div className="archive-heading">
            <p className="eyebrow">DO ARQUIVO / MAIS EXPLORAÇÕES VISUAIS</p>
            <span className="archive-direction eyebrow" aria-hidden="true">
              CONTINUE O SCROLL ↘
            </span>
          </div>
          <div className="archive-window">
            <div className="archive-track">
              {visualArchive.map((item) => (
                <figure key={item.image}>
                  <img
                    src={imageUrl(item.image, 640)}
                    srcSet={imageSet(item.image)}
                    sizes="(max-width: 800px) 90vw, 30vw"
                    alt={`Design do site ${item.title}`}
                    width="1920"
                    height="1080"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <span>{item.title}</span>
                    <span className="eyebrow">{item.label}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="archive-progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
      <div className="work-cta">
        <p>O próximo projeto pode ser o seu.</p>
        <ContactLink>Vamos tirar sua ideia do papel</ContactLink>
      </div>
    </section>
  );
}
