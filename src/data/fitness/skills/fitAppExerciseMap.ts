// src/data/fitness/skills/fitAppExerciseMap.ts - Explicit Verified Exercise Links Table
export type VerifiedExerciseLink = {
  skillExerciseId: string;
  fitAppExerciseId: string | null;
  fitAppTitle: string | null;
  videoUrl: string | null;
  verified: boolean;
  verifiedAt?: string;
  verifiedBy?: string;
  notes?: string;
};

export const verifiedExerciseMap: Record<string, VerifiedExerciseLink> = {
  'pull-step-1': {
    skillExerciseId: 'pull-step-1',
    fitAppExerciseId: 'Active Hang',
    fitAppTitle: 'Active Hang (Colgado Activo & Control Escapular)',
    videoUrl: 'https://www.youtube.com/watch?v=132Xg12mG60',
    verified: true,
    verifiedAt: '2026-07-29',
    verifiedBy: 'Plan Maestro OS Auditor',
    notes: 'Verificado 100% como colgado activo escapular en barra/anillas.'
  },
  'pull-step-2': {
    skillExerciseId: 'pull-step-2',
    fitAppExerciseId: 'Inverted Row',
    fitAppTitle: 'Inverted Row (Remo Inclinado)',
    videoUrl: 'https://www.youtube.com/watch?v=XC9WR1LFq2U',
    verified: true,
    verifiedAt: '2026-07-29',
    verifiedBy: 'Plan Maestro OS Auditor'
  },
  'pull-step-3': {
    skillExerciseId: 'pull-step-3',
    fitAppExerciseId: 'Inverted Row',
    fitAppTitle: 'Inverted Row (Remo Horizontal Paralelo)',
    videoUrl: 'https://www.youtube.com/watch?v=XC9WR1LFq2U',
    verified: true,
    verifiedAt: '2026-07-29'
  },
  'pull-step-4': {
    skillExerciseId: 'pull-step-4',
    fitAppExerciseId: 'Wide-Grip Lat Pulldown',
    fitAppTitle: 'Dominada Asistida con Banda',
    videoUrl: null,
    verified: true,
    verifiedAt: '2026-07-29'
  },
  'pull-step-5': {
    skillExerciseId: 'pull-step-5',
    fitAppExerciseId: 'Pull-Up',
    fitAppTitle: 'Pull-Up (Dominada Estricta)',
    videoUrl: 'https://youtu.be/-d2Uui6MtRk',
    verified: true,
    verifiedAt: '2026-07-29'
  },
  'push-step-1': {
    skillExerciseId: 'push-step-1',
    fitAppExerciseId: 'Push-Up',
    fitAppTitle: 'Push-Up (Flexión Inclinada)',
    videoUrl: null,
    verified: true
  },
  'push-step-2': {
    skillExerciseId: 'push-step-2',
    fitAppExerciseId: 'Push-Up',
    fitAppTitle: 'Push-Up (Flexión Estricta en Suelo)',
    videoUrl: null,
    verified: true
  },
  'core-step-1': {
    skillExerciseId: 'core-step-1',
    fitAppExerciseId: 'Hollow Body Hold',
    fitAppTitle: 'Hollow Body Hold',
    videoUrl: null,
    verified: true
  },
  'leg-step-4': {
    skillExerciseId: 'leg-step-4',
    fitAppExerciseId: 'Pistol Squat',
    fitAppTitle: 'Pistol Squat Estricta Libre',
    videoUrl: null,
    verified: true
  }
};
