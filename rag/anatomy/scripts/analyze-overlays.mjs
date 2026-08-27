import fs from 'node:fs';
import path from 'node:path';
const GLB_DIR = 'public/models/anatomy';

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

const sanitize = (s) => String(s ?? '').replace(/\s/g, '_').replace(/[[\].:/]/g, '');
function makeUniquifier() {
  const used = new Map();
  return (name) => {
    const s = sanitize(name);
    if (!s) return s;
    if (used.has(s)) { const n = used.get(s) + 1; used.set(s, n); return `${s}_${n}`; }
    used.set(s, 0);
    return s;
  };
}

const MODELS = ['overview-skeleton', 'lower-limb', 'upper-limb', 'hand', 'colored-skull-base', 'overview-colored-skull', 'exploded-skull', 'vertebrae'];
const results = {};

for (const model of MODELS) {
  const glb = parseGlb(fs.readFileSync(path.join(GLB_DIR, `${model}.glb`)));
  const materials = glb.materials ?? [];
  const meshes = glb.meshes ?? [];
  const nodes = glb.nodes ?? [];
  const uniquify = makeUniquifier();

  const transparentMats = new Set();
  materials.forEach((m, i) => {
    const alphaMode = m.alphaMode ?? 'OPAQUE';
    const alpha = m.pbrMetallicRoughness?.baseColorFactor?.[3] ?? 1;
    if (alphaMode === 'BLEND' || alpha < 1) transparentMats.add(i);
  });

  const solid = [], overlay = [];
  const walk = (ni, container) => {
    const node = nodes[ni];
    if (!node) return;
    const runtimeName = uniquify(node.name);
    if (node.mesh !== undefined) {
      const mesh = meshes[node.mesh];
      const matIndices = mesh.primitives?.map(p => p.material).filter(m => m !== undefined) ?? [];
      const isTransparent = matIndices.some(mi => transparentMats.has(mi));
      if (isTransparent) overlay.push({ name: runtimeName, container });
      else solid.push({ name: runtimeName, container });
    }
    for (const c of node.children ?? []) walk(c, container);
  };
  for (const r of glb.scenes?.[0]?.nodes ?? []) walk(r, '');

  results[model] = {
    solid: solid.length,
    overlay: overlay.length,
    overlayNames: overlay.map(o => o.name),
    overlayContainers: [...new Set(overlay.map(o => o.container))],
  };
  console.log(`${model}: sólidos=${solid.length} overlays=${overlay.length}`);
  if (overlay.length) console.log(`  overlays:`, overlay.slice(0, 10).map(o => o.name).join(' | '));
}

fs.writeFileSync('rag/anatomy/extracciones/overlay-analysis.json', JSON.stringify(results, null, 1));
console.log('\nOK → overlay-analysis.json');
