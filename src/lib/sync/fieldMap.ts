// fieldMap — entierra la divergencia Title/Status vs Titulo/Estado (archivo 14 §14.3.4).
// Dueña: mappers.ts. Los adapters viejos pasan a wrappers de estas funciones.
// Destino: src/data/notion/fieldMap.ts

/** ES (código nuevo/mappers) <-> EN (adapters legacy + API Notion). */
export const FIELD_MAP: Record<string, string> = {
  Titulo: 'Title',
  Estado: 'Status',
  Prioridad: 'Priority',
  Empresa: 'Company',
  Rol: 'Role',
  Area: 'Area',
  ExternalId: 'ExternalId',
  FechaVencimiento: 'DueDate',
  ProximaAccion: 'NextAction',
};

/** Términos clínicos que JAMÁS salen a proyecciones públicas (mappers.ts). */
export const CLINICAL_DENYLIST = [
  'diagnostico',
  'terapia',
  'psiquiatr',
  'rumiacion',
  'ansiedad_social_raw',
  'cannabis_log',
] as const;

export function toNotionField(esField: string): string {
  return FIELD_MAP[esField] ?? esField;
}

export function toLocalField(notionField: string): string {
  for (const [es, en] of Object.entries(FIELD_MAP)) if (en === notionField) return es;
  return notionField;
}

/** true si el texto contiene un término clínico bloqueado (case-insensitive). */
export function containsClinicalData(text: string): boolean {
  const t = text.toLowerCase();
  return CLINICAL_DENYLIST.some((w) => t.includes(w));
}

/** Sanitiza notas para proyección pública: bloquea si hay clínica. */
export function sanitizeNotesForPublicProjection(notes: string): { ok: true; notes: string } | { ok: false; reason: string } {
  if (containsClinicalData(notes)) return { ok: false, reason: 'contiene datos clínicos: proyección denegada' };
  return { ok: true, notes };
}
