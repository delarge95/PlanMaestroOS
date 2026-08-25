// src/lib/languages/spacedRepetition.ts — Motor de Repetición Espaciada SR-2 (SM-2 real)
//
// IMPLEMENTA el algoritmo SM-2 (SuperMemo 2, Woźniak 1987) con easeFactor REAL:
// el intervalo crece de forma multiplicativa según el ease del ítem, y el ease
// sube/baja acotado según la calidad de cada repaso. Sustituye la escalera fija
// anterior (1→3→7→14→30) que ignoraba `easeFactor`.
//
// API pública (AG-DE, consumible por AG-EN y cualquier idioma):
//   - type ReviewQuality        = 'again' | 'hard' | 'good' | 'easy'
//   - type SrScheduling         = { easeFactor, intervalDays, repetitions, lastReviewed }
//   - updateEaseFactor(ease, quality)        → nuevo ease acotado [EASE_MIN, EASE_MAX]
//   - getNextInterval(interval, quality, ease?) → próximo intervalo en días (0 = relearn hoy)
//   - scheduleReview(state, quality, now?)   → estado SR completo tras un repaso
//   - updateVocabularyReview(item, quality, now?) → VocabularyItem actualizado (compat legacy)
//   - isDue(item, now?)                      → ¿la tarjeta está vencida para repasar?
//
// Reglas del algoritmo (documentadas para tests y para AG-EN):
//   1. Mapeo de calidad a la escala SM-2: again→2, hard→3, good→4, easy→5.
//      El alias legacy 'review' equivale a 'again' (compatibilidad con la API anterior).
//   2. Ease (EF'): EF' = EF + (0.1 − (5−q) × (0.08 + (5−q) × 0.02)), acotado a [1.3, 2.8].
//      Con q=4 (good) el ease NO cambia (delta 0); hard baja 0.14; easy sube 0.1; again baja 0.32.
//   3. Intervalo multiplicativo (usa el ease YA actualizado, convención SM-2):
//      - again → 0 días (paso de relearning: repetición corta, vence el mismo día),
//        repetitions → 0.
//      - good  → si prev < 1: 1 día (graduación). Si no: max(prev + 1, round(prev × EF')).
//      - hard  → max(1, round(prev × HARD_FACTOR)) con HARD_FACTOR = 1.2 (crece poco).
//      - easy  → max(prev + 2, round(prev × EF' × EASY_BONUS)) con EASY_BONUS = 1.3.
//   4. Progresión de ejemplo con ease 2.5 y siempre 'good': 1 → 3 → 8 → 20 → 50 días.
//
// Precisión temporal: los intervalos viven en DÍAS (float permitido). El paso corto
// de relearning se aproxima a "vence hoy" (intervalDays 0); si en el futuro se
// necesita precisión de minutos, el store puede multiplicar sin cambiar este contrato.

import type { VocabularyItem } from '../../data/languages/types';

/** Calidad de repaso en la escala de 4 botones (Anki-style). */
export type ReviewQuality = 'again' | 'hard' | 'good' | 'easy';

/** Alias de la API anterior; se normaliza a 'again'. */
export type LegacyReviewQuality = 'review';

/** Calidades aceptadas por la API (nuevas + legacy). */
export type AcceptedQuality = ReviewQuality | LegacyReviewQuality;

/** Estado SR completo de una tarjeta (lo que persiste el store). */
export interface SrScheduling {
  /** Factor de facilidad SM-2 ∈ [EASE_MIN, EASE_MAX]. */
  easeFactor: number;
  /** Intervalo actual en días. 0 = paso corto de relearning (vence hoy). */
  intervalDays: number;
  /** Repeticiones correctas consecutivas (again lo resetea a 0). */
  repetitions: number;
  /** Fecha ISO (YYYY-MM-DD) del último repaso; undefined = nunca repasado. */
  lastReviewed?: string;
}

// --- Constantes del algoritmo (exportadas para tests y documentación) ---

export const EASE_MIN = 1.3;
export const EASE_MAX = 2.8;
export const EASE_DEFAULT = 2.5;
/** Paso de relearning: 0 días = repetición corta, vence el mismo día. */
export const RELEARN_INTERVAL_DAYS = 0;
/** Multiplicador de intervalo cuando el repaso fue costoso ('hard'). */
export const HARD_FACTOR = 1.2;
/** Bono multiplicador cuando el repaso fue trivialmente fácil ('easy'). */
export const EASY_BONUS = 1.3;

/** Mapeo calidad → q de la escala SM-2 (0–5). */
const QUALITY_TO_Q: Record<AcceptedQuality, number> = {
  again: 2,
  hard: 3,
  good: 4,
  easy: 5,
  review: 2 // alias legacy de 'again'
};

function normalizeQuality(quality: AcceptedQuality): ReviewQuality {
  return quality === 'review' ? 'again' : quality;
}

function toISODate(now: Date): string {
  return now.toISOString().split('T')[0];
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

// --- Núcleo SM-2 ---

/**
 * Actualiza el easeFactor con la fórmula SM-2 y lo acota a [EASE_MIN, EASE_MAX].
 * Fórmula: EF' = EF + (0.1 − (5−q) × (0.08 + (5−q) × 0.02))
 */
export function updateEaseFactor(currentEase: number, quality: AcceptedQuality): number {
  const q = QUALITY_TO_Q[quality];
  const delta = 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02);
  const base = Number.isFinite(currentEase) && currentEase > 0 ? currentEase : EASE_DEFAULT;
  return Number(clamp(base + delta, EASE_MIN, EASE_MAX).toFixed(2));
}

/**
 * Próximo intervalo en días para una calidad dada (regla 3 del encabezado).
 * `easeFactor` es el ease ANTES del repaso: se actualiza primero (convención SM-2)
 * y el intervalo usa el ease resultante.
 */
export function getNextInterval(
  currentInterval: number,
  quality: AcceptedQuality,
  easeFactor: number = EASE_DEFAULT
): number {
  const q = normalizeQuality(quality);
  const easeAfter = updateEaseFactor(easeFactor, q);
  const prev = Number.isFinite(currentInterval) && currentInterval >= 0 ? currentInterval : 1;

  if (q === 'again') {
    // Repetición corta: la tarjeta vuelve a estar vencida el mismo día.
    return RELEARN_INTERVAL_DAYS;
  }

  if (q === 'hard') {
    return Math.max(1, Math.round(Math.max(prev, 1) * HARD_FACTOR));
  }

  if (q === 'easy') {
    const base = Math.max(prev, 1);
    return Math.max(base + 2, Math.round(base * easeAfter * EASY_BONUS));
  }

  // 'good'
  if (prev < 1) return 1; // graduación del paso de relearning
  return Math.max(prev + 1, Math.round(prev * easeAfter));
}

/**
 * Aplica un repaso completo y devuelve el nuevo estado SR.
 * Función pura: `now` inyectable para tests deterministas.
 */
export function scheduleReview(
  state: SrScheduling,
  quality: AcceptedQuality,
  now: Date = new Date()
): SrScheduling {
  const q = normalizeQuality(quality);
  const easeFactor = updateEaseFactor(state.easeFactor, q);
  const intervalDays = getNextInterval(state.intervalDays, q, state.easeFactor);
  const repetitions = q === 'again' ? 0 : state.repetitions + 1;
  return {
    easeFactor,
    intervalDays,
    repetitions,
    lastReviewed: toISODate(now)
  };
}

/**
 * Estado SR inicial para una tarjeta nueva (o al reactivar una sin historial).
 */
export function initialScheduling(easeFactor: number = EASE_DEFAULT): SrScheduling {
  return { easeFactor, intervalDays: 1, repetitions: 0 };
}

// --- Integración con VocabularyItem (API compatible con consumidores actuales) ---

/**
 * Actualiza un VocabularyItem tras un repaso (mantiene id/term/translation/…).
 * Compatibilidad legacy: 'review' sigue aceptándose y equivale a 'again'.
 * Nota: VocabularyItem no tiene campo `repetitions` (contrato compartido READ);
 * la cuenta de repeticiones la mantiene el store (vocabularyStore) por id.
 */
export function updateVocabularyReview(
  item: VocabularyItem,
  quality: AcceptedQuality,
  now: Date = new Date()
): VocabularyItem {
  const q = normalizeQuality(quality);
  const easeFactor = updateEaseFactor(item.easeFactor, q);
  const intervalDays = getNextInterval(item.intervalDays ?? 1, q, item.easeFactor);
  return {
    ...item,
    easeFactor,
    intervalDays,
    lastReviewed: toISODate(now)
  };
}

// --- Vencimiento (para la cola de repaso del store) ---

function daysBetween(fromISO: string, now: Date): number {
  const from = new Date(`${fromISO}T00:00:00Z`).getTime();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return (today - from) / 86_400_000;
}

/**
 * ¿La tarjeta está vencida? Una tarjeta nueva (sin lastReviewed) siempre está
 * vencida (es aprendizaje nuevo). Una tarjeta repasada vence cuando han pasado
 * `intervalDays` desde `lastReviewed` (intervalo 0 = vence el mismo día).
 */
export function isDue(item: Pick<VocabularyItem, 'lastReviewed' | 'intervalDays'>, now: Date = new Date()): boolean {
  if (!item.lastReviewed) return true;
  const interval = item.intervalDays ?? 1;
  return daysBetween(item.lastReviewed, now) >= Math.floor(interval);
}
