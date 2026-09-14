// src/lib/fitness/cardioHistory.ts — Escritor de `cardio_session_history`.
//
// Deuda T2 cerrada: la clave existía (la lee userStateFeed para las reglas de
// cardio) pero NADIE la escribía → feed siempre vacío. Este módulo escribe
// entradas compatibles con RawLoggedWorkout (date display es-ES +
// completedSets) para que el motor de reglas las consuma sin cambios:
// weight=0 (sin carga), reps=minutos (duración documentada en el dato).

const KEY = 'cardio_session_history';

export interface CardioSessionInput {
  /** Tipo/actividad: 'Caminata LISS', 'Bici', 'Rower', 'Comba', 'Otro'… */
  type: string;
  minutes: number;
  rpe?: number;
  /** Default: hoy. Formato YYYY-MM-DD. */
  dateIso?: string;
}

export interface LoggedCardioSession {
  id: string;
  date: string; // display es-ES ("mié 9 sept") — igual que fitapp_workout_history
  dateIso: string;
  routineTitle: string;
  durationMinutes: number;
  rpe?: number;
  exercises: Array<{ name: string; completedSets: Array<{ weight: number; reps: number }> }>;
}

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getCardioHistory(): LoggedCardioSession[] {
  if (!isBrowser()) return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(KEY) || '[]');
    return Array.isArray(parsed) ? (parsed as LoggedCardioSession[]) : [];
  } catch {
    return [];
  }
}

/** Registra una sesión de cardio (prepend). Falla silenciosa fuera de browser. */
export function logCardioSession(input: CardioSessionInput): LoggedCardioSession | null {
  if (!isBrowser()) return null;
  const minutes = Math.max(1, Math.round(input.minutes));
  const dateIso = input.dateIso ?? new Date().toISOString().slice(0, 10);
  const entry: LoggedCardioSession = {
    id: `cardio_${Date.now().toString(36)}`,
    date: new Date(`${dateIso}T12:00:00`).toLocaleDateString('es-ES', {
      weekday: 'short', day: 'numeric', month: 'short',
    }),
    dateIso,
    routineTitle: `${input.type} — ${minutes} min${input.rpe ? ` (RPE ${input.rpe})` : ''}`,
    durationMinutes: minutes,
    ...(input.rpe ? { rpe: input.rpe } : {}),
    exercises: [
      { name: input.type, completedSets: [{ weight: 0, reps: minutes }] },
    ],
  };
  try {
    const history = [entry, ...getCardioHistory()];
    window.localStorage.setItem(KEY, JSON.stringify(history));
    return entry;
  } catch {
    return null;
  }
}
