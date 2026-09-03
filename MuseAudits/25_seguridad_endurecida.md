# 25 — Seguridad endurecida (código, no intenciones)

1. **Anti-secret en CI** (encargo, 1h): test que falla si el diff contiene
   `AIza|ghp_|notion_|sk-` fuera de `.env.example` con valor `***`. Verificar
   `.gitignore` incluye `.env` (hoy `.env` existe local con `GEMINI_API_KEY`).
2. **Salud local-only** (ADR-6): flags por dominio + botón exportar/borrar
   (`clinical`, `nutrition`, `painLog`, `fitapp_workout_history`). Spark/Sheets:
   solo títulos/URLs y empresa/rol/estado; jamás salud ni contactos privados.
3. **`set:html` auditado**: grep en `*.astro`; 0 usos con datos externos
   (URLs pegadas, xlsx, CSV wearables, respuestas IA) sin sanitizador.
4. **Worker**: `x-pm-key` rotativa, CORS cerrado, logs sin contenido
   (acción/modelo/tokens/fecha/approved — nunca prompt ni salud).
5. **Terceros**: campo `contactConsent` en pipeline; email dedicado para el
   cotizador público en vez de personal + teléfono en claro (decisión + fecha).
6. **Pre-sync checklist** (no activar `ENABLE_LIVE_SYNC` sin 1-4 en verde).
