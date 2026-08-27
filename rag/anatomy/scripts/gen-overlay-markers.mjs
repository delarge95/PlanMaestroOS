// Re-analiza el compuesto para clasificar piezas en:
// - 'overlay' (marcador de región sobre el músculo padre — NO aislable independiente)
// - kind real (muscle, bone, ligament, fascia, etc.)
// Criterio: nombre contiene "part of" o "head of" Y existe una pieza sólida
// del mismo músculo padre en el mismo modelo.
const fs = require('fs');
const j = JSON.parse(fs.readFileSync('rag/anatomy/extracciones/merge-analysis.json', 'utf8'));
const piezas = j.plan.composite;

// detectar "part of" / "head of" en el nombre
const isRegionMarker = (name) => /\b(part of|head of)\b/i.test(name);

// para cada marcador, buscar el músculo padre sólido en el mismo modelo
const overlayMap = {};
for (const p of piezas) {
  if (!isRegionMarker(p.name)) continue;
  // extraer el nombre base del músculo: "Clavicular_part_of_deltoid_muscler" → "deltoid_muscler"
  const baseMatch = p.name.match(/(?:part|head)_of_([a-z_]+)/i);
  if (!baseMatch) continue;
  const baseName = baseMatch[1];
  // buscar pieza sólida del mismo modelo cuyo nombre contenga el base
  const parent = piezas.find(c => 
    c.model === p.model && 
    !isRegionMarker(c.name) &&
    c.name.toLowerCase().includes(baseName.toLowerCase().replace(/_/g, ''))
  );
  if (parent) {
    overlayMap[pieceKeyName(p.model, p.name)] = pieceKeyName(parent.model, parent.name);
  }
}

function pieceKeyName(model, name) { return `${model}:${name}`; }

// contar
const markers = Object.keys(overlayMap);
console.log('Marcadores de región detectados:', markers.length);
for (const k of markers) {
  console.log(' ', k, '→', overlayMap[k]);
}

// generar el archivo de mapping
const out = `// src/data/fitness/anatomy/overlayMarkers.ts
// AG-ANATOM — GENERADO. Marcadores de región sobre músculos padre.
// Estos pieces NO son aislables independientemente: al seleccionarlos,
// resaltan el músculo padre + aumentan su opacidad para mostrar la región.

export const OVERLAY_MARKERS: Record<string, string> = {
`;
for (const [k, v] of Object.entries(overlayMap)) {
  out += `  '${k}': '${v}',\n`;
}
out += `};

/** Retorna la clave del músculo padre si la pieza es un marcador de región. */
export function overlayParent(pieceKey: string): string | null {
  return OVERLAY_MARKERS[pieceKey] ?? null;
}

/** Todas las claves de marcadores. */
export function overlayMarkerKeys(): Set<string> {
  return new Set(Object.keys(OVERLAY_MARKERS));
}
`;
fs.writeFileSync('src/data/fitness/anatomy/overlayMarkers.ts', out);
console.log('OK → overlayMarkers.ts');
