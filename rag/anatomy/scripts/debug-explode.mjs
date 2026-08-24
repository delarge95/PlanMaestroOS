import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const GLB_DIR = 'public/models/anatomy';
// reutilizar el parseo del script principal vía import dinámico no trivial — replico lo mínimo:
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
const base = parseGlb(readFileSync(join(GLB_DIR, 'colored-skull-base.glb')));
const exp = parseGlb(readFileSync(join(GLB_DIR, 'exploded-skull.glb')));
const pieceInfo = (glb, ni) => {
  const node = glb.nodes[ni];
  if (node.mesh === undefined) return null;
  const mesh = glb.meshes[node.mesh];
  const acc = glb.accessors[mesh.primitives[0].attributes.POSITION];
  return { name: node.name, verts: acc.count, min: acc.min, max: acc.max, size: acc.max.map((v, i) => +(v - acc.min[i]).toFixed(3)), t: node.translation ?? [0,0,0] };
};
const basePieces = (base.scenes[0].nodes ?? []).flatMap((n, ) => { const out = []; const walk = (i) => { const p = pieceInfo(base, i); if (p) out.push(p); for (const c of base.nodes[i].children ?? []) walk(c); }; walk(n); return out; });
const expPieces = (exp.scenes[0].nodes ?? []).flatMap((n) => { const out = []; const walk = (i) => { const p = pieceInfo(exp, i); if (p) out.push(p); for (const c of exp.nodes[i].children ?? []) walk(c); }; walk(n); return out; });
console.log('base:', basePieces.length, ' exploded:', expPieces.length);
const f = basePieces.find((p) => /Frontal/i.test(p.name));
const e = expPieces.find((p) => /Frontal/i.test(p.name));
console.log('base Frontal:', JSON.stringify(f));
console.log('expl Frontal:', JSON.stringify(e));
// comparar por verts+size
let matched = 0;
for (const ep of expPieces) {
  const hit = basePieces.find((bp) => bp.verts === ep.verts && bp.size.every((v, i) => Math.abs(v - ep.size[i]) <= 0.005));
  if (hit) matched++;
}
console.log('pares por verts+tamaño:', matched, '/', expPieces.length);
// sin par:
const sinPar = expPieces.filter((ep) => !basePieces.find((bp) => bp.verts === ep.verts && bp.size.every((v, i) => Math.abs(v - ep.size[i]) <= 0.005)));
console.log('sin par:', sinPar.map((p) => `${p.name}(v${p.verts},size${p.size})`));
// Overlays completos de lower-limb
const low = parseGlb(readFileSync(join(GLB_DIR, 'lower-limb.glb')));
const overlays = [];
const walk2 = (i) => { const n = low.nodes[i]; if (n.mesh !== undefined && n.name && /overlay/i.test(low.nodes[n.parent ?? -1]?.name ?? '') === false) {} };
// contenedor padre: recorrer hijos de raíces
for (const r of low.scenes[0].nodes ?? []) {
  const rootNode = low.nodes[r];
  for (const c of rootNode.children ?? []) {
    const cont = low.nodes[c];
    if (/overlay/i.test(cont.name ?? '')) {
      for (const gc of cont.children ?? []) if (low.nodes[gc]?.name) overlays.push(low.nodes[gc].name);
    }
  }
}
console.log('Overlays lower-limb (' + overlays.length + '):', overlays.join(' | '));
