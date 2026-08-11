# 11 · Backlog de implementación y scaffolding

## Objetivo
Traducir la arquitectura a un backlog técnico claro, por fases.

## Fases de implementación
### Fase 0 — Setup base
- Definir estructura de monorepo (Plan Maestro + FitApp).
- Crear carpeta `docs/` con los MD de arquitectura.
- Configurar Astro shell y rutas básicas.

### Fase 1 — Hoy + Agenda + Fitness básico
- Implementar Hoy con Top 3, bloques A/B.
- Integrar vista básica de Fitness (rutina activa, progreso simple).
- Configurar sync mínima con Notion para tareas y sesiones resumidas.

### Fase 2 — Laboral y proyectos
- Implementar sección Laboral:
  - roadmap,
  - pipeline empleo,
  - proyectos.
- Conectar GitHub para proyectos.
- Añadir IA para resúmenes y borradores.

### Fase 3 — Idiomas (alemán)
- Implementar estructura de cursos y lecciones.
- Crear práctica diaria y vocabulario.
- Integrar IA conversacional básica.

### Fase 4 — Clínico y ajustes UX
- Integrar plan clínico y ayudas TDAH/ansiedad.
- Ajustar UI según feedback y pruebas de usabilidad.

### Fase 5 — Gastronomía y expansiones
- Definir y construir MVP de gastronomía.
- Preparar inglés avanzado y otros módulos.

## Estructura de carpetas (resumen)
```text
src/
  app/
  components/
    shell/
    today/
    fitness/
    clinical/
    career/
    languages/
    gastronomy/
  data/
    contracts/
    adapters/
    snapshots/
  lib/
    notion/
    github/
    sync/
    ai/
worker/
  src/
```

Cada fase se implementa en PRs pequeños, con validación, tests y documentación.
