# Site — Caroline Guedes, Psicóloga Clínica

Site institucional de Caroline Guedes, psicóloga clínica (CRP 13/12977),
publicado em **https://www.psicarolineguedes.com.br**. Feito em
**Next.js 14 + TypeScript + Tailwind CSS**, hospedado na Vercel.

## O que tem aqui

- **Hero** e **Curso** — vídeos com fala da Caroline (prévia sem som em
  loop + botão "ouvir" que recomeça com som; player nativo, sem logos)
- **Sobre mim** — abordagem (TCC), especializações e vagas de valor social
- **Trajetória** — linha do tempo da história profissional
- **Curso Mulher Livre** — apresentação com link para a página de venda
- **Agende sua consulta** — dois botões de WhatsApp com mensagem pronta
  (valor social / valor integral) + imagem da seção
- **Redes sociais** — Instagram e WhatsApp
- **SEO** — metadados, canonical, `robots.txt`, `sitemap.xml`, Open Graph,
  dados estruturados (JSON-LD), favicon e ícone para iPhone

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse **http://localhost:3000**. Não há variáveis de ambiente obrigatórias.

## Editando o site

- **Textos:** todos ficam em `lib/content.ts` — não é preciso mexer nos
  componentes para trocar uma frase. Procure por `TODO` para ver o que
  ainda depende de arquivo/informação da Caroline.
- **Imagens:** ficam em `public/midias/<secao>/`. Os caminhos usados pelo
  site estão em `lib/content.ts`.
- **Cores:** definidas uma única vez em `lib/cores.ts`.
- **Divulgação:** pelo Código de Ética do Psicólogo (art. 20), nunca usar
  preço como propaganda — nada de valores em reais, "barato" ou promoções.

Os padrões de código do projeto estão documentados em **`AGENTS.md`**
(lido automaticamente por agentes de IA como Opencode e Claude Code).

## Publicando

Todo push na branch `main` gera um deploy automático na Vercel.

## Estrutura do projeto

```
app/
  layout.tsx          → fontes, metadados (SEO) e dados estruturados
  page.tsx            → monta as seções da home, em ordem
  robots.ts, sitemap.ts, icon.tsx, apple-icon.tsx → gerados pelo Next
  globals.css         → estilos globais
components/           → um componente por seção do site
lib/content.ts        → TODO o texto do site, centralizado
lib/cores.ts          → paleta de cores (fonte única)
lib/whatsapp.ts       → monta links do WhatsApp com mensagem pronta
public/midias/        → imagens, subdivididas por seção
```
