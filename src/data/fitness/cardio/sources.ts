// src/data/fitness/cardio/sources.ts — Fuente única de citas (sourceId → título).
// sourceIds alineados con rag/cardio/manifest.json y biblioteca/MANIFEST.md.

import type { Citation, Confidence } from './types';

export const CARDIO_SOURCES = {
  'daniels-running-formula-4ed': "Daniels' Running Formula, 4ª ed.",
  'wilkins-cycling-physiology-2021': 'Cycling Physiology & Training Science (Wilkins & Bell, 2021)',
  'allen-power-meter-3ed': 'Training and Racing with a Power Meter, 3ª ed. (2019)',
  'bangsbo-running-science': 'Running & Science — Interdisciplinary (Bangsbo & Larsen)',
  'acsm-exercise-testing-prescription-10ed': 'ACSM Guidelines for Exercise Testing and Prescription, 10ª ed. (2018)',
} as const;

export type CardioSourceId = keyof typeof CARDIO_SOURCES;

/** Cita con todas las garantías (falla en build si el sourceId no existe). */
export function cite(
  sourceId: CardioSourceId,
  locator: string,
  statement: string,
  confidence: Confidence = 'explicit'
): Citation {
  return { sourceId, locator, statement, confidence, sourceTitle: CARDIO_SOURCES[sourceId] };
}
