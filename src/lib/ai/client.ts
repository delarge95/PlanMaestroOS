// src/lib/ai/client.ts - Wrapper oficial del cliente IA (Gemini) con límites, timeout y logging

export interface AiRequestOptions {
  prompt: string;
  maxTokens?: number;
  timeoutMs?: number;
  sourcesUsed?: string[];
}

export interface AiResponse {
  text: string;
  sourcesUsed: string[];
  tokensUsed: number;
  timestampIso: string;
}

export async function callAiService(options: AiRequestOptions): Promise<AiResponse> {
  const { prompt, maxTokens = 500, timeoutMs = 8000, sourcesUsed = [] } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    // Mock response wrapper simulating Gemini worker integration
    await new Promise((resolve) => setTimeout(resolve, 600));

    clearTimeout(timeoutId);

    const resultText = `Borrador generado para: "${prompt.slice(0, 40)}..."\n\nPropuesta: 1. Dividir la tarea en 2 pasos de 10 min. 2. Enfocarse únicamente en el entregable principal.`;

    console.log(`[AI Log] Prompt ejecutado exitosamente. MaxTokens: ${maxTokens}, Fuentes: ${sourcesUsed.length}`);

    return {
      text: resultText,
      sourcesUsed: sourcesUsed.length > 0 ? sourcesUsed : ['Sistema Operativo Plan Maestro', 'Historial del usuario'],
      tokensUsed: 145,
      timestampIso: new Date().toISOString()
    };
  } catch (err) {
    clearTimeout(timeoutId);
    throw new Error(`Error en servicio de IA: ${err instanceof Error ? err.message : 'Timeout o fallo de red'}`);
  }
}
