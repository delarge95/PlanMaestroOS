# Catálogo 04 — VFX sobre footage, IA, visualización con datos y consultoría

> v1.0 · 2026-08-25 · Owner: AG-SERV · Estado: interno. Fórmula y bandas: `01_modelo_cobro.md` §2–§3.
> Regla transversal de IA: **BYOK por defecto** (cuentas del cliente para LLM/APIs); costo mensual estimado aparte si corre en infra propia.

---

## Familia D — 3D integrado en footage real

### D1 — Compositing de modelo 3D sobre foto/video real (por shot)

Inserción de modelo 3D renderizado en footage real: tracking, integración lumínica y grade. Precio **por shot** (plano).

| Incluye | NO incluye |
|---|---|
| Análisis de footage, tracking/matchmove, layout de cámara, integración CG, roto/cleanup puntual, grade del shot | Producción del footage, modelado del asset (catálogo 02), dirección de fotografía, color grading completo de la pieza |

Drivers: estabilidad de cámara (fija/handheld/grúa) · superficie de contacto (suelo simple vs interacción con objetos) · iluminación a igualar · resolución del source.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Intake + analítica del footage (lente, movimiento, luz) | 1–2 | 2–3 | 3–5 | 4–7 |
| 2 | Tracking / matchmove | 1–3 | 3–5 | 5–9 | 7–13 |
| 3 | Reconstrucción de escena / layout de planos según escena | — | 3–6 | 5–10 | 8–15 |
| 4 | Integración render 3D (matchear luz/sombra/reflexiones) | 2–4 | 4–7 | 6–11 | 9–16 |
| 5 | Grade / roto / cleanup del shot | 1–2 | 2–4 | 3–7 | 5–9 |

**Presupuesto por shot:** N1 **USD 120–330** · N2 **USD 390–900** · N3 **USD 750–1.900** · N4 **USD 1.450–3.300**
Shot adicional del mismo setup: −40 %. Pieza multi-shot = D1 × shots + una sola fila 1 (la analítica no se repite).

### D2 — FX sobre footage real

Efectos simulados o estilizados sobre material real: partículas, humo/energía, elementos mágicos, UI holográfica.

Precio **por efecto**, no por shot (un efecto puede cruzar varios shots; cada shot añade comp).

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Design del FX + test de look | 2–4 | 4–7 | 6–11 | 9–16 |
| 2 | Simulación / animación del FX | 2–5 | 4–9 | 7–14 | 11–20 |
| 3 | Compositing e integración | 1–3 | 2–4 | 4–7 | 6–10 |

**Presupuesto por efecto:** N1 **USD 120–360** · N2 **USD 280–700** · N3 **USD 550–1.450** · N4 **USD 1.150–2.600**
Cada shot adicional que el mismo FX cruza: +fila 3 del nivel correspondiente.

---

## Familia E — Integración de IA

### E1 — Chat/assistant de IA en sitio web

Asistente conversacional embebido en un sitio: widget frontend + backend LLM con guardarraíles, RAG básico opcional sobre contenido del cliente.

| Incluye | NO incluye |
|---|---|
| Scoping de casos de uso, backend (worker, prompts versionados, límites), widget UX, logging, QA de respuestas | Costos de API (BYOK), contenido/knowledge base sin estructurar, fine-tuning de modelos |

Drivers: fuentes de conocimiento disponibles (web pública/docs limpios/nada) · idiomas · volumen esperado · moderación requerida.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Scoping: casos de uso + guardarraíles | 2–4 | 3–6 | 5–9 | 8–13 |
| 2 | Backend LLM (worker, prompts, límites, timeout) | 4–8 | 7–13 | 11–19 | 16–28 |
| 3 | Widget frontend + UX conversacional | 3–6 | 5–10 | 8–14 | 12–20 |
| 4 | RAG básico sobre contenido del cliente | — | 4–8 | 7–13 | 10–18 |
| 5 | Logging/analytics/moderación | 2–4 | 3–6 | 5–9 | 7–12 |
| 6 | QA + evaluación de respuestas | 2–3 | 3–5 | 4–8 | 6–10 |

**Presupuesto:** N1 **USD 320–750** · N2 **USD 700–1.700** · N3 **USD 1.400–3.300** · N4 **USD 2.600–5.600**
APIs de IA = BYOK (§3 modelo). Sin RAG disponible, el chat queda limitado a lo declarado en prompts (se documenta).

### E2 — Automatización interna con IA (empresa/agencia)

Diagnóstico y automatización de procesos internos repetitivos usando IA + herramientas de workflow (scripts, n8n/Zapier-class, APIs).

Drivers: nº de procesos · madurez digital del cliente · sistemas a integrar (correo/CRM/archivos) · tolerancia al error humano-en-el-loop.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Mapeo del proceso + identificación de oportunidades | 2–4 | 4–7 | 6–11 | 9–15 |
| 2 | Diseño de solución (flujo, herramientas, puntos humanos) | 2–4 | 3–6 | 5–9 | 8–13 |
| 3 | Implementación (scripts/workflows/integraciones) | 4–8 | 7–14 | 11–20 | 16–30 |
| 4 | Piloto + métricas (antes/después) | 2–4 | 3–6 | 5–9 | 7–12 |
| 5 | Handoff + documentación + capacitación breve | 1–3 | 2–4 | 3–6 | 5–8 |

**Presupuesto por proceso automatizado:** N1 **USD 270–700** · N2 **USD 500–1.300** · N3 **USD 1.050–2.500** · N4 **USD 2.000–4.300**
Multi-proceso en la misma empresa: filas 1–2 se cobran una vez; batch aplica al resto.

### E3 — IA embebida en producto web (indirecta)

IA que no se ve como chat: generación/asistencia de contenido, búsqueda semántica, recomendaciones, clasificación automática dentro del producto del cliente.

Drivers: datos existentes del cliente · latencia aceptable (real-time vs batch) · presupuesto operativo del cliente para APIs.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Casos de uso + inventario de datos | 2–4 | 3–6 | 5–9 | 7–12 |
| 2 | Implementación de features (APIs/prompts/embeddings) | 4–8 | 7–13 | 11–20 | 16–28 |
| 3 | Evaluación de calidad de outputs + iteración | 2–4 | 3–6 | 5–9 | 7–12 |
| 4 | Límites de coste/monitoring | 1–3 | 2–4 | 3–6 | 5–8 |

**Presupuesto por feature:** N1 **USD 220–600** · N2 **USD 420–1.050** · N3 **USD 800–2.000** · N4 **USD 1.550–3.300**

### E5 — Auditoría de IA para empresa/agencia

Informe accionable: dónde la IA ayuda hoy, quick wins ordenados por ROI/riesgo, qué NO conviene automatizar todavía.

| # | Subtarea | N1 | N2 | N3 |
|---|---|---|---|---|
| 1 | Entrevistas + inventario de procesos | 3–5 | 5–8 | 8–12 |
| 2 | Informe de oportunidades/riesgos/quick wins | 3–5 | 5–9 | 8–14 |
| 3 | Presentación de hallazgos | 1–2 | 2–3 | 3–5 |

**Presupuesto:** N1 **USD 170–360** · N2 **USD 330–700** · N3 **USD 650–1.400** · N4: —
Es la fase discovery natural antes de E2 grande. Confidence `inferred` (depende de acceso a la gente).

---

## F3 — Visualización técnica con datos vivos (digital twin ligero)

Gemelo visual con estado en tiempo casi real (telemetría → escena 3D). Formulación honesta: *interactive technical visualization*, no "digital twin industrial" (ver doc 03 §4.4).

| Incluye | NO incluye |
|---|---|
| Arquitectura de datos, conexión a fuente (API/WebSocket), mapeo dato→visual, dashboard de estado, QA extremo a extremo | Sensores/hardware IoT, backend de telemetría del cliente, ML predictivo |

El asset gemelo se cotiza vía catálogo 02 (B/F1). Esta ficha cubre la capa de datos vistos.

| # | Subtarea | N1 | N2 | N3 | N4 |
|---|---|---|---|---|---|
| 1 | Arquitectura de datos (fuentes, frecuencia, formato) | 3–5 | 5–9 | 8–14 | 12–20 |
| 2 | Conexión de datos vivos (API/MQTT/WebSocket + estados mock→real) | 4–8 | 7–13 | 11–20 | 16–30 |
| 3 | Dashboard/estado/alertas visuales sobre la escena | 3–6 | 5–10 | 8–15 | 12–22 |
| 4 | QA extremo a extremo | 2–3 | 3–5 | 5–9 | 7–12 |

**Presupuesto:** N1 **USD 300–700** · N2 **USD 550–1.300** · N3 **USD 1.100–2.700** · N4 **USD 2.100–4.700**
Si la fuente de datos no existe aún, se entrega primero con feed simulado documentado (mock explícito) y la conexión real es change request medible.

---

## Familia G — Consultoría y dirección técnica

### G1 — Consultoría técnica / discovery

Fases de descubrimiento citadas por el modelo (§1.5): definir alcance estimable antes de comprometer precio cerrado. Contratable por separado.

| # | Subtarea | N1 | N2 | N3 |
|---|---|---|---|---|
| 1 | Sesiones de trabajo (intake técnico, decisiones) | 2–4 | 4–6 | 6–10 |
| 2 | Informe/roadmap con alcance estimable | 2–4 | 3–6 | 5–9 |

**Presupuesto:** N1 **USD 100–240** · N2 **USD 190–420** · N3 **USD 380–900** · N4: —

### G2 — Dirección técnica puntual (bloques)

Bloques de acompañamiento (decisiones técnicas, revisión de propuestas, supervisión de vendors). Banda N2–N3 según materia.

| Bloque | Presupuesto |
|---|---|
| 4 h | USD 130–180 (N2) / 160–230 (N3) |
| 8 h | USD 250–350 (N2) / 310–450 (N3) |

### G3 — Retainer mensual

Disponibilidad recurrente (mantención, mejoras pequeñas, consultoría). Descuento recurrente −10 % ya incluido en estos precios de lista.

| Tier | Horas/mes | Presupuesto mensual |
|---|---|---|
| R1 | 20 h | **USD 650** (a 32,5/h efectivo) |
| R2 | 40 h | **USD 1.260** (a 31,5/h efectivo) |
| R3 | 80 h | **USD 2.380** (a ~29,75/h efectivo) |

Horas no usadas no acumulan más de un mes; trabajo por fuera de retainer se cotiza normal. Cobro mensual anticipado (§7 modelo).
