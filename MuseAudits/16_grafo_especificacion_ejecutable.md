# 16 — Grafo: especificación ejecutable

> Por qué: el "grafo" actual (`08_data_relationships…`) es una lista. Sin aristas
> tipadas no hay `fitScore`, ni sustituciones por lesión, ni `unlockPath`.
> Cómo: 3 encargos aditivos (tipos → builder+validador → visor). Nada existente se toca.

## 16.1 Tipos (nuevo `src/data/contracts/graph.ts`)

```ts
type NodeKind = 'Exercise'|'Muscle'|'Joint'|'Tendon'|'Ligament'|'Nerve'|'Bursa'|'Bone'
  | 'Rule'|'Suggestion'|'Document'|'Video'|'Application'|'Company'|'Skill'
  | 'Protocol'|'Session'|'Metric'|'Recipe'|'Course'|'Project'|'CVVariant';
interface GraphNode { id: string; kind: NodeKind; label: string;
  ref?: { notionPageId?: string; externalId?: string; docId?: string }; }
type EdgeKind = 'loads'|'stresses'|'evaluates'|'cites'|'derived_from'|'affects'
  | 'targets'|'uses'|'treats'|'produces'|'requires'|'unlocks'|'fits'|'feeds';
interface GraphEdge { from: string; to: string; kind: EdgeKind; weight?: number; cite?: string; }
interface KnowledgeGraph { version: 1; builtAtIso: string; nodes: GraphNode[]; edges: GraphEdge[]; }
```

## 16.2 Reglas de construcción (deterministas, citadas)

- `Exercise -loads→ Muscle`: de `anatomyGraph.ts` (`getStructuresForModel`,
  `resolveHighlightNames`) + `findExercisesForMuscle` (LibraryMuscles). Peso = nº reglas que lo citan.
- `Exercise -stresses→ Joint|Tendon|Ligament`: de la matriz del archivo 18 (lesiones)
  + `jointRom.ts`. Base de sustituciones por dolor.
- `Rule -cites→ Document`: OBLIGATORIO (`sourceRef.docId` debe existir en `rag/index.json`;
  `TODO-cita` ⇒ nodo a cola, no al grafo — ADR-8).
- `Session -produces→ Metric -feeds→ UserState`: de `sessionExport.ts` + `volumeStats.ts`.
- `Project -fits→ Company`: `fitScore` (archivo 19), arista con `weight` + `cite=reasons[]`.
- `Course -unlocks→ Skill`, `Skill -requires→ Skill`: de `skillPaths.ts` + `progressionPathLinks.ts`.
- `Recipe -targets→ {goal}`: de `plans.ts fitnessGoal` + `macros.ts` (archivo 26).

## 16.3 Builder + validador (W1 del archivo 13, ampliado)

- `scripts/build_graph.ts`: lee `rag/*/manifest` + `src/data/fitness/**` + `src/data/career/*`
  → `public/data/graph.json` + `graph-stats {counts, orphans[]}`.
- `scripts/validateGraph.ts`: falla si huérfanos >5%, arista `cites` sin docId, o `fits`
  sin reasons. Añadir a `ci` tras `validate:fitness`.
- Visor: `GraphInspector.tsx` solo-lectura (clon del patrón `SecondBrainInspector`),
  ruta `/app/library/graph` (nueva, con entrada en `sectionNavConfig` + smoke QA).

## 16.4 Las 5 queries de aceptación (tests que definen "grafo real")

1. `whatLoads(muscleId)` → ejercicios por peso-evidencia.
2. `whatStresses(jointId, eva)` → quitar/sustituir hoy (consume archivo 18).
3. `fitScore(projectId, companyId)` → número + reasons citadas (archivo 19).
4. `unlockPath(skillId)` → regresión→progresión con prerrequisitos.
5. `feedFor(goal, dateIso)` → recetas + sesiones del día apuntando al objetivo.
Cada query = función pura en `src/lib/graph/queries.ts` + test con datos seed.
Sin estas 5 en verde, el grafo no existe aunque haya JSON.
