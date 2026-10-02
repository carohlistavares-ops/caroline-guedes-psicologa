import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { site } from "@/lib/content";

// Validação dos dados recebidos do formulário de agendamento.
const AgendamentoSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo.").max(120),
  telefone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um telefone válido com DDD."),
  email: z.string().trim().email("Informe um e-mail válido.").max(200),
  modalidade: z.enum(["On-line"]),
  mensagem: z.string().trim().max(2000).optional(),
  valorSocial: z.boolean().default(false),
  // Antispam: campo invisível que pessoas reais deixam vazio (honeypot)...
  empresa: z.string().optional(),
  // ...e o instante (ms) em que o formulário foi exibido.
  iniciadoEm: z.coerce.number({ invalid_type_error: "Recarregue a página e tente novamente." })
});

// Antispam: tempo mínimo de preenchimento e limite de envios por IP.
// O limite fica em memória: em hospedagem serverless (Vercel) ele vale por
// instância, então é uma proteção de "melhor esforço" contra rajadas.
const TEMPO_MINIMO_MS = 3_000;
const JANELA_MS = 10 * 60 * 1000;
const MAX_ENVIOS_POR_JANELA = 5;
const enviosPorIp = new Map<string, number[]>();

function excedeuLimite(ip: string) {
  const agora = Date.now();
  const recentes = (enviosPorIp.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  recentes.push(agora);
  enviosPorIp.set(ip, recentes);

  // Evita que o mapa cresça sem limite.
  if (enviosPorIp.size > 5_000) {
    enviosPorIp.forEach((tempos, chave) => {
      if (tempos.every((t) => agora - t >= JANELA_MS)) enviosPorIp.delete(chave);
    });
  }

  return recentes.length > MAX_ENVIOS_POR_JANELA;
}

function obterIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "desconhecido"
  );
}

export async function POST(req: NextRequest) {
  if (excedeuLimite(obterIp(req))) {
    return NextResponse.json(
      { error: "Muitas tentativas seguidas. Aguarde alguns minutos ou fale pelo WhatsApp." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const parsed = AgendamentoSchema.safeParse(body);
  if (!parsed.success) {
    const primeiraMensagem = parsed.error.issues[0]?.message ?? "Dados inválidos.";
    return NextResponse.json({ error: primeiraMensagem }, { status: 400 });
  }

  const { nome, telefone, email, modalidade, mensagem, valorSocial, empresa, iniciadoEm } = parsed.data;

  // Robôs costumam preencher o honeypot ou enviar instantaneamente. Respondemos
  // "ok" sem enviar nada, para não dar pistas de que foram detectados.
  if (empresa || Date.now() - iniciadoEm < TEMPO_MINIMO_MS) {
    console.warn("[agendar] Envio descartado pelo antispam.");
    return NextResponse.json({ ok: true });
  }

  // Se as variáveis de e-mail (.env) não estiverem configuradas, apenas
  // registramos a solicitação no log do servidor — assim o formulário
  // funciona em desenvolvimento mesmo antes de configurar o SMTP.
  const smtpConfigurado =
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.DESTINO_EMAIL;

  if (!smtpConfigurado) {
    console.log("[agendar] Novo pedido de consulta (SMTP não configurado):", {
      nome,
      telefone,
      email,
      modalidade,
      valorSocial,
      mensagem
    });
    return NextResponse.json({ ok: true, aviso: "SMTP não configurado — solicitação apenas registrada no log." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      // Remetente fixo: dados do paciente vão só no replyTo e no corpo, nunca
      // no cabeçalho "From" (evita cabeçalhos malformados por aspas/<>).
      from: { name: `Site ${site.nome}`, address: (process.env.SMTP_FROM ?? process.env.SMTP_USER)! },
      to: process.env.DESTINO_EMAIL,
      replyTo: email,
      subject: `Novo pedido de consulta${valorSocial ? " (valor social)" : ""} — ${nome}`,
      text: [
        `Nome: ${nome}`,
        `Telefone: ${telefone}`,
        `E-mail: ${email}`,
        `Modalidade: ${modalidade}`,
        `Interesse em valor social: ${valorSocial ? "Sim" : "Não"}`,
        `Mensagem: ${mensagem || "(não informada)"}`
      ].join("\n")
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[agendar] Erro ao enviar e-mail:", err);
    return NextResponse.json(
      { error: "Não foi possível enviar sua solicitação agora. Tente novamente em instantes." },
      { status: 500 }
    );
  }
}
