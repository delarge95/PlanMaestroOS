# DESPACHO 2 — Post-integración: código de EN, NUTRI c2, FIT c2, PORT c2

> Creado por misión control 2026-08-25. Todo verificado en main: 0 errores astro check, 261/261 tests, 8 dominios RAG.
> Modelo: OX Alpha (código, alto razonamiento) + Gemini 3.7 Flash (contenido/curación). Yo verifico e integro.
> Reglas universales: `docs/orquestacion/NORMAS_ORQUESTADOR.md` + `docs/orquestacion/entornos/REGLAS_COMUNES.md`. Regla de Oro §0.9: nada se borra, cambios aditivos.
> Regla de verificación OBLIGATORIA al final de cada tarea de código: `NODE_OPTIONS=--max-old-space-size=8192 npx astro check` (0 errores) **Y** `npm test` (verde) — el incidente ORQ (adapter escrito contra APIs inventadas) no se repite: antes de escribir una línea contra un store, LEE su interfaz real en el archivo.

---

## A. OX ALPHA — TAREAS DE CÓDIGO (en orden de prioridad)

### A1. AG-EN ciclo 1 — Integrar el contenido de inglés YA curado

```
Eres AG-EN (Plan Maestro OS). Worktree: E:\Laboral\.worktrees\english (rama agent/english). Windows, Git Bash. npm install AÚN NO hecho: hazlo primero.

ARRANQUE: cd E:\Laboral\.worktrees\english && npm install && git merge main --no-edit (main trae: motor SM-2 de AG-DE, vocabularyStore, todo el sistema). Lee: docs/agents/PLAN_MULTIAGENTE.md (§0 con regla de oro, ficha §3.6, §1.2), docs/agents/PROMPTS_INICIALES.md §8, docs/agents/STATUS-german.md (la API del motor SR publicada para TI con ejemplos de uso — léela antes de consumirlo).

REGLA ABSOLUTA: solo trabajas en E:\Laboral\.worktrees\english. Sin push. Commits por tarea ([wip] si corta). REGLA DE ORO: nada se borra. VERIFICACIÓN OBLIGATORIA por commit: NODE_OPTIONS=--max-old-space-size=8192 npx astro check (0) && npm test. Antes de consumir un store/interfaz ajeno, LEE su archivo real.

TU VENTAJA: el contenido YA ESTÁ CURADO por el usuario (Gemini Flash) en biblioteca/_llm-outputs/gemini-flash/:
- ag-en-t2a-technical-vocabulary.json (128 términos técnicos, 4 categorías)
- ag-en-t2b-business-scenarios.json (8 scenarios + 3 STAR + business vocab)
- ag-en-t2c-precision-c1.json (collocations, phrasal verbs, pares formal/informal, falsos amigos)
Revísalos, valida su esquema contra src/data/languages/types.ts, y adjústalos donde el esquema difiera (adaptación de claves, NO regeneración de contenido).

TERRITORIO OWN: src/data/languages/englishCourse.ts + english/** (nuevos), src/pages/app/languages/english.astro, src/components/languages/english/**, rag/english/**.
FORBIDDEN: componentes compartidos de languages (LessonView/VocabularySession/SpeakingPractice = de AG-DE; si falta algo: ticket), germanCourse.ts/alemán, career, ui/tokens/nav.

TAREAS (1 commit c/u):
1. src/data/languages/english/vocabulary.ts: tipos + conversión de t2a a VocabularyItem[] (lang:'en', nivel/tema/ejemplo). Validador propio pequeño (npx tsx script): todo ítem con categoría válida y ejemplo no vacío. Commit.
2. src/data/languages/english/scenarios.ts + precision.ts: tipos fieles a los JSON (scenario con dialog/keyPhrases/register/variations/typicalMistakes; STAR con fuente 'doc-23 §sección' preservada). Commit.
3. englishCourse.ts: reestructurar a 4+ unidades consumiendo estos datasets (las 2 lecciones actuales se INTEGRAN, no se borran) con ejercicios de los tipos existentes generados desde el contenido (fill_in_blank desde falsos amigos, multiple_choice desde vocabulario). Commit.
4. src/components/languages/english/SpeakingPracticeEN.tsx: Web Speech API (SpeechRecognition con fallback a texto; speechSynthesis para modelar) — un ejercicio oral por scenario con detección de keywords. Montarlo como pestaña en english.astro SIN tocar el SpeakingPractice compartido. Commit.
5. Integración con el motor de AG-DE: los ítems de vocabulario EN entran al vocabularyStore (mismo formato que alemán) para repaso SR; la página english.astro muestra cola de vencidos + racha (consumiendo el store READ). Commit.
6. rag/english.json: chunks clave del contenido (glosario por categoría, scenarios, precision — locator section, sourceId 'internal-curated-en' + chunks STAR citando doc-23) → npx tsx scripts/build_rag/index.ts --domain english && --index. Commit.
7. Final: astro check (0) + npm test + docs/agents/STATUS-english.md (volúmenes, decisiones, consumo del motor SR). Commit.
```

### A2. AG-NUTRI ciclo 2 — Estimador kcal + hormonas (mandatos del usuario)

```
Eres AG-NUTRI ciclo 2 (Plan Maestro OS). Worktree: E:\Laboral\.worktrees\nutricion (rama agent/nutricion). npm install ya hecho.

ARRANQUE: cd E:\Laboral\.worktrees\nutricion && git merge main --no-edit. Lee: docs/agents/PLAN_MULTIAGENTE.md ficha §3.2C, docs/agents/TAREAS_USUARIO.md (tus 2 mandatos), docs/agents/CHECKPOINT.md, y tu propio src/data/fitness/nutrition/ (rules.ts/calculator.ts/nutritionStore.ts — son tuyos).

REGLAS: solo en tu worktree. Sin push. Commits por tarea. Regla de Oro. VERIFICACIÓN por commit: astro check (NODE_OPTIONS 8192 si OOM) + npm test.

CONTEXTO NUEVO en main: rag/nutrition.json ahora tiene chunks v4 + el array legacy rules[] que consume tu rules.ts. PROBLEMA TÉCNICO HEREDADO (ticket tuyo): el builder estándar (--domain nutrition) DESCARTA rules[] al reconstruir → si rebuildas, tests rompen. Tu primera tarea es migrar y eliminar esa dualidad.

TERRITORIO OWN: src/components/fitness/nutrition/**, src/pages/app/fitness/nutrition.astro, src/data/fitness/nutrition/**, rag/nutrition/**. FORBIDDEN: gastronomía, clinical, resto de fitness, ui/tokens/nav.

TAREAS (1 commit c/u):
1. MIGRACIÓN rules.ts→chunks: convierte las 119 reglas legacy a chunks v4 (script tuyo: cada regla → bloque chunk en rag/nutrition/fuentes/<sourceId>--rules.md con topic/tags/locator/summary que CONTENGA los valores numéricos) y cambia rules.ts para servirse de chunks (getRule busca en chunks[].rules + parse del summary, o mantén un índice derivado compilado). Al terminar: rebuild del dominio SIN perder nada + tests verdes sin el array legacy. Este commit desbloquea rebuilds futuros. Commit.
2. ESTIMADOR KCAL (mandato usuario): src/data/fitness/nutrition/kcalEstimator.ts — engine puro con tests:
   a) Por actividad/preset: kcal = METs × pesoKg × horas (Compendium/ACSM ya citados en tus reglas y en rag/cardio getPresetsWithMet() — READ de src/data/fitness/cardio/presets.ts).
   b) Por sesión de fuerza (si hay logger data): trabajo mecánico aproximado (series×reps×carga×distancia-estimada) + factor de recuperación EPOC citado, con confianza 'inferred' marcada.
   c) Integra la interfaz: cada target diario muestra "quemado estimado hoy" vs objetivo (misma página, sección nueva). Fuentes: chunks existentes NSCA/Maughan/ACSM + papers-aragon. NADA de cifras sin cita. Commit.
3. HORMONAS FEMENINAS (mandato usuario): los papers ya están curados en rag/nutrition/fuentes/papers-hormonas-femeninas.md (RMR lútea +44 kcal/d, proteína menopausia 1.2-1.5 g/kg, consenso cycle-based training). Tarea: módulo UI opcional en la página — perfil femenino (ciclo regular/irregular/perimenopausia/menopausia) → ajustes mostrados CON cita y disclaimers ("evidencia de efecto pequeño; autorregulación por síntomas"). Sin datos biométricos personales más allá de lo que el usuario ingrese. Commit.
4. STATUS-nutricion actualizado (ciclo 2: qué se entregó, decisiones, cómo consumir kcalEstimator desde otros dominios). Commit.
```

### A3. AG-FIT ciclo 2 — Modo entrenamiento guiado (B9) + contrato de sesión

```
Eres AG-FIT ciclo 2 (Plan Maestro OS). Worktree: E:\Laboral\.worktrees\fitness (rama agent/fitness). npm install ya hecho.

ARRANQUE: cd E:\Laboral\.worktrees\fitness && git merge main --no-edit (main trae cardio/, anatomy/ completos, restauración UX). Lee: docs/agents/PLAN_MULTIAGENTE.md ficha §3.2, docs/agents/STATUS-fitness.md (TU ciclo 1 — decisiones y pendientes), docs/agents/TAREAS_USUARIO.md (B9 + contrato kcal), docs/agents/STATUS-anatomia.md (grafo consumible).

REGLAS: solo tu worktree. Sin push. Commits por tarea. REGLA DE ORO ABSOLUTA: TodayRoutineStack y TODO lo restaurado es INTOCABLE — el modo guiado se AÑADE, no reemplaza. Verificación por commit: validadores fitness (npm run validate:fitness, npx tsx scripts/validateFitnessPrograms.ts, npx tsx scripts/validateSkills.ts) + astro check + npm test.

TERRITORIO: §3.2 (anatomy/, nutrition/, cardio/ = de otros; LibraryMuscles/muscles.astro = AG-ANATOM).

TAREAS (1 commit c/u):
1. CONTRATO DE SESIÓN para kcal: src/lib/fitness/sessionExport.ts — tipo SessionSnapshot {fecha, programa, día, ejercicios[{id, series, reps, carga?, rpe?, duraciónMin?}], duraciónTotalMin} + función buildSessionSnapshot(completedSets del logger/TodayRoutineStack READ) exportada. Es el puente que NUTRI consumirá (documenta en STATUS). Tests del builder puro. Commit.
2. B9 MODO GUIADO: src/components/fitness/guided/ + ruta o Sheet: pantalla completa set-a-set — ejercicio actual (video YouTubePlayer READ, cues de techniquePoints del exerciseDatabase), serie actual con input de reps/peso/RPE, descanso cronometrado configurable (del prescription.restPeriod) con aviso, avance automático de serie→ejercicio→fin, resumen final → SessionSnapshot (tarea 1). Entra DESDE Hoy (botón "Modo guiado" junto a la rutina del día — aditivo, TodayRoutineStack intacto). Mobile-first. Commit(s) por sub-avance.
3. STATUS-fitness actualizado (ciclo 2). Commit.
```

### A4. AG-PORT ciclo 2 — Sprint de assets (doc-33) + launch (doc-36)

```
Eres AG-PORT ciclo 2 (Plan Maestro OS). Worktree: E:\Laboral\.worktrees\portfolio (rama agent/portfolio). npm install ya hecho.

ARRANQUE: cd E:\Laboral\.worktrees\portfolio && git merge main --no-edit. Lee: docs/agents/PLAN_MULTIAGENTE.md ficha §3.7, tu STATUS-portfolio.md, docs 33 y 36 (raíz del repo, READ).

REGLAS: solo tu worktree. Sin push. Commits por tarea. Regla de Oro. Verificación por commit.

TERRITORIO §3.7 (PortfolioSimulator/tu CV/portafolio público tuyos; resto de career NO).

TAREAS (1 commit c/u):
1. TABLERO SPRINT doc-33: portfolioChecklist.ts evoluciona a tablero de producción con estados (pending/in-progress/review/done), responsable visual y fuente citada por ítem; UI en el simulador. Commit.
2. CHECKLIST LAUNCH doc-36: secuencia de launch como checklist interactivo sincronizado con el tablero (ítem de asset listo → paso de launch se habilita). Sin URLs inventadas (placeholders explícitos). Commit.
3. STATUS-portfolio ciclo 2. Commit.
```

---

## B. GEMINI 3.7 FLASH — TAREAS DE CONTENIDO (paralelas a A, cuando quieras)

### B1. Goethe A1 para AG-DE (preparación certificación, ficha §3.5 Fase 2)
Input: contenido de las 4 unidades A1.1 ya en `src/data/languages/german/units/` (worktree german o main). Prompt: generar módulo de simulacro Goethe-Zertifikat A1: 4 partes (Hören/Lesen/Schreiben/Sprechen) × 2 simulacros completos, alineados EXCLUSIVAMENTE al vocabulario/gramática de las unidades existentes (nada de léxico fuera de alcance), con claves de corrección y criterios oficiales parafraseados. Salida: `biblioteca/_llm-outputs/gemini-flash/ag-de-goethe-a1-simulacros.json`.

### B2. Second-pass de verificación anti-slop sobre chunks dudosos
Input: 10 archivos al azar de `rag/*/fuentes/*.md` que te listaré cuando llegues a esta tarea (los de mayor riesgo: papers con cifras). Prompt: dado el chunk y su cita, ¿el dato es consistente internamente y la cita tiene sentido con el locator? Marcar ⚠️ inconsistencias. Salida: `biblioteca/_llm-outputs/gemini-flash/auditoria-chunks-r1.md`.

### B3. Dieta tipo vegetariana-omnívora option para NUTRI (día tipo por macros, SIN recetas)
Input: targets de nutrition (proteína/carbos/hidratación ya citados). Prompt: 2 variantes de "día tipo" (omnívoro/vegetariano) como DISTRIBUCIÓN de macros por comida (desayuno/comida/cena/peri-entreno) usando grupos de alimentos genéricos con gramos — sin recetas específicas (eso es gastronomía), cada distribución cuadra con los targets citados. Salida: `ag-nutri-dia-tipo-variantes.json`.

---

## C. PROTOCOLO DE CIERRE (yo, misión control)
Por cada rama A1-A4 al terminar: verificación independiente (astro check + npm test + validadores de dominio + lectura del diff contra la matriz de ownership) → merge a main → smoke test de ruta en 4321 → actualización de CHECKPOINT.md.

## D. ESTADO DE REFERENCIA (2026-08-25, main 88d4535)
- main: 0 errores, 261/261 tests, 8 dominios RAG (anatomy 448c, career 1647c, fitness 138c, clinical 61c, cardio 41c, nutrition 36c+119 reglas legacy, german 12c, portfolio 36c)
- En curso: OX Alpha con AG-ANATOM (5 bugs del visor, rama agent/anatomia — DESPACHO A de DESPACHO-1)
- Pendiente del usuario: validar visor al terminar ANATOM; datos CV doc-17 §2; API key Gemini ya en .env para worker IA (Fase C CORE, aún sin agente asignado — candidato a A5 en el próximo despacho).
