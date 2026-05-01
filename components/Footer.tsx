export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container flex flex-col items-start justify-between gap-3 py-7 md:flex-row md:items-center">
        <p className="label">© 2026 Natanael Neves · Fortaleza, CE</p>
        <div className="flex items-center gap-6">
          <a
            className="label transition-colors hover:text-[var(--text)]"
            href="https://github.com/natanaelneves"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="label transition-colors hover:text-[var(--text)]" href="#hero">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
