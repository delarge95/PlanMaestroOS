# 02 — Arquitectura, datos y grafo real

## Diagnóstico

El doc `08_data_relationships_and_graph_model.md` se llama "grafo" pero es una lista
relacional: entidades + `externalId`/`notionPageId`, sin nodos/aristas tipadas, sin
traversals, sin queries. El roadmap lo resume con pérdida (pierde `ProjectPortfolio`
y `Course`). Resultado: **cada dominio guarda sus cosas y nadie puede preguntar
"¿qué habilidad desbloquea este ejercicio? ¿qué receta sirve a este objetivo?
¿qué empresa encaja con este proyecto?"**. Esa pregunta es exactamente tu punto 1 y 2,
y hoy no tiene respuesta computable.

## Propuesta: grafo tipado mínimo (añadir, no reescribir — regla de oro)

Nuevos tipos en `src/data/contracts/graph.ts` (archivo nuevo, cero toques a lo existente):

```ts
type NodeKind = 'Exercise'|'Muscle'|'Joint'|'Tendon'|'Ligament'|'Nerve'|'Bursa'
  | 'Rule'|'Suggestion'|'Document'|'Video'|'Application'|'Company'|'Skill'
  | 'Protocol'|'Session'|'Metric'|'Recipe'|'Course'|'Project'|'CVVariant';
interface GraphNode { id: string; kind: NodeKind; label: string; ref?: { notionPageId?: string; externalId?: string }; }
type EdgeKind = 'loads'|'stresses'|'evaluates'|'cites'|'derived_from'|'affects'
  | 'targets'|'uses'|'treats'|'produces'|'requires'|'unlocks'|'fits'|'feeds';
interface GraphEdge { from: string; to: string; kind: EdgeKind; weight?: number; }
```

Reglas de construcción (deterministas, sin IA):

- `Exercise -loads→ Muscle`, `Exercise -stresses→ Joint|Tendon` (derivar de
  `anatomyGraph.ts` + `findExercisesForMuscle` ya existente en LibraryMuscles).
- `Rule -cites→ Document` (obligatorio: sin cita no entra al grafo).
- `Session -produces→ Metric`, `Metric -feeds→ UserState`.
- `Project -fits→ Company` (score 0-1 por stack overlap, ver archivo 04).
- `Recipe -targets→ fitnessGoal`, `Course -unlocks→ Skill`.

## Queries que el grafo debe responder (tests de aceptación)

1. `whatLoads(muscle)` → ejercicios ordenados por evidencia (nº reglas que los citan).
2. `whatStresses(joint, painLevel)` → qué quitar/sustituir hoy (puente con archivo 03).
3. `fitScore(project, company)` → número + razones citadas (puente con archivo 04).
4. `unlockPath(skill)` → regresión→progresión con prerrequisitos (datos ya en skillPaths).
5. `feedFor(goal, day)` → recetas + sesiones que apuntan al mismo objetivo.

Implementación por fases: (a) builder `scripts/build_graph.ts` que lee JSONs
existentes y emite `public/data/graph.json` + validador de huérfanos;
(b) visor React solo-lectura (reusar patrón `SecondBrainInspector`);
(c) aristas `fits`/`feeds` con IA solo como proponente (borrador aprobable, archivo 07).

## Decisiones de arquitectura pendientes (ADR propuestos, 1 página cada uno)

- ADR-1: monorepo `src/` (actual, 477 archivos) vs `apps/web + apps/worker + packages/fitapp`
  (roadmap 01). Recomendación: **quedarse en `src/` + `worker/`**; el split `apps/` no aporta
  nada con `output:static` y rompe 100+ imports con alias `@/`.
- ADR-2: deploy estático (GitHub Pages, actual) + worker separado (Cloudflare) vs todo
  dinámico. Recomendación: **estático + worker aparte**, con contrato OpenAPI mínimo
  (`POST /ai/draft`, `POST /sync/push`, `GET /jobs/morning-plan`).
- ADR-3: Obsidian como lector de los mismos `.md` canónicos (`biblioteca/`, `docs/`)
  + grafo React como vista tipada (ya propuesto en DESPACHO-5 §C — ratificarlo y cerrar
  el debate: no hay sync bidireccional de texto, solo enlaces `obsidianNoteUri`).
- ADR-4: contratos faltantes — crear `ProjectPortfolio, Course, ReviewCard,
  PracticeAttempt, SpeakingSession` (exigidos por arch 06/08, ausentes en implementation 05).
  Sin esto, idiomas y cursos viven en tipos ad-hoc por dominio.

## Obsidian: rol final recomendado

`_obsidian/` ya existe. Uso: vault que apunta a `biblioteca/extracciones/` y `docs/`
(solo lectura) + plugin Dataview para tablas de estado generadas desde `graph.json`.
Nunca edición bidireccional: la app escribe, Obsidian lee y anota en carpeta separada
`_obsidian/notas/` que un job importa como `NoteReference` (RAG dinámico).
