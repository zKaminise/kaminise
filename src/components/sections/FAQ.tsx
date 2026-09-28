import { faqs } from "@/data/site";
import { ScrollTrigger } from "@/lib/motion";
export default function FAQ() {
  return (
    <section className="faq section-pad" aria-labelledby="faq-title">
      <div>
        <p className="eyebrow section-kicker">05 / ANTES DE COMEÇAR</p>
        <h2 id="faq-title">
          Boas perguntas.
          <br />
          <span className="serif">Respostas claras.</span>
        </h2>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <details key={question} onToggle={() => ScrollTrigger.refresh()}>
            <summary>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{question}</h3>
              <span className="expand-sign" aria-hidden="true">
                ＋
              </span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
