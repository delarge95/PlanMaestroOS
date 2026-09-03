# 01 — Viabilidad técnica: veredicto

## Veredicto en una línea

**Viable y ya al ~45-50% funcional en local; el riesgo no es técnico sino de
integración, datos vivos y foco.** La base (Astro 5 + React 19 + Zustand + IndexedDB +
RAG v4 + worker) soporta la visión. Lo que falta es: grafo real, UserState unificado
en todos los dominios, sync Notion/worker desplegado, RAG inglés/alemán dignos,
y cerrar la puerta de entrada (Hoy/orquestador) que hoy sigue virgen.

## Evidencia del estado real (verificado 2026-09-03)

- `src/`: 477 archivos. Rutas `/app`: 39 `.astro` (today, fitness×8+library×6,
  career×6, clinical×4, languages×3, gastronomy×4, library, schedules, master-plan).
- `rag/`: 9 dominios. Desbalance crítico: `career.json` 1.4MB/1647 chunks vs
  `english.json` 12KB/9 chunks y `german.json` 11KB/12 chunks.
- Worktrees: 14 activos (`anatomia, biblioteca, cardio, career, clinical, core,
  english, fitness, german, nutricion, orquestador, portfolio, servicios` + `.kilo/quasar-year`),
  más `services-deploy/` huérfano sin listar (limpiar). `git status` limpio en main (`a07f437`).
- App viva `http://127.0.0.1:4321/app`: responde Hoy + Fitness + Laboral + Idiomas.
  `/app/fitness/today` redirige a Hoy-en-Fitness (flujo incompleto, ver §huecos).
- `biblioteca/`: 277 archivos, 4.8M chars extraídos, MANIFEST con sourceIds estables.
- Últimos commits: ENCARGO worker IA M6, P3 UserState real (cardio+vocab conectados),
  DESPACHO-5, design audit. El proyecto se mueve, no está estancado.

## Por qué es lograble (fortalezas reales)

1. **Motor de reglas determinista ya existe**: `src/lib/rules/`, `evaluateRules.ts`,
   `fitnessRules.ts` (10 reglas citadas), `fromRuleEvaluations.ts`, `SuggestionInbox`.
   Esto es lo más difícil y ya funciona. Escalar de 10 → 100+ reglas es trabajo
   mecánico (prompt catálogo ya listo en DESPACHO-5 §A).
2. **RAG v4 con builder propio** (`scripts/build_rag/`, `--domain/--check/--index`).
   El pipeline curación→chunks→índice existe; falta volumen en 2 dominios.
3. **Dominio anatomía muy avanzado** (451 tests, 0 huérfanos mesh, composite 1380 piezas,
   12 capas, selección jerárquica). Es el activo diferencial para el módulo lesiones.
4. **Persistencia seria**: IndexedDB `createKvStore` + migración no destructiva de
   localStorage. Base correcta para offline-first.
5. **Sistema de orquestación que funciona**: regla de oro aditiva, anti-slop con
   citas, verificación `astro check + npm test` por tanda, handoffs en repo.
   Con 14 worktrees paralelos el throughput es alto si se corrigen 3 contradicciones
   (ver `10_puntos_debiles_refuerzos.md` #1-#3).

## Riesgos que pueden matar el proyecto (ordenados)

1. **Fragmentación de la verdad**: 3 backlogs divergentes (arch 11 = 6 fases,
   roadmap 13 = 8 fases, implementation 00-07 = verificación+6 builds) + pipeline
   empleo 3 estados vs 7 columnas + monorepo `apps/` vs `src/`. Si cada agente sigue
   un doc distinto, el merge duele. **Fix**: declarar `roadmap/13 + implementation/00-07`
   como vigentes y archivar la divergencia en un ADR (1 día).
2. **AG-ORQ virgen**: el integrador final (Today real, todayAdapter, briefing) no ha
   arrancado, pero 3 agentes ya le piden contratos (`hoyAdapter`, calendario FIT-B1,
   `ClinicalCurrentBlockPanel`). Sin ORQ no hay "segundo cerebro", solo secciones sueltas.
3. **Deploys ficticios**: `output:static` + `PUBLIC_WORKER_API_URL` inexistente +
   `ENABLE_LIVE_SYNC=false` + `base: /PlanMaestroOS/` condicional. Todo lo "automático"
   (sync Notion, jobs, IA) es mock hasta desplegar worker + IDs Notion reales.
4. **Deuda de navegación**: 2 tickets abiertos (`sectionNavConfig.ts` sin entradas a
   nutrition/anatomy aunque las páginas existen). Síntoma de ownership sin checklist final.
5. **Contenido bloqueante humano**: 7 placeholders en `links.ts`, datos CV doc-17§2,
   PDFs fuera de git (`D:/Downloads`, `investigacion/` ignorada). Sin esto el portafolio
   no es lanzable aunque el código esté al 85%.

## Números honestos por dominio (% funcional local, no documentado)

Fitness 70 · Career 60 · Languages 55 · Clinical 40 · Gastronomy 40 · Library 40 ·
Sync Notion/Worker 25 · RAG dinámico 30 · Portfolio público estructura 85 / contenido 30.

## Condiciones para declarar "real" (definición de hecho)

1. `npm run ci` verde + `astro check` 0 + smoke `/app` en 4321 (ya casi).
2. Worker desplegado + 1 job real (morning-plan) generando borrador aprobable.
3. UserState alimentado por ≥3 dominios (hoy: cardio+vocab+fitness parcial).
4. 100+ reglas citadas evaluando a diario sin falsos positivos reportados 2 semanas.
5. Tracker laboral con ≥1 aplicación real seguida de punta a punta en la app.
