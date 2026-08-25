# AG-SERV · C2 — Assets 3D realtime para WebGL / videojuegos

> Owner: AG-SERV · v1 · 2026-08-25 · Tarifas y políticas: `00_METODOLOGIA.md`
> Clases dominantes: **RC-RTA** (25–35/h) para el pipeline de asset y **RC-WEB** (27–38/h) para interacción. Donde una tarea mezcla ambas, se declara la banda combinada.
> Premisa: los tiers S/M/L usan la escala de `00_METODOLOGIA.md` §3 (tris finales, piezas, materiales). Si la fuente es CAD pesado, evaluar primero C6-CAD-01 (la conversión CAD ya incluye dejarlo realtime-ready).

---

## RTA-01 · Modelo estático no interactuable

**Qué es:** asset optimizado que se muestra pasivo en web/juego (turntable automático o embed fijo), sin controles de usuario más allá del render.

**Entregables:** GLB/glTF validado (+FUZE/bin si aplica), texturas embebidas, ficha técnica (tris, draw calls estimados, peso).

### Subtareas × tier (horas, RC-RTA)

| Subtarea | S | M | L |
|---|---|---|---|
| Análisis de fuente + plan de optimización | 0.5–1 | 0.5–1.5 | 1–2 |
| Limpieza / retopología a presupuesto de tris | 1–2 | 2–4 | 3–6 |
| UVs | 0.5–1 | 1–2 | 2–4 |
| Bake + texturas PBR | 1–2 | 2–4 | 3–6 |
| LODs + compresión (Draco/meshopt) | 0.5–1 | 1–1.5 | 1–2 |
| Empaquetado GLB + validación en visor | 0.5–1 | 0.5–1 | 0.5–1 |

**Tiers:** S <10k tris y ≤2 materiales · M 10k–50k tris, 2–4 materiales · L 50k–150k tris, >4 materiales o variantes de color/config incluidas.

| Tier | Total horas | Precio | Plazo |
|---|---|---|---|
| S | 4–8 h | **USD 100–300** | 2–3 días hábiles |
| M | 7–14 h | **USD 200–500** | 3–5 días hábiles |
| L | 10.5–21 h | **USD 250–750** | 5–8 días hábiles |

---

## RTA-02 · Modelo estático interactuable

**Qué es:** como RTA-01 pero explorable: órbita/zoom, hotspots con información, panel de datos por pieza/zona.

**Entregables:** los de RTA-01 + bundle de interacción (JS o componente) + contenido de hotspots cableado con data del cliente.

### Subtareas adicionales sobre el pipeline RTA-01 (RC-WEB)

| Subtarea | S | M | L |
|---|---|---|---|
| Órbita/zoom/pan con límites + damping | 1–2 | 1–2 | 2–3 |
| Hotspots + panel de información | 2–4 | 3–5 | 4–6 |
| Wiring de contenido/etiquetas (data cliente) | 1–3 | 1.5–3 | 2–3 |
| QA de interacción en móvil/desktop | 0.5–1 | 0.5–1 | 1 |

| Paquete | Total horas | Precio | Plazo |
|---|---|---|---|
| S (asset S + interacción S) | 8.5–21 h | **USD 200–800** | 3–6 días hábiles |
| M | 13–25 h | **USD 350–900** | 5–8 días hábiles |
| L | 19.5–34 h | **USD 500–1.350** | 8–12 días hábiles |

*(Suma de bloques: asset core RC-RTA + bloque interacción RC-WEB; redondeo a USD 50.)*

---

## RTA-03 · Modelo animado no interactuable

**Qué es:** asset con animación en autoplay (loop de funcionamiento, ensamblaje, demo), sin control directo del usuario.

**Entregables:** GLB con clips embebidos + configuración de autoplay.

### Subtareas adicionales sobre RTA-01 (RC-RTA)

| Subtarea | S | M | L |
|---|---|---|---|
| Setup de animación mecánica (pivots, jerarquías) | 1–3 | 2–5 | 3–7 |
| Clips de animación (loop simple → secuencias) | 1–5 | 2–7 | 5–13 |
| Timeline autoplay + optimización de clips | 1–2 | 1–2 | 1–2 |

| Paquete | Total horas | Precio | Plazo |
|---|---|---|---|
| S | 7–18 h | **USD 200–650** | 3–5 días hábiles |
| M | 12–28 h | **USD 300–1.000** | 5–8 días hábiles |
| L | 19.5–43 h | **USD 500–1.500** | 8–12 días hábiles |

Rig orgánico/personaje → MOD-B (discovery obligatorio).

---

## RTA-04 · Modelo animado interactuable

**Qué es:** animación bajo control del usuario: play/pausa, selección de clips, triggers al hacer click en piezas, sliders de progreso.

**Entregables:** RTA-03 + módulo de control (UI + estado) integrado.

### Subtareas adicionales sobre RTA-03 (RC-WEB)

| Subtarea | S | M | L |
|---|---|---|---|
| UI de controles (play/pausa/velocidad/selector) | 2–4 | 2–5 | 3–6 |
| Estado + triggers por interacción (click pieza → clip, etc.) | 3–6 | 4–10 | 6–20 |
| QA de estados y combinaciones | 1–2 | 2–4 | 3–8 |

| Paquete | Total horas | Precio | Plazo |
|---|---|---|---|
| S | 13–36 h | **USD 350–1.400** | 5–9 días hábiles |
| M | 20–52 h | **USD 500–2.000** | 8–14 días hábiles |
| L | 31.5–83 h | **USD 800–3.150** | 2–4 semanas |

---

## RTA-05 · Shaders estilizados

**Qué es:** materiales custom (toon, holograma, disolución, fresnel, scanlines, outline) sobre assets existentes, con fallback móvil.

**Banda aplicable:** combinada RC-RTA/RC-WEB (**USD 25–40/h**) — mezcla technical art y código de render.

| Ítem | Horas | Precio |
|---|---|---|
| Shader S (fresnel/emissive/gradiente) | 2–4 h c/u | USD 50–160 c/u |
| Shader M (disolución, holograma, toon con rampas) | 4–8 h c/u | USD 100–320 c/u |
| Shader L (pipeline estilizado: outline pass + lighting custom + fallbacks) | 8–16 h | USD 200–640 |
| Integración + tuning de performance (por batch) | 2–6 h | USD 50–240 |

| Paquetes típicos | Precio | Plazo |
|---|---|---|
| 1 shader S sobre asset existente | **USD 100–400** | 1–2 días |
| Set de 2–3 shaders M | **USD 250–1.150** | 3–6 días |
| Look estilizado unificado (pipeline L sobre N materiales) | **USD 400–1.600** | 5–10 días |

---

## RTA-06 · Mecánicas específicas sobre asset realtime

**Premisa:** el asset ya es realtime-ready (RTA-01 hecho). Si no, se suma su tier primero.

**Banda:** combinada RC-WEB/RC-RTA (**USD 25–40/h**).

| Mecánica | Tier | Horas | Precio |
|---|---|---|---|
| Vista explosionada | S (≤10 piezas, slider global) | 3–7 h | USD 75–280 |
| Vista explosionada | M (11–40 piezas, etiquetas por pieza, animación) | 7–18 h | USD 175–720 |
| Vista explosionada | L (>40 piezas o multi-nivel jerárquico) | 18–35 h | USD 450–1.400 |
| Cutaway / sección (clipping con caps) | según complejidad de materiales | 4–12 h | USD 100–480 |
| Configurador de variantes | S (≤5 opciones, 1 eje) | 4–9 h | USD 100–360 |
| Configurador de variantes | M (6–15 opciones, 2 ejes) | 9–20 h | USD 225–800 |
| Configurador de variantes | L (multi-eje + compartir por URL/persistencia) | 20–40 h | USD 500–1.600 |
| Mediciones / cotas en escena | según cantidad de cotas | 5–14 h | USD 125–560 |

**Ejemplo ilustrativo:** vista explosionada M de un drone (hélices, brazos, batería, tornillería agrupada) con etiquetas por componente → dentro de USD 175–720. *(Placeholder visual hasta tener asset propio publicable.)*

---

## Fuentes y trazabilidad

- Tarifas: rate card v1 §2 (doc-03 §4.1 [lemon-core] para RC-RTA/RC-WEB).
- Horas: inferencia propia documentada sobre pipeline glTF/Blender/three.js; calibración contra tiempo real pendiente de primeros proyectos.
- Presupuestos de tris por plataforma: criterio operativo propio (mobile-first), declarado en metodología §3.
