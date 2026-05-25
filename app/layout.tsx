import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hey Hey Studio — Agencia de Marketing Creativo",
  description:
    "Transformamos ideas en marcas que se recuerdan. Branding, contenido y marketing digital con creatividad estratégica enfocada en resultados.",
  keywords: [
    "marketing creativo",
    "branding",
    "identidad de marca",
    "diseño gráfico",
    "redes sociales",
    "marketing digital",
    "Hey Hey Studio",
    "León Guanajuato",
  ],
  openGraph: {
    title: "Hey Hey Studio — Agencia de Marketing Creativo",
    description:
      "Transformamos ideas en marcas que se recuerdan. Branding, contenido y marketing digital.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
