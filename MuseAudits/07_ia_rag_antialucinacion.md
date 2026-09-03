# 07 — IA, RAG y agentes proactivos sin alucinar

## Estado

- RAG v4 real: 9 dominios con builder (`--domain/--check/--index`), chunks con
  `id/topic/tags/chapter|page|section/entities/rules` + `<!-- stats -->`.
  Volúmenes: career 1647, anatomy 448+407 (LOTE-2), fitness 138, nutrition 155,
  clinical 61, cardio 41, portfolio 36, english 9, german 12.
- Motor determinista (reglas citadas) SEPARADO de la IA generativa. Esta separación
  es la decisión más importante de todo el proyecto: **la IA propone, las reglas disponen**.
- Worker IA en diseño (ENCARGO M6): `client.ts` (timeout 20s, mock testeable),
  `POST /ai/draft {domain, task, contextChunks[]}` → `AiDraft` que NUNCA se auto-aplica,
  UI `AiDraftReview` (Editar/Aprobar/Descartar), fallback 501.
- Jobs diseñados (implementation 07 T7.4): morning-plan, evening-review, stuck-tasks,
  career-research. Aún no implementados.

## Reglas anti-alucinación (endurecer las existentes)

1. **Toda salida IA trae `Datos usados`** (ids de chunks + reglas). Sin fuentes → se rechaza.
2. **Whitelist de acciones por dominio** (ya en implementation 07 T7.5): la IA solo puede
   proponer lo listado; lo demás ni siquiera llega a UI.
3. **Cifras solo desde `entities num:` o `optimalRange`**: si el chunk no trae cifra,
   el catálogo de reglas lo salta (DESPACHO-5 §A: "si no hay cifras, skip, máx 3/chunk").
4. **Dominios sensibles con modo estricto**: clínico = paráfrasis conductual + disclaimer
   + derivación, jamás diagnóstico; nutrición-salud femenina = display-only, jamás
   auto-aplicado; laboral = jamás auto-envío ni invención de experiencia.
5. **Second-opinion automática**: artefactos críticos (rutina reescrita por lesión,
   CV generado) pasan por revisor (patrón GLM↔Qwen autor/revisor de `entornos/`).

## Proactividad real (cómo la IA "se adelanta" sin ser peligrosa)

Niveles: L1 informa (badge "hay 3 vencidas"), L2 propone (borrador aprobable en Hoy),
L3 prepara (deja todo listo + 1 clic), **L4 ejecuta solo**: prohibido salvo
tareas reversibles declaradas (reordenar cola Ver-más-tarde, archivar_DONE).
La proactividad vive en los 4 jobs + `stuck-tasks` (>7d) + `suggestionEngine`
(cooldowns 24/48/72/96h ya implementados). Métrica: % borradores aprobados vs
descartados por semana (si <50% aprobados, el job se recalibra, no se insiste).

## RAG: lo que falta

- Ingerir OG2 completo + Tendonitis + Nippard + Horschig + Daniels (B1 DESPACHO-1,
  la tarea de contenido más valiosa y aún pendiente).
- Llevar english/german de 9/12 chunks a >150 cada uno (vocab + scenarios + gramática
  ya curados en JSON — convertirlos a chunks es mecánico).
- RAG dinámico: notas propias + historial sesiones + pipeline (regenerado por job
  nocturno, nunca en caliente).
- Costos: fijar modelo (Gemini 2.5-flash en worker), timeout, tope tokens/día y tabla
  de costo visible en `AiDraftReview` (transparencia = confianza).
