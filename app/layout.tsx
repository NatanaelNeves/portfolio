import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://natanaelneves.vercel.app"),
  title: "Natanael Neves - Desenvolvedor Full Stack",
  description:
    "Portfólio de Natanael Neves, desenvolvedor full stack focado em produtos digitais claros, performáticos e com impacto real no negócio.",
  openGraph: {
    title: "Natanael Neves - Desenvolvedor Full Stack",
    description:
      "Ideias confusas se tornam produtos digitais claros. Desenvolvimento full stack com foco em conversão e resultado.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--text)]">
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
