# haff-essentials-strength-4ed — Extracción recuperada de chat

> **sourceId:** `haff-essentials-strength-4ed` · **origen:** `chat-export-1787415057183` (Extracción de Reglas para Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad,…»
# NSCA’s Essentials of Strength Training and Conditioning, 4.ª edición — Extracción para Plan Maestro OS

> **Estado de la extracción:** parcial / insuficiente.  
> El contenido cargado contiene principalmente material preliminar: acceso a actividades de laboratorio, listado de labs, agradecimientos y créditos. **No incluye el cuerpo de los capítulos**, por lo que no es posible extraer con seguridad reglas cuantitativas completas, protocolos de entrenamiento, cues técnicos, progresiones detalladas ni pautas de rehabilitación.  
> Este documento extrae únicamente lo que puede respaldarse en el fragmento aportado y marca explícitamente lo que queda pendiente.

---

## 1) Metadatos del libro

- **Título:** NSCA’s Essentials of Strength Training and Conditioning, 4.ª edición.
- **Autor(es):** editores G. Gregory Haff y N. Travis Triplett; se reconoce también a editores previos Thomas Baechle y Roger Earle, además de múltiples contribuidores.
- **Año:** no indicado en el fragmento proporcionado. ⚠️ No se puede afirmar con exactitud sin portada, página legal o texto completo.
- **Disciplina principal:** fuerza y acondicionamiento físico; evaluación del rendimiento deportivo; diseño y supervisión de programas de fuerza, potencia, velocidad, agilidad, resistencia y composición corporal.
- **Enfoque poblacional:** el material preliminar sugiere un enfoque formativo para profesionales de fuerza y acondicionamiento, con aplicación en atletas y contextos de rendimiento. No hay suficiente texto para definir si cubre poblaciones clínicas, principiantes generales o pacientes lesionados.
- **Notas de alcance:**
  - El fragmento cubre:
    - Acceso a actividades de laboratorio mediante recurso web.
    - Listado de 11 laboratorios prácticos.
    - Créditos de figuras y tablas que sugieren temas presentes en el libro completo: biomecánica, respuestas hormonales, sobreentrenamiento, entrenamiento en jóvenes, psicología deportiva, índice glucémico, hidratación, clasificación de sobrepeso/obesidad, tests de rendimiento y normas.
  - El fragmento **no cubre**:
    - Protocolos completos de tests.
    - Valores normativos.
    - Cues técnicos.
    - Progresiones paso a paso.
    - Volúmenes, intensidades, frecuencias o descansos.
    - Pautas de rehabilitación o manejo del dolor.
    - Recomendaciones nutricionales detalladas.
  - ⚠️ Cualquier regla de entrenamiento, progresión o criterio clínico debe completarse con el texto completo antes de implementarse.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `LabAssessment` (opcional):
  - **Descripción:** entidad que agrupa actividades prácticas de evaluación por laboratorio temático. El fragmento organiza el contenido práctico en Labs 1 a 11.
  - **Campos sugeridos:**
    - `labId`
    - `labNumber`
    - `title`
    - `primaryFocus`
    - `relatedFocusIds[]`
    - `tests[]`
    - `requiresWebResource`
    - `equipment[]`
    - `safetyNotes[]`
    - `protocolStatus` — por ejemplo, `missing`, `partial`, `complete`.
  - **Referencias de capítulo/página:** front matter, sección “ACCESSING THE LAB ACTIVITIES”, s/p.

- `FitnessTest` (opcional):
  - **Descripción:** test específico dentro de un laboratorio, por ejemplo 300-yard shuttle run, vertical jump, 1RM bench press, T-test, push-up test, etc.
  - **Campos sugeridos:**
    - `testId`
    - `name`
    - `labId`
    - `capacity` — anaerobic capacity, aerobic capacity, strength, power, speed, agility, muscular endurance, body composition, etc.
    - `measurementUnit`
    - `equipment[]`
    - `protocolSteps[]`
    - `normativeTableId`
    - `contraindications[]`
    - `sourceReference`
  - **Referencias de capítulo/página:** front matter, listado de labs, s/p.

- `TestBatteryOrdering` (opcional):
  - **Descripción:** entidad o regla para gestionar selección y orden de tests. El Lab 4 se denomina “Exercise Testing for Athletes: Test Selection and Order”.
  - **Campos sugeridos:**
    - `batteryId`
    - `tests[]`
    - `orderingStrategy`
    - `fatigueSensitivity`
    - `restBetweenTests`
    - `requiresFullProtocol`
  - **Referencias de capítulo/página:** front matter, Lab 4, s/p.

- `BodyCompositionAssessment` (opcional):
  - **Descripción:** evaluación antropométrica, específicamente mediciones de pliegues cutáneos según el Lab 3.
  - **Campos sugeridos:**
    - `assessmentId`
    - `method` — por ejemplo, skinfold.
    - `sites[]`
    - `equipment[]`
    - `measurementProtocol[]`
    - `errorSources[]`
    - `clinicalSupervisionRequired`
  - **Referencias de capítulo/página:** front matter, Lab 3, s/p.

- `StrengthPowerTest` (opcional):
  - **Descripción:** tests de fuerza máxima y potencia, incluyendo saltos y 1RM.
  - **Campos sugeridos:**
    - `testId`
    - `type` — vertical jump, standing long jump, 1RM bench press, 1RM back squat.
    - `limbInvolvement`
    - `loadType`
    - `attempts`
    - `restIntervals`
    - `spottingRequired`
  - **Referencias de capítulo/página:** front matter, Lab 7, s/p.

- `SpeedAgilityTest` (opcional):
  - **Descripción:** tests de velocidad y agilidad: T-test, hexagon test, pro agility test, 40-yard sprint.
  - **Campos sugeridos:**
    - `testId`
    - `movementDemands[]`
    - `changeOfDirection`
    - `timingMethod`
    - `surfaceRequirements`
    - `fatigueImpact`
  - **Referencias de capítulo/página:** front matter, Lab 9, s/p.

- `MuscularEnduranceTest` (opcional):
  - **Descripción:** tests de resistencia muscular: push-up test, YMCA bench press test, partial curl-up test.
  - **Campos sugeridos:**
    - `testId`
    - `repetitionScheme`
    - `timeLimit`
    - `cadence`
    - `terminationCriteria[]`
  - **Referencias de capítulo/página:** front matter, Lab 10, s/p.

- `FacilityLayoutPlan` (opcional):
  - **Descripción:** entidad para diseño de distribución de instalaciones, basada en el Lab 11 “Facility Layout Design: Facility Floor Plan”.
  - **Campos sugeridos:**
    - `layoutId`
    - `zones[]`
    - `equipmentPlacement[]`
    - `trafficFlow[]`
    - `safetyClearances[]`
    - `capacity`
  - **Referencias de capítulo/página:** front matter, Lab 11, s/p.

- `SourceCoverageWarning` (opcional, para gobierno de datos):
  - **Descripción:** marca extractos o reglas cuyo respaldo documental está incompleto.
  - **Campos sugeridos:**
    - `sourceId`
    - `coverageLevel` — front-matter-only, chapter-partial, full-chapter, etc.
    - `missingContent[]`
    - `verificationRequired`
  - **Referencias de capítulo/página:** todo el fragmento cargado, s/p.

### 2.2 Mapeo a tipos existentes

#### Mapeo por `FocusId`

| `FocusId` sugerido | Cómo lo trata este libro según el fragmento |
|---|---|
| `anaerobic-capacity` | El Lab 1 incluye una prueba de capacidad anaeróbica: 300-yard / 274 m shuttle run. |
| `aerobic-capacity` | El Lab 2 incluye pruebas aeróbicas: 1.5-mile / 2.4 km run y 12-minute run. |
| `body-composition` | El Lab 3 trata antropometría y composición corporal mediante skinfold measurements. |
| `testing-methodology` | El Lab 4 aborda selección y orden de tests para atletas. |
| `flexibility` | El Lab 5 incluye técnicas de ejercicio de flexibilidad. |
| `resistance-technique` | El Lab 6 incluye técnica de ejercicio resistido y pautas de spotting. |
| `max-strength` | El Lab 7 incluye 1RM bench press y 1RM back squat. |
| `power` | El Lab 7 incluye vertical jump y standing long jump. |
| `plyometrics` | El Lab 8 incluye técnicas de ejercicio pliométrico. |
| `speed` | El Lab 9 incluye 40-yard / 37 m sprint. |
| `agility` | El Lab 9 incluye T-test, hexagon test y pro agility test. |
| `muscular-endurance` | El Lab 10 incluye push-up test, YMCA bench press test y partial curl-up test. |
| `facility-design` | El Lab 11 aborda diseño de planta de instalación. |

#### Mapeo por `BodyZoneId`

| `BodyZoneId` | Qué puede inferirse del fragmento |
|---|---|
| `lower-body` | Tests de salto vertical, salto largo, sprint, agility y back squat sugieren evaluación de tren inferior. No hay detalles de lesiones, ROM objetivo ni prehab. |
| `upper-body` | Bench press, YMCA bench press test y push-up test sugieren evaluación de tren superior. Sin detalles técnicos en el fragmento. |
| `core` | Partial curl-up test sugiere evaluación de resistencia de musculatura abdominal o core. Sin técnica ni criterios de seguridad. |
| `full-body` | Shuttle runs, carreras aeróbicas y pruebas de agilidad implican demanda sistémica y de cuerpo completo. |
| `shoulder` | Solo indirectamente por bench press y push-up. No hay pautas específicas de hombro en el fragmento. |
| `elbow` | Solo indirectamente por presses y tests de resistencia de tren superior. Sin contenido específico. |
| `wrist` | Sin contenido específico en el fragmento. |
| `hip` | Indirectamente por sprint, agility y squat. Sin detalles. |
| `lumbar` | Indirectamente por squat y curl-up, pero sin pautas, riesgos o contraindicaciones. |
| `knee` | Indirectamente por saltos, sprint, squat y cambios de dirección. Sin contenido preventivo. |

#### Mapeo por `MovementPattern`

| `MovementPattern` | Comentario relevante desde el fragmento |
|---|---|
| `squat` | Aparece como 1RM back squat en Lab 7. No hay cues, profundidad, seguridad ni progresión. |
| `horizontal-push` | Aparece en 1RM bench press, YMCA bench press test y push-up test. Sin técnica ni progresión. |
| `vertical-jump` | Vertical jump test en Lab 7. Sin protocolo ni criterios de ejecución. |
| `horizontal-jump` | Standing long jump test en Lab 7. Sin protocolo. |
| `sprint` | 40-yard sprint en Lab 9. Sin técnica de salida, aceleración o medición. |
| `change-of-direction` | T-test, hexagon test y pro agility test en Lab 9. Sin detalles de ejecución. |
| `flexibility` | Lab 5 menciona técnicas de flexibilidad, pero sin ejercicios, dosis ni progresiones. |
| `plyometric` | Lab 8 menciona técnicas pliométricas, pero sin niveles, contactos, intensidad ni progresión. |
| `core-flexion` | Partial curl-up test en Lab 10. Sin criterio técnico ni límites de seguridad. |

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

> ⚠️ En el fragmento cargado **no hay reglas cuantitativas verificables** sobre volumen, frecuencia, intensidad, descanso, dolor, progresión o rehabilitación.  
> Solo se puede extraer una estructura de evaluación por laboratorios. Las siguientes reglas son de tipo estructural o cualitativo, no protocolos de entrenamiento.

### Regla: assessment-lab-taxonomy

- **Descripción breve:** El libro organiza la evaluación práctica en 11 laboratorios temáticos, cada uno asociado a una capacidad o dominio concreto.
- **Tipo:** evaluación / estructura de catálogo.
- **Métrica principal:** existencia de categorías de evaluación por laboratorio.
- **Valores numéricos:**
  - **Rango óptimo:** no aplica como variable de entrenamiento.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Aplicable como taxonomía para organizar tests en la app.
  - No debe usarse como protocolo completo porque faltan instrucciones, mediciones y normas.
- **Capítulos/páginas donde se apoya:** front matter, “ACCESSING THE LAB ACTIVITIES”, s/p.
- **Comentarios/precauciones:**
  - La app puede usar esta estructura para crear módulos de evaluación.
  - Cada test debe marcarse como `protocolStatus: missing` hasta que se cargue el protocolo completo.

### Regla: test-selection-and-order-required

- **Descripción breve:** El libro dedica un laboratorio específico a selección y orden de tests, lo que indica que la evaluación debe planificarse con criterio.
- **Tipo:** evaluación / orden de tests.
- **Métrica principal:** presencia de una batería ordenada de tests.
- **Valores numéricos:**
  - **Rango óptimo:** cualitativo; no se especifican números.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Aplicable cuando se diseñen baterías de tests para atletas.
  - La app debería requerir un orden explícito de tests y evitar mezclas arbitrarias.
- **Capítulos/páginas donde se apoya:** front matter, Lab 4: “Exercise Testing for Athletes: Test Selection and Order”, s/p.
- **Comentarios/precauciones:**
  - ⚠️ No inferir orden específico desde este fragmento.
  - Se necesita el capítulo completo para implementar reglas como “tests no fatigantes antes que fatigantes”, “potencia antes que fuerza máxima” u otras convenciones típicas.

### Regla: capacity-specific-testing

- **Descripción breve:** Los laboratorios separan capacidades distintas, por lo que los resultados no deben mezclarse entre dominios diferentes.
- **Tipo:** evaluación / clasificación.
- **Métrica principal:** etiqueta de capacidad evaluada.
- **Valores numéricos:**
  - **Rango óptimo:** cualitativo.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Aplicable al registrar tests en el sistema.
  - Cada test debe asociarse a una capacidad principal: anaerobic capacity, aerobic capacity, strength, power, speed, agility, muscular endurance, body composition, etc.
- **Capítulos/páginas donde se apoya:** front matter, listado de Labs 1–11, s/p.
- **Comentarios/precauciones:**
  - Útil para evitar que un test de potencia se interprete como test de resistencia o que una medida de composición corporal se use como rendimiento deportivo.

### Regla: web-resource-gating

- **Descripción breve:** Las actividades de laboratorio se acceden mediante recurso web y código para compradores de libro nuevo.
- **Tipo:** acceso a contenido / metadata editorial.
- **Métrica principal:** acceso habilitado o no habilitado.
- **Valores numéricos:**
  - **Rango óptimo:** no aplica.
  - **Umbrales de riesgo/exceso:** no aplica.
- **Condiciones de aplicación:**
  - Solo relevante para gestión de acceso a materiales complementarios.
  - No es una regla de entrenamiento.
- **Capítulos/páginas donde se apoya:** front matter, “ACCESSING THE LAB ACTIVITIES”, s/p.
- **Comentarios/precauciones:**
  - No usar esta información para prescribir entrenamiento.
  - Puede servir para marcar contenido como `externalResourceRequired`.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

> ⚠️ El fragmento no contiene progresiones completas, pasos ordenados, criterios de avance ni requisitos de seguridad.  
> Solo se detectan áreas potenciales de SkillPath a partir de los títulos de los laboratorios.

### SkillPath: flexibility-exercise-technique — candidato

- **Disciplina:** fuerza y acondicionamiento / flexibilidad.
- **Objetivo final:** no especificado en el fragmento.
- **Requisitos de seguridad previos:** no especificados.
- **Pasos de la progresión:** sin datos suficientes.

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| N/A | Sin datos | El fragmento solo indica que existe un Lab 5 sobre técnicas de flexibilidad. | N/A | N/A | Lab 5, front matter, s/p |

### SkillPath: resistance-exercise-and-spotting — candidato

- **Disciplina:** fuerza y acondicionamiento.
- **Objetivo final:** no especificado en el fragmento.
- **Requisitos de seguridad previos:** no especificados.
- **Pasos de la progresión:** sin datos suficientes.

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| N/A | Sin datos | El fragmento solo indica que existe un Lab 6 sobre ejercicio resistido y pautas de spotting. | N/A | N/A | Lab 6, front matter, s/p |

### SkillPath: plyometric-exercise-technique — candidato

- **Disciplina:** fuerza y acondicionamiento / pliometría.
- **Objetivo final:** no especificado en el fragmento.
- **Requisitos de seguridad previos:** no especificados.
- **Pasos de la progresión:** sin datos suficientes.

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| N/A | Sin datos | El fragmento solo indica que existe un Lab 8 sobre técnicas pliométricas. | N/A | N/A | Lab 8, front matter, s/p |

### SkillPath: speed-agility-technique-and-testing — candidato

- **Disciplina:** fuerza y acondicionamiento / velocidad y agilidad.
- **Objetivo final:** no especificado en el fragmento.
- **Requisitos de seguridad previos:** no especificados.
- **Pasos de la progresión:** sin datos suficientes.

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| N/A | Sin datos | El fragmento solo indica que existe un Lab 9 sobre técnica y tests de velocidad/agilidad. | N/A | N/A | Lab 9, front matter, s/p |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

> ⚠️ El fragmento no contiene instrucciones de ejecución, cues, errores comunes ni variantes seguras.  
> A continuación se listan familias de ejercicios detectadas solo por nombre, sin contenido técnico utilizable.

### 300-Yard Shuttle Run

- **Cues principales:** no disponibles en el fragmento.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 1, front matter, s/p.

### 1.5-Mile Run / 12-Minute Run

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 2, front matter, s/p.

### Skinfold Measurements

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 3, front matter, s/p.

### Flexibility Exercise Techniques

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 5, front matter, s/p.

### Resistance Exercise and Spotting Guidelines

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 6, front matter, s/p.

### Vertical Jump Test

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 7, front matter, s/p.

### Standing Long Jump Test

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 7, front matter, s/p.

### 1RM Bench Press

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 7, front matter, s/p.

### 1RM Back Squat

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 7, front matter, s/p.

### Plyometric Exercise Techniques

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 8, front matter, s/p.

### T-Test / Hexagon Test / Pro Agility Test / 40-Yard Sprint

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 9, front matter, s/p.

### Push-Up Test / YMCA Bench Press Test / Partial Curl-Up Test

- **Cues principales:** no disponibles.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 10, front matter, s/p.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

> ⚠️ El fragmento no contiene contenido de rehabilitación, prehabilitación, fases de lesión, manejo del dolor ni criterios de retorno.  
> No debe usarse este material para generar reglas clínicas.

### Lesión / condición: no disponible

- **Zona:** N/A.
- **Etiología resumida:** no disponible.
- **Signos y síntomas clave:** no disponibles.
- **Stadia / fases:** no disponibles.
- **Protocolos de tratamiento o rehab:**
  - **Fase 1:** no disponible.
  - **Fase 2:** no disponible.
- **Ejercicios de prehab/movilidad específicos:** no disponibles.
- **Umbrales de dolor o red flags:** no disponibles.
- **Referencias de capítulo/página:** no aplica en el fragmento cargado.

**Nota de implementación:**  
Este libro no debe ser usado, con el material actual, para diagnóstico, tratamiento, prescripción clínica o automatización de rehabilitación. Si el libro completo contiene capítulos de lesiones o salud, deberán extraerse separadamente y marcarse como contenido clínicamente supervisado.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

> ⚠️ El fragmento no contiene reglas de sueño, estrés, nutrición, hidratación ni entrenamiento durante enfermedad.

### Observaciones indirectas desde créditos

- Los créditos mencionan tablas y figuras externas relacionadas con:
  - índice glucémico y carga glucémica;
  - reemplazo de fluidos;
  - identificación y tratamiento de sobrepeso/obesidad;
  - respuestas hormonales;
  - sobreentrenamiento;
  - psicología del deporte y ansiedad.
- Estas referencias sugieren que el libro completo podría tratar nutrición, hidratación, fatiga, aspectos psicológicos o composición corporal.
- Sin embargo, **el fragmento no proporciona valores, protocolos ni recomendaciones accionables**.

### Reglas posibles

- No se puede generar ninguna regla cuantitativa de estilo de vida a partir del material provisto.
- Cualquier futura regla sobre sueño, estrés, nutrición o enfermedad deberá provenir del capítulo correspondiente completo y no de los créditos.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Usar el fragmento actual como fuente para crear un catálogo inicial de laboratorios y tests de evaluación física.
  - Modelar entidades de evaluación: `LabAssessment`, `FitnessTest`, `TestBatteryOrdering`, `BodyCompositionAssessment`, `StrengthPowerTest`, `SpeedAgilityTest`, `MuscularEnduranceTest`, `FacilityLayoutPlan`.
  - Marcar todos los tests detectados como `protocolStatus: missing` o `sourceCoverage: front-matter-only`.
  - Utilizar el libro completo, cuando esté disponible, como posible fuente principal para:
    - protocolos de evaluación;
    - normas de rendimiento;
    - orden de tests;
    - técnica de ejercicios;
    - progresiones de fuerza, potencia, velocidad, agilidad y pliometría;
    - recomendaciones de instalación y seguridad.

- **Limitaciones:**
  - El contenido cargado es solo material preliminar.
  - No hay valores numéricos de intensidad, volumen, frecuencia, descanso, progresión o dolor.
  - No hay cues técnicos ni errores comunes.
  - No hay progresiones completas de habilidades.
  - No hay protocolos de rehabilitación o prehabilitación.
  - No hay recomendaciones de estilo de vida accionables.
  - ⚠️ No usar este fragmento para generar reglas de entrenamiento automáticas, validación técnica, progresiones de skills ni recomendaciones clínicas.

- **Recomendaciones específicas:**
  - Crear un módulo inicial tipo `assessment/nsca-essentials-labs.ts` con los 11 laboratorios y sus tests asociados, pero con `protocolComplete: false`.
  - Añadir un flag global de fuente, por ejemplo:
    - `sourceId: "nsca-essentials-strength-conditioning-4e"`
    - `sourceStatus: "front-matter-only"`
    - `requiresFullText: true`
  - Solicitar o cargar los capítulos completos antes de implementar cualquier `TrainingRule`, `SkillPath`, `SkillStep`, cue técnico o regla de seguridad.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
He revisado a profundidad el texto plano proporcionado (front matter, agradecimientos y sección de créditos). Efectivamente, **hay una gran cantidad de información cuantitativa y estructural que es invisible para mí porque reside en las Figuras y Tablas** mencionadas en los créditos, las cuales no están transcritas en el texto plano.

A continuación, te detallo exactamente qué datos me faltan por la ausencia de estas ayudas visuales y por qué son críticos para la app. Luego, procedo a materializar en código (TypeScript) las 3 recomendaciones de arquitectura que planteé.

---

### 🚨 1. Aviso de Datos Faltantes (Ayudas Visuales Críticas)

Para que el sistema funcione, necesitamos que en la próxima carga del libro se incluyan (o se transcriban a texto/JSON) las siguientes tablas y figuras mencionadas en los créditos:

| Recurso Visual Mencionado | Qué contiene (según la fuente citada) | Por qué es crítico para la App (Plan Maestro OS) |
|---|---|---|
| **Tablas 13.1, 13.2, 13.3, 13.5, 13.6** | Datos normativos de *Hoffman (2006)* y *Chu (1996)* para tests de fuerza, potencia y velocidad. | Sin estas tablas, la app puede registrar que un usuario saltó 50 cm o hizo 100 kg en sentadilla, pero **no puede evaluarlo** (decirle si es "Pobre", "Promedio" o "Élite" según su edad, sexo o peso). |
| **Tabla 5.3** | Consenso sobre el **Síndrome de Sobreentrenamiento** (*Meeusen et al., 2013*). | Contiene los marcadores fisiológicos y psicológicos. El motor de reglas (`TrainingRule`) necesita esto para detectar fatiga crónica y disparar alertas de *deload* o descanso obligatorio. |
| **Tabla 9.10** | Posición de la ACSM sobre **Reemplazo de Fluidos** (*Sawka et al., 2007*). | Necesitamos los números exactos (ml/kg antes, durante y post-entreno) para crear reglas de hidratación automatizadas. |
| **Tablas 10.5 y 10.6** | Guías clínicas NHLBI sobre **Sobrepeso y Obesidad**. | Define umbrales de IMC y circunferencia de cintura. Es vital para que el sistema bloquee ejercicios de alto impacto (ej. pliometría) en usuarios con obesidad para proteger sus articulaciones. |
| **Tabla 9.6** | Tabla internacional de **Índice Glucémico (IG) y Carga Glucémica**. | Necesaria para reglas de nutrición peri-entreno (qué comer 2 horas antes vs. inmediatamente después). |
| **Figuras 13.6, 13.11, 13.12** | Diagramas de configuración para el **Shuttle de 300 yardas** y el **T-Test**. | Necesitamos las distancias exactas en metros entre conos para redactar los `setupInstructions` en los `SkillStep` de evaluación. |

---

### 🛠️ 2. Ejecución de las 3 Recomendaciones (Código para el Repo)

A continuación, te entrego los bloques de código TypeScript listos para ser integrados en tu modelo de datos. Estos bloques actúan como "andamios" que mantendrán la base de datos limpia y evitarán que el sistema invente reglas con información incompleta.

#### Recomendación 1: Catálogo Inicial de Laboratorios y Tests
Este módulo registra las 11 áreas de evaluación detectadas, pero las marca explícitamente como `protocolStatus: 'missing'` para que la UI de la app sepa que puede ofrecer el test, pero no puede guiarlo ni evaluarlo hasta que se carguen los capítulos completos.

```typescript
// src/assessment/nsca-essentials-labs.ts

export type TestCapacity = 
  | 'anaerobic-capacity' | 'aerobic-capacity' | 'body-composition' 
  | 'flexibility' | 'max-strength' | 'power' | 'plyometrics' 
  | 'speed' | 'agility' | 'muscular-endurance';

export interface FitnessTest {
  testId: string;
  name: string;
  capacity: TestCapacity;
  protocolStatus: 'missing' | 'partial' | 'complete';
  normativeDataAvailable: boolean; // Falso hasta que carguemos las Tablas 13.x
  setupDimensionsRequired: boolean; // Verdadero si necesita dibujo de conos/cancha
}

export interface LabAssessment {
  labId: string;
  labNumber: number;
  title: string;
  tests: FitnessTest[];
  protocolComplete: boolean;
}

export const NSCA_Essentials_Labs: LabAssessment[] = [
  {
    labId: 'lab-01-anaerobic',
    labNumber: 1,
    title: 'Anaerobic Capacity Testing',
    protocolComplete: false,
    tests: [
      { testId: 'test-300yd-shuttle', name: '300-Yard (274 m) Shuttle Run', capacity: 'anaerobic-capacity', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: true }
    ]
  },
  {
    labId: 'lab-02-aerobic',
    labNumber: 2,
    title: 'Aerobic Capacity Testing',
    protocolComplete: false,
    tests: [
      { testId: 'test-1.5mile-run', name: '1.5-Mile (2.4 km) Run', capacity: 'aerobic-capacity', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: false },
      { testId: 'test-12min-run', name: '12-Minute Run', capacity: 'aerobic-capacity', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: false }
    ]
  },
  {
    labId: 'lab-04-test-order',
    labNumber: 4,
    title: 'Exercise Testing for Athletes: Test Selection and Order',
    protocolComplete: false,
    tests: [] // Este lab es una regla de negocio (orden de tests), no un test en sí.
  },
  {
    labId: 'lab-07-strength-power',
    labNumber: 7,
    title: 'Muscular Strength and Power Testing',
    protocolComplete: false,
    tests: [
      { testId: 'test-vertical-jump', name: 'Vertical Jump Test', capacity: 'power', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: false },
      { testId: 'test-standing-long-jump', name: 'Standing Long Jump Test', capacity: 'power', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: false },
      { testId: 'test-1rm-bench', name: '1RM Bench Press', capacity: 'max-strength', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: false },
      { testId: 'test-1rm-squat', name: '1RM Back Squat', capacity: 'max-strength', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: false }
    ]
  },
  {
    labId: 'lab-09-speed-agility',
    labNumber: 9,
    title: 'Speed and Agility Technique and Testing',
    protocolComplete: false,
    tests: [
      { testId: 'test-t-test', name: 'T-Test', capacity: 'agility', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: true },
      { testId: 'test-hexagon', name: 'Hexagon Test', capacity: 'agility', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: true },
      { testId: 'test-pro-agility', name: 'Pro Agility Test', capacity: 'agility', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: true },
      { testId: 'test-40yd-sprint', name: '40-Yard (37 m) Sprint', capacity: 'speed', protocolStatus: 'missing', normativeDataAvailable: false, setupDimensionsRequired: false }
    ]
  }
  // ... (Se omiten Labs 3, 5, 6, 8, 10, 11 por brevedad, pero siguen la misma estructura)
];
```

#### Recomendación 2: Flag Global de Fuente (Gobierno de Datos)
Este objeto actúa como un "semáforo" en tu base de datos. Cualquier otro agente o script que intente leer este libro para crear reglas de entrenamiento chocará con este flag y se detendrá.

```typescript
// src/metadata/source-flags.ts

export type SourceStatus = 'front-matter-only' | 'chapter-partial' | 'full-text' | 'verified';
export type BlockedEntityType = 'TrainingRule' | 'SkillPath' | 'SkillStep' | 'ClinicalProtocol' | 'Cues';

export interface BookSourceMetadata {
  sourceId: string;
  title: string;
  authors: string[];
  edition: string;
  status: SourceStatus;
  requiresFullText: boolean;
  
  // Alertas para el equipo de desarrollo / agentes de IA
  missingVisualData: string[]; 
  ingestionBlockedFor: BlockedEntityType[];
}

export const NSCA_Essentials_4e_Source: BookSourceMetadata = {
  sourceId: 'nsca-essentials-strength-conditioning-4e',
  title: 'NSCA’s Essentials of Strength Training and Conditioning',
  authors: ['G. Gregory Haff', 'N. Travis Triplett'],
  edition: '4th',
  status: 'front-matter-only',
  requiresFullText: true,
  
  missingVisualData: [
    'Normative Tables (Hoffman 2006, Chu 1996)',
    'ACSM Fluid Replacement Guidelines (Table 9.10)',
    'Overtraining Syndrome Markers (Table 5.3)',
    'Test Layout Dimensions (Figures 13.6, 13.11, 13.12)'
  ],
  
  // 🚨 BLOQUEO CRÍTICO: No permitir que la IA genere estos elementos con el texto actual
  ingestionBlockedFor: [
    'TrainingRule',      // No hay volúmenes, intensidades, ni descansos.
    'SkillPath',         // No hay progresiones paso a paso.
    'SkillStep',         // No hay cues técnicos ni setups.
    'ClinicalProtocol',  // No hay rehab ni manejo del dolor.
    'Cues'               // No hay instrucciones de ejecución.
  ]
};
```

#### Recomendación 3: Guardrail de Ingestión y Solicitud de Capítulos
Para implementar la tercera recomendación, aquí tienes la lógica de validación (Guardrail) que debes poner en tu pipeline de ingestión de IA, junto con el **Prompt Exacto** que debes usar cuando me subas los capítulos faltantes para que yo pueda extraer las tablas correctamente.

**A. El Guardrail (TypeScript)**
```typescript
// src/guardrails/ingestion-validator.ts
import { NSCA_Essentials_4e_Source } from '../metadata/source-flags';

export function validateRuleIngestion(entityType: string): { allowed: boolean; reason?: string } {
  const source = NSCA_Essentials_4e_Source;
  
  if (source.requiresFullText && source.ingestionBlockedFor.includes(entityType as any)) {
    return {
      allowed: false,
      reason: `⛔ INGESTIÓN BLOQUEADA: El libro "${source.title}" tiene estado "${source.status}". 
               Faltan capítulos y tablas normativas. No se pueden generar entidades de tipo [${entityType}] aún.
               Por favor, cargue los capítulos del 1 al 21 y las tablas normativas.`
    };
  }
  return { allowed: true };
}
```

**B. Instrucciones para tu próxima carga (El Prompt para mí)**
Cuando vayas a subir el resto del libro (o los capítulos individuales), por favor acompaña el archivo de texto con este prompt o instrucción para asegurarnos de que las ayudas visuales no se pierdan:

> *"Adjunto los capítulos X al Y del libro NSCA Essentials. **Atención a las Tablas y Figuras:** Dado que el OCR o la extracción de texto plano omite las tablas, por favor transcribe manualmente o describe estructuralmente las siguientes tablas críticas cuando aparezcan en el texto: 1) Las Tablas Normativas de Tests (Tablas 13.x), 2) La Tabla de Sobreentrenamiento (5.3), 3) La Tabla de Hidratación ACSM (9.10), y 4) Las dimensiones en metros de los conos para el T-Test y Shuttle Run. Si no puedes transcribirlas, indícame exactamente en qué página están para que yo las busque."*

---

**Siguiente paso para ti:** 
Si tienes acceso al PDF completo o a las imágenes de las tablas normativas (especialmente las de los capítulos 13, 9 y 5), súbelas o transcribe sus valores. Con esos números, podré generar inmediatamente las `TrainingRule` de evaluación (ej. `if user.squat_1rm < normative_table.poor_threshold -> trigger 'hypertrophy_block'`).

---

## Ronda 3 — tras: «## Transcripción de Tablas y Diagramas (Plan Maestro OS)  A continuación se presentan los datos normativos, guías clínicas, pautas de hidr…»
Sí, entiendo.

Con las transcripciones que has proporcionado, se desbloquea una parte importante del contenido cuantitativo del libro: normas de fuerza, potencia, agilidad, protocolos de tests, hidratación, índice glucémico, clasificación de sobrepeso/obesidad y marcadores de sobreentrenamiento.

A continuación entrego una **extracción actualizada y más completa** para el Plan Maestro OS, integrando esos datos. También dejo marcadas las inconsistencias o vacíos que aún requieren verificación.

---

# NSCA’s Essentials of Strength Training and Conditioning, 4.ª edición — Extracción actualizada para Plan Maestro OS

> **Estado de extracción:** parcial avanzado.  
> Se integra material preliminar del libro + transcripción de tablas y diagramas normativos aportados por el usuario.  
> Aún faltan capítulos completos para cues técnicos, progresiones de entrenamiento, protocolos detallados de evaluación y reglas avanzadas de programación.

---

## 1) Metadatos del libro

- **Título:** NSCA’s Essentials of Strength Training and Conditioning, 4.ª edición.
- **Autor(es):** editores G. Gregory Haff y N. Travis Triplett; editores previos Thomas Baechle y Roger Earle; múltiples contribuidores.
- **Año:** no indicado en el material proporcionado. ⚠️ Confirmar con portada o página legal.
- **Disciplina principal:** fuerza y acondicionamiento físico; evaluación del rendimiento; tests de fuerza, potencia, velocidad, agilidad, capacidad aeróbica/anaeróbica, composición corporal y normas de rendimiento.
- **Enfoque poblacional:** atletas, deportistas universitarios y profesionales del strength & conditioning. Algunas tablas normativas están específicamente orientadas a adultos jóvenes o atletas universitarios.
- **Notas de alcance:**
  - El material ahora cubre:
    - Laboratorios de evaluación práctica.
    - Normas de 1RM de press banca y sentadilla relativas al peso corporal.
    - Normas de salto vertical.
    - Normas de T-Test.
    - Protocolo/setup de T-Test.
    - Protocolo de 300-yard shuttle run, con una inconsistencia a verificar.
    - Marcadores de sobreentrenamiento simpático y parasimpático.
    - Recomendaciones ACSM de hidratación.
    - Clasificación de sobrepeso/obesidad por IMC y circunferencia de cintura.
    - Clasificación de índice glucémico y carga glucémica.
  - Todavía **no cubre** de forma suficiente:
    - Cues técnicos completos de ejercicios.
    - Progresiones de fuerza, potencia, hipertrofia, resistencia o movilidad.
    - Volúmenes, intensidades, frecuencias y descansos de entrenamiento.
    - Protocolos de rehabilitación o manejo clínico del dolor.
    - Normas completas para todos los tests mencionados, por ejemplo hexagon test, pro agility test, 40-yard sprint, 1.5-mile run, 12-minute run, push-up test, YMCA bench press test, partial curl-up test, etc.
    - Páginas exactas de referencia. ⚠️ Las referencias actuales se basan en IDs de tabla/figura.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `NormativeBenchmark` (recomendado):
  - **Descripción:** almacena valores normativos para clasificar resultados de tests físicos según sexo, edad y nivel.
  - **Campos sugeridos:**
    - `benchmarkId`
    - `testId`
    - `metric`
    - `sex`
    - `ageGroup`
    - `population`
    - `unit`
    - `thresholds[]`
    - `sourceTable`
    - `sourceId`
    - `verificationStatus`
  - **Referencias:** Tablas 13.1, 13.2, 13.3, 13.5, 13.6.

- `TestProtocolSetup` (recomendado):
  - **Descripción:** define setup espacial, secuencia, intentos y descanso para tests de rendimiento.
  - **Campos sugeridos:**
    - `protocolId`
    - `testId`
    - `equipment[]`
    - `distances[]`
    - `coneLayout`
    - `sequence[]`
    - `attempts`
    - `restBetweenAttempts`
    - `scoringMethod`
    - `invalidAttemptCriteria[]`
    - `sourceFigure`
    - `verificationStatus`
  - **Referencias:** Figuras 13.6, 13.11, 13.12.

- `HydrationRule` (recomendado):
  - **Descripción:** reglas de ingesta de fluidos antes, durante y después del ejercicio.
  - **Campos sugeridos:**
    - `phase`
    - `timeWindow`
    - `amount`
    - `unit`
    - `conditions[]`
    - `additives[]`
    - `safetyNotes[]`
    - `sourceTable`
  - **Referencias:** Tabla 9.10.

- `OvertrainingMarkerProfile` (recomendado):
  - **Descripción:** perfil de marcadores y síntomas asociados a sobreentrenamiento o overreaching.
  - **Campos sugeridos:**
    - `profileType`
    - `associatedTrainingStress`
    - `symptoms[]`
    - `biochemicalMarkers[]`
    - `actionLevel`
    - `clinicalSupervisionRequired`
    - `sourceTable`
  - **Referencias:** Tabla 5.3.

- `BodyCompositionRiskProfile` (recomendado):
  - **Descripción:** estratificación de riesgo por IMC y circunferencia de cintura.
  - **Campos sugeridos:**
    - `bmiCategory`
    - `bmiRange`
    - `diseaseRisk`
    - `waistThresholds`
    - `exerciseRestrictions[]`
    - `sourceTables`
  - **Referencias:** Tablas 10.5 y 10.6.

- `GlycemicIndexRule` (recomendado):
  - **Descripción:** clasificación de alimentos por índice glucémico y carga glucémica, con recomendaciones peri-entrenamiento.
  - **Campos sugeridos:**
    - `giClassification`
    - `giRange`
    - `glClassification`
    - `glRange`
    - `periWorkoutTiming`
    - `sourceTable`
  - **Referencias:** Tabla 9.6.

- `AssessmentClassificationResult` (recomendado):
  - **Descripción:** resultado de clasificar un test del usuario contra una tabla normativa.
  - **Campos sugeridos:**
    - `userId`
    - `testId`
    - `rawValue`
    - `normalizedValue`
    - `sex`
    - `ageGroup`
    - `classification`
    - `percentileApproximation`
    - `benchmarkId`
    - `confidenceLevel`
  - **Referencias:** Tablas 13.1, 13.2, 13.3, 13.5, 13.6.

### 2.2 Mapeo a tipos existentes

#### Mapeo por `FocusId`

| `FocusId` | Cómo lo trata este material |
|---|---|
| `max-strength` | Normas de 1RM de press banca y sentadilla relativos al peso corporal. |
| `power` | Norma de salto vertical para potencia de tren inferior. |
| `agility` | Norma y protocolo de T-Test. |
| `speed` | Se menciona 40-yard sprint, pero no se proporcionaron normas en esta transcripción. |
| `anaerobic-capacity` | Protocolo de 300-yard shuttle run, con inconsistencia de distancia total a verificar. |
| `aerobic-capacity` | Se mencionan 1.5-mile run y 12-minute run, pero sin normas ni protocolos completos. |
| `body-composition` | Clasificación de IMC, circunferencia de cintura y restricción de impacto para IMC elevado. |
| `hydration` | Reglas ACSM de hidratación pre, durante y post ejercicio. |
| `nutrition` | Índice glucémico, carga glucémica y recomendaciones peri-entrenamiento. |
| `fatigue-management` | Marcadores simpáticos, parasimpáticos y bioquímicos de sobreentrenamiento. |
| `facility-design` | Lab 11 menciona diseño de planta, pero sin contenido adicional. |

#### Mapeo por `BodyZoneId`

| `BodyZoneId` | Relación con el material |
|---|---|
| `upper-body` | Press banca 1RM, YMCA bench press y push-up test. Solo se dispone de norma de 1RM press banca relativo. |
| `lower-body` | Sentadilla 1RM, salto vertical, T-Test, sprints, shuttle run. |
| `core` | Partial curl-up test mencionado, sin protocolo ni norma. |
| `full-body` | Shuttle run, T-Test y tests aeróbicos. |
| `knee` | Relevante para sentadilla, saltos y cambios de dirección, pero no hay pautas clínicas específicas. |
| `hip` | Relevante para sprint, agilidad y sentadilla, sin contenido específico. |
| `lumbar` | Relevante indirectamente en sentadilla y tests de core, sin contenido específico. |
| `shoulder` | Relevante en press banca, sin pautas técnicas o de seguridad. |

#### Mapeo por `MovementPattern`

| `MovementPattern` | Comentario |
|---|---|
| `horizontal-push` | 1RM bench press y YMCA bench press. Norma disponible para bench press relativo al peso corporal. |
| `squat` | 1RM back squat. Norma disponible para ratio sentadilla/peso corporal en atletas universitarios. |
| `vertical-jump` | Norma de salto vertical para hombres y mujeres adultos jóvenes. |
| `change-of-direction` | T-Test con setup detallado y norma de rendimiento. |
| `sprint` | 40-yard sprint mencionado, sin norma provista. |
| `anaerobic-shuttle` | 300-yard shuttle run mencionado, con setup parcial y ambigüedad en la distancia total. |
| `core-endurance` | Partial curl-up mencionado, sin protocolo. |
| `upper-body-endurance` | Push-up y YMCA bench press mencionados, sin protocolo. |

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

> Estas reglas sí son accionables porque provienen de tablas o guías estructuradas.  
> ⚠️ No se dispone de páginas exactas; se cita por tabla/figura.

---

### Regla: benchmark-bench-press-bodyweight-ratio

- **Descripción breve:** clasifica la fuerza máxima de tren superior usando el ratio entre 1RM de press banca y peso corporal.
- **Tipo:** evaluación / benchmark normativo.
- **Métrica principal:** `benchPress1RMToBodyWeightRatio`.
- **Valores numéricos:**
  - Hombres 20–29 años:
    - Élite / Excelente: 1.48
    - Bueno: 1.24
    - Promedio: 1.06
    - Debajo del promedio: 0.93
    - Pobre: 0.82
  - Hombres 30–39 años:
    - Élite / Excelente: 1.24
    - Bueno: 1.08
    - Promedio: 0.93
    - Debajo del promedio: 0.83
    - Pobre: 0.74
  - Mujeres 20–29 años:
    - Élite / Excelente: 0.90
    - Bueno: 0.80
    - Promedio: 0.65
    - Debajo del promedio: 0.56
    - Pobre: 0.49
- **Condiciones de aplicación:**
  - Solo si existe un 1RM de press banca válido.
  - Solo para los grupos de edad y sexo provistos.
  - No usar para prescribir carga sin otros datos de técnica, fatiga y experiencia.
- **Capítulos/páginas donde se apoya:** Tabla 13.1; capítulo 13; página exacta no provista.
- **Comentarios/precauciones:**
  - ⚠️ Faltan otros grupos de edad y posiblemente más categorías de sexo.
  - La app debe marcar `benchmarkCoverage: partial`.

---

### Regla: benchmark-squat-bodyweight-ratio

- **Descripción breve:** clasifica la fuerza máxima de tren inferior usando el ratio entre 1RM de sentadilla y peso corporal.
- **Tipo:** evaluación / benchmark normativo.
- **Métrica principal:** `backSquat1RMToBodyWeightRatio`.
- **Valores numéricos:**
  - Hombres atletas universitarios:
    - Élite / Excelente: >= 2.00
    - Bueno: 1.75–1.99
    - Promedio: 1.50–1.74
    - Debajo del promedio: 1.25–1.49
    - Pobre: < 1.25
  - Mujeres atletas universitarias:
    - Élite / Excelente: >= 1.50
    - Bueno: 1.30–1.49
    - Promedio: 1.10–1.29
    - Debajo del promedio: 0.90–1.09
    - Pobre: < 0.90
- **Condiciones de aplicación:**
  - Población de referencia: atletas universitarios.
  - No extrapolar automáticamente a población recreativa, clínica o adulta mayor.
- **Capítulos/páginas donde se apoya:** Tabla 13.2; capítulo 13; página exacta no provista.
- **Comentarios/precauciones:**
  - La app debería usar esta norma con `populationTag: college-athletes`.
  - Si el usuario no es atleta universitario, mostrar confianza baja o no clasificar.

---

### Regla: benchmark-vertical-jump

- **Descripción breve:** clasifica la potencia de tren inferior mediante salto vertical.
- **Tipo:** evaluación / benchmark normativo.
- **Métrica principal:** `verticalJumpHeightCm`.
- **Valores numéricos:**
  - Hombres 20–29 años:
    - Élite / Excelente: > 70 cm
    - Bueno: 61–69 cm
    - Promedio: 51–60 cm
    - Debajo del promedio: 41–50 cm
    - Pobre: < 40 cm
  - Mujeres 20–29 años:
    - Élite / Excelente: > 58 cm
    - Bueno: 48–57 cm
    - Promedio: 38–47 cm
    - Debajo del promedio: 28–37 cm
    - Pobre: < 27 cm
- **Condiciones de aplicación:**
  - Solo para adultos jóvenes 20–29 años según datos provistos.
  - Requiere protocolo de salto vertical consistente.
- **Capítulos/páginas donde se apoya:** Tabla 13.3; capítulo 13; página exacta no provista.
- **Comentarios/precauciones:**
  - No se proporcionó el protocolo exacto de ejecución, por lo que la comparación normativa debe tratarse como preliminar.

---

### Regla: benchmark-t-test-agility

- **Descripción breve:** clasifica el rendimiento en T-Test según tiempo.
- **Tipo:** evaluación / benchmark normativo.
- **Métrica principal:** `tTestTimeSeconds`.
- **Valores numéricos:**
  - Hombres:
    - Élite: < 9.50 s
    - Bueno: 9.50–10.50 s
    - Promedio: 10.51–11.50 s
    - Pobre: > 11.50 s
  - Mujeres:
    - Élite: < 10.50 s
    - Bueno: 10.50–11.80 s
    - Promedio: 11.81–13.00 s
    - Pobre: > 13.00 s
- **Condiciones de aplicación:**
  - Solo válido si el setup del T-Test cumple las distancias y secuencias indicadas.
  - No usar si el test fue realizado con fatiga elevada o técnica inválida.
- **Capítulos/páginas donde se apoya:** Tablas 13.5 y 13.6; capítulo 13; página exacta no provista.
- **Comentarios/precauciones:**
  - La app debería exigir `protocolValid: true` antes de comparar contra estas normas.

---

### Regla: t-test-setup-validation

- **Descripción breve:** valida que el T-Test se configure con las distancias y la secuencia correctas.
- **Tipo:** protocolo / validación de evaluación.
- **Métrica principal:** `tTestSetupValid`.
- **Valores numéricos:**
  - Cono A a Cono B: 10 yardas / 9.14 m.
  - Cono B a Cono C: 5 yardas / 4.57 m hacia la izquierda.
  - Cono B a Cono D: 5 yardas / 4.57 m hacia la derecha.
  - Secuencia:
    1. Salida desde Cono A.
    2. Sprint a Cono B y toque con mano derecha.
    3. Desplazamiento lateral izquierdo a Cono C y toque con mano izquierda.
    4. Desplazamiento lateral derecho a Cono D y toque con mano derecha.
    5. Desplazamiento lateral de regreso a Cono B y toque con mano izquierda.
    6. Retroceso hasta cruzar/meta en Cono A.
- **Condiciones de aplicación:**
  - Aplicable a tests de agilidad.
  - Obligatorio para que el tiempo sea comparable con normas.
- **Capítulos/páginas donde se apoya:** Figuras 13.11 y 13.12; capítulo 13; página exacta no provista.
- **Comentarios/precauciones:**
  - Si falta alguno de los toques o se cruzan los pies en desplazamiento lateral, la app debería marcar intento inválido o no normativo.

---

### Regla: shuttle-300yd-protocol-validation

- **Descripción breve:** define el setup del 300-yard shuttle run, pero conserva una advertencia por inconsistencia en el número de tramos.
- **Tipo:** protocolo / evaluación anaeróbica.
- **Métrica principal:** `shuttle300ydProtocolValid`.
- **Valores numéricos:**
  - Distancia entre líneas: 25 yardas / 22.86 m.
  - Intentos: 2.
  - Descanso entre intentos: 5 minutos.
  - Puntuación: promedio de ambos intentos.
  - ⚠️ Inconsistencia detectada: la transcripción indica repetir el recorrido 6 veces, pero también dice “6 tramos de 25 yd = 150 yardas”, lo cual no coincide con el nombre del test, 300-yard shuttle.
- **Condiciones de aplicación:**
  - Solo usar como protocolo anaeróbico si se verifica el esquema real de repeticiones/recorridos.
- **Capítulos/páginas donde se apoya:** Figura 13.6; capítulo 13; página exacta no provista.
- **Comentarios/precauciones:**
  - ⚠️ No implementar todavía una distancia total fija sin verificar.
  - Se recomienda guardar el protocolo con `verificationStatus: needs-review`.
  - Posible interpretación estándar: 6 idas y vueltas de 25 yardas, es decir 12 tramos de 25 yardas, total 300 yardas. Pero esto no está claramente confirmado en la transcripción aportada.

---

### Regla: hydration-pre-exercise

- **Descripción breve:** recomienda volumen de fluidos antes del ejercicio.
- **Tipo:** estilo de vida / hidratación.
- **Métrica principal:** `preExerciseFluidMlPerKg`.
- **Valores numéricos:**
  - Rango óptimo: 5–7 ml/kg de peso corporal, 2–4 horas antes del ejercicio.
  - Si no hay orina o la orina es oscura 2 horas antes: añadir 3–5 ml/kg adicionales.
- **Condiciones de aplicación:**
  - Usuarios sanos.
  - Idealmente con control de color de orina o estado de hidratación previo.
- **Capítulos/páginas donde se apoya:** Tabla 9.10; capítulo 9; página exacta no provista.
- **Comentarios/precauciones:**
  - No automatizar en poblaciones con restricciones médicas de fluidos sin supervisión profesional.

---

### Regla: hydration-during-exercise

- **Descripción breve:** guía la ingesta de fluidos durante el ejercicio para limitar la deshidratación.
- **Tipo:** estilo de vida / hidratación.
- **Métrica principal:** `bodyMassLossPercent`, `fluidIntakeFrequencyMinutes`, `sodiumConcentration`, `carbohydrateConcentration`.
- **Valores numéricos:**
  - Ingerir fluidos cada 15–20 minutos, individualizando según tasa de sudoración.
  - Evitar pérdida de peso corporal superior a 2%.
  - En actividades mayores a 1 hora:
    - Sodio: 20–30 mEq/L.
    - Carbohidratos: 4–8%.
- **Condiciones de aplicación:**
  - Especialmente relevante en sesiones largas, ambientes cálidos o alta sudoración.
- **Capítulos/páginas donde se apoya:** Tabla 9.10; capítulo 9; página exacta no provista.
- **Comentarios/precauciones:**
  - La app puede sugerir, pero no debe forzar volúmenes exactos sin datos de sudoración, duración, ambiente y tolerancia.

---

### Regla: hydration-post-exercise

- **Descripción breve:** indica reposición de fluidos después del ejercicio según peso perdido.
- **Tipo:** estilo de vida / hidratación.
- **Métrica principal:** `postExerciseFluidLitersPerKgLost`.
- **Valores numéricos:**
  - Rango óptimo: 1.25–1.5 L por cada kg de peso corporal perdido.
- **Condiciones de aplicación:**
  - Requiere medición de peso antes y después del ejercicio.
  - Debe acompañarse de sodio mediante alimentos o bebidas para favorecer retención de fluidos.
- **Capítulos/páginas donde se apoya:** Tabla 9.10; capítulo 9; página exacta no provista.
- **Comentarios/precauciones:**
  - Si no hay peso previo/posterior, la app puede usar una estimación, pero debe marcar baja precisión.

---

### Regla: overtraining-symptom-screening

- **Descripción breve:** detecta posibles señales de sobreentrenamiento según síntomas simpáticos o parasimpáticos.
- **Tipo:** fatiga / recuperación / alerta.
- **Métrica principal:** `overtrainingSymptomFlags`.
- **Valores numéricos:**
  - No se proporciona un umbral numérico simple.
  - La regla debe ser cualitativa y basada en cluster de síntomas:
    - Simpático:
      - aumento de frecuencia cardíaca en reposo;
      - presión arterial elevada en reposo;
      - insomnio o alteraciones del sueño;
      - irritabilidad;
      - pérdida de apetito;
      - recuperación cardíaca post-esfuerzo retrasada.
    - Parasimpático:
      - frecuencia cardíaca en reposo anormalmente baja;
      - letargo, apatía o depresión;
      - incapacidad de alcanzar frecuencia cardíaca máxima;
      - rendimiento muscular deprimido pese a recuperación cardíaca rápida.
- **Condiciones de aplicación:**
  - Solo como screening, no diagnóstico.
  - Activar si hay varios síntomas simultáneos y caída de rendimiento persistente.
- **Capítulos/páginas donde se apoya:** Tabla 5.3; capítulo 5; página exacta no provista.
- **Comentarios/precauciones:**
  - La app no debe diagnosticar síndrome de sobreentrenamiento.
  - Debe sugerir reducción de carga, descanso y evaluación profesional si los síntomas persisten.

---

### Regla: overtraining-biochemical-flag

- **Descripción breve:** marca alerta si aparecen marcadores bioquímicos compatibles con sobreentrenamiento.
- **Tipo:** fatiga / recuperación / alerta clínica.
- **Métrica principal:** `testosteroneToCortisolRatioDropPercent`.
- **Valores numéricos:**
  - Caída superior a 30% en el cociente testosterona/cortisol.
  - Otros marcadores mencionados:
    - aumento de creatina quinasa;
    - descenso de inmunoglobulinas, por ejemplo IgA salival;
    - alteración de catecolaminas nocturnas.
- **Condiciones de aplicación:**
  - Solo si la app recibe datos de laboratorio.
  - No aplicable para la mayoría de usuarios recreativos sin analíticas.
- **Capítulos/páginas donde se apoya:** Tabla 5.3; capítulo 5; página exacta no provista.
- **Comentarios/precauciones:**
  - ⚠️ Regla de uso clínico/profesional.
  - No automatizar diagnóstico ni tratamiento médico.

---

### Regla: bmi-classification

- **Descripción breve:** clasifica el riesgo asociado al IMC.
- **Tipo:** composición corporal / estratificación de riesgo.
- **Métrica principal:** `bmi`.
- **Valores numéricos:**
  - Bajo peso: < 18.5
  - Normal: 18.5–24.9
  - Sobrepeso: 25.0–29.9
  - Obesidad clase I: 30.0–34.9
  - Obesidad clase II: 35.0–39.9
  - Obesidad clase III: >= 40.0
- **Condiciones de aplicación:**
  - Adultos.
  - No usar como diagnóstico único de salud o composición corporal.
- **Capítulos/páginas donde se apoya:** Tablas 10.5 y 10.6; capítulo 10; página exacta no provista.
- **Comentarios/precauciones:**
  - El IMC no distingue masa muscular de masa grasa.
  - La app debe tratarlo como indicador de riesgo, no como medición directa de salud.

---

### Regla: waist-circumference-risk

- **Descripción breve:** identifica riesgo cardiometabólico elevado por circunferencia de cintura.
- **Tipo:** composición corporal / estratificación de riesgo.
- **Métrica principal:** `waistCircumferenceCm`.
- **Valores numéricos:**
  - Hombres: riesgo alto si > 102 cm.
  - Mujeres: riesgo alto si > 88 cm.
- **Condiciones de aplicación:**
  - Adultos.
  - Útil como complemento al IMC.
- **Capítulos/páginas donde se apoya:** Tablas 10.5 y 10.6; capítulo 10; página exacta no provista.
- **Comentarios/precauciones:**
  - No sustituye evaluación médica.
  - La app puede mostrar alerta de riesgo, no diagnóstico.

---

### Regla: high-impact-restriction-by-bmi

- **Descripción breve:** restringe ejercicios de alto impacto cuando el IMC es elevado.
- **Tipo:** seguridad / protección articular.
- **Métrica principal:** `bmi`, `impactLoadMultipleOfBodyWeight`.
- **Valores numéricos:**
  - Si IMC >= 30.0, bloquear o marcar como no recomendado ejercicios con fuerzas de reacción del suelo superiores a 2.5 veces el peso corporal.
- **Condiciones de aplicación:**
  - Aplica especialmente a pliometría, saltos repetidos, drop jumps, bounding intenso u otros ejercicios de alto impacto.
- **Capítulos/páginas donde se apoya:** derivado de Tablas 10.5 y 10.6; capítulo 10; página exacta no provista.
- **Comentarios/precauciones:**
  - ⚠️ El umbral de impacto 2.5x peso corporal proviene de la regla de app provista en la transcripción, no necesariamente de una frase literal del libro.
  - La app debe ofrecer alternativas de bajo impacto y solicitar valoración profesional si el usuario tiene obesidad clase II o III.

---

### Regla: glycemic-index-classification

- **Descripción breve:** clasifica alimentos según índice glucémico.
- **Tipo:** nutrición / clasificación.
- **Métrica principal:** `glycemicIndex`.
- **Valores numéricos:**
  - Bajo IG: <= 55
  - Medio IG: 56–69
  - Alto IG: >= 70
- **Condiciones de aplicación:**
  - Integración con módulo de nutrición.
  - No usar como única métrica de calidad alimentaria.
- **Capítulos/páginas donde se apoya:** Tabla 9.6; capítulo 9; página exacta no provista.
- **Comentarios/precauciones:**
  - La respuesta glucémica real depende de mezcla de alimentos, fibra, grasa, proteína y procesamiento.

---

### Regla: glycemic-load-classification

- **Descripción breve:** clasifica la carga glucémica de una porción o comida.
- **Tipo:** nutrición / clasificación.
- **Métrica principal:** `glycemicLoad`.
- **Valores numéricos:**
  - Baja CG: <= 10
  - Media CG: 11–19
  - Alta CG: >= 20
- **Condiciones de aplicación:**
  - Requiere conocer carbohidratos netos del alimento/comida.
- **Capítulos/páginas donde se apoya:** Tabla 9.6; capítulo 9; página exacta no provista.
- **Comentarios/precauciones:**
  - La CG suele ser más práctica que el IG aislado para estimar impacto glucémico total.

---

### Regla: peri-workout-glycemic-guidance

- **Descripción breve:** recomienda tipo de carbohidrato según momento respecto al entrenamiento.
- **Tipo:** nutrición / peri-entrenamiento.
- **Métrica principal:** `periWorkoutGlycemicRecommendation`.
- **Valores numéricos:**
  - Pre-entrenamiento, aproximadamente 2 horas antes:
    - Preferir IG bajo/medio y CG moderada.
  - Post-entrenamiento inmediato:
    - Preferir IG alto y CG alta para acelerar resíntesis de glucógeno.
- **Condiciones de aplicación:**
  - Usuarios con entrenamiento demandante o sesiones prolongadas.
  - Ajustar según tolerancia digestiva, objetivos y contexto metabólico.
- **Capítulos/páginas donde se apoya:** Tabla 9.6; capítulo 9; página exacta no provista.
- **Comentarios/precauciones:**
  - No aplicar de forma rígida en personas con condiciones metabólicas sin supervisión profesional.
  - Debe coordinarse con el stack de nutrición existente.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

Con el material actual, las progresiones de entrenamiento siguen sin estar disponibles. Sin embargo, los protocolos de evaluación sí pueden modelarse como `SkillPath` de testing.

---

### SkillPath: t-test-agility-assessment

- **Disciplina:** evaluación de agilidad / velocidad y cambio de dirección.
- **Objetivo final:** ejecutar el T-Test con setup válido, secuencia correcta y tiempo medible.
- **Requisitos de seguridad previos:**
  - No se especifican explícitamente en la fuente provista.
  - Recomendación de implementación: el usuario debe estar libre de dolor agudo en tren inferior y realizar calentamiento previo. ⚠️ Esto es una precaución de diseño, no una regla textual del fragmento.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Setup de conos | Colocar A, B, C y D en forma de T: A-B 10 yd; B-C 5 yd; B-D 5 yd. | Distancias correctas y superficie segura. | Conos mal alineados o distancias incorrectas. | Figuras 13.11 y 13.12. |
| 2 | Sprint inicial A-B | Correr de frente desde A hasta B y tocar B con mano derecha. | Toque válido con mano derecha. | Salir antes de tiempo o no tocar cono. | Secuencia provista. |
| 3 | Shuffle izquierdo B-C | Desplazarse lateralmente a C sin cruzar pies y tocar con mano izquierda. | Movimiento lateral válido y toque correcto. | Cruzar pies o tocar con mano incorrecta. | Secuencia provista. |
| 4 | Shuffle derecho C-D | Desplazarse lateralmente a D y tocar con mano derecha. | Toque válido con mano derecha. | Cruzar pies o perder equilibrio. | Secuencia provista. |
| 5 | Shuffle de regreso D-B | Desplazarse lateralmente a B y tocar con mano izquierda. | Toque válido con mano izquierda. | Saltarse el cono o usar mano incorrecta. | Secuencia provista. |
| 6 | Retroceso B-A | Correr de espaldas desde B hasta cruzar/meta en A. | Llegada válida en A sin saltarse la fase de retroceso. | Girar y correr de frente antes de tiempo. | Secuencia provista. |

---

### SkillPath: shuttle-300yd-assessment

- **Disciplina:** evaluación de capacidad anaeróbica.
- **Objetivo final:** completar el shuttle de 300 yardas con protocolo válido y registrar tiempo.
- **Requisitos de seguridad previos:**
  - No especificados en el fragmento.
  - Recomendación de implementación: calentamiento previo y ausencia de dolor agudo. ⚠️ Precaución de diseño.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Setup de líneas | Marcar dos líneas paralelas separadas por 25 yardas / 22.86 m. | Distancia correcta. | Distancia mal medida. | Figura 13.6. |
| 2 | Ejecución | Correr entre líneas según esquema indicado, tocando la línea correspondiente. | Completar el recorrido sin detenerse indebidamente. | No tocar línea o detenerse entre tramos. | ⚠️ Esquema de repeticiones requiere verificación. |
| 3 | Intentos | Realizar 2 intentos. | Completar ambos intentos. | Realizar solo un intento. | Fuente indica 2 intentos. |
| 4 | Descanso | Descansar 5 minutos entre intentos. | Respetar descanso. | Descanso insuficiente o excesivo. | Fuente indica 5 min. |
| 5 | Puntuación | Promediar los dos intentos. | Registrar promedio. | Usar solo el mejor intento sin indicación. | Fuente indica promedio. |

⚠️ **Inconsistencia crítica:** la transcripción indica “6 veces continuas” y también “6 tramos de 25 yd = 150 yardas”, lo cual no coincide con 300 yardas. La app debe marcar este protocolo como `needs-verification` antes de usarlo para normas o fatiga.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

El material provisto no contiene cues técnicos completos para ejercicios de fuerza tradicionales. Solo se pueden derivar indicaciones limitadas de los protocolos de evaluación.

---

### T-Test

- **Cues principales:**
  - Mantener desplazamiento lateral sin cruzar los pies.
  - Tocar cada cono con la mano indicada.
  - Conservar una postura controlada durante cambios de dirección.
  - Finalizar con retroceso, no girando para correr de frente antes de tiempo.
- **Errores frecuentes:**
  - Cruzar los pies en los desplazamientos laterales.
  - Tocar el cono con la mano equivocada.
  - No tocar un cono.
  - Realizar el tramo final de forma incorrecta.
- **Variantes seguras y progresiones sugeridas:**
  - Práctica submáxima del recorrido antes del test.
  - Reducir velocidad en familiarización.
  - Marcar claramente la orientación de los conos.
  - ⚠️ Estas variantes son recomendaciones de implementación, no texto explícito del libro.
- **Indicaciones específicas por zona:**
  - No se proporcionan contraindicaciones específicas.
  - Para implementación segura, evitar el test si hay dolor agudo de rodilla, tobillo, cadera o lumbar. ⚠️ Precaución de diseño.
- **Páginas de referencia:** Figuras 13.11 y 13.12; capítulo 13; página exacta no provista.

---

### 300-Yard Shuttle Run

- **Cues principales:**
  - Tocar la línea según indique el protocolo.
  - Mantener ritmo consistente.
  - Minimizar frenadas largas en cada cambio de sentido.
- **Errores frecuentes:**
  - No tocar la línea.
  - Detenerse completamente entre tramos.
  - Realizar giros amplios que aumentan distancia recorrida.
- **Variantes seguras y progresiones sugeridas:**
  - Familiarización con distancias cortas.
  - Práctica de giros a baja velocidad.
  - ⚠️ Recomendaciones de implementación, no texto explícito del libro.
- **Indicaciones específicas por zona:**
  - No se proporcionan.
  - Considerar estrés alto en miembro inferior y sistema anaeróbico. ⚠️ Precaución de diseño.
- **Páginas de referencia:** Figura 13.6; capítulo 13; página exacta no provista.

---

### 1RM Bench Press

- **Cues principales:** no disponibles en el material provisto.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 7; Tabla 13.1; página exacta no provista.

---

### 1RM Back Squat

- **Cues principales:** no disponibles en el material provisto.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 7; Tabla 13.2; página exacta no provista.

---

### Vertical Jump Test

- **Cues principales:** no disponibles en el material provisto.
- **Errores frecuentes:** no disponibles.
- **Variantes seguras y progresiones sugeridas:** no disponibles.
- **Indicaciones específicas por zona:** no disponibles.
- **Páginas de referencia:** Lab 7; Tabla 13.3; página exacta no provista.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

> ⚠️ El material actual no contiene protocolos de rehabilitación, fases de lesión, manejo de dolor ni criterios de retorno al deporte.

### Lesión / condición: no disponible

- **Zona:** N/A.
- **Etiología resumida:** no disponible.
- **Signos y síntomas clave:** no disponibles.
- **Stadia / fases:** no disponibles.
- **Protocolos de tratamiento o rehab:** no disponibles.
- **Ejercicios de prehab/movilidad específicos:** no disponibles.
- **Umbrales de dolor o red flags:** no disponibles.
- **Referencias:** no aplica con el material actual.

**Nota importante:**  
La tabla de sobreentrenamiento puede usarse para screening de fatiga, pero **no** para diagnosticar ni tratar condiciones médicas. La app debe derivar a profesional sanitario cuando haya síntomas persistentes, marcadores bioquímicos alterados o sospecha de síndrome de sobreentrenamiento.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Sueño

- No se proporcionan horas recomendadas ni protocolos de sueño.
- La tabla de sobreentrenamiento menciona insomnio o alteraciones del sueño como posible síntoma de sobreentrenamiento simpático.
- Uso sugerido en app:
  - Registrar calidad de sueño como variable subjetiva.
  - Si aparece insomnio persistente junto con caída de rendimiento y otros síntomas, activar alerta de fatiga.
- **Referencia:** Tabla 5.3.

### Estrés

- No se proporciona una escala cuantitativa de estrés.
- La tabla de sobreentrenamiento menciona irritabilidad, inquietud, alteración emocional, letargo, apatía y depresión como señales posibles.
- Uso sugerido en app:
  - Tratar como señales de alerta, no como diagnóstico.
- **Referencia:** Tabla 5.3.

### Hidratación

- Reglas cuantitativas disponibles:
  - Pre: 5–7 ml/kg 2–4 h antes.
  - Pre adicional: +3–5 ml/kg si orina oscura o ausencia de orina 2 h antes.
  - Durante: cada 15–20 min, individualizado; evitar pérdida de peso >2%; sodio 20–30 mEq/L y carbohidratos 4–8% si actividad >1 h.
  - Post: 1.25–1.5 L por kg perdido.
- **Referencia:** Tabla 9.10.

### Nutrición

- Índice glucémico:
  - Bajo: <=55.
  - Medio: 56–69.
  - Alto: >=70.
- Carga glucémica:
  - Baja: <=10.
  - Media: 11–19.
  - Alta: >=20.
- Recomendación peri-entrenamiento:
  - Pre 2 h: IG bajo/medio y CG moderada.
  - Post inmediato: IG alto y CG alta.
- **Referencia:** Tabla 9.6.

### Entrenar enfermo

- No se proporcionan reglas tipo “above/below the neck”, fiebre o infección.
- No se debe implementar una regla de entrenamiento enfermo a partir de este material.
- **Referencia:** no disponible.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente de benchmarks normativos para:
    - 1RM press banca relativo al peso corporal.
    - 1RM sentadilla relativa al peso corporal en atletas universitarios.
    - Salto vertical en adultos jóvenes.
    - T-Test en hombres y mujeres.
  - Fuente de protocolo y setup para:
    - T-Test.
    - 300-yard shuttle run, con estado `needs-verification` por inconsistencia de distancia total.
  - Fuente de reglas de estilo de vida:
    - Hidratación ACSM.
    - Índice glucémico y carga glucémica.
  - Fuente de estratificación de riesgo:
    - IMC y circunferencia de cintura.
    - Restricción de alto impacto para IMC >= 30.
  - Fuente de screening de fatiga:
    - Marcadores simpáticos y parasimpáticos de sobreentrenamiento.
    - Marcador bioquímico de caída >30% en ratio testosterona/cortisol, solo si hay datos de laboratorio.

- **Limitaciones:**
  - ⚠️ No se dispone de páginas exactas; las citas son por tabla/figura.
  - ⚠️ Las normas provistas son parciales: faltan edades, sexos y tests adicionales.
  - ⚠️ El protocolo del 300-yard shuttle run contiene una inconsistencia de distancia/recorridos.
  - ⚠️ No hay cues técnicos completos ni progresiones de entrenamiento.
  - ⚠️ No hay protocolos de rehabilitación.
  - ⚠️ Las reglas de sobreentrenamiento no deben usarse para diagnóstico clínico.
  - ⚠️ El IMC debe usarse como riesgo poblacional, no como evaluación individual definitiva de composición corporal.

- **Recomendaciones específicas:**
  1. **Crear un módulo de benchmarks normativos**, por ejemplo:
     - `src/assessment/norms/bench-press-norms.ts`
     - `src/assessment/norms/squat-norms.ts`
     - `src/assessment/norms/vertical-jump-norms.ts`
     - `src/assessment/norms/t-test-norms.ts`
     Cada benchmark debe incluir:
     - `testId`
     - `sex`
     - `ageGroup`
     - `population`
     - `thresholds`
     - `source: "NSCA Essentials 4e / Hoffman 2006"`
     - `coverage: "partial"`
  2. **Crear protocolos de evaluación con validación de setup**, por ejemplo:
     - `src/assessment/protocols/t-test.ts`
     - `src/assessment/protocols/shuttle-300yd.ts`
     El T-Test puede marcarse como `protocolStatus: "complete-from-transcription"`.  
     El 300-yard shuttle debe marcarse como `protocolStatus: "needs-verification"`.
  3. **Crear reglas de salud/estilo de vida con flags de seguridad**, por ejemplo:
     - `src/rules/hydration-acsm.ts`
     - `src/rules/glycemic-index.ts`
     - `src/rules/bmi-impact-safety.ts`
     - `src/rules/overtraining-screening.ts`
     Estas reglas deben tener:
     - `scope: "screening"` o `scope: "lifestyle"`
     - `clinicalDiagnosis: false`
     - `requiresProfessionalReferral: true` cuando haya síntomas persistentes o marcadores bioquímicos alterados.
