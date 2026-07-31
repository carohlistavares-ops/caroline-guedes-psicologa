import { trajetoria } from "@/lib/content";
import ThreadLine from "./ThreadLine";

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="bg-brand-dark text-paper py-20">
      <div className="container-content">
        <p className="eyebrow text-ochre mb-3">O caminho até aqui</p>
        <h2 className="text-3xl md:text-4xl mb-4 text-paper">{trajetoria.titulo}</h2>
        <p className="text-paper/70 max-w-2xl mb-14">{trajetoria.intro}</p>

        <div className="relative pl-12 md:pl-0">
          <ThreadLine variant="trajetoria" />

          <ol className="space-y-14">
            {trajetoria.linha.map((item, i) => (
              <li
                key={item.titulo}
                className="relative md:grid md:grid-cols-2 md:gap-16"
              >
                <span
                  className="absolute -left-[34px] md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-ochre"
                  aria-hidden="true"
                />
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <span className="font-mono text-xs text-ochre">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl mt-1 mb-2 text-paper">{item.titulo}</h3>
                  <p className="text-paper/70 leading-relaxed">{item.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-16 max-w-2xl text-paper/85 border-t border-paper/15 pt-8">
          {trajetoria.fechamento}
        </p>
      </div>
    </section>
  );
}
