import { useMotionPreference } from "@/hooks/useMotionPreference";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/motion";

export default function MotionSystem() {
  const reduced = useMotionPreference();
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced) return;
    const media = gsap.matchMedia();
    media.add(
      "(min-width: 801px) and (prefers-reduced-motion: no-preference) and (pointer: fine)",
      () => {
        const lenis = new Lenis({
          duration: 0.85,
          smoothWheel: true,
          anchors: true,
        });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        const el = cursor.current;
        const x = gsap.quickTo(el, "x", { duration: 0.18, ease: "power3.out" });
        const y = gsap.quickTo(el, "y", { duration: 0.18, ease: "power3.out" });
        const move = (event: PointerEvent) => {
          if (!el) return;
          x(event.clientX);
          y(event.clientY);
          el.style.opacity = "1";
          const target = (event.target as HTMLElement).closest<HTMLElement>(
            "a,button,summary",
          );
          el.textContent = target ? target.dataset.cursor || "↗" : "";
          el.classList.toggle("cursor-active", !!target);
        };
        const hide = () => {
          if (el) el.style.opacity = "0";
        };
        window.addEventListener("pointermove", move, { passive: true });
        window.addEventListener("scroll", hide, { passive: true });
        document.addEventListener("pointerleave", hide);
        return () => {
          lenis.destroy();
          gsap.ticker.remove(tick);
          window.removeEventListener("pointermove", move);
          window.removeEventListener("scroll", hide);
          document.removeEventListener("pointerleave", hide);
          hide();
        };
      },
    );
    return () => media.revert();
  }, [reduced]);
  return <div className="custom-cursor" ref={cursor} aria-hidden="true" />;
}
