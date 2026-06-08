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

export default function Stack() {
  return (
    <div className="border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="container flex flex-wrap items-center gap-x-5 gap-y-2 py-5">
        <span className="label mr-3" style={{ color: "var(--accent)" }}>
          Stack
        </span>
        {primaryStack.map((tech) => (
          <span
            key={tech}
            className="stack-tag"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
