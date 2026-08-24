/**
 * parse-tracker.ts — Parser del tracker xlsx real (AG-CAREER, ciclo 1, Tarea 1).
 *
 * Lee `_roadmap_laboral/tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx`
 * (formato OOXML: zip con xl/worksheets/*.xml + sharedStrings.xml, cadenas inline)
 * SIN dependencias externas: lector zip mínimo (zlib.inflateRawSync) + parser XML
 * por regex controlada (el xlsx lo genera una herramienta conocida, no arbitrary XML).
 *
 * Salidas (sobrescribe):
 *   - src/data/career/applicationsSeed.ts  (aplicaciones reales + plan semanal + reglas del tracker)
 *   - src/data/career/companiesSeed.ts     (empresas derivadas de las aplicaciones reales)
 *
 * Uso: npx tsx rag/career/scripts/parse-tracker.ts
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { inflateRawSync } from 'node:zlib';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const XLSX_PATH = resolve(REPO_ROOT, '_roadmap_laboral/tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx');

// ---------------------------------------------------------------------------
// 1. Lector zip mínimo (solo lo que necesita un xlsx)
// ---------------------------------------------------------------------------

interface ZipEntry {
  name: string;
  data: Buffer;
}

function readZip(buf: Buffer): Map<string, Buffer> {
  const files = new Map<string, Buffer>();
  // Localizar End Of Central Directory (buscando hacia atrás la firma 0x06054b50).
  let eocd = -1;
  for (let i = buf.length - 22; i >= 0 && i >= buf.length - 22 - 65536; i -= 1) {
    if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error('EOCD no encontrado (zip inválido)');
  const entryCount = buf.readUInt16LE(eocd + 10);
  let ptr = buf.readUInt32LE(eocd + 16); // offset del central directory

  for (let e = 0; e < entryCount; e += 1) {
    if (buf.readUInt32LE(ptr) !== 0x02014b50) throw new Error(`Central dir inválido en ${ptr}`);
    const method = buf.readUInt16LE(ptr + 10);
    const compSize = buf.readUInt32LE(ptr + 20);
    const nameLen = buf.readUInt16LE(ptr + 28);
    const extraLen = buf.readUInt16LE(ptr + 30);
    const commentLen = buf.readUInt16LE(ptr + 32);
    const localOffset = buf.readUInt32LE(ptr + 42);
    const name = buf.toString('utf8', ptr + 46, ptr + 46 + nameLen);
    ptr += 46 + nameLen + extraLen + commentLen;

    // Local file header: saltar nombre+extra reales del registro local.
    if (buf.readUInt32LE(localOffset) !== 0x04034b50) throw new Error(`Local header inválido para ${name}`);
    const lNameLen = buf.readUInt16LE(localOffset + 26);
    const lExtraLen = buf.readUInt16LE(localOffset + 28);
    const dataStart = localOffset + 30 + lNameLen + lExtraLen;
    const raw = buf.subarray(dataStart, dataStart + compSize);
    files.set(name, method === 0 ? Buffer.from(raw) : inflateRawSync(raw));
  }
  return files;
}

// ---------------------------------------------------------------------------
// 2. Parser de hoja OOXML → grid por referencias de celda
// ---------------------------------------------------------------------------

type CellValue = string | number | null;
type Row = { r: number; cells: Map<string, CellValue> }; // clave = letra(s) de columna

const colLetters = (ref: string): string => (ref.match(/^[A-Z]+/) ?? [''])[0];
const colIndex = (letters: string): number => {
  let n = 0;
  for (const ch of letters) n = n * 26 + (ch.charCodeAt(0) - 64);
  return n; // A=1
};

function decodeXmlEntities(s: string): string {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, '&'); // &amp; al final: los escapados previos ya se consumieron
}

function parseSheet(xml: string, sharedStrings: string[]): Row[] {
  const rows: Row[] = [];
  const rowRe = /<x:row[^>]*\br="(\d+)"[^>]*>([\s\S]*?)<\/x:row>/g;
  let rowMatch: RegExpExecArray | null;
  while ((rowMatch = rowRe.exec(xml)) !== null) {
    const row: Row = { r: Number(rowMatch[1]), cells: new Map() };
    // Nota: la alternativa self-closing va PRIMERO; si no, `<x:c ... />` casaría con
    // la forma pareja y se tragaria el body de la siguiente celda real.
    const cellRe = /<x:c\b([^>]*)\/>|<x:c\b([^>]*)>([\s\S]*?)<\/x:c>/g;
    let cellMatch: RegExpExecArray | null;
    while ((cellMatch = cellRe.exec(rowMatch[2])) !== null) {
      const attrs = cellMatch[1] ?? cellMatch[2] ?? '';
      const body = cellMatch[3] ?? '';
      const ref = attrs.match(/\br="([A-Z]+\d+)"/)?.[1];
      if (!ref) continue;
      const type = attrs.match(/\bt="(\w+)"/)?.[1];
      const valueMatch = body.match(/<x:v>([\s\S]*?)<\/x:v>/);
      const inlineMatch = body.match(/<x:is><x:t[^>]*>([\s\S]*?)<\/x:t><\/x:is>/);
      let value: CellValue = null;
      if (inlineMatch) value = decodeXmlEntities(inlineMatch[1]);
      else if (valueMatch) {
        const raw = decodeXmlEntities(valueMatch[1]);
        if (type === 's') value = sharedStrings[Number(raw)] ?? null;
        else if (type === 'n' || raw.match(/^-?\d+(\.\d+)?$/)) value = Number(raw);
        else value = raw;
      }
      if (value !== null) row.cells.set(colLetters(ref), value);
    }
    rows.push(row);
  }
  return rows;
}

/** Fecha serial Excel (epoch 1899-12-30) → YYYY-MM-DD. */
function excelSerialToIso(serial: number): string {
  const ms = Date.UTC(1899, 11, 30) + Math.round(serial) * 86400000;
  return new Date(ms).toISOString().slice(0, 10);
}

const asText = (v: CellValue): string => (v === null ? '' : String(v).trim());

// ---------------------------------------------------------------------------
// 3. Lectura del workbook: nombre de hoja → grid
// ---------------------------------------------------------------------------

const zip = readZip(readFileSync(XLSX_PATH));
const sharedStrings: string[] = (() => {
  const sst = zip.get('xl/sharedStrings.xml');
  if (!sst) return [];
  const xml = sst.toString('utf8');
  return [...xml.matchAll(/<x:si>([\s\S]*?)<\/x:si>/g)].map((m) =>
    decodeXmlEntities([...m[1].matchAll(/<x:t[^>]*>([\s\S]*?)<\/x:t>/g)].map((t) => t[1]).join(''))
  );
})();

const workbookRels = new Map<string, string>();
{
  const rels = zip.get('xl/_rels/workbook.xml.rels')?.toString('utf8') ?? '';
  for (const tag of rels.matchAll(/<Relationship\b[^>]*\/?>/g)) {
    const attrs = tag[0];
    const id = attrs.match(/\bId="([^"]+)"/)?.[1];
    const target = attrs.match(/\bTarget="([^"]+)"/)?.[1];
    if (id && target) workbookRels.set(id, target);
  }
}

const sheets = new Map<string, Row[]>();
{
  const wb = zip.get('xl/workbook.xml')?.toString('utf8') ?? '';
  for (const tag of wb.matchAll(/<x:sheet\b[^>]*\/?>/g)) {
    const attrs = tag[0];
    const name = attrs.match(/\bname="([^"]+)"/)?.[1];
    const rid = attrs.match(/\br:id="([^"]+)"/)?.[1];
    if (!name || !rid) continue;
    const target = workbookRels.get(rid);
    if (!target) continue;
    const path = target.startsWith('/') ? target.slice(1) : `xl/${target.replace(/^\.\.\//, '')}`;
    const xml = zip.get(path)?.toString('utf8');
    if (xml) sheets.set(name, parseSheet(xml, sharedStrings));
  }
}

const cell = (row: Row | undefined, col: string): CellValue => (row ? row.cells.get(col) ?? null : null);

// ---------------------------------------------------------------------------
// 4. Extracción: Applications (tabla A5:R125), Weekly Plan, Assets, Study, Lists
// ---------------------------------------------------------------------------

const applicationsSheet = sheets.get('Applications') ?? [];
const HEADER_ROW = 5; // ApplicationsTable ref A5:R125
const dataRows = applicationsSheet.filter((row) => row.r > HEADER_ROW && row.cells.has('B'));

interface RawApp {
  dateIso: string;
  company: string;
  role: string;
  layer: string;
  roleFamily: string;
  fit: Record<'roleFit' | 'portfolioMatch' | 'remote' | 'contract' | 'authorization' | 'salary' | 'experience', number>;
  fitScore: number;
  status: string;
  nextActionDateIso: string;
  portfolioAngle: string;
  contactUrl: string;
  notes: string;
}

const FIT_COLS: Array<[keyof RawApp['fit'], string]> = [
  ['roleFit', 'F'],
  ['portfolioMatch', 'G'],
  ['remote', 'H'],
  ['contract', 'I'],
  ['authorization', 'J'],
  ['salary', 'K'],
  ['experience', 'L'],
];

const rawApps: RawApp[] = [];
for (const row of dataRows) {
  const company = asText(cell(row, 'B'));
  if (!company) continue;
  const fit = Object.fromEntries(
    FIT_COLS.map(([k, col]) => [k, Number(cell(row, col) ?? 0)])
  ) as RawApp['fit'];
  const dateSerial = Number(cell(row, 'A') ?? 0);
  const nextSerial = Number(cell(row, 'O') ?? 0);
  rawApps.push({
    dateIso: dateSerial > 0 ? excelSerialToIso(dateSerial) : '',
    company,
    role: asText(cell(row, 'C')),
    layer: asText(cell(row, 'D')),
    roleFamily: asText(cell(row, 'E')),
    fit,
    fitScore: Number(cell(row, 'M') ?? Object.values(fit).reduce((a, b) => a + b, 0)),
    status: asText(cell(row, 'N')),
    nextActionDateIso: nextSerial > 0 ? excelSerialToIso(nextSerial) : '',
    portfolioAngle: asText(cell(row, 'P')),
    contactUrl: asText(cell(row, 'Q')),
    notes: asText(cell(row, 'R')),
  });
}

// Regla de scoring del propio tracker (fila 2 de Applications, celda A2).
const fitScoreRuleRaw = asText(cell(applicationsSheet.find((r) => r.r === 2), 'A'));

// Weekly Plan (tabla A5:M21) — la usa el tablero semanal (doc-34 / Tarea 6).
const weeklySheet = sheets.get('Weekly Plan') ?? [];
const weeklyPlan = weeklySheet
  .filter((row) => row.r > 5 && row.cells.has('A'))
  .map((row) => {
    const startSerial = Number(cell(row, 'B') ?? 0);
    return {
      week: Number(cell(row, 'A') ?? 0),
      startIso: startSerial > 0 ? excelSerialToIso(startSerial) : '',
      phase: asText(cell(row, 'C')),
      primaryGoal: asText(cell(row, 'D')),
      mon: asText(cell(row, 'E')),
      tue: asText(cell(row, 'F')),
      wed: asText(cell(row, 'G')),
      thu: asText(cell(row, 'H')),
      fri: asText(cell(row, 'I')),
      status: asText(cell(row, 'J')) || 'Not Started',
      completionPct: Math.round(Number(cell(row, 'K') ?? 0) * 100),
      blocker: asText(cell(row, 'L')),
      nextAction: asText(cell(row, 'M')),
    };
  })
  .filter((w) => w.week > 0);

// Lists (hoja 7) — reglas canónicas (columna H, desde fila 6) + vocabularios.
const listsSheet = sheets.get('Lists') ?? [];
const canonicalRules: string[] = [];
for (const row of listsSheet) {
  if (row.r >= 6) {
    const rule = asText(cell(row, 'H'));
    if (rule) canonicalRules.push(rule);
  }
}
const appStatuses: string[] = [];
for (const row of listsSheet) {
  if (row.r >= 6) {
    const v = asText(cell(row, 'B'));
    if (v) appStatuses.push(v);
  }
}

// ---------------------------------------------------------------------------
// 5. Derivación: singleNextAction (regla de contrato: exactamente una)
// ---------------------------------------------------------------------------

function deriveSingleNextAction(app: RawApp): string {
  // El tracker no trae texto de "próxima acción" por fila: se deriva de forma
  // determinista y trazable de las notas/ángulo de portafolio. Nunca vacío.
  if (app.notes) return app.notes;
  if (app.portfolioAngle) return `Preparar ángulo de portafolio: ${app.portfolioAngle}`;
  return 'Definir próxima acción (regla: una única acción por aplicación)';
}

// Mapeo TrackerStatus → PipelineStage de la app (kanban de 7 columnas).
const STATUS_TO_STAGE: Record<string, string> = {
  Saved: 'Frío',
  Watchlist: 'Frío',
  Contacted: 'Tibio',
  Offer: 'Caliente',
  Applied: 'Aplicado',
  Interview: 'Entrevista',
  Test: 'Entrevista',
  Rejected: 'Cerrado',
  'No Fit': 'Cerrado',
  Paused: 'Frío', // se conserva columna fría; el badge "Paused" marca el estado real
};

function tsLiteral(s: string): string {
  return `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

// ---------------------------------------------------------------------------
// 6. Emisión de applicationsSeed.ts
// ---------------------------------------------------------------------------

const appsTs = rawApps
  .map((app, i) => {
    const stage = STATUS_TO_STAGE[app.status] ?? 'Frío';
    return `  {
    id: 'trk-${i + 1}',
    companyName: ${JSON.stringify(app.company)},
    roleTitle: ${JSON.stringify(app.role)},
    stage: ${tsLiteral(stage)},
    trackerStatus: ${tsLiteral(app.status)},
    singleNextAction: ${JSON.stringify(deriveSingleNextAction(app))},
    followUpDateIso: ${JSON.stringify(app.nextActionDateIso)},
    updatedAtIso: ${JSON.stringify(app.dateIso)},
    layer: ${tsLiteral(app.layer)},
    roleFamily: ${JSON.stringify(app.roleFamily)},
    fitScore: ${app.fitScore},
    fitBreakdown: { roleFit: ${app.fit.roleFit}, portfolioMatch: ${app.fit.portfolioMatch}, remote: ${app.fit.remote}, contract: ${app.fit.contract}, authorization: ${app.fit.authorization}, salary: ${app.fit.salary}, experience: ${app.fit.experience} },
    portfolioAngle: ${JSON.stringify(app.portfolioAngle)},
    contactUrl: ${JSON.stringify(app.contactUrl)},
    notes: ${JSON.stringify(app.notes)},
    source: 'tracker-xlsx'
  }`;
  })
  .join(',\n');

const weeklyTs = weeklyPlan
  .map(
    (w) => `  {
    week: ${w.week},
    startIso: ${JSON.stringify(w.startIso)},
    phase: ${JSON.stringify(w.phase)},
    primaryGoal: ${JSON.stringify(w.primaryGoal)},
    mon: ${JSON.stringify(w.mon)},
    tue: ${JSON.stringify(w.tue)},
    wed: ${JSON.stringify(w.wed)},
    thu: ${JSON.stringify(w.thu)},
    fri: ${JSON.stringify(w.fri)},
    status: ${JSON.stringify(w.status)},
    completionPct: ${w.completionPct},
    blocker: ${JSON.stringify(w.blocker)},
    nextAction: ${JSON.stringify(w.nextAction)}
  }`
  )
  .join(',\n');

const rulesTs = canonicalRules.map((r) => `  ${JSON.stringify(r)}`).join(',\n');
const statusesTs = appStatuses.map((s) => `  ${JSON.stringify(s)}`).join(',\n');

const seedHeader = `// AUTO-GENERADO por rag/career/scripts/parse-tracker.ts — NO editar a mano.
// Fuente: _roadmap_laboral/tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx (hojas Applications / Weekly Plan / Lists).
// Regla de importación: cada campo proviene 1:1 del tracker; singleNextAction se deriva de notes/portfolioAngle cuando la fila no trae texto.
`;

const applicationsSeedTs = `${seedHeader}
import type { JobApplication, PipelineStage, TrackerStatus, TargetLayer, FitBreakdown, WeeklyPlanWeek } from './applications';

/** Aplicaciones REALES del tracker (sustituye a los mocks Epic/Ubisoft/Riot). */
export const applicationsSeed: JobApplication[] = [
${appsTs}
];

/** Plan de 16 semanas del tracker (hoja "Weekly Plan") — alimenta el tablero semanal doc-34. */
export const trackerWeeklyPlan: WeeklyPlanWeek[] = [
${weeklyTs}
];

/** Regla de decisión de Fit Score tal cual la declara el tracker (fila 2 de Applications). */
export const fitScoreRule: string = ${JSON.stringify(fitScoreRuleRaw)};

/** Reglas canónicas del tracker (hoja "Lists", columna Canonical Rules). */
export const trackerCanonicalRules: string[] = [
${rulesTs}
];

/** Vocabulario de estados de aplicación del tracker (hoja "Lists", columna App Statuses). */
export const trackerAppStatuses: TrackerStatus[] = [
${statusesTs}
];

/** Fecha de importación (ISO) del último parseo. */
export const trackerImportedAt: string = ${JSON.stringify(new Date().toISOString())};
`;

writeFileSync(resolve(REPO_ROOT, 'src/data/career/applicationsSeed.ts'), applicationsSeedTs, 'utf8');

// ---------------------------------------------------------------------------
// 7. Emisión de companiesSeed.ts (una empresa por compañía única del tracker)
// ---------------------------------------------------------------------------

const seen = new Set<string>();
const companies = rawApps.filter((a) => {
  const key = a.company.toLowerCase();
  if (seen.has(key) || !key) return false;
  seen.add(key);
  return true;
});

const companiesTs = companies
  .map((app, i) => {
    const importNote = `Importada del tracker (estado: ${app.status}${app.notes ? ' — ' + app.notes : ''})`;
    return `  {
    id: 'trk-comp-${i + 1}',
    name: ${JSON.stringify(app.company)},
    website: '',
    tier: 'Watchlist',
    archived: false,
    source: 'tracker-xlsx',
    timeline: [
      { id: 'trk-comp-${i + 1}-e1', dateIso: ${JSON.stringify(app.dateIso)}, type: 'message', note: ${JSON.stringify(importNote)} }
    ]
  }`;
  })
  .join(',\n');

const companiesSeedTs = `${seedHeader}
import type { CompanyRecord } from './companies';

/** Empresas REALES derivadas de las aplicaciones del tracker ( timelines arrancan con el evento de importación ). */
export const companiesSeed: CompanyRecord[] = [
${companiesTs}
];
`;

writeFileSync(resolve(REPO_ROOT, 'src/data/career/companiesSeed.ts'), companiesSeedTs, 'utf8');

// ---------------------------------------------------------------------------
// 8. Resumen
// ---------------------------------------------------------------------------

console.log(`Applications parseadas: ${rawApps.length}`);
for (const a of rawApps) {
  console.log(`  - ${a.company} · ${a.role} · ${a.status} (fit ${a.fitScore}) · next ${a.nextActionDateIso}`);
}
console.log(`Weekly Plan semanas: ${weeklyPlan.length} (estado inicial: ${weeklyPlan[0]?.status})`);
console.log(`Reglas canónicas: ${canonicalRules.length}`);
console.log(`Empresas únicas: ${companies.length}`);
console.log('OK → src/data/career/applicationsSeed.ts + companiesSeed.ts');
