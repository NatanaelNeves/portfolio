export type DiagnosticoResultado = {
  problema: string;
  estrutura: string;
  stack: string;
  proximos_passos: string;
  aviso: string;
};

export async function analisarIdeia(texto: string): Promise<DiagnosticoResultado> {
  const response = await fetch("/api/diagnostico", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto }),
  });

  if (!response.ok) {
    throw new Error("Falha na analise");
  }

  return response.json();
}
