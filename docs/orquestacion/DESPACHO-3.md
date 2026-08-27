# DESPACHO 3 — ANATOM-4 (visor) y CORE-Fase-C (worker IA) para ejecutores baratos

> Flujo: misión control diseñó; ejecuta **GLM 5 Turbo o Gemini 3.7 Flash** en el worktree indicado; misión control verifica y mergea. Reglas universales: `docs/orquestacion/entornos/REGLAS_COMUNES.md` + Regla de Oro §0.9 (nada se borra). Verificación OBLIGATORIA por commit: `NODE_OPTIONS=--max-old-space-size=8192 npx astro check` (0) **Y** `npm test` (verde) — leer la interfaz REAL antes de escribir contra ella.

---

## A. AG-ANATOM ciclo 4 — Pulido del visor (feedback del usuario)

**Worktree:** `E:\Laboral\.worktrees\anatomia` (rama `agent/anatomia`). **Arranque:** `npm install` si falta → `git merge main --no-edit` → leer `docs/agents/PLAN_MULTIAGENTE.md` ficha §3.2B + `docs/agents/STATUS-anatomia.md` (ciclos 1-3: mapping 640 verificado, composite.ts, selección jerárquica por fases).

**Síntomas reportados por el usuario:** (1) no todas las partes están mapeadas; (2) conjuntos y subconjuntos no funcionan del todo bien.

```
TAREAS (1 commit c/u):
A1. AUDITORÍA DE COBERTURA: script que cruce meshCatalog.ts vs anatomyGraph vs la lista
    de la BD (LibraryMuscles): reporte por modelo de piezas visibles SIN dueño en el grafo
    y estructuras del grafo SIN meshes. Guárdalo en rag/anatomy/extracciones/cobertura-c4.md.
    Commit.
A2. COMPLETAR MAPPING: para cada pieza sin dueño con nombre anatómico claro, añade la
    estructura al grafo (con cita de los chunks ya curados de Gray's/Moore en
    rag/anatomy/fuentes/) o extiende meshAliases.ts. Meta: piezas visibles sin dueño <10%
    por modelo (excluyendo 'aux'/bursas si no aplica). El test meshMapping.test.ts DEBE
    seguir verde (0 huérfanos). Commit por modelo.
A3. SELECCIÓN JERÁRQUICA: depura resolveClick/buildSubgroups (composite.ts) con casos
    límite: (a) click en pieza de un subconjunto cuando el conjunto ya está seleccionado
    → debe bajar de fase exactamente una; (b) click fuera → deseleccionar limpio;
    (c) cambiar de selección directa sin pasar por deselección. Tests nuevos por caso en
    composite.test.ts. Commit.
A4. STATUS-anatomia.md ciclo 4 + verificación completa. Commit.
```

## B. AG-CORE Fase C — Worker IA Gemini (la promesa pendiente)

**Worktree:** `E:\Laboral\.worktrees\core` (rama `agent/core`). **Arranque:** `npm install` si falta → `git merge main --no-edit` → leer `docs/agents/PLAN_MULTIAGENTE.md` §3.1 Fase C + `src/components/ai/AiDraftReview.tsx` (ya existe) + `docs/implementation/07_phase_07_ai_agents.md` (spec original). **La API key YA está en `.env` del repo raíz (GEMINI_API_KEY) — nunca commitearla ni hardcodearla.**

```
TAREAS (1 commit c/u):
B1. CLIENTE: worker/src/ai/client.ts ya tiene esqueleto — completarlo: llamada REST a
    generativelanguage.googleapis.com (model gemini-2.5-flash), timeout 20s, límite de
    tokens, logging por llamada (input/output/fuentes), lectura de clave SOLO de env.
    Tipos compartidos con AiDraftReview. Tests con fetch mockeado. Commit.
B2. PROMPTS VERSIONADOS: worker/src/ai/prompts/ con el contrato del borrador (siempre:
    responder EN el schema del borrador, citar fuentes usadas, rechazar si falta contexto).
    Un prompt base v1 + slots por dominio (fitness/nutrición/career como objetos de
    configuración, no texto suelto). Commit.
B3. ENDPOINT: worker/src/index.ts → POST /ai/draft {domain, task, contextChunks[]} →
    valida entrada, llama cliente, devuelve AiDraft (NUNCA aplica nada: solo borrador).
    Fallback limpio sin clave (501 con mensaje, la app sigue 100% funcional sin IA — §0.5).
    Commit.
B4. UI DE CONSUMO: en la página de Nutrición, un botón "Explicar mis targets (IA)" que
    llama al endpoint con los chunks citados de nutrition.json y pinta el borrador en
    AiDraftReview (Editar/Aprobar/Descartar — aprobar NO autoaplica nada aún).
    Commit.
B5. STATUS-core Fase C + verificación. Commit.
```

## C. Nota de razonamiento (petición del usuario)
Ambas tareas son ejecución con diseño ya hecho → apropiadas para razonamiento BAJO/MEDIO (GLM 5 Turbo / Gemini Flash medium). Reserva Autoclaw/GLM 5.3 para: depuración profunda de A3 si los casos límite resisten, y decisiones de B2.
