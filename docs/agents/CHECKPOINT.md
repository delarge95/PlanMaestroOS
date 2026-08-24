# CHECKPOINT — Plan Maestro OS (actualizado 2026-08-23, post-incidente + nuevo workflow)

> ## NOVEDADES DE LA ÚLTIMA SESIÓN
> 1. **Incidente FIT corregido** (commit 757a5f2): restaurados TodayRoutineStack (configurador completo RIR/RPE/sustituciones), SectionNav de submenús, CalisthenicsProgressions (buscador) y FitnessLibrary (agrupaciones) dentro del workspace. Regla de Oro añadida al plan §0.9.
> 2. **Bloque A extraído**: 116 archivos en `biblioteca/extracciones/` (Gray's/Moore/MacIntosh/Enoka por capítulos + Nippard + Daniels + otros) — ejecutado por el usuario con Gemini.
> 3. **API key Gemini** guardada en `.env` (gitignored) para el worker IA de AG-CORE Fase C.
> 4. **Workflow nuevo**: `docs/orquestacion/NORMAS_ORQUESTADOR.md` + reglas por entorno en `docs/orquestacion/entornos/`. Los créditos Zcode son última opción; el trabajo se delega a entornos externos vía puente humano.
> 5. **Límite de uso Zcode**: subagentes caídos hasta 2026-08-24 09:21 (ventana de 5h agotada). ANATOM quedó a mitad de tarea 4 (visor con feedback del usuario enviado pero no procesado); CARDIO murió al arranque (sin trabajo previo).

> Documento duradero de recuperación. Si este chat se pierde, cualquier sesión nueva puede retomar desde aquí: `docs/agents/PLAN_MULTIAGENTE.md` (segmentación), `docs/agents/PROMPTS_INICIALES.md` (prompts de arranque), `docs/agents/TAREAS_USUARIO.md` (mandatos extra), este checkpoint (estado), y los `docs/agents/STATUS-*.md` de cada agente.
> Regla de reanudación: cada agente SIEMPRE arranca con `git merge main --no-edit` en su worktree y lee este checkpoint + su STATUS.

## Infraestructura viva

- **Worktrees**: `E:\Laboral\.worktrees\{core,biblioteca,nutricion,portfolio,fitness,anatomia,cardio,career,german,english,clinical,orquestador}` (rama `agent/<nombre>` cada uno).
- **Web local**: `npx astro dev --host 127.0.0.1 --port 4321` en `E:\Laboral` (main). Para ver WIP: lo mismo en `.worktrees/fitness` (p.ej. 4324) y `.worktrees/anatomia` (4325).
- **Verificación**: `npm run ci` = validate:fitness + vitest + astro check. Builder RAG: `npx tsx scripts/build_rag/index.ts --domain <d>|--index`.
- **Flota**: máximo 2-3 subagentes simultáneos (el plan corta al 4º). El proveedor sufre cortes: protocolo anti-interrupción (commitear cada sub-paso) es OBLIGATORIO en todos los prompts. Alternativa estable: chats propios del usuario por worktree.

## main YA CONTIENE (todo mergeado y verificado)

1. **AG-CORE — Ola 1 COMPLETA** (UserState v1, motor DomainRule, EventBus, SuggestionEngine, builder RAG v4, IndexedDB + migración, nav reparada, dominio `cardio` añadido). Ver `STATUS-core.md`.
2. **AG-BIB — COMPLETO** (MANIFEST 98 fuentes con sourceIds, 81 renames en D:\Downloads, 42 extracciones de chats = 4.8M chars en `biblioteca/extracciones/`, cola Gemini §18). Ver `STATUS-biblioteca.md`. PDFs de `investigacion\` renombrados canónicamente + rutas in-app actualizadas.
3. **AG-NUTRI — ciclo 1 COMPLETO** (3 libros canónicos dedupeados, 112 reglas extraídas local PyMuPDF, `rag/nutrition.json` v4 con 117 reglas, página `/app/fitness/nutrition` con calculadora+targets citados+disclaimer). Ver STATUS en su rama. FIX posterior: chunks sin `entities` → saneado en main (el generador de NUTRI debe omitir-clave-never en ciclo 2).
4. **AG-PORT — ciclo COMPLETO** (borrador archivado, checklist doc-33, módulo CV `/cv` con print A4 + selector variante + checks doc-28B, pestaña ArtStation 29C/28E, `rag/portfolio.json` 6 fuentes/36 chunks, focus variants corregidas a doc-20, botón "Descargar PDF (A4)" en /cv). Ver `STATUS-portfolio.md`.
5. `rag/index.json` construido (nutrition + portfolio indexados).

---

## ESTADO POR AGENTE (detallado)

### ✅ AG-CORE — Ola 1 COMPLETA (merged)
| # | Tarea | Estado |
|---|---|---|
| 1 | UserState v1 + vistas derivadas | ✅ commiteada |
| 2 | Motor DomainRule genérico + tests | ✅ |
| 3 | EventBus + SuggestionEngine (lifecycle, anti-nagging) | ✅ |
| 4 | Builder RAG v4 (CLI, validador, README, tests) | ✅ |
| 5 | IndexedDB kv + migración localStorage no destructiva | ✅ |
| 6 | Nav: gastronomy real, clinical+routines, /app/schedules | ✅ |
| 7 | CI + STATUS-core.md | ✅ |
**PENDIENTE (Fase C del plan §3.1):** worker IA Gemini (cliente, prompts versionados, jobs morning/evening/stuck) — requiere API key/decisión BYOK del usuario. Fase D: revisión técnica de PRs.

### ✅ AG-BIB — COMPLETO (merged)
Entregó todo su encargo. **Pendiente humano:** ejecutar extracción Gemini Bloque A según `docs/agents/PAQUETE_GEMINI.md` (Norkin con atajo .txt → Gray's → MacIntosh → Enoka → Moore → sport-nutrition gráficos → Nippard). Decisiones cerradas en `TAREAS_USUARIO.md` §Decisiones.

### ✅ AG-NUTRI — ciclo 1 COMPLETO (merged) · ciclo 2 PENDIENTE
| Ciclo 2 | Tarea | Estado |
|---|---|---|
| 1 | Estimador kcal quemadas (METs/trabajo mecánico/RPE→intensidad, engine citado, balance diario) — mandato usuario | ⏳ no arrancado |
| 2 | Hormonas femeninas (ciclo menstrual fases, menopausia) → ajustes nutricionales/calóricos con citas | ⏳ (propondrá papers si faltan) |
| 3 | Arreglar su generador RAG (omitir claves vacías = bug que saneé en main) | ⏳ |
| 4 | Profundizar extracción (tablas/figuras = plan Gemini propio) | ⏳ |

### ✅ AG-PORT — ciclo COMPLETO (merged)
Todo su encargo entregado. **Pendiente humano:** confirmar datos doc-17 §2 (email, teléfono, URLs, métricas) para desbloquear el CV definitivo. Posible ciclo 2: sprint de assets doc-33 como tablero + launch doc-36.

### 🔨 AG-FIT (`agent/fitness`, +12 commits, 0 sin commit, tree LIMPIO)
| Tarea | Estado |
|---|---|
| A1 FitnessTabWorkspace oficial /app/fitness | ✅ |
| A2 Borrado 10 componentes muertos (grep-verificado) | ✅ |
| A3 Rutina min-max fuente única fitappRoutineDataset | ✅ |
| A4 useIsMobile + index keys + estado muerto fuera | ✅ |
| A5 Banner Prehab derivado de estado persistido | ✅ |
| B1 Calendario REAL (fecha del sistema) | ✅ |
| B2 Postergar/Restablecer con sentido (postponedDays persistido, reset en menú secundario) | ✅ |
| B3 Header compacto colapsable | ✅ (+fix JSX huérfano) |
| B4 Links correctos desde Hoy (skill→árbol, rutina→rutina) | ✅ |
| B5 Video en flujo (ExerciseModal + YouTubePlayer) | ✅ |
| B6 Explorador de rutinas: filtros persistentes + grid tarjetas + detalle en Sheet | ✅ (último commit 0fde641, hecho por misión control) |
| B7 Progresiones↔rutinas vinculadas (Activar rutina en caja + mapeo progressionPathLinks) | ⏳ no empezada |
| B8 Progreso real (activeProgramStore + logs + volumeStats/loadCalculator; "Pendiente: logger" si falta) | ⏳ |
| Cierre | validadores + STATUS-fitness.md | ⏳ |
| **Próximo ciclo (TAREAS_USUARIO)** | B9 modo entrenamiento guiado set-a-set; contrato export sesión para estimador kcal | ⏳ |
**Verificación al corte:** astro check 0 errores, 122 tests verdes (en su rama).

### 🔨 AG-ANATOM (`agent/anatomia`, +8 commits, 2 archivos sin commit, 18 behind main)
| Tarea | Estado |
|---|---|
| 1 Inventario GLB (parser + mesh-names.json) | ✅ |
| 2 8 GLBs en public/models/anatomy (ya Draco <7MB) | ✅ |
| 3 anatomyGraph v0: 146 músculos, 20 tendones, 22 nervios, 19 articulaciones, 39 huesos, 21 ligamentos + mapping GLB + tests | ✅ |
| 4 Visor 3D /app/fitness/anatomy | 🔨 casi (página+componente creados, 2 fixes TS commiteados; faltan pulir interacción y el decoder draco/ — 2 archivos abiertos sin commit del último corte) |
| 5 Músculos (mandato usuario): 5a navegación por zona ✅, 5b fichas por tipo ✅, **5c enlaces "ver en 3D" + ejercicios que la cargan** | 🔨 2/3 |
| 6 Extracción Levangie del .txt → rag/anatomy/fuentes/ | ⏳ |
| 7 rag/anatomy.json con builder | ⏳ |
| 8 Plan Gemini validado (Levangie=local-done) | ⏳ |
| 9 STATUS-anatomia.md | ⏳ |

### ⏸ AG-CARDIO (`agent/cardio`, virgen — rama+worktree listos, dominio RAG añadido)
Todo el encargo pendiente (TAREAS_USUARIO): sección spinning/biking/caminata/running con enfoques (quema grasa, resistencia, velocidad, HIT por ciclos), pautas científicas, presets modificables guiado/libre. Fuentes YA en biblioteca (daniels-running-formula, running-science + extracción chat, secret-of-running, cycling-physiology, power-meter).

### ⏸ AG-CAREER (`agent/career`, virgen)
Todo pendiente: import tracker xlsx real, fin de mocks (Epic/Ubisoft/Riot), CompanyDatabase con doc-11, rag/career.json (47 docs chunked), cablear InteractiveRoadmapDashboard, módulos Entrevistas (23/35/24/13), Outreach (22), targeting (31), escenarios (27) + EXTRA TAREAS_USUARIO: tablero semanal doc-34 en Hoy.

### ⏸ AG-DE (`agent/german`, virgen)
Todo pendiente: motor SM-2 real con easeFactor, persistencia+racha real, genéricos compatibles EN, matar legado /app/german, test nivelación, currículo A1.1 (4+ unidades).

### ⏸ AG-EN (`agent/english`, virgen)
Todo pendiente: vocabulario técnico 120+ por dominio, scenarios negocio, STAR entrevistas (doc-23 citado), precision C1, SpeakingPracticeEN con Web Speech. Depende del motor de AG-DE para integrar.

### ⏸ AG-CLIN (`agent/clinical`, virgen)
Todo pendiente: montar ClinicalExecutionHub (31KB huérfano), página unblock real, archivar 8 huérfanos a _attic, store clínico persistido, rag/clinical.json + **SUB-RAG salud sexual (4 libros+8 papers, con gates)** — mandato usuario.

### ⏸ AG-ORQ (`agent/orquestador`, virgen)
Todo pendiente: todayAdapter real (Top3 real, bloques desde scheduleData), cero fixtures ("Pendiente: dominio"), grid semanal vivo, layout Daily Briefing + EXTRA TAREAS_USUARIO: heredar calendario real de FIT-B1 (mismo helper, no reimplementar).

---

## Cola de lanzamiento (orden)
FIT (B7-B8+cierre, retoma directo) → ANATOM (5c, 6-9) → CARDIO → CAREER → DE → CLIN → EN → ORQ. NUTRI ciclo 2 y PORT ciclo 2 cuando el usuario lo pida.

## Pendientes del USUARIO
1. Ejecutar Gemini Bloque A (`PAQUETE_GEMINI.md`).
2. Confirmar datos CV doc-17 §2 (email/tel/URLs/métricas).
3. Decidir API key Gemini para el worker IA (Fase C de AG-CORE).
4. `Physiology of Yoga`: conseguir el original (el actual es resumen Bookey).
5. Añadir/modificar tareas por agente (este documento se actualiza con cada cambio).
