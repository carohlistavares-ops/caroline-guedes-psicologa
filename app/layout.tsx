import type { Metadata } from "next";
import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
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
  title: "Caroline Guedes | Psicóloga Clínica — CRP 13/12977",
  description:
    "Atendimento psicológico clínico on-line para todo o Brasil, com base na Terapia Cognitivo-Comportamental (TCC). Especializações em Neuropsicologia e Psicologia em Saúde.",
  keywords: [
    "psicóloga",
    "psicologia clínica",
    "TCC",
    "terapia cognitivo-comportamental",
    "Caroline Guedes",
    "Mulher Livre"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
