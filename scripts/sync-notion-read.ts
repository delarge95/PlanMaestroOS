// scripts/sync-notion-read.ts - Script de lectura de Notion a snapshots locales en public/data/

import fs from 'fs';
import path from 'path';
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

  console.log(`[Sync Notion Read] Iniciando lectura de Notion (schemaVersion: ${schemaVersion})...`);

  // Simulando llamada rate-limited a Notion API
  await globalNotionRateLimiter.schedule(async () => {
    const todayPayload: NotionSnapshotPayload<any> = {
      generatedAt,
      schemaVersion,
      data: [
        { externalId: 'task-1', title: 'Revisar propuesta de arquitectura', status: 'PorHacer', area: 'general', syncStatus: 'synced' },
        { externalId: 'task-2', title: 'Completar sesión de movilidad de rodilla', status: 'PorHacer', area: 'salud', syncStatus: 'synced' }
      ]
    };

    const careerPayload: NotionSnapshotPayload<any> = {
      generatedAt,
      schemaVersion,
      data: [
        { externalId: 'app-1', companyName: 'Epic Games', roleTitle: 'Technical Artist', stage: 'Entrevista', singleNextAction: 'Confirmar entrevista técnica', syncStatus: 'synced' }
      ]
    };

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
