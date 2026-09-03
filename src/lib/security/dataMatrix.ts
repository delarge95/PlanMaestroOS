// dataMatrix — matriz de gobernanza Gemini-07 §4 COMO CÓDIGO ejecutable.
// Destino: src/lib/security/dataMatrix.ts (consultado por sync/worker antes de enviar).

export type DataDomain =
  | 'mental-health' | 'pain-injury' | 'sexual-physio' | 'workouts'
  | 'job-applications' | 'projects' | 'languages';

export type Destination = 'local' | 'notion' | 'sheets' | 'worker-ai';

export type Verdict = 'allow' | 'deny' | 'aggregates-only';

const MATRIX: Record<DataDomain, Record<Destination, Verdict>> = {
  'mental-health':  { local: 'allow', notion: 'deny', sheets: 'deny', 'worker-ai': 'deny' },
  'pain-injury':    { local: 'allow', notion: 'deny', sheets: 'deny', 'worker-ai': 'aggregates-only' },
  'sexual-physio':  { local: 'allow', notion: 'deny', sheets: 'deny', 'worker-ai': 'deny' },
  workouts:         { local: 'allow', notion: 'aggregates-only', sheets: 'aggregates-only', 'worker-ai': 'aggregates-only' },
  'job-applications': { local: 'allow', notion: 'allow', sheets: 'allow', 'worker-ai': 'aggregates-only' },
  projects:         { local: 'allow', notion: 'allow', sheets: 'allow', 'worker-ai': 'allow' },
  languages:        { local: 'allow', notion: 'allow', sheets: 'allow', 'worker-ai': 'allow' },
};

export function canSend(domain: DataDomain, dest: Destination): Verdict {
  return MATRIX[domain][dest];
}

/** Puerta única: lanza si el envío está prohibido. */
export function assertCanSend(domain: DataDomain, dest: Destination): void {
  if (canSend(domain, dest) === 'deny') {
    throw new Error(`Envío prohibido: ${domain} -> ${dest} (matriz de gobernanza)`);
  }
}
