import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import DadosEstruturados from "@/components/DadosEstruturados";
import { seo, site } from "@/lib/content";
import "./globals.css";

// Títulos: serifada clássica e elegante. Texto: sans humanista e arredondada.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap"
});

export const metadata: Metadata = {
  // Base para URLs absolutas e canonical: evita que o endereço *.vercel.app
  // seja indexado como conteúdo duplicado do domínio oficial.
  metadataBase: new URL(site.url),
  title: seo.titulo,
  description: seo.descricao,
  alternates: { canonical: "/" },
  authors: [{ name: site.nome, url: site.url }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.nome,
    title: seo.titulo,
    description: seo.descricao,
    images: [{ url: seo.imagem, width: 1200, height: 630, alt: seo.imagemAlt }]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titulo,
    description: seo.descricao,
    images: [seo.imagem]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${nunitoSans.variable}`}>
      <body>
        <DadosEstruturados />
        {children}
      </body>
    </html>
  );
}
