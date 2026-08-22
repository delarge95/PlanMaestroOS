# Tareas adicionales aprobadas por el usuario

> Registro de adiciones decididas en misión control (2026-08-22). Cada prompt de lanzamiento/reanudación debe incluir la fila correspondiente. Los agentes añaden estas tareas a su ciclo vigente o siguiente según estado.

| Agente | Tarea añadida | Estado |
|---|---|---|
| **AG-CLIN** | Sub-RAG **salud sexual** (4 libros + 8 papers ya registrados en `biblioteca/MANIFEST.md` con sourceIds): misma disciplina de gates que el resto clínico — info basada en fuentes + derivación, JAMÁS intervención/consejo médico, disclaimer visible. Integrarlo como sección del futuro rag/clinical.json o subdominio propio si crece. | al lanzar |
| **AG-FIT** | **B9 (siguiente ciclo): "Modo entrenamiento guiado"** — pantalla completa set-a-set con video, descansos cronometrados y avance de serie. Este ciclo NO (está en consolidación + B1-B8). | siguiente ciclo |
| **AG-CAREER** | Tablero semanal de ejecución (doc 34: cadencia de aplicaciones/follow-ups/tracker) visible en la vista Hoy de career. | al lanzar |
| **AG-ORQ** | El daily briefing **hereda el calendario real** que AG-FIT implementa en B1 (fecha real + workoutDayIndex + postponedDays): Hoy-agregado y Hoy-fitness deben mostrar SIEMPRE el mismo día de programa. Contrato: consumir el mismo helper/store, no reimplementar. | al lanzar |
| **AG-PORT** | Export del CV a **PDF** además del print del navegador (botón "Descargar PDF" en /cv). | reanudación |
| **AG-ANATOM** | **Renovación de la sección Músculos** (mandato del usuario): todos los músculos bien categorizados y seccionados + **tendones, ligamentos, articulaciones, nervios que pueden afectarse y huesos a tener en cuenta**, con los libros de anatomía como fuente (Gray's/Moore/Norkin/MacIntosh/Enoka) y las fichas JSON recuperadas por AG-BIB (~294K chars, chat 1787414859303 en `biblioteca/extracciones/`). Semilla: `anatomyGraph.ts`. | vigente (lanzado) |

## Decisiones cerradas

1. Salud sexual → **AG-CLIN** con gates (opción sugerida, aprobada).
2. Renombrado de PDFs en `investigacion\` del checkout principal → **aplicado** (2026-08-22) + rutas in-app actualizadas.
3. Paquete de extracción Gemini Bloque A → **preparado**: ver `docs/agents/PAQUETE_GEMINI.md`.
4. `Physiology of Yoga` es un resumen Bookey — pendiente conseguir el original (McGonigle & Moses); Bookey queda marcado como sustituto parcial en MANIFEST.
