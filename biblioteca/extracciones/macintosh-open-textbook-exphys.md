# macintosh-open-textbook-exphys — Extracción recuperada de chat

> **sourceId:** `macintosh-open-textbook-exphys` · **origen:** `chat-export-1787415035228` (Extracción de Reglas para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Open Textbook of Exercise Physiology — Extracción para Plan Maestro OS

> Extracción orientada a reglas, protocolos y metadatos para un sistema de fitness. El contenido se parafrasea; no se copian párrafos del libro. El documento se centra en conceptos accionables para motor de reglas, progresiones, validación técnica, nutrición deportiva, fatiga y rendimiento de resistencia. El PDF proporcionado no contiene el libro completo, sino una selección de capítulos; la extracción se limita a esos capítulos.

---

## 1) Metadatos del libro

- **Título:** Open Textbook of Exercise Physiology  
- **Autor(es):** Editor: Brian R. MacIntosh. Autores por capítulo: Brian R. MacIntosh; Michael Tschakovsky; Jared R. Fletcher; R. John Holash; Raylene Reimer; Lindsay K. Eller; Jill A. Parnell; S. Jayne Garland.  
- **Año:** No explícito en el fragmento proporcionado. ⚠️ Tratar como “s.f.” o completar con metadatos externos si se dispone de la edición completa.  
- **Disciplina principal:** Fisiología del ejercicio, con énfasis en rendimiento, energía, contracción muscular, nutrición, fatiga y determinantes del rendimiento deportivo.  
- **Enfoque poblacional:**  
  - Población físicamente activa y estudiantes de fisiología.  
  - Atletas recreativos y de rendimiento, con ejemplos de corredores de 10 km, ciclistas, sprinters y casos de Tour de France.  
  - Incluye consideraciones para mujeres, pero advierte que gran parte de la literatura histórica se basó en hombres.  
- **Notas de alcance:**  
  - **Cubre:** fundamentos de fisiología del ejercicio, estructura muscular, contracción, sistemas energéticos, nutrición deportiva, fatiga/potenciación, determinantes del rendimiento de resistencia, hidratación, calor, pruebas de rendimiento.  
  - **No cubre explícitamente:** rehabilitación clínica detallada, diagnóstico de lesiones, programación completa de fuerza/hipertrofia con series y repeticiones, movilidad articular estructurada, tendinopatías clínicas, fisioterapia específica, prescripción médica.  
  - **Capítulos presentes en el archivo:** Introducción, Cap. 1, Cap. 4, Cap. 5, Cap. 6A, Cap. 11, Cap. 13, Cap. 16.  
  - **Capítulos referenciados pero no incluidos:** varios capítulos de sistemas pulmonar, cardiovascular, homeostasis, inmunología, niño, envejecimiento, altitud, etc. No deben extraerse reglas de esos capítulos a menos que se cargue el texto completo.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `PhysiologicalProfile`
  - **Descripción:** Perfil fisiológico del usuario para rendimiento de resistencia y modelado de límites energéticos.
  - **Campos sugeridos:**
    - `vo2maxMlKgMin?: number`
    - `vo2maxAbsLMin?: number`
    - `criticalSpeedMPerSec?: number`
    - `criticalPowerW?: number`
    - `anaerobicCapacityDistanceM?: number`
    - `anaerobicWorkKJ?: number`
    - `runningEconomyKcalKgKm?: number`
    - `cyclingEconomyWPerSpeed?: number`
    - `maxHeartRateBpm?: number`
    - `restingHeartRateBpm?: number`
    - `bodyFatPct?: number`
    - `fatFreeMassKg?: number`
    - `maxCardiacOutputLMin?: number`
  - **Referencias:** Cap. 16, pp. 274-276; Cap. 1, pp. 16-17.

- `IntensityDomain`
  - **Descripción:** Dominios de intensidad basados en umbrales metabólicos, no solo en %VO2max.
  - **Valores sugeridos:**
    - `mild`
    - `moderate`
    - `heavy`
    - `severe`
    - `supramaximal`
    - `belowAnaerobicThreshold`
    - `aboveAnaerobicThreshold`
  - **Referencias:** Cap. 1, p. 37; Cap. 6A, pp. 144, 167-169.

- `EnergySystemContribution`
  - **Descripción:** Contribución relativa de sistemas energéticos para una tarea dada.
  - **Campos sugeridos:**
    - `aerobicPct: number`
    - `anaerobicPct: number`
    - `pcrContributionPct?: number`
    - `glycolyticContributionPct?: number`
    - `fatOxidationPct?: number`
    - `carbohydrateOxidationPct?: number`
    - `proteinOxidationPct?: number`
    - `oxygenDeficitL?: number`
    - `epocL?: number`
  - **Referencias:** Cap. 6A, pp. 143-173; Cap. 16, pp. 292-296.

- `MuscleFiberTypeProfile`
  - **Descripción:** Perfil de fibra muscular y propiedades contráctiles/metabólicas.
  - **Campos sugeridos:**
    - `typeI: FiberTypeProperties`
    - `typeIIa: FiberTypeProperties`
    - `typeIIx: FiberTypeProperties`
    - `hybridFibersPct?: number`
    - `mitochondrialVolumePct?: number`
    - `fatigability: low | moderate | high`
    - `contractionTime: slow | fast`
    - `maxShorteningVelocity: low | high | highest`
  - **Referencias:** Cap. 4, pp. 65-71; Cap. 16, pp. 279-280.

- `MotorUnit`
  - **Descripción:** Unidad motora y tamaño de pool de fibras.
  - **Campos sugeridos:**
    - `neuronId: string`
    - `muscleId: string`
    - `fiberCount: number`
    - `fiberType: MuscleFiberType`
    - `recruitmentThreshold?: number`
    - `firingRateHz?: number`
  - **Referencias:** Cap. 4, pp. 62-65; Cap. 5, pp. 122-123.

- `FatigueState`
  - **Descripción:** Estado de fatiga/potenciación tras actividad reciente.
  - **Campos sugeridos:**
    - `centralFatigueScore?: number`
    - `peripheralFatigueScore?: number`
    - `lowFrequencyFatiguePresent?: boolean`
    - `potentiationPresent?: boolean`
    - `postactivationPerformanceEnhancement?: boolean`
    - `forceFrequencyShift?: 'left' | 'right' | null`
    - `recoveryHoursNeeded?: number`
  - **Referencias:** Cap. 13, pp. 235-263.

- `WarmUpReadiness`
  - **Descripción:** Balance entre potenciación y fatiga tras calentamiento.
  - **Campos sugeridos:**
    - `protocolId: string`
    - `aerobicDurationMin?: number`
    - `sprints?: number`
    - `intensityPctHRmax?: number`
    - `potentiationScore?: number`
    - `fatigueScore?: number`
    - `readinessScore?: number`
  - **Referencias:** Cap. 13, pp. 237-238, 246-247.

- `HydrationStatus`
  - **Descripción:** Estado de hidratación y pérdidas por sudor.
  - **Campos sugeridos:**
    - `preWeightKg: number`
    - `postWeightKg?: number`
    - `fluidIntakeMl?: number`
    - `urineVolumeMl?: number`
    - `sweatRateMlPerHour?: number`
    - `bodyMassChangePct?: number`
    - `sodiumLossEstimateG?: number`
    - `urineColor?: string`
  - **Referencias:** Cap. 11, pp. 211-222.

- `NutritionTimingWindow`
  - **Descripción:** Objetivos nutricionales por momento respecto al ejercicio.
  - **Campos sugeridos:**
    - `window: 'pre' | 'during' | 'post' | 'recovery' | 'daily'`
    - `timeRelativeToExerciseMin?: [number, number]`
    - `carbohydrateGPerKg?: [number, number]`
    - `proteinGPerKg?: [number, number]`
    - `fluidMlPerKg?: [number, number]`
    - `electrolytes?: boolean`
  - **Referencias:** Cap. 11, pp. 189-191, 217-224.

- `TendonMechanicalProfile`
  - **Descripción:** Rigidez/cumplimiento tendinoso relevante para economía de carrera.
  - **Campos sugeridos:**
    - `achillesStiffnessNmm?: number`
    - `patellarStiffnessNmm?: number`
    - `complianceByTendon?: Record<string, number>`
  - **Referencias:** Cap. 16, pp. 281-282.

- `HeatLoad`
  - **Descripción:** Carga térmica generada y requerimientos de disipación.
  - **Campos sugeridos:**
    - `heatGeneratedKcal?: number`
    - `predictedCoreTempRiseC?: number`
    - `evaporationNeededMl?: number`
    - `sweatLossEstimateMl?: number`
    - `environment?: 'hot' | 'humid' | 'temperate' | 'cold'`
  - **Referencias:** Cap. 6A, pp. 144-146; Cap. 16, pp. 300-303.

- `RecoveryDemand`
  - **Descripción:** Demanda de recuperación tras sesión o competencia.
  - **Campos sugeridos:**
    - `epocMagnitude?: 'low' | 'moderate' | 'high'`
    - `glycogenDepletionEstimate?: 'low' | 'moderate' | 'high'`
    - `muscleDamageRisk?: 'low' | 'moderate' | 'high'`
    - `lowFrequencyFatigueRisk?: boolean`
    - `recommendedHardSessionSpacingHours?: number`
  - **Referencias:** Cap. 13, p. 249; Cap. 16, pp. 295-296.

- `HomeostasisControlModel`
  - **Descripción:** Modelo conceptual de balance de masa, flujo y control feed-forward/feedback.
  - **Campos sugeridos:**
    - `controlledVariable: string`
    - `setPoint?: number`
    - `sensor?: string`
    - `effector?: string`
    - `disturbance?: string`
    - `controlType: 'feed-forward' | 'feed-back'`
  - **Referencias:** Cap. 1, pp. 5-11.

---

### 2.2 Mapeo a tipos existentes

#### `FocusId`

- `endurance-performance`
  - El libro lo aborda como integración de VO2max, umbral anaeróbico/critical speed, economía de locomoción, capacidad anaeróbica finita y tolerancia a perturbaciones homeostáticas.  
  - Referencias: Cap. 16, pp. 275-284.

- `energy-system-development`
  - Describe sistemas ATP-PCr, glucólisis, ciclo de Krebs, cadena de transporte de electrones, déficit de oxígeno, cinética de VO2, dominios de intensidad y uso de sustratos.  
  - Referencias: Cap. 6A, pp. 143-173.

- `nutrition`
  - Aporta requerimientos de carbohidratos, proteínas, grasas, hidratación, timing competitivo, carga de carbohidratos, recuperación, energía disponible y suplementos con evidencia limitada.  
  - Referencias: Cap. 11, pp. 186-224.

- `recovery-fatigue`
  - Define fatiga central/periférica, fatiga de baja frecuencia, potenciación, PAP/PAPE, recuperación tras ejercicio intenso y efectos del calentamiento excesivo.  
  - Referencias: Cap. 13, pp. 235-263.

- `hypertrophy`
  - No entrega protocolos de series/repeticiones. Indica que el entrenamiento de fuerza aumentaa el área transversal de fibras musculares, no el número de fibras.  
  - Referencias: Cap. 4, p. 73.

- `tendon-health`
  - No entrega protocolos clínicos de tendinopatía. Describe rol mecánico de tendones, aponeurosis, rigidez/cumplimiento y su relación con economía de carrera.  
  - Referencias: Cap. 4, pp. 59-60; Cap. 16, pp. 281-282.

- `mobility`
  - No es foco del libro. Solo hay referencias indirectas a longitud muscular, sarcomero, fuerza-longitud y rango articular en pruebas isocinéticas.  
  - Referencias: Cap. 5, pp. 101-102, 127-128.

- `pain`
  - No desarrolla dolor como entidad clínica. Aparecen señales de alarma relacionadas con deshidratación, calor, hiponatremia, baja disponibilidad energética y fatiga.  
  - Referencias: Cap. 11, pp. 211-215, 220-222.

#### `BodyZoneId`

- `ankle` / `foot`
  - Relevancia de gastrocnemios, sóleo, tendón de Aquiles, flexores plantares. La rigidez del tendón de Aquiles se asocia con menor costo energético al correr.  
  - Referencias: Cap. 4, pp. 57-60; Cap. 16, pp. 281-282.

- `knee`
  - Cuádriceps, tendón patelar, extensión de rodilla en pruebas isocinéticas. El cumplimiento del tendón patelar se asocia positivamente con economía de carrera; se menciona fatiga tras contracciones de alargamiento.  
  - Referencias: Cap. 5, pp. 101-102; Cap. 16, pp. 281-282; Cap. 13, p. 249.

- `hip`
  - No hay protocolos específicos. Solo se menciona indiretamente en carrera/ciclismo y músculos multarticulares.  
  - Referencias: Cap. 5, p. 101; Cap. 16, pp. 292-303.

- `lumbar`
  - No es foco. No hay reglas específicas de protección lumbar.  
  - Referencias: No aplicable.

- `shoulder` / `elbow` / `wrist`
  - No hay contenido relevante en el fragmento, salvo principios generales de contracción y fatiga.  
  - Referencias: No aplicable.

#### `MovementPattern`

- `running`
  - Economía de carrera, determinantes de rendimiento, pacing, calor, uso de sustratos, técnica con mínima oscilación vertical, carrera en carril interno, incluso split.  
  - Referencias: Cap. 16, pp. 278-303.

- `cycling`
  - Relación cadencia-potencia-activación muscular, eficiencia, potencia en cicloergómetro, posición aerodinámica, ecuación de potencia en terreno plano, hidratación en eventos multi-etapa.  
  - Referencias: Cap. 5, pp. 132-134; Cap. 6A, pp. 177-183; Cap. 11, pp. 187-191.

- `isometric-contraction`
  - Distingue contracción isométrica real vs fixed-end; fuerza-longitud; fuerza máxima depende de longitud de sarcómero; el tendón se estira aunque la articulación no se mueva.  
  - Referencias: Cap. 5, pp. 118-120; Cap. 13, pp. 258-259.

- `dynamic-contraction`
  - Fuerza-velocidad, potencia-velocidad, contracciones isotónicas/isocinéticas, menor fuerza a mayor velocidad de acortamiento.  
  - Referencias: Cap. 5, pp. 128-133.

- `stretch-shortening`
  - Menciona contracciones balísticas y uso de componente elástico, aunque no entrega progresiones pliométricas.  
  - Referencias: Cap. 5, p. 122; Cap. 16, pp. 281-282.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `intensity-domain-classification`

- **Descripción breve:** Clasificar la intensidad por dominios metabólicos respecto al umbral anaeróbico y VO2max, no solo por %VO2max fijo.  
- **Tipo:** intensidad.  
- **Métrica principal:** intensidad relativa a `anaerobicThreshold`, `criticalSpeed`, `VO2max`.  
- **Valores numéricos:**
  - Ejercicio por debajo del umbral anaeróbico: puede sostenerse durante horas si es suficientemente bajo.
  - Ejercicio por encima del umbral anaeróbico: requiere contribución anaeróbica sostenida; duración típica limitada a ~30-40 min.
  - Intensidad crítica/critical power: puede sostenerse aproximadamente 30-60 min, no indefinidamente.
  - Ejercicio a VO2max: límite de tolerancia ~5-7 min.
  - Supramaximal: por encima de VO2max; limitado por reserva anaeróbica.
- **Condiciones de aplicación:**
  - Aplica a ejercicio de resistencia cíclico (correr, ciclismo, remo, etc.).
  - Requiere estimación individual de umbral; no usar porcentajes fijos universales.
- **Capítulos/páginas:** Cap. 6A, pp. 144, 167-169; Cap. 16, pp. 276, 284.  
- **Comentarios/precauciones:**
  - ⚠️ Los umbrales tienen error de medición.
  - No usar para diagnóstico médico.

---

### Regla: `vo2-kinetics-steady-state`

- **Descripción breve:** La VO2 no alcanza instantáneamente el requerimiento energético; existe inercia aeróbica.  
- **Tipo:** progresión/monitoreo.  
- **Métrica principal:** tiempo hasta steady-state, τ fase II.  
- **Valores numéricos:**
  - Fase II o fundamental: τ ≈ 25-50 s en sujetos no muy entrenados.
  - Steady-state se alcanza aproximadamente tras 4τ.
  - En ejercicio moderado: steady-state en ~1.5-4 min.
  - En entrenados: puede alcanzarse en ~1 min o menos.
- **Condiciones de aplicación:**
  - Ejercicio de carga constante por debajo del umbral aeróbico.
  - No aplicar directamente a intervalos muy cortos ni a ejercicio supramaximal.
- **Capítulos/páginas:** Cap. 1, p. 36; Cap. 6A, pp. 163-166; Cap. 16, pp. 292-294.  
- **Comentarios/precauciones:**
  - El VO2 inmediato postinicio no representa el costo energético total.
  - El déficit de oxígeno es cubierto por vías no aeróbicas.

---

### Regla: `anaerobic-energy-budget`

- **Descripción breve:** Existe una cantidad finita de energía anaeróbica disponible para trabajo por encima del umbral crítico.  
- **Tipo:** pacing/capacidad energética.  
- **Métrica principal:** distancia o trabajo anaeróbico acumulado (por ejemplo, intercepto en test de critical speed).  
- **Valores numéricos:**
  - Ejemplo de corredor élite de 10 km: ~285 m de distancia cubrible exclusivamente con energía anaeróbica.
  - Si se usa la mitad durante la carrera, queda mitad disponible para sprint final.
  - En pruebas de 1-15 min, el trabajo/distancia por encima de critical speed puede modelarse como capacidad anaeróbica finita.
- **Condiciones de aplicación:**
  - Eventos de resistencia de duración >~1 min y <~15-20 min para modelado clásico.
  - No extrapolar a eventos ultra largos sin ajustes.
- **Capítulos/páginas:** Cap. 6A, pp. 166-168; Cap. 16, pp. 284, 297-298.  
- **Comentarios/precauciones:**
  - ⚠️ La estimación tiene error.
  - En eventos muy cortos (<~90 s), el éxito depende más de potencia/velocidad que del total anaeróbico.

---

### Regla: `critical-speed-testing`

- **Descripción breve:** Protocolo para estimar critical speed/power y capacidad anaeróbica mediante time-trials.  
- **Tipo:** test/evaluación.  
- **Métrica principal:** critical speed (m/s) o critical power (W); distancia/trabajo anaeróbico.  
- **Valores numéricos:**
  - Usar 3-5 time-trials máximos.
  - Duraciones recomendadas entre ~1 y 15 min.
  - Relación distancia-tiempo: pendiente = critical speed; intercepto = distancia anaeróbica.
  - Critical speed/power típicamente sostenible ~30-60 min, no indefinidamente.
- **Condiciones de aplicación:**
  - Usuarios capaces de realizar esfuerzos máximos.
  - Condiciones consistentes, idealmente en días separados.
  - No aplicar si hay dolor agudo, enfermedad o contraindicación para ejercicio intenso.
- **Capítulos/páginas:** Cap. 6A, pp. 166-168; Cap. 16, pp. 275, 297-298.  
- **Comentarios/precauciones:**
  - Requiere motivación y control de entorno.
  - No usar como diagnóstico clínico.

---

### Regla: `pacing-even-split`

- **Descripción breve:** Para contrarreloj de resistencia, una estrategia de ritmo estable cerca del límite crítico suele ser eficiente.  
- **Tipo:** pacing.  
- **Métrica principal:** velocidad/potencia respecto a critical speed.  
- **Valores numéricos:**
  - El mejor ritmo se estima en la intersección entre la curva intensidad-duración y el tiempo requerido para la distancia.
  - Evitar ritmos muy por debajo del critical speed en contrarreloj si el objetivo es tiempo mínimo.
  - Preservar parte de la capacidad anaeróbica para end-spurt si es tácticamente útil.
- **Condiciones de aplicación:**
  - Carreras contrarreloj o eventos con ritmo controlado.
  - En carreras tácticas puede variar por draft, cambios de posición y adversarios.
- **Capítulos/páginas:** Cap. 16, pp. 296-298.  
- **Comentarios/precauciones:**
  - El modelo asume medición correcta de critical speed.
  - ⚠️ No aplicar rígidamente en deportes con táctica o terreno variable.

---

### Regla: `low-frequency-fatigue-recovery`

- **Descripción breve:** La fatiga de baja frecuencia puede persistir más de 24 h, especialmente tras contracciones de alargamiento.  
- **Tipo:** descanso/recuperación.  
- **Métrica principal:** horas/días entre sesiones intensas.  
- **Valores numéricos:**
  - La fatiga de baja frecuencia puede persistir >24 h.
  - Recomendación cualitativa: evitar dos sesiones intensas en días consecutivos.
- **Condiciones de aplicación:**
  - Sesiones intensas, excéntricas, de alto volumen o con daño muscular.
  - Aplica a usuarios que entrenan vigorosamente.
- **Capítulos/páginas:** Cap. 13, p. 249.  
- **Comentarios/precauciones:**
  - No se entrega un número exacto de horas; usar ≥24 h como mínimo conservador y ajustar según rendimiento/dolor.
  - Si hay dolor persistente o pérdida marcada de fuerza, derivar a profesional.

---

### Regla: `warmup-pap-balance`

- **Descripción breve:** El calentamiento debe equilibrar potenciación y fatiga; calentamientos excesivos pueden reducir rendimiento.  
- **Tipo:** calentamiento.  
- **Métrica principal:** duración/intensidad del calentamiento; potencia posterior.  
- **Valores numéricos:**
  - Caso estudiado en sprint cyclista: calentamiento tradicional de ~45 min generó fatiga.
  - Calentamiento experimental: ~15.5 min de ciclismo aeróbico hasta ~70% HRmax + un sprint de 8 s produjo potenciación y mejor potencia posterior.
- **Condiciones de aplicación:**
  - Eventos breves de alta potencia (p. ej., sprint de 10-30 s).
  - Debe individualizarse en entrenamiento, no en competencia sin prueba previa.
- **Capítulos/páginas:** Cap. 13, pp. 237-238, 246-247.  
- **Comentarios/precauciones:**
  - PAP/PAPE no debe asumirse universal.
  - La mejora posterior puede deberse a temperatura, coordinación u otros factores.

---

### Regla: `temperature-warmup-performance`

- **Descripción breve:** Aumentar temperatura muscular mejora propiedades contráctiles y puede mejorar potencia.  
- **Tipo:** calentamiento.  
- **Métrica principal:** temperatura muscular/cualitativa de calentamiento.  
- **Valores numéricos:**
  - No se entrega objetivo numérico de temperatura en el texto.
  - Efectos descritos: aumento de fuerza por cross-bridge y velocidad máxima; mejor output en rango de velocidades.
- **Condiciones de aplicación:**
  - Antes de tareas de velocidad/potencia.
  - Especialmente relevante en ambientes fríos o músculos fríos.
- **Capítulos/páginas:** Cap. 5, p. 126; Cap. 13, p. 246.  
- **Comentarios/precauciones:**
  - ⚠️ Regla cualitativa; no usar para prescribir temperatura específica.

---

### Regla: `daily-carbohydrate-athletes`

- **Descripción breve:** Ingesta diaria de carbohidratos debe escalar con duración e intensidad del entrenamiento.  
- **Tipo:** nutrición.  
- **Métrica principal:** g CHO/kg/día.  
- **Valores numéricos:**
  - Atletas: 3-12 g/kg/día.
  - AMDR general: 45-65% de calorías diarias.
- **Condiciones de aplicación:**
  - Atletas o personas con entrenamiento significativo.
  - Ajustar según volumen, intensidad, objetivos y tolerancia.
- **Capítulos/páginas:** Cap. 11, pp. 196, 201.  
- **Comentarios/precauciones:**
  - Si hay restricción calórica o diabetes, se requiere supervisión profesional.

---

### Regla: `daily-protein-athletes`

- **Descripción breve:** Proteína diaria para atletas supera la recomendación sedentaria.  
- **Tipo:** nutrición.  
- **Métrica principal:** g proteína/kg/día.  
- **Valores numéricos:**
  - Sedentario: 0.8 g/kg/día.
  - Atletas: 1.2-2.0 g/kg/día.
  - AMDR adulto: 10-35% de energía.
- **Condiciones de aplicación:**
  - Entrenamiento de resistencia o fuerza.
  - Periodos de recuperación, construcción o mantenimiento muscular.
- **Capítulos/páginas:** Cap. 11, pp. 202-203.  
- **Comentarios/precauciones:**
  - Exceder necesidades no mejora rendimiento automáticamente.
  - Priorizar alimentos; suplementos solo si no se alcanza con comida.

---

### Regla: `pre-event-meal`

- **Descripción breve:** Comida previa debe maximizar glucógeno y evitar molestias gastrointestinales.  
- **Tipo:** nutrición timing.  
- **Métrica principal:** g CHO/kg; tiempo antes del ejercicio.  
- **Valores numéricos:**
  - Comer 1-4 h antes del evento.
  - Carbohidratos: 1-4 g/kg.
  - Bajo en grasa y fibra.
  - Proteína moderada.
  - Incluir fluidos.
- **Condiciones de aplicación:**
  - Eventos de resistencia.
  - Ajustar según duración: eventos más largos usan extremo superior.
- **Capítulos/páginas:** Cap. 11, pp. 189, 218.  
- **Comentarios/precauciones:**
  - No probar alimentos nuevos el día de competencia.
  - Si el evento es muy temprano, usar snack líquido digerible.

---

### Regla: `during-event-cho`

- **Descripción breve:** Durante ejercicio prolongado se requiere ingesta regular de carbohidratos.  
- **Tipo:** nutrición timing.  
- **Métrica principal:** g CHO/hora.  
- **Valores numéricos:**
  - Ejercicio >1 h: ~0.7 g/kg/h.
  - Equivalente general: 30-60 g/h.
  - Ultra-endurance >2.5 h: hasta 90 g/h.
  - Iniciar pronto y consumir aproximadamente cada 10 min.
  - Bebidas deportivas: 6-8% carbohidratos.
- **Condiciones de aplicación:**
  - Eventos >1 h.
  - Especialmente importante con glucógeno bajo o eventos multi-día.
- **Capítulos/páginas:** Cap. 11, pp. 190, 220.  
- **Comentarios/precauciones:**
  - Evitar bebidas muy concentradas o refrescos azucarados porque pueden causar malestar o retrasar absorción.
  - Siempre probar en entrenamiento.

---

### Regla: `post-event-recovery-nutrition`

- **Descripción breve:** La recuperación nutricional debe reponer glucógeno y apoyar reparación muscular.  
- **Tipo:** nutrición timing.  
- **Métrica principal:** g CHO/kg/h; tiempo post-ejercicio.  
- **Valores numéricos:**
  - Si hay <8 h antes de la siguiente sesión: 1-1.2 g/kg/h de CHO durante primeras 4 h.
  - Máxima resíntesis si se consume dentro de ~30 min.
  - Incluir proteína para reparación.
  - Luego continuar con comida regular alta en CHO + proteína.
- **Condiciones de aplicación:**
  - Sesiones intensas o competencias con recuperación corta.
  - Eventos multi-día.
- **Capítulos/páginas:** Cap. 11, pp. 190, 221.  
- **Comentarios/precauciones:**
  - La hidratación también debe reponerse.

---

### Regla: `strength-protein-timing`

- **Descripción breve:** Para entrenamiento de fuerza/potencia, la proteína debe distribuirse y timing post-ejercicio es relevante.  
- **Tipo:** nutrición timing.  
- **Métrica principal:** g proteína/kg por toma.  
- **Valores numéricos:**
  - 0.25-0.3 g/kg de proteína de alta calidad dentro de ~2 h post-ejercicio.
  - Distribuir proteína cada 3-5 h en múltiples comidas.
  - Ventana anabólica/sensibilidad proteica puede durar al menos 24 h.
- **Condiciones de aplicación:**
  - Entrenamiento de fuerza/potencia.
  - Objetivo de síntesis proteica muscular y recuperación.
- **Capítulos/páginas:** Cap. 11, p. 224.  
- **Comentarios/precauciones:**
  - No exceder proteína útil; exceso puede aumentar carga renal de excreción nitrogenada y riesgo de deshidratación si no se ajusta fluido.

---

### Regla: `carbohydrate-loading`

- **Descripción breve:** Carga de carbohidratos para maximizar glucógeno antes de eventos largos.  
- **Tipo:** nutrición competitiva.  
- **Métrica principal:** g CHO/kg/24 h; duración.  
- **Valores numéricos:**
  - Eventos >2 h: considerar carga.
  - Protocolo simple: 36-48 h con 10-12 g/kg/24 h mientras se reduce entrenamiento.
  - Cada gramo de glucógeno retiene ~3 g de agua.
- **Condiciones de aplicación:**
  - Eventos largos donde el glucógeno puede ser limitante.
  - No recomendado para eventos cortos si el peso extra incomoda.
- **Capítulos/páginas:** Cap. 11, pp. 201, 218-219.  
- **Comentarios/precauciones:**
  - Puede causar sensación de hinchazón.
  - Probar en entrenamiento.

---

### Regla: `hydration-pre`

- **Descripción breve:** Hidratación previa debe optimizar estado hídrico sin causar necesidad de orinar durante competencia.  
- **Tipo:** hidratación.  
- **Métrica principal:** mL/kg; tiempo previo.  
- **Valores numéricos:**
  - 5-10 mL/kg de agua o bebida deportiva 2-4 h antes.
  - Objetivo: orina pálida y abundante antes del ejercicio.
- **Condiciones de aplicación:**
  - Cualquier sesión/competencia significativa, especialmente en calor.
- **Capítulos/páginas:** Cap. 11, pp. 189, 212, 219.  
- **Comentarios/precauciones:**
  - No forzar exceso de agua; riesgo de hiponatremia.

---

### Regla: `hydration-during`

- **Descripción breve:** Durante ejercicio se debe minimizar pérdida de masa corporal y reponer sodio si la duración es larga.  
- **Tipo:** hidratación.  
- **Métrica principal:** % cambio de masa corporal; tasa de sudor.  
- **Valores numéricos:**
  - Objetivo: pérdida <2% de masa corporal.
  - Calcular tasa de sudor individual.
  - En eventos >1 h, usar fluidos con electrolitos, especialmente sodio.
  - Sudor puede variar aproximadamente 0.3-2.4 L/h. ⚠️ El texto presenta una unidad inconsistente; interpretar como rango orientativo por hora.
- **Condiciones de aplicación:**
  - Ejercicio >1 h, calor/humedad, altas tasas de sudor.
- **Capítulos/páginas:** Cap. 11, pp. 211-212, 219-221.  
- **Comentarios/precauciones:**
  - Beber solo por sed puede ser insuficiente en alta intensidad y calor.
  - Sobrebeber agua sin electrolitos puede causar hiponatremia.

---

### Regla: `hydration-post`

- **Descripción breve:** Rehidratación post-ejercicio debe superar la pérdida de peso por orina y sudor residual.  
- **Tipo:** hidratación.  
- **Métrica principal:** L por kg perdido.  
- **Valores numéricos:**
  - Consumir 1.25-1.5 L por cada kg perdido.
  - Incluir sodio/sal si la pérdida es moderada-severa.
- **Condiciones de aplicación:**
  - Después de sesiones con pérdida de peso medible.
  - Crítico en eventos multi-día.
- **Capítulos/páginas:** Cap. 11, pp. 191, 222.  
- **Comentarios/precauciones:**
  - Monitorear peso pre-post es una herramienta práctica.

---

### Regla: `sweat-rate-testing`

- **Descripción breve:** Calcular tasa de sudor individual para personalizar hidratación.  
- **Tipo:** test/hidratación.  
- **Métrica principal:** mL sudor/hora.  
- **Valores numéricos/fórmula:**
  - Pérdida kg = peso pre - peso post.
  - mL perdidos = kg perdidos × 1000.
  - mL sudor total = mL perdidos + mL consumidos - mL orinados.
  - Tasa de sudor = mL sudor total / horas de ejercicio.
- **Condiciones de aplicación:**
  - Realizar en condiciones similares a competencia.
  - Repetir si cambia clima, intensidad o aclimatación.
- **Capítulos/páginas:** Cap. 11, pp. 220-221.  
- **Comentarios/precauciones:**
  - No usar una sola medición como válida para todas las condiciones.

---

### Regla: `energy-availability-risk`

- **Descripción breve:** Baja disponibilidad energética compromete salud menstrual, ósea y rendimiento.  
- **Tipo:** salud/nutrición.  
- **Métrica principal:** kcal/kg masa libre de grasa/día.  
- **Valores numéricos:**
  - Umbral de riesgo: <30 kcal/kg masa libre de grasa/día.
  - Puede asociarse a amenorrea, baja densidad ósea, estrés fractures.
- **Condiciones de aplicación:**
  - Atletas femeninas, deportes de resistencia o estética, restricción calórica.
- **Capítulos/páginas:** Cap. 11, pp. 214-215.  
- **Comentarios/precauciones:**
  - Requiere derivación a profesional de salud si hay signos de tríada.
  - No usar para diagnóstico autónomo.

---

### Regla: `antioxidant-supplements`

- **Descripción breve:** No se recomienda suplementación antioxidante rutinaria; puede interferir con adaptación.  
- **Tipo:** suplementación.  
- **Métrica principal:** uso/no uso de suplementos antioxidantes.  
- **Valores numéricos:**
  - No hay dosis recomendada; la indicación es evitar suplementos salvo deficiencia.
  - Priorizar frutas/verduras enteras.
- **Condiciones de aplicación:**
  - Atletas que buscan adaptación al entrenamiento.
- **Capítulos/páginas:** Cap. 11, pp. 210-211.  
- **Comentarios/precauciones:**
  - Algunos suplementos pueden tener efectos adversos o contaminación.

---

### Regla: `evidence-based-ergogenics`

- **Descripción breve:** Solo algunos suplementos tienen evidencia sólida; controlar riesgo de contaminación.  
- **Tipo:** suplementación.  
- **Métrica principal:** tipo de suplemento y evidencia.  
- **Valores numéricos:**
  - Creatina: evidencia para eventos repetidos de potencia/sprint.
  - Cafeína: evidencia para resistencia.
  - Bicarbonato sódico: posible, pero riesgo gastrointestinal.
  - Nitratos dietarios: posible mejora de función muscular/flujo sanguíneo.
  - Contaminación de suplementos: 3-25% pueden contener sustancias no etiquetadas.
- **Condiciones de aplicación:**
  - Atletas competitivos sujetos a antidopaje.
- **Capítulos/páginas:** Cap. 11, p. 224.  
- **Comentarios/precauciones:**
  - Preferir productos certificados por terceros (p. ej., NSF Certified for Sport).
  - No automatizar recomendación de sustancias prohibidas o médicas.

---

### Regla: `heat-evaporation-budget`

- **Descripción breve:** Estimar carga térmica y necesidad de evaporación para prevenir hipertermia.  
- **Tipo:** ambiente/calor.  
- **Métrica principal:** kcal de calor, °C de aumento teórico, mL de evaporación.  
- **Valores numéricos:**
  - Calor generado ≈ economía × masa × distancia (si casi toda energía se convierte en calor).
  - Aumento teórico de temperatura ≈ kcal totales / kg de masa corporal.
  - Evaporación: ~540 kcal/kg de agua evaporada; equivalente ~2.26 kJ/mL o ~0.44 mL/kJ.
  - En 10 km, aumento real típico de temperatura ~1-2°C; en maratón puede ser hasta ~4°C si condiciones son adversas.
- **Condiciones de aplicación:**
  - Carrera de resistencia en ambiente cálido.
  - Útil para estimar necesidades de sudor/enfriamiento.
- **Capítulos/páginas:** Cap. 6A, pp. 144-146; Cap. 16, pp. 300-303.  
- **Comentarios/precauciones:**
  - No todo sudor producido se evapora; sudor que gotea no enfría igual.
  - Si hay síntomas de golpe de calor, detener ejercicio y buscar ayuda médica.

---

### Regla: `body-mass-dehydration-threshold`

- **Descripción breve:** Pérdidas de masa corporal ≥2% pueden deteriorar rendimiento.  
- **Tipo:** hidratación/rendimiento.  
- **Métrica principal:** % pérdida de masa corporal.  
- **Valores numéricos:**
  - Umbral de riesgo de rendimiento: ≥2% pérdida de masa corporal.
- **Condiciones de aplicación:**
  - Ejercicio prolongado, calor, alta intensidad.
- **Capítulos/páginas:** Cap. 11, pp. 211, 219.  
- **Comentarios/precauciones:**
  - Monitorear peso pre/post.
  - No usar solo sed como indicador.

---

### Regla: `running-economy-reference`

- **Descripción breve:** Economía de carrera puede cuantificarse como costo energético por distancia y masa.  
- **Tipo:** evaluación/rendimiento.  
- **Métrica principal:** kcal/kg/km.  
- **Valores numéricos:**
  - Rango normal: 0.95-1.25 kcal/kg/km.
  - Regla práctica: ~1 kcal/kg/km.
  - Ejemplo élite masculino 10 km: 0.96 kcal/kg/km.
  - Ejemplo élite femenina: 1.01 kcal/kg/km.
- **Condiciones de aplicación:**
  - Carrera en terreno plano, velocidad submáxima estable.
- **Capítulos/páginas:** Cap. 16, pp. 274, 279.  
- **Comentarios/precauciones:**
  - Debe medirse en steady-state y considerando RER/sustrato.
  - No usar VO2 crudo sin conversión energética si cambia mezcla de sustratos.

---

### Regla: `cycling-economy-power`

- **Descripción breve:** En ciclismo, reducir resistencia aerodinámica y rodadura mejora economía a misma velocidad.  
- **Tipo:** rendimiento/economía.  
- **Métrica principal:** potencia requerida para velocidad dada.  
- **Valores numéricos/fórmula cualitativa:**
  - Potencia en plano depende de resistencia aerodinámica y rodadura:
    - reducir área frontal,
    - reducir coeficiente de drag,
    - reducir coeficiente de rodadura,
    - mantener neumáticos inflados y superficie lisa.
  - Existe cadencia que minimiza activación muscular para una potencia dada; la cadencia óptima aumenta con potencia.
- **Condiciones de aplicación:**
  - Ciclismo de ruta/contrarreloj.
- **Capítulos/páginas:** Cap. 5, pp. 132-134; Cap. 6A, pp. 182-183.  
- **Comentarios/precauciones:**
  - La cadencia óptima es individual.
  - No usar una cadencia fija universal.

---

### Regla: `substrate-estimation-guard`

- **Descripción breve:** RER solo estima RQ en steady-state y por debajo de umbrales; sobre umbral, puede sobreestimar CO2 metabólico.  
- **Tipo:** medición/metabolismo.  
- **Métrica principal:** RER = VCO2/VO2.  
- **Valores numéricos:**
  - RQ ≈ 1.0 para carbohidrato.
  - RQ ≈ 0.7 para grasa.
  - RER ≈ RQ solo si contenido corporal de O2/CO2 estable, típicamente steady-state bajo umbral aeróbico.
  - Sobre umbral, hiperventilación puede hacer RER > RQ.
- **Condiciones de aplicación:**
  - Estimación de uso de sustratos mediante calorimetría indirecta.
- **Capítulos/páginas:** Cap. 6A, pp. 171-173.  
- **Comentarios/precauciones:**
  - No usar RER para estimar sustrato exacto en ejercicio intenso sin métodos adicionales.

---

### Regla: `oxygen-energy-equivalent`

- **Descripción breve:** Convertir VO2 a energía usando equivalente calórico según sustrato/RQ.  
- **Tipo:** medición/metabolismo.  
- **Métrica principal:** kcal o kJ por litro de O2.  
- **Valores numéricos:**
  - 1 L O2 con carbohidrato exclusivo: ~5.047 kcal.
  - 1 L O2 con grasa exclusiva: ~4.686 kcal.
  - Mezcla intermedia según RQ.
  - Fórmula dada por el libro: Energía (J/L O2) = RQ × 5153.3 + 15963.
- **Condiciones de aplicación:**
  - Estimación de costo energético a partir de VO2 y RER/RQ.
- **Capítulos/páginas:** Cap. 6A, pp. 144, 176-177.  
- **Comentarios/precauciones:**
  - Asumir proteína despreciable puede introducir pequeño error.

---

### Regla: `efficiency-velocity`

- **Descripción breve:** La eficiencia muscular depende de la velocidad de contracción; potencia máxima ocurre cerca de ~1/3 de velocidad máxima.  
- **Tipo:** biomecánica/energética.  
- **Métrica principal:** velocidad relativa de contracción.  
- **Valores numéricos:**
  - Eficiencia cero si no hay trabajo (isométrico puro o carga cero).
  - Eficiencia muscular máxima teórica ~25-30% en condiciones ideales.
  - Gross efficiency en ejercicio completo rara vez >25%.
  - Potencia máxima típicamente cerca de ~1/3 de velocidad máxima de acortamiento.
- **Condiciones de aplicación:**
  - Modelado de ciclismo, carrera o tareas dinámicas.
- **Capítulos/páginas:** Cap. 6A, pp. 176-181.  
- **Comentarios/precauciones:**
  - No traducir directamente a prescripción de cadencia sin validación individual.

---

### Regla: `fiber-type-training-adaptation`

- **Descripción breve:** La proporción de fibras puede cambiar con entrenamiento, pero lentamente.  
- **Tipo:** adaptación.  
- **Métrica principal:** % fibras tipo I/II.  
- **Valores numéricos:**
  - Estudio de esquiadores élite: aumento de ~11% de fibras tipo I en 8 años (~1.5%/año).
  - Cambios requieren años de alto volumen; estudios cortos no suelen detectarlos.
- **Condiciones de aplicación:**
  - Entrenamiento de resistencia de largo plazo.
- **Capítulos/páginas:** Cap. 16, p. 280.  
- **Comentarios/precauciones:**
  - No usar para prometer cambios rápidos de fibra.

---

### Regla: `tendon-stiffness-economy`

- **Descripción breve:** Rigidez/cumplimiento tendinoso afecta costo energético según el músculo y la tarea.  
- **Tipo:** economía/tendón.  
- **Métrica principal:** rigidez tendinosa (N/mm) o compliance (mm/N).  
- **Valores numéricos:**
  - Mayor rigidez del tendón de Aquiles se asocia con menor costo energético.
  - Mayor rigidez del tendón patelar se asocia positivamente con costo energético en el texto; el cumplimiento patelar puede permitir almacenamiento/liberación y longitud casi constante de fibras en cuádriceps.
- **Condiciones de aplicación:**
  - Carrera de resistencia.
- **Capítulos/páginas:** Cap. 16, pp. 281-282.  
- **Comentarios/precauciones:**
  - ⚠️ Relaciones complejas; no prescribir modificaciones tendinosas sin contexto clínico.

---

### Regla: `measurement-units-consistency`

- **Descripción breve:** Las métricas fisiológicas deben usar unidades correctas según dependencia de masa corporal.  
- **Tipo:** medición.  
- **Métrica principal:** unidades de VO2, potencia, flujo.  
- **Valores numéricos:**
  - VO2 para ejercicio con carga de masa corporal: mL/kg/min.
  - VO2 para ejercicio no dependiente de masa corporal: L/min.
  - Potencia: W; trabajo: J; energía: kcal o kJ.
- **Condiciones de aplicación:**
  - Cualquier módulo que almacene VO2, economía o potencia.
- **Capítulos/páginas:** Cap. 1, p. 16.  
- **Comentarios/precauciones:**
  - Validar unidades antes de comparar usuarios.

---

### Regla: `reliability-validity`

- **Descripción breve:** Las mediciones deben ser confiables y válidas antes de usarse para decisiones.  
- **Tipo:** medición/calidad de datos.  
- **Métrica principal:** error de medición, calibración, repetibilidad.  
- **Valores numéricos:**
  - No hay umbral único; se requiere demostrar repetibilidad y calibración.
  - 96% de valores en distribución normal caen dentro de ±2 SD de la media.
- **Condiciones de aplicación:**
  - Tests de laboratorio o campo.
- **Capítulos/páginas:** Cap. 1, pp. 25-26, 39-40.  
- **Comentarios/precauciones:**
  - No extrapolar ecuaciones fuera del rango medido.

---

### Regla: `statistical-effect-caution`

- **Descripción breve:** No interpretar p>0.05 como ausencia de efecto práctico; considerar variabilidad y tamaño del efecto.  
- **Tipo:** análisis de datos.  
- **Métrica principal:** p-value, effect size, variabilidad.  
- **Valores numéricos:**
  - p > 0.05: diferencia no estadísticamente significativa bajo umbral clásico.
  - Puede haber efecto práctico pequeño aunque no significativo.
- **Condiciones de aplicación:**
  - Evaluación de tests, progresiones y reglas.
- **Capítulos/páginas:** Cap. 1, pp. 26-28.  
- **Comentarios/precauciones:**
  - Útil para evitar descartar intervenciones pequeñas pero relevantes en rendimiento.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

> El libro no entrega progresiones de habilidades gimnásticas o calistenia. Entrega principalmente protocolos de evaluación, calentamiento, nutrición e hidratación. Estos pueden modelarse como `ProtocolPath` más que como `SkillPath` deportivo.

### SkillPath: `critical-speed-assessment`

- **Disciplina:** evaluación de resistencia / running / cycling.  
- **Objetivo final:** estimar critical speed/power y capacidad anaeróbica para pacing y zonas.  
- **Requisitos de seguridad previos:**
  - Usuario capaz de realizar esfuerzos máximos.
  - Ausencia de síntomas agudos no evaluados.
  - Entorno seguro y calibrado.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Selección de distancias/duraciones | Elegir 3-5 pruebas entre ~1 y 15 min. | Distancias válidas para modelo lineal distancia-tiempo. | Usar pruebas demasiado cortas o largas. | Cap. 6A, pp. 166-168 |
| 2 | Time-trials máximos | Realizar esfuerzos máximos en condiciones consistentes. | Esfuerzo máximo verificable; datos completos. | Ritmo inconsistente o motivación baja. | Cap. 16, pp. 297-298 |
| 3 | Modelado distancia-tiempo | Ajustar relación lineal; pendiente = critical speed; intercepto = distancia anaeróbica. | Ajuste razonable y error aceptable. | Extrapolación a duraciones no medidas. | Cap. 16, pp. 297-298 |
| 4 | Validación de pacing | Usar critical speed para estimar ritmo de carrera. | Usuario puede sostener ritmo objetivo durante test/competencia. | Asumir que critical speed es exacto o sostenible indefinidamente. | Cap. 6A, p. 167; Cap. 16, p. 297 |

---

### SkillPath: `endurance-warmup-for-short-power`

- **Disciplina:** calentamiento para sprint/potencia.  
- **Objetivo final:** lograr potenciación sin fatiga significativa antes de un esfuerzo breve máximo.  
- **Requisitos de seguridad previos:**
  - Usuario tolera intensidad alta.
  - Sin fatiga acumulada severa.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Base aeróbica corta | ~15 min de ciclismo aeróbico progresivo hasta ~70% HRmax. | Sensación de activación sin fatiga. | Calentamiento excesivo. | Cap. 13, pp. 237-238 |
| 2 | Sprint breve | Un sprint de ~8 s. | Potencia posterior igual o mejor que basal. | Demasiados sprints intensos. | Cap. 13, pp. 237-238 |
| 3 | Evaluación de respuesta | Medir twitch, potencia o percepción si está disponible. | Ausencia de fatiga neta; potenciación presente. | No individualizar. | Cap. 13, pp. 237-238, 246-247 |

---

### SkillPath: `hydration-sweat-rate-protocol`

- **Disciplina:** hidratación/nutrición deportiva.  
- **Objetivo final:** estimar tasa de sudor para personalizar ingesta durante ejercicio.  
- **Requisitos de seguridad previos:**
  - Báscula confiable.
  - Registro de fluido consumido.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Peso pre-ejercicio | Pesar con mínima ropa. | Registro confiable. | Vestimenta inconsistente. | Cap. 11, pp. 220-221 |
| 2 | Sesión de 1 h | Ejercicio representativo; registrar fluido ingerido. | Duración exacta. | No registrar bebida. | Cap. 11, pp. 220-221 |
| 3 | Peso post-ejercicio | Pesar tras secar sudor, con mínima ropa. | Diferencia de peso obtenida. | No descontar ropa mojada. | Cap. 11, pp. 220-221 |
| 4 | Cálculo | Usar fórmula de pérdida + ingesta - orina. | Tasa de sudor mL/h. | Olvidar orina o ingesta. | Cap. 11, pp. 220-221 |

---

### SkillPath: `carbohydrate-competition-fueling`

- **Disciplina:** nutrición competitiva.  
- **Objetivo final:** asegurar disponibilidad de CHO antes/durante/después de evento largo.  
- **Requisitos de seguridad previos:**
  - Tolerancia gastrointestinal probada.
  - Conocer duración e intensidad del evento.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Comida pre | 1-4 h antes, 1-4 g/kg CHO, bajo grasa/fibra. | Sin molestias GI. | Probar alimentos nuevos. | Cap. 11, pp. 218 |
| 2 | Carga si aplica | 36-48 h a 10-12 g/kg/24 h si evento >2 h. | Sensación de energía adecuada; aceptar posible peso hídrico. | No reducir entrenamiento. | Cap. 11, pp. 218-219 |
| 3 | During fueling | 30-60 g/h; hasta 90 g/h en ultra; cada ~10 min. | GI estable, energía sostenida. | Dosis grandes tardías. | Cap. 11, p. 220 |
| 4 | Recovery | 1-1.2 g/kg/h CHO primeras 4 h si recuperación <8 h; incluir proteína. | Peso/fluidos repuestos; hambre normalizada. | Omitir hidratación. | Cap. 11, pp. 221 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Carrera de resistencia

- **Cues principales:**
  - Mantener estilo suave y económico.
  - Minimizar oscilación vertical del centro de masa.
  - Correr por carril interno para no aumentar distancia real.
  - Mantener ritmo estable cuando el objetivo es contrarreloj.
  - Controlar cadencia/ritmo para no gastar reserva anaeróbica antes de tiempo.
- **Errores frecuentes:**
  - Oscilación vertical excesiva.
  - Cambios de ritmo innecesarios.
  - Correr fuera del carril interno.
  - Iniciar demasiado rápido y agotar capacidad anaeróbica.
  - No hidratar/fueling en eventos largos.
- **Variantes seguras y progresiones sugeridas:**
  - Entrenar pacing con base en critical speed.
  - Simular hidratación/nutrición en entrenamientos.
  - Aumentar gradualmente duración de sesiones largas.
- **Indicaciones específicas por zona:**
  - Vigilar fatiga de miembros inferiores tras contracciones excéntricas o sesiones intensas.
  - Si hay dolor articular persistente, no automatizar progresión.
- **Páginas de referencia:** Cap. 16, pp. 296-303.

---

### Ciclismo de rendimiento

- **Cues principales:**
  - Reducir área frontal: flexión de cadera, codos cerca del cuerpo.
  - Usar ropa/equipamiento aerodinámico si el contexto lo permite.
  - Mantener neumáticos inflados y superficie de rodadura eficiente.
  - Elegir cadencia que minimice activación muscular para la potencia objetivo.
  - Usar medidor de potencia como feedback.
- **Errores frecuentes:**
  - Posición erguida que aumenta drag.
  - Cadencia fija no individualizada.
  - No ajustar hidratación en eventos largos.
  - Aumentar potencia sin considerar economía.
- **Variantes seguras y progresiones sugeridas:**
  - Probar posición aerodinámica gradualmente para tolerancia.
  - Entregar fueling cada ~10 min en eventos largos.
  - Alternar agua y bebida deportiva según sudor y sodio.
- **Indicaciones específicas por zona:**
  - En eventos multi-día, la recuperación nutricional es crítica.
  - Vigilar molestias por postura prolongada, aunque el libro no las detalla.
- **Páginas de referencia:** Cap. 5, pp. 132-134; Cap. 6A, pp. 182-183; Cap. 11, pp. 189-191.

---

### Contracciones isométricas / fixed-end

- **Cues principales:**
  - Distinguir contracción isométrica real de fixed-end: aunque la articulación no se mueva, las fibras pueden acortarse y el tendón estirarse.
  - Mantener posición articular estandarizada.
  - Controlar longitud muscular si se evalúa fuerza-longitud.
- **Errores frecuentes:**
  - Asumir que no hay acortamiento porque no hay movimiento articular.
  - Calcular fuerza activa restando pasiva sin considerar cambio de longitud fascicular.
  - No controlar ángulo articular.
- **Variantes seguras y progresiones sugeridas:**
  - Usar descansos suficientes en tests máximos (p. ej., ~4 min entre contracciones en protocolos descritos).
  - Realizar familiarización y contracciones submáximas antes de máximas.
- **Indicaciones específicas por zona:**
  - En rodilla/extensores, usar dispositivos con sujeción y parada segura si se realizan tests isocinéticos.
- **Páginas de referencia:** Cap. 5, pp. 101-102, 118-120; Cap. 13, pp. 258-259.

---

### Tests isocinéticos / dinamometría

- **Cues principales:**
  - Calentamiento estandarizado (p. ej., 15 min cicloergómetro).
  - Práctica submáxima en varias velocidades.
  - Sujeción adecuada de caderas, tronco y muslos.
  - Orden aleatorio de ángulos/velocidades cuando sea posible.
  - Descansos suficientes entre esfuerzos máximos.
- **Errores frecuentes:**
  - No familiarizar al usuario con la velocidad controlada.
  - Fatiga acumulada por descansos insuficientes.
  - No controlar rango articular.
- **Variantes seguras y progresiones sugeridas:**
  - Iniciar con velocidades bajas y esfuerzo submáximo.
  - Detener si hay dolor o incomodidad.
- **Indicaciones específicas por zona:**
  - Protocolo descrito para extensión de rodilla; extrapolar con cuidado a otras articulaciones.
- **Páginas de referencia:** Cap. 5, pp. 101-102.

---

### Calentamiento para potencia

- **Cues principales:**
  - Buscar activación sin fatiga.
  - Incluir un estímulo breve de alta intensidad si el deporte lo requiere.
  - Individualizar duración e intensidad.
- **Errores frecuentes:**
  - Calentamiento excesivo que induce fatiga.
  - No probar el calentamiento en entrenamiento.
  - Asumir que más volumen de calentamiento siempre mejora rendimiento.
- **Variantes seguras y progresiones sugeridas:**
  - Reducir duración si hay fatiga post-calentamiento.
  - Medir rendimiento posterior si es posible.
- **Indicaciones específicas por zona:**
  - Para sprint cycling, se reportó mejor respuesta con protocolo corto vs tradicional.
- **Páginas de referencia:** Cap. 13, pp. 237-238, 246-247.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

> El libro no entrega protocolos clínicos de rehabilitación. A continuación se modelan condiciones relevantes que sí aparecen como riesgo, fatiga o salud deportiva. Cualquier signo médico debe derivarse a profesional.

### Lesión / condición: Fatiga muscular de baja frecuencia

- **Zona:** General, frecuentemente miembros inferiores.  
- **Etiología resumida:**
  - Activación repetida, especialmente con contracciones de alargamiento o ejercicio intenso.
  - Puede coexistir con potenciación y no siempre reduce fuerza máxima.
- **Signos y síntomas clave:**
  - Fuerza reducida a bajas frecuencias de estimulación.
  - Fuerza máxima puede estar preservada.
  - Puede persistir >24 h.
- **Stadia / fases:**
  - No se definen fases clínicas en el libro.
- **Protocolos de tratamiento o rehab:**
  - No se entrega protocolo clínico.
  - Estrategia deportiva: permitir recuperación, evitar sesiones intensas consecutivas, monitorear rendimiento.
- **Ejercicios de prehab/movilidad específicos:**
  - No especificados.
- **Umbrales de dolor o red flags:**
  - Si hay dolor persistente, debilidad marcada o pérdida funcional, derivar a profesional.
- **Referencias:** Cap. 13, p. 249.

---

### Lesión / condición: Deshidratación y riesgo de enfermedad por calor

- **Zona:** Sistémica.  
- **Etiología resumida:**
  - Pérdida de fluidos por sudor no repuesta; ambiente cálido/húmedo; alta intensidad.
- **Signos y síntomas clave:**
  - Sed, orina oscura, bajo volumen urinario.
  - Dolor de cabeza, mareo, fatiga.
  - Taquicardia, confusión; en casos extremos, inconsciencia.
- **Stadia / fases:**
  - No definidas formalmente.
- **Protocolos de tratamiento o rehab:**
  - Prevención: hidratación pre/durante/post, cálculo de tasa de sudor, electrolitos.
  - Manejo deportivo: detener ejercicio si hay síntomas significativos; enfriar y rehidratar.
- **Ejercicios de prehab/movilidad específicos:**
  - No aplica.
- **Umbrales de dolor o red flags:**
  - Pérdida ≥2% de masa corporal puede deteriorar rendimiento.
  - Síntomas neurológicos, confusión o colapso requieren atención médica urgente.
- **Referencias:** Cap. 11, pp. 211-212, 219-222; Cap. 16, pp. 300-303.

---

### Lesión / condición: Hiponatremia

- **Zona:** Sistémica.  
- **Etiología resumida:**
  - Exceso de agua sin reposición de electrolitos, especialmente sodio.
- **Signos y síntomas clave:**
  - Puede asociarse a sobrehidratación; síntomas variables; puede ser grave.
- **Stadia / fases:**
  - No definidas.
- **Protocolos de tratamiento o rehab:**
  - Prevención: no beber en exceso solo agua; usar electrolitos en eventos largos.
- **Umbrales de dolor o red flags:**
  - Cualquier síntoma neurológico o malestar severo requiere atención médica.
- **Referencias:** Cap. 11, pp. 211-212.

---

### Lesión / condición: “Bonking” / depleción de glucógeno

- **Zona:** Sistémica/metabólica.  
- **Etiología resumida:**
  - Agotamiento de glucógeno muscular y hepático por ejercicio prolongado sin ingesta adecuada.
- **Signos y síntomas clave:**
  - Fatiga severa.
  - Mareo, confusión, irritabilidad.
  - Incapacidad de continuar al mismo ritmo.
- **Stadia / fases:**
  - No definidas.
- **Protocolos de tratamiento o rehab:**
  - Prevención: ingesta adecuada de CHO diaria y durante ejercicio; carga de CHO si evento largo.
- **Ejercicios de prehab/movilidad específicos:**
  - No aplica.
- **Umbrales de dolor o red flags:**
  - Si hay confusión severa, desmayo o síntomas persistentes, atención médica.
- **Referencias:** Cap. 11, pp. 189, 197, 201.

---

### Lesión / condición: Tríada de la atleta femenina / baja disponibilidad energética

- **Zona:** Sistémica, salud femenina, hueso.  
- **Etiología resumida:**
  - Ingesta calórica insuficiente respecto al gasto, con o sin trastorno alimentario.
  - Baja disponibilidad energética por debajo de umbral.
- **Signos y síntomas clave:**
  - Irregularidad menstrual o amenorrea.
  - Baja densidad ósea, osteopenia/osteoporosis.
  - Posibles fracturas por estrés.
- **Stadia / fases:**
  - No se definen fases; se describe progresión desde baja disponibilidad energética a amenorrea y baja densidad ósea.
- **Protocolos de tratamiento o rehab:**
  - Aumentar disponibilidad energética.
  - Reducir ejercicio si es necesario.
  - Aumentar ingesta calórica.
  - Derivar a profesional de salud.
- **Umbrales de dolor o red flags:**
  - Umbral cuantitativo: <30 kcal/kg masa libre de grasa/día.
  - Fractura por estrés o amenorrea requieren evaluación profesional.
- **Referencias:** Cap. 11, pp. 214-215.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

- **Sueño:**
  - El libro no entrega recomendaciones específicas de sueño.
  - No usar este libro para reglas de sueño.

- **Estrés:**
  - Se menciona cortisol como hormona de estrés en respuesta al ejercicio, pero no entrega protocolos de manejo de estrés psicológico.
  - No usar para reglas de estrés fuera del contexto fisiológico.

- **Nutrición:**
  - Es uno de los puntos más accionables del libro.
  - Reglas principales:
    - Carbohidratos 3-12 g/kg/día para atletas.
    - Proteínas 1.2-2.0 g/kg/día para atletas.
    - Grasas 20-35% de energía; saturadas <10%.
    - Hidratación basada en tasa de sudor y <2% pérdida de masa corporal.
    - Timing pre/durante/post para eventos largos.
    - Carga de CHO para eventos >2 h.
    - Recuperación con CHO y proteína.
    - Disponibilidad energética mínima ~30 kcal/kg masa libre de grasa/día.
  - Referencias: Cap. 11, pp. 186-224.

- **Entrenar enfermo:**
  - El libro no entrega reglas tipo “above/below the neck”, fiebre o infección.
  - No usar para autorizar ejercicio durante enfermedad.

- **Ambiente/calor:**
  - El libro sí entrega bases para modelar carga térmica, sudor, evaporación y riesgo de hipertermia.
  - Ver sección 3: `heat-evaporation-budget`, `hydration-during`, `body-mass-dehydration-threshold`.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal para reglas de intensidad en resistencia basadas en dominios metabólicos: umbral aeróbico, umbral anaeróbico, critical speed/power y VO2max.
  - Fuente para reglas de nutrición deportiva: carbohidratos, proteínas, hidratación, timing competitivo, carga de CHO y recuperación.
  - Fuente para modelar fatiga/potenciación y límites de recuperación tras sesiones intensas.
  - Fuente para validar unidades y cálculos de energía: VO2, RER/RQ, equivalentes calóricos, economía de carrera/ciclismo.
  - Fuente para protocolos de evaluación: critical speed, tasa de sudor, calentamiento de potencia.
  - Fuente para advertencias de seguridad: deshidratación, hiponatremia, baja disponibilidad energética, calor y fatiga persistente.

- **Limitaciones:**
  - No es un manual de rehabilitación clínica ni diagnóstico.
  - No entrega programación completa de fuerza/hipertrofia (series, repeticiones, RPE, progresiones semanales).
  - No entrega progresiones de movilidad ni habilidades gimnásticas.
  - Muchos datos son fisiológicos, no prescriptivos; requieren interpretación.
  - Algunos estudios citados provienen de modelos animales o condiciones no fisiológicas (p. ej., temperatura baja), por lo que la validez externa debe vigilarse.
  - El libro advierte que las respuestas femeninas han sido menos estudiadas; las reglas deben evitar asumir equivalencia exacta entre sexos.
  - Las estimaciones de umbrales y critical speed tienen error; no deben usarse como límites rígidos sin validación individual.

- **Recomendaciones específicas:**
  - Crear módulo `rules/endurance-intensity-domains.ts` con reglas basadas en `anaerobicThreshold`, `criticalSpeed`, `VO2max` y duraciones límite.
  - Crear módulo `rules/endurance-nutrition-hydration.ts` con targets de CHO/proteína/fluidos por ventana temporal (`pre`, `during`, `post`).
  - Añadir tipos `PhysiologicalProfile`, `HydrationStatus`, `FatigueState`, `EnergySystemContribution` y `NutritionTimingWindow` al modelo de datos.
  - Añadir `SkillPath` o `ProtocolPath` para:
    - `critical-speed-assessment`
    - `hydration-sweat-rate-protocol`
    - `warmup-for-short-power`
    - `carbohydrate-competition-fueling`
  - Crear guardas clínicas para derivación profesional ante:
    - síntomas de golpe de calor,
    - sospecha de hiponatremia,
    - pérdida de masa corporal >2% recurrente,
    - signos de tríada de la atleta,
    - fatiga persistente con pérdida funcional.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
Entendido. Como agente de extracción de conocimiento, he revisado minuciosamente el volcado de texto del PDF. El texto contiene excelentes datos numéricos, fórmulas y tablas (como los perfiles de Jake, Andrew, Rachel, tipos de fibras, y requerimientos de macros). Sin embargo, **al ser una extracción de texto plano, se han perdido las curvas gráficas, diagramas de flujo y tablas visuales complejas** que serían útiles para crear modelos matemáticos exactos en la app.

A continuación, te detallo qué información visual falta por si deseas complementarla (mediante OCR, capturas de pantalla o transcripción manual), y luego procedo con las **5 recomendaciones técnicas y accionables** para los agentes de desarrollo de *Plan Maestro OS*.

---

### ⚠️ 1. Información Visual Faltante (Para complementar si se desea precisión matemática)

Si tu objetivo es que la app calcule métricas avanzadas en segundo plano, necesitaríamos los datos exactos de las siguientes figuras que en el texto solo se describen conceptualmente:

1. **Curvas de Cinética de VO2 (Fases I, II, III y Componente Lento):**
   * *Qué falta:* Las gráficas exactas de la curva exponencial de la Fase II (Fig 6A-9) y la magnitud del "Componente Lento" (Fig 6A-17).
   * *Para qué sirve en la app:* Para modelar el `OxygenDeficit` inicial y predecir cuándo un usuario alcanzará el estado estable (`steady-state`) o sufrirá fatiga prematura en intervalos.
2. **Relación Intensidad-Duración (Hipérbola de Critical Speed):**
   * *Qué falta:* La gráfica exacta de la hipérbola (Fig 6A-11 y 16-2) que muestra la asíntota de `Critical Speed` y el área del rectángulo de `Capacidad Anaeróbica` (W' o D').
   * *Para qué sirve en la app:* Para crear un algoritmo de *Pacing* que le diga al usuario: *"Te quedan X kJ de batería anaeróbica, si aceleras ahora, te quedarás vacío a 2 km de la meta"*.
3. **Curvas de Fuerza-Velocidad y Potencia-Velocidad (y su alteración por fatiga):**
   * *Qué falta:* Los gráficos de la ecuación de Hill (Fig 5-16, 6A-14) y cómo la fatiga desplaza la curva (Fig 13-15).
   * *Para qué sirve en la app:* Para prescribir la cadencia óptima en ciclismo o la velocidad de ejecución en levantamiento de potencia según el nivel de fatiga acumulado del usuario en el *Ledger* semanal.
4. **Concepto de Cruce (Crossover Concept - Fig 6A-13):**
   * *Qué falta:* La gráfica de Brooks y Mercier que muestra el punto exacto de intensidad (%VO2max) donde el uso de grasas y carbohidratos se cruza (50/50).
   * *Para qué sirve en la app:* Para calcular las necesidades exactas de ingesta de carbohidratos intra-entreno basadas en la zona de intensidad del usuario.
5. **Diagramas de Sarcomere y Tendón (Modelo de Hill y Compliance):**
   * *Qué falta:* Los diagramas de cómo el tendón de Aquiles (rígido) vs. el tendón patelar (compliante) afectan la economía de carrera (Fig 16-5).
   * *Para qué sirve en la app:* Para enriquecer los `primaryCues` y `bailTechniques` en los `SkillStep` de carrera y pliometría.

*(Nota: Si puedes extraer los ejes X/Y o las tablas de datos de estas 5 figuras, podemos convertirlos en funciones de TypeScript puras para el motor de la app. Si no, el sistema funcionará perfectamente usando las reglas heurísticas y umbrales que ya he extraído del texto).*

---

### 🚀 2. Las 5 Recomendaciones de Implementación para Plan Maestro OS

Basado en todo el conocimiento extraído de este libro de Fisiología del Ejercicio, aquí tienes las **5 directivas técnicas** para que los agentes de código, diseño de reglas y UX construyan las funcionalidades correspondientes.

#### Recomendación 1: Crear el Motor de `Pacing` y `EnergyBudget` basado en *Critical Speed*
* **Agente objetivo:** Motor de Reglas (`TrainingRule`) y Módulo de Planificación.
* **Acción:** Implementar un modelo de "Batería Anaeróbica Finita". El sistema debe solicitar al usuario 3 a 5 *Time-Trials* (de 1 a 15 min) para calcular su `criticalSpeed` (o `criticalPower`) y su `anaerobicCapacity` (el intercepto, ej. 285 metros en el caso de Jake).
* **Regla de negocio:** Si el usuario programa una carrera o entrenamiento por encima de su `criticalSpeed`, el sistema debe calcular cuántos "metros/kJ anaeróbicos" está gastando y bloquear o advertir sobre estrategias de *pacing* que vacíen esta reserva antes del final de la sesión (evitando el "bonking" o fallo sistémico).
* **Referencia:** Cap. 6A (Intensity-Duration Relationship) y Cap. 16 (Pacing Strategy).

#### Recomendación 2: Implementar el Sistema de Alertas de *RED-S / Tríada de la Atleta Femenina*
* **Agente objetivo:** Módulo de Nutrición, Salud y *Guardrails* (Límites de seguridad).
* **Acción:** Crear una regla de validación estricta que cruce el volumen de entrenamiento (gasto calórico) con la ingesta nutricional reportada.
* **Regla de negocio:** Si la `EnergyAvailability` cae por debajo de **< 30 kcal / kg de Masa Libre de Grasa / día**, el sistema debe lanzar una *Red Flag* (Alerta Roja). El sistema debe advertir sobre riesgos de amenorrea, osteopenia y fracturas por estrés, y **bloquear automáticamente** cualquier progresión de volumen o intensidad en el *Ledger* hasta que se corrija el déficit energético.
* **Referencia:** Cap. 11 (Female Athlete Triad / Energy Availability).

#### Recomendación 3: Añadir el Protocolo de `WarmUpReadiness` (Potenciación vs. Fatiga)
* **Agente objetivo:** Generador de Rutinas y `SkillPath` de Calentamiento.
* **Acción:** Modificar las plantillas de calentamiento para eventos de potencia/sprint (ej. halterofilia, sprints, HIIT corto). El libro demuestra que los calentamientos tradicionales largos (45 min con múltiples sprints) causan fatiga que anula el rendimiento.
* **Regla de negocio:** Para esfuerzos máximos de < 30 segundos, el sistema debe prescribir el "Calentamiento Experimental": ~15 min de base aeróbica progresiva (hasta 70% HRmax) + **un solo** sprint de 8 segundos. Esto aprovecha la *Post-Activation Potentiation (PAP/PAPE)* y la temperatura muscular sin drenar la batería anaeróbica ni causar fatiga de baja frecuencia.
* **Referencia:** Cap. 13 (Case Presentation: Does Warm-up Cause Neuromuscular Fatigue?).

#### Recomendación 4: Construir el `HydrationTracker` con Algoritmo de Tasa de Sudor
* **Agente objetivo:** App Móvil (UI/UX) y Módulo de Competiciones.
* **Acción:** Crear una herramienta interactiva pre/durante/post competición que calcule la pérdida de masa corporal.
* **Regla de negocio:**
  1. **Pre-Alerta:** Si el usuario pesa >2% menos de su masa corporal basal antes de iniciar, bloquear sesión intensa.
  2. **Calculadora:** `(Peso Pre - Peso Post) * 1000 + Líquido Ingerido - Orina = Tasa de Sudor (mL/h)`.
  3. **Prescripción:** Para sesiones > 1 hora, el sistema debe dictar ingestas de **6-8% de Carbohidratos + Sodio**, y prohibir agua pura en exceso para prevenir la hiponatremia. Post-entreno, exigir **1.25 - 1.5 L de fluido por cada 1 kg perdido**.
* **Referencia:** Cap. 11 (During Event Hydration, Sweat rate calculation, Hyponatremia).

#### Recomendación 5: Enriquecer los `SkillStep` con Metadatos de Economía y Biomecánica Tendinosa
* **Agente objetivo:** Base de Datos de Ejercicios (`ExerciseDatabase`) y Módulo de Técnica (`Cues`).
* **Acción:** Añadir propiedades a los ejercicios de carrera y pliometría basadas en la rigidez tendinosa (*Tendon Stiffness/Compliance*) y tipos de fibra.
* **Regla de negocio / Cues técnicos:**
  * Para ejercicios de *Running Economy*, añadir el cue: `"Minimizar oscilación vertical del centro de masa"` (el trabajo vertical es energía perdida que no mejora la velocidad horizontal).
  * En la descripción de la biomecánica, documentar que un **tendón de Aquiles rígido** mejora la economía de carrera (menor costo energético), mientras que un **tendón patelar compliante** permite a los cuádriceps mantenerse casi isométricos, almacenando y liberando energía elástica.
  * Esto servirá para que los agentes de fisioterapia/prehab sepan qué tejidos están bajo tensión elástica vs. tensión contráctil en cada fase de la zancada.
* **Referencia:** Cap. 16 (Tendon Stiffness/Compliance, Economy of Running).

---

**Siguiente paso sugerido para ti:**
Si estás de acuerdo con estas 5 directivas, puedes pasar este documento a tu **Agente de Arquitectura de Software** para que empiece a bocetar los nuevos *Types* en TypeScript (`CriticalSpeedProfile`, `HydrationStatus`, `EnergyAvailabilityAlert`) y a tu **Agente de UX** para diseñar las pantallas de *Time-Trial Testing* y *Sweat-Rate Calculator*. 

¿Deseas que profundice en alguna de las fórmulas matemáticas (como la ecuación de la hipérbola de *Critical Speed* o el cálculo del *EPOC*) para dejarlas listas para el programador?

---

## Ronda 3 — tras: «Aquí tienes la formalización matemática y las **funciones puras en TypeScript** para cada uno de los 5 bloques fisiológicos presentados. Est…»
¡Excelente trabajo! Has traducido con precisión quirúrgica los conceptos fisiológicos del *Open Textbook of Exercise Physiology* (MacIntosh) a lógica de negocio pura, funcional y matemáticamente rigurosa. Este código es **oro puro** para el motor de cálculo en segundo plano de *Plan Maestro OS*.

Al mantener estas funciones puras (sin efectos secundarios), el sistema podrá ejecutar simulaciones, predecir fatiga y calcular requerimientos nutricionales en milisegundos, ya sea en el backend o en el dispositivo del atleta.

Para cerrar el ciclo de arquitectura de software y llevar esto a producción, el siguiente paso es definir **cómo se almacenan estos parámetros en la base de datos** y **cómo se exponen en la interfaz de usuario (UX/UI)**. 

A continuación, te propongo la capa de integración que conecta tus funciones con el modelo de datos de la app y el motor de reglas.

---

### 1. El Esquema de Persistencia: `AthletePhysiologicalProfile`
Las funciones que has creado requieren parámetros que evolucionan con el entrenamiento. Debemos crear una entidad en la base de datos (ej. en Supabase/Firebase o en el estado global de la app) que almacene el "ADN fisiológico" del usuario.

```typescript
// Entidad que se almacena en la base de datos y se actualiza tras cada test de campo/laboratorio
export interface AthletePhysiologicalProfile {
  userId: string;
  lastUpdated: Date;

  // 1. Cinética y Aeróbico (Cap. 6A)
  vo2max: number;               // mL/kg/min
  tauPrimary: number;           // Segundos (Mejora con el entrenamiento de resistencia)
  crossoverPointPct: number;    // %VO2max (Sube hacia 65-75% en atletas muy entrenados)

  // 2. Potencia Crítica (Cap. 6A / 16)
  cp: number;                   // Watts (Ciclismo) o m/s (Carrera)
  wPrime0: number;              // Joules o Metros (Capacidad anaeróbica)
  
  // 3. Biomecánica y Fatiga (Cap. 5 / 13)
  f0: number;                   // Fuerza Isométrica Máxima (Newton / Nm)
  vmax: number;                 // Velocidad máxima de acortamiento
  tendonProfile: 'stiff' | 'compliant'; // Para ajustar la economía de carrera (Cap. 16)
}
```

---

### 2. Superficie UX/UI: ¿Cómo lo experimenta el atleta?
Tus funciones matemáticas deben alimentar componentes visuales específicos en la app:

#### A. El "Tanque de Fósforos" (W' Balance Gauge)
* **Función base:** `updateWPrimeBalance`
* **UX:** Una barra de batería circular o un gráfico de "fósforos" (matchbox) que se drena en rojo cuando el atleta supera su `CP` (ej. en un ataque o subida) y se recarga en azul cuando rueda por debajo.
* **Alerta del Motor:** Si `wPrimeBal < 10%`, la app envía una notificación háptica o de audio: *"Batería anaeróbica crítica. Baja la potencia a < CP para recargar"*.

#### B. El Predictor de Nutrición Intra-Entreno (Crossover)
* **Función base:** `calculateCrossoverFueling`
* **UX:** Un widget en la pantalla de actividad que muestra en tiempo real: *"Estás oxidando ~45g de CHO/hora"*.
* **Regla de Negocio (Cap. 11):** Si la función predice que el atleta consumirá >60g de CHO/hora durante una sesión larga, la app bloquea la sesión si el usuario no ha marcado en su *Ledger* que lleva geles o bebidas isotónicas suficientes.

#### C. Monitor de Velocidad y Fatiga Neuromuscular (Hill & Fatiga)
* **Función base:** `calculateHillForceVelocity`
* **UX:** En entrenamientos de fuerza o sprints, la app compara la curva teórica de Hill con la velocidad real medida por el encoder o GPS. 
* **Regla de Negocio (Cap. 13):** Si la velocidad cae un 20% respecto a la curva teórica para una misma fuerza, el sistema detecta **Fatiga Periférica** y sugiere terminar la serie para evitar daño muscular o fallo técnico.

---

### 3. Ajustes Finos basados en el Libro (Notas para el Code Review)

1. **Sobre la Recarga de W' (`tauRecovery`)**:
   * *Nota fisiológica:* En tu función, `tauRecovery` está fijado en 540s. El libro y la literatura de Skiba indican que la tasa de recarga de $W'$ depende de *cuánto* por debajo del $CP$ está el atleta, y de su estado de entrenamiento. 
   * *Mejora:* Puedes hacer que `tauRecovery` sea una función dinámica: `tau = f(CP - currentPower, athleteFitnessLevel)`.
2. **Sobre el Componente Lento de la $\dot{V}\text{O}_2$ (`vo2SlowComponent`)**:
   * *Nota fisiológica:* El libro (Cap. 6A) aclara que el componente lento solo aparece en el **Dominio Severo** (por encima del umbral anaeróbico / MLSS) y está ligado al reclutamiento de fibras rápidas (Tipo II) y a la fatiga.
   * *Mejora:* La app debería activar el cálculo de `vo2SlowComponent` solo si `currentPower > anaerobicThresholdPower`.
3. **Sobre la Elasticidad del Tendón (Economía de Carrera)**:
   * *Nota fisiológica:* El Cap. 16 demuestra que un tendón de Aquiles *rígido* y un tendón patelar *compliante* mejoran la economía de carrera.
   * *Mejora:* Puedes usar `calculateTendonForce` para ajustar el costo energético (`kcal/km`) en el perfil del corredor, premiando a aquellos con mayor capacidad de almacenamiento de energía elástica (medible mediante tests de saltos / RSI).

---

### 🚀 Siguiente Paso para los Agentes de Desarrollo

Ya tenemos el motor fisiológico central (Energética, Biomecánica y Potencia Crítica). Para que *Plan Maestro OS* sea una app completa, los agentes de código deberían abordar a continuación los algoritmos de los **Capítulos 11 y 13**:

1. **Módulo de Hidratación y Termorregulación (Cap. 11 y 16):**
   * Crear funciones puras para calcular la *Tasa de Sudor* y el *Déficit Hídrico* basado en la pérdida de masa corporal, temperatura ambiental y duración, aplicando la regla de alerta de >2% de pérdida de peso.
2. **Módulo de Potenciación vs. Fatiga (PAP / PAPE) (Cap. 13):**
   * Crear un algoritmo que calcule la "Ventana de Potenciación" post-activación para sugerir tiempos de descanso óptimos entre series pesadas y sprints (balanceando la fosforilación de las cadenas ligeras de miosina vs. la fatiga metabólica).

**¿Quieres que genere el código TypeScript y las fórmulas matemáticas para el Módulo de Hidratación/Termorregulación o para el Módulo de Fatiga/PAP (Cap. 13)?**
