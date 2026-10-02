"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { agendamento } from "@/lib/content";
import { linkWhatsapp } from "@/lib/whatsapp";

type Status = "idle" | "loading" | "success" | "error";

const { campos } = agendamento;

export default function Agendamento() {
  const [status, setStatus] = useState<Status>("idle");
  const [erro, setErro] = useState<string | null>(null);
  // Antispam: momento em que o formulário apareceu (validado na API).
  const iniciadoEm = useRef(0);

  useEffect(() => {
    iniciadoEm.current = Date.now();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErro(null);

    const form = e.currentTarget;
    const dados = new FormData(form);
    const payload = {
      ...Object.fromEntries(dados.entries()),
      valorSocial: dados.has("valorSocial"),
      iniciadoEm: iniciadoEm.current
    };

    try {
      const res = await fetch("/api/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? agendamento.erroPadrao);
      }

      setStatus("success");
      form.reset();
      iniciadoEm.current = Date.now();
    } catch (err) {
      setStatus("error");
      setErro(err instanceof Error ? err.message : agendamento.erroPadrao);
    }
  }

  return (
    <section id="agendar" className="container-content py-20 border-t border-ink/10">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-14">
        <div>
          <p className="eyebrow mb-3">{agendamento.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl mb-4">{agendamento.titulo}</h2>
          <p className="text-ink/75 max-w-sm mb-8">{agendamento.subtitulo}</p>

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

        <form onSubmit={handleSubmit} className="bg-card border border-ink/10 rounded-lg p-6 md:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Campo label={campos.nome} name="nome" required autoComplete="name" />
            <Campo label={campos.telefone} name="telefone" type="tel" required autoComplete="tel" />
          </div>

          <Campo label={campos.email} name="email" type="email" required autoComplete="email" />

          {/* Honeypot antispam: invisível para pessoas, robôs tendem a preencher. */}
          <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
            <input type="text" name="empresa" tabIndex={-1} autoComplete="off" />
          </div>

          {agendamento.modalidades.length > 1 ? (
            <div>
              <label className="block text-sm text-ink/70 mb-1.5" htmlFor="modalidade">
                {campos.modalidade}
              </label>
              <select
                id="modalidade"
                name="modalidade"
                required
                className="w-full rounded-sm border border-ink/20 bg-paper px-3 py-2.5 text-sm focus:border-brand outline-none"
              >
                {agendamento.modalidades.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <input type="hidden" name="modalidade" value={agendamento.modalidades[0]} />
          )}

          <label className="flex items-start gap-3 text-sm text-ink/80 cursor-pointer">
            <input
              type="checkbox"
              name="valorSocial"
              className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
            />
            {campos.valorSocial}
          </label>

          <div>
            <label className="block text-sm text-ink/70 mb-1.5" htmlFor="mensagem">
              {campos.mensagem}
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              maxLength={2000}
              className="w-full rounded-sm border border-ink/20 bg-paper px-3 py-2.5 text-sm focus:border-brand outline-none resize-none"
              placeholder={campos.mensagemPlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-sm bg-wine text-card px-6 py-3.5 text-sm font-medium hover:bg-wine-dark transition-colors disabled:opacity-60"
          >
            {status === "loading" ? agendamento.enviando : agendamento.enviar}
          </button>

          <p className="text-xs text-ink/55">{agendamento.privacidade}</p>

          {status === "success" && (
            <p role="status" className="text-sm text-brand">
              {agendamento.sucesso}
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-wine">
              {erro}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Campo({
  label,
  name,
  type = "text",
  required,
  autoComplete
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-ink/70 mb-1.5" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-sm border border-ink/20 bg-paper px-3 py-2.5 text-sm focus:border-brand outline-none"
      />
    </div>
  );
}
