# Catálogo 02 — Render offline, assets realtime y assets fuente

> v1.0 · 2026-08-25 · Owner: AG-SERV · Estado: interno (v1 rates pendientes de validación del usuario).
> Todos los presupuestos derivan de `01_modelo_cobro.md` §3 (`Σ horas × banda del nivel`, redondeo a
> múltiplos de 10/50/100). Horas en rango min–max por nivel. USD.

Convenciones de las tablas:
- Cada fila es una **subtarea facturable independiente**; en intake se marca su nivel y quedan solo esas columnas.
- "—" = nivel no aplicable a ese servicio.
- Los deltas de B se suman sobre la cadena base B cuando el servicio lo indica.
- `confidence` por defecto del servicio según §9 del modelo; el intake puede mejorarla.

---

## Familia A — Render offline (media production)

### A1 — Render 3D estático (por imagen final)

Imagen hero de producto/espacio/arte con calidad offline (path tracing). Precio **por imagen**, no por hora.

| Incluye | NO incluye |
|---|---|
| Look dev materiales, iluminación, composición, post básica, 2 rondas de feedback | Modelado desde cero (cotizar vía B/F1), simulaciones complejas (vía D2), animación (A2) |

Drivers de nivel: nº de productos/elementos en escena · entorno (fondo simple / HDRI / set construido) · cercanía de cámara (close-up hero exige más detalle) · materiales (plásticos vs. tela/líquidos/cristal) · dependencia de assets del cliente.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Intake, referencias y moodboard | 0,5–1 | 1–2 | 2–3 | 3–5 |
| 2 | Look dev materiales (por familia de materiales) | 1–2 | 2–4 | 4–8 | 8–14 |
| 3 | Iluminación y entorno | 1–2 | 2–4 | 4–7 | 6–12 |
| 4 | Setup escena, cámaras y composición | 0,5–1 | 1–2 | 2–4 | 3–6 |
| 5 | Render passes e iteración | 0,5–1,5 | 1–2,5 | 2–5 | 4–8 |
| 6 | Postproducción / compositing | 0,5–1 | 1–2 | 2–4 | 3–6 |
| 7 | QA y entrega (formatos, resolución) | 0,5 | 0,5–1 | 1–1,5 | 1–2 |

**Presupuesto por imagen:** N1 **USD 110–270** · N2 **USD 230–650** · N3 **USD 550–1.500** · N4 **USD 1.250–3.000**
Vista/variante adicional desde el mismo setup: −40 % (lo fija la propuesta). Lote: modificador batch del modelo §4.
Confidence por defecto: `explicit` si hay referencias cerradas y modelo provisto; `inferred` si hay modelado implícito.

---

### A2 — Render animación 3D (pieza audiovisual)

Spot/loop/film corto offline. Presupuesto base cubre **hasta 10 s finales**; cada bloque adicional de 10 s escala animación+render+comp.

| Incluye | NO incluye |
|---|---|
| Storyboard/animatic, look dev, iluminación, animación, passes, compositing, color, master, 2 rondas | Modelado desde cero (B/F1), audio original (solo sync básico), guion creativo externo |

Drivers: duración total · estilo (producto / arquitectura / FX pesados) · simulaciones (fluidos, tela, partículas) · resolución/frames · assets provistos o no.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Intake, storyboard y animatic | 2–3 | 3–5 | 5–8 | 8–14 |
| 2 | Look dev + iluminación de escena(s) | 3–5 | 5–9 | 9–16 | 14–24 |
| 3 | Layout de cámara + animación (primeros 10 s) | 3–6 | 6–12 | 10–20 | 16–32 |
| 4 | FX / simulaciones (si aplica) | — | — | 4–12 | 8–24 |
| 5 | Render passes (local/cloud, directo traspasado) | 2–4 | 4–8 | 8–16 | 12–28 |
| 6 | Compositing, edición y color | 2–4 | 4–7 | 7–14 | 12–22 |
| 7 | Sync de audio básico (si entrega con audio) | — | 1–2 | 2–4 | 3–6 |
| 8 | QA y masters de entrega | 0,5–1 | 1–2 | 2–3 | 3–4 |

**Presupuesto pieza base (≤10 s):** N1 **USD 310–700** · N2 **USD 650–1.600** · N3 **USD 1.600–4.200** · N4 **USD 3.400–8.500**
**Bloque adicional de 10 s:** N1 +30–90 · N2 +80–230 · N3 +190–500 · N4 +380–1.000
Render farm/GPU cloud = costo directo traspasado (§3 modelo). Confidence: `inferred` hasta tener animatic aprobado.

---

## Familia B — Assets realtime para WebGL/videojuegos

Cadena base común a todos los assets RT (B1–B6). El servicio concreto = cadena base + deltas marcados.

### Cadena base B — asset realtime optimizado

Drivers de nivel: presupuesto poligonal objetivo · plataforma(s) target (desktop web / mobile web / consola) · cercanía de cámara · estado del source (CAD limpio / escaneo sucio / ZBrush denso) · peso máximo de entrega.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Análisis del source + presupuesto poly/texturas | 0,5–1 | 1–2 | 2–3 | 3–5 |
| 2 | Retopología + UVs | 1–3 | 3–6 | 6–12 | 10–20 |
| 3 | Baking de maps (normal/AO/curvature) | 1–2 | 2–4 | 4–8 | 6–14 |
| 4 | Texturizado optimizado (PBR/atlas) | 1–3 | 3–6 | 6–12 | 10–18 |
| 5 | LODs + compresión (Draco/KTX2/meshopt) | 1–2 | 2–3 | 3–6 | 5–9 |
| 6 | Integración motor/visor + QA de performance | 1–2 | 2–4 | 4–8 | 6–12 |
| 7 | Entrega + documentación técnica | 0,5–1 | 0,5–1 | 1–2 | 1,5–3 |

**Presupuesto cadena base:** N1 **USD 150–420** · N2 **USD 370–950** · N3 **USD 900–2.300** · N4 **USD 1.850–4.500**

### Deltas por tipo de asset (se suman a la cadena base)

| Delta | Subtarea | N1 | N2 | N3 | N4 | Presupuesto delta |
|---|---|---|---|---|---|---|
| **B2** interactuable estático | Hotspots/puntos de interés + configuración visual | 2–4 | 3–5 | 4–7 | 5–9 | N1 50–120 · N2 80–180 · N3 140–320 · N4 220–500 |
| **B3a** animado: rig | Rig básico + skinning (personaje/mecanismo) | 2–4 | 4–8 | 8–14 | 12–22 | N1 50–120 · N2 110–280 · N3 280–650 · N4 500–1.250 |
| **B3b** animado: loops | Animaciones loop (idle/rotación/uso) | 2–4 | 4–8 | 6–12 | 8–16 | N1 50–120 · N2 110–280 · N3 210–550 · N4 360–900 |
| **B4** animado interactuable | Controlador de estados/transiciones disparadas por UI/eventos | 3–6 | 6–10 | 8–16 | 12–24 | N1 70–180 · N2 160–350 · N3 280–750 · N4 500–1.350 |
| **B5** shaders estilizados | Autoría de shader custom (toon/hatching/fresnel/displacement) + iteración de look | 4–8 | 8–16 | 14–26 | 22–40 | N1 100–240 · N2 220–600 · N3 490–1.200 · N4 950–2.200 |
| **B6** mecánicas específicas | Vista explosionada / cutaway / cotas-medidas / secuencia armado | 3–6 | 6–12 | 10–20 | 16–30 | N1 70–180 · N2 160–420 · N3 350–900 · N4 700–1.650 |

Composición típica (ejemplo): **asset interactuable animado con vista explosionada** (B+B2+B3a+B3b+B4+B6) en N3 =
base 900–2.300 + 140–320 + 280–650 + 210–550 + 280–750 + 350–900 ≈ **USD 2.160–5.420**.

### B7 — Auditoría y optimización de asset existente

Para assets que ya tiene el cliente y no cumplen presupuesto de peso/perf. Se entrega informe antes de tocar nada.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Auditoría (poly, draw calls, texturas, jerarquía) + informe | 1–2 | 2–3 | 3–5 | 4–7 |
| 2 | Fixes aplicados según hallazgos (decimación, atlas, re-bake) | 1–3 | 3–6 | 6–10 | 8–16 |

**Presupuesto:** auditoría N1 20–60 · N2 50–110 · N3 100–230 · N4 180–390 · fixes N1 20–90 · N2 80–210 · N3 210–450 · N4 360–900.
La auditoría se puede contratar sola (confidence `explicit`; es discovery barato).

---

## F1 — Conversión CAD → realtime ready (WebGL/motor)

Conversión de ensambles CAD (STEP/IGES/SolidWorks/Fusion) a asset tiempo real navegable. Es la puerta de entrada típica de catálogos industriales y gemelos visuales.

| Incluye | NO incluye |
|---|---|
| Auditoría CAD, limpieza, decimación, jerarquía, baking selectivo, materiales desde spec, LODs, validación en motor target | Modelado de piezas faltantes (se cotiza aparte vía B), ingeniería inversa dimensional, dibujos técnicos |

Drivers de nivel (los medibles mandan): **nº de piezas relevantes** · calidad geométrica del export (b-rep limpio vs malla rota) · tamaño final en pantalla (ambient vs close-up) · motor target (GLB web / Unity / Unreal) · presupuesto de peso.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Auditoría CAD + import/limpieza de geometría | 1–2 | 2–4 | 4–8 | 6–14 |
| 2 | Decimación/refactor de geometría pesada | 1–3 | 3–7 | 7–14 | 12–24 |
| 3 | Jerarquía, pivotes y agrupación por material/parte | 1–2 | 2–5 | 5–10 | 8–18 |
| 4 | Retopo/baking selectivo (piezas visibles) | 1–3 | 3–7 | 7–14 | 12–22 |
| 5 | Texturizado/material mapping desde especificación | 1–2 | 2–5 | 5–9 | 8–15 |
| 6 | LODs + compresión + presupuesto de peso | 1–2 | 2–3 | 3–6 | 5–9 |
| 7 | Validación en motor target + QA | 1–2 | 2–3 | 3–6 | 5–9 |

**Presupuesto por asset:** N1 **USD 170–480** · N2 **USD 440–1.200** · N3 **USD 1.150–3.100** · N4 **USD 2.500–6.200**
Guía de niveles por nº de piezas: <10 piezas y export limpio → N1–N2 · 10–50 piezas → N2–N3 · >50 piezas o geometría dañada → N3–N4.
Lote de CADs del mismo producto: batch −15/−25 %. Ejemplo trabajado completo (drone) → `05_estimacion_ejemplos.md`.

---

## F2 — Generación de texturas y mapas

Sets de materiales completos (albedo/normal/roughness/metallic/AO) procedurales o AI-assisted (si NoAI no aplica).

Drivers: resolución (1k/2k/4k) · tiling vs único · nº de variantes de color · estilo (procedural limpio / desgaste autoral) · restricción NoAI.

| # | Subtarea (por set de 1 material) | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Brief, referencias y escala real | 0,5–1 | 0,5–1 | 1–2 | 1,5–3 |
| 2 | Autoría procedural / edición | 1–2 | 2–4 | 4–8 | 6–12 |
| 3 | Tiling perfecto + variantes de color | 0,5–1 | 1–2 | 2–4 | 3–6 |
| 4 | QA en contexto (aplicada a mesh de prueba) | 0,5–1 | 1–1,5 | 1,5–3 | 2–4 |

**Presupuesto por material:** N1 **USD 60–150** · N2 **USD 120–300** · N3 **USD 290–800** · N4 **USD 550–1.400**
Pack de materiales (5+) aplica batch −15/−25 %. NoAI prohibe la ruta AI-assisted y puede subir N (pipeline manual completo).
