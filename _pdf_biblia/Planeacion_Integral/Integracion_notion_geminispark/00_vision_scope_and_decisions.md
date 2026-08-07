# Plan Maestro OS — Visión, alcance y decisiones de arquitectura

## Propósito del sistema
Plan Maestro OS es un sistema personal de ejecución y conocimiento, no un dashboard que intenta mostrar toda la vida a la vez. Su función es reducir fricción: orientar el día, preservar contexto, registrar evidencia y convertir datos en una siguiente acción pequeña.

La app debe atender especialmente a trabajo profundo de tesis/TwinSight, búsqueda laboral y portafolio, fitness/salud, idiomas y organización. Su interfaz debe ser minimalista y compatible con TDAH: una prioridad visible, decisiones reversibles, información por capas y una salida clara de cada pantalla.

## Alcance por fases
### MVP actual — obligatorio
1. **Agenda y foco:** Top 3, Bloque A/B, próxima acción, cierre del día.
2. **Fitness:** conservar e integrar el MVP existente de catálogo, entrenamiento, registros, PRs, salud/prehab y habilidades.
3. **Carrera:** pipeline de aplicaciones, empresas, roles, acciones siguientes, versiones de CV/portafolio y seguimiento.
4. **Infraestructura:** Notion como fuente operativa de datos personales, repositorio como fuente de código y documentación versionada, app Astro como lectura/control seguro.

### Próxima fase — diseñada, no construida ahora
- Tesis/TwinSight.
- Alemán e inglés.
- Academia/becas/cursos.

### Futuro — solo contratos y espacio de navegación
- Gastronomía.
- MMA/cardio/yoga/meditación nutrición avanzada.
- Noticias e investigación automatizada.
- Automatizaciones de IA de mayor autonomía.

## Decisiones clave
| Decisión | Regla |
|---|---|
| Fuente de verdad | Notion es fuente operativa para entradas humanas y seguimiento; GitHub es fuente de código y documentación técnica versionada; la app nunca mezcla ambos sin trazabilidad |
| Astro en GitHub Pages | Es estático: no debe exponer `NOTION_TOKEN`, ni escribir directamente a Notion desde el navegador |
| Escrituras | Se ejecutan por un backend/worker autenticado o automatización de servidor; nunca desde cliente público |
| Sincronización | No implementar bidireccionalidad genérica Notion↔Sheets↔GitHub; definir por entidad un dueño y una dirección explícita |
| IA | Asistente con borradores, explicaciones y propuestas; no ejecutor autónomo de aplicaciones, mensajes, borrados o cambios sensibles |
| Datos personales | Mínimo necesario, control de acceso, retención definida, exportación y borrado posibles |

## Principio de ownership
Cada entidad tiene un sistema dueño:
- Tareas, bloques diarios, aplicaciones, hábitos, check-ins: Notion.
- Código, incidencias técnicas, PRs, releases, metadatos de repositorios: GitHub.
- Registros de entrenamiento de alta frecuencia: almacenamiento de aplicación/local primero; Notion recibe resúmenes o snapshots, no cada interacción de UI.
- Google Sheets: puente de lectura/reportes o contingencia temporal, no tercera fuente de verdad.

## No hacer en el MVP
- No construir cinco bases monolíticas para todas las áreas de vida.
- No añadir chat IA omnipresente ni automatizaciones nocturnas que escriban sin aprobación.
- No poner tokens de Notion, GitHub o Gemini en GitHub Pages.
- No usar Google Sheets y Notion con sync bilateral sin IDs estables, logs de cambios y resolución de conflictos.
- No intentar curso completo de idiomas, gastronomía, becas y salud integral antes de validar Agenda, Fitness y Carrera.

## Definición de éxito del MVP
En menos de 60 segundos, la persona puede abrir la app y saber: su Top 3, el siguiente bloque, el próximo paso de una aplicación o entrenamiento y qué se registró hoy. Los datos se conservan, son trazables y ninguna automatización sensible actúa sin revisión.
