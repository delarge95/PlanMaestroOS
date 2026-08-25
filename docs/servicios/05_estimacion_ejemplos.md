# Estimación en la práctica — matriz de flujo, caso drone CAD y spec del cotizador futuro

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Depende de: [`01_modelo_cobro.md`](01_modelo_cobro.md) (fórmula, bandas N1 25–30 · N2 28–35 · N3 35–45 · N4 45–55 USD/h,
> redondeo y modificadores) y [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md) (F1/B6/C2).
> Los escenarios de este documento son **hipotéticos y etiquetados** ("escenario de referencia"): no hay clientes ni
> proyectos reales detrás (regla anti-inventos de [`REGLAS_AG-SERV.md`](REGLAS_AG-SERV.md) §4).

---

## 1. Flujo de estimación (intake → presupuesto)

```
1. Identificar servicio(s) del catálogo (A/B/C/D/E/F/G) y entregable exacto.
2. Medir drivers de la ficha (piezas, minutos, vistas, efectos...) → confidence explicit/inferred/qualitative.
3. Asignar nivel N1–N4 POR SUBTAREA (un proyecto puede mezclar niveles; cada parte usa su banda).
4. Sumar horas min/max por columna de nivel.
5. Aplicar fórmula 01 §3: horas × banda del nivel.
6. Redondear según 01 §3 (mín. hacia abajo, máx. hacia arriba; múltiplos 10/50/100).
7. Sumar directos traspasados + aplicar modificadores globales (urgencia, lote, licencias).
8. Emitir SOW con la plantilla 01 §8. El rango publicado es orientativo; el SOW firmado es el compromiso.
```

Regla práctica de nivel: si dos drivers de la ficha caen en niveles distintos, gana el más alto para las
subtareas que dependen de ambos (peor caso gobernante), y se documenta la razón en el SOW.

---

## 2. Caso trabajado ⭐ — Conversión de DRONE CAD → WebGL ready (servicio F1)

Es el ejemplo canónico porque ilustra cómo un mismo servicio escala por un único driver contable
(**nº de piezas**) más la calidad del origen. Los tres escenarios usan la tabla de F1
(`02_catalogo_render_assets_rt.md` §F1) tal cual, sin ajustes ad-hoc.

### Escenario de referencia A — Drone simple (quadcómero de consumo, CAD limpio)

| Driver | Valor |
|---|---|
| Piezas | ~8–12 (frame, 4 motores, 4 hélices, batería, canopy) |
| Geometría | prismática, superficies duras |
| Origen | STEP export limpio, unidades correctas |
| Extras | ninguno |
| Nivel resultante | **N1** |

| Subtarea (F1) | Horas N1 | Nota |
|---|---|---|
| Ingesta CAD/QC | 0,5–1 | import directo |
| Decimado/retopo por pieza | 1–3 | geometría amable |
| UVs + baking batch | 1–2 | atlas único |
| Materiales PBR técnicos | 1–3 | plásticos + metal pintado |
| Metadata por pieza | 0,5–1 | 12 IDs |
| LODs + compresión | 0,5–1 | Draco |
| QA visor + reporte | 0,5–1 | desktop first |
| **Total** | **5–12 h** | entrega 1–2 días |

**Presupuesto: $130–360** (5 h × $25 = $125→$130 · 12 h × $30 = $360).

### Escenario de referencia B — Drone profesional medio (con gimbal y cableado básico)

| Driver | Valor | Nivel resultante |
|---|---|---|
| Piezas | ~40 (brazos plegables, gimbal de 3 ejes, cámara, antenas) | **N2** |
| Geometría | mixta (freeform en carenas y hélices) | |
| Origen | ensamblaje con subconjuntos anidados | |
| Extras | separación por módulos para despiece posterior | |

Horas N2: **12–35 h** (ingesta 1–3, decimado 3–10, UVs/bake 2–6, materiales 3–8, metadata 1–3,
LODs 1–3, QA 1–2). Entrega 3–6 días.

**Presupuesto: $330–1230** (12×28=$336→$330 · 35×35=$1225→$1230).

### Escenario de referencia C — Ensamblaje industrial completo (drone de inspección)

| Driver | Valor | Nivel resultante |
|---|---|---|
| Piezas | 150+ (tornillería contada, arneses, tuberías, sensores) | **N4** |
| Geometría | freeform masivo + cables curvos | |
| Origen | CAD pesado con tolerancias sucias | |
| Extras | target móvil exigente + base para vista explosionada (encadena B6) | |

Horas N4: **92–250 h**. Entrega 4–10 semanas.
**Presupuesto: $4100–13800** (92×45=$4140→$4100 · 250×55=$13750→$13800).
Si el cliente solo necesita el nivel de detalle medio con LOD agresivo, baja a **N3: $1200–4200**.

### Tabla comparativa (insumo directo del slider futuro)

| | A · Simple | B · Medio | C · Industrial |
|---|---|---|---|
| Piezas | ~10 | ~40 | 150+ |
| Horas | 5–12 | 12–35 | 92–250 |
| Presupuesto | **$130–360** | **$330–1230** | **$4100–13800** |
| Entrega | 1–2 días | 3–6 días | 4–10 semanas |
| Confidence | explicit | explicit | inferred |

Add-ons encadenables sobre cualquiera de los tres: vista explosionada B6 (**+$150–390** N1 … **+$3100–9100** N4),
entrega USDZ/AR (**+10%**), reporte de performance firmado (**+5%**), integración a visor embebido (C2, catálogo web).

---

## 3. Spec del cotizador visual (FASE FUTURA — no construir aún)

La web de presupuestos (coordinación con AG-PORT, territorio UI suyo o propio según decida el usuario)
consumirá los catálogos como datos. Este es el contrato mínimo que deben cumplir para ser "cotizador-ready".

### 3.1 Principios de UX

1. **Un slider por driver principal** del servicio (ej.: F1 → nº de piezas; A2 → segundos de animación;
   C1 → nivel de interacción). El slider mueve el escenario de referencia A → D mostrando el extremo opuesto
   (drone sencillo ↔ ensamblaje denso) con **precio y tiempo proyectados en vivo**.
2. Los niveles son **tramos, no línea continua**: el precio salta en los umbrales del driver
   (F1: ≤15 / 15–60 / 60–150 / 150+ piezas). La interpolación es visual (el modelo de ejemplo cambia),
   nunca del número (evita sugerir precisión falsa).
3. Copy obligatorio bajo todo rango: *"Rango orientativo, no cotización"* (regla REGLAS §4.1).
4. Toda cifra visible debe poder reconstruirse desde los JSON de catálogo → misma trazabilidad que exige
   el plan maestro para la app interna (`PLAN_MULTIAGENTE.md` §0.1 aplicado a precios).

### 3.2 Contrato de datos (que cumplirán `02`–`04` cuando se migren a TS)

```ts
interface ServicioCotizable {
  id: string;                    // "F1"
  familia: string;               // "F"
  nombre: string;
  unidad: string;                // "por modelo", "por clip 10 s", "por set 4K"
  niveles: Array<{               // índice 0..3 == N1..N4
    horasMin: number; horasMax: number;
    costoMin: number; costoMax: number;   // ya redondeados según 01 §3
    entregaDias: [number, number];
  }>;
  driverPrincipal: {
    nombre: string;              // "nº de piezas"
    umbrales: Array<string>;     // ["≤15", "15–60", "60–150", "150+"]
  };
  confidenceDefault: "explicit" | "inferred" | "qualitative";
  addOns: Array<{ id: string; refServicio?: string; delta: string }>;
  modificadores: string[];       // refs a 01 §4
}
```

Validaciones obligatorias del futuro validador TS (Fase 2):
- `costoMin === roundDown(horasMin × bandaMin)` y `costoMax === roundUp(horasMax × bandaMax)` por nivel.
- Monótono: costoMax(Ni) ≤ costoMin(Ni+1) salvo solapes documentados en la ficha.
- Ningún campo de texto libre con URL; ejemplos visuales referenciados por id de asset placeholder.

### 3.3 Assets de ejemplo para el slider — PLACEHOLDERS (por producir)

| Asset | Uso | Estado |
|---|---|---|
| Drone low-poly (~10 piezas) | extremo izquierdo slider F1 | **por producir — fase web** |
| Drone medio (~40 piezas) | punto intermedio | **por producir — fase web** |
| Ensamblaje industrial (150+) | extremo derecho | **por producir — fase web** |
| 1 asset por servicio restante | sliders propios | **por producir** |

Ningún placeholder se publica en sitio público sin marcar; producción de demos se planifica con AG-PORT
(doc 33, sprint de assets) cuando se apruebe la fase web.

### 3.4 Wireframe textual (referencia, no diseño final)

```
[ Selector de servicio (tabs por familia A/B/C/D/E/F/G) ]
[ Slider driver principal        ← valor del driver en vivo ]
[ Visor del ejemplo A ↔ D (canvas 3D ligero o imágenes precargadas) ]
[ Tarjeta resultado: horas 12–35 · presupuesto $330–1230 · entrega 3–6 días ]
[ Chips de add-ons (B6 explosionada, USDZ, reporte perf...) recalculando ]
[ CTA: "Pedir cotización firme" → formulario intake (drivers → SOW) ]
```

---

## 4. Checklist QA de catálogos (aplicar antes de cada cierre de ciclo)

- [ ] Todo rango de precio se reconstruye con 01 §3 (horas × banda + redondeo) — auditoría aritmética.
- [ ] Totales de horas por nivel = suma de sus subtareas.
- [ ] Sin URLs, testimonios, clientes ni casos inventados; escenarios hipotéticos etiquetados.
- [ ] Confidence por defecto declarado en cada ficha.
- [ ] Modificadores citan su sección en 01 (§4/§5/§6).
- [ ] Placeholders de assets marcados "por producir — fase web".
