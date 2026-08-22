# wuh-sexual-fitness-2002 — Extracción recuperada de chat

> **sourceId:** `wuh-sexual-fitness-2002` · **origen:** `chat-export-1787415041717` (Extracción de Reglas para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Sexual Fitness: 7 Essential Elements to Optimizing Your Sensuality, Satisfaction, and Well-Being — Extracción para Plan Maestro OS

> Resumen de extracción. El libro plantea la “sexual fitness” como un estado entrenable que depende de siete dominios: dieta, suplementos, medicación/sustancias, estimulación sensual, ejercicio, sueño y reducción de estrés. No es un manual de fuerza, calistenia ni hipertrofia; su valor para un sistema de fitness está en reglas de estilo de vida, recuperación, salud cardiovascular, sueño, estrés, adherencia y educación de salud sexual. Todo se parafrasea; no se copian párrafos del libro.

---

## 1) Metadatos del libro

- **Título:** *Sexual Fitness: 7 Essential Elements to Optimizing Your Sensuality, Satisfaction, and Well-Being*
- **Autor(es):** Hank C. K. Wuh, M.D. y MeiMei Fox
- **Año:** 2001 / edición Perigee 2002
- **Disciplina principal:** salud sexual integrativa, bienestar, medicina preventiva, estilo de vida, ejercicio moderado, sueño, estrés, nutrición y suplementación.
- **Enfoque poblacional:** adultos generales, hombres y mujeres, desde jóvenes hasta mayores; incluye personas sanas y personas con preocupaciones sexuales leves o moderadas. No está orientado a atletas avanzados ni a rehabilitación musculoesquelética específica.
- **Notas de alcance:**
  - **Cubre:** dieta, suplementos, efectos sexuales de medicamentos, estimulación sensorial, ejercicio, sueño, estrés, programa de 30 días, recetas y una introducción breve a función/disfunción sexual.
  - **No cubre explícitamente:** programación avanzada de fuerza, hipertrofia, calistenia, movilidad articular detallada, fisioterapia musculoesquelética, diagnóstico médico, tratamiento de enfermedades cardiovasculares, endocrinas o psiquiátricas.
  - **Ámbito clínico:** el libro repite que se consulte al médico antes de cambiar medicamentos, iniciar suplementos o usar hormonas. No debe usarse como herramienta diagnóstica.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `SexualHealthFocus` / extensión de `FocusId`
  - **Descripción:** dominio de salud sexual como foco entrenable, separado de fuerza o hipertrofia.
  - **Campos sugeridos:** `libido`, `erectileFunction`, `genitalArousal`, `orgasmEase`, `intimacyConnection`, `performanceAnxiety`, `sexualSatisfactionScore`.
  - **Referencias:** Introducción, pp. 1-12; Appendix, pp. 309-314.

- `LifestyleReadinessMetric`
  - **Descripción:** métricas de estilo de vida que el libro usa como predictores de función sexual.
  - **Campos sugeridos:** `sleepHours`, `sleepLatencyMinutes`, `sleepQuality1to5`, `daytimeEnergy1to5`, `stressLevel1to10`, `alcoholDrinksPerDay`, `caffeineMgPerDay`, `nicotineStatus`, `weeklyExerciseMinutes`, `sexualSatisfactionScore0to5`.
  - **Referencias:** cap. 6 Sleep, pp. 145-164; cap. 7 Stress Reduction, pp. 165-191; 30-Day Program, pp. 193-266.

- `SupplementProtocol`
  - **Descripción:** protocolo de suplemento con dosis, duración, evidencia, contraindicaciones y requisito de supervisión.
  - **Campos sugeridos:** `supplementId`, `dailyDose`, `standardization`, `minDurationWeeks`, `evidenceTier: yes | maybe | no`, `contraindications`, `requiresClinicianApproval`, `targetOutcome`.
  - **Referencias:** cap. 2 Supplements, pp. 47-72.

- `MedicationSexualSideEffectProfile`
  - **Descripción:** perfil de medicamentos que pueden afectar deseo, excitación, erección, lubricación, orgasmo o eyaculación.
  - **Campos sugeridos:** `medicationClass`, `sexualSideEffects`, `riskLevel`, `alternativesToDiscuss`, `doNotStopAbruptly`, `clinicianReviewRequired`.
  - **Referencias:** cap. 3 Medications, pp. 73-93.

- `SexualDysfunctionRedFlag`
  - **Descripción:** señales que justifican evaluación profesional.
  - **Campos sugeridos:** `symptom`, `associatedSystem`, `urgency`, `possibleMedicalCorrelates`, `action`.
  - **Referencias:** cap. 1 Diet, pp. 15-16, 26; cap. 3 Medications, pp. 75, 90-92; cap. 6 Sleep, pp. 151-153; Appendix, pp. 312-314.

- `SensualStimulationModality`
  - **Descripción:** modalidad sensorial o de intimidad usada para aumentar excitación y reducir ansiedad.
  - **Campos sugeridos:** `modality: touch | smell | taste | sound | sight | visualization | tantric`, `goal`, `soloOrPartner`, `duration`, `environmentCues`, `contraindicationsPsychological`.
  - **Referencias:** cap. 4 Sensual Stimulation, pp. 99-126.

- `IntimacyAppointment`
  - **Descripción:** cita o ritual de pareja programado para proteger tiempo de conexión.
  - **Campos sugeridos:** `frequencyWeekly`, `duration`, `agenda: none | connection | sensual | sexual`, `noPerformanceExpectation`, `environment`.
  - **Referencias:** cap. 7 Stress Reduction, pp. 174-175; 30-Day Program, pp. 213-263.

- `SleepHygieneChecklist`
  - **Descripción:** lista de verificación ambiental y conductual para sueño.
  - **Campos sugeridos:** `regularSchedule`, `bedOnlyForSleepAndSex`, `roomTemperature`, `noiseControl`, `lightControl`, `stimulantCutoff`, `alcoholCutoff`, `windDownRitual`.
  - **Referencias:** cap. 6 Sleep, pp. 156-163.

- `StressRegulationTechnique`
  - **Descripción:** técnica breve de regulación de estrés con potencial impacto en libido y recuperación.
  - **Campos sugeridos:** `techniqueId`, `frequency`, `durationMinutes`, `mechanism`, `requiresInstruction`, `sexualFitnessRelevance`.
  - **Referencias:** cap. 7 Stress Reduction, pp. 171-189.

### 2.2 Mapeo a tipos existentes

- `FocusId: cardiovascular-health`
  - El libro trata la función sexual como dependiente de flujo sanguíneo, arterias sanas y control de colesterol. La disfunción eréctil se presenta como posible señal temprana de enfermedad vascular.
  - Referencias: cap. 1, pp. 14, 24-27; cap. 5, pp. 127-129; Appendix, pp. 311-314.

- `FocusId: recovery`
  - Sueño, reducción de estrés, descanso y moderación de sustancias se modelan como recuperadores de energía, deseo y disponibilidad hormonal.
  - Referencias: cap. 6, pp. 145-164; cap. 7, pp. 165-191.

- `FocusId: body-composition`
  - El libro aborda peso y grasa corporal con enfoque de equilibrio: ni obesidad ni extrema delgadez; no promueve obsesión con peso.
  - Referencias: cap. 5, pp. 138-143.

- `FocusId: mobility`
  - Cobertura limitada. No hay protocolos de movilidad articular específica. Sí hay yoga, estiramientos y tai chi como actividades suaves.
  - Referencias: cap. 5, pp. 132-136; cap. 7, pp. 181-182.

- `FocusId: tendon-health`
  - No es un foco del libro. No hay protocolos de tendón. ⚠️ No usar este libro para tendinitis.

- `FocusId: hypertrophy`
  - No hay programación de hipertrofia. Solo menciona entrenamiento de fuerza como opción general de ejercicio moderado.
  - Referencias: cap. 5, pp. 127-138.

- `BodyZoneId: cardiovascular / heart`
  - El libro enfatiza que el corazón y las arterias condicionan erección y excitación genital. Recomienda dieta baja en grasa, ejercicio, no fumar y control de colesterol.
  - Referencias: cap. 1, pp. 14, 24-27; cap. 5, pp. 127-129.

- `BodyZoneId: pelvic-genital`
  - Trata excitación, erección, lubricación, orgasmo y dolor/disfunción como fenómenos neurovasculares y hormonales, pero sin ejercicios pélvicos detallados.
  - Referencias: Appendix, pp. 309-314.

- `BodyZoneId: brain / nervous-system`
  - El cerebro se describe como iniciador de la respuesta sexual; neurotransmisores, distracción, ansiedad y depresión afectan deseo y rendimiento.
  - Referencias: Appendix, pp. 309-312; cap. 7, pp. 168-171.

- `BodyZoneId: endocrine`
  - Habla de testosterona, estrógeno, progesterona, DHEA, oxitocina, cortisol y su relación con deseo, sueño, estrés y envejecimiento. Todo condicionado a evaluación médica.
  - Referencias: cap. 3, pp. 80-90; cap. 6, pp. 145-151; cap. 7, pp. 168-170.

- `MovementPattern: walking`
  - Es la actividad cardiovascular más recomendada por simplicidad y bajo riesgo.
  - Referencias: cap. 5, pp. 134-135.

- `MovementPattern: aerobic-conditioning`
  - Actividades moderadas como nadar, bailar, bicicleta, tenis o aeróbicos.
  - Referencias: cap. 5, pp. 131-137.

- `MovementPattern: resistance-training`
  - Se menciona como parte de nivel moderado, pero sin volumen, series, repeticiones ni progresión.
  - Referencias: cap. 5, pp. 137-138.

- `MovementPattern: yoga / tai-chi / stretching`
  - Se recomiendan para estrés, flexibilidad, adherencia y población mayor o principiante.
  - Referencias: cap. 5, pp. 132-136; cap. 7, pp. 181-182.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: sf_survey_baseline

- **Descripción breve:** medir satisfacción sexual antes y después del programa usando una escala de 6 ítems con promedio 0–5.
- **Tipo:** evaluación.
- **Métrica principal:** `sexualSatisfactionScore0to5`.
- **Valores numéricos:**
  - Rango: 0 a 5.
  - Umbral de consulta: promedio ≤ 1 sugiere consultar profesional de salud.
  - Umbral óptimo: 5 indica optimización, no ausencia de mejora.
- **Condiciones de aplicación:** adultos que inicien un programa de bienestar sexual; repetir tras 30 días.
- **Capítulos/páginas:** Introducción, pp. 7-10; Day 1 y Day 30, pp. 195-198, 266.
- **Comentarios/precauciones:** es una herramienta subjetiva de motivación, no un diagnóstico.

---

### Regla: diet_macronutrient_limits

- **Descripción breve:** para una dieta de 2000 kcal, limitar grasa total, grasa saturada, colesterol y sal.
- **Tipo:** nutrición / salud cardiovascular.
- **Métrica principal:** porcentajes calóricos y mg/día.
- **Valores numéricos:**
  - Grasa saturada: ≤ 10% de calorías.
  - Grasa total: ≤ 30% de calorías.
  - Colesterol dietario: ≤ 300 mg/día.
  - Sal: ≤ 6 g/día.
- **Condiciones de aplicación:** población adulta general que busque mejorar salud cardiovascular y sexual.
- **Capítulos/páginas:** cap. 1, pp. 23-24.
- **Comentarios/precauciones:** el libro lo presenta como consenso de organizaciones de salud; para condiciones médicas, adaptar con profesional.

---

### Regla: diet_low_saturated_fat

- **Descripción breve:** reducir grasas perjudiciales para proteger circulación genital y salud cardiovascular.
- **Tipo:** nutrición / cardiovascular.
- **Métrica principal:** frecuencia de alimentos altos en grasa saturada/trans.
- **Valores numéricos:**
  - Minimizar: mantequilla, margarina, shortening, lácteos enteros, quesos grasos, aceites de coco/palma, fritos, carnes grasas, piel de ave, bollería empaquetada.
  - Preferir: pescados, carnes magras, aguacate, frutos secos, aceites vegetales adecuados.
  - Rango: cualitativo; no da porcentaje específico adicional.
- **Condiciones de aplicación:** usuarios con objetivo de salud vascular, erección, excitación o control de colesterol.
- **Capítulos/páginas:** cap. 1, pp. 24-26.
- **Comentarios/precauciones:** no eliminar grasa por completo; el libro distingue grasas mejores y peores.

---

### Regla: diet_cholesterol_control

- **Descripción breve:** reducir alimentos ricos en colesterol para disminuir riesgo vascular y disfunción eréctil asociada.
- **Tipo:** nutrición / cardiovascular.
- **Métrica principal:** ingesta semanal de fuentes altas en colesterol.
- **Valores numéricos:**
  - Yemas de huevo: 2–3 por semana se consideran aceptables; priorizar claras.
  - Evitar/reducir: lácteos enteros, carnes rojas grasas, bacon, ostras, camarones, aceites de palma/coco.
- **Condiciones de aplicación:** adultos con colesterol alto o riesgo cardiovascular; el libro vincula colesterol alto con mayor riesgo de disfunción eréctil.
- **Capítulos/páginas:** cap. 1, pp. 26-27.
- **Comentarios/precauciones:** el libro indica que niveles altos de colesterol duplican riesgo de disfunción eréctil en hombres; no usar como diagnóstico.

---

### Regla: diet_complex_carbs_fiber

- **Descripción breve:** priorizar carbohidratos complejos y fibra para energía estable, saciedad y salud cardiovascular.
- **Tipo:** nutrición / energía.
- **Métrica principal:** proporción cualitativa de carbohidratos complejos vs simples.
- **Valores numéricos:**
  - Cualitativo: mayoría de carbohidratos desde granos enteros, vegetales, legumbres, frutas.
  - Evitar: azúcares refinados, “calorías vacías”.
- **Condiciones de aplicación:** usuarios que busquen energía estable y mejor salud vascular.
- **Capítulos/páginas:** cap. 1, pp. 17, 30-32.
- **Comentarios/precauciones:** no da gramos diarios; no inventar cantidad exacta.

---

### Regla: diet_fruit_veg_density

- **Descripción breve:** aumentar frutas y vegetales para micronutrientes, antioxidantes y apoyo vascular.
- **Tipo:** nutrición / micronutrientes.
- **Métrica principal:** variedad y frecuencia diaria.
- **Valores numéricos:**
  - Cualitativo: consumir variedad diaria; preferir fresco/congelado sobre enlatado; dejar piel comestible cuando sea adecuado.
- **Condiciones de aplicación:** todos los usuarios; especial relevancia si dieta pobre en micronutrientes.
- **Capítulos/páginas:** cap. 1, pp. 27-30.
- **Comentarios/precauciones:** el libro asocia frutas/vegetales con mejor colesterol y circulación.

---

### Regla: diet_whole_grains_nuts_seeds

- **Descripción breve:** incluir granos enteros, nueces y semillas para fibra, carbohidratos complejos y nutrientes sexuales.
- **Tipo:** nutrición / cardiovascular.
- **Métrica principal:** frecuencia de consumo.
- **Valores numéricos:**
  - Cualitativo: sustituir granos refinados por integrales; consumir nueces/semillas sin sal ni saborizantes artificiales.
- **Condiciones de aplicación:** adultos generales; controlar porciones si hay objetivo de peso porque nueces/semillas son calóricas.
- **Capítulos/páginas:** cap. 1, pp. 30-32.
- **Comentarios/precauciones:** no da porciones exactas.

---

### Regla: diet_soy_protein

- **Descripción breve:** usar soja como proteína baja en grasa y posible apoyo para colesterol y síntomas menopáusicos.
- **Tipo:** nutrición / proteína.
- **Métrica principal:** frecuencia de alimentos de soja.
- **Valores numéricos:**
  - Cualitativo: añadir soja regular mediante soymilk, tofu, tempeh, edamame, soja nuts o sustitutos.
- **Condiciones de aplicación:** adultos que busquen reducir proteína animal grasa; usuarios con síntomas de PMS/menopausia pueden usarla como apoyo dietario, no tratamiento.
- **Capítulos/páginas:** cap. 1, pp. 32-34.
- **Comentarios/precauciones:** no depender exclusivamente de productos procesados de soja por sodio/aditivos.

---

### Regla: diet_hydration

- **Descripción breve:** mantener hidratación suficiente para metabolismo, circulación y función general.
- **Tipo:** nutrición / hidratación.
- **Métrica principal:** litros o vasos de agua por día.
- **Valores numéricos:**
  - Rango óptimo: ≥ 2 L/día, aproximadamente 8–9 vasos de 8 oz.
  - Programa de 30 días: al menos 8 vasos de agua diarios.
- **Condiciones de aplicación:** adultos generales; ajustar por calor, ejercicio o condición médica.
- **Capítulos/páginas:** cap. 1, p. 22; 30-Day Program, p. 195.
- **Comentarios/precauciones:** no sustituir por sodas o jugos azucarados.

---

### Regla: diet_spices_qualitative

- **Descripción breve:** usar especias para sabor, reducción de salsas grasas y posible estimulación fisiológica leve.
- **Tipo:** nutrición / adherencia.
- **Métrica principal:** frecuencia de uso de especias.
- **Valores numéricos:**
  - Cualitativo: usar abundantes especias como chile, jengibre, ajo, curry, comino, hierbas frescas.
- **Condiciones de aplicación:** usuarios que necesiten mejorar adherencia a dieta baja en grasa.
- **Capítulos/páginas:** cap. 1, pp. 34-35.
- **Comentarios/precauciones:** efectos sexuales descritos son leves/indirectos; no tratar como tratamiento médico.

---

### Regla: diet_presex_tryptophan_avoidance

- **Descripción breve:** evitar alimentos ricos en triptófano inmediatamente antes de actividad sexual si se busca energía/alertness.
- **Tipo:** nutrición / timing.
- **Métrica principal:** consumo de alimentos con triptófano en ventana previa a sexo.
- **Valores numéricos:**
  - Cualitativo: evitar poco antes de actividad sexual.
  - Alimentos mencionados: pavo, leche caliente, crema, queso, cerdo, ternera, res, halibut, salmón sockeye.
- **Condiciones de aplicación:** usuarios que reportan somnolencia tras comidas.
- **Capítulos/páginas:** cap. 1, p. 44.
- **Comentarios/precauciones:** regla cualitativa; no da ventana horaria exacta.

---

### Regla: supp_safety_gate

- **Descripción breve:** todo suplemento debe pasar por aprobación médica, dosis exacta y expectativa de efecto lento.
- **Tipo:** suplementación / seguridad.
- **Métrica principal:** `clinicianApprovalRequired`.
- **Valores numéricos:**
  - Sí/no: aprobación médica antes de iniciar.
  - Duración: muchas hierbas requieren semanas/meses.
  - Dosis: seguir etiqueta o médico; no aumentar por cuenta propia.
- **Condiciones de aplicación:** todos los suplementos; especial precaución en embarazo, lactancia, medicación crónica.
- **Capítulos/páginas:** cap. 2, pp. 48-49, 71-72.
- **Comentarios/precauciones:** “natural” no implica seguro. ⚠️ El sistema no debe recetar suplementos automáticamente.

---

### Regla: supp_ginkgo

- **Descripción breve:** ginkgo biloba estandarizado puede apoyar flujo sanguíneo y respuesta sexual, especialmente en problemas circulatorios o disfunción inducida por antidepresivos.
- **Tipo:** suplementación / circulación.
- **Métrica principal:** dosis diaria y duración.
- **Valores numéricos:**
  - Dosis general: 50–100 mg/día.
  - Estudio citado: 60 mg/día durante 6 meses.
  - Estandarización: “24/6”.
  - Tiempo mínimo esperado: al menos 8 semanas.
- **Condiciones de aplicación:** adultos con aprobación médica; precaución con anticoagulantes, aspirina, MAOIs.
- **Capítulos/páginas:** cap. 2, pp. 51-52.
- **Comentarios/precauciones:** no usar hojas sin procesar por alergias; no combinar con anticoagulantes sin supervisión.

---

### Regla: supp_ginseng

- **Descripción breve:** Panax ginseng puede apoyar energía, libido, función eréctil y parámetros seminales en algunos casos.
- **Tipo:** suplementación / energía y función sexual.
- **Métrica principal:** dosis diaria y estandarización.
- **Valores numéricos:**
  - Dosis general: 100–200 mg/día.
  - Estandarización: 4–7% ginsenósidos.
  - Límite de seguridad mencionado: < 300 mg/día.
- **Condiciones de aplicación:** adultos con aprobación médica; puede elevar presión arterial en algunas personas.
- **Capítulos/páginas:** cap. 2, pp. 52-54.
- **Comentarios/precauciones:** usar variedades Panax; productos alimenticios fortificados pueden tener dosis insuficientes.

---

### Regla: supp_black_cohosh

- **Descripción breve:** black cohosh puede reducir síntomas menopáusicos como irritabilidad, ansiedad, bochornos y sequedad vaginal.
- **Tipo:** suplementación / menopausia.
- **Métrica principal:** dosis diaria y duración.
- **Valores numéricos:**
  - Dosis recomendada: 40 mg por dosis.
  - Tiempo para efecto: 2–8 semanas.
  - Umbral de riesgo: evitar dosis > 1000 mg.
- **Condiciones de aplicación:** mujeres menopáusicas con aprobación médica; evitar embarazo y uso concurrente con terapia hormonal sin supervisión.
- **Capítulos/páginas:** cap. 2, p. 55.
- **Comentarios/precauciones:** efectos secundarios posibles en dosis altas: mareo, náusea, dolor de cabeza.

---

### Regla: supp_chasteberry

- **Descripción breve:** chasteberry puede ayudar síntomas de PMS, especialmente sensibilidad mamaria, hinchazón y acné.
- **Tipo:** suplementación / PMS.
- **Métrica principal:** dosis diaria y duración.
- **Valores numéricos:**
  - Dosis: 30–40 mg/día.
  - Duración: varios meses para notar efecto.
- **Condiciones de aplicación:** mujeres con PMS; evitar embarazo y terapia hormonal sin supervisión.
- **Capítulos/páginas:** cap. 2, pp. 55-56.
- **Comentarios/precauciones:** mecanismo no bien comprendido según el libro.

---

### Regla: supp_kava

- **Descripción breve:** kava kava puede reducir ansiedad y promover relajación sin sedación excesiva en dosis moderadas.
- **Tipo:** suplementación / estrés.
- **Métrica principal:** mg de kavalactones por día.
- **Valores numéricos:**
  - Dosis: 60–200 mg de kavalactones/día, repartidos.
  - Dosis alta ~200 mg: efecto sedante; evitar antes de sexo si se desea actividad.
- **Condiciones de aplicación:** adultos con ansiedad leve/estrés; no combinar con alcohol, ansiolíticos, antidepresivos o medicamentos para resfriado.
- **Capítulos/páginas:** cap. 2, p. 57; cap. 7, pp. 188-189.
- **Comentarios/precauciones:** el libro advierte sobre interacciones y sedación en dosis altas.

---

### Regla: supp_cranberry

- **Descripción breve:** cranberry puede reducir riesgo/recurrencia de infecciones urinarias al dificultar adhesión bacteriana.
- **Tipo:** suplementación / salud urinaria.
- **Métrica principal:** ml de jugo o mg de extracto.
- **Valores numéricos:**
  - Estudio citado: 300 ml/día de jugo.
  - Cápsulas: 400 mg/día.
  - Uso sintomático/preventivo del libro: 16 oz/día si hay síntomas; 8 oz/día para prevención.
- **Condiciones de aplicación:** personas propensas a UTI; consultar médico si síntomas activos.
- **Capítulos/páginas:** cap. 2, pp. 58-59.
- **Comentarios/precauciones:** jugos azucarados pueden contrarrestar beneficio; suplementos pueden preferirse.

---

### Regla: supp_saw_palmetto

- **Descripción breve:** saw palmetto puede mejorar síntomas urinarios asociados a hipertrofia prostática benigna.
- **Tipo:** suplementación / próstata.
- **Métrica principal:** dosis diaria y duración.
- **Valores numéricos:**
  - Dosis: 160 mg dos veces al día.
  - Tiempo para efecto: 2–3 meses.
- **Condiciones de aplicación:** hombres diagnosticados o evaluados para BPH; descartar cáncer de próstata con médico.
- **Capítulos/páginas:** cap. 2, pp. 59-60.
- **Comentarios/precauciones:** puede aliviar síntomas sin reducir tamaño prostático; seguimiento médico necesario.

---

### Regla: supp_avoid_no_category

- **Descripción breve:** evitar suplementos/sustancias clasificadas como ineficaces o peligrosas.
- **Tipo:** suplementación / seguridad.
- **Métrica principal:** uso sí/no.
- **Valores numéricos:**
  - Evitar: partes animales como “tiger penis”, cuerno de rinoceronte, testículos de oso, astas, Spanish fly, yohimbe sin supervisión médica.
- **Condiciones de aplicación:** todos los usuarios.
- **Capítulos/páginas:** cap. 2, pp. 64-66.
- **Comentarios/precauciones:** Spanish fly puede causar daño grave; yohimbe tiene efectos adversos serios. La yohimbina prescrita puede usarse bajo supervisión médica.

---

### Regla: med_review_sexual_side_effects

- **Descripción breve:** si hay disfunción sexual y el usuario toma medicamentos comunes, revisar posibles efectos secundarios con médico.
- **Tipo:** medicación / seguridad.
- **Métrica principal:** `medicationSexualSideEffectRisk`.
- **Valores numéricos:**
  - Cualitativo: alto si usa antihipertensivos, antidepresivos, antiulcerosos, antihistamínicos, etc.
  - Dato del libro: aproximadamente 1 de cada 4 casos de disfunción eréctil puede estar relacionado con medicamentos.
- **Condiciones de aplicación:** usuarios con quejas sexuales nuevas o persistentes y medicación crónica.
- **Capítulos/páginas:** cap. 3, pp. 75-76.
- **Comentarios/precauciones:** no suspender medicación sin médico.

---

### Regla: med_no_abrupt_stop

- **Descripción breve:** nunca suspender ni reducir medicación prescrita por efectos sexuales sin supervisión profesional.
- **Tipo:** medicación / seguridad.
- **Métrica principal:** `stopMedicationWithoutClinician = false`.
- **Valores numéricos:** no aplica.
- **Condiciones de aplicación:** todos los usuarios con medicación prescrita.
- **Capítulos/páginas:** cap. 3, p. 80.
- **Comentarios/precauciones:** prioridad de salud general sobre función sexual puntual.

---

### Regla: med_antihypertensive_strategy

- **Descripción breve:** en usuarios con antihipertensivos y disfunción sexual, sugerir revisión médica de clases farmacológicas.
- **Tipo:** medicación / cardiovascular.
- **Métrica principal:** clase de antihipertensivo.
- **Valores numéricos:**
  - Mayor riesgo sexual mencionado: diuréticos, beta-bloqueadores, alpha-bloqueadores, alpha-antagonistas.
  - Alternativas a discutir: inhibidores ACE y bloqueadores de canales de calcio.
- **Condiciones de aplicación:** usuarios con hipertensión y quejas sexuales.
- **Capítulos/páginas:** cap. 3, pp. 76-77.
- **Comentarios/precauciones:** decisión exclusivamente médica.

---

### Regla: med_ssri_strategy

- **Descripción breve:** si un SSRI afecta libido/orgasmo, discutir alternativas o estrategias de timing con médico.
- **Tipo:** medicación / salud mental.
- **Métrica principal:** presencia de efectos sexuales por SSRI.
- **Valores numéricos:**
  - Estrategias: dosis menor, sexo antes de la dosis cuando niveles son más bajos, “drug holidays” solo con aprobación médica, cambio a bupropion o St. John’s wort bajo supervisión.
- **Condiciones de aplicación:** usuarios con depresión/ansiedad tratados con SSRI.
- **Capítulos/páginas:** cap. 3, pp. 77-80.
- **Comentarios/precauciones:** St. John’s wort no debe combinarse con antidepresivos sin supervisión.

---

### Regla: med_hormone_therapy_gate

- **Descripción breve:** terapia hormonal solo si hay deficiencia documentada y supervisión médica.
- **Tipo:** medicación / endocrino.
- **Métrica principal:** niveles hormonales y criterio clínico.
- **Valores numéricos:**
  - No hay umbral numérico universal en el libro; requiere prueba y evaluación.
  - TRT no mejora disfunción eréctil si no hay déficit de testosterona.
  - Nobeneficio si testosterona normal/alta; riesgo de efectos adversos.
- **Condiciones de aplicación:** hombres/mujeres con síntomas de deficiencia hormonal, menopausia, ooforectomía, andropausia controversial.
- **Capítulos/páginas:** cap. 3, pp. 80-86.
- **Comentarios/precauciones:** monitoreo médico obligatorio; discutir riesgos de cáncer, colesterol, hígado, próstata según caso.

---

### Regla: med_pde5_gate

- **Descripción breve:** inhibidores PDE5 como Viagra requieren prescripción, estimulación sexual y evaluación cardiovascular.
- **Tipo:** medicación / función eréctil.
- **Métrica principal:** elegibilidad médica.
- **Valores numéricos:**
  - No aplica dosis específica; el libro menciona iniciar dosis recomendada y ajustar con médico.
- **Condiciones de aplicación:** hombres con disfunción eréctil; no usar con nitratos o enfermedad cardíaca que contraindique esfuerzo sexual.
- **Capítulos/páginas:** cap. 3, pp. 90-92.
- **Comentarios/precauciones:** no funciona si no hay excitación; puede fallar en neuropatía diabética, daño vascular o tabaquismo.

---

### Regla: subst_nicotine_stop

- **Descripción breve:** cesar tabaco para mejorar circulación, función eréctil, salud hormonal y fertilidad.
- **Tipo:** sustancias / cardiovascular.
- **Métrica principal:** `smokingStatus = never/former`.
- **Valores numéricos:**
  - Riesgo: fumadores masculinos tienen aproximadamente doble riesgo de disfunción eréctil vs no fumadores.
  - Mujeres fumadoras: más ciclos irregulares, sangrados anómalos y menopausia temprana.
- **Condiciones de aplicación:** cualquier fumador.
- **Capítulos/páginas:** cap. 3, pp. 93-94.
- **Comentarios/precauciones:** beneficio independiente de edad o historial de tabaquismo.

---

### Regla: subst_alcohol_limit

- **Descripción breve:** limitar alcohol para evitar deterioro de excitación, erección, lubricación y orgasmo.
- **Tipo:** sustancias / recuperación.
- **Métrica principal:** bebidas estándar por día.
- **Valores numéricos:**
  - Consumo ligero: 0–2 bebidas/día puede ser aceptable.
  - Consumo pesado: ≥ 4 bebidas/día se considera dañino.
  - Efecto agudo: 1–2 bebidas pueden relajar; más aumenta dificultad de erección/eyaculación y retrasa orgasmo.
- **Condiciones de aplicación:** adultos que consuman alcohol.
- **Capítulos/páginas:** cap. 3, pp. 95-96.
- **Comentarios/precauciones:** alcoholismo causa daño permanente a testosterona, sistema nervioso, fertilidad y menstruación.

---

### Regla: subst_caffeine_limit

- **Descripción breve:** mantener cafeína moderada para obtener energía sin afectar sueño, hormonas o ansiedad.
- **Tipo:** sustancias / energía/sueño.
- **Métrica principal:** mg de cafeína por día.
- **Valores numéricos:**
  - Moderado: 200–300 mg/día, aproximadamente 2 tazas de café o 4 latas de refresco de cola.
  - Riesgo: consumo mayor puede alterar hormonas, sueño, ansiedad y PMS.
- **Condiciones de aplicación:** consumidores de cafeína; especial cuidado en ansiedad, insomnio, PMS.
- **Capítulos/páginas:** cap. 3, pp. 96-97.
- **Comentarios/precauciones:** evitar cerca de la hora de dormir; ver regla de sueño.

---

### Regla: ex_base_volume

- **Descripción breve:** objetivo base de ejercicio cardiovascular para salud sexual.
- **Tipo:** ejercicio / frecuencia-volumen.
- **Métrica principal:** minutos/semana y sesiones/semana.
- **Valores numéricos:**
  - Rango óptimo: al menos 30 minutos, 3–4 veces por semana.
  - Programa de 30 días: ejercicio recomendado al menos 4 días/semana: sábados, domingos, martes y jueves; lunes opcional.
- **Condiciones de aplicación:** adultos generales; progresar gradualmente.
- **Capítulos/páginas:** cap. 5, p. 134; 30-Day Program, p. 220.
- **Comentarios/precauciones:** el objetivo es adherencia y salud cardiovascular, no rendimiento máximo.

---

### Regla: ex_beginner_lifestyle

- **Descripción breve:** principiantes pueden iniciar con “lifestyle activity” de 30 minutos/día antes de ejercicio estructurado.
- **Tipo:** ejercicio / progresión.
- **Métrica principal:** minutos diarios de actividad incidental.
- **Valores numéricos:**
  - 30 minutos/día de actividades como caminar, subir escaleras, jardinería, limpiar, rastrillar hojas.
- **Condiciones de aplicación:** usuarios sedentarios, sin tiempo, que rechazan ejercicio estructurado o con baja adherencia.
- **Capítulos/páginas:** cap. 5, pp. 136-137.
- **Comentarios/precauciones:** el libro indica beneficios similares a ejercicio estructurado en algunos estudios.

---

### Regla: ex_walking

- **Descripción breve:** caminar regularmente como intervención cardiovascular de bajo riesgo.
- **Tipo:** ejercicio / cardiovascular.
- **Métrica principal:** distancia/tiempo caminado.
- **Valores numéricos:**
  - Estudio citado: reducción de riesgo cardíaco de 15% por cada media milla en hombres mayores.
  - Mujeres: caminar regularmente ≥ 3 horas/semana a paso rápido reduce incidencia de enfermedad cardíaca.
- **Condiciones de aplicación:** usuarios que necesitan base aeróbica, adultos mayores, bajo riesgo de lesión.
- **Capítulos/páginas:** cap. 5, pp. 134-135.
- **Comentarios/precauciones:** no prescribe velocidad exacta; usar paso cómodo y progresivo.

---

### Regla: ex_moderate_intensity

- **Descripción breve:** ejercicio moderado es suficiente para beneficios cardiovasculares y de estado de ánimo.
- **Tipo:** ejercicio / intensidad.
- **Métrica principal:** intensidad percibida.
- **Valores numéricos:**
  - Cualitativo: moderado incluye caminar rápido, trote suave, pesas, aeróbicos, natación, ciclismo, deportes.
  - El libro afirma que riesgo cardíaco se reduce de manera similar con intensidad moderada que alta.
- **Condiciones de aplicación:** usuarios generales; especialmente útil para adherencia.
- **Capítulos/páginas:** cap. 5, pp. 134-138.
- **Comentarios/precauciones:** no usar para reemplazar entrenamiento de fuerza avanzado.

---

### Regla: ex_strength_flexibility_support

- **Descripción breve:** incluir fuerza, flexibilidad y estiramientos como soporte general.
- **Tipo:** ejercicio / complemento.
- **Métrica principal:** sesiones de fuerza/flexibilidad por semana.
- **Valores numéricos:**
  - Cualitativo: el libro menciona entrenamiento de peso, estiramientos, yoga/tai chi como opciones.
  - Calentamiento: ~5 minutos antes; estiramiento ≥ 5 minutos después.
- **Condiciones de aplicación:** usuarios generales.
- **Capítulos/páginas:** cap. 5, pp. 132-133, 137-138.
- **Comentarios/precauciones:** no hay series/repeticiones; no modelar como programa de hipertrofia.

---

### Regla: ex_sleep_timing

- **Descripción breve:** evitar ejercicio intenso tarde para no retrasar sueño.
- **Tipo:** ejercicio / sueño.
- **Métrica principal:** horas entre ejercicio y dormir.
- **Valores numéricos:**
  - Ideal: ejercitar al menos 6 horas antes de acostarse.
  - Riesgo: ejercicio nocturno 3–4 horas antes puede retrasar sueño hasta 40 minutos.
- **Condiciones de aplicación:** usuarios con insomnio o sueño sensible.
- **Capítulos/páginas:** cap. 6, p. 160.
- **Comentarios/precauciones:** ejercicio temprano mejora sueño; si solo se puede entrenar de noche, priorizar consistencia pero vigilar sueño.

---

### Regla: ex_weight_balance

- **Descripción breve:** mantener peso dentro de rango saludable sin extremos.
- **Tipo:** ejercicio / composición corporal.
- **Métrica principal:** peso/IMC/grasa corporal.
- **Valores numéricos:**
  - Rango: usar tablas de peso recomendado por altura; el libro usa Metropolitan Life como referencia aproximada.
  - Pérdida de peso: acercarse a ≤ 10 libras del peso objetivo se asoció con mayor interés/actividad sexual.
- **Condiciones de aplicación:** usuarios con sobrepeso u bajo peso significativos.
- **Capítulos/páginas:** cap. 5, pp. 138-143.
- **Comentarios/precauciones:** no fomentar obsesión con báscula; el libro sugiere usar ropa como indicador y evitar pesajes desmotivantes.

---

### Regla: ex_extremes_caution

- **Descripción breve:** evitar extremos de ejercicio o peso porque pueden reducir libido/fertilidad.
- **Tipo:** ejercicio / seguridad.
- **Métrica principal:** carga total y peso corporal.
- **Valores numéricos:**
  - Cualitativo: ni sobreentrenamiento severo ni bajo peso severo.
- **Condiciones de aplicación:** usuarios con entrenamiento muy intenso, pérdida de peso agresiva o bajo peso.
- **Capítulos/páginas:** cap. 5, pp. 139, 142-143.
- **Comentarios/precauciones:** ⚠️ el libro no define umbral exacto de sobreentrenamiento; usar fatiga, sueño, dolor y rendimiento como señales.

---

### Regla: sleep_duration

- **Descripción breve:** dormir suficiente para proteger energía, libido, testosterona y fertilidad.
- **Tipo:** sueño / duración.
- **Métrica principal:** horas de sueño por noche.
- **Valores numéricos:**
  - Promedio recomendado: ~8 horas.
  - Rango individual: 6–9 puede ser válido según persona.
  - Umbral de consulta: < 5 horas regularmente.
- **Condiciones de aplicación:** todos los usuarios; ajustar según energía diurna.
- **Capítulos/páginas:** cap. 6, pp. 146-147.
- **Comentarios/precauciones:** privación de sueño reduce testosterona y deseo.

---

### Regla: sleep_latency

- **Descripción breve:** usar latencia de sueño como señal de deuda de sueño.
- **Tipo:** sueño / calidad.
- **Métrica principal:** minutos para dormir.
- **Valores numéricos:**
  - Normal: ~15 minutos.
  - Riesgo: dormirse inmediatamente indica deuda de sueño.
- **Condiciones de aplicación:** usuarios que registran sueño.
- **Capítulos/páginas:** cap. 6, p. 147.
- **Comentarios/precauciones:** no confundir con eficiencia extrema; contexto importa.

---

### Regla: sleep_sss_alertness

- **Descripción breve:** usar Stanford Sleepiness Scale para detectar somnolencia excesiva.
- **Tipo:** sueño / evaluación.
- **Métrica principal:** SSS score 1–7.
- **Valores numéricos:**
  - Umbral: puntaje consistentemente < 3 sugiere sueño insuficiente.
  - Ideal: sentirse alerta en la mayoría de momentos del día.
- **Condiciones de aplicación:** usuarios con fatiga, baja libido o bajo rendimiento.
- **Capítulos/páginas:** cap. 6, pp. 147-148.
- **Comentarios/precauciones:** la escala original no se copia; modelar como score subjetivo.

---

### Regla: sleep_schedule

- **Descripción breve:** mantener horarios constantes de dormir y despertar.
- **Tipo:** sueño / ritmo circadiano.
- **Métrica principal:** variabilidad horaria.
- **Valores numéricos:**
  - Cualitativo: misma hora todos los días, incluidos fines de semana.
  - Programa: en fines de semana no alterar más de 1–2 horas.
- **Condiciones de aplicación:** usuarios con insomnio, jet lag o energía irregular.
- **Capítulos/páginas:** cap. 6, p. 156; Day 8, p. 215.
- **Comentarios/precauciones:** viajes y turnos nocturnos requieren adaptación específica.

---

### Regla: sleep_nap_limit

- **Descripción breve:** limitar siestas para no interferir con sueño nocturno.
- **Tipo:** sueño / siestas.
- **Métrica principal:** minutos de siesta.
- **Valores numéricos:**
  - Si hay insomnio: evitar siestas.
  - Si no hay insomnio: máximo 30 minutos/día.
- **Condiciones de aplicación:** usuarios con fatiga diurna o insomnio.
- **Capítulos/páginas:** cap. 6, p. 156; Day 12, p. 225.
- **Comentarios/precauciones:** siestas largas pueden confundir reloj biológico.

---

### Regla: sleep_bedroom_context

- **Descripción breve:** reservar cama/dormitorio para sueño y sexo, eliminando trabajo, pantallas y conflictos.
- **Tipo:** sueño / ambiente.
- **Métrica principal:** número de actividades no sexuales/no sueño en cama.
- **Valores numéricos:**
  - Ideal: 0 actividades de trabajo/estrés en cama.
- **Condiciones de aplicación:** usuarios con insomnio, estrés o baja intimidad.
- **Capítulos/páginas:** cap. 4, p. 121; cap. 6, p. 157; Day 23, p. 250.
- **Comentarios/precauciones:** usar divisores si el espacio es pequeño.

---

### Regla: sleep_environment

- **Descripción breve:** optimizar ruido, luz, temperatura, colchón y almohada.
- **Tipo:** sueño / ambiente.
- **Métrica principal:** checklist de ambiente.
- **Valores numéricos:**
  - Temperatura óptima: ~65°F.
  - Ruido: minimizar; usar tapones, ruido blanco o música suave.
  - Luz: oscuridad; usar cortinas o máscara.
- **Condiciones de aplicación:** todos los usuarios.
- **Capítulos/páginas:** cap. 6, pp. 157-159.
- **Comentarios/precauciones:** colchón/almohada incómodos pueden causar despertares.

---

### Regla: sleep_light_exposure

- **Descripción breve:** usar luz solar para regular ritmo circadiano.
- **Tipo:** sueño / circadiano.
- **Métrica principal:** minutos de luz solar matutina.
- **Valores numéricos:**
  - Recomendado: al menos 20 minutos de sol al despertar.
  - Usuarios mayores: visores de luz 30 minutos/día bajo supervisión médica.
- **Condiciones de aplicación:** usuarios con sueño irregular, turnos nocturnos o baja exposición solar.
- **Capítulos/páginas:** cap. 6, p. 159.
- **Comentarios/precauciones:** visores no son camas de bronceado; supervisión médica en ancianos.

---

### Regla: sleep_stimulant_cutoff

- **Descripción breve:** evitar estimulantes antes de dormir.
- **Tipo:** sueño / sustancias.
- **Métrica principal:** horas entre estimulante y cama.
- **Valores numéricos:**
  - Cafeína/nicotina: evitar dentro de 6 horas antes de dormir.
- **Condiciones de aplicación:** usuarios con insomnio o despertares.
- **Capítulos/páginas:** cap. 6, pp. 160-161.
- **Comentarios/precauciones:** cafeína también aumenta micción nocturna.

---

### Regla: sleep_alcohol_cutoff

- **Descripción breve:** no usar alcohol como ayuda para dormir.
- **Tipo:** sueño / sustancias.
- **Métrica principal:** consumo nocturno.
- **Valores numéricos:**
  - Recomendación: evitar alcohol después de las 7 p.m. si se busca sueño sólido.
- **Condiciones de aplicación:** usuarios con despertares tempranos o sueño fragmentado.
- **Capítulos/páginas:** cap. 6, p. 161.
- **Comentarios/precauciones:** alcohol causa efecto rebote y reduce sueño profundo.

---

### Regla: sleep_food_fluid

- **Descripción breve:** moderar comida y líquidos cercanos a la cama.
- **Tipo:** sueño / nutrición.
- **Métrica principal:** volumen/timing de ingesta nocturna.
- **Valores numéricos:**
  - Cualitativo: evitar comidas grandes; si hay hambre, snack pequeño alto en proteína/bajo en carbohidratos, como nueces.
  - Líquidos: restringir justo antes de dormir.
- **Condiciones de aplicación:** usuarios con reflujo, despertares o hambre nocturna.
- **Capítulos/páginas:** cap. 6, pp. 161-162.
- **Comentarios/precauciones:** no ir a la cama demasiado lleno ni con hambre.

---

### Regla: sleep_warm_feet

- **Descripción breve:** mantener pies calientes puede facilitar inicio del sueño.
- **Tipo:** sueño / termorregulación.
- **Métrica principal:** uso de calcetines/bolsa caliente.
- **Valores numéricos:**
  - Cualitativo: pies calientes antes de dormir.
- **Condiciones de aplicación:** adultos mayores o personas con pies fríos.
- **Capítulos/páginas:** cap. 6, p. 162.
- **Comentarios/precauciones:** regla simple de bajo riesgo.

---

### Regla: sleep_natural_aids

- **Descripción breve:** considerar melatonina o valeriana como ayuda puntual, no crónica.
- **Tipo:** sueño / suplementación.
- **Métrica principal:** dosis y timing.
- **Valores numéricos:**
  - Melatonina: 2–3 mg aproximadamente 30 minutos antes de dormir.
  - Valeriana: dosis según fabricante, ~1 hora antes de dormir.
- **Condiciones de aplicación:** jet lag, insomnio breve, turnos o envejecimiento; con precaución.
- **Capítulos/páginas:** cap. 6, pp. 162-163.
- **Comentarios/precauciones:** evitar pastillas para dormir crónicas; pueden afectar deseo/respuesta sexual.

---

### Regla: sleep_apnea_redflag

- **Descripción breve:** ronquido crónico, pausas respiratorias o somnolencia diurna requieren evaluación médica.
- **Tipo:** sueño / red flag.
- **Métrica principal:** presencia de síntomas de apnea.
- **Valores numéricos:**
  - Cualitativo: si hay ronquido, pausas respiratorias, despertares frecuentes, sueño diurno excesivo, baja libido o disfunción, consultar.
  - Dato del libro: 44% con trastornos respiratorios del sueño reportan baja libido y/o disfunción eréctil.
- **Condiciones de aplicación:** usuarios con mala calidad de sueño y síntomas sexuales.
- **Capítulos/páginas:** cap. 6, pp. 151-152.
- **Comentarios/precauciones:** no diagnosticar; derivar.

---

### Regla: stress_breathing

- **Descripción breve:** usar respiración profunda para desactivar respuesta de lucha/huida.
- **Tipo:** estrés / regulación autonómica.
- **Métrica principal:** minutos/día de respiración.
- **Valores numéricos:**
  - Práctica regular: 5 minutos, 2 veces/día.
  - Técnica puntual: una respiración profunda en momentos de estrés.
- **Condiciones de aplicación:** usuarios con ansiedad, tensión o dificultad para dormir.
- **Capítulos/páginas:** cap. 7, pp. 178-180.
- **Comentarios/precauciones:** base para meditación, visualización y sexo tántrico.

---

### Regla: stress_meditation

- **Descripción breve:** meditación diaria para reducir presión arterial, frecuencia cardíaca y estrés.
- **Tipo:** estrés / mente-cuerpo.
- **Métrica principal:** minutos/día.
- **Valores numéricos:**
  - Entorno: 15 minutos sin interrupción.
  - Práctica mínima: al menos 10 minutos/día.
- **Condiciones de aplicación:** usuarios con estrés crónico, ansiedad o distracción durante sexo.
- **Capítulos/páginas:** cap. 7, pp. 181-182.
- **Comentarios/precauciones:** puede iniciarse con clase o guía.

---

### Regla: stress_yoga

- **Descripción breve:** yoga como práctica de respiración, movilidad suave y reducción de estrés.
- **Tipo:** estrés / movimiento suave.
- **Métrica principal:** minutos por sesión.
- **Valores numéricos:**
  - Programa: 30 minutos por sesión.
  - Frecuencia: varias veces por semana; idealmente regular.
- **Condiciones de aplicación:** usuarios que necesiten movilidad suave y estrés; principiantes con clase.
- **Capítulos/páginas:** cap. 7, pp. 181-182; 30-Day Program, p. 239.
- **Comentarios/precauciones:** evitar sobreestiramientos; no comer al menos 1 hora antes.

---

### Regla: stress_visualization

- **Descripción breve:** visualización para reducir ansiedad y mejorar foco sexual.
- **Tipo:** estrés / cognitivo.
- **Métrica principal:** minutos por sesión.
- **Valores numéricos:**
  - Duración: 5–10 minutos o más.
- **Condiciones de aplicación:** usuarios con ansiedad de rendimiento, dificultad orgásmica o distracción.
- **Capítulos/páginas:** cap. 4, pp. 123-124; cap. 7, pp. 182-183.
- **Comentarios/precauciones:** sin expectativa de rendimiento; usar imaginación detallada.

---

### Regla: stress_massage

- **Descripción breve:** masaje breve regular para reducir tensión y aumentar oxitocina.
- **Tipo:** estrés / tacto.
- **Métrica principal:** minutos y frecuencia.
- **Valores numéricos:**
  - Inicial: 5 minutos.
  - Habitual: 5–10 minutos varias veces por semana.
  - Ocasional: masaje profesional.
- **Condiciones de aplicación:** parejas o individuos con tensión, estrés o baja conexión corporal.
- **Capítulos/páginas:** cap. 4, pp. 100-101, 104-107; cap. 7, p. 184.
- **Comentarios/precauciones:** no exigir masajes largos; evitar dolor, uñas, pelo o presión excesiva.

---

### Regla: stress_laughter

- **Descripción breve:** reír intencionalmente para reducir hormonas de estrés y tensión muscular.
- **Tipo:** estrés / humor.
- **Métrica principal:** minutos/día o episodios de risa.
- **Valores numéricos:**
  - Programa: al menos 5 minutos de risa.
- **Condiciones de aplicación:** usuarios estresados o con bajo ánimo.
- **Capítulos/páginas:** cap. 7, pp. 184-185; Day 10, p. 220.
- **Comentarios/precauciones:** cualitativo; usar comedia, amigos, juegos.

---

### Regla: stress_nature

- **Descripción breve:** exposición a naturaleza o elementos naturales para calmar.
- **Tipo:** estrés / ambiente.
- **Métrica principal:** tiempo en naturaleza o exposición diaria.
- **Valores numéricos:**
  - Cualitativo: tomar momentos diarios para naturaleza; si no es posible, plantas, flores o sonidos naturales.
- **Condiciones de aplicación:** usuarios urbanos o estresados.
- **Capítulos/páginas:** cap. 7, pp. 185-186.
- **Comentarios/precauciones:** no hay minutos exactos.

---

### Regla: stress_music

- **Descripción breve:** usar música calmante o positiva para reducir cortisol y mejorar ánimo.
- **Tipo:** estrés / sonido.
- **Métrica principal:** sesiones de escucha.
- **Valores numéricos:**
  - Cualitativo: escuchar música simple, repetitiva y de bajo tono; o música que induzca estado sexual positivo.
- **Condiciones de aplicación:** usuarios con ansiedad, insomnio o necesidad de transición al descanso/sexo.
- **Capítulos/páginas:** cap. 4, pp. 116-118; cap. 7, pp. 186-187.
- **Comentarios/precauciones:** la música negativa puede reducir excitación.

---

### Regla: stress_aromatherapy

- **Descripción breve:** usar aromas para relajación o estimulación sensual.
- **Tipo:** estrés / olfato.
- **Métrica principal:** uso de aromas.
- **Valores numéricos:**
  - Cualitativo: velas, difusores, baño, aceites esenciales diluidos.
  - Aromas relajantes: lavanda, naranja, bergamota, manzanilla, cedro, ylang ylang.
- **Condiciones de aplicación:** usuarios que respondan bien a estímulos olfativos.
- **Capítulos/páginas:** cap. 4, pp. 110-112; cap. 7, p. 187.
- **Comentarios/precauciones:** no ingerir aceites esenciales; no usar directamente en genitales ni como lubricante.

---

### Regla: stress_warm_water

- **Descripción breve:** baños calientes para relajar músculo, dilatar vasos y preparar sueño.
- **Tipo:** estrés / termorregulación.
- **Métrica principal:** sesiones de baño caliente.
- **Valores numéricos:**
  - Cualitativo: baño caliente antes de dormir o como ritual sensual.
- **Condiciones de aplicación:** usuarios con tensión o dificultad para dormir.
- **Capítulos/páginas:** cap. 7, pp. 187-188.
- **Comentarios/precauciones:** hidratación por sudoración; evitar agua excesivamente caliente.

---

### Regla: stress_herbs

- **Descripción breve:** considerar hierbas calmantes con precaución.
- **Tipo:** estrés / suplementación.
- **Métrica principal:** dosis según suplemento.
- **Valores numéricos:**
  - Manzanilla: té según necesidad; precaución en alérgicos a asteráceas.
  - Kava: 60–120 mg/día o dosis del libro anterior; no combinar con CNS depressors.
  - St. John’s wort: 300 mg tres veces/día durante ~4 semanas para depresión leve/moderada; no con antidepresivos.
- **Condiciones de aplicación:** usuarios con estrés/ánimo bajo y aprobación médica.
- **Capítulos/páginas:** cap. 7, pp. 188-189.
- **Comentarios/precauciones:** ⚠️ no automatizar sin revisión médica; interacciones relevantes.

---

### Regla: stress_social_support

- **Descripción breve:** hablar de problemas para reducir carga de estrés.
- **Tipo:** estrés / social.
- **Métrica principal:** conversaciones significativas por semana.
- **Valores numéricos:**
  - Cualitativo: compartir preocupaciones regularmente con pareja, amigo, familiar o profesional.
- **Condiciones de aplicación:** usuarios con estrés crónico o aislamiento.
- **Capítulos/páginas:** cap. 7, pp. 175-176.
- **Comentarios/precauciones:** terapia profesional no debe estigmatizarse.

---

### Regla: stress_daily_break

- **Descripción breve:** reservar tiempo diario para placer personal.
- **Tipo:** estrés / recuperación.
- **Métrica principal:** minutos/día.
- **Valores numéricos:**
  - Mínimo: 20 minutos/día para actividad placentera.
- **Condiciones de aplicación:** usuarios con alta carga laboral/familiar.
- **Capítulos/páginas:** cap. 7, p. 177.
- **Comentarios/precauciones:** consistencia importa más que recompensas ocasionales.

---

### Regla: stress_date_night

- **Descripción breve:** agendar tiempo semanal de pareja sin expectativa de sexo.
- **Tipo:** estrés / intimidad.
- **Métrica principal:** citas por semana.
- **Valores numéricos:**
  - Frecuencia: ~1 vez/semana.
  - Agenda: conexión, diversión; sin expectativa obligatoria de sexo.
- **Condiciones de aplicación:** parejas con estrés, hijos o rutina.
- **Capítulos/páginas:** cap. 7, pp. 174-175; 30-Day Program, pp. 208, 213-215, 239, 261-263.
- **Comentarios/precauciones:** espontaneidad puede fallar; programar es válido.

---

### Regla: sens_nonsexual_touch

- **Descripción breve:** practicar tacto no sexual para intimidad, confianza y reducción de presión.
- **Tipo:** estimulación sensual / intimidad.
- **Métrica principal:** episodios de tacto no sexual.
- **Valores numéricos:**
  - Cualitativo: abrazos, besos, caricias, baile, mano en hombro, sin meta sexual.
- **Condiciones de aplicación:** parejas con ansiedad de rendimiento o baja conexión.
- **Capítulos/páginas:** cap. 4, p. 104.
- **Comentarios/precauciones:** no usar como transacción para sexo.

---

### Regla: sens_massage

- **Descripción breve:** masajes cortos regulares para reactivar sensibilidad y transición al sexo.
- **Tipo:** estimulación sensual / tacto.
- **Métrica principal:** minutos y frecuencia.
- **Valores numéricos:**
  - 5–10 minutos varias veces por semana.
  - Ocasionalmente 30 minutos.
- **Condiciones de aplicación:** parejas estresadas o con baja sensibilidad corporal.
- **Capítulos/páginas:** cap. 4, pp. 100-101, 104-107.
- **Comentarios/precauciones:** mantener expectativas bajas para adherencia.

---

### Regla: sens_smell

- **Descripción breve:** usar olores agradables para relajación o excitación.
- **Tipo:** estimulación sensual / olfato.
- **Métrica principal:** exposición a aromas.
- **Valores numéricos:**
  - Cualitativo: velas, comidas aromáticas, perfumes, aceites.
  - Olores con respuesta fisiológica citada: pastel de calabaza, lavanda, regaliz negro para hombres; regaliz y pepino, polvo de bebé, lavanda, pastel de calabaza para mujeres.
- **Condiciones de aplicación:** usuarios que respondan a estímulos olfativos.
- **Capítulos/páginas:** cap. 4, pp. 108-110.
- **Comentarios/precauciones:** efectos dependen de asociación personal; no usar como garantía.

---

### Regla: sens_taste

- **Descripción breve:** incorporar alimentos y sabores como juego sensual.
- **Tipo:** estimulación sensual / gusto.
- **Métrica principal:** uso de alimentos en contexto sensual.
- **Valores numéricos:**
  - Cualitativo: alimentar al otro, comer alimentos eróticos, usar menta para sexo oral por sensación de hormigueo.
- **Condiciones de aplicación:** parejas que disfrutan juego sensorial.
- **Capítulos/páginas:** cap. 4, pp. 115-116.
- **Comentarios/precauciones:** evitar alimentos irritantes o alergénicos en genitales.

---

### Regla: sens_sound

- **Descripción breve:** usar música o sonidos para inducir estado relajado/erótico.
- **Tipo:** estimulación sensual / sonido.
- **Métrica principal:** sesiones de audio.
- **Valores numéricos:**
  - Cualitativo: música positiva, naturaleza, silencio, vocalización.
- **Condiciones de aplicación:** usuarios con dificultad para desconectar o excitarse.
- **Capítulos/páginas:** cap. 4, pp. 116-118.
- **Comentarios/precauciones:** música negativa puede reducir excitación.

---

### Regla: sens_sight

- **Descripción breve:** optimizar luz, color, orden y contacto visual.
- **Tipo:** estimulación sensual / visión.
- **Métrica principal:** ambiente visual.
- **Valores numéricos:**
  - Cualitativo: luz suave, velas, colores adecuados, eliminar desorden, contacto visual progresivo.
- **Condiciones de aplicación:** usuarios con vergüenza corporal, distracción o ambiente poco erótico.
- **Capítulos/páginas:** cap. 4, pp. 119-123.
- **Comentarios/precauciones:** dormitorio debe asociarse con descanso/sexo, no trabajo.

---

### Regla: sens_eye_contact

- **Descripción breve:** aumentar contacto visual durante intimidad para conexión.
- **Tipo:** estimulación sensual / intimidad.
- **Métrica principal:** minutos de contacto visual.
- **Valores numéricos:**
  - Progresión: comenzar con pocos minutos durante foreplay; aumentar gradualmente.
- **Condiciones de aplicación:** parejas cómodas con vulnerabilidad.
- **Capítulos/páginas:** cap. 4, p. 122.
- **Comentarios/precauciones:** puede sentirse incómodo al inicio; avanzar con consentimiento.

---

### Regla: sens_tantra

- **Descripción breve:** prácticas tántricas para ralentizar y aumentar conciencia sensorial.
- **Tipo:** estimulación sensual / intimidad.
- **Métrica principal:** ejercicios por sesión.
- **Valores numéricos:**
  - Cualitativo: ritual, respiración sincronizada, mirada, quietud, sexo sin orgasmo como meta.
- **Condiciones de aplicación:** parejas que buscan profundidad y reducir ansiedad de rendimiento.
- **Capítulos/páginas:** cap. 4, pp. 124-126.
- **Comentarios/precauciones:** no usar como técnica para forzar orgasmo.

---

### Regla: program_30day_structure

- **Descripción breve:** el programa de 30 días estructura hábitos diarios en siete dominios.
- **Tipo:** programa / adherencia.
- **Métrica principal:** checklist diario.
- **Valores numéricos:**
  - Duración: 30 días.
  - Inicio: sábado; fines de semana más elaborados.
  - Registro diario: dieta, suplementos, medicación, estimulación sensual, ejercicio, sueño, estrés.
  - Ejercicio: al menos 4 días/semana en el programa.
  - Agua: ≥ 8 vasos diarios.
- **Condiciones de aplicación:** usuarios que necesitan onboarding guiado.
- **Capítulos/páginas:** The 30-Day Sexual Fitness Program, pp. 193-266.
- **Comentarios/precauciones:** si hay desliz, volver al programa sin culpa; postres opcionales; sustituciones permitidas.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: sensory-intimacy-progression

- **Disciplina:** salud sexual / intimidad / educación sensorial.
- **Objetivo final (en palabras del libro):** involucrar todos los sentidos para aumentar presencia, placer y conexión, reduciendo presión de rendimiento.
- **Requisitos de seguridad previos:**
  - Consentimiento explícito.
  - Ausencia de dolor agudo no evaluado.
  - Ambiente seguro y privado.
  - No usar como exposición forzada si hay trauma o ansiedad severa; considerar profesional.
- **Pasos de la progresión:**

| Step | Nombre (parafraseado) | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Tacto no sexual | Abrazos, besos, caricias sin meta sexual. | Ambos se sienten cómodos sin presión. | Usarlo como transacción para sexo. | cap. 4, p. 104 |
| 2 | Masaje breve | Masaje de 5–10 min con ambiente cálido y feedback. | Relajación y comunicación sin dolor. | Presión excesiva, prisa, esperar sexo. | cap. 4, pp. 100-101, 104-107 |
| 3 | Ambiente sensorial | Añadir velas, música, aromas, orden, luz suave. | El ambiente reduce distracción. | Dormitorio lleno de trabajo/pantallas. | cap. 4, pp. 119-122 |
| 4 | Estimulación multisensorial | Integrar olor, gusto, sonido, vista y tacto. | Mayor presencia y placer sin ansiedad. | Sobreestimulación o expectativas altas. | cap. 4, pp. 99-118 |
| 5 | Contacto visual prolongado | Mirada sostenida durante intimidad. | Capacidad de mantener mirada sin incomodidad severa. | Evitar mirada por vergüenza; forzar. | cap. 4, p. 122 |
| 6 | Integración tántrica suave | Respiración sincronizada, lentitud, sin meta orgásmica. | Ambos pueden estar presentes sin urgencia. | Convertirlo en técnica de rendimiento. | cap. 4, pp. 124-126 |

---

### SkillPath: tantric-intimacy

- **Disciplina:** intimidad / sexualidad consciente.
- **Objetivo final:** aumentar conciencia del placer y conexión de pareja, no necesariamente orgasmo.
- **Requisitos de seguridad previos:**
  - Consentimiento.
  - Comunicación previa.
  - Sin dolor no evaluado.
  - Sin presión de desempeño.
- **Pasos de la progresión:**

| Step | Nombre (parafraseado) | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Ritual compartido | Crear un ritual con significado: baño, masaje, regalo, palabras. | Ritual se siente auténtico. | Ritual mecánico o impuesto. | cap. 4, p. 125 |
| 2 | Respiración sincronizada | Respirar en armonía mientras se tocan. | Respiración coordinada sin ansiedad. | Luchar por control de respiración. | cap. 4, p. 125 |
| 3 | Mirada sostenida | Mirar ojos sin apartar mirada durante un tiempo. | Conexión sin incomodidad excesiva. | Reír/evadir por nervios sin avanzar. | cap. 4, p. 125 |
| 4 | Quietud durante encuentro | Detener movimiento cerca del pico y sentir sensaciones. | Capacidad de pausar sin ansiedad. | Convertir pausa en frustración. | cap. 4, p. 125 |
| 5 | Sexo sin orgasmo como meta | Actividad sexual enfocada en sensación, no clímax. | Ambos disfrutan sin urgencia. | Buscar orgasmo como único objetivo. | cap. 4, pp. 125-126 |

---

### SkillPath: sexual-fitness-aerobic-base

- **Disciplina:** ejercicio general / salud cardiovascular.
- **Objetivo final:** lograr actividad moderada regular para apoyar flujo sanguíneo, energía, hormonas y estado de ánimo.
- **Requisitos de seguridad previos:**
  - Descartar contraindicaciones médicas si hay enfermedad cardiovascular, dolor torácico, mareos o sedentarismo extremo.
  - Empezar lento.
- **Pasos de la progresión:**

| Step | Nombre (parafraseado) | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Actividad incidental | Caminar, subir escaleras, tareas domésticas, jardinería. | Acumular 30 min/día sin fatiga excesiva. | No registrar ni progresar. | cap. 5, pp. 136-137 |
| 2 | Caminata estructurada | Caminar con zapatos adecuados, distancia/tiempo crecientes. | Caminar regularmente sin dolor. | Aumentar demasiado rápido. | cap. 5, pp. 134-135 |
| 3 | Cardio moderado | Nadar, bicicleta, baile, aeróbicos, tenis, etc. | 30 min, 3–4 veces/semana. | Monotonía o exceso. | cap. 5, pp. 131-137 |
| 4 | Variedad y fuerza suave | Añadir pesas, yoga, tai chi, estiramientos. | Mantener adherencia y recuperación. | Ignorar dolor o descanso. | cap. 5, pp. 132-138 |
| 5 | Mantenimiento y auto-regulación | Ajustar intensidad según energía, sueño y estrés. | Consistencia sin sobreentrenamiento. | Extremos de ejercicio. | cap. 5, pp. 139-143 |

---

### SkillPath: sleep-recovery-routine

- **Disciplina:** recuperación / sueño.
- **Objetivo final:** restaurar sueño suficiente y de calidad para energía, deseo y regulación hormonal.
- **Requisitos de seguridad previos:**
  - Descartar apnea, insomnio clínico o depresión si hay síntomas persistentes.
- **Pasos de la progresión:**

| Step | Nombre (parafraseado) | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Auditoría de sueño | Registrar hora de dormir, despertar, latencia, energía. | Datos de varios días. | No registrar suficiente tiempo. | cap. 6, pp. 146-149 |
| 2 | Horario constante | Fijar horas regulares, incluso fin de semana. | Menor variabilidad y mejor energía. | Compensar excesivo en finde. | cap. 6, p. 156 |
| 3 | Ambiente | Oscuro, fresco, silencioso, cama cómoda. | Menos despertares. | Usar cama para trabajo/pantallas. | cap. 6, pp. 157-159 |
| 4 | Ritual de cierre | Baño, lectura, respiración, música, masaje. | Transición calmada. | Alcohol o pantallas estimulantes. | cap. 6, pp. 156-163 |
| 5 | Sustancias y timing | Cortar cafeína/nicotina 6 h antes; evitar alcohol nocturno. | Mejora de calidad. | Usar alcohol para dormir. | cap. 6, pp. 160-161 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Caminata / cardio moderado

- **Cues principales:**
  - Elegir actividad placentera.
  - Hacerla conveniente y cercana.
  - Variar para evitar aburrimiento.
  - Calentar ~5 minutos antes.
  - Estirar ~5 minutos después.
  - Empezar lento y escuchar señales corporales.
- **Errores frecuentes:**
  - Empezar demasiado intenso.
  - Ignorar dolor articular.
  - Entrenar tarde y afectar sueño.
  - No registrar duración.
  - Buscar solo peso, no energía/adherencia.
- **Variantes seguras y progresiones sugeridas:**
  - Lifestyle activity para principiantes.
  - Caminata corta diaria.
  - Clase guiada o buddy system.
  - Alternar actividades.
- **Indicaciones específicas por zona:**
  - Si dolor de rodilla, reducir intensidad y consultar.
  - Adultos mayores: tai chi, caminar, agua aerobics.
- **Páginas de referencia:** cap. 5, pp. 131-137.

---

### Yoga / tai chi / estiramientos

- **Cues principales:**
  - Respiración continua.
  - Postura estable sin sobreextensión.
  - Ropa cómoda, pies descalzos, mat antideslizante.
  - Evitar comer ~1 hora antes.
  - Relajar después de cada serie de posturas.
- **Errores frecuentes:**
  - Forzar rango.
  - Compararse con otros.
  - Practicar sin instrucción inicial.
  - Convertirlo en competición.
- **Variantes seguras y progresiones sugeridas:**
  - Clase inicial.
  - Sesiones cortas frecuentes.
  - Posturas suaves y descanso.
- **Indicaciones específicas por zona:**
  - No usar como sustituto de evaluación de dolor articular.
- **Páginas de referencia:** cap. 7, pp. 181-182; cap. 5, pp. 135-136.

---

### Masaje

- **Cues principales:**
  - Ambiente tranquilo, cálido, luz baja.
  - Superficie firme y cómoda.
  - Usar loción/aceite sin exceso.
  - Ritmo constante.
  - Usar peso corporal, no solo brazos.
  - Trazos amplios circulares hacia el corazón para calentar.
  - Pulgares en zonas de tensión.
  - Terminar con trazos suaves.
  - Pedir feedback.
- **Errores frecuentes:**
  - Demasiado aceite.
  - Uñas, tirones de pelo o presión dolorosa.
  - Esperar masajes largos para que valgan.
  - Convertir masaje en obligación sexual.
  - No adaptar presión.
- **Variantes seguras y progresiones sugeridas:**
  - Masaje de 5 minutos.
  - Localizado: manos, pies, espalda, cabeza.
  - Masaje profesional ocasional.
- **Indicaciones específicas por zona:**
  - Evitar zonas lesionadas o inflamadas sin evaluación.
- **Páginas de referencia:** cap. 4, pp. 104-107.

---

### Respiración profunda

- **Cues principales:**
  - Inhalar lento por nariz.
  - Exhalar por boca.
  - Llevar aire al abdomen.
  - Imaginar oxígeno recorriendo cuerpo.
  - Mantener ritmo.
- **Errores frecuentes:**
  - Respiración torácica rápida.
  - Hacerlo con prisa.
  - Tensar hombros.
- **Variantes seguras y progresiones sugeridas:**
  - 5 minutos 2 veces/día.
  - Técnica de control: una respiración profunda ante estrés.
  - Progresión yoga: inhalar 1/3, 1/2, 2/3 y capacidad completa con pausas breves.
- **Indicaciones específicas por zona:**
  - Si mareo, volver a respiración normal.
- **Páginas de referencia:** cap. 7, pp. 179-180.

---

### Meditación

- **Cues principales:**
  - Lugar tranquilo 15 minutos.
  - Sentarse sobre cojín, piernas cruzadas.
  - Manos sobre rodillas, palmas arriba.
  - Espalda recta, cuello relajado.
  - Ojos cerrados.
  - Respiración profunda.
  - Repetir palabra, sonido o conteo.
- **Errores frecuentes:**
  - Frustrarse por pensamientos.
  - Meditar con interrupciones.
  - Usar postura dolorosa.
- **Variantes seguras y progresiones sugeridas:**
  - Empezar 10 minutos/día.
  - Usar audio guiado.
  - Clase inicial.
- **Indicaciones específicas por zona:**
  - Ajustar postura si dolor de espalda o rodillas.
- **Páginas de referencia:** cap. 7, pp. 181-182.

---

### Visualización

- **Cues principales:**
  - Lugar cómodo y sin interrupciones.
  - Ojos cerrados, respiración profunda.
  - Imaginar lugar seguro o escena sensual.
  - Incluir todos los sentidos.
  - Sin expectativa de rendimiento.
- **Errores frecuentes:**
  - Apurar la imagen.
  - Convertirlo en guion de obligación.
  - Usarlo para evitar comunicación real.
- **Variantes seguras y progresiones sugeridas:**
  - Visualización de relajación.
  - Visualización sexual sensual.
  - Visualización de orgasmo si hay dificultad, con enfoque terapéutico.
- **Indicaciones específicas por zona:**
  - Si ansiedad severa o trauma, derivar a profesional.
- **Páginas de referencia:** cap. 4, pp. 123-124; cap. 7, pp. 182-183.

---

### Ambiente sensual / dormitorio

- **Cues principales:**
  - Dormitorio sagrado: sueño y sexo.
  - Eliminar trabajo, TV, ejercicio, papeles.
  - Luz suave, velas, fuego, colores adecuados.
  - Cama cómoda y grande si hay pareja.
  - Temperatura fresca.
  - Ruido controlado.
- **Errores frecuentes:**
  - Llejar trabajo a la cama.
  - Dormitorio desordenado.
  - Luz excesiva.
  - Colchón deteriorado.
- **Variantes seguras y progresiones sugeridas:**
  - Usar divisor si espacio pequeño.
  - Añadir plantas, flores, almohadas.
  - Cambiar ropa de cama.
- **Indicaciones específicas por zona:**
  - Asociar cama solo con descanso/intimidad.
- **Páginas de referencia:** cap. 4, pp. 119-122; cap. 6, pp. 157-159; Day 23, p. 250.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Disfunción eréctil (ED)

- **Zona:** `pelvic-genital` / `cardiovascular`.
- **Etiología resumida:**
  - Flujo sanguíneo reducido por colesterol, arteriosclerosis, tabaco, hipertensión, diabetes.
  - Medicamentos.
  - Estrés, ansiedad, distracción.
  - Déficit de testosterona en algunos casos.
  - Sueño pobre/apnea.
- **Signos y síntomas clave:**
  - Dificultad para lograr o mantener erección suficiente.
  - Puede coexistir con baja libido si hay estrés/hormonas.
- **Stadia / fases:**
  - El libro no define fases formales. ⚠️ No inventar fases clínicas.
- **Protocolos de tratamiento o rehab:**
  - **Fase 1: evaluación médica**
    - **Objetivo:** descartar enfermedad cardiovascular, diabetes, efectos de medicamentos, déficit hormonal, apnea.
    - **Qué se hace:** consultar médico, revisar medicación, medir colesterol/presión/hormonas según criterio clínico.
    - **Qué NO se hace:** automedicar con Viagra, suspender medicación, ignorar ED como señal vascular.
    - **Criterio para pasar a fase 2:** evaluación inicial completada y plan médico acordado.
  - **Fase 2: estilo de vida**
    - **Objetivo:** mejorar circulación, sueño, estrés y adherencia.
    - **Qué se hace:** dieta baja en grasa, ejercicio regular, dejar tabaco, limitar alcohol, dormir, reducir estrés.
    - **Criterio para pasar a fase 3:** consistencia durante semanas; si no mejora, revisar médico.
  - **Fase 3: intervenciones específicas**
    - **Objetivo:** tratar causa específica.
    - **Qué se hace:** cambios de medicación con médico, terapia hormonal si déficit, fármacos PDE5 si son apropiados, terapia sexual/psicológica si ansiedad.
    - **Criterio para continuar:** mejora funcional sin efectos adversos.
- **Ejercicios de prehab/movilidad específicos:**
  - No hay ejercicios pélvicos específicos en el libro; usar ejercicio cardiovascular general.
  - Caminata, ejercicio moderado, yoga/tai chi para estrés.
- **Umbrales de dolor o red flags:**
  - ED persistente = consultar médico.
  - ED con dolor torácico, disnea, mareos = urgencia/evaluación cardiovascular.
  - Disfunción súbita, trauma, dolor o síntomas neurológicos = evaluación profesional.
- **Referencias:** cap. 1, pp. 15-16, 26; cap. 3, pp. 75-77, 90-92; cap. 5, pp. 128-129; cap. 6, pp. 151-152; Appendix, pp. 312-314.

---

### Lesión / condición: Baja libido (hombres y mujeres)

- **Zona:** `brain / endocrine / lifestyle`.
- **Etiología resumida:**
  - Estrés crónico, depresión, ansiedad.
  - Falta de sueño.
  - Medicamentos.
  - Alcohol, tabaco.
  - Déficit hormonal.
  - Dolor o experiencias sexuales negativas.
  - Conflictos de pareja.
- **Signos y síntomas clave:**
  - Menor deseo, fantasía, iniciativa o interés sexual.
  - Puede acompañarse de fatiga, ánimo bajo o irritabilidad.
- **Stadia / fases:**
  - No definidas.
- **Protocolos:**
  - **Fase 1: evaluación**
    - Revisar sueño, estrés, medicación, sustancias, ánimo y relación.
    - Médico si persiste o hay síntomas hormonales/depresivos.
  - **Fase 2: recuperación de energía**
    - Sueño regular, ejercicio, reducción de estrés, tiempo personal, citas de pareja.
  - **Fase 3: reactivación sensual**
    - Tacto no sexual, masajes, estimulación sensorial, comunicación, sin presión de orgasmo.
- **Ejercicios de prehab:**
  - Respiración, meditación, yoga, caminata, masaje, date night.
- **Umbrales de dolor o red flags:**
  - Libido baja persistente con depresión, pensamientos autolesivos o síntomas médicos = profesional.
- **Referencias:** cap. 3, pp. 83-86; cap. 6, pp. 145-151; cap. 7, pp. 168-171; Appendix, pp. 312-313.

---

### Lesión / condición: Dificultad de excitación femenina / sequedad vaginal / dolor

- **Zona:** `pelvic-genital / endocrine`.
- **Etiología resumida:**
  - Déficit de estrógeno en menopausia.
  - Reducción de flujo sanguíneo.
  - Medicamentos.
  - Estrés/distracción.
  - Falta de estimulación sensual.
- **Signos y síntomas clave:**
  - Menor lubricación, menor congestión genital, dolor durante sexo, dificultad orgásmica.
- **Protocolos:**
  - **Fase 1: evaluación médica**
    - Descartar infección, dolor pélvico, efectos hormonales o medicamentos.
  - **Fase 2: educación sensual**
    - Aumentar estimulación sensorial, tiempo previo, tacto, aromas, comunicación.
  - **Fase 3: apoyo médico si aplica**
    - Terapia de estrógeno si sequedad/atrofia vaginal, con evaluación médica.
    - Considerar testosterona solo en mujeres seleccionadas y bajo supervisión.
- **Ejercicios/prehab:**
  - No hay ejercicios pélvicos específicos; usar masaje, baños calientes, visualización, respiración.
- **Red flags:**
  - Dolor persistente, sangrado, síntomas urinarios, trauma o miedo al sexo = profesional.
- **Referencias:** cap. 3, pp. 81-86; cap. 4, pp. 99-126; Appendix, pp. 311-313.

---

### Lesión / condición: Dificultad orgásmica / anorgasmia

- **Zona:** `brain / nervous-system / pelvic-genital`.
- **Etiología resumida:**
  - Distracción, ansiedad de rendimiento.
  - Estrés.
  - SSRI u otros medicamentos.
  - Falta de autoconocimiento corporal.
  - Baja excitación previa.
- **Signos y síntomas clave:**
  - Retraso o ausencia de orgasmo con malestar.
- **Protocolos:**
  - **Fase 1: reducir presión**
    - Sexo sin meta orgásmica, tacto no sexual, comunicación.
  - **Fase 2: autoconocimiento**
    - Exploración personal, feedback a pareja, lectura/educación.
  - **Fase 3: técnicas cognitivas**
    - Visualización, respiración, concentración en sensaciones.
  - **Fase 4: revisión médica**
    - Si medicamentos o condiciones médicas están implicados.
- **Ejercicios/prehab:**
  - Visualización, respiración, masaje, eye contact, tantra.
- **Red flags:**
  - Malestar severo, trauma, depresión o dolor = profesional.
- **Referencias:** cap. 4, pp. 103-108, 123-126; cap. 7, pp. 168-171; Appendix, p. 312.

---

### Lesión / condición: PMS

- **Zona:** `endocrine / whole-body`.
- **Etiología resumida:**
  - Cambios hormonales cíclicos; sensibilidad individual.
- **Signos y síntomas clave:**
  - Depresión, cambios de ánimo, dolor de cabeza, irritabilidad, sensibilidad mamaria, hinchazón, antojos, fatiga, baja libido.
- **Protocolos:**
  - **Fase 1: base nutricional**
    - Calcio 1200 mg/día durante 3 meses.
    - Magnesio 200 mg/día durante 2 meses.
    - Vitamina B6 con límite ≤ 200 mg/día; evitar megadosis.
    - Zinc adecuado; reducir cafeína si empeora PMS.
  - **Fase 2: suplementos opcionales**
    - Chasteberry 30–40 mg/día durante meses.
    - Evening primrose oil como “quizás” según evidencia mixta.
  - **Fase 3: estilo de vida**
    - Ejercicio, sueño, estrés, reducción de cafeína, comunicación.
- **Red flags:**
  - Síntomas severos, depresión grave, dolor incapacitante o síntomas no cíclicos = médico.
- **Referencias:** cap. 1, pp. 37-39, 41; cap. 2, pp. 55-56, 63; cap. 3, pp. 96-97.

---

### Lesión / condición: Menopausia

- **Zona:** `endocrine / pelvic-genital / sleep`.
- **Etiología resumida:**
  - Caída de estrógeno y testosterona; cambios de sueño y ánimo.
- **Signos y síntomas clave:**
  - Bochornos, sudores, insomnio, sequedad vaginal, bajo deseo, cambios de ánimo, ansiedad.
- **Protocolos:**
  - **Fase 1: estilo de vida**
    - Ejercicio regular, dieta, sueño, estrés, soja, tiempo personal.
  - **Fase 2: suplementos/fitoterapia**
    - Black cohosh 40 mg/dosis durante 2–8 semanas.
    - Chasteberry si síntomas asociados, con precaución.
  - **Fase 3: terapia médica**
    - ERT para sequedad/bochornos/sueño con evaluación riesgo-beneficio.
    - Testosterona en casos seleccionados de baja libido, usualmente con ERT y monitoreo.
- **Red flags:**
  - Sangrado anormal, riesgo de cáncer, síntomas severos o depresión = médico.
- **Referencias:** cap. 2, pp. 54-56; cap. 3, pp. 81-86; cap. 6, p. 153; Appendix, p. 313.

---

### Lesión / condición: Hipertrofia prostática benigna (BPH)

- **Zona:** `prostate / urinary`.
- **Etiología resumida:**
  - Agrandamiento prostático relacionado con edad.
- **Signos y síntomas clave:**
  - Frecuencia urinaria, micción nocturna, chorro débil, molestias.
- **Protocolos:**
  - **Fase 1: diagnóstico médico**
    - Descartar cáncer u otras causas.
  - **Fase 2: saw palmetto**
    - 160 mg dos veces/día, 2–3 meses, si médico aprueba.
  - **Fase 3: seguimiento**
    - Monitoreo de síntomas y próstata.
- **Red flags:**
  - Sangre en orina, dolor severo, retención urinaria, pérdida de peso = médico urgente.
- **Referencias:** cap. 2, pp. 59-60.

---

### Lesión / condición: Infecciones urinarias recurrentes (apoyo, no tratamiento)

- **Zona:** `urinary`.
- **Etiología resumida:**
  - Bacterias que se adhieren al tracto urinario; pueden asociarse a actividad sexual pero no siempre.
- **Signos y síntomas clave:**
  - Ardor urinario, frecuencia, orina turbia, dolor lumbar bajo.
- **Protocolos:**
  - **Prevención:**
    - Cranberry 300 ml jugo/día o 400 mg cápsulas/día; preferir sin azúcar.
    - Hidratación adecuada.
  - **Tratamiento:**
    - Médico si síntomas activos; antibióticos si corresponde.
- **Red flags:**
  - Fiebre, dolor lumbar alto, sangre, síntomas persistentes = médico.
- **Referencias:** cap. 2, pp. 58-59.

---

### Lesión / condición: Insomnio / sueño fragmentado con impacto sexual

- **Zona:** `sleep / endocrine / brain`.
- **Etiología resumida:**
  - Estrés, mala higiene, apnea, menopausia, medicación, viajes, turnos.
- **Signos y síntomas clave:**
  - Dificultad para dormir, despertares, sueño no reparador, baja libido, fatiga.
- **Protocolos:**
  - **Fase 1: evaluación**
    - Registrar sueño, energía, latencia, despertares.
  - **Fase 2: higiene**
    - Horario, ambiente, ritual, cafeína/alcohol, siestas.
  - **Fase 3: médico si persiste**
    - Apnea, depresión, ansiedad, menopausia, medicación.
- **Red flags:**
  - Apneas observadas, somnolencia diurna severa, insomnio crónico, depresión = profesional.
- **Referencias:** cap. 6, pp. 145-164.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Sueño

- El libro posiciona el sueño como regulador de energía, testosterona, fertilidad, ánimo y deseo.
- Reglas clave:
  - ~8 horas promedio; individualizar con energía diurna.
  - Latencia normal ~15 minutos; dormirse de inmediato indica deuda.
  - Horario regular.
  - Dormitorio solo para sueño y sexo.
  - Ambiente fresco, oscuro y silencioso.
  - Evitar estimulantes 6 horas antes.
  - Evitar alcohol como ayuda para dormir.
  - Ejercicio temprano mejora sueño.
- Relación con rendimiento/lesiones:
  - Fatiga reduce libido y rendimiento.
  - Sueño pobre puede reducir testosterona y fertilidad.
  - Apnea se asocia con disfunción sexual.
- Referencias: cap. 6, pp. 145-164.

---

### Estrés

- El estrés activa lucha/huida, constriñe vasos, reduce flujo genital y baja testosterona vía cortisol.
- Reglas clave:
  - Respiración 5 min, 2 veces/día.
  - Meditación 10 min/día.
  - Yoga 30 min varias veces/semana.
  - Masajes cortos.
  - Risa, naturaleza, música, aromaterapia, baños calientes.
  - Apoyo social y tiempo diario propio.
  - Cita semanal de pareja sin expectativa sexual obligatoria.
- Relación con recuperación:
  - Estrés crónico aumenta distracción, ansiedad, depresión, bajo deseo, dificultad eréctil y orgásmica.
- Referencias: cap. 7, pp. 165-191.

---

### Nutrición

- El libro aporta reglas de salud cardiovascular y energía, no nutrición deportiva avanzada.
- Reglas clave:
  - Grasa total ≤ 30%, saturada ≤ 10%, colesterol ≤ 300 mg, sal ≤ 6 g para dieta de 2000 kcal.
  - Priorizar frutas, vegetales, granos enteros, legumbres, soja, nueces, semillas.
  - Hidratación ≥ 2 L/día.
  - Limitar grasas malas, fritos, procesados, azúcar refinada.
  - Proteína magra y pescado.
  - Especias para adherencia y leve efecto sensorial.
- Diferenciación con stack de nutrición:
  - No usar como plan de macronutrientes para rendimiento/hipertrofia; es base de salud cardiovascular y sexual.
- Referencias: cap. 1, pp. 13-46.

---

### Entrenar enfermo

- El libro no da reglas tipo “above/below the neck” ni fiebre. ⚠️ No inventar protocolo.
- Lo que sí se puede extraer:
  - Escuchar al cuerpo.
  - Descansar tras esfuerzo extenuante.
  - Si hay enfermedad, el cuerpo prioriza recuperación; el sexo/rendimiento pueden bajar.
  - Si hay síntomas severos o persistentes, consultar médico.
- Recomendación para sistema:
  - Usar regla conservadora: si enfermedad sistémica, fiebre, fatiga extrema o dolor nuevo, suspender entrenamiento y derivar evaluación.
- Referencias indirectas: cap. 5, pp. 133-134; Appendix, p. 311.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente de reglas de estilo de vida para recuperación: sueño, estrés, sustancias, adherencia, energía y salud cardiovascular.
  - Módulo de salud sexual como dominio de bienestar, no como diagnóstico médico.
  - Generación de checklists de higiene de sueño, respiración, meditación, citas de pareja y estimulación sensual.
  - Motor de advertencias para medicamentos, suplementos y sustancias con efectos sexuales.
  - Onboarding de 30 días para hábitos de bienestar.
  - SkillPaths no físicos: intimidad sensorial, tantra suave, rutina de sueño y base aeróbica de salud sexual.

- **Limitaciones:**
  - No es un libro de fuerza, hipertrofia, movilidad articular ni calistenia.
  - No ofrece programación de series/repeticiones/intensidad para fuerza.
  - Muchas recomendaciones médicas/suplementos deben pasar por profesional; no automatizar prescripción.
  - Algunas cifras y estudios son de época (2001); validar evidencia actual antes de exponerlas como hechos clínicos.
  - El libro incluye recetas y menús; deben delegarse al stack de nutrición, no al motor de entrenamiento.
  - No hay protocolos de dolor musculoesquelético ni tendinitis.

- **Recomendaciones específicas:**
  - Crear `rules/lifestyle_sleep.ts` con reglas: `sleep_duration`, `sleep_latency`, `sleep_schedule`, `sleep_environment`, `sleep_stimulant_cutoff`, `sleep_apnea_redflag`.
  - Crear `rules/lifestyle_stress_recovery.ts` con reglas: `stress_breathing`, `stress_meditation`, `stress_yoga`, `stress_daily_break`, `stress_date_night`, `stress_massage`.
  - Crear `rules/cardiovascular_sexual_health.ts` con reglas: `diet_macronutrient_limits`, `diet_cholesterol_control`, `subst_nicotine_stop`, `subst_alcohol_limit`, `subst_caffeine_limit`, `ex_base_volume`.
  - Crear `focusId: sexual-health` y mapearlo a `cardiovascular-health`, `recovery`, `sleep`, `stress-management`.
  - Añadir `SupplementProtocol` con evidencia `yes/maybe/no` y flags `requiresClinicianApproval` para ginkgo, ginseng, black cohosh, chasteberry, kava, cranberry, saw palmetto.
  - Añadir `MedicationSexualSideEffectProfile` para antihipertensivos, antidepresivos, antiulcerosos, antihistamínicos, terapia hormonal, PDE5, alcohol, cafeína, nicotina.
  - Añadir SkillPaths: `sensory-intimacy-progression`, `tantric-intimacy`, `sexual-fitness-aerobic-base`, `sleep-recovery-routine`.
  - No permitir que el sistema diagnostique ED, menopausia, PMS, BPH, UTI, depresión o apnea; solo sugerir evaluación profesional cuando haya red flags.
  - Usar el programa de 30 días como plantilla de hábitos con tracking diario, pero sin exigir sexualidad ni generar culpa por incumplimiento.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
### ⚠️ Reporte de Datos Faltantes (Limitaciones del OCR / Ayudas Visuales)

Antes de proceder con la implementación técnica, he auditado el texto extraído y detectado que **el OCR (reconocimiento de texto) falló o omitió varias tablas y gráficos clave**. Como sistema basado en evidencia, no voy a inventar estos datos. Si tienes acceso al PDF original o al libro físico, necesitaré que me proporciones la información de las siguientes tablas para completar el modelo de datos al 100%:

1. **Capítulo 1 (Dieta):**
   * `FRUITS AND VEGGIES FOR SEXUAL FITNESS`: El texto muestra caracteres corruptos (`m ^r ^r ffir...`). Faltan los beneficios específicos (vitaminas, minerales) mapeados a cada fruta/vegetal.
   * `PROTEIN FOR SEXUAL FITNESS`: Tabla omitida. Faltan las fuentes de proteína y sus beneficios sexuales específicos.
2. **Capítulo 2 (Suplementos):**
   * `RECOMMENDED SUPPLEMENT PROGRAM FOR MALE / FEMALE SEXUAL FITNESS`: Las tablas con las fórmulas exactas (dosis y combinaciones del stack diario propuesto por los autores) no se extrajeron. Solo tenemos los ingredientes sueltos descritos en el texto.
3. **Capítulo 3 (Medicamentos):**
   * `Sexual Side Effects of Common Prescription Medications` (p. 78-79): La tabla maestra de fármacos y sus efectos secundarios sexuales específicos está ausente.
   * `CAFFEINE CONTENT OF SOME COMMON DRINKS`: Faltan los miligramos exactos por bebida.
4. **Capítulo 4 (Estimulación Sensorial):**
   * `PERFUMES AND COLOGNES: CHOOSING A SCENT`: Tabla de significados psicológicos/sexuales de los aromas omitida.
   * `HOW COLORS INFLUENCE SEXUAL AROUSAL`: Tabla de colores (Rojo, Azul, Verde, etc.) y su impacto en el estado de ánimo sexual omitida.
5. **Capítulo 5 (Ejercicio):**
   * `EXERCISE GUIDE`: Tabla que clasifica ejercicios en *Mild*, *Moderate* e *Intense* no se extrajo.
   * `RECOMMENDED WEIGHT BASED ON HEIGHT (Men/Women)`: Las tablas de la *Metropolitan Life Insurance* están corruptas.
6. **Capítulo 6 (Sueño):**
   * `THE STANFORD SLEEPINESS SCALE`: Faltan las descripciones de los niveles 1 al 7 (solo se menciona que "puntuar bajo 3 es riesgo").
7. **Programa de 30 Días:**
   * El mapeo exacto de qué receta corresponde a qué día (Día 3 al 30) se perdió en el OCR, aunque **sí tenemos el recetario completo al final del libro**.

*Nota para el usuario: Si puedes extraer el texto de estas tablas y pegarlo aquí, generaré los diccionarios de datos correspondientes. Mientras tanto, procedo a desarrollar las 9 recomendaciones de implementación con la información canónica que sí poseemos.*

---

### 🛠️ Ejecución de las 9 Recomendaciones de Implementación (Blueprints para Agentes)

A continuación, se despliegan las 9 recomendaciones planteadas en la sección 8, transformadas en **especificaciones técnicas, interfaces de TypeScript y lógica para el motor de reglas**, listas para que los agentes de desarrollo las integren en *Plan Maestro OS*.

#### 1. Crear `rules/lifestyle_sleep.ts`
Reglas para el motor de `TrainingRule` enfocadas en higiene del sueño y recuperación hormonal.

```typescript
// rules/lifestyle_sleep.ts
export const SleepRules: TrainingRule[] = [
  {
    id: 'sleep_duration_optimal',
    type: 'recovery',
    metric: 'sleepHours',
    condition: (metrics) => metrics.sleepHours < 6,
    action: 'warn',
    message: '⚠️ Dormir menos de 6h reduce testosterona y libido. Prioriza 7-8h.',
    references: ['Cap. 6, p. 146']
  },
  {
    id: 'sleep_latency_debt',
    type: 'recovery',
    metric: 'sleepLatencyMinutes',
    condition: (metrics) => metrics.sleepLatencyMinutes < 5, // Se duerme inmediatamente
    action: 'alert',
    message: 'Quedarte dormido al instante indica deuda de sueño severa. Ajusta horarios.',
    references: ['Cap. 6, p. 147']
  },
  {
    id: 'stimulant_cutoff',
    type: 'substance',
    metric: 'caffeineMgPerDay',
    condition: (metrics, context) => context.hoursBeforeBed < 6 && metrics.caffeineIntakeRecent > 0,
    action: 'block_hint',
    message: 'Evita cafeína y nicotina al menos 6 horas antes de dormir para proteger el sueño profundo.',
    references: ['Cap. 6, p. 160']
  }
];
```

#### 2. Crear `rules/lifestyle_stress_recovery.ts`
Reglas para manejar el cortisol y la activación simpática (lucha/huida) que anulan la excitación.

```typescript
// rules/lifestyle_stress_recovery.ts
export const StressRules: TrainingRule[] = [
  {
    id: 'daily_stress_break',
    type: 'lifestyle',
    metric: 'dailyPleasureMinutes',
    threshold: { min: 20 },
    action: 'remind',
    message: 'Reserva 20 min diarios para ti. El estrés crónico eleva cortisol y anula la libido.',
    references: ['Cap. 7, p. 177']
  },
  {
    id: 'weekly_intimacy_appt',
    type: 'intimacy',
    metric: 'sessionsPerWeek',
    target: 'date_night',
    condition: (metrics) => metrics.intimacyAppointmentsPerWeek < 1,
    action: 'schedule_prompt',
    message: 'Agenda una "cita" semanal con tu pareja. Sin expectativa de sexo, solo conexión.',
    references: ['Cap. 7, p. 174']
  },
  {
    id: 'breathing_protocol',
    type: 'regulation',
    metric: 'breathingSessionsPerDay',
    threshold: { min: 2, durationMinutes: 5 },
    action: 'suggest',
    message: 'Practica 5 min de respiración profunda 2 veces al día para desactivar el modo supervivencia.',
    references: ['Cap. 7, p. 179']
  }
];
```

#### 3. Crear `rules/cardiovascular_sexual_health.ts`
Reglas nutricionales y de movimiento basadas en la salud vascular (flujo sanguíneo genital).

```typescript
// rules/cardiovascular_sexual_health.ts
export const CardioDietRules: TrainingRule[] = [
  {
    id: 'cholesterol_limit',
    type: 'nutrition',
    metric: 'cholesterolMgPerDay',
    threshold: { max: 300 },
    action: 'warn',
    message: 'El exceso de colesterol obstruye microvasos genitales. Limita yemas, lácteos enteros y carnes grasas.',
    references: ['Cap. 1, p. 24']
  },
  {
    id: 'hydration_base',
    type: 'nutrition',
    metric: 'waterLiters',
    threshold: { min: 2.0 }, // Aprox 8 vasos
    action: 'remind',
    message: 'La hidratación es crítica para la circulación y el volumen sanguíneo.',
    references: ['Cap. 1, p. 22']
  },
  {
    id: 'tryptophan_presex_avoidance',
    type: 'nutrition_timing',
    condition: (metrics, context) => context.hoursBeforeSex < 2 && metrics.highTryptophanFood === true,
    action: 'warn',
    message: 'Evita pavo, lácteos o quesos pesados justo antes del sexo; el triptófano induce somnolencia.',
    references: ['Cap. 1, p. 44']
  }
];
```

#### 4. Extender Enums de `FocusId` y `BodyZoneId`
Actualización de los diccionarios base del sistema.

```typescript
// types/ontology.ts
export enum FocusId {
  // ... existentes (strength, hypertrophy, mobility)
  'sexual-health' = 'sexual-health',
  'cardiovascular-health' = 'cardiovascular-health',
  'hormonal-balance' = 'hormonal-balance',
  'intimacy-connection' = 'intimacy-connection'
}

export enum BodyZoneId {
  // ... existentes (shoulder, lumbar, knee)
  'pelvic-genital' = 'pelvic-genital',
  'cardiovascular-system' = 'cardiovascular-system',
  'nervous-system' = 'nervous-system' // Para manejo de estrés/neurotransmisores
}
```

#### 5. Añadir `SupplementProtocol` (Interfaz y Catálogo)
Estructura para que la app sugiera suplementos con sus debidos *disclaimers* médicos.

```typescript
// types/supplements.ts
export type EvidenceTier = 'yes' | 'maybe' | 'no' | 'dangerous';

export interface SupplementProtocol {
  id: string;
  name: string;
  targetOutcome: string; // ej. 'circulation', 'menopause-relief', 'pms'
  dailyDose: string;
  standardization?: string; // ej. '24/6' para Ginkgo
  minDurationWeeks: number;
  evidenceTier: EvidenceTier;
  requiresClinicianApproval: boolean;
  contraindications: string[];
}

export const SupplementCatalog: SupplementProtocol[] = [
  {
    id: 'ginkgo_biloba',
    name: 'Ginkgo Biloba',
    targetOutcome: 'Flujo sanguíneo / Disfunción por antidepresivos',
    dailyDose: '50-100 mg',
    standardization: '24/6',
    minDurationWeeks: 8,
    evidenceTier: 'yes',
    requiresClinicianApproval: true,
    contraindications: ['Anticoagulantes', 'Aspirina', 'MAOIs']
  },
  {
    id: 'spanish_fly',
    name: 'Spanish Fly (Cantaridina)',
    targetOutcome: 'Ninguno (Tóxico)',
    dailyDose: 'N/A',
    minDurationWeeks: 0,
    evidenceTier: 'dangerous',
    requiresClinicianApproval: true,
    contraindications: ['Irritación urogenital severa', 'Riesgo de muerte']
  }
];
```

#### 6. Añadir `MedicationSexualSideEffectProfile`
Motor de alertas cuando el usuario registra ciertos fármacos en su perfil.

```typescript
// types/medications.ts
export interface MedicationProfile {
  drugClass: string;
  commonExamples: string[];
  sexualSideEffects: ('low-libido' | 'erectile-dysfunction' | 'anorgasmia' | 'vaginal-dryness')[];
  mitigationStrategy: string;
}

export const MedicationAlerts: MedicationProfile[] = [
  {
    drugClass: 'SSRI (Antidepresivos)',
    commonExamples: ['Prozac', 'Zoloft', 'Paxil'],
    sexualSideEffects: ['low-libido', 'anorgasmia'],
    mitigationStrategy: 'Consultar médico para ajustar dosis, cambiar a Bupropion (Wellbutrin), o programar sexo antes de la toma.'
  },
  {
    drugClass: 'Antihipertensivos',
    commonExamples: ['Beta-bloqueadores', 'Diuréticos'],
    sexualSideEffects: ['erectile-dysfunction', 'low-libido'],
    mitigationStrategy: 'Consultar médico para evaluar cambio a Inhibidores ACE o Bloqueadores de Canales de Calcio.'
  }
];
```

#### 7. Añadir `SkillPaths` No Físicos
Estructura para el módulo de progresiones, adaptado a habilidades sensoriales y de intimidad.

```typescript
// types/skillpath.ts
export const SensoryIntimacyPath: SkillPath = {
  id: 'sensory-intimacy-progression',
  discipline: 'intimacy',
  focus: FocusId['sexual-health'],
  steps: [
    {
      step: 1,
      name: 'Tacto No Sexual',
      description: 'Abrazos, besos y caricias sin meta de intercourse.',
      passCriteria: 'Comodidad mutua sin ansiedad de rendimiento.',
      commonFaults: ['Usar el tacto como transacción para exigir sexo.']
    },
    {
      step: 2,
      name: 'Masaje Breve (5-10 min)',
      description: 'Masaje con ambiente cálido, luz baja y feedback continuo.',
      passCriteria: 'Relajación muscular y activación de oxitocina.',
      commonFaults: ['Presión excesiva', 'Prisa', 'Expectativa de orgasmo.']
    },
    {
      step: 3,
      name: 'Contacto Visual Sostenido',
      description: 'Mantener la mirada durante la intimidad o el acto.',
      passCriteria: 'Capacidad de sostener la mirada sin evasión por vergüenza.',
      commonFaults: ['Cerrar los ojos sistemáticamente', 'Distracción mental.']
    }
  ]
};
```

#### 8. Red Flags y Límites Clínicos (Safety Engine)
Reglas de seguridad ineludibles para el sistema. *Plan Maestro OS* NO diagnostica.

```typescript
// engine/safety-guards.ts
export const ClinicalRedFlags: RedFlagTrigger[] = [
  {
    symptom: 'Disfunción Eréctil Súbita + Dolor Torácico / Disnea',
    action: 'IMMEDIATE_MEDICAL_REFERRAL',
    reason: 'La DE es a menudo el primer síntoma de enfermedad cardiovascular / arteriosclerosis.'
  },
  {
    symptom: 'Ronquido crónico + Pausas respiratorias + Somnolencia diurna + Baja libido',
    action: 'CLINICIAN_EVALUATION',
    reason: 'Posible Apnea Obstructiva del Sueño (OSA). Requiere estudio del sueño.'
  },
  {
    symptom: 'Dolor pélvico / Sangrado anormal / Dispareunia (dolor al penetrar)',
    action: 'CLINICIAN_EVALUATION',
    reason: 'Descartar infecciones, endometriosis, atrofia vaginal severa o condiciones prostáticas.'
  }
];
```

#### 9. `Ledger` de 30 Días (Habit Tracker)
Esquema para el *Ledger* semanal/diario que permite al usuario trackear los 7 elementos del libro.

```typescript
// types/ledger.ts
export interface DailySexualFitnessLedger {
  date: string;
  // 1. Diet
  waterGlasses: number; // Target: 8
  avoidedBadFats: boolean;
  // 2. Supplements
  tookProtocol: boolean; 
  // 3. Medications / Substances
  alcoholDrinks: number; // Target: <= 2
  smoked: boolean; // Target: false
  // 4. Sensual Stimulation
  sensualActivityDone: boolean; // ej. masaje, baño, música
  // 5. Exercise
  exerciseMinutes: number; // Target: 30
  exerciseType: 'lifestyle' | 'cardio' | 'strength' | 'yoga';
  // 6. Sleep
  sleepHours: number;
  sleepQuality1to5: number;
  // 7. Stress
  stressReductionDone: boolean; // ej. meditación, respiración
  // Output
  dailyEnergy1to5: number;
  libidoLevel1to5: number;
}
```

---
**Siguiente paso sugerido para ti (Usuario):**
Si deseas que genere el código de las tablas faltantes (como la *Stanford Sleepiness Scale* o los *Stacks de Suplementos*), por favor copia y pega el texto de esas páginas específicas del PDF y las integraré inmediatamente a los catálogos `SupplementCatalog` y `SleepRules`.

---

## Ronda 3 — tras: «Aquí tienes la reconstrucción completa y detallada de todas las tablas, esquemas y secciones que quedaron omitidas o corruptas por el proces…»
He recibido las tablas reconstruidas. Con esta información quedan cubiertos los principales vacíos del OCR y puedo cerrar la extracción de forma mucho más completa.

A continuación te entrego:

1. **Validación final de datos**: qué quedó completo y qué advertencias persisten.  
2. **Extracción consolidada actualizada** con las nuevas tablas integradas.  
3. **Ejecución de las 9 recomendaciones de implementación** para *Plan Maestro OS*, ya con datos suficientes para convertirlas en reglas, catálogos, skill paths y módulos de tracking.

---

# Sexual Fitness — Extracción final consolidada para Plan Maestro OS

> Versión actualizada con las tablas visuales reconstruidas.  
> No se copian textualmente pasajes largos del libro; todo se parafrasea y se organiza como datos accionables.

---

## 0) Validación final de datos

### 0.1 Datos que quedan completos

Con tu reconstrucción, ya se pueden integrar de forma fiable:

- **Capítulo 1 – Dieta**
  - Mapa de frutas/vegetales con nutrientes y beneficios sexuales.
  - Mapa de fuentes de proteína con nutrientes y beneficios sexuales.

- **Capítulo 2 – Suplementos**
  - Stack masculino.
  - Stack femenino.
  - Dosis, mecanismos y precauciones.

- **Capítulo 3 – Medicamentos**
  - Tabla de efectos sexuales secundarios por categoría farmacológica.
  - Tabla de contenido de cafeína en bebidas comunes.

- **Capítulo 4 – Estimulación sensorial**
  - Familias de perfumes/aromas y efectos psicológicos/sexuales.
  - Colores y su influencia en el estado de ánimo/respuesta sexual.

- **Capítulo 5 – Ejercicio**
  - Clasificación de ejercicio leve / moderado / intenso.
  - Tablas de peso recomendado por altura y complexión.
  - Rangos de BMI/IMC.

- **Capítulo 6 – Sueño**
  - Escala de Somnolencia de Stanford completa (1–7).

- **Programa de 30 días**
  - Estructura diaria tipo para integrar los 7 elementos.

---

### 0.2 Advertencias que deben quedar explícitas en el sistema

Aunque ya hay mucha más información, el sistema debe conservar estas advertencias:

- ⚠️ **La Escala de Stanford tiene una inconsistencia textual**
  - El texto base dice que “puntuar por debajo de 3” indica privación de sueño.
  - Pero la escala estándar va de 1 = alerta a 7 = por dormirse.
  - **Recomendación técnica:** no implementar literalmente “score < 3” como riesgo.  
    Implementar mejor:
    - si el usuario reporta **SSS 4–7 frecuente**, marcar posible deuda de sueño.
    - si reporta **SSS 1–3 sostenido**, interpretar como alerta adecuada.

- ⚠️ **Las tablas de peso Metropolitan Life son antiguas**
  - El libro las usa como referencia rápida.
  - El sistema debe tratarlas como **referencia histórica**, no como diagnóstico moderno.
  - Mejor usar:
    - BMI como screening simple.
    - contexto de energía, rendimiento, salud metabólica y criterio clínico.

- ⚠️ **Los stacks de suplementos requieren puerta de seguridad médica**
  - No deben automatizarse como prescripción.
  - Deben presentarse como:
    - “protocolo del libro”
    - “requiere aprobación médica”
    - “contraindicaciones activas deben bloquear sugerencia”

- ⚠️ **El mapeo exacto día a día de recetas del programa de 30 días no está totalmente reconstruido**
  - Ya tenemos la estructura diaria.
  - Todavía no tenemos un mapa exacto tipo:
    - Día 3 desayuno = receta X
    - Día 5 cena = receta Y
  - **Solución:** implementar un planificador por slots con recetas etiquetadas por categoría, en vez de depender de un menú fijo por día.

---

# 1) Nuevos catálogos de datos que deben añadirse

---

## 1.1 Catálogo de alimentos con beneficio sexual

### Nuevo tipo sugerido: `FoodSexualBenefit`

```ts
interface FoodSexualBenefit {
  id: string;
  name: string;
  category: 'fruit' | 'vegetable' | 'protein';
  keyNutrients: string[];
  sexualBenefitTags: string[];
  mechanism: string;
  source: string;
}
```

### Catálogo integrado

| ID sugerido | Alimento | Nutrientes clave | Tags sexuales | Mecanismo resumido |
|---|---|---|---|---|
| `food_avocado` | Aguacate | Folato, B6, potasio, vitamina E | hormonal, energía, vascular | Apoya síntesis hormonal, energía y salud vascular |
| `food_garlic` | Ajo | Alicina, selenio, zinc, fitoquímicos | vascular, circulación | Ayuda a prevenir placa arterial y mejora circulación genital |
| `food_dandelion_greens` | Hojas de diente de león | Vitamina A, calcio, hierro | fertilidad, hormonal | Apoya fertilidad, producción hormonal y tejido testicular |
| `food_asparagus` | Espárragos | Vitamina E, niacina, calcio, folato | hormonal, orgasmo | Relacionado con hormonas sexuales e histamina vinculada al orgasmo |
| `food_leafy_greens` | Espinacas y hojas verdes | Folato, magnesio, calcio, zinc, C | dopamina, flujo sanguíneo, PMS | Favorece dopamina, circulación y alivio de síntomas de SPM |
| `food_figs` | Higos | Fibra, hierro, potasio, magnesio | resistencia, vigor | Apoya resistencia, salud cardiovascular y vigor general |
| `food_apples` | Manzanas | Quercetina, fibra, vitamina C | vascular, antioxidante | Protege vasos y combate radicales libres |
| `food_melon_watermelon` | Melón / sandía | Citrulina, vitamina C, potasio | vasodilatación, óxido nítrico | Citrulina → arginina → apoyo a vasodilatación genital |
| `food_citrus` | Naranjas y cítricos | Vitamina C, antioxidantes | fertilidad masculina, vascular | Protege espermatozoides y mejora circulación |
| `food_bananas` | Plátanos | Potasio, complejo B, bromelina | energía, libido, muscular | Apoya contracción muscular, energía y regulación de libido |
| `food_tomatoes` | Tomates | Licopeno, C, A | próstata, vascular | Antioxidante con beneficio prostático y arterial |
| `food_carrots` | Zanahorias | Betacaroteno, B6 | espermatogénesis, mucosas | Apoya producción de esperma y salud de mucosas |
| `food_fatty_fish` | Pescado graso | Omega-3, B12, proteína magra | vascular, nervioso | Mantiene arterias despejadas y flujo genital |
| `food_oysters` | Ostras y mariscos | Zinc, B12, hierro, aminoácidos | testosterona, libido | Zinc clave para testosterona, semen y deseo |
| `food_chicken_turkey` | Pollo / pavo sin piel | L-arginina, B3, B6 | óxido nítrico, energía | Aporta arginina para erección/arousal sin grasa saturada |
| `food_soy` | Soja | Isoflavonas, fibra, proteína | PMS, menopausia, colesterol | Reduce LDL y alivia sofocos/síntomas hormonales |
| `food_eggs` | Huevos | B5, B6, B12, proteína | hormonal, energía | Apoya equilibrio hormonal y energía sostenida |
| `food_legumes` | Legumbres | Fibra, folato, magnesio, arginina, zinc | dopamina, circulación | Apoya dopamina, flujo sanguíneo y glucosa estable |
| `food_lean_red_meat` | Carne roja magra | Zinc, hierro hemo, B12 | testosterona, oxígeno | Apoya testosterona y transporte de oxígeno; usar con moderación |

---

## 1.2 Catálogo de stacks de suplementos

### Nuevo tipo sugerido: `SupplementStack`

```ts
interface SupplementStack {
  id: string;
  targetPopulation: 'male' | 'female';
  items: SupplementStackItem[];
  requiresClinicianApproval: boolean;
  source: string;
}
```

---

### Stack masculino

| Ingrediente | Dosis diaria | Mecanismo principal | Precaución |
|---|---:|---|---|
| Ginkgo biloba | 60–100 mg, estandarizado 24/6 | Flujo sanguíneo eréctil, relajación de músculo liso | Anticoagulantes, MAOIs |
| Ginseng Panax | 100–200 mg, 4–7% ginsenósidos | Óxido nítrico, firmeza eréctil, estamina | Puede elevar presión arterial |
| L-Arginina | 1000–3000 mg | Precursor de óxido nítrico; apoyo a erección y esperma | Supervisión si hay medicación cardiovascular |
| Zinc | 15 mg | Testosterona y espermatogénesis | No exceder de forma crónica |
| Vitamina E | 30 IU base; 400–600 IU solo bajo criterio clínico | Antioxidante, calidad espermática | ⚠️ no automatizar dosis altas |
| Vitamina C | 250–500 mg | Protección antioxidante, salud vascular | Hidratación si dosis altas |
| Complejo B | B6 10–50 mg; B12 6 mcg; folato 400 mcg | Neurotransmisores, dopamina, pequeños vasos | B6 máx. seguro ~200 mg/día |

---

### Stack femenino

| Ingrediente | Dosis diaria | Mecanismo principal | Precaución |
|---|---:|---|---|
| Ginkgo biloba | 60–100 mg, 24/6 | Congestión clitoriana, sensibilidad, lubricación | Anticoagulantes, MAOIs |
| Ginseng Panax / Americano | 100–200 mg | Energía, protección de paredes vaginales en menopausia | Precaución con hipertensión |
| L-Arginina | 500–1000 mg | Circulación pélvica, respuesta orgásmica | Supervisión médica si enfermedad cardiovascular |
| Calcio | 1000–1200 mg | Reduce síntomas de SPM | Requiere vitamina D adecuada |
| Magnesio | 200 mg | Retención de líquidos, hinchazón, cólicos | Buen perfil de seguridad en dosis baja |
| Vitamina B6 | 25–50 mg | Ánimo, SPM | No superar 200 mg/día |
| Folato | 400 mcg | Dopamina, deseo | Seguro en dosis estándar |
| Chasteberry o Black Cohosh | Chasteberry 30–40 mg / Black cohosh 40 mg | Equilibrio hormonal, dolor mamario, bochornos | Evitar embarazo/HRT sin supervisión |

---

## 1.3 Catálogo de efectos sexuales de medicamentos

### Nuevo tipo sugerido: `MedicationSexualSideEffectProfile`

| Categoría | Ejemplos | Efectos sexuales | Alternativas a discutir con médico | Flag de seguridad |
|---|---|---|---|---|
| Antihipertensivos | diuréticos, beta-bloqueadores, alfa-bloqueadores | menor flujo genital, DE, menor libido, sequedad | IECA, calcioantagonistas | no suspender |
| Antidepresivos | SSRI, tricíclicos, IMAO | baja libido, anorgasmia, eyaculación retardada | bupropión, ajuste de dosis, timing | no suspender |
| Antiulcerosos H2 | cimetidina | baja testosterona, DE, menor deseo | alternativas H2/IBP según médico | revisar con médico |
| Antihistamínicos | difenhidramina, loratadina | sequedad de mucosas, sedación, menor arousal | alternativas no sedantes | precaución con sueño |
| Benzodiacepinas | diazepam, alprazolam | menor deseo, relajación excesiva, dificultad orgásmica | revisión de ansiolíticos | riesgo de dependencia |
| Anticonceptivos hormonales / progestágenos | combinados, inyecciones | posible menor libido/sensibilidad en algunas mujeres | revisar formulación/vía | no suspender sin método alternativo |

---

## 1.4 Catálogo de cafeína por bebida

### Nuevo tipo sugerido: `CaffeineReference`

| Bebida | Porción | Cafeína aproximada |
|---|---:|---:|
| Café filtrado | 1 taza (240 ml) | 100–135 mg |
| Café instantáneo | 1 taza (240 ml) | 65–100 mg |
| Espresso | 1 shot (30 ml) | 40–60 mg |
| Descafeinado | 1 taza (240 ml) | 2–5 mg |
| Té negro | 1 taza (240 ml) | 40–70 mg |
| Té verde | 1 taza (240 ml) | 25–45 mg |
| Refresco de cola | 1 lata (355 ml) | 35–55 mg |
| Bebida energizante | 1 lata pequeña (250 ml) | 70–80+ mg |
| Chocolate caliente | 1 taza (240 ml) | 5–10 mg |

---

## 1.5 Catálogo sensorial de aromas y colores

### Nuevo tipo sugerido: `SensoryEnvironmentProfile`

#### Aromas

| Familia | Notas | Uso sugerido en app |
|---|---|---|
| Floral | rosa, jazmín, ylang-ylang, lavanda | romance, relajación, intimidad |
| Amaderado / terroso | sándalo, cedro, pachulí | calidez, sensualidad profunda |
| Especiado | canela, clavo, jengibre, regaliz | estimulación, arousal físico |
| Cítrico | limón, bergamota, naranja | energía, ánimo, frescura |
| Oriental / dulce | vainilla, ámbar, almizcle | comodidad, atracción, receptividad |

#### Colores

| Color | Estado emocional/sexual sugerido |
|---|---|
| Rojo | pasión, energía, deseo |
| Azul | calma, reducción de ansiedad |
| Verde | equilibrio, armonía, relajación |
| Púrpura | lujo, imaginación romántica |
| Amarillo | ánimo, optimismo, calidez |
| Rosa | ternura, afecto, intimidad suave |

---

## 1.6 Catálogo de intensidad de ejercicio

### Nuevo tipo sugerido: `ExerciseIntensityGuide`

| Nivel | Ejemplos | Uso recomendado en app |
|---|---|---|
| Leve | caminar suave, estiramientos, yoga suave, jardinería ligera | inicio, adherencia, recuperación |
| Moderado | caminar rápido, natación recreativa, ciclismo recreativo, baile, tai chi, pesas ligeras | **objetivo principal** para salud sexual |
| Intenso | correr, aeróbicos de alto impacto, tenis individual, fuerza pesada | útil pero con vigilancia de fatiga/sobreentrenamiento |

---

## 1.7 Catálogo de referencia de peso y BMI

### BMI / IMC

| Clasificación | Rango BMI |
|---|---:|
| Bajo peso | < 18.5 |
| Peso normal | 18.5–24.9 |
| Sobrepeso | 25.0–29.9 |
| Obesidad | ≥ 30.0 |

### Tablas de peso Metropolitan Life

Se recomienda guardarlas como **catálogo estático de referencia histórica**, no como regla estricta.

#### Hombres

| Estatura | Complexión pequeña | Complexión mediana | Complexión grande |
|---|---:|---:|---:|
| 5'2" | 128–134 | 131–141 | 138–150 |
| 5'4" | 134–140 | 137–148 | 144–158 |
| 5'6" | 140–147 | 144–156 | 152–167 |
| 5'8" | 146–153 | 150–163 | 159–175 |
| 5'10" | 152–160 | 157–170 | 165–180 |
| 6'0" | 160–169 | 166–179 | 174–191 |
| 6'2" | 168–178 | 174–188 | 183–201 |

#### Mujeres

| Estatura | Complexión pequeña | Complexión mediana | Complexión grande |
|---|---:|---:|---:|
| 4'10" | 102–111 | 109–121 | 118–131 |
| 5'0" | 106–115 | 113–126 | 122–137 |
| 5'2" | 111–122 | 120–132 | 129–144 |
| 5'4" | 117–129 | 127–140 | 137–152 |
| 5'6" | 123–136 | 133–147 | 143–160 |
| 5'8" | 129–142 | 139–153 | 149–168 |
| 5'10" | 135–148 | 145–160 | 156–175 |

---

## 1.8 Escala de Somnolencia de Stanford

### Nuevo tipo sugerido: `StanfordSleepinessScaleEntry`

| Nivel | Descripción |
|---:|---|
| 1 | Activo, vital, alerta, completamente despierto |
| 2 | Funcionamiento alto, pero no en pico absoluto; capaz de concentrarse |
| 3 | Despierto pero relajado; receptivo, aunque no al máximo de alerta |
| 4 | Algo nublado o ralentizado; pensamiento un poco más lento |
| 5 | Mente nublada; perdiendo interés en permanecer despierto |
| 6 | Somnoliento, aturdido, luchando por mantenerse despierto |
| 7 | Casi en ensoñación; inicio del sueño inminente |

**Nota crítica:**  
La frase del libro sobre “puntuar por debajo de 3” es ambigua/inconsistente.  
Para el sistema, implementar mejor:

- `SSS >= 4` frecuente → alerta de deuda de sueño.
- `SSS 1–3` frecuente → alerta diurna aceptable.

---

## 1.9 Plantilla diaria del programa de 30 días

### Nuevo tipo sugerido: `ThirtyDayProgramTemplate`

| Bloque diario | Contenido esperado |
|---|---|
| Dieta | desayuno / almuerzo / cena / postre opcional |
| Suplementos | stack AM / stack PM |
| Medicación | registro y revisión médica si aplica |
| Estimulación sensual | rotación de tacto, aroma, sonido, vista |
| Ejercicio | 30 min moderados o lifestyle exercise |
| Sueño | hora de dormir, hora de despertar, energía 1–5 |
| Estrés | respiración, meditación, yoga, visualización, baño, música |

---

# 2) Reglas actualizadas para el motor (`TrainingRule`)

---

## 2.1 Reglas de dieta y alimentos

### Regla: `food_sexual_matrix`

- **Descripción:** priorizar alimentos con beneficio sexual directo o indirecto.
- **Tipo:** nutrición.
- **Métrica principal:** variedad de alimentos funcionales por semana.
- **Valores:**
  - Objetivo: incluir diariamente al menos 1 alimento de matriz sexual.
  - Ideal: rotar frutas/vegetales y proteínas funcionales durante la semana.
- **Condiciones:**
  - usuarios con objetivo de salud sexual, energía o vascular.
- **Fuente:** Cap. 1, tablas reconstruidas.
- **Comentarios:**
  - no forzar cantidades exactas si el libro no las especifica.

---

### Regla: `food_nitric_oxide_support`

- **Descripción:** favorecer alimentos asociados a vasodilatación y óxido nítrico.
- **Tipo:** nutrición / vascular.
- **Métrica principal:** frecuencia semanal.
- **Valores:**
  - Ziel: incluir varias veces por semana:
    - ajo
    - hojas verdes
    - melón/sandía
    - legumbres
    - pollo/pavo
- **Condiciones:**
  - especialmente útil en usuarios con objetivo de erección/arousal.
- **Fuente:** Cap. 1 tablas + Cap. 2 (arginina).
- **Comentarios:**
  - cualitativo; no convertir en dosis terapéutica.

---

### Regla: `food_zinc_fertility`

- **Descripción:** asegurar fuentes de zinc para libido y fertilidad masculina.
- **Tipo:** nutrición / fertilidad.
- **Métrica principal:** frecuencia semanal de alimentos ricos en zinc.
- **Valores:**
  - incluir:
    - ostras/mariscos
    - legumbres
    - semillas/nueces
    - carne magra ocasional
- **Condiciones:**
  - hombres con interés en fertilidad/libido.
- **Fuente:** Cap. 1 y tabla de proteínas.
- **Comentarios:**
  - suplemento de zinc solo hasta 15 mg/día de forma regular.

---

### Regla: `food_soy_pms_menopause`

- **Descripción:** incorporar soja como apoyo dietario en PMS/menopausia.
- **Tipo:** nutrición / hormonal.
- **Métrica principal:** frecuencia semanal.
- **Valores:**
  - cualitativo: incorporar tofu, tempeh, edamame o soymilk regularmente.
- **Condiciones:**
  - mujeres con PMS o síntomas menopáusicos leves.
- **Fuente:** Cap. 1 y tabla de proteínas.
- **Comentarios:**
  - no sustituye terapia médica.

---

## 2.2 Reglas de suplementos

### Regla: `supp_male_stack`

- **Descripción:** stack masculino del libro como referencia protocolizada.
- **Tipo:** suplementación.
- **Métrica principal:** protocolo diario.
- **Valores:**
  - ginkgo 60–100 mg
  - ginseng 100–200 mg
  - arginina 1000–3000 mg
  - zinc 15 mg
  - C 250–500 mg
  - B6/B12/folato
  - E 30 IU base
- **Condiciones:**
  - solo con aprobación médica.
- **Fuente:** Cap. 2, tabla reconstruida.
- **Comentarios:**
  - no sugerir si hay anticoagulantes, hipertensión no controlada o embarazo de pareja (no aplica, pero sí precaución general).

---

### Regla: `supp_female_stack`

- **Descripción:** stack femenino del libro.
- **Tipo:** suplementación.
- **Métrica principal:** protocolo diario.
- **Valores:**
  - ginkgo 60–100 mg
  - ginseng 100–200 mg
  - arginina 500–1000 mg
  - calcio 1000–1200 mg
  - magnesio 200 mg
  - B6 25–50 mg
  - folato 400 mcg
  - chasteberry 30–40 mg o black cohosh 40 mg
- **Condiciones:**
  - no sugerir chasteberry/black cohosh en embarazo o HRT sin supervisión.
- **Fuente:** Cap. 2, tabla reconstruida.
- **Comentarios:**
  - black cohosh: 2–8 semanas; evitar >1000 mg.

---

### Regla: `supp_contraindication_gate`

- **Descripción:** bloquear sugerencias de suplementos si hay contraindicaciones.
- **Tipo:** seguridad.
- **Métrica principal:** presencia de flags.
- **Valores:**
  - `blockIf`:
    - embarazo
    - lactancia
    - anticoagulantes + ginkgo
    - MAOIs + ginkgo
    - antihipertensivos sin revisión médica + ginseng/arginina
    - HRT sin supervisión + fitoestrógenos
- **Fuente:** Cap. 2 y Capítulo 3.
- **Comentarios:**
  - regla crítica para evitar automatización peligrosa.

---

## 2.3 Reglas de medicamentos y sustancias

### Regla: `med_sexual_side_effect_review`

- **Descripción:** detectar fármacos con efectos sexuales adversos y sugerir revisión médica.
- **Tipo:** medicación / seguridad.
- **Métrica principal:** categoría farmacológica activa.
- **Valores:**
  - si usuario registra:
    - antihipertensivos
    - antidepresivos
    - cimetidina
    - benzodiacepinas
    - antihistamínicos sedantes
    - anticonceptivos hormonales
  - entonces:
    - mostrar posible efecto sexual
    - sugerir consulta médica
    - nunca sugerir suspensión abrupta
- **Fuente:** Cap. 3, tabla reconstruida.

---

### Regla: `caffeine_limit_mg`

- **Descripción:** limitar cafeína a rango moderado.
- **Tipo:** sustancias / sueño / energía.
- **Métrica principal:** mg cafeína/día.
- **Valores:**
  - óptimo: 200–300 mg/día
  - riesgo: >300 mg/día
- **Condiciones:**
  - reforzar límite si hay:
    - insomnio
    - ansiedad
    - PMS
- **Fuente:** Cap. 3 y tabla de cafeína.
- **Comentarios:**
  - equivalente aproximado a 2 tazas de café o 4 refrescos de cola.

---

### Regla: `caffeine_pms_sleep_reduce`

- **Descripción:** en PMS o insomnio, reducir o eliminar cafeína.
- **Tipo:** sustancias / condicional.
- **Métrica principal:** mg cafeína/día.
- **Valores:**
  - sugerido: 0–100 mg/día si PMS severo o insomnio activo.
- **Fuente:** Cap. 3 y Capítulo 6.
- **Comentarios:**
  - cualitativo pero útil como regla condicional.

---

## 2.4 Reglas de ejercicio y peso

### Regla: `exercise_intensity_target`

- **Descripción:** orientar el entrenamiento a intensidad moderada como objetivo principal.
- **Tipo:** ejercicio.
- **Métrica principal:** nivel de intensidad semanal.
- **Valores:**
  - objetivo: 30 minutos, 3–4 veces/semana, moderado.
  - principiantes: leve/lifestyle diario.
  - avanzado: intenso ocasional, con control de fatiga.
- **Condiciones:**
  - salud sexual general.
- **Fuente:** Cap. 5, tabla de ejercicio.
- **Comentarios:**
  - moderado > intenso crónico si hay fatiga o baja libido.

---

### Regla: `weight_bmi_extremes_caution`

- **Descripción:** marcar riesgo en extremos de BMI.
- **Tipo:** composición corporal / seguridad.
- **Métrica principal:** BMI.
- **Valores:**
  - alerta: <18.5 o ≥30
  - seguimiento: 25–29.9
  - rango general saludable: 18.5–24.9
- **Condiciones:**
  - no usar como diagnóstico único.
- **Fuente:** Cap. 5, tabla BMI.
- **Comentarios:**
  - el libro enfatiza evitar extremos de peso y ejercicio.

---

## 2.5 Reglas de sueño con SSS

### Regla: `sleep_sss_daytime_sleepiness`

- **Descripción:** usar la escala de Stanford para detectar somnolencia diurna.
- **Tipo:** sueño / evaluación.
- **Métrica principal:** SSS score.
- **Valores:**
  - alerta si `SSS >= 4` con frecuencia.
  - normal si `SSS 1–3`.
- **Condiciones:**
  - registrar en varios momentos del día.
- **Fuente:** Cap. 6, tabla SSS.
- **Comentarios:**
  - ⚠️ no usar literalmente “score < 3” como riesgo por inconsistencia textual.

---

## 2.6 Reglas sensoriales

### Regla: `sensory_environment_goal`

- **Descripción:** sugerir combinación de color/aroma según objetivo emocional/sexual.
- **Tipo:** estimulación sensual / ambiente.
- **Métrica principal:** objetivo del usuario.
- **Valores:**
  - si objetivo = calma → azul/verde + lavanda/manzanilla
  - si objetivo = pasión → rojo + especiado/canela
  - si objetivo = ánimo/energía → amarillo + cítrico
  - si objetivo = intimidad suave → rosa + floral/vainilla
- **Condiciones:**
  - sugerencias no clínicas.
- **Fuente:** Cap. 4, tablas reconstruidas.
- **Comentarios:**
  - no usar aceites esenciales directamente en genitales.

---

## 2.7 Regla de programa de 30 días

### Regla: `program_30day_daily_ledger`

- **Descripción:** registrar diariamente los 7 elementos.
- **Tipo:** adherencia / tracking.
- **Métrica principal:** checklist diario.
- **Valores:**
  - dieta: desayuno/almuerzo/cena
  - suplementos: AM/PM
  - medicación: revisión/registro
  - sensual: 1 actividad sensorial
  - ejercicio: 30 min
  - sueño: horas + energía
  - estrés: 1 técnica
- **Condiciones:**
  - usuarios en onboarding de 30 días.
- **Fuente:** programa de 30 días.
- **Comentarios:**
  - postres opcionales; sustituciones permitidas.

---

# 3) Ejecución de las 9 recomendaciones de implementación

A continuación desarrollo las 9 recomendaciones ya con los datos completos.

---

## Recomendación 1 — Crear `rules/lifestyle_sleep.ts`

### Objetivo
Reglas de sueño para recuperación hormonal, energía y libido.

### Datos nuevos que ahora sí se pueden usar
- Escala de Stanford completa.
- Registro diario de energía 1–5.
- Regla de siestas.
- Regla de horario regular.

### Reglas sugeridas

```ts
export const LifestyleSleepRules = [
  {
    id: 'sleep_duration_target',
    metric: 'sleepHours',
    optimal: { min: 7, max: 8 },
    alertBelow: 6,
    escalateBelow: 5,
  },
  {
    id: 'sleep_latency_normal',
    metric: 'sleepLatencyMinutes',
    expected: 15,
    debtSignal: '<5',
  },
  {
    id: 'sss_daytime_sleepiness',
    metric: 'stanfordSleepinessScore',
    alertIf: '>=4 frequently',
    note: 'no usar score<3 literal por inconsistencia textual',
  },
  {
    id: 'nap_limit',
    metric: 'napMinutes',
    max: 30,
    avoidIf: 'insomnia',
  },
  {
    id: 'stimulant_cutoff',
    metric: 'caffeineMg',
    cutoffHoursBeforeBed: 6,
  },
  {
    id: 'alcohol_sleep_cutoff',
    metric: 'alcoholDrinksEvening',
    avoidAfter: '19:00',
  }
];
```

### Integración recomendada
- Añadir campo `energyLevel1to5` al ledger.
- Añadir campo `sssScore` opcional.
- Disparar alertas si:
  - sueño < 6 h
  - SSS >= 4 frecuente
  - cafeína tarde
  - alcohol nocturno

---

## Recomendación 2 — Crear `rules/lifestyle_stress_recovery.ts`

### Objetivo
Convertir las técnicas del capítulo 7 en reglas de recuperación y regulación.

### Reglas clave

```ts
export const LifestyleStressRules = [
  {
    id: 'daily_break_minimum',
    metric: 'dailyPleasureMinutes',
    min: 20,
  },
  {
    id: 'breathing_protocol',
    metric: 'breathingSessionsPerDay',
    target: 2,
    durationMinutes: 5,
  },
  {
    id: 'meditation_minimum',
    metric: 'meditationMinutesPerDay',
    min: 10,
  },
  {
    id: 'yoga_session',
    metric: 'yogaMinutesPerSession',
    target: 30,
  },
  {
    id: 'weekly_date_night',
    metric: 'intimacyAppointmentsPerWeek',
    target: 1,
    expectation: 'no performance goal',
  },
  {
    id: 'massage_microdose',
    metric: 'massageMinutes',
    target: '5–10',
    frequency: 'varias veces/semana',
  }
];
```

### Integración recomendada
- Marcar `stressLevel1to10` en ledger.
- Si estrés alto:
  - sugerir respiración primero
  - luego masaje corto
  - luego baño/música/aromaterapia

---

## Recomendación 3 — Crear `rules/cardiovascular_sexual_health.ts`

### Objetivo
Unir dieta, ejercicio, cafeína, alcohol y tabaco en un módulo cardiovascular-sexual.

### Reglas clave

```ts
export const CardiovascularSexualHealthRules = [
  {
    id: 'fat_quality_over_quantity',
    principle: 'priorizar pescado, aguacate, frutos secos, aceites vegetales',
    avoid: 'grasas malas, frituras, procesados',
  },
  {
    id: 'cholesterol_limit',
    metric: 'cholesterolMgPerDay',
    max: 300,
  },
  {
    id: 'hydration_minimum',
    metric: 'waterLitersPerDay',
    min: 2,
  },
  {
    id: 'food_matrix_sexual_variety',
    metric: 'functionalFoodsPerDay',
    min: 1,
  },
  {
    id: 'caffeine_limit',
    metric: 'caffeineMgPerDay',
    optimal: '200–300',
    highRisk: '>300',
  },
  {
    id: 'alcohol_limit',
    metric: 'drinksPerDay',
    optimal: '0–2',
    highRisk: '>=4',
  },
  {
    id: 'nicotine_stop',
    metric: 'smokingStatus',
    target: 'never/former',
  },
  {
    id: 'moderate_exercise_base',
    metric: 'exerciseMinutesPerWeek',
    target: '90–120',
    sessions: '3–4',
    intensity: 'moderate',
  }
];
```

### Integración recomendada
- Si hay objetivo de erección/arousal:
  - priorizar vascular rules
  - activar `food_nitric_oxide_support`
  - revisar tabaco y alcohol primero

---

## Recomendación 4 — Extender `FocusId`, `BodyZoneId` y `MovementPattern`

### Extensiones sugeridas

```ts
enum FocusId {
  'sexual-health',
  'cardiovascular-health',
  'hormonal-balance',
  'intimacy-connection',
  'energy-libido',
  'sleep-recovery',
  'stress-regulation'
}

enum BodyZoneId {
  'pelvic-genital',
  'cardiovascular-system',
  'endocrine-system',
  'nervous-system'
}

enum MovementPattern {
  'walking',
  'swimming',
  'cycling',
  'dance',
  'tai-chi',
  'yoga',
  'light-resistance',
  'lifestyle-activity'
}
```

### Uso recomendado
- `sexual-health` como foco transversal.
- `pelvic-genital` no debe usarse para ejercicios pélvicos específicos si el libro no los detalla.
- `walking` debe ser el movimiento base del libro.

---

## Recomendación 5 — Implementar `SupplementProtocol` con stacks completos

### Interfaz sugerida

```ts
interface SupplementProtocol {
  id: string;
  population: 'male' | 'female';
  items: {
    supplement: string;
    dose: string;
    standardization?: string;
    evidenceTier: 'yes' | 'maybe' | 'no';
    durationWeeksMin?: number;
    contraindications: string[];
    clinicianApprovalRequired: boolean;
  }[];
}
```

### Reglas de negocio
- Mostrar stack solo si:
  - usuario es adulto
  - no hay contraindicaciones activas
  - ha confirmado supervisión médica
- Nunca presentar como “cura”.
- Mostrar duración esperada:
  - ginkgo: 8 semanas
  - black cohosh: 2–8 semanas
  - chasteberry: varios meses

---

## Recomendación 6 — Implementar `MedicationSexualSideEffectProfile` + `CaffeineReference`

### Módulo de medicación
El sistema debe poder:
- detectar categoría farmacológica
- mostrar posibles efectos sexuales
- sugerir revisión médica
- bloquear sugerencia de suspender medicación

### Módulo de cafeína
El sistema debe:
- convertir bebidas a mg
- sumar ingesta diaria
- alertar si >300 mg
- sugerir reducción si:
  - PMS
  - insomnio
  - ansiedad

---

## Recomendación 7 — Añadir SkillPaths con datos sensoriales y de ejercicio

### SkillPath 1: `sensory-environment-design`

| Step | Nombre | Objetivo | Criterio de avance |
|---|---|---|---|
| 1 | Identificar objetivo | calma / pasión / ánimo / intimidad | usuario elige objetivo |
| 2 | Elegir color dominante | azul, rojo, verde, etc. | ambiente configurado |
| 3 | Elegir aroma | floral, cítrico, especiado | aroma seleccionado |
| 4 | Preparar dormitorio | sin trabajo, luz suave, orden | espacio listo |
| 5 | Integrar estímulo en rutina | velas, música, aceite | uso repetido sin ansiedad |

---

### SkillPath 2: `sexual-fitness-aerobic-base`

| Step | Nombre | Objetivo | Criterio de avance |
|---|---|---|---|
| 1 | Lifestyle activity | romper sedentarismo | 30 min incidentales/día |
| 2 | Caminata suave | adherencia | regularidad sin dolor |
| 3 | Caminata rápida / moderado | base cardiovascular | 30 min, 3–4x/semana |
| 4 | Variedad | natación, baile, bici | mantenimiento |
| 5 | Ajuste de intensidad | evitar fatiga sexual | energía/libido estables |

---

### SkillPath 3: `tantric-intimacy`
Mantener progresión previa:
- ritual
- respiración sincronizada
- contacto visual
- quietud
- sexo sin orgasmo como meta

---

## Recomendación 8 — Crear motor de Red Flags clínicas

### Flags obligatorios

```ts
export const SexualHealthRedFlags = [
  {
    symptom: 'Disfunción eréctil persistente',
    action: 'medical_review',
    reason: 'puede ser señal cardiovascular temprana'
  },
  {
    symptom: 'DE + dolor torácico / disnea',
    action: 'urgent_medical_evaluation'
  },
  {
    symptom: 'Ronquido + pausas respiratorias + sueño diurno',
    action: 'sleep_study_referral'
  },
  {
    symptom: 'Baja libido persistente + ánimo depresivo',
    action: 'mental_health_review'
  },
  {
    symptom: 'Dolor durante sexo / sangrado',
    action: 'clinical_evaluation'
  },
  {
    symptom: 'Uso de medicamentos con efectos sexuales',
    action: 'medication_review'
  },
  {
    symptom: 'Embarazo / lactancia + solicitud de suplementos',
    action: 'block_auto_suggestion'
  }
];
```

### Regla de oro
- El sistema puede:
  - educar
  - trackear
  - sugerir hábitos
- El sistema **no debe**:
  - diagnosticar
  - prescribir
  - suspender medicación
  - tratar condiciones clínicas complejas

---

## Recomendación 9 — Implementar el tracker de 30 días como `Ledger` especial

### Nuevo tipo sugerido: `SexualFitness30DayLedger`

```ts
interface SexualFitness30DayLedger {
  day: number;
  diet: {
    breakfastLogged: boolean;
    lunchLogged: boolean;
    dinnerLogged: boolean;
    waterGlasses: number;
  };
  supplements: {
    amStackTaken: boolean;
    pmStackTaken: boolean;
  };
  medications: {
    reviewed: boolean;
    sideEffectsLogged: boolean;
  };
  sensual: {
    activityDone: boolean;
    modality: 'touch' | 'smell' | 'sound' | 'sight' | 'tantra';
  };
  exercise: {
    minutes: number;
    intensity: 'mild' | 'moderate' | 'intense';
  };
  sleep: {
    timeToBed: string;
    wakeTime: string;
    energyLevel1to5: number;
  };
  stress: {
    techniqueDone: boolean;
    technique: 'breathing' | 'meditation' | 'yoga' | 'visualization' | 'music' | 'bath' | 'aromatherapy';
  };
}
```

### Lógica recomendada
- Inicio preferente en sábado.
- Fines de semana:
  - más énfasis en date night / sensualidad / actividades largas.
- Entre semana:
  - micro-hábitos.
- Permitir sustituciones.
- No penalizar duramente los deslices.
- Mostrar recordatorio:
  - “si fallaste un día, retoma el programa sin culpa”.

---

# 4) Conclusión operativa

Con las tablas que acabas de proporcionar, el libro ya puede integrarse de forma mucho más completa en *Plan Maestro OS*:

- **Dieta:** ahora sí se puede modelar una matriz de alimentos con beneficio sexual.
- **Suplementos:** ya hay stacks masculino/femenino con dosis y mecanismo.
- **Medicamentos:** ya hay mapa de efectos sexuales y alternativas conversacionales.
- **Sensorial:** ya hay mapping de aromas y colores para SkillSteps ambientales.
- **Ejercicio:** ya hay clasificación de intensidad y referencia de peso/BMI.
- **Sueño:** ya hay escala SSS completa.
- **Programa 30 días:** ya hay plantilla diaria para construir un onboarding real.

---

## 5) Recomendación final de siguiente paso

Si quieres, en el siguiente turno puedo hacer una de estas tres cosas:

1. **Generar el documento Markdown final consolidado completo**  
   (una sola versión definitiva del libro, ya con todo integrado, listo para copiar al repo de conocimiento).

2. **Convertir esto directamente en especificación técnica para agentes de código**  
   con interfaces TypeScript completas, enums, catálogos JSON y reglas listas para implementar.

3. **Reconstruir el programa de 30 días día por día**  
   usando las recetas del libro para crear un plan por slots (aunque el mapeo exacto no esté completo, puedo armar una versión operativa y consistente).

Si quieres, puedo continuar directamente con la **opción 2**, que es la más útil para los agentes de implementación.
