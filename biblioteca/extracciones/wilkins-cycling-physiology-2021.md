# wilkins-cycling-physiology-2021 — Extracción recuperada de chat

> **sourceId:** `wilkins-cycling-physiology-2021` · **origen:** `chat-export-1787414976436` (Plan Maestro OS — Extracción para Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Cycling Physiology & Training Science — Extracción para Plan Maestro OS

> Extracción estructurada orientada a convertir el libro en reglas, metadatos, progresiones y plantillas para un sistema de entrenamiento. Todo está parafraseado; no se copian párrafos literales. El libro es específico de ciclismo endurance/rendimiento, por lo que su mejor uso en la app es como módulo de planificación, testing, zonas, intervalos, carga, tapering y monitoreo, no como fuente médica o de rehabilitación clínica.

---

## 1) Metadatos del libro

- **Título:** *Cycling Physiology & Training Science*
- **Autor(es):** Dr Emma Wilkins y Tom Bell
- **Año:** 2021
- **Disciplina principal:** fisiología del ejercicio aplicada al ciclismo, planificación del entrenamiento endurance, testing y monitoreo.
- **Enfoque poblacional:** ciclistas autodirigidos y atletas de endurance, desde principiantes hasta entrenados; incluye consideraciones para atletas con poco tiempo. No está escrito para pacientes lesionados ni para población clínica.
- **Notas de alcance:**
  - **Cubre:** sistemas energéticos, fibras musculares, determinantes del rendimiento, lactato, testing de potencia/FC/lactato, modelo fitness-fatiga, planificación por fases, periodización, zonas, diseño de sesiones, distribución de intensidad, métricas TSS/CTL/ATL/TSB, estructura semanal, fuerza para ciclistas, preparación de carrera, tapering, nutrición básica de carrera y monitoreo de fatiga.
  - **No cubre explícitamente:** diagnóstico médico, rehabilitación de lesiones específicas, fisioterapia clínica, prescripción nutricional completa del día a día, fuerza general avanzada fuera del contexto ciclista, movilidad articular detallada, psicología deportiva profunda ni manejo clínico del dolor.
  - **Cobertura por capítulos:**
    - Cap. 1: sistemas energéticos.
    - Cap. 2: músculo esquelético y fibras.
    - Cap. 3: determinantes del rendimiento.
    - Cap. 4: lactato.
    - Cap. 5: testing fisiológico.
    - Cap. 6: fitness-fatiga y adaptación.
    - Cap. 7: planificación paso a paso.
    - Cap. 8: periodización.
    - Cap. 9: caso práctico.
    - Cap. 10: zonas de entrenamiento.
    - Cap. 11: tipos de sesiones.
    - Cap. 12: distribución de intensidad.
    - Cap. 13: métricas de carga.
    - Cap. 14: microciclo semanal.
    - Cap. 15: fuerza para ciclistas.
    - Cap. 16: preparación de carrera/tapering.
    - Cap. 17: monitoreo de fatiga y progreso.
    - Parte 5: principios finales.

### Notas de consistencia / advertencias globales

- ⚠️ El libro insiste en que sus recomendaciones no constituyen consejo médico y que el entrenamiento tiene riesgos; cualquier regla clínica o de dolor debe quedar fuera de automatización directa. Cap. Introducción, p. 5.
- ⚠️ Hay una pequeña inconsistencia en la frecuencia recomendada de testing: en planificación general sugiere testear cada 8–12 semanas (Cap. 7, p. 112), mientras que en monitoreo menciona formal testing cada 10–16 semanas (Cap. 17, p. 274). Para la app, puede usarse 8–12 semanas como default conservador y 10–16 como rango amplio.
- ⚠️ El cálculo de `V̇LaMax` descrito para esfuerzo de 20 s contiene una relación temporal extraña: menciona 4 s iniciales fosfágenos y luego “26 segundos” de producción láctica, lo cual no cuadra con 20 s totales. No implementar cálculo exacto sin revisión de fuente original; usar solo como concepto de test de máxima tasa glucolítica. Cap. 5, p. 76.
- ⚠️ FTP, CP, zonas y TSS son aproximaciones; el libro repite que deben individualizarse y validarse con sensaciones, FC y pruebas. No usar como verdad absoluta. Caps. 5, 10, 13.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `EnergySystem`
  - **Descripción:** modelo de sistema energético con velocidad, capacidad, duración dominante y subproductos relevantes.
  - **Campos sugeridos:** `id`, `name`, `rate`, `capacity`, `dominantDurationRange`, `oxygenDependency`, `byproducts`, `recoveryCharacteristics`.
  - **Referencias:** Cap. 1, pp. 7–15.

- `PhysiologicalDeterminant`
  - **Descripción:** factor de rendimiento como VO2max, umbral de lactato, V̇LaMax, utilización fraccional, oxidación de grasas, transporte/buffering de lactato, eficiencia, endurance, fuerza máxima/potencia.
  - **Campos sugeridos:** `id`, `name`, `category` (aerobic/anaerobic/metabolic/neuromuscular/efficiency), `trainability`, `detrainRate`, `testMarkers`, `relatedZones`, `relatedSessionTypes`.
  - **Referencias:** Cap. 3, pp. 23–45; Cap. 8, p. 119.

- `TrainingZoneScheme`
  - **Descripción:** esquema de zonas, con dos modelos principales: 7 zonas basadas en FTP/FC y modelo de 3 zonas basado en LT1/LT2.
  - **Campos sugeridos:** `schemeType` (`coggan7`, `threeZone`), `anchor` (`FTP`, `HRmax`, `thresholdHR`, `lactate`), `zones[]`, `rpe`, `breathingCues`, `physiologicalMeaning`.
  - **Referencias:** Cap. 10, pp. 141–154.

- `TestProtocol`
  - **Descripción:** protocolo de evaluación: FTP 20 min, 2×8 min, ramp test, power profile, critical power, HRmax, threshold HR, lactate step, MLSS, V̇LaMax, lactate clearance, LSCT.
  - **Campos sugeridos:** `id`, `testType`, `protocolSteps[]`, `calculation`, `reliabilityNotes`, `populationCautions`, `equipment`, `standardization[]`.
  - **Referencias:** Cap. 5, pp. 52–87; Cap. 17, pp. 270–275.

- `SessionTemplate`
  - **Descripción:** plantilla de sesión: recovery, Zone2 aerobic, low-cadence Zone3, restricted carbohydrate availability, VO2max clásico, supra-threshold, hard-start, Billat, microbursts, threshold, over/unders, anaerobic stamina, anaerobic power, neuromuscular, openers, warm-up.
  - **Campos sugeridos:** `id`, `goalFocus[]`, `zoneDistribution`, `intervalStructure`, `workRestRatio`, `intensityPctFTP`, `hrTargets`, `rpe`, `durationRange`, `contraindications`, `qualityChecks`.
  - **Referencias:** Cap. 11, pp. 155–206.

- `MacrocyclePhase`
  - **Descripción:** fases de planificación: general preparation, specific preparation, competition, transition.
  - **Campos sugeridos:** `phaseType`, `durationRange`, `primaryGoals[]`, `secondaryGoals[]`, `volumeTrend`, `intensityTrend`, `testingCheckpoints`.
  - **Referencias:** Cap. 7, pp. 96–113; Cap. 8, pp. 114–134.

- `MesocycleGoal`
  - **Descripción:** bloque de 2–10 semanas con objetivo específico: endurance/fat oxidation, lactate transport/tolerance, VO2max, fractional utilization, anaerobic power, race-specific skills, strength.
  - **Campos sugeridos:** `durationWeeks`, `primaryFocus[]`, `loadPattern`, `expectedAdaptation`, `recoveryWeekPolicy`.
  - **Referencias:** Cap. 7, pp. 105–109; Cap. 8, pp. 118–132; Cap. 9, pp. 135–139.

- `MicrocycleTemplate`
  - **Descripción:** estructura semanal o de ciclo no semanal (turnos), con días de intervalos, recuperación, rides largos y días off.
  - **Campos sugeridos:** `cycleLengthDays`, `recoveryDaysPerCycle`, `lowIntensityDays`, `mediumHighSessions`, `longRidePlacement`, `shiftWorkPattern`.
  - **Referencias:** Cap. 14, pp. 231–239.

- `IntensityDistributionModel`
  - **Descripción:** modelo threshold, pyramidal, polarised; preferencia por polarised/pyramidal con mayoría de sesiones low.
  - **Campos sugeridos:** `modelType`, `lowPct`, `mediumPct`, `highPct`, `classificationMethod` (`sessionalGoal`, `timeInZone`), `phaseAdjustments`.
  - **Referencias:** Cap. 12, pp. 207–220.

- `TrainingLoadMetrics`
  - **Descripción:** métricas derivadas de TSS: IF, TSS, CTL, ATL, TSB.
  - **Campos sugeridos:** `tss`, `if`, `ctl`, `atl`, `tsb`, `safeRanges`, `limitations`, `dataQualityChecks`.
  - **Referencias:** Cap. 13, pp. 221–230.

- `FatigueMonitoringProfile`
  - **Descripción:** combinación de marcadores subjetivos, FC, LSCT, power:HR, HRR, RPE, T90.
  - **Campos sugeridos:** `subjectiveMarkers[]`, `hrRestingDeviation`, `hrResponseDeviation`, `lsctMetrics`, `actionThresholds`, `baselineWeeksRequired`.
  - **Referencias:** Cap. 17, pp. 267–279.

- `RaceTaperPlan`
  - **Descripción:** plan de taper para evento prioritario o secundario.
  - **Campos sugeridos:** `eventPriority`, `taperDays`, `volumeReductionPct`, `intensityPolicy`, `frequencyPolicy`, `tsbTarget`, `openers`, `warmUp`.
  - **Referencias:** Cap. 16, pp. 251–265.

- `RaceFuelingPlan`
  - **Descripción:** estrategia de carbohidratos según duración del evento, carga previa, comida previa, ingesta durante, cafeína y uso de carbohidratos en línea de salida.
  - **Campos sugeridos:** `eventDurationBand`, `carbLoading`, `preEventCarbGKg`, `duringCarbPerHour`, `avoidWindowPreStart`, `startLineCarbs`, `caffeine`.
  - **Referencias:** Cap. 16, pp. 261–263.

- `CyclingStrengthBlock`
  - **Descripción:** bloque de fuerza complementaria para ciclistas: desarrollo, mantenimiento, ejercicios, series, reps, descanso, integración semanal.
  - **Campos sugeridos:** `phase`, `sessionsPerWeek`, `exercises[]`, `sets`, `repRange`, `restMinutes`, `proximityToBikeSessions`, `failurePolicy`.
  - **Referencias:** Cap. 15, pp. 240–250.

- `TrainingResidual`
  - **Descripción:** tiempo aproximado de desarrollo/desentrenamiento por capacidad: aeróbico estructural, enzimas aeróbicas, tolerancia láctica, potencia anaeróbica, neuromuscular, fuerza máxima.
  - **Campos sugeridos:** `capacity`, `developmentTime`, `detainTime`, `planningImplication`.
  - **Referencias:** Cap. 8, p. 119.

### 2.2 Mapeo a tipos existentes

- `FocusId: aerobic-base / endurance`
  - El libro lo trata como base principal para casi todos los eventos de ciclismo. Se desarrolla con volumen bajo/moderado, especialmente Zone2 y rides largos. Las adaptaciones periféricas dependen más de duración que de intensidad.  
  - Referencias: Cap. 11, pp. 158–160; Cap. 12, pp. 214–215; Cap. 14, pp. 232–233.

- `FocusId: lactate-threshold`
  - El umbral no se entrena directamente, sino mediante balance entre producción y clearance. Mejora con VO2max, fat oxidation, transporte de lactato y reducción/control de V̇LaMax. Las sesiones útiles incluyen Zone2, over/unders, supra-threshold y VO2max; threshold intervals mejoran más tolerancia que umbral real.  
  - Referencias: Cap. 3, pp. 30–38; Cap. 11, pp. 185–190.

- `FocusId: vo2max / aerobic-capacity`
  - Se entrena con intervalos que acumulen tiempo cerca de VO2max: clásico 3–6 min, supra-threshold, hard-start, Billat, microbursts. FC objetivo >90–95% HRmax como proxy.  
  - Referencias: Cap. 11, pp. 170–184.

- `FocusId: anaerobic-power / anaerobic-capacity`
  - Incluye peak anaerobic power, anaerobic stamina y W′/capacidad anaeróbica. Se desarrolla con esfuerzos cortos máximos, intervalos Zone6 y anaerobic stamina. Puede reducir umbral si se excessiva sin base aeróbica.  
  - Referencias: Cap. 3, pp. 28–30; Cap. 11, pp. 191–195.

- `FocusId: neuromuscular-power`
  - Sprints muy cortos 5–20 s con recuperación completa; mejora reclutamiento neural y potencia máxima.  
  - Referencias: Cap. 11, pp. 196–199.

- `FocusId: fat-oxidation`
  - Se entrena con Zone2, rides largos, restricted carbohydrate availability, low-cadence Zone3 ocasional y evitar surges glucolíticos frecuentes.  
  - Referencias: Cap. 3, pp. 33–34; Cap. 11, pp. 158–170.

- `FocusId: recovery`
  - Recovery rides, días off, control de carga, tapering, monitoreo subjetivo y FC. El libro enfatiza que la adaptación ocurre en recuperación.  
  - Referencias: Cap. 6, pp. 88–92; Cap. 11, pp. 155–157; Cap. 14, pp. 232–234.

- `FocusId: race-preparation`
  - Tapering, openers, warm-up, nutrición de carrera, pacing y equipo específico.  
  - Referencias: Cap. 16, pp. 251–265; Cap. 11, pp. 199–205.

- `FocusId: strength`
  - Fuerza suplementaria para ciclistas: mejora endurance, economía, potencia y prevención de lesiones, pero no debe desplazar entrenamiento de bici.  
  - Referencias: Cap. 15, pp. 240–250.

- `BodyZoneId: lower-body`
  - El libro trata piernas como zona principal de producción de potencia; fuerza con half-squat, deadlift, lunge/split squat; bajo cadencia para reclutar más fibras. No profundiza en lesiones específicas de rodilla/cadera.  
  - Referencias: Cap. 2, pp. 16–22; Cap. 11, pp. 161–165; Cap. 15, pp. 246–247.

- `BodyZoneId: core / lumbar-pelvis`
  - Recomienda core strength para estabilidad, biomecánica y reducción de riesgo de lesión. Ejercicios: plank, side plank, bird dogs, hip bridges, clam shells, donkey kicks, Russian twists.  
  - Referencias: Cap. 15, pp. 245–247.

- `BodyZoneId: tendon / musculoskeletal`
  - Sin protocolos de tendinopatía. Solo indica que fuerza moderada/pesada puede mejorar resistencia tendinosa y que la técnica adecuada reduce riesgo. No usar como tratamiento clínico.  
  - Referencias: Cap. 15, pp. 242–244.

- `MovementPattern: cycling`
  - El patrón principal no se descompone en fases biomecánicas detalladas, pero se prescribe por potencia/FC/RPE, cadencia y control de surges.  
  - Referencias: Caps. 10–11.

- `MovementPattern: squat / hinge / lunge`
  - Aparecen como ejercicios de fuerza recomendados para ciclistas, con énfasis en técnica, evitar fallo y periodizar de reps altas a pesadas.  
  - Referencias: Cap. 15, pp. 246–249.

- `MovementPattern: sprint / explosive`
  - Sprints en bici con desarrollo grande y salida lanzada; evitar arrancar desde parado si el objetivo es potencia máxima. Explosive gym work puede aumentar tasa glucolítica y no siempre conviene.  
  - Referencias: Cap. 11, pp. 196–199; Cap. 15, pp. 245, 250.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `energy_system_duration_mapping`

- Descripción: clasificar esfuerzos máximos según duración dominante del sistema energético.
- **Tipo:** fisiología / intensidad.
- **Métrica principal:** `effortDurationSeconds`.
- **Valores numéricos:**
  - Fosfocreatina dominante: hasta ~6 s.
  - Glucolítico dominante: ~6 s a 1–2 min.
  - Aeróbico dominante: más de pocos minutos.
- **Condiciones de aplicación:** esfuerzos máximos o casi máximos; en submáximos largos domina aeróbico con contribución variable.
- **Capítulos/páginas:** Cap. 1, pp. 8, 14.
- **Comentarios:** todos los sistemas contribuyen en algún grado; no usar como clasificación excluyente.

### Regla: `pcr_recovery_aerobic_dependency`

- Descripción: la recuperación de esfuerzos fosfágenos depende del sistema aeróbico.
- **Tipo:** descanso / recuperación.
- **Métrica principal:** `recoverySecondsAfterMaximalEffort`.
- **Valores numéricos:**
  - ~30 s para reponer ~50% de PCr; velocidad depende de capacidad aeróbica.
- **Condiciones de aplicación:** sprints muy cortos, esfuerzos repetidos.
- **Capítulos/páginas:** Cap. 1, p. 9.
- **Comentarios:** útil para diseñar descansos de neuromuscular y sprints.

### Regla: `glycogen_store_limit`

- Descripción: las reservas de carbohidrato limitan ejercicio intenso continuo.
- **Tipo:** nutrición / fatiga.
- **Métrica principal:** `maxAllOutCarbFuelledDuration`.
- **Valores numéricos:**
  - Aproximadamente ~1.5 h de ejercicio all-out.
- **Condiciones de aplicación:** eventos largos o intensos; base para fueling y fat oxidation training.
- **Capítulos/páginas:** Cap. 1, pp. 13–14; Cap. 3, p. 41.
- **Comentarios:** la grasa puede sostener ejercicio mucho más tiempo, pero a menor tasa.

### Regla: `fiber_recruitment_intensity_thresholds`

- Descripción: el reclutamiento de fibras aumenta con intensidad.
- **Tipo:** fisiología / intensidad.
- **Métrica principal:** `%VO2max` aproximado.
- **Valores numéricos:**
  - Hasta ~40% VO2max: Type I casi máximamente reclutadas.
  - ~75% VO2max: Type IIa cerca de máximo y comienza Type IIx.
- **Condiciones de aplicación:** modelado de sesiones que buscan reclutar Type IIa, como low-cadence Zone3 o intervalos altos.
- **Capítulos/páginas:** Cap. 2, pp. 19–20.
- **Comentarios:** la cadencia baja y la fatiga aumentan reclutamiento de fibras menos aeróbicas.

### Regla: `vo2max_trainability_beginners`

- Descripción: atletas menos entrenados pueden mejorar VO2max de forma apreciable.
- **Tipo:** progresión / expectativa.
- **Métrica principal:** `vo2maxPctImprovement`.
- **Valores numéricos:**
  - 9–21% en 4–12 meses en principiantes.
- **Condiciones de aplicación:** principiantes o menos entrenados.
- **Capítulos/páginas:** Cap. 3, p. 28.
- **Comentarios:** en atletas entrenados las mejoras son más lentas; edad puede hacer que el objetivo sea mantener.

### Regla: `vo2max_age_decline`

- Descripción: VO2max disminuye con la edad en atletas maduros.
- **Tipo:** expectativa / edad.
- **Métrica principal:** `vo2maxDeclinePerDecade`.
- **Valores numéricos:**
  - ~4–4.6 ml/kg/min por década después de mediados de los 30.
- **Condiciones de aplicación:** atletas >35 aprox.; puede orientar objetivos de mantenimiento.
- **Capítulos/páginas:** Cap. 3, p. 28.
- **Comentarios:** no usar para diagnóstico individual; tendencia poblacional.

### Regla: `fractional_utilization_norms`

- Descripción: el umbral de lactato como porcentaje de VO2max varía por nivel.
- **Tipo:** fisiología / perfil.
- **Métrica principal:** `fractionalUtilizationPctVO2max`.
- **Valores numéricos:**
  - No entrenados: 50–60%.
  - Moderadamente entrenados: 65–70%.
  - Entrenados/élite: 80–90%.
- **Condiciones de aplicación:** interpretación de threshold HR, FTP/VO2max y diseño de VO2max intervals.
- **Capítulos/páginas:** Cap. 3, p. 36.
- **Comentarios:** alta fractional utilization puede implicar menor necesidad de potencia para VO2max intervals respecto a FTP.

### Regla: `ftp_20min_test_calculation`

- Descripción: estimar FTP con test de 20 min tras warm-up y esfuerzo previo.
- **Tipo:** testing / intensidad.
- **Métrica principal:** `avgPower20min`.
- **Valores numéricos:**
  - FTP = 95% de potencia media de 20 min.
  - Si atleta anaeróbicamente fuerte: 90–93%.
- **Condiciones de aplicación:** ciclismo con potenciómetro; idealmente fresco y consistente.
- **Capítulos/páginas:** Cap. 5, pp. 53–54.
- **Comentarios:** el protocolo incluye warm-up 30–45 min, esfuerzo de 5 min, 10 min suave y luego 20 min max. No usar ERG en el 20 min.

### Regla: `ftp_2x8_test_calculation`

- Descripción: estimar FTP con dos esfuerzos máximos de 8 min.
- **Tipo:** testing / intensidad.
- **Métrica principal:** `avgPowerTwo8minEfforts`.
- **Valores numéricos:**
  - FTP = 90% del promedio de los dos esfuerzos.
- **Condiciones de aplicación:** atletas con dificultad para pacing de 20 min; puede sobreestimar en anaeróbicamente fuertes.
- **Capítulos/páginas:** Cap. 5, pp. 55–56.
- **Comentarios:** warm-up 25 min + esfuerzo ramped 4 min; recuperación 4–5 min entre esfuerzos.

### Regla: `cp_to_ftp_conversion`

- Descripción: si se usa Critical Power para zonas, convertir aproximadamente a FTP.
- **Tipo:** testing / zonas.
- **Métrica principal:** `criticalPower`.
- **Valores numéricos:**
  - FTP estimado ≈ 94% de CP.
- **Condiciones de aplicación:** cuando CP se calcula con 3–4 tests y buen fit.
- **Capítulos/páginas:** Cap. 5, p. 67.
- **Comentarios:** CP suele salir ligeramente más alto que FTP; no reemplazo directo.

### Regla: `cp_test_design`

- Descripción: diseño recomendado para estimar CP y W′.
- **Tipo:** testing / protocolo.
- **Métrica principal:** `maximalTestsCount`, `testDurations`.
- **Valores numéricos:**
  - 3–4 tests máximos.
  - Duraciones recomendadas: 3, 5 y 12 min, opcional 20 min.
  - Rango válido: ~3–20 min por esfuerzo; modelo predice ~3–30 min.
- **Condiciones de aplicación:** tests en días separados, bien descansado, mismo método.
- **Capítulos/páginas:** Cap. 5, pp. 65–68.
- **Comentarios:** time-to-exhaustion puede dar CP ~7% menor y W′ ~12% mayor que fixed-duration; mantener consistencia.

### Regla: `wprime_norms`

- Descripción: rangos orientativos de W′ según nivel/disciplina.
- **Tipo:** perfil / anaeróbico.
- **Métrica principal:** `wPrimeKJ`.
- **Valores numéricos:**
  - Hombres endurance moderados: 9–15 kJ.
  - Mujeres endurance moderadas: 6–10 kJ.
  - Hombres punchy: 15–18 kJ.
  - Mujeres punchy: 11–13 kJ.
  - Sprinters: >25–30 kJ.
- **Condiciones de aplicación:** interpretación de CP testing; no diagnóstico.
- **Capítulos/páginas:** Cap. 5, p. 62.
- **Comentarios:** W′ alto puede indicar mayor capacidad anaeróbica o baja fractional utilization.

### Regla: `vlamax_norms`

- Descripción: rangos orientativos de máxima tasa glucolítica.
- **Tipo:** perfil / anaeróbico.
- **Métrica principal:** `vlamax_mmol_L_s`.
- **Valores numéricos:**
  - Rango general observado: 0.2–1.0 mmol/L/s.
  - Endurance: 0.3–0.5 mmol/L/s.
  - Sprinters: ≥0.7 mmol/L/s.
- **Condiciones de aplicación:** solo si hay test específico de lactato; depende del tamaño de VO2max.
- **Capítulos/páginas:** Cap. 5, p. 76.
- **Comentarios:** ⚠️ cálculo exacto no totalmente claro; usar como referencia cualitativa si no hay laboratorio.

### Regla: `lactate_clearance_rest_norms`

- Descripción: valores observados de clearance de lactato en reposo tras esfuerzo máximo.
- **Tipo:** perfil / lactato.
- **Métrica principal:** `lactateClearance_mmol_L_min`.
- **Valores numéricos:**
  - Observado: ~0.1–0.5 mmol/L/min.
  - Mediana: ~0.3 mmol/L/min.
- **Condiciones de aplicación:** test post-esfuerzo con muestra a ~20 min.
- **Capítulos/páginas:** Cap. 5, p. 77.
- **Comentarios:** datos normativos limitados; usar longitudinalmente más que como corte absoluto.

### Regla: `threshold_hr_fractional_utilization_hint`

- Descripción: threshold HR relativa a HRmax indica posible fractional utilization.
- **Tipo:** testing / FC.
- **Métrica principal:** `thresholdHRPctHRmax`.
- **Valores numéricos:**
  - Promedio: ~85% HRmax.
  - >85%: posible alta fractional utilization.
  - <85%: posible baja fractional utilization.
- **Condiciones de aplicación:** si threshold HR se mide con 30 min all-out, últimos 20 min.
- **Capítulos/páginas:** Cap. 5, pp. 69–70.
- **Comentarios:** retest cada 8–12 semanas porque cambia con entrenamiento.

### Regla: `max_hr_testing_protocol`

- Descripción: protocolo práctico para estimar HRmax.
- **Tipo:** testing / FC.
- **Métrica principal:** `maxHR`.
- **Valores numéricos:**
  - Warm-up 20–30 min.
  - 10 min a 7–8/10 o ~110% FTP.
  - 1 min maximal + sprint final 20–30 s.
- **Condiciones de aplicación:** atleta sano, fresco, sin fatiga notable.
- **Capítulos/páginas:** Cap. 5, pp. 68–69.
- **Comentarios:** repetir varias veces y validar con carreras. HRmax no mejora con entrenamiento; retest cada 1–2 años.

### Regla: `body_fat_minimum_safety`

- Descripción: límites mínimos recomendados de grasa corporal.
- **Tipo:** salud / composición corporal.
- **Métrica principal:** `bodyFatPct`.
- **Valores numéricos:**
  - Hombres: no bajar de ~5%.
  - Mujeres: no bajar de ~12%.
- **Condiciones de aplicación:** cualquier objetivo de peso/potencia.
- **Capítulos/páginas:** Cap. 5, p. 85.
- **Comentarios:** valores bajos pueden comprometer rendimiento, salud, inmunidad y riesgo de lesión. No automatizar recomendaciones agresivas de pérdida de peso.

### Regla: `testing_standardization`

- Descripción: condiciones estándar para tests de rendimiento.
- **Tipo:** testing / validez.
- **Métrica principal:** `testValidityFlags`.
- **Valores numéricos/cualitativos:**
  - Nutrición estandarizada ~24 h, especialmente 3–4 h previas.
  - Cafeína consistente o evitada según protocolo.
  - Warm-up 20–30 min a 3–4/10 o 50–60% FTP con esfuerzos de activación.
  - Ubicación/equipo/método consistentes.
  - No testar si estrés/fatiga anormal.
- **Condiciones de aplicación:** cualquier test formal.
- **Capítulos/páginas:** Cap. 5, pp. 85–86.
- **Comentarios:** importante para LSCT también: sin cafeína ~3 h antes y comida ~2 h antes (Cap. 17, p. 273).

### Regla: `testing_frequency_default`

- Descripción: frecuencia recomendada de tests formales.
- **Tipo:** planificación / testing.
- **Métrica principal:** `weeksBetweenTests`.
- **Valores numéricos:**
  - Default sugerido: 8–12 semanas.
  - Rango alternativo en monitoreo: 10–16 semanas.
- **Condiciones de aplicación:** transiciones de fase o mesociclos.
- **Capítulos/páginas:** Cap. 7, p. 112; Cap. 17, p. 274.
- **Comentarios:** ⚠️ inconsistencia leve; usar 8–12 como default y 10–16 si el contexto es mantenimiento o temporada de carreras.

### Regla: `tss_formula_and_hourly_reference`

- Descripción: calcular carga de sesión y usar referencias por hora.
- **Tipo:** carga / métrica.
- **Métrica principal:** `TSS`.
- **Valores numéricos:**
  - Fórmula: `TSS = IF² × durationHours × 100`.
  - Recovery: ~30 TSS/h.
  - Zone2 steady: ~40–50 TSS/h.
  - Interval session 1.5 h: ~80–100 TSS total.
- **Condiciones de aplicación:** solo como aproximación; requiere FTP correcto y datos limpios.
- **Capítulos/páginas:** Cap. 13, p. 223.
- **Comentarios:** no usar como única señal de carga; sesiones iguales en TSS pueden generar fatiga diferente.

### Regla: `tsb_interpretation_ranges`

- Descripción: rangos orientativos de Training Stress Balance.
- **Tipo:** carga / forma.
- **Métrica principal:** `TSB = CTL - ATL`.
- **Valores numéricos:**
  - `> +15`: posible detraining si sostenido.
  - `0 a +15`: zona típica de carrera/forma.
  - `-20 a 0`: probable mejora de fitness.
  - `< -20`: riesgo de sobreentrenamiento si sostenido.
- **Condiciones de aplicación:** planificación semanal; individualizar.
- **Capítulos/páginas:** Cap. 13, pp. 225–226.
- **Comentarios:** no sustituye sensaciones, sueño, estrés o enfermedad.

### Regla: `weekly_tss_trajectory`

- Descripción: la carga semanal debe crecer lentamente a largo plazo.
- **Tipo:** carga / progresión.
- **Métrica principal:** `weeklyTSS`.
- **Valores numéricos:**
  - Tendencia general ascendente durante meses/años.
  - No requiere que cada semana sea mayor que la anterior.
- **Condiciones de aplicación:** atletas sanos con consistencia.
- **Capítulos/páginas:** Cap. 13, pp. 227–228.
- **Comentarios:** evitar aumentos excesivos vía intensidad sola.

### Regla: `safe_tsb_training_range`

- Descripción: mantener TSB en rango seguro durante semanas normales.
- **Tipo:** carga / seguridad.
- **Métrica principal:** `TSB`.
- **Valores numéricos:**
  - Objetivo: -20 a 0 la mayoría de semanas.
- **Condiciones de aplicación:** atletas time-crunched o sin bloques de overload.
- **Capítulos/páginas:** Cap. 13, p. 228.
- **Comentarios:** si baja de -20, considerar recovery week de 20–40% menos carga.

### Regla: `recovery_week_load_reduction`

- Descripción: semana de recuperación reduce carga total.
- **Tipo:** descanso / periodización.
- **Métrica principal:** `weeklyLoadReductionPct`.
- **Valores numéricos:**
  - Reducción 20–40% de carga/volumen.
- **Condiciones de aplicación:** tras bloques duros, TSB bajo, fatiga subjetiva o cada 6–12 semanas en flat load.
- **Capítulos/páginas:** Cap. 13, p. 229; Cap. 14, p. 236; Cap. 8, p. 132.
- **Comentarios:** reducir intensidad y volumen, especialmente medium/high, no solo duración.

### Regla: `polarized_pyramidal_session_distribution`

- Descripción: la mayoría de sesiones deben ser low intensity.
- **Tipo:** distribución de intensidad.
- **Métrica principal:** `sessionClassification` por sesión.
- **Valores numéricos:**
  - Low: ~75–80% de sesiones.
  - Medium: ~5–10%.
  - High: ~15–20%.
- **Condiciones de aplicación:** macro/mesociclo; no necesariamente cada sesión.
- **Capítulos/páginas:** Cap. 12, pp. 213–214, 220.
- **Comentarios:** usar sessional goal approach, no time-in-zone, para planificar.

### Regla: `zone2_session_majority`

- Descripción: una buena parte del entrenamiento debe ser Zone2 de calidad.
- **Tipo:** distribución / aerobic base.
- **Métrica principal:** `pctSessionsLow`, `pctRideTimeInZone2`.
- **Valores numéricos:**
  - ~80% de sesiones low/Zone2.
  - En rides Zone2, al menos 50% del tiempo en Zone2, idealmente más.
- **Condiciones de aplicación:** casi todos los ciclistas; ajustar rutas, cadencia y equipo.
- **Capítulos/páginas:** Parte 5, pp. 280–281; Cap. 12, pp. 213–215.
- **Comentarios:** normalised power en Zone2 no basta si hay muchos surges.

### Regla: `microcycle_recovery_days_minimum`

- Descripción: mínimo de días de recuperación por semana.
- **Tipo:** frecuencia / recuperación.
- **Métrica principal:** `recoveryDaysPerWeek`.
- **Valores numéricos:**
  - General: ≥2 días/semana.
  - Principiantes, time-crunched o propensos a lesión: 3 días/semana.
- **Condiciones de aplicación:** microciclo semanal estándar.
- **Capítulos/páginas:** Cap. 14, p. 233.
- **Comentarios:** recuperación puede ser día off o recovery ride corto.

### Regla: `microcycle_medium_high_sessions`

- Descripción: número de sesiones medium/high por semana.
- **Tipo:** frecuencia / intensidad.
- **Métrica principal:** `mediumHighSessionsPerWeek`.
- **Valores numéricos:**
  - 1–2 sesiones medium/high por semana para la mayoría.
- **Condiciones de aplicación:** microciclo regular; equivale a ~20–25% de sesiones.
- **Capítulos/páginas:** Cap. 14, p. 233; Cap. 12, pp. 213–214.
- **Comentarios:** en bloques overload puede aumentar puntualmente.

### Regla: `high_intensity_preceded_by_recovery`

- Descripción: llegar fresco a sesiones altas.
- **Tipo:** recuperación / calidad.
- **Métrica principal:** `recoveryBeforeHighIntensity`.
- **Valores numéricos/cualitativos:**
  - Al menos 1 día off o recovery ride el día previo a sesión high/threshold exigente.
- **Condiciones de aplicación:** salvo block overload deliberado.
- **Capítulos/páginas:** Cap. 14, pp. 232–233.
- **Comentarios:** la calidad de alta intensidad depende de frescura.

### Regla: `tsb_gate_for_interval_day`

- Descripción: usar TSB como gate para intervalos y endurance rides.
- **Tipo:** carga / readiness.
- **Métrica principal:** `TSB`.
- **Valores numéricos:**
  - Interval day: TSB no menor que ~-5.
  - Zone2 endurance ride: TSB no menor que ~-20.
- **Condiciones de aplicación:** si se usan métricas TSB; modificar según individuo.
- **Capítulos/páginas:** Cap. 14, pp. 238–239.
- **Comentarios:** si fatiga subjetiva alta, postponer intervalos aunque TSB sea aceptable.

### Regla: `recovery_ride_prescription`

- Descripción: sesión corta y fácil para recuperar.
- **Tipo:** recuperación / sesión.
- **Métrica principal:** `duration`, `intensity`, `TSS`.
- **Valores numéricos:**
  - 20–90 min.
  - Zona 1C o Zone2C bajo.
  - TSS objetivo ≤40.
- **Condiciones de aplicación:** entre sesiones duras; no debe generar fatiga.
- **Capítulos/páginas:** Cap. 11, pp. 155–157.
- **Comentarios:** no convertir recovery ride en entrenamiento; a veces día off completo es mejor mentalmente.

### Regla: `zone2_aerobic_ride_prescription`

- Descripción: ride largo continuo para base aeróbica.
- **Tipo:** volumen / aerobic base.
- **Métrica principal:** `duration`, `pctFTP`, `timeInZone2`.
- **Valores numéricos:**
  - Duración: ≥1.5 h.
  - Intensidad: 55–75% FTP, 68–83% threshold HR o 60–70% HRmax.
  - Ideal mantener mayoría del tiempo en Zone2C.
- **Condiciones de aplicación:** terreno llano/rolling; usar potenciómetro para evitar surges.
- **Capítulos/páginas:** Cap. 11, pp. 158–160.
- **Comentarios:** no aumentar intensidad para “mejorar”; la adaptación depende más de duración.

### Regla: `zone2_surge_control`

- Descripción: evitar surges prolongados sobre umbral en rides aeróbicos.
- **Tipo:** intensidad / calidad.
- **Métrica principal:** `surgeDurationAboveLT`.
- **Valores numéricos:**
  - Evitar surges >20 s por encima de lactate threshold.
- **Condiciones de aplicación:** Zone2/fat oxidation rides.
- **Capítulos/páginas:** Cap. 11, p. 160.
- **Comentarios:** tras un surge, puede tomar hasta ~20 min volver a baseline láctico, reduciendo tiempo de fat oxidation.

### Regla: `low_cadence_zone3_prescription`

- Descripción: intervalos de fuerza/resistencia muscular a baja cadencia.
- **Tipo:** sesión / muscular endurance.
- **Métrica principal:** `cadenceRPM`, `zone`, `totalLowCadenceTime`.
- **Valores numéricos:**
  - 20–60 min totales a 55–75 RPM.
  - Intensidad Zone3C: ~80–95% FTP, 84–94% threshold HR o 70–80% HRmax.
  - Frecuencia: 1–3 veces/semana, salvo objetivo ultra.
- **Condiciones de aplicación:** ciclistas que necesitan fuerza-resistencia, climbs o baja cadencia.
- **Capítulos/páginas:** Cap. 11, pp. 161–164.
- **Comentarios:** no usar en exceso; genera más fatiga que beneficio marginal si se abusa.

### Regla: `restricted_carbohydrate_availability_limits`

- Descripción: entrenar con baja disponibilidad de carbohidrato para adaptar fat oxidation.
- **Tipo:** nutrición / sesión.
- **Métrica principal:** `rcaSessionsPerWeek`, `rcaDuration`.
- **Valores numéricos:**
  - Solo intensidades ≤Zone3C.
  - Máximo 2–3 sesiones/semana.
  - Comenzar con 30–60 min.
  - No exceder ~3 h en RCA.
- **Condiciones de aplicación:** atletas sanos, bien adaptados; no en enfermedad, recovery rides o sesiones intensas.
- **Capítulos/páginas:** Cap. 11, pp. 165–169.
- **Comentarios:** puede aumentar señalización aeróbica/fat oxidation, pero comprometer calidad si se abusa.

### Regla: `classic_vo2max_intervals`

- Descripción: intervalos clásicos para VO2max.
- **Tipo:** intensidad / VO2max.
- **Métrica principal:** `intervalDuration`, `pctFTP`, `HRpctMax`.
- **Valores numéricos:**
  - 4–8 intervalos de 3–6 min.
  - 110–120% FTP.
  - Recuperación 1:1 o 2:1.
  - HR debe superar ~90% HRmax tras primeros intervalos.
- **Condiciones de aplicación:** atleta fresco, bien fuelled; warm-up con esfuerzos de activación.
- **Capítulos/páginas:** Cap. 11, pp. 170–172.
- **Comentarios:** ajustar potencia según V̇LaMax/VO2max; si HR no llega, revisar fatiga o fractional utilization.

### Regla: `supra_threshold_intervals`

- Descripción: intervalos largos ligeramente sobre umbral usando VO2 slow component.
- **Tipo:** intensidad / VO2max-threshold.
- **Métrica principal:** `intervalDuration`, `pctFTP`.
- **Valores numéricos:**
  - 3–5 intervalos de 6–8 min.
  - 103–108% FTP.
  - Recuperación 2:1 o algo mayor.
- **Condiciones de aplicación:** cuando se busca tiempo cerca de VO2max con menor percepción de esfuerzo.
- **Capítulos/páginas:** Cap. 11, pp. 173–176.
- **Comentarios:** HR debe llegar a ~90% HRmax en intervalos posteriores.

### Regla: `hard_start_vo2max_intervals`

- Descripción: comenzar intervalos fuerte para elevar HR/VO2 rápido.
- **Tipo:** intensidad / VO2max.
- **Métrica principal:** `hardStartSeconds`, `pctFTP`.
- **Valores numéricos:**
  - Hard start 20–30 s a 120–130% FTP.
  - Resto del intervalo a 100–108% FTP según duración.
- **Condiciones de aplicación:** intervalos 3–8 min; atleta fresco.
- **Capítulos/páginas:** Cap. 11, pp. 176–177.
- **Comentarios:** reduce potencia posterior para sostener tiempo cerca de VO2max.

### Regla: `billat_hr_vo2max_intervals`

- Descripción: intervalos guiados por FC para mantener VO2max con mínima potencia.
- **Tipo:** intensidad / VO2max / FC.
- **Métrica principal:** `HRpctMax`, `intervalDuration`.
- **Valores numéricos:**
  - 2–5 intervalos de 6–10 min.
  - Inicio 1.5–2 min a 120–125% FTP hasta HR >90–95% HRmax.
  - Luego ajustar potencia para mantener HR 90–95% HRmax.
  - Recuperación 2:1.
- **Condiciones de aplicación:** atletas con HR fiable; no obsesionarse con potencia tras alcanzar HR objetivo.
- **Capítulos/páginas:** Cap. 11, pp. 179–181.
- **Comentarios:** puede permitir más tiempo cerca de VO2max que potencia constante.

### Regla: `microburst_vo2max_intervals`

- Descripción: bloques de esfuerzos muy cortos con micro-recuperaciones.
- **Tipo:** intensidad / VO2max.
- **Métrica principal:** `effortSeconds`, `workRestRatio`, `blockDuration`.
- **Valores numéricos:**
  - 2–4 bloques.
  - Esfuerzos 15–45 s.
  - Ratio 1:1 a 2:1; 2:1 suele funcionar mejor.
  - Bloques 9–15 min.
  - Recuperación entre bloques 3–5 min.
  - Intensidad aprox. Zone6C (120–130% FTP orientativo).
- **Condiciones de aplicación:** requiere potenciómetro; buscar HR drift a 90–95% HRmax.
- **Capítulos/páginas:** Cap. 11, pp. 182–184.
- **Comentarios:** también puede desarrollar peak anaerobic power; usar con control si se busca preservar umbral.

### Regla: `lactate_threshold_intervals`

- Descripción: intervalos en/near threshold para tolerancia y endurance a umbral.
- **Tipo:** intensidad / threshold.
- **Métrica principal:** `pctFTP`, `totalThresholdTime`.
- **Valores numéricos:**
  - 98–103% FTP.
  - Intervalos 6–30 min.
  - Total 20–45 min.
  - Recuperación ~2:1.
- **Condiciones de aplicación:** preparación para eventos cerca de threshold; no mejor sesión para subir umbral real.
- **Capítulos/páginas:** Cap. 11, pp. 185–187.
- **Comentarios:** produce estrés alto; usar con moderación y propósito.

### Regla: `over_unders_lactate_clearance`

- Descripción: alternar sobre y bajo umbral para entrenar producción/clearance.
- **Tipo:** intensidad / lactato.
- **Métrica principal:** `blockDuration`, `overIntensity`, `underIntensity`.
- **Valores numéricos:**
  - 2–4 bloques de 8–20 min.
  - Over: Zone5C/6C o 103–125% FTP según formato.
  - Under: top Zone3C, ~80–90% FTP.
  - Recuperación entre bloques 3–5 min.
- **Condiciones de aplicación:** mejorar lactate clearance/transport y tolerancia.
- **Capítulos/páginas:** Cap. 11, pp. 187–190.
- **Comentarios:** sensación de lactato debe subir en over y bajar en under antes del siguiente over.

### Regla: `anaerobic_stamina_intervals`

- Descripción: esfuerzos sobre umbral con descansos cortos para tolerancia/transporte.
- **Tipo:** intensidad / anaerobic stamina.
- **Métrica principal:** `workRestRatio`, `zone`.
- **Valores numéricos:**
  - Zone6C: ratio 1:1 a 1:3.
  - Zone5C: ratio ≤2:1.
  - Ejemplos: 5×60 s a 130–140% FTP con 2 min; 20–30×1 min a 105–110% con 30 s; 6–8×4 min a 102–105% con 1 min.
- **Condiciones de aplicación:** atleta fresco; potenciómetro recomendado.
- **Capítulos/páginas:** Cap. 11, pp. 191–193.
- **Comentarios:** ajustar para mantener potencia consistente; no convertir en sesión de fatiga excesiva.

### Regla: `anaerobic_power_intervals`

- Descripción: esfuerzos máximos de 20–90 s para peak anaerobic power.
- **Tipo:** intensidad / anaeróbico.
- **Métrica principal:** `effortDuration`, `workRestRatio`.
- **Valores numéricos:**
  - 2–8 esfuerzos.
  - 20–90 s máximos.
  - Recuperación ≥1:5.
  - Warm-up largo ~30 min.
- **Condiciones de aplicación:** fresco, bien fuelled; recuperación activa Zone1–3.
- **Capítulos/páginas:** Cap. 11, pp. 194–195.
- **Comentarios:** puede mejorar buffering y función mitocondrial, pero aumenta tasa glucolítica.

### Regla: `neuromuscular_sprint_intervals`

- Descripción: sprints muy cortos para reclutamiento neural.
- **Tipo:** neuromuscular / potencia.
- **Métrica principal:** `sprintDuration`, `recoveryMinutes`.
- **Valores numéricos:**
  - 3–10 esfuerzos de 5–20 s.
  - Recuperación ≥2 min.
  - Ideal 10–20 min entre sets si se agrupan.
- **Condiciones de aplicación:** usar gear grande y rolling start para potencia; evitar si fatiga alta.
- **Capítulos/páginas:** Cap. 11, pp. 196–198.
- **Comentarios:** no acumulan lactato apreciable si <20 s; pueden incluirse en rides largos con cuidado.

### Regla: `pre_race_openers_session`

- Descripción: sesión corta con pequeños toques de intensidad el día previo.
- **Tipo:** race prep / activación.
- **Métrica principal:** `sessionDuration`, `efforts`.
- **Valores numéricos:**
  - ~1 h total.
  - Mayormente Zone1C/low Zone2C.
  - 3×1 min Zone4C + opcional 2 esfuerzos con 1 min Zone4C + 30 s Zone5C.
- **Condiciones de aplicación:** evento clave día siguiente.
- **Capítulos/páginas:** Cap. 11, pp. 199–201; Cap. 16, p. 260.
- **Comentarios:** no debe causar fatiga; ajustar a disciplina.

### Regla: `pre_race_warmup_priming`

- Descripción: warm-up para eventos que superarán umbral pronto.
- **Tipo:** race prep / warm-up.
- **Métrica principal:** `warmupDuration`, `primingEfforts`.
- **Valores numéricos:**
  - ~30 min.
  - 5 min Zone2C, 5–10 min progresivo a top Zone3C, 5 min Zone2C.
  - 4×45 s a 110–115% FTP con ~1 min fácil.
  - 5 min suave final.
- **Condiciones de aplicación:** eventos con intensidad threshold/VO2max en primeros 20–30 min.
- **Capítulos/páginas:** Cap. 11, pp. 201–203; Cap. 16, p. 261.
- **Comentarios:** para eventos muy largos y bajos puede bastar empezar suave dentro del evento.

### Regla: `strength_development_frequency`

- Descripción: frecuencia de fuerza para desarrollo en ciclistas.
- **Tipo:** fuerza / frecuencia.
- **Métrica principal:** `strengthSessionsPerWeek`.
- **Valores numéricos:**
  - Desarrollo: 2–3 sesiones/semana.
  - Mantenimiento: 1 sesión/semana.
  - Duración del bloque: 12–16 semanas.
- **Condiciones de aplicación:** no comprometer sesiones clave de bici.
- **Capítulos/páginas:** Cap. 15, pp. 247–248.
- **Comentarios:** time-crunched: 2 sesiones/semana.

### Regla: `strength_periodization_rep_progression`

- Descripción: periodizar fuerza de reps altas a pesadas.
- **Tipo:** fuerza / progresión.
- **Métrica principal:** `repRange`, `loadRM`.
- **Valores numéricos:**
  - Inicio: 10–15 reps/set.
  - Progresión hacia 4–6 reps/set en semanas 12–16.
  - Cargas moderadas/pesadas <15RM; investigación favorece <8RM.
  - 2–4 sets por ejercicio; descanso 2–6 min.
- **Condiciones de aplicación:** técnica adecuada; progresar gradualmente.
- **Capítulos/páginas:** Cap. 15, pp. 244–249.
- **Comentarios:** evitar fallo; terminar con 1–2 reps en reserva.

### Regla: `strength_session_structure`

- Descripción: estructura recomendada de sesión de fuerza.
- **Tipo:** fuerza / sesión.
- **Métrica principal:** `sessionComponents`.
- **Valores numéricos/cualitativos:**
  - Warm-up 5–10 min suave + movilidad ligera.
  - Core ~20 min: 3–4 ejercicios, 3 sets.
  - Pesos: 2–3 ejercicios principales tipo squat/deadlift/lunge.
- **Condiciones de aplicación:** suplementario al ciclismo.
- **Capítulos/páginas:** Cap. 15, pp. 246–247.
- **Comentarios:** evitar sesiones duras de fuerza en días de recuperación.

### Regla: `strength_tss_approximation`

- Descripción: asignar carga aproximada a sesiones de fuerza.
- **Tipo:** carga / fuerza.
- **Métrica principal:** `manualTSSPerHour`.
- **Valores numéricos:**
  - Core: ~30–40 TSS/h.
  - Weight training: ~60–80 TSS/h.
- **Condiciones de aplicación:** si el sistema integra fuerza en TSS.
- **Capítulos/páginas:** Cap. 15, p. 250.
- **Comentarios:** aproximación; no refleja daño muscular exacto.

### Regla: `taper_duration_and_volume`

- Descripción: taper para eventos prioritarios.
- **Tipo:** race prep / taper.
- **Métrica principal:** `taperDays`, `volumeReductionPct`.
- **Valores numéricos:**
  - Duración: 8–14 días; time-crunched 7–8 días.
  - Reducción volumen: 21–40% total.
  - Reducción gradual: semana 1 10–20%, semana 2 20–40%.
- **Condiciones de aplicación:** solo eventos de alta prioridad.
- **Capítulos/páginas:** Cap. 16, pp. 252–254.
- **Comentarios:** primero eliminar no-específico, luego reducir low/medium.

### Regla: `taper_intensity_maintenance`

- Descripción: mantener intensidad durante taper.
- **Tipo:** race prep / intensidad.
- **Métrica principal:** `highIntensitySessionsPerWeek`.
- **Valores numéricos/cualitativos:**
  - Mantener número habitual de sesiones high intensity.
  - No eliminar intervalos por miedo a fatiga.
- **Condiciones de aplicación:** taper de evento clave.
- **Capítulos/páginas:** Cap. 16, pp. 254–255.
- **Comentarios:** reducir volumen, no calidad específica.

### Regla: `taper_tsb_target`

- Descripción: objetivo de TSB el día del evento.
- **Tipo:** race prep / carga.
- **Métrica principal:** `TSB`.
- **Valores numéricos:**
  - General: 0–10.
  - Eventos ≤1.5 h: 0–5.
  - Eventos largos: 5–10.
  - Ultra muy largos: 10–15.
- **Condiciones de aplicación:** si se usa TSB; individualizar.
- **Capítulos/páginas:** Cap. 16, p. 257.
- **Comentarios:** no usar como único criterio de forma.

### Regla: `lower_priority_race_taper`

- Descripción: taper corto para carreras secundarias.
- **Tipo:** race prep / frecuencia.
- **Métrica principal:** `taperDays`.
- **Valores numéricos:**
  - 2–4 días fáciles antes de carrera.
  - Opcional bloque de 2 sesiones hard al inicio de semana.
- **Condiciones de aplicación:** eventos no prioritarios; mantener fitness.
- **Capítulos/páginas:** Cap. 16, pp. 258–259.
- **Comentarios:** incluir openers día previo.

### Regla: `race_carb_loading`

- Descripción: carga de carbohidratos según duración del evento.
- **Tipo:** nutrición / carrera.
- **Métrica principal:** `carbIntake_g_per_kg_day`.
- **Valores numéricos:**
  - Eventos >1.5 h: 10–12 g/kg/día durante 36–48 h previas.
  - Eventos ≤1.5 h: no se requiere carb loading específico.
- **Condiciones de aplicación:** eventos largos; considerar tolerancia GI.
- **Capítulos/páginas:** Cap. 16, p. 262.
- **Comentarios:** no aplicar a sesiones cortas o recreativas sin necesidad.

### Regla: `race_carb_intake_during_event`

- Descripción: ingesta de carbohidratos durante evento.
- **Tipo:** nutrición / carrera.
- **Métrica principal:** `carbsPerHour`.
- **Valores numéricos:**
  - <1 h: sin requerimiento específico.
  - 1–1.5 h: 30–60 g/h.
  - 1.5–2.5 h: 30–60 g/h.
  - >2.5 h: 60–90 g/h; usar multiple transportable carbs si >60 g/h.
- **Condiciones de aplicación:** beber según sed; entrenar tolerancia.
- **Capítulos/páginas:** Cap. 16, p. 262.
- **Comentarios:** eventos largos requieren práctica nutricional.

### Regla: `pre_start_carb_timing`

- Descripción: evitar carbs en ventana previa inmediata.
- **Tipo:** nutrición / timing.
- **Métrica principal:** `minutesBeforeStart`.
- **Valores numéricos:**
  - Evitar carbs 10–60 min antes.
  - Permitido pequeño bolo <10 min antes.
  - Comida previa 1–4 g/kg, 1–4 h antes para eventos ≥1–1.5 h.
- **Condiciones de aplicación:** cualquier evento; especialmente si riesgo de hipoglucemia reactiva.
- **Capítulos/páginas:** Cap. 16, pp. 262–263.
- **Comentarios:** pequeños carbs en línea de salida pueden mejorar percepción/esfuerzo incluso si no llegan a sangre.

### Regla: `caffeine_race_dose`

- Descripción: dosis de cafeína para rendimiento.
- **Tipo:** nutrición / ayudas ergogénicas.
- **Métrica principal:** `caffeineMgPerKg`.
- **Valores numéricos:**
  - 2–6 mg/kg.
  - Pico de efecto ~45 min tras consumo.
- **Condiciones de aplicación:** probar en entrenamientos/carreras secundarias.
- **Capítulos/páginas:** Cap. 16, p. 263.
- **Comentarios:** efectos secundarios posibles; no automatizar sin tolerancia individual.

### Regla: `post_event_recovery_duration`

- Descripción: tiempo de recuperación tras evento según duración.
- **Tipo:** recuperación / evento.
- **Métrica principal:** `recoveryDays`.
- **Valores numéricos:**
  - Eventos cortos: ≤24 h.
  - Eventos 3–4 h+: hasta ~1 semana.
  - Ultra-distance: varias semanas.
- **Condiciones de aplicación:** ajustar a fatiga real; incluir rides fáciles.
- **Capítulos/páginas:** Cap. 16, p. 264.
- **Comentarios:** low intensity Zone1–2 ayuda flujo sanguíneo; descanso completo solo si se necesita mental/físicamente.

### Regla: `lsct_protocol`

- Descripción: test submáximo de Lamberts & Lambert para fatiga/fitness.
- **Tipo:** monitoreo / test.
- **Métrica principal:** `HR`, `power`, `RPE`, `HRR`.
- **Valores numéricos:**
  - Stage 1: 6 min a 60% HRmax.
  - Stage 2: 6 min a 80% HRmax.
  - Stage 3: 3 min a 90% HRmax.
  - Stage 4: 1.5 min parado/coasting para HR recovery.
  - Registrar RPE al final de stages.
- **Condiciones de aplicación:** semanal, como warm-up o sesión baja; estándar cafeína/comida/sueño.
- **Capítulos/páginas:** Cap. 17, pp. 270–273.
- **Comentarios:** requiere 3–4 semanas de baseline.

### Regla: `lsct_fatigue_thresholds`

- Descripción: señales de fatiga en LSCT.
- **Tipo:** monitoreo / fatiga.
- **Métrica principal:** `powerHRratio`, `HRR`, `RPE`, `T90`.
- **Valores numéricos:**
  - RPE stage 2 +1 punto sobre normal: evitar intensidad.
  - T90 >1 min para alcanzar 90% HRmax o no alcanzarlo: evitar intensidad.
  - Cambios súbitos en power:HR o HRR: fatiga posible.
- **Condiciones de aplicación:** comparar contra baseline de 3–4 semanas.
- **Capítulos/páginas:** Cap. 17, pp. 272–273.
- **Comentarios:** interpretar múltiples señales juntas.

### Regla: `subjective_fatigue_action`

- Descripción: signos subjetivos de fatiga sostenida.
- **Tipo:** recuperación / fatiga.
- **Métrica principal:** `subjectiveFatigueScore` cualitativo.
- **Valores/criterios:**
  - Bajo ánimo, baja motivación, dolor muscular alto, dificultad para producir potencia/HR habitual.
  - Si varios síntomas > pocos días: reducir carga.
- **Condiciones de aplicación:** cualquier atleta.
- **Capítulos/páginas:** Cap. 17, pp. 268–269.
- **Comentarios:** no confundir fatiga transitoria normal con tendencia persistente.

### Regla: `hr_deviation_fatigue_flag`

- Descripción: HR anormal para misma potencia.
- **Tipo:** monitoreo / FC.
- **Métrica principal:** `bpmDeviation`.
- **Valores numéricos:**
  - ±10 bpm fuera del rango normal para potencia dada durante varios días.
- **Condiciones de aplicación:** controlar cafeína, estrés, temperatura, hidratación.
- **Capítulos/páginas:** Cap. 17, p. 269.
- **Comentarios:** no usar como único marcador.

### Regla: `training_residuals_planning`

- Descripción: planear bloques según tiempo de adaptación/desentrenamiento.
- **Tipo:** periodización.
- **Métrica principal:** `weeksToAdapt`, `weeksToDetrain`.
- **Valores numéricos aproximados:**
  - Aeróbico estructural: 1–2 meses.
  - Enzimas aeróbicas: 2–10 semanas.
  - Tolerancia láctica: 2–10 semanas.
  - Peak anaerobic power: 2–4 semanas.
  - Neuromuscular: días–2 semanas.
  - Fuerza máxima: 1–2 meses.
- **Condiciones de aplicación:** diseño de mesociclos y proximidad a competencia.
- **Capítulos/páginas:** Cap. 8, p. 119.
- **Comentarios:** capacidades rápidas de ganar se pierden rápido; aeróbico tarda más pero dura más.

### Regla: `short_time_to_event_priority`

- Descripción: si hay poco tiempo, priorizar adaptaciones rápidas.
- **Tipo:** planificación / prioridad.
- **Métrica principal:** `weeksToEvent`.
- **Valores numéricos/cualitativos:**
  - Adaptaciones rápidas: neuromuscular, V̇LaMax, lactate shuttling, skills.
  - Aeróbico requiere más tiempo; con <6 semanas no esperar grandes cambios aeróbicos.
- **Condiciones de aplicación:** eventos en 2–6 semanas.
- **Capítulos/páginas:** Cap. 7, p. 104; Cap. 8, p. 133.
- **Comentarios:** también puede ser mejor de-priorizar evento y planificar objetivo lejano.

### Regla: `mesocycle_length_default`

- Descripción: duración típica de mesociclos.
- **Tipo:** periodización.
- **Métrica principal:** `mesocycleWeeks`.
- **Valores numéricos:**
  - 2–10 semanas; típico 4–8 semanas para objetivos específicos.
- **Condiciones de aplicación:** planificación por bloques.
- **Capítulos/páginas:** Cap. 7, p. 107; Cap. 8, p. 131.
- **Comentarios:** incluye bloque de carga y recuperación.

### Regla: `time_crunched_flat_load_policy`

- Descripción: para atletas con tiempo limitado, mantener carga plana y recovery on demand.
- **Tipo:** carga / periodización.
- **Métrica principal:** `weeklyVolume`, `recoveryWeekFrequency`.
- **Valores numéricos:**
  - Mantener volumen cerca del máximo disponible si fitness lo permite.
  - Recovery week al menos cada 6–12 semanas o según fatiga.
- **Condiciones de aplicación:** atletas con límite semanal fijo.
- **Capítulos/páginas:** Cap. 8, p. 132.
- **Comentarios:** usar 3:1 solo si hay margen para semanas de alto volumen.

### Regla: `block_overload_caution`

- Descripción: overload concentrado solo con experiencia y recuperación.
- **Tipo:** carga / riesgo.
- **Métrica principal:** `overloadDays`, `recoveryAfter`.
- **Valores numéricos/cualitativos:**
  - Ejemplo semanal: 1 semana con 4–5 sesiones high/medium seguida de 3 semanas aeróbicas con 1 sesión high/medium.
  - Alternativa segura: bloque de 2–3 días intensos entre carreras.
- **Condiciones de aplicación:** atletas entrenados, sin propensión a enfermedad/lesión.
- **Capítulos/páginas:** Cap. 14, pp. 237–238; Cap. 16, pp. 255–257.
- **Comentarios:** riesgo de non-functional overreaching; practicar en eventos menores.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `cycling-ftp-field-testing`

- **Disciplina:** ciclismo / testing.
- **Objetivo final:** estimar FTP de forma fiable para zonas y progreso.
- **Requisitos de seguridad previos:** estar sano, sin fatiga aguda, nutrición estándar, equipo fiable; no realizar si hay enfermedad o fatiga marcada.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Familiarización con pacing | Practicar esfuerzos de 8–20 min a ritmo estable sin mirar datos excesivamente | Poder mantener potencia constante en entrenamientos | Empezar demasiado fuerte | Cap. 5, pp. 54–56 |
| 2 | Test 2×8 min | Dos esfuerzos de 8 min con recuperación 4–5 min | Completar ambos con potencia similar | Pacing desigual | Cap. 5, pp. 55–56 |
| 3 | Test 20 min | Warm-up + 5 min effort + 20 min maximal estable | FTP 95% (o 90–93% si anaeróbico fuerte) | Usar ERG en test, surges | Cap. 5, pp. 53–54 |
| 4 | Validación con sesiones | Verificar zonas en intervalos y sensaciones | Las zonas se sienten correctas en Z2/Z4/Z5 | Mantener FTP sobreestimado | Cap. 5, pp. 57–58; Cap. 10, pp. 151–153 |

### SkillPath: `critical-power-testing`

- **Disciplina:** ciclismo / testing avanzado.
- **Objetivo final:** estimar CP y W′ para perfil aeróbico/anaeróbico y pacing.
- **Requisitos:** potenciómetro, capacidad de realizar esfuerzos máximos de 3–20 min, experiencia con pacing.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Selección de duraciones | Elegir 3–4 tests: 3, 5, 12, opcional 20 min | Tests seleccionados según atleta | Usar solo 2 tests | Cap. 5, pp. 64–65 |
| 2 | Ejecución separada | Realizar tests en días distintos, fresco | Todos completados con pacing estable | Tests consecutivos | Cap. 5, pp. 66–67 |
| 3 | Cálculo CP/W′ | Ajuste lineal power vs 1/time | Buen fit; valores plausibles | Datos mal paced | Cap. 5, pp. 63–65 |
| 4 | Aplicación a zonas | Usar ~94% CP como FTP para zonas | Zonas validadas con HR/RPE | Usar CP directo como FTP | Cap. 5, p. 67 |

### SkillPath: `vo2max-interval-progression`

- **Disciplina:** ciclismo / intervalos.
- **Objetivo final:** acumular tiempo cerca de VO2max con calidad y seguridad.
- **Requisitos:** base aeróbica, frescura, buen fueling; HR opcional pero útil.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Self-paced VO2 intro | 6×3 min a feel, 8/10, sin mirar potencia | Completar sin colapso, HR >90% tras intervalos | Salir demasiado fuerte | Cap. 10, p. 151 |
| 2 | Classic 3–6 min | 4–8×3–6 min a 110–120% FTP | Últimos intervalos exigentes pero completados | Potencia mal ajustada | Cap. 11, pp. 170–172 |
| 3 | Supra-threshold 6–8 min | 3–5×6–8 min a 103–108% FTP | HR >90% con menor RPE | Recuperación demasiado corta | Cap. 11, pp. 173–176 |
| 4 | Hard-start | 20–30 s fuerte + resto a 100–108% | Más tiempo HR alta con menor potencia media | No bajar potencia tras hard start | Cap. 11, pp. 176–177 |
| 5 | Billat HR-led | Inicio 1.5–2 min fuerte, luego mantener HR 90–95% | Mantener HR sin potencia excesiva | Obsesionarse con potencia | Cap. 11, pp. 179–181 |
| 6 | Microbursts | 15–45 s on/off en bloques 9–15 min | HR drift a 90–95% | Ratios demasiado largos que impiden HR alta | Cap. 11, pp. 182–184 |

### SkillPath: `cyclist-strength-block`

- **Disciplina:** fuerza complementaria para ciclismo.
- **Objetivo final:** mejorar economía, endurance tardío, potencia y resiliencia sin comprometer bici.
- **Requisitos:** técnica segura, sin dolor, idealmente guía de strength coach.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Core básico | 20 min core, 3–4 ejercicios, 3 sets | Estabilidad sin dolor | Hacer core en recovery days como carga | Cap. 15, pp. 245–247 |
| 2 | Fuerza ligera | 2–3 ejercicios, 10–15 reps | Técnica sólida, 1–2 reps in reserve | Fallo técnico | Cap. 15, pp. 247–249 |
| 3 | Fuerza moderada/pesada | Progresar a 4–6 reps, <8RM | Mantener rendimiento en bici | Fatiga que arruina intervalos | Cap. 15, pp. 244–248 |
| 4 | Mantenimiento | 1 sesión/semana, 1–2 sets | Mantener fuerza sin fatiga | Continuar volumen alto en temporada | Cap. 15, pp. 247–248 |

### SkillPath: `race-taper-execution`

- **Disciplina:** ciclismo / preparación de carrera.
- **Objetivo final:** llegar a peak form minimizando pérdida de fitness.
- **Requisitos:** haber construido fitness; evento prioritario definido.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Definir duración | 8–14 días; time-crunched 7–8 | Ajustado a fatiga previa | Taper demasiado largo | Cap. 16, pp. 252–253 |
| 2 | Reducir volumen | -21–40% gradual | TSB sube a 0–10 | Cortar todo de golpe | Cap. 16, pp. 253–254 |
| 3 | Mantener intensidad | Conservar sesiones high | Sensación de activación | Eliminar intervalos | Cap. 16, pp. 254–255 |
| 4 | Openers y warm-up | Día previo openers; día de warm-up | Piernas activas sin fatiga | Esfuerzos excesivos | Cap. 16, pp. 260–261 |

### SkillPath: `lsct-weekly-monitoring`

- **Disciplina:** monitoreo.
- **Objetivo final:** detectar fatiga y tendencia de fitness semanalmente.
- **Requisitos:** HR strap fiable, condiciones estándar, baseline 3–4 semanas.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Estandarizar | Cafeína, comida, hora, indoor | Protocolo repetible | Cafeína variable | Cap. 17, p. 273 |
| 2 | Ejecutar stages | 6 min 60%, 6 min 80%, 3 min 90%, 1.5 min stop | HR objetivo alcanzado | Auto-pause activado | Cap. 17, pp. 270–271 |
| 3 | Analizar | Power:HR, HRR, RPE, T90 | Comparar con baseline | Interpretar una sola señal | Cap. 17, pp. 272–273 |
| 4 | Accionar | Si múltiples flags: easy day o reducir intensidad | Recuperación mejora señales | Ignorar fatiga | Cap. 17, pp. 272–273 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Zone2 Aerobic Development Ride

- **Cues principales:**
  - Potencia estable dentro de Zone2C.
  - Respiración conversacional.
  - Cadencia cómoda y natural.
  - Evitar surges innecesarios en subidas.
  - Usar plato/gearing adecuado para mantener zona.
- **Errores frecuentes:**
  - Convertir el ride en tempo/Zone3.
  - Surges >20 s sobre umbral en repechos.
  - Mirar solo HR y ocultar picos de potencia.
  - Acortar la sesión por fatiga evitable.
- **Variantes seguras:**
  - Terreno llano/rolling.
  - Gears más fáciles.
  - Si no hay tiempo, mantener una sesión larga semanal aunque sea fin de semana.
  - Puede incluir pequeños sprints <20 s sin comprometer objetivo si se desea estímulo neuromuscular ligero.
- **Indicaciones específicas:**
  - Ideal para base aeróbica y fat oxidation.
  - No usar como sesión de recuperación.
  - En RCA, mantener intensidad ≤Zone3C y evitar sesiones largas >3 h sin fueling.
- **Referencias:** Cap. 11, pp. 158–160; Cap. 14, pp. 232–233; Parte 5, pp. 280–281.

### Low-Cadence Zone3 / Muscular Endurance

- **Cues principales:**
  - Cadencia 55–75 RPM.
  - Torso estable, pedalada controlada.
  - Potencia en Zone3C, no sobre umbral.
  - Sensación de fuerza-resistencia, no dolor articular.
- **Errores frecuentes:**
  - Excederse en intensidad hacia sweet spot/top Zone3 sin objetivo.
  - Usar demasiadas veces por semana.
  - Ignorar molestias por cadencia antinatural.
- **Variantes seguras:**
  - Bloques cortos de 10 min dentro de ride largo.
  - Hacia el final del ride para reclutar Type IIa con Type I fatigadas.
  - En indoor para controlar potencia.
- **Indicaciones específicas:**
  - No más de 1–3 veces/semana salvo ultra.
  - Si hay dolor, volver a cadencia natural.
- **Referencias:** Cap. 11, pp. 161–165; Cap. 11, p. 204.

### Classic / Supra / Hard-Start / Billat VO2max Intervals

- **Cues principales:**
  - Warm-up con esfuerzos cortos para activar.
  - Pacing consistente; no empezar demasiado fuerte.
  - HR debe llegar >90% HRmax en intervalos posteriores.
  - Recuperación activa suave para clearance.
  - Bien fuelled e hidratado.
- **Errores frecuentes:**
  - Potencia basada solo en %FTP sin ajustar por perfil anaeróbico/aeróbico.
  - Recuperaciones demasiado largas que impiden tiempo en VO2max.
  - Hacer sesión con fatiga acumulada.
  - No registrar HR/RPE para validar intensidad.
- **Variantes seguras:**
  - Self-paced efforts para encontrar intensidad.
  - Supra-threshold si classic 3–6 min resulta muy exigente.
  - Hard-start o Billat para acumular tiempo VO2max con menor potencia sostenida.
  - Microbursts si se busca variedad y alto tiempo HR.
- **Indicaciones específicas:**
  - Requieren frescura; postponer si fatiga.
  - Atletas con alta fractional utilization pueden necesitar menor %FTP para VO2max.
  - Atletas anaeróbicamente fuertes pueden necesitar mayor %FTP o más control de lactato.
- **Referencias:** Cap. 11, pp. 170–184; Cap. 10, pp. 151–153.

### Threshold / Over-Unders

- **Cues principales:**
  - Threshold: ritmo estable cerca de FTP, RPE ~7/10.
  - Over/unders: sentir subida de lactato en over y bajada en under.
  - Under debe ser activo, no parada.
  - Respiración controlada, no pánico.
- **Errores frecuentes:**
  - Over demasiado fuerte que impide clear en under.
  - Under demasiado fácil/lento para clearance.
  - Convertir threshold en anaerobic stamina excesiva.
- **Variantes seguras:**
  - Over corto 45–60 s + under largo.
  - Over moderado 1 min + under 1.5–2 min.
  - Threshold intervals más cortos si se busca tolerancia sin fatiga excesiva.
- **Indicaciones específicas:**
  - Threshold intervals no son la mejor vía para elevar umbral; útiles para tolerancia y race specificity.
  - Over/unders preferidos para lactate clearance.
- **Referencias:** Cap. 11, pp. 185–190.

### Anaerobic / Neuromuscular

- **Cues principales:**
  - Warm-up largo con surges.
  - Esfuerzos máximos consistentes.
  - Recuperación completa o casi completa.
  - Sprint: gear grande, rolling start, cadencia razonable.
- **Errores frecuentes:**
  - Descansos cortos que convierten sesión en anaerobic stamina no deseada.
  - Sprint desde parado si objetivo es potencia máxima.
  - Hacer sesiones anaeróbicas cuando se busca bajar V̇LaMax o mejorar umbral.
- **Variantes seguras:**
  - Sprints cortos dentro de rides largos, en bloque condensado.
  - Menos repeticiones si calidad baja.
- **Indicaciones específicas:**
  - Usar con moderación si el objetivo es endurance/fractional utilization.
  - Puede aumentar glycolytic rate y afectar threshold si se abusa.
- **Referencias:** Cap. 11, pp. 191–199.

### Recovery Ride

- **Cues principales:**
  - Muy fácil, RPE 1–2/10.
  - Cadencia cómoda.
  - Duración corta.
  - Sensación de “soltar”, no entrenar.
- **Errores frecuentes:**
  - Añadir tempo o sprints.
  - Extender demasiado.
  - Usar día de recuperación para probar fitness.
- **Variantes seguras:**
  - Cross-training suave si se necesita descanso mental.
  - Día off completo si hay fatiga mental o riesgo de overuse.
- **Referencias:** Cap. 11, pp. 155–157.

### Strength Training for Cyclists

- **Cues principales:**
  - Técnica primero, carga después.
  - Core estable, columna neutra, rodillas alineadas.
  - Ejercicios similares a patrones de ciclismo: squat, hinge, lunge.
  - Detener antes del fallo.
- **Errores frecuentes:**
  - Entrenar fuerza en recovery day.
  - Buscar hipertrofia no funcional.
  - Comprometer sesiones de bici por fatiga de gym.
  - Explosive work sin objetivo claro.
- **Variantes seguras:**
  - Bodyweight/light bands si no hay acceso a pesas.
  - Core estático/dinámico controlado.
  - Mantenimiento con 1 sesión/semana y menos sets.
- **Indicaciones específicas:**
  - No usar como rehab clínica sin profesional.
  - Beneficios marginales frente a bici; prioridad on-bike.
- **Referencias:** Cap. 15, pp. 240–250.

### Warm-Up / Openers

- **Cues principales:**
  - Progresión gradual de intensidad.
  - Incluir esfuerzos supra-threshold cortos si evento será intenso.
  - Final suave para limpiar lactato.
  - Realizar cerca del inicio del evento.
- **Errores frecuentes:**
  - Warm-up demasiado largo o intenso que genera fatiga.
  - No incluir priming en eventos intensos.
  - Hacer openers como entrenamiento completo.
- **Variantes seguras:**
  - Eventos largos bajos: empezar suave dentro del evento.
  - Eventos cortos: más sprints cortos específicos.
- **Referencias:** Cap. 11, pp. 199–203; Cap. 16, pp. 260–261.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

> El libro no es de rehabilitación clínica ni define protocolos de lesiones específicas. Esta sección debe usarse solo como prehab general y reglas de seguridad, no como diagnóstico o tratamiento.

### Lesión / condición: Overtraining / non-functional overreaching

- **Zona:** sistémico (`systemic` / `recovery`).
- **Etiología resumida:** carga de entrenamiento excesiva o demasiado frecuente sin recuperación suficiente; puede agravarse por estrés externo, sueño pobre, mala nutrición.
- **Signos y síntomas clave:**
  - Baja de rendimiento sostenida.
  - Baja motivación, irritabilidad.
  - Fatiga persistente.
  - HR anormal para potencia dada.
  - RPE elevado en esfuerzos fáciles.
- **Stadia / fases:**
  - Functional overreaching: caída breve de rendimiento con posterior supercompensación si se recupera.
  - Non-functional overreaching: caída prolongada sin supercompensación.
  - Overtraining syndrome: deterioro crónico que puede requerir meses/años.
- **Protocolos de manejo:**
  - **Fase 1: detección**
    - Objetivo: identificar señales.
    - Qué se hace: monitorear subjetivo, HR, LSCT, TSB, calidad de sesiones.
    - Qué NO se hace: ignorar síntomas, aumentar intensidad para “probar” fitness.
    - Criterio para actuar: síntomas varios > pocos días o TSB < -20 sostenido.
  - **Fase 2: reducción de carga**
    - Objetivo: recuperar capacidad de respuesta.
    - Qué se hace: recovery week 20–40% menos carga; priorizar sueño/nutrición; easy rides.
    - Qué NO se hace: mantener bloques high intensity.
    - Criterio para volver: señales normalizadas, motivación recuperada, HR/RPE normales.
- **Ejercicios/prehab:** no aplica ejercicio correctivo específico; descanso activo y control de carga.
- **Umbrales/red flags:**
  - Fatiga extrema, enfermedad, caída de rendimiento prolongada, síntomas psicológicos marcados: buscar profesional.
- **Referencias:** Cap. 6, pp. 88–91; Cap. 13, pp. 225–229; Cap. 17, pp. 268–269.

### Lesión / condición: Riesgo musculoesquelético por entrenamiento de fuerza

- **Zona:** `lower-body`, `core`, `tendons`.
- **Etiología resumida:** técnica pobre, cargas excesivas, progreso rápido, fatiga acumulada.
- **Signos clave:** dolor articular/tendinoso durante o después de fuerza, pérdida de calidad en bici.
- **Prevención:**
  - Aprender técnica con profesional.
  - Periodizar de ligero a pesado.
  - Evitar fallo.
  - 2–6 min descanso entre sets pesados.
  - No fuerza dura en recovery days.
- **Umbrales/red flags:**
  - Dolor agudo, persistente o que altera biomecánica: detener y consultar profesional.
- **Referencias:** Cap. 15, pp. 244–248, 250.

### Lesión / condición: Riesgo por baja disponibilidad energética / body fat muy bajo

- **Zona:** sistémico / salud.
- **Etiología:** restricción energética excesiva, body fat por debajo de mínimos, RCA excesiva.
- **Signos clave:** fatiga, illness risk, bajo rendimiento, recuperación pobre.
- **Prevención:**
  - No bajar de ~5% body fat hombres ni ~12% mujeres.
  - Limitar RCA a 2–3 sesiones/semana y ≤3 h.
  - No RCA si enfermedad.
  - Fueling adecuado para sesiones intensas.
- **Red flags:**
  - Enfermedad frecuente, fatiga crónica, pérdida de motivación, lesiones por estrés: buscar ayuda médica/nutricional.
- **Referencias:** Cap. 5, pp. 83–85; Cap. 11, pp. 168–169.

### Prehab general para ciclistas

- **Componentes accionables:**
  - Core 20 min, 3–4 ejercicios, 3 sets, 2–3 veces/semana en desarrollo.
  - Fuerza moderada/pesada periodizada, 2–3 sesiones/semana.
  - Warm-up progresivo con priming supra-threshold antes de eventos intensos.
  - Recuperación suficiente: ≥2 días/semana fáciles.
  - Consistencia aeróbica con mayoría low intensity.
- **Advertencias:**
  - No diagnosticar dolor.
  - No prescribir ejercicios terapéuticos específicos si hay lesión activa.
- **Referencias:** Cap. 15, pp. 240–250; Cap. 11, pp. 201–203; Cap. 14, pp. 232–234.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Sueño

- El libro no da horas recomendadas explícitas, pero menciona calidad de sueño como factor que contribuye a fatiga, recuperación y capacidad de entrenar.
- **Regla cualitativa:** si sleep quality poor durante varios días, tratar como señal de recuperación reducida y considerar reducir carga o cambiar sesión intensa por fácil.
- **Referencias:** Cap. 7, p. 101; Cap. 13, p. 227; Cap. 17, p. 268.

### Estrés

- El estrés laboral/familiar se considera amenaza en SWOT y contribuye a fatiga total.
- **Regla cualitativa:** en semanas con estrés alto, reducir carga o priorizar sesiones fáciles; no interpretar mala sesión solo como falta de fitness.
- **Referencias:** Cap. 7, pp. 101–104; Cap. 13, pp. 228–229; Cap. 17, p. 273.

### Nutrición

- No es un libro de nutrición completa, pero aporta reglas de carrera y entrenamiento con baja disponibilidad de carbohidratos.
- **Reglas accionables:**
  - Eventos >1.5 h: carb loading 10–12 g/kg/día 36–48 h antes.
  - Durante: 30–60 g/h hasta 2.5 h; 60–90 g/h en >2.5 h.
  - Evitar carbs 10–60 min antes; pequeño bolo <10 min puede ser útil.
  - Cafeína 2–6 mg/kg, probar tolerancia.
  - RCA: solo ≤Zone3C, 2–3/semana, comenzar 30–60 min, no >3 h.
  - No RCA si enfermedad o en recovery rides.
- **Referencias:** Cap. 16, pp. 261–263; Cap. 11, pp. 165–169.

### Entrenar enfermo

- El libro no proporciona regla “above/below the neck” ni protocolo de retorno.
- **Regla conservadora derivada:**
  - No realizar RCA si se está enfermo.
  - No testear ni hacer intervalos si hay fatiga anormal o enfermedad probable.
  - Priorizar recuperación y buscar profesional si síntomas persistentes.
- **Referencias:** Cap. 11, p. 169; Cap. 5, p. 86; Cap. 17, pp. 268–269.
- ⚠️ No inventar criterios clínicos; el sistema debe marcar “consultar profesional” ante enfermedad.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal para reglas de planificación de ciclismo endurance: zonas, distribución de intensidad, volumen, intervalos, recovery, tapering y monitoreo.
  - Generación de plantillas de sesiones: Zone2, low-cadence, VO2max, threshold, over/unders, anaerobic stamina, neuromuscular, openers, warm-up.
  - Motor de testing: FTP 20 min, 2×8, CP, LSCT, HRmax/threshold HR, power profile.
  - Módulo de carrera: fueling por duración, taper, TSB objetivo, warm-up y openers.
  - Módulo de fuerza complementaria para ciclistas: frecuencia, reps, sets, periodización y mantenimiento.

- **Limitaciones:**
  - No usar para diagnóstico médico, rehabilitación de lesiones ni prescripción clínica.
  - No usar como fuente principal de fuerza general, movilidad o tendinopatías; solo fuerza complementaria para ciclistas.
  - Las métricas TSS/CTL/ATL/TSB dependen de FTP correcto y datos limpios; no deben gobernar solas.
  - Muchos valores son promedios poblacionales; requieren individualización por HR, RPE, lactate, CP y sensaciones.
  - El libro está centrado en ciclismo con potenciómetro/FC; para deportes de fuerza/calisthenia se necesita otro stack.

- **Recomendaciones específicas:**
  1. Crear módulo `rules/cycling_training_load.ts` con reglas de TSS, TSB, recovery week, polarized distribution, microcycle recovery days y gates de readiness.
  2. Crear `templates/cycling_sessions.ts` con las plantillas de sesión del Cap. 11, incluyendo objetivos, zonas, work/rest, HR/RPE y contraindicaciones.
  3. Crear `skillPaths/cycling_testing.ts` y `skillPaths/cycling_race_prep.ts` para FTP/CP/LSCT, tapering, openers y warm-up.
  4. Añadir `modules/cycling_strength.ts` como bloque suplementario, no prioritario, con reglas de interferencia con on-bike training.
  5. No permitir que el sistema diagnostique fatiga extrema o enfermedad; usar LSCT/HR/subjetivo solo como recomendación de reducir carga o descanso.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# Entrega final — extracción validada + ejecución de las 5 recomendaciones

He revisado el texto completo de **“Cycling Physiology & Training Science”**. Con el contenido textual disponible, hay información suficiente para construir reglas, plantillas de sesiones, skill paths, módulo de fuerza y guardrails.

Antes de ejecutar las 5 recomendaciones, dejo explícitamente lo que **podría faltar o quedar ambiguo por ausencia de ayudas visuales**, para que lo complementes si quieres precisión absoluta.

---

## 0) Datos que necesito complementar si quieres cerrar al 100% los elementos visuales

Los siguientes puntos dependen de figuras/tablas que no están completamente disponibles en el texto plano. No impiden implementar el sistema, pero sí podrían afinar metadatos.

1. **Figura 44 — Tabla completa de zonas Coggan adaptadas**
   - El texto menciona la tabla, pero no reproduce todos los rangos exactos de `%FTP`, `%threshold HR`, `%Max HR` y RPE para cada una de las 7 zonas.
   - Lo que sí está claro en el texto:
     - Recovery: `50–60% FTP`, `<80% threshold HR`, `<65% Max HR`.
     - Zone2C: `55–75% FTP`, `68–83% threshold HR`, `60–70% Max HR`.
     - Zone3C: `80–95% FTP`, `84–94% threshold HR`, `70–80% Max HR`.
     - Threshold intervals: `98–103% FTP`, `95–105% threshold HR`, `80–90% Max HR`.
     - VO2max clásico: `110–120% FTP`, HR `>90–95% Max HR`.
     - Microbursts / hard starts: `120–130% FTP` como referencia.
   - **Si puedes transcribir la Figura 44**, puedo cerrar una tabla de zonas completa y exacta.

2. **Figuras de perfiles de sesión/test**
   - Figuras 18, 19, 25, 26, 46–61 muestran esquemas visuales de tests y sesiones.
   - El texto describe suficientemente bien la estructura, pero si quieres reproducir la forma exacta del pacing, sería útil tener las imágenes.

3. **Figura 62 — Distribución threshold / pyramidal / polarised**
   - El texto da porcentajes aproximados suficientes:
     - Polarised/pyramidal: `~75–80%` sesiones low, `~5–10%` medium, `~15–20%` high.
   - Si la figura tiene porcentajes exactos, puedo ajustarlos.

4. **Figura 66 — Programa periodizado de fuerza**
   - El texto indica la progresión general:
     - 12–16 semanas.
     - Empezar con `10–15 reps`.
     - Progresar hacia `4–6 reps`.
     - Desarrollo: `2–3 sesiones/semana`.
     - Mantenimiento: `1 sesión/semana`, `1–2 series`.
   - Si quieres una progresión semanal exacta de series/reps/carga, necesitaría la Figura 66.

5. **Figuras 20–21 — Power profile charts**
   - Las tablas de clasificación de potencia por percentil son de plataformas externas y no están reproducidas en el texto.
   - Puedo modelar power profile sin clasificaciones normativas, pero si quieres “Moderate / Good / Excellent”, necesitaríamos esas tablas o una fuente equivalente.

6. **Materiales suplementarios**
   - El libro menciona:
     - Training Session Look-Up Table.
     - Tabla de demandas fisiológicas por disciplina.
     - Ejemplos de power profiles.
     - Handbook de lactato.
   - Esos materiales no están incluidos en el texto proporcionado.
   - Si los tienes, pueden enriquecer mapping de sesiones y disciplinas.

7. **Inconsistencia menor en V̇LaMax**
   - Para un test de 20 s, el texto dice que los primeros 4 s no producen lactato y luego habla de “26 segundos” de producción, lo cual no cuadra con 20 s totales.
   - Recomendación: no implementar el cálculo exacto de `V̇LaMax` sin verificar la fuente original.

8. **Inconsistencia menor en frecuencia de testing**
   - Planificación: testear cada `8–12 semanas`.
   - Monitoreo: formal testing cada `10–16 semanas`.
   - Solución propuesta: usar `8–12 semanas` como default y `10–16` como rango amplio en mantenimiento/temporada.

Con estas salvedades, **procedo con todo lo extraído y claro**.

---

# 1) Checklist de completitud por capítulo

A continuación, confirmo qué se extrajo de cada capítulo y dónde se usará.

## Parte 1: Fundamentos fisiológicos

### Capítulo 1 — Energy Systems
**Extraído:**
- Tres sistemas energéticos:
  - Fosfocreatina.
  - Glucolítico anaeróbico.
  - Aeróbico.
- Todos contribuyen en alguna medida según duración/intensidad.
- Fosfocreatina:
  - Máxima velocidad.
  - Alta tasa durante `2–3 segundos`.
  - Domina esfuerzos máximos hasta `~6 segundos`.
  - Recupera `~50%` en `~30 segundos`, dependiente del sistema aeróbico.
- Glucolítico:
  - Comienza a actuar tras `3–6 segundos`.
  - Domina esfuerzos máximos de `~30 s a 2 min`.
  - Produce lactato y H+ asociados a fatiga.
- Aeróbico:
  - Más lento pero prácticamente ilimitado.
  - Usa carbohidratos y grasas.
  - Carbohidratos: combustible limitado para ejercicio intenso de `~1.5 horas`.
  - Grasas: pueden sostener ejercicio durante días.
- Entrenar fat oxidation ahorra glucógeno y reduce producción láctica.

**Páginas clave:** 7–15.

---

### Capítulo 2 — Skeletal Muscles
**Extraído:**
- Fibras musculares:
  - Type I: baja potencia, baja fatigabilidad, aeróbicas, buena oxidación de grasa.
  - Type IIa: potencia moderada, fatigabilidad moderada, aeróbico-glucolíticas, adaptables.
  - Type IIx: alta potencia, alta fatigabilidad, fosfocreatina/glucolíticas.
- Reclutamiento ordenado:
  - Hasta `~40% VO2max`: Type I casi máximamente reclutadas.
  - Desde `~40% VO2max`: aumenta Type IIa.
  - Hacia `~75% VO2max`: Type IIa cerca del máximo y empieza Type IIx.
- Type IIa pueden volverse más aeróbicas o más glucolíticas según entrenamiento/inactividad.
- Adaptaciones neurales:
  - Reclutamiento de unidades motoras.
  - Frecuencia de disparo.
  - Sincronía.
  - Coordinación agonista/antagonista.
  - Son el principal factor inicial de mejora de fuerza/potencia.

**Páginas clave:** 16–22.

---

### Capítulo 3 — Determinants of Performance
**Extraído:**
- Determinantes principales:
  - Aerobic capacity / VO2max.
  - Anaerobic ability.
  - Lactate threshold.
  - Economy/efficiency.
  - Endurance.
  - Maximal strength/power.
- VO2max:
  - Componentes centrales: difusión pulmonar, hemoglobina/blood volume, cardiac output.
  - Componentes periféricos: capilarización, mitocondrias, enzimas aeróbicas.
  - Sedentarios: hombres `35–40 ml/kg/min`, mujeres `27–30`.
  - Élite endurance: hombres `80–90`, mujeres `60–70`.
  - Extracción de O2: `~72%` no entrenados, `~84%` moderados, `~93%` élite.
  - Principiantes: mejora `9–21%` en `4–12 meses`.
  - Declive edad: `4–4.6 ml/kg/min` por década desde mediados de los 30.
- Anaerobic ability:
  - Peak anaerobic power.
  - Anaerobic stamina.
  - Anaerobic capacity / W′.
  - Maximal glycolytic rate / V̇LaMax.
- Lactate threshold:
  - No se entrena directamente.
  - Depende de balance producción/clearance.
  - Factores:
    - Aerobic capacity.
    - Maximal glycolytic rate.
    - Fat utilisation.
    - Lactate transport MCT1/MCT4.
    - Buffering capacity.
  - Buffering puede mejorar `16–25%`.
  - Fractional utilisation:
    - No entrenados: `50–60%`.
    - Moderados: `65–70%`.
    - Élite: `80–90%`.
  - Aumentar V̇LaMax puede reducir umbral si no hay base aeróbica suficiente.
- Efficiency:
  - Rango `18–23%`.
  - 23% vs 18% equivale a `28%` más potencia para el mismo costo metabólico.
  - Cadencia óptima depende de potencia:
    - `100 W`: `~50 rpm`.
    - `330 W`: `~80 rpm`.
  - Cadencia baja recluta más Type IIa.
  - Cadencia muy baja puede restringir flujo sanguíneo.
- Endurance:
  - Glucógeno limita a `~1.5 h` intenso.
  - Fatiga por fuel availability, muscle damage/dysfunction y central fatigue.
  - En 40 km TT: contracción voluntaria reducida `16%`, estimulada eléctricamente `29%`.
  - En eventos largos, central fatigue gana relevancia.
- Strength/power:
  - Fuerza máxima ayuda a endurance y economía.
  - Potencia depende de Type IIx y neural excitability.

**Páginas clave:** 23–45.

---

### Capítulo 4 — Lactate
**Extraído:**
- Lactato no es el causante directo de fatiga; H+ y otros metabolitos están implicados.
- Lactato permite NAD+ y puede usarse como combustible transportable.
- Zonas metabólicas de lactato:
  - Zone 1: predominio fat oxidation, lactato estable o incluso baja.
  - Zone 2: aumento lineal de lactato pero estable para una potencia dada.
  - Zone 3: aumento exponencial, lactato no estable.
- LT1:
  - Punto donde carbohidratos empiezan a contribuir notablemente.
  - Lactato empieza a subir sobre baseline pero sigue estable.
- LT2:
  - Máximo estado estable de lactato.
  - A partir de ahí, acumulación progresiva.
- Perfil de lactato permite inferir:
  - Aerobic capacity.
  - V̇LaMax.
  - Fat oxidation.
  - Lactate transport/clearance.

**Páginas clave:** 46–51.

---

### Capítulo 5 — Physiological Testing
**Extraído:**
- FTP:
  - Definición original: máxima potencia estable en 40 km TT.
  - Definición más usada: máxima potencia estable de 1 hora.
  - Puede errar hasta `~10%` respecto a umbral láctico.
  - FTP puede subir aunque umbral real baje si mejora contribución anaeróbica.
- Test 20 min:
  - Warm-up `30–45 min` suave.
  - Incluir esfuerzo de `5 min` máximo.
  - `10 min` suave.
  - `20 min` máximo estable.
  - No usar ERG en el 20 min.
  - FTP = `95%`.
  - Si anaeróbicamente fuerte: `90–93%`.
  - Fiabilidad aproximada `5–10 W`.
- Test 2×8:
  - Warm-up `25 min`.
  - Ramped effort `4 min`.
  - Dos esfuerzos de `8 min`.
  - Recuperación `4–5 min`.
  - FTP = `90%` del promedio.
  - Puede sobreestimar en anaeróbicamente fuertes.
- Ramp test:
  - Menos preciso.
  - Sobreestima en anaeróbicamente fuertes.
  - Subestima en alta fractional utilisation.
  - FTP suele calcularse como `~75% MAP` con variantes.
- Power profile:
  - Duraciones típicas: `5 s`, `1 min`, `5 min`, `20 min`.
  - Repartir en al menos `3 días`.
  - `5 s` y `1 min` pueden ir juntos con `20–30 min` fácil entre ellos.
  - Se requieren `~3 intentos` para fiabilidad, especialmente 1 min.
  - 5 s en indoor puede subestimar.
- Critical Power:
  - CP aproximadamente MLSS, algo mayor que FTP.
  - CP sostenible ~`30 min`.
  - W′ indica capacidad anaeróbica.
  - Normas W′:
    - Hombres endurance moderados: `9–15 kJ`.
    - Mujeres endurance moderadas: `6–10 kJ`.
    - Hombres punchy: `15–18 kJ`.
    - Mujeres punchy: `11–13 kJ`.
    - Sprinters: `>25–30 kJ`.
  - Tests recomendados: `3–4` esfuerzos.
  - Duraciones: `3, 5, 12 min`, opcional `20 min`.
  - Rango válido: `3–20 min` por test; predicción `3–30 min`.
  - Time-to-exhaustion puede dar CP `~7%` menor y W′ `~12%` mayor.
  - Usar `~94% CP` para estimar FTP/zonas.
- HRmax test:
  - Warm-up `20–30 min`.
  - Esfuerzo de `1–2 min` a `~110% FTP`.
  - `10 min` a `7–8/10` o `~110% FTP`.
  - `1 min` máximo + sprint final `20–30 s`.
  - HRmax no mejora con entrenamiento.
  - Retest cada `1–2 años`.
- Threshold HR:
  - Warm-up `20–30 min`.
  - `30 min` all-out estable.
  - HR promedio de los últimos `20 min` = threshold HR.
  - Promedio: `~85% Max HR`.
  - >85%: alta fractional utilisation.
  - <85%: baja fractional utilisation.
  - Retest cada `8–12 semanas`.
- Lactate testing:
  - Step test: etapas `≥4 min`, ideal más largas.
  - Lactato tarda `2–5 min` en estabilizarse.
  - Evitar cortes fijos 2/4 mmol si no hay control.
  - MLSS abreviado: etapas de `10 min`; LT2 = mayor etapa donde lactato no sube `>1 mmol/L`.
  - V̇LaMax:
    - Esfuerzo `20–30 s` máximo.
    - Normas: `0.2–1.0 mmol/L/s`.
    - Endurance: `0.3–0.5`.
    - Sprinters: `≥0.7`.
    - ⚠️ Cálculo exacto ambiguo.
  - Lactate clearance:
    - Muestra a `~20 min` post esfuerzo.
    - Valores observados: `0.1–0.5 mmol/L/min`.
    - Mediana: `~0.3`.
- Body composition:
  - BIA estándar:
    - Mañana.
    - Antes de comer/beber.
    - Después de ir al baño.
    - Ropa mínima.
    - Piel seca.
    - Promediar varios días.
  - Límites mínimos recomendados:
    - Hombres: `5%`.
    - Mujeres: `12%`.
- Tips de testing:
  - Nutrición estandarizada `~24 h`, especialmente `3–4 h` antes.
  - Cafeína consistente.
  - Warm-up `20–30 min` con activación.
  - Local/equipo/método consistentes.
  - Testear tras recovery week/day.
  - No testar con estrés/fatiga anormal.
  - Testing formal cada `8–12 semanas` o transición de fase.

**Páginas clave:** 52–87.

---

### Capítulo 6 — Fundamentals of Fitness Development
**Extraído:**
- Modelo fitness-fatiga:
  - Estrés = intensidad × duración.
  - Fatiga aguda reduce performance.
  - Recuperación produce supercompensación.
  - Carga demasiado baja: estancamiento/detraining.
  - Carga demasiado alta: non-functional overreaching/overtraining.
- Functional overreaching:
  - Caída breve de rendimiento.
  - Puede generar pico posterior si se recupera.
- Overtraining:
  - Deterioro crónico.
  - Puede requerir meses/años.
- Recuperación es esencial.
- Form peaks after fitness peaks.
- Tapering busca peak form aceptando pequeña pérdida de fitness.
- Tipos de sesiones:
  - Continuas.
  - Intervalos.
  - No estructuradas.
- En intervalos importan:
  - Intensidad.
  - Duración del trabajo.
  - Volumen total.
  - Duración de recuperación.
- Manipular recuperación puede cambiar objetivo:
  - Neuromuscular.
  - VO2max.
  - Lactate transport/buffering.

**Páginas clave:** 88–94.

---

## Parte 2: High-Level Planning

### Capítulo 7 — Step-By-Step Planning Process
**Extraído:**
- Proceso:
  1. Assessment & goal setting.
  2. Planning.
  3. Monitoring.
- Objetivos SMART.
- Evitar metas simultáneas fisiológicamente opuestas.
- Mapear demandas del evento:
  - Duración.
  - Intensidad media.
  - Naturaleza steady/stochastic.
  - Contribución aeróbica/anaeróbica.
  - Skills.
  - Fueling.
  - Perfil topográfico.
- Entender atleta:
  - Perfil fisiológico.
  - Training history.
  - Trabajo/familia.
  - Nutrición.
  - Sueño.
  - Psicología.
  - Fuerza/movilidad.
  - Salud.
- SWOT.
- Refinar objetivos.
- Si quedan `6 semanas`:
  - Priorizar adaptaciones rápidas:
    - Neuromuscular.
    - V̇LaMax.
    - Lactate shuttling.
    - Skills.
  - Aeróbico requiere `≥6 semanas` para mejoras pequeñas.
- Planificar idealmente `≥6 meses`.
- Jerarquía:
  - Macrocycle.
  - Phases.
  - Mesocycles `2–10 semanas`.
  - Microcycles.
- Phase potentiation: cada fase prepara la siguiente.
- Testing formal cada `8–12 semanas` o transiciones.
- Monitoreo:
  - Cumplimiento objetivo de sesión.
  - Subjetivo.
  - Marcadores fisiológicos.
  - Testing.
  - Revisión SWOT.

**Páginas clave:** 96–113.

---

### Capítulo 8 — Periodisation
**Extraído:**
- Linear periodisation:
  - General preparation.
  - Specific preparation.
  - Competition.
  - Transition.
- Críticas al modelo lineal clásico:
  - Difícil más de 3 picos/año.
  - Entrenar todo a la vez no es óptimo.
  - No eliminar high intensity demasiado tiempo.
  - No reducir volumen excesivamente antes del evento.
  - No one-size-fits-all.
- Reverse periodisation:
  - Raramente recomendable.
  - Anaerobic fitness decae en `1–3 semanas`.
  - En Ironman, reverse fue peor modelo.
- Block periodisation:
  - Bloques cortos con objetivos específicos.
  - Basado en training residuals.
- Training residuals aproximados:
  - Structural aerobic: `1–2 meses`.
  - Enzymatic aerobic: `2–10 semanas`.
  - Lactate tolerance: `2–10 semanas`.
  - Peak anaerobic power: `2–4 semanas`.
  - Neuromuscular: `días–2 semanas`.
  - Maximal strength: `1–2 meses`.
- Ejemplos de bloque:
  - 1 semana con `5 interval sessions` + 3 semanas aeróbicas con `1 interval`.
- Élite:
  - Volumen específico piramidal.
  - Intensidad de intervalos puede aumentar hacia competencia, pero individual.
- Mesocycle load:
  - 3:1 puede dar `~3–5%` mejora modelada vs flat.
  - Time-crunched: flat load suele ser mejor.
  - Recovery on demand: recovery week al menos cada `6–12 semanas`.
- Nuestra aproximación:
  - General prep:
    - Aeróbico.
    - Endurance/economía/fuerza según caso.
    - Cross-training y fuerza si es invierno/retorno.
    - Neuromuscular ocasional: `1 vez/4 semanas`.
    - Anaerobic ocasional para no perder V̇LaMax.
  - Specific prep:
    - Fine-tuning V̇LaMax vs VO2max.
    - V̇LaMax training en últimos `2–6 semanas` si necesario.
  - Competition:
    - Taper `1–2 semanas` si evento único.
    - Si serie de eventos, mantener/reconstruir fitness entre carreras.
  - Transition:
    - `1 semana–1 mes`.
    - Máximo `1 semana` si siguiente evento prioritario está cerca.
  - Volumen:
    - Pyramidal o flat según tiempo disponible.
    - 3:1 para atletas con tiempo.
    - Flat/recovery on demand para time-crunched.

**Páginas clave:** 114–134.

---

### Capítulo 9 — Case Study
**Extraído:**
- Ejemplo de planificación de `38 semanas`:
  - `28 semanas` general preparation.
  - `8 semanas` specific preparation.
  - `2 semanas` taper.
- Mesociclos:
  1. Endurance/fat oxidation + strength.
  2. Lactate tolerance/transport.
  3. VO2max + strength maintenance.
  4. Specific fractional utilisation/skills.
- Datos de atleta:
  - VO2max `59 ml/kg/min`.
  - Threshold `3.7 W/kg`.
  - Fractional utilisation `74%`.
  - V̇LaMax `0.7 mmol/L/s`.
  - Lactate clearance `0.5 mmol/L/min`.
  - Zone3C sostenible `~1.5 h`.
  - Necesita fueling frecuente en rides largos.
  - Skills técnicos buenos.
  - Debilidades: fat oxidation/endurance, V̇LaMax alta, clearance baja.
  - Amenaza: pobre conocimiento nutricional.
- Uso: ejemplo de cómo priorizar limiters y estructurar fases.

**Páginas clave:** 135–139.

---

## Parte 3: Micro-Level Planning

### Capítulo 10 — Training Zones
**Extraído:**
- Sistemas recomendados:
  - Coggan 7 zonas adaptadas.
  - Modelo de 3 zonas basado en LT1/LT2.
- Zonas Coggan:
  - Zone1: active recovery.
  - Zone2: aerobic/fat oxidation, mayor volumen.
  - Zone3: intensive aerobic, usar con moderación.
  - Zone4: threshold/lactate transport/tolerance.
  - Zone5: VO2max.
  - Zone6: anaerobic power/stamina.
  - Zone7: neuromuscular.
- Zonas no son exclusivas; hay continuum.
- Power primary para control; HR useful para:
  - VO2max intervals: `>90–95% Max HR`.
  - Off-road.
  - HR drift.
- Modelo 3 zonas:
  - Low: hasta LT1.
  - Medium: LT1 a LT2.
  - High: sobre LT2.
  - Talk test:
    - Low: párrafo completo.
    - Medium: frases entrecortadas.
    - High: palabras sueltas.
  - LT1 ≈ `65–70% FTP` o top Zone2C.
  - LT2 ≈ Zone4C.
- Individualización:
  - Self-paced efforts.
  - Perfil fisiológico.
  - HR en VO2max.
  - RPE/respiración.
- RPE orientativos:
  - Recovery: `1–2`.
  - Extensive aerobic: `3–4`.
  - Intensive aerobic: `5–6`.
  - Threshold: `7`.
  - VO2max: `8`.
  - Anaerobic: `9`.
  - Neuromuscular: `10`.

**Páginas clave:** 141–154.

---

### Capítulo 11 — Session Planning
**Extraído:** todas las plantillas de sesión que se implementan en la Recomendación 2.

**Páginas clave:** 155–206.

---

### Capítulo 12 — Training Intensity Distribution
**Extraído:**
- Clasificación por sessional goal, no solo time-in-zone.
- Low = Coggan 1–2; Medium = 3–4; High = 5+.
- RPE de sesión:
  - Low ≤4.
  - Medium 5–6.
  - High ≥7.
- Modelos:
  - Threshold: ≥20% medium.
  - Polarised: ~80% low, ≤5% medium, 15–20% high.
  - Pyramidal: ~80% low, más medium que high.
- Recomendación:
  - `75–80%` sesiones low.
  - `5–10%` medium.
  - `15–20%` high.
- Time-crunched:
  - Mantener long low ride.
  - Calidad en intervalos.
  - Indoor puede mejorar calidad.
  - Recuperación crucial.
- No polarizar cada sesión individual.
- Evaluar distribución por mesociclo/semana.

**Páginas clave:** 207–220.

---

### Capítulo 13 — Training Metrics
**Extraído:**
- Volumen en horas.
- IF = Normalized Power / FTP.
- TSS:
  - `TSS = IF² × duración_horas × 100`.
  - `100 TSS` ≈ 1 h a FTP.
  - Referencias:
    - Recovery: `~30 TSS/h`.
    - Zone2: `40–50 TSS/h`.
    - Interval session 1.5 h: `80–100 TSS`.
- CTL:
  - Ventana típica `6 semanas`.
- ATL:
  - Ventana típica `7 días`.
- TSB = CTL - ATL.
- Interpretación:
  - `> +15`: posible detraining.
  - `0 a +15`: race/form, posible estancamiento.
  - `-20 a 0`: mejora fitness.
  - `< -20`: riesgo si sostenido.
- Limitaciones:
  - TSS no distingue tipo de fatiga.
  - Depende de FTP correcto.
  - No captura estrés/sueño/nutrición.
  - Requiere limpieza de datos.
- Consejo:
  - Weekly TSS upward a largo plazo, no cada semana.
  - Mantener TSB `-20 a 0` en semanas normales.
  - Recovery week si TSB bajo o fatiga.
  - Evitar múltiples semanas muy negativas.
  - No subir carga vía intensidad excesiva.

**Páginas clave:** 221–230.

---

### Capítulo 14 — Microcycle Structure
**Extraído:**
- Principios:
  - Long low ride cuando se pueda.
  - Recuperado antes de high intensity.
  - `1–2` sesiones medium/high por semana.
  - `≥2` recovery days/semana.
  - `3` recovery days para beginners/time-crunched/injury-prone.
- Ejemplos:
  - 5–10 h/semana.
  - 6–12 h/semana.
  - 10–16 h/semana.
  - Shift work 10 días.
- Recovery week:
  - Reducción `20–40%`.
  - Bajar medium/high y volumen.
  - Objetivo: TSB hacia rango seguro.
- Block overload:
  - Semana con `4–5` sesiones hard + 3 semanas aeróbicas con 1 hard.
  - Solo atletas entrenados y no propensos.
  - Alternativa segura: bloque de `2–3 días` entre carreras.
- Readiness:
  - Interval day: TSB no menor que `~-5`.
  - Zone2 endurance ride: TSB no menor que `~-20`.
  - Subjetivo puede postponer intervalos.

**Páginas clave:** 231–239.

---

### Capítulo 15 — Strength Training
**Extraído:**
- Beneficios:
  - Endurance.
  - Economía.
  - Anaerobic capacity.
  - Max power.
  - Injury prevention.
- Beneficios marginales frente a bici; suplementario.
- Tipos recomendados:
  - Moderate/heavy load `<15RM`, idealmente `<8RM`.
  - `2–4 sets`.
  - Descanso `2–6 min`.
  - Explosive con precaución porque puede subir V̇LaMax.
  - High-rep explosive si no hay pesas o técnica limitada.
  - Core strength.
- Sesión tipo:
  - Warm-up `5–10 min`.
  - Core `~20 min`, `3–4 ejercicios`, `3 sets`.
  - Pesos: `2–3 ejercicios`.
  - Ejercicios: half-squat, deadlift, lunge/split squat.
  - Evitar fallo; dejar `1–2 reps` en reserva.
- Frecuencia:
  - Desarrollo: `2–3 sesiones/semana`.
  - Time-crunched: `2`.
  - Mantenimiento: `1 sesión/semana`, `1–2 sets`.
- Periodización:
  - `12–16 semanas`.
  - Empezar `10–15 reps`.
  - Progresar a `4–6 reps`.
  - Comenzar `3–4 meses` antes de competencia.
- Integración:
  - No fuerza dura en recovery day.
  - Puede hacerse antes de endurance ride para RCA opcional.
- TSS aproximado:
  - Core: `30–40 TSS/h`.
  - Weights: `60–80 TSS/h`.

**Páginas clave:** 240–250.

---

### Capítulo 16 — Race Preparation
**Extraído:**
- Tapering high priority:
  - Duración `8–14 días`.
  - Time-crunched: `7–8 días`.
  - Reducción volumen `21–40%`.
  - Gradual:
    - Semana 1: `10–20%`.
    - Semana 2: `20–40%`.
  - Mantener frecuencia.
  - Mantener high intensity.
  - Eliminar primero no-specific.
  - Luego reducir low/medium.
- Overload before taper:
  - Puede ayudar pero riesgo.
  - En estudio, `40%` enfermos en overload.
  - Practicar en evento secundario.
- TSB objetivo:
  - General: `0–10`.
  - ≤1.5 h: `0–5`.
  - Larga: `5–10`.
  - Ultra: `10–15`.
- Serie de eventos prioritarios:
  - Taper más corto para primera carrera: `7–9 días`.
  - Entre carreras: recovery + bloque de 2 intervalos + openers.
- Lower priority:
  - Taper `2–4 días`.
  - Opción de bloque hard inicio de semana.
- 36–48 h antes:
  - Openers día previo.
  - Warm-up según evento.
  - Nutrición por duración.
- Nutrición:
  - <1 h:
    - No carb load.
    - Beber según sed.
    - Evitar carbs `10–60 min` antes.
    - Durante sin requerimiento específico.
  - 1–1.5 h:
    - No carb load.
    - Comida previa `1–4 g/kg`, `1–4 h` antes.
    - Durante `30–60 g/h`.
  - 1.5–2.5 h:
    - Carb load `10–12 g/kg/día` durante `36–48 h`.
    - Durante `30–60 g/h`.
  - >2.5 h:
    - Carb load `10–12 g/kg/día`.
    - Durante `60–90 g/h`.
    - Multiple transportable carbs si >60 g/h.
- Start line:
  - Evitar carbs `10–60 min` antes.
  - Pequeña dosis <10 min antes puede ayudar por efecto central.
- Cafeína:
  - `2–6 mg/kg`.
  - Pico `~45 min`.
  - Probar antes.
- Post-event recovery:
  - Corto: `<24 h`.
  - 3–4 h+: hasta `1 semana`.
  - Ultra: varias semanas.
  - Low intensity Zone1–2 ayuda.

**Páginas clave:** 251–265.

---

## Parte 4: Monitoring Training

### Capítulo 17 — Monitoring Training
**Extraído:**
- Monitorear:
  1. Session quality.
  2. Fatigue.
  3. Fitness progression.
- Session quality:
  - Duración planificada vs completada.
  - Time in zone.
  - Cumplimiento de potencia/HR.
  - TSS planificado vs real.
  - Subjetivo.
- Fatiga subjetiva:
  - Low mood.
  - Low motivation.
  - Muscle soreness alta.
  - Dificultad para producir potencia/HR habitual.
  - Si varios síntomas > pocos días: reducir carga.
- HR:
  - HR suprimida/elevada para misma potencia.
  - `±10 bpm` fuera de rango normal durante varios días = warning.
  - Respuesta de HR lenta/rápida puede indicar fatiga.
  - HRV no recomendada por ruido.
- LSCT:
  - Stage 1: `6 min` a `60% Max HR`.
  - Stage 2: `6 min` a `80% Max HR`.
  - Stage 3: `3 min` a `90% Max HR`.
  - Stage 4: `1.5 min` parado para HR recovery.
  - Registrar RPE.
  - Analizar:
    - Power:HR en últimos `5 min` de stages.
    - HRR = HR final stage 3 - HR a 1 min de stage 4.
    - RPE stage 2 +1 punto: evitar intensidad.
    - T90 >1 min o no alcanzar 90% HRmax: evitar intensidad.
  - Baseline: `3–4 semanas`.
  - Estandarizar:
    - Sin cafeína `3 h` antes.
    - Comida `2 h` antes.
    - Mismo momento/ciclo.
    - Indoor recomendado.
    - No auto-pause.
- Wearables:
  - Evidencia pobre.
  - No recomendados como fuente principal.
- Fitness progression:
  - Formal testing cada `10–16 semanas`.
  - LSCT power:HR/HRR trends.
  - Power:HR ratio general es crudo.
  - HR drift no es buen indicador de endurance.
  - Mejores marcadores subjetivos:
    - Puedes rodar más tiempo cómodo.
    - Necesitas menos fueling.
    - Puedes mantener más potencia antes de quedar out of breath.
    - Mejora en group rides/races.

**Páginas clave:** 267–279.

---

## Parte 5 — Wrapping Up
**Extraído:**
- Consistencia es lo más importante.
- Progresión gradual.
- `~80%` de sesiones low/Zone2.
- En Zone2 rides, al menos `50%` del tiempo en Zone2, ideal más.
- Variar duración e intensidad.
- Días claros de entrenamiento/recuperación.
- Identificar strengths/limiters.
- Escuchar cuerpo.
- No obsesionarse con detalles mínimos.
- No hay magic bullet.
- Buscar ayuda si es necesario.

**Páginas clave:** 280–282.

---

# 2) Ejecución de las 5 recomendaciones

A continuación entrego las 5 recomendaciones como **especificaciones funcionales listas para implementación**, sin código.

---

## Recomendación 1 — Módulo `rules/cycling_training_load`

### Propósito
Gobernar carga semanal, distribución de intensidad, recuperación, readiness y límites seguros de entrenamiento.

### Entidades sugeridas
- `CyclingLoadMetrics`
  - `tss`
  - `if`
  - `ctl`
  - `atl`
  - `tsb`
  - `weeklyHours`
  - `sessionalIntensityClass`
- `CyclingReadinessInput`
  - `subjectiveFatigue`
  - `mood`
  - `motivation`
  - `muscleSoreness`
  - `sleepQuality`
  - `lifeStress`
  - `hrDeviation`
  - `lsctFlags`
- `MicrocyclePolicy`
  - `cycleLengthDays`
  - `recoveryDaysPerCycle`
  - `mediumHighSessionsPerCycle`
  - `longRidePlacement`
- `RecoveryPolicy`
  - `recoveryWeekReductionPct`
  - `recoveryWeekFrequency`
  - `tsbSafeRange`

---

### Parámetros canónicos

| Parámetro | Valor | Fuente |
|---|---:|---|
| TSS formula | `IF² × hours × 100` | Cap. 13, p. 223 |
| TSS recovery ride | `~30 TSS/h` | Cap. 13, p. 223 |
| TSS Zone2 ride | `40–50 TSS/h` | Cap. 13, p. 223 |
| TSS interval session 1.5 h | `80–100 TSS` total | Cap. 13, p. 223 |
| CTL window | `6 semanas` | Cap. 13, p. 224 |
| ATL window | `7 días` | Cap. 13, p. 224 |
| TSB safe normal | `-20 a 0` | Cap. 13, p. 226-228 |
| TSB detraining risk | `> +15` sostenido | Cap. 13, p. 225 |
| TSB overtraining risk | `< -20` sostenido | Cap. 13, p. 226 |
| Recovery week reduction | `20–40%` | Cap. 13, p. 229; Cap. 14, p. 236 |
| Recovery on demand | al menos cada `6–12 semanas` en flat load | Cap. 8, p. 132 |
| Low sessions | `75–80%` | Cap. 12, pp. 213-220 |
| Medium sessions | `5–10%` | Cap. 12, pp. 213-220 |
| High sessions | `15–20%` | Cap. 12, pp. 213-220 |
| Recovery days | `≥2/semana`; `3` si beginner/time-crunched/injury-prone | Cap. 14, p. 233 |
| Medium/high sessions | `1–2/semana` | Cap. 14, p. 233 |
| Interval readiness TSB | `≥ -5` | Cap. 14, p. 238 |
| Endurance readiness TSB | `≥ -20` | Cap. 14, p. 239 |

---

### Reglas funcionales

#### `CTL-ATL-TSB-COMPUTE`
- Calcula CTL, ATL y TSB a partir de TSS diario.
- CTL ventana 42 días.
- ATL ventana 7 días.
- TSB = CTL - ATL.
- No usar como verdad absoluta.
- **Fuente:** Cap. 13, pp. 224–226.

#### `TSB-SAFE-RANGE`
- Si TSB semanal se mantiene entre `-20` y `0`, carga probablemente productiva.
- Si TSB `< -20` varios días/semanas, disparar recuperación.
- Si TSB `> +15` prolongado, avisar posible detraining.
- **Fuente:** Cap. 13, pp. 225–226.

#### `WEEKLY-TSS-TRAJECTORY`
- La carga semanal debe tener tendencia ascendente en meses/años.
- No exigir que cada semana supere la anterior.
- Evitar picos bruscos de intensidad.
- **Fuente:** Cap. 13, pp. 227–229.

#### `RECOVERY-WEEK-TRIGGER`
Disparar recovery week si:
- TSB `< -20`.
- Varios marcadores subjetivos de fatiga durante días.
- HR anormal `±10 bpm` durante días.
- Flat-load athlete supera `6–12 semanas` sin descarga.
Acción:
- Reducir carga `20–40%`.
- Reducir medium/high y volumen.
- Mantener frecuencia con sesiones fáciles.
- **Fuente:** Cap. 13, p. 229; Cap. 14, p. 236; Cap. 8, p. 132.

#### `SESSIONAL-INTENSITY-CLASSIFICATION`
Clasificar cada sesión por objetivo principal:
- Low:
  - Mayoría en Z1–Z2.
  - RPE <=4.
- Medium:
  - Mayoría en Z3–Z4.
  - RPE 5–6.
- High:
  - Mayoría en Z5+.
  - RPE >=7.
No usar solo time-in-zone para planificación.
- **Fuente:** Cap. 12, pp. 207–208.

#### `INTENSITY-DISTRIBUTION-MESOCYCLE`
- Calcular distribución por mesociclo, no por sesión individual.
- Objetivo:
  - Low `75–80%`.
  - Medium `5–10%`.
  - High `15–20%`.
- Ajustar según fase:
  - Más polarised si se busca anaerobic power.
  - Más pyramidal si se busca endurance/time-crunched.
- **Fuente:** Cap. 12, pp. 209–215.

#### `MICROCYCLE-RECOVERY-DAYS`
- Microciclo semanal estándar:
  - Mínimo 2 recovery days.
  - 3 si:
    - Beginner.
    - Time-crunched.
    - Injury-prone.
- Recovery day puede ser off o recovery ride corto.
- **Fuente:** Cap. 14, p. 233.

#### `MEDIUM-HIGH-SESSION-COUNT`
- Semanal: `1–2` sesiones medium/high.
- Para microciclos no semanales, escalar proporcionalmente.
- Equivale aproximadamente a `20–25%` de sesiones.
- **Fuente:** Cap. 14, p. 233.

#### `HIGH-INTENSITY-RECOVERY-GATE`
- Antes de sesión high o threshold exigente:
  - Al menos 1 recovery day previo.
- Excepción:
  - Block overload planificado.
- **Fuente:** Cap. 14, pp. 232–233.

#### `INTERVAL-READINESS-GATE`
Condiciones para intervalos:
- TSB >= `-5`.
- Subjetivo aceptable.
- HR response normal.
- Fueling adecuado.
Si falla:
- Postponer o convertir en sesión fácil.
- **Fuente:** Cap. 14, pp. 238–239; Cap. 11, pp. 172, 176, 181, 184.

#### `ENDURANCE-RIDE-READINESS-GATE`
- Para Zone2 endurance ride:
  - TSB no menor que `-20`.
- Si HR drift o fatiga alta:
  - Bajar intensidad para mantener HR dentro de objetivo.
- **Fuente:** Cap. 14, p. 239; Cap. 10, p. 147.

#### `LONG-RIDE-PRIORITY`
- Time-crunched:
  - Priorizar long low ride cuando haya tiempo.
  - Puede sacrificar sesión medium/high si permite meter long ride.
- Athletes flexibles:
  - Long ride puede ir día después de intervalos.
- **Fuente:** Cap. 14, p. 232.

#### `BLOCK-OVERLOAD-CAUTION`
Permitir block overload solo si:
- Atleta entrenado.
- Sin historia reciente de enfermedad/lesión.
- Buena recuperación.
Opciones:
- Semana con `4–5` sesiones hard seguida de 3 semanas aeróbicas con 1 hard.
- Bloque de `2–3 días` entre carreras.
- **Fuente:** Cap. 14, pp. 237–238; Cap. 16, pp. 255–258.

#### `DATA-QUALITY-GUARD`
Antes de usar TSS/CTL/TSB:
- Verificar FTP actual.
- Eliminar datos erróneos de potencia/HR.
- Eliminar sesiones duplicadas.
- Revisar zonas correctas.
- **Fuente:** Cap. 13, p. 227.

#### `EXTERNAL-STRESS-ADJUSTMENT`
Si hay:
- Sueño pobre.
- Estrés alto.
- Enfermedad.
- Nutrición insuficiente.
Acción:
- Reducir carga.
- No interpretar mala sesión solo como falta de fitness.
- **Fuente:** Cap. 7, p. 101; Cap. 13, pp. 227–229; Cap. 17, pp. 268–269.

---

## Recomendación 2 — Módulo `templates/cycling_sessions`

### Propósito
Crear plantillas canónicas de sesiones con objetivos, intensidades, estructuras, contraindicaciones y controles de calidad.

### Reglas comunes a todas las sesiones intervaladas
- Warm-up mínimo:
  - `10 min` fácil con esfuerzos cortos de activación para intervalos.
  - `30 min` para anaerobic power/neuromuscular.
- Cool-down:
  - `10 min` para intervalos estándar.
  - `15 min` para anaerobic/neuromuscular.
- Recuperaciones:
  - Idealmente Zone1C activo.
  - Si se baja una cuesta, se puede coastear y alargar ligeramente la recuperación.
- Requisitos:
  - Freshness.
  - Fueling adecuado.
  - Hidratación.
  - No realizar si fatiga evidente impide cumplir objetivos.
- **Fuente:** Cap. 11, pp. 170–205.

---

### 2.1 Sesiones continuas / aeróbicas

#### `recovery-ride`
- **Objetivo:** recuperar entre sesiones duras sin añadir estrés.
- **Duración:** `20–90 min`.
- **Intensidad:** mayormente Zone1C o Zone2C bajo.
- **Valores:** `50–60% FTP`, `<80% threshold HR`, `<65% Max HR`.
- **TSS objetivo:** `<=40`.
- **RPE:** `1–2`.
- **Uso:** día de recuperación.
- **Errores:**
  - Convertirlo en tempo.
  - Alargarlo demasiado.
  - Añadir sprints.
- **Notas:** a veces día off completo es mejor mentalmente o para prevenir overuse.
- **Fuente:** Cap. 11, pp. 155–157.

#### `zone2-aerobic-development-ride`
- **Objetivo:** base aeróbica, fat oxidation, endurance, economía tardía.
- **Duración:** `>=1.5 h`.
- **Intensidad:** Zone2C.
- **Valores:** `55–75% FTP`, `68–83% threshold HR`, `60–70% Max HR`.
- **Criterio de calidad:**
  - Al menos `50%` del tiempo en Zone2; ideal mucho más.
  - Evitar surges >`20 s` sobre umbral.
- **Terreno:** llano/rolling; usar gears fáciles si hay subidas.
- **Errores:**
  - Convertir en Zone3.
  - Mirar solo HR y ocultar surges de potencia.
  - Aumentar intensidad pensando que es mejor.
- **Variantes:**
  - Muy largo en Zone1C puede ser válido.
  - Añadir sprints <20 s en bloque condensado sin comprometer objetivo.
  - Fasted o low-cadence Z3 como complementos.
- **Fuente:** Cap. 11, pp. 158–161; Parte 5, pp. 280–281.

#### `low-cadence-zone3`
- **Objetivo:** muscular endurance, reclutamiento Type IIa, fuerza-resistencia, economía tardía.
- **Duración total baja cadencia:** `20–60 min`.
- **Cadencia:** `55–75 rpm`.
- **Intensidad:** Zone3C.
- **Valores:** `80–95% FTP`, `84–94% threshold HR`, `70–80% Max HR`.
- **Frecuencia:** `1–3 veces/semana`, salvo ultra.
- **Colocación:**
  - Dentro de ride largo.
  - Al final de ride largo para reclutar fibras con Type I fatigadas.
- **Errores:**
  - Usar demasiado.
  - Llevar a sweet spot/top Z3 sin propósito.
  - Ignorar molestias.
- **Progresión:** hacia top Zone3 `90–95% FTP` si se tolera.
- **Fuente:** Cap. 11, pp. 161–165.

#### `restricted-carbohydrate-availability-ride`
- **Objetivo:** mejorar fat oxidation, señalización aeróbica y posiblemente reducir V̇LaMax.
- **Tipo:** modifier sobre Zone2 ride o low-cadence Z3.
- **Métodos:**
  - Overnight fast.
  - Interval session previa + restricción de carbs después.
  - Dos sesiones/día con baja reposición entre ellas.
- **Restricciones:**
  - Solo intensidades `<=Zone3C`.
  - Máximo `2–3 sesiones/semana`.
  - Empezar con `30–60 min`.
  - No exceder `3 h`.
  - No en recovery rides.
  - No si enfermedad.
- **Ayudas:**
  - Cafeína `30–60 min` antes.
  - Si ride largo, comenzar fasted y comer tras `30–90 min`.
- **Fuente:** Cap. 11, pp. 165–170.

---

### 2.2 Sesiones de intervalo

#### `classic-vo2max-intervals`
- **Objetivo:** aerobic capacity, cardiac output, tiempo cerca de VO2max.
- **Estructura:** `4–8 × 3–6 min`.
- **Intensidad:** `110–120% FTP`.
- **Work:rest:** `1:1` o `2:1`.
- **HR objetivo:** `>90% Max HR` después de primeros intervalos.
- **RPE:** `8/10`.
- **Ajustes:**
  - Alta fractional utilisation: quizá menor %FTP.
  - Anaeróbicamente fuerte: quizá mayor %FTP o más control de lactato.
- **Errores:**
  - Empezar demasiado fuerte.
  - Hacer sesión con fatiga.
  - Recuperaciones demasiado largas que impidan HR alta.
- **Fuente:** Cap. 11, pp. 170–172; Cap. 10, pp. 151–152.

#### `supra-threshold-intervals`
- **Objetivo:** VO2max vía VO2 slow component, lactate clearance/transport.
- **Estructura:** `3–5 × 6–8 min`.
- **Intensidad:** `103–108% FTP`.
- **Work:rest:** `2:1` o algo mayor.
- **HR objetivo:** superar threshold HR y ojalá `>=90% Max HR` en intervalos posteriores.
- **RPE:** `~7.5/10`.
- **Ventaja:** más fácil que classic VO2max y puede acumular más tiempo HR alta.
- **Fuente:** Cap. 11, pp. 173–176.

#### `hard-start-vo2max-intervals`
- **Objetivo:** elevar HR/O2 rápidamente y acumular tiempo VO2max con menor potencia media.
- **Estructura:** intervalos `3–8 min`.
- **Inicio:** `20–30 s` a `120–130% FTP`.
- **Resto del intervalo:** `100–108% FTP` según duración.
- **Work:rest:** igual que classic/supra.
- **HR objetivo:** `>=90% Max HR` hacia 2º/3º intervalo.
- **Ajuste:** reducir potencia tras hard start respecto a intervalo constante.
- **Variante:** intervalos largos con surges internos, p. ej. base `~100% FTP` + esfuerzos `30 s` a `125–130%`.
- **Fuente:** Cap. 11, pp. 176–178.

#### `billat-hr-led-vo2max-intervals`
- **Objetivo:** maximizar tiempo cerca de VO2max con mínima potencia necesaria.
- **Estructura:** `2–5 × 6–10 min`.
- **Inicio:** `1.5–2 min` a `120–125% FTP` hasta HR `>90–95% Max HR`.
- **Resto:** ajustar potencia para mantener HR `90–95% Max HR`.
- **Work:rest:** `2:1` o mayor.
- **Clave:** tras alcanzar HR objetivo, potencia pasa a segundo plano.
- **Interpretación:**
  - Si HR no sube y Max HR está bien: posible baja fractional utilisation o fatiga.
- **Fuente:** Cap. 11, pp. 179–182.

#### `microburst-vo2max-intervals`
- **Objetivo:** aerobic capacity, cardiac output, lactate stress, tiempo HR alta.
- **Estructura:** `2–4 bloques`.
- **Esfuerzos:** `15–45 s`.
- **Work:rest dentro del bloque:** `1:1` a `2:1`; `2:1` suele funcionar mejor.
- **Duración del bloque:** `9–15 min`.
- **Recuperación entre bloques:** `3–5 min`.
- **Intensidad:** aproximadamente Zone6C, p. ej. `120–130% FTP`.
- **HR objetivo:** drift a `90–95% Max HR`.
- **Requisito:** power meter.
- **Advertencia:** también entrena peak anaerobic power.
- **Fuente:** Cap. 11, pp. 182–184.

#### `lactate-threshold-intervals`
- **Objetivo:** tolerancia láctica, endurance a umbral, preparación race-specific.
- **Estructura:** intervalos `6–30 min`.
- **Intensidad:** `98–103% FTP`, `95–105% threshold HR`, `80–90% Max HR`.
- **Volumen total:** `20–45 min` típico, hasta `1 h` en casos muy avanzados.
- **Work:rest:** `~2:1` o algo menor.
- **Uso:** eventos de `40 min–2 h` cerca de threshold.
- **Advertencia:** no es la sesión más eficaz para subir umbral real.
- **Mejores alternativas para threshold power:**
  - Zone2 rides.
  - VO2max intervals.
  - Over/unders.
- **Fuente:** Cap. 11, pp. 185–187.

#### `over-unders-lactate-clearance`
- **Objetivo:** lactate clearance, transport, fractional utilisation, anaerobic stamina.
- **Estructura:** `2–4 bloques` de `8–20 min`.
- **Over:** Zone5C/6C o `103–125% FTP` según formato.
- **Under:** top Zone3C, `80–90% FTP`.
- **Recuperación entre bloques:** `3–5 min`.
- **Sensación objetivo:**
  - Over: lactato sube.
  - Under: lactato baja antes del siguiente over.
- **Ejemplos:**
  - `1 min over` + `1.5 min under`.
  - `45 s over` + `2:15 under`.
- **Fuente:** Cap. 11, pp. 187–190.

#### `anaerobic-stamina-intervals`
- **Objetivo:** lactate transport, buffering, anaerobic stamina, neural fast-twitch.
- **Zonas:** Zone5C/6C.
- **Work:rest:**
  - Zone6C: `1:1` a `1:3`.
  - Zone5C: `<=2:1`.
- **Ejemplos:**
  - `2 bloques × 5 × 60 s` a `130–140% FTP`, rec `2 min`, `10 min` entre bloques.
  - `20–30 × 1 min` a `105–110% FTP`, rec `30 s`.
  - `6–8 × 4 min` a `102–105% FTP`, rec `1 min`.
- **Clave:** mantener potencia consistente.
- **Fuente:** Cap. 11, pp. 191–193.

#### `anaerobic-power-intervals`
- **Objetivo:** peak anaerobic power, maximal glycolytic rate, buffering, possible aerobic/mitochondrial benefits.
- **Estructura:** `2–8 esfuerzos`.
- **Duración:** `20–90 s`.
- **Intensidad:** máxima o casi máxima.
- **Work:rest:** `>=1:5`.
- **Recuperación:** Zone1–3 activo.
- **Warm-up:** `~30 min`.
- **Cool-down:** `>=15 min`.
- **Ejemplo:** `6 × 60 s max` con `>=5 min` recuperación.
- **Advertencia:** puede aumentar V̇LaMax; usar con cuidado si se busca umbral/fat oxidation.
- **Fuente:** Cap. 11, pp. 194–195.

#### `neuromuscular-sprints`
- **Objetivo:** Type IIx recruitment, sprint power, neural efficiency.
- **Estructura:** `3–10 esfuerzos`.
- **Duración:** `5–20 s`.
- **Intensidad:** máxima.
- **Recuperación:** `>=2 min`.
- **Entre sets:** `10–20 min` si se agrupan.
- **Ejecución:**
  - Big gear.
  - Rolling start.
  - Evitar salida parada si objetivo es potencia máxima.
- **Integración:**
  - Pueden ir en rides largos si <20 s.
  - Mejor en bloque condensado para no romper fat oxidation.
- **Fuente:** Cap. 11, pp. 196–199.

---

### 2.3 Sesiones de preparación de carrera

#### `pre-race-openers`
- **Objetivo:** activación, preparación mental, evitar piernas dormidas.
- **Cuándo:** día previo a evento clave.
- **Duración:** `~1 h`.
- **Base:** Zone1C/low Zone2C.
- **Estructura ejemplo:**
  - `10–15 min` warm.
  - `3 × 1 min` Zone4C.
  - `10–15 min` steady.
  - `2 × (1 min Zone4C + 30 s Zone5C)`.
  - Cool-down hasta `1 h`.
- **Error:** convertir en entrenamiento duro.
- **Adaptación:** eventos cortos pueden incluir surges de `~10 s` race-specific.
- **Fuente:** Cap. 11, pp. 199–201; Cap. 16, p. 260.

#### `pre-race-warmup`
- **Objetivo:** reducir riesgo de lesión y primar sistema aeróbico.
- **Cuándo:** lo más cerca posible del inicio.
- **Duración:** `~30 min` para eventos intensos.
- **Estructura ejemplo:**
  - `5 min` Zone2C.
  - `5–10 min` progresivo a top Zone3C.
  - `5 min` Zone2C.
  - `4 × 45 s` a `110–115% FTP` con `~1 min` fácil.
  - `5 min` suave.
- **Eventos bajos/largos:**
  - `5–10 min` suave puede bastar.
  - O calentar dentro del evento.
- **Stretching:**
  - Evitar static stretching pre-competición.
  - Si se usa, mejor dynamic.
- **Fuente:** Cap. 11, pp. 201–203; Cap. 16, pp. 260–261.

---

## Recomendación 3 — SkillPaths `cycling_testing` y `cycling_race_prep`

---

## 3A — SkillPath: `cycling-field-testing`

### Propósito
Guiar al atleta desde estandarización hasta tests de campo y monitoreo.

### Requisitos previos
- Estar sano.
- Sin fatiga anormal.
- Nutrición estándar.
- Cafeína consistente o evitada según protocolo.
- Equipo calibrado.
- No testar con estrés alto.

### Pasos

| Step | Nombre | Descripción | Criterio para avanzar | Página |
|---|---|---|---|---|
| 1 | Estandarización | Nutrición 24 h, warm-up, ubicación, equipo, descanso | Condiciones repetibles | Cap. 5, pp. 85–86 |
| 2 | FTP 2×8 | Dos 8 min máximos, FTP = 90% promedio | Pacing consistente | Cap. 5, pp. 55–56 |
| 3 | FTP 20 min | Warm-up + 5 min + 20 min max, FTP = 95% o 90–93% | Potencia estable y HR coherente | Cap. 5, pp. 53–54 |
| 4 | Power profile | 5 s, 1 min, 5 min, 20 min en distintos días | 3 intentos fiables | Cap. 5, pp. 58–60 |
| 5 | Critical Power | 3–4 tests: 3/5/12 min opcional 20 | Buen fit lineal | Cap. 5, pp. 64–67 |
| 6 | HRmax | Protocolo con 10 min fuertes + 1 min max + sprint | Repetir varias veces | Cap. 5, pp. 68–69 |
| 7 | Threshold HR | 30 min all-out, últimos 20 min HR | Repetir y validar | Cap. 5, p. 70 |
| 8 | LSCT baseline | Semanal, 3–4 semanas de baseline | Datos estables | Cap. 17, pp. 270–273 |
| 9 | Optional lactate | Step test, MLSS, V̇LaMax, clearance | Solo con equipo/control | Cap. 5, pp. 71–77 |

### Reglas del skill path
- Si hay varios FTP, usar el más conservador para zonas.
- Ramp test no default si anaeróbicamente fuerte.
- CP no reemplaza FTP directamente; usar `94% CP`.
- No interpretar power profile en primeros intentos.
- Si V̇LaMax es calculado por terceros, marcar como experimental por inconsistencia.
- **Fuente:** Cap. 5, pp. 52–87; Cap. 17, pp. 270–275.

---

## 3B — SkillPath: `cycling-race-prep`

### Propósito
Preparar evento prioritario con taper, openers, warm-up, nutrición y recuperación.

### Pasos

| Step | Nombre | Descripción | Criterio | Página |
|---|---|---|---|---|
| 1 | Definir prioridad | Solo taper completo para eventos clave | 1–3 tapers/año | Cap. 16, p. 252 |
| 2 | Elegir duración | 8–14 días; time-crunched 7–8 | Fatiga previa | Cap. 16, pp. 252–253 |
| 3 | Reducir volumen | 21–40% gradual | TSB sube a objetivo | Cap. 16, pp. 253–254 |
| 4 | Mantener intensidad | Conservar high-intensity | No eliminar intervalos | Cap. 16, pp. 254–255 |
| 5 | Mantener frecuencia | Sesiones más cortas, no menos días | Piernas activas | Cap. 16, p. 255 |
| 6 | TSB target | 0–10 según duración evento | Individual | Cap. 16, p. 257 |
| 7 | Openers | Día previo, 1 h fácil con toques | Sensación activada | Cap. 16, p. 260 |
| 8 | Warm-up | Según intensidad inicial | Aerobic primed | Cap. 16, pp. 260–261 |
| 9 | Nutrition | Según duración | GI tolerado | Cap. 16, pp. 261–263 |
| 10 | Post-event | Recuperación proporcional | Fatiga resuelta | Cap. 16, p. 264 |

### TSB objetivo por evento
- Evento <=1.5 h: `0–5`.
- Evento largo: `5–10`.
- Ultra: `10–15`.
- **Fuente:** Cap. 16, p. 257.

### Nutrición por duración
- `<1 h`: no carb load; evitar carbs 10–60 min antes; durante sin requisito.
- `1–1.5 h`: comida previa `1–4 g/kg`; durante `30–60 g/h`.
- `1.5–2.5 h`: carb load `10–12 g/kg/día`; durante `30–60 g/h`.
- `>2.5 h`: carb load `10–12 g/kg/día`; durante `60–90 g/h`; multiple transportable si >60.
- **Fuente:** Cap. 16, p. 262.

---

## Recomendación 4 — Módulo `modules/cycling_strength`

### Propósito
Integrar fuerza suplementaria para ciclistas sin interferir con entrenamiento de bici.

### Entidades sugeridas
- `CyclingStrengthBlock`
- `StrengthSessionTemplate`
- `StrengthProgression`
- `StrengthMaintenancePolicy`

---

### Parámetros canónicos

| Parámetro | Valor | Fuente |
|---|---:|---|
| Desarrollo | `2–3 sesiones/semana` | Cap. 15, p. 247 |
| Time-crunched | `2 sesiones/semana` | Cap. 15, p. 247 |
| Mantenimiento | `1 sesión/semana` | Cap. 15, p. 247 |
| Series mantenimiento | `1–2 series` | Cap. 15, p. 247-248 |
| Duración bloque desarrollo | `12–16 semanas` | Cap. 15, p. 248 |
| Inicio antes de competencia | `3–4 meses` | Cap. 15, p. 248 |
| Reps iniciales | `10–15` | Cap. 15, p. 249 |
| Reps finales | `4–6` | Cap. 15, p. 249 |
| Series por ejercicio | `2–4` | Cap. 15, p. 244 |
| Descanso entre series | `2–6 min` | Cap. 15, p. 244 |
| Core | `~20 min`, `3–4 ejercicios`, `3 sets` | Cap. 15, pp. 246–247 |
| TSS core | `30–40 TSS/h` | Cap. 15, p. 250 |
| TSS weights | `60–80 TSS/h` | Cap. 15, p. 250 |

---

### Plantilla de sesión de fuerza

#### `cyclist-strength-session`
**Componentes:**
1. Warm-up:
   - `5–10 min` suave.
   - Movilidad ligera/stretching dinámico si necesario.
2. Core:
   - `~20 min`.
   - `3–4 ejercicios`.
   - `3 sets` por ejercicio.
   - Ejercicios sugeridos:
     - Plank.
     - Side plank.
     - Bird dogs.
     - Hip bridges.
     - Clam shells.
     - Donkey kicks.
     - Russian twists.
3. Pesos:
   - `2–3 ejercicios`.
   - Patrones recomendados:
     - Half-squat.
     - Deadlift.
     - Lunge/split squat.
   - No llegar al fallo.
   - Dejar `1–2 reps` en reserva.

**Fuente:** Cap. 15, pp. 246–247.

---

### Reglas del módulo de fuerza

#### `STRENGTH-DEVELOPMENT-FREQUENCY`
- `2–3 sesiones/semana` para desarrollo.
- `2` si time-crunched.
- **Fuente:** Cap. 15, p. 247.

#### `STRENGTH-MAINTENANCE`
- `1 sesión/semana`.
- `1–2 series` por ejercicio.
- Especialmente en competition season.
- **Fuente:** Cap. 15, pp. 247–248.

#### `STRENGTH-PERIODIZATION`
- Bloque de `12–16 semanas`.
- Empezar con cargas ligeras y `10–15 reps`.
- Progresar hacia cargas mayores y `4–6 reps`.
- Esto mejora fuerza y reduce riesgo de lesión.
- **Fuente:** Cap. 15, pp. 248–249.

#### `STRENGTH-LOAD-SELECTION`
- Preferir cargas moderate/heavy `<15RM`.
- Evidencia favorece especialmente `<8RM`.
- Progresar hacia pesado con técnica.
- **Fuente:** Cap. 15, pp. 244–245.

#### `STRENGTH-REST`
- `2–6 min` entre series pesadas.
- **Fuente:** Cap. 15, p. 244.

#### `AVOID-FAILURE`
- No entrenar al fallo.
- Terminar con `1–2 reps` en reserva.
- **Fuente:** Cap. 15, p. 247.

#### `STRENGTH-SCHEDULING`
- No programar fuerza dura en recovery day.
- Core suave podría ser aceptable.
- No comprometer sesiones clave de bici.
- **Fuente:** Cap. 15, pp. 247–248.

#### `STRENGTH-RCA-OPTION`
- Fuerza antes de endurance ride puede usarse para generar estado RCA.
- Solo si el objetivo es fat oxidation y se tolera.
- **Fuente:** Cap. 15, p. 248.

#### `EXPLOSIVE-CAUTION`
- Explosive training puede mejorar potencia.
- Puede aumentar maximal glycolytic rate y perjudicar threshold en algunos casos.
- Usar solo si es compatible con objetivos.
- **Fuente:** Cap. 15, pp. 244–245, 250.

#### `CORE-INJURY-PREVENTION`
- Core stability ayuda a biomecánica y reducción de riesgo.
- No usar como rehab clínica sin profesional.
- **Fuente:** Cap. 15, pp. 245–246.

---

## Recomendación 5 — Módulo `guardrails/cycling_medical_scope`

### Propósito
Evitar que el sistema diagnostique, trate lesiones o automatice decisiones médicas.

---

### Alcance permitido

#### El sistema SÍ puede hacer
- Recomendar sesiones basadas en objetivos y fatiga.
- Ajustar carga según TSS/TSB/HR/subjetivo.
- Proponer recovery weeks.
- Validar pacing y zonas.
- Sugerir tapering.
- Sugerir fuerza suplementaria.
- Recomendar fueling general de carrera según duración.
- Detectar señales de fatiga acumulada.
- Recordar consistencia y recuperación.

#### El sistema NO debe hacer
- Diagnosticar enfermedades o lesiones.
- Tratar dolor clínico.
- Prescribir rehabilitación médica.
- Recomendar pérdida de peso agresiva.
- Aconsejar volver a entrenar con enfermedad activa.
- Interpretar síntomas como condiciones médicas específicas.
- Reemplazar médico, fisioterapeuta o nutricionista clínico.
- Automatizar intervenciones de salud.

**Fuente:** Introducción, p. 5; Cap. 15, pp. 240–241; Cap. 5, p. 85; Cap. 11, p. 169.

---

### Red flags y reglas de seguridad

#### `MEDICAL-CONSULT-GUARD`
Si el usuario reporta:
- Duda sobre seguridad del entrenamiento.
- Condición médica conocida.
- Dolor persistente o inusual.
- Enfermedad.
- Lesión.
Acción:
- Recomendar consulta profesional.
- No generar progresiones intensivas.
- **Fuente:** Introducción, p. 5.

#### `ILLNESS-GUARD`
- No prescribir RCA ni intervalos si el usuario reporta enfermedad.
- RCA puede comprometer immune system y recuperación.
- Priorizar descanso/recuperación.
- **Fuente:** Cap. 11, p. 169.

#### `BODY-FAT-SAFETY`
- No sugerir bajar de:
  - `5%` hombres.
  - `12%` mujeres.
- Advertir que body fat muy bajo compromete rendimiento, salud, inmunidad y riesgo de lesión.
- **Fuente:** Cap. 5, p. 85.

#### `OVERTRAINING-GUARD`
Si convergen:
- Fatiga subjetiva > pocos días.
- Baja motivación.
- Irritabilidad.
- Muscle soreness alto.
- Dificultad para producir potencia/HR habitual.
- TSB `< -20` sostenido.
- HR desviada `±10 bpm` varios días.
Acción:
- Reducir carga.
- Recovery week.
- No forzar intervalos.
- Si persiste, recomendar profesional.
- **Fuente:** Cap. 17, pp. 268–269; Cap. 13, pp. 225–229.

#### `LOW-ENERGY-AVAILABILITY-GUARD`
Si hay:
- RCA excesiva.
- Fatiga crónica.
- Enfermedad recurrente.
- Bajo rendimiento.
- Body fat cercano a mínimos.
Acción:
- Limitar RCA.
- Aumentar fueling.
- No sugerir restricción adicional.
- **Fuente:** Cap. 11, pp. 168–169; Cap. 5, p. 85.

#### `PAIN-DURING-STRENGTH-GUARD`
- Si dolor durante fuerza:
  - Detener ejercicio.
  - Revisar técnica con profesional.
  - No progresar cargas.
- El libro indica riesgo alto si mala forma.
- **Fuente:** Cap. 15, p. 245.

#### `CADENCE-PAIN-GUARD`
- Si low-cadence intervals causan dolor:
  - Volver a cadencia natural.
- **Fuente:** Cap. 11, p. 204.

#### `DATA-AUTOMATION-GUARD`
No automatizar decisiones si:
- FTP tests inconsistentes.
- HR y potencia divergen mucho.
- Wearables marcan fatiga sin validación.
- HR drift aislado.
- LSCT sin baseline suficiente.
Acción:
- Pedir validación, repetir test o priorizar subjetivo.
- **Fuente:** Cap. 13, pp. 226–227; Cap. 17, pp. 270–274.

---

# 3) Matriz final de implementación

| Recomendación | Módulo sugerido | Contenido principal | Capítulos fuente |
|---|---|---|---|
| 1 | `rules/cycling_training_load` | TSS, CTL/ATL/TSB, distribución, recovery, readiness | 6, 8, 12, 13, 14, 17 |
| 2 | `templates/cycling_sessions` | Plantillas de sesiones | 10, 11, Parte 5 |
| 3 | `skillPaths/cycling_testing` + `skillPaths/cycling_race_prep` | Testing y preparación de carrera | 5, 16, 17 |
| 4 | `modules/cycling_strength` | Fuerza suplementaria | 15 |
| 5 | `guardrails/cycling_medical_scope` | Seguridad, no diagnóstico, límites médicos | Intro, 5, 11, 15, 17 |

---

# 4) Estado final de la extracción

## Lo que está completo y accionable
- Sistemas energéticos.
- Fibras musculares y reclutamiento.
- Determinantes del rendimiento.
- Lactato y zonas metabólicas.
- Testing FTP, CP, HR, power profile y LSCT.
- Modelo fitness-fatiga.
- Planificación y periodización.
- Zonas de entrenamiento.
- Todas las plantillas de sesión relevantes.
- Distribución de intensidad.
- Métricas de carga.
- Estructura semanal.
- Fuerza para ciclistas.
- Race prep/tapering/nutrición de carrera.
- Monitoreo de fatiga y progreso.
- Principios finales.

## Lo que queda condicionado a complementos visuales
- Tabla completa exacta de zonas de la Figura 44.
- Progresión semanal exacta de fuerza de la Figura 66.
- Clasificaciones normativas de power profile.
- Materiales suplementarios externos.
- Cálculo exacto de V̇LaMax por inconsistencia textual.

Con esto, el libro queda convertido en un conjunto de reglas, plantillas, progresiones y salvaguardas listas para que otros agentes las lleven a metadatos y motor de reglas de la app.

---

## Ronda 3 — tras: «Excelente análisis del libro (*Cycling Physiology & Training Science Guide*, Dr. Emma Wilkins & Tom Bell). Ha identificado con precisión los…»
Perfecto. Con esta consolidación técnica, el modelo queda **cerrado y utilizable** para arquitectura del sistema.

A continuación dejo la **versión canónica final**, integrando tu transcripción y dejando explícitamente marcado qué es:

- ✅ **Canónico según el libro**
- 🔧 **Heurística de implementación**
- ⚠️ **Dato derivado / externo / no literal del libro**

---

# Modelo canónico cerrado — *Cycling Physiology & Training Science*

## 1. Tabla final de zonas Coggan adaptadas

### Estado: ✅ Canónico con notas de implementación

| Zona | Nombre | Potencia (% FTP) | % FC umbral / threshold HR | % FC máxima | RPE 1–10 | Uso principal | Notas |
|---|---|---:|---:|---:|---:|---|---|
| **Z1C** | Active Recovery | `< 55%` teórico; rango práctico `50–60%` | `< 80%` | `< 65%` | 1–2 | Recuperación activa | El libro usa `50–60% FTP` como ejemplo de recovery ride. Para validación estricta de zona, puede usarse `<55%`; para plantilla `recovery-ride`, permitir `50–60%`. |
| **Z2C** | Aerobic / Endurance | `55–75%` | `68–83%` | `60–70%` | 3–4 | Base aeróbica, fat oxidation, volumen | Zona principal de entrenamiento. Calidad: buscar ≥50% del tiempo en Z2, ideal más. |
| **Z3C** | Intensive Aerobic / Tempo | `80–95%` | `84–94%` | `70–80%` | 5–6 | Reclutamiento Type IIa, low-cadence, endurance específica | Usar con moderación: `1–3` sesiones/semana salvo objetivo ultra. |
| **Z4C** | Lactate Threshold | `90–105%`; intervalo típico `98–103%` | `95–105%` | `80–90%` | 7 | Tolerancia láctica, endurance a umbral | No es la mejor sesión para subir umbral real; útil para race specificity. |
| **Z5C** | VO₂max | `106–120%`; clásico `110–120%` | `> 106%` | `> 90–95%` | 8 | Aerobic capacity / stroke volume | Para intervalos VO₂max, HR es métrica primaria: objetivo >90–95% HRmax. |
| **Z6C** | Anaerobic Capacity | `121–150%`; microbursts `120–130%` | N/A | N/A | 9 | Peak anaerobic power, anaerobic stamina | Puede subir V̇LaMax; usar con control si se busca umbral/fat oxidation. |
| **Z7C** | Neuromuscular Power | Máximo; no prescribir %FTP fijo | N/A | N/A | 10 | Sprints 5–20 s, reclutamiento neural | Puede superar 150% FTP, pero no usarlo como zona prescrita por porcentaje. |

### Notas importantes de zonas

- **Power primary**, HR secondary, salvo:
  - VO₂max intervals: HR primaria.
  - Off-road: HR puede ser más fiable que potencia.
  - HR drift prolongado: seguir HR y bajar potencia.
- Zonas basadas en promedios poblacionales; individualizar con:
  - self-paced efforts,
  - HR response,
  - lactate/CP testing,
  - RPE/respiración.
- Mapping 3 zonas:
  - Low = Z1C–Z2C.
  - Medium = Z3C–Z4C.
  - High = Z5C+.

---

## 2. Distribución de intensidad por modelo

### Estado: ✅ Canónico para polarizado/piramidal; ⚠️ ajuste necesario para threshold

| Modelo | Low `< LT1` | Medium `LT1–LT2` | High `> LT2` | Estado |
|---|---:|---:|---:|---|
| **Polarised** | `75–80%` | `5–10%` | `15–20%` | ✅ |
| **Pyramidal** | `75–80%` | `15–20%` | `5–10%` | ✅ / 🔧 |
| **Threshold** | `45–60%` | `≥20%`, típico `35–45%` | `5–20%` | ⚠️ corregido |

### Ajuste clave sobre Threshold

El libro indica que el modelo threshold incluye **al menos 20% medium**. Además, cita un ejemplo de intervención:

- Polarised: `75/5/20`
- Threshold: `45/35/20`

Por tanto, la tabla threshold no debería cerrarse como `50–60 / 35–45 / 5–10`, porque el rango alto queda demasiado bajo respecto al ejemplo citado.

**Versión recomendada:**

| Threshold model | Low | Medium | High |
|---|---:|---:|---:|
| Rango de referencia | `45–60%` | `35–45%` | `5–20%` |
| Ejemplo concreto del libro | `45%` | `35%` | `20%` |

### Regla de clasificación

Usar **sessional goal approach**, no time-in-zone, para planificación:

- Low: RPE ≤4, mayoría Z1–Z2.
- Medium: RPE 5–6, mayoría Z3–Z4.
- High: RPE ≥7, mayoría Z5+.

---

## 3. Programa periodizado de fuerza para ciclistas

### Estado: ✅ Canónico en estructura; 🔧 derivado en %1RM

El libro da claramente:

- Desarrollo: `2–3 sesiones/semana`.
- Time-crunched: `2 sesiones/semana`.
- Mantenimiento: `1 sesión/semana`.
- Duración del bloque: `12–16 semanas`.
- Series: `2–4`.
- Descanso: `2–6 min`.
- Reps iniciales: `10–15`.
- Reps finales: `4–6`.
- Evitar fallo.
- Ejercicios recomendados: half-squat, deadlift, lunge/split squat.
- Core: `20 min`, `3–4 ejercicios`, `3 sets`.
- TSS aproximado:
  - Core: `30–40 TSS/h`.
  - Weights: `60–80 TSS/h`.

### Versión canónica final

| Fase | Frecuencia | Series | Reps | Descanso | Carga canónica | Carga derivada para implementación |
|---|---:|---:|---:|---:|---|---|
| **Adaptación inicial / técnica** | `2–3/wk` | `2–3` | `10–15` | `2–6 min` | `10–15RM` | 🔧 `60–70% 1RM` |
| **Fuerza específica** | `2–3/wk` | `3–4` | `4–6` | `2–6 min` | `4–6RM` / `<8RM` | 🔧 `≥80–85% 1RM` |
| **Mantenimiento** | `1/wk` | `1–2` | `4–6` o pesado controlado | `2–6 min` | Mantener fuerza sin fatiga | 🔧 intensidad alta pero sin fallo |

### Aclaración importante

- Los porcentajes de `1RM` **no aparecen explícitamente en el libro**.
- Son una heurística útil para implementación, pero deben marcarse como:
  - 🔧 derived,
  - no canónicos,
  - no obligatorios,
  - y preferiblemente reemplazables por `RM ranges`.

### Naming recomendado

Evitar llamar a la primera fase “Hipertrofia”, porque el libro explícitamente distingue fuerza funcional ciclista de enfoque bodybuilder.

Mejor usar:

- `strength-adaptation`
- `strength-development`
- `strength-maintenance`

---

## 4. Power Profile y Critical Power

### Estado: ✅ CP/W′ canónico; ⚠️ categorías normativas externas

Para el modelo algorítmico, la opción más robusta es usar:

\[
Power = \frac{W'}{t} + CP
\]

### Reglas canónicas CP

- Usar `3–4` tests máximos.
- Duraciones recomendadas:
  - `3 min`
  - `5 min`
  - `12 min`
  - opcional `20 min`
- Incluir al menos un test `>10 min`.
- Tests en días separados.
- Mantener método consistente:
  - fixed-duration, o
  - time-to-exhaustion.
- Time-to-exhaustion puede dar:
  - CP ~7% menor.
  - W′ ~12% mayor.
- Para zonas, usar:

\[
FTP_{estimado} \approx 0.94 \times CP
\]

### W′ normativo

| Perfil | W′ |
|---|---:|
| Hombres endurance moderados | `9–15 kJ` |
| Mujeres endurance moderadas | `6–10 kJ` |
| Hombres punchy | `15–18 kJ` |
| Mujeres punchy | `11–13 kJ` |
| Sprinters | `>25–30 kJ` |

### Power profile categories

Las clasificaciones tipo:

- Untrained
- Fair
- Moderate
- Good
- Very Good
- Excellent
- World Class

son útiles, pero **no son canónicas del libro**; provienen del ecosistema TrainingPeaks/Coggan.

**Recomendación:**

- Usar CP/W′ como modelo principal.
- Usar categorías normativas solo como metadata opcional externa.

---

## 5. Corrección final de V̇LaMax

### Estado: ✅ corrección aceptada; ⚠️ formula con baseline como extensión

El error del libro es claro:

- Dice test de `20 s`.
- Luego usa `26 s` como periodo láctico.
- Eso corresponde a un test de `30 s` menos `4 s` alácticos.

### Fórmula corregida

Si se usa lactato basal:

\[
\dot{V}La_{max} =
\frac{[La]_{max} - [La]_{rest}}
{t_{test} - t_{alactico}}
\]

Donde:

\[
t_{alactico} \approx 4s
\]

### Casos canónicos

| Test | Denominador |
|---:|---:|
| `20 s` | `20 - 4 = 16 s` |
| `30 s` | `30 - 4 = 26 s` |

### Fórmula simplificada según libro

El libro, estrictamente, divide el lactato máximo post-esfuerzo por el periodo de producción láctica, sin mencionar explícitamente restar lactato basal:

\[
\dot{V}La_{max} \approx
\frac{[La]_{max}}
{t_{test} - 4s}
\]

### Recomendación de implementación

Usar:

```text
if baseline_lactate_available:
    vlamax = (max_lactate - baseline_lactate) / production_time
else:
    vlamax = max_lactate / production_time
```

Pero marcar:

- ⚠️ solo con protocolo controlado.
- ⚠️ no automatizar diagnóstico metabólico.
- ⚠️ valores normativos limitados.

### Valores orientativos

| Perfil | V̇LaMax |
|---|---:|
| Rango general | `0.2–1.0 mmol/L/s` |
| Endurance steady | `0.3–0.5 mmol/L/s` |
| Punchy/endurance | extremo superior de `0.3–0.5` |
| Sprinters | `≥0.7 mmol/L/s` |

---

## 6. Frecuencia de testing

### Estado: ✅ canónico por fases

| Fase / contexto | Frecuencia recomendada | Uso |
|---|---:|---|
| General preparation | `8–12 semanas` | Validar progreso y ajustar zonas |
| Specific preparation | `8–12 semanas` | Validar limiters específicos |
| Competition / maintenance | `10–16 semanas` | Monitoreo formal o validación con carreras |
| Race season | usar carreras low-priority como tests | Evitar fatiga extra de testeo formal |

### Condiciones de testeo

- Después de recovery week o día fresco.
- Nutrición estandarizada `24 h`, especialmente `3–4 h` antes.
- Cafeína consistente.
- Warm-up estándar.
- Mismo equipo/entorno/método.
- No testar si:
  - estrés alto,
  - fatiga anormal,
  - enfermedad,
  - sueño muy pobre.

---

# 7. Cierre operativo para el sistema

Con esta consolidación, el libro queda integrado como módulo canónico para:

## Mejor uso

1. **Motor de zonas**
   - Zonas Coggan adaptadas.
   - Modelo de 3 zonas.
   - Reglas de validación por power/HR/RPE.

2. **Motor de planificación**
   - Distribución polarizada/piramidal.
   - Sessional goal approach.
   - Microciclos con recovery days.
   - Bloques de overload con restricciones.

3. **Plantillas de sesión**
   - Recovery.
   - Zone2.
   - Low-cadence Z3.
   - RCA.
   - VO₂max variants.
   - Threshold.
   - Over/unders.
   - Anaerobic stamina/power.
   - Neuromuscular.
   - Openers/warm-up.

4. **Testing y monitoreo**
   - FTP 20 min / 2×8.
   - CP/W′.
   - Power profile.
   - HRmax/threshold HR.
   - LSCT.
   - V̇LaMax opcional.

5. **Fuerza suplementaria**
   - Desarrollo 12–16 semanas.
   - Mantenimiento 1 sesión/semana.
   - Core y ejercicios multiarticulares ciclistas.
   - Integración sin interferir con bici.

---

# 8. Reglas finales de validación

Para evitar errores de implementación, dejar estas reglas explícitas:

## Zonas

```text
Z1_recovery:
  strict_zone: <55% FTP
  practical_template: 50–60% FTP allowed

Z2:
  ftp: 55–75%
  hr_threshold: 68–83%
  hr_max: 60–70%

Z3:
  ftp: 80–95%
  hr_threshold: 84–94%
  hr_max: 70–80%

Z4:
  ftp: 90–105%
  interval_target: 98–103%
  hr_threshold: 95–105%
  hr_max: 80–90%

Z5:
  ftp: 106–120%
  hr_primary: >90–95% HRmax

Z6:
  ftp: 121–150%
  microbursts: 120–130%

Z7:
  ftp: not_prescribed
  duration: 5–20s
  intensity: maximal
```

## Distribución

```text
polarised:
  low: 75–80
  medium: 5–10
  high: 15–20

pyramidal:
  low: 75–80
  medium: 15–20
  high: 5–10

threshold:
  not_default: true
  medium_minimum: 20
  reference_example: 45/35/20
```

## Fuerza

```text
strength_development:
  sessions_per_week: 2–3
  weeks: 12–16
  initial_reps: 10–15
  final_reps: 4–6
  sets: 2–4
  rest_min: 2–6
  avoid_failure: true

strength_maintenance:
  sessions_per_week: 1
  sets_per_exercise: 1–2
```

## CP

```text
cp_tests: 3–4
recommended_durations: [3, 5, 12, optional 20]
min_duration: 3 min
max_duration: 20 min
include_long_test: >10 min
ftp_from_cp: 0.94
```

## V̇LaMax

```text
alactic_time_s: 4
test_20s_denominator: 16
test_30s_denominator: 26
subtract_baseline_if_available: true
```

## Testing

```text
build_phase_testing_weeks: 8–12
competition_phase_testing_weeks: 10–16
test_only_if_fresh: true
standardize_nutrition: true
standardize_caffeine: true
```

---

# 9. Estado final

✅ **El modelo queda cerrado.**

Con esta versión:

- La tabla de zonas queda operativa.
- Los perfiles visuales pueden parametrizarse desde texto.
- La distribución de intensidad queda definida.
- La fuerza queda canónica, con `%1RM` como heurística marcada.
- CP/W′ se convierte en el método robusto para power profile.
- V̇LaMax queda corregido y listo como módulo opcional.
- La frecuencia de testing queda resuelta por fases.

Único punto que conviene dejar formalmente marcado en documentación interna:

> Los porcentajes de `1RM` y las categorías normativas de power profile son heurísticas de implementación o fuentes externas, no datos literales del libro. El libro ancla la fuerza en rangos `RM`, series, reps, descanso y frecuencia, y el power profile en CP/W′.
