# STATUS — AG-PORT (rama agent/portfolio)

> Ciclo 2 · 2026-08-25. Estado: **Fase 3 (sprint de assets y launch) operativa** — tablero de producción doc-33 y checklist de launch doc-36 sincronizados en el simulador. Fase 4 (RAG) completa desde el ciclo anterior; CV→PDF v1 entregado.

## Commits del ciclo 2

| Commit | Contenido |
|---|---|
| `62455e5` | feat(portfolio): tablero sprint doc-33 con estados, responsable y fuente por ítem |
| `49a84f9` | feat(portfolio): checklist de launch doc-36 sincronizado con el tablero doc-33 |
| (este) | docs: STATUS-portfolio ciclo 2 |

Arranque del ciclo: `git merge main --no-edit` (trajo DESPACHO 2, RAGs EN/NUTRI/FIT, career c2) sin conflictos; baseline verde antes de tocar nada.

## Tablero sprint doc-33 (Fase 3a) — completado

- `portfolioChecklist.ts` evoluciona de lista pending a **tablero de producción**: `PortfolioAssetStatus` ahora `pending | in_progress | review | done` (+ labels ES), campo `owner` visual por ítem (`alex` = producción manual: captura/edición/publicación; `ag-port` = integración en sitio: carpeta media del portafolio y CV PDF), y cita `doc-33 §…` por ítem (28 ítems).
- Nuevo `portfolioBoardStore.ts`: estado vivo persistido (`portapp-sprint-board-v1`, zustand persist siguiendo la convención de `prehabStateStore`; migrará al adaptador IndexedDB de CORE sin cambiar interfaz). El dataset conserva el baseline honesto (todo «Pendiente»: el sprint no se ha ejecutado); los ids ausentes caen al default vía `withBoardDefaults`. Selectores puros: `selectBoardCards`, `selectBoardColumns`.
- UI en el simulador: pestaña **Tablero Sprint** (kanban de 4 columnas con color por estado), tarjeta con título, detalle, chips de plataforma/responsable/links-desbloqueados, fuente citada y selector de estado. Banner de progreso ahora lee estado vivo («pendientes X de N · Hechos: Y» por plataforma). El export al portapapeles incluye snapshot completo del tablero.
- REGLA DE ORO: exports previos intactos (`pendingPortfolioAssets`, `portfolioAssetsByPlatform`, `pendingPortfolioAssetCount`, specs 29C, checklist 28E); las demás pestañas del simulador no cambian.

## Checklist launch doc-36 (Fase 3b) — completado

- Nuevo `portfolioLaunchChecklist.ts`: los 10 pasos de la secuencia §4.1 agrupados por día (§16, D1–D6), cada uno con `requiresAssetIds` (ids reales del tablero doc-33), `requiresStepIds` (orden duro solo donde §4.2 lo justifica: homepage→case study, LinkedIn→hub terminado, Featured→perfil, CV→links existentes, tracker→CV, post→Featured) y placeholders de URL **explícitos** `[DEMO_VIDEO_URL]`, `[GITHUB_URL]`, `[PORTFOLIO_URL]`, etc. — cero URLs inventadas (test lo garantiza: ningún `https?://` en el módulo).
- Gating puro y testeable: `isLaunchStepEnabled` (assets «done» + pasos previos completos), `getLaunchBlockers` (razón legible del bloqueo). Sincronía real con el tablero: marcar un asset como Hecho habilita sus pasos de launch al instante.
- **Puerta final pre-aplicaciones (§21)** derivada automáticamente de los pasos completados (6 condiciones), con la excepción Priority A documentada.
- `usePortfolioLaunchStore` (`portapp-launch-v1`) persiste completados; toggle bloqueado si el paso aún no está habilitado.
- UI: pestaña **Launch** con pasos por día, badges Completado/Listo/Bloqueado, chips de assets requeridos con su estado vivo, placeholders visibles con tooltip, y panel de puerta final. Nota de ownership en el paso tracker: registrar el evento es AG-CAREER, AG-PORT entrega el asset (plan §3.7 F3).

## Validación

- `npm test` → **284/284 verdes** (29 archivos; +14 de launch, +8 de board store, +5 nuevos en checklist).
- `npx astro check` → **0 errores, 0 warnings**, hints en el baseline del repo tras el merge (50).
- Diff verificado contra §1.2: solo archivos OWN de §3.7 (`PortfolioSimulator.tsx`, datos/tests de portfolio en `src/data/career/`). Sin push.
- Tests cubren: estados/owner válidos y representados, gating por assets, dependencias solo hacia atrás, ausencia de URLs absolutas, formato de placeholders, gate §21 mapea a pasos reales.

## Estado heredado (ciclo 1, resumen)

RAG `rag/portfolio.json` (6 fuentes/36 chunks, build v4 OK); hero home corregido contra doc-20 §4; focus routes enlazadas desde /work; CV con variantes + botón «Descargar PDF (A4)» v1 (print A4, filename por variante).

## Pendientes / tickets

1. **`rag/index.json` global** — resuelto por otro agente en el merge de este ciclo: el índice existe y ya no contiene los chunks inválidos de fitness (`maughan-ch47-strength`, etc.). Verificado con búsqueda sobre el archivo; no requiere acción.
2. Confirmaciones del usuario antes del CV final (doc-17 §2): email, teléfono, ubicación exacta, URL portafolio, fechas, métricas finales TwinSight, URL demo WebGL — placeholders explícitos en `/cv`.
3. Ejecutar el sprint físico (captura/edición/export): es trabajo humano — el tablero ya permite seguirlo ítem a ítem; los pasos de launch se irán habilitando solos.
4. Persistencia de stores portfolio en adaptador IndexedDB de CORE cuando esté disponible (swap interno, misma interfaz).
5. v2 del export PDF (render headless) solo si el usuario necesita archivo sin diálogo.
