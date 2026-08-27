# AG-SERV · 00 — Metodología de estimación y cobro

> Versión 2.0 · 2026-08-25 · Owner: AG-SERV
> Fuente de verdad del CÓMO se estima y cobra. El QUÉ (tareas y rangos por servicio) vive en los catálogos C1–C7.
> Trazabilidad: tarifas ancladas a `03_salary_benchmark_and_remote_colombia.md` (doc-03).

---

## 1. Principios

1. **Rangos, nunca cifras únicas.** Todo servicio se publica como rango min–max.
2. **Desglose antes de precio.** Ningún rango existe sin tabla de subtareas que lo soporte.
3. **Complejidad por criterios objetivos** (§3), no por intuición.
4. **Estimación ≠ cotización cerrada.** La cotización formal se emite tras discovery.
5. **Horas facturables conservadoras**: 120–140 h/mes.

---

## 2. Rate card v2 — dual moneda (USD internacional + COP nacional)

### USD (contratación internacional)

| ID | Clase | Tarifa/h USD | Anclaje |
|---|---|---|---|
| RC-ART | Arte 3D offline | 20–28 | doc-03 §4.1 banda global freelance |
| RC-RTA | Asset realtime / technical art | 25–35 | doc-03 §4.1 Lemon.io Unity Colombia |
| RC-WEB | Dev integración web 3D | 27–38 | doc-03 §4.3 especialización WebGL |
| RC-AI | IA aplicada / automatización | 28–40 | doc-03 §4.7 Python LATAM |
| RC-CON | Consultoría / auditoría | 40–55 | doc-03 §4.2 proxy TA US descontado |

### COP (contratación nacional Colombia)

| ID | Clase | Tarifa/h COP | Anclaje |
|---|---|---|---|
| RC-ART | Arte 3D offline | 30–42 k | Mercado laboral colombiano: salario mid 3D ≈ COP 5–8M/mes |
| RC-RTA | Asset realtime | 38–52 k | Mercado nacional dev/technical artist |
| RC-WEB | Dev integración web | 40–57 k | Mercado nacional fullstack/3D |
| RC-AI | IA aplicada | 42–60 k | Mercado nacional IA/data |
| RC-CON | Consultoría | 60–82 k | Mercado nacional senior/consultoría |

**Regla anti-TRM:** los precios COP se fijan contra el mercado laboral colombiano (significativamente más
económicos que la conversión USD→COP). TRM de referencia SOLO informativa: USD 1 ≈ COP 4.000 (2026-08-25).

---

## 3. Escala de complejidad XS / S / M / L / XL

| Dimensión | XS | S | M | L | XL |
|---|---|---|---|---|---|
| Piezas / objetos | ≤3 | ≤8 | 9–30 | 31–100 | >100 |
| Presupuesto de tris | <2k | <10k | 10k–50k | 50k–150k | >150k |
| Materiales | ≤1 básico | ≤2 básicos | 2–4 sets PBR | >4 o shaders custom | sistema paramétrico |
| Animación | loop ≤3 s | turntable | loop simple | secuencias múltiples | sistema riggado |
| Interactividad | thumbnail | órbita básica | hotspots, UI | mecánicas custom | app completa |
| Integración web | embed pasivo | embed con UI | página existente | sección dedicada | app completa |

### Regla de escalado

1. El tier final es el **segundo nivel más alto** entre las dimensiones aplicables.
2. Si ≥2 dimensiones caen en XL → proyecto XL → discovery tarifado obligatorio.
3. Piezas repetidas cuentan una vez (+instancing).

---

## 4. Fórmula

```text
precio_min = Σ horas_min(subtarea_i, tier) × tarifa_min(clase_RC_i)
precio_max = Σ horas_max(subtarea_i, tier) × tarifa_max(clase_RC_i)
redondeo   = múltiplos de USD 50 (o COP 10.000)
plazo_días = ⌈Σ horas_mid / 4⌉ días hábiles + rondas
```

---

## 5. Multiplicadores

| Factor | Ajuste | Condición |
|---|---|---|
| **Lanzamiento primeros clientes** | **−20 a −40 %** | Programa activo: primeros 5 proyectos o hasta 2026-12-31. El porcentaje exacto (20/25/30/40 %) lo decide el usuario por proyecto según margen. |
| Rush (<60 % plazo) | +30 % | sujeto a disponibilidad |
| Super-rush (<40 %) | +50 % | solo si no compromete calidad |
| Bundle (≥3 servicios) | −5 a −10 % | no acumulable con rush |
| Cliente recurrente (2º+) | −5 % | también retainers |
| Licencias terceros | costo directo | +10 % si AG-SERV gestiona |

---

## 6. Políticas transversales

- **Revisiones:** 2 rondas por entregable. Adicional: 10 % por ronda.
- **Calendario:** pausas >7 días re-agendan. Plazo corre desde anticipo + insumos completos.
- **PI:** traspaso al pago final. AG-SERV retiene derecho a mostrar en portafolio salvo NDA.
- **Alcance:** cambio = nueva línea de estimación. Jamás absorción silenciosa.

---

## 7. Estructura de pago

| Tamaño | Esquema |
|---|---|
| ≤ USD 500 | 100% anticipado (nuevos) |
| USD 500–2.000 | 50/50 |
| USD 2.000–8.000 | 40/30/30 |
| > USD 8.000 | hitos quincenales |

---

## 8. Exclusiones estándar

1. Hosting/dominios recurrente
2. APIs de IA / embeddings / cloud
3. Licencias de software/plugins/HDRI
4. Música/locución licenciada
5. Copywriting final del cliente
6. Mantenimiento post-entrega (retainer)
7. Traducciones fuera de ES/EN
8. Impuestos según residencia fiscal

---

## 9. Versionado

| Versión | Fecha | Notas |
|---|---|---|
| v1 | 2026-08-25 | Rate card inicial S/M/L/XL, USD únicamente |
| v2 | 2026-08-25 | **Dual moneda USD/COP** (mercado nacional separado) · **Nivel XS añadido** · **Descuento lanzamiento −20/40 %** · Escala ampliada a 5 tiers |
