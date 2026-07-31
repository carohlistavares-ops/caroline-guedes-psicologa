# Site — Caroline Guedes, Psicóloga Clínica

Site institucional completo (front-end + back-end) para Caroline Guedes,
psicóloga clínica (CRP 13/12977). Feito em **Next.js 14 + TypeScript +
Tailwind CSS**, com uma rota de API própria para o formulário de agendamento.

## O que tem aqui

- **Sobre mim** — apresentação profissional e abordagem (TCC)
- **Trajetória** — linha do tempo com a história profissional
- **Curso Mulher Livre** — seção de apresentação com link para a plataforma de venda
- **Agende sua consulta** — formulário que envia por e-mail (rota `/api/agendar`) + botão direto de WhatsApp
- **Redes sociais** — cards para Instagram, WhatsApp e LinkedIn
- Pasta **`/public/midias`** pronta para receber as imagens, já separada em subpastas:
  - `midias/hero` — foto de perfil / imagem principal
  - `midias/sobre` — fotos do consultório, atendimento etc.
  - `midias/trajetoria` — fotos de palestras, certificados etc.
  - `midias/curso` — capa/arte do curso Mulher Livre
  - `midias/redes` — ícones ou imagens para redes sociais
  - `midias/geral` — qualquer outra imagem

## Trabalhando com o Opencode

Este projeto tem um arquivo **`AGENTS.md`** na raiz com os padrões de
código já adotados (onde fica o texto, como nomear pastas de imagem,
como criar um novo formulário etc.). O Opencode lê esse arquivo
automaticamente ao abrir a pasta, então qualquer pedido de alteração
("adicione uma seção de depoimentos", "crie um novo formulário de
contato") vai seguir o mesmo padrão do resto do site sem precisar
reexplicar isso na conversa.

## Como rodar no VS Code (com o Opencode)

1. Abra esta pasta no VS Code.
2. No terminal integrado, instale as dependências:
   ```bash
   npm install
   ```
3. (Opcional, mas recomendado) Configure o envio de e-mail do formulário:
   ```bash
   cp .env.example .env.local
   ```
   e preencha `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` e `DESTINO_EMAIL` com os
   dados do e-mail que vai receber os pedidos de consulta. Sem isso, o
   formulário continua funcionando, só que o pedido fica registrado apenas
   no log do servidor (bom para testar).
4. Rode o site em modo desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse **http://localhost:3000** no navegador.

## O que editar antes de publicar

Praticamente todo o texto do site está centralizado em **`lib/content.ts`**
— não precisa mexer nos componentes para trocar uma frase. Nesse arquivo,
procure por `TODO` para encontrar os pontos que precisam da informação real
da Caroline:

- `site.whatsapp` — número de WhatsApp (formato `55DDDNUMERO`, só números)
- `site.email` — e-mail de contato
- `redesSociais` — links reais do Instagram e LinkedIn
- `curso.linkExterno` — link real da plataforma de venda do curso (Hotmart, Eduzz etc.)

## Adicionando as imagens

Basta colocar os arquivos dentro da subpasta correspondente em
`public/midias/...` e trocar os blocos marcados com comentários
`{/* Coloque a imagem aqui */}` dentro de `components/Hero.tsx` e
`components/Curso.tsx` por um componente `<Image />` do Next.js, por exemplo:

```tsx
import Image from "next/image";

<Image
  src="/midias/hero/caroline.jpg"
  alt="Caroline Guedes, psicóloga clínica"
  fill
  className="object-cover"
/>
```

## Publicando o site

O jeito mais simples é publicar na **Vercel** (criadora do Next.js):

1. Suba este projeto para um repositório no GitHub.
2. Crie uma conta em vercel.com e importe o repositório.
3. Adicione as mesmas variáveis de ambiente do `.env.local` no painel da Vercel.
4. Pronto — a Vercel gera a URL pública automaticamente a cada atualização.

## Estrutura do projeto

```
app/
  layout.tsx        → fontes, metadata (SEO)
  page.tsx           → monta as seções da home
  api/agendar/        → rota de back-end do formulário de consulta
  globals.css         → estilos globais e tokens de design
components/           → cada seção do site é um componente
lib/content.ts         → TODO o texto do site, centralizado
public/midias/          → pasta de imagens (subdividida por seção)
```
