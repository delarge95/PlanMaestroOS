# ENCARGO: M6 — Worker IA Gemini (CORE Fase C)

## ESTADO ACTUAL (lo que YA existe — leer antes de tocar)

| Archivo | Qué tiene | Qué falta |
|---|---|---|
| `worker/src/ai/client.ts` | Interfaz `processAiActionInWorker()`, whitelist, logging | **Llamada real a Gemini API** (hoy es simulación) |
| `worker/src/ai/actions.ts` | 9 acciones whitelist con maxTokens + requiresApproval | Ya completo |
| `worker/src/index.ts` | Worker Cloudflare básico | **Endpoint `/ai/action`** que recibe POST y llama client |
| `src/lib/ai/requestAiAction.ts` | `requestAiAction()` que hace fetch al worker | Ya completo |
| `src/components/ai/AiDraftReview.tsx` | UI de borrador (Editar/Aprobar/Descartar) | Ya completo |
| `src/components/ai/AiAction.tsx` | Botón genérico que dispara acción | Ya completo |
| `src/components/ai/SectionAiActions.tsx` | Botones contextuales por sección | Ya completo |
| `.env` | `GEMINI_API_KEY=AIzaSyBI4w-...` | Ya está (NUNCA commitear) |

**API key YA en .env. NO hardcodear. Leer de `env.GEMINI_API_KEY` en el worker.**

---

## PROMPT PARA EJECUTOR (GLM 5 Turbo)

```
Eres AG-CORE. Tu única tarea es completar el worker IA Gemini para que
las acciones de IA funcionen de verdad. NO toques UI (ya está hecha).

WORKTREE: E:\Laboral\.worktrees\core (rama agent/core)
ARRANQUE: npm install && git merge main --no-edit
Verificación: NODE_OPTIONS=--max-old-space-size=8192 npx astro check (0) && npm test (verde)

═══════════════════════════════════════════════════════════════
TAREA 1: Completar Gemini API client (worker/src/ai/client.ts)
═══════════════════════════════════════════════════════════════
El archivo tiene la interfaz pero hace simulación. Sustituye la simulación
por una llamada real a la Gemini API:

```typescript
// URL de la API (usar modelo gemini-2.0-flash — barato y rápido)
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

// Headers
const headers = {
  'Content-Type': 'application/json',
  'x-goog-api-key': env.GEMINI_API_KEY,  // Cloudflare Workers env
};

// Body — el prompt viene del payload del action
const body = JSON.stringify({
  contents: [{ parts: [{ text: promptText }] }],
  generationConfig: { maxOutputTokens: actionConfig.maxTokens, temperature: 0.7 },
});

// Fetch con timeout 20s
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 20000);
const response = await fetch(GEMINI_URL, { method: 'POST', headers, body, signal: controller.signal });
clearTimeout(timeout);

// Parsear respuesta
const data = await response.json();
const content = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
```

REGLAS:
- Timeout 20s con AbortController
- Si la API falla → throw con mensaje claro (el worker devuelve 500)
- Logging SIEMPRE: `logAiCall(action, tokensUsed, duration, success)`
- La API key viene de `env.GEMINI_API_KEY` (Cloudflare Workers secrets), NUNCA hardcoded
- Contar tokens de la respuesta (aprox: content.length / 4)

═══════════════════════════════════════════════════════════════
TAREA 2: Worker endpoint (worker/src/index.ts)
═══════════════════════════════════════════════════════════════
Añade al worker un endpoint que reciba las peticiones:

```typescript
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ ok: true }), { headers: jsonHeaders });
    }

    // AI action endpoint
    if (url.pathname === '/ai/action' && request.method === 'POST') {
      // Verificar API key en header
      const providedKey = request.headers.get('x-pm-key');
      if (providedKey !== env.PM_SECRET_KEY) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
      }

      // Verificar que GEMINI_API_KEY existe
      if (!env.GEMINI_API_KEY) {
        return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not configured' }), { status: 501 });
      }

      try {
        const { action, payload, sourcesUsed } = await request.json();
        const result = await processAiActionInWorker({ action, payload, sourcesUsed }, env);
        return new Response(JSON.stringify(result), { headers: jsonHeaders });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};
```

Headers CORS necesarios:
```typescript
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-pm-key',
};
const jsonHeaders = { ...corsHeaders, 'Content-Type': 'application/json' };
```

═══════════════════════════════════════════════════════════════
TAREA 3: Prompts por acción (worker/src/ai/prompts.ts — NUEVO)
═══════════════════════════════════════════════════════════════
Cada acción de la whitelist necesita su prompt. Crear el archivo:

```typescript
export const ACTION_PROMPTS: Record<string, (payload: any) => string> = {
  'explain-progress': (p) =>
    `Eres un coach de fitness. Explica en español claro y motivador por qué
    el usuario tiene estos números esta semana:
    - Sesiones: ${p.sessions}
    - Series duras: ${p.hardSets}
    - RPE medio: ${p.avgRpe}
    - Dolor registrado: ${p.pain}
    Usa máximo 150 palabras. Sé específico y accionable.`,

  'tailor-cv': (p) =>
    `Eres un reclutador técnico. Adapta este CV para la vacante de ${p.roleTitle}
    en ${p.companyName}. La vacante pide: ${p.requirements}.
    CV base: ${p.cvBase}
    Genera un CV de 1 página enfocado en lo que la empresa busca.
    Usa viñetas accionables con métricas.`,

  'draft-cold-email': (p) =>
    `Redacta un email frío para ${p.contactName} en ${p.companyName}.
    Contexto: soy desarrollador 3D web con experiencia en ${p.mySkills}.
    Su empresa: ${p.companyContext}.
    Máximo 120 palabras, tono profesional pero humano, un solo CTA.`,

  'summarize-job': (p) =>
    `Resume esta vacante en 5 puntos clave: rol, stack técnico, salario,
    remoto/onsite, y qué hace único a esta empresa.
    Título: ${p.title}
    Descripción: ${p.description}
    Máximo 100 palabras.`,

  'propose-top3': (p) =>
    `Dado el estado del usuario (energía: ${p.energy}, tareas pendientes: ${p.pendingTasks}),
    propón las 3 acciones más impactantes para hoy. Cada una con:
    título, acción de 10 minutos, y por qué es importante ahora.`,

  'evening-review': (p) =>
    `Genera un resumen de cierre del día:
    - Tareas completadas: ${p.completed}
    - Tareas pendientes: ${p.pending}
    - Entrenamiento: ${p.training}
    - Aprendizaje: ${p.learning}
    Celebra lo logrado (1 línea), identifica el mayor bloqueo (1 línea),
    sugiere la primera acción de mañana (1 línea).`,

  'stuck-task': (p) =>
    `Esta tarea lleva ${p.daysStuck} días sin avanzar: "${p.taskTitle}".
    Contexto: ${p.context}
    Genera 3 hipótesis de por qué está bloqueada y una micro-acción
    de 5 minutos para desbloquearla.`,

  'language-practice': (p) =>
    `Genera un ejercicio de práctica de ${p.language} nivel ${p.level}.
    Tema: ${p.topic}. Formato: pregunta → respuesta correcta → explicación breve.
    El ejercicio debe ser específico y útil para el contexto laboral.`,

  'summarize-recipe': (p) =>
    `Resume esta receta: ${p.recipeName}.
    Ingredientes clave: ${p.ingredients}.
    Tiempo: ${p.time}. Dificultad: ${p.difficulty}.
    Lista: 1) macros aproximados, 2) pasos en 3 líneas, 3) con qué combinarla.`,
};
```

═══════════════════════════════════════════════════════════════
TAREA 4: Conectar prompts al client
═══════════════════════════════════════════════════════════════
En client.ts, usar el prompt del action:
```typescript
import { ACTION_PROMPTS } from './prompts';
// En processAiActionInWorker:
const promptText = ACTION_PROMPTS[action]?.(payload) ?? `Acción: ${action}. Payload: ${JSON.stringify(payload)}`;
```

═══════════════════════════════════════════════════════════════
TAREA 5: Tests unitarios del worker
═══════════════════════════════════════════════════════════════
Crear worker/src/ai/__tests__/client.test.ts:
- Mockear fetch global
- Test: llama a Gemini API con headers correctos
- Test: timeout aborta después de 20s
- Test: respuesta exitosa parsea content
- Test: respuesta de error lanza con mensaje
- Test: acciones fuera de whitelist rechazan

═══════════════════════════════════════════════════════════════
TAREA 6: Primer consumidor en la app
═══════════════════════════════════════════════════════════════
En la página de Nutrición (src/components/fitness/nutrition/NutritionWorkspace.tsx):
añadir un botón "Explicar mis targets (IA)" que:
1. Importa requestAiAction desde src/lib/ai/requestAiAction
2. Al click: llama requestAiAction('explain-progress', { sessions: 3, hardSets: 42, avgRpe: 7.5, pain: 0 })
3. Renderiza el resultado en el componente AiDraftReview existente
4. Maneja error con mensaje "IA no disponible ahora" (la app sigue 100% funcional sin IA)

REGLAS CRÍTICAS:
- La API key JAMÁS en código commiteado. Solo env vars.
- El endpoint SIEMPRE devuelve borradores (requiresApproval), nunca aplica directo.
- Si GEMINI_API_KEY no existe → 501 con mensaje, la app no se rompe.
- Logging por llamada: action, tokens, duración, success/fail.
- La app debe ser 100% funcional SIN el worker (§0.5 del plan).

Commits por tarea. Verificación por commit.
```

---

## PROTOCOLO DE VERIFICACIÓN (misión control)

1. `npx astro check` en worktree core → 0 errores
2. `npm test` → verde (incluye tests nuevos del worker)
3. `grep -rn "AIzaSy\|GEMINI_API_KEY" worker/src --include=*.ts | grep -v "env\."` → 0 (no hardcodeada)
4. Worker test: `npx vitest run worker` → verde
5. Smoke: arrancar worker local (`npx wrangler dev` en worker/) + click botón "Explicar" en /app/fitness/nutrition
6. Merge a main solo si todo verde
