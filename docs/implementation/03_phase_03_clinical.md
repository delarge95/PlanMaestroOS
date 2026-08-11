# Fase 3 — Clínico (TDAH / ansiedad social)

> Prerequisito: Fase 2 cerrada.
> Fuentes: `plan_accion_tdah_ansiedad_social-1.pdf`, `reporte_clinico_neurodesarrollo_ansiedad-2.pdf`.
> Límite absoluto: la sección apoya ejecución; **nunca** diagnostica, ajusta tratamiento ni usa
> lenguaje clínico prescriptivo.

## Arquitectura de código

```text
src/pages/app/clinical/
  index.astro        // Hoy clínico
  routines.astro     // Plan y rutinas
  protocols.astro    // Protocolos y recursos
src/components/clinical/
  ClinicalToday.tsx
  UnblockPanel.tsx   // "¿Bloqueado?"
  ClinicalRoutineList.tsx
  ProtocolCard.tsx
src/data/clinical/
  clinicalTasks.ts
  routines.ts
  protocols.ts       // resúmenes propios, NO texto copiado de PDFs
```

## Tarea 3.1 — Hoy clínico (PR)

1. `ClinicalToday.tsx` muestra:
   - Tareas clínicas del día (máximo 3): regulación, exposición, check-ins.
   - Panel `¿Bloqueado?` siempre disponible pero colapsado.
2. Las tareas clínicas son `Task` normales con área `clinico` → aparecen automáticamente en Hoy
   global y pueden entrar al Top 3.

**Copy exacto:** `Clínico`, `Tareas de hoy`, `¿Bloqueado?`, `Dividir en 3 pasos`,
`Empezar 10 min`, `Cambiar de bloque por ahora`.

## Tarea 3.2 — ¿Bloqueado? (PR)

`UnblockPanel.tsx` al expandirse muestra exactamente 3 opciones:

1. `Dividir en 3 pasos` → input de la tarea + genera 3 subtareas editables (sin IA en esta fase;
   plantilla: inicio, desarrollo, cierre).
2. `Empezar 10 min` → timer simple de 10 minutos; al terminar: `¿Seguir o soltar?` con dos botones.
3. `Cambiar de bloque por ahora` → mueve la tarea a mañana sin penalización ni mensaje de fracaso.

**Aceptación:** ningún flujo requiere más de 2 toques para empezar; el timer no usa notificaciones
agresivas ni sonidos por defecto.

## Tarea 3.3 — Rutinas y protocolos (PR)

1. `routines.ts`: rutinas diarias/semanales (sueño, pausas, exposición social gradual,
   regulación). Cada una: objetivo en 1 línea, pasos, duración estimada, frecuencia.
2. `protocols.ts`: resúmenes originales y breves de los protocolos (rumia: límite 10 min;
   "suficientemente bueno"; desconexión nocturna). Cada protocolo enlaza al PDF fuente con
   botón `Ver documento`.
3. `ProtocolCard.tsx`: tarjeta con regla en 1 línea + disclosure `Detalles`.

**Copy exacto:** `Rutinas`, `Protocolos`, `Ver documento`, `Detalles`.

**Aceptación:** ningún protocolo muestra más de 5 líneas sin expandir; los PDFs se abren en
visor, no se copian.

## Tarea 3.4 — Detección de tareas estancadas (PR)

1. Job diario (script): tareas `status != done` con `dueDate` vencida hace más de 7 días.
2. En Hoy aparece tarjeta discreta: `Llevas varios días con "{título}". ¿La dividimos o la movemos?`
   con botones `Dividir` / `Mover` / `Dejar así`.
3. Sin colores de alarma, sin contadores de "días de retraso" en rojo.

**Aceptación:** la tarjeta es descartable y no reaparece el mismo día si se elige `Dejar así`.

## Cierre de fase

- Checklists OK.
- Revisión de copy completa: ninguna palabra tipo `deberías`, `fallaste`, `incumpliste`.
- Capturas móvil/desktop adjuntas.
