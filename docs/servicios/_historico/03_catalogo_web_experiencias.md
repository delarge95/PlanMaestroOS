# Catálogo de servicios — Familia C (integración web 3D y experiencias)

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Convenciones de lectura y fórmula: ver [`01_modelo_cobro.md`](01_modelo_cobro.md).
> Los assets 3D que estas integraciones consumen se cotizan con la Familia B
> ([`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md)) o los provee el cliente.

---

### C1 · Visor 3D embebido ligero (Spline / Sketchfab / model-viewer tuneado)

**Qué es:** integrar y pulir un visor de plataforma existente dentro del sitio del cliente (sin motor propio).
**Drivers:** plataforma elegida, adaptación del asset a specs, nivel de customización de interacción.
**Confidence:** `explicit`.

| Subtarea | Horas por nivel |
|---|---|
| Selección plataforma + setup cuenta (plan lo paga el cliente) | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–5 |
| Adaptación asset a specs de plataforma | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| Embed responsive + lazy load | N1 1–2 · N2 2–3 · N3 3–5 · N4 5–8 |
| Config interacción (autorotate, hotspots nativos, AR) | N1 0,5–1 · N2 1–2 · N3 2–5 · N4 5–10 |
| QA cross-browser + entrega | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–6 |
| **Total horas** | **N1 3,5–7 · N2 7–13 · N3 13–24 · N4 24–44** |

**Presupuesto:** N1 **$80–210** · N2 **$190–460** · N3 **$450–1100** · N4 **$1050–2500**
Entrega: N1 1 día · N2 2 días · N3 ~1 semana · N4 1–2 semanas.

---

### C2 · Visor custom three.js / Babylon.js

**Qué es:** visor a medida sobre engine JS: órbita con límites, hotspots, resaltado, panel info, loading UX, perf móvil.
**Drivers:** nº interacciones, fuentes de datos (CMS/API), target móvil, integración al stack del cliente.
**Confidence:** `explicit` tras definir lista de interacciones; si hay API externa → `inferred`.

| Subtarea | Horas por nivel |
|---|---|
| Scaffold proyecto + tooling (Vite bundler, loaders) | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Carga de asset + pipeline (GLB/Draco/KTX2) | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–25 |
| Controles cámara/orbit + límites | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–16 |
| Interacciones (hotspots, highlight, secciones) | N1 1–3 · N2 3–8 · N3 8–20 · N4 20–45 |
| UI overlay (labels, panel info, loading UX) | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–25 |
| Performance móvil + QA | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–25 |
| Deploy/integración al sitio del cliente | N1 0,5–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| **Total horas** | **N1 7,5–20 · N2 20–40 · N3 42–88 · N4 88–181** |

**Presupuesto:** N1 **$180–600** · N2 **$550–1400** · N3 **$1450–4000** · N4 **$3900–10000**
Entrega: N1 2–4 días · N2 ~1 semana · N3 2–3 semanas · N4 4–8 semanas.

---

### C3 · Web App 3D

**Qué es:** aplicación web completa con escena 3D como núcleo (SPA), datos desde CMS/API, múltiples vistas. Base sin auth/admin (opcional marcado).
**Drivers:** nº vistas/módulos, complejidad de datos, auth, plataformas objetivo.
**Confidence:** `qualitative` hasta discovery; todo proyecto C3 incluye fase discovery obligatoria en el SOW.

| Subtarea | Horas por nivel |
|---|---|
| Discovery/spec técnico | N1 3–6 · N2 6–12 · N3 12–24 · N4 24–40 |
| Setup proyecto + CI + deploy pipeline | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Escena 3D core (extensión de C2) | N1 8–15 · N2 15–35 · N3 35–80 · N4 80–160 |
| Capa datos (CMS/API, estado) | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| UI/UX páginas + responsive | N1 4–10 · N2 10–25 · N3 25–50 · N4 50–100 |
| Auth/admin básico (opcional) | N1 — · N2 0–10 · N3 10–25 · N4 25–50 |
| Testing + QA + documentación | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| **Total horas** | **N1 21–45 · N2 45–114 · N3 114–245 · N4 245–480** |

**Presupuesto:** N1 **$500–1350** · N2 **$1250–4000** · N3 **$3900–11100** · N4 **$11000–26400**
Entrega: N1 1–2 semanas · N2 3–5 semanas · N3 6–10 semanas · N4 10–20 semanas.
Proyectos N3/N4 SIEMPRE por hitos (§8 Pagos).

---

### C4 · Scrollytelling 3D

**Qué es:** experiencia narrativa donde el scroll controla la escena (secciones sincronizadas, timeline bound al progreso).
**Drivers:** nº secciones, complejidad de coreografía, assets provistos vs incluidos, fallback móvil.
**Confidence:** `explicit` con storyboard cerrado.

| Subtarea | Horas por nivel |
|---|---|
| Guion visual + storyboard de scroll | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Escena(s) + timeline scroll-binding | N1 4–10 · N2 10–25 · N3 25–60 · N4 60–120 |
| Copy/layout secciones + tipografía | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Perf móvil + fallback estático | N1 1–3 · N2 3–8 · N3 8–18 · N4 18–35 |
| QA dispositivos + deploy | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| **Total horas** | **N1 10–23 · N2 23–53 · N3 53–118 · N4 118–230** |

**Presupuesto:** N1 **$250–700** · N2 **$600–1900** · N3 **$1850–5400** · N4 **$5300–12700**
Assets 3D cotizados aparte (Familia B). Entrega: N1 3–5 días · N2 1–2 semanas · N3 3–5 semanas · N4 6–10 semanas.

---

### C5 · Catálogo interactivo / Configurador de producto

**Qué es:** visualizador configurable (materiales/partes/accesorios) con precio dinámico y share de configuración.
**Drivers:** nº variantes reales, integración e-commerce, persistencia/share, rendimiento con muchos swaps.
**Confidence:** `explicit` con matriz de variantes cerrada.

| Subtarea | Horas por nivel |
|---|---|
| Modelo de datos producto + variantes | N1 2–4 · N2 4–8 · N3 8–18 · N4 18–40 |
| Escena de configuración (swap materiales/partes) | N1 3–8 · N2 8–20 · N3 20–45 · N4 45–90 |
| UI selector + precio dinámico | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| Persistencia/share config (URL/hook carrito) | N1 1–3 · N2 3–8 · N3 8–18 · N4 18–40 |
| Perf + QA + deploy | N1 1–3 · N2 3–6 · N3 6–14 · N4 14–30 |
| **Total horas** | **N1 9–23 · N2 23–54 · N3 54–120 · N4 120–250** |

**Presupuesto:** N1 **$220–700** · N2 **$600–1900** · N3 **$1850–5400** · N4 **$5400–13800**
Modificador: integración e-commerce real (Shopify/Woo/custom) **+15–30 h** según plataforma, cotizado aparte tras discovery.
Entrega: N1 3–4 días · N2 1–2 semanas · N3 3–5 semanas · N4 6–10 semanas.

---

### C6 · Minijuego WebGL

**Qué es:** juego web simple de una mecánica (branding engagement, lead capture). Base: 1 mecánica, 1 nivel/nodo, branding aplicado. Assets artísticos pesados cotizados aparte.
**Drivers:** mecánica (runner/puzzle/quiz 3D/shooter on-rails), progresión, leaderboard/backend, plataformas.
**Confidence:** `inferred`; game design cierra el alcance antes de comprometer N3/N4.

| Subtarea | Horas por nivel |
|---|---|
| Game design doc corto | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Core loop + input | N1 6–12 · N2 12–30 · N3 30–70 · N4 70–150 |
| Integración arte/escena (assets aparte o provistos) | N1 2–4 · N2 4–10 · N3 10–25 · N4 25–50 |
| UI/HUD + score + estados | N1 2–4 · N2 4–10 · N3 10–20 · N4 20–45 |
| Audio hookup | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–12 |
| Build optimizada + QA + deploy | N1 2–4 · N2 4–10 · N3 10–20 · N4 20–40 |
| **Total horas** | **N1 14,5–29 · N2 29–71 · N3 71–157 · N4 157–327** |

**Presupuesto:** N1 **$360–900** · N2 **$800–2500** · N3 **$2400–7100** · N4 **$7000–18000**

---

### C7 · Build & optimización Unity WebGL

**Qué es:** llevar un proyecto Unity existente a web usable: loading, memoria, compresión, gates móviles.
**Drivers:** peso actual del build, dependencias pesadas, requisitos móviles.
**Confidence:** `inferred` hasta auditoría inicial (subtarea 1).

| Subtarea | Horas por nivel |
|---|---|
| Auditoría build settings/targets | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| Compresión assets/addressables/loading screen | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| Memoria/heap tuning + Brotli | N1 1–3 · N2 3–6 · N3 6–14 · N4 14–30 |
| Fallback/perf gates móvil | N1 0–2 · N2 2–6 · N3 6–15 · N4 15–35 |
| QA browsers + deploy CDN | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| **Total horas** | **N1 5–14 · N2 14–32 · N3 32–70 · N4 70–145** |

**Presupuesto:** N1 **$120–420** · N2 **$390–1150** · N3 **$1100–3200** · N4 **$3100–8000**

---

### C8 · Presentaciones web interactivas

**Qué es:** pitch deck/report web (slides navegables, animaciones, opcional data-driven). Base: 10 slides.
**Drivers:** nº slides, data en vivo, branding system existente.
**Confidence:** `explicit`.

| Subtarea | Horas por nivel |
|---|---|
| Sistema de slides + plantilla | N1 2–4 · N2 4–8 · N3 8–15 · N4 15–30 |
| Implementación slides (base 10) | N1 2–4 · N2 4–10 · N3 10–20 · N4 20–40 |
| Animaciones/transiciones + navegación | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–25 |
| Data binding (si aplica) | N1 — · N2 0–6 · N3 6–15 · N4 15–30 |
| Deploy + analytics opcional | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–8 |
| **Total horas** | **N1 5,5–12 · N2 12–32 · N3 32–66 · N4 66–133** |

**Presupuesto:** N1 **$130–360** · N2 **$330–1150** · N3 **$1100–3000** · N4 **$2900–7400**
Bloque adicional de 5 slides: +20–30%.

---

### C9 · AR web ligero (model-viewer / WebXR básico)

**Qué es:** ver el producto a escala real en el espacio del usuario (AR Quick Look iOS / Scene Viewer Android) con flujo QR.
**Drivers:** preparación AR del asset, flujos custom, testing en dispositivos físicos.
**Confidence:** `explicit` (checklist de compatibilidad conocida).

| Subtarea | Horas por nivel |
|---|---|
| Asset AR-compliant (usdz/glb, escala real) | N1 1–3 · N2 3–8 · N3 8–16 · N4 16–35 |
| Embed AR Quick Look / Scene Viewer | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| UI de lanzamiento + flujo QR | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| QA en dispositivos reales | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–12 |
| **Total horas** | **N1 3,5–8 · N2 8–19 · N3 19–38 · N4 38–77** |

**Presupuesto:** N1 **$80–240** · N2 **$220–700** · N3 **$650–1750** · N4 **$1700–4300**
Nota: AR con tracking avanzado (image tracking, occlusion, WebXR profundo) NO está en esta ficha — se estima como proyecto a medida tras discovery.
