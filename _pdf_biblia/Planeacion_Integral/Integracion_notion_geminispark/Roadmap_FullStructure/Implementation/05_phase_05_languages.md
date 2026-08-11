# Fase 5 — Idiomas

> Prerequisito: Fase 4 cerrada. Prioridad: **Alemán primero**, Inglés después, Portugués no se
> construye.

## Arquitectura de código

```text
src/pages/app/languages/
  index.astro          // Hoy idiomas
  german.astro
  english.astro
src/components/languages/
  LanguageToday.tsx
  LessonView.tsx
  VocabularySession.tsx
  SpeakingPractice.tsx
src/data/languages/
  germanCourse.ts      // unidades y lecciones (contenido propio/referenciado)
  englishCourse.ts
  vocabulary.ts
src/lib/languages/
  spacedRepetition.ts  // revisión espaciada simple
```

## Modelo de datos (obligatorio, crear primero)

```ts
type LanguageCourse = { id: string; language: 'de' | 'en'; title: string; units: Unit[] };
type Unit = { id: string; order: number; title: string; lessons: Lesson[] };
type Lesson = {
  id: string; order: number; title: string; kind: 'theory' | 'vocabulary' | 'listening' | 'speaking' | 'writing';
  content: string[];        // bloques breves, redacción propia
  exercises: Exercise[];
  estimatedMinutes: number;
};
type VocabularyItem = { id: string; language: string; term: string; translation: string;
  example?: string; topic: string; level: string; lastReviewed?: string; easeFactor: number };
```

## Tarea 5.1 — Hoy idiomas (PR)

`LanguageToday.tsx` en `/app/languages`:
- `Alemán hoy`: 1 sesión de 20–35 min (lección o vocabulario según toque).
- `Inglés hoy` (opcional, toggle en configuración).
- Racha actual (número, sin presión visual).

**Copy exacto:** `Idiomas`, `Alemán hoy`, `Inglés hoy`, `Empezar sesión`, `Racha: N días`.

## Tarea 5.2 — Alemán: teórico clásico (PR)

1. `germanCourse.ts`: unidades ordenadas siguiendo la estructura de los libros de referencia
   (Menschen/Grammatik aktiv) como **referencia de orden y temas**, con contenido redactado
   propio. Cada lección enlaza al PDF correspondiente con `Ver libro`.
2. `LessonView.tsx`: teoría en bloques cortos + ejercicios (completar espacios, ordenar
   oraciones, opción múltiple). Máximo 3 ejercicios por lección en MVP.
3. Progreso por lección: `sin empezar` / `en curso` / `completada`.

**Copy exacto:** `Teoría`, `Ejercicios`, `Ver libro`, `Completada`.

## Tarea 5.3 — Alemán: vocabulario (PR)

1. `VocabularySession.tsx`: sesión diaria de 10–15 ítems usando `spacedRepetition.ts`
   (intervalos: 1d, 3d, 7d, 14d, 30d).
2. Cada tarjeta: término → ocultar traducción → revelar → autoevaluación `Bien` / `Repasar`.
3. Sin rachas punitivas; si se pierde un día, la cola simplemente continúa.

**Copy exacto:** `Vocabulario`, `Revelar`, `Bien`, `Repasar`.

## Tarea 5.4 — Speaking con IA (PR; IA mínima, sin voz en MVP)

1. `SpeakingPractice.tsx`: prompt de conversación por escrito con IA (worker + Gemini),
   nivel A1, corrección de: orden de palabras, gramática, vocabulario.
2. La corrección muestra: lo dicho → corrección → 1 explicación de máximo 2 líneas.
3. Pronunciación/voz queda fuera del MVP: mostrar `Próximamente` solo si el feature flag está ON.

**Copy exacto:** `Práctica de conversación`, `Enviar`, `Corrección`, `Próximamente`.

## Tarea 5.5 — Inglés (PR)

1. `englishCourse.ts` con dos tracks: `Empresarial` (entrevistas, emails, small talk) y
   `Técnico` (3D, desarrollo, IA). Misma estructura de Lesson.
2. Sección `Teoría`: referencia gramatical completa en formato enciclopédico navegable
   (índice por temas, no libro lineal).
3. Speaking con IA reutiliza `SpeakingPractice.tsx` con prompts de entrevista laboral.

**Copy exacto:** `Empresarial`, `Técnico`, `Teoría`, `Simulación de entrevista`.

## Cierre de fase

- Alemán usable de punta a punta: teoría + vocabulario + speaking escrito.
- Inglés con tracks empresarial/técnico funcionales.
- Integración con Hoy global: tareas de idiomas aparecen con etiqueta `idiomas`.
