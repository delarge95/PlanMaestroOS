// src/data/fitness/cardio/editGuides.ts — Límites seguros citados para el modo edición GUIADO.
// Cada rango que el stepper permite lleva su justificación con cita (regla §0: ningún número sin fuente).
// El modo LIBRE no usa estos límites (se advierte de que se pierde la garantía del diseño original).

import { cite } from './sources';
import type { CardioPreset, DisciplineId, SessionBlock } from './types';

export interface StepperBounds {
  min: number;
  max: number;
  step: number;
  unit: 'min' | 'reps';
  /** Explicación científica corta del límite. */
  guidance: string;
  why: ReturnType<typeof cite>[];
}

const round = (n: number, step: number) => Math.round(n / step) * step;

/**
 * Límites guiados por bloque. Los rangos provienen de las reglas de las fuentes
 * (Daniels Cap. 4; Wilkins Cap. 11; ACSM Cap. 6 Tabla 6.5; Allen Cap. 7).
 * Para bloques sin regla específica se usa un rango conservador alrededor del diseño original,
 * marcado como aproximación del diseño (no cita dura).
 */
export function guidedBoundsFor(
  preset: Pick<CardioPreset, 'approachId' | 'disciplineId'>,
  block: SessionBlock,
  field: 'durationMin' | 'repeats' | 'restMin',
  /** Valor actual del campo (para límites dinámicos, p.ej. rest ≥ 2× trabajo en R). */
  current: number
): StepperBounds {
  const { approachId, disciplineId } = preset;
  const designNote = (label: string): StepperBounds => ({
    min: Math.max(field === 'repeats' ? 1 : 0.25, round(current * 0.5, field === 'repeats' ? 1 : 0.25)),
    max: round(current * 2, field === 'repeats' ? 1 : 0.25) || current,
    step: field === 'repeats' ? 1 : 0.25,
    unit: field === 'repeats' ? 'reps' : 'min',
    guidance: `${label} Aproximación conservadora alrededor del diseño original (±50–100%), sin regla dura en la fuente para este campo.`,
    why: [],
  });

  // Recuperaciones y calentamientos: rango general citado (E/Z1-Z2 en todas las fuentes).
  if (block.kind !== 'work') {
    if (field === 'durationMin') {
      return {
        min: 5,
        max: 30,
        step: 1,
        unit: 'min',
        guidance: 'Calentamiento/enfriamiento suave (E / Z1–Z2): suficiente para progresar sin robar tiempo al objetivo de la sesión.',
        why: [
          cite('daniels-running-formula-4ed', 'Cap. 4, "Training Suggestions" + tabla 4.2', 'Warm-ups de ~10 min E + strides; enfriamientos suaves al final de cada sesión.'),
          cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 155–206', 'Todas las plantillas abren con progresivo 10–20 min y cierran con Z1 10–20 min.'),
        ],
      };
    }
    return designNote('Bloque sin repeticiones.');
  }

  // ===== Bloques WORK: límites por enfoque =====
  if (approachId === 'fat-burn') {
    if (field === 'durationMin') {
      if (disciplineId === 'running')
        return {
          min: 30,
          max: 150,
          step: 5,
          unit: 'min',
          guidance: 'E mínimo 30 min por sesión; la carrera larga (L) nunca supera 150 min (y ≤25–30% del volumen semanal).',
          why: [
            cite('daniels-running-formula-4ed', 'Cap. 4 ("Training Suggestions" y "Long Runs and Increasing Mileage")', 'E <30 min no justifica el tiempo; L máx 150 min / 2.5 h aunque sea maratón.'),
          ],
        };
      if (disciplineId === 'walking')
        return {
          min: 20,
          max: 90,
          step: 5,
          unit: 'min',
          guidance: 'FITT caminata: 30–60 min/día de intensidad moderada (≥150 min/sem); ampliable a 90 en días de volumen.',
          why: [
            cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.5', 'Tiempo 30–60 min/día moderado; ≥150 min/sem; progresión +5–10 min cada 1–2 semanas.'),
          ],
        };
      return {
        min: 30,
        max: 180,
        step: 5,
        unit: 'min',
        guidance: 'Rodador Zone2: la adaptación depende de la DURACIÓN, no de subir intensidad; plantillas desde 45–60 min hasta ≥1.5 h.',
        why: [
          cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 158–160', 'Zone2 ride ≥1.5 h a 55–75% FTP; sin picos >20 s sobre umbral.'),
        ],
      };
    }
    return designNote('Sesión continua: ajusta solo la duración.');
  }

  if (approachId === 'muscular-endurance') {
    if (disciplineId === 'running' && field === 'durationMin')
      return {
        min: 10,
        max: 30,
        step: 5,
        unit: 'min',
        guidance: 'Tempo verdadero 20 min; cruise intervals hasta 30 min; el total a T no supera el 10% del volumen semanal.',
        why: [
          cite('daniels-running-formula-4ed', 'Cap. 4 (threshold) + tabla 4.2', 'Tempo 20 min continuos; cruise intervals ≤30 min; ≤10% km semanales a T.'),
        ],
      };
    if ((disciplineId === 'biking' || disciplineId === 'spinning') && field === 'durationMin')
      return {
        min: 5,
        max: 20,
        step: 5,
        unit: 'min',
        guidance: 'Intervalos a umbral de 6–30 min con volumen típico 20–45 min totales; cadencia baja 55–75 RPM si es fuerza-resistencia.',
        why: [
          cite('wilkins-cycling-physiology-2021', 'Cap. 11 (threshold intervals pp. 161–165 y lactate-threshold-intervals)', 'Low-cadence 20–60 min totales a 55–75 RPM; intervalos T de 6–30 min, volumen 20–45 min.'),
        ],
      };
    if (field === 'repeats')
      return {
        min: 2,
        max: 6,
        step: 1,
        unit: 'reps',
        guidance: 'El volumen total de trabajo a umbral/fuerza-resistencia se mantiene en 20–60 min.',
        why: [
          cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 161–165', 'Low-cadence Zone3: 20–60 min TOTALES de trabajo, 1–3×/sem.'),
        ],
      };
    if (field === 'restMin')
      return {
        min: 3,
        max: 8,
        step: 1,
        unit: 'min',
        guidance: 'Recuperación entre series de umbral: 3–5 min rodando suave.',
        why: [cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 161–165', 'Recuperaciones 3–5 min entre series de fuerza-resistencia/umbral.')],
      };
    return designNote('Resistencia muscular.');
  }

  if (approachId === 'max-speed') {
    if (field === 'durationMin')
      return disciplineId === 'biking' || disciplineId === 'spinning'
        ? {
            min: 0.25,
            max: 0.5,
            step: 0.25,
            unit: 'min',
            guidance: 'Sprint neuromuscular Z7: 5–20 s (15–30 s) al máximo.',
            why: [cite('wilkins-cycling-physiology-2021', 'Cap. 10–11 (Z7)', 'Z7: 5–20 s a intensidad máxima, recuperación amplia (varios minutos).')],
          }
        : {
            min: 0.25,
            max: 2,
            step: 0.25,
            unit: 'min',
            guidance: 'Repeticiones R ≤2 min (200–600 m); el total a R <8 km o 5% del volumen semanal.',
            why: [cite('daniels-running-formula-4ed', 'Cap. 4 (repetition) + tabla 4.4', 'Reps ≤2 min; total R menor de 8 km o 5% del volumen semanal.')],
          };
    if (field === 'repeats')
      return {
        min: 4,
        max: 12,
        step: 1,
        unit: 'reps',
        guidance: '4–12 repeticiones: suficiente estímulo neuromuscular sin acumular volumen anaeróbico.',
        why: [
          cite('daniels-running-formula-4ed', 'Cap. 4 (repetition)', 'Total a R menor de 8 km o 5% del volumen semanal (con 8×200 m ≈ 1.6 km hay margen).'),
          cite('bangsbo-running-science', 'cap. Training volume and intensity, p. 170', 'Strides 60–100 m alácticos: estímulo neuromuscular sin volumen anaeróbico significativo.'),
        ],
      };
    // restMin: regla dinámica 2–3× el tiempo de trabajo (R)
    return {
      min: round(Math.max(0.5, current * 2), 0.25),
      max: round(current * 3, 0.25) || current,
      step: 0.25,
      unit: 'min',
      guidance: 'Recuperación 2–3× la duración del esfuerzo (o trote igual distancia): NUNCA la recortes — la mecánica exige frescura.',
      why: [cite('daniels-running-formula-4ed', 'Cap. 4 (repetition)', 'Recovery 2–3× el tiempo de trabajo; recortarla sacrifica mecánica y el propósito R.')],
    };
  }

  // power-hit
  if (approachId === 'power-hit') {
    if (disciplineId === 'walking') {
      if (field === 'repeats')
        return {
          min: 3,
          max: 8,
          step: 1,
          unit: 'reps',
          guidance: '3–8 picos vigorosos acumulables dentro del FITT mixto (3–5 d/sem).',
          why: [cite('acsm-exercise-testing-prescription-10ed', 'Cap. 6, Tabla 6.5', 'Combinación moderado+vigoroso 3–5 d/sem; bouts ≥10 min acumulables.')],
        };
      return designNote('Picos de caminata.');
    }
    if (disciplineId === 'spinning' || block.id.startsWith('c')) {
      // Ciclos de microbursts 30/30
      if (field === 'durationMin')
        return {
          min: 0.25,
          max: 0.75,
          step: 0.25,
          unit: 'min',
          guidance: 'Esfuerzos ON de 15–45 s (microbursts); el OFF se mantiene igual o mayor que el ON.',
          why: [cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 182–184', 'Microbursts: esfuerzos 15–45 s on/off (work:rest 1:1 a 2:1), 120–130% FTP.')],
        };
      if (field === 'repeats')
        return {
          min: 9,
          max: 15,
          step: 1,
          unit: 'reps',
          guidance: 'Ciclos de 9–15 min de trabajo total; 2–4 ciclos por sesión con 3–5 min entre ellos.',
          why: [cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 182–184', '2–4 bloques de 9–15 min; recuperación entre bloques 3–5 min; HR deriva a 90–95% HRmax.')],
        };
      return {
        min: 0.5,
        max: 1,
        step: 0.25,
        unit: 'min',
        guidance: 'OFF del ciclo: igual al ON (1:1) o la mitad (2:1 si el estímulo se queda corto).',
        why: [cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 182–184', 'Work:rest 1:1 a 2:1; el 2:1 suele funcionar mejor en microbursts.')],
      };
    }
    // VO2max clásico (bici 5×3 / run cuartos)
    if (field === 'repeats')
      return {
        min: 4,
        max: 8,
        step: 1,
        unit: 'reps',
        guidance: '4–8 intervalos: margen citado del VO2max clásico; corta si la potencia/ritmo cae >5%.',
        why: [
          cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 170–172', '4–8 × 3–6 min a 110–120% FTP, rec. 1:1–2:1.'),
          cite('allen-power-meter-3ed', 'Regla interval-stop-criterion', 'Si la potencia de un work bout cae >~5% respecto al anterior, terminar la sesión.'),
        ],
      };
    if (field === 'durationMin')
      return {
        min: disciplineId === 'biking' ? 3 : 0.5,
        max: disciplineId === 'biking' ? 6 : 2,
        step: 0.5,
        unit: 'min',
        guidance:
          disciplineId === 'biking'
            ? 'Bouts de 3–6 min a 110–120% FTP.'
            : 'Bouts cortos (0.5–2 min) con micro-recuperación (<45 s) acumulan tiempo en VO2max; los de 3–5 min son el ideal clásico.',
        why: [
          cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 170–172', 'VO2max clásico: 3–6 min por intervalo.'),
          cite('daniels-running-formula-4ed', 'Cap. 4, figs. 4.2–4.4', 'Llegar a VO2max tarda ~90–120 s; bouts de 1 min con recovery <45 s también funcionan.'),
        ],
      };
    return {
      min: disciplineId === 'biking' ? 3 : 0.5,
      max: disciplineId === 'biking' ? 6 : 1,
      step: 0.25,
      unit: 'min',
      guidance:
        disciplineId === 'biking'
          ? 'Recuperación 1:1–2:1 respecto al intervalo.'
          : 'Recuperación <45 s (o nunca más larga que el esfuerzo) para acumular tiempo en VO2max.',
      why: [
        cite('wilkins-cycling-physiology-2021', 'Cap. 11, pp. 170–172', 'Rec. 1:1 o 2:1 en VO2max clásico.'),
        cite('daniels-running-formula-4ed', 'Cap. 4 (interval/H)', 'Recovery nunca más larga que el trabajo H; <45 s con bouts de 1 min.'),
      ],
    };
  }

  return designNote('Bloque sin guía específica.');
}

/** Kcal/min según ACSM Cap. 6: [(METs × 3.5 × peso_kg) / 1000] × 5. */
export function kcalPerMin(mets: number, weightKg: number): number {
  return ((mets * 3.5 * weightKg) / 1000) * 5;
}

export const KCAL_FORMULA_CITE = cite(
  'acsm-exercise-testing-prescription-10ed',
  'Cap. 6 (regla de conversión kcal/min)',
  'kcal/min = [(METs × 3.5 × peso_kg) / 1000] × 5; 1 MET = 3.5 mL·kg⁻¹·min⁻¹.'
);
