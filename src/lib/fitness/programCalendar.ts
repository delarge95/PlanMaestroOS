// src/lib/fitness/programCalendar.ts
// B1 (AG-FIT): modelo de calendario REAL para el tab Hoy.
//
// Reglas del modelo (decisiones documentadas en STATUS-fitness.md):
// 1. El día actual se deriva de la FECHA REAL del sistema (new Date()), nunca
//    hardcodeado.
// 2. El grid semanal entrena L-V (workoutDayIndex 1-5, igual que
//    src/data/schedules/scheduleData.ts); sábado = LISS, domingo = descanso.
// 3. Anclaje del programa: lunes de la semana de activeProgramStore.startedAt.
//    A partir de ahí, día efectivo del programa = días transcurridos reales
//    MENOS días postergados acumulados (postponedDays). Postergar corre TODO
//    el plan un día hacia el futuro (un día perdido hoy se recupera mañana).
// 4. Semana/día derivados se sincronizan con activeProgramStore
//    (currentWeek/currentDayId) en el montaje del tab Hoy; la navegación
//    manual del usuario no se sobreescribe después.
// Funciones puras (sin DOM) para testear con vitest.

export const DAY_NAMES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] as const;
export const DAY_SHORT = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'] as const;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function startOfDay(date: Date): Date {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return d;
}

/** Lunes (00:00) de la semana a la que pertenece `date`. */
export function startOfWeek(date: Date): Date {
  const d = startOfDay(date);
  const jsDay = d.getDay(); // 0=Dom..6=Sáb
  const shift = jsDay === 0 ? -6 : 1 - jsDay;
  d.setDate(d.getDate() + shift);
  return d;
}

/** 0=Lunes … 6=Domingo (para indexing L-V). */
export function weekdayIndex(date: Date): number {
  const jsDay = date.getDay();
  return jsDay === 0 ? 6 : jsDay - 1;
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function daysBetween(from: Date, to: Date): number {
  return Math.round((startOfDay(to).getTime() - startOfDay(from).getTime()) / MS_PER_DAY);
}

export function formatDateShort(date: Date): string {
  return `${date.getDate()} ${date.toLocaleDateString('es-ES', { month: 'short' })}`;
}

export function formatDateLong(date: Date): string {
  return date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
}

export interface ProgramCalendarInput {
  /** ISO (o Date) de arranque del programa (activeProgramStore.startedAt). */
  startedAt: string | Date | null | undefined;
  /** Postergaciones acumuladas (activeProgramStore.postponedDays). */
  postponedDays: number;
  /** Fecha "hoy" (inyectable para tests). Default: new Date(). */
  now?: Date;
}

export interface ProgramCalendarDay {
  /** Fecha real que ocupa ese día de programa. */
  date: Date;
  /** 0=Lunes … 6=Domingo dentro de la semana del programa. */
  weekdayIndex: number;
  /** workoutDayIndex del grid semanal (1-5 L-V); undefined si no hay entreno. */
  workoutDayIndex: number | undefined;
  /** Índice 0-based sobre `days[]` de la semana del programa (0-4 L-V). */
  programDayIndex: number | undefined;
  isTrainingDay: boolean;
}

export interface ProgramCalendarContext {
  today: Date;
  /** 0=Lunes … 6=Domingo (día REAL). */
  todayWeekdayIndex: number;
  todayWeekdayName: string;
  /** Lunes de la semana real actual. */
  currentWeekStart: Date;
  /** Lunes de la semana 1 del programa (ancla). */
  programStartMonday: Date;
  /** Semana de programa que toca HOY (1-based, clampeada a [1, totalWeeks]). */
  derivedWeek: number;
  /** Día dentro de la semana derivada (0-based sobre days[]; undefined descanso). */
  derivedDayIndex: number | undefined;
  /** workoutDayIndex 1-5 del grid semanal para HOY (undefined = sin entreno). */
  todayWorkoutDayIndex: number | undefined;
  /** true si la semana derivada se clampeó (programa terminado o aún no empieza). */
  isWeekClamped: boolean;
  /** Días efectivos transcurridos desde el arranque (reales - postergados). */
  effectiveDayNumber: number;
  /** Días de la semana derivada (fechas reales, L→D), para el cronograma. */
  weekDays: ProgramCalendarDay[];
}

/**
 * Calcula el contexto de calendario real del programa activo.
 * `totalWeeks` se usa solo para clampear derivedWeek (duración del programa).
 */
export function buildProgramCalendar(
  input: ProgramCalendarInput,
  totalWeeks = 12
): ProgramCalendarContext {
  const now = input.now ?? new Date();
  const today = startOfDay(now);
  const anchor = input.startedAt ? new Date(input.startedAt) : today;
  const programStartMonday = startOfWeek(anchor);

  const realDayNumber = daysBetween(programStartMonday, today);
  const postponed = Math.max(0, input.postponedDays || 0);
  const effectiveDayNumber = realDayNumber - postponed;

  // Semana derivada (1-based). effectiveDayNumber < 0 => aún no arranca (clampea a 1).
  const rawWeek = Math.floor(effectiveDayNumber / 7) + 1;
  const isWeekClamped = rawWeek < 1 || rawWeek > totalWeeks;
  const derivedWeek = Math.min(Math.max(rawWeek, 1), Math.max(totalWeeks, 1));

  const weekStartEffective = (derivedWeek - 1) * 7; // primer día efectivo de la semana
  const weekDays: ProgramCalendarDay[] = Array.from({ length: 7 }, (_, idx) => {
    const date = addDays(programStartMonday, weekStartEffective + idx + postponed);
    const wdIdx = idx; // dentro de la semana del programa, 0=Lunes
    const isTrainingDay = wdIdx < 5;
    return {
      date,
      weekdayIndex: wdIdx,
      workoutDayIndex: isTrainingDay ? wdIdx + 1 : undefined,
      programDayIndex: isTrainingDay ? wdIdx : undefined,
      isTrainingDay
    };
  });

  // Día que toca HOY: día efectivo dentro de la semana derivada
  const dayInDerivedWeek = effectiveDayNumber - weekStartEffective; // 0..6
  const todayIdxRaw = dayInDerivedWeek >= 0 && dayInDerivedWeek < 7 ? dayInDerivedWeek : weekdayIndex(today);
  const todayIsTraining = todayIdxRaw < 5;

  return {
    today,
    todayWeekdayIndex: weekdayIndex(today),
    todayWeekdayName: DAY_NAMES[weekdayIndex(today)],
    currentWeekStart: startOfWeek(today),
    programStartMonday,
    derivedWeek,
    derivedDayIndex: todayIsTraining ? todayIdxRaw : undefined,
    todayWorkoutDayIndex: todayIsTraining ? todayIdxRaw + 1 : undefined,
    isWeekClamped,
    effectiveDayNumber,
    weekDays
  };
}

/** Etiqueta corta del día de entreno según el grid semanal (scheduleData). */
export function workoutDayLabel(workoutDayIndex: number | undefined): string {
  switch (workoutDayIndex) {
    case 1: return 'Upper 1';
    case 2: return 'Lower 1';
    case 3: return 'Upper 2';
    case 4: return 'Lower 2';
    case 5: return 'Arms & Delts';
    default: return 'Descanso';
  }
}

/**
 * Fechas reales de una semana ARBITRARIA del programa (para navegar el
 * cronograma). semana=1 es la semana del ancla (programStartMonday).
 * Las postergaciones desplazan las fechas hacia el futuro.
 */
export function programWeekDays(
  programStartMonday: Date,
  week: number,
  postponedDays: number
): ProgramCalendarDay[] {
  const weekStartEffective = (Math.max(1, week) - 1) * 7;
  return Array.from({ length: 7 }, (_, idx) => {
    const date = addDays(programStartMonday, weekStartEffective + idx + Math.max(0, postponedDays));
    const isTrainingDay = idx < 5;
    return {
      date,
      weekdayIndex: idx,
      workoutDayIndex: isTrainingDay ? idx + 1 : undefined,
      programDayIndex: isTrainingDay ? idx : undefined,
      isTrainingDay
    };
  });
}
