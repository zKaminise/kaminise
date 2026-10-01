import { useSyncExternalStore } from "react";

const query =
  typeof window === "undefined"
    ? undefined
    : window.matchMedia("(prefers-reduced-motion: reduce)");
const storageKey = "gabriel-misao:reduced-motion";

function readManualReduction() {
  try {
    return window.localStorage.getItem(storageKey) === "true";
  } catch {
    return false;
  }
}

let manualReduction = readManualReduction();
const listeners = new Set<() => void>();
const snapshot = () => manualReduction || !!query?.matches;
const systemSnapshot = () => !!query?.matches;
function subscribe(listener: () => void) {
  listeners.add(listener);
  query?.addEventListener("change", listener);
  return () => {
    listeners.delete(listener);
    query?.removeEventListener("change", listener);
  };
}
export function useMotionPreference() {
  return useSyncExternalStore(subscribe, snapshot, () => true);
}
export function useSystemMotionPreference() {
  return useSyncExternalStore(subscribe, systemSnapshot, () => true);
}
export function toggleMotionReduction() {
  if (query?.matches) return;
  manualReduction = !manualReduction;
  try {
    window.localStorage.setItem(storageKey, String(manualReduction));
  } catch {
    // The current visit still honors the choice when storage is unavailable.
  }
  listeners.forEach((listener) => listener());
}
