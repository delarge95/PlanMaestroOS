# STATUS — AG-ANATOM (rama `agent/anatomia`)

> Ciclo 4 COMPLETO (2026-08-24): CORRECCIÓN DE BUGS CRÍTICOS DEL VISOR
> (reportados por validación visual del usuario tras el merge del ciclo 3) +
> pendiente #4 (ROM articular con cita). El ciclo 3 dejó el mapping al 0%
> huérfanos pero el visor seguía roto en selección/aislamiento/capas: las
> causas raíz eran más profundas (doble indexado nodo+geometría, materiales
> compartidos del GLB y contenedores padre). 229 tests verdes, astro check 0/0.
> Sin push; commits locales.

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

## Ciclo 4 — bugs críticos del visor: causas raíz y correcciones

Reporte del usuario tras validar el ciclo 3 en `http://127.0.0.1:4321/app/fitness/anatomy`:
(1) no se puede aislar, (2) las capas no filtran, (3) al seleccionar aparece un
"mesh extra idéntico desfasado", (4) la selección anterior no siempre se
deselecciona, (5) muchos clicks no seleccionan pese al hover, (6) las
articulaciones solo resaltan sus huesos. Diagnóstico verificado contra los GLB
reales y `PropertyBinding.sanitizeNodeName`:

0. **RENDERIZADO COMPLETO EN NEGRO (hallado tras la validación del usuario con
   servidor del worktree, puerto 4322):** el clonado de materiales por mesh
   envolvía materiales SINGULARES en arrays de 1 (`originals.map(clone)` sin
   preservar singular/array). Con material-array, `projectObject` de three solo
   dibuja vía `geometry.groups` (vacías en estos GLB) → **0 draw calls
   silenciosos, sin ningún error de consola**. Diagnosticado por bisectación
   headless (puppeteer-core + Edge): R1 sin clonar dibuja (508k tris), R2 con
   clonar sin dispose no → el envoltorio en array era el asesino (el `dispose`
   de originales era inocuo: three solo registra el listener de dispose al
   compilar programa). FIX: clonar preservando singular/array. Verificado
   headless: esqueleto, miembro superior/inferior y cráneo renderizan; click
   selecciona (ficha), aislamiento muestra solo la pieza, filtro Músculos deja
   solo músculos, ficha de rodilla con marcador + ROM citado.
1. **Doble indexado nodo+geometría** (causa de 1 y 2): `namedMeshesRef`
   indexaba cada mesh DOS veces (nombre de nodo + nombre de meshDef sanitizado,
   p.ej. "Femurr" y "mesh123") y `applyVisibility` decidía la visibilidad POR
   ALIAS — la última escritura ganaba y el alias de geometría (kind `other`/
   `aux`) ocultaba piezas correctas en cada filtro y en el aislamiento. FIX:
   lista plana `meshListRef` (mesh + nombre de NODO) y decisión ÚNICA por pieza
   (`decideMeshVisibility`, testeada). Los CONTENEDORES padre (Bones/Muscles/…)
   ya no se tocan: ningún filtro puede esconder un subárbol.
2. **Mesh fantasma** (causa 3): era el outline "inverted-hull" (clon de la
   geometría escalado 1.035 con BackSide). RETIRADO; el resalte es
   emissive+teñido en dos intensidades (`strong`/`soft`).
3. **Materiales compartidos del GLB** (causa 4): mutar/restaurar emissive por
   mesh contaminaba a las hermanas que comparten material → resaltes que no se
   limpiaban. FIX: material POR MESH en carga (clone comparte texturas; los
   materiales originales del GLTF se liberan).
4. **Selección que no se limpiaba**: además de (3), el efecto de highlight
   retornaba sin restaurar si la nueva selección no tenía mapping y la
   deselección total no restauraba nada. FIX: el efecto se ejecuta SIEMPRE
   (con `[]` limpia).
5. **Click sin efecto** (causa 5): (a) ~60% de los meshes no tenían estructura
   dueña → `match === undefined` no hacía nada; (b) `Flexor_retinaculum_of_wrist`
   (upper-limb) está mapeado por meshDef, no por nodo; (c) el primer match por
   orden del grafo daba la articulación antes que el hueso (MUSCLES→…→JOINTS→
   BONES). FIX: índice de dueño MÁS ESPECÍFICO (`buildOwnerIndex`: gana el
   mapping más pequeño; alias nodo↔geometría normalizado) + FALLBACK de
   selección de PIEZA suelta (ficha mínima nombre+kind, centrar/aislar
   operativos) + click en vacío deselecciona.
6. **Articulaciones** (causa 6): huesos constituyentes en resalte SUAVE +
   marcador 3D propio de la articulación (esfera core+halo, raycast off) en la
   localización aproximada (centroide de los huesos; los GLB no traen la
   articulación como pieza) + nota de honestidad en la ficha.

Lógica pura extraída a `viewerLogic.ts` (+13 tests): `buildOwnerIndex`,
`resolveSelectionNames` (alias→nodo), `decideMeshVisibility`, `prettyMeshName`
(limpia ZWSP del export para labels). Verificación de datos con inventario
real: 8/8 modelos OK (aislamiento exacto, filtros por capa, "Todo" no oculta
nada). Hover muestra nombre legible (underscores→espacios).

**Nota de entorno (importante para validar):** el dev server de la 4321 sirve
`E:\Laboral` (main). Los commits de esta rama viven en el worktree
`E:\Laboral\.worktrees\anatomia` → para validar sin merge:
`node node_modules/astro/astro.js dev --host 127.0.0.1 --port 4322` con cwd el
worktree (servidor dejado corriendo, PID 51880). Validación headless completa
(puppeteer-core + Edge) ejecutada contra la 4322: render OK en 5 modelos,
selección/aislamiento/filtros/marcador/ROM verificados por captura.

## Ciclo 4 — pendiente #4: ROM articular verificado con cita

`src/data/fitness/anatomy/jointRom.ts`: **19/19 articulaciones** con ROM por
movimiento, valor, condición de medición y `sourceRefs` (Levangie & Norkin 6ª
ed., locator = capítulo·sección — la capa de texto no conserva páginas
estables, misma convención que los chunks `njs6-*`). Valores verificados
línea a línea contra `Norkin-..._textolayer.txt` (atajo autorizado ficha
§3.2B): codo 135-145° activo/150-160° pasivo; cadera 90°/120° flex, 10-30° ext,
45-50° abd; rodilla 130-140° pasiva (160° sentadilla); tobillo 20°/50°;
radiocubital ~150°; lumbar 52/19/30/32°; ATM 40-50 mm; etc. Subtalar,
patelofemoral y tibiofibular declaran EXPLÍCITAMENTE que la fuente no da
números (sin inventar). Fusión en `JointEntry.rom` desde `anatomyGraph` (el
generador NO se toca: reconstruiría el mapping del ciclo 3). UI: ficha del
visor + Músculos listan el ROM con su cita. `pending` sin marcar = verificado.
Tests `jointRom.test.ts` (10): cobertura 19/19, citas con capítulo, sin
pending, muestreo de valores, declaración explícita de ausencias.

Nota: los lotes curados Moore/MacIntosh/Enoka llegaron a `rag/anatomy/fuentes/`
y fueron ingestados externamente (commit `9bfd5b3` "LOTE 2"): `rag/anatomy.json`
7 fuentes / 407 chunks + índice actualizado — la mitad 1 de la pendiente #2
estaba ya resuelta al arrancar este ciclo.

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
- **Resalte inequívoco** de la selección: emissive + teñido en dos intensidades
  (`strong` normal / `soft` para huesos de articulaciones). El outline
  inverted-hull del ciclo 3 fue RETIRADO en el ciclo 4 (se percibía como un
  mesh duplicado desfasado — reporte del usuario).
- **Centrado**: botón "Centrar" + atajo **F** (mantiene la orientación de
  cámara; encuadre sobre la caja de la pieza).
- **Capas ocluidas**: raycast cámara→pieza; lo que se interpone pasa a
  translúcido (opacidad 0.12, clone-on-write del material). Se re-computa al
  seleccionar/aislar/filtrar/centrar (no por frame: coste asumido solo en
  eventos).
- **Filtros por categoría** del grafo: Todo / Músculos / Tendones+ligamentos
  / Nervios / Huesos+articulaciones (ciclo 4: visibilidad decidida UNA vez por
  mesh sobre `meshListRef`, con kind del dueño más específico o meshCatalog).
- **Aislar pieza** (ocultar todo lo demás, Esc para salir) — ciclo 4:
  operativo también para piezas sueltas sin ficha; click en vacío deselecciona;
  todo click selecciona (estructura dueña o pieza suelta).
- **Marcador de articulación** (ciclo 4): huesos constituyentes en suave +
  esfera marcadora (core+halo, raycast off) en el centroide aproximado de los
  huesos; nota de honestidad en la ficha. ROM verificado por movimiento con
  cita en la ficha (jointRom).
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
   se sincroniza vía refs espejo (`loadingRef`, `selectionRef`, …).
2. **~~Outline inverted-hull~~ RETIRADO (ciclo 4)**: la copia de geometría
   escalada 1.035 con BackSide se percibía como un "mesh extra idéntico
   desfasado" (reporte del usuario). El resalte es ahora emissive+teñido
   (`strong`/`soft`); cero dependencias nuevas se mantiene.
3. **Oclusores con clone-on-write de material**: los GLB comparten
   material entre meshes; mutar opacidad contaminaría piezas hermanas. El
   resalte de selección resetea oclusores ANTES de aplicar (si no, el
   highlight caería sobre un clon y se perdería al recomputar). CICLO 4:
   además, CARGA clona el material por mesh y libera los originales — el
   highlight/hover por pieza ya no puede contaminar hermanas (causa de las
   selecciones que no se deseleccionaban).
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
   los lotes curados de Moore/MacIntosh/Enoka (flujo arriba). PRIMERA
   REBANADA VERIFICADA (ciclo 4): el ROM de las 19 articulaciones en
   `jointRom.ts` lleva cita capítulo·sección sin `pending`.

## Validación

- CICLO 4: `npx astro check`: **0 errors, 0 warnings** · `npm test`: **25
  archivos, 229 tests verdes** (+13 `viewerLogic`, +10 `jointRom`).
  Verificación de datos con inventario real de los 8 GLB: aislamiento exacto,
  filtros por capa correctos y "Todo" no oculta ninguna pieza.
- CICLO 3: `npx astro check`: **0 errors, 0 warnings** (requiere
  `NODE_OPTIONS=--max-old-space-size=8192` en esta máquina; hints
  restantes son del decoder Draco minificado y scripts .mjs ajenos).
- `npm test` ciclo 3: **21 archivos, 185 tests verdes**, incl. los 14 previos del
  grafo + `meshMapping.test.ts` (3: 0 huérfanos, modelos válidos, aux jamás
  mapeado) + `meshCatalog.test.ts` (5: muestras por modelo, aux, overrides,
  cobertura ≥88-100% por modelo).
- Pendiente de misión control: **validación visual del usuario** de los 6
  fixes del ciclo 4 (selección siempre activa, aislamiento, capas, sin mesh
  fantasma, deselección, marcador de articulación) en los 8 modelos tras el
  merge.

## Pendientes

1. **Validación visual del usuario** (ciclo 4: los 6 fixes del visor en los
   8 modelos; ciclo 3: selección/aislamiento/filtros) — orquestador tras
   merge.
2. **Verificación bibliográfica del grafo** (`pending` → citado, 267
   estructuras). La mitad 1 (lotes Moore/MacIntosh/Enoka → fuentes → RAG)
   quedó resuelta externamente en `9bfd5b3` (LOTE 2: 7 fuentes / 407
   chunks); el ROM articular (ciclo 4) ya va con cita verificada. Resta el
   barrido campo a campo del resto del grafo.
3. Cobertura 3D de músculos de torso/cabeza/cuello (48 sin GLB dedicado:
   hoy 98/146) y 4 nervios sin capa neural en los modelos (18/22). Son
   honestos "sin contraparte": requieren GLB con esas capas.
4. ~~ROM numérico por articulación~~ **HECHO (ciclo 4)**: 19/19 articulaciones
   con ROM por movimiento y cita (capítulo·sección de Levangie & Norkin 6ª ed)
   en `jointRom.ts`; las 3 sin números en la fuente lo declaran explícitamente.
5. Recompute de oclusores en orbit continuo (si el usuario lo pide;
   hoy solo en eventos).
6. Nombres ZWSP residuales del export ("Art_cart_of_talusr_\u200b"):
   mapean y filtran bien (y el hover ya los muestra limpios vía
   `prettyMeshName`), pero si se regeneran los GLB conviene
   limpiarlos en origen.
