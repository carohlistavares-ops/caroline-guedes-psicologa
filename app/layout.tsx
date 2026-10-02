import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import DadosEstruturados from "@/components/DadosEstruturados";
import { seo, site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap"
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
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
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body>
        <DadosEstruturados />
        {children}
      </body>
    </html>
  );
}
