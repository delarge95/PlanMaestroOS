# Plan Maestro OS — Roadmap de Implementación (Índice)

Este paquete contiene el plan de implementación completo, fase por fase, con instrucciones
prescriptivas para el asistente de código. Cada documento indica exactamente:

- qué archivos crear o modificar,
- qué código escribir (estructura y ejemplos),
- qué textos (copy) usar en la UI,
- qué verificar antes de dar la fase por terminada.

## Reglas globales para el asistente

1. **No improvisar:** si una instrucción es ambigua, detenerse y pedir aclaración, no inventar.
2. **Un PR por tarea:** cada tarea numerada dentro de una fase es un PR separado y pequeño.
3. **No romper lo existente:** nunca borrar stores, datos de localStorage ni rutas actuales sin migración.
4. **Copy exacto:** usar los textos indicados en este documento, en español, sin parafrasear.
5. **Validación:** al final de cada fase, ejecutar el checklist de la fase y reportar resultado por ítem
   (OK / FALLA + evidencia).
6. **Reporte al terminar cada tarea:** listar archivos tocados, decisiones tomadas y pendientes.

## Estado actual

- La Fase 1 (Hoy + Agenda + Fitness básico) ya fue implementada por el asistente, pero **no está
  verificada**. Antes de avanzar a Fase 2, ejecutar `01_phase_01_verification.md` completo y
  corregir todo lo que falle.

## Documentos

1. `01_phase_01_verification.md` — Auditoría y corrección de la Fase 1 ya implementada.
2. `02_phase_02_fitness_complete.md` — Fitness completo: habilidades, prehab, cargas, progreso.
3. `03_phase_03_clinical.md` — Sección clínica (TDAH / ansiedad social).
4. `04_phase_04_career.md` — Laboral: roadmap, portafolio con simuladores, proyectos, empleo, cursos, noticias.
5. `05_phase_05_languages.md` — Idiomas: Alemán (prioridad), Inglés.
6. `06_phase_06_gastronomy.md` — Gastronomía + pipeline "Ver más tarde".
7. `07_phase_07_ai_agents.md` — IA, RAGs y automatizaciones.

## Orden de ejecución obligatorio

```text
01 (verificación) → 02 → 03 → 04 → 05 → 06 → 07
```

No saltar fases. No abrir tareas de una fase con la anterior incompleta.
