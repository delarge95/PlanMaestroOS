# Fase 1 — Verificación y corrección de lo ya implementado

> Contexto: el asistente ya implementó Hoy + Agenda + Fitness básico. Este documento audita
> esa implementación contra los documentos guía (02_information_architecture, 04_hoy_and_task_manager,
> 05_fitness_deep_dive, 12_fitapp_integration) y ordena correcciones exactas.

## Cómo ejecutar esta fase

Para cada checklist: verificar ítem por ítem, marcar OK/FALLA con evidencia (captura o ruta de archivo),
y corregir lo que falle **antes de continuar**. Cada corrección es un PR.

---

## A. Estructura y navegación

### Checklist A1 — Rutas existen
- [ ] `/app/today` renderiza la vista Hoy sin errores de consola.
- [ ] `/app/fitness` renderiza la sección Fitness.
- [ ] `/app/fitness/today`, `/app/fitness/catalog`, `/app/fitness/progress` existen (si se decidió anidar).
- [ ] Navegación principal muestra solo: `Hoy`, `Fitness`, `Clínico`, `Laboral`, `Idiomas`, `Gastronomía`, `Más`.
  Ninguna otra entrada. Las secciones no construidas muestran estado "Próximamente" o están ocultas —
  **decidir una de las dos y aplicarla igual en todas**.

### Corrección A1
Si faltan rutas o la navegación difiere, crear/ajustar:

```text
src/pages/app/today.astro
src/pages/app/fitness/index.astro
src/components/shell/AppShell.astro        // layout con navegación principal
src/components/shell/MainNav.tsx           // items de navegación
```

`MainNav` debe ser un array de datos, no JSX hardcodeado repetido:

```ts
const NAV_ITEMS = [
  { href: '/app/today', label: 'Hoy', icon: 'sun' },
  { href: '/app/fitness', label: 'Fitness', icon: 'dumbbell' },
  { href: '/app/clinical', label: 'Clínico', icon: 'heart-pulse', disabled: true },
  { href: '/app/career', label: 'Laboral', icon: 'briefcase', disabled: true },
  { href: '/app/languages', label: 'Idiomas', icon: 'languages', disabled: true },
  { href: '/app/gastronomy', label: 'Gastronomía', icon: 'chef-hat', disabled: true },
  { href: '/app/more', label: 'Más', icon: 'ellipsis', disabled: true },
];
```

Reglas: un solo item activo visible; en móvil la navegación colapsa a barra inferior con máximo
4 items + "Más".

---

## B. Vista Hoy

### Checklist B1 — Estructura
- [ ] El encabezado muestra `Hoy` + fecha. Sin banners ni párrafos de bienvenida.
- [ ] Existe UNA acción primaria contextual (ej. `Empezar bloque A` o `Empezar sesión`).
- [ ] El Top 3 muestra **máximo 3 tareas**. Si hay menos, no inventa relleno.
- [ ] Cada tarea del Top 3 muestra: título, chip de área, próxima acción, estado.
- [ ] Existe `Ver más tareas` como acción secundaria que abre el task manager completo del día.

### Checklist B2 — Bloques A/B
- [ ] Bloque A y Bloque B visibles con la tarea asignada a cada uno.
- [ ] Cada bloque tiene botón `Empezar 10 min`.
- [ ] No hay más de 2 bloques visibles; el resto de tareas vive en el task manager.

### Checklist B3 — Filas por área
- [ ] Fitness aparece como fila condensada: rutina activa + siguiente sesión (+ prehab si programado).
- [ ] Ninguna fila de área muestra dashboards, gráficas ni más de 3 datos.

### Checklist B4 — Calendario y canvas
- [ ] El calendario semanal existe y tiene filtros por etiqueta (`fitness`, `laboral`, `idiomas`, `clínico`).
- [ ] Si "modo canvas" no está implementado, el botón NO debe aparecer. Nunca mostrar botones sin función.

### Corrección B — copy exacto
Usar estos textos tal cual:

| Elemento | Texto |
|---|---|
| Título | `Hoy` |
| CTA bloque | `Empezar 10 min` |
| CTA fitness | `Empezar sesión` |
| Acción secundaria | `Ver más tareas` |
| Estado completado | `Hecho` |
| Acción mover | `Mover a mañana` |
| Estado vacío Top 3 | `Sin prioridades todavía. Elige hasta 3 tareas para hoy.` |

Prohibido: `¡Vamos!`, `¡Tú puedes!`, emojis, exclamaciones motivacionales.

---

## C. Datos y sincronización

### Checklist C1 — Contratos
- [ ] Existe `src/data/contracts/task.ts` con el tipo `Task` del roadmap.
- [ ] Las tareas no se guardan en dos stores distintos. Identificar el store único y documentarlo en
  comentario al inicio del archivo.

### Checklist C2 — Notion
- [ ] Las llamadas a Notion ocurren SOLO en `src/lib/notion/` (build-time) o en worker/scripts —
  nunca desde componentes.
- [ ] Ningún token aparece en código cliente: buscar `NOTION_TOKEN` en `src/components` y `src/pages`;
  si aparece, es FALLA crítica P0.
- [ ] Si Notion falla, Hoy muestra último snapshot con etiqueta `Actualizado hace Xh` y sigue usable.

### Corrección C — adaptador requerido
Si las páginas importan Notion directamente, crear:

```text
src/lib/notion/client.ts        // solo servidor/build
src/lib/adapters/notionTasks.ts // Notion page -> Task (contrato)
public/data/today.json          // snapshot saneado generado en build
scripts/sync-today.ts           // script que genera el snapshot
```

El componente lee `today.json`; nunca el SDK de Notion.

---

## D. Fitness básico

### Checklist D1 — Hoy fitness
- [ ] `/app/fitness` (o `/app/fitness/today`) muestra un stack vertical simple:
  1. Rutina del día activa.
  2. Prehab (solo si hay zona afectada configurada para hoy).
  3. Práctica de habilidad (solo si hay una habilidad activa).
- [ ] Si hay molestia registrada en una zona, el bloque de prehab de esa zona aparece **primero**,
  antes que la rutina.
- [ ] Cada bloque tiene UNA acción primaria y un enlace a su sección.

### Checklist D2 — Catálogo y progreso
- [ ] `/app/fitness/catalog` lista las rutinas con `Ver programa` y `Activar`.
- [ ] El botón `Añadir nueva rutina` aparece al inicio y al final de la lista (no como pestaña aparte).
- [ ] `/app/fitness/progress` muestra PRs y consistencia básica; si no hay datos, estado vacío claro.

### Checklist D3 — Persistencia
- [ ] Activar rutina → recargar → sigue activa.
- [ ] Registrar una sesión → aparece en historial → recargar → sigue ahí.
- [ ] No se duplica la sesión al recargar ni al volver a guardar (idempotencia por `sessionId`).

---

## E. Reporte de cierre de esta verificación

Entregar tabla:

| Ítem | Estado | Evidencia | Corrección (PR) |
|---|---|---|---|
| A1 rutas | OK/FALLA | … | … |

Y al final: lista de FALLAs pendientes con prioridad. **No pasar a Fase 2 con ninguna FALLA P0.**
