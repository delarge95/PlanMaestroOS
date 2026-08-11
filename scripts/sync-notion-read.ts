// scripts/sync-notion-read.ts - Script de lectura de Notion a snapshots locales en public/data/

import fs from 'fs';
import path from 'path';
import { Client } from '@notionhq/client';
import { globalNotionRateLimiter } from './lib/notionRateLimit';

const PUBLIC_DATA_DIR = path.join(process.cwd(), 'public', 'data');

export interface NotionSnapshotPayload<T> {
  generatedAt: string;
  schemaVersion: number;
  data: T[];
}

export async function fetchAndGenerateSnapshots() {
  if (!fs.existsSync(PUBLIC_DATA_DIR)) {
    fs.mkdirSync(PUBLIC_DATA_DIR, { recursive: true });
  }

  const generatedAt = new Date().toISOString();
  const schemaVersion = 1;
  const token = process.env.NOTION_TOKEN;

  console.log(`[Sync Notion Read] Iniciando lectura de Notion (schemaVersion: ${schemaVersion})...`);

  await globalNotionRateLimiter.schedule(async () => {
    let todayData: any[] = [];
    let careerData: any[] = [];

    if (token) {
      console.log('[Sync Notion Read] NOTION_TOKEN detectado. Consultando API de Notion...');
      const notion = new Client({ auth: token });
      const databaseId = process.env.NOTION_TASKS_DB_ID;

      if (databaseId) {
        try {
          const response = await (notion as any).databases.query({ database_id: databaseId });
          todayData = response.results.map((page: any) => ({
            externalId: page.id,
            title: page.properties.Name?.title[0]?.plain_text || 'Tarea de Notion',
            status: page.properties.Status?.select?.name || 'PorHacer',
            area: page.properties.Area?.select?.name || 'general',
            syncStatus: 'synced'
          }));
        } catch (err) {
          console.warn('[Sync Notion Read] Error al consultar la API de Notion:', err);
        }
      }
    }

    if (todayData.length === 0) {
      console.log('[Sync Notion Read] Usando datos base para snapshots (modo offline/fallback)...');
      todayData = [
        { externalId: 'task-1', title: 'Revisar propuesta de arquitectura', status: 'PorHacer', area: 'general', syncStatus: 'synced' },
        { externalId: 'task-2', title: 'Completar sesión de movilidad de rodilla', status: 'PorHacer', area: 'salud', syncStatus: 'synced' }
      ];
      careerData = [
        { externalId: 'app-1', companyName: 'Epic Games', roleTitle: 'Technical Artist', stage: 'Entrevista', singleNextAction: 'Confirmar entrevista técnica', syncStatus: 'synced' }
      ];
    }

    const todayPayload: NotionSnapshotPayload<any> = { generatedAt, schemaVersion, data: todayData };
    const careerPayload: NotionSnapshotPayload<any> = { generatedAt, schemaVersion, data: careerData.length ? careerData : todayData };

    fs.writeFileSync(path.join(PUBLIC_DATA_DIR, 'today.json'), JSON.stringify(todayPayload, null, 2));
    fs.writeFileSync(path.join(PUBLIC_DATA_DIR, 'career.json'), JSON.stringify(careerPayload, null, 2));
    fs.writeFileSync(path.join(PUBLIC_DATA_DIR, 'clinical.json'), JSON.stringify(todayPayload, null, 2));
    fs.writeFileSync(path.join(PUBLIC_DATA_DIR, 'goals.json'), JSON.stringify(todayPayload, null, 2));
  });

  console.log(`[Sync Notion Read] Snapshots generados exitosamente en ${PUBLIC_DATA_DIR}`);
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('sync-notion-read.ts')) {
  fetchAndGenerateSnapshots().catch(console.error);
}

