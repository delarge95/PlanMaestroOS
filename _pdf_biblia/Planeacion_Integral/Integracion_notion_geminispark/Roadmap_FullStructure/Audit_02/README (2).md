# Paquete de correcciones — 2026-08-11

## Contexto
Segunda ronda de auditoría tras las correcciones del agente. La ronda anterior quedó
estructuralmente implementada (CI verde, tests, worker, sync scripts), pero:
1. Faltan evidencias de varias correcciones críticas (FIX 09).
2. El problema central reportado por el usuario es de SISTEMA DE DISEÑO y ARQUITECTURA DE
   NAVEGACIÓN: cada sección se construyó con patrones distintos y Fitness no sigue la
   especificación acordada.

## Archivos
- `00_REVIEW_applied_fixes.md` — estado real de los 5 fixes anteriores y diagnóstico del problema central.
- `fixes/06_design_system.md` — tokens + primitivas UI estilo Apple + eliminación del "modo simple".
- `fixes/07_global_navigation_and_section_nav.md` — barra global centrada (4 + Más) y SectionNav único para niveles 2 y 3.
- `fixes/08_fitness_section_restructure.md` — reestructura completa de Fitness según la especificación del usuario (Hoy / Rutinas y biblioteca / Progreso y cargas).
- `fixes/09_pending_evidence.md` — checklist ejecutable de evidencias obligatorias.

## Orden de ejecución
06 → 07 → 08 → 09.
Después, replicar el patrón de Fitness (SectionNav + PageHeader + tokens) en Clínico, Laboral,
Idiomas y Gastronomía — un PR por sección, mismos componentes.
