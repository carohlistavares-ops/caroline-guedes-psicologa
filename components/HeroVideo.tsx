"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/content";

/**
 * Vídeo do hero, sobreposto à foto (que é renderizada pelo Hero com
 * next/image e funciona como poster/fallback). O vídeo só é montado se a
 * pessoa não preferir movimento reduzido, e só aparece (fade-in) quando já
 * consegue tocar — se o arquivo não existir ou falhar, a foto continua visível.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [montar, setMontar] = useState(false);
  const [pronto, setPronto] = useState(false);
  const [tocando, setTocando] = useState(true);

  useEffect(() => {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMontar(!reduzir.matches);
  }, []);

  function alternar() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setTocando(true);
    } else {
      video.pause();
      setTocando(false);
    }
  }

  if (!montar) return null;

  return (
    <>
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          pronto ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setPronto(true)}
      >
        <source src={hero.midia.videoWebm} type="video/webm" />
        {/* Com <source>, falhas disparam "error" no último source, não no <video>. */}
        <source src={hero.midia.videoMp4} type="video/mp4" onError={() => setMontar(false)} />
      </video>

      {pronto && (
        <button
          type="button"
          onClick={alternar}
          aria-label={tocando ? hero.midia.pausar : hero.midia.reproduzir}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-card backdrop-blur-sm hover:bg-ink/80 transition-colors"
        >
          {tocando ? (
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <rect x="3" y="2" width="3.5" height="12" rx="1" />
              <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M4 2.5v11a.5.5 0 0 0 .77.42l8.5-5.5a.5.5 0 0 0 0-.84l-8.5-5.5A.5.5 0 0 0 4 2.5Z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
