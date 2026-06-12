import { Reveal } from "@/components/motion";

const clients = [
  {
    name: "O Pequeno Nazareno",
    type: "ONG · Fortaleza, CE",
    url: "https://green-ocean-096bd050f.2.azurestaticapps.net/admin/chamados",
  },
  {
    name: "Vitória Dandara",
    type: "Psicóloga · Fortaleza, CE",
    url: "https://site-vitoria-dandara.vercel.app",
  },
  {
    name: "FitTrack Pro",
    type: "Projeto independente",
    url: "https://controle-de-treinos-8cwo.vercel.app",
  },
];

export default function ClientStrip() {
  return (
    <div className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container py-10">
        <Reveal y={12}>
          <p className="label mb-7 text-center">Confiaram no meu trabalho</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {clients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-1 text-center"
                aria-label={`${client.name} — ${client.type}`}
              >
                <span
                  className="font-sans text-[0.9375rem] tracking-[-0.02em] transition-colors group-hover:text-[var(--accent)]"
                  style={{ color: "var(--text)", fontWeight: 700 }}
                >
                  {client.name}
                </span>
                <span className="label">{client.type}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
