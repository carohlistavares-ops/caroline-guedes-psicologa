import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="container-content flex flex-col gap-4 text-sm text-ink/55">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p>
            © {new Date().getFullYear()} {site.nome} · {site.titulo} · {site.crp}
          </p>
          <p>Atendimento ético, acolhedor e baseado em evidências científicas.</p>
        </div>
        <p className="border-t border-ink/10 pt-4 flex items-center gap-1">
          {site.desenvolvidoPor.texto}{" "}
          <a
            href={site.desenvolvidoPor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/75 hover:text-brand transition-colors"
          >
            {site.desenvolvidoPor.autor}
          </a>
        </p>
      </div>
    </footer>
  );
}
