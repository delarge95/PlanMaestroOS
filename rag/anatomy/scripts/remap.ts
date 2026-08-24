// rag/anatomy/scripts/remap.ts
// AG-ANATOM ciclo 3 — TAREA 3: pipeline de matching estructura ↔ mesh runtime y
// REMAPEO de ANATOMY_STRUCTURES.modelMeshes con nombres REALES del GLB.
//
// Capas de matching (por estructura y modelo):
//   L1 exacto normalizado  — lowercase, trim, '_'↔' ', sin zero-widths
//   L2 normalizado agresivo — además: paréntesis fuera, lateralidad (.r/.l/_r/_l/
//                            glued 'r'/'l', left/right), palabras de tipo
//                            (muscle/bone/nerve/…), singular/plural, subpartes
//                            ("X head of <estructura>") y prefijos (ramas nerviosas)
//   L3 alias manual        — meshAliases.ts (resuelve primero, sin filtros de tipo)
//   L4 sin contraparte     — la estructura no está en ese GLB → se ELIMINA la
//                            referencia del modelo (ruido) y se documenta.
//
// Uso: npx tsx rag/anatomy/scripts/remap.ts [--only=model1,model2] [--dry]
// Escribe: modelMeshes reales en src/data/fitness/anatomy/{muscles,tendons,nerves,
// joints,bones,ligaments}.ts + rag/anatomy/extracciones/remap-report.md
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { MUSCLES } from '../../../src/data/fitness/anatomy/muscles';
import { TENDONS } from '../../../src/data/fitness/anatomy/tendons';
import { NERVES } from '../../../src/data/fitness/anatomy/nerves';
import { JOINTS } from '../../../src/data/fitness/anatomy/joints';
import { BONES } from '../../../src/data/fitness/anatomy/bones';
import { LIGAMENTS } from '../../../src/data/fitness/anatomy/ligaments';
import { MUSCLE_ALIASES, TENDON_ALIASES, NERVE_ALIASES, BONE_ALIASES, JOINT_BONES } from './meshAliases';

const ROOT = process.cwd();
type Kind = 'muscle' | 'tendon' | 'nerve' | 'joint' | 'bone' | 'ligament';
interface Structure {
  id: string;
  kind: Kind;
  nameEn: string;
  synonyms: string[];
  modelMeshes: Record<string, string[]>;
}

// ── inventario runtime ─────────────────────────────────────────────────────────
const INV = JSON.parse(readFileSync(join(ROOT, 'rag/anatomy/extracciones/mesh-names.json'), 'utf8')) as Record<
  string,
  { names: string[]; containers: Record<string, string[]> }
>;
const MODELS = Object.keys(INV);

// nombres de contenedor de categoría (Bones, Muscles, "Arm - muscles", …): jamá se mapean
const CONTAINER_NAMES = new Set(MODELS.flatMap((m) => Object.keys(INV[m].containers)));

// ── normalización ──────────────────────────────────────────────────────────────
const ZW = /[\u200b-\u200d\u2060\ufeff]/g;
const norm1 = (s: string) => s.toLowerCase().replace(ZW, '').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();

const KIND_WORDS = new Set(['muscle', 'muscles', 'bone', 'bones', 'nerve', 'nerves', 'artery', 'arteries', 'vein', 'veins', 'm', 'n']);
const LATERAL_WORDS = new Set(['r', 'l', 'right', 'left']);

/** variantes de comparación de un nombre: paréntesis, lateralidad, tipo, plural.
 *  mode 'alias' no quita palabras de tipo: los alias son nombres exactos de nodo
 *  y quitar "nerve"/"artery" provocaría colisiones de raíz ("radial"). */
function variants(name: string, stripLaterality: boolean, mode: 'full' | 'alias' = 'full'): string[] {
  const out = new Set<string>();
  const push = (v: string) => {
    const t = v.replace(/\s+/g, ' ').trim();
    if (t) out.add(t);
  };
  const base = norm1(name);
  push(base);
  const work = [base];
  // paréntesis fuera: "Axis (C2)" → "axis"; "Radial nerve (deep branch)" → "radial nerve"
  for (const w of [...work]) {
    const p = w.replace(/\([^)]*\)/g, ' ');
    if (p !== w) { work.push(p); push(p); }
  }
  if (stripLaterality) {
    for (const w of [...work]) {
      const toks = w.split(' ');
      const last = toks[toks.length - 1];
      if (LATERAL_WORDS.has(last)) push(toks.slice(0, -1).join(' '));
      // glued ".r"/".l" tras sanitize: "muscler" → "muscle" (solo si queda palabra válida)
      if (/[rl]$/.test(last) && last.length > 3) {
        const cut = last.slice(0, -1);
        if (!LATERAL_WORDS.has(cut)) push([...toks.slice(0, -1), cut].join(' '));
      }
    }
  }
  // sufijo de unicidad del loader: "…_1" → "… 1" → sin él
  for (const w of [...out]) {
    const noNum = w.replace(/\s+\d+$/, '');
    if (noNum !== w) push(noNum);
  }
  if (mode === 'full') {
    // palabras de tipo al final (hasta 2): "Gluteus maximus muscle" → "Gluteus maximus"
    for (const w of [...out]) {
      let cur = w;
      for (let i = 0; i < 2; i++) {
        const toks = cur.split(' ');
        if (toks.length > 1 && KIND_WORDS.has(toks[toks.length - 1])) {
          cur = toks.slice(0, -1).join(' ');
          push(cur);
        } else break;
      }
    }
  }
  // plural simple: "Temporal bones" → "Temporal bone"; "vertebrae" → "vertebra"
  for (const w of [...out]) {
    if (/s$/.test(w) && w.length > 4) push(w.slice(0, -1));
    if (/ae$/.test(w) && w.length > 5) push(w.slice(0, -2) + 'a');
  }
  return [...out];
}

// ── filtros por tipo (exclusiones de candidato) ────────────────────────────────
const EXCLUDE_MUSCLE = ['tendon', 'tendons', 'sheath', 'sheeth', 'vaginae', 'vaginal', 'retinaculum', 'ligament', 'ligaments', 'bursa', 'bursae', 'nerve', 'nerves', 'artery', 'arteries', 'vein', 'veins', 'fascia', 'fasciae', 'aponeurosis', 'cartilage', 'cartilages', 'cart', 'capsule', 'capsules', 'meniscus', 'labrum', 'annulus', 'nucleus', 'membrane', 'septum', 'tract', 'canal', 'triangle', 'hiatus', 'opening', 'ring', 'apparatus', 'hood', 'band', 'connection', 'connections', 'overlay', 'lymph', 'plexus', 'cord', 'recess', 'network', 'arch', 'divisions', 'division', 'roots', 'root', 'branches', 'branch', 'br', 'vessels', 'vessel', 'skin', 'fat', 'space', 'disc', 'bone', 'bones'];
const EXCLUDE_BONE = ['cart', 'cartilage', 'cartilages', 'annulus', 'nucleus', 'labrum', 'meniscus', 'capsule', 'capsules', 'ligament', 'ligaments', 'tendon', 'tendons', 'nerve', 'nerves', 'artery', 'arteries', 'vein', 'veins', 'fascia', 'fasciae', 'aponeurosis', 'membrane', 'disc', 'retinaculum', 'bursa', 'bursae', 'sheath', 'sheeth'];
const REQUIRE_NERVE = ['nerve', 'nerves', 'plexus', 'plexus', 'root', 'roots', 'rami', 'n'];
const REQUIRE_LIGAMENT = ['ligament', 'ligaments', 'retinaculum'];

function candidateAllowed(kind: Kind, runtimeName: string): boolean {
  const variantList = variantsOf(runtimeName, true);
  const tokensOf = (v: string) => new Set(v.split(' '));
  switch (kind) {
    case 'muscle':
    case 'bone': {
      const words = kind === 'muscle' ? EXCLUDE_MUSCLE : EXCLUDE_BONE;
      return variantList.every((v) => !words.some((w) => tokensOf(v).has(w)));
    }
    case 'nerve':
    case 'ligament': {
      const words = kind === 'nerve' ? REQUIRE_NERVE : REQUIRE_LIGAMENT;
      return variantList.some((v) => words.some((w) => tokensOf(v).has(w)));
    }
    default:
      return true; // tendon: sin filtro (alias dirigen; auto solo por raíz exacta)
  }
}

// ── matching ───────────────────────────────────────────────────────────────────
interface MatchResult { name: string; layer: 'exact' | 'normalized' | 'alias'; }
const variantCache = new Map<string, string[]>();
const variantsOf = (n: string, lateral: boolean, mode: 'full' | 'alias' = 'full') => {
  const k = mode + '|' + (lateral ? 'L|' : '') + n;
  let v = variantCache.get(k);
  if (!v) { v = variants(n, lateral, mode); variantCache.set(k, v); }
  return v;
};

/** resuelve una lista de nombres-consulta (alias) contra un modelo.
 *  SOLO igualdad de variantes: los alias son nombres de nodo exactos y el
 *  prefijo/sufijo introduciría ruido (p.ej. "Radial nerve (…)" arrastrando
 *  "Radial artery"). Sin filtros de tipo: son decisiones manuales. */
function resolveAliasNames(model: string, queries: string[]): MatchResult[] {
  const found: MatchResult[] = [];
  const qv = new Set<string>();
  for (const q of queries) for (const v of variantsOf(q, false, 'alias')) if (v.length > 3) qv.add(v);
  for (const cand of INV[model].names) {
    if (CONTAINER_NAMES.has(cand)) continue;
    const cv = variantsOf(cand, true, 'alias');
    if (cv.some((c) => qv.has(c))) found.push({ name: cand, layer: 'alias' });
  }
  return found;
}

/** matching automático L1/L2 de una estructura contra un modelo.
 *  - igualdad: variantes de nameEn + sinónimos (con kind-strip)
 *  - prefijo/sufijo (subpartes y ramas): SOLO variantes de nameEn sin kind-strip
 *    — los sinónimos cortos ES ("Plantar") arrastran piezas vecinas y el
 *    kind-strip deja raíces ambiguas ("femoral" ↔ "femoral branch of …"). */
function autoMatch(model: string, s: Structure): MatchResult[] {
  const queries = [s.nameEn, ...s.synonyms];
  const qvEq = new Set<string>();
  for (const q of queries) for (const v of variantsOf(q, false)) if (v.length > 3) qvEq.add(v);
  const qvAffix = new Set<string>();
  for (const v of variantsOf(s.nameEn, false, 'alias')) if (v.length > 5) qvAffix.add(v);
  const rawQ = new Set(queries.map(norm1));
  const out: MatchResult[] = [];
  for (const cand of INV[model].names) {
    if (CONTAINER_NAMES.has(cand)) continue;
    if (!candidateAllowed(s.kind, cand)) continue;
    const cv = variantsOf(cand, true);
    let layer: 'exact' | 'normalized' | null = null;
    if (cv.some((c) => rawQ.has(c))) layer = 'exact';
    if (!layer && cv.some((c) => qvEq.has(c))) layer = 'exact';
    if (!layer) {
      const affixOk = s.kind === 'muscle' || s.kind === 'nerve';
      const hit = affixOk && [...qvAffix].some((q) =>
        cv.some((c) => c.startsWith(q + ' ') || c.endsWith(' of ' + q)),
      );
      if (hit) layer = 'normalized';
    }
    if (layer) out.push({ name: cand, layer });
  }
  return out;
}

// ── estructuras + alias por id ────────────────────────────────────────────────
const STRUCTURES: Structure[] = [
  ...MUSCLES.map((m) => ({ id: m.id, kind: 'muscle' as Kind, nameEn: m.nameEn, synonyms: m.synonyms, modelMeshes: m.modelMeshes })),
  ...TENDONS.map((t) => ({ id: t.id, kind: 'tendon' as Kind, nameEn: t.nameEn, synonyms: t.synonyms, modelMeshes: t.modelMeshes })),
  ...NERVES.map((n) => ({ id: n.id, kind: 'nerve' as Kind, nameEn: n.nameEn, synonyms: n.synonyms, modelMeshes: n.modelMeshes })),
  ...JOINTS.map((j) => ({ id: j.id, kind: 'joint' as Kind, nameEn: j.nameEn, synonyms: j.synonyms, modelMeshes: j.modelMeshes })),
  ...BONES.map((b) => ({ id: b.id, kind: 'bone' as Kind, nameEn: b.nameEn, synonyms: b.synonyms, modelMeshes: b.modelMeshes })),
  ...LIGAMENTS.map((l) => ({ id: l.id, kind: 'ligament' as Kind, nameEn: l.nameEn, synonyms: l.synonyms, modelMeshes: l.modelMeshes })),
];
const ALIASES: Record<string, string[]> = {
  ...MUSCLE_ALIASES, ...TENDON_ALIASES, ...NERVE_ALIASES, ...BONE_ALIASES,
};
// sanity: claves de alias que no corresponden a ningún id real del grafo
const knownIds = new Set(STRUCTURES.map((s) => s.id));
const badKeys = [...Object.keys(ALIASES), ...Object.keys(JOINT_BONES)].filter((k) => !knownIds.has(k));
if (badKeys.length) console.warn(`AVISO: claves de alias sin estructura: ${badKeys.join(', ')}`);

// ── ejecución ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const only = args.find((a) => a.startsWith('--only='))?.slice(7).split(',') ?? MODELS;
const dry = args.includes('--dry');
const targets = MODELS.filter((m) => only.includes(m));

// 1) huesos primero: las articulaciones copian el mapping de sus huesos
const boneById = new Map<string, Record<string, string[]>>();
const newMeshes = new Map<string, Record<string, string[]>>();
const report: Record<string, { exact: number; normalized: number; alias: number; dropped: string[]; perStructure: Map<string, { layer: string; names: string[] }> }> = {};
for (const model of targets) report[model] = { exact: 0, normalized: 0, alias: 0, dropped: [], perStructure: new Map() };

function processStructure(s: Structure, model: string): { layer: string; hits: MatchResult[] } {
  // L3 alias manual — AUTORIDAD: si la estructura tiene alias y en este modelo no
  // resuelve ninguno, NO se reintenta con auto (los sinónimos genéricos causan
  // falsos positivos cruzados, p.ej. el abductor del pie sobre el de la mano).
  let hits: MatchResult[] = ALIASES[s.id] ? resolveAliasNames(model, ALIASES[s.id]) : [];
  const viaAlias = Boolean(ALIASES[s.id]) && hits.length > 0;
  if (!ALIASES[s.id]) hits = autoMatch(model, s);
  const layer = viaAlias ? 'alias' : hits.some((h) => h.layer === 'exact') ? 'exact' : 'normalized';
  return { layer, hits };
}

// fase A: matches por estructura/modelo con su fuerza (alias=4 > exact=3 > affix=2)
const STRENGTH: Record<string, number> = { alias: 4, exact: 3, normalized: 2 };
const rawMatches = new Map<string, Map<string, { layer: string; hits: MatchResult[] }>>();
for (const s of STRUCTURES) {
  if (s.kind === 'joint') continue; // después (copian huesos)
  const perModel = new Map<string, { layer: string; hits: MatchResult[] }>();
  for (const model of targets) perModel.set(model, processStructure(s, model));
  rawMatches.set(s.id, perModel);
}
// fase B: "mejor dueño" — un nombre reclamado por varias estructuras queda con la
// de match más fuerte. SOLO los affix ('normalized', prefijo/sufijo) son
// desalojados cuando existe un claimante exacto o alias: el alias es una
// aproximación deliberada (tendón → vientre) y NO roba el nodo exacto de otra
// estructura. Evita p.ej. que "Extensor digitorum" (antebrazo) capture a
// "Extensor digitorum longus/brevis" del pie (estructuras propias, match exacto).
for (const model of targets) {
  const claims = new Map<string, Array<{ id: string; layer: string }>>();
  for (const [id, perModel] of rawMatches) {
    const m = perModel.get(model)!;
    for (const h of m.hits) claims.set(h.name, [...(claims.get(h.name) ?? []), { id, layer: m.layer }]);
  }
  for (const [name, cs] of claims) {
    const hasStronger = cs.some((c) => c.layer === 'exact' || c.layer === 'alias');
    if (!hasStronger) continue;
    for (const c of cs) {
      if (c.layer !== 'normalized') continue;
      const m = rawMatches.get(c.id)!.get(model)!;
      m.hits = m.hits.filter((h) => h.name !== name);
    }
    void name;
  }
}
// fase C: consolidar por estructura y reportar.
// Con --only: MERGE — se conservan las claves de los modelos fuera de targets
// (procesados en pasadas anteriores) y se reemplazan solo los de esta pasada.
for (const s of STRUCTURES) {
  if (s.kind === 'joint') continue;
  const entry: Record<string, string[]> = {};
  for (const [k, v] of Object.entries(s.modelMeshes)) if (!targets.includes(k) && v.length) entry[k] = v;
  for (const model of targets) {
    const r = report[model];
    const m = rawMatches.get(s.id)!.get(model)!;
    if (!m.hits.length) { r.dropped.push(s.id); continue; }
    r[m.layer === 'alias' ? 'alias' : m.layer === 'exact' ? 'exact' : 'normalized'] += 1;
    r.perStructure.set(s.id, { layer: m.layer, names: m.hits.map((h) => h.name).sort() });
    entry[model] = m.hits.map((h) => h.name).sort();
  }
  newMeshes.set(s.id, entry);
  if (s.kind === 'bone') boneById.set(s.id, entry);
}

// articulaciones = unión del mapping de sus huesos constituyentes
for (const s of STRUCTURES.filter((x) => x.kind === 'joint')) {
  const entry: Record<string, string[]> = {};
  const boneNames = JOINT_BONES[s.id] ?? [];
  const boneIds = BONES.filter((b) => boneNames.some((q) => q === b.nameEn)).map((b) => b.id);
  for (const model of targets) {
    const names = new Set<string>();
    for (const bid of boneIds) for (const n of boneById.get(bid)?.[model] ?? []) names.add(n);
    // componentes directos que no son huesos del grafo (discos, etc.)
    for (const mr of resolveAliasNames(model, boneNames.filter((q) => !BONES.some((b) => b.nameEn === q)))) names.add(mr.name);
    if (names.size) {
      entry[model] = [...names].sort();
      const r = report[model];
      r.alias += 1;
      r.perStructure.set(s.id, { layer: 'alias (huesos constituyentes)', names: entry[model] });
    } else {
      report[model].dropped.push(s.id);
    }
  }
  newMeshes.set(s.id, entry);
}

// ── escritura de los data files (solo la línea modelMeshes de cada entrada) ────
const FILES: Array<[string, string]> = [
  ['muscles.ts', 'músculos'], ['tendons.ts', 'tendones'], ['nerves.ts', 'nervios'],
  ['joints.ts', 'articulaciones'], ['bones.ts', 'huesos'], ['ligaments.ts', 'ligamentos'],
];
let touchedFiles = 0;
if (!dry) {
  for (const [file] of FILES) {
    const p = join(ROOT, 'src/data/fitness/anatomy', file);
    let content = readFileSync(p, 'utf8');
    let changed = 0;
    for (const s of STRUCTURES) {
      const entry = newMeshes.get(s.id);
      if (!entry) continue; // estructura sin cambios en esta pasada (modelos --only fuera)
      const json = JSON.stringify(entry);
      const re = new RegExp('(  id: `' + s.id.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&') + '`,[\\s\\S]*?  modelMeshes: )\\{[^\\n]*\\},');
      const before = content;
      content = content.replace(re, (_m, p1: string) => p1 + json + ',');
      if (content !== before) changed += 1;
    }
    if (changed) {
      writeFileSync(p, content, 'utf8');
      touchedFiles += 1;
      console.log(`  ${file}: ${changed} entradas remapeadas`);
    }
  }
}

// ── reporte ───────────────────────────────────────────────────────────────────
const lines: string[] = [
  '# Remapeo estructura ↔ mesh runtime (ciclo 3)', '',
  `> Generado por \`rag/anatomy/scripts/remap.ts\`${dry ? ' (DRY)' : ''} · modelos: ${targets.join(', ')}`,
  '> Capas: exact (L1) · normalized (L2 agresivo) · alias (L3 manual) · dropped = sin contraparte en ese GLB (referencia eliminada).', '',
];
for (const model of targets) {
  const r = report[model];
  const total = r.exact + r.normalized + r.alias;
  const selectable = new Set([...r.perStructure.keys()]);
  lines.push(`## ${model}`, '',
    `- Estructuras mapeadas: **${total}** (exact ${r.exact} · normalized ${r.normalized} · alias ${r.alias}) · sin contraparte eliminadas: ${r.dropped.length}`,
    `- Cobertura de selección: ${selectable.size} estructuras seleccionables de ${STRUCTURES.length} del grafo (${((selectable.size / STRUCTURES.length) * 100).toFixed(1)}%)`);
  if (r.dropped.length) lines.push(`- Sin contraparte (${r.dropped.length}): ${[...new Set(r.dropped)].join(', ')}`);
  lines.push('');
}
const rp = join(ROOT, 'rag/anatomy/extracciones/remap-report.md');
if (!dry) writeFileSync(rp, lines.join('\n') + '\n', 'utf8');
for (const model of targets) {
  const r = report[model];
  console.log(`${model}: mapeadas ${r.exact + r.normalized + r.alias} (exact ${r.exact}/norm ${r.normalized}/alias ${r.alias}), dropped ${r.dropped.length}`);
  if (process.env.REMAP_VERBOSE) {
    for (const [id, info] of r.perStructure) console.log(`   [${info.layer}] ${id} → ${info.names.join(' | ')}`);
    console.log(`   [dropped] ${[...new Set(r.dropped)].join(', ')}`);
  }
}
if (!dry) { console.log(`OK -> ${touchedFiles} data files actualizados + rag/anatomy/extracciones/remap-report.md`); }
