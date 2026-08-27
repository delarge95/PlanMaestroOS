> ⚠ ARCHIVADO en `_historico/` (ciclo de unificació v2, 2026-08-25). Contenido promovido/absorbido por
> [04_catalogo_footage_ia_soporte.md](../04_catalogo_footage_ia_soporte.md) v2 y/o [01_modelo_cobro.md](../01_modelo_cobro.md) v1.2.
> Se conserva por Regla de Oro como referencia histórica. **NO USAR para cotizar.**

# Catálogo de servicios — Familias D (VFX/3D sobre footage real) y E (integración de IA)

> ⚠️ **SUPERSEDED (pendiente de unificación)** · Los precios de este archivo fueron calculados con las
> bandas legacy v0 (N1 25–30 · N2 28–35 · N3 35–45 · N4 45–55 USD/h), NO con las bandas canónicas del
> [`01_modelo_cobro.md`](01_modelo_cobro.md) v1 (N1 20–28 · N2 28–40 · N3 40–60 · N4 60–85).
> Cobertura equivalente/superior en [`04_catalogo_vfx_ia_consultoria.md`](04_catalogo_vfx_ia_consultoria.md)
> (y paquetes en [`06_paquetes.md`](06_paquetes.md)). Se conserva por Regla de Oro como referencia histórica;
> **NO USAR para cotizar** hasta que el usuario resuelva la unificación (README §Estado).

> v1.0 · 2026-08-25 · Owner: AG-SERV · Moneda USD.
> Mismo contrato de lectura que [`02_catalogo_render_assets_rt.md`](02_catalogo_render_assets_rt.md):
> horas por nivel `N1 a–b · N2 c–d · N3 e–f · N4 g–h`; presupuesto derivado de la fórmula del
> [`01_modelo_cobro.md`](01_modelo_cobro.md) §3 (N1 25–30 · N2 28–35 · N3 35–45 · N4 45–55 USD/h +
> redondeo min↓/max↑ por tramos de 10/50/100 USD).
> Consumo de APIs de IA SIEMPRE aparte (BYOK por defecto — passthrough doc 01 §3).
> Unidad base D: UNA toma (foto única o clip continuo de ~5–10 s). Multiplicar por nº de tomas con
> modificador de lote (doc 01 §4).

---

## Familia D — 3D sobre footage real y FX

### D1 · Compositing 3D sobre fotografía

**Qué es:** incorporar un modelo 3D sobre una foto real con integración creíble: reconocimiento de
escena, resolución de cámara, generación de planos según la escena, lighting match y retoque final.
El modelo 3D puede ser propio del cliente o producirse aparte (Familia B).
**Drivers:** complejidad del fondo (plano vs profundidad), calidad de la foto, nº de capas CG,
materiales requeridos (reflectivos/translúcidos encarecen el match).
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
Entrega típica: N1 1–2 días · N2 2–4 días · N3 ~1 semana · N4 2–3 semanas.
Modificadores: vista adicional misma foto **−60%** (setup ya resuelto); foto con problemas de lente/
perspectiva **+auditoría previa**; pack ≥4 fotos −15%.

---

### D2 · Compositing 3D sobre video (por toma)

**Qué es:** integración de modelo 3D + FX dentro de un clip de video real (~5–10 s por toma):
tracking/matchmove, planos de escena, lighting match animado, render y composición.
**Drivers:** movimiento de cámara (estática < handheld < dolly/compleja), motion blur, oclusones,
nº de elementos CG, FX requeridos.
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

**Presupuesto por nivel (sin FX):** N1 **$200–570** · N2 **$500–1600** · N3 **$1550–4100** · N4 **$4000–9100**
Variantes con FX incluido: N2 **$550–1850** · N3 **$1850–4900** · N4 **$4900–11500**
Entrega: N1 2–3 días · N2 ~1 semana · N3 2 semanas · N4 3–6 semanas.
Modificadores: toma adicional mismo set/tracking **−40%**; versión vertical 9:16 **+10%**; secuencia
de 3+ tomas encadenadas **−15%** sobre el subtotal.

---

### D3 · FX / simulación standalone

**Qué es:** efecto puntual para un shot o escena: partículas, humo/volumétricos, fluidos, destrucción
RBD, magia/energía. Incluye setup, iteración artística y entrega integrada al pipeline del cliente.
**Drivers:** tipo de sim (partículas simples < volumétricos < fluidos/destrucción), nº de iteraciones
artísticas esperadas, reutilización futura (setup paramétrico).
**Confidence por defecto:** `inferred` hasta ver referencias cerradas.

| Subtarea | Horas por nivel |
|---|---|
| Brief/referencia del efecto | N1 0,5–1 · N2 1–2 · N3 2–4 · N4 4–6 |
| Setup/R&D del efecto | N1 2–4 · N2 4–10 · N3 10–22 · N4 22–50 |
| Simulación + iteraciones artísticas | N1 1–3 · N2 3–8 · N3 8–18 · N4 18–40 |
| Render/composición integrada al shot | N1 1–2 · N2 2–5 · N3 5–12 · N4 12–24 |
| **Total horas** | **N1 4,5–10 · N2 10–25 · N3 25–56 · N4 56–120** |

**Presupuesto por nivel:** N1 **$110–300** · N2 **$280–900** · N3 **$850–2600** · N4 **$2500–6600**
Modificador: setup Houdini paramétrico REUTILIZABLE por el cliente **+30%** + licencia según doc 01 §6;
variante del mismo efecto **−50%**.

---

## Familia E — Integración de IA

> Principios transversales: BYOK por defecto (el cliente paga consumo directo al proveedor);
> toda superficie con disclaimer visible; outputs de IA siempre como borrador revisable cuando
> afectan contenido público; sin promesas de precisión — se declara cobertura evaluada por casos
> de prueba entregados.

### E1 · Asistente IA en sitio web (chat con RAG sobre contenido del cliente)

**Qué es:** chat embebido en el sitio que responde con base en el contenido propio del cliente
(documentación, catálogo, FAQ) mediante RAG, con guardrails, disclaimers y control de costes.
**Drivers:** volumen/fuentes de contenido, idiomas, canales (web only vs multi), acciones permitidas.
**Confidence por defecto:** `explicit` si el contenido está ordenado; `inferred` si hay que
estructurarlo.

| Subtarea | Horas por nivel |
|---|---|
| Discovery/casos de uso + fuentes | N1 2–3 · N2 3–5 · N3 5–8 · N4 8–14 |
| Pipeline ingesta/embeddings/RAG | N1 4–8 · N2 8–16 · N3 16–30 · N4 30–60 |
| Prompt engineering + guardrails/disclaimer | N1 2–4 · N2 4–8 · N3 8–14 · N4 14–26 |
| Widget UI + integración web | N1 3–6 · N2 6–12 · N3 12–24 · N4 24–44 |
| Evaluación con casos de prueba + ajuste | N1 2–4 · N2 4–7 · N3 7–12 · N4 12–22 |
| Deploy/BYOK/config + handoff | N1 1–2 · N2 2–5 · N3 5–9 · N4 9–16 |
| **Total horas** | **N1 14–27 · N2 27–53 · N3 53–97 · N4 97–182** |

**Presupuesto por nivel:** N1 **$350–850** · N2 **$750–1900** · N3 **$1850–4400** · N4 **$4300–10100**
Entrega: N1 3–5 días · N2 1–2 semanas · N3 3–4 semanas · N4 6–10 semanas.
Modificadores: segundo idioma **+10%**; acciones agénticas (escritura en sistemas del cliente)
**a cotización** tras discovery; mantenimiento mensual → retainer G3-b (doc 05).

---

### E2 · IA indirecta en web (automatización de procesos visibles)

**Qué es:** IA que no se ve como chat: formularios inteligentes, generadores de cotización/config,
recomendadores, clasificación de leads, borradores de contenido asistidos dentro del sitio/app del
cliente.
**Drivers:** nº de flujos automatizados, calidad de datos de entrada, integraciones existentes.
**Confidence por defecto:** `explicit` por flujo definido.

| Subtarea | Horas por nivel |
|---|---|
| Discovery flujo/datos | N1 2–3 · N2 3–6 · N3 6–11 · N4 11–18 |
| Diseño de flujo/prompts/reglas | N1 1–3 · N2 3–6 · N3 6–12 · N4 12–22 |
| Implementación (formularios/generadores/clasificadores) | N1 4–8 · N2 8–20 · N3 20–42 · N4 42–80 |
| Integración de datos/APIs | N1 1–3 · N2 3–9 · N3 9–20 · N4 20–40 |
| QA/evaluación + ajuste | N1 1–3 · N2 3–7 · N3 7–14 · N4 14–26 |
| **Total horas** | **N1 9–20 · N2 20–48 · N3 48–99 · N4 99–186** |

**Presupuesto por nivel:** N1 **$220–600** · N2 **$550–1700** · N3 **$1650–4500** · N4 **$4400–10300**
Flujo adicional del mismo sistema **−35%**. Entrega: N1 2–4 días · N2 1–2 semanas · N3 3–5 semanas ·
N4 6–12 semanas.

---

### E3 · Integración IA en procesos internos (empresa/agencia)

**Qué es:** llevar IA a operaciones internas: auditoría de procesos, diseño del workflow y
construcción de automatizaciones (agents internos, pipelines RAG privados, generadores de documentos),
con capacitación y documentación para autonomía del equipo.
**Drivers:** nº de procesos candidatos, madurez digital del equipo, privacidad de datos
(on-premise/nube privada encarece), integraciones con herramientas existentes.
**Confidence por defecto:** `qualitative` hasta auditoría; pasa a `explicit` por proceso aprobado.

| Subtarea | Horas por nivel |
|---|---|
| Auditoría de procesos + identificación de oportunidades | N1 3–5 · N2 5–10 · N3 10–18 · N4 18–30 |
| Diseño de solución/workflow | N1 2–4 · N2 4–8 · N3 8–16 · N4 16–30 |
| Build (automatizaciones/agentes/pipelines) | N1 6–14 · N2 14–40 · N3 40–90 · N4 90–180 |
| Capacitación + documentación | N1 2–4 · N2 4–9 · N3 9–16 · N4 16–30 |
| **Total horas** | **N1 13–27 · N2 27–67 · N3 67–140 · N4 140–270** |

**Presupuesto por nivel:** N1 **$320–850** · N2 **$750–2350** · N3 **$2300–6300** · N4 **$6300–14900**
Proceso interno adicional ya con base montada **−30%**. Entrega: N1 1 semana · N2 2–4 semanas ·
N3 5–8 semanas · N4 10–20 semanas.

---

### E4 · Programa de adopción IA (diagnóstico → PoC → escala)

**Qué es:** programa estructurado para organizaciones que saben que quieren IA pero no tienen mapa:
diagnóstico con roadmap priorizado, PoC del caso #1 con medición, gobernanza de uso y capacitación de
equipos. **Requiere discovery (G1)** — no admite urgencia crítica (doc 01 §4).
**Confidence por defecto:** `qualitative` hasta completar diagnóstico.

| Subtarea | Horas por nivel |
|---|---|
| Diagnóstico + roadmap priorizado | N1 6–10 · N2 10–18 · N3 18–32 · N4 32–55 |
| PoC del caso #1 (alcance reducido E2/E3) | N1 8–16 · N2 16–36 · N3 36–72 · N4 72–140 |
| Plan de medición (ROI/adopción) + gobernanza | N1 2–4 · N2 4–8 · N3 8–14 · N4 14–24 |
| Capacitación de equipos + transferencia | N1 3–6 · N2 6–12 · N3 12–24 · N4 24–45 |
| **Total horas** | **N1 19–36 · N2 36–74 · N3 74–142 · N4 142–264** |

**Presupuesto por nivel:** N1 **$470–1100** · N2 **$1000–2600** · N3 **$2500–6400** · N4 **$6300–14600**
Escalado a casos #2..n: cotizados como E3 con **−30%** (base ya montada). Duración típica: N1 2 semanas ·
N2 4–6 semanas · N3 8–12 semanas · N4 16–26 semanas.

---

### Matriz resumen familias D y E

| Servicio | N1 | N2 | N3 | N4 | Discovery |
|---|---|---|---|---|---|
| D1 Compositing sobre foto | $160–450 | $420–1200 | $1150–3000 | $2900–6500 | No |
| D2 Compositing sobre video (toma) | $200–570 | $500–1600 | $1550–4100 | $4000–9100 | No |
| D3 FX/simulación standalone | $110–300 | $280–900 | $850–2600 | $2500–6600 | No |
| E1 Asistente IA web (RAG) | $350–850 | $750–1900 | $1850–4400 | $4300–10100 | Ligero |
| E2 IA indirecta en web (por flujo) | $220–600 | $550–1700 | $1650–4500 | $4400–10300 | No |
| E3 IA procesos internos | $320–850 | $750–2350 | $2300–6300 | $6300–14900 | Auditoría |
| E4 Programa adopción IA | $470–1100 | $1000–2600 | $2500–6400 | $6300–14600 | **Sí (G1)** |
