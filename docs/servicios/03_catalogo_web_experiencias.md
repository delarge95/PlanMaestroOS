# Catálogo de servicios — Familia C (integración web, experiencias 3D, apps)

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Mismo contrato de lectura que [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md):
> horas por nivel `N1 a–b · N2 c–d · N3 e–f · N4 g–h`; presupuesto derivado de la fórmula del
> [`01_modelo_cobro.md`](01_modelo_cobro.md) §3 (N1 25–30 · N2 28–35 · N3 35–45 · N4 45–55 USD/h +
> redondeo min↓/max↑ a múltiplos de 10/50/100 USD según tramo).
> Los assets 3D NO están incluidos salvo mención expresa: si hay que producirlos, se cotizan por
> Familia B/F1 y se suman como línea separada del SOW.
> Superficie pública: toda entrega que viva en el sitio público se coordina con AG-PORT vía ticket
> (ficha §3.10); este catálogo cubre el trabajo técnico sobre entregables del cliente o rutas internas.

---

## C1 · Integración visor embebido low-code (Spline / model-viewer / Sketchfab)

**Qué es:** publicar un asset 3D dentro de un visor gestionado (Spline, `<model-viewer>`, Sketchfab u
equivalente): optimización y upload, embed responsive en la página del cliente, lazy-load, ajuste de
interacción permitida por el visor y QA multi-navegador.
**Drivers:** visor elegido (licencia/plan), nº de escenas, hotspots soportados por el visor,
personalización de UI posible.
**Confidence por defecto:** `explicit`.
**Límite honesto:** la interacción queda limitada a lo que el visor permite; si el brief pide más,
escalar a C2.

| Subtarea | Horas por nivel |
|---|---|
| Intake + QC del asset y del plan del visor | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–4 |
| Optimización/upload + setup del visor | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–12 |
| Embed responsive + lazy-load | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–5 |
| Tuning de interacción + QA browsers | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–6 |
| **Total horas** | **N1 2,5–5 · N2 5–10 · N3 10–18 · N4 18–27** |

**Presupuesto por nivel:** N1 **$60–150** · N2 **$140–350** · N3 **$350–850** · N4 **$800–1500**
Entrega típica: N1 1 día · N2 1–2 días · N3 3–4 días · N4 ~1 semana.
Modificadores de ficha: escena adicional del mismo visor **−40%** sobre subtotal; hotspot extra sujeto
al límite del visor (a cotización).

---

## C2 · Visor 3D custom (three.js / Babylon.js)

**Qué es:** visor a medida embebible en cualquier sitio: órbita/zoom/pan, hotspots con panel de
información, presets de cámara, gestor de carga con progreso, presupuesto de performance móvil-first,
eventos de analytics. Opcional: modo AR (USDZ/Quick Look), i18n.
**Drivers:** nº de hotspots/features, datos dinámicos (JSON/CMS) vs hardcode, AR, i18n, UI provista
por el cliente o incluida.
**Confidence por defecto:** `explicit`.

| Subtarea | Horas por nivel |
|---|---|
| Intake/spec técnica + criterios de aceptación | N1 1–2 · N2 2–3 · N3 3–5 · N4 5–8 |
| Setup proyecto + pipeline de carga (GLB + Draco/KTX2) | N1 2–4 · N2 4–8 · N3 8–14 · N4 14–24 |
| Interacción núcleo (orbit/hotspots/selección) | N1 3–6 · N2 6–12 · N3 12–24 · N4 24–45 |
| UI overlay (info, controles, responsive) | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Perf pass móvil + QA browsers | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–20 |
| Entrega/integración en el sitio del cliente | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–12 |
| **Total horas** | **N1 10–21 · N2 21–39 · N3 41–79 · N4 79–139** |

**Presupuesto por nivel:** N1 **$250–650** · N2 **$550–1400** · N3 **$1400–3600** · N4 **$3500–7700**
Entrega: N1 2–3 días · N2 ~1 semana · N3 2 semanas · N4 3–5 semanas.
Modificadores: modo AR (USDZ + Quick Look) **+15%**; i18n **+10%**; hotspot adicional **+2–4 h** c/u.

---

## C3 · Experiencia web 3D (scrollytelling / minijuego / catálogo interactivo)

**Qué es:** pieza web donde el 3D es protagonista: narrativa guiada por scroll, micro-mecánica jugable
o catálogo navegable. Incluye dirección técnica, escena(s), binding de scroll/eventos y layout con el
contenido del cliente. **Requiere fase discovery (G1)** — no admite urgencia crítica (doc 01 §4).
Estructura de precio: BASE + delta del MODO.

**Base común:**

| Subtarea (base) | Horas por nivel |
|---|---|
| Discovery/scoping (obligatorio) | N1 3–5 · N2 5–8 · N3 8–14 · N4 14–24 |
| Arquitectura + setup (build, loading, estados) | N1 3–6 · N2 6–10 · N3 10–18 · N4 18–32 |
| Escena 3D base + montaje de assets | N1 6–12 · N2 12–25 · N3 25–50 · N4 50–90 |
| Binding de interacción (scroll/touch/input) | N1 4–8 · N2 8–16 · N3 16–30 · N4 30–55 |
| Layout/UI + responsive | N1 3–6 · N2 6–12 · N3 12–22 · N4 22–40 |
| Perf budget + QA dispositivos | N1 2–5 · N2 5–10 · N3 10–18 · N4 18–30 |
| Deploy + handoff | N1 1–2 · N2 2–4 · N3 4–6 · N4 6–10 |
| **Total base horas** | **N1 22–44 · N2 44–85 · N3 85–158 · N4 158–281** |

**Presupuesto base por nivel:** N1 **$550–1350** · N2 **$1200–3000** · N3 **$2900–7200** · N4 **$7100–15500**

**Deltas por modo (se SUMAN a la base):**

| Delta modo | Horas por nivel |
|---|---|
| Scrollytelling (timeline por secciones + sync scroll) | N1 4–8 · N2 8–16 · N3 16–32 · N4 32–60 |
| Minijuego (gameplay loop, score, estados) | N1 8–16 · N2 16–35 · N3 35–70 · N4 70–130 |
| Catálogo interactivo (datos, filtros, fichas) | N1 6–12 · N2 12–24 · N3 24–48 · N4 48–90 |

Entrega típica (base+modo): N1 1–2 semanas · N2 2–4 semanas · N3 4–8 semanas · N4 8–16 semanas.
Modificadores: producción de assets RT **no incluida** (cotizar Familia B/F1); segundo idioma **+10%**;
contenido editable vía CMS **+15%**.

---

## C4 · Web App 3D (configurador de producto / herramienta técnica)

**Qué es:** aplicación web con estado real: configuradores (variantes, materiales, medidas),
herramientas técnicas con 3D, visualizadores con lógica de negocio. Incluye arquitectura, gestión de
estado, export de resultado (captura/link/PDF-resumen) y QA. **Requiere discovery (G1)**.
Integraciones API/e-commerce se cotizan como línea aparte.

| Subtarea | Horas por nivel |
|---|---|
| Discovery/spec funcional + flujo/wireframe | N1 4–8 · N2 8–16 · N3 16–30 · N4 30–60 |
| Arquitectura app (estado, routing, build) | N1 3–6 · N2 6–12 · N3 12–24 · N4 24–45 |
| Escena 3D configurable (variantes/materiales) | N1 8–16 · N2 16–35 · N3 35–70 · N4 70–130 |
| Panels de configuración + reglas de negocio | N1 6–14 · N2 14–30 · N3 30–60 · N4 60–110 |
| Export/share (captura, link, PDF resumen) | N1 3–6 · N2 6–14 · N3 14–28 · N4 28–50 |
| QA/E2E + perf + accesibilidad base | N1 3–6 · N2 6–14 · N3 14–28 · N4 28–55 |
| Deploy/docs/handoff | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| **Total horas (sin integraciones)** | **N1 29–56 · N2 66–129 · N3 141–256 · N4 306–480** |

**Presupuesto por nivel:** N1 **$700–1700** · N2 **$1800–4600** · N3 **$4900–11600** · N4 **$13700–26400**
Línea aparte — integración API/e-commerce: N2 **+$150–400** · N3 **+$400–1250** · N4 **+$1250–3300**
(N1 no contempla integraciones; si el brief las pide, es otro alcance).
Entrega: N1 2–3 semanas · N2 3–6 semanas · N3 6–12 semanas · N4 12–24 semanas.
Modificadores: assets RT no incluidos (Familia B/F1); auth multiusuario **a cotización**; hosting del
cliente desde el día 1 (passthrough doc 01 §3).

---

## C5 · Build Unity WebGL + bridge JS↔Unity

**Qué es:** llevar un proyecto Unity existente a WebGL productivo: auditoría de build, settings de
calidad/compresión (Brotli), loader optimizado, comunicación bidireccional JS↔Unity, embed responsive
con fallbacks y QA de dispositivos.
**Fuera de alcance:** desarrollar gameplay/mechanics nuevas dentro de Unity (se cotiza aparte).
**Drivers:** tamaño/complejidad del proyecto, volumen de datos que cruzan el puente, restricciones del
hosting destino.
**Confidence por defecto:** `inferred` hasta auditoría del proyecto.

| Subtarea | Horas por nivel |
|---|---|
| Auditoría del proyecto + settings de build | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–28 |
| Pipeline compresión + loading screen | N1 2–4 · N2 4–8 · N3 8–14 · N4 14–24 |
| Bridge JS↔Unity (API bidireccional) | N1 3–6 · N2 6–14 · N3 14–30 · N4 30–60 |
| Embed responsive + fallbacks | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–20 |
| QA dispositivos/perf | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–20 |
| **Total horas** | **N1 9–20 · N2 20–42 · N3 42–84 · N4 94–152** |

**Presupuesto por nivel:** N1 **$220–600** · N2 **$550–1500** · N3 **$1450–3800** · N4 **$4200–8400**
Entrega: N1 2–3 días · N2 ~1 semana · N3 2 semanas · N4 3–5 semanas.
Modificadores: streaming de Addressables **+10–20%**; proyecto sin control de fuentes/CI **+auditoría
previa G1**.

---

## C6 · Presentación web interactiva

**Qué es:** presentación/deck web a medida para pitch o reporte corporativo: navegación por slides,
gráficos animados, video embebido y bloque 3D opcional (visor simple C1/C2). Unidad base: hasta 15
slides con plantilla propia.
**Drivers:** nº de slides, densidad de elementos ricos, 3D sí/no, datos dinámicos vs estáticos.
**Confidence por defecto:** `explicit` (slides contables).

| Subtarea | Horas por nivel |
|---|---|
| Estructura narrativa + plantilla visual | N1 2–4 · N2 4–8 · N3 8–14 · N4 14–22 |
| Maquetación slides + navegación | N1 3–6 · N2 6–12 · N3 12–22 · N4 22–38 |
| Elementos ricos (3D/video/gráficos) | N1 2–5 · N2 5–12 · N3 12–26 · N4 26–50 |
| QA responsive + entrega | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–12 |
| **Total horas** | **N1 8–17 · N2 17–36 · N3 36–70 · N4 70–122** |

**Presupuesto por nivel:** N1 **$200–550** · N2 **$450–1300** · N3 **$1250–3200** · N4 **$3100–6800**
Entrega: N1 2–3 días · N2 ~1 semana · N3 2 semanas · N4 3–4 semanas.
Modificadores: bloque adicional +5 slides **+20–35%**; modo self-hosted del cliente incluido; datos en
vivo (API) **a cotización**.

---

### Matriz resumen Familia C

| Servicio | N1 | N2 | N3 | N4 | Discovery |
|---|---|---|---|---|---|
| C1 Visor low-code | $60–150 | $140–350 | $350–850 | $800–1500 | No |
| C2 Visor custom | $250–650 | $550–1400 | $1400–3600 | $3500–7700 | No |
| C3 Experiencia web 3D (base) | $550–1350 | $1200–3000 | $2900–7200 | $7100–15500 | **Sí (G1)** |
| C4 Web App 3D | $700–1700 | $1800–4600 | $4900–11600 | $13700–26400 | **Sí (G1)** |
| C5 Unity WebGL + bridge | $220–600 | $550–1500 | $1450–3800 | $4200–8400 | Auditoría |
| C6 Presentación web | $200–550 | $450–1300 | $1250–3200 | $3100–6800 | No |
