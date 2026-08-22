# acsm-exercise-testing-prescription-10ed — Extracción recuperada de chat

> **sourceId:** `acsm-exercise-testing-prescription-10ed` · **origen:** `chat-export-1787414908330` (Extracción de Reglas para Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# ACSM's Guidelines for Exercise Testing and Prescription (10th Edition) — Extracción para Plan Maestro OS

> Extracción sistemática de reglas cuantitativas, protocolos, progresiones y criterios clínicos del texto canónico de ACSM (2018). Se parafrasea todo el contenido; no se copian párrafos literales. El libro es extremadamente denso en datos numéricos (umbrales, rangos, frecuencias, intensidades), lo que lo hace ideal para alimentar un motor de reglas.

---

## 1) Metadatos del libro

- **Título:** ACSM's Guidelines for Exercise Testing and Prescription
- **Autor(es):** Deborah Riebe (Senior Editor), Jonathan K. Ehrman, Gary Liguori, Meir Magal (Associate Editors); American College of Sports Medicine
- **Año:** 2018 (10ª edición; copyright 2018, publicado como "Tenth Edition, 2016" en portada interna)
- **Disciplina principal:** Medicina del ejercicio, fisiología del ejercicio, prescripción de ejercicio, evaluación de fitness, rehabilitación cardíaca y pulmonar
- **Enfoque poblacional:** Población general adulta (18–65+), adultos mayores (≥65), niños y adolescentes (6–17), embarazadas, pacientes con enfermedad cardiovascular, pulmonar, metabólica, musculoesquelética, neurológica y oncológica
- **Notas de alcance:**
  - **Cubre:** screening preparticipación, evaluación pre-ejercicio, testing de fitness (CRF, fuerza, flexibilidad, composición corporal), testing clínico (GXT, CPET, pruebas de campo), prescripción FITT-VP para adultos sanos y poblaciones especiales, consideraciones ambientales, rehabilitación cardíaca/pulmonar, prescripción para enfermedades metabólicas (diabetes, dislipidemia, hipertensión, síndrome metabólico, obesidad), enfermedades crónicas (artritis, cáncer, CP, fibromialgia, VIH, discapacidad intelectual, enfermedad renal, EM, osteoporosis, Parkinson, lesión medular), estrategias conductuales.
  - **NO cubre explícitamente:** programación de fuerza para atletas de élite/competición (remite a position stands ACSM específicos), nutrición deportiva detallada, calistenia/progresiones de skills gimnásticos, periodización avanzada. El libro se posiciona como *guidelines* (no *standards of practice*), permitiendo desviación con juicio clínico.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- **`PreparticipationScreeningResult`** (opcional):
  - Descripción: Resultado del algoritmo de screening ACSM (Cap. 2). Determina si se necesita clearance médico antes de iniciar/progresar ejercicio.
  - Campos sugeridos: `currentActivityLevel` (sedentario | activo), `hasKnownDisease` (CV | metabólica | renal), `hasSignsOrSymptoms` (boolean), `desiredIntensity` (ligera | moderada | vigorosa), `needsMedicalClearance` (boolean), `clearanceType` (ninguna | general | urgente)
  - Referencias: Cap. 2, Figura 2.2 (algoritmo), p. 28–39

- **`CVDRiskFactorProfile`** (opcional):
  - Descripción: Perfil de factores de riesgo cardiovascular según ACSM (ya no se usa para screening preparticipación, pero sí para evaluación pre-ejercicio y educación).
  - Campos sugeridos: `age`, `familyHistory`, `smoking`, `sedentaryLifestyle`, `obesity` (BMI ≥30), `hypertension` (≥140/90), `dyslipidemia` (LDL ≥130 o HDL <40), `prediabetes` (FBG ≥100), `positiveRiskFactorCount`, `negativeRiskFactor` (HDL ≥60 resta 1)
  - Referencias: Cap. 3, Tabla 3.1

- **`ExerciseIntensityZone`** (opcional):
  - Descripción: Clasificación estandarizada de intensidad de ejercicio.
  - Campos sugeridos: `absoluteMETs` (rango), `relativePctHRR` (rango), `relativePctVO2R` (rango), `relativePctHRmax` (rango), `RPE_6_20` (rango), `RPE_0_10` (rango), `label` (sedentary | light | moderate | vigorous | near-maximal | maximal)
  - Referencias: Cap. 6, Tabla 6.1

- **`ClinicalRiskStratification`** (opcional):
  - Descripción: Estratificación de riesgo AACVPR para pacientes en rehabilitación cardíaca.
  - Campos sugeridos: `level` (lowest | moderate | highest), `criteria` (array de criterios cumplidos), `ecgMonitoringSessions` (número de sesiones con monitorización continua requeridas)
  - Referencias: Cap. 2, Box 2.2; Cap. 9

- **`FITT_VP_Prescription`** (opcional):
  - Descripción: Prescripción de ejercicio completa con los 6 componentes FITT-VP.
  - Campos sugeridos: `frequency` (días/semana), `intensity` (rango con método), `time` (min/sesión y min/semana), `type` (modalidad), `volume` (MET-min/semana, kcal/semana, sets×reps), `progression` (regla de incremento)
  - Referencias: Cap. 6, Tabla 6.5 (aeróbico), Tabla 6.6 (resistencia), Tabla 6.7 (flexibilidad), Tabla 6.8 (neuromotor)

- **`EnvironmentalCondition`** (opcional):
  - Descripción: Condiciones ambientales que modifican la prescripción.
  - Campos sugeridos: `type` (altitude | cold | heat), `severity` (low | moderate | high | very_high), `altitudeMeters`, `temperatureC`, `WBGT_C`, `windChillC`, `modificationsRequired` (array)
  - Referencias: Cap. 8

- **`PainOrSymptomFlag`** (opcional):
  - Descripción: Señales de alarma que requieren detención de ejercicio o derivación médica.
  - Campos sugeridos: `symptomType` (angina | dyspnea | claudication | dizziness | etc.), `severityScale` (0-10 | Borg CR10 | categórica), `actionRequired` (stop | reduce | monitor | refer), `context` (during_exercise | post_exercise | at_rest)
  - Referencias: Cap. 2 Tabla 2.1; Cap. 5 Box 5.4; Cap. 9 Fig 5.3

### 2.2 Mapeo a tipos existentes

- **`FocusId: cardio-respiratory-fitness`**
  - El libro lo trata como componente central de salud. VO2max es el criterio gold standard. Proporciona ecuaciones de predicción, protocolos de testing submáximo y máximo, normas percentiles por edad/sexo (Tabla 4.7), y prescripción FITT completa. Bajo CRF (cuartil inferior) se asocia con 2–5× riesgo de mortalidad CV.

- **`FocusId: muscular-strength` / `muscular-endurance`**
  - Tratado como componente de fitness relacionado con salud. Protocolos 1-RM y múltiple-RM, normas para bench press y leg press (Tablas 4.9, 4.10), push-up test (Tabla 4.11). Prescripción de resistencia con rangos de intensidad (%1RM), sets, reps, frecuencia.

- **`FocusId: flexibility` / `mobility`**
  - Flexibilidad como ROM articular. Sit-and-reach test, normas (Tabla 4.13). Prescripción: estático, dinámico, PNF, balístico. Volumen: 60s total por articulación, ≥2-3 d/semana.

- **`FocusId: body-composition`**
  - BMI, circunferencias (cintura, cadera, WHR), skinfolds (ecuaciones generalizadas), densitometría, BIA. Normas percentiles (Tablas 4.4, 4.5). Riesgo por WHR y circunferencia de cintura.

- **`FocusId: tendon-health`**
  - ⚠️ El libro NO tiene un capítulo dedicado a tendinopatías. Menciona tendinitis/tendinopatía tangencialmente en contextos de lesión musculoesquelética por ejercicio (Cap. 1) y en contraindicaciones de resistencia excéntrica a >100% 1RM (riesgo de rabdomiólisis, Cap. 6). No es fuente principal para este foco.

- **`BodyZoneId: shoulder`**
  - Lesiones MSI frecuentes en deportes de contacto. En post-esternotomía (Cap. 9): restricción de ROM y carga de miembro superior 10–12 semanas. Tras implante de marcapasos/ICD: evitar actividades vigorosas de miembro superior 3–4 semanas.

- **`BodyZoneId: lumbar` / `low-back`**
  - Cap. 7 sección LBP: prevalencia 84% vida. Clasificación (agudo <6 sem, subagudo 6-12, crónico >12). 90% episodios agudos resuelven en 6 sem. Ejercicio aeróbico (caminar, bicicleta, natación) con mejor evidencia. Evitar reposo en cama. Precauciones con flexión/extensión de tronco.

- **`BodyZoneId: knee`**
  - Sitio más común de MSI en ejercicio (Cap. 1). OA de rodilla: ejercicio aeróbico y de resistencia recomendado (Cap. 11). Condropatía no tratada en profundidad.

- **`BodyZoneId: hip`**
  - OA de cadera: ejercicio aeróbico y resistencia (Cap. 11). Flexibilidad de cadera relevante en LBP (Cap. 7).

- **`BodyZoneId: wrist / hand`**
  - Grip strength como predictor de mortalidad y función en mayores (Cap. 4). Protocolo de handgrip (Box 4.6).

- **`BodyZoneId: ankle / foot`**
  - Cuidado del pie en diabetes con neuropatía periférica (Cap. 10). Calzado apropiado, inspección diaria.

- **`MovementPattern: squat / leg-press`**
  - Leg press como test de fuerza de tren inferior (Tabla 4.10). En resistencia: multijoint (squats, deadlifts, leg press) recomendados (Cap. 6).

- **`MovementPattern: horizontal-push (bench press / push-up)`**
  - Bench press como test de fuerza tren superior (Tabla 4.9). Push-up test para resistencia muscular (Box 4.8, Tabla 4.11).

- **`MovementPattern: hinge / deadlift`**
  - Mencionado como ejercicio multijoint recomendado en resistencia (Cap. 6). Sin protocolo específico detallado.

- **`MovementPattern: walking / gait`**
  - Ampliamente cubierto: 6-min walk test, shuttle walk, gait speed como predictor funcional en mayores (Cap. 7), walking como modalidad aeróbica principal, claudication en PAD (Cap. 9).

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: aerobic-frequency-general

- **Descripción:** Frecuencia recomendada de ejercicio aeróbico para adultos sanos.
- **Tipo:** frecuencia
- **Métrica principal:** sessionsPerWeek
- **Valores numéricos:**
  - Moderado: ≥5 d/semana
  - Vigoroso: ≥3 d/semana
  - Combinación moderado+vigoroso: 3–5 d/semana
- **Condiciones de aplicación:** Adultos sanos; para desacondicionados, empezar con menor frecuencia e incrementar gradualmente.
- **Capítulos/páginas:** Cap. 6, sección "Frequency of Exercise"
- **Comentarios:** Frecuencias <3 d/sem atenúan mejoras en CRF. >5 d/sem de vigoroso puede aumentar MSI en no acondicionados.

### Regla: aerobic-intensity-general

- **Descripción:** Rango de intensidad aeróbica para adultos sanos.
- **Tipo:** intensidad
- **Métrica principal:** %HRR o %VO2R
- **Valores numéricos:**
  - Rango óptimo (moderado): 40%–59% HRR o VO2R
  - Rango óptimo (vigoroso): 60%–89% HRR o VO2R
  - Ligero (desacondicionados): 30%–39% HRR o VO2R
  - RPE 6-20: moderado = 12–13; vigoroso = 14–17
  - RPE 0-10: moderado = 5–6; vigoroso = 7–8
  - Talk Test: umbral ventilatorio como proxy válido
- **Condiciones de aplicación:** Adultos sanos. Para desacondicionados, comenzar con ligero-moderado.
- **Capítulos/páginas:** Cap. 6, Tabla 6.1, sección "Intensity of Exercise"
- **Comentarios:** %HRmax puede sub/sobreestimar; preferir HRR, VO2R o métodos umbral. HIIT puede ser efectivo (intervalos cortos <45-240s vigoroso a casi-máximo + recuperación 60-360s).

### Regla: aerobic-duration-general

- **Descripción:** Duración de ejercicio aeróbico para adultos sanos.
- **Tipo:** volumen / tiempo
- **Métrica principal:** minutesPerSession, minutesPerWeek
- **Valores numéricos:**
  - Moderado: 30–60 min/día (≥150 min/semana)
  - Vigoroso: 20–60 min/día (≥75 min/semana)
  - Bouts mínimos: ≥10 min (para acumulación)
  - <20 min/día puede ser beneficioso en previamente sedentarios
  - Para pérdida de peso: ≥60–90 min/día puede ser necesario
- **Condiciones de aplicación:** Adultos sanos. Puede ser continuo o intermitente.
- **Capítulos/páginas:** Cap. 6, sección "Exercise Time (Duration)"
- **Comentarios:** Bouts <10 min pueden ser útiles en muy desacondicionados o HIIT, pero evidencia limitada.

### Regla: aerobic-volume-general

- **Descripción:** Volumen total de ejercicio aeróbico semanal.
- **Tipo:** volumen
- **Métrica principal:** MET-min/week, kcal/week
- **Valores numéricos:**
  - Objetivo razonable: ≥500–1,000 MET-min/semana
  - Equivale a ~1,000 kcal/semana de actividad moderada
  - Equivale a ~150 min/semana de ejercicio moderado
  - Equivale a ~10 MET-h/semana
  - Volúmenes menores (330 kcal/sem = 4 kcal/kg/sem) pueden beneficiar a desacondicionados
  - Para manejo de peso: puede requerirse más
- **Condiciones de aplicación:** Adultos en general.
- **Capítulos/páginas:** Cap. 6, sección "Exercise Volume", Box 6.3
- **Comentarios:** Dosis-respuesta clara: más actividad = más beneficio hasta un punto.

### Regla: aerobic-step-count

- **Descripción:** Objetivos de pasos diarios como proxy de volumen.
- **Tipo:** volumen
- **Métrica principal:** stepsPerDay
- **Valores numéricos:**
  - Objetivo recomendado: ≥7,000 pasos/día
  - Rango para cumplir recomendaciones: 5,400–7,900 pasos/día
  - 100 pasos/min ≈ intensidad moderada
  - 1 milla ≈ 2,000 pasos
  - 30 min caminata moderada ≈ 3,000–4,000 pasos
  - Para mantenimiento de peso: hombres 11,000–12,000; mujeres 8,000–12,000
- **Condiciones de aplicación:** Adultos generales. Imprecisión de dispositivos; combinar con duración.
- **Capítulos/páginas:** Cap. 6, sección "Exercise Volume"
- **Comentarios:** ⚠️ Error sustancial de predicción con podómetros; usar pasos/min + duración como guía, no solo conteo absoluto.

### Regla: aerobic-progression-rate

- **Descripción:** Tasa de progresión del ejercicio aeróbico.
- **Tipo:** progresión
- **Métrica principal:** minutesPerSession increment
- **Valores numéricos:**
  - Fase inicial (primeras 4–6 semanas): incrementar 5–10 min cada 1–2 semanas
  - Después de ≥1 mes regular: ajustar FIT gradualmente en 4–8 meses (más en mayores/desacondicionados)
  - Iniciar con ligero-moderado en inactivos
- **Condiciones de aplicación:** Adultos previamente inactivos. "Start low and go slow."
- **Capítulos/páginas:** Cap. 6, sección "Rate of Progression"
- **Comentarios:** Evitar incrementos grandes en cualquier componente FITT-VP. Monitorizar efectos adversos post-incremento.

### Regla: resistance-frequency-general

- **Descripción:** Frecuencia de entrenamiento de resistencia por grupo muscular.
- **Tipo:** frecuencia
- **Métrica principal:** sessionsPerWeekPerMuscleGroup
- **Valores numéricos:**
  - Rango: 2–3 d/semana por grupo muscular mayor
  - Mínimo 48h entre sesiones del mismo grupo muscular
- **Condiciones de aplicación:** Adultos sanos, no entrenados o recreacionalmente entrenados. Puede ser full-body o split.
- **Capítulos/páginas:** Cap. 6, sección "Frequency of Resistance Exercise"

### Regla: resistance-intensity-general

- **Descripción:** Intensidad y repeticiones para entrenamiento de resistencia.
- **Tipo:** intensidad
- **Métrica principal:** %1RM, repetitionsPerSet
- **Valores numéricos:**
  - Fuerza/hipertrofia general: 8–12 reps/set ≈ 60%–80% 1RM
  - Resistencia muscular: 15–25 reps/set con <50% 1RM, descansos más cortos
  - Mayores/desacondicionados: 10–15 reps con 40%–50% 1RM (muy ligero a ligero)
  - RPE 0-10 para mayores: 5–6
- **Condiciones de aplicación:** Adultos sanos. Para mayores, iniciar más conservador.
- **Capítulos/páginas:** Cap. 6, sección "Volume of Resistance Exercise"
- **Comentarios:** Cada set al punto de fatiga muscular pero NO al fallo (riesgo de lesión, especialmente novatos). Progresión: cuando se superan 12 reps cómodamente, incrementar resistencia.

### Regla: resistance-volume-general

- **Descripción:** Volumen (sets) por grupo muscular.
- **Tipo:** volumen
- **Métrica principal:** setsPerMuscleGroup
- **Valores numéricos:**
  - Recomendado: 2–4 sets por grupo muscular
  - Incluso 1 set es efectivo (especialmente novatos)
  - 4 sets > 2 sets en efectividad
  - Pico de ganancia de fuerza: 4 sets a 60% 1RM, 3×/semana (no entrenados)
  - Recreacionalmente entrenados: 80% 1RM, 4 sets, 2×/semana
  - Descanso entre sets: 2–3 min
- **Condiciones de aplicación:** Adultos sanos.
- **Capítulos/páginas:** Cap. 6, sección "Volume of Resistance Exercise"
- **Comentarios:** El primer set produce la mayor parte del beneficio. Combinar ejercicios para mismo grupo muscular cuenta como sets acumulados.

### Regla: resistance-progression

- **Descripción:** Progresión de carga en resistencia.
- **Tipo:** progresión
- **Métrica principal:** %loadIncrease
- **Valores numéricos:**
  - Incrementar resistencia 5%–10% para tren superior
  - Incrementar resistencia 10%–20% para tren inferior
  - Incrementar cuando se completan 1–2 reps extra sobre objetivo en 2 días consecutivos
- **Condiciones de aplicación:** Cuando el individuo supera cómodamente el rango de reps objetivo.
- **Capítulos/páginas:** Cap. 6, Box 6.7 (procedimiento 1-RM); Cap. 9 (para CR: incrementos 2%–10%)
- **Comentarios:** Mantener técnica correcta. No usar maniobra de Valsalva.

### Regla: flexibility-volume

- **Descripción:** Volumen de ejercicio de flexibilidad por articulación.
- **Tipo:** volumen
- **Métrica principal:** totalStretchSecondsPerJoint, sessionsPerWeek
- **Valores numéricos:**
  - Total: 60 segundos por articulación/estiramiento
  - Hold individual: 10–30 s (hasta punto de tirantez o leve molestia)
  - Mayores: 30–60 s por hold (mayor beneficio)
  - PNF: contracción 20%–75% MVC durante 3–6 s + estiramiento asistido 10–30 s
  - Repeticiones: 2–4 veces para acumular 60 s
  - Frecuencia: ≥2–3 d/semana; diario es más efectivo
  - Rango de mejora crónica: ~3–4 semanas
- **Condiciones de aplicación:** Todos los adultos. Realizar con músculos calientes (post warm-up o post cool-down).
- **Capítulos/páginas:** Cap. 6, sección "Volume of Flexibility Exercise"
- **Comentarios:** Estático pre-ejercicio puede reducir fuerza/potencia (especialmente >45s). Mejor post-ejercicio o como programa independiente.

### Regla: neuromotor-frequency

- **Descripción:** Frecuencia y duración de ejercicio neuromotor (balance, agilidad, coordinación).
- **Tipo:** frecuencia / tiempo
- **Métrica principal:** sessionsPerWeek, minutesPerWeek
- **Valores numéricos:**
  - Frecuencia: ≥2–3 d/semana (especialmente mayores)
  - Duración por sesión: ≥20–30 min
  - Total semanal: ≥60 min
- **Condiciones de aplicación:** Especialmente para mayores, caed frequentes, limitaciones de movilidad. Beneficio probable en adultos jóvenes.
- **Capítulos/páginas:** Cap. 6, sección "Neuromotor Exercise", Tabla 6.8

### Regla: session-structure

- **Descripción:** Estructura de una sesión de ejercicio.
- **Tipo:** protocolo
- **Métrica principal:** minutesPerPhase
- **Valores numéricos:**
  - Warm-up: ≥5–10 min (ligero-moderado, cardio + resistencia muscular)
  - Conditioning: ≥20–60 min (aeróbico, resistencia, neuromotor, deportes; bouts ≥10 min aceptables)
  - Cool-down: ≥5–10 min (ligero-moderado)
  - Stretching: ≥10 min (post warm-up o post cool-down)
- **Condiciones de aplicación:** Todas las sesiones de ejercicio estructurado.
- **Capítulos/páginas:** Cap. 6, Box 6.1

### Regla: hr-max-estimation

- **Descripción:** Ecuaciones para estimar HRmax.
- **Tipo:** intensidad (método de cálculo)
- **Métrica principal:** HRmax (bpm)
- **Valores numéricos:**
  - Clásica: 220 − edad (puede sub/sobreestimar)
  - Tanaka: 208 − (0.7 × edad)
  - Gulati (mujeres): 206 − (0.88 × edad)
  - Gellish: 207 − (0.7 × edad)
  - ⚠️ SD ≥ 10 bpm en todas las ecuaciones
  - Medición directa preferible cuando posible
- **Condiciones de aplicación:** Para prescripción basada en HR cuando no hay test máximo disponible.
- **Capítulos/páginas:** Cap. 6, Tabla 6.2
- **Comentarios:** Para pacientes en β-bloqueadores, usar RPE o relación HR-VO2 directa.

### Regla: met-classification

- **Descripción:** Clasificación de intensidad por METs.
- **Tipo:** intensidad
- **Métrica principal:** METs (absoluto)
- **Valores numéricos:**
  - Sedentario: ≤1.5 METs
  - Ligero: 2.0–2.9 METs
  - Moderado: 3.0–5.9 METs
  - Vigoroso: ≥6.0 METs
  - 1 MET = 3.5 mL·kg⁻¹·min⁻¹ de VO2
- **Condiciones de aplicación:** Clasificación absoluta. ⚠️ Para adultos mayores o desacondicionados, un MET dado representa mayor %VO2max relativo.
- **Capítulos/páginas:** Cap. 1, Tabla 1.1; Cap. 6, Tabla 6.1

### Regla: bp-classification

- **Descripción:** Clasificación de presión arterial (JNC7).
- **Tipo:** evaluación / screening
- **Métrica principal:** SBP/DBP (mmHg)
- **Valores numéricos:**
  - Normal: <120 y <80
  - Prehipertensión: 120–139 o 80–89
  - HTA Estadio 1: 140–159 o 90–99
  - HTA Estadio 2: ≥160 o ≥100
  - Cada +20 SBP o +10 DBP duplica riesgo CV (rango 115/75–185/115)
- **Condiciones de aplicación:** Medición correcta: sentado 5 min, espalda apoyada, brazo a nivel del corazón, manguito ≥80% brazo, promedio de ≥2 mediciones en ≥2 visitas.
- **Capítulos/páginas:** Cap. 3, Tabla 3.2, Box 3.5, Box 3.6

### Regla: lipid-classification

- **Descripción:** Clasificación de lípidos (ATP III).
- **Tipo:** evaluación
- **Métrica principal:** mg/dL
- **Valores numéricos:**
  - LDL-C óptimo: <100; cercano óptimo: 100–129; límite alto: 130–159; alto: 160–189; muy alto: ≥190
  - Colesterol total deseable: <200; límite: 200–239; alto: ≥240
  - HDL-C bajo: <40 (factor de riesgo); alto: ≥60 (factor negativo, resta 1)
  - Triglicéridos normal: <150; límite: 150–199; alto: 200–499; muy alto: ≥500
- **Condiciones de aplicación:** Perfil lipídico en ayunas.
- **Capítulos/páginas:** Cap. 3, Tabla 3.3

### Regla: blood-glucose-classification

- **Descripción:** Criterios diagnósticos de diabetes y prediabetes.
- **Tipo:** evaluación
- **Métrica principal:** mg/dL o %
- **Valores numéricos:**
  - Prediabetes: FBG 100–125 (IFG); OGTT 2h 140–199 (IGT); HbA1c 5.7%–6.4%
  - Diabetes: FBG ≥126; OGTT 2h ≥200; HbA1c ≥6.5%; glucosa al azar ≥200 con síntomas
  - Normal: FBG <100; HbA1c <5.7%
- **Condiciones de aplicación:** Screening en adultos ≥45 o con sobrepeso + factores de riesgo.
- **Capítulos/páginas:** Cap. 10, Tabla 10.1

### Regla: bmi-classification

- **Descripción:** Clasificación de BMI y riesgo asociado.
- **Tipo:** evaluación
- **Métrica principal:** BMI (kg/m²)
- **Valores numéricos:**
  - Bajo peso: <18.5
  - Normal: 18.5–24.9
  - Sobrepeso: 25.0–29.9
  - Obesidad: ≥30.0
  - Circunferencia de cintura de riesgo: hombres >102 cm; mujeres >88 cm
  - WHR muy alto: hombres jóvenes >0.95; mujeres jóvenes >0.86
- **Condiciones de aplicación:** ⚠️ BMI no distingue masa muscular de grasa. Para atletas muy musculosos puede sobrestimar.
- **Capítulos/páginas:** Cap. 4, Tabla 4.1, Tabla 4.2

### Regla: crf-mortality-risk

- **Descripción:** Bajo CRF como predictor de mortalidad.
- **Tipo:** evaluación / riesgo
- **Métrica principal:** VO2max percentile
- **Valores numéricos:**
  - Bajo CRF (cuartil/quintil inferior): 2–5× aumento de mortalidad CV y all-cause
  - Mejoras en CRF se asocian con reducción de mortalidad
- **Condiciones de aplicación:** Independiente de otros factores de riesgo CV.
- **Capítulos/páginas:** Cap. 4, sección "Interpretation of Results"
- **Comentarios:** CRF es un "signo vital" predictivo.

### Regla: submaximal-test-protocol

- **Descripción:** Protocolo general para tests submáximos de CRF.
- **Tipo:** protocolo
- **Métrica principal:** HR steady-state, work rate
- **Valores numéricos:**
  - Warm-up: 2–3 min
  - Stages: 2–3 min con incrementos apropiados
  - HR monitorizado ≥2 veces por stage (último minuto)
  - Steady-state: dos HRs dentro de 5 bpm antes de incrementar
  - Terminar al alcanzar 70% HRR (≈85% HRmax predicho)
  - BP en último minuto de cada stage
  - Cool-down: continuar ejercicio ligero o pasivo; monitorizar ≥5 min
  - No usar HR <110 bpm para estimaciones (variabilidad)
- **Condiciones de aplicación:** Cuando no hay test máximo indicado. Suposiciones: steady-state, relación lineal HR-work, HRmax predicho preciso, eficiencia mecánica similar, sin medicación que altere HR.
- **Capítulos/páginas:** Cap. 4, Box 4.5

### Regla: ymca-cycle-test

- **Descripción:** Protocolo YMCA modificado en cicloergómetro.
- **Tipo:** protocolo
- **Métrica principal:** HR, work rate (W)
- **Valores numéricos:**
  - Stage 1: 25 W (0.5 kg), 3 min
  - Stage 2 según HR del stage 1:
    - HR <80: → 125 W (2.5 kg)
    - HR 80–89: → 100 W (2.0 kg)
    - HR 90–100: → 75 W (1.5 kg)
    - HR >100: → 50 W (1.0 kg)
  - Stages 3-4: +25 W por stage
  - Pedaleo constante: 50 rpm
  - Objetivo: 2 HRs steady-state consecutivos entre 110 bpm y 70% HRR
- **Condiciones de aplicación:** Tests submáximos de CRF.
- **Capítulos/páginas:** Cap. 4, sección "Cycle Ergometer Tests"

### Regla: field-test-vo2max-equations

- **Descripción:** Ecuaciones para estimar VO2max desde tests de campo.
- **Tipo:** evaluación
- **Métrica principal:** VO2max estimado (mL·kg⁻¹·min⁻¹)
- **Valores numéricos:**
  - 1.5-milla run/walk: VO2max = 3.5 + 483/tiempo(min)
  - 12-min Cooper: VO2max = (distancia_m + 504.9)/44.73
  - Rockport 1-milla walk: VO2max = 132.853 − (0.1692×peso_kg) − (0.3877×edad) + (6.315×sexo) − (3.2649×tiempo_min) − (0.1565×HR); sexo: 0=mujer, 1=hombre; SEE = 5.0
  - 6-min walk (para poblaciones clínicas): VO2peak = (0.02×dist_m) − (0.191×edad) − (0.07×peso) + (0.09×altura_cm) + (0.26×RPP×10⁻³) + 2.45; SEE = 2.68
- **Condiciones de aplicación:** Aproximaciones. No sustituyen medición directa por calorimetría indirecta.
- **Capítulos/páginas:** Cap. 4, sección "Field Tests"

### Regla: 1rm-test-protocol

- **Descripción:** Protocolo para test de 1-RM o múltiple RM.
- **Tipo:** protocolo
- **Métrica principal:** 1RM (kg o lb)
- **Valores numéricos:**
  - Familiarización/práctica previa obligatoria
  - Warm-up: reps submáximas del ejercicio específico
  - Determinar 1-RM en ≤4 intentos
  - Descanso entre intentos: 3–5 min
  - Carga inicial: 50%–70% de capacidad percibida
  - Incrementos: 5%–10% tren superior; 10%–20% tren inferior
  - Todas las reps a misma velocidad y ROM
  - Para múltiple RM (2-10): realizar al fallo; predicción más precisa con menos reps
- **Condiciones de aplicación:** Adultos sanos. ⚠️ Conservador en pacientes con enfermedad CV/pulmonar/metabólica: usar 10-15 RM.
- **Capítulos/páginas:** Cap. 4, Box 4.7

### Regla: exercise-test-termination-absolute

- **Descripción:** Criterios absolutos para detener un test de ejercicio.
- **Tipo:** seguridad / terminación
- **Métrica principal:** N/A (criterios clínicos)
- **Valores numéricos:**
  - Elevación ST >1.0 mm en leads sin Q previas
  - Caída SBP >10 mmHg con incremento de carga + evidencia de isquemia
  - Angina moderada-severa
  - Síntomas SNC (ataxia, mareo, casi-síncope)
  - Signos de mala perfusión (cianosis, palidez)
  - Taquicardia ventricular sostenida o arritmia que comprometa gasto cardíaco
  - Dificultades técnicas de monitorización
  - Solicitud del sujeto
- **Condiciones de aplicación:** Tests clínicos de ejercicio sintomático-limited.
- **Capítulos/páginas:** Cap. 5, Box 5.4

### Regla: exercise-test-termination-relative

- **Descripción:** Criterios relativos para detener un test de ejercicio.
- **Tipo:** seguridad / terminación
- **Métrica principal:** N/A
- **Valores numéricos:**
  - Desplazamiento ST horizontal/downsloping >2 mm
  - Caída SBP >10 mmHg sin evidencia de isquemia
  - Dolor torácico creciente
  - Fatiga, disnea, sibilancias, calambres, claudicación
  - Arritmias no sostenidas (multifocales, tripletes, taquicardia supraventricular)
  - SBP >250 mmHg o DBP >115 mmHg
  - Bloqueo de rama nuevo indistinguible de TV
  - SpO2 ≤80%
- **Capítulos/páginas:** Cap. 5, Box 5.4

### Regla: clinical-exercise-test-protocol-duration

- **Descripción:** Duración óptima de un test de ejercicio clínico.
- **Tipo:** protocolo
- **Métrica principal:** minutes (total test duration)
- **Valores numéricos:**
  - Rango óptimo: 6–12 min (para test sintomático-limited)
  - COPD leve-moderado: 8–12 min
  - COPD severo-muy severo: 5–9 min
- **Condiciones de aplicación:** Selección de protocolo (Bruce, Naughton modificado, ramp) según capacidad funcional.
- **Capítulos/páginas:** Cap. 5, sección "Testing Mode and Protocol"

### Regla: hr-response-incremental

- **Descripción:** Respuesta normal de HR y SBP al ejercicio incremental.
- **Tipo:** evaluación
- **Métrica principal:** bpm/MET, mmHg/MET
- **Valores numéricos:**
  - HR: incremento ≈10 bpm por MET
  - SBP: incremento ≈10 mmHg por MET
  - DBP: sin cambio o leve disminución
  - RPP normal pico: 25,000–40,000 mmHg·bpm·min⁻¹
- **Condiciones de aplicación:** Tests de ejercicio incremental.
- **Capítulos/páginas:** Cap. 5, secciones "Heart Rate Response" y "Blood Pressure Response"

### Regla: hr-recovery-prognosis

- **Descripción:** Recuperación de HR post-ejercicio como predictor pronóstico.
- **Tipo:** evaluación / pronóstico
- **Métrica principal:** bpm recovery
- **Valores numéricos:**
  - Anormal: <12 bpm caída en primer minuto de recuperación activa
  - Anormal: <22 bpm caída a los 2 minutos de recuperación
  - Asociado con mayor mortalidad
- **Condiciones de aplicación:** Pacientes con o en riesgo de IHD.
- **Capítulos/páginas:** Cap. 5, sección "Heart Rate Response"

### Regla: st-depression-ischemia

- **Descripción:** Criterios de depresión ST para isquemia.
- **Tipo:** evaluación / diagnóstico
- **Métrica principal:** mm ST depression
- **Valores numéricos:**
  - Positivo: ≥1 mm horizontal o downsloping a 80 ms post-punto J
  - Upsloping ≥2 mm a 80 ms: equívoco (bajo valor predictivo positivo)
  - Debe estar presente en ≥3 ciclos consecutivos en mismo lead
  - Depresión ST en recuperación también indica isquemia
  - Depresión ST a baja carga/RPP: peor pronóstico, probable enfermedad multivaso
- **Condiciones de aplicación:** Tests de ejercicio con ECG. Sensibilidad ~68%, Especificidad ~77%.
- **Capítulos/páginas:** Cap. 5, sección "Electrocardiogram"

### Regla: duke-treadmill-score

- **Descripción:** Score pronóstico combinando capacidad de ejercicio, ST y angina.
- **Tipo:** evaluación / pronóstico
- **Métrica principal:** Duke Treadmill Score
- **Valores numéricos:**
  - DTS = minutos ejercicio − (5 × desviación ST mm) − (4 × índice angina)
  - Clasifica en riesgo bajo, moderado, alto
  - Relacionado con supervivencia anual y a 5 años
- **Condiciones de aplicación:** Pacientes con/sin historia de IHD considerados para angiografía, sin historia de MI o revascularización.
- **Capítulos/páginas:** Cap. 5, sección "Clinical Exercise Test Data and Prognosis", Figura 5.6

### Regla: preparticipation-screening-algorithm

- **Descripción:** Algoritmo de screening preparticipación ACSM (2018).
- **Tipo:** screening / seguridad
- **Métrica principal:** N/A (árbol de decisión)
- **Valores numéricos:** N/A (decisiones binarias)
- **Condiciones de aplicación:**
  - **No ejercitante + asintomático + sin enfermedad:** Puede iniciar ejercicio ligero-moderado sin clearance. Progresión >moderado requiere principios FITT-VP.
  - **No ejercitante + enfermedad conocida + asintomático:** Clearance médico antes de CUALQUIER intensidad. Post-clearance: ligero-moderado, progresar.
  - **No ejercitante + síntomas:** Clearance médico (urgente si síntomas en ADL). Post-clearance: ligero-moderado.
  - **Ejercitante + sin enfermedad + asintomático:** Continuar/progresar sin clearance.
  - **Ejercitante + enfermedad + asintomático (estable):** Moderado sin clearance. Vigoroso requiere clearance.
  - **Ejercitante + síntomas:** Detener ejercicio, obtener clearance antes de continuar.
- **Capítulos/páginas:** Cap. 2, Figura 2.2, p. 35–37
- **Comentarios:** Ya NO se usa perfil de factores de riesgo CV para decisión de screening. Enfermedad pulmonar ya no refiere automáticamente.

### Regla: cardiac-rehab-risk-stratification

- **Descripción:** Estratificación de riesgo AACVPR para rehabilitación cardíaca.
- **Tipo:** evaluación / riesgo
- **Métrica principal:** categoría de riesgo
- **Valores numéricos:**
  - **Riesgo más bajo:** Todos los siguientes: sin arritmias ventriculares complejas, sin angina/síntomas, hemodinámica normal, capacidad ≥7 METs, EF ≥50%, MI/revascularización no complicada, sin CHF, sin isquemia residual, sin depresión
  - **Riesgo moderado:** Cualquiera de: angina/síntomas a ≥7 METs, isquemia silenciosa <2 mm ST, capacidad <5 METs, EF 40%–49%
  - **Riesgo más alto:** Cualquiera de: arritmias ventriculares complejas, angina a <5 METs, ST ≥2 mm, hemodinámica anormal, EF <40%, historia de paro cardíaco, MI complicado, CHF, isquemia post-evento, depresión
  - Monitorización ECG: riesgo bajo → 6-12 sesiones continuo; riesgo moderado-alto → ≥12 sesiones continuo
- **Condiciones de aplicación:** Pacientes en CR.
- **Capítulos/páginas:** Cap. 2, Box 2.2

### Regla: cr-exercise-prescription

- **Descripción:** Prescripción FITT en rehabilitación cardíaca ambulatoria.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Frecuencia: 3–5 d/semana (aeróbico); 2–3 d/semana (resistencia, después de ≥4 semanas aeróbico)
  - Intensidad: 40%–80% HRR/VO2R; RPE 11–14 (6-20) o 3–6 (0-10); si umbral isquémico conocido, HR ≥10 bpm debajo del HR isquémico
  - Tiempo: 20–60 min aeróbico; puede iniciar con <10 min si muy limitado (incrementar 1-5 min/sesión o 10-20%/semana)
  - Tipo: actividades rítmicas de grandes grupos musculares; HIIT posible (3-4 min a 80-90% HRR alternado con 60-70% HRR, ~40 min, 3×/semana)
  - Resistencia: 1 set × 10-15 reps al inicio; progresar a 2-3 sets × 8-12 reps; 40-80% 1RM; 2-3 d/semana
  - Flexibilidad: según pautas generales
- **Condiciones de aplicación:** Pacientes con CVD estable en CR ambulatoria. Modificar por estratificación de riesgo.
- **Capítulos/páginas:** Cap. 9, sección "Exercise Prescription", FITT box
- **Comentarios:** Si no hay test de ejercicio disponible, usar RPE. Monitorizar signos/síntomas. β-bloqueadores atenúan HR.

### Regla: heart-failure-exercise

- **Descripción:** Prescripción de ejercicio en insuficiencia cardíaca.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3–5 d/semana; 40%–80% HRR/VO2R; 20–60 min (puede iniciar con <10 min); caminar, ciclo, natación
  - HIIT en HFrEF estable: hasta 90% HRR; mejoró VO2peak 46%
  - Volumen: 3–7 MET-hr/semana objetivo
  - Resistencia: añadir después de ≥4 semanas tolerando aeróbico; 1–3 series × 10–15 reps; 40%–60% 1RM; 2–3 d/semana
  - Duración y frecuencia incrementar antes que intensidad
- **Condiciones de aplicación:** Pacientes con HF estable. Supervisión médica.
- **Capítulos/páginas:** Cap. 9, sección "Patients with Heart Failure"

### Regla: pad-exercise

- **Descripción:** Prescripción de ejercicio para enfermedad arterial periférica (PAD) con claudicación.
- **Tipo:** prescripción / rehabilitación
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Frecuencia: ≥3 d/semana (supervisado; Clase IA AHA)
  - Intensidad: caminar hasta dolor moderado-severo (3-4 en escala de claudicación), descansar, retomar
  - Tiempo: 30–45 min por sesión; progresar a ≥60 min
  - Tipo: caminar (treadmill) como modalidad principal; complementar con ciclo/ergómetro de brazo
  - Duración mínima del programa: ≥12 semanas
  - Mejoras esperadas: 106%–177% en tiempo/distancia libre de dolor; 64%–85% en capacidad absoluta de caminar
- **Condiciones de aplicación:** PAD sintomática de extremidad inferior. Supervisado > no supervisado.
- **Capítulos/páginas:** Cap. 9, sección "Patients with Peripheral Artery Disease"
- **Comentarios:** Ambiente frío puede agravar claudicación (warm-up más largo). Abordar todos los factores de riesgo CV.

### Regla: copd-exercise

- **Descripción:** Prescripción de ejercicio en COPD.
- **Tipo:** prescripción / rehabilitación
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3–5 d/semana; intensidad >60% peak work rate (moderado-severo COPD) o ligero (severo); RPE disnea Borg CR10: 3–6; 20–60 min (puede acumular en bouts)
  - Resistencia: 2–3 d/semana; 1–3 series × 8–12 reps; 50%–80% 1RM; énfasis en músculos periféricos
  - Flexibilidad: según pautas generales
  - ⚠️ Intensidad basada en %HRmax o HRR puede ser inapropiada (HR resting elevada, limitación ventilatoria)
  - Usar disnea (Borg CR10) o % peak work rate como guía
- **Condiciones de aplicación:** Todas las etapas GOLD. Componente obligatorio de rehabilitación pulmonar.
- **Capítulos/páginas:** Cap. 9, sección "Chronic Obstructive Pulmonary Disease"
- **Comentarios:** IMT (≥30% MIP) puede ser útil si debilidad inspiratoria persiste. Oxígeno suplementario si PaO2 ≤55 o SpO2 ≤88%.

### Regla: diabetes-exercise

- **Descripción:** Prescripción de ejercicio en diabetes mellitus.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: ≥3 d/semana, no más de 2 días consecutivos sin ejercicio; moderado-vigoroso (40%–89% VO2R); ≥150 min/semana moderado-vigoroso
  - Resistencia: 2–3 d/semana; 8-12 reps × 1-4 sets; 60%–80% 1RM; progresar de 10-15 reps (moderado) a 8-10 reps (más pesado)
  - Flexibilidad: puede incluirse pero no sustituye aeróbico/resistencia
  - Combinado (aeróbico + resistencia) puede mejorar control glucémico más que cualquiera solo
  - HIIT y continuo recomendados
- **Condiciones de aplicación:** T1DM, T2DM, prediabetes. Modificar por complicaciones.
- **Capítulos/páginas:** Cap. 10, sección "Diabetes Mellitus"
- **Comentarios:**
  - Hipoglucemia (<70 mg/dL) es contraindicación relativa para iniciar ejercicio agudo
  - Monitorear glucosa antes, durante y después
  - Hiperglucemia ≥300 mg/dL sin cetonas: ejercicio moderado OK; con cetonas: posponer
  - Neuropatía autonómica: usar RPE (HR blunted), monitorizar BP
  - Neuropatía periférica: cuidado del pie, calzado apropiado
  - Retinopatía severa: evitar vigoroso, saltos, Valsalva, cabeza abajo
  - Nefropatía: ejercicio no acelera progresión; iniciar bajo si capacidad reducida

### Regla: hypertension-exercise

- **Descripción:** Prescripción de ejercicio en hipertensión.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: ≥5 d/semana (idealmente diario); moderado (40%–59% VO2R/HRR); 30–60 min
  - Resistencia: 2–3 d/semana; 1–3 series × 10–15 reps (inicio); progresar a 8–12 reps; intensidad moderada
  - Flexibilidad: según pautas generales
  - Reducción esperada de BP: 5–7 mmHg SBP/DBP con ejercicio aeróbico regular
  - ⚠️ Mantener SBP ≤220 y DBP ≤105 durante ejercicio
  - ⚠️ No Valsalva durante resistencia
- **Condiciones de aplicación:** HTA controlada. Si SBP ≥160 o DBP ≥100: no ejercitar hasta evaluación médica.
- **Capítulos/páginas:** Cap. 10, sección "Hypertension"
- **Comentarios:**
  - β-bloqueadores y diuréticos pueden afectar termorregulación
  - α-bloqueadores, CCB, vasodilatadores: riesgo de hipotensión post-ejercicio → cool-down extendido
  - Hipotensión post-ejercicio es un efecto esperado y beneficioso

### Regla: dyslipidemia-exercise

- **Descripción:** Prescripción de ejercicio en dislipidemia.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: énfasis en gasto calórico para pérdida de peso; 250–300 min/semana para pérdida/mantenimiento
  - Reducción LDL-C con aeróbico: 3–6 mg/dL
  - Reducción LDL-C y TG con resistencia: 6–9 mg/dL (menos consistente)
  - Resistencia y flexibilidad como adjuntos
- **Condiciones de aplicación:** Dislipidemia sin comorbilidades severas.
- **Capítulos/páginas:** Cap. 10, sección "Dyslipidemia"
- **Comentarios:** ⚠️ Estatinas/fibratos pueden causar mialgia; si dolor muscular inusual, consultar médico.

### Regla: metabolic-syndrome-exercise

- **Descripción:** Prescripción de ejercicio en síndrome metabólico.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: ≥150 min/semana moderado (inicial); progresar a 250–300 min/semana para pérdida de peso
  - Puede acumular en bouts ≥10 min
  - Resistencia: ≥2 d/semana
  - Usar criterio más conservador de las comorbilidades presentes
- **Condiciones de aplicación:** Metsyn (≥3 de 5 criterios). Individualizar por condición más limitante.
- **Capítulos/páginas:** Cap. 10, sección "Metabolic Syndrome"

### Regla: obesity-exercise

- **Descripción:** Prescripción de ejercicio en sobrepeso/obesidad.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: progresar a ≥250 min/semana (≥2,000 kcal/semana) para pérdida/mantenimiento
  - Iniciar con moderado; progresar gradualmente
  - Resistencia: adjunto (no produce pérdida de peso clínicamente significativa por sí sola)
  - Pérdida de peso objetivo inicial: 3%–10% en 3–6 meses
  - Reducción calórica: 500–1,000 kcal/día → 0.5–0.9 kg/semana
  - Bouts intermitentes pueden mejorar adherencia
- **Condiciones de aplicación:** BMI ≥25. Considerar comorbilidades.
- **Capítulos/páginas:** Cap. 10, sección "Overweight and Obesity"
- **Comentarios:** Combinar con reducción calórica. Ejercicio es más crítico para mantenimiento que para pérdida inicial.

### Regla: older-adults-exercise

- **Descripción:** Prescripción de ejercicio en adultos mayores (≥65 o 50-64 con limitaciones).
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: moderado = RPE 5-6 (0-10); vigoroso = RPE ≥7 (0-10); NO usar METs absolutos
  - Misma estructura FITT que adultos, pero intensidad RELATIVA a capacidad individual
  - Resistencia: iniciar con 10-15 reps a 40%–50% 1RM; progresar
  - Potencia: 1-3 series × 6-10 reps a 30%–60% 1RM con alta velocidad (prioridad en mayores)
  - Neuromotor/balance: ≥2-3 d/semana para caed frecuentes o movilidad limitada
  - Flexibilidad: hold 30-60 s (mayor beneficio que 10-30 s)
  - Iniciar con intensidad y duración ligeras, especialmente en desacondicionados/frágiles
- **Condiciones de aplicación:** ≥65 años, o 50-64 con condiciones clínicas significativas.
- **Capítulos/páginas:** Cap. 7, sección "Older Adults"
- **Comentarios:**
  - Tests de rendimiento físico (SPPB, gait speed, Timed Up and Go) más útiles que GXT
  - SPPB: cambio 0.5 = pequeño significativo; 1.0 = sustancial
  - Gait speed: cambio 0.05 m/s = pequeño; 0.10 m/s = sustancial
  - 6-min walk <300 m → peor supervivencia a corto plazo

### Regla: pregnancy-exercise

- **Descripción:** Prescripción de ejercicio en embarazo.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: ≥150 min/semana moderado o 75 min vigoroso, distribuido en la mayoría de días
  - Iniciar con 15 min/día (<3 d/semana) si previamente inactiva; progresar a ~30 min/día
  - RPE para monitorizar intensidad (HR puede ser variable)
  - Warm-up y cool-down: 10-15 min
  - Resistencia: continuar si habitual; ajustar con proveedor
  - Kegel/pelvic floor: recomendados
- **Condiciones de aplicación:** Embarazo sin contraindicaciones obstétricas/médicas (Box 7.2).
- **Capítulos/páginas:** Cap. 7, sección "Pregnancy"
- **Comentarios:**
  - Evitar posición supina después de semana 16
  - Evitar deportes de contacto, riesgo de caída/trauma
  - Evitar Valsalva, contracción isométrica prolongada, estar de pie inmóvil
  - No ejercitar en ambiente caluroso/húmedo
  - Incrementar ingesta calórica (~300 kcal/día extra)
  - Signs de alarma para detener (Box 7.4): sangrado vaginal, disnea pre-ejercicio, mareo, dolor torácico, debilidad muscular, dolor/swelling pantorrilla, disminución movimiento fetal, trabajo de parto prematuro
  - Postparto: reanudar gradualmente ~4-6 sem (vaginal) o 8-10 sem (cesárea con clearance)

### Regla: children-exercise

- **Descripción:** Recomendaciones de actividad física en niños y adolescentes.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - ≥60 min/día de actividad moderada-vigorosa
  - Vigoroso: ≥3 d/semana
  - Resistencia: ≥3 d/semana
  - Carga ósea: ≥3 d/semana
  - Screen time: <2 h/día
  - Pasos/día: 9,000–12,000 (traducción de 60 min)
- **Condiciones de aplicación:** 6-17 años. Solo 42% de 6-11 y 8% de 12-19 cumplen.
- **Capítulos/páginas:** Cap. 7, sección "Children and Adolescents"
- **Comentarios:**
  - Niños prepuberales: no participar en cantidades excesivas de ejercicio vigoroso (esqueleto inmaduro)
  - Menor capacidad anaeróbica que adultos
  - Termorregulación inmadura: evitar calor/humedad extremos
  - Resistance training seguro con instrucción y supervisión apropiadas

### Regla: low-back-pain-exercise

- **Descripción:** Prescripción de ejercicio en dolor lumbar.
- **Tipo:** prescripción / rehabilitación
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: caminar, bicicleta, natación (mejor evidencia); seguir pautas generales
  - Resistencia: coordinación/strengthening/endurance de tronco para subagudo/crónico
  - Flexibilidad: cadera y extremidad inferior; NO usar flexibilidad de tronco como objetivo de tratamiento
  - Iniciar actividades dentro de 2 semanas post episodio agudo
  - Evitar reposo en cama
  - NO ejercicio en primeros días post episodio agudo severo
- **Condiciones de aplicación:** LBP no específico (>85% de casos). Si LBP secundario a patología específica, seguir consideraciones de la condición primaria.
- **Capítulos/páginas:** Cap. 7, sección "Low Back Pain"
- **Comentarios:**
  - 90% episodios agudos resuelven en 6 semanas
  - Abordaje multidimensional para crónico (dolor, miedo-evitación, autoeficacia)
  - Evitar ejercicios que causen "peripheralización" (dolor que se extiende a piernas)
  - Favorecer ejercicios de "centralización" (ej. prone push-ups)
  - ⚠️ Abdominal bracing (co-contracción de tronco) puede aumentar compresión espinal → usar con extrema precaución
  - No hay evidencia suficiente para terapias unidimensionales (ej. solo fortalecimiento abdominal)

### Regla: arthritis-exercise

- **Descripción:** Prescripción de ejercicio en artritis (OA y RA).
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3–5 d/semana; moderado; 30–60 min; progresar desde bouts cortos
  - Resistencia: 2–3 d/semana; 1–3 series × 8–12 reps; 50%–80% 1RM
  - Flexibilidad: diario a ≥2-3 d/semana; 10-30 s holds
  - Neuromotor: según necesidad funcional
- **Condiciones de aplicación:** OA y RA estable. NO ejercitar durante inflamación aguda (articulaciones calientes, hinchadas, dolorosas).
- **Capítulos/páginas:** Cap. 11, sección "Arthritis"
- **Comentarios:**
  - Ejercicio NO daña articulaciones; el miedo a esto es barrera principal
  - Si dolor 2h post-ejercicio > pre-ejercicio: reducir duración/intensidad
  - Dolor 48-72h puede ser DOMS (normal en novatos)
  - Ejercitar en hora del día con menos dolor
  - Calzado apropiado con amortiguación
  - Piscina 28°–31°C para ejercicio acuático

### Regla: parkinson-exercise

- **Descripción:** Prescripción de ejercicio en enfermedad de Parkinson.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3–5 d/semana; 40%–80% HRR/VO2R; 20–60 min; caminar, ciclo, ergómetro de brazo
  - Resistencia: 2–3 d/semana; énfasis en extensores de tronco y cadera; todos los grupos mayores
  - Flexibilidad: énfasis en movilidad espinal, rotación axial, cuello, extremidades superiores
  - Neuromotor/balance: componente crucial; estático, dinámico, funcional
  - Ejercitar durante pico de efecto de medicación
- **Condiciones de aplicación:** PD en todas las etapas. Iniciar temprano al diagnóstico.
- **Capítulos/páginas:** Cap. 11, sección "Parkinson Disease"
- **Comentarios:**
  - Evitar dual-tasking en novatos
  - Usar señales visuales/auditivas para mejorar marcha
  - Riesgo de caídas: usar cinturón de marcha, barras paralelas
  - Levodopa/Carbidopa puede producir bradicardia de ejercicio y taquicardia transitoria

### Regla: ms-exercise

- **Descripción:** Prescripción de ejercicio en esclerosis múltiple.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 2–3 d/semana; 60%–80% HRpeak; 20–40 min; ciclo (preferido por balance)
  - Resistencia: 2–3 d/semana; 1–3 series × 8–12 reps; 50%–80% 1RM; énfasis en grupos posturales grandes
  - Flexibilidad: estiramientos lentos; aumentar frecuencia/tiempo en músculos espásticos
  - Neuromotor/balance: según necesidad
  - Para debilidad significativa: descansar 2-5 min entre sets
- **Condiciones de aplicación:** MS en todas las etapas. NO ejercitar durante exacerbación aguda.
- **Capítulos/páginas:** Cap. 11, sección "Multiple Sclerosis"
- **Comentarios:**
  - HR y BP pueden estar blunted (disfunción autonómica)
  - Usar RPE además de HR
  - Fenómeno de Uhthoff: empeoramiento transitorio con aumento de temperatura
  - Usar ventiladores, packs fríos, hidratación
  - Fatiga: distinguir fatiga central (MS) de fatiga periférica (ejercicio)

### Regla: spinal-cord-injury-exercise

- **Descripción:** Prescripción de ejercicio en lesión medular.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3 d/semana; 50%–80% HRpeak o VO2peak; 20–60 min; ergómetro de brazo, wheelchair, FES-LCE
  - Resistencia: 2–3 d/semana; 1–3 series × 8–12 reps; 50%–80% 1RM; énfasis en músculos inervados
  - Flexibilidad: estiramientos lentos de músculos espásticos; estabilizar articulaciones adyacentes; NO estirar flexores de dedos en tetraplejía (preservar tenodesis)
- **Condiciones de aplicación:** Según nivel y completitud de lesión.
- **Capítulos/páginas:** Cap. 11, sección "Spinal Cord Injury"
- **Comentarios:**
  - Lesión ≥T6: riesgo de disreflexia autonómica (HTA severa, bradicardia)
  - Lesión ≥C5: tetraplejía, menor capacidad CV
  - Riesgo de fractura con carga completa si sin historia reciente de bipedestación
  - Vaciar vejiga/intestino antes de ejercitar
  - Revisar piel regularmente (úlceras por presión)
  - Equilibrar ejercicios de "push" y "pull" para hombro

### Regla: cancer-exercise

- **Descripción:** Prescripción de ejercicio en supervivientes de cáncer.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3–5 d/semana; moderado-vigoroso; 20–60 min; progresar desde nivel actual
  - Resistencia: 2–3 d/semana; 1–3 series × 8–12 reps; progresar
  - Flexibilidad: según necesidad; énfasis en articulaciones con ROM perdido por cirugía/radiación
  - Evitar inactividad física durante y después de tratamiento
- **Condiciones de aplicación:** Todos los tipos de cáncer. Individualizar según tratamiento, síntomas, comorbilidades.
- **Capítulos/páginas:** Cap. 11, sección "Cancer"
- **Comentarios:**
  - Seguridad: ejercicio es seguro durante y después de tratamiento (evidencia suficiente)
  - Con metástasis óseas: reducir impacto, intensidad, volumen (riesgo de fractura)
  - Estado inmunosuprimido: ejercitar en casa/entorno médico, no en gimnasio público
  - No nadar con catéteres/líneas centrales, ostomías, o inmunosupresión
  - Fatiga relacionada con cáncer: ejercicio aeróbico la mejora
  - Supervisar progresión más lentamente que en sanos
  - Supervisión recomendada para resistencia en cáncer de mama/ginecológico

### Regla: ckd-exercise

- **Descripción:** Prescripción de ejercicio en enfermedad renal crónica.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3–5 d/semana; ligero-moderado inicialmente (30%–39% VO2R); 10-15 min continuo inicial; progresar a 30 min; incrementar 3-5 min/semana
  - Resistencia: 2–3 d/semana; usar 3-RM o superior (⚠️ evitar 1-RM por riesgo de fractura por avulsión)
  - Si no tolera continuo: intervalos 1:1 (ej. 3 min trabajo / 3 min descanso)
  - En diálisis: ejercitar en días no-diálisis; no pesar brazo con fístula; BP en brazo sin fístula
- **Condiciones de aplicación:** CKD estadios 1-5. Clearance médico.
- **Capítulos/páginas:** Cap. 11, sección "Kidney Disease"
- **Comentarios:**
  - Capacidad funcional ~50-80% de controles sanos
  - VO2peak 15-25 mL·kg⁻¹·min⁻¹
  - Progresión puede ser más lenta
  - En trasplante renal: ejercitar pronto post-trasplante

### Regla: fibromyalgia-exercise

- **Descripción:** Prescripción de ejercicio en fibromialgia.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 2–3 d/semana (mejora síntomas); moderado; 20–60 min; puede ser continuo o en bouts
  - Resistencia: 2–3 d/semana; 1–3 series × 8–12 reps; progresar
  - Flexibilidad: según pautas generales
  - Acuático: beneficioso
  - Tai chi, yoga: pueden reducir síntomas
- **Condiciones de aplicación:** Fibromialgia estable. Progresión lenta.
- **Capítulos/páginas:** Cap. 11, sección "Fibromyalgia"
- **Comentarios:**
  - Iniciar a nivel que no cause dolor excesivo
  - Si síntomas aumentan durante/después: reducir intensidad o duración antes que frecuencia
  - Minimizar componente excéntrico
  - Distinguir dolor post-ejercicio de fluctuaciones de fibromialgia
  - Supervisión/grupo mejora adherencia

### Regla: intellectual-disability-exercise

- **Descripción:** Prescripción de ejercicio en discapacidad intelectual y síndrome de Down.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Seguir pautas generales de adultos con adaptaciones
  - Familiarización extensa antes de testing
  - Instrucciones simples, un paso a la vez
  - HRmax en DS: usar fórmula 210 − 56(edad) − 15.5(status DS=2) ⚠️ NO usar 220-edad
  - En DS: precaución con inestabilidad atlantoaxial (evitar hiperflexión/hiperextensión de cuello)
  - En DS: hipotonía + laxitud articular → énfasis en fuerza
- **Condiciones de aplicación:** ID con/sin DS. Clearance médico especialmente en DS (cardiopatía congénita ~50%).
- **Capítulos/páginas:** Cap. 11, sección "Intellectual Disability and Down Syndrome"

### Regla: hiv-exercise

- **Descripción:** Prescripción de ejercicio en VIH/SIDA.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3–5 d/semana; moderado; 20–60 min
  - Resistencia: 2–3 d/semana; progresivo
  - Combinado aeróbico + resistencia: beneficioso
  - Progresión más lenta que en sanos
- **Condiciones de aplicación:** VIH estable. No ejercitar durante infecciones agudas.
- **Capítulos/páginas:** Cap. 11, sección "Human Immunodeficiency Virus"
- **Comentarios:**
  - No hay evidencia de que ejercicio moderado suprima función inmune
  - Monitorizar fatiga, síntomas
  - Considerar medicación (inhibidores de proteasa → resistencia insulina, dislipidemia)

### Regla: altitude-exercise

- **Descripción:** Modificaciones de ejercicio en altitud.
- **Tipo:** ambiental / seguridad
- **Métrica principal:** altitude (m), exercise intensity
- **Valores numéricos:**
  - Efectos desde ≥1,200 m
  - Moderada: 1,200–2,400 m
  - Alta: 2,400–4,000 m
  - Muy alta: >4,000 m
  - Primeros días: minimizar ejercicio/PA
  - Mantener mismo HR objetivo (THR) → menor velocidad/distancia/resistencia
  - AMS: incidencia 15-70% (alta), 70-85% (muy alta) con ascenso rápido
  - Staging: ≥3 días en altitud moderada; por cada día >1,200 m → preparado para +305 m
  - Aclimatación: 7-12 días para respuesta casi completa
- **Condiciones de aplicación:** Ejercicio en altitud.
- **Capítulos/páginas:** Cap. 8, sección "Exercise in High-Altitude Environments"
- **Comentarios:**
  - HACE y HAPE: potencialmente fatales; tratamiento = descenso + O2
  - Diamox (acetazolamida) profiláctico para AMS
  - Ibuprofeno para cefalea

### Regla: heat-exercise

- **Descripción:** Modificaciones y precauciones en ambiente caluroso.
- **Tipo:** ambiental / seguridad
- **Métrica principal:** WBGT (°C), hydration
- **Valores numéricos:**
  - Deshidratación ≥2% masa corporal → impacto negativo en rendimiento de resistencia
  - Cada 1% deshidratación → +0.1° a 0.2°C temperatura core
  - Heatstroke: temperatura >40°C (104°F) + disfunción SNC → emergencia
  - Mayor riesgo de heatstroke con WBGT >28°C (82°F)
  - Aclimatación: 10-14 días de ejercicio progresivo en calor
  - Primera sesión en calor: 5-10 min por seguridad
  - Reponer 0.5 L por cada libra (0.45 kg) de peso perdido
  - Limitar cambio de peso corporal a <2%
- **Condiciones de aplicación:** Ejercicio en calor/humedad.
- **Capítulos/páginas:** Cap. 8, sección "Exercise in Hot Environments"
- **Comentarios:**
  - Usar WBGT para decisiones de modificar/cancelar
  - Heat cramps: reposo, estiramiento, sodio (1/8-1/4 tsp sal en 300-500 mL)
  - Heat syncope: más común en no aclimatados/sedentarios
  - Heat exhaustion: forma más común de enfermedad seria por calor
  - Preguntas de readiness (Box 8.3)

### Regla: cold-exercise

- **Descripción:** Precauciones en ambiente frío.
- **Tipo:** ambiental / seguridad
- **Métrica principal:** temperature (°C), wind chill
- **Valores numéricos:**
  - Frostbite: temperatura tisular <0°C (32°F)
  - Frostbite NO ocurre si temperatura aire >0°C
  - Riesgo frostbite <5% si temperatura >−15°C (5°F)
  - WCT <−27°C (−8°F): frostbite posible en ≤30 min en piel expuesta
  - NFCI: exposición a 0°–15°C (32°–60°F) húmedo por períodos prolongados
  - 3 capas de ropa: inner (polyester), middle (fleece/lana), outer (repelente viento/lluvia)
- **Condiciones de aplicación:** Ejercicio en frío.
- **Capítulos/páginas:** Cap. 8, sección "Exercise in Cold Environments"
- **Comentarios:**
  - Piel mojada + viento: usar temperatura 10°C menor para WCT
  - Shoveling snow: HR hasta 97% HRmax, SBP hasta 200 mmHg (riesgo CV)
  - Nadar en agua <25°C: riesgo para personas con CVD
  - Cambiar calcetines 2-3 veces/día en frío-húmedo

### Regla: sedentary-behavior

- **Descripción:** Reducción de comportamiento sedentario.
- **Tipo:** estilo de vida
- **Métrica principal:** sitting time, breaks frequency
- **Valores numéricos:**
  - >50% del día de vigilia involucra estar sentado
  - Sedentarismo asociado con mortalidad, CVD, cáncer, T2DM (independiente de PA)
  - Romper sedentarismo con PA breve (1-5 min de pie/caminar) cada hora o más
  - Riesgo de mortalidad 30% menor en activos vs inactivos con mismo tiempo sedentario
- **Condiciones de aplicación:** Todos los adultos, incluso los que cumplen recomendaciones de PA.
- **Capítulos/páginas:** Cap. 1 sección "Sedentary Behavior"; Cap. 6 sección "Sedentary Behavior and Brief Activity Breaks"

### Regla: warm-up-superiority

- **Descripción:** Warm-up dinámico vs estático pre-ejercicio.
- **Tipo:** protocolo
- **Métrica principal:** N/A (cualitativo)
- **Valores numéricos:** N/A
- **Condiciones de aplicación:** Antes de ejercicio aeróbico, resistencia, deportes.
- **Capítulos/páginas:** Cap. 6, sección "Components of the Exercise Training Session"
- **Comentarios:** Warm-up dinámico cardiovascular es superior a estiramiento estático para preparar rendimiento. Estático puede reducir fuerza/potencia (especialmente >45s).

### Regla: resistance-technique

- **Descripción:** Reglas de técnica en entrenamiento de resistencia.
- **Tipo:** técnica / seguridad
- **Métrica principal:** N/A (cualitativo)
- **Valores numéricos:** N/A
- **Condiciones de aplicación:** Todos los ejercicios de resistencia.
- **Capítulos/páginas:** Cap. 6, sección "Resistance Exercise Technique"
- **Comentarios:**
  - Movimientos controlados, ROM completo
  - Exhalar en concéntrico, inhalar en excéntrico
  - EVITAR Valsalva
  - NO exclusivamente excéntrico a >100% 1RM (riesgo de lesión, DOMS severo, rabdomiólisis)
  - Con lesión ortopédica/dolor: ROM limitado por síntomas
  - Novatos: instrucción obligatoria por profesional cualificado

### Regla: ecg-monitoring-cr

- **Descripción:** Monitorización ECG en rehabilitación cardíaca según riesgo.
- **Tipo:** protocolo / seguridad
- **Métrica principal:** number of sessions with continuous ECG
- **Valores numéricos:**
  - Riesgo bajo: continuo → intermitente/sin ECG después de 6-12 sesiones
  - Riesgo moderado-alto: continuo → intermitente/sin ECG después de ≥12 sesiones
  - Antes de reducir monitorización: paciente debe entender su nivel de ejercicio seguro
- **Condiciones de aplicación:** CR ambulatoria.
- **Capítulos/páginas:** Cap. 9, sección "Continuous Electrocardiographic Monitoring"

### Regla: sternotomy-precautions

- **Descripción:** Precauciones post-esternotomía.
- **Tipo:** seguridad / restricción
- **Métrica principal:** weeks, load limit
- **Valores numéricos:**
  - Restricción de ROM y carga de miembro superior: 8–12 semanas post-cirugía
  - Límite de carga típico: 5-10 lb (2.3-4.5 kg) o <50% MVC durante 10-12 semanas
  - A las 5-6 semanas: mayoría retorna a ROM sin dolor y sin carga
  - Estabilidad esternal completa: ~8-10 semanas
  - Inestabilidad esternal: hasta 16% de casos
  - Durante CR: actividades rítmicas sin carga de miembro superior (ej. arm ergometry)
  - Objetivo 10-12 semanas: progresar ROM sin dolor antes de fuerza/resistencia
- **Condiciones de aplicación:** Post-CABG, cirugía valvular, trasplante vía esternotomía media.
- **Capítulos/páginas:** Cap. 9, sección "Patients with a Sternotomy"

### Regla: pacemaker-icd-precautions

- **Descripción:** Precauciones con marcapasos y ICD.
- **Tipo:** seguridad / restricción
- **Métrica principal:** bpm, weeks
- **Valores numéricos:**
  - HR durante ejercicio y entrenamiento: mantener 10-15 bpm por debajo del umbral programado de antitaquicardia/desfibrilación
  - Primeras 24h post-implante: solo ROM suave de miembro superior
  - 3-4 semanas post-implante: evitar actividades vigorosas de miembro superior (natación, bowling, pesas, elíptica, golf)
  - Extremidad inferior: permitida
  - Si HR no incrementa durante test: no iniciar ejercicio hasta ajustar sensor
- **Condiciones de aplicación:** Pacientes con marcapasos o ICD.
- **Capítulos/páginas:** Cap. 9, sección "Pacemaker and Implantable Cardioverter Defibrillator"

### Regla: cardiac-transplant-exercise

- **Descripción:** Prescripción post-trasplante cardíaco.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Corazón denervado: HR-based training range NO apropiado
  - HR resting elevada; HR response atenuada; recuperación lenta
  - VO2peak reducido 20-35% vs controles
  - HIIT: 90% VO2peak o >91% HRpeak posible
  - Resistencia: obligatoria (contrarrestar efectos de inmunosupresión en hueso/músculo)
  - Precauciones esternotomía: hasta 12 semanas
  - Protocolo de test: ramp 1 MET/30s-1min o 1-2 METs/2-3 min; ciclo 10-15 W/min o 25-30 W/2-3 min
- **Condiciones de aplicación:** Post-trasplante cardíaco.
- **Capítulos/páginas:** Cap. 9, sección "Patients after Cardiac Transplantation"
- **Comentarios:** Inmunosupresión → riesgo de osteoporosis, DM, HTA. Ejercicio ayuda a manejar estos.

### Regla: asthma-exercise

- **Descripción:** Prescripción de ejercicio en asma.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Seguir pautas generales de adultos ajustadas a capacidad
  - Warm-up: 10-15 min vigoroso o intensidad variable (induce período refractario para EIB)
  - EIB diagnóstico: ≥15% caída en FEV1.0 post-ejercicio (específico)
  - Test EIB: ejercicio vigoroso 2-4 min → mantener 4-6 min; espirometría a 5, 10, 15, 30 min post
  - Usar broncodilatador pre-test si indicado
  - SpO2 ≤80%: criterio de terminación
- **Condiciones de aplicación:** Asma estable. No ejercitar durante exacerbación.
- **Capítulos/páginas:** Cap. 9, sección "Asthma"
- **Comentarios:**
  - Evitar frío, aire seco, contaminantes, alérgenos
  - β2-agonistas de acción corta pre/post ejercicio para prevenir/tratar EIB
  - Corticoides orales prolongados → pérdida muscular periférica → resistencia puede beneficiar
  - IMT no tiene beneficio claro en asma

### Regla: stroke-exercise

- **Descripción:** Prescripción de ejercicio post-ACV.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico: 3–5 d/semana; 40%–70% HRR/VO2R; 20–60 min; ciclo, stepper reclinado, treadmill con harness
  - Resistencia: 2–3 d/semana; grandes grupos; 1-3 series × 10-15 reps
  - Neuromotor/balance: según déficit
  - Treadmill: iniciar a 0.8 mph con harness
  - ⚠️ No Valsalva durante resistencia
- **Condiciones de aplicación:** Post-ACV, todas las etapas de recuperación. Considerar comorbilidades (mayoría son mayores).
- **Capítulos/páginas:** Cap. 9, sección "Exercise Prescription for Patients with a Cerebrovascular Accident (Stroke)"
- **Comentarios:**
  - Fatiga temprana común
  - Atención a aspectos afectivos (ánimo, motivación, frustración, confusión)
  - Supervisión cercana hasta independencia
  - Involucrar familiares

### Regla: osteoporosis-exercise

- **Descripción:** Prescripción de ejercicio en osteoporosis.
- **Tipo:** prescripción
- **Métrica principal:** FITT
- **Valores numéricos:**
  - Aeróbico con carga (weight-bearing): principal
  - Resistencia: alta intensidad, alta velocidad, alto impacto (si no hay fracturas)
  - Balance: para prevenir caídas
  - ⚠️ Evitar: movimientos explosivos, alto impacto si riesgo; torsión/flexión/compresión excesiva de columna
  - ⚠️ Forma y alineación > intensidad (especialmente con historia de fracturas)
  - Incluso los más frágiles: mantenerse tan activos como la salud permita (inmovilización → pérdida ósea rápida e irreversible)
- **Condiciones de aplicación:** Osteoporosis u osteopenia. T-score ≤−2.5 (postmenopáusicas y hombres ≥50).
- **Capítulos/páginas:** Cap. 11, sección "Osteoporosis"
- **Comentarios:**
  - FRAX para riesgo de fractura
  - Ejercicio mejora densidad, volumen y fuerza ósea + fuerza muscular
  - Inmovilización/reposo en cama: pérdida ósea rápida, recuperación improbable

### Regla: return-to-work-exercise

- **Descripción:** Prescripción de ejercicio para retorno al trabajo.
- **Tipo:** prescripción / funcional
- **Métrica principal:** MET level, movement patterns
- **Valores numéricos:**
  - Evaluar demandas MET del trabajo (tablas de MET ocupacionales publicadas)
  - Especificidad: usar ejercicios que imiten patrones de movimiento del trabajo
  - Equilibrar resistencia vs aeróbico según demandas del trabajo
  - Si estrés ambiental en trabajo: educar y exponer gradualmente
- **Condiciones de aplicación:** Pacientes que desean retornar a vocación previa.
- **Capítulos/páginas:** Cap. 9, Box 9.8

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

⚠️ Este libro NO contiene progresiones de habilidades tipo calistenia (handstand, planche, front lever, etc.). Su enfoque es prescripción de ejercicio basada en evidencia para salud y rehabilitación. Sin embargo, contiene progresiones estructuradas relevantes:

### SkillPath: progressive-aerobic-conditioning (de sedentario a activo)

- **Disciplina:** Fitness general / salud pública
- **Objetivo final:** Alcanzar ≥150 min/semana de actividad moderada o ≥75 min vigorosa, o combinación equivalente
- **Requisitos de seguridad previos:** Screening preparticipación completado (algoritmo ACSM). Sin signos/síntomas de enfermedad CV/metabólica/renal. Si los hay, clearance médico.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Inicio sedentario | Luz-moderado, <10 min/sesión si muy desacondicionado | Tolerar 10 min continuos sin síntomas adversos | Demasiada intensidad inicial | Cap. 6 "Rate of Progression" |
| 2 | Acumulación inicial | Moderado, 10-20 min/sesión, 3-5 d/sem | Tolerar 20 min continuos | Incrementar demasiado rápido | Cap. 6 |
| 3 | Construcción de volumen | Moderado, +5-10 min cada 1-2 sem | Alcanzar 30 min/sesión | No monitorizar síntomas | Cap. 6 |
| 4 | Objetivo moderado | 30-60 min/sesión, ≥5 d/sem moderado (o 20-60 min, ≥3 d/sem vigoroso) | Mantener 4-6 semanas estable | Estancamiento, no progresar intensidad | Cap. 6 Tabla 6.5 |
| 5 | Introducción de vigoroso | Añadir intervalos o sesiones vigorosas (60-89% HRR) | Tolerar vigoroso sin síntomas | Demasiado vigoroso demasiado pronto | Cap. 6 |
| 6 | Combinación y mantenimiento | 3-5 d/sem combinando moderado+vigoroso; ≥500-1000 MET-min/sem | Adherencia sostenida | Abandono | Cap. 6 |

### SkillPath: progressive-resistance-training (de novato a intermedio)

- **Disciplina:** Fuerza / fitness general
- **Objetivo final:** 2-4 series × 8-12 reps al 60-80% 1RM, 2-3 d/semana por grupo muscular
- **Requisitos de seguridad previos:** Instrucción en técnica por profesional cualificado. Sin contraindicaciones. Familiarización con equipos.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Familiarización | Aprender movimientos con carga muy ligera o sin carga, ROM completo | Ejecutar técnica correcta sin carga | Técnica pobre, ROM incompleto | Cap. 6 |
| 2 | Carga inicial | 1 serie × 10-15 reps al 40-50% 1RM (mayores/desacondicionados) o 50-70% (jóvenes) | Completar 15 reps con buena forma | Valsalva, velocidad excesiva | Cap. 6 Box 6.7 |
| 3 | Volumen inicial | 1-2 series × 8-12 reps al 60-70% 1RM | Superar 12 reps cómodamente en 2 sesiones consecutivas | No descansar entre series (2-3 min) | Cap. 6 |
| 4 | Progresión de carga | Incrementar 5-10% (superior) o 10-20% (inferior) | Mantener 8-12 reps con nueva carga | Incrementos demasiado grandes | Cap. 6 |
| 5 | Volumen completo | 2-4 series × 8-12 reps al 60-80% 1RM, 2-3 d/sem por grupo | Mantener progresión | Sobreentrenamiento | Cap. 6 Tabla 6.6 |
| 6 | Mantenimiento | 1 d/semana puede mantener fuerza si intensidad constante | N/A | Detener completamente | Cap. 6 |

### SkillPath: cardiac-rehab-phase-progression

- **Disciplina:** Rehabilitación cardíaca
- **Objetivo final:** Retorno a actividad funcional, vocacional y recreacional; reducción de riesgo de evento secundario
- **Requisitos de seguridad previos:** Estabilidad clínica. Estratificación de riesgo AACVPR. Clearance médico.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Inpatient (Fase I) | Movilización temprana: self-care, ROM, ambulación supervisada 3-4×/día, educación | Estabilidad hemodinámica, sin dolor, sin arritmias (Box 9.2) | Movilización prematura sin evaluación | Cap. 9 |
| 2 | Outpatient inicial | Aeróbico ligero-moderado (RPE 11-13); ECG continuo; resistencia ligera tras ≥4 sem | Tolerar 20 min aeróbico sin síntomas | Progresar resistencia demasiado pronto | Cap. 9 |
| 3 | Outpatient intermedio | Aeróbico 40-80% HRR; resistencia 1-3 sets × 8-12 reps; reducir monitorización ECG según riesgo | Tolerar 30-60 min; cumplir objetivo semanal | Ignorar signos de isquemia | Cap. 9 |
| 4 | Independiente/mantenimiento | Ejercicio independiente + PA de estilo de vida; PA ocupacional/recreativa | Adherencia a largo plazo | Abandono post-programa | Cap. 9 |

### SkillPath: pulmonary-rehab-progression

- **Disciplina:** Rehabilitación pulmonar
- **Objetivo final:** Mejorar tolerancia al ejercicio, reducir disnea, mejorar calidad de vida
- **Requisitos de seguridad previos:** Evaluación pulmonar (espirometría, GOLD). Estabilidad clínica. No durante exacerbación aguda.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Evaluación | GXT o 6MWT; espirometría; clasificación GOLD; identificar limitación (ventilatoria vs periférica) | Completar evaluación | No identificar limitación principal | Cap. 9 |
| 2 | Aeróbico inicial | Caminar/ciclo a intensidad ligera; bouts cortos si muy limitado | Tolerar 10-15 min | Intensidad excesiva → disnea severa | Cap. 9 |
| 3 | Aeróbico progresivo | 3-5 d/sem; >60% peak work rate (moderado-severo) o RPE disnea 3-6; 20-60 min | Alcanzar 30 min continuo | No usar disnea como guía | Cap. 9 |
| 4 | Resistencia | 2-3 d/sem; 1-3 series × 8-12 reps; 50-80% 1RM | Tolerar 2-3 series | Ignorar debilidad periférica | Cap. 9 |
| 5 | Mantenimiento | Continuar ejercicio post-rehab; beneficio persiste 12-18 meses | Adherencia | Abandono post-programa | Cap. 9 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Aeróbico: Caminar (walking)

- **Cues principales:**
  - Postura erguida, mirada al frente
  - Braceo natural coordinado
  - Contacto talón → planta → dedos
  - Cadencia ~100 pasos/min para intensidad moderada
- **Errores frecuentes:**
  - Mirar hacia abajo (carga cervical)
  - Pasos demasiado largos (overstriding)
  - Inclinación excesiva del tronco
- **Variantes seguras:**
  - Caminar en cinta con barandillas si balance comprometido (⚠️ sobreestima METs si se agarra)
  - Reducir velocidad/incrementar pendiente en cinta para adaptar carga
- **Indicaciones específicas:**
  - PAD: caminar hasta dolor moderado, descansar, retomar
  - LBP: caminar puede agravar en estenosis espinal (especialmente downhill)
  - Mayores con riesgo de caída: usar superficie estable, supervisión
- **Referencias:** Cap. 4, 5, 6, 9

### Aeróbico: Cicloergómetro

- **Cues principales:**
  - Postura erguida en ciclo vertical; ~25° flexión de rodilla en extensión máxima
  - Cadencia constante (50 rpm para tests submáximos YMCA)
  - Manos en posición correcta en manillar
- **Errores frecuentes:**
  - Pedaleo irregular (afecta HR steady-state)
  - Agarrar manillar con demasiada tensión
  - Inclinación excesiva del tronco
- **Variantes seguras:**
  - Ciclo reclinado para problemas de balance
  - FES-LCE para lesión medular
  - Arm ergometer para limitación de miembro inferior
- **Indicaciones específicas:**
  - Preferible sobre treadmill en mayores con balance pobre, problemas ortopédicos
  - ⚠️ Puede infraestimar VO2max por fatiga muscular local
- **Referencias:** Cap. 4, 5

### Resistencia: Multijoint (squat, leg press, deadlift, bench press, shoulder press, rows)

- **Cues principales:**
  - Movimientos controlados y deliberados
  - ROM completo
  - Exhalar en concéntrico, inhalar en excéntrico
  - NO Valsalva
  - Postura correcta: columna neutra, escápulas estables
  - Equilibrar agonistas/antagonistas
- **Errores frecuentes:**
  - Valsalva (riesgo de pico hipertensivo)
  - ROM parcial
  - Velocidad excesiva / balístico no controlado
  - Compensación con otros grupos musculares
  - Fatiga → pérdida de forma
- **Variantes seguras:**
  - Máquinas con peso apilado (más seguras para novatos que pesos libres)
  - Bandas de resistencia
  - Reducir ROM si dolor ortopédico
  - 10-15 reps a 40-50% 1RM para mayores/desacondicionados
- **Indicaciones específicas:**
  - Post-esternotomía: evitar carga de miembro superior 10-12 semanas
  - Post-marcapasos/ICD: evitar vigoroso de miembro superior 3-4 semanas
  - Retinopatía diabética severa: evitar Valsalva y cargas pesadas
  - Osteoporosis: evitar torsión/flexión/compresión excesiva de columna
  - CKD: evitar 1-RM (riesgo fractura avulsión); usar ≥3-RM
- **Referencias:** Cap. 4, 6, 9, 10, 11

### Resistencia: Push-up test

- **Cues principales:**
  - Hombres: posición estándar (manos bajo hombros, espalda recta, pies como pivote)
  - Mujeres: posición modificada de rodillas (rodillas juntas, tobillos en flexión plantar, rodillas como pivote)
  - Bajar hasta que barbilla toque el suelo; estómago no toca
  - Subir a extensión completa de codos
  - Espalda recta en todo momento
- **Errores frecuentes:**
  - Cadera sagging o pike
  - ROM incompleto
  - Velocidad inconsistente
  - Parar antes de fatiga verdadera
- **Referencias:** Cap. 4, Box 4.8

### Flexibilidad: Sit-and-reach (Canadian Trunk Forward Flexion)

- **Cues principales:**
  - Warm-up previo + estiramientos
  - Sentado sin zapatos, plantas contra caja (marca 0 en 26 cm)
  - Pies separados ~15 cm
  - Alcance lento con ambas manos paralelas, mantener ~2 s
  - Exhalar, cabeza entre brazos al alcanzar
  - Rodillas extendidas pero NO presionadas por el tester
  - No rebotar
- **Errores frecuentes:**
  - Rebote balístico
  - Una mano liderando
  - Flexión de rodillas
  - Contener respiración
- **Variantes:**
  - ⚠️ Si caja con 0 en 23 cm (Fitnessgram): restar 3 cm de las normas
- **Referencias:** Cap. 4, Box 4.9, Tabla 4.13

### Flexibilidad: Estiramiento estático

- **Cues principales:**
  - Estirar lentamente hasta punto de tirantez o leve molestia (NO dolor)
  - Mantener 10-30 s (mayores: 30-60 s)
  - Respiración normal, no contener
  - Músculos calientes (post warm-up o post cool-down)
- **Errores frecuentes:**
  - Rebotar (balístico inadecuado)
  - Estirar en frío
  - Exceder punto de molestia
  - Estático pre-ejercicio de fuerza/potencia (>45s puede reducir rendimiento)
- **Referencias:** Cap. 6, Box 6.4

### Flexibilidad: PNF (contract-relax)

- **Cues principales:**
  - Contracción isométrica del grupo objetivo (20-75% MVC) durante 3-6 s
  - Seguir inmediatamente con estiramiento asistido 10-30 s
  - Requiere compañero
- **Errores frecuentes:**
  - Contracción demasiado intensa
  - No relajar completamente antes del estiramiento
  - Estiramiento asistido demasiado agresivo
- **Referencias:** Cap. 6, Box 6.4

### Neuromotor: Balance training (mayores)

- **Cues principales:**
  - Progresión: bipodal → semi-tandem → tandem → unipodal
  - Movimientos dinámicos que perturben centro de gravedad (tandem walk, giros)
  - Fortalecer grupos posturales (heel/toe stands)
  - Reducir input sensorial (ojos cerrados) como progresión
  - Tai chi como modalidad multifacética
- **Errores frecuentes:**
  - Progresión demasiado rápida (riesgo de caída)
  - No tener soporte de seguridad cercano
  - Ignorar miedo a caer
- **Referencias:** Cap. 6, 7

### Grip Strength Test (Handgrip)

- **Cues principales:**
  - Ajustar barra: segunda articulación de dedos encaja bajo el mango
  - Dinamómetro a cero
  - Sujeto de pie, brazo al lado del cuerpo a nivel del muslo, lejos del cuerpo
  - Apretar lo más fuerte posible SIN contener respiración (evitar Valsalva)
  - Mano y dinamómetro NO deben tocar cuerpo ni objetos
  - 2 intentos por mano; registrar el mayor; sumar ambas manos
- **Errores frecuentes:**
  - Valsalva
  - Tocar el cuerpo con la mano
  - Posición del brazo incorrecta
- **Referencias:** Cap. 4, Box 4.6

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Enfermedad Arterial Periférica (PAD) con claudicación intermitente

- **Zona:** `lower-extremity` (principalmente pantorrilla, también muslo/glúteo)
- **Etiología resumida:** Aterosclerosis → estenosis → limitación de vasodilatación → isquemia distal. Mismos factores de riesgo que CAD (DM, HTA, tabaquismo, dislipidemia).
- **Signos y síntomas clave:** Dolor/cramping/ fatiga reproducible en pantorrilla (u otros) con ejercicio de carga; aliviado con reposo. Clasificación Fontaine (Tabla 9.1) y ABI (Tabla 9.2).
- **Stadia / fases:** Fontaine I (asintomático) → II (claudicación leve/moderada) → III (dolor en reposo) → IV (úlceras/gangrena). ABI: >1.0 normal; 0.91-0.99 borderline; ≤0.90 PAD; ≤0.40 severo.
- **Protocolos de tratamiento/rehab:**
  - **Fase conservadora:** Reducción de riesgo CV + ejercicio supervisado (Clase IA AHA). Farmacología (cilostazol). Si falla → revascularización.
  - **Programa de ejercicio supervisado:** ≥3 d/sem; caminar en treadmill hasta dolor moderado-severo (3-4 en escala); descansar; retomar; 30-45 min/sesión → progresar a ≥60 min; ≥12 semanas. Mejoras: 106-177% en tiempo libre de dolor.
- **Ejercicios de prehab/movilidad específicos:** Caminar como modalidad principal. Complementar con ciclo/ergómetro de brazo (warm-up). No como modalidad principal.
- **Umbrales de dolor / red flags:** Claudicación en reposo (Fontaine III-IV) → derivar vascular. Úlceras/gangrena → urgente.
- **Referencias:** Cap. 9, Tablas 9.1, 9.2

### Lesión / condición: Dolor Lumbar (LBP) no específico

- **Zona:** `lumbar`
- **Etiología resumida:** >85% no específico. Multicausal. Factores psicosociales (miedo-evitación, depresión, expectativas de tratamiento pasivo) perpetúan cronicidad.
- **Signos y síntomas clave:** Dolor, tensión muscular o rigidez debajo del margen costal y encima de pliegues glúteos, con o sin dolor de pierna. Agudo <6 sem; subagudo 6-12 sem; crónico >12 sem.
- **Stadia / fases:**
  - Agudo: 90% resuelve en 6 sem. Mantener actividad ordinaria dentro de límites de dolor. NO reposo en cama. Retorno al trabajo ASAP.
  - Subagudo: Introducir actividades cuidadosamente dentro de 2 semanas. Caminar como inicio.
  - Crónico: Abordaje multidisciplinar + ejercicio. Aeróbico (caminar, bicicleta, natación) con mejor evidencia. Resistencia de tronco. Flexibilidad de cadera/EEII.
- **Protocolos de tratamiento/rehab:**
  - **Agudo (primeros días):** Evitar ejercicio si episodio severo. Mantener ADL. No reposo en cama.
  - **Subagudo (2-6 sem):** Introducir caminar gradualmente. Aeróbico suave.
  - **Crónico (>12 sem):** Programa combinado: aeróbico + resistencia de tronco + flexibilidad. Individualizado, supervisado. Abordar factores psicosociales.
- **Ejercicios de prehab/movilidad específicos:**
  - Caminar (mejor evidencia)
  - Ejercicios de centralización (prone push-ups) si dolor se irradia
  - Flexibilidad de cadera y EEII
  - Fortalecimiento/endurance de tronco (subagudo/crónico)
- **Umbrales de dolor / red flags:**
  - Peripheralización (dolor se extiende a piernas): limitar actividad/ejercicio
  - LBP con patología específica (cáncer, fractura, infección, cauda equina): tratar condición primaria
  - Dolor >6 semanas sin mejora: abordaje multidisciplinar
  - ⚠️ Abdominal bracing puede aumentar compresión espinal
- **Referencias:** Cap. 7, Box 7.1

### Lesión / condición: Osteoartritis (OA)

- **Zona:** `knee`, `hip`, `hand`, `spine` (más comunes)
- **Etiología resumida:** Degeneración progresiva del cartílago articular. Factores de riesgo: sobrepeso, historia de lesión articular, genética, edad.
- **Signos y síntomas clave:** Dolor articular, rigidez, limitación funcional. Sin inflamación sistémica (a diferencia de RA).
- **Protocolos de tratamiento/rehab:**
  - Ejercicio aeróbico: 3-5 d/sem, moderado, 30-60 min
  - Resistencia: 2-3 d/sem, 1-3 series × 8-12 reps, 50-80% 1RM
  - Flexibilidad: ≥2-3 d/sem
  - Acuático: beneficioso
  - ⚠️ NO ejercitar durante inflamación aguda
  - Ejercicio NO daña articulaciones (evidencia suficiente)
- **Umbrales de dolor / red flags:**
  - Dolor 2h post-ejercicio > pre-ejercicio → reducir intensidad/duración
  - Dolor 48-72h puede ser DOMS (normal)
  - Articulación caliente, hinchada, dolorosa → no ejercitar esa articulación
- **Referencias:** Cap. 11, sección "Arthritis"

### Lesión / condición: Fibromialgia

- **Zona:** `generalized` (dolor generalizado)
- **Etiología resumida:** Síndrome de dolor crónico generalizado con hipersensibilidad sensorial. Sin inflamación o daño tisular objetivo.
- **Signos y síntomas clave:** (Box 11.1) Dolor generalizado, fatiga, sueño no reparador, sensibilidad ambiental, parestesias, debilidad, cefaleas, piernas inquietas, ansiedad, depresión.
- **Protocolos de tratamiento/rehab:**
  - Aeróbico: 2-3 d/sem (mejora síntomas); moderado; 20-60 min
  - Resistencia: 2-3 d/sem; progresivo
  - Acuático: beneficioso
  - Tai chi, yoga: pueden reducir síntomas
  - Progresión lenta
  - Minimizar componente excéntrico
- **Umbrales de dolor / red flags:**
  - Si síntomas aumentan durante/después del ejercicio: reducir intensidad/duración (no frecuencia)
  - Distinguir dolor post-ejercicio de fluctuaciones de fibromialgia
- **Referencias:** Cap. 11, sección "Fibromyalgia", Box 11.1

### Lesión / condición: Lesión Medular (SCI)

- **Zona:** `spinal-cord` → afecta múltiples zonas según nivel
- **Etiología resumida:** Trauma → pérdida de función somática, sensorial y autonómica por debajo del nivel de lesión.
- **Signos y síntomas clave:** Según nivel: C1-C4 (ventilador dependiente); C5-C8 (tetraplejía); T1-T6 (paraplejía + riesgo disreflexia); T7-L2 (paraplejía); L3-S5 (función parcial de EEII).
- **Protocolos de tratamiento/rehab:** Ver Regla `spinal-cord-injury-exercise` en sección 3.
- **Umbrales de dolor / red flags:**
  - Disreflexia autonómica (≥T6): HTA severa súbita, cefalea pulsátil, piloerección, flushing → EMERGENCIA. Detener ejercicio, sentar erguido, identificar estímulo, buscar ayuda médica.
  - Úlceras por presión: revisar piel regularmente
  - Riesgo de fractura con carga si sin historia de bipedestación
- **Referencias:** Cap. 11, sección "Spinal Cord Injury"

### Lesión / condición: Esclerosis Múltiple (MS)

- **Zona:** `central-nervous-system` → múltiples zonas
- **Etiología resumida:** Enfermedad autoinmune desmielinizante del SNC. 4 cursos: RRMS (85%), SPMS (50% de RRMS en 10 años), PPMS (10%), PRMS (5%).
- **Signos y síntomas clave:** (Box 11.3) Debilidad, disfunción intestinal/vesical, fatiga, disfunción cognitiva, entumecimiento, mareo, alteraciones visuales, depresión, problemas de marcha/balance/coordinción, cambios emocionales, disfunción sexual, dolor.
- **Protocolos de tratamiento/rehab:** Ver Regla `ms-exercise` en sección 3.
- **Umbrales de dolor / red flags:**
  - Exacerbación aguda: NO ejercitar
  - Fenómeno de Uhthoff: empeoramiento transitorio con calor → usar enfriamiento
  - Fatiga severa: reducir volumen/intensidad
- **Referencias:** Cap. 11, sección "Multiple Sclerosis", Box 11.3, Tabla 11.7 (EDSS)

### Lesión / condición: Osteoporosis

- **Zona:** `skeletal-system` (columna, cadera, muñeca más comunes)
- **Etiología resumida:** Baja densidad mineral ósea + alteración de microarquitectura → fragilidad → fractura. Postmenopáusica (estrógeno) y senil.
- **Signos y síntomas clave:** Asintomática hasta fractura. Fracturas vertebrales → pérdida de altura, cifosis, compromiso ventilatorio.
- **Protocolos de tratamiento/rehab:** Ver Regla `osteoporosis-exercise` en sección 3.
- **Umbrales de dolor / red flags:**
  - Dolor óseo súbito → posible fractura → evaluación médica
  - Fractura vertebral reciente: precaución con flexión/torsión
  - Inmovilización: pérdida ósea rápida → evitar
- **Referencias:** Cap. 11, sección "Osteoporosis"

### Condición: Enfermedad Cardíaca (post-MI, post-CABG, post-PCI, HF, valvular)

- **Zona:** `cardiovascular`
- **Etiología resumida:** Aterosclerosis (CAD), miocardiopatía (HF), valvulopatía.
- **Signos y síntomas clave:** Angina, disnea, fatiga, palpitaciones, síncope. Signos de isquemia en ECG.
- **Protocolos de tratamiento/rehab:**
  - CR inpatient → outpatient → mantenimiento (ver SkillPath cardiac-rehab-phase-progression)
  - Contraindicaciones absolutas para CR (Box 9.4): angina inestable, HTA no controlada (SBP >180 o DBP >110), hipotensión ortostática >20 mmHg con síntomas, estenosis aórtica significativa (AVA <1.0 cm²), arritmias no controladas, taquicardia sinusal >120, HF descompensada, bloqueo AV 3er grado sin marcapasos, pericarditis/miocarditis activa, embolia reciente, tromboflebitis aguda, disección aórtica, enfermedad sistémica aguda/fiebre, DM no controlada, ortopédico severo, metabólico agudo, trastorno psicológico severo.
- **Umbrales de dolor / red flags:**
  - Angina durante ejercicio → detener
  - SBP cae >10 mmHg con incremento de carga → detener
  - ST elevación >1 mm → detener (absoluto)
  - Arritmia sostenida → detener
  - SpO2 ≤80% → detener
- **Referencias:** Cap. 9, Box 9.2, 9.3, 9.4

### Condición: Diabetes Mellitus (complicaciones del ejercicio)

- **Zona:** `metabolic` → afecta múltiples zonas
- **Etiología resumida:** Defecto en secreción/acción de insulina → hiperglucemia → complicaciones micro/macrovasculares y neuropatía.
- **Signos y síntomas clave de complicaciones agudas del ejercicio:**
  - Hipoglucemia (<70 mg/dL): temblor, debilidad, sudoración, nerviosismo, hormigueo, hambre → neuroglucopenia: cefalea, visión borrosa, confusión, convulsiones, coma
  - Hiperglucemia (≥300): poliuria, fatiga, debilidad, sed, aliento cetónico
- **Protocolos:**
  - Monitorear glucosa antes, durante, después
  - Hipoglucemia: contraindicación relativa para iniciar ejercicio
  - Hiperglucemia sin cetonas: ejercicio moderado OK; con cetonas: posponer
  - Ajustar insulina/carbohidratos (consultar proveedor)
  - T1DM: consumir ≤15g carbohidratos si glucosa ≤100 antes de ejercicio
  - Reducir insulina rápida/corta antes de ejercicio
  - Bomba de insulina: reducir basal o desconectar para ejercicio corto
- **Umbrales / red flags:**
  - Hipoglucemia puede ocurrir hasta 12h post-ejercicio
  - Hipoglucemia unawareness (neuropatía autonómica, hipoglucemia reciente): monitoreo frecuente
  - Retinopatía severa: evitar vigoroso, saltos, Valsalva, cabeza abajo
  - Neuropatía periférica: cuidado del pie, calzado, inspección diaria
  - Deshidratación por poliuria → riesgo de enfermedad por calor
- **Referencias:** Cap. 10, sección "Diabetes Mellitus"

### Condición: Enfermedad Pulmonar (COPD, Asma)

- **Zona:** `pulmonary`
- **Etiología resumida:** COPD: exposición a partículas/gases nocivos → inflamación crónica → limitación de flujo aéreo. Asma: hiperreactividad bronquial + inflamación → obstrucción reversible.
- **Signos y síntomas clave:** Disnea, tos crónica, producción de esputo, sibilancias.
- **Protocolos:** Ver reglas `copd-exercise` y `asthma-exercise` en sección 3.
- **Umbrales / red flags:**
  - SpO2 ≤80% → detener test/ejercicio
  - Disnea severa → reducir intensidad
  - Exacerbación aguda → no ejercitar
  - EIB: usar broncodilatador pre-ejercicio; warm-up 10-15 min
- **Referencias:** Cap. 9, secciones "Asthma" y "COPD"

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Regla: sedentary-behavior-breaks

- **Descripción:** Romper períodos prolongados de sedentarismo.
- **Tipo:** estilo de vida
- **Métrica principal:** breaks per hour, minutes per break
- **Valores numéricos:**
  - ≥1 break por hora (de pie o caminando)
  - 1-5 min de actividad ligera (de pie, caminar)
  - Sedentarismo asociado con: mortalidad all-cause, CVD, cáncer (mama, colon, colorectal, endometrial, ovárico), T2DM
  - Efecto adverso independiente de nivel de PA
  - Activos tienen 30% menor riesgo de mortalidad vs inactivos con mismo tiempo sedentario
- **Condiciones de aplicación:** Todos los adultos, incluso los que cumplen recomendaciones de PA.
- **Capítulos/páginas:** Cap. 1 "Sedentary Behavior and Health"; Cap. 6 "Sedentary Behavior and Brief Activity Breaks"

### Regla: exercise-and-depression-anxiety

- **Descripción:** Efecto del ejercicio en salud mental.
- **Tipo:** estilo de vida
- **Métrica principal:** N/A (cualitativo)
- **Valores numéricos:** N/A
- **Condiciones de aplicación:** Población general y clínica.
- **Capítulos/páginas:** Cap. 1 Box 1.4 ("Other Benefits")
- **Comentarios:** Ejercicio reduce ansiedad y depresión, mejora función cognitiva, mejora bienestar, reduce riesgo de caídas en mayores.

### Regla: exercise-and-weight-management

- **Descripción:** Ejercicio para prevención de ganancia de peso y manejo de obesidad.
- **Tipo:** estilo de vida / nutrición
- **Métrica principal:** minutesPerWeek, kcalPerWeek
- **Valores numéricos:**
  - Para prevenir ganancia de peso: puede requerirse más que mínimo (150 min/sem)
  - Para pérdida de peso: 250-300 min/sem + restricción calórica
  - Para mantenimiento post-pérdida: ≥250 min/sem
  - PA + nutrición adecuada necesario para manejo de peso
  - 500-1,000 kcal/día déficit → 0.5-0.9 kg/semana pérdida
- **Condiciones de aplicación:** Sobrepeso/obesidad.
- **Capítulos/páginas:** Cap. 1; Cap. 10 "Overweight and Obesity"

### Regla: pregnancy-nutrition

- **Descripción:** Consideraciones nutricionales en embarazo y ejercicio.
- **Tipo:** estilo de vida / nutrición
- **Métrica principal:** kcal/day
- **Valores numéricos:**
  - Demanda metabólica aumenta ~300 kcal/día durante embarazo
  - Incrementar ingesta calórica para cubrir costos de embarazo + ejercicio
  - Ingesta por encima o debajo de lo recomendado + cambios de peso → riesgo materno/fetal
  - Consultar guías de ganancia de peso por BMI pre-embarazo (IOM/NRC)
- **Condiciones de aplicación:** Embarazadas que ejercitan.
- **Capítulos/páginas:** Cap. 7, sección "Pregnancy", "Special Considerations"

### Regla: heat-hydration

- **Descripción:** Hidratación antes, durante y después del ejercicio.
- **Tipo:** estilo de vida / seguridad
- **Métrica principal:** fluid volume, body mass change
- **Valores numéricos:**
  - Determinar sweat rate (peso antes/después)
  - Reponer 0.5 L por cada libra (0.45 kg) de peso perdido
  - Limitar cambio de peso corporal a <2%
  - Beber según sed + plan individualizado
  - NO sobrebeber agua hipotónica (riesgo de hiponatremia <135 mEq/L)
  - En eventos largos: consumir fluidos con sodio/alimentos salados
  - Comidas ayudan a estimular sed y reponer electrolitos
- **Condiciones de aplicación:** Ejercicio en calor, ejercicio prolongado.
- **Capítulos/páginas:** Cap. 8, Box 8.2
- **Comentarios:** ⚠️ Hiponatremia asociada a ejercicio: más común en PA de larga duración; precipitada por consumo excesivo de hipotónico.

### Regla: exercise-when-ill

- **Descripción:** Consideraciones para ejercitar con enfermedad.
- **Tipo:** estilo de vida / seguridad
- **Métrica principal:** N/A (cualitativo)
- **Valores numéricos:** N/A
- **Condiciones de aplicación:** Varias.
- **Capítulos/páginas:** Cap. 1, Cap. 8, Cap. 9, Cap. 10, Cap. 11
- **Comentarios:**
  - Infección aguda: no ejercitar (CKD, VIH, cáncer)
  - Exacerbación de asma: no ejercitar hasta mejorar
  - Exacerbación de MS: no ejercitar
  - Artritis con inflamación aguda: no ejercitar esa articulación
  - LBP agudo severo: evitar ejercicio primeros días
  - DM con hiperglucemia + cetonas: posponer
  - ⚠️ El libro no proporciona explícitamente regla "above/below the neck" pero implica precaución similar

### Regla: sleep-and-exercise

- **Descripción:** Relación sueño-ejercicio.
- **Tipo:** estilo de vida
- **Métrica principal:** N/A (cualitativo)
- **Valores numéricos:** N/A
- **Condiciones de aplicación:** General.
- **Capítulos/páginas:** Cap. 1 (menciona sueño pobre como síntoma de AMS en altitud); Cap. 7 (fibromialgia: sueño no reparador)
- **Comentarios:** ⚠️ El libro no tiene una sección dedicada a sueño y ejercicio. Solo menciones tangenciales. No es fuente principal para este factor.

### Regla: stress-and-exercise

- **Descripción:** Relación estrés-ejercicio.
- **Tipo:** estilo de vida
- **Métrica principal:** N/A (cualitativo)
- **Valores numéricos:** N/A
- **Condiciones de aplicación:** General.
- **Capítulos/páginas:** Cap. 1 Box 1.4 (ejercicio reduce ansiedad/depresión); Cap. 11 (factores psicosociales en LBP, Box 7.1)
- **Comentarios:** Estrés emocional puede aumentar temblor en PD, espasticidad en CP, síntomas de fibromialgia. El ejercicio es una herramienta de manejo del estrés.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - **Fuente principal de reglas FITT-VP cuantitativas** para prescripción de ejercicio en adultos sanos y poblaciones clínicas. Los rangos de frecuencia, intensidad, tiempo y volumen son extremadamente específicos y directamente implementables como `TrainingRule`.
  - **Motor de screening preparticipación:** El algoritmo ACSM (Cap. 2) puede implementarse como un árbol de decisión que determine si un usuario necesita clearance médico antes de iniciar/progresar ejercicio.
  - **Validación de intensidad:** Las tablas de clasificación de intensidad (METs, %HRR, %VO2R, RPE, Talk Test) proporcionan un sistema de referencia cruzada para validar que la intensidad prescrita es apropiada.
  - **Reglas de seguridad y terminación:** Los criterios de terminación de tests de ejercicio (Box 5.4) y las contraindicaciones (Box 5.2, 9.4) pueden implementarse como reglas de seguridad que detengan o modifiquen prescripciones.
  - **Protocolos de rehabilitación:** CR (Fase I→IV), PAD, COPD, asma, HF, post-ACV tienen protocolos muy específicos con números que pueden alimentar un motor de rehab.
  - **Normas de fitness:** Las tablas de percentiles (CRF, fuerza, flexibilidad, composición corporal) pueden usarse para benchmarking del usuario.
  - **Consideraciones ambientales:** Altitud, frío, calor con umbrales numéricos claros.
  - **Ecuaciones de predicción:** VO2max, HRmax, METs, calorías → implementables como funciones de cálculo.

- **Limitaciones:**
  - **NO es un libro de fuerza/hipertrofia avanzada:** No cubre periodización, programación para atletas de élite, técnicas avanzadas de resistencia. Para eso, usar otras fuentes (Schoenfeld, NSCA, etc.).
  - **NO es un libro de calistenia/skills:** No hay progresiones de handstand, planche, front lever, muscle-up, etc. Para eso, usar fuentes específicas de calistenia/gimnasia.
  - **NO es un libro de movilidad articular detallada:** La flexibilidad se trata de forma general (estático, PNF, dinámico). No hay protocolos específicos de movilidad por articulación tipo "CARs" o "end-range training". Para movilidad detallada, usar otras fuentes.
  - **NO es un libro de tendinopatías:** Solo menciones tangenciales. Para tendinitis/tendinopatía, usar fuentes específicas (Cook, Purdam, etc.).
  - **Lenguaje clínico:** Muchas secciones asumen conocimiento de fisiología, farmacología, patología. El sistema debe traducir a lenguaje de usuario final.
  - **Población amplia:** Las recomendaciones son para "promedio" de cada población. Usuarios individuales pueden necesitar ajustes significativos.
  - **⚠️ NO usar para diagnóstico:** El libro es de prescripción y evaluación, no de diagnóstico médico. El sistema NUNCA debe diagnosticar condiciones.
  - **⚠️ NO automatizar intervenciones médicas:** Cualquier recomendación que involucre medicación, cirugía, o decisiones clínicas debe ser referida a profesional médico.
  - **⚠️ Supervisión clínica requerida:** Muchos protocolos (CR, PAD supervisado, CPET, tests máximos en poblaciones clínicas) requieren supervisión médica. El sistema debe marcar estos claramente como "requiere supervisión profesional" y no intentar automatizarlos.

- **Recomendaciones específicas:**
  - **Crear `rules/acsm_aerobic_prescription.ts`** con las reglas de frecuencia, intensidad, duración, volumen y progresión aeróbica (sección 3: `aerobic-frequency-general`, `aerobic-intensity-general`, `aerobic-duration-general`, `aerobic-volume-general`, `aerobic-progression-rate`).
  - **Crear `rules/acsm_resistance_prescription.ts`** con las reglas de resistencia (frecuencia, intensidad %1RM, sets, reps, progresión 5-10%/10-20%, técnica, contraindicaciones).
  - **Crear `rules/acsm_screening.ts`** implementando el algoritmo de preparticipación (6 ramas de decisión) como un flujo que determine `needsMedicalClearance`.
  - **Crear `rules/acsm_safety_termination.ts`** con criterios absolutos y relativos de terminación de ejercicio, contraindicaciones, y red flags por condición.
  - **Crear `SkillPath: progressive-aerobic-conditioning`** y **`SkillPath: progressive-resistance-training`** como progresiones de novato a activo.
  - **Crear `rules/acsm_clinical_exercise.ts`** con prescripciones específicas por condición (DM, HTA, COPD, PAD, HF, post-MI, etc.) como reglas condicionales que se activen cuando el usuario tiene esa condición registrada.
  - **Añadir a `BodyZoneId` metadatos** de lesiones típicas, ROM objetivo y precauciones extraídas de este libro (ej. lumbar → LBP; rodilla → OA sitio más común; hombro → precauciones post-esternotomía/marcapasos).
  - **Crear `rules/acsm_environmental.ts`** con reglas de altitud, frío y calor (umbrales de WBGT, WCT, staging de altitud, hidratación).
  - **Crear `rules/acsm_lifestyle.ts`** con reglas de sedentarismo (breaks por hora), sueño (tangencial), y ejercicio con enfermedad.
  - **⚠️ Marcar todas las reglas clínicas (CR, PAD, COPD, HF, DM, etc.) con `requiresClinicalSupervision: true`** para que el sistema no las aplique autónomamente sin confirmación de supervisión profesional.
  - **No usar este libro como fuente para:** progresiones de calistenia, técnicas avanzadas de powerlifting, protocolos de tendinopatía, movilidad articular detallada, periodización para atletas. Estas deben venir de otras fuentes del stack.

---

*Fin de extracción. Documento generado a partir de ACSM's Guidelines for Exercise Testing and Prescription, 10th Edition (2018). Todo el contenido ha sido parafraseado; no se han copiado párrafos literales. Las referencias de capítulo/sección se proporcionan para verificación.*

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# ACSM's Guidelines for Exercise Testing and Prescription — Complemento de Extracción y Ejecución de Recomendaciones

---

## ⚠️ PARTE 1: Información que NO puedo extraer completamente por falta de ayudas visuales

El texto extraído del PDF **no reproduce fielmente** el contenido de muchas tablas, figuras y boxes que son **críticos** para la implementación. A continuación listo lo que falta o está incompleto, para que puedas complementar:

### Tablas críticas NO reproducidas en el texto extraído

| Referencia | Contenido | Impacto |
|---|---|---|
| **Tabla 6.1** | Clasificación completa de intensidad (METs, %HRR, %VO₂R, %HRmax, RPE 6-20, RPE 0-10, Talk Test) por nivel (sedentario, ligero, moderado, vigoroso, casi-máximo, máximo) | **CRÍTICO** para `ExerciseIntensityZone` y validación de prescripción |
| **Tabla 6.2** | Ecuaciones de HRmax (220-edad, Tanaka, Gulati, Gellish, otras) con SD | **CRÍTICO** para cálculo de THR |
| **Tabla 6.3** | Ecuaciones metabólicas (VO₂ para caminar, correr, ciclo, step, arm ergometer) | **CRÍTICO** para conversión METs ↔ velocidad/grade/watts |
| **Tabla 6.4** | Clasificación de ejercicios aeróbicos Tipo A, B, C, D con ejemplos | **IMPORTANTE** para prescripción por nivel de habilidad |
| **Tabla 6.5** | FITT-VP completo para ejercicio aeróbico (tabla resumen) | **CRÍTICO** como referencia cruzada |
| **Tabla 6.6** | FITT-VP completo para resistencia | **CRÍTICO** |
| **Tabla 6.7** | FITT-VP completo para flexibilidad | **CRÍTICO** |
| **Tabla 6.8** | FITT-VP completo para neuromotor | **CRÍTICO** |
| **Tabla 2.1** | Signos y síntomas de enfermedad CV, metabólica y renal (lista completa) | **CRÍTICO** para screening |
| **Tabla 3.1** | Factores de riesgo CVD con criterios definitorios completos | **CRÍTICO** para `CVDRiskFactorProfile` |
| **Tabla 4.7** | Normas percentiles de CRF por edad y sexo (FRIEND Registry) | **IMPORTANTE** para benchmarking |
| **Tablas 4.9, 4.10** | Normas de bench press y leg press por edad/sexo | **IMPORTANTE** |
| **Tabla 4.11** | Normas de push-up por edad/sexo | **IMPORTANTE** |
| **Tabla 4.13** | Normas de sit-and-reach por edad/sexo | **IMPORTANTE** |
| **Figura 5.1** | Protocolos comunes de treadmill (Bruce, Naughton modificado, Balke, ramp) con METs por stage | **CRÍTICO** para protocolos de testing |
| **Figura 5.2** | Escala CR10 de Borg (0-10) con descriptores | **IMPORTANTE** para RPE |
| **Figura 5.3** | Escalas de angina, disnea y claudicación (0-4 o 0-10) | **IMPORTANTE** para monitorización |
| **Tabla 5.2** | Mejores prácticas de monitorización durante test sintomático-limited | **IMPORTANTE** |
| **Tabla 9.1** | Clasificación de PAD (Fontaine I-IV con descripciones) | **IMPORTANTE** para PAD |
| **Tabla 9.2** | ABI y clasificación de severidad | **IMPORTANTE** para PAD |
| **Tabla 9.3** | Clasificación GOLD de COPD (I-IV con FEV₁/FVC) | **IMPORTANTE** para COPD |
| **Tabla 10.1** | Criterios diagnósticos de diabetes/prediabetes (FBG, OGTT, HbA1c) | **CRÍTICO** para DM |
| **Tabla 10.2** | Criterios de síndrome metabólico (5 criterios con valores) | **CRÍTICO** para Metsyn |
| **Tabla 11.1** | Contraindicaciones de ejercicio para sobrevivientes de cáncer | **IMPORTANTE** |
| **Tabla 11.4** | Clasificación funcional CPISRA (clases 1-8) | **IMPORTANTE** para CP |
| **Tabla 11.6** | Estadios de CKD (G1-G5 con GFR) | **IMPORTANTE** para CKD |
| **Tabla 11.7** | Cursos de MS (RRMS, SPMS, PPMS, PRMS) | **IMPORTANTE** para MS |
| **Tabla 11.8** | Escala EDSS de Kurtzke (0-10) | **IMPORTANTE** para MS |
| **Tabla 11.9** | Escala de Hoehn y Yahr (1-5) | **IMPORTANTE** para PD |
| **Tabla A.1** | Efectos de medicamentos en respuesta al ejercicio (por categoría) | **CRÍTICO** para interacciones |
| **Apéndice C** | Tablas de interpretación ECG (ritmos, bloqueos, isquemia) | **IMPORTANTE** para contexto clínico |

### Figuras críticas NO reproducidas

| Referencia | Contenido | Impacto |
|---|---|---|
| **Figura 2.2** | Algoritmo de screening preparticipación (árbol de decisión completo) | **CRÍTICO** — necesito la estructura exacta del árbol |
| **Figura 6.1** | Ejemplos de cálculo de intensidad (HRR, VO₂R, %HRmax) | **IMPORTANTE** para validación |
| **Figura 6.2** | Relación HR-VO₂ para prescripción directa | **IMPORTANTE** |
| **Figura 11.2** | Evaluación médica pre-ejercicio para cáncer (flujo) | **IMPORTANTE** |
| **Figura 12.1** | TTM con procesos de cambio por etapa | **IMPORTANTE** para behavioral |
| **Figura 12.2** | TPB (modelo de conducta planificada) | **IMPORTANTE** para behavioral |

### Boxes críticos parcialmente extraídos

| Referencia | Contenido | Estado |
|---|---|---|
| **Box 2.1** | Case studies de screening | ✅ Extraído |
| **Box 2.2** | Estratificación de riesgo AACVPR | ✅ Extraído |
| **Box 3.1** | Componentes de historia médica | ✅ Extraído |
| **Box 3.5** | Procedimiento de medición BP | ✅ Extraído |
| **Box 5.4** | Criterios de terminación (absolutos y relativos) | ✅ Extraído |
| **Box 6.1** | Componentes de sesión de ejercicio | ✅ Extraído |
| **Box 6.2** | Métodos de prescripción de intensidad | ✅ Extraído |
| **Box 6.3** | Cálculo de METs, MET-min, kcal | ✅ Extraído |
| **Box 6.4** | Definiciones de flexibilidad | ✅ Extraído |
| **Box 7.2** | Contraindicaciones de ejercicio en embarazo | ✅ Extraído |
| **Box 7.4** | Signos de alarma en embarazo | ✅ Extraído |
| **Box 9.4** | Indicaciones/contraindicaciones CR | ✅ Extraído |
| **Box 11.1** | Signos/síntomas de fibromialgia | ✅ Extraído |
| **Box 11.3** | Signos/síntomas de MS | ✅ Extraído |
| **Box 11.4** | Trastornos de movimiento en PD | ✅ Extraído |
| **Box 12.1** | Five A's Model | ✅ Extraído |
| **Box 12.2** | Estrategias por etapa TTM | ✅ Extraído |

---

**🔴 ACCIÓN NECESARIA:** Para completar la extracción necesito que me proporciones el contenido de las **Tablas 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 2.1, 3.1, 4.7, 10.1, 10.2** y la **Figura 2.2** (algoritmo de screening). Sin estas tablas, las reglas cuantitativas de intensidad, las ecuaciones de HRmax, las ecuaciones metabólicas y el árbol de screening quedan incompletas.

---

## PARTE 2: Ejecución de las 11 Recomendaciones

A continuación desarrollo cada una de las 11 recomendaciones con el máximo detalle posible basado en el texto disponible.

---

### Recomendación 1: `rules/acsm_aerobic_prescription.ts`

**Objetivo:** Reglas de frecuencia, intensidad, duración, volumen y progresión aeróbica para adultos sanos.

#### Regla: `aerobic-frequency-general`
- **Tipo:** frecuencia
- **Métrica:** sessionsPerWeek
- **Valores:**
  - Moderado: ≥5 d/semana
  - Vigoroso: ≥3 d/semana
  - Combinación moderado+vigoroso: 3–5 d/semana
  - Mínimo absoluto con beneficio: 1–2 d/semana (no recomendado por riesgo MSI)
- **Condiciones:** Adultos sanos. Frecuencias <3 d/sem atenúan mejoras en CRF. >5 d/sem de vigoroso puede aumentar MSI en no acondicionados.
- **Fuente:** Cap. 6, sección "Frequency of Exercise"

#### Regla: `aerobic-intensity-general`
- **Tipo:** intensidad
- **Métrica:** %HRR o %VO₂R
- **Valores:**
  - Moderado: 40%–59% HRR o VO₂R
  - Vigoroso: 60%–89% HRR o VO₂R
  - Ligero (desacondicionados): 30%–39% HRR o VO₂R
  - RPE 6-20: moderado = 12–13; vigoroso = 14–17
  - RPE 0-10: moderado = 5–6; vigoroso = 7–8
  - Talk Test: umbral ventilatorio como proxy válido
- **Condiciones:** Adultos sanos. Para desacondicionados, comenzar con ligero-moderado. HIIT: intervalos cortos <45–240s vigoroso a casi-máximo + recuperación 60–360s.
- **Fuente:** Cap. 6, Tabla 6.1, sección "Intensity of Exercise"
- **⚠️ NOTA:** Los valores exactos de la Tabla 6.1 (clasificación completa por nivel) no están en el texto extraído. Necesito esa tabla.

#### Regla: `aerobic-duration-general`
- **Tipo:** volumen/tiempo
- **Métrica:** minutesPerSession, minutesPerWeek
- **Valores:**
  - Moderado: 30–60 min/día (≥150 min/semana)
  - Vigoroso: 20–60 min/día (≥75 min/semana)
  - Bouts mínimos: ≥10 min para acumulación
  - <20 min/día puede ser beneficioso en previamente sedentarios
  - Para pérdida de peso: ≥60–90 min/día puede ser necesario
- **Condiciones:** Puede ser continuo o intermitente. Bouts <10 min pueden ser útiles en muy desacondicionados o HIIT, pero evidencia limitada.
- **Fuente:** Cap. 6, sección "Exercise Time (Duration)"

#### Regla: `aerobic-volume-general`
- **Tipo:** volumen
- **Métrica:** MET-min/week, kcal/week
- **Valores:**
  - Objetivo razonable: ≥500–1,000 MET-min/semana
  - Equivale a ~1,000 kcal/semana de actividad moderada
  - Equivale a ~150 min/semana de ejercicio moderado
  - Equivale a ~10 MET-h/semana
  - Volúmenes menores (330 kcal/sem = 4 kcal/kg/sem) pueden beneficiar a desacondicionados
- **Fuente:** Cap. 6, sección "Exercise Volume", Box 6.3

#### Regla: `aerobic-step-count`
- **Tipo:** volumen
- **Métrica:** stepsPerDay
- **Valores:**
  - Objetivo recomendado: ≥7,000 pasos/día
  - Rango para cumplir recomendaciones: 5,400–7,900 pasos/día
  - 100 pasos/min ≈ intensidad moderada
  - 1 milla ≈ 2,000 pasos
  - 30 min caminata moderada ≈ 3,000–4,000 pasos
  - Para mantenimiento de peso: hombres 11,000–12,000; mujeres 8,000–12,000
- **⚠️ NOTA:** Error sustancial de predicción con podómetros; usar pasos/min + duración como guía.
- **Fuente:** Cap. 6, sección "Exercise Volume"

#### Regla: `aerobic-progression-rate`
- **Tipo:** progresión
- **Métrica:** minutesPerSession increment
- **Valores:**
  - Fase inicial (primeras 4–6 semanas): incrementar 5–10 min cada 1–2 semanas
  - Después de ≥1 mes regular: ajustar FIT gradualmente en 4–8 meses
  - Iniciar con ligero-moderado en inactivos ("start low and go slow")
- **Condiciones:** Monitorizar efectos adversos post-incremento. Evitar incrementos grandes en cualquier componente FITT-VP.
- **Fuente:** Cap. 6, sección "Rate of Progression"

#### Regla: `aerobic-type-general`
- **Tipo:** modalidad
- **Métrica:** exerciseType
- **Valores:**
  - Tipo A: actividades rítmicas de grandes grupos musculares, poca habilidad requerida (caminar, ciclo, natación, elíptica). Recomendado para todos.
  - Tipo B: vigoroso, requiere habilidad mínima (deportes recreativos, baile). Para personas con fitness promedio.
  - Tipo C: requiere habilidad (tenis, baloncesto, esquí). Para personas con habilidades motoras desarrolladas.
  - Tipo D: deportes recreativos como actividad ancilar. Solo con habilidad adecuada.
- **⚠️ NOTA:** La Tabla 6.4 con ejemplos específicos por tipo no está en el texto extraído.
- **Fuente:** Cap. 6, sección "Type (Mode)", Tabla 6.4

#### Regla: `hr-max-estimation`
- **Tipo:** intensidad (método de cálculo)
- **Métrica:** HRmax (bpm)
- **Valores:**
  - Clásica: 220 − edad
  - Tanaka: 208 − (0.7 × edad)
  - Gulati (mujeres): 206 − (0.88 × edad)
  - Gellish: 207 − (0.7 × edad)
  - ⚠️ SD ≥ 10 bpm en todas las ecuaciones
  - Medición directa preferible cuando posible
- **⚠️ NOTA:** La Tabla 6.2 completa con todas las ecuaciones y sus SD no está en el texto extraído. Las ecuaciones listadas son las mencionadas en el texto.
- **Fuente:** Cap. 6, Tabla 6.2

#### Regla: `intensity-calculation-methods`
- **Tipo:** intensidad (métodos de cálculo)
- **Fórmulas (Box 6.2):**
  - **HRR method:** THR = [(HRmax/peak − HRrest) × %intensidad] + HRrest
  - **VO₂R method:** Target VO₂ = [(VO₂max/peak − VO₂rest) × %intensidad] + VO₂rest
  - **HR method:** Target HR = HRmax/peak × %intensidad
  - **VO₂ method:** Target VO₂ = VO₂max/peak × %intensidad
  - **MET method:** Target MET = [(VO₂max/peak) / 3.5] × %intensidad
- **Fuente:** Cap. 6, Box 6.2

#### Regla: `met-to-vo2-conversion`
- **Tipo:** conversión
- **Fórmula:** 1 MET = 3.5 mL·kg⁻¹·min⁻¹
- **MET-min:** METs × minutos de actividad
- **kcal/min:** [(METs × 3.5 mL·kg⁻¹·min⁻¹ × peso_kg) ÷ 1,000] × 5
- **Ejemplo:** Jogging (~7 METs) × 30 min × 3 d/sem × 70 kg = 630 MET-min/sem; 771.75 kcal/sem
- **Fuente:** Cap. 6, Box 6.3

#### Regla: `session-structure`
- **Tipo:** protocolo
- **Valores:**
  - Warm-up: ≥5–10 min (ligero-moderado, cardio + resistencia muscular)
  - Conditioning: ≥20–60 min (aeróbico, resistencia, neuromotor, deportes; bouts ≥10 min aceptables)
  - Cool-down: ≥5–10 min (ligero-moderado)
  - Stretching: ≥10 min (post warm-up o post cool-down)
- **Fuente:** Cap. 6, Box 6.1

#### Regla: `warm-up-superiority`
- **Tipo:** protocolo
- **Regla:** Warm-up dinámico cardiovascular es superior a estiramiento estático para preparar rendimiento. Estático >45s puede reducir fuerza/potencia.
- **Fuente:** Cap. 6, sección "Components of the Exercise Training Session"

---

### Recomendación 2: `rules/acsm_resistance_prescription.ts`

**Objetivo:** Reglas de frecuencia, intensidad, volumen, técnica y progresión de resistencia.

#### Regla: `resistance-frequency-general`
- **Tipo:** frecuencia
- **Métrica:** sessionsPerWeekPerMuscleGroup
- **Valores:** 2–3 d/semana por grupo muscular mayor
- **Restricción:** ≥48h entre sesiones del mismo grupo muscular
- **Modalidad:** Full-body o split, ambos efectivos si cada grupo se entrena 2–3 d/sem
- **Fuente:** Cap. 6, sección "Frequency of Resistance Exercise"

#### Regla: `resistance-intensity-general`
- **Tipo:** intensidad
- **Métrica:** %1RM, repetitionsPerSet
- **Valores:**
  - Fuerza/hipertrofia general: 8–12 reps/set ≈ 60%–80% 1RM
  - Resistencia muscular: 15–25 reps/set con <50% 1RM, descansos más cortos
  - Mayores/desacondicionados: 10–15 reps con 40%–50% 1RM (muy ligero a ligero), RPE 5–6 (0-10)
- **Fuente:** Cap. 6, sección "Volume of Resistance Exercise"

#### Regla: `resistance-volume-general`
- **Tipo:** volumen
- **Métrica:** setsPerMuscleGroup
- **Valores:**
  - Recomendado: 2–4 sets por grupo muscular
  - Incluso 1 set es efectivo (especialmente novatos)
  - 4 sets > 2 sets en efectividad
  - Pico de ganancia de fuerza (no entrenados): 4 sets a 60% 1RM, 3×/semana
  - Recreacionalmente entrenados: 80% 1RM, 4 sets, 2×/semana
  - Descanso entre sets: 2–3 min
  - El primer set produce la mayor parte del beneficio
- **Fuente:** Cap. 6, sección "Volume of Resistance Exercise"

#### Regla: `resistance-progression`
- **Tipo:** progresión
- **Métrica:** %loadIncrease
- **Valores:**
  - Incrementar resistencia 5%–10% para tren superior
  - Incrementar resistencia 10%–20% para tren inferior
  - Incrementar cuando se completan 1–2 reps extra sobre objetivo en 2 días consecutivos
- **Mantenimiento:** 1 d/semana puede mantener fuerza si intensidad constante
- **Fuente:** Cap. 6, sección "Progression/Maintenance"

#### Regla: `resistance-technique`
- **Tipo:** técnica/seguridad
- **Reglas:**
  - Movimientos controlados y deliberados
  - ROM completo
  - Exhalar en concéntrico, inhalar en excéntrico
  - EVITAR Valsalva
  - NO exclusivamente excéntrico a >100% 1RM (riesgo de lesión, DOMS severo, rabdomiólisis)
  - Con lesión ortopédica/dolor: ROM limitado por síntomas
  - Novatos: instrucción obligatoria por profesional cualificado
  - Equilibrar agonistas/antagonistas
- **Fuente:** Cap. 6, sección "Resistance Exercise Technique"

#### Regla: `resistance-exercise-types`
- **Tipo:** modalidad
- **Valores:**
  - Multijoint/compound: chest press, shoulder press, pull-down, rows, push-ups, leg press, squats, deadlifts
  - Single-joint: biceps curls, triceps extensions, quadriceps extensions, leg curls, calf raises
  - Core: planks, bridges
- **Equipo:** Free weights, máquinas con peso apilado o neumático, bandas de resistencia
- **Fuente:** Cap. 6, sección "Types of Resistance Exercises"

#### Regla: `1rm-test-protocol`
- **Tipo:** protocolo
- **Valores:**
  - Familiarización/práctica previa obligatoria
  - Warm-up: reps submáximas del ejercicio específico
  - Determinar 1-RM en ≤4 intentos
  - Descanso entre intentos: 3–5 min
  - Carga inicial: 50%–70% de capacidad percibida
  - Incrementos: 5%–10% tren superior; 10%–20% tren inferior
  - Todas las reps a misma velocidad y ROM
  - Para múltiple RM (2-10): realizar al fallo; predicción más precisa con menos reps
  - ⚠️ Conservador en pacientes con enfermedad CV/pulmonar/metabólica: usar 10-15 RM
- **Fuente:** Cap. 4, Box 4.7

---

### Recomendación 3: `rules/acsm_screening.ts`

**Objetivo:** Implementar el algoritmo de screening preparticipación como árbol de decisión.

#### Regla: `preparticipation-screening-algorithm`
- **Tipo:** screening/seguridad
- **Entradas del algoritmo:**
  1. `currentExerciseStatus`: ¿Ejercita actualmente? (≥30 min moderado, ≥3 d/sem, durante ≥3 meses)
  2. `knownDisease`: ¿Enfermedad CV, metabólica o renal conocida?
  3. `signsOrSymptoms`: ¿Signos o síntomas sugestivos de enfermedad?
  4. `desiredIntensity`: ¿Intensidad deseada? (ligera, moderada, vigorosa)

- **Salidas del algoritmo (6 categorías):**

| # | Condición | Acción |
|---|---|---|
| 1 | No ejercitante + sin enfermedad + asintomático | Iniciar ligero-moderado sin clearance. Progresar >moderado con FITT-VP. |
| 2 | No ejercitante + enfermedad conocida + asintomático | Clearance médico antes de CUALQUIER intensidad. Post-clearance: ligero-moderado, progresar. |
| 3 | No ejercitante + síntomas (con o sin enfermedad) | Clearance médico (urgente si síntomas en ADL). Post-clearance: ligero-moderado. |
| 4 | Ejercitante + sin enfermedad + asintomático | Continuar/progresar sin clearance. |
| 5 | Ejercitante + enfermedad conocida + asintomático (estable) | Moderado sin clearance. Vigoroso requiere clearance. |
| 6 | Ejercitante + síntomas | Detener ejercicio, obtener clearance antes de continuar. |

- **⚠️ NOTA CRÍTICA:** La Figura 2.2 con el árbol de decisión visual no está en el texto extraído. La estructura anterior se deriva de la descripción textual en Cap. 2, sección "Using the Algorithm". Se necesita la figura para confirmar la estructura exacta del árbol.

- **Definición de "ejercitante actual":** Actividad física planificada y estructurada de al menos intensidad moderada, durante al menos 30 min, ≥3 d/sem, durante los últimos 3 meses.

- **Signos y síntomas a evaluar (Tabla 2.1):**
  - ⚠️ La Tabla 2.1 completa no está en el texto extraído. Del texto se mencionan: dolor torácico, disnea, mareo, síncope, palpitaciones, claudicación, edema. Se necesita la tabla completa.

- **Enfermedades que requieren clearance:** CV (coronaria, HF, valvular, arritmia), metabólica (DM tipo 1 y 2), renal (CKD).
  - ⚠️ La hipertensión se considera factor de riesgo CV, NO enfermedad cardíaca (Cap. 2).
  - ⚠️ La enfermedad pulmonar YA NO refiere automáticamente a clearance médico (cambio en 10ª edición).

- **PAR-Q+:** Herramienta de auto-screening. Sustituye al PAR-Q original y al AHA/ACSM Health/Fitness Facility Preparticipation Screening Questionnaire.
  - ⚠️ El contenido completo del PAR-Q+ (Figura 2.1) no está en el texto extraído.

- **Fuente:** Cap. 2, Figura 2.2, sección "Using the Algorithm"

---

### Recomendación 4: `rules/acsm_safety_termination.ts`

**Objetivo:** Criterios de terminación de ejercicio, contraindicaciones y red flags.

#### Regla: `exercise-test-termination-absolute`
- **Tipo:** seguridad/terminación
- **Criterios absolutos (Box 5.4):**
  - Elevación ST >1.0 mm en leads sin Q previas (excepto aVR, aVL, V1)
  - Caída SBP >10 mmHg con incremento de carga + evidencia de isquemia
  - Angina moderada-severa
  - Síntomas SNC (ataxia, mareo, casi-síncope)
  - Signos de mala perfusión (cianosis, palidez)
  - Taquicardia ventricular sostenida o arritmia que comprometa gasto cardíaco
  - Dificultades técnicas de monitorización ECG o SBP
  - Solicitud del sujeto
- **Fuente:** Cap. 5, Box 5.4

#### Regla: `exercise-test-termination-relative`
- **Tipo:** seguridad/terminación
- **Criterios relativos (Box 5.4):**
  - Desplazamiento ST horizontal/downsloping >2 mm a 60-80 ms post-punto J
  - Caída SBP >10 mmHg sin evidencia de isquemia
  - Dolor torácico creciente
  - Fatiga, disnea, sibilancias, calambres, claudicación
  - Arritmias no sostenidas (multifocales, tripletes, taquicardia supraventricular)
  - SBP >250 mmHg o DBP >115 mmHg
  - Bloqueo de rama nuevo indistinguible de TV
  - SpO₂ ≤80%
- **Fuente:** Cap. 5, Box 5.4

#### Regla: `fitness-test-termination-general`
- **Tipo:** seguridad/terminación (tests de fitness, no clínicos)
- **Criterios (Box 4.4):**
  - Angina o síntomas similares
  - Caída SBP ≥10 mmHg con incremento de carga
  - SBP >250 mmHg o DBP >115 mmHg
  - Disnea, sibilancias, calambres, claudicación
  - Signos de mala perfusión (mareo, confusión, ataxia, palidez, cianosis, náusea, piel fría/húmeda)
  - Fallo de HR para incrementar con intensidad
  - Cambio notable en ritmo cardíaco
  - Solicitud del sujeto
  - Fatiga severa
  - Fallo del equipo
- **Fuente:** Cap. 4, Box 4.4

#### Regla: `clinical-exercise-test-contraindications-absolute`
- **Tipo:** seguridad/contraindicación
- **Contraindicaciones absolutas (Box 5.2):**
  - MI agudo dentro de 2 días
  - Angina inestable en curso
  - Arritmia cardíaca no controlada con compromiso hemodinámico
  - Endocarditis activa
  - Estenosis aórtica sintomática severa
  - HF descompensada
  - Embolia pulmonar aguda, infarto pulmonar o TVP
  - Miocarditis o pericarditis aguda
  - Disección aórtica aguda
  - Discapacidad física que impida test seguro
- **Fuente:** Cap. 5, Box 5.2

#### Regla: `clinical-exercise-test-contraindications-relative`
- **Tipo:** seguridad/contraindicación
- **Contraindicaciones relativas (Box 5.2):**
  - Estenosis de tronco izquierdo coronario obstructiva conocida
  - Estenosis aórtica moderada-severa con relación incierta a síntomas
  - Taquiarritmias con frecuencias ventriculares no controladas
  - Bloqueo AV avanzado o completo adquirido
  - ACV o AIT reciente
  - Deterioro mental con capacidad limitada de cooperación
  - HTA en reposo SBP >200 mmHg o DBP >110 mmHg
  - Condiciones médicas no corregidas (anemia significativa, desequilibrio electrolítico, hipertiroidismo)
- **Fuente:** Cap. 5, Box 5.2

#### Regla: `cr-contraindications`
- **Tipo:** seguridad/contraindicación (rehabilitación cardíaca)
- **Contraindicaciones para CR (Box 9.4):**
  - Angina inestable
  - HTA no controlada (SBP >180 o DBP >110 en reposo)
  - Caída BP ortostática >20 mmHg con síntomas
  - Estenosis aórtica significativa (AVA <1.0 cm²)
  - Arritmias atriales o ventriculares no controladas
  - Taquicardia sinusal >120 bpm
  - HF descompensada
  - Bloqueo AV 3er grado sin marcapasos
  - Pericarditis o miocarditis activa
  - Embolia reciente
  - Tromboflebitis aguda
  - Disección aórtica
  - Enfermedad sistémica aguda o fiebre
  - DM no controlada
  - Condiciones ortopédicas severas que prohíban ejercicio
  - Condiciones metabólicas agudas (tiroiditis aguda, hipocaliemia, hipercaliemia, hipovolemia)
  - Trastorno psicológico severo
- **Fuente:** Cap. 9, Box 9.4

#### Regla: `pregnancy-exercise-stop-signs`
- **Tipo:** seguridad/terminación (embarazo)
- **Signos de alarma para detener ejercicio (Box 7.4):**
  - Sangrado vaginal o fuga de líquido amniótico
  - Disnea antes del esfuerzo
  - Mareo, sensación de desmayo, cefalea
  - Dolor torácico
  - Debilidad muscular
  - Dolor o hinchazón de pantorrilla
  - Disminución de movimiento fetal
  - Trabajo de parto prematuro
- **Fuente:** Cap. 7, Box 7.4

#### Regla: `pregnancy-exercise-contraindications`
- **Tipo:** seguridad/contraindicación (embarazo)
- **Contraindicaciones absolutas (Box 7.2):**
  - Enfermedad cardíaca hemodinámicamente significativa
  - Enfermedad pulmonar restrictiva
  - Cérvix incompetente/cerclaje
  - Gestación múltiple con riesgo de parto prematuro
  - Sangrado persistente en 2º o 3º trimestre
  - Placenta previa después de 26 semanas
  - Trabajo de parto prematuro durante el embarazo actual
  - Rotura de membranas
  - Preeclampsia/HTA inducida por embarazo
- **Contraindicaciones relativas (Box 7.2):**
  - Anemia severa
  - Arritmia materna no evaluada
  - Bronquitis crónica
  - DM tipo 1 mal controlada
  - Obesidad mórbida extrema
  - Bajo peso extremo
  - Historia de estilo de vida extremadamente sedentario
  - Restricción de crecimiento intrauterino en embarazo actual
  - HTA mal controlada
  - Limitaciones ortopédicas
  - Trastorno convulsivo mal controlado
  - Hipertiroidismo mal controlado
  - Fumadora intensa
- **Fuente:** Cap. 7, Box 7.2

#### Regla: `inpatient-cr-ambulation-parameters`
- **Tipo:** seguridad (CR inpatient)
- **Parámetros para deambulación diaria (Box 9.2):**
  - Sin dolor torácico nuevo o recurrente en las últimas 8h
  - CK y troponina estables o descendentes
  - Sin indicación de HF descompensada (disnea en reposo, estertores bibasales)
  - Ritmo cardíaco normal y ECG estable en las últimas 8h
- **Respuestas adversas para discontinuar sesión (Box 9.3):**
  - DBP ≥110 mmHg
  - Caída SBP >10 mmHg durante ejercicio con incremento de carga
  - Arritmias ventriculares o atriales significativas con/sin síntomas
  - Bloqueo AV 2º o 3er grado
  - Signos/síntomas de intolerancia al ejercicio (angina, disnea marcada, cambios ECG sugestivos de isquemia)
- **Fuente:** Cap. 9, Box 9.2, 9.3

---

### Recomendación 5: `SkillPath: progressive-aerobic-conditioning` y `SkillPath: progressive-resistance-training`

#### SkillPath: `progressive-aerobic-conditioning`
- **Disciplina:** Fitness general / salud pública
- **Objetivo final:** Alcanzar ≥150 min/semana de actividad moderada o ≥75 min vigorosa, o combinación equivalente, con ≥500–1,000 MET-min/semana
- **Requisitos de seguridad previos:** Screening preparticipación completado (algoritmo ACSM). Sin signos/síntomas de enfermedad CV/metabólica/renal. Si los hay, clearance médico.

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Inicio sedentario | Luz-moderado, <10 min/sesión si muy desacondicionado. 1–2 d/sem. | Tolerar 10 min continuos sin síntomas adversos | Demasiada intensidad inicial | Cap. 2, 6 |
| 2 | Acumulación inicial | Moderado, 10–20 min/sesión, 3–5 d/sem | Tolerar 20 min continuos | Incrementar demasiado rápido | Cap. 6 |
| 3 | Construcción de volumen | Moderado, +5–10 min cada 1–2 sem | Alcanzar 30 min/sesión | No monitorizar síntomas | Cap. 6 |
| 4 | Objetivo moderado | 30–60 min/sesión, ≥5 d/sem moderado (o 20–60 min, ≥3 d/sem vigoroso) | Mantener 4–6 semanas estable | Estancamiento, no progresar intensidad | Cap. 6 |
| 5 | Introducción de vigoroso | Añadir intervalos o sesiones vigorosas (60–89% HRR) | Tolerar vigoroso sin síntomas | Demasiado vigoroso demasiado pronto | Cap. 6 |
| 6 | Combinación y mantenimiento | 3–5 d/sem combinando moderado+vigoroso; ≥500–1,000 MET-min/sem | Adherencia sostenida | Abandono | Cap. 6 |

#### SkillPath: `progressive-resistance-training`
- **Disciplina:** Fuerza / fitness general
- **Objetivo final:** 2–4 series × 8–12 reps al 60–80% 1RM, 2–3 d/semana por grupo muscular
- **Requisitos de seguridad previos:** Instrucción en técnica por profesional cualificado. Sin contraindicaciones. Familiarización con equipos.

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Familiarización | Aprender movimientos con carga muy ligera o sin carga, ROM completo | Ejecutar técnica correcta sin carga | Técnica pobre, ROM incompleto | Cap. 6 |
| 2 | Carga inicial | 1 serie × 10–15 reps al 40–50% 1RM (mayores/desacondicionados) o 50–70% (jóvenes) | Completar 15 reps con buena forma | Valsalva, velocidad excesiva | Cap. 6 |
| 3 | Volumen inicial | 1–2 series × 8–12 reps al 60–70% 1RM | Superar 12 reps cómodamente en 2 sesiones consecutivas | No descansar entre series (2–3 min) | Cap. 6 |
| 4 | Progresión de carga | Incrementar 5–10% (superior) o 10–20% (inferior) | Mantener 8–12 reps con nueva carga | Incrementos demasiado grandes | Cap. 6 |
| 5 | Volumen completo | 2–4 series × 8–12 reps al 60–80% 1RM, 2–3 d/sem por grupo | Mantener progresión | Sobreentrenamiento | Cap. 6 |
| 6 | Mantenimiento | 1 d/semana puede mantener fuerza si intensidad constante | N/A | Detener completamente | Cap. 6 |

---

### Recomendación 6: `rules/acsm_clinical_exercise.ts`

**Objetivo:** Prescripciones específicas por condición clínica. Cada condición se modela como un conjunto de reglas FITT condicionales.

#### 6.1 Enfermedad Cardiovascular (CR outpatient)

```
FITT_RECOMMENDATIONS_CR_OUTPATIENT:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia, tras ≥4 sem aeróbico)
  Intensidad: 40%–80% HRR/VO₂R; RPE 11–13 (6-20) o 3–6 (0-10)
    Si umbral isquémico conocido: HR ≥10 bpm debajo del HR isquémico
    Si peak HR desconocido: usar RPE
  Tiempo: 20–60 min aeróbico; puede iniciar con <10 min si muy limitado
    Incrementar 1–5 min/sesión o 10–20%/semana
  Tipo: Actividades rítmicas de grandes grupos musculares
    HIIT posible: 3–4 min a 80–90% HRR alternado con 60–70% HRR, ~40 min, 3×/sem
  Resistencia: 1 set × 10–15 reps al inicio; progresar a 2–3 sets × 8–12 reps; 40–80% 1RM
  Volumen: Incrementar 2%–10% cuando se completan 1–2 reps extra en 2 días consecutivos
  ECG: Riesgo bajo → continuo → intermitente tras 6–12 sesiones
        Riesgo moderado-alto → continuo → intermitente tras ≥12 sesiones
  Fuente: Cap. 9, FITT box, sección "Exercise Prescription"
```

#### 6.2 Heart Failure

```
FITT_RECOMMENDATIONS_HEART_FAILURE:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia, tras ≥4 sem aeróbico)
  Intensidad: 40%–80% HRR/VO₂R
    HIIT en HFrEF estable: hasta 90% HRR; mejoró VO₂peak 46%
  Tiempo: 20–60 min; puede iniciar con <10 min
  Volumen: 3–7 MET-hr/semana objetivo
  Resistencia: 1–3 series × 10–15 reps; 40%–60% 1RM; 2–3 d/sem
  Progresión: Duración y frecuencia antes que intensidad
  Fuente: Cap. 9, sección "Patients with Heart Failure"
```

#### 6.3 Peripheral Artery Disease (PAD)

```
FITT_RECOMMENDATIONS_PAD:
  Frecuencia: ≥3 d/sem (supervisado; Clase IA AHA)
  Intensidad: Caminar hasta dolor moderado-severo (3–4 en escala de claudicación), descansar, retomar
  Tiempo: 30–45 min por sesión; progresar a ≥60 min
  Tipo: Caminar (treadmill) como modalidad principal; complementar con ciclo/ergómetro de brazo
  Duración mínima del programa: ≥12 semanas
  Mejoras esperadas: 106%–177% en tiempo/distancia libre de dolor; 64%–85% en capacidad absoluta
  Fuente: Cap. 9, sección "Patients with Peripheral Artery Disease"
```

#### 6.4 COPD

```
FITT_RECOMMENDATIONS_COPD:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia)
  Intensidad: >60% peak work rate (moderado-severo) o RPE disnea 3–6 (Borg CR10)
    Ligero para severo o muy desacondicionados
    ⚠️ %HRmax o HRR pueden ser inapropiados (HR resting elevada, limitación ventilatoria)
  Tiempo: 20–60 min; puede acumular en bouts
  Resistencia: 1–3 series × 8–12 reps; 50%–80% 1RM; énfasis en músculos periféricos
  Flexibilidad: Según pautas generales
  IMT: ≥30% MIP si debilidad inspiratoria persiste
  Oxígeno: Si PaO₂ ≤55 o SpO₂ ≤88%
  ⚠️ No ejercitar durante exacerbación aguda
  Fuente: Cap. 9, sección "COPD"
```

#### 6.5 Asma

```
FITT_RECOMMENDATIONS_ASTHMA:
  Frecuencia: Regular, según tolerancia
  Intensidad: Ajustada a capacidad; RPE como guía
  Warm-up: 10–15 min vigoroso o intensidad variable (induce período refractario para EIB)
  Test EIB: Ejercicio vigoroso 2–4 min → mantener 4–6 min; espirometría a 5, 10, 15, 30 min post
    Diagnóstico: ≥15% caída en FEV₁.₀
  Broncodilatador: Pre/post ejercicio para prevenir/tratar EIB
  ⚠️ No ejercitar durante exacerbación
  ⚠️ Evitar frío, aire seco, contaminantes, alérgenos
  Fuente: Cap. 9, sección "Asthma"
```

#### 6.6 Stroke (CVA)

```
FITT_RECOMMENDATIONS_STROKE:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia)
  Intensidad: 40%–70% HRR/VO₂R
  Tiempo: 20–60 min
  Tipo: Ciclo, stepper reclinado, treadmill con harness (iniciar a 0.8 mph)
  Resistencia: Grandes grupos; 1–3 series × 10–15 reps
  ⚠️ No Valsalva durante resistencia
  ⚠️ Atención a aspectos afectivos (ánimo, motivación, frustración, confusión)
  Fuente: Cap. 9, sección "Stroke"
```

#### 6.7 Diabetes Mellitus

```
FITT_RECOMMENDATIONS_DIABETES:
  Frecuencia: ≥3 d/sem aeróbico, no más de 2 días consecutivos sin ejercicio; 2–3 d/sem resistencia
  Intensidad: Moderado-vigoroso (40%–89% VO₂R); HIIT y continuo recomendados
  Tiempo: ≥150 min/semana moderado-vigoroso
  Resistencia: 8–12 reps × 1–4 sets; 60%–80% 1RM; progresar de 10–15 reps (moderado) a 8–10 reps (más pesado)
  Flexibilidad: Puede incluirse pero no sustituye aeróbico/resistencia
  ⚠️ Hipoglucemia (<70 mg/dL): contraindicación relativa para iniciar ejercicio agudo
  ⚠️ Hiperglucemia ≥300 mg/dL sin cetonas: ejercicio moderado OK; con cetonas: posponer
  ⚠️ Neuropatía autonómica: usar RPE (HR blunted), monitorizar BP
  ⚠️ Neuropatía periférica: cuidado del pie, calzado apropiado
  ⚠️ Retinopatía severa: evitar vigoroso, saltos, Valsalva, cabeza abajo
  ⚠️ Nefropatía: ejercicio no acelera progresión; iniciar bajo si capacidad reducida
  Fuente: Cap. 10, sección "Diabetes Mellitus"
```

#### 6.8 Hypertension

```
FITT_RECOMMENDATIONS_HYPERTENSION:
  Frecuencia: ≥5 d/sem (idealmente diario) aeróbico; 2–3 d/sem resistencia
  Intensidad: Moderado (40%–59% VO₂R/HRR)
  Tiempo: 30–60 min aeróbico
  Resistencia: 1–3 series × 10–15 reps (inicio); progresar a 8–12 reps; intensidad moderada
  Flexibilidad: Según pautas generales
  Reducción esperada de BP: 5–7 mmHg SBP/DBP
  ⚠️ Mantener SBP ≤220 y DBP ≤105 durante ejercicio
  ⚠️ No Valsalva durante resistencia
  ⚠️ SBP ≥160 o DBP ≥100: no ejercitar hasta evaluación médica
  ⚠️ β-bloqueadores y diuréticos pueden afectar termorregulación
  ⚠️ α-bloqueadores, CCB, vasodilatadores: riesgo de hipotensión post-ejercicio → cool-down extendido
  Fuente: Cap. 10, sección "Hypertension"
```

#### 6.9 Dyslipidemia

```
FITT_RECOMMENDATIONS_DYSLIPIDEMIA:
  Frecuencia: Según pautas generales; énfasis en EE para pérdida de peso
  Intensidad: Moderado-vigoroso
  Tiempo: 250–300 min/semana para pérdida/mantenimiento de peso
  Tipo: Aeróbico como fundamento; resistencia y flexibilidad como adjuntos
  Reducción LDL-C con aeróbico: 3–6 mg/dL
  Reducción LDL-C y TG con resistencia: 6–9 mg/dL (menos consistente)
  ⚠️ Estatinas/fibratos pueden causar mialgia; si dolor muscular inusual, consultar médico
  Fuente: Cap. 10, sección "Dyslipidemia"
```

#### 6.10 Metabolic Syndrome

```
FITT_RECOMMENDATIONS_METABOLIC_SYNDROME:
  Frecuencia: ≥5 d/sem moderado o ≥3 d/sem vigoroso
  Intensidad: Moderado (40%–59% VO₂R/HRR) inicialmente; progresar a vigoroso
  Tiempo: ≥150 min/semana inicialmente; progresar a 250–300 min/semana
  Resistencia: ≥2 d/sem
  ⚠️ Usar criterio más conservador de las comorbilidades presentes
  ⚠️ Bouts ≥10 min aceptables para acumulación
  Fuente: Cap. 10, sección "Metabolic Syndrome"
```

#### 6.11 Overweight/Obesity

```
FITT_RECOMMENDATIONS_OBESITY:
  Frecuencia: 5–7 d/sem
  Intensidad: Moderado-vigoroso
  Tiempo: ≥250 min/semana (≥2,000 kcal/semana) para pérdida/mantenimiento
  Resistencia: Adjunto (no produce pérdida de peso clínicamente significativa por sí sola)
  Pérdida de peso objetivo inicial: 3%–10% en 3–6 meses
  Reducción calórica: 500–1,000 kcal/día → 0.5–0.9 kg/semana
  ⚠️ Bouts intermitentes pueden mejorar adherencia
  ⚠️ Considerar comorbilidades (DM, HTA, dislipidemia, OA)
  Fuente: Cap. 10, sección "Overweight and Obesity"
```

#### 6.12 Arthritis

```
FITT_RECOMMENDATIONS_ARTHRITIS:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia); diario a ≥2–3 d/sem (flexibilidad)
  Intensidad: Moderado; ajustar a tolerancia
  Tiempo: 30–60 min aeróbico; puede iniciar con bouts de 10 min o menos
  Resistencia: 1–3 series × 8–12 reps; 50%–80% 1RM
  Flexibilidad: Según pautas generales
  ⚠️ NO ejercitar durante inflamación aguda (articulaciones calientes, hinchadas, dolorosas)
  ⚠️ Si dolor 2h post-ejercicio > pre-ejercicio: reducir duración/intensidad
  ⚠️ Dolor 48–72h puede ser DOMS (normal)
  ⚠️ Ejercitar en hora del día con menos dolor
  ⚠️ Calzado apropiado con amortiguación
  ⚠️ Piscina 28°–31°C para ejercicio acuático
  Fuente: Cap. 11, sección "Arthritis"
```

#### 6.13 Fibromyalgia

```
FITT_RECOMMENDATIONS_FIBROMYALGIA:
  Frecuencia: 2–3 d/sem (aeróbico y resistencia); síntomas reducidos con 3 d/sem
  Intensidad: Moderado; ajustar a tolerancia
  Tiempo: 20–60 min; puede iniciar con bouts
  Resistencia: Progresiva; minimizar componente excéntrico
  Flexibilidad: Según pautas generales
  ⚠️ Si síntomas aumentan durante/después: reducir intensidad o duración (no frecuencia)
  ⚠️ Distinguir dolor post-ejercicio de fluctuaciones de fibromialgia
  ⚠️ Supervisión/grupo mejora adherencia
  ⚠️ Tai chi y yoga pueden reducir síntomas
  Fuente: Cap. 11, sección "Fibromyalgia"
```

#### 6.14 Cancer

```
FITT_RECOMMENDATIONS_CANCER:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia)
  Intensidad: Moderado-vigoroso; progresar desde nivel actual
  Tiempo: 20–60 min; progresar gradualmente
  Resistencia: 1–3 series × 8–12 reps; progresar
  Flexibilidad: Énfasis en articulaciones con ROM perdido por cirugía/radiación
  ⚠️ Evitar inactividad física durante y después de tratamiento
  ⚠️ Metástasis óseas: reducir impacto, intensidad, volumen
  ⚠️ Estado inmunosuprimido: ejercitar en casa/entorno médico, no en gimnasio público
  ⚠️ No nadar con catéteres/líneas centrales, ostomías, o inmunosupresión
  ⚠️ Supervisión recomendada para resistencia en cáncer de mama/ginecológico
  ⚠️ Progresión más lenta que en sanos
  Fuente: Cap. 11, sección "Cancer"
```

#### 6.15 Older Adults

```
FITT_RECOMMENDATIONS_OLDER_ADULTS:
  Frecuencia: ≥5 d/sem moderado o ≥3 d/sem vigoroso; 2–3 d/sem resistencia; ≥2–3 d/sem neuromotor
  Intensidad: RPE 5–6 (0-10) moderado; ≥7 vigoroso. NO usar METs absolutos.
  Tiempo: 30–60 min aeróbico; puede acumular en bouts
  Resistencia: Iniciar con 10–15 reps a 40%–50% 1RM; progresar
  Potencia: 1–3 series × 6–10 reps a 30%–60% 1RM con alta velocidad (prioridad en mayores)
  Neuromotor/balance: ≥2–3 d/sem para caed frecuentes o movilidad limitada
  Flexibilidad: Hold 30–60 s (mayor beneficio que 10–30 s)
  ⚠️ Iniciar con intensidad y duración ligeras, especialmente en desacondicionados/frágiles
  ⚠️ Progresión individualizada y conservadora
  ⚠️ Sarcopenia: aumentar fuerza antes de aeróbico
  Fuente: Cap. 7, sección "Older Adults"
```

#### 6.16 Pregnancy

```
FITT_RECOMMENDATIONS_PREGNANCY:
  Frecuencia: Regular, la mayoría de días de la semana
  Intensidad: ≥150 min/semana moderado o 75 min vigoroso
    RPE para monitorizar (HR puede ser variable)
    HR ranges (Box 7.5): ⚠️ Tabla no reproducida en texto extraído
  Tiempo: 30 min/día; iniciar con 15 min (<3 d/sem) si previamente inactiva
  Warm-up y cool-down: 10–15 min
  Resistencia: Continuar si habitual; ajustar con proveedor
  Kegel/pelvic floor: Recomendados
  ⚠️ Evitar posición supina después de semana 16
  ⚠️ Evitar deportes de contacto, riesgo de caída/trauma
  ⚠️ Evitar Valsalva, contracción isométrica prolongada, estar de pie inmóvil
  ⚠️ No ejercitar en ambiente caluroso/húmedo
  ⚠️ Incrementar ingesta calórica (~300 kcal/día extra)
  ⚠️ Postparto: reanudar gradualmente ~4–6 sem (vaginal) o 8–10 sem (cesárea)
  Fuente: Cap. 7, sección "Pregnancy"
```

#### 6.17 Children and Adolescents

```
FITT_RECOMMENDATIONS_CHILDREN:
  Frecuencia: ≥60 min/día de actividad moderada-vigorosa
  Vigoroso: ≥3 d/sem
  Resistencia: ≥3 d/sem
  Carga ósea: ≥3 d/sem
  Screen time: <2 h/día
  Pasos/día: 9,000–12,000 (traducción de 60 min)
  ⚠️ Prepuberales: no participar en cantidades excesivas de ejercicio vigoroso
  ⚠️ Menor capacidad anaeróbica que adultos
  ⚠️ Termorregulación inmadura: evitar calor/humedad extremos
  ⚠️ Resistance training seguro con instrucción y supervisión apropiadas
  Fuente: Cap. 7, sección "Children and Adolescents"
```

#### 6.18 Low Back Pain

```
FITT_RECOMMENDATIONS_LOW_BACK_PAIN:
  Aeróbico: Caminar, bicicleta, natación (mejor evidencia); seguir pautas generales
  Resistencia: Coordinación/strengthening/endurance de tronco para subagudo/crónico
  Flexibilidad: Cadera y extremidad inferior; NO usar flexibilidad de tronco como objetivo
  ⚠️ Iniciar actividades dentro de 2 semanas post episodio agudo
  ⚠️ Evitar reposo en cama
  ⚠️ 90% episodios agudos resuelven en 6 semanas
  ⚠️ Abordaje multidimensional para crónico (dolor, miedo-evitación, autoeficacia)
  ⚠️ Evitar ejercicios que causen "peripheralización"
  ⚠️ Favorecer ejercicios de "centralización" (ej. prone push-ups)
  ⚠️ Abdominal bracing puede aumentar compresión espinal → usar con extrema precaución
  Fuente: Cap. 7, sección "Low Back Pain"
```

#### 6.19 Parkinson Disease

```
FITT_RECOMMENDATIONS_PARKINSON:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia); diario (flexibilidad)
  Intensidad: 40%–80% HRR/VO₂R; RPE como guía
  Tiempo: 20–60 min
  Resistencia: Énfasis en extensores de tronco y cadera; todos los grupos mayores
  Flexibilidad: Movilidad espinal, rotación axial, cuello, extremidades superiores
  Neuromotor/balance: Estático, dinámico, funcional; tai chi, tango, waltz
  ⚠️ Ejercitar durante pico de efecto de medicación
  ⚠️ Evitar dual-tasking en novatos
  ⚠️ Usar señales visuales/auditivas para mejorar marcha
  ⚠️ Riesgo de caídas: usar cinturón de marcha, barras paralelas
  ⚠️ Levodopa/Carbidopa puede producir bradicardia de ejercicio y taquicardia transitoria
  Fuente: Cap. 11, sección "Parkinson Disease"
```

#### 6.20 Multiple Sclerosis

```
FITT_RECOMMENDATIONS_MULTIPLE_SCLEROSIS:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia); diario (flexibilidad)
  Intensidad: 60%–80% HRpeak; RPE como guía adicional
  Tiempo: 20–40 min; puede iniciar con bouts
  Resistencia: 1–3 series × 8–12 reps; 50%–80% 1RM; énfasis en grupos posturales grandes
  Flexibilidad: Estiramientos lentos; aumentar frecuencia/tiempo en músculos espásticos
  ⚠️ NO ejercitar durante exacerbación aguda
  ⚠️ HR y BP pueden estar blunted (disfunción autonómica) → usar RPE
  ⚠️ Fenómeno de Uhthoff: empeoramiento transitorio con calor → usar enfriamiento
  ⚠️ Fatiga: distinguir fatiga central (MS) de fatiga periférica (ejercicio)
  ⚠️ Debilidad significativa: descansar 2–5 min entre sets
  Fuente: Cap. 11, sección "Multiple Sclerosis"
```

#### 6.21 Spinal Cord Injury

```
FITT_RECOMMENDATIONS_SPINAL_CORD_INJURY:
  Frecuencia: 3 d/sem (aeróbico); 2–3 d/sem (resistencia); diario (flexibilidad)
  Intensidad: 50%–80% HRpeak o VO₂peak; RPE como guía
  Tiempo: 20–60 min; puede iniciar con intervalos 1:1 (3 min trabajo / 3 min descanso)
  Tipo: Ergómetro de brazo, wheelchair, FES-LCE
  Resistencia: 1–3 series × 8–12 reps; 50%–80% 1RM; énfasis en músculos inervados
  Flexibilidad: Estiramientos lentos de músculos espásticos; estabilizar articulaciones adyacentes
  ⚠️ NO estirar flexores de dedos en tetraplejía (preservar tenodesis)
  ⚠️ Lesión ≥T6: riesgo de disreflexia autonómica
  ⚠️ Riesgo de fractura con carga completa si sin historia reciente de bipedestación
  ⚠️ Vaciar vejiga/intestino antes de ejercitar
  ⚠️ Revisar piel regularmente (úlceras por presión)
  ⚠️ Equilibrar ejercicios de "push" y "pull" para hombro
  Fuente: Cap. 11, sección "Spinal Cord Injury"
```

#### 6.22 Chronic Kidney Disease

```
FITT_RECOMMENDATIONS_CKD:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia)
  Intensidad: Ligero-moderado inicialmente (30%–39% VO₂R); progresar
  Tiempo: 10–15 min continuo inicial; progresar a 30 min; incrementar 3–5 min/semana
  Tipo: Si no tolera continuo: intervalos 1:1 (3 min trabajo / 3 min descanso)
  Resistencia: 2–3 d/sem; usar 3-RM o superior (⚠️ evitar 1-RM por riesgo de fractura por avulsión)
  ⚠️ En diálisis: ejercitar en días no-diálisis; no pesar brazo con fístula; BP en brazo sin fístula
  ⚠️ Progresión puede ser más lenta
  ⚠️ En trasplante renal: ejercitar pronto post-trasplante
  Fuente: Cap. 11, sección "Kidney Disease"
```

#### 6.23 Osteoporosis

```
FITT_RECOMMENDATIONS_OSTEOPOROSIS:
  Aeróbico: Weight-bearing como principal
  Resistencia: Alta intensidad, alta velocidad, alto impacto (si no hay fracturas)
  Balance: Para prevenir caídas
  ⚠️ Evitar: movimientos explosivos, alto impacto si riesgo; torsión/flexión/compresión excesiva de columna
  ⚠️ Forma y alineación > intensidad (especialmente con historia de fracturas)
  ⚠️ Incluso los más frágiles: mantenerse tan activos como la salud permita
  ⚠️ Inmovilización → pérdida ósea rápida e irreversible
  Fuente: Cap. 11, sección "Osteoporosis"
```

#### 6.24 HIV

```
FITT_RECOMMENDATIONS_HIV:
  Frecuencia: 3–5 d/sem (aeróbico); 2–3 d/sem (resistencia)
  Intensidad: Moderado-vigoroso; progresar desde nivel actual
  Tiempo: 20–60 min
  Resistencia: Progresiva
  ⚠️ No ejercitar durante infecciones agudas
  ⚠️ Progresión más lenta que en sanos
  ⚠️ No hay evidencia de que ejercicio moderado suprima función inmune
  ⚠️ Monitorizar fatiga, síntomas
  ⚠️ Considerar medicación (inhibidores de proteasa → resistencia insulina, dislipidemia)
  Fuente: Cap. 11, sección "HIV"
```

#### 6.25 Intellectual Disability and Down Syndrome

```
FITT_RECOMMENDATIONS_INTELLECTUAL_DISABILITY_DS:
  Seguir pautas generales de adultos con adaptaciones
  ⚠️ Familiarización extensa antes de testing
  ⚠️ Instrucciones simples, un paso a la vez
  ⚠️ HRmax en DS: usar fórmula 210 − 56(edad) − 15.5(status DS=2)
    ⚠️ NO usar 220-edad
  ⚠️ En DS: precaución con inestabilidad atlantoaxial (evitar hiperflexión/hiperextensión de cuello)
  ⚠️ En DS: hipotonía + laxitud articular → énfasis en fuerza
  ⚠️ Clearance médico especialmente en DS (cardiopatía congénita ~50%)
  Fuente: Cap. 11, sección "Intellectual Disability and Down Syndrome"
```

#### 6.26 Cerebral Palsy

```
FITT_RECOMMENDATIONS_CEREBRAL_PALSY:
  Seguir pautas generales con modificaciones por nivel funcional
  ⚠️ Clase 1–4 (wheelchair): esfuerzos mínimos pueden ser máximos
  ⚠️ Clase 5–8 (ambulatory): treadmill con precaución en stages finales
  ⚠️ Spasticity: estiramientos lentos, evitar balístico
  ⚠️ Ejercicios de fortalecimiento de músculos débiles que se oponen a hipertónicos
  ⚠️ Posicionamiento correcto de cabeza, tronco y articulaciones proximales
  ⚠️ Fatiga: varias sesiones cortas mejor que una larga
  Fuente: Cap. 11, sección "Cerebral Palsy"
```

---

### Recomendación 7: Metadatos para `BodyZoneId`

**Objetivo:** Añadir a cada `BodyZoneId` metadatos de lesiones típicas, ROM objetivo y precauciones extraídas de este libro.

| BodyZoneId | Lesiones/condiciones típicas | Precauciones del libro | Fuente |
|---|---|---|---|
| `shoulder` | MSI frecuente en deportes de contacto; dolor post-esternotomía | Post-esternotomía: restricción de ROM y carga de miembro superior 8–12 semanas. Post-marcapasos/ICD: evitar vigoroso de miembro superior 3–4 semanas. | Cap. 9 |
| `elbow` | Sin mención específica detallada | Sin precauciones específicas | — |
| `wrist` | Sin mención específica detallada | Grip strength como predictor de mortalidad y función en mayores. No estirar flexores de dedos en tetraplejía (preservar tenodesis). | Cap. 4, 11 |
| `lumbar` | LBP: prevalencia 84% vida. 90% episodios agudos resuelven en 6 sem. | Evitar reposo en cama. Iniciar actividades dentro de 2 semanas. Evitar peripheralización. Favorecer centralización. Abdominal bracing con extrema precaución. | Cap. 7 |
| `hip` | OA de cadera: ejercicio aeróbico y resistencia recomendados | Flexibilidad de cadera relevante en LBP. | Cap. 11, 7 |
| `knee` | Sitio más común de MSI en ejercicio. OA de rodilla. | Ejercicio aeróbico y resistencia recomendado para OA. Calzado apropiado con amortiguación. | Cap. 1, 11 |
| `ankle-foot` | MSI frecuente. Cuidado del pie en DM con neuropatía. | Calzado apropiado, inspección diaria. No ejercitar con úlceras no curadas. | Cap. 10 |
| `spine` | Osteoporosis: fracturas vertebrales. Estenosis espinal. | Evitar torsión/flexión/compresión excesiva de columna. Caminar downhill puede agravar estenosis. | Cap. 11, 7 |
| `cardiovascular` | CVD, MI, angina, arritmias | Contraindicaciones absolutas y relativas para ejercicio. Criterios de terminación. HR y BP monitoring. | Cap. 5, 9 |
| `pulmonary` | COPD, asma, EIB | SpO₂ ≤80%: detener. No ejercitar durante exacerbación. Broncodilatador pre-ejercicio para EIB. | Cap. 9 |

---

### Recomendación 8: `rules/acsm_environmental.ts`

**Objetivo:** Reglas de altitud, frío y calor.

#### Regla: `altitude-exercise`
- **Tipo:** ambiental/seguridad
- **Métrica:** altitude (m), exercise intensity
- **Valores:**
  - Efectos desde ≥1,200 m
  - Moderada: 1,200–2,400 m
  - Alta: 2,400–4,000 m
  - Muy alta: >4,000 m
  - Primeros días: minimizar ejercicio/PA
  - Mantener mismo HR objetivo (THR) → menor velocidad/distancia/resistencia
  - AMS: incidencia ≤15% (moderada), 15–70% (alta), 70–85% (muy alta) con ascenso rápido
  - Staging: ≥3 días en altitud moderada; por cada día >1,200 m → preparado para +305 m
  - Aclimatación: 7–12 días para respuesta casi completa
  - HACE y HAPE: potencialmente fatales; tratamiento = descenso + O₂
  - Diamox (acetazolamida) profiláctico para AMS
  - Ibuprofeno para cefalea
- **Fuente:** Cap. 8, sección "Exercise in High-Altitude Environments"

#### Regla: `cold-exercise`
- **Tipo:** ambiental/seguridad
- **Métrica:** temperature (°C), wind chill
- **Valores:**
  - Frostbite: temperatura tisular <0°C (32°F)
  - Frostbite NO ocurre si temperatura aire >0°C
  - Riesgo frostbite <5% si temperatura >−15°C (5°F)
  - WCT <−27°C (−8°F): frostbite posible en ≤30 min en piel expuesta
  - NFCI: exposición a 0°–15°C (32°–60°F) húmedo por períodos prolongados
  - 3 capas de ropa: inner (polyester), middle (fleece/lana), outer (repelente viento/lluvia)
  - Shoveling snow: HR hasta 97% HRmax, SBP hasta 200 mmHg (riesgo CV)
  - Nadar en agua <25°C: riesgo para personas con CVD
  - Cambiar calcetines 2–3 veces/día en frío-húmedo
  - Piel mojada + viento: usar temperatura 10°C menor para WCT
- **Fuente:** Cap. 8, sección "Exercise in Cold Environments"

#### Regla: `heat-exercise`
- **Tipo:** ambiental/seguridad
- **Métrica:** WBGT (°C), hydration
- **Valores:**
  - Deshidratación ≥2% masa corporal → impacto negativo en rendimiento de resistencia
  - Cada 1% deshidratación → +0.1° a 0.2°C temperatura core
  - Heatstroke: temperatura >40°C (104°F) + disfunción SNC → emergencia
  - Mayor riesgo de heatstroke con WBGT >28°C (82°F)
  - Aclimatación: 10–14 días de ejercicio progresivo en calor
  - Primera sesión en calor: 5–10 min por seguridad
  - Reponer 0.5 L por cada libra (0.45 kg) de peso perdido
  - Limitar cambio de peso corporal a <2%
  - Heat cramps: reposo, estiramiento, sodio (1/8–1/4 tsp sal en 300–500 mL)
  - Heat syncope: más común en no aclimatados/sedentarios
  - Heat exhaustion: forma más común de enfermedad seria por calor
  - ⚠️ Hiponatremia: no sobrebeber agua hipotónica; consumir fluidos con sodio/alimentos salados en eventos largos
- **Fuente:** Cap. 8, sección "Exercise in Hot Environments", Box 8.2

#### Regla: `heat-readiness-checklist`
- **Tipo:** ambiental/seguridad
- **Preguntas (Box 8.3):**
  - ¿He desarrollado un plan para evitar deshidratación e hipertermia?
  - ¿Me he aclimatado gradualmente durante 10–14 días?
  - ¿Limito ejercicio intenso a las horas más frescas del día?
  - ¿Evito warm-ups largos en días calurosos y húmedos?
  - ¿Sé dónde hay fluidos disponibles o llevo botellas?
  - ¿Conozco mi sweat rate y la cantidad de fluido para reponer?
  - ¿Mi peso corporal esta mañana está dentro de 1% de mi promedio?
  - ¿Mi volumen de orina en 24h es abundante?
  - ¿Mi color de orina es "amarillo pálido" o "color paja"?
  - ¿Cuando calor y humedad son altos, reduzco expectativas, ritmo, distancia y/o duración?
  - ¿Uso ropa holgada, porosa y ligera?
  - ¿Conozco los signos y síntomas de heat exhaustion, heatstroke, heat syncope y heat cramps?
  - ¿Ejercito con un compañero y doy feedback sobre su apariencia?
  - ¿Consumo suficiente sal en mi dieta?
  - ¿Evito o reduzco ejercicio en calor si tengo pérdida de sueño, enfermedad infecciosa, fiebre, diarrea, vómito, depleción de carbohidratos, medicaciones, alcohol o abuso de drogas?
- **Fuente:** Cap. 8, Box 8.3

---

### Recomendación 9: `rules/acsm_lifestyle.ts`

**Objetivo:** Reglas de sedentarismo, sueño y ejercicio con enfermedad.

#### Regla: `sedentary-behavior-breaks`
- **Tipo:** estilo de vida
- **Métrica:** breaks per hour, minutes per break
- **Valores:**
  - >50% del día de vigilia involucra estar sentado
  - Sedentarismo asociado con mortalidad, CVD, cáncer (mama, colon, colorectal, endometrial, ovárico), T2DM — independiente de PA
  - Romper sedentarismo con PA breve (1–5 min de pie/caminar) cada hora o más
  - Activos tienen 30% menor riesgo de mortalidad vs inactivos con mismo tiempo sedentario
  - PA de intensidad ligera-moderada puede atenuar efectos adversos
- **Fuente:** Cap. 1, sección "Sedentary Behavior and Health"; Cap. 6, sección "Sedentary Behavior and Brief Activity Breaks"

#### Regla: `exercise-and-mental-health`
- **Tipo:** estilo de vida
- **Regla:** Ejercicio reduce ansiedad y depresión, mejora función cognitiva, mejora bienestar, reduce riesgo de caídas en mayores.
- **Fuente:** Cap. 1, Box 1.4 ("Other Benefits")

#### Regla: `exercise-and-weight-management`
- **Tipo:** estilo de vida/nutrición
- **Valores:**
  - Para prevenir ganancia de peso: puede requerirse más que mínimo (150 min/sem)
  - Para pérdida de peso: 250–300 min/sem + restricción calórica
  - Para mantenimiento post-pérdida: ≥250 min/sem
  - PA + nutrición adecuada necesario para manejo de peso
  - 500–1,000 kcal/día déficit → 0.5–0.9 kg/semana pérdida
- **Fuente:** Cap. 1; Cap. 10 "Overweight and Obesity"

#### Regla: `pregnancy-nutrition`
- **Tipo:** estilo de vida/nutrición
- **Valores:**
  - Demanda metabólica aumenta ~300 kcal/día durante embarazo
  - Incrementar ingesta calórica para cubrir costos de embarazo + ejercicio
  - Ingesta por encima o debajo de lo recomendado + cambios de peso → riesgo materno/fetal
  - Consultar guías de ganancia de peso por BMI pre-embarazo (IOM/NRC)
- **Fuente:** Cap. 7, sección "Pregnancy", "Special Considerations"

#### Regla: `exercise-when-ill`
- **Tipo:** estilo de vida/seguridad
- **Reglas por condición:**
  - Infección aguda: no ejercitar (CKD, VIH, cáncer)
  - Exacerbación de asma: no ejercitar hasta mejorar
  - Exacerbación de MS: no ejercitar
  - Artritis con inflamación aguda: no ejercitar esa articulación
  - LBP agudo severo: evitar ejercicio primeros días
  - DM con hiperglucemia + cetonas: posponer
  - Enfermedad sistémica aguda o fiebre: contraindicación para CR
  - ⚠️ El libro no proporciona explícitamente regla "above/below the neck" pero implica precaución similar
- **Fuente:** Cap. 1, 8, 9, 10, 11

#### Regla: `sleep-and-exercise`
- **Tipo:** estilo de vida
- **⚠️ NOTA:** El libro NO tiene una sección dedicada a sueño y ejercicio. Solo menciones tangenciales (sueño pobre como síntoma de AMS en altitud; fibromialgia: sueño no reparador). No es fuente principal para este factor.
- **Fuente:** Cap. 1, 8, 11 (menciones tangenciales)

#### Regla: `stress-and-exercise`
- **Tipo:** estilo de vida
- **Regla:** Estrés emocional puede aumentar temblor en PD, espasticidad en CP, síntomas de fibromialgia. El ejercicio es una herramienta de manejo del estrés.
- **Fuente:** Cap. 1 Box 1.4; Cap. 11 (factores psicosociales en LBP, Box 7.1)

---

### Recomendación 10: Marcar reglas clínicas con `requiresClinicalSupervision: true`

**Objetivo:** Todas las reglas derivadas de condiciones clínicas deben llevar este flag para que el sistema no las aplique autónomamente sin confirmación de supervisión profesional.

#### Reglas que requieren `requiresClinicalSupervision: true`:

| Regla | Condición | Justificación |
|---|---|---|
| `cr-outpatient-*` | CVD, post-MI, post-CABG, post-PCI, HF, valvular, trasplante | CR requiere supervisión médica, ECG monitoring, estratificación de riesgo |
| `pad-exercise` | PAD con claudicación | Ejercicio supervisado es Clase IA AHA; requiere monitorización de dolor |
| `copd-exercise` | COPD | Requiere monitorización de SpO₂, disnea; puede necesitar oxígeno suplementario |
| `asthma-exercise` | Asma | Requiere broncodilatador, monitorización de EIB |
| `stroke-exercise` | CVA | Requiere supervisión por déficits neurológicos, riesgo de caídas |
| `diabetes-exercise` | DM tipo 1 y 2 | Requiere monitorización de glucosa, ajuste de insulina/medicación |
| `hypertension-exercise` | HTA | Requiere monitorización de BP; contraindicaciones específicas |
| `cancer-exercise` | Cáncer | Requiere individualización por tratamiento, metástasis, inmunosupresión |
| `ckd-exercise` | CKD | Requiere coordinación con diálisis, monitorización de fístula |
| `ms-exercise` | MS | Requiere monitorización de exacerbaciones, Uhthoff, fatiga |
| `sci-exercise` | SCI | Requiere monitorización de disreflexia, piel, vejiga/intestino |
| `pd-exercise` | Parkinson | Requiere coordinación con medicación, riesgo de caídas |
| `cp-exercise` | CP | Requiere adaptaciones por espasticidad, posicionamiento |
| `hiv-exercise` | VIH | Requiere monitorización de infecciones, medicación |
| `ds-exercise` | Down Syndrome | Requiere screening de inestabilidad atlantoaxial, cardiopatía congénita |
| `osteoporosis-exercise` | Osteoporosis | Requiere evaluación de riesgo de fractura |
| `pregnancy-exercise` | Embarazo | Requiere clearance obstétrico, monitorización de signos de alarma |
| `inpatient-cr-*` | CR inpatient | Requiere supervisión médica continua |
| `heart-transplant-*` | Post-trasplante | Requiere supervisión especializada, medicación inmunosupresora |

#### Implementación sugerida:

```typescript
interface TrainingRule {
  id: string;
  // ... otros campos
  requiresClinicalSupervision: boolean; // true para todas las reglas listadas arriba
  clinicalSupervisionLevel?: 'medical-direct' | 'medical-consult' | 'supervised-exercise';
  contraindications?: string[];
  emergencyStopCriteria?: string[];
}
```

---

### Recomendación 11: Limitaciones de uso del libro

**Objetivo:** Definir explícitamente lo que el sistema NO debe hacer con este libro.

#### El sistema NO debe:

1. **Diagnosticar condiciones médicas.** El libro es de prescripción y evaluación, no de diagnóstico. El sistema nunca debe diagnosticar enfermedades basándose en síntomas reportados.

2. **Automatizar intervenciones médicas.** Cualquier recomendación que involucre medicación, cirugía, o decisiones clínicas debe ser referida a profesional médico.

3. **Prescribir ejercicio para condiciones agudas sin supervisión.** Las reglas para condiciones clínicas (CR, PAD, COPD, DM, etc.) siempre deben requerir confirmación de supervisión profesional.

4. **Usar este libro como fuente para:**
   - Progresiones de calistenia (handstand, planche, front lever, muscle-up)
   - Técnicas avanzadas de powerlifting o halterofilia
   - Protocolos de tendinopatía (el libro solo menciona tendinitis tangencialmente)
   - Movilidad articular detallada tipo "CARs" o "end-range training"
   - Periodización para atletas de élite
   - Nutrición deportiva específica (hay otro stack de nutrición)
   - Sueño y recuperación (el libro no tiene sección dedicada)

5. **Sobrepasar el ámbito de entrenamiento.** El libro establece que es una guía (guidelines), no un estándar de práctica (standards of practice). El profesional puede desviarse con juicio clínico. El sistema debe reflejar esta flexibilidad.

6. **Aplicar reglas de intensidad absoluta (METs) a poblaciones especiales sin ajuste relativo.** Para mayores, desacondicionados y poblaciones clínicas, la intensidad debe ser RELATIVA a la capacidad individual (%HRR, %VO₂R, RPE), no absoluta (METs).

7. **Ignorar las interacciones medicamentosas.** La Tabla A.1 (efectos de medicamentos en respuesta al ejercicio) es crítica. β-bloqueadores, diuréticos, antidepresivos, etc. alteran HR, BP y capacidad de ejercicio. El sistema debe considerar medicación al prescribir.
   - ⚠️ La Tabla A.1 completa no está en el texto extraído. Se necesita para implementar correctamente.

8. **Usar ecuaciones de HRmax sin advertir sobre su imprecisión.** Todas las ecuaciones tienen SD ≥10 bpm. El sistema debe advertir que la medición directa es preferible.

9. **Aplicar el algoritmo de screening sin las 6 categorías completas.** El algoritmo tiene 6 ramas de decisión, no una sola regla binaria.

10. **Tratar el libro como fuente única.** Para muchos temas (tendinopatía, movilidad, calistenia, periodización avanzada, nutrición, sueño), se necesitan fuentes complementarias.

#### El sistema SÍ debe:

1. Usar este libro como **fuente primaria de reglas FITT-VP cuantitativas** para adultos sanos.
2. Usar el **algoritmo de screening preparticipación** como gate de seguridad.
3. Usar los **criterios de terminación y contraindicaciones** como reglas de seguridad.
4. Usar las **prescripciones por condición clínica** como plantillas que requieren supervisión.
5. Usar las **reglas ambientales** como modificadores de prescripción.
6. Usar las **reglas de sedentarismo** como recordatorios de actividad.
7. Usar las **ecuaciones metabólicas y de HRmax** como herramientas de cálculo con advertencias de imprecisión.
8. Usar los **protocolos de testing** (YMCA, Bruce, Naughton, field tests) como referencia para evaluación de fitness.

---

## 📋 Resumen de pendientes para complementar

Para completar la extracción al 100%, necesito que me proporciones:

| Prioridad | Tabla/Figura | Razón |
|---|---|---|
| 🔴 CRÍTICA | **Tabla 6.1** (clasificación de intensidad completa) | Sin ella, las zonas de intensidad quedan incompletas |
| 🔴 CRÍTICA | **Tabla 6.2** (ecuaciones HRmax completas con SD) | Sin ella, los cálculos de THR quedan incompletos |
| 🔴 CRÍTICA | **Tabla 6.3** (ecuaciones metabólicas VO₂) | Sin ella, no puedo convertir METs ↔ velocidad/watts |
| 🔴 CRÍTICA | **Figura 2.2** (algoritmo de screening visual) | Sin ella, el árbol de decisión puede tener errores estructurales |
| 🔴 CRÍTICA | **Tabla 2.1** (signos y síntomas completos) | Sin ella, el screening queda incompleto |
| 🔴 CRÍTICA | **Tabla 3.1** (factores de riesgo CVD completos) | Sin ella, el perfil de riesgo queda incompleto |
| 🟡 ALTA | **Tablas 6.5–6.8** (FITT-VP resumen por modalidad) | Para validación cruzada |
| 🟡 ALTA | **Tabla 10.1** (criterios DM/prediabetes) | Para reglas de DM |
| 🟡 ALTA | **Tabla 10.2** (criterios Metsyn) | Para reglas de Metsyn |
| 🟡 ALTA | **Tabla A.1** (efectos de medicamentos) | Para interacciones |
| 🟡 ALTA | **Tabla 4.7** (normas CRF FRIEND) | Para benchmarking |
| 🟢 MEDIA | **Figura 5.1** (protocolos treadmill) | Para protocolos de testing |
| 🟢 MEDIA | **Tablas 4.9–4.13** (normas de fuerza/flexibilidad) | Para benchmarking |
| 🟢 MEDIA | **Tablas 9.1–9.3, 11.4–11.9** (clasificaciones clínicas) | Para contexto clínico |

Con estas tablas, la extracción quedaría completa y las 11 recomendaciones tendrían todos los datos necesarios para implementación.

---

## Ronda 3 — tras: «### Tabla 6.1: Clasificación completa de la intensidad del ejercicio aeróbico  La intensidad del ejercicio aeróbico puede expresarse en té…»
# ACSM's Guidelines for Exercise Testing and Prescription (10ª Edición) — Extracción Completa y Actualizada para Plan Maestro OS

> Extracción sistemática de reglas cuantitativas, protocolos, progresiones y criterios clínicos del texto canónico de ACSM (2018). Se parafrasea todo el contenido; no se copian párrafos literales. El libro es extremadamente denso en datos numéricos (umbrales, rangos, frecuencias, intensidades), lo que lo hace ideal para alimentar un motor de reglas. **VERSIÓN ACTUALIZADA con todas las tablas y figuras completas.**

---

## 1) Metadatos del libro

- **Título:** ACSM's Guidelines for Exercise Testing and Prescription
- **Autor(es):** Deborah Riebe (Senior Editor), Jonathan K. Ehrman, Gary Liguori, Meir Magal (Associate Editors); American College of Sports Medicine
- **Año:** 2018 (10ª edición)
- **Disciplina principal:** Medicina del ejercicio, fisiología del ejercicio, prescripción de ejercicio, evaluación de fitness, rehabilitación cardíaca y pulmonar
- **Enfoque poblacional:** Población general adulta (18–65+), adultos mayores (≥65), niños y adolescentes (6–17), embarazadas, pacientes con enfermedad cardiovascular, pulmonar, metabólica, musculoesquelética, neurológica y oncológica
- **Notas de alcance:**
  - **Cubre:** screening preparticipación, evaluación pre-ejercicio, testing de fitness (CRF, fuerza, flexibilidad, composición corporal), testing clínico (GXT, CPET, pruebas de campo), prescripción FITT-VP para adultos sanos y poblaciones especiales, consideraciones ambientales, rehabilitación cardíaca/pulmonar, prescripción para enfermedades metabólicas (diabetes, dislipidemia, hipertensión, síndrome metabólico, obesidad), enfermedades crónicas (artritis, cáncer, CP, fibromialgia, VIH, discapacidad intelectual, enfermedad renal, EM, osteoporosis, Parkinson, lesión medular), estrategias conductuales.
  - **NO cubre explícitamente:** programación de fuerza para atletas de élite/competición, nutrición deportiva detallada, calistenia/progresiones de skills gimnásticos, periodización avanzada. El libro se posiciona como *guidelines* (no *standards of practice*).

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- **`PreparticipationScreeningResult`**:
  - Descripción: Resultado del algoritmo de screening ACSM (Cap. 2, Figura 2.2).
  - Campos sugeridos: `currentExerciseStatus` (ejercita | no ejercita), `hasKnownDisease` (CV | metabólica | renal | ninguna), `hasSignsOrSymptoms` (boolean), `desiredIntensity` (ligera | moderada | vigorosa), `needsMedicalClearance` (boolean), `clearanceUrgency` (normal | prioritaria | urgente), `recommendedStartingIntensity` (ligera-moderada | moderada | vigorosa)
  - Referencias: Cap. 2, Figura 2.2

- **`CVDRiskFactorProfile`**:
  - Descripción: Perfil de factores de riesgo cardiovascular según ACSM (Tabla 3.1).
  - Campos sugeridos: `age` (≥45 hombres / ≥55 mujeres), `familyHistory` (MI/revascularización/muerte súbita <55 padre masculino / <65 madre femenina), `smoking` (actual o <6 meses o humo ambiental), `sedentaryLifestyle` (<30 min moderado, <3 d/sem, últimos 3 meses), `obesity` (BMI ≥30 o cintura >102cm H / >88cm M), `hypertension` (≥140/90 confirmada 2 veces o en tratamiento), `dyslipidemia` (LDL ≥130 o HDL <40 H / <50 M o tratamiento), `diabetes` (FBG ≥126 o OGTT ≥200 o HbA1c ≥6.5), `positiveRiskFactorCount`, `negativeRiskFactor` (HDL ≥60 resta 1)
  - Referencias: Cap. 3, Tabla 3.1

- **`ExerciseIntensityZone`**:
  - Descripción: Clasificación estandarizada completa de intensidad de ejercicio (Tabla 6.1).
  - Campos sugeridos: `level` (sedentario | ligero | moderado | vigoroso | casi-máximo), `pctHRR_VO2R` (rango), `pctHRmax` (rango), `pctVO2max` (rango), `rpeBorg6_20` (rango), `rpeCR10` (rango), `metsAbsolute_young` (rango), `metsAbsolute_older` (rango), `talkTestDescription` (string)
  - Referencias: Cap. 6, Tabla 6.1

- **`HRmaxPredictionEquation`**:
  - Descripción: Ecuaciones validadas para estimar HRmax (Tabla 6.2).
  - Campos sugeridos: `equationId` (fox | tanaka | gellish | gulati | fairbarn | hunt), `formula` (string), `sd_bpm` (número), `targetPopulation` (string), `clinicalNotes` (string)
  - Referencias: Cap. 6, Tabla 6.2

- **`MetabolicEquation`**:
  - Descripción: Ecuaciones metabólicas ACSM para estimar VO2 (Tabla 6.3).
  - Campos sugeridos: `modality` (walking | running | legCycle | armCycle | stepping), `applicableRange` (string), `formula` (string), `components` (array), `variables` (map)
  - Referencias: Cap. 6, Tabla 6.3

- **`ClinicalRiskStratification`**:
  - Descripción: Estratificación de riesgo AACVPR para pacientes en rehabilitación cardíaca.
  - Campos sugeridos: `level` (lowest | moderate | highest), `criteria` (array), `ecgMonitoringSessions` (número)
  - Referencias: Cap. 2, Box 2.2

- **`FITT_VP_Prescription`**:
  - Descripción: Prescripción de ejercicio completa con los 6 componentes FITT-VP (Tablas 6.5–6.8).
  - Campos sugeridos: `component` (aerobic | resistance | flexibility | neuromotor), `frequency`, `intensity`, `time`, `type`, `volume`, `progression`
  - Referencias: Cap. 6, Tablas 6.5–6.8

- **`EnvironmentalCondition`**:
  - Descripción: Condiciones ambientales que modifican la prescripción.
  - Campos sugeridos: `type` (altitude | cold | heat), `severity`, `altitudeMeters`, `temperatureC`, `WBGT_C`, `windChillC`, `modificationsRequired` (array)
  - Referencias: Cap. 8

- **`SymptomFlag`**:
  - Descripción: Signos y síntomas de alarma (Tabla 2.1).
  - Campos sugeridos: `symptomType` (chest_pain | dyspnea_rest | dizziness_syncope | orthopnea | ankle_edema | palpitations | claudication | heart_murmur | unusual_fatigue), `requiresMedicalEvaluation` (true), `urgency` (normal | priority | urgent)
  - Referencias: Cap. 2, Tabla 2.1

### 2.2 Mapeo a tipos existentes

- **`FocusId: cardio-respiratory-fitness`**
  - VO2max como criterio gold standard. Valores percentiles FRIEND por edad/sexo (Tabla 4.7). Bajo CRF (cuartil inferior) = 2–5× riesgo de mortalidad CV. Ecuaciones metabólicas para estimar VO2 (Tabla 6.3).

- **`FocusId: muscular-strength` / `muscular-endurance`**
  - Protocolos 1-RM y múltiple-RM. Normas bench press, leg press, push-up. FITT completo para resistencia (Tabla 6.6).

- **`FocusId: flexibility` / `mobility`**
  - Flexibilidad como ROM articular. FITT completo (Tabla 6.7). Sit-and-reach test, normas.

- **`FocusId: neuromotor`**
  - Entrenamiento de balance, agilidad, coordinación, marcha, propiocepción. FITT (Tabla 6.8). Especialmente relevante para mayores y prevención de caídas.

- **`FocusId: body-composition`**
  - BMI, circunferencias (cintura, cadera, WHR), skinfolds (ecuaciones generalizadas), densitometría, BIA.

- **`BodyZoneId: lumbar`**
  - LBP: prevalencia 84% vida. 90% episodios agudos resuelven en 6 sem. Ejercicio aeróbico con mejor evidencia. Evitar reposo en cama.

- **`BodyZoneId: knee`**
  - Sitio más común de MSI. OA de rodilla: ejercicio aeróbico y resistencia recomendado.

- **`BodyZoneId: shoulder`**
  - Precauciones post-esternotomía (8–12 sem), post-marcapasos/ICD (3–4 sem).

- **`BodyZoneId: ankle-foot`**
  - Cuidado del pie en DM con neuropatía periférica.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `aerobic-intensity-classification`

- **Descripción:** Clasificación completa de la intensidad del ejercicio aeróbico con 5 niveles, cada uno con rangos en múltiples métricas simultáneas.
- **Tipo:** intensidad
- **Métrica principal:** %HRR/%VO₂R, %HRmax, %VO₂max, RPE, METs, Talk Test
- **Valores numéricos completos (Tabla 6.1):**

| Nivel | %HRR/%VO₂R | %HRmax | %VO₂max | RPE 6–20 | RPE CR10 | METs (Jóvenes) | METs (Mayores) | Talk Test |
|---|---|---|---|---|---|---|---|---|
| Sedentario/Muy Ligero | <30% | <57% | <37% | <9 | <0.5 | <2.4 | <1.6 | Sin esfuerzo; puede cantar |
| Ligero | 30–39% | 57–63% | 37–45% | 9–11 | 0.5–2 | 2.4–4.7 | 1.6–3.1 | Habla en frases completas |
| Moderado | 40–59% | 64–76% | 46–63% | 12–13 | 3–4 | 4.8–7.1 | 3.2–4.7 | Conversación breve, no canta |
| Vigoroso | 60–89% | 77–95% | 64–90% | 14–17 | 5–7 | 7.2–10.1 | 4.8–6.7 | Dificultad para hablar |
| Casi Máximo/Máximo | ≥90% | ≥96% | ≥91% | ≥18 | 8–10 | ≥10.2 | ≥6.8 | Incapaz de hablar |

- **Condiciones:** Aplicables a adultos sanos. Para mayores y desentrenados, usar intensidad relativa (%HRR, RPE) en lugar de METs absolutos.
- **Fuente:** Cap. 6, Tabla 6.1

### Regla: `hrmax-prediction-equations`

- **Descripción:** Ecuaciones validadas para estimar HRmax con desviaciones estándar conocidas.
- **Tipo:** intensidad (método de cálculo)
- **Métrica principal:** HRmax (bpm)
- **Valores numéricos completos (Tabla 6.2):**

| Ecuación | Fórmula | SD | Aplicación |
|---|---|---|---|
| Fox et al. (1971) | 220 − edad | ±10–12 | Uso histórico; sobreestima jóvenes, subestima mayores |
| Tanaka et al. (2001) | 208 − (0.7 × edad) | ±7–10 | Adultos sanos; recomendada para mayores |
| Gellish et al. (2007) | 207 − (0.7 × edad) | ±5–8 | Prevención primaria/secundaria, rehab cardíaca |
| Gulati et al. (2010) | 206 − (0.88 × edad) | ±7–8 | Específica para mujeres |
| Fairbarn et al. (1994) | H: 201 − (0.63 × edad); M: 208 − (0.70 × edad) | ±10 | Evaluación ergométrica |
| HUNT / Nes et al. (2013) | 211 − (0.64 × edad) | ±10.8 | Gran cohorte poblacional |

- **⚠️ NOTA:** Todas las ecuaciones tienen SD ≥5 bpm. Medición directa preferible.
- **Fuente:** Cap. 6, Tabla 6.2

### Regla: `metabolic-equations-vo2`

- **Descripción:** Ecuaciones metabólicas ACSM para estimar VO₂ en estado estable.
- **Tipo:** intensidad (método de cálculo)
- **Métrica principal:** VO₂ (mL·kg⁻¹·min⁻¹)
- **Valores numéricos completos (Tabla 6.3):**

| Modalidad | Rango de aplicación | Ecuación |
|---|---|---|
| Caminar | 1.9–3.7 mph (50–100 m/min) | VO₂ = (0.1 × S) + (1.8 × S × G) + 3.5 |
| Correr | >5.0 mph (>134 m/min) | VO₂ = (0.2 × S) + (0.9 × S × G) + 3.5 |
| Ciclo piernas | 300–1200 kg·m/min (50–200 W) | VO₂ = (10.8 × W/M) + 3.5 + 3.5 |
| Ergómetro brazos | 150–750 kg·m/min (25–125 W) | VO₂ = (18.0 × W/M) + 3.5 |
| Escalón | 12–30 pasos/min; H = 0.04–0.40 m | VO₂ = (0.2 × f) + (1.33 × 1.8 × H × f) + 3.5 |

- **Variables:** S = velocidad m/min; G = grado decimal; W = kg·m/min; M = masa kg; f = frecuencia pasos/min; H = altura escalón m
- **Conversiones:** 1 mph = 26.8 m/min; 1 W = 6.12 kg·m/min; 1 pulgada = 0.0254 m
- **Fuente:** Cap. 6, Tabla 6.3

### Regla: `aerobic-exercise-types`

- **Descripción:** Clasificación de ejercicios aeróbicos por nivel de habilidad requerida.
- **Tipo:** modalidad
- **Valores numéricos (Tabla 6.4):**

| Grupo | Características | Ejemplos | Población |
|---|---|---|---|
| A | Intensidad continua, habilidad mínima | Caminar, ciclismo llano, acuáticos | Todos los adultos |
| B | Vigorosa/continua, mínima habilidad | Trotar, spinning, escaleras | Adultos con hábito |
| C | Requiere habilidad motora | Natación, esquí de fondo, remo | Destreza técnica adecuada |
| D | Intermitente, coordinación motora | Baloncesto, fútbol, tenis | Condición física adecuada |

- **Fuente:** Cap. 6, Tabla 6.4

### Regla: `aerobic-fitt-complete`

- **Descripción:** FITT-VP completo para ejercicio aeróbico.
- **Tipo:** prescripción
- **Valores numéricos completos (Tabla 6.5):**
  - **Frecuencia:** ≥5 d/sem moderado, O ≥3 d/sem vigoroso, O combinación 3–5 d/sem
  - **Intensidad:** Moderado (40–59% HRR/VO₂R) a vigoroso (60–89%); ligero (30–39%) para desentrenados
  - **Tiempo:** 30–60 min/día moderado (≥150 min/sem), O 20–60 min/día vigoroso (≥75 min/sem); acumular en bouts ≥10 min
  - **Tipo:** Continuo, rítmico, grandes grupos musculares (Grupos A–D)
  - **Volumen:** ≥500–1000 MET·min/sem (~1000 kcal/sem); ≥7000 pasos/día
  - **Progresión:** +5–10 min cada 1–2 semanas primeras 4–6 semanas
- **Fuente:** Cap. 6, Tabla 6.5

### Regla: `resistance-fitt-complete`

- **Descripción:** FITT-VP completo para entrenamiento de resistencia muscular.
- **Tipo:** prescripción
- **Valores numéricos completos (Tabla 6.6):**
  - **Frecuencia:** 2–3 d/sem por grupo muscular; ≥48h descanso entre sesiones mismo grupo
  - **Intensidad:**
    - Principiantes: 40–50% 1-RM (ligera a muy ligera)
    - Intermedios fuerza: 60–70% 1-RM (moderada a dura)
    - Avanzados fuerza: ≥80% 1-RM (muy dura a máxima)
    - Resistencia muscular: <50% 1-RM
    - Potencia mayores: 20–50% 1-RM
  - **Tipo:** Dinámicos multiarticulares y monoarticulares; pesos libres, máquinas, bandas, peso corporal
  - **Volumen:**
    - Fuerza/hipertrofia: 2–4 series × 8–12 reps
    - Fuerza mayores: 1–2 series × 10–15 reps
    - Resistencia muscular: 2–4 series × 15–25 reps
  - **Descanso:** 2–3 min entre series fuerza; <90 s resistencia muscular
  - **Progresión:** Sobrecarga progresiva (carga, reps, series, frecuencia)
- **Fuente:** Cap. 6, Tabla 6.6

### Regla: `flexibility-fitt-complete`

- **Descripción:** FITT-VP completo para ejercicio de flexibilidad.
- **Tipo:** prescripción
- **Valores numéricos completos (Tabla 6.7):**
  - **Frecuencia:** ≥2–3 d/sem; diario más efectivo
  - **Intensidad:** Hasta tensión leve o molestia ligera, sin dolor
  - **Tiempo:**
    - Estático general: 10–30 s
    - Adultos mayores: 30–60 s
    - PNF: contracción isométrica 3–6 s + estiramiento asistido 10–30 s
  - **Tipo:** Estático (activo/pasivo), dinámico, balístico, PNF
  - **Volumen:** 60 s total por grupo muscular (ej. 4×15 s o 2×30 s)
  - **Patrón:** 2–4 repeticiones; más efectivo con musculatura caliente
  - **Progresión:** Aumentar ROM gradualmente
- **Fuente:** Cap. 6, Tabla 6.7

### Regla: `neuromotor-fitt-complete`

- **Descripción:** FITT-VP completo para entrenamiento neuromotor.
- **Tipo:** prescripción
- **Valores numéricos completos (Tabla 6.8):**
  - **Frecuencia:** ≥2–3 d/sem
  - **Intensidad:** No definida cuantitativamente; depende de complejidad y control postural
  - **Tiempo:** ≥20–30 min/día (≥60 min/sem total)
  - **Tipo:** Equilibrio, agilidad, coordinación, marcha, propiocepción, Tai Chi, Qigong, Yoga
  - **Progresión:** Reducir base de sustentación, alterar entrada sensorial (ojos cerrados), añadir perturbaciones dinámicas
- **Fuente:** Cap. 6, Tabla 6.8

### Regla: `preparticipation-screening-algorithm`

- **Descripción:** Algoritmo completo de screening preparticipación ACSM (Figura 2.2).
- **Tipo:** screening/seguridad
- **Árbol de decisión completo:**

**Definición de "ejercita regularmente":** ≥30 min/día, ≥3 d/sem, durante los últimos 3 meses.

**RAMA 1: NO ejercita habitualmente**
- **Sin enfermedad CV/metabólica/renal Y asintomático:** NO requiere autorización médica. Comenzar intensidad ligera a moderada. Progresar según FITT-VP.
- **Con enfermedad CV/metabólica/renal conocida Y asintomático:** SÍ requiere autorización médica previa. Iniciar con intensidad ligera a moderada.
- **Presenta signos/síntomas (con o sin enfermedad):** SÍ requiere autorización médica prioritaria. Si síntomas en ADL, derivación urgente. Iniciar ligera-moderada tras aprobación.

**RAMA 2: SÍ ejercita habitualmente**
- **Sin enfermedad Y asintomático:** NO requiere autorización. Continuar o progresar según FITT-VP.
- **Con enfermedad conocida Y asintomático:** NO requiere autorización para intensidad moderada. SÍ requiere autorización para intensidad vigorosa.
- **Presenta signos/síntomas:** Interrumpir ejercicio inmediatamente. SÍ requiere autorización médica antes de reanudar cualquier intensidad.

- **Fuente:** Cap. 2, Figura 2.2

### Regla: `cvd-signs-symptoms-screening`

- **Descripción:** Lista completa de signos y síntomas sugerentes de enfermedad CV, metabólica o renal (Tabla 2.1).
- **Tipo:** screening/seguridad
- **Valores (9 síntomas):**
  1. Dolor/malestar en pecho, cuello, mandíbula, brazos u otras áreas (posible isquemia)
  2. Falta de aliento en reposo o con esfuerzo leve
  3. Mareo o síncope
  4. Ortopnea o disnea paroxística nocturna
  5. Edema bilateral en tobillos
  6. Palpitaciones o taquicardia
  7. Claudicación intermitente
  8. Soplo cardíaco conocido
  9. Fatiga inusual o falta de aire con ADL
- **Acción:** Cualquiera requiere evaluación médica prioritaria antes de iniciar/progresar PA.
- **Fuente:** Cap. 2, Tabla 2.1

### Regla: `cvd-risk-factors-definition`

- **Descripción:** Definición completa de factores de riesgo CV para estratificación (Tabla 3.1).
- **Tipo:** evaluación
- **Valores numéricos completos:**
  - **Edad:** H ≥45; M ≥55
  - **Historia familiar:** MI/revascularización/muerte súbita <55 padre masculino / <65 madre femenina
  - **Tabaquismo:** Fumador actual o <6 meses o exposición ambiental constante
  - **Inactividad:** <30 min moderado, <3 d/sem, últimos 3 meses
  - **Obesidad:** BMI ≥30 o cintura >102 cm H / >88 cm M
  - **Hipertensión:** ≥140/90 confirmada 2 veces o tratamiento
  - **Dislipidemia:** LDL ≥130 o HDL <40 H / <50 M o tratamiento; si solo CT: ≥200
  - **Diabetes:** FBG ≥126 o OGTT ≥200 o HbA1c ≥6.5%
  - **Factor negativo:** HDL ≥60 (resta 1 factor positivo)
- **Fuente:** Cap. 3, Tabla 3.1

### Regla: `vo2max-norms-friend`

- **Descripción:** Valores percentiles de VO₂max por edad y sexo (Registro FRIEND).
- **Tipo:** evaluación/benchmarking
- **Valores numéricos completos (Tabla 4.7):**

**Hombres (mL·kg⁻¹·min⁻¹):**

| Percentil | 20–29 | 30–39 | 40–49 | 50–59 | 60–69 | 70–79 |
|---|---|---|---|---|---|---|
| 90th | 54.0 | 48.2 | 44.1 | 38.6 | 33.2 | 28.7 |
| 75th | 48.0 | 42.4 | 38.3 | 33.3 | 28.5 | 24.1 |
| 50th | 42.1 | 37.3 | 33.6 | 29.1 | 24.7 | 20.6 |
| 25th | 36.6 | 32.2 | 29.0 | 25.0 | 21.0 | 17.4 |
| 10th | 31.6 | 27.6 | 24.8 | 21.3 | 17.8 | 14.5 |

**Mujeres (mL·kg⁻¹·min⁻¹):**

| Percentil | 20–29 | 30–39 | 40–49 | 50–59 | 60–69 | 70–79 |
|---|---|---|---|---|---|---|
| 90th | 44.7 | 38.8 | 34.2 | 29.6 | 25.5 | 22.4 |
| 75th | 38.1 | 33.0 | 29.0 | 25.0 | 21.3 | 18.3 |
| 50th | 33.0 | 28.6 | 25.1 | 21.4 | 18.1 | 15.5 |
| 25th | 28.3 | 24.4 | 21.2 | 18.0 | 15.1 | 12.8 |
| 10th | 23.6 | 20.2 | 17.5 | 15.0 | 12.5 | 10.6 |

- **Fuente:** Cap. 4, Tabla 4.7

### Regla: `diabetes-prediabetes-diagnostic-criteria`

- **Descripción:** Criterios diagnósticos completos para diabetes y prediabetes (Tabla 10.1).
- **Tipo:** evaluación/diagnóstico
- **Valores numéricos completos:**

| Clasificación | FBG | OGTT 2h | HbA1c |
|---|---|---|---|
| Normal | <100 mg/dL | <140 mg/dL | <5.7% |
| Prediabetes | 100–125 [IFG] | 140–199 [IGT] | 5.7–6.4% |
| Diabetes | ≥126 | ≥200 | ≥6.5% |

- **Nota:** Requiere confirmación con segunda prueba en ausencia de hiperglucemia inequívoca con síntomas.
- **Fuente:** Cap. 10, Tabla 10.1

### Regla: `metabolic-syndrome-criteria`

- **Descripción:** Criterios diagnósticos del Síndrome Metabólico (Tabla 10.2). Diagnóstico con ≥3 de 5 criterios.
- **Tipo:** evaluación/diagnóstico
- **Valores numéricos completos:**
  1. **Obesidad abdominal:** Cintura >102 cm H / >88 cm M (NCEP); ≥94 cm H / ≥80 cm M (IDF/asiático)
  2. **Triglicéridos elevados:** ≥150 mg/dL o tratamiento
  3. **HDL reducido:** <40 H / <50 M o tratamiento
  4. **PA elevada:** ≥130/85 o tratamiento
  5. **Glucosa ayunas elevada:** ≥100 mg/dL o tratamiento
- **Fuente:** Cap. 10, Tabla 10.2

### Regla: `session-structure`

- **Descripción:** Estructura de una sesión de ejercicio.
- **Tipo:** protocolo
- **Valores:**
  - Warm-up: ≥5–10 min (ligero-moderado)
  - Conditioning: ≥20–60 min (bouts ≥10 min aceptables)
  - Cool-down: ≥5–10 min (ligero-moderado)
  - Stretching: ≥10 min (post warm-up o cool-down)
- **Fuente:** Cap. 6, Box 6.1

### Regla: `aerobic-progression-rate`

- **Descripción:** Tasa de progresión del ejercicio aeróbico.
- **Tipo:** progresión
- **Valores:**
  - Fase inicial (4–6 semanas): +5–10 min cada 1–2 semanas
  - Después ≥1 mes: ajustar FIT gradualmente en 4–8 meses
  - "Start low and go slow" para inactivos
- **Fuente:** Cap. 6

### Regla: `resistance-progression`

- **Descripción:** Progresión de carga en resistencia.
- **Tipo:** progresión
- **Valores:**
  - Tren superior: +5–10%
  - Tren inferior: +10–20%
  - Criterio: completar 1–2 reps extra sobre objetivo en 2 días consecutivos
  - Mantenimiento: 1 d/sem suficiente si intensidad constante
- **Fuente:** Cap. 6

### Regla: `intensity-calculation-methods`

- **Descripción:** Fórmulas para prescripción de intensidad.
- **Tipo:** intensidad (método de cálculo)
- **Fórmulas (Box 6.2):**
  - **HRR:** THR = [(HRmax/peak − HRrest) × %intensidad] + HRrest
  - **VO₂R:** Target VO₂ = [(VO₂max/peak − VO₂rest) × %intensidad] + VO₂rest
  - **HR:** Target HR = HRmax/peak × %intensidad
  - **VO₂:** Target VO₂ = VO₂max/peak × %intensidad
  - **MET:** Target MET = [(VO₂max/peak) / 3.5] × %intensidad
- **Fuente:** Cap. 6, Box 6.2

### Regla: `met-calculations`

- **Descripción:** Cálculo de METs, MET-min y kcal.
- **Tipo:** volumen (método de cálculo)
- **Fórmulas (Box 6.3):**
  - 1 MET = 3.5 mL·kg⁻¹·min⁻¹
  - MET-min = METs × minutos
  - kcal/min = [(METs × 3.5 × peso_kg) / 1000] × 5
  - Ejemplo: 7 METs × 30 min × 3 d/sem × 70 kg = 630 MET·min/sem; 771.75 kcal/sem
- **Fuente:** Cap. 6, Box 6.3

### Regla: `exercise-test-termination-absolute`

- **Descripción:** Criterios absolutos para detener un test de ejercicio.
- **Tipo:** seguridad/terminación
- **Valores:**
  - Elevación ST >1.0 mm en leads sin Q previas
  - Caída SBP >10 mmHg con incremento de carga + isquemia
  - Angina moderada-severa
  - Síntomas SNC (ataxia, mareo, casi-síncope)
  - Signos de mala perfusión (cianosis, palidez)
  - TV sostenida o arritmia que comprometa gasto cardíaco
  - Dificultades técnicas de monitorización
  - Solicitud del sujeto
- **Fuente:** Cap. 5, Box 5.4

### Regla: `exercise-test-termination-relative`

- **Descripción:** Criterios relativos para detener un test de ejercicio.
- **Tipo:** seguridad/terminación
- **Valores:**
  - Desplazamiento ST >2 mm horizontal/downsloping a 60–80 ms post-J
  - Caída SBP >10 mmHg sin isquemia
  - Dolor torácico creciente
  - Fatiga, disnea, sibilancias, calambres, claudicación
  - Arritmias no sostenidas
  - SBP >250 o DBP >115 mmHg
  - Bloqueo de rama nuevo
  - SpO₂ ≤80%
- **Fuente:** Cap. 5, Box 5.4

### Regla: `fitness-test-termination`

- **Descripción:** Indicaciones generales para detener un test de fitness.
- **Tipo:** seguridad/terminación
- **Valores:**
  - Angina o síntomas similares
  - Caída SBP ≥10 mmHg con incremento de carga
  - SBP >250 y/o DBP >115 mmHg
  - Disnea, sibilancias, calambres, claudicación
  - Signos de mala perfusión
  - Fallo de HR para incrementar con intensidad
  - Cambio notable en ritmo cardíaco
  - Solicitud del sujeto
  - Fatiga severa
  - Fallo del equipo
- **Fuente:** Cap. 4, Box 4.4

### Regla: `clinical-exercise-test-contraindications-absolute`

- **Descripción:** Contraindicaciones absolutas para test de ejercicio clínico.
- **Tipo:** seguridad/contraindicación
- **Valores:**
  - MI agudo <2 días
  - Angina inestable en curso
  - Arritmia no controlada con compromiso hemodinámico
  - Endocarditis activa
  - Estenosis aórtica severa sintomática
  - HF descompensada
  - Embolia pulmonar aguda / infarto pulmonar / TVP
  - Miocarditis o pericarditis aguda
  - Disección aórtica aguda
  - Discapacidad física que impida test seguro
- **Fuente:** Cap. 5, Box 5.2

### Regla: `clinical-exercise-test-contraindications-relative`

- **Descripción:** Contraindicaciones relativas para test de ejercicio clínico.
- **Tipo:** seguridad/contraindicación
- **Valores:**
  - Estenosis tronco izquierdo conocida
  - Estenosis aórtica moderada-severa con relación incierta a síntomas
  - Taquiarritmias con frecuencias no controladas
  - Bloqueo AV avanzado/completo adquirido
  - ACV o AIT reciente
  - Deterioro mental con capacidad limitada de cooperación
  - HTA reposo >200/110 mmHg
  - Condiciones médicas no corregidas (anemia, electrolitos, hipertiroidismo)
- **Fuente:** Cap. 5, Box 5.2

### Regla: `cr-contraindications`

- **Descripción:** Contraindicaciones para rehabilitación cardíaca.
- **Tipo:** seguridad/contraindicación
- **Valores:**
  - Angina inestable
  - HTA no controlada (>180/110 reposo)
  - Caída BP ortostática >20 mmHg con síntomas
  - Estenosis aórtica significativa (AVA <1.0 cm²)
  - Arritmias atriales/ventriculares no controladas
  - Taquicardia sinusal >120 bpm
  - HF descompensada
  - Bloqueo AV 3er grado sin marcapasos
  - Pericarditis/miocarditis activa
  - Embolia reciente
  - Tromboflebitis aguda
  - Disección aórtica
  - Enfermedad sistémica aguda o fiebre
  - DM no controlada
  - Condiciones ortopédicas severas
  - Condiciones metabólicas agudas
  - Trastorno psicológico severo
- **Fuente:** Cap. 9, Box 9.4

### Regla: `cardiac-rehab-fitt`

- **Descripción:** FITT para rehabilitación cardíaca ambulatoria.
- **Tipo:** prescripción
- **Valores:**
  - Frecuencia: 3–5 d/sem aeróbico; 2–3 d/sem resistencia (tras ≥4 sem aeróbico)
  - Intensidad: 40–80% HRR/VO₂R; RPE 11–13 (6-20) o 3–6 (0-10); si umbral isquémico: HR ≥10 bpm debajo
  - Tiempo: 20–60 min; puede iniciar <10 min
  - Tipo: Actividades rítmicas grandes grupos; HIIT posible (3–4 min a 80–90% HRR alternado 60–70%)
  - Resistencia: 1 set × 10–15 reps → progresar 2–3 sets × 8–12 reps; 40–80% 1RM
  - Volumen: incrementar 2–10% cuando se completan 1–2 reps extra en 2 días consecutivos
- **Fuente:** Cap. 9

### Regla: `heart-failure-fitt`

- **Descripción:** FITT para insuficiencia cardíaca.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; 40–80% HRR/VO₂R; 20–60 min
  - HIIT en HFrEF estable: hasta 90% HRR; mejoró VO₂peak 46%
  - Volumen: 3–7 MET-hr/sem
  - Resistencia: tras ≥4 sem aeróbico; 1–3 series × 10–15 reps; 40–60% 1RM; 2–3 d/sem
  - Progresión: duración y frecuencia antes que intensidad
- **Fuente:** Cap. 9

### Regla: `pad-fitt`

- **Descripción:** FITT para enfermedad arterial periférica.
- **Tipo:** prescripción
- **Valores:**
  - Frecuencia: ≥3 d/sem supervisado (Clase IA AHA)
  - Intensidad: Caminar hasta dolor moderado-severo (3–4 escala claudicación)
  - Tiempo: 30–45 min → progresar ≥60 min
  - Tipo: Caminar (treadmill) principal
  - Duración mínima programa: ≥12 semanas
  - Mejoras: 106–177% tiempo libre de dolor; 64–85% capacidad absoluta
- **Fuente:** Cap. 9

### Regla: `copd-fitt`

- **Descripción:** FITT para COPD.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; >60% peak work rate (moderado-severo) o RPE disnea 3–6 (Borg CR10); 20–60 min
  - Resistencia: 2–3 d/sem; 1–3 series × 8–12 reps; 50–80% 1RM
  - Flexibilidad: según pautas generales
  - ⚠️ %HRmax o HRR pueden ser inapropiados
  - IMT: ≥30% MIP si debilidad inspiratoria persiste
  - Oxígeno: si PaO₂ ≤55 o SpO₂ ≤88%
- **Fuente:** Cap. 9

### Regla: `diabetes-fitt`

- **Descripción:** FITT para diabetes mellitus.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: ≥3 d/sem, no más de 2 días consecutivos sin ejercicio; 40–89% VO₂R; ≥150 min/sem
  - Resistencia: 2–3 d/sem; 8–12 reps × 1–4 sets; 60–80% 1RM; progresar de 10–15 reps (moderado) a 8–10 (pesado)
  - HIIT y continuo recomendados
  - Combinado aeróbico + resistencia puede mejorar control glucémico más
- **Precauciones:**
  - Hipoglucemia <70 mg/dL: contraindicación relativa para iniciar ejercicio agudo
  - Hiperglucemia ≥300 sin cetonas: ejercicio moderado OK; con cetonas: posponer
  - Neuropatía autonómica: usar RPE
  - Retinopatía severa: evitar vigoroso, saltos, Valsalva, cabeza abajo
- **Fuente:** Cap. 10

### Regla: `hypertension-fitt`

- **Descripción:** FITT para hipertensión.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: ≥5 d/sem (idealmente diario); moderado (40–59% VO₂R/HRR); 30–60 min
  - Resistencia: 2–3 d/sem; 1–3 series × 10–15 reps → progresar 8–12 reps; intensidad moderada
  - Reducción esperada BP: 5–7 mmHg SBP/DBP
  - ⚠️ Mantener SBP ≤220 y DBP ≤105 durante ejercicio
  - ⚠️ No Valsalva
  - ⚠️ SBP ≥160 o DBP ≥100: no ejercitar hasta evaluación médica
- **Fuente:** Cap. 10

### Regla: `dyslipidemia-fitt`

- **Descripción:** FITT para dislipidemia.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: énfasis en EE para pérdida de peso; 250–300 min/sem
  - Reducción LDL-C con aeróbico: 3–6 mg/dL
  - Reducción LDL-C y TG con resistencia: 6–9 mg/dL
  - Resistencia y flexibilidad como adjuntos
- **Fuente:** Cap. 10

### Regla: `metabolic-syndrome-fitt`

- **Descripción:** FITT para síndrome metabólico.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: ≥150 min/sem moderado inicial; progresar a 250–300 min/sem
  - Resistencia: ≥2 d/sem
  - Usar criterio más conservador de comorbilidades presentes
  - Bouts ≥10 min aceptables
- **Fuente:** Cap. 10

### Regla: `obesity-fitt`

- **Descripción:** FITT para sobrepeso/obesidad.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: progresar a ≥250 min/sem (≥2000 kcal/sem)
  - Pérdida de peso objetivo: 3–10% en 3–6 meses
  - Reducción calórica: 500–1000 kcal/día → 0.5–0.9 kg/sem
  - Resistencia: adjunto
  - Bouts intermitentes pueden mejorar adherencia
- **Fuente:** Cap. 10

### Regla: `older-adults-fitt`

- **Descripción:** FITT para adultos mayores.
- **Tipo:** prescripción
- **Valores:**
  - Intensidad: RPE 5–6 (0-10) moderado; ≥7 vigoroso. NO usar METs absolutos.
  - Resistencia: iniciar 10–15 reps a 40–50% 1RM
  - Potencia: 1–3 series × 6–10 reps a 30–60% 1RM con alta velocidad
  - Neuromotor: ≥2–3 d/sem para caed frecuentes
  - Flexibilidad: hold 30–60 s
  - Iniciar con intensidad y duración ligeras
- **Fuente:** Cap. 7

### Regla: `pregnancy-fitt`

- **Descripción:** FITT para embarazo.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: ≥150 min/sem moderado o 75 min vigoroso, distribuido en mayoría de días
  - Iniciar: 15 min/día (<3 d/sem) si inactiva → progresar ~30 min/día
  - RPE para monitorizar intensidad
  - Warm-up y cool-down: 10–15 min
  - Kegel/pelvic floor recomendados
- **Precauciones:**
  - Evitar supino después semana 16
  - Evitar deportes de contacto, riesgo de caída
  - Evitar Valsalva, contracción isométrica prolongada
  - No ejercitar en ambiente caluroso/húmedo
  - Incrementar ingesta calórica (~300 kcal/día extra)
  - Postparto: reanudar ~4–6 sem (vaginal) o 8–10 sem (cesárea)
- **Contraindicaciones absolutas:** Enfermedad cardíaca hemodinámicamente significativa, enfermedad pulmonar restrictiva, cérvix incompetente, gestación múltiple con riesgo parto prematuro, sangrado persistente 2º/3º trimestre, placenta previa >26 sem, trabajo de parto prematuro, rotura de membranas, preeclampsia
- **Fuente:** Cap. 7

### Regla: `children-fitt`

- **Descripción:** FITT para niños y adolescentes.
- **Tipo:** prescripción
- **Valores:**
  - ≥60 min/día actividad moderada-vigorosa
  - Vigoroso: ≥3 d/sem
  - Resistencia: ≥3 d/sem
  - Carga ósea: ≥3 d/sem
  - Screen time: <2 h/día
  - Pasos/día: 9,000–12,000
- **Precauciones:** Prepuberales no participar en cantidades excesivas de ejercicio vigoroso. Termorregulación inmadura.
- **Fuente:** Cap. 7

### Regla: `low-back-pain-fitt`

- **Descripción:** FITT para dolor lumbar.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: caminar, bicicleta, natación (mejor evidencia)
  - Resistencia: coordinación/strengthening/endurance tronco para subagudo/crónico
  - Flexibilidad: cadera y EEII; NO usar flexibilidad de tronco como objetivo
  - Iniciar actividades dentro de 2 semanas post episodio agudo
  - Evitar reposo en cama
  - 90% episodios agudos resuelven en 6 semanas
- **Precauciones:**
  - Evitar peripheralización (dolor se extiende a piernas)
  - Favorecer centralización (prone push-ups)
  - Abdominal bracing puede aumentar compresión espinal
- **Fuente:** Cap. 7

### Regla: `altitude-exercise`

- **Descripción:** Modificaciones de ejercicio en altitud.
- **Tipo:** ambiental/seguridad
- **Valores:**
  - Efectos desde ≥1,200 m
  - Moderada: 1,200–2,400 m; Alta: 2,400–4,000 m; Muy alta: >4,000 m
  - Primeros días: minimizar ejercicio/PA
  - Mantener mismo HR objetivo → menor velocidad/distancia/resistencia
  - AMS: ≤15% (moderada), 15–70% (alta), 70–85% (muy alta)
  - Staging: ≥3 días en altitud moderada; por cada día >1,200 m → +305 m
  - Aclimatación: 7–12 días
- **Fuente:** Cap. 8

### Regla: `cold-exercise`

- **Descripción:** Precauciones en ambiente frío.
- **Tipo:** ambiental/seguridad
- **Valores:**
  - Frostbite: temperatura tisular <0°C
  - Riesgo frostbite <5% si temperatura >−15°C
  - WCT <−27°C: frostbite posible en ≤30 min
  - NFCI: 0°–15°C húmedo prolongado
  - 3 capas de ropa
  - Shoveling snow: HR hasta 97% HRmax, SBP hasta 200 mmHg
  - Nadar en agua <25°C: riesgo para CVD
- **Fuente:** Cap. 8

### Regla: `heat-exercise`

- **Descripción:** Precauciones en ambiente caluroso.
- **Tipo:** ambiental/seguridad
- **Valores:**
  - Deshidratación ≥2% masa corporal → impacto negativo
  - Cada 1% deshidratación → +0.1° a 0.2°C temperatura core
  - Heatstroke: >40°C + disfunción SNC
  - Mayor riesgo con WBGT >28°C
  - Aclimatación: 10–14 días
  - Primera sesión en calor: 5–10 min
  - Reponer 0.5 L por libra perdida
  - Limitar cambio peso corporal a <2%
- **Fuente:** Cap. 8

### Regla: `arthritis-fitt`

- **Descripción:** FITT para artritis.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; moderado; 30–60 min
  - Resistencia: 2–3 d/sem; 1–3 series × 8–12 reps; 50–80% 1RM
  - Flexibilidad: diario a ≥2–3 d/sem
  - Neuromotor: según necesidad
- **Precauciones:**
  - NO ejercitar durante inflamación aguda
  - Si dolor 2h post-ejercicio > pre-ejercicio: reducir
  - Dolor 48–72h puede ser DOMS
  - Piscina 28°–31°C
- **Fuente:** Cap. 11

### Regla: `cancer-fitt`

- **Descripción:** FITT para supervivientes de cáncer.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; moderado-vigoroso; 20–60 min
  - Resistencia: 2–3 d/sem; 1–3 series × 8–12 reps
  - Flexibilidad: énfasis en articulaciones con ROM perdido
- **Precauciones:**
  - Evitar inactividad durante y después de tratamiento
  - Metástasis óseas: reducir impacto, intensidad, volumen
  - Inmunosuprimido: ejercitar en casa/entorno médico
  - No nadar con catéteres/líneas centrales
  - Progresión más lenta
- **Fuente:** Cap. 11

### Regla: `fibromyalgia-fitt`

- **Descripción:** FITT para fibromialgia.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 2–3 d/sem; moderado; 20–60 min
  - Resistencia: progresiva; minimizar componente excéntrico
  - Flexibilidad: según pautas generales
- **Precauciones:**
  - Si síntomas aumentan: reducir intensidad/duración (no frecuencia)
  - Progresión lenta
  - Tai chi y yoga pueden reducir síntomas
- **Fuente:** Cap. 11

### Regla: `multiple-sclerosis-fitt`

- **Descripción:** FITT para esclerosis múltiple.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; 60–80% HRpeak; 20–40 min
  - Resistencia: 2–3 d/sem; 1–3 series × 8–12 reps; 50–80% 1RM
  - Flexibilidad: estiramientos lentos; aumentar frecuencia/tiempo en músculos espásticos
- **Precauciones:**
  - NO ejercitar durante exacerbación aguda
  - HR y BP pueden estar blunted → usar RPE
  - Fenómeno de Uhthoff: enfriamiento
- **Fuente:** Cap. 11

### Regla: `parkinson-fitt`

- **Descripción:** FITT para enfermedad de Parkinson.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; 40–80% HRR/VO₂R; 20–60 min
  - Resistencia: énfasis en extensores de tronco y cadera; todos los grupos mayores
  - Flexibilidad: movilidad espinal, rotación axial, cuello, EEII
  - Neuromotor: estático, dinámico, funcional; Tai Chi, tango, waltz
- **Precauciones:**
  - Ejercitar durante pico de efecto de medicación
  - Evitar dual-tasking en novatos
  - Usar señales visuales/auditivas
- **Fuente:** Cap. 11

### Regla: `spinal-cord-injury-fitt`

- **Descripción:** FITT para lesión medular.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3 d/sem; 50–80% HRpeak o VO₂peak; 20–60 min
  - Resistencia: 2–3 d/sem; 1–3 series × 8–12 reps; 50–80% 1RM
  - Flexibilidad: estiramientos lentos de músculos espásticos
- **Precauciones:**
  - Lesión ≥T6: riesgo disreflexia autonómica
  - NO estirar flexores de dedos en tetraplejía (preservar tenodesis)
  - Vaciar vejiga/intestino antes de ejercitar
  - Revisar piel regularmente
- **Fuente:** Cap. 11

### Regla: `chronic-kidney-disease-fitt`

- **Descripción:** FITT para enfermedad renal crónica.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; ligero-moderado (30–39% VO₂R); 10–15 min inicial → progresar 30 min
  - Resistencia: 2–3 d/sem; usar ≥3-RM (⚠️ evitar 1-RM)
  - Si no tolera continuo: intervalos 1:1 (3 min trabajo / 3 min descanso)
- **Precauciones:**
  - En diálisis: ejercitar en días no-diálisis; no pesar brazo con fístula; BP en brazo sin fístula
- **Fuente:** Cap. 11

### Regla: `hiv-fitt`

- **Descripción:** FITT para VIH/SIDA.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; moderado; 20–60 min
  - Resistencia: progresiva
  - Combinado aeróbico + resistencia beneficioso
- **Precauciones:**
  - No ejercitar durante infecciones agudas
  - Progresión más lenta
  - No hay evidencia de que ejercicio moderado suprima función inmune
- **Fuente:** Cap. 11

### Regla: `intellectual-disability-down-syndrome-fitt`

- **Descripción:** FITT para discapacidad intelectual y síndrome de Down.
- **Tipo:** prescripción
- **Valores:**
  - Seguir pautas generales con adaptaciones
  - HRmax en DS: 210 − 56(edad) − 15.5(status DS=2)
  - ⚠️ NO usar 220-edad en DS
- **Precauciones:**
  - Inestabilidad atlantoaxial: evitar hiperflexión/hiperextensión de cuello
  - Hipotonía + laxitud articular: énfasis en fuerza
  - Clearance médico (cardiopatía congénita ~50%)
  - Familiarización extensa antes de testing
- **Fuente:** Cap. 11

### Regla: `osteoporosis-fitt`

- **Descripción:** FITT para osteoporosis.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: weight-bearing principal
  - Resistencia: alta intensidad, alta velocidad, alto impacto (si no hay fracturas)
  - Balance: para prevenir caídas
- **Precauciones:**
  - Evitar movimientos explosivos, alto impacto si riesgo
  - Evitar torsión/flexión/compresión excesiva de columna
  - Forma y alineación > intensidad
  - Inmovilización → pérdida ósea rápida
- **Fuente:** Cap. 11

### Regla: `sternotomy-precautions`

- **Descripción:** Precauciones post-esternotomía.
- **Tipo:** seguridad/restricción
- **Valores:**
  - Restricción ROM y carga miembro superior: 8–12 semanas
  - Límite de carga: 5–10 lb (2.3–4.5 kg) o <50% MVC durante 10–12 semanas
  - Estabilidad esternal completa: ~8–10 semanas
  - Inestabilidad esternal: hasta 16% casos
  - Durante CR: actividades rítmicas sin carga de miembro superior
- **Fuente:** Cap. 9

### Regla: `pacemaker-icd-precautions`

- **Descripción:** Precauciones con marcapasos y ICD.
- **Tipo:** seguridad/restricción
- **Valores:**
  - HR durante ejercicio: mantener 10–15 bpm debajo del umbral programado
  - Primeras 24h post-implante: solo ROM suave de miembro superior
  - 3–4 semanas post-implante: evitar actividades vigorosas de miembro superior
  - Si HR no incrementa durante test: no iniciar ejercicio hasta ajustar sensor
- **Fuente:** Cap. 9

### Regla: `hr-response-incremental`

- **Descripción:** Respuesta normal de HR y SBP al ejercicio incremental.
- **Tipo:** evaluación
- **Valores:**
  - HR: ≈10 bpm por 1 MET
  - SBP: ~10 mmHg por 1 MET
  - DBP: sin cambio o leve disminución
  - RPP normal pico: 25,000–40,000 mmHg·bpm·min⁻¹
- **Fuente:** Cap. 5

### Regla: `hr-recovery-prognosis`

- **Descripción:** Recuperación de HR post-ejercicio como predictor pronóstico.
- **Tipo:** evaluación/pronóstico
- **Valores:**
  - Anormal: <12 bpm caída en primer minuto de recuperación activa
  - Anormal: <22 bpm caída a los 2 minutos
- **Fuente:** Cap. 5

### Regla: `st-depression-ischemia`

- **Descripción:** Criterios de depresión ST para isquemia.
- **Tipo:** evaluación/diagnóstico
- **Valores:**
  - Positivo: ≥1 mm horizontal o downsloping a 80 ms post-punto J
  - Debe estar en ≥3 ciclos consecutivos en mismo lead
  - Upsloping ≥2 mm a 80 ms: equívoco
  - Sensibilidad: ~68%; Especificidad: ~77%
- **Fuente:** Cap. 5

### Regla: `duke-treadmill-score`

- **Descripción:** Score pronóstico combinando capacidad de ejercicio, ST y angina.
- **Tipo:** evaluación/pronóstico
- **Fórmula:** DTS = minutos ejercicio − (5 × desviación ST mm) − (4 × índice angina)
- **Fuente:** Cap. 5

### Regla: `field-test-vo2max-equations`

- **Descripción:** Ecuaciones para estimar VO₂max desde tests de campo.
- **Tipo:** evaluación
- **Valores:**
  - 1.5-milla: VO₂max = 3.5 + 483/tiempo(min)
  - 12-min Cooper: VO₂max = (distancia_m + 504.9)/44.73
  - Rockport 1-milla: VO₂max = 132.853 − (0.1692 × peso_kg) − (0.3877 × edad) + (6.315 × sexo) − (3.2649 × tiempo_min) − (0.1565 × HR); sexo: 0=M, 1=H; SEE = 5.0
  - 6-min walk: VO₂peak = (0.02 × dist_m) − (0.191 × edad) − (0.07 × peso) + (0.09 × altura_cm) + (0.26 × RPP × 10⁻³) + 2.45; SEE = 2.68
- **Fuente:** Cap. 4

### Regla: `submaximal-test-protocol`

- **Descripción:** Protocolo general para tests submáximos de CRF.
- **Tipo:** protocolo
- **Valores:**
  - Warm-up: 2–3 min
  - Stages: 2–3 min con incrementos apropiados
  - HR monitorizado ≥2 veces por stage (último minuto)
  - Steady-state: dos HRs dentro de 5 bpm antes de incrementar
  - Terminar al alcanzar 70% HRR (≈85% HRmax predicho)
  - BP en último minuto de cada stage
  - Cool-down: continuar ejercicio ligero o pasivo; monitorizar ≥5 min
  - No usar HR <110 bpm para estimaciones
- **Fuente:** Cap. 4, Box 4.5

### Regla: `ymca-cycle-test`

- **Descripción:** Protocolo YMCA modificado en cicloergómetro.
- **Tipo:** protocolo
- **Valores:**
  - Stage 1: 25 W (0.5 kg), 3 min
  - Stage 2 según HR del stage 1:
    - HR <80: → 125 W (2.5 kg)
    - HR 80–89: → 100 W (2.0 kg)
    - HR 90–100: → 75 W (1.5 kg)
    - HR >100: → 50 W (1.0 kg)
  - Stages 3-4: +25 W por stage
  - Pedaleo constante: 50 rpm
  - Objetivo: 2 HRs steady-state entre 110 bpm y 70% HRR
- **Fuente:** Cap. 4

### Regla: `1rm-test-protocol`

- **Descripción:** Protocolo para test de 1-RM o múltiple RM.
- **Tipo:** protocolo
- **Valores:**
  - Familiarización previa obligatoria
  - Warm-up: reps submáximas
  - Determinar 1-RM en ≤4 intentos
  - Descanso entre intentos: 3–5 min
  - Carga inicial: 50–70% de capacidad percibida
  - Incrementos: 5–10% tren superior; 10–20% tren inferior
  - Todas las reps a misma velocidad y ROM
  - ⚠️ Conservador en pacientes con enfermedad: usar 10–15 RM
- **Fuente:** Cap. 4, Box 4.7

### Regla: `aerobic-step-count`

- **Descripción:** Objetivos de pasos diarios.
- **Tipo:** volumen
- **Valores:**
  - Objetivo recomendado: ≥7,000 pasos/día
  - Rango para cumplir recomendaciones: 5,400–7,900 pasos/día
  - 100 pasos/min ≈ intensidad moderada
  - 1 milla ≈ 2,000 pasos
  - 30 min caminata moderada ≈ 3,000–4,000 pasos
  - Mantenimiento peso: H 11,000–12,000; M 8,000–12,000
- **Fuente:** Cap. 6

### Regla: `sedentary-behavior-breaks`

- **Descripción:** Reducción de comportamiento sedentario.
- **Tipo:** estilo de vida
- **Valores:**
  - >50% del día de vigilia involucra estar sentado
  - Romper sedentarismo con PA breve (1–5 min de pie/caminar) cada hora o más
  - Activos tienen 30% menor riesgo de mortalidad vs inactivos con mismo tiempo sedentario
  - Sedentarismo asociado con mortalidad, CVD, cáncer, T2DM (independiente de PA)
- **Fuente:** Cap. 1, Cap. 6

### Regla: `bp-classification`

- **Descripción:** Clasificación de presión arterial (JNC7).
- **Tipo:** evaluación
- **Valores:**
  - Normal: <120 y <80
  - Prehipertensión: 120–139 o 80–89
  - HTA Estadio 1: 140–159 o 90–99
  - HTA Estadio 2: ≥160 o ≥100
  - Cada +20 SBP o +10 DBP duplica riesgo CV (rango 115/75–185/115)
- **Fuente:** Cap. 3, Tabla 3.2

### Regla: `lipid-classification`

- **Descripción:** Clasificación de lípidos (ATP III).
- **Tipo:** evaluación
- **Valores:**
  - LDL-C: óptimo <100; cercano óptimo 100–129; límite alto 130–159; alto 160–189; muy alto ≥190
  - Colesterol total: deseable <200; límite 200–239; alto ≥240
  - HDL-C: bajo <40; alto ≥60 (factor negativo, resta 1)
  - Triglicéridos: normal <150; límite 150–199; alto 200–499; muy alto ≥500
- **Fuente:** Cap. 3, Tabla 3.3

### Regla: `bmi-classification`

- **Descripción:** Clasificación de BMI.
- **Tipo:** evaluación
- **Valores:**
  - Bajo peso: <18.5
  - Normal: 18.5–24.9
  - Sobrepeso: 25.0–29.9
  - Obesidad: ≥30.0
  - Circunferencia de cintura riesgo: H >102 cm; M >88 cm
  - WHR muy alto: H jóvenes >0.95; M jóvenes >0.86
- **Fuente:** Cap. 4, Tabla 4.1

### Regla: `crf-mortality-risk`

- **Descripción:** Bajo CRF como predictor de mortalidad.
- **Tipo:** evaluación/riesgo
- **Valores:**
  - Bajo CRF (cuartil/quintil inferior): 2–5× aumento de mortalidad CV y all-cause
- **Fuente:** Cap. 4

### Regla: `exercise-test-safety-data`

- **Descripción:** Riesgos de eventos cardíacos durante testing y rehabilitación.
- **Tipo:** seguridad/riesgo
- **Valores:**
  - Testing: ~6 eventos cardíacos por 10,000 tests
  - CR: 1 complicación no fatal por 34,673 h; 1 fatal por 116,402 h
  - SCD durante ejercicio vigoroso: 1 por 1.5 millones de episodios (hombres)
  - AMI durante ejercicio vigoroso: riesgo 50× mayor en sedentarios vs activos ≥5 d/sem
- **Fuente:** Cap. 1

### Regla: `hiit-parameters`

- **Descripción:** Parámetros de HIIT.
- **Tipo:** intensidad/protocolo
- **Valores:**
  - Intervalos cortos: <45–240 s vigoroso a casi-máximo
  - Recuperación: 60–360 s ligero-moderado
  - En CR: 3–4 min a 80–90% HRR alternado con 60–70% HRR, ~40 min, 3×/sem
  - En HF: hasta 90% HRR; mejoró VO₂peak 46%
- **Fuente:** Cap. 6, Cap. 9

### Regla: `warm-up-superiority`

- **Descripción:** Warm-up dinámico vs estático.
- **Tipo:** protocolo
- **Valores:** Warm-up dinámico cardiovascular es superior a estiramiento estático para rendimiento. Estático >45s puede reducir fuerza/potencia.
- **Fuente:** Cap. 6

### Regla: `resistance-technique`

- **Descripción:** Reglas de técnica en resistencia.
- **Tipo:** técnica/seguridad
- **Valores:**
  - Movimientos controlados, ROM completo
  - Exhalar en concéntrico, inhalar en excéntrico
  - EVITAR Valsalva
  - NO exclusivamente excéntrico a >100% 1RM (riesgo lesión, DOMS, rabdomiólisis)
  - Con lesión ortopédica/dolor: ROM limitado por síntomas
  - Novatos: instrucción obligatoria por profesional cualificado
- **Fuente:** Cap. 6

### Regla: `postexercise-hypotension`

- **Descripción:** Hipotensión post-ejercicio como efecto esperado.
- **Tipo:** fisiología
- **Valores:** La reducción de BP post-ejercicio es un efecto fisiológico esperado y beneficioso. Cool-down extendido para prevenir hipotensión excesiva.
- **Fuente:** Cap. 10

### Regla: `ecg-monitoring-cr`

- **Descripción:** Monitorización ECG en rehabilitación cardíaca según riesgo.
- **Tipo:** protocolo/seguridad
- **Valores:**
  - Riesgo bajo: continuo → intermitente tras 6–12 sesiones
  - Riesgo moderado-alto: continuo → intermitente tras ≥12 sesiones
- **Fuente:** Cap. 9

### Regla: `cardiac-transplant-fitt`

- **Descripción:** FITT post-trasplante cardíaco.
- **Tipo:** prescripción
- **Valores:**
  - Corazón denervado: HR-based training NO apropiado
  - HR resting elevada; respuesta atenuada; recuperación lenta
  - VO₂peak reducido 20–35% vs controles
  - HIIT: 90% VO₂peak o >91% HRpeak posible
  - Resistencia: obligatoria (contrarrestar inmunosupresión)
  - Precauciones esternotomía: hasta 12 semanas
  - Protocolo test: ramp 1 MET/30s-1min o 1-2 METs/2-3 min; ciclo 10-15 W/min o 25-30 W/2-3 min
- **Fuente:** Cap. 9

### Regla: `stroke-fitt`

- **Descripción:** FITT post-ACV.
- **Tipo:** prescripción
- **Valores:**
  - Aeróbico: 3–5 d/sem; 40–70% HRR/VO₂R; 20–60 min
  - Resistencia: grandes grupos; 1–3 series × 10–15 reps
  - Treadmill: iniciar a 0.8 mph con harness
  - ⚠️ No Valsalva
- **Fuente:** Cap. 9

### Regla: `asthma-fitt`

- **Descripción:** FITT para asma.
- **Tipo:** prescripción
- **Valores:**
  - Warm-up: 10–15 min vigoroso o intensidad variable (induce período refractario)
  - EIB diagnóstico: ≥15% caída en FEV₁.₀ post-ejercicio
  - Test EIB: ejercicio vigoroso 2–4 min → mantener 4–6 min; espirometría a 5, 10, 15, 30 min post
  - ⚠️ No ejercitar durante exacerbación
  - ⚠️ Evitar frío, aire seco, contaminantes, alérgenos
- **Fuente:** Cap. 9

### Regla: `pulmonary-rehab-benefits`

- **Descripción:** Beneficios de rehabilitación pulmonar.
- **Tipo:** evaluación
- **Valores:**
  - Beneficia: COPD, asma, fibrosis quística, bronquiectasias, enfermedad pulmonar restrictiva, hipertensión arterial pulmonar, cáncer de pulmón
  - Beneficios persisten 12–18 meses
- **Fuente:** Cap. 9

### Regla: `medication-effects-exercise`

- **Descripción:** Efectos de medicamentos comunes en respuesta al ejercicio.
- **Tipo:** seguridad/interacción
- **Valores clave:**
  - β-bloqueadores: reducen HR y BP en reposo y ejercicio; atenúan HRmax; pueden reducir capacidad de ejercicio
  - Diuréticos: riesgo hipokalemia, deshidratación, hipotensión ortostática
  - CCB: pueden reducir BP; algunos reducen HR
  - ACE-I/ARBs: reducen BP; riesgo hipotensión
  - Estatinas: posible mialgia; raro riesgo rabdomiólisis
  - Digoxina: puede causar arritmias; monitorizar
  - Anticoagulantes: riesgo sangrado con trauma
  - Broncodilatadores: pueden causar taquicardia
  - Corticosteroides: pueden causar miopatía, hiperglucemia
  - Antidepresivos: algunos causan sedación, hipotensión ortostática
- **Fuente:** Apéndice A

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `progressive-aerobic-conditioning`

- **Disciplina:** Fitness general / salud pública
- **Objetivo final:** Alcanzar ≥150 min/semana de actividad moderada o ≥75 min vigorosa, con ≥500–1000 MET·min/semana
- **Requisitos de seguridad previos:** Screening preparticipación completado (Figura 2.2). Sin signos/síntomas. Si los hay, clearance médico.

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Inicio sedentario | Luz-moderado, <10 min/sesión, 1–2 d/sem | Tolerar 10 min continuos sin síntomas | Demasiada intensidad inicial | Cap. 2, 6 |
| 2 | Acumulación inicial | Moderado, 10–20 min/sesión, 3–5 d/sem | Tolerar 20 min continuos | Incrementar demasiado rápido | Cap. 6 |
| 3 | Construcción de volumen | Moderado, +5–10 min cada 1–2 sem | Alcanzar 30 min/sesión | No monitorizar síntomas | Cap. 6 |
| 4 | Objetivo moderado | 30–60 min/sesión, ≥5 d/sem moderado | Mantener 4–6 semanas estable | Estancamiento | Cap. 6, Tabla 6.5 |
| 5 | Introducción de vigoroso | Añadir intervalos o sesiones vigorosas (60–89% HRR) | Tolerar vigoroso sin síntomas | Demasiado vigoroso pronto | Cap. 6 |
| 6 | Combinación y mantenimiento | 3–5 d/sem combinando; ≥500–1000 MET·min/sem | Adherencia sostenida | Abandono | Cap. 6 |

### SkillPath: `progressive-resistance-training`

- **Disciplina:** Fuerza / fitness general
- **Objetivo final:** 2–4 series × 8–12 reps al 60–80% 1RM, 2–3 d/semana por grupo muscular
- **Requisitos de seguridad previos:** Instrucción en técnica por profesional cualificado. Sin contraindicaciones.

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Familiarización | Aprender movimientos con carga muy ligera o sin carga | Ejecutar técnica correcta sin carga | Técnica pobre, ROM incompleto | Cap. 6 |
| 2 | Carga inicial | 1 serie × 10–15 reps al 40–50% 1RM (mayores) o 50–70% (jóvenes) | Completar 15 reps con buena forma | Valsalva, velocidad excesiva | Cap. 6, Tabla 6.6 |
| 3 | Volumen inicial | 1–2 series × 8–12 reps al 60–70% 1RM | Superar 12 reps cómodamente en 2 sesiones | No descansar entre series | Cap. 6 |
| 4 | Progresión de carga | Incrementar 5–10% (superior) o 10–20% (inferior) | Mantener 8–12 reps con nueva carga | Incrementos demasiado grandes | Cap. 6 |
| 5 | Volumen completo | 2–4 series × 8–12 reps al 60–80% 1RM, 2–3 d/sem | Mantener progresión | Sobreentrenamiento | Cap. 6 |
| 6 | Mantenimiento | 1 d/semana puede mantener fuerza si intensidad constante | N/A | Detener completamente | Cap. 6 |

### SkillPath: `cardiac-rehab-phase-progression`

- **Disciplina:** Rehabilitación cardíaca
- **Objetivo final:** Retorno a actividad funcional, vocacional y recreacional; reducción de riesgo de evento secundario
- **Requisitos de seguridad previos:** Estabilidad clínica. Estratificación de riesgo AACVPR. Clearance médico.

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Inpatient (Fase I) | Movilización temprana, educación, ambulación supervisada 3–4×/día | Estabilidad hemodinámica, sin dolor, sin arritmias | Movilización prematura | Cap. 9 |
| 2 | Outpatient inicial | Aeróbico ligero-moderado; ECG continuo; resistencia tras ≥4 sem | Tolerar 20 min aeróbico sin síntomas | Progresar resistencia pronto | Cap. 9 |
| 3 | Outpatient intermedio | Aeróbico 40–80% HRR; resistencia 2–3 sets × 8–12 reps; reducir ECG | Tolerar 30–60 min; cumplir objetivo semanal | Ignorar signos isquemia | Cap. 9 |
| 4 | Independiente/mantenimiento | Ejercicio independiente + PA de estilo de vida | Adherencia a largo plazo | Abandono post-programa | Cap. 9 |

### SkillPath: `pulmonary-rehab-progression`

- **Disciplina:** Rehabilitación pulmonar
- **Objetivo final:** Mejorar tolerancia al ejercicio, reducir disnea, mejorar calidad de vida

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Evaluación | GXT o 6MWT; espirometría; clasificación GOLD | Completar evaluación | No identificar limitación principal | Cap. 9 |
| 2 | Aeróbico inicial | Caminar/ciclo intensidad ligera; bouts cortos | Tolerar 10–15 min | Intensidad excesiva → disnea severa | Cap. 9 |
| 3 | Aeróbico progresivo | 3–5 d/sem; >60% peak work rate o RPE disnea 3–6; 20–60 min | Alcanzar 30 min continuo | No usar disnea como guía | Cap. 9 |
| 4 | Resistencia | 2–3 d/sem; 1–3 series × 8–12 reps; 50–80% 1RM | Tolerar 2–3 series | Ignorar debilidad periférica | Cap. 9 |
| 5 | Mantenimiento | Continuar ejercicio post-rehab | Adherencia | Abandono post-programa | Cap. 9 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Aeróbico: Caminar

- **Cues principales:** Postura erguida, mirada al frente. Braceo natural. Contacto talón → planta → dedos. Cadencia ~100 pasos/min para intensidad moderada.
- **Errores frecuentes:** Mirar hacia abajo. Overstriding. Inclinación excesiva del tronco.
- **Variantes seguras:** Cinta con barandillas si balance comprometido (⚠️ sobreestima METs si se agarra).
- **Indicaciones:** PAD: caminar hasta dolor moderado, descansar, retomar. LBP: puede agravar en estenosis espinal.
- **Referencias:** Cap. 4, 5, 6, 9

### Aeróbico: Cicloergómetro

- **Cues principales:** Postura erguida; ~25° flexión de rodilla en extensión máxima. Cadencia constante (50 rpm para tests YMCA).
- **Errores frecuentes:** Pedaleo irregular. Agarrar manillar con demasiada tensión.
- **Variantes seguras:** Ciclo reclinado para problemas de balance. FES-LCE para lesión medular. Arm ergometer para limitación de miembro inferior.
- **Referencias:** Cap. 4, 5

### Resistencia: Multijoint

- **Cues principales:** Movimientos controlados, ROM completo. Exhalar en concéntrico, inhalar en excéntrico. NO Valsalva. Columna neutra, escápulas estables. Equilibrar agonistas/antagonistas.
- **Errores frecuentes:** Valsalva. ROM parcial. Velocidad excesiva. Compensación con otros grupos. Fatiga → pérdida de forma.
- **Variantes seguras:** Máquinas con peso apilado. Bandas de resistencia. Reducir ROM si dolor ortopédico. 10–15 reps a 40–50% 1RM para mayores.
- **Indicaciones específicas:**
  - Post-esternotomía: evitar carga de miembro superior 10–12 semanas
  - Post-marcapasos/ICD: evitar vigoroso de miembro superior 3–4 semanas
  - Retinopatía diabética severa: evitar Valsalva y cargas pesadas
  - Osteoporosis: evitar torsión/flexión/compresión excesiva de columna
  - CKD: evitar 1-RM (riesgo fractura avulsión); usar ≥3-RM
- **Referencias:** Cap. 4, 6, 9, 10, 11

### Push-up test

- **Cues principales:** Hombres: posición estándar (manos bajo hombros, espalda recta, pies como pivote). Mujeres: posición modificada de rodillas. Bajar hasta que barbilla toque el suelo; estómago no toca. Subir a extensión completa de codos. Espalda recta.
- **Errores frecuentes:** Cadera sagging o pike. ROM incompleto. Velocidad inconsistente. Parar antes de fatiga verdadera.
- **Referencias:** Cap. 4, Box 4.8

### Sit-and-reach test

- **Cues principales:** Warm-up previo + estiramientos. Sentado sin zapatos, plantas contra caja (marca 0 en 26 cm). Pies separados ~15 cm. Alcance lento con ambas manos paralelas, mantener ~2 s. Exhalar, cabeza entre brazos. Rodillas extendidas pero NO presionadas. No rebotar.
- **Errores frecuentes:** Rebote balístico. Una mano liderando. Flexión de rodillas. Contener respiración.
- **⚠️ NOTA:** Si caja con 0 en 23 cm (Fitnessgram): restar 3 cm de las normas.
- **Referencias:** Cap. 4, Box 4.9

### Estiramiento estático

- **Cues principales:** Estirar lentamente hasta punto de tirantez o leve molestia (NO dolor). Mantener 10–30 s (mayores: 30–60 s). Respiración normal. Músculos calientes.
- **Errores frecuentes:** Rebotar. Estirar en frío. Exceder punto de molestia. Estático pre-ejercicio de fuerza/potencia (>45s puede reducir rendimiento).
- **Referencias:** Cap. 6, Tabla 6.7

### PNF (contract-relax)

- **Cues principales:** Contracción isométrica del grupo objetivo (20–75% MVC) durante 3–6 s. Seguir inmediatamente con estiramiento asistido 10–30 s. Requiere compañero.
- **Errores frecuentes:** Contracción demasiado intensa. No relajar completamente antes del estiramiento. Estiramiento asistido demasiado agresivo.
- **Referencias:** Cap. 6, Tabla 6.7

### Neuromotor: Balance training

- **Cues principales:** Progresión: bipodal → semi-tandem → tandem → unipodal. Movimientos dinámicos que perturben centro de gravedad. Fortalecer grupos posturales. Reducir input sensorial (ojos cerrados) como progresión. Tai chi como modalidad multifacética.
- **Errores frecuentes:** Progresión demasiado rápida. No tener soporte de seguridad cercano. Ignorar miedo a caer.
- **Referencias:** Cap. 6, 7, Tabla 6.8

### Grip Strength Test

- **Cues principales:** Ajustar barra: segunda articulación de dedos encaja bajo mango. Dinamómetro a cero. Sujeto de pie, brazo al lado del cuerpo a nivel del muslo, lejos del cuerpo. Apretar lo más fuerte posible SIN contener respiración. Mano y dinamómetro NO deben tocar cuerpo ni objetos. 2 intentos por mano; registrar el mayor; sumar ambas manos.
- **Errores frecuentes:** Valsalva. Tocar el cuerpo con la mano. Posición del brazo incorrecta.
- **Referencias:** Cap. 4, Box 4.6

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Enfermedad Arterial Periférica (PAD) con claudicación intermitente

- **Zona:** `lower-extremity`
- **Etiología:** Aterosclerosis → estenosis → limitación de vasodilatación → isquemia distal.
- **Signos y síntomas:** Dolor/cramping/fatiga reproducible en pantorrilla con ejercicio de carga; aliviado con reposo.
- **Stadia (Fontaine):** I (asintomático) → II (claudicación) → III (dolor en reposo) → IV (úlceras/gangrena).
- **ABI:** >1.0 normal; 0.91–0.99 borderline; ≤0.90 PAD; ≤0.40 severo.
- **Protocolo:**
  - **Fase conservadora:** Reducción riesgo CV + ejercicio supervisado (Clase IA AHA).
  - **Programa supervisado:** ≥3 d/sem; caminar hasta dolor moderado-severo (3–4 escala); descansar; retomar; 30–45 min → progresar ≥60 min; ≥12 semanas.
  - **Mejoras:** 106–177% tiempo libre de dolor; 64–85% capacidad absoluta.
- **Red flags:** Claudicación en reposo (Fontaine III-IV) → derivar vascular. Úlceras/gangrena → urgente.
- **Referencias:** Cap. 9

### Lesión / condición: Dolor Lumbar (LBP) no específico

- **Zona:** `lumbar`
- **Etiología:** >85% no específico. Multicausal. Factores psicosociales perpetúan cronicidad.
- **Signos y síntomas:** Dolor, tensión muscular o rigidez debajo del margen costal y encima de pliegues glúteos, con o sin dolor de pierna.
- **Stadia:** Agudo (<6 sem); subagudo (6–12 sem); crónico (>12 sem). 90% episodios agudos resuelven en 6 sem.
- **Protocolo:**
  - **Agudo (primeros días):** Evitar ejercicio si episodio severo. Mantener ADL. No reposo en cama.
  - **Subagudo (2–6 sem):** Introducir caminar gradualmente. Aeróbico suave.
  - **Crónico (>12 sem):** Programa combinado: aeróbico + resistencia de tronco + flexibilidad. Individualizado, supervisado. Abordar factores psicosociales.
- **Precauciones:**
  - Evitar peripheralización
  - Favorecer centralización (prone push-ups)
  - Abdominal bracing puede aumentar compresión espinal
- **Referencias:** Cap. 7

### Lesión / condición: Osteoartritis (OA) / Artritis

- **Zona:** `knee`, `hip`, `hand`, `spine`
- **Etiología:** Degeneración progresiva del cartílago articular. Factores: sobrepeso, lesión articular, genética, edad.
- **Protocolo:**
  - Aeróbico: 3–5 d/sem, moderado, 30–60 min
  - Resistencia: 2–3 d/sem, 1–3 series × 8–12 reps, 50–80% 1RM
  - Flexibilidad: ≥2–3 d/sem
  - Acuático: beneficioso
  - ⚠️ NO ejercitar durante inflamación aguda
  - Ejercicio NO daña articulaciones
- **Precauciones:**
  - Si dolor 2h post-ejercicio > pre-ejercicio: reducir
  - Dolor 48–72h puede ser DOMS
  - Piscina 28°–31°C
- **Referencias:** Cap. 11

### Lesión / condición: Fibromialgia

- **Zona:** `generalized`
- **Etiología:** Síndrome de dolor crónico generalizado con hipersensibilidad sensorial. Sin inflamación o daño tisular objetivo.
- **Signos y síntomas:** Dolor generalizado, fatiga, sueño no reparador, sensibilidad ambiental, parestesias, debilidad, cefaleas, ansiedad, depresión.
- **Protocolo:**
  - Aeróbico: 2–3 d/sem; moderado; 20–60 min
  - Resistencia: progresiva; minimizar componente excéntrico
  - Flexibilidad: según pautas generales
  - Tai chi y yoga pueden reducir síntomas
- **Precauciones:**
  - Si síntomas aumentan: reducir intensidad/duración (no frecuencia)
  - Progresión lenta
- **Referencias:** Cap. 11

### Lesión / condición: Esclerosis Múltiple (EM)

- **Zona:** `central-nervous-system`
- **Etiología:** Enfermedad autoinmune desmielinizante del SNC.
- **Cursos:** RRMS (85%), PPMS (10%), PRMS (5%), SPMS (50% de RRMS en 10 años).
- **Protocolo:**
  - Aeróbico: 3–5 d/sem; 60–80% HRpeak; 20–40 min
  - Resistencia: 2–3 d/sem; 1–3 series × 8–12 reps; 50–80% 1RM
  - Flexibilidad: estiramientos lentos; aumentar frecuencia/tiempo en músculos espásticos
- **Precauciones:**
  - NO ejercitar durante exacerbación aguda
  - HR y BP pueden estar blunted → usar RPE
  - Fenómeno de Uhthoff: enfriamiento
  - Debilidad significativa: descansar 2–5 min entre sets
- **Referencias:** Cap. 11

### Lesión / condición: Enfermedad de Parkinson

- **Zona:** `central-nervous-system`
- **Etiología:** Daño a la vía dopaminérgica nigroestriatal.
- **Signos y síntomas:** Temblor en reposo, bradicinesia, rigidez, inestabilidad postural, alteraciones de la marcha.
- **Protocolo:**
  - Aeróbico: 3–5 d/sem; 40–80% HRR/VO₂R; 20–60 min
  - Resistencia: énfasis en extensores de tronco y cadera
  - Flexibilidad: movilidad espinal, rotación axial, cuello, EEII
  - Neuromotor: estático, dinámico, funcional; Tai Chi, tango, waltz
- **Precauciones:**
  - Ejercitar durante pico de efecto de medicación
  - Evitar dual-tasking en novatos
  - Usar señales visuales/auditivas
- **Referencias:** Cap. 11

### Lesión / condición: Lesión Medular (SCI)

- **Zona:** `spinal-cord`
- **Etiología:** Trauma → pérdida de función somática, sensorial y autonómica por debajo del nivel de lesión.
- **Protocolo:**
  - Aeróbico: 3 d/sem; 50–80% HRpeak o VO₂peak; 20–60 min
  - Resistencia: 2–3 d/sem; 1–3 series × 8–12 reps; 50–80% 1RM
  - Flexibilidad: estiramientos lentos de músculos espásticos
- **Precauciones:**
  - Lesión ≥T6: riesgo disreflexia autonómica (HTA severa, bradicardia, cefalea) → EMERGENCIA
  - NO estirar flexores de dedos en tetraplejía (preservar tenodesis)
  - Vaciar vejiga/intestino antes de ejercitar
  - Revisar piel regularmente (úlceras por presión)
  - Equilibrar ejercicios de "push" y "pull" para hombro
- **Referencias:** Cap. 11

### Lesión / condición: Enfermedad Renal Crónica (CKD)

- **Zona:** `renal`
- **Protocolo:**
  - Aeróbico: 3–5 d/sem; ligero-moderado (30–39% VO₂R); 10–15 min inicial → progresar 30 min
  - Resistencia: 2–3 d/sem; usar ≥3-RM (⚠️ evitar 1-RM por riesgo fractura avulsión)
  - Si no tolera continuo: intervalos 1:1 (3 min trabajo / 3 min descanso)
- **Precauciones:**
  - En diálisis: ejercitar en días no-diálisis; no pesar brazo con fístula; BP en brazo sin fístula
- **Referencias:** Cap. 11

### Lesión / condición: Osteoporosis

- **Zona:** `skeletal-system`
- **Etiología:** Baja densidad mineral ósea + alteración de microarquitectura → fragilidad → fractura.
- **Diagnóstico:** T-score ≤−2.5 (postmenopáusicas y hombres ≥50).
- **Protocolo:**
  - Aeróbico: weight-bearing principal
  - Resistencia: alta intensidad, alta velocidad, alto impacto (si no hay fracturas)
  - Balance: para prevenir caídas
- **Precauciones:**
  - Evitar movimientos explosivos, alto impacto si riesgo
  - Evitar torsión/flexión/compresión excesiva de columna
  - Forma y alineación > intensidad
  - Inmovilización → pérdida ósea rápida e irreversible
- **Referencias:** Cap. 11

### Lesión / condición: Cáncer

- **Zona:** Variable según tipo
- **Protocolo:**
  - Aeróbico: 3–5 d/sem; moderado-vigoroso; 20–60 min
  - Resistencia: 2–3 d/sem; 1–3 series × 8–12 reps
  - Flexibilidad: énfasis en articulaciones con ROM perdido
- **Precauciones:**
  - Evitar inactividad durante y después de tratamiento
  - Metástasis óseas: reducir impacto, intensidad, volumen
  - Inmunosuprimido: ejercitar en casa/entorno médico
  - No nadar con catéteres/líneas centrales
  - Progresión más lenta
- **Referencias:** Cap. 11

### Lesión / condición: VIH/SIDA

- **Zona:** `immune-system`
- **Protocolo:**
  - Aeróbico: 3–5 d/sem; moderado; 20–60 min
  - Resistencia: progresiva
  - Combinado aeróbico + resistencia beneficioso
- **Precauciones:**
  - No ejercitar durante infecciones agudas
  - Progresión más lenta
  - No hay evidencia de que ejercicio moderado suprima función inmune
  - Considerar medicación (inhibidores de proteasa → resistencia insulina, dislipidemia)
- **Referencias:** Cap. 11

### Lesión / condición: Discapacidad Intelectual y Síndrome de Down

- **Zona:** Variable
- **Protocolo:**
  - Seguir pautas generales con adaptaciones
  - HRmax en DS: 210 − 56(edad) − 15.5(status DS=2)
  - ⚠️ NO usar 220-edad en DS
- **Precauciones:**
  - Inestabilidad atlantoaxial: evitar hiperflexión/hiperextensión de cuello
  - Hipotonía + laxitud articular: énfasis en fuerza
  - Clearance médico (cardiopatía congénita ~50%)
  - Familiarización extensa antes de testing
  - Instrucciones simples, un paso a la vez
- **Referencias:** Cap. 11

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Regla: `sedentary-behavior-breaks`

- **Tipo:** estilo de vida
- **Valores:**
  - >50% del día de vigilia involucra estar sentado
  - Romper sedentarismo con PA breve (1–5 min de pie/caminar) cada hora o más
  - Activos tienen 30% menor riesgo de mortalidad vs inactivos con mismo tiempo sedentario
  - Sedentarismo asociado con mortalidad, CVD, cáncer (mama, colon, colorectal, endometrial, ovárico), T2DM (independiente de PA)
- **Fuente:** Cap. 1, Cap. 6

### Regla: `exercise-and-mental-health`

- **Tipo:** estilo de vida
- **Valores:** Ejercicio reduce ansiedad y depresión, mejora función cognitiva, mejora bienestar, reduce riesgo de caídas en mayores.
- **Fuente:** Cap. 1, Box 1.4

### Regla: `exercise-and-weight-management`

- **Tipo:** estilo de vida/nutrición
- **Valores:**
  - Para prevenir ganancia de peso: puede requerirse más que mínimo (150 min/sem)
  - Para pérdida de peso: 250–300 min/sem + restricción calórica
  - Para mantenimiento post-pérdida: ≥250 min/sem
  - 500–1000 kcal/día déficit → 0.5–0.9 kg/sem pérdida
- **Fuente:** Cap. 1, Cap. 10

### Regla: `pregnancy-nutrition`

- **Tipo:** estilo de vida/nutrición
- **Valores:**
  - Demanda metabólica aumenta ~300 kcal/día durante embarazo
  - Incrementar ingesta calórica para cubrir costos de embarazo + ejercicio
  - Ingesta por encima o debajo de lo recomendado + cambios de peso → riesgo materno/fetal
- **Fuente:** Cap. 7

### Regla: `exercise-when-ill`

- **Tipo:** estilo de vida/seguridad
- **Valores por condición:**
  - Infección aguda: no ejercitar (CKD, VIH, cáncer)
  - Exacerbación de asma: no ejercitar hasta mejorar
  - Exacerbación de EM: no ejercitar
  - Artritis con inflamación aguda: no ejercitar esa articulación
  - LBP agudo severo: evitar ejercicio primeros días
  - DM con hiperglucemia + cetonas: posponer
  - Enfermedad sistémica aguda o fiebre: contraindicación para CR
- **Fuente:** Cap. 1, 8, 9, 10, 11

### Regla: `heat-hydration`

- **Tipo:** estilo de vida/seguridad
- **Valores:**
  - Determinar sweat rate (peso antes/después)
  - Reponer 0.5 L por cada libra (0.45 kg) de peso perdido
  - Limitar cambio de peso corporal a <2%
  - Comidas ayudan a estimular sed y reponer electrolitos
  - NO sobrebeber agua hipotónica (riesgo hiponatremia <135 mEq/L)
  - En eventos largos: consumir fluidos con sodio/alimentos salados
- **Fuente:** Cap. 8, Box 8.2

### Regla: `heat-readiness-checklist`

- **Tipo:** estilo de vida/seguridad
- **Preguntas de readiness (Box 8.3):**
  - ¿He desarrollado un plan para evitar deshidratación e hipertermia?
  - ¿Me he aclimatado gradualmente durante 10–14 días?
  - ¿Limito ejercicio intenso a las horas más frescas del día?
  - ¿Evito warm-ups largos en días calurosos y húmedos?
  - ¿Sé dónde hay fluidos disponibles o llevo botellas?
  - ¿Conozco mi sweat rate y la cantidad de fluido para reponer?
  - ¿Mi peso corporal esta mañana está dentro de 1% de mi promedio?
  - ¿Mi volumen de orina en 24h es abundante?
  - ¿Mi color de orina es "amarillo pálido" o "color paja"?
  - ¿Cuando calor y humedad son altos, reduzco expectativas, ritmo, distancia y/o duración?
  - ¿Uso ropa holgada, porosa, ligera?
  - ¿Conozco los signos y síntomas de heat exhaustion, heatstroke, heat syncope y heat cramps?
  - ¿Ejercito con un compañero y doy feedback sobre su apariencia?
  - ¿Consumo suficiente sal en mi dieta?
  - ¿Evito o reduzco ejercicio en calor si tengo pérdida de sueño, enfermedad infecciosa, fiebre, diarrea, vómito, depleción de carbohidratos, medicaciones, alcohol o abuso de drogas?
- **Fuente:** Cap. 8, Box 8.3

### ⚠️ Sueño y estrés

- **NOTA:** El libro NO tiene una sección dedicada a sueño y ejercicio. Solo menciones tangenciales (sueño pobre como síntoma de AMS en altitud; fibromialgia: sueño no reparador). No es fuente principal para estos factores.
- **Estrés:** Estrés emocional puede aumentar temblor en PD, espasticidad en CP, síntomas de fibromialgia. El ejercicio es una herramienta de manejo del estrés.
- **Fuente:** Cap. 1, 8, 11 (menciones tangenciales)

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - **Fuente principal de reglas FITT-VP cuantitativas** para prescripción de ejercicio en adultos sanos y poblaciones clínicas. Las Tablas 6.5–6.8 proporcionan el FITT completo para los 4 componentes de ejercicio.
  - **Motor de screening preparticipación:** El algoritmo ACSM (Figura 2.2) puede implementarse como un árbol de decisión que determine si un usuario necesita clearance médico.
  - **Validación de intensidad:** La Tabla 6.1 proporciona un sistema de referencia cruzada completo con 5 niveles de intensidad y 7+ métricas simultáneas.
  - **Ecuaciones metabólicas y de HRmax:** Las Tablas 6.2 y 6.3 permiten convertir entre modalidades, intensidades y métricas fisiológicas.
  - **Reglas de seguridad y terminación:** Los criterios de terminación de tests (Box 5.4) y contraindicaciones (Box 5.2, 9.4) pueden implementarse como reglas de seguridad.
  - **Protocolos de rehabilitación:** CR (Fase I→IV), PAD, COPD, asma, HF, post-ACV tienen protocolos específicos con números.
  - **Normas de fitness:** Las tablas de percentiles FRIEND (Tabla 4.7) permiten benchmarking del usuario.
  - **Consideraciones ambientales:** Altitud, frío, calor con umbrales numéricos claros.
  - **Prescripciones por condición clínica:** Más de 25 condiciones crónicas con FITT específico.

- **Limitaciones:**
  - **NO es un libro de fuerza/hipertrofia avanzada:** No cubre periodización, programación para atletas de élite.
  - **NO es un libro de calistenia/skills:** No hay progresiones de handstand, planche, front lever, muscle-up.
  - **NO es un libro de movilidad articular detallada:** La flexibilidad se trata de forma general.
  - **NO es un libro de tendinopatías:** Solo menciones tangenciales.
  - **Lenguaje clínico:** Muchas secciones asumen conocimiento de fisiología, farmacología, patología.
  - **⚠️ NO usar para diagnóstico:** El libro es de prescripción y evaluación, no de diagnóstico médico.
  - **⚠️ NO automatizar intervenciones médicas:** Cualquier recomendación que involucre medicación, cirugía, o decisiones clínicas debe ser referida a profesional médico.
  - **⚠️ Supervisión clínica requerida:** Muchos protocolos (CR, PAD supervisado, CPET, tests máximos en poblaciones clínicas) requieren supervisión médica.
  - **⚠️ Medicaciones alteran respuestas al ejercicio:** La Tabla A.1 del Apéndice A documenta cómo β-bloqueadores, diuréticos, CCB, etc. alteran HR, BP y capacidad de ejercicio. El sistema debe considerar medicación al prescribir.

- **Recomendaciones específicas:**
  - **Crear `rules/acsm_aerobic_prescription.ts`** con las reglas de frecuencia, intensidad (Tabla 6.1), duración, volumen, tipo (Tabla 6.4), progresión y ecuaciones metabólicas (Tabla 6.3).
  - **Crear `rules/acsm_resistance_prescription.ts`** con las reglas de resistencia (Tabla 6.6): frecuencia, intensidad por nivel, volumen, descanso, progresión 5-10%/10-20%, técnica.
  - **Crear `rules/acsm_screening.ts`** implementando el algoritmo de preparticipación (Figura 2.2) como un flujo de 6 ramas de decisión, con la Tabla 2.1 (signos/síntomas) como input.
  - **Crear `rules/acsm_safety_termination.ts`** con criterios absolutos y relativos de terminación (Box 5.4), contraindicaciones (Box 5.2, 9.4), y red flags.
  - **Crear `rules/acsm_intensity_zones.ts`** con la Tabla 6.1 completa como lookup table de 5 niveles × 7 métricas, y las ecuaciones HRmax (Tabla 6.2).
  - **Crear `rules/acsm_metabolic_equations.ts`** con las 5 ecuaciones metabólicas (Tabla 6.3) como funciones de conversión.
  - **Crear `rules/acsm_clinical_exercise.ts`** con prescripciones específicas por condición (más de 25 condiciones: DM, HTA, COPD, PAD, HF, post-MI, cáncer, EM, Parkinson, SCI, CKD, VIH, artritis, fibromialgia, osteoporosis, etc.).
  - **Crear `rules/acsm_environmental.ts`** con reglas de altitud, frío y calor.
  - **Crear `rules/acsm_lifestyle.ts`** con reglas de sedentarismo (breaks por hora), hidratación, y ejercicio con enfermedad.
  - **Crear `SkillPath: progressive-aerobic-conditioning`** y **`SkillPath: progressive-resistance-training`** como progresiones de novato a activo.
  - **Marcar todas las reglas clínicas con `requiresClinicalSupervision: true`** para que el sistema no las aplique autónomamente sin confirmación de supervisión profesional.
  - **Añadir a `BodyZoneId` metadatos** de lesiones típicas, ROM objetivo y precauciones extraídas de este libro.
  - **No usar este libro como fuente para:** progresiones de calistenia, técnicas avanzadas de powerlifting, protocolos de tendinopatía, movilidad articular detallada, periodización para atletas. Estas deben venir de otras fuentes del stack.

---

*Fin de extracción completa y actualizada. Documento generado a partir de ACSM's Guidelines for Exercise Testing and Prescription, 10th Edition (2018). Todo el contenido ha sido parafraseado; no se han copiado párrafos literales. Las referencias de capítulo/sección/tabla/figura se proporcionan para verificación. Todas las tablas críticas (6.1–6.8, 2.1, 3.1, 4.7, 10.1, 10.2) y la Figura 2.2 han sido integradas completamente.*
