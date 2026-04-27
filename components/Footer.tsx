export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] px-6 py-8 md:flex-row md:items-center md:px-12">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[var(--muted)]">
        © 2025 Natanael Neves · Fortaleza, CE
      </p>
      <div className="flex items-center gap-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[var(--muted)]">
        <a className="transition-colors hover:text-[var(--accent)]" href="https://github.com/natanaelneves">
          GitHub
        </a>
        <a className="transition-colors hover:text-[var(--accent)]" href="#hero">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
