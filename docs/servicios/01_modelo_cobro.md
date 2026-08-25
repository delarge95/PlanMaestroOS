# 01 · Modelo de cobro AG-SERV

> v1 interna · 2026-08-25 · Estado: **propuesta pendiente de validación del usuario**. Este documento es la fuente de verdad de las bandas tarifarias, la fórmula de presupuesto y los términos comerciales. Todo catálogo (`02`–`04`) expresa **solo horas**; todo precio deriva de aquí por fórmula visible. Ningún número sin origen.

---

## 1. Alcance

Define cómo se estima, se cobra y se contrata el trabajo freelance del perfil (technical artist / ing. multimedia / ing. electrónico / artista 3D / AI specialist):

- **Cobro por paquetes de servicio** con rangos claros de precio y tiempo (nunca precio puntual suelto).
- Cada servicio se desglosa en **subtareas**; cada subtarea se estima en **niveles de complejidad** con rangos de horas.
- El presupuesto es `Σ (horas × banda tarifaria del nivel)` + modificadores. Siempre min–max.
- La cifra final de un proyecto real se cierra en un **SOW (Statement of Work)** tras brief documentado. Los rangos de este sistema son orientativos y alimentan esa conversación.

Fase futura (aprobación pendiente): web visualizadora que consuma estos catálogos (`docs/servicios/05_estimacion_ejemplos.md` §spec-slider).

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

Regla: las bandas de §3 deben quedar **dentro del corredor** formado por estas anclas (piso LATAM plataforma ↔ techo senior US descontado por ubicación Colombia). Si una revisión futura rompe el corredor, se documenta el motivo en este archivo (changelog §9).

## 3. Niveles de complejidad y bandas tarifarias

Cuatro niveles transversales a todos los servicios. La banda es la **tarifa efectiva USD/hora** aplicada a las horas de ese nivel.

| Nivel | Nombre | Definición operativa | Banda USD/h | Ancla principal |
|---|---|---|---|---|
| **N1** | Rutina | Bajo juicio técnico: setups repetibles, conversiones simples, QA, exports, tareas guiadas. Reversible y poco riesgosa. | **20–28** | Plataforma LATAM 15–30/h (research_00) · piso freelance global (doc-03) |
| **N2** | Estándar | Trabajo profesional típico del perfil: modelado/optimización media, integración web convencional, shading PBR, animación básica. | **28–40** | Middle Unity Colombia 27–35/h (doc-03 · Lemon.io) |
| **N3** | Especializada | Requiere criterio experto: shaders custom, arquitectura de web apps 3D, tracking/recon complejo, pipelines, performance crítica. | **40–60** | Interpolación LATAM-senior: 35/h (Lemon.io LATAM) → 57/h (mediana US, doc-03) |
| **N4** | Muy especializada / I+D | Territorio digital twin, simulación, IA integrada a medida, problemas sin receta. Alto riesgo y alto valor de negocio. | **60–85** | Strong senior SF 72–89/h descontado ubicación COL (~0.85×); day rate US 75–100/h (research_13/04) |

Confianza del conjunto: `inferred` — derivada de benchmarks públicos citados; **no validada aún contra cierres reales propios**. Primera calibración: tras los primeros 3 proyectos cerrados (ver §8).

## 4. Fórmula de presupuesto

```text
subtotal_min = Σ_subtareas( horas_min_del_nivel_elegido × banda_min_del_nivel )
subtotal_max = Σ_subtareas( horas_max_del_nivel_elegido × banda_max_del_nivel )
presupuesto   = [ redondear_a_50(subtotal_min) , redondear_a_50(subtotal_max) ]  + modificadores (§5)
```

Reglas de la fórmula:

1. **Siempre dos cifras** (min–max). Prohibido publicar punto medio como "el precio".
2. Redondeo hacia arriba a múltiplos de USD 50 (min y max por separado).
3. Las horas provienen SIEMPRE del catálogo (`02`–`04`); prohibido inventar horas fuera de catálogo sin registrar el nuevo ítem primero.
4. La gestión de proyecto/comunicación está incluida hasta el **10 % de las horas totales**; el excedente se agrega como subtarea explícita (N2).
5. Cada estimación registra: fecha, versión de catálogo usada, nivel elegido por subtarea, confidence (`explicit | inferred | qualitative`) y supuestos del brief. Sin registro, la estimación no existe.

Ejemplo mínimo (trazabilidad completa):

```text
Servicio A1 Render estático, subtarea "Setup escena/iluminación", nivel N2, 6–10 h
  → min 6×28=168 · max 10×40=400
Subtarea "Render + post por imagen" (lote 3 imágenes), N1, 4–7 h
  → min 4×20=80 · max 7×28=196
Subtotal: 248–596 → redondeado: 250–600 USD (antes de modificadores)
```

## 5. Modificadores

| Modificador | Efecto | Cuándo aplica |
|---|---|---|
| Urgencia (arranque < 72 h o timeline comprimido vs. plan normal) | ×1.25 sobre subtotal | Solo si compromete otros proyectos; se declara en SOW |
| Crítico (< 24 h de entrega o fin de semana) | ×1.50 sobre subtotal | Excepcional, máx 1 vez por cliente cada 90 días |
| Ronda extra de revisión (más allá de las 2 incluidas) | +horas N1 del servicio (típico 2–6 h) o 8–12 % del subtotal | Por ronda; feedback consolidado en un solo documento |
| Fuente editable (.blend/.max/.unity/.ai) | +30–50 % del subtotal | Solo si el cliente pide archivos fuente |
| Exclusividad de diseño/asset | Cotización aparte (referencia ×2–3 del valor del asset) | Negociada caso a caso; nunca implícita |
| Idioma del entregable (EN nativo-level copy) | Incluido | El perfil opera bilingüe (doc-05 READ) |
| Retainer (≥ 3 meses) | −5–10 % en horas N1/N2 del scope recurrente | Ver `06_paquetes.md` G2 |

Prohibido acumular urgencia × crítico (elige el mayor). Los modificadores nunca bajan el piso de USD 100 por proyecto.

## 6. Términos comerciales estándar

### 6.1 Pagos

| Concepto | Término |
|---|---|
| Anticipo | 40 % para proyectos ≤ USD 3k · 50 % si es primer proyecto con el cliente |
| Hitos | Proyectos > USD 3k: 40/30/30 (inicio/avance/entrega) o por entregable |
| Vencimiento | Neto 7–15 días desde factura |
| Métodos | Wise/Payoneer preferidos por comisiones (`Research/deep-research-report_03.md` §medios de pago). PayPal/Stripe solo con recargo de comisión transparente (~3 %). ⚠️ Cuentas reales por confirmar — placeholder hasta validación del usuario (ticket abierto) |
| Moneda | USD base. Conversiones COP/EUR informativas, marcadas como tales |

### 6.2 Alcance y cambios

1. **SOW obligatorio** antes de arrancar: alcance, entregables, supuestos, exclusiones, cronograma, número de esta estimación.
2. **2 rondas de revisión incluidas** por entregable (feedback consolidado).
3. Fuera de alcance detectado → **adendum** con re-estimación por niveles (misma fórmula §4). Nunca absorción silenciosa de scope.
4. Cancelación por parte del cliente: se paga el trabajo realizado hasta el hito en curso (kill fee proporcional).

### 6.3 Propiedad y licencias

- Salvo pacto distinto en SOW: el cliente recibe **licencia de uso comercial** del entregable final; el portfolio del perfil conserva derecho a mostrar el trabajo (salvo NDA explícito).
- Archivos fuente y exclusividad: solo vía modificadores §5.

### 6.4 Nota fiscal Colombia (informativa, no asesoría)

- Exportación de servicios: el cliente extranjero no retiene IVA; la renta local tributa sobre utilidad neta con tarifa progresiva (~19–39 %) (`Research/deep-research-report_03.md` §impuestos).
- Aportes como independiente (EPS ~12.5 % y pensión ~16 % sobre 40 % del IBC, ARL) están **dentro del cálculo de las bandas**: las tarifas de §3 son brutas, no netas.
- Confirmar régimen (simple/común) con contador antes de facturar. Placeholder hasta decisión del usuario.

## 7. Reglas de estimación

1. **Drivers antes que intuición**: cada subtarea del catálogo lista sus drivers (p. ej. CAD→WebGL: nº piezas, calidad de malla origen, materiales, exploded). El nivel se elige leyendo los drivers contra el brief, nunca "por feeling".
2. Ante duda entre dos niveles: estimar en ambos y presentar el rango combinado (min del bajo – max del alto) marcando el driver que decidirá.
3. Buffer de riesgo: ya embebido en el ancho min–max de cada subtarea. No se suman buffers adicionales encima.
4. Proyectos multi-servicio: estimar cada familia por separado y luego aplicar descuento de paquete si aplica (`06_paquetes.md`), nunca antes.
5. Toda estimación vence a los 30 días (los catálogos evolucionan).

## 8. Calibración continua

- Tras cada proyecto cerrado: registrar horas reales por subtarea vs. estimadas en `docs/servicios/bitacora_calibracion.md` (se crea con el primer cierre).
- Regla de ajuste: si 3 proyectos consecutivos cierran > 20 % fuera de rango en una familia, se recalibran sus horas (y se versiona el catálogo, changelog §9).
- Las bandas §3 se revisan trimestralmente contra nuevos benchmarks y contra la meta de ingreso mensual (doc-03 §3: 1.5k → 3k → 6k).

## 9. Changelog

| Versión | Fecha | Cambio |
|---|---|---|
| v1 | 2026-08-25 | Creación. Bandas N1–N4 derivadas de anclas doc-03/research. Pendiente validación usuario. |
