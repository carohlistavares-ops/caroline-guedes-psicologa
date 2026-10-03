# AGENTS.md — Guia para agentes de IA (Opencode) neste projeto

Este arquivo é lido automaticamente por agentes de IA (Opencode e similares)
ao abrir este repositório. Ele documenta os padrões já usados no projeto
para que qualquer alteração futura continue consistente com o resto do
código — sem precisar reexplicar isso a cada conversa.

## Visão geral do projeto

Site institucional de Caroline Guedes (psicóloga clínica, CRP 13/12977).
Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Site
estático, sem back-end: o contato é feito por botões de WhatsApp com
mensagem pronta (`lib/whatsapp.ts`).

## Padrão 1 — Conteúdo de texto centralizado em `lib/content.ts`

**Nunca** escreva texto (títulos, parágrafos, labels) direto dentro de um
componente `.tsx`. Todo o texto visível do site vive em objetos exportados
de `lib/content.ts` (ex: `hero`, `sobreMim`, `trajetoria`, `curso`,
`agendamento`, `redesSociais`, `site`). Os componentes apenas importam e
renderizam esses objetos.

- Ao criar uma nova seção, adicione um novo objeto exportado em
  `lib/content.ts` primeiro, depois construa o componente que o consome.
- Ao editar um texto existente, edite em `lib/content.ts` — não no `.tsx`.

## Padrão 2 — Marcadores `// TODO:` para dados reais pendentes

Campos que dependem de informação ou arquivo real da cliente ficam
marcados com `// TODO: ...` em `lib/content.ts` (valor de exemplo +
comentário explicando o que trocar antes de publicar). Hoje não há
pendências; use o mesmo padrão ao adicionar um novo campo desse tipo.

## Padrão 2.1 — Vídeos

Vídeos ficam em `public/midias/<secao>/`, servidos pela própria Vercel
(sem YouTube/Vimeo, para não ter logos). Antes de adicionar, converter
para MP4 H.264 + AAC, 720p, `-movflags +faststart` e até ~8 MB (vídeo de
celular costuma vir em HEVC, que o Chrome/Firefox no Windows não tocam).
Para vídeo com fala, usar `components/VideoApresentacao.tsx` com uma capa
JPG extraída do próprio vídeo.

## Padrão 3 — Pasta de mídia por seção em `public/midias/`

Imagens ficam em `public/midias/<secao>/`, nunca soltas na raiz de
`public/`. Subpastas já existentes: `hero`, `sobre`, `trajetoria`,
`curso`, `agendamento`, `compartilhamento`, `redes`, `geral`. Se uma nova seção do site precisar de imagem,
crie uma nova subpasta com o nome da seção em vez de reaproveitar
`geral`. Sempre usar o componente `next/image` (`import Image from
"next/image"`) para renderizar essas imagens, nunca `<img>` puro.

## Padrão 4 — Um componente por seção, montados em `app/page.tsx`

Cada seção da home (`Hero`, `Sobre`, `Trajetoria`, `Curso`, `Agendamento`,
`RedesSociais`, `Footer`) é um componente próprio dentro de `components/`,
com o mesmo nome da seção. `app/page.tsx` apenas importa e lista esses
componentes em ordem — não deve conter lógica ou texto próprio. Toda
seção usa `id="..."` (kebab-case, em português: `#sobre`, `#trajetoria`,
`#curso`, `#agendar`, `#redes`) para permitir navegação por âncora a
partir do `Header`.

## Padrão 5 — Identidade visual (tokens em `lib/cores.ts` + `tailwind.config.ts`)

Não usar cores ou fontes soltas (hex direto no JSX). Sempre usar as
classes de tema já definidas:

- Cores: `ink`, `paper`, `card`, `brand` (+ `brand-light`/`brand-dark`),
  `wine` (+ `wine-light`/`wine-dark`), `ochre`.
- Fontes: `font-display` (Cormorant Garamond, títulos, sempre em
  `font-semibold`) e `font-body` (Nunito Sans, texto corrido, rótulos e
  dados como o CRP). Não há fonte monoespaçada: rótulos usam a Nunito em
  maiúsculas com `tracking`, e números usam `tabular-nums`.
- Utilitário `.container-content` para o max-width padrão das seções, e
  `.eyebrow` para rótulos pequenos em maiúsculas (hoje só na linha de
  contatos). Não colocar rótulos acima dos títulos: o título fala por si.

As cores são definidas uma única vez em `lib/cores.ts` (o Tailwind importa
de lá). Se for necessário um novo tom, adicione-o em `lib/cores.ts` com um
nome semântico (nunca `#hex` direto no componente). Arquivos que não passam
pelo Tailwind (ícone, imagem de compartilhamento) importam `cores` direto.
Em SVG, prefira `stroke="currentColor"` + uma classe de cor.

## Padrão 6 — Formulários (se voltarem a existir)

Hoje o site não tem formulário: o antigo formulário de agendamento (com
envio de e-mail via SMTP) foi removido em favor dos botões de WhatsApp e
pode ser recuperado no histórico do git (commit `0163208`). Se um novo
formulário for criado, siga o modelo daquele:

1. Componente client (`"use client"`) com `useState` para status
   (`idle` / `loading` / `success` / `error`).
2. `fetch` para uma rota própria em `app/api/<nome>/route.ts`.
3. A rota valida o corpo com **zod** antes de processar e tem antispam
   (honeypot, tempo mínimo de envio e limite por IP).
4. Se variáveis de ambiente de terceiros (SMTP etc.) não estiverem
   configuradas, a rota degrada graciosamente (registra em log) em vez
   de quebrar.

## Padrão 7 — Idioma e tom

Todo texto do site, nomes de variáveis de conteúdo, comentários e nomes
de arquivos de componente relacionados ao domínio (não os técnicos) estão
em português do Brasil. Manter esse padrão em qualquer texto novo.

## Padrão 8 — SEO e ética na divulgação

- Metadados (title, description, Open Graph) vêm do objeto `seo` em
  `lib/content.ts`; `app/layout.tsx` só os consome. O `metadataBase` usa
  `site.url` (domínio oficial) para gerar o canonical.
- `app/robots.ts`, `app/sitemap.ts`, `app/icon.tsx` e `app/apple-icon.tsx`
  são gerados pelo Next (ícones com `runtime = "edge"`: o runtime Node do
  `@vercel/og` quebra no Windows com Next 14). A imagem de compartilhamento
  é um JPG estático em `public/midias/compartilhamento/` (`seo.imagem`). Ao criar uma nova
  página, adicione-a ao `sitemap.ts`.
- Dados estruturados (JSON-LD) ficam em `components/DadosEstruturados.tsx`.
- Termo de busca principal: **"valor social"** (psicóloga on-line com valor
  social). **Código de Ética do Psicólogo, art. 20:** nunca usar o
  preço como propaganda — nada de valores em reais, "barato", "promoção",
  descontos ou comparação de preço, nem no texto, nem nos metadados, nem
  no JSON-LD (sem `priceRange`).

## O que evitar

- Não criar `localStorage`/`sessionStorage` — não é necessário aqui.
- Não adicionar bibliotecas de UI pesadas (Material UI, Chakra etc.) —
  o projeto usa Tailwind puro de propósito.
- Não misturar texto e lógica de apresentação no mesmo componente sem
  necessidade — mantenha a separação conteúdo (`lib/content.ts`) vs.
  estrutura (`components/*.tsx`).
