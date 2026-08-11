# 02 · Diseño de la vista Hoy y live tracker

## Objetivo
La pantalla Hoy es la entrada por defecto a Plan Maestro OS. Su prioridad es reducir fricción, no mostrar todo.

## Estructura de pantalla Hoy

### 1. Encabezado mínimo
- Título: `Hoy`.
- Subtítulo: fecha y una frase de contexto (opcional).
- Un solo CTA principal contextual (por ejemplo `Empezar bloque A`).

### 2. Sección Top 3
- Lista de hasta 3 tareas clave.
- Cada tarea muestra:
  - Título.
  - Área (chip: fitness, laboral, idiomas, clínico, etc.).
  - Próxima acción concreta.
  - Estado (pendiente, en curso, completado).
- Un botón secundario `Ver más tareas` abre el task manager del día.

### 3. Bloques A / B
- Bloque A: foco profundo (tesis, portafolio, proyecto clave).
- Bloque B: producción/salida (aplicaciones, tareas administrativas, cursos).
- Cada bloque:
  - Muestra la tarea actual.
  - Muestra duración estimada y energía.
  - Permite “Empezar 10 min” como micro-compromiso.

### 4. Fitness + Clínico + Idiomas en Hoy
Cada área importante aparece como una **fila condensada**, no un dashboard completo:
- Fitness:
  - Rutina activa (nombre).
  - Siguiente sesión o práctica de habilidad.
  - Prehab si está programado para hoy.
- Clínico:
  - 1 tarea clave (ej. exposición social, check-in).
  - 1 ayuda rápida (ej. “salir de bloqueo con 5 pasos”).
- Idiomas:
  - 1 sesión corta de alemán.
  - 1 mini práctica de inglés si está activa.

### 5. Calendario y canvas
- Vista semanal por defecto.
- Filtros por etiqueta.
- Modo canvas permite ver bloques como tarjetas en un tablero, para reorganizar mentalmente sin editar de inmediato.

### 6. Tablas visuales y stats
- Sección opcional “Resumen” con:
  - Horas por área (si se registran).
  - Sesiones de fitness esta semana.
  - Aplicaciones laborales.
  - Racha de idiomas.
- Se muestran solo si el usuario ha registrado datos suficientes.

## Lógica de priorización
El sistema calcula Top 3 usando:
- Fechas límite.
- Etiquetas críticas (tesis, aplicación, salud).
- Tareas pendientes de Bloque A.
- Reglas clínicas (máximo tareas por día, límites de carga). [file:57][file:58]

## UX para TDAH y ansiedad
- Nunca más de 3 tareas en foco simultáneo.
- Cualquier vista avanzada (calendario completo, stats detalladas) está detrás de un botón.
- Mensajes y copy orientados a apoyar, no a exigir.
