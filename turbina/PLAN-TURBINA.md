# PLAN MAESTRO — Turbina por partes (demo del slider de detalle)

**Objetivo**: modelo de turbina/turbofan industrial en 5 niveles de detalle para el slider del cotizador.
**Estrategia**: Tripo 3D genera solo piezas complejas ÚNICAS (1 generación por pieza). Las piezas repetidas se generan UNA vez y se instancian en Blender (array/linked duplicates). Las piezas simples son procedurales (código Blender MCP) y Alexander las pule a mano.

---

## NIVELES DEL SLIDER

| Nivel | Contenido | Fuente | Tris aprox. |
|---|---|---|---|
| **N1 · XS** | Silueta del motor (5 shells facetadas) | Procedural (ZCode) — **hecho** | ~1.5k |
| **N2 · S** | Motor con primitivas: carcasa+labio, spinner, fan 18 aspas, compresor estriado, combustor anular, turbina 2 etapas, tobera+cono, eje, gearbox con engranajes, monturas | Procedural (ZCode) — **hecho** | ~10–15k |
| **N3 · M** | + piezas Tripo exteriores: fan_case, spinner, fan_blade ×20 (array), eje | Tripo + ensamble | ~20–40k |
| **N4 · L** | + Tripo internos: hp_blisk, combustor, turbine_blisk, exhaust_case + tuberías procedurales | Tripo + ensamble | ~60–120k |
| **N5 · XL** | + gearbox_housing (Tripo), engranajes procedurales, tornillería, sensores, placa, monturas detalladas | Todo | ~150–300k |

---

## PIEZAS PARA TRIPO (6 generaciones, una por pieza)

> Pipeline por pieza: **nano banana pro** genera el render (prompt abajo) → **Tripo image-to-3D** (modo HD, quads/Smart Mesh, PBR) → me pasas el GLB → yo limpio (doubles, sueltos, degenerados, normales por volumen) y lo ensamblo.

> **Actualización**: `fan_case` y `spinner` salieron de la lista de Tripo — son superficies de revolución (lathe), procedural es superior. `fan_case` ya está generada proceduralmente (colección `TURB_PIEZAS_PROCEDURALES`, 1,920 tris). `spinner`: cono procedural + espiral como cinta barrida. Tripo se reserva para lo que de verdad la necesita: curvatura compleja no-revolucionaria.

| # | id | Pieza | ¿Por qué Tripo? | Array en Blender |
|---|---|---|---|---|
| 1 | fan_blade | UNA aspa wide-chord con twist aerodinámico | Curvatura doble compleja | ×20 alrededor del hub |
| 2 | hp_blisk | Disco de compresor HP con ~30 aspas integradas (monolítico) | Repetición interna: Tripo la hace bien en 1 pieza | — |
| 3 | combustor | Cámara de combustión annular con 12 inyectores integrados | La pieza más compleja: anillo + toberas + tinte térmico | — |
| 4 | turbine_blisk | Disco de turbina con álabes curvos (1 etapa) | Álabes bucket curvos complejos | — |
| 5 | exhaust_case | Carcasa de escape + cono trasero con struts | Forma compuesta orgánica (borderline: revolve+struts también viable procedural) | — |
| 6 | gearbox_housing | Carcasa del gearbox de accesorios (SIN engranajes — los hago yo) | Caja fundida con alojamientos circulares | — |

### Prompts para nano banana pro (usar en inglés, 1 imagen por pieza)

Reglas fijas de cada prompt: **una sola pieza**, fondo blanco puro, vista 3/4, iluminación de estudio suave, SIN texto ni cotas, pieza completa dentro del cuadro, estilo render 3D de producto nítido.

1. **fan_case**: `Studio product render of a single short flared cylindrical jet engine fan case ring, brushed titanium metal, wide polished intake lip, plain smooth surface without bolts or text, 3/4 view, pure white background, soft studio lighting, sharp focus`
2. **spinner**: `Studio product render of a jet engine inlet spinner cone, glossy grey metallic nose cone with a single white spiral stripe, small metal base ring, floating, 3/4 view, pure white background, soft studio lighting`
3. **fan_blade**: `Studio product render of a single large wide-chord turbofan fan blade, curved aerodynamic twist, brushed titanium with dark grey leading edge, hollow titanium root, floating, 3/4 view, pure white background, sharp`
4. **hp_blisk**: `Studio product render of a jet engine compressor blisk: one solid steel disk with 30 small integrated blades around its rim, machined metal, floating, 3/4 view, pure white background, soft studio lighting`
5. **combustor**: `Studio product render of an annular jet engine combustion chamber ring, heat-stained inconel metal with blue and purple heat tint, 12 fuel injector nozzles spaced around the ring, small fuel manifold tube, floating, 3/4 view, pure white background`
6. **turbine_blisk**: `Studio product render of a jet engine turbine disk with curved bucket blades around the rim, dark heat-stained inconel metal, single stage, floating, 3/4 view, pure white background`
7. **exhaust_case**: `Studio product render of a jet engine exhaust case with central tail cone and turbine exhaust strut vanes connecting them, dark heat-stained metal, floating, 3/4 view, pure white background`
8. **gearbox_housing**: `Studio product render of an aircraft engine accessory gearbox housing, cast aluminium box with round bearing housings and mounting flanges, plain blank caps without gears or text, floating, 3/4 view, pure white background`

**Al generar en Tripo**: image-to-3D · modelo HD · Smart Mesh (quads) · PBR 4K · part segmentation OFF (son piezas monolíticas) · genera 2-3 variantes y elige la mejor silueta.

---

## PIEZAS PROCEDURALES (yo las genero, Alexander pule)

| Pieza | Técnica | Nivel donde entra |
|---|---|---|
| Eje LP/HP (2 tramos escalonados) | Cilindros bmesh | N2 |
| Anillos estator con aletas (×2) | Aletas thin-box arrayadas en anillo | N2 |
| Fan de primitivas (18 aspas + hub) | Boxes con pitch, array circular | N2 |
| Combustor de primitivas (anillo + 12 toberas) | Torus achatado + tubos | N2 |
| Turbina 2 etapas de primitivas | Discos + álabes arrayados | N2 |
| Tobera de escape + struts | Conos + 6 boxes | N2 |
| Engranajes del gearbox (5-6) | Disco + dientes arrayados (involuta simple) | N5 |
| Bombas (combustible + aceite) y starter | Cilindros bridados | N5 |
| Tuberías (aceite, combustible, sangrado) | Curvas bezier + bevel | N5 |
| Tornillería completa | BoltFactory / arrays circulares | N5 |
| Monturas del motor (×2-3) | Boxes + bridas | N2 (básicas) / N5 |
| Placa de datos, sensores, termocuplas | Primitivas menores | N5 |

## REGLAS DE ENSAMBLE

1. Cada pieza Tripo entra a la colección `PIEZAS_TRIPO` con su id como nombre (`tripo_fan_case`…).
2. Limpieza automática estándar al importar (script mío): remove_doubles 1e-4 → sueltos → degenerados → normales por volumen firmado → decimate a presupuesto si supera tris.
3. Escala real: eje del motor en X, origen en la brida del fan, longitud total ~2 m.
4. Piezas repetidas: la pieza master va a `MASTERS`, el resto linked duplicates (Alt+D) — pulir el master actualiza todas.
5. El original `jet engine 3d model` y sus 55 islas NO se tocan (referencia/plan B).

## ESTADO

- [x] N1 + N2 procedurales creados en la escena (colecciones `TURBINA_N1_silueta`, `TURBINA_N2_primitivas`)
- [ ] Alexander: 8 imágenes nano banana pro → Tripo → GLBs
- [ ] Integración N3-N5
