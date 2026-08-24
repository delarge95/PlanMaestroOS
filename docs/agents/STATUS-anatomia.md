# STATUS — AG-ANATOM (rama `agent/anatomia`)

> Ciclo anatomía COMPLETO (2026-08-23): tareas 1-7 + feedback del usuario
> (F1/F2) + reconciliación RAG con main. Merge de main al día (workflow
> docs/orquestacion, rag/anatomy Gray's, restauración UX fitness). Sin push;
> commits locales.

## Territorio

`src/components/fitness/anatomy/**`, `src/data/fitness/anatomy/**`,
`src/pages/app/fitness/anatomy.astro`, `src/pages/app/fitness/library/muscles.astro`,
`rag/anatomy/**`, `public/models/anatomy/**`, `docs` propios. NO tocado:
resto de fitness (TodayRoutineStack y restaurados de main), nutrition,
ui/tokens/nav (ticket AG-CORE).

## Mapeo 3D logrado (inventario → grafo → visor)

**Activos**: 8 GLB Draco-comprimidos en `public/models/anatomy/` (~23 MB
total, ≤6.6 MB c/u; decoder Draco self-hosted en `/models/anatomy/draco/`,
sin CDN). Inventario con parser propio (`rag/anatomy/scripts/inventory-glb.mjs`,
`mesh-names.json`).

| Modelo | Estructuras del grafo | Peso |
|---|---|---|
| lower-limb | 96 | 5.9 MB |
| upper-limb | 81 | 6.6 MB |
| overview-skeleton | 58 | 3.3 MB |
| hand | 36 | 3.1 MB |
| colored-skull-base / exploded-skull / overview-colored-skull | 13 c/u | 1.1 MB |
| vertebrae | 3 | 0.2 MB |

**Grafo** (`src/data/fitness/anatomyGraph.ts`, datos en
`src/data/fitness/anatomy/`): **267 estructuras** con mapping GLB por
`modelMeshes` (nodo y/o nombre de geometría):

| Tipo | Total | Con mapping 3D |
|---|---|---|
| músculos | 146 | 83 |
| huesos | 39 | 38 |
| nervios | 22 | 12 |
| ligamentos | 21 | 21 |
| tendones | 20 | 13 |
| articulaciones | 19 | 18 |
| **total** | **267** | **185 (69%)** |

Cobertura pendiente: músculos sin GLB dedicado (torso/trunk detallado) y
nervios (los modelos no traen capas neurales nombradas). El esqueleto
axial está cubierto por overview-skeleton/vertebrae.

## Features del visor (tareas 4, 4-FINAL y feedback F1)

`/app/fitness/anatomy` — `AnatomyViewer.tsx` (three.js puro, sin R3F):

- Carga diferida por modelo + limpieza de VRAM (dispose de geometrías,
  materiales, texturas y decoders al cambiar modelo).
- Selección por click/tap con **raycasting** (tap vs drag >6px) y **pan**
  (OrbitControls `enablePan`).
- **Resalte inequívoco** de la selección: emissive fuerte + color teñido +
  **outline inverted-hull** (copia de la geometría con caras traseras,
  excluida del raycast).
- **Centrado**: botón "Centrar" + atajo **F** (mantiene la orientación de
  cámara; encuadre sobre la caja de la pieza).
- **Capas ocluidas**: raycast cámara→pieza; lo que se interpone pasa a
  translúcido (opacidad 0.12, clone-on-write del material porque los GLB
  comparten material). Se re-computa al seleccionar/aislar/filtrar/centrar
  (no por frame: coste asumido solo en eventos).
- **Filtros por categoría** del grafo: Todo / Músculos / Tendones+ligamentos
  / Nervios / Huesos+articulaciones (visibilidad por pieza vía
  `meshOwnersRef`).
- **Aislar pieza** (ocultar todo lo demás, Esc para salir) + ocultar/mostrar
  capas por categoría.
- Deep-link `?model=&structure=` al montar; cráneo explosionado conmutable;
  hover con nombre; reset de cámara; panel lateral filtrable; móvil
  (useIsMobile) y `prefers-reduced-motion` → render estático de una pasada.
- **StructureThumbnail**: miniatura 3D interactiva por estructura (modelo
  completo en "fantasma" 0.07 + pieza resaltada, auto-rotación, arrastre
  para rotar, clic abre el visor con la pieza preseleccionada). Cache GLTF
  compartido `gltfCache.ts` (geometrías reutilizadas; materiales clonados
  por consumidor).

## Conexión BD (tareas 5a-5c + F2)

`/app/fitness/library/muscles` — `anatomy/LibraryMuscles.tsx` (montado por
`muscles.astro`; el `fitness/LibraryMuscles.tsx` de main es otro componente
del workspace restaurado y NO se toca):

- Navegación por zona (14 zonas) y tipo (músculos/tendones/ligamentos/
  articulaciones/nervios/huesos) + vistas de músculo por acción y
  "primarios de entrenamiento" + buscador es/en/sinónimos.
- Cada ficha: **miniatura 3D** (StructureThumbnail) + **"Ver en 3D"**
  (`/app/fitness/anatomy?model=X&structure=Y`, mejor modelo =
  `bestModelKeyForStructure`) + **"Ejercicios que la cargan"**
  (READ de exerciseDatabase vía `findExercisesForMuscle`: match por
  nombre/sinónimos con índice de tokens; **fallback por zona**
  `findExercisesForZone` para tendones/ligamentos/articulaciones/nervios
  sin match directo — label "cargan la zona · X").
- Visor ↔ BD en ambos sentidos (desde la ficha del visor, "Ver ficha
  completa en Músculos" con `?structure=`).

## RAG anatomía (tareas 6-7 + reconciliación con main)

- **Fuentes** en `rag/anatomy/fuentes/`: 5 md de Levangie & Norkin 6ª ed
  (extracción local de la capa de texto del PDF, 5 articulaciones clave,
  prefijo de chunk `njs6-`) + 5 md de Gray's for Students 4ª (curados por
  el usuario vía Gemini desde main, prefijo `grays-`).
- `rag/anatomy.json` reconstruido con el builder:
  `npx tsx scripts/build_rag/index.ts --domain anatomy` → **2 sources,
  116 chunks** (84 Gray's + 32 Norkin; sin colisión de ids por prefijo) +
  `--index` (4 dominios). Manifest `rag/anatomy/manifest.json` extendido
  con la fuente Levangie (book, expert-book) sin tocar la de Gray's.
- Extracciones de **Moore (anatomía clínica), MacIntosh (biomecánica) y
  Enoka (neuromecánica) ESTÁN SIENDO CURADAS POR EL USUARIO EN LOTES**;
  llegarán a `rag/anatomy/fuentes/` y bastará rebuild del dominio + index
  para incorporarlas.

## Decisiones clave (por si hay que defenderlas o revertirlas)

1. **Three.js puro, sin react-three-fiber**: menos dependencias y control
   directo del ciclo de vida/VRAM en un visor con carga/descarga intensiva
   de modelos. Los handlers del canvas viven fuera de React; el estado UI
   se sincroniza vía refs espejo (`loadingRef`, `selectedStructureRef`, …).
2. **Outline inverted-hull** (copia de geometría escalada 1.035 con
   BackSide) en vez de postproceso OutlinePass: cero dependencias nuevas,
   suficiente para el resalte inequívoco pedido.
3. **Oclusores con clone-on-write de material**: los GLB comparten
   material entre meshes; mutar opacidad contaminaría piezas hermanas. El
   resalte de selección resetea oclusores ANTES de aplicar (si no, el
   highlight caería sobre un clon y se perdería al recomputar).
4. **Miniatura solo en la ficha seleccionada** (no una por fila de la
   lista): cada miniatura es un WebGLRenderer propio y el navegador limita
   contextos (~8-16); la ficha garantiza ≤1-2 vivos simultáneos.
5. **Oclusores no se recomputan por frame**: raycast múltiple por frame es
   caro; se actualiza en eventos (selección/filtro/aislar/centrar). Al
   orbitar, la translucidez queda congelada de la última vista — aceptable
   y documentado aquí.
6. **Matcher de ejercicios por tokens** (nombre EN normalizado + sinónimos
   curados + índice invertido) y **fallback por zona** con tokens típicos
   de exerciseDatabase por zona; `head-jaw` sin tokens → sección oculta.
7. **`pendingCitation: 267`**: todo el grafo nació con `sourceRefs
   pending=true`; la verificación bibliográfica capítulo/página llega con
   los lotes curados de Moore/MacIntosh/Enoka (flujo arriba).

## Validación

- `npx astro check`: **0 errors, 0 warnings** (requiere
  `NODE_OPTIONS=--max-old-space-size=8192` en esta máquina; hints
  restantes son del decoder Draco minificado y scripts .mjs ajenos).
- `npm test`: **18 archivos, 170+ tests verdes** (incl.
  `anatomyGraph.test.ts` con 14: integridad de zonas/modelMeshes,
  buscador, matcher de ejercicios directo y por zona).

## Pendientes

1. **Lotes curados del usuario** (Moore/MacIntosh/Enoka → fuentes →
   `--domain anatomy` + `--index`) y verificación bibliográfica
   (`pending` → citado) del grafo.
2. Cobertura 3D de músculos de torso y nervios (depende de GLB con capas
   nombradas; hoy 83/146 y 12/22).
3. ROM numérico por articulación (hoy `romNote` textual en algunas
   articulaciones).
4. Recompute de oclusores en orbit continuo (si el usuario lo pide;
   hoy solo en eventos).
