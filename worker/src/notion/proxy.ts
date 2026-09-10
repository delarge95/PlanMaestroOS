// worker/src/notion/proxy.ts — Endpoints de Notion del worker (§0.5).
//
// La app es static (GitHub Pages): sin runtime servidor propio. El worker es
// el único lugar donde viven el token de Notion y las IDs de las DBs. El
// cliente NUNCA ve secretos: solo habla con estas rutas públicas.

const NOTION_API = 'https://api.notion.com/v1';

export interface NotionEnv {
  NOTION_TOKEN?: string;
  NOTION_TASKS_DB_ID?: string;
  NOTION_CAREER_DB_ID?: string;
  NOTION_SESSIONS_DB_ID?: string;
  NOTION_MEASUREMENTS_DB_ID?: string;
}

function notionHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json',
  };
}

/** Resolver token/vars desde env del worker o process.env (tests/local). */
function resolveEnv(env?: NotionEnv): NotionEnv {
  return {
    NOTION_TOKEN: env?.NOTION_TOKEN || (typeof process !== 'undefined' ? process.env?.NOTION_TOKEN : undefined),
    NOTION_TASKS_DB_ID: env?.NOTION_TASKS_DB_ID || (typeof process !== 'undefined' ? process.env?.NOTION_TASKS_DB_ID : undefined),
    NOTION_CAREER_DB_ID: env?.NOTION_CAREER_DB_ID || (typeof process !== 'undefined' ? process.env?.NOTION_CAREER_DB_ID : undefined),
    NOTION_SESSIONS_DB_ID: env?.NOTION_SESSIONS_DB_ID || (typeof process !== 'undefined' ? process.env?.NOTION_SESSIONS_DB_ID : undefined),
    NOTION_MEASUREMENTS_DB_ID: env?.NOTION_MEASUREMENTS_DB_ID || (typeof process !== 'undefined' ? process.env?.NOTION_MEASUREMENTS_DB_ID : undefined),
  };
}

/**
 * GET /notion/status — estado de la integración SIN exponer secretos.
 * Ping barato a una DB real para distinguir «configurado» de «alcanzable».
 */
export async function handleNotionStatus(env?: NotionEnv): Promise<Response> {
  const e = resolveEnv(env);
  const configured = Boolean(e.NOTION_TOKEN);
  const dbs = {
    tasks: Boolean(e.NOTION_TASKS_DB_ID),
    career: Boolean(e.NOTION_CAREER_DB_ID),
    sessions: Boolean(e.NOTION_SESSIONS_DB_ID),
    measurements: Boolean(e.NOTION_MEASUREMENTS_DB_ID),
  };

  if (!configured) {
    return Response.json({ configured: false, reachable: false, dbs, checkedAtIso: new Date().toISOString() }, { headers: cors() });
  }

  try {
    const probeId = e.NOTION_SESSIONS_DB_ID || e.NOTION_TASKS_DB_ID || '';
    const res = await fetch(`${NOTION_API}/databases/${probeId}`, {
      headers: notionHeaders(e.NOTION_TOKEN!),
      signal: AbortSignal.timeout(8000),
    });
    return Response.json(
      { configured: true, reachable: res.ok, dbs, httpStatus: res.status, checkedAtIso: new Date().toISOString() },
      { headers: cors() },
    );
  } catch (err) {
    return Response.json(
      { configured: true, reachable: false, dbs, error: err instanceof Error ? err.message : String(err), checkedAtIso: new Date().toISOString() },
      { headers: cors() },
    );
  }
}

/** Payload que el cliente envía al guardar una sesión (sin secretos). */
export interface ClientFitnessSession {
  sessionId: string;
  programId: string;
  programTitle: string;
  week: number;
  dayId: string;
  dayTitle: string;
  dateIso: string; // YYYY-MM-DD
  durationMinutes?: number;
  totalVolumeKg?: number;
  sessionRpe?: number;
  notes?: string;
}

/**
 * POST /notion/fitness-session — crea la página en la DB Fitness Sessions.
 * Propiedades según schema.ts (Fecha, Programa, Semana, Dia, SesionId,
 * Completada, RpeSesion, Notas, FuenteCaptura).
 */
export async function handleNotionFitnessSession(body: unknown, env?: NotionEnv): Promise<Response> {
  const e = resolveEnv(env);
  if (!e.NOTION_TOKEN || !e.NOTION_SESSIONS_DB_ID) {
    return Response.json({ ok: false, error: 'NOTION_TOKEN/NOTION_SESSIONS_DB_ID no configurados en el worker' }, { status: 503, headers: cors() });
  }

  const s = body as ClientFitnessSession;
  if (!s || typeof s.sessionId !== 'string' || typeof s.dateIso !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s.dateIso)) {
    return Response.json({ ok: false, error: 'Payload inválido: se esperan sessionId y dateIso (YYYY-MM-DD)' }, { status: 400, headers: cors() });
  }

  const properties: Record<string, unknown> = {
    Titulo: { title: [{ text: { content: `${s.programTitle} · ${s.dayTitle} (S${s.week})`.slice(0, 180) } }] },
    Fecha: { date: { start: s.dateIso } },
    Programa: { rich_text: [{ text: { content: String(s.programTitle ?? '').slice(0, 180) } }] },
    Semana: { number: Number(s.week) || 1 },
    Dia: { rich_text: [{ text: { content: String(s.dayTitle ?? '').slice(0, 180) } }] },
    SesionId: { rich_text: [{ text: { content: String(s.sessionId).slice(0, 180) } }] },
    Completada: { checkbox: true },
    FuenteCaptura: { select: { name: 'AppLocal' } },
  };
  if (typeof s.sessionRpe === 'number' && s.sessionRpe > 0) properties.RpeSesion = { number: s.sessionRpe };
  if (s.notes) properties.Notas = { rich_text: [{ text: { content: String(s.notes).slice(0, 1800) } }] };

  try {
    const res = await fetch(`${NOTION_API}/pages`, {
      method: 'POST',
      headers: notionHeaders(e.NOTION_TOKEN),
      body: JSON.stringify({ parent: { database_id: e.NOTION_SESSIONS_DB_ID }, properties }),
      signal: AbortSignal.timeout(10000),
    });
    const data: any = await res.json();
    if (!res.ok) {
      return Response.json({ ok: false, error: `Notion ${res.status}`, detail: JSON.stringify(data).slice(0, 200) }, { status: 502, headers: cors() });
    }
    return Response.json({ ok: true, pageId: data.id, url: data.url }, { headers: cors() });
  } catch (err) {
    return Response.json({ ok: false, error: err instanceof Error ? err.message : String(err) }, { status: 502, headers: cors() });
  }
}

function cors(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-pm-key, X-PM-Key',
  };
}
