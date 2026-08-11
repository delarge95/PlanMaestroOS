// src/lib/adapters/notionTasks.ts - Adaptador de Tareas entre Notion y Plan Maestro OS

import type { Task } from '../../data/contracts/task';
import type { SyncedEntity } from '../../data/contracts/syncedEntity';

export type SyncedTask = Task & SyncedEntity;

export function adaptNotionPageToTask(page: any): SyncedTask {
  const props = page.properties || {};
  return {
    id: page.id,
    externalId: props.ExternalId?.rich_text?.[0]?.plain_text || page.id,
    notionPageId: page.id,
    title: props.Title?.title?.[0]?.plain_text || 'Tarea sin título',
    status: props.Status?.select?.name === 'Done' ? 'Hecho' : 'PorHacer',
    area: props.Area?.select?.name?.toLowerCase() || 'general',
    singleNextAction: props.SingleNextAction?.rich_text?.[0]?.plain_text || 'Definir primer paso',
    estimatedMinutes: props.EstimatedMinutes?.number || 10,
    priority: props.Priority?.select?.name || 'Media',
    dueDateIso: props.DueDate?.date?.start,
    createdAtIso: page.created_time || new Date().toISOString(),
    updatedAtIso: page.last_edited_time || new Date().toISOString(),
    schemaVersion: 1,
    lastSyncedAt: new Date().toISOString(),
    syncStatus: 'synced'
  };
}
