import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Inter, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import MotionProvider from "@/components/MotionProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Natanael Neves",
  jobTitle: "Frontend Developer",
  url: "https://natanaelneves.vercel.app",
  email: "natanaelnevesalves@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  sameAs: [
    "https://github.com/NatanaelNeves",
    "https://linkedin.com/in/natanaelnevesalves",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Firebase",
    "Node.js",
    "Frontend Development",
    "Next.js",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://natanaelneves.vercel.app"),
  title: {
    default: "Natanael Neves — Frontend Developer",
    template: "%s | Natanael Neves",
  },
  description:
    "Frontend Developer em Fortaleza, CE. Construo produtos digitais com React, TypeScript e Firebase — do problema ao deploy, sem surpresas.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Firebase",
    "Next.js",
    "Fortaleza",
    "Natanael Neves",
    "Desenvolvedor Frontend",
  ],
  authors: [{ name: "Natanael Neves", url: "https://natanaelneves.vercel.app" }],
  creator: "Natanael Neves",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://natanaelneves.vercel.app",
    title: "Natanael Neves — Frontend Developer",
    description:
      "Construo produtos digitais com React, TypeScript e Firebase — do problema ao deploy, sem achismos.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Natanael Neves — Frontend Developer",
      },
    ],
    siteName: "Natanael Neves",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natanael Neves — Frontend Developer",
    description:
      "Construo produtos digitais com React, TypeScript e Firebase — do problema ao deploy.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      className={`${syne.variable} ${inter.variable} ${dmMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <MotionProvider>{children}</MotionProvider>
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
