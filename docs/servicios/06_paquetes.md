# Paquetes comerciales — combos predefinidos por arquetipo de cliente

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD · Estado: interno.
> Un paquete NO es un servicio nuevo: es una **receta** que combina fichas de los catálogos
> (`02`–`04`) con niveles típicos. El cliente ve alcance + tiempo + presupuesto; nosotros estimamos con la
> misma fórmula de siempre ([`01_modelo_cobro.md`](01_modelo_cobro.md) §3).
> Los presupuestos de este documento son **derivaciones ilustrativas** con las bandas vigentes del 01 §3
> (N1 20–28 · N2 28–40 · N3 40–60 · N4 60–85 USD/h): si cambian las bandas, se recalculan — las horas no.
> Ningún paquete se publica a cliente sin pasar por SOW (plantilla 01 §8).

---

## Reglas de los paquetes

1. **Horas primero**: cada paquete lista sus componentes con horas del catálogo; el total es la suma, sin "descuentos ocultos".
2. **Descuentos explícitos**: si el combo aplica batch (01 §4, −15/−25 %) o recurrente (−5/−10 %), se muestra la línea original y la final.
3. **Fuera de paquete = change request**: cualquier driver que suba de nivel re-abre estimación (01 §5).
4. Si el cliente ya tiene el asset 3D validado, el componente de asset se reemplaza por auditoría B7 — nunca se cobra modelado fantasma.

---

### PK1 · Producto en movimiento — renders de línea para e-commerce/marketing

**Arquetipo:** tienda/marca que necesita imágenes hero consistentes de varios productos.
**Receta:** 3× A1 (N2 típico) sobre setup compartido — la 1.ª imagen paga setup completo; las 2 siguientes son variantes del mismo setup (−40 % c/u según ficha A1 ≈ 60 % de horas).

| Componente | Horas |
|---|---|
| A1 imagen principal | 8,5–15,5 h |
| A1 variante ×2 (mismo setup) | 10,2–18,6 h |
| **Total** | **19–34 h** |

Derivación ilustrativa N2: `19×28=$532` · `34×40=$1.360` → **USD 500–1.400** · entrega ~1 semana.
Esquema de pago (01 §7): 40/40/20. Con batch de 2+ líneas de producto: aplicar −15 % visible.

---

### PK2 · Spot de lanzamiento — pieza audiovisual de producto

**Arquetipo:** launch de producto/campaña que necesita video sin estudio físico.
**Receta:** A2 pieza base ≤10 s @N2 (estilo producto, sin sims pesadas). Bloques extra de 10 s según ficha A2.

| Componente | Horas |
|---|---|
| A2 base ≤10 s (storyboard→master) | 24–45 h |

Derivación ilustrativa N2: `24×28=$672` · `45×40=$1.800` → **USD 650–1.800** · entrega 1–2 semanas.
Con look estilizado o FX/sims → nivel N3 (47–93 h → **USD 1.900–3.700**) — se declara en intake.
Pago 40/40/20; versión 9:16 +10 % (modificador de ficha).

---

### PK3 · Vitrina industrial interactiva ⭐ — CAD navegable en la web

**Arquetipo:** fabricante/distribuidor con catálogo técnico (el caso drone del [`05`](05_estimacion_ejemplos.md), extendido a experiencia).
**Receta:** F1 conversión @N2 + delta B2 hotspots @N2 + C2 visor custom three.js/Babylon @N2.

| Componente | Horas |
|---|---|
| F1 CAD→RT asset medio (~40 piezas) | 16–34 h |
| B2 hotspots/puntos de interés | 3–5 h |
| C2 visor custom (órbita, panel info, perf móvil, deploy) | 20–40 h |
| **Total** | **39–79 h** |

Derivación ilustrativa N2: `39×28=$1.092` · `79×40=$3.160` → **USD 1.050–3.200** · entrega 2–3 semanas.
Escalable: ensamblaje >50 piezas o freeform → componentes a N3 (F1 38–67 h, C2 42–88 h → total 83–160 h → **USD 3.300–6.400**).
Pago: 30/40/30 (frontera de los esquemas del 01 §7; se fija en SOW). Add-ons naturales: B6 explosionada, C9 AR, lote −15/−25 %.

---

### PK4 · Configurador de producto — visualizador con variantes y precio dinámico

**Arquetipo:** marca con SKU configurable (materiales/partes/accesorios) que quiere auto-servicio de cotización.
**Receta:** cadena base B @N3 (asset config-ready) + C5 configurador @N3. Requiere matriz de variantes cerrada (confidence `explicit`); integración e-commerce real se añade tras discovery (+15–30 h según ficha C5).

| Componente | Horas |
|---|---|
| Cadena base B (asset optimizado) @N3 | 26–51 h |
| C5 configurador (datos, escena swap, UI, share, QA) @N3 | 54–120 h |
| **Total** | **80–171 h** |

Derivación ilustrativa N3: `80×40=$3.200` · `171×60=$10.260` → **USD 3.200–10.300** · entrega 4–7 semanas.
Pago por hitos obligatorio (01 §7, esquema >3k): 30/30/30/10 contra entregables.

---

### PK5 · Lanzamiento scrollytelling — narrativa 3D controlada por scroll

**Arquetipo:** campaña/agencia que necesita una pieza memorable de marketing.
**Receta:** C4 scrollytelling @N2 + 2 assets cadena base B @N2 (o los provee el cliente → se sustituyen por B7 auditoría).

| Componente | Horas |
|---|---|
| C4 scrollytelling (storyboard→deploy) | 23–53 h |
| Cadena base B ×2 assets | 27–52 h |
| **Total** | **50–105 h** |

Derivación ilustrativa N2: `50×28=$1.400` · `105×40=$4.200` → **USD 1.400–4.200** · entrega 3–5 semanas.
Coreografía avanzada/fallback complejo → N3 (C4 53–118 h) — re-estimar antes de firmar.

---

### PK6 · Presencia AR — producto a escala real desde la página

**Arquetipo:** e-commerce/catálogo que suma "ver en tu espacio" sin app nativa.
**Receta:** cadena base B @N2 (con salida USDZ) + C9 AR web ligero @N2 (Quick Look/Scene Viewer + flujo QR).

| Componente | Horas |
|---|---|
| Cadena base B (AR-compliant) @N2 | 13,5–26 h |
| C9 embed AR + QR + QA dispositivos | 8–19 h |
| **Total** | **21,5–45 h** |

Derivación ilustrativa N2: `21,5×28=$602` · `45×40=$1.800` → **USD 600–1.800** · entrega 1–2 semanas.
AR con tracking avanzado (image tracking/occlusion) NO es este paquete: proyecto a medida tras discovery (ficha C9).

---

## Matriz resumen

| Paquete | Componentes | Horas | Presupuesto* | Entrega | Pago |
|---|---|---|---|---|---|
| PK1 Producto en movimiento | 3×A1 | 19–34 | $500–1.400 | ~1 sem | 40/40/20 |
| PK2 Spot de lanzamiento | A2 ≤10 s | 24–45 | $650–1.800 | 1–2 sem | 40/40/20 |
| PK3 Vitrina industrial ⭐ | F1+B2+C2 | 39–79 | $1.050–3.200 | 2–3 sem | 30/40/30 |
| PK4 Configurador | B+C5 | 80–171 | $3.200–10.300 | 4–7 sem | 30/30/30/10 |
| PK5 Scrollytelling | C4+B+B | 50–105 | $1.400–4.200 | 3–5 sem | 30/40/30 |
| PK6 Presencia AR | B+C9 | 21,5–45 | $600–1.800 | 1–2 sem | 40/40/20 |

\* Bandas vigentes 01 §3 al momento de escribir; recalculable. Todos los rangos asumen niveles indicados;
subir de nivel = re-estimación por change request.

## Cuándo NO usar paquetes

- Alcance con drivers fuera de ficha (mecánicas nuevas, integraciones corporativas, IA a medida) → SOW directo con catálogos.
- Cliente recurrente con necesidades continuas → retainer (ver familia G en [`04_catalogo_vfx_ia_consultoria.md`](04_catalogo_vfx_ia_consultoria.md)).
- Discovery obligatorio pendiente (C3 web apps completas, proyectos N4) → primero fase discovery corta, después paquete o SOW.

## Post-lanzamiento

Todo paquete incluye garantía de defectos 30 días (01 §7). Iteración evolutiva posterior (nuevas variantes,
assets adicionales, campañas repetidas) se canaliza por: paquete repetido con modificador recurrente (−5/−10 %)
o retainer mensual — lo que convenga al volumen del cliente.
