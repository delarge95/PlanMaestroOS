// src/lib/languages/bookProgress.ts — Traslado del libro a la app: registro
// de estudio por libro/unidad + progreso declarado por el usuario (honest:
// la app no inventa totales de unidades; cuenta lo que el usuario registra).

import { useVocabularyStore } from './vocabularyStore';
import { LANGUAGE_BOOKS, getBook, bookPdfPath } from '../../data/languages/books';

export interface BookProgressEntry {
  bookId: string;
  /** Etiquetas de unidades registradas (p.ej. 'Unidad 12', 'p. 34-35'). */
  unitsCovered: string[];
  lastUnit?: string;
  lastStudiedIso: string;
  language: string;
}

const KEY = 'languages-book-progress-v1';

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getAllBookProgress(): Record<string, BookProgressEntry> {
  if (!isBrowser()) return {};
  try {
    const parsed = JSON.parse(window.localStorage.getItem(KEY) || '{}');
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, BookProgressEntry>) : {};
  } catch {
    return {};
  }
}

/**
 * Registra estudio de una unidad de libro: actualiza el progreso del libro Y
 * deja la sesión en el histórico de estudio (studySessions del store de
 * idiomas) — una sola llamada, dos fuentes de verdad coherentes.
 */
export function logBookStudy(input: {
  bookId: string;
  unitLabel: string;
  minutes: number;
  now?: Date;
}): BookProgressEntry | null {
  if (!isBrowser()) return null;
  const book = getBook(input.bookId);
  if (!book) return null;
  const now = input.now ?? new Date();
  const iso = now.toISOString().slice(0, 10);
  const all = getAllBookProgress();
  const prev = all[input.bookId];
  const units = prev?.unitsCovered.includes(input.unitLabel)
    ? prev.unitsCovered
    : [...(prev?.unitsCovered ?? []), input.unitLabel];
  const entry: BookProgressEntry = {
    bookId: input.bookId,
    unitsCovered: units,
    lastUnit: input.unitLabel,
    lastStudiedIso: iso,
    language: book.language,
  };
  all[input.bookId] = entry;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(all));
  } catch { /* sin storage */ }

  // Histórico de estudio (racha/analítica) con el idioma del libro.
  useVocabularyStore.getState().logStudySession({
    language: book.language,
    minutes: Math.max(1, Math.round(input.minutes)),
  });

  return entry;
}

/** Libros registrados con su progreso (para la UI de Hoy). */
export function booksWithProgress(language?: 'de' | 'en') {
  const progress = getAllBookProgress();
  return LANGUAGE_BOOKS
    .filter((b) => !language || b.language === language)
    .map((b) => ({ book: b, progress: progress[b.id], pdfPath: bookPdfPath(b) }));
}
