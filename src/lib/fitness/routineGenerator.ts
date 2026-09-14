// src/lib/fitness/routineGenerator.ts — Generador de rutinas por objetivo.
//
// El usuario declara QUÉ BUSCA (hipertrofia/fuerza/salud-endurance), días,
// equipamiento, minutos y énfasis; el motor arma la semana con el catálogo
// real de ejercicios respetando los landmarks de volumen (reglas
// fit:volume-mev-per-pattern / fit:volume-mrv-per-pattern) y EXCLUYENDO zonas
// marcadas por el advisory de salud activo. §0.1: rangos citados; la selección
// es determinista (scoring, sin azar).

import { exerciseDatabase } from '../../data/exercises/exerciseData';
import type { TrainingProgram, WorkoutDay, ExercisePrescription } from '../../data/fitness/programs/types';
import { registerGeneratedProgram } from '../../data/fitness/programs';

export type RoutineGoal = 'hypertrophy' | 'strength' | 'endurance-health';
export type EquipmentFilter = 'calisthenics' | 'gym' | 'mixed';

export interface RoutineRequest {
  goal: RoutineGoal;
  daysPerWeek: 2 | 3 | 4 | 5;
  equipment: EquipmentFilter;
  minutesPerSession: 30 | 45 | 60 | 75;
  /** Grupos a enfatizar ('chest', 'back', 'quadriceps'…). */
  emphasis: string[];
  /** Zonas a EVITAR (labels del advisory de salud, p.ej. 'Rodilla'). */
  avoidZones: string[];
}

export interface GeneratedExercise {
  exerciseId: string;
  name: string;
  sets: number;
  repRange: string;
  rir: number;
  restSeconds: number;
  muscleGroups: string[];
}

export interface GeneratedDay {
  name: string;
  focus: string;
  exercises: GeneratedExercise[];
}

export interface GeneratedRoutine {
  request: RoutineRequest;
  days: GeneratedDay[];
  weeklyHardSets: number;
  citations: string[];
}

/** Patrones por plantilla de semana (v1). */
const TEMPLATES: Record<number, Array<{ name: string; focus: string; patterns: string[] }>> = {
  2: [
    { name: 'Día 1 — Full A (empuje dominante)', focus: 'Empuje + cuádriceps + core', patterns: ['push-h', 'push-v', 'quad', 'core'] },
    { name: 'Día 2 — Full B (tracción dominante)', focus: 'Tracción + posterior + core', patterns: ['pull-h', 'pull-v', 'hamstring', 'core'] },
  ],
  3: [
    { name: 'Día 1 — Empuje', focus: 'Pecho, hombro, tríceps', patterns: ['push-h', 'push-v', 'push-h', 'triceps'] },
    { name: 'Día 2 — Tracción', focus: 'Espalda, bíceps', patterns: ['pull-h', 'pull-v', 'biceps'] },
    { name: 'Día 3 — Piernas', focus: 'Cuádriceps, posterior, glúteo', patterns: ['quad', 'hamstring', 'quad', 'core'] },
  ],
  4: [
    { name: 'Día 1 — Upper (empuje)', focus: 'Pecho/hombro/tríceps', patterns: ['push-h', 'push-v', 'triceps'] },
    { name: 'Día 2 — Lower (cuádriceps)', focus: 'Cuádriceps + core', patterns: ['quad', 'quad', 'core'] },
    { name: 'Día 3 — Upper (tracción)', focus: 'Espalda/bíceps', patterns: ['pull-h', 'pull-v', 'biceps'] },
    { name: 'Día 4 — Lower (posterior)', focus: 'Cadena posterior + glúteo', patterns: ['hamstring', 'hamstring', 'core'] },
  ],
  5: [
    { name: 'Día 1 — Empuje', focus: 'Pecho, hombro', patterns: ['push-h', 'push-v', 'push-h'] },
    { name: 'Día 2 — Tracción', focus: 'Espalda, bíceps', patterns: ['pull-h', 'pull-v', 'biceps'] },
    { name: 'Día 3 — Piernas', focus: 'Completas', patterns: ['quad', 'hamstring', 'core'] },
    { name: 'Día 4 — Énfasis', focus: 'Lo que elijas enfatizar', patterns: ['emphasis-a', 'emphasis-b'] },
    { name: 'Día 5 — Cuerpo completo', focus: 'Patrones principales', patterns: ['push-h', 'pull-h', 'quad'] },
  ],
};

const PATTERN_KEYWORDS: Record<string, string[]> = {
  'push-h': ['press', 'push-up', 'pushup', 'bench', 'dip', 'pec'],
  'push-v': ['overhead', 'shoulder press', 'handstand', 'military', 'pike'],
  'pull-h': ['row', 'australian'],
  'pull-v': ['pull-up', 'pullup', 'pulldown', 'chin'],
  quad: ['squat', 'leg extension', 'leg press', 'lunge', 'step-up', 'pistol'],
  hamstring: ['deadlift', 'leg curl', 'nordic', 'hip hinge', 'romanian', 'glute'],
  core: ['plank', 'crunch', 'leg raise', 'hollow', 'l-sit', 'ab'],
  triceps: ['triceps', 'extension (triceps)', 'dip'],
  biceps: ['biceps', 'curl'],
  'emphasis-a': [],
  'emphasis-b': [],
};

const GOAL_PARAMS: Record<RoutineGoal, { sets: number; repRange: string; rir: number; rest: number; label: string }> = {
  hypertrophy: { sets: 3, repRange: '6-12', rir: 2, rest: 120, label: 'Hipertrofia' },
  strength: { sets: 4, repRange: '3-6', rir: 1, rest: 180, label: 'Fuerza' },
  'endurance-health': { sets: 2, repRange: '12-20', rir: 3, rest: 90, label: 'Salud/resistencia' },
};

const DISCIPLINE_OK: Record<EquipmentFilter, (cat: string) => boolean> = {
  calisthenics: (c) => /calisthenics|bands|mobility|trx/i.test(c),
  gym: (c) => /free weights|machines|cables|olympic/i.test(c),
  mixed: () => true,
};

interface PoolEntry { id: string; name: string; disc: string; muscles: string[] }

function exercisesByPattern(): PoolEntry[] {
  return Object.entries(exerciseDatabase).map(([id, info]) => {
    const rec = info as { category?: string; muscles?: { strength?: string[] } };
    return {
      id,
      name: id, // ExerciseInfo no trae name legible; el id es el display canónico
      disc: rec.category ?? '',
      muscles: rec.muscles?.strength ?? [],
    };
  });
}

function matchesPattern(ex: PoolEntry, pattern: string, emphasis: string[]): boolean {
  const hay = `${ex.name} ${ex.muscles.join(' ')}`.toLowerCase();
  if (pattern === 'emphasis-a' || pattern === 'emphasis-b') {
    return emphasis.some((e) => hay.includes(e.toLowerCase()));
  }
  return PATTERN_KEYWORDS[pattern].some((k) => hay.includes(k));
}

/** Evita zonas marcadas por el advisory (match por nombre de músculo). */
function loadsAvoidedZone(ex: PoolEntry, avoidZones: string[]): boolean {
  if (avoidZones.length === 0) return false;
  const hay = `${ex.name} ${ex.muscles.join(' ')}`.toLowerCase();
  return avoidZones.some((z) => hay.includes(z.toLowerCase()));
}

/** Genera la semana completa (determinista). */
export function generateRoutine(req: RoutineRequest): GeneratedRoutine {
  const pool = exercisesByPattern().filter((e) => DISCIPLINE_OK[req.equipment](e.disc) && !loadsAvoidedZone(e, req.avoidZones));
  const template = TEMPLATES[req.daysPerWeek] ?? TEMPLATES[3];
  const goal = GOAL_PARAMS[req.goal];
  // Nº de ejercicios por sesión según minutos (≈9 min/ejercicio con descansos).
  const perSession = Math.max(3, Math.min(8, Math.round(req.minutesPerSession / 9)));

  const used = new Set<string>();
  const days: GeneratedDay[] = template.map((d) => {
    const picked: GeneratedExercise[] = [];
    let patternIdx = 0;
    while (picked.length < perSession && patternIdx < d.patterns.length + 2) {
      const pattern = d.patterns[patternIdx % d.patterns.length];
      patternIdx += 1;
      const scored = pool
        .filter((e) => !used.has(e.id) && matchesPattern(e, pattern, req.emphasis))
        .map((e) => {
          const emph = req.emphasis.some((em) => `${e.name} ${e.muscles.join(' ')}`.toLowerCase().includes(em.toLowerCase())) ? 2 : 0;
          return { e, score: 3 + emph };
        })
        .sort((a, b) => b.score - a.score || a.e.name.localeCompare(b.e.name));
      if (scored.length === 0) continue;
      const best = scored[0].e;
      used.add(best.id);
      picked.push({
        exerciseId: best.id,
        name: best.name,
        sets: goal.sets,
        repRange: goal.repRange,
        rir: goal.rir,
        restSeconds: goal.rest,
        muscleGroups: best.muscles,
      });
    }
    // Pasada de relleno: si faltan ejercicios (patrón sin candidatos en el
    // equipamiento elegido), completa con el mejor del pool sin usar.
    if (picked.length < perSession) {
      for (const e of [...pool].sort((a, b) => a.name.localeCompare(b.name))) {
        if (picked.length >= perSession) break;
        if (used.has(e.id)) continue;
        used.add(e.id);
        picked.push({
          exerciseId: e.id, name: e.name, sets: goal.sets, repRange: goal.repRange,
          rir: goal.rir, restSeconds: goal.rest, muscleGroups: e.muscles,
        });
      }
    }
    return { name: d.name, focus: d.focus, exercises: picked };
  });

  const weeklyHardSets = days.reduce((n, d) => n + d.exercises.reduce((m, e) => m + e.sets, 0), 0);

  return {
    request: req,
    days,
    weeklyHardSets,
    citations: [
      'fit:volume-mev-per-pattern / fit:volume-mrv-per-pattern (10–20 series duras/patrón/semana como banda guía)',
      'fit:frequency-2-3x-per-pattern (2–3 estímulos/semana por patrón)',
      `Objetivo ${goal.label}: ${goal.sets}×${goal.repRange} a RIR ${goal.rir} (reposo ${goal.rest}s)`,
    ],
  };
}

/** Convierte la rutina generada en TrainingProgram, la registra y devuelve su id. */
export function activateGeneratedRoutine(r: GeneratedRoutine): { programId: string } {
  const programId = `gen-${r.request.goal}-${r.request.daysPerWeek}d-${Date.now().toString(36)}`;
  const days: WorkoutDay[] = r.days.map((d, i) => ({
    id: `${programId}-d${i + 1}`,
    name: d.name,
    exercises: d.exercises.map<ExercisePrescription>((e, j) => ({
      id: `${programId}-d${i + 1}-e${j + 1}`,
      exerciseId: e.exerciseId,
      displayName: e.name,
      warmupSets: 0,
      workingSets: e.sets,
      targetReps: e.repRange,
      earlySetRpe: `RIR ${e.rir}`,
      lastSetRpe: `RIR ${e.rir}`,
      restPeriod: `${Math.round(e.restSeconds / 60)}-${Math.round(e.restSeconds / 60) + 1} min`,
      notes: `Generado por objetivo (${r.request.equipment}); evitar zonas: ${r.request.avoidZones.join(', ') || 'ninguna'}`,
    })),
  }));
  const program = {
    id: programId,
    title: `Rutina generada — ${GOAL_PARAMS[r.request.goal].label} (${r.request.daysPerWeek} días · ${r.request.equipment})`,
    durationWeeks: 12,
    weeks: [{ id: `${programId}-w1`, weekNumber: 1, days }],
    category: 'Generada por objetivo',
    source: 'routineGenerator',
  } as unknown as TrainingProgram;
  registerGeneratedProgram(program);
  return { programId };
}
