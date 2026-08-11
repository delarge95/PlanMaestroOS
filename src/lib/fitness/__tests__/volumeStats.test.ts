import { describe, it, expect } from 'vitest';
import { calculateMuscleVolumeFromLogs, type SessionLog } from '../volumeStats';

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
