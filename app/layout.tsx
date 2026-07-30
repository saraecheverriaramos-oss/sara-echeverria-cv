import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { themeInitScript } from "@/lib/theme-script";
import { perfil } from "@/data/profile";
import { Providers } from "@/components/Providers";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://sara-echeverria-cv.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${perfil.nombre} — Dirección de Personas y Gestión Empresarial`,
    template: `%s — ${perfil.nombre}`,
  },
  description: perfil.propuestaValorBreve,
  keywords: [
    "Dirección de Recursos Humanos",
    "Dirección de Personas",
    "Gerencia",
    "Gestión empresarial",
    "Recursos Humanos País Vasco",
    "Recursos Humanos Navarra",
    "Prevención de Riesgos Laborales",
    "Inteligencia artificial aplicada a RRHH",
    "Transformación digital",
  ],
  authors: [{ name: perfil.nombre }],
  openGraph: {
    type: "profile",
    locale: "es_ES",
    url: siteUrl,
    siteName: `${perfil.nombre} — CV`,
    title: `${perfil.nombre} — ${perfil.titular}`,
    description: perfil.propuestaValorBreve,
  },
  twitter: {
    card: "summary_large_image",
    title: `${perfil.nombre} — ${perfil.titular}`,
    description: perfil.propuestaValorBreve,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className="min-h-full antialiased selection:bg-accent-soft">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
