/**
 * parse-doc11.ts — Normalización del doc 11 (targets/boards/recruiters) a
 * CompanyRecord con tier y fuente citada (AG-CAREER, ciclo 1, Tarea 2).
 *
 * Lee `11_company_targets_job_boards_recruiters.md` (tablas markdown regulares)
 * y genera `src/data/career/companyTargets.ts` con:
 *   - companyTargets: 120 empresas (identity + feasibility + scoring + cola A1/A2)
 *   - jobBoards, recruiterChannels, communities, searchStrings, disqualifiers
 *
 * Cada dato lleva su fuente "doc-11 §<sección>" (trazabilidad §0.1 del plan).
 *
 * Uso: npx tsx rag/career/scripts/parse-doc11.ts
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const DOC_PATH = resolve(REPO_ROOT, '11_company_targets_job_boards_recruiters.md');
const OUT_PATH = resolve(REPO_ROOT, 'src', 'data', 'career', 'companyTargets.ts');

const md = readFileSync(DOC_PATH, 'utf8');

/** Extrae la primera tabla markdown bajo un heading dado (para en el siguiente heading de cualquier nivel). */
function tableUnder(headingRe: RegExp): string[][] {
  const lines = md.split(/\r?\n/);
  const start = lines.findIndex((l) => headingRe.test(l));
  if (start === -1) throw new Error(`Heading no encontrado: ${headingRe}`);
  const rows: string[][] = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^#{1,6}\s/.test(line) && i > start + 1) break; // siguiente heading (cualquier nivel)
    if (!line.trim().startsWith('|')) continue;
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.every((c) => /^[-: ]*$/.test(c))) continue; // separador
    rows.push(cells);
  }
  return rows;
}

const identity = tableUnder(/^## Company identity table/).slice(1); // # | Company | Region | Category | Website
const feasibility = tableUnder(/^## Hiring feasibility table/).slice(1); // # | roles | remote | contractor | language | salary | auth
const scoring = tableUnder(/^## Scoring table/).slice(1); // # | Fit | Prob | Comp | Portfolio | Priority
const a1Queue = tableUnder(/^### A1 - verify first/).slice(1); // # | Company | Why first | Verification focus
const a2Queue = tableUnder(/^### A2 - high fit, higher friction/).slice(1); // # | Company | upside | friction
const boards = tableUnder(/^## Job boards/).slice(1);
const recruiters = tableUnder(/^## Recruiters, agencies, and contractor platforms/).slice(1);
const communities = tableUnder(/^## Communities/).slice(1);

const disqualifiers = (() => {
  const section = md.split('## Application disqualifiers')[1]?.split('##')[0] ?? '';
  return section
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith('- '))
    .map((l) => l.slice(2).trim());
})();

const searchStrings = (() => {
  const section = md.split('## Search strings to reuse')[1]?.split('##')[0] ?? '';
  const block = section.match(/```text\s*\r?\n([\s\S]*?)```/)?.[1] ?? '';
  return block.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
})();

const tierFor = (priority: string): 'Top Priority' | 'Standard' | 'Watchlist' =>
  priority === 'A' ? 'Top Priority' : priority === 'B' ? 'Standard' : 'Watchlist';

const q = (s: string): string => JSON.stringify(s);

// ——— Empresas: merge por número de fila ———
interface MergedCompany {
  n: number;
  name: string;
  region: string;
  category: string;
  website: string;
  roles: string;
  remote: string;
  contractor: string;
  language: string;
  salaryTier: string;
  authNote: string;
  fit: number;
  prob: number;
  comp: number;
  portfolio: number;
  priority: string;
  wave: 'A1' | 'A2' | null;
  whyFirst: string;
  verificationFocus: string;
  mainUpside: string;
  mainFriction: string;
}

const a1ByN = new Map(a1Queue.map((r) => [Number(r[0]), r]));
const a2ByN = new Map(a2Queue.map((r) => [Number(r[0]), r]));
const feasByN = new Map(feasibility.map((r) => [Number(r[0]), r]));
const scorByN = new Map(scoring.map((r) => [Number(r[0]), r]));

const merged: MergedCompany[] = identity.map((r) => {
  const n = Number(r[0]);
  const f = feasByN.get(n) ?? [];
  const s = scorByN.get(n) ?? [];
  const a1 = a1ByN.get(n);
  const a2 = a2ByN.get(n);
  return {
    n,
    name: r[1],
    region: r[2],
    category: r[3],
    website: r[4],
    roles: f[1] ?? '',
    remote: f[2] ?? '',
    contractor: f[3] ?? '',
    language: f[4] ?? '',
    salaryTier: f[5] ?? '',
    authNote: f[6] ?? '',
    fit: Number(s[1] ?? 0),
    prob: Number(s[2] ?? 0),
    comp: Number(s[3] ?? 0),
    portfolio: Number(s[4] ?? 0),
    priority: s[5] ?? 'Watchlist',
    wave: a1 ? 'A1' : a2 ? 'A2' : null,
    whyFirst: a1?.[2] ?? '',
    verificationFocus: a1?.[3] ?? '',
    mainUpside: a2?.[2] ?? '',
    mainFriction: a2?.[3] ?? ''
  };
});

const companiesTs = merged
  .map(
    (c) => `  {
    id: 'c11-${c.n}',
    doc11Number: ${c.n},
    name: ${q(c.name)},
    region: ${q(c.region)},
    category: ${q(c.category)},
    website: ${q(c.website)},
    tier: ${q(tierFor(c.priority))},
    priority: ${q(c.priority)},
    wave: ${c.wave ? `'${c.wave}'` : 'null'},
    typicalRoles: ${q(c.roles)},
    remoteSignal: ${q(c.remote)},
    contractorSignal: ${q(c.contractor)},
    language: ${q(c.language)},
    salaryTier: ${q(c.salaryTier)},
    authNote: ${q(c.authNote)},
    scores: { fit: ${c.fit}, probability: ${c.prob}, compensation: ${c.comp}, portfolio: ${c.portfolio} },
    whyFirst: ${q(c.whyFirst)},
    verificationFocus: ${q(c.verificationFocus)},
    mainUpside: ${q(c.mainUpside)},
    mainFriction: ${q(c.mainFriction)},
    archived: false,
    timeline: [],
    source: 'doc-11',
    sourceRef: 'doc-11 §Company identity table + §Hiring feasibility table + §Scoring table${c.wave ? ' + §First-wave verification queue' : ''}'
  }`
  )
  .join(',\n');

const boardsTs = boards
  .map(
    (b) => `  {
    name: ${q(b[0])},
    url: ${q(b[1])},
    category: ${q(b[2])},
    searchTerms: ${q(b[3])},
    remote: ${q(b[4])},
    contract: ${q(b[5])},
    region: ${q(b[6])},
    signal: ${q(b[7])},
    noise: ${q(b[8])},
    frequency: ${q(b[9])},
    notes: ${q(b[10])},
    sourceRef: 'doc-11 §Job boards'
  }`
  )
  .join(',\n');

const recruitersTs = recruiters
  .map(
    (r) => `  {
    name: ${q(r[0])},
    url: ${q(r[1])},
    region: ${q(r[2])},
    specialization: ${q(r[3])},
    relevantRoles: ${q(r[4])},
    contractor: ${q(r[5])},
    remote: ${q(r[6])},
    notes: ${q(r[7])},
    sourceRef: 'doc-11 §Recruiters, agencies, and contractor platforms'
  }`
  )
  .join(',\n');

const communitiesTs = communities
  .map(
    (c) => `  {
    name: ${q(c[0])},
    url: ${q(c[1])},
    platform: ${q(c[2])},
    category: ${q(c[3])},
    whyUseful: ${q(c[4])},
    jobs: ${q(c[5])},
    feedback: ${q(c[6])},
    networking: ${q(c[7])},
    sourceRef: 'doc-11 §Communities'
  }`
  )
  .join(',\n');

const out = `// AUTO-GENERADO por rag/career/scripts/parse-doc11.ts — NO editar a mano.
// Fuente: 11_company_targets_job_boards_recruiters.md (doc-11).
// Trazabilidad: cada registro cita su sección de origen ("doc-11 §<sección>").
// Tier derivado del doc-11 §Scoring table: A → Top Priority, B → Standard, C/Watchlist → Watchlist.

import type { CompanyTarget, JobBoard, RecruiterChannel, CommunityChannel } from './companies';

/** ${merged.length} empresas objetivo normalizadas del doc-11. */
export const companyTargets: CompanyTarget[] = [
${companiesTs}
];

/** ${boards.length} job boards priorizados (doc-11 §Job boards). */
export const jobBoards: JobBoard[] = [
${boardsTs}
];

/** ${recruiters.length} recruiters/agencias/plataformas contratistas (doc-11 §Recruiters). */
export const recruiterChannels: RecruiterChannel[] = [
${recruitersTs}
];

/** ${communities.length} comunidades relevantes (doc-11 §Communities). */
export const communityChannels: CommunityChannel[] = [
${communitiesTs}
];

/** Cadenas de búsqueda listas para reutilizar (doc-11 §Search strings to reuse). */
export const searchStrings: string[] = [
${searchStrings.map((s) => `  ${q(s)}`).join(',\n')}
];

/** Descalificadores de aplicación (doc-11 §Application disqualifiers). */
export const applicationDisqualifiers: string[] = [
${disqualifiers.map((s) => `  ${q(s)}`).join(',\n')}
];
`;

writeFileSync(OUT_PATH, out, 'utf8');
console.log(
  `OK → ${OUT_PATH}: ${merged.length} empresas (${a1Queue.length} A1, ${a2Queue.length} A2), ` +
    `${boards.length} boards, ${recruiters.length} recruiters, ${communities.length} comunidades, ` +
    `${searchStrings.length} search strings, ${disqualifiers.length} descalificadores.`
);
