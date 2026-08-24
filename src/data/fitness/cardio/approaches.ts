// src/data/fitness/cardio/approaches.ts — 4 enfoques diferenciados con base científica citada.

import { cite } from './sources';
import type { Approach } from './types';

export const APPROACHES: Approach[] = [
  {
    id: 'fat-burn',
    name: 'Quema de grasa',
    description:
      'Sesiones largas y suaves (Zone2 / E-pace) donde la oxidación de grasas domina como sustrato: mantener intensidad baja y constante, sin picos glucolíticos. ⚠️ La "zona quema-grasa" maximiza el % de grasa oxidada, no las kcal/hora — el gasto total sube con la intensidad.',
    whenToUse:
      'Base aeróbica, días de volumen, déficit calórico sostenible con sesiones largas, o recuperación activa entre sesiones intensas.',
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 8, p. 119 + Cap. 11, pp. 158–160', 'Focus fat-oxidation: la grasa sostiene ejercicio mucho más tiempo pero a menor tasa; evitar surges >20 s sobre umbral.'),
      cite('daniels-running-formula-4ed', 'Cap. 4', 'Rodajes E a 59–74% VO2max (65–79% HRmax) construyen base y vascularización; en rodajes largos no tomar bebida energética para practicar ahorro de glucógeno.'),
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.5', 'Volumen ≥500–1000 MET·min/sem (~1000 kcal/sem) como objetivo de salud.'),
    ],
  },
  {
    id: 'muscular-endurance',
    name: 'Resistencia muscular',
    description:
      'Fuerza-resistencia específica del deporte: en bici, trabajo a cadencia baja (55–75 RPM) en Zone3; en running, tempo/threshold sostenido que mejora el clearance de lactato y la resistencia a fatiga.',
    whenToUse:
      'Fase de preparación general, puntos débiles de fuerza en pedaleo, o mejora de ritmo sostenible (threshold) antes de metas de velocidad.',
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 161–165', 'Low-cadence Zone3: 20–60 min totales a 55–75 RPM, 80–95% FTP, 1–3×/sem.'),
      cite('daniels-running-formula-4ed', 'Cap. 4 (threshold)', 'T a 85–88% VO2max mejora clearance de lactato; tempo 20 min o cruise intervals ≤30 min, ≤10% del volumen semanal.'),
      cite('allen-power-meter-3ed', 'Sección técnica (pedaleo)', '⚠️ Cadencias 45–60 RPM en strength-endurance no generan adaptación de fuerza real y pueden ser lesivas: mantener 55–75 RPM.'),
    ],
  },
  {
    id: 'max-speed',
    name: 'Velocidad máxima',
    description:
      'Estímulo neuromuscular y aláctico: repeticiones cortas (≤2 min en running; 5–20 s máximos en bici) con recuperaciones amplias (2–3× el esfuerzo) para correr/pedalear rápido CON buena mecánica.',
    whenToUse:
      'Fondistas que pierden velocidad, fase específica pre-competencia, o mejora de economía de movimiento. Requiere frescura.',
    why: [
      cite('daniels-running-formula-4ed', 'Cap. 4 (repetition)', 'R: reps ≤2 min, recuperación 2–3× el tiempo de trabajo, total ≤menor de 8 km o 5% del volumen semanal; nunca recortar recuperación a costa de mecánica.'),
      cite('bangsbo-running-science', 'cap. Training volume and intensity, p. 170', 'Strides de 60–100 m como estímulo neuromuscular aláctico sin volumen anaeróbico significativo.'),
      cite('wilkins-cycling-physiology-2021', 'Cap. 10–11 (Z7)', 'Z7 sprint: 5–20 s a intensidad máxima; Z6 121–150% FTP.'),
    ],
  },
  {
    id: 'power-hit',
    name: 'Potencia / HIT por ciclos',
    description:
      'Intervalos de alta intensidad por bloques ("ciclos") para elevar VO2max: esfuerzos de 15 s–6 min con micro-recuperaciones, guiados por %FTP o FC (>90–95% HRmax en los intervalos tardíos).',
    whenToUse:
      'Atletas con base aeróbica consolidada que buscan techo aeróbico; 1–3 sesiones/semana según recuperación. No con lesión activa ni fatiga alta.',
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 182–184', 'Microbursts: 2–4 bloques de 9–15 min, esfuerzos 15–45 s on/off (2:1 suele funcionar mejor), 120–130% FTP, rec. entre bloques 3–5 min.'),
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 170–172', 'VO2max clásico: 4–8 × 3–6 min a 110–120% FTP, rec. 1:1–2:1, HR >90% HRmax.'),
      cite('bangsbo-running-science', 'cap. Training principles in distance running, pp. 127–128', 'Intervalos 90–95% VO2max mejoran 10 km; exigir base aeróbica antes de incrementar.'),
      cite('daniels-running-formula-4ed', 'Cap. 4 (interval)', 'I: llegar a VO2max tarda ~90–120 s → bouts 3–5 min; con bouts de 1 min, recovery <45 s para acumular tiempo en máx.'),
    ],
  },
];

export function getApproach(id: Approach['id']): Approach {
  const a = APPROACHES.find((x) => x.id === id);
  if (!a) throw new Error(`Enfoque desconocido: ${id}`);
  return a;
}
