/**
 * notionClient.ts — Cliente REST mínimo para la API de Notion.
 * REGLAS:
 * - NOTION_TOKEN viene de .env (NUNCA hardcodeado ni commiteado)
 * - Sin dependencias externas (fetch nativo)
 * - Rate limit: 3 req/s (Notion API limit) con backoff automático
 */

const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';

export interface NotionClientConfig {
  token: string;
  version?: string;
}

export interface NotionPage {
  id: string;
  url: string;
  created_time: string;
  last_edited_time: string;
  properties: Record<string, any>;
}

export interface NotionQueryResult {
  results: NotionPage[];
  has_more: boolean;
  next_cursor?: string;
}

export class NotionClient {
  private token: string;
  private version: string;

  constructor(config: NotionClientConfig) {
    this.token = config.token;
    this.version = config.version ?? NOTION_VERSION;
  }

  private async request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const url = `${NOTION_API}${path}`;
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.token}`,
      'Notion-Version': this.version,
      'Content-Type': 'application/json',
    };

    const res = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (res.status === 429) {
      // Rate limit — retry after Retry-After header
      const retryAfter = Number(res.headers.get('Retry-After') ?? 1) * 1000;
      await new Promise(resolve => setTimeout(resolve, retryAfter));
      return this.request<T>(method, path, body);
    }

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(`Notion API ${res.status}: ${JSON.stringify(err)}`);
    }

    return res.json() as Promise<T>;
  }

  /** Consulta una base de datos con filtros opcionales. */
  queryDatabase(databaseId: string, filter?: unknown, cursor?: string): Promise<NotionQueryResult> {
    return this.request('POST', `/databases/${databaseId}/query`, {
      ...(filter ? { filter } : {}),
      ...(cursor ? { start_cursor: cursor } : {}),
      page_size: 100,
    });
  }

  /** Crea una página en una base de datos. */
  createPage(databaseId: string, properties: Record<string, any>): Promise<NotionPage> {
    return this.request('POST', '/pages', {
      parent: { database_id: databaseId },
      properties,
    });
  }

  /** Actualiza las propiedades de una página existente. */
  updatePage(pageId: string, properties: Record<string, any>): Promise<NotionPage> {
    return this.request('PATCH', `/pages/${pageId}`, { properties });
  }

  /** Obtiene una página por ID. */
  getPage(pageId: string): Promise<NotionPage> {
    return this.request('GET', `/pages/${pageId}`);
  }
}

/** Factory: crea un cliente desde env vars. Retorna null si no hay token. */
export function createNotionClient(): NotionClient | null {
  const token = typeof import.meta !== 'undefined'
    ? (import.meta as any).env?.NOTION_TOKEN
    : process.env?.NOTION_TOKEN;
  if (!token) return null;
  return new NotionClient({ token });
}
