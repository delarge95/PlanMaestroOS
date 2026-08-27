// src/data/fitness/nutrition/femalePhysiology.ts — Ajustes nutricionales por perfil hormonal femenino (AG-NUTRI ciclo 2, mandato usuario)
// Fuente: rag/nutrition/fuentes/papers-hormonas-femeninas.md (chunks fem-hormones-*).
// REGLAS: evidencia de EFECTO PEQUEÑO; autorregulación por síntomas por encima de cualquier regla fija;
// sin datos biométricos más allá del perfil elegido por el usuario; info + derivación, nunca consejo médico.

import type { RuleCitation } from './types';
import { toChunkCitation } from './rules';

export type FemaleProfile = 'none' | 'ciclo-regular' | 'ciclo-irregular' | 'perimenopausia' | 'menopausia';

export const FEMALE_PROFILES: Array<{ value: FemaleProfile; label: string }> = [
  { value: 'none', label: 'No aplica / prefiero no decirlo' },
  { value: 'ciclo-regular', label: 'Ciclo menstrual regular' },
  { value: 'ciclo-irregular', label: 'Ciclo menstrual irregular' },
  { value: 'perimenopausia', label: 'Perimenopausia' },
  { value: 'menopausia', label: 'Menopausia / posmenopausia' },
];

export interface FemaleNoteLine {
  text: string;
  why: RuleCitation[];
}

export interface FemaleNote {
  title: string;
  lines: FemaleNoteLine[];
}

const RMR_LUTEAL = 'fem-hormones-menstrual-cycle-rmr-and-caloric-needs';
const MENOPAUSE_PROTEIN = 'fem-hormones-peri-menopause-protein-and-sarcopenia';
const CYCLE_TRAINING = 'fem-hormones-cycle-based-training-evidence-consensus';

/** Notas citadas según perfil. weightKg solo se usa para traducir g/kg a g/día (display). */
export function femaleNotesFor(
  profile: FemaleProfile,
  options: { weightKg?: number; currentProteinMidGPerKg?: number } = {}
): FemaleNote[] {
  const notes: FemaleNote[] = [];
  const cycleProfile = profile === 'ciclo-regular' || profile === 'ciclo-irregular';
  const menopauseProfile = profile === 'perimenopausia' || profile === 'menopausia';

  if (cycleProfile) {
    notes.push({
      title: 'Fase lútea: ajuste pequeño y OPCIONAL',
      lines: [
        {
          text:
            'El RMR sube en fase lútea en promedio +40 a +50 kcal/día (meta-análisis Benton 2020, d=0.22). ' +
            'Ajuste opcional de +50 a +100 kcal/día según apetito subjetivo; NO hay justificación para fluctuaciones calóricas masivas.',
          why: [toChunkCitation(RMR_LUTEAL)],
        },
        {
          text: 'El gasto calórico del ejercicio es idéntico entre fase folicular y lútea: no ajustes las kcal de tus sesiones por fase.',
          why: [toChunkCitation(RMR_LUTEAL)],
        },
        {
          text:
            'Fuerza máxima, potencia y VO2max apenas cambian entre fases (ΔVO2max ≈ −0.03 mL/kg/min); lo que SÍ empeora durante la menstruación ' +
            'es el esfuerzo percibido (RPE) y el DOMS. Usa el ciclo como herramienta de AUTORREGULACIÓN por síntomas, nunca como periodización rígida.',
          why: [toChunkCitation(CYCLE_TRAINING)],
        },
      ],
    });
  }

  if (menopauseProfile) {
    const proteinLine: FemaleNoteLine = {
      text:
        'La caída de estrógenos acelera la resistencia anabólica: la evidencia respalda elevar la proteína de la RDA (0.8 g/kg) hacia ' +
        '1.2–1.5 g/kg/día repartida en ≥3 tomas ricas en leucina/suero, junto a entrenamiento de fuerza.',
      why: [toChunkCitation(MENOPAUSE_PROTEIN)],
    };
    if (options.weightKg !== undefined) {
      const min = Math.round(options.weightKg * 1.2);
      const max = Math.round(options.weightKg * 1.5);
      proteinLine.text += ` Con ${options.weightKg} kg → ${min}–${max} g/día.`;
    }
    if (
      options.currentProteinMidGPerKg !== undefined &&
      options.currentProteinMidGPerKg < 1.2
    ) {
      proteinLine.text += ` Tu objetivo actual (${options.currentProteinMidGPerKg.toFixed(2)} g/kg) queda POR DEBAJO del rango citado para esta etapa.`;
    }
    notes.push({
      title: 'Peri/posmenopausia: proteína anti-sarcopénica + fuerza',
      lines: [
        proteinLine,
        {
          text:
            'Proteína + fuerza mejora masa muscular apendicular (ASMI SMD=0.47) y fuerza de prensión (+2.64 kg). Para el hueso, la proteína sola tiene efecto casi nulo: el estímulo determinante es la carga mecánica e impacto.',
          why: [toChunkCitation(MENOPAUSE_PROTEIN)],
        },
      ],
    });
  }

  if (profile === 'ciclo-irregular') {
    notes.push({
      title: 'Derivación recomendada',
      lines: [
        {
          text:
            'Un ciclo irregular no se gestiona con ajustes dietéticos automáticos: si persiste o acompaña síntomas (dolor incapacitante, ausencia de menstruación >3 meses, cambios bruscos), consultalo con un profesional de salud.',
          why: [],
        },
      ],
    });
  }

  return notes;
}

export const FEMALE_DISCLAIMER =
  'Evidencia de EFECTO PEQUEÑO (RMR lúteo +44 kcal/día en promedio): la autorregulación por síntomas prevalece sobre cualquier cifra. ' +
  'Ajuste informativo y auto-registrado; nada aquí es consejo médico ni diagnóstico. Ante ciclos irregulares persistentes o síntomas relevantes, deriva a profesional de salud.';
