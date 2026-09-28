import type { ComponentProps } from "react";
import { contact } from "@/data/site";

export function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "↘"}
    </span>
  );
}
export function ContactLink({
  children = "Vamos conversar",
  className = "",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="GO"
      className={`contact-link ${className}`}
      {...props}
    >
      {children}
      <Arrow />
    </a>
  );
}
