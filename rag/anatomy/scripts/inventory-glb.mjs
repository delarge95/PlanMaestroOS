// rag/anatomy/scripts/inventory-glb.mjs
// AG-ANATOM — Tarea 1: inventario de modelos GLB.
// Parsea el chunk JSON de cada GLB (header 12 bytes + chunks BIN/JSON según spec
// glTF 2.0) y dumpea jerarquia de nodos, nombres de meshes, primitivas y materiales.
// Uso: node rag/anatomy/scripts/inventory-glb.mjs [carpeta-con-glb]
import { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const GLB_MAGIC = 0x46546c67; // "glTF" little-endian (bytes 67 6C 54 46)
const CHUNK_JSON = 0x4e4f534a; // "JSON"
const CHUNK_BIN = 0x004e4942; // "BIN"

function parseGlbJson(buf) {
  if (buf.readUInt32LE(0) !== GLB_MAGIC) throw new Error('magic glTF no encontrado');
  const version = buf.readUInt32LE(4);
  const totalLength = buf.readUInt32LE(8);
  if (totalLength !== buf.length) throw new Error(`longitud declarada ${totalLength} != archivo ${buf.length}`);
  let offset = 12;
  let json = null;
  let binChunk = null;
  while (offset < buf.length) {
    const chunkLength = buf.readUInt32LE(offset);
    const chunkType = buf.readUInt32LE(offset + 4);
    const data = buf.subarray(offset + 8, offset + 8 + chunkLength);
    if (chunkType === CHUNK_JSON) {
      json = JSON.parse(Buffer.from(data).toString('utf8'));
    } else if (chunkType === CHUNK_BIN) {
      binChunk = { byteLength: chunkLength };
    }
    offset += 8 + chunkLength + ((4 - (chunkLength % 4)) % 4); // padding a 4 bytes
  }
  if (!json) throw new Error('chunk JSON ausente');
  return { version, json, binChunk };
}

function countPrimitives(gltf) {
  let prims = 0;
  let verts = 0;
  const meshes = gltf.meshes ?? [];
  for (const m of meshes) {
    for (const p of m.primitives ?? []) {
      prims += 1;
      if (p.attributes?.POSITION != null) {
        const acc = gltf.accessors?.[p.attributes.POSITION];
        if (acc) verts += acc.count;
      }
    }
  }
  return { prims, verts };
}

function nodeName(gltf, idx) {
  const n = gltf.nodes?.[idx];
  return n ? (n.name ?? `<node-${idx}>`) : `<node-${idx}>`;
}

function dumpHierarchy(gltf, out) {
  const scenes = gltf.scenes ?? [];
  const roots = scenes[gltf.scene ?? 0]?.nodes ?? [];
  const lines = [];
  const walk = (idx, depth) => {
    const n = gltf.nodes?.[idx];
    if (!n) return;
    const pad = '  '.repeat(depth);
    const meshName = n.mesh != null ? ` [mesh:${gltf.meshes?.[n.mesh]?.name ?? n.mesh}]` : '';
    const skin = n.skin != null ? ' (skinned)' : '';
    const childCount = n.children?.length ? ` {${n.children.length} hijos}` : '';
    lines.push(`${pad}- ${n.name ?? `<node-${idx}>`}${meshName}${skin}${childCount}`);
    for (const c of n.children ?? []) walk(c, depth + 1);
  };
  for (const r of roots) walk(r, 0);
  out.push(...lines.slice(0, 400)); // cap defensivo
  if (lines.length > 400) out.push(`  … (${lines.length - 400} líneas más)`);
}

function kebab(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const srcDir = process.argv[2] ?? join('..', '..', '..', '_pdf_biblia', 'Planeacion_Integral', '3D assets');
const files = readdirSync(srcDir).filter((f) => f.toLowerCase().endsWith('.glb'));
const report = [`# Inventario de modelos GLB — capa anatómica`, ``, `> Generado por \`rag/anatomy/scripts/inventory-glb.mjs\` (AG-ANATOM, tarea 1).`, `> Fuente: \`${srcDir}\` · ${files.length} GLB.`, ``];
const summary = [];

for (const f of files.sort()) {
  const path = join(srcDir, f);
  const bytes = statSync(path).size;
  let block = [];
  try {
    const { version, json, binChunk } = parseGlbJson(readFileSync(path));
    const { prims, verts } = countPrimitives(json);
    const materials = (json.materials ?? []).map((m) => m.name ?? '<material>');
    const meshNames = (json.meshes ?? []).map((m) => m.name ?? '<mesh>');
    summary.push({ file: f, kb: Math.round(bytes / 1024), meshes: meshNames.length, prims, verts, materials: materials.length, kebab: kebab(f.replace(/\.glb$/i, '')) + '.glb' });
    block = [`## ${f}`, ``, `- **Peso:** ${(bytes / 1024 / 1024).toFixed(2)} MB (${bytes.toLocaleString('en')} bytes)`, `- **glTF version:** ${version}`, `- **Scenes:** ${(json.scenes ?? []).length} (activa: ${json.scene ?? 0}) · **Nodes:** ${(json.nodes ?? []).length} · **Meshes:** ${(json.meshes ?? []).length} · **Primitivas:** ${prims} · **Vértices (aprox):** ${verts.toLocaleString('en')}`, `- **Materiales:** ${materials.length}${materials.length ? ` — ${materials.slice(0, 30).join(', ')}${materials.length > 30 ? ' …' : ''}` : ''}`, `- **Extensions:** ${(json.extensionsUsed ?? []).join(', ') || 'ninguna'}${json.extensionsRequired?.length ? ` (requeridas: ${json.extensionsRequired.join(', ')})` : ''}`, `- **Animations:** ${(json.animations ?? []).length}`, `- **BIN chunk:** ${binChunk ? `${Math.round(binChunk.byteLength / 1024)} KB` : 'ausente (buffers externos)'}`, `- **Kebab destino:** \`public/models/anatomy/${kebab(f.replace(/\.glb$/i, ''))}.glb\``, ``, `### Jerarquía de nodos`, ...([] && []), ...(() => { const l = []; dumpHierarchy(json, l); return l; })(), ``, `### Nombres de meshes (${meshNames.length})`, ...(meshNames.length <= 120 ? meshNames.map((n) => `- ${n}`) : meshNames.slice(0, 120).map((n) => `- ${n}`).concat([`… ${meshNames.length - 120} más`]))];
  } catch (err) {
    block = [`## ${f}`, ``, `**ERROR parseando:** ${err.message}`];
    summary.push({ file: f, kb: Math.round(bytes / 1024), error: err.message });
  }
  report.push(...block, ``);
}

report.push(`## Resumen`, ``, `| Archivo | Peso | Meshes | Primitivas | Vértices | Materiales | Destino kebab |`, `|---|---|---|---|---|---|---|`);
for (const s of summary) report.push(`| ${s.file} | ${(s.kb / 1024).toFixed(2)} MB | ${s.meshes ?? '?'} | ${s.prims ?? '?'} | ${s.verts?.toLocaleString('en') ?? '?'} | ${s.materials ?? '?'} | ${s.kebab ?? '—'} |`);

mkdirSync(join('rag', 'anatomy', 'extracciones'), { recursive: true });
const outPath = join('rag', 'anatomy', 'extracciones', 'modelos-inventario.md');
writeFileSync(outPath, report.join('\n'), 'utf8');
console.log(`OK -> ${outPath} (${files.length} GLB)`);
for (const s of summary) console.log(`  ${s.file}: ${(s.kb / 1024).toFixed(2)} MB, ${s.meshes} meshes${s.error ? ` ERROR ${s.error}` : ''}`);
