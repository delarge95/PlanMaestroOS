/**
 * notionSyncService.ts — Servicio de sincronización bidireccional app ↔ Notion.
 *
 * Usa los mappers de src/data/notion/mappers.ts para convertir entre el
 * formato Notion API y los contratos internos de Plan Maestro OS.
 * Usa el cliente de notionClient.ts para hacer las llamadas REST.
 *
 * Estrategia (§0.5 — la app funciona sin Notion):
 * - Si NOTION_TOKEN no existe → todas las funciones retornan vacío/null.
 * - La app es 100% funcional offline; Notion es un espejo, no una dependencia.
 * - Sync direction: pull (Notion → app) y push (app → Notion), nunca automático.
 */

import type { NotionClient, NotionPage, NotionQueryResult } from './notionClient';
import { createNotionClient } from './notionClient';

// ─── Env vars (leer de .env / import.meta.env / process.env) ───

function getEnv(key: string): string | undefined {
  if (typeof import.meta !== 'undefined') {
    return (import.meta as any).env?.[key];
  }
  if (typeof process !== 'undefined') {
    return process.env?.[key];
  }
  return undefined;
}

const NOTION_TASKS_DB = getEnv('NOTION_TASKS_DB_ID') ?? '';
const NOTION_CAREER_DB = getEnv('NOTION_CAREER_DB_ID') ?? '';

// ─── Types ───

export interface SyncResult<T> {
  items: T[];
  errors: string[];
  synced: boolean;
}

// ─── Pull: Notion → App ───

export async function pullTasksFromNotion(
  mapPage: (page: NotionPage) => any,
): Promise<SyncResult<any>> {
  const client: NotionClient | null = createNotionClient();
  if (!client || !NOTION_TASKS_DB) {
    return { items: [], errors: ['NOTION_TOKEN o NOTION_TASKS_DB_ID no configurados'], synced: false };
  }
  try {
    const result: NotionQueryResult = await client.queryDatabase(NOTION_TASKS_DB);
    return { items: result.results.map(mapPage), errors: [], synced: true };
  } catch (err) {
    return { items: [], errors: [String(err)], synced: false };
  }
}

export async function pullCareerAppsFromNotion(
  mapPage: (page: NotionPage) => any,
): Promise<SyncResult<any>> {
  const client: NotionClient | null = createNotionClient();
  if (!client || !NOTION_CAREER_DB) {
    return { items: [], errors: ['NOTION_TOKEN o NOTION_CAREER_DB_ID no configurados'], synced: false };
  }
  try {
    const result: NotionQueryResult = await client.queryDatabase(NOTION_CAREER_DB);
    return { items: result.results.map(mapPage), errors: [], synced: true };
  } catch (err) {
    return { items: [], errors: [String(err)], synced: false };
  }
}

// ─── Push: App → Notion ───

export async function pushTaskToNotion(
  client: NotionClient,
  databaseId: string,
  properties: Record<string, any>,
): Promise<NotionPage | null> {
  try {
    return await client.createPage(databaseId, properties);
  } catch {
    return null;
  }
}

export async function updateTaskInNotion(
  client: NotionClient,
  pageId: string,
  properties: Record<string, any>,
): Promise<NotionPage | null> {
  try {
    return await client.updatePage(pageId, properties);
  } catch {
    return null;
  }
}

/** ¿Está Notion configurado? (para UI: mostrar/ocultar botón de sync) */
export function isNotionConfigured(): boolean {
  return Boolean(getEnv('NOTION_TOKEN') && NOTION_TASKS_DB);
}
