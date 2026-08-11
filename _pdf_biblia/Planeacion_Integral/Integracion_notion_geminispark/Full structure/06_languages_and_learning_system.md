# 06 · Idiomas: arquitectura y sistema de aprendizaje

## Objetivo
Diseñar un módulo de idiomas que empiece con **alemán e inglés**, con foco en práctica diaria, speaking/listening y uso laboral.

## Modelo de datos
- `LanguageCourse`
- `Unit`
- `Lesson`
- `VocabularyItem`
- `ReviewCard`
- `PracticeAttempt`
- `SpeakingSession`

## Inglés
### Subsecciones
- **Empresarial**
  - vocabulario, expresiones, emails, entrevistas.
- **Técnico**
  - terminología 3D, programación, IA, etc.
- **Teoría**
  - gramática completa y estructuras.
- **Práctica con IA**
  - conversaciones guiadas,
  - simulación de entrevistas,
  - feedback en pronunciación y estructura.

## Alemán
### Subsecciones
- **Teórico clásico**
  - basado en libros tradicionales,
  - unidades ordenadas, ejercicios escritos y orales.
- **Speaking con IA**
  - práctica diaria corta,
  - corrección de pronunciación y orden.
- **Vocabulario**
  - listas por tema y nivel,
  - revisión espaciada.

Portugués queda definido como copia de la estructura de alemán, pero no construido en MVP.

## Integración con Hoy
- Cada día, la sección Idiomas aporta:
  - 1 tarea de alemán,
  - opcionalmente 1 tarea de inglés.
- El usuario marca si quiere mostrar ambos o solo uno en Hoy.
