import { useLayoutEffect } from "react";
import { ScrollTrigger } from "@/lib/motion";
import {
  toggleMotionReduction,
  useMotionPreference,
  useSystemMotionPreference,
} from "@/hooks/useMotionPreference";

export default function MotionPreference() {
  const reduced = useMotionPreference();
  const systemReduced = useSystemMotionPreference();
  useLayoutEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reduced);
    ScrollTrigger.refresh();
    return () => {
      delete document.documentElement.dataset.reducedMotion;
    };
  }, [reduced]);
  return (
    <button
      type="button"
      className="motion-preference"
      aria-pressed={reduced}
      disabled={systemReduced}
      title={
        systemReduced
          ? "A redução de movimento está ativada nas preferências do seu dispositivo."
          : undefined
      }
      onClick={toggleMotionReduction}
    >
      {systemReduced
        ? "Movimento reduzido pelo sistema"
        : `Movimento ${reduced ? "reduzido" : "completo"}`}{" "}
      <span aria-hidden="true">◐</span>
    </button>
  );
}
