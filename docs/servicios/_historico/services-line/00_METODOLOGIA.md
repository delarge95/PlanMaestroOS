> {0} Archivado en la consolidaci{1}n (ciclo 5): l{2}nea de cat{3}logo propia de agent/services. Contenido cubierto por los cat{3}logos can{1}nicos 01{4}07 de esta carpeta.

# AG-SERV · 00 — Metodología de estimación y cobro

> Versión 1.0 · 2026-08-25 · Owner: AG-SERV (rama `agent/services`)
> Fuente de verdad del CÓMO se estima y cobra. El QUÉ (tareas y rangos por servicio) vive en los catálogos C1–C7 de esta carpeta.
> Regla de trazabilidad: toda tarifa u hora publicada está anclada al doc `03_salary_benchmark_and_remote_colombia.md` (sección citada como doc-03) o está marcada explícitamente como **inferencia propia documentada**.

---

## 1. Principios de estimación

1. **Rangos, nunca cifras únicas.** Todo servicio se publica como rango min–max en USD, con criterios objetivos que ubican un caso concreto dentro del rango.
2. **Desglose antes de precio.** Ningún rango de paquete existe sin tabla de subtareas que lo soporte (`subtarea × tier → horas min/max`).
3. **Complejidad por criterios objetivos** (§3), medibles en el brief: piezas, presupuesto de triángulos, materiales, interactividad, integración. No por intuición.
4. **El precio es la suma del trabajo**, no un número negociado hacia atrás desde lo que "el cliente puede pagar". Los descuentos son explícitos y acotados (§5).
5. **Estimación ≠ cotización cerrada.** Los rangos sirven para scoping y expectativas; la cotización formal se emite por proyecto tras discovery y queda documentada aparte.
6. **Horas facturables conservadoras**: 120–140 h/mes (doc-03 §2.2). Ningún plan de ingresos asume 160 h facturadas.
7. **Fiscalidad fuera de alcance**: USD es la moneda de cotización; IVA/retenciones/exportación de servicios se validan con contador (doc-03 §7).

---

## 2. Rate card v1 (tarifas base por hora, USD)

| ID | Clase de trabajo | Alcance típico | Tarifa/h | Anclaje |
|---|---|---|---|---|
| RC-ART | Arte 3D offline | modelado, lookdev, iluminación, render, animación offline | 20–28 | Inferencia propia: banda global freelance USD 20–50/h (doc-03 §4.1, matriz operativa) pisada a la meta de entrada rápida para competitividad (doc-03 §9.1); coherente con mercado US de 3D artists descontado por acceso LATAM (doc-03 §4.9) |
| RC-RTA | Asset realtime / technical art | retopología, bake, LODs, optimización, shaders de soporte | 25–35 | Middle Unity Developer contractor Colombia USD 27–35/h (doc-03 §4.1 [lemon-core]); extremo artístico baja levemente el piso (inferencia propia) |
| RC-WEB | Dev integración web 3D / Unity WebGL | three.js/babylon.js, embeds, builds Unity WebGL, puentes JS | 27–38 | Ídem [lemon-core]; techo ampliado por especialización WebGL/technical visualization, ruta diferenciadora del perfil (doc-03 §4.3) |
| RC-AI | IA aplicada / automatización | LLM tooling, Python, RAG ligero, workflows | 28–40 | Python remoto LATAM Colombia entry→senior USD 30k–66k/año ≈ USD 14–32/h efectivas (doc-03 §4.7 [hiretalent-python]); premium por entrega llave-en-mano (inferencia propia); techo coherente con ruta USD 6k/mes ≈ USD 37.5/h (doc-03 §9.3) |
| RC-CON | Consultoría / arquitectura / auditoría | discovery, auditorías técnicas, roadmaps, acompañamiento | 40–55 | Proxy Technical Artist US promedio ~USD 66.69/h y rango 127k–152k/año (doc-03 §4.2 [zip-ta]) descontado por acceso contractor desde Colombia; categoría *strategic estimate* (doc-03 §2.1) |

### Consistencia con las metas de ingreso (doc-03 §9)

| Meta mensual bruta | Horas necesarias a bandas medias | Lectura |
|---|---|---|
| USD 1.500 (piso, §9.1) | ~54–75 h/mes | Un proyecto M o dos S al mes cubren el piso |
| USD 3.000 (objetivo 3–6 meses, §9.2) | ~86–111 h/mes | Alcanzable dentro de las 120–140 h facturables conservadoras |
| USD 6.000 (estratégico 12–24 meses, §9.3) | >150 h a banda media, o mezcla con RC-CON/proyectos L–XL | Requiere retainers + proyectos grandes; no es promesa de corto plazo |

---

## 3. Escala de complejidad S / M / L / XL

Cada tarea del catálogo declara qué dimensiones aplican. Valores objetivo medibles:

| Dimensión | S | M | L | XL |
|---|---|---|---|---|
| Piezas / objetos (ensamblaje CAD o escena) | ≤8 | 9–30 | 31–100 | >100 |
| Presupuesto de tris del asset final (realtime) | <10k | 10k–50k | 50k–150k | >150k o multi-escena |
| Materiales / texturas | ≤2 básicos | 2–4 sets PBR | >4 sets o shaders custom | librería/sistema de materiales paramétrico |
| Animación | ninguna o turntable | loop simple (≤2 clips) | secuencias múltiples/triggers | sistema riggado complejo o cinemática |
| Interactividad | ninguna / órbita básica | hotspots, UI de lectura | mecánicas custom (exploded, cutaway, configurador) | app completa con estado/datos/flujos |
| Integración web | embed pasivo | página existente con UI | sección/experiencia dedicada | aplicación web completa |

### Regla de escalado del tier

1. El tier final NO es un promedio: es el **segundo nivel más alto** entre las dimensiones aplicables (una sola dimensión disparada no arrastra todo el proyecto; dos sí).
2. Si ≥2 dimensiones caen en XL → proyecto XL → obligatorio discovery tarifado previo (fijo, ver catálogos) antes de comprometer rango.
3. Las **piezas repetidas cuentan una vez** (+instancing): 40 tornillos iguales = 1 tipo de pieza.

---

## 4. Fórmula de estimación (subtareas → paquete)

```text
precio_min = Σ horas_min(subtarea_i, tier) × tarifa_min(clase RC de subtarea_i)
precio_max = Σ horas_max(subtarea_i, tier) × tarifa_max(clase RC de subtarea_i)
redondeo   = múltiplos de USD 50
plazo_días = ⌈Σ horas_mid / 4⌉ días hábiles + margen de rondas de revisión (1 día por ronda)
```

Notas:
- Cada subtarea declara su clase RC (quién la ejecuta: arte, dev, IA, consultoría). Una tarea puede mezclar clases.
- Los rangos de horas YA incluyen QA interno y empaquetado de entregables; NO incluyen tiempos de espera de feedback del cliente (eso mueve el calendario, nunca el precio).
- Incertidumbre inherente ±15% asumida dentro de cada rango; si el discovery revela desviación >20% sobre el alcance estimado → re-cotización formal (§6).

---

## 5. Multiplicadores y ajustes

| Factor | Ajuste | Condición |
|---|---|---|
| Rush (plazo < 60% del estándar) | +30% | sujeto a disponibilidad real |
| Super-rush (< 40% del estándar) | +50% | solo si no compromete calidad verificable |
| Gestión multi-stakeholder (>3 revisores) | +10–15% | se detecta en discovery |
| Bundle (≥3 servicios combinados) | −5 a −10% | nunca acumulable con rush |
| Cliente recurrente (2º proyecto en adelante) | −5% | aplica también a retainers |
| Licencias de terceros (HDRI, plugins, assets stock, API) | costo directo | +10% solo si AG-SERV gestiona la compra |
| Idioma de entrega ES o EN | incluido | otros idiomas: fuera de alcance |

---

## 6. Políticas transversales

### Revisiones
- Incluidas: **2 rondas por entregable visual**, feedback consolidado en un solo documento/punto por ronda.
- Ronda adicional: 10% del valor del paquete por ronda, o horas reales × tarifa si resulta menor.
- Cambio de alcance (nueva funcionalidad, no refinamiento): línea de estimación nueva; jamás absorción silenciosa.

### Calendario
- Pausas de feedback >7 días hábiles re-agendan el calendario sin penalización para ninguna parte.
- El plazo corre desde la recepción del anticipo Y de los insumos completos (brief, archivos fuente, accesos).

### Propiedad intelectual
- Traspaso de derechos del entregable al pago final.
- AG-SERV retiene derecho a mostrar el trabajo en portafolio salvo NDA firmado (el caso TwinSight documenta este patrón).

---

## 7. Estructura de pago

| Tamaño del proyecto | Esquema |
|---|---|
| ≤ USD 500 | 100% anticipado (clientes nuevos; recurrentes: 50/50) |
| USD 500–2.000 | 50% anticipo / 50% entrega |
| USD 2.000–8.000 | 40% anticipo / 30% hito intermedio / 30% entrega |
| > USD 8.000 o > 6 semanas | hitos quincenales; última cuota tras aceptación final |

- Métodos: Wise/Payoneer/SWIFT, siempre reconciliables factura↔contrato↔pago (doc-03 §7.7).
- Contrato/SOW firmado antes de arrancar; define entregables, rondas, plazos y propiedad intelectual (doc-03 §6.2).
- Retainers: facturación mensual anticipada (catálogo C7).

---

## 8. Exclusiones estándar (aplican a TODO el catálogo)

Ningún paquete incluye, salvo acuerdo expreso por escrito:

1. Hosting, dominios e infraestructura recurrente (setup inicial sí; operación la paga el cliente).
2. Costos de API de modelos de IA / embeddings / almacenamiento cloud asociados.
3. Licencias de software, plugins, HDRI o assets de terceros que el cliente deba poseer.
4. Música, locución o efectos de sonido licenciados (costo directo del cliente).
5. Copywriting final de marketing del cliente (textos definitivos los provee el cliente).
6. Mantenimiento/evolución post-entrega (se contrata como retainer, catálogo C7).
7. Traducciones fuera de ES/EN.
8. Impuestos según residencia fiscal del cliente (doc-03 §7.5: validar tratamiento con contador).

---

## 9. Versionado de tarifas

| Versión | Fecha | Vigencia | Notas |
|---|---|---|---|
| v1 | 2026-08-25 | actual | Rate card inicial anclada a doc-03; primer catálogo C1–C7 |

Regla: cambiar una tarifa base = publicar rate card v(N+1) con changelog y re-anclaje citado; los proyectos ya cotizados cierran a su versión. Nunca se edita una versión vigente silenciosamente.
