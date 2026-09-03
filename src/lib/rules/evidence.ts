// evidence — resolución de conflictos entre fuentes (Gemini-06 §2.1, adoptado).
// Si dos libros discrepan: gana el tier mayor; si empatan, la especialidad.
// Destino: src/lib/rules/evidence.ts

export type EvidenceTier = 'meta-analysis' | 'rct' | 'observational' | 'expert-book' | 'internal-doc';

const TIER_RANK: Record<EvidenceTier, number> = {
  'meta-analysis': 4,
  rct: 3,
  observational: 2,
  'expert-book': 1,
  'internal-doc': 0,
};

export type Specialty = 'calisthenics' | 'hypertrophy' | 'tendon' | 'squat-biomech' | 'general';

/** Matriz de especialidad por población (empate de tier). */
const SPECIALTY_WINNER: Record<Exclude<Specialty, 'general'>, string> = {
  calisthenics: 'low-overcoming-gravity-2ed',
  hypertrophy: 'nippard-fundamentals-hypertrophy',
  tendon: 'low-overcoming-tendonitis-2019',
  'squat-biomech': 'horschig-rebuilding-milo',
};

export interface EvidenceClaim {
  docId: string;
  tier: EvidenceTier;
}

/** Devuelve el docId ganador o 'tie' si no hay forma honesta de decidir. */
export function resolveConflict(
  specialty: Specialty,
  a: EvidenceClaim,
  b: EvidenceClaim,
): string {
  if (TIER_RANK[a.tier] !== TIER_RANK[b.tier]) {
    return TIER_RANK[a.tier] > TIER_RANK[b.tier] ? a.docId : b.docId;
  }
  if (specialty !== 'general') {
    const winner = SPECIALTY_WINNER[specialty];
    if (a.docId === winner) return a.docId;
    if (b.docId === winner) return b.docId;
  }
  return 'tie';
}
