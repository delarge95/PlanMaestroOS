// rag/anatomy/scripts/build-mesh-catalog.mjs
// AG-ANATOM ciclo 3 — TAREA 4: catálogo por tipo de TODOS los meshes reales.
// Genera src/data/fitness/anatomy/meshCatalog.ts desde el inventario runtime
// (rag/anatomy/extracciones/mesh-names.json). Fuentes de inferencia:
//   1. patrón del nombre (anatomía específica manda)
//   2. contenedor raíz de categoría del GLB (Bones/Muscles/"Arm - nerves"/…)
//   3. overrides manuales (bloque marcado en meshCatalog.ts, preservado aquí)
// Uso: node rag/anatomy/scripts/build-mesh-catalog.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const INV = JSON.parse(readFileSync(join(ROOT, 'rag/anatomy/extracciones/mesh-names.json'), 'utf8'));

// ── reglas de inferencia ───────────────────────────────────────────────────────
const AUX_RE = /^(circle|plane|vert|icosphere|cube|cylinder|sphere|cone|bezier|nurbs|curve|path|empty|mesh)([._]\d+)?$/i;
const norm = (s) => s.toLowerCase().replace(/_/g, ' ').replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
/** tokens con variante sin la 'r'/'l' glued del sanitize ("ligamentr"→"ligament",
 *  "Femurr"→"Femur"): el runtime pega el sufijo de lateralidad ".r"/".l" a la
 *  última palabra al eliminar el punto. */
function tokens(s) {
  const out = new Set();
  for (const t of norm(s).split(' ')) {
    out.add(t);
    if (/[rl]$/.test(t) && t.length > 3) out.add(t.slice(0, -1));
  }
  return out;
}

const BONE_WORDS = new Set(['bone', 'bones', 'phalanx', 'vertebra', 'vertebrae', 'rib', 'sacrum', 'coccyx', 'sternum', 'manubrium', 'clavicle', 'scapula', 'humerus', 'radius', 'ulna', 'patella', 'femur', 'tibia', 'fibula', 'talus', 'calcaneus', 'navicular', 'cuboid', 'cuneiform', 'metatarsal', 'metacarpal', 'scaphoid', 'lunate', 'triquetrum', 'pisiform', 'trapezium', 'trapezoid', 'capitate', 'hamate', 'frontal', 'parietal', 'temporal', 'occipital', 'sphenoid', 'ethmoid', 'zygomatic', 'maxilla', 'mandible', 'vomer', 'molar', 'premolar', 'canine', 'incisor', 'sesamoid', 'xiphoid', 'process', 'atlas', 'axis']);

/** patrón del nombre — orden = prioridad (lo específico anatom. gana). */
function inferByPattern(name) {
  const t = tokens(name);
  if (t.has('tendon') || t.has('tendons') || t.has('sheath') || t.has('sheaths') || t.has('sheeth') || t.has('vaginae')) return 'tendon';
  if (t.has('ligament') || t.has('ligaments') || t.has('retinaculum')) return 'ligament';
  if (t.has('nerve') || t.has('nerves') || t.has('plexus')) return 'nerve';
  if (t.has('artery') || t.has('arteries') || t.has('vein') || t.has('veins') || t.has('vessel') || t.has('vessels')) return 'vessel';
  if (t.has('cart') || t.has('cartilage') || t.has('cartilages') || t.has('meniscus') || t.has('labrum') || t.has('annulus') || t.has('nucleus') || t.has('disc')) return 'cartilage';
  if (t.has('fascia') || t.has('fasciae') || t.has('aponeurosis') || t.has('septum') || t.has('membrane') || t.has('tract')) return 'fascia';
  if (t.has('capsule') || t.has('capsules') || t.has('joint') || t.has('joints') || t.has('articulation') || t.has('articulations')) return 'joint';
  if (t.has('bursa') || t.has('bursae')) return 'other';
  if (t.has('muscle') || t.has('muscles')) return 'muscle';
  for (const w of BONE_WORDS) if (t.has(w)) return 'bone';
  return null;
}

/** contenedor raíz → tipo (fallback cuando el patrón no decide). */
function inferByContainer(container) {
  const c = norm(container);
  if (/bones$/.test(c)) return 'bone';
  if (/muscles$/.test(c)) return 'muscle';
  if (/nerves$/.test(c)) return 'nerve';
  if (/(arteries|veins)$/.test(c)) return 'vessel';
  if (/cartilages$/.test(c)) return 'cartilage';
  if (/^ligaments$/.test(c)) return 'ligament';
  if (/^fascia$/.test(c)) return 'fascia';
  return null; // Bursae / Overlays / "capsules, ligaments, fasciae" → patrón u other
}

// ── catálogo por modelo ────────────────────────────────────────────────────────
const catalog = {};
const stats = {};
for (const [model, inv] of Object.entries(INV)) {
  // nombre → contenedor (primera aparición)
  const contOf = new Map();
  for (const [cat, names] of Object.entries(inv.containers ?? {})) for (const n of names) if (!contOf.has(n)) contOf.set(n, cat);
  const kinds = {};
  const count = {};
  for (const name of inv.names) {
    if (AUX_RE.test(name)) { kinds[name] = 'aux'; continue; }
    const k = inferByPattern(name) ?? inferByContainer(contOf.get(name) ?? '') ?? 'other';
    kinds[name] = k;
    count[k] = (count[k] ?? 0) + 1;
  }
  catalog[model] = kinds;
  const total = inv.names.length;
  stats[model] = { total, ...count };
}

// ── escribir meshCatalog.ts (preservando overrides manuales) ──────────────────
const CAT_PATH = join(ROOT, 'src/data/fitness/anatomy/meshCatalog.ts');
const MARK_START = '// ── OVERRIDES MANUALES (editar aquí; el generador preserva este bloque) ──';
const MARK_END = '// ── FIN OVERRIDES MANUALES ──';
const DEFAULT_OVERRIDES = `${MARK_START}
// kind por nombre runtime cuando patrón+contenedor no aciertan.
// "Circle/Plane/Vert/mesh.NNN" JAMÁS va aquí: son aux y el visor los oculta.
export const MESH_KIND_OVERRIDES: Record<string, Record<string, MeshKind>> = {
  // ejemplo: 'lower-limb': { 'Algun_nombre_raro': 'muscle' },
};
${MARK_END}`;
let overridesBlock = DEFAULT_OVERRIDES;
try {
  const prev = readFileSync(CAT_PATH, 'utf8');
  const m = prev.split(MARK_START)[1]?.split(MARK_END)[0];
  if (m !== undefined) overridesBlock = MARK_START + m + MARK_END;
} catch { /* primera generación */ }

const HEADER = `// src/data/fitness/anatomy/meshCatalog.ts
// AG-ANATOM ciclo 3 — TAREA 4: tipo (kind) de TODOS los meshes runtime por modelo.
// GENERADO por rag/anatomy/scripts/build-mesh-catalog.mjs — no editar la parte
// generada (los overrides manuales sí: bloque marcado abajo, preservado al regenerar).
// Uso en el visor: fallback de kind cuando un mesh no tiene estructura dueña en
// anatomyGraph (así los filtros de capa actúan sobre el modelo COMPLETO) y regla
// 'aux' (geometría auxiliar: oculta por defecto).

export type MeshKind =
  | 'muscle' | 'tendon' | 'ligament' | 'joint' | 'nerve'
  | 'bone' | 'vessel' | 'fascia' | 'cartilage' | 'other' | 'aux';

`;
const FOOTER = `

const AUX_RE = /^(circle|plane|vert|icosphere|cube|cylinder|sphere|cone|bezier|nurbs|curve|path|empty|mesh)([._]\\d+)?$/i;

/** kind de un mesh runtime: override manual → catálogo generado → aux por patrón → other. */
export function getMeshKind(model: string, meshName: string): MeshKind {
  return (
    MESH_KIND_OVERRIDES[model]?.[meshName] ??
    GENERATED_CATALOG[model]?.[meshName] ??
    (AUX_RE.test(meshName) ? 'aux' : 'other')
  );
}

/** meshes auxiliares del modelo (geometría helper; el visor los oculta). */
export function auxMeshesOf(model: string): string[] {
  return Object.entries(GENERATED_CATALOG[model] ?? {})
    .filter(([, k]) => k === 'aux')
    .map(([n]) => n);
}
`;

const body = `const GENERATED_CATALOG: Record<string, Record<string, MeshKind>> = ${JSON.stringify(catalog)};\n`;
writeFileSync(CAT_PATH, HEADER + overridesBlock + '\n\n' + body + FOOTER, 'utf8');

console.log('OK -> src/data/fitness/anatomy/meshCatalog.ts');
for (const [m, s] of Object.entries(stats)) {
  const nonOther = s.total - (s.other ?? 0);
  console.log(`  ${m}: ${s.total} nombres · clasificados ${nonOther} (${((nonOther / s.total) * 100).toFixed(1)}%) · ${Object.entries(s).filter(([k]) => k !== 'total').sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(' ')}`);
}
