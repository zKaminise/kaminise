import { useEffect } from "react";
import BrandLogo from "@/components/layout/BrandLogo";
export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Página não encontrada — Gabriel Misao";
    return () => {
      document.title = previous;
    };
  }, []);
  return (
    <main className="not-found">
      <BrandLogo loading="eager" />
      <p className="eyebrow">PÁGINA NÃO ENCONTRADA / 404</p>
      <h1>
        Fora do
        <br />
        <span className="serif">caminho.</span>
      </h1>
      <p>Esta página não existe. Os projetos estão logo ali.</p>
      <a href="/" className="contact-link">
        Voltar ao início ↗
      </a>
    </main>
  );
}
