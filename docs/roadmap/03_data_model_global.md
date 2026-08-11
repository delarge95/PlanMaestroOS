# Modelo de datos global

## Entidades principales
- Task
- Project
- Area
- TrainingProgram
- WorkoutSession
- SkillPath
- CareerApplication
- LanguageCourse
- Recipe
- Note / Reference

## Relaciones
- Task → Area, Project, Fecha, Prioridad.
- Project → Repositorio GitHub, Portfolio.
- TrainingProgram → Exercise, SkillPath, PrehabProtocol.
- CareerApplication → Empresa, CVVersion, Mensajes.
- LanguageCourse → Lesson, VocabularyItem.
- Recipe → Objetivo fitness opcional, macros.

## Identificadores
- `externalId` único por entidad.
- `notionPageId` cuando aplique.
- No usar nombres como clave.

## Reglas
- No duplicar entidades entre vistas.
- Historial nunca se borra, solo se archiva.
