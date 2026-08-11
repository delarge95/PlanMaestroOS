# Fase 7 — IA, RAGs y automatizaciones

> Prerequisito: Fases 1–6 cerradas y estables. Esta fase se ejecuta ÚLTIMA a propósito:
> la IA se monta sobre datos y flujos que ya funcionan.
> Proveedor por defecto: Gemini (worker). Perplexity solo para investigación puntual.

## Arquitectura

```text
worker/
  src/ai/
    client.ts            // wrapper del proveedor, con límites y logging
    prompts/             // un archivo por acción, versionados
    rag/
      static/            // RAGs fijos (fitness, idiomas, clínico, tesis)
      dynamic/           // índices que se regeneran con datos del usuario
  src/jobs/
    morning-plan.ts
    evening-review.ts
    stuck-tasks.ts
    career-research.ts
src/components/ai/
  AiAction.tsx           // botón contextual genérico
  AiDraftReview.tsx      // vista de borrador: editar / aprobar / descartar
```

## Reglas duras (leer antes de escribir código)

1. Toda acción IA produce un **borrador**; persistir o enviar requiere clic humano explícito.
2. Toda respuesta IA muestra qué datos usó (lista de fuentes debajo del resultado).
3. Prohibido en prompts: diagnósticos clínicos completos, datos de salud innecesarios,
   contenido de terceros con copyright.
4. Logging de cada llamada: acción, modelo, fecha, aprobada sí/no. Nunca el prompt completo si
   contiene datos sensibles.

## Tarea 7.1 — Cliente IA y AiAction (PR)

1. `worker/src/ai/client.ts`: wrapper con timeout, reintento único, límite de tokens y
   registro de uso.
2. `AiAction.tsx`: botón contextual con estado `Generando…` → resultado inline +
   `AiDraftReview` (Editar / Aprobar / Descartar).
3. Sin chat global. La IA vive como acciones puntuales en cada sección.

**Copy exacto:** `Generar propuesta`, `Generando…`, `Editar`, `Aprobar`, `Descartar`,
`Datos usados`.

## Tarea 7.2 — RAGs fijos (PR)

1. Ingesta offline de fuentes propias/licenciables:
   - fitness (Overcoming Gravity, Overcoming Tendonitis, Nippard),
   - alemán/inglés (libros del usuario),
   - clínico (resúmenes de los PDFs, no el texto completo),
   - documentación técnica de proyectos.
2. Índice por dominio con metadata: fuente, capítulo, página.
3. Documentar qué entra y qué no a cada RAG (nada de contenido protegido completo).

## Tarea 7.3 — RAGs dinámicos (PR)

1. Índices regenerados por job: notas propias, historial de tareas, sesiones fitness resumidas,
   pipeline de empleo.
2. Cadencia: tras cada sync importante o nocturno, lo más barato.

## Tarea 7.4 — Jobs diarios (PR)

1. `morning-plan.ts`: lee tareas vencidas + de hoy → propone Top 3 y primera acción <10 min
   por tarea. Guarda como borrador en Hoy con `Aprobar plan` / `Editar`.
2. `evening-review.ts`: resumen del día (qué se hizo, qué quedó), propuesta de plan de mañana.
   Mismo patrón de aprobación.
3. `stuck-tasks.ts`: tareas >7 días sin avance → hipótesis de bloqueo (elige entre:
   demasiado grande, sin próximo paso claro, dependencia externa) + sugerencia concreta.
   Se muestra en la tarjeta discreta de Fase 3, nunca como notificación invasiva.
4. `career-research.ts`: revisa las siguientes 3 empresas del pipeline en frío → ficha breve
   (qué hacen, stack, señales de encaje) + borrador de correo en frío cuando aplique.

**Copy exacto:** `Propuesta de plan para hoy`, `Aprobar plan`, `Cierre del día`,
`Posible bloqueo`, `Investigación de empresa`, `Borrador de correo`.

## Tarea 7.5 — IA por sección (PR)

| Sección | Acción IA | Aprobación |
|---|---|---|
| Hoy | Proponer Top 3 y plan | sí |
| Fitness | Explicar progreso; sugerir ajuste de carga (no aplicarlo) | sí |
| Clínico | Sugerir micro-pasos ante bloqueo | sí |
| Laboral | Resumir oferta; adaptar CV; borrador de correo | sí, siempre |
| Idiomas | Conversación y corrección | no requiere (es práctica) |
| Gastronomía | Resumir receta externa a formato propio | sí |

## Cierre de fase

- Prueba end-to-end: morning plan generado → editado → aprobado → visible en Hoy.
- Prueba de límite: intento de envío sin aprobación → imposible por diseño (no existe la acción).
- Revisión de logs: sin prompts sensibles completos, sin tokens, coste por día registrado.
