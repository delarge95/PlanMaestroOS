# Fitness — Calistenia, prehab y salud musculotendinosa

## Límites clínicos
Esto es educación y planificación de ejercicio, no diagnóstico ni tratamiento. Incluir mensajes de seguridad: detener ante dolor agudo, trauma, pérdida de fuerza/sensibilidad, hinchazón importante o dolor progresivo; consultar profesional de salud cuando corresponda. No prometer curación de tendones.

## Archivos a crear/modificar
- Modificar: `src/components/fitness/PrehabSkillView.tsx`
- Crear: `src/components/fitness/CalisthenicsLearningHub.tsx`
- Crear: `src/components/fitness/SkillProgressionPath.tsx`
- Crear: `src/components/fitness/TendonLoadMonitor.tsx`
- Crear: `src/data/fitness/calisthenicsPaths.ts`
- Crear: `src/data/fitness/musculoskeletalProtocols.ts`

## Estructura de aprendizaje
Crear rutas de progreso, no una copia de capítulos o rutinas de libros:
- Tracción: hang activo, remos, pull-up asistido, pull-up, variantes avanzadas.
- Empuje: inclinada, push-up, dip asistido, dip; progresión solo con criterios de tolerancia.
- Core: hollow body, tuck hold, elevaciones controladas, progresiones avanzadas.
- Pierna: patrón de sentadilla unilateral asistida, control y rango progresivo.
- Movilidad/escápula: control escapular, muñeca, hombro, cadera y tobillo.

Cada paso debe tener: `prerequisites`, `regressionIds`, `progressionIds`, objetivo de práctica, criterio de avance, dosis inicial configurable y enlace a la ficha FitApp.

## Salud articular y tendón
Crear un módulo transversal “Preparación y tolerancia de carga” con:
- Check-in subjetivo previo: dolor 0–10, rigidez, sueño, fatiga y disposición.
- Registro posentrenamiento y a las 24 h.
- Señalización conservadora: verde 0–2, amarillo 3–4 con observación y ajuste individual, rojo >=5 o empeoramiento claro; no diagnosticar.
- Sesiones de preparación por región: hombro/escápula, codo/muñeca, rodilla/tobillo, cadera/columna, usando ejercicios existentes o añadidos a FitApp.
- Progresión solo cuando la técnica, la exposición previa y la respuesta posterior sean tolerables.

## Fuentes
Usar los libros aportados como referencias privadas para orientar categorías, progresiones y principios; no transcribir contenido protegido ni presentar sus protocolos como sustituto de atención profesional. El PDF de Overcoming Gravity tiene extracción textual deficiente, por lo que toda entrada debe verificarse visualmente contra la fuente antes de codificarla. [file:37]

## Criterios de aceptación
- Toda progresión abre ejercicios reales de FitApp.
- No hay recomendaciones clínicas personalizadas ni afirmaciones de tratamiento.
- El usuario puede registrar síntomas sin que el sistema prescriba o diagnostique.
- La ruta calisténica coexiste con, no reemplaza, Powerbuilding/Min-Max/Glute.
