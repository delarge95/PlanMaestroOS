// jobFeed — vacantes vivas con caducidad (Gemini punto ciego B, adoptado).
// Regla: una vacante pierde ~80% de probabilidad si no se aplica en 72h;
// a los 7 días sin postulación pasa a archivada/baja probabilidad.

export type JobFreshness = 'fresh' | 'aging' | 'stale';

export interface JobPosting {
  id: string;
  companyId: string;
  title: string;
  url: string;
  publishedAtIso: string;
  appliedAtIso?: string;
  status: 'nueva' | 'en_proceso' | 'aplicada' | 'archivada';
}

export function hoursSince(iso: string, nowIso: string): number {
  return (Date.parse(nowIso) - Date.parse(iso)) / 3_600_000;
}

/** Clasifica frescura. Aplicadas/archivadas no se reclasifican. */
export function freshness(job: JobPosting, nowIso: string): JobFreshness {
  const h = hoursSince(job.publishedAtIso, nowIso);
  if (h <= 72) return 'fresh';
  if (h <= 24 * 7) return 'aging';
  return 'stale';
}

/**
 * Regla de caducidad: toda 'nueva' con >7 días sin postulación -> 'archivada'
 * con motivo. Pura: devuelve la lista actualizada + ids archivados.
 */
export function applyExpiry(
  jobs: JobPosting[],
  nowIso: string,
): { jobs: JobPosting[]; archivedIds: string[] } {
  const archivedIds: string[] = [];
  const out = jobs.map((j) => {
    if (j.status === 'nueva' && !j.appliedAtIso && freshness(j, nowIso) === 'stale') {
      archivedIds.push(j.id);
      return { ...j, status: 'archivada' as const };
    }
    return j;
  });
  return { jobs: out, archivedIds };
}

/** Orden de ataque diario: fresh primero, luego aging; stale fuera. */
export function attackOrder(jobs: JobPosting[], nowIso: string): JobPosting[] {
  const rank: Record<JobFreshness, number> = { fresh: 0, aging: 1, stale: 2 };
  return [...jobs]
    .filter((j) => j.status === 'nueva' || j.status === 'en_proceso')
    .sort((a, b) => rank[freshness(a, nowIso)] - rank[freshness(b, nowIso)]);
}
