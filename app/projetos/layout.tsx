import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://natanaelneves.vercel.app"),
};

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(12,12,12,0.94)] backdrop-blur-md">
        <div className="container flex items-center justify-between py-[1.375rem]">
          <Link href="/" className="heading text-[1.1rem]">
            NN<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
          <Link
            href="/#projetos"
            className="label transition-colors hover:text-[var(--text)]"
          >
            ← Voltar ao portfólio
          </Link>
        </div>
      </header>
      <main className="pt-24">{children}</main>
    </>
  );
}
