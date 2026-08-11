# 08 · Relaciones de datos y modelo de grafo

## Objetivo
Definir cómo se relacionan los datos entre secciones para que la app pueda usar un único “cerebro de datos” en Notion/local.

## Entidades principales
- Task
- Project
- Area
- TrainingProgram
- WorkoutSession
- SkillPath
- CareerApplication
- ProjectPortfolio
- Course
- LanguageCourse
- Recipe
- Note / Reference

## Relaciones clave
- Task → Area, Project, Fecha, Prioridad.
- Project → Repositorio GitHub, Portfolio.
- TrainingProgram → Exercise, SkillPath, PrehabProtocol.
- CareerApplication → Empresa, CVVersion, Mensajes.
- LanguageCourse → Lesson, VocabularyItem.
- Recipe → Objetivo fitness opcional, macros.

## Identificadores
- Cada entidad tiene un `externalId` de Plan Maestro y un `notionPageId` o identificador equivalente.
- No se usan nombres como clave de relación.

## Reglas
- Una misma entidad no se duplica en múltiples vistas; cada vista filtra y presenta los mismos datos.
- El historial nunca se borra; solo se marca como archivado.
