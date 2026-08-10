// src/data/notion/contracts.ts - Encabezados de Sincronización e Interfaces de Gobernanza

export type SyncStatus = 'synced' | 'pending_push' | 'pending_pull' | 'conflict' | 'error';
export type SourceOfTruth = 'notion' | 'github' | 'app_local';

/**
 * Encabezado obligatorio para toda entidad sincronizada entre Plan Maestro OS y Notion.
 * REGLA: Nunca usar el título/nombre como clave de sincronización; usar externalId.
 */
export interface NotionEntityHeader {
  notionPageId?: string;       // ID interno de página en Notion (ej. 32-char UUID)
  externalId: string;         // Clave primaria estable propia de Plan Maestro (UUID o slug)
  schemaVersion: string;       // Versión del esquema (ej. "1.0.0")
  lastSyncedAt?: string;       // Timestamp ISO 8601 del último sync
  syncStatus: SyncStatus;
  sourceOfTruth: SourceOfTruth;
}

/**
 * Ficha de Gobernanza requerida por cada una de las 9 bases de datos de Notion
 */
export interface DatabaseGovernanceConfig {
  databaseKey: string;         // Identificador interno (ej: "areas", "tasks")
  name: string;                // Nombre visible en Notion
  owner: string;               // Propietario responsable (ej: "Alexander Woodcock")
  purpose: string;             // Finalidad estratégica de la base
  mandatoryFields: string[];    // Campos requeridos que no pueden ser nulos
  activeViewFilter: string;    // Filtro para vista operativa activa
  archiveViewFilter: string;   // Filtro para vista de elementos terminados/archivados
  retentionPolicy: string;     // Política de conservación y purga de registros
  definitionOfDone: string;    // Criterio formal de "Hecho" o "Completado"
}

/**
 * Envoltorio que vincula un encabezado de sync con las propiedades de la entidad
 */
export interface SyncedNotionEntity<TProperties> {
  header: NotionEntityHeader;
  properties: TProperties;
}
