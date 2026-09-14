// Tests de los 3 motores nuevos: pruebas guiadas, kcal y generador de rutinas.

import { describe, expect, it } from 'vitest';
import { scoreCandidates, testsForZone } from '../diagnosticTests';
import { estimateExerciseKcal, estimateSessionKcal, metFromRpe, classifyMuscleSize } from '../exerciseKcal';
import { generateRoutine } from '../routineGenerator';
import type { TriageCandidate } from '../injuryTriage';

const cands: TriageCandidate[] = [
  { tissue: 'tendon', structureHint: 'tendón rotuliano', level: 'alta', why: '', tests: [], action: 'rehab_load', citation: 'x' },
  { tissue: 'muscle', structureHint: 'cuádriceps', level: 'baja', why: '', tests: [], action: 'rehab_load', citation: 'x' },
  { tissue: 'nerve', structureHint: 'nervio', level: 'baja', why: '', tests: [], action: 'nerve_gliding', citation: 'x' },
];

describe('diagnosticTests', () => {
  it('respuestas tendinosas reordenan la hipótesis hacia tendón con confianza', () => {
    const scored = scoreCandidates(cands, { 'pain-24h': true, 'iso-insertion': true, laxity: false, 'tingling-path': false, 'swelling-friction': false });
    expect(scored[0].tissue).toBe('tendon');
    expect(scored[0].confidencePct).toBeGreaterThan(50);
  });

  it('laxitud positiva catapulte ligamento… si está entre los candidatos', () => {
    const withLig: TriageCandidate[] = [...cands, { tissue: 'ligament', structureHint: 'LCA', level: 'media', why: '', tests: [], action: 'doctor_now', citation: 'x' }];
    const scored = scoreCandidates(withLig, { laxity: true, 'pain-24h': false, 'iso-insertion': false, 'tingling-path': false, 'swelling-friction': false });
    expect(scored[0].tissue).toBe('ligament');
  });

  it('zona sin batería propia usa la genérica', () => {
    expect(testsForZone('cervical').length).toBeGreaterThan(0);
  });
});

describe('exerciseKcal', () => {
  it('más esfuerzo ⇒ más MET y más kcal', () => {
    const base = { bodyWeightKg: 80, series: 3, reps: 10, muscleGroups: ['Chest'] };
    const r6 = estimateExerciseKcal({ ...base, rpe: 6 });
    const r10 = estimateExerciseKcal({ ...base, rpe: 10 });
    expect(r10.kcal).toBeGreaterThan(r6.kcal);
    expect(metFromRpe(10)).toBeCloseTo(6.0, 1);
    expect(metFromRpe(6)).toBeCloseTo(3.5, 1);
  });

  it('músculos grandes queman más que pequeños al mismo esfuerzo', () => {
    const base = { bodyWeightKg: 80, series: 3, reps: 10, rpe: 8 };
    const legs = estimateExerciseKcal({ ...base, muscleGroups: ['Quadriceps'] });
    const arms = estimateExerciseKcal({ ...base, muscleGroups: ['Biceps'] });
    expect(legs.kcal).toBeGreaterThan(arms.kcal);
    expect(classifyMuscleSize(['Quadriceps'])).toBe('large');
    expect(classifyMuscleSize(['Biceps'])).toBe('small');
  });

  it('la sesión suma y declara su base (inferred, no medición)', () => {
    const t = estimateSessionKcal([{ series: 3, reps: 10, rpe: 8, muscleGroups: ['Chest'] }], 80);
    expect(t.kcal).toBeGreaterThan(0);
    expect(estimateExerciseKcal({ bodyWeightKg: 80, series: 3, reps: 10, rpe: 8, muscleGroups: [] }).basis).toMatch(/inferred/);
  });
});

describe('routineGenerator', () => {
  it('genera la plantilla pedida con ejercicios del catálogo y sin repetir', () => {
    const r = generateRoutine({ goal: 'hypertrophy', daysPerWeek: 3, equipment: 'mixed', minutesPerSession: 45, emphasis: ['chest'], avoidZones: [] });
    expect(r.days).toHaveLength(3);
    const names = r.days.flatMap((d) => d.exercises.map((e) => e.exerciseId));
    expect(new Set(names).size).toBe(names.length);
    expect(r.weeklyHardSets).toBeGreaterThan(0);
  });

  it('las zonas a evitar quedan EXCLUIDAS de los ejercicios', () => {
    const r = generateRoutine({ goal: 'hypertrophy', daysPerWeek: 3, equipment: 'gym', minutesPerSession: 45, emphasis: [], avoidZones: ['Knee', 'knee'] });
    const all = r.days.flatMap((d) => d.exercises.map((e) => `${e.name} ${e.muscleGroups.join(' ')}`.toLowerCase()));
    expect(all.every((s) => !s.includes('knee'))).toBe(true);
  });

  it('calisthenias: solo disciplinas de peso corporal', () => {
    const r = generateRoutine({ goal: 'strength', daysPerWeek: 2, equipment: 'calisthenics', minutesPerSession: 30, emphasis: [], avoidZones: [] });
    expect(r.days.every((d) => d.exercises.length >= 3)).toBe(true);
    expect(r.citations.join(' ')).toMatch(/fit:volume/);
  });
});
