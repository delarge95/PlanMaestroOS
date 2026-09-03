// volumeRules — lote 1 torso-empuje (archivo 34) como reglas evaluables.
// Entrada agregada (hard sets/semana por músculo + frecuencia); el repo la alimenta
// con volumeStats.calculateMuscleVolumeFromLogs. Destino: src/lib/rules/fitness/vol-*.ts

export interface VolumeLandmark {
  muscle: string;
  mevMin: number;
  mavMin: number;
  mavMax: number;
  mrv: number;
  minFreq: number;
}

/** Lote 1 (34 §conversión): pectoral + deltoides ×3 + tríceps. */
export const BATCH1_TORSO_PUSH: VolumeLandmark[] = [
  { muscle: 'pectoral', mevMin: 6, mavMin: 10, mavMax: 16, mrv: 22, minFreq: 2 },
  { muscle: 'deltoides-frontal', mevMin: 4, mavMin: 6, mavMax: 10, mrv: 12, minFreq: 1 },
  { muscle: 'deltoides-lateral', mevMin: 8, mavMin: 14, mavMax: 20, mrv: 26, minFreq: 2 },
  { muscle: 'deltoides-posterior', mevMin: 8, mavMin: 12, mavMax: 18, mrv: 20, minFreq: 2 },
  { muscle: 'triceps', mevMin: 8, mavMin: 12, mavMax: 16, mrv: 18, minFreq: 2 },
];

/** Lote 2 (34): tirón — espalda, trapecio, bíceps. */
export const BATCH2_PULL: VolumeLandmark[] = [
  { muscle: 'espalda-dorsal', mevMin: 10, mavMin: 14, mavMax: 20, mrv: 25, minFreq: 2 },
  { muscle: 'trapecio', mevMin: 8, mavMin: 12, mavMax: 16, mrv: 18, minFreq: 2 },
  { muscle: 'biceps', mevMin: 8, mavMin: 12, mavMax: 18, mrv: 20, minFreq: 2 },
];

/** Lote 3 (34): pierna — cuádriceps, femorales, glúteos, gemelos. */
export const BATCH3_LEGS: VolumeLandmark[] = [
  { muscle: 'cuadriceps', mevMin: 8, mavMin: 12, mavMax: 16, mrv: 20, minFreq: 2 },
  { muscle: 'femorales', mevMin: 6, mavMin: 10, mavMax: 14, mrv: 16, minFreq: 2 },
  { muscle: 'gluteos', mevMin: 6, mavMin: 10, mavMax: 16, mrv: 18, minFreq: 2 },
  { muscle: 'gemelos', mevMin: 8, mavMin: 12, mavMax: 16, mrv: 20, minFreq: 2 },
];

/** Lote 4 (34): resto — abdominales, antebrazos, cuello/trapecio superior. */
export const BATCH4_REST: VolumeLandmark[] = [
  { muscle: 'abdominales', mevMin: 8, mavMin: 14, mavMax: 20, mrv: 25, minFreq: 2 },
  { muscle: 'antebrazos', mevMin: 6, mavMin: 10, mavMax: 14, mrv: 16, minFreq: 2 },
  { muscle: 'cuello-trapecio-sup', mevMin: 4, mavMin: 6, mavMax: 10, mrv: 12, minFreq: 1 },
];

/** Tabla completa 15 músculos (34). Suma: 5+3+4+3. */
export const ALL_LANDMARKS: VolumeLandmark[] = [
  ...BATCH1_TORSO_PUSH,
  ...BATCH2_PULL,
  ...BATCH3_LEGS,
  ...BATCH4_REST,
];

export interface MuscleWeek {
  muscle: string;
  hardSets: number;
  sessions: number;
  weeksBelowMev: number;
  weeksAboveMrv: number;
}

export interface VolumeEval {
  ruleId: string;
  status: 'ok' | 'warning' | 'violation' | 'not-applicable';
  message: string;
}

export function evaluateVolumeLandmarks(marks: VolumeLandmark[], weeks: MuscleWeek[]): VolumeEval[] {
  const out: VolumeEval[] = [];
  for (const m of marks) {
    const w = weeks.find((x) => x.muscle === m.muscle);
    if (!w) {
      out.push({ ruleId: `fit:vol-${m.muscle}`, status: 'not-applicable', message: `${m.muscle}: sin datos esta semana.` });
      continue;
    }
    if (w.hardSets > m.mrv && w.weeksAboveMrv >= 1) {
      out.push({ ruleId: `fit:vol-${m.muscle}-mrv`, status: 'violation', message: `${m.muscle}: ${w.hardSets} series sobre MRV ${m.mrv} (2.º microciclo): descarga.` });
    } else if (w.hardSets < m.mevMin && w.weeksBelowMev >= 1) {
      out.push({ ruleId: `fit:vol-${m.muscle}-mev`, status: 'warning', message: `${m.muscle}: ${w.hardSets} bajo MEV ${m.mevMin} (2.ª semana): estímulo insuficiente.` });
    } else if (w.sessions < m.minFreq) {
      out.push({ ruleId: `fit:vol-${m.muscle}-freq`, status: 'warning', message: `${m.muscle}: frecuencia ${w.sessions}× < mín ${m.minFreq}×.` });
    } else {
      out.push({ ruleId: `fit:vol-${m.muscle}`, status: 'ok', message: `${m.muscle}: ${w.hardSets} series en rango.` });
    }
  }
  return out;
}
