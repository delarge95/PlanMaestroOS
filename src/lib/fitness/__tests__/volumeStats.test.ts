import { describe, it, expect } from 'vitest';
import {
  calculateMuscleVolumeFromLogs,
  loggedWorkoutToSessionLog,
  exerciseRecordsFromLogs,
  type SessionLog
} from '../volumeStats';

describe('Volume Stats', () => {
  it('should calculate weekly volume sets and total kg per muscle group from executed logs', () => {
    const sessions: SessionLog[] = [
      {
        sessionId: 's1',
        dateIso: '2026-08-10',
        routineTitle: 'Torso A1',
        durationMinutes: 45,
        sets: [
          { exerciseId: 'bench-press', exerciseName: 'Press de Banca', targetMuscleGroup: 'Pecho', weightKg: 80, reps: 8 },
          { exerciseId: 'bench-press', exerciseName: 'Press de Banca', targetMuscleGroup: 'Pecho', weightKg: 80, reps: 8 },
          { exerciseId: 'push-up', exerciseName: 'Flexiones', targetMuscleGroup: 'Pecho', weightKg: 0, reps: 15, isWarmup: true }
        ]
      }
    ];

    const stats = calculateMuscleVolumeFromLogs(sessions);
    const pechoStats = stats.find((s) => s.muscleGroup === 'Pecho');

    expect(pechoStats).toBeDefined();
    expect(pechoStats?.totalSets).toBe(2); // Warmup set excluded
    expect(pechoStats?.totalVolumeKg).toBe(1280); // 80kg * 8 * 2
  });
});

// B8: adaptadores sobre el historial real del logger (fitapp_workout_history).
describe('Volume Stats B8 (historial real)', () => {
  const loggedWorkout = {
    id: 'w_1',
    date: 'vie 22 ago',
    routineTitle: 'Min-Max — Día 1',
    durationMinutes: 52,
    totalVolumeKg: 2400,
    exercises: [
      { name: 'Press de Banca', completedSets: [{ weight: 80, reps: 8 }, { weight: 82.5, reps: 6 }] },
      { name: 'Dominadas', completedSets: [{ weight: 0, reps: 10 }] }, // bodyweight: no fabricar
      { name: 'Sentadilla', completedSets: [] } // sin sets loggeados
    ]
  };

  it('convierte CompletedWorkout a SessionLog descartando series sin carga registrada', () => {
    const session = loggedWorkoutToSessionLog(loggedWorkout, (name) =>
      name === 'Press de Banca' ? 'Pecho' : undefined
    );

    expect(session.sessionId).toBe('w_1');
    // Solo las series con weight>0 y reps>0 entran (bodyweight queda fuera)
    expect(session.sets).toHaveLength(2);
    expect(session.sets.map((s) => s.exerciseName)).toEqual(['Press de Banca', 'Press de Banca']);
    expect(session.sets[0].targetMuscleGroup).toBe('Pecho'); // resuelto por el lookup
    expect(
      session.sets.some((s) => s.exerciseName === 'Dominadas')
    ).toBe(false); // weight 0: descartada, no fabricada
  });

  it('calcula récords por ejercicio con Epley e1RM y ordena por mejor serie', () => {
    const session = loggedWorkoutToSessionLog({
      ...loggedWorkout,
      exercises: [
        { name: 'Press de Banca', completedSets: [{ weight: 80, reps: 8 }] }, // e1RM 101.3
        { name: 'Peso Muerto', completedSets: [{ weight: 140, reps: 5 }] } // e1RM 163.3
      ]
    });

    const records = exerciseRecordsFromLogs([session]);
    expect(records[0].exerciseName).toBe('Peso Muerto');
    expect(records[0].maxWeightKg).toBe(140);
    expect(Math.round(records[0].bestE1rmKg)).toBe(163);
    expect(records[1].bestSet).toEqual({ weightKg: 80, reps: 8 });
  });

  it('sin series registradas devuelve structures vacías (nunca números inventados)', () => {
    const empty = loggedWorkoutToSessionLog({ id: 'w_2' });
    expect(empty.sets).toHaveLength(0);
    expect(calculateMuscleVolumeFromLogs([empty])).toHaveLength(0);
    expect(exerciseRecordsFromLogs([empty])).toHaveLength(0);
  });
});
