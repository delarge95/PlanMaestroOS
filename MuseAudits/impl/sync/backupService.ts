// backupService — respaldo automático tras sesión/postulación (Gemini G2, adoptado).
// Puro y testeado: construye/verifica el snapshot; el guardado (descarga o git)
// lo hace el llamador (componente o script), no este módulo.
// Destino: src/lib/storage/backupService.ts

export const BACKUP_VERSION = 1;

export interface BackupFile {
  version: number;
  createdAtIso: string;
  trigger: 'session-completed' | 'application-submitted' | 'manual' | 'nightly';
  stores: Record<string, unknown>;
  sizes: Record<string, number>;
}

export function buildBackup(
  stores: Record<string, unknown>,
  trigger: BackupFile['trigger'],
  nowIso = new Date().toISOString(),
): BackupFile {
  const sizes: Record<string, number> = {};
  for (const [k, v] of Object.entries(stores)) sizes[k] = JSON.stringify(v ?? null).length;
  return { version: BACKUP_VERSION, createdAtIso: nowIso, trigger, stores, sizes };
}

export function serializeBackup(b: BackupFile): string {
  return JSON.stringify(b);
}

/** Restaura con validación de versión; ignora stores desconocidos si se pide. */
export function restoreBackup(
  raw: string,
  allowedStores?: Set<string>,
): { ok: true; backup: BackupFile } | { ok: false; reason: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { ok: false, reason: 'JSON inválido' };
  }
  const b = parsed as Partial<BackupFile>;
  if (b.version !== BACKUP_VERSION || typeof b.stores !== 'object' || b.stores === null) {
    return { ok: false, reason: `versión incompatible (esperada ${BACKUP_VERSION})` };
  }
  if (allowedStores) {
    const filtered: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(b.stores)) if (allowedStores.has(k)) filtered[k] = v;
    return { ok: true, backup: { ...(b as BackupFile), stores: filtered } };
  }
  return { ok: true, backup: b as BackupFile };
}
