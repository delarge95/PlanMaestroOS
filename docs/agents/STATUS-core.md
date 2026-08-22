# STATUS — AG-CORE (Ola 1 completa)

> Rama `agent/core`. Ejecución mixta: subagente (tareas 1–4, con interrupciones recuperadas por commits frecuentes) + misión control (tareas 4b–7).
> Verificación final: `npm run ci` verde (validate:fitness + 94 tests + astro check 0 errores).

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

### 6. Navegación reparada
- Gastronomy apunta a rutas reales (library/plans/saved), clinical incluye routines, `/app/schedules` en nav 'more' con icono Calendar.

## Decisiones
- `IDBOpenDBRequest` no genérico en el lib.dom del proyecto (compat).
- vitest.config.ts ahora incluye `scripts/**` (expuso un fixture roto del builder, corregido).
- El fix del builder RAG de 'rtc'→'rct' (typo del plan) quedó documentado en schema.ts.
- Dexie descartado por ahora (peso de dep); wrapper propio de ~150 líneas.

## Deudas / pendientes
- Worker IA (cliente Gemini + prompts versionados + jobs) — NO arrancado (Fase C del plan; requiere decisions de API key contigo).
- Integración real de stores de dominio al adaptador IndexedDB (cada dominio migra su store cuando consuma el contrato).
- `mapNotionTasksToTodayView`/fixtures de career siguen vivos hasta el merge de AG-CAREER/AG-ORQ.

## Cómo consumen los dominios (mini-ejemplo)

```ts
// Regla de dominio (AG-FIT/AG-NUTRI/etc.)
import { evaluateRules } from '@lib/rules';
import type { DomainRule } from '@lib/rules';
const miRegla: DomainRule = {
  id: 'fit:volume-10-20', domain: 'fitness', description: '10–20 series efectivas/semana',
  type: 'volume', metric: 'hardSetsPerWeek', optimalRange: [10, 20],
  appliesWhen: (ctx) => ctx.profile.trainingAge !== 'novice',
  confidence: 'explicit', evidenceTier: 'expert-book',
  sourceRef: { docId: 'overcoming-gravity-2', chapter: 12, page: 148 },
};
// evaluations = evaluateRules([miRegla], weeklyView);
```
