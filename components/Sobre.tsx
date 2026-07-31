import { sobreMim } from "@/lib/content";

export default function Sobre() {
  return (
    <section id="sobre" className="container-content py-20 border-t border-ink/10">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <p className="eyebrow mb-3">Quem cuida de você</p>
          <h2 className="text-3xl md:text-4xl mb-6">{sobreMim.titulo}</h2>

          <dl className="space-y-5">
            {sobreMim.destaques.map((d) => (
              <div key={d.rotulo} className="border-l-2 border-brand/40 pl-4">
                <dt className="font-mono text-[11px] uppercase tracking-wide text-ink/50">
                  {d.rotulo}
                </dt>
                <dd className="text-ink/85">{d.valor}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5 text-ink/80 leading-relaxed">
          {sobreMim.paragrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
