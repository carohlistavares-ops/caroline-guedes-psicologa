"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Elemento de assinatura do site: um fio orgânico que começa emaranhado
 * (representando o apego / sofrimento) e se desenreda em uma linha limpa
 * (representando a autonomia). É reaproveitado na Hero e na Trajetória,
 * ligando visualmente a jornada terapêutica ao conteúdo real do site.
 */
export default function ThreadLine({ variant = "hero" }: { variant?: "hero" | "trajetoria" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  if (variant === "hero") {
    return (
      <svg
        viewBox="0 0 420 420"
        className="w-full h-full"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M40 60 C120 20, 160 100, 100 150 C40 200, 90 260, 160 240 C240 216, 220 140, 300 150 C370 158, 380 260, 320 320 C270 370, 200 380, 140 360"
          stroke="#8B3448"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.circle
          cx="140"
          cy="360"
          r="5"
          fill="#C79A56"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.3, duration: 0.4 }}
        />
      </svg>
    );
  }

  return (
    <div ref={ref} className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
      <svg width="2" height="100%" className="h-full overflow-visible" aria-hidden="true">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="#3C5647"
          strokeWidth="2"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
