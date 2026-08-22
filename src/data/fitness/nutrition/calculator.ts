// src/data/fitness/nutrition/calculator.ts — Motor determinista de targets de nutrición (AG-NUTRI)
// Puro, sin DOM. Cada output lleva sus reglas citadas desde rag/nutrition.json.
// Inferencias propias (no del libro) se marcan confidence 'inferred' en el detalle textual.

import type { ActivityLevel, DaySlot, Goal, NutritionInputs, Sex, TargetResult } from './types';
import { requireRule, toCitation } from './rules';

const round = (n: number, decimals = 0): number => {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
};

/**
 * Mapea horas/semana → nivel de actividad de la tabla 10.4 NSCA.
 * INFERENCIA PROPIA (no citada): la tabla original clasifica por estilo de vida;
 * la traducción de horas de entrenamiento es nuestra y queda documentada aquí.
 */
export function activityFromHours(trainingHoursPerWeek: number): { level: ActivityLevel; inferredNote: string } {
  if (trainingHoursPerWeek < 5) {
    return { level: 'light', inferredNote: 'Inferencia propia: <5 h/sem → ligera' };
  }
  if (trainingHoursPerWeek <= 10) {
    return { level: 'moderate', inferredNote: 'Inferencia propia: 5–10 h/sem → moderada' };
  }
  return { level: 'heavy', inferredNote: 'Inferencia propia: >10 h/sem → intensa' };
}

/** kcal/kg/día según sexo y nivel (tabla 10.4 NSCA ch10 p.217, rule nutri-nsca-kcal-kg-table). */
export function kcalPerKgByActivity(sex: Sex, level: ActivityLevel): number {
  const rule = requireRule('nutri-nsca-kcal-kg-table');
  const bySex = rule.values?.[sex] as Record<string, number> | undefined;
  if (!bySex || typeof bySex[level] !== 'number') {
    throw new Error('[nutrition] tabla kcal/kg incompleta en RAG');
  }
  return bySex[level];
}

/** Energía de mantenimiento (kcal/día) con su cita. */
export function maintenanceKcal(weightKg: number, sex: Sex, trainingHoursPerWeek: number): TargetResult {
  const { level, inferredNote } = activityFromHours(trainingHoursPerWeek);
  const kcalPerKg = kcalPerKgByActivity(sex, level);
  const value = round(weightKg * kcalPerKg);
  return {
    label: 'Mantenimiento',
    value,
    min: round(weightKg * (kcalPerKg - 2)),
    max: round(weightKg * (kcalPerKg + 2)),
    unit: 'kcal/día',
    detail: `${weightKg} kg × ${kcalPerKg} kcal/kg (${level === 'light' ? 'actividad ligera' : level === 'moderate' ? 'actividad moderada' : 'actividad intensa'}). ${inferredNote}.`,
    why: [toCitation('nutri-nsca-kcal-kg-table')],
  };
}

/** Ajuste calórico por objetivo (±500 kcal, NSCA ch10 pp.217–218). */
export function goalKcal(weightKg: number, sex: Sex, goal: Goal, trainingHoursPerWeek: number): TargetResult {
  const maintenance = maintenanceKcal(weightKg, sex, trainingHoursPerWeek);
  if (goal === 'maintenance') {
    return { ...maintenance, label: 'Objetivo: mantenimiento', why: [...maintenance.why] };
  }
  const delta = goal === 'deficit' ? -500 : 500;
  const ruleId = goal === 'deficit' ? 'nutri-nsca-cut-deficit' : 'nutri-nsca-bulk-surplus';
  const value = round(maintenance.value + delta);
  return {
    label: goal === 'deficit' ? 'Objetivo: déficit' : 'Objetivo: superávit',
    value,
    min: round(value - 100),
    max: round(value + 100),
    unit: 'kcal/día',
    detail: `${maintenance.value} kcal de mantenimiento ${delta > 0 ? '+' : '−'}${Math.abs(delta)} kcal.`,
    why: [toCitation(ruleId), toCitation('nutri-nsca-kcal-kg-table')],
  };
}

/** Proteína diaria (g/kg y g/día) según objetivo. */
export function proteinTarget(weightKg: number, goal: Goal): TargetResult {
  // Reglas: déficit 1.8–2.7 (ch9 p.190); superávit 1.5–2.0 (ch10 p.217); mantenimiento fuerza 1.4–1.7 (ch9 p.183).
  const ruleId =
    goal === 'deficit' ? 'nutri-nsca-protein-deficit' : goal === 'surplus' ? 'nutri-nsca-bulk-protein' : 'nutri-nsca-protein-strength';
  const rule = requireRule(ruleId);
  const values = rule.values as { min: number; max: number };
  const mid = (values.min + values.max) / 2;
  return {
    label: 'Proteína',
    value: round(weightKg * mid),
    min: round(weightKg * values.min),
    max: round(weightKg * values.max),
    unit: 'g/día',
    detail: `${mid.toFixed(2)} g/kg × ${weightKg} kg (rango citado ${values.min}–${values.max} g/kg).`,
    why: [toCitation(ruleId), toCitation('nutri-mau-strength-protein')],
  };
}

/** Carbohidratos diarios según volumen semanal (fuerza 5–6; resistencia/alto volumen 8–10 g/kg). */
export function choTarget(weightKg: number, trainingHoursPerWeek: number): TargetResult {
  const endurance = trainingHoursPerWeek > 10;
  const ruleId = endurance ? 'nutri-nsca-cho-endurance-daily' : 'nutri-nsca-strength-cho-daily';
  const rule = requireRule(ruleId);
  const values = rule.values as { min: number; max: number };
  const mid = (values.min + values.max) / 2;
  return {
    label: 'Carbohidratos',
    value: round(weightKg * mid),
    min: round(weightKg * values.min),
    max: round(weightKg * values.max),
    unit: 'g/día',
    detail: `${mid.toFixed(1)} g/kg × ${weightKg} kg (${endurance ? '>10 h/sem → pauta de resistencia' : 'entrenamiento de fuerza → 5–6 g/kg'}).`,
    why: [toCitation(ruleId), toCitation('nutri-mau-cho-daily-recovery')],
  };
}

/**
 * Hidratación diaria: base 2.5 L (Maughan ch17 p.226) + tasa citada de ejercicio 600–1200 ml/h
 * (Maughan ch8 p.115) repartida por el promedio diario de entrenamiento.
 * La combinación en un total diario es inferencia práctica propia.
 */
export function hydrationTarget(trainingHoursPerWeek: number): TargetResult {
  const base = 2.5; // L/día (citado)
  const hoursPerDay = trainingHoursPerWeek / 7;
  const low = base + hoursPerDay * 0.6;
  const high = base + hoursPerDay * 1.2;
  return {
    label: 'Hidratación',
    value: round((low + high) / 2, 1),
    min: round(low, 1),
    max: round(high, 1),
    unit: 'L/día',
    detail: `Base 2.5 L + 600–1200 ml por hora de entrenamiento (promedio ${hoursPerDay.toFixed(1)} h/día). Suma diaria = inferencia práctica.`,
    why: [toCitation('nutri-mau-hyd-baseline-daily'), toCitation('nutri-mau-hyd-during-600-1200')],
  };
}

/** Targets agrupados para la UI. */
export function computeTargets(inputs: NutritionInputs): TargetResult[] {
  return [
    goalKcal(inputs.weightKg, inputs.sex, inputs.goal, inputs.trainingHoursPerWeek),
    proteinTarget(inputs.weightKg, inputs.goal),
    choTarget(inputs.weightKg, inputs.trainingHoursPerWeek),
    hydrationTarget(inputs.trainingHoursPerWeek),
  ];
}

/** Dosis de proteína post-entreno según edad (jóvenes 20–25 g; 50+ ≥40 g). */
export function postWorkoutProteinGrams(ageYears?: number): { grams: string; ruleId: string } {
  const older = ageYears !== undefined && ageYears >= 50;
  return older
    ? { grams: '≥40 g', ruleId: 'nutri-nsca-protein-post-older' }
    : { grams: '20–25 g', ruleId: 'nutri-nsca-protein-post-young' };
}

/** Día tipo alineado al grid: franjas con macros y timing, SIN recetas (gastronomía). */
export function buildDayType(inputs: NutritionInputs): DaySlot[] {
  const { weightKg, trainingHoursPerWeek, ageYears } = inputs;
  const postProtein = postWorkoutProteinGrams(ageYears);
  const slots: DaySlot[] = [
    {
      id: 'desayuno',
      label: 'Desayuno',
      time: '~07:00',
      focus: 'Proteína completa + carbohidratos del día',
      lines: [
        { text: `${round(weightKg * 0.35)}–${round(weightKg * 0.5)} g de proteína (20–30 g de referencia por comida)`, why: [toCitation('nutri-nsca-protein-meal-20-30')] },
        { text: 'Distribuir la proteína cada 3–5 h a lo largo del día', why: [toCitation('nutri-3g-protein-distribution')] },
      ],
    },
    {
      id: 'pre-entreno',
      label: 'Pre-entreno (1–2 h antes)',
      time: '~17:00',
      focus: 'Carga de carbohidratos disponible',
      lines: [
        { text: `~${round(weightKg * 1)} g de CHO (comida 2 h antes)`, why: [toCitation('nutri-nsca-pre-2h')] },
        { text: 'Si la comida es 4 h antes: 1–4 g CHO/kg + 0.15–0.25 g proteína/kg', why: [toCitation('nutri-nsca-pre-4h')] },
      ],
    },
    {
      id: 'durante',
      label: 'Durante (sesiones > 60 min)',
      time: '~18:30',
      focus: 'CHO + fluido + electrolitos',
      lines: [
        { text: '30–90 g CHO/h con mezcla de azúcares (glucosa+fructosa)', why: [toCitation('nutri-nsca-during-cho')] },
        { text: '600–1200 ml/h de bebida deportiva (aporta el CHO y el fluido)', why: [toCitation('nutri-mau-hyd-during-600-1200')] },
        { text: 'En calor: bebida con Na 460–690 mg/L, K 78–195 mg/L, CHO 5–10%', why: [toCitation('nutri-nsca-during-drink-electrolytes')] },
      ],
    },
    {
      id: 'post',
      label: 'Post-entreno (0–30 min)',
      time: '~19:45',
      focus: 'Resíntesis de glucógeno + síntesis proteica',
      lines: [
        { text: `~${round(weightKg * 1.5)} g de CHO (1.5 g/kg en los primeros 30 min)`, why: [toCitation('nutri-nsca-post-cho-30min')] },
        { text: `${postProtein.grams} de proteína rica en leucina (2–3 g)`, why: [toCitation(postProtein.ruleId)] },
        { text: 'Resíntesis rápida: 1.0–1.85 g CHO/kg/h cada 15–60 min hasta 5 h si hay sesión <24 h', why: [toCitation('nutri-nsca-post-glycogen-rate')] },
      ],
    },
    {
      id: 'cena',
      label: 'Cena',
      time: '~21:00',
      focus: 'Cerrar targets del día + rehidratación',
      lines: [
        { text: `${round(weightKg * 0.35)}–${round(weightKg * 0.5)} g de proteína en la comida`, why: [toCitation('nutri-nsca-protein-meal-20-30')] },
        { text: 'Rehidratar con ≥150% del peso perdido en la sesión (con sodio si no hay comida)', why: [toCitation('nutri-mau-hyd-post-150pct'), toCitation('nutri-mau-hyd-post-na-50')] },
        { text: `Volumen semanal registrado: ${trainingHoursPerWeek} h → guía de CHO del día`, why: [toCitation('nutri-nsca-strength-cho-daily')] },
      ],
    },
  ];
  return slots;
}
