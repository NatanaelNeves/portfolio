"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/motion";

const links = [
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Processo", href: "#processo", id: "processo" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Contato", href: "#cta", id: "cta" },
];

const social = [
  { label: "LinkedIn ↗", href: "https://linkedin.com/in/natanaelnevesalves", external: true },
  { label: "GitHub ↗", href: "https://github.com/natanaelneves", external: true },
  { label: "CV ↓", href: "/natanael-neves-cv.pdf", download: true },
];

function StatusDot() {
  return (
    <span className="flex items-center gap-2">
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
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  /* Direção do scroll: esconde descendo, mostra subindo */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const delta = y - lastY.current;
      if (y < 120) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Seção ativa para destacar o link correspondente */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ["hero", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Trava o scroll do body e fecha com Escape enquanto o menu está aberto */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <m.header
        initial={false}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: EASE }}
        className={`fixed left-0 right-0 top-0 z-50 transition-[background,border-color] duration-300 ${
          scrolled || open
            ? "border-b border-[var(--border)] bg-[rgba(12,12,12,0.94)] backdrop-blur-md"
            : ""
        }`}
      >
        <div className="container flex items-center justify-between gap-4 py-[1.125rem] md:py-[1.375rem]">
          <a href="#hero" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="heading text-[1.1rem]">
              NN<span style={{ color: "var(--accent)" }}>.</span>
            </span>
            <span className="hidden sm:flex">
              <StatusDot />
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`label relative transition-colors hover:text-[var(--text)] ${
                  active === link.id ? "text-[var(--text)]" : ""
                }`}
                aria-current={active === link.id ? "true" : undefined}
              >
                <span
                  className="absolute -left-3 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full transition-opacity duration-300"
                  style={{
                    background: "var(--accent)",
                    opacity: active === link.id ? 1 : 0,
                  }}
                  aria-hidden
                />
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
            <a href="#cta" className="btn-primary hidden sm:inline-flex">
              Vamos conversar
            </a>

            {/* Hambúrguer — só mobile */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-[var(--border-strong)] md:hidden"
            >
              <span
                className="block h-px w-4 bg-[var(--text)] transition-transform duration-300"
                style={{ transform: open ? "translateY(3px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-px w-4 bg-[var(--text)] transition-transform duration-300"
                style={{ transform: open ? "translateY(-3px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </div>
      </m.header>

      {/* Menu mobile — cortina que desce */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-[var(--bg)] md:hidden"
          >
            <div className="container flex h-full flex-col justify-between pb-10 pt-28">
              <nav aria-label="Navegação móvel">
                <m.ul
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
                  }}
                  className="m-0 list-none space-y-2 p-0"
                >
                  {links.map((link, i) => (
                    <m.li
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, y: 26 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-4 border-b border-[var(--border)] py-4"
                      >
                        <span className="mono text-[0.7rem]">0{i + 1}</span>
                        <span className="heading text-[2rem] transition-colors group-hover:text-[var(--accent)]">
                          {link.label}
                        </span>
                      </a>
                    </m.li>
                  ))}
                </m.ul>
              </nav>

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="space-y-5"
              >
                <StatusDot />
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {social.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      {...(item.download ? { download: true } : {})}
                      className="label transition-colors hover:text-[var(--text)]"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="mailto:natanaelnevesalves@gmail.com"
                    className="label transition-colors hover:text-[var(--text)]"
                  >
                    Email →
                  </a>
                </div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
