# PROMPT MAESTRO — Construcción completa del Cotizador Web AG-SERV

> Copia TODO este texto como primer mensaje a un agente de razonamiento amplificado.
> Adjunta máximo 3 archivos: `catalogCore.ts`, `formula.ts`, `types.ts` (desde `src/data/services/`).

---

## QUIÉN ERES Y QUÉ CONSTRUYES

Eres un desarrollador frontend senior especializado en React + TypeScript + Astro. Vas a construir el
**cotizador web de AG-SERV**: una herramienta que permite a agencias de diseño y empresas industriales
obtener un rango orientativo de costo y tiempo para proyectos 3D (CAD→WebGL, renders, experiencias web,
IA integrada, etc.).

**Stack**: Astro 5 + React 19 + TypeScript strict + Zustand. Deploy estático en GitHub Pages.
Todo client-side, sin backend server.

## LA REGLA MÁS IMPORTANTE (si solo lees una línea de este prompt)

**El nivel de complejidad (XS/S/M/L/XL) NUNCA lo escoge el usuario. Se DERIVA automáticamente de los
drivers cuantitativos (sliders) + rúbrica cualitativa (preguntas visuales) que el usuario configura.**

El usuario describe QUÉ QUIERE mediante sliders y preguntas visuales. El sistema calcula QUÉ NIVEL
corresponde y muestra el precio para ese nivel. El usuario jamás ve un selector de "nivel de complejidad".

## CÓMO SE DERIVA EL NIVEL

Cada servicio tiene umbrales en sus drivers cuantitativos que mapean directamente a niveles:
- Ejemplo F1 (CAD→WebGL): ≤15 piezas = N1 · 15-60 = N2 · 60-150 = N3 · 150+ = N4
- Ejemplo A2 (Animación): ≤3s = XS · ~10s = N1 · ~30s = N2 · ~60s = N3 · 90+s = N4

Adicionalmente, la rúbrica cualitativa ajusta el nivel:
- Geometría orgánica (tela, cables) → +1 nivel
- Acabado close-up hero → +1 nivel
- Acabado viewport/thumbnail → -1 nivel
- Móvil exigente → +1 nivel (solo perf)
- Límites duros: nunca bajar de XS, nunca subir de XL

## CONTEXTO DEL NEGOCIO

AG-SERV ofrece servicios freelance de:
- **Render 3D** (estático y animación) para marketing y e-commerce
- **Assets 3D realtime** para WebGL y videojuegos (modelado, optimización, shaders, rigging)
- **Conversión CAD→WebGL** (el servicio insignia: convertir ensamblajes CAD industriales a assets web navegables)
- **Experiencias web 3D** (visores, configuradores, scrollytelling, minijuegos, AR)
- **VFX** (integración de 3D sobre footage real)
- **IA integrada** (chatbots RAG, automatización, procesos internos)
- **Consultoría y soporte** (discovery, auditorías, retainers)

El cliente típico es una **agencia de diseño** que trabaja para empresas industriales/ingenieriles.
NO entiende de términos técnicos 3D. Quiere saber: ¿qué puede ofrecerle a su cliente?, ¿cuánto cuesta?,
¿cuánto tarda?, ¿es realizable?

## MONEDA

- **USD** para contrataciones internacionales (tarifa plena)
- **COP** para contrataciones nacionales colombianas (significativamente más económico — mercado local, NO conversión TRM)
- El usuario selecciona moneda con un toggle persistente

## DESCUENTO LANZAMIENTO

- **−25 %** para primeros clientes (programa activo: primeros 5 proyectos o hasta 2026-12-31)
- Aplica en ambas monedas
- Se muestra como badge prominente y se puede desactivar

---

# DOCUMENTACIÓN COMPLETA DEL SISTEMA

A continuación está TODO el contenido de los archivos de especificación. Léelo completo antes de escribir código.



---

## ARCHIVO: docs/servicios/01_modelo_cobro.md

# 01 · Modelo de cobro AG-SERV

> v1.3 interna · 2026-08-25 · Estado: **propuesta pendiente de validación del usuario**. Este documento es la fuente de verdad de las bandas tarifarias, la fórmula de presupuesto y los términos comerciales. Todo catálogo (`02`–`04`) expresa **solo horas**; todo precio deriva de aquí por fórmula visible. Ningún número sin origen.

---

## 1. Alcance

Define cómo se estima, se cobra y se contrata el trabajo freelance del perfil (technical artist / ing. multimedia / ing. electrónico / artista 3D / AI specialist):

- **Cobro por paquetes de servicio** con rangos claros de precio y tiempo (nunca precio puntual suelto).
- Cada servicio se desglosa en **subtareas**; cada subtarea se estima en **niveles de complejidad** con rangos de horas.
- El presupuesto es `Σ (horas × banda tarifaria del nivel)` + directos + modificadores. Siempre min–max.
- La cifra final de un proyecto real se cierra en un **SOW (Statement of Work)** tras brief documentado (plantilla §9). Los rangos de este sistema son orientativos y alimentan esa conversación.

Fase futura (aprobación pendiente): web visualizadora que consuma estos catálogos (`docs/servicios/05_estimacion_ejemplos.md` §spec-slider).

### 1.5 Regla anti-ciegas

Si un driver no es medible en el intake, el servicio se cotiza como **fase discovery corta (G1)** o se declara
rango amplio con confidence `qualitative`. Nunca precio fijo "a ojo".

## 2. Anclas de mercado (fuentes citadas)

| Ancla | Valor | Fuente | Confianza |
|---|---|---|---|
| Freelance global tech | USD 20–50/h | doc-03 raíz §4.1 ("Global freelance") | Media |
| Middle Unity Developer Colombia | USD 27–35/h | doc-03 §4.1 (citando Lemon.io rate calculator 2026) | Media |
| Senior Unity EE. UU. (mediana) | USD 57/h | doc-03 §4.1 (Lemon.io) | Media |
| Strong senior San Francisco | USD 72–89/h | doc-03 §4.1 (Lemon.io) | Media |
| Senior Unity/3D worldwide contractor | USD 50–75/h | `Research/deep-research-report_04.md` | Media |
| Plataformas tech freelance LATAM | USD 15–30/h | `Research/deep-research-report_00.md` | Baja |
| Day rate contractor EE. UU. (cliente prioridad A) | USD 600–800/día ≈ 75–100/h | `Research/deep-research-report_13.md` | Media |
| Piso propio aceptable (contrato C-prioridad LATAM) | ≥ USD 2k/mes netos | doc-13 §prioridades + doc-27 §targeting | Estratégica |

Regla: las bandas de §3 deben quedar **dentro del corredor** formado por estas anclas (piso LATAM plataforma ↔ techo senior US descontado por ubicación Colombia). Si una revisión futura rompe el corredor, se documenta el motivo en este archivo (changelog §12).

## 3. Niveles de complejidad y bandas tarifarias

Cuatro niveles transversales a todos los servicios. La banda es la **tarifa efectiva USD/hora** aplicada a las horas de ese nivel.

> **v1.1 — Reconciliación de bandas:** los precios publicados en los catálogos `02`/`03`/`04` fueron calculados con la **banda operativa** (columna principal). El corredor amplio se conserva como referencia de techo/piso para la calibración trimestral (§10) y no debe usarse para presupuestar hasta que un cierre real lo justifique. Detalle del hallazgo: la v1 definía solo el corredor amplio, pero toda la aritmética publicada usaba la banda operativa — se documenta aquí para restaurar la trazabilidad (regla REGLAS §3.5).

| Nivel | Nombre | Definición operativa | **Banda operativa USD/h** | **Banda nacional COP/h** | Corredor USD (ref. calibración) | Ancla principal |
|---|---|---|---|---|---|---|
| **XS** | Micro | Alcance mínimo: micro-loops de 2–3 s, vistas thumbnail, props mini (≤2k tris), embeds simples. Puerta de entrada accesible. | **18–24** | **25–35 k** | 15–20 | Piso plataformas LATAM (research_00) · volumen |
| **N1** | Simple (S) | Bajo juicio técnico: setups repetibles, conversiones simples, QA, exports, tareas guiadas. Reversible y poco riesgosa. | **25–30** | **35–50 k** | 20–28 | Plataforma LATAM 15–30/h (research_00) · piso freelance global (doc-03) |
| **N2** | Estándar (M) | Trabajo profesional típico del perfil: modelado/optimización media, integración web convencional, shading PBR, animación básica. | **28–35** | **50–70 k** | 28–40 | Middle Unity Colombia 27–35/h (doc-03 · Lemon.io) |
| **N3** | Complejo (L) | Requiere criterio experto: shaders custom, arquitectura de web apps 3D, tracking/recon complejo, pipelines, performance crítica. | **35–45** | **70–95 k** | 40–60 | Interpolación LATAM-senior: 35/h (Lemon.io LATAM) → 57/h (mediana US, doc-03) |
| **N4** | Crítico (XL) | Territorio digital twin, simulación, IA integrada a medida, problemas sin receta. Alto riesgo y alto valor de negocio. | **45–55** | **95–130 k** | 60–85 | Strong senior SF 72–89/h descontado ubicación COL (~0.85×); day rate US 75–100/h (research_13/04) |

COP = pesos colombianos por hora para contratación NACIONAL, fijados contra el mercado local (significativamente
más económico que el internacional — ver §3.2). El corredor amplio se conserva como referencia de techo/piso para
la calibración trimestral (§10); no debe usarse para presupuestar hasta que un cierre real lo justifique.

Nota v1.3: se añade el nivel **XS** (demanda real de piezas pequeñas: micro-loops, thumbnails, embeds ligeros) y
la columna COP. La escala cualitativa que decide entre niveles vive en [`07_matriz_complejidad_cualitativa.md`](07_matriz_complejidad_cualitativa.md)
y su implementación `src/data/services/complexityRubric.ts`.
Confianza del conjunto: `inferred` — derivada de benchmarks públicos citados; **no validada aún contra cierres reales propios**. Primera calibración: tras los primeros 3 proyectos cerrados (ver §10).

### 3.1 Regla de redondeo operativa (ÚNICA para todo el sistema)

```text
tramo(v)       = 10 si v < 500  ·  50 si 500 ≤ v ≤ 2000  ·  100 si v > 2000
redondear(min) = floor al múltiplo de tramo(min)
redondear(max) = ceil  al múltiplo de tramo(max)
```

Un solo par de escaleras para mínimos y máximos, aplicado por el motor determinista (`src/data/services/formula.ts`,
`roundLegacy`). Los presupuestos publicados en `02`–`06` fueron **regenerados con esta regla** en el ciclo de
unificación (v1.2): las desviaciones menores (≤ $50) frente a ediciones anteriores eran drift de redondeo manual
y quedaron normalizadas. Tolerancia de auditoría: ±10 USD por extremo.

### 3.2 Moneda y mercados

| Mercado | Moneda | Base de fijación | Regla |
|---|---|---|---|
| Internacional | **USD** | Bandas operativas §3 (anclas doc-03/Research) | Tarifa plena |
| Nacional (Colombia) | **COP** | Mercado laboral local (salarios doc-03 §empleo local; competencia freelance nacional) | **Significativamente más económico que la conversión TRM** — se fija contra el mercado, nunca se deriva del USD |

- TRM de referencia SOLO informativa para presentación: **USD 1 ≈ COP 4.000** (2026-08-25, actualizable). Jamás se usa para calcular precios locales (`TRM_REFERENCIA.reglaEs` en `rateCard.ts`).
- Redondeo COP: múltiplos de **1.000** (min-floor / max-ceil). Piso por proyecto: **COP 400.000** (equivalente operativo del piso USD 100).
- Confianza de las bandas COP: `inferred` — pendiente validar contra ofertas/contratos locales reales (misma regla de calibración §10).
- Descuento **Lanzamiento primeros clientes −25 %** (§5) aplica en ambas monedas mientras el programa esté activo.
## 4. Fórmula de presupuesto

```text
subtotal_min = Σ_subtareas( horas_min_del_nivel_elegido × banda_min_del_nivel )
subtotal_max = Σ_subtareas( horas_max_del_nivel_elegido × banda_max_del_nivel )
presupuesto   = [ redondear(min) , redondear(max) ]  (§3.1)  + directos (§4.1) + modificadores (§5)
```

Reglas de la fórmula:

1. **Siempre dos cifras** (min–max). Prohibido publicar punto medio como "el precio".
2. Redondeo según §3.1 (min hacia abajo, max hacia arriba, mismos tramos).
3. Las horas provienen SIEMPRE del catálogo (`02`–`04`); prohibido inventar horas fuera de catálogo sin registrar el nuevo ítem primero.
4. La gestión de proyecto/comunicación está incluida hasta el **10 % de las horas totales**; el excedente se agrega como subtarea explícita (N2).
5. Cada estimación registra: fecha, versión de catálogo usada, nivel elegido por subtarea, confidence (`explicit | inferred | qualitative`) y supuestos del brief. Sin registro, la estimación no existe.

Ejemplo mínimo (trazabilidad completa):

```text
Servicio A1 Render estático, subtarea "Setup escena/iluminación", nivel N2, 6–10 h
  → min 6×28=168 · max 10×35=350
Subtarea "Render + post por imagen" (lote 3 imágenes), N1, 4–7 h
  → min 4×25=100 · max 7×30=210
Subtotal: 268–560 → redondeado §3.1: 260–560 USD (antes de directos y modificadores)
```

### 4.1 Costos directos traspasados (passthrough)

Conceptos que el cliente paga a costo + recibo, sin ocultarlos en horas:

| Concepto | Regla |
|---|---|
| Render farm / compute GPU cloud | costo real + recibo (markup 0 %; si gestionamos cuenta propia: markup 10 % declarado) |
| Assets/stock de terceros (texturas, HDRIs, modelos, música, plugins) | licencia elegida con el cliente; costo directo + recibo |
| APIs de IA (LLM, embeddings, TTS) | **BYOK por defecto** (cuenta del cliente); si corre en nuestra infra: estimado mensual aparte |
| Hosting/dominio/CDN | cuenta del cliente desde el día 1 |

## 5. Modificadores globales

Aplican sobre el subtotal calculado (tras directos). Se listan explícitamente en toda propuesta (SOW §9).

| Modificador | Efecto | Cuándo aplica |
|---|---|---|
| Urgencia (arranque < 72 h o timeline comprimido vs. plan normal) | ×1.25 sobre subtotal | Solo si compromete otros proyectos; se declara en SOW |
| Crítico (< 24 h de entrega o fin de semana) | ×1.50 sobre subtotal | Excepcional, máx 1 vez por cliente cada 90 días. Prohibido en servicios que exigen discovery (C3/C4/E4/G1) |
| Ronda extra de revisión (más allá de las 2 incluidas) | +horas N1 del servicio (típico 2–6 h) o 8–12 % del subtotal | Por ronda; feedback consolidado en un solo documento |
| Fuente editable (.blend/.max/.unity/.ai) | +30–50 % del subtotal | Solo si el cliente pide archivos fuente |
| Exclusividad de diseño/asset | Cotización aparte (referencia ×2–3 del valor del asset) | Negociada caso a caso; nunca implícita |
| Idioma del entregable (EN nativo-level copy) | Incluido | El perfil opera bilingüe (doc-05 READ) |
| Retainer activo (≥ 3 meses, G3) | −5–10 % en horas N1/N2 del scope recurrente | Ver `06_paquetes.md` §Retainers y catálogo 04 §G3 |
| **Lote/batch** (múltiples unidades del mismo servicio en un encargo) | **−15 % a −25 %** (lo fija cada ficha: F1 lote CADs, F2 pack sets, packs de renders) | Descuento sobre las unidades posteriores a la primera |
| **Cliente recurrente** (2.º proyecto cerrado y pagado) | **−5 %** (−10 % si además tiene retainer activo) | Sobre subtotal; acumulable con lote, no con urgencia |

| **Lanzamiento primeros clientes** | **−25 %** sobre subtotal | Programa activo: primeros 5 proyectos cerrados o hasta 2026-12-31. Acumulable SOLO con lote/batch; no acumula con urgencia ni recurrente. Motivo: cartera inicial — captar casos de estudio. |

Prohibido acumular urgencia × crítico (elige el mayor). Los modificadores nunca bajan el piso de USD 100 por proyecto.

## 6. Revisiones, alcance y cambios

1. **2 rondas de revisión incluidas** por entregable (feedback consolidado en un solo documento). Feedback en goteo se acumula como una ronda cuando sume el equivalente.
2. Fuera de alcance detectado → **adendum** con re-estimación por niveles (misma fórmula §4). Nunca absorción silenciosa de scope.
3. Cancelación por parte del cliente: kill fee proporcional — se paga el trabajo realizado hasta el hito en curso.
4. **Mora de pago**: a los 10 días corridos del vencimiento el trabajo se pausa; a los 20, se cancela conservando los pagos realizados.
5. Pausa por causa del cliente > 10 días hábiles: re-agendamiento sujeto a disponibilidad; precio congelado 60 días, después se re-cotiza.

## 7. Licencias y propiedad intelectual

- Salvo pacto distinto en SOW: el cliente recibe **licencia de uso comercial** del entregable final; el portfolio del perfil conserva derecho a mostrar el trabajo (salvo NDA explícito).
- Los **archivos fuente** (.blend/.max/.c4d/.unity/.ai) se **retienen por defecto**; su entrega es el modificador "Fuente editable" (§5).
- Assets de terceros se trasladan según su licencia, con costo directo (§4.1).
- Nota NoAI: si el cliente exige assets libres de herramientas generativas, se declara en intake — cambia pipeline (prohibido AI-assisted) y puede cambiar nivel/precio.

## 8. Pagos

| Tamaño del proyecto | Esquema |
|---|---|
| < USD 2.000 | **50 % anticipo / 50 % entrega** |
| USD 2.000–8.000 | **40 % inicio / 30 % hito intermedio / 30 % entrega** |
| > USD 8.000 | **30 % inicio + hitos semanales/quincenales** contra avance demostrable (último tramo contra aceptación) |

- Primer proyecto absoluto con un cliente: anticipo mínimo **50 %** independiente del tamaño.
- Proyectos N3/N4 SIEMPRE por hitos (nunca 50/50 de una sola vez).
- Vencimiento: neto 7–15 días desde factura. Mora: §6.4.
- Métodos: Wise/Payoneer preferidos por comisiones (`Research/deep-research-report_03.md`). PayPal/Stripe solo con recargo transparente (~3 %). ⚠️ Cuentas reales por confirmar — placeholder hasta validación del usuario (ticket abierto).
- Moneda USD base. Conversiones COP/EUR informativas, marcadas como tales.
- Retainers (G3): cobro mensual anticipado.
- Garantía: defectos de los entregables se corrigen sin costo durante 30 días post-entrega (no cubre cambios de alcance ni features nuevas).

### 8.1 Nota fiscal Colombia (informativa, no asesoría)

- Exportación de servicios: el cliente extranjero no retiene IVA; la renta local tributa sobre utilidad neta con tarifa progresiva (~19–39 %) (`Research/deep-research-report_03.md` §impuestos).
- Aportes como independiente (EPS ~12.5 % y pensión ~16 % sobre 40 % del IBC, ARL) están **dentro del cálculo de las bandas**: las tarifas de §3 son brutas, no netas.
- Confirmar régimen (simple/común) con contador antes de facturar. Placeholder hasta decisión del usuario.

## 9. Plantilla de SOW (toda propuesta se arma así)

1. Servicio(s) del catálogo con nivel por subtarea y drivers detectados en intake.
2. Tabla de horas por subtarea + presupuesto por nivel (fórmula §4, sin ocultar nada).
3. Directos traspasados listados (§4.1).
4. Modificadores aplicados con su % (§5).
5. Entregables exactos + formatos + criterio de aceptación.
6. Calendario con hitos de pago (§8).
7. Revisiones incluidas y política de change requests (§6).
8. Licencia aplicable (§7) + número de versión de catálogo usado.

## 10. Calibración continua

- Tras cada proyecto cerrado: registrar horas reales por subtarea vs. estimadas en `docs/servicios/bitacora_calibracion.md` (se crea con el primer cierre).
- Regla de ajuste: si 3 proyectos consecutivos cierran > 20 % fuera de rango en una familia, se recalibran sus horas (y se versiona el catálogo, changelog §12).
- Las bandas §3 se revisan trimestralmente contra nuevos benchmarks y contra la meta de ingreso mensual (doc-03 §3: 1.5k → 3k → 6k).

## 11. Confianza de las estimaciones

| Etiqueta | Significado | Uso |
|---|---|---|
| `explicit` | driver medible en intake (nº piezas, minutos, vistas) | rango estrecho, compromiso firme |
| `inferred` | driver deducido de material similar | rango medio, margen ±20 % declarado |
| `qualitative` | solo descripción verbal del cliente | rango amplio; suele requerir mini-discovery (G1) |

Toda ficha declara su confidence por defecto; el intake puede mejorarla. Drivers-first: ante duda entre dos
niveles, gana el peor caso gobernante para las subtareas afectadas y se documenta en el SOW.

## 12. Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| v1 | 2026-08-25 | Creación. Bandas N1–N4 derivadas de anclas doc-03/research. Pendiente validación usuario. |
| v1.1 | 2026-08-25 | **Reconciliación de bandas**: se separa banda operativa (25–30/28–35/35–45/45–55, la que usan todos los precios ya publicados en 02/03/05) del corredor amplio de referencia (20–28/28–40/40–60/60–85, queda para calibración). Se añade §3.1 regla de redondeo operativa con tolerancia ±10. Ejemplo §4 recalculado con bandas operativas. Sin cambio en ningún precio publicado. |
| v1.2 | 2026-08-25 | **Completamiento por unificación**: §3.1 pasa a ser la regla ÚNICA (dos tramos simétricos min-floor/max-ceil, ejecutada por el motor TS) y todos los presupuestos de 02–06 se regeneran con ella (drift manual ≤$50 normalizado; error real corregido en B4). Se añaden: §1.5 anti-ciegas, §4.1 directos traspasados, lote/batch y cliente recurrente en §5, mora y pausa en §6, retención de fuentes por defecto en §7, esquemas de pago por tamaño + garantía en §8, plantilla SOW §9, confianza §11. Referencias cruzadas de los catálogos re-mapeadas a esta numeración. |
| v1.3 | 2026-08-25 | **Dual moneda + nivel XS + lanzamiento**: banda nacional COP (mercado local más económico; redondeo 1.000; piso 400k) y nivel **XS/Micro** (18–24 USD · 25–35k COP). Nuevo modificador **Lanzamiento primeros clientes −25 %** (programa acotado a primeros 5 proyectos o 2026-12-31). Se publica §3.2 Moneda y mercados (regla anti-TRM) y la escala cualitativa vive ahora en `07_matriz_complejidad_cualitativa.md` + `complexityRubric.ts`. Motor: `estimateService/computeQuote` aceptan `currency`; paquetes pregenerados computables (`packages.ts`, incluye PK-CAD-WEBGL corporativo). Tests 44/44. |


---

## ARCHIVO: docs/servicios/02_catalogo_render_assets_rt.md

# Catálogo de servicios — Familia 3D (render offline, assets tiempo real, CAD, texturas)

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Cómo leer las tablas: cada subtarea muestra el rango de horas **por nivel** como `N1 a–b · N2 c–d · N3 e–f · N4 g–h`.
> El presupuesto total por nivel deriva de la fórmula del [`01_modelo_cobro.md`](01_modelo_cobro.md) §4
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
| **Total horas (con FX)** | **N1 7–15 · N2 16–41 · N3 41–97 · N4 97–220** |

\* N1 no incluye simulaciones; N2–N4 las incluyen cuando el brief las pide.

**Presupuesto por nivel:** N1 **$170–450** · N2 **$400–1450** · N3 **$1400–4400** · N4 **$4300–12100**
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
| **Total núcleo** | **N1 6–13 · N2 13–30 · N3 30–66 · N4 66–163** |

Deltas por variante (se SUMAN al núcleo):

| Delta | Horas por nivel |
|---|---|
| Interactividad básica (hotspots/highlight/selección) | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–32 |
| Animación en loop (rig simple o blendshapes + clip idle) | N1 4–8 · N2 8–16 · N3 16–35 · N4 35–80 |
| Animación interactiva (estados, input, transiciones) | N1 8–15 · N2 15–30 · N3 30–70 · N4 70–150 |

Target por defecto: WebGL móvil-first (presupuesto poligonal y texturas acordados en intake).
Motor target declarable: three.js / Babylon.js / Unity / Unreal / Godot.

#### B1 · Asset RT estático no interactuable — **$150–390 / $360–1050 / $1050–3000 / $2900–9000**
Props, escenografía, hero object para visor pasivo. Entrega típica: N1 1–2 días · N2 3–5 días · N3 1–2 semanas · N4 3–6 semanas.

#### B2 · Asset RT estático interactuable — **$200–550 / $470–1350 / $1300–3700 / $3600–10800**
Inspección con hotspots, corte por selección, info por parte. Entrega: N1 2 días · N2 ~1 semana · N3 2 semanas · N4 4–7 semanas.

#### B3 · Asset RT animado no interactuable — **$250–650 / $550–1650 / $1600–4600 / $4500–13400**
Loops (idle/giro/funcionamiento) para vitrina web o juego NPC pasivo. Entrega: N1 2–3 días · N2 ~1 semana · N3 2–3 semanas · N4 5–8 semanas.

#### B4 · Asset RT animado interactuable — **$350–850 / $750–2100 / $2100–6200 / $6100–17300**
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

**Presupuesto por nivel:** N1 **$120–360** · N2 **$330–950** · N3 **$900–2900** · N4 **$2800–7500**
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

**Presupuesto por nivel:** N1 **$150–390** · N2 **$360–1050** · N3 **$1000–3200** · N4 **$3100–9100**
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

**Presupuesto por nivel:** N1 **$50–210** · N2 **$190–600** · N3 **$550–1800** · N4 **$1750–4900**

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

**Presupuesto por nivel:** N1 **$120–420** · N2 **$390–1150** · N3 **$1100–3400** · N4 **$3300–9100**
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

**Presupuesto por nivel:** N1 **$120–360** · N2 **$330–1250** · N3 **$1200–4200** · N4 **$4100–13800**
Entrega: N1 1–2 días · N2 3–6 días · N3 2–3 semanas · N4 4–10 semanas.
Modificadores: **lote de múltiples modelos −15–25%**; entrega también en USDZ (AR) +10%; reporte perf firmado +5%.

---

### F2 · Generación de texturas y mapas

**Qué es:** sets PBR tileables (albedo/normal/roughness/metallic/height/AO) procedurales (Substance) o AI-assisted **con licencia verificada**. Unidad: 1 set 4K.
**Drivers:** unicidad del material (biblioteca existente vs custom), uso (tileable vs unique bake), restricción NoAI.
**Confidence por defecto:** `explicit`.

| Subtarea | Horas por nivel |
|---|---|
| Diseño/generación del set + calibración PBR (incluye check seamless + preview en contexto) | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| **Total horas/set** | **N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15** |

**Presupuesto por set:** N1 **$20–60** · N2 **$50–140** · N3 **$140–360** · N4 **$360–850**
Modificadores: pack 10 sets **−20%**; variante de color del mismo set +0,5 h; NoAI obligatorio → solo procedural (sin cambio de precio, cambia método).

---

## Apéndice — Deltas presupuestados por nivel (aporte revisión ciclo 1, d3b3861)

> Los totales B1–B4 pre-componen núcleo + un solo delta. Para cotizar **combinaciones de deltas** o
> **niveles mixtos** (p. ej. asset N3 con interacción N2), usar esta tabla: cada delta con su presupuesto
> independiente, derivado con la misma fórmula §4 del modelo (horas × banda del nivel, redondeo reglamentario).
> Complementa, no reemplaza, las tablas anteriores. B5–B8 son servicios standalone (sus secciones), no deltas.

| Delta sobre núcleo B | N1 | N2 | N3 | N4 | Presupuesto del delta (USD) |
|---|---|---|---|---|---|
| Interactividad básica (hotspots/highlight/selección) | 2–4 | 4–8 | 8–16 | 16–32 | N1 50–120 · N2 110–280 · N3 280–750 · N4 700–1800 |
| Animación en loop (rig simple/blendshapes + clip idle) | 4–8 | 8–16 | 16–35 | 35–80 | N1 100–240 · N2 220–600 · N3 550–1600 · N4 1550–4400 |
| Animación interactiva (estados, input, transiciones) | 8–15 | 15–30 | 30–70 | 70–150 | N1 200–450 · N2 420–1050 · N3 1050–3200 · N4 3100–8300 |

Los presupuestos de los deltas derivan de las horas de la sección Pipeline con las bandas vigentes del modelo;
los totales B1–B4 publicados arriba siguen siendo el precio canónico pre-compuesto (drift ≤3 % por redondeos
históricos del documento base — unificar en la revisión v2 del catálogo).

**Composición típica (ejemplo):** asset animado interactuable con vista explosionada en N3 =
servicio B4 (`$2100–6200`) + servicio B6 (`$1000–3200`) ≈ **$3100–9400** (aprox. por suma de rangos ya
redondeados; la cifra firme sale de re-derivar horas totales por la fórmula). En niveles mixtos sumar horas
y aplicar la banda de cada nivel — nunca sumar rangos redondeados para comprometer.


---

## ARCHIVO: docs/servicios/03_catalogo_web_experiencias.md

# Catálogo de servicios — Familia C (integración web 3D y experiencias)

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Convenciones de lectura y fórmula: ver [`01_modelo_cobro.md`](01_modelo_cobro.md).
> Los assets 3D que estas integraciones consumen se cotizan con la Familia B
> ([`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md)) o los provee el cliente.

---

### C1 · Visor 3D embebido ligero (Spline / Sketchfab / model-viewer tuneado)

**Qué es:** integrar y pulir un visor de plataforma existente dentro del sitio del cliente (sin motor propio).
**Drivers:** plataforma elegida, adaptación del asset a specs, nivel de customización de interacción.
**Confidence:** `explicit`.

| Subtarea | Horas por nivel |
|---|---|
| Selección plataforma + setup cuenta (plan lo paga el cliente) | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–5 |
| Adaptación asset a specs de plataforma | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| Embed responsive + lazy load | N1 1–2 · N2 2–3 · N3 3–5 · N4 5–8 |
| Config interacción (autorotate, hotspots nativos, AR) | N1 0,5–1 · N2 1–2 · N3 2–5 · N4 5–10 |
| QA cross-browser + entrega | N1 0,5–1 · N2 1–2 · N3 2–3 · N4 3–6 |
| **Total horas** | **N1 3,5–7 · N2 7–13 · N3 13–24 · N4 24–44** |

**Presupuesto:** N1 **$80–210** · N2 **$190–460** · N3 **$450–1100** · N4 **$1050–2500**
Entrega: N1 1 día · N2 2 días · N3 ~1 semana · N4 1–2 semanas.

---

### C2 · Visor custom three.js / Babylon.js

**Qué es:** visor a medida sobre engine JS: órbita con límites, hotspots, resaltado, panel info, loading UX, perf móvil.
**Drivers:** nº interacciones, fuentes de datos (CMS/API), target móvil, integración al stack del cliente.
**Confidence:** `explicit` tras definir lista de interacciones; si hay API externa → `inferred`.

| Subtarea | Horas por nivel |
|---|---|
| Scaffold proyecto + tooling (Vite bundler, loaders) | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Carga de asset + pipeline (GLB/Draco/KTX2) | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–25 |
| Controles cámara/orbit + límites | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–16 |
| Interacciones (hotspots, highlight, secciones) | N1 1–3 · N2 3–8 · N3 8–20 · N4 20–45 |
| UI overlay (labels, panel info, loading UX) | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–25 |
| Performance móvil + QA | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–25 |
| Deploy/integración al sitio del cliente | N1 0,5–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| **Total horas** | **N1 7,5–20 · N2 20–40 · N3 42–88 · N4 88–181** |

**Presupuesto:** N1 **$180–600** · N2 **$550–1400** · N3 **$1450–4000** · N4 **$3900–10000**
Entrega: N1 2–4 días · N2 ~1 semana · N3 2–3 semanas · N4 4–8 semanas.

---

### C3 · Web App 3D

**Qué es:** aplicación web completa con escena 3D como núcleo (SPA), datos desde CMS/API, múltiples vistas. Base sin auth/admin (opcional marcado).
**Drivers:** nº vistas/módulos, complejidad de datos, auth, plataformas objetivo.
**Confidence:** `qualitative` hasta discovery; todo proyecto C3 incluye fase discovery obligatoria en el SOW.

| Subtarea | Horas por nivel |
|---|---|
| Discovery/spec técnico | N1 3–6 · N2 6–12 · N3 12–24 · N4 24–40 |
| Setup proyecto + CI + deploy pipeline | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Escena 3D core (extensión de C2) | N1 8–15 · N2 15–35 · N3 35–80 · N4 80–160 |
| Capa datos (CMS/API, estado) | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| UI/UX páginas + responsive | N1 4–10 · N2 10–25 · N3 25–50 · N4 50–100 |
| Auth/admin básico (opcional) | N1 — · N2 0–10 · N3 10–25 · N4 25–50 |
| Testing + QA + documentación | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| **Total horas** | **N1 21–45 · N2 45–114 · N3 114–245 · N4 245–480** |

**Presupuesto:** N1 **$500–1350** · N2 **$1250–4000** · N3 **$3900–11100** · N4 **$11000–26400**
Entrega: N1 1–2 semanas · N2 3–5 semanas · N3 6–10 semanas · N4 10–20 semanas.
Proyectos N3/N4 SIEMPRE por hitos (§8 Pagos).

---

### C4 · Scrollytelling 3D

**Qué es:** experiencia narrativa donde el scroll controla la escena (secciones sincronizadas, timeline bound al progreso).
**Drivers:** nº secciones, complejidad de coreografía, assets provistos vs incluidos, fallback móvil.
**Confidence:** `explicit` con storyboard cerrado.

| Subtarea | Horas por nivel |
|---|---|
| Guion visual + storyboard de scroll | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Escena(s) + timeline scroll-binding | N1 4–10 · N2 10–25 · N3 25–60 · N4 60–120 |
| Copy/layout secciones + tipografía | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Perf móvil + fallback estático | N1 1–3 · N2 3–8 · N3 8–18 · N4 18–35 |
| QA dispositivos + deploy | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| **Total horas** | **N1 10–23 · N2 23–53 · N3 53–118 · N4 118–230** |

**Presupuesto:** N1 **$250–700** · N2 **$600–1900** · N3 **$1850–5400** · N4 **$5300–12700**
Assets 3D cotizados aparte (Familia B). Entrega: N1 3–5 días · N2 1–2 semanas · N3 3–5 semanas · N4 6–10 semanas.

---

### C5 · Catálogo interactivo / Configurador de producto

**Qué es:** visualizador configurable (materiales/partes/accesorios) con precio dinámico y share de configuración.
**Drivers:** nº variantes reales, integración e-commerce, persistencia/share, rendimiento con muchos swaps.
**Confidence:** `explicit` con matriz de variantes cerrada.

| Subtarea | Horas por nivel |
|---|---|
| Modelo de datos producto + variantes | N1 2–4 · N2 4–8 · N3 8–18 · N4 18–40 |
| Escena de configuración (swap materiales/partes) | N1 3–8 · N2 8–20 · N3 20–45 · N4 45–90 |
| UI selector + precio dinámico | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| Persistencia/share config (URL/hook carrito) | N1 1–3 · N2 3–8 · N3 8–18 · N4 18–40 |
| Perf + QA + deploy | N1 1–3 · N2 3–6 · N3 6–14 · N4 14–30 |
| **Total horas** | **N1 9–23 · N2 23–54 · N3 54–120 · N4 120–250** |

**Presupuesto:** N1 **$220–700** · N2 **$600–1900** · N3 **$1850–5400** · N4 **$5400–13800**
Modificador: integración e-commerce real (Shopify/Woo/custom) **+15–30 h** según plataforma, cotizado aparte tras discovery.
Entrega: N1 3–4 días · N2 1–2 semanas · N3 3–5 semanas · N4 6–10 semanas.

---

### C6 · Minijuego WebGL

**Qué es:** juego web simple de una mecánica (branding engagement, lead capture). Base: 1 mecánica, 1 nivel/nodo, branding aplicado. Assets artísticos pesados cotizados aparte.
**Drivers:** mecánica (runner/puzzle/quiz 3D/shooter on-rails), progresión, leaderboard/backend, plataformas.
**Confidence:** `inferred`; game design cierra el alcance antes de comprometer N3/N4.

| Subtarea | Horas por nivel |
|---|---|
| Game design doc corto | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Core loop + input | N1 6–12 · N2 12–30 · N3 30–70 · N4 70–150 |
| Integración arte/escena (assets aparte o provistos) | N1 2–4 · N2 4–10 · N3 10–25 · N4 25–50 |
| UI/HUD + score + estados | N1 2–4 · N2 4–10 · N3 10–20 · N4 20–45 |
| Audio hookup | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–12 |
| Build optimizada + QA + deploy | N1 2–4 · N2 4–10 · N3 10–20 · N4 20–40 |
| **Total horas** | **N1 14,5–29 · N2 29–71 · N3 71–157 · N4 157–327** |

**Presupuesto:** N1 **$360–900** · N2 **$800–2500** · N3 **$2400–7100** · N4 **$7000–18000**

---

### C7 · Build & optimización Unity WebGL

**Qué es:** llevar un proyecto Unity existente a web usable: loading, memoria, compresión, gates móviles.
**Drivers:** peso actual del build, dependencias pesadas, requisitos móviles.
**Confidence:** `inferred` hasta auditoría inicial (subtarea 1).

| Subtarea | Horas por nivel |
|---|---|
| Auditoría build settings/targets | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| Compresión assets/addressables/loading screen | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| Memoria/heap tuning + Brotli | N1 1–3 · N2 3–6 · N3 6–14 · N4 14–30 |
| Fallback/perf gates móvil | N1 0–2 · N2 2–6 · N3 6–15 · N4 15–35 |
| QA browsers + deploy CDN | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| **Total horas** | **N1 5–14 · N2 14–32 · N3 32–70 · N4 70–145** |

**Presupuesto:** N1 **$120–420** · N2 **$390–1150** · N3 **$1100–3200** · N4 **$3100–8000**

---

### C8 · Presentaciones web interactivas

**Qué es:** pitch deck/report web (slides navegables, animaciones, opcional data-driven). Base: 10 slides.
**Drivers:** nº slides, data en vivo, branding system existente.
**Confidence:** `explicit`.

| Subtarea | Horas por nivel |
|---|---|
| Sistema de slides + plantilla | N1 2–4 · N2 4–8 · N3 8–15 · N4 15–30 |
| Implementación slides (base 10) | N1 2–4 · N2 4–10 · N3 10–20 · N4 20–40 |
| Animaciones/transiciones + navegación | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–25 |
| Data binding (si aplica) | N1 — · N2 0–6 · N3 6–15 · N4 15–30 |
| Deploy + analytics opcional | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–8 |
| **Total horas** | **N1 5,5–12 · N2 12–32 · N3 32–66 · N4 66–133** |

**Presupuesto:** N1 **$130–360** · N2 **$330–1150** · N3 **$1100–3000** · N4 **$2900–7400**
Bloque adicional de 5 slides: +20–30%.

---

### C9 · AR web ligero (model-viewer / WebXR básico)

**Qué es:** ver el producto a escala real en el espacio del usuario (AR Quick Look iOS / Scene Viewer Android) con flujo QR.
**Drivers:** preparación AR del asset, flujos custom, testing en dispositivos físicos.
**Confidence:** `explicit` (checklist de compatibilidad conocida).

| Subtarea | Horas por nivel |
|---|---|
| Asset AR-compliant (usdz/glb, escala real) | N1 1–3 · N2 3–8 · N3 8–16 · N4 16–35 |
| Embed AR Quick Look / Scene Viewer | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| UI de lanzamiento + flujo QR | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–15 |
| QA en dispositivos reales | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–12 |
| **Total horas** | **N1 3,5–8 · N2 8–19 · N3 19–38 · N4 38–77** |

**Presupuesto:** N1 **$80–240** · N2 **$220–700** · N3 **$650–1750** · N4 **$1700–4300**
Nota: AR con tracking avanzado (image tracking, occlusion, WebXR profundo) NO está en esta ficha — se estima como proyecto a medida tras discovery.


---

## ARCHIVO: docs/servicios/04_catalogo_footage_ia_soporte.md

# Catálogo 04 — Footage real/VFX, Integración de IA, Gemelo de datos y Soporte

> v2.0 UNIFICADO · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Fusiona las familias D/E de ambas instancias (se promueve la descomposición más fina: D1 foto / D2 video /
> D3 FX standalone; E renumerada sin choques semánticos) y la familia G enriquecida (crédito de discovery,
> auditoría de performance, retainers escalables). Todos los presupuestos **regenerados** con la fórmula del
> [`01_modelo_cobro.md`](01_modelo_cobro.md) §4 (bandas operativas §3 + redondeo única §3.1) — ver changelog interno.
> Regla transversal de IA: **BYOK por defecto** (§4.1); consumo de APIs jamás embebido en el precio.

---

## Familia D — 3D sobre footage real y FX

### D1 · Compositing 3D sobre fotografía (por imagen)

Incorporar un modelo 3D sobre una foto real con integración creíble: reconocimiento de escena, resolución
de cámara, generación de planos según la escena, lighting match y retoque final. El modelo puede ser del
cliente o producirse aparte (Familia B/F1).

| Incluye | NO incluye |
|---|---|
| Análisis de escena, camera solve, layout 3D, integración CG, roto/grade puntual | Producción del asset 3D (catálogo 02), dirección de foto, color grading completo de pieza |

**Drivers:** complejidad del fondo (plano vs profundidad) · calidad de la foto · nº de capas CG · materiales reflectivos/translúcidos.
**Confidence por defecto:** `explicit` (1 foto = alcance cerrado).

| Subtarea | Horas por nivel |
|---|---|
| Análisis de escena/reconocimiento + plan de planos | N1 1–2 · N2 2–4 · N3 4–7 · N4 7–12 |
| Resolución de cámara (fSpy/manual) | N1 0,5–1 · N2 1–3 · N3 3–6 · N4 6–10 |
| Generación de planos/layout 3D de la escena | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–20 |
| Integración modelo + lighting match + render | N1 3–6 · N2 6–14 · N3 14–28 · N4 28–55 |
| Composición final (roto, grade, grain, QC) | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–20 |
| **Total horas** | **N1 6,5–15 · N2 15–33 · N3 33–65 · N4 65–117** |

**Presupuesto por nivel:** N1 **$160–450** · N2 **$420–1200** · N3 **$1150–3000** · N4 **$2900–6500**
Modificadores de ficha: vista adicional misma foto **−60 %**; pack ≥4 fotos **−15 %** (lote §5); foto con lente/perspectiva problemática → auditoría previa G2-a.

### D2 · Compositing 3D sobre video (por toma)

Integración de modelo 3D + FX dentro de un clip real (~5–10 s por toma): tracking/matchmove, planos de
escena, lighting match animado, render y composición.

**Drivers:** movimiento de cámara (estática < handheld < dolly/compleja) · motion blur · oclusiones · nº de elementos CG · FX requeridos.
**Confidence por defecto:** `explicit` por toma; secuencias encadenadas → `inferred`.

| Subtarea | Horas por nivel |
|---|---|
| Análisis footage + plan de toma | N1 1–2 · N2 2–5 · N3 5–9 · N4 9–15 |
| Tracking/matchmove | N1 1–3 · N2 3–8 · N3 8–16 · N4 16–30 |
| Layout/planos 3D de la escena | N1 1–3 · N2 3–7 · N3 7–14 · N4 14–25 |
| Integración modelo + lighting match + render | N1 4–8 · N2 8–18 · N3 18–36 · N4 36–70 |
| FX adicional (opcional\*) | N1 — · N2 2–8 · N3 8–20 · N4 20–45 |
| Composición final + QC entrega | N1 1–3 · N2 3–7 · N3 7–14 · N4 14–24 |
| **Total horas (sin FX)** | **N1 8–19 · N2 19–45 · N3 45–89 · N4 89–164** |

\* N1 no incluye FX; N2–N4 cuando el brief los pide.

**Presupuesto por nivel (sin FX):** N1 **$200–600** · N2 **$500–1600** · N3 **$1550–4100** · N4 **$4000–9100**
Variantes con FX incluido: N2 **$600–1850** · N3 **$1900–4950** · N4 **$4950–11550**
Entrega: N1 2–3 días · N2 ~1 semana · N3 2 semanas · N4 3–6 semanas.
Modificadores: toma adicional mismo set/tracking **−40 %**; versión vertical 9:16 **+10 %**; secuencia 3+ tomas encadenadas **−15 %**.

### D3 · FX / simulación standalone

Efecto puntual para un shot o escena: partículas, humo/volumétricos, fluidos, destrucción RBD,
magia/energía. Incluye setup, iteración artística y entrega integrada al pipeline del cliente.

**Drivers:** tipo de sim (partículas < volumétricos < fluidos/destrucción) · iteraciones artísticas · reutilización futura (setup paramétrico).
**Confidence por defecto:** `inferred` hasta referencias cerradas.

| Subtarea | Horas por nivel |
|---|---|
| Brief/referencia del efecto | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–6 |
| Setup/R&D del efecto | N1 2–4 · N2 4–10 · N3 10–22 · N4 22–50 |
| Simulación + iteraciones artísticas | N1 1–3 · N2 3–8 · N3 8–18 · N4 18–40 |
| Render/composición integrada al shot | N1 1–2 · N2 2–5 · N3 5–12 · N4 12–24 |
| **Total horas** | **N1 4,5–10 · N2 10–25 · N3 25–56 · N4 56–120** |

**Presupuesto por nivel:** N1 **$110–300** · N2 **$280–900** · N3 **$850–2600** · N4 **$2500–6600**
Modificadores: setup Houdini paramétrico REUTILIZABLE **+30 %** (+licencia §7); variante del mismo efecto **−50 %**.

---

## Familia E — Integración de IA

> Principios transversales: BYOK por defecto (§4.1); disclaimer visible en toda superficie; outputs de IA
> como borrador revisable cuando afectan contenido público; sin promesas de precisión — se declara la
> cobertura evaluada por los casos de prueba entregados.

### E1 · Asistente IA en sitio web (chat con RAG sobre contenido del cliente)

Chat embebido que responde con base en el contenido propio del cliente (documentación, catálogo, FAQ)
mediante RAG, con guardrails, disclaimers y control de costes.

**Drivers:** volumen/fuentes de contenido · idiomas · canales (web vs multi) · acciones permitidas.
**Confidence por defecto:** `explicit` si el contenido está ordenado; `inferred` si hay que estructurarlo.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Discovery/casos de uso + fuentes | 2–3 | 3–5 | 5–8 | 8–14 |
| 2 | Pipeline ingesta/embeddings/RAG | 4–8 | 8–16 | 16–30 | 30–60 |
| 3 | Prompt engineering + guardrails/disclaimers | 2–4 | 4–8 | 8–14 | 14–26 |
| 4 | Widget UI + integración web | 3–6 | 6–12 | 12–24 | 24–44 |
| 5 | Logging/analytics/moderación | 2–4 | 3–6 | 5–9 | 7–12 |
| 6 | Evaluación con casos de prueba + ajuste | 2–4 | 4–7 | 7–12 | 12–22 |
| 7 | Deploy/config BYOK + handoff | 1–2 | 2–5 | 5–9 | 9–16 |
| | **Total horas** | **16–31** | **30–59** | **58–106** | **104–194** |

**Presupuesto por nivel:** N1 **$400–950** · N2 **$800–2100** · N3 **$2000–4800** · N4 **$4600–10700**
Entrega: N1 3–5 días · N2 1–2 semanas · N3 3–4 semanas · N4 6–10 semanas.
Modificadores: segundo idioma **+10 %**; acciones agénticas (escritura en sistemas del cliente) **a cotización** tras discovery; operación continua → retainer G3-b.

### E2 · IA indirecta en web (automatización de procesos visibles)

IA que no se ve como chat: formularios inteligentes, generadores de cotización/configuración,
recomendadores, clasificación de leads, borradores de contenido asistidos dentro del sitio/app del cliente.

**Drivers:** nº de flujos automatizados · calidad de datos de entrada · integraciones existentes.
**Confidence por defecto:** `explicit` por flujo definido.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Discovery flujo/datos | 2–3 | 3–6 | 6–11 | 11–18 |
| 2 | Diseño de flujo/prompts/reglas | 1–3 | 3–6 | 6–12 | 12–22 |
| 3 | Implementación (formularios/generadores/clasificadores) | 4–8 | 8–20 | 20–42 | 42–80 |
| 4 | Integración de datos/APIs | 1–3 | 3–9 | 9–20 | 20–40 |
| 5 | QA/evaluación + ajuste | 1–3 | 3–7 | 7–14 | 14–26 |
| | **Total horas** | **9–20** | **20–48** | **48–99** | **99–186** |

**Presupuesto por nivel:** N1 **$220–600** · N2 **$550–1700** · N3 **$1650–4500** · N4 **$4400–10300**
Flujo adicional del mismo sistema **−35 %**. Entrega: N1 2–4 días · N2 1–2 semanas · N3 3–5 semanas · N4 6–12 semanas.

### E3 · IA en procesos internos (empresa/agencia)

Llevar IA a operaciones internas: auditoría de procesos, diseño del workflow y construcción de
automatizaciones (agentes internos, pipelines RAG privados, generadores de documentos), con capacitación
y documentación para autonomía del equipo.

**Drivers:** nº de procesos candidatos · madurez digital del equipo · privacidad de datos (on-premise encarece) · integraciones con herramientas existentes.
**Confidence por defecto:** `qualitative` hasta auditoría; pasa a `explicit` por proceso aprobado.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Auditoría de procesos + oportunidades | 3–5 | 5–10 | 10–18 | 18–30 |
| 2 | Diseño de solución/workflow | 2–4 | 4–8 | 8–16 | 16–30 |
| 3 | Build (automatizaciones/agentes/pipelines) | 6–14 | 14–40 | 40–90 | 90–180 |
| 4 | Capacitación + documentación | 2–4 | 4–9 | 9–16 | 16–30 |
| | **Total horas** | **13–27** | **27–67** | **67–140** | **140–270** |

**Presupuesto por nivel:** N1 **$320–850** · N2 **$750–2400** · N3 **$2300–6300** · N4 **$6300–14900**
Proceso interno adicional con base montada **−30 %**. Entrega: N1 1 semana · N2 2–4 semanas · N3 5–8 semanas · N4 10–20 semanas.

### E4 · Programa de adopción IA (diagnóstico → PoC → escala)

Programa estructurado para organizaciones que saben que quieren IA pero no tienen mapa: diagnóstico con
roadmap priorizado, PoC del caso #1 con medición, gobernanza de uso y capacitación de equipos.
**Requiere discovery (G1)** — no admite urgencia crítica (§5).

**Confidence por defecto:** `qualitative` hasta completar diagnóstico.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Diagnóstico + roadmap priorizado | 6–10 | 10–18 | 18–32 | 32–55 |
| 2 | PoC del caso #1 (alcance reducido E2/E3) | 8–16 | 16–36 | 36–72 | 72–140 |
| 3 | Plan de medición (ROI/adopción) + gobernanza | 2–4 | 4–8 | 8–14 | 14–24 |
| 4 | Capacitación de equipos + transferencia | 3–6 | 6–12 | 12–24 | 24–45 |
| | **Total horas** | **19–36** | **36–74** | **74–142** | **142–264** |

**Presupuesto por nivel:** N1 **$470–1100** · N2 **$1000–2600** · N3 **$2500–6400** · N4 **$6300–14600**
Escalado a casos #2..n: cotizados como E3 con **−30 %**. Duración típica: N1 2 semanas · N2 4–6 semanas · N3 8–12 semanas · N4 16–26 semanas.

### E5 · Auditoría puntual de IA (informe quick-wins)

Informe accionable corto: dónde la IA ayuda hoy, quick wins ordenados por ROI/riesgo, qué NO conviene
automatizar todavía. Es la antesala natural de E3/E4 cuando aún no hay presupuesto para programa.

| # | Subtarea | N1 | N2 | N3 |
|---|---|---|---|---|
| 1 | Entrevistas + inventario de procesos | 3–5 | 5–8 | 8–12 |
| 2 | Informe de oportunidades/riesgos/quick wins | 3–5 | 5–9 | 8–14 |
| 3 | Presentación de hallazgos | 1–2 | 2–3 | 3–5 |
| | **Total horas** | **7–12** | **12–20** | **19–31** |

**Presupuesto:** N1 **$170–360** · N2 **$330–700** · N3 **$650–1400** · N4: —
Confidence `inferred` (depende del acceso a la gente).

---

## F3 · Visualización técnica con datos vivos (digital twin ligero)

Gemelo visual con estado en tiempo casi real (telemetría → escena 3D). Formulación honesta:
*interactive technical visualization*, no "digital twin industrial" (doc-03 §4.4).

| Incluye | NO incluye |
|---|---|
| Arquitectura de datos, conexión a fuente (API/WebSocket), mapeo dato→visual, dashboard de estado, QA extremo a extremo | Sensores/hardware IoT, backend de telemetría del cliente, ML predictivo |

El asset gemelo se cotiza vía catálogo 02 (B/F1). Esta ficha cubre la capa de datos vistos.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Arquitectura de datos (fuentes, frecuencia, formato) | 3–5 | 5–9 | 8–14 | 12–20 |
| 2 | Conexión de datos vivos (API/MQTT/WebSocket + mock→real) | 4–8 | 7–13 | 11–20 | 16–30 |
| 3 | Dashboard/estado/alertas visuales sobre la escena | 3–6 | 5–10 | 8–15 | 12–22 |
| 4 | QA extremo a extremo | 2–3 | 3–5 | 5–9 | 7–12 |
| | **Total horas** | **12–22** | **20–37** | **32–58** | **47–84** |

**Presupuesto:** N1 **$300–700** · N2 **$550–1300** · N3 **$1100–2700** · N4 **$2100–4700**
Si la fuente de datos no existe aún: entrega con feed simulado documentado (mock explícito); la conexión real es change request medible.

---

## Familia G — Soporte, consultoría y continuidad (transversal)

No produce un asset: produce certeza (G1), diagnóstico (G2) o continuidad (G3). Los demás catálogos la
referencian ("requiere discovery G1", "retainer G3").

### G1 · Discovery & scoping de proyecto

Convierte una necesidad difusa en un SOW firmable: intake, revisión de materiales, análisis técnico
ligero, definición de alcance con niveles del catálogo y presupuesto trazable. Obligatoria para C3/C4
(web app y experiencias), E4 y todo proyecto >USD 3.000 (§8).
**Drivers:** nº de stakeholders · estado del material de entrada · incertidumbre técnica.
**Confidence por defecto:** n/a — ES el mecanismo que genera confidence.

| Subtarea | Horas por nivel |
|---|---|
| Intake/entrevistas + revisión de materiales | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–14 |
| Análisis técnico/auditoría ligera | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–20 |
| Definición de alcance/SOW + estimación con catálogo | N1 1–2 · N2 2–4 · N3 4–8 · N4 8–14 |
| Presentación y revisión con el cliente | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–6 |
| **Total horas** | **N1 3,5–8 · N2 8–16 · N3 16–32 · N4 32–54** |

**Presupuesto por nivel:** N1 **$80–240** · N2 **$220–600** · N3 **$550–1450** · N4 **$1400–3000**
Entrega: informe de discovery + SOW borrador en 2–5 días hábiles según nivel.
**Regla de crédito:** si el proyecto descrito se contrata dentro de los 60 días, el **50 % del discovery se acredita** al primer hito.

### G2 · Auditoría, consultoría y mentoría

#### G2-a · Auditoría de performance WebGL / app 3D

Diagnóstico de una web/app 3D existente que rinde mal: perfilado de carga y FPS, draw calls, memoria,
pipeline de assets. Entrega reporte priorizado (quick wins vs trabajo estructural) + sesión de lectura.

| Subtarea | Horas por nivel |
|---|---|
| Perfilado (load, FPS, draw calls, memoria, red) | N1 2–4 · N2 4–9 · N3 9–18 · N4 18–35 |
| Análisis de código/pipeline/assets | N1 2–5 · N2 5–12 · N3 12–25 · N4 25–50 |
| Reporte priorizado + sesión de lectura | N1 1–2 · N2 2–5 · N3 5–9 · N4 9–15 |
| **Total horas** | **N1 5–11 · N2 11–26 · N3 26–52 · N4 52–100** |

**Presupuesto por nivel:** N1 **$120–330** · N2 **$300–950** · N3 **$900–2400** · N4 **$2300–5500**
La implementación del plan de mejoras se cotiza aparte (familias B/C).

#### G2-b · Consultoría técnica por hora

Pipeline 3D, shaders, integración web, arquitectura IA, decisiones build-vs-comprar. Tarifa según banda
del tema (§3); mínimo por sesión **2 h**; remota con agenda previa. Bloques prepagados 4 h/8 h disponibles
(sin recargo, no reembolsables, vigencia 3 meses).

#### G2-c · Mentoría/formación de equipo (sesión de 2 h)

Preparación + sesión práctica sobre un tema acordado (realtime, CAD→WebGL, IA aplicada).
Prep + sesión: 3–5 h banda N2 → **$80–180 por sesión**. Serie de 4+ sesiones **−10 %**.

### G3 · Retainers mensuales

Cobro mensivo ANTICIPADO (§8). Horas no usadas rollean **50 % máx.** al mes siguiente. El retainer activo
aplica **−10 %** adicional sobre proyectos nuevos (§5). Trabajo fuera de horas: cotización normal con ese
descuento. Consumo de APIs SIEMPRE aparte (§4.1).

| Plan | Horas/mes | Presupuesto mensual | SLA respuesta | Uso típico |
|---|---|---|---|---|
| Lite | 4 h | **$110** | <48 h hábiles | vigilancia + fixes puntuales (post-entrega nuestra o auditoría G2-a inicial) |
| Standard | 8 h | **$230** | <48 h hábiles | iteración ligera de visor/configurador/contenido |
| Pro | 16 h | **$450** | <24 h hábiles | evolución activa de web app / gemelo |
| Business | 40 h | **$1150** | <24 h hábiles | operación continua multi-servicio |
| Enterprise | 80 h | **$2300** | <8 h hábiles | equipos con demanda sostenida; incluye G2-b prioritario |
| IA Ops (add-on a cualquier plan) | +4/+8 h | **+$120 / +$240** | <24 h hábiles | monitoreo calidad E1/E3, ajuste prompts/RAG, reporte de uso y coste API |

(Banda blended N2 con −10 % retainer ya aplicado: ≈ $28,4/h efectivo.)

---

### Matriz resumen catálogo 04 v2

| Servicio | N1 | N2 | N3 | N4 | Discovery |
|---|---|---|---|---|---|
| D1 Compositing sobre foto | $160–450 | $420–1200 | $1150–3000 | $2900–6500 | No |
| D2 Compositing sobre video (toma) | $200–600 | $500–1600 | $1550–4100 | $4000–9100 | No |
| D3 FX/simulación standalone | $110–300 | $280–900 | $850–2600 | $2500–6600 | No |
| E1 Asistente IA web (RAG) | $400–950 | $800–2100 | $2000–4800 | $4600–10700 | Ligero |
| E2 IA indirecta en web (por flujo) | $220–600 | $550–1700 | $1650–4500 | $4400–10300 | No |
| E3 IA procesos internos | $320–850 | $750–2400 | $2300–6300 | $6300–14900 | Auditoría |
| E4 Programa adopción IA | $470–1100 | $1000–2600 | $2500–6400 | $6300–14600 | **Sí (G1)** |
| E5 Auditoría puntual IA | $170–360 | $330–700 | $650–1400 | — | No |
| F3 Digital twin ligero (datos) | $300–700 | $550–1300 | $1100–2700 | $2100–4700 | **Sí (G1)** |
| G1 Discovery & scoping | $80–240 | $220–600 | $550–1450 | $1400–3000 | — (crédito 50 %) |
| G2-a Auditoría perf WebGL | $120–330 | $300–950 | $900–2400 | $2300–5500 | — |
| G3 Retainers | $110–2300/mes según plan | | | | — |

### Changelog del archivo

| Versión | Cambio |
|---|---|
| v2.0 | Unificación de las dos líneas paralelas (04_catalogo_vfx_ia + 04_catalogo_vfx_ia_consultoria): se promueve D fino (foto/video/FX), E renumerada E1–E5 sin colisiones de significado, G enriquecido (crédito discovery, auditoría perf, retainers escalados Lite→Enterprise). E1 incorpora fila de logging/moderación (total recalculado). TODOS los presupuestos regenerados con fórmula 01 §4 + redondeo §3.1. Los archivos previos se movieron a `_historico/`. |


---

## ARCHIVO: docs/servicios/05_estimacion_ejemplos.md

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


---

## ARCHIVO: docs/servicios/06_paquetes.md

# Paquetes comerciales AG-SERV — bundles derivados del catálogo

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Cada paquete ES una combinación de servicios de los catálogos `02`–`04`. Su presupuesto se calcula
> **sumando horas y aplicando las bandas del [`01_modelo_cobro.md`](01_modelo_cobro.md)** (guardarrail §5.2 de
> [`05_estimacion_ejemplos.md`](05_estimacion_ejemplos.md): nunca se suman rangos ya redondeados).
> Todo paquete incluye: intake, 2 rondas de revisión por entregable, QA y entrega documentada (§6/§9 modelo).

## Tabla de paquetes v1

| ID | Paquete | Composición | Horas totales | Presupuesto | Plazo |
|---|---|---|---|---|---|
| PK-01 | **Render Starter** | A1: hero + 2 ángulos mismo setup (N1–N2) | 6–29 h | **$150–900** | 3–6 días |
| PK-02 | **Hero Film 30 s · tier N2** | A2 ×3 bloques 10 s, −15% lote (N2) | 46–105 h | **$1250–3700** | 2–4 semanas |
| PK-03 | **Hero Film 30 s · tier N3** | ídem con FX/sim (N3) | 104–247 h | **$3600–11200** | 4–8 semanas |
| PK-04 | **WebGL Showcase** | B1 asset RT + C2 visor custom (ambos N1–N2) | 13,5–70 h | **$330–2450** | 1–2 semanas |
| PK-05 | **Configurador e-commerce · N2** | B2 asset interactuable + C5 configurador | 41–92 h | **$1100–3300** | 3–5 semanas |
| PK-06 | **Configurador premium** | ídem con componentes N3 (escena o reglas complejas) | 72–158 h | **$2500–7200** | 4–8 semanas |
| PK-07 | **Experiencia de marca (scrollytelling)** | ~3 assets B (N1–N2) + C4 experiencia (N2–N3) | 41–157 h | **$1100–7100** | 4–8 semanas |
| PK-08 | **Digital Twin Pilot** | F1 CAD→WebGL (N2) + F3 gemelo con datos (N2) | 51–124 h | **$1400–4400** | 3–6 semanas |
| PK-09 | **AI Starter** | E1 chatbot RAG en sitio (N1–N2, BYOK) | 9–48 h | **$220–1700** | 1–2 semanas |
| PK-10 | **AI Office** | E2 automatización interna + E4 agente de agencia (N2) | 51–115 h | **$1400–4100** | 3–6 semanas |

Notas transversales:
- **AR add-on**: C9 N2 sobre cualquier paquete con asset RT: +8–19 h → **+$220–700**.
- Los paquetes asumen targets web estándar; requisitos móviles exigentes pueden subir el nivel de las subtareas de perf (se declara en SOW).
- Modificadores globales (urgencia, recurrente, licencias) aplican igual que en ventas à-la-carte (§5 modelo).
- API/LLM/compute SIEMPRE BYOK o traspasado con recibo (§4.1 modelo).

## Retainers (G3) — soporte y evolución continua

| Plan | Horas/mes | Presupuesto mensual | SLA respuesta | Uso típico |
|---|---|---|---|---|
| Lite | 4 h | **$110–140/mes** | <48 h hábiles | ajustes menores, actualización de assets |
| Standard | 8 h | **$220–280/mes** | <48 h hábiles | iteración de visor/configurador, contenido |
| Pro | 16 h | **$450/mes** | <24 h hábiles | evolución continua de web app / gemelo; planes 40/80 h {AR} catálogo 04 §G3 |

Reglas retainer: cobro mensual anticipado; horas no usadas rollean 50% máx. al mes siguiente; trabajo fuera de
las horas se cotiza aparte con −10% por ser cliente recurrente (§5 modelo).

## Cómo elegir paquete (guía interna de venta)

1. ¿El entregable es una IMAGEN/VIDEO? → PK-01..03.
2. ¿Es un PRODUCTO en la web? → PK-04 (mostrar) / PK-05..06 (vender con variantes).
3. ¿Es una EXPERIENCIA? → PK-07.
4. ¿Hay DATOS/CAD técnico detrás? → PK-08.
5. ¿El cliente quiere IA? → PK-09 (cara pública) / PK-10 (procesos internos).
6. ¿Relación de largo plazo? → cualquiera + retainer G3 (descuento recurrente automático).


---

## ARCHIVO: docs/servicios/07_matriz_complejidad_cualitativa.md

# 07 · Matriz de complejidad cualitativa

> v1.0 · 2026-08-25 · Owner: AG-SERV · Complementa [`01_modelo_cobro.md`](01_modelo_cobro.md) §3.
> Los drivers cuantitativos (nº piezas, segundos, vistas) fijan el nivel base; esta matriz captura las
> variables **cualitativas** que suben o bajan ese nivel. Implementación machine-readable:
> `src/data/services/complexityRubric.ts` (`RUBRICA_CUALITATIVA`, `aplicarRubrica()`).

---

## 1. Regla de aplicación

1. El intake fija el nivel **base** por los drivers cuantitativos de la ficha.
2. Cada dimensión de esta matriz se clasifica contra el brief → produce un delta (−1 / 0 / +1 nivel).
3. Se aplica la regla del **peor caso gobernante** (01 §11): si dos dimensiones empujan en direcciones
   distintas para la misma subtarea, gana la más exigente y se documenta en el SOW.
4. Límites duros: nunca bajar de **XS**, nunca subir de **XL**.

## 2. Dimensiones

### 2.1 Complejidad geométrica de las piezas *(asset-rt · datos · render)*

| Clase | Descriptor | Delta | Nota |
|---|---|---|---|
| Prismática | Cajas, placas, tubo recto, superficies duras tolerantes | 0 | El caso por defecto de CAD mecánico limpio |
| Freeform moderada | Carenas curvas, fillets múltiples, hélices, superficies suaves | +1 | Aplica si **>30 % de las piezas relevantes** la presentan |
| Orgánica/continua | Tela, líquido, esculpido, cables complejos trenzados | +1 | **Obligatoria aunque sea una sola pieza** |

Ejemplo (drone): 40 piezas prismáticas + carenas curvas = N2 base +1 → **N3**. Si además trae 3 roscas
reales, ver 2.3 (densidad funcional).

### 2.2 Acabado visual requerido *(render · asset-rt · vfx)*

| Clase | Descriptor | Delta |
|---|---|---|
| Viewport / thumbnail / vista a distancia | Sirve preview web, fondo de escena | −1 (habilita XS) |
| Marketing estándar | PBR limpio sobre HDRI, primer plano moderado | 0 |
| Close-up hero | Macro, SSS, cristal, tela en primer plano, reflejos críticos | +1 |

### 2.3 Densidad funcional por pieza *(datos · asset-rt)*

| Clase | Descriptor | Delta | Coste oculto |
|---|---|---|---|
| Pieza pasiva | Carcasa, tapa, panel, soporte | 0 | — |
| Pieza con mecánica real | Roscas verdaderas, engranajes dentados, articulaciones móviles | +1 si dominan | **Rosca real ≈ +2–4 h por pieza** aunque el nivel no cambie |

### 2.4 Exigencia técnica del target *(web-3d · asset-rt)*

| Clase | Descriptor | Delta |
|---|---|---|
| Desktop web estándar | Presupuesto de peso/perf convencional | 0 |
| Móvil exigente / peso agresivo / 60 fps garantizados | Presupuesto de rendimiento contractual | +1 (solo subtareas de perf/QA) |

## 3. Anclas rápidas por tipo de pieza (cheat-sheet de intake)

| Pieza típica | Clase geométrica | Señal de nivel |
|---|---|---|
| Tornillo, placa, bracket | Prismática | No sube |
| Carena curva, hélice | Freeform moderada | +1 si dominan |
| Rosca real (tornillería funcional) | Mecánica real | +2–4 h/pieza |
| Manguita/cable trenzado | Orgánica | Tratar como orgánica (+1) |
| Turbina/impelidor | Freeform + precisión | +1 |
| Textil/junta de goma | Orgánica | +1 |

## 4. XS — qué cabe en el nivel Micro

Pensado para entradas accesibles y volumen: micro-loops de producto de **2–3 s** (A2), thumbnails y
vistas viewport (A1/D1), props mini ≤2k tris (B), embeds ligeros ya servidos por plataforma (C1),
sets de textura simples (F2). En paquetes, XS habilita ofertas de lote económico (p. ej. PK-MICRO-LOOP).

## 5. Relación con el motor

- `complexityRubric.ts` exporta `RUBRICA_CUALITATIVA` (esta matriz, machine-readable) y
  `aplicarRubrica(nivelBase, deltas[])` con límites duros XS↔XL.
- El cotizador futuro usará estas dimensiones como **sliders/chips secundarios** tras el driver principal;
  cada delta queda registrado en la estimación (trazabilidad 01 §4.5).


---

## ARCHIVO: docs/servicios/08_plan_webapp_cotizador.md

# 08 · Plan de arquitectura — Web App Cotizador AG-SERV

> v1.0 · 2026-08-25 · Owner: AG-SERV · Estado: spec aprobada para implementación (prompt en `PROMPT_FRONTEND_COTIZADOR.md`).
> Producto: cotizador/showcase público orientado a **agencias de diseño** (sus clientes finales: empresas
> ingenieriles/industriales). Principio rector: **mínima carga cognitiva**, máxima claridad visual,
> cero jerga técnica en superficie, trazabilidad total bajo demanda.

---

## 1. Principios de producto

1. **Dos puertas, un mismo motor.** Presets (rápido, recomendado) o construcción desde cero (wizard guiado).
   Ambos consumen el MISMO motor determinista (`computeQuote`) — nunca hay dos fuentes de precio.
2. **Una pregunta por pantalla.** El wizard nunca muestra más de una decisión principal a la vez.
3. **El cliente habla necesidades, no jerga.** Sliders etiquetados como preguntas ("¿Cuántos modelos…?");
   los términos técnicos viven en tooltips y en el desglose colapsable.
4. **Visual antes que numérico.** Cada slider cuantitativo tiene un ayudante visual (SVG por capas /
   secuencia de imágenes). Los números acompañan; no lideran.
5. **Estimación ≠ cotización.** Disclaimer permanente en el panel de resultado; la cifra firme se cierra en SOW (01 §9).
6. **Estático y determinista.** Todo corre client-side consumiendo `src/data/services/**` (principio §0.5 del
   plan maestro). Sin backend server, sin APIs externas, funciona offline.

## 2. Arquitectura

```
src/pages/cotizador.astro                 ← página pública (isla React 19, lazy)
src/components/services/
├── CotizadorApp.tsx                      ← root: router interno Entry → Preset | Wizard | Catalog
├── state/
│   ├── useQuoteStore.ts                  ← zustand + persist (moneda, selecciones, modificadores)
│   └── selectors.ts                      ← derivados: QuoteResult memoizado vía computeQuote
├── steps/
│   ├── EntryScreen.tsx                   ← "¿Qué necesitas?" 3 puertas
│   ├── PresetGallery.tsx                 ← cards de paquetes (presets)
│   ├── PresetConfig.tsx                  ← config específica del preset elegido
│   ├── wizard/GoalStep.tsx               ← necesidad → familia sugerida
│   ├── wizard/ServiceStep.tsx            ← card de servicio dentro de la familia
│   ├── wizard/ConfigureStep.tsx          ← sliders + rúbrica cualitativa + add-ons
│   ├── wizard/ContextStep.tsx            ← moneda, lote, urgencia, lanzamiento (badge auto)
│   └── wizard/SummaryStep.tsx            ← desglose trazable + CTA
├── controls/
│   ├── SliderPiezas.tsx                  ← 5→150+ con DronePieces visual
│   ├── SliderDetalle.tsx                 ← low→high poly con PolyDetail visual
│   ├── SliderSegundos.tsx                ← 2–90 s con marcas XS/S/M/L/XL
│   ├── OrganicCards.tsx                  ← 3 cards (recta/curva/orgánica) — selección, no slider
│   └── SegmentedLevel.tsx                ← XS·S·M·L·XL con tooltip de descriptor
├── visuals/
│   ├── DronePieces.tsx                   ← drone SVG por capas (grupos se añaden con el slider)
│   ├── PolyDetail.tsx                    ← mismo asset en 3 densidades (flat/shaded/high)
│   └── OrganicSet.tsx                    ← trio de imágenes/cards para geometría
└── panels/
    ├── QuotePanel.tsx                    ← sticky: horas, subtotal, descuentos, TOTAL rango
    ├── BreakdownDrawer.tsx               ← "¿Cómo se calcula?" líneas subtarea × banda
    └── Disclaimer.tsx                    ← copy obligatorio (ver §6)
src/lib/services/ui.ts                    ← adapters: buildQuoteInput(), formatters Intl es-CO/en-US,
                                            labels de niveles, mapping necesidad→familia
```

**Reglas técnicas:** reutilizar `src/components/ui/**` y tokens existentes · Zustand ya está en deps ·
sin dependencias nuevas (sliders nativos estilizados; 3D diferido a fase 2 con `<model-viewer>` lazy) ·
formato moneda con `Intl.NumberFormat('es-CO' | 'en-US')` · `prefers-reduced-motion` respetado ·
isla hidratada solo en `/cotizador`.

## 3. Flujo — puerta 1: PRESETS

Entry → card de preset → `PresetConfig` con sliders propios → QuotePanel en vivo.

| Preset | Configurador (controles) |
|---|---|
| **PK-CAD-WEBGL** Conversión CAD corporativa → WebGL ⭐ | Slider nº modelos (1–20, default 5) afecta cantidad F1 · SegmentedLevel global S/M/L · Chip "Vista explosionada" (B6 add-on) · Target desktop/mobile |
| **PK-CAD-TWIN** Gemelo visual piloto | Slider nº modelos · Toggle "Datos vivos" (mock→real: nota change request) |
| **PK-LANZAMIENTO** Film + web interactivo | Toggle tipo de toma (foto/video) en D1 · SegmentedLevel por bloque (colapsado en avanzado) |
| **PK-MICRO-LOOP** Pack micro-loops 2–3 s | Slider cantidad (4–12, XS fijo) · Chips de plataforma (web/redes) |

Badge automático **"−25 % Lanzamiento"** visible cuando `firstClientLaunch` esté activo (default ON en
primera visita; editable en ContextStep).

## 4. Flujo — puerta 2: DESDE CERO (wizard)

| Paso | Pantalla | Decide |
|---|---|---|
| 1 | **Tu objetivo** | Chips de necesidad → sugiere familia (mapping §5) |
| 2 | **El servicio** | Card(s) de servicio de esa familia, descripción de una línea |
| 3 | **Configúralo** | Slider del driver principal + rúbrica cualitativa como preguntas visuales + add-ons chips |
| 4 | **Contexto** | Moneda, cantidad/lote, urgencia, lanzamiento |
| 5 | **Resumen** | Desglose trazable colapsable + disclaimer + CTA |

Mapping objetivo→familia: *Mostrar producto en 3D* → C1/C2 (±B) · *Vender con variantes* → Web App (C3) ·
*Explicar cómo funciona* → F1/B2/B6 · *Video de producto* → A2/A1/D · *IA en sitio/procesos* → E1–E5 ·
*Tengo archivos CAD/STP* → push directo al preset PK-CAD-WEBGL.

## 5. Puerta 3: CATÁLOGO EXPERTO

Acordeón A–G con fichas completas de los markdowns (drivers, incluye/no incluye, tabla XS–XL en horas,
presupuesto derivado en vivo con la moneda activa). Colapsado por defecto; pensado para el visitante
técnico que quiere leerlo todo.

## 6. Copy obligatorio (no negociable)

- Bajo TODO rango: *"Rango orientativo, no cotización. La cifra firme se cierra en un SOW."*
- Servicios IA: *"Consumo de APIs por cuenta del cliente (BYOK)."*
- Lanzamiento: usar `LAUNCH_PROGRAM.alcanceEs` textual.
- Assets demo inexistentes: placeholder etiquetado *"demo por producir"* — jamás inventar casos.

## 7. Fases

- **F1 (esta spec):** flujo completo funcional con visuales SVG/imagen-placeholder, dual moneda, presets + wizard + catálogo.
- **F2:** assets 3D demo reales (doc-33 sprint) sustituyen placeholders; `<model-viewer>` lazy.
- **F3:** integración visual con el sitio público (coordinación AG-PORT vía ticket) + analítica de eventos.


---

## ARCHIVO: docs/servicios/09_plan_ux.md

# 09 · Plan de UX — Cotizador AG-SERV

> v1.0 · 2026-08-25 · Owner: AG-SERV · Estado: **implementado** (capa UX en `src/lib/services/ux.ts` +
> componentes `controls/`·`visuals/`; ver §7). El DISEÑO visual (estética, marca, ilustración final, assets 3D
> demo) se delega al agente de diseño — este documento define qué recibe y qué NO le corresponde.

---

## 1. Objetivo

Que una agencia de diseño (o su cliente industrial) obtenga un rango orientativo de costo/tiempo **sin
fricción**: máximo 2 interacciones antes del primer número, una decisión por pantalla, cero jerga técnica en
superficie y feedback causa→efecto inmediato ante cualquier cambio.

## 2. Principios anti-carga-cognitiva (vinculantes)

| # | Principio | Aplicación |
|---|---|---|
| P1 | **Reconocer > recordar** | Toda opción visible con etiqueta humana; nada depende de memoria de pasos anteriores |
| P2 | **≤ 6 opciones por decisión** | Presets primero (efecto pastelera); chips de necesidad = 6; niveles mostrados como XS·S·M·L·XL discretos |
| P3 | **Progressive disclosure** | Avanzado (rúbrica fina, nivel por componente) colapsado tras "Ajustar detalles" |
| P4 | **Feedback causa→efecto inmediato y acotado** | Al mover un control cambian SOLO 3 cosas: número humano, chip de nivel S/M/L/XL y el ayudante visual. Nunca "parpadea toda la pantalla" |
| P5 | **Discreto > continuo cuando hay tramos** | Los precios saltan por umbrales reales; el slider lo hace evidente con ticks y snap |
| P6 | **Defaults inteligentes** | N2 · 5 modelos · lanzamiento ON · moneda persistida. Cero pantallas en blanco |
| P7 | **Prevención > corrección** | Urgencia crítica deshabilitada con explicación donde no aplica (discovery); pisos visibles antes de comprometer |
| P8 | **Consistencia posicional** | El TOTAL vive siempre en el mismo lugar (panel persistente / última fila del resumen) |

## 3. Inventario de sliders/controles (dónde y cómo)

| # | Control | Servicios | Tipo | Rango / opciones | Ayudante visual (ejecutado) | Feedback en vivo |
|---|---|---|---|---|---|---|
| S1 | **Nº de piezas CAD** ("¿Cuántos modelos…?") | F1, PK-CAD-WEBGL/TWIN | Slider discreto + snap a umbrales | 1–20 modelos (presets) · 1–150 (desde cero) | `DronePieces` SVG por capas: grupos que SE AÑADEN al avanzar | "≈ N piezas" + chip nivel auto (S/M/L/XL) |
| S2 | **Detalle poligonal** ("¿Cuánto detalle…?") | B1–B4, C2 | Segmentado 3 estados | Low / Medio / High | `PolyDetail`: MISMO asset en 3 densidades (silueta → facetado → suave+wire), activo resaltado | Chip nivel sincronizado (Low↔XS/S, High↔XL) |
| S3 | **Duración** ("¿De cuántos segundos…?") | A2 | Slider continuo con snap | 2–90 s | `ImageSequence` turntable: frames que rotan más lentamente a mayor duración; marcas XS(2–3)/S(10)/M(30)/L(60)/XL(90) | Duración legible + chip nivel + nota "micro-loop" si ≤3 s |
| S4 | **Cantidad / lote** ("¿Cuántas unidades…?") | A2-pack, F1 lote, PK-MICRO-LOOP | Stepper −/+ | según servicio | Contador grande + **precio marginal**: "+cada unidad ≈ $X–$Y" | Total recalculado; descuento lote visible como línea propia |
| S5 | **Organicidad de piezas** *(rúbrica)* | asset/datos/render | 3 cards seleccionables (NO slider) | Recta / Curva / Orgánica | `ChoiceCards` con mini-ilustración por clase | Chip nivel si delta=+1 |
| S6 | **Acabado visual** *(rúbrica)* | render/asset/vfx | 3 cards | Viewport / Marketing / Close-up hero | Ídem | Ídem (−1 habilita XS) |
| S7 | **Target técnico** *(rúbrica)* | web/asset | Toggle 2 opciones | Desktop estándar / Móvil exigente | Icono perf + nota "sube solo QA/perf" | Nota en resumen |
| S8 | **Urgencia** | todos | Segmentado 3 | Ninguna / <72 h (+25 %) / <24 h (+50 %) | Semáforo (verde/ámbar/rojo) + aviso disponibilidad; crítico DESHABILITADO con explicación en servicios con discovery | Descuento/recargo como línea propia |
| S9 | **Moneda** | global | Segmentado persistente | USD / COP | Bandera-less: códigos claros; COP muestra nota "mercado nacional" la primera vez | Todo el cotizador recalcula |

**Regla de oro de sliders:** el ayudante visual representa el EXTREMO hacia el que se mueve el usuario
(más piezas = drone más cargado; más detalle = malla más densa). Nunca decorativo: debe cambiar SIEMPRE
que cambia el valor.

## 4. Matriz de ayudas visuales — qué tecnología ahora vs diseño

| Ayuda | Ahora (UX implementada) | Fase diseño (agente de diseño) |
|---|---|---|
| Drone por capas (S1) | ✅ SVG vectorial por grupos con transición | Ilustración refinada / iconset de marca |
| Detalle poligonal (S2) | ✅ SVG tri-estado interactivo | Reemplazo por renders reales low/mid/high del demo drone |
| Turntable duración (S3) | ✅ Secuencia genérica crossfade (frames placeholder generados) | Strip real de renders del producto demo (doc-33) |
| **Modelo 3D básico** | 🔶 `Model3DFrame`: marco honesto "demo 3D por producir" con spec lista para `<model-viewer>` (CDN requiere aprobación — ticket) | Integrar `<model-viewer>` + assets GLB del sprint doc-33; conectar slider→camera/orbit |
| Cards orgánico/acabado (S5/S6) | ✅ Cards con pictograma SVG simple | Fotografía/ilustración final |

## 5. Arquitectura de decisión (flujo)

```
Entry ──► [A] Presets ──► Config preset ──┐
      ├──► [B] Desde cero (wizard 5 pasos, 1 decisión/pantalla):
      │      1 Goal (6 chips) ──► 2 Service (cards de familia sugerida)
      │      ──► 3 Configure (S1–S7 según ficha + rúbrica como preguntas)
      │      ──► 4 Context (S8 urgencia + lote + moneda ya global)
      │      ──► 5 Summary
      └──► [C] Catálogo experto (colapsado por defecto)
QuotePanel persistente (P8) en A-config/B3+ y Summary completo.
```

Gating: "Siguiente" deshabilitado solo cuando falta una decisión OBLIGATORIA (nunca por campos
opcionales). Progreso: "Paso X de 4" + barra. Back siempre disponible sin pérdida de estado.

## 6. Microcopy (reglas)

- Sliders formulados como **pregunta directa** + unidad humana: "¿Cuántos modelos necesitas convertir?".
- Término técnico solo dentro de tooltip (`title`) o drawer de trazabilidad.
- Todo rango acompañado del disclaimer fijo; cifras SIEMPRE formateadas Intl según moneda.
- Modificadores nunca ocultos: aparecen como línea "original → modificador → final".

## 7. Implementación (hecho en este ciclo)

| Pieza | Archivo |
|---|---|
| Specs de controles por servicio + copy humanizado + preguntas de rúbrica | `src/lib/services/ux.ts` |
| SmartSlider (P4/P5), Segmented, ChoiceCards, Stepper marginal | `src/components/services/controls/*` |
| PolyDetail tri-estado, ImageSequence crossfade, Model3DFrame F2-ready | `src/components/services/visuals/*` |
| Wizard separado Goal→Service→Configure→Context (+progreso y gating) | `src/components/services/steps/wizard/*` |
| QuotePanel agrupado por componente con labels humanos | `src/components/services/panels/QuotePanel.tsx` |

## 8. Delegado al AGENTE DE DISEÑO (fuera de mi alcance UX)

1. Sistema visual: paleta/tipografía final, logo, ilustración de cards, estados hover/focus estilizados.
   Único requisito: contraste AA y legibilidad (hoy garantizado con neutros).
2. Assets demo REALES para sustituir placeholders (drone low/high, turntable strip): sprint doc-33.
3. Integración `<model-viewer>` para S1/S2 en fase 3 (requiere aprobar script CDN — ticket a AG-CORE).
4. Micro-interacciones premium (spring physics, parallax ligero) — opcional, sin sacrificar P4.
5. Responsive fino >1080 px y pruebas de contraste con herramientas automáticas.


---

## ARCHIVO: docs/servicios/README.md

# docs/servicios — Sistema de servicios freelance AG-SERV

> Fuente de verdad del catálogo, tarifas y estimación freelance. Owner: AG-SERV (ficha §3.10 de
> `docs/agents/PLAN_MULTIAGENTE.md`). Moneda USD. Todos los rangos derivan de `01_modelo_cobro.md` —
> ningún número sin fórmula detrás.
>
> **Estado: UNIFICADO (ciclos 3–4, 2026-08-25).** Ciclo 4 añade: dual moneda USD/COP, nivel XS, programa primeros clientes −25 %, paquetes computables y matriz cualitativa. El directorio fue construido por múltiples instancias de la
> misma sesión duplicada por un bug del entorno; este ciclo fusionó ambas líneas, regeneró todos los
> presupuestos con el motor determinista y archivó el material paralelo en `_historico/`.

## Índice canónico

| Archivo | Contenido |
|---|---|
| [`01_modelo_cobro.md`](01_modelo_cobro.md) | **v1.2** — Bandas operativas N1–N4 (+ corredor de calibración), redondeo única §3.1, fórmula, directos §4.1, modificadores §5, revisiones/mora §6, licencias §7, pagos §8, plantilla SOW §9, calibración §10, confianza §11 |
| [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md) | Familia A (render offline), B1–B8 assets RT (núcleo + deltas + apéndice de presupuestos por delta), F1 CAD→WebGL ⭐, F2 texturas |
| [`03_catalogo_web_experiencias.md`](03_catalogo_web_experiencias.md) | Familia C1–C9: visores low-code/custom, web apps, scrollytelling, configuradores, minijuegos, Unity WebGL, presentaciones, AR web |
| [`04_catalogo_footage_ia_soporte.md`](04_catalogo_footage_ia_soporte.md) | **v2 unificado** — D (compositing foto/video, FX standalone), E1–E5 (IA: chat RAG, indirecta web, procesos internos, programa adopción, auditoría), F3 digital twin ligero, G (discovery acreditable, auditoría perf, consultoría, retainers escalables) |
| [`05_estimacion_ejemplos.md`](05_estimacion_ejemplos.md) | **v2** — Flujo de estimación, caso drone CAD ⭐ (derivación visible), spec del cotizador con sliders, guardarraíles de composición, checklist QA |
| [`06_paquetes.md`](06_paquetes.md) | PK-01..PK-10 + retainers (alineados a G3) + guía de venta |
| [`07_matriz_complejidad_cualitativa.md`](07_matriz_complejidad_cualitativa.md) | Dimensiones cualitativas que suben/bajan niveles (geometría, acabado, densidad funcional, target) + cheat-sheet de intake |
| [\ 8_plan_webapp_cotizador.md\](08_plan_webapp_cotizador.md) | Arquitectura del cotizador web |
| [\ 9_plan_ux.md\](09_plan_ux.md) | Plan UX: sliders S1{E}S9, ayudas visuales |
| [`REGLAS_AG-SERV.md`](REGLAS_AG-SERV.md) | Carta/reglas del agente |

## Código (espejo determinista — ficha §3.10 F0)

`src/data/services/**` — contratos (`types.ts`), rate card doble (operativa v0 + corredor draft v1),
fórmula pura (nivel fijo y mixto), catálogo core A/B/F1/F2/C1-C3/D1/G1 con nivel XS, **44 tests** +
CLI: `scripts/validateServices.ts` (regenera todos los presupuestos sin aritmética manual).
Fuente única de dinero en código: `rateCard.ts` — ahora DUAL: USD internacional + COP nacional (`RATE_CARD_COP_V1`, mercado local más económico; TRM solo informativa). Incluye motor de quotes (`computeQuote`: modificadores lanzamiento −25 %/recurrente/lote/urgencia), **paquetes pregenerados computables** (`packages.ts`, ej. PK-CAD-WEBGL) y rúbrica cualitativa (`complexityRubric.ts`).

## `_historico/` — material preservado (no usar para cotizar)

| Archivo | Procedencia |
|---|---|
| `04_catalogo_vfx_ia.md` | Línea rica D/E original — promovido dentro de 04 v2 |
| `04_catalogo_vfx_ia_consultoria.md` | Reescritura simplificada D/E/G — fusionada en 04 v2 |
| `05_catalogo_soporte_consultoria.md` | Familia G rica — promovida a 04 v2 §G |
| `CATALOGO_SERVICIOS.md` · `METODOLOGIA_ESTIMACION.md` | Material paralelo T1–T4 (≈ N1–N4): verificación cruzada realizada en ciclo 3; metodología absorbida por 01 v1.2 |

## Flujo de uso

1. Intake con cliente → identificar servicio(s) y medir drivers.
2. Asignar nivel por subtarea → sumar horas → aplicar bandas/redondeo (01 §3–§4).
3. Sumar directos (§4.1) + modificadores (§5) → SOW (§9).
4. Si el pedido encaja en un paquete → cotizar con `06`.
5. Verificación: `npx tsx scripts/validateServices.ts` (regenera A/B/F1/F2) + checklist de `05` §6.
6. Fase futura aprobada: el cotizador web consume estos datos según spec de `05` §3.


---

## ARCHIVO: docs/servicios/REGLAS_AG-SERV.md

# AG-SERV — Agente de Servicios (freelance: pricing, scoping y estimación)

> Ficha operativa del agente. Complementa (no reemplaza) `docs/agents/PLAN_MULTIAGENTE.md`.
> Alta pendiente de registro oficial: ticket abierto en `docs/agents/tickets.md` para añadir la ficha §3.10 al plan maestro.
> Nota de consolidación (2026-08-25): existían intentos previos vacíos de este agente (`agent/serv`, `agent/services`, `agent/servicios`, todos con 0 commits sobre `main`). Se estandarizó **`agent/servicios`** como identidad única tras detectar churn concurrente en `.worktrees` por otro proceso del entorno.

---

## 1. Identidad

**AG-SERV** gestiona y planifica los **métodos de cobro y trabajo** del perfil como freelance technical artist / ingeniero multimedia / AI specialist: catálogo de servicios, desglose en subtareas, rangos de tiempo y costo por nivel de complejidad, términos de pago e IP. Es la capa económica que alimentará (fase futura) una web visual de presupuestos orientativos con sliders interactivos.

| | |
|---|---|
| **Rama** | `agent/servicios` |
| **Worktree** | `E:\Laboral\.worktrees\servicios` |
| **Arranque estándar** | `cd E:\Laboral\.worktrees\servicios && git merge main --no-edit` |
| **Idioma de entrega** | Documentación y datos en español; UI futura bilingüe ES/EN |

## 2. Territorio (matriz de ownership)

- **OWN** — crea/modifica libremente:
  - `docs/servicios/**` (carta, metodología, catálogo)
  - `src/data/servicios/**` (catálogo machine-readable + tipos)
  - `src/lib/servicios/**` (motor de estimación puro, testeable)
  - `src/components/servicios/**`, `src/pages/app/servicios/**` (UI fase 3: cotizador/slider)
  - tests y validadores propios (`src/data/servicios/__tests__/**`)
- **READ** — consulta, jamás modifica:
  - docs raíz 01 (perfil), 02 (posicionamiento), **03 (benchmark salarial — ancla de tarifas)**, 07/20 (estrategia portafolio), 33/36 (sprint y launch)
  - `docs/agents/PLAN_MULTIAGENTE.md` completo
  - territorio AG-PORT (sitio público, CV, PortfolioSimulator) — coordinación vía PR/ticket, nunca invasión
- **FORBIDDEN**:
  - todo lo OWN de otros agentes; `src/pages/*.astro` públicos (AG-PORT); `src/components/career/**` y `src/data/career/**` (AG-CAREER); tokens/nav/shell/layouts (TICKET a AG-CORE); `package.json`/configs raíz (TICKET)

## 3. Reglas heredadas (vinculantes, de PLAN_MULTIAGENTE §0)

1. Solo trabajo en mi worktree; nada de push; merge a `main` solo vía PR revisado.
2. **Regla de Oro**: cambios aditivos o con aprobación explícita del usuario; nunca borrar trabajo consolidado.
3. Commits por tarea, prefijo de dominio `feat(servicios):` / `docs(servicios):` / `fix(servicios):`.
4. Verificación por commit: `npx astro check` (0 errores) + `npm test` (verde) cuando toco código; docs puros no requieren build.
5. Un número visible sin trazabilidad es un bug: toda cifra deriva de tarifa base × horas × multiplicadores documentados en la metodología.

## 4. Reglas particulares de AG-SERV

1. **Rango ≠ cotización.** Los rangos del catálogo son estimaciones internas/orientativas. Una cifra presentada a cliente como compromiso requiere aprobación explícita del usuario.
2. **Sin inventos**: ningún ejemplo de cliente, URL, testimonio o caso real fabricado. Los escenarios del catálogo son hipotéticos y se etiquetan como "escenario de referencia".
3. **Moneda base USD**, anclada al doc-03 (freelance global USD 20–50/h; contractor LATAM Unity USD 27–35/h). Conversión COP solo como capa de presentación futura.
4. **Modularidad sobre combinatoria**: las variantes (interactivo/no, animado/estático, web/juego) son *add-ons* sobre un asset base, no servicios duplicados. Evita la explosión 2×2×2 de precios.
5. Cada servicio documenta sus **variables de precio** (drivers) explícitamente: nº piezas, budget de polígonos, rondas de revisión, urgencia, etc.
6. Nada fiscal/legal como asesoría: remitir a doc-03 y su regla crítica (validar con contador en Colombia).

## 5. Flujo de trabajo por ciclo

1. Reparar worktree si el entorno lo eliminó: `git worktree prune && git worktree add E:\Laboral\.worktrees\servicios agent/servicios`.
2. `git merge main --no-edit` en el worktree.
3. Leer este archivo + `STATUS-servicios.md` + metodología vigente.
4. Ejecutar tareas del ciclo (1 commit c/u), verificar, actualizar STATUS.
5. Al cerrar ciclo: PR a `main` para revisión del usuario.

## 6. Roadmap de fases propias

- **Fase 1 (actual): definición.** Metodología de estimación + catálogo completo de servicios/subtareas con rangos tiempo-costo (documento fuente de verdad).
- **Fase 2: machine-readable.** Catálogo como datos TS tipados + motor de estimación puro + tests.
- **Fase 3: cotizador visual.** Web/UI con sliders por servicio mostrando escenarios min↔max (ej.: drone CAD simple → ensamblaje complejo) con precio y tiempo proyectados. Integración coordinada con AG-PORT.
- **Fase 4: operación.** Registro real de propuestas/cotizaciones enviadas vs estimado, calibración de tarifas con datos propios.

---

# INSTRUCCIONES DE IMPLEMENTACIÓN

## LO QUE YA EXISTE EN EL REPO (NO reescribir)

El motor de cálculo ya está implementado y verificado (310/320 tests pasando) en `src/data/services/`:
- `catalogCore.ts`: 33 servicios con subtasks y horas por nivel XS-N4
- `formula.ts`: `estimateService()`, `computeQuote()` con modificadores
- `rateCard.ts`: bandas USD operativas (25-55) + COP nacionales (25k-130k) + corredor calibración
- `packages.ts`: 6 paquetes predefinidos computables
- `complexityRubric.ts`: matriz cualitativa machine-readable
- `types.ts`: todos los tipos TypeScript

## LO QUE DEBES CONSTRUIR

Una página en `src/pages/cotizador.astro` con una isla React en `src/components/services/CotizadorApp.tsx`.

### Estructura del cotizador (una sola página, sin navegación)

**SECCIÓN 1: Selector de servicio**
- Lista de TODOS los servicios agrupados por familia (Render, Assets RT, Web 3D, VFX, IA, Datos, Soporte)
- Cada servicio muestra: nombre, descripción de una línea, entregables principales
- Al seleccionar uno, aparece la configuración específica

**SECCIÓN 2: Configuración del servicio seleccionado**

Para CADA servicio, los controles se generan dinámicamente según sus drivers:

Si el servicio tiene driver "nº de piezas" (ej: F1 CAD):
- Slider de 1 a 200 piezas
- AYUDA VISUAL: drone SVG que se llena de piezas al mover el slider
- El nivel se DERIVA automáticamente: ≤15=N1, 15-60=N2, 60-150=N3, 150+=N4
- Muestra chip: "Nivel calculado: M (Estándar)"

Si el servicio tiene driver "segundos" (ej: A2 animación):
- Slider de 2 a 90 segundos
- AYUDA VISUAL: secuencia de imágenes que muestra la progresión
- Nivel derivado: ≤3s=XS, ~10s=N1, ~30s=N2, ~60s=N3, 90+=N4

Si el servicio tiene driver "detalle poligonal" (ej: B1-B4):
- Selector de 3 opciones con imágenes: Low poly / Medio / High poly
- Nivel derivado automáticamente

Para TODOS los servicios, mostrar las preguntas de rúbrica cualitativa como cards visuales:
- "¿Cómo son tus piezas?" → Rectas / Curvas / Orgánicas (con pictogramas)
- "¿Desde qué distancia se verá?" → Lejos / Marketing / Close-up hero
- "¿Dónde va a correr?" → Desktop / Móvil exigente
- "¿Tienen mecánica real?" → No / Sí (roscas, engranajes)

Cada respuesta ajusta el nivel automáticamente (aplicarRubrica).

**SECCIÓN 3: Add-ons opcionales**
- Checkboxes con los add-ons del servicio (vista explosionada, USDZ AR, reporte perf, etc.)

**SECCIÓN 4: Cantidad y modificadores**
- Stepper de cantidad (con descuento por lote visible)
- Toggle urgencia (sin apuro / pronto +25% / crítico +50%)
- Toggle lanzamiento −25% (ON por defecto)
- Toggle cliente recurrente −5%

**SECCIÓN 5: Resultado (siempre visible, sticky en mobile)**

- Rango de precios GRANDE: $X,XXX – $X,XXX
- Horas estimadas: XX–XX h
- Tiempo de entrega: X–XX días hábiles
- Qué recibes: lista de entregables ✓
- Qué NO incluye: lista con ⚠️
- Botón "¿Cómo se calcula?" → expande desglose por subtarea
- Disclaimer: "Rango orientativo, no cotización. La cifra firme se cierra en un SOW."
- CTA: "Solicitar cotización firme →"

### Chat IA (botón flotante 💬)

- Widget de chat que reconoce keywords en español
- Mapea a servicios del catálogo y sugiere acciones
- Cuando hay match fuerte: botón "Ver en el cotizador →" que pre-carga la configuración
- NO depende de LLM externo: usa matching de keywords local

### Toggle moneda

- USD ↔ COP persistente (zustand persist)
- COP usa bandas nacionales (más económicas que conversión TRM)
- Formateo: Intl.NumberFormat('es-CO') para COP, 'en-US' para USD

## PRINCIPIOS DE UX (NO NEGOCIABLES)

1. El nivel NUNCA se selecciona manualmente. Se DERIVA de los drivers.
2. Máximo 2 interacciones antes de ver el primer número.
3. Cada slider tiene un ayudante visual que representa el extremo hacia el que se mueve.
4. Los cambios solo actualizan: número + chip de nivel + ayudante visual. Nada más parpadea.
5. Disclaimer permanente bajo todo rango.
6. Toda cifra es trazable al motor (computeQuote).
7. Sin jerga técnica en superficie: "¿Cuántas piezas tiene?" NO "presupuesto poligonal del ensamblaje".

## ARCHIVOS A CREAR

```
src/pages/cotizador.astro                    ← página (ya existe, mantener)
src/components/services/
├── CotizadorApp.tsx                          ← root island
├── state/useQuoteStore.ts                    ← zustand store
├── state/selectors.ts                        ← derive quote from state
├── controls/
│   ├── SmartSlider.tsx                       ← slider con ticks y snap
│   ├── LevelBadge.tsx                        ← chip "Nivel: M (Estándar)"
│   ├── ChoiceCards.tsx                       ← cards para rúbrica
│   └── Stepper.tsx                           ← cantidad con precio marginal
├── visuals/
│   ├── DronePieces.tsx                       ← SVG drone por capas
│   ├── PolyDetail.tsx                        ← low/mid/high poly visual
│   ├── ImageSequence.tsx                     ← crossfade frames para duración
│   └── Model3DFrame.tsx                      ← placeholder para demo 3D
├── panels/
│   ├── QuotePanel.tsx                        ← sticky result panel
│   └── BreakdownDrawer.tsx                   ← desglose expandible
├── chat/
│   └── ChatWidget.tsx                        ← chat IA local
└── cotizador.css                             ← tema claro autocontenido
```

## DEFINITION OF DONE

1. `npx astro check` → 0 errores
2. `npx vitest run` → todos los tests pasan
3. `npx tsx scripts/validateServices.ts` → "catálogo íntegro"
4. Flujo completo manual: seleccionar F1 → mover slider piezas → ver nivel derivado → ver precio
5. Ningún selector manual de nivel en la UI
6. Ningún precio hardcodeado fuera del motor
7. Disclaimer visible en todo momento