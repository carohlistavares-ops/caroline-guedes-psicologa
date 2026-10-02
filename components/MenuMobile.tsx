"use client";

import { useRef } from "react";
import { navegacao } from "@/lib/content";

/**
 * Menu do celular. Usa <details> (abre e fecha mesmo sem JavaScript) e,
 * com JavaScript, fecha sozinho ao escolher uma seção.
 */
export default function MenuMobile() {
  const ref = useRef<HTMLDetailsElement>(null);

  return (
    <details ref={ref} className="group md:hidden">
      <summary
        className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-sm border border-ink/20 text-ink [&::-webkit-details-marker]:hidden"
        aria-label={navegacao.abrirMenu}
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" className="group-open:hidden" />
          <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" className="hidden group-open:block" />
        </svg>
      </summary>
      <nav className="absolute inset-x-0 top-full z-20 border-b border-ink/10 bg-paper shadow-sm">
        <ul className="container-content flex flex-col py-2 font-body text-ink/85">
          {navegacao.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => ref.current?.removeAttribute("open")}
                className="block py-3 hover:text-wine transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
