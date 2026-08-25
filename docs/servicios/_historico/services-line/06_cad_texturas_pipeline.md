> {0} Archivado en la consolidaci{1}n (ciclo 5): l{2}nea de cat{3}logo propia de agent/services. Contenido cubierto por los cat{3}logos can{1}nicos 01{4}07 de esta carpeta.

# AG-SERV · C6 — Conversión CAD, texturas y pipeline

> Owner: AG-SERV · v1 · 2026-08-25 · Tarifas y políticas: `00_METODOLOGIA.md`
> Clases: **RC-RTA** (25–35/h) para CAD y texturas; banda combinada RC-WEB/RC-AI (27–40/h) para herramientas de pipeline.
> Regla de conteo: piezas repetidas cuentan UNA vez como tipo (+instancing); 40 tornillos iguales = 1 pieza tipo.

---

## CAD-01 · CAD → WebGL ready (conversión para web/juegos)

**Qué es:** tomar un modelo CAD (STEP, IGES, SolidWorks, Fusion, Inventar, etc.) y dejarlo optimizado para render en tiempo real: geometría limpia, presupuesto de tris, jerarquía navegable, materiales PBR, comprimido.

**Entregables:** GLB/glTF validado + estructura jerárquica nombrada por pieza/grupo + ficha técnica (tris por LOD, peso, draw calls estimados).

### Criterios de tier por complejidad del ensamblaje (medibles en el brief)

| Tier | Piezas (tipos) | Construcción | Tornillería/detalle |
|---|---|---|---|
| S | ≤8 | prismática/simple | omitida o implícita |
| M | 9–30 | curvas moderadas | representada por tipo |
| L | 31–100 | subensamblajes, superficies complejas | detallada por tipo |
| XL | >100 | ensamblaje múltiple/BOM extenso | discovery por lotes |

### Subtareas × tier (horas, RC-RTA)

| Subtarea | S | M | L |
|---|---|---|---|
| Análisis del CAD (inventario, construcción, repetidos) | 0.5–1 | 1–2 | 2–4 |
| Import + heal/limpieza de geometría | 1–3 | 2–6 | 4–12 |
| Simplificación/retopología por grupos | 1.5–3.5 | 4–11 | 10–28 |
| Jerarquía y naming por pieza/grupo | 0.5–1.5 | 1–2.5 | 3–5 |
| UVs donde aplique | 0.5–1.5 | 1.5–4 | 4–9 |
| Materiales/bake a PBR | 1–2.5 | 2–6 | 5–11 |
| LODs + instancing + compresión | 0.5–1.5 | 1–2.5 | 2–5 |
| Validación en visor objetivo + ficha técnica | 0.5–1 | 0.5–1 | 1–1.5 |

| Tier | Total horas | Precio | Plazo |
|---|---|---|---|
| S | 6–16 h | **USD 150–550** | 2–4 días hábiles |
| M | 13–36 h | **USD 350–1.250** | 5–9 días hábiles |
| L | 31–77 h | **USD 800–2.700** | 2–4 semanas |
| XL | discovery fijo 6–12 h (RC-CON: **USD 240–660**, incluye análisis completo + lote piloto) + cotización por lotes de 25–50 tipos de pieza | | por lotes |

**Ejemplo ilustrativo (el caso "drone"):**
- Drone S: chasis + 4 hélices simplificadas + batería, sin tornillería → dentro del rango S.
- Drone M: brazos articulados, hélices con perfil aerodinámico, tornillería agrupada por tipo, gimbal con piezas internas visibles → dentro del rango M.
- Drone L/XL: BOM completo de fabricación con subensamblajes y cableado → L o discovery XL.
*(Placeholder visual hasta tener el asset propio publicable — futura demo del slider S→L.)*

Interacción posterior (hotspots, exploded, configurador) se cotiza vía C2 RTA-02/06 sobre este resultado.

---

## TEX-01 · Generación de texturas y mapas

**Qué es:** sets de mapas PBR (albedo, normal, roughness, metal, AO) y texturizado de assets, tileables o únicos.

| Ítem | Complejidad | Horas | Precio |
|---|---|---|---|
| Set tileable custom | S (material limpio simple) | 2–5 h | USD 50–175 |
| Set tileable custom | M (variaciones, desgaste moderado) | 5–10 h | USD 125–350 |
| Set procedural paramétrico | L (exposables ajustables en motor) | 10–20 h | USD 250–700 |
| Texturizado de asset completo | S (≤4 materiales) | 3–8 h | USD 75–280 |
| Texturizado de asset completo | M (5–12 materiales) | 8–20 h | USD 200–700 |
| Texturizado de asset completo | L (>12 materiales o asset hero) | 20–45 h | USD 500–1.575 |
| Baking standalone (high→low por asset) | — | 1–4 h | USD 25–140 |

---

## PIPE-01 · Automatización de pipeline, scripts y tools

**Qué es:** herramientas que eliminan trabajo repetitivo: scripts de Blender (Python), editor tools de Unity (C#), conversión batch, QA automático de assets.

**Banda:** combinada RC-WEB/RC-AI (**USD 27–40/h**).

| Paquete | Alcance | Horas | Precio | Plazo |
|---|---|---|---|---|
| Script utilitario | propósito único (batch export/rename/conversión), CLI | 4–12 h | **USD 100–500** | 1–3 días |
| Tool con UI | panel/editor window, presets, validaciones visibles | 12–30 h | **USD 300–1.200** | 1–2 semanas |
| Pipeline completo | flujo end-to-end documentado (ej. CAD→asset batch con QA automático y reporte) | 30–80 h | **USD 800–3.200** | 3–6 semanas |

Incluye siempre: README técnico, manejo de errores explícito, y una sesión de handoff. El mantenimiento evolutivo va como retainer (C7).

---

## Fuentes y trazabilidad

- Tarifas: rate card v1 §2 (RC-RTA anclada a doc-03 §4.1 [lemon-core]; banda pipeline mezcla RC-WEB/RC-AI citadas allí).
- Horas: inferencia propia documentada sobre experiencia real del perfil en CAD-to-realtime (TwinSight documenta la capacidad ejecutiva, doc-08/08B READ); calibración pendiente contra proyectos reales.
