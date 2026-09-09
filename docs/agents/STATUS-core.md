# STATUS — AG-CORE (Ola 1 & Despacho 3 Fase C completas)

> Rama `agent/core`.
> Verificación final: 15/15 test files verdes (114/114 tests) + `astro check` 0 errores / 0 warnings.

## Contratos publicados (disponibles para los agentes de dominio)

### 1. `src/data/contracts/userState.ts` — UserState v1
- Perfil (age/sex/trainingAge/conditions/screening/equipment), dailyLogs, sessions (sets/RPE/dolorDurante), pain por bodyZone, skills, metrics.
- **Vistas derivadas**: agregados semanales por patrón/zona, deltas vs semana anterior, rachas — lo que las `appliesWhen` de las reglas consumen.
- Consumo: `import { deriveWeeklyView, ... } from '@data/contracts/userState'`.

### 2. `src/lib/rules/` — motor DomainRule genérico
- `DomainRule {id, domain, description, type, metric, optimalRange?, riskThresholds?, appliesWhen(context), confidence: 'explicit'|'inferred'|'qualitative', evidenceTier, sourceRef{docId, chapter?, page?}}`.
- `evaluateRules(rules, context) → RuleEvaluation[] {ruleId, status: ok|warning|violation|not-applicable, value, message}`.
- Puro (sin DOM), testeado con fixtures. Mismo vocabulario de `evidenceTier` que el RAG v4 ('rct', 'meta-analysis'…).

### 3. `src/lib/events/` + `src/lib/suggestions/` — proactividad
- EventBus determinista con taxonomía: **tiempo** (daily-briefing, weekly-review), **ciclo** (fin de mesociclo, deload), **sesión** (pre-workout, fin de set, spike de dolor), **anomalía** (sesiones perdidas, deriva RPE, tendencia de dolor).
- SuggestionEngine: ciclo `proposed→shown→accepted|dismissed|expired→applied→outcome`, cooldowns por tipo, máx 3 activas, "ahora no" ≠ "no me interesa" (semántica distinta en dismiss).

### 4. `scripts/build_rag/` — builder RAG v4 (CLI)
- `npx tsx scripts/build_rag/index.ts --domain <d>` construye `rag/<d>.json` desde `rag/<d>/fuentes/*.md` (bloques `<!-- chunk -->`) + `manifest.json` opcional; `--check` valida; `--index` reconstruye `rag/index.json`.
- Nunca escribe un documento inválido. README completo en `scripts/build_rag/README.md` con el formato de bloques.
- **Los agentes de dominio ya pueden ingestar**: crear fuentes + correr el builder + commitear el JSON.

### 5. `src/lib/storage/` — IndexedDB
- `createKvStore()` → `{get, set, del, keys, exportAll, importAll, close}` sobre base `plan-maestro-os` con namespaces lógicos. Devuelve `null` sin IndexedDB (SSR) → caer a localStorage.
- `migrateLocalStorage(kv)` — mapa documentado: `plan-maestro-state-v3`→app, `fitapp-active-program-v1`/`plan-maestro-skills-store-v1`→fitness, `plan_maestro_career_goals`→career. **No destructiva e idempotente**; la limpieza del legacy se hará cuando toda la app consuma el adaptador.

### 6. `worker/` & `src/lib/ai/` — Worker IA Gemini & Adapter Cliente (Despacho 3 Fase C)
- **Cloudflare Worker Router (`worker/src/index.ts`)**:
  - `GET /health` / `GET /`: estado, modelos disponibles (`gemini-1.5-flash`, `gemini-1.5-pro`, `gemini-2.0-flash-exp`), versión y uptime.
  - `POST /api/ai/draft`: borrador IA con revisión humana (`requiresApproval: true`), whitelist de acciones (`AI_ACTIONS`), metadatos (`sourcesUsed`, `agent`) y tokens/costos.
  - `POST /api/ai/extract`: extracción estructurada de esquemas JSON con fuentes.
  - `POST /api/ai/chat`: mensajería interactiva con citas y fallback determinista.
  - `POST /api/ai/audit` / `GET /api/ai/audit`: registro y consulta de auditoría persistente.
- **Adapter Cliente Astro (`src/lib/ai/workerClient.ts`)**:
  - `requestAiDraft`, `requestAiExtraction`, `requestAiChat`, `checkWorkerHealth`.
  - Control de timeout (5s), reintentos con *backoff* exponencial.
  - **Modo offline/fallback (§0.5)**: genera respuestas deterministas locales sin romper la UI cuando el worker no está disponible o no hay API key.
- **Audit Logger & Costos (`src/lib/security/auditLogger.ts`)**:
  - Estructura `AiAuditEntry` (§0.3): `id`, `timestamp`, `agent`, `action`, `promptTokens`, `completionTokens`, `totalTokens`, `costUsd`, `sourcesUsed`, `approved`.
  - Tarificación Gemini 1.5 Flash ($0.075 / 1M prompt, $0.30 / 1M completion).
  - Exportación/importación JSON y sincronización `syncAuditWithWorker`.

### 7. Navegación reparada
- Gastronomy apunta a rutas reales (library/plans/saved), clinical incluye routines, `/app/schedules` en nav 'more' con icono Calendar.

## Pruebas y Cobertura Automatizada

- `worker/src/__tests__/workerRouter.test.ts`: 8 tests (health, drafts con approval, auth 401, whitelist 400, audit log POST/GET, extract estructurado, chat con citas).
- `src/lib/ai/__tests__/workerClient.test.ts`: 6 tests (fallback offline determinista, timeouts, wrappers exportados, live 200 OK).
- `src/lib/security/__tests__/auditLogger.test.ts`: 6 tests (costos, estructura §0.3, JSON import/export, sanitización de secretos, sync con worker).
- **Total `agent/core`**: 15 test files pasando (114 tests verdes), `npx astro check` 0 errores / 0 warnings.

## Decisiones
- `IDBOpenDBRequest` no genérico en el lib.dom del proyecto (compat).
- vitest.config.ts ahora incluye `scripts/**` (expuso un fixture roto del builder, corregido).
- El fix del builder RAG de 'rtc'→'rct' (typo del plan) quedó documentado en schema.ts.
- Tarificación Gemini parametrizada en base a rates oficiales de 1.5 Flash.
- Fallback determinista obligatorio en el adapter para asegurar la garantía de 100% funcionalidad client-side offline (§0.5).

