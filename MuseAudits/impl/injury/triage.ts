// Triaje diferencial — fusión: árbol traumático/gradual (Gemini-05 §3, adoptado)
// como primera pasada + EVA + red-flags + top-3 (Muse-18). Destino:
// src/lib/fitness/injuryDifferential.ts
// PROHIBIDO diagnosticar: salida = hipótesis funcionales + tests + derivación.

export type TissueType = 'tendon' | 'ligament' | 'bursa' | 'nerve' | 'muscle' | 'unknown';

export type Onset = 'traumatic' | 'gradual' | 'post-session';
export type PainQuality = 'dull' | 'sharp' | 'electric' | 'stiff' | 'swollen';

export interface TriageInput {
  zone: string;
  onset: Onset;
  quality: PainQuality;
  /** Escala visual 0..10. */
  eva: number;
  morningStiffness: boolean;
  improvesWithWarmup: boolean;
  instability: boolean;
  swelling: boolean;
  tingling: boolean;
  mechanism?: string;
  /** Signos de alarma: entumecimiento progresivo, pérdida de fuerza, chasquido con
   * impotencia, fiebre, dolor nocturno que no cede. Uno solo bloquea el flujo. */
  redFlags: string[];
}

export type TriageAction = 'rehab_load' | 'relative_rest' | 'nerve_gliding' | 'doctor_now';

export interface TriageCandidate {
  tissue: TissueType;
  structureHint: string;
  level: 'alta' | 'media' | 'baja';
  why: string;
  tests: string[];
  action: TriageAction;
  citation: string;
}

export interface TriageResult {
  blocked: boolean;
  blockReason?: string;
  candidates: TriageCandidate[];
  disclaimer: string;
}

export const TRIAGE_DISCLAIMER =
  'Hipótesis funcionales, no diagnóstico médico. Verifica con profesional de la salud + los tests sugeridos antes de entrenar sobre la zona.';

const CITES: Record<TissueType, string> = {
  tendon: 'low-overcoming-tendonitis-2019:ch4 (HSR/isométricos; prohibido estiramiento agresivo)',
  ligament: 'moore-clinically-oriented-anatomy-6ed (esguince agudo/inestabilidad)',
  bursa: 'levangie-norkin-joint-structure-function-6ed (bursitis friccional)',
  nerve: 'enoka-neuromechanics-4ed (neurodinámica, sin tensión sostenida)',
  muscle: 'macintosh-skeletal-muscle-2ed:ch8 (sobrecarga miofascial)',
  unknown: 'criterio de seguridad: derivación (archivo 18 §18.1)',
} as const;

const TESTS: Record<TissueType, string[]> = {
  tendon: ['Dolor 24h post-sesión vs durante (tendón duele después)', 'Palpación de inserción + contracción isométrica 30-45s'],
  ligament: ['Test de inestabilidad específico de la articulación', 'Comparar laxitud lado sano vs afectado'],
  bursa: ['Palpación directa de prominencia ósea', 'Arco doloroso (rango que comprime la bursa)'],
  nerve: ['Mapa de hormigueo por dermatoma', 'Neurodinámica suave sin tensión sostenida'],
  muscle: ['Palpación de vientre muscular vs inserción', 'Contracción resistida en acortamiento'],
  unknown: ['Derivación profesional directa'],
};

/** Primera pasada del árbol (Gemini): puntaje por tejido según patrón. */
function treeScores(i: TriageInput): Record<TissueType, number> {
  const s: Record<TissueType, number> = { tendon: 0, ligament: 0, bursa: 0, nerve: 0, muscle: 0, unknown: 0 };
  if (i.onset === 'traumatic' && i.instability) s.ligament += 3;
  if (i.onset === 'traumatic') s.muscle += 1;
  if (i.tingling || i.quality === 'electric') s.nerve += 3;
  if (i.swelling && !i.instability) s.bursa += 3;
  if (i.swelling) s.bursa += 1;
  if (i.onset === 'gradual' && (i.morningStiffness || i.improvesWithWarmup)) s.tendon += 3;
  if (i.quality === 'dull' && i.onset !== 'traumatic') s.tendon += 1;
  if (i.quality === 'sharp' && i.onset === 'traumatic') s.muscle += 2;
  if (i.quality === 'stiff') { s.muscle += 1; s.tendon += 1; }
  if (i.onset === 'post-session') { s.tendon += 1; s.muscle += 1; }
  return s;
}

function actionFor(t: TissueType, eva: number): TriageAction {
  if (eva >= 7) return t === 'nerve' || t === 'ligament' ? 'doctor_now' : 'relative_rest';
  switch (t) {
    case 'tendon': return 'rehab_load';
    case 'ligament': return eva >= 4 ? 'doctor_now' : 'relative_rest';
    case 'bursa': return 'relative_rest';
    case 'nerve': return 'nerve_gliding';
    case 'muscle': return 'rehab_load';
    default: return 'doctor_now';
  }
}

export function triage(input: TriageInput): TriageResult {
  if (input.redFlags.length > 0) {
    return {
      blocked: true,
      blockReason: `Signo de alarma: ${input.redFlags[0]}. Fin del flujo automático.`,
      candidates: [
        {
          tissue: 'unknown',
          structureHint: input.zone,
          level: 'alta',
          why: 'Red-flag presente: derivación inmediata.',
          tests: TESTS.unknown,
          action: 'doctor_now',
          citation: 'criterio de seguridad (archivo 18 §18.1)',
        },
      ],
      disclaimer: TRIAGE_DISCLAIMER,
    };
  }
  const scores = treeScores(input);
  const order: TissueType[] = ['tendon', 'ligament', 'bursa', 'nerve', 'muscle'];
  const top = order
    .map((t) => ({ t, s: scores[t] + (input.eva >= 4 ? 0.5 : 0) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 3);
  const max = top[0]?.s ?? 0;
  return {
    blocked: false,
    candidates: top.map(({ t, s }, idx) => ({
      tissue: t,
      structureHint: `${t} en ${input.zone}${input.mechanism ? ` (mecanismo: ${input.mechanism})` : ''}`,
      level: idx === 0 && s >= 3 ? 'alta' : s >= 2 ? 'media' : 'baja',
      why: `Patrón ${input.onset}/${input.quality}, EVA ${input.eva}. ${max === 0 ? 'Patrón inespecífico: verificar con profesional.' : ''}`,
      tests: TESTS[t],
      action: actionFor(t, input.eva),
      citation: CITES[t],
    })),
    disclaimer: TRIAGE_DISCLAIMER,
  };
}
