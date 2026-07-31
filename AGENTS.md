# AGENTS.md — Guia para agentes de IA (Opencode) neste projeto

Este arquivo é lido automaticamente por agentes de IA (Opencode e similares)
ao abrir este repositório. Ele documenta os padrões já usados no projeto
para que qualquer alteração futura continue consistente com o resto do
código — sem precisar reexplicar isso a cada conversa.

## Visão geral do projeto

Site institucional de Caroline Guedes (psicóloga clínica, CRP 13/12977).
Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, com uma
rota de API própria (`app/api/agendar/route.ts`) como back-end do
formulário de agendamento.

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

Campos que dependem de informação real da cliente (número de WhatsApp,
e-mail, links de redes sociais, link de venda do curso) estão marcados
com comentários `// TODO: ...` em `lib/content.ts`. Ao adicionar um novo
campo desse tipo (ex: um novo link externo, um novo contato), siga o
mesmo padrão: valor de exemplo + comentário `// TODO:` explicando o que
precisa ser trocado antes de publicar.

## Padrão 3 — Pasta de mídia por seção em `public/midias/`

Imagens ficam em `public/midias/<secao>/`, nunca soltas na raiz de
`public/`. Subpastas já existentes: `hero`, `sobre`, `trajetoria`,
`curso`, `redes`, `geral`. Se uma nova seção do site precisar de imagem,
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

## Padrão 5 — Identidade visual (tokens em `tailwind.config.ts`)

Não usar cores ou fontes soltas (hex direto no JSX). Sempre usar as
classes de tema já definidas:

- Cores: `ink`, `paper`, `card`, `brand` (+ `brand-light`/`brand-dark`),
  `wine` (+ `wine-light`/`wine-dark`), `ochre`.
- Fontes: `font-display` (Fraunces, títulos), `font-body` (Work Sans,
  texto corrido), `font-mono` (IBM Plex Mono, labels/dados como o CRP).
- Utilitário `.container-content` para o max-width padrão das seções, e
  `.eyebrow` para os pequenos rótulos acima dos títulos.

Se for necessário um novo tom de cor, adicione-o ao `tailwind.config.ts`
com um nome semântico (nunca `#hex` direto no componente).

## Padrão 6 — Formulários client-side chamando rotas de API própria

O padrão do formulário de agendamento (`components/Agendamento.tsx` +
`app/api/agendar/route.ts`) é o modelo para qualquer novo formulário:

1. Componente client (`"use client"`) com `useState` para status
   (`idle` / `loading` / `success` / `error`).
2. `fetch` para uma rota própria em `app/api/<nome>/route.ts`.
3. A rota de API valida o corpo da requisição com **zod** antes de
   processar (nunca confiar em dados do client sem validar).
4. Se variáveis de ambiente de terceiros (SMTP, etc.) não estiverem
   configuradas, a rota deve degradar graciosamente (registrar em log)
   em vez de quebrar — assim o site funciona em desenvolvimento antes de
   qualquer configuração externa ser feita.

## Padrão 7 — Idioma e tom

Todo texto do site, nomes de variáveis de conteúdo, comentários e nomes
de arquivos de componente relacionados ao domínio (não os técnicos) estão
em português do Brasil. Manter esse padrão em qualquer texto novo.

## O que evitar

- Não criar `localStorage`/`sessionStorage` — não é necessário aqui.
- Não adicionar bibliotecas de UI pesadas (Material UI, Chakra etc.) —
  o projeto usa Tailwind puro de propósito.
- Não misturar texto e lógica de apresentação no mesmo componente sem
  necessidade — mantenha a separação conteúdo (`lib/content.ts`) vs.
  estrutura (`components/*.tsx`).
