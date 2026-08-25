> {0} Archivado en la consolidaci{1}n (ciclo 5): l{2}nea de cat{3}logo propia de agent/services. Contenido cubierto por los cat{3}logos can{1}nicos 01{4}07 de esta carpeta.

# AG-SERV · C4 — Integración de IA y automatización

> Owner: AG-SERV · v1 · 2026-08-25 · Tarifas y políticas: `00_METODOLOGIA.md`
> Clase dominante: **RC-AI** (28–40/h); discovery/arquitectura usa **RC-CON** (40–55/h).
> Regla dura: ningún número visible al usuario final del cliente sin trazabilidad (`serviceId → subtarea → fuente de datos`); todo output de IA se presenta como borrador/fuente citada donde aplique (principio heredado del plan maestro §0.3).

---

## AI-01 · Chat de IA en sitio web (integración directa)

**Qué es:** asistente conversacional que responde sobre el contenido del sitio/documentación del cliente, con fuentes visibles y límites claros.

**Entregables:** widget de chat integrado, pipeline de ingesta documentado, set de pruebas de respuestas, guía de operación (cómo actualizar contenido).

### Subtareas × tier (horas)

| Subtarea | Clase | S | M |
|---|---|---|---|
| Discovery: contenido, casos de uso, tono | RC-CON | 2–3 | 3–6 |
| Ingesta y chunking de contenido (+embeddings) | RC-AI | 4–6 | 6–14 |
| Backend (endpoint, gestión de key, rate limits, logs) | RC-AI | 5–8 | 8–16 |
| Widget UI (chat, citas de fuente, estados) | RC-AI | 4–6 | 5–10 |
| Guardrails + set de evaluación de respuestas | RC-AI | 3–5 | 5–9 |
| Deploy + documentación de handoff | RC-AI | 2–3 | 3–5 |
| Actualización periódica del índice (mecanismo) | RC-AI | manual/simple | automatizada |

| Tier | Total horas | Precio | Plazo |
|---|---|---|---|
| S (sitio pequeño, contenido estático, estilo FAQ inteligente) | 20–31 h | **USD 600–1.400** | 2–3 semanas |
| M (múltiples fuentes incl. PDFs/blog, índice actualizable, métricas de uso) | 30–60 h | **USD 900–2.500** | 3–5 semanas |
| L/XL (multi-idioma, acciones: agendar/cotizar, CRM) | discovery | discovery fijo 4–8 h (USD 160–440) + hitos | por hitos |

**Costos operativos:** la API del modelo (LLM/embeddings) y su hosting los paga el cliente (exclusiones §8); el handoff incluye una proyección orientativa de consumo mensual según tráfico declarado.

---

## AI-02 · IA indirecta en producto web

**Qué es:** funciones potenciadas por IA sin chat visible: búsqueda semántica, recomendaciones, generación bajo plantilla, ruteo inteligente de formularios.

| Feature | Horas | Precio unitario |
|---|---|---|
| Búsqueda semántica de catálogo/contenido | 10–24 h | USD 280–960 |
| Asistente de configuración / recomendador guiado | 12–30 h | USD 340–1.200 |
| Generación de contenido bajo plantilla (descripciones/resúmenes) | 8–20 h | USD 225–800 |
| Clasificación y ruteo de leads/formularios | 8–18 h | USD 225–720 |

| Paquete | Alcance | Precio | Plazo |
|---|---|---|---|
| S | 1 feature | **USD 250–950** | 1–2 semanas |
| M | 2–3 features integradas entre sí | **USD 700–2.200** | 2–4 semanas |
| L | Suite + panel de control ligero para el equipo del cliente | **USD 1.400–4.000** | 4–7 semanas |

---

## AI-03 · Automatización interna con LLM (empresas y agencias)

**Qué es:** convertir un proceso manual repetitivo en un workflow asistido por LLM (con revisión humana cuando el riesgo lo pide).

**Ejemplos típicos:** triage de emails/leads hacia CRM, resumen de reuniones a notas accionables, primera versión de propuestas comerciales, QC de contenido antes de publicar.

### Estructura de precio

Todo paquete AI-03 = **discovery fijo** (4–8 h RC-CON: **USD 160–440**, entrega mapa del proceso y especificación del workflow) **+ implementación** a RC-AI.

| Tier | Implementación | Precio total | Plazo |
|---|---|---|---|
| S (1 workflow lineal simple) | 20–45 h | **USD 700–2.250** | 2–3 semanas |
| M (2–3 workflows conectados, human-in-the-loop) | 45–85 h | **USD 1.450–3.850** | 3–6 semanas |
| L (pipeline crítico con monitoreo/métricas) | post-discovery | discovery extendido 8–16 h + hitos | por hitos |

Incluye siempre: prompts versionados y documentados, pruebas con datos reales del proceso, capacitación de handoff (1 sesión + guía escrita). La evolución mensual del workflow se contrata como retainer (C7).

---

## AI-04 · Consultoría y auditoría de IA

**Qué es:** diagnóstico de dónde la IA aporta valor real en una empresa/agencia, con plan priorizado por impacto/esfuerzo y riesgos (datos, privacidad, costos).

| Paquete | Alcance | Horas (RC-CON) | Precio | Plazo |
|---|---|---|---|---|
| Express | 1 proceso o departamento | 8–16 h | **USD 320–880** | 1 semana |
| Media | empresa/agencia pequeña completa | 16–32 h | **USD 650–1.750** | 2 semanas |
| Roadmap + piloto | auditoría + primer quick-win implementado (AI-03 S con −5% recurrente) | combinado | **cotización cerrada tras auditoría** | 3–5 semanas |

Entregable estándar: informe con oportunidades priorizadas, quick-wins ejecutables, matriz de riesgos y costos operativos esperados.

---

## Fuentes y trazabilidad

- Tarifas: rate card v1 §2 (RC-AI anclada a doc-03 §4.7 [hiretalent-python] + §9.3; RC-CON a doc-03 §4.2 [zip-ta]).
- Posicionamiento honesto: "Python automation and LLM-assisted workflow tooling" (doc-03 §4.7); no se vende como ML/AI engineering.
- Horas: inferencia propia documentada; calibración pendiente contra primeros proyectos.
