# CHECKPOINT — Plan Maestro OS (actualizado 2026-09-28, estado HEAD post-Despacho 9 y prediction)

> ## ESTADO CONSOLIDADO EN MAIN (HEAD: commit 754d47c + prediction.json)
> 1. **Tests automatizados**: **613 tests pasando en 62 suites** (`npm test -- --run` 100% verde).
> 2. **RAG Index**: 12 dominios indexados y validados (`scripts/build_rag/index.ts --index` OK).
> 3. **Despachos 1 al 9 COMPLETADOS y MERGEADOS en `main`**:
>    - Despacho 1: Ejecución externa post-subagentes.
>    - Despacho 2: Post-integración EN / NUTRI / FIT / PORT.
>    - Despacho 3: ANATOM-4 visor 3D + CORE-Fase-C.
>    - Despacho 4: Migración total a design system `ds-*`.
>    - Despacho 5: Catálogo de 39 reglas fitness citadas + Gemini Spark.
>    - Despacho 6: Verificación integral + empresas a Notion.
>    - Despacho 7: Idiomas (Spaced Repetition SM-2, SpeakingPracticeEN con Web Speech API) + Laboral.
>    - Despacho 8: CV por aplicación, selector variantes, descarga A4.
>    - Despacho 9: Los 3 motores fitness deterministas:
>      - Generador de rutinas por objetivo y zonas a evitar (`routineGenerator.ts`).
>      - Estimador kcal por ejercicio y esfuerzo MET/RIR/músculo (`exerciseKcal.ts`).
>      - Pruebas diagnósticas guiadas y grafo musculoesquelético completo (`diagnosticTests.ts`).
> 4. **Features Post-Despacho 9 (mergeadas en `main`)**:
>    - **AG-WEAR**: Integración WHOOP completa (ingest endpoint, store, UserState feed, reglas HRV/RHR, chip UI activo en `FitnessTabWorkspace`).
>    - **AG-PRED**: Motores puros M1 OneRMPredictor + M3 InjuryRisk (17 tests) + dataset `rag/prediction.json` + UI badge en Fitness Hoy.
>    - **AG-PORT**: Portafolio público 3D WebGL hero + scrollytelling.
>    - **AG-NUTRI**: Ciclo 2 implementado (`femalePhysiology.ts`, `kcalEstimator.ts`, calculators y tests).

---

## Infraestructura viva y Comandos de Verificación

- **Worktrees activos**: `.worktrees/{core,biblioteca,nutricion,portfolio,fitness,anatomia,cardio,career,german,english,clinical,orquestador,servicios}`.
- **Web local**: `npx astro dev --host 127.0.0.1 --port 4321`.
- **Verificación CI gratuita (costo 0 tokens)**:
  - Tests unitarios: `npm test -- --run` (613 tests).
  - Verificación Astro: `npx astro check`.
  - Builder RAG: `npx tsx scripts/build_rag/index.ts --domain <d> --check` o `--index`.
- **Regla dura de orquestación**: Claude NO escanea archivos ni ejecuta búsquedas recursivas sin `.claudeignore`. Claude decide, emite `DESPACHO-N.md` y realiza spot-check sobre diffs.

---

## ESTADO POR DOMINIO / AGENTE

| Dominio | Agente | Rama | Estado en `main` | Pendiente inmediato |
|---|---|---|---|---|
| **Core** | `AG-CORE` | `agent/core` | ✅ UserState v1, EventBus, SuggestionEngine, IndexedDB, RAG builder v4 (12 dominios). | Sincronizar schema.ts en rama core. |
| **Fitness** | `AG-FIT` | `agent/fitness` | ✅ 3 motores deterministas, UI generador, tests guiados, WHOOP chip, badges 1RM/Injury. | Modo guiado set-a-set en UI viva. |
| **Nutrición** | `AG-NUTRI` | `agent/nutricion` | ✅ Ciclo 1 y 2 completos: 117 reglas RAG, calculadora targets, fisiología femenina, estimador kcal. | Profundizar tablas gráficas de papers si se requiere. |
| **Anatomía** | `AG-ANATOM` | `agent/anatomia` | ✅ Visor 3D (/app/fitness/anatomy), 8 GLBs Draco, anatomyGraph v0 con 146 músculos/articulaciones. | Ajuste fino de interactividad 3D en dispositivos táctiles. |
| **Portafolio** | `AG-PORT` | `agent/portfolio` | ✅ Módulo CV (/cv) con print A4, ArtStation tab, WebGL 3D hero. | Rama WIP previa archivada intencionalmente para cherry-pick. |
| **Idiomas (DE/EN)** | `AG-DE` / `AG-EN` | `agent/german`, `agent/english` | ✅ Spaced repetition SM-2 con racha y errorStore, SpeakingPracticeEN con Web Speech API. | Ampliación de bancos de vocabulario específico. |
| **Clínico** | `AG-CLIN` | `agent/clinical` | ✅ ClinicalExecutionHub, stores persistidos, tests. | Integrar sub-RAG de salud funcional si hay nuevos papers. |
| **Carrera** | `AG-CAREER` | `agent/career` | ✅ WeeklyExecutionBoard, serviceSheet, pipelineRules. | Importación de tracker real si el usuario lo provee. |
| **Servicios (Cotizador)** | `AG-SERV` | `agent/servicios` | 🔨 Ciclo 20 completado (turbina procedural, slider fixes). Rama con +3 commits. | Triage de scripts QA antes de merge a `main`. |
| **Biblioteca** | `AG-BIB` | `agent/biblioteca` | ✅ MANIFEST con 98+ fuentes, extracciones organizadas. | Extracción de nuevos lotes en background. |

---

## Cola de Lanzamiento Sugerida para Claude (`DESPACHO-10`)

1. **Opción A (Recomendada): Consolidación de `agent/servicios` (Cotizador)**:
   - Limpiar y aislar los scripts de QA sueltos (`qa-*.mjs`).
   - Validar build del cotizador 3D y preparar PR/merge ordenado a `main`.
2. **Opción B: Integración y Cableado Final de Prediction**:
   - Ajustar feeds de datos entre el store de entrenamientos y el cálculo de ACWR (Acute:Chronic Workload Ratio).
3. **Opción C: Auditorías Muse / Gemini**:
   - Revisar especificaciones de `MuseAudits/impl/` para adopción de componentes aprobados sin riesgo de regresión.

---

## Pendientes Reales del USUARIO

1. Confirmar si se avanza con la consolidación del cotizador de servicios o con la siguiente fase de fitness/carrera.
2. Mantener la disciplina de commits atómicos y no romper la regla de oro: **ningún trabajo consolidado se borra sin autorización explícita**.
