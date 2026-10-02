"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { videoPlayer } from "@/lib/content";

/**
 * Vídeo com fala (hero e curso), sem player de terceiros (sem logos).
 *
 * - "previa": toca sem som, em loop, só enquanto está visível na tela.
 * - "som": a pessoa clicou em "ouvir" → recomeça do início, com som e com
 *   os controles nativos do navegador. Ao terminar, volta para a prévia.
 * - "parado": quem prefere movimento reduzido vê só a capa até clicar.
 *
 * A capa (next/image) fica por baixo: é o que aparece enquanto o vídeo
 * carrega, se ele falhar, e é a imagem principal para o Google (LCP).
 * Só um vídeo do site toca com som por vez.
 */
type Modo = "previa" | "som" | "parado";

const EVENTO_SOM = "video-apresentacao:som";

type Props = {
  id: string;
  src: string;
  capa: string;
  alt: string;
  rotuloOuvir: string;
  sizes: string;
  prioridade?: boolean;
};

export default function VideoApresentacao({ id, src, capa, alt, rotuloOuvir, sizes, prioridade = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [modo, setModo] = useState<Modo>("parado");
  const [movimentoReduzido, setMovimentoReduzido] = useState(true);
  const [tocando, setTocando] = useState(false);
  const [previaPausada, setPreviaPausada] = useState(false);
  const [falhou, setFalhou] = useState(false);

  // Decide se mostra a prévia em movimento (depende do aparelho da pessoa).
  useEffect(() => {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMovimentoReduzido(reduzir);
    if (ref.current) ref.current.muted = true;
    if (!reduzir) setModo("previa");
  }, []);

  // Prévia só toca enquanto o vídeo está na tela (economiza dados e CPU).
  useEffect(() => {
    const video = ref.current;
    if (!video || modo !== "previa" || previaPausada) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observador.observe(video);
    return () => observador.disconnect();
  }, [modo, previaPausada]);

  // Se outro vídeo começar a tocar com som, este volta para a prévia.
  useEffect(() => {
    function outroComSom(e: Event) {
      if ((e as CustomEvent<string>).detail !== id && modo === "som") voltarParaPrevia();
    }
    window.addEventListener(EVENTO_SOM, outroComSom);
    return () => window.removeEventListener(EVENTO_SOM, outroComSom);
  });

  function ouvir() {
    const video = ref.current;
    if (!video) return;
    video.muted = false;
    video.loop = false;
    video.currentTime = 0;
    setModo("som");
    window.dispatchEvent(new CustomEvent(EVENTO_SOM, { detail: id }));
    video.play().catch(() => {});
  }

  function voltarParaPrevia() {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;
    setPreviaPausada(false);
    if (movimentoReduzido) {
      video.pause();
      setModo("parado");
    } else {
      setModo("previa");
    }
  }

  function alternarPrevia() {
    const video = ref.current;
    if (!video) return;
    if (previaPausada) {
      setPreviaPausada(false);
    } else {
      video.pause();
      setPreviaPausada(true);
    }
  }

  const videoVisivel = !falhou && (tocando || modo === "som");

  return (
    <div className="relative h-full w-full">
      <Image
        src={capa}
        alt={alt}
        fill
        sizes={sizes}
        priority={prioridade}
        className="object-cover object-[50%_30%]"
      />

      {!falhou && (
        <video
          ref={ref}
          className={`absolute inset-0 h-full w-full object-cover object-[50%_30%] transition-opacity duration-500 ${
            videoVisivel ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          preload={modo === "parado" ? "none" : "metadata"}
          poster={capa}
          controls={modo === "som"}
          controlsList="nodownload noplaybackrate"
          aria-label={alt}
          onPlaying={() => setTocando(true)}
          onEnded={voltarParaPrevia}
          onError={() => setFalhou(true)}
        >
          <source src={src} type="video/mp4" onError={() => setFalhou(true)} />
        </video>
      )}

      {!falhou && modo !== "som" && (
        <>
          <button
            type="button"
            onClick={ouvir}
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2.5 text-sm font-semibold text-ink shadow-[0_4px_16px_-4px_rgba(43,33,36,0.35)] backdrop-blur-sm transition-colors hover:bg-card"
          >
            <IconeSom />
            {rotuloOuvir}
          </button>

          {modo === "previa" && (
            <button
              type="button"
              onClick={alternarPrevia}
              aria-label={previaPausada ? videoPlayer.reproduzir : videoPlayer.pausar}
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/55 text-card backdrop-blur-sm transition-colors hover:bg-ink/75"
            >
              {previaPausada ? <IconePlay /> : <IconePausa />}
            </button>
          )}
        </>
      )}
    </div>
  );
}

function IconeSom() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z" fill="currentColor" stroke="none" />
      <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>
  );
}

function IconePausa() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <rect x="3" y="2" width="3.5" height="12" rx="1" />
      <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
    </svg>
  );
}

function IconePlay() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M4 2.5v11a.5.5 0 0 0 .77.42l8.5-5.5a.5.5 0 0 0 0-.84l-8.5-5.5A.5.5 0 0 0 4 2.5Z" />
    </svg>
  );
}
