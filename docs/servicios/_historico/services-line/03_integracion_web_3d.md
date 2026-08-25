> {0} Archivado en la consolidaci{1}n (ciclo 5): l{2}nea de cat{3}logo propia de agent/services. Contenido cubierto por los cat{3}logos can{1}nicos 01{4}07 de esta carpeta.

# AG-SERV · C3 — Integración web 3D y experiencias interactivas

> Owner: AG-SERV · v1 · 2026-08-25 · Tarifas y políticas: `00_METODOLOGIA.md`
> Clase dominante: **RC-WEB** (27–38/h); discovery/arquitectura usa **RC-CON** (40–55/h).
> Premisa transversal: los assets 3D se cotizan aparte vía C2 (RTA-xx) salvo que el paquete lo declare. Todo lo web incluye QA desktop/mobile y presupuesto de performance móvil como criterio de aceptación.

---

## WEB-01 · Integración three.js / babylon.js a medida

**Qué es:** montar escena(s) 3D realtime directamente en una web existente o nueva, con código propio (sin plataforma intermedia).

**Entregables:** módulo JS integrado al sitio, loader con progreso, documentación de uso breve.

### Subtareas × tier (horas, RC-WEB)

| Subtarea | S | M | L |
|---|---|---|---|
| Setup de escena (renderer, loader GLB, controles, resize) | 3–4 | 4–7 | 6–12 |
| Loading UX + fallbacks | 1–2 | 1.5–3 | 2–5 |
| Interacción (UI DOM ↔ escena, switcher, scroll básico) | 1–3 | 4–10 | 8–18 |
| Transiciones de cámara / multi-objeto | — | 2–6 | 6–14 |
| Presupuesto de performance móvil (pixel ratio, pausa en visibility) | 1–2 | 1.5–3 | 2–4 |
| QA navegadores/dispositivos | 1–2 | 1.5–3 | 2–4 |

| Tier | Total horas | Precio | Plazo |
|---|---|---|---|
| S (embed simple, 1 escena, órbita) | 6–13 h | **USD 150–500** | 2–4 días hábiles |
| M (+ UI sincronizada, switcher, scroll) | 12–28 h | **USD 300–1.050** | 5–9 días hábiles |
| L (multi-objeto, cámara dirigida, postpro ligero) | 25–55 h | **USD 700–2.100** | 2–3 semanas |
| XL | discovery fijo 4–8 h (RC-CON: USD 160–440) + cotización por hitos | | |

---

## WEB-02 · Integración vía visor embebido (Spline / Sketchfab / `<model-viewer>`)

**Qué es:** usar una plataforma de visualización existente en lugar de código a medida: más barato y rápido, menos control.

**Entregables:** asset adaptado al formato de la plataforma + embed responsive configurado.

| Tier | Alcance | Horas | Precio | Plazo |
|---|---|---|---|---|
| S | Adaptar asset a la plataforma + embed responsive | 2–5 h | **USD 50–200** | 1–2 días |
| M | Skin/loading custom, parámetros por API, eventos de analytics | 5–12 h | **USD 150–450** | 2–4 días |
| L | Multi-escena con switcher + contenido vía JSON editable | 12–24 h | **USD 300–900** | 4–7 días |

Notas: suscripciones/licencias de la plataforma son del cliente (exclusiones §8 de metodología). La elección plataforma-vs-custom se decide en brief: si el caso necesita mecánicas custom, WEB-02 no aplica (subir a WEB-01).

---

## WEB-03 · Unity WebGL: build, optimización y embedding

**Qué es:** tomar un proyecto Unity (propio o del cliente) y dejarlo corriendo en web con buen loading y presupuesto de memoria móvil.

**Entregables:** build WebGL comprimida (Brotli/gzip), template de loading, embed responsive, guía de despliegue.

### Subtareas × tier (horas, RC-WEB)

| Subtarea | S | M | L |
|---|---|---|---|
| Configuración de build + compresión + template de loading | 4–6 | 4–7 | 6–10 |
| Embed responsive + integración al sitio | 2–4 | 3–6 | 4–8 |
| Puente JS ↔ Unity (eventos/datos bidireccionales) | — | 4–8 | 8–14 |
| Presupuesto de memoria/perf móvil + advertencias de compatibilidad | 2–4 | 3–5 | 4–7 |
| QA (navegadores, iOS Safari incluido) | 2–4 | 3–6 | 4–8 |

| Tier | Total horas | Precio | Plazo |
|---|---|---|---|
| S (build + embed) | 8–20 h | **USD 200–750** | 3–6 días hábiles |
| M (+ puente bidireccional) | 14–32 h | **USD 400–1.200** | 5–10 días hábiles |
| L (experiencia completa multi-escena, streaming de assets) | 30–70 h | **USD 800–2.650** | 2–4 semanas |

---

## WEB-04 · Web app 3D

**Qué es:** aplicación web completa cuyo núcleo es 3D interactivo: estado, flujos de usuario, persistencia, panel de gestión ligero.

**Discovery SIEMPRE previo y tarifado:** 8–16 h RC-CON (**USD 320–880**) → entrega alcance, hitos y cotización cerrada por hito. Los rangos siguientes orientan expectativas pre-discovery.

| Tier | Alcance | Horas dev | Rango orientativo | Plazo |
|---|---|---|---|---|
| S | Herramienta de un solo propósito, 1 vista, estado local | 40–80 h | **USD 1.100–3.050** | 3–5 semanas |
| M | Multi-vista, persistencia, admin lite | 80–160 h | **USD 2.150–6.100** | 5–10 semanas |
| L/XL | Multi-rol, datos externos, integraciones | por hitos | post-discovery | por hitos |

---

## WEB-05 · Scrollytelling con 3D

**Qué es:** narrativa controlada por scroll donde la escena 3D evoluciona (cámara, estado, secciones DOM sincronizadas).

**Entregables:** página/sección implementada, timeline de scroll calibrada, fallback estático para móviles de gama baja.

### Subtareas × tier (horas, RC-WEB)

| Subtarea | S | M | L |
|---|---|---|---|
| Storyboard técnico + wireframe de scroll | 2–3 | 3–5 | 4–8 |
| Timeline scroll-driven (cámara/estado/escena) | 5–8 | 8–15 | 15–30 |
| Sincronización de copy/secciones DOM (textos del cliente) | 2–4 | 3–5 | 4–8 |
| Perf móvil + fallbacks estáticos | 1–3 | 3–6 | 5–10 |
| QA dispositivos | 1–2 | 2–4 | 3–6 |

| Tier | Total horas | Precio | Plazo |
|---|---|---|---|
| S (hero 3D scrolleable en página existente) | 10–24 h | **USD 300–900** | 4–7 días hábiles |
| M (página completa, 3–5 secciones coordinadas) | 25–60 h | **USD 700–2.300** | 2–3 semanas |
| L (experiencia narrativa completa) | 60–120 h | **USD 1.600–4.550** | 4–7 semanas |

L asume assets aportados o cotizados aparte (MOD-A/RTA-xx); con assets desde cero se suma su módulo al paquete.

---

## WEB-06 · Minijuego web

**Qué es:** juego jugable en navegador (three.js o Unity WebGL según mecánica), con score, estados y controles táctiles.

| Tier | Alcance | Horas | Precio | Plazo |
|---|---|---|---|---|
| S | Mecánica única (tap/drag/atrapar), 1 nivel, sesión corta | 25–55 h | **USD 700–2.100** | 3–4 semanas |
| M | Progresión simple (3–5 niveles), persistencia de score, game-feel | 55–110 h | **USD 1.500–4.200** | 4–8 semanas |
| L | Multi-sistema (tienda, logros) | discovery + hitos | post-discovery | por hitos |

Incluye: mini-GDD documentado, controles táctiles, pantalla inicial/fin, hook de analítica opcional. Audio: archivos del cliente (exclusiones §8). Si el motor elegido es Unity WebGL, sumar base WEB-03 S.

---

## WEB-07 · Catálogo interactivo 3D

**Qué es:** catálogo de productos navegable con visor 3D compartido, filtros y fichas; datos manejables por JSON/CMS-lite sin depender del desarrollador.

| Tier | Alcance | Horas dev | Rango | Plazo |
|---|---|---|---|---|
| S | ≤5 productos, plantilla única de ficha | 18–42 h | **USD 500–1.600** | 2–3 semanas |
| M | 6–20 productos, variantes por SKU, filtros completos | 40–85 h | **USD 1.100–3.250** | 3–5 semanas |
| L | >20 productos o integración e-commerce | 85–160 h | **USD 2.300–6.100** | 6–10 semanas |

Los assets 3D de cada producto se cotizan aparte (C2 RTA-01/02 por unidad, con descuento bundle metodología §5).

---

## WEB-08 · Presentación web interactiva

**Qué es:** presentación navegable (alternativa viva a PPT/PDF) con 3D embebido, media y navegación no lineal.

| Tier | Alcance | Horas | Precio | Plazo |
|---|---|---|---|---|
| S | ≤10 slides con plantilla, 3D embebido simple | 8–18 h | **USD 200–700** | 3–5 días hábiles |
| M | 11–25 slides, navegación no lineal, media variada | 18–35 h | **USD 500–1.350** | 1–2 semanas |
| L | Presentación-app (datos vivos, filtros en tiempo real) | 35–60 h | **USD 950–2.300** | 2–3 semanas |

---

## Fuentes y trazabilidad

- Tarifas: rate card v1 §2 (RC-WEB anclada a doc-03 §4.1 [lemon-core] y §4.3; RC-CON a doc-03 §4.2 [zip-ta]).
- Horas: inferencia propia documentada sobre stacks three.js/babylon.js/Unity WebGL (el perfil TwinSight documenta capacidad de ejecución); calibración pendiente contra proyectos reales.
