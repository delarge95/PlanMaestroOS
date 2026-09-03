// synonyms — híbrido keyword+sinónimos (mejora real sobre ragEngine legacy,
// que es includes título×5/desc×2 sin sinónimos; no existe BM25 que re-rankear).
// Destino: src/lib/rag/synonyms.ts (envuelve queryStaticRag / searchRAG).

/** término lego/ES/EN -> canónicos del grafo y la literatura. */
export const SYNONYMS: Record<string, string[]> = {
  hombro: ['shoulder', 'deltoid', 'supraspinatus', 'manguito-rotador'],
  shoulder: ['hombro', 'deltoid', 'supraspinatus'],
  'manguito-rotador': ['rotator-cuff', 'supraspinatus', 'infraspinatus', 'subscapularis'],
  rodilla: ['knee', 'patella', 'cuadriceps', 'acl'],
  knee: ['rodilla', 'patella'],
  codo: ['elbow', 'epicondilo', 'triceps'],
  cadera: ['hip', 'gluteo', 'psoas'],
  espalda: ['back', 'dorsal', 'lumbar', 'erector'],
  tendon: ['tendón', 'tendinopatia', 'hsr'],
  'tendón': ['tendon', 'tendinopatia'],
  bursa: ['bursitis', 'subacromial'],
  nervio: ['nerve', 'dermatoma', 'hormigueo'],
  hipertrofia: ['hypertrophy', 'volumen', 'nippard', 'israetel'],
  fuerza: ['strength', 'nsca', 'haff'],
  calistenia: ['calisthenics', 'overcoming-gravity', 'planche', 'front-lever'],
  cardio: ['daniels', 'vdot', 'zona-2', 'aerobico'],
  proteina: ['protein', 'whey', 'leucina'],
  entrevista: ['interview', 'star', 'outreach'],
};

/** Expande términos con sinónimos (deduplicado, minúsculas). */
export function expandQuery(query: string): string[] {
  const terms = query.toLowerCase().split(/\s+/).filter((t) => t.length > 2);
  const out = new Set<string>();
  for (const t of terms) {
    out.add(t);
    for (const s of SYNONYMS[t] ?? []) out.add(s);
  }
  return [...out];
}

/** Puntaje híbrido: título×5, cuerpo×2, tag exacto×3 (mismo espíritu legacy + syn). */
export function hybridScore(title: string, body: string, tags: string[], terms: string[]): number {
  const t = title.toLowerCase();
  const b = body.toLowerCase();
  const tagSet = new Set(tags.map((x) => x.toLowerCase()));
  let score = 0;
  for (const term of terms) {
    if (t.includes(term)) score += 5;
    if (b.includes(term)) score += 2;
    if (tagSet.has(term)) score += 3;
  }
  return score;
}
