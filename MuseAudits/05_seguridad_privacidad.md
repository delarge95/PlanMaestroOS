# 05 — Seguridad y privacidad

## Estado actual (mixto)

Bien: `syncPolicy.ts` (rate-limit 3 req/s), `auditLogger.ts`, `workerClient.ts`
con backoff, validación por dominio, `x-pm-key` para worker, disclaimers clínicos,
gates en sub-RAG sexual (info + derivación, jamás intervención), CONTENT no copia
libros (solo metadatos + notas propias), placeholders en vez de datos inventados.

Mal o ausente: ver abajo.

## Hallazgos (severidad → fix)

### P0 — `GEMINI_API_KEY` vive en `.env` del repo raíz y el worker la necesita

- Riesgo: un commit accidental la publica (`.env` existe local; solo `.env.example`
  debe versionarse — verificar `.gitignore` incluye `.env`, y añadir test que falle
  si una key real aparece en el diff: `grep -r "AIza" --include="*.ts" src worker`).
- Regla: lectura SOLO de env en runtime del worker; nunca en frontend (`PUBLIC_*`
  expone). El ENCARGO M6 ya lo exige — mantenerlo como invariante con test.

### P0 — Datos de salud sin protección especial

- `clinicalStore` (biofeedback, ansiedad, sueño, dolor), `painLog` futuro,
  `femaleProfile` (ciclo/menopausia) y sesiones son datos sensibles.
- Fix mínimo: (a) todo salud en IndexedDB local, nunca en Notion/Sheets sin
  consentimiento explícito por dominio; (b) botón "exportar/borrar mis datos de salud";
  (c) aviso de que Sheets/Docs externos (Spark, ver archivo 08) NO reciben salud.
  A medio plazo: cifrado en reposo de stores `clinical-*`, `nutrition-*` (WebCrypto,
  1 encargo).

### P1 — Sin auth en `/app` ni en worker

- Hoy es correcto (app local personal, `output:static`). Pero en cuanto el worker
  exista públicamente: `x-pm-key` rotativa + allowlist de orígenes + rate-limit por IP
  + firmado de webhooks. No inventar auth propia: key + secreto + HTTPS basta para 1 usuario.
- `ENABLE_LIVE_SYNC=false` es hoy el mejor control: no activar sync real hasta P0 cerrado.

### P1 — Superficie de ingesta externa sin sanitizar

- `capture-saved.ts` (URLs FB/IG/YT pegadas), `parse-tracker.ts` (xlsx), imports CSV
  de wearables (archivo 03/08): validar esquema + límite de tamaño + escapar HTML
  antes de renderizar (React ya escapa, pero los `.astro` con `{@html}`/set:html son
  el punto a auditar — grep y prohibir `set:html` con contenido externo).
- Prompts de IA jamás incluyen datos de salud completos: enviar solo agregados
  (ej. "EVA medio 4, zona hombro") + exigir `requiresApproval` en toda acción IA.

### P2 — Privacidad de terceros

- Pipeline laboral guarda nombres de reclutadores, emails, mensajes (doc-22/23).
  Regla: campo `contactConsent` + no sincronizar datos de terceros a servicios externos
  (Sheets de Spark: solo empresa/rol/estado, nunca emails privados ni notas internas).
- Cotizador/Services expone `alexwssonn@hotmail.com` + teléfono en repo público
  extraído (`delarge95/Services`) — decisión consciente, pero documentarla y usar
  email dedicado + formulario en vez de teléfono en claro a medio plazo.

## Checklist pre-sync-real (no activar sin esto)

1. `.env` ignorado + test anti-secret en `ci`.
2. Salud marcada `local-only` por defecto con opt-in por dominio.
3. Worker con key, CORS cerrado, logs sin contenido sensible (solo acción/modelo/fecha/resultado).
4. `set:html` auditado (0 usos con datos externos o con sanitizador).
