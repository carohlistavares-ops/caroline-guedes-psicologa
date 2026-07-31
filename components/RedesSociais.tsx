import { redesSociais } from "@/lib/content";

export default function RedesSociais() {
  return (
    <section id="redes" className="container-content py-20 border-t border-ink/10">
      <p className="eyebrow mb-3">Vamos continuar em contato</p>
      <h2 className="text-3xl md:text-4xl mb-10">Redes sociais</h2>

      <div className="grid sm:grid-cols-3 gap-5">
        {redesSociais.map((r) => (
          <a
            key={r.nome}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-ink/10 bg-card p-6 hover:border-brand transition-colors"
          >
            <span className="block font-display text-xl mb-1 group-hover:text-brand transition-colors">
              {r.nome}
            </span>
            <span className="block text-sm text-ink/60">{r.usuario}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
