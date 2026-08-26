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
