// src/lib/languages/vocabularyStore.ts — Persistencia de progreso de idiomas (AG-DE)
//
// Store zustand persist ('languages-vocabulary-v1') que guarda SOLO progreso:
// estado SR por ítem de vocabulario, lecciones completadas, test de colocación,
// fechas de actividad para la racha real. El contenido (términos, traducciones,
// lecciones) vive en los datasets estáticos de cada idioma — aquí solo claves.
//
// API pública (consumible por AG-EN sin cambios):
//   - useVocabularyStore            store principal (recordReview/completeLesson/setPlacement/resetLanguage)
//   - computeStreakDays(dates, now) racha real (días consecutivos que terminan hoy o ayer)
//   - getDueQueue(catalog, progress, now) cola de repaso: vencidos primero (más retrasado arriba), luego nuevos
//   - getSchedulingFor(progress, itemId)  estado SR efectivo de un ítem (nuevo si no existe)

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import {
  initialScheduling,
  scheduleReview,
  type AcceptedQuality,
  type SrScheduling
} from './spacedRepetition';

export const VOCABULARY_STORAGE_KEY = 'languages-vocabulary-v1';

/** Progreso SR + curso de UN idioma. */
export interface LanguageProgress {
  /** Estado SM-2 por id de VocabularyItem (solo ítems ya tocados). */
  items: Record<string, SrScheduling>;
  /** Ids de Lesson completadas. */
  completedLessons: string[];
  /** Unidad colocada por el PlacementTest (undefined = sin nivelar). */
  placementUnitId?: string;
}

function emptyLanguageProgress(): LanguageProgress {
  return { items: {}, completedLessons: [] };
}

/** Sesión de estudio registrada (log histórico — analítica y reglas futuras). */
export interface StudySessionLog {
  dateIso: string;
  minutes: number;
  cardsReviewed?: number;
  lessonsCompleted?: number;
  language: string;
}

export interface LanguagesProgressData {
  byLanguage: Record<string, LanguageProgress>;
  /** Fechas ISO YYYY-MM-DD con cualquier actividad de estudio (racha real). */
  activityDates: string[];
  /** Histórico de sesiones de estudio (append-only, additive al shape). */
  studySessions: StudySessionLog[];
}

// --- Lógica pura (testeable sin DOM/zustand) ---

function toISODate(now: Date): string {
  return now.toISOString().split('T')[0];
}

/**
 * Racha real: número de días consecutivos de actividad que terminan hoy.
 * Si hoy no hay actividad pero sí ayer, la racha sigue viva (se rompe al
 * acabar el día sin estudiar). Fechas duplicadas/desordenadas se toleran.
 */
export function computeStreakDays(activityDates: readonly string[], now: Date = new Date()): number {
  const unique = Array.from(new Set(activityDates)).sort();
  if (unique.length === 0) return 0;

  const todayUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const dayMs = 86_400_000;
  const toUtc = (iso: string) => new Date(`${iso}T00:00:00Z`).getTime();

  const last = toUtc(unique[unique.length - 1]);
  const daysSinceLast = Math.round((todayUtc - last) / dayMs);
  if (daysSinceLast > 1 || daysSinceLast < 0) return 0;

  let streak = 1;
  for (let i = unique.length - 1; i > 0; i--) {
    if (toUtc(unique[i]) - toUtc(unique[i - 1]) === dayMs) streak++;
    else break;
  }
  return streak;
}

/** Estado SR efectivo de un ítem (nuevo → tarjeta inicial SM-2). */
export function getSchedulingFor(
  progress: LanguageProgress | undefined,
  itemId: string
): SrScheduling {
  return progress?.items[itemId] ?? initialScheduling();
}

export interface DueCatalogItem {
  id: string;
  lastReviewed?: string;
  intervalDays?: number;
}

/**
 * Cola de repaso de un idioma como IDS ordenados: primero vencidos por días de
 * retraso descendente, después tarjetas nuevas (nunca vistas). Los no vencidos
 * NO entran. El estado de repaso vive SIEMPRE en el store (`progress.items`) —
 * el catálogo estático solo aporta ids.
 */
export function getDueQueue(
  catalog: readonly DueCatalogItem[],
  progress: LanguageProgress | undefined,
  now: Date = new Date()
): string[] {
  const todayUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const dayMs = 86_400_000;

  const seen = new Set<string>();
  const dueNew: DueCatalogItem[] = [];
  const dueOverdue: { id: string; delayDays: number }[] = [];

  for (const item of catalog) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);

    const st = progress?.items[item.id];
    if (!st || !st.lastReviewed) {
      dueNew.push(item); // tarjeta nueva (o con estado corrupto sin fecha): aprendible ahora
      continue;
    }
    const from = new Date(`${st.lastReviewed}T00:00:00Z`).getTime();
    const elapsed = Math.round((todayUtc - from) / dayMs);
    const delay = elapsed - Math.floor(st.intervalDays ?? 1);
    if (delay >= 0) dueOverdue.push({ id: item.id, delayDays: delay });
  }

  dueOverdue.sort((a, b) => b.delayDays - a.delayDays);
  const overdueIds = dueOverdue.map((d) => d.id);
  return [...overdueIds, ...dueNew.map((n) => n.id)];
}

// --- Store ---

interface LanguagesProgressState extends LanguagesProgressData {
  recordReview: (language: string, itemId: string, quality: AcceptedQuality, now?: Date) => void;
  completeLesson: (language: string, lessonId: string, now?: Date) => void;
  /** Registra una sesión de estudio (minutos reales o estimados de la lección). */
  logStudySession: (entry: Omit<StudySessionLog, 'dateIso'> & { dateIso?: string; now?: Date }) => void;
  setPlacement: (language: string, unitId: string) => void;
  resetLanguage: (language: string) => void;
}

export function initialLanguagesProgressState(): LanguagesProgressData {
  return { byLanguage: {}, activityDates: [], studySessions: [] };
}

/** Saneado defensivo al rehidratar (patrón cardioStore). */
function sanitizeLanguageProgress(raw: unknown): LanguageProgress {
  const out = emptyLanguageProgress();
  if (!raw || typeof raw !== 'object') return out;
  const c = raw as Partial<LanguageProgress>;
  if (c.items && typeof c.items === 'object') {
    for (const [id, s] of Object.entries(c.items)) {
      const st = s as Partial<SrScheduling>;
      if (typeof st.easeFactor === 'number' && typeof st.intervalDays === 'number' && typeof st.repetitions === 'number') {
        out.items[id] = {
          easeFactor: st.easeFactor,
          intervalDays: st.intervalDays,
          repetitions: st.repetitions,
          ...(typeof st.lastReviewed === 'string' ? { lastReviewed: st.lastReviewed } : {})
        };
      }
    }
  }
  if (Array.isArray(c.completedLessons)) {
    out.completedLessons = c.completedLessons.filter((l): l is string => typeof l === 'string');
  }
  if (typeof c.placementUnitId === 'string') out.placementUnitId = c.placementUnitId;
  return out;
}

function sanitizeAll(raw: unknown): LanguagesProgressData {
  const data = initialLanguagesProgressState();
  if (!raw || typeof raw !== 'object') return data;
  const c = raw as Partial<LanguagesProgressData>;
  if (c.byLanguage && typeof c.byLanguage === 'object') {
    for (const [lang, p] of Object.entries(c.byLanguage)) {
      data.byLanguage[lang] = sanitizeLanguageProgress(p);
    }
  }
  if (Array.isArray(c.studySessions)) {
    data.studySessions = c.studySessions.filter(
      (e): e is StudySessionLog =>
        Boolean(e) && typeof e.dateIso === 'string' && typeof e.minutes === 'number' && e.minutes > 0
    );
  }
  if (Array.isArray(c.activityDates)) {
    data.activityDates = c.activityDates.filter((d): d is string => typeof d === 'string');
  }
  return data;
}

/** Storage real en navegador; no-op en Node/tests/SSR (evita crash del persist). */
const NOOP_STORAGE: Storage = {
  length: 0,
  clear: () => {},
  getItem: () => null,
  key: () => null,
  removeItem: () => {},
  setItem: () => {}
};

function safeLocalStorage(): Storage {
  try {
    return typeof localStorage !== 'undefined' ? localStorage : NOOP_STORAGE;
  } catch {
    return NOOP_STORAGE;
  }
}

export const useVocabularyStore = create<LanguagesProgressState>()(
  persist(
    (set) => ({
      ...initialLanguagesProgressState(),

      logStudySession: ({ dateIso, now = new Date(), ...entry }) =>
        set((s) => ({
          studySessions: [
            ...s.studySessions,
            { ...entry, dateIso: dateIso ?? toISODate(now) }
          ]
        })),

      recordReview: (language, itemId, quality, now = new Date()) =>
        set((s) => {
          const lang = s.byLanguage[language] ?? emptyLanguageProgress();
          const current = lang.items[itemId] ?? initialScheduling();
          const next: LanguageProgress = {
            ...lang,
            items: { ...lang.items, [itemId]: scheduleReview(current, quality, now) }
          };
          const date = toISODate(now);
          return {
            byLanguage: { ...s.byLanguage, [language]: next },
            activityDates: s.activityDates.includes(date) ? s.activityDates : [...s.activityDates, date]
          };
        }),

      completeLesson: (language, lessonId, now = new Date()) =>
        set((s) => {
          const lang = s.byLanguage[language] ?? emptyLanguageProgress();
          if (lang.completedLessons.includes(lessonId)) return s;
          const next: LanguageProgress = {
            ...lang,
            completedLessons: [...lang.completedLessons, lessonId]
          };
          const date = toISODate(now);
          return {
            byLanguage: { ...s.byLanguage, [language]: next },
            activityDates: s.activityDates.includes(date) ? s.activityDates : [...s.activityDates, date]
          };
        }),

      setPlacement: (language, unitId) =>
        set((s) => {
          const lang = s.byLanguage[language] ?? emptyLanguageProgress();
          return {
            byLanguage: { ...s.byLanguage, [language]: { ...lang, placementUnitId: unitId } }
          };
        }),

      resetLanguage: (language) =>
        set((s) => ({
          byLanguage: { ...s.byLanguage, [language]: emptyLanguageProgress() }
        }))
    }),
    {
      name: VOCABULARY_STORAGE_KEY,
      version: 1,
      storage: createJSONStorage(safeLocalStorage),
      partialize: (s) => ({ byLanguage: s.byLanguage, activityDates: s.activityDates }),
      migrate: (persisted) => {
        const sanitized = sanitizeAll(persisted);
        return { ...sanitized } as LanguagesProgressState;
      }
    }
  )
);
