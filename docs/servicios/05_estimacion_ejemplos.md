# Estimación en la práctica — matriz de flujo, caso drone CAD y spec del cotizador futuro

> v1.1 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Depende de: [`01_modelo_cobro.md`](01_modelo_cobro.md) §3 (fórmula, bandas N1 20–28 · N2 28–40 · N3 40–60 ·
> N4 60–85 USD/h, redondeo a múltiplos de 10/50/100) y [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md) §F1.
> Coherencia: los catálogos publican **solo horas**; los precios de este documento son **derivation visible**
> (fórmula aplicada paso a paso), no cifras independientes. Si las bandas del 01 cambian, los resultados de
> este ejemplo se recalculan — las horas no.
> Los escenarios son **hipotéticos y etiquetados** ("escenario de referencia"): no hay clientes ni proyectos
> reales detrás (regla anti-inventos de [`REGLAS_AG-SERV.md`](REGLAS_AG-SERV.md) §4).

---

## 1. Flujo de estimación (intake → presupuesto)

```
1. Identificar servicio(s) del catálogo (A/B/C/D/E/F/G) y entregable exacto.
2. Medir drivers de la ficha (piezas, segundos, vistas, materiales...) → confidence explicit/inferred/qualitative.
3. Asignar nivel N1–N4 POR SUBTAREA (un proyecto puede mezclar niveles; cada parte usa su banda).
4. Sumar horas min/max por columna de nivel (tablas del catálogo, solo horas).
5. Aplicar fórmula 01 §3: subtotal_min = Σ(horas_min × banda_min) · subtotal_max = Σ(horas_max × banda_max).
6. Redondear según 01 §3: múltiplo de 10 (<500), de 50 (500–2.000), de 100 (>2.000); mín. abajo, máx. arriba.
7. Sumar directos traspasados (farm, stock, APIs BYOK...) + modificadores globales (urgencia, batch, licencias).
8. Emitir SOW con la plantilla del modelo §8. El rango orientativo no es compromiso; el SOW firmado sí.
```

Regla práctica de nivel: si dos drivers de la ficha caen en niveles distintos, gana el más alto para las
subtareas que dependen de ambos (peor caso gobernante), y se documenta la razón en el SOW.

---

## 2. Caso trabajado ⭐ — Conversión de DRONE CAD → realtime ready (servicio F1)

Es el ejemplo canónico porque un único driver contable (**nº de piezas**, más calidad del export) mueve todo
el rango. Las horas salen tal cual de la tabla F1 del [`02`](02_catalogo_render_assets_rt.md); el precio se
deriva aquí con las bandas vigentes del 01 §3.

Guía de niveles F1 (02): `<10 piezas y export limpio → N1–N2 · 10–50 piezas → N2–N3 · >50 o geometría dañada → N3–N4`.

### Escenario de referencia A — Drone simple (quadcómero de consumo, STEP limpio)

| Driver | Valor |
|---|---|
| Piezas relevantes | ~8–12 visibles (frame, 4 motores, 4 hélices, batería, canopy) |
| Geometría | prismática, superficies duras |
| Export | b-rep limpio, unidades correctas |
| Extras | ninguno |
| **Nivel** | **N1** |

Horas F1 @N1: **7–16 h** (auditoría 1–2 · decimación 1–3 · jerarquía 1–2 · retopo/bake 1–3 ·
texturizado 1–2 · LODs 1–2 · validación 1–2). Entrega: 1–2 días.

Derivación: `7 × $20 = $140` · `16 × $28 = $448` → redondeo → **USD 140–450**.

### Escenario de referencia B — Drone profesional medio (gimbal 3 ejes + cableado básico)

| Driver | Valor |
|---|---|
| Piezas relevantes | ~40 (brazos plegables, gimbal, cámara, antenas) |
| Geometría | mixta (freeform en carenas/hélices) |
| Export | subconjuntos anidados |
| Extras | separación por módulos pensando en despiece posterior (B6) |
| **Nivel** | **N2** |

Horas F1 @N2: **16–34 h**. Entrega: 3–6 días.

Derivación: `16 × $28 = $448` · `34 × $40 = $1.360` → **USD 440–1.400**.

### Escenario de referencia C — Ensamblaje industrial completo (drone de inspección)

| Driver | Valor |
|---|---|
| Piezas relevantes | 150+ (tornillería contada, arneses, tuberías, sensores) |
| Geometría | freeform masivo + cables curvos |
| Export | CAD pesado, tolerancias sucias |
| Extras | target móvil exigente + base para vista explosionada |
| **Nivel** | **N3 o N4 según profundidad** |

Horas F1 @N3: **38–67 h** · @N4: **56–111 h**. Entrega: N3 2–3 semanas · N4 4–9 semanas.

Derivación N3: `38 × $40 = $1.520` · `67 × $60 = $4.020` → **USD 1.500–4.100**.
Derivación N4: `56 × $60 = $3.360` · `111 × $85 = $9.435` → **USD 3.300–9.500**.
Si el cliente acepta nivel de detalle medio con LOD agresivo, baja a N3 (ahorro ≈55 % en el techo).

### Tabla comparativa (insumo directo del slider futuro)

| | A · Simple | B · Medio | C · Industrial (N3 / N4) |
|---|---|---|---|
| Piezas | ~10 | ~40 | 150+ |
| Horas F1 | 7–16 | 16–34 | 38–67 / 56–111 |
| Presupuesto* | **$140–450** | **$440–1.400** | **$1.500–4.100 / $3.300–9.500** |
| Entrega | 1–2 días | 3–6 días | 2–3 sem / 4–9 sem |
| Confidence | explicit | explicit | inferred |

\* Bandas vigentes del 01 §3 al momento de escribir (v1). Solo las HORAS son estables; los USD se recalculan
si el usuario valida bandas distintas.

Add-ons encadenables (precios delta en 02): vista explosionada **B6** (N1 $70–180 … N4 $700–1.650),
interactividad **B2**, animación de loops **B3a/B3b**; modificadores F1: lote −15/−25 %, USDZ +10 %,
reporte perf firmado +5 % (si se mantiene).

---

## 3. Spec del cotizador visual (FASE FUTURA — no construir aún)

La web de presupuestos (coordinación con AG-PORT; territorio UI suyo o propio según decida el usuario)
consumirá los catálogos como datos. Contrato mínimo para ser "cotizador-ready".

### 3.1 Principios de UX

1. **Un slider por driver principal** (F1 → nº piezas; A2 → segundos; integraciones web → nivel de interacción).
   El slider mueve el escenario A ↔ D mostrando el extremo opuesto (drone sencillo ↔ ensamblaje denso) con
   **precio y tiempo proyectados en vivo**.
2. Los niveles son **tramos, no línea continua**: el precio salta en umbrales del driver
   (F1: <10 / 10–50 / >50 piezas…). La interpolación es visual (cambia el asset de ejemplo), nunca del número
   (evita sugerir precisión falsa).
3. Copy obligatorio bajo todo rango: *"Rango orientativo, no cotización"* (regla REGLAS §4.1).
4. Toda cifra visible debe reconstruirse desde los datos → misma trazabilidad que exige el plan maestro
   (`PLAN_MULTIAGENTE.md` §0.1 aplicado a precios). Como los catálogos solo publican horas, **el precio se
   calcula en runtime desde `bandas.json`** (única fuente de dinero) → cambiar tarifas no toca catálogos ni UI.

### 3.2 Contrato de datos (que cumplirán `02`–`04` cuando se migren a TS)

```ts
// Catálogo: SOLO horas (coherente con la regla del modelo)
interface ServicioCotizable {
  id: string;                     // "F1"
  familia: string;                // "F"
  nombre: string;
  unidad: string;                 // "por asset", "por imagen", "por clip ≤10 s"
  niveles: Array<{                // índice 0..3 == N1..N4
    horasMin: number; horasMax: number;
    entregaDias: [number, number];
  }>;
  driverPrincipal: { nombre: string; umbrales: [string, string, string, string] };
  confidenceDefault: "explicit" | "inferred" | "qualitative";
  addOns: Array<{ id: string; refServicio?: string; horasPorNivel: string }>;
}

// Dinero: archivo ÚNICO versionado, derivado de 01 §3
interface BandasTarifarias {
  vigencia: string;               // fecha ISO + hash de commit del 01
  niveles: Record<"N1"|"N2"|"N3"|"N4", { min: number; max: number }>; // USD/h
  redondeo: Array<{ hastaUsd: number; multiplo: number }>;            // 10/50/100
}
```

Validaciones obligatorias del futuro validador TS (Fase 2):
- `costo = clamp(roundDown(min×bandaMin), roundUp(max×bandaMax))` reproducible contra 01 §3.
- Monotonía por servicio: horasMax(Ni) ≤ horasMin(Ni+1) salvo solape documentado en la ficha.
- Ningún literal de precio dentro de catálogos/UI sin pasar por `BandasTarifarias`.
- Sin URLs ni assets inventados: ejemplos referenciados por id de placeholder.

### 3.3 Assets de ejemplo para el slider — PLACEHOLDERS (por producir)

| Asset | Uso | Estado |
|---|---|---|
| Drone low-poly (~10 piezas) | extremo izquierdo slider F1 | **por producir — fase web** |
| Drone medio (~40 piezas) | punto intermedio | **por producir — fase web** |
| Ensamblaje industrial (150+) | extremo derecho | **por producir — fase web** |
| 1 asset por servicio restante | sliders propios | **por producir** |

Producción de demos se planifica con AG-PORT (doc 33, sprint de assets) cuando se apruebe la fase web.
Ningún placeholder se publica sin marcar.

### 3.4 Wireframe textual (referencia, no diseño final)

```
[ Selector de servicio (tabs por familia A/B/C/D/E/F/G) ]
[ Slider driver principal        ← valor del driver en vivo ]
[ Visor del ejemplo A ↔ D (canvas 3D ligero o imágenes precargadas) ]
[ Tarjeta resultado: horas 16–34 · presupuesto $440–1.400 · entrega 3–6 días ]
[ Chips de add-ons (B6 explosionada, B2 hotspots, B3 loops...) recalculando ]
[ CTA: "Pedir cotización firme" → formulario intake (drivers → SOW) ]
```

---

## 5. Guardarraíles para componer paquetes (referenciado por `06_paquetes.md`)

- **5.1 Sumar horas, no presupuestos.** La composición de un paquete suma las HORAS de sus componentes
  por nivel; el presupuesto único del paquete sale de aplicar la fórmula del 01 §3 al total.
- **5.2 Nunca sumar rangos ya redondeados.** El redondeo (10/50/100) aplica UNA sola vez, al subtotal final
  del paquete; sumar cifras redondeadas de cada componente infla el rango silenciosamente.
- **5.3 Nivel por componente, no por paquete.** Cada subtarea conserva su propio N1–N4; si un componente
  sube de nivel en intake, solo él re-estima (con la regla del peor caso gobernante §1).
- **5.4 Descuentos sobre el subtotal calculado.** Batch/recurrente (01 §4) aplican tras la fórmula y se
  muestran como línea propia: original → modificador → final. Jamás se "regatean" dentro de las horas.

---

## 6. Checklist QA de catálogos (aplicar antes de cada cierre de ciclo)

- [ ] Catálogos publican SOLO horas (cero literales de dinero fuera del 01/bandas).
- [ ] Totales de horas por nivel = suma de sus subtareas (auditoría aritmética).
- [ ] Todo presupuesto mostrado lleva su derivación visible (fórmula + bandas citadas).
- [ ] Sin URLs, testimonios, clientes ni casos inventados; escenarios hipotéticos etiquetados.
- [ ] Confidence por defecto declarado en cada ficha.
- [ ] Modificadores citan su sección en 01 (§4/§5/§6 equivalentes).
- [ ] Placeholders de assets marcados "por producir — fase web".
