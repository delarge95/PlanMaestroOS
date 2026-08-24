# STATUS — AG-ANATOM (rama `agent/anatomia`)

> Ciclo 3 COMPLETO (2026-08-23): MAPPING REAL GLB ↔ anatomyGraph. El ciclo 2
> dejaba selección/aislamiento/filtros rotos: solo el 11% de los 722 mapeos
> coincidía con los GLB reales (4 modelos al 0%). Ciclo 3: **0 mapeos huérfanos
> verificados por test**, catálogo por tipo para el modelo completo y filtros
> operativos. Sin push; commits locales.

## Territorio

`src/components/fitness/anatomy/**`, `src/data/fitness/anatomy/**`,
`src/pages/app/fitness/anatomy.astro`, `src/pages/app/fitness/library/muscles.astro`,
`rag/anatomy/**`, `public/models/anatomy/**`, `docs` propios. NO tocado:
resto de fitness (TodayRoutineStack y restaurados de main), nutrition,
ui/tokens/nav (ticket AG-CORE).

## Ciclo 3 — hallazgos clave (por qué fallaba TODO el mapping)

1. **Los nombres reales viven en `nodes[].name`**, no en `meshes[].name`:
   el inventario del ciclo 2 leyó meshDefs (basura de Blender "mesh.228",
   "Vert.015", "Circle.007" o vacíos) → "0 meshes" en cráneos/vertebrae y
   un "mesh" en overview-skeleton.
2. **El visor renombra todo en runtime** (three.js GLTFLoader):
   `PropertyBinding.sanitizeNodeName` (espacios→`_`, elimina `. : / [ ]` —
   "muscle.r"→"muscler", el punto NO deja separador) + `createUniqueName`
   (`_N` en colisiones; el NODO reserva nombre antes que el mesh → el nombre
   del meshDef nunca sobrevive). El grafo mapeaba nombres crudos con
   espacios/puntos que en la escena no existen.
3. **Los 43 "Circle.NNN" de lower-limb NO son basura en escena**: son los
   meshDefs de las bursas (nodos bien nombrados bajo la raíz "Bursae"). La
   regla `aux` queda como defensa ante helper que sí llegue nombrada.
4. **Las raíces de escena son contenedores de categoría** (Bones, Muscles,
   Nerves, "Arm - muscles", …): el filtro de capas anterior los ocultaba al
   no tener dueño → escondía el modelo entero. Ahora el catálogo les da kind.

## Ciclo 3 — mapeo logrado (todo verificado contra nombres runtime)

Pipeline `rag/anatomy/scripts/remap.ts` (capas exacto→agresivo→alias manual
+ resolución de "mejor dueño"; aliases en `meshAliases.ts`). Reporte:
`rag/anatomy/extracciones/remap-report.md`; inventario canónico:
`rag/anatomy/extracciones/mesh-names.json` + `modelos-inventario.md`
(convención de nombres por GLB). Validación: `npx tsx
rag/anatomy/scripts/coverage-report.ts`.

| Modelo | Nombres runtime | Estructuras seleccionables | Nombres con dueño | % clasificado (meshCatalog) |
|---|---|---|---|---|
| upper-limb | 575 | 96 | 164 | 95.3% |
| lower-limb | 462 | 107 | 118 | 91.3% |
| hand | 235 | 41 | 63 | 98.3% |
| overview-skeleton | 147 | 59 | 75 | 100% |
| colored-skull-base / exploded / overview-colored | 30/30/31 | 12 c/u | 12 c/u | 100% |
| vertebrae | 4 | 5 | 3 | 100% |

**Grafo: 267 estructuras · 211 con mapping 3D (79%) · 640 mapeos
estructura→mesh, 0 huérfanos** (`meshMapping.test.ts` compara cada nombre
contra mesh-names.json). Por tipo: huesos 39/39, ligamentos 21/21,
articulaciones 19/19, músculos 98/146, nervios 18/22, tendones 16/20.

### Decisiones de alias (defendibles)

- **Cabezas/partes como multi-mesh**: bíceps/tríceps/gastrocnemios por
  cabezas; deltoides clavicular/acromial/espinal ↔ Deltoideus ant/med/post;
  pectoral mayor por 4 cabezas; trapecio entero + 3 partes.
- **Articulaciones → huesos constituyentes** (los GLB no traen "articulación"
  como pieza): hombro=húmero+escápula, rodilla=fémur+tibia+rótula, etc.
- **Aproximaciones documentadas**: tendones sin mesh propio → vientre
  muscular o vaina (supraspinatus, psoas-iliaco, flexores de la mano,
  De Quervain = vainas APL+EPB); VMO → vasto medial.
- **Typos del modelo resueltos por alias**: "Schiatic nerve" (isquiático),
  "cuteneous", "Musculocutaneus", "Articularis genus", "Iliolumbar ligament .r".
- **Honestidad por encima del número**: referencias sin contraparte real
  ELIMINADAS (p.ej. temporalis/masetero ya NO mapean el hueso temporal);
  las estructuras se conservan para la BD de Músculos.

## meshCatalog (T4) — filtros sobre el modelo COMPLETO

`src/data/fitness/anatomy/meshCatalog.ts` (generado por
`rag/anatomy/scripts/build-mesh-catalog.mjs`): kind de TODOS los ~1500
nombres runtime (muscle|tendon|ligament|joint|nerve|bone|vessel|fascia|
cartilage|other|aux) por patrón anatómico > contenedor de categoría del GLB
> other, con overrides manuales preservados entre regeneraciones. El visor
(`applyVisibility`, cambio mínimo y aditivo) usa el catálogo como fallback
cuando un mesh no tiene estructura dueña — así los contenedores
Bones/Muscles/… participan de la visibilidad jerárquica — y la geometría
`aux` queda oculta por defecto. El tokenizador resuelve el glued-r del
sanitize ("ligamentr"→"ligament", "Femurr"→"Femur").

## Features del visor (tareas 4, 4-FINAL, feedback F1 y ciclo 3 T4)

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
- `npm test`: **21 archivos, 185 tests verdes**, incl. los 14 previos del
  grafo + `meshMapping.test.ts` (3: 0 huérfanos, modelos válidos, aux jamás
  mapeado) + `meshCatalog.test.ts` (5: muestras por modelo, aux, overrides,
  cobertura ≥88-100% por modelo).
- Pendiente de misión control: **validación visual del usuario** de
  selección/aislamiento/filtros en los 8 modelos tras el merge.

## Pendientes

1. **Validación visual del usuario** (selección/aislamiento/filtros en los
   8 modelos) — orquestador tras merge.
2. **Lotes curados del usuario** (Moore/MacIntosh/Enoka → fuentes →
   `--domain anatomy` + `--index`) y verificación bibliográfica
   (`pending` → citado) del grafo.
3. Cobertura 3D de músculos de torso/cabeza/cuello (48 sin GLB dedicado:
   hoy 98/146) y 4 nervios sin capa neural en los modelos (18/22). Son
   honestos "sin contraparte": requieren GLB con esas capas.
4. ROM numérico por articulación (hoy `romNote` textual en algunas
   articulaciones).
5. Recompute de oclusores en orbit continuo (si el usuario lo pide;
   hoy solo en eventos).
6. Nombres ZWSP residuales del export ("Art_cart_of_talusr_\u200b"):
   mapean y filtran bien, pero si se regeneran los GLB conviene
   limpiarlos en origen.
