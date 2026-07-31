import Image from "next/image";
import { hero, site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="container-content pt-14 md:pt-20 pb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="eyebrow mb-4">{hero.eyebrow}</p>
        <h1 className="text-4xl md:text-5xl leading-[1.08] mb-6">
          {hero.titulo}
        </h1>
        <p className="text-lg text-ink/75 max-w-md mb-8">{hero.subtitulo}</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#agendar"
            className="rounded-sm bg-wine text-card px-6 py-3.5 text-sm font-medium hover:bg-wine-dark transition-colors"
          >
            {hero.cta}
          </a>
          <span className="font-mono text-xs text-ink/60">{site.crp}</span>
        </div>

        <p className="mt-6 text-sm text-ink/60">{site.cidade}</p>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/5] rounded-lg bg-card border border-ink/10 overflow-hidden">
          <Image
            src="/midias/hero/photo_2026-07-30_21-51-12.jpg"
            alt="Caroline Guedes, psicóloga clínica"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
