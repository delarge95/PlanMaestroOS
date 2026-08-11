// src/data/contracts/syncedEntity.ts - Contrato de Entidad Sincronizable con Notion

export type SyncedEntity = {
  externalId: string;        // ID de Plan Maestro, estable
  notionPageId?: string;     // asignado tras crear en Notion
  schemaVersion: number;
  lastSyncedAt?: string;
  syncStatus: 'local' | 'synced' | 'pending' | 'conflict';
};
