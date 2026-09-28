# PROPUESTA — Migración de la orquestación: Z.ai → Claude

> **Estado:** borrador sin commitear · escrito 2026-09-28 por AutoClaw a pedido del usuario.
> **Contexto:** el orquestador anterior ("misión control" con GLM 5.3 max / créditos Z.ai-Zcode) agotó créditos.
> Se investigó dónde quedó toda su producción; este documento propone el workflow de reemplazo:
> **Claude como cerebro principal razonador (orquestador) + delegación a agentes ligeros**, con gasto mínimo de créditos.

---

## 1. Dónde quedó todo lo que hizo y pensó Z.ai

### 1.1 La conclusión corta

El traspaso **no depende del chat de Z.ai**. Las propias normas ya fijaron la regla
(NORMAS_ORQUESTADOR §7, act. 2026-08-26):

> "el contexto de transferencia NO es la conversación — es un documento de handoff en el repo
> (ENCARGO/HANDOFF con contratos, decisiones y estado), actualizado por quien trabaja.
> Cualquier continuación arranca desde ese documento, no desde el chat."

Todo el pensamiento operativo quedó **destilado y versionado** en el repo.
Claude puede arrancar en frío desde el repo, sin acceso al chat de Z.ai.

### 1.2 Mapa exacto por tipo de producción

**a) Doctrina y despachos del orquestador — `docs/orquestacion/`**

| Archivo | Qué contiene |
|---|---|
| `NORMAS_ORQUESTADOR.md` | Reglas vinculantes: rol y cadena de mando, regla de oro, protocolo anti-slop, matriz de enrutado por entorno, economía de créditos, flujo canónico. |
| `DESPACHO-1..9.md` | Los 9 despachos maestros completos (1: ejecución externa post-subagentes · 2: post-integración EN/NUTRI/FIT/PORT · 3: ANATOM-4 + CORE-Fase-C · 4: migración design system ds-* · 5: catálogo de reglas + Gemini Spark · 6: verificación integral + empresas a Notion · 7: idiomas + laboral · 8: CV por aplicación · 9: los 3 motores fitness). |
| `PENDIENTES.md` | Registro maestro de lo postergado: U1-U8 (usuario), T1-T7 (deuda técnica), F1-F7 (features), reordenado por razonamiento requerido. |
| `GEMINI_SPARK_GUIA.md` | Investigación del orquestador para automatizar 4 tareas diarias vía Gemini Spark (brecha Notion + 2 caminos). |
| `entornos/` (6) | Reglas por entorno: gemini-flash, glm53-qwen, antigravity-zed, ox-alpha-autoclaw, perplexity-notebooklm, reglas comunes. |
| `LOTES/` | LOTE-1 de curación RAG. |

**b) Estado y flota — `docs/agents/`**

| Archivo | Qué contiene |
|---|---|
| `CHECKPOINT.md` | Documento de recuperación: infraestructura viva, estado por agente, cola de lanzamiento, pendientes del usuario. Última actualización declarada: 2026-08-23 — el trabajo real siguió hasta 2026-09-24. |
| `PLAN_MULTIAGENTE.md` | Plan maestro multi-agente: gobernanza, **matriz de ownership (§1.2)**, contratos transversales, 12 fichas de agente (AG-CORE, FIT, ANATOM, NUTRI, CLIN, CAREER, DE, EN, PORT, ORQ, GASTRO, SERV), olas, DoD global, tickets. |
| `PROMPTS_INICIALES.md` | Prompts de arranque por agente/worktree. |
| `STATUS-*.md` (11 + serv/servicios duplicado) | Estado/autopsia por agente — el "contrato de handoff" de cada dominio. |
| `TAREAS_USUARIO.md` | Mandatos extra aprobados por el usuario para ciclos siguientes. |
| `ENCARGOS/` (6) | Encargos concretos: design-audit, mapping-meshes, PREDICTION, WEARABLE, worker-IA, AG-DISE-SPECS. |
| `HANDOFF-cotizador.md`, `HANDOFF-reglas.md` | Contratos de transferencia de dos frentes abiertos. |
| `PAQUETE_GEMINI.md`, `tickets.md` | Paquete de extracción Bloque A; tickets — ⚠️ desactualizado: los 2 "abiertos" ya están resueltos en main (nav nutrition/anatomy). |

**c) Reglas operativas para agentes externos — `.agents/`**

- `rules/` (4): core behavior, ownership matrix, agent session protocol, astro data integrity.
- `workflows/` (4): agent-startup, gemini-extraction, pr-gate, ticket-protocol.

**d) Auditorías externas (segundo parecer) — no integradas aún**

- `GeminiAudits/` — 14 documentos (2026-09-03): orquestación, viabilidad técnica, arquitectura de datos, fitness/clínico, career, seguridad, UX/TDAH, roadmap, etc.
- `MuseAudits/` — 44 documentos + `impl/` con **código drop-in** (2026-09-03): fusión Muse ↔ Gemini (16 adopciones, 10 rechazos con evidencia, ADR-9). Hay especificaciones ejecutables de mucho valor esperando integración.

**e) Artefactos de los agentes de contenido**

- `biblioteca/_llm-outputs/<entorno>/` — entregas de navegador/IDE (gemini-flash con decenas de chunks, glm53, qwen, perplexity).
- `biblioteca/_chat-exports/` — 40+ exports de chats (extracciones).
- `biblioteca/extracciones/` + `biblioteca/MANIFEST.md` (98+ fuentes).

**f) Código e historia**

- Git: **621 commits en `main`; 121 en origin → ~500 commits SIN pushear** ⚠️ (riesgo principal hoy).
- 14 worktrees en `.worktrees/` (uno por agente) + worktree de Kilo (`quasar-year`).
- Último trabajo: feature `prediction` (commits 24-09) + `rag/prediction.json` sin commitear.

**g) Lo que NO quedó en disco**

- El **chat crudo de Z.ai** ("misión control") vive en la plataforma Z.ai (nube); localmente no hay copia.
  *Recomendación:* si la plataforma aún te lo permite, expórtalo y guárdalo en `biblioteca/_chat-exports/`
  (misma convención usada con los chats de Gemini). Lo operativamente valioso ya está en el repo.

**h) Rastros locales de AutoClaw (complemento, no fuente principal)**

- Sesiones del agente `auto-coder` (sep 9-16; modelo `zai_glm-5.3-flash` vía proxy de AutoClaw) y sesiones
  de `main` tocaron trabajo del proyecto (flota de diseño, AG-DISE / AG-PORT / AG-WEAR).
  Disponibles en `~/.openclaw-autoclaw/agents/*/sessions/` si algún día hace falta recuento fino.
- Nota: los créditos del proxy de AutoClaw son un bucket distinto del plan Z.ai agotado.

### 1.3 Estado real: qué está a medias (inventario)

**Ramas con trabajo sin integrar:**

| Rama | Estado | Detalle |
|---|---|---|
| `agent/servicios` | **+3 commits, ~45 archivos sin commitear** | Cotizador ciclo 20 (turbina procedural con morph continuo) + 2 fixes; worktree con scripts QA sueltos. El WIP más gordo. |
| `agent/core` | +1 commit, 1 archivo modificado | Commit `dominio 'design'` en RAG_DOMAINS + `scripts/build_rag/schema.ts` (1 línea) sin commitear. |
| `agent/portfolio` | +1 commit **archivado a propósito** | Decisión 14-09: NO merge (predataría el barrido ds-*); guardada como referencia para cherry-pick futuro (SphericalGallery). |
| resto (`fitness, german, clinical, career, cardio, english, nutricion, orquestador, anatomia, biblioteca`) | Mergeadas y limpias | Sus últimos commits ya viven en main. |

**Sin commitear en main:** `rag/prediction.json` (feature prediction en vuelo), `cotizador-fuente.zip`,
`perfil_contactos_2026-09/` (mini-proyecto aparte, con su propio `.git`), `.claude/` (settings de Claude Code, sin trackear).

**Colas y pendientes vigentes:**

- Cola de lanzamiento de CHECKPOINT (avanzada parcialmente desde entonces): FIT B7-B8+, ANATOM 5c/6-9, CARDIO, CAREER, DE, CLIN, EN, ORQ.
- `PENDIENTES.md`: U1-U8, T1-T7, F1-F7.
- `ENCARGOS/` por ejecutar (PREDICTION, WEARABLE, worker-IA…).
- `MuseAudits/impl/` (código drop-in) sin integrar.

---

## 2. Workflow propuesto: Claude como "misión control" (gasto mínimo)

### 2.1 Principio rector

**Claude no lee ni organiza: decide, redacta encargos y verifica por muestreo.**
Es la misma doctrina que las NORMAS ya aplicaban al orquestador (§1 y §6); lo único que cambia es el asiento:
de GLM 5.3 (Z.ai) a Claude.

### 2.2 Arranque en frío (presupuesto de lectura: 3-4 archivos)

Claude solo necesita, por ciclo:

1. `docs/agents/CHECKPOINT.md` (tablero)
2. `docs/orquestacion/PENDIENTES.md` (pendientes)
3. `docs/orquestacion/NORMAS_ORQUESTADOR.md` (doctrina)
4. `docs/agents/STATUS-<dominio>.md` (solo el dominio del ciclo)

…y nada más. Todo lo demás: extracto con ruta exacta, o delegado.

### 2.3 Los dos vehículos de contexto (ya existen, no hay que inventar nada)

- **Tablero:** `CHECKPOINT.md` — Claude lo actualiza al cerrar cada ciclo (~1 página máx).
- **Encargo:** `DESPACHO-N.md` — cada ciclo = un documento con objetivo, rutas exactas, pasos numerados,
  formato de salida y criterios de aceptación. El chat nunca es la fuente de verdad.

### 2.4 Matriz de delegación v2 (Z.ai fuera; Claude arriba)

| Tipo de tarea | Entorno | Notas |
|---|---|---|
| Research web / estado del arte | Perplexity (Kimi) | como antes |
| Extracción, chunking, traducción, volumen | Gemini Flash (navegador) | entrega a `biblioteca/_llm-outputs/gemini-flash/` |
| Síntesis multi-documento largo | NotebookLM | citas integradas |
| Specs / segundo parecer | GLM 5.3 web / Qwen web | los chats WEB siguen gratis (distinto de las API/créditos agotados) |
| Edición local mecánica | Antigravity (Flash) | en el worktree del dominio |
| Edición local con razonamiento | Zed (Sonnet/GPT/Gemini) | créditos estudiantiles |
| Ejecución agéntica local pesada | AutoClaw | bucket de créditos propio |
| **Verificación determinista** | **scripts del repo** | `npm run ci`, validadores, builder RAG, qa*.mjs — costo cero |
| **Misión control:** decidir, descomponer, redactar despachos, spot-check, merges, arquitectura | **Claude** | **última opción para volumen de lectura** |

### 2.5 Las 7 palancas anti-desgaste de créditos Claude

1. **Prohibido escanear/organizar el repo.** Si hace falta saber algo: extracto puntual o lectura delegada a un agente barato.
2. **`CLAUDE.md` en la raíz** (Anexo A): doctrina estable → prompt caching barato en cada sesión (Claude Code / API).
3. **Una sesión = un ciclo.** Cerrar ciclo → commit + CHECKPOINT actualizado → sesión nueva. Evita el costo creciente del contexto largo.
4. **Trabajar en diffs/artefactos, nunca en volcados.** Los ejecutores devuelven diff + STATUS; Claude jamás recibe un archivo de 500 KB "para que lo lea".
5. **Verificación determinista primero; Claude solo muestrea.** CI verde + validadores + spot-check de 2-3 citas = suficiente para merge (protocolo anti-slop §3).
6. **Modelo por rol.** Claude Code: modelo grande solo para misión control; subagentes con modelo barato para lo mecánico. claude.ai: sesiones cortas y temáticas.
7. **El puente humano sigue siendo el router.** Claude escribe el despacho; tú lo pegas al ejecutor; el resultado vuelve como diff. Ya funciona así — solo cambia el asiento.

### 2.6 Ciclo canónico v2

```
(1) Tú: pegas CHECKPOINT + PENDIENTES a Claude (o Claude Code apunta al repo)
(2) Claude: elige 1 ciclo de la cola → redacta DESPACHO-N (objetivo, rutas, pasos, salida, criterios)
(3) Ejecutor (Gemini / Antigravity / Zed / AutoClaw): implementa en SU worktree → devuelve diff + STATUS
(4) Barato: CI + validadores + QA (tú o AutoClaw; costo Claude = 0)
(5) Claude: spot-check (muestra) → merge → actualiza CHECKPOINT → siguiente ciclo
```

Regla dura: **Claude no "lee para organizar" en ningún paso.** Si un paso lo exige, es señal de que falta
un STATUS/documento — se lo encarga a un agente barato.

---

## 3. Pasos inmediatos (checklist de arranque)

- [ ] **Backup YA:** `git -C E:\Laboral push origin main` (~500 commits locales sin respaldo remoto). Opcional: `git bundle` a D:\ como segundo respaldo.
- [ ] Micro-limpiezas (1 sesión barata, no de Claude): commit del `schema.ts` de core + `dominio design`; decidir `rag/prediction.json` (commit o stash); triage del WIP de servicios (ver `HANDOFF-cotizador.md`).
- [ ] Copiar el borrador `CLAUDE.md` (Anexo A) a la raíz del repo.
- [ ] Primera sesión de Claude = onboarding (Anexo B) — solo lectura de 3 archivos + plan; sin tocar código.
- [ ] Refrescar `CHECKPOINT.md` con lo realmente hecho desde sep-3 (lo puede redactar AutoClaw/Gemini a partir de git log; Claude solo lo aprueba).

---

## Anexo A — CLAUDE.md (borrador para la raíz del repo)

```md
# CLAUDE.md — Plan Maestro OS (E:\Laboral)

## Qué es esto
Segundo Cerebro / Plan Maestro OS: app Astro + motores deterministas + RAG v4 + sistema multi-agente.
Orquestador anterior: "misión control" GLM 5.3 (Z.ai) → hoy Claude. El proyecto se opera con despachos.

## Cómo trabajar aquí (lectura mínima — regla dura)
No escanees el repo. Lee SOLO:
1. `docs/agents/CHECKPOINT.md` (estado + cola de lanzamiento)
2. `docs/orquestacion/PENDIENTES.md` (pendientes usuario / deuda / features)
3. `docs/orquestacion/NORMAS_ORQUESTADOR.md` (reglas de operación, anti-slop)
4. `docs/agents/STATUS-<dominio>.md` del dominio del ciclo
Todo lo demás: pídelo como extracto por ruta exacta.
No "organices": redacta despachos, verifica por muestras, integra.

## Reglas vinculantes (resumen de NORMAS)
- Regla de oro: nada de borrar/reemplazar trabajo consolidado — cambios aditivos o preguntar.
- Anti-slop: toda afirmación numérica con cita o `placeholder`; "NO SÉ" es válido; spot-check obligatorio.
- Un agente = un worktree (`.worktrees/<agente>`, rama `agent/<nombre>`); ownership en `docs/agents/PLAN_MULTIAGENTE.md` §1.2.
- Verificación antes de integrar: `npm run ci` + validadores de dominio + muestreo de citas.
- Commits pequeños y frecuentes (protocolo anti-interrupción).

## Verificación rápida
- `npm run ci` = validate:fitness + vitest + astro check
- Builder RAG: `npx tsx scripts/build_rag/index.ts --domain <d>|--index`
- App: `npx astro dev --host 127.0.0.1 --port 4321`

## Delegación (no gastes contexto en lo barato)
- Volumen/extracción → Gemini Flash (navegador) → `biblioteca/_llm-outputs/gemini-flash/`
- Multi-doc → NotebookLM · Research → Perplexity
- Edición local → Antigravity (mecánica) / Zed (razonamiento)
- Local agéntico → AutoClaw
- Tú: diseño, descomposición, verificación crítica, merges, arquitectura.
```

## Anexo B — Primer prompt para Claude (paste-ready)

```text
Actúas como el nuevo "misión control" (orquestador) del proyecto Plan Maestro OS en E:\Laboral
(repo PlanMaestroOS). Reemplazas al orquestador anterior (GLM 5.3 / Z.ai), que se quedó sin créditos.

Reglas de tu arranque (lectura mínima — no escanees el repo):
1) Lee únicamente: docs/agents/CHECKPOINT.md, docs/orquestacion/NORMAS_ORQUESTADOR.md,
   docs/orquestacion/PENDIENTES.md.
2) No modifiques archivos todavía.
3) Entrégame: (a) tu resumen del estado y de la "cola de lanzamiento";
   (b) los 3 ciclos que propondrías primero y por qué;
   (c) el borrador de tu primer despacho (sigue el formato de los DESPACHO-N existentes)
   para el ciclo #1, que será el DESPACHO-10.
4) Presupuesto de lectura: no leas más archivos que esos tres, salvo extractos que yo te pegue.
```

## Anexo C — Referencias rápidas

- Uso y reglas de cada entorno: `docs/orquestacion/entornos/`.
- Ownership por dominio: `docs/agents/PLAN_MULTIAGENTE.md` §1.2.
- Definición de Done: `PLAN_MULTIAGENTE.md` §6 + `NORMAS_ORQUESTADOR.md` §3.
- Verificación de regímenes: `GeminiAudits/` y `MuseAudits/` (segundo parecer + impl/).
