# 22 — Worker real (mata el triple contrato)

> Estado: `handleWorkerRequest({action})` sin HTTP + `ai/client.ts` mock con `tokensUsed`
> ficticio + `WorkerClient` apuntando a `/api/v1/*` inexistentes + `requestAiAction` a
> `/ai/action` + `wrangler.toml` inexistente + `daily-jobs.yml` corriendo mocks + 0 tests
> en `worker/src/`. Todo IA/sync/jobs es teatro hasta este archivo.

## 22.1 Contrato único (encargo E1, decide de una vez)

Un solo surface HTTP: `POST {base}/ai/draft {domain, task, contextChunkIds[]}` y
`POST {base}/sync/push {entity, payload}` y `GET {base}/jobs/morning-plan`.
Auth única: `x-pm-key` vs `WORKER_SECRET_KEY` (enterrar el `Bearer /api/v1/*`:
reescribir `WorkerClient` como wrapper fino del contrato único).
`PUBLIC_WORKER_URL` vacío = modo local (fallback mock **marcado**, no silencioso).

## 22.2 Implementación (encargo E2)

`worker/src/ai/client.ts`: `fetch` Gemini (`generativelanguage`, modelo fijado
`gemini-2.5-flash`), timeout 20s, 1 reintento, tope tokens por acción (el de
`AI_ACTIONS`: 600-2000), log real `{action, model, tokens, approved?}` en `audit.ts`
persistido en KV (hoy in-memory: se pierde al reiniciar). `prompts/` versionados por
acción con whitelist (las 9 de `AI_ACTIONS`; `language-practice` única sin approval).
501 sin key con `UnavailableCard` en UI (archivo 10 N4). Tests: mock fetch (timeout,
parse, whitelist) — primeros tests del worker (hoy 0).

## 22.3 Jobs con entradas reales (encargo E3)

`morningPlan|eveningReview|stuckTasks|careerResearch` dejan el `console.log` y reciben
`{tasks, calendar, energy, vocabDue}` / `{pipeline}` reales vía `todayAdapter` +
`careerStore`. `runSyncJobs.ts` consigue script npm (`jobs:run`). `daily-jobs.yml`
sigue corriendo pero ya con efecto (o se desactiva hasta E2: cron corriendo mocks
quema minutos y confunde).
