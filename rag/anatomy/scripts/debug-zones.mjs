import fs from 'node:fs';
const bonesTs = fs.readFileSync('src/data/fitness/anatomy/bones.ts', 'utf8');
let n = 0; const zonas = {};
for (const block of bonesTs.split(/(?=id:)/)) {
  const zone = block.match(/zone:\s*`([a-z-]+)`/)?.[1];
  const mm = block.match(/modelMeshes:\s*\{[^}]*"overview-skeleton":\s*\[([^\]]+)\]/);
  if (mm) { n++; zonas[zone] = (zonas[zone] ?? 0) + 1; }
}
console.log('bloques con overview-skeleton:', n, JSON.stringify(zonas));
// nombres de skull segÃºn el grafo
const skull = [];
for (const block of bonesTs.split(/(?=id:)/)) {
  const zone = block.match(/zone:\s*`([a-z-]+)`/)?.[1];
  const mm = block.match(/modelMeshes:\s*\{[^}]*"overview-skeleton":\s*\[([^\]]+)\]/);
  if (zone === 'head-jaw' && mm) for (const m of mm[1].matchAll(/"([^"]+)"/g)) skull.push(m[1]);
}
console.log('skull por grafo:', skull.join(' | '));
