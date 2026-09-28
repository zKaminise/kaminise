import { useSyncExternalStore } from "react";

const query = window.matchMedia("(prefers-reduced-motion: reduce)");
let manualReduction = false;
const listeners = new Set<() => void>();
const snapshot = () => manualReduction || query.matches;
function subscribe(listener: () => void) {
  listeners.add(listener);
  query.addEventListener("change", listener);
  return () => {
    listeners.delete(listener);
    query.removeEventListener("change", listener);
  };
}
export function useMotionPreference() {
  return useSyncExternalStore(subscribe, snapshot, () => true);
}
export function toggleMotionReduction() {
  manualReduction = !manualReduction;
  listeners.forEach((listener) => listener());
}
