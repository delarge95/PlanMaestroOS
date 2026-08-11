# FIX 03 — Seguridad del cliente IA, worker y scheduler de jobs (P0)

## Problema
La Fase 7 creó `src/lib/ai/client.ts` y componentes que llaman IA desde la app Astro
(GitHub Pages = hosting estático público). Si la API key está en ese código, cualquiera puede
extraerla. Además, los 4 jobs diarios no tienen scheduler: son código que nunca corre.

## Verificación previa (ejecutar y pegar salida)

```bash
grep -rn "AI_PROVIDER_KEY\|GEMINI\|API_KEY" src/ | head -20
grep -rn "import.*ai/client" src/components/ src/pages/ || echo "OK: cliente IA no importado en UI"
ls worker/ 2>/dev/null || echo "NO EXISTE worker/"
ls .github/workflows/
```

Resultado esperado tras la corrección: cero referencias a keys en `src/`; IA solo en `worker/`.

## Decisión (simple, sin monorepo)

Se mantiene el repo Astro actual. Se añade una carpeta `worker/` desplegada como función
serverless (Cloudflare Worker o Vercel Function). La app web nunca habla con el proveedor de IA;
habla con `POST /ai/action` del worker con sesión del usuario.

## Implementación

### 1. Mover y aislar el cliente IA

```text
worker/
  src/
    index.ts                 // router: /ai/action, /jobs/run, /health
    ai/client.ts             // MOVER aquí desde src/lib/ai/client.ts
    ai/actions.ts            // catálogo de acciones permitidas (whitelist)
    jobs/morningPlan.ts      // MOVER los 4 jobs aquí
    jobs/eveningReview.ts
    jobs/stuckTasks.ts
    jobs/careerResearch.ts
    lib/audit.ts             // log por llamada: acción, modelo, fecha, aprobada
```

`worker/src/ai/actions.ts` — whitelist estricta (nada de prompts libres desde el cliente):

```ts
export const AI_ACTIONS = {
  'summarize-job':      { maxTokens: 800,  requiresApproval: true },
  'tailor-cv':          { maxTokens: 2000, requiresApproval: true },
  'draft-cold-email':   { maxTokens: 1200, requiresApproval: true },
  'propose-top3':       { maxTokens: 600,  requiresApproval: true },
  'evening-review':     { maxTokens: 800,  requiresApproval: true },
  'language-practice':  { maxTokens: 900,  requiresApproval: false },
} as const;
export type AiActionName = keyof typeof AI_ACTIONS;
```

El endpoint rechaza cualquier acción fuera de la whitelist y registra cada llamada en `audit`.

### 2. Frontend: `AiAction` llama al worker, no al modelo

```ts
// src/lib/ai/requestAiAction.ts  (NUEVO — el único punto de contacto del cliente)
export async function requestAiAction(action: AiActionName, payload: unknown) {
  const res = await fetch(`${import.meta.env.PUBLIC_WORKER_URL}/ai/action`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ action, payload }),
  });
  if (!res.ok) throw new Error(`AI action failed: ${res.status}`);
  return res.json(); // { draftId, content, sourcesUsed }
}
```

- `PUBLIC_WORKER_URL` es la única variable pública (es una URL, no un secreto).
- Eliminar `src/lib/ai/client.ts` y cualquier import suyo en componentes.
- `AiDraftReview` sigue igual: todo resultado es borrador hasta `Aprobar`.

### 3. Scheduler de los jobs diarios

Crear `.github/workflows/daily-jobs.yml`:

```yaml
name: daily-jobs
on:
  schedule:
    - cron: '0 14 * * *'   # ~09:00 America/Bogota (UTC-5)
    - cron: '0 2 * * *'    # ~21:00 America/Bogota
  workflow_dispatch: {}
jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - name: morning plan
        if: github.event.schedule == '0 14 * * *'
        run: npx tsx worker/src/jobs/morningPlan.ts
        env:
          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          AI_PROVIDER_KEY: ${{ secrets.AI_PROVIDER_KEY }}
      - name: evening review
        if: github.event.schedule == '0 2 * * *'
        run: npx tsx worker/src/jobs/eveningReview.ts
        env:
          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          AI_PROVIDER_KEY: ${{ secrets.AI_PROVIDER_KEY }}
```

Reglas:
- Los jobs escriben BORRADORES (estado `draft`) que el usuario aprueba en la UI; jamás mutan
  tareas ni envían nada.
- Cada job es idempotente: si ya existe borrador de hoy, lo actualiza, no duplica.
- Los resultados se leen en la app desde snapshot (`public/data/daily-plan.json`) o Notion.

### 4. RAGs: honestidad funcional

Si `staticRag.ts`/`dynamicRag.ts` no hacen retrieval real (embeddings + búsqueda):
- Etiquetar en UI: `Beta — respuestas sin verificación de fuentes`.
- `Datos usados` debe listar exactamente los textos enviados al modelo.
- Crear issue `rag-real-retrieval` para la implementación verdadera.
Si sí hacen retrieval: documentar el índice, cómo se regenera y con qué frecuencia.

## Aceptación (con evidencia)
- Salida de los 4 comandos de verificación pegada en el PR.
- Build de producción inspeccionado: `grep -rn "AI_PROVIDER_KEY" dist/` → vacío.
- `workflow_dispatch` ejecutado una vez con éxito y captura del run.
- Prueba E2E: `propose-top3` genera borrador → visible en Hoy → solo se aplica con `Aprobar plan`.
