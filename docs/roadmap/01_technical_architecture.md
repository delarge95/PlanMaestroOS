# Arquitectura técnica

## Monorepo
- `apps/web` (Astro, GitHub Pages).
- `apps/worker` (API, jobs, IA, sync).
- `packages/fitapp` (código FitApp como librería).
- `docs/` (arquitectura, roadmap, modelos de datos).

## Stack
- Frontend: Astro + React (o similar) + CSS moderno.
- Backend: Cloudflare Workers / Vercel Functions / similar.
- Base operativa: Notion.
- Base de código: GitHub.
- IA: Gemini / Perplexity vía worker.

## Seguridad
- No exponer tokens en el frontend.
- Toda escritura a Notion/GitHub pasa por worker.
- Webhooks firmados y verificados.
- Rate limiting y retries.

## Observabilidad
- Logs de jobs.
- Métricas de sync.
- Auditoría de acciones IA.
