# Plan Maestro OS — Implementación Fitness / FitApp

## Objetivo

Integrar en Plan Maestro OS un sistema de rutinas y tracker que preserve los programas como datos estructurados y navegables, conecte cada ejercicio con la base FitApp y mantenga registro, sustituciones y analítica.

## Alcance

- Catálogo: Powerbuilding, Min-Max, Glute Hypertrophy, calistenia y salud articular.
- Tracker: una sola rutina activa, semana/día activos, registro de sets, RIR/RPE, carga, repeticiones y notas.
- Base de ejercicios: enlaces internos por ejercicio, alternativas compatibles y metadatos de patrón/equipo/músculo.
- Salud y calistenia: rutas de aprendizaje, progresiones, prehab y gestión conservadora de carga.

## Orden obligatorio

1. Construir el modelo de datos y validar los programas contra su fuente.
2. Resolver nombres de ejercicios contra la base FitApp.
3. Construir catálogo y detalle de rutina.
4. Construir activación y tracker usando el mismo modelo.
5. Añadir calistenia/prehab sin reemplazar el tracker existente.
6. Añadir migración, pruebas y accesibilidad.

## Definición de terminado

- Cada ejercicio visible tiene un `exerciseId` válido y abre su ficha FitApp.
- Todas las semanas/días de las rutinas aparecen con series, rango, descanso, intensidad, alternativas y notas breves.
- Solo hay una rutina activa a la vez y la selección persiste.
- El registro existente funciona con cualquier programa nuevo.
- No se pierden registros al cambiar de rutina, semana o alternativa.
