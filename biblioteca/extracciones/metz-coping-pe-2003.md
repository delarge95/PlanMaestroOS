# metz-coping-pe-2003 — Extracción recuperada de chat

> **sourceId:** `metz-coping-pe-2003` · **origen:** `chat-export-1787414884858` (Plan Maestro OS — Extracción de Reglas para Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad,…»
# Coping with Premature Ejaculation — Extracción para Plan Maestro OS

> Extracción estructurada del libro para un sistema de reglas de entrenamiento/bienestar.  
> **Nota importante:** este libro **no es un libro de fuerza, calistenia, hipertrofia, movilidad deportiva ni fisioterapia musculoesquelética general**. Es un manual clínico-educativo de **salud sexual masculina**, centrado en eyaculación precoz (PE), regulación de la excitación, relajación fisiológica, suelo pélvico, comunicación de pareja y prevención de recaídas.  
> Aun así, contiene protocolos conductuales, progresiones graduales, criterios de avance, reglas de relajación, entrenamiento del músculo pélvico y manejo del estrés/ansiedad que podrían modelarse si el sistema incluye dominios como `pelvic-floor-control`, `sexual-health`, `relaxation`, `stress-management` o `relationship-communication`.

> Las referencias de capítulo/página usan la numeración visible en el documento proporcionado; pueden ser aproximadas por OCR.

---

## 1) Metadatos del libro

- **Título:** *Coping with Premature Ejaculation: How to Overcome PE, Please Your Partner & Have Great Sex*
- **Autor(es):** Michael E. Metz, Barry W. McCarthy
- **Año:** 2003
- **Disciplina principal:** Salud sexual masculina / terapia sexual / enfoque biopsicosocial.
- **Enfoque poblacional:**  
  - Hombres adultos con eyaculación precoz.  
  - Parejas heterosexuales, aunque también incluye orientaciones para hombres sin pareja.  
  - Usuarios con PE leve, moderada o severa, siempre que se adapte el nivel de intervención.
- **Notas de alcance:**  
  - **Cubre:** definición de PE, mitos, evaluación, subtipos causales, factores médicos/psicológicos/relacionales, entrenamiento en relajación, control del músculo pélvico, pacing de excitación, stop-start, acoplamiento en intercourse, comunicación de pareja, estilos de pareja, prevención de recaídas y derivación profesional.  
  - **No cubre de forma principal:** fuerza, hipertrofia, calistenia, movilidad articular deportiva, tendinopatías o programación de entrenamiento físico general.  
  - **No debe usarse como:** diagnóstico médico automatizado, prescripción farmacológica o sustituto de terapia sexual/psicológica.  
  - ⚠️ El lenguaje del libro asume mayoritariamente una pareja mujer-hombre y una sexualidad centrada en intercourse; si el sistema es inclusivo, requerirá adaptación.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `PEType`
  - **Descripción:** clasifica la eyaculación precoz según inicio, contexto y causa probable.
  - **Campos sugeridos:**
    - `onset`: `lifelong` | `acquired`
    - `situational`: `all-situations` | `partner-only` | `masturbation-only` | `mixed`
    - `causeCategory`: `neurologic` | `physical-illness` | `physical-injury` | `drug-side-effect` | `psychological-system` | `psychological-distress` | `relationship-distress` | `psychosexual-skill-deficit` | `mixed-sexual-dysfunction`
    - `requiresMedicalEvaluation`: boolean
    - `requiresPsychologicalEvaluation`: boolean
    - `severityScore`: number
  - **Referencias de capítulo/página:** Cap. 3, pp. 29–34; Cap. 4, pp. 47–54.

- `PESIAssessment`
  - **Descripción:** evaluación de severidad basada en el *Premature Ejaculation Severity Index*.
  - **Campos sugeridos:**
    - `totalScore`: 0–100
    - `severityBand`: `very-mild` | `mild` | `moderate` | `high` | `extreme`
    - `userResponses`: array
    - `partnerResponses`: optional array
    - `recommendedAction`: `self-help` | `coached-self-help` | `professional-support`
  - **Referencias de capítulo/página:** Cap. 4, pp. 54–56.

- `EjaculatoryControlOutcome`
  - **Descripción:** resultado de control percibido, no solo duración.
  - **Campos sugeridos:**
    - `canChooseEjaculationTiming`: boolean
    - `successRate`: percentage
    - `satisfactionScore`: number
    - `distressScore`: number
    - `partnerSatisfactionScore`: optional number
  - **Referencias de capítulo/página:** Cap. 1, p. 1; Cap. 4, pp. 47–48.

- `ArousalStyle`
  - **Descripción:** estilo predominante de excitación.
  - **Campos sugeridos:**
    - `sensualSelfEntrancement`: score
    - `partnerInteraction`: score
    - `roleEnactment`: score
    - `preferredFocus`: enum
  - **Referencias de capítulo/página:** Cap. 5, pp. 65–67.

- `ArousalContinuum`
  - **Descripción:** lista graduada de estímulos, imágenes o conductas con nivel de excitación asociado.
  - **Campos sugeridos:**
    - `items`: array
    - `item.label`: string
    - `item.arousalScore`: 1–100
    - `item.modality`: `physical` | `fantasy` | `partner-focus` | `scenario`
    - `item.safeToUseInPhase`: enum
  - **Referencias de capítulo/página:** Cap. 8, pp. 116–117.

- `PelvicFloorRelaxationState`
  - **Descripción:** estado del músculo pélvico durante reposo, excitación o intercourse.
  - **Campos sugeridos:**
    - `toneLevel`: 1–10
    - `isRelaxed`: boolean
    - `context`: `rest` | `arousal` | `insertion` | `intercourse`
    - `awarenessScore`: optional number
  - **Referencias de capítulo/página:** Cap. 2, pp. 18–20; Cap. 8, pp. 115–116, 129–130.

- `RelationshipCBEProfile`
  - **Descripción:** perfil cognitivo-conductual-emocional de la pareja frente a PE.
  - **Campos sugeridos:**
    - `cognitions`: array of detrimental/beneficial beliefs
    - `behaviors`: array of constructive/destructive actions
    - `emotions`: array of emotional states
    - `relationshipIdentity`: object
    - `relationshipCooperation`: object
    - `relationshipIntimacy`: object
  - **Referencias de capítulo/página:** Cap. 3, pp. 36–45; Cap. 7, pp. 89–104.

- `RelapseEvent`
  - **Descripción:** registro de episodio rápido, diferenciando lapse y relapse.
  - **Campos sugeridos:**
    - `type`: `lapse` | `relapse`
    - `context`: string
    - `responseQuality`: `adaptive` | `maladaptive`
    - `followUpPlan`: string
    - `nextPracticeDate`: date
  - **Referencias de capítulo/página:** Cap. 10, pp. 147–156.

- `ClinicalReferralFlag`
  - **Descripción:** bandera para derivación médica, psicológica o sexológica.
  - **Campos sugeridos:**
    - `medical`: boolean
    - `psychological`: boolean
    - `sexTherapy`: boolean
    - `reason`: enum
    - `urgency`: `low` | `medium` | `high`
  - **Referencias de capítulo/página:** Cap. 4, pp. 49–58; Cap. 6, pp. 73–83; Cap. 7, pp. 86–89; Cap. 11, pp. 161–162.

---

### 2.2 Mapeo a tipos existentes

- `FocusId: relaxation`
  - **Cómo lo trata este libro:**  
    La relajación fisiológica es la base del control eyaculatorio. El libro insiste en relajar cuerpo, respiración y suelo pélvico durante la excitación, no en distraerse ni reducir placer.
  - **Referencias:** Cap. 1, pp. 5–6; Cap. 8, pp. 113–115.

- `FocusId: pelvic-floor-control`
  - **Cómo lo trata este libro:**  
    El músculo pélvico se considera parte del reflejo eyaculatorio. Se enseña a identificarlo, contraerlo/relajarlo de forma consciente y mantenerlo relajado durante excitación e inserción.
  - **Referencias:** Cap. 2, pp. 18–20; Cap. 8, pp. 115–116, 129–130.

- `FocusId: sexual-health`
  - **Cómo lo trata este libro:**  
    Es el foco central. Define PE, evalúa severidad, clasifica causas, propone tratamiento biopsicosocial y prevención de recaídas.
  - **Referencias:** Caps. 1–10.

- `FocusId: stress-management`
  - **Cómo lo trata este libro:**  
    El estrés psicológico, la ansiedad de desempeño, la culpa y la hipervigilancia empeoran PE. Se usan expectativas realistas, relajación, comunicación y empatía.
  - **Referencias:** Cap. 3, pp. 31–38; Cap. 7, pp. 85–104.

- `FocusId: communication`
  - **Cómo lo trata este libro:**  
    La cooperación de pareja es parte del tratamiento. Se enseña paraphrasing, expresión de emociones, resolución de conflictos y acuerdos de estilo sexual.
  - **Referencias:** Cap. 7, pp. 99–104; Cap. 9, pp. 135–145.

- `BodyZoneId: pelvic-floor`
  - **Qué dice el libro:**  
    Los músculos pélvicos participan directamente en la eyaculación. Relajarlos puede ayudar a retrasar el reflejo; contraerlos inadvertidamente puede acelerarlo.
  - **Referencias:** Cap. 2, pp. 18–20; Cap. 8, pp. 115–116.

- `BodyZoneId: genital`
  - **Qué dice el libro:**  
    El foco no debe ser reducir sensibilidad genital, sino aumentar conciencia de las sensaciones con relajación. Se desaconseja anestesia o distracción como estrategia principal.
  - **Referencias:** Cap. 1, pp. 5–6; Cap. 6, pp. 78–79.

- `BodyZoneId: prostate`
  - **Qué dice el libro:**  
    La prostatitis u otras enfermedades urológicas pueden causar PE adquirida. Se recomienda evaluación médica si hay sospecha.
  - **Referencias:** Cap. 3, pp. 30–31; Cap. 4, p. 51; Cap. 6, p. 80.

- `MovementPattern: breathing`
  - **Comentarios relevantes:**  
    La respiración lenta y profunda se usa como entrada a la relajación corporal.
  - **Referencias:** Cap. 8, p. 114.

- `MovementPattern: pelvic-floor-relaxation`
  - **Comentarios relevantes:**  
    No es un patrón deportivo, pero puede modelarse como drill de control corporal: identificar, contraer, relajar y mantener tono bajo durante excitación.
  - **Referencias:** Cap. 8, pp. 115–116.

- `MovementPattern: stop-start-pacing`
  - **Comentarios relevantes:**  
    Protocolo conductual de regulación de excitación: pausar o ralentizar estimulación antes del punto de inevitabilidad eyaculatoria.
  - **Referencias:** Cap. 8, pp. 123–128.

- `MovementPattern: intercourse-position-control`
  - **Comentarios relevantes:**  
    Posiciones y ritmo afectan control. Iniciar con mujer arriba, usar movimientos lentos/circulares y evitar thrusting rápido cuando el control es frágil.
  - **Referencias:** Cap. 8, pp. 129–132; Cap. 10, p. 151.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `pe-control-assessment`

- **Descripción breve:** La PE se evalúa principalmente por falta de control voluntario para elegir el momento de eyacular, no solo por duración.
- **Tipo:** evaluación.
- **Métrica principal:** `controlChoiceSuccessRate`.
- **Valores numéricos:**
  - Rango óptimo: poder elegir el momento en la mayoría de encuentros; el libro plantea como referencia subjetiva “al menos 4 de 5”.
  - Umbral de riesgo: no poder elegir en más ocasiones que las que sí.
- **Condiciones de aplicación:**
  - Aplica a usuarios masculinos adultos que reportan eyaculación rápida insatisfactoria.
  - No debe usarse como diagnóstico clínico definitivo.
- **Capítulos/páginas donde se apoya:** Cap. 1, p. 1; Cap. 4, pp. 47–48.
- **Comentarios/precauciones:**
  - La duración por sí sola es insuficiente.
  - El sistema debe incluir satisfacción, malestar y contexto relacional.

---

### Regla: `pesi-severity-bands`

- **Descripción breve:** Clasificar severidad usando el PESI, con bandas de puntuación.
- **Tipo:** evaluación.
- **Métrica principal:** `pesiTotalScore`.
- **Valores numéricos:**
  - 0–20: severidad muy leve.
  - 20–40: leve.
  - 40–60: moderada.
  - 60–80: alta.
  - 80–100: extrema.
- **Condiciones de aplicación:**
  - Idealmente completado por el usuario y por la pareja si existe.
  - Usar para ajustar intensidad del programa y necesidad de apoyo profesional.
- **Capítulos/páginas donde se apoya:** Cap. 4, pp. 54–56.
- **Comentarios/precauciones:**
  - Puntuaciones altas o extremas deberían sugerir apoyo profesional.
  - No debe bloquear al usuario ni generar alarma excesiva.

---

### Regla: `medical-referral-acquired-pe`

- **Descripción breve:** Si la PE es adquirida y ocurre en todas las situaciones, considerar evaluación médica.
- **Tipo:** seguridad / derivación.
- **Métrica principal:** `onsetAcquired + allSituations`.
- **Valores numéricos:**
  - No aplica; regla booleana.
- **Condiciones de aplicación:**
  - Si antes había control razonable y ahora aparece PE.
  - Si ocurre en masturbación y pareja.
  - Si hay enfermedad, dolor, síntomas urológicos, lesión o cambio farmacológico.
- **Capítulos/páginas donde se apoya:** Cap. 3, pp. 30–31; Cap. 4, pp. 49–53; Cap. 6, pp. 73–76.
- **Comentarios/precauciones:**
  - El sistema no debe diagnosticar prostatitis, lesión neurológica ni efecto farmacológico.
  - Debe mostrar recomendación de consultar médico.

---

### Regla: `medical-referral-severe-pe`

- **Descripción breve:** Derivar o sugerir evaluación médica/terapéutica cuando la severidad es muy alta.
- **Tipo:** seguridad / derivación.
- **Métrica principal:** `pesiTotalScore`.
- **Valores numéricos:**
  - Umbral de derivación fuerte: PESI > 80.
  - Umbral de apoyo profesional recomendado: PESI > 70.
  - Señal especial: eyaculación antes de penetración de forma frecuente.
- **Condiciones de aplicación:**
  - Usuarios con PE severa o extrema.
  - Usuarios que no progresan con autoentrenamiento.
- **Capítulos/páginas donde se apoya:** Cap. 4, pp. 54–56; Cap. 6, pp. 76–77; Cap. 8, p. 108.
- **Comentarios/precauciones:**
  - La medicación, si se considera, debe ser manejada por médico.

---

### Regla: `sexual-frequency-maintenance`

- **Descripción breve:** Mantener una frecuencia sexual regular puede facilitar el entrenamiento de control.
- **Tipo:** frecuencia.
- **Métrica principal:** `sexualSessionsPerMonth` o `sessionsPerWeek`.
- **Valores numéricos:**
  - Menos de 2 sesiones/mes puede dificultar el mantenimiento del control.
  - El libro menciona ejemplos de ritmo regular: desde 3 veces/semana hasta 1 vez cada 10 días, según pareja.
- **Condiciones de aplicación:**
  - Aplica a usuarios en fase de mantenimiento.
  - No debe convertirse en obligación ni presión de desempeño.
- **Capítulos/páginas donde se apoya:** Cap. 2, pp. 22–23; Cap. 10, pp. 154–155.
- **Comentarios/precauciones:**
  - La frecuencia debe ser mutuamente satisfactoria.
  - Evitar reglas que impongan sexo como tarea.

---

### Regla: `realistic-sex-duration-expectations`

- **Descripción breve:** Ajustar expectativas sobre duración de intercourse y encuentro sexual completo.
- **Tipo:** expectativas / psicoeducación.
- **Métrica principal:** `minutes`.
- **Valores numéricos:**
  - Encuentro sexual típico: 15–45 minutos.
  - Intercourse típico: 2–7 minutos.
  - Puede haber encuentros de 2 minutos o experiencias largas, pero no debe exigirse una hora como norma.
- **Condiciones de aplicación:**
  - Usuarios con ansiedad de desempeño.
  - Fases iniciales del programa.
- **Capítulos/páginas donde se apoya:** Cap. 1, pp. 1–2; Cap. 2, p. 23.
- **Comentarios/precauciones:**
  - El objetivo no es duración infinita, sino control razonable y satisfacción.

---

### Regla: `relaxation-attention-threshold`

- **Descripción breve:** Durante ejercicios de relajación/excitación, mantener foco en sensaciones físicas la mayor parte del tiempo.
- **Tipo:** técnica / atención.
- **Métrica principal:** `percentFocusOnPhysicalSensation`.
- **Valores numéricos:**
  - Rango óptimo: > 80% del tiempo enfocado en sensaciones.
  - Umbral aceptable: distracciones < 20%.
- **Condiciones de aplicación:**
  - Fase 1: comodidad y relajación.
  - Ejercicios de pleasuring relajado y autoexploración.
- **Capítulos/páginas donde se apoya:** Cap. 8, pp. 113–114, 120.
- **Comentarios/precauciones:**
  - Si aparecen distracciones, no luchar contra ellas; reconocerlas y volver al foco corporal.

---

### Regla: `pelvic-muscle-basic-training`

- **Descripción breve:** Entrenamiento básico de conciencia y fuerza del músculo pélvico.
- **Tipo:** frecuencia / volumen / control motor.
- **Métrica principal:** `pmRepsPerDay`.
- **Valores numéricos:**
  - Contraer 3 segundos.
  - Relajar 3 segundos.
  - 10 repeticiones por serie.
  - 3 series al día.
  - Total aproximado: 30 repeticiones/día.
- **Condiciones de aplicación:**
  - Usuarios sin dolor pélvico agudo.
  - Fase de preparación.
- **Capítulos/páginas donde se apoya:** Cap. 8, p. 115.
- **Comentarios/precauciones:**
  - El objetivo final durante sexo no siempre es contraer más, sino saber relajar.
  - Si hay dolor pélvico, síntomas urológicos o disfunción compleja, derivar.

---

### Regla: `pelvic-muscle-relaxed-insertion`

- **Descripción breve:** Mantener suelo pélvico relativamente relajado al iniciar intercourse.
- **Tipo:** técnica / intensidad.
- **Métrica principal:** `pelvicToneLevel` en escala 1–10.
- **Valores numéricos:**
  - Objetivo: tono 2–3 sobre 10 durante inserción.
  - Evitar contracción refleja intensa.
- **Condiciones de aplicación:**
  - Fase de intercourse íntimo.
  - Usuarios que ya tienen conciencia pélvica básica.
- **Capítulos/páginas donde se apoya:** Cap. 8, pp. 129–130.
- **Comentarios/precauciones:**
  - No se debe forzar una relajación perfecta.
  - La ansiedad por lograr el tono puede ser contraproducente.

---

### Regla: `arousal-continuum-step-size`

- **Descripción breve:** Al aumentar estimulación física o cognitiva, avanzar en incrementos pequeños dentro del continuo de excitación.
- **Tipo:** progresión / intensidad.
- **Métrica principal:** `arousalScoreDelta`.
- **Valores numéricos:**
  - Incremento recomendado: no más de +5 puntos en el continuo.
  - Permanecer al menos 15 segundos en cada foco antes de cambiar.
- **Condiciones de aplicación:**
  - Fase de pacing cognitivo.
  - Progressive intercourse.
- **Capítulos/páginas donde se apoya:** Cap. 8, pp. 116–117, 133.
- **Comentarios/precauciones:**
  - Saltos grandes pueden provocar eyaculación no deseada.
  - El sistema puede advertir si el usuario registra cambios abruptos.

---

### Regla: `individual-stop-start-dose`

- **Descripción breve:** Protocolo individual de stop-start con relajación previa y estimulación controlada.
- **Tipo:** protocolo / volumen.
- **Métrica principal:** `minutesPerSession`, `stopsPerSession`.
- **Valores numéricos:**
  - 15 minutos de relajación corporal.
  - 15 minutos de estimulación sin eyaculación.
  - Pausa típica cuando se acerca inevitabilidad: 15 segundos a 3 minutos.
  - Repetir cada etapa al menos 3 veces.
  - Avanzar cuando se necesiten solo 2–3 pausas en 15 minutos.
- **Condiciones de aplicación:**
  - Fase individual.
  - Sin pareja o antes de practicar con pareja.
- **Capítulos/páginas donde se apoya:** Cap. 8, pp. 123–125.
- **Comentarios/precauciones:**
  - No usar fantasía intensa en etapas iniciales.
  - Si hay eyaculación inesperada, registrar como error de foco/timing, no como fracaso.

---

### Regla: `couple-stop-start-session-structure`

- **Descripción breve:** Estructura de sesión de pacing con pareja.
- **Tipo:** protocolo / duración.
- **Métrica principal:** `sessionMinutes`.
- **Valores numéricos:**
  - Duración total: 60 minutos.
  - 30 minutos de pleasuring relajado.
  - 15 minutos de estimulación placentera para la pareja.
  - 15 minutos de práctica de control para el usuario.
- **Condiciones de aplicación:**
  - Fase de pareja.
  - Requiere cooperación, comunicación y consentimiento.
- **Capítulos/páginas donde se apoya:** Cap. 8, p. 127.
- **Comentarios/precauciones:**
  - Si hay conflicto relacional severo, abordar primero comunicación o derivar.

---

### Regla: `intercourse-acclimation-duration`

- **Descripción breve:** Tiempo de reposo dentro de la vagina para aclimatarse a la sensación antes de moverse.
- **Tipo:** protocolo / descanso activo.
- **Métrica principal:** `minutesStaticInside`.
- **Valores numéricos:**
  - Rango típico: 10–15 minutos.
  - Rango observado: 7–27 minutos.
  - Si se cree que ya ocurrió aclimatación, esperar 3 minutos extra por seguridad.
  - Después, practicar al menos 15 minutos de intercourse relajado.
- **Condiciones de aplicación:**
  - Fase de placer saturado.
  - Usuarios con control básico previo.
- **Capítulos/páginas donde se apoya:** Cap. 8, pp. 129–130.
- **Comentarios/precauciones:**
  - La posición inicial sugerida es mujer arriba para facilitar pasividad y foco interno.
  - No debe convertirse en prueba rígida de rendimiento.

---

### Regla: `relaxed-pleasuring-no-sex-window`

- **Descripción breve:** Tras ejercicios de pleasuring relajado, evitar sexo durante un tiempo para reforzar asociación con relajación.
- **Tipo:** descanso / condicionamiento.
- **Métrica principal:** `hoursNoSexAfterPractice`.
- **Valores numéricos:**
  - Mínimo recomendado: 3 horas sin sexo después del ejercicio.
- **Condiciones de aplicación:**
  - Fase 1 y fase 2.
  - Ejercicios de sensualidad no erótica.
- **Capítulos/páginas donde se apoya:** Cap. 8, p. 120.
- **Comentarios/precauciones:**
  - El objetivo es evitar que el cuerpo anticipe sexo inmediato y aparezca ansiedad.

---

### Regla: `genital-exploration-minimum-repetitions`

- **Descripción breve:** Repetir la exploración genital en pareja hasta lograr comodidad antes de avanzar.
- **Tipo:** progresión / volumen.
- **Métrica principal:** `sessionsCompleted`.
- **Valores numéricos:**
  - Mínimo: 3 sesiones.
- **Condiciones de aplicación:**
  - Fase de tolerancia al placer.
  - Pareja con comunicación suficiente.
- **Capítulos/páginas donde se apoya:** Cap. 8, p. 122.
- **Comentarios/precauciones:**
  - Debe ser no performance, no objetivo orgásmico.
  - Se puede detener si hay incomodidad emocional significativa.

---

### Regla: `drug-side-effect-window`

- **Descripción breve:** Si la PE parece causada por retirada o uso de fármacos, esperar un periodo de reequilibrio y reevaluar.
- **Tipo:** médico / línea temporal.
- **Métrica principal:** `weeksSinceDrugChange`.
- **Valores numéricos:**
  - Resolución esperada tras retirada: 2–6 semanas.
  - Si persiste más de 6–8 semanas, considerar otras causas.
- **Condiciones de aplicación:**
  - Solo si hay relación temporal clara con fármacos.
  - Siempre con supervisión médica para cambios de medicación.
- **Capítulos/páginas donde se apoya:** Cap. 4, p. 52; Cap. 6, p. 80.
- **Comentarios/precauciones:**
  - El sistema no debe indicar suspender medicación.

---

### Regla: `avoid-desensitization-as-primary-strategy`

- **Descripción breve:** No basar el control en reducir sensibilidad, distraerse o anestesiar el pene.
- **Tipo:** seguridad / técnica.
- **Métrica principal:** `useOfNumbingOrDistraction` boolean.
- **Valores numéricos:**
  - No aplica.
  - Regla: evitar como estrategia principal.
- **Condiciones de aplicación:**
  - Usuarios que intentan durar menos mediante cremas, doble preservativo, pensamientos anti-eróticos o alcohol.
- **Capítulos/páginas donde se apoya:** Cap. 1, pp. 5–6; Cap. 6, pp. 78–79; Cap. 10, p. 150.
- **Comentarios/precauciones:**
  - Estas estrategias pueden desconectar la conciencia corporal y favorecer disfunción eréctil.

---

### Regla: `medication-clinical-only`

- **Descripción breve:** Cualquier uso de fármacos para retrasar eyaculación debe ser supervisado por médico.
- **Tipo:** seguridad médica.
- **Métrica principal:** `medicationUseSupervised` boolean.
- **Valores numéricos:**
  - SSRIs: reportan efecto retardatorio en aproximadamente 20–60% de casos.
  - Clomipramina: puede usarse 2–4 horas antes en algunos casos.
  - Ansiolíticos: beneficio limitado, menos del 10% según el texto.
- **Condiciones de aplicación:**
  - Solo bajo prescripción/seguimiento médico.
- **Capítulos/páginas donde se apoya:** Cap. 6, pp. 77–78.
- **Comentarios/precauciones:**
  - El sistema no debe recomendar dosis ni fármacos concretos.
  - ⚠️ Información potentially outdated; revisar práctica clínica actual.

---

### Regla: `psychological-referral-threshold`

- **Descripción breve:** Derivar a apoyo psicológico/sexual si hay malestar significativo, trastorno psicológico o fallo del autoenfoque.
- **Tipo:** seguridad / derivación.
- **Métrica principal:** `distressLevel`, `selfHelpFailureDuration`.
- **Valores numéricos:**
  - Si autoayuda no funciona en 3–6 meses, considerar terapia.
  - Si PESI > 70, considerar apoyo profesional.
  - Si ejercicio produce ansiedad significativa, detener y consultar.
- **Condiciones de aplicación:**
  - PE con ansiedad, depresión, trauma, conflicto relacional severo o trastorno psicológico crónico.
- **Capítulos/páginas donde se apoya:** Cap. 1, p. 11; Cap. 4, p. 56; Cap. 7, pp. 86–89; Cap. 8, p. 108.
- **Comentarios/precauciones:**
  - No diagnosticar trauma ni trastornos.

---

### Regla: `lapse-adaptive-response`

- **Descripción breve:** Ante un episodio rápido, responder con calma y mantener conexión, no con culpa/evitación.
- **Tipo:** comportamiento / prevención de recaídas.
- **Métrica principal:** `adaptiveResponseCompleted` boolean.
- **Valores numéricos:**
  - Programar siguiente encuentro sexual en 1–3 días si es deseado y posible.
  - Registrar ajustes: más relajación, menos prisa, más aclimatación, ritmo más lento.
- **Condiciones de aplicación:**
  - Fase de mantenimiento.
  - Usuarios con historial de culpa o conflicto por PE.
- **Capítulos/páginas donde se apoya:** Cap. 10, pp. 147–148, 156.
- **Comentarios/precauciones:**
  - No tratar un lapse como recaída total.

---

### Regla: `relapse-prevention-cadence`

- **Descripción breve:** Mantener reuniones de pareja y seguimiento formal para sostener mejoras.
- **Tipo:** frecuencia / estilo de vida.
- **Métrica principal:** `coupleCheckInsPerMonth`, `followUpIntervalMonths`.
- **Valores numéricos:**
  - Reunión de pareja: mensual.
  - Follow-up formal: cada 6 meses.
  - Tiempo íntimo de pareja: idealmente regular; el libro da ejemplo de sesiones cada 6–8 semanas con prohibición de intercourse en un caso particular.
- **Condiciones de aplicación:**
  - Mantenimiento.
  - Parejas estables.
- **Capítulos/páginas donde se apoya:** Cap. 10, pp. 154–156.
- **Comentarios/precauciones:**
  - El ejemplo de “intercourse ban” es un caso particular, no norma universal.

---

### Regla: `healthy-lifestyle-support`

- **Descripción breve:** El mantenimiento incluye hábitos generales de salud.
- **Tipo:** estilo de vida.
- **Métrica principal:** `healthHabitScore`.
- **Valores numéricos:**
  - No fumar.
  - Alimentación adecuada.
  - Ejercicio regular.
  - Sueño saludable.
  - Consumo de alcohol moderado o nulo.
- **Condiciones de aplicación:**
  - Mantenimiento general.
- **Capítulos/páginas donde se apoya:** Cap. 10, p. 155.
- **Comentarios/precauciones:**
  - No hay cifras exactas de sueño/nutrición en el libro.

---

### Regla: `paraphrase-communication-protocol`

- **Descripción breve:** Usar comunicación estructurada para asegurar comprensión emocional.
- **Tipo:** relación / comunicación.
- **Métrica principal:** `empathyConfirmed` boolean.
- **Valores numéricos:**
  - No aplica; protocolo cualitativo.
- **Condiciones de aplicación:**
  - Conversaciones sobre sentimientos, sexo, PE o conflictos.
- **Capítulos/páginas donde se apoya:** Cap. 7, pp. 99–100.
- **Comentarios/precauciones:**
  - El sistema puede sugerir el formato, pero no debe forzar conversaciones delicadas.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `ejaculatory-control-biopsychosocial`

- **Disciplina:** salud sexual / terapia sexual / regulación psicofísica.
- **Objetivo final (en palabras del libro):**  
  Desarrollar control voluntario y razonable de la eyaculación, aumentando placer, intimidad y satisfacción, sin buscar una duración perfecta ni rendimiento cinematográfico.
- **Requisitos de seguridad previos:**
  - Descartar causas médicas si PE es adquirida, súbita o global.
  - No usar el entrenamiento para evitar consultas médicas cuando hay dolor, infección, lesión o disfunción eréctil importante.
  - Consentimiento y comodidad de la pareja.
  - Evitar práctica si genera ansiedad significativa.
- **Pasos de la progresión:**

| Step | Nombre (parafraseado) | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Afirmación sexual y comodidad de pareja | Trabajar imagen corporal, hablar de creencias sexuales y reducir vergüenza. | Usuario puede hablar de sexo/PE sin bloqueo severo. | Culpa, secretismo, expectativas irreales. | Cap. 8, pp. 110–113 |
| 2 | Relajación corporal | Respiración lenta y escaneo corporal para relajar. | Mantiene foco corporal >80% del tiempo. | Distraerse, intentar controlar en exceso. | Cap. 8, pp. 113–114 |
| 3 | Control del músculo pélvico | Identificar PM, contraer/relajar con conciencia. | Realiza series diarias y percibe diferencia. | Contraer todo el cuerpo, apretar glúteos/abdomen. | Cap. 8, pp. 115–116 |
| 4 | Continuo cognitivo de excitación | Crear lista de estímulos con puntuación 1–100. | Lista detallada con niveles bajos/medios/altos. | Solo incluir estímulos muy excitantes. | Cap. 8, pp. 116–117 |
| 5 | Relajación durante excitación | Autoexploración tranquila; erección aparece/sube/baja sin prisa. | Erección relajada sin ansiedad por perderla. | Entrar en pánico si erección baja. | Cap. 8, pp. 117–119 |
| 6 | Pleasuring relajado en pareja | Masaje sensual no erótico, turno, foco en sensaciones. | Sin erección fuerte ni urgencia sexual. | Convertirlo en preliminares obligatorios. | Cap. 8, pp. 119–121 |
| 7 | Exploración genital guiada | Cada guía al otro en toque genital no performance. | 3 sesiones completas con comodidad. | Buscar orgasmo, juzgar sensibilidad. | Cap. 8, pp. 121–123 |
| 8 | Stop-start individual | Masturbación con pausas o ralentización antes de inevitabilidad. | 2–3 pausas máximo en 15 min con control. | Fantasía intensa, PM tenso, apurar. | Cap. 8, pp. 123–126 |
| 9 | Stop-start en pareja | Pareja estimula; se practica pausa/pacing y foco. | Control similar con pareja y comunicación. | Mirar/fantasear demasiado pronto. | Cap. 8, pp. 126–128 |
| 10 | Intercourse íntimo y aclimatación | Inserción lenta, reposo, PM relajado, foco interno. | Aclimatación con 10–15 min aproximados. | Movimiento rápido, performance. | Cap. 8, pp. 129–131 |
| 11 | Intercourse progresivo | Integrar movimiento lento, cambios de posición y foco de pareja gradual. | Variación con control razonable. | Saltos de excitación >5 puntos. | Cap. 8, pp. 131–133 |

---

### SkillPath: `individual-stop-start`

- **Disciplina:** regulación sexual.
- **Objetivo final:** tolerar excitación alta sin eyacular mediante pausa o pacing.
- **Requisitos de seguridad previos:** relajación básica, conciencia pélvica, ausencia de dolor.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Pausa con foco propio | Masturbación suave; detenerse antes de inevitabilidad. | Urge eyaculatorio baja en 15 s–3 min. | Detenerse tarde, tensar PM. | Cap. 8, pp. 124–125 |
| 2 | Pacing con foco propio | Ralentizar/cambiar presión o tipo de estímulo sin detenerse. | Mantiene excitación alta sin parar. | Cambiar demasiado tarde. | Cap. 8, p. 125 |
| 3 | Pausa con fantasía | Alternar foco corporal y fantasía leve de pareja. | Control con foco dual. | Fantasía demasiado excitante. | Cap. 8, pp. 125–126 |
| 4 | Pacing con fantasía | Ralentizar mientras se usa fantasía; luego lubricante para simular intercourse. | Control estable con fantasía y lubricante. | Subir excitación bruscamente. | Cap. 8, p. 126 |

---

### SkillPath: `couple-stop-start`

- **Disciplina:** regulación sexual en pareja.
- **Objetivo final:** mantener control cuando la pareja estimula.
- **Requisitos de seguridad previos:** comunicación básica, acuerdo de pausa, sin presión.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Pausa sin foco de pareja | Pareja estimula; usuario se centra en sensaciones propias. | Señaliza pausa a tiempo. | Ocultar incomodidad. | Cap. 8, p. 127 |
| 2 | Pacing sin foco de pareja | Pareja reduce velocidad en vez de detener. | Control sin detenerse. | No comunicar ritmo. | Cap. 8, p. 128 |
| 3 | Pausa con foco de pareja | Añadir mirar/observar pareja, pero manteniendo control. | Control con atención externa parcial. | Sobreexcitación por mirada. | Cap. 8, p. 127 |
| 4 | Pacing con foco de pareja | Ralentizar mientras se integra foco externo. | Control estable con pareja visible. | Ignorar señales de inevitabilidad. | Cap. 8, p. 128 |

---

### SkillPath: `intercourse-progression`

- **Disciplina:** regulación sexual durante intercourse.
- **Objetivo final:** disfrutar intercourse con control razonable, variación y satisfacción mutua.
- **Requisitos de seguridad previos:** control básico manual/oral, comunicación, relajación pélvica.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Inserción pasiva | Mujer arriba; usuario pasivo, PM relajado. | Inserción sin contracción fuerte. | Apretar PM por nervios. | Cap. 8, pp. 129–130 |
| 2 | Aclimatación | Reposo dentro, foco en placer, esperar adaptación. | Sensación de aclimatación estable. | Moverse antes de tiempo. | Cap. 8, p. 130 |
| 3 | Movimiento lento | Movimientos mínimos, luego lentos. | 15 min de intercourse relajado. | Thrusting rápido. | Cap. 8, p. 130 |
| 4 | Integrar foco de pareja | Añadir mirada/contacto en dosis pequeñas. | Control con foco externo breve. | Saltar a estímulos muy excitantes. | Cap. 8, pp. 130–131 |
| 5 | Intercourse progresivo | Variar posiciones, ritmos, control compartido. | Control razonable en varias posiciones. | Hombre arriba con ritmo rápido. | Cap. 8, pp. 131–132; Cap. 10, p. 151 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Relajación corporal general

- **Cues principales:**
  - Respiración lenta: inhalar/exhalar contando hasta 5.
  - Relajar pies, piernas, pelvis, espalda, pecho, hombros, cara.
  - Llevar atención a sensaciones, no a rendimiento.
  - Aceptar distracciones y volver al cuerpo.
- **Errores frecuentes:**
  - Intentar “apagar” pensamientos a la fuerza.
  - Convertir relajación en otra prueba.
  - Mantener tensión pélvica sin notarla.
- **Variantes seguras y progresiones sugeridas:**
  - Hacerlo sentado/tumbado.
  - Usar grabación de audio propia.
  - Practicar junto a pareja sin hablar.
- **Indicaciones específicas por zona:**
  - Si hay dolor pélvico o genital, no forzar; consultar.
- **Páginas de referencia:** Cap. 8, pp. 113–114.

---

### Músculo pélvico / pelvic floor

- **Cues principales:**
  - Identificar como si se detuviera la orina o se “moviera” el pene.
  - Contraer 3 s, relajar 3 s.
  - Visualizar escala 1–10 de tono.
  - Durante excitación, mantener PM lo más relajado posible.
- **Errores frecuentes:**
  - Apretar glúteos, abdomen o respiración.
  - Creer que más contracción equivale a más control.
  - Olvidar relajar durante inserción.
- **Variantes seguras y progresiones sugeridas:**
  - Continuo PM: 10→1→5→1→7→1→3→1.
  - Monitorear PM durante stop-start.
- **Indicaciones específicas por zona:**
  - No usar como sustituto de evaluación médica si hay dolor, síntomas urinarios o disfunción severa.
- **Páginas de referencia:** Cap. 2, pp. 18–20; Cap. 8, pp. 115–116.

---

### Continuo de excitación / pacing cognitivo

- **Cues principales:**
  - Crear lista de estímulos de 1 a 100.
  - Empezar por ítems bajos.
  - Subir en pasos pequeños.
  - Mantener cada foco al menos 15 segundos.
- **Errores frecuentes:**
  - Empezar en niveles 50+.
  - Saltar de un estímulo moderado a uno muy excitante.
  - No registrar qué dispara inevitabilidad.
- **Variantes seguras y progresiones sugeridas:**
  - Usar ítems de fantasía leve antes de ítems de intercourse vigoroso.
  - Combinar con PM relajado.
- **Indicaciones específicas por zona:**
  - No aplicar en fases de alta ansiedad sin soporte.
- **Páginas de referencia:** Cap. 8, pp. 116–117, 133.

---

### Stop-start individual

- **Cues principales:**
  - Foco en sensaciones del pene.
  - PM relajado.
  - Detenerse antes de inevitabilidad.
  - Reanudar lento.
- **Errores frecuentes:**
  - Detenerse después del punto de no retorno.
  - Usar fantasía intensa demasiado pronto.
  - Frustrarse si hay eyaculación accidental.
- **Variantes seguras y progresiones sugeridas:**
  - Primero pausa, luego pacing.
  - Luego añadir fantasía leve.
  - Usar lubricante solo al final para simular intercourse.
- **Indicaciones específicas por zona:**
  - Si hay dolor genital, detener y evaluar.
- **Páginas de referencia:** Cap. 8, pp. 123–126.

---

### Stop-start en pareja

- **Cues principales:**
  - Señalizar pausa con claridad.
  - Pareja reduce velocidad o detiene.
  - Usuario mantiene foco interno.
  - Añadir foco externo gradualmente.
- **Errores frecuentes:**
  - No comunicar a tiempo.
  - Pareja interpreta pausa como rechazo.
  - Usuario se distrae con cuerpo de pareja demasiado pronto.
- **Variantes seguras y progresiones sugeridas:**
  - Usar turnos de estimulación no centrados en orgasm.
  - Practicar sin intercourse posterior.
- **Indicaciones específicas por zona:**
  - Requiere acuerdo previo; no usar en relaciones con coerción o conflicto severo.
- **Páginas de referencia:** Cap. 8, pp. 126–128.

---

### Intercourse / posiciones

- **Cues principales:**
  - Empezar con mujer arriba.
  - Inserción lenta.
  - PM en tono 2–3.
  - Reposo para aclimatar.
  - Movimientos lentos o circulares.
- **Errores frecuentes:**
  - Thrusting corto y rápido.
  - Hombre arriba con alta exigencia.
  - Ignorar necesidad de aclimatación.
- **Variantes seguras y progresiones sugeridas:**
  - Alternar control de movimiento.
  - Usar posiciones donde usuario pueda relajar más.
  - Añadir estimulación mutua no centrada en intercourse.
- **Indicaciones específicas por zona:**
  - Si hay disfunción eréctil mixta, abordar ED con ayuda profesional.
- **Páginas de referencia:** Cap. 8, pp. 129–132; Cap. 10, p. 151.

---

### Comunicación de pareja

- **Cues principales:**
  - Mensajes “yo”: “yo pienso”, “yo siento”.
  - Parafrasear: “lo que entiendo es…”
  - Confirmar comprensión antes de continuar.
  - Separar sentimiento de conducta.
- **Errores frecuentes:**
  - Criticar, culpar, retirarse.
  - Hablar de sexo justo después de un episodio frustrante.
  - Interpretar silencio como desinterés.
- **Variantes seguras y progresiones sugeridas:**
  - Reuniones breves fuera del dormitorio.
  - Uso de grabación de práctica si ambos aceptan.
- **Indicaciones específicas por zona:**
  - Si hay violencia, coerción o abuso, derivar a profesional.
- **Páginas de referencia:** Cap. 7, pp. 99–104.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Eyaculación precoz (PE)

- **Zona:** `pelvic-floor`, `genital`, posiblemente `prostate` si hay causa médica.
- **Etiología resumida:**
  - PE puede ser multicausal.
  - Puede involucrar reflejo neurológico rápido, enfermedad física, lesión, efectos de fármacos, ansiedad, estrés, conflicto relacional o déficit de habilidades psicosexuales.
  - La PE adquirida puede ser médica o psicológica.
  - La PE lifelong puede ser neurológica, psicológica crónica o por déficit de habilidades.
- **Signos y síntomas clave:**
  - Eyaculación más rápida de la deseada.
  - Sensación de falta de control.
  - Malestar personal o de pareja.
  - Posible ansiedad anticipatoria, evitación, culpa o conflicto relacional.
- **Stadia / fases definidas por el libro:**
  1. **Evaluación/diagnóstico:** identificar tipo y severidad.
  2. **Preparación:** expectativas, relajación, comunicación, motivación.
  3. **Entrenamiento:** relajación, PM, pacing, stop-start, pareja.
  4. **Integración:** intercourse, estilo sexual, prevención de recaídas.
- **Protocolos de tratamiento o rehab:**

  - **Fase 1: Evaluación y seguridad**
    - **Objetivo:** identificar causas, severidad y necesidad de derivación.
    - **Qué se hace:**
      - Revisar inicio, contexto, situaciones, medicamentos, enfermedades, conflicto, ansiedad.
      - Aplicar PESI.
      - Definir expectativas realistas.
    - **Qué NO se hace:**
      - Diagnosticar enfermedad sin profesional.
      - Prescribir fármacos.
      - Culpar al usuario o a la pareja.
    - **Criterio para pasar a fase 2:**
      - No hay red flags médicas no resueltas.
      - Usuario comprende enfoque biopsicosocial.
      - Hay consentimiento para practicar.
    - **Referencias:** Cap. 3, pp. 29–34; Cap. 4, pp. 47–56.

  - **Fase 2: Preparación cognitivo-emocional**
    - **Objetivo:** reducir ansiedad de desempeño y crear marco realista.
    - **Qué se hace:**
      - Reemplazar mitos por expectativas realistas.
      - Trabajar imagen corporal.
      - Compartir sentimientos sobre sexo y PE.
      - Acordar cooperación.
    - **Qué NO se hace:**
      - Exigir rendimiento cinematográfico.
      - Centrarse solo en orgasmo de la pareja.
    - **Criterio para pasar a fase 3:**
      - Usuario puede hablar del problema sin bloqueo severo.
      - Hay disposición a practicar.
    - **Referencias:** Cap. 2, pp. 15–28; Cap. 5, pp. 59–72.

  - **Fase 3: Entrenamiento de relajación y control**
    - **Objetivo:** construir relajación fisiológica, conciencia pélvica y pacing.
    - **Qué se hace:**
      - Relajación corporal.
      - PM training.
      - Continuo de excitación.
      - Stop-start individual.
      - Stop-start en pareja.
    - **Qué NO se hace:**
      - Distraerse.
      - Anestesiar.
      - Forzar duración.
    - **Criterio para pasar a fase 4:**
      - Control razonable en estimulación manual/oral.
      - Capacidad de pausar/ralentizar.
      - PM relativamente relajado.
    - **Referencias:** Cap. 8, pp. 107–128.

  - **Fase 4: Intercourse y mantenimiento**
    - **Objetivo:** transferir control a intercourse y sostenerlo.
    - **Qué se hace:**
      - Inserción lenta.
      - Aclimatación.
      - Intercourse progresivo.
      - Prevención de recaídas.
      - Comunicación continua.
    - **Qué NO se hace:**
      - Tratar un lapse como fracaso.
      - Abandonar prácticas por “benigno neglect”.
    - **Criterio de éxito:**
      - Control razonable la mayoría de veces.
      - Satisfacción individual y de pareja.
      - Respuesta adaptativa ante episodios rápidos.
    - **Referencias:** Cap. 8, pp. 129–133; Cap. 10, pp. 147–159.

- **Ejercicios de prehab/movilidad específicos:**
  - **Relajación corporal progresiva:**
    - Descripción: respiración lenta y escaneo corporal.
    - Frecuencia: diaria o antes de práctica.
    - Advertencia: no convertir en prueba.
    - Ref. Cap. 8, p. 114.
  - **PM básico:**
    - Descripción: contraer/relajar 3 s x 10 x 3/día.
    - Advertencia: si hay dolor, evaluar.
    - Ref. Cap. 8, p. 115.
  - **PM continuum:**
    - Descripción: graduar tono 1–10.
    - Advertencia: no obsesionarse con precisión.
    - Ref. Cap. 8, p. 116.
  - **Relaxed self-entrancement arousal:**
    - Descripción: autoexploración corporal sin objetivo de erección/orgasmo.
    - Advertencia: no usar como performance.
    - Ref. Cap. 8, pp. 117–119.

- **Umbrales de dolor o red flags:**
  - El libro no usa escala de dolor 0–10 para PE, pero sí define señales de derivación:
    - PE adquirida repentina.
    - PE en todas las situaciones con sospecha médica.
    - Dolor genital, pélvico o síntomas urinarios.
    - Lesión física o neurológica.
    - Efecto farmacológico claro.
    - Disfunción eréctil coexistente.
    - Malestar psicológico significativo.
    - Ejercicios que generan ansiedad severa.
  - **Cuándo detenerse y buscar profesional:**
    - Si hay dolor.
    - Si hay síntomas médicos.
    - Si PESI es alto/extremo.
    - Si el usuario o pareja se sienten muy angustiados.
    - Si no hay progreso en 3–6 meses.
  - **Referencias:** Cap. 4, pp. 49–56; Cap. 6, pp. 73–83; Cap. 7, pp. 86–89; Cap. 8, p. 108.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Sueño

- El libro menciona el patrón de sueño saludable como parte del mantenimiento general de la vitalidad sexual.
- No da horas exactas.
- **Uso en app:** puede integrarse como regla general de higiene de sueño si existe módulo de recuperación.
- **Referencia:** Cap. 10, p. 155.

### Estrés

- El estrés psicológico puede causar o mantener PE.
- La ansiedad de desempeño, anticipación de fracaso, culpa y vergüenza empeoran control.
- La relajación, empatía y comunicación reducen estrés sexual.
- **Referencia:** Cap. 3, pp. 31–38; Cap. 7, pp. 85–104.

### Nutrición

- El libro solo menciona “buenos hábitos alimenticios” como parte de salud general.
- No aporta protocolo nutricional específico.
- **Uso en app:** no usar como fuente nutricional principal.
- **Referencia:** Cap. 10, p. 155.

### Alcohol y sustancias

- Se desaconseja automedicarse con alcohol o drogas recreativas.
- Algunas sustancias pueden alterar eyaculación, pero generan riesgos y no constituyen tratamiento.
- **Referencia:** Cap. 6, p. 77.

### Entrenar enfermo

- No hay reglas tipo “above/below the neck”.
- Sin embargo, el libro recomienda evaluación médica si enfermedad física afecta función sexual.
- **Uso en app:** si el usuario reporta enfermedad aguda, fiebre o infección, no presionar práctica sexual/entrenamiento; sugerir descanso y consulta.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente de reglas para un posible módulo de `sexual-health` / `pelvic-floor-relaxation`.
  - Progresiones graduales de regulación de excitación, stop-start y aclimatación.
  - Reglas de relajación, foco atencional y control pélvico.
  - Protocolos de comunicación de pareja y prevención de recaídas.
  - Detección de banderas de derivación médica/psicológica.

- **Limitaciones:**
  - ⚠️ No es un libro de entrenamiento físico convencional.
  - No debe usarse para reglas de fuerza, hipertrofia, movilidad articular o tendinitis.
  - Contiene información clínica/sexual sensible; requiere consentimiento, privacidad y descargos de responsabilidad.
  - La clasificación médica y farmacológica debe ser revisada por profesional de salud; el libro es de 2003 y algunos aspectos pueden estar desactualizados.
  - El texto asume mayoritariamente pareja heterosexual y dinámica hombre-mujer; necesita adaptación inclusiva.
  - No automatizar diagnóstico de PE ni prescripción de medicamentos.

- **Recomendaciones específicas:**
  1. Si el sistema decide incluir bienestar sexual, crear un dominio `sexual-health` con subfocos `pelvic-floor-control`, `relaxation`, `arousal-regulation`, `communication`, `relapse-prevention`.
  2. Implementar reglas de bajo riesgo: `pelvic-muscle-basic-training`, `relaxation-attention-threshold`, `arousal-continuum-step-size`, `lapse-adaptive-response`, `healthy-lifestyle-support`.
  3. Añadir `ClinicalReferralFlag` para derivación médica/psicológica cuando haya PE adquirida, PESI alto, dolor, disfunción eréctil, angustia severa o sospecha farmacológica/médica.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
## Nota sobre Ayudas Visuales y Completitud de Datos

He revisado exhaustivamente el texto extraído del libro en busca de información que pudiera haberse perdido debido a la falta de ayudas visuales (tablas, gráficos, diagramas de flujo o formularios). 

**Estado de los datos:**
1. **PESI (Premature Ejaculation Severity Index, pp. 54-56):** En el libro original, esto es una tabla/formulario con escalas Likert (0-10) para 10 preguntas. El OCR ha "aplanado" la tabla, mostrando los números y las etiquetas de los extremos (ej. `10 9 8... 0`, `lifelong ... recent`). **No falta información crítica:** las opciones, la lógica de puntuación (suma total) y los umbrales de severidad (0-20, 20-40, 40-60, 60-80, 80-100) están completamente preservados y son programables.
2. **PE Diagnostic Summary Sheet (p. 57):** Es un formulario de checkboxes. El texto captura todas las categorías (9 tipos de PE). Es fácilmente modelable como un array de enums/booleans.
3. **Arousal Continuum (p. 116):** El libro no provee una tabla maestra, sino que instruye al usuario a crear su propia lista del 1 al 100. El sistema debe implementar esto como una interfaz de "Lista Generada por el Usuario" con un slider.
4. **Diagramas Anatómicos/Flujos:** No hay diagramas de flujo complejos o mapas anatómicos que contengan reglas implícitas no capturadas por el texto. Todo el conocimiento accionable (cues, tiempos, fases) está explícito en la prosa.

**Conclusión:** No hay datos faltantes que impidan la implementación. A continuación, procedo a **desarrollar y especificar técnicamente las 3 recomendaciones** para que el agente de código y el motor de reglas puedan implementarlas directamente en el *Plan Maestro OS*.

---

## Desarrollo de Recomendación 1: Arquitectura del Dominio `sexual-health`

Para que el sistema soporte este libro, debe expandir su ontología más allá del fitness musculoesquelético. Se propone crear el dominio `sexual-health` con las siguientes estructuras de datos (pseudo-TypeScript) para el motor de la app.

```typescript
// 1. NUEVOS FOCUS Y SUBFOCUS
enum FocusId {
  // ... existentes (strength, mobility, etc.)
  SEXUAL_HEALTH = 'sexual-health',
  PELVIC_FLOOR = 'pelvic-floor',
  RELAXATION = 'relaxation',
  STRESS_MANAGEMENT = 'stress-management'
}

enum SubFocusId {
  AROUSAL_REGULATION = 'arousal-regulation',
  COUPLE_COMMUNICATION = 'communication',
  RELAPSE_PREVENTION = 'relapse-prevention'
}

// 2. TIPO DE SESIÓN (Reemplaza/Extiende "Workout")
interface PsychosexualPractice {
  id: string;
  phase: 1 | 2 | 3 | 4; // Comfort, Toleration, Saturation, Maintenance
  requiresPartner: boolean;
  environmentalRequirements: {
    privacy: 'strict' | 'moderate';
    interruptions: 'none-allowed';
    durationMinutes: number; // ej. 60 mins para Stop-Start en pareja
  };
  postSessionCooldownHours: number; // ej. 3 horas sin sexo tras "Relaxed Pleasuring"
  targetArousalLevel: { min: number, max: number }; // Basado en Arousal Continuum (1-100)
}

// 3. ENTIDAD DE EVALUACIÓN (PESI)
interface PESIAssessment {
  date: Date;
  responses: number[]; // Array de 10 enteros (0-10)
  totalScore: number;  // 0-100
  severityBand: 'very-mild' | 'mild' | 'moderate' | 'high' | 'extreme';
  partnerCompleted: boolean;
}

// 4. ENTIDAD DE MAPEO COGNITIVO (Arousal Continuum)
interface ArousalContinuumItem {
  label: string; // ej. "Closed-lip kissing"
  arousalScore: number; // 1-100
  modality: 'physical' | 'fantasy' | 'partner-focus';
  safeForPhase: number[]; // En qué fases de la progresión es seguro usarlo
}
```

---

## Desarrollo de Recomendación 2: Catálogo de Reglas (`TrainingRule`)

Estas son las especificaciones lógicas para el motor de reglas. Están diseñadas para ser evaluadas antes, durante o después de una `PsychosexualPractice`.

### Regla 1: `pelvic-muscle-basic-training`
- **Descripción:** Asegurar el volumen mínimo de conciencia y tono del músculo pélvico (PM) fuera de la excitación sexual.
- **Tipo:** Volumen / Frecuencia.
- **Métrica:** `pmSetsPerDay`, `pmHoldDurationSeconds`.
- **Lógica (IF/THEN):**
  ```typescript
  IF user.phase == 1 THEN
    REQUIRE pmSetsPerDay >= 3
    REQUIRE pmRepsPerSet == 10
    REQUIRE pmHoldDurationSeconds == 3
    REQUIRE pmRestDurationSeconds == 3
  ```
- **Criterio de Progresión:** Cuando el usuario reporta `easeOfExecution == 'easy'` por 7 días consecutivos, aumentar `pmHoldDurationSeconds` a 5s o introducir el `PM Continuum` (variaciones de tono 1-10).
- **Capítulo/Página:** Cap. 8, p. 115.

### Regla 2: `relaxation-attention-threshold`
- **Descripción:** Validar que el usuario está aplicando "Sensual Self-Entrancement" (foco interno) y no "Spectatoring" (distracción/ansiedad).
- **Tipo:** Técnica / Mindfulness.
- **Métrica:** `mindfulnessFocusPct` (0-100%).
- **Lógica (IF/THEN):**
  ```typescript
  IF practice.type == 'Relaxed Pleasuring' OR 'Self-Entrancement Arousal' THEN
    REQUIRE mindfulnessFocusPct >= 80%
    IF mindfulnessFocusPct < 80% THEN
      TRIGGER WARNING: "High distraction detected. Acknowledge the thought, let it go, and return to physical sensations."
  ```
- **Capítulo/Página:** Cap. 8, pp. 113-114, 120.

### Regla 3: `arousal-continuum-step-size`
- **Descripción:** Prevenir saltos bruscos de excitación que disparen el reflejo eyaculatorio (evitar "sexual drag racing").
- **Tipo:** Progresión / Intensidad.
- **Métrica:** `arousalDelta` (diferencia de puntos en el continuo 1-100), `dwellTimeSeconds`.
- **Lógica (IF/THEN):**
  ```typescript
  ON transition(from: ItemA, to: ItemB) DO
    LET delta = ItemB.arousalScore - ItemA.arousalScore
    REQUIRE delta <= 5
    REQUIRE dwellTimeSeconds >= 15
    IF delta > 5 THEN
      BLOCK_TRANSITION: "Arousal jump too high. Risk of inevitability. Choose an intermediate stimulus."
  ```
- **Capítulo/Página:** Cap. 8, pp. 116-117, 133.

### Regla 4: `lapse-adaptive-response`
- **Descripción:** Manejo de un "lapsus" (eyaculación rápida no deseada) para evitar la espiral de culpa y el abandono (relapse).
- **Tipo:** Comportamiento / Retención.
- **Trigger:** `sessionOutcome == 'unintended_ejaculation'`
- **Lógica (IF/THEN):**
  ```typescript
  IF trigger == true THEN
    1. PROMPT COGNITIVE REFRAME: "This is a lapse, not a relapse. It is a normal variation."
    2. REQUIRE partnerConnectionAction == true (ej. "Hold partner, continue non-intercourse pleasuring")
    3. SCHEDULE nextPractice IN [1..3] days
    4. BLOCK negativeSelfTalkTags (ej. "failure", "inadequate")
  ```
- **Capítulo/Página:** Cap. 10, pp. 147-148, 156.

### Regla 5: `intercourse-acclimation-hold`
- **Descripción:** Forzar el periodo de adaptación sensorial tras la inserción antes de permitir el movimiento (thrusting).
- **Tipo:** Protocolo / Descanso Activo.
- **Métrica:** `staticInsertionMinutes`.
- **Lógica (IF/THEN):**
  ```typescript
  IF practice.phase == 3 (Intimate Intercourse) THEN
    REQUIRE position == 'partner-on-top' OR 'passive-insertion'
    REQUIRE pmToneLevel <= 3 (escala 1-10)
    REQUIRE staticInsertionMinutes >= 10
    IF user.signals 'acclimation_complete' THEN
      ADD 3 minutes buffer (safety margin)
      UNLOCK 'slow-movement'
  ```
- **Capítulo/Página:** Cap. 8, pp. 129-130.

---

## Desarrollo de Recomendación 3: Sistema de Banderas Rojas (`ClinicalReferralFlag`)

El sistema **jamás** debe diagnosticar, pero sí debe detectar patrones que requieren intervención clínica humana. Este módulo actúa como un *Circuit Breaker* (interruptor) que bloquea ciertas progresiones y muestra alertas de derivación.

### Matriz de Disparadores (Triggers)

| Trigger (Condición Detectada) | Tipo de Derivación | Acción del Sistema (UI/UX) | Base en el Libro |
| :--- | :--- | :--- | :--- |
| `PESI.totalScore > 80` | **Sex Therapist / Psychologist** | Mostrar modal: "Tu nivel de severidad indica que el auto-entrenamiento puede ser insuficiente. Se recomienda apoyo profesional." | Cap. 4, p. 56 |
| `PEType == Acquired` AND `situational == ALL` AND `onset == sudden` | **Medical Doctor (Urologist)** | Alerta: "La aparición súbita de PE en todas las situaciones requiere descartar causas médicas (ej. prostatitis)." | Cap. 3, p. 31; Cap. 6, p. 76 |
| `userReports(pain, location=['pelvis', 'genitals', 'urination'])` | **Medical Doctor** | **Bloqueo duro** de prácticas físicas. Alerta: "El dolor pélvico o al orinar es una bandera roja médica. Suspende ejercicios y consulta a un médico." | Cap. 4, p. 51 |
| `userReports(history=['trauma', 'abuse'])` OR `distressLevel == 'severe'` | **Psychologist / Trauma Specialist** | Adaptar ejercicios: Bloquear cualquier práctica que requiera "vulnerabilidad extrema" sin red de apoyo. Sugerir terapia individual previa. | Cap. 5, p. 59; Cap. 7, p. 88 |
| `medicationChange == true` AND `PE_onset == post_change` | **Medical Doctor** | Alerta: "Ciertos fármacos (o su retirada) afectan la eyaculación. No suspendas medicación por tu cuenta, consulta a tu médico." | Cap. 4, p. 52; Cap. 6, p. 80 |
| `erectionQuality == 'frequent_loss'` (Mixed PE / ED) | **Medical Doctor / Sex Therapist** | Alerta: "La ansiedad por mantener la erección puede estar causando la rapidez. Se requiere evaluación para disfunción eréctil mixta." | Cap. 3, p. 34; Cap. 6, p. 81 |

### Flujo de Estado del Sistema (State Machine)

```typescript
enum SystemState {
  NORMAL_PROGRESSION,
  CAUTION_MONITORING, // ej. PESI 60-80, estrés alto
  REFERRAL_REQUIRED   // ej. Dolor, PESI > 80, Trauma no tratado
}

ON assessmentComplete OR symptomLog DO:
  IF matchesAny(RED_FLAG_TRIGGERS) THEN
    SET SystemState = REFERRAL_REQUIRED
    LOCK all SkillPaths beyond Phase 1
    DISPLAY ClinicalReferralModal(payload)
    LOG event to user_health_ledger
```

### Implementación en la App (Siguientes pasos para el Agente de Código)
1. **Crear el Middleware de Seguridad:** Un interceptor que revise el `HealthLedger` del usuario antes de desbloquear cualquier `SkillStep` de la Fase 2 en adelante.
2. **Directorio de Recursos:** Hardcodear o integrar una API de búsqueda de profesionales certificados (ej. AASECT, SSTAR, o equivalentes locales) cuando se dispare `REFERRAL_REQUIRED`.
3. **Descargo de Responsabilidad (Disclaimer):** Añadir un *TOS (Terms of Service)* específico para el módulo `sexual-health` donde el usuario acepta que la app es psicoeducativa y no sustituye la urología, sexología clínica o psiquiatría.
