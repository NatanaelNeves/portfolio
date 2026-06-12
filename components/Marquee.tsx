const primaryStack = [
  "React",
  "TypeScript",
  "Firebase",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Azure",
  "Tailwind CSS",
  "Framer Motion",
  "Sanity.io",
];

/* Marquee infinito em CSS puro: duas cópias da lista, track anima -50%.
   Pausa no hover; prefers-reduced-motion congela via regra global. */
export default function Stack() {
  return (
    <section
      aria-label={`Stack tecnológica: ${primaryStack.join(", ")}`}
      className="marquee border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="marquee-track flex w-max items-center gap-12 py-6">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden
            className="m-0 flex list-none items-center gap-12 p-0"
          >
            {primaryStack.map((tech) => (
              <li key={tech} className="flex items-center gap-12">
                <span
                  className="whitespace-nowrap font-mono text-[0.8rem] uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-2)" }}
                >
                  {tech}
                </span>
                <span className="text-[0.55rem]" style={{ color: "var(--accent)" }}>
                  ◆
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
