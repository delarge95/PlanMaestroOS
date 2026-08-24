# ENCARGO: Mapping real GLB ↔ anatomyGraph (AG-ANATOM, ciclo 3)

> Creado 2026-08-24 tras análisis de misión control. Este documento ES el prompt completo: pegarlo como mensaje inicial del agente (worktree `E:\Laboral\.worktrees\anatomia`, rama `agent/anatomia`).

## DIAGNÓSTICO MEDIDO (por qué no se puede seleccionar/aislar/filtrar)

El visor está BIEN; lo que falla es el **mapping**: `anatomyGraph.modelMeshes` referencia nombres de mesh que **no existen en los GLB**. Auditoría ejecutada contra `rag/anatomy/extracciones/mesh-names.json`:

| Modelo | Estructuras mapeadas | Mapeos | Coinciden con GLB real |
|---|---|---|---|
| colored-skull-base | 13 | 15 | **0 (0%)** |
| exploded-skull | 13 | 15 | **0 (0%)** |
| overview-colored-skull | 13 | 15 | **0 (0%)** |
| overview-skeleton | 58 | 115 | **0 (0%)** — el GLB tiene 1 mesh llamado "mesh" |
| upper-limb | 81 | 244 | 57 (23%) |
| hand | 36 | 119 | 15 (13%) |
| lower-limb | 96 | 196 | **4 (2%)** — 43/181 meshes son basura "Circle.NNN" |
| vertebrae | 3 | 3 | **0 (0%)** |
| **TOTAL** | | **722** | **76 (11%)** |

**Causas concretas:**
1. **Skulls/skeleton/vertebrae: el inventario registró 0 (o 1) meshes** → el parser del inventario falló con esos modelos (¿nombres en `nodes` y no en `meshes`? ¿GLB sin chunk BIN? ¿meshes sin nombre y el nombre vive en el nodo padre?). Sin inventario real, el grafo mapeó nombres INVENTADOS ("Frontal bone" etc.) que no existen → 0% en 4 modelos.
2. **Convención de nombres distinta**: el grafo usa "Trapezius muscle.r" pero los GLB reales usan "Name_with_underscores.r", nombres sin la palabra "muscle" ("Latissimus dorsi.r"), y sufijos específicos ("..._tendon_sheath.r"). Además hay lateralidad (".r"/".l") y subpartes ("Long head of biceps brachii tendon sheath.r" ≠ "Biceps brachii").
3. **lower-limb tiene 43 meshes "Circle.NNN"** (geometría auxiliar sin nombrar) que ensucian el modelo.
4. **Ningún test validaba mesh-existencia** — el error llegó a main silenciosamente.

---

## PROMPT PARA EL AGENTE (pegar tal cual)

```
Eres AG-ANATOM (Plan Maestro OS), ciclo 3: MAPPING REAL GLB ↔ anatomyGraph. Worktree: E:\Laboral\.worktrees\anatomia (rama agent/anatomia). Windows, Git Bash, rutas absolutas. npm install ya hecho.

REGLA ABSOLUTA: solo trabajas en E:\Laboral\.worktrees\anatomia. Sin push. Commits locales, uno por sub-paso ([wip] si corta). astro check puede necesitar NODE_OPTIONS=--max-old-space-size=8192.

REGLA DE ORO (§0.9): prohibido eliminar features consolidadas (visor, LibraryMuscles, restauración UX fitness — TODO intocable salvo lo que este encargo pide expresamente: anatomyGraph.ts y el inventario). Cambios aditivos.

LEE PRIMERO: docs/agents/ENCARGOS/ENCARGO-mapping-meshes.md (este documento — contiene el diagnóstico medido), docs/agents/PLAN_MULTIAGENTE.md §0/§3.2B, docs/agents/STATUS-anatomia.md.

OBJETIVO: que selección, aislamiento y filtros por capa funcionen sobre los 8 GLB reales, con 100% de mapeos verificados por test.

TAREA 1 — INVENTARIO REAL (fix del parser):
El script actual (rag/anatomy/scripts/) registró 0 meshes en colored-skull-base, exploded-skull, overview-colored-skull, vertebrae y solo 1 ("mesh") en overview-skeleton. Depura: inspecciona el GLB JSON chunk completo (nodes[].name, meshes[].name, y la escena) — los nombres pueden vivir en NODES (meshes[] sin name propio). Regenera rag/anatomy/extracciones/mesh-names.json con TODOS los nombres reales por modelo (dedupe, documenta en modelos-inventario.md qué convención usa cada GLB). Para lower-limb: lista aparte de los meshes "Circle.NNN" (geometría auxiliar). Commit.

TAREA 2 — TEST DE INTEGRIDAD ANTI-REGRESIÓN (antes de tocar el grafo):
Nuevo test src/data/fitness/anatomy/__tests__/meshMapping.test.ts: para cada estructura del grafo y cada modelo referenciado, TODO nombre en modelMeshes[model] DEBE existir en mesh-names.json de ese modelo (comparación normalizada: lowercase, trim). Falla con lista de ofensores. Arrancará en rojo (~646 mapeos huérfanos) — ese es tu backlog. Commit (test en rojo con skip temporal si CI lo exige, pero ejecutable localmente).

TAREA 3 — PIPELINE DE MATCHING + REMAPEO:
En un script tuyo (rag/anatomy/scripts/remap.ts):
a) Para cada estructura y modelo: generar candidatos por capas — (1) exacto normalizado, (2) normalizado agresivo (lowercase, sin puntos, guiones_bajos↔espacios, quitar sufijos .r/.l/_l/_r, quitar palabras "muscle|tendon|sheath|nerve|vessel|artery|vein" al comparar raíz, singular/plural simple), (3) alias manual.
b) Reporte por modelo: mapeados exactos / por normalizador / needing-manual / sin-contraparte (la estructura no está en ese GLB — ELIMINA esa referencia del modelMeshes de ese modelo, es ruido; documenta en STATUS la cobertura resultante).
c) Escribe el resultado: actualiza ANATOMY_STRUCTURES.modelMeshes con los nombres REALES (multi-mesh por estructura está bien: p.ej. biceps = 2 cabezas). Conserva structures sin meshes (útiles para BD de Músculos vía otros modelos).
d) Alias manuales en un archivo propio (meshAliases.ts) para los casos donde el nombre GLB no derive del anatómico (p.ej. "Circle.NNN" JAMÁS se mapea — ver T4).
Commit por modelo (upper-limb, lower-limb, hand, skulls×3+overview-skeleton, vertebrae).

TAREA 4 — CATÁLOGO POR TIPO DE LOS MESHES REALES:
Para que los filtros de capa funcionen sobre TODO el modelo (incluidos meshes sin estructura en el grafo): crea src/data/fitness/anatomy/meshCatalog.ts — un registro por modelo: meshName → kind inferido (muscle|tendon|ligament|joint|nerve|bone|vessel|fascia|cartilage|other) por patrones del nombre (_tendon, _sheath→tendon; nerve names (median/ulnar/radial/axillary/sciatic/tibial...); _ligament; _art_cart/cartilage; bone list; vessel) + overrides manuales. "Circle.*" → kind 'aux' (el visor los OCULTA por defecto: son geometría auxiliar del modelo — añade esa regla al applyVisibility del visor, cambio mínimo y aditivo). Integra el catálogo al meshOwnersRef del visor como fallback cuando un mesh no tenga estructura dueña (así el filtro por capa siempre tiene efecto sobre el modelo completo). Tests del catálogo (muestra por modelo). Commit.

TAREA 5 — VERIFICACIÓN DE PUNTA A PUNTA:
a) El test de TAREA 2 en VERDE (0 mapeos huérfanos).
b) Validación manual instrumentada: script que por modelo imprima % de meshes clasificados y % de estructuras seleccionables.
c) NODE_OPTIONS=--max-old-space-size=8192 npx astro check (0) && npm test verde (incluye los 14 tests previos + nuevos).
d) Actualiza docs/agents/STATUS-anatomia.md (cobertura por modelo, decisiones de alias, meshes auxiliares, pendientes). Commit final.

PRIORIDAD SI TE CORTAS: 1 → 2 → 3(upper-limb primero, luego lower-limb, hand, skulls) → 4 → 5.
ENTREGABLE MEDIBLE: test de integridad verde + cobertura de selección por modelo reportada. Sin ese test verde, el ciclo NO está completo.
```

## Notas de misión control para el orquestador
- Este encargo NO toca el visor salvo la regla 'aux' de T4 (mínima, aditiva).
- Tras el merge: pedir al usuario validación visual de selección/aislamiento/filtros en los 8 modelos.
- Los chunks del RAG anatomy (407) NO dependen del mapping — sin retrabajo.
