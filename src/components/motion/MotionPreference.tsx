import { useLayoutEffect } from "react";
import { ScrollTrigger } from "@/lib/motion";
import {
  toggleMotionReduction,
  useMotionPreference,
} from "@/hooks/useMotionPreference";

export default function MotionPreference() {
  const reduced = useMotionPreference();
  useLayoutEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reduced);
    ScrollTrigger.refresh();
    return () => {
      delete document.documentElement.dataset.reducedMotion;
    };
  }, [reduced]);
  return (
    <button
      className="motion-preference"
      aria-pressed={reduced}
      onClick={toggleMotionReduction}
    >
      Movimento {reduced ? "reduzido" : "completo"}{" "}
      <span aria-hidden="true">◐</span>
    </button>
  );
}
