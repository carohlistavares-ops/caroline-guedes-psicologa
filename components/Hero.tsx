import Image from "next/image";
import { hero, site } from "@/lib/content";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section id="top" className="container-content pt-14 md:pt-20 pb-20 grid md:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
      <div>
        <h1 className="text-[2.6rem] md:text-[3.6rem] leading-[1.04] mb-6">
          {hero.titulo}
        </h1>
        <p className="text-lg text-ink/75 max-w-lg mb-8">{hero.subtitulo}</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#agendar"
            className="rounded-sm bg-brand text-card px-6 py-3.5 text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            {hero.cta}
          </a>
          <span className="text-xs font-semibold tracking-[0.08em] tabular-nums text-ink/70">{site.crp}</span>
        </div>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/5] rounded-lg bg-card border border-ink/10 overflow-hidden">
          {/* Foto: poster/fallback do vídeo e imagem principal para SEO/LCP. */}
          <Image
            src={hero.midia.poster}
            alt={hero.midia.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
            priority
          />
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
