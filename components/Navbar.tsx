"use client";

import { motion } from "framer-motion";
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
      className={`fixed left-0 right-0 top-0 z-50 px-6 py-6 md:px-12 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[rgba(10,10,10,0.9)] backdrop-blur-md"
          : ""
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <a href="#hero" className="headline text-2xl">
          NN<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.8rem] uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#cta"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-[2px] px-5 py-2 text-sm font-bold text-black"
          style={{ background: "var(--accent)" }}
        >
          Vamos conversar
        </motion.a>
      </div>
    </header>
  );
}
