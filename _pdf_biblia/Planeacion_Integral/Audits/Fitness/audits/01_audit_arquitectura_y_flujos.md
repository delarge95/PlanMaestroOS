# 01 · Arquitectura y flujos

## Objetivo
Auditar Fitness como un único producto. La persona debe poder pasar de elegir una rutina a practicar, registrar, revisar historial o explorar habilidades sin encontrar modelos duplicados, navegación redundante o estados contradictorios.

## Inventario obligatorio
El asistente debe listar antes de refactorizar:
- Todas las rutas, tabs, drawers, modales y componentes de Fitness.
- Todos los stores, localStorage keys, contextos y fuentes de datos.
- Todos los puntos que crean o modifican logs, rutina activa, sustituciones, PRs y progreso de habilidades.
- Todos los enlaces a la ficha de ejercicio y sus fallbacks.

## Mapa objetivo
```text
Fitness
├── Rutinas
│   ├── Catálogo
│   ├── Detalle de programa
│   ├── Día activo
│   └── Sustituir ejercicio
├── Registro
│   ├── Resumen
│   ├── Historial
│   ├── PRs
│   └── Estadísticas
└── Habilidades
    ├── Mi práctica
    ├── Rutas
    └── Detalle de habilidad
```

## Reglas de arquitectura
- `TrainingProgram` y su prescripción son inmutables; una sustitución crea un override por `prescriptionId` y no modifica la fuente.
- El log registra el ejercicio realmente ejecutado y también conserva `prescribedExerciseId` y motivo de sustitución.
- Catálogo, tracker, historial y estadísticas consultan el mismo índice canónico de ejercicios.
- Una única rutina activa global; cambiarla pide confirmación solo si hay una sesión sin guardar.
- No crear stores paralelos para la misma entidad; migrar de manera versionada y sin borrar datos previos.

## UX de flujo
- Entrada inicial: mostrar la rutina activa y una sola acción `Continuar entrenamiento` o `Elegir rutina`.
- Dentro de un programa: `Semana` y luego números; `Día` y nombres principales. La explicación secundaria aparece al seleccionar.
- En sesión: completar y guardar sin abandonar el contexto.
- Después de guardar: mostrar confirmación breve y una ruta clara a resumen o siguiente acción, sin modal obligatorio.

## Entregables
- Mapa de navegación real vs. objetivo.
- Tabla de entidades, fuente de verdad, store y persistencia.
- Lista de duplicidades eliminadas o justificación para mantenerlas.
- Lista de migraciones necesarias con versionado y rollback seguro.

## Criterio de aceptación
Una sesión puede iniciarse, registrarse, sustituirse, recargarse y aparecer en historial sin que ningún dato cambie de identidad o desaparezca.
