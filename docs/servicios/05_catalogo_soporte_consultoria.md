# Catálogo de servicios — Familia G (soporte, consultoría y retainers)

> ⚠️ **SUPERSEDED (pendiente de unificación)** · Los precios de este archivo fueron calculados con las
> bandas legacy v0 (N1 25–30 · N2 28–35 · N3 35–45 · N4 45–55 USD/h), NO con las bandas canónicas del
> [`01_modelo_cobro.md`](01_modelo_cobro.md) v1 (N1 20–28 · N2 28–40 · N3 40–60 · N4 60–85).
> Cobertura equivalente en [`04_catalogo_vfx_ia_consultoria.md`](04_catalogo_vfx_ia_consultoria.md) §G y
> [`06_paquetes.md`](06_paquetes.md) (retainers). Se conserva por Regla de Oro como referencia histórica;
> **NO USAR para cotizar** hasta que el usuario resuelva la unificación (README §Estado).

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Mismo contrato de lectura que [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md).
> Esta familia es TRANSVERSAL: no produce un asset sino certeza (G1), diagnóstico (G2) o continuidad
> (G3). Los servicios de catálogo 02–04 la referencian ("requiere discovery G1", "retainer G3").

---

## G1 · Discovery & scoping de proyecto

**Qué es:** fase corta y estructurada que convierte una necesidad difusa en un SOW firmable: intake,
revisión de materiales, análisis técnico ligero, definición de alcance con niveles del catálogo y
presupuesto trazable. Obligatoria para C3, C4, E4 y todo proyecto >USD 3.000 (doc 01 §4).
**Drivers:** nº de stakeholders, estado del material de entrada, incertidumbre técnica.
**Confidence por defecto:** n/a (ES el mecanismo que genera confidence).

| Subtarea | Horas por nivel |
|---|---|
| Intake/entrevistas + revisión de materiales | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–14 |
| Análisis técnico/auditoría ligera | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–20 |
| Definición de alcance/SOW + estimación con catálogo | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–14 |
| Presentación y revisión con el cliente | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–6 |
| **Total horas** | **N1 3,5–8 · N2 8–16 · N3 16–32 · N4 32–54** |

**Presupuesto por nivel:** N1 **$80–240** · N2 **$220–600** · N3 **$550–1450** · N4 **$1400–3000**
Entrega: informe de discovery + SOW borrador en 2–5 días hábiles según nivel.
Regla de crédito: si el proyecto descrito se contrata dentro de los 60 días, **el 50% del discovery se
acredita** al primer hito.

---

## G2 · Auditoría técnica y consultoría

### G2-a · Auditoría de performance WebGL / app 3D

**Qué es:** diagnóstico de una web/app 3D existente que rinde mal: perfilado de carga y FPS, draw
calls, memoria, pipeline de assets; entrega reporte priorizado (quick wins vs trabajo estructural) y
sesión de lectura.
**Drivers:** tamaño de la app, acceso a código/fuentes, plataformas objetivo.
**Confidence por defecto:** `explicit` (alcance cerrado por entregable).

| Subtarea | Horas por nivel |
|---|---|
| Perfilado (load, FPS, draw calls, memoria, red) | N1 2–4 · N2 4–9 · N3 9–18 · N4 18–35 |
| Análisis de código/pipeline/assets | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| Reporte priorizado + sesión de lectura | N1 1–2 · N2 2–5 · N3 5–9 · N4 9–15 |
| **Total horas** | **N1 5–11 · N2 11–26 · N3 26–52 · N4 52–100** |

**Presupuesto por nivel:** N1 **$120–330** · N2 **$300–900** · N3 **$900–2400** · N4 **$2300–5500**
La implementación del plan de mejoras se cotiza aparte con el catálogo (C/B familias).

### G2-b · Consultoría técnica por hora

Pipeline 3D, shaders, integración web, arquitectura IA, decisiones build/compra. Tarifa por hora
según banda del tema (N1–N4, doc 01 §2); mínimo por sesión **2 h**; modalidad remota con agenda previa.

### G2-c · Mentoría/formación de equipo (sesión de 2 h)

Preparación + sesión práctica sobre un tema acordado (realtime, CAD→webgl, IA aplicada).
Prep + sesión: 3–5 h banda N2 → **$80–180 por sesión**. Serie de 4+ sesiones **−10%**.

---

## G3 · Retainers mensuales

> Cobro mensual ANTICIPADO (doc 01 §7). Horas no usadas NO se acumulan (política de rollover parcial
> pendiente de decisión del usuario — placeholder deliberado). Descuento retainer activo −10% ya
> aplicado sobre banda blended; adicionalmente habilita −10% en proyectos nuevos (doc 01 §4).

### G3-a · Mantenimiento app 3D web (post-entrega)

Correcciones de defectos, updates de librerías/three.js, monitoreo de performance, soporte de
incidencias. Requiere que el proyecto haya sido entregado por nosotros (o auditoría G2-a inicial).

| Bucket | Precio mensual | Uso típico |
|---|---|---|
| 4 h/mes | **$100–130** | vigilancia + fixes puntuales |
| 8 h/mes | **$200–250** | iteración ligera continua |
| 16 h/mes | **$400–500** | evolución activa |

### G3-b · Operación IA (para E1/E3 instalados)

Monitoreo de calidad de respuestas, ajuste de prompts/RAG con feedback real, reporte mensual de uso y
costes API (consumo siempre aparte).

| Bucket | Precio mensual |
|---|---|
| 4 h/mes | **$130–160** |
| 8 h/mes | **$250–320** |
| 16 h/mes | **$500–650** |

### G3-c · Bloque flexible mensual

Bolsa de horas aplicable a cualquier familia del catálogo, agendada por prioridad del cliente. Las
tareas consumen horas a su banda natural; el descuento −10% retainer aplica sobre cada tarea. Mínimo
contractable: 8 h/mes.

---

### Matriz resumen Familia G

| Servicio | Rango típico | Nota |
|---|---|---|
| G1 Discovery & scoping | $80–240 / $220–600 / $550–1450 / $1400–3000 | 50% acreditable al contratar |
| G2-a Auditoría perf WebGL | $120–330 / $300–900 / $900–2400 / $2300–5500 | reporte + sesión lectura |
| G2-b Consultoría por hora | banda N1–N4 según tema | mínimo 2 h/sesión |
| G2-c Mentoría (2 h) | $80–180/sesión | serie 4+ −10% |
| G3-a Retainer mantenimiento | $100–500/mes según bucket | anticipado |
| G3-b Retainer IA ops | $130–650/mes según bucket | consumo API aparte |
| G3-c Bloque flexible | mínimo 8 h/mes | −10% por tarea |
