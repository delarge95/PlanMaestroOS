// worker/src/ai/geminiRest.ts - Cliente REST mínimo y puro para la API de Gemini v1beta
// Sin dependencias nuevas. La API key SOLO llega por parámetro (env vars), nunca hardcodeada.

/** Entrada de la conversación: role Gemini ('user' | 'model') + texto plano. */
export interface GeminiContentPart {
  role: 'user' | 'model';
  text: string;
}

export interface GeminiCallInput {
  apiKey: string;
  model: string;
  systemPrompt?: string;
  contents: GeminiContentPart[];
  maxOutputTokens?: number;
  temperature?: number;
  timeoutMs?: number;
}

export interface GeminiCallResult {
  text: string;
  promptTokens: number;
  completionTokens: number;
  model: string;
}

const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';
const DEFAULT_TIMEOUT_MS = 20_000;

/**
 * Llama a `POST /v1beta/models/{model}:generateContent?key={KEY}`.
 * - Timeout vía AbortController (default 20s).
 * - Errores HTTP lanzan Error con status + body corto (truncado).
 * - Tokens reales desde usageMetadata (0 si la API no los reporta).
 */
export async function callGemini(input: GeminiCallInput): Promise<GeminiCallResult> {
  const {
    apiKey,
    model,
    systemPrompt,
    contents,
    maxOutputTokens,
    temperature,
    timeoutMs = DEFAULT_TIMEOUT_MS,
  } = input;

  // AbortController: cancela el fetch si excede el timeout
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    // Cuerpo según la spec v1beta (los campos opcionales solo se incluyen si están definidos)
    const body: Record<string, unknown> = {
      contents: contents.map((c) => ({ role: c.role, parts: [{ text: c.text }] })),
    };
    if (systemPrompt && systemPrompt.trim().length > 0) {
      body.systemInstruction = { parts: [{ text: systemPrompt }] };
    }
    const generationConfig: Record<string, number> = {};
    if (typeof maxOutputTokens === 'number') generationConfig.maxOutputTokens = maxOutputTokens;
    if (typeof temperature === 'number') generationConfig.temperature = temperature;
    if (Object.keys(generationConfig).length > 0) {
      body.generationConfig = generationConfig;
    }

    const url = `${GEMINI_BASE_URL}/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    let response: Response;
    try {
      response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
    } catch (err) {
      // Reemplaza el AbortError críptico por un mensaje claro
      if (controller.signal.aborted) {
        throw new Error(`Gemini API: timeout tras ${timeoutMs}ms (modelo ${model}).`);
      }
      throw err instanceof Error ? err : new Error(String(err));
    }

    if (!response.ok) {
      const rawBody = await response.text().catch(() => '');
      const shortBody = rawBody.replace(/\s+/g, ' ').slice(0, 300);
      throw new Error(
        `Gemini API error HTTP ${response.status} (${model}): ${shortBody || 'sin cuerpo de respuesta'}`
      );
    }

    const data: any = await response.json();

    // candidates[0].content.parts[].text — concatena todas las partes de texto
    const parts: any[] = data?.candidates?.[0]?.content?.parts ?? [];
    const text = parts
      .map((p) => (typeof p?.text === 'string' ? p.text : ''))
      .join('')
      .trim();

    // Respuesta sin contenido utilizable (bloqueo, filters, etc.) → error claro para que el caller caiga al fallback
    if (text.length === 0) {
      const reason =
        data?.candidates?.[0]?.finishReason || data?.promptFeedback?.blockReason || 'respuesta vacía';
      throw new Error(`Gemini API: sin texto en la respuesta (razón: ${reason}).`);
    }

    const usage = data?.usageMetadata ?? {};
    return {
      text,
      promptTokens: typeof usage.promptTokenCount === 'number' ? usage.promptTokenCount : 0,
      completionTokens: typeof usage.candidatesTokenCount === 'number' ? usage.candidatesTokenCount : 0,
      model,
    };
  } finally {
    clearTimeout(timer);
  }
}
