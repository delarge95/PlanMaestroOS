# 04 — Cerebro laboral: empresas, CV y portafolio modular (tu punto 1)

## Lo que ya tienes

- Estrategia 00-36 completa (posicionamiento, salarios Colombia, movilidad UE/PT/DE,
  portfolio, outreach, entrevistas, scorecard de ofertas, escenarios, benchmarks
  CV/GitHub/ArtStation, snapshot de vacantes, matriz de targeting 31, sprint assets 33,
  sistema de ejecución 34, defensa técnica 35, launch 36).
- App: pipeline 7 columnas (Frío→Cerrado), `CompanyDatabase` con timeline,
  `WeeklyExecutionBoard`, `roadmapMilestones`, seeds desde tracker xlsx + 120 empresas
  doc-11, RAG career 1647 chunks (el más grande), tablero sprint portfolio (28 ítems),
  launch checklist (10 pasos), CV base + variantes + PDF A4 v1, simuladores
  ArtStation/LinkedIn/GitHub/Web con banner de simulación.

## Huecos hacia tu visión (base de datos viva + todo interconectado + dinámico)

### H1. La "base de datos de empresas" es hoy una semilla, no un sistema vivo

Diseño propuesto `Company { id, name, stack[], remotePolicy, salaryBand, fitProfile,
lastSignal, signals[], status, nextAction }`:

- Ingesta diaria (job `career-research`, ya diseñado en implementation 07 T7.4):
  3 empresas/día en frío → ficha {qué hacen, stack, encaje, borrador correo} como
  **borrador aprobable**, nunca auto-envío.
- Señales: cambios en ofertas (nuevas vacantes que matchean tu stack), respuestas,
  seguimiento con fechas (ya existe `followUpDates`).
- Descalificadores doc-11 §6 como reglas (`company-exclusion:<razón>`) que ocultan
  empresas automáticamente con explicación citada.
- Métrica: `fitScore(project|skill, company)` 0-10 por overlap stack + seniority +
  remoto/Colombia + idioma. Mostrar siempre el desglose, nunca solo el número.

### H2. CV/portafolio modular por empresa (el corazón de tu punto 1)

Modelo: `CVVariant { role, companyId?, sections[], projectIds[], skillOrder[],
headline, summary }` generado **proceduralmente**:

```
ficha empresa + variante rol (Tech Artist / Unity WebGL / QA …)
  → selector de proyectos (los de mayor fitScore, con métricas defendibles de doc-01)
  → orden de skills (las que la oferta pide primero)
  → headline + summary (plantillas doc-17/18, sin inventar experiencia — regla anti-slop)
  → export PDF A4 (headless, v2 cuando se pida) + checklist doc-36
```

Prohibiciones (ya vigentes, mantener): cero URLs inventadas, placeholders explícitos
(`[DEMO_VIDEO_URL]` etc.), claims conservadores (`verify/placeholder`, doc-01).

### H3. Portafolio conectado a GitHub (actualización optimizada)

- Worker lee repos (`GITHUB_TOKEN` ya previsto) → snapshot por proyecto
  (últimos commits, releases, demo URL viva o placeholder) → `ProjectCard` muestra
  "actualizado hace X" + badge si la demo murió (link checker semanal).
- TwinSight como flagship con case study 25 secciones (08B) + demo WebGL viva
  (único link real hoy) + video demo (plan 21B pendiente de grabar — es el activo
  con mayor ROI de todo el punto 1).
- Regla: ningún proyecto entra al portafolio sin `{demoUrl|placeholder, metricas
  defendibles, qué probar}` (criterio doc-07).

### H4. Stack de habilidades con crecimiento monetario

`Skill { id, level, evidence[], marketDemand, salaryLift }`:
- `marketDemand` desde snapshot mensual de vacantes (doc-30 como serie temporal,
  no foto única) → "esta skill subió X% en ofertas que te encajan".
- `salaryLift` desde benchmarks doc-03 + scorecard doc-24 → "dominar X te mueve
  de banda A a banda B".
- Plan de cursos/maestrías (ver archivo 12) priorizado por `demanda × lift × costo`,
  con roadmap corto/mediano/largo (doc-06 + archivo 09).

### H5. Actualización dinámica con el mercado/tecnología

Job mensual: re-snapshot vacantes → recalcular `fitScore` de todas las empresas →
sugerir (borrador) reordenar pipeline + actualizar 1 sección del CV + proponer
1 curso. Todo aprobable en ≤3 clics desde Hoy (fila condensada Laboral).
