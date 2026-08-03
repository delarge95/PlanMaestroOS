# 05 · Integración FitApp y resolvedores

## Objetivo
Resolver cada nombre de programa o habilidad contra un ejercicio canónico sin adivinar. La cobertura no justifica una redirección incorrecta: un estado pendiente es mejor que un match falso.

## Clasificación de coincidencia
```ts
type MatchKind = 'exact' | 'verified-alias' | 'compatible-variant' | 'ambiguous' | 'unresolved';
```
- `exact`: mismo ejercicio, patrón, equipo y variante.
- `verified-alias`: nombre alternativo confirmado manualmente.
- `compatible-variant`: útil solo para sugerencias de sustitución, nunca para enlazar silenciosamente el ejercicio prescrito.
- `ambiguous`: dos o más candidatos plausibles; requiere revisión manual.
- `unresolved`: sin candidato seguro.

## Normalización y aliases
Normalizar mayúsculas, acentos, puntuación, espacios y abreviaturas, pero conservar el nombre fuente para auditoría. Ejemplos de aliases que requieren verificación explícita:
- `DB Bench` → `Dumbbell Bench Press`.
- `OHP` → `Overhead Press`.
- `RDL` → `Romanian Deadlift`.
- `Lat Pulldown` no debe igualarse automáticamente a dominada.

## Algoritmo obligatorio
1. Buscar por ID canónico cuando ya existe.
2. Buscar coincidencia exacta normalizada.
3. Buscar alias verificado.
4. Si es una sustitución, buscar variante compatible filtrada por patrón, músculo, equipo y perfil de carga.
5. Si hay más de un candidato, marcar `ambiguous`, generar warning y requerir decisión manual.
6. Si no existe candidato, marcar `unresolved`; bloquear publicación para ejercicios obligatorios.

## Datos de enlace
Cada referencia debe guardar:
```ts
type ExerciseReference = {
  localExerciseId: string;
  fitAppExerciseId: string | null;
  matchKind: MatchKind;
  verified: boolean;
  verifiedAt?: string;
  verifiedAgainst?: { title: string; equipment: string[]; videoId?: string };
  note?: string;
};
```

## UI ante estados incompletos
- `exact` + `verified`: habilitar `Ver en FitApp`.
- `verified-alias`: habilitar solo si la ficha muestra el alias y se verificó patrón/equipo/video.
- `compatible-variant`: mostrar solo dentro de `Sustituir` y explicitar que es variante.
- `ambiguous` o `unresolved`: no enlazar; mostrar `Ficha FitApp pendiente` en detalle local.

## Validación
El build/test debe fallar si:
- un ejercicio obligatorio está `unresolved` o `ambiguous`;
- un enlace habilitado no es `exact` o alias verificado;
- una sustitución no preserva criterios requeridos;
- el mismo ID se usa para ejercicios semánticamente distintos;
- un match verificado no conserva evidencia de verificación.

## Alcance actual
No editar FitApp-Free en esta fase. Documentar los casos pendientes en una cola para una futura corrección del catálogo externo.
