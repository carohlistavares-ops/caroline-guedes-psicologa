"use client";

import { FormEvent, useState } from "react";
import { agendamento, site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export default function Agendamento() {
  const [status, setStatus] = useState<Status>("idle");
  const [erro, setErro] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErro(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível enviar. Tente novamente.");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErro(err instanceof Error ? err.message : "Erro inesperado.");
    }
  }

  return (
    <section id="agendar" className="container-content py-20 border-t border-ink/10">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-14">
        <div>
          <p className="eyebrow mb-3">Dê o primeiro passo</p>
          <h2 className="text-3xl md:text-4xl mb-4">{agendamento.titulo}</h2>
          <p className="text-ink/75 max-w-sm mb-8">{agendamento.subtitulo}</p>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-brand text-brand px-5 py-3 text-sm font-medium hover:bg-brand hover:text-card transition-colors"
          >
            Falar direto no WhatsApp ↗
          </a>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-ink/10 rounded-lg p-6 md:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Campo label="Nome" name="nome" required autoComplete="name" />
            <Campo label="Telefone / WhatsApp" name="telefone" required autoComplete="tel" />
          </div>

          <Campo label="E-mail" name="email" type="email" required autoComplete="email" />

          <div>
            <label className="block text-sm text-ink/70 mb-1.5" htmlFor="modalidade">
              Modalidade
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

          <div>
            <label className="block text-sm text-ink/70 mb-1.5" htmlFor="mensagem">
              Como posso te ajudar?
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              className="w-full rounded-sm border border-ink/20 bg-paper px-3 py-2.5 text-sm focus:border-brand outline-none resize-none"
              placeholder="Conte brevemente o que te trouxe até aqui (opcional)."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-sm bg-wine text-card px-6 py-3.5 text-sm font-medium hover:bg-wine-dark transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar pedido de consulta"}
          </button>

          {status === "success" && (
            <p role="status" className="text-sm text-brand">
              Recebido! Caroline vai te responder em até 1 dia útil.
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
