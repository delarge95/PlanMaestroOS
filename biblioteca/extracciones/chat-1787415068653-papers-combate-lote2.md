# chat-1787415068653-papers-combate-lote2 — Extracción recuperada de chat

> **sourceId:** `chat-1787415068653-papers-combate-lote2` · **origen:** `chat-export-1787415068653` (Extracción de Reglas para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
A continuación presento **3 documentos de extracción independientes**, uno por cada paper, listos para guardarse como archivos Markdown separados dentro del pipeline de Plan Maestro OS.

---

# A Longitudinal Study of Predictors of Sexual Dysfunction in Men on Active Surveillance for Prostate Cancer — Extracción para Plan Maestro OS

> Extracción orientada a contexto médico/uro-oncológico. El paper no prescribe ejercicio ni entrega protocolos de entrenamiento; su utilidad principal para un sistema de fitness es aportar **contexto de salud, factores de riesgo y límites seguros** para usuarios masculinos mayores, con cáncer de próstata en vigilancia activa y comorbilidades cardiometabólicas.

---

## 1) Metadatos del libro

- **Título:** A Longitudinal Study of Predictors of Sexual Dysfunction in Men on Active Surveillance for Prostate Cancer  
- **Autor(es):** Shane M. Pearce, Chi-Hsiung E. Wang, David E. Victorson, Brian T. Helfand, Kristian R. Novakovic, Charles B. Brendler, Jeffrey A. Albaugh  
- **Año:** 2015  
- **Disciplina principal:** Medicina / Urología / Oncología / Salud sexual / Calidad de vida  
- **Enfoque poblacional:** Hombres con cáncer de próstata de bajo riesgo en **active surveillance**  
- **Notas de alcance:**  
  - Cubre evolución de función sexual, ansiedad, síntomas urinarios y predictores clínicos durante los primeros 24 meses de vigilancia activa.  
  - Explícitamente **NO cubre**: prescripción de ejercicio, rehabilitación musculoesquelética, protocolos de fuerza, movilidad, hipertrofia, nutrición ni intervenciones terapéuticas para disfunción sexual.  
  - Es un estudio observacional longitudinal, no un ensayo de intervención deportiva.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `ProstateCancerActiveSurveillanceProfile`  
  - **Descripción:** Perfil clínico para usuarios en vigilancia activa por cáncer de próstata.  
  - **Campos sugeridos:**  
    - `age`  
    - `psaBaseline`  
    - `psaDensity`  
    - `biopsyCount`  
    - `totalCoresTaken`  
    - `comorbidities[]`  
    - `epic26SexualFunctionScore`  
    - `maxPCAnxietyScore`  
    - `auaSymptomIndexScore`  
    - `employmentStatus`  
    - `monthsOnActiveSurveillance`  
  - **Referencias:** Methods, p. 157; Results, p. 158.

- `SexualFunctionMetric`  
  - **Descripción:** Métrica de resultado reportado por paciente para función sexual.  
  - **Campos sugeridos:**  
    - `instrument: EPIC-26 Sexual Function`  
    - `score0to100`  
    - `higherIsBetter: true`  
    - `collectedAt`  
    - `deltaPerYear`  
  - **Referencias:** Methods, p. 157; Results, p. 158.

- `PsychosocialBurdenMetric`  
  - **Descripción:** Métrica de ansiedad específica relacionada con cáncer de próstata.  
  - **Campos sugeridos:**  
    - `instrument: MAX-PC`  
    - `totalScore0to54`  
    - `prostateCancerAnxietySubscore`  
    - `psaAnxietySubscore`  
    - `fearOfRecurrenceSubscore`  
  - **Referencias:** Methods, p. 157.

- `ComorbidityRiskProfile`  
  - **Descripción:** Perfil de comorbilidades relevantes para función sexual y riesgo cardiovascular.  
  - **Campos sugeridos:**  
    - `diabetes`  
    - `coronaryArteryDisease`  
    - `hypertension`  
    - `hyperlipidemia`  
    - `sleepDisorder`  
    - `neurologicCondition`  
  - **Referencias:** Table 1, p. 158.

### 2.2 Mapeo a tipos existentes

- `FocusId: medical-monitoring`  
  - El libro lo trata como seguimiento clínico de pacientes en vigilancia activa, con métricas de calidad de vida y predictores de deterioro funcional.

- `FocusId: sexual-health`  
  - El paper entrega evolución longitudinal de función sexual, pero sin intervención de ejercicio.

- `FocusId: chronic-disease-risk`  
  - Relevante por asociación con diabetes, enfermedad coronaria e hipertensión.

- `BodyZoneId: pelvic-health`  
  - Zona relevante desde el punto de vista urológico/oncológico, no musculoesquelético.  
  - El paper no discute movilidad, fuerza ni control motor pélvico.

- `MovementPattern: none`  
  - No hay análisis de patrones de movimiento ni ejercicios.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `prostate_as_expected_sexual_function_decline`

- **Descripción breve:** En hombres en vigilancia activa, la función sexual tiende a disminuir de forma gradual durante los primeros 24 meses.  
- **Tipo:** salud / monitoreo clínico  
- **Métrica principal:** cambio en puntaje EPIC-26 Sexual Function  
- **Valores numéricos:**  
  - Baseline medio: 61.4 ± 30.4  
  - 24 meses: 53.9 ± 30.7  
  - Declive aproximado: **−3.73 puntos/año**  
  - Tamaño del efecto: pequeño a 18 meses, cercano a medio a 24 meses  
- **Condiciones de aplicación:**  
  - Hombres en vigilancia activa por cáncer de próstata.  
  - Primeros 24 meses desde ingreso a protocolo.  
- **Capítulos/páginas:** Results, Table 2, p. 158; Results, p. 158–159.  
- **Comentarios/precauciones:**  
  - No usar como regla de entrenamiento.  
  - Útil como contexto para no atribuir erróneamente todo deterioro a una rutina deportiva.  
  - Si hay caída abrupta o síntomas preocupantes, derivar a profesional clínico.

---

### Regla: `prostate_as_sd_risk_factors_age_diabetes_psa`

- **Descripción breve:** Edad avanzada, diabetes y mayor PSA basal se asocian a peor función sexual o declive más rápido.  
- **Tipo:** factor de riesgo / salud  
- **Métrica principal:** presencia de factores de riesgo clínicos  
- **Valores numéricos:**  
  - Edad: predictor negativo fuerte en multivariable.  
  - Diabetes: predictor significativo en multivariable.  
  - PSA × tiempo: asociación con declive más rápido.  
  - Coeficientes multivariables reportados:  
    - Edad: −1.99  
    - Diabetes: −11.84  
    - PSA × tiempo: −0.044  
- **Condiciones de aplicación:**  
  - Usuarios masculinos en vigilancia activa.  
  - No usar como diagnóstico ni como score de riesgo clínico definitivo.  
- **Capítulos/páginas:** Table 3, p. 159; Table 4, p. 159.  
- **Comentarios/precauciones:**  
  - ⚠️ El paper no entrega umbrales clínicos accionables de PSA para entrenamiento.  
  - Estos coeficientes son estadísticos, no reglas de dosificación deportiva.

---

### Regla: `prostate_as_comorbidity_association`

- **Descripción breve:** Diabetes, enfermedad coronaria e hipertensión se asociaron a menores puntajes de función sexual en análisis univariado.  
- **Tipo:** factor de riesgo / salud  
- **Métrica principal:** presencia de comorbilidad  
- **Valores numéricos:**  
  - Diabetes: −15.71 puntos en univariado  
  - CAD: −19.22 puntos  
  - Hipertensión: −10.13 puntos  
- **Condiciones de aplicación:**  
  - Solo como señal de mayor fragilidad cardiometabólica potencial.  
- **Capítulos/páginas:** Table 3, p. 159.  
- **Comentarios/precauciones:**  
  - En multivariable, solo diabetes permaneció significativa como predictor independiente.  
  - Útil para marcar usuarios con mayor necesidad de supervisión médica.

---

### Regla: `prostate_as_biopsy_anxiety_not_sd_predictors`

- **Descripción breve:** Número de biopsias, número de núcleos extraídos y ansiedad no predijeron disfunción sexual ni su cambio temporal.  
- **Tipo:** mito clínico / factor no predictivo  
- **Métrica principal:** biopsias, núcleos, MAX-PC  
- **Valores numéricos:**  
  - Sin asociación significativa; P > 0.6 en varios análisis.  
- **Condiciones de aplicación:**  
  - Interpretación clínica dentro de vigilancia activa.  
- **Capítulos/páginas:** Abstract, p. 156; Results, p. 159; Discussion, p. 160–161.  
- **Comentarios/precauciones:**  
  - No significa que biopsia o ansiedad sean irrelevantes en otros contextos.  
  - Solo aplica a esta cohorte y ventana de 24 meses.

---

### Regla: `prostate_as_anxiety_expected_decrease`

- **Descripción breve:** La ansiedad específica por cáncer de próstata disminuyó levemente durante los primeros 24 meses.  
- **Tipo:** psicosocial / monitoreo  
- **Métrica principal:** MAX-PC total y subescala de ansiedad por cáncer de próstata  
- **Valores numéricos:**  
  - MAX-PC total baseline: 9.8 ± 8.0  
  - 24 meses: 7.6 ± 7.1  
  - Disminución significativa pero pequeña  
- **Condiciones de aplicación:**  
  - Usuarios en vigilancia activa.  
- **Capítulos/páginas:** Table 2, p. 158; Results, p. 158–159.  
- **Comentarios/precauciones:**  
  - No usar para prescribir ejercicio ansiolítico.  
  - Puede servir para contextualizar bienestar psicológico.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: no aplica

- El paper no entrega progresiones motrices, habilidades deportivas, fases de rehab ni secuencias de ejercicios.  
- No se recomienda generar SkillPaths desde este documento.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### No aplica

- El estudio no describe ejecución de ejercicios, cues técnicos ni errores de movimiento.  
- No hay material aprovechable para `primaryCues`, `commonFaults` o `bailTechniques`.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: disfunción sexual en hombres bajo vigilancia activa

- **Zona:** `pelvic-health` / salud urológica  
- **Etiología resumida:**  
  - Multifactorial.  
  - Asociada principalmente a edad, tiempo en vigilancia, diabetes y, en ciertos análisis, PSA basal.  
  - No fue explicada principalmente por biopsias, número de núcleos o ansiedad.  
- **Signos y síntomas clave:**  
  - Menor función sexual autopercibida según EPIC-26.  
  - El paper no entrega una semiología clínica detallada.  
- **Stadia / fases:**  
  - No define fases clínicas de rehabilitación.  
- **Protocolos de tratamiento o rehab:**  
  - No hay protocolo de ejercicio ni rehab en el paper.  
- **Ejercicios de prehab/movilidad específicos:**  
  - Ninguno descrito.  
- **Umbrales de dolor o red flags:**  
  - No definidos por el paper.  
  - Recomendación de sistema: cualquier deterioro marcado, dolor pélvico, síntomas urinarios nuevos o sufrimiento psicológico significativo debe derivarse a profesional de salud.  
- **Referencias:** Results, p. 158–159; Discussion, p. 160–162.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

- **Sueño:** No abordado directamente.  
- **Estrés:** Se midió ansiedad específica por cáncer de próstata con MAX-PC; disminuyó levemente en el tiempo.  
- **Nutrición:** No abordada.  
- **Entrenar enfermo:** No abordado.  
- **Comorbilidades como estilo de vida indirecto:**  
  - Diabetes, hipertensión y enfermedad coronaria aparecen como variables clínicas relevantes.  
  - El sistema debería tratar estas condiciones como flags de salud, no como variables deportivas autónomas.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**  
  - Fuente de contexto médico para usuarios con cáncer de próstata en vigilancia activa.  
  - Base para flags de salud relacionados con edad, diabetes, hipertensión, CAD y función sexual.  
  - Referencia para evitar inferencias falsas, por ejemplo: “la disfunción sexual fue causada por biopsias o ansiedad”.

- **Limitaciones:**  
  - No es una fuente de prescripción de ejercicio.  
  - No entrega protocolos de fuerza, movilidad, rehab ni dolor musculoesquelético.  
  - Población clínica específica, no atletas recreativos generales.  
  - ⚠️ No debe usarse para diagnosticar, estadificar cáncer ni intervenir médicamente.

- **Recomendaciones específicas:**  
  - Crear un perfil `health_conditions/prostate_active_surveillance.ts` o `json` con campos PSA, comorbilidades, EPIC-26 y MAX-PC.  
  - Añadir una regla de seguridad: si el usuario reporta deterioro sexual significativo o síntomas pélvicos/urinarios, sugerir evaluación médica antes de aumentar cargas de entrenamiento.  
  - Usar este paper solo como **contexto de salud**, no como generador de rutinas.

---
---

# High-Intensity Conditioning for Combat Athletes: Practical Recommendations — Extracción para Plan Maestro OS

> Extracción de alto valor para programación de condicionamiento en deportes de combate. Entrega definiciones operativas de métodos de alta intensidad, estructura de periodización por fases, consideraciones de peso corporal y recomendaciones de integración con fuerza. Muy útil para reglas de acondicionamiento, fases de campamento deportivo y control de fatiga.

---

## 1) Metadatos del libro

- **Título:** High-Intensity Conditioning for Combat Athletes: Practical Recommendations  
- **Autor(es):** Alan Ruddock, Lachlan James, Duncan French, David Rogerson, Matthew Driller, David Hembrough  
- **Año:** 2021  
- **Disciplina principal:** Strength & conditioning / fisiología del ejercicio / deportes de combate  
- **Enfoque poblacional:** Atletas de combate amateur y profesionales  
- **Notas de alcance:**  
  - Cubre demandas fisiológicas de deportes de combate, métodos de acondicionamiento de alta intensidad, periodización, integración con fuerza, tapering y consideraciones de peso.  
  - Explícitamente no entrega técnica de pelea, rehabilitación clínica detallada, nutrición deportiva completa ni protocolos médicos de corte de peso.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `ConditioningMethod`  
  - **Descripción:** Método de acondicionamiento de alta intensidad con parámetros de trabajo, descanso, intensidad y objetivo fisiológico.  
  - **Campos sugeridos:**  
    - `methodId: SIT | HIIT | SET | BUFF | RECOVERY_ENDURANCE`  
    - `workDurationRange`  
    - `restDurationRange`  
    - `intensityMetric: RPE | HR | VO2 | lactate`  
    - `targetAdaptation: central | peripheral | neuromuscular | buffering`  
    - `recommendedPhase`  
  - **Referencias:** Section 6.1, p. 8.

- `CombatSportProfile`  
  - **Descripción:** Perfil fisiológico y estructural del deporte de combate.  
  - **Campos sugeridos:**  
    - `roundDurationMin`  
    - `restBetweenRoundsMin`  
    - `maxRounds`  
    - `totalDurationMin`  
    - `activityToRestRatio`  
    - `estimatedMaxAerobicCapacity`  
    - `sportCharacterization`  
  - **Referencias:** Table 1, p. 3.

- `FightCampPhase`  
  - **Descripción:** Fase de preparación de combate.  
  - **Campos sugeridos:**  
    - `phaseId: general-prep | special-prep | early-camp | late-camp | transition`  
    - `durationWeeks`  
    - `primaryFocus`  
    - `secondaryFocus`  
    - `rpeBand`  
    - `volumeTrend`  
  - **Referencias:** Sections 5.1–5.5, p. 5–7; Table 3, p. 11.

- `WeightMakingRisk`  
  - **Descripción:** Estado de riesgo asociado a dar el peso.  
  - **Campos sugeridos:**  
    - `chronicWeightLossPhase`  
    - `acuteWeightCut`  
    - `energyAvailabilityRisk`  
    - `daysToWeighIn`  
    - `trainingQualityImpact`  
  - **Referencias:** Section 3.2, p. 4.

- `AthleteTrainingHistory`  
  - **Descripción:** Historial de entrenamiento y fenotipo deportivo previo.  
  - **Campos sugeridos:**  
    - `lowIntensityEnduranceBackground`  
    - `highIntensityBackground`  
    - `injuryHistory[]`  
    - `movementLimitations[]`  
    - `preferredConditioningModality`  
  - **Referencias:** Section 3.3, p. 4.

### 2.2 Mapeo a tipos existentes

- `FocusId: conditioning`  
  - El libro lo trata como eje central: desarrollo aeróbico, anaeróbico y neuromuscular mediante métodos de alta intensidad.

- `FocusId: aerobic-capacity`  
  - Se considera base para sostener esfuerzos repetidos y recuperación entre acciones intensas.

- `FocusId: anaerobic-power`  
  - Relevante para acciones decisivas de 8–12 segundos.

- `FocusId: strength`  
  - Se integra con condicionamiento, cuidando interferencia con hipertrofia y adaptaciones periféricas.

- `FocusId: recovery`  
  - Se aborda mediante tapering, transición y control de fatiga.

- `BodyZoneId: head-face`  
  - Lesiones comunes en boxing.  
  - Referencia: Section 3.3, p. 4.

- `BodyZoneId: knee`  
  - Lesiones comunes en wrestling.  
  - Referencia: Section 3.3, p. 4.

- `BodyZoneId: thigh`  
  - Lesiones comunes en taekwondo.  
  - Referencia: Section 3.3, p. 4.

- `BodyZoneId: lumbar`  
  - Lesiones comunes en judo.  
  - Referencia: Section 3.3, p. 4.

- `MovementPattern: striking`  
  - Acciones de golpeo, alta demanda neuromuscular y anaeróbica.

- `MovementPattern: grappling`  
  - Demandas isométricas y de fuerza-resistencia.

- `MovementPattern: wrestling-takedown`  
  - Alta exigencia neuromuscular y colisiones.

- `MovementPattern: cyclic-conditioning`  
  - Uso de ciclismo, remo, carrera, ski erg, versa climber, etc.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `combat_sport_profile_reference`

- **Descripción breve:** Cada deporte de combate tiene estructura de rounds, descansos y demanda aeróbica estimada diferente.  
- **Tipo:** perfil deportivo / referencia  
- **Métrica principal:** duración, trabajo:descanso, VO2 máx estimado  
- **Valores numéricos:**  
  - Boxing: rounds 3 min, descanso 1 min, hasta 12 rounds, duración total 47 min, trabajo:descanso 1:1–1:3, VO2 máx estimado 65 ml/kg/min  
  - Kickboxing: rounds 2 min, descanso 1 min, hasta 12 rounds, total 35 min, 1:2–1:5, VO2 60  
  - MMA: rounds 5 min, descanso 1 min, hasta 5 rounds, total 29 min, 1:4–1:5, VO2 63  
  - Judo: 5 min, sin descanso estándar, 2:1–3:1, VO2 50  
  - Wrestling: rounds 3 min, descanso 0.5 min, 2 rounds, total 6.5 min, VO2 55  
  - Taekwondo: rounds 2 min, descanso 1 min, 3 rounds, total 8 min, 1:6–1:4, VO2 63  
- **Condiciones de aplicación:**  
  - Sirve para parametrizar plantillas deportivas.  
- **Capítulos/páginas:** Table 1, p. 3.  
- **Comentarios/precauciones:**  
  - Valores aeróbicos son límites superiores reportados, no metas obligatorias.

---

### Regla: `combat_high_intensity_actions_profile`

- **Descripción breve:** Las acciones decisivas suelen ser breves y de alta intensidad, pero ocurren tras demanda prolongada.  
- **Tipo:** demanda competitiva  
- **Métrica principal:** duración de acciones intensas  
- **Valores numéricos:**  
  - Aprox. 77% de combates MMA terminan por acciones intensas de 8–12 s.  
  - Finalización asociada a ~20 s de golpeo intenso de pie o ~45 s de trabajo intenso en suelo.  
  - Victorias en peleas de 5 rounds asociadas a ~60 s de actividad intensa previa.  
  - Lactato >10 mmol/L reportado en boxing y MMA simulada.  
- **Condiciones de aplicación:**  
  - MMA y deportes de golpeo/grappling de alta intensidad.  
- **Capítulos/páginas:** Introduction, p. 2.  
- **Comentarios/precauciones:**  
  - No significa que el entrenamiento deba ser solo anaeróbico; la base aeróbica soporta la repetición de esfuerzos.

---

### Regla: `combat_aerobic_support_of_repeated_high_intensity`

- **Descripción breve:** El rendimiento anaeróbico repetido depende fuertemente del sistema aeróbico.  
- **Tipo:** principio fisiológico  
- **Métrica principal:** capacidad aeróbica / critical intensity  
- **Valores numéricos:**  
  - Cualitativo: mayor capacidad aeróbica permite recuperar mejor entre esfuerzos intensos y reservar capacidad por encima de intensidad crítica.  
- **Condiciones de aplicación:**  
  - Programación de acondicionamiento para combate.  
- **Capítulos/páginas:** Introduction, p. 2–3.  
- **Comentarios/precauciones:**  
  - No reducir el entrenamiento a solo sprints; integrar desarrollo aeróbico.

---

### Regla: `combat_sit_method_definition`

- **Descripción breve:** Sprint Interval Training consiste en esfuerzos máximos menores a 30 segundos.  
- **Tipo:** método de acondicionamiento  
- **Métrica principal:** duración y RPE  
- **Valores numéricos:**  
  - Trabajo: <30 s  
  - Intensidad: RPE 10/10  
  - Ejemplo: 30 s de sprint máximo  
  - Adaptaciones esperables: alrededor de 6–9 sesiones / 3–4 semanas  
- **Condiciones de aplicación:**  
  - Ideal en preparación general o inicio de campamento.  
  - Atletas sin lesión aguda y con buena base mecánica.  
- **Capítulos/páginas:** Section 6.1, p. 8; Section 6.2, p. 8–9.  
- **Comentarios/precauciones:**  
  - Alta demanda neuromuscular.  
  - No usar excesivamente si hay fatiga acumulada o lesiones.

---

### Regla: `combat_hiit_method_definition`

- **Descripción breve:** HIIT usa intervalos más largos para maximizar estrés cardiovascular y tiempo cercano a VO2 máx.  
- **Tipo:** método de acondicionamiento  
- **Métrica principal:** duración de intervalo, RPE/HR/VO2  
- **Valores numéricos:**  
  - Intervalos: 2–20 min  
  - Intensidad: RPE 9/10, ~90% FC máx, o 90–95% VO2 máx  
  - Ejemplo: 4 × 8 min con 2 min de recuperación  
  - Adaptaciones típicamente en ~4 semanas  
- **Condiciones de aplicación:**  
  - Especial preparación o fases donde se busca capacidad aeróbica central.  
- **Capítulos/páginas:** Section 6.1, p. 8; Section 6.3, p. 9.  
- **Comentarios/precauciones:**  
  - Monitorizar fatiga; no apilar múltiples sesiones de alta exigencia el mismo día sin control.

---

### Regla: `combat_set_method_definition`

- **Descripción breve:** Speed Endurance Training enfatiza mantenimiento de función neuromuscular bajo acidosis.  
- **Tipo:** método de acondicionamiento  
- **Métrica principal:** duración e intensidad  
- **Valores numéricos:**  
  - Trabajo: 30–60 s  
  - RPE: 9/10  
  - Ejemplo: 30 s × 8 con 3 min de recuperación  
  - Adaptaciones: similares a sprint training, ~6–10 sesiones  
- **Condiciones de aplicación:**  
  - Fases cercanas a competencia o preparación específica.  
- **Capítulos/páginas:** Section 6.1, p. 8; Section 6.5, p. 10.  
- **Comentarios/precauciones:**  
  - Requiere buena técnica y capacidad de sostener esfuerzo.

---

### Regla: `combat_buff_method_definition`

- **Descripción breve:** Muscle Buffer Training busca mejorar capacidad amortiguadora ante acumulación de H+ y lactato.  
- **Tipo:** método de acondicionamiento  
- **Métrica principal:** lactato/RPE, duración, repeticiones  
- **Valores numéricos:**  
  - Intensidad: lactato sanguíneo ~8–12 mmol/L  
  - RPE aproximado: 8/10  
  - Ejemplo: 6 × 2 min con 3 min de recuperación  
  - Protocolo efectivo sugerido: intervalos de ~2 min, 6–12 repeticiones, 3 veces/semana durante 8 semanas  
- **Condiciones de aplicación:**  
  - Atletas que necesitan tolerar esfuerzos intensos repetidos.  
- **Capítulos/páginas:** Section 6.1, p. 8; Section 6.4, p. 9–10.  
- **Comentarios/precauciones:**  
  - Puede generar fatiga metabólica alta; vigilar recuperación.

---

### Regla: `combat_general_preparation_phase`

- **Descripción breve:** La preparación general prioriza menor especificidad, mayor base aeróbica y oportunidad para SIT sin conflicto excesivo.  
- **Tipo:** fase de periodización  
- **Métrica principal:** RPE y distribución de sesión  
- **Valores numéricos:**  
  - Deporte-específico: RPE 3–4 según texto, o 3–5 según tabla.  
  - Primario: drilling deportivo + SIT RPE 10  
  - Secundario: recuperación/endurance RPE 1–3  
- **Condiciones de aplicación:**  
  - Off-camp o inicio de preparación.  
- **Capítulos/páginas:** Section 5.1, p. 5; Table 3, p. 11.  
- **Comentarios/precauciones:**  
  - ⚠️ Hay leve inconsistencia entre RPE 3–4 y RPE 3–5. Para implementación, usar banda RPE 3–5.

---

### Regla: `combat_special_preparation_phase`

- **Descripción breve:** La preparación especial aumenta especificidad deportiva y desarrolla capacidad cardiovascular con HIIT.  
- **Tipo:** fase de periodización  
- **Métrica principal:** duración de intervalos, RPE  
- **Valores numéricos:**  
  - Intervalos deporte-específicos: 1–5 min  
  - Primario: drilling RPE 5–7 + short HIIT RPE 8–9  
  - Secundario: long HIIT RPE 8–9  
- **Condiciones de aplicación:**  
  - Cuando se acerca confirmación de pelea o se construye base específica.  
- **Capítulos/páginas:** Section 5.2, p. 5–6; Table 3, p. 11.  
- **Comentarios/precauciones:**  
  - Aumenta colisión y demanda neuromuscular.

---

### Regla: `combat_fight_camp_phase_duration`

- **Descripción breve:** Las fases de preparación general y especial pueden durar bloques de 3 a 6 semanas y ciclar hasta que haya evento confirmado.  
- **Tipo:** duración de fase  
- **Métrica principal:** semanas  
- **Valores numéricos:**  
  - Rango recomendado: ~3–6 semanas por fase de preparación  
- **Condiciones de aplicación:**  
  - Especialmente útil cuando la fecha de competición es incierta.  
- **Capítulos/páginas:** Section 5.2, p. 6.  
- **Comentarios/precauciones:**  
  - Debe permitir adaptación real pero también flexibilidad ante pelea de corto aviso.

---

### Regla: `combat_late_camp_taper`

- **Descripción breve:** Antes de competir, se debe reducir volumen manteniendo intensidad.  
- **Tipo:** tapering / descanso  
- **Métrica principal:** reducción de volumen  
- **Valores numéricos:**  
  - Reducción de volumen: 40–60%  
  - Ventana: últimos 8–12 días antes de competencia  
- **Condiciones de aplicación:**  
  - Late fight camp.  
- **Capítulos/páginas:** Section 5.4, p. 7.  
- **Comentarios/precauciones:**  
  - Mantener algo de intensidad para no perder adaptaciones.

---

### Regla: `combat_transition_phase`

- **Descripción breve:** Tras competir, se requiere recuperación física y mental, y reset metabólico tras corte de peso.  
- **Tipo:** recuperación  
- **Métrica principal:** duración contextual  
- **Valores numéricos:**  
  - Cualitativo; depende del daño y duración del combate.  
- **Condiciones de aplicación:**  
  - Post-bout.  
- **Capítulos/páginas:** Section 5.5, p. 7.  
- **Comentarios/precauciones:**  
  - No volver de inmediato a campamento de alta intensidad si hubo daño significativo.

---

### Regla: `combat_concurrent_training_separation`

- **Descripción breve:** Cuando se busca hipertrofia o adaptaciones periféricas, conviene separar fuerza y condicionamiento intenso.  
- **Tipo:** programación / interferencia  
- **Métrica principal:** horas entre sesiones  
- **Valores numéricos:**  
  - Separación recomendada: hasta ~36 h entre sesiones de fuerza y acondicionamiento intenso si hay conflicto de adaptaciones.  
- **Condiciones de aplicación:**  
  - Especialmente en preparación general o bloques de hipertrofia.  
- **Capítulos/páginas:** Section 7, p. 10.  
- **Comentarios/precauciones:**  
  - No es una ley rígida, pero sí una estrategia práctica para minimizar interferencia.

---

### Regla: `combat_strength_phase_focus`

- **Descripción breve:** La fuerza se periodiza según fase: hipertrofia/resistencia muscular, fuerza básica y luego fuerza máxima/RFD.  
- **Tipo:** progresión de fuerza  
- **Métrica principal:** énfasis de fuerza  
- **Valores numéricos:**  
  - General prep: hipertrofia, fuerza-resistencia, balance muscular  
  - Special prep: fuerza básica  
  - Pre-competición: fuerza básica  
  - Competición: fuerza máxima y rate of force development con énfasis en alta velocidad  
- **Condiciones de aplicación:**  
  - Atletas de combate con entrenamiento concurrente.  
- **Capítulos/páginas:** Section 7, p. 10; Table 3, p. 11.  
- **Comentarios/precauciones:**  
  - Mantener dosis de cualidades secundarias para evitar detraining.

---

### Regla: `combat_weight_making_energy_availability`

- **Descripción breve:** El balance energético negativo durante pérdida de peso prolongada puede deteriorar calidad de entrenamiento y aumentar riesgo.  
- **Tipo:** nutrición / estilo de vida / riesgo  
- **Métrica principal:** disponibilidad energética cualitativa  
- **Valores numéricos:**  
  - No entrega números de calorías.  
- **Condiciones de aplicación:**  
  - Atletas en corte de peso crónico.  
- **Capítulos/páginas:** Section 3.2, p. 4.  
- **Comentarios/precauciones:**  
  - El sistema no debe promover cortes agresivos.  
  - Debe alertar si el usuario reporta fatiga, irritabilidad, bajo rendimiento o enfermedad recurrente.

---

### Regla: `combat_training_history_modality_selection`

- **Descripción breve:** La selección de métodos debe adaptarse al historial del atleta.  
- **Tipo:** personalización  
- **Métrica principal:** background de entrenamiento  
- **Valores numéricos:**  
  - Cualitativo.  
  - Atletas con mucho fondo de baja intensidad pueden responder mejor a HIIT más largos que a sprints muy cortos.  
- **Condiciones de aplicación:**  
  - Personalización de acondicionamiento.  
- **Capítulos/páginas:** Section 3.3, p. 4.  
- **Comentarios/precauciones:**  
  - Considerar lesiones previas y fenotipo.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `combat-high-intensity-conditioning-phases`

- **Disciplina:** strength & conditioning para deportes de combate  
- **Objetivo final:** Llegar a competencia con alta capacidad de repetir esfuerzos, fuerza/potencia disponibles y fatiga disipada.  
- **Requisitos de seguridad previos:**  
  - Ausencia de lesión aguda no controlada.  
  - Capacidad técnica mínima para sprints, cambios de dirección o ejercicios balísticos si se usan.  
  - Nutrición/hidratación suficientes para sesiones intensas.  
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | General preparation | Drilling técnico suave + SIT y endurance de recuperación | Tolerar volumen base, buena ejecución técnica, fatiga controlada | Añadir demasiada intensidad específica demasiado pronto | Section 5.1, p. 5; Table 3, p. 11 |
| 2 | Special preparation | Aumenta drilling específico y HIIT corto/largo | Mejora de tolerancia aeróbica y recuperación entre esfuerzos | Sobreentrenar HIIT junto a sparring excesivo | Section 5.2, p. 5–6 |
| 3 | Early fight camp | Mayor volumen específico, más grappling/striking y condicionamiento | Fecha confirmada; atleta tolera mayor especificidad | Ignorar fatiga por colisiones | Section 5.3, p. 7 |
| 4 | Late fight camp | Máxima especificidad, táctica, speed endurance y taper | Reducción de fatiga, mantenimiento de intensidad, listo para competir | No taperizar o bajar demasiado la intensidad | Section 5.4, p. 7 |
| 5 | Transition | Recuperación post-bout y reset físico/mental | Recuperación subjetiva y retorno progresivo | Volver inmediatamente a alta carga | Section 5.5, p. 7 |

- **Advertencias:**  
  - Late fight camp implica alto estrés neuromuscular y colisiones; requiere monitoreo.  
  - Transition no debe omitirse si hubo daño.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Sprint Interval Training

- **Cues principales:**  
  - Esfuerzo realmente máximo.  
  - Técnica estable bajo fatiga.  
  - Recuperación completa o casi completa entre repeticiones.  
- **Errores frecuentes:**  
  - Convertirlo en intervalo submáximo por fatiga previa.  
  - Usar demasiadas repeticiones.  
  - Ejecutarlo con lesión o técnica deteriorada.  
- **Variantes seguras:**  
  - Cycle ergometer, remo, ski erg, versa climber, carrera en cuesta suave.  
  - Alternativas de bajo impacto si hay molestias.  
- **Indicaciones por zona:**  
  - Evitar sprints de alto impacto si hay lesión de rodilla, isquiotibiales o lumbar no controlada.  
- **Páginas:** Section 6.2, p. 8–9.

---

### High-Intensity Interval Training

- **Cues principales:**  
  - Ritmo sostenible pero muy exigente.  
  - No salir demasiado rápido.  
  - Mantener mecánica respiratoria y postura.  
- **Errores frecuentes:**  
  - Intervalos demasiado largos a intensidad incorrecta.  
  - Acumular demasiadas sesiones de HIIT en una semana.  
- **Variantes seguras:**  
  - Ciclismo, remo, carrera, bodyweight circuits si la técnica es adecuada.  
- **Indicaciones por zona:**  
  - Si hay dolor lumbar o de rodilla, preferir ergómetros de bajo impacto.  
- **Páginas:** Section 6.3, p. 9.

---

### Speed Endurance / Muscle Buffer Training

- **Cues principales:**  
  - Mantener calidad de movimiento bajo acidosis.  
  - Controlar pacing para no colapsar antes de terminar la serie.  
- **Errores frecuentes:**  
  - Intensidad demasiado alta que convierte la sesión en SIT no deseado.  
  - Recuperación insuficiente entre series.  
- **Variantes seguras:**  
  - Ejercicios cíclicos si hay limitación técnica.  
- **Indicaciones por zona:**  
  - Evitar movimientos balísticos complejos si la técnica se degrada por fatiga.  
- **Páginas:** Section 6.4, p. 9–10; Section 6.5, p. 10.

---

### Integración con fuerza

- **Cues principales:**  
  - Priorizar calidad de levantamiento.  
  - Separar sesiones intensas si se busca hipertrofia.  
- **Errores frecuentes:**  
  - Entrenar fuerza pesada inmediatamente después de acondicionamiento intenso.  
  - No mantener cualidades secundarias durante bloques especializados.  
- **Variantes seguras:**  
  - Usar ejercicios de menor fatiga sistémica si hay alta carga de sparring.  
- **Páginas:** Section 7, p. 10.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Condición: riesgo de lesión por deporte de combate

- **Zona:** head-face, knee, thigh, lumbar según deporte  
- **Etiología resumida:**  
  - Contacto, colisiones, golpes, proyecciones, demandas repetitivas.  
- **Signos y síntomas clave:**  
  - No definidos por el paper.  
- **Stadia / fases:**  
  - No define fases clínicas.  
- **Protocolos de tratamiento o rehab:**  
  - No entrega protocolos de rehab.  
- **Ejercicios de prehab/movilidad específicos:**  
  - No entrega ejercicios específicos.  
- **Umbrales de dolor o red flags:**  
  - No definidos.  
  - El sistema debe tratar dolor agudo, inflamación, inestabilidad o pérdida funcional como señal de derivación profesional.  
- **Referencias:** Section 3.3, p. 4.

---

## 7) Factores de estilo de vida

- **Nutrición / corte de peso:**  
  - El corte de peso puede afectar calidad de entrenamiento.  
  - El sistema debe advertir contra restricción energética severa durante bloques de alta intensidad.  
- **Estrés / fatiga:**  
  - La fase de transición debe incluir reset físico y mental.  
- **Sueño:**  
  - No abordado explícitamente, pero debería asumirse como pilar de recuperación en el sistema.  
- **Entrenar enfermo:**  
  - No abordado.  
  - Recomendación general: fiebre o enfermedad sistémica debería impedir sesiones intensas.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**  
  - Fuente principal para definir métodos de acondicionamiento de alta intensidad en deportes de combate.  
  - Generación de reglas de periodización por fases: general prep, special prep, early/late camp y transition.  
  - Base para reglas de tapering y separación de entrenamiento concurrente.

- **Limitaciones:**  
  - No entrega protocolos exactos para todos los deportes.  
  - Algunas recomendaciones son cualitativas.  
  - No debe usarse para prescribir cortes de peso ni intervenciones médicas.  
  - Requiere interpretación por entrenador en atletas de competición.

- **Recomendaciones específicas:**  
  - Crear `rules/combat_conditioning_methods.ts` con SIT, HIIT, SET y BUFF.  
  - Crear `types/conditioning-method.ts` y `types/fight-camp-phase.ts`.  
  - Añadir regla de tapering `combat_taper_40_60_volume` para últimos 8–12 días pre-competición.

---
---

# An Evidenced-Based Training Plan for Brazilian Jiu-Jitsu — Extracción para Plan Maestro OS

> Extracción muy accionable para BJJ. Entrega estructura de periodización por bloques, prescripción de fuerza, acondicionamiento metabólico específico por cinturón, frecuencias, tapering, recuperación y consideraciones de competencia. Es uno de los papeles más útiles para reglas concretas de combate/grappling.

---

## 1) Metadatos del libro

- **Título:** An Evidenced-Based Training Plan for Brazilian Jiu-Jitsu  
- **Autor(es):** Lachlan P. James  
- **Año:** 2014  
- **Disciplina principal:** Strength & conditioning / combate / grappling / BJJ  
- **Enfoque poblacional:** Competidores de BJJ elite y subelite, con diferentes cinturones  
- **Notas de alcance:**  
  - Cubre demandas temporales de BJJ, periodización, fuerza, potencia, acondicionamiento metabólico, recuperación, warm-up y tapering.  
  - No cubre técnica de BJJ detallada, rehabilitación clínica, nutrición específica ni protocolos médicos.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `BJJRankProfile`  
  - **Descripción:** Perfil competitivo por rango.  
  - **Campos sugeridos:**  
    - `belt: white | blue | purple | brown | black`  
    - `boutDurationMin`  
    - `restBetweenMatchesMin`  
    - `finalMatchRestMultiplier`  
  - **Referencias:** Table 1, p. 15.

- `BJJMesocycle`  
  - **Descripción:** Estructura de preparación por torneo.  
  - **Campos sugeridos:**  
    - `level: elite | subelite`  
    - `totalWeeks`  
    - `blocks[]`  
    - `loadingPattern`  
    - `unloadWeeks`  
  - **Referencias:** Periodization, p. 16.

- `BJJTrainingBlock`  
  - **Descripción:** Bloque de entrenamiento con prioridades específicas.  
  - **Campos sugeridos:**  
    - `blockNumber: 1 | 2 | 3`  
    - `primaryResistanceFocus`  
    - `primaryConditioningFocus`  
    - `technicalTacticalPriority`  
    - `volumeTrend`  
  - **Referencias:** Table 2, p. 16; Blocks 1–3, p. 16–19.

- `BJJConditioningDrill`  
  - **Descripción:** Drill metabólico específico de BJJ.  
  - **Campos sugeridos:**  
    - `workPeriodStructure`  
    - `workToRestRatio`  
    - `highToLowRatio`  
    - `masIntensityPct`  
    - `resistanceComplex`  
    - `beltSpecificDuration`  
    - `repetitions`  
    - `recoveryBetweenDrills`  
  - **Referencias:** Table 4, p. 18; Table 6, p. 19.

- `BJJTaperPlan`  
  - **Descripción:** Plan de descarga precompetitiva.  
  - **Campos sugeridos:**  
    - `volumeReductionPct`  
    - `durationDays`  
    - `intensityGuidance`  
  - **Referencias:** Recovery Strategies, p. 20.

### 2.2 Mapeo a tipos existentes

- `FocusId: conditioning`  
  - BJJ exige acondicionamiento aeróbico y anaeróbico intermitente.

- `FocusId: strength`  
  - La fuerza máxima se considera importante para grappling y rendimiento general.

- `FocusId: power`  
  - La potencia es decisiva en acciones cortas que definen el combate.

- `FocusId: hypertrophy`  
  - Se usa en bloque inicial como base estructural y metabólica.

- `FocusId: recovery`  
  - Tapering, descanso entre torneos y recuperación post-sesión.

- `BodyZoneId: full-body`  
  - BJJ demanda global: tren superior, inferior, core y agarre.

- `BodyZoneId: lumbar`  
  - Relevante por posturas y trabajo en suelo, aunque el paper no entrega protocolo específico.

- `BodyZoneId: shoulder`  
  - Implícita por acciones de grappling, pero sin datos explícitos.

- `MovementPattern: grappling`  
  - Principal patrón deportivo.

- `MovementPattern: isometric-hold`  
  - El grappling contiene acciones isométricas significativas.

- `MovementPattern: squat`  
  - Presente en ejercicios de fuerza y complejos metabólicos.

- `MovementPattern: hinge`  
  - Presente en deadlift, cleans, pulls.

- `MovementPattern: upper-push`  
  - Presses, push jerk.

- `MovementPattern: upper-pull`  
  - Dominadas, remos.

- `MovementPattern: olympic-lift`  
  - Cleans, snatches, jerks, usados para potencia.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `bjj_bout_duration_by_rank`

- **Descripción breve:** La duración del combate depende del cinturón.  
- **Tipo:** estructura competitiva  
- **Métrica principal:** minutos de combate  
- **Valores numéricos:**  
  - White belt: 5 min  
  - Blue belt: 6 min  
  - Purple belt: 7 min  
  - Brown belt: 8 min  
  - Black belt: 10 min  
  - Descanso mínimo entre combates: igual duración del combate  
  - Finales: descanso doble  
- **Condiciones de aplicación:**  
  - Programación específica por cinturón.  
- **Capítulos/páginas:** Introduction, p. 14; Table 1, p. 15.  
- **Comentarios/precauciones:**  
  - Usar para ajustar duración total de drills y volumen de torneo simulado.

---

### Regla: `bjj_time_motion_work_rest`

- **Descripción breve:** Los combates de BJJ muestran períodos largos de trabajo con pausas cortas.  
- **Tipo:** demanda temporal  
- **Métrica principal:** trabajo:descanso  
- **Valores numéricos:**  
  - Modelo 1: 117 s de trabajo / 20 s de pausa  
  - Modelo 2: 170 s de trabajo / 13 s de pausa  
  - Work:rest global reportado: ~6:1 y ~10:1  
  - Dentro del trabajo: high:low ~1:5  
  - Esfuerzos altos: 3–5 s  
  - Trabajo bajo: ~25 s  
- **Condiciones de aplicación:**  
  - Diseño de acondicionamiento específico BJJ.  
- **Capítulos/páginas:** Aerobic and Anaerobic Capacity, p. 14–15; Figure 1, p. 15.  
- **Comentarios/precauciones:**  
  - No todos los combates son iguales; usar como modelo central.

---

### Regla: `bjj_energy_system_contribution`

- **Descripción breve:** BJJ requiere base aeróbica y contribución glucolítica, con acciones decisivas vía ATP-PC.  
- **Tipo:** fisiología aplicada  
- **Métrica principal:** contribución energética cualitativa  
- **Valores numéricos:**  
  - A mayor cinturón/duración, mayor relevancia aeróbica.  
  - Lactato moderado a alto reportado en combates/simulaciones.  
- **Condiciones de aplicación:**  
  - Programación metabólica.  
- **Capítulos/páginas:** Aerobic and Anaerobic Capacity, p. 15.  
- **Comentarios/precauciones:**  
  - No usar solo sprints; se necesita capacidad aeróbica sostenida.

---

### Regla: `bjj_strength_relevance`

- **Descripción breve:** La fuerza máxima es relevante para grappling, aunque faltan datos directos de BJJ.  
- **Tipo:** cualidad física  
- **Métrica principal:** fuerza máxima/dinámica  
- **Valores numéricos:**  
  - No entrega números de 1RM.  
- **Condiciones de aplicación:**  
  - Entrenamiento de fuerza para BJJ.  
- **Capítulos/páginas:** Strength, p. 15.  
- **Comentarios/precauciones:**  
  - La fuerza también favorece potencia, endurance y resiliencia a lesiones.

---

### Regla: `bjj_power_decisive_actions`

- **Descripción breve:** La potencia es crucial en momentos decisivos cortos del combate.  
- **Tipo:** cualidad física  
- **Métrica principal:** esfuerzo máximo breve  
- **Valores numéricos:**  
  - Acciones intensas de 3–5 s.  
  - Sistema predominante: ATP-PC.  
- **Condiciones de aplicación:**  
  - Bloques de potencia y drills específicos.  
- **Capítulos/páginas:** Power, p. 15.  
- **Comentarios/precauciones:**  
  - Aunque no es el sistema energético dominante, define acciones clave.

---

### Regla: `bjj_periodization_mesocycle_structure`

- **Descripción breve:** Se recomienda periodización secuenciada con tres bloques.  
- **Tipo:** periodización  
- **Métrica principal:** semanas/mesociclo  
- **Valores numéricos:**  
  - Elite: mesociclo de 18 semanas, 3 bloques de 6 semanas.  
  - Subelite: mesociclo de 9 semanas, 3 bloques de 3 semanas.  
- **Condiciones de aplicación:**  
  - Atletas con competencia objetivo definida.  
- **Capítulos/páginas:** Periodization / Structure of the plan, p. 16.  
- **Comentarios/precauciones:**  
  - Cada bloque potencia el siguiente.

---

### Regla: `bjj_incremental_loading_unloading`

- **Descripción breve:** La carga aumenta progresivamente e incluye semanas de descarga.  
- **Tipo:** carga/descarga  
- **Métrica principal:** patrón semanal  
- **Valores numéricos:**  
  - Elite bloque 6 semanas: 4 semanas de incremento + 2 semanas de menor carga.  
  - Subelite bloque 3 semanas: 2 semanas de incremento + 1 semana de menor carga.  
- **Condiciones de aplicación:**  
  - Todo el mesociclo.  
- **Capítulos/páginas:** Periodization, p. 16; Figure 2, p. 16.  
- **Comentarios/precauciones:**  
  - No suprimir la descarga; permite adaptación.

---

### Regla: `bjj_block_priority_sequence`

- **Descripción breve:** Cada bloque tiene prioridades distintas para evitar interferencias.  
- **Tipo:** priorización  
- **Métrica principal:** ranking de prioridades  
- **Valores numéricos:**  
  - Block 1:  
    1. Hypertrophy  
    2. General conditioning  
    3. Technical  
    4. Tactical  
    5. Strength  
    6. Power  
  - Block 2:  
    1. Technical  
    2. Strength  
    3. Metabolically specific conditioning  
    4. Tactical  
    5. Power  
    6. Hypertrophy  
  - Block 3:  
    1. Tactical  
    2. Technical  
    3. Metabolically specific conditioning  
    4. Power  
    5. Strength  
    6. Hypertrophy  
- **Condiciones de aplicación:**  
  - Planificación completa BJJ.  
- **Capítulos/páginas:** Table 2, p. 16.  
- **Comentarios/precauciones:**  
  - Aunque una cualidad es prioritaria, otras se mantienen con dosis mínimas.

---

### Regla: `bjj_block1_hypertrophy_general_conditioning`

- **Descripción breve:** El bloque 1 enfatiza hipertrofia y acondicionamiento general.  
- **Tipo:** bloque de entrenamiento  
- **Métrica principal:** foco de fuerza y condicionamiento  
- **Valores numéricos:**  
  - Resistencia: hipertrofia como foco.  
  - Acondicionamiento: relación high:low 1:1 para énfasis oxidativo.  
  - Técnico/táctico: volumen relativamente bajo.  
- **Condiciones de aplicación:**  
  - Inicio de mesociclo.  
- **Capítulos/páginas:** Block 1, p. 16.  
- **Comentarios/precauciones:**  
  - Se incluyen cargas de mantenimiento de fuerza y potencia.

---

### Regla: `bjj_block1_general_conditioning_prescription`

- **Descripción breve:** Protocolo general metabólico basado en velocidad aeróbica máxima.  
- **Tipo:** acondicionamiento general  
- **Métrica principal:** MAS, series, frecuencia  
- **Valores numéricos:**  
  - Trabajo: 45 s al 100% MAS  
  - Recuperación activa: 45 s al 70% MAS  
  - Series: 4  
  - Descanso entre series: 0 s  
  - Duración total del drill: 6 min  
  - Recuperación entre drills: 1 min  
  - Frecuencia subelite 3 semanas: semana 1 = 3, semana 2 = 4, semana 3 = 3  
  - Frecuencia elite 6 semanas: semanas 1–2 = 3, semanas 3–4 = 4, semanas 5–6 = 3  
- **Condiciones de aplicación:**  
  - Block 1, todos los rangos.  
- **Capítulos/páginas:** Table 4, p. 18.  
- **Comentarios/precauciones:**  
  - ⚠️ La tabla original presenta ambigüedad en “repetitions of the drill”; la interpretación más segura es frecuencia semanal de sesiones, pero debe validarse con el documento original.

---

### Regla: `bjj_block2_strength_specific_conditioning`

- **Descripción breve:** El bloque 2 cambia a fuerza y acondicionamiento más específico.  
- **Tipo:** bloque de entrenamiento  
- **Métrica principal:** foco de fuerza y condicionamiento  
- **Valores numéricos:**  
  - Resistencia: fuerza como foco.  
  - Acondicionamiento: replica 117–170 s de trabajo con pausas cortas y relación high:low interna ~1:8 a 1:5.  
  - Técnico/táctico: aumentan volumen e intensidad.  
- **Condiciones de aplicación:**  
  - Mesociclo intermedio.  
- **Capítulos/páginas:** Block 2, p. 16–17.  
- **Comentarios/precauciones:**  
  - Las adaptaciones periféricas del conditioning se consideran compatibles con adaptaciones neurales de fuerza si se programan bien.

---

### Regla: `bjj_block2_specific_conditioning_prescription`

- **Descripción breve:** Drill específico por cinturón con complejos de resistencia y actividad cíclica.  
- **Tipo:** acondicionamiento específico  
- **Métrica principal:** duración, work:rest, repeticiones  
- **Valores numéricos:**  
  - White/blue:  
    - Duración total: 5:30  
    - Work:rest: 10:1  
    - Repeticiones: Block 2 = 2 veces; Block 3 = 4 veces  
  - Purple/brown:  
    - Duración total: 8:30  
    - Work:rest: 7.5:1  
  - Black:  
    - Duración total: 10:00  
    - Work:rest: 9:1  
  - Descanso entre sets: 30 s  
  - Recuperación entre drills: igual a la duración del drill  
  - Contenido de work periods con high:low 1:5:  
    - Resistance complex 1: 25 s back squat + 5 s hang power clean al 40% 1RM power clean  
    - Cyclic activity: 25 s al 80% MAS + 5 s esfuerzo máximo  
    - Resistance complex 2: 25 s reverse lunge + 5 s push jerk al 40% 1RM power clean  
- **Condiciones de aplicación:**  
  - Blocks 2 y 3.  
- **Capítulos/páginas:** Table 6, p. 19.  
- **Comentarios/precauciones:**  
  - Requiere competencia técnica en lifts.  
  - Si la técnica se degrada, reducir carga o cambiar modalidad.

---

### Regla: `bjj_conditioning_frequency_blocks_2_3`

- **Descripción breve:** La frecuencia de acondicionamiento varía por bloque y nivel.  
- **Tipo:** frecuencia  
- **Métrica principal:** sesiones/semana  
- **Valores numéricos:**  
  - Block 2 subelite: semana 1 = 2, semana 2 = 3, semana 3 = 2  
  - Block 2 elite: semanas 1–2 = 2, semanas 3–4 = 3, semanas 5–6 = 2  
  - Block 3 subelite: semana 1 = 1, semana 2 = 2, semana 3 = 1  
  - Block 3 elite: semanas 1–2 = 1, semanas 3–4 = 2, semanas 5–6 = 1  
- **Condiciones de aplicación:**  
  - Blocks 2 y 3.  
- **Capítulos/páginas:** Table 8, p. 20.  
- **Comentarios/precauciones:**  
  - En Block 3 baja frecuencia pero puede subir duración/especificidad.

---

### Regla: `bjj_block3_power_tactical`

- **Descripción breve:** El bloque 3 prioriza potencia, táctica y condición específica de competencia.  
- **Tipo:** bloque de entrenamiento  
- **Métrica principal:** foco de potencia/táctica  
- **Valores numéricos:**  
  - Resistencia: potencia neuromuscular máxima.  
  - Volumen de resistencia relativamente bajo.  
  - Conditioning específico se mantiene pero con menos frecuencia y mayor duración.  
- **Condiciones de aplicación:**  
  - Aproximación a torneo.  
- **Capítulos/páginas:** Block 3, p. 18–19.  
- **Comentarios/precauciones:**  
  - No añadir gran volumen nuevo cerca de competencia.

---

### Regla: `bjj_resistance_block1_loading`

- **Descripción breve:** Prescripción de fuerza para hipertrofia/base en bloque 1.  
- **Tipo:** resistencia / hipertrofia  
- **Métrica principal:** series, reps, %1RM  
- **Valores numéricos:**  
  - Ejercicios: power clean, push press, back squat, bench press, deadlift, shoulder press, row, single-arm DB press, single-leg squat, etc.  
  - Semanas 1–4: mayormente 10 reps con cargas ~60–75% 1RM.  
  - Semanas 5–6: 8 y 7 reps con ~65–75% 1RM.  
  - Mantenimiento fuerza/potencia: 5 reps al 85% 1RM en ejercicios seleccionados.  
- **Condiciones de aplicación:**  
  - Block 1.  
- **Capítulos/páginas:** Table 3, p. 17.  
- **Comentarios/precauciones:**  
  - Mantener técnica en lifts olímpicos aunque el foco sea hipertrofia/base.

---

### Regla: `bjj_resistance_block2_loading`

- **Descripción breve:** Prescripción de fuerza máxima en bloque 2.  
- **Tipo:** resistencia / fuerza  
- **Métrica principal:** reps, %1RM  
- **Valores numéricos:**  
  - Repeticiones principales: 5 reps.  
  - Día pesado: ~80–90% 1RM.  
  - Día medio: ~70–75% 1RM.  
  - Descarga hipertrofia: una serie adicional de 10 reps al 75% en ejercicios seleccionados.  
- **Condiciones de aplicación:**  
  - Block 2.  
- **Capítulos/páginas:** Table 5, p. 18.  
- **Comentarios/precauciones:**  
  - Mantener masa muscular sin acumular fatiga excesiva.

---

### Regla: `bjj_resistance_block3_loading`

- **Descripción breve:** Prescripción de potencia en bloque 3.  
- **Tipo:** resistencia / potencia  
- **Métrica principal:** ejercicios balísticos/olímpicos, %1RM  
- **Valores numéricos:**  
  - Depth jump: 0% carga  
  - Power clean: 85%, reducido a 40% en semana 6  
  - Push jerk: 80%, reducido a 40% en semana 6  
  - Jump squat: 30%  
  - Hang power snatch: 70–85%, reducido a 50% semanas 5–6  
  - Clean pull: 80%  
  - Bench/squat/chins: 85% en semanas principales  
  - Down sets: 10 reps al 75% semanas 1–4 para elite en algunos ejercicios  
- **Condiciones de aplicación:**  
  - Block 3.  
- **Capítulos/páginas:** Table 7, p. 20.  
- **Comentarios/precauciones:**  
  - Reducción de carga en semanas finales sugiere tapering de potencia.

---

### Regla: `bjj_tapering_volume_reduction`

- **Descripción breve:** El taper debe reducir volumen total, no solo eliminar fuerza.  
- **Tipo:** tapering  
- **Métrica principal:** reducción de volumen  
- **Valores numéricos:**  
  - Reducción de volumen: 40–60%  
  - Duración: 8–14 días antes de competencia  
  - Mantener algo de intensidad  
- **Condiciones de aplicación:**  
  - Precompetición.  
- **Capítulos/páginas:** Recovery Strategies, p. 20.  
- **Comentarios/precauciones:**  
  - Quitar solo resistencia training puede ser insuficiente para disipar fatiga.

---

### Regla: `bjj_cold_water_immersion_recovery`

- **Descripción breve:** La inmersión en agua fría puede ayudar a reducir marcadores de daño y mantener fuerza isométrica.  
- **Tipo:** recuperación  
- **Métrica principal:** modalidad de recuperación  
- **Valores numéricos:**  
  - No entrega temperatura, duración ni frecuencia exacta.  
- **Condiciones de aplicación:**  
  - Post-sesiones exigentes.  
- **Capítulos/páginas:** Recovery Strategies, p. 20.  
- **Comentarios/precauciones:**  
  - ⚠️ Sin parámetros exactos; usar como opción cualitativa, no como protocolo rígido.

---

### Regla: `bjj_dynamic_warmup_cooldown`

- **Descripción breve:** Calentamiento dinámico y cool-down aeróbico suave son recomendados.  
- **Tipo:** preparación/regresión de sesión  
- **Métrica principal:** tipo de calentamiento/enfriamiento  
- **Valores numéricos:**  
  - Cualitativo.  
- **Condiciones de aplicación:**  
  - Todas las sesiones y competencias.  
- **Capítulos/páginas:** Warm-up and Flexibility, p. 20.  
- **Comentarios/precauciones:**  
  - Priorizar movilidad dinámica y control motor sobre estiramientos pasivos largos si van antes de rendimiento.

---

### Regla: `bjj_rolling_specificity`

- **Descripción breve:** El open rolling largo y continuo puede no replicar intensidad de torneo.  
- **Tipo:** especificidad  
- **Métrica principal:** estructura de sparring  
- **Valores numéricos:**  
  - Open rolling típico: 30+ min con pausas mínimas.  
  - Torneo: esfuerzos más intensos con recuperación entre combates.  
- **Condiciones de aplicación:**  
  - Preparación específica.  
- **Capítulos/páginas:** Block 3 / Technical and tactical training, p. 19.  
- **Comentarios/precauciones:**  
  - Simular formato de torneo puede aumentar estrés psicológico deseado, pero debe controlarse.

---

### Regla: `bjj_competition_intensity_reference`

- **Descripción breve:** La competencia real puede exigir mayor frecuencia cardíaca que simulaciones.  
- **Tipo:** monitoreo de intensidad  
- **Métrica principal:** frecuencia cardíaca  
- **Valores numéricos:**  
  - Simulado: ~165–166 bpm  
  - Competición real: ~182 bpm reportado  
- **Condiciones de aplicación:**  
  - Interpretación de demandas competitivas.  
- **Capítulos/páginas:** Block 3, p. 18–19.  
- **Comentarios/precauciones:**  
  - No usar como zona universal; depende del atleta.

---

### Regla: `bjj_competition_stress_marker`

- **Descripción breve:** La competición oficial genera mayor estrés fisiológico/psicológico que sesiones simuladas.  
- **Tipo:** psicosocial  
- **Métrica principal:** cortisol como marcador indirecto  
- **Valores numéricos:**  
  - No se traducen a métrica de app.  
- **Condiciones de aplicación:**  
  - Considerar preparación mental y exposición progresiva a escenarios competitivos.  
- **Capítulos/páginas:** Block 3, p. 19.  
- **Comentarios/precauciones:**  
  - No medir cortisol en app; usar como justificación para simulacros estructurados.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `bjj-competition-preparation-mesocycle`

- **Disciplina:** BJJ / strength & conditioning  
- **Objetivo final:** Llegar a torneo con fuerza, potencia y acondicionamiento específico en punto óptimo, con fatiga disipada.  
- **Requisitos de seguridad previos:**  
  - Técnica básica suficiente en ejercicios olímpicos.  
  - Sin lesiones agudas no controladas.  
  - Capacidad de tolerar sesiones múltiples semanales.  
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Block 1: base/hipertrofia | Resistencia con énfasis hipertrofia + conditioning general 1:1 high:low | Completar 3 o 6 semanas con recuperación adecuada | Demasiada intensidad específica temprana | Block 1, p. 16; Table 3, p. 17; Table 4, p. 18 |
| 2 | Block 2: fuerza/especificidad | Fuerza como prioridad + conditioning específico por cinturón | Mantener fuerza, tolerar drills específicos y mayor rolling | Sobreentrenar fuerza + sparring sin descarga | Block 2, p. 16–17; Table 5, p. 18; Table 6, p. 19 |
| 3 | Block 3: potencia/táctica | Potencia, táctica, simulación de torneo y taper | Fatiga baja, potencia disponible, readiness competitiva | Mantener volumen alto cerca de competencia | Block 3, p. 18–19; Table 7, p. 20 |
| 4 | Taper | Reducción de volumen 40–60% por 8–14 días | Sensación de frescura y rendimiento estable | Eliminar solo fuerza y no bajar volumen global | Recovery Strategies, p. 20 |

- **Advertencias:**  
  - Los bloques son secuenciales; saltarse fases puede generar interferencias o fatiga excesiva.  
  - La semana/días de descarga no deben eliminarse.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Complejos metabólicos específicos

- **Cues principales:**  
  - Mantener técnica bajo fatiga.  
  - Cargas moderadas en complejos olímpicos.  
  - Transición rápida pero controlada entre ejercicios.  
- **Errores frecuentes:**  
  - Usar carga excesiva en hang power clean o push jerk.  
  - Degradar postura en back squat o reverse lunge.  
  - Convertir el drill en fuerza máxima en lugar de acondicionamiento específico.  
- **Variantes seguras:**  
  - Sustituir lifts por movimientos simples si la técnica falla.  
  - Reducir carga al 30–40% o menos si es necesario.  
- **Indicaciones específicas:**  
  - No usar complejos olímpicos con fatiga técnica severa.  
- **Páginas:** Table 6, p. 19.

---

### Intervalos basados en MAS

- **Cues principales:**  
  - Respetar porcentajes de MAS.  
  - No convertir 100% MAS en sprint descontrolado.  
  - Mantener ritmo consistente en series.  
- **Errores frecuentes:**  
  - Salir demasiado rápido y colapsar en la última serie.  
  - Recuperación activa demasiado intensa.  
- **Variantes seguras:**  
  - Sustituir carrera por bike/row si hay molestias de impacto.  
- **Páginas:** Table 4, p. 18.

---

### Rolling específico

- **Cues principales:**  
  - Simular duración de combate por cinturón.  
  - Mantener pausas reales entre rounds/matches.  
  - Iniciar con intención táctica clara.  
- **Errores frecuentes:**  
  - Open rolling largo y continuo como único estímulo competitivo.  
  - No controlar intensidad en semanas de taper.  
- **Variantes seguras:**  
  - Rounds más cortos con técnica controlada si hay fatiga alta.  
- **Páginas:** Block 3, p. 19.

---

### Fuerza y potencia

- **Cues principales:**  
  - Postura estable.  
  - Extensión completa en lifts balísticos cuando corresponda.  
  - Máxima intención de velocidad en fases de potencia.  
- **Errores frecuentes:**  
  - Fatiga acumulada que compromete técnica.  
  - Mantener volumen alto de fuerza en semana de taper.  
- **Variantes seguras:**  
  - Reducir carga y mantener calidad de movimiento.  
- **Páginas:** Tables 3, 5, 7; pp. 17, 18, 20.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Condición: riesgo de fatiga/lesión en BJJ

- **Zona:** full-body, lumbar, hombros, rodillas, dedos/agarres (implícito)  
- **Etiología resumida:**  
  - Alta frecuencia, colisiones, torsiones, agarres, volumen de sparring.  
- **Signos y síntomas clave:**  
  - No definidos por el paper.  
- **Stadia / fases:**  
  - No define fases clínicas.  
- **Protocolos de tratamiento o rehab:**  
  - No entrega protocolos clínicos.  
- **Ejercicios de prehab/movilidad específicos:**  
  - No entrega lista específica.  
  - Warm-up dinámico puede considerarse estrategia preventiva general.  
- **Umbrales de dolor o red flags:**  
  - No definidos.  
  - El sistema debería marcar como red flag: dolor agudo, inflamación, pérdida de fuerza, inestabilidad o dolor persistente que empeora con entrenamiento.  
- **Referencias:** Warm-up and Flexibility, p. 20; Recovery Strategies, p. 20.

---

## 7) Factores de estilo de vida

- **Nutrición:**  
  - El paper la menciona como importante pero fuera de alcance.  
  - No entregar reglas nutricionales desde este documento.  
- **Recuperación:**  
  - Tapering, descanso entre torneos, cool-down y cold water immersion son las principales herramientas mencionadas.  
- **Estrés competitivo:**  
  - La competencia oficial genera mayor estrés que simulaciones.  
  - Recomendación práctica: incluir simulacros con presión temporal y observadores.  
- **Sueño:**  
  - No abordado directamente, pero el sistema debería asumir higiene de sueño como recuperación básica.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**  
  - Fuente principal para reglas de BJJ: duración por cinturón, work:rest, drills metabólicos específicos, mesociclo de 3 bloques, tapering y frecuencias de acondicionamiento.  
  - Generación de plantillas de fuerza por bloques: hipertrofia, fuerza y potencia.  
  - Base para SkillPath de preparación de torneo BJJ.

- **Limitaciones:**  
  - Algunos datos de tablas pueden requerir validación por ambigüedad de formato.  
  - Asume acceso a medición de MAS y competencia en levantamientos olímpicos.  
  - No entrega protocolos de rehabilitación ni nutrición.  
  - No usar como fuente médica para tratar lesiones.

- **Recomendaciones específicas:**  
  - Crear `rules/bjj_conditioning.ts` con `bjj_time_motion_work_rest`, `bjj_block2_specific_conditioning_prescription` y `bjj_conditioning_frequency_blocks_2_3`.  
  - Crear `skillpaths/bjj-competition-preparation-mesocycle.ts` con Block 1, Block 2, Block 3 y taper.  
  - Añadir tipos `BJJRankProfile`, `BJJMesocycle` y `BJJConditioningDrill` al modelo de datos.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
¡Entendido! Como modelo de lenguaje, no puedo modificar directamente tu repositorio de código, pero **puedo generar los "Blueprints" (Interfaces de TypeScript, objetos JSON de reglas y estructuras de SkillPath)** listos para que los agentes de tu sistema los ingesten y los conviertan en código real.

Antes de proceder con la ejecución de las recomendaciones, he hecho una auditoría profunda del texto extraído (OCR) de los papers. Hay **ambigüedades críticas causadas por la falta de las tablas/figuras visuales originales** que debes conocer para asegurar la integridad de los datos.

---

### ⚠️ 1. Reporte de Ambigüedades y Ayudas Visuales Faltantes

#### A. Paper de BJJ (James, 2014) - *Tabla 6 (Acondicionamiento Específico Bloques 2 y 3)*
El OCR de esta tabla tiene errores graves que he logrado deducir matemáticamente, pero que **requieren tu validación visual** si tienes el PDF original a la mano:
1. **Duración del periodo de trabajo:** El OCR dice `3 5`. He deducido que significa **30 segundos** (compuesto por 25s de actividad baja/moderada + 5s de esfuerzo máximo, cumpliendo el ratio interno High:Low de 1:5 que menciona el texto).
2. **Número de Series (Sets of work periods):** El OCR muestra números sin sentido (`2`, `3`, `3`) en la columna de series. Matemáticamente, para alcanzar las duraciones totales con bloques de 30s + 30s de descanso:
   - **White/Blue (5:30 min = 330s):** Requieren **11 series** (el OCR dice `2`).
   - **Purple/Brown (8:30 min = 510s):** Requieren **17 series** (el OCR dice `3`).
   - **Black (10:00 min = 600s):** Requieren **20 series** (el OCR dice `3`).
3. **Work:Rest Ratio (10:1):** La tabla marca `10:1` para White/Blue. El texto aclara que el ratio *interno* es 1:5 (High:Low). El `10:1` probablemente se refiera a la proporción global de trabajo vs descanso que busca simular el torneo, o es un error tipográfico del paper original. *He estructurado las reglas basándome en la deducción matemática de los tiempos totales.*

#### B. Paper de Combat Sports (Ruddock et al., 2021) - *Figura 1 (Continuum)*
- La **Figura 1** mapea visualmente los métodos (SIT, HIIT, SET, BUFF) en un eje de adaptaciones "Centrales vs. Periféricas". El texto lo describe bien, pero si tu sistema usa un gráfico de radar o ejes X/Y para clasificar ejercicios, necesitarás la imagen original para calibrar los pesos exactos de cada método.

#### C. Paper de Próstata (Pearce et al., 2015)
- No hay pérdida de datos críticos. Las tablas 1 a 4 se extrajeron correctamente con sus coeficientes estadísticos.

---

### 🚀 2. Ejecución de Recomendaciones (Blueprints para el Sistema)

A continuación, entrego las estructuras de datos, reglas y progresiones en formato **TypeScript / JSON** para que tu motor de reglas y tu base de datos las adopten.

#### 📄 PAPER 1: Cáncer de Próstata (Vigilancia Activa)

**📁 `types/health-conditions.ts`**
```typescript
export interface ProstateActiveSurveillanceProfile {
  conditionId: 'prostate-cancer-as';
  age: number;
  psaBaseline: number;
  psaDensity: number;
  monthsOnActiveSurveillance: number;
  comorbidities: {
    diabetes: boolean;       // Predictor independiente de disfunción
    coronaryArteryDisease: boolean;
    hypertension: boolean;
  };
  metrics: {
    epic26SexualFunction?: number; // 0-100
    maxPCAnxiety?: number;         // 0-54
  };
}
```

**📁 `rules/medical-safety.json`**
```json
{
  "id": "prostate_as_medical_red_flag",
  "type": "safety_hard_stop",
  "description": "El deterioro sexual en AS es multifactorial (edad, diabetes, tiempo). Si hay caída abrupta o dolor pélvico, NO atribuir a fatiga de entrenamiento.",
  "triggers": [
    "user_reports_sudden_pelvic_pain",
    "user_reports_severe_luts",
    "epic26_delta > -10_points_in_1_month"
  ],
  "action": "HALT_PROGRESSION",
  "systemMessage": "Tus síntomas podrían estar relacionados con tu condición clínica y no con el entrenamiento. Por favor, consulta a tu urólogo antes de continuar con cargas altas.",
  "source": "Pearce et al., 2015 (Results & Discussion)"
}
```

---

#### 📄 PAPER 2: Combat Conditioning (Ruddock et al.)

**📁 `types/conditioning-methods.ts`**
```typescript
export type ConditioningMethod = 'SIT' | 'HIIT' | 'SET' | 'BUFF';

export interface ConditioningProtocol {
  method: ConditioningMethod;
  workDuration: string;       // ej. '<30s', '2-4min'
  restDuration: string;       // ej. '3-4min', '2min'
  intensityTarget: string;    // ej. 'RPE 10', '90% HRmax', '8-12 mmol/L'
  primaryAdaptation: 'central' | 'peripheral' | 'neuromuscular' | 'buffering';
  recommendedPhase: 'general-prep' | 'special-prep' | 'early-camp' | 'late-camp';
  interferenceRiskWithHypertrophy: boolean; // True para SIT/BUFF si no se separan 36h
}
```

**📁 `rules/combat-tapering.json`**
```json
{
  "id": "combat_taper_40_60_volume",
  "type": "peaking",
  "description": "Protocolo de tapering para deportes de combate. Reducir volumen manteniendo intensidad para disipar fatiga neuromuscular por colisiones.",
  "metric": "weeklyVolumeReductionPct",
  "optimalRange": [40, 60],
  "timeWindowDaysBeforeEvent": [8, 12],
  "conditions": {
    "phase": "late-camp",
    "sportType": "combat"
  },
  "action": "ADJUST_WEEKLY_VOLUME",
  "source": "Ruddock et al., 2021 (Section 5.4)"
}
```

**📁 `rules/concurrent-interference.json`**
```json
{
  "id": "combat_strength_conditioning_separation",
  "type": "scheduling",
  "description": "Separar fuerza (hipertrofia) y acondicionamiento intenso (SIT/BUFF) para evitar interferencia molecular (p53 / biogénesis ribosomal).",
  "metric": "hoursBetweenSessions",
  "minimumThreshold": 36,
  "conditions": {
    "focus1": "hypertrophy",
    "focus2": ["SIT", "BUFF"]
  },
  "source": "Ruddock et al., 2021 (Section 7)"
}
```

---

#### 📄 PAPER 3: BJJ Training Plan (James, 2014)

**📁 `types/bjj-profile.ts`**
```typescript
export type BJJRank = 'white' | 'blue' | 'purple' | 'brown' | 'black';

export interface BJJMesocycleConfig {
  level: 'elite' | 'subelite';
  totalWeeks: number;         // 18 (elite) | 9 (subelite)
  blockDurationWeeks: number; // 6 (elite) | 3 (subelite)
  unloadWeeksPerBlock: number;// 2 (elite) | 1 (subelite)
  boutDurationMin: number;    // 5, 6, 7, 8, 10 según rango
}
```

**📁 `rules/bjj-demand-profile.json`**
```json
{
  "id": "bjj_time_motion_model",
  "type": "sport_demand",
  "description": "Modelo de demanda energética para generación de drills metabólicos específicos de BJJ.",
  "parameters": {
    "macroWorkDurationSec": [117, 170],
    "macroRestDurationSec": [13, 20],
    "internalHighIntensityBurstSec": [3, 5],
    "internalLowIntensitySec": [25],
    "internalHighLowRatio": "1:5"
  },
  "source": "James, 2014 (Aerobic and Anaerobic Capacity)"
}
```

**📁 `rules/bjj-specific-drill-generator.json`**
```json
{
  "id": "bjj_block23_conditioning_prescription",
  "type": "drill_template",
  "description": "Generador de drills específicos por cinturón para Bloques 2 y 3. (Nota: Series deducidas matemáticamente por el OCR de la Tabla 6).",
  "drills": [
    {
      "targetBelts": ["white", "blue"],
      "totalDuration": "5:30",
      "workBlockSec": 30,
      "restBetweenBlocksSec": 30,
      "requiredSets": 11,
      "repetitionsPerSession": {"block2": 2, "block3": 4}
    },
    {
      "targetBelts": ["purple", "brown"],
      "totalDuration": "8:30",
      "workBlockSec": 30,
      "restBetweenBlocksSec": 30,
      "requiredSets": 17,
      "repetitionsPerSession": {"block2": 2, "block3": 4}
    },
    {
      "targetBelts": ["black"],
      "totalDuration": "10:00",
      "workBlockSec": 30,
      "restBetweenBlocksSec": 30,
      "requiredSets": 20,
      "repetitionsPerSession": {"block2": 2, "block3": 4}
    }
  ],
  "workBlockComposition": [
    {"exercise": "Resistance Complex 1 (e.g., Squat + Clean)", "durationSec": 30, "intensity": "40% 1RM"},
    {"exercise": "Cyclical Activity (e.g., Bike/Row)", "durationSec": 30, "intensity": "80% MAS + 5s Max"}
  ],
  "source": "James, 2014 (Table 6)"
}
```

**📁 `skillpaths/bjj-competition-mesocycle.json`**
```json
{
  "id": "bjj-competition-preparation-mesocycle",
  "name": "Periodización Secuencial BJJ",
  "discipline": "Grappling / S&C",
  "objective": "Maximizar potencia y acondicionamiento específico disipando fatiga para el día del torneo.",
  "prerequisites": ["Dominio técnico de lifts olímpicos básicos", "Sin lesiones agudas"],
  "steps": [
    {
      "step": 1,
      "name": "Bloque 1: Base e Hipertrofia",
      "focus": ["Hipertrofia", "Acondicionamiento General (1:1 Hi:Lo)"],
      "durationWeeks": {"elite": 6, "subelite": 3},
      "volumeTrend": "Alto (4/2 o 2/1 loading/unloading)",
      "criteriaToAdvance": "Tolerancia al volumen, mejora de masa magra, base aeróbica establecida.",
      "interferenceWarning": "Separar cardio de pesas si hay dolor articular."
    },
    {
      "step": 2,
      "name": "Bloque 2: Fuerza Máxima y Especificidad",
      "focus": ["Fuerza Máxima (SNC)", "Acondicionamiento Específico (Ratio 1:5)"],
      "durationWeeks": {"elite": 6, "subelite": 3},
      "volumeTrend": "Moderado-Alto",
      "criteriaToAdvance": "Mantenimiento de masa muscular, capacidad de tolerar drills de 5-10 min con ratio 1:5."
    },
    {
      "step": 3,
      "name": "Bloque 3: Potencia y Táctica",
      "focus": ["Potencia Neuromuscular", "Simulación de Torneo", "Táctica"],
      "durationWeeks": {"elite": 6, "subelite": 3},
      "volumeTrend": "Bajo (Alta intensidad, baja fatiga)",
      "criteriaToAdvance": "Readiness competitiva, frescura del SNC."
    },
    {
      "step": 4,
      "name": "Tapering Pre-Competencia",
      "focus": ["Disipación de Fatiga", "Mantenimiento de Intensidad"],
      "durationDays": [8, 14],
      "action": "REDUCIR_VOLUMEN_GLOBAL_40_60_PCT",
      "warning": "NO eliminar solo las pesas. El volumen global (técnico + físico) debe caer."
    }
  ],
  "source": "James, 2014 (The Training Plan)"
}
```

---

### 📝 Siguientes Pasos para tu Pipeline

1. **Validación Humana:** Revisa la **Tabla 6 del paper de BJJ** en el PDF original. Si mi deducción matemática (11, 17 y 20 series) es correcta, los JSONs de arriba son 100% precisos. Si el paper original dice otra cosa, avísame y ajusto el JSON `bjj_block23_conditioning_prescription`.
2. **Ingesta por Agentes:** 
   - Pasa los archivos `.ts` a tu agente de **Modelado de Datos** para que actualice el esquema de la base de datos.
   - Pasa los archivos `.json` de reglas a tu agente de **Motor de Reglas** para que las registre en el `TrainingRuleEngine`.
   - Pasa el `skillpaths/bjj-competition-mesocycle.json` a tu agente de **Gamificación/Progresión** para que lo enlace a los usuarios con perfil `grappler`.

¿Deseas que profundice en algún otro paper o que genere los "Cues Técnicos" (Sección 5) para los ejercicios complejos de BJJ (como el *Resistance Complex 1*) basándome en literatura de fuerza complementaria?

---

## Ronda 3 — tras: «A continuación muestro la extracción detallada y validación matemática/visual de los dos documentos.  ---  ### A. Paper de BJJ (James, 2…»
Sí, recibido y entendido. Con esta validación matemática/visual quedan resueltas las ambigüedades críticas de:

1. **James 2014 – Tabla 6**: estructura exacta de sets, bloques de 30 s, pausas, duración total, work:rest ratio y repeticiones por bloque.
2. **Ruddock et al. 2021 – Figura 1**: ubicación de SIT, SET, BUFF e HIIT en el continuo central ↔ periférico.

A continuación dejo la **actualización lista para implementación** en Plan Maestro OS, en formato de blueprint para tipos, reglas, validaciones y metadatos.

---

# Actualización de extracción validada

## 1) Correcciones clave que quedan incorporadas

### 1.1 Corrección sobre BJJ — Tabla 6

La interpretación previa basada en “series totales equivalentes” queda **reemplazada** por la estructura real validada:

- Cada **work period** dura **30 segundos**.
- Cada work period contiene:
  - **25 s** de esfuerzo bajo/moderado.
  - **5 s** de esfuerzo máximo.
  - Ratio interno **High:Low = 1:5**.
- La estructura del drill se organiza por:
  - **Sets**.
  - **Bloques de 30 s por set**.
  - **Descanso de 30 s entre sets**.
- Las duraciones totales y ratios globales son:
  - **White/Blue**: 5:30 total, work:rest = 10:1.
  - **Purple/Brown**: 8:30 total, work:rest = 7.5:1.
  - **Black**: 10:00 total, work:rest = 9:1.
- Repeticiones del drill:
  - **Block 2**: 2 veces.
  - **Block 3**: 4 veces.
- Recuperación entre repeticiones del drill:
  - Igual a la duración total del drill.

Fuente: James, L. P. (2014). *An Evidenced-Based Training Plan for Brazilian Jiu-Jitsu*, Table 6, p. 19.

---

### 1.2 Corrección sobre Combat Sports — Figura 1

La Figura 1 de Ruddock et al. se interpreta como un **continuo fisiológico**, no como categorías completamente discretas.

Eje del continuo:

```text
[CENTRAL / CARDIOVASCULAR] <------------------------------> [PERIFÉRICO / NEUROMUSCULAR]
        HIIT                         BUFF                        SET                       SIT
```

Posición cualitativa validada:

| Método | Posición en el continuo | Dominancia principal |
|---|---:|---|
| HIIT | Polo central | Cardiovascular / central |
| BUFF | Zona intermedia | Buffer metabólico, demanda mixta |
| SET | Zona periférica fuerte | Neuromuscular / iónico |
| SIT | Polo periférico máximo | Neuromuscular / miocítico |

Fuente: Ruddock, A. et al. (2021). *High-Intensity Conditioning for Combat Athletes: Practical Recommendations*, Figure 1, p. 9; Sections 6.1–6.5, pp. 8–10.

---

# 2) Blueprint actualizado para BJJ

## 2.1 Nuevo tipo / extensión de entidad

Archivo sugerido:

```text
types/bjj-conditioning.ts
```

### `BJJSpecificConditioningDrill`

```ts
export type BJJRank =
  | 'white'
  | 'blue'
  | 'purple'
  | 'brown'
  | 'black';

export type BJJRankGroup =
  | 'white-blue'
  | 'purple-brown'
  | 'black';

export interface BJJWorkBlock {
  durationSec: 30;
  lowModerateSec: 25;
  maxEffortSec: 5;
  highLowRatio: '1:5';
}

export interface BJJConditioningSet {
  name:
    | 'resistance-complex-1'
    | 'cyclical-activity'
    | 'resistance-complex-2';
  blocks: number;
}

export interface BJJConditioningComputedLoad {
  workBlocks: number;
  workSec: number;
  restPauses: number;
  restSec: number;
  totalSec: number;
  totalClock: string;
  workRestRatio: string;
}

export interface BJJSpecificConditioningDrill {
  drillId: string;
  beltGroup: BJJRankGroup;
  coversBelts: BJJRank[];
  workBlock: BJJWorkBlock;
  sets: BJJConditioningSet[];
  restBetweenSetsSec: 30;
  computed: BJJConditioningComputedLoad;
  repetitions: {
    block2: 2;
    block3: 4;
  };
  recoveryBetweenDrillsSec: number;
}
```

---

## 2.2 Regla canónica para TrainingRule

Archivo sugerido:

```text
rules/bjj_specific_conditioning.ts
```

### `bjj_block23_specific_conditioning_v2`

```json
{
  "id": "bjj_block23_specific_conditioning_v2",
  "name": "BJJ physiologically specific conditioning — Blocks 2 and 3",
  "source": {
    "paper": "James, L. P. (2014). An Evidenced-Based Training Plan for Brazilian Jiu-Jitsu",
    "table": "Table 6",
    "page": 19
  },
  "appliesTo": {
    "sport": "bjj",
    "focus": [
      "conditioning",
      "anaerobic-power",
      "strength-endurance",
      "competition-specific"
    ],
    "trainingBlocks": [2, 3]
  },
  "workBlock": {
    "durationSec": 30,
    "lowModerateSec": 25,
    "maxEffortSec": 5,
    "highLowRatio": "1:5"
  },
  "drills": [
    {
      "drillId": "bjj-specific-conditioning-white-blue",
      "beltGroup": "white-blue",
      "coversBelts": ["white", "blue"],
      "sets": [
        {
          "name": "resistance-complex-1",
          "blocks": 5
        },
        {
          "name": "cyclical-activity",
          "blocks": 5
        }
      ],
      "restBetweenSetsSec": 30,
      "computed": {
        "workBlocks": 10,
        "workSec": 300,
        "restPauses": 1,
        "restSec": 30,
        "totalSec": 330,
        "totalClock": "5:30",
        "workRestRatio": "10:1"
      },
      "repetitions": {
        "block2": 2,
        "block3": 4
      },
      "recoveryBetweenDrillsSec": 330
    },
    {
      "drillId": "bjj-specific-conditioning-purple-brown",
      "beltGroup": "purple-brown",
      "coversBelts": ["purple", "brown"],
      "sets": [
        {
          "name": "resistance-complex-1",
          "blocks": 5
        },
        {
          "name": "cyclical-activity",
          "blocks": 5
        },
        {
          "name": "resistance-complex-2",
          "blocks": 5
        }
      ],
      "restBetweenSetsSec": 30,
      "computed": {
        "workBlocks": 15,
        "workSec": 450,
        "restPauses": 2,
        "restSec": 60,
        "totalSec": 510,
        "totalClock": "8:30",
        "workRestRatio": "7.5:1"
      },
      "repetitions": {
        "block2": 2,
        "block3": 4
      },
      "recoveryBetweenDrillsSec": 510
    },
    {
      "drillId": "bjj-specific-conditioning-black",
      "beltGroup": "black",
      "coversBelts": ["black"],
      "sets": [
        {
          "name": "resistance-complex-1",
          "blocks": 6
        },
        {
          "name": "cyclical-activity",
          "blocks": 6
        },
        {
          "name": "resistance-complex-2",
          "blocks": 6
        }
      ],
      "restBetweenSetsSec": 30,
      "computed": {
        "workBlocks": 18,
        "workSec": 540,
        "restPauses": 2,
        "restSec": 60,
        "totalSec": 600,
        "totalClock": "10:00",
        "workRestRatio": "9:1"
      },
      "repetitions": {
        "block2": 2,
        "block3": 4
      },
      "recoveryBetweenDrillsSec": 600
    }
  ],
  "exerciseContent": {
    "resistance-complex-1": [
      {
        "exercise": "back-squat",
        "durationSec": 25
      },
      {
        "exercise": "hang-power-clean",
        "durationSec": 5,
        "loadReference": "40% of 1RM power clean"
      }
    ],
    "cyclical-activity": [
      {
        "mode": "cyclic",
        "durationSec": 25,
        "intensityReference": "80% MAS"
      },
      {
        "exercise": "maximal-effort",
        "durationSec": 5,
        "intensityReference": "all-out"
      }
    ],
    "resistance-complex-2": [
      {
        "exercise": "reverse-lunge",
        "durationSec": 25
      },
      {
        "exercise": "push-jerk",
        "durationSec": 5,
        "loadReference": "40% of 1RM power clean"
      }
    ]
  }
}
```

---

## 2.3 Validaciones matemáticas recomendadas

Estas validaciones deberían implementarse como tests automáticos para evitar que futuros agentes alteren la estructura sin romper la lógica del paper.

### Reglas de validación

```ts
function validateBJJSpecificDrill(drill: BJJSpecificConditioningDrill) {
  const workBlockSec = 30;

  const workBlocks = drill.sets.reduce((acc, set) => acc + set.blocks, 0);

  const expectedWorkSec = workBlocks * workBlockSec;

  const expectedRestPauses = drill.sets.length - 1;

  const expectedRestSec = expectedRestPauses * drill.restBetweenSetsSec;

  const expectedTotalSec = expectedWorkSec + expectedRestSec;

  const expectedWorkRestRatio = expectedWorkSec / expectedRestSec;

  return {
    workBlocks,
    expectedWorkSec,
    expectedRestPauses,
    expectedRestSec,
    expectedTotalSec,
    expectedWorkRestRatio,
    recoveryBetweenDrillsSec: expectedTotalSec
  };
}
```

### Valores esperados

| Belt group | Sets | Blocks/set | Total blocks | Work sec | Rest sec | Total sec | Ratio |
|---|---:|---:|---:|---:|---:|---:|---:|
| White/Blue | 2 | 5 | 10 | 300 | 30 | 330 | 10:1 |
| Purple/Brown | 3 | 5 | 15 | 450 | 60 | 510 | 7.5:1 |
| Black | 3 | 6 | 18 | 540 | 60 | 600 | 9:1 |

### Validación del work period interno

```text
Cada bloque de 30 s debe contener:
- 25 s low/moderate
- 5 s max effort

High:Low = 5:25 = 1:5
```

---

## 2.4 Mapeo a entidades existentes

### `FocusId`

```text
conditioning
anaerobic-power
strength-endurance
competition-preparation
```

### `BodyZoneId`

```text
full-body
```

Subzonas implícitas:

```text
lumbar
hip
shoulder
grip
```

Pero el paper no prescribe prehab específica por zona, así que se recomienda mantener `full-body` como principal.

### `MovementPattern`

```text
grappling
squat
hinge
upper-push
upper-pull
olympic-lift
cyclic-conditioning
```

---

# 3) Blueprint actualizado para Combat Conditioning

## 3.1 Nuevo tipo / extensión de entidad

Archivo sugerido:

```text
types/combat-conditioning-method.ts
```

### `CombatConditioningMethodProfile`

```ts
export type ConditioningMethod =
  | 'HIIT'
  | 'BUFF'
  | 'SET'
  | 'SIT';

export type ConditioningAxisPosition =
  | 'central-dominant'
  | 'balanced-intermediate'
  | 'peripheral-dominant'
  | 'peripheral-max';

export interface ConditioningContinuumWeights {
  central: number;
  peripheral: number;
  note?: string;
}

export interface CombatConditioningMethodProfile {
  method: ConditioningMethod;
  continuumAxis: 'central-to-peripheral';
  qualitativePosition: ConditioningAxisPosition;
  implementationWeights?: ConditioningContinuumWeights;
  primaryTarget: string;
  workDuration: string;
  intensity: string;
  example: string;
  adaptations: string[];
  recommendedPhase?: string;
  source: {
    paper: string;
    section: string;
    figure?: string;
    pages: string;
  };
}
```

---

## 3.2 Regla canónica del continuo

Archivo sugerido:

```text
rules/combat_conditioning_continuum.ts
```

### `combat_conditioning_continuum_v1`

```json
{
  "id": "combat_conditioning_continuum_v1",
  "name": "High-intensity conditioning continuum",
  "source": {
    "paper": "Ruddock, A. et al. (2021). High-Intensity Conditioning for Combat Athletes: Practical Recommendations",
    "figure": "Figure 1",
    "sections": [
      "6.1 Defining Training Type",
      "6.2 Sprint Interval Training",
      "6.3 High-Intensity Interval Training",
      "6.4 Muscle Buffer Training",
      "6.5 Speed Endurance Training"
    ],
    "pages": "8-10"
  },
  "axis": {
    "left": "central-cardiovascular",
    "right": "peripheral-neuromuscular"
  },
  "methods": [
    {
      "method": "HIIT",
      "qualitativePosition": "central-dominant",
      "implementationWeights": {
        "central": 0.9,
        "peripheral": 0.1,
        "note": "Pesos propuestos para implementación/UI. La figura original describe dominancia cualitativa, no pesos numéricos publicados."
      },
      "primaryTarget": "Central cardiovascular adaptations: cardiac output, stroke volume, blood volume, capillarization, mitochondrial function, ventricular compliance",
      "workDuration": "2-20 min intervals",
      "intensity": "ISO-RPE 9/10, ~90% HRmax, or 90-95% VO2max",
      "example": "4 x 8 min with 2 min recovery",
      "adaptations": [
        "increased blood volume",
        "increased red cell mass",
        "improved capillarization",
        "improved mitochondrial function and volume",
        "improved ventricular compliance",
        "left ventricular hypertrophy"
      ],
      "recommendedPhase": "special-preparation",
      "source": {
        "section": "6.3 High-Intensity Interval Training",
        "pages": "9"
      }
    },
    {
      "method": "BUFF",
      "qualitativePosition": "balanced-intermediate",
      "implementationWeights": {
        "central": 0.5,
        "peripheral": 0.5,
        "note": "Pesos propuestos para implementación/UI. La figura original lo ubica como zona intermedia entre demanda central y periférica."
      },
      "primaryTarget": "Muscle buffering capacity against H+ accumulation",
      "workDuration": "~2 min intervals",
      "intensity": "ISO-RPE 8/10, blood lactate 8-12 mmol/L",
      "example": "6 x 2 min with 3 min recovery; effective protocol: 6-12 reps, 3 sessions/week for 8 weeks",
      "adaptations": [
        "improved sodium-hydrogen exchangers",
        "improved sodium-bicarbonate co-transporters",
        "improved blood bicarbonate buffering",
        "enhanced tolerance to high-intensity glycolytic work"
      ],
      "recommendedPhase": "pre-competition or specific preparation",
      "source": {
        "section": "6.4 Muscle Buffer Training",
        "pages": "9-10"
      }
    },
    {
      "method": "SET",
      "qualitativePosition": "peripheral-dominant",
      "implementationWeights": {
        "central": 0.3,
        "peripheral": 0.7,
        "note": "Pesos propuestos para implementación/UI. La figura original lo ubica con fuerte dominancia periférica/neuromuscular."
      },
      "primaryTarget": "Neuromuscular function under acidosis, Na+-K+ pump capability",
      "workDuration": "30-60 s intervals",
      "intensity": "ISO-RPE 9/10",
      "example": "8 x 30 s with 3 min recovery; up to 10 repetitions",
      "adaptations": [
        "increased Na+-K+ pump alpha-1 and alpha-2 subunits",
        "reduced muscle interstitial K+ during exercise",
        "improved membrane potential maintenance",
        "improved neuromuscular activation under acidosis"
      ],
      "recommendedPhase": "specific preparation / pre-competition",
      "source": {
        "section": "6.5 Speed Endurance Training",
        "pages": "10"
      }
    },
    {
      "method": "SIT",
      "qualitativePosition": "peripheral-max",
      "implementationWeights": {
        "central": 0.1,
        "peripheral": 0.9,
        "note": "Pesos propuestos para implementación/UI. La figura original lo ubica en el extremo periférico máximo."
      },
      "primaryTarget": "Myocellular and neuromuscular adaptations, oxidative enzyme function, mitochondrial biogenesis signaling",
      "workDuration": "<30 s all-out",
      "intensity": "RPE 10/10 maximal exertion",
      "example": "30 s maximal sprints on cycle ergometer, non-motorized treadmill, hill, track, rowing, ski erg or versa climber",
      "adaptations": [
        "increased oxidative enzyme content and function",
        "improved time to exhaustion",
        "high Ca2+ release demand from sarcoplasmic reticulum",
        "rapid cross-bridge cycling",
        "high glycolytic flux",
        "PGC-1alpha mediated mitochondrial biogenesis signaling"
      ],
      "recommendedPhase": "general preparation / start of camp",
      "source": {
        "section": "6.2 Sprint Interval Training",
        "pages": "8-9"
      }
    }
  ]
}
```

---

## 3.3 Reglas TrainingRule derivadas del continuo

### Regla: `combat_method_selection_by_phase`

```json
{
  "id": "combat_method_selection_by_phase",
  "type": "method-selection",
  "description": "Selecciona métodos de acondicionamiento según la fase de preparación y el objetivo fisiológico dominante.",
  "rules": [
    {
      "phase": "general-preparation",
      "preferredMethods": ["SIT", "recovery-endurance"],
      "rationale": "SIT permite adaptaciones rápidas periféricas/oxidativas sin conflicto excesivo con otras cargas; se puede programar con menor especificidad deportiva."
    },
    {
      "phase": "special-preparation",
      "preferredMethods": ["HIIT", "sport-specific-intervals"],
      "rationale": "HIIT desarrolla adaptaciones centrales y capacidad de sostener VO2 alto, mientras aumenta la especificidad deportiva."
    },
    {
      "phase": "pre-competition",
      "preferredMethods": ["BUFF", "SET", "sport-specific-sparring"],
      "rationale": "Se prioriza tolerancia metabólica, función neuromuscular bajo acidosis y especificidad competitiva."
    },
    {
      "phase": "late-camp",
      "preferredMethods": ["SET", "speed-endurance", "tactical-sparring"],
      "rationale": "Mantener intensidad, reducir volumen y disipar fatiga mediante tapering."
    }
  ],
  "source": {
    "paper": "Ruddock et al., 2021",
    "sections": [
      "5. Periodization of High-Intensity Conditioning",
      "6. Physiological Targets of High-Intensity Conditioning"
    ],
    "pages": "5-10"
  }
}
```

---

### Regla: `combat_continuum_load_warning`

```json
{
  "id": "combat_continuum_load_warning",
  "type": "safety",
  "description": "Métodos más periféricos generan mayor carga neuromuscular/mecánica y deben vigilarse con mayor cuidado.",
  "methodRiskRanking": [
    {
      "method": "SIT",
      "neuromuscularLoad": "very-high",
      "monitoring": [
        "neuromuscular-fatigue",
        "muscle-soreness",
        "joint-pain",
        "sprint-quality-drop"
      ]
    },
    {
      "method": "SET",
      "neuromuscularLoad": "high",
      "monitoring": [
        "technique-breakdown",
        "fatigue",
        "recovery-status"
      ]
    },
    {
      "method": "BUFF",
      "metabolicLoad": "high",
      "neuromuscularLoad": "moderate",
      "monitoring": [
        "lactate-tolerance",
        "session-rpe",
        "recovery-status"
      ]
    },
    {
      "method": "HIIT",
      "cardiovascularLoad": "high",
      "neuromuscularLoad": "low-to-moderate",
      "monitoring": [
        "heart-rate",
        "session-rpe",
        "aerobic-fatigue"
      ]
    }
  ],
  "source": {
    "paper": "Ruddock et al., 2021",
    "figure": "Figure 1",
    "page": 9
  }
}
```

---

# 4) Actualización de SkillPath / SkillStep

## 4.1 BJJ: actualización del paso de condicionamiento específico

Dentro del SkillPath:

```text
bjj-competition-preparation-mesocycle
```

El paso correspondiente a **Block 2 / Block 3** debe actualizarse con esta metadata.

```json
{
  "stepName": "Block 2 / Block 3 — Physiologically specific conditioning",
  "associatedDrillGenerator": "bjj_block23_specific_conditioning_v2",
  "executionGuidelines": {
    "workBlock": "30 s total: 25 s low/moderate + 5 s maximal",
    "internalRatio": "High:Low = 1:5",
    "beltScaling": {
      "white-blue": "2 sets, 5 blocks per set, total 5:30",
      "purple-brown": "3 sets, 5 blocks per set, total 8:30",
      "black": "3 sets, 6 blocks per set, total 10:00"
    },
    "repetitions": {
      "block2": 2,
      "block3": 4
    },
    "recoveryBetweenDrills": "equal to total drill duration"
  },
  "technicalConstraints": [
    "Do not perform resistance complexes with technical breakdown",
    "Reduce load or replace Olympic lift variants if movement quality deteriorates",
    "Maintain maximal effort only in the final 5 s of each block"
  ],
  "source": {
    "paper": "James, L. P. (2014)",
    "table": "Table 6",
    "page": 19
  }
}
```

---

## 4.2 Combat: metadata para selección de método

Dentro de un SkillPath de acondicionamiento para combate, cada método puede convertirse en un `SkillStep` o módulo:

```json
{
  "skillPathId": "combat-high-intensity-conditioning-methods",
  "steps": [
    {
      "stepId": "hiit-central-development",
      "method": "HIIT",
      "goal": "Develop central cardiovascular capacity",
      "position": "central-dominant",
      "parameters": {
        "intervalDuration": "2-20 min",
        "intensity": "RPE 9/10, 90% HRmax or 90-95% VO2max",
        "example": "4 x 8 min, 2 min rest"
      }
    },
    {
      "stepId": "buff-metabolic-buffering",
      "method": "BUFF",
      "goal": "Improve muscle buffering and repeated high-intensity tolerance",
      "position": "balanced-intermediate",
      "parameters": {
        "intervalDuration": "~2 min",
        "intensity": "RPE 8/10, lactate 8-12 mmol/L",
        "example": "6 x 2 min, 3 min rest"
      }
    },
    {
      "stepId": "set-neuromuscular-endurance",
      "method": "SET",
      "goal": "Maintain neuromuscular output under acidosis",
      "position": "peripheral-dominant",
      "parameters": {
        "intervalDuration": "30-60 s",
        "intensity": "RPE 9/10",
        "example": "8 x 30 s, 3 min rest"
      }
    },
    {
      "stepId": "sit-peripheral-oxidative-neuromuscular",
      "method": "SIT",
      "goal": "Develop maximal peripheral/myocellular stimulus",
      "position": "peripheral-max",
      "parameters": {
        "intervalDuration": "<30 s",
        "intensity": "RPE 10/10 all-out",
        "example": "30 s maximal sprint"
      }
    }
  ]
}
```

---

# 5) Recomendaciones finales de implementación

## 5.1 Para BJJ

Reemplazar cualquier regla previa llamada:

```text
bjj_block23_conditioning_prescription
```

por:

```text
bjj_block23_specific_conditioning_v2
```

### Motivo

La versión previa podía interpretarse como número total de rondas. La versión nueva refleja exactamente:

- Sets.
- Bloques por set.
- Duración total.
- Work:rest ratio.
- Repeticiones por bloque.
- Recuperación entre drills.

### Archivos recomendados

```text
types/bjj-conditioning.ts
rules/bjj_specific_conditioning.ts
skillpaths/bjj-competition-preparation-mesocycle.ts
tests/bjj-conditioning-validation.test.ts
```

---

## 5.2 para Combat Conditioning

Añadir al motor de condicionamiento:

```text
rules/combat_conditioning_continuum.ts
```

Y usarlo para:

- Selección de método por fase.
- Visualización del continuo central/periférico.
- advertencias de carga neuromuscular.
- recomendación de modalidad según historial de lesiones.

### Archivos recomendados

```text
types/combat-conditioning-method.ts
rules/combat_conditioning_continuum.ts
rules/combat_method_selection_by_phase.ts
ui/conditioning-continuum-config.json
```

---

# 6) Estado final de la extracción

## BJJ — James 2014

Quedan completamente resueltos:

- Duración por cinturón.
- Work:rest macro.
- High:Low interno.
- Estructura exacta de Tabla 6.
- Contenido de los complejos.
- Repeticiones por bloque.
- Recuperación entre drills.

No quedan ambigüedades críticas para implementar el generador de drills específicos.

---

## Combat Sports — Ruddock et al. 2021

Quedan completamente resueltos:

- Definición de SIT.
- Definición de HIIT.
- Definición de SET.
- Definición de BUFF.
- Posición en el continuo central/periférico.
- Adaptaciones principales.
- Ejemplos de prescripción.
- Relación con fases de preparación.

No queda ninguna ambigüedad crítica para implementar el motor de selección de métodos.

---

## Prostate Cancer — Pearce et al. 2015

No requiere actualización por esta validación.

Su uso sigue siendo:

- Contexto médico.
- Flags de riesgo.
- Seguridad clínica.
- No prescripción de ejercicio.
