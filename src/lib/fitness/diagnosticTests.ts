// src/lib/fitness/diagnosticTests.ts — Pruebas guiadas de diferenciación.
//
// Cada pregunta binaria mueve el score de las hipótesis del triaje (tendón,
// ligamento, bursa, nervio, músculo). Al responder todas, el motor devuelve
// la hipótesis más probable con confianza — nunca un diagnóstico (§0.1).

import type { TriageCandidate, TissueType } from './injuryTriage';

export interface GuidedTest {
  id: string;
  question: string;
  help: string;
  /** Puntos por tejido si la respuesta es SÍ (negativos restan). */
  yes: Partial<Record<TissueType, number>>;
  /** Puntos por tejido si la respuesta es NO. */
  no: Partial<Record<TissueType, number>>;
}

/** Batería por zona anatómica (v1: rodilla, hombro, codo/muñeca, cadera, genérica). */
export const GUIDED_TESTS: Record<string, GuidedTest[]> = {
  knee: [
    {
      id: 'pain-24h',
      question: '¿El dolor es MAYOR 24h después de la sesión que durante la sesión?',
      help: 'El tendón duele sobre todo DESPUÉS; el músculo congestiona durante.',
      yes: { tendon: 2, muscle: -1 }, no: { muscle: 1, tendon: -1 },
    },
    {
      id: 'iso-insertion',
      question: '¿La contracción isométrica de 45s duele en un punto fijo (inserción)?',
      help: 'Dolor puntual en inserción al mantener → tendón; difuso → músculo.',
      yes: { tendon: 2 }, no: { muscle: 1 },
    },
    {
      id: 'laxity',
      question: '¿Sientes que la rodilla "se afloja" o cede al probarla (varo/valgo/drawer)?',
      help: 'Laxitud específica → ligamento.',
      yes: { ligament: 3, tendon: -1 }, no: { ligament: -1 },
    },
    {
      id: 'tingling-path',
      question: '¿El hormigueo/dolor sigue un trayecto que BAJA por la pierna?',
      help: 'Trayecto definido → nervio (neurodinámica).',
      yes: { nerve: 3 }, no: { nerve: -1 },
    },
    {
      id: 'swelling-friction',
      question: '¿Hay inflamación visible que aumenta con fricción/repetición?',
      help: 'Bolsa que se inflama con fricción → bursa.',
      yes: { bursa: 2, tendon: -1 }, no: { bursa: -1 },
    },
  ],
  shoulder: [
    {
      id: 'painful-arc',
      question: '¿Duele elevar el brazo entre 60° y 120° (arco doloroso)?',
      help: 'Arco doloroso → bursa/rotadores con pinzamiento.',
      yes: { bursa: 2, tendon: 1 }, no: { bursa: -1 },
    },
    {
      id: 'night-pain-side',
      question: '¿Duele dormir sobre ese hombro (dolor nocturno localizado)?',
      help: 'Típico de bursitis/tendinopatía de rotadores.',
      yes: { bursa: 1, tendon: 1 }, no: {},
    },
    {
      id: 'tingling-arm',
      question: '¿El hormigueo baja por el brazo más allá del hombro?',
      help: 'Trayecto a distancia → nervio (cervical/braquial).',
      yes: { nerve: 3 }, no: { nerve: -1 },
    },
    {
      id: 'instability-apprehension',
      question: '¿Sientes que el hombro "se sale" o miedo a que salga en cierta posición?',
      help: 'Aprehensión/inestabilidad → ligamento (cápsula).',
      yes: { ligament: 3 }, no: { ligament: -1 },
    },
  ],
  generic: [
    {
      id: 'pain-24h',
      question: '¿El dolor es mayor 24h después que durante la actividad?',
      help: 'Patrón tardío → tendón; inmediato → músculo.',
      yes: { tendon: 2, muscle: -1 }, no: { muscle: 1 },
    },
    {
      id: 'tingling-path',
      question: '¿El hormigueo sigue un trayecto definido desde la zona?',
      help: 'Trayecto → nervio.',
      yes: { nerve: 3 }, no: { nerve: -1 },
    },
    {
      id: 'laxity',
      question: '¿La articulación se siente inestable al probarla?',
      help: 'Laxitud → ligamento.',
      yes: { ligament: 3 }, no: { ligament: -1 },
    },
  ],
};

/** Tests disponibles para una zona (fallback: genérica). */
export function testsForZone(zone: string): GuidedTest[] {
  return GUIDED_TESTS[zone] ?? GUIDED_TESTS.generic;
}

export interface ScoredCandidate extends TriageCandidate {
  score: number;
  confidencePct: number;
}

/**
 * Re-puntúa las hipótesis del triaje con las respuestas (testId → sí/no).
 * Devuelve candidatos ordenados por score con confianza relativa (0–100).
 */
export function scoreCandidates(
  candidates: TriageCandidate[],
  answers: Record<string, boolean>,
): ScoredCandidate[] {
  const battery = testsForZone(
    // La batería se infiere de los tests respondidos (mismo id en varias zonas).
    Object.keys(GUIDED_TESTS).find((z) =>
      Object.keys(answers).every((id) => GUIDED_TESTS[z].some((t) => t.id === id)),
    ) ?? 'generic',
  );

  const scored = candidates.map((c) => {
    let score = 0;
    for (const [testId, ans] of Object.entries(answers)) {
      const test = battery.find((t) => t.id === testId);
      if (!test) continue;
      const delta = (ans ? test.yes : test.no)[c.tissue] ?? 0;
      score += delta;
    }
    return { ...c, score };
  });

  // Normalizar confianza contra el total absoluto de evidencia positiva.
  const total = scored.reduce((n, c) => n + Math.max(0, c.score), 0) || 1;
  return scored
    .map((c) => ({ ...c, confidencePct: Math.round((Math.max(0, c.score) / total) * 100) }))
    .sort((a, b) => b.score - a.score);
}
