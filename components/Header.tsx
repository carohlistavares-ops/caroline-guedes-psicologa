import { navegacao, site } from "@/lib/content";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <header className="relative border-b border-ink/10 bg-paper">
      <div className="container-content flex items-center justify-between gap-3 py-4">
        <a href="#top" className="font-display text-lg text-ink">
          {site.nome}
          <span className="hidden sm:inline text-brand font-body text-sm ml-2">
            · {site.titulo}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-ink/80">
          {navegacao.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-wine transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#agendar"
            className="whitespace-nowrap rounded-sm bg-wine text-card px-4 py-2 text-sm font-medium hover:bg-wine-dark transition-colors"
          >
            <span className="sm:hidden">{navegacao.ctaCurto}</span>
            <span className="hidden sm:inline">{navegacao.cta}</span>
          </a>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
