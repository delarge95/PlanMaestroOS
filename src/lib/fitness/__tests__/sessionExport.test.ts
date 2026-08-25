import { describe, it, expect } from 'vitest';
import {
  buildSessionSnapshot,
  esDisplayDateToIso,
  type SessionExportInput
} from '../sessionExport';

// Contrato AG-FIT → AG-NUTRI (estimador kcal). Regla dura: ningún número sin
// fuente — lo no registrado sale undefined/0 o directamente no se exporta.
describe('sessionExport — buildSessionSnapshot (logger real)', () => {
  const base: SessionExportInput = {
    sessionId: 'w_1',
    programId: 'min-max',
    routineTitle: 'Min-Max — Día 1',
    dayName: 'Día 1 Upper',
    dateIso: '2026-08-21',
    durationMinutes: 52,
    exercises: [
      {
        performedExerciseId: '45° Incline Barbell Press',
        prescribedExerciseId: 'Barbell Incline Press',
        name: 'Barbell Incline Press',
        completedSets: [
          { weight: 80, reps: 8, rpe: 8 },
          { weight: 82.5, reps: 6, rpe: 9 },
          { weight: 82.5, reps: 5 } // sin RPE registrado
        ]
      },
      {
        name: 'Pull-Up',
        completedSets: [
          { weight: 0, reps: 10 },
          { weight: 0, reps: 8 }
        ]
      },
      { name: 'Sin datos', completedSets: [] }
    ]
  };

  it('agrega series/reps/carga/RPE reales por ejercicio', () => {
    const snap = buildSessionSnapshot(base);

    expect(snap.exercises).toHaveLength(2); // el ejercicio sin series no se exporta

    const press = snap.exercises[0];
    expect(press.id).toBe('45° Incline Barbell Press'); // performed > prescribed > name
    expect(press.sets).toBe(3);
    expect(press.reps).toBeCloseTo(6.3, 1); // media de 8/6/5
    expect(press.loadKg).toBeCloseTo(81.7, 1); // media de 80/82.5/82.5
    expect(press.rpe).toBe(8.5); // solo las 2 series que lo registran

    const pull = snap.exercises[1];
    expect(pull.id).toBe('Pull-Up');
    expect(pull.sets).toBe(2);
    expect(pull.loadKg).toBeUndefined(); // bodyweight: undefined, nunca 0 fabricado
    expect(pull.reps).toBe(9);
    expect(pull.rpe).toBeUndefined();
  });

  it('respeta fecha ISO, programa, día y duración total real', () => {
    const snap = buildSessionSnapshot(base);
    expect(snap.dateIso).toBe('2026-08-21');
    expect(snap.program).toBe('Min-Max — Día 1');
    expect(snap.day).toBe('Día 1 Upper');
    expect(snap.durationTotalMin).toBe(52);
  });

  it('descarta series basura (todo a cero) pero conserva las válidas del ejercicio', () => {
    const snap = buildSessionSnapshot({
      ...base,
      exercises: [
        {
          name: 'Leg Press',
          completedSets: [
            { weight: 0, reps: 0 }, // basura
            { weight: 120, reps: 10, rpe: 7 }
          ]
        }
      ]
    });
    expect(snap.exercises[0].sets).toBe(1);
    expect(snap.exercises[0].loadKg).toBe(120);
  });

  it('suma series cronometradas como duraciónMin del ejercicio', () => {
    const snap = buildSessionSnapshot({
      ...base,
      exercises: [
        {
          name: 'Hollow holds',
          completedSets: [
            { weight: 0, reps: 0, durationSec: 40 },
            { weight: 0, reps: 0, durationSec: 35 }
          ]
        }
      ]
    });
    expect(snap.exercises[0].durationMin).toBe(1.3); // 75s → 1.25 redondeado a 1 decimal
    expect(snap.exercises[0].reps).toBe(0);
  });

  it('duración no medida → 0 (NUTRI no debe inventarla)', () => {
    const snap = buildSessionSnapshot({ ...base, durationMinutes: undefined });
    expect(snap.durationTotalMin).toBe(0);
  });
});

describe('sessionExport — entrada legacy TodayRoutineStack (weights + repRange)', () => {
  it('deriva series y carga media de los pesos registrados; reps del rango prescrito', () => {
    const snap = buildSessionSnapshot({
      routineTitle: 'Min-Max - Día 2',
      durationMinutes: 45,
      exercises: [
        { name: 'Back Squat', weightsPerSet: ['100', '102.5', ''], repRange: '6-8' },
        { name: 'Leg Curl', weightsPerSet: ['', ''] } // cajas vacías: nada real
      ]
    });

    expect(snap.exercises).toHaveLength(1);
    const squat = snap.exercises[0];
    expect(squat.id).toBe('Back Squat'); // sin IDs → nombre
    expect(squat.sets).toBe(2);
    expect(squat.loadKg).toBeCloseTo(101.3, 1);
    expect(squat.reps).toBe(6); // primera cifra del rango (lo que el stack usa para su volumen)
    expect(squat.rpe).toBeUndefined(); // la forma legacy no registra RPE
  });

  it('ejercicios legacy sin pesos no se exportan', () => {
    const snap = buildSessionSnapshot({
      exercises: [{ name: 'X', weightsPerSet: [] }]
    });
    expect(snap.exercises).toHaveLength(0);
  });
});

describe('sessionExport — fechas honestas', () => {
  it('fecha display es-ES del logger → ISO con año inferido', () => {
    // "vie 22 ago" consultado en 2026-08-25 → mismo año
    const now = new Date(2026, 7, 25);
    expect(buildSessionSnapshot({ dateDisplayEs: 'vie 22 ago', exercises: [] }, now).dateIso).toBe('2026-08-22');
  });

  it('display de diciembre consultado en enero retrocede un año (no fechas futuras)', () => {
    const now = new Date(2026, 0, 5);
    expect(esDisplayDateToIso('lun 29 dic', now)).toBe('2025-12-29');
  });

  it('sin fecha derivable → "" (nunca inventar)', () => {
    expect(buildSessionSnapshot({ exercises: [] }).dateIso).toBe('');
    expect(buildSessionSnapshot({ dateDisplayEs: 'fecha rara', exercises: [] }).dateIso).toBe('');
  });

  it('dayId como fallback de etiqueta cuando falta dayName; defaults honestos', () => {
    const snap = buildSessionSnapshot({
      dayId: 'mm-w1-minmax-d1',
      exercises: []
    });
    expect(snap.day).toBe('mm-w1-minmax-d1');
    expect(snap.program).toBe('Sesión');
    expect(snap.durationTotalMin).toBe(0);
  });
});
