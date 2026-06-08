"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background,border-color] duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[rgba(12,12,12,0.94)] backdrop-blur-md"
          : ""
      }`}
    >
      <div className="container flex items-center justify-between gap-4 py-[1.375rem]">
        <a href="#hero" className="flex items-center gap-3">
          <span className="heading text-[1.1rem]">
            NN<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <span className="hidden items-center gap-2 sm:flex">
            <span
              className="inline-block h-[6px] w-[6px] rounded-full"
              style={{
                background: "var(--status)",
                boxShadow: "0 0 7px var(--status)",
                animation: "pulse-status 2.5s ease-in-out infinite",
              }}
              aria-hidden
            />
            <span
              className="font-mono text-[0.6rem] uppercase tracking-[0.14em]"
              style={{ color: "var(--status)" }}
            >
              Disponível
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label transition-colors hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/natanaelnevesalves"
            target="_blank"
            rel="noreferrer"
            className="label hidden transition-colors hover:text-[var(--text)] lg:block"
            aria-label="Perfil no LinkedIn"
          >
            LinkedIn ↗
          </a>
          <a
            href="/natanael-neves-cv.pdf"
            download
            className="label hidden transition-colors hover:text-[var(--text)] lg:block"
            aria-label="Baixar currículo em PDF"
          >
            CV ↓
          </a>
          <a href="#cta" className="btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </header>
  );
}
