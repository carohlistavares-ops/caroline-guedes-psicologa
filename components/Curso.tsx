import Image from "next/image";
import { curso } from "@/lib/content";

export default function Curso() {
  return (
    <section id="curso" className="container-content py-20 border-t border-ink/10">
      <div className="rounded-lg bg-card border border-ink/10 p-8 md:p-14 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <p className="eyebrow mb-3">Formação para mulheres</p>
          <h2 className="text-3xl md:text-4xl mb-3">{curso.titulo}</h2>
          <p className="font-display italic text-brand text-lg mb-5">
            {curso.subtitulo}
          </p>
          <p className="text-ink/75 leading-relaxed mb-8 max-w-lg">{curso.texto}</p>

          <a
            href={curso.linkExterno}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-brand text-card px-6 py-3.5 text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            {curso.cta} →
          </a>
        </div>

        <div className="relative aspect-square rounded-md bg-paper border border-ink/10 overflow-hidden">
          <Image
            src="/midias/curso/photo_2026-07-30_21-51-34.jpg"
            alt="Curso Mulher Livre"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
