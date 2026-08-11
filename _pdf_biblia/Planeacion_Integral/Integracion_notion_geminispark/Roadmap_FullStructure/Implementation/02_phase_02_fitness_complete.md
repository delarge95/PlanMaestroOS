# Fase 2 — Fitness completo

> Prerequisito: Fase 1 verificada sin FALLA P0.
> Fuentes: `05_fitness_deep_dive.md`, `12_fitapp_integration.md`, auditorías fitness previas.
> Regla: reutilizar el código de FitApp-Free; **no reescribir** componentes que ya funcionan.

## Arquitectura de código de esta fase

```text
packages/fitapp/                  // código FitApp importado (submódulo o copia con sync)
src/components/fitness/
  FitnessToday.tsx
  SkillsHub.tsx                   // rutas y progresiones
  MyPracticeSummary.tsx           // resumen que se muestra en Hoy
  LoadGuide.tsx                   // tabla de cargas y discos
  PrehabBlock.tsx
  ProgressDashboard.tsx
src/data/fitness/
  skillPaths.ts
  skillExercises.ts               // fichas locales de cada paso
  prehabProtocols.ts
  exerciseMap.ts                  // equivalencias verificadas a FitApp
src/lib/fitness/
  loadCalculator.ts               // PR + RPE -> carga y discos
  prTracker.ts
  volumeStats.ts                  // volumen por músculo
scripts/
  validateFitness.ts
```

---

## Tarea 2.1 — Habilidades y progresiones (PR)

1. Crear `/app/fitness/skills` que renderiza `SkillsHub`:
   - Lista de rutas por dominio: Tracción, Empuje, Core, Pierna, Soporte/Anillas, Movilidad.
   - Cada ruta es un disclosure: título grande de ruta, filas compactas de pasos.
2. Jerarquía obligatoria (ya corregida en auditoría anterior; verificar que sigue aplicada):
   - Ruta = `h1` visual; paso actual = `h2`.
   - Pasos como filas `01 Nombre`, sin prefijo `Paso N:`.
3. Cada paso abre ficha local (`skillExercises.ts`) con: qué se practica, setup, 3–5 pasos de
   ejecución, hasta 3 errores comunes, regresión, siguiente paso, equipo.
4. `Ver en FitApp` solo si la equivalencia en `exerciseMap.ts` es `verified: true`.
   Si no: texto `Ficha FitApp pendiente`, botón deshabilitado.
5. `MyPracticeSummary` consume la ruta/paso activo y se monta en Hoy (`/app/today` y
   `/app/fitness`), con filtros por disciplina.

**Copy exacto:** `Mi práctica`, `Practicar hoy`, `Ver ejercicio`, `Cambiar ruta`,
`Ficha FitApp pendiente`, `Activo hoy`.

**Aceptación:** toda ruta tiene pasos con regresión/siguiente; ninguna fila clicable abre un
ejercicio incorrecto; funciona a 375px sin overflow.

## Tarea 2.2 — Prehab y zonas afectadas (PR)

1. Crear `prehabProtocols.ts`: protocolos por zona (hombro/escápula, codo/muñeca, rodilla, cadera)
   con ejercicios, dosis breve y nota de seguridad.
2. Crear `PrehabBlock`: si `userProfile.painZones` contiene una zona con sesión hoy, el bloque
   aparece primero en el stack de fitness.
3. Check-in simple: dolor 0–10 antes/después. Solo registro; sin recomendaciones automáticas
   más allá de `Considera reducir rango o pausar hoy` cuando el valor sube.

**Copy exacto:** `Zona afectada`, `Prehab de hoy`, `¿Cómo llega hoy?`, `Sin molestia` / `Leve` /
`Notable`, `Considera reducir rango o pausar hoy`.

**Aceptación:** el check-in se guarda y aparece en el historial de la sesión; ningún texto
sugiere diagnóstico o tratamiento.

## Tarea 2.3 — Tabla de cargas y discos (PR)

1. Portar la lógica de cargas de FitApp a `loadCalculator.ts`:
   - entrada: `exerciseId`, `pr`, `rpeObjetivo`;
   - salida: peso objetivo, discos por lado, notas de calentamiento.
2. Crear `LoadGuide.tsx` en `/app/fitness/progress` como pestaña `Cargas`.
3. Seleccionar ejercicio muestra tabla por %PR/RPE. Reusar componentes de FitApp si ya existen;
   solo adaptar tema visual.

**Copy exacto:** `Guía de cargas`, `Discos por lado`, `Calentamiento sugerido`.

## Tarea 2.4 — Progreso histórico (PR)

1. `ProgressDashboard.tsx`:
   - Resumen: sesiones/semana, adherencia, último PR (máx. 4 KPIs).
   - Historial: lista de sesiones expandibles.
   - PRs: filtro por ejercicio/variante.
   - Estadísticas: volumen por músculo y tendencias — detrás de `Ver estadísticas detalladas`.
2. `volumeStats.ts` calcula volumen por músculo desde los logs (ejercicio ejecutado, no prescrito).
3. Todos los filtros de FitApp disponibles, pero colapsados en un panel `Filtros` por defecto.

**Copy exacto:** `Progreso`, `Historial`, `PRs`, `Ver estadísticas detalladas`, `Filtros`.

**Aceptación:** PRs separados por variante (barra/mancuerna/máquina/anillas); una sustitución
no rompe el historial; los gráficos no se muestran si hay menos de 4 sesiones registradas.

## Tarea 2.5 — Validador y QA (PR)

1. `scripts/validateFitness.ts` falla el build si:
   - ejercicio prescrito sin match resuelto;
   - paso de habilidad sin ficha local;
   - enlace FitApp habilitado sin `verified: true`;
   - sustitución incompatible (patrón/equipo).
2. QA manual documentado: capturas 375px y desktop de cada vista nueva; prueba de teclado
   completa en skills y progress.

**Cierre de fase:** todas las tareas con checklist OK; reporte de capturas adjunto al PR final.
