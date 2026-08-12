// src/data/fitness/programs/index.ts - Unified Catalog Export
import type { TrainingProgram } from './types';
import { minMaxProgram } from './minMax';
import { powerbuildingProgram } from './powerbuilding';
import { bodybuildingTransformationProgram } from './bodybuildingTransformation';
import { gluteHypertrophyProgram } from './gluteHypertrophy';
import { thenxPrograms } from './thenxPrograms';
import { thenxMasterRoutines } from './thenxMasterRoutines';

export * from './types';
export { minMaxProgram } from './minMax';
export { powerbuildingProgram } from './powerbuilding';
export { bodybuildingTransformationProgram } from './bodybuildingTransformation';
export { gluteHypertrophyProgram } from './gluteHypertrophy';
export { calisthenicsSkillTree } from './calisthenicsPaths';
export { thenxPrograms } from './thenxPrograms';
export { thenxMasterRoutines } from './thenxMasterRoutines';

/**
 * Normaliza programas de cualquier fuente (FitApp, Heria, Nippard, PlanMaestro)
 * garantizando la integridad de semanas, días, ejercicios y clasificación por Tier.
 */
export function normalizeProgram(raw: any): TrainingProgram {
  const rawWeeks = Array.isArray(raw.weeks) ? raw.weeks : [];
  const durationWeeks = raw.durationWeeks || rawWeeks.length || 1;
  const rawType = raw.type || (durationWeeks > 1 ? 'program' : 'day');

  // Clasificación por Tier (Programas 2+ sem, Semanales 2-7 días, Diarios 1 día)
  let programTier: 'program' | 'week' | 'day' = 'program';
  if (rawType === 'day' || (durationWeeks === 1 && rawWeeks[0]?.schedule?.length === 1)) {
    programTier = 'day';
  } else if (rawType === 'week' || (durationWeeks === 1 && (rawWeeks[0]?.schedule?.length > 1 || rawWeeks[0]?.days?.length > 1))) {
    programTier = 'week';
  } else {
    programTier = 'program';
  }

  // Clasificación por Autor / Origen
  let authorCategory = raw.authorCategory || '📖 PlanMaestro OS';
  if (raw.id?.startsWith('thenx') || raw.category?.includes('Heria') || raw.source?.includes('Heria')) {
    authorCategory = '🔥 Chris Heria / Thenx';
  } else if (
    raw.category?.includes('Nippard') ||
    raw.source?.includes('Nippard') ||
    ['minMax', 'powerbuilding', 'bodybuildingTransformation', 'gluteHypertrophy'].includes(raw.id)
  ) {
    authorCategory = '🧠 Jeff Nippard / Ciencia & Hipertrofia';
  }

  // Clasificación por Disciplina
  let discipline = raw.discipline || 'Calistenia';
  if (authorCategory.includes('Heria') || raw.id === 'calisthenics') {
    discipline = 'Calistenia';
  } else if (raw.id === 'powerbuilding') {
    discipline = 'Powerbuilding';
  } else if (['minMax', 'bodybuildingTransformation', 'gluteHypertrophy'].includes(raw.id)) {
    discipline = 'Hipertrofia / Bodybuilding';
  }

  // Mapeo riguroso de Semanas con números de semana consecutivos (corrige error 1 1 1...)
  const weeks = rawWeeks.map((w: any, wIdx: number) => {
    const weekNumber = w.weekNumber || w.week || (wIdx + 1);
    const weekTitle = w.title || w.name || `Semana ${weekNumber}`;
    const rawDays = Array.isArray(w.days) ? w.days : Array.isArray(w.schedule) ? w.schedule : [];

    const days = rawDays.map((d: any, dIdx: number) => {
      const dayId = d.id || `${raw.id}-w${weekNumber}-d${dIdx + 1}`;
      const dayName = d.name || d.title || `Día ${dIdx + 1}`;

      const exercises = (Array.isArray(d.exercises) ? d.exercises : []).map((ex: any, eIdx: number) => {
        let workingSets = ex.workingSets;
        if (workingSets === undefined && Array.isArray(ex.sets)) {
          workingSets = ex.sets.reduce((acc: number, s: any) => acc + (s.sets || 1), 0);
        }

        let targetReps = ex.targetReps || ex.repRange;
        if (!targetReps && Array.isArray(ex.sets) && ex.sets[0]?.reps) {
          targetReps = ex.sets[0].reps;
        }

        let restPeriod = ex.restPeriod || ex.rest;
        if (!restPeriod && Array.isArray(ex.sets) && ex.sets[0]?.notes) {
          const match = ex.sets[0].notes.match(/Rest\s+(\d+\s*\w+)/i);
          if (match) restPeriod = match[1];
        }

        let notes = ex.notes || '';
        if (!notes && Array.isArray(ex.sets) && ex.sets[0]?.notes) {
          notes = ex.sets[0].notes;
        }

        return {
          id: ex.id || `${dayId}-ex${eIdx + 1}`,
          exerciseId: ex.exerciseId || ex.id || ex.name || 'exercise',
          displayName: ex.displayName || ex.name || 'Ejercicio',
          workingSets: workingSets || 3,
          targetReps: targetReps || '8-12',
          warmupSets: ex.warmupSets || 0,
          restPeriod: restPeriod || '60s',
          notes: notes
        };
      });

      return {
        id: dayId,
        name: dayName,
        title: dayName,
        exercises
      };
    });

    return {
      ...w,
      weekNumber,
      week: weekNumber,
      title: weekTitle,
      name: weekTitle,
      days
    };
  });

  return {
    ...raw,
    id: raw.id,
    title: raw.title || raw.name || 'Programa sin título',
    type: rawType,
    programTier,
    authorCategory,
    discipline,
    source: raw.source || (authorCategory.includes('Heria') ? 'Chris Heria / Thenx' : authorCategory.includes('Nippard') ? 'Jeff Nippard' : 'PlanMaestro OS'),
    durationWeeks,
    split: raw.split || ['Calistenia', 'Fuerza', 'Habilidad'],
    methodology: raw.methodology || ['PlanMaestro OS'],
    equipment: raw.equipment || ['Equipo Estándar'],
    weeks
  };
}

const rawPrograms = [
  minMaxProgram,
  powerbuildingProgram,
  bodybuildingTransformationProgram,
  gluteHypertrophyProgram,
  ...thenxPrograms,
  ...thenxMasterRoutines
];

export const allPrograms: TrainingProgram[] = rawPrograms.map(normalizeProgram);

export function getProgramById(id: string): TrainingProgram {
  const found = allPrograms.find((p) => p.id === id);
  return found || allPrograms[0];
}
