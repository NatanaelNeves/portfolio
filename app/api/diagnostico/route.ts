import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

type Output = {
  problema: string;
  estrutura: string;
  stack: string;
  proximos_passos: string;
  aviso: string;
};

function parseOutput(text: string): Output {
  try {
    return JSON.parse(text) as Output;
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]) as Output;
    }
    throw new Error("Resposta inválida do modelo");
  }
}

export async function POST(req: Request) {
  try {
    const { texto } = (await req.json()) as { texto?: string };
    if (!texto || !texto.trim()) {
      return Response.json({ error: "Texto obrigatório" }, { status: 400 });
    }

    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1024,
      system:
        "Você é Natanael Neves, desenvolvedor full stack de 23 anos de Fortaleza-CE, com MBA em Fullstack e DevOps. Analise a ideia e responda SOMENTE em JSON válido, sem markdown: {\"problema\":\"...\",\"estrutura\":\"...\",\"stack\":\"...\",\"proximos_passos\":\"passo1 | passo2 | passo3\",\"aviso\":\"...\"}",
      messages: [{ role: "user", content: `Analise esta ideia: ${texto}` }],
    });

    const raw = message.content[0] && "text" in message.content[0] ? message.content[0].text : "{}";
    const parsed = parseOutput(raw);
    return Response.json(parsed);
  } catch {
    return Response.json(
      { error: "Não foi possível gerar o diagnóstico agora." },
      { status: 500 }
    );
  }
}
