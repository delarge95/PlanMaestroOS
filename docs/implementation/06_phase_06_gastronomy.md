# Fase 6 — Gastronomía + pipeline "Ver más tarde"

> Prerequisito: Fase 5 cerrada.
> Nota legal: no copiar recetas/libros con copyright. Guardar enlaces, metadatos y notas propias.

## Arquitectura de código

```text
src/pages/app/gastronomy/
  index.astro        // Resumen
  library.astro      // Biblioteca y recursos
  plans.astro        // Planes y macros
  saved.astro        // Ver más tarde
src/components/gastronomy/
  RecipeCard.tsx
  RecipeDetail.tsx
  PlanBoard.tsx
  SavedInbox.tsx
src/data/gastronomy/
  recipes.ts
  books.ts
  chefs.ts
  plans.ts
src/lib/gastronomy/
  macros.ts          // cálculo de macros por receta
scripts/
  capture-saved.ts   // ingesta de enlaces FB/IG/YT (manual en MVP)
```

## Modelo de datos

```ts
type Recipe = {
  id: string; title: string; sourceUrl?: string; sourceName?: string;
  ingredients: { name: string; quantity: string }[];
  steps: string[];                    // redacción propia
  cuisine: string; difficulty: 'baja' | 'media' | 'alta'; cost: 'económica' | 'media' | 'alta';
  timeMinutes: number;
  macros?: { kcal: number; protein: number; carbs: number; fat: number };
  tags: string[]; myNotes?: string;
};
type SavedItem = { id: string; url: string; platform: 'fb' | 'ig' | 'yt' | 'other';
  title: string; category: string; savedAt: string; status: 'queue' | 'processed' | 'discarded' };
```

## Tarea 6.1 — Biblioteca (PR)

- `library.astro`: lista de recetas con filtros (cocina, dificultad, costo, tiempo).
- `RecipeCard` → `RecipeDetail`: primero ingredientes y pasos (lo esencial), después notas y
  referencia en disclosure `Fuente y notas`.
- Subsecciones: `Libros` (metadatos + notas propias) y `Chefs` (nombre, especialidad, enlaces).

**Copy exacto:** `Gastronomía`, `Biblioteca`, `Recetas`, `Libros`, `Chefs`, `Fuente y notas`.

## Tarea 6.2 — Planes y macros (PR)

- `PlanBoard.tsx`: planes dietarios por objetivo (`Déficit`, `Mantenimiento`, `Volumen`).
- Cada plan: lista de recetas asignadas por día de semana; total de macros del día calculado con
  `macros.ts`.
- Conexión futura con fitness documentada pero NO implementada aquí (solo dejar el campo
  `fitnessGoal` en el tipo `Plan`).

**Copy exacto:** `Planes`, `Objetivo`, `Macros del día`.

## Tarea 6.3 — Ver más tarde (PR)

1. `SavedInbox.tsx`: cola de items guardados. Máximo 10 visibles; acciones `Procesar` /
   `Descartar`. `Procesar` abre mini-flujo: elegir categoría y (si es receta) convertir a `Recipe`
   con redacción propia.
2. MVP de captura: formulario `Guardar enlace` (pegar URL de FB/IG/YT) que extrae título cuando
   sea posible (oEmbed de YouTube; para FB/IG guardar URL + título manual). Extensión de
   navegador queda documentada como fase futura.

**Copy exacto:** `Ver más tarde`, `Guardar enlace`, `Procesar`, `Descartar`, `Convertir en receta`.

## Cierre de fase

- Receta abrible en 1 toque desde la lista.
- Cola de "ver más tarde" nunca muestra más de 10 items.
- Ningún contenido con copyright copiado: revisión manual de 5 recetas de muestra.
