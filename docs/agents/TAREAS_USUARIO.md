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
| **AG-NUTRI (ciclo 2)** | **Estimador de calorías quemadas**: investigar con las fuentes (Compendium of Activities/METs, trabajo mecánico serie×rep×carga, duración, masa muscular implicada, RPE/RIR→intensidad) si es viable una estimación aproximada por ejercicio/rutina/actividad, y construirla como engine citado (`kcal = f(METs o trabajo mecánico, duración, masa corporal, intensidad)`). Integración diaria: balance kcal objetivo vs quemado estimado en la página de nutrición. Contrato con AG-FIT: el logger exportará los datos reales de sesión (series/reps/carga/duración/RPE). | siguiente ciclo |
| **AG-NUTRI (ciclo 2)** | **Hormonas femeninas**: revisar literatura académica sobre cómo afectan las hormonas (fases del ciclo menstrual: folicular/ovulación/lútea; y menopausia) a las necesidades nutricionales y calóricas. Añadir ajustes contextuales con citas + disclaimers. Si faltan fuentes en la biblioteca, proponer papers concretos para la cola Gemini. | siguiente ciclo |
| **AG-CARDIO (nuevo)** | **Sección Cardio completa** (spinning, biking, caminata, running) bajo literatura científica — la biblioteca YA tiene las fuentes: daniels-running-formula, running-science (extracción chat recuperada), secret-of-running, cycling-physiology-guide, training-with-power-meter. Enfoques diferenciados: quema de grasa, resistencia muscular, velocidad máxima, potencia/HIT por ciclos. Pautas claras por sistema científico + **presets bien diferenciados y modificables** (modo guiado con explicación científica o edición libre). Territorio: `src/components/fitness/cardio/**`, `src/pages/app/fitness/cardio.astro`, `src/data/fitness/cardio/**`, `rag/cardio/**` (dominio `cardio` ya añadido al RAG v4). Datos de MET/potencia de los presets consumibles por el estimador de kcal de AG-NUTRI. | en cola (rama y worktree creados) |
| **AG-FIT (siguiente ciclo)** | Además de B9: exponer los datos reales de sesión (series/reps/carga/duración/RPE por ejercicio) en un contrato consumible por el estimador de kcal de AG-NUTRI. | siguiente ciclo |

## Decisiones cerradas

1. Salud sexual → **AG-CLIN** con gates (opción sugerida, aprobada).
2. Renombrado de PDFs en `investigacion\` del checkout principal → **aplicado** (2026-08-22) + rutas in-app actualizadas.
3. Paquete de extracción Gemini Bloque A → **preparado**: ver `docs/agents/PAQUETE_GEMINI.md`.
4. `Physiology of Yoga` es un resumen Bookey — pendiente conseguir el original (McGonigle & Moses); Bookey queda marcado como sustituto parcial en MANIFEST.
