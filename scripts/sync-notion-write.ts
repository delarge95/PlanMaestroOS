// scripts/sync-notion-write.ts - Aplicación de cola de escrituras hacia Notion API

import { Client } from '@notionhq/client';
import { globalNotionRateLimiter } from './lib/notionRateLimit';

export interface WriteQueueItem {
  id: string;
  entityType: 'task' | 'application' | 'company' | 'goal';
  externalId: string;
  payload: any;
  queuedAt: string;
}

export async function processWriteQueue(items: WriteQueueItem[]) {
  console.log(`[Sync Notion Write] Procesando ${items.length} escrituras pendientes hacia Notion...`);

  const token = process.env.NOTION_TOKEN;
  const notion = token ? new Client({ auth: token }) : null;

  for (const item of items) {
    await globalNotionRateLimiter.schedule(async () => {
      console.log(`[Sync Notion Write] Aplicando cambio a Notion para ${item.entityType} (${item.externalId})...`);
      if (notion && item.externalId && !item.externalId.startsWith('local-')) {
        try {
          await notion.pages.update({
            page_id: item.externalId,
            properties: item.payload
          });
          console.log(`[Sync Notion Write] Página ${item.externalId} actualizada en Notion API.`);
        } catch (err) {
          console.warn(`[Sync Notion Write] Error al actualizar página ${item.externalId} en Notion:`, err);
        }
      }
    });
  }

  console.log(`[Sync Notion Write] Cola procesada exitosamente.`);
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('sync-notion-write.ts')) {
  processWriteQueue([]).catch(console.error);
}

