"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
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
      <div className="container flex items-center justify-between py-[1.375rem]">
        <a href="#hero" className="heading text-[1.1rem]">
          NN<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
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

        <a href="#cta" className="btn-primary">
          Vamos conversar
        </a>
      </div>
    </header>
  );
}
