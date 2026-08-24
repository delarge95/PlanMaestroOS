// src/data/fitness/cardio/disciplines.ts — 4 disciplinas con METs citados.
// METs derivados de las ecuaciones metabólicas (ACSM Tabla 6.3) y de la regla kJ≈kcal (Allen).
// Correr/caminar: METs = [(0.1|0.2)×S + 3.5] / 3.5 (S en m/min, llano). Derivación marcada donde aplica.

import { cite } from './sources';
import type { Discipline } from './types';

const metEquation = cite(
  'acsm-exercise-testing-prescription-10ed',
  'Cap. 6, Tabla 6.3 (ecuaciones metabólicas)',
  'VO2 caminar (1.9–3.7 mph) = (0.1×S)+(1.8×S×G)+3.5; correr (>5 mph) = (0.2×S)+(0.9×S×G)+3.5; 1 MET = 3.5 mL·kg⁻¹·min⁻¹.'
);

const kjKcal = cite(
  'allen-power-meter-3ed',
  'Regla kilojoule-calorie-estimation',
  'En ciclismo con potenciómetro, el trabajo en kJ ≈ kcal gastadas (la eficiencia ~22–24% compensa la conversión).'
);

export const DISCIPLINES: Discipline[] = [
  {
    id: 'running',
    name: 'Running',
    typicalMets: {
      value: 8.7,
      why: [
        metEquation,
        cite(
          'acsm-exercise-testing-prescription-10ed',
          'Cap. 6, Tabla 6.3 aplicada a 8 km/h (134 m/min)',
          'VO2 = 0.2×134 + 3.5 = 30.3 mL·kg⁻¹·min⁻¹ → 30.3/3.5 ≈ 8.7 METs a 8 km/h en llano (derivación: inferred).',
          'inferred'
        ),
      ],
    },
    metsRange: [6.0, 11.6],
    description:
      'Sistema Daniels E/M/T/I/R: la mayor parte del volumen en easy (E), calidad dosificada en T/I/R con límites por sesión.',
    why: [
      cite('daniels-running-formula-4ed', 'Cap. 4, fig. 4.1', 'E 59–74% VO2max; M 75–84%; T 85–88%; I ≈ VO2max; R > VO2max, con límites de volumen por sesión.'),
      cite('bangsbo-running-science', 'cap. Training volume and intensity, pp. 169–175', '80–90% del volumen semanal de un fondista debe ser aeróbico.'),
    ],
  },
  {
    id: 'biking',
    name: 'Biking / carretera',
    typicalMets: {
      value: 7.3,
      why: [
        kjKcal,
        cite(
          'allen-power-meter-3ed',
          'Regla kilojoule-calorie-estimation + Cap. 7 zonas (%FTP)',
          'A 150 W sostenidos: 150 W × 3.6 kJ/h ≈ 540 kcal/h; con 1 MET ≈ 1.05 kcal/kg/h (ACSM) → ≈7.3 METs para 70 kg (derivación: inferred).',
          'inferred'
        ),
      ],
    },
    metsRange: [4.0, 12.0],
    description:
      'Ciclismo guiado por potencia (FTP, zonas Coggan) o FC. La mayoría de sesiones Zone2; intervalos dosificados por %FTP.',
    why: [
      cite('allen-power-meter-3ed', 'Cap. 7, tabla training-zones-classic', 'Z2 56–75% FTP; Z3 76–90%; Z4 91–105%; Z5 106–120%; Z6 121–150%.'),
      cite('wilkins-cycling-physiology-2021', 'Cap. 12, pp. 213–215', '~75–80% de las sesiones deben ser de baja intensidad (polarizada).'),
    ],
  },
  {
    id: 'spinning',
    name: 'Spinning / indoor',
    typicalMets: {
      value: 7.0,
      why: [
        cite(
          'acsm-exercise-testing-prescription-10ed',
          'Cap. 6, Tabla 6.4',
          'Spinning es ejercicio Tipo B (vigoroso/continuo, mínima habilidad) para adultos con hábito.'
        ),
        cite(
          'wilkins-cycling-physiology-2021',
          'Cap. 11, pp. 182–184 (microbursts 120–130% FTP)',
          'METs equivalentes ≈6–9 según bloques: derivado de %FTP de las plantillas de sesión (derivación: inferred).',
          'inferred'
        ),
      ],
    },
    metsRange: [5.0, 10.0],
    description:
      'Sesiones indoor estructuradas por bloques (calentamiento → intervalos → enfriamiento) con cadencia y %FTP como anclas.',
    why: [
      cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 155–206', 'Plantillas: recovery, Zone2, VO2max, threshold, microbursts, over/unders; ancla %FTP y cadencia.'),
      cite('allen-power-meter-3ed', 'Cap. 3, ftp-test-protocol', 'FTP = potencia media de 20 min × 0.95: ancla para intensidades indoor.'),
    ],
  },
  {
    id: 'walking',
    name: 'Caminata',
    typicalMets: {
      value: 3.7,
      why: [
        metEquation,
        cite(
          'acsm-exercise-testing-prescription-10ed',
          'Cap. 6, Tabla 6.3 aplicada a 5.6 km/h (93.8 m/min)',
          'VO2 = 0.1×93.8 + 3.5 = 12.9 mL·kg⁻¹·min⁻¹ → ≈3.7 METs a 5.6 km/h en llano (derivación: inferred).'
        ),
      ],
    },
    metsRange: [3.0, 5.9],
    description:
      'Modalidad Tipo A (mínima habilidad, continua): base del FITT aeróbico general y del volumen diario de pasos.',
    why: [
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tablas 6.4–6.5', 'Tipo A; FITT: ≥5 d/sem moderado, 30–60 min/día, ≥150 min/sem; ≥7000 pasos/día.'),
      cite('acsm-exercise-testing-prescription-10ed', 'Cap. 4–5 (cues caminata)', 'Cadencia ~100 pasos/min para intensidad moderada.'),
    ],
  },
];

export function getDiscipline(id: Discipline['id']): Discipline {
  const d = DISCIPLINES.find((x) => x.id === id);
  if (!d) throw new Error(`Disciplina desconocida: ${id}`);
  return d;
}
