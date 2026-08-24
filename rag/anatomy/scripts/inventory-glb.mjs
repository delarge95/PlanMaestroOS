// rag/anatomy/scripts/inventory-glb.mjs
// AG-ANATOM ciclo 3 — TAREA 1: inventario REAL de nombres addressables por modelo.
//
// FIX del parser original (ciclo 2): aquel inventario solo recogía `meshes[].name`
// (nombres del meshDef), que en estos GLB son mayormente basura de Blender
// ("mesh.228", "Vert.015", "Circle.007"…) o vacíos → 0 meshes en los cráneos y
// 1 "mesh" en overview-skeleton. Los nombres REALES viven en `nodes[].name`.
//
// Además, el visor (three.js GLTFLoader) NO expone esos nombres crudos: cada nodo
// se convierte en Object3D con `PropertyBinding.sanitizeNodeName(name)` —
// espacios→'_', se eliminan `. : / [ ]` — y `createUniqueName` añade `_N` en
// colisiones (reservando el nombre del NODO antes que el del mesh). Con todos los
// nodos con nombre y 1 primitiva por mesh, el nombre final de cada pieza en la
// escena es SIEMPRE el del nodo sanitizado; el nombre del meshDef se pierde.
//
// Este script replica esa lógica y emite los NOMBRES RUNTIME por modelo:
//   rag/anatomy/extracciones/mesh-names.json  ← fuente de verdad para tests/remap
//   rag/anatomy/extracciones/modelos-inventario.md ← convención de nombres por GLB
//   src/data/fitness/anatomy/meshIndex.ts     ← índice runtime (tests del grafo)
// Uso: node rag/anatomy/scripts/inventory-glb.mjs [dir-glb=public/models/anatomy]
import { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const SRC = process.argv[2] ? String(process.argv[2]).replaceAll('\\', '/') : 'public/models/anatomy';
const GLB_DIR = join(ROOT, SRC);

// ── parser de contenedores GLB (header 12B + chunks JSON/BIN, spec glTF 2.0) ──
function parseGlbJson(buf) {
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error('magic glTF no encontrado');
  const total = buf.readUInt32LE(8);
  let off = 12;
  let json = null;
  let bin = 0;
  while (off < total) {
    const cl = buf.readUInt32LE(off);
    const ct = buf.readUInt32LE(off + 4);
    if (ct === 0x4e4f534a) json = JSON.parse(buf.subarray(off + 8, off + 8 + cl).toString('utf8'));
    else if (ct === 0x004e4942) bin = cl;
    off += 8 + cl + ((4 - (cl % 4)) % 4);
  }
  if (!json) throw new Error('chunk JSON ausente');
  return { json, bin };
}

// ── réplica de la nomenclatura runtime de GLTFLoader (three r18x) ──────────────
// PropertyBinding.sanitizeNodeName: espacios→'_' + elimina [] . : /
const sanitize = (s) => String(s ?? '').replace(/\s/g, '_').replace(/[[\].:/]/g, '');
/** GLTFParser.createUniqueName: sufijo _N incremental en colisiones. */
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
// orden del loader: cada nodo reserva su nombre ANTES de cargar su mesh
// (comentario textual del propio GLTFLoader: "reserve node's name before its
// dependencies, so the root has the intended name").
function runtimeNames(json) {
  const unique = makeUniquifier();
  const nodes = [];
  const meshes = [];
  const seenMesh = new Set();
  for (const n of json.nodes ?? []) {
    const nodeName = n.name ? unique(n.name) : '';
    if (n.mesh != null && !seenMesh.has(n.mesh)) {
      seenMesh.add(n.mesh); // el mesh se crea (y se nombra) al referenciarlo el primer nodo
      const md = (json.meshes ?? [])[n.mesh];
      meshes.push(unique(md?.name || `mesh_${n.mesh}`));
    }
    nodes.push({ raw: n.name ?? '', name: nodeName, mesh: n.mesh ?? null });
  }
  return { nodes, meshes };
}

// ── clasificación auxiliar (geometría helper de Blender) ───────────────────────
const AUX_RE = /^(circle|plane|vert|icosphere|cube|cylinder|sphere|cone|bezier|nurbs|curve|path|empty|mesh)([._]\d+)?$/i;

/** categoría raíz de un nodo (contenedor de primer nivel de la escena). */
function rootCategories(json) {
  const roots = (json.scenes?.[json.scene ?? 0] ?? json.scenes?.[0])?.nodes ?? [];
  const byNode = new Map(); // nodeIndex -> rootName
  const walk = (idx, root) => {
    if (byNode.has(idx)) return;
    byNode.set(idx, root);
    for (const c of json.nodes[idx]?.children ?? []) walk(c, root);
  };
  roots.forEach((r, i) => walk(r, json.nodes[r]?.name ?? `root-${i}`));
  return byNode;
}

// ── inventario por modelo ──────────────────────────────────────────────────────
const files = readdirSync(GLB_DIR).filter((f) => f.toLowerCase().endsWith('.glb')).sort();
if (!files.length) throw new Error(`sin GLB en ${SRC}`);
const inventory = {};
const metaRows = [];

for (const f of files) {
  const key = f.replace(/\.glb$/i, '');
  const { json, bin } = parseGlbJson(readFileSync(join(GLB_DIR, f)));
  const { nodes, meshes } = runtimeNames(json);
  const catByNode = rootCategories(json);

  // contenedor raíz → nombres runtime de sus descendientes con mesh
  const containers = {};
  const leafIndex = new Map(); // nombre runtime → categoría raíz
  (json.nodes ?? []).forEach((n, i) => {
    const root = catByNode.get(i);
    if (!root) return;
    const rt = nodes[i].name;
    if (!rt) return;
    (containers[root] ??= []);
    containers[root].push(rt);
    if (n.mesh != null) leafIndex.set(rt, root);
  });
  for (const k of Object.keys(containers)) containers[k].sort();

  const names = nodes.map((n) => n.name).filter(Boolean).sort();
  const aux = names.filter((n) => AUX_RE.test(n));
  const lateralR = names.filter((n) => /_r(_\d+)?$/i.test(n)).length;
  const lateralL = names.filter((n) => /_l(_\d+)?$/i.test(n)).length;

  inventory[key] = {
    // nombres addressables en el visor (nodos runtime sanitizados)
    names,
    // nombres runtime de los meshDefs — documentación: en escena NO son
    // addressables (el nodo con nombre siempre los renombra)
    meshes: [...new Set(meshes)].sort(),
    // nodos hoja (con geometría) agrupados por contenedor raíz de categoría
    containers,
    aux,
  };
  metaRows.push({
    key, file: `${SRC}/${f}`,
    kb: Math.round(statSync(join(GLB_DIR, f)).size / 1024),
    glbNodes: (json.nodes ?? []).length,
    glbMeshes: (json.meshes ?? []).length,
    runtimeNames: names.length,
    withGeometry: leafIndex.size,
    aux: aux.length,
    lateralR, lateralL,
    roots: Object.keys(containers),
    draco: (json.extensionsRequired ?? []).includes('KHR_draco_mesh_compression'),
    binKb: Math.round(bin / 1024),
  });
}

// ── mesh-names.json (fuente de verdad) ─────────────────────────────────────────
const outDir = join(ROOT, 'rag', 'anatomy', 'extracciones');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'mesh-names.json'), JSON.stringify(inventory, null, 2) + '\n', 'utf8');

// ── meshIndex.ts (nombres runtime; lo consumen los tests del grafo) ───────────
const meshIndexTs =
`// src/data/fitness/anatomy/meshIndex.ts
// Índice de nombres por modelo. GENERADO por rag/anatomy/scripts/inventory-glb.mjs — NO editar a mano.
// Regenerar: node rag/anatomy/scripts/inventory-glb.mjs
// CICLO 3: los nombres son RUNTIME (post GLTFLoader: sanitizeNodeName espacios→'_',
// sin '.:/[]', sufijo _N en colisiones) — son los que el visor puede direccionar,
// no los nombres crudos del chunk JSON del GLB.

export const MESH_INDEX: Record<string, { nodes: string[]; meshes: string[] }> = ${JSON.stringify(
  Object.fromEntries(Object.entries(inventory).map(([k, v]) => [k, { nodes: v.names, meshes: v.meshes }])),
)};\n`;
writeFileSync(join(ROOT, 'src/data/fitness/anatomy/meshIndex.ts'), meshIndexTs, 'utf8');

// ── modelos-inventario.md (convención de nombres por GLB) ─────────────────────
const CONVENTION = {
  'colored-skull-base': 'Nodos Title Case en plural ("Temporal bones"); pares laterales como "Parietal bone.l/.r"; dientes "Upper/Lower …"; raíz única "Bones". meshDefs sin nombre anatómico ("mesh.NNN") — irrelevante en runtime.',
  'exploded-skull': 'Igual que colored-skull-base (misma nomenclatura, piezas separadas radialmente de fábrica). Raíz "Bones".',
  'overview-colored-skull': 'Variante overview: lateralidad sufijo ".r" en piezas únicas ("Temporal bone.r", "Maxilla bone.r"); raíces "Bones"/"Bones_right".',
  hand: 'Sin lateralidad (pieza única derecha); músculos intrínsecos y vainas tendinosas con nombre completo ("Extensor pollicis longus tendon sheath"); nervios como prefijo "Median nerve …". Raíces de categoría: Bones/Muscles/…/Overlays.',
  'lower-limb': 'Lateralidad ".r" en casi todo; músculos por cabezas ("Lateral head of gastrocnemius.r"); bursas bajo raíz "Bursae" (sus meshDefs se llaman "Circle.NNN" — basura de Blender, en runtime heredan el nombre del nodo); raíces Bones/Cartilages/Ligaments/Muscles/Fascia/Arteries/Veins/Nerves/Bursae/Overlays.',
  'overview-skeleton': 'Lateralidad ".r" ("Femur.r"); vértebras en plural con nivel entre paréntesis ("Thoracic vertebrae (T7)"); parietales "Parietal bone left/right"; raíces "Bones"/"Bones_right"/"Cartilages_right".',
  'upper-limb': 'Lateralidad ".r"; músculos por partes ("Clavicular head of pectoralis major muscle.r", "Ascending part of Trapezius muscle.r"); raíces regionales "Arm - muscles", "Forearm - bones", "Hand and wrist - nerves"… (categoría tras el guion); plejos y raíces nerviosas ("C5 root.r", "Lateral cord of brachial plexus.r").',
  vertebrae: 'Solo 3 piezas aisladas: "Cervical vertebra (C4)", "Thoracic vertebra (T7)", "Lumbar vertebra (L3)" + raíz "Bones".',
};
const md = [];
md.push('# Inventario de modelos GLB — capa anatómica (ciclo 3, runtime names)', '',
  '> Generado por `rag/anatomy/scripts/inventory-glb.mjs`. Fuente: `' + SRC + '/`.',
  '> **Los nombres listados son RUNTIME**: tal como el visor (three.js GLTFLoader)',
  '> los nombra — `sanitizeNodeName` (espacios→`_`, sin `.:/[]`) + `createUniqueName`',
  '> (sufijo `_N` en colisiones). El nombre del NODO prevalece siempre sobre el del',
  '> meshDef (todos los nodos de estos GLB tienen nombre y 1 primitiva por mesh).', '',
  '## Resumen', '',
  '| Modelo | Peso | Nodos GLB | MeshDefs | Nombres runtime | Con geometría | Aux | Lat .r/.l | Raíces de categoría | Draco |',
  '|---|---|---|---|---|---|---|---|---|---|');
for (const r of metaRows) {
  md.push(`| ${r.key} | ${(r.kb / 1024).toFixed(2)} MB | ${r.glbNodes} | ${r.glbMeshes} | ${r.runtimeNames} | ${r.withGeometry} | ${r.aux} | ${r.lateralR}/${r.lateralL} | ${r.roots.join(', ')} | ${r.draco ? 'sí' : 'no'} |`);
}
md.push('', '## Convención de nombres por GLB', '');
for (const r of metaRows) md.push(`- **${r.key}** — ${CONVENTION[r.key] ?? ''}`);
md.push('',
  '## Correcciones sobre el inventario del ciclo 2', '',
  '- El parser anterior leía `meshes[].name`: en cráneos/vertebrae los meshDefs no',
  '  llevan nombre anatómico → "0 meshes"; en overview-skeleton un único meshDef',
  '  "mesh". **Los nombres reales están en `nodes[].name`** y este inventario los',
  '  recoge (sanitizados como en runtime).',
  '- Los "43 meshes Circle.NNN" de lower-limb NO son piezas de relleno en la escena:',
  '  son los meshDefs de las **bursas** (nodos correctamente nombrados bajo la raíz',
  '  "Bursae"). En runtime ningún objeto se llama "Circle.NNN". La regla `aux` del',
  '  catálogo queda como defensa ante geometría helper que sí llegue nombrada.',
  '- El grafo (`modelMeshes`) del ciclo 2 usaba nombres crudos con espacios/puntos',
  '  ("Temporal bones", "Flexor retinaculum of ankle") que en runtime no existen →',
  '  remapeo a nombres runtime en `rag/anatomy/scripts/remap.ts` (tarea 3).', '',
  '## Detalle por modelo', '');
for (const [key, inv] of Object.entries(inventory)) {
  md.push(`### ${key}`, '',
    `- Nombres runtime: **${inv.names.length}** (con geometría: ${Object.values(inv.containers).flat().filter((n, i, a) => inv.names.includes(n) && a.indexOf(n) === i).length} aproximados por contenedor) · aux: ${inv.aux.length}`,
    `- Raíces de categoría y nº de nodos: ${Object.entries(inv.containers).map(([k, v]) => `${k}(${v.length})`).join(', ')}`);
  if (inv.aux.length) md.push(`- Aux (geometría helper): ${inv.aux.join(', ')}`);
  md.push('');
}
writeFileSync(join(outDir, 'modelos-inventario.md'), md.join('\n') + '\n', 'utf8');

console.log(`OK -> rag/anatomy/extracciones/mesh-names.json (${files.length} GLB)`);
console.log(`OK -> rag/anatomy/extracciones/modelos-inventario.md`);
console.log(`OK -> src/data/fitness/anatomy/meshIndex.ts (nombres runtime)`);
for (const r of metaRows) console.log(`  ${r.key}: ${r.runtimeNames} nombres runtime, ${r.withGeometry} con geometría, aux ${r.aux}, raíces [${r.roots.join('|')}]`);
