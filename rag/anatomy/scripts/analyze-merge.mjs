// rag/anatomy/scripts/analyze-merge.mjs
// AG-ANATOM — análisis de solapamiento entre GLBs para el modelo compuesto
// (mandato usuario: "analizar con precisión piezas en común de cada modelo
// para sobreponerlas"). EMITE: rag/anatomy/extracciones/merge-analysis.json + .md
//
// Método: parsea el chunk JSON de cada GLB, recorre la jerarquía de nodos
// componiendo TRS (los GLB de este atlas no usan matrix), y para cada nodo
// nombrado con malla registra: traducción mundial, AABB mundial (de accessor
// min/max de POSITION transformado) y contenedor padre. Luego:
//  - intersección de nombres normalizados entre modelos
//  - delta de traducción mundial de las piezas comunes (¿mismo espacio?)
//  - cobertura: qué piezas de cada modelo quedan fuera de los demás
// Uso: node rag/anatomy/scripts/analyze-merge.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const GLB_DIR = join(process.cwd(), 'public/models/anatomy');
const OUT_DIR = join(process.cwd(), 'rag/anatomy/extracciones');

// ── parse GLB JSON ────────────────────────────────────────────────────────────
function parseGlb(buf) {
  const total = buf.readUInt32LE(8);
  let off = 12, json = null;
  while (off < total) {
    const cl = buf.readUInt32LE(off), ct = buf.readUInt32LE(off + 4);
    if (ct === 0x4e4f534a) { json = JSON.parse(buf.subarray(off + 8, off + 8 + cl).toString('utf8')); break; }
    off += 8 + cl + ((4 - (cl % 4)) % 4);
  }
  return json;
}

// ── TRS compose (solo traslación+escala+rot euler-free: quaternion) ──────────
function quatToMat3(q) {
  const [x, y, z, w] = q;
  const x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2;
  const yy = y * y2, yz = y * z2, zz = z * z2;
  const wx = w * x2, wy = w * y2, wz = w * z2;
  return [
    1 - (yy + zz), xy - wz, xz + wy,
    xy + wz, 1 - (xx + zz), yz - wx,
    xz - wy, yz + wx, 1 - (xx + yy),
  ];
}
function composeWorld(node, parent) {
  const t = node.translation ?? [0, 0, 0];
  const r = node.rotation ?? [0, 0, 0, 1];
  const s = node.scale ?? [1, 1, 1];
  const R = quatToMat3(r);
  // world = parent.R * (S * local) ; worldT = parent.R*(S*t) + parent.t
  const worldT = [
    parent.R[0] * (s[0] * t[0]) + parent.R[1] * (s[1] * t[1]) + parent.R[2] * (s[2] * t[2]) + parent.t[0],
    parent.R[3] * (s[0] * t[0]) + parent.R[4] * (s[1] * t[1]) + parent.R[5] * (s[2] * t[2]) + parent.t[1],
    parent.R[6] * (s[0] * t[0]) + parent.R[7] * (s[1] * t[1]) + parent.R[8] * (s[2] * t[2]) + parent.t[2],
  ];
  const worldR = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let c = 0; c < 3; c++)
    for (let rr = 0; rr < 3; rr++) {
      let acc = 0;
      for (let k = 0; k < 3; k++) acc += parent.R[rr * 3 + k] * (R[c * 3 + k] * s[k]);
      worldR[rr * 3 + c] = acc;
    }
  return { t: worldT, R: worldR };
}
/** AABB mundial: transforma los 8 corners del AABB local por (R,S,t). */
function worldAabb(localMin, localMax, world) {
  const mins = [Infinity, Infinity, Infinity], maxs = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < 8; i++) {
    const local = [
      i & 1 ? localMax[0] : localMin[0],
      i & 2 ? localMax[1] : localMin[1],
      i & 4 ? localMax[2] : localMin[2],
    ];
    const p = [0, 0, 0];
    for (let r = 0; r < 3; r++)
      p[r] = world.R[r * 3] * local[0] + world.R[r * 3 + 1] * local[1] + world.R[r * 3 + 2] * local[2] + world.t[r];
    for (let r = 0; r < 3; r++) { mins[r] = Math.min(mins[r], p[r]); maxs[r] = Math.max(maxs[r], p[r]); }
  }
  return { min: mins.map((n) => +n.toFixed(4)), max: maxs.map((n) => +n.toFixed(4)) };
}

const norm = (s) => (s || '').normalize('NFD').replace(/[\u0300-\u036f\u200b\u200c\ufeff]/g, '').toLowerCase().replace(/[\[\]()]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

// ── nombres RUNTIME: GLTFLoader sanitiza (sanitizeNodeName) y deduplica ─────
// (mismas reglas validadas en inventory-glb.mjs ciclo 3)
const sanitize = (s) => String(s ?? '').replace(/\s/g, '_').replace(/[[\].:/]/g, '');
function makeUniquifier() {
  const used = new Map();
  return (name) => {
    const s = sanitize(name);
    if (!s) return s;
    if (used.has(s)) {
      const n = used.get(s) + 1;
      used.set(s, n);
      return `${s}_${n}`;
    }
    used.set(s, 0);
    return s;
  };
}

// ── analizar cada modelo ─────────────────────────────────────────────────────
const FILES = ['overview-skeleton', 'upper-limb', 'lower-limb', 'hand', 'colored-skull-base', 'overview-colored-skull', 'exploded-skull', 'vertebrae'];
const MODELS = {};
for (const key of FILES) {
  const glb = parseGlb(readFileSync(join(GLB_DIR, `${key}.glb`)));
  const nodes = glb.nodes ?? [];
  const sceneRoots = glb.scenes?.[glb.scene ?? 0]?.nodes ?? [];
  const uniquify = makeUniquifier();
  const pieces = new Map(); // nombre RUNTIME (sanitizado) → info
  const walk = (ni, parent) => {
    const node = nodes[ni];
    if (!node) return;
    const world = composeWorld(node, parent);
    // GLTFLoader nombra TODOS los nodos (grupos incluidos): el uniquifier
    // debe consumir en el mismo orden para replicar sufijos _N
    const runtimeName = uniquify(node.name);
    if (node.mesh !== undefined && node.name) {
      const mesh = glb.meshes?.[node.mesh];
      let aabbWorld = null;
      if (mesh?.primitives?.[0]?.attributes?.POSITION !== undefined) {
        const acc = glb.accessors[mesh.primitives[0].attributes.POSITION];
        if (acc?.min && acc?.max) aabbWorld = worldAabb(acc.min, acc.max, world);
      }
      pieces.set(runtimeName, {
        parent: nodes[parent.i]?.name ?? '(raíz)',
        t: world.t.map((n) => +n.toFixed(4)),
        aabb: aabbWorld,
        verts: mesh?.primitives?.reduce((a, p) => a + (glb.accessors[p.attributes.POSITION]?.count ?? 0), 0) ?? 0,
      });
    }
    for (const c of node.children ?? []) walk(c, { i: ni, ...world });
  };
  for (const r of sceneRoots) walk(r, { i: -1, t: [0, 0, 0], R: [1, 0, 0, 0, 1, 0, 0, 0, 1] });
  MODELS[key] = { pieces, count: pieces.size };
  console.log(`${key}: ${pieces.size} piezas nombradas`);
}

// ── intersecciones por nombre normalizado ────────────────────────────────────
const normIndex = {}; // norm → { modelo: [nombres runtime] }
for (const [key, { pieces }] of Object.entries(MODELS)) {
  for (const name of pieces.keys()) {
    const n = norm(name);
    (normIndex[n] ??= {})[key] ??= [];
    normIndex[n][key].push(name);
  }
}

const PAIRS = [];
const keys = FILES;
for (let i = 0; i < keys.length; i++)
  for (let j = i + 1; j < keys.length; j++) {
    const a = keys[i], b = keys[j];
    const common = Object.entries(normIndex).filter(([, v]) => v[a] && v[b]);
    // delta de traducción mundial para piezas comunes
    let deltas = [];
    for (const [n, v] of common) {
      const na = MODELS[a].pieces.get(v[a][0]);
      const nb = MODELS[b].pieces.get(v[b][0]);
      const d = Math.hypot(na.t[0] - nb.t[0], na.t[1] - nb.t[1], na.t[2] - nb.t[2]);
      deltas.push(d);
    }
    deltas.sort((x, y) => x - y);
    const med = deltas.length ? deltas[Math.floor(deltas.length / 2)] : null;
    PAIRS.push({
      a, b, comunes: common.length,
      deltaMed: med === null ? null : +med.toFixed(4),
      deltaMin: deltas.length ? +deltas[0].toFixed(4) : null,
      deltaMax: deltas.length ? +deltas[deltas.length - 1].toFixed(4) : null,
      pctA: Math.round((common.length / MODELS[a].count) * 100),
      pctB: Math.round((common.length / MODELS[b].count) * 100),
    });
  }

// ── exclusividad: piezas de cada modelo sin equivalente normalizado en otros ─
const exclusivas = {};
for (const key of keys) {
  const excl = [];
  for (const name of MODELS[key].pieces.keys()) {
    const entry = normIndex[norm(name)];
    if (Object.keys(entry).length === 1) excl.push(name);
  }
  exclusivas[key] = { count: excl.length, muestra: excl.slice(0, 25) };
}

// ── contenedores raíz por modelo (categorías) ────────────────────────────────
const contenedores = {};
for (const [key, { pieces }] of Object.entries(MODELS)) {
  const c = {};
  for (const info of pieces.values()) c[info.parent] = (c[info.parent] ?? 0) + 1;
  contenedores[key] = c;
}

// ── PLAN DE COMPUESTO: regiones, dedup geométrico (AABB) y kinds ─────────────
// Regiones: hand > skull > lower > upper (prioridad de especialista) > axial.
// Dedup: una pieza del skeleton (o de un especialista superado) queda
// oculta por defecto (hiddenByDup) si OTRA pieza de especialista superior tiene
// AABB mundial ≈ igual (misma geometría en el mismo sitio, tolerancia 1 cm).
const SPECIALISTS = [
  { model: 'hand', region: 'hand' },
  { model: 'colored-skull-base', region: 'skull' },
  { model: 'lower-limb', region: 'lower' },
  { model: 'upper-limb', region: 'upper' },
];
const REGION_PRIORITY = { hand: 0, skull: 1, lower: 2, upper: 3, axial: 9 };

const normSets = Object.fromEntries(keys.map((k) => [k, new Set(MODELS[k].pieces.keys().map(norm))]));
/** norms sin plural final (para cruzar singular/plural entre modelos; teeth→tooth) */
const normSetsSg = Object.fromEntries(keys.map((k) => [k, new Set([...normSets[k]].map((n) => n.replace(/teeth$/, 'tooth').replace(/s$/, '')))]));

// ── zona anatómica de las piezas del skeleton SEGÚN EL GRAFO (bones.ts) ─────
// El nombre no basta (typos del export: "Temporal_boner" vs "Temporal_bones");
// el grafo ya mapea cada pieza del skeleton a una estructura con zona.
const ZONE_TO_REGION = {
  'head-jaw': 'skull', 'forearm-hand': 'hand',
  shoulder: 'upper', chest: 'upper', back: 'upper', arm: 'upper',
  hip: 'lower', thigh: 'lower', knee: 'lower', 'lower-leg': 'lower', 'ankle-foot': 'lower',
  cervical: 'axial', spine: 'axial', core: 'axial',
};
const skeletonZoneByPiece = {};
try {
  const bonesTs = readFileSync(join(process.cwd(), 'src/data/fitness/anatomy/bones.ts'), 'utf8');
  for (const block of bonesTs.split(/(?=id:)/)) {
    const zone = block.match(/zone:\s*`([a-z-]+)`/)?.[1];
    const mm = block.match(/modelMeshes:\s*\{[^}]*"overview-skeleton":\s*\[([^\]]+)\]/);
    if (!zone || !mm) continue;
    for (const n of mm[1].matchAll(/"([^"]+)"/g)) skeletonZoneByPiece[norm(n[1])] = zone;
  }
} catch { console.warn('bones.ts no legible para zonas — fallback por nombre'); }

function kindFromContainer(container, name) {
  const c = container.toLowerCase(), n = name.toLowerCase();
  if (/arter/.test(c)) return 'artery';
  if (/vein/.test(c)) return 'vein';
  if (/nerve/.test(c)) return 'nerve';
  // los tendones viven en contenedores de músculos: el nombre manda
  if (/tendon/.test(n)) return 'tendon';
  // vainas sinoviales y fundas tendinosas → tendón (sistema tendinoso)
  if (/vagina[e]?_tendinum|tendon_sheath|tendinous_sheath/.test(n)) return 'tendon';
  // FASCIA por nombre (el contenedor "capsules, ligaments, fasciae" las mete
  // con ligamentos — error detectado: Brachial_fasciar); retináculos son
  // engrosamientos fasciales
  if (/fascia|retinaculum/.test(n)) return 'fascia';
  if (/muscle/.test(c)) return 'muscle';
  if (/cartilage/.test(c)) return 'cartilage';
  if (/synovia|bursa/.test(c)) return 'bursa';
  if (/ligament|capsule|fasciae|retinaculum|zona_orbicularis|fibrous_sheath/.test(c)) {
    // dentro de contenedores de ligamentos puede haber fascias nombradas
    if (/fascia|retinaculum/.test(n)) return 'fascia';
    if (/bursa/.test(n)) return 'bursa';
    if (/tendon/.test(n)) return 'tendon';
    return 'ligament';
  }
  if (/^fascia/.test(c)) return 'fascia';
  if (/overlay/.test(c)) {
    if (/ligament|retinaculum|zona_orbicularis|fibrous_sheath/.test(n)) return 'ligament';
    if (/bursa/.test(n)) return 'bursa';
    if (/tendon/.test(n)) return 'tendon';
    if (/adductor|pollicis/.test(n)) return 'muscle';
    if (/canal|hiatus|triangle|ring|opening|arch/.test(n)) return 'other';
    return 'overlay';
  }
  if (/bone|teeth|tooth/.test(c)) return 'bone';
  if (/bone/.test(n)) return 'bone';
  return 'other';
}

const aabbEq = (a, b, tol = 0.01) =>
  a && b && a.min.every((v, i) => Math.abs(v - b.min[i]) <= tol) && a.max.every((v, i) => Math.abs(v - b.max[i]) <= tol);

// índice de AABBs por especialista para dedup geométrico
const aabbIndex = {};
for (const { model } of SPECIALISTS) {
  aabbIndex[model] = [];
  for (const [name, info] of MODELS[model].pieces) {
    if (info.aabb) aabbIndex[model].push({ name, aabb: info.aabb });
  }
}

function assignRegion(model, name) {
  if (model !== 'overview-skeleton') return SPECIALISTS.find((s) => s.model === model).region;
  // 1) zona del grafo (precisa, inmune a typos del export)
  const zone = skeletonZoneByPiece[norm(name)];
  if (zone && ZONE_TO_REGION[zone]) return ZONE_TO_REGION[zone];
  // 2) fallback: nombre normalizado contra especialistas, tolerante a la 'r'
  //    pegada por el sanitize (".r"→"r") y a plural/singular
  const n = norm(name);
  const variantes = [n, n.replace(/r$/, ''), n.replace(/s$/, ''), n.replace(/r$/, '').replace(/s$/, '')];
  for (const v of variantes) {
    for (const { model: sm, region } of SPECIALISTS) {
      if (normSets[sm].has(v) || normSetsSg[sm].has(v)) return region;
    }
  }
  return 'axial';
}

const COMPOSITE = [];
const dupStats = {};
for (const model of ['overview-skeleton', 'lower-limb', 'upper-limb', 'hand', 'colored-skull-base']) {
  for (const [name, info] of MODELS[model].pieces) {
    const region = assignRegion(model, name);
    let hiddenByDup = null;
    // CRÁNEO: dedup por REGIÓN completa — el cráneo coloreado cubre TODO el
    // cráneo; las piezas de cráneo del skeleton que no coinciden por AABB
    // sobremontaban versiones distintas (cráneo duplicado, reporte usuario).
    if (model === 'overview-skeleton' && region === 'skull') {
      hiddenByDup = 'colored-skull-base:(región cráneo completa)';
    } else {
      // dedup: especialistas de prioridad superior tapan esta pieza si AABB ≈
      const myPriority = REGION_PRIORITY[region];
      for (const { model: sm, region: sr } of SPECIALISTS) {
        if (REGION_PRIORITY[sr] >= myPriority && sm !== model) continue;
        if (sr === region && sm === model) continue;
        const hit = aabbIndex[sm].find(({ aabb }) => aabbEq(aabb, info.aabb));
        if (hit) { hiddenByDup = `${sm}:${hit.name}`; break; }
      }
      // también: piezas de especialista tapadas por otro de prioridad superior
      if (model !== 'overview-skeleton' && !hiddenByDup) {
        const n = norm(name);
        for (const { model: sm, region: sr } of SPECIALISTS) {
          if (REGION_PRIORITY[sr] >= myPriority || sm === model) continue;
          if (normSets[sm].has(n)) { hiddenByDup = `${sm}:${name}`; break; }
        }
      }
    }
    if (hiddenByDup) dupStats[model] = (dupStats[model] ?? 0) + 1;
    COMPOSITE.push({
      model, name, region,
      container: info.parent,
      kind: kindFromContainer(info.parent, name),
      verts: info.verts,
      hiddenByDup: hiddenByDup ?? undefined,
    });
  }
}

// emparejar exploded-skull ↔ colored-skull-base para el slider de explosión.
// El exploded NO es la misma malla (vértices distintos, desplazamiento horneado
// en vértices): se empareja por nombre normalizado tolerante a plural/singular.
const normPlural = (s) => norm(s).replace(/s$/, '');
const baseNormIndex = {};
for (const name of MODELS['colored-skull-base'].pieces.keys()) baseNormIndex[norm(name)] = name;
const explodePairs = {};
const explodeSinPar = [];
for (const name of MODELS['exploded-skull'].pieces.keys()) {
  const n = norm(name);
  const hit = baseNormIndex[n] ?? baseNormIndex[normPlural(n)] ?? Object.entries(baseNormIndex).find(([k]) => normPlural(k) === normPlural(n))?.[1];
  if (hit) explodePairs[name] = hit;
  else explodeSinPar.push(name);
}

// muestra de Overlays (piel) para documentar
const overlaySamples = {};
for (const k of ['lower-limb', 'hand']) {
  overlaySamples[k] = [...MODELS[k].pieces.entries()].filter(([, i]) => /overlay/i.test(i.parent)).slice(0, 12).map(([n]) => n);
}

const out = {
  generado: new Date().toISOString(),
  modelos: Object.fromEntries(keys.map((k) => [k, { piezas: MODELS[k].count }])),
  pares: PAIRS,
  exclusivas,
  contenedores,
};
out.plan = {
  composite: COMPOSITE,
  total: COMPOSITE.length,
  ocultasPorDup: dupStats,
  porRegion: COMPOSITE.reduce((a, p) => { a[p.region] = (a[p.region] ?? 0) + 1; return a; }, {}),
  porKind: COMPOSITE.reduce((a, p) => { a[p.kind] = (a[p.kind] ?? 0) + 1; return a; }, {}),
  explodePairs,
  explodeSinPar: Object.keys(MODELS['exploded-skull'].pieces).filter((n) => !explodePairs[n]),
  overlaySamples,
};
writeFileSync(join(OUT_DIR, 'merge-analysis.json'), JSON.stringify(out, null, 1));

// ── generar src/data/fitness/anatomy/compositePlan.ts (consumo del visor) ────
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
let ts = `// src/data/fitness/anatomy/compositePlan.ts
// AG-ANATOM — GENERADO por rag/anatomy/scripts/analyze-merge.mjs (no editar a mano).
// Plan del modelo COMPUESTO: unión de los 5 GLB con dedup geométrico por AABB
// mundial (Δ=0 en todas las piezas comunes: los GLB comparten espacio mundial).
// Regiones: hand > skull > lower > upper (prioridad) > axial (solo skeleton).
// hiddenByDup: la pieza queda oculta por defecto porque un especialista la
// representa con geometría idéntica en el mismo sitio.
// Regenerar: node rag/anatomy/scripts/analyze-merge.mjs
// (emitido como tuplas compactas: 1380 object literals desbordan el inferidor de TS)

export type CompositeRegion = 'axial' | 'skull' | 'upper' | 'lower' | 'hand';
export type CompositeKind =
  | 'muscle' | 'tendon' | 'ligament' | 'nerve' | 'bone' | 'cartilage'
  | 'bursa' | 'artery' | 'vein' | 'fascia' | 'overlay' | 'other';

export interface CompositePiece {
  model: string;
  name: string;
  region: CompositeRegion;
  kind: CompositeKind;
  container: string;
  /** model:name del especialista que representa esta pieza (oculta por defecto). */
  hiddenByDup?: string;
}

// [model, name, region, kind, container, hiddenByDup?]
const RAW: Array<[string, string, CompositeRegion, CompositeKind, string, string?]> = [
`;
for (const p of COMPOSITE) {
  ts += `  ['${esc(p.model)}', '${esc(p.name)}', '${p.region}', '${p.kind}', '${esc(p.container)}'${p.hiddenByDup ? `, '${esc(p.hiddenByDup)}'` : ''}],\n`;
}
ts += `];

export const COMPOSITE_PIECES: CompositePiece[] = RAW.map(([model, name, region, kind, container, hiddenByDup]) => ({
  model, name, region, kind, container, hiddenByDup,
}));

/** Pares exploded↔base del cráneo para el slider de explosión (por nombre). */
export const EXPLODE_PAIRS: Record<string, string> = {
`;
for (const [e, b] of Object.entries(explodePairs)) ts += `  '${esc(e)}': '${esc(b)}',\n`;
ts += `};

export const COMPOSITE_STATS = {
  total: ${COMPOSITE.length},
  porRegion: ${JSON.stringify(out.plan.porRegion)},
  porKind: ${JSON.stringify(out.plan.porKind)},
  ocultasPorDup: ${JSON.stringify(out.plan.ocultasPorDup)},
  generado: '${out.generado}',
};
`;
writeFileSync(join(process.cwd(), 'src/data/fitness/anatomy/compositePlan.ts'), ts);
console.log('OK → compositePlan.ts (' + COMPOSITE.length + ' piezas)');

// ── markdown legible ─────────────────────────────────────────────────────────
let md = `# Análisis de solapamiento GLB para el modelo compuesto\n\n> Generado por analyze-merge.mjs (${out.generado}). Nombres normalizados\n> (minúsculas, sin puntuación/laterales ambiguos) — la coincidencia exacta de\n> traducción mundial confirma si dos piezas son la misma geometría en el mismo\n> espacio.\n\n## Pares — piezas comunes y alineación\n\n| Par | Comunes | %A | %B | Δtraducción med/min/max |\n|---|---|---|---|---|\n`;
for (const p of PAIRS) md += `| ${p.a} ↔ ${p.b} | ${p.comunes} | ${p.pctA}% | ${p.pctB}% | ${p.deltaMed ?? '—'} / ${p.deltaMin ?? '—'} / ${p.deltaMax ?? '—'} |\n`;
md += `\n## Piezas exclusivas (sin equivalente normalizado)\n\n`;
for (const k of keys) md += `- **${k}**: ${exclusivas[k].count} exclusivas — p.ej. ${exclusivas[k].muestra.slice(0, 8).join(', ')}\n`;
md += `\n## Contenedores raíz por modelo\n\n`;
for (const k of keys) md += `- **${k}**: ${Object.entries(contenedores[k]).map(([c, n]) => `${c}(${n})`).join(', ')}\n`;
md += `\n## Plan de compuesto\n\n- Total piezas: **${out.plan.total}**\n- Por región: ${Object.entries(out.plan.porRegion).map(([r, n]) => `${r}(${n})`).join(', ')}\n- Por tipo: ${Object.entries(out.plan.porKind).map(([r, n]) => `${r}(${n})`).join(', ')}\n- Ocultas por dedup: ${Object.entries(out.plan.ocultasPorDup).map(([r, n]) => `${r}(${n})`).join(', ')}\n- Explosión: ${Object.keys(explodePairs).length}/29 pares emparejados${out.plan.explodeSinPar.length ? ` — sin par: ${out.plan.explodeSinPar.join(', ')}` : ''}\n- Overlays (piel) muestra lower-limb: ${overlaySamples['lower-limb'].slice(0, 6).join(', ')}\n- Overlays (piel) muestra hand: ${overlaySamples['hand'].slice(0, 6).join(', ')}\n`;
writeFileSync(join(OUT_DIR, 'merge-analysis.md'), md);
console.log('\nOK → merge-analysis.json / merge-analysis.md');
