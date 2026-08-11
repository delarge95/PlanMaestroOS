# Fase 4 — Laboral

> Prerequisito: Fase 3 cerrada.
> Esta es la fase más grande. Ejecutar las tareas en orden estricto. Cada tarea = un PR.

## Arquitectura de código

```text
src/pages/app/career/
  index.astro              // Resumen laboral del día
  roadmap.astro            // Goals y calendario
  portfolio.astro          // Portafolio, CV y simuladores
  projects.astro           // Proyectos activos + base de datos
  jobs.astro               // Pipeline de empleo
  learning.astro           // Cursos
  news.astro               // Noticias y ver más tarde
src/components/career/
  CareerToday.tsx
  RoadmapBoard.tsx
  PortfolioSimulator.tsx   // simuladores ArtStation/LinkedIn/GitHub/Web
  ProjectCard.tsx
  JobsPipeline.tsx
  JobsSchedule.tsx
  CompanyDatabase.tsx
  CourseTracker.tsx
  NewsInbox.tsx
src/data/career/
  goals.ts
  portfolioProjects.ts
  companies.ts
  applications.ts
  courses.ts
  savedContent.ts
src/lib/career/
  pipelineRules.ts
  followUpDates.ts
```

## Tarea 4.1 — Resumen laboral del día (PR)

`CareerToday.tsx` en `/app/career`:
- `Próxima acción laboral` (una sola).
- `Aplicaciones esta semana` (número).
- `Seguimientos pendientes` (número + lista de máximo 3).
- CTA: `Abrir pipeline`.

**Copy exacto:** `Laboral`, `Próxima acción`, `Aplicaciones esta semana`, `Seguimientos pendientes`,
`Abrir pipeline`.

## Tarea 4.2 — Roadmap y goals (PR)

`RoadmapBoard.tsx`:
- Tres columnas: `Corto plazo` / `Mediano plazo` / `Largo plazo`.
- Cada goal: título, área, fecha objetivo, tareas vinculadas.
- Vista calendario alternativa con toggle.
- Cambiar prioridad = drag o menú de 3 opciones; nada de modales de confirmación para reordenar.

**Aceptación:** reordenar persiste tras recarga; máximo 5 goals por columna visibles (resto en
`Ver todos`).

## Tarea 4.3 — Portafolio y CV con simuladores (PR)

`PortfolioSimulator.tsx` con 4 pestañas: `ArtStation`, `LinkedIn`, `GitHub`, `Web`.

Reglas de cada simulador (imitar ESTRUCTURA, nunca logos/branding exactos):

1. **ArtStation-like:** grid de proyectos con imagen de portada, título, tags; vista de proyecto
   con orden de imágenes y descripción.
2. **LinkedIn-like:** headline, experiencia, proyectos destacados, skills.
3. **GitHub-like:** repos fijados, README de perfil, tarjetas de repo con descripción/stack.
4. **Web personal:** secciones de landing (hero, proyectos, sobre mí, contacto).

Funcionalidad:
- Arrastrar/reordenar proyectos dentro del simulador.
- Banner superior permanente: `Simulación de referencia — no es la plataforma real`.
- Botón `Exportar checklist` que genera lista de pasos para replicar en la plataforma real
  (ej. "1. Subir portada de TwinSight con título X. 2. Tags: …").

**Copy exacto:** `Portafolio y CV`, `Simulación de referencia — no es la plataforma real`,
`Exportar checklist`, `Orden de proyectos`.

**Aceptación:** el estado del simulador persiste; exportar checklist genera texto copiable.

## Tarea 4.4 — Proyectos (PR)

`ProjectCard.tsx` y `/app/career/projects`:
- Proyectos activos como secciones propias (TwinSight, Human…): tareas pendientes, estado GitHub
  (issues abiertos, último commit), próxima acción.
- Proyectos completados en disclosure `Base de datos de proyectos` con estado: `Pulir` /
  `Mejorar` / `Listo para portafolio`.
- Datos de GitHub vía worker/scripts (snapshot), nunca token en cliente.

**Copy exacto:** `Proyectos`, `Proyectos activos`, `Base de datos de proyectos`, `Pulir`,
`Mejorar`, `Listo para portafolio`.

## Tarea 4.5 — Empleo: pipeline y cronograma (PR)

`JobsPipeline.tsx`:
- Columnas: `Frío` / `Tibio` / `Caliente` / `Aplicado` / `Seguimiento` / `Entrevista` / `Cerrado`.
- Cada tarjeta: empresa, rol, próxima acción, fecha de seguimiento.
- UNA próxima acción por aplicación (regla dura: validar en datos).

`JobsSchedule.tsx`:
- Secciones: `Hoy`, `Mañana`, `Pasado mañana`, `Próximos días`.
- Cada entrada: empresa + acción concreta (`Enviar correo en frío`, `Aplicar`, `Hacer seguimiento`).

`CompanyDatabase.tsx`:
- Historial completo por empresa: mensajes enviados, CV usado, respuestas, resultado.
- Todo cambio queda en timeline (fecha + tipo + nota). Nada se borra; se archiva.

**Copy exacto:** `Empleo`, `Frío`, `Tibio`, `Caliente`, `Hacer seguimiento`,
`Base de datos de empresas`, `Mensajes`, `Resultado`.

**Aceptación:** abrir una empresa muestra su timeline completo; cambiar de columna registra el
movimiento con fecha.

## Tarea 4.6 — Cursos (PR)

`CourseTracker.tsx`:
- `Hoy` (tarea del curso activo), `Cursos activos`, `En la mira` (ordenados por prioridad),
  `Noticias` (becas, másteres, cursos nuevos relevantes).

**Copy exacto:** `Cursos`, `Cursos activos`, `En la mira`, `Noticias`.

## Tarea 4.7 — Noticias y ver más tarde (PR)

`NewsInbox.tsx`:
- Categorías: `IA`, `3D / Tech Art`, `Desarrollo y diseño`, `Carrera`.
- Cada item: título, fuente, fecha, categoría, acciones `Guardar` / `Descartar` / `Leído`.
- Es una **cola**, no un feed: máximo 10 items visibles, resto paginado.

**Copy exacto:** `Noticias`, `Ver más tarde`, `Guardar`, `Descartar`, `Leído`.

## Cierre de fase

- Checklists OK + capturas de cada vista.
- Verificar: ninguna acción de IA de envío existe aún (eso es Fase 7).
