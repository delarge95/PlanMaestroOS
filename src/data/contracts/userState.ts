/**
 * userState.v1 — Contrato central del estado del usuario (AG-CORE, Ola 1).
 *
 * Fuente de verdad estructurada de TODO lo que el usuario es y registra:
 * perfil, daily logs, sesiones de entrenamiento, dolor por zona, skills y métricas.
 * Los motores de reglas (`src/lib/rules/`), sugerencias y adaptadores de dominio
 * consumen ESTE contrato — nunca stores de dominio directamente (principio §0.7
 * del plan multi-agente).
 *
 * Reglas del contrato:
 * - Puro TypeScript, sin DOM, sin dependencias de dominio. Importable en
 *   worker, scripts y tests de cualquier agente.
 * - Sin lógica de negocio: las funciones exportadas son vistas derivadas
 *   (agregados/deltas/rachas), no decisiones.
 * - Evolución SIN breaking changes: campos nuevos opcionales; si un cambio es
 *   incompatible se crea `userState.v2.ts` con migración.
 *
 * Convención de fechas: strings ISO-8601 fecha (`YYYY-MM-DD`) o datetime ISO
 * (`YYYY-MM-DDTHH:mm:ssZ`). Toda semana arranca el lunes (ISO-8601).
 */

/** Versión del contrato. Persistida junto al estado para migraciones. */
export const USER_STATE_VERSION = 1 as const;

/**
 * Zonas corporales normalizadas del sistema.
 * Mismo vocabulario para fitness (prehab), clinical (bio-feedback) y
 * anatomy (tap-mantener → reportar dolor). Normalizado en inglés.
 */
export type BodyZone =
  | 'shoulder'
  | 'elbow'
  | 'wrist'
  | 'hip'
  | 'lumbar'
  | 'thoracic'
  | 'cervical'
  | 'knee'
  | 'ankle'
  | 'foot'
  | 'general';

/** Lista canónica de zonas (para validadores y UI). */
export const BODY_ZONES: readonly BodyZone[] = [
  'shoulder', 'elbow', 'wrist', 'hip', 'lumbar', 'thoracic', 'cervical',
  'knee', 'ankle', 'foot', 'general',
] as const;

/**
 * Patrones de movimiento para agregar volumen semanal con significado
 * motor (no por músculo, que es territorio de anatomy).
 */
export type MovementPattern =
  | 'squat'
  | 'hinge'
  | 'horizontal-push'
  | 'vertical-push'
  | 'horizontal-pull'
  | 'vertical-pull'
  | 'core'
  | 'carry'
  | 'isolation'
  | 'cardio'
  | 'mobility';

/** Lista canónica de patrones. */
export const MOVEMENT_PATTERNS: readonly MovementPattern[] = [
  'squat', 'hinge', 'horizontal-push', 'vertical-push', 'horizontal-pull',
  'vertical-pull', 'core', 'carry', 'isolation', 'cardio', 'mobility',
] as const;

/** Momento en que se reporta el dolor respecto a la sesión. */
export type PainTiming = 'during' | 'after' | 'persistent';

/** Lista canónica de timings de dolor. */
export const PAIN_TIMINGS: readonly PainTiming[] = ['during', 'after', 'persistent'] as const;

/**
 * Condiciones de salud conocidas del usuario (vocabulario sugerido, no
 * cerrado: los agentes pueden aportar más vía valores string).
 */
export const COMMON_CONDITIONS: readonly string[] = [
  'adhd', 'social-anxiety', 'tendinopathy', 'low-back-pain', 'asthma',
  'hypertension', 'diabetes', 'joint-injury',
] as const;

/** Equipamiento disponible (vocabulario sugerido, no cerrado). */
export const COMMON_EQUIPMENT: readonly string[] = [
  'bodyweight', 'pull-up-bar', 'rings', 'dumbbells', 'barbell', 'kettlebell',
  'resistance-bands', 'cable-machine', 'bench',
] as const;

/** Nivel de energía percibida (mismo vocabulario que el modelo canónico). */
export type PerceivedEnergy = 'high' | 'medium' | 'low' | 'crisis';

/**
 * Screening de salud previo a prescripción de ejercicio.
 * `redFlags` no vacío ⇒ los agentes de dominio deben mostrar derivación
 * profesional antes de cualquier sugerencia de carga.
 */
export interface HealthScreening {
  /** PAR-Q+ aprobado (autoreporte). */
  parqPassed?: boolean;
  /** Autorización médica explícita (p. ej. post-lesión). */
  medicalClearance?: boolean;
  /** Señales de alarma declaradas (libre: 'chest-pain', 'dizziness'…). */
  redFlags: string[];
  /** Fecha ISO de la última revisión del screening. */
  lastReviewedIso?: string;
  notes?: string;
}

/**
 * Perfil del usuario. Campos opcionales = aún no declarados; las reglas con
 * `appliesWhen` deben comprobar lo que usan antes de aplicar.
 */
export interface UserProfile {
  /** Edad en años. */
  age?: number;
  /** Sexo biológico declarado (para ecuaciones y umbrales de riesgo). */
  sex?: 'male' | 'female' | 'other';
  /** Años de experiencia de entrenamiento sistemático. */
  trainingAge?: number;
  /** Condiciones de salud (ver COMMON_CONDITIONS). */
  conditions: string[];
  /** Screening de salud (ver HealthScreening). */
  screening: HealthScreening;
  /** Equipamiento disponible (ver COMMON_EQUIPMENT). */
  equipment: string[];
}

/**
 * Registro diario de bienestar (1 por día). Fuente del pre-workout gate
 * y de la modulación de carga del día (clinical → fitness por contrato).
 */
export interface DailyLog {
  /** Fecha ISO (`YYYY-MM-DD`). Único por fecha. */
  date: string;
  /** Horas de sueño (h, puede ser fraccional). */
  sleepHours?: number;
  /** Calidad de sueño 1–5 (1 muy mala, 5 excelente). */
  sleepQuality?: number;
  /** Estrés percibido 0–10 (0 ninguno, 10 máximo). */
  stress?: number;
  /** Dolor general 0–10 (no localizado; el localizado va en `pain[]`). */
  generalPain?: number;
  /** Enfermedad / síntomas (true ⇒ gate de descanso típico). */
  illness?: boolean;
  /** Energía percibida del día (puente con clinical). */
  energy?: PerceivedEnergy;
  notes?: string;
}

/** Registro de UNA serie (opcional, para detalle fino post-sesión). */
export interface SessionSetLog {
  reps: number;
  /** Carga en kg (0 para trabajo con peso corporal). */
  loadKg?: number;
  /** RPE de la serie 1–10. */
  rpe?: number;
  /** Dolor durante la serie 0–10. */
  painDuring?: number;
}

/** Ejercicio dentro de una sesión (agregado plano por diseño). */
export interface SessionExercise {
  /** Id/nombre canónico del ejercicio (ej. 'pull-up', 'planche-lean'). */
  exerciseId: string;
  /** Patrón de movimiento (agregación semanal). */
  pattern: MovementPattern;
  /** Series completadas. */
  sets: number;
  /** Repeticiones (típicas por serie; total si la sesión lo exige — documentar en notes). */
  reps: number;
  /** Carga en kg (0 = peso corporal). */
  loadKg: number;
  /** RPE medio del ejercicio 1–10. */
  rpe?: number;
  /** Dolor durante el ejercicio 0–10. */
  painDuring?: number;
  /** Zona(s) donde se sintió dolor, si hubo (vocabulario BodyZone). */
  painZones?: BodyZone[];
  /** Detalle por serie opcional (si existe, `sets` debe coincidir). */
  setDetails?: SessionSetLog[];
}

/**
 * Sesión de entrenamiento completada (o registrada a posteriori).
 * Compatible conceptualmente con `WorkoutSession` del modelo canónico;
 * la migración la hace el adaptador de dominio, no este contrato.
 */
export interface TrainingSession {
  id: string;
  /** Fecha ISO de la sesión (`YYYY-MM-DD`). */
  date: string;
  /** Foco de la sesión (libre: 'push', 'full-body', 'skill'…). */
  focus: string;
  /** Ejercicios realizados. */
  exercises: SessionExercise[];
  /** RPE global de la sesión 1–10. */
  sessionRpe?: number;
  /** Duración en minutos. */
  durationMin: number;
  /** Volumen total (sumatoria kg·reps) — la calcula el registrador. */
  totalVolumeKg?: number;
  notes?: string;
}

/** Entrada de dolor localizado (1 reporte = 1 entrada). */
export interface PainEntry {
  id?: string;
  /** Fecha ISO del reporte. */
  date: string;
  bodyZone: BodyZone;
  /** Severidad 0–10 (escala numérica única del sistema). */
  severity: number;
  /** Momento del dolor respecto a la sesión (ver PainTiming). */
  timing: PainTiming;
  /** Ejercicio detonante, si se conoce. */
  triggerExerciseId?: string;
  notes?: string;
}

/**
 * Progreso en una skill/habilidad de CUALQUIER dominio
 * (fitness: planche; german: unidad A1.2; career: certificación…).
 */
export interface SkillProgress {
  /** Id estable de la skill (prefijado por dominio: 'fit:planche', 'de:unit-1'). */
  skillId: string;
  /** Nivel/step actual dentro del path de la skill. */
  currentStep: string;
  /** Progreso 0–100 dentro del step actual (opcional). */
  stepProgress?: number;
  /** Fechas ISO de práctica (para rachas y SR). Orden ascendente recomendado. */
  practiceLog?: string[];
  lastPracticedIso?: string;
}

/**
 * Métrica temporal genérica (peso corporal, cintura, VO2max estimado…).
 * Serie por `metricId`; el agente dueño define el significado.
 */
export interface UserMetric {
  /** Id estable de la métrica (ver METRIC_IDS para las comunes). */
  metricId: string;
  /** Fecha ISO (`YYYY-MM-DD`). */
  date: string;
  value: number;
  /** Unidad ('kg', 'cm', 'bpm', '%'…). */
  unit: string;
}

/** Ids de métricas comunes (abierto: los dominios pueden añadir los suyos). */
export const METRIC_IDS = {
  bodyWeight: 'body-weight',
  waist: 'waist-circumference',
  restingHr: 'resting-hr',
  sleepAvg: 'sleep-hours-avg',
} as const;

/**
 * Estado completo del usuario. Raíz de la persistencia (IndexedDB vía
 * `src/lib/storage/`) y entrada de los motores de reglas y sugerencias.
 */
export interface UserState {
  /** Versión del contrato (USER_STATE_VERSION). */
  version: number;
  /** Momento de la última escritura (ISO datetime). */
  updatedAtIso: string;
  profile: UserProfile;
  /** Logs diarios, idealmente ordenados por fecha ascendente. */
  dailyLogs: DailyLog[];
  sessions: TrainingSession[];
  pain: PainEntry[];
  skills: SkillProgress[];
  metrics: UserMetric[];
}

// ---------------------------------------------------------------------------
// Vistas derivadas (funciones puras)
// ---------------------------------------------------------------------------

/** Volumen semanal agregado por patrón de movimiento. */
export interface PatternVolume {
  pattern: MovementPattern;
  /** Series duras completadas en la semana. */
  hardSets: number;
  /** Nº de sesiones de la semana que tocaron el patrón. */
  sessions: number;
}

/** Resumen de dolor de una zona en un periodo. */
export interface ZonePainSummary {
  bodyZone: BodyZone;
  /** Nº de reportes en el periodo. */
  reports: number;
  /** Máximo severidad reportada 0–10. */
  maxSeverity: number;
  /** Media de severidad 0–10 (redondeada a 1 decimal). */
  avgSeverity: number;
  /** Última fecha ISO con reporte de la zona. */
  lastReportIso?: string;
}

/** Agregados de UNA semana ISO (lunes→domingo). */
export interface WeekAggregates {
  /** Lunes de la semana en ISO (`YYYY-MM-DD`). */
  weekStartIso: string;
  sessions: number;
  /** Series duras totales de la semana. */
  hardSets: number;
  /** Volumen por patrón (solo patrones con >0 sets). */
  byPattern: PatternVolume[];
  /** RPE medio de sesión (redondeado a 1 decimal; undefined si no hay datos). */
  avgSessionRpe?: number;
  /** Duración total de entrenamiento (min). */
  totalDurationMin: number;
  /** Volumen total kg (solo si todas las sesiones lo reportan). */
  totalVolumeKg?: number;
  /** Media de horas de sueño de los logs de la semana. */
  avgSleepHours?: number;
  /** Media de estrés 0–10 de la semana. */
  avgStress?: number;
  /** Dolor por zona reportado en la semana (pain[] con fecha en la semana). */
  painByZone: ZonePainSummary[];
}

/** Delta semana vs semana anterior (semanas sin datos → undefined). */
export interface WeeklyDeltas {
  weekStartIso: string;
  sessions?: number;
  hardSets?: number;
  avgSessionRpe?: number;
  totalDurationMin?: number;
  /** Delta de series por patrón (solo patrones presentes en alguna de las dos). */
  byPattern?: Partial<Record<MovementPattern, number>>;
}

/** Rachas calculadas del usuario. */
export interface Streaks {
  /** Días consecutivos con daily log (hasta `todayIso`; tolera que hoy no exista aún). */
  dailyLogDays: number;
  /** Semanas consecutivas con ≥1 sesión (hasta la semana de `todayIso`). */
  trainingWeeks: number;
  /** Rachas de práctica por skill (solo skills con racha ≥1). */
  skillDays: Record<string, number>;
}

// ---------------------------------------------------------------------------
// Utilidades de fecha (ISO, semana arranca lunes)
// ---------------------------------------------------------------------------

/**
 * Devuelve el lunes de la semana de `dateIso` como `YYYY-MM-DD`.
 * Acepta fecha o datetime ISO. Puro: no usa `Date` con zona horaria local.
 */
export function getWeekStartIso(dateIso: string): string {
  const datePart = dateIso.slice(0, 10);
  const [y, m, d] = datePart.split('-').map((n) => parseInt(n, 10));
  // Día de la semana ISO: lunes=1 … domingo=7 (algoritmo de Zeller inverso vía UTC).
  const utc = new Date(Date.UTC(y, m - 1, d));
  const isoDay = utc.getUTCDay() === 0 ? 7 : utc.getUTCDay();
  utc.setUTCDate(utc.getUTCDate() - (isoDay - 1));
  return utc.toISOString().slice(0, 10);
}

/** Clave de semana (`YYYY-Www`) para agrupar/tablas. */
export function weekKeyFor(dateIso: string): string {
  const ws = getWeekStartIso(dateIso);
  const [y, m, d] = ws.split('-').map((n) => parseInt(n, 10));
  const thursday = new Date(Date.UTC(y, m - 1, d + 3));
  const jan1 = new Date(Date.UTC(thursday.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((thursday.getTime() - jan1.getTime()) / 86400000 + jan1.getUTCDay() + 1) / 7);
  return `${thursday.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

/** Fecha de hoy como `YYYY-MM-DD` (UTC). */
export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Suma `days` a una fecha ISO y devuelve `YYYY-MM-DD`. */
export function addDaysIso(dateIso: string, days: number): string {
  const [y, m, d] = dateIso.slice(0, 10).split('-').map((n) => parseInt(n, 10));
  const utc = new Date(Date.UTC(y, m - 1, d + days));
  return utc.toISOString().slice(0, 10);
}

// ---------------------------------------------------------------------------
// Constructores y vistas
// ---------------------------------------------------------------------------

/** Estado inicial vacío y válido. */
export function createEmptyUserState(nowIso: string = new Date().toISOString()): UserState {
  return {
    version: USER_STATE_VERSION,
    updatedAtIso: nowIso,
    profile: { conditions: [], screening: { redFlags: [] }, equipment: [] },
    dailyLogs: [],
    sessions: [],
    pain: [],
    skills: [],
    metrics: [],
  };
}

/** Sesiones cuya fecha cae en la semana ISO indicada (`weekStartIso` = lunes). */
export function sessionsInWeek(state: UserState, weekStartIso: string): TrainingSession[] {
  const weekEnd = addDaysIso(weekStartIso, 7);
  return state.sessions.filter((s) => {
    const d = s.date.slice(0, 10);
    return d >= weekStartIso && d < weekEnd;
  });
}

/** Logs diarios de la semana ISO indicada. */
export function dailyLogsInWeek(state: UserState, weekStartIso: string): DailyLog[] {
  const weekEnd = addDaysIso(weekStartIso, 7);
  return state.dailyLogs.filter((l) => l.date >= weekStartIso && l.date < weekEnd);
}

/** Volumen por patrón de una lista de sesiones (series duras = `sets` completados). */
export function patternVolumeFromSessions(sessions: TrainingSession[]): PatternVolume[] {
  const acc = new Map<MovementPattern, PatternVolume>();
  for (const session of sessions) {
    const touched = new Set<MovementPattern>();
    for (const ex of session.exercises) {
      const entry = acc.get(ex.pattern) ?? { pattern: ex.pattern, hardSets: 0, sessions: 0 };
      entry.hardSets += ex.sets;
      touched.add(ex.pattern);
      acc.set(ex.pattern, entry);
    }
    for (const p of touched) acc.get(p)!.sessions += 1;
  }
  return [...acc.values()].sort((a, b) => b.hardSets - a.hardSets);
}

/** Resumen de dolor por zona en un rango [fromIso, toIso) de fechas ISO. */
export function painByZoneInRange(pain: PainEntry[], fromIso: string, toIsoExclusive: string): ZonePainSummary[] {
  const acc = new Map<BodyZone, { severities: number[]; last?: string }>();
  for (const p of pain) {
    const d = p.date.slice(0, 10);
    if (d < fromIso || d >= toIsoExclusive) continue;
    const e = acc.get(p.bodyZone) ?? { severities: [] };
    e.severities.push(p.severity);
    if (!e.last || d > e.last) e.last = d;
    acc.set(p.bodyZone, e);
  }
  return [...acc.entries()].map(([bodyZone, e]) => ({
    bodyZone,
    reports: e.severities.length,
    maxSeverity: Math.max(...e.severities),
    avgSeverity: round1(e.severities.reduce((a, b) => a + b, 0) / e.severities.length),
    lastReportIso: e.last,
  }));
}

/**
 * Agregados completos de UNA semana ISO.
 * `weekStartIso` debe ser lunes (usa `getWeekStartIso` si viene de una fecha suelta).
 */
export function deriveWeekAggregates(state: UserState, weekStartIso: string): WeekAggregates {
  const weekEnd = addDaysIso(weekStartIso, 7);
  const sessions = sessionsInWeek(state, weekStartIso);
  const logs = dailyLogsInWeek(state, weekStartIso);

  const rpes = sessions.map((s) => s.sessionRpe).filter((r): r is number => typeof r === 'number');
  const vols = sessions.map((s) => s.totalVolumeKg).filter((v): v is number => typeof v === 'number');
  const sleeps = logs.map((l) => l.sleepHours).filter((v): v is number => typeof v === 'number');
  const stresses = logs.map((l) => l.stress).filter((v): v is number => typeof v === 'number');

  return {
    weekStartIso,
    sessions: sessions.length,
    hardSets: sessions.reduce((sum, s) => sum + s.exercises.reduce((a, e) => a + e.sets, 0), 0),
    byPattern: patternVolumeFromSessions(sessions),
    avgSessionRpe: rpes.length ? round1(rpes.reduce((a, b) => a + b, 0) / rpes.length) : undefined,
    totalDurationMin: sessions.reduce((sum, s) => sum + s.durationMin, 0),
    totalVolumeKg: vols.length === sessions.length && sessions.length > 0
      ? round1(vols.reduce((a, b) => a + b, 0))
      : undefined,
    avgSleepHours: sleeps.length ? round1(sleeps.reduce((a, b) => a + b, 0) / sleeps.length) : undefined,
    avgStress: stresses.length ? round1(stresses.reduce((a, b) => a + b, 0) / stresses.length) : undefined,
    painByZone: painByZoneInRange(state.pain, weekStartIso, weekEnd),
  };
}

/** Delta de la semana `weekStartIso` contra su semana anterior. */
export function computeDeltas(state: UserState, weekStartIso: string): WeeklyDeltas {
  const current = deriveWeekAggregates(state, weekStartIso);
  const prev = deriveWeekAggregates(state, addDaysIso(weekStartIso, -7));

  const patterns = new Set([...current.byPattern.map((p) => p.pattern), ...prev.byPattern.map((p) => p.pattern)]);
  const byPattern: WeeklyDeltas['byPattern'] = {};
  let anyPattern = false;
  for (const p of patterns) {
    const c = current.byPattern.find((x) => x.pattern === p)?.hardSets ?? 0;
    const q = prev.byPattern.find((x) => x.pattern === p)?.hardSets ?? 0;
    if (c !== q) { byPattern[p] = c - q; anyPattern = true; }
  }

  const bothEmpty = current.sessions === 0 && prev.sessions === 0;
  return {
    weekStartIso,
    sessions: bothEmpty ? undefined : current.sessions - prev.sessions,
    hardSets: bothEmpty ? undefined : current.hardSets - prev.hardSets,
    avgSessionRpe: current.avgSessionRpe !== undefined && prev.avgSessionRpe !== undefined
      ? round1(current.avgSessionRpe - prev.avgSessionRpe)
      : undefined,
    totalDurationMin: bothEmpty ? undefined : current.totalDurationMin - prev.totalDurationMin,
    byPattern: anyPattern ? byPattern : undefined,
  };
}

/**
 * Rachas del usuario hasta `todayIso`.
 * - `dailyLogDays`: días consecutivos con log; si hoy no hay log todavía,
 *   cuenta desde ayer (gracia de mediodía).
 * - `trainingWeeks`: semanas consecutivas con ≥1 sesión (la semana actual
 *   sin sesiones aún no rompe la racha, igual que los logs).
 */
export function computeStreaks(state: UserState, todayIsoDate: string): Streaks {
  const logDates = new Set(state.dailyLogs.map((l) => l.date.slice(0, 10)));
  let dailyLogDays = 0;
  let cursor = todayIsoDate;
  if (!logDates.has(cursor)) cursor = addDaysIso(cursor, -1);
  while (logDates.has(cursor)) {
    dailyLogDays += 1;
    cursor = addDaysIso(cursor, -1);
  }

  const weeksWithSessions = new Set(
    state.sessions.map((s) => getWeekStartIso(s.date.slice(0, 10))),
  );
  let trainingWeeks = 0;
  let weekCursor = getWeekStartIso(todayIsoDate);
  if (!weeksWithSessions.has(weekCursor)) weekCursor = addDaysIso(weekCursor, -7);
  while (weeksWithSessions.has(weekCursor)) {
    trainingWeeks += 1;
    weekCursor = addDaysIso(weekCursor, -7);
  }

  const skillDays: Record<string, number> = {};
  for (const skill of state.skills) {
    const dates = new Set((skill.practiceLog ?? []).map((d) => d.slice(0, 10)));
    if (dates.size === 0) continue;
    let n = 0;
    let c = todayIsoDate;
    if (!dates.has(c)) c = addDaysIso(c, -1);
    while (dates.has(c)) {
      n += 1;
      c = addDaysIso(c, -1);
    }
    if (n > 0) skillDays[skill.skillId] = n;
  }

  return { dailyLogDays, trainingWeeks, skillDays };
}

/** Último valor registrado de una métrica (por fecha), o undefined. */
export function latestMetric(state: UserState, metricId: string): UserMetric | undefined {
  const series = state.metrics
    .filter((m) => m.metricId === metricId)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return series[0];
}

/** Redondeo a 1 decimal (interno). */
function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
