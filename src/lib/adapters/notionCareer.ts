// src/lib/adapters/notionCareer.ts - Adaptador de Carrera & Aplicaciones entre Notion y Plan Maestro OS

import type { JobApplication } from '../../data/career/applications';
import type { SyncedEntity } from '../../data/contracts/syncedEntity';

export type SyncedCareerApplication = JobApplication & SyncedEntity;

export function adaptNotionPageToApplication(page: any): SyncedCareerApplication {
  const props = page.properties || {};
  return {
    id: page.id,
    externalId: props.ExternalId?.rich_text?.[0]?.plain_text || page.id,
    notionPageId: page.id,
    companyName: props.CompanyName?.title?.[0]?.plain_text || 'Empresa',
    roleTitle: props.RoleTitle?.rich_text?.[0]?.plain_text || 'Rol',
    stage: props.Stage?.select?.name || 'Frío',
    singleNextAction: props.SingleNextAction?.rich_text?.[0]?.plain_text || 'Definir contacto',
    followUpDateIso: props.FollowUpDate?.date?.start || new Date().toISOString().split('T')[0],
    updatedAtIso: new Date().toISOString().split('T')[0],
    schemaVersion: 1,
    lastSyncedAt: new Date().toISOString(),
    syncStatus: 'synced'
  };
}
