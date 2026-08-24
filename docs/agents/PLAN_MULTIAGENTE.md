# Plan Maestro OS — Plan de Trabajo Multi-Agente

> Versión 1.1 · 2026-08-22
> Este documento es la fuente de verdad para la segmentación de agentes. Cada agente debe leer su ficha completa antes de trabajar y respetar la matriz de ownership sin excepciones.
> Los prompts de arranque de cada agente están en `docs/agents/PROMPTS_INICIALES.md` (incluye el sub-prompt de extracción con Gemini §0 para PDFs pesados/gráficos).

---

## 0. Principios arquitectónicos (heredados de la conversación de diseño)

Estos principios son vinculantes para TODOS los agentes:

1. **Núcleo determinista + IA como capa narrativa.** Las reglas numéricas viven en código verificable (TypeScript puro, testeable). El LLM solo compone texto sobre evaluaciones ya existentes. **Ningún número visible en la app puede carecer de trazabilidad** a un `ruleId`, a una fuente citada (documento/capítulo/página) o a un dato del ledger del usuario.
2. **IA proactiva por eventos, no por chat.** EventBus local determinista (tiempo, ciclo, sesión, anomalía) → motor de reglas → SuggestionEngine → cola persistente (máx 3 activas, cooldowns por tipo) → superficies (briefing, banner, tarjeta intra-sesión, revisión semanal). Máx 1 nudge event-driven/día. El chat es fallback.
3. **Todo output de IA es borrador con aprobación humana** (`AiDraftReview`: Editar/Aprobar/Descartar), con fuentes visibles ("Datos usados") y logging por llamada. Sin diagnóstico clínico ni contenido con copyright de los libros.
4. **Ciclo de vida de sugerencias**: `proposed → shown → accepted|dismissed|expired → applied → outcome tracked`. Cooldowns por tipo; "ahora no" ≠ "no me interesa". Este historial alimenta la priorización futura.
5. **GitHub Pages = estático.** Motor 100% client-side (rápido, offline, privado). Persistencia real en IndexedDB (vía adaptador, no localStorage crudo) con export/import JSON. LLM opcional (BYOK o worker mínimo); la app debe ser 100% funcional sin LLM.
6. **UX simple, motor complejo.** Cada pantalla responde una pregunta: "¿qué hago hoy y por qué?". Todo consejo lleva su "¿por qué?" con cita a fuente.
7. **Contrato de estado del usuario antes que las reglas.** `UserState` (perfil, daily logs, sesiones, dolor, skills, métricas) es prerrequisito: las condiciones de aplicación de las reglas dependen de qué es expresable en él.
8. **Gobernanza de reglas**: `draft → reviewed → approved`; deprecación nunca borrado; `evidenceTier` (meta-análisis > RCT > observacional > libro de experto) participa en resolución de conflictos entre fuentes.
9. **REGLA DE ORO (innegociable, añadida 2026-08-23 tras incidente FIT)**: prohibido eliminar o reemplazar funciones/trabajos consolidados. Todo cambio es ADITIVO o requiere aprobación explícita del usuario. Ningún agente borra componentes "porque parecen muertos" sin verificación de referencias Y aprobación. La UX consolidada (buscadores, submenús, agrupaciones, configuradores completos) es intocable salvo mandato expreso.
10. **Orquestación económica**: el trabajo de bajo razonamiento se delega a los entornos externos gratuitos según la matriz de `docs/orquestacion/NORMAS_ORQUESTADOR.md` (navegadores ilimitados → OX Alpha → Antigravity/Zed → Autoclaw → créditos Zcode como última opción). Los subagentes de crédito solo para razonamiento máximo.

---

## 1. Modelo de gobernanza multi-agente

### 1.1 Ramas

| Agente | Rama |
|---|---|
| AG-CORE | `agent/core` |
| AG-FIT | `agent/fitness` |
| AG-ANATOM | `agent/anatomia` |
| AG-NUTRI | `agent/nutricion` |
| AG-CLIN | `agent/clinical` |
| AG-CAREER | `agent/career` |
| AG-DE | `agent/german` |
| AG-EN | `agent/english` |
| AG-PORT | `agent/portfolio` |
| AG-ORQ | `agent/orquestador` |
| AG-GASTRO (opcional) | `agent/gastronomy` |

- Todas nacen de `main` y se sincronizan con `main` por rebase semanal.
- **Nadie hace merge directo a `main`.** Merge vía PR revisado (por el usuario o por AG-CORE como revisor técnico).
- Orden de merges en cada ola: primero AG-CORE (infraestructura compartida), después los domain agents en paralelo, al final AG-ORQ (integración).

### 1.2 Matriz de ownership (la regla más importante)

Tres categorías por agente:
- **OWN** — el agente crea/modifica/borra libremente.
- **READ** — puede leer e importar, jamás modificar.
- **TICKET** — necesita cambios → abre ticket en `docs/agents/tickets.md` y lo ejecuta AG-CORE (o el owner).

**Archivos compartidos globales (solo AG-CORE los edita, todos los demás TICKET):**
- `package.json`, `tsconfig.json`, `vitest.config.ts`, `astro.config.mjs`
- `src/styles/tokens.css`, `src/styles/typography.ts`
- `src/components/ui/**` (componentes primitivos)
- `src/components/shell/navItems.ts`, `src/components/shell/sectionNavConfig.ts`
- `src/store/appStore.ts`
- `src/data/types.ts` (contratos globales), `src/data/canonicalDomainModel.ts`
- `src/data/master_rag_dataset.json`, `src/data/rag_index.json`, `src/data/ragEngine.ts` (framework)
- `src/lib/ai/**`, `worker/**` (capa IA)
- `src/layouts/**`

Excepción controlada: si un agente necesita añadir SU bloque en `sectionNavConfig.ts`, lo hace añadiendo únicamente su entrada de sección sin tocar otras (edición aditiva de una línea por entrada), documentada en el PR.

### 1.3 Reglas anti-conflicto

1. Nunca editar un archivo que no está en tu OWN. Si un fix cae en territorio ajeno: ticket + workaround local temporal.
2. Los contratos entre dominios se definen como tipos en archivos propios del consumidor o vía TICKET a `src/data/contracts/`.
3. Cada PR debe pasar: `npx astro check` (0 errores), `npm test` (verde), validadores de su dominio, y no tocar rutas de otros agentes (check del diff contra la matriz).
4. Commits con prefijo de dominio: `feat(fitness):`, `fix(career):`, `chore(core):`…

---

## 2. Contratos transversales (AG-CORE los entrega ANTES de que los demás escalen contenido)

Son prerrequisitos; sin ellos los agentes de dominio no pueden construir su capa inteligente:

1. **`UserState` + vistas derivadas** (`src/data/contracts/userState.ts`): perfil, daily logs, sesiones, dolor por zona, skills, métricas; agregados semanales y deltas.
2. **`TrainingRule`/`DomainRule` genérico** (`src/lib/rules/`): motor de evaluación puro sin DOM, con `appliesWhen`, `confidence` (`explicit|inferred|qualitative`), `evidenceTier`, `sourceRef`. Reutilizable por fitness, clinical, languages y career.
3. **EventBus + SuggestionEngine** (`src/lib/events/`, `src/lib/suggestions/`): taxonomía de eventos, ciclo de vida de sugerencias, cola persistente, cooldowns.
4. **Pipeline RAG v4** (`scripts/build_rag/`): formato chunked con metadatos (ver §4), builder por dominio, `rag/<domain>.json` + índice. Sustituye el keyword search actual.
5. **Persistencia IndexedDB** (`src/lib/storage/`): adaptador Dexie (o equivalente) con export/import JSON y migración de localStorage actual.
6. **Cliente IA worker** (`worker/src/ai/`): wrapper Gemini con timeout/límites/logging, prompts versionados, modo BYOK; la app funciona sin él.

---

## 3. Fichas de agente

---

### 3.1 AG-CORE — Plataforma, contratos e infraestructura IA

**Objetivo:** construir y gobernar la infraestructura compartida para que 7 agentes de dominio trabajen en paralelo sin pisarse.

| | |
|---|---|
| **Rama** | `agent/core` |
| **OWN** | `src/components/ui/**`, `src/components/shell/**`, `src/store/**`, `src/styles/**`, `src/layouts/**`, `src/lib/ai/**`, `src/lib/rules/**`, `src/lib/events/**`, `src/lib/suggestions/**`, `src/lib/storage/**`, `src/lib/sync/**`, `worker/**`, `scripts/build_rag/**`, `src/data/master_rag_dataset.json`, `src/data/ragEngine.ts`, `src/data/rag_index.json`, `src/data/types.ts`, `src/data/canonicalDomainModel.ts`, `src/data/contracts/**` (nuevos), `src/pages/api/**`, config raíz |
| **READ** | todo el repo |
| **FORBIDDEN** | `src/components/{fitness,clinical,career,languages,german,gastronomy}/**`, `src/data/{fitness,exercises,clinical,career,languages,gastronomy}/**`, `src/pages/app/{fitness,clinical,career,languages,gastronomy}/**`, `src/pages/*.astro` (portafolio), datasets de dominio |

**Fases:**
1. **Fase A — Contratos (crítica, primero):** `UserState`, motor de reglas genérico, EventBus, SuggestionEngine, pipeline RAG v4, IndexedDB adapter. Con tests unitarios propios.
2. **Fase B — Limpieza de nav y shell:** corregir desajustes (`/app/clinical/unblock` 404, gastronomy `recipes/queue` inexistentes, `/app/schedules` y `master-plan` fuera de nav, rutas fitness alias). Un solo dueño de la navegación.
3. **Fase C — Worker IA:** cliente Gemini, prompts versionados por dominio (los agentes de dominio aportan el contenido de sus prompts vía TICKET con plantilla), jobs diarios (`morning-plan`, `evening-review`, `stuck-tasks`).
4. **Fase D — Calidad continua:** CI con `astro check + vitest + validadores`, y revisión técnica de los PRs del resto.

**Limitaciones:** no implementa features de dominio ni contenido; no decide copy de negocio; todo cambio de contract va versionado (`userState.v1.ts`) con migración.

**RAG:** framework + `rag/core.json` (docs de arquitectura propios). No posee contenido temático.

---

### 3.2 AG-FIT — Fitness inteligente (libros + papers → reglas + progresiones)

**Objetivo:** convertir ~40 libros y 23 papers ya extraídos en el sistema experto determinista de entrenamiento: reglas, progresiones, sugerencias proactivas, con la sección fitness consolidada (fichas previas ya ejecutadas: selectores zustand, guards, 1.494 prescripciones validadas).

| | |
|---|---|
| **Rama** | `agent/fitness` |
| **OWN** | `src/components/fitness/**` (EXCEPTO `anatomy/**` y `nutrition/**`), `src/pages/app/fitness/**` (excepto `anatomy.astro` y `nutrition.astro`), `src/data/fitness/**` (excepto `anatomy/**`, `nutrition/**`, `anatomyGraph.ts`), `src/data/exercises/**`, `src/lib/fitness/**`, `scripts/validateFitness*.ts`, `scripts/validateSkills.ts`, `rag/fitness/**` |
| **READ** | `src/data/schedules/**` (para respetar el grid semanal), `_pdf_biblia/**` (fuentes de investigación), `src/lib/ai/**`, contratos CORE, `src/data/fitness/anatomyGraph.ts` (grafo de AG-ANATOM — el mapeo ejercicio→músculo se consume, no se redefine) |
| **FORBIDDEN** | todo lo de otros dominios; `src/components/ui/**`; tokens/nav (TICKET); clinical; `src/components/fitness/anatomy/**` y `src/components/fitness/nutrition/**` (territorio de AG-ANATOM/AG-NUTRI, trabajan en paralelo dentro de fitness) |

**Fases:**
1. **Fase 0 — Consolidación UI (decidida):** `FitnessTabWorkspace` como experiencia oficial en `/app/fitness` con tabs (hoy/rutinas/progreso/biblioteca); eliminar ~11 componentes muertos (MinMaxRoutineTable, ActiveProgramSelector, ThenxGuideDatabase, MyPracticeView, SkillHistoryView, BooksLibraryView, CalisthenicsLearningHub, LoadGuide, PrehabSkillView, SkillProgressionPath, UnifiedRoutineTable-UI); unificar rutina min-max en `fitappRoutineDataset.ts` como única fuente (hoy duplicada en 3 sitios divergentes); migrar `WorkoutPrescriptionTable` a `useIsMobile`; index keys en listas filtradas.
2. **Fase 1 — RAG estático fitness:** ingesta de las extracciones Markdown de los 40 libros (formato de extracción ya definido) y los 23 papers (prompt específico: población/intervención/comparador/outcome/tamaño del efecto) → `rag/fitness.json` chunked con `evidenceTier`, edición del libro, capítulo/página. El grafo ejercicio→músculos→articulaciones lo construye AG-ANATOM (`anatomyGraph.ts`); AG-FIT lo consume READ y valida contra sus datasets.
3. **Fase 2 — Reglas:** catálogo `DomainRule` fitness desde el RAG (volumen, frecuencia, intensidad, dolor, progresión, descanso, deload) con `appliesWhen` sobre `UserState`; matriz de autoridad entre fuentes (OG domina progresiones calisténicas, Nippard hipertrofia, Overcoming Tendonitis rehab tendinosa…), resolución de conflictos por scope poblacional + evidenceTier.
4. **Fase 3 — Sugerencias y superficies:** pre-workout gate (energía/dolor del día modifica sesión con cita), guardarraíles intra-sesión (spike de dolor → sustitución de la `substituteOptions` ya validada), debrief post-sesión, weekly review. Integración con EventBus de CORE. El visor 3D anatómico y la nutrición deportiva NO son de este agente (AG-ANATOM y AG-NUTRI trabajan esas capas en ramas paralelas).

**Limitaciones:** nada clínico por debajo de info+derivación (protocolos de dolor siempre con disclaimer y gate); no diagnostica; no automática la intervención; ningún número sin `ruleId`/fuente.

**RAG:** `rag/fitness.json` — fuentes: extracciones de libros (40), papers (23), `progressionsData.ts` (OG), `thenx_technique_guides.json`, `prehabProtocols.ts`, datasets de programas. Superficies de consulta: ExerciseModal (ficha técnica con citas), pre-workout gate, "¿por qué?" de cada sugerencia.

**Validadores propios:** `validateFitness.ts`, `validateFitnessPrograms.ts`, `validateSkills.ts` + tests de `src/lib/fitness/`.

---

### 3.2B AG-ANATOM — Anatomía 3D interactiva (músculos, tendones, nervios, articulaciones)

**Objetivo:** construir la capa anatómica de la app: un visor 3D interactivo (músculos, tendones, nervios, articulaciones) sobre los 9 modelos GLB ya preparados, conectado a un grafo de conocimiento anatómico extraído de las bíblias de anatomía. Trabaja DENTRO de fitness pero en paralelo a AG-FIT, con territorio propio.

**Assets 3D disponibles (commiteados en `E:\Laboral\_pdf_biblia\Planeacion_Integral\3D assets\`):** `colored-skull-base.glb`, `exploded-skull.glb`, `overview-colored-skull.glb`, `hand.glb`, `lower-limb.glb`, `upper-limb.glb`, `overview-skeleton.glb`, `vertebrae.glb` (+ archivos tar/zip ignorados). El agente los copia a `public/models/anatomy/` (con compresión Draco/meshopt si procede) y construye sobre ellos.

**Biblioteca anatómica (fuente de verdad, en `D:\Downloads\Libros\` y `D:\Downloads\Libros\Faltan\`):**

Primarias:
- `"D:\Downloads\Libros\Faltan\Grays-Anatomy-for-Students-4th-Edition.pdf"` (191 MB) — anatomía regional completa
- `"D:\Downloads\Libros\Faltan\clinically-oriented-anatomy-sixth-edition-sixth_compress.pdf"` (61 MB) — Moore, orientación clínica
- `"D:\Downloads\Libros\levangie_pamela_k_norkin_cyhthia_c_lewek_md_joint_structure.pdf"` (105 MB) — articulaciones: estructura y función (**ya existe capa de texto completa en el `.txt` homónimo, usarla como atajo**)
- `"D:\Downloads\Libros\Faltan\Skeletal Muscle_Form and function  Second edition -- Brian R_Maclntosh..."` (63 MB) — músculo esquelético: forma y función
- `"D:\Downloads\Libros\Faltan\Neuromechanics of Human Movement - 4th Edition -- Enoka, Roger M_..."` (48 MB) — sistema nervioso y control motor

Secundarias (kinesiología aplicada): `clippinger_ks_dance_anatomy_and_kinesiology.pdf`, `haas_jacqui_greene_dance_anatomy.pdf`, `732450711-Yoga-Biomechanics-Stretching-Redefined-*.pdf`, `biomechanics-of-dance-*.pdf`, `Open-Textbook-of-Exercise-Physiology-1756071395.pdf`, capítulos anatómicos de `haff_g_gregory_triplett_n_travis_eds_essentials_of_strength.pdf`.

Los PDFs son pesados y con contenido gráfico: la extracción se hace con **Gemini (Flash) sección por sección** usando el sub-prompt de `docs/agents/PROMPTS_INICIALES.md` (§0), para no perder información.

| | |
|---|---|
| **Rama** | `agent/anatomia` |
| **OWN** | `src/components/fitness/anatomy/**`, `src/pages/app/fitness/anatomy.astro`, `src/data/fitness/anatomy/**`, `src/data/fitness/anatomyGraph.ts` (grafo ejercicio↔músculo↔tendón↔nervio↔articulación — entrega central), `public/models/anatomy/**`, `rag/anatomy.json`, extracciones en `rag/anatomy/extractions/**` |
| **READ** | `src/data/exercises/**` (nombres canónicos de ejercicios para el grafo), `src/data/fitness/muscleData.ts`, `src/data/fitness/prehabProtocols.ts`, Three.js deps, `src/components/ui/**`, contratos CORE, GLBs fuente en `_pdf_biblia/.../3D assets` |
| **FORBIDDEN** | todo lo demás de fitness (AG-FIT), clinical (nervios ≠ diagnóstico neurológico: AG-ANATOM muestra estructura, no patología), nutrition (AG-NUTRI), tokens/nav (TICKET: su entrada en sectionNav es aditiva de una línea) |

**Fases:**
1. **Fase 0 — Visor 3D:** página `/app/fitness/anatomy` con visor Three.js react (uso del ya presente en el repo), carga diferida por modelo, selector de modelo (esqueleto general, cráneo ×3, mano, miembro superior, miembro inferior, vértebras), órbita/zoom, resaltado de piezas por hover/tap con nombre, y modo exploded donde aplique (`exploded-skull.glb`). Performance mobile-first (Draco/meshopt, `useIsMobile`).
2. **Fase 1 — Grafo anatómico (`anatomyGraph.ts`):** entidades `Muscle`, `Tendon`, `Nerve`, `Joint` con campos Gray's/Moore (origen, inserción, inervación, acción, ROM, irrigation opcional), relacionadas con los meshes de cada GLB (por nombre de nodo/mesh) y con `exerciseDatabase` (READ: qué ejercicios cargan cada estructura). Parafraseado con cita libro+capítulo+página; nada de texto literal largo.
3. **Fase 2 — Extracción con Gemini sección por sección:** recorrer Gray's/Moore/Levangie/MacIntosh/Enoka por regiones relevantes al entrenamiento (hombro, codo/muñeca, columna, cadera, rodilla, tobillo/pie, core) → markdowns de extracción (formato §0 de PROMPTS_INICIALES.md con la plantilla anatómica) → `rag/anatomy.json` chunked.
4. **Fase 3 — Interactividad con la app:** tap en estructura → ficha (función, ejercicios que la cargan, notas de prehab de `prehabProtocols.ts`, cita); tap-mantener → reportar dolor en zona (alimenta `UserState.pain` por BodyZone vía contrato CORE — mismo vocabulario de zonas que fitness/clinical); highlight músculos activos de un ejercicio desde ExerciseModal (AG-FIT expone hook READ; coordinación por ticket).
5. **Fase 4 — Nervios y tendones:** capa de inervación (Enoka) y cadenas tendinosas (Levangie/MacIntosh) visibles en el visor, conectadas a las reglas de carga tendinosa de AG-FIT (consumo READ de `prehabProtocols`).

**Limitaciones:** no diagnostica ni muestra patología (eso es clinical con gate); no redefine el mapeo ejercicio→músculo que ya vive en datasets de AG-FIT — lo enriquece en SU grafo y publica; los assets GLB no se re-exportan sin necesidad (si un modelo necesita etiquetado de meshes, se documenta el mapping, no se re-modela).

**RAG:** `rag/anatomy.json` — fuentes: las 5 bíblias + secundarias. Entidades anatomizadas consultables por zona/estructura/ejercicio. Superficies: visor 3D, ExerciseModal, pre-workout gate (dolor por zona → estructura implicada).

---

### 3.2C AG-NUTRI — Nutrición deportiva (la capa que faltaba en fitness)

**Objetivo:** cubrir la brecha de nutrición de la categoría fitness: un módulo de nutrición deportiva basado en los libros de referencia, con reglas medibles (proteína g/kg, timing peri-entreno, hidratación, composición) integradas al motor de reglas — SIN solaparse con gastronomía (recetas) ni con clinical (supervisión médica).

**Biblioteca (en `D:\Downloads\Libros\` y `Faltan\`):**

Primarias:
- `"D:\Downloads\Libros\Faltan\sport-nutrition_compress.pdf"` (33 MB) — Sport Nutrition (referencia principal)
- `"D:\Downloads\Libros\Nutrition In Sport - Maughan.pdf"` (4 MB) — Nutrition in Sport (Maughan, enciclopédico)
- `"D:\Downloads\Libros\sport-nutrition_compress_compressed.pdf"` (3.5 MB) — deduplicar con la principal (probablemente el mismo libro comprimido)
- Capítulos de nutrición de `"D:\Downloads\Libros\haff_g_gregory_triplett_n_travis_eds_essentials_of_strength.pdf"` (NSCA)

| | |
|---|---|
| **Rama** | `agent/nutricion` |
| **OWN** | `src/components/fitness/nutrition/**`, `src/pages/app/fitness/nutrition.astro`, `src/data/fitness/nutrition/**`, `rag/nutrition.json`, extracciones en `rag/nutrition/extractions/**` |
| **READ** | `src/lib/rules/**` (motor de CORE), `UserState` (peso/métricas/sesiones para g/kg y timing), `src/data/gastronomy/**` (macros de recetas — puente por contrato), docs fitness para consistencia |
| **FORBIDDEN** | gastronomy (recetas/chefs/planes), clinical (dietas terapéuticas = gate clínico), resto de fitness (AG-FIT/AG-ANATOM), tokens/nav (TICKET aditivo) |

**Fases:**
1. **Fase 0 — Extracción y RAG:** Gemini sección por sección sobre los libros primarios → markdowns (plantilla de extracción §0) → `rag/nutrition.json` chunked con reglas medibles: proteína total y por comida, carbohidratos peri-entreno, hidratación (+electrolitos), creatina/suplementos con evidencia, timing, déficit/superávit por objetivo. `evidenceTier` obligatorio (los books de nutrición citan RCTs/meta-análisis: capturar el tier del dato, no solo del libro).
2. **Fase 1 — Módulo UI:** página `/app/fitness/nutrition` con: calculadora personal (usa métricas de `UserState`: peso, objetivo, volumen semanal de entrenamiento desde sesiones), targets diarios por regla citada, y día tipo alineado al grid semanal.
3. **Fase 2 — Reglas e integración:** `DomainRule` nutricionales en el motor de CORE (ej. "proteína < 1.6 g/kg en déficit → sugerencia con cita"), conexión con gastronomía vía contrato (macros de receta READ → ¿encaja en el target del día?), sugerencias proactivas en briefing post-sesión (ventana de recuperación).
4. **Fase 3 — Ciclo de mejora:** tracking simple de adherencia (check + peso), ajuste de targets por tendencia con cita, integración con weekly review.

**Limitaciones:** nada de dietas terapéuticas/clinicas ni consejos médicos (obesidad, diabetes, TCA → derivación a profesional con disclaimer); no inventa recetas (eso es gastronomía); suplementos solo con evidencia documentada en las fuentes y con tier; cada número con regla+cita.

**RAG:** `rag/nutrition.json`.

---

### 3.3 AG-CLIN — Clinical / TDAH

**Objetivo:** convertir el módulo clínico (TDAH + ansiedad social + CBT) en el sistema de gestión de energía/carga cognitiva que modula TODO el plan maestro, montando el módulo grande hoy desconectado.

| | |
|---|---|
| **Rama** | `agent/clinical` |
| **OWN** | `src/components/clinical/**`, `src/pages/app/clinical/**`, `src/data/clinical/**`, `src/lib/clinical/**`, `rag/clinical.json` |
| **READ** | `canonicalDomainModel` (bridge energía/dolor con fitness), reportes PDF clínicos en `public/docs/`, contratos CORE |
| **FORBIDDEN** | fitness (el puente `perceivedEnergy/painScore` se consume por contrato, no editando fitness), clinical no prescribe entrenamiento |

**Fases:**
1. **Fase 0 — Montar lo huérfano:** `ClinicalExecutionHub` (31 KB: bio-feedback diario energía/ansiedad/dolor/sueño + jerarquía de exposiciones) es el módulo más completo y no está cableado. Conectarlo como ruta principal; decidir el destino de los otros 8 huérfanos (HomeClinicalDashboard, FocusModeShell, InertiaRescueModal, MorningEveningWorkflowsModal…); arreglar el 404 de `/app/clinical/unblock`.
2. **Fase 1 — Datos reales:** reemplazar seeds por persistencia vía adaptador CORE; conectar bio-feedback diario al `UserState` (energía/dolor alimentan las reglas de fitness vía contrato, no por import directo).
3. **Fase 2 — RAG clínico:** `rag/clinical.json` desde el reporte de neurodesarrollo + plan de acción TDAH/ansiedad + protocolos CBT, con regla dura: solo estrategias de manejo conductual ya documentadas, nada de contenido diagnóstico. Disclaimer visible en toda superficie.
4. **Fase 3 — Modulación del sistema:** reglas "si energía baja → versión mínima viable del día" (el modelo `minViable/normal/extended` ya existe en `canonicalDomainModel`) aplicadas a las cargas de todos los dominios vía EventBus.

**Limitaciones:** nunca framing de dispositivo médico; reglas clínicas nunca proactivas fuera de contexto relevante; toda sugerencia con disclaimer y derivación.

**RAG:** `rag/clinical.json` — fuentes: reporte clínico, plan de acción, protocolos.ts existentes. Consulta desde: panel clínico, adaptación de carga del día, "¿por qué?" con cita al documento.

---

### 3.4 AG-CAREER — Laboral (47 documentos → sistema operativo de búsqueda)

**Objetivo:** que la sección career deje de ser simulación con mocks y pase a ser el sistema operativo real de la búsqueda laboral internacional, con TODOS los archivos de investigación laboral (00–36 + Historic + Research) ingestado y consultable.

| | |
|---|---|
| **Rama** | `agent/career` |
| **OWN** | `src/components/career/**` (EXCEPTO `PortfolioSimulator.tsx`), `src/pages/app/career/**` (excepto `portfolio.astro`), `src/data/career/**` (excepto `portfolioProjects.ts`), `rag/career/**` |
| **READ** | los 47 md raíz + `Historic/` + `Research/` + `_roadmap_laboral/` (xlsx tracker), `_obsidian/`, RAG framework |
| **FORBIDDEN** | `PortfolioSimulator.tsx` y `portfolioProjects.ts` (AG-PORT), portafolio público, languages (los docs de idiomas solo se referencian), `src/data/languages/**` |

**Ingesta obligatoria — mapeo completo de los 47 documentos por grupo temático:**

| Grupo | Docs → destino en app |
|---|---|
| Perfil/posicionamiento | 00, 01, 02 → motor de targeting y reglas de consistencia |
| Salary/remoto | 03 → calculadora de rangos por rol/país en ficha de oferta |
| Movilidad EU | 04 → módulo de contexto de movilidad en scorecard de oferta |
| Educación | 06 → CourseTracker (criterios de decisión curso/máster) |
| Empresas/mercado | 11 (57 KB), 30 → `CompanyDatabase` con datos reales en vez de seed mock |
| TwinSight | 08, 08B (solo lectura — pertenecen a AG-PORT) |
| Tracker/ejecución | 12, 25 (xlsx), 26, 34 → JobsPipeline con persistencia real + import/export del tracker xlsx |
| Outreach | 22 → biblioteca de templates con variables por target |
| Entrevistas/ofertas | 13, 23, 24, 35 → módulo "Entrevistas": banco de respuestas, scorecard de oferta, sistema de defensa |
| Planificación | 14, 15, 16, 27, 31, 32 → cablear `InteractiveRoadmapDashboard` (hoy huérfano), escenarios 27 seleccionables, matriz de targeting 31 con scoring |
| Lanzamiento | 36 → checklist de launch sincronizado con AG-PORT |
| Benchmarks | 28, 28B, 28C, 29, 29B (ArtStation 28D/28E/29C → AG-PORT) → reglas de calidad aplicadas al simulador vía datos |

**Fases:**
1. **Fase 0 — Datos reales:** sustituir seeds mock (Epic/Ubisoft/Riot fixtures) por persistencia vía adaptador CORE; import inicial desde `_roadmap_laboral/tracker/*.xlsx`; validar regla de `validateSingleNextAction` en UI.
2. **Fase 1 — RAG career:** `rag/career.json` — los 47 md chunked por sección con metadatos de grupo (tabla anterior), doc-id estable y citas "doc §sección". Reemplaza la ingesta blob actual de `master_rag_dataset`. Consulta desde: toda la sección career ("¿qué decía el doc 24 sobre equity?"), drafts IA de outreach con fuentes del doc 22.
3. **Fase 2 — Módulos nuevos:** Entrevistas (23/35/24/13), Outreach (22), Targeting matrix con scoring (31), escenarios (27), cablear InteractiveRoadmapDashboard (14/15/16).
4. **Fase 3 — IA laboral:** drafts de follow-up/mensajes con `AiDraftReview` (ya existe el tipo `CareerAIDraft`), jobs `career-research` y `stuck-tasks` (aplicaciones >7 días sin movimiento → hipótesis de bloqueo), todo con fuentes citadas de los docs.

**Limitaciones:** no fabrica vacantes ni contactos no documentados; respeta la regla del doc 01 (source of truth del perfil) — si un documento posterior contradice al 01, gana el 01 y se registra en gap register (doc 16); no toca el portafolio ni CV (AG-PORT).

**RAG:** `rag/career.json` (47 docs + Historic 9 + Research índice). Es el RAG más grande del sistema.

---

### 3.5 AG-DE — Alemán académico (desde cero, todos los aspectos)

**Objetivo:** convertir la sección de alemán (hoy 2 lecciones + 5 ítems de vocabulario sin persistencia) en un curso académico completo desde nivel 0, cubriendo TODOS los aspectos del aprendizaje de idioma: gramática, vocabulario, lectura, escucha, expresión escrita y oral, con preparación de certificación.

**Contexto del perfil:** el alemán arranca de cero y es prioritario (bloque intocable 13:30–14:00 del grid semanal, motivo Alemania en la estrategia de movilidad doc 04, meta B1–B1+ para empleo).

| | |
|---|---|
| **Rama** | `agent/german` |
| **OWN** | `src/data/languages/germanCourse.ts` (+ todos los archivos nuevos `src/data/languages/german/**`), `src/pages/app/languages/german.astro`, `src/components/languages/german/**` (nuevos), `src/lib/languages/**` (mejora del motor SR — es el primero que lo necesita), `rag/german.json`, y **en Fase 1 únicamente** los componentes genéricos compartidos (`LessonView`, `VocabularySession`, `SpeakingPractice`) con regla de compatibilidad |
| **READ** | `src/data/languages/types.ts` (contratos), `Grammatik_Aktiv_A1_A2.pdf` (public/docs), `scheduleData.ts` (bloques), docs 04/05 (READ), componentes del propio hub |
| **FORBIDDEN** | `src/data/languages/englishCourse.ts` y cualquier contenido en; rutas de inglés; career |

**Fases:**
1. **Fase 0 — Motor de curso real:** persistencia de progreso y vocabulario (adaptador CORE, no localStorage suelto); repetición espaciada SM-2 real usando `easeFactor` (hoy existe en el tipo pero el algoritmo es una escalera fija); test de nivelación; racha real (hoy hardcodeada 12 días); matar el legado `/app/german` (GermanTabWorkspace/GermanLearningHub huérfanos) tras migrar lo útil. Regla para los componentes compartidos: sin hardcode `de`, extensión aditiva de props, compatibilidad hacia englishCourse tal cual está.
2. **Fase 1 — Currículo académico A1→B1:** programa por unidades alineado a Grammatik Aktiv A1–A2 +puente a B1: progresión gramatical sistemática (declinaciones, casos, verbos modales, Perfekt, subordinate clauses…), vocabulario académico por frecuencia (objetivo: ~600 palabras A1 → ~2.000 A2 → ~3.000 B1), listening (transcripciones + ejercicios), escritura guiada (plantillas de producción A1→B1), speaking estructurado. Cada lección con `sourcePdfUrl` y página citada.
3. **Fase 2 — Preparación de certificación:** módulo Goethe-Zertifikat (empezar por A1, luego B1): formato de examen, simulacros por parte (Hören/Lesen/Schreiben/Sprechen), tablas de criterios de evaluación.
4. **Fase 3 — RAG alemán:** `rag/german.json` — reglas de gramática como entidades consultables (regla, explicación parafraseada, ejemplos, excepciones, cita a página del PDF), glosario académico etiquetado por nivel/tema. Consulta desde: corrección de ejercicios ("¿por qué es Dativ aquí?" → cita), microlearning contextual en el briefing diario.
5. **Fase 4 — Integración:** streak y bloque 13:30–14:00 del grid visibles en Today (vía AG-ORQ, contrato), sugerencias proactivas de repaso SR en el daily briefing (las tarjetas vencidas son el caso de uso perfecto del SuggestionEngine).

**Limitaciones:** no aplica su propio motor a inglés (solo lo hace posible); no inventa contenido gramatical sin fuente (parafrasea el PDF con página); no toca el hub `/app/languages` compartido más allá de lo aditivo.

**RAG:** `rag/german.json`. **Validadores propios:** tests de SR-2 + test de integridad del currículo (cada lección con teoría+ejercicios, cada ejercicio resoluble, cada vocab item con nivel/tema).

---

### 3.6 AG-EN — Inglés conversacional, técnico y de negocio

**Objetivo:** sección de inglés orientada a fluidez conversacional y vocabulario técnico/empresarial — NO curso académico desde cero: el perfil ya tiene inglés avanzado (C1 objetivo); el foco es activar vocabulario pasivo, precisión técnica y desempeño en contextos de negocio.

| | |
|---|---|
| **Rama** | `agent/english` |
| **OWN** | `src/data/languages/englishCourse.ts` (+ nuevos `src/data/languages/english/**`), `src/pages/app/languages/english.astro`, `src/components/languages/english/**` (nuevos), `rag/english.json` |
| **READ** | componentes genéricos del hub (consume el motor que AG-DE construye, via contractos de props), `src/data/languages/types.ts`, doc 05 (estrategia de idiomas, READ), banco de entrevistas doc 23 (READ — para el módulo de interview English, citando fuente) |
| **FORBIDDEN** | componentes genéricos compartidos (TICKET vía CORE si falta algo), `germanCourse.ts`, alemán |

**Fases:**
1. **Fase 0 — Datos reales:** vocabulary en inglés (hoy 0 ítems), persistencia vía adaptador CORE, integración con el motor SR mejorado por AG-DE (dependencia: se monta tras la Fase 0/1 de AG-DE o con la interfaz ya contratada).
2. **Fase 1 — Módulos de contenido:** (a) **Conversacional**: scenarios de small talk, meetings, standups, negociación, disagreeing politely, video calls; práctica speaking con Web Speech API (sustituir el mock estático de SpeakingPractice con implementación propia en `components/languages/english/`). (b) **Vocabulario técnico**: glosarios por dominio — realtime/graphics (shader, draw call, profiling…), Unity/3D pipeline, web dev, IA/tooling — mapeados al perfil técnico real. (c) **Business**: job interviews (bank EN del doc 23 como fuente citada), salary negotiation (doc 13/24), emails/mensajes a recruiters (doc 22), code review / standup phrases. (d) **Precisión C1**: collocations, phrasal verbs de negocio, register (formal/informal), errores típicos de hispanohablantes.
3. **Fase 2 — RAG inglés:** `rag/english.json` — glosario técnico etiquetado por dominio, frases por escenario con registro, banco de entrevistas EN (del doc 23, parafraseado). Consulta desde: sesiones de práctica, briefing ("phrase of the day" contextual al calendario: si hay entrevista → preguntas top).
4. **Fase 3 — Proactividad:** flashcards SR vencidas en briefing; antes de un evento de carrera (entrevista agendada en JobsPipeline vía contrato de eventos), micro-drill de 5 min de interview English.

**Limitaciones:** no construye infraestructura de motor (la consume); no duplica el banco de entrevistas del doc 23 en datos crudos — lo cita; contenido en files propios `english/**` siempre.

**RAG:** `rag/english.json`.

---

### 3.7 AG-PORT — Portafolio público + CV + ArtStation

**Objetivo:** el portafolio como producto de marketing técnico: sitio público pulido según el spec (doc 20), CV con variantes por rol (doc 17/28B), y el "mimic" de ArtStation — simulador estructural de plataformas (ya existe como patrón en `PortfolioSimulator`) + estrategia de perfil real (28D/28E/29C).

| | |
|---|---|
| **Rama** | `agent/portfolio` |
| **OWN** | `src/pages/*.astro` (sitio público: index, work, twinsight-x500, human-character-pipeline, ara-framework, about, contact, focus/[slug]), `src/layouts/BaseLayout.astro`, componentes de portafolio raíz (`SphericalGallery`, `CaseStudySection`, `PipelineTimeline`, `VisualModesGrid`, `MetricBlock`, `ScrollStory`, `MediaFrame`, `CTAButton`, `TechTag`, `SiteHeader/Footer`, `Breadcrumbs`, `FocusVariantSwitcher`), `src/scripts/siteAnimations.ts`, `src/data/{projects,links,focusVariants}.ts`, `src/components/career/PortfolioSimulator.tsx` + `src/pages/app/career/portfolio.astro` + `src/data/career/portfolioProjects.ts`, `rag/portfolio.json`, decisión sobre `portfolio_web/` |
| **READ** | docs 07, 08, 08B, 17, 19, 19B, 20, 21, 21B, 28B, 28D×3, 28E, 29, 29B, 29C, 33, 36; `_obsidian/04_WEB_PORTFOLIO_PROMPT.md` |
| **FORBIDDEN** | resto de `src/components/career/**` y `src/data/career/**` (AG-CAREER), app interna de otros dominios, layouts de la app (`PlanMaestroLayout`) |

**Fases:**
1. **Fase 0 — Higiene:** resolver la duplicación `portfolio_web/borrador_01` (borrador con bug `src/src` anidado) — archivar o convertir en template; placeholders activos (`[ARTSTATION_HUMAN_BREAKDOWN_URL]`) convertidos en checklist visible; enlazar el "ArtStation breakdown" del case study Human cuando exista URL real.
2. **Fase 1 — CV y variantes:** módulo CV (doc 17: base 1 página + variantes por rol + bullet banks) con render/print por variante y checklist del benchmark 28B; integración con focusVariants (mismo eje de posicionamiento).
3. **Fase 2 — ArtStation:** (a) simulador: extender `PortfolioSimulator` con la estructura de breakdown según 29C (before/after, wireframe, milestone notes) y el checklist de publicación de 28E (skills, software, disponibilidad, links); regla vigente: imitar estructura, nunca branding exacto, advertencia de simulación. (b) guía de perfil real ArtStation generada desde 28E/28D-complete como checklist accionable con copy-paste listo.
4. **Fase 3 — Sprint de assets y launch:** ejecutar el plan del doc 33 (producción de media TwinSight/ArtStation/LinkedIn proof) como tablero de estado; secuencia de launch 36 como checklist sincronizado con AG-CAREER (quien registra el evento, AG-PORT quien entrega el asset).
5. **Fase 4 — RAG portafolio:** `rag/portfolio.json` — specs de copy (20), estructura de case study (08B), README final (19B), benchmarks. Consulta desde: PortfolioSimulator ("¿por qué este orden de proyectos?" → spec citado), generador de copy con borrador+aprobación.

**Limitaciones:** no inventa métricas ni URLs (regla del README de portfolio_web: placeholders explícitos); no toca el pipeline/tracker (AG-CAREER); el simulador nunca clona visualmente ArtStation.

**RAG:** `rag/portfolio.json`.

---

### 3.8 AG-ORQ — Orquestador: Today, Schedules y briefings

**Objetivo:** que la pantalla "Hoy" y el grid semanal dejen de mezclar fixtures y pasen a ser la superficie de integración real de todos los dominios: el daily briefing proactivo del sistema completo.

| | |
|---|---|
| **Rama** | `agent/orquestador` |
| **OWN** | `src/components/schedules/**`, `src/components/today/**`, `src/pages/app/today/**`, `src/pages/app/schedules.astro`, `src/data/adapters/**` (todayAdapter), `src/data/schedules/**` |
| **READ** | stores y APIs públicas de TODOS los dominios (activeProgramStore, skillStateStore, career data, languages progress, clinical bio-feedback) — solo vía sus export públicos |
| **FORBIDDEN** | editar cualquier store/dataset/componente de dominio (si falta un export: TICKET); no implementa lógica de dominio, solo orquesta |

**Fases:**
1. **Fase 0 — Adapter real:** reemplazar los fixtures de `todayAdapter` (Top 3 hardcodeado, careerSummary mock) por agregación real: tarea fitness del programa activo, siguiente acción career real, sesión de idiomas del día, estado clínico de energía. Bloques A/B derivados de `scheduleData` según fase activa, no hardcodeados.
2. **Fase 1 — Grid semanal vivo:** conectar `WeeklyGridPlanner`/`DailyOperatingView` a los dominios (celda fitness → día real del programa; celda alemán → lección siguiente; bloque art studio → asset del sprint 33).
3. **Fase 2 — Daily Briefing (superficie EventBus):** vista previa del día + ajustes por readiness (energía clínica + dolor fitness) + 1 microlearning contextual (tarjeta SR vencida de AG-DE/AG-EN) + máx 3 sugerencias activas del SuggestionEngine. Weekly review dominical: adherencia por dominio, estado de reglas, top 3 sugerencias.
4. **Fase 3 — Anti-nagging y lifecycle:** cooldowns, dedup, "ahora no"≠"nunca", acumulación silenciosa en weekly review.

**Limitaciones:** cero lógica de negocio de dominio; si un dato falta, muestra el hueco con ticket, no lo simula.

**RAG:** ninguno propio; consume el agregado dinámico (daily state RAG de CORE).

---

### 3.9 AG-GASTRO — Gastronomía (OPCIONAL, no dotar inicialmente)

Estado: esqueleto (2 recetas, nav roto). **Recomendación:** AG-CORE repara solo el nav roto (`recipes/queue` → `library/plans/saved`) en su Fase B; AG-GASTRO queda en backlog hasta que los 8 agentes principales entreguen sus Fases 0-1. Si se activa: OWN `src/components/gastronomy/**`, `src/data/gastronomy/**`, `src/pages/app/gastronomy/**`, `rag/gastronomy.json` (libros Nosrat/Kenji como fuentes).

---

## 4. RAG unificado — formato v4 (obligatorio para todos los dominios)

Cada dominio produce `rag/<domain>.json` + índice con este contrato (builder de CORE):

```jsonc
{
  "domain": "fitness|anatomy|nutrition|career|german|english|clinical|portfolio|gastronomy",
  "version": "4.0.0",
  "sources": [{
    "id": "stable-source-id",            // p.ej. "overcoming-gravity-2", "doc-24-offer-scorecard"
    "title": "", "author": "", "year": null, "edition": "",   // edición SIEMPRE (las páginas cambian)
    "type": "book|paper|md|pdf|dataset",
    "evidenceTier": "meta-analysis|rtc|observational|expert-book|internal-doc",
    "authority": { "domains": ["progressions"], "priority": 1 } // matriz de autoridad
  }],
  "chunks": [{
    "id": "og2-ch12-p148-volume",
    "sourceId": "overcoming-gravity-2",
    "topic": "volume",                   // taxonomía por dominio
    "tags": ["hypertrophy", "chest"],
    "locator": { "chapter": 12, "page": 148 },  // cita exacta SIEMPRE
    "summary": "parafrasis propia, sin copyright",
    "entities": ["exercise:planche", "muscle:pec-major"],  // grafo ejercicio↔músculo↔zona
    "rules": ["ruleId"]                  // si alimentó una regla
  }]
}
```

Reglas: parafrasis siempre (nunca texto largo literal); cita capítulo/página siempre; `confidence` (`explicit|inferred|qualitative`) en las reglas derivadas; los 23 papers usan plantilla de extracción propia (PICO + effect size).

---

## 5. Olas de ejecución

| Ola | Semanas | Agentes activos | Entregable |
|---|---|---|---|
| **0 — Baseline** | ya hecho | — | Commits de baseline en `main`: fixes críticos, 1.494 prescripciones validadas, 0 errores astro check, 9 GLBs anatómicos + research THENX commiteados, plan multi-agente |
| **1 — Contratos** | 1–2 | AG-CORE (solo) | UserState, motor de reglas, EventBus, SuggestionEngine, RAG v4 builder, IndexedDB. Nada de dominio avanza hasta aquí (excepto Fases 0 de contenido que no dependen de contratos) |
| **2 — Dominio paralelo** | 3–6 | AG-FIT (0→2), AG-ANATOM (0→2), AG-NUTRI (0→1), AG-CAREER (0→2), AG-DE (0→1), AG-PORT (0→1), AG-CLIN (0→1), AG-EN (0), AG-ORQ (0) | Fases 0 de consolidación + primeros RAG estáticos (anatomía y nutrición arrancan extracción Gemini en paralelo) |
| **3 — Inteligencia** | 7–10 | todos | RAGs completos, reglas por dominio, primeros borradores IA con aprobación |
| **4 — Proactividad** | 11–13 | AG-CORE + AG-ORQ + dominios | EventBus completo, briefings, weekly review, jobs diarios |
| **5 — Pulido** | 14–16 | todos | Visor anatómico interactivo completo (F3/F4 ANATOM), nutrición en briefing, certificación Goethe módulo, launch portfolio, gastronomy si procede |

Dependencias duras: AG-EN Fase 0 → AG-DE Fase 0/1 (motor SR). AG-ORQ Fase 2 → EventBus de CORE + Fase 0 de todos los dominios. AG-CLIN Fase 3 → UserState. AG-FIT Fase 3 (highlight de músculos en ExerciseModal) → AG-ANATOM Fase 1 (grafo). AG-NUTRI Fase 2 → motor de reglas de CORE. La Fase 0 de contenido (datos, limpieza, wiring, visor, extracción Gemini) NO depende de CORE y puede arrancar en paralelo a la Ola 1.

---

## 6. Definición de Done global (aplica a cada PR de cada agente)

1. `npx astro check` → 0 errores. `npm test` → verde. Validadores del dominio → verde.
2. Diff no toca archivos fuera del OWN del agente (verificado contra la matriz §1.2).
3. Todo dato/afirmación nueva en UI con trazabilidad (fuente o regla) o marcada explícitamente como placeholder.
4. Tests nuevos para lógica nueva (motores, reglas, RAG builders, SR).
5. Sin contenido con copyright textual de libros/papers (parafrasis + cita).
6. Sin mock/fixture eliminable quedando en código entregado (los fixtures solo en tests).

---

## 7. Tickets

`docs/agents/tickets.md` — formato: `[AGENTE-ORIGEN] archivo → owner → cambio pedido → estado`. AG-CORE atiende tickets de archivos compartidos; los tickets entre agentes de dominio los media AG-CORE.
