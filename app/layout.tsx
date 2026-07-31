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

const siteUrl = "https://www.saraecheverria.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: {
    default: `${perfil.nombre} — Dirección de Personas y Gestión Empresarial`,
    template: `%s — ${perfil.nombre}`,
  },
  description: perfil.propuestaValorBreve,
  keywords: [
    "Sara Echeverría Ramos",
    "Dirección de Recursos Humanos",
    "Dirección de Personas",
    "Gerencia",
    "Dirección Administrativa",
    "Gestión empresarial",
    "Recursos Humanos Euskadi",
    "Recursos Humanos Navarra",
    "Oñati",
    "Pamplona",
    "Prevención de Riesgos Laborales",
    "Inteligencia artificial aplicada a la empresa",
    "Transformación digital",
    "Selección y formación",
    "Desarrollo organizativo",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: perfil.nombre,
  jobTitle: perfil.titular,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gipuzkoa / Navarra",
    addressCountry: "ES",
  },
  knowsAbout: [
    "Dirección de Recursos Humanos",
    "Gestión empresarial",
    "Dirección administrativa",
    "Prevención de Riesgos Laborales",
    "Transformación digital",
    "Inteligencia artificial aplicada",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased selection:bg-accent-soft">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
