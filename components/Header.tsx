import { site } from "@/lib/content";

const links = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#curso", label: "Curso" },
  { href: "#redes", label: "Redes sociais" }
];

export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-paper">
      <div className="container-content flex items-center justify-between py-4">
        <a href="#top" className="font-display text-lg text-ink">
          {site.nome}
          <span className="hidden sm:inline text-brand font-body text-sm ml-2">
            · {site.titulo}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-ink/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-wine transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#agendar"
          className="rounded-sm bg-wine text-card px-4 py-2 text-sm font-medium hover:bg-wine-dark transition-colors"
        >
          Agende sua consulta
        </a>
      </div>
    </header>
  );
}
