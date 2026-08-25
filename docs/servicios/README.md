# docs/servicios — Sistema de servicios freelance AG-SERV

> Fuente de verdad del catálogo, tarifas y estimación freelance. Owner: AG-SERV (ficha §3.10 de
> `docs/agents/PLAN_MULTIAGENTE.md`, pendiente de aprobación formal vía PR).
> Moneda USD. Todos los rangos derivan de `01_modelo_cobro.md` — ningún número sin fórmula detrás.

## Índice

| Archivo | Contenido |
|---|---|
| [`01_modelo_cobro.md`](01_modelo_cobro.md) | Bandas N1–N4 ancladas a doc-03, fórmula de presupuesto, modificadores, revisiones, licencias, términos de pago, plantilla SOW |
| [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md) | Familia A (render offline), B (assets RT B1–B8), F1 CAD→WebGL ⭐, F2 texturas |
| [`03_catalogo_web_experiencias.md`](03_catalogo_web_experiencias.md) | Familia C: visores C1–C2, web apps C3, scrollytelling C4, configuradores C5, minijuegos C6, Unity WebGL C7, presentaciones C8, AR web C9 |
| [`04_catalogo_vfx_ia_consultoria.md`](04_catalogo_vfx_ia_consultoria.md) | Familia D (VFX/footage), E (IA: chatbots, automatización, agentes, auditoría), F3 digital twin, G (consultoría/retainers) |
| [`05_estimacion_ejemplos.md`](05_estimacion_ejemplos.md) | Flujo de estimación, caso trabajado drone CAD ⭐, ejemplos compuestos, spec del cotizador visual futuro |
| [`06_paquetes.md`](06_paquetes.md) | 10 paquetes comerciales + retainers + guía de venta |
| [`REGLAS_AG-SERV.md`](REGLAS_AG-SERV.md) | Carta/reglas del agente (instancia hermana) |
| `04_catalogo_vfx_ia.md` · `05_catalogo_soporte_consultoria.md` | ⚠️ SUPERSEDED (bandas legacy v0, banner interno): D/E y G de la otra instancia — no usar para cotizar |
| `CATALOGO_SERVICIOS.md` · `METODOLOGIA_ESTIMACION.md` | Material paralelo de la instancia hermana — **pendiente unificación por el usuario** |

## Hallazgo de auditoría (2026-08-25, ciclo 2)

**Inconsistencia abierta entre metodología y catálogos:** `01_modelo_cobro.md` v1 declara bandas
N1 20–28 · N2 28–40 · N3 40–60 · N4 60–85 USD/h con redondeo a múltiplos de 50, pero TODAS las líneas
de precio publicadas en `02`–`06` fueron calculadas con las bandas legacy v0 (25–30/28–35/35–45/45–55)
y redondeo por tramos 10/50/100 (verificado por ingeniería inversa del apéndice de deltas d3b3861).
Antes de exponer precios a clientes: elegir bandas definitivas y regenerar todas las líneas con el
motor determinista (`src/data/services/`, este repo) o re-cálculo manual auditado.

## Estado y advertencia de unificación (2026-08-25)

Este directorio fue construido por **dos sesiones concurrentes de AG-SERV** que trabajaron en paralelo sobre
ramas distintas (`agent/servicios` y `agent/services`) y terminaron entrelazadas. Los archivos aquí son la
**unión conservada con la Regla de Oro** (nada se borró): conviven dos convenciones de niveles
(N1–N4 en 01–06 vs clases RC/tiers S–XL en el material paralelo). **Antes de usar comercialmente, el usuario
debe elegir una convención única**; recomendación: consolidar sobre N1–N4 (mayor granularidad por subtarea)
y migrar los números del material paralelo como verificación cruzada.

## Flujo de uso (post-unificación)

1. Intake con cliente → identificar servicio(s) y medir drivers.
2. Asignar nivel por subtarea → sumar horas → aplicar bandas/redondeo (`01` §3).
3. Sumar directos + modificadores → SOW (`01` §8).
4. Si el pedido encaja en un paquete → cotizar con `06`.
5. Fase futura aprobada: el cotizador web consume estos archivos según spec de `05` §4.
