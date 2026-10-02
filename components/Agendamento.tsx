import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { agendamento } from "@/lib/content";
import { linkWhatsapp } from "@/lib/whatsapp";

// Banner de ponta a ponta. Se a imagem ainda não existir em /public, o
// banner usa só o tom escuro da marca (verificado no build, já que este
// é um componente de servidor).
const temImagem = existsSync(join(process.cwd(), "public", agendamento.banner));

export default function Agendamento() {
  return (
    <section id="agendar" className="relative overflow-hidden bg-brand-dark">
      {temImagem && (
        <Image
          src={agendamento.banner}
          alt={agendamento.bannerAlt}
          fill
          sizes="100vw"
          className="object-cover object-[70%_50%]"
        />
      )}

      <div className="relative container-content flex min-h-[560px] items-center py-16 md:py-24">
        <div className="w-full max-w-md rounded-lg bg-paper/95 p-8 shadow-sm backdrop-blur-sm md:p-10">
          <p className="eyebrow mb-3">{agendamento.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl mb-4">{agendamento.titulo}</h2>
          <p className="text-ink/75 mb-8">{agendamento.subtitulo}</p>

          <div className="flex flex-col items-start gap-3">
            <a
              href={linkWhatsapp(agendamento.whatsapp.valorSocial.mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-brand bg-brand text-card px-5 py-3 text-sm font-medium hover:bg-brand-dark hover:border-brand-dark transition-colors"
            >
              {agendamento.whatsapp.valorSocial.label} ↗
            </a>
            <a
              href={linkWhatsapp(agendamento.whatsapp.valorIntegral.mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-brand text-brand px-5 py-3 text-sm font-medium hover:bg-brand hover:text-card transition-colors"
            >
              {agendamento.whatsapp.valorIntegral.label} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
