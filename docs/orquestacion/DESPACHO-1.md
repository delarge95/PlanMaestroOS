# DESPACHO 1 — Tareas para ejecución externa (post-subagentes)

> Nuevo modelo: misión control (GLM 5.3) NO lanza más subagentes de crédito. Tareas van a **OX Alpha** (opencode; alto razonamiento, diseño, código complejo) o **Gemini 3.7 Flash** (chat; contenido, curación, formato). El usuario es el puente. Yo verifico e integro.
> Reglas universales: `docs/orquestacion/NORMAS_ORGESTRADOR.md` + `docs/orquestacion/entornos/REGLAS_COMUNES.md`. Regla de Oro: NADA se borra; cambios aditivos; dudas = preguntar.

---

## A. OX ALPHA — EN CURSO (no interferir)

**Trabajo actual del usuario+OX:** fixes de los 5 bugs del visor anatómico en `E:\Laboral\.worktrees\anatomia` (rama `agent/anatomia`): aislamiento, capas, mesh fantasma del highlight, deselección previa, click sin selección, articulaciones vs huesos. Reglas que YA leyó (worktree anatomia/docs/agents). **Al terminar: commit por fix, `npm test` + astro check (NODE_OPTIONS=--max-old-space-size=8192), y avisar al orquestador para verificar+merge.**

## A2. OX ALPHA — SIGUIENTE PASO (cuando termine A)

**Tarea: completar AG-DE (motor SR alemán a medias).**

```
Contexto: AG-DE murió a media tarea dejando src/lib/languages/spacedRepetition.ts MODIFICADO SIN COMMIT en el worktree E:\Laboral\.worktrees\german (rama agent/german). npm install ya hecho. main YA está mergeado en esa rama hasta 0278c5d.

REGLAS (leer primero, vinculantes):
- E:\Laboral\.worktrees\german\docs\agents\PLAN_MULTIAGENTE.md → §0 (regla de oro #9), ficha §3.5, §1.2
- E:\Laboral\.worktrees\german\docs\agents\PROMPTS_INICIALES.md → §7 (prompt original AG-DE)
- E:\Laboral\.worktrees\german\docs\agents\CHECKPOINT.md (contexto general)

Paso 0: cd E:\Laboral\.worktrees\german && git status && git diff src/lib/languages/spacedRepetition.ts
  → evalúa el archivo a medias: continúalo si es sano o rehazlo; commitea SOLO cuando compile y los tests pasen.

Tareas (1 commit c/u, prefijo feat(german)/fix(german)):
1. Motor SM-2 real (easeFactor con límites [1.3,2.8], quality again|hard|good|easy, intervalo multiplicativo). Extender tests de src/lib/languages/__tests__/spacedRepetition.test.ts SIN romper los existentes. Compatible con consumidores actuales.
2. vocabularyStore.ts (zustand persist 'languages-vocabulary-v1'): items por idioma con ease/interval/lastReviewed, progreso de lecciones, racha real, cola de repaso (vencidos).
3. Genéricos compatibles: LessonView/VocabularySession/LanguageToday sin hardcodes (racha 12 días, toggle inglés fijo) — englishCourse.ts debe seguir compilando SIN tocarlo.
4. Matar legado /app/german (grep referencias primero): german.astro + components/german/.
5. PlacementTest.tsx (15-20 ítems A1.1-A1.2 → coloca unidad) en german.astro.
6. Unidades A1.1 de contenido que llegan de Gemini Flash (ver B3): integrarlas como src/data/languages/german/units/*.ts según el esquema de tipos existente.
7. rag/german.json: bloques chunk de gramática (scripts/build_rag/README.md) + manifest + build + --index.
8. STATUS-german.md (API del motor publicada para AG-EN con ejemplo de uso) + astro check 0 + npm test verde.

PROHIBIDO: englishCourse.ts, components/languages/english/**, rutas inglés, career, ui/tokens/nav (ticket). Commits frecuentes [wip] — el proveedor puede cortar.
```

## A3. OX ALPHA — COLA DESPUÉS DE A2

**AG-CLIN ciclo 1** (montar el módulo clínico): prompt completo en `docs/agents/PROMPTS_INICIALES.md` §5 + tu fila en `TAREAS_USUARIO.md` (sub-RAG salud sexual con gates). Worktree `E:\Laboral\.worktrees\clinical`, rama `agent/clinical`. Puntos clave: ClinicalExecutionHub (31KB huérfano) como experiencia principal de /app/clinical; página unblock.astro real; 8 huérfanos → `_attic/` con nota (NO borrar); store clínico persistido; rag/clinical.json. Luego: **AG-ORQ** (todayAdapter real — heredar calendario B1 del STATUS-fitness.md como contrato).

---

## B. GEMINI 3.7 FLASH — TAREAS PARALELAS (ejecutar YA, en el orden que quieras)

> Todas: pegar REGLAS_COMUNES (docs/orquestacion/entornos/REGLAS_COMUNES.md) + el prompt. Guardar outputs en `biblioteca/_llm-outputs/gemini-flash/<nombre>`. Yo verifico, normalizo e integro (cero créditos).

### B1. LOTE 3 — Curación RAG fitness (la más valiosa)
**Input:** `biblioteca/extracciones/` — archivos aún NO chunked: `low-overcoming-gravity-2ed.md` (83KB, la fuente más importante del dominio fitness), `low-overcoming-tendonitis-2019*`, `nippard-*` (body-recomposition, fundamentals-hypertrophy, glute, powerbuilding, tbts, min-max), `horschig-*` (squat bible, rebuilding milo), `howse-dance-technique*`, `clippinger-dance-anatomy*`, `haas-dance-anatomy*`, `yoga-biomechanics*`, `physiology-of-yoga*` (Bookey — marcar tier inferior), `blahnik-full-body-flexibility*`, `tomlinson-martial-arts*`.
**Prompt:** mismo de TAREA A1 del LOTE-1 (`docs/orquestacion/LOTES/LOTE-1-curacion-rag.md`) cambiando prefijos de id por libro (`og2-`, `otend-`, `nippard-<slug>-`, `horschig-`, …), topic según contenido (`volume|frequency|progression|technique|rehab-tendon|hypertrophy|mobility|cues`), y citas chapter/page SIEMPRE. 1 archivo por mensaje. Prioridad: OG2 → tendonitis → Nippard fundamentals → resto.

### B2. AG-EN — Contenido inglés (3 tandas)
**T2a Vocabulario técnico:** 120+ términos (realtime/graphics: shader, draw call, instancing, LOD…; unity/3d: prefab, blend tree, navmesh, rigging…; web: bundle, hydration, SSR…; ai/tooling: fine-tuning, embeddings, RAG…). JSON array: `{term, definition(EN,≤2 líneas), example(frase técnica real), category, level(B2|C1), lang:'en'}`.
**T2b Business + scenarios:** vocabulario negocio (deliverables, scope creep…) con registro; 8 scenarios (standup, sprint planning, code review, disagreeing, negociación, video calls, small talk, salary opener): `{objective, dialog(6-10 turnos), keyPhrases[{en, register}], variations, typicalMistakesES}`. + STAR: 3 respuestas técnicas (WebGL optimization, CAD pipeline, AI tools) basadas en el doc 23 (`23_interview_answer_bank.md`, raíz del repo — pégalo como contexto; parafrasear y citar "doc-23 §sección").
**T2c Precision C1:** collocations técnicas, phrasal verbs de trabajo, pares formal/informal, falsos amigos ES-EN tech (JSON estructurado).
Formato exacto de esquemas: pedir "SOLO JSON válido, sin texto alrededor".

### B3. AG-DE — Contenido currículo A1.1 (4 unidades)
**Input:** el PDF `public/docs/Grammatik_Aktiv_A1_A2.pdf` — subirlo al chat de Gemini (multimodal) o pegar las páginas de las lecciones correspondientes.
**Prompt:** por unidad → JSON: `{unitId, title, lessons:[{title, theoryMd(con explicación parafraseada, sourcePdfUrl:'/docs/Grammatik_Aktiv_A1_A2.pdf', page:<página real>), vocabulary[8-15]({de, es, example, topic}), listening({transcript, exercise}), writing({template, prompt}), exercises[4-8]({type:'fill_in_blank'|'order_sentence'|'multiple_choice', question, options|parts, answer})}]}`. Unidades: 1 saludos+sein/haben, 2 artículos+nominativo, 3 números+pronomen, 4 Präsens regular+conversación. NADA inventado fuera del PDF; si una página no está, marcar "verificar".

### B4. AG-NUTRI — Reglas hormonales desde papers
**Input:** `biblioteca/_llm-outputs/perplexity/papers-hormonas-femeninas.md` (ya con links/cifras).
**Prompt:** convertir cada hallazgo cuantitativo a bloques `<!-- chunk -->` (formato LOTE-1) con topic `female-physiology|menopause`, locator section:"paper <título corto>", entities tipo `hormone:estrogen`, rules `nutri-paper-<slug>`. SOLO datos del archivo; sin añadir conocimiento externo.

### B5. AG-CLIN — Semilla RAG clínico
**Input:** pegar contenido de `src/data/clinical/protocols.ts` + `routines.ts` (worktree clinical o main) + los 2 PDFs clínicos de `public/docs/` (subirlos).
**Prompt:** chunks por protocolo/rutina con topic `cbt|adhd|anxiety|sleep|routine`, citas al documento, y regla dura: paráfrasis conductual, NADA diagnóstico. Disclaimer al inicio del archivo.

---

## C. LO QUE YO HAGO AL RECIBIR OUTPUTS (sin créditos)
1. Verificación anti-slop (spot-check citas/formato) → 2. Normalización (páginas, límites 1200) → 3. Distribución a `rag/<domain>/fuentes/` + manifests → 4. `build_rag --domain/--index` → 5. Commit + merge si procede → 6. Para código OX: revisar diff, tests, astro check, merge.

## D. ESTADO DE RAMAS (referencia rápida)
| Rama | Estado |
|---|---|
| main | 0278c5d — CORE+BIB+NUTRI+PORT+FIT+ANATOM(c1-3)+CARDIO+CAREER mergeados; 206 tests |
| agent/anatomia | OX Alpha trabajando (5 bugs visor) |
| agent/german | A2 pendiente (spacedRepetition.ts a medias sin commit) |
| agent/clinical, agent/orquestador, agent/english | vírgenes, esperando A3/B2 |
