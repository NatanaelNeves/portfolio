const technologies = [
  "TypeScript",
  "React",
  "Node.js",
  "Azure",
  "Tailwind CSS",
  "DevOps",
  "SQL",
  "REST API",
  "UX/UI",
  "GitHub",
];

export default function Marquee() {
  const content = [...technologies, ...technologies];

  return (
    <section className="overflow-hidden border-b border-[var(--border)] bg-[var(--surface)] py-[1.125rem]">
      <div
        className="whitespace-nowrap"
        style={{ animation: "marquee 26s linear infinite" }}
      >
        {content.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="mr-8 inline-flex items-center gap-6 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-[var(--muted)]"
          >
            {tech}
            <span
              aria-hidden
              style={{ color: "var(--border-strong)", fontSize: "0.5rem" }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
