import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Validação dos dados recebidos do formulário de agendamento.
const AgendamentoSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo."),
  telefone: z.string().trim().min(8, "Informe um telefone válido."),
  email: z.string().trim().email("Informe um e-mail válido."),
  modalidade: z.enum(["On-line"]),
  mensagem: z.string().trim().max(2000).optional()
});

export async function POST(req: NextRequest) {
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

  const { nome, telefone, email, modalidade, mensagem } = parsed.data;

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
      from: `"Novo pedido — ${nome} (${email})" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: process.env.DESTINO_EMAIL,
      replyTo: email,
      subject: `Novo pedido de consulta — ${nome}`,
      text: [
        `Nome: ${nome}`,
        `Telefone: ${telefone}`,
        `E-mail: ${email}`,
        `Modalidade: ${modalidade}`,
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
