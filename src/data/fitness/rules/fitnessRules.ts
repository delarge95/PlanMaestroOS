/**
 * fitnessRules.ts — Catálogo semilla de reglas deterministas de fitness.
 *
 * Corte vertical Fase 3: 10 reglas con cita REAL a los chunks curados en
 * `rag/fitness/fuentes/` (docId+chapter+page verificados contra los headers).
 * La escala (>100 reglas) se genera con la plantilla de
 * `docs/agents/HANDOFF-reglas.md` — nunca rangos no presentes en la fuente.
 *
 * Convenciones:
 * - `resolveValue` devuelve undefined ⇒ `not-applicable` (sin datos, nunca ok).
 * - Semántica de umbrales: riesgo cuando el valor cae FUERA del rango.
 */

import type { DomainRule, RuleContext } from '../../../lib/rules';
import type { PatternVolume, WeekAggregates } from '../../contracts/userState';

/** docIds verificables en rag/fitness/fuentes/ (manifest del dominio). */
const SRC_ISRAETEL_HYP = 'israetel-scientific-principles-hypertrophy'; // ch2 p61, ch3 p155
const SRC_NIPPARD_FUND = 'nippard-fundamentals-hypertrophy'; // p. 8 (tríada)
const SRC_OTEND = 'low-overcoming-tendonitis-2019'; // ch5 p85, ch4 p65
const SRC_HAFF = 'haff-essentials-strength-4ed'; // overtraining (Cap. 5-6)

/** helpers de contexto */

function patternsWithSets(week: WeekAggregates, min = 1): PatternVolume[] {
  return week.byPattern.filter((p) => p.hardSets >= min);
}

function maxPatternSets(week: WeekAggregates): number | undefined {
  const ps = patternsWithSets(week);
  if (!ps.length) return undefined;
  return ps.reduce((m, p) => Math.max(m, p.hardSets), 0);
}

function maxPatternFrequency(week: WeekAggregates): number | undefined {
  const ps = patternsWithSets(week);
  if (!ps.length) return undefined;
  return ps.reduce((m, p) => Math.max(m, p.sessions), 0);
}

function last7DaysGeneralPain(ctx: RuleContext): number | undefined {
  const logs = ctx.userState.dailyLogs.filter(
    (d) => d.generalPain !== undefined && d.date <= ctx.todayIso,
  );
  if (!logs.length) return undefined;
  return logs[logs.length - 1]?.generalPain;
}

function weekOverWeekRamp(ctx: RuleContext): number | undefined {
  if (!ctx.previousWeek) return undefined;
  const prev = ctx.previousWeek.hardSets;
  if (!prev || !ctx.week.hardSets) return undefined;
  return (ctx.week.hardSets - prev) / prev;
}

/** Catálogo semilla (10 reglas). */

export const FITNESS_SEED_RULES: DomainRule[] = [
  // ── VOLUMEN (Israetel RP: MV/MEV/MAV/MRV — 10-20 efectivas, junk >22) ──
  {
    id: 'fit:volume-mev-per-pattern',
    domain: 'fitness',
    description: 'Volumen mínimo efectivo: ≥10 series duras/semana por grupo muscular para progreso de hipertrofia',
    type: 'volume',
    metric: 'hardSetsPerPatternPerWeek',
    optimalRange: { min: 10 },
    riskThresholds: { warning: { min: 6 } },
    appliesWhen: (ctx) => ctx.week.sessions > 0,
    resolveValue: (ctx) => maxPatternSets(ctx.week),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_HYP, chapter: 2, page: 61 },
    messages: {
      warning: 'Por debajo del volumen mínimo efectivo: el estímulo de hipertrofia es subóptimo.',
    },
  },
  {
    id: 'fit:volume-mrv-per-pattern',
    domain: 'fitness',
    description: 'Techo de volumen recuperable: >22 series duras/semana por patrón entra en volumen basura',
    type: 'volume',
    metric: 'hardSetsPerPatternPerWeek',
    optimalRange: { max: 20 },
    riskThresholds: { warning: { max: 22 }, violation: { max: 26 } },
    appliesWhen: (ctx) => ctx.week.sessions > 0,
    resolveValue: (ctx) => maxPatternSets(ctx.week),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_HYP, chapter: 2, page: 61 },
    messages: {
      warning: 'Zona de volumen basura: fatiga desproporcionada sin hipertrofia extra.',
      violation: 'Muy por encima del techo de volumen recuperable: riesgo de sobreentrenamiento local.',
    },
  },
  // ── FRECUENCIA (Nippard: 2-3x por grupo/semana) ──
  {
    id: 'fit:frequency-2-3x-per-pattern',
    domain: 'fitness',
    description: 'Frecuencia 2-3 sesiones/semana por grupo muscular (dosis moderadas por sesión)',
    type: 'frequency',
    metric: 'sessionsPerPatternPerWeek',
    optimalRange: { min: 2, max: 3 },
    riskThresholds: { warning: { min: 1, max: 4 } },
    appliesWhen: (ctx) => ctx.week.sessions > 0,
    resolveValue: (ctx) => maxPatternFrequency(ctx.week),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_FUND, page: 8 },
    messages: {
      warning: 'Frecuencia fuera de 2-3x: considera repartir el volumen en más sesiones.',
    },
  },
  // ── INTENSIDAD (Nippard tríada: RPE 7-9 compuestos) ──
  {
    id: 'fit:session-rpe-ceiling',
    domain: 'fitness',
    description: 'RPE medio de sesión ≤ 9 (RIR 1-3 en compuestos; fallo sistemático = fatiga)',
    type: 'intensity',
    metric: 'avgSessionRpe',
    optimalRange: { max: 9 },
    riskThresholds: { warning: { max: 9.5 } },
    appliesWhen: (ctx) => ctx.week.avgSessionRpe !== undefined,
    resolveValue: (ctx) => ctx.week.avgSessionRpe,
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_NIPPARD_FUND, page: 8 },
    messages: {
      warning: 'RPE medio muy alto: fallo sistemático acumula fatiga sin estímulo extra.',
    },
  },
  // ── RAMP (Israetel progresión: saltos de volumen bruscos) ──
  {
    id: 'fit:volume-ramp-weekly',
    domain: 'fitness',
    description: 'Progresión de volumen entre semanas ≤ +20-30% (saltos bruscos superan el MRV)',
    type: 'progression',
    metric: 'weekOverWeekHardSetsDeltaPct',
    optimalRange: { min: 0, max: 0.3 },
    riskThresholds: { warning: { max: 0.5 } },
    appliesWhen: (ctx) => weekOverWeekRamp(ctx) !== undefined,
    resolveValue: (ctx) => weekOverWeekRamp(ctx),
    confidence: 'inferred',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_HYP, chapter: 2, page: 61 },
    messages: {
      warning: 'Salto de volumen semanal muy agresivo: sube en pasos de 1-3 series por ejercicio.',
    },
  },
  // ── DELOAD (Israetel: tras 4-6 semanas de acumulación) ──
  {
    id: 'fit:deload-due',
    domain: 'fitness',
    description: 'Deload tras 4-6 semanas de acumulación (fatiga washout, MV de mantenimiento)',
    type: 'rest',
    metric: 'weeksSinceDeload',
    optimalRange: { min: 0, max: 5 },
    riskThresholds: { warning: { max: 6 } },
    appliesWhen: () => false, // requiere tracking de mesociclo (no persistido aún): regla de catálogo
    resolveValue: (ctx) => (ctx.domain?.weeksSinceDeload as number | undefined),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_ISRAETEL_HYP, chapter: 3, page: 155 },
    messages: {
      warning: 'Mesociclo largo sin deload: programa una semana de descarga (volumen a MV).',
    },
  },
  // ── DOLOR (OTend: monitor 0-3 aceptable en no crónico) ──
  {
    id: 'fit:pain-session-ceiling',
    domain: 'fitness',
    description: 'Dolor durante entrenamiento ≤3/10 en tendinopatía no crónica (monitor 0-3)',
    type: 'pain',
    metric: 'generalPain',
    optimalRange: { min: 0, max: 3 },
    riskThresholds: { warning: { max: 5 }, violation: { max: 7 } },
    appliesWhen: (ctx) => last7DaysGeneralPain(ctx) !== undefined,
    resolveValue: (ctx) => last7DaysGeneralPain(ctx),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OTEND, chapter: 5, page: 85 },
    messages: {
      warning: 'Dolor >3/10 registrado: reduce carga/intensidad y vigila la evolución.',
      violation: 'Dolor alto persistente: detén la progresión y considera protocolo de descarga tendinosa.',
    },
  },
  {
    id: 'fit:pain-not-worse-next-day',
    domain: 'fitness',
    description: 'Regla de no empeoramiento: el dolor no debe ser mayor al día siguiente de entrenar',
    type: 'pain',
    metric: 'painNextDayDelta',
    optimalRange: { min: -10, max: 0 },
    riskThresholds: { warning: { max: 1 }, violation: { max: 2 } },
    appliesWhen: () => false, // requiere pain con timing morning/next-day (PainEntry aún sin alimentarse): catálogo
    resolveValue: (ctx) => (ctx.domain?.painNextDayDelta as number | undefined),
    confidence: 'explicit',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OTEND, chapter: 5, page: 85 },
    messages: {
      warning: 'El dolor empeora al día siguiente: la carga está por encima de la tolerancia actual.',
    },
  },
  // ── FRECUENCIA TENDINOSA (OTend: carga frecuente > alta e intermitente) ──
  {
    id: 'fit:tendon-loading-frequency',
    domain: 'fitness',
    description: 'Estímulo tendinoso: más valioso frecuencia regular que volumen concentrado (mecanotransducción)',
    type: 'frequency',
    metric: 'sessionsPerWeek',
    optimalRange: { min: 2, max: 6 },
    riskThresholds: { warning: { min: 1 } },
    appliesWhen: (ctx) => ctx.week.sessions > 0,
    resolveValue: (ctx) => ctx.week.sessions,
    confidence: 'qualitative',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_OTEND, chapter: 4, page: 65 },
  },
  // ── SOBREENTRENAMIENTO (NSCA: screening de señales) ──
  {
    id: 'fit:overtraining-screening',
    domain: 'fitness',
    description: 'Screening OTS: estrés alto + dolor general + RPE elevado sostenido = bandera de descarga',
    type: 'lifestyle',
    metric: 'overtrainingFlags',
    optimalRange: { min: 0, max: 0 },
    riskThresholds: { warning: { max: 1 }, violation: { max: 2 } },
    appliesWhen: (ctx) => {
      const logs = ctx.userState.dailyLogs.filter((d) => d.date <= ctx.todayIso);
      return logs.length > 0;
    },
    resolveValue: (ctx) => {
      const recent = ctx.userState.dailyLogs.filter((d) => d.date <= ctx.todayIso).slice(-7);
      if (!recent.length) return undefined;
      const stressHigh = recent.filter((d) => (d.stress ?? 0) >= 7).length >= 3;
      const painHigh = recent.filter((d) => (d.generalPain ?? 0) >= 5).length >= 3;
      const rpeHigh = (ctx.week.avgSessionRpe ?? 0) >= 9;
      return [stressHigh, painHigh, rpeHigh].filter(Boolean).length;
    },
    confidence: 'inferred',
    evidenceTier: 'expert-book',
    sourceRef: { docId: SRC_HAFF, chapter: 5 },
    messages: {
      warning: 'Varias señales de sobreentrenamiento simultáneas: valora una descarga.',
      violation: 'Perfil compatible con síndrome de sobreentrenamiento: descarga y recuperación.',
    },
  },
];
