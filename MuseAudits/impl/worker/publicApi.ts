// publicApi — L5: API de lectura del grafo (solo GET, siempre con x-pm-key).
// Se monta en server.ts tras /jobs/morning-plan. Destino: worker/src/publicApi.ts
// Endpoints: GET /v1/today?dateIso= | GET /v1/graph/summary | GET /v1/fit?companyId=

export interface TodaySnapshot {
  dateIso: string;
  mode: string;
  top3: Array<{ domain: string; title: string; minutes: number }>;
}

export interface GraphSummary {
  nodes: number;
  edges: number;
  orphans: number;
  builtAtIso: string;
}

export function todayHandler(dateIso: string, plan: TodaySnapshot): Response {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateIso)) {
    return Response.json({ ok: false, status: 422, error: 'dateIso YYYY-MM-DD' }, { status: 422 });
  }
  return Response.json({ ok: true, data: plan });
}

export function graphSummaryHandler(summary: GraphSummary): Response {
  return Response.json({ ok: true, data: summary });
}

/** Regla: la API pública JAMÁS expone salud cruda, contactos privados ni PII. */
export const PUBLIC_API_DENY = ['mental-health', 'pain-detail', 'contacts', 'female-profile'] as const;

export function assertPublicSafe(payloadKeys: string[]): void {
  const hit = payloadKeys.find((k) => (PUBLIC_API_DENY as readonly string[]).includes(k));
  if (hit) throw new Error(`Campo prohibido en API pública: ${hit}`);
}
