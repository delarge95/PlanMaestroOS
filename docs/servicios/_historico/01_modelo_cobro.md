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
