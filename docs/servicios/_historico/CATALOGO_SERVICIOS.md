> ⚠ ARCHIVADO en `_historico/` (ciclo de unificació v2, 2026-08-25). Contenido promovido/absorbido por
> [04_catalogo_footage_ia_soporte.md](../04_catalogo_footage_ia_soporte.md) v2 y/o [01_modelo_cobro.md](../01_modelo_cobro.md) v1.2.
> Se conserva por Regla de Oro como referencia histórica. **NO USAR para cotizar.**

# Catálogo de servicios freelance — desglose, tiempos y costos

> Fuente de verdad del QUÉ se vende y CUÁNTO toma/cuesta. Fórmulas y tarifas: `METODOLOGIA_ESTIMACION.md`.
> Convención: horas por banda T1–T4 cuando la tarea escala con complejidad; "fija" cuando no. Escenarios = hipotéticos, calculados con puntos medios + overhead 10 % + redondeo (trazabilidad en metodología §3).
> **Rango ≠ cotización** (regla AG-SERV #1).

Leyenda bandas: T1 $24/h · T2 $30/h · T3 $39/h · T4 $48/h (efectivas).

---

## A. Render 3D offline

### A1. Render estático
**Qué es:** imágenes fijas de alta calidad desde modelo 3D (producto, arquitectura, marketing).
**Drivers:** nº de imágenes, calidad de entradas (¿modelo existe ya?), complejidad de materiales, resolución/entrega.

| Subtarea | T1 | T2 | T3 | T4 |
|---|---|---|---|---|
| Brief + moodboard/referencias | fija 0.5–1 h | fija 0.5–1 h | fija 0.5–1.5 h | fija 1–2 h |
| Setup escena + cámaras/composición | 1–2 h | 2–4 h | 4–7 h | 7–10 h |
| Lookdev materiales + iluminación | 1.5–3 h | 3–6 h | 6–12 h | 12–20 h |
| Render + denoise + post-producción | 0.5–1.5 h | 1.5–3 h | 3–5 h | 5–8 h |

**Escenarios de referencia (por imagen):**
- S · producto sobre fondo simple: **~$150** (≈5.5 h)
- M · producto con materiales propios + set simple: **~$350** (≈10.5 h)
- L · escena arquitectural / hero product con entorno: **~$840** (≈19.5 h)
- XL · key visual de campaña cinematográfica: **~$1,690** (≈32 h)

Pack ≥4 imágenes del mismo set: −10 % por unidad.

### A2. Render animación 3D
**Qué es:** pieza audiovisual renderizada offline.
**Drivers:** duración final, tipo de movimiento (giro simple vs simulación vs personajes), nº de cortes, audio.

| Subtarea | T1 | T2 | T3 | T4 |
|---|---|---|---|---|
| Brief + storyboard/animatic | 1–3 h | 3–6 h | 6–12 h | 12–20 h |
| Layout/setup de escena | 1–2 h | 2–5 h | 5–10 h | 10–18 h |
| Animación (cada 15 s de pieza) | 3–6 h | 6–14 h | 14–28 h | 28–50 h |
| Simulación/FX (si aplica) | — | — | 4–12 h | 12–30 h |
| Iluminación + render offline | 2–4 h | 4–10 h | 10–22 h | 22–45 h |
| Edición/post/compo + sync audio | 1–3 h | 3–6 h | 6–12 h | 12–24 h |

**Escenarios (pieza terminada):**
- S · giro de producto 15 s: **~$340**
- M · producto 30 s con transiciones: **~$970**
- L · recorrido arquitectónico 60 s: **~$2,680**
- XL · cinemática 60–90 s con simulaciones: **~$5,700**

---

## B. Asset 3D realtime (WebGL / videojuegos)

Modelo optimizado para motor en tiempo real. **Base = estático no interactuable**; todo lo demás es add-on (regla modular AG-SERV #4). Drivers: budget de polígonos, nº piezas, fuente (CAD/sculpt/fotos), texturas.

### B1. Producción base del asset (entrega motor-ready)

| Subtarea | T1 (<10k tris) | T2 (10–50k) | T3 (50–150k) | T4 (>150k hero) |
|---|---|---|---|---|
| Evaluación de fuente + brief técnico | fija 0.5–2 h | fija 0.5–2 h | fija 1–2 h | fija 1–2 h |
| Retopología/optimización al budget | 2–5 h | 5–12 h | 12–25 h | 25–50 h |
| UV unwrap | 1–2 h | 2–4 h | 4–8 h | 8–15 h |
| Bake de mapas (normal/AO/curvature) | 0.5–1.5 h | 1.5–3.5 h | 3.5–7 h | 7–14 h |
| Texturizado PBR | 1.5–3 h | 3–8 h | 8–16 h | 16–30 h |
| LODs + compresión (Draco/KTX2) + QA perf | 0.5–1.5 h | 1.5–3.5 h | 3.5–7 h | 7–12 h |
| Integración motor (materiales/prefab/test target) | 0.5–1.5 h | 1.5–4 h | 4–8 h | 8–15 h |

**Escenarios:**
- S · prop ≤10k tris, ≤5 piezas: **~$300**
- M · prop/vehículo 10–50k tris: **~$850**
- L · hero asset 50–150k tris: **~$2,340**
- XL · hero >150k tris o colección de props interconectados: **~$5,570**

### B2. Add-on animación
- Rig rígido/prop (puertas, ruedas, mecanismos): 2–6 h → **$60–200**
- Rig orgánico simple (biped básico sin facial): 6–15 h → **$180–585**
- Rig orgánico complejo (facial, deformadores custom): 15–35 h → **$585–1,690**
- Clip de animación: simple 1–4 h (**$30–155**) · complejo 2–8 h (**$78–380**) por clip

### B3. Add-on interactividad
- Base (hover/selección/highlight + hasta 5 hotspots con ficha): 4–10 h → **$130–400** (banda T2)
- Avanzada (configurador de piezas, medición, comparación antes/después): 10–30 h → **$320–1,350**
- UI overlay integrada (paneles, tooltips, mini-mapa de partes): 3–10 h → **$90–480**

### B4. Add-on shaders estilizados
- Shader unitario simple (toon/holo/dissolve/fresnel): 4–10 h → **$120–480**
- Familia estilizada coherente (set completo de materiales de un estilo): 10–25 h → **$390–1,170**
- Pipeline multi-pase custom (render features, postpro integrado): 25–50 h → **$1,170–2,900**

### B5. Add-on mecánicas específicas
- Vista explosionada: ≤10 piezas 3–6 h (**$90–280**) · 11–50 pzas 6–15 h (**$180–580**) · 51–200 pzas 15–30 h (**$585–1,460**) · >200 pzas 30–60 h (**$1,170–3,500**); control por slider/UI incluido en el rango
- Modos de visualización (wireframe/x-ray/swap de materiales): 4–12 h → **$120–580**
- Corte/transparencia comparativa: 6–20 h → **$180–970**

---

## C. Integración 3D web

El asset puede ser propio (§B) o del cliente. Banda default T2; pasa a T3 si incluye shaders/simulación custom.

### C1. Embed en visor third-party (Spline / Sketchfab / model-viewer)
- Embed básico responsive + tuning: 2–6 h → **$60–230**
- Con interacciones propias de la plataforma: 6–14 h → **$180–550**

### C2. Visor Three.js/Babylon.js custom

| Subtarea | Horas |
|---|---|
| Setup proyecto + loader + progress UX | 4–8 h |
| Controles órbita/zoom/touch + límites | 3–8 h |
| Optimización móvil (Draco/KTX2/instancing/perf budget) | 4–16 h |
| Hotspots/UI mínima (opcional) | 4–12 h |
| Responsive + fallback estático + a11y básica | 3–8 h |

**Escenarios:** S sin hotspots **~$530** · M completo básico **~$990** · L con hotspots + perf agresiva **~$1,520** · XL con shader custom dentro **~$2,570**

### C3. Unity WebGL (build + tuning web)
Pipeline build + loading screen + memory/perf tuning + integración página:
T1 16–30 h (**$610**) · T2 30–60 h (**$1,490**) · T3 60–110 h (**$3,650**) · T4 110–200 h (**$8,180**) (escenarios con punto medio)

### C4. Web App 3D completa
Discovery 6–20 h · arquitectura+UI front 40–120 h · core 3D 30–100 h · backend/integraciones 20–80 h (opcional) · QA/deploy 10–30 h.
Rango total típico: **$3,300 – $16,200+**. Obligatorio esquema de hitos (metodología §4.1) y MVP definido antes de firmar.

### C5. Experiencias web con 3D
| Experiencia | T1 | T2 | T3 | T4 |
|---|---|---|---|---|
| Scrollytelling (escena sincronizada a scroll) | 16–30 h → ~$610 | 30–60 h → ~$1,490 | 60–110 h → ~$3,650 | caso a caso |
| Minijuego WebGL | 40–70 h → ~$1,450 | 70–130 h → ~$3,300 | 130–250 h → ~$8,150 | 250–450 h → ~$18,480 |
| Catálogo interactivo 3D | 25–45 h → ~$920 | 45–90 h → ~$2,210 | 90–160 h → ~$5,360 | — |
| Presentación web interactiva | 14–26 h → ~$530 | 26–55 h → ~$1,320 | 55–100 h → ~$3,310 | — |

(Valores ≈ punto medio de banda + overhead.)

---

## D. Conversión CAD → 3D WebGL ready

**Drivers dominantes:** nº de PIEZAS del ensamblaje, densidad geométrica por pieza (fillets, roscas, superficies curvas), estado del CAD (limpio/sucio/NURBS pesados), jerarquía requerida.

| Subtarea | Rango |
|---|---|
| Import + auditoría geométrica + reporte | fijo 1–3 h + inspección 0.05–0.15 h/pieza |
| Simplificación POR PIEZA simple (prismas, planos) | 0.2–0.5 h/pieza |
| Simplificación POR PIEZA media (fillets múltiples, agujeros) | 0.5–1.5 h/pieza |
| Simplificación POR PIEZA compleja (roscas, curvas, orgánico) | 1.5–4 h/pieza |
| Jerarquía/naming/pivotes/metadata | 1 h base + 0.03–0.08 h/pieza |
| Materiales base por familia | 1–6 h |
| QA visual vs CAD + reporte de desviaciones | 1–4 h |

**Escenarios de referencia (drone CAD, el ejemplo ancla):**
- Drone sencillo (~12 piezas simples-medias): 8–19 h → **$370–600** (típico ≈ $470)
- Drone medio (~45 piezas mixtas): 30–55 h → **$950–1,750** (típico ≈ $1,100)
- Drone complejo (~150 piezas con roscas): 100–160 h → **$3,600–6,400** (típico ≈ $4,300, banda T3)
- Ensamblaje industrial extremo (>250 piezas o CAD sucio): 160–320 h → **$6,400–13,000** (banda T3/T4)

Add-ons: prep vista explosionada (ver B5) · LODs por pieza (+20–40 % del total según nº piezas) · metadata técnica en propiedades del mesh (+2–8 h).

---

## E. 3D sobre footage real (foto/video) y FX

Por TOMA. Drivers: cámara estática/móvil, duración, nº capas CG, FX adicionales.

| Subtarea | Rango |
|---|---|
| Análisis de escena/reconocimiento + plan de planos | 2–5 h |
| Matchmove/camera solve | estática 1–3 h · móvil/handheld 3–10 h |
| Generación de planos/layout 3D de la escena | 3–10 h |
| Integración modelo + lighting match + render | 6–20 h |
| FX adicional (partículas, humo, volumétricos) | 4–20 h (opcional) |
| Composición final (roto, grade, grain, QC) | 3–10 h |

**Escenarios por toma:**
- S · producto sobre foto fija: 14–26 h → **$430–1,100** (típico ≈ $590)
- M · video handheld 5–10 s con 1 modelo integrado: 24–48 h → **$800–1,800** (típico ≈ $1,160)
- L · secuencia multicapa con FX y varias tomas encadenadas: 45–90 h → **$1,800–3,900** (típico ≈ $2,640)

**FX standalone:** partículas/simple 8–20 h (**$250–800**) · simulación avanzada (fluidos/destrucción/RBD) 20–60 h (**$800–3,100**) · setup Houdini custom reutilizable 60–120 h (**$3,100–7,500**).

---

## F. Integración de IA

Banda especialista (T3/T4) por naturaleza del trabajo. Consumo de APIs SIEMPRE aparte (metodología §6).

### F1. IA directa en sitio web (chat/asistente con RAG sobre contenido del cliente)
Discovery 3–8 h · pipeline ingesta/embeddings/RAG 8–24 h · prompt engineering + guardrails/disclaimers 4–12 h · widget UI + integración web 6–16 h · eval con casos de prueba 4–10 h · deploy/BYOK/config API 2–8 h.
Total 27–78 h → **$900 – $4,200** (típico ≈ $2,290). Mantenimiento mensual opcional (retainer §H3).

### F2. IA indirecta en web (automatización de procesos visibles)
Formularios inteligentes, generadores de cotización/configuración, recomendadores, generación asistida de contenido:
discovery 3–8 h · diseño flujo 2–6 h · implementación 8–30 h · integración datos 4–16 h · QA/eval 3–10 h.
Total 20–70 h → **$650 – $3,300**.

### F3. IA dentro de empresa/agencia (procesos internos)
Auditoría de procesos + identificación de oportunidades 6–16 h · diseño solución/workflow 4–12 h · build (automatizaciones, agentes internos, pipelines RAG privados) 16–80 h · capacitación + documentación 4–12 h.
Total 30–120 h → **$1,000 – $6,600**. Retainer de operación/mejora: ver H3.

---

## G. Generación de texturas y mapas

- Pack tileable PBR completo (base/normal/rough/height/AO): simple 4–10 h → **$120–310** · detallado/art-direction 10–20 h → **$310–780**
- Trim sheet modular: 6–20 h → **$180–780**
- Pack de decals: 3–10 h → **$90–390**
- Lote AI-asistido + curación/limpieza manual: 2–6 h por cada 10 texturas → **$60–235**
- Mapas especiales (máscaras de desgaste, atlas de UI 3D): estimar como subtarea de B o G según contexto

---

## H. Consultoría, auditoría y mantenimiento

- Auditoría de performance WebGL/app 3D (reporte priorizado): 8–24 h → **$280–1,180**
- Consultoría técnica por hora (pipeline, shaders, IA, 3D web): **$30–48/h** según tema/banda
- Sesión de formación/mentoría equipo (2 h): **$80–130**
- Retainer mantenimiento apps 3D web (correcciones, updates librerías, monitoreo perf): 4–16 h/mes → **$130 – $820/mes**
- Retainer IA ops (F1/F3 instalado): 4–16 h/mes → **$160 – $780/mes**

---

## Combinación típica de proyectos reales (ejemplos hipotéticos de ensamblaje)

1. **"Catálogo de productos con vistas 3D interactivas"** = D (conversión × N SKUs) + B3 (interactividad) + C2 (visor custom) + C5-catálogo → se cotiza línea por línea; ejemplo 10 SKUs medios: ≈ $11k–18k, hitos obligatorios.
2. **"Video de producto con toma hero + versión web interactiva"** = A2-M + E-M + B1-M + C2-S ≈ $3.2k–5.5k.
3. **"Landing scrollytelling con asset héroe"** = B1-L + B4-familia shader + C5-scrollytelling-T2 ≈ $5k–8k.

Estos ensamblajes son PLANTILLAS de cotización, no ofertas cerradas.

---

## Pendientes de decisión del usuario

1. Confirmar tarifa base $30/h y bandas (¿subir T4 a ×1.8 para posicionamiento premium?).
2. Confirmar política de archivos fuente por defecto (se retienen) y si hay excepciones que quieras ofrecer.
3. Definir si publicamos los rangos públicamente en la web (fase 3) o solo bajo solicitud — impacta estrategia frente a competencia.
4. Servicios no cubiertos que quieras añadir/quitar del catálogo.
