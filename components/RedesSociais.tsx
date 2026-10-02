import { redesSociais } from "@/lib/content";

export default function RedesSociais() {
  return (
    <section id="redes" className="container-content py-12 border-t border-ink/10">
      <h2 className="sr-only">{redesSociais.titulo}</h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <p className="eyebrow">{redesSociais.eyebrow}</p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {redesSociais.links.map((r) => (
            <li key={r.nome}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${r.nome}: ${r.usuario}`}
                className="inline-flex items-center gap-2 text-ink/80 hover:text-wine transition-colors"
              >
                <IconeInstagram />
                <span>{r.usuario}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IconeInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
