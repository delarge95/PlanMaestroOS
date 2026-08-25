// src/data/fitness/nutrition/calculator.test.ts — Tests del motor de targets nutricionales (AG-NUTRI)
import { describe, expect, it } from 'vitest';
import {
  activityFromHours,
  buildDayType,
  choTarget,
  computeTargets,
  goalKcal,
  hydrationTarget,
  kcalPerKgByActivity,
  maintenanceKcal,
  postWorkoutProteinGrams,
  proteinTarget,
} from './calculator';
import { nutritionRules } from './rules';

describe('activityFromHours', () => {
  it('clasifica los tres niveles por horas semanales', () => {
    expect(activityFromHours(3).level).toBe('light');
    expect(activityFromHours(6).level).toBe('moderate');
    expect(activityFromHours(12).level).toBe('heavy');
  });

  it('declara que la traducción horas→nivel es inferencia propia', () => {
    expect(activityFromHours(3).inferredNote).toMatch(/inferencia propia/i);
  });
});

describe('kcalPerKgByActivity', () => {
  it('devuelve los valores citados de la tabla 10.4 NSCA (38/41/50 varón; 35/37/44 mujer)', () => {
    expect(kcalPerKgByActivity('male', 'light')).toBe(38);
    expect(kcalPerKgByActivity('male', 'moderate')).toBe(41);
    expect(kcalPerKgByActivity('male', 'heavy')).toBe(50);
    expect(kcalPerKgByActivity('female', 'light')).toBe(35);
    expect(kcalPerKgByActivity('female', 'moderate')).toBe(37);
    expect(kcalPerKgByActivity('female', 'heavy')).toBe(44);
  });
});

describe('maintenanceKcal / goalKcal', () => {
  it('70 kg varón moderado → 2870 kcal de mantenimiento', () => {
    const t = maintenanceKcal(70, 'male', 6);
    expect(t.value).toBe(2870);
    expect(t.why.some((c) => c.ruleId === 'nutri-nsca-kcal-kg-table')).toBe(true);
  });

  it('déficit y superávit aplican ±500 kcal citadas', () => {
    expect(goalKcal(70, 'male', 'deficit', 6).value).toBe(2370);
    expect(goalKcal(70, 'male', 'surplus', 6).value).toBe(3370);
    expect(goalKcal(70, 'male', 'deficit', 6).why.some((c) => c.ruleId === 'nutri-nsca-cut-deficit')).toBe(true);
    expect(goalKcal(70, 'male', 'surplus', 6).why.some((c) => c.ruleId === 'nutri-nsca-bulk-surplus')).toBe(true);
  });

  it('mantenimiento no aplica delta', () => {
    expect(goalKcal(70, 'female', 'maintenance', 3).value).toBe(maintenanceKcal(70, 'female', 3).value);
  });
});

describe('proteinTarget', () => {
  it('usa la regla de déficit (1.8–2.7 g/kg) cuando goal=deficit', () => {
    const t = proteinTarget(70, 'deficit');
    expect(t.min).toBe(126); // 70 * 1.8
    expect(t.max).toBe(189); // 70 * 2.7
    expect(t.why.some((c) => c.ruleId === 'nutri-nsca-protein-deficit')).toBe(true);
  });

  it('usa 1.5–2.0 en superávit y 1.4–1.7 en mantenimiento', () => {
    expect(proteinTarget(70, 'surplus').min).toBe(105);
    expect(proteinTarget(70, 'maintenance').min).toBe(98);
  });
});

describe('choTarget', () => {
  it('volumen normal (fuerza) → 5–6 g/kg', () => {
    const t = choTarget(70, 6);
    expect(t.min).toBe(350);
    expect(t.max).toBe(420);
    expect(t.why.some((c) => c.ruleId === 'nutri-nsca-strength-cho-daily')).toBe(true);
  });

  it('alto volumen (>10 h/sem) → pauta de resistencia 8–10 g/kg', () => {
    const t = choTarget(70, 12);
    expect(t.min).toBe(560);
    expect(t.why.some((c) => c.ruleId === 'nutri-nsca-cho-endurance-daily')).toBe(true);
  });
});

describe('hydrationTarget', () => {
  it('0 h/sem → base 2.5 L citada', () => {
    const t = hydrationTarget(0);
    expect(t.min).toBeCloseTo(2.5, 1);
    expect(t.why.some((c) => c.ruleId === 'nutri-mau-hyd-baseline-daily')).toBe(true);
  });

  it('crece con las horas usando la tasa 600–1200 ml/h citada', () => {
    const t = hydrationTarget(7); // 1 h/día
    expect(t.min).toBeCloseTo(3.1, 1);
    expect(t.max).toBeCloseTo(3.7, 1);
    expect(t.why.some((c) => c.ruleId === 'nutri-mau-hyd-during-600-1200')).toBe(true);
  });
});

describe('postWorkoutProteinGrams', () => {
  it('jóvenes → 20–25 g; 50+ → ≥40 g (reglas citadas)', () => {
    expect(postWorkoutProteinGrams(30).ruleId).toBe('nutri-nsca-protein-post-young');
    expect(postWorkoutProteinGrams(undefined).ruleId).toBe('nutri-nsca-protein-post-young');
    expect(postWorkoutProteinGrams(55).ruleId).toBe('nutri-nsca-protein-post-older');
  });
});

describe('buildDayType', () => {
  it('genera las franjas desayuno/pre/durante/post/cena con citas', () => {
    const slots = buildDayType({ weightKg: 70, sex: 'male', goal: 'maintenance', trainingHoursPerWeek: 6 });
    expect(slots.map((s) => s.id)).toEqual(['desayuno', 'pre-entreno', 'durante', 'post', 'cena']);
    for (const slot of slots) {
      for (const line of slot.lines) {
        expect(line.why.length).toBeGreaterThan(0);
        for (const c of line.why) {
          expect(c.locator).toMatch(/cap\. \d+, p\. \d+/);
        }
      }
    }
  });
});

describe('integridad calculadora ↔ RAG', () => {
  it('toda regla citada por la calculadora existe en rag/nutrition.json', () => {
    const ruleIds = new Set(nutritionRules.map((r) => r.id));
    const targets = computeTargets({ weightKg: 70, sex: 'male', goal: 'deficit', trainingHoursPerWeek: 8 });
    const slots = buildDayType({ weightKg: 70, sex: 'male', goal: 'deficit', trainingHoursPerWeek: 8 });
    const cited = [
      ...targets.flatMap((t) => t.why.map((c) => c.ruleId)),
      ...slots.flatMap((s) => s.lines.flatMap((l) => l.why.map((c) => c.ruleId))),
    ];
    expect(cited.length).toBeGreaterThan(10);
    for (const id of cited) {
      expect(ruleIds.has(id)).toBe(true);
    }
  });

  it('todo target tiene al menos una cita con localizador capítulo/página', () => {
    const targets = computeTargets({ weightKg: 82, sex: 'female', goal: 'surplus', trainingHoursPerWeek: 11 });
    for (const t of targets) {
      expect(t.why.length).toBeGreaterThan(0);
      for (const c of t.why) {
        expect(c.locator).toMatch(/cap\. \d+, p\. \d+/);
      }
    }
  });
});
