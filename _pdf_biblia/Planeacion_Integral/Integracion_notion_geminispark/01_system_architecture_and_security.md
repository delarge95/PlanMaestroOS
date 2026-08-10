# 01 · Arquitectura de sistema, despliegue y seguridad

## Arquitectura objetivo
```text
Usuario
  │
  ├── Astro App (GitHub Pages, lectura/UI estática)
  │      └── dataset público saneado + snapshots generados en build
  │
  ├── API/Worker privado (Cloudflare Worker, Vercel Functions o similar)
  │      ├── Notion API
  │      ├── GitHub API / GitHub App
  │      ├── cola de trabajos y logs de auditoría
  │      └── proveedor IA, solo con consentimiento y scopes explícitos
  │
  ├── Notion (datos operativos)
  ├── GitHub (código y repositorios)
  └── Google Sheets (reportes/puente temporal; no fuente de verdad)
```

## Restricción de GitHub Pages
GitHub Pages sirve una aplicación estática. Por ello:
- `NOTION_TOKEN`, tokens GitHub, claves de Gemini y secretos de Google **no** pueden estar en variables públicas ni bundle cliente.
- El build puede leer datos privados solo dentro de GitHub Actions y debe exportar únicamente una proyección saneada a `public/data`.
- La escritura, consultas en tiempo real, webhooks y llamadas IA deben pasar por un endpoint privado autenticado.

## Patrón recomendado: snapshots de lectura
1. Worker o GitHub Action consulta Notion con token privado.
2. Valida schema y transforma páginas a contratos internos.
3. Elimina campos sensibles y genera `public/data/*.json` con versionado y `generatedAt`.
4. Astro consume esos snapshots al compilar.
5. GitHub Pages se redepliega tras un cambio validado o en una cadencia razonable.

Esto ofrece rapidez y simplicidad. Las acciones que requieren tiempo real usan el worker, no Astro estático.

## Webhooks y sincronización
- Notion webhooks requieren una URL pública HTTPS; localhost no sirve. Usar worker/función para recibirlos y verificar su autenticidad según la documentación oficial. [web:103]
- Notion limita las integraciones a un promedio de tres solicitudes por segundo; implementar cola, backoff exponencial, respeto a `Retry-After`, idempotencia y métricas. [web:101]
- Un webhook no debe reconstruir la app por cada edición menor. Debounce 30–120 segundos, agrupar eventos y generar un único job idempotente.

## Autenticación y autorización
### Usuario
- MVP individual: autenticación opcional para lectura estática; obligatoria para acciones de escritura y IA.
- Antes de incorporar múltiples usuarios, no publicar datos de salud, aplicaciones, notas clínicas ni agenda en JSON público.

### Integraciones
- Notion: integración interna con acceso solamente a DBs específicas compartidas de forma explícita.
- GitHub: preferir GitHub App con permisos mínimos sobre PAT de alcance amplio.
- Google: OAuth y scopes mínimos; no guardar refresh tokens sin cifrado y rotación.
- IA: claves exclusivamente en worker; registrar proveedor/modelo/fecha de cada acción, nunca prompts sensibles completos por defecto.

## Secretos
Crear `.env.example` sin valores y una matriz de secretos:
```text
NOTION_TOKEN
NOTION_AGENDA_DB_ID
NOTION_FITNESS_DB_ID
NOTION_CAREER_DB_ID
GITHUB_APP_ID
GITHUB_APP_PRIVATE_KEY
GITHUB_WEBHOOK_SECRET
AI_PROVIDER_KEY
SYNC_SIGNING_SECRET
```
- Secretos solo en el proveedor del worker y GitHub Actions.
- Rotar tokens, registrar acceso y revocar ante exposición.
- Añadir secret scanning y deny-list de archivos al repositorio.

## Observabilidad e Implementación de Código
Cada job guarda `jobId`, origen, entidad, operación, actor, timestamp, resultado, retries y error saneado mediante `src/lib/security/auditLogger.ts`. Se aplica ocultación automática de tokens y patrones sensibles (`sanitizeErrorMessage`).

## Decisiones tomadas y arquitectura implementada
- **Host de Backend Worker**: **Cloudflare Workers** (acceso mediante `workerClient.ts` y variable `WORKER_API_URL`).
- **Proveedor IA y Política**: **Google Gemini API** (invocado exclusivamente por el Worker; la IA genera borradores/propuestas y jamás ejecuta escrituras autónomas).
- **Estrategia de Snapshots**: Proyecciones estáticas saneadas en `public/data/snapshots/*.json` generadas en tiempo de build con `scripts/buildSnapshots.ts` según contratos de `src/data/snapshots/types.ts`.
- **Límites de Tasa y Debounce**: Implementados en `src/lib/security/syncPolicy.ts` (3 req/seg para Notion API, debounce de 30–120s para webhooks).
