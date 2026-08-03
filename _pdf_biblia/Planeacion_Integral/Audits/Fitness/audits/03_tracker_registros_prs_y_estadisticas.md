# 03 · Tracker, registros, PRs y estadísticas

## Objetivo
Registrar entrenamiento con la menor fricción posible y mostrar progreso útil, no una colección de gráficos. El sistema debe preservar sets, carga, reps, esfuerzo, notas y sustituciones para el ejercicio realmente ejecutado.

## Contrato mínimo de sesión
Cada set/log debe conservar:
- `programId`, `week`, `dayId`, `prescriptionId`.
- `prescribedExerciseId` y `performedExerciseId`.
- Carga, reps, RIR/RPE, estado de completado y nota opcional.
- Fecha/hora, unidad de carga y motivo de sustitución si aplica.
- Esquema/versionado para migración futura.

## Flujo de registro
1. Mostrar el objetivo prescrito y el último desempeño relevante.
2. Permitir registrar sets sin obligar a completar campos irrelevantes.
3. Guardar explícitamente, con estado visible `Guardado` o error recuperable.
4. Tras guardar, detectar PRs y mostrar una confirmación breve; no interrumpir con un modal grande.
5. La sesión guardada debe ser inmutable en historial salvo edición deliberada y auditada.

## PRs por fases
### Fase 1 — implementar primero
- Mejor carga completada por ejercicio y variante.
- Mejor repetición máxima a una misma carga.

### Fase 2
- Mejor volumen por sesión para el ejercicio.
- PRs de hold/tiempo para habilidades estáticas.

### Fase 3
- Estimaciones de fuerza solo si el usuario las habilita y la fórmula queda documentada; nunca presentar una estimación como medición clínica.

No comparar variantes incompatibles: barra, mancuernas, máquina, anillas, asistido y peso corporal deben tener reglas explícitas de agrupación.

## Estadísticas por capas
### Resumen (predeterminado)
Máximo cuatro métricas: sesiones de la semana, adherencia al plan, volumen total y último PR.

### Historial
Lista cronológica de sesiones; cada sesión se expande para ver sets, original/sustituto y notas.

### PRs
Filtro por ejercicio/variante; mostrar fecha, resultado y contexto de sesión.

### Estadísticas
Tendencias semanales, volumen por patrón y progreso por ejercicio solo tras entrar deliberadamente en esta vista.

## Reglas de baja carga cognitiva
- No mostrar gráficos si no hay suficientes datos o si no responden una pregunta concreta.
- Explicar una métrica al tocar un icono de información, no con texto permanente.
- Permitir intervalo corto por defecto (últimas 4–8 semanas).
- Resaltar un cambio relevante a la vez.

## Criterios de aceptación
- Las métricas se calculan sobre `performedExerciseId`.
- Una sustitución no elimina trazabilidad del ejercicio original.
- Un PR no se duplica al editar una sesión ni se mezcla entre variantes.
- El resumen se entiende sin leer documentación.
