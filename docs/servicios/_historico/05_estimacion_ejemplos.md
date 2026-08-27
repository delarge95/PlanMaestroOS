# Estimación en la práctica — matriz de flujo, caso drone CAD y spec del cotizador futuro

> v2.0 UNIFICADO · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Depende de: [`01_modelo_cobro.md`](01_modelo_cobro.md) §3–§4 (**bandas operativas** N1 25–30 · N2 28–35 ·
> N3 35–45 · N4 45–55 USD/h + redondeo única §3.1) y [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md) §F1.
> Coherencia: los catálogos publican horas **y presupuestos derivados**; toda cifra es reconstruible con la
> fórmula (derivation visible en este documento). Si las bandas del 01 cambian, los resultados se recalculan — las horas no.
> Los escenarios son **hipotéticos y etiquetados** ("escenario de referencia"): no hay clientes ni proyectos
> reales detrás (regla anti-inventos de [`REGLAS_AG-SERV.md`](REGLAS_AG-SERV.md) §4).

---

## 1. Flujo de estimación (intake → presupuesto)

```
1. Identificar servicio(s) del catálogo (familias A/B/C/D/E/F/G) y entregable exacto.
2. Medir drivers de la ficha (piezas, segundos, vistas, materiales...) → confidence explicit/inferred/qualitative.
3. Asignar nivel N1–N4 POR SUBTAREA (un proyecto puede mezclar niveles; cada parte usa su banda).
4. Sumar horas min/max por columna de nivel (tablas del catálogo).
5. Aplicar fórmula 01 §4: subtotal_min = Σ(horas_min × banda_min) · subtotal_max = Σ(horas_max × banda_max).
6. Redondear según 01 §3.1 (regla única): múltiplo de 10 (<500), de 50 (500–2.000), de 100 (>2.000); mín. abajo, máx. arriba.
7. Sumar directos traspasados (farm, stock, APIs BYOK... — 01 §4.1) + modificadores globales (01 §5).
8. Emitir SOW con la plantilla del modelo §9. El rango orientativo no es compromiso; el SOW firmado sí.
```

Regla práctica de nivel: si dos drivers de la ficha caen en niveles distintos, gana el más alto para las
subtareas que dependen de ambos (peor caso gobernante, §11), y se documenta la razón en el SOW.

---

## 2. Caso trabajado ⭐ — Conversión de DRONE CAD → realtime ready (servicio F1)

Es el ejemplo canónico porque un único driver contable (**nº de piezas**, más calidad del export) mueve todo
el rango. Las horas salen tal cual de la tabla F1 del [`02`](02_catalogo_render_assets_rt.md); el precio se
deriva aquí con las bandas operativas del 01 §3 y el redondeo §3.1.

Guía de niveles F1 (02): `≤15 piezas simples/prismáticas → N1 · 15–60 piezas mixtas → N2 · 60–150 o freeform moderado → N3 · 150+ piezas/freeform masivo/cableado → N4`.

### Escenario de referencia A — Drone simple (quadcómero de consumo, STEP limpio)

| Driver | Valor |
|---|---|
| Piezas relevantes | ~8–12 visibles (frame, 4 motores, 4 hélices, batería, canopy) |
| Geometría | prismática, superficies duras |
| Export | b-rep limpio, unidades correctas |
| Extras | ninguno |
| **Nivel** | **N1** |

Horas F1 @N1: **5–12 h** (ingesta 0,5–1 · decimado 1–3 · UVs/bake 1–2 · texturas 1–3 · metadata 0,5–1 ·
LODs 0,5–1 · QA 0,5–1). Entrega: 1–2 días.

Derivación: `5 × $25 = $125 → $120` · `12 × $30 = $360` → **USD 120–360**.

### Escenario de referencia B — Drone profesional medio (gimbal 3 ejes + cableado básico)

| Driver | Valor |
|---|---|
| Piezas relevantes | ~40 (brazos plegables, gimbal, cámara, antenas) |
| Geometría | mixta (freeform en carenas/hélices) |
| Export | subconjuntos anidados |
| Extras | separación por módulos pensando en despiece posterior (B6) |
| **Nivel** | **N2** |

Horas F1 @N2: **12–35 h**. Entrega: 3–6 días.

Derivación: `12 × $28 = $336 → $330` · `35 × $35 = $1.225 → $1.250` → **USD 330–1.250**.

### Escenario de referencia C — Ensamblaje industrial completo (drone de inspección)

| Driver | Valor |
|---|---|
| Piezas relevantes | 150+ (tornillería contada, arneses, tuberías, sensores) |
| Geometría | freeform masivo + cables curvos |
| Export | CAD pesado, tolerancias sucias |
| Extras | target móvil exigente + base para vista explosionada |
| **Nivel** | **N3 o N4 según profundidad** |

Horas F1 @N3: **35–92 h** · @N4: **92–250 h**. Entrega: N3 2–3 semanas · N4 4–10 semanas.

Derivación N3: `35 × $35 = $1.225 → $1.200` · `92 × $45 = $4.140 → $4.200` → **USD 1.200–4.200**.
Derivación N4: `92 × $45 = $4.140 → $4.100` · `250 × $55 = $13.750 → $13.800` → **USD 4.100–13.800**.
Si el cliente acepta nivel de detalle medio con LOD agresivo, baja a N3 (reduce el techo ~70 %).

### Tabla comparativa (insumo directo del slider futuro)

| | A · Simple | B · Medio | C · Industrial (N3 / N4) |
|---|---|---|---|
| Piezas | ~10 | ~40 | 150+ |
| Horas F1 | 5–12 | 12–35 | 35–92 / 92–250 |
| Presupuesto\* | **$120–360** | **$330–1.250** | **$1.200–4.200 / $4.100–13.800** |
| Entrega | 1–2 días | 3–6 días | 2–3 sem / 4–10 sem |
| Confidence | explicit | explicit | inferred |

\* Bandas operativas vigentes del 01 §3 (v1.2): presupuestos regenerados en la unificación con la regla §3.1.
Solo las HORAS son estables; los USD se recalculan si el usuario valida bandas distintas.

Add-ons encadenables sobre cualquiera de los tres: vista explosionada **B6**, interactividad **B2**, loops
**B3a/B3b** (presupuestos por ficha y apéndice de deltas en 02); modificadores F1: lote −15/−25 %,
USDZ +10 %, reporte perf firmado +5 %.

---

## 3. Spec del cotizador visual (FASE FUTURA — no construir aún)

La web de presupuestos (coordinación con AG-PORT; territorio UI suyo o propio según decida el usuario)
consumirá los catálogos como datos. Contrato mínimo para ser "cotizador-ready".

### 3.1 Principios de UX

1. **Un slider por driver principal** (F1 → nº piezas; A2 → segundos; integraciones web → nivel de interacción).
   El slider mueve el escenario A ↔ D mostrando el extremo opuesto (drone sencillo ↔ ensamblaje denso) con
   **precio y tiempo proyectados en vivo**.
2. Los niveles son **tramos, no línea continua**: el precio salta en umbrales del driver
   (F1: ≤15 / 15–60 / 60–150 / 150+ piezas). La interpolación es visual (cambia el asset de ejemplo), nunca del número
   (evita sugerir precisión falsa).
3. Copy obligatorio bajo todo rango: *"Rango orientativo, no cotización"* (regla REGLAS §4.1).
4. Toda cifra visible debe reconstruirse desde los datos → misma trazabilidad que exige el plan maestro
   (`PLAN_MULTIAGENTE.md` §0.1 aplicado a precios). El dinero vive en UNA fuente versionada
   (`src/data/services/rateCard.ts`, espejo de 01 §3) → cambiar tarifas no toca catálogos ni UI.

### 3.2 Contrato de datos — IMPLEMENTADO (parcial)

```ts
// src/data/services/types.ts + formula.ts (ciclo de unificación, v1)
ServiceDefinition { id, family, nameEs, unitEs, driversEs[], confidence, subtasks[{ id, nameEs, hours: {N1..N4: {min,max}}, ... }] }
RateCard          { version, status, bands: {N1..N4: {min,max}}, roundingMode, minProjectUsd, sourceRef }
estimateService(service, level) / estimateWithLevels(service, levelBySubtaskId) → EstimateResult
```

Pendiente para cotizador completo (fase web): campos de slider (`driverPrincipal.umbrales`, `addOns`,
`entregaDias` por nivel — contrato `ServicioCotizable` del historial) y migración de familias C/D/E/G.

Validaciones ya activas en tests (`services.test.ts`, 24 casos):
- `costoMin = floor(horasMin × bandaMin)` y `costoMax = ceil(horasMax × bandaMax)` reproducibles contra 01 §3–§4.
- Monotonía por servicio salvo solape documentado en la ficha.
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
[ Tarjeta resultado: horas 12–35 · presupuesto $330–1.250 · entrega 3–6 días ]
[ Chips de add-ons (B6 explosionada, B2 hotspots, B3 loops...) recalculando ]
[ CTA: "Pedir cotización firme" → formulario intake (drivers → SOW) ]
```

---

## 5. Guardarraíles para componer paquetes (referenciado por `06_paquetes.md`)

- **5.1 Sumar horas, no presupuestos.** La composición de un paquete suma las HORAS de sus componentes
  por nivel; el presupuesto único del paquete sale de aplicar la fórmula del 01 §4 al total.
- **5.2 Nunca sumar rangos ya redondeados.** El redondeo (§3.1) aplica UNA sola vez, al subtotal final
  del paquete; sumar cifras redondeadas de cada componente infla el rango silenciosamente.
- **5.3 Nivel por componente, no por paquete.** Cada subtarea conserva su propio N1–N4; si un componente
  sube de nivel en intake, solo él re-estima (peor caso gobernante, §11).
- **5.4 Descuentos sobre el subtotal calculado.** Batch/recurrente (01 §5) aplican tras la fórmula y se
  muestran como línea propia: original → modificador → final. Jamás se "regatean" dentro de las horas.

---

## 6. Checklist QA de catálogos (aplicar antes de cada cierre de ciclo)

- [ ] Todo presupuesto publicado se reconstruye 1:1 con 01 §4 (horas × bandas §3 + redondeo §3.1) — auditoría por script.
- [ ] Totales de horas por nivel = suma de sus subtareas (auditoría aritmética).
- [ ] Referencias cruzadas (§ del 01, fichas entre catálogos) resueltas contra la numeración vigente.
- [ ] Sin URLs, testimonios, clientes ni casos inventados; escenarios hipotéticos etiquetados.
- [ ] Confidence por defecto declarado en cada ficha.
- [ ] Modificadores citan su sección en 01 (§5).
- [ ] Placeholders de assets marcados "por producir — fase web".
