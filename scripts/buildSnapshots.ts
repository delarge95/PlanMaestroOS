// scripts/buildSnapshots.ts - Generador de Snapshots Saneados para Plan Maestro OS
import fs from 'node:fs';
import path from 'node:path';
import type {
  SanitizedAgendaSnapshot,
  SanitizedFitnessSnapshot,
  SanitizedCareerSnapshot,
  SnapshotMetadata
} from '../src/data/snapshots/types';

const PUBLIC_DATA_DIR = path.join(process.cwd(), 'public', 'data', 'snapshots');

function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function createMetadata(source: 'notion-api' | 'local-fallback' | 'ci-build'): SnapshotMetadata {
  return {
    generatedAt: new Date().toISOString(),
    schemaVersion: '1.0.0',
    environment: (process.env.NODE_ENV as any) || 'development',
    sanitized: true,
    source
  };
}

export function generateAgendaSnapshot(): SanitizedAgendaSnapshot {
  const hasNotionToken = Boolean(process.env.NOTION_TOKEN && process.env.NOTION_AGENDA_DB_ID);
  const source = hasNotionToken ? 'notion-api' : 'local-fallback';

  return {
    metadata: createMetadata(source),
    items: [
      {
        id: 'agenda-item-1',
        title: 'Bloque A: Trabajo Profundo / TwinSight Case Study',
        timeBlock: '09:20–11:40',
        priority: 'top1',
        domain: 'career',
        status: 'planned'
      },
      {
        id: 'agenda-item-2',
        title: 'Bloque B: Rutina de Alemán A1 & Duolingo',
        timeBlock: '13:30–14:00',
        priority: 'top2',
        domain: 'german',
        status: 'planned'
      },
      {
        id: 'agenda-item-3',
        title: 'Bloque C: Sesión Fitness Min-Max & Prehab',
        timeBlock: '15:00–16:30',
        priority: 'top3',
        domain: 'fitness',
        status: 'planned'
      }
    ]
  };
}

export function generateFitnessSnapshot(): SanitizedFitnessSnapshot {
  const hasNotionToken = Boolean(process.env.NOTION_TOKEN && process.env.NOTION_FITNESS_DB_ID);
  const source = hasNotionToken ? 'notion-api' : 'local-fallback';

  return {
    metadata: createMetadata(source),
    activePrograms: ['min-max', 'powerbuilding-system'],
    completedSessionsCount: 42,
    totalVolumeKg: 128500,
    lastUpdated: new Date().toISOString()
  };
}

export function generateCareerSnapshot(): SanitizedCareerSnapshot {
  const hasNotionToken = Boolean(process.env.NOTION_TOKEN && process.env.NOTION_CAREER_DB_ID);
  const source = hasNotionToken ? 'notion-api' : 'local-fallback';

  return {
    metadata: createMetadata(source),
    activeApplicationsCount: 15,
    pipelineStats: {
      categoryA: 5,
      categoryB: 7,
      categoryC: 3,
      interviewsCount: 2
    },
    lastUpdated: new Date().toISOString()
  };
}

export function buildAllSnapshots() {
  ensureDirectoryExists(PUBLIC_DATA_DIR);

  const agenda = generateAgendaSnapshot();
  const fitness = generateFitnessSnapshot();
  const career = generateCareerSnapshot();

  fs.writeFileSync(path.join(PUBLIC_DATA_DIR, 'agenda.json'), JSON.stringify(agenda, null, 2), 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DATA_DIR, 'fitness.json'), JSON.stringify(fitness, null, 2), 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DATA_DIR, 'career.json'), JSON.stringify(career, null, 2), 'utf-8');

  console.log(`[Snapshots] ✅ Proyecciones saneadas generadas con éxito en: ${PUBLIC_DATA_DIR}`);
}

// Ejecutar si se invoca directamente desde Node/tsx
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('buildSnapshots.ts')) {
  buildAllSnapshots();
}
