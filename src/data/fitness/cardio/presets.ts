// src/data/fitness/cardio/presets.ts — Presets por disciplina y enfoque (AG-CARDIO)
// Cada cifra con cita. METs de bloques derivados de:
//  - Correr/caminar: ACSM Tabla 6.3 (S en m/min, llano) → METs = VO2/3.5 (confianza: inferred, derivación mostrada).
//  - Bici/spinning: Allen kJ≈kcal + %FTP sobre FTP de referencia 200 W y 70 kg → METs = (pctFTP×200×3.6)/(1.05×70)
//    (confianza: inferred; el estimador kcal de AG-NUTRI debe sustituir por el FTP/peso real del usuario).

import { cite } from './sources';
import type { CardioPreset, PresetWithMet, SessionBlock } from './types';

// ---------- Citas de derivación de METs ----------
const MET_E_RUN = cite(
  'acsm-exercise-testing-prescription-10ed',
  'Cap. 6, Tabla 6.3 aplicada a 8 km/h (134 m/min)',
  'VO2 = 0.2×134 + 3.5 = 30.3 → 8.7 METs (running easy, llano).',
  'inferred'
);
const MET_T_RUN = cite(
  'acsm-exercise-testing-prescription-10ed',
  'Cap. 6, Tabla 6.3 aplicada a 10 km/h (167 m/min)',
  'VO2 = 0.2×167 + 3.5 = 36.9 → 10.5 METs (running moderado).',
  'inferred'
);
const MET_R_RUN = cite(
  'acsm-exercise-testing-prescription-10ed',
  'Cap. 6, Tabla 6.3 aplicada a 12 km/h (200 m/min)',
  'VO2 = 0.2×200 + 3.5 = 43.5 → 12.4 METs (running rápido).',
  'inferred'
);
const MET_WALK_FLAT = cite(
  'acsm-exercise-testing-prescription-10ed',
  'Cap. 6, Tabla 6.3 aplicada a 5.6 km/h (93.8 m/min, G=0)',
  'VO2 = 0.1×93.8 + 3.5 = 12.9 → 3.7 METs.',
  'inferred'
);
const MET_WALK_BRISK = cite(
  'acsm-exercise-testing-prescription-10ed',
  'Cap. 6, Tabla 6.3 aplicada a 3.7 mph (98.6 m/min, G=0, límite superior de validez de la ecuación)',
  'VO2 = 0.1×98.6 + 3.5 = 13.4 → 3.8 METs.',
  'inferred'
);
const MET_WALK_GRADE = cite(
  'acsm-exercise-testing-prescription-10ed',
  'Cap. 6, Tabla 6.3 aplicada a 80 m/min y G=0.05 (pendiente 5%)',
  'VO2 = 0.1×80 + 1.8×80×0.05 + 3.5 = 18.7 → 5.3 METs.',
  'inferred'
);
const metBike = (pctFtp: number, mets: number) =>
  cite(
    'allen-power-meter-3ed',
    `Regla kilojoule-calorie-estimation, asumidas FTP 200 W y 70 kg (${pctFtp}% FTP)`,
    `${pctFtp}% de 200 W × 3.6 kJ/h ≈ kcal/h; METs = kcal/h ÷ (1.05 × 70 kg) ≈ ${mets} METs (inferred; recalcular con FTP/peso real).`,
    'inferred'
  );

const RUN_E = { label: 'Zona E · 59–74% VO2max (65–79% HRmax)', pctHrMax: [65, 79] as [number, number], mets: 8.7, why: [MET_E_RUN] };
const RUN_T = { label: 'Zona T "comfortably hard" · 85–88% VO2max (88–92% HRmax)', pctHrMax: [88, 92] as [number, number], mets: 10.5, why: [MET_T_RUN] };
const RUN_FAST = { label: 'Zona I/H · ~VO2max (95–100%)', pctHrMax: [95, 100] as [number, number], mets: 12.4, why: [MET_R_RUN] };

// ---------- Presets ----------
export const CARDIO_PRESETS: CardioPreset[] = [
  // ===== RUNNING =====
  {
    id: 'run-easy-60',
    disciplineId: 'running',
    approachId: 'fat-burn',
    name: 'Rodaje fácil E 60 min',
    totalMin: 60,
    difficulty: 'principiante',
    summary: '60 min continuos a ritmo conversacional (E-pace): la base del volumen semanal.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Trote muy suave progresivo', durationMin: 10, intensity: { ...RUN_E, pctHrMax: [60, 70] as [number, number], mets: 8.7, why: RUN_E.why } },
      { id: 'main', kind: 'work', name: 'Rodaje E continuo', durationMin: 40, intensity: { ...RUN_E } },
      { id: 'cd', kind: 'cooldown', name: 'Enfriamiento caminando/trotando', durationMin: 10, intensity: { ...RUN_E, pctHrMax: [50, 65] as [number, number], mets: 3.7, why: [MET_WALK_FLAT] } },
    ],
    avgMets: 7.9,
    why: [
      cite('daniels-running-formula-4ed', 'Cap. 4, "Training Suggestions"', 'E mínimo 30 min por sesión; E a 59–74% VO2max construye base y resistencia a lesión.'),
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.5', '30–60 min/día moderado, ≥150 min/sem.'),
    ],
    editable: true,
  },
  {
    id: 'run-long-90',
    disciplineId: 'running',
    approachId: 'fat-burn',
    name: 'Carrera larga L 90 min',
    totalMin: 90,
    difficulty: 'intermedio',
    summary: 'Rodaje largo a ritmo E; límite duro 150 min y ≤25–30% del volumen semanal.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Trote suave E', durationMin: 15, intensity: { ...RUN_E } },
      { id: 'main', kind: 'work', name: 'L-run continuo a E', durationMin: 60, intensity: { ...RUN_E } },
      { id: 'cd', kind: 'cooldown', name: '10 min caminata + estiramientos', durationMin: 15, intensity: { ...RUN_E, mets: 3.7, why: [MET_WALK_FLAT], label: 'Caminata suave', pctHrMax: [45, 60] as [number, number] } },
    ],
    avgMets: 7.9,
    why: [
      cite('daniels-running-formula-4ed', 'Cap. 4, "Long Runs and Increasing Mileage"', 'L máx 150 min; <64 km/sem: ≤30% del volumen semanal; ≥64 km/sem: menor de 25% o 150 min.'),
      cite('daniels-running-formula-4ed', 'Cap. 4 (M running)', 'En rodajes largos no tomar bebida energética (sí agua) para practicar conservación de glucógeno.'),
    ],
    editable: true,
  },
  {
    id: 'run-tempo-45',
    disciplineId: 'running',
    approachId: 'muscular-endurance',
    name: 'Tempo run zona T 45 min',
    totalMin: 45,
    difficulty: 'intermedio',
    summary: 'Tempo continuo de 20 min a ritmo umbral + calentamiento y enfriamiento E.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Trote E + 4 rectas de 30 s', durationMin: 12, intensity: { ...RUN_E },
        modification: { guidance: 'Terminar el calentamiento con 4–6 rectas de ~30 s a ritmo rápido y cómodo.', why: [cite('daniels-running-formula-4ed', 'Cap. 4, tabla 4.2', 'Warm-up para T: 10 min E + unos strides de 30 s.')] } },
      { id: 'main', kind: 'work', name: 'Tempo continuo a T (20 min)', durationMin: 20, intensity: { ...RUN_T },
        modification: { guidance: 'Si no puedes sostenerlo 30–40 min estando descansado, el ritmo es demasiado rápido: baja un poco.', why: [cite('daniels-running-formula-4ed', 'Cap. 4 (threshold)', 'Test subjetivo: ritmo sostenible 30–40 min; "comfortably hard, no hard".')] } },
      { id: 'cd', kind: 'cooldown', name: 'Trote E suave', durationMin: 13, intensity: { ...RUN_E } },
    ],
    avgMets: 9.5,
    why: [
      cite('daniels-running-formula-4ed', 'Cap. 4 (threshold) + tabla 4.2', 'Tempo verdadero = 20 min continuos a T (85–88% VO2max); ≤10% del volumen semanal a T.'),
    ],
    editable: true,
  },
  {
    id: 'run-vo2-quarters',
    disciplineId: 'running',
    approachId: 'power-hit',
    name: 'Cuartos I: 8×1 min H con 45 s trote',
    totalMin: 40,
    difficulty: 'intermedio',
    summary: 'Intervalos de 1 min fuerte con micro-recuperación (45 s): acumula tiempo cerca de VO2max sin bouts largos.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Trote E + 3 rectas progresivas', durationMin: 12, intensity: { ...RUN_E } },
      { id: 'main', kind: 'work', name: '8 × 1 min H (fuerte) / 45 s trote', durationMin: 1, repeats: 8, restMin: 0.75, intensity: { ...RUN_FAST },
        modification: { guidance: 'H = ritmo que sostendrías 10–12 min en carrera. La recuperación nunca debe durar más que el esfuerzo.', why: [cite('daniels-running-formula-4ed', 'Cap. 4 (interval/H)', 'H sostenible 10–12 min; con bouts de 1 min, recovery <45 s para acumular tiempo en VO2max; recovery nunca más larga que el H.')] } },
      { id: 'rec', kind: 'recovery', name: 'Trote E 5 min', durationMin: 5, intensity: { ...RUN_E } },
      { id: 'cd', kind: 'cooldown', name: 'Trote E suave', durationMin: 10, intensity: { ...RUN_E } },
    ],
    avgMets: 8.6,
    why: [
      cite('daniels-running-formula-4ed', 'Cap. 4, figs. 4.2–4.4', 'Llegar a VO2max tarda ~90–120 s; con micro-recovery el 2º bout en adelante llega antes al máximo y se acumula tiempo en VO2max.'),
      cite('bangsbo-running-science', 'cap. Training principles in distance running, pp. 127–128', 'Intervalos 90–100% vVO2max mejoran rendimiento 10 km; exigir base aeróbica previa.'),
    ],
    editable: true,
  },
  {
    id: 'run-200s',
    disciplineId: 'running',
    approachId: 'max-speed',
    name: 'Rectas R: 8×200 m con 200 trote',
    totalMin: 40,
    difficulty: 'intermedio',
    summary: 'Repeticiones rápidas y cortas con recuperación amplia: velocidad y economía con buena mecánica.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Trote E + movilidad + 3 rectas progresivas', durationMin: 15, intensity: { ...RUN_E } },
      { id: 'main', kind: 'work', name: '8 × 200 m R / 200 m trote', durationMin: 0.75, repeats: 8, restMin: 1.25, intensity: { ...RUN_FAST, label: 'Zona R · rápida, buena mecánica' },
        modification: { guidance: 'Recuperación = trote suave de la misma distancia (o 2–3× el tiempo del esfuerzo). Nunca la recortes: la velocidad exige frescura.', why: [cite('daniels-running-formula-4ed', 'Cap. 4 (repetition)', 'Recovery 2–3× el tiempo de trabajo o trote igual distancia; recortarla sacrifica mecánica.')] } },
      { id: 'cd', kind: 'cooldown', name: 'Trote E suave', durationMin: 10, intensity: { ...RUN_E } },
    ],
    avgMets: 7.9,
    why: [
      cite('daniels-running-formula-4ed', 'Cap. 4 (repetition) + tabla 4.4', 'Total a R: menor de 8 km o 5% del volumen semanal; reps ≤2 min (200–600 m).'),
      cite('bangsbo-running-science', 'cap. Training volume and intensity, p. 170', 'Strides 60–100 m como estímulo neuromuscular aláctico.'),
    ],
    editable: true,
  },
  // ===== BIKING =====
  {
    id: 'bike-zone2-90',
    disciplineId: 'biking',
    approachId: 'fat-burn',
    name: 'Zone2 90 min (55–75% FTP)',
    totalMin: 90,
    difficulty: 'principiante',
    summary: 'Rodador largo y llano a intensidad aeróbica: sin picos, la adaptación depende de la duración.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Progresivo 55% FTP', durationMin: 15, intensity: { label: 'Z2 baja · 55–60% FTP', pctFtp: [55, 60] as [number, number], mets: 5.6, why: [metBike(58, 5.6)] } },
      { id: 'main', kind: 'work', name: 'Zone2 continuo, terreno llano', durationMin: 60, intensity: { label: 'Z2 · 55–75% FTP (60–70% HRmax)', pctFtp: [55, 75] as [number, number], pctHrMax: [60, 70] as [number, number], mets: 6.7, why: [metBike(65, 6.7)] },
        modification: { guidance: 'Evita picos >20 s por encima del umbral: tras un surge pueden ser ~20 min para volver a la línea base láctica.', why: [cite('wilkins-cycling-physiology-2021', 'Cap. 11, p. 160', 'zone2_surge_control: surges >20 s sobre LT reducen el tiempo de fat oxidation ~20 min.')] } },
      { id: 'cd', kind: 'cooldown', name: 'Enfriamiento suave', durationMin: 15, intensity: { label: 'Z1–Z2 · <60% FTP', pctFtp: [40, 60] as [number, number], mets: 5.1, why: [metBike(50, 5.1)] } },
    ],
    avgMets: 6.3,
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 158–160', 'Ride Zone2: ≥1.5 h a 55–75% FTP (60–70% HRmax); no subir intensidad para "mejorar": la adaptación depende de la duración.'),
    ],
    editable: true,
  },
  {
    id: 'bike-low-cadence-60',
    disciplineId: 'biking',
    approachId: 'muscular-endurance',
    name: 'Fuerza-resistencia 60 min (3×10 min a 60 RPM)',
    totalMin: 60,
    difficulty: 'intermedio',
    summary: 'Cadencia baja (55–75 RPM) en Zone3: fuerza-resistencia específica de pedaleo.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Progresivo a cadencia normal', durationMin: 10, intensity: { label: 'Z2 · 55–75% FTP, 85–95 RPM', pctFtp: [55, 75] as [number, number], mets: 6.7, why: [metBike(65, 6.7)] } },
      { id: 'main', kind: 'work', name: '3 × 10 min a 55–75 RPM, 80–95% FTP', durationMin: 10, repeats: 3, restMin: 5, intensity: { label: 'Z3 · 80–95% FTP @ 55–75 RPM', pctFtp: [80, 95] as [number, number], mets: 8.9, why: [metBike(87, 8.9)] },
        modification: { guidance: 'Mantén 55–75 RPM: por debajo de ~45–60 RPM no hay adaptación de fuerza real y puede ser lesivo.', why: [cite('allen-power-meter-3ed', 'Sección técnica (pedaleo)', '⚠️ Cadencias muy bajas en strength-endurance son insuficientes para adaptación de fuerza y pueden ser lesivas.')] } },
      { id: 'cd', kind: 'cooldown', name: 'Z1 suave, cadencia libre', durationMin: 10, intensity: { label: 'Z1 · <55% FTP', pctFtp: [40, 55] as [number, number], mets: 4.9, why: [metBike(48, 4.9)] } },
    ],
    avgMets: 6.8,
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 161–165', 'Low-cadence Zone3: 20–60 min totales a 55–75 RPM, 80–95% FTP, 1–3×/sem.'),
    ],
    editable: true,
  },
  {
    id: 'bike-vo2-5x3',
    disciplineId: 'biking',
    approachId: 'power-hit',
    name: 'VO2max 5×3 min a 115% FTP',
    totalMin: 57,
    difficulty: 'avanzado',
    summary: 'Intervalos clásicos de VO2max con recuperación 1:1. Requiere frescura; posponer si hay fatiga.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Progresivo + 2 activaciones de 1 min', durationMin: 15, intensity: { label: 'Z2 + picos Z4', pctFtp: [55, 90] as [number, number], mets: 7.2, why: [metBike(70, 7.2)] } },
      { id: 'main', kind: 'work', name: '5 × 3 min a 110–120% FTP', durationMin: 3, repeats: 5, restMin: 3, intensity: { label: 'Z5 · 110–120% FTP, HR >90% HRmax al final', pctFtp: [110, 120] as [number, number], pctHrMax: [90, 97] as [number, number], mets: 11.8, why: [metBike(115, 11.8)] },
        modification: { guidance: 'Si la potencia de un intervalo cae >5% respecto al anterior, termina la sesión.', why: [cite('allen-power-meter-3ed', 'Regla interval-stop-criterion', 'Caída de potencia >~5% en el intervalo repetido = fin de la sesión.')] } },
      { id: 'cd', kind: 'cooldown', name: 'Z1–Z2 15 min', durationMin: 15, intensity: { label: 'Z1 · <60% FTP', pctFtp: [40, 60] as [number, number], mets: 5.1, why: [metBike(50, 5.1)] } },
    ],
    avgMets: 6.9,
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 170–172', 'classic_vo2max_intervals: 4–8 × 3–6 min a 110–120% FTP, rec. 1:1–2:1, HR >90% HRmax en intervalos tardíos; atleta fresco.'),
    ],
    editable: true,
  },
  {
    id: 'bike-sprints-z7',
    disciplineId: 'biking',
    approachId: 'max-speed',
    name: 'Sprints Z7: 8×15 s con 4–5 min rec.',
    totalMin: 72,
    difficulty: 'intermedio',
    summary: 'Sprints neuromusculares cortos (5–20 s) con recuperación completa.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Progresivo + 3 sprints crecientes', durationMin: 18, intensity: { label: 'Z2 + aberturas', pctFtp: [55, 90] as [number, number], mets: 7.2, why: [metBike(70, 7.2)] } },
      { id: 'main', kind: 'work', name: '8 × 15 s máximos / 4–5 min rodando', durationMin: 0.25, repeats: 8, restMin: 4.5, intensity: { label: 'Z7 · máxima (5–20 s)', mets: 14.9, why: [metBike(145, 14.9)] } },
      { id: 'cd', kind: 'cooldown', name: 'Z1 20 min', durationMin: 20, intensity: { label: 'Z1 · <55% FTP', pctFtp: [40, 55] as [number, number], mets: 4.9, why: [metBike(48, 4.9)] } },
    ],
    avgMets: 4.7,
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 10–11 (Z7) + plantillas anaerobic power / neuromuscular', 'Z7: 5–20 s a intensidad máxima, recuperación amplia.'),
    ],
    editable: true,
  },
  // ===== SPINNING =====
  {
    id: 'spin-easy-30',
    disciplineId: 'spinning',
    approachId: 'fat-burn',
    name: 'Spinning suave Z2 30 min',
    totalMin: 30,
    difficulty: 'principiante',
    summary: 'Sesión indoor continua a intensidad aeróbica: mínimo efectivo para días suaves.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Cadencia libre, resistencia mínima', durationMin: 5, intensity: { label: 'Z1 · <55% FTP', pctFtp: [40, 55] as [number, number], mets: 4.9, why: [metBike(48, 4.9)] } },
      { id: 'main', kind: 'work', name: 'Continuo Z2, 85–95 RPM', durationMin: 20, intensity: { label: 'Z2 · 55–75% FTP (60–70% HRmax)', pctFtp: [55, 75] as [number, number], pctHrMax: [60, 70] as [number, number], mets: 6.7, why: [metBike(65, 6.7)] } },
      { id: 'cd', kind: 'cooldown', name: 'Enfriamiento 5 min', durationMin: 5, intensity: { label: 'Z1', pctFtp: [40, 55] as [number, number], mets: 4.9, why: [metBike(48, 4.9)] } },
    ],
    avgMets: 6.1,
    why: [
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.5', 'Bouts ≥10 min cuentan para el mínimo de 150 min/sem moderado.'),
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 158–160', 'Intensidad Z2 55–75% FTP para base aeróbica/fat oxidation.'),
    ],
    editable: true,
  },
  {
    id: 'spin-hit-45',
    disciplineId: 'spinning',
    approachId: 'power-hit',
    name: 'Spinning HIIT 45 min (microbursts 30/30 por ciclos)',
    totalMin: 47,
    difficulty: 'avanzado',
    summary: '2 ciclos de 12 min con 30 s fuerte / 30 s suave (2:1 de trabajo efectivo) a ~130% FTP en los picos.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Progresivo + 2 activaciones 30 s', durationMin: 10, intensity: { label: 'Z2 + picos', pctFtp: [55, 100] as [number, number], mets: 7.5, why: [metBike(73, 7.5)] } },
      { id: 'c1', kind: 'work', name: 'Ciclo 1: 12 × 30 s ON (120–130% FTP) / 30 s OFF', durationMin: 0.5, repeats: 12, restMin: 0.5, intensity: { label: 'Z6C · 120–130% FTP en ON', pctFtp: [120, 130] as [number, number], mets: 11.3, why: [metBike(125, 11.3)] },
        modification: { guidance: 'Dentro del ciclo el ratio on/off 2:1 (40/20) suele funcionar mejor si el 30/30 se queda corto de estímulo.', why: [cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 182–184', 'microburst_vo2max_intervals: 2–4 bloques de 9–15 min, esfuerzos 15–45 s, work:rest 1:1–2:1, 120–130% FTP, HR deriva a 90–95% HRmax.')] } },
      { id: 'rec', kind: 'recovery', name: 'Recuperación entre ciclos (4 min Z1)', durationMin: 4, intensity: { label: 'Z1 · <55% FTP', pctFtp: [40, 55] as [number, number], mets: 4.9, why: [metBike(48, 4.9)] } },
      { id: 'c2', kind: 'work', name: 'Ciclo 2: 12 × 30 s ON / 30 s OFF', durationMin: 0.5, repeats: 12, restMin: 0.5, intensity: { label: 'Z6C · 120–130% FTP en ON', pctFtp: [120, 130] as [number, number], mets: 11.3, why: [metBike(125, 11.3)] } },
      { id: 'cd', kind: 'cooldown', name: 'Enfriamiento 10 min', durationMin: 10, intensity: { label: 'Z1', pctFtp: [40, 55] as [number, number], mets: 4.9, why: [metBike(48, 4.9)] } },
    ],
    avgMets: 6.5,
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 182–184', 'Microbursts: bloques 9–15 min, esfuerzos 15–45 s on/off, rec. entre bloques 3–5 min, HR objetivo 90–95% HRmax.'),
      cite('bangsbo-running-science', 'cap. Training principles in distance running, pp. 127–128', 'El HIT mejora variables aeróbicas; añadir intensidad sin controlar volumen aumenta riesgo.'),
    ],
    editable: true,
  },
  {
    id: 'spin-threshold-56',
    disciplineId: 'spinning',
    approachId: 'muscular-endurance',
    name: 'Threshold indoor 2×12 min a 100% FTP',
    totalMin: 56,
    difficulty: 'intermedio',
    summary: 'Intervalos a umbral (98–103% FTP): tolerancia láctica y ritmo sostenible.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Progresivo + 1 min a ritmo objetivo', durationMin: 12, intensity: { label: 'Z2 + abertura', pctFtp: [55, 95] as [number, number], mets: 7.2, why: [metBike(70, 7.2)] } },
      { id: 'main', kind: 'work', name: '2 × 12 min a 98–103% FTP / 5 min rec.', durationMin: 12, repeats: 2, restMin: 5, intensity: { label: 'Z4 · 98–103% FTP (80–90% HRmax)', pctFtp: [98, 103] as [number, number], pctHrMax: [80, 90] as [number, number], mets: 10.1, why: [metBike(100, 10.1)] } },
      { id: 'cd', kind: 'cooldown', name: 'Enfriamiento 15 min', durationMin: 15, intensity: { label: 'Z1–Z2', pctFtp: [40, 60] as [number, number], mets: 5.1, why: [metBike(50, 5.1)] } },
    ],
    avgMets: 7.5,
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 11 (lactate-threshold-intervals)', 'Intervalos 6–30 min a 98–103% FTP, 95–105% threshold HR, volumen típico 20–45 min.'),
    ],
    editable: true,
  },
  // ===== WALKING =====
  {
    id: 'walk-z2-60',
    disciplineId: 'walking',
    approachId: 'fat-burn',
    name: 'Caminata moderada 60 min (~100 pasos/min)',
    totalMin: 60,
    difficulty: 'principiante',
    summary: '60 min continuos a paso moderado: cadencia ~100 pasos/min, postura erguida.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Paso cómodo progresivo', durationMin: 10, intensity: { label: 'Ligero · 2.0–2.9 METs', mets: 3.0, why: [MET_WALK_FLAT] } },
      { id: 'main', kind: 'work', name: 'Ritmo moderado constante', durationMin: 40, intensity: { label: 'Moderado · ~5.6–6 km/h, ~100 pasos/min', mets: 3.7, why: [MET_WALK_FLAT, cite('acsm-exercise-testing-prescription-10ed', 'Cap. 4–5 (cues caminata)', 'Cadencia ~100 pasos/min para intensidad moderada.')] } },
      { id: 'cd', kind: 'cooldown', name: 'Paso suave 10 min', durationMin: 10, intensity: { label: 'Ligero', mets: 3.0, why: [MET_WALK_FLAT] } },
    ],
    avgMets: 3.5,
    why: [
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.5', 'FITT: ≥5 d/sem moderado, 30–60 min/día, ≥150 min/sem; progresión +5–10 min cada 1–2 sem.'),
    ],
    editable: true,
  },
  {
    id: 'walk-grade-45',
    disciplineId: 'walking',
    approachId: 'muscular-endurance',
    name: 'Caminata en pendiente 45 min (5%)',
    totalMin: 45,
    difficulty: 'intermedio',
    summary: 'Menos velocidad, más pendiente: mismo gasto con menos impacto (ajuste de carga en cinta).',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Llano cómodo 10 min', durationMin: 10, intensity: { label: 'Ligero–moderado', mets: 3.7, why: [MET_WALK_FLAT] } },
      { id: 'main', kind: 'work', name: '4.8 km/h a 5% de pendiente', durationMin: 25,
        intensity: { label: 'Moderado-vigoroso · 80 m/min, G=5%', mets: 5.3, why: [MET_WALK_GRADE] },
        modification: { guidance: 'Para subir carga: reduce velocidad y sube pendiente (mejor que alargar el paso).', why: [cite('acsm-exercise-testing-prescription-10ed', 'Cap. 4–5 (variantes seguras caminata)', 'Reducir velocidad/incrementar pendiente para adaptar carga; evitar overstriding.')] } },
      { id: 'cd', kind: 'cooldown', name: 'Llano suave 10 min', durationMin: 10, intensity: { label: 'Ligero', mets: 3.0, why: [MET_WALK_FLAT] } },
    ],
    avgMets: 4.4,
    why: [
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.3', 'El componente de pendiente (1.8×S×G caminando) eleva el coste sin aumentar impacto.'),
    ],
    editable: true,
  },
  {
    id: 'walk-brisk-peaks-40',
    disciplineId: 'walking',
    approachId: 'power-hit',
    name: 'Caminata rápida con picos 40 min',
    totalMin: 40,
    difficulty: 'principiante',
    summary: 'Base a paso rápido (≈3.7 mph, límite de la marcha) con 5 picos de 2 min a paso máximo.',
    blocks: [
      { id: 'wu', kind: 'warmup', name: 'Paso cómodo 10 min', durationMin: 10, intensity: { label: 'Ligero', mets: 3.0, why: [MET_WALK_FLAT] } },
      { id: 'main', kind: 'work', name: 'Base rápida + 5 × 2 min a paso máximo / 2 min cómodo', durationMin: 2, repeats: 5, restMin: 2, intensity: { label: 'Brisk ~3.7 mph con picos', mets: 4.3, why: [MET_WALK_BRISK, MET_WALK_GRADE] } },
      { id: 'cd', kind: 'cooldown', name: 'Paso suave 12 min', durationMin: 12, intensity: { label: 'Ligero', mets: 3.0, why: [MET_WALK_FLAT] } },
    ],
    avgMets: 3.2,
    why: [
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.5', 'Combinación moderado+vigoroso 3–5 d/sem; bouts ≥10 min acumulables.'),
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.3', '3.7 mph es el límite de la ecuación de caminata: por encima, transición a trote (correr 0.2×S).'),
    ],
    editable: true,
  },
];

// ---------- Helpers ----------

/** METs de la recuperación activa entre repeticiones: aproximación conservadora
 * dentro de la clase "ligero" 2.0–2.9 METs (ACSM Cap. 6, regla met-classification; inferred). */
const REST_METS = 2.5;

/** METs promedio ponderado por duración de bloques.
 * Convención: con `repeats`, `durationMin` es la duración de CADA repetición y `restMin`
 * la recuperación ENTRE repeticiones (se cuentan repeats-1; la recuperación final es el
 * siguiente bloque recovery/cooldown). */
export function computeAvgMets(preset: CardioPreset): number {
  let totalMin = 0;
  let weighted = 0;
  for (const b of preset.blocks) {
    const reps = b.repeats ?? 1;
    const work = b.durationMin * reps;
    const rest = b.repeats ? (b.restMin ?? 0) * (b.repeats - 1) : 0;
    const mets = b.intensity.mets ?? 3.0;
    totalMin += work + rest;
    weighted += mets * work + REST_METS * rest;
  }
  return totalMin === 0 ? 0 : Math.round((weighted / totalMin) * 10) / 10;
}

/** Suma real de minutos de la sesión (trabajo + recuperaciones entre reps). */
export function computeTotalMin(preset: CardioPreset): number {
  let total = 0;
  for (const b of preset.blocks) {
    const reps = b.repeats ?? 1;
    total += b.durationMin * reps + (b.repeats ? (b.restMin ?? 0) * (b.repeats - 1) : 0);
  }
  return Math.round(total * 10) / 10;
}

/** Contrato para el estimador kcal de AG-NUTRI: presets aplanados con METs y cita. */
export function getPresetsWithMet(): PresetWithMet[] {
  return CARDIO_PRESETS.map((p) => {
    const c = p.why[0] ?? p.blocks[0].intensity.why[0];
    return {
      presetId: p.id,
      name: p.name,
      disciplineId: p.disciplineId,
      totalMin: p.totalMin,
      avgMets: p.avgMets,
      metsSource: 'ACSM Tabla 6.3 + Allen kJ≈kcal (ver rag/cardio extracciones)',
      citation: { sourceId: c.sourceId, locator: c.locator },
    };
  });
}

export function getPreset(id: string): CardioPreset | undefined {
  return CARDIO_PRESETS.find((p) => p.id === id);
}
