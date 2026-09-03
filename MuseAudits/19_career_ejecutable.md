# 19 — Career ejecutable (cierra tu punto 1)

> Estado: pipeline 7 columnas + regla dura `singleNextAction` + seeds de 3 apps +
> `careerServiceAdapter` MOCK paralelo al store real + CV con 8 confirmaciones pendientes
> + RAG 1647 chunks. Falta: BD viva, fitScore, CV procedural, link-checker, matar el mock.

## 19.1 Unificación y limpieza (encargo E1, 1 día)

- Borrar `careerServiceAdapter.ts` MOCK (confunde con `applicationsSeed` reales) o
  renombrarlo `careerServiceAdapter.mock.ts` excluido del build. Dueño pipeline:
  `applications.ts` (7 stages + 10 TrackerStatus); `domainContracts` y `globalDataModel`
  pasan a vistas derivadas (archivo 14 §14.3).
- `RoadmapBoard/CourseTracker/NewsInbox`: migrar de `useState + plan_maestro_career_goals`
  a `careerStore` (mata la key huérfana de migración).
- Ampliar seeds de 3 a 12 aplicaciones reales del tracker xlsx (script `parse-tracker.ts`
  ya existe: re-ejecutar y verificar).

## 19.2 `fitScore` + `Company` viva (encargo E2)

```ts
// src/lib/career/fitScore.ts (puro, testeado)
fitScore(profile{stack[],seniority,remote,lang}, company) =>
  { score: 0-10, reasons: [{factor, points, cite}] }
// factores: stack overlap (0-4), seniority match (0-2), remoto/Colombia (0-2), idioma (0-1), señal reciente (0-1)
```
`Company` gana `{stack[], remotePolicy, salaryBand, lastSignal, signals[]}`.
Job `careerResearch` (archivo 22) genera 3 fichas/día como borrador aprobable.
Descalificadores doc-11 §6 como reglas `company-exclusion` que ocultan con explicación.

## 19.3 CV procedural (encargo E3)

`composeVariant(companyId, roleSlug)` en `cvCompose.ts`: elige proyectos por `fitScore`,
ordena skills según la oferta, headline+summary de plantillas doc-17/18, **cero invención**
(placeholders explícitos, claims doc-01). Desbloquea export cuando se cierren las 8
`cvPendingConfirmations` (email/tel/ubicación/URLs/métricas/demo — pedir al usuario en
1 mensaje consolidado, no en 8 tickets).

## 19.4 Portafolio vivo (encargo E4)

Worker lee repos (`GITHUB_TOKEN` previsto) → snapshot por proyecto (últimos commits,
demo viva/muerta) → badge en `ProjectCard`. Link-checker semanal (las 7 placeholders
de `links.ts` + demo TwinSight). Video demo plan 21B: guion existe, falta grabar —
es el activo con mayor ROI de todo el punto 1 (una semana de trabajo, multiplica
todas las aplicaciones).
