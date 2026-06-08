export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container flex flex-col items-start justify-between gap-3 py-7 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
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
