import { sobreMim } from "@/lib/content";

export default function Sobre() {
  return (
    <section id="sobre" className="container-content py-20 border-t border-ink/10">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl mb-6">{sobreMim.titulo}</h2>

          <dl className="space-y-5">
            {sobreMim.destaques.map((d) => (
              <div key={d.rotulo} className="border-l-2 border-brand/40 pl-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
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
