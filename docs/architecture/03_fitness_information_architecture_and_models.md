# 03 · Fitness: arquitectura de información y modelos

## Objetivo
Diseñar la sección Fitness para que gestione programas de gimnasio, calistenia, habilidades, prehab, movilidad, MMA, cardio, yoga y meditación con una estructura coherente.

## Modelo de datos central
- `TrainingProgram`
- `ProgramWeek`
- `WorkoutDay`
- `ExercisePrescription`
- `Exercise`
- `SkillPath`
- `SkillStep`
- `WorkoutSession`
- `SetLog`
- `PersonalRecord`
- `BodyMetric`
- `PrehabProtocol`
- `MobilityRoutine`

Estos contratos ya están parcialmente definidos en documentos de fitness previos y deben adaptarse al shell maestro. [file:60][file:62][file:63][file:64]

## Vistas clave
### 1. Hoy (fitness)
- Stack vertical simple:
  1. Rutina del día (gym, calistenia o mixto).
  2. Prehab / movilidad relevante según zona.
  3. Práctica de habilidades.
- Botones claros:
  - `Empezar sesión`.
  - `Ver progreso`.
  - `Ver prehab` (si aplica).

### 2. Calendario y cronograma fitness
- Vista semanal/mensual solo de fitness.
- Cada día muestra:
  - Tipo de entrenamiento.
  - Estado (completado, omitido, adaptado).
- Historial con:
  - Consistencia.
  - Progresos por rutina.
  - Pesos, reps, PRs, volumen por músculo.

### 3. Catálogo de rutinas
- Lista de programas (Min-Max, Powerbuilding, Glute, etc.).
- Para cada uno:
  - Días de entrenamiento.
  - Ejercicios, sets, reps, RIR/RPE, descanso, sustituciones y notas. [file:62]

### 4. Habilidades y progresiones
- Roadmaps por objetivo: dominada, muscle-up, front lever, flexibilidad, etc.
- Cada ruta:
  - Tiene pasos con regresión/progresión.
  - Guarda objetivo de práctica y tolerancia.
- “Mi práctica” es solo una vista resumida que se conecta a Hoy.

### 5. Base de datos y biblioteca
- Base de datos de ejercicios de FitApp:
  - Con catálogo, filtros y detalle técnico.
  - Pendiente corrección de enlaces/videos. [file:60][page:1]
- Biblioteca:
  - Libros (Overcoming Gravity, Overcoming Tendonitis, etc.).
  - Videos científicos.
  - Resúmenes y notas internas.

### 6. Progreso y tabla de cargas
- Gráficas:
  - PRs históricos.
  - Volumen por músculo.
  - Tendencias por programa.
- Tabla de cargas:
  - Por ejercicio.
  - Basada en PR y RPE objetivo.
  - Guía de discos/barra. [file:60]

## Reglas de UI
- En ninguna vista fitness se mezclan más de 3 tipos de información a la vez (ej. rutina + progreso + biblioteca en la misma pantalla sin colapsos).
- Cualquier vista compleja (gráficas, filtros avanzados) requiere un botón explícito tipo `Ver estadísticas detalladas`.
