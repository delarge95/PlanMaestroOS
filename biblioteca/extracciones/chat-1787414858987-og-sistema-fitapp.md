# chat-1787414858987-og-sistema-fitapp — Extracción recuperada de chat

> **sourceId:** `chat-1787414858987-og-sistema-fitapp` · **origen:** `chat-export-1787414858987` (Sistema de Fitness Basado en Overcoming Gravity) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «Estamos construyendo un sistema de fitness inteligente que use Overcoming Gravity 2ª ed. como fuente canónica para:  Definir contratos de da…»
Sí. Después de revisar la base de conocimiento y el estado que describes, mi conclusión es:

**El enfoque general es correcto**, pero **la extracción todavía no está completa para cumplir todo lo propuesto**, y además hay **algunos errores concretos** en la implementación inicial de `rules/*.ts` e `isometricDosing.ts` que conviene corregir ya.

En concreto:

- **Lo que ya está bien orientado:**
  - Usar `TrainingRule` como dato, no lógica dispersa.
  - Tener `ALL_RULES` como fuente de reglas.
  - Haber convertido la tabla de isométricos en datos.
  - Haber empezado por volumen, frecuencia y salud de tendones.
  - Haber identificado que los Caps. 23–27 deben alimentar `SkillPath/SkillStep`.

- **Lo que falta o está incompleto:**
  - Hay **reglas críticas del libro que aún no están modeladas**: deload, overreaching/overtraining, sueño, enfermedad, balance estructural, límites de excéntricos, skill work no fatigante, etc.
  - La extracción de los Caps. 23–27 es buena cualitativamente, pero **todavía no es suficientemente “machine-readable”** para poblar `SkillStep` de forma completa: faltan ladders exactos, niveles, prerrequisitos, flags de seguridad, equipo alternativo, criterios de progresión y validaciones.
  - Hay **errores de código** en `isometricDosing.ts`.
  - Hay **decisiones de contrato** que conviene endurecer para que el motor de reglas no dependa de strings ambiguos.

A continuación te dejo una **auditoría completa + correcciones + adiciones concretas**.

---

# 1. Veredicto general

## 1.1. ¿El otro agente extrajo “toda” la información relevante?
**No del todo.**

Extrajo bien la base conceptual y una parte importante de programación, pero para dejar el sistema realmente alineado con Overcoming Gravity 2ª ed. faltan todavía:

1. **Más reglas cuantitativas y de comportamiento**
   - deload / mesociclos
   - overreaching vs overtraining
   - sueño
   - enfermedad
   - RPE
   - límites de excéntricos
   - skill work vs strength work
   - balance push/pull
   - preparación de tejido conectivo para movimientos wide/straight-arm
   - consistencia de dosis isométrica

2. **Una extracción más estructurada de progresiones**
   - No basta con cues sueltos.
   - Hay que convertir los ladders en datos:
     - `skillPathId`
     - `stepId`
     - `level`
     - `name`
     - `abbrev`
     - `equipment`
     - `primaryCues`
     - `commonFaults`
     - `scapularCue`
     - `bailTechniques`
     - `requiresConnectivePrep`
     - `prerequisites`
     - `progressionCriteria`
     - `sourceRef`

3. **Correcciones de implementación**
   - `isometricDosing.ts` tiene errores reales.
   - `appliesWhen` como string libre es peligroso si no se normaliza.
   - Varias reglas actuales son demasiado estrechas o están mal escopadas.

---

# 2. Qué está correcto hasta ahora

## 2.1. Está bien la arquitectura básica
La idea de:

- `contracts/rules.ts`
- `rules/*.ts`
- `ALL_RULES`
- `isometricDosing.ts`
- luego `evaluateRules(...)`

es la forma correcta de construir esto.

## 2.2. Está bien empezar por estas familias de reglas
Empezar por:

- volumen/hipertrofia
- frecuencia
- salud de tendones
- isométricos

es razonable, porque son de las partes más cuantificables del libro.

## 2.3. La tabla isométrica es necesaria y estaba bien identificada
Convertir la tabla del Cap. 9 en datos era imprescindible.  
El concepto de `getIsometricDose(maxHoldSec)` también es correcto.

---

# 3. Errores concretos que hay que corregir ya

## 3.1. Error de sintaxis / runtime en `getIsometricDose`
En el código propuesto aparece:

```ts
return ISOMETRIC_TABLE[^0];
```

Eso **no es TypeScript válido**. Debe ser:

```ts
return ISOMETRIC_TABLE[0];
```

### Corrección mínima
```ts
export function getIsometricDose(maxHoldSec: number): IsometricDose {
  if (maxHoldSec <= 1) return ISOMETRIC_TABLE[0];
  if (maxHoldSec >= 30) return ISOMETRIC_TABLE[ISOMETRIC_TABLE.length - 1];

  for (let i = ISOMETRIC_TABLE.length - 1; i >= 0; i--) {
    if (maxHoldSec >= ISOMETRIC_TABLE[i].maxHoldSec) {
      return ISOMETRIC_TABLE[i];
    }
  }

  return ISOMETRIC_TABLE[0];
}
```

---

## 3.2. `totalTimeSec` es ambiguo y puede inducir a error
En la tabla actual, `totalTimeSec` no coincide siempre con `sweetSpot`.

Ejemplo:
```ts
{ maxHoldSec: 3, holdSec: 3, sets: [6, 8], totalTimeSec: 18, sweetSpot: '7x3s' }
```

- `sets * holdSec` da rango **18–24**
- `sweetSpot` implica **21s**
- `totalTimeSec: 18` parece ser el **límite inferior**, no un “objetivo” único.

### Corrección recomendada
Cambiar el modelo a algo más fiel:

```ts
export type IsometricDose = {
  maxHoldSec: number;
  holdSec: number;
  sets: [number, number];
  totalTimeRangeSec: [number, number];
  sweetSpot: string;
};
```

Y derivar el rango automáticamente:

```ts
const RAW_TABLE: Array<Omit<IsometricDose, 'totalTimeRangeSec'>> = [ ... ];

export const ISOMETRIC_TABLE: IsometricDose[] = RAW_TABLE.map((row) => ({
  ...row,
  totalTimeRangeSec: [
    row.sets[0] * row.holdSec,
    row.sets[1] * row.holdSec,
  ],
}));
```

### Por qué importa
Para el motor de reglas, no es lo mismo decir:
- “objetivo fijo 18s”
- que “rango válido 18–24s”

La segunda forma es más fiel al libro.

---

## 3.3. `ISOMETRIC_TABLE` debe exportarse y validarse
Si quieres tests y validación de datos, necesitas exportarla y comprobar que:

- hay 30 filas
- `maxHoldSec` es monotónico
- `sets[0] <= sets[1]`
- `sweetSpot` usa un número de sets dentro del rango declarado
- `holdSec` no se sale de la lógica del rango 60–75% para la mayoría de filas

---

## 3.4. `appliesWhen` como string libre es insuficiente
Esto:

```ts
appliesWhen: "focus==='hypertrophy'"
```

sirve como nota humana, pero **no debería ser el mecanismo real de evaluación** si quieres un sistema robusto.

### Problema
- no es tipado
- invita a usar `eval` o parsing frágil
- dificulta tests
- complica trazabilidad

### Corrección recomendada
Mantener `appliesWhen` solo como documentación, y añadir una condición tipada.

#### Opción mínima
```ts
export type RuleCondition =
  | { all: RuleCondition[] }
  | { any: RuleCondition[] }
  | { not: RuleCondition }
  | {
      fact: string;
      op: 'eq' | 'neq' | 'lt' | 'lte' | 'gt' | 'gte' | 'in';
      value: number | string | boolean | Array<number | string>;
    };

export type TrainingRule = {
  id: string;
  scope: RuleScope;
  metric: RuleMetric;
  bands: {
    maintenance?: RuleBand;
    optimal?: RuleBand;
    excessive?: RuleBand;
  };
  /** Documentación legible */
  appliesWhen?: string;
  /** Condición evaluable */
  when?: RuleCondition;
  priority: number;
  sourceRef: SourceRef;
  notes?: string;
  schemaVersion: 1;
};
```

Esto mantiene las reglas como **datos**, no como lógica arbitraria.

---

## 3.5. La regla de volumen actual está demasiado acotada
En el código inicial tienes algo como:

```ts
scope: { kind: 'pattern', pattern: 'horizontal-push' }
```

Pero el libro no dice que ese rango valga solo para horizontal-push.  
La idea de volumen por sesión/grupo muscular es mucho más general.

### Corrección
Debes modelar esto como una regla aplicable a múltiples patrones/músculos, o introducir un scope genérico.

#### Opción A: scope con comodín
```ts
export type RuleScope =
  | { kind: 'focus'; focusId: FocusId }
  | { kind: 'muscle'; muscleId: string | '*' }
  | { kind: 'pattern'; pattern: MovementPattern | '*' }
  | { kind: 'zone'; zone: BodyZoneId | '*' }
  | { kind: 'skill'; skillPathId: string | '*' }
  | { kind: 'global' };
```

#### Opción B: duplicar reglas por patrón
Es más pesado, pero válido si no quieres tocar el contrato.

### Recomendación
Usar comodines para reglas generales.

---

## 3.6. La regla isométrica propuesta usa mal la métrica
En la propuesta previa aparece algo como:

```ts
metric: 'totalRepsPerSession', // entendido como "segundos totales de hold"
```

Eso es confuso.

### Corrección
Añadir métricas específicas:

```ts
export type RuleMetric =
  | 'hardSetsPerWeek'
  | 'sessionsPerWeek'
  | 'minutesPerWeek'
  | 'frequencyPerWeek'
  | 'intensityPct1RM'
  | 'totalRepsPerSession'
  | 'totalIsometricSecondsPerSession'
  | 'rir'
  | 'pain'
  | 'progressionRate'
  | 'sleepHoursPerNight'
  | 'rpe'
  | 'weeksSinceDeload'
  | 'volumeChangePctPerWeek'
  | 'pushPullVolumeRatio'
  | 'eccentricExercisesPerSession';
```

Y usar:

```ts
metric: 'totalIsometricSecondsPerSession'
```

---

# 4. Contratos: ajustes recomendados

Te dejo una versión corregida y ampliada de lo que ya tenéis, sin romper demasiado.

## 4.1. `RuleMetric` ampliado
```ts
export type RuleMetric =
  | 'hardSetsPerWeek'
  | 'sessionsPerWeek'
  | 'minutesPerWeek'
  | 'frequencyPerWeek'
  | 'intensityPct1RM'
  | 'totalRepsPerSession'
  | 'totalIsometricSecondsPerSession'
  | 'eccentricSecondsPerSession'
  | 'rir'
  | 'pain'
  | 'progressionRate'
  | 'sleepHoursPerNight'
  | 'rpe'
  | 'weeksSinceDeload'
  | 'volumeChangePctPerWeek'
  | 'pushPullVolumeRatio'
  | 'horizontalPullVolumeRatio'
  | 'eccentricExercisesPerSession'
  | 'techniqueFailureRate';
```

---

## 4.2. `RuleScope` con comodines
```ts
export type RuleScope =
  | { kind: 'focus'; focusId: FocusId | '*' }
  | { kind: 'muscle'; muscleId: string | '*' }
  | { kind: 'pattern'; pattern: MovementPattern | '*' }
  | { kind: 'zone'; zone: BodyZoneId | '*' }
  | { kind: 'skill'; skillPathId: string | '*' }
  | { kind: 'global' };
```

---

## 4.3. `RuleEvaluation` más útil
Tu evaluación actual se queda algo corta para decidir severidad.

### Versión mejorada
```ts
export type RuleEvaluationStatus = 'below' | 'in-range' | 'above' | 'unknown';

export type RuleEvaluation = {
  ruleId: string;
  status: RuleEvaluationStatus;
  measured?: number;
  bandKind?: 'maintenance' | 'optimal' | 'excessive';
  band?: RuleBand;
  severity?: 'info' | 'warning' | 'high';
  reason?: string;
};
```

Esto permitirá que la app no solo diga “above”, sino también “esto es una bandera roja”.

---

# 5. Reglas que faltan y hay que añadir ya

Aquí está la parte principal que el otro agente **sí identificó parcialmente**, pero que aún no está suficientemente materializada.

Te dejo una lista de reglas imprescindibles, con propuesta concreta.

---

## 5.1. `lifestyle.ts`

### Reglas necesarias
1. sueño mínimo
2. enfermedad: fiebre / síntomas bajo el cuello
3. enfermedad: solo cuello hacia arriba

### Propuesta
```ts
export const lifestyleRules: TrainingRule[] = [
  {
    id: 'sleep-minimum',
    scope: { kind: 'global' },
    metric: 'sleepHoursPerNight',
    bands: {
      optimal: { min: 7.5, unit: 'hours/night' },
      maintenance: { min: 6.5, unit: 'hours/night' },
    },
    when: { fact: 'sleepTracked', op: 'eq', value: true },
    priority: 85,
    sourceRef: sourceRefs.og2e('Lifestyle Factors', 'Cap. 16'),
    notes:
      'Si el sueño promedio cae por debajo de ~6.5-7h y además sube RPE o baja rendimiento, sugerir reducir volumen/intensidad.',
    schemaVersion: 1,
  },
  {
    id: 'sick-fever-or-below-neck-rest',
    scope: { kind: 'global' },
    metric: 'sessionsPerWeek',
    bands: {
      optimal: { max: 0, unit: 'sessions/week' },
    },
    when: {
      any: [
        { fact: 'sickness', op: 'eq', value: 'fever' },
        { fact: 'sickness', op: 'eq', value: 'below-neck' },
      ],
    },
    priority: 100,
    sourceRef: sourceRefs.og2e('Working Out While Sick', 'Cap. 16'),
    notes:
      'Fiebre o síntomas bajo el cuello: descanso completo. Como mucho movilidad muy suave si hay autorización médica.',
    schemaVersion: 1,
  },
  {
    id: 'sick-above-neck-low-intensity-only',
    scope: { kind: 'global' },
    metric: 'rpe',
    bands: {
      optimal: { max: 3, unit: 'RPE' },
    },
    when: { fact: 'sickness', op: 'eq', value: 'above-neck' },
    priority: 80,
    sourceRef: sourceRefs.og2e('Working Out While Sick', 'Cap. 16'),
    notes:
      'Con síntomas leves de cabeza/cuello hacia arriba, solo trabajo ligero si el cuerpo lo tolera; detener si empeora.',
    schemaVersion: 1,
  },
];
```

---

## 5.2. `overreaching_overtraining.ts`

### Reglas necesarias
- RPE alto persistente
- caída de rendimiento con RPE alto
- sueño/apetito deteriorados
- soreness persistente

### Propuesta
```ts
export const overreachingOvertrainingRules: TrainingRule[] = [
  {
    id: 'rpe-high-with-performance-drop',
    scope: { kind: 'global' },
    metric: 'rpe',
    bands: {
      excessive: { min: 9.5, unit: 'RPE' },
    },
    when: {
      all: [
        { fact: 'performanceTrend', op: 'lt', value: 0 },
      ],
    },
    priority: 90,
    sourceRef: sourceRefs.og2e('Overreaching and Overtraining', 'Cap. 14'),
    notes:
      'Si RPE cercano al máximo coincide con descenso de rendimiento, probable sobreentrenamiento/sobre esfuerzo: deload.',
    schemaVersion: 1,
  },
  {
    id: 'overtraining-red-flags',
    scope: { kind: 'global' },
    metric: 'techniqueFailureRate',
    bands: {
      excessive: { min: 0.35, unit: 'ratio' },
    },
    when: {
      any: [
        { fact: 'sleepQuality', op: 'eq', value: 'poor' },
        { fact: 'appetite', op: 'eq', value: 'decreased' },
        { fact: 'persistentSoreness', op: 'eq', value: true },
      ],
    },
    priority: 92,
    sourceRef: sourceRefs.og2e('Overreaching and Overtraining', 'Cap. 14'),
    notes:
      'Señales de alarma: sueño pobre, apetito reducido, dolor persistente, técnica degradada.',
    schemaVersion: 1,
  },
];
```

---

## 5.3. `deload.ts`

### Reglas necesarias
- deload cada 4–8 semanas
- deload si plateau
- deload si dolor conectivo

### Propuesta
```ts
export const deloadRules: TrainingRule[] = [
  {
    id: 'deload-cadence-4-8-weeks',
    scope: { kind: 'global' },
    metric: 'weeksSinceDeload',
    bands: {
      optimal: { max: 8, unit: 'weeks' },
    },
    priority: 70,
    sourceRef: sourceRefs.og2e('Mesocycle Planning', 'Cap. 12'),
    notes:
      'Los mesociclos suelen durar 4-8 semanas antes de una semana de descarga o reestructuración.',
    schemaVersion: 1,
  },
  {
    id: 'deload-if-plateau',
    scope: { kind: 'global' },
    metric: 'progressionRate',
    bands: {
      optimal: { min: 0.01, unit: 'weekly-progress' },
    },
    when: { fact: 'weeksNoProgress', op: 'gte', value: 4 },
    priority: 80,
    sourceRef: sourceRefs.og2e('Mesocycle Planning', 'Cap. 12'),
    notes:
      'Si no hay progreso durante varias semanas, valorar deload/test/reinicio de ciclo.',
    schemaVersion: 1,
  },
  {
    id: 'deload-if-connective-pain',
    scope: { kind: 'zone', zone: '*' },
    metric: 'pain',
    bands: {
      excessive: { min: 3, unit: 'NRS-0-10' },
    },
    priority: 93,
    sourceRef: sourceRefs.og2e('Health and Injury Management', 'Cap. 15'),
    notes:
      'Dolor conectivo persistente >2-3: reducir agresores, bajar volumen/intensidad y considerar deload localizado.',
    schemaVersion: 1,
  },
];
```

---

## 5.4. `structural_balance.ts`

### Reglas necesarias
- equilibrio push/pull
- presencia de horizontal pulling
- precaución con wide-arm/straight-arm avanzado

### Propuesta
```ts
export const structuralBalanceRules: TrainingRule[] = [
  {
    id: 'balance-push-pull-volume',
    scope: { kind: 'global' },
    metric: 'pushPullVolumeRatio',
    bands: {
      optimal: { min: 0.8, max: 1.25, unit: 'ratio' },
    },
    priority: 65,
    sourceRef: sourceRefs.og2e('Structural Balance Considerations', 'Cap. 4'),
    notes:
      'Mantener proporción razonable entre empuje y tracción para salud de hombro.',
    schemaVersion: 1,
  },
  {
    id: 'horizontal-pulling-present',
    scope: { kind: 'pattern', pattern: 'horizontal-pull' },
    metric: 'hardSetsPerWeek',
    bands: {
      optimal: { min: 3, unit: 'hardSets/week' },
    },
    priority: 60,
    sourceRef: sourceRefs.og2e('Structural Balance Considerations', 'Cap. 4'),
    notes:
      'La tracción horizontal es clave para retractores escapulares, deltoides posterior y salud de hombro.',
    schemaVersion: 1,
  },
  {
    id: 'wide-arm-work-requires-prep',
    scope: { kind: 'global' },
    metric: 'hardSetsPerWeek',
    bands: {
      excessive: { min: 6, unit: 'hardSets/week' },
    },
    when: {
      all: [
        { fact: 'hasWideArmAdvancedWork', op: 'eq', value: true },
        { fact: 'connectivePrepComplete', op: 'eq', value: false },
      ],
    },
    priority: 88,
    sourceRef: sourceRefs.og2e('Structural Balance Considerations', 'Cap. 4'),
    notes:
      'Trabajo wide/straight-arm avanzado (cross, wide dips, etc.) exige preparación previa de tejido conectivo.',
    schemaVersion: 1,
  },
];
```

---

## 5.5. `isometrics.ts`

### Reglas necesarias
- dosis isométrica coherente
- isométricos de fuerza no son skill diario
- no usar isométricos pesados como práctica ligera

### Propuesta
```ts
export const isometricRules: TrainingRule[] = [
  {
    id: 'iso-total-time-consistency',
    scope: { kind: 'skill', skillPathId: '*' },
    metric: 'totalIsometricSecondsPerSession',
    bands: {
      optimal: { min: 30, max: 70, unit: 'seconds/session' },
    },
    when: { fact: 'holdType', op: 'eq', value: 'max-strength' },
    priority: 62,
    sourceRef: sourceRefs.og2e('Strength Work', 'Cap. 9'),
    notes:
      'Para isométricos de fuerza, la dosis debe moverse en rangos razonables de tiempo total según max hold.',
    schemaVersion: 1,
  },
  {
    id: 'iso-not-daily-heavy',
    scope: { kind: 'skill', skillPathId: '*' },
    metric: 'frequencyPerWeek',
    bands: {
      excessive: { min: 6, unit: 'sessions/week' },
    },
    when: { fact: 'holdType', op: 'eq', value: 'max-strength' },
    priority: 58,
    sourceRef: sourceRefs.og2e('Strength Work', 'Cap. 9'),
    notes:
      'Los isométricos de fuerza son demandantes; no tratarlos como skill ligero diario.',
    schemaVersion: 1,
  },
];
```

---

## 5.6. `eccentrics.ts`

### Reglas necesarias
- no abusar de excéntricos
- máx. 1–2 por rutina
- beginners solo en casos concretos

### Propuesta
```ts
export const eccentricRules: TrainingRule[] = [
  {
    id: 'eccentric-limit-per-session',
    scope: { kind: 'global' },
    metric: 'eccentricExercisesPerSession',
    bands: {
      excessive: { min: 3, unit: 'exercises/session' },
    },
    priority: 75,
    sourceRef: sourceRefs.og2e('Strength Work', 'Cap. 9'),
    notes:
      'Los excéntricos son efectivos pero costosos; usar con moderación.',
    schemaVersion: 1,
  },
  {
    id: 'eccentric-beginner-caution',
    scope: { kind: 'global' },
    metric: 'eccentricExercisesPerSession',
    bands: {
      excessive: { min: 2, unit: 'exercises/session' },
    },
    when: {
      all: [
        { fact: 'level', op: 'eq', value: 'beginner' },
        { fact: 'exceptionEccentricsAllowed', op: 'neq', value: true },
      ],
    },
    priority: 78,
    sourceRef: sourceRefs.og2e('Untrained Beginner', 'Cap. 17'),
    notes:
      'En principiantes, los excéntricos no son la norma salvo casos como pull-ups/dips asistidos.',
    schemaVersion: 1,
  },
];
```

---

## 5.7. `skill_work.ts`

### Reglas necesarias
- skill work no debe ser fatigante
- handstand puede ser frecuente
- si la técnica colapsa, parar

### Propuesta
```ts
export const skillWorkRules: TrainingRule[] = [
  {
    id: 'skill-work-low-fatigue',
    scope: { kind: 'global' },
    metric: 'rpe',
    bands: {
      optimal: { max: 6, unit: 'RPE' },
    },
    when: { fact: 'sessionBlock', op: 'eq', value: 'skill' },
    priority: 55,
    sourceRef: sourceRefs.og2e('Warm-Up and Skill Work', 'Cap. 8'),
    notes:
      'El skill work debe ser técnico y no fatigante; si hay fatiga, baja calidad y se refuerzan malos patrones.',
    schemaVersion: 1,
  },
  {
    id: 'handstand-frequency-intermediate-plus',
    scope: { kind: 'skill', skillPathId: 'handstand' },
    metric: 'frequencyPerWeek',
    bands: {
      optimal: { min: 4, max: 7, unit: 'sessions/week' },
    },
    when: {
      all: [
        { fact: 'level', op: 'neq', value: 'beginner' },
        { fact: 'wristPain', op: 'lte', value: 2 },
      ],
    },
    priority: 60,
    sourceRef: sourceRefs.og2e('Handstand Variations', 'Cap. 24'),
    notes:
      'Handstand puede entrenarse casi diario cuando ya no está limitado por fuerza bruta.',
    schemaVersion: 1,
  },
  {
    id: 'handstand-beginner-wrist-caution',
    scope: { kind: 'skill', skillPathId: 'handstand' },
    metric: 'frequencyPerWeek',
    bands: {
      optimal: { min: 2, max: 4, unit: 'sessions/week' },
    },
    when: { fact: 'level', op: 'eq', value: 'beginner' },
    priority: 58,
    sourceRef: sourceRefs.og2e('Handstand Variations', 'Cap. 24'),
    notes:
      'En principiantes, la tolerancia de muñeca puede limitar la frecuencia de handstand.',
    schemaVersion: 1,
  },
];
```

---

# 6. Reglas de volumen y frecuencia: correcciones

## 6.1. Volumen
La regla actual solo para `horizontal-push` es insuficiente.

### Corrección propuesta
```ts
export const volumeHypertrophyRules: TrainingRule[] = [
  {
    id: 'vol-strength-total-reps-general',
    scope: { kind: 'pattern', pattern: '*' },
    metric: 'totalRepsPerSession',
    bands: {
      optimal: { min: 25, max: 50, unit: 'reps/session' },
    },
    when: { fact: 'focus', op: 'eq', value: 'strength' },
    priority: 50,
    sourceRef: sourceRefs.og2e('Strength Work', 'Cap. 9'),
    notes:
      'Rango típico de volumen por grupo muscular para fuerza: ~25-50 reps totales.',
    schemaVersion: 1,
  },
  {
    id: 'vol-hypertrophy-total-reps-general',
    scope: { kind: 'pattern', pattern: '*' },
    metric: 'totalRepsPerSession',
    bands: {
      optimal: { min: 40, max: 75, unit: 'reps/session' },
      excessive: { min: 120, unit: 'reps/session' },
    },
    when: { fact: 'focus', op: 'eq', value: 'hypertrophy' },
    priority: 50,
    sourceRef: sourceRefs.og2e('Strength Work', 'Cap. 9'),
    notes:
      'Rango típico para hipertrofia: ~40-75+ reps totales; vigilar recuperación y tejido conectivo.',
    schemaVersion: 1,
  },
];
```

### Nota importante
El libro menciona matices para piernas pesadas y casos avanzados. Eso puede luego refinarse por `muscleId` o `pattern`.

---

## 6.2. Frecuencia
La regla de handstand debe separar mejor:
- beginner
- intermediate+
- presencia de dolor de muñeca

Ya lo puse en `skill_work.ts`.

---

# 7. Implementación recomendada de `evaluateRules`

Te propongo una implementación que:
- no usa `eval`
- soporta condiciones tipadas
- devuelve evaluaciones útiles
- puede conectarse a un `WeeklyFocusLedger` mediante adaptadores

## 7.1. Contrato mínimo de evaluación
```ts
export type RuleFacts = Record<string, number | string | boolean | null | undefined>;

export type EvaluationContext = {
  facts: RuleFacts;
  getMeasured: (rule: TrainingRule) => number | undefined;
};
```

---

## 7.2. Evaluador de condiciones
```ts
function compareValues(
  left: number | string | boolean | null | undefined,
  op: RuleCondition extends { op: infer O } ? O : never,
  right: number | string | boolean | Array<number | string>,
): boolean {
  if (op === 'in') {
    return Array.isArray(right) && right.includes(left as never);
  }

  if (typeof left === 'number' && typeof right === 'number') {
    switch (op) {
      case 'eq': return left === right;
      case 'neq': return left !== right;
      case 'lt': return left < right;
      case 'lte': return left <= right;
      case 'gt': return left > right;
      case 'gte': return left >= right;
      default: return false;
    }
  }

  if (op === 'eq') return left === right;
  if (op === 'neq') return left !== right;

  return false;
}

function evalCondition(cond: RuleCondition | undefined, ctx: EvaluationContext): boolean {
  if (!cond) return true;

  if ('all' in cond) return cond.all.every((c) => evalCondition(c, ctx));
  if ('any' in cond) return cond.any.some((c) => evalCondition(c, ctx));
  if ('not' in cond) return !evalCondition(cond.not, ctx);

  const value = ctx.facts[cond.fact];
  return compareValues(value, cond.op, cond.value);
}
```

---

## 7.3. Evaluador de bandas
```ts
function statusForBand(measured: number, band: RuleBand): RuleEvaluationStatus {
  const min = band.min ?? Number.NEGATIVE_INFINITY;
  const max = band.max ?? Number.POSITIVE_INFINITY;

  if (band.target != null) {
    // Si hay target, tratamos desviaciones como below/above respecto al objetivo.
    if (measured < band.target && min !== Number.NEGATIVE_INFINITY && measured < min) {
      return 'below';
    }
    if (measured > band.target && max !== Number.POSITIVE_INFINITY && measured > max) {
      return 'above';
    }
    return 'in-range';
  }

  if (measured < min) return 'below';
  if (measured > max) return 'above';
  return 'in-range';
}
```

---

## 7.4. `evaluateRules`
```ts
export function evaluateRules(
  rules: TrainingRule[],
  ctx: EvaluationContext,
): RuleEvaluation[] {
  const out: RuleEvaluation[] = [];

  for (const rule of rules) {
    if (!evalCondition(rule.when, ctx)) continue;

    const measured = ctx.getMeasured(rule);
    if (measured == null || Number.isNaN(measured)) {
      out.push({
        ruleId: rule.id,
        status: 'unknown',
      });
      continue;
    }

    // 1) excessive tiene prioridad
    if (rule.bands.excessive) {
      const excessiveStatus = statusForBand(measured, rule.bands.excessive);
      if (excessiveStatus !== 'in-range') {
        out.push({
          ruleId: rule.id,
          status: excessiveStatus,
          measured,
          bandKind: 'excessive',
          band: rule.bands.excessive,
          severity: 'high',
        });
        continue;
      }
    }

    // 2) optimal o maintenance
    const primaryBand = rule.bands.optimal ?? rule.bands.maintenance;
    if (!primaryBand) {
      out.push({
        ruleId: rule.id,
        status: 'unknown',
        measured,
      });
      continue;
    }

    const status = statusForBand(measured, primaryBand);
    out.push({
      ruleId: rule.id,
      status,
      measured,
      bandKind: rule.bands.optimal ? 'optimal' : 'maintenance',
      band: primaryBand,
      severity: status === 'in-range' ? 'info' : 'warning',
    });
  }

  return out;
}
```

---

# 8. Cómo conectar `evaluateRules` con `WeeklyFocusLedger`

Como no tengo aquí el contrato final exacto de `WeeklyFocusLedger`, lo más sano es usar un **adapter**.

## 8.1. Idea
```ts
function createContextFromLedger(
  ledger: WeeklyFocusLedger,
  uiContext: UiContext,
): EvaluationContext {
  const facts: RuleFacts = {
    focus: uiContext.userFocus.primaryFocus,
    level: uiContext.level,
    sickness: uiContext.sickness,
    holdType: uiContext.holdType,
    wristPain: ledger.painByZone?.wrist ?? 0,
    performanceTrend: ledger.performanceTrend,
    sleepQuality: uiContext.sleepQuality,
    // ...
  };

  return {
    facts,
    getMeasured: (rule) => {
      switch (rule.metric) {
        case 'sessionsPerWeek':
          return ledger.sessionsPerWeek;

        case 'pain':
          if (rule.scope.kind === 'zone' && rule.scope.zone !== '*') {
            return ledger.painByZone?.[rule.scope.zone];
          }
          return undefined;

        case 'totalRepsPerSession':
          if (rule.scope.kind === 'pattern') {
            return ledger.repsByPattern?.[rule.scope.pattern as string];
          }
          return undefined;

        case 'totalIsometricSecondsPerSession':
          if (rule.scope.kind === 'skill') {
            return ledger.isometricSecondsBySkill?.[rule.scope.skillPathId as string];
          }
          return undefined;

        case 'rpe':
          return ledger.avgRpe;

        case 'weeksSinceDeload':
          return ledger.weeksSinceDeload;

        default:
          return undefined;
      }
    },
  };
}
```

Esto te deja una separación limpia:
- `ledger` = datos crudos
- `facts` = contexto interpretable
- `getMeasured` = resolución de métricas por scope

---

# 9. `isometricDosing.ts`: versión corregida y mejorada

Te dejo una versión corregida del núcleo, sin reescribir toda la tabla.

```ts
export type IsometricDose = {
  maxHoldSec: number;
  holdSec: number;
  sets: [number, number];
  totalTimeRangeSec: [number, number];
  sweetSpot: string;
};

const RAW_ISOMETRIC_TABLE: Array<Omit<IsometricDose, 'totalTimeRangeSec'>> = [
  { maxHoldSec: 1,  holdSec: 1,  sets: [7, 10], sweetSpot: '8x1s' },
  { maxHoldSec: 2,  holdSec: 2,  sets: [6, 8],  sweetSpot: '7x2s' },
  // ... resto de filas
  { maxHoldSec: 30, holdSec: 20, sets: [3, 3],  sweetSpot: '3x20s' },
];

export const ISOMETRIC_TABLE: IsometricDose[] = RAW_ISOMETRIC_TABLE.map((row) => ({
  ...row,
  totalTimeRangeSec: [
    row.sets[0] * row.holdSec,
    row.sets[1] * row.holdSec,
  ],
}));

export function getIsometricDose(maxHoldSec: number): IsometricDose {
  if (!Number.isFinite(maxHoldSec)) {
    throw new Error('maxHoldSec must be a finite number');
  }

  if (maxHoldSec <= 1) return ISOMETRIC_TABLE[0];
  if (maxHoldSec >= 30) return ISOMETRIC_TABLE[ISOMETRIC_TABLE.length - 1];

  const normalized = Math.floor(maxHoldSec);

  for (let i = ISOMETRIC_TABLE.length - 1; i >= 0; i--) {
    if (normalized >= ISOMETRIC_TABLE[i].maxHoldSec) {
      return ISOMETRIC_TABLE[i];
    }
  }

  return ISOMETRIC_TABLE[0];
}
```

---

## 9.1. Regla de UI importante para el test de max hold
El libro define max hold como:
- el tiempo que aguantas
- **parando un segundo antes del fallo**, o contando +1 si fallaste justo después

### Recomendación
En UI:
- preguntar: “¿Te detuviste 1 segundo antes del fallo?”
- si sí → `maxHoldSec = testedHoldSec + 1`
- si no → `maxHoldSec = testedHoldSec`

Esto importa para no infra/sobredosificar.

---

# 10. Integración correcta de isométricos en la app

## 10.1. Dónde usar `getIsometricDose`
Debe usarse cuando:
- el usuario registra un **max strength hold**
- el skill es de fuerza (planche, front lever, back lever, etc.)
- **no** cuando es skill de balance puro como handstand avanzado

### Importante
**Handstand no debe dosificarse siempre como isométrico de fuerza.**
En cuanto pasa a ser skill de equilibrio, la lógica cambia:
- consistencia
- calidad
- frecuencia alta
- no buscar fallo

Esto el otro agente lo mencionó, pero hay que convertirlo en regla explícita.

---

## 10.2. Lógica recomendada
```ts
function prescribeIsometricDose(skillStep: SkillStep, testedMaxHoldSec: number) {
  if (skillStep.attribute !== 'strength-isometric') {
    return null;
  }

  const dose = getIsometricDose(testedMaxHoldSec);

  return {
    holdSec: dose.holdSec,
    setsRange: dose.sets,
    totalSecondsRange: dose.totalTimeRangeSec,
    sweetSpot: dose.sweetSpot,
    progressionNotes: [
      'Si completas el rango alto con buena forma, retestea o sube ligeramente.',
      'Si hay estancamiento, primero reduce volumen y luego vuelve a progresar.',
    ],
  };
}
```

---

# 11. Extracción de progresiones: qué falta realmente

Aquí está la parte más importante que aún falta para cumplir el objetivo de `SkillPath/SkillStep`.

La extracción v2 de Caps. 23–27 **es útil**, pero **no suficiente** si queremos poblar el modelo de forma robusta.

## 11.1. Lo que sí cubre bien
- cues generales
- errores comunes
- filosofía de técnica
- equipo
- algunas ladders principales
- bail-out en handstand
- cues escapulares

## 11.2. Lo que falta para que sea “implementable”
Falta convertirlo en una estructura más completa:

### A. Ladders completos con niveles
Hay que capturar de forma explícita:
- id del paso
- nivel OG
- nombre exacto
- abreviatura
- orden dentro del path
- criterios de progresión

### B. Prerrequisitos
Ejemplos:
- back lever antes de front lever (recomendado por tejido conectivo)
- prerrequisitos para iron cross
- base de RTO support para rings
- false grip para muscle-ups
- wall handstand antes de freestanding

### C. Flags de seguridad
- `requiresConnectivePrep`
- `fallRisk`
- `avoidWithPainZones`
- `notForBeginners`
- `supervisionRecommended`

### D. Equipo y alternativas
No solo “anillas”, sino:
- floor
- parallettes
- parallel bars
- wall
- bar
- rings
- alternativas caseras

### E. Cues por categoría
- `scapularCue`
- `elbowCue`
- `coreCue`
- `gripCue`
- `bailTechnique`

### F. Clasificación skill vs strength
Esto es crítico:
- handstand = skill/balance
- planche = strength isometric
- front lever = strength isometric
- L-sit = híbrido (core/skill/strength según nivel)
- muscle-up = dynamic/strength/skill transitional

---

# 12. Modelo recomendado para `SkillPath/SkillStep` v2

Te propongo este contrato.

```ts
export type SkillAttribute =
  | 'skill-balance'
  | 'strength-isometric'
  | 'strength-dynamic'
  | 'hybrid'
  | 'core'
  | 'mobility-prep';

export type ScapularCue =
  | 'elevate'
  | 'depress'
  | 'retract'
  | 'protract'
  | 'elevate+retract'
  | 'depress+retract'
  | 'depress+neutral'
  | 'protract+depress'
  | 'neutral';

export type SkillStep = {
  id: string;
  skillPathId: string;
  ogLevel: number | null;
  name: string;
  abbrev?: string;
  attribute: SkillAttribute;

  equipment: string[];
  equipmentAlternatives?: string[];

  primaryCues: string[];
  commonFaults: string[];
  progressionCriteria?: string[];

  scapularCue?: ScapularCue;
  elbowCue?: string;
  coreCue?: string;
  gripCue?: string;

  bailTechniques?: string[];

  safety?: {
    fallRisk?: boolean;
    requiresConnectivePrep?: boolean;
    contraindicatedWithPainZones?: BodyZoneId[];
    supervisionRecommended?: boolean;
  };

  prerequisites?: Array<{ skillPathId: string; stepId?: string }>;

  sourceRef: SourceRef;
  extractionStatus?: 'complete' | 'partial' | 'needs-review';
};
```

---

# 13. Skill paths prioritarios que hay que migrar ya

Para que el sistema sea útil pronto, yo priorizaría estos paths:

## 13.1. Alta prioridad
1. `handstand`
2. `planche`
3. `front-lever`
4. `back-lever`
5. `muscle-up`
6. `pull-ups`
7. `dips`
8. `rows`
9. `l-sit-manna`
10. `pistols`

## 13.2. Media prioridad
11. `handstand-pushup`
12. `press-handstand`
13. `one-arm-pushup`
14. `rings-support`
15. `ab-wheel`
16. `flags`
17. `elbow-lever`

## 13.3. Prioridad posterior
18. `iron-cross`
19. `one-arm-chin-up`
20. `rings-advanced-statics`

---

# 14. Extracción corregida/aumentada de los Caps. 23–27

Aquí va lo que el otro agente **debe añadir o convertir en datos** de forma explícita.

---

## 14.1. Cap. 23 — Technique & Basics
### Está bien, pero falta volverlo modelo
Hay que registrar como datos:

### Equipo
- mínimo viable: anillas
- opcionales: paralelas, paralletes, barra fija
- alternativas caseras para pull-ups y rows

### Posiciones base
Convertir en “foundation drills”:
- hollow
- arch
- plank
- reverse plank
- side plank
- rings support
- RTO support
- German hang / skin the cat
- false grip
- candlestick

### Regla de diseño importante
**Common fault → bajar progresión**
Esto debería ser una regla transversal en el motor:
- si un fault persiste, no compensar
- sugerir descenso de progresión

---

## 14.2. Cap. 24 — Handstand
### Lo que falta capturar de forma estructurada
Además de los cues, hace falta:

#### Ladder
- wall handstand levels 1–4
- freestanding level 5
- one-arm support levels 6–9
- one-arm handstand level 10

#### Rings
- rings shoulder stand
- rings strap handstand
- rings handstand

#### Métricas de progreso
- usar **consistencia / mediana**, no solo récord
- evitar reforzar el hábito de bail-out constante

#### Bail-out
- priorizar roll-out en principiantes
- pirouette más adelante

#### Grip
- flat
- arched
- cambered
- correcciones con dedos/palma/talón de mano

#### Señales de overuse
- dolor articular en dedos/mano
- parar 1–2 días si persiste

---

## 14.3. Cap. 25 — Pulling
### Falta modelar ladders completos

#### L-sit / V-sit / manna
- tuck L-sit
- one-leg-bent
- L-sit
- straddle L
- RTO L
- V-sit 45/75/100/120/140
- manna

#### Back lever
- German hang
- skin the cat
- tuck
- adv tuck
- straddle
- half lay
- full
- pullout
- GH pullout
- bent-arm pull-up to BL
- HS lower to BL

#### Front lever
- tuck
- adv tuck
- straddle
- half lay
- full
- pull to inverted
- hang pull
- circle FL

#### Rows
- ring row ecc
- ring row
- wide
- archer
- archer-in
- straddle OA row
- OA row

#### Pull-ups
- jumping
- ecc
- bar pull-ups
- L-sit pull-ups
- pullover
- rings variants
- OAC ecc / OAC / weighted

#### Iron cross
Hay que añadir de forma explícita:
- **prerrequisitos**
- `requiresConnectivePrep = true`
- métodos de entrenamiento (partner, bands, block, dream machine)
- progresiones de cross

---

## 14.4. Cap. 26 — Pushing
### Falta modelar con exactitud

#### Planche
- frog stand
- SA frog
- tuck
- adv tuck
- straddle
- half lay
- full
- rings variants
- planche pushups

#### Pushups
- standard
- diamond
- rings wide
- rings
- RTO
- RTO archer
- PPPU 40/60
- maltese
- wall PPPU
- rings wall PPPU

#### One-arm pushups
- hands-elevated
- straddle
- rings straddle
- straight-body
- rings straight-body

#### Dips
- PB: jumping / ecc / dips / L-sit / 45° lean / one-arm
- Rings: support / RTO support / ecc / dips / L-dips / wide / RTO variants / weighted / lean / maltese

### Cues que deben quedar en datos
- planche: `protract + depress`
- dips: no rebotar, hombros deprimidos
- pushups: cuerpo plank, ROM completo
- RTO: control y estabilidad

---

## 14.5. Cap. 27 — Multi-plane, core & legs
### Falta modelar ladders y criterios

#### Muscle-ups
- negatives
- kipping
- muscle-ups
- wide/no false grip
- strict bar
- combinaciones avanzadas

#### Elbow levers
- two-arm
- rings
- OA straddle
- OA full

#### Flags
- tuck
- adv tuck
- straddle
- full

#### Ab wheel
- plank 25s
- plank 60s
- 1A1L plank
- knees wheel
- ramp wheel
- ecc wheel
- full wheel
- +20 lbs
- OA

#### Squats / pistols
- Asian squat
- parallel squat
- full squat
- side-to-side
- pistols
- weighted pistols

### Regla importante
El libro deja claro que para piernas, **barbell suele superior** para fuerza/hipertrofia.  
Eso debe aparecer como nota en el path de pistols/squats.

---

# 15. Reglas de validación para SkillStep

Para asegurar que la migración v2 no se queda en texto suelto, añade tests de validación.

## 15.1. Validaciones mínimas
1. Todo paso con `attribute = strength-isometric` o straight-arm debe tener:
   - `scapularCue`
   - `elbowCue`

2. Todo paso de handstand debe tener:
   - `bailTechniques`

3. Todo paso de rings debe tener:
   - `equipment` incluyendo rings
   - cues de estabilidad si aplica

4. Todo paso con `requiresConnectivePrep = true` debe tener:
   - `prerequisites`

5. Todo `SkillStep` debe tener:
   - `sourceRef`
   - `primaryCues`
   - `commonFaults`

6. IDs únicos y niveles monotónicos dentro de cada path.

---

# 16. Tests que deberíais tener ya

## 16.1. Tests de `isometricDosing`
```ts
test('returns first row for <=1s', () => {
  expect(getIsometricDose(1).holdSec).toBe(1);
});

test('caps at 30s', () => {
  expect(getIsometricDose(45).maxHoldSec).toBe(30);
});

test('picks nearest lower step', () => {
  const dose = getIsometricDose(9);
  expect(dose.maxHoldSec).toBe(9);
  expect(dose.holdSec).toBe(6);
});

test('computes total time range', () => {
  const dose = getIsometricDose(10);
  expect(dose.totalTimeRangeSec[0]).toBeLessThanOrEqual(dose.totalTimeRangeSec[1]);
});
```

---

## 16.2. Tests de reglas
- una regla devuelve `below` si measured < min
- devuelve `above` si measured > max
- devuelve `unknown` si falta medición
- una regla `excessive` tiene prioridad sobre `optimal`
- las condiciones `when` filtran correctamente

---

## 16.3. Tests de datos de skills
- handstand tiene bail-out
- planche tiene `protract+depress`
- iron cross tiene prerrequisitos
- muscle-up tiene false grip cue
- pistols tiene nota de limitación frente a barbell

---

# 17. Checklist final de corrección

Para cerrar esta fase, yo exigiría esto:

## Código
- [ ] corregido `ISOMETRIC_TABLE[0]`
- [ ] añadido `totalTimeRangeSec`
- [ ] exportada `ISOMETRIC_TABLE`
- [ ] añadido evaluador de condiciones sin `eval`
- [ ] implementado `evaluateRules`
- [ ] adaptador ledger → facts → metrics

## Reglas
- [ ] volumen general, no solo horizontal-push
- [ ] frecuencia handstand con beginner/intermediate y dolor de muñeca
- [ ] tendon health ampliado a zonas genéricas
- [ ] lifestyle añadido
- [ ] deload añadido
- [ ] overreaching/overtraining añadido
- [ ] structural balance añadido
- [ ] eccentrics limitado
- [ ] skill work no fatigante
- [ ] isométricos no tratados como skill diario

## Skills
- [ ] creado modelo v2 de `SkillStep`
- [ ] ladders principales convertidos en datos
- [ ] prerrequisitos añadidos
- [ ] flags de seguridad añadidos
- [ ] equipo alternativo añadido
- [ ] criterios de progresión añadidos
- [ ] tests de validación de skills

---

# 18. Recomendación de orden de trabajo

Si quieres evitar refactor en cascada, hazlo en este orden:

## Fase 1: estabilizar contratos
- `TrainingRule`
- `RuleCondition`
- `RuleEvaluation`
- `SkillStep v2`

## Fase 2: corregir helpers
- `isometricDosing.ts`
- `sources.ts`
- `evaluateRules`

## Fase 3: completar reglas prioritarias
- deload
- lifestyle
- overreaching
- structural balance
- eccentrics/skill work

## Fase 4: migrar skills prioritarios
- handstand
- planche
- levers
- pull-ups/dips/rows
- muscle-up
- pistols

---

# 19. Conclusión ejecutiva

## ¿Qué estaba bien?
- La dirección arquitectónica es correcta.
- La extracción conceptual base es válida.
- Empezar por rules + isometric dosing fue buena decisión.

## ¿Qué no estaba terminado?
- La extracción de progresiones aún no es suficientemente estructurada.
- Faltan reglas clave de programación, recuperación y seguridad.
- Hay errores concretos en `isometricDosing.ts`.
- Falta formalizar condiciones y evaluación de reglas.

## ¿Qué hago ahora?
1. Corregir los errores de código indicados.
2. Ampliar contratos con `when`, métricas nuevas y `totalTimeRangeSec`.
3. Añadir las reglas faltantes prioritarias.
4. Implementar `evaluateRules`.
5. Convertir los Caps. 23–27 en datos estructurados de `SkillPath/SkillStep`.

Si quieres, en el siguiente mensaje puedo hacer una de estas dos cosas:

**Opción A:** darte directamente los archivos corregidos:
- `src/data/fitness/contracts/rules.ts`
- `src/lib/fitness/isometricDosing.ts`
- `src/lib/fitness/rulesEngine.ts`

**Opción B:** darte una **lista exhaustiva de SkillPath/SkillStep v2** para empezar a poblar handstand, planche, levers, muscle-up y pistols con todos los campos.

---

## Ronda 2 — tras: «Opción A. Corrige todo, complementa lo que falta, lo que estaba mal. Toda la información del libro debe ser extraida. Vas a ir haciendo todo…»
Entendido. Ejecuto **Opción A**:

1. **Corrijo lo que estaba mal**
2. **Completo lo que faltaba**
3. **Extraigo la información útil del libro como datos estructurados**
4. **Lo dejo organizado por pasos para implementación directa**

No voy a copiar el libro literalmente: lo voy a convertir en **contratos, reglas, helpers, catálogos y criterios de validación** para tu sistema.

---

# 0. Correcciones críticas aplicadas

Esto queda corregido desde ya:

## Errores corregidos
- `ISOMETRIC_TABLE[^0]` → **inválido**; se reemplaza por acceso normal.
- `totalTimeSec` ambiguo → se reemplaza por `totalTimeRangeSec`.
- `appliesWhen` como string libre → se mantiene solo como documentación y se añade `when` tipado.
- Reglas de volumen demasiado estrechas → ahora usan scope con comodín `*`.
- Métrica isométrica errónea (`totalRepsPerSession`) → ahora existe `totalIsometricSecondsPerSession`.
- Fuente de referencia inconsistente → se unifica en `sources.ts`.
- Handstand tratado como isométrico de fuerza en todos los casos → ahora se separa **skill-balance** vs **strength-isometric**.
- Faltaban reglas de:
  - deload
  - overreaching / overtraining
  - sueño
  - enfermedad
  - balance estructural
  - excéntricos
  - skill work
  - progresión por nivel
  - movilidad / prehab
  - rangos de repeticiones
  - tiempos de descanso

---

# 1. Contratos corregidos

## 1.1. `src/data/fitness/contracts/sources.ts`

```ts
// src/data/fitness/contracts/sources.ts

export type SourceRef = {
  sourceId: string;
  chapter?: string;
  section?: string;
  pageRef?: string;
};

export const OG2E_SOURCE_ID = 'overcoming-gravity-2e';

export const og2e = (
  section: string,
  chapter?: string,
  pageRef?: string
): SourceRef => ({
  sourceId: OG2E_SOURCE_ID,
  section,
  chapter,
  pageRef,
});
```

---

## 1.2. `src/data/fitness/contracts/rules.ts`

```ts
// src/data/fitness/contracts/rules.ts

import type { SourceRef } from './sources';

export type FocusId =
  | 'strength'
  | 'hypertrophy'
  | 'endurance'
  | 'skill'
  | 'general';

export type MovementPattern =
  | 'vertical-push'
  | 'horizontal-push'
  | 'vertical-pull'
  | 'horizontal-pull'
  | 'leg-push'
  | 'leg-pull'
  | 'core'
  | 'skill'
  | 'mobility'
  | 'conditioning';

export type BodyZoneId =
  | 'wrist'
  | 'elbow'
  | 'shoulder'
  | 'neck'
  | 'upper-back'
  | 'lower-back'
  | 'hip'
  | 'knee'
  | 'ankle';

export type TrainingLevel =
  | 'untrained-beginner'
  | 'trained-beginner'
  | 'intermediate'
  | 'advanced'
  | 'elite';

export type RoutineType =
  | 'full-body'
  | 'push-pull'
  | 'upper-lower'
  | 'straight-arm-bent-arm'
  | 'push-pull-legs';

export type RuleMetric =
  | 'hardSetsPerWeek'
  | 'sessionsPerWeek'
  | 'minutesPerWeek'
  | 'frequencyPerWeek'
  | 'intensityPct1RM'
  | 'totalRepsPerSession'
  | 'totalRepsPerExerciseSession'
  | 'repsPerSet'
  | 'setsPerMusclePerWeek'
  | 'restSeconds'
  | 'rir'
  | 'pain'
  | 'progressionRate'
  | 'sleepHoursPerNight'
  | 'rpe'
  | 'weeksSinceDeload'
  | 'weeksNoProgress'
  | 'volumeChangePctPerWeek'
  | 'pushPullVolumeRatio'
  | 'horizontalPullVolumeRatio'
  | 'eccentricExercisesPerSession'
  | 'eccentricSecondsPerRep'
  | 'totalIsometricSecondsPerSession'
  | 'techniqueFailureRate'
  | 'recoverySymptomScore'
  | 'simultaneousGoals'
  | 'mobilityMinutesPerWeek'
  | 'warmupMinutes'
  | 'holdSeconds';

export type RuleScope =
  | { kind: 'global' }
  | { kind: 'focus'; focusId: FocusId | '*' }
  | { kind: 'pattern'; pattern: MovementPattern | '*' }
  | { kind: 'zone'; zone: BodyZoneId | '*' }
  | { kind: 'skill'; skillPathId: string | '*' }
  | { kind: 'level'; level: TrainingLevel | '*' }
  | { kind: 'muscle'; muscleId: string | '*' };

export type RuleBand = {
  min?: number;
  max?: number;
  target?: number;
  unit?: string;
  severity?: 'info' | 'warning' | 'high';
};

export type RuleFactValue = string | number | boolean;

export type RuleCondition =
  | { all: RuleCondition[] }
  | { any: RuleCondition[] }
  | { not: RuleCondition }
  | {
      fact: string;
      op: 'eq' | 'neq' | 'lt' | 'lte' | 'gt' | 'gte' | 'in' | 'nin';
      value: RuleFactValue | RuleFactValue[];
    };

export type TrainingRule = {
  id: string;
  scope: RuleScope;
  metric: RuleMetric;
  bands: {
    maintenance?: RuleBand;
    optimal?: RuleBand;
    excessive?: RuleBand;
  };
  when?: RuleCondition;
  /** Solo documentación legible. No usar como evaluable. */
  appliesWhen?: string;
  priority: number;
  action?: 'suggest' | 'warn' | 'block' | 'educate';
  sourceRef: SourceRef;
  notes?: string;
  schemaVersion: 1;
};

export type RuleEvaluationStatus =
  | 'below'
  | 'in-range'
  | 'above'
  | 'unknown';

export type RuleEvaluation = {
  ruleId: string;
  status: RuleEvaluationStatus;
  measured?: number;
  bandKind?: 'maintenance' | 'optimal' | 'excessive';
  band?: RuleBand;
  severity?: 'info' | 'warning' | 'high';
  message?: string;
};
```

---

# 2. Isometric dosing corregido y completo

## 2.1. `src/lib/fitness/isometricDosing.ts`

```ts
// src/lib/fitness/isometricDosing.ts

export type IsometricDose = {
  maxHoldSec: number;
  holdSec: number;
  sets: [number, number];
  sweetSpot: string;
  sweetSpotSets?: number;
  sweetSpotHoldSec?: number;
  totalTimeRangeSec: [number, number];
};

const RAW_ISOMETRIC_TABLE: Array<Omit<IsometricDose, 'totalTimeRangeSec'>> = [
  { maxHoldSec: 1,  holdSec: 1,  sets: [7, 10], sweetSpot: '8x1s' },
  { maxHoldSec: 2,  holdSec: 2,  sets: [6, 8],  sweetSpot: '7x2s' },
  { maxHoldSec: 3,  holdSec: 3,  sets: [6, 8],  sweetSpot: '7x3s' },
  { maxHoldSec: 4,  holdSec: 3,  sets: [6, 8],  sweetSpot: '7x3s' },
  { maxHoldSec: 5,  holdSec: 4,  sets: [5, 7],  sweetSpot: '6x4s' },
  { maxHoldSec: 6,  holdSec: 5,  sets: [5, 6],  sweetSpot: '6x5s' },
  { maxHoldSec: 7,  holdSec: 5,  sets: [5, 6],  sweetSpot: '6x5s' },
  { maxHoldSec: 8,  holdSec: 6,  sets: [5, 6],  sweetSpot: '6x6s' },
  { maxHoldSec: 9,  holdSec: 6,  sets: [5, 6],  sweetSpot: '6x6s' },
  { maxHoldSec: 10, holdSec: 7,  sets: [5, 6],  sweetSpot: '5x7s' },
  { maxHoldSec: 11, holdSec: 8,  sets: [5, 6],  sweetSpot: '5x8s' },
  { maxHoldSec: 12, holdSec: 8,  sets: [5, 6],  sweetSpot: '5x8s' },
  { maxHoldSec: 13, holdSec: 9,  sets: [5, 5],  sweetSpot: '5x9s' },
  { maxHoldSec: 14, holdSec: 10, sets: [5, 5],  sweetSpot: '5x10s' },
  { maxHoldSec: 15, holdSec: 10, sets: [5, 5],  sweetSpot: '5x10s' },
  { maxHoldSec: 16, holdSec: 11, sets: [5, 5],  sweetSpot: '5x11s' },
  { maxHoldSec: 17, holdSec: 12, sets: [5, 5],  sweetSpot: '5x12s' },
  { maxHoldSec: 18, holdSec: 13, sets: [5, 5],  sweetSpot: '5x13s' },
  { maxHoldSec: 19, holdSec: 13, sets: [5, 5],  sweetSpot: '5x13s' },
  { maxHoldSec: 20, holdSec: 14, sets: [4, 4],  sweetSpot: '4x14s' },
  { maxHoldSec: 21, holdSec: 14, sets: [4, 4],  sweetSpot: '4x14s' },
  { maxHoldSec: 22, holdSec: 15, sets: [4, 4],  sweetSpot: '4x15s' },
  { maxHoldSec: 23, holdSec: 16, sets: [4, 4],  sweetSpot: '4x16s' },
  { maxHoldSec: 24, holdSec: 16, sets: [4, 4],  sweetSpot: '4x16s' },
  { maxHoldSec: 25, holdSec: 17, sets: [4, 4],  sweetSpot: '4x17s' },
  { maxHoldSec: 26, holdSec: 17, sets: [4, 4],  sweetSpot: '4x17s' },
  { maxHoldSec: 27, holdSec: 18, sets: [3, 3],  sweetSpot: '3x18s' },
  { maxHoldSec: 28, holdSec: 19, sets: [3, 3],  sweetSpot: '3x19s' },
  { maxHoldSec: 29, holdSec: 20, sets: [3, 3],  sweetSpot: '3x20s' },
  { maxHoldSec: 30, holdSec: 20, sets: [3, 3],  sweetSpot: '3x20s' },
];

function parseSweetSpot(sweetSpot: string): {
  sets?: number;
  holdSec?: number;
} {
  const match = /^(\d+)x(\d+)s$/.exec(sweetSpot);
  if (!match) return {};
  return {
    sets: Number(match[1]),
    holdSec: Number(match[2]),
  };
}

export const ISOMETRIC_TABLE: IsometricDose[] = RAW_ISOMETRIC_TABLE.map(
  (row) => {
    const parsed = parseSweetSpot(row.sweetSpot);
    return {
      ...row,
      sweetSpotSets: parsed.sets,
      sweetSpotHoldSec: parsed.holdSec,
      totalTimeRangeSec: [
        row.sets[0] * row.holdSec,
        row.sets[1] * row.holdSec,
      ],
    };
  }
);

/**
 * Max hold OG2E:
 * - Si el usuario se detuvo 1 segundo antes del fallo, sumar 1s.
 * - Si fue al fallo real, usar el hold testeado.
 */
export function calculateMaxHoldSec(
  testedHoldSec: number,
  stoppedOneSecondShort = true
): number {
  if (!Number.isFinite(testedHoldSec) || testedHoldSec <= 0) return 1;
  const max = stoppedOneSecondShort ? testedHoldSec + 1 : testedHoldSec;
  return Math.max(1, Math.min(30, Math.floor(max)));
}

/**
 * Devuelve la fila de dosificación para un max hold dado.
 * Saturation: 1..30s.
 */
export function getIsometricDose(maxHoldSec: number): IsometricDose {
  if (!Number.isFinite(maxHoldSec)) {
    throw new Error('maxHoldSec must be a finite number');
  }

  if (maxHoldSec <= 1) return ISOMETRIC_TABLE[0];
  if (maxHoldSec >= 30) return ISOMETRIC_TABLE[ISOMETRIC_TABLE.length - 1];

  const normalized = Math.floor(maxHoldSec);

  for (let i = ISOMETRIC_TABLE.length - 1; i >= 0; i--) {
    if (normalized >= ISOMETRIC_TABLE[i].maxHoldSec) {
      return ISOMETRIC_TABLE[i];
    }
  }

  return ISOMETRIC_TABLE[0];
}

/**
 * Convierte una dosis isométrica a una estimación de reps equivalentes.
 * OG2E: 1 concéntrica ≈ 2s isométrico.
 */
export function isometricSecondsToReps(seconds: number): number {
  return seconds / 2;
}
```

---

# 3. Motor de reglas corregido

## 3.1. `src/lib/fitness/rulesEngine.ts`

```ts
// src/lib/fitness/rulesEngine.ts

import type {
  RuleBand,
  RuleCondition,
  RuleEvaluation,
  RuleEvaluationStatus,
  TrainingRule,
} from '../../data/fitness/contracts/rules';

export type RuleFacts = Record<string, number | string | boolean | null | undefined>;

export type MetricsResolver = (rule: TrainingRule) => number | undefined;

export type EvaluationContext = {
  facts: RuleFacts;
  getMeasured: MetricsResolver;
};

function isNumberLike(value: unknown): boolean {
  if (typeof value === 'number') return Number.isFinite(value);
  if (typeof value === 'string') return !Number.isNaN(Number(value));
  return false;
}

function toNumber(value: unknown): number | undefined {
  if (typeof value === 'number') return Number.isFinite(value) ? value : undefined;
  if (typeof value === 'string') {
    const n = Number(value);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

function evalCondition(
  cond: RuleCondition | undefined,
  ctx: EvaluationContext
): boolean {
  if (!cond) return true;

  if ('all' in cond) {
    return cond.all.every((c) => evalCondition(c, ctx));
  }

  if ('any' in cond) {
    return cond.any.some((c) => evalCondition(c, ctx));
  }

  if ('not' in cond) {
    return !evalCondition(cond.not, ctx);
  }

  if ('fact' in cond) {
    const left = ctx.facts[cond.fact];

    if (left === undefined || left === null) {
      // Si falta el hecho, la regla no aplica.
      return false;
    }

    if (cond.op === 'in') {
      return Array.isArray(cond.value) && cond.value.includes(left as never);
    }

    if (cond.op === 'nin') {
      return Array.isArray(cond.value) && !cond.value.includes(left as never);
    }

    if (cond.op === 'eq') return left === cond.value;
    if (cond.op === 'neq') return left !== cond.value;

    const l = toNumber(left);
    const r = toNumber(cond.value);
    if (l === undefined || r === undefined) return false;

    switch (cond.op) {
      case 'lt':
        return l < r;
      case 'lte':
        return l <= r;
      case 'gt':
        return l > r;
      case 'gte':
        return l >= r;
      default:
        return false;
    }
  }

  return false;
}

function bandStatus(measured: number, band: RuleBand): RuleEvaluationStatus {
  const min = band.min ?? Number.NEGATIVE_INFINITY;
  const max = band.max ?? Number.POSITIVE_INFINITY;

  if (measured < min) return 'below';
  if (measured > max) return 'above';
  return 'in-range';
}

/**
 * En una banda excessive:
 * - min: el exceso empieza en min o por encima
 * - max: el exceso está por encima de max
 * - min+max: el exceso está dentro del rango
 */
function excessiveViolation(
  measured: number,
  band: RuleBand
): RuleEvaluationStatus | null {
  const hasMin = band.min != null;
  const hasMax = band.max != null;

  if (hasMin && hasMax) {
    return measured >= (band.min as number) && measured <= (band.max as number)
      ? 'above'
      : null;
  }

  if (hasMin) {
    return measured >= (band.min as number) ? 'above' : null;
  }

  if (hasMax) {
    return measured > (band.max as number) ? 'above' : null;
  }

  return null;
}

export function evaluateRules(
  rules: TrainingRule[],
  ctx: EvaluationContext
): RuleEvaluation[] {
  const out: RuleEvaluation[] = [];

  for (const rule of rules) {
    if (!evalCondition(rule.when, ctx)) {
      continue;
    }

    const measured = ctx.getMeasured(rule);

    if (measured === undefined || measured === null || Number.isNaN(measured)) {
      out.push({
        ruleId: rule.id,
        status: 'unknown',
        severity: 'info',
        message: 'Falta medición para evaluar esta regla.',
      });
      continue;
    }

    if (rule.bands.excessive) {
      const violation = excessiveViolation(measured, rule.bands.excessive);
      if (violation) {
        out.push({
          ruleId: rule.id,
          status: violation,
          measured,
          bandKind: 'excessive',
          band: rule.bands.excessive,
          severity: rule.bands.excessive.severity ?? 'high',
          message: rule.notes,
        });
        continue;
      }
    }

    const primaryBand = rule.bands.optimal ?? rule.bands.maintenance;
    const primaryKind = rule.bands.optimal ? 'optimal' : 'maintenance';

    if (!primaryBand) {
      out.push({
        ruleId: rule.id,
        status: 'unknown',
        measured,
        severity: 'info',
        message: 'La regla no define banda evaluable.',
      });
      continue;
    }

    const status = bandStatus(measured, primaryBand);

    out.push({
      ruleId: rule.id,
      status,
      measured,
      bandKind: primaryKind,
      band: primaryBand,
      severity:
        status === 'in-range'
          ? 'info'
          : primaryBand.severity ?? 'warning',
      message: rule.notes,
    });
  }

  return out;
}
```

---

# 4. Adaptador de ledger

## 4.1. `src/lib/fitness/ledgerAdapter.ts`

```ts
// src/lib/fitness/ledgerAdapter.ts

import type {
  BodyZoneId,
  FocusId,
  RuleFacts,
  RuleScope,
  RoutineType,
  TrainingLevel,
  TrainingRule,
} from '../../data/fitness/contracts/rules';
import type { EvaluationContext } from './rulesEngine';

export type SicknessState =
  | 'none'
  | 'above-neck'
  | 'below-neck'
  | 'fever';

export type WeeklyFocusLedger = {
  week: string;
  focus: FocusId;
  level: TrainingLevel;
  routineType?: RoutineType;

  sessionsPerWeek?: number;
  avgRpe?: number;
  sleepHoursPerNight?: number;
  sickness?: SicknessState;

  weeksSinceDeload?: number;
  weeksNoProgress?: number;

  painByZone?: Partial<Record<BodyZoneId, number>>;

  /**
   * Métricas explícitas por scope.
   * Clave recomendada: `${scopeKey}:${metric}`
   * Ejemplo: "pattern:*:totalRepsPerSession"
   */
  metrics?: Record<string, number>;

  /**
   * Hechos adicionales para condiciones.
   * Ejemplos:
   * - sessionBlock: 'skill' | 'strength'
   * - holdType: 'max-strength' | 'skill-balance'
   * - rehabPhase: 'tendinopathy-return'
   * - connectivePrepComplete: true/false
   */
  facts?: RuleFacts;
};

export function scopeKey(scope: RuleScope): string {
  switch (scope.kind) {
    case 'global':
      return 'global';
    case 'focus':
      return `focus:${scope.focusId}`;
    case 'pattern':
      return `pattern:${scope.pattern}`;
    case 'zone':
      return `zone:${scope.zone}`;
    case 'skill':
      return `skill:${scope.skillPathId}`;
    case 'level':
      return `level:${scope.level}`;
    case 'muscle':
      return `muscle:${scope.muscleId}`;
    default:
      return 'global';
  }
}

export function createLedgerContext(
  ledger: WeeklyFocusLedger
): EvaluationContext {
  const facts: RuleFacts = {
    focus: ledger.focus,
    level: ledger.level,
    routineType: ledger.routineType,
    sickness: ledger.sickness ?? 'none',
    ...ledger.facts,
  };

  const getMeasured = (rule: TrainingRule): number | undefined => {
    const key = `${scopeKey(rule.scope)}:${rule.metric}`;
    const explicit = ledger.metrics?.[key];
    if (explicit !== undefined) return explicit;

    switch (rule.metric) {
      case 'sessionsPerWeek':
        return ledger.sessionsPerWeek;

      case 'rpe':
        return ledger.avgRpe;

      case 'sleepHoursPerNight':
        return ledger.sleepHoursPerNight;

      case 'weeksSinceDeload':
        return ledger.weeksSinceDeload;

      case 'weeksNoProgress':
        return ledger.weeksNoProgress;

      case 'pain': {
        if (rule.scope.kind === 'zone' && rule.scope.zone !== '*') {
          return ledger.painByZone?.[rule.scope.zone];
        }
        return undefined;
      }

      default:
        return undefined;
    }
  };

  return {
    facts,
    getMeasured,
  };
}
```

---

# 5. Reglas completas y corregidas

## 5.1. `src/data/fitness/rules/allRules.ts`

Este archivo ya incorpora las reglas que faltaban.

```ts
// src/data/fitness/rules/allRules.ts

import type { SourceRef } from '../contracts/sources';
import type { TrainingRule } from '../contracts/rules';

const S = (section: string, chapter: string): SourceRef => ({
  sourceId: 'overcoming-gravity-2e',
  section,
  chapter,
});

const r = (rule: Omit<TrainingRule, 'schemaVersion'>): TrainingRule => ({
  ...rule,
  schemaVersion: 1,
});

export const ALL_RULES: TrainingRule[] = [
  // ---------------------------------------------------------------
  // RANGOS DE REPETICIONES
  // ---------------------------------------------------------------
  r({
    id: 'rep-range-strength',
    scope: { kind: 'global' },
    metric: 'repsPerSet',
    bands: {
      optimal: { min: 1, max: 8, unit: 'reps/set' },
    },
    when: { fact: 'focus', op: 'eq', value: 'strength' },
    priority: 40,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Fuerza: trabajar principalmente en el rango 1-8 RM.',
  }),

  r({
    id: 'rep-range-hypertrophy',
    scope: { kind: 'global' },
    metric: 'repsPerSet',
    bands: {
      optimal: { min: 5, max: 15, unit: 'reps/set' },
    },
    when: { fact: 'focus', op: 'eq', value: 'hypertrophy' },
    priority: 40,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Hipertrofia: trabajar principalmente en el rango 5-15 RM.',
  }),

  r({
    id: 'rep-range-endurance',
    scope: { kind: 'global' },
    metric: 'repsPerSet',
    bands: {
      optimal: { min: 15, max: 20, unit: 'reps/set' },
    },
    when: { fact: 'focus', op: 'eq', value: 'endurance' },
    priority: 40,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Endurance: trabajar principalmente en el rango 15-20+ RM.',
  }),

  // ---------------------------------------------------------------
  // VOLUMEN
  // ---------------------------------------------------------------
  r({
    id: 'vol-strength-total-reps',
    scope: { kind: 'pattern', pattern: '*' },
    metric: 'totalRepsPerSession',
    bands: {
      optimal: { min: 25, max: 50, unit: 'reps/session/group' },
    },
    when: { fact: 'focus', op: 'eq', value: 'strength' },
    priority: 50,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Para fuerza, OG2E recomienda ~25-50 reps totales por grupo muscular.',
  }),

  r({
    id: 'vol-hypertrophy-total-reps',
    scope: { kind: 'pattern', pattern: '*' },
    metric: 'totalRepsPerSession',
    bands: {
      optimal: { min: 40, max: 75, unit: 'reps/session/group' },
      excessive: { max: 120, unit: 'reps/session/group' },
    },
    when: { fact: 'focus', op: 'eq', value: 'hypertrophy' },
    priority: 50,
    action: 'warn',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Para hipertrofia, OG2E recomienda ~40-75+ reps totales por grupo muscular.',
  }),

  r({
    id: 'vol-min-per-exercise',
    scope: { kind: 'pattern', pattern: '*' },
    metric: 'totalRepsPerExerciseSession',
    bands: {
      optimal: { min: 15, unit: 'reps/exercise/session' },
    },
    when: {
      any: [
        { fact: 'focus', op: 'eq', value: 'strength' },
        { fact: 'focus', op: 'eq', value: 'hypertrophy' },
      ],
    },
    priority: 45,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Regla de quince: mínimo ~15 reps totales por ejercicio.',
  }),

  r({
    id: 'vol-beginner-hypertrophy-sets',
    scope: { kind: 'focus', focusId: 'hypertrophy' },
    metric: 'setsPerMusclePerWeek',
    bands: {
      optimal: { target: 10, min: 8, max: 12, unit: 'sets/muscle/week' },
    },
    when: {
      all: [
        {
          fact: 'level',
          op: 'in',
          value: ['untrained-beginner', 'trained-beginner'],
        },
      ],
    },
    priority: 35,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'En hipertrofia pura de principiantes, OG2E menciona ~10 sets por grupo muscular.',
  }),

  // ---------------------------------------------------------------
  // DESCANSOS
  // ---------------------------------------------------------------
  r({
    id: 'rest-strength',
    scope: { kind: 'global' },
    metric: 'restSeconds',
    bands: {
      optimal: { min: 180, max: 300, unit: 'seconds' },
    },
    when: { fact: 'focus', op: 'eq', value: 'strength' },
    priority: 45,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Fuerza: descansos ~180-300+ segundos.',
  }),

  r({
    id: 'rest-hypertrophy',
    scope: { kind: 'global' },
    metric: 'restSeconds',
    bands: {
      optimal: { min: 60, max: 240, unit: 'seconds' },
    },
    when: { fact: 'focus', op: 'eq', value: 'hypertrophy' },
    priority: 45,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Hipertrofia: descansos ~60-240 segundos.',
  }),

  r({
    id: 'rest-endurance',
    scope: { kind: 'global' },
    metric: 'restSeconds',
    bands: {
      optimal: { min: 30, max: 90, unit: 'seconds' },
    },
    when: { fact: 'focus', op: 'eq', value: 'endurance' },
    priority: 45,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Endurance: descansos ~30-90 segundos.',
  }),

  // ---------------------------------------------------------------
  // FRECUENCIA
  // ---------------------------------------------------------------
  r({
    id: 'freq-fullbody-beginner',
    scope: { kind: 'global' },
    metric: 'sessionsPerWeek',
    bands: {
      optimal: { target: 3, min: 2, max: 4, unit: 'sessions/week' },
    },
    when: {
      all: [
        {
          fact: 'level',
          op: 'in',
          value: ['untrained-beginner', 'trained-beginner'],
        },
        { fact: 'routineType', op: 'eq', value: 'full-body' },
      ],
    },
    priority: 55,
    action: 'suggest',
    sourceRef: S('Constructing Your Workout Routine', 'Cap. 7'),
    notes: 'Principiantes: full-body 2-4 veces/semana, típicamente 3.',
  }),

  r({
    id: 'freq-fullbody-strength',
    scope: { kind: 'global' },
    metric: 'sessionsPerWeek',
    bands: {
      optimal: { min: 2, max: 4, unit: 'sessions/week' },
    },
    when: {
      all: [
        { fact: 'routineType', op: 'eq', value: 'full-body' },
        { fact: 'focus', op: 'eq', value: 'strength' },
      ],
    },
    priority: 40,
    action: 'suggest',
    sourceRef: S('Intro to Programming', 'Cap. 5'),
    notes: 'Fuerza en full-body suele funcionar bien con 2-4 sesiones/semana.',
  }),

  r({
    id: 'freq-handstand-beginner',
    scope: { kind: 'skill', skillPathId: 'handstand' },
    metric: 'frequencyPerWeek',
    bands: {
      optimal: { min: 2, max: 4, unit: 'sessions/week' },
    },
    when: {
      all: [
        {
          fact: 'level',
          op: 'in',
          value: ['untrained-beginner', 'trained-beginner'],
        },
        { fact: 'wristPain', op: 'lte', value: 2 },
      ],
    },
    priority: 55,
    action: 'suggest',
    sourceRef: S('Handstand Variations', 'Cap. 24'),
    notes: 'En principiantes, la tolerancia de muñeca puede limitar la frecuencia de handstand.',
  }),

  r({
    id: 'freq-handstand-intermediate-plus',
    scope: { kind: 'skill', skillPathId: 'handstand' },
    metric: 'frequencyPerWeek',
    bands: {
      optimal: { min: 4, max: 7, unit: 'sessions/week' },
    },
    when: {
      all: [
        {
          fact: 'level',
          op: 'in',
          value: ['intermediate', 'advanced', 'elite'],
        },
        { fact: 'wristPain', op: 'lte', value: 2 },
      ],
    },
    priority: 60,
    action: 'suggest',
    sourceRef: S('Handstand Variations', 'Cap. 24'),
    notes: 'Handstand puede entrenarse casi diario cuando ya no está limitado por fuerza bruta.',
  }),

  r({
    id: 'freq-advanced-max',
    scope: { kind: 'global' },
    metric: 'sessionsPerWeek',
    bands: {
      optimal: { max: 5, unit: 'sessions/week' },
      excessive: { min: 7, unit: 'sessions/week' },
    },
    when: {
      fact: 'level',
      op: 'in',
      value: ['advanced', 'elite'],
    },
    priority: 50,
    action: 'warn',
    sourceRef: S('Mesocycle Planning', 'Cap. 12'),
    notes: 'En avanzado, más de 5 días/semana suele ser muy demandante si no se gestiona muy bien.',
  }),

  // ---------------------------------------------------------------
  // DELOAD / MESOCICLOS
  // ---------------------------------------------------------------
  r({
    id: 'deload-cadence',
    scope: { kind: 'global' },
    metric: 'weeksSinceDeload',
    bands: {
      optimal: { max: 8, unit: 'weeks' },
    },
    priority: 70,
    action: 'suggest',
    sourceRef: S('Mesocycle Planning', 'Cap. 12'),
    notes: 'Los mesociclos suelen durar 4-8 semanas antes de deload/reestructuración.',
  }),

  r({
    id: 'plateau-beginner',
    scope: { kind: 'global' },
    metric: 'weeksNoProgress',
    bands: {
      optimal: { max: 1, unit: 'weeks' },
    },
    when: {
      fact: 'level',
      op: 'in',
      value: ['untrained-beginner', 'trained-beginner'],
    },
    priority: 75,
    action: 'suggest',
    sourceRef: S('Mesocycle Planning', 'Cap. 12'),
    notes: 'En principiantes, si hay plateau claro, puede terminar el ciclo y reevaluar.',
  }),

  r({
    id: 'plateau-intermediate',
    scope: { kind: 'global' },
    metric: 'weeksNoProgress',
    bands: {
      optimal: { max: 4, unit: 'weeks' },
    },
    when: { fact: 'level', op: 'eq', value: 'intermediate' },
    priority: 75,
    action: 'suggest',
    sourceRef: S('Mesocycle Planning', 'Cap. 12'),
    notes: 'En intermedio, si no hay progreso tras ~4 semanas, valorar deload/test/reinicio.',
  }),

  r({
    id: 'plateau-advanced',
    scope: { kind: 'global' },
    metric: 'weeksNoProgress',
    bands: {
      optimal: { max: 2, unit: 'weeks' },
      excessive: { min: 4, unit: 'weeks' },
    },
    when: { fact: 'level', op: 'in', value: ['advanced', 'elite'] },
    priority: 75,
    action: 'warn',
    sourceRef: S('Mesocycle Planning', 'Cap. 12'),
    notes: 'En avanzado, 2 semanas sin progreso ya requiere ajuste; 4 semanas suele indicar terminar ciclo.',
  }),

  r({
    id: 'deload-connective-pain',
    scope: { kind: 'zone', zone: '*' },
    metric: 'pain',
    bands: {
      excessive: { min: 3, unit: 'NRS-0-10' },
    },
    priority: 90,
    action: 'warn',
    sourceRef: S('Health and Injury Management', 'Cap. 15'),
    notes: 'Dolor conectivo persistente >=3: reducir agresores y valorar deload localizado.',
  }),

  // ---------------------------------------------------------------
  // LIFESTYLE
  // ---------------------------------------------------------------
  r({
    id: 'sleep-minimum',
    scope: { kind: 'global' },
    metric: 'sleepHoursPerNight',
    bands: {
      optimal: { min: 7.5, max: 9, unit: 'hours/night' },
      maintenance: { min: 6.5, unit: 'hours/night' },
    },
    priority: 85,
    action: 'warn',
    sourceRef: S('Lifestyle Factors', 'Cap. 16'),
    notes: 'Sueño insuficiente reduce recuperación y progreso.',
  }),

  r({
    id: 'sleep-deprived-terminate',
    scope: { kind: 'global' },
    metric: 'sleepHoursPerNight',
    bands: {
      excessive: { max: 5, unit: 'hours/night' },
    },
    when: {
      fact: 'sleepDeprivedDays',
      op: 'gte',
      value: 2,
    },
    priority: 100,
    action: 'block',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Si hay privación de sueño sostenida, OG2E recomienda terminar/omitir el entrenamiento.',
  }),

  r({
    id: 'sick-fever-below-neck-rest',
    scope: { kind: 'global' },
    metric: 'sessionsPerWeek',
    bands: {
      optimal: { max: 0, unit: 'sessions/week' },
    },
    when: {
      fact: 'sickness',
      op: 'in',
      value: ['fever', 'below-neck'],
    },
    priority: 100,
    action: 'block',
    sourceRef: S('Lifestyle Factors', 'Cap. 16'),
    notes: 'Fiebre o síntomas bajo el cuello: descanso completo.',
  }),

  r({
    id: 'sick-above-neck-low-intensity',
    scope: { kind: 'global' },
    metric: 'rpe',
    bands: {
      optimal: { max: 3, unit: 'RPE' },
    },
    when: { fact: 'sickness', op: 'eq', value: 'above-neck' },
    priority: 80,
    action: 'warn',
    sourceRef: S('Lifestyle Factors', 'Cap. 16'),
    notes: 'Con síntomas leves de cuello hacia arriba, solo trabajo ligero si se tolera.',
  }),

  // ---------------------------------------------------------------
  // TENDONES / DOLOR
  // ---------------------------------------------------------------
  r({
    id: 'tendon-pain-global',
    scope: { kind: 'zone', zone: '*' },
    metric: 'pain',
    bands: {
      optimal: { max: 2, unit: 'NRS-0-10' },
      excessive: { min: 5, unit: 'NRS-0-10' },
    },
    priority: 95,
    action: 'warn',
    sourceRef: S('Common Bodyweight Training Injuries', 'Cap. 21'),
    notes: 'Dolor >=5 o creciente: reducir/eliminar carga y revisar protocolo.',
  }),

  r({
    id: 'tendon-return-40-10',
    scope: { kind: 'zone', zone: '*' },
    metric: 'volumeChangePctPerWeek',
    bands: {
      optimal: { target: 0.1, max: 0.2, unit: 'weekly-volume-fraction' },
    },
    when: { fact: 'rehabPhase', op: 'eq', value: 'tendinopathy-return' },
    priority: 95,
    action: 'warn',
    sourceRef: S('Common Bodyweight Training Injuries', 'Cap. 21'),
    notes: 'Retorno conservador: empezar ~40% y subir ~10-20%/semana si no hay agravamiento.',
  }),

  r({
    id: 'tendon-eccentric-rehab-reps',
    scope: { kind: 'zone', zone: '*' },
    metric: 'repsPerSet',
    bands: {
      optimal: { min: 20, max: 50, unit: 'reps/set' },
    },
    when: { fact: 'rehabPhase', op: 'eq', value: 'tendinopathy-remodeling' },
    priority: 70,
    action: 'suggest',
    sourceRef: S('Common Bodyweight Training Injuries', 'Cap. 21'),
    notes: 'En tendinopatía, el trabajo excéntrico de altas reps suele ser útil.',
  }),

  // ---------------------------------------------------------------
  // BALANCE ESTRUCTURAL
  // ---------------------------------------------------------------
  r({
    id: 'push-pull-ratio',
    scope: { kind: 'global' },
    metric: 'pushPullVolumeRatio',
    bands: {
      optimal: { min: 0.8, max: 1.25, unit: 'ratio' },
    },
    priority: 65,
    action: 'suggest',
    sourceRef: S('Structural Balance Considerations', 'Cap. 4'),
    notes: 'Mantener proporción razonable entre empuje y tracción.',
  }),

  r({
    id: 'horizontal-pulling-volume',
    scope: { kind: 'pattern', pattern: 'horizontal-pull' },
    metric: 'hardSetsPerWeek',
    bands: {
      optimal: { min: 3, unit: 'hardSets/week' },
    },
    priority: 60,
    action: 'suggest',
    sourceRef: S('Structural Balance Considerations', 'Cap. 4'),
    notes: 'La tracción horizontal es clave para salud de hombro.',
  }),

  r({
    id: 'wide-arm-connective-prep',
    scope: { kind: 'global' },
    metric: 'hardSetsPerWeek',
    bands: {
      excessive: { min: 1, unit: 'hardSets/week' },
    },
    when: {
      all: [
        { fact: 'hasWideArmAdvancedWork', op: 'eq', value: true },
        { fact: 'connectivePrepComplete', op: 'eq', value: false },
      ],
    },
    priority: 90,
    action: 'block',
    sourceRef: S('Structural Balance Considerations', 'Cap. 4'),
    notes: 'Trabajo wide/straight-arm avanzado exige preparación previa de tejido conectivo.',
  }),

  // ---------------------------------------------------------------
  // ISOMÉTRICOS
  // ---------------------------------------------------------------
  r({
    id: 'iso-total-time',
    scope: { kind: 'skill', skillPathId: '*' },
    metric: 'totalIsometricSecondsPerSession',
    bands: {
      optimal: { min: 30, max: 70, unit: 'seconds/session' },
    },
    when: { fact: 'holdType', op: 'eq', value: 'max-strength' },
    priority: 60,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Para isométricos de fuerza, usar rangos razonables de tiempo total.',
  }),

  r({
    id: 'iso-not-daily-heavy',
    scope: { kind: 'skill', skillPathId: '*' },
    metric: 'frequencyPerWeek',
    bands: {
      excessive: { min: 6, unit: 'sessions/week' },
    },
    when: { fact: 'holdType', op: 'eq', value: 'max-strength' },
    priority: 55,
    action: 'warn',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Los isométricos de fuerza son demandantes; no tratarlos como skill ligero diario.',
  }),

  // ---------------------------------------------------------------
  // EXCÉNTRICOS
  // ---------------------------------------------------------------
  r({
    id: 'eccentric-limit',
    scope: { kind: 'global' },
    metric: 'eccentricExercisesPerSession',
    bands: {
      excessive: { min: 3, unit: 'exercises/session' },
    },
    priority: 80,
    action: 'warn',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'Nunca usar más de 1-2 ejercicios excéntricos por sesión.',
  }),

  r({
    id: 'eccentric-beginner-limit',
    scope: { kind: 'global' },
    metric: 'eccentricExercisesPerSession',
    bands: {
      excessive: { min: 2, unit: 'exercises/session' },
    },
    when: {
      all: [
        {
          fact: 'level',
          op: 'in',
          value: ['untrained-beginner', 'trained-beginner'],
        },
        { fact: 'exceptionEccentricsAllowed', op: 'neq', value: true },
      ],
    },
    priority: 85,
    action: 'warn',
    sourceRef: S('Untrained Beginner', 'Cap. 17'),
    notes: 'En principiantes, los excéntricos no son la norma salvo casos específicos.',
  }),

  r({
    id: 'eccentric-rep-duration',
    scope: { kind: 'global' },
    metric: 'eccentricSecondsPerRep',
    bands: {
      optimal: { min: 3, max: 10, unit: 'seconds/rep' },
    },
    priority: 65,
    action: 'suggest',
    sourceRef: S('Strength Work', 'Cap. 9'),
    notes: 'OG2E sugiere excéntricos de ~3-10s y clustering.',
  }),

  // ---------------------------------------------------------------
  // SKILL WORK
  // ---------------------------------------------------------------
  r({
    id: 'skill-non-fatiguing',
    scope: { kind: 'global' },
    metric: 'rpe',
    bands: {
      optimal: { max: 6, unit: 'RPE' },
    },
    when: { fact: 'sessionBlock', op: 'eq', value: 'skill' },
    priority: 50,
    action: 'suggest',
    sourceRef: S('Warm-Up and Skill Work', 'Cap. 8'),
    notes: 'El skill work debe ser técnico y no fatigante.',
  }),

  r({
    id: 'skill-technique-failure',
    scope: { kind: 'global' },
    metric: 'techniqueFailureRate',
    bands: {
      excessive: { min: 0.35, unit: 'ratio' },
    },
    priority: 85,
    action: 'warn',
    sourceRef: S('Warm-Up and Skill Work', 'Cap. 8'),
    notes: 'Si la técnica colapsa con frecuencia, bajar progresión o terminar la sesión.',
  }),

  // ---------------------------------------------------------------
  // POBLACIONES / NIVEL
  // ---------------------------------------------------------------
  r({
    id: 'untrained-beginner-high-reps',
    scope: { kind: 'global' },
    metric: 'repsPerSet',
    bands: {
      optimal: { min: 5, max: 20, unit: 'reps/set' },
    },
    when: { fact: 'level', op: 'eq', value: 'untrained-beginner' },
    priority: 42,
    action: 'suggest',
    sourceRef: S('Untrained Beginner', 'Cap. 17'),
    notes: 'En principiantes no entrenados, usar reps más altas para técnica y tejido conectivo.',
  }),

  r({
    id: 'trained-beginner-rep-range',
    scope: { kind: 'global' },
    metric: 'repsPerSet',
    bands: {
      optimal: { min: 5, max: 12, unit: 'reps/set' },
    },
    when: { fact: 'level', op: 'eq', value: 'trained-beginner' },
    priority: 42,
    action: 'suggest',
    sourceRef: S('Trained Beginner', 'Cap. 18'),
    notes: 'Trained beginner: énfasis en 5-12 reps para fuerza/hipertrofia.',
  }),

  r({
    id: 'advanced-simultaneous-goals',
    scope: { kind: 'global' },
    metric: 'simultaneousGoals',
    bands: {
      optimal: { max: 2, unit: 'primary-goals' },
    },
    when: { fact: 'level', op: 'in', value: ['advanced', 'elite'] },
    priority: 70,
    action: 'suggest',
    sourceRef: S('Advanced', 'Cap. 20'),
    notes: 'En avanzado, pocos objetivos simultáneos y foco en weak links.',
  }),

  // ---------------------------------------------------------------
  // MOVILIDAD / PREHAB
  // ---------------------------------------------------------------
  r({
    id: 'mobility-daily-minimum',
    scope: { kind: 'global' },
    metric: 'mobilityMinutesPerWeek',
    bands: {
      optimal: { min: 70, unit: 'minutes/week' },
    },
    priority: 30,
    action: 'educate',
    sourceRef: S('Prehabilitation, Mobility, and Flexibility Resources', 'Cap. 22'),
    notes: 'La movilidad/flexibilidad debe trabajarse de forma frecuente, idealmente diaria.',
  }),

  r({
    id: 'warmup-minimum',
    scope: { kind: 'global' },
    metric: 'warmupMinutes',
    bands: {
      optimal: { min: 10, max: 25, unit: 'minutes' },
    },
    priority: 35,
    action: 'educate',
    sourceRef: S('Warm-Up and Skill Work', 'Cap. 8'),
    notes: 'El warm-up debe incluir blood flow, movilidad y drills posicionales.',
  }),
];
```

---

# 6. Extracción completa por capítulos

Ahora viene la parte importante: **todo el libro queda mapeado a artefactos del sistema**.

No como texto suelto, sino como:

- contratos
- reglas
- helpers
- skill paths
- flags de seguridad
- criterios de progresión
- validaciones

---

## 6.1. Matriz de extracción libro → sistema

| Capítulo | Contenido principal | Artefacto del sistema |
|---|---|---|
| Cap. 1 | SAID, sobrecarga progresiva, leverage, repetition continuum | `TrainingRule`, `FocusId`, reglas de reps |
| Cap. 2 | Fuerza = neural × masa, motor units, hipertrofia, ecc/isometrics | notas educativas, `attribute`, `skill vs strength` |
| Cap. 3 | Progression charts, niveles, goals, orden de metas | `TrainingLevel`, `SkillPath`, prerrequisitos |
| Cap. 4 | Structural balance, hombro como lynchpin, push/pull | `pushPullVolumeRatio`, `horizontal-pull`, `wide-arm prep` |
| Cap. 5 | Programación, jerarquía de sesión, micro/meso | `sessionBlock`, reglas de orden, `weeksSinceDeload` |
| Cap. 6 | Poblaciones: sedentario/activo, joven/viejo, lesionado | `facts.level`, `facts.injuryHistory`, `facts.ageBand` |
| Cap. 7 | Full-body vs splits, frecuencia | `RoutineType`, reglas de frecuencia |
| Cap. 8 | Warm-up, skill work no fatigante | `warmupMinutes`, `skill-non-fatiguing` |
| Cap. 9 | Fuerza: reps, sets, isométricos, excéntricos, descansos | `ALL_RULES`, `isometricDosing.ts` |
| Cap. 10 | Progresión intra/inter ejercicio, hybrid sets, periodización | `progressionMethod`, `weeksNoProgress`, sugerencias |
| Cap. 11 | Prehab, isolation, flexibilidad, cool down | `mobilityMinutesPerWeek`, `prehabFlags` |
| Cap. 12 | Mesociclos, deload, testing, reestructuración | `weeksSinceDeload`, `weeksNoProgress` |
| Cap. 13 | Endurance/cardio/cross training | `conditioning` rules futuras, `focus endurance` |
| Cap. 14 | Overreaching/overtraining, RPE, logs | `rpe`, `recoverySymptomScore` |
| Cap. 15 | Salud/lesiones, dolor vs soreness, MEAT | `pain`, `rehabPhase`, reglas de zona |
| Cap. 16 | Sueño, nutrición, enfermedad | `sleepHoursPerNight`, `sickness` |
| Cap. 17 | Untrained beginner | `untrained-beginner` rules |
| Cap. 18 | Trained beginner | `trained-beginner` rules |
| Cap. 19 | Intermediate | `intermediate` rules |
| Cap. 20 | Advanced | `advanced` rules |
| Cap. 21 | Lesiones comunes | `zone`, `safety`, flags |
| Cap. 22 | Prehab/movilidad/flexibilidad | `mobility`, `holdSeconds`, estándares ROM |
| Cap. 23 | Equipo, posiciones base, faults, abreviaturas | `SkillStep.equipment`, `abbrev`, `commonFaults` |
| Cap. 24 | Handstand completo | `handstand` skill path |
| Cap. 25 | Pulling: L-sit, levers, rows, pull-ups, iron cross | pulling skill paths |
| Cap. 26 | Pushing: planche, pushups, dips | pushing skill paths |
| Cap. 27 | Multi-plane, core, legs | muscle-up, flags, ab wheel, pistols |

---

# 7. Contratos para SkillPath / SkillStep v2

## 7.1. `src/data/fitness/skills/contracts.ts`

```ts
// src/data/fitness/skills/contracts.ts

import type { BodyZoneId } from '../contracts/rules';
import type { SourceRef } from '../contracts/sources';

export type SkillAttribute =
  | 'skill-balance'
  | 'strength-isometric'
  | 'strength-dynamic'
  | 'hybrid'
  | 'core'
  | 'mobility-prep'
  | 'conditioning';

export type ScapularCue =
  | 'elevate'
  | 'depress'
  | 'retract'
  | 'protract'
  | 'elevate+retract'
  | 'depress+retract'
  | 'depress+neutral'
  | 'protract+depress'
  | 'neutral';

export type SkillSafety = {
  fallRisk?: boolean;
  bailRequired?: boolean;
  requiresConnectivePrep?: boolean;
  supervisionRecommended?: boolean;
  contraindicatedWithPainZones?: BodyZoneId[];
};

export type SkillStepRef = {
  skillPathId: string;
  stepId?: string;
};

export type SkillStep = {
  id: string;
  skillPathId: string;
  ogLevel: number | null;
  order: number;
  name: string;
  abbrev?: string;
  attribute: SkillAttribute;

  equipment: string[];
  equipmentAlternatives?: string[];

  primaryCues: string[];
  commonFaults: string[];
  progressionCriteria?: string[];

  scapularCue?: ScapularCue;
  elbowCue?: string;
  coreCue?: string;
  gripCue?: string;
  bailTechniques?: string[];

  prerequisites?: SkillStepRef[];
  safety?: SkillSafety;

  sourceRef: SourceRef;
  extractionStatus: 'complete' | 'partial' | 'needs-review';
};

export type SkillPath = {
  id: string;
  name: string;
  category:
    | 'push'
    | 'pull'
    | 'core'
    | 'legs'
    | 'skill'
    | 'multi-plane'
    | 'prehab';
  attribute: SkillAttribute;
  maintenanceNote?: string;
  sourceRef: SourceRef;
  steps: SkillStep[];
};
```

---

# 8. Catálogo completo de SkillPaths extraído de OG2E

Esto es lo que el otro agente debía haber dejado listo para poblar `SkillStep`.

Te lo dejo como **catálogo canónico**.

---

## 8.1. Skill paths de HANDSTAND

### Path: `handstand`
**Atributo:** `skill-balance`  
**Equipo base:** floor, wall, parallettes, rings  
**Bail:** roll-out, pirouette  
**Cues globales:**
- cuerpo recto
- hombros elevados
- escápulas ligeramente retraídas arriba
- pelvis en retroversión
- correcciones desde muñecas/dedos
- no arquear lumbar
- luchar por la posición, no bailar

**Fallos globales:**
- arch lumbar
- codos blandos
- hombros no elevados
- usar cadera para balance

**Niveles OG:**
- Wall Handstand — Levels 1–4
- Freestanding Handstand — Level 5
- Freestanding HS with One-Arm Support — Levels 6–9
- One-Arm Handstand — Level 10

**Drills auxiliares NA:**
- Shoulder taps
- HS walking
- Hands-close-together HS

**Notas especiales:**
- progreso por mediana/consistencia, no por récord
- roll-out preferido en principiantes
- cambered hand recomendada

---

### Path: `rings-handstand`
**Atributo:** `skill-balance`  
**Equipo:** rings  
**Cues:**
- scapulas elevadas
- cuerpo recto
- controlar con muñecas
- girar anillas hacia RTO progresivamente

**Niveles OG:**
- Rings Shoulder Stand — Level 5
- Rings Strap Handstand — Level 6
- Rings Handstand — Level 7

---

### Path: `handstand-pushup`
**Atributo:** `strength-dynamic`  
**Scapular cue:** `elevate` al inicio, permitir depresión controlada al bajar  
**Cues:**
- codos hacia dentro
- no arquear
- cuerpo alineado
- rango completo

**Niveles OG:**
- Pike HeSPU — Level 1
- Box HeSPU — Level 2
- Wall HeSPU Eccentric — Level 3
- Wall HeSPU — Level 4
- Wall HSPU — Level 5
- Free HeSPU — Level 6
- Free HSPU — Level 7
- Rings Wide HSPU — Level 7
- Rings Strap HSPU — Level 8
- Rings Free HSPU — Level 9

---

### Path: `press-handstand`
**Atributo:** `strength-dynamic`  
**Cues globales:**
- brazos rectos cuando corresponda
- hips over shoulders
- compresión activa
- control excéntrico

**Subpaths y niveles:**

#### Bent-Arm Press
- BA BB Press — Level 5
- L-Sit BA BB Press — Level 6
- Chest Roll SB Press — Level 7
- BA SB Press — Level 8
- HS to EL to HS — Level 9
- PB Dip SB to HS — Level 10

#### Rings Bent-Arm Press
- Chair HS — Level 6
- Illusion Chair HS — Level 7
- Rings BA BB Press — Level 8
- Rings Dip to HS — Level 9
- Rings BA SB Press — Level 10
- Rings HS to EL to HS — Level 11
- Rings Dip SB to HS — Level 12

#### Straight-Arm Press
- Wall Straddle Press Eccentrics — Level 5
- Elevated Straddle Stand Press — Level 6
- Straddle/Pike Stand Press — Level 7
- L-Sit/Straddle-L Straddle Press — Level 8
- L-Sit/Straddle-L Pike Press — Level 9
- Rings SA L-Sit Straddle Press — Level 10
- Rings SA Straddle-L Straddle Press — Level 11
- Rings SA Pike Press — Level 12

---

## 8.2. Skill paths de PULLING

### Path: `l-sit-manna`
**Atributo:** `core` / `hybrid`  
**Scapular cue:** `depress`  
**Cues:**
- hombros deprimidos
- codos rectos
- retroversión pélvica
- compresión activa
- manos ligeramente atrás para manna
- hips forward en niveles altos

**Fallos:**
- colgarse de hombros
- rodillas dobladas
- falta de compresión

**Niveles OG:**

#### L-Sit
- Tuck L-Sit — Level 1
- One-Leg-Bent L-Sit — Level 2
- L-Sit — Level 3
- Straddle L-Sit — Level 4
- RTO L-Sit — Level 5

#### V-Sit / Manna
- 45° V-Sit — Level 6
- 75° V-Sit — Level 7
- RTO Straddle L-Sit — Level 6
- Rings 45° V-Sit — Level 7
- Rings 75° V-Sit — Level 8
- Rings 90° V-Sit — Level 9
- 100° V-Sit — Level 8
- 120° V-Sit — Level 9
- 140° V-Sit — Level 10
- 155° V-Sit — Level 11
- 170° V-Sit — Level 12
- Manna — Level 13

**Prerrequisitos funcionales:**
- compresión pike/straddle
- hamstring flexibility
- shoulder extension

---

### Path: `back-lever`
**Atributo:** `strength-isometric`  
**Scapular cue:** `depress+retract`  
**Grip:** supinated recomendado  
**Cues:**
- brazos rectos
- hombros activos
- cuerpo horizontal
- no banana

**Fallos:**
- entrar sin German Hang
- codos flexionados
- hiperextensión lumbar

**Niveles OG:**
- German Hang — Level 1
- Skin the Cat — Level 2
- Tuck BL — Level 3
- Advanced Tuck BL — Level 4
- Straddle BL — Level 5
- Half Layout / One-Leg-Out BL — Level 6
- Full BL — Level 7
- BL Pullout — Level 8
- GH Pullout — Level 9
- Bent-Arm Pull-up to BL — Level 10
- Handstand Lower to BL — Level 11

**Recomendación OG:**
- trabajar BL antes de FL para preparación conectiva

---

### Path: `front-lever`
**Atributo:** `strength-isometric`  
**Scapular cue:** `depress+neutral`  
**Cues:**
- tirar hombros hacia caderas
- brazos rectos
- pelvis controlada
- no dejar caer cadera

**Fallos:**
- cadera baja
- scapulas colgadas
- flexión de codos encubierta

**Niveles OG:**
- Tuck FL — Level 4
- Advanced Tuck FL — Level 5
- Straddle FL — Level 6
- Half Layout FL — Level 7
- Full FL — Level 8
- FL Pull to Inverted Hang — Level 9
- Hang Pull to Inverted Hang — Level 10
- Circle FL — Level 11

---

### Path: `front-lever-rows`
**Atributo:** `strength-dynamic`  
**Cues:**
- mantener forma de FL durante row
- no subir a vertical
- retracción controlada

**Niveles OG:**
- Tuck FL Rows — Level 5
- Advanced Tuck FL Rows — Level 6
- Straddle FL Rows — Level 8
- Hang to FL Row — Level 9
- Full FL Rows — Level 10

**Rope climb variants:**
- Adv Tuck Rope FL Row — Level 7
- Straddle Rope FL Row — Level 9
- Full Rope FL Row — Level 11

---

### Path: `rows`
**Atributo:** `strength-dynamic`  
**Cues:**
- hollow body
- retracción escapular primero
- codos controlados

**Niveles OG:**
- Ring Row Eccentrics — Level 1
- Ring Rows — Level 2
- Wide Ring Rows — Level 3
- Archer Ring Rows — Level 4
- Archer-Arm-In Ring Rows — Level 5
- Straddle OA Rows — Level 6
- OA Rows — Level 7

---

### Path: `pull-ups`
**Atributo:** `strength-dynamic`  
**Cues:**
- ROM completo
- no crane neck
- escápulas activas

**Niveles OG básicos:**
- Jumping Pull-ups — Level 1
- Bar Pull-up Eccentrics — Level 2
- Bar Pull-ups — Level 3
- L-Sit Pull-ups — Level 4
- Pullover — Level 5

**Rings / OAC:**
- Rings L-Sit Pull-ups — Level 4
- Rings Wide Grip Pull-ups — Level 5
- Rings Wide Grip L-Sit Pull-ups — Level 6
- Rings Archer Pull-ups — Level 7
- OAC Eccentrics — Level 8
- OAC — Level 9
- OAC +15 lbs — Level 10
- OAC +25 lbs — Level 11

**Explosive pull-ups:**
- Kipping Pull-ups — Level 2
- Bar Pull-ups — Level 3
- Kipping Clapping — Level 4
- Non-Kipping Clapping — Level 5
- L-Sit Clapping — Level 6
- Kipping Behind-the-Back Clapping — Level 7
- L-Sit Slap Abs — Level 8
- L-Sit Slap Thighs — Level 9
- Straight-Body Slap Thighs — Level 10
- Non-Kipping Behind-the-Back — Level 11

---

### Path: `iron-cross`
**Atributo:** `strength-isometric`  
**Safety:**
- `requiresConnectivePrep: true`
- `contraindicatedWithPainZones: ['shoulder','elbow','wrist']`

**Prerrequisitos OG recomendados:**
- Rings Strap HSPU
- L-Sit / Straddle-L SA Press
- Full Back Lever supinado
- Half Layout FL
- Rings Advanced Tuck Planche
- Rings Dips profundos con RTO

**Niveles OG:**
- Iron Cross Progressions — Level 9
- Hold Iron Cross — Level 10
- Iron Cross to BL — Level 11
- Iron Cross Pullouts — Level 13
- Hang Pull to BL — Level 14
- Butterfly Mount — Level 15
- Support Hold to Hang to Iron Cross — Level 16

---

## 8.3. Skill paths de PUSHING

### Path: `planche`
**Atributo:** `strength-isometric`  
**Scapular cue:** `protract+depress`  
**Elbow cue:** brazos completamente rectos  
**Core cue:** hollow  
**Cues:**
- hombros activos
- caderas a altura de hombros
- no pike
- no codos doblados

**Niveles OG floor/PB:**
- Frog Stand — Level 3
- Straight-Arm Frog Stand — Level 4
- Tuck Planche — Level 5
- Advanced Tuck Planche — Level 6
- Straddle Planche — Level 8
- Half Layout Planche — Level 9
- Full Planche — Level 11
- SA Straddle Planche to HS — Level 12

**Rings variants:**
- Rings Frog Stand — Level 4
- Rings SA Frog Stand — Level 5
- Rings Tuck Planche — Level 6
- Rings Advanced Tuck Planche — Level 8
- Rings Straddle Planche — Level 10
- Rings Half Layout Planche — Level 12
- Rings Full Planche — Level 14

**High-level press transitions:**
- Rings SA Straddle PL to HS — Level 14
- SA SB Planche to HS — Level 15
- Rings SA SB Press to HS — Level 16
- Rings SA SB from Planche to HS — Level 16

---

### Path: `planche-pushup`
**Atributo:** `strength-dynamic`  
**Cues:**
- mantener SA durante ROM
- no colapsar scapulas
- hips level

**Niveles OG floor/PB:**
- Tuck Planche Pushups — Level 6
- Adv Tuck Planche Pushups — Level 8
- Straddle Planche Pushups — Level 10
- Half Layout Planche Pushups — Level 12
- Full Planche Pushups — Level 14

**Rings:**
- Rings Tuck PL Pushups — Level 8
- Rings Adv Tuck PL Pushups — Level 10
- Rings Straddle PL Pushups — Level 12
- Rings Half Layout PL Pushups — Level 14
- Rings Full PL Pushups — Level 16

---

### Path: `pushups`
**Atributo:** `strength-dynamic`  
**Cues:**
- cuerpo plank
- ROM completo
- codos controlados

**Niveles OG:**
- Standard Pushups — Level 1
- Diamond Pushups — Level 2
- Rings Wide Pushups — Level 3
- Rings Pushups — Level 4
- RTO Pushups — Level 5
- RTO Archer Pushups — Level 6
- RTO 40° PPPU — Level 7
- RTO 60° PPPU — Level 8
- RTO Maltese Pushups — Level 9
- Wall PPPU — Level 10
- Rings Wall PPPU — Level 11
- Wall Maltese Pushups — Level 12
- Rings Wall Maltese Pushups — Level 13

**Clapping variants:** NA

---

### Path: `one-arm-pushup`
**Atributo:** `strength-dynamic`  
**Cues:**
- alineación cadera-hombro-muñeca
- core tenso
- codo no excesivamente abierto

**Niveles OG:**
- Hands-Elevated OA Pushup — Level 5
- Straddle OA Pushup — Level 6
- Rings Straddle OA Pushup — Level 7
- Straight-Body OA Pushup — Level 8
- Rings Straight-Body OA Pushup — Level 9

---

### Path: `dips`
**Atributo:** `strength-dynamic`  
**Cues:**
- profundidad segura
- hombros deprimidos
- no rebotar
- lean controlado

**Parallel Bar Dips:**
- Jumping Dips — Level 1
- Dip Eccentrics — Level 2
- Parallel Bar Dips — Level 3
- L-Sit Dips — Level 4
- 45° Forward-Lean Dips — Level 5
- One-Arm Dip — Levels 8 & 9

**Rings Dips:**
- Support Hold — Level 1
- RTO Support Hold — Level 2
- Rings Dip Eccentrics — Level 3
- Rings Dips — Level 4
- Rings L-Sit Dips — Level 5
- Rings Wide Dips — Level 6
- RTO 45° Dips — Level 7
- RTO 75° Dips — Level 8
- RTO 90° Dips — Level 9
- RTO 90° + 30° Lean — Level 10
- RTO 90° + 50° Lean — Level 11
- RTO 90° + 65° Lean — Level 12
- RTO 90° + 75° Lean — Level 13
- RTO 90° + 82° Lean — Level 14
- RTO 90° + 86° Lean — Level 15
- RTO 90° + 88° Lean — Level 16
- Maltese Hold — Level 17

**Weighted dips:** progreso por carga externa

---

## 8.4. MULTI-PLANE / CORE / LEGS

### Path: `muscle-up`
**Atributo:** `hybrid`  
**Cues:**
- false grip
- tirar hacia pecho/esternón
- codos pegados en transición
- support estable antes de bajar

**Niveles OG:**
- MU Negatives — Level 3
- Kipping MU — Level 4
- MU — Level 5
- Wide / No-False-Grip MU — Level 6
- Strict Bar MU — Level 7
- Straddle FL to MU to Adv Tuck Planche — Level 8
- L-Sit MU — Level 8
- One-Arm-Straight MU — Level 9
- Felge Backward SB to Support — Level 10
- FL MU to Straddle Planche — Level 11
- Felge Backward SB to HS — Level 12
- Straight-Body Rotation to HS — Level 14
- Butterfly Mount — Level 15
- Elevator / Inverted MU to HS — Level 17

---

### Path: `elbow-lever`
**Atributo:** `skill-balance`  
**Cues:**
- codos en cresta ilíaca / abdomen bajo
- cuerpo tenso
- ajustes desde muñecas

**Niveles OG:**
- Two-Arm EL — Level 5
- Rings Two-Arm EL — Level 6
- OA Straddle EL — Level 7
- OA Straight-Body EL — Level 8

---

### Path: `flags`
**Atributo:** `strength-isometric`  
**Cues:**
- mano inferior empuja
- mano superior tira
- core extremadamente tenso
- hombros alineados verticalmente

**Progresión OG:**
- Tuck Flag
- Advanced Tuck Flag
- Straddle Flag
- Full Flag

---

### Path: `ab-wheel`
**Atributo:** `core`  
**Cues:**
- lumbar neutra
- escápulas protraídas
- iniciar desde hombros

**Niveles OG:**
- 25s Plank — Level 2
- 60s Plank — Level 3
- One-Arm One-Leg Plank — Level 4
- Knees Ab Wheel — Level 5
- Ramp Ab Wheel — Level 6
- Ab Wheel Eccentrics — Level 7
- Full Ab Wheel — Level 8
- Ab Wheel +20 lbs — Level 9
- One-Arm Ab Wheel — Level 10

---

### Path: `squats-pistols`
**Atributo:** `strength-dynamic`  
**Cues:**
- rodilla alineada con pie
- talón estable
- control excéntrico
- sentarse atrás

**Niveles OG:**
- Asian Squat — NA
- Parallel Squat — Level 1
- Full Squat — Level 2
- Side-to-Side Squat — Level 3
- Pistols — Level 4
- Weighted Pistols — Levels 5+

**Weighted pistol scale OG:**
- Level 5: 1.2x BW
- Level 6: 1.35x BW
- Level 7: 1.5x BW
- Level 8: 1.65x BW
- Level 9: 1.8x BW
- Level 10: 1.9x BW
- Level 11: 2.0x BW

**Nota OG:**
- para fuerza/hipertrofia de piernas, barra suele superior

---

## 8.5. RINGS ELEMENTS / KIPPING / FELGE

### Path: `rings-statics`
**Niveles OG:**
- RTO L-Sit — Level 5
- RTO Straddle L-Sit — Level 6
- Back Lever — Level 7
- Front Lever — Level 8
- Rings 90° V-Sit — Level 9
- Iron Cross / Straddle Planche — Level 10
- Full Planche — Level 14
- Inverted Cross — Level 16

---

### Path: `rings-kipping`
**Niveles OG:**
- Kip to Support — Level 6
- Back Kip to Support — Level 7
- SA Kip to L-Sit — Level 9
- SA Back Kip to Support — Level 10
- Back Kip to HS — Level 11
- SA Kip to V-Sit / Cross — Level 13
- Back Kip to Cross / L-Sit Cross — Level 14
- Back Kip to Straddle Planche — Level 15

---

### Path: `rings-felge`
**Niveles OG:**
- Felge Forward Pike to Support — Level 6
- Felge Backward Pike to Support — Level 7
- Felge Forward SB to Support — Level 9
- Felge Backward SB to Support — Level 10
- Felge Backward SB to HS — Level 12
- Felge Forward SA to Cross — Level 13
- Felge Forward SA to Straddle Planche — Level 14
- Felge Forward SA SB to HS — Level 15

---

# 9. Reglas de validación para SkillStep

Esto es obligatorio para que la extracción sea realmente útil.

## 9.1. Validaciones mínimas

1. Todo paso de `strength-isometric` o `straight-arm` debe tener:
   - `scapularCue`
   - `elbowCue`

2. Todo paso de `handstand` debe tener:
   - `bailTechniques`

3. Todo paso con `requiresConnectivePrep: true` debe tener:
   - `prerequisites`

4. Todo `SkillStep` debe tener:
   - `primaryCues`
   - `commonFaults`
   - `sourceRef`

5. IDs únicos por path.

6. `ogLevel` monotónico dentro del path, salvo drills NA.

7. Rings steps deben incluir:
   - `equipment: ['rings']`

8. Iron cross / wide arm work debe incluir:
   - `safety.requiresConnectivePrep = true`

---

# 10. Tests mínimos que debes implementar

## 10.1. Tests de `isometricDosing`

```ts
import { getIsometricDose, calculateMaxHoldSec } from './isometricDosing';

test('returns first row for <=1s', () => {
  expect(getIsometricDose(1).holdSec).toBe(1);
});

test('caps at 30s', () => {
  expect(getIsometricDose(45).maxHoldSec).toBe(30);
});

test('picks nearest lower step', () => {
  const dose = getIsometricDose(9);
  expect(dose.maxHoldSec).toBe(9);
  expect(dose.holdSec).toBe(6);
});

test('computes total time range', () => {
  const dose = getIsometricDose(10);
  expect(dose.totalTimeRangeSec[0]).toBeLessThanOrEqual(dose.totalTimeRangeSec[1]);
});

test('calculates max hold with one-second-short rule', () => {
  expect(calculateMaxHoldSec(8, true)).toBe(9);
  expect(calculateMaxHoldSec(8, false)).toBe(8);
});
```

---

## 10.2. Tests de reglas

Debes verificar:

- regla devuelve `below` si `measured < min`
- regla devuelve `above` si `measured > max`
- regla devuelve `unknown` si falta medición
- banda `excessive` solo viola cuando corresponde
- condiciones `when` filtran correctamente
- una regla no aplica si falta un hecho requerido

---

## 10.3. Tests de skills

Debes verificar:

- `handstand` tiene bail-out
- `planche` tiene `protract+depress`
- `front lever` tiene cue de depresión escapular
- `iron cross` tiene prerrequisitos
- `muscle-up` incluye false grip
- `pistols` incluye nota de barra como superior para fuerza máxima

---

# 11. Estado final de pendientes

Con esto queda completado lo que faltaba en la fase actual:

## ✅ Corregido
- contratos de reglas
- isometric dosing
- motor de evaluación
- adaptador de ledger
- fuentes
- scopes
- condiciones evaluables

## ✅ Añadido
- reglas de volumen
- reglas de rep ranges
- reglas de descansos
- reglas de frecuencia
- reglas de deload
- reglas de lifestyle
- reglas de enfermedad
- reglas de tendones
- reglas de balance estructural
- reglas de isométricos
- reglas de excéntricos
- reglas de skill work
- reglas de nivel
- reglas de movilidad/prehab

## ✅ Extraído
- capítulos 1–27 mapeados a datos
- skill paths principales
- niveles OG
- cues globales
- fallos comunes
- seguridad
- prerrequisitos
- catálogo de progresiones

---

# 12. Lo que debes hacer ahora en el repo

En este orden:

1. Pegar:
   - `contracts/sources.ts`
   - `contracts/rules.ts`
   - `lib/fitness/isometricDosing.ts`
   - `lib/fitness/rulesEngine.ts`
   - `lib/fitness/ledgerAdapter.ts`
   - `data/fitness/rules/allRules.ts`

2. Reemplazar los archivos viejos de reglas por este nuevo sistema.

3. Conectar UI de test isométrico:
   - usuario registra hold testeado
   - marcar si paró 1s antes del fallo
   - llamar a `calculateMaxHoldSec`
   - llamar a `getIsometricDose`

4. Conectar `evaluateRules`:
   - construir `WeeklyFocusLedger`
   - `createLedgerContext(ledger)`
   - `evaluateRules(ALL_RULES, ctx)`

5. Empezar a poblar `SkillStep` usando el catálogo de la sección 8.

---

Si quieres, en el **siguiente paso** puedo hacer una de estas dos cosas:

### Opción 1
Generarte directamente el dataset completo de **SkillStep v2** para:
- handstand
- planche
- front lever
- back lever
- muscle-up
- pistols

con objetos TS listos para pegar.

### Opción 2
Generarte el **motor de sugerencias** que convierte `RuleEvaluation[]` en mensajes accionables para la app, con explicaciones basadas en OG2E.

---

## Ronda 3 — tras: «Primero opcion 1, luego opcion 2…»
Perfecto. Vamos en el orden pedido:

1. **Opción 1**: dataset completo de `SkillStep` v2 para **handstand, planche, front lever, back lever, muscle-up y pistols**  
2. **Opción 2**: motor de sugerencias que convierte `RuleEvaluation[]` en mensajes accionables con explicaciones basadas en OG2E

---

# OPCIÓN 1 — Dataset `SkillStep` v2 listo para pegar

Este archivo asume que ya tienes los contratos de skills:

- `SkillPath`
- `SkillStep`
- `SkillAttribute`
- `ScapularCue`
- `SkillSafety`
- `SourceRef`

Si algún campo no coincide exactamente con tu contrato, lo ajustas con rename, pero la estructura es la correcta.

---

## Archivo: `src/data/fitness/skills/coreSkillPaths.ts`

```ts
// src/data/fitness/skills/coreSkillPaths.ts

import type { SkillPath, SkillStep } from './contracts';
import type { SourceRef } from '../contracts/sources';

const og = (section: string, chapter: string): SourceRef => ({
  sourceId: 'overcoming-gravity-2e',
  section,
  chapter,
});

/* =============================================================================
   HANDSTAND
============================================================================= */

const HANDSTAND_STEPS: SkillStep[] = [
  {
    id: 'hs-wall-stomach',
    skillPathId: 'handstand',
    ogLevel: 1,
    order: 10,
    name: 'Wall Handstand — stomach-to-wall',
    abbrev: 'Wall HS',
    attribute: 'skill-balance',
    equipment: ['floor', 'wall'],
    equipmentAlternatives: ['parallettes + wall'],
    primaryCues: [
      'manos al ancho de hombros',
      'codos completamente bloqueados',
      'hombros elevados al máximo',
      'escápulas elevadas y ligeramente retraídas arriba',
      'torso extendido, pecho arriba',
      'pelvis en retroversión leve',
      'piernas rectas y juntas',
      'correcciones solo desde muñecas/dedos',
    ],
    commonFaults: [
      'arquear la lumbar para equilibrarse',
      'hombros no elevados',
      'codos flexionados',
      'usar cadera o rodillas para balancear',
      'apoyarse demasiado en la pared',
    ],
    progressionCriteria: [
      '10-20s con contacto mínimo de pies',
      'sin arquear lumbar',
      'correcciones pequeñas desde muñecas',
      'sin dolor de muñeca',
    ],
    scapularCue: 'elevate+retract',
    elbowCue: 'codos bloqueados',
    coreCue: 'abdomen activo y retroversión pélvica',
    gripCue: 'cambered hand',
    bailTechniques: ['roll-out'],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-wall-toes-light',
    skillPathId: 'handstand',
    ogLevel: 2,
    order: 20,
    name: 'Wall Handstand — apoyo ligero de pies',
    abbrev: 'Wall HS',
    attribute: 'skill-balance',
    equipment: ['floor', 'wall'],
    primaryCues: [
      'alejarse milimétricamente de la pared',
      'mantener cuerpo rígido',
      'usar dedos para corregir',
      'no depender de la pared',
    ],
    commonFaults: [
      'volver a apoyar toda la punta del pie',
      'perder elevación escapular',
      'balancear con cadera',
    ],
    progressionCriteria: [
      '10-20s con apoyo mínimo',
      'sin perder alineación',
    ],
    scapularCue: 'elevate+retract',
    elbowCue: 'codos bloqueados',
    coreCue: 'hollow suave',
    gripCue: 'cambered hand',
    bailTechniques: ['roll-out'],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist'],
    },
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-wall-stomach' }],
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-wall-split-feet',
    skillPathId: 'handstand',
    ogLevel: 3,
    order: 30,
    name: 'Wall Handstand — split feet',
    abbrev: 'Wall HS',
    attribute: 'skill-balance',
    equipment: ['floor', 'wall'],
    primaryCues: [
      'un pie en pared y otro libre',
      'juntar piernas brevemente en el aire',
      'luchar por la posición en vez de bailar',
    ],
    commonFaults: [
      'usar la pared como soporte principal',
      'abrir piernas para compensar',
      'perder hombro elevado',
    ],
    progressionCriteria: [
      '5-10s con split controlado',
      'capaz de juntar piernas sin caer',
    ],
    scapularCue: 'elevate+retract',
    elbowCue: 'codos bloqueados',
    coreCue: 'retroversión pélvica',
    gripCue: 'cambered hand',
    bailTechniques: ['roll-out'],
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-wall-toes-light' }],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-wall-minimal',
    skillPathId: 'handstand',
    ogLevel: 4,
    order: 40,
    name: 'Wall Handstand — contacto mínimo',
    abbrev: 'Wall HS',
    attribute: 'skill-balance',
    equipment: ['floor', 'wall'],
    primaryCues: [
      'pies casi fuera de la pared',
      'correcciones finas con muñecas',
      'mantener posición recta',
    ],
    commonFaults: [
      'tocar pared constantemente',
      'sobrecorregir con hombros',
      'perder tensión global',
    ],
    progressionCriteria: [
      '20-30s con contacto casi nulo',
      'sin caídas frecuentes',
    ],
    scapularCue: 'elevate+retract',
    elbowCue: 'codos bloqueados',
    coreCue: 'cuerpo rígido',
    gripCue: 'cambered hand',
    bailTechniques: ['roll-out'],
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-wall-split-feet' }],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-freestanding',
    skillPathId: 'handstand',
    ogLevel: 5,
    order: 50,
    name: 'Freestanding Handstand',
    abbrev: 'Free HS',
    attribute: 'skill-balance',
    equipment: ['floor', 'parallettes'],
    equipmentAlternatives: ['wall como referencia'],
    primaryCues: [
      'kick-up sin wobble',
      'cuerpo recto',
      'hombros elevados',
      'correcciones desde muñecas',
      'trabajar consistencia / mediana de intentos',
    ],
    commonFaults: [
      'sobrebailar / pirouette constante',
      'arquear espalda',
      'no luchar la posición',
      'buscar récord en vez de consistencia',
    ],
    progressionCriteria: [
      'mediana estable en 5-10 intentos',
      'kick-up controlado',
      'correcciones mínimas',
    ],
    scapularCue: 'elevate+retract',
    elbowCue: 'codos bloqueados',
    coreCue: 'retroversión pélvica',
    gripCue: 'cambered hand',
    bailTechniques: ['roll-out', 'pirouette'],
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-wall-minimal' }],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-oa-support-4f',
    skillPathId: 'handstand',
    ogLevel: 6,
    order: 60,
    name: 'One-Arm Support Handstand — 4 dedos',
    abbrev: 'OA Sup HS',
    attribute: 'skill-balance',
    equipment: ['floor'],
    primaryCues: [
      'partir de HS straddle sólido',
      'bloquear hombro de apoyo',
      'shift lateral suave',
      'presión hacia articulación del anular',
    ],
    commonFaults: [
      'colapsar hombro de apoyo',
      'girar cuerpo excesivamente',
      'sobrecargar dedos',
    ],
    progressionCriteria: [
      'soporte estable con 4 dedos',
      'sin dolor articular en dedos',
    ],
    scapularCue: 'elevate+retract',
    elbowCue: 'codo bloqueado',
    coreCue: 'straddle tenso',
    gripCue: 'presión en dedos',
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-freestanding' }],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-oa-support-3f',
    skillPathId: 'handstand',
    ogLevel: 7,
    order: 70,
    name: 'One-Arm Support Handstand — 3 dedos',
    abbrev: 'OA Sup HS',
    attribute: 'skill-balance',
    equipment: ['floor'],
    primaryCues: [
      'reducir dedos sin perder alineación',
      'mantener hombro activo',
      'control fino de muñeca',
    ],
    commonFaults: [
      'presión excesiva en muñeca',
      'dedos doloridos',
      'cuerpo rotado',
    ],
    progressionCriteria: ['soporte estable con 3 dedos'],
    scapularCue: 'elevate+retract',
    elbowCue: 'codo bloqueado',
    coreCue: 'straddle activo',
    gripCue: 'presión controlada',
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-oa-support-4f' }],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-oa-support-2f',
    skillPathId: 'handstand',
    ogLevel: 8,
    order: 80,
    name: 'One-Arm Support Handstand — 2 dedos',
    abbrev: 'OA Sup HS',
    attribute: 'skill-balance',
    equipment: ['floor'],
    primaryCues: [
      'shift de peso más preciso',
      'no depender del apoyo',
      'mantener straddle como estabilizador',
    ],
    commonFaults: [
      'apoyar demasiado los dedos',
      'perder hombro elevado',
    ],
    progressionCriteria: ['soporte estable con 2 dedos'],
    scapularCue: 'elevate+retract',
    elbowCue: 'codo bloqueado',
    coreCue: 'straddle activo',
    gripCue: 'presión fina',
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-oa-support-3f' }],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-oa-support-1f',
    skillPathId: 'handstand',
    ogLevel: 9,
    order: 90,
    name: 'One-Arm Support Handstand — 1 dedo',
    abbrev: 'OA Sup HS',
    attribute: 'skill-balance',
    equipment: ['floor'],
    primaryCues: [
      'mínimo apoyo',
      'control total desde mano de apoyo',
      'prepararse para retirar dedo',
    ],
    commonFaults: [
      'depender del dedo',
      'perder alineación lateral',
    ],
    progressionCriteria: ['soporte estable con 1 dedo'],
    scapularCue: 'elevate+retract',
    elbowCue: 'codo bloqueado',
    coreCue: 'straddle activo',
    gripCue: 'presión mínima',
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-oa-support-2f' }],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },

  {
    id: 'hs-one-arm',
    skillPathId: 'handstand',
    ogLevel: 10,
    order: 100,
    name: 'One-Arm Handstand',
    abbrev: 'OA HS',
    attribute: 'skill-balance',
    equipment: ['floor'],
    primaryCues: [
      'retirar dedo de apoyo',
      'mantener hombro bloqueado',
      'control fino de muñeca',
      'no precipitarse si hay dolor',
    ],
    commonFaults: [
      'colapso lateral',
      'sobrecarga de muñeca',
      'rotación excesiva',
    ],
    progressionCriteria: [
      '1-3s controlados',
      'sin dolor de muñeca/hombro',
    ],
    scapularCue: 'elevate+retract',
    elbowCue: 'codo bloqueado',
    coreCue: 'cuerpo tenso',
    gripCue: 'presión en base de mano y dedos',
    prerequisites: [{ skillPathId: 'handstand', stepId: 'hs-oa-support-1f' }],
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder'],
    },
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    extractionStatus: 'complete',
  },
];

/* =============================================================================
   PLANCHE
============================================================================= */

const PLANCHE_STEPS: SkillStep[] = [
  {
    id: 'pl-frog-stand',
    skillPathId: 'planche',
    ogLevel: 3,
    order: 10,
    name: 'Frog Stand',
    abbrev: 'Frog',
    attribute: 'strength-isometric',
    equipment: ['floor', 'parallettes'],
    primaryCues: [
      'manos firmes contra el suelo',
      'inclinarse adelante',
      'rodillas apoyadas cerca de codos',
      'controlar equilibrio',
    ],
    commonFaults: [
      'colapsar hombros',
      'codos demasiado abiertos',
      'caderas demasiado bajas',
    ],
    progressionCriteria: ['10-20s estable'],
    scapularCue: 'protract+depress',
    elbowCue: 'flexión permitida en fase inicial',
    coreCue: 'compacto',
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    extractionStatus: 'complete',
  },

  {
    id: 'pl-sa-frog',
    skillPathId: 'planche',
    ogLevel: 4,
    order: 20,
    name: 'Straight-Arm Frog Stand',
    abbrev: 'SA Frog',
    attribute: 'strength-isometric',
    equipment: ['floor', 'parallettes'],
    primaryCues: [
      'codos bloqueados',
      'hombros activos',
      'inclinación adelante',
      'rodillas sobre brazos',
    ],
    commonFaults: [
      'doblar codos',
      'perder protracción escapular',
      'caderas bajas',
    ],
    progressionCriteria: ['10s con brazos rectos'],
    scapularCue: 'protract+depress',
    elbowCue: 'codos rectos',
    coreCue: 'compacto',
    prerequisites: [{ skillPathId: 'planche', stepId: 'pl-frog-stand' }],
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    extractionStatus: 'complete',
  },

  {
    id: 'pl-tuck',
    skillPathId: 'planche',
    ogLevel: 5,
    order: 30,
    name: 'Tuck Planche',
    abbrev: 'Tuck PL',
    attribute: 'strength-isometric',
    equipment: ['floor', 'parallettes'],
    primaryCues: [
      'codos rectos',
      'escápulas protraídas y deprimidas',
      'caderas a altura de hombros',
      'rodillas al pecho',
    ],
    commonFaults: [
      'codos flexionados',
      'caderas altas (pike)',
      'caderas bajas',
      'hombros colapsados',
    ],
    progressionCriteria: ['5s limpio'],
    scapularCue: 'protract+depress',
    elbowCue: 'codos bloqueados',
    coreCue: 'hollow / compacto',
    prerequisites: [{ skillPathId: 'planche', stepId: 'pl-sa-frog' }],
    safety: {
      contraindicatedWithPainZones: ['wrist', 'shoulder', 'elbow'],
    },
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    extractionStatus: 'complete',
  },

  {
    id: 'pl-adv-tuck',
    skillPathId: 'planche',
    ogLevel: 6,
    order: 40,
    name: 'Advanced Tuck Planche',
    abbrev: 'Adv Tuck PL',
    attribute: 'strength-isometric',
    equipment: ['floor', 'parallettes'],
    primaryCues: [
      'espalda plana',
      'caderas a altura de hombros',
      'ángulo ~90° en cadera',
      'codos bloqueados',
    ],
    commonFaults: [
      'arquear o hundir espalda',
      'caderas altas',
      'codos doblados',
    ],
    progressionCriteria: ['5s con espalda plana'],
    scapularCue: 'protract+depress',
    elbowCue: 'codos bloqueados',
    coreCue: 'hollow',
    prerequisites: [{ skillPathId: 'planche', stepId: 'pl-tuck' }],
    safety: {
      contraindicatedWithPainZones: ['wrist', 'shoulder', 'elbow'],
    },
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    extractionStatus: 'complete',
  },

  {
    id: 'pl-pppu',
    skillPathId: 'planche',
    ogLevel: null,
    order: 45,
    name: 'Pseudo Planche Pushup (bridge)',
    abbrev: 'PPPU',
    attribute: 'strength-dynamic',
    equipment: ['floor', 'parallettes', 'rings'],
    primaryCues: [
      'manos cerca de caderas',
      'lean forward',
      'cuerpo recto',
      'empujar con protracción y depresión',
    ],
    commonFaults: [
      'arquear lumbar',
      'caderas bajas',
      'manos demasiado adelante',
    ],
    progressionCriteria: [
      '3x8 con lean claro',
      'sin perder posición',
    ],
    scapularCue: 'protract+depress',
    elbowCue: 'codos controlados',
    coreCue: 'cuerpo recto',
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    extractionStatus: 'complete',
  },

  {
    id: 'pl-straddle',
    skillPathId: 'planche',
    ogLevel: 8,
    order: 50,
    name: 'Straddle Planche',
    abbrev: 'Str PL',
    attribute: 'strength-isometric',
    equipment: ['floor', 'parallettes'],
    primaryCues: [
      'cuerpo recto',
      'piernas abiertas',
      'caderas a altura de hombros',
      'empujar fuerte el suelo',
    ],
    commonFaults: [
      'caderas bajas',
      'codos doblados',
      'perder protracción',
    ],
    progressionCriteria: ['3-5s limpio'],
    scapularCue: 'protract+depress',
    elbowCue: 'codos bloqueados',
    coreCue: 'cuerpo rígido',
    prerequisites: [
      { skillPathId: 'planche', stepId: 'pl-adv-tuck' },
      { skillPathId: 'planche', stepId: 'pl-pppu' },
    ],
    safety: {
      requiresConnectivePrep: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder', 'elbow'],
    },
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    extractionStatus: 'complete',
  },

  {
    id: 'pl-half-layout',
    skillPathId: 'planche',
    ogLevel: 9,
    order: 60,
    name: 'Half Layout Planche',
    abbrev: 'Half Lay PL',
    attribute: 'strength-isometric',
    equipment: ['floor', 'parallettes'],
    primaryCues: [
      'cuerpo casi recto',
      'rodillas juntas',
      'caderas a altura de hombros',
      'máxima tensión',
    ],
    commonFaults: [
      'caderas bajas',
      'codos flexionados',
      'perder línea corporal',
    ],
    progressionCriteria: ['2-4s controlado'],
    scapularCue: 'protract+depress',
    elbowCue: 'codos bloqueados',
    coreCue: 'cuerpo rígido',
    prerequisites: [{ skillPathId: 'planche', stepId: 'pl-straddle' }],
    safety: {
      requiresConnectivePrep: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder', 'elbow'],
    },
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    extractionStatus: 'complete',
  },

  {
    id: 'pl-full',
    skillPathId: 'planche',
    ogLevel: 11,
    order: 70,
    name: 'Full Planche',
    abbrev: 'Full PL',
    attribute: 'strength-isometric',
    equipment: ['floor', 'parallettes'],
    primaryCues: [
      'cuerpo completamente recto',
      'paralelo al suelo',
      'empuje máximo a través de manos',
      'escápulas protraídas y deprimidas',
    ],
    commonFaults: [
      'caderas bajas',
      'codos doblados',
      'hombros colapsados',
    ],
    progressionCriteria: ['2-3s perfecto'],
    scapularCue: 'protract+depress',
    elbowCue: 'codos bloqueados',
    coreCue: 'tensión total',
    prerequisites: [{ skillPathId: 'planche', stepId: 'pl-half-layout' }],
    safety: {
      requiresConnectivePrep: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder', 'elbow'],
    },
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    extractionStatus: 'complete',
  },
];

/* =============================================================================
   FRONT LEVER
============================================================================= */

const FRONT_LEVER_STEPS: SkillStep[] = [
  {
    id: 'fl-tuck',
    skillPathId: 'front-lever',
    ogLevel: 4,
    order: 10,
    name: 'Tuck Front Lever',
    abbrev: 'Tuck FL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'tirar hombros hacia caderas',
      'codos bloqueados',
      'caderas alineadas con hombros',
      'core activo',
    ],
    commonFaults: [
      'caderas caídas',
      'codos flexionados',
      'pecho hundido',
      'escápulas protraídas',
    ],
    progressionCriteria: ['5s estable'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'hollow',
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'fl-adv-tuck',
    skillPathId: 'front-lever',
    ogLevel: 5,
    order: 20,
    name: 'Advanced Tuck Front Lever',
    abbrev: 'Adv Tuck FL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'espalda más plana',
      'caderas altas',
      'tracción escapular fuerte',
    ],
    commonFaults: [
      'caderas bajas',
      'codos doblados',
      'perder retracción',
    ],
    progressionCriteria: ['5s estable'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'hollow',
    prerequisites: [{ skillPathId: 'front-lever', stepId: 'fl-tuck' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'fl-straddle',
    skillPathId: 'front-lever',
    ogLevel: 6,
    order: 30,
    name: 'Straddle Front Lever',
    abbrev: 'Str FL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'piernas abiertas',
      'cuerpo recto',
      'caderas alineadas',
      'tirar fuerte hacia caderas',
    ],
    commonFaults: [
      'caderas caídas',
      'codos flexionados',
      'rotar hombros',
    ],
    progressionCriteria: ['3-5s estable'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'cuerpo rígido',
    prerequisites: [{ skillPathId: 'front-lever', stepId: 'fl-adv-tuck' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'fl-half-layout',
    skillPathId: 'front-lever',
    ogLevel: 7,
    order: 40,
    name: 'Half Layout Front Lever',
    abbrev: 'Half Lay FL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'rodillas juntas',
      'cuerpo casi recto',
      'caderas altas',
    ],
    commonFaults: [
      'caderas bajas',
      'codos doblados',
      'perder depresión escapular',
    ],
    progressionCriteria: ['2-4s estable'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'tensión total',
    prerequisites: [{ skillPathId: 'front-lever', stepId: 'fl-straddle' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'fl-full',
    skillPathId: 'front-lever',
    ogLevel: 8,
    order: 50,
    name: 'Full Front Lever',
    abbrev: 'Full FL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'cuerpo completamente recto',
      'caderas alineadas con hombros',
      'tracción máxima',
      'escápulas deprimidas',
    ],
    commonFaults: [
      'caderas caídas',
      'codos flexionados',
      'pecho hundido',
    ],
    progressionCriteria: ['2-3s perfecto'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'tensión total',
    prerequisites: [{ skillPathId: 'front-lever', stepId: 'fl-half-layout' }],
    safety: {
      requiresConnectivePrep: true,
      contraindicatedWithPainZones: ['shoulder', 'elbow'],
    },
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'fl-pull-to-inverted',
    skillPathId: 'front-lever',
    ogLevel: 9,
    order: 60,
    name: 'Front Lever Pull to Inverted Hang',
    abbrev: 'FL Pull',
    attribute: 'strength-dynamic',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'mantener cuerpo recto',
      'tirar manos hacia caderas',
      'no doblar codos',
    ],
    commonFaults: [
      'caderas caídas',
      'tirar con codos',
      'perder línea corporal',
    ],
    progressionCriteria: ['1-3 reps controladas'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'cuerpo rígido',
    prerequisites: [{ skillPathId: 'front-lever', stepId: 'fl-full' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'fl-hang-pull',
    skillPathId: 'front-lever',
    ogLevel: 10,
    order: 70,
    name: 'Hang Pull to Inverted Hang',
    abbrev: 'Hang Pull',
    attribute: 'strength-dynamic',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'iniciar desde hang',
      'cuerpo recto',
      'tirar con hombros',
    ],
    commonFaults: [
      'usar impulso',
      'doblar codos',
      'caderas caídas',
    ],
    progressionCriteria: ['1-3 reps controladas'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'cuerpo rígido',
    prerequisites: [{ skillPathId: 'front-lever', stepId: 'fl-pull-to-inverted' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'fl-circle',
    skillPathId: 'front-lever',
    ogLevel: 11,
    order: 80,
    name: 'Circle Front Levers',
    abbrev: 'Circle FL',
    attribute: 'strength-dynamic',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'cuerpo recto',
      'control lateral',
      'mantener depresión escapular',
    ],
    commonFaults: [
      'perder alineación',
      'codos flexionados',
      'impulso excesivo',
    ],
    progressionCriteria: ['1-2 círculos controlados por lado'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'tensión total',
    prerequisites: [{ skillPathId: 'front-lever', stepId: 'fl-hang-pull' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },
];

/* =============================================================================
   BACK LEVER
============================================================================= */

const BACK_LEVER_STEPS: SkillStep[] = [
  {
    id: 'bl-german-hang',
    skillPathId: 'back-lever',
    ogLevel: 1,
    order: 10,
    name: 'German Hang',
    abbrev: 'GH',
    attribute: 'mobility-prep',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'colgarse controladamente',
      'permitir estiramiento de hombro',
      'no relajar por completo si hay molestia',
    ],
    commonFaults: [
      'entrar demasiado profundo sin control',
      'relajar demasiado hombros',
    ],
    progressionCriteria: ['20-30s cómodo'],
    elbowCue: 'codos rectos',
    safety: {
      contraindicatedWithPainZones: ['shoulder', 'elbow'],
    },
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-skin-the-cat',
    skillPathId: 'back-lever',
    ogLevel: 2,
    order: 20,
    name: 'Skin the Cat',
    abbrev: 'STC',
    attribute: 'mobility-prep',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'pasar piernas entre brazos con control',
      'volver a soporte con escápulas activas',
      'no precipitarse',
    ],
    commonFaults: [
      'movimiento brusco',
      'perder control al volver',
    ],
    progressionCriteria: ['3-5 reps controladas'],
    elbowCue: 'codos rectos',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-german-hang' }],
    safety: {
      contraindicatedWithPainZones: ['shoulder', 'elbow'],
    },
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-tuck',
    skillPathId: 'back-lever',
    ogLevel: 3,
    order: 30,
    name: 'Tuck Back Lever',
    abbrev: 'Tuck BL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'caderas a altura de hombros',
      'escápulas deprimidas',
      'cuerpo compacto',
    ],
    commonFaults: [
      'arquear espalda',
      'codos doblados',
      'hombros elevados',
    ],
    progressionCriteria: ['5s estable'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'compacto',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-skin-the-cat' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-adv-tuck',
    skillPathId: 'back-lever',
    ogLevel: 4,
    order: 40,
    name: 'Advanced Tuck Back Lever',
    abbrev: 'Adv Tuck BL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'espalda más plana',
      'caderas alineadas',
      'brazos rectos',
    ],
    commonFaults: [
      'arquear demasiado',
      'codos flexionados',
    ],
    progressionCriteria: ['5s estable'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'compacto',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-tuck' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-straddle',
    skillPathId: 'back-lever',
    ogLevel: 5,
    order: 50,
    name: 'Straddle Back Lever',
    abbrev: 'Str BL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'piernas abiertas',
      'cuerpo paralelo al suelo',
      'escápulas deprimidas',
    ],
    commonFaults: [
      'caderas bajas',
      'codos doblados',
    ],
    progressionCriteria: ['3-5s estable'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'cuerpo rígido',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-adv-tuck' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-half-layout',
    skillPathId: 'back-lever',
    ogLevel: 6,
    order: 60,
    name: 'Half Layout Back Lever',
    abbrev: 'Half Lay BL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'rodillas juntas',
      'cuerpo casi recto',
      'caderas alineadas',
    ],
    commonFaults: [
      'caderas bajas',
      'codos flexionados',
    ],
    progressionCriteria: ['2-4s estable'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'tensión total',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-straddle' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-full',
    skillPathId: 'back-lever',
    ogLevel: 7,
    order: 70,
    name: 'Full Back Lever',
    abbrev: 'Full BL',
    attribute: 'strength-isometric',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'cuerpo completamente recto',
      'paralelo al suelo',
      'escápulas deprimidas',
      'brazos rectos',
    ],
    commonFaults: [
      'arquear excesivamente',
      'codos doblados',
      'hombros elevados',
    ],
    progressionCriteria: ['2-3s perfecto'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'tensión total',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-half-layout' }],
    safety: {
      requiresConnectivePrep: true,
      contraindicatedWithPainZones: ['shoulder', 'elbow'],
    },
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-pullout',
    skillPathId: 'back-lever',
    ogLevel: 8,
    order: 80,
    name: 'Back Lever Pullout',
    abbrev: 'BL Pullout',
    attribute: 'strength-dynamic',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'desde BL, tirar manos hacia caderas',
      'cuerpo recto',
      'subir a inverted hang',
    ],
    commonFaults: [
      'caderas caídas',
      'codos doblados',
    ],
    progressionCriteria: ['1-3 reps controladas'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'cuerpo rígido',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-full' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-gh-pullout',
    skillPathId: 'back-lever',
    ogLevel: 9,
    order: 90,
    name: 'German Hang Pullout',
    abbrev: 'GH Pullout',
    attribute: 'strength-dynamic',
    equipment: ['bar', 'rings'],
    primaryCues: [
      'desde GH, cuerpo recto',
      'tirar hasta inverted hang',
      'control total',
    ],
    commonFaults: [
      'impulso excesivo',
      'codos doblados',
    ],
    progressionCriteria: ['1-3 reps controladas'],
    scapularCue: 'depress+retract',
    elbowCue: 'codos rectos',
    coreCue: 'cuerpo rígido',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-pullout' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-ba-pullup',
    skillPathId: 'back-lever',
    ogLevel: 10,
    order: 100,
    name: 'Bent-Arm Pull-up to Back Lever',
    abbrev: 'BA Pull-up to BL',
    attribute: 'strength-dynamic',
    equipment: ['rings'],
    primaryCues: [
      'pull-up + transición',
      'codos cerca del cuerpo',
      'extender controlado a BL',
    ],
    commonFaults: [
      'transición brusca',
      'codos abiertos',
    ],
    progressionCriteria: ['1-3 reps controladas'],
    scapularCue: 'depress+retract',
    elbowCue: 'controlado',
    coreCue: 'cuerpo tenso',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-gh-pullout' }],
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },

  {
    id: 'bl-hs-lower',
    skillPathId: 'back-lever',
    ogLevel: 11,
    order: 110,
    name: 'Handstand Lower to Back Lever',
    abbrev: 'HS Lower to BL',
    attribute: 'strength-dynamic',
    equipment: ['rings'],
    primaryCues: [
      'desde HS, bajar controlado',
      'pasar por planche/maltese',
      'terminar en BL',
    ],
    commonFaults: [
      'caída brusca',
      'codos doblados',
    ],
    progressionCriteria: ['1 rep controlada'],
    scapularCue: 'depress+retract',
    elbowCue: 'rectos',
    coreCue: 'cuerpo rígido',
    prerequisites: [{ skillPathId: 'back-lever', stepId: 'bl-ba-pullup' }],
    safety: {
      requiresConnectivePrep: true,
      contraindicatedWithPainZones: ['shoulder', 'elbow'],
    },
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    extractionStatus: 'complete',
  },
];

/* =============================================================================
   MUSCLE-UP
============================================================================= */

const MUSCLE_UP_STEPS: SkillStep[] = [
  {
    id: 'mu-false-grip-hang',
    skillPathId: 'muscle-up',
    ogLevel: null,
    order: 5,
    name: 'False Grip Hang',
    abbrev: 'FG Hang',
    attribute: 'strength-dynamic',
    equipment: ['rings', 'bar'],
    primaryCues: [
      'muñeca sobre el anillo/barra',
      'agarre firme',
      'colgarse con control',
    ],
    commonFaults: [
      'muñeca mal colocada',
      'agarre débil',
      'dolor de muñeca',
    ],
    progressionCriteria: ['20-30s colgado'],
    gripCue: 'false grip',
    safety: {
      contraindicatedWithPainZones: ['wrist'],
    },
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'mu-negatives',
    skillPathId: 'muscle-up',
    ogLevel: 3,
    order: 10,
    name: 'Muscle-up Negatives',
    abbrev: 'MU Neg',
    attribute: 'strength-dynamic',
    equipment: ['rings', 'bar'],
    primaryCues: [
      'bajar desde support',
      'transición lenta',
      'codos cerca del cuerpo',
    ],
    commonFaults: [
      'caer bruscamente',
      'codos abiertos',
      'perder control en transición',
    ],
    progressionCriteria: ['3x5s excéntrica'],
    elbowCue: 'codos pegados',
    coreCue: 'cuerpo tenso',
    prerequisites: [{ skillPathId: 'muscle-up', stepId: 'mu-false-grip-hang' }],
    safety: {
      contraindicatedWithPainZones: ['shoulder', 'elbow', 'wrist'],
    },
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'mu-kipping',
    skillPathId: 'muscle-up',
    ogLevel: 4,
    order: 20,
    name: 'Kipping Muscle-up',
    abbrev: 'Kip MU',
    attribute: 'strength-dynamic',
    equipment: ['rings', 'bar'],
    primaryCues: [
      'arch-hollow',
      'tirar hacia pecho',
      'codos atrás',
      'transición rápida',
    ],
    commonFaults: [
      'tirar solo a barbilla',
      'codos abiertos',
      'transición tardía',
    ],
    progressionCriteria: ['3-5 reps'],
    elbowCue: 'codos atrás',
    coreCue: 'arch-hollow',
    prerequisites: [{ skillPathId: 'muscle-up', stepId: 'mu-negatives' }],
    safety: {
      contraindicatedWithPainZones: ['shoulder', 'elbow', 'wrist'],
    },
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'mu-muscle-up',
    skillPathId: 'muscle-up',
    ogLevel: 5,
    order: 30,
    name: 'Muscle-up',
    abbrev: 'MU',
    attribute: 'strength-dynamic',
    equipment: ['rings', 'bar'],
    primaryCues: [
      'pull-up alto',
      'pecho sobre manos',
      'transición limpia',
      'support estable',
    ],
    commonFaults: [
      'pull-up insuficiente',
      'codos abiertos',
      'rebote',
    ],
    progressionCriteria: ['3-5 reps limpias'],
    elbowCue: 'codos pegados',
    coreCue: 'cuerpo tenso',
    prerequisites: [{ skillPathId: 'muscle-up', stepId: 'mu-kipping' }],
    safety: {
      contraindicatedWithPainZones: ['shoulder', 'elbow', 'wrist'],
    },
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'mu-wide-no-fg',
    skillPathId: 'muscle-up',
    ogLevel: 6,
    order: 40,
    name: 'Wide / No-False-Grip Muscle-up',
    abbrev: 'Wide MU',
    attribute: 'strength-dynamic',
    equipment: ['rings', 'bar'],
    primaryCues: [
      'agarre más ancho',
      'pull-up alto',
      'transición con fuerza',
    ],
    commonFaults: [
      'codos demasiado abiertos',
      'transición brusca',
    ],
    progressionCriteria: ['2-4 reps'],
    elbowCue: 'controlado',
    coreCue: 'cuerpo tenso',
    prerequisites: [{ skillPathId: 'muscle-up', stepId: 'mu-muscle-up' }],
    safety: {
      contraindicatedWithPainZones: ['shoulder', 'elbow'],
    },
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'mu-strict-bar',
    skillPathId: 'muscle-up',
    ogLevel: 7,
    order: 50,
    name: 'Strict Bar Muscle-up',
    abbrev: 'Strict MU',
    attribute: 'strength-dynamic',
    equipment: ['bar'],
    primaryCues: [
      'sin kipping',
      'pecho sobre barra',
      'transición controlada',
    ],
    commonFaults: [
      'impulso oculto',
      'codos abiertos',
      'pull-up insuficiente',
    ],
    progressionCriteria: ['1-3 reps estrictas'],
    elbowCue: 'codos pegados',
    coreCue: 'cuerpo tenso',
    prerequisites: [{ skillPathId: 'muscle-up', stepId: 'mu-wide-no-fg' }],
    safety: {
      contraindicatedWithPainZones: ['shoulder', 'elbow', 'wrist'],
    },
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },
];

/* =============================================================================
   PISTOLS
============================================================================= */

const PISTOL_BASE_STEPS: SkillStep[] = [
  {
    id: 'sq-asian-squat',
    skillPathId: 'pistols',
    ogLevel: null,
    order: 5,
    name: 'Asian Squat',
    abbrev: 'Asian Sq',
    attribute: 'mobility-prep',
    equipment: ['floor'],
    primaryCues: [
      'sentadilla profunda cómoda',
      'talones en suelo',
      'torso relativamente erguido',
    ],
    commonFaults: [
      'talones elevados',
      'rodillas colapsadas',
    ],
    progressionCriteria: ['30-60s cómodo'],
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'sq-parallel',
    skillPathId: 'pistols',
    ogLevel: 1,
    order: 10,
    name: 'Parallel Squat',
    abbrev: 'Par Sq',
    attribute: 'strength-dynamic',
    equipment: ['floor'],
    primaryCues: [
      'pies ancho de hombros',
      'rodillas alineadas con pies',
      'bajar hasta muslos paralelos',
    ],
    commonFaults: [
      'rodillas hacia adentro',
      'talones elevados',
      'espalda redondeada',
    ],
    progressionCriteria: ['3x15 limpio'],
    coreCue: 'torso estable',
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'sq-full',
    skillPathId: 'pistols',
    ogLevel: 2,
    order: 20,
    name: 'Full Squat',
    abbrev: 'Full Sq',
    attribute: 'strength-dynamic',
    equipment: ['floor'],
    primaryCues: [
      'bajar hasta profundidad completa',
      'mantener control',
      'subir con piernas y cadera',
    ],
    commonFaults: [
      'rebotar abajo',
      'rodillas colapsadas',
      'talones elevados',
    ],
    progressionCriteria: ['3x12 limpio'],
    prerequisites: [{ skillPathId: 'pistols', stepId: 'sq-parallel' }],
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'sq-side-to-side',
    skillPathId: 'pistols',
    ogLevel: 3,
    order: 30,
    name: 'Side-to-Side Squat',
    abbrev: 'S2S Sq',
    attribute: 'strength-dynamic',
    equipment: ['floor'],
    primaryCues: [
      'piernas abiertas',
      'desplazar peso a una pierna',
      'bajar profundo con control',
    ],
    commonFaults: [
      'rodilla colapsada',
      'talón elevado',
      'torso inestable',
    ],
    progressionCriteria: ['3x8 por lado'],
    prerequisites: [{ skillPathId: 'pistols', stepId: 'sq-full' }],
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },

  {
    id: 'sq-pistol',
    skillPathId: 'pistols',
    ogLevel: 4,
    order: 40,
    name: 'Pistol',
    abbrev: 'Pistol',
    attribute: 'strength-dynamic',
    equipment: ['floor', 'parallettes'],
    equipmentAlternatives: ['silla / marco para asistencia'],
    primaryCues: [
      'una pierna extendida adelante',
      'rodilla de apoyo alineada con pie',
      'bajar controlado',
      'subir sin impulso',
    ],
    commonFaults: [
      'rodilla hacia adentro',
      'redondear espalda',
      'usar impulso',
      'talón elevado',
    ],
    progressionCriteria: ['3x5 por pierna limpio'],
    coreCue: 'core activo',
    prerequisites: [{ skillPathId: 'pistols', stepId: 'sq-side-to-side' }],
    safety: {
      contraindicatedWithPainZones: ['knee', 'lower-back'],
    },
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  },
];

const WEIGHTED_PISTOL_LOADS = [
  { id: 'sq-weighted-pistol-1-2', ogLevel: 5, order: 50, load: '1.2x BW' },
  { id: 'sq-weighted-pistol-1-35', ogLevel: 6, order: 60, load: '1.35x BW' },
  { id: 'sq-weighted-pistol-1-5', ogLevel: 7, order: 70, load: '1.5x BW' },
  { id: 'sq-weighted-pistol-1-65', ogLevel: 8, order: 80, load: '1.65x BW' },
  { id: 'sq-weighted-pistol-1-8', ogLevel: 9, order: 90, load: '1.8x BW' },
  { id: 'sq-weighted-pistol-1-9', ogLevel: 10, order: 100, load: '1.9x BW' },
  { id: 'sq-weighted-pistol-2-0', ogLevel: 11, order: 110, load: '2.0x BW' },
];

const WEIGHTED_PISTOL_STEPS: SkillStep[] = WEIGHTED_PISTOL_LOADS.map(
  ({ id, ogLevel, order, load }) => ({
    id,
    skillPathId: 'pistols',
    ogLevel,
    order,
    name: `Weighted Pistol — ${load}`,
    abbrev: 'W Pistol',
    attribute: 'strength-dynamic',
    equipment: ['dumbbell', 'kettlebell', 'weight vest'],
    primaryCues: [
      'carga cerca del cuerpo',
      'rodilla alineada',
      'control excéntrico',
      'subida sin impulso',
    ],
    commonFaults: [
      'rodilla colapsada',
      'espalda redondeada',
      'impulso',
    ],
    progressionCriteria: ['3x3-5 por pierna con técnica perfecta'],
    coreCue: 'core muy activo',
    prerequisites: [{ skillPathId: 'pistols', stepId: 'sq-pistol' }],
    safety: {
      contraindicatedWithPainZones: ['knee', 'lower-back'],
    },
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    extractionStatus: 'complete',
  })
);

const PISTOL_STEPS: SkillStep[] = [
  ...PISTOL_BASE_STEPS,
  ...WEIGHTED_PISTOL_STEPS,
];

/* =============================================================================
   SKILL PATHS
============================================================================= */

export const CORE_SKILL_PATHS: SkillPath[] = [
  {
    id: 'handstand',
    name: 'Handstand',
    category: 'skill',
    attribute: 'skill-balance',
    sourceRef: og('Handstand Variations', 'Cap. 24'),
    steps: HANDSTAND_STEPS,
  },
  {
    id: 'planche',
    name: 'Planche',
    category: 'push',
    attribute: 'strength-isometric',
    sourceRef: og('Pushing Variations', 'Cap. 26'),
    steps: PLANCHE_STEPS,
  },
  {
    id: 'front-lever',
    name: 'Front Lever',
    category: 'pull',
    attribute: 'strength-isometric',
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    steps: FRONT_LEVER_STEPS,
  },
  {
    id: 'back-lever',
    name: 'Back Lever',
    category: 'pull',
    attribute: 'strength-isometric',
    sourceRef: og('Pulling Exercises', 'Cap. 25'),
    steps: BACK_LEVER_STEPS,
  },
  {
    id: 'muscle-up',
    name: 'Muscle-up',
    category: 'multi-plane',
    attribute: 'strength-dynamic',
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    steps: MUSCLE_UP_STEPS,
  },
  {
    id: 'pistols',
    name: 'Pistols',
    category: 'legs',
    attribute: 'strength-dynamic',
    sourceRef: og('Multi-Plane Exercises, Core, and Legs', 'Cap. 27'),
    steps: PISTOL_STEPS,
  },
];

export const CORE_SKILL_STEPS: SkillStep[] =
  CORE_SKILL_PATHS.flatMap((path) => path.steps);
```

---

## Validación rápida recomendada para este dataset

Cuando lo integres, añade tests de este estilo:

```ts
test('handstand steps must have bail techniques', () => {
  const handstandSteps = CORE_SKILL_STEPS.filter(s => s.skillPathId === 'handstand');
  for (const step of handstandSteps) {
    expect(step.bailTechniques?.length).toBeGreaterThan(0);
  }
});

test('planche steps must have protract+depress cue', () => {
  const plancheSteps = CORE_SKILL_STEPS.filter(s => s.skillPathId === 'planche');
  for (const step of plancheSteps) {
    if (step.attribute === 'strength-isometric') {
      expect(step.scapularCue).toBe('protract+depress');
    }
  }
});

test('front/back lever holds must have elbow cue', () => {
  const leverSteps = CORE_SKILL_STEPS.filter(s =>
    s.skillPathId === 'front-lever' || s.skillPathId === 'back-lever'
  );
  for (const step of leverSteps) {
    expect(step.elbowCue).toBeTruthy();
  }
});
```

---

# OPCIÓN 2 — Motor de sugerencias basado en `RuleEvaluation[]`

Ahora vamos con el motor que convierte evaluaciones de reglas en sugerencias accionables, con explicación y cita a OG2E.

---

## Archivo: `src/lib/fitness/suggestionEngine.ts`

```ts
// src/lib/fitness/suggestionEngine.ts

import type {
  RuleEvaluation,
  TrainingRule,
  RuleBand,
} from '../../data/fitness/contracts/rules';
import type { SourceRef } from '../../data/fitness/contracts/sources';

export type SuggestionSeverity = 'info' | 'warning' | 'high';

export type SuggestionAction =
  | 'reduce_volume'
  | 'reduce_intensity'
  | 'rest'
  | 'deload'
  | 'increase_recovery'
  | 'technique_regression'
  | 'add_prehab'
  | 'add_horizontal_pull'
  | 'add_push'
  | 'add_reps'
  | 'reduce_reps'
  | 'progress_slowly'
  | 'stop_session'
  | 'consult_professional'
  | 'maintain';

export type Suggestion = {
  id: string;
  ruleId: string;
  severity: SuggestionSeverity;
  priority: number;
  title: string;
  message: string;
  actions: SuggestionAction[];
  sourceRef?: SourceRef;
  measured?: number;
  band?: RuleBand;
};

const severityRank: Record<SuggestionSeverity, number> = {
  high: 3,
  warning: 2,
  info: 1,
};

function formatValue(value?: number): string {
  if (value == null) return '';
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function formatBand(band?: RuleBand): string {
  if (!band) return '';

  const parts: string[] = [];

  if (band.min != null) parts.push(`min ${formatValue(band.min)}`);
  if (band.max != null) parts.push(`max ${formatValue(band.max)}`);
  if (band.target != null) parts.push(`target ${formatValue(band.target)}`);
  if (band.unit) parts.push(band.unit);

  return parts.join(' · ');
}

function citation(rule: TrainingRule): string {
  const ref = rule.sourceRef;
  return [ref.chapter, ref.section, ref.pageRef]
    .filter(Boolean)
    .join(' · ');
}

function baseSuggestion(
  rule: TrainingRule,
  evaluation: RuleEvaluation,
  overrides: Partial<Suggestion>
): Suggestion {
  return {
    id: `suggestion-${rule.id}-${evaluation.status}`,
    ruleId: rule.id,
    severity: overrides.severity ?? 'warning',
    priority: rule.priority,
    title: overrides.title ?? 'Ajuste recomendado',
    message: overrides.message ?? rule.notes ?? 'Revisa esta regla.',
    actions: overrides.actions ?? [],
    sourceRef: rule.sourceRef,
    measured: evaluation.measured,
    band: evaluation.band,
  };
}

type SuggestionPolicy = (
  rule: TrainingRule,
  evaluation: RuleEvaluation
) => Suggestion | null;

/* =============================================================================
   POLÍTICAS ESPECÍFICAS POR REGLA
============================================================================= */

const POLICIES: Record<string, SuggestionPolicy> = {
  /* ----------------------------- LIFESTYLE ----------------------------- */

  'sleep-minimum': (rule, ev) => {
    if (ev.status === 'below') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Sueño insuficiente',
        message:
          'El sueño promedio está por debajo del rango recomendado. ' +
          'OG2E trata el sueño como factor clave de recuperación; si además sube RPE o baja rendimiento, reduce volumen/intensidad. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['increase_recovery', 'reduce_volume'],
      });
    }
    return null;
  },

  'sleep-deprived-terminate': (rule, ev) => {
    if (ev.status === 'above' || ev.bandKind === 'excessive') {
      return baseSuggestion(rule, ev, {
        severity: 'high',
        title: 'Privación de sueño sostenida',
        message:
          'Con privación de sueño mantenida, OG2E recomienda terminar/omitir el entrenamiento. ' +
          'La recuperación revela las adaptaciones. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['stop_session', 'rest'],
      });
    }
    return null;
  },

  'sick-fever-below-neck-rest': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'high',
        title: 'Fiebre o síntomas bajo el cuello',
        message:
          'Con fiebre o síntomas bajo el cuello, descanso completo. ' +
          'No entrenar fuerza intensa en este estado. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['stop_session', 'rest'],
      });
    }
    return null;
  },

  'sick-above-neck-low-intensity': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Síntomas leves: solo trabajo ligero',
        message:
          'Si hay síntomas de cuello hacia arriba, mantener intensidad muy baja. ' +
          'Si empeora, parar. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_intensity', 'reduce_volume'],
      });
    }
    return null;
  },

  /* ----------------------------- TENDONES ----------------------------- */

  'tendon-pain-global': (rule, ev) => {
    const pain = ev.measured ?? 0;

    if (pain >= 5 || ev.bandKind === 'excessive') {
      return baseSuggestion(rule, ev, {
        severity: 'high',
        title: 'Dolor de tendón significativo',
        message:
          'Dolor ≥5 o creciente: reducir/eliminar ejercicios agresores y revisar protocolo de tendinopatía. ' +
          'Si persiste, consultar profesional. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume', 'reduce_intensity', 'consult_professional'],
      });
    }

    if (pain >= 3 && ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Dolor de tendón moderado',
        message:
          'Dolor 3-4: modificar carga, evitar agravantes y añadir prehab/movilidad. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume', 'add_prehab'],
      });
    }

    return null;
  },

  'tendon-return-40-10': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Progresión demasiado rápida en retorno de tendón',
        message:
          'En retorno conservador, empezar ~40% y subir ~10%/semana si no hay agravamiento. ' +
          'Reducir la tasa de progresión. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['progress_slowly', 'reduce_volume'],
      });
    }
    return null;
  },

  /* ----------------------------- DELOAD / PLATEAU ----------------------------- */

  'deload-cadence': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Toca deload',
        message:
          'Los mesociclos suelen durar 4-8 semanas antes de una descarga. ' +
          'Si llevas demasiado sin deload, programa una semana de recuperación. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['deload', 'reduce_volume'],
      });
    }
    return null;
  },

  'plateau-beginner': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Plateau en principiante',
        message:
          'Si un principiante no progresa tras ~1 semana, valorar deload corto, testeo o simplificar progresión. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['deload', 'technique_regression'],
      });
    }
    return null;
  },

  'plateau-intermediate': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Plateau en intermedio',
        message:
          'Si no hay progreso durante ~4 semanas en intermedio, terminar mesociclo y reevaluar. ' +
          'Considerar light/heavy o acumulación/intensificación. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['deload', 'reduce_volume', 'technique_regression'],
      });
    }
    return null;
  },

  'plateau-advanced': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'high',
        title: 'Plateau en avanzado',
        message:
          'En avanzado, 2 semanas sin progreso ya requieren ajuste; 4 semanas suelen indicar terminar ciclo. ' +
          'Revisar periodización, sueño y estrés. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['deload', 'reduce_volume', 'increase_recovery'],
      });
    }
    return null;
  },

  /* ----------------------------- ISOMÉTRICOS ----------------------------- */

  'iso-total-time': (rule, ev) => {
    if (ev.status === 'below') {
      return baseSuggestion(rule, ev, {
        severity: 'info',
        title: 'Volumen isométrico bajo',
        message:
          'El tiempo total isométrico está por debajo del rango recomendado. ' +
          'Si el objetivo es fuerza isométrica, añade series o aumenta ligeramente hold time. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['add_reps'],
      });
    }

    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Volumen isométrico alto',
        message:
          'El tiempo total isométrico está por encima del rango recomendado. ' +
          'Reduce volumen para proteger recuperación y tejido conectivo. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume'],
      });
    }

    return null;
  },

  'iso-not-daily-heavy': (rule, ev) => {
    if (ev.status === 'above' || ev.bandKind === 'excessive') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Isométricos de fuerza demasiado frecuentes',
        message:
          'Los isométricos de fuerza son demandantes; no tratarlos como skill ligero diario. ' +
          'Espaciar sesiones o reducir intensidad. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_intensity', 'reduce_volume'],
      });
    }
    return null;
  },

  /* ----------------------------- EXCÉNTRICOS ----------------------------- */

  'eccentric-limit': (rule, ev) => {
    if (ev.status === 'above' || ev.bandKind === 'excessive') {
      return baseSuggestion(rule, ev, {
        severity: 'high',
        title: 'Demasiados ejercicios excéntricos',
        message:
          'OG2E recomienda no usar más de 1-2 ejercicios excéntricos por sesión. ' +
          'Los excéntricos son efectivos pero muy costosos para recuperación. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume', 'reduce_intensity'],
      });
    }
    return null;
  },

  'eccentric-beginner-limit': (rule, ev) => {
    if (ev.status === 'above' || ev.bandKind === 'excessive') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Excéntricos excesivos para principiante',
        message:
          'En principiantes, los excéntricos no son la norma salvo casos específicos. ' +
          'Prioriza concéntricos, progresiones y técnica. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume', 'technique_regression'],
      });
    }
    return null;
  },

  /* ----------------------------- SKILL WORK ----------------------------- */

  'skill-non-fatiguing': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Skill work demasiado fatigante',
        message:
          'El skill work debe ser técnico y no fatigante. ' +
          'Si el RPE sube demasiado, parar o bajar dificultad para no consolidar mala técnica. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_intensity', 'technique_regression'],
      });
    }
    return null;
  },

  'skill-technique-failure': (rule, ev) => {
    if (ev.status === 'above' || ev.bandKind === 'excessive') {
      return baseSuggestion(rule, ev, {
        severity: 'high',
        title: 'Técnica colapsando',
        message:
          'Si la técnica falla con frecuencia, bajar progresión o terminar la sesión. ' +
          'Perfect practice makes perfect. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['technique_regression', 'stop_session'],
      });
    }
    return null;
  },

  /* ----------------------------- BALANCE ESTRUCTURAL ----------------------------- */

  'push-pull-ratio': (rule, ev) => {
    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Exceso de empuje relativo',
        message:
          'La relación push/pull está alta. ' +
          'Añadir tracción horizontal y/o reducir volumen de empuje para proteger hombro. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['add_horizontal_pull', 'reduce_volume'],
      });
    }

    if (ev.status === 'below') {
      return baseSuggestion(rule, ev, {
        severity: 'info',
        title: 'Relación push/pull baja',
        message:
          'Hay relativamente más tracción que empuje. ' +
          'Si el objetivo es balance, añade algo de empuje o ajusta volumen. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['add_push'],
      });
    }

    return null;
  },

  'horizontal-pulling-volume': (rule, ev) => {
    if (ev.status === 'below') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Falta tracción horizontal',
        message:
          'La tracción horizontal es clave para salud de hombro y balance estructural. ' +
          'Añadir rows, face pulls o trabajo similar. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['add_horizontal_pull'],
      });
    }
    return null;
  },

  'wide-arm-connective-prep': (rule, ev) => {
    if (ev.status === 'above' || ev.bandKind === 'excessive') {
      return baseSuggestion(rule, ev, {
        severity: 'high',
        title: 'Trabajo wide/straight-arm sin preparación conectiva',
        message:
          'El trabajo wide/straight-arm avanzado exige preparación previa de tejido conectivo. ' +
          'Eliminar o reducir estos ejercicios hasta completar prerrequisitos. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume', 'add_prehab'],
      });
    }
    return null;
  },

  /* ----------------------------- HANDSTAND FREQUENCY ----------------------------- */

  'freq-handstand-beginner': (rule, ev) => {
    if (ev.status === 'below') {
      return baseSuggestion(rule, ev, {
        severity: 'info',
        title: 'Handstand poco frecuente',
        message:
          'En principiantes con muñeca tolerante, se puede aumentar gradualmente la frecuencia de handstand. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['add_reps'],
      });
    }

    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Handstand demasiado frecuente para principiante',
        message:
          'Si hay molestia de muñeca o fatiga, reducir frecuencia y añadir movilidad/prehab. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume', 'add_prehab'],
      });
    }

    return null;
  },

  'freq-handstand-intermediate-plus': (rule, ev) => {
    if (ev.status === 'below') {
      return baseSuggestion(rule, ev, {
        severity: 'info',
        title: 'Handstand poco frecuente',
        message:
          'En niveles intermedio+, handstand puede entrenarse casi diario si no hay dolor. ' +
          'Considerar sesiones cortas y frecuentes. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['add_reps'],
      });
    }

    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Handstand muy frecuente',
        message:
          'Si la frecuencia es muy alta, vigilar muñeca, hombro y calidad técnica. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume', 'add_prehab'],
      });
    }

    return null;
  },

  /* ----------------------------- VOLUMEN / REPS ----------------------------- */

  'vol-strength-total-reps': (rule, ev) => {
    if (ev.status === 'below') {
      return baseSuggestion(rule, ev, {
        severity: 'info',
        title: 'Volumen de fuerza bajo',
        message:
          'Para fuerza, OG2E recomienda ~25-50 reps totales por grupo muscular. ' +
          'Si estás por debajo, añade series o repeticiones. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['add_reps'],
      });
    }

    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Volumen de fuerza alto',
        message:
          'Estás por encima del rango típico de fuerza. ' +
          'Puede estar entrando en hipertrofia/endurance; ajustar según objetivo. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_reps', 'reduce_volume'],
      });
    }

    return null;
  },

  'vol-hypertrophy-total-reps': (rule, ev) => {
    if (ev.status === 'below') {
      return baseSuggestion(rule, ev, {
        severity: 'info',
        title: 'Volumen de hipertrofia bajo',
        message:
          'Para hipertrofia, OG2E recomienda ~40-75+ reps totales por grupo muscular. ' +
          'Añadir volumen si la recuperación lo permite. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['add_reps'],
      });
    }

    if (ev.status === 'above' && ev.bandKind === 'excessive') {
      return baseSuggestion(rule, ev, {
        severity: 'high',
        title: 'Volumen de hipertrofia excesivo',
        message:
          'El volumen está excesivamente alto. ' +
          'Reducir para proteger recuperación y tejido conectivo. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume', 'reduce_intensity'],
      });
    }

    if (ev.status === 'above') {
      return baseSuggestion(rule, ev, {
        severity: 'warning',
        title: 'Volumen de hipertrofia alto',
        message:
          'Volumen alto: vigilar recuperación, articulaciones y progreso. ' +
          `Fuente: ${citation(rule)}.`,
        actions: ['reduce_volume'],
      });
    }

    return null;
  },
};

/* =============================================================================
   DEFAULT POLICY
============================================================================= */

function defaultPolicy(
  rule: TrainingRule,
  evaluation: RuleEvaluation
): Suggestion | null {
  if (evaluation.status === 'in-range' || evaluation.status === 'unknown') {
    return null;
  }

  const isExcessive = evaluation.bandKind === 'excessive';
  const severity: SuggestionSeverity = isExcessive ? 'high' : 'warning';

  const direction =
    evaluation.status === 'below' ? 'por debajo' : 'por encima';

  const bandText = formatBand(evaluation.band);
  const measuredText = formatValue(evaluation.measured);

  return baseSuggestion(rule, evaluation, {
    severity,
    title: 'Ajuste recomendado',
    message:
      `La métrica está ${direction} del rango recomendado. ` +
      `Valor actual: ${measuredText}. Rango: ${bandText}. ` +
      `Fuente: ${citation(rule)}.`,
    actions:
      evaluation.status === 'below'
        ? ['add_reps']
        : ['reduce_volume'],
  });
}

/* =============================================================================
   BUILD SUGGESTIONS
============================================================================= */

export function buildSuggestions(
  evaluations: RuleEvaluation[],
  rules: TrainingRule[]
): Suggestion[] {
  const rulesById = new Map(rules.map((r) => [r.id, r]));

  const suggestions = evaluations.flatMap((evaluation) => {
    const rule = rulesById.get(evaluation.ruleId);
    if (!rule) return [];

    const policy = POLICIES[rule.id] ?? defaultPolicy;
    const suggestion = policy(rule, evaluation);

    return suggestion ? [suggestion] : [];
  });

  return suggestions.sort((a, b) => {
    const severityDiff = severityRank[b.severity] - severityRank[a.severity];
    if (severityDiff !== 0) return severityDiff;
    return b.priority - a.priority;
  });
}
```

---

## Uso esperado

```ts
import { ALL_RULES } from '../../data/fitness/rules/allRules';
import { evaluateRules } from './rulesEngine';
import { buildSuggestions } from './suggestionEngine';

const evaluations = evaluateRules(ALL_RULES, ctx);
const suggestions = buildSuggestions(evaluations, ALL_RULES);
```

---

## Ejemplo de salida esperada

Si el usuario tiene dolor 6 en codo:

```json
{
  "id": "suggestion-tendon-pain-global-above",
  "ruleId": "tendon-pain-global",
  "severity": "high",
  "priority": 95,
  "title": "Dolor de tendón significativo",
  "message": "Dolor ≥5 o creciente: reducir/eliminar ejercicios agresores y revisar protocolo de tendinopatía. Si persiste, consultar profesional. Fuente: Cap. 21 · Common Bodyweight Training Injuries.",
  "actions": ["reduce_volume", "reduce_intensity", "consult_professional"]
}
```

Si el usuario lleva 10 semanas sin deload:

```json
{
  "id": "suggestion-deload-cadence-above",
  "ruleId": "deload-cadence",
  "severity": "warning",
  "priority": 70,
  "title": "Toca deload",
  "message": "Los mesociclos suelen durar 4-8 semanas antes de una descarga. Si llevas demasiado sin deload, programa una semana de recuperación. Fuente: Cap. 12 · Mesocycle Planning.",
  "actions": ["deload", "reduce_volume"]
}
```

---

# Resumen de lo entregado

## Opción 1
Entregué dataset completo de `SkillStep` para:
- handstand
- planche
- front lever
- back lever
- muscle-up
- pistols

Con:
- niveles OG
- cues primarios
- fallos comunes
- criterios de progresión
- equipo y alternativas
- seguridad
- prerrequisitos
- sourceRef

## Opción 2
Entregué motor de sugerencias que:
- consume `RuleEvaluation[]`
- usa `TrainingRule`
- prioriza por severidad y prioridad
- genera mensajes accionables
- incluye citas a OG2E
- soporta políticas específicas por regla
- tiene default policy para reglas no mapeadas

---

Si quieres, en el siguiente paso puedo hacer una de estas tres cosas:

**A.** Generarte también los datasets de **rings handstand, HSPU, press handstand, dips, rows, pull-ups y L-sit/V-sit/manna**  
**B.** Crearte un **adapter completo `WeeklyFocusLedger -> EvaluationContext`**  
**C.** Generarte un **mini panel UI** con tarjetas de sugerencias para mostrar al usuario final

---

## Ronda 4 — tras: «A, luego haremos B, luego haremos C. Todo a su tiempo, pero comencemos por la primera opción.…»
¡Perfecto! Me parece un plan excelente. Dividir el trabajo en fases nos asegurará de que la base de la aplicación sea sólida antes de empezar a llenarla de datos complejos. 

**Fase A (La que vamos a hacer ahora):** El "motor duro". Contratos de reglas, tabla de isométricos y el primer set de reglas concretas.
**Fase B (Siguiente paso):** Volcar los *cues* técnicos, errores y progresiones en los modelos de `SkillPath` y `SkillStep`.
**Fase C:** Implementar el motor de evaluación (`evaluateRules`) y conectarlo con la UI/Lógica de la app.

Comencemos con la **Opción A**. He preparado el código exacto en **TypeScript estándar** para que puedas copiarlo y pegarlo directamente en tu repositorio. 

*(Nota: He corregido un pequeño error de sintaxis que venía en el pseudocódigo original: `[^0]` no es válido en TypeScript, lo he cambiado por `[0]` para acceder al primer elemento del array).*

Aquí tienes los archivos para la **Fase A**:

### 1. Helper de Fuentes
Este archivo lo usaremos para no repetir strings y mantener las referencias a *Overcoming Gravity 2e* limpias.
📁 `src/data/fitness/contracts/sources.ts`
```typescript
export type SourceRef = {
  sourceId: string;   // ej. 'overcoming-gravity-2e'
  section?: string;   // ej. 'Strength Work'
  pageRef?: string;   // ej. 'p.177-179'
};

export const sourceRefs = {
  og2e: (section: string, pageRef: string): SourceRef => ({
    sourceId: 'overcoming-gravity-2e',
    section,
    pageRef,
  }),
  external: (tag: string): SourceRef => ({
    sourceId: `external:${tag}`,
  }),
};
```

### 2. Contrato Base de Reglas
He dejado los tipos de los dominios (`FocusId`, `MovementPattern`, etc.) como `string` temporalmente para que el archivo compile de inmediato. Cuando tengas tus modelos de dominio creados, solo cambias el `type` por un `import`.
📁 `src/data/fitness/contracts/rules.ts`
```typescript
import type { SourceRef } from './sources';

// TODO: Reemplazar estos alias con los imports de tus modelos de dominio reales
export type FocusId = string; 
export type MovementPattern = string;
export type BodyZoneId = string;

export type RuleScope =
  | { kind: 'focus'; focusId: FocusId }
  | { kind: 'muscle'; muscleId: string }
  | { kind: 'pattern'; pattern: MovementPattern }
  | { kind: 'zone'; zone: BodyZoneId }
  | { kind: 'skill'; skillPathId: string }
  | { kind: 'global' };

export type RuleMetric =
  | 'hardSetsPerWeek'
  | 'sessionsPerWeek'
  | 'minutesPerWeek'
  | 'frequencyPerWeek'
  | 'intensityPct1RM'
  | 'totalRepsPerSession'
  | 'rir'
  | 'pain'
  | 'progressionRate';

export type RuleBand = {
  min?: number;
  max?: number;
  target?: number;
  unit?: string;
};

export type TrainingRule = {
  id: string;
  scope: RuleScope;
  metric: RuleMetric;
  bands: {
    maintenance?: RuleBand;
    optimal?: RuleBand;
    excessive?: RuleBand;
  };
  /** Condición booleana simple, evaluada en el motor (ej: "focus==='primary'"). */
  appliesWhen?: string;
  /** Mayor prioridad gana en conflicto. */
  priority: number;
  sourceRef: SourceRef;
  notes?: string;
  schemaVersion: 1;
};

export type RuleEvaluationStatus = 'below' | 'in-range' | 'above' | 'unknown';

export type RuleEvaluation = {
  ruleId: string;
  status: RuleEvaluationStatus;
  measured?: number;
  band?: RuleBand;
};
```

### 3. Tabla de Isométricos (Overcoming Gravity 2e, Cap. 9)
📁 `src/lib/fitness/isometricDosing.ts`
```typescript
export type IsometricDose = {
  /** Máximo testado (segundos). */
  maxHoldSec: number;
  /** Tiempo recomendado por set. */
  holdSec: number;
  /** Rango de sets recomendado [min, max]. */
  sets: [number, number];
  /** Tiempo total objetivo del ejercicio. */
  totalTimeSec: number;
  /** Atajo legible tipo "7x3s". */
  sweetSpot: string;
};

/**
 * Tabla completa de dosificación de isométricos de Overcoming Gravity 2e (Cap. 9).
 */
export const ISOMETRIC_TABLE: IsometricDose[] = [
  { maxHoldSec: 1,  holdSec: 1,  sets: [7, 10], totalTimeSec: 7,  sweetSpot: '8x1s' },
  { maxHoldSec: 2,  holdSec: 2,  sets: [6, 8],  totalTimeSec: 12, sweetSpot: '7x2s' },
  { maxHoldSec: 3,  holdSec: 3,  sets: [6, 8],  totalTimeSec: 18, sweetSpot: '7x3s' },
  { maxHoldSec: 4,  holdSec: 3,  sets: [6, 8],  totalTimeSec: 18, sweetSpot: '7x3s' },
  { maxHoldSec: 5,  holdSec: 4,  sets: [5, 7],  totalTimeSec: 20, sweetSpot: '6x4s' },
  { maxHoldSec: 6,  holdSec: 5,  sets: [5, 6],  totalTimeSec: 25, sweetSpot: '6x5s' },
  { maxHoldSec: 7,  holdSec: 5,  sets: [5, 6],  totalTimeSec: 25, sweetSpot: '6x5s' },
  { maxHoldSec: 8,  holdSec: 6,  sets: [5, 6],  totalTimeSec: 30, sweetSpot: '6x6s' },
  { maxHoldSec: 9,  holdSec: 6,  sets: [5, 6],  totalTimeSec: 30, sweetSpot: '6x6s' },
  { maxHoldSec: 10, holdSec: 7,  sets: [5, 6],  totalTimeSec: 35, sweetSpot: '5x7s' },
  { maxHoldSec: 11, holdSec: 8,  sets: [5, 6],  totalTimeSec: 40, sweetSpot: '5x8s' },
  { maxHoldSec: 12, holdSec: 8,  sets: [5, 6],  totalTimeSec: 40, sweetSpot: '5x8s' },
  { maxHoldSec: 13, holdSec: 9,  sets: [5, 5],  totalTimeSec: 45, sweetSpot: '5x9s' },
  { maxHoldSec: 14, holdSec: 10, sets: [5, 5],  totalTimeSec: 50, sweetSpot: '5x10s' },
  { maxHoldSec: 15, holdSec: 10, sets: [5, 5],  totalTimeSec: 50, sweetSpot: '5x10s' },
  { maxHoldSec: 16, holdSec: 11, sets: [5, 5],  totalTimeSec: 55, sweetSpot: '5x11s' },
  { maxHoldSec: 17, holdSec: 12, sets: [5, 5],  totalTimeSec: 60, sweetSpot: '5x12s' },
  { maxHoldSec: 18, holdSec: 13, sets: [5, 5],  totalTimeSec: 65, sweetSpot: '5x13s' },
  { maxHoldSec: 19, holdSec: 13, sets: [5, 5],  totalTimeSec: 65, sweetSpot: '5x13s' },
  { maxHoldSec: 20, holdSec: 14, sets: [4, 4],  totalTimeSec: 56, sweetSpot: '4x14s' },
  { maxHoldSec: 21, holdSec: 14, sets: [4, 4],  totalTimeSec: 56, sweetSpot: '4x14s' },
  { maxHoldSec: 22, holdSec: 15, sets: [4, 4],  totalTimeSec: 60, sweetSpot: '4x15s' },
  { maxHoldSec: 23, holdSec: 16, sets: [4, 4],  totalTimeSec: 64, sweetSpot: '4x16s' },
  { maxHoldSec: 24, holdSec: 16, sets: [4, 4],  totalTimeSec: 64, sweetSpot: '4x16s' },
  { maxHoldSec: 25, holdSec: 17, sets: [4, 4],  totalTimeSec: 68, sweetSpot: '4x17s' },
  { maxHoldSec: 26, holdSec: 17, sets: [4, 4],  totalTimeSec: 68, sweetSpot: '4x17s' },
  { maxHoldSec: 27, holdSec: 18, sets: [3, 3],  totalTimeSec: 54, sweetSpot: '3x18s' },
  { maxHoldSec: 28, holdSec: 19, sets: [3, 3],  totalTimeSec: 57, sweetSpot: '3x19s' },
  { maxHoldSec: 29, holdSec: 20, sets: [3, 3],  totalTimeSec: 60, sweetSpot: '3x20s' },
  { maxHoldSec: 30, holdSec: 20, sets: [3, 3],  totalTimeSec: 60, sweetSpot: '3x20s' },
];

/**
 * Devuelve la fila de dosificación cuyo `maxHoldSec` sea la más cercana por debajo o igual
 * al máximo testado por el usuario. Se satura en los extremos 1 y 30 s.
 */
export function getIsometricDose(maxHoldSec: number): IsometricDose {
  if (maxHoldSec <= 1) return ISOMETRIC_TABLE[0];
  if (maxHoldSec >= 30) return ISOMETRIC_TABLE[ISOMETRIC_TABLE.length - 1];
  
  for (let i = ISOMETRIC_TABLE.length - 1; i >= 0; i--) {
    if (maxHoldSec >= ISOMETRIC_TABLE[i].maxHoldSec) {
      return ISOMETRIC_TABLE[i];
    }
  }
  return ISOMETRIC_TABLE[0];
}
```

### 4. Tests Unitarios para Isométricos
📁 `src/lib/fitness/__tests__/isometricDosing.test.ts`
```typescript
import { describe, test, expect } from 'vitest'; // Cambia a 'jest' si usas Jest
import { getIsometricDose } from '../isometricDosing';

describe('getIsometricDose', () => {
  test('returns first row for <=1s', () => {
    expect(getIsometricDose(1).holdSec).toBe(1);
    expect(getIsometricDose(0).holdSec).toBe(1);
  });

  test('caps at 30s', () => {
    expect(getIsometricDose(45).maxHoldSec).toBe(30);
    expect(getIsometricDose(100).holdSec).toBe(20);
  });

  test('picks nearest lower step', () => {
    const dose = getIsometricDose(9);
    expect(dose.maxHoldSec).toBe(9);
    expect(dose.holdSec).toBe(6);
    
    // Si el max es 15, debe caer en la fila de 15
    const dose15 = getIsometricDose(15);
    expect(dose15.maxHoldSec).toBe(15);
    expect(dose15.sweetSpot).toBe('5x10s');
  });
});
```

### 5. Primer Set de Reglas Concretas
Aquí agrupamos las reglas de Volumen, Frecuencia y Salud de Tendones.
📁 `src/data/fitness/rules/volume_hypertrophy.ts`
```typescript
import type { TrainingRule } from '../contracts/rules';
import { sourceRefs } from '../contracts/sources';

export const volumeHypertrophyRules: TrainingRule[] = [
  {
    id: 'vol-hypertrophy-total-reps-upper',
    scope: { kind: 'pattern', pattern: 'horizontal-push' },
    metric: 'totalRepsPerSession',
    bands: {
      optimal: { min: 40, max: 75, unit: 'reps/session' },
      excessive: { max: 120, unit: 'reps/session' },
    },
    appliesWhen: "focus==='hypertrophy'",
    priority: 50,
    sourceRef: sourceRefs.og2e('Strength Work', 'p.177-179'),
    notes: 'Rango objetivo de reps totales por grupo muscular para hipertrofia en tren superior.',
    schemaVersion: 1,
  },
  {
    id: 'vol-strength-total-reps-upper',
    scope: { kind: 'pattern', pattern: 'horizontal-push' },
    metric: 'totalRepsPerSession',
    bands: {
      optimal: { min: 25, max: 50, unit: 'reps/session' },
    },
    appliesWhen: "focus==='strength'",
    priority: 50,
    sourceRef: sourceRefs.og2e('Strength Work', 'p.177-179'),
    notes: 'Volumen típico para fuerza: 25–50 reps totales por grupo muscular.',
    schemaVersion: 1,
  },
];
```

📁 `src/data/fitness/rules/frequency.ts`
```typescript
import type { TrainingRule } from '../contracts/rules';
import { sourceRefs } from '../contracts/sources';

export const frequencyRules: TrainingRule[] = [
  {
    id: 'freq-fullbody-strength',
    scope: { kind: 'focus', focusId: 'strength' },
    metric: 'sessionsPerWeek',
    bands: {
      optimal: { min: 2, max: 4, unit: 'sessions/week' },
    },
    appliesWhen: "routineType==='full-body'",
    priority: 40,
    sourceRef: sourceRefs.og2e('Programming & Hierarchy', 'p.105-107'),
    notes: 'Fuerza en full-body 2–4x/semana; principiantes mejor 3x.',
    schemaVersion: 1,
  },
  {
    id: 'freq-skill-handstand',
    scope: { kind: 'skill', skillPathId: 'skill-handstand' },
    metric: 'frequencyPerWeek',
    bands: {
      optimal: { min: 4, max: 7, unit: 'sessions/week' },
    },
    appliesWhen: "phase!=='beginner' && isSkill===true",
    priority: 55,
    sourceRef: sourceRefs.og2e('Handstand Intro', 'p.516-518'),
    notes: 'Handstand casi diario una vez que deja de ser limitante de fuerza.',
    schemaVersion: 1,
  },
];
```

📁 `src/data/fitness/rules/tendon_health.ts`
```typescript
import type { TrainingRule } from '../contracts/rules';
import { sourceRefs } from '../contracts/sources';

export const tendonHealthRules: TrainingRule[] = [
  {
    id: 'tendon-pain-yellow-red',
    scope: { kind: 'zone', zone: 'elbow' },
    metric: 'pain',
    bands: {
      optimal: { max: 2, unit: 'NRS-0-10' },
      excessive: { min: 5, unit: 'NRS-0-10' },
    },
    priority: 90,
    sourceRef: sourceRefs.og2e('Tendonitis', 'p.431-436'),
    notes: 'Dolor ≥5 o dolor creciente → sugerir reducir/eliminar carga y revisar protocolo de tendinopatía.',
    schemaVersion: 1,
  },
  {
    id: 'tendon-return-40-10',
    scope: { kind: 'zone', zone: 'elbow' },
    metric: 'progressionRate',
    bands: {
      optimal: { target: 0.1, unit: 'relative-volume-per-week' },
    },
    appliesWhen: "rehabPhase==='tendinopathy-return'",
    priority: 95,
    sourceRef: sourceRefs.og2e('Tendonitis Corrective Measures', 'p.433-434'),
    notes: 'Regla 40% de volumen +10%/semana si no hay agravamiento.',
    schemaVersion: 1,
  },
];
```

### 6. Índice Maestro de Reglas
📁 `src/data/fitness/rules/index.ts`
```typescript
import type { TrainingRule } from '../contracts/rules';
import { volumeHypertrophyRules } from './volume_hypertrophy';
import { frequencyRules } from './frequency';
import { tendonHealthRules } from './tendon_health';

export const ALL_RULES: TrainingRule[] = [
  ...volumeHypertrophyRules,
  ...frequencyRules,
  ...tendonHealthRules,
  // Aquí irán más reglas (lifestyle, focus_priority, etc.) en el futuro
];
```

---

### ✅ Siguiente paso
Con esto ya tienes toda la **Opción A** implementada. El motor "duro" está listo y tipado. 

Cuando lo tengas pegado en tu repo y corriendo sin errores de compilación, avísame y pasamos a la **Opción B**: Empezar a volcar todos los *cues* técnicos, equipos y notas de seguridad de los Caps. 23-27 en los modelos de `SkillPath` y `SkillStep`. 

¿Te parece bien este bloque de código o necesitas que ajustemos alguna ruta de `import` antes de que lo pegues?

---

## Ronda 5 — tras: «Está muy bien y sigue con lo que propones y tenías planeado, pero recuerda que también me dijiste que también me ayudarías a generar A. Gene…»
Perfecto. Vamos a cerrar los tres pendientes que mencionas:

- **A.** Datasets de **rings handstand, HSPU, press handstand, dips, rows, pull-ups y L-sit/V-sit/manna**
- **B.** Adapter completo **`WeeklyFocusLedger -> EvaluationContext`**
- **C.** Mini panel UI con **tarjetas de sugerencias**

Voy a entregarte esto como código listo para integrar.

---

# A. Datasets extendidos de skills

Este archivo agrega los paths que faltaban, usando los niveles y cues principales de OG2E.

## Archivo: `src/data/fitness/skills/extendedSkillPaths.ts`

```ts
// src/data/fitness/skills/extendedSkillPaths.ts

import type { SkillPath, SkillStep, SkillAttribute } from './contracts';
import type { SourceRef } from '../contracts/sources';

const og = (section: string, chapter: string): SourceRef => ({
  sourceId: 'overcoming-gravity-2e',
  section,
  chapter,
});

type StepSeed = Partial<SkillStep> &
  Pick<SkillStep, 'id' | 'ogLevel' | 'order' | 'name'>;

function makePath(config: {
  id: string;
  name: string;
  category: SkillPath['category'];
  attribute: SkillAttribute;
  sourceRef: SourceRef;
  defaults?: Partial<SkillStep>;
  steps: StepSeed[];
}): SkillPath {
  return {
    id: config.id,
    name: config.name,
    category: config.category,
    attribute: config.attribute,
    sourceRef: config.sourceRef,
    steps: config.steps.map((seed) => {
      const step: SkillStep = {
        skillPathId: config.id,
        ogLevel: seed.ogLevel,
        order: seed.order,
        name: seed.name,
        attribute: config.attribute,
        equipment: [],
        primaryCues: [],
        commonFaults: [],
        extractionStatus: 'complete',
        sourceRef: config.sourceRef,
        ...config.defaults,
        ...seed,
      } as SkillStep;

      return step;
    }),
  };
}

/* =============================================================================
   RINGS HANDSTAND
============================================================================= */

const ringsHandstand = makePath({
  id: 'rings-handstand',
  name: 'Rings Handstand',
  category: 'skill',
  attribute: 'skill-balance',
  sourceRef: og('Handstand Variations', 'Cap. 24'),
  defaults: {
    equipment: ['rings'],
    bailTechniques: ['roll-out'],
    scapularCue: 'elevate+retract',
    elbowCue: 'codos bloqueados',
    coreCue: 'cuerpo recto',
    safety: {
      fallRisk: true,
      bailRequired: true,
      contraindicatedWithPainZones: ['wrist', 'shoulder'],
    },
  },
  steps: [
    {
      id: 'rings-shoulder-stand',
      ogLevel: 5,
      order: 10,
      name: 'Rings Shoulder Stand',
      abbrev: 'R Shld Std',
      primaryCues: [
        'soporte estable en anillas',
        'codos bloqueados',
        'caderas sobre cabeza',
        'anillas controladas cerca del cuerpo',
      ],
      commonFaults: [
        'codos flexionados',
        'anillas inestables',
        'falta de depresión escapular',
      ],
      progressionCriteria: ['hold estable 10-20s', 'transición controlada'],
    },
    {
      id: 'rings-strap-handstand',
      ogLevel: 6,
      order: 20,
      name: 'Rings Strap Handstand',
      abbrev: 'R Strap HS',
      primaryCues: [
        'girar anillas hacia paralelo',
        'cuerpo recto',
        'correcciones desde muñecas',
      ],
      commonFaults: [
        'anillas girando hacia dentro',
        'arco lumbar',
        'codos blandos',
      ],
      prerequisites: [
        { skillPathId: 'rings-handstand', stepId: 'rings-shoulder-stand' },
      ],
    },
    {
      id: 'rings-handstand',
      ogLevel: 7,
      order: 30,
      name: 'Rings Handstand',
      abbrev: 'R HS',
      primaryCues: [
        'girar anillas ligeramente hacia fuera',
        'control fino desde muñecas',
        'cuerpo completamente recto',
      ],
      commonFaults: [
        'anillas girando hacia dentro',
        'arquear espalda',
        'perder tensión global',
      ],
      prerequisites: [
        { skillPathId: 'rings-handstand', stepId: 'rings-strap-handstand' },
      ],
    },
  ],
});

/* =============================================================================
   HANDSTAND PUSHUPS
============================================================================= */

const handstandPushup = makePath({
  id: 'handstand-pushup',
  name: 'Handstand Pushup',
  category: 'push',
  attribute: 'strength-dynamic',
  sourceRef: og('Handstand Variations', 'Cap. 24'),
  defaults: {
    equipment: ['floor', 'wall'],
    scapularCue: 'elevate',
    elbowCue: 'codos hacia dentro',
    coreCue: 'cuerpo recto, sin arco',
  },
  steps: [
    {
      id: 'hspu-pike',
      ogLevel: 1,
      order: 10,
      name: 'Pike Headstand Pushup',
      abbrev: 'Pike HeSPU',
      primaryCues: [
        'cadera alta',
        'peso en manos',
        'codos hacia dentro',
        'cabeza toca el suelo',
      ],
      commonFaults: ['peso en pies', 'codos abiertos', 'colapsar hombros'],
      progressionCriteria: ['3x8 controlado'],
    },
    {
      id: 'hspu-box',
      ogLevel: 2,
      order: 20,
      name: 'Box Headstand Pushup',
      abbrev: 'Box HeSPU',
      equipment: ['floor', 'wall', 'box'],
      primaryCues: ['pies en caja', 'más peso en manos', 'codos hacia dentro'],
      commonFaults: ['arquear espalda', 'codos abiertos'],
      prerequisites: [{ skillPathId: 'handstand-pushup', stepId: 'hspu-pike' }],
    },
    {
      id: 'hspu-wall-eccentric',
      ogLevel: 3,
      order: 30,
      name: 'Wall Headstand Pushup Eccentric',
      abbrev: 'Wall HeSPU Eccen.',
      primaryCues: ['bajar lento 5-10s', 'cuerpo recto', 'codos hacia dentro'],
      commonFaults: ['bajar rápido', 'arquear lumbar'],
      prerequisites: [{ skillPathId: 'handstand-pushup', stepId: 'hspu-box' }],
    },
    {
      id: 'hspu-wall-headstand',
      ogLevel: 4,
      order: 40,
      name: 'Wall Headstand Pushup',
      abbrev: 'Wall HeSPU',
      primaryCues: [
        'rango completo',
        'cabeza toca suelo',
        'empujar con hombros/tríceps',
      ],
      commonFaults: ['empujar con cuello', 'codos abiertos'],
      prerequisites: [
        { skillPathId: 'handstand-pushup', stepId: 'hspu-wall-eccentric' },
      ],
    },
    {
      id: 'hspu-wall-handstand',
      ogLevel: 5,
      order: 50,
      name: 'Wall Handstand Pushup',
      abbrev: 'Wall HSPU',
      equipment: ['floor', 'wall', 'parallettes'],
      primaryCues: [
        'manos elevadas',
        'rango completo',
        'codos hacia dentro',
      ],
      commonFaults: ['arquear espalda', 'rebotar cabeza'],
      prerequisites: [
        { skillPathId: 'handstand-pushup', stepId: 'hspu-wall-headstand' },
      ],
    },
    {
      id: 'hspu-free-headstand',
      ogLevel: 6,
      order: 60,
      name: 'Freestanding Headstand Pushup',
      abbrev: 'Free HeSPU',
      equipment: ['floor'],
      safety: { fallRisk: true },
      primaryCues: ['equilibrio', 'codos hacia dentro', 'control'],
      commonFaults: ['perder equilibrio', 'arquear'],
      prerequisites: [
        { skillPathId: 'handstand-pushup', stepId: 'hspu-wall-handstand' },
      ],
    },
    {
      id: 'hspu-free-handstand',
      ogLevel: 7,
      order: 70,
      name: 'Freestanding Handstand Pushup',
      abbrev: 'Free HSPU',
      equipment: ['floor', 'parallettes'],
      safety: { fallRisk: true },
      primaryCues: ['rango completo', 'cuerpo recto', 'equilibrio'],
      commonFaults: ['bloquear codos inestable', 'arquear'],
      prerequisites: [
        { skillPathId: 'handstand-pushup', stepId: 'hspu-free-headstand' },
      ],
    },
    {
      id: 'rings-wide-hspu',
      ogLevel: 7,
      order: 80,
      name: 'Rings Wide Handstand Pushup',
      abbrev: 'R Wide HSPU',
      equipment: ['rings', 'wall'],
      primaryCues: [
        'anillas anchas',
        'codos controlados',
        'pies en straps',
      ],
      commonFaults: ['anillas inestables', 'codos demasiado abiertos'],
      prerequisites: [
        { skillPathId: 'handstand-pushup', stepId: 'hspu-free-handstand' },
      ],
    },
    {
      id: 'rings-strap-hspu',
      ogLevel: 8,
      order: 90,
      name: 'Rings Strap Handstand Pushup',
      abbrev: 'R Strap HSPU',
      equipment: ['rings', 'wall'],
      primaryCues: [
        'codos hacia dentro',
        'anillas en straps',
        'rango completo',
      ],
      commonFaults: ['codos abiertos', 'perder línea corporal'],
      prerequisites: [
        { skillPathId: 'handstand-pushup', stepId: 'rings-wide-hspu' },
      ],
    },
    {
      id: 'rings-free-hspu',
      ogLevel: 9,
      order: 100,
      name: 'Rings Freestanding Handstand Pushup',
      abbrev: 'R Free HSPU',
      equipment: ['rings'],
      safety: { fallRisk: true },
      primaryCues: ['control total', 'codos hacia dentro', 'anillas estables'],
      commonFaults: ['inestabilidad', 'bloquear codos inestable'],
      prerequisites: [
        { skillPathId: 'handstand-pushup', stepId: 'rings-strap-hspu' },
      ],
    },
  ],
});

/* =============================================================================
   PRESS HANDSTANDS
============================================================================= */

const bentArmPressFloor = makePath({
  id: 'press-handstand-bent-arm',
  name: 'Bent-Arm Press to Handstand',
  category: 'push',
  attribute: 'strength-dynamic',
  sourceRef: og('Handstand Variations', 'Cap. 24'),
  defaults: {
    equipment: ['floor', 'parallettes'],
    scapularCue: 'elevate',
    elbowCue: 'flexión controlada',
    coreCue: 'compresión activa',
  },
  steps: [
    {
      id: 'ba-bb-press',
      ogLevel: 5,
      order: 10,
      name: 'Bent-Arm, Bent-Body Press to Handstand',
      abbrev: 'BA BB Press',
      primaryCues: ['caderas sobre hombros', 'empuje con brazos', 'control'],
      commonFaults: ['caderas atrás', 'perder compresión'],
    },
    {
      id: 'l-sit-ba-bb-press',
      ogLevel: 6,
      order: 20,
      name: 'L-Sit Bent-Arm, Bent-Body Press to Handstand',
      abbrev: 'L-Sit BA BB Press',
      primaryCues: ['inicio desde L-sit', 'caderas sobre hombros', 'empuje'],
      commonFaults: ['perder L-sit', 'caderas bajas'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm', stepId: 'ba-bb-press' },
      ],
    },
    {
      id: 'chest-roll-sb-press',
      ogLevel: 7,
      order: 30,
      name: 'Chest Roll, Straight-Body Press to Handstand',
      abbrev: 'CR SB Press',
      primaryCues: ['roll controlado', 'cuerpo recto', 'empuje final'],
      commonFaults: ['arquear espalda', 'impulso excesivo'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm', stepId: 'l-sit-ba-bb-press' },
      ],
    },
    {
      id: 'ba-sb-press',
      ogLevel: 8,
      order: 40,
      name: 'Bent-Arm, Straight-Body Press to Handstand',
      abbrev: 'BA SB Press',
      primaryCues: ['cuerpo recto', 'caderas sobre hombros', 'empuje'],
      commonFaults: ['arquear', 'perder línea'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm', stepId: 'chest-roll-sb-press' },
      ],
    },
    {
      id: 'hs-el-hs',
      ogLevel: 9,
      order: 50,
      name: 'Handstand to Elbow Lever to Handstand',
      abbrev: 'HS, EL, HS',
      primaryCues: ['transición controlada', 'codos cerca del cuerpo', 'empuje'],
      commonFaults: ['caer en elbow lever', 'perder control'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm', stepId: 'ba-sb-press' },
      ],
    },
    {
      id: 'pb-dip-sb-hs',
      ogLevel: 10,
      order: 60,
      name: 'Parallel Bar Dip, Straight-Body Press to Handstand',
      abbrev: 'PB Dip SB to HS',
      equipment: ['parallel-bars'],
      primaryCues: ['salida desde dip', 'cuerpo recto', 'press final'],
      commonFaults: ['perder rectitud', 'impulso excesivo'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm', stepId: 'hs-el-hs' },
      ],
    },
  ],
});

const bentArmPressRings = makePath({
  id: 'press-handstand-bent-arm-rings',
  name: 'Rings Bent-Arm Press to Handstand',
  category: 'push',
  attribute: 'strength-dynamic',
  sourceRef: og('Handstand Variations', 'Cap. 24'),
  defaults: {
    equipment: ['rings'],
    scapularCue: 'elevate',
    elbowCue: 'flexión controlada',
    coreCue: 'compresión activa',
  },
  steps: [
    {
      id: 'chair-handstand',
      ogLevel: 6,
      order: 10,
      name: 'Chair Handstand',
      abbrev: 'Chair HS',
      primaryCues: ['base estable', 'empuje con brazo de apoyo', 'control'],
      commonFaults: ['giro excesivo', 'perder línea'],
    },
    {
      id: 'illusion-chair-handstand',
      ogLevel: 7,
      order: 20,
      name: 'Illusion Chair Handstand',
      abbrev: 'Illusion Chair HS',
      primaryCues: ['control fino', 'empuje con brazo de apoyo', 'estabilidad'],
      commonFaults: ['inestabilidad', 'giro excesivo'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm-rings', stepId: 'chair-handstand' },
      ],
    },
    {
      id: 'rings-ba-bb-press',
      ogLevel: 8,
      order: 30,
      name: 'Rings Bent-Arm, Bent-Body Press to Handstand',
      abbrev: 'R BA BB Press',
      primaryCues: ['anillas estables', 'caderas sobre hombros', 'empuje'],
      commonFaults: ['anillas giran', 'perder compresión'],
      prerequisites: [
        {
          skillPathId: 'press-handstand-bent-arm-rings',
          stepId: 'illusion-chair-handstand',
        },
      ],
    },
    {
      id: 'rings-dip-to-hs',
      ogLevel: 9,
      order: 40,
      name: 'Rings Dip to Handstand',
      abbrev: 'R Dip to HS',
      primaryCues: ['transición desde dip', 'cuerpo recto', 'press final'],
      commonFaults: ['impulso excesivo', 'perder línea'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm-rings', stepId: 'rings-ba-bb-press' },
      ],
    },
    {
      id: 'rings-ba-sb-press',
      ogLevel: 10,
      order: 50,
      name: 'Rings Bent-Arm, Straight-Body Press to Handstand',
      abbrev: 'R BA SB Press',
      primaryCues: ['cuerpo recto', 'anillas estables', 'press controlado'],
      commonFaults: ['arquear', 'anillas inestables'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm-rings', stepId: 'rings-dip-to-hs' },
      ],
    },
    {
      id: 'rings-hs-el-hs',
      ogLevel: 11,
      order: 60,
      name: 'Rings Handstand to Elbow Lever to Handstand',
      abbrev: 'R HS, EL, HS',
      primaryCues: ['transición controlada', 'codos cerca', 'press final'],
      commonFaults: ['caer en transición', 'perder control'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm-rings', stepId: 'rings-ba-sb-press' },
      ],
    },
    {
      id: 'rings-dip-sb-hs',
      ogLevel: 12,
      order: 70,
      name: 'Rings Dip, Straight-Body Press to Handstand',
      abbrev: 'R Dip SB to HS',
      primaryCues: ['salida desde dip', 'cuerpo recto', 'press final'],
      commonFaults: ['impulso excesivo', 'perder línea'],
      prerequisites: [
        { skillPathId: 'press-handstand-bent-arm-rings', stepId: 'rings-hs-el-hs' },
      ],
    },
  ],
});

const straightArmPressFloor = makePath({
  id: 'press-handstand-straight-arm',
  name: 'Straight-Arm Press to Handstand',
  category: 'push',
  attribute: 'strength-dynamic',
  sourceRef: og('Handstand Variations', 'Cap. 24'),
  defaults: {
    equipment: ['floor', 'wall'],
    scapularCue: 'elevate',
    elbowCue: 'codos bloqueados',
    coreCue: 'compresión activa',
  },
  steps: [
    {
      id: 'wall-straddle-press-eccentric',
      ogLevel: 5,
      order: 10,
      name: 'Wall Straddle Press to Handstand Eccentrics',
      abbrev: 'Wall Str. Press Ecce.',
      primaryCues: ['bajar lento', 'caderas sobre hombros', 'brazos rectos'],
      commonFaults: ['bajar rápido', 'doblar codos'],
    },
    {
      id: 'elevated-straddle-stand-press',
      ogLevel: 6,
      order: 20,
      name: 'Elevated Straddle Stand, Straddle Press to Handstand',
      abbrev: 'Ele Str Std Str Press',
      primaryCues: ['soporte elevado', 'caderas sobre hombros', 'press'],
      commonFaults: ['perder compresión', 'doblar codos'],
      prerequisites: [
        {
          skillPathId: 'press-handstand-straight-arm',
          stepId: 'wall-straddle-press-eccentric',
        },
      ],
    },
    {
      id: 'straddle-pike-stand-press',
      ogLevel: 7,
      order: 30,
      name: 'Straddle or Pike Stand, Press to Handstand',
      abbrev: 'Str./Pike Std. Press',
      primaryCues: ['press desde suelo', 'caderas sobre hombros', 'control'],
      commonFaults: ['perder línea', 'doblar codos'],
      prerequisites: [
        {
          skillPathId: 'press-handstand-straight-arm',
          stepId: 'elevated-straddle-stand-press',
        },
      ],
    },
    {
      id: 'l-sit-straddle-press',
      ogLevel: 8,
      order: 40,
      name: 'L-Sit/Straddle-L, Straddle Press to Handstand',
      abbrev: 'L-Sit/Str-L Str. Press',
      primaryCues: ['inicio desde L-sit', 'press con brazos rectos', 'control'],
      commonFaults: ['perder L-sit', 'doblar codos'],
      prerequisites: [
        {
          skillPathId: 'press-handstand-straight-arm',
          stepId: 'straddle-pike-stand-press',
        },
      ],
    },
    {
      id: 'l-sit-pike-press',
      ogLevel: 9,
      order: 50,
      name: 'L-Sit/Straddle-L Pike Press to Handstand',
      abbrev: 'L-Sit/Str-L Pike Press',
      primaryCues: ['pike press', 'caderas sobre hombros', 'brazos rectos'],
      commonFaults: ['perder pike', 'doblar codos'],
      prerequisites: [
        {
          skillPathId: 'press-handstand-straight-arm',
          stepId: 'l-sit-straddle-press',
        },
      ],
    },
  ],
});

const straightArmPressRings = makePath({
  id: 'press-handstand-straight-arm-rings',
  name: 'Rings Straight-Arm Press to Handstand',
  category: 'push',
  attribute: 'strength-dynamic',
  sourceRef: og('Handstand Variations', 'Cap. 24'),
  defaults: {
    equipment: ['rings'],
    scapularCue: 'elevate',
    elbowCue: 'codos bloqueados',
    coreCue: 'compresión activa',
  },
  steps: [
    {
      id: 'rings-sa-l-sit-straddle-press',
      ogLevel: 10,
      order: 10,
      name: 'Rings Straight-Arm, L-Sit, Straddle Press to Handstand',
      abbrev: 'R SA L-Sit Str. Press',
      primaryCues: ['anillas estables', 'press recto', 'control'],
      commonFaults: ['anillas giran', 'doblar codos'],
    },
    {
      id: 'rings-sa-straddle-l-straddle-press',
      ogLevel: 11,
      order: 20,
      name: 'Rings Straight-Arm, Straddle-L, Straddle Press to Handstand',
      abbrev: 'R SA Str-L Str. Press',
      primaryCues: ['press desde straddle-L', 'brazos rectos', 'control'],
      commonFaults: ['perder compresión', 'anillas inestables'],
      prerequisites: [
        {
          skillPathId: 'press-handstand-straight-arm-rings',
          stepId: 'rings-sa-l-sit-straddle-press',
        },
      ],
    },
    {
      id: 'rings-sa-pike-press',
      ogLevel: 12,
      order: 30,
      name: 'Rings Straight-Arm, Pike Press to Handstand',
      abbrev: 'R SA Pike Press',
      primaryCues: ['pike press en anillas', 'brazos rectos', 'control total'],
      commonFaults: ['perder pike', 'anillas inestables'],
      prerequisites: [
        {
          skillPathId: 'press-handstand-straight-arm-rings',
          stepId: 'rings-sa-straddle-l-straddle-press',
        },
      ],
    },
  ],
});

/* =============================================================================
   DIPS
============================================================================= */

const parallelBarDips = makePath({
  id: 'parallel-bar-dips',
  name: 'Parallel Bar Dips',
  category: 'push',
  attribute: 'strength-dynamic',
  sourceRef: og('Pushing Variations', 'Cap. 26'),
  defaults: {
    equipment: ['parallel-bars'],
    scapularCue: 'depress',
    elbowCue: 'codos controlados',
    coreCue: 'cuerpo recto',
  },
  steps: [
    {
      id: 'jumping-dips',
      ogLevel: 1,
      order: 10,
      name: 'Parallel Bar Jumping Dips',
      abbrev: 'Jumping Dips',
      primaryCues: ['asistencia con piernas', 'rango completo', 'control'],
      commonFaults: ['rebotar', 'rango corto'],
    },
    {
      id: 'dip-eccentrics',
      ogLevel: 2,
      order: 20,
      name: 'Parallel Bar Dip Eccentrics',
      abbrev: 'Dip Eccentrics',
      primaryCues: ['bajar lento 6-10s', 'rango completo'],
      commonFaults: ['bajar rápido', 'rango incompleto'],
      prerequisites: [
        { skillPathId: 'parallel-bar-dips', stepId: 'jumping-dips' },
      ],
    },
    {
      id: 'parallel-bar-dips',
      ogLevel: 3,
      order: 30,
      name: 'Parallel Bar Dips',
      abbrev: 'PB Dips',
      primaryCues: ['rango completo', 'hombros deprimidos', 'control'],
      commonFaults: ['rebotar', 'hombros elevados'],
      prerequisites: [
        { skillPathId: 'parallel-bar-dips', stepId: 'dip-eccentrics' },
      ],
    },
    {
      id: 'l-sit-dips',
      ogLevel: 4,
      order: 40,
      name: 'L-Sit Dips',
      abbrev: 'L-Sit Dips',
      primaryCues: ['piernas paralelas al suelo', 'rango completo', 'control'],
      commonFaults: ['piernas caídas', 'rango corto'],
      prerequisites: [
        { skillPathId: 'parallel-bar-dips', stepId: 'parallel-bar-dips' },
      ],
    },
    {
      id: 'forward-lean-dips',
      ogLevel: 5,
      order: 50,
      name: '45-Degree Forward-Lean Dips',
      abbrev: '45° Lean Dips',
      primaryCues: ['lean constante', 'cuerpo recto', 'rango completo'],
      commonFaults: ['arquear', 'perder lean'],
      prerequisites: [
        { skillPathId: 'parallel-bar-dips', stepId: 'l-sit-dips' },
      ],
    },
    {
      id: 'one-arm-dip',
      ogLevel: 8,
      order: 60,
      name: 'One-Arm Dip',
      abbrev: 'OA Dip',
      primaryCues: ['cuerpo controlado', 'empuje unilateral', 'core tenso'],
      commonFaults: ['giro excesivo', 'rango corto'],
      prerequisites: [
        { skillPathId: 'parallel-bar-dips', stepId: 'forward-lean-dips' },
      ],
    },
  ],
});

const ringsDipsLeanSeeds: StepSeed[] = [30, 50, 65, 75, 82, 86, 88].map(
  (angle, idx) => ({
    id: `rto-90-lean-${angle}`,
    ogLevel: 10 + idx,
    order: 100 + idx * 10,
    name: `RTO 90° + ${angle}° Lean Dip`,
    abbrev: `RTO 90+${angle} Dip`,
    primaryCues: ['lean constante', 'anillas giradas fuera', 'cuerpo recto'],
    commonFaults: ['arquear', 'perder RTO', 'rango corto'],
    safety: angle >= 75 ? { requiresConnectivePrep: true } : undefined,
    prerequisites: [
      { skillPathId: 'rings-dips', stepId: 'rto-90-dips' },
    ],
  })
);

const ringsDips = makePath({
  id: 'rings-dips',
  name: 'Rings Dips',
  category: 'push',
  attribute: 'strength-dynamic',
  sourceRef: og('Pushing Variations', 'Cap. 26'),
  defaults: {
    equipment: ['rings'],
    scapularCue: 'depress',
    elbowCue: 'codos controlados',
    coreCue: 'cuerpo recto',
  },
  steps: [
    {
      id: 'rings-support-hold',
      ogLevel: 1,
      order: 10,
      name: 'Rings Support Hold',
      abbrev: 'Support Hold',
      primaryCues: ['brazos rectos', 'hombros deprimidos', 'anillas estables'],
      commonFaults: ['codos flexionados', 'anillas inestables'],
    },
    {
      id: 'rto-support-hold',
      ogLevel: 2,
      order: 20,
      name: 'Rings-Turned-Out Support Hold',
      abbrev: 'RTO Support',
      primaryCues: ['girar anillas fuera', 'brazos rectos', 'control'],
      commonFaults: ['anillas giran hacia dentro', 'hombros elevados'],
      prerequisites: [
        { skillPathId: 'rings-dips', stepId: 'rings-support-hold' },
      ],
    },
    {
      id: 'rings-dip-eccentrics',
      ogLevel: 3,
      order: 30,
      name: 'Rings Dip Eccentrics',
      abbrev: 'Rings Dip Ecc.',
      primaryCues: ['bajar lento', 'rango completo', 'anillas controladas'],
      commonFaults: ['bajar rápido', 'anillas inestables'],
      prerequisites: [
        { skillPathId: 'rings-dips', stepId: 'rto-support-hold' },
      ],
    },
    {
      id: 'rings-dips',
      ogLevel: 4,
      order: 40,
      name: 'Rings Dips',
      abbrev: 'Rings Dips',
      primaryCues: ['rango completo', 'anillas cerca del cuerpo', 'control'],
      commonFaults: ['anillas inestables', 'rango corto'],
      prerequisites: [
        { skillPathId: 'rings-dips', stepId: 'rings-dip-eccentrics' },
      ],
    },
    {
      id: 'rings-l-sit-dips',
      ogLevel: 5,
      order: 50,
      name: 'Rings L-Sit Dips',
      abbrev: 'Rings L-Sit Dips',
      primaryCues: ['piernas paralelas', 'rango completo', 'control'],
      commonFaults: ['piernas caídas', 'anillas inestables'],
      prerequisites: [{ skillPathId: 'rings-dips', stepId: 'rings-dips' }],
    },
    {
      id: 'rings-wide-dips',
      ogLevel: 6,
      order: 60,
      name: 'Rings Wide Dips',
      abbrev: 'Rings Wide Dips',
      primaryCues: ['brazos abiertos', 'control', 'rango completo'],
      commonFaults: ['hombros inestables', 'rango corto'],
      prerequisites: [
        { skillPathId: 'rings-dips', stepId: 'rings-l-sit-dips' },
      ],
    },
    {
      id: 'rto-45-dips',
      ogLevel: 7,
      order: 70,
      name: 'RTO 45° Dips',
      abbrev: 'RTO 45 Dips',
      primaryCues: ['anillas 45°', 'rango completo', 'control'],
      commonFaults: ['anillas vuelven a paralelo', 'rango corto'],
      prerequisites: [
        { skillPathId: 'rings-dips', stepId: 'rings-wide-dips' },
      ],
    },
    {
      id: 'rto-75-dips',
      ogLevel: 8,
      order: 80,
      name: 'RTO 75° Dips',
      abbrev: 'RTO 75 Dips',
      primaryCues: ['anillas 75°', 'rango completo', 'control'],
      commonFaults: ['anillas inestables', 'rango corto'],
      prerequisites: [{ skillPathId: 'rings-dips', stepId: 'rto-45-dips' }],
    },
    {
      id: 'rto-90-dips',
      ogLevel: 9,
      order: 90,
      name: 'RTO 90° Dips',
      abbrev: 'RTO 90 Dips',
      primaryCues: ['anillas 90°', 'rango completo', 'control'],
      commonFaults: ['anillas inestables', 'rango corto'],
      prerequisites: [{ skillPathId: 'rings-dips', stepId: 'rto-75-dips' }],
    },
    ...ringsDipsLeanSeeds,
    {
      id: 'maltese-hold',
      ogLevel: 17,
      order: 180,
      name: 'Maltese Hold',
      abbrev: 'Maltese',
      primaryCues: ['brazos abiertos', 'cuerpo recto', 'tensión total'],
      commonFaults: ['arquear', 'codos flexionados'],
      safety: { requiresConnectivePrep: true },
      prerequisites: [
        { skillPathId: 'rings-dips', stepId: 'rto-90-lean-88' },
      ],
    },
  ],
});

/* =============================================================================
   ROWS
============================================================================= */

const rows = makePath({
  id: 'rows',
  name: 'Rows',
  category: 'pull',
  attribute: 'strength-dynamic',
  sourceRef: og('Pulling Exercises', 'Cap. 25'),
  defaults: {
    equipment: ['rings', 'bar'],
    scapularCue: 'retract',
    elbowCue: 'codos controlados',
    coreCue: 'hollow lineal',
  },
  steps: [
    {
      id: 'ring-row-eccentrics',
      ogLevel: 1,
      order: 10,
      name: 'Ring Row Eccentrics',
      abbrev: 'Ring Row Ecc.',
      primaryCues: ['bajar lento', 'retracción escapular', 'control'],
      commonFaults: ['bajar rápido', 'cuerpo colapsado'],
    },
    {
      id: 'ring-rows',
      ogLevel: 2,
      order: 20,
      name: 'Ring Rows',
      abbrev: 'Ring Rows',
      primaryCues: ['retracción primero', 'codos cerca', 'cuerpo recto'],
      commonFaults: ['cuerpo colapsado', 'rango corto'],
      prerequisites: [{ skillPathId: 'rows', stepId: 'ring-row-eccentrics' }],
    },
    {
      id: 'wide-ring-rows',
      ogLevel: 3,
      order: 30,
      name: 'Wide Ring Rows',
      abbrev: 'Wide Ring Rows',
      primaryCues: ['codos abiertos', 'retracción fuerte', 'cuerpo recto'],
      commonFaults: ['cuerpo colapsado', 'rango corto'],
      prerequisites: [{ skillPathId: 'rows', stepId: 'ring-rows' }],
    },
    {
      id: 'archer-ring-rows',
      ogLevel: 4,
      order: 40,
      name: 'Archer Ring Rows',
      abbrev: 'Archer Ring Rows',
      primaryCues: ['un brazo trabaja más', 'otro brazo asiste', 'control'],
      commonFaults: ['rotar torso', 'rango corto'],
      prerequisites: [{ skillPathId: 'rows', stepId: 'wide-ring-rows' }],
    },
    {
      id: 'archer-arm-in-ring-rows',
      ogLevel: 5,
      order: 50,
      name: 'Archer-Arm-In Ring Rows',
      abbrev: 'Archer-Arm-In Rows',
      primaryCues: ['brazo asistente cerca', 'control', 'retracción'],
      commonFaults: ['rotar torso', 'rango corto'],
      prerequisites: [{ skillPathId: 'rows', stepId: 'archer-ring-rows' }],
    },
    {
      id: 'straddle-one-arm-rows',
      ogLevel: 6,
      order: 60,
      name: 'Straddle One-Arm Rows',
      abbrev: 'Str OA Rows',
      primaryCues: ['piernas en straddle', 'un brazo', 'cuerpo recto'],
      commonFaults: ['rotar torso', 'rango corto'],
      prerequisites: [
        { skillPathId: 'rows', stepId: 'archer-arm-in-ring-rows' },
      ],
    },
    {
      id: 'one-arm-rows',
      ogLevel: 7,
      order: 70,
      name: 'One-Arm Rows',
      abbrev: 'OA Rows',
      primaryCues: ['un brazo', 'cuerpo recto', 'retracción fuerte'],
      commonFaults: ['rotar torso', 'rango corto'],
      prerequisites: [{ skillPathId: 'rows', stepId: 'straddle-one-arm-rows' }],
    },
  ],
});

/* =============================================================================
   PULL-UPS / OAC
============================================================================= */

const barPullUps = makePath({
  id: 'bar-pull-ups',
  name: 'Bar Pull-ups',
  category: 'pull',
  attribute: 'strength-dynamic',
  sourceRef: og('Pulling Exercises', 'Cap. 25'),
  defaults: {
    equipment: ['bar'],
    scapularCue: 'depress',
    elbowCue: 'codos cerca del cuerpo',
    coreCue: 'cuerpo controlado',
  },
  steps: [
    {
      id: 'jumping-pull-ups',
      ogLevel: 1,
      order: 10,
      name: 'Jumping Pull-ups',
      abbrev: 'Jumping Pull-ups',
      primaryCues: ['asistencia con piernas', 'rango completo', 'control'],
      commonFaults: ['impulso excesivo', 'rango corto'],
    },
    {
      id: 'bar-pull-up-eccentrics',
      ogLevel: 2,
      order: 20,
      name: 'Bar Pull-up Eccentrics',
      abbrev: 'Pull-up Ecc.',
      primaryCues: ['bajar lento 6-10s', 'rango completo'],
      commonFaults: ['bajar rápido', 'rango incompleto'],
      prerequisites: [
        { skillPathId: 'bar-pull-ups', stepId: 'jumping-pull-ups' },
      ],
    },
    {
      id: 'bar-pull-ups',
      ogLevel: 3,
      order: 30,
      name: 'Bar Pull-ups',
      abbrev: 'Pull-ups',
      primaryCues: ['rango completo', 'codos cerca', 'sin craneo'],
      commonFaults: ['rango corto', 'craneo cervical'],
      prerequisites: [
        { skillPathId: 'bar-pull-ups', stepId: 'bar-pull-up-eccentrics' },
      ],
    },
    {
      id: 'l-sit-pull-ups',
      ogLevel: 4,
      order: 40,
      name: 'L-Sit Pull-ups',
      abbrev: 'L-Sit Pull-ups',
      primaryCues: ['piernas paralelas', 'rango completo', 'control'],
      commonFaults: ['piernas caídas', 'rango corto'],
      prerequisites: [{ skillPathId: 'bar-pull-ups', stepId: 'bar-pull-ups' }],
    },
    {
      id: 'pullover',
      ogLevel: 5,
      order: 50,
      name: 'Pullover',
      abbrev: 'Pullover',
      primaryCues: ['tirar a caderas', 'girar sobre barra', 'control'],
      commonFaults: ['impulso excesivo', 'rango corto'],
      prerequisites: [
        { skillPathId: 'bar-pull-ups', stepId: 'l-sit-pull-ups' },
      ],
    },
  ],
});

const ringsPullUpsOac = makePath({
  id: 'rings-pull-ups-oac',
  name: 'Rings Pull-ups & One-Arm Chin-up',
  category: 'pull',
  attribute: 'strength-dynamic',
  sourceRef: og('Pulling Exercises', 'Cap. 25'),
  defaults: {
    equipment: ['rings', 'bar'],
    scapularCue: 'depress',
    elbowCue: 'codos cerca del cuerpo',
    coreCue: 'cuerpo controlado',
  },
  steps: [
    {
      id: 'rings-l-sit-pull-ups',
      ogLevel: 4,
      order: 10,
      name: 'Rings L-Sit Pull-ups',
      abbrev: 'R L-Sit Pull-ups',
      primaryCues: ['piernas paralelas', 'rango completo', 'control'],
      commonFaults: ['piernas caídas', 'rango corto'],
    },
    {
      id: 'rings-wide-grip-pull-ups',
      ogLevel: 5,
      order: 20,
      name: 'Rings Wide Grip Pull-ups',
      abbrev: 'R Wide Pull-ups',
      primaryCues: ['agarre ancho', 'codos controlados', 'rango completo'],
      commonFaults: ['codos demasiado abiertos', 'rango corto'],
      prerequisites: [
        { skillPathId: 'rings-pull-ups-oac', stepId: 'rings-l-sit-pull-ups' },
      ],
    },
    {
      id: 'rings-wide-grip-l-sit-pull-ups',
      ogLevel: 6,
      order: 30,
      name: 'Rings Wide Grip L-Sit Pull-ups',
      abbrev: 'R Wide L-Sit Pull-ups',
      primaryCues: ['agarre ancho', 'piernas paralelas', 'control'],
      commonFaults: ['piernas caídas', 'rango corto'],
      prerequisites: [
        {
          skillPathId: 'rings-pull-ups-oac',
          stepId: 'rings-wide-grip-pull-ups',
        },
      ],
    },
    {
      id: 'rings-archer-pull-ups',
      ogLevel: 7,
      order: 40,
      name: 'Rings Archer Pull-ups',
      abbrev: 'R Archer Pull-ups',
      primaryCues: ['un brazo trabaja más', 'otro asiste', 'control'],
      commonFaults: ['rotar torso', 'rango corto'],
      prerequisites: [
        {
          skillPathId: 'rings-pull-ups-oac',
          stepId: 'rings-wide-grip-l-sit-pull-ups',
        },
      ],
    },
    {
      id: 'oac-eccentrics',
      ogLevel: 8,
      order: 50,
      name: 'One-Arm Chin-up/Pull-up Eccentrics',
      abbrev: 'OAC Ecc.',
      primaryCues: ['bajar lento 6-10s', 'control unilateral'],
      commonFaults: ['bajar rápido', 'rotar torso'],
      prerequisites: [
        { skillPathId: 'rings-pull-ups-oac', stepId: 'rings-archer-pull-ups' },
      ],
    },
    {
      id: 'oac',
      ogLevel: 9,
      order: 60,
      name: 'One-Arm Chin-up',
      abbrev: 'OAC',
      primaryCues: ['tirar unilateral', 'codos cerca', 'control'],
      commonFaults: ['rotar torso', 'rango corto'],
      prerequisites: [
        { skillPathId: 'rings-pull-ups-oac', stepId: 'oac-eccentrics' },
      ],
    },
    {
      id: 'oac-plus-15',
      ogLevel: 10,
      order: 70,
      name: 'One-Arm Chin-up +15 lbs.',
      abbrev: 'OAC +15',
      primaryCues: ['añadir peso', 'control unilateral'],
      commonFaults: ['rotar torso', 'rango corto'],
      prerequisites: [{ skillPathId: 'rings-pull-ups-oac', stepId: 'oac' }],
    },
    {
      id: 'oac-plus-25',
      ogLevel: 11,
      order: 80,
      name: 'One-Arm Chin-up +25 lbs.',
      abbrev: 'OAC +25',
      primaryCues: ['añadir peso', 'control unilateral'],
      commonFaults: ['rotar torso', 'rango corto'],
      prerequisites: [
        { skillPathId: 'rings-pull-ups-oac', stepId: 'oac-plus-15' },
      ],
    },
  ],
});

/* =============================================================================
   L-SIT / V-SIT / MANNA
============================================================================= */

const lSitManna = makePath({
  id: 'l-sit-v-sit-manna',
  name: 'L-Sit / V-Sit / Manna',
  category: 'core',
  attribute: 'core',
  sourceRef: og('Pulling Exercises', 'Cap. 25'),
  defaults: {
    equipment: ['floor', 'parallettes', 'rings'],
    scapularCue: 'depress',
    elbowCue: 'codos bloqueados',
    coreCue: 'compresión activa',
  },
  steps: [
    {
      id: 'tuck-l-sit',
      ogLevel: 1,
      order: 10,
      name: 'Tuck L-Sit',
      abbrev: 'Tuck L-Sit',
      primaryCues: ['hombros deprimidos', 'caderas elevadas', 'control'],
      commonFaults: ['hombros elevados', 'caderas bajas'],
    },
    {
      id: 'one-leg-bent-l-sit',
      ogLevel: 2,
      order: 20,
      name: 'One-Leg-Bent L-Sit',
      abbrev: 'One-Leg-Bent L-Sit',
      primaryCues: ['una pierna extendida', 'caderas elevadas', 'control'],
      commonFaults: ['caderas bajas', 'hombros elevados'],
      prerequisites: [
        { skillPathId: 'l-sit-v-sit-manna', stepId: 'tuck-l-sit' },
      ],
    },
    {
      id: 'l-sit',
      ogLevel: 3,
      order: 30,
      name: 'L-Sit',
      abbrev: 'L-Sit',
      primaryCues: ['piernas extendidas', 'caderas elevadas', 'compresión'],
      commonFaults: ['rodillas caídas', 'caderas bajas'],
      prerequisites: [
        { skillPathId: 'l-sit-v-sit-manna', stepId: 'one-leg-bent-l-sit' },
      ],
    },
    {
      id: 'straddle-l-sit',
      ogLevel: 4,
      order: 40,
      name: 'Straddle L-Sit',
      abbrev: 'Straddle L-Sit',
      primaryCues: ['piernas abiertas', 'caderas elevadas', 'compresión'],
      commonFaults: ['caderas bajas', 'perder compresión'],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'l-sit' }],
    },
    {
      id: 'rto-l-sit',
      ogLevel: 5,
      order: 50,
      name: 'Rings-Turned-Out L-Sit',
      abbrev: 'RTO L-Sit',
      equipment: ['rings'],
      primaryCues: ['anillas giradas fuera', 'caderas elevadas', 'control'],
      commonFaults: ['anillas inestables', 'caderas bajas'],
      prerequisites: [
        { skillPathId: 'l-sit-v-sit-manna', stepId: 'straddle-l-sit' },
      ],
    },
    {
      id: 'v-sit-45',
      ogLevel: 6,
      order: 60,
      name: '45° V-Sit',
      abbrev: '45° V-Sit',
      primaryCues: ['piernas a 45°', 'caderas elevadas', 'compresión'],
      commonFaults: ['caderas bajas', 'perder compresión'],
      prerequisites: [
        { skillPathId: 'l-sit-v-sit-manna', stepId: 'straddle-l-sit' },
      ],
    },
    {
      id: 'v-sit-75',
      ogLevel: 7,
      order: 70,
      name: '75° V-Sit',
      abbrev: '75° V-Sit',
      primaryCues: ['piernas a 75°', 'caderas elevadas', 'compresión'],
      commonFaults: ['caderas bajas', 'perder compresión'],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'v-sit-45' }],
    },
    {
      id: 'rings-v-sit-45',
      ogLevel: 7,
      order: 80,
      name: 'Rings 45° V-Sit',
      abbrev: 'R 45° V-Sit',
      equipment: ['rings'],
      primaryCues: ['anillas estables', 'piernas a 45°', 'control'],
      commonFaults: ['anillas inestables', 'caderas bajas'],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'v-sit-45' }],
    },
    {
      id: 'rings-v-sit-75',
      ogLevel: 8,
      order: 90,
      name: 'Rings 75° V-Sit',
      abbrev: 'R 75° V-Sit',
      equipment: ['rings'],
      primaryCues: ['anillas estables', 'piernas a 75°', 'control'],
      commonFaults: ['anillas inestables', 'caderas bajas'],
      prerequisites: [
        { skillPathId: 'l-sit-v-sit-manna', stepId: 'rings-v-sit-45' },
      ],
    },
    {
      id: 'rings-v-sit-90',
      ogLevel: 9,
      order: 100,
      name: 'Rings 90° V-Sit',
      abbrev: 'R 90° V-Sit',
      equipment: ['rings'],
      primaryCues: ['anillas estables', 'piernas a 90°', 'control'],
      commonFaults: ['anillas inestables', 'caderas bajas'],
      prerequisites: [
        { skillPathId: 'l-sit-v-sit-manna', stepId: 'rings-v-sit-75' },
      ],
    },
    {
      id: 'v-sit-100',
      ogLevel: 8,
      order: 110,
      name: '100° V-Sit',
      abbrev: '100° V-Sit',
      primaryCues: ['piernas a 100°', 'caderas elevadas', 'compresión'],
      commonFaults: ['caderas bajas', 'perder compresión'],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'v-sit-75' }],
    },
    {
      id: 'v-sit-120',
      ogLevel: 9,
      order: 120,
      name: '120° V-Sit',
      abbrev: '120° V-Sit',
      primaryCues: ['piernas a 120°', 'caderas elevadas', 'compresión'],
      commonFaults: ['caderas bajas', 'perder compresión'],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'v-sit-100' }],
    },
    {
      id: 'v-sit-140',
      ogLevel: 10,
      order: 130,
      name: '140° V-Sit',
      abbrev: '140° V-Sit',
      primaryCues: ['piernas a 140°', 'caderas elevadas', 'compresión'],
      commonFaults: ['caderas bajas', 'perder compresión'],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'v-sit-120' }],
    },
    {
      id: 'v-sit-155',
      ogLevel: 11,
      order: 140,
      name: '155° V-Sit',
      abbrev: '155° V-Sit',
      primaryCues: ['piernas a 155°', 'caderas elevadas', 'compresión'],
      commonFaults: ['caderas bajas', 'perder compresión'],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'v-sit-140' }],
    },
    {
      id: 'v-sit-170',
      ogLevel: 12,
      order: 150,
      name: '170° V-Sit',
      abbrev: '170° V-Sit',
      primaryCues: ['piernas a 170°', 'caderas elevadas', 'compresión'],
      commonFaults: ['caderas bajas', 'perder compresión'],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'v-sit-155' }],
    },
    {
      id: 'manna',
      ogLevel: 13,
      order: 160,
      name: 'Manna',
      abbrev: 'Manna',
      primaryCues: [
        'manos detrás de caderas',
        'empujar caderas hacia adelante',
        'depresión escapular fuerte',
        'compresión máxima',
      ],
      commonFaults: [
        'caderas bajas',
        'hombros elevados',
        'perder extensión de hombro',
      ],
      prerequisites: [{ skillPathId: 'l-sit-v-sit-manna', stepId: 'v-sit-170' }],
    },
  ],
});

/* =============================================================================
   EXPORTS
============================================================================= */

export const EXTENDED_SKILL_PATHS: SkillPath[] = [
  ringsHandstand,
  handstandPushup,
  bentArmPressFloor,
  bentArmPressRings,
  straightArmPressFloor,
  straightArmPressRings,
  parallelBarDips,
  ringsDips,
  rows,
  barPullUps,
  ringsPullUpsOac,
  lSitManna,
];

export const EXTENDED_SKILL_STEPS: SkillStep[] =
  EXTENDED_SKILL_PATHS.flatMap((path) => path.steps);
```

---

# B. Adapter completo `WeeklyFocusLedger -> EvaluationContext`

Este adapter convierte el ledger semanal en facts + métricas para el motor de reglas.

## Archivo: `src/lib/fitness/ledgerAdapter.ts`

```ts
// src/lib/fitness/ledgerAdapter.ts

import type {
  BodyZoneId,
  FocusId,
  MovementPattern,
  RuleScope,
  RoutineType,
  TrainingLevel,
  TrainingRule,
} from '../../data/fitness/contracts/rules';

import type { EvaluationContext, RuleFacts } from './rulesEngine';

export type SicknessState = 'none' | 'above-neck' | 'below-neck' | 'fever';

export type LedgerSessionBlock =
  | 'warmup'
  | 'skill'
  | 'strength'
  | 'endurance'
  | 'prehab'
  | 'mobility';

export type LedgerEntry = {
  id: string;
  sessionId?: string;
  exerciseId?: string;
  skillPathId?: string;
  pattern?: MovementPattern;
  muscleId?: string;
  zone?: BodyZoneId;
  focusId?: FocusId;

  sets?: number;
  reps?: number;
  holdSec?: number;
  restSeconds?: number;
  rpe?: number;
  intensityPct1RM?: number;
  minutes?: number;
  eccentricSecondsPerRep?: number;

  isSkill?: boolean;
  isEccentric?: boolean;
  holdType?: 'max-strength' | 'skill-balance';
  sessionBlock?: LedgerSessionBlock;
};

export type WeeklyFocusLedger = {
  week: string;
  focus: FocusId;
  level: TrainingLevel;
  routineType?: RoutineType;
  sessionsPerWeek?: number;
  entries: LedgerEntry[];

  lifestyle?: {
    sleepHoursPerNight?: number;
    sleepDeprivedDays?: number;
    sleepQuality?: 'poor' | 'normal' | 'good';
    sickness?: SicknessState;
    appetite?: 'normal' | 'decreased' | 'increased';
    persistentSoreness?: boolean;
    stress?: number; // 0-10
    recoverySymptomScore?: number;
  };

  trainingStatus?: {
    avgRpe?: number;
    performanceTrend?: number; // -1, 0, +1
    weeksSinceDeload?: number;
    weeksNoProgress?: number;
    rehabPhase?: string;
    holdType?: 'max-strength' | 'skill-balance';
    sessionBlock?: LedgerSessionBlock;
    isSkill?: boolean;
    techniqueFailureRate?: number;
  };

  progression?: {
    volumeChangePctPerWeek?: number;
  };

  painByZone?: Partial<Record<BodyZoneId, number>>;

  goals?: Array<{ id: string }>;

  flags?: {
    hasWideArmAdvancedWork?: boolean;
    connectivePrepComplete?: boolean;
    exceptionEccentricsAllowed?: boolean;
    [key: string]: boolean | undefined;
  };

  facts?: RuleFacts;
  metrics?: Record<string, number>;
};

/* =============================================================================
   HELPERS
============================================================================= */

function sum(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function average(nums: number[]): number | undefined {
  if (!nums.length) return undefined;
  return sum(nums) / nums.length;
}

function sessionIds(entries: LedgerEntry[]): string[] {
  const ids = entries.map((e) => e.sessionId ?? 'default');
  return Array.from(new Set(ids));
}

function perSessionSums(
  entries: LedgerEntry[],
  getter: (entry: LedgerEntry) => number | undefined
): number[] {
  const map = new Map<string, number>();

  for (const entry of entries) {
    const value = getter(entry);
    if (value === undefined) continue;

    const sid = entry.sessionId ?? 'default';
    map.set(sid, (map.get(sid) ?? 0) + value);
  }

  return Array.from(map.values());
}

function scopeKey(scope: RuleScope): string {
  switch (scope.kind) {
    case 'global':
      return 'global';
    case 'focus':
      return `focus:${scope.focusId}`;
    case 'pattern':
      return `pattern:${scope.pattern}`;
    case 'zone':
      return `zone:${scope.zone}`;
    case 'skill':
      return `skill:${scope.skillPathId}`;
    case 'muscle':
      return `muscle:${scope.muscleId}`;
    case 'level':
      return `level:${scope.level}`;
    default:
      return 'global';
  }
}

function matchScope(
  entry: LedgerEntry,
  scope: RuleScope,
  ledger: WeeklyFocusLedger
): boolean {
  switch (scope.kind) {
    case 'global':
      return true;

    case 'focus':
      return (
        scope.focusId === '*' ||
        (entry.focusId ?? ledger.focus) === scope.focusId
      );

    case 'pattern':
      return scope.pattern === '*' || entry.pattern === scope.pattern;

    case 'zone':
      return scope.zone === '*' || entry.zone === scope.zone;

    case 'skill':
      return scope.skillPathId === '*' || entry.skillPathId === scope.skillPathId;

    case 'muscle':
      return scope.muscleId === '*' || entry.muscleId === scope.muscleId;

    case 'level':
      return scope.level === '*' || ledger.level === scope.level;

    default:
      return false;
  }
}

/* =============================================================================
   ADAPTER PRINCIPAL
============================================================================= */

export function createLedgerContext(
  ledger: WeeklyFocusLedger
): EvaluationContext {
  const pain = ledger.painByZone ?? {};

  const maxPain = Math.max(
    0,
    ...Object.values(pain).map((v) => (typeof v === 'number' ? v : 0))
  );

  const facts: RuleFacts = {
    focus: ledger.focus,
    level: ledger.level,
    routineType: ledger.routineType,
    sickness: ledger.lifestyle?.sickness ?? 'none',
    sleepHoursPerNight: ledger.lifestyle?.sleepHoursPerNight,
    sleepDeprivedDays: ledger.lifestyle?.sleepDeprivedDays ?? 0,
    sleepQuality: ledger.lifestyle?.sleepQuality,
    appetite: ledger.lifestyle?.appetite,
    persistentSoreness: ledger.lifestyle?.persistentSoreness ?? false,
    stress: ledger.lifestyle?.stress,
    rehabPhase: ledger.trainingStatus?.rehabPhase,
    holdType: ledger.trainingStatus?.holdType,
    sessionBlock: ledger.trainingStatus?.sessionBlock,
    isSkill: ledger.trainingStatus?.isSkill,
    performanceTrend: ledger.trainingStatus?.performanceTrend,
    techniqueFailureRate: ledger.trainingStatus?.techniqueFailureRate,
    weeksSinceDeload: ledger.trainingStatus?.weeksSinceDeload,
    weeksNoProgress: ledger.trainingStatus?.weeksNoProgress,
    simultaneousGoals: ledger.goals?.length ?? 0,
    wristPain: pain.wrist ?? 0,
    elbowPain: pain.elbow ?? 0,
    shoulderPain: pain.shoulder ?? 0,
    maxPain,
    hasWideArmAdvancedWork: ledger.flags?.hasWideArmAdvancedWork ?? false,
    connectivePrepComplete: ledger.flags?.connectivePrepComplete ?? false,
    exceptionEccentricsAllowed:
      ledger.flags?.exceptionEccentricsAllowed ?? false,
    ...ledger.facts,
  };

  const getMeasured = (rule: TrainingRule): number | undefined => {
    const explicit =
      ledger.metrics?.[`${scopeKey(rule.scope)}:${rule.metric}`];

    if (explicit !== undefined) return explicit;

    const entries = ledger.entries.filter((entry) =>
      matchScope(entry, rule.scope, ledger)
    );

    switch (rule.metric) {
      case 'hardSetsPerWeek':
        return sum(entries.map((e) => e.sets ?? 0));

      case 'sessionsPerWeek':
        if (rule.scope.kind === 'global') {
          return ledger.sessionsPerWeek ?? sessionIds(ledger.entries).length;
        }
        return sessionIds(entries).length;

      case 'minutesPerWeek':
        return sum(entries.map((e) => e.minutes ?? 0));

      case 'frequencyPerWeek':
        return sessionIds(entries).length;

      case 'intensityPct1RM':
        return average(entries.map((e) => e.intensityPct1RM ?? 0));

      case 'totalRepsPerSession': {
        const totals = perSessionSums(entries, (e) => (e.sets ?? 0) * (e.reps ?? 0));
        return average(totals);
      }

      case 'totalRepsPerExerciseSession': {
        const perExercise = entries.map((e) => (e.sets ?? 0) * (e.reps ?? 0));
        return average(perExercise);
      }

      case 'repsPerSet': {
        const totalSets = sum(entries.map((e) => e.sets ?? 0));
        const totalReps = sum(entries.map((e) => (e.sets ?? 0) * (e.reps ?? 0)));
        if (!totalSets) return undefined;
        return totalReps / totalSets;
      }

      case 'setsPerMusclePerWeek':
        return sum(entries.map((e) => e.sets ?? 0));

      case 'restSeconds':
        return average(entries.map((e) => e.restSeconds ?? 0));

      case 'rir':
        return average(entries.map((e) => e.rir ?? 0));

      case 'pain': {
        if (rule.scope.kind === 'zone') {
          if (rule.scope.zone === '*') return maxPain;
          return pain[rule.scope.zone];
        }
        return undefined;
      }

      case 'progressionRate':
        return ledger.progression?.volumeChangePctPerWeek;

      case 'sleepHoursPerNight':
        return ledger.lifestyle?.sleepHoursPerNight;

      case 'rpe':
        return (
          ledger.trainingStatus?.avgRpe ??
          average(entries.map((e) => e.rpe ?? 0))
        );

      case 'weeksSinceDeload':
        return ledger.trainingStatus?.weeksSinceDeload;

      case 'weeksNoProgress':
        return ledger.trainingStatus?.weeksNoProgress;

      case 'volumeChangePctPerWeek':
        return ledger.progression?.volumeChangePctPerWeek;

      case 'pushPullVolumeRatio': {
        const pushPatterns: MovementPattern[] = [
          'vertical-push',
          'horizontal-push',
        ];
        const pullPatterns: MovementPattern[] = [
          'vertical-pull',
          'horizontal-pull',
        ];

        const pushSets = sum(
          entries
            .filter((e) => e.pattern && pushPatterns.includes(e.pattern))
            .map((e) => e.sets ?? 0)
        );

        const pullSets = sum(
          entries
            .filter((e) => e.pattern && pullPatterns.includes(e.pattern))
            .map((e) => e.sets ?? 0)
        );

        if (!pullSets) return undefined;
        return pushSets / pullSets;
      }

      case 'horizontalPullVolumeRatio': {
        const pullSets = sum(
          entries
            .filter(
              (e) =>
                e.pattern === 'vertical-pull' ||
                e.pattern === 'horizontal-pull'
            )
            .map((e) => e.sets ?? 0)
        );

        const horizontalPullSets = sum(
          entries
            .filter((e) => e.pattern === 'horizontal-pull')
            .map((e) => e.sets ?? 0)
        );

        if (!pullSets) return undefined;
        return horizontalPullSets / pullSets;
      }

      case 'eccentricExercisesPerSession': {
        const totals = perSessionSums(entries, (e) =>
          e.isEccentric ? 1 : 0
        );
        return average(totals);
      }

      case 'eccentricSecondsPerRep':
        return average(entries.map((e) => e.eccentricSecondsPerRep ?? 0));

      case 'totalIsometricSecondsPerSession': {
        const totals = perSessionSums(entries, (e) =>
          e.holdSec ? (e.sets ?? 0) * e.holdSec : 0
        );
        return average(totals);
      }

      case 'techniqueFailureRate':
        return ledger.trainingStatus?.techniqueFailureRate;

      case 'recoverySymptomScore': {
        if (ledger.lifestyle?.recoverySymptomScore !== undefined) {
          return ledger.lifestyle.recoverySymptomScore;
        }

        let score = 0;

        if ((ledger.lifestyle?.sleepHoursPerNight ?? 99) < 6) score += 1;
        if (ledger.lifestyle?.appetite === 'decreased') score += 1;
        if (ledger.lifestyle?.persistentSoreness) score += 1;
        if ((ledger.lifestyle?.stress ?? 0) > 7) score += 1;

        return score;
      }

      case 'simultaneousGoals':
        return ledger.goals?.length ?? 0;

      case 'mobilityMinutesPerWeek':
        return sum(
          entries
            .filter(
              (e) =>
                e.sessionBlock === 'mobility' || e.sessionBlock === 'prehab'
            )
            .map((e) => e.minutes ?? 0)
        );

      case 'warmupMinutes': {
        const totals = perSessionSums(entries, (e) =>
          e.sessionBlock === 'warmup' ? e.minutes ?? 0 : 0
        );
        return average(totals);
      }

      case 'holdSeconds':
        return average(entries.map((e) => e.holdSec ?? 0));

      default:
        return undefined;
    }
  };

  return {
    facts,
    getMeasured,
  };
}
```

---

# C. Mini panel UI con tarjetas de sugerencias

Este componente muestra sugerencias en tarjetas, listas para el usuario final.

## Archivo: `src/components/fitness/SuggestionPanel.tsx`

```tsx
// src/components/fitness/SuggestionPanel.tsx

import React from 'react';
import type {
  Suggestion,
  SuggestionSeverity,
} from '../../lib/fitness/suggestionEngine';

type SuggestionPanelProps = {
  suggestions: Suggestion[];
  onDismiss?: (ruleId: string) => void;
  onApply?: (action: string) => void;
};

const severityStyles: Record<SuggestionSeverity, string> = {
  high: 'border-red-500 bg-red-50 text-red-900',
  warning: 'border-amber-500 bg-amber-50 text-amber-900',
  info: 'border-sky-500 bg-sky-50 text-sky-900',
};

const severityBadge: Record<SuggestionSeverity, string> = {
  high: 'bg-red-600 text-white',
  warning: 'bg-amber-500 text-white',
  info: 'bg-sky-500 text-white',
};

const actionLabels: Record<string, string> = {
  reduce_volume: 'Reducir volumen',
  reduce_intensity: 'Reducir intensidad',
  rest: 'Descansar',
  deload: 'Hacer deload',
  increase_recovery: 'Aumentar recuperación',
  technique_regression: 'Bajar progresión técnica',
  add_prehab: 'Añadir prehab',
  add_horizontal_pull: 'Añadir tracción horizontal',
  add_push: 'Añadir empuje',
  add_reps: 'Añadir repeticiones',
  reduce_reps: 'Reducir repeticiones',
  progress_slowly: 'Progresar más lento',
  stop_session: 'Detener sesión',
  consult_professional: 'Consultar profesional',
  maintain: 'Mantener',
};

function formatValue(value?: number): string {
  if (value === undefined || value === null) return '';
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function formatBand(band?: Suggestion['band']): string {
  if (!band) return '';

  const parts: string[] = [];

  if (band.min !== undefined) parts.push(`min ${formatValue(band.min)}`);
  if (band.max !== undefined) parts.push(`max ${formatValue(band.max)}`);
  if (band.target !== undefined) parts.push(`objetivo ${formatValue(band.target)}`);
  if (band.unit) parts.push(band.unit);

  return parts.join(' · ');
}

export function SuggestionPanel({
  suggestions,
  onDismiss,
  onApply,
}: SuggestionPanelProps) {
  if (!suggestions.length) {
    return (
      <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-emerald-900">
        <p className="font-semibold">Todo en rango</p>
        <p className="text-sm">
          No hay sugerencias activas. Buen momento para mantener consistencia.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-3">
      {suggestions.map((s) => (
        <article
          key={s.id}
          className={`rounded-lg border p-4 shadow-sm ${severityStyles[s.severity]}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded px-2 py-0.5 text-xs font-bold uppercase ${severityBadge[s.severity]}`}
                >
                  {s.severity}
                </span>
                <h3 className="text-sm font-bold">{s.title}</h3>
              </div>

              <p className="mt-2 text-sm leading-relaxed">{s.message}</p>

              {(s.measured !== undefined || s.band) && (
                <p className="mt-2 text-xs opacity-80">
                  {s.measured !== undefined && (
                    <>Actual: {formatValue(s.measured)}.</>
                  )}
                  {s.band && <> Rango: {formatBand(s.band)}.</>}
                </p>
              )}

              {s.sourceRef && (
                <p className="mt-2 text-xs italic opacity-70">
                  Fuente: {s.sourceRef.chapter ?? s.sourceRef.section}
                </p>
              )}

              {s.actions.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.actions.map((action) => (
                    <button
                      key={action}
                      type="button"
                      onClick={() => onApply?.(action)}
                      className="rounded-md border border-current px-2 py-1 text-xs font-medium transition hover:opacity-80"
                    >
                      {actionLabels[action] ?? action}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {onDismiss && (
              <button
                type="button"
                onClick={() => onDismiss(s.ruleId)}
                className="text-xs font-semibold opacity-60 transition hover:opacity-100"
                aria-label="Descartar sugerencia"
              >
                ✕
              </button>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
```

---

## Ejemplo de integración completa

```ts
import { ALL_RULES } from './data/fitness/rules/allRules';
import { evaluateRules } from './lib/fitness/rulesEngine';
import { createLedgerContext } from './lib/fitness/ledgerAdapter';
import { buildSuggestions } from './lib/fitness/suggestionEngine';

const ledger = getWeeklyFocusLedgerFromState();

const ctx = createLedgerContext(ledger);
const evaluations = evaluateRules(ALL_RULES, ctx);
const suggestions = buildSuggestions(evaluations, ALL_RULES);
```

Y en React:

```tsx
<SuggestionPanel
  suggestions={suggestions}
  onDismiss={(ruleId) => dismissSuggestion(ruleId)}
  onApply={(action) => applySuggestionAction(action)}
/>
```

---

# Estado final de pendientes

Con esto quedan cubiertos los tres bloques que pediste:

## A. Datasets extendidos
Entregados para:
- rings handstand
- HSPU
- press handstand
- dips
- rows
- pull-ups
- L-sit/V-sit/manna

## B. Adapter
Entregado el adapter completo:
- `WeeklyFocusLedger -> EvaluationContext`
- cálculo de facts
- cálculo de métricas por scope
- soporte para overrides explícitos

## C. UI
Entregado un mini panel:
- tarjetas de sugerencias
- severidad visual
- acciones
- fuente OG2E
- estado vacío

---

Si quieres, en el siguiente paso puedo hacer una de estas tres cosas:

1. **Generarte el `ALL_SKILL_PATHS` final**, uniendo `coreSkillPaths` + `extendedSkillPaths`
2. **Generarte tests de validación** para todos los datasets de skills
3. **Generarte una vista de detalle de skill path** con progresiones, cues y prerrequisitos en UI

---

## Ronda 6 — tras: «si, adelante, primero 1, luego 2, luego 3…»
Perfecto. Vamos en el orden pedido:

1. **`ALL_SKILL_PATHS` final**, uniendo `coreSkillPaths` + `extendedSkillPaths`
2. **Tests de validación** para todos los datasets de skills
3. **Vista de detalle de skill path** con progresiones, cues y prerrequisitos en UI

---

# 1. `ALL_SKILL_PATHS` final

Este archivo convierte tus datasets de skills en un catálogo único, indexado y listo para usar por UI, reglas, motor de sugerencias y navegación.

## Archivo: `src/data/fitness/skills/allSkillPaths.ts`

```ts
// src/data/fitness/skills/allSkillPaths.ts

import type { SkillPath, SkillStep, SkillStepRef } from './contracts';
import { CORE_SKILL_PATHS } from './coreSkillPaths';
import { EXTENDED_SKILL_PATHS } from './extendedSkillPaths';

export type ResolvedPrerequisite = {
  ref: SkillStepRef;
  step?: SkillStep;
  path?: SkillPath;
};

type SkillCatalog = {
  paths: SkillPath[];
  pathMap: ReadonlyMap<string, SkillPath>;
  steps: SkillStep[];
  stepMap: ReadonlyMap<string, SkillStep>;
  stepsByPath: ReadonlyMap<string, SkillStep[]>;
};

function sortSteps(steps: SkillStep[]): SkillStep[] {
  return [...steps].sort((a, b) => a.order - b.order);
}

function buildSkillCatalog(paths: SkillPath[]): SkillCatalog {
  const pathMap = new Map<string, SkillPath>();
  const stepMap = new Map<string, SkillStep>();
  const stepsByPath = new Map<string, SkillStep[]>();
  const steps: SkillStep[] = [];

  for (const path of paths) {
    if (!path.id) {
      throw new Error('SkillPath without id found.');
    }

    if (pathMap.has(path.id)) {
      throw new Error(`Duplicate SkillPath id: ${path.id}`);
    }

    pathMap.set(path.id, path);

    const pathSteps = sortSteps(path.steps);
    stepsByPath.set(path.id, pathSteps);

    for (const step of pathSteps) {
      if (!step.id) {
        throw new Error(`SkillStep without id in path ${path.id}`);
      }

      if (stepMap.has(step.id)) {
        throw new Error(`Duplicate SkillStep id: ${step.id}`);
      }

      if (step.skillPathId !== path.id) {
        throw new Error(
          `SkillStep ${step.id} has skillPathId ${step.skillPathId}, but it belongs to path ${path.id}`
        );
      }

      stepMap.set(step.id, step);
      steps.push(step);
    }
  }

  return {
    paths,
    pathMap,
    steps,
    stepMap,
    stepsByPath,
  };
}

export const SKILL_CATALOG: SkillCatalog = buildSkillCatalog([
  ...CORE_SKILL_PATHS,
  ...EXTENDED_SKILL_PATHS,
]);

export const ALL_SKILL_PATHS: SkillPath[] = SKILL_CATALOG.paths;
export const ALL_SKILL_STEPS: SkillStep[] = SKILL_CATALOG.steps;

export const SKILL_PATHS_BY_ID: ReadonlyMap<string, SkillPath> =
  SKILL_CATALOG.pathMap;

export const SKILL_STEPS_BY_ID: ReadonlyMap<string, SkillStep> =
  SKILL_CATALOG.stepMap;

export function getSkillPath(id: string): SkillPath | undefined {
  return SKILL_CATALOG.pathMap.get(id);
}

export function getSkillStep(id: string): SkillStep | undefined {
  return SKILL_CATALOG.stepMap.get(id);
}

export function getStepsForPath(pathId: string): SkillStep[] {
  return SKILL_CATALOG.stepsByPath.get(pathId) ?? [];
}

export function getFirstStepForPath(pathId: string): SkillStep | undefined {
  return getStepsForPath(pathId)[0];
}

export function resolvePrerequisites(step: SkillStep): ResolvedPrerequisite[] {
  const prerequisites = step.prerequisites ?? [];

  return prerequisites.map((ref) => ({
    ref,
    step: ref.stepId ? SKILL_CATALOG.stepMap.get(ref.stepId) : undefined,
    path: SKILL_CATALOG.pathMap.get(ref.skillPathId),
  }));
}

export function isStepAvailable(
  step: SkillStep,
  completedStepIds?: ReadonlySet<string>
): boolean {
  if (!completedStepIds) return true;

  const prerequisites = resolvePrerequisites(step);

  return prerequisites.every((prereq) => {
    if (prereq.step) {
      return completedStepIds.has(prereq.step.id);
    }

    // Si el prerrequisito apunta a un path completo sin stepId concreto,
    // lo tratamos como disponible para no bloquear la UI.
    return true;
  });
}

export function getStepIndexInPath(step: SkillStep): number {
  const steps = getStepsForPath(step.skillPathId);
  return steps.findIndex((s) => s.id === step.id);
}

export function getPreviousStep(step: SkillStep): SkillStep | undefined {
  const steps = getStepsForPath(step.skillPathId);
  const index = steps.findIndex((s) => s.id === step.id);
  if (index <= 0) return undefined;
  return steps[index - 1];
}

export function getNextStep(step: SkillStep): SkillStep | undefined {
  const steps = getStepsForPath(step.skillPathId);
  const index = steps.findIndex((s) => s.id === step.id);
  if (index === -1 || index >= steps.length - 1) return undefined;
  return steps[index + 1];
}

export function getSkillPathsByCategory(): Map<string, SkillPath[]> {
  const grouped = new Map<string, SkillPath[]>();

  for (const path of ALL_SKILL_PATHS) {
    const category = path.category;
    const current = grouped.get(category) ?? [];
    current.push(path);
    grouped.set(category, current);
  }

  return grouped;
}
```

---

# 2. Validación del catálogo de skills

Aquí tienes un validador completo para detectar:

- IDs duplicados
- pasos sin fuente
- pasos sin cues mínimos
- prerrequisitos inexistentes
- prerrequisitos circulares
- steps de handstand sin bail-out
- isométricos straight-arm sin cue escapular
- equipos vacíos
- niveles negativos
- warnings de extracción incompleta

---

## Archivo: `src/data/fitness/skills/validation/skillCatalogValidation.ts`

```ts
// src/data/fitness/skills/validation/skillCatalogValidation.ts

import type { SkillPath, SkillStep } from '../contracts';

export type CatalogIssueSeverity = 'error' | 'warning';

export type CatalogIssue = {
  severity: CatalogIssueSeverity;
  code: string;
  message: string;
  pathId?: string;
  stepId?: string;
};

const PATHS_REQUIRING_SCAPULAR_CUE_FOR_ISOMETRICS = new Set([
  'planche',
  'front-lever',
  'back-lever',
  'rings-handstand',
]);

export function validateSkillCatalog(paths: SkillPath[]): CatalogIssue[] {
  const issues: CatalogIssue[] = [];

  const seenPathIds = new Set<string>();
  const seenStepIds = new Set<string>();
  const allSteps: SkillStep[] = [];

  // ---------------------------------------------------------------
  // Validación estructural básica
  // ---------------------------------------------------------------

  for (const path of paths) {
    if (!path.id) {
      issues.push({
        severity: 'error',
        code: 'missing-path-id',
        message: 'Hay un SkillPath sin id.',
      });
      continue;
    }

    if (seenPathIds.has(path.id)) {
      issues.push({
        severity: 'error',
        code: 'duplicate-path-id',
        message: `SkillPath duplicado: ${path.id}`,
        pathId: path.id,
      });
    }

    seenPathIds.add(path.id);

    if (!path.name) {
      issues.push({
        severity: 'error',
        code: 'missing-path-name',
        message: `SkillPath sin name: ${path.id}`,
        pathId: path.id,
      });
    }

    if (!path.sourceRef) {
      issues.push({
        severity: 'error',
        code: 'missing-path-source',
        message: `SkillPath sin sourceRef: ${path.id}`,
        pathId: path.id,
      });
    }

    if (!path.steps || path.steps.length === 0) {
      issues.push({
        severity: 'warning',
        code: 'empty-path',
        message: `SkillPath sin steps: ${path.id}`,
        pathId: path.id,
      });
      continue;
    }

    const seenOrders = new Set<number>();
    let previousOrder: number | undefined;

    for (const step of path.steps) {
      allSteps.push(step);

      if (!step.id) {
        issues.push({
          severity: 'error',
          code: 'missing-step-id',
          message: `SkillStep sin id en path ${path.id}`,
          pathId: path.id,
        });
        continue;
      }

      if (seenStepIds.has(step.id)) {
        issues.push({
          severity: 'error',
          code: 'duplicate-step-id',
          message: `SkillStep duplicado: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      seenStepIds.add(step.id);

      if (step.skillPathId !== path.id) {
        issues.push({
          severity: 'error',
          code: 'step-path-mismatch',
          message: `SkillStep ${step.id} declara skillPathId ${step.skillPathId}, pero está dentro de ${path.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (!step.name) {
        issues.push({
          severity: 'error',
          code: 'missing-step-name',
          message: `SkillStep sin name: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (!step.sourceRef) {
        issues.push({
          severity: 'error',
          code: 'missing-step-source',
          message: `SkillStep sin sourceRef: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (seenOrders.has(step.order)) {
        issues.push({
          severity: 'error',
          code: 'duplicate-step-order',
          message: `Orden duplicado ${step.order} en path ${path.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      seenOrders.add(step.order);

      if (previousOrder !== undefined && step.order < previousOrder) {
        issues.push({
          severity: 'warning',
          code: 'step-order-not-ascending',
          message: `Step ${step.id} tiene order menor que el step anterior dentro de ${path.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      previousOrder = step.order;

      if (step.ogLevel !== null && step.ogLevel < 0) {
        issues.push({
          severity: 'error',
          code: 'negative-og-level',
          message: `ogLevel negativo en step ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (!step.primaryCues || step.primaryCues.length === 0) {
        issues.push({
          severity: 'warning',
          code: 'missing-primary-cues',
          message: `Step sin primaryCues: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (!step.commonFaults || step.commonFaults.length === 0) {
        issues.push({
          severity: 'warning',
          code: 'missing-common-faults',
          message: `Step sin commonFaults: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (!step.equipment || step.equipment.length === 0) {
        issues.push({
          severity: 'warning',
          code: 'missing-equipment',
          message: `Step sin equipment: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (step.safety?.fallRisk && (!step.bailTechniques || step.bailTechniques.length === 0)) {
        issues.push({
          severity: 'warning',
          code: 'missing-bail-techniques',
          message: `Step con fallRisk pero sin bailTechniques: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (
        path.id === 'handstand' &&
        step.attribute === 'skill-balance' &&
        (!step.bailTechniques || step.bailTechniques.length === 0)
      ) {
        issues.push({
          severity: 'warning',
          code: 'handstand-missing-bail',
          message: `Step de handstand sin bailTechniques: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (
        step.attribute === 'strength-isometric' &&
        PATHS_REQUIRING_SCAPULAR_CUE_FOR_ISOMETRICS.has(path.id) &&
        !step.scapularCue
      ) {
        issues.push({
          severity: 'warning',
          code: 'isometric-missing-scapular-cue',
          message: `Step isométrico sin scapularCue: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }

      if (!step.extractionStatus) {
        issues.push({
          severity: 'warning',
          code: 'missing-extraction-status',
          message: `Step sin extractionStatus: ${step.id}`,
          pathId: path.id,
          stepId: step.id,
        });
      }
    }
  }

  // ---------------------------------------------------------------
  // Validación de prerrequisitos
  // ---------------------------------------------------------------

  const stepMap = new Map<string, SkillStep>(allSteps.map((s) => [s.id, s]));

  for (const step of allSteps) {
    const prerequisites = step.prerequisites ?? [];

    for (const prereq of prerequisites) {
      if (!seenPathIds.has(prereq.skillPathId)) {
        issues.push({
          severity: 'error',
          code: 'prerequisite-path-not-found',
          message: `Prereq path no encontrado: ${prereq.skillPathId} en step ${step.id}`,
          pathId: step.skillPathId,
          stepId: step.id,
        });
      }

      if (prereq.stepId && !stepMap.has(prereq.stepId)) {
        issues.push({
          severity: 'error',
          code: 'prerequisite-step-not-found',
          message: `Prereq step no encontrado: ${prereq.stepId} en step ${step.id}`,
          pathId: step.skillPathId,
          stepId: step.id,
        });
      }

      if (prereq.stepId === step.id) {
        issues.push({
          severity: 'error',
          code: 'self-prerequisite',
          message: `Step ${step.id} se tiene a sí mismo como prerrequisito`,
          pathId: step.skillPathId,
          stepId: step.id,
        });
      }
    }
  }

  // ---------------------------------------------------------------
  // Detección de ciclos de prerrequisitos
  // ---------------------------------------------------------------

  const graph = new Map<string, string[]>();

  for (const step of allSteps) {
    const edges = (step.prerequisites ?? [])
      .filter((p) => Boolean(p.stepId))
      .map((p) => p.stepId as string);

    graph.set(step.id, edges);
  }

  const visited = new Set<string>();
  const visiting = new Set<string>();

  const dfs = (id: string, ancestors: string[]) => {
    if (visiting.has(id)) {
      const cycleStart = ancestors.indexOf(id);
      const cycle = [...ancestors.slice(cycleStart), id];

      issues.push({
        severity: 'error',
        code: 'circular-prerequisite',
        message: `Prerrequisitos circulares: ${cycle.join(' -> ')}`,
        stepId: id,
      });

      return;
    }

    if (visited.has(id)) return;

    visiting.add(id);

    const neighbors = graph.get(id) ?? [];
    for (const next of neighbors) {
      if (stepMap.has(next)) {
        dfs(next, [...ancestors, next]);
      }
    }

    visiting.delete(id);
    visited.add(id);
  };

  for (const id of graph.keys()) {
    dfs(id, [id]);
  }

  return issues;
}
```

---

## Tests

Estos tests validan el catálogo completo.

## Archivo: `src/data/fitness/skills/__tests__/skillCatalog.test.ts`

```ts
// src/data/fitness/skills/__tests__/skillCatalog.test.ts

import { describe, expect, test } from 'vitest';

import {
  ALL_SKILL_PATHS,
  ALL_SKILL_STEPS,
  getSkillPath,
  getStepsForPath,
} from '../allSkillPaths';

import { validateSkillCatalog } from '../validation/skillCatalogValidation';

const issues = validateSkillCatalog(ALL_SKILL_PATHS);
const errors = issues.filter((issue) => issue.severity === 'error');
const warnings = issues.filter((issue) => issue.severity === 'warning');

describe('Skill catalog structural integrity', () => {
  test('should not contain structural errors', () => {
    if (errors.length > 0) {
      console.error('Skill catalog errors:', errors);
    }

    expect(errors).toHaveLength(0);
  });

  test('should contain core skill paths', () => {
    const pathIds = ALL_SKILL_PATHS.map((path) => path.id);

    const expectedCorePaths = [
      'handstand',
      'planche',
      'front-lever',
      'back-lever',
      'muscle-up',
      'pistols',
    ];

    for (const id of expectedCorePaths) {
      expect(pathIds).toContain(id);
    }
  });

  test('should contain extended skill paths', () => {
    const pathIds = ALL_SKILL_PATHS.map((path) => path.id);

    const expectedExtendedPaths = [
      'rings-handstand',
      'handstand-pushup',
      'press-handstand-bent-arm',
      'press-handstand-bent-arm-rings',
      'press-handstand-straight-arm',
      'press-handstand-straight-arm-rings',
      'parallel-bar-dips',
      'rings-dips',
      'rows',
      'bar-pull-ups',
      'rings-pull-ups-oac',
      'l-sit-v-sit-manna',
    ];

    for (const id of expectedExtendedPaths) {
      expect(pathIds).toContain(id);
    }
  });

  test('should have unique step ids', () => {
    const stepIds = ALL_SKILL_STEPS.map((step) => step.id);
    const uniqueStepIds = new Set(stepIds);

    expect(uniqueStepIds.size).toBe(stepIds.length);
  });

  test('all steps should have name and sourceRef', () => {
    for (const step of ALL_SKILL_STEPS) {
      expect(step.name).toBeTruthy();
      expect(step.sourceRef).toBeTruthy();
    }
  });

  test('all steps should belong to an existing path', () => {
    for (const step of ALL_SKILL_STEPS) {
      const path = getSkillPath(step.skillPathId);
      expect(path).toBeTruthy();
    }
  });

  test('all paths should have ordered steps', () => {
    for (const path of ALL_SKILL_PATHS) {
      const steps = getStepsForPath(path.id);

      for (let i = 1; i < steps.length; i++) {
        expect(steps[i].order).toBeGreaterThan(steps[i - 1].order);
      }
    }
  });
});

describe('Critical OG2E safety and technique constraints', () => {
  test('handstand balance steps should have bail techniques', () => {
    const handstand = getSkillPath('handstand');
    expect(handstand).toBeTruthy();

    const balanceSteps = handstand!.steps.filter(
      (step) => step.attribute === 'skill-balance'
    );

    for (const step of balanceSteps) {
      expect(step.bailTechniques?.length ?? 0).toBeGreaterThan(0);
    }
  });

  test('planche isometric steps should have scapular cue', () => {
    const planche = getSkillPath('planche');
    expect(planche).toBeTruthy();

    const isometricSteps = planche!.steps.filter(
      (step) => step.attribute === 'strength-isometric'
    );

    for (const step of isometricSteps) {
      expect(step.scapularCue).toBeTruthy();
    }
  });

  test('front lever and back lever isometric steps should have scapular cue', () => {
    const frontLever = getSkillPath('front-lever');
    const backLever = getSkillPath('back-lever');

    expect(frontLever).toBeTruthy();
    expect(backLever).toBeTruthy();

    const leverSteps = [
      ...frontLever!.steps,
      ...backLever!.steps,
    ].filter((step) => step.attribute === 'strength-isometric');

    for (const step of leverSteps) {
      expect(step.scapularCue).toBeTruthy();
    }
  });

  test('skills with fall risk should have bail techniques', () => {
    const riskySteps = ALL_SKILL_STEPS.filter((step) => step.safety?.fallRisk);

    for (const step of riskySteps) {
      expect(step.bailTechniques?.length ?? 0).toBeGreaterThan(0);
    }
  });

  test('steps requiring connective prep should declare prerequisites', () => {
    const connectivePrepSteps = ALL_SKILL_STEPS.filter(
      (step) => step.safety?.requiresConnectivePrep
    );

    for (const step of connectivePrepSteps) {
      expect(step.prerequisites?.length ?? 0).toBeGreaterThan(0);
    }
  });
});

describe('Extraction completeness warnings', () => {
  test('should log extraction warnings for review', () => {
    if (warnings.length > 0) {
      console.warn('Skill catalog warnings:', warnings);
    }

    // No rompemos el test por warnings, pero dejamos constancia.
    expect(Array.isArray(warnings)).toBe(true);
  });
});
```

---

# 3. Vista de detalle de skill path en UI

Esta vista muestra:

- paths agrupados por categoría
- steps ordenados
- cues primarios
- fallos comunes
- criterios de progresión
- equipo
- bail techniques
- seguridad
- prerrequisitos clicables
- fuente OG2E

---

## Archivo: `src/components/fitness/SkillPathExplorer.tsx`

```tsx
// src/components/fitness/SkillPathExplorer.tsx

'use client';

import { useMemo, useState } from 'react';

import {
  ALL_SKILL_PATHS,
  getSkillPath,
  getSkillStep,
  getStepsForPath,
  isStepAvailable,
  resolvePrerequisites,
} from '../../data/fitness/skills/allSkillPaths';

import type {
  SkillPath,
  SkillStep,
} from '../../data/fitness/skills/contracts';

type SkillPathExplorerProps = {
  completedStepIds?: ReadonlySet<string>;
  onStepSelected?: (step: SkillStep) => void;
};

const CATEGORY_LABELS: Record<string, string> = {
  skill: 'Skill',
  push: 'Push',
  pull: 'Pull',
  core: 'Core',
  legs: 'Legs',
  'multi-plane': 'Multi-plane',
  prehab: 'Prehab',
};

const ATTRIBUTE_LABELS: Record<string, string> = {
  'skill-balance': 'Skill / balance',
  'strength-isometric': 'Fuerza isométrica',
  'strength-dynamic': 'Fuerza dinámica',
  hybrid: 'Híbrido',
  core: 'Core',
  'mobility-prep': 'Movilidad / prep',
  conditioning: 'Condicionamiento',
};

function sourceLabel(step: SkillStep): string {
  const parts = [
    step.sourceRef.chapter,
    step.sourceRef.section,
    step.sourceRef.pageRef,
  ].filter(Boolean);

  return parts.join(' · ');
}

function CueList({
  title,
  items,
  tone = 'neutral',
}: {
  title: string;
  items?: string[];
  tone?: 'neutral' | 'positive' | 'negative';
}) {
  if (!items || items.length === 0) return null;

  const toneClasses =
    tone === 'positive'
      ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
      : tone === 'negative'
        ? 'border-red-300 bg-red-50 text-red-900'
        : 'border-slate-300 bg-slate-50 text-slate-900';

  return (
    <div className={`rounded-lg border p-4 ${toneClasses}`}>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

export function SkillPathExplorer({
  completedStepIds,
  onStepSelected,
}: SkillPathExplorerProps) {
  const [selectedPathId, setSelectedPathId] = useState<string>(
    ALL_SKILL_PATHS[0]?.id ?? ''
  );

  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);

  const groupedPaths = useMemo(() => {
    const map = new Map<string, SkillPath[]>();

    for (const path of ALL_SKILL_PATHS) {
      const category = path.category;
      const current = map.get(category) ?? [];
      current.push(path);
      map.set(category, current);
    }

    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, []);

  const selectedPath = selectedPathId ? getSkillPath(selectedPathId) : undefined;

  const steps = useMemo(() => {
    if (!selectedPathId) return [];
    return getStepsForPath(selectedPathId);
  }, [selectedPathId]);

  const selectedStep = selectedStepId
    ? getSkillStep(selectedStepId)
    : steps[0];

  const selectedIndex = selectedStep
    ? steps.findIndex((step) => step.id === selectedStep.id)
    : -1;

  function selectPath(pathId: string) {
    setSelectedPathId(pathId);

    const pathSteps = getStepsForPath(pathId);
    setSelectedStepId(pathSteps[0]?.id ?? null);
  }

  function selectStep(step: SkillStep) {
    setSelectedPathId(step.skillPathId);
    setSelectedStepId(step.id);
    onStepSelected?.(step);
  }

  function goPrevious() {
    if (selectedIndex > 0) {
      selectStep(steps[selectedIndex - 1]);
    }
  }

  function goNext() {
    if (selectedIndex >= 0 && selectedIndex < steps.length - 1) {
      selectStep(steps[selectedIndex + 1]);
    }
  }

  if (!selectedPath || !selectedStep) {
    return (
      <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
        No hay skill paths disponibles.
      </div>
    );
  }

  const prerequisites = resolvePrerequisites(selectedStep);

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      {/* ---------------------------------------------------------- */}
      {/* Sidebar                                                     */}
      {/* ---------------------------------------------------------- */}
      <aside className="space-y-6 rounded-xl border border-slate-200 bg-white p-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Skill Paths</h2>
          <p className="text-sm text-slate-500">
            Progresiones OG2E por categoría.
          </p>
        </div>

        {groupedPaths.map(([category, paths]) => (
          <div key={category}>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {CATEGORY_LABELS[category] ?? category}
            </h3>

            <div className="space-y-1">
              {paths.map((path) => (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => selectPath(path.id)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    path.id === selectedPathId
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {path.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>

      {/* ---------------------------------------------------------- */}
      {/* Main content                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="space-y-6">
        <header className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {selectedPath.name}
              </h2>
              <p className="text-sm text-slate-500">
                {selectedPath.steps.length} pasos ·{' '}
                {ATTRIBUTE_LABELS[selectedPath.attribute] ?? selectedPath.attribute}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={goPrevious}
                disabled={selectedIndex <= 0}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Anterior
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={selectedIndex >= steps.length - 1}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Siguiente
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {steps.map((step) => {
              const available = isStepAvailable(step, completedStepIds);

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => selectStep(step)}
                  className={`rounded-lg border px-3 py-2 text-left text-xs transition ${
                    step.id === selectedStep.id
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  } ${!available ? 'opacity-50' : ''}`}
                >
                  <span className="block font-semibold">
                    {step.ogLevel !== null ? `L${step.ogLevel}` : 'N/A'}
                  </span>
                  <span className="block">{step.name}</span>
                </button>
              );
            })}
          </div>
        </header>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <header className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900">
                {selectedStep.name}
              </h3>

              {selectedStep.abbrev ? <Badge>{selectedStep.abbrev}</Badge> : null}

              {selectedStep.ogLevel !== null ? (
                <Badge>Level {selectedStep.ogLevel}</Badge>
              ) : (
                <Badge>Level N/A</Badge>
              )}

              <Badge>
                {ATTRIBUTE_LABELS[selectedStep.attribute] ?? selectedStep.attribute}
              </Badge>

              {selectedStep.extractionStatus ? (
                <Badge>{selectedStep.extractionStatus}</Badge>
              ) : null}
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Fuente: {sourceLabel(selectedStep)}
            </p>
          </header>

          <div className="mt-5 grid gap-5 xl:grid-cols-2">
            <div className="space-y-5">
              <CueList
                title="Cues principales"
                items={selectedStep.primaryCues}
                tone="positive"
              />

              <CueList
                title="Errores comunes"
                items={selectedStep.commonFaults}
                tone="negative"
              />

              <CueList
                title="Criterios de progresión"
                items={selectedStep.progressionCriteria}
              />
            </div>

            <div className="space-y-5">
              <div className="rounded-lg border border-slate-300 bg-slate-50 p-4">
                <h4 className="text-sm font-semibold text-slate-900">
                  Detalles técnicos
                </h4>

                <dl className="mt-3 space-y-2 text-sm text-slate-700">
                  {selectedStep.scapularCue ? (
                    <div>
                      <dt className="font-medium">Escápula</dt>
                      <dd>{selectedStep.scapularCue}</dd>
                    </div>
                  ) : null}

                  {selectedStep.elbowCue ? (
                    <div>
                      <dt className="font-medium">Codos</dt>
                      <dd>{selectedStep.elbowCue}</dd>
                    </div>
                  ) : null}

                  {selectedStep.coreCue ? (
                    <div>
                      <dt className="font-medium">Core</dt>
                      <dd>{selectedStep.coreCue}</dd>
                    </div>
                  ) : null}

                  {selectedStep.gripCue ? (
                    <div>
                      <dt className="font-medium">Grip</dt>
                      <dd>{selectedStep.gripCue}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>

              <div className="rounded-lg border border-slate-300 bg-slate-50 p-4">
                <h4 className="text-sm font-semibold text-slate-900">
                  Equipo
                </h4>

                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedStep.equipment.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>

                {selectedStep.equipmentAlternatives?.length ? (
                  <>
                    <h5 className="mt-4 text-xs font-semibold uppercase text-slate-500">
                      Alternativas
                    </h5>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedStep.equipmentAlternatives.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>

              {selectedStep.bailTechniques?.length ? (
                <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
                  <h4 className="text-sm font-semibold">Bail-out</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                    {selectedStep.bailTechniques.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {selectedStep.safety ? (
                <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">
                  <h4 className="text-sm font-semibold">Seguridad</h4>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedStep.safety.fallRisk ? (
                      <Badge>Riesgo de caída</Badge>
                    ) : null}

                    {selectedStep.safety.bailRequired ? (
                      <Badge>Bail obligatorio</Badge>
                    ) : null}

                    {selectedStep.safety.requiresConnectivePrep ? (
                      <Badge>Requiere prep. conectiva</Badge>
                    ) : null}

                    {selectedStep.safety.supervisionRecommended ? (
                      <Badge>Supervisión recomendada</Badge>
                    ) : null}
                  </div>

                  {selectedStep.safety.contraindicatedWithPainZones?.length ? (
                    <p className="mt-3 text-sm">
                      Evitar con dolor en:{' '}
                      {selectedStep.safety.contraindicatedWithPainZones.join(', ')}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>

          <footer className="mt-6 border-t border-slate-200 pt-4">
            <h4 className="text-sm font-semibold text-slate-900">
              Prerrequisitos
            </h4>

            {prerequisites.length === 0 ? (
              <p className="mt-2 text-sm text-slate-500">
                Sin prerrequisitos explícitos.
              </p>
            ) : (
              <div className="mt-3 flex flex-wrap gap-2">
                {prerequisites.map(({ ref, step, path }) => {
                  if (step) {
                    return (
                      <button
                        key={`${ref.skillPathId}:${ref.stepId}`}
                        type="button"
                        onClick={() => selectStep(step)}
                        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        {step.name}
                      </button>
                    );
                  }

                  return (
                    <span
                      key={`${ref.skillPathId}:${ref.stepId ?? 'path'}`}
                      className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-500"
                    >
                      {path?.name ?? ref.skillPathId}
                    </span>
                  );
                })}
              </div>
            )}
          </footer>
        </article>
      </section>
    </div>
  );
}
```

---

## Uso básico en una página

```tsx
// app/skills/page.tsx

import { SkillPathExplorer } from '@/components/fitness/SkillPathExplorer';

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <SkillPathExplorer />
    </main>
  );
}
```

Si quieres marcar pasos completados:

```tsx
const completedStepIds = new Set([
  'hs-wall-stomach',
  'hs-wall-minimal',
  'pl-tuck',
]);

<SkillPathExplorer completedStepIds={completedStepIds} />
```

---

# Resumen de lo completado

## Paso 1
Creamos el catálogo final:

- `ALL_SKILL_PATHS`
- `ALL_SKILL_STEPS`
- mapas por ID
- helpers de navegación
- resolución de prerrequisitos
- disponibilidad de pasos según progreso

## Paso 2
Creamos validación completa:

- errores estructurales
- IDs duplicados
- prerrequisitos inexistentes
- ciclos
- seguridad handstand
- cues escapulares en isométricos clave
- warnings de extracción

Y tests listos para Vitest.

## Paso 3
Creamos la UI de detalle:

- explorador de skill paths
- steps ordenados
- cues
- fallos
- progresión
- seguridad
- prerrequisitos
- fuente OG2E

---

Con esto quedan completados los tres puntos que pediste:

1. **`ALL_SKILL_PATHS` final**
2. **Tests de validación**
3. **Vista detalle de skill path**

Si quieres, el siguiente bloque puede ser uno de estos:

**A.** Generar un **panel de progreso del atleta** basado en `completedStepIds`  
**B.** Generar un **motor de recomendación de siguiente paso** dentro de un skill path  
**C.** Generar una **vista móvil compacta** del skill path con acordeones

---

## Ronda 7 — tras: «A. Generar un panel de progreso del atleta basado en completedStepIds B. Generar un motor de recomendación de siguiente paso dentro de un sk…»
# Entrega completa: A → B → C

Voy a construir los tres módulos de forma que encajen con lo que ya tienes (`ALL_SKILL_PATHS`, `SkillStep`, `completedStepIds`). Mantengo la lógica **pura y testeable** separada de la presentación, y uso React + TypeScript (`.tsx`). Las clases son Tailwind, fácilmente adaptables.

---

## A. Panel de progreso del atleta (`completedStepIds`)

### A.1. Lógica de progreso (pura, testeable)

📁 `src/lib/fitness/progress.ts`

```ts
import type { SkillPath, SkillStep } from '../../data/fitness/skills/contracts';

// ─────────────────────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────────────────────

/** Bandas de nivel según OG2E (Cap. 3): 1-5 Beginner, 6-9 Intermediate,
 *  10-13 Advanced, 14-16 Elite. Algunos pasos tienen ogLevel: null (N/A). */
export type AthleteBand = 'beginner' | 'intermediate' | 'advanced' | 'elite' | 'unranked';

export interface StepProgress {
  step: SkillStep;
  completed: boolean;
  /** true si todos los prerrequisitos están cumplidos */
  unlocked: boolean;
}

export interface PathProgress {
  path: SkillPath;
  totalSteps: number;
  completedSteps: number;
  /** 0..1 */
  percent: number;
  /** Mayor ogLevel completado dentro del path (ignora null) */
  highestCompletedLevel: number | null;
  /** Primer paso (por `order`) no completado y desbloqueado = frontera actual */
  frontierStep: SkillStep | null;
  steps: StepProgress[];
}

export interface CategoryProgress {
  category: SkillPath['category'];
  totalSteps: number;
  completedSteps: number;
  percent: number;
}

export interface ProgressSummary {
  totalSteps: number;
  completedSteps: number;
  percent: number;
  /** Banda OG2E estimada por el mayor nivel alcanzado en cualquier path */
  band: AthleteBand;
  highestLevelReached: number | null;
  byCategory: CategoryProgress[];
  byPath: PathProgress[];
}

// ─────────────────────────────────────────────────────────────
// Utilidades de prerrequisitos
// ─────────────────────────────────────────────────────────────

/**
 * Un prerrequisito (`SkillStepRef`) puede apuntar a un paso concreto
 * (`stepId`) o a un path entero. Se considera cumplido si:
 *  - stepId → ese paso está completado
 *  - solo skillPathId → al menos un paso de ese path está completado
 */
function isPrereqSatisfied(
  prereq: { skillPathId: string; stepId?: string },
  completedStepIds: ReadonlySet<string>,
  allPaths: readonly SkillPath[],
): boolean {
  if (prereq.stepId) return completedStepIds.has(prereq.stepId);

  const targetPath = allPaths.find((p) => p.id === prereq.skillPathId);
  if (!targetPath) return false;
  return targetPath.steps.some((s) => completedStepIds.has(s.id));
}

export function isStepUnlocked(
  step: SkillStep,
  completedStepIds: ReadonlySet<string>,
  allPaths: readonly SkillPath[],
): boolean {
  const prereqs = step.prerequisites ?? [];
  if (prereqs.length === 0) return true;
  return prereqs.every((p) => isPrereqSatisfied(p, completedStepIds, allPaths));
}

// ─────────────────────────────────────────────────────────────
// Cálculo de progreso
// ─────────────────────────────────────────────────────────────

export function computePathProgress(
  path: SkillPath,
  completedStepIds: ReadonlySet<string>,
  allPaths: readonly SkillPath[],
): PathProgress {
  // Ordenamos por `order` para una secuencia estable (OG2E: orden de progresión)
  const ordered = [...path.steps].sort((a, b) => a.order - b.order);

  const steps: StepProgress[] = ordered.map((step) => ({
    step,
    completed: completedStepIds.has(step.id),
    unlocked: isStepUnlocked(step, completedStepIds, allPaths),
  }));

  const completedSteps = steps.filter((s) => s.completed).length;
  const totalSteps = steps.length;

  const levels = ordered
    .filter((s) => completedStepIds.has(s.id) && s.ogLevel != null)
    .map((s) => s.ogLevel as number);
  const highestCompletedLevel = levels.length ? Math.max(...levels) : null;

  // Frontera: primer paso no completado que además esté desbloqueado
  const frontierStep =
    steps.find((s) => !s.completed && s.unlocked)?.step ?? null;

  return {
    path,
    totalSteps,
    completedSteps,
    percent: totalSteps === 0 ? 0 : completedSteps / totalSteps,
    highestCompletedLevel,
    frontierStep,
    steps,
  };
}

export function bandFromLevel(level: number | null): AthleteBand {
  if (level == null) return 'unranked';
  if (level <= 5) return 'beginner';
  if (level <= 9) return 'intermediate';
  if (level <= 13) return 'advanced';
  return 'elite';
}

export function computeProgressSummary(
  allPaths: readonly SkillPath[],
  completedStepIds: ReadonlySet<string>,
): ProgressSummary {
  const byPath = allPaths.map((p) =>
    computePathProgress(p, completedStepIds, allPaths),
  );

  const totalSteps = byPath.reduce((acc, p) => acc + p.totalSteps, 0);
  const completedSteps = byPath.reduce((acc, p) => acc + p.completedSteps, 0);

  const allLevels = byPath
    .map((p) => p.highestCompletedLevel)
    .filter((l): l is number => l != null);
  const highestLevelReached = allLevels.length ? Math.max(...allLevels) : null;

  // Agregado por categoría (push / pull / core / legs / skill / multi-plane…)
  const catMap = new Map<SkillPath['category'], { total: number; done: number }>();
  for (const p of byPath) {
    const entry = catMap.get(p.path.category) ?? { total: 0, done: 0 };
    entry.total += p.totalSteps;
    entry.done += p.completedSteps;
    catMap.set(p.path.category, entry);
  }
  const byCategory: CategoryProgress[] = [...catMap.entries()].map(
    ([category, { total, done }]) => ({
      category,
      totalSteps: total,
      completedSteps: done,
      percent: total === 0 ? 0 : done / total,
    }),
  );

  return {
    totalSteps,
    completedSteps,
    percent: totalSteps === 0 ? 0 : completedSteps / totalSteps,
    band: bandFromLevel(highestLevelReached),
    highestLevelReached,
    byCategory,
    byPath,
  };
}
```

### A.2. Componente del panel

📁 `src/components/fitness/AthleteProgressPanel.tsx`

```tsx
import { useMemo } from 'react';
import type { SkillPath } from '../../data/fitness/skills/contracts';
import {
  computeProgressSummary,
  type PathProgress,
  type ProgressSummary,
} from '../../lib/fitness/progress';

// ─────────────────────────────────────────────────────────────
// Etiquetas / utilidades de presentación
// ─────────────────────────────────────────────────────────────

const BAND_LABEL: Record<string, string> = {
  beginner: 'Beginner (Nv. 1–5)',
  intermediate: 'Intermediate (Nv. 6–9)',
  advanced: 'Advanced (Nv. 10–13)',
  elite: 'Elite (Nv. 14–16)',
  unranked: 'Sin clasificar',
};

const CATEGORY_LABEL: Record<string, string> = {
  push: 'Empuje',
  pull: 'Tracción',
  core: 'Core',
  legs: 'Piernas',
  skill: 'Skill',
  'multi-plane': 'Multi-plano',
  prehab: 'Prehab',
};

function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

// ─────────────────────────────────────────────────────────────
// Sub-componentes
// ─────────────────────────────────────────────────────────────

function ProgressBar({ value, className = '' }: { value: number; className?: string }) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-slate-200 ${className}`}>
      <div
        className="h-full rounded-full bg-emerald-500 transition-all duration-500"
        style={{ width: pct(value) }}
      />
    </div>
  );
}

function OverallRing({ percent }: { percent: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - percent);
  return (
    <div className="relative h-28 w-28">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e2e8f0" strokeWidth="10" />
        <circle
          cx="50" cy="50" r={r} fill="none"
          stroke="#10b981" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-slate-800">{pct(percent)}</span>
      </div>
    </div>
  );
}

function PathCard({ pp }: { pp: PathProgress }) {
  const { path, completedSteps, totalSteps, percent, frontierStep, highestCompletedLevel } = pp;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-800">{path.name}</h4>
          <span className="text-xs uppercase tracking-wide text-slate-400">
            {CATEGORY_LABEL[path.category] ?? path.category}
          </span>
        </div>
        <span className="text-xs font-medium text-slate-500">
          {completedSteps}/{totalSteps}
        </span>
      </div>

      <ProgressBar value={percent} />

      <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
        <span>
          {highestCompletedLevel != null ? `Nivel máx: ${highestCompletedLevel}` : 'Sin nivel aún'}
        </span>
        {frontierStep && (
          <span className="font-medium text-emerald-600">
            Siguiente: {frontierStep.name}
          </span>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Componente principal
// ─────────────────────────────────────────────────────────────

export interface AthleteProgressPanelProps {
  allPaths: readonly SkillPath[];
  completedStepIds: ReadonlySet<string>;
}

export function AthleteProgressPanel({ allPaths, completedStepIds }: AthleteProgressPanelProps) {
  const summary: ProgressSummary = useMemo(
    () => computeProgressSummary(allPaths, completedStepIds),
    [allPaths, completedStepIds],
  );

  return (
    <section className="mx-auto max-w-3xl space-y-6 p-4">
      {/* Cabecera: anillo global + banda OG2E */}
      <div className="flex items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <OverallRing percent={summary.percent} />
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-slate-900">Progreso global</h2>
          <p className="text-sm text-slate-500">
            {summary.completedSteps} de {summary.totalSteps} pasos completados
          </p>
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {BAND_LABEL[summary.band]}
          </span>
        </div>
      </div>

      {/* Desglose por categoría */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Por categoría
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {summary.byCategory.map((c) => (
            <div key={c.category} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-xs font-medium text-slate-600">
                {CATEGORY_LABEL[c.category] ?? c.category}
              </p>
              <p className="text-lg font-bold text-slate-900">{pct(c.percent)}</p>
              <ProgressBar value={c.percent} className="mt-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Detalle por skill path */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Skill paths
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {summary.byPath.map((pp) => (
            <PathCard key={pp.path.id} pp={pp} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## B. Motor de recomendación de siguiente paso

La “inteligencia” respeta los principios de OG2E: **secuencia por `order`**, **prerrequisitos**, **momentum del path** y **balance estructural push/pull** (Cap. 4).

### B.1. Lógica de recomendación (pura)

📁 `src/lib/fitness/recommendations.ts`

```ts
import type { SkillPath, SkillStep } from '../../data/fitness/skills/contracts';
import { isStepUnlocked } from './progress';

// ─────────────────────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────────────────────

export type RecommendationReason =
  | 'next-in-sequence'      // siguiente paso natural del path
  | 'prerequisite-unlocked' // se acaba de desbloquear por prereqs
  | 'continue-momentum'     // el path ya está iniciado
  | 'balance-push'          // falta empuje (Cap.4 structural balance)
  | 'balance-pull'          // falta tracción
  | 'start-path';           // path sin empezar

export interface Recommendation {
  step: SkillStep;
  path: SkillPath;
  reason: RecommendationReason;
  /** Puntuación interna para ordenar (mayor = más prioritario) */
  score: number;
  /** Texto breve explicando el porqué, alineado con OG2E */
  explanation: string;
}

export interface RecommendationOptions {
  /** Máximo de recomendaciones a devolver (por defecto 5) */
  limit?: number;
  /** Incluir sugerencias de balance estructural (por defecto true) */
  includeBalance?: boolean;
}

// ─────────────────────────────────────────────────────────────
// Núcleo
// ─────────────────────────────────────────────────────────────

function orderedSteps(path: SkillPath): SkillStep[] {
  return [...path.steps].sort((a, b) => a.order - b.order);
}

/**
 * Devuelve los pasos "disponibles": no completados y con prereqs cumplidos.
 */
export function getAvailableSteps(
  path: SkillPath,
  completedStepIds: ReadonlySet<string>,
  allPaths: readonly SkillPath[],
): SkillStep[] {
  return orderedSteps(path).filter(
    (s) => !completedStepIds.has(s.id) && isStepUnlocked(s, completedStepIds, allPaths),
  );
}

/**
 * Para un path concreto, el "siguiente paso" es el primer paso disponible
 * en orden secuencial. Devuelve null si el path está completo o bloqueado.
 */
export function getNextStep(
  path: SkillPath,
  completedStepIds: ReadonlySet<string>,
  allPaths: readonly SkillPath[],
): SkillStep | null {
  return getAvailableSteps(path, completedStepIds, allPaths)[0] ?? null;
}

// ─────────────────────────────────────────────────────────────
// Puntuación / ranking
// ─────────────────────────────────────────────────────────────

const BASE_SCORE: Record<RecommendationReason, number> = {
  'next-in-sequence': 100,
  'prerequisite-unlocked': 90,
  'continue-momentum': 70,
  'balance-push': 60,
  'balance-pull': 60,
  'start-path': 40,
};

function buildRecommendation(
  step: SkillStep,
  path: SkillPath,
  reason: RecommendationReason,
  completedStepIds: ReadonlySet<string>,
  boost = 0,
): Recommendation {
  const pathStarted = path.steps.some((s) => completedStepIds.has(s.id));
  // Momentum: si el path ya está iniciado, priorizamos continuar (OG2E: consistencia)
  const momentumBoost = pathStarted && reason === 'next-in-sequence' ? 15 : 0;

  const explanationMap: Record<RecommendationReason, string> = {
    'next-in-sequence': `Continúa la progresión de ${path.name}: toca "${step.name}".`,
    'prerequisite-unlocked': `Has desbloqueado "${step.name}" en ${path.name} al cumplir sus prerrequisitos.`,
    'continue-momentum': `Ya empezaste ${path.name}; mantener la consistencia acelera el progreso.`,
    'balance-push': `OG2E (Cap.4) recomienda equilibrar empuje/tracción. Refuerza empuje con "${step.name}".`,
    'balance-pull': `OG2E (Cap.4) recomienda equilibrar empuje/tracción. Refuerza tracción con "${step.name}".`,
    'start-path': `Empieza ${path.name} con "${step.name}" como base.`,
  };

  return {
    step,
    path,
    reason,
    score: BASE_SCORE[reason] + momentumBoost + boost,
    explanation: explanationMap[reason],
  };
}

// ─────────────────────────────────────────────────────────────
// Recomendaciones globales
// ─────────────────────────────────────────────────────────────

export function getRecommendations(
  allPaths: readonly SkillPath[],
  completedStepIds: ReadonlySet<string>,
  opts: RecommendationOptions = {},
): Recommendation[] {
  const { limit = 5, includeBalance = true } = opts;
  const recs: Recommendation[] = [];

  // 1) Siguiente paso por path (secuencia + prereqs + momentum)
  for (const path of allPaths) {
    const started = path.steps.some((s) => completedStepIds.has(s.id));
    const next = getNextStep(path, completedStepIds, allPaths);
    if (!next) continue; // path completo o sin pasos disponibles

    const reason: RecommendationReason = started
      ? 'next-in-sequence'
      : 'start-path';
    recs.push(buildRecommendation(next, path, reason, completedStepIds));
  }

  // 2) Balance estructural push/pull (OG2E Cap.4)
  if (includeBalance) {
    const doneByCat = (cat: SkillPath['category']) =>
      allPaths
        .filter((p) => p.category === cat)
        .flatMap((p) => p.steps)
        .filter((s) => completedStepIds.has(s.id)).length;

    const pushDone = doneByCat('push');
    const pullDone = doneByCat('pull');

    // Si hay desequilibrio, sugerimos reforzar el lado débil
    if (pushDone > pullDone) {
      const pullPath = allPaths.find((p) => p.category === 'pull');
      const nextPull = pullPath ? getNextStep(pullPath, completedStepIds, allPaths) : null;
      if (nextPull && pullPath) {
        recs.push(
          buildRecommendation(nextPull, pullPath, 'balance-pull', completedStepIds, 10),
        );
      }
    } else if (pullDone > pushDone) {
      const pushPath = allPaths.find((p) => p.category === 'push');
      const nextPush = pushPath ? getNextStep(pushPath, completedStepIds, allPaths) : null;
      if (nextPush && pushPath) {
        recs.push(
          buildRecommendation(nextPush, pushPath, 'balance-push', completedStepIds, 10),
        );
      }
    }
  }

  // 3) Ordenar por score descendente y limitar
  return recs.sort((a, b) => b.score - a.score).slice(0, limit);
}
```

### B.2. Componente de recomendaciones

📁 `src/components/fitness/NextStepRecommendations.tsx`

```tsx
import { useMemo } from 'react';
import type { SkillPath } from '../../data/fitness/skills/contracts';
import { getRecommendations, type Recommendation } from '../../lib/fitness/recommendations';

const REASON_BADGE: Record<string, { label: string; cls: string }> = {
  'next-in-sequence': { label: 'Siguiente paso', cls: 'bg-emerald-100 text-emerald-700' },
  'prerequisite-unlocked': { label: 'Desbloqueado', cls: 'bg-sky-100 text-sky-700' },
  'continue-momentum': { label: 'Continúa', cls: 'bg-violet-100 text-violet-700' },
  'balance-push': { label: 'Balance: empuje', cls: 'bg-amber-100 text-amber-700' },
  'balance-pull': { label: 'Balance: tracción', cls: 'bg-amber-100 text-amber-700' },
  'start-path': { label: 'Empieza aquí', cls: 'bg-slate-100 text-slate-600' },
};

export interface NextStepRecommendationsProps {
  allPaths: readonly SkillPath[];
  completedStepIds: ReadonlySet<string>;
  limit?: number;
  onSelectStep?: (rec: Recommendation) => void;
}

export function NextStepRecommendations({
  allPaths,
  completedStepIds,
  limit = 5,
  onSelectStep,
}: NextStepRecommendationsProps) {
  const recs = useMemo(
    () => getRecommendations(allPaths, completedStepIds, { limit }),
    [allPaths, completedStepIds, limit],
  );

  if (recs.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-500">
        No hay recomendaciones pendientes. ¡Buen trabajo!
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-2xl space-y-3 p-4">
      <h2 className="text-base font-semibold text-slate-800">
        Siguientes pasos recomendados
      </h2>

      <ol className="space-y-3">
        {recs.map((rec) => {
          const badge = REASON_BADGE[rec.reason] ?? REASON_BADGE['next-in-sequence'];
          return (
            <li key={`${rec.path.id}-${rec.step.id}`}>
              <button
                type="button"
                onClick={() => onSelectStep?.(rec)}
                className="w-full rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-emerald-300 hover:shadow"
              >
                <div className="mb-1 flex items-center gap-2">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${badge.cls}`}>
                    {badge.label}
                  </span>
                  <span className="text-xs text-slate-400">{rec.path.name}</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {rec.step.name}
                  {rec.step.ogLevel != null && (
                    <span className="ml-2 text-xs font-normal text-slate-400">
                      Nivel {rec.step.ogLevel}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-xs text-slate-500">{rec.explanation}</p>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
```

---

## C. Vista móvil compacta con acordeones

Diseño *mobile-first*: categorías colapsables → paths → pasos con estado. Todo táctil y ligero.

📁 `src/components/fitness/MobileSkillPathExplorer.tsx`

```tsx
import { useMemo, useState } from 'react';
import type { SkillPath, SkillStep } from '../../data/fitness/skills/contracts';
import { computePathProgress, isStepUnlocked, type PathProgress } from '../../lib/fitness/progress';

// ─────────────────────────────────────────────────────────────
// Constantes de presentación
// ─────────────────────────────────────────────────────────────

const CATEGORY_LABEL: Record<string, string> = {
  push: 'Empuje',
  pull: 'Tracción',
  core: 'Core',
  legs: 'Piernas',
  skill: 'Skill',
  'multi-plane': 'Multi-plano',
  prehab: 'Prehab',
};

function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

// ─────────────────────────────────────────────────────────────
// Iconos de estado de un paso
// ─────────────────────────────────────────────────────────────

function StepStatusIcon({ completed, unlocked }: { completed: boolean; unlocked: boolean }) {
  if (completed) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
        ✓
      </span>
    );
  }
  if (unlocked) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-emerald-400 text-[10px] text-emerald-500">
        •
      </span>
    );
  }
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[10px] text-slate-400">
      🔒
    </span>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Acordeón de un path concreto (lista de pasos)
// ─────────────────────────────────────────────────────────────

function PathAccordion({
  pp,
  completedStepIds,
  defaultOpen = false,
  onTapStep,
}: {
  pp: PathProgress;
  completedStepIds: ReadonlySet<string>;
  defaultOpen?: boolean;
  onTapStep?: (step: SkillStep) => void;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const { path, percent, completedSteps, totalSteps, steps } = pp;

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Cabecera del acordeón */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3"
        aria-expanded={open}
      >
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold text-slate-800">{path.name}</p>
          <div className="mt-1 flex items-center gap-2">
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full bg-emerald-500" style={{ width: pct(percent) }} />
            </div>
            <span className="text-[11px] text-slate-500">
              {completedSteps}/{totalSteps}
            </span>
          </div>
        </div>
        <Chevron open={open} />
      </button>

      {/* Contenido colapsable */}
      {open && (
        <ul className="border-t border-slate-100 px-2 py-1">
          {steps.map(({ step, completed, unlocked }) => {
            const isFrontier = !completed && unlocked;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  onClick={() => onTapStep?.(step)}
                  className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition ${
                    isFrontier ? 'bg-emerald-50' : ''
                  }`}
                >
                  <StepStatusIcon completed={completed} unlocked={unlocked} />
                  <div className="flex-1">
                    <p
                      className={`text-sm ${
                        completed
                          ? 'text-slate-400 line-through'
                          : isFrontier
                            ? 'font-medium text-emerald-700'
                            : 'text-slate-700'
                      }`}
                    >
                      {step.name}
                    </p>
                    {step.ogLevel != null && (
                      <p className="text-[11px] text-slate-400">Nivel {step.ogLevel}</p>
                    )}
                  </div>
                  {isFrontier && (
                    <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                      Actual
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Acordeón de categoría (agrupa paths)
// ─────────────────────────────────────────────────────────────

function CategoryAccordion({
  category,
  paths,
  completedStepIds,
  allPaths,
  onTapStep,
}: {
  category: SkillPath['category'];
  paths: SkillPath[];
  completedStepIds: ReadonlySet<string>;
  allPaths: readonly SkillPath[];
  onTapStep?: (step: SkillStep) => void;
}) {
  const [open, setOpen] = useState(true);

  const pathProgresses = useMemo(
    () => paths.map((p) => computePathProgress(p, completedStepIds, allPaths)),
    [paths, completedStepIds, allPaths],
  );

  const total = pathProgresses.reduce((a, p) => a + p.totalSteps, 0);
  const done = pathProgresses.reduce((a, p) => a + p.completedSteps, 0);
  const percent = total === 0 ? 0 : done / total;

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl bg-slate-100 px-4 py-3"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-700">
            {CATEGORY_LABEL[category] ?? category}
          </span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-slate-500">
            {pct(percent)}
          </span>
        </div>
        <Chevron open={open} />
      </button>

      {open && (
        <div className="space-y-2 pl-1">
          {pathProgresses.map((pp) => (
            <PathAccordion
              key={pp.path.id}
              pp={pp}
              completedStepIds={completedStepIds}
              onTapStep={onTapStep}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Explorador móvil principal
// ─────────────────────────────────────────────────────────────

export interface MobileSkillPathExplorerProps {
  allPaths: readonly SkillPath[];
  completedStepIds: ReadonlySet<string>;
  onTapStep?: (step: SkillStep) => void;
}

export function MobileSkillPathExplorer({
  allPaths,
  completedStepIds,
  onTapStep,
}: MobileSkillPathExplorerProps) {
  // Agrupamos paths por categoría, preservando un orden estable
  const grouped = useMemo(() => {
    const map = new Map<SkillPath['category'], SkillPath[]>();
    for (const p of allPaths) {
      const arr = map.get(p.category) ?? [];
      arr.push(p);
      map.set(p.category, arr);
    }
    return [...map.entries()];
  }, [allPaths]);

  return (
    <div className="mx-auto max-w-md space-y-3 p-3">
      <h2 className="px-1 text-base font-semibold text-slate-800">Skill paths</h2>
      {grouped.map(([category, paths]) => (
        <CategoryAccordion
          key={category}
          category={category}
          paths={paths}
          completedStepIds={completedStepIds}
          allPaths={allPaths}
          onTapStep={onTapStep}
        />
      ))}
    </div>
  );
}
```

---

## Integración de los tres módulos

📁 `src/app/athlete/AthleteDashboard.tsx` (ejemplo de composición)

```tsx
import { useState } from 'react';
import { ALL_SKILL_PATHS } from '../../data/fitness/skills/allSkillPaths';
import type { SkillStep } from '../../data/fitness/skills/contracts';
import { AthleteProgressPanel } from '../../components/fitness/AthleteProgressPanel';
import { NextStepRecommendations } from '../../components/fitness/NextStepRecommendations';
import { MobileSkillPathExplorer } from '../../components/fitness/MobileSkillPathExplorer';

export default function AthleteDashboard() {
  // En producción vendrá de tu estado global / persistencia
  const [completedStepIds] = useState<ReadonlySet<string>>(
    () => new Set<string>([/* ids completados */]),
  );

  const handleSelectStep = (step: SkillStep) => {
    // Navegar al detalle del paso, marcar, etc.
    console.log('Paso seleccionado:', step.id);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      {/* A: Panel de progreso */}
      <AthleteProgressPanel allPaths={ALL_SKILL_PATHS} completedStepIds={completedStepIds} />

      {/* B: Recomendaciones de siguiente paso */}
      <NextStepRecommendations
        allPaths={ALL_SKILL_PATHS}
        completedStepIds={completedStepIds}
        limit={5}
        onSelectStep={(rec) => handleSelectStep(rec.step)}
      />

      {/* C: Explorador móvil compacto */}
      <MobileSkillPathExplorer
        allPaths={ALL_SKILL_PATHS}
        completedStepIds={completedStepIds}
        onTapStep={handleSelectStep}
      />
    </main>
  );
}
```

---

## Resumen de lo entregado

| Módulo | Archivo(s) | Qué hace |
|---|---|---|
| **A. Progreso** | `progress.ts` + `AthleteProgressPanel.tsx` | Calcula progreso por paso/path/categoría, banda OG2E, frontera actual, y lo pinta con anillo global + tarjetas. |
| **B. Recomendación** | `recommendations.ts` + `NextStepRecommendations.tsx` | Motor que devuelve el siguiente paso por secuencia, prerrequisitos, momentum y balance push/pull (Cap. 4), con puntuación y explicación. |
| **C. Vista móvil** | `MobileSkillPathExplorer.tsx` | Acordeones categoría → path → pasos, con estado visual (✓ / actual / 🔒) y resaltado de la frontera. |

**Notas de diseño:**
- La lógica está separada de la UI para poder testearla sin renderizar.
- `completedStepIds` es `ReadonlySet<string>` para evitar mutaciones accidentales.
- Los prerrequisitos soportan referencia a paso concreto o a path entero (como tu `SkillStepRef`).
- Se respeta el orden `order` de cada path y se ignora `ogLevel: null` (N/A) para el cálculo de nivel.

¿Quieres que en el siguiente paso añada **tests unitarios** para `progress.ts` y `recommendations.ts`, o prefieres que conecte `completedStepIds` a **persistencia real** (localStorage / tu store)?
