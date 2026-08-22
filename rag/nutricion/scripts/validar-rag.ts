// rag/nutricion/scripts/validar-rag.ts — Validador de integridad del RAG de nutrición (AG-NUTRI)
// Reglas de validación:
//   1. Toda regla con cita (sourceId existente + locator.chapter + locator.page).
//   2. Toda regla con rango/valor numérico (values con números) O confianza "qualitative".
//      → FALLA si hay afirmación numérica (statement con dígitos) sin values ni fuente.
//   3. confidence ∈ {explicit, inferred, qualitative}; evidenceTier ∈ {meta-analysis, rct, observational, expert-book, internal-doc}.
//   4. Chunks: sourceId existente, locator, summary no vacío, rules que existen y sin duplicados globales de ids.
// Ejecutar: npx tsx rag/nutricion/scripts/validar-rag.ts

import ragJson from "../../nutrition.json";

interface Locator {
  chapter: number;
  page: number;
}

interface RagRule {
  id: string;
  sourceId: string;
  topic: string;
  tags?: string[];
  statement: string;
  values: Record<string, unknown> | null;
  unit?: string;
  conditions?: Record<string, unknown>;
  confidence: "explicit" | "inferred" | "qualitative";
  evidenceTier: "meta-analysis" | "rct" | "observational" | "expert-book" | "internal-doc";
  locator: Locator;
}

interface RagChunk {
  id: string;
  sourceId: string;
  topic: string;
  tags?: string[];
  locator: Locator;
  summary: string;
  rules: string[];
}

interface RagFile {
  domain: string;
  version: string;
  sources: Array<{ id: string; title: string; evidenceTier: string }>;
  rules: RagRule[];
  chunks: RagChunk[];
}

const rag = ragJson as unknown as RagFile;

const VALID_CONFIDENCE = new Set(["explicit", "inferred", "qualitative"]);
const VALID_TIERS = new Set(["meta-analysis", "rct", "observational", "expert-book", "internal-doc"]);

let errors = 0;
const err = (msg: string): void => {
  console.error(`  [ERROR] ${msg}`);
  errors++;
};

const hasNumber = (v: unknown): boolean =>
  typeof v === "number" && Number.isFinite(v) ||
  (typeof v === "object" && v !== null && Object.values(v as Record<string, unknown>).some(hasNumber));

console.log(`[nutricion/validar-rag] dominio=${rag.domain} versión=${rag.version}`);
console.log(`  fuentes: ${rag.sources.length} · reglas: ${rag.rules.length} · chunks: ${rag.chunks.length}`);

const sourceIds = new Set(rag.sources.map((s) => s.id));
const ruleIds = new Set<string>();

// — Reglas —
for (const rule of rag.rules) {
  const ctx = `regla ${rule.id ?? "(sin id)"}`;

  if (!rule.id) { err(`${ctx}: sin id`); continue; }
  if (ruleIds.has(rule.id)) err(`${ctx}: id duplicado`);
  ruleIds.add(rule.id);

  if (!rule.statement?.trim()) err(`${ctx}: statement vacío`);

  // 1. Cita obligatoria
  if (!rule.sourceId || !sourceIds.has(rule.sourceId)) err(`${ctx}: sourceId "${rule.sourceId}" no existe en sources[]`);
  if (!rule.locator || typeof rule.locator.chapter !== "number" || rule.locator.chapter < 1) err(`${ctx}: locator.chapter inválido`);
  if (!rule.locator || typeof rule.locator.page !== "number" || rule.locator.page < 1) err(`${ctx}: locator.page inválido (cita exacta obligatoria)`);

  // 2. Rango numérico o qualitative
  const numericValues = rule.values !== null && rule.values !== undefined && hasNumber(rule.values);
  if (!numericValues && rule.confidence !== "qualitative") {
    err(`${ctx}: sin rango/valor numérico y confianza "${rule.confidence}" ≠ qualitative`);
  }
  // Afirmación numérica sin fuente → fail (locator/sourceId ya validados arriba, esto es el guard explícito)
  const statementHasDigits = /\d/.test(rule.statement ?? "");
  if (statementHasDigits && (!rule.sourceId || !rule.locator?.page)) {
    err(`${ctx}: afirmación numérica sin fuente ("${(rule.statement ?? "").slice(0, 60)}…")`);
  }

  // 3. Enums
  if (!VALID_CONFIDENCE.has(rule.confidence)) err(`${ctx}: confidence "${rule.confidence}" fuera de enum`);
  if (!VALID_TIERS.has(rule.evidenceTier)) err(`${ctx}: evidenceTier "${rule.evidenceTier}" fuera de enum`);
  if (!rule.topic?.trim()) err(`${ctx}: topic vacío`);
}

// — Chunks —
for (const chunk of rag.chunks) {
  const ctx = `chunk ${chunk.id ?? "(sin id)"}`;
  if (!chunk.id) { err(`${ctx}: sin id`); continue; }
  if (!chunk.sourceId || !sourceIds.has(chunk.sourceId)) err(`${ctx}: sourceId "${chunk.sourceId}" no existe`);
  if (!chunk.locator?.chapter || !chunk.locator?.page) err(`${ctx}: locator incompleto`);
  if (!chunk.summary?.trim()) err(`${ctx}: summary vacío (parafrasis obligatoria)`);
  if (!Array.isArray(chunk.rules) || chunk.rules.length === 0) err(`${ctx}: sin reglas referenciadas`);
  for (const rid of chunk.rules ?? []) {
    if (!ruleIds.has(rid)) err(`${ctx}: referencia a regla inexistente "${rid}"`);
  }
  if (!chunk.topic?.trim()) err(`${ctx}: topic vacío`);
}

// — Cobertura: toda regla debe estar referenciada por algún chunk —
const referenced = new Set(rag.chunks.flatMap((c) => c.rules ?? []));
for (const rule of rag.rules) {
  if (!referenced.has(rule.id)) err(`regla ${rule.id}: no referenciada por ningún chunk`);
}

// — Conflictos conocidos (informativo, no error) —
const choDuringRules = rag.rules.filter((r) => r.id === "nutri-mau-cho-during" || r.id === "nutri-nsca-during-cho");
if (choDuringRules.length === 2) {
  console.log("  [INFO] Conflicto registrado CHO/hora durante ejercicio: Maughan 30–60 g/h (2000) vs NSCA 30–90 g/h (2016) → resuelve NSCA (autoridad prioridad 1).");
}

if (errors > 0) {
  console.error(`\n[nutricion/validar-rag] FALLÓ con ${errors} error(es).`);
  process.exit(1);
}
console.log(`\n[nutricion/validar-rag] OK — ${rag.rules.length} reglas y ${rag.chunks.length} chunks válidos (toda regla con cita y rango o qualitative).`);
process.exit(0);
