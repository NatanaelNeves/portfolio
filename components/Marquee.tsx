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
    <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-6">
      <div className="whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
        {content.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="mr-6 inline-flex items-center gap-6 font-mono text-sm uppercase tracking-[0.14em] text-[var(--muted)]"
          >
            {tech}
            <span className="text-[var(--accent)]">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
