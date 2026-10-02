"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Elemento de assinatura da Trajetória: uma linha vertical que se "desenha"
 * conforme a pessoa rola a página, ligando os marcos da linha do tempo.
 */
export default function ThreadLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div ref={ref} className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
      <svg width="2" height="100%" className="h-full overflow-visible text-ochre/50" aria-hidden="true">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="currentColor"
          strokeWidth="2"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
