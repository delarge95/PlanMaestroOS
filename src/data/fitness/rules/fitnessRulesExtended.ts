/**
 * fitnessRulesExtended.ts — Catálogo extendido U1 (ejecución del PROMPT
 * CATÁLOGO DE REGLAS de docs/orquestacion/DESPACHO-5 §A sobre los chunks
 * curados en `rag/fitness/fuentes/`).
 *
 * EXTENDE (no duplica) las 10 semillas de `fitnessRules.ts`. Cada cifra de
 * `optimalRange`/`riskThresholds` proviene VERBATIM del chunk citado en
 * `sourceRef` (sourceId = id del manifest `rag/fitness/manifest.json`,
 * chapter/page = header del chunk). Chunks sin cifras medibles → sin regla.
 *
 * Convenciones (idénticas a la semilla):
 * - `resolveValue` devuelve undefined ⇒ `not-applicable` (sin datos, nunca ok).
 * - Semántica del motor: fuera de `riskThresholds.warning` ⇒ warning;
 *   fuera de `violation` ⇒ violation; fuera de `optimalRange` ⇒ warning.
 * - Bandas: cuando la fuente solo da el rango óptimo (sin banda secundaria),
 *   `warning` replica `optimalRange` (cualquier desviación es subóptima) y
 *   NO se inventan umbrales de violation.
 *
 * `type` 'mobility' extiende el enum sugerido del prompt (el contrato
 * `DomainRule.type` es `string`).
 */

import type { DomainRule, RuleContext } from '../../../lib/rules';
import type { MovementPattern, TrainingSession, WeekAggregates } from '../../contracts/userState';
import { addDaysIso, deriveWeekAggregates, latestMetric, METRIC_IDS } from '../../contracts/userState';

/** docIds verificados contra rag/fitness/manifest.json. */
const SRC_OG2 = 'low-overcoming-gravity-2ed';
const SRC_ISRAETEL_HYP = 'israetel-scientific-principles-hypertrophy';
const SRC_ISRAETEL_STR = 'israetel-scientific-principles-strength';
const SRC_NIPPARD_LADDER = 'nippard-muscle-ladder-2024';
const SRC_ACSM = 'acsm-exercise-testing-prescription-10ed';
const SRC_OTEND = 'low-overcoming-tendonitis-2019';
const SRC_SQUAT_BIBLE = 'horschig-squat-bible';
const SRC_BLAHNIK = 'blahnik-full-body-flexibility-2ed';
const SRC_WILSON = 'wilson-exercise-therapy-msk';
const SRC_DIAS = 'dias-training-conditioning-mma';

// ---------------------------------------------------------------------------
// helpers de contexto (puros y deterministas)
// ---------------------------------------------------------------------------

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/** Días entre dos fechas ISO `YYYY-MM-DD` (UTC). */
function daysBetween(fromIso: string, toIso: string): number {
  const [fy, fm, fd] = fromIso.slice(0, 10).split('-').map((n) => parseInt(n, 10));
  const [ty, tm, td] = toIso.slice(0, 10).split('-').map((n) => parseInt(n, 10));
  return Math.round((Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd)) / 86400000);
}

/** Sesiones cuya fecha cae en la semana de referencia del contexto. */
function sessionsOfWeek(context: RuleContext): TrainingSession[] {
  const start = context.week.weekStartIso;
  const end = addDaysIso(start, 7);
  return context.userState.sessions.filter((s) => {
    const d = s.date.slice(0, 10);
    return d >= start && d < end;
  });
}

function isCountablePattern(pattern: MovementPattern): boolean {
  return pattern !== 'cardio' && pattern !== 'mobility';
}

/** Máximo de series de UN mismo patrón dentro de UNA sesión de la semana. */
function maxPatternSetsPerSession(context: RuleContext): number | undefined {
  const sessions = sessionsOfWeek(context);
  if (!sessions.length) return undefined;
  let max = 0;
  for (const session of sessions) {
    const perPattern = new Map<MovementPattern, number>();
    for (const ex of session.exercises) {
      if (!isCountablePattern(ex.pattern)) continue;
      perPattern.set(ex.pattern, (perPattern.get(ex.pattern) ?? 0) + ex.sets);
    }
    for (const sets of perPattern.values()) max = Math.max(max, sets);
  }
  return max > 0 ? max : undefined;
}

/** Máximo de repeticiones de UN mismo patrón dentro de UNA sesión de la semana. */
function maxPatternRepsPerSession(context: RuleContext): number | undefined {
  const sessions = sessionsOfWeek(context);
  if (!sessions.length) return undefined;
  let max = 0;
  for (const session of sessions) {
    const perPattern = new Map<MovementPattern, number>();
    for (const ex of session.exercises) {
      if (!isCountablePattern(ex.pattern)) continue;
      perPattern.set(ex.pattern, (perPattern.get(ex.pattern) ?? 0) + ex.reps);
    }
    for (const reps of perPattern.values()) max = Math.max(max, reps);
  }
  return max > 0 ? max : undefined;
}

/** Series duras del patrón con más volumen en la semana (igual que semilla). */
function maxPatternSets(week: WeekAggregates): number | undefined {
  const ps = week.byPattern.filter((p) => p.hardSets > 0);
  if (!ps.length) return undefined;
  return ps.reduce((m, p) => Math.max(m, p.hardSets), 0);
}

/** Minutos de la semana en sesiones que incluyeron trabajo de patrón cardio. */
function cardioMinutesOfWeek(context: RuleContext): number {
  return sessionsOfWeek(context)
    .filter((s) => s.exercises.some((e) => e.pattern === 'cardio'))
    .reduce((sum, s) => sum + s.durationMin, 0);
}

/** Nº de sesiones de la semana que incluyeron trabajo de patrón cardio. */
function cardioSessionsOfWeek(context: RuleContext): number {
  return sessionsOfWeek(context).filter((s) => s.exercises.some((e) => e.pattern === 'cardio')).length;
}

/**
 * Mínimo gap en días entre sesiones consecutivas del MISMO patrón
 * (ventana de 14 días terminando hoy). undefined si ningún patrón se
 * repitió en la ventana.
 */
function minGapDaysSamePattern(context: RuleContext): number | undefined {
  const end = addDaysIso(context.todayIso, 1);
  const start = addDaysIso(context.todayIso, -13);
  const byPattern = new Map<MovementPattern, string[]>();
  for (const session of context.userState.sessions) {
    const d = session.date.slice(0, 10);
    if (d < start || d >= end) continue;
    const patterns = new Set<MovementPattern>();
    for (const ex of session.exercises) {
      if (isCountablePattern(ex.pattern)) patterns.add(ex.pattern);
    }
    for (const p of patterns) {
      const list = byPattern.get(p) ?? [];
      if (!list.includes(d)) list.push(d);
      byPattern.set(p, list);
    }
  }
  let min: number | undefined;
  for (const dates of byPattern.values()) {
    if (dates.length < 2) continue;
    const sorted = [...dates].sort();
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const curr = sorted[i];
      if (!prev || !curr) continue;
      const gap = daysBetween(prev, curr);
      if (min === undefined || gap < min) min = gap;
    }
  }
  return min;
}

/** Sesiones/semana del patrón hinge (peso muerto y derivados). */
function hingeSessions(context: RuleContext): number | undefined {
  return context.week.byPattern.find((p) => p.pattern === 'hinge')?.sessions;
}

/** Sesiones/semana de patrón mobility (0 si no hubo). */
function mobilitySessions(context: RuleContext): number {
  return context.week.byPattern.find((p) => p.pattern === 'mobility')?.sessions ?? 0;
}

/** Días de illness=true en los últimos 7 días (incluido hoy). */
function illnessDaysLast7(context: RuleContext): number {
  const start = addDaysIso(context.todayIso, -6);
  return context.userState.dailyLogs.filter(
    (l) => l.illness === true && l.date >= start && l.date <= context.todayIso,
  ).length;
}

/** Días distintos de práctica de skills `fit:` en los últimos 7 días (máx entre skills). */
function fitSkillDaysLast7(context: RuleContext): number | undefined {
  const start = addDaysIso(context.todayIso, -6);
  let max = 0;
  let any = false;
  for (const skill of context.userState.skills) {
    if (!skill.skillId.startsWith('fit:')) continue;
    const days = new Set(
      (skill.practiceLog ?? [])
        .map((d) => d.slice(0, 10))
        .filter((d) => d >= start && d <= context.todayIso),
    );
    if (days.size > 0) any = true;
    max = Math.max(max, days.size);
  }
  return any ? max : undefined;
}

/**
 * ACWR (ratio carga aguda:crónica) usando series duras como proxy de carga:
 * semana actual ÷ media de las 3 semanas previas. undefined sin historia.
 */
function acuteChronicRatio(context: RuleContext): number | undefined {
  const state = context.userState;
  const acute = deriveWeekAggregates(state, context.week.weekStartIso).hardSets;
  const chronicSum = [-7, -14, -21].reduce(
    (sum, offset) => sum + deriveWeekAggregates(state, addDaysIso(context.week.weekStartIso, offset)).hardSets,
    0,
  );
  const chronic = chronicSum / 3;
  if (chronic <= 0) return undefined;
  return round2(acute / chronic);
}

/**
 * Cambio ponderal %/semana entre las dos mediciones de peso corporal más
 * recientes separadas entre 5 y 10 días. undefined si no hay par válido.
 */
function weightVelocityPctPerWeek(context: RuleContext): number | undefined {
  const series = context.userState.metrics
    .filter((m) => m.metricId === METRIC_IDS.bodyWeight)
    .map((m) => ({ date: m.date.slice(0, 10), value: m.value }))
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  if (series.length < 2) return undefined;
  const latest = series[series.length - 1];
  if (!latest) return undefined;
  let older: { date: string; value: number } | undefined;
  for (let i = series.length - 2; i >= 0; i--) {
    const candidate = series[i];
    if (!candidate) continue;
    const gap = daysBetween(candidate.date, latest.date);
    if (gap >= 5 && gap <= 10) {
      older = candidate;
      break;
    }
  }
  if (!older || older.value <= 0) return undefined;
  return round2(((latest.value - older.value) / older.value) * 100);
}

/** Proteína registrada (g/día) normalizada por peso corporal (g/kg). */
function proteinPerKg(context: RuleContext): number | undefined {
  const weight = latestMetric(context.userState, METRIC_IDS.bodyWeight)?.value;
  const protein = latestMetric(context.userState, 'protein-g-per-day')?.value;
  if (weight === undefined || weight <= 0 || protein === undefined) return undefined;
  return round2(protein / weight);
}

/** Ratio sentadilla (1RM registrado) / peso corporal. */
function squatToBodyweight(context: RuleContext): number | undefined {
  const oneRm = latestMetric(context.userState, 'back-squat-1rm')?.value;
  const weight = latestMetric(context.userState, METRIC_IDS.bodyWeight)?.value;
  if (oneRm === undefined || weight === undefined || weight <= 0) return undefined;
  return round2(oneRm / weight);
}

function trainingAge(context: RuleContext): number | undefined {
  return context.userState.profile.trainingAge;
}

// ---------------------------------------------------------------------------
// catálogo extendido (29 reglas nuevas; extienden, no duplican, la semilla)
// ---------------------------------------------------------------------------

export const FITNESS_EXTENDED_RULES: DomainRule[] = [
  // ── VOLUMEN POR SESIÓN (Israetel RP: cap 8-12 series/músculo/sesión) ──
  {
    id: 'fit:session-sets-cap-per-pattern',
    domain: 'fitness',
    description: 'Máximo 8-12 series efectivas por músculo en UNA sesión; por encima es volumen basura con nulo estímulo extra',
    type: 'volume',
    metric: 'hardSetsPerPatternPerSession',
    optimalRange: { max: 12 },
    riskThresholds: { warning: { max: 12 } },
    appliesWhen: (ctx) => ctx.week.sessions > 0,
    resolveValue: (ctx) => maxPatternSetsPerSession(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_HYP, chapter: 2, page: 61 },
    messages: {
      warning: 'Hay sesiones que superan las 8-12 series de un mismo patrón: recorta volumen basura y reparte en otra sesión.',
    },
  },
  // ── VENTANA DE REPS POR SESIÓN (Sóberg: 40-75 reps hipertrofia, rule of 15) ──
  {
    id: 'fit:session-reps-window-hypertrophy',
    domain: 'fitness',
    description: '40-75 repeticiones totales por grupo muscular en la sesión (hipertrofia); <15 reps en la sesión no supera el umbral mínimo',
    type: 'volume',
    metric: 'hardRepsPerPatternPerSession',
    optimalRange: { min: 40, max: 75 },
    riskThresholds: { warning: { min: 15, max: 75 }, violation: { min: 15 } },
    appliesWhen: (ctx) => ctx.week.sessions > 0,
    resolveValue: (ctx) => maxPatternRepsPerSession(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OG2, chapter: 2, page: 43 },
    messages: {
      warning: 'Reps por patrón fuera de la ventana 40-75 por sesión: ajusta series×reps para caer en el rango de hipertrofia.',
      violation: 'Sesiones por debajo de 15 reps totales por ejercicio: estímulo insuficiente (regla de las 15 repeticiones).',
    },
  },
  // ── SUEÑO (Nippard Ladder: 7-9h; OG2: ≥7h mínimo) ──
  {
    id: 'fit:sleep-duration-weekly',
    domain: 'fitness',
    description: '7-9 h de sueño por noche; déficit crónico <6 h reduce la síntesis proteica miofibrilar y eleva la pérdida de masa magra',
    type: 'lifestyle',
    metric: 'avgSleepHours',
    optimalRange: { min: 7, max: 9 },
    riskThresholds: { warning: { min: 6 } },
    appliesWhen: (ctx) => ctx.week.avgSleepHours !== undefined,
    resolveValue: (ctx) => ctx.week.avgSleepHours,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_LADDER, chapter: 14, page: 528 },
    messages: {
      warning: 'Sueño por debajo del objetivo 7-9 h: reduce volumen de entrenamiento hasta recuperar el déficit.',
    },
  },
  // ── ENFERMEDAD / NECK RULE (OG2: síntomas bajo el cuello = reposo) ──
  {
    id: 'fit:illness-gate-neck-rule',
    domain: 'fitness',
    description: 'Regla del cuello: con síntomas sistémicos (fiebre, tos profunda, malestar general) el entrenamiento exige reposo absoluto',
    type: 'rest',
    metric: 'illnessDaysLast7',
    optimalRange: { min: 0, max: 0 },
    riskThresholds: { warning: { min: 0, max: 0 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => illnessDaysLast7(ctx),
    confidence: 'inferred',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OG2, chapter: 14, page: 818 },
    messages: {
      warning: 'Días con enfermedad registrada esta semana: limita a actividad suave (LISS/movilidad) o descansa según la regla del cuello.',
    },
  },
  // ── AERÓBICO (ACSM FITT: ≥150 min/sem moderado o ≥75 vigoroso) ──
  {
    id: 'fit:aerobic-minutes-weekly',
    domain: 'fitness',
    description: 'Mínimo 150 min/semana de aeróbico moderado (30-60 min/día) o 75 min vigorosos para salud cardiovascular',
    type: 'volume',
    metric: 'aerobicMinutesPerWeek',
    optimalRange: { min: 150 },
    riskThresholds: { warning: { min: 75 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => cardioMinutesOfWeek(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ACSM, chapter: 6, page: 143 },
    messages: {
      warning: 'Minutos aeróbicos semanales por debajo del mínimo ACSM: añade sesiones moderadas de 30-60 min.',
    },
  },
  // ── CARDIO CONCURRENTE (Israetel: máx 2-3 sesiones 20-30 min en ganancia) ──
  {
    id: 'fit:cardio-cap-concurrent',
    domain: 'fitness',
    description: 'En fases de ganancia muscular limitar el cardio a 2-3 sesiones semanales de 20-30 min (interferencia AMPK vs mTOR)',
    type: 'lifestyle',
    metric: 'cardioSessionsPerWeek',
    optimalRange: { min: 0, max: 3 },
    riskThresholds: { warning: { min: 0, max: 3 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => cardioSessionsOfWeek(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_HYP, chapter: 7, page: 314 },
    messages: {
      warning: 'Exceso de cardio concurrente para una fase de ganancia muscular: recorta a 2-3 sesiones de 20-30 min y sepáralo ≥6-8 h de la fuerza.',
    },
  },
  // ── SUELO DE ESFUERZO (Israetel: 0-3 RIR; ≥4-5 RIR = estímulo insuficiente) ──
  {
    id: 'fit:effort-floor-rpe',
    domain: 'fitness',
    description: 'Proximidad al fallo 0-3 RIR (≈RPE 7-10): entrenar sistemáticamente a ≥4-5 RIR no recluta suficientes unidades motoras de alto umbral',
    type: 'intensity',
    metric: 'avgSessionRpe',
    optimalRange: { min: 7, max: 10 },
    riskThresholds: { warning: { min: 7 } },
    appliesWhen: (ctx) => ctx.week.avgSessionRpe !== undefined,
    resolveValue: (ctx) => ctx.week.avgSessionRpe,
    confidence: 'inferred',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_HYP, chapter: 2, page: 55 },
    messages: {
      warning: 'RPE medio por debajo de la zona 0-3 RIR: las series están demasiado lejos del fallo para estimular hipertrofia.',
    },
  },
  // ── BANDA DE VOLUMEN FASE FUERZA (Israetel STR: 10-20 series/patrón/sem) ──
  {
    id: 'fit:volume-band-strength-phase',
    domain: 'fitness',
    description: 'Bloque de fuerza básica: 10-20 series/patrón/semana a ≥75% 1RM (3-6 reps)',
    type: 'volume',
    metric: 'hardSetsPerPatternPerWeek',
    optimalRange: { min: 10, max: 20 },
    riskThresholds: { warning: { min: 10, max: 20 } },
    appliesWhen: (ctx) =>
      (ctx.domain?.phase as string | undefined) === 'strength' && ctx.week.sessions > 0,
    resolveValue: (ctx) => maxPatternSets(ctx.week),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_STR, chapter: 4, page: 76 },
    messages: {
      warning: 'Volumen del patrón fuera de la banda 10-20 series/semana del bloque de fuerza básica.',
    },
  },
  // ── FRECUENCIA TIRÓN PESADO (Israetel STR: deadlift 1-1.5×/sem, recuperación 5-7 días) ──
  {
    id: 'fit:frequency-heavy-hinge',
    domain: 'fitness',
    description: 'Peso muerto pesado: 1-1.5×/semana (la fatiga axial y del SNC de tracciones >85% exige 5-7 días de recuperación)',
    type: 'frequency',
    metric: 'sessionsPerPatternPerWeekHinge',
    optimalRange: { min: 1, max: 1.5 },
    riskThresholds: { warning: { min: 1, max: 2 } },
    appliesWhen: (ctx) => ctx.week.byPattern.some((p) => p.pattern === 'hinge' && p.hardSets > 0),
    resolveValue: (ctx) => hingeSessions(ctx),
    confidence: 'inferred',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_STR, chapter: 6, page: 190 },
    messages: {
      warning: 'Frecuencia de hinge pesado por encima de lo recomendable para su curva SRA: espacia las sesiones 5-7 días.',
    },
  },
  // ── FRECUENCIA TÉCNICA (Israetel STR: técnica pura 4-6×/sem, SRA 12-24 h) ──
  {
    id: 'fit:skill-practice-frequency',
    domain: 'fitness',
    description: 'Práctica técnica (skills calisténicas): frecuencia óptima 4-6×/semana gracias a su curva SRA de 12-24 h',
    type: 'frequency',
    metric: 'skillPracticeDaysLast7',
    optimalRange: { min: 4, max: 6 },
    riskThresholds: { warning: { min: 3, max: 7 } },
    appliesWhen: (ctx) =>
      ctx.userState.skills.some(
        (s) => s.skillId.startsWith('fit:') && (s.practiceLog?.length ?? 0) > 0,
      ),
    resolveValue: (ctx) => fitSkillDaysLast7(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_STR, chapter: 6, page: 190 },
    messages: {
      warning: 'Práctica de skill por debajo de 4-6 días/semana: la técnica se aprende con frecuencia alta y sesiones frescas.',
    },
  },
  // ── VOLUMEN POR NIVEL (Nippard Ladder ch8: 6-10 / 10-16 / 12-20) ──
  {
    id: 'fit:volume-band-beginner',
    domain: 'fitness',
    description: 'Principiante (0-1 años): 6-10 series efectivas/músculo/semana (alta sensibilidad adaptativa con mínima fatiga)',
    type: 'volume',
    metric: 'hardSetsPerPatternPerWeek',
    optimalRange: { min: 6, max: 10 },
    riskThresholds: { warning: { min: 6, max: 10 } },
    appliesWhen: (ctx) => {
      const ta = trainingAge(ctx);
      return ta !== undefined && ta < 1 && ctx.week.sessions > 0;
    },
    resolveValue: (ctx) => maxPatternSets(ctx.week),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_LADDER, chapter: 8, page: 148 },
    messages: {
      warning: 'Volumen fuera de 6-10 series/músculo/semana para principiantes: más volumen no compensa la técnica.',
    },
  },
  {
    id: 'fit:volume-band-intermediate',
    domain: 'fitness',
    description: 'Intermedio (1-3 años): 10-16 series efectivas/músculo/semana',
    type: 'volume',
    metric: 'hardSetsPerPatternPerWeek',
    optimalRange: { min: 10, max: 16 },
    riskThresholds: { warning: { min: 10, max: 16 } },
    appliesWhen: (ctx) => {
      const ta = trainingAge(ctx);
      return ta !== undefined && ta >= 1 && ta < 3 && ctx.week.sessions > 0;
    },
    resolveValue: (ctx) => maxPatternSets(ctx.week),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_LADDER, chapter: 8, page: 148 },
    messages: {
      warning: 'Volumen fuera de 10-16 series/músculo/semana para tu nivel intermedio.',
    },
  },
  {
    id: 'fit:volume-band-advanced',
    domain: 'fitness',
    description: 'Avanzado (3-5+ años): 12-20 series efectivas/músculo/semana (techo práctico antes del volumen basura)',
    type: 'volume',
    metric: 'hardSetsPerPatternPerWeek',
    optimalRange: { min: 12, max: 20 },
    riskThresholds: { warning: { min: 12, max: 20 } },
    appliesWhen: (ctx) => {
      const ta = trainingAge(ctx);
      return ta !== undefined && ta >= 3 && ctx.week.sessions > 0;
    },
    resolveValue: (ctx) => maxPatternSets(ctx.week),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_LADDER, chapter: 8, page: 148 },
    messages: {
      warning: 'Volumen fuera de 12-20 series/músculo/semana para nivel avanzado: ajusta antes de añadir volumen basura.',
    },
  },
  // ── PROTEÍNA (Nippard Ladder ch14: 1.6-2.2 g/kg/día) ──
  {
    id: 'fit:protein-g-per-kg',
    domain: 'fitness',
    description: 'Proteína 1.6-2.2 g/kg/día (sube a 2.0-2.6 en déficit agresivo) para proteger la síntesis proteica miofibrilar',
    type: 'nutrition',
    metric: 'proteinGPerKg',
    optimalRange: { min: 1.6, max: 2.2 },
    riskThresholds: { warning: { min: 1.6, max: 2.2 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => proteinPerKg(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_LADDER, chapter: 14, page: 462 },
    messages: {
      warning: 'Ingesta proteica fuera de 1.6-2.2 g/kg/día: registra proteína diaria para poder evaluarla.',
    },
  },
  // ── VELOCIDAD DE GANANCIA/PÉRDIDA (Nippard Ladder ch14: +0.25-0.50% / −0.5 a −1.0% semanal) ──
  {
    id: 'fit:bulk-gain-velocity',
    domain: 'fitness',
    description: 'Lean bulk: superávit de +200-400 kcal orientado a +0.25-0.50% del peso corporal por semana',
    type: 'progression',
    metric: 'bodyWeightDeltaPctPerWeek',
    optimalRange: { min: 0.25, max: 0.5 },
    riskThresholds: { warning: { min: 0.25, max: 0.5 } },
    appliesWhen: (ctx) => (ctx.domain?.phase as string | undefined) === 'bulk',
    resolveValue: (ctx) => weightVelocityPctPerWeek(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_LADDER, chapter: 14, page: 372 },
    messages: {
      warning: 'Velocidad de ganancia fuera de +0.25-0.50%/semana: ajusta el superávit (demasiado rápido = grasa; parado = sin superávit).',
    },
  },
  {
    id: 'fit:cut-loss-velocity',
    domain: 'fitness',
    description: 'Cut: déficit de −300-500 kcal orientado a −0.5-1.0% del peso corporal por semana',
    type: 'progression',
    metric: 'bodyWeightDeltaPctPerWeek',
    optimalRange: { min: -1.0, max: -0.5 },
    riskThresholds: { warning: { min: -1.0, max: -0.5 } },
    appliesWhen: (ctx) => (ctx.domain?.phase as string | undefined) === 'cut',
    resolveValue: (ctx) => weightVelocityPctPerWeek(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_LADDER, chapter: 14, page: 372 },
    messages: {
      warning: 'Velocidad de pérdida fuera de −0.5-1.0%/semana: déficit demasiado agresivo (masa magra) o insuficiente.',
    },
  },
  // ── ESPACIADO 48 h MISMO PATRÓN (Nippard Ladder ch14; co-cita ACSM ch6, OG2 ch7) ──
  {
    id: 'fit:pattern-spacing-48h',
    domain: 'fitness',
    description: 'Mínimo 48 h de recuperación entre sesiones directas del mismo grupo muscular/patrón',
    type: 'rest',
    metric: 'minDaysBetweenPatternSessions',
    optimalRange: { min: 2 },
    riskThresholds: { warning: { min: 2 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => minGapDaysSamePattern(ctx),
    confidence: 'inferred',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_LADDER, chapter: 14, page: 528 },
    messages: {
      warning: 'Hay sesiones del mismo patrón separadas por <48 h: la calidad mecánica de la segunda sesión cae.',
    },
  },
  // ── ACWR (OTend ch6: zona segura 0.8-1.3; >1.5 zona de peligro) ──
  {
    id: 'fit:acwr-zone',
    domain: 'fitness',
    description: 'Ratio carga aguda:crónica (semana actual vs media 3 previas) en zona segura 0.8-1.3; >1.5 es zona de peligro de sobreuso',
    type: 'progression',
    metric: 'acuteChronicWorkloadRatio',
    optimalRange: { min: 0.8, max: 1.3 },
    riskThresholds: { warning: { min: 0.8, max: 1.5 }, violation: { max: 1.5 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => acuteChronicRatio(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OTEND, chapter: 6, page: 130 },
    messages: {
      warning: 'ACWR fuera de la zona segura 0.8-1.3: pico de carga (spike) o detraining relativo respecto a tu carga crónica.',
      violation: 'ACWR >1.5 (zona de peligro): recorta el volumen de la semana para evitar sobreuso/lesión.',
    },
  },
  // ── MOVILIDAD (ACSM ch6: flexibilidad ≥2-3 días/sem, óptimo diaria) ──
  {
    id: 'fit:mobility-frequency-2-3',
    domain: 'fitness',
    description: 'Trabajo de flexibilidad/movilidad ≥2-3 días/semana (óptimo diario), hasta ligera tensión sin dolor',
    type: 'frequency',
    metric: 'mobilitySessionsPerWeek',
    optimalRange: { min: 2 },
    riskThresholds: { warning: { min: 2 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => mobilitySessions(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ACSM, chapter: 6, page: 177 },
    messages: {
      warning: 'Menos de 2-3 sesiones de movilidad esta semana: añade trabajo de flexibilidad al final de las sesiones.',
    },
  },
  // ── DOSIS SEMANAL TENDINOSA (OTend ch4: 21-42 series totales/semana por región) ──
  {
    id: 'fit:tendon-weekly-set-dose',
    domain: 'fitness',
    description: 'Con tendinopatía: dosis acumulada de 21-42 series totales/semana por región tendinosa (3-4 series por ejercicio)',
    type: 'volume',
    metric: 'tendonWeeklySets',
    optimalRange: { min: 21, max: 42 },
    riskThresholds: { warning: { min: 21, max: 42 } },
    appliesWhen: (ctx) => ctx.userState.profile.conditions.includes('tendinopathy'),
    resolveValue: (ctx) => ctx.domain?.tendonWeeklySets as number | undefined,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OTEND, chapter: 4, page: 65 },
    messages: {
      warning: 'Dosis tendinosa fuera de 21-42 series/semana: por debajo no hay mecanotransducción suficiente; por encima, balance negativo de matriz.',
    },
  },
  // ── SCREENING DORSIFLEXIÓN (Squat Bible ch5.1: knee-to-wall ≥10-12 cm) ──
  {
    id: 'fit:ankle-dorsiflexion-ktw',
    domain: 'fitness',
    description: 'Test rodilla-a-pared: dorsiflexión suficiente si la rodilla toca la pared a ≥10-12 cm sin despegar el talón',
    type: 'mobility',
    metric: 'kneeToWallCm',
    optimalRange: { min: 10 },
    riskThresholds: { warning: { min: 10 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => ctx.domain?.kneeToWallCm as number | undefined,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_SQUAT_BIBLE, chapter: '5.1' },
    messages: {
      warning: 'Dorsiflexión restringida (<10 cm en knee-to-wall): compensaciones en sentadilla; corrige tobillo antes de cargar profundo.',
    },
  },
  // ── INTENSIDAD DE ESTIRAMIENTO (Blahnik ch1 p8: RPE 6-8 óptimo, 9-10 contraindicado) ──
  {
    id: 'fit:stretch-intensity-zone',
    domain: 'fitness',
    description: 'Zona óptima de elongación en RPE 6-8 (tensión firme sin dolor); niveles 9-10 disparan el reflejo miotático y están contraindicados',
    type: 'mobility',
    metric: 'stretchIntensityRpe',
    optimalRange: { min: 6, max: 8 },
    riskThresholds: { warning: { min: 4, max: 8 }, violation: { max: 8 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => ctx.domain?.stretchRpe as number | undefined,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_BLAHNIK, chapter: 1, page: 8 },
    messages: {
      warning: 'Estiramiento fuera de la zona RPE 6-8: demasiado suave (sin adaptación) o excesivo.',
      violation: 'Estirar con dolor (RPE 9-10) dispara la contracción refleja y riesgo de microdesgarro: reduce la intensidad.',
    },
  },
  // ── HOLD DE ESTIRAMIENTO ESTÁTICO (OG2 ch11: 30-60 s por serie) ──
  {
    id: 'fit:static-stretch-hold',
    domain: 'fitness',
    description: 'Estiramiento estático al final de la sesión: 3-6 series de 30-60 s con respiración profunda',
    type: 'mobility',
    metric: 'staticStretchHoldSeconds',
    optimalRange: { min: 30, max: 60 },
    riskThresholds: { warning: { min: 30, max: 60 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => ctx.domain?.staticStretchHoldSeconds as number | undefined,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OG2, chapter: 11, page: 244 },
    messages: {
      warning: 'Holds de estiramiento estático fuera de 30-60 s: ajusta la duración para relajación viscoelástica del colágeno.',
    },
  },
  // ── RESISTENCIA LUMBAR (Wilson ch6: Biering-Sørensen 140-160 s; <100 s predictor LBP) ──
  {
    id: 'fit:lumbar-endurance-sorensen',
    domain: 'fitness',
    description: 'Test de Biering-Sørensen: referencia sana 140-160 s; valores <100 s predicen dolor lumbar recurrente',
    type: 'pain',
    metric: 'sorensenHoldSeconds',
    optimalRange: { min: 140 },
    riskThresholds: { warning: { min: 100 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => ctx.domain?.sorensenHoldSeconds as number | undefined,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_WILSON, chapter: 6 },
    messages: {
      warning: 'Resistencia lumbar bajo la referencia (o <100 s, predictor de dolor lumbar): prescribe trabajo de extensión/anti-flexión.',
    },
  },
  // ── CRITERIO RETORNO LCA (Wilson ch1: LSI ≥90%) ──
  {
    id: 'fit:acl-return-lsi',
    domain: 'fitness',
    description: 'Retorno al deporte post-LCA solo con Índice de Simetría de Extremidades (LSI) ≥90% en fuerza y saltos unipodales',
    type: 'pain',
    metric: 'limbSymmetryIndexPct',
    optimalRange: { min: 90 },
    riskThresholds: { violation: { max: 90 } },
    appliesWhen: (ctx) => (ctx.domain?.aclReturnToSport as boolean | undefined) === true,
    resolveValue: (ctx) => ctx.domain?.limbSymmetryIndexPct as number | undefined,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_WILSON, chapter: 1, page: 1 },
    messages: {
      violation: 'LSI <90%: contraindicado el retorno deportivo completo; continúa rehabilitación unilateral.',
    },
  },
  // ── ESTÁNDARES UFC PI (Dias ch3 p74) ──
  {
    id: 'fit:vo2max-standard-male',
    domain: 'fitness',
    description: 'Estándar élite MMA (hombres): VO2max ≥55-62 mL/kg/min (>60 óptimo)',
    type: 'intensity',
    metric: 'vo2maxMlKgMin',
    optimalRange: { min: 55 },
    riskThresholds: { warning: { min: 55 } },
    appliesWhen: (ctx) => ctx.userState.profile.sex === 'male',
    resolveValue: (ctx) => latestMetric(ctx.userState, 'vo2max')?.value,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_DIAS, chapter: 3, page: 74 },
    messages: {
      warning: 'VO2max bajo el estándar élite de combate (≥55 mL/kg/min): prioriza trabajo aeróbico de base e intervalos.',
    },
  },
  {
    id: 'fit:vo2max-standard-female',
    domain: 'fitness',
    description: 'Estándar élite MMA (mujeres): VO2max ≥48-55 mL/kg/min',
    type: 'intensity',
    metric: 'vo2maxMlKgMin',
    optimalRange: { min: 48 },
    riskThresholds: { warning: { min: 48 } },
    appliesWhen: (ctx) => ctx.userState.profile.sex === 'female',
    resolveValue: (ctx) => latestMetric(ctx.userState, 'vo2max')?.value,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_DIAS, chapter: 3, page: 74 },
    messages: {
      warning: 'VO2max bajo el estándar élite de combate (≥48 mL/kg/min): prioriza trabajo aeróbico de base e intervalos.',
    },
  },
  {
    id: 'fit:strength-standard-squat-bw',
    domain: 'fitness',
    description: 'Estándar élite MMA: back squat 1.7-2.0× el peso corporal',
    type: 'intensity',
    metric: 'squatToBodyweightRatio',
    optimalRange: { min: 1.7 },
    riskThresholds: { warning: { min: 1.7 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => squatToBodyweight(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_DIAS, chapter: 3, page: 74 },
    messages: {
      warning: 'Fuerza relativa de sentadilla bajo el estándar 1.7×BW: bloque de fuerza básica con progresión ≥75% 1RM.',
    },
  },
  // ── DOSIFICACIÓN ISOMÉTRICA (OG2 ch9 tabla canónica: 3-8 series según max hold) ──
  {
    id: 'fit:isometric-set-dosing',
    domain: 'fitness',
    description: 'Isométricos según max hold: entre 3 y 8 series por ejercicio (6-8 con holds de 1-3 s; 3 con holds de 27-30 s)',
    type: 'volume',
    metric: 'setsPerIsometricExercise',
    optimalRange: { min: 3, max: 8 },
    riskThresholds: { warning: { min: 3, max: 8 } },
    appliesWhen: () => true,
    resolveValue: (ctx) => ctx.domain?.isometricSetsPerExercise as number | undefined,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OG2, chapter: 9, page: 172 },
    messages: {
      warning: 'Series isométricas fuera de 3-8 por ejercicio: consulta la tabla de dosificación según tu tiempo máximo de hold.',
    },
  },
];
