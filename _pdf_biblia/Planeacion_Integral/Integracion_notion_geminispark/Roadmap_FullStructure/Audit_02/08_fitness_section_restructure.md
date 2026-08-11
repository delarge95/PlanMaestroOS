# FIX 08 — Reestructuración completa de la sección Fitness

## Problema
La estructura actual de Fitness no responde a la especificación acordada:

2. fitness:
  a) Hoy → stack simple de planes activos (rutina del día + prehab + cronograma).
  b) Rutinas y biblioteca → catálogo de rutinas, habilidades/progresiones, base de datos FitApp
     y biblioteca teórica.
  c) Progreso y tabla de cargas → histórico global (PRs, volumen, consistencia) + guía de cargas.

El usuario confirma:
- La jerarquía de vistas no refleja `Hoy` / `Rutinas y biblioteca` / `Progreso y tabla de cargas`.
- Las sub-secciones no comparten patrón de diseño.
- Mi práctica quedó enterrada/duplicada en la sección incorrecta en lugar de
  convivir con la rutina del día.

## Objetivo
Aplicar el mismo patrón de navegación (FIX 07) y el mismo sistema de diseño (FIX 06) a Fitness,
organizando TODO el módulo bajo tres vistas principales y tres sub-vistas claras.

## Arquitectura deseada

```text
/app/fitness
  ├── index.astro            → FitnessHoy
  ├── library.astro          → FitnessLibrary
  ├── progress.astro         → FitnessProgress
  ├── library/
  │     ├── catalog.astro    → Catálogo de rutinas
  │     ├── skills.astro     → Habilidades y progresiones
  │     └── data.astro       → Base de datos FitApp + biblioteca
  └── components/fitness/
         FitnessToday.tsx
         FitnessLibrary.tsx
         FitnessProgress.tsx
         TodayRoutineStack.tsx
         TodayCalendar.tsx
         LibraryCatalog.tsx
         LibrarySkills.tsx
         LibraryDatabase.tsx
         ProgressHistory.tsx
         LoadGuide.tsx        // ya existe: renombrar/adaptar si hace falta
```

## A. `/app/fitness` — Hoy

### 1. Layout y contenido

`FitnessToday.tsx` debe renderizar exactamente 3 bloques, en este orden:

1. `PrehabBlock` (solo si hay zona afectada activa hoy).
2. `TodayRoutineStack` (planes activos de gym/calisthenia).
3. `TodayCalendar` (mini calendario + cronograma fitness).

Todos en un solo scroll vertical, sin tabs ni secciones adicionales.

#### 1.1 PrehabBlock (ya creado en Fase 2)
- Se muestra solo si `painZones` o un estado similar indica zona afectada. Si no, el bloque
  simplemente no existe en la vista (no placeholder vacío).
- Copy exacto: `Zona afectada`, `Prehab de hoy`, `¿Cómo llega hoy?`, `Sin molestia`, `Leve`,
  `Notable`, `Considera reducir rango o pausar hoy`.

#### 1.2 TodayRoutineStack
Stack "uno encima del otro" de planes activos:

```text
Hoy en Fitness
[Plan 1]  Min-Max — Upper 1
[Plan 2]  Calistenia — Tracción
[Plan 3]  Prehab — Hombro
```

Cada tarjeta de plan:
- Nombre del plan.
- Tipo (gym, calistenia, prehab, movilidad, etc.).
- Botones: `Empezar sesión` (primary) y `Ver detalles` (secondary).
- Click en `Ver detalles` lleva a la sección correspondiente (rutina dentro de Library → Catálogo,
  o ruta de habilidades dentro de Library → Skills).

#### 1.3 TodayCalendar
- Calendario semanal solo de fitness (no se cruzan tareas laborales/idiomas aquí).
- Cada día: tipo de entrenamiento más importante (`Upper`, `Lower`, `Habilidades`, `Descanso`).
- Debajo: lista de sesiones de la semana con estado (completado, omitido, adaptado).
- No más de 3 métricas visibles: consistencia %, sesiones completadas, último PR.

**Copy exacto sección Hoy:** `Hoy en Fitness`, `Rutina del día`, `Cronograma`, `Empezar sesión`,
`Ver detalles`.

## B. `/app/fitness/library` — Rutinas y biblioteca

### 1. Estructura de nivel 2 y 3

- Nivel 2 (SectionNav): `Hoy` · `Rutinas y biblioteca` · `Progreso y cargas`.
- Nivel 3 cuando estás en `/app/fitness/library`:
  - `Catálogo de rutinas` → `/app/fitness/library/catalog`
  - `Habilidades y progresiones` → `/app/fitness/library/skills`
  - `Base de datos y biblioteca` → `/app/fitness/library/data`

`FitnessLibrary.tsx` simplemente delega según la ruta.

### 2. Catálogo de rutinas (`LibraryCatalog.tsx` + `catalog.astro`)

- Lista vertical de rutinas (Min-Max, Powerbuilding, Glute, rutinas clínicas, etc.).
- Cada rutina:
  - nombre,
  - duración,
  - frecuencia,
  - botón `Ver programa`,
  - botón `Activar`.
- Botón `Añadir nueva rutina` al inicio y al final de la lista, no en una pestaña aparte.

Campos extra (no todos visibles por defecto):
- `%PR` aproximado por bloque.
- `RPE` / `RIR` objetivo (mostrados en tooltip o detalle, no en la tarjeta principal).
- Ejercicios recomendados para sustitución (en detalle de rutina, no en la lista).

### 3. Habilidades y progresiones (`LibrarySkills.tsx` + `skills.astro`)

Esta vista reusa `SkillsHub`, pero dentro de la estructura de biblioteca:

- `PageHeader`: `Habilidades y progresiones`.
- SectionNav de nivel 3 ya descrito.
- Dentro: rutas por disciplina (Tracción, Empuje, Core, Pierna, Soporte/Anillas, Movilidad,
  MMA, Box, Parkour, Flexibilidad…).
- `Mi práctica` ya NO vive aquí como módulo principal: su resumen está en Hoy (FitnessToday).
- Filtros visibles: disciplina, plan, objetivo (`Fuerza`, `Movilidad`, `Recuperación`).

### 4. Base de datos y biblioteca (`LibraryDatabase.tsx` + `data.astro`)

Sección dividida en 2 bloques:

1. **Base de datos de ejercicios FitApp**
   - Lista/tabla con filtros por patrón, músculo, equipo.
   - Cada ejercicio abre ficha FitApp (si verificado) o ficha local.
   - Notas: cuales están verificados, pendientes o con problemas de mapping.

2. **Biblioteca teórica**
   - Libros: Nippard, Overcoming Gravity, Overcoming Tendonitis, etc. Solo metadatos + notas.
   - Videos científicos: enlaces y notas.
   - Notas internas relevantes.

**Copy exacto:** `Rutinas y biblioteca`, `Catálogo de rutinas`, `Habilidades y progresiones`,
`Base de datos y biblioteca`.

## C. `/app/fitness/progress` — Progreso y tabla de cargas

La vista actual ya tiene `ProgressDashboard` y `LoadGuide`, pero deben estar integrados en
un diseño único.

### 1. Estructura

`FitnessProgress.tsx`:

- `PageHeader`: `Progreso y cargas`.
- SectionNav nivel 2: sigue igual (`Hoy` · `Rutinas y biblioteca` · `Progreso y cargas`).
- Dentro de la página:
  1. `ProgressHistory` (resumen + historial + PRs).
  2. `LoadGuide` (guía de cargas y discos).

### 2. ProgressHistory

- Bloque superior `Resumen` con máximo 4 KPIs (ya implementado, verificar tokens de diseño).
- Pestañas internas o toggles SOLO si son necesarios: `Historial`, `PRs`, `Estadísticas`.
- `Estadísticas` se abre solo al tocar `Ver estadísticas detalladas`, no por defecto.

### 3. LoadGuide (ya implementado como `LoadGuide.tsx`)

- Selección de ejercicio.
- Tabla de cargas con columnas: `%PR`, `RPE`, `Peso objetivo`, `Discos por lado`.
- Reutilizar la lógica de FitApp (no escribir fórmulas nuevas).

**Copy exacto:** `Progreso y cargas`, `Resumen`, `Historial`, `PRs`, `Ver estadísticas detalladas`,
`Guía de cargas`, `Discos por lado`.

## D. Limpieza y migración

1. Eliminar rutas antiguas de Fitness que dupliquen vistas (`/app/fitness/today`,
   `/app/fitness/catalog`, `/app/fitness/progress` si ahora viven como `index.astro`,
   `library.astro`, `progress.astro`). Mantener solo la nueva estructura.
2. Actualizar `SECTION_NAV.fitness` y `SECTION_NAV['fitness.library']` conforme a este FIX.
3. Actualizar cualquier enlace interno (`href`) que apunte a las rutas antiguas.

## E. Aceptación (con evidencia)

- Captura `/app/fitness` desktop y 375px: stack Prehab → Rutina del día → Cronograma.
- Captura `/app/fitness/library` en `Catálogo de rutinas`, `Habilidades y progresiones` y
  `Base de datos y biblioteca` mostrando el mismo patrón de PageHeader + SectionNav.
- Captura `/app/fitness/progress` con bloque de `Progreso` arriba y `Guía de cargas` abajo.
- Comprobación: desde Hoy (global) al tocar "Fitness" se llega a `/app/fitness`; desde una
  tarjeta de plan activo, `Ver detalles` lleva exactamente a la subsección correcta de Library.
