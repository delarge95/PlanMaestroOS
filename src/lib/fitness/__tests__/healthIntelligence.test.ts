// src/lib/fitness/__tests__/healthIntelligence.test.ts — Cadena completa de
// inteligencia de salud: dolor → estructuras → sesión → sustituciones → prehab → reglas.

import { describe, expect, it } from 'vitest';
import { runHealthIntelligence, type PainReport, type PlannedExercise } from '../healthIntelligence';

const kneePain: PainReport = {
  zone: 'knee',
  eva: 5,
  onset: 'gradual',
  quality: 'dull',
  morningStiffness: true,
  improvesWithWarmup: true,
  instability: false,
  swelling: false,
  tingling: false,
  redFlags: [],
};

/** Sesión tipo Min-Max Día 2 (Lower): carga cuádriceps/rodilla y espalda. */
const lowerDay: PlannedExercise[] = [
  { name: 'Leg Extension', exerciseId: 'ex-leg-extension', muscleGroups: ['Quadriceps'] },
  { name: 'Leg Press', muscleGroups: ['Quadriceps', 'Glutes'] },
  { name: 'Lat Pulldown', muscleGroups: ['Latissimus Dorsi', 'Biceps'] },
  { name: 'Cable Crunch', muscleGroups: ['Abs'] },
];

describe('runHealthIntelligence', () => {
  it('dolor de rodilla afecta los ejercicios de cuádriceps y no los de espalda', () => {
    const r = runHealthIntelligence(kneePain, lowerDay);
    const names = r.affectedExercises.map((a) => a.name);
    expect(names).toContain('Leg Extension');
    expect(names).toContain('Leg Press');
    expect(names).not.toContain('Lat Pulldown');
    expect(names).not.toContain('Cable Crunch');
  });

  it('el triaje devuelve hipótesis con cita y disclaimer, nunca diagnóstico cerrado', () => {
    const r = runHealthIntelligence(kneePain, lowerDay);
    expect(r.triage.candidates.length).toBeGreaterThan(0);
    expect(r.triage.blocked).toBe(false);
    expect(r.disclaimer).toMatch(/no diagnóstico/i);
    for (const c of r.triage.candidates) expect(c.citation.length).toBeGreaterThan(3);
  });

  it('EVA ≥4 genera guarda de volumen citando las reglas de dolor', () => {
    const r = runHealthIntelligence(kneePain, lowerDay);
    const guard = r.advisories.find((a) => a.id === 'volume-guard');
    expect(guard).toBeDefined();
    expect(guard!.severity).toBe('caution');
    expect(guard!.citation).toMatch(/fit:pain-session-ceiling/);
  });

  it('rodilla mapea al protocolo de prehab correcto', () => {
    const r = runHealthIntelligence(kneePain, lowerDay);
    expect(r.prehab).toBeDefined();
    expect(r.prehab!.zoneId).toBe('knee');
    expect(r.advisories.some((a) => a.id === 'prehab')).toBe(true);
  });

  it('red flag BLOQUEA: advisory stop y sin guarda de volumen normal', () => {
    const r = runHealthIntelligence(
      { ...kneePain, redFlags: ['pérdida de fuerza progresiva'] },
      lowerDay,
    );
    expect(r.triage.blocked).toBe(true);
    const stop = r.advisories.find((a) => a.severity === 'stop');
    expect(stop).toBeDefined();
    expect(stop!.title).toMatch(/alarma/i);
  });

  it('el advisory de sustituciones lista los afectados con reemplazo', () => {
    const r = runHealthIntelligence(kneePain, lowerDay);
    const subs = r.advisories.find((a) => a.id === 'subs');
    expect(subs).toBeDefined();
    expect(subs!.body).toMatch(/Leg Extension|Leg Press/);
  });

  it('zona sin dolor en la sesión: cero afectados y sin advisory de sustituciones', () => {
    const r = runHealthIntelligence({ ...kneePain, zone: 'shoulder' }, lowerDay);
    // Lower day no carga hombro: no hay afectados por esa vía.
    const shoulderLoads = r.affectedExercises.filter((a) =>
      a.loadedStructures.some((s) => /delt|shoulder/i.test(s)),
    );
    expect(shoulderLoads.length).toBe(0);
  });
});
