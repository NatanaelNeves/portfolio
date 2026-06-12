import { Reveal } from "@/components/motion";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[var(--border)]">
      <div className="pt-16">
        <div className="container">
          <Reveal y={0}>
            <p className="label" style={{ color: "var(--accent)" }}>
              {"// end of log"}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1} y={32}>
          {/* Full-bleed: o nome encosta nas bordas do viewport de propósito */}
          <a href="#hero" aria-label="Voltar ao topo" className="mt-8 block">
            <span className="ghost-name" aria-hidden>
              NATANAEL NEVES
            </span>
          </a>
        </Reveal>
      </div>

      <div className="container mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] py-7 md:flex-row md:items-center">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <p className="label">© 2026 Natanael Neves</p>
          <span className="label">·</span>
          <p className="label">Fortaleza, CE</p>
          <span className="label">·</span>
          <p className="label" style={{ color: "var(--accent)" }}>
            {"// build-log"}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="label transition-colors hover:text-[var(--text)]"
            href="https://linkedin.com/in/natanaelnevesalves"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="label transition-colors hover:text-[var(--text)]"
            href="https://github.com/natanaelneves"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="label transition-colors hover:text-[var(--text)]"
            href="mailto:natanaelnevesalves@gmail.com"
          >
            Email
          </a>
          <a className="label transition-colors hover:text-[var(--text)]" href="#hero">
            Topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
