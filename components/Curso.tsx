import Image from "next/image";
import { curso } from "@/lib/content";

export default function Curso() {
  return (
    <section id="curso" className="container-content py-20 border-t border-ink/10">
      <div className="rounded-lg bg-card border border-ink/10 p-8 md:p-14 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl mb-3">{curso.titulo}</h2>
          <p className="font-display italic font-medium text-brand text-xl mb-5">
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
            src={curso.imagem}
            alt={curso.imagemAlt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
