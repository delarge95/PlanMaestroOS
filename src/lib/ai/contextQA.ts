// src/lib/ai/contextQA.ts — Asistente contextual anti-alucinación (AG-INTE).
//
// Contrato del módulo: NINGUNA afirmación sin chunk citado o fact de estado.
//   1. retrieveContext(): recuperación determinista sobre los RAG estáticos
//      (rag/*.json) — tokens de la pregunta vs summary+tags+topic+entities.
//   2. buildAppStateFacts(): lectura SSR-safe de los stores vivos de la app.
//   3. answerContextually(): respuesta SIEMPRE local/extractiva (grounded /
//      partial / insufficient) con citas y facts.
//   4. askWithContext(): si hay Worker IA (PUBLIC_WORKER_URL), le pasa SOLO
//      los chunks recuperados como contexto; cualquier fallo → local.

import anatomyRag from '../../../rag/anatomy.json';
import cardioRag from '../../../rag/cardio.json';
import careerRag from '../../../rag/career.json';
import clinicalRag from '../../../rag/clinical.json';
import designRag from '../../../rag/design.json';
import englishRag from '../../../rag/english.json';
import fitnessRag from '../../../rag/fitness.json';
import germanRag from '../../../rag/german.json';
import nutritionRag from '../../../rag/nutrition.json';
import portfolioRag from '../../../rag/portfolio.json';

import { useCareerStore } from '../../data/career/careerStore';
import { useVocabularyStore, computeStreakDays } from '../languages/vocabularyStore';
import { countDueErrors } from '../languages/errorStore';
import { useActiveProgramStore } from '../../data/fitness/activeProgramStore';
import { getCardioHistory } from '../fitness/cardioHistory';
import { requestAiChat } from './workerClient';

// ── Tipos RAG (formato v4 de rag/*.json) ──

export interface RagLocator {
  chapter?: number | string;
  page?: number;
  section?: string;
}

export interface RagChunk {
  id: string;
  sourceId: string;
  topic: string;
  tags: string[];
  locator: RagLocator;
  summary: string;
  entities: string[];
  rules: string[];
}

interface RagDomain {
  domain: string;
  sources: Array<{ id: string; title?: string }>;
  chunks: RagChunk[];
}

/** Orden canónico de dominios: desempate determinista en retrieveContext. */
const DOMAINS: Array<{ name: string; rag: RagDomain }> = [
  { name: 'fitness', rag: fitnessRag as unknown as RagDomain },
  { name: 'career', rag: careerRag as unknown as RagDomain },
  { name: 'design', rag: designRag as unknown as RagDomain },
  { name: 'german', rag: germanRag as unknown as RagDomain },
  { name: 'english', rag: englishRag as unknown as RagDomain },
  { name: 'nutrition', rag: nutritionRag as unknown as RagDomain },
  { name: 'anatomy', rag: anatomyRag as unknown as RagDomain },
  { name: 'cardio', rag: cardioRag as unknown as RagDomain },
  { name: 'clinical', rag: clinicalRag as unknown as RagDomain },
  { name: 'portfolio', rag: portfolioRag as unknown as RagDomain },
];

// ── Tokenización y scoring deterministas ──

/** Stopwords mínimas ES/EN — solo lo necesario para no inflar ruido. */
const STOPWORDS = new Set([
  'de', 'la', 'el', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'o', 'u', 'e', 'ni',
  'en', 'que', 'con', 'sin', 'para', 'por', 'del', 'al', 'como', 'mi', 'mis', 'tu', 'tus',
  'su', 'sus', 'se', 'es', 'son', 'hay', 'muy', 'mas', 'ya', 'me', 'te', 'le', 'lo', 'les',
  'nos', 'sobre', 'entre', 'desde', 'hasta', 'hacia', 'este', 'esta', 'esto', 'eso', 'esa',
  'the', 'of', 'and', 'or', 'to', 'in', 'on', 'at', 'for', 'with', 'is', 'are', 'was',
  'were', 'be', 'been', 'do', 'does', 'did', 'i', 'you', 'we', 'they', 'what', 'how',
  'why', 'when', 'where', 'which', 'who', 'my', 'your', 'its', 'our', 'their',
]);

/** Normaliza: minúsculas + sin diacríticos (NFD). Determinista. */
function norm(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function tokenize(question: string): string[] {
  return norm(question)
    .split(/[^a-z0-9ßäöü]+/)
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));
}

export interface RetrievedChunk {
  chunk: RagChunk;
  domain: string;
  /** Puntuación total (match exacto en tag/topic/entidad = 2, substring = 1). */
  score: number;
  /** Tokens de la pregunta que encontró el chunk (para fracción de cobertura). */
  matchedTokens: string[];
}

function scoreChunk(tokens: string[], chunk: RagChunk): { score: number; matched: string[] } {
  const tags = (chunk.tags ?? []).map(norm);
  // Partes de tags compuestos: 'volume-landmarks' → {'volume','landmarks'}.
  const tagParts = new Set(tags.flatMap((t) => t.split(/[-:]/)));
  const topicParts = new Set(norm(chunk.topic ?? '').split(/[-:\s]+/));
  const entityParts = new Set((chunk.entities ?? []).flatMap((e) => norm(e).split(/[-:]/)));
  const haystack = norm(
    [chunk.summary, tags.join(' '), chunk.topic, (chunk.entities ?? []).join(' ')].join(' '),
  );

  let score = 0;
  const matched: string[] = [];
  for (const token of tokens) {
    if (tags.includes(token) || tagParts.has(token) || topicParts.has(token) || entityParts.has(token)) {
      score += 2; // match exacto (tag, topic o entidad)
      matched.push(token);
    } else if (haystack.includes(token)) {
      score += 1; // match por inclusión en summary/haystack
      matched.push(token);
    }
  }
  return { score, matched };
}

/**
 * Recuperación determinista sobre TODOS los RAG estáticos.
 * Devuelve los `limit` chunks con score > 0, ordenados por score desc,
 * desempatados por orden canónico de dominio y después por id.
 */
export function retrieveContext(question: string, limit = 4): RetrievedChunk[] {
  const tokens = tokenize(question);
  if (tokens.length === 0) return [];

  const all: RetrievedChunk[] = [];
  for (const { name, rag } of DOMAINS) {
    for (const chunk of rag.chunks ?? []) {
      const { score, matched } = scoreChunk(tokens, chunk);
      if (score > 0) all.push({ chunk, domain: name, score, matchedTokens: matched });
    }
  }

  const domainOrder = (d: string) => DOMAINS.findIndex((x) => x.name === d);
  all.sort(
    (a, b) =>
      b.score - a.score ||
      domainOrder(a.domain) - domainOrder(b.domain) ||
      a.chunk.id.localeCompare(b.chunk.id),
  );
  return all.slice(0, Math.max(1, limit));
}

// ── Estado vivo de la app (facts con origen, NUNCA inventados) ──

export interface StateFact {
  fact: string;
  /** Origen del fact: 'app:career', 'app:vocab', 'app:fitness'… */
  source: string;
}

const DAY_MS = 86_400_000;
const todayIso = () => new Date().toISOString().slice(0, 10);

/**
 * Lectura SSR-safe de los stores clave. Cada bloque va en try/catch: si un
 * store no está disponible (SSR, entorno de test), se omite — jamás se
 * fabrica un fact. Sin datos → array (más corto, nunca falso).
 */
export function buildAppStateFacts(): StateFact[] {
  const facts: StateFact[] = [];
  const today = todayIso();

  // Carrera: aplicaciones activas + seguimientos vencidos.
  try {
    const apps = useCareerStore.getState().applications;
    const active = apps.filter((a) => a.stage !== 'Cerrado');
    if (apps.length > 0) {
      facts.push({
        fact: `${active.length} aplicaciones activas de ${apps.length} en el pipeline laboral`,
        source: 'app:career',
      });
    }
    const overdue = active.filter((a) => a.followUpDateIso && a.followUpDateIso <= today);
    if (overdue.length > 0) {
      const nombres = overdue.slice(0, 3).map((a) => a.companyName).join(', ');
      facts.push({
        fact: `${overdue.length} seguimiento${overdue.length > 1 ? 's' : ''} vencido${overdue.length > 1 ? 's' : ''} (${nombres})`,
        source: 'app:career',
      });
    }
  } catch { /* store no disponible en este entorno */ }

  // Idiomas: tarjetas SR vencidas (cálculo barato sobre progress.items) + racha.
  try {
    const { byLanguage, activityDates } = useVocabularyStore.getState();
    const labels: Record<string, string> = { de: 'alemán', en: 'inglés' };
    for (const [lang, label] of Object.entries(labels)) {
      const items = Object.values(byLanguage[lang]?.items ?? {});
      const due = items.filter((s) => {
        if (!s.lastReviewed) return false;
        const elapsed = Math.floor((Date.now() - new Date(`${s.lastReviewed}T00:00:00Z`).getTime()) / DAY_MS);
        return elapsed >= Math.max(1, Math.floor(s.intervalDays ?? 1));
      }).length;
      if (due > 0) {
        facts.push({ fact: `${due} tarjetas de ${label} vencidas de repaso`, source: 'app:vocab' });
      }
    }
    const streak = computeStreakDays(activityDates ?? []);
    if (streak > 0) {
      facts.push({ fact: `Racha de estudio de idiomas: ${streak} día${streak > 1 ? 's' : ''}`, source: 'app:languages' });
    }
  } catch { /* store no disponible */ }

  // Idiomas: errores de lección listos para reforzar (SM-2 de errores).
  try {
    const de = countDueErrors('de');
    const en = countDueErrors('en');
    const total = de + en;
    if (total > 0) {
      facts.push({
        fact: `${total} errores de idioma listos para reforzar (${de} alemán, ${en} inglés)`,
        source: 'app:lang-errors',
      });
    }
  } catch { /* store no disponible */ }

  // Fitness: programa activo y semana actual.
  try {
    const { programId, activeProgramIds, currentWeek } = useActiveProgramStore.getState();
    if (programId) {
      facts.push({
        fact: `Programa activo: ${programId} (semana ${currentWeek}, ${activeProgramIds?.length ?? 1} en paralelo)`,
        source: 'app:fitness',
      });
    }
  } catch { /* store no disponible */ }

  // Cardio: últimas 3 sesiones registradas (getCardioHistory ya es SSR-safe).
  try {
    const cardio = getCardioHistory().slice(0, 3);
    if (cardio.length > 0) {
      facts.push({
        fact: `Cardio reciente: ${cardio.map((s) => `${s.routineTitle} (${s.dateIso})`).join(' · ')}`,
        source: 'app:cardio',
      });
    }
  } catch { /* sin historial */ }

  return facts;
}

/** Keywords por origen de fact — para decidir qué facts son relevantes a la pregunta. */
const FACT_KEYWORDS: Record<string, string[]> = {
  'app:career': [
    'career', 'laboral', 'empleo', 'trabajo', 'puesto', 'vacante', 'aplicacion', 'candidatura',
    'pipeline', 'entrevista', 'cv', 'curriculum', 'seguimiento', 'follow', 'oferta', 'empresa',
    'reclutador', 'postulacion',
  ],
  'app:vocab': [
    'idioma', 'aleman', 'german', 'ingles', 'english', 'vocabulario', 'tarjeta', 'repaso',
    'vencida', 'srs', 'spaced',
  ],
  'app:lang-errors': [
    'idioma', 'aleman', 'german', 'ingles', 'english', 'error', 'refuerzo', 'fallo', 'repaso',
    'ejercicio', 'leccion',
  ],
  'app:languages': [
    'idioma', 'estudio', 'estudiar', 'racha', 'aleman', 'ingles', 'sesion', 'minutos',
  ],
  'app:fitness': [
    'fitness', 'programa', 'programacion', 'entrenamiento', 'entrenar', 'gym', 'gimnasio',
    'fuerza', 'semana', 'rutina', 'sesion', 'min-max', 'minmax',
  ],
  'app:cardio': [
    'cardio', 'cardiovascular', 'caminata', 'caminar', 'bici', 'rower', 'comba', 'liss',
    'aerobico', 'zona2',
  ],
};

function relevantFacts(question: string, facts: StateFact[]): string[] {
  const q = norm(question);
  return facts
    .filter((f) => (FACT_KEYWORDS[f.source] ?? []).some((kw) => q.includes(norm(kw))))
    .map((f) => f.fact);
}

// ── Respuesta extractiva local ──

export interface ChunkCitation {
  chunkId: string;
  sourceId: string;
  locator: string;
}

export interface ContextAnswer {
  answer: string;
  citations: ChunkCitation[];
  /** Facts de estado relevantes a la pregunta (strings). */
  stateFacts: string[];
  confidence: 'grounded' | 'partial' | 'insufficient';
}

/** Limpia markdown/LaTeX de los summaries para lectura en texto plano. */
function cleanSummary(raw: string): string {
  return raw
    .replace(/\*\*/g, '')
    .replace(/\$/g, '')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\s*\n+\s*/g, ' ')
    .trim();
}

/** Extracto determinista: primeras frases hasta ~maxChars, sin cortar palabras. */
function excerpt(raw: string, maxChars = 240): string {
  const text = cleanSummary(raw);
  if (text.length <= maxChars) return text;
  const cut = text.slice(0, maxChars);
  const sentenceEnd = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  if (sentenceEnd > maxChars / 2) return cut.slice(0, sentenceEnd + 1);
  const wordEnd = cut.lastIndexOf(' ');
  return `${cut.slice(0, wordEnd > 0 ? wordEnd : maxChars)}…`;
}

/** Etiqueta de localizador: "ch. 2 · p. 61 · § sección" (lo que exista). */
function locatorLabel(locator: RagLocator): string {
  const parts: string[] = [];
  if (locator?.chapter !== undefined && locator.chapter !== null && `${locator.chapter}` !== '') {
    parts.push(`ch. ${locator.chapter}`);
  }
  if (typeof locator?.page === 'number') parts.push(`p. ${locator.page}`);
  if (locator?.section) parts.push(`§ ${locator.section.replace(/"/g, '').slice(0, 48)}`);
  return parts.join(' · ');
}

function toCitation(r: RetrievedChunk): ChunkCitation {
  return { chunkId: r.chunk.id, sourceId: r.chunk.sourceId, locator: locatorLabel(r.chunk.locator) };
}

const INSUFFICIENT_ANSWER =
  'No puedo responder eso con confianza: evidencia insuficiente en tu base de conocimiento. Prueba con términos de fitness, laboral, idiomas o diseño.';

/**
 * Respuesta SIEMPRE local/extractiva (nunca inventa):
 *   grounded    — score ≥ 3 y ≥ 50 % de tokens cubiertos → 2-4 chunks + citas.
 *   partial     — evidencia débil (score 2 o cobertura baja) → mejor chunk + nota.
 *   insufficient— sin evidencia real → respuesta de cortesía, cero contenido.
 * Los stateFacts relevantes se incluyen en grounded y partial (siempre citando
 * origen en el propio texto del fact).
 */
export function answerContextually(question: string): ContextAnswer {
  const retrieved = retrieveContext(question, 4);
  const tokens = tokenize(question);
  const best = retrieved[0];
  const coverage = best && tokens.length > 0 ? best.matchedTokens.length / tokens.length : 0;

  // Insuficiente: nada, evidencia débil (score < 2) o cobertura trivial (< 34 %).
  if (!best || best.score < 2 || coverage < 0.34) {
    return { answer: INSUFFICIENT_ANSWER, citations: [], stateFacts: [], confidence: 'insufficient' };
  }

  const facts = relevantFacts(question, buildAppStateFacts());

  if (best.score >= 3 && coverage >= 0.5) {
    let chunks = retrieved.filter((r) => r.score >= 2);
    if (chunks.length < 2) chunks = retrieved.slice(0, 2);
    const body = chunks
      .slice(0, 4)
      .map((r) => `• ${excerpt(r.chunk.summary)} [${r.chunk.sourceId} ${locatorLabel(r.chunk.locator)}]`)
      .join('\n');
    return { answer: body, citations: chunks.slice(0, 4).map(toCitation), stateFacts: facts, confidence: 'grounded' };
  }

  // Partial: mejor chunk + nota explícita de qué falta.
  const nota = `Evidencia parcial (coincidencias: ${best.matchedTokens.join(', ')}). Reformula con términos más específicos si esto no responde tu duda.`;
  return {
    answer: `• ${excerpt(best.chunk.summary)} [${best.chunk.sourceId} ${locatorLabel(best.chunk.locator)}]\n\n${nota}`,
    citations: [toCitation(best)],
    stateFacts: facts,
    confidence: 'partial',
  };
}

// ── Camino con Worker IA (opcional, con red de seguridad) ──

/**
 * Si PUBLIC_WORKER_URL existe, delega el redactado al Worker IA pasándole
 * SOLO los chunks recuperados (requestAiChat no acepta systemPrompt: la
 * instrucción anti-alucinación viaja en el propio message) y exigiendo citar
 * chunk ids y decir "no sé" sin evidencia. Cualquier fallo o fallback
 * determinista del worker → answerContextually (local).
 */
export async function askWithContext(question: string): Promise<ContextAnswer> {
  const local = answerContextually(question); // extractivo SIEMPRE primero

  // Anti-alucinación: sin evidencia local no se consulta al LLM.
  if (local.confidence === 'insufficient') return local;

  const workerUrl =
    typeof import.meta !== 'undefined' ? (import.meta as any).env?.PUBLIC_WORKER_URL : undefined;
  if (!workerUrl) return local;

  try {
    const retrieved = retrieveContext(question, 4);
    const contextBlock = retrieved
      .map((r) => `[${r.chunk.id}] fuente=${r.chunk.sourceId} ${locatorLabel(r.chunk.locator)}: ${excerpt(r.chunk.summary, 400)}`)
      .join('\n');
    const message =
      `Responde SOLO con el contexto RAG siguiente. Cita los chunk ids [id] que uses. ` +
      `Si el contexto no basta, responde exactamente "no sé" — no inventes.\n\n` +
      `${contextBlock}\n\nPregunta: ${question}`;
    const res = await requestAiChat(message, undefined, {
      ragChunkIds: retrieved.map((r) => r.chunk.id),
      stateFacts: local.stateFacts,
    }, 'AG-INTE');

    // Fallback determinista del worker (offline) → quedamos con la respuesta local.
    if (res.isDeterministicFallback || res.degraded) return local;
    return { ...local, answer: res.reply };
  } catch {
    return local; // red caída o respuesta inválida → extractivo local
  }
}
