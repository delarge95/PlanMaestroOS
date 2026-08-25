# Catálogo de servicios — Familia 3D (render offline, assets tiempo real, CAD, texturas)

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Cómo leer las tablas: cada subtarea muestra el rango de horas **por nivel** como `N1 a–b · N2 c–d · N3 e–f · N4 g–h`.
> El presupuesto total por nivel deriva de la fórmula del [`01_modelo_cobro.md`](01_modelo_cobro.md) §3
> (horas × banda del nivel: N1 25–30 · N2 28–35 · N3 35–45 · N4 45–55 USD/h, con su regla de redondeo).
> Salvo indicación contrario, el precio asume **modo creación desde referencia**; si el cliente entrega el asset
> base ya modelado, aplicar modificador de ficha (típicamente −40–60% sobre las subtareas de modelado).

---

## Familia A — Render offline

### A1 · Render 3D estático

**Qué es:** imagen fija de alta calidad (producto, arquitectura, marketing, key visual) desde modelo propio o provisto.
**Drivers:** complejidad del asset, nº de vistas/variantes, resolución final, tipo de materiales (PBR estándar vs complejos: SSS, telas, líquidos), retoque post.
**Confidence por defecto:** `explicit` (vistas/resolución medibles) salvo materiales especiales → `inferred`.

| Subtarea | Horas por nivel |
|---|---|
| Intake/brief + referencias | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–5 |
| Setup escena (cámara, luz, HDRI, composición) | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–16 |
| Materiales/texturizado | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–24 |
| Render + iteraciones (2 rondas incl.) | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–12 |
| Post-producción (color, retoque, formatos) | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–8 |
| **Total horas** | **N1 4–9 · N2 9–18 · N3 18–35 · N4 35–65** |

**Presupuesto por nivel:** N1 **$100–270** · N2 **$250–650** · N3 **$600–1600** · N4 **$1550–3600**
Tiempo de entrega típico: N1 1–2 días · N2 2–4 días · N3 ~1 semana · N4 1–2 semanas.
Modificadores de ficha: pack +3 vistas adicionales mismo setup **+30%**; resolución 4K+ print +10%; fondo transparente incluido.

---

### A2 · Render animación 3D

**Qué es:** pieza audiovisual renderizada offline (loop de producto, spot, cinemática). Unidad base de la tabla: **clip de ~10 s, 1080p, 30 fps**.
**Drivers:** duración total, sims/FX presentes, personajes/rigging, cámaras complejas, resolución/fps, audio.
**Confidence por defecto:** `explicit` (duración medible); sims abiertas → `inferred`.

| Subtarea | Horas por nivel |
|---|---|
| Brief/storyboard/animatic | N1 1–2 · N2 3–5 · N3 5–10 · N4 10–20 |
| Layout escena + cámaras | N1 1–2 · N2 2–5 · N3 5–10 · N4 10–20 |
| Animación (keyframe/procedural) | N1 2–4 · N2 4–10 · N3 10–25 · N4 25–60 |
| Materiales/iluminación | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–24 |
| FX/simulaciones (opcional*) | N1 — · N2 0–6 · N3 6–20 · N4 20–50 |
| Render + QC técnico | N1 1–2 · N2 2–5 · N3 5–12 · N4 12–30 |
| Edición/post/entrega | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–16 |
| **Total horas (con FX)** | **N1 7–15 · N2 18–41 · N3 41–97 · N4 107–220** |

\* N1 no incluye simulaciones; N2–N4 las incluyen cuando el brief las pide.

**Presupuesto por nivel:** N1 **$170–450** · N2 **$500–1450** · N3 **$1400–4400** · N4 **$4800–12100**
Variantes sin FX: N3 **$1200–3500** · N4 **$3900–9400**
Entrega típica: N1 2–4 días · N2 ~1 semana · N3 2–3 semanas · N4 4–8 semanas.
Modificadores de ficha: bloque adicional de +10 s **+40–60%** del subtotal (economía de escena ya montada); versión vertical 9:16 +10%.

---

## Familia B — Assets 3D tiempo real (WebGL/videojuegos)

### Pipeline común (aplica a B1–B4)

Todos los assets RT comparten este núcleo; las variantes suman sus deltas sobre el total.

| Subtarea (núcleo) | Horas por nivel |
|---|---|
| Intake/QC de referencias y specs técnicas | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–5 |
| Blockout/modelado hi→low (hard-surface u orgánico) | N1 2–4 · N2 4–10 · N3 10–25 · N4 25–80 |
| UV unwrap | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–16 |
| Baking de mapas (AO/normal/etc.) | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–12 |
| Texturizado PBR | N1 1–3 · N2 3–6 · N3 6–14 · N4 14–30 |
| Optimización (LODs, draw calls, Draco/meshopt) | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–12 |
| QA en motor target + export final | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–8 |
| **Total núcleo** | **N1 6–13 · N2 14–30 · N3 34–68 · N4 81–173** |

Deltas por variante (se SUMAN al núcleo):

| Delta | Horas por nivel |
|---|---|
| Interactividad básica (hotspots/highlight/selección) | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–32 |
| Animación en loop (rig simple o blendshapes + clip idle) | N1 4–8 · N2 8–16 · N3 16–35 · N4 35–80 |
| Animación interactiva (estados, input, transiciones) | N1 8–15 · N2 15–30 · N3 30–70 · N4 70–150 |

Target por defecto: WebGL móvil-first (presupuesto poligonal y texturas acordados en intake).
Motor target declarable: three.js / Babylon.js / Unity / Unreal / Godot.

#### B1 · Asset RT estático no interactuable — **$150–400 / $390–1050 / $1150–3100 / $3600–9600**
Props, escenografía, hero object para visor pasivo. Entrega típica: N1 1–2 días · N2 3–5 días · N3 1–2 semanas · N4 3–6 semanas.

#### B2 · Asset RT estático interactuable — **$200–520 / $500–1350 / $1450–3800 / $4300–11300**
Inspección con hotspots, corte por selección, info por parte. Entrega: N1 2 días · N2 ~1 semana · N3 2 semanas · N4 4–7 semanas.

#### B3 · Asset RT animado no interactuable — **$250–640 / $600–1650 / $1750–4700 / $5200–14000**
Loops (idle/giro/funcionamiento) para vitrina web o juego NPC pasivo. Entrega: N1 2–3 días · N2 ~1 semana · N3 2–3 semanas · N4 5–8 semanas.

#### B4 · Asset RT animado interactuable — **$350–850 / $800–2100 / $2200–6300 / $6700–17800**
Control directo del usuario (personaje simple, vehículo controlable, máquina operable). Entrega: N1 3–4 días · N2 1–2 semanas · N3 3–5 semanas · N4 6–12 semanas.

---

### B5 · Shaders estilizados tiempo real

**Qué es:** material/shader custom (toon, hatching, dissolve, agua estilizada, hologramas, NPR) implementado en Shader Graph/HLSL/GLSL para el motor target.
**Drivers:** nº de efectos, target (desktop/móvil), integración con pipeline existente, documentación requerida.
**Confidence por defecto:** `inferred` hasta ver referencias visuales cerradas.

| Subtarea | Horas por nivel |
|---|---|
| Brief/referencias + prueba de concepto visual | N1 1–2 · N2 2–3 · N3 3–5 · N4 5–8 |
| Implementación shader (R&D) | N1 2–5 · N2 5–12 · N3 12–30 · N4 30–70 |
| Tuning de parámetros + variantes | N1 1–2 · N2 2–5 · N3 5–12 · N4 12–25 |
| Optimización/perf móvil | N1 0,5–2 · N2 2–4 · N3 4–10 · N4 10–20 |
| Documentación + escena ejemplo | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–12 |
| **Total horas** | **N1 5–12 · N2 12–27 · N3 27–63 · N4 63–135** |

**Presupuesto por nivel:** N1 **$130–360** · N2 **$330–950** · N3 **$900–2850** · N4 **$2800–7500**
Entrega: N1 1–2 días · N2 2–4 días · N3 1–2 semanas · N4 3–6 semanas.
Modificador: shader adicional del MISMO sistema/familia **−30%**.

---

### B6 · Mecánicas específicas sobre asset (vista explosionada, cutaway, medición)

**Qué es:** capa de mecánica sobre un asset RT existente: despiece por etapas con slider/steps, etiquetado de partes, secciones, cotas.
**Requiere:** asset con separación por partes (si no existe → cotizar B1/B2 previo o subtarea de separación aparte).
**Drivers:** nº de partes móviles, profundidad del despiece, UI asociada.
**Confidence por defecto:** `explicit` si el asset ya está preparado; `inferred` si hay que separar piezas.

| Subtarea | Horas por nivel |
|---|---|
| Análisis/preparación de despiece del asset | N1 1–3 · N2 3–6 · N3 6–15 · N4 15–40 |
| Setup animación/explosión (curvas, etapas) | N1 2–4 · N2 4–10 · N3 10–25 · N4 25–60 |
| UI/controles (slider, steps, etiquetas) | N1 2–4 · N2 4–8 · N3 8–18 · N4 18–40 |
| Integración motor + perf | N1 1–2 · N2 2–5 · N3 5–12 · N4 12–25 |
| **Total horas** | **N1 6–13 · N2 13–29 · N3 29–70 · N4 70–165** |

**Presupuesto por nivel:** N1 **$150–390** · N2 **$360–1050** · N3 **$1000–3150** · N4 **$3100–9100**
Asset NO incluido. Entrega: N1 2 días · N2 ~1 semana · N3 2 semanas · N4 4–8 semanas.

---

### B7 · Optimización de assets existentes → RT-ready

**Qué es:** auditoría y reparación de modelos que ya tiene el cliente (pesados, mal topología, sin UVs) para volverlos usables en WebGL/juego. Unidad: 1 asset medio.
**Drivers:** estado de partida (topología, UVs existentes, nº materiales), poly count objetivo, plataformas objetivo.
**Confidence por defecto:** `qualitative` hasta auditoría; tras auditoría corta pasa a `explicit`.

| Subtarea | Horas por nivel |
|---|---|
| Auditoría técnica (poly/tris, overdraw, texturas, draw calls) | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–8 |
| Retopo/rebuild parcial | N1 0–2 · N2 2–6 · N3 6–15 · N4 15–40 |
| Re-bake/texturas | N1 0,5–2 · N2 2–5 · N3 5–12 · N4 12–25 |
| LODs/export | N1 0,5–1 · N2 1–2 · N3 2–5 · N4 5–10 |
| QA motor | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–6 |
| **Total horas** | **N1 2–7 · N2 7–17 · N3 17–39 · N4 39–89** |

**Presupuesto por nivel:** N1 **$50–210** · N2 **$190–600** · N3 **$550–1800** · N4 **$1700–4900**

---

### B8 · Rigging & animación (personajes/objetos)

**Qué es:** rig funcional + clips de animación. Unidad base: 1 rig + 2 clips de ~5 s.
**Drivers:** tipo de rig (props vs biped facial), nº de clips, calidad de deformación requerida.
**Confidence por defecto:** `inferred`.

| Subtarea | Horas por nivel |
|---|---|
| Rig base (según complejidad) | N1 2–5 · N2 5–12 · N3 12–30 · N4 30–70 |
| Pesos/deformación | N1 1–3 · N2 3–8 · N3 8–20 · N4 20–45 |
| Clips de animación (lote de 2) | N1 2–6 · N2 6–12 · N3 12–24 · N4 24–50 |
| **Total horas** | **N1 5–14 · N2 14–32 · N3 32–74 · N4 74–165** |

**Presupuesto por nivel:** N1 **$125–420** · N2 **$390–1120** · N3 **$1100–3350** · N4 **$3300–9100**
Clip adicional: +25–50% del precio del lote inicial por clip, según complejidad.

---

## Familia F (parte 1) — Datos técnicos

### F1 · CAD → WebGL ready ⭐ (servicio insignia)

**Qué es:** convertir ensamblajes CAD (STEP/IGES/SolidWorks/Inventor/Fusion) en assets web-optimizados con metadata por pieza, listos para visores/configuradores/digital twins.
**Drivers (los que mueven TODO el precio):**
1. **Nº de piezas del ensamblaje** — driver principal.
2. Complejidad geométrica (prismático vs freeform/superficies).
3. Calidad del CAD de origen (tolerancias, ensamblajes anidados, geometría sucia).
4. Necesidad de despiece/animación posterior (encadena con B6).
5. Target (web desktop vs móvil exigente).

**Definición de niveles por nº de piezas:** N1 ≤15 piezas simples/prismáticas · N2 15–60 piezas mixtas ·
N3 60–150 piezas o freeform moderado · N4 150+ piezas, freeform masivo, cableado/tuberías.
**Confidence por defecto:** `explicit` (piezas contables); freeform pesado → `inferred`.

| Subtarea | Horas por nivel |
|---|---|
| Ingesta CAD/QC (limpieza import, unidades, escala) | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–15 |
| Decimado/retopo por pieza | N1 1–3 · N2 3–10 · N3 10–30 · N4 30–100 |
| UVs + baking batch (AO/normal/curvature) | N1 1–2 · N2 2–6 · N3 6–15 · N4 15–40 |
| Texturas/materiales PBR técnicos | N1 1–3 · N2 3–8 · N3 8–20 · N4 20–45 |
| Jerarquía/nombres/metadata por pieza (IDs) | N1 0,5–1 · N2 1–3 · N3 3–8 · N4 8–20 |
| LODs + compresión (Draco/KTX2) | N1 0,5–1 · N2 1–3 · N3 3–8 · N4 8–18 |
| QA visor web + reporte de performance | N1 0,5–1 · N2 1–2 · N3 2–5 · N4 5–12 |
| **Total horas** | **N1 5–12 · N2 12–35 · N3 35–92 · N4 92–250** |

**Presupuesto por nivel:** N1 **$130–360** · N2 **$330–1230** · N3 **$1200–4200** · N4 **$4100–13800**
Entrega: N1 1–2 días · N2 3–6 días · N3 2–3 semanas · N4 4–10 semanas.
Modificadores: **lote de múltiples modelos −15–25%**; entrega también en USDZ (AR) +10%; reporte perf firmado +5%.

---

### F2 · Generación de texturas y mapas

**Qué es:** sets PBR tileables (albedo/normal/roughness/metallic/height/AO) procedurales (Substance) o AI-assisted **con licencia verificada**. Unidad: 1 set 4K.
**Drivers:** unicidad del material (biblioteca existente vs custom), uso (tileable vs unique bake), restricción NoAI.
**Confidence por defecto:** `explicit`.

| Subtarea | Horas por nivel |
|---|---|
| Diseño/generación del set + calibración PBR | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
(incluye check seamless + preview en contexto)
| **Total horas/set** | **N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15** |

**Presupuesto por set:** N1 **$30–60** · N2 **$50–140** · N3 **$140–360** · N4 **$360–830**
Modificadores: pack 10 sets **−20%**; variante de color del mismo set +0,5 h; NoAI obligatorio → solo procedural (sin cambio de precio, cambia método).
