// Genera el PROMPT COMPLETO para agente web — un solo .md con TODO el contexto
const fs = require('fs');
const path = require('path');
const ROOT = process.cwd();

const read = (rel) => {
  try { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }
  catch { return `[ARCHIVO NO ENCONTRADO: ${rel}]`; }
};

let md = `# PROMPT — AG-ANATOM: Reparación del visor anatómico 3D compuesto

## CONTEXTO DEL PROYECTO

Plan Maestro OS: aplicación web personal (Astro + React + Three.js + TypeScript) desplegada en GitHub Pages (estático, sin backend). El repositorio usa un sistema multi-agente con worktrees. La rama de trabajo es \`agent/anatomia\` en el worktree \`E:\\Laboral\\.worktrees\\anatomia\\\`.

**AG-ANATOM** construye el visor anatómico 3D interactivo: un modelo compuesto que fusiona 5 GLB (esqueleto base, miembro superior, miembro inferior, mano, cráneo coloreado) en una sola escena Three.js con sistema de selección jerárquica, capas multi-seleccionables, aislamiento, ocultar/mostrar, y ficha técnica rica conectada a la base de datos anatómica.

**Stack**: Astro 5.18, React 19.2, Three.js 0.184, TypeScript, Vitest.

## ESTADO ACTUAL (ciclo 7 — 18 commits en agent/anatomia)

### Lo que FUNCIONA:
- Carga progresiva de 5 GLB con barra de progreso
- Layout 2 columnas: visor 3D izquierda + panel derecho con tabs (Estructuras/Ficha)
- Capas multi-seleccionables (12 tipos con color por tipo)
- Filtros de selección (qué tipos son clickeables)
- Focus por región (Completo/Cráneo/Mano/Miembro superior/inferior/Vértebras)
- Cráneo: toggle coloreado/vista general + slider de explosión
- Ficha rica con todos los campos de la BD + trazabilidad
- Reporte cobertura 3D (211/267 mapeadas)
- Jerarquía anatómica explícita (80 grupos, 267/267 estructuras)
- ROM articular verificado (19/19 articulaciones con cita)
- Overlay markers detectados (26 piezas "part of" mapeadas a su músculo padre)

### Lo que NO FUNCIONA (reportado por el usuario):
1. **Click sobre un músculo resalta solo la pieza individual, no el conjunto.** El primer click debería seleccionar el CONJUNTO entero (todas las piezas de la estructura), pero solo resalta la pieza individual golpeada por el ray.
2. **El highlight tras selección es demasiado alto** — se ve como una mancha blanca. Debe ser más sutil, como el hover.
3. **El hover debe reducirse a 35% de su intensidad actual.**
4. **El aislamiento no permite aislar subconjuntos dentro del conjunto aislado.** Solo se puede aislar el conjunto grande.
5. **La ficha muestra el nombre del grupo anatómico en vez del nombre de la estructura específica** al primer click.
6. **Body of sternum duplicado** en la vista completa (el skeleton lo trae Y upper-limb también).
7. **Fascias mal clasificadas** (Brachial fascia estaba en ligamentos en vez de fascia).

### CAUSA RAÍZ de los problemas 1-3:
La función \`resolveClick\` en composite.ts tiene una máquina de estados que alterna entre niveles (conjunto → subconjunto → pieza). El problema es que el PRIMER click sobre una estructura nueva ejecuta la rama que hace \`return { structureId, groupKey: null, pieceKey: null }\` (conjunto), pero el highlight effect NO está iluminando todas las piezas del conjunto — solo ilumina la pieza clickeada. Esto es porque el highlight effect usa \`unitPieceKeys(path, g.groups)\` que depende de que \`groupsByStructureRef\` tenga los grupos construidos para esa estructura, pero estos grupos se construyen con \`ensureGroups(ownerId)\` que se llama DENTRO del onClick handler, y el highlight effect corre ANTES de que el estado se haya propagado completamente.

Además, el doble click dispara 2 eventos click + 1 evento dblclick. Los 2 clicks ciclan la selección (conjunto → pieza → conjunto o similar), y el dblclick luego lee el estado modificado, produciendo resultados impredecibles.

### FIX del aislamiento negro:
El aislamiento usa claves explícitas (no test espacial). El problema era que \`aabbRef\` nunca se llenaba. Esto ya se corrigió: los AABB se calculan en carga. Pero el usuario reporta que el aislamiento sigue sin funcionar correctamente para subconjuntos.

## ARQUITECTURA DEL SISTEMA

### Flujo de datos:
1. **compositePlan.ts** — 1380 piezas generadas por analyze-merge.mjs desde los 8 GLBs. Cada pieza: {model, name, region, kind, container, hiddenByDup?}
2. **AnatomyViewer.tsx** — carga 5 GLBs progresivamente. Cada mesh se registra en piecesRef con su clave model:name. applyVisibility() decide visibilidad por pieza.
3. **anatomyGraph.ts** — 267 estructuras del grafo anatómico. Cada una tiene modelMeshes: {modelo: [nombres de nodo]}.
4. **anatomyHierarchy.ts** — 80 grupos anatómicos que agrupan las 267 estructuras.
5. **overlayMarkers.ts** — 26 piezas "part of" mapeadas a su músculo padre sólido.
6. **jointRom.ts** — ROM verificado por articulación con cita.
7. **viewerLogic.ts** — buildOwnerIndex (dueño específico), resolveClick (máquina de fases), pieceVisible.

### Selección jerárquica (resolveClick):
- 1er click en estructura nueva → {structureId, groupKey: null, pieceKey: null} (CONJUNTO)
- 2º click en misma estructura → baja al subconjunto (grupo) o a la pieza si el grupo es hoja
- 3º click → baja a la pieza individual
- Click en la misma pieza → mantiene (no sube)

### Highlight jerárquico:
- Unidad seleccionada → emissive fuerte + color shift
- Contenedor padre → emissive suave
- Resto → prístino + tinte por tipo

### Aislamiento:
- Doble click → aisla las piezas de la unidad actual (claves explícitas)
- Doble click fuera → desaisla
- El aislamiento usa un Set<string> de claves model:name

## TAREAS PARA EL AGENTE WEB

### 1. FIX: Selección de conjunto (primer click)
El primer click sobre cualquier pieza debe seleccionar la ESTRUCTURA COMPLETA (todas sus piezas), no solo la pieza individual. El highlight debe cubrir todas las piezas de la estructura. El problema está en la interacción entre resolveClick (que sí devuelve conjunto), el highlight effect (que puede no estar iluminando todas las piezas), y el hover handler (que puede estar restaurando piezas del highlight).

### 2. FIX: Highlight visible y consistente
El highlight de selección debe ser claramente visible en TODOS los músculos (no solo biceps/triceps). La intensidad debe ser sutil (se ve el músculo como tal, no una mancha blanca). El hover debe ser 35% de su intensidad actual.

### 3. FIX: Aislamiento jerárquico
El aislamiento debe permitir: aislar el conjunto → luego aislar un subconjunto dentro → luego aislar una pieza dentro del subconjunto. Cada nivel de aislamiento reemplaza al anterior.

### 4. FIX: Body of sternum duplicado
El overview-skeleton trae Body_of_sternum y upper-limb también lo trae en su contenedor "Thorax - bones". El dedup por AABB no lo captura. Verificar por qué y corregir.

### 5. FIX: Fascias mal clasificadas
Brachial_fasciar estaba clasificada como ligamento. Ya se corrigió en el kindFromContainer pero verificar que todas las fascias estén correctas.

### 6. Lista de estructuras sin mapear
Generar lista clara de las 56 estructuras sin mapping 3D, clasificadas por: (a) sin GLB que las contenga (torso/cabeza), (b) parte de otra pieza, (c) overlay semitransparente.

## ARCHIVOS FUENTE COMPLETOS

`;

// Añadir cada archivo fuente
const sourceFiles = [
  'src/components/fitness/anatomy/AnatomyViewer.tsx',
  'src/components/fitness/anatomy/composite.ts',
  'src/components/fitness/anatomy/viewerLogic.ts',
  'src/data/fitness/anatomy/anatomyHierarchy.ts',
  'src/data/fitness/anatomy/overlayMarkers.ts',
  'src/data/fitness/anatomy/jointRom.ts',
  'src/data/fitness/anatomy/compositePlan.ts',
  'src/data/fitness/anatomy/types.ts',
];

for (const f of sourceFiles) {
  const content = read(f);
  const ext = f.endsWith('.tsx') ? 'tsx' : 'ts';
  md += `\n### ${f}\n\n\`\`\`${ext}\n${content}\n\`\`\`\n`;
}

// Tests
const testFiles = [
  'src/components/fitness/anatomy/__tests__/composite.test.ts',
  'src/components/fitness/anatomy/__tests__/viewerLogic.test.ts',
  'src/components/fitness/anatomy/__tests__/jointRom.test.ts',
];
md += `\n## TESTS\n\n`;
for (const f of testFiles) {
  const content = read(f);
  md += `\n### ${f}\n\n\`\`\`ts\n${content}\n\`\`\`\n`;
}

// STATUS
md += `\n## STATUS-ANATOMIA.md\n\n${read('docs/agents/STATUS-anatomia.md')}\n`;

// Análisis de overlays
md += `\n## ANÁLISIS DE OVERLAYS\n\n\`\`\`json\n${read('rag/anatomy/extracciones/overlay-analysis.json')}\n\`\`\`\n`;

// Cobertura 3D
md += `\n## COBERTURA 3D\n\n${read('rag/anatomy/extracciones/cobertura-3d.md')}\n`;

// Merge analysis (solo el resumen, no las 1380 piezas)
md += `\n## MERGE ANALYSIS (resumen)\n\n${read('rag/anatomy/extracciones/merge-analysis.md')}\n`;

// Estructura de archivos del proyecto anatómico
md += `\n## ESTRUCTURA DE ARCHIVOS\n\n\`\`\`\n`;
const listDir = (dir, prefix) => {
  const items = fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true });
  for (const item of items) {
    if (item.name.startsWith('.') || item.name === 'node_modules') continue;
    md += `${prefix}${item.name}${item.isDirectory() ? '/' : ''}\n`;
    if (item.isDirectory()) listDir(path.join(dir, item.name), prefix + '  ');
  }
};
listDir('src/data/fitness/anatomy', 'src/data/fitness/anatomy/');
listDir('src/components/fitness/anatomy', 'src/components/fitness/anatomy/');
md += `\`\`\`\n`;

fs.writeFileSync('PROMPT-AG-ANATOM-VISOR.md', md);
console.log(`OK → PROMPT-AG-ANATOM-VISOR.md (${Math.round(fs.statSync('PROMPT-AG-ANATOM-VISOR.md').size / 1024)}KB)`);
