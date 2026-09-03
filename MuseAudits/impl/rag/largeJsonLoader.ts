// largeJsonLoader — remedio OOM (Gemini G1, adoptado).
// master_rag_dataset.json (1.27MB) y rag/career.json (1.39MB) JAMÁS import estático:
// TSServer los mete al AST y astro check exige 8GB. Carga dinámica + presupuesto.
// Destino: src/lib/rag/largeJsonLoader.ts (+ chequeo en antiSecret.mjs §30.3)

export const GIANT_JSON_BYTES = 500 * 1024;

export async function fetchJson<T>(url: string, validate: (raw: unknown) => T): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${url}: HTTP ${res.status}`);
  const len = res.headers.get('content-length');
  if (len && Number(len) > 8 * 1024 * 1024) {
    throw new Error(`JSON excede presupuesto 8MB: ${url}`);
  }
  return validate(await res.json());
}

/** Chequeo estático para CI: archivos .ts que importen JSONs gigantes. */
export function findGiantJsonImports(
  files: Array<{ path: string; content: string; jsonSizes: Record<string, number> }>,
): string[] {
  const hits: string[] = [];
  const re = /from\s+['"]([^'"]+\.json)['"]/g;
  for (const f of files) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(f.content))) {
      const size = f.jsonSizes[m[1]] ?? f.jsonSizes[m[1].split('/').pop() ?? ''] ?? 0;
      if (size > GIANT_JSON_BYTES) hits.push(`${f.path} importa ${m[1]} (${Math.round(size / 1024)}KB)`);
    }
  }
  return hits;
}
