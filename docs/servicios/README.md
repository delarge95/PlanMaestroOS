# docs/servicios — Sistema de servicios freelance AG-SERV

> Fuente de verdad del catálogo, tarifas y estimación freelance. Owner: AG-SERV (ficha §3.10 de
> `docs/agents/PLAN_MULTIAGENTE.md`). Moneda USD. Todos los rangos derivan de `01_modelo_cobro.md` —
> ningún número sin fórmula detrás.
>
> **Estado: UNIFICADO (ciclos 3–4, 2026-08-25).** Ciclo 4 añade: dual moneda USD/COP, nivel XS, programa primeros clientes −25 %, paquetes computables y matriz cualitativa. El directorio fue construido por múltiples instancias de la
> misma sesión duplicada por un bug del entorno; este ciclo fusionó ambas líneas, regeneró todos los
> presupuestos con el motor determinista y archivó el material paralelo en `_historico/`.

## Índice canónico

| Archivo | Contenido |
|---|---|
| [`01_modelo_cobro.md`](01_modelo_cobro.md) | **v1.2** — Bandas operativas N1–N4 (+ corredor de calibración), redondeo única §3.1, fórmula, directos §4.1, modificadores §5, revisiones/mora §6, licencias §7, pagos §8, plantilla SOW §9, calibración §10, confianza §11 |
| [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md) | Familia A (render offline), B1–B8 assets RT (núcleo + deltas + apéndice de presupuestos por delta), F1 CAD→WebGL ⭐, F2 texturas |
| [`03_catalogo_web_experiencias.md`](03_catalogo_web_experiencias.md) | Familia C1–C9: visores low-code/custom, web apps, scrollytelling, configuradores, minijuegos, Unity WebGL, presentaciones, AR web |
| [`04_catalogo_footage_ia_soporte.md`](04_catalogo_footage_ia_soporte.md) | **v2 unificado** — D (compositing foto/video, FX standalone), E1–E5 (IA: chat RAG, indirecta web, procesos internos, programa adopción, auditoría), F3 digital twin ligero, G (discovery acreditable, auditoría perf, consultoría, retainers escalables) |
| [`05_estimacion_ejemplos.md`](05_estimacion_ejemplos.md) | **v2** — Flujo de estimación, caso drone CAD ⭐ (derivación visible), spec del cotizador con sliders, guardarraíles de composición, checklist QA |
| [`06_paquetes.md`](06_paquetes.md) | PK-01..PK-10 + retainers (alineados a G3) + guía de venta |
| [`07_matriz_complejidad_cualitativa.md`](07_matriz_complejidad_cualitativa.md) | Dimensiones cualitativas que suben/bajan niveles (geometría, acabado, densidad funcional, target) + cheat-sheet de intake |
| [`REGLAS_AG-SERV.md`](REGLAS_AG-SERV.md) | Carta/reglas del agente |

## Código (espejo determinista — ficha §3.10 F0)

`src/data/services/**` — contratos (`types.ts`), rate card doble (operativa v0 + corredor draft v1),
fórmula pura (nivel fijo y mixto), catálogo core A/B/F1/F2/C1-C3/D1/G1 con nivel XS, **44 tests** +
CLI: `scripts/validateServices.ts` (regenera todos los presupuestos sin aritmética manual).
Fuente única de dinero en código: `rateCard.ts` — ahora DUAL: USD internacional + COP nacional (`RATE_CARD_COP_V1`, mercado local más económico; TRM solo informativa). Incluye motor de quotes (`computeQuote`: modificadores lanzamiento −25 %/recurrente/lote/urgencia), **paquetes pregenerados computables** (`packages.ts`, ej. PK-CAD-WEBGL) y rúbrica cualitativa (`complexityRubric.ts`).

## `_historico/` — material preservado (no usar para cotizar)

| Archivo | Procedencia |
|---|---|
| `04_catalogo_vfx_ia.md` | Línea rica D/E original — promovido dentro de 04 v2 |
| `04_catalogo_vfx_ia_consultoria.md` | Reescritura simplificada D/E/G — fusionada en 04 v2 |
| `05_catalogo_soporte_consultoria.md` | Familia G rica — promovida a 04 v2 §G |
| `CATALOGO_SERVICIOS.md` · `METODOLOGIA_ESTIMACION.md` | Material paralelo T1–T4 (≈ N1–N4): verificación cruzada realizada en ciclo 3; metodología absorbida por 01 v1.2 |

## Flujo de uso

1. Intake con cliente → identificar servicio(s) y medir drivers.
2. Asignar nivel por subtarea → sumar horas → aplicar bandas/redondeo (01 §3–§4).
3. Sumar directos (§4.1) + modificadores (§5) → SOW (§9).
4. Si el pedido encaja en un paquete → cotizar con `06`.
5. Verificación: `npx tsx scripts/validateServices.ts` (regenera A/B/F1/F2) + checklist de `05` §6.
6. Fase futura aprobada: el cotizador web consume estos datos según spec de `05` §3.
