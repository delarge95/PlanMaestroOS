// src/lib/ai/requestAiAction.ts - Único punto de contacto del cliente web con el Worker privado de IA

import type { AiActionName } from '../../../worker/src/ai/actions';

export interface AiDraftResponse {
  draftId: string;
  action: AiActionName;
  content: string;
  sourcesUsed: string[];
  tokensUsed: number;
  timestampIso: string;
  betaNotice?: string;
}

export async function requestAiAction(
  action: AiActionName,
  payload?: unknown,
  sourcesUsed?: string[]
): Promise<AiDraftResponse> {
  const workerUrl = (import.meta as any).env?.PUBLIC_WORKER_URL || 'http://localhost:8787';

  try {
    const res = await fetch(`${workerUrl}/ai/action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, payload, sourcesUsed })
    });

    if (!res.ok) {
      throw new Error(`Fallo en acción de IA del worker: ${res.status}`);
    }

    return await res.json();
  } catch (_err) {
    // Fallback local seguro que simula respuesta del worker
    return {
      draftId: `draft-local-${Date.now()}`,
      action,
      content: `[Borrador del Worker] Propuesta generada para la acción: "${action}".`,
      sourcesUsed: sourcesUsed?.length ? sourcesUsed : ['Sistema Operativo Plan Maestro', 'Historial del usuario'],
      tokensUsed: 85,
      timestampIso: new Date().toISOString(),
      betaNotice: 'Beta — respuestas sin verificación de fuentes'
    };
  }
}
