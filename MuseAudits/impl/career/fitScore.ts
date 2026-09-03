// fitScore — espejo de archivo 19 §19.2 (destino: src/lib/career/fitScore.ts).
// Puro y testeado. El desglose SIEMPRE acompaña al número (anti-caja-negra).

export interface CandidateProfile {
  stack: string[];
  seniority: 'junior' | 'mid' | 'senior';
  remoteOk: boolean;
  timezone: string; // e.g. 'UTC-5'
  languages: Array<'es' | 'en' | 'de' | 'pt'>;
}

export interface CompanyLite {
  id: string;
  stack: string[];
  seniority: 'junior' | 'mid' | 'senior';
  remotePolicy: 'remote' | 'hybrid' | 'onsite';
  workingLanguage: 'es' | 'en' | 'de';
  recentSignal: boolean; // vacante nueva, respuesta, referido (<14 días)
}

export interface FitReason {
  factor: 'stack' | 'seniority' | 'remote' | 'language' | 'signal';
  points: number;
  max: number;
  cite: string;
}

export interface FitScore {
  score: number; // 0..10
  reasons: FitReason[];
}

const SENIORITY_RANK = { junior: 0, mid: 1, senior: 2 } as const;

/** Overlap normalizado 0..1 entre stacks (case-insensitive, por token). */
export function stackOverlap(a: string[], b: string[]): number {
  const norm = (s: string) => s.trim().toLowerCase();
  const setA = new Set(a.map(norm));
  const setB = new Set(b.map(norm));
  if (setA.size === 0 || setB.size === 0) return 0;
  let hit = 0;
  for (const t of setB) if (setA.has(t)) hit++;
  return hit / setB.size;
}

export function fitScore(profile: CandidateProfile, company: CompanyLite): FitScore {
  const reasons: FitReason[] = [];

  const overlap = stackOverlap(profile.stack, company.stack);
  const stackPts = Math.round(overlap * 4 * 10) / 10;
  reasons.push({ factor: 'stack', points: stackPts, max: 4, cite: `overlap ${(overlap * 100).toFixed(0)}%` });

  const gap = Math.abs(SENIORITY_RANK[profile.seniority] - SENIORITY_RANK[company.seniority]);
  const senPts = gap === 0 ? 2 : gap === 1 ? 1 : 0;
  reasons.push({ factor: 'seniority', points: senPts, max: 2, cite: `${profile.seniority} vs ${company.seniority}` });

  const remotePts = company.remotePolicy === 'remote' ? 2 : company.remotePolicy === 'hybrid' && profile.remoteOk ? 1 : 0;
  reasons.push({ factor: 'remote', points: remotePts, max: 2, cite: company.remotePolicy });

  const langPts = profile.languages.includes(company.workingLanguage) ? 1 : 0;
  reasons.push({ factor: 'language', points: langPts, max: 1, cite: company.workingLanguage });

  const sigPts = company.recentSignal ? 1 : 0;
  reasons.push({ factor: 'signal', points: sigPts, max: 1, cite: company.recentSignal ? 'señal <14d' : 'sin señal' });

  const score = Math.round(reasons.reduce((s, r) => s + r.points, 0) * 10) / 10;
  return { score, reasons };
}
