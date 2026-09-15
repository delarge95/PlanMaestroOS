// src/lib/languages/errorStore.ts — Registro y refuerzo inteligente de errores.
//
// Cada respuesta incorrecta en una lección (inglés o alemán) queda registrada
// como ítem de refuerzo con programación espaciada estilo SM-2 simplificado:
//   fallar de nuevo → intervalo 1 día
//   acertar         → intervalo × 2.5 (tope 30 días); 3 aciertos seguidos
//                     gradúan el ítem (dominado, sale de la cola)
// Proactividad: getDueErrors() alimenta Hoy y el motor de sugerencias.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ErrorItem {
  id: string; // `${language}:${exerciseId}`
  language: string;
  lessonId?: string;
  exerciseId: string;
  prompt: string;
  correctAnswer: string;
  lastUserAnswer?: string;
  timesWrong: number;
  timesRight: number;
  /** ISO date del último evento. */
  lastSeenIso: string;
  /** Próxima fecha de repaso (YYYY-MM-DD). */
  nextReviewIso: string;
  intervalDays: number;
  graduated: boolean;
}

interface ErrorReviewState {
  errors: Record<string, ErrorItem>;
  recordError: (input: {
    language: string;
    exerciseId: string;
    lessonId?: string;
    prompt: string;
    correctAnswer: string;
    userAnswer: string;
    now?: Date;
  }) => void;
  /** Resultado de un repaso: true acertó, false falló de nuevo. */
  reviewResult: (id: string, right: boolean, now?: Date) => void;
  /** Limpieza manual de un ítem. */
  dismiss: (id: string) => void;
}

const toISODate = (d: Date) => d.toISOString().slice(0, 10);
const addDays = (iso: string, days: number) => {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + days);
  return toISODate(d);
};

export const useErrorReviewStore = create<ErrorReviewState>()(
  persist(
    (set) => ({
      errors: {},

      recordError: ({ language, exerciseId, lessonId, prompt, correctAnswer, userAnswer, now = new Date() }) =>
        set((s) => {
          const id = `${language}:${exerciseId}`;
          const today = toISODate(now);
          const prev = s.errors[id];
          const item: ErrorItem = prev
            ? {
                ...prev,
                timesWrong: prev.timesWrong + 1,
                lastUserAnswer: userAnswer,
                lastSeenIso: today,
                nextReviewIso: addDays(today, 1), // fallar SIEMPRE re-programa a mañana
                intervalDays: 1,
                graduated: false,
              }
            : {
                id,
                language,
                lessonId,
                exerciseId,
                prompt,
                correctAnswer,
                lastUserAnswer: userAnswer,
                timesWrong: 1,
                timesRight: 0,
                lastSeenIso: today,
                nextReviewIso: addDays(today, 1),
                intervalDays: 1,
                graduated: false,
              };
          return { errors: { ...s.errors, [id]: item } };
        }),

      reviewResult: (id, right, now = new Date()) =>
        set((s) => {
          const prev = s.errors[id];
          if (!prev) return s;
          const today = toISODate(now);
          let item: ErrorItem;
          if (right) {
            const interval = Math.min(30, Math.max(1, Math.round(prev.intervalDays * 2.5)));
            item = {
              ...prev,
              timesRight: prev.timesRight + 1,
              lastSeenIso: today,
              intervalDays: interval,
              nextReviewIso: addDays(today, interval),
              graduated: prev.timesRight + 1 >= 3,
            };
          } else {
            item = {
              ...prev,
              timesWrong: prev.timesWrong + 1,
              lastSeenIso: today,
              intervalDays: 1,
              nextReviewIso: addDays(today, 1),
              graduated: false,
            };
          }
          return { errors: { ...s.errors, [id]: item } };
        }),

      dismiss: (id) =>
        set((s) => {
          const next = { ...s.errors };
          delete next[id];
          return { errors: next };
        }),
    }),
    { name: 'languages-error-review-v1' },
  ),
);

/** Errores vencidos para repasar (por idioma opcional), más retrasados primero. */
export function getDueErrors(language?: string, now: Date = new Date()): ErrorItem[] {
  const today = toISODate(now);
  return Object.values(useErrorReviewStore.getState().errors)
    .filter((e) => !e.graduated && (!language || e.language === language) && e.nextReviewIso <= today)
    .sort((a, b) => a.nextReviewIso.localeCompare(b.nextReviewIso) || b.timesWrong - a.timesWrong);
}

/** Conteo rápido para proactividad (Hoy / sugerencias). */
export function countDueErrors(language?: string, now?: Date): number {
  return getDueErrors(language, now).length;
}
