# wilson-boxing-science-intro — Extracción recuperada de chat

> **sourceId:** `wilson-boxing-science-intro` · **origen:** `chat-export-1787415025883` (Extracción de Reglas para Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Boxing Science Training eBook — Extracción para Plan Maestro OS

> Resumen de extracción orientado a implementación: el documento describe principios de preparación física para boxeo, con foco en movilidad de cadera/hombro/rotación, fuerza general mediante patrones básicos, core como transmisor de fuerza y acondicionamiento interválico de alta intensidad. No entrega series, repeticiones ni porcentajes de fuerza para el trabajo de gimnasio; sí entrega protocolos de intervalos con tiempos, descansos e intensidades. Todo el contenido debe tratarse como material de entrenamiento, no como diagnóstico médico o rehabilitación clínica.

---

## 1) Metadatos del libro

- **Título:** `Boxing Science Training eBook` / subtítulo implícito: `Introduction to Strength and Conditioning`.
- **Autor(es):** Editado por Danny Wilson y Alan Ruddock; equipo Boxing Science / Sheffield Hallam University. Se menciona participación de expertos en fuerza y acondicionamiento, fisiología, nutrición y psicología.
- **Año:** No indicado explícitamente en el texto. ⚠️
- **Disciplina principal:** Fuerza y acondicionamiento aplicado al boxeo.
- **Enfoque poblacional:**  
  - Boxeadores amateur y profesionales.  
  - Atletas de combate o usuarios que entrenan con objetivos de rendimiento boxístico.  
  - El texto menciona servicio a más de 80 boxeadores amateur/profesionales y trabajo con boxeadores de élite, por ejemplo Kell Brook.
- **Notas de alcance:**  
  - **Cubre:**  
    - Importancia del movimiento general y movilidad para boxeo, especialmente cadera, hombro y rotación.  
    - Bases de fuerza para pegada: fuerza de tren inferior/superior, producción rápida de fuerza y función del core.  
    - Categorías de ejercicios de fuerza: squat, hinge, push, pull, unilateral y core.  
    - Técnica y checklists de back squat, deadlift, pull-up y bench press.  
    - Ejercicios fundacionales para progresar hacia esos movimientos principales.  
    - Core como parte de la cadena cinemática y entrenamiento por funciones: anti-rotación, anti-extensión, anti-flexión lateral y flexión de cadera con columna neutra.  
    - Acondicionamiento boxístico como deporte intermitente de alta intensidad, zonas de esfuerzo, RPE y protocolo por fases de 12 semanas.  
  - **No cubre explícitamente:**  
    - Programación detallada de series, repeticiones, cargas o %1RM para fuerza.  
    - Periodización completa de fuerza/potencia a largo plazo.  
    - Rehabilitación clínica, diagnóstico o protocolos médicos.  
    - Nutrición aplicada, sueño, estrés o manejo de enfermedad, aunque el equipo editorial menciona especialistas en esas áreas.  
    - Umbrales numéricos de dolor.  
- **Cobertura por capítulo / páginas principales:**  
  - Introducción y contexto: p. 2-3.  
  - Movement training / movilidad: p. 4-5.  
  - Fuerza para boxeo y tipos de ejercicios: p. 6-7.  
  - Tren inferior: back squat, deadlift y fundaciones: p. 8-9.  
  - Tren superior: pull-up, bench press y fundaciones: p. 10-11.  
  - Core: p. 12-14.  
  - Acondicionamiento: p. 15-17.  
  - Validación con atletas y equipo: p. 18-20.  
- **Advertencia legal del documento:** El texto recomienda consultar con médico antes de iniciar un programa de ejercicio y asume que el usuario participa bajo su propio riesgo. Esto debe reflejarse como límite de uso en la app. p. 2.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `BoxingConditioningPhase` opcional:
  - **Descripción:** Modela bloques de acondicionamiento por semanas con estructura de intervalos, intensidad, descanso y objetivo fisiológico.
  - **Campos sugeridos:**
    - `id`
    - `name`
    - `weekStart`
    - `weekEnd`
    - `modality`
    - `workInterval`
    - `intensityHrMaxPct`
    - `intensityRpe`
    - `restInterval`
    - `repsOrRounds`
    - `aim`
    - `physiologicalRationale`
  - **Referencias de capítulo/página:** p. 17.

- `IntensityZone` opcional:
  - **Descripción:** Zonas de intensidad basadas en porcentaje de frecuencia cardiaca máxima y/o RPE. El libro usa una “red zone” de 90-100% HRmax y una zona ineficiente llamada “no man’s land” entre RPE 3-8.
  - **Campos sugeridos:**
    - `id`
    - `label`
    - `hrMaxPctMin`
    - `hrMaxPctMax`
    - `rpeMin`
    - `rpeMax`
    - `purpose`
    - `avoid`
  - **Referencias de capítulo/página:** p. 15-16.

- `CoreControlCategory` opcional:
  - **Descripción:** Clasifica ejercicios de core por función de control, no por movimiento aislado. El libro organiza el core alrededor de anti-rotación, anti-extensión, anti-flexión lateral y flexión de cadera con columna neutra.
  - **Campos sugeridos:**
    - `id`
    - `action`
    - `spinalMotionToControl`
    - `boxingPurpose`
    - `exampleExerciseIds`
  - **Referencias de capítulo/página:** p. 13-14.

- `MobilityRestrictionPattern` opcional:
  - **Descripción:** Patrones de restricción típicos en boxeadores: cadera, hombro y rotación, con impacto en fuerza de pegada y riesgo de lesión.
  - **Campos sugeridos:**
    - `id`
    - `bodyZones`
    - `performanceLimitation`
    - `injuryRisks`
    - `recommendedExerciseIds`
  - **Referencias de capítulo/página:** p. 4-5.

- `PunchForceComponent` opcional:
  - **Descripción:** Componentes que contribuyen a una pegada fuerte según el texto: fuerza de tren inferior/superior, capacidad rápida de producción de fuerza, función del core y “effective mass”/snap.
  - **Campos sugeridos:**
    - `id`
    - `component`
    - `trainingMethods`
    - `transferToPunch`
  - **Referencias de capítulo/página:** p. 6.

- `StrengthExerciseCategory` opcional si no existe ya como tag:
  - **Descripción:** Categoría estructural de ejercicios de fuerza: squat, hinge, push, pull, unilateral, core.
  - **Campos sugeridos:**
    - `id`
    - `category`
    - `primaryQualities`
    - `boxingRelevance`
  - **Referencias de capítulo/página:** p. 7.

### 2.2 Mapeo a tipos existentes

#### Mapeo por `FocusId`

| `FocusId` sugerido | Cómo lo trata este libro |
|---|---|
| `mobility` | El libro plantea que el trabajo general de movimiento y movilidad debe incluirse en el entrenamiento del boxeador. El foco está en liberar cadera y hombros, además de mejorar rotación. Beneficios declarados: mayor rango de pegada, mejor fuerza/velocidad muscular, uso correcto de músculos y menor riesgo de lesión. p. 4. |
| `strength` | La fuerza de pegada se apoya en fuerza de tren inferior y superior, capacidad de producir fuerza rápidamente y función del core. Se proponen ejercicios compuestos y patrones básicos: squat, hinge, push, pull, unilateral y core. p. 6-7. |
| `power` / `rate-of-force-development` | Se afirma que una pegada dura ocurre cuando se genera mucha fuerza en poco tiempo. También se menciona el “snap” mediante “effective mass”. Los métodos sugeridos incluyen sprint, resistencia y levantamientos olímpicos. p. 6. |
| `core-strength` / `core-stability` | El core se presenta como enlace de la cadena cinemática: transfiere energía de piernas a brazos. El texto afirma que sus pruebas sugieren que un core más fuerte se relaciona con pegada más dura. p. 12. |
| `conditioning` | El boxeo se define como deporte intermitente de impactos de alta intensidad, no como resistencia continua. Se prescribe trabajo en zona alta de esfuerzo y protocolo por fases de intervalos. p. 15-17. |
| `injury-prevention` / `prehab` | Hay foco preventivo en movilidad de cadera/hombro, control de rotación, fuerza de glúteos y ejercicios de core para proteger columna durante volúmenes altos de pegada. p. 4-5, 13. |
| `sport-specific-boxing` | Todos los componentes se justifican por transferencia a pegada, combinaciones, movimiento de cabeza, slips, uppercuts, trabajo al cuerpo y rendimiento en sparring/competición. p. 4-6, 13, 15. |

#### Mapeo por `BodyZoneId`

| `BodyZoneId` | Qué dice el libro sobre esa zona |
|---|---|
| `hip` | Los boxeadores suelen presentar movilidad pobre de cadera. La movilidad de cadera es importante porque la rigidez de flexores de cadera se asocia con disfunciones y dolor lumbar, además de afectar la función/glute strength. La extensión y rotación de cadera son claves para pegada. p. 4-5. |
| `shoulder` | La movilidad pobre de hombro puede generar anterior deltoid y upper traps sobreactivos, con mid/lower traps débiles. Esto afecta movimiento natural de hombro/brazo y puede relacionarse con impingement, debilidad/lesiones de manguito rotador y lesiones lumbares. p. 5. |
| `lumbar` / `spine` | El texto asocia rigidez de flexores de cadera con dolor lumbar. También indica que llevar flexión, extensión, flexión lateral o rotación al límite puede hacer que el core “colapse” y haya riesgo de lesión; el entrenamiento de core busca prevenir esto. p. 5, 13. |
| `core` / `trunk` | El core conecta tren inferior y superior, transfiere energía de piernas a brazos y contribuye a pegada. Se entrena por funciones de control: anti-rotación, anti-extensión, anti-flexión lateral y flexión de cadera con columna neutra. p. 12-14. |
| `glutes` / `posterior-chain` | La fuerza de glúteos contribuye a extensión y rotación de cadera, necesarias para correr, saltar y, especialmente, pegar. Ejercicios mencionados: glute bridge, goblet squat, hinge/deadlift patterns. p. 5, 7-9. |
| `knee` | No hay capítulo específico de rodilla, pero en squat se indica que las rodillas deben flexionarse alineadas con los pies y luego mantenerse hacia afuera sobre los dedos durante el ascenso. p. 8. |
| `chest` / `triceps` / `anterior-shoulder` | Bench press y empujes desarrollan músculos anteriores como pectorales y hombros, importantes para velocidad de mano y “stiffening” en el impacto. p. 7, 10. |
| `lats` / `upper-back` | Pull-ups y tirones desarrollan dorsales y músculos posteriores del hombro; importante para combinaciones, pre-stretch y salud de hombro. p. 7, 10-11. |

#### Mapeo por `MovementPattern`

| `MovementPattern` | Comentarios relevantes |
|---|---|
| `squat` | El squat y sus variaciones cargan cuádriceps, isquios y glúteos, desarrollando impulso del tren inferior. El back squat se presenta como ejercicio para core, cuádriceps y glúteos, con transferencia a tamaño, fuerza, velocidad y aceleración del tren inferior, relevantes para pegar. p. 7-8. |
| `hinge` | El hinge desarrolla isquios y glúteos, contribuye a extensión de cadera y producción de fuerza concéntrica. El deadlift exige activación coordinada de la cadena posterior. p. 7-8. |
| `horizontal-push` | Los empujes desarrollan pectorales y hombros, importantes para velocidad de mano y rigidización al impacto. Bench press mejora fuerza, tamaño, función atlética y fitness general del tren superior. p. 7, 10. |
| `vertical-pull` | Pull-up desarrolla dorsales, brazos y core. Las dorsales son importantes para pegar, especialmente en combinaciones. p. 10. |
| `horizontal-pull` | Las fundaciones de pull-up incluyen bent over row y TRX row; el texto agrupa tirones para cadena posterior, dorsales y salud de hombro. p. 7, 11. |
| `unilateral` | Ejercicios unilaterales, de brazo o pierna, se consideran importantes para prevenir desequilibrios, reducir lesión y mejorar capacidad de pegar con ambos brazos. p. 7. |
| `rotation` / `anti-rotation` | La rotación es clave para pegada, pero el libro enfatiza control y resistencia de rotación lumbar mediante Pallof press y landmine rotations. p. 13-14. |
| `sprint` / `high-intensity-intervals` | El acondicionamiento se basa en esfuerzos máximos e intervalos de alta intensidad, no en resistencia continua. p. 15-17. |
| `olympic-weightlifting` | Se menciona como método para mejorar fuerza de extensión de cadera importante para pegar, aunque no se detallan ejercicios ni progresiones. p. 6. |

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `boxing-conditioning-red-zone-capacity`

- **Descripción breve:** El boxeador debe desarrollar capacidad para sostener esfuerzos en zona alta porque sparring y competición ocurren cerca del máximo esfuerzo.
- **Tipo:** intensidad / acondicionamiento.
- **Métrica principal:** `pctHRmax`, `RPE`.
- **Valores numéricos:**
  - **Rango óptimo:** zona roja entre 90-100% de frecuencia cardiaca máxima; en intervalos de entrega se usa 90% HRmax o 9/10 de esfuerzo.
  - **Umbrales de riesgo/exceso:** no se especifican umbrales de exceso; por ser intensidad muy alta, requiere monitorización y contexto de atleta preparado.
- **Condiciones de aplicación:**
  - Aplicar en preparación para sparring o competición.
  - Si no hay monitor de frecuencia cardiaca, usar RPE.
- **Capítulos/páginas donde se apoya:** p. 15, p. 17.
- **Comentarios/precauciones:**
  - El libro no indica cuántas sesiones semanales de zona roja hacer.
  - No usar como prescripción clínica.
  - La app debería exigir tolerancia previa a alta intensidad y/o permitir sustitución por RPE.

---

### Regla: `boxing-conditioning-avoid-no-mans-land`

- **Descripción breve:** Evitar sesiones de acondicionamiento que no sean suficientemente fáciles ni suficientemente duras.
- **Tipo:** intensidad / distribución de esfuerzo.
- **Métrica principal:** `sessionRPE`.
- **Valores numéricos:**
  - **Rango óptimo:** esfuerzos fáciles y largos o esfuerzos duros y cortos; el texto no define duración exacta de los fáciles.
  - **Umbrales de riesgo/exceso:** RPE 3-8 se considera “no man’s land”; se describe como entrenamiento ineficiente y sin propósito claro.
- **Condiciones de aplicación:**
  - Aplica a sesiones de acondicionamiento general de boxeo.
  - Sirve para validar que una sesión no quede en intensidad media no deseada.
- **Capítulos/páginas donde se apoya:** p. 16.
- **Comentarios/precauciones:**
  - Regla cualitativa con banda numérica parcial.
  - No inventar duración o volumen para sesiones fáciles si el libro no lo especifica.

---

### Regla: `boxing-conditioning-extraction-utilisation-phase`

- **Descripción breve:** Fase inicial de 0-3 semanas con sprints interválicos máximos para estimular adaptaciones metabólicas.
- **Tipo:** protocolo de acondicionamiento.
- **Métrica principal:** intervalo de trabajo, descanso, repeticiones, intensidad.
- **Valores numéricos:**
  - **Rango óptimo:**
    - Semanas: 0-3.
    - Trabajo: 30 segundos a esfuerzo máximo.
    - Descanso: 4 minutos.
    - Repeticiones: 4-6.
    - Modalidad: ciclo, treadmill o colina; si el boxeador está muy lejos del peso de competición, se sugiere ciclo.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Fase inicial o de extracción/utilización.
  - Objetivo: ejercitarse tan duro y rápido como sea posible.
  - Preferir bajo impacto si hay gran diferencia con peso de pelea.
- **Capítulos/páginas donde se apoya:** p. 17.
- **Comentarios/precauciones:**
  - El fundamento declarado es activar enzimas que promueven creación de mitocondrias.
  - La app debería permitir modalidades equivalentes pero conservando la relación trabajo/descanso.

---

### Regla: `boxing-conditioning-delivery-phase`

- **Descripción breve:** Fase de 3-10 semanas con intervalos largos de alta intensidad para mejorar entrega cardiovascular de oxígeno.
- **Tipo:** protocolo de acondicionamiento.
- **Métrica principal:** duración del intervalo, %HRmax/RPE, descanso, repeticiones.
- **Valores numéricos:**
  - **Rango óptimo:**
    - Semanas: 3-10.
    - Trabajo: 4-8 minutos por intervalo.
    - Intensidad: 90% de frecuencia cardiaca máxima o 9/10 de esfuerzo.
    - Descanso: la mitad del tiempo de trabajo.
    - Repeticiones: 4-6.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Objetivo: pasar tanto tiempo como sea posible por encima del 90% del HRmax.
  - Apto para atletas que ya toleran alta intensidad.
- **Capítulos/páginas donde se apoya:** p. 17.
- **Comentarios/precauciones:**
  - Si el intervalo es de 4 min, descanso sugerido de 2 min; si es de 8 min, descanso sugerido de 4 min.
  - La app podría validar que el descanso sea `workDuration / 2`.

---

### Regla: `boxing-conditioning-taper-phase`

- **Descripción breve:** Fase final de 10-12 semanas con esfuerzos muy cortos y máximos, manteniendo intensidad pero reduciendo volumen.
- **Tipo:** protocolo de taper / acondicionamiento.
- **Métrica principal:** trabajo, recuperación, rondas, descanso entre bloques.
- **Valores numéricos:**
  - **Rango óptimo:**
    - Semanas: 10-12.
    - Trabajo: 20 segundos a esfuerzo máximo.
    - Recuperación: 10 segundos.
    - Repeticiones del intervalo: 6-8 veces.
    - Descanso entre bloques: 3-4 minutos.
    - Repetir el bloque dos veces.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Fase final antes de competición.
  - Objetivo: ejercitarse tan duro y rápido como sea posible.
- **Capítulos/páginas donde se apoya:** p. 17.
- **Comentarios/precauciones:**
  - El fundamento declarado es que mantener intensidad reduciendo volumen en las últimas 2 semanas puede beneficiar el rendimiento.
  - La app debería marcar esta fase como sensible a fatiga y cercana a competición.

---

### Regla: `boxing-strength-program-six-movement-categories`

- **Descripción breve:** Un programa de fuerza para boxeo debería incluir ejercicios de squat, hinge, push, pull, unilateral y core.
- **Tipo:** selección de ejercicios / balance estructural.
- **Métrica principal:** `strengthCategoriesIncluded`.
- **Valores numéricos:**
  - **Rango óptimo:** 6 de 6 categorías presentes en la programación.
  - **Umbrales de riesgo/exceso:** ausencia de una o más categorías se considera programa incompleto según el texto.
- **Condiciones de aplicación:**
  - Programas de fuerza para boxeadores.
  - No especifica frecuencia semanal ni series por categoría.
- **Capítulos/páginas donde se apoya:** p. 7.
- **Comentarios/precauciones:**
  - Regla estructural cualitativa, pero convertible a validación binaria por categoría.
  - No inventar series/semanas si no existen en el libro.

---

### Regla: `boxing-strength-compound-priority`

- **Descripción breve:** Los ejercicios compuestos deben tratarse como ingredientes principales del desarrollo atlético.
- **Tipo:** prioridad de selección de ejercicios.
- **Métrica principal:** `compoundExerciseInclusion`.
- **Valores numéricos:**
  - **Rango óptimo:** incluir movimientos compuestos como base del programa.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Programas de fuerza para boxeo.
- **Capítulos/páginas donde se apoya:** p. 7.
- **Comentarios/precauciones:**
  - El texto justifica que los movimientos compuestos activan más músculos y permiten cargar más peso.
  - Regla cualitativa; no define volumen.

---

### Regla: `boxing-strength-punch-force-methods`

- **Descripción breve:** Para mejorar fuerza de pegada, desarrollar fuerza de tren inferior/superior, producción rápida de fuerza y función del core.
- **Tipo:** método de entrenamiento / transferencia deportiva.
- **Métrica principal:** presencia de métodos de fuerza, potencia y core.
- **Valores numéricos:**
  - **Rango óptimo:** incluir métodos de sprint, resistencia y levantamientos olímpicos, junto con desarrollo de core.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Objetivo: mejorar pegada.
  - Aplica a boxeadores con base técnica y física.
- **Capítulos/páginas donde se apoya:** p. 6.
- **Comentarios/precauciones:**
  - El libro no entrega series, repeticiones ni cargas para estos métodos.
  - La app debería usarlo como criterio de transferencia, no como dosis exacta.

---

### Regla: `boxing-foundation-before-primary-lifts`

- **Descripción breve:** Antes de usar back squat, deadlift, bench press o pull-up completos, construir fundaciones con ejercicios preparatorios.
- **Tipo:** progresión / prerequisito.
- **Métrica principal:** `foundationCompetence` o `techniqueChecklistPassed`.
- **Valores numéricos:**
  - **Rango óptimo:** completar ejercicios fundacionales por patrón antes del movimiento principal.
  - **Umbrales de riesgo/exceso:** avanzar sin fundaciones se considera no deseado por el enfoque del texto.
- **Condiciones de aplicación:**
  - Usuarios principiantes o con técnica/movilidad insuficiente.
  - Movimientos principales: back squat, deadlift, bench press, pull-up.
- **Capítulos/páginas donde se apoya:** p. 9, p. 11.
- **Comentarios/precauciones:**
  - El libro no da criterios numéricos de pase.
  - La app puede usar checklists técnicos como criterio sustituto.

---

### Regla: `boxing-mobility-target-hips-shoulders-rotation`

- **Descripción breve:** El trabajo de movilidad para boxeadores debe enfocarse en cadera, hombro y rotación.
- **Tipo:** movilidad / prehabilitación.
- **Métrica principal:** `mobilityTargetsCovered`.
- **Valores numéricos:**
  - **Rango óptimo:** incluir movilidad de cadera, movilidad de hombro, movilidad rotacional y activación/fuerza de glúteos.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Boxeador con restricción típica de cadera/hombro/rotación.
  - Puede usarse como calentamiento o trabajo accesorio.
- **Capítulos/páginas donde se apoya:** p. 4-5.
- **Comentarios/precauciones:**
  - El texto no especifica series, repeticiones ni duración.
  - Regla cualitativa; no inventar dosis.

---

### Regla: `boxing-core-four-control-functions`

- **Descripción breve:** El entrenamiento de core debe cubrir anti-rotación, anti-extensión, anti-flexión lateral y flexión de cadera con columna neutra.
- **Tipo:** selección de ejercicios de core.
- **Métrica principal:** `coreControlFunctionsCovered`.
- **Valores numéricos:**
  - **Rango óptimo:** 4 de 4 funciones presentes.
  - **Umbrales de riesgo/exceso:** no especificados.
- **Condiciones de aplicación:**
  - Programas de core para boxeadores.
- **Capítulos/páginas donde se apoya:** p. 13-14.
- **Comentarios/precauciones:**
  - No hay series ni repeticiones.
  - La app puede validar cobertura por etiquetas de función.

---

### Regla: `boxing-avoid-end-range-spinal-motion`

- **Descripción breve:** Evitar llevar flexión, extensión, flexión lateral o rotación de columna al límite; entrenar core para prevenir colapso o lesión.
- **Tipo:** seguridad / control de movimiento.
- **Métrica principal:** exposición a rangos espinales extremos.
- **Valores numéricos:**
  - **Rango óptimo:** ejercicios con control de rango y sin llegar al límite articular.
  - **Umbrales de riesgo/exceso:** llevar movimientos espinales al límite se asocia con riesgo de lesión según el texto.
- **Condiciones de aplicación:**
  - Ejercicios de core y movimientos de boxeo que involucran rotación, slips, uppercuts o trabajo al cuerpo.
- **Capítulos/páginas donde se apoya:** p. 13.
- **Comentarios/precauciones:**
  - No hay escala de dolor ni criterio clínico.
  - Usar como regla preventiva general, no como diagnóstico.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

> ⚠️ El libro entrega ejercicios fundacionales, pero no explicita criterios numéricos de avance ni un orden estricto para todas las progresiones. Las tablas siguientes usan el orden presentado o una inferencia razonable; debe marcarse en la app como progresión derivada si el modelo requiere trazabilidad.

### SkillPath: `boxing-squat-foundation-to-back-squat`

- **Disciplina:** fuerza / acondicionamiento para boxeo.
- **Objetivo final en palabras del libro:** ejecutar back squat para desarrollar core, cuádriceps y glúteos, mejorando tamaño, fuerza, velocidad y aceleración del tren inferior, relevantes para la pegada. p. 8.
- **Requisitos de seguridad previos:**
  - Sin dolor agudo; el documento recomienda consultar médico si hay condición médica. p. 2.
  - Movilidad suficiente de cadera y capacidad de sentadilla profunda; el libro enfatiza construir fundaciones. p. 4-5, 9.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Goblet Squat | Sentadilla con carga anterior para aprender patrón de squat. | ⚠️ No explicitado; sugerido: mantener talones, rodillas alineadas y torso controlado. | Rodillas colapsan, peso hacia adelante, pérdida de postura. | p. 9. |
| 2 | Box Squat | Sentadilla controlada hacia caja para enseñar descenso y profundidad. | ⚠️ No explicitado; sugerido: contacto controlado sin perder postura. | Dejarse caer, perder alineación de rodillas. | p. 9. |
| 3 | Goblet Squat to Press | Sentadilla con press para integrar core y cadena superior. | ⚠️ No explicitado; sugerido: squat estable más press controlado. | Extensión lumbar excesiva al presionar. | p. 9. |
| 4 | Overhead Squat | Sentadilla con carga overhead para exigir movilidad y control. | ⚠️ No explicitado; sugerido: mantener posición overhead y profundidad sin dolor. | Pérdida de posición overhead, colapso de torso. | p. 9. |
| 5 | Back Squat | Sentadilla con barra sobre espalda siguiendo checklist. | Cumplir checklist: pies, rodillas sobre dedos, profundidad, empuje desde talones, pecho arriba, glúteos al final. | Rodillas hacia adentro, talones se levantan, pecho cae, profundidad insuficiente. | p. 8. |

- **Notas especiales:**
  - El texto de descenso indica bajar hasta muslos paralelos al suelo, pero el checklist menciona cadera por debajo de rodillas. ⚠️ Posible inconsistencia; la app puede usar “profundidad segura según movilidad” o checklist como criterio principal. p. 8.

---

### SkillPath: `boxing-deadlift-foundation-to-deadlift`

- **Disciplina:** fuerza / acondicionamiento para boxeo.
- **Objetivo final:** ejecutar deadlift con activación coordinada de la cadena posterior, desarrollando extensión de cadera y fuerza de pegada. p. 8.
- **Requisitos de seguridad previos:**
  - Capacidad de hinge, core brace y posición neutra.
  - Sin dolor lumbar agudo; si hay condición médica, consultar profesional. p. 2.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Hip Hinge Sync | Enseñanza del patrón de bisagra de cadera. | ⚠️ No explicitado; sugerido: separar cadera de columna sin perder neutro. | Flexión lumbar, mover rodillas en exceso. | p. 9. |
| 2 | Glute Bridge | Activación de glúteos y extensión de cadera. | ⚠️ No explicitado; sugerido: extensión completa con glúteo, sin hiperextensión lumbar. | Empujar con lumbar, no activar glúteos. | p. 9. |
| 3 | Romanian Deadlift | Peso muerto rumano para cadena posterior y control excéntrico. | ⚠️ No explicitado; sugerido: barra cerca, cadera atrás, espalda neutra. | Barra se aleja, espalda se redondea. | p. 9. |
| 4 | Sumo Deadlift | Variante de deadlift con stance amplio. | ⚠️ No explicitado; sugerido: mantener barra cerca y empuje de talones. | Rodillas colapsan, cadera sube antes de tiempo. | p. 9. |
| 5 | Deadlift | Deadlift convencional con checklist. | Barra cerca, empuje de talones, hombros apretados, cadera adelante arriba. | Barra lejos, tirón con espalda, pérdida de control. | p. 8. |

---

### SkillPath: `boxing-bench-press-foundation-to-bench-press`

- **Disciplina:** fuerza / acondicionamiento para boxeo.
- **Objetivo final:** mejorar fuerza, tamaño muscular, función atlética y fitness general del tren superior, con transferencia a velocidad de mano y rigidización en impacto. p. 7, 10.
- **Requisitos de seguridad previos:**
  - Estabilidad escapular y capacidad de empuje básico.
  - Sin dolor de hombro no evaluado; el libro advierte que movilidad pobre de hombro puede aumentar riesgo. p. 5.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Plank Row | Estabilidad de core y escápula en posición de plancha con remo. | ⚠️ No explicitado; sugerido: controlar anti-rotación y escápula. | Cadera rota, pérdida de core. | p. 11. |
| 2 | Single Arm DB Floor Press | Press unilateral con mancuerna desde suelo. | ⚠️ No explicitado; sugerido: codo controlado, hombro estable. | Codo muy abierto, inestabilidad de hombro. | p. 11. |
| 3 | Press Ups | Flexiones para fuerza de empuje con peso corporal. | ⚠️ No explicitado; sugerido: repetición controlada y alineación. | Codos muy abiertos, pérdida de tronco. | p. 11. |
| 4 | DB Chest Press | Press con mancuernas para fuerza de pecho/tríceps. | ⚠️ No explicitado; sugerido: control de descenso y extensión completa. | Rebote, codos descontrolados. | p. 11. |
| 5 | Bench Press | Press de banca con barra siguiendo checklist. | Hombros apretados, core brace, codos a 45°, barra controlada y extensión completa. | Codos excesivamente abiertos, pérdida de retracción escapular, descenso sin control. | p. 10. |

---

### SkillPath: `boxing-pull-up-foundation-to-pull-up`

- **Disciplina:** fuerza / acondicionamiento para boxeo.
- **Objetivo final:** desarrollar dorsales, brazos y core; las dorsales son importantes para pegadas y combinaciones. p. 10.
- **Requisitos de seguridad previos:**
  - Capacidad de colgarse sin dolor de hombro/codo.
  - Control de core para evitar balanceo.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Hanging Row | Remo en suspensión para fuerza de tracción y control escapular. | ⚠️ No explicitado; sugerido: tracción con escápulas sin balanceo. | Balanceo, rango corto. | p. 11. |
| 2 | TRX Row | Remo con suspensión ajustable. | ⚠️ No explicitado; sugerido: cuerpo rígido y tracción completa. | Cadera caída, jalón incompleto. | p. 11. |
| 3 | Bent Over Row | Remo con peso libre para cadena posterior. | ⚠️ No explicitado; sugerido: torso estable, tracción controlada. | Tirón con impulso, espalda no neutra. | p. 11. |
| 4 | Eccentric Pull Ups | Fase excéntrica de pull-up. | ⚠️ No explicitado; sugerido: descenso controlado y hombro estable. | Dejarse caer, pérdida de control escapular. | p. 11. |
| 5 | Pull Up | Pull-up completo con checklist. | Cabeza sobre barra/aparato, escápulas juntas, core brace, sin balanceo, rango completo. | Balanceo, rango incompleto, cabeza por debajo de barra. | p. 10. |

- **Nota:** El libro lista los ejercicios fundacionales pero no define un orden exacto de progresión. ⚠️ Orden inferido a partir de la lógica de tracción horizontal → excéntrico → pull-up completo.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Back Squat / sentadilla trasera

- **Cues principales:**
  - Manos al ancho de hombros sobre la barra.
  - Barra apoyada en la parte alta de la espalda.
  - Pies apenas fuera del ancho de hombros, dedos ligeramente hacia afuera.
  - Respirar profundo antes de bajar.
  - Empujar cadera hacia atrás y flexionar rodillas alineadas con los pies.
  - Mantener peso en talones.
  - Rodillas hacia afuera sobre los dedos.
  - Empujar fuerte a través de talones.
  - Extender rodillas y cadera, apretar glúteos arriba.
  - Pecho arriba y hombros atrás para espalda recta.  
  p. 8.
- **Errores frecuentes:**
  - Rodillas colapsan hacia adentro.
  - Talones se levantan.
  - Pecho cae o espalda se redondea.
  - Profundidad insuficiente.
  - No apretar glúteos en la extensión final.  
  Estos errores se derivan de los checklists y cues del texto. p. 8.
- **Variantes seguras y progresiones sugeridas:**
  - Goblet squat.
  - Box squat.
  - Goblet squat to press.
  - Overhead squat.  
  p. 9.
- **Indicaciones específicas por zona:**
  - Si hay movilidad limitada de cadera o dolor lumbar asociado, priorizar movilidad de cadera y fundaciones. p. 4-5.
  - No usar como ejercicio principal si no se cumple patrón de sentadilla básica. p. 9.
- **Páginas de referencia:** p. 8-9.

---

### Deadlift / peso muerto

- **Cues principales:**
  - Pies al ancho de cadera.
  - Barra alineada con el primer cordón del calzado.
  - Caderas ligeramente por encima de rodillas.
  - Pecho afuera y cuello neutro.
  - Respirar y bracear core antes de desbloquear caderas.
  - Deslizar barra por muslos al bajar.
  - Empujar a través de talones.
  - Extender caderas y rodillas simultáneamente.
  - Mantener barra cerca de las piernas.
  - Apretar glúteos arriba y “punch hips forward”.
  - Mantener hombros apretados.  
  p. 8.
- **Errores frecuentes:**
  - Barra se aleja del cuerpo.
  - Tirón sin bracear core.
  - Espalda no neutra.
  - Extensión incompleta o hiperextensión al final.
  - Rodillas y cadera no se extienden de forma coordinada.  
  Errores derivados de cues/checklist. p. 8.
- **Variantes seguras y progresiones sugeridas:**
  - Hip hinge sync.
  - Glute bridge.
  - Romanian deadlift.
  - Sumo deadlift.  
  p. 9.
- **Indicaciones específicas por zona:**
  - El hinge fortalece cadena posterior y glúteos, importantes para extensión de cadera y pegada. p. 7, 9.
  - Si hay molestia lumbar, usar fundaciones y control de core; el libro no da protocolo clínico. p. 5, 13.
- **Páginas de referencia:** p. 8-9.

---

### Bench Press / press de banca

- **Cues principales:**
  - Manos ligeramente más abiertas que el ancho de hombros.
  - Abdomen firme, espalda baja presionada contra el banco.
  - Pies empujando contra el suelo.
  - Retraer hombros al descender.
  - Bajar barra en movimiento controlado.
  - Codos a 45 grados.
  - Barra hacia pecho bajo o medio-bajo.
  - Empujar cuerpo contra el banco al subir.
  - Barra sube con velocidad.
  - Extensión completa de brazos.  
  p. 10.
- **Errores frecuentes:**
  - Codos demasiado abiertos.
  - Pérdida de retracción escapular.
  - Descenso rápido sin control.
  - Extensión incompleta.
  - Pérdida de brace o posición de espalda baja.  
  Derivado de cues/checklist. p. 10.
- **Variantes seguras y progresiones sugeridas:**
  - Plank row.
  - Single arm DB floor press.
  - Press ups.
  - DB chest press.  
  p. 11.
- **Indicaciones específicas por zona:**
  - El libro asocia empujes con velocidad de mano y rigidización en impacto, pero también advierte que movilidad pobre de hombro puede predisponer a problemas de hombro. Por tanto, si hay dolor anterior de hombro, priorizar movilidad/fundaciones y no asumir bench press como ejercicio seguro. p. 5, 7, 10.
- **Páginas de referencia:** p. 10-11.

---

### Pull Up / dominada

- **Cues principales:**
  - Colgarse de barra con agarre prono apropiado.
  - Brazos rectos, core brace, pies elevados ligeramente detrás de caderas.
  - Espalda recta y pecho afuera.
  - Tirar flexionando codos y apretando escápulas.
  - Cabeza debe pasar sobre barra/aparato.
  - Bajar a tempo controlado hasta brazos rectos.  
  p. 10.
- **Errores frecuentes:**
  - Balanceo o kipping no deseado.
  - Rango incompleto.
  - No apretar escápulas.
  - Cabeza por debajo de barra.
  - Descenso sin control.  
  p. 10.
- **Variantes seguras y progresiones sugeridas:**
  - Hanging row.
  - Eccentric pull-ups.
  - Bent over row.
  - TRX row.  
  p. 11.
- **Indicaciones específicas por zona:**
  - Pull-ups desarrollan dorsales, importantes para combinaciones. p. 10.
  - Pulling exercises también apoyan salud de hombro al trabajar cadena posterior y músculos posteriores del hombro. p. 7.
- **Páginas de referencia:** p. 10-11.

---

### Movilidad para boxeo: cadera, hombro y rotación

- **Cues principales:**
  - Usar ejercicios aislados y dinámicos para liberar cadera y hombros. p. 4.
  - En movilidad rotacional, separar movimiento de tren inferior y superior para desarrollar rotación de tronco en ambos lados. p. 5.
  - Incluir fuerza de glúteos para extensión y rotación de cadera. p. 5.
- **Ejercicios mencionados:**
  - Spiderman hip flexor stretch.
  - Floor slides.
  - Overhead wall touch.
  - Eagles lunge and twist.
  - Goblet squat.
  - Glute bridge.  
  p. 5.
- **Errores frecuentes:**
  - El libro no describe fallos técnicos detallados para estos ejercicios. ⚠️
  - Como principio general, evitar llevar rangos articulares al límite o generar compensación lumbar. p. 13.
- **Variantes seguras y progresiones sugeridas:**
  - Usar ejercicios de movilidad como preparación antes de fuerza o boxeo.
  - Si hay restricción de hombro, priorizar floor slides y overhead wall touch antes de empujes pesados. p. 5, 10-11.
- **Indicaciones específicas por zona:**
  - Cadera: rigidez de flexores puede asociarse a dolor lumbar y menor función de glúteos. p. 5.
  - Hombro: movilidad pobre puede asociarse a impingement, problemas de manguito rotador y dolor lumbar. p. 5.
  - Rotación: restricción reduce fuerza de pegada al limitar rotación y extensión de cadera. p. 4.
- **Páginas de referencia:** p. 4-5.

---

### Core anti-movimiento y transferencia a pegada

- **Cues principales:**
  - Anti-rotación: resistir activamente rotación lumbar. p. 13.
  - Anti-extensión: resistir activamente extensión lumbar. p. 13.
  - Anti-flexión lateral: resistir flexión lateral lumbar. p. 13.
  - Flexión de cadera con columna neutra: bracear core para flexionar cadera sin flexionar columna. p. 13.
- **Ejercicios mencionados:**
  - Pallof press.
  - Landmine rotations.
  - Plank.
  - Hand walkouts.
  - Suitcase deadlift.
  - Side plank.
  - Deadbugs.
  - Straight leg sit ups.
  - Plank row.
  - Rotational plank.  
  p. 13-14.
- **Errores frecuentes:**
  - Permitir rotación lumbar durante anti-rotation.
  - Arquear espalda en anti-extension.
  - Colapsar lateralmente en anti-lateral flexion.
  - Flexionar columna cuando el objetivo es flexión de cadera con columna neutra.
  - Llevar movimientos espinales al límite.  
  p. 13.
- **Variantes seguras y progresiones sugeridas:**
  - Empezar con planchas, deadbugs y Pallof press antes de rotaciones cargadas o suitcase deadlifts pesados. Esta recomendación es inferida desde la lógica de control del texto, no una progresión explícita. ⚠️
- **Indicaciones específicas por zona:**
  - Anti-extensión protege espalda durante altos volúmenes de pegada. p. 13.
  - Anti-flexión lateral controla uppercuts y movimientos de cabeza como ducks/slips. p. 13.
  - Flexión de cadera con columna neutra mejora postura al trabajar al cuerpo. p. 13.
- **Páginas de referencia:** p. 12-14.

---

### Ejecución de acondicionamiento interválico

- **Cues principales:**
  - En sprints y esfuerzos máximos, ejercitarse tan duro y rápido como sea posible. p. 17.
  - Respetar descansos para mantener calidad del esfuerzo.
  - Usar HRmax o RPE para controlar intensidad. p. 15.
  - Evitar sesiones intermedias sin propósito claro. p. 16.
- **Errores frecuentes:**
  - Entrenar en RPE 3-8 sin objetivo claro. p. 16.
  - Reducir descansos y perder calidad de esfuerzo máximo.
  - Convertir intervalos máximos en ritmo continuo moderado.
- **Variantes seguras:**
  - Si el atleta está lejos del peso de competición, preferir ciclo para esfuerzos máximos. p. 17.
- **Páginas de referencia:** p. 15-17.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

> El libro no es un texto de rehabilitación clínica. No define fases de rehab, escalas de dolor ni protocolos médicos. La información siguiente debe modelarse como **prehabilitación/entrenamiento preventivo**, condicionada a ausencia de dolor y a consulta profesional cuando haya síntomas. p. 2.

### Lesión / condición: Riesgo asociado a movilidad limitada de cadera o rigidez de flexores de cadera

- **Zona:** `hip`, `lumbar`, `glutes`.
- **Etiología resumida:**
  - Boxeador con pobre movilidad de cadera.
  - Rigidez de flexores de cadera.
  - Limitación de extensión y rotación de cadera. p. 4-5.
- **Signos y síntomas clave:**
  - Menor capacidad de generar fuerza de pegada por limitación de extensión/rotación de cadera. p. 4.
  - Posible asociación con dolor lumbar y menor función de glúteos. p. 5.
- **Stadia / fases:**
  - No se definen fases clínicas.
- **Protocolos de tratamiento o rehab:**
  - No aplica como rehab clínica.
  - Se puede modelar como rutina preventiva o de preparación de movimiento.
- **Fase 1 preventiva / preparación:**
  - **Objetivo:** restaurar movilidad básica de cadera y activación de glúteos.
  - **Qué se hace:**
    - Spiderman hip flexor stretch.
    - Glute bridge.
    - Goblet squat.
    - Eagles lunge and twist.  
    p. 5.
  - **Qué NO se hace:**
    - No forzar rangos extremos.
    - No usar como tratamiento de dolor agudo no diagnosticado.
  - **Criterio para pasar a fuerza más pesada:**
    - ⚠️ No explicitado; sugerido: movimiento controlado, sin dolor y con capacidad de mantener alineación en squat/hinge.
- **Ejercicios de prehab/movilidad específicos:**
  - Spiderman hip flexor stretch: movilidad de flexores de cadera. p. 5.
  - Glute bridge: fuerza/activación de glúteos para extensión de cadera. p. 5.
  - Goblet squat: patrón de squat con activación de glúteos/core. p. 5, 9.
- **Umbrales de dolor o red flags:**
  - No hay escala numérica.
  - Si hay dolor o condición médica, consultar profesional antes de entrenar. p. 2.
- **Referencias:** p. 2, 4-5, 9.

---

### Lesión / condición: Movilidad pobre de hombro y desequilibrio escapular

- **Zona:** `shoulder`, `upper-back`.
- **Etiología resumida:**
  - Movilidad pobre de hombro.
  - Anterior deltoid y upper traps sobreactivos.
  - Mid/lower traps débiles. p. 5.
- **Signos y síntomas clave:**
  - Movimiento natural de hombro/brazo afectado.
  - Riesgo aumentado de shoulder impingement.
  - Riesgo de debilidad/lesión de manguito rotador.
  - Posible relación con lesiones lumbares. p. 5.
- **Stadia / fases:**
  - No se definen fases clínicas.
- **Protocolos de tratamiento o rehab:**
  - No aplicar como rehab médica.
  - Usar como prehabilidad/preparación de hombro.
- **Fase preventiva:**
  - **Objetivo:** mejorar movilidad de hombro y control escapular antes de empujes o tirones pesados.
  - **Qué se hace:**
    - Floor slides.
    - Overhead wall touch.
    - Ejercicios de tracción para cadena posterior y salud de hombro. p. 5, 7, 10-11.
  - **Qué NO se hace:**
    - No asumir bench press o overhead pressing como seguros si hay movilidad pobre o dolor.
  - **Criterio para avanzar:**
    - ⚠️ No explicitado; sugerido: control escapular y ausencia de dolor en movimientos overhead/push.
- **Umbrales de dolor o red flags:**
  - Dolor de hombro, síntomas de impingement o manguito rotador requieren evaluación profesional. p. 2, 5.
- **Referencias:** p. 5, 7, 10-11.

---

### Lesión / condición: Restricción rotacional del tronco/cadera

- **Zona:** `trunk`, `hip`, `core`.
- **Etiología resumida:**
  - Boxeador con problemas de rotación y separación entre tren inferior y superior. p. 4.
- **Signos y síntomas clave:**
  - Menor transferencia de fuerza a la pegada.
  - Limitación de rotación y extensión de cadera. p. 4.
- **Stadia / fases:**
  - No se definen.
- **Protocolos de prehab/preparación:**
  - **Objetivo:** desarrollar rotación controlada de tronco en ambos lados y mejorar papel del core en golpes como jab. p. 5.
  - **Qué se hace:**
    - Eagles lunge and twist. p. 5.
    - Landmine rotations y Pallof press para control rotacional. p. 13-14.
  - **Qué NO se hace:**
    - No llevar rotación lumbar al límite. p. 13.
- **Umbrales de dolor o red flags:**
  - No hay escala; detener si hay dolor y derivar a profesional. p. 2.
- **Referencias:** p. 4-5, 13-14.

---

### Lesión / condición: Sobrecarga lumbar por control insuficiente del core

- **Zona:** `lumbar`, `core`.
- **Etiología resumida:**
  - Llevar flexión, extensión, flexión lateral o rotación al límite puede hacer que el core ceda y cause lesión. p. 13.
  - Altos volúmenes de pegada pueden requerir anti-extensión. p. 13.
  - Uppercuts, ducks y slips requieren control de flexión lateral. p. 13.
  - Trabajo al cuerpo requiere postura con flexión de cadera y columna neutra. p. 13.
- **Signos y síntomas clave:**
  - Pérdida de postura.
  - Colapso de core.
  - Riesgo de molestia lumbar. p. 13.
- **Stadia / fases:**
  - No hay fases clínicas.
- **Protocolos preventivos:**
  - **Anti-extensión:**
    - Plank.
    - Hand walkouts.
    - Objetivo: proteger espalda durante alto volumen de pegada. p. 13.
  - **Anti-rotación:**
    - Pallof press.
    - Landmine rotations.
    - Objetivo: mejorar rotación de pegada usando stretch-shortening cycle. p. 13.
  - **Anti-flexión lateral:**
    - Landmine rotations.
    - Suitcase deadlift.
    - Side plank.
    - Objetivo: controlar flexión lateral en uppercuts y movimiento de cabeza. p. 13.
  - **Flexión de cadera con columna neutra:**
    - Deadbugs.
    - Straight leg sit ups.
    - Objetivo: postura más fuerte al trabajar al cuerpo. p. 13.
- **Umbrales de dolor o red flags:**
  - No hay umbral numérico.
  - Si hay dolor lumbar agudo, detener y consultar profesional. p. 2.
- **Referencias:** p. 2, 13-14.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

- **Sueño:** No se encontraron recomendaciones explícitas.
- **Estrés:** No se encontraron protocolos ni reglas.
- **Nutrición:** Aunque el equipo incluye nutricionista y se menciona nutrición en la presentación del proyecto, el ebook no entrega recomendaciones accionables de nutrición. p. 2.
- **Entrenar enfermo:** No se encontraron reglas tipo above/below the neck, fiebre u otra.
- **Conclusión para la app:** No usar este libro para reglas de estilo de vida. Si el sistema necesita sueño, nutrición o enfermedad, debe acudir a otras fuentes canónicas.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal para reglas de acondicionamiento boxístico basadas en intervalos de alta intensidad, zonas de esfuerzo y fases de 12 semanas. p. 15-17.
  - Fuente para reglas de balance estructural en fuerza: squat, hinge, push, pull, unilateral y core. p. 7.
  - Fuente para validar cues técnicos de back squat, deadlift, bench press y pull-up. p. 8, 10.
  - Fuente para SkillPaths fundacionales hacia movimientos principales. p. 9, 11.
  - Fuente para etiquetar core por funciones de control: anti-rotación, anti-extensión, anti-flexión lateral y flexión de cadera con columna neutra. p. 13-14.
  - Fuente para flags de movilidad/prehab específicos de boxeo: cadera, hombro y rotación. p. 4-5.

- **Limitaciones:**
  - No entrega series, repeticiones, cargas ni %1RM para fuerza. p. 6-11.
  - No entrega criterios numéricos de avance en progresiones. p. 9, 11.
  - No entrega protocolos de rehabilitación ni manejo de dolor. p. 2.
  - No entrega recomendaciones de sueño, nutrición, estrés o enfermedad.
  - La población está orientada a boxeadores, algunos de nivel élite; la app debería ajustar intensidad para usuarios recreativos. p. 18-20.
  - La fase de acondicionamiento de alta intensidad puede ser inadecuada para usuarios sin base cardiovascular o con condiciones médicas.

- **Recomendaciones específicas para agentes:**
  - Crear reglas tipo `rules/boxing_conditioning.ts` con:
    - `boxing-conditioning-red-zone-capacity`
    - `boxing-conditioning-avoid-no-mans-land`
    - `boxing-conditioning-extraction-utilisation-phase`
    - `boxing-conditioning-delivery-phase`
    - `boxing-conditioning-taper-phase`
  - Crear reglas tipo `rules/boxing_strength_program_balance.ts` con:
    - `boxing-strength-program-six-movement-categories`
    - `boxing-strength-compound-priority`
    - `boxing-foundation-before-primary-lifts`
  - Añadir SkillPaths:
    - `boxing-squat-foundation-to-back-squat`
    - `boxing-deadlift-foundation-to-deadlift`
    - `boxing-bench-press-foundation-to-bench-press`
    - `boxing-pull-up-foundation-to-pull-up`
  - Añadir metadatos/etiquetas para ejercicios de core:
    - `coreFunction: anti-rotation`
    - `coreFunction: anti-extension`
    - `coreFunction: anti-lateral-flexion`
    - `coreFunction: hip-flexion-neutral-spine`
  - Añadir flags de movilidad/prehab:
    - `mobilityTarget: hip`
    - `mobilityTarget: shoulder`
    - `mobilityTarget: rotation`
    - `prehabRisk: hip-flexor-tightness`
    - `prehabRisk: shoulder-mobility-deficit`
    - `prehabRisk: rotational-limitation`

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
Sí. He revisado de nuevo el texto completo del ebook para verificar que no falten datos textuales accionables. El resultado es:

- **Extracción textual:** completa entre las páginas 2 y 20.
- **Datos cuantitativos claros:** principalmente en acondicionamiento, RPE y fases de intervalos.
- **Datos cualitativos claros:** movilidad, fuerza, core, técnica básica, fundaciones y propósito de ejercicios.
- **Puntos ambiguos:** sí existen algunos puntos que dependen de **ayudas visuales / maquetación** del PDF, sobre todo en páginas 5, 9, 10, 11 y 14. Los dejo listados abajo.
- **Conclusión:** puedo avanzar con las **5 recomendaciones de implementación** usando una interpretación conservadora, pero conviene marcar ciertos metadatos como `pending_visual_source` o `inferred` hasta que se complementen con las imágenes originales.

---

# 1. Estado de extracción y verificación de datos

## 1.1 Cobertura completa por página / capítulo

| Página / sección | Qué se extrajo | Estado |
|---|---|---|
| p. 2 — Boxing Science | Naturaleza del proyecto, equipo multidisciplinar, vinculación con Sheffield Hallam University, servicio a más de 80 boxeadores amateur/profesionales, misión editorial y disclaimer médico/legal. | Extraído. |
| p. 3 — Introduction | El boxeo requiere skill, técnica y táctica, pero también fitness, velocidad y fuerza. Cualidades como movimiento, fuerza, estabilidad, equilibrio y fitness son entrenables. | Extraído. |
| p. 4 — Movement Training for Boxing | Se debe incluir movimiento general y movilidad además de shadow boxing, pads y sparring. Beneficios: mejorar rango de pegada, fuerza/velocidad muscular, uso correcto de músculos y reducir riesgo de lesión. Foco: cadera, hombro y rotación; la restricción reduce fuerza al limitar rotación y extensión de cadera. | Extraído. |
| p. 5 — Mobility Exercises | Importancia de movilidad de cadera, hombro y rotación. Riesgos asociados: disfunciones por rigidez de flexores de cadera, dolor lumbar, impingement de hombro, debilidad/lesión de manguito rotador, lesiones lumbares. Glúteos importantes para extensión/rotación de cadera. Ejercicios: Spiderman Hip Flexor Stretch, Floor Slides, Overhead Wall Touch, Eagles Lunge and Twist, Goblet Squat, Glute Bridge. | Extraído, pero faltan cues visuales de ejecución. |
| p. 6 — Strength Training for Boxing | Pegada dura = mucha fuerza en poco tiempo; “snap” y “effective mass”. Contribuyen: fuerza de tren inferior/superior, capacidad rápida de producción de fuerza y función del core. Métodos: sprint, resistencia y levantamientos olímpicos; mejoran fuerza de extensión de cadera. Movilidad/movimiento mejora coordinación. | Extraído. |
| p. 7 — Strength Exercise Types | Categorías de fuerza: squat, hinge, push, pull, unilateral y core. Cada una tiene transferencia: impulso tren inferior, extensión de cadera, velocidad de mano, pre-stretch/tirones, equilibrio unilateral y control del core. Ejercicios compuestos son considerados ingredientes principales. | Extraído. |
| p. 8 — Lower Body: Back Squat y Deadlift | Técnica de back squat: posición inicial, descenso, ascenso, checklist y propósito. Técnica de deadlift: posición inicial, descenso, ascenso, checklist y propósito. | Extraído. Hay una posible inconsistencia menor de profundidad: “upper legs parallel” vs checklist “hips below knees”. |
| p. 9 — Build the foundations lower body | Fundaciones de squat: Goblet Squat, Box Squat, Goblet Squat to Press, Overhead Squat. Fundaciones de deadlift: Hip Hinge Sync, Glute Bridge, Romanian Deadlift, Sumo Deadlift. Se mencionan objetivos: patrón profundo de squat, core/cadena posterior durante squat, aislar hip-hinge y fortalecer cadena posterior. | Extraído, pero la correspondencia exacta ejercicio-objetivo depende de la maquetación visual. |
| p. 10 — Upper Body: Pull Up, Close Grip Pull Ups y Bench Press | Técnica de pull-up: inicio, tirón, descenso, checklist y beneficios. Se menciona “Close Grip Pull Ups”, pero sin detalles técnicos claros en texto. Técnica de bench press: inicio, descenso, ascenso, checklist y beneficios. | Extraído. Falta aclarar visualmente “Close Grip Pull Ups”. |
| p. 11 — Build the foundations upper body | Fundaciones de bench press: Plank Row, Single Arm DB Floor Press, Press Ups, DB Chest Press. Fundaciones de pull-up: Hanging Row, Eccentric Pull Ups, Bent Over Row, TRX Row. Se mencionan objetivos: tamaño/fuerza de dorsales, fuerza con peso corporal, fuerza pecho/tríceps y estabilidad de core/escápula. | Extraído, pero la correspondencia exacta ejercicio-objetivo depende de la maquetación visual. |
| p. 12 — Core Training for Boxing | Resultados de tests sugieren que core más fuerte se asocia a pegada más dura. Core es parte de la cadena cinemática, conecta tren inferior y superior, transfiere energía de piernas a brazos. | Extraído. |
| p. 13 — Movements of the Core | Cuatro movimientos: flexión, extensión, flexión lateral y rotación. Llevarlos al límite puede hacer que el core colapse y cause lesión; entrenar para prevenir. Tabla de funciones: anti-rotation, anti-extension, anti-lateral flexion y hip flexion with neutral spine, con propósito boxístico y ejercicios. | Extraído. |
| p. 14 — Try out these exercises | Lista de ejercicios de core: Pallof Press, Landmine Rotations, Plank with Arm Reach, Suitcase Deadlift, Glute Bridge, Plank Row, Straight Arm Straight Leg Sit Up, Rotational Plank. Se muestran etiquetas funcionales, pero el texto plano no permite mapear con total certeza todas las categorías. | Extraído parcialmente ambiguo; requiere imagen. |
| p. 15 — Conditioning for Boxing | Boxeo no es resistencia continua; es deporte intermitente de impactos de alta intensidad. Red zone: 90-100% HRmax; ocurre en sparring/competición. Si no hay HR monitor, usar RPE. | Extraído. |
| p. 16 — No Man’s Land | Atletas a veces entrenan entre RPE 3 y 8; eso se llama “no man’s land”. Es ineficiente y sin propósito claro. Regla: entrenar fácil por largo tiempo o duro por corto tiempo. | Extraído. |
| p. 17 — Fases de acondicionamiento | Fase 0-3 semanas: sprint intervals 30 s máximos, ciclo si se está lejos del peso de competición, treadmill o colina; descanso 4 min; 4-6 repeticiones. Fase 3-10 semanas: HIIT 4-8 min a 90% HRmax o 9/10; descanso mitad del tiempo de trabajo; 4-6 repeticiones. Taper 10-12 semanas: 20 s máximo / 10 s recuperación, 6-8 veces; descanso 3-4 min; repetir dos veces. | Extraído. |
| p. 18 — Train like a champion | Métodos usados por boxeadores élite, por ejemplo Kell Brook. Refuerzo motivacional y validación de élite. | Extraído como contexto/validación. |
| p. 19 — The Experts | Credenciales del equipo: S&C, fisiología, psicología, nutrición. No aporta reglas cuantitativas nuevas. | Extraído como metadato de autoridad. |
| p. 20 — The Boxers | Testimonios y casos de boxeadores. Kell Brook recibió programas de S&C y entrenamiento fisiológico con high intensity treadmill runs y monitorización. | Extraído como validación aplicada. |

---

# 2. Información que no puedo cerrar del todo por falta de ayudas visuales

Estos puntos no impiden generar recomendaciones, pero sí deberían marcarse con `confidence: medium` o `pending_visual_source` si el sistema va a producir metadatos finales.

## 2.1 Página 5 — Ejecución de ejercicios de movilidad

**Qué falta:**  
El texto nombra los ejercicios, pero las imágenes probablemente muestran postura, recorrido, apoyos y errores.

**Ejercicios afectados:**

- Spiderman Hip Flexor Stretch.
- Floor Slides.
- Overhead Wall Touch.
- Eagles Lunge and Twist.
- Goblet Squat como ejercicio de movilidad/fundación.
- Glute Bridge como activación/fuerza de glúteos.

**Qué necesitaría para cerrar sin suposiciones:**

- Descripción visual de posición inicial.
- Movimiento principal.
- Cues clave.
- Errores comunes.
- Duración, repeticiones o tiempo si aparece en la imagen.
- Indicaciones de seguridad.

**Tratamiento provisional:**  
Usarlos como ejercicios de movilidad/prehab de bajo umbral, sin prescribir series ni repeticiones, y con advertencia de dolor.

---

## 2.2 Página 8 — Profundidad de sentadilla

**Qué falta / duda:**  
El texto describe bajar hasta que los muslos estén paralelos al suelo, pero el checklist dice “hips below knees at the bottom”.

**Interpretación provisional:**  
La app debería usar una regla de profundidad segura basada en movilidad y técnica, por ejemplo: “descender hasta profundidad controlada, idealmente paralelo o algo más profundo si la movilidad lo permite sin dolor”.

**Qué necesitaría:**  
Imagen del back squat para confirmar si el estándar esperado es paralelo o sentadilla profunda.

---

## 2.3 Página 9 — Agrupación de fundaciones de tren inferior

**Qué falta:**  
La página lista ejercicios de fundaciones de squat y deadlift, y también menciona objetivos como:

- Desarrollar core y cadena posterior durante squat.
- Desarrollar patrón profundo de squat.
- Aislar/afianzar hip-hinge.
- Fortalecer músculos de cadena posterior.

Pero el texto plano no deja claro qué ejercicio corresponde exactamente a cada objetivo.

**Ejercicios afectados:**

- Goblet Squat.
- Box Squat.
- Goblet Squat to Press.
- Overhead Squat.
- Hip Hinge Sync.
- Glute Bridge.
- Romanian Deadlift.
- Sumo Deadlift.

**Tratamiento provisional:**  
Usar los ejercicios como fundaciones generales del patrón squat/hinge, sin asignar una relación exclusiva ejercicio-objetivo.

---

## 2.4 Página 10 — Close Grip Pull Ups

**Qué falta:**  
Aparece “Close Grip Pull Ups”, pero no hay descripción técnica detallada en el texto extraído.

**Qué necesitaría:**

- Imagen o descripción del agarre.
- Posición de manos.
- Cue principal.
- Si es progresión, variante o complemento del pull-up.
- Criterios de uso.

**Tratamiento provisional:**  
Registrarlo como variante de `vertical-pull` relacionada con pull-up, pero sin cues ni criterios hasta recibir la ayuda visual.

---

## 2.5 Página 11 — Agrupación de fundaciones de tren superior

**Qué falta:**  
La página lista ejercicios fundacionales de bench press y pull-up, y además menciona objetivos como:

- Desarrollar tamaño y fuerza de dorsales.
- Desarrollar fuerza con peso corporal.
- Desarrollar fuerza de pecho y tríceps.
- Desarrollar estabilidad de core y escápula.

Pero no queda totalmente claro qué ejercicio corresponde a cada objetivo.

**Ejercicios afectados:**

- Plank Row.
- Single Arm DB Floor Press.
- Press Ups.
- DB Chest Press.
- Hanging Row.
- Eccentric Pull Ups.
- Bent Over Row.
- TRX Row.

**Tratamiento provisional:**  
Asignar los ejercicios como fundaciones generales de push/pull, con etiquetas amplias y sin cerrar una clasificación exclusiva hasta recibir la imagen.

---

## 2.6 Página 14 — Clasificación funcional de ejercicios de core

**Qué falta:**  
El texto muestra ejercicios y etiquetas como anti-rotation, anti-extension, anti-lateral flexion y hip flexion with neutral spine, pero la disposición del texto plano hace difícil asignar con certeza algunos ejercicios a una categoría única.

**Ejercicios afectados:**

- Pallof Press.
- Landmine Rotations.
- Plank with Arm Reach.
- Suitcase Deadlift.
- Glute Bridge.
- Plank Row.
- Straight Arm Straight Leg Sit Up.
- Rotational Plank.

**Lo que sí está claro por p. 13:**

- Pallof Press y Landmine Rotations aparecen asociados a anti-rotation.
- Plank y Hand walkouts aparecen asociados a anti-extension.
- Landmine rotations, Suitcase Deadlift y Side Plank aparecen asociados a anti-lateral flexion.
- Deadbugs y Straight leg sit ups aparecen asociados a hip flexion with neutral spine.

**Lo que queda menos claro en p. 14:**  
La clasificación exacta de Plank with Arm Reach, Glute Bridge, Plank Row y Rotational Plank puede depender de la imagen.

**Tratamiento provisional:**  
Etiquetar de forma conservadora, permitiendo múltiples funciones cuando el ejercicio lo sugiera, y marcar `pending_visual_source` para clasificación final.

---

# 3. Supuestos conservadores usados para no inventar datos

Para avanzar sin inventar, he aplicado estos criterios:

1. **No inventar series, repeticiones, cargas ni frecuencias** cuando el libro no las especifica.
2. **No convertir una imagen ausente en criterio técnico definitivo.**
3. **Usar checklists textuales** del libro como criterios de ejecución cuando existen.
4. **Marcar como inferido** todo criterio de progresión no explícito.
5. **Tratar movilidad y core como prehabilitación/entrenamiento preventivo**, no como rehabilitación médica.
6. **Mantener el disclaimer médico** del libro como límite de uso en la app.
7. **No usar testimonios como reglas cuantitativas**, solo como validación de contexto.

---

# 4. Las 5 recomendaciones principales para implementar este libro en Plan Maestro OS

A continuación, las 5 recomendaciones concretas que propongo para convertir esta extracción en reglas, metadatos y progresiones dentro del sistema.

---

## Recomendación 1 — Crear un módulo de acondicionamiento boxístico basado en fases de 12 semanas

### Qué hacer

Construir un módulo de reglas específico para acondicionamiento de boxeo usando las páginas 15-17 como fuente principal.

### Entidades sugeridas

- `BoxingConditioningPhase`
- `IntensityZone`
- `ConditioningSessionRule`
- `RpeHrMonitorRule`

### Reglas que debería incluir

1. **Deporte de alta intensidad intermitente**
   - El boxeo no debe modelarse como resistencia continua.
   - Debe modelarse como esfuerzo repetido de alta intensidad con impactos.
   - Fuente: p. 15.

2. **Red zone**
   - Zona objetivo: 90-100% HRmax.
   - Relevante para sparring y competición.
   - Si no hay HR monitor, usar RPE.
   - Fuente: p. 15.

3. **Evitar no man’s land**
   - Evitar sesiones cuyo RPE esté entre 3 y 8 si no tienen propósito claro.
   - Regla: o fácil y largo, o duro y corto.
   - Fuente: p. 16.

4. **Fase 0-3 semanas: sprint interval training**
   - Trabajo: 30 segundos máximos.
   - Modalidad: ciclo, treadmill o colina.
   - Condición especial: ciclo si el boxeador está lejos del peso de competición.
   - Descanso: 4 minutos.
   - Repeticiones: 4-6.
   - Objetivo: esfuerzo máximo y rápido.
   - Fuente: p. 17.

5. **Fase 3-10 semanas: high intensity interval training**
   - Trabajo: 4-8 minutos.
   - Intensidad: 90% HRmax o 9/10 RPE.
   - Descanso: mitad del tiempo de trabajo.
   - Repeticiones: 4-6.
   - Objetivo: acumular tiempo por encima de 90% HRmax.
   - Fuente: p. 17.

6. **Fase 10-12 semanas: taper**
   - Trabajo: 20 segundos máximos.
   - Recuperación: 10 segundos.
   - Repeticiones: 6-8.
   - Descanso entre bloques: 3-4 minutos.
   - Repetir dos veces.
   - Objetivo: mantener intensidad y reducir volumen.
   - Fuente: p. 17.

### Validaciones sugeridas

- Si `phase.week` está entre 0 y 3, validar intervalos de 30 s y descanso de 4 min.
- Si `phase.week` está entre 3 y 10, validar trabajo de 4-8 min y descanso = 50% del trabajo.
- Si `phase.week` está entre 10 y 12, validar 20/10 y volumen reducido.
- Si `session.rpe` está entre 3 y 8 y no hay objetivo explícito de recuperación/extensión, lanzar warning.
- Si `session.intensity` entra en red zone, exigir flag de preparación previa o supervisión.

### Salida recomendada para agentes

Crear algo equivalente a:

- `rules/boxing_conditioning.ts`
- `metadata/conditioning_phases.json`
- `tags/intensity_zones.json`

### Prioridad

Alta. Es la parte más cuantitativa del libro y la más directamente convertible en `TrainingRule`.

---

## Recomendación 2 — Añadir una taxonomía de fuerza por patrones de movimiento y categorías de boxeo

### Qué hacer

Modelar los ejercicios de fuerza usando las categorías descritas en la página 7:

- `squat`
- `hinge`
- `push`
- `pull`
- `unilateral`
- `core`

### Por qué

El libro establece que estas categorías deberían estar en todo programa de fuerza y acondicionamiento para boxeo. Esto es ideal para validar programas dentro del sistema.

### Reglas sugeridas

1. **Programa balanceado**
   - Un programa de fuerza para boxeo debería incluir ejercicios de las seis categorías.
   - Fuente: p. 7.

2. **Prioridad de ejercicios compuestos**
   - Los movimientos compuestos deben considerarse ingredientes principales.
   - Justificación: activan más músculos y permiten cargar más peso.
   - Fuente: p. 7.

3. **Transferencia a pegada**
   - `push` se asocia a velocidad de mano y stiffening en impacto.
   - `pull` se asocia a pre-stretch, combinaciones y salud de hombro.
   - `hinge` se asocia a extensión de cadera y fuerza concéntrica.
   - `squat` se asocia a impulso de tren inferior.
   - `unilateral` se asocia a reducción de desequilibrios y pegada con ambos brazos.
   - `core` se asocia a transferencia de energía.
   - Fuente: p. 7.

### Mapeo recomendado

| Concepto del libro | Entidad / tag sugerido |
|---|---|
| Squat | `MovementPattern.squat` |
| Hinge | `MovementPattern.hinge` |
| Push | `MovementPattern.horizontal-push` o `vertical-push` según variante |
| Pull | `MovementPattern.horizontal-pull` o `vertical-pull` según variante |
| Uni-lateral | `ExerciseTrait.unilateral` |
| Core | `FocusId.core-strength` / `core-control` |

### Validaciones sugeridas

- Si una rutina de fuerza no tiene al menos un ejercicio de cada categoría, generar warning.
- Si el objetivo es `punch-force`, exigir presencia de hinge, push, pull, core y al menos un ejercicio de tren inferior.
- Si el usuario tiene historial de dolor de hombro, priorizar `pull` y movilidad antes de `push` pesado.

### Salida recomendada para agentes

Crear algo equivalente a:

- `rules/strength_program_balance.ts`
- `tags/strength_categories.json`
- `metadata/exercise_pattern_mapping.json`

### Prioridad

Alta. Es una base estructural útil para casi todas las rutinas de fuerza.

---

## Recomendación 3 — Construir SkillPaths fundacionales para Back Squat, Deadlift, Bench Press y Pull-Up

### Qué hacer

Crear progresiones tipo `SkillPath` para los cuatro movimientos principales del libro, usando las páginas 8-11.

### SkillPaths recomendados

#### 1. `boxing-squat-foundation-to-back-squat`

**Objetivo final:** back squat técnico.

**Fundaciones:**

- Goblet Squat.
- Box Squat.
- Goblet Squat to Press.
- Overhead Squat.

**Criterio de pase sugerido, no explícito en libro:**

- Mantener talones apoyados.
- Rodillas alineadas con pies.
- Torso controlado.
- Profundidad segura.
- Sin dolor.

**Fuente:** p. 8-9.

---

#### 2. `boxing-deadlift-foundation-to-deadlift`

**Objetivo final:** deadlift con activación coordinada de cadena posterior.

**Fundaciones:**

- Hip Hinge Sync.
- Glute Bridge.
- Romanian Deadlift.
- Sumo Deadlift.

**Criterio de pase sugerido:**

- Bisagra de cadera clara.
- Barra cerca.
- Core brace.
- Extensión de cadera sin hiperextensión.
- Sin dolor.

**Fuente:** p. 8-9.

---

#### 3. `boxing-bench-press-foundation-to-bench-press`

**Objetivo final:** bench press técnico.

**Fundaciones:**

- Plank Row.
- Single Arm DB Floor Press.
- Press Ups.
- DB Chest Press.

**Criterio de pase sugerido:**

- Estabilidad escapular.
- Codos a 45 grados.
- Descenso controlado.
- Extensión completa.
- Sin dolor de hombro.

**Fuente:** p. 10-11.

---

#### 4. `boxing-pull-up-foundation-to-pull-up`

**Objetivo final:** pull-up completo.

**Fundaciones:**

- Hanging Row.
- Eccentric Pull Ups.
- Bent Over Row.
- TRX Row.

**Criterio de pase sugerido:**

- Escápulas apretadas.
- Core brace.
- Sin balanceo.
- Rango completo.
- Cabeza pasa la barra/aparato según criterio del libro.

**Fuente:** p. 10-11.

### Advertencia importante

El libro no da criterios numéricos de avance, por ejemplo: “3x10 sin dolor” o “5 repeticiones perfectas”. Por tanto, los criterios de pase deben marcarse como:

- `criteriaSource: inferred_from_checklist`
- `confidence: medium`
- `requiresCoachValidation: true`

### Salida recomendada para agentes

Crear algo equivalente a:

- `skill_paths/boxing_strength_foundations.json`
- `rules/skill_progression_prerequisites.ts`
- `metadata/skill_step_checklists.json`

### Prioridad

Media-alta. Muy útil para onboarding de usuarios y para evitar asignar movimientos principales sin base técnica.

---

## Recomendación 4 — Modelar el core por funciones de control, no solo por ejercicios

### Qué hacer

En lugar de etiquetar core únicamente como `abs`, `core` o `sit-ups`, crear una taxonomía funcional basada en las páginas 13-14.

### Categorías funcionales recomendadas

| Categoría | Acción | Propósito boxístico | Ejercicios claros |
|---|---|---|---|
| `anti-rotation` | Resistir rotación lumbar | Mejorar rotación de pegada usando stretch-shortening cycle | Pallof Press, Landmine Rotations |
| `anti-extension` | Resistir extensión lumbar | Proteger espalda durante alto volumen de pegada | Plank, Hand walkouts |
| `anti-lateral-flexion` | Resistir flexión lateral | Controlar uppercuts, ducks y slips | Suitcase Deadlift, Side Plank, Landmine rotations |
| `hip-flexion-neutral-spine` | Flexionar cadera manteniendo columna neutra | Mejor postura al trabajar al cuerpo | Deadbugs, Straight leg sit ups |

### Reglas sugeridas

1. **Cobertura funcional de core**
   - Una rutina de core para boxeo debería incluir ejercicios de las cuatro funciones.
   - Fuente: p. 13-14.

2. **Evitar rangos extremos**
   - No llevar flexión, extensión, flexión lateral o rotación al límite si el core no está preparado.
   - Fuente: p. 13.

3. **Core como transferencia**
   - Si el objetivo es pegada, el core debe modelarse como transmisor entre tren inferior y superior.
   - Fuente: p. 12.

4. **No usar core solo como fatiga**
   - El core no debería programarse únicamente como circuito de resistencia si se busca transferencia a pegada.
   - Esto se deriva del enfoque de control y transferencia del libro.

### Etiquetas sugeridas

- `coreFunction: anti-rotation`
- `coreFunction: anti-extension`
- `coreFunction: anti-lateral-flexion`
- `coreFunction: hip-flexion-neutral-spine`
- `transfer: punch-force`
- `transfer: head-movement`
- `transfer: body-shot-posture`

### Ejercicios que deberían quedar etiquetados

Confirmados o casi confirmados:

- Pallof Press → `anti-rotation`
- Landmine Rotations → `anti-rotation`, posiblemente también `anti-lateral-flexion`
- Plank → `anti-extension`
- Hand walkouts → `anti-extension`
- Suitcase Deadlift → `anti-lateral-flexion`
- Side Plank → `anti-lateral-flexion`
- Deadbugs → `hip-flexion-neutral-spine`
- Straight leg sit ups → `hip-flexion-neutral-spine`

Requieren confirmación visual:

- Plank with Arm Reach.
- Glute Bridge.
- Plank Row.
- Rotational Plank.

### Salida recomendada para agentes

Crear algo equivalente a:

- `tags/core_control_functions.json`
- `rules/core_training_balance.ts`
- `metadata/core_exercise_mapping.json`

### Prioridad

Alta. Es uno de los diferenciales del libro y conecta directamente con pegada, postura y prevención.

---

## Recomendación 5 — Crear una capa de movilidad/prehab específica para boxeo con control de riesgo y sin uso clínico

### Qué hacer

Añadir un módulo de movilidad y prehabilitación para boxeadores basado en páginas 4-5, 12-14, con límites claros de uso.

### Focos de movilidad/prehab

#### 1. Cadera

**Problema descrito:**

- Rigidez de flexores de cadera.
- Posible asociación con dolor lumbar y menor función de glúteos.
- Limitación de extensión/rotación de cadera, reduciendo fuerza de pegada.

**Ejercicios relevantes:**

- Spiderman Hip Flexor Stretch.
- Goblet Squat.
- Glute Bridge.
- Eagles Lunge and Twist.

**Tags sugeridos:**

- `mobilityTarget: hip`
- `prehabRisk: hip-flexor-tightness`
- `bodyZone: hip`
- `bodyZone: lumbar`
- `goal: hip-extension`
- `goal: hip-rotation`

---

#### 2. Hombro

**Problema descrito:**

- Movilidad pobre de hombro.
- Anterior deltoid y upper traps sobreactivos.
- Middle/lower traps débiles.
- Riesgo de impingement, debilidad/lesión de manguito rotador y lesiones lumbares.

**Ejercicios relevantes:**

- Floor Slides.
- Overhead Wall Touch.
- Pulling exercises para cadena posterior y salud de hombro.

**Tags sugeridos:**

- `mobilityTarget: shoulder`
- `prehabRisk: shoulder-mobility-deficit`
- `bodyZone: shoulder`
- `prehabGoal: scapular-control`
- `prehabGoal: rotator-cuff-support`

---

#### 3. Rotación

**Problema descrito:**

- Problemas de rotación y separación entre tren inferior y superior.
- Menor transferencia de fuerza a pegada.
- Posible impacto en el rol del core en jab.

**Ejercicios relevantes:**

- Eagles Lunge and Twist.
- Landmine Rotations.
- Pallof Press.
- Rotational Plank, pendiente de confirmación visual.

**Tags sugeridos:**

- `mobilityTarget: rotation`
- `movementQuality: trunk-rotation`
- `transfer: punch-force`
- `prehabGoal: rotational-control`

---

### Reglas de seguridad recomendadas

1. **No diagnosticar**
   - El sistema no debe diagnosticar impingement, lesión de manguito rotador ni dolor lumbar.
   - Fuente de límite: disclaimer p. 2.

2. **No automatizar rehab clínica**
   - Estos ejercicios deben usarse como preparación/prehab, no como tratamiento de una lesión activa.
   - Fuente: p. 2, p. 5.

3. **Dolor como red flag**
   - Si el usuario reporta dolor, detener progresión y sugerir evaluación profesional.
   - El libro no da escala de dolor; usar regla conservadora: dolor > 0 durante ejercicio = stop/consult.

4. **No forzar rangos extremos**
   - El libro advierte contra llevar movimientos espinales al límite.
   - Fuente: p. 13.

5. **Condicionar empujes pesados si hay movilidad pobre de hombro**
   - Si hay flag de movilidad pobre de hombro, priorizar movilidad, control escapular y tirones antes de bench press pesado.
   - Derivado de p. 5 y p. 10.

### Salida recomendada para agentes

Crear algo equivalente a:

- `rules/mobility_prehab_boxing.ts`
- `tags/mobility_targets.json`
- `metadata/prehab_flags.json`
- `safety/medical_disclaimer_boxing.json`

### Prioridad

Alta. Es clave para seguridad, personalización y prevención, pero debe implementarse con límites claros.

---

# 5. Resumen ejecutivo de las 5 recomendaciones

| # | Recomendación | Uso principal | Prioridad |
|---|---|---|---|
| 1 | Módulo de acondicionamiento boxístico de 12 semanas | Reglas de intervalos, HR/RPE, fases, no man’s land | Alta |
| 2 | Taxonomía de fuerza por patrones | Balance de rutinas, selección de ejercicios | Alta |
| 3 | SkillPaths fundacionales | Progresión segura hacia squat, deadlift, bench, pull-up | Media-alta |
| 4 | Core por funciones de control | Transferencia a pegada y protección lumbar | Alta |
| 5 | Movilidad/prehab específica de boxeo | Seguridad, prevención y preparación de movimiento | Alta |

---

# 6. Lo que debería pedirte para cerrar al 100% sin suposiciones

Para que la extracción quede completamente cerrada, necesitaría que me proporciones o describas las ayudas visuales de estas páginas:

1. **Página 5**  
   Imágenes de:
   - Spiderman Hip Flexor Stretch.
   - Floor Slides.
   - Overhead Wall Touch.
   - Eagles Lunge and Twist.
   - Goblet Squat.
   - Glute Bridge.

2. **Página 8**  
   Imagen o detalle de profundidad de back squat para resolver:
   - paralelo vs cadera bajo rodillas.

3. **Página 9**  
   Maquetación clara de fundaciones de squat/deadlift para asignar:
   - qué ejercicios desarrollan patrón profundo;
   - qué ejercicios desarrollan core/cadena posterior;
   - qué ejercicios aislan hip-hinge;
   - qué ejercicios fortalecen cadena posterior.

4. **Página 10**  
   Imagen o texto de:
   - Close Grip Pull Ups.

5. **Página 11**  
   Maquetación clara de fundaciones de bench/pull-up para asignar:
   - lat size/strength;
   - bodyweight strength;
   - chest/triceps strength;
   - core/scapula stability.

6. **Página 14**  
   Imagen clara de la clasificación funcional de:
   - Plank with Arm Reach.
   - Suitcase Deadlift.
   - Glute Bridge.
   - Plank Row.
   - Rotational Plank.

Con eso, puedo completar los metadatos sin marcar nada como inferido y dejar las reglas con confianza alta.

---

## Ronda 3 — tras: «¡Excelente trabajo de auditoría técnica! Revisando el documento original página por página y analizando su disposición visual, aquí tienes l…»
Perfecto. Con estas resoluciones queda cerrada la lógica de interpretación y puedo ajustar los metadatos finales con precisión.

A continuación dejo la **versión consolidada final** para el sistema, aplicando tus correcciones punto por punto.

---

# Extracción final consolidada — Boxing Science Training eBook

> Estado: extracción textual completa y normalizada.  
> Estado de metadatos: mayormente alta confianza.  
> Pendiente residual: ejecución visual detallada de ejercicios de movilidad de p. 5, pero su uso funcional ya queda claro.

---

## 1. Estado final de la extracción

| Página | Estado final | Decisión de sistema |
|---|---|---|
| p. 2 | Extraído | Metadatos de autoridad, disclaimer y alcance. |
| p. 3 | Extraído | Contexto de rendimiento boxístico. |
| p. 4 | Extraído | Reglas cualitativas de movimiento y movilidad. |
| p. 5 | Extraído con confianza media | Movilidad/prehab sin dosis cuantitativa; `pending_visual_source` para ejecución detallada. |
| p. 6 | Extraído | Modelo de pegada: fuerza, RFD, core, effective mass/snap. |
| p. 7 | Extraído | Taxonomía de fuerza: squat, hinge, push, pull, unilateral, core. |
| p. 8 | Extraído y resuelto | Back squat y deadlift con checklist; profundidad adaptativa. |
| p. 9 | Resuelto | Mapeo exacto de fundaciones de squat y deadlift. |
| p. 10 | Resuelto | Pull-Up convencional como entrada principal; Close Grip Pull Up como variante. |
| p. 11 | Resuelto | Mapeo exacto de fundaciones de bench press y pull-up. |
| p. 12 | Extraído | Core como transferencia de energía en la cadena cinemática. |
| p. 13 | Extraído | Funciones de core: anti-rotation, anti-extension, anti-lateral flexion, hip flexion neutral spine. |
| p. 14 | Resuelto | Matriz funcional final de ejercicios de core. |
| p. 15 | Extraído | Acondicionamiento intermitente de alta intensidad y red zone. |
| p. 16 | Extraído | Regla de evitar “no man’s land” RPE 3-8. |
| p. 17 | Extraído | Protocolos cuantitativos por fases: 0-3, 3-10, 10-12 semanas. |
| p. 18 | Extraído | Validación con atletas élite; no genera regla cuantitativa. |
| p. 19 | Extraído | Autoridad del equipo; metadatos. |
| p. 20 | Extraído | Testimonios y casos de uso; validación aplicada. |

---

# 2. Ajustes punto por punto

---

## 2.1 Página 5 — Movilidad

### Decisión final

Se mantiene el tratamiento como módulo de movilidad/prehab de bajo riesgo, sin prescripción cuantitativa rígida.

### Metadatos finales

- `confidence`: `medium`
- `flag`: `pending_visual_source`
- `dosage`: `not_specified`
- `usage`: `mobility_prep` / `prehab_low_risk`
- `requiresMedicalClearanceIfPain`: `true`

### Clasificación funcional final de los ejercicios de p. 5

| Categoría del libro | Ejercicio | Uso funcional | Fuente |
|---|---|---|---|
| Hip Mobility | Spiderman Hip Flexor Stretch | Movilidad de flexores de cadera; preparación para extensión/rotación de cadera. | p. 5 |
| Shoulder Mobility | Floor Slides | Movilidad y control de hombro; preparación de movimiento escapular. | p. 5 |
| Shoulder Mobility | Overhead Wall Touch | Movilidad/control overhead; preparación para posiciones de hombro elevadas. | p. 5 |
| Rotational Mobility | Eagles Lunge and Twist | Rotación de tronco y separación tren inferior/superior. | p. 5 |
| Glute Strength | Goblet Squat | Fuerza/activación de glúteos y patrón de squat. | p. 5 |
| Glute Strength | Glute Bridge | Fuerza/activación de glúteos para extensión de cadera. | p. 5 |

### Regla de sistema

```text
Si el objetivo es boxing-mobility:
  incluir movilidad de cadera, hombro y rotación.
  no prescribir series, repeticiones o tiempo si no hay fuente visual.
  usar como preparación/prehab de bajo umbral.
  detener si hay dolor.
```

---

## 2.2 Página 8 — Profundidad de sentadilla

### Decisión final

Se aplica regla adaptativa de seguridad.

### Regla final: `boxing-squat-depth-adaptive`

- **Referencia base:** muslos paralelos al suelo.
- **Permitir mayor profundidad solo si:**
  - El usuario mantiene control técnico.
  - No aparece dolor.
  - No hay compensación lumbar tipo butt wink.
  - Mantiene apoyo de talones y rodillas alineadas.
  - Tiene movilidad suficiente de cadera/tobillo.
- **Si no cumple criterios:**
  - Regresar a Box Squat o Goblet Squat.
  - Mantener profundidad segura.

### Metadatos

- `sourcePage`: 8
- `confidence`: `high`
- `ruleType`: `technique_safety`
- `movement`: `back_squat`
- `defaultDepth`: `parallel`
- `advancedDepthAllowed`: `conditional`

### Criterio técnico final

```text
Profundidad estándar = paralelo.
Profundidad profunda = opcional y condicional a movilidad y control.
```

---

## 2.3 Página 9 — Fundaciones de tren inferior

### Decisión final

Se acepta el mapeo exacto por disposición visual.

---

### Squat Foundations

| Objetivo | Ejercicios | Tag sugerido |
|---|---|---|
| Aprender patrón profundo de sentadilla | Goblet Squat, Box Squat | `squat_pattern_learning` |
| Desarrollar core y cadena posterior durante el squat | Goblet Squat to Press, Overhead Squat | `squat_core_posterior_chain` |

---

### Deadlift Foundations

| Objetivo | Ejercicios | Tag sugerido |
|---|---|---|
| Aislar y afianzar el patrón de hip-hinge | Hip Hinge Sync, Glute Bridge | `hip_hinge_pattern_learning` |
| Fortalecer la cadena posterior | Romanian Deadlift, Sumo Deadlift | `posterior_chain_strength` |

---

### Regla final: `boxing-lower-foundation-purpose-map`

```text
Si el usuario no está listo para Back Squat:
  usar Goblet Squat o Box Squat para patrón de sentadilla.
  usar Goblet Squat to Press u Overhead Squat para core/cadena posterior en squat.

Si el usuario no está listo para Deadlift:
  usar Hip Hinge Sync o Glute Bridge para patrón de bisagra.
  usar Romanian Deadlift o Sumo Deadlift para fuerza de cadena posterior.
```

### Metadatos

- `sourcePage`: 9
- `confidence`: `high`
- `resolvedBy`: `visual_layout`
- `previousFlag`: `inferred_mapping`
- `currentFlag`: `confirmed_mapping`

---

## 2.4 Página 10 — Close Grip Pull Ups

### Decisión final

La entrada técnica principal debe ser **Pull-Up convencional con agarre pronado**.

`Close Grip Pull Up` se registra como variante de agarre más cerrado, heredando cues y checklist del Pull-Up convencional.

---

### Entidad principal: Pull-Up

- `id`: `pull_up`
- `movementPattern`: `vertical_pull`
- `primaryFocus`: `lats`, `arms`, `core`
- `grip`: `pronated`
- `gripWidth`: `shoulder_width_or_appropriate_handle`
- `sourcePage`: 10

### Variante: Close Grip Pull-Up

- `id`: `close_grip_pull_up`
- `variantOf`: `pull_up`
- `movementPattern`: `vertical_pull`
- `grip`: `pronated`
- `gripWidth`: `narrow`
- `technicalChecklist`: hereda `pull_up`
- `sourcePage`: 10
- `confidence`: `high`

### Cues compartidas

- Colgarse con agarre pronado.
- Brazos rectos al iniciar.
- Core brace.
- Espalda recta y pecho afuera.
- Tirar flexionando codos y apretando escápulas.
- Cabeza pasa sobre barra/aparato.
- Descenso controlado hasta brazos rectos.
- Sin balanceo.
- Rango completo.

### Regla final

```text
Close Grip Pull Up no debe crear una checklist independiente.
Debe heredar la checklist del Pull-Up convencional.
La única diferencia explícita registrada es el ancho de agarre.
```

---

## 2.5 Página 11 — Fundaciones de tren superior

### Decisión final

Se acepta el mapeo exacto por disposición visual.

---

### Bench Press Foundations

| Objetivo | Ejercicios | Tag sugerido |
|---|---|---|
| Estabilidad de core y escápula | Plank Row | `core_scapula_stability` |
| Fuerza de pecho y tríceps | Single Arm DB Floor Press, Press Ups, DB Chest Press | `chest_triceps_strength` |

---

### Pull Up Foundations

| Objetivo | Ejercicios | Tag sugerido |
|---|---|---|
| Desarrollar tamaño y fuerza de dorsales | Hanging Row, Eccentric Pull Ups | `lat_size_strength` |
| Desarrollar fuerza con peso corporal / tracción horizontal | TRX Row, Bent Over Row | `bodyweight_strength`, `horizontal_pull` |

---

### Regla final: `boxing-upper-foundation-purpose-map`

```text
Si el usuario no está listo para Bench Press:
  usar Plank Row para estabilidad de core/escápula.
  usar Single Arm DB Floor Press, Press Ups o DB Chest Press para fuerza de pecho/tríceps.

Si el usuario no está listo para Pull-Up:
  usar Hanging Row o Eccentric Pull Ups para fuerza de dorsales.
  usar TRX Row o Bent Over Row para tracción y fuerza base.
```

### Metadatos

- `sourcePage`: 11
- `confidence`: `high`
- `resolvedBy`: `visual_layout`
- `previousFlag`: `inferred_mapping`
- `currentFlag`: `confirmed_mapping`

---

## 2.6 Página 14 — Clasificación funcional de core

### Decisión final

Se acepta la matriz funcional exacta proporcionada.

---

### Matriz funcional final de ejercicios de core

| Ejercicio | Clasificación funcional | Fuente | Tags sugeridos |
|---|---|---|---|
| Pallof Press | Anti-Rotation | p. 14 | `anti_rotation`, `core_control` |
| Landmine Rotations | Anti-Lateral Flexion, Anti-Rotation | p. 14 | `anti_lateral_flexion`, `anti_rotation` |
| Plank with Arm Reach | Anti-Extension, Anti-Rotation | p. 14 | `anti_extension`, `anti_rotation` |
| Suitcase Deadlift | Anti-Lateral Flexion | p. 14 | `anti_lateral_flexion`, `loaded_carry_variant` |
| Glute Bridge | Hip Flexion with Neutral Spine | p. 14 | `hip_flexion_neutral_spine`, `glute_strength` |
| Plank Row | Anti-Extension, Anti-Rotation | p. 14 | `anti_extension`, `anti_rotation`, `core_scapula_stability` |
| Straight Arm Straight Leg Sit Up | Hip Flexion with Neutral Spine | p. 14 | `hip_flexion_neutral_spine`, `core_control` |
| Rotational Plank | Anti-Extension, Anti-Rotation | p. 14 | `anti_extension`, `anti_rotation` |

---

### Nota de consistencia multi-fuente

Algunos ejercicios tienen más de una fuente dentro del libro:

| Ejercicio | Fuente adicional | Relación |
|---|---|---|
| Glute Bridge | p. 5 | También aparece como Glute Strength. |
| Plank Row | p. 11 | También aparece como Bench Press Foundation para estabilidad de core/escápula. |
| Landmine Rotations | p. 13 | También aparece asociado a Anti-Rotation y Anti-Lateral Flexion. |
| Suitcase Deadlift | p. 13 | También aparece asociado a Anti-Lateral Flexion. |

### Regla final

```text
La clasificación de p. 14 se usa como fuente principal para coreFunction.
Si hay otra página con función complementaria, se conserva como tag secundario.
No eliminar tags multi-funcionales.
```

---

# 3. Metadatos finales recomendados por entidad

---

## 3.1 Ejercicios de movilidad

```yaml
source: boxing-science-training-ebook
page: 5
confidence: medium
flags:
  - pending_visual_source
  - no_quantitative_dose
usage:
  - mobility
  - prehab_low_risk
bodyZones:
  - hip
  - shoulder
  - trunk
movementFocus:
  - hip_mobility
  - shoulder_mobility
  - rotational_mobility
  - glute_strength
```

---

## 3.2 Back Squat

```yaml
source: boxing-science-training-ebook
page: 8
confidence: high
movementPattern: squat
defaultDepth: parallel
advancedDepthAllowed: true
advancedDepthConditions:
  - no_pain
  - no_butt_wink
  - stable_heels
  - knees_track_over_toes
  - adequate_hip_mobility
prerequisites:
  - goblet_squat
  - box_squat
```

---

## 3.3 Deadlift

```yaml
source: boxing-science-training-ebook
page: 8
confidence: high
movementPattern: hinge
primaryFocus:
  - posterior_chain
  - hip_extension
technicalChecklist:
  - squeeze_shoulders
  - drive_through_heels
  - keep_bar_close
  - punch_hips_forward_at_top
prerequisites:
  - hip_hinge_sync
  - glute_bridge
  - romanian_deadlift
```

---

## 3.4 Bench Press

```yaml
source: boxing-science-training-ebook
page: 10
confidence: high
movementPattern: horizontal_push
primaryFocus:
  - chest
  - triceps
  - upper_body_strength
technicalChecklist:
  - squeeze_shoulders
  - brace_core
  - control_tempo
  - elbows_45_degrees
  - smash_bar_up
prerequisites:
  - plank_row
  - single_arm_db_floor_press
  - press_ups
  - db_chest_press
```

---

## 3.5 Pull-Up / Close Grip Pull-Up

```yaml
source: boxing-science-training-ebook
page: 10
confidence: high
movementPattern: vertical_pull
primaryFocus:
  - lats
  - arms
  - core
technicalChecklist:
  - squeeze_shoulder_blades
  - brace_core
  - no_swinging
  - full_range_of_motion
variants:
  close_grip_pull_up:
    grip: pronated
    gripWidth: narrow
    inheritChecklist: true
prerequisites:
  - hanging_row
  - eccentric_pull_ups
  - trx_row
  - bent_over_row
```

---

## 3.6 Core

```yaml
source: boxing-science-training-ebook
pages:
  - 13
  - 14
confidence: high
coreFunctions:
  - anti_rotation
  - anti_extension
  - anti_lateral_flexion
  - hip_flexion_neutral_spine
exerciseFunctionMatrix:
  pallof_press:
    - anti_rotation
  landmine_rotations:
    - anti_lateral_flexion
    - anti_rotation
  plank_with_arm_reach:
    - anti_extension
    - anti_rotation
  suitcase_deadlift:
    - anti_lateral_flexion
  glute_bridge:
    - hip_flexion_neutral_spine
    - glute_strength
  plank_row:
    - anti_extension
    - anti_rotation
    - core_scapula_stability
  straight_arm_straight_leg_sit_up:
    - hip_flexion_neutral_spine
  rotational_plank:
    - anti_extension
    - anti_rotation
```

---

# 4. Reglas finales que se deben actualizar

---

## Regla: `boxing-mobility-low-risk-prep`

- **Tipo:** movilidad / prehab.
- **Métrica:** cobertura de foco de movilidad.
- **Valores:** incluir cadera, hombro y rotación.
- **Dosis:** no especificada.
- **Condición:** usar como preparación/prehab, no como rehab clínica.
- **Flags:** `pending_visual_source`, `confidence_medium`.
- **Fuente:** p. 5.

---

## Regla: `boxing-squat-depth-adaptive`

- **Tipo:** técnica / seguridad.
- **Métrica:** profundidad de sentadilla.
- **Valor base:** paralelo.
- **Valor avanzado:** cadera bajo rodillas solo si hay movilidad y control.
- **Condiciones:**
  - Sin dolor.
  - Sin butt wink.
  - Talones estables.
  - Rodillas alineadas.
- **Fuente:** p. 8.

---

## Regla: `boxing-lower-foundation-purpose-map`

- **Tipo:** progresión / selección de ejercicios.
- **Métrica:** asignación ejercicio-objetivo.
- **Valores confirmados:**
  - Goblet Squat / Box Squat → patrón profundo de squat.
  - Goblet Squat to Press / Overhead Squat → core y cadena posterior en squat.
  - Hip Hinge Sync / Glute Bridge → patrón hip-hinge.
  - Romanian Deadlift / Sumo Deadlift → fuerza de cadena posterior.
- **Fuente:** p. 9.

---

## Regla: `boxing-close-grip-pullup-variant`

- **Tipo:** variante de ejercicio.
- **Métrica:** relación variante-ejercicio base.
- **Valores:**
  - Pull-Up convencional como entidad principal.
  - Close Grip Pull-Up como variante de agarre cerrado.
  - Misma checklist técnica heredada.
- **Fuente:** p. 10.

---

## Regla: `boxing-upper-foundation-purpose-map`

- **Tipo:** progresión / selección de ejercicios.
- **Métrica:** asignación ejercicio-objetivo.
- **Valores confirmados:**
  - Plank Row → estabilidad de core y escápula.
  - Single Arm DB Floor Press / Press Ups / DB Chest Press → pecho y tríceps.
  - Hanging Row / Eccentric Pull Ups → dorsales.
  - TRX Row / Bent Over Row → tracción/fuerza base.
- **Fuente:** p. 11.

---

## Regla: `boxing-core-function-matrix`

- **Tipo:** clasificación funcional.
- **Métrica:** coreFunction por ejercicio.
- **Valores confirmados:** matriz final de p. 14.
- **Uso:** etiquetar ejercicios, validar cobertura funcional de rutinas de core.
- **Fuente:** p. 14.

---

# 5. Las 5 recomendaciones finales para implementar en Plan Maestro OS

---

## Recomendación 1 — Implementar el módulo de acondicionamiento boxístico como fuente cuantitativa principal

### Qué hacer

Convertir las páginas 15-17 en el motor principal de reglas de acondicionamiento.

### Datos a usar

- Boxeo como deporte intermitente de alta intensidad. p. 15.
- Red zone: 90-100% HRmax. p. 15.
- RPE como alternativa si no hay HR monitor. p. 15.
- No Man’s Land: evitar RPE 3-8. p. 16.
- Fase 0-3 semanas: sprint intervals. p. 17.
- Fase 3-10 semanas: HIIT largo. p. 17.
- Fase 10-12 semanas: taper. p. 17.

### Reglas clave

```text
Evitar sesiones intermedias sin propósito claro.
Si es fácil, debe ser largo.
Si es duro, debe ser corto.
La zona roja se usa para preparar sparring/competición.
La fase final mantiene intensidad y reduce volumen.
```

### Metadatos recomendados

```yaml
module: boxing_conditioning
confidence: high
sourcePages:
  - 15
  - 16
  - 17
ruleType:
  - intensity_distribution
  - interval_protocol
  - tapering
```

### Prioridad

Alta.

---

## Recomendación 2 — Cargar el catálogo de fuerza con las fundaciones confirmadas de p. 9 y p. 11

### Qué hacer

Actualizar el catálogo de ejercicios para que las fundaciones tengan objetivo exacto y no inferido.

### Datos a usar

- Categorías de fuerza: squat, hinge, push, pull, unilateral, core. p. 7.
- Fundaciones de squat/deadlift. p. 9.
- Fundaciones de bench/pull-up. p. 11.

### Cambios concretos

1. Marcar `confidence: high` en fundaciones de p. 9 y p. 11.
2. Eliminar flag `inferred_mapping` en esos ejercicios.
3. Añadir campo `foundationPurpose`.
4. Vincular cada fundación con su movimiento principal.

### Ejemplo de relación

| Movimiento principal | Fundaciones confirmadas |
|---|---|
| Back Squat | Goblet Squat, Box Squat, Goblet Squat to Press, Overhead Squat |
| Deadlift | Hip Hinge Sync, Glute Bridge, Romanian Deadlift, Sumo Deadlift |
| Bench Press | Plank Row, Single Arm DB Floor Press, Press Ups, DB Chest Press |
| Pull-Up | Hanging Row, Eccentric Pull Ups, Bent Over Row, TRX Row |

### Prioridad

Alta.

---

## Recomendación 3 — Construir SkillPaths con criterios adaptativos y variante Close Grip Pull-Up

### Qué hacer

Crear progresiones de habilidad para movimientos principales, aplicando la nueva lógica de profundidad y variantes.

### SkillPaths recomendados

#### 1. `boxing-squat-foundation-to-back-squat`

- Step 1: Goblet Squat.
- Step 2: Box Squat.
- Step 3: Goblet Squat to Press.
- Step 4: Overhead Squat.
- Step 5: Back Squat.
- Regla especial: profundidad base paralela; profunda solo si hay control.

#### 2. `boxing-deadlift-foundation-to-deadlift`

- Step 1: Hip Hinge Sync.
- Step 2: Glute Bridge.
- Step 3: Romanian Deadlift.
- Step 4: Sumo Deadlift.
- Step 5: Deadlift.
- Regla especial: barra cerca, core brace, extensión de cadera sin hiperextensión.

#### 3. `boxing-bench-press-foundation-to-bench-press`

- Step 1: Plank Row.
- Step 2: Single Arm DB Floor Press.
- Step 3: Press Ups.
- Step 4: DB Chest Press.
- Step 5: Bench Press.
- Regla especial: codos 45°, control de descenso, extensión completa.

#### 4. `boxing-pull-up-foundation-to-pull-up`

- Step 1: Hanging Row.
- Step 2: TRX Row.
- Step 3: Bent Over Row.
- Step 4: Eccentric Pull Ups.
- Step 5: Pull-Up.
- Variante: Close Grip Pull-Up.
- Regla especial: Close Grip hereda checklist del Pull-Up.

### Criterios de pase

El libro no da criterios numéricos, así que se recomienda:

```yaml
progressionCriteria:
  - technical_checklist_passed
  - no_pain
  - no_compensation
  - full_range_of_motion_when_applicable
  - controlled_tempo
criteriaSource: book_checklist_and_safety_inference
confidence: medium-high
```

### Prioridad

Media-alta.

---

## Recomendación 4 — Implementar la matriz funcional de core como sistema de etiquetas multi-función

### Qué hacer

Crear un modelo de core basado en funciones, no solo en músculos.

### Funciones canónicas

```yaml
coreFunctions:
  - anti_rotation
  - anti_extension
  - anti_lateral_flexion
  - hip_flexion_neutral_spine
```

### Matriz final a cargar

| Ejercicio | Funciones |
|---|---|
| Pallof Press | anti_rotation |
| Landmine Rotations | anti_lateral_flexion, anti_rotation |
| Plank with Arm Reach | anti_extension, anti_rotation |
| Suitcase Deadlift | anti_lateral_flexion |
| Glute Bridge | hip_flexion_neutral_spine, glute_strength |
| Plank Row | anti_extension, anti_rotation, core_scapula_stability |
| Straight Arm Straight Leg Sit Up | hip_flexion_neutral_spine |
| Rotational Plank | anti_extension, anti_rotation |

### Validación sugerida

```text
Una rutina de core para boxeo debería cubrir al menos:
  - anti_rotation
  - anti_extension
  - anti_lateral_flexion
  - hip_flexion_neutral_spine
```

### Tags de transferencia boxística

```yaml
transferTags:
  anti_rotation:
    - punch_rotation
    - stretch_shortening_cycle
  anti_extension:
    - high_volume_punching_protection
  anti_lateral_flexion:
    - uppercuts
    - ducks
    - slips
  hip_flexion_neutral_spine:
    - body_shot_posture
```

### Prioridad

Alta.

---

## Recomendación 5 — Crear el módulo de movilidad/prehab con confianza media y control de riesgo

### Qué hacer

Añadir movilidad de cadera, hombro y rotación como módulo preventivo, pero sin dosis rígida.

### Datos a usar

- Movilidad de cadera por rigidez de flexores. p. 5.
- Movilidad de hombro por desequilibrio escapular. p. 5.
- Movilidad rotacional para separar tren inferior/superior. p. 5.
- Fuerza de glúteos para extensión/rotación de cadera. p. 5.
- Advertencia de no llevar movimientos espinales al límite. p. 13.
- Disclaimer médico. p. 2.

### Estructura recomendada

```yaml
module: boxing_mobility_prehab
confidence: medium
flags:
  - pending_visual_source
  - no_quantitative_dose
targets:
  - hip
  - shoulder
  - rotation
  - glutes
safety:
  stop_if_pain: true
  clinical_diagnosis_allowed: false
  rehab_protocol_allowed: false
```

### Ejercicios finales

| Foco | Ejercicios |
|---|---|
| Hip mobility | Spiderman Hip Flexor Stretch |
| Shoulder mobility | Floor Slides, Overhead Wall Touch |
| Rotational mobility | Eagles Lunge and Twist |
| Glute strength | Goblet Squat, Glute Bridge |

### Regla de seguridad

```text
Si el usuario reporta dolor:
  detener progresión.
  sugerir evaluación profesional.
  no diagnosticar.
```

### Prioridad

Alta.

---

# 6. Resumen final de cambios a aplicar

| Cambio | Estado | Acción |
|---|---|---|
| Movilidad p. 5 | Confirmado como prehab sin dosis | Marcar `confidence: medium`, `pending_visual_source`. |
| Profundidad de squat p. 8 | Resuelto | Regla adaptativa: paralelo base, profundo condicional. |
| Fundaciones tren inferior p. 9 | Resuelto | Cargar mapeo exacto ejercicio-objetivo. |
| Close Grip Pull-Up p. 10 | Resuelto | Registrar como variante de Pull-Up convencional. |
| Fundaciones tren superior p. 11 | Resuelto | Cargar mapeo exacto ejercicio-objetivo. |
| Core p. 14 | Resuelto | Cargar matriz funcional multi-etiqueta. |
| Acondicionamiento p. 15-17 | Confirmado | Convertir en reglas cuantitativas principales. |
| Rehab/dolor | Confirmado como no clínico | No diagnosticar ni automatizar rehab médica. |

---

# 7. Resultado final

Con tus resoluciones, el libro queda listo para integrarse como fuente canónica en estos módulos:

1. **Conditioning boxístico**  
   Alta confianza, reglas cuantitativas directas.

2. **Fuerza y fundaciones**  
   Alta confianza después del mapeo visual de p. 9 y p. 11.

3. **SkillPaths de movimientos básicos**  
   Alta confianza en estructura; criterios de pase deben mantenerse técnicos y no numéricos.

4. **Core funcional**  
   Alta confianza con matriz final de p. 14.

5. **Movilidad/prehab**  
   Confianza media para ejecución detallada, pero uso funcional claro y seguro como preparación/prehab de bajo riesgo.
