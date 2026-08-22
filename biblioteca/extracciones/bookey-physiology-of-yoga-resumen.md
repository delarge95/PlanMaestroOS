# bookey-physiology-of-yoga-resumen — Extracción recuperada de chat

> **sourceId:** `bookey-physiology-of-yoga-resumen` · **origen:** `chat-export-1787414976251` (Extracción de Reglas para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# The Physiology of Yoga — Extracción para Plan Maestro OS

> Extracción orientada a reglas, progresiones, cues y seguridad para un sistema de fitness.  
> Todo está parafraseado a partir del contenido proporcionado. No se copian párrafos literales del libro.  
> ⚠️ El material disponible es un resumen amplio con citas, Q&A y quiz; faltan algunas secciones completas, por lo que varios apartados son cualitativos y no incluyen dosis numéricas exactas.

---

## 1) Metadatos del libro

- **Título:** The Physiology of Yoga  
- **Autor(es):** Andrew McGonigle  
- **Año:** ⚠️ No aparece explícitamente en el contenido proporcionado.  
- **Disciplina principal:** Fisiología del yoga / yoga aplicado a salud / educación mente-cuerpo.  
- **Enfoque poblacional:**  
  - Practicantes generales de yoga.  
  - Profesores/estudiantes que quieren fundamentar prácticas.  
  - Personas interesadas en salud, estrés, movilidad, respiración y bienestar.  
  - Poblaciones con consideraciones especiales: embarazo, personas que requieren yoga en silla, practicantes con osteoporosis, hipermovilidad, condiciones cardiovasculares, digestivas, reproductivas o inmunológicas, siempre con enfoque conservador y no clínico.  
- **Notas de alcance:**  
  - **Cubre:** sistemas musculoesquelético, nervioso, respiratorio, cardiovascular, linfático/inmune, endocrino, reproductivo, digestivo y estilos de práctica.  
  - **No cubre explícitamente:**  
    - Programación cuantificada detallada de fuerza/hipertrofia.  
    - Protocolos clínicos cerrados de rehabilitación.  
    - Dosificación exacta de pranayama, series, repeticiones, tiempos o frecuencias.  
    - Energética metafísica; el propio contenido indica que queda fuera del alcance del libro.  
  - El libro tiene un enfoque de “mito vs hecho”, por lo que es útil para crear guardrails de evidencia y evitar afirmaciones exageradas.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `YogaStyle`
  - **Descripción:** Modelo de estilo de práctica de yoga con intensidad, props, objetivo y accesibilidad.
  - **Campos sugeridos:**
    - `id`
    - `label`
    - `intensityLevel` (baja, moderada, dinámica)
    - `primaryGoals` (fuerza, relajación, movilidad, regulación nerviosa)
    - `props` (strap, brick, cushion, chair)
    - `accessibilityNotes`
    - `contraindicationNotes`
  - **Referencias:** Cap. 9, pp. 261–329.

- `BreathTechnique`
  - **Descripción:** Técnica respiratoria con objetivo autonómico, ruta nasal/oral y precauciones.
  - **Campos sugeridos:**
    - `id`
    - `name` (breath awareness, slow breathing, pranayama, kapalabhati — este último mencionado pero sin dosificación suficiente)
    - `breathingRoute` (nasal, oral, mixta)
    - `pace` (lenta, normal, dinámica)
    - `autonomicTarget` (parasympathetic, alerting, neutral)
    - `cues`
    - `cautions`
    - `evidenceLevel`
  - **Referencias:** Cap. 3, pp. 100–134; Cap. 2, pp. 68–99; Cap. 9, pp. 261–329.

- `AutonomicRegulationState`
  - **Descripción:** Estado objetivo de regulación de estrés/relajación.
  - **Campos sugeridos:**
    - `stressLevel`
    - `parasympatheticEmphasis`
    - `hrvTrend` (el texto menciona HRV como indicador de balance autonómico)
    - `sleepQuality`
    - `anxietySymptomFlag`
  - **Referencias:** Cap. 2, pp. 68–99; Cap. 4, pp. 135–159; Cap. 6, pp. 186–209.

- `TissueLoadAdaptation`
  - **Descripción:** Adaptación de tejidos a carga mecánica: hueso, cartílago, tendón, ligamento, fascia.
  - **Campos sugeridos:**
    - `tissueType`
    - `loadType` (bodyweight, compression, tension, balance demand)
    - `currentCapacity`
    - `progressionStage`
    - `painResponse`
    - `noceboRisk`
  - **Referencias:** Cap. 1, pp. 17–67.

- `ReproductiveHealthContext`
  - **Descripción:** Contexto reproductivo para modificar práctica.
  - **Campos sugeridos:**
    - `status` (pregnancy, postpartum, menstruation, menopause, fertilityTreatment)
    - `symptoms`
    - `medicalClearance`
    - `modificationRequirements`
  - **Referencias:** Cap. 7, pp. 210–233.

- `DigestiveHealthContext`
  - **Descripción:** Contexto digestivo y hábitos relacionados.
  - **Campos sugeridos:**
    - `condition` (IBS, IBD, general dysbiosis risk)
    - `mindfulEatingScore`
    - `wholeFoodAdherence`
    - `processedFoodExposure`
    - `alcoholModeration`
    - `fastingStatus`
  - **Referencias:** Cap. 8, pp. 234–260.

- `EvidenceGuardrail`
  - **Descripción:** Regla para evitar claims no soportados.
  - **Campos sugeridos:**
    - `claimId`
    - `allowed`
    - `evidenceStrength`
    - `notes`
  - **Referencias:** Cap. 1, pp. 17–67; Cap. 5, pp. 160–185; Cap. 8, pp. 234–260.

---

### 2.2 Mapeo a tipos existentes

#### `FocusId`

- `mobility`
  - El libro trata la flexibilidad como interacción entre rango activo/pasivo, fuerza, sistema nervioso y tolerancia, no solo elongación muscular.  
  - Útil para modelar movilidad como capacidad controlada, no como “estirar más”.

- `strength`
  - La práctica de yoga puede generar estímulo de adaptación con peso corporal.  
  - Se menciona que, aunque no suele usar resistencia externa, puede ser suficiente para adaptación.

- `tendon-health`
  - Habla de tendones y ligamentos como tejidos ricos en colágeno, importantes para estabilidad y eficiencia de movimiento.  
  - No entrega protocolo específico de tendinitis.

- `hypertrophy`
  - ⚠️ No es foco del libro.  
  - Puede usarse como apoyo de estímulo general, pero no como fuente de dosificación hipertrófica.

- `stress-regulation`
  - Uno de los ejes más útiles: yoga puede favorecer regulación del sistema nervioso, activación parasimpática, reducción de estrés y mejor manejo emocional.

- `cardiovascular-health`
  - Yoga puede apoyar circulación, retorno venoso, regulación de presión arterial y eficiencia cardiovascular, con enfoque conservador.

- `respiratory-function`
  - Respiración, diafragma, postura, respiración nasal y prácticas lentas son centrales.

- `immune-support`
  - El libro es conservador: el ejercicio moderado puede ser beneficioso, pero no hay evidencia directa sólida de que yoga “mejore inmunidad” de forma directa.

- `endocrine-balance`
  - Se menciona cortisol, insulina, tiroides y su relación con estrés/metabolismo, pero sin protocolos hormonales.

- `reproductive-health`
  - Embarazo, menstruación, menopausia, fertilidad y salud reproductiva masculina.

- `digestive-health`
  - Digestión, microbioma, alimentación consciente, IBS/IBD y mitos de detox.

#### `BodyZoneId`

- `lumbar`
  - Se menciona dolor lumbar bajo y problemas musculoesqueléticos; se enfatiza movimiento, mentalidad positiva y carga adaptativa.

- `thorax`
  - Postura y caja torácica afectan la respiración; el slump restringe la mecánica respiratoria.

- `diaphragm` / `abdomen`
  - El diafragma es clave para inhalación y estabilización del torso mediante presión intraabdominal.

- `pelvis`
  - Relacionado con suelo pélvico indirectamente a través de embarazo, menopausia y síntomas pélvicos.

- `heart` / `chest`
  - Función cardiovascular, circulación, respiración y prácticas de relajación.

- `whole-body`
  - Muchas reglas del libro son sistémicas: movimiento general, carga mecánica, regulación autonómica, bienestar general.

#### `MovementPattern`

- `seated-meditation`
  - Base para breath meditation y regulación.

- `dynamic-flow`
  - Sun Salutations y secuencias dinámicas para fuerza, movilidad y flujo.

- `lunge` / `warrior-pattern`
  - Posiciones de fuerza y estabilidad mencionadas en práctica dinámica.

- `supported-inversion`
  - Inversiones y posturas como piernas en la pared pueden favorecer retorno venoso, pero no deben presentarse como garantía de aumento de flujo cerebral.

- `restorative-supported`
  - Posturas con props para relajación y activación parasimpática.

- `twist`
  - Se menciona el mito de que los twists “desintoxican” mecánicamente; no debe usarse ese claim.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

> Importante: el libro aporta pocas dosis numéricas. Cuando no hay números explícitos, se marca como cualitativo y no se inventan valores.

---

### Regla: `yoga-style-selection-by-preference`

- **Descripción breve:** Elegir estilo de yoga según preferencia y accesibilidad, porque distintos estilos no muestran diferencias claras de efectividad.
- **Tipo:** Programación / adherencia.
- **Métrica principal:** `selectedStyle` (categórica) + `adherenceFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** No hay dosis numérica; usar cualquier estilo adecuado al usuario.
  - **Umbrales de riesgo/exceso:** No especifica.
- **Condiciones de aplicación:**
  - Usuarios generales.
  - Si hay limitaciones funcionales, priorizar chair yoga, hatha lento o restaurativo.
- **Capítulos/páginas donde se apoya:**
  - Cap. 9, pp. 261–329.
- **Comentarios/precauciones:**
  - Se menciona investigación de Cramer et al. (2016) indicando que estilos no difieren significativamente en efectividad.
  - No usar estilo como variable médica; usar como variable de preferencia y contexto.

---

### Regla: `progressive-bodyweight-loading`

- **Descripción breve:** La práctica regular con peso corporal produce estímulo mecánico suficiente para adaptación en muchos usuarios.
- **Tipo:** Progresión / carga mecánica.
- **Métrica principal:** `bodyweightLoadingSessions` (presencia regular de práctica con carga corporal).
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No especificado numéricamente; el texto enfatiza regularidad.
  - **Umbrales de riesgo/exceso:** Demasiada poca carga debilita; demasiada puede lesionar (principio Goldilocks).
- **Condiciones de aplicación:**
  - Usuarios generales que buscan salud musculoesquelética.
- **Capítulos/páginas donde se apoya:**
  - Cap. 1, pp. 17–67.
- **Comentarios/precauciones:**
  - Aunque no haya resistencia externa, el cuerpo puede adaptarse.
  - Si hay meseta, progresar variando demanda, no necesariamente añadiendo peso.

---

### Regla: `goldilocks-load-management`

- **Descripción breve:** Mantener la carga entre infrauso y sobreuso para promover adaptación sin exceder tolerancia tisular.
- **Tipo:** Progresión / prevención de lesión.
- **Métrica principal:** `loadToleranceStatus` (cualitativa: insuficiente, adecuada, excesiva).
- **Valores numéricos:**
  - **Rango óptimo:** No numérico; “carga óptima intermedia”.
  - **Umbrales de riesgo/exceso:** Muy poco → desadaptación; demasiado → riesgo de lesión.
- **Condiciones de aplicación:**
  - Cualquier práctica de yoga orientada a tejido conectivo/musculoesquelético.
- **Capítulos/páginas donde se apoya:**
  - Cap. 1, pp. 17–67.
- **Comentarios/precauciones:**
  - Útil para advertencias de progresión y validación de rutinas.

---

### Regla: `joint-cartilage-motion`

- **Descripción breve:** El movimiento regular favorece la nutrición del cartílago, dado que este no tiene suministro sanguíneo directo.
- **Tipo:** Movilidad / salud articular.
- **Métrica principal:** `regularJointMotionFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** No especificado; movimiento regular.
  - **Umbrales de riesgo/exceso:** No especifica.
- **Condiciones de aplicación:**
  - Usuarios generales y práctica articular suave.
- **Capítulos/páginas donde se apoya:**
  - Cap. 1, pp. 17–67.
- **Comentarios/precauciones:**
  - No usar como tratamiento médico para lesiones cartilaginosas sin supervisión.

---

### Regla: `osteoporosis-supervised-loading`

- **Descripción breve:** En osteoporosis, yoga puede ser útil como carga mecánica, pero requiere manejo cuidadoso y supervisión adecuada.
- **Tipo:** Seguridad / población especial.
- **Métrica principal:** `clinicalSupervisionFlag` + `osteoporosisSafeProgression`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No hay dosis exacta.
  - **Umbrales de riesgo/exceso:** Riesgo de empeorar síntomas si la práctica no se adapta.
- **Condiciones de aplicación:**
  - Personas con osteoporosis o riesgo relevante.
- **Capítulos/páginas donde se apoya:**
  - Cap. 1, pp. 17–67.
- **Comentarios/precauciones:**
  - Se menciona un estudio donde 80% de participantes revirtió pérdida ósea con práctica regular, pero el resumen no entrega protocolo exacto.
  - No automatizar progresiones agresivas; requerir validación profesional.

---

### Regla: `hypermobility-active-control`

- **Descripción breve:** En hipermovilidad, priorizar control activo y evitar llevar articulaciones a rangos pasivos extremos sin control.
- **Tipo:** Seguridad / movilidad.
- **Métrica principal:** `activeControlFlag` vs `passiveEndRangeExposure`.
- **Valores numéricos:**
  - **Rango óptimo:** No numérico; énfasis en control activo.
  - **Umbrales de riesgo/exceso:** Exceso de rango pasivo puede empeorar síntomas.
- **Condiciones de aplicación:**
  - Usuarios con hipermovilidad o laxitud articular.
- **Capítulos/páginas donde se apoya:**
  - Cap. 1, pp. 17–67.
- **Comentarios/precauciones:**
  - ⚠️ El libro no da protocolo cerrado; la regla es derivada del principio de manejo cuidadoso y de la distinción entre flexibilidad activa/pasiva.

---

### Regla: `nocebo-aware-language`

- **Descripción breve:** Usar lenguaje positivo y evitar sugestiones de miedo que puedan amplificar percepción de dolor o lesión.
- **Tipo:** Dolor / comunicación / seguridad psicosocial.
- **Métrica principal:** `noceboRiskFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** No numérico; lenguaje neutro/positivo.
  - **Umbrales de riesgo/exceso:** Lenguaje catastrofista → riesgo de aumento de miedo/dolor percibido.
- **Condiciones de aplicación:**
  - Instrucción de yoga, feedback de app, mensajes de recuperación.
- **Capítulos/páginas donde se apoya:**
  - Cap. 1, pp. 17–67.
- **Comentarios/precauciones:**
  - El libro enfatiza empowerment, adaptabilidad y reducción de miedo al movimiento.

---

### Regla: `pain-free-range-practice`

- **Descripción breve:** Mantener el movimiento dentro de un rango libre de dolor, especialmente si hay condición médica o lesión.
- **Tipo:** Dolor / seguridad.
- **Métrica principal:** `painScale0to10` o `painFreeFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** 0 si se interpreta literalmente “rango libre de dolor”.
  - **Umbrales de riesgo/exceso:** Aparición de dolor → modificar, reducir o detener.
- **Condiciones de aplicación:**
  - Usuarios con dolor, rehabilitación leve o práctica adaptada.
- **Capítulos/páginas donde se apoya:**
  - Cap. 9, pp. 261–329.
- **Comentarios/precauciones:**
  - El texto indica permanecer en rango libre de dolor y modificar según necesidad.

---

### Regla: `breath-downshift-slow-breathing`

- **Descripción breve:** La respiración lenta y consciente puede favorecer activación parasimpática y reducción de estrés.
- **Tipo:** Recuperación / regulación autonómica.
- **Métrica principal:** `slowBreathingSessionFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No especifica respiraciones por minuto ni duración.
  - **Umbrales de riesgo/exceso:** Si hay mareo, ansiedad o dificultad respiratoria, reducir o detener.
- **Condiciones de aplicación:**
  - Usuarios que buscan regulación de estrés, recuperación o cierre de sesión.
- **Capítulos/páginas donde se apoya:**
  - Cap. 3, pp. 100–134; Cap. 2, pp. 68–99.
- **Comentarios/precauciones:**
  - No prescribir retenciones agresivas ni hiperventilación sin contexto.

---

### Regla: `nasal-breathing-default`

- **Descripción breve:** Preferir respiración nasal durante yoga por beneficios funcionales.
- **Tipo:** Técnica respiratoria.
- **Métrica principal:** `breathingRoute` (nasal/oral).
- **Valores numéricos:**
  - **Rango óptimo:** Default nasal si es tolerado.
  - **Umbrales de riesgo/exceso:** No especifica; si hay obstrucción o condición médica, adaptar.
- **Condiciones de aplicación:**
  - Práctica general de yoga y respiración.
- **Capítulos/páginas donde se apoya:**
  - Cap. 3, pp. 100–134.
- **Comentarios/precauciones:**
  - El texto menciona ventajas como humidificación, mejor función respiratoria y resistencia al flujo.

---

### Regla: `posture-enables-breathing`

- **Descripción breve:** Mantener postura que permita movimiento libre de caja torácica y diafragma.
- **Tipo:** Técnica / respiración.
- **Métrica principal:** `posturalBreathEfficiencyFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** No numérico; postura erguida y sin colapso.
  - **Umbrales de riesgo/exceso:** Slouching → restricción mecánica de la respiración.
- **Condiciones de aplicación:**
  - Sedestación, meditación, pranayama y asanas donde la respiración sea foco.
- **Capítulos/páginas donde se apoya:**
  - Cap. 3, pp. 100–134.
- **Comentarios/precauciones:**
  - No forzar una postura “perfecta”; priorizar comodidad y expansión respiratoria.

---

### Regla: `contextual-breath-holding`

- **Descripción breve:** La retención de aire no es siempre negativa; puede ayudar a estabilizar en transiciones exigentes, pero no debe prohibirse de forma universal.
- **Tipo:** Técnica respiratoria / estabilidad.
- **Métrica principal:** `breathHoldContextFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** No numérico; uso contextual.
  - **Umbrales de riesgo/exceso:** Retención prolongada o inadecuada → evitar.
- **Condiciones de aplicación:**
  - Transiciones exigentes o esfuerzos donde se necesite presión intraabdominal.
- **Capítulos/páginas donde se apoya:**
  - Cap. 3, pp. 100–134.
- **Comentarios/precauciones:**
  - No usar en usuarios con riesgo cardiovascular sin orientación profesional.

---

### Regla: `cardiovascular-support-practice`

- **Descripción breve:** Yoga puede considerarse apoyo para salud cardiovascular general y riesgo cardiovascular, no reemplazo médico.
- **Tipo:** Salud cardiovascular.
- **Métrica principal:** `cardioSupportFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No hay dosis exacta.
  - **Umbrales de riesgo/exceso:** No especifica.
- **Condiciones de aplicación:**
  - Población general y personas con riesgo cardiovascular leve/moderado, idealmente con supervisión.
- **Capítulos/páginas donde se apoya:**
  - Cap. 4, pp. 135–159.
- **Comentarios/precauciones:**
  - El texto menciona beneficios sobre circulación, retorno venoso, presión arterial y eficiencia cardíaca, pero sin prescripción exacta.

---

### Regla: `hypotension-gradual-transitions`

- **Descripción breve:** En hipotensión, realizar transiciones graduales para reducir mareo.
- **Tipo:** Seguridad cardiovascular.
- **Métrica principal:** `transitionSpeed` (lenta/moderada/rápida).
- **Valores numéricos:**
  - **Rango óptimo:** Transiciones lentas.
  - **Umbrales de riesgo/exceso:** Cambios posturales rápidos → mayor riesgo de mareo.
- **Condiciones de aplicación:**
  - Usuarios con hipotensión o tendencia a mareos posturales.
- **Capítulos/páginas donde se apoya:**
  - Cap. 4, pp. 135–159.
- **Comentarios/precauciones:**
  - Regla cualitativa pero directamente accionable.

---

### Regla: `hot-yoga-heat-awareness`

- **Descripción breve:** En ambientes calurosos, la termorregulación cardiovascular es relevante; la práctica debe adaptarse al estrés térmico.
- **Tipo:** Entorno / seguridad.
- **Métrica principal:** `heatExposureFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No se entregan temperaturas ni protocolos.
  - **Umbrales de riesgo/exceso:** Calor excesivo o mala tolerancia → modificar.
- **Condiciones de aplicación:**
  - Hot yoga o ambientes calurosos.
- **Capítulos/páginas donde se apoya:**
  - Cap. 4, pp. 135–159.
- **Comentarios/precauciones:**
  - No usar como base para prescribir sesiones calientes sin datos adicionales.

---

### Regla: `lymph-flow-movement`

- **Descripción breve:** El movimiento y la contracción muscular pueden favorecer el flujo linfático.
- **Tipo:** Movimiento / sistema linfático.
- **Métrica principal:** `movementForLymphFlowFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No numérico; movimiento regular.
  - **Umbrales de riesgo/exceso:** No especifica.
- **Condiciones de aplicación:**
  - Usuarios generales.
- **Capítulos/páginas donde se apoya:**
  - Cap. 5, pp. 160–185.
- **Comentarios/precauciones:**
  - No afirmar que yoga “drena” linfa de forma directa o garantizada.

---

### Regla: `immune-claim-guardrail`

- **Descripción breve:** No afirmar que yoga mejora directamente la inmunidad; la evidencia directa es limitada.
- **Tipo:** Evidencia / guardrail.
- **Métrica principal:** `claimAllowed` boolean.
- **Valores numéricos:**
  - **Rango óptimo:** `false` para claims directos de mejora inmune.
  - **Umbrales de riesgo/exceso:** Claims exagerados → desinformación.
- **Condiciones de aplicación:**
  - Marketing, copy de app, recomendaciones de salud.
- **Capítulos/páginas donde se apoya:**
  - Cap. 5, pp. 160–185.
- **Comentarios/precauciones:**
  - Se puede decir que el ejercicio moderado es beneficioso, pero no “boost inmune” directo.

---

### Regla: `cancer-qol-support`

- **Descripción breve:** Yoga puede ser herramienta complementaria para calidad de vida en personas con cáncer, no tratamiento curativo.
- **Tipo:** Soporte / calidad de vida.
- **Métrica principal:** `qolSupportFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No numérico.
  - **Umbrales de riesgo/exceso:** No usar como sustituto de tratamiento.
- **Condiciones de aplicación:**
  - Personas con cáncer, con autorización médica.
- **Capítulos/páginas donde se apoya:**
  - Cap. 5, pp. 160–185.
- **Comentarios/precauciones:**
  - Beneficios descritos en calidad de vida, ansiedad y bienestar emocional.

---

### Regla: `stress-single-session-response`

- **Descripción breve:** Incluso una sesión de yoga puede ayudar a controlar estrés.
- **Tipo:** Estrés / recuperación.
- **Métrica principal:** `sessionCompletedFlag` + `stressReductionTrend`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No hay dosis exacta.
  - **Umbrales de riesgo/exceso:** No especifica.
- **Condiciones de aplicación:**
  - Usuarios con estrés cotidiano o necesidad de regulación aguda.
- **Capítulos/páginas donde se apoya:**
  - Cap. 6, pp. 186–209.
- **Comentarios/precauciones:**
  - Útil para recomendar micro-sesiones de regulación sin prometer efecto clínico garantizado.

---

### Regla: `endocrine-depression-support`

- **Descripción breve:** Yoga puede ser apoyo en ciertas condiciones relacionadas con endocrino y salud mental, como depresión, pero no diagnóstico ni tratamiento único.
- **Tipo:** Salud mental / endocrino.
- **Métrica principal:** `supportivePracticeFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No numérico.
  - **Umbrales de riesgo/exceso:** No sustituir atención clínica.
- **Condiciones de aplicación:**
  - Usuarios con síntomas depresivos o estrés crónico, con apoyo profesional si es necesario.
- **Capítulos/páginas donde se apoya:**
  - Cap. 6, pp. 186–209.
- **Comentarios/precauciones:**
  - El texto menciona relación con cortisol, estrés y regulación del sistema nervioso.

---

### Regla: `pregnancy-modified-practice`

- **Descripción breve:** Yoga en embarazo puede ser beneficioso si se adapta y se cuenta con orientación adecuada.
- **Tipo:** Población especial / seguridad.
- **Métrica principal:** `pregnancySafeFlag` + `professionalGuidanceFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No hay dosis exacta.
  - **Umbrales de riesgo/exceso:** Evitar prácticas no adaptadas sin supervisión.
- **Condiciones de aplicación:**
  - Personas embarazadas.
- **Capítulos/páginas donde se apoya:**
  - Cap. 7, pp. 210–233.
- **Comentarios/precauciones:**
  - Se menciona mejora en ansiedad, preparación para parto, bienestar físico/mental y posibles mejores resultados, pero sin protocolo exacto.

---

### Regla: `menstruation-inversions-by-comfort`

- **Descripción breve:** Las inversiones durante menstruación no están contraindicadas por “flujo invertido” según el texto; decidir por comodidad.
- **Tipo:** Salud reproductiva / decisión de práctica.
- **Métrica principal:** `comfortBasedChoiceFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** No numérico; basarse en comodidad y síntomas.
  - **Umbrales de riesgo/exceso:** Si hay dolor o malestar, modificar.
- **Condiciones de aplicación:**
  - Personas menstruantes.
- **Capítulos/páginas donde se apoya:**
  - Cap. 7, pp. 210–233.
- **Comentarios/precauciones:**
  - Regla útil para evitar mitos restrictivos.

---

### Regla: `fertility-stress-support`

- **Descripción breve:** Yoga puede apoyar estrés, ansiedad y bienestar durante tratamientos de fertilidad.
- **Tipo:** Salud reproductiva / apoyo psicológico.
- **Métrica principal:** `fertilitySupportFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No numérico.
  - **Umbrales de riesgo/exceso:** No prometer mejora directa de fertilidad.
- **Condiciones de aplicación:**
  - Personas o parejas en tratamiento de fertilidad.
- **Capítulos/páginas donde se apoya:**
  - Cap. 7, pp. 210–233.
- **Comentarios/precauciones:**
  - Puede mejorar estado psicológico y calidad de vida específica, pero no sustituye tratamiento médico.

---

### Regla: `pms-dysmenorrhea-support`

- **Descripción breve:** Yoga puede ayudar a síntomas de PMS y posiblemente dolor menstrual.
- **Tipo:** Manejo de síntomas.
- **Métrica principal:** `symptomSupportFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No numérico.
  - **Umbrales de riesgo/exceso:** Si el dolor es severo, derivar/profesional.
- **Condiciones de aplicación:**
  - Personas con PMS o dismenorrea.
- **Capítulos/páginas donde se apoya:**
  - Cap. 7, pp. 210–233.
- **Comentarios/precauciones:**
  - No usar como tratamiento único si hay síntomas incapacitantes.

---

### Regla: `digestive-mindful-eating`

- **Descripción breve:** Promover alimentación consciente, alimentos integrales y moderación de procesados/alcohol.
- **Tipo:** Estilo de vida / nutrición.
- **Métrica principal:** `mindfulEatingChecklistScore`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No hay números; checklist cualitativa.
  - **Umbrales de riesgo/exceso:** Comer emocional, exceso de procesados, alcohol no moderado.
- **Condiciones de aplicación:**
  - Usuarios interesados en salud digestiva.
- **Capítulos/páginas donde se apoya:**
  - Cap. 8, pp. 234–260.
- **Comentarios/precauciones:**
  - No usar como plan nutricional clínico sin dietista/profesional.

---

### Regla: `intermittent-fasting-caution`

- **Descripción breve:** El ayuno intermitente puede tener beneficios metabólicos/autofagia, pero no es apto para todos.
- **Tipo:** Nutrición / estilo de vida.
- **Métrica principal:** `fastingSuitabilityFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No se entregan ventanas horarias.
  - **Umbrales de riesgo/exceso:** No apto si hay contraindicación médica, embarazo, trastornos alimentarios, etc. (esto último es precaución de implementación; el texto indica cautela).
- **Condiciones de aplicación:**
  - Usuarios sanos interesados en metabolismo, con precaución.
- **Capítulos/páginas donde se apoya:**
  - Cap. 8, pp. 234–260.
- **Comentarios/precauciones:**
  - No automatizar recomendación de ayuno sin contexto clínico.

---

### Regla: `ibs-ibd-symptom-support`

- **Descripción breve:** Yoga puede mejorar síntomas de IBS/IBD, pero no cura estas condiciones.
- **Tipo:** Salud digestiva / apoyo.
- **Métrica principal:** `digestiveSymptomSupportFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No numérico.
  - **Umbrales de riesgo/exceso:** No sustituir tratamiento médico.
- **Condiciones de aplicación:**
  - Usuarios con IBS/IBD en contexto médico establecido.
- **Capítulos/páginas donde se apoya:**
  - Cap. 8, pp. 234–260.
- **Comentarios/precauciones:**
  - El texto indica que la literatura sugiere mejora sintomática, no cura.

---

### Regla: `digestive-detox-claim-guardrail`

- **Descripción breve:** No afirmar que posturas de yoga detoxifican directamente; el hígado realiza detoxificación bioquímica.
- **Tipo:** Evidencia / guardrail.
- **Métrica principal:** `claimAllowed` boolean.
- **Valores numéricos:**
  - **Rango óptimo:** `false` para claims de detox directo.
  - **Umbrales de riesgo/exceso:** Desinformación.
- **Condiciones de aplicación:**
  - Contenido de app, coaching, marketing.
- **Capítulos/páginas donde se apoya:**
  - Cap. 8, pp. 234–260.
- **Comentarios/precauciones:**
  - Se puede decir que el ejercicio apoya circulación y reduce inflamación, pero no “detox por postura”.

---

### Regla: `restorative-props-relaxation`

- **Descripción breve:** En yoga restaurativo, usar props para lograr relajación completa y soporte.
- **Tipo:** Recuperación / regulación.
- **Métrica principal:** `restorativeRelaxationFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No numérico; criterio subjetivo de relajación.
  - **Umbrales de riesgo/exceso:** Si hay incomodidad o dolor, ajustar.
- **Condiciones de aplicación:**
  - Recuperación, estrés, práctica suave.
- **Capítulos/páginas donde se apoya:**
  - Cap. 9, pp. 261–329.
- **Comentarios/precauciones:**
  - El criterio clave es que la posición permita relajarse plenamente.

---

### Regla: `session-autonomy-rest-modification`

- **Descripción breve:** El usuario puede reducir movimiento, ralentizar o descansar en cualquier momento.
- **Tipo:** Seguridad / autonomía.
- **Métrica principal:** `selfRegulationFlag`.
- **Valores numéricos:**
  - **Rango óptimo:** ⚠️ No numérico.
  - **Umbrales de riesgo/exceso:** Forzar más allá de comodidad/dolor.
- **Condiciones de aplicación:**
  - Todas las sesiones.
- **Capítulos/páginas donde se apoya:**
  - Cap. 9, pp. 261–329.
- **Comentarios/precauciones:**
  - Regla transversal para diseño de sesiones seguras.

---

### Regla: `inversion-circulation-claim-guardrail`

- **Descripción breve:** No afirmar que las inversiones aumentan directamente el flujo cerebral; el cerebro autorregula su suministro.
- **Tipo:** Evidencia / guardrail.
- **Métrica principal:** `claimAllowed` boolean.
- **Valores numéricos:**
  - **Rango óptimo:** `false` para claim de aumento cerebral garantizado.
  - **Umbrales de riesgo/exceso:** Desinformación.
- **Condiciones de aplicación:**
  - Inversiones, contenido educativo.
- **Capítulos/páginas donde se apoya:**
  - Cap. 2, pp. 68–99; Cap. 4, pp. 135–159.
- **Comentarios/precauciones:**
  - Sí puede hablarse de apoyo al retorno venoso, pero no de “más sangre al cerebro” como efecto automático.

---

### Regla: `fascia-claim-caution`

- **Descripción breve:** La fascia es relevante para movimiento y tensión, pero hay debate científico; evitar claims exagerados.
- **Tipo:** Evidencia / guardrail.
- **Métrica principal:** `claimAllowed` boolean.
- **Valores numéricos:**
  - **Rango óptimo:** Claims conservadores.
  - **Umbrales de riesgo/exceso:** Afirmaciones no probadas sobre liberación fascial o curación.
- **Condiciones de aplicación:**
  - Contenido de movilidad, flexibilidad y recuperación.
- **Capítulos/páginas donde se apoya:**
  - Cap. 1, pp. 17–67.
- **Comentarios/precauciones:**
  - Se menciona que la evidencia sigue en desarrollo y hay controversia.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

> ⚠️ El libro no entrega progresiones cuantificadas tipo skill ladder con criterios exactos.  
> Las siguientes rutas se derivan de estilos, prácticas y principios descritos en los capítulos.

---

### SkillPath: `yoga-breath-downshift`

- **Disciplina:** Yoga / regulación respiratoria / recuperación.
- **Objetivo final (en palabras del libro):** Favorecer conciencia respiratoria, ralentizar la respiración y promover un estado de calma/relajación mediante activación parasimpática.
- **Requisitos de seguridad previos:**
  - Postura cómoda y estable.
  - Ausencia de mareo o dificultad respiratoria.
  - No forzar retenciones.
  - Precaución en condiciones respiratorias o cardiovasculares.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Postura sentada estable | Sentarse con soporte y alineación que permita respirar sin colapso torácico. | Puede mantenerse sentado sin lucha postural excesiva. | Slouching, tensión excesiva, incomodidad. | Cap. 3, pp. 100–134; Cap. 9, pp. 261–329 |
| 2 | Conciencia respiratoria | Observar inhalación/exhalación sin cambiar agresivamente el patrón. | Observa respiración sin ansiedad. | Forzar respiración, juzgar “respirar mal”. | Cap. 3, pp. 100–134 |
| 3 | Respiración nasal | Mantener respiración por nariz si es tolerado. | Respiración nasal cómoda y sostenible. | Cambiar a boca sin necesidad, tensión facial. | Cap. 3, pp. 100–134 |
| 4 | Respiración lenta | Enlentecer inhalación/exhalación de forma suave. | Sensación de calma sin mareo. | Hiperventilar, retener demasiado, forzar. | Cap. 3, pp. 100–134; Cap. 2, pp. 68–99 |
| 5 | Cierre restaurativo | Integrar respiración lenta en postura cómoda o Savasana. | Puede descansar con respiración más lenta y tranquila. | Convertirlo en tarea exigente. | Cap. 9, pp. 261–329 |

---

### SkillPath: `restorative-downshift`

- **Disciplina:** Yoga restaurativo / regulación nerviosa.
- **Objetivo final:** Lograr relajación profunda mediante soporte y posturas mantenidas sin esfuerzo.
- **Requisitos de seguridad previos:**
  - Props suficientes.
  - Posición sin dolor.
  - Capacidad de descansar sin incomodidad relevante.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Selección de postura | Elegir postura apoyada que no exija esfuerzo. | La postura parece sostenible. | Elegir postura demasiado exigente. | Cap. 9, pp. 261–329 |
| 2 | Configuración de props | Usar soportes para eliminar tensión. | El cuerpo se siente soportado. | Soporte insuficiente. | Cap. 9, pp. 261–329 |
| 3 | Asentamiento | Permanecer permitiendo relajación progresiva. | Disminuye esfuerzo muscular evidente. | Luchar contra la postura. | Cap. 9, pp. 261–329 |
| 4 | Respiración en calma | Llevar atención a respiración suave. | Respiración más lenta sin forzar. | Control excesivo. | Cap. 9, pp. 261–329 |
| 5 | Savasana | Cierre observando sensaciones y soltando tensión. | Puede descansar con atención tranquila. | Mantener esfuerzo o prisa. | Cap. 9, pp. 261–329 |

---

### SkillPath: `chair-yoga-base`

- **Disciplina:** Yoga accesible / movilidad / fuerza funcional.
- **Objetivo final:** Proveer movilidad y fuerza en formato sentado o apoyado, apto para personas que no pueden realizar posturas tradicionales de suelo.
- **Requisitos de seguridad previos:**
  - Silla estable.
  - Capacidad de sentarse con apoyo razonable.
  - Movimientos dentro de rango libre de dolor.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Sedestación consciente | Sentarse con apoyo y atención respiratoria. | Postura estable sin dolor. | Colapso postural. | Cap. 9, pp. 261–329 |
| 2 | Movilidad segmentaria | Movilizar partes del cuerpo desde la silla. | Movimiento controlado y cómodo. | Compensar con tronco excesivo. | Cap. 9, pp. 261–329 |
| 3 | Fuerza funcional | Ejercicios simples de fuerza usando silla. | Mantiene control y respiración. | Aguantar respiración innecesariamente. | Cap. 9, pp. 261–329 |
| 4 | Transiciones | Pasar de sentado a apoyos/standing si aplica. | Transición segura y gradual. | Transiciones rápidas. | Cap. 9, pp. 261–329 |
| 5 | Integración | Combinar respiración, movilidad y fuerza. | Práctica fluida y segura. | Exigir rango excesivo. | Cap. 9, pp. 261–329 |

---

### SkillPath: `dynamic-loading-flow`

- **Disciplina:** Yoga dinámico / fuerza / movilidad.
- **Objetivo final:** Desarrollar fuerza, control y movilidad mediante secuencias activas con peso corporal.
- **Requisitos de seguridad previos:**
  - Ausencia de dolor agudo relevante.
  - Capacidad de seguir respiración durante movimiento.
  - Opciones de modificación disponibles.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Preparación respiratoria | Establecer respiración y atención. | Respiración estable. | Empezar con prisa. | Cap. 9, pp. 261–329 |
| 2 | Movilidad dinámica | Movimientos suaves para preparar cuerpo. | Movimiento controlado. | Rebotes o rango excesivo. | Cap. 9, pp. 261–329 |
| 3 | Secuencia básica | Sun Salutations o equivalentes simplificados. | Mantiene coordinación respiración-movimiento. | Perder respiración o forma. | Cap. 9, pp. 261–329 |
| 4 | Fuerza en posturas | Warrior/lunges y posiciones activas. | Control, estabilidad y rango activo. | Colapso articular o rango pasivo extremo. | Cap. 9, pp. 261–329 |
| 5 | Modificación y cierre | Usar props, reducir rango y enfriar. | Puede terminar sin dolor ni fatiga excesiva. | Ignorar descanso. | Cap. 9, pp. 261–329; Cap. 1, pp. 17–67 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Sedestación / meditación respiratoria

- **Cues principales:**
  - Sentarse con soporte suficiente.
  - Columna alta sin rigidez.
  - Hombros relajados.
  - Mandíbula suave.
  - Permitir movimiento respiratorio libre.
- **Errores frecuentes:**
  - Slouching que restringe caja torácica.
  - Forzar “respiración correcta”.
  - Decir al usuario que “no sabe respirar”.
  - Convertir la atención respiratoria en evaluación ansiosa.
- **Variantes seguras:**
  - Usar silla.
  - Apoyar espalda.
  - Elevar pelvis si hay incomodidad.
  - Acortar práctica si aparece mareo.
- **Indicaciones específicas por zona:**
  - Si hay dolor lumbar, priorizar soporte y comodidad.
  - Si hay dificultad respiratoria, no forzar patrones.
- **Páginas de referencia:** Cap. 3, pp. 100–134; Cap. 9, pp. 261–329.

---

### Respiración diafragmática / respiración lenta

- **Cues principales:**
  - Permitir que el diafragma descienda y el abdomen/torso respondan sin lucha.
  - Mantener respiración nasal si es posible.
  - Enlentecer exhalación de forma suave.
  - Observar cambios sin hipercontrol.
- **Errores frecuentes:**
  - Respiración torácica alta y tensa.
  - Forzar expansión abdominal artificial.
  - Retener aire innecesariamente.
  - Hiperventilar por intentar “hacerlo bien”.
- **Variantes seguras:**
  - Sentado apoyado.
  - Supino con soporte.
  - Respiración más corta si hay ansiedad.
- **Indicaciones específicas por zona:**
  - Postura torácica colapsada dificulta respiración.
  - El diafragma también participa en estabilidad del torso.
- **Páginas de referencia:** Cap. 3, pp. 100–134.

---

### Carga mecánica y adaptación musculoesquelética

- **Cues principales:**
  - Cargar de forma progresiva.
  - Mantener rango activo controlado.
  - Usar tensión corporal como estímulo.
  - Integrar cuerpo completo, no partes aisladas.
- **Errores frecuentes:**
  - Infrauso prolongado.
  - Sobrecarga brusca.
  - Miedo al movimiento.
  - Buscar solo flexibilidad pasiva sin control.
- **Variantes seguras:**
  - Usar props.
  - Reducir rango.
  - Disminuir velocidad.
  - Introducir descansos.
- **Indicaciones específicas por zona:**
  - Osteoporosis: carga cuidadosa y supervisada.
  - Hipermovilidad: priorizar control activo.
  - Dolor musculoesquelético: evitar lenguaje catastrófico.
- **Páginas de referencia:** Cap. 1, pp. 17–67; Cap. 9, pp. 261–329.

---

### Secuencias dinámicas / Sun Salutations / Warrior

- **Cues principales:**
  - Coordinar movimiento con respiración.
  - Mantener control activo.
  - Permitir reducir amplitud de movimiento.
  - Descansar cuando sea necesario.
- **Errores frecuentes:**
  - Acelerar demasiado.
  - Compensar con zonas no deseadas.
  - Llevar articulaciones a rango pasivo extremo.
  - Ignorar fatiga o dolor.
- **Variantes seguras:**
  - Usar strap o brick.
  - Reducir profundidad de lunge.
  - Hacer versión lenta.
  - Alternar con hatha suave.
- **Indicaciones específicas por zona:**
  - Si hay dolor articular, reducir rango y buscar variante.
  - Si hay hipermovilidad, evitar bloquear articulaciones en rangos extremos.
- **Páginas de referencia:** Cap. 9, pp. 261–329; Cap. 1, pp. 17–67.

---

### Yoga restaurativo / Savasana

- **Cues principales:**
  - Buscar posición en la que puedas relajarte completamente.
  - Usar props para soportar peso.
  - Soltar esfuerzo muscular innecesario.
  - Observar respiración y sensaciones.
- **Errores frecuentes:**
  - Permanecer en postura incómoda.
  - Usar soporte insuficiente.
  - Convertir la relajación en tarea exigente.
  - Terminar bruscamente sin transición.
- **Variantes seguras:**
  - Más props.
  - Posición más simple.
  - Menos tiempo si hay incomodidad.
- **Indicaciones específicas por zona:**
  - Cualquier zona dolorida debe ser soportada o evitada.
- **Páginas de referencia:** Cap. 9, pp. 261–329.

---

### Inversiones suaves / retorno venoso

- **Cues principales:**
  - Priorizar soporte.
  - Transiciones graduales.
  - Mantener comodidad.
  - No buscar efectos cerebrales o circulatorios exagerados.
- **Errores frecuentes:**
  - Usar inversiones agresivas sin control.
  - Ignorar mareo.
  - Asumir que “más inversión = más beneficio”.
- **Variantes seguras:**
  - Piernas en la pared.
  - Bridge soportado.
  - Posiciones neutras si hay intolerancia.
- **Indicaciones específicas por zona:**
  - Precaución con condiciones cardiovasculares no evaluadas.
- **Páginas de referencia:** Cap. 4, pp. 135–159; Cap. 2, pp. 68–99.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

> El libro no define protocolos clínicos cerrados. Esta sección debe usarse como referencia de diseño seguro, no como guía médica.

---

### Lesión / condición: Osteoporosis

- **Zona:** `whole-body`, `lumbar`, `hip` (según contexto).
- **Etiología resumida:** Pérdida de densidad/fortaleza ósea; el hueso responde a carga mecánica.
- **Signos y síntomas clave:** ⚠️ El texto no profundiza en signos clínicos.
- **Stadia / fases:** No define fases.
- **Protocolos de tratamiento o rehab:**
  - **Fase 1:**
    - **Objetivo:** Manejo cuidadoso y seguro.
    - **Qué se hace / qué NO se hace:** Introducir carga adaptada; evitar progresión agresiva sin supervisión.
    - **Criterio para pasar a fase 2:** Tolerancia sin dolor y validación profesional.
  - **Fase 2:**
    - **Objetivo:** Progresión gradual de carga.
    - **Qué se hace / qué NO se hace:** Aumentar demanda de forma conservadora; no usar posturas de riesgo sin criterio clínico.
- **Ejercicios de prehab/movilidad específicos:**
  - Práctica de yoga con peso corporal, equilibrio y fuerza suave.
  - Progresión basada en tolerancia.
- **Umbrales de dolor o red flags:**
  - No hay red flags explícitas en el texto.
  - Dolor nuevo, agudo o progresivo → detener y derivar.
- **Referencias:** Cap. 1, pp. 17–67.

---

### Lesión / condición: Hipermovilidad

- **Zona:** Joints / `whole-body`.
- **Etiología resumida:** Exceso de movilidad articular o laxitud que requiere control activo.
- **Signos y síntomas clave:** ⚠️ No detallados en el texto.
- **Stadia / fases:** No define.
- **Protocolos de tratamiento o rehab:**
  - **Fase 1:**
    - **Objetivo:** Evitar exacerbación de síntomas.
    - **Qué se hace / qué NO se hace:** Priorizar control activo; evitar estiramiento pasivo extremo.
    - **Criterio para pasar a fase 2:** Mayor control activo sin dolor.
  - **Fase 2:**
    - **Objetivo:** Fortalecer estabilidad dentro de rango seguro.
    - **Qué se hace / qué NO se hace:** Progresar fuerza sin llevar articulaciones a límites pasivos.
- **Ejercicios de prehab/movilidad específicos:**
  - Trabajo activo de rango.
  - Posturas con control muscular.
  - Uso de props para limitar rango si es necesario.
- **Umbrales de dolor o red flags:**
  - Dolor articular → modificar.
  - No se especifican red flags clínicas.
- **Referencias:** Cap. 1, pp. 17–67.

---

### Lesión / condición: Dolor lumbar bajo / dolor musculoesquelético

- **Zona:** `lumbar`.
- **Etiología resumida:** Multifactorial; el texto enfatiza movimiento, adaptabilidad y factores psicosociales.
- **Signos y síntomas clave:** Dolor o miedo al movimiento.
- **Stadia / fases:** No define.
- **Protocolos de tratamiento o rehab:**
  - **Fase 1:**
    - **Objetivo:** Reducir miedo y mantener movimiento seguro.
    - **Qué se hace / qué NO se hace:** Educar sobre adaptabilidad; evitar catastrofismo.
    - **Criterio para pasar a fase 2:** Mayor confianza en movimiento.
  - **Fase 2:**
    - **Objetivo:** Carga gradual.
    - **Qué se hace / qué NO se hace:** Progresar movimiento sin exceder tolerancia.
- **Ejercicios de prehab/movilidad específicos:**
  - Movimiento suave, respiración, posturas adaptadas.
- **Umbrales de dolor o red flags:**
  - No especificadas; dolor severo, neurológico o progresivo requiere profesional.
- **Referencias:** Cap. 1, pp. 17–67.

---

### Lesión / condición: Dolor crónico

- **Zona:** Variable / `whole-body`.
- **Etiología resumida:** Puede involucrar sistema nervioso, regulación de estrés y factores contextuales.
- **Signos y síntomas clave:** Dolor persistente, afectación de calidad de vida.
- **Stadia / fases:** No define.
- **Protocolos:**
  - Yoga como complemento, no tratamiento único.
  - Regulación nerviosa, movimiento graduado y educación.
- **Umbrales:** Dolor agudo o cambios preocupantes → profesional.
- **Referencias:** Cap. 2, pp. 68–99.

---

### Lesión / condición: Depresión, PTSD, ansiedad

- **Zona:** Sistema nervioso / salud mental.
- **Etiología resumida:** Relacionada con estrés, HPA axis, regulación emocional y neuroplasticidad.
- **Signos y síntomas clave:** Ansiedad, síntomas depresivos, desregulación de estrés.
- **Stadia / fases:** No define.
- **Protocolos:**
  - Yoga como apoyo suplementario.
  - Prácticas de respiración lenta, meditación, regulación parasimpática.
- **Umbrales:** Crisis, riesgo de autolesión o síntomas severos → profesional de salud mental.
- **Referencias:** Cap. 2, pp. 68–99; Cap. 6, pp. 186–209.

---

### Lesión / condición: Asma

- **Zona:** `thorax` / sistema respiratorio.
- **Etiología resumida:** Condición respiratoria; yoga puede apoyar relajación y postura, pero evidencia como terapia primaria no es concluyente.
- **Signos y síntomas clave:** Dificultad respiratoria, síntomas asmáticos.
- **Stadia / fases:** No define.
- **Protocolos:**
  - Respiración suave, postura, relajación.
  - No usar como reemplazo de tratamiento médico.
- **Umbrales:** Disnea severa o crisis → atención médica.
- **Referencias:** Cap. 3, pp. 100–134.

---

### Lesión / condición: Hipertensión

- **Zona:** Cardiovascular.
- **Etiología resumida:** Regulación de presión arterial, estrés y función cardiovascular.
- **Signos y síntomas clave:** Puede ser asintomática; el texto no detalla clínica.
- **Stadia / fases:** No define.
- **Protocolos:**
  - Práctica controlada, respiración lenta, relajación.
  - Evitar esfuerzos no supervisados si hay riesgo.
- **Umbrales:** Síntomas cardiovasculares → profesional.
- **Referencias:** Cap. 4, pp. 135–159.

---

### Lesión / condición: Hipotensión

- **Zona:** Cardiovascular.
- **Etiología resumida:** Presión arterial baja; cambios posturales pueden causar mareo.
- **Signos y síntomas clave:** Mareo postural.
- **Protocolos:**
  - Transiciones graduales.
  - Posturas soportadas si hay mareo.
- **Umbrales:** Síncope o mareo severo → profesional.
- **Referencias:** Cap. 4, pp. 135–159.

---

### Lesión / condición: Riesgo cardiovascular / retorno venoso

- **Zona:** Cardiovascular / piernas.
- **Etiología resumida:** Retorno venoso, circulación y factores de riesgo cardiovascular.
- **Protocolos:**
  - Movimiento, respiración diafragmática, posturas que favorezcan retorno venoso.
  - Precaución con condiciones agudas.
- **Umbrales:** Sospecha de trombosis, dolor torácico o síntomas agudos → médico.
- **Referencias:** Cap. 4, pp. 135–159.

---

### Lesión / condición: Lymphedema

- **Zona:** Sistema linfático / zona afectada.
- **Etiología resumida:** Drenaje linfático alterado con hinchazón.
- **Stadia / fases:** No define.
- **Protocolos:**
  - El libro indica evidencia inconclusa sobre yoga y drenaje linfático.
  - Usar movimiento suave solo si es apropiado.
- **Umbrales:** Hinchazón aguda, dolor o infección → profesional.
- **Referencias:** Cap. 5, pp. 160–185.

---

### Lesión / condición: Cáncer (apoyo)

- **Zona:** Sistémica.
- **Protocolos:**
  - Yoga como apoyo a calidad de vida.
  - No cura; no sustituye tratamiento oncológico.
- **Umbrales:** Cualquier síntoma nuevo o severo → equipo médico.
- **Referencias:** Cap. 5, pp. 160–185.

---

### Lesión / condición: VIH/SIDA y condiciones crónicas

- **Zona:** Sistémica / inmunológica.
- **Protocolos:**
  - Yoga puede mejorar calidad de vida, pero la evidencia fuerte es limitada.
- **Umbrales:** Manejo médico indispensable.
- **Referencias:** Cap. 5, pp. 160–185.

---

### Lesión / condición: Estrés crónico / desregulación de cortisol

- **Zona:** Sistema nervioso / endocrino.
- **Etiología resumida:** Estrés crónico puede afectar HPA axis y salud física/mental.
- **Protocolos:**
  - Yoga, respiración lenta, meditación, regulación parasimpática.
  - Sueño y hábitos de vida.
- **Umbrales:** Síntomas severos → profesional.
- **Referencias:** Cap. 2, pp. 68–99; Cap. 6, pp. 186–209.

---

### Lesión / condición: PMS / dismenorrea

- **Zona:** `pelvis` / salud reproductiva.
- **Protocolos:**
  - Yoga regular puede apoyar síntomas.
  - No usar como tratamiento único si dolor severo.
- **Umbrales:** Dolor incapacitante o sangrado anómalo → profesional.
- **Referencias:** Cap. 7, pp. 210–233.

---

### Lesión / condición: Infertilidad / tratamiento de fertilidad

- **Zona:** Salud reproductiva.
- **Protocolos:**
  - Apoyo emocional, reducción de estrés, yoga suave.
  - No prometer mejora directa de fertilidad.
- **Umbrales:** Manejo médico reproductivo principal.
- **Referencias:** Cap. 7, pp. 210–233.

---

### Lesión / condición: Embarazo

- **Zona:** `pelvis`, abdomen, sistema musculoesquelético y cardiovascular.
- **Protocolos:**
  - Yoga adaptado, guía profesional, evitar sobreesfuerzo.
  - Beneficios potenciales en ansiedad, preparación y bienestar.
- **Umbrales:** Sangrado, dolor severo, mareo, contracciones o síntomas preocupantes → médico.
- **Referencias:** Cap. 7, pp. 210–233.

---

### Lesión / condición: Menopausia

- **Zona:** Salud reproductiva / sistémica.
- **Protocolos:**
  - Yoga puede ayudar con síntomas físicos/psicológicos, aunque evidencia mixta.
- **Umbrales:** Síntomas severos → profesional.
- **Referencias:** Cap. 7, pp. 210–233.

---

### Lesión / condición: IBS / IBD

- **Zona:** `abdomen` / digestivo.
- **Protocolos:**
  - Yoga puede mejorar síntomas, no curar.
  - Apoyar con alimentación consciente y manejo de estrés.
- **Umbrales:** Dolor severo, sangrado, pérdida de peso o síntomas agudos → médico.
- **Referencias:** Cap. 8, pp. 234–260.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Sueño

- **Qué dice el libro:**
  - La mala calidad de sueño se relaciona con peor respuesta inmune.
  - Yoga/mindfulness pueden mejorar calidad de sueño, incluyendo contexto de embarazo.
- **Regla derivada:**
  - `sleep-support-yoga`: prácticas suaves/restaurativas pueden usarse como apoyo al sueño.
  - **Métrica:** `sleepQualityFlag` o `sleepSupportSessionFlag`.
  - **Valores:** ⚠️ No hay horas exactas recomendadas en el texto.
- **Referencias:** Cap. 5, pp. 160–185; Cap. 7, pp. 210–233.

---

### Estrés

- **Qué dice el libro:**
  - El estrés crónico puede causar disfunción del eje HPA.
  - Yoga puede mejorar regulación del sistema nervioso simpático y promover relajación.
  - Una sesión puede ser útil para control de estrés.
  - La meditación y la respiración lenta son herramientas relevantes.
- **Regla derivada:**
  - `stress-regulation-practice`: incluir respiración lenta, meditación o práctica restaurativa ante estrés elevado.
  - **Métrica:** `stressLevel`, `parasympatheticSessionFlag`.
  - **Valores:** ⚠️ Cualitativos.
- **Referencias:** Cap. 2, pp. 68–99; Cap. 6, pp. 186–209.

---

### Nutrición

- **Qué dice el libro:**
  - Comer con atención y sin prisa.
  - Evitar comer emocionalmente.
  - Priorizar alimentos integrales.
  - Limitar procesados.
  - Suplementos pueden no ser necesarios si la dieta es equilibrada.
  - Moderar alcohol.
  - Mantener actividad física, incluyendo yoga.
  - El ayuno intermitente puede tener beneficios, pero no es para todos.
  - No existe una dieta yóguica estricta; puede haber influencia vegetariana/Ayurveda, pero debe personalizarse.
- **Regla derivada:**
  - `digestive-lifestyle-guidelines`: checklist de hábitos digestivos.
  - **Métrica:** `mindfulEatingScore`, `wholeFoodAdherence`, `alcoholModerationFlag`.
  - **Valores:** ⚠️ No hay macros ni cantidades.
- **Referencias:** Cap. 8, pp. 234–260.

---

### Entrenar enfermo

- **Qué dice el libro:**
  - ⚠️ No se aborda de forma explícita con reglas tipo “above/below the neck”, fiebre o infección.
- **Regla derivada:**
  - No usar este libro para reglas de entrenamiento durante enfermedad aguda.
  - Implementar política conservadora externa: síntomas sistémicos/fiebre → descanso y evaluación.
- **Referencias:** No aplica en el contenido proporcionado.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente de reglas de seguridad y educación para yoga general.
  - Base para `TrainingRule` de regulación autonómica, respiración, estrés y recuperación.
  - Guardrails de evidencia para evitar claims de detox, inmunidad, inversiones y fascia.
  - Contenido de cues para respiración, movilidad, práctica restaurativa y chair yoga.
  - Apoyo para contextos especiales: embarazo, menstruación, menopausia, osteoporosis, hipermovilidad, IBS/IBD y condiciones cardiovasculares leves, siempre con flags de prudencia.
  - Enriquecimiento de `SkillStep` con cues, errores comunes y modificaciones.

- **Limitaciones:**
  - ⚠️ No contiene dosificación numérica robusta: series, repeticiones, tiempos, frecuencias exactas o protocolos cerrados.
  - No debe usarse para diagnosticar condiciones médicas.
  - No debe automatizar intervenciones clínicas para osteoporosis, embarazo, cáncer, enfermedad cardiovascular, IBD/IBD, asma severa o salud mental grave sin supervisión profesional.
  - Muchos beneficios son de apoyo, no curativos.
  - El contenido disponible es parcial en algunas secciones; no se pueden extraer detalles completos de prácticas específicas como Kapalabhati o progresiones avanzadas.

- **Recomendaciones específicas:**
  1. Crear un paquete `rules/yoga_general_safety.ts` con reglas como `pain-free-range-practice`, `session-autonomy-rest-modification`, `hypotension-gradual-transitions`, `osteoporosis-supervised-loading` y `hypermobility-active-control`.
  2. Crear `skills/yoga-breath-downshift.ts` y `skills/restorative-downshift.ts` con pasos, cues y criterios de seguridad basados en respiración, props y relajación.
  3. Crear `guardrails/yoga_claims.ts` para bloquear afirmaciones de detox, boost inmune directo, aumento garantizado de flujo cerebral por inversiones y liberación fascial exagerada.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
Entendido. Como arquitecto del sistema, mi función es preparar los **contratos de datos, interfaces y configuraciones (Data Contracts)** para que los agentes de desarrollo (Coding Agents) los implementen en el repositorio sin tener que volver a leer el libro.

A continuación, presento primero el **Aviso de Información Visual Faltante** (para que sepas qué lagunas existen por las limitaciones del resumen de texto) y luego la **Ejecución Estructurada de las 3 Recomendaciones** en formato de *Blueprints* (Interfaces de TypeScript y objetos de configuración JSON) listos para ser inyectados en el motor de reglas, el motor de skills y el filtro de claims de la app.

---

### ⚠️ Aviso de Información Visual y Contextual Faltante (Gaps de Extracción)

El texto base procesado es un resumen estructurado (Bookey) y no el libro completo con sus láminas. Para que el sistema sea 100% preciso en biomecánica, los agentes de visión/OCR deberían buscar en el libro original los siguientes elementos que **no pudieron ser extraídos como reglas exactas**:

1. **Gráficos de "Try It Yourself" (Experimentos Somáticos):** El texto menciona estas secciones, pero no detalla los pasos exactos de los experimentos de propiocepción o respiración. *Impacto: Faltan micro-experiencias para onboarding de usuarios.*
2. **Mapas de Fascia y Líneas Anatómicas:** Se menciona la controversia de la fascia, pero faltan los diagramas que mapean qué asanas estresan qué líneas fasciales. *Impacto: No se pueden crear reglas de "fascia-stretch" cuantificables.*
3. **Biomecánica de Kapalabhati (Cap. 3):** El resumen corta la explicación de las dinámicas de presión. *Impacto: Faltan las contraindicaciones exactas (ej. presión intraocular, hernias) para bloquear esta técnica en el motor de reglas.*
4. **Alineación Detallada de Asanas Clave:** Faltan las imágenes de *Active Revolved High Lunge*, *Supported Bridge* y *Legs-Up-The-Wall*. *Impacto: Los `primaryCues` y `commonFaults` en los SkillPaths son cualitativos; un agente de visión (Computer Vision) necesitará los ángulos articulares exactos del libro para calibrar la cámara de la app.*
5. **Tablas de Progresión de Carga (Osteoporosis/Hipermovilidad):** El texto menciona el estudio de osteoporosis (80% revirtió pérdida ósea) y el principio Goldilocks, pero no incluye la tabla de series/reps/ángulos seguros para columna. *Impacto: La regla `osteoporosis-supervised-loading` actuará como un *hard-block* (bloqueo duro) hasta que un fisioterapeuta humano defina los parámetros en la app.

---

# Ejecución de las 3 Recomendaciones (Blueprints para Coding Agents)

A continuación, se entregan los contratos de datos (TypeScript Interfaces + JSON Configs) para que el agente de backend los integre en `rules/`, `skills/` y `guardrails/`.

## Recomendación 1: Paquete de Reglas de Seguridad General (`rules/yoga_general_safety.ts`)

Este bloque define cómo el `TrainingRuleEngine` evaluará el estado del usuario y modificará la sesión en tiempo real.

```typescript
// [CONTRATO DE DATOS] Interfaz base para el Motor de Reglas
export interface YogaSafetyRuleConfig {
  id: string;
  type: 'pain' | 'autonomy' | 'cardiovascular' | 'tissue-load';
  condition: Record<string, any>;
  action: 'modify_pose' | 'enforce_rest' | 'block_movement' | 'alert_user';
  cueOverride: string; // Mensaje que la app mostrará al usuario
  source: string; // Referencia al libro
}

// [CONFIGURACIÓN] Reglas extraídas para inyectar en la base de datos
export const YOGA_SAFETY_RULES: YogaSafetyRuleConfig[] = [
  {
    id: 'pain-free-range-practice',
    type: 'pain',
    condition: { userPainReport: { $gt: 0 } }, // Cualquier dolor > 0
    action: 'modify_pose',
    cueOverride: 'El yoga no es una estrategia para evitar el dolor, sino para confrontarlo con seguridad. Reduce el rango de movimiento hasta que estés libre de dolor agudo.',
    source: 'Cap. 9 (Practice With Confidence)'
  },
  {
    id: 'session-autonomy-rest-modification',
    type: 'autonomy',
    condition: { userHeartRate: { $gt: 'zone_3_threshold' }, or: { userFatigueFlag: true } },
    action: 'enforce_rest',
    cueOverride: 'Eres la autoridad de tu cuerpo. Tienes permiso para disminuir el tamaño de los movimientos, ralentizar o entrar en postura del niño (Balasana) ahora.',
    source: 'Cap. 9 (Quotes: "You always have the option...")'
  },
  {
    id: 'hypotension-gradual-transitions',
    type: 'cardiovascular',
    condition: { userProfile: { bloodPressure: 'hypotension' }, movement: { headPositionChange: 'below_to_above_heart' } },
    action: 'alert_user',
    cueOverride: 'Transición detectada. Por favor, sube a postura erguida muy gradualmente para evitar mareos por ajuste barorreceptor.',
    source: 'Cap. 4 (Cardiovascular System Q&A)'
  },
  {
    id: 'osteoporosis-supervised-loading',
    type: 'tissue-load',
    condition: { userProfile: { conditions: ['osteoporosis'] }, poseCategory: ['deep_spinal_flexion', 'extreme_twist'] },
    action: 'block_movement',
    cueOverride: 'Bloqueo de seguridad: La flexión espinal profunda o torsiones extremas requieren supervisión clínica en osteoporosis. Cambiando a extensión suave o carga axial controlada.',
    source: 'Cap. 1 (Injury Prevention and Conditions)'
  },
  {
    id: 'hypermobility-active-control',
    type: 'tissue-load',
    condition: { userProfile: { hypermobilityScore: 'high' }, poseMetrics: { activeROM: { $lt: 'passiveROM_endRange' } } },
    action: 'modify_pose',
    cueOverride: 'Detectado rango pasivo extremo. Activa musculatura (co-contracción) para proteger la cápsula articular. No bloquees las articulaciones.',
    source: 'Cap. 1 (Impact of Stretching and Flexibility)'
  }
];
```

---

## Recomendación 2: SkillPaths de Regulación (`skills/yoga_downshift_skills.ts`)

Estas estructuras alimentan el modelo `SkillPath` / `SkillStep` de la app, permitiendo que el motor de recomendaciones sugiera rutinas de recuperación basadas en el estado del Sistema Nervioso Autónomo (SNA).

```typescript
// [CONTRATO DE DATOS] Estructura de SkillPath
export interface YogaSkillStep {
  stepOrder: number;
  name: string;
  primaryCues: string[];
  commonFaults: string[];
  progressionCriteria: string;
  bailTechniques: string[]; // Qué hacer si falla
}

// [CONFIGURACIÓN] Skill 1: Respiración Parasimpática
export const SKILL_BREATH_DOWNSHIFT = {
  id: 'yoga-breath-downshift',
  discipline: 'Pranayama / Somatic Regulation',
  objective: 'Activar el nervio vago y cambiar el dominance del SNS al SNP.',
  steps: [
    {
      stepOrder: 1,
      name: 'Postura y Expansión Torácica',
      primaryCues: ['Columna erguida sin rigidez', 'Permitir movimiento 3D de las costillas bajas'],
      commonFaults: ['Slouching (restringe el diafragma)', 'Tensión en cuello/hombros'],
      progressionCriteria: 'El usuario puede mantener la postura 2 min sin fatiga postural.',
      bailTechniques: ['Usar soporte de silla', 'Tumbado supino con rodillas flexionadas']
    },
    {
      stepOrder: 2,
      name: 'Enrutamiento Nasal y Conciencia',
      primaryCues: ['Respirar exclusivamente por la nariz', 'Observar el ciclo sin forzar'],
      commonFaults: ['Respiración bucal (pierde humidificación y óxido nítrico)', 'Juzgar la respiración'],
      progressionCriteria: 'Transición fluida a respiración nasal consciente.',
      bailTechniques: ['Si hay congestión, reducir velocidad, no abrir la boca']
    },
    {
      stepOrder: 3,
      name: 'Exhalación Prolongada (Vagal Brake)',
      primaryCues: ['Exhalar más lento de lo que se inhala (ej. ratio 1:2)', 'Relajar el suelo pélvico al exhalar'],
      commonFaults: ['Forzar la exhalación con abdominales (genera tensión)', 'Apnea post-exhalación'],
      progressionCriteria: 'Reducción subjetiva de ansiedad o bajada de HRV en la app.',
      bailTechniques: ['Volver a respiración natural si hay mareo']
    }
  ]
};

// [CONFIGURACIÓN] Skill 2: Yoga Restaurativo
export const SKILL_RESTORATIVE_DOWNSHIFT = {
  id: 'restorative-downshift',
  discipline: 'Restorative Yoga',
  objective: 'Sostén pasivo para desactivar los husos musculares y promover el tono parasimpático.',
  steps: [
    {
      stepOrder: 1,
      name: 'Configuración de Props (Soporte Total)',
      primaryCues: ['El cuerpo no debe hacer esfuerzo para sostenerse', 'Usar mantas/bolsters para eliminar gravedad'],
      commonFaults: ['Dejar espacios vacíos bajo rodillas o cuello'],
      progressionCriteria: 'El usuario reporta 0% de esfuerzo muscular en la zona objetivo.',
      bailTechniques: ['Añadir más soportes, nunca quitarlos']
    },
    {
      stepOrder: 2,
      name: 'Inmovilidad y Retiro Sensorial (Pratyahara)',
      primaryCues: ['Mantener la postura 5-15 minutos', 'Cerrar los ojos o usar antifaz'],
      commonFaults: ['Ajustar la postura constantemente (micro-movimientos de ansiedad)'],
      progressionCriteria: 'Capacidad de permanecer quieto sin impulsos de rascarse o moverse.',
      bailTechniques: ['Si hay dolor, salir MUY LENTAMENTE, nunca de golpe']
    }
  ]
};
```

---

## Recomendación 3: Motor de Guardrails de Evidencia (`guardrails/yoga_claims.ts`)

Este módulo es crítico para el **Generador de Contenido (IA / Copywriting)** y el **Chatbot de la App**. Evitará que el sistema emita afirmaciones pseudocientíficas que el libro explícitamente desmiente (Myth vs. Fact).

```typescript
// [CONTRATO DE DATOS] Interfaz para el Filtro de Claims
export interface EvidenceGuardrail {
  claimCategory: string;
  forbiddenKeywords: string[]; // Regex o palabras clave a interceptar
  scientificReality: string; // La verdad fisiológica según el libro
  systemAction: 'block' | 'rewrite' | 'flag_for_review';
  source: string;
}

// [CONFIGURACIÓN] Base de conocimiento de Mitos vs. Realidad
export const YOGA_EVIDENCE_GUARDRAILS: EvidenceGuardrail[] = [
  {
    claimCategory: 'Detoxification Myth',
    forbiddenKeywords: ['detox', 'squeeze toxins', 'twist to detoxify', 'cleanse organs'],
    scientificReality: 'El hígado y los riñones realizan la desintoxicación bioquímica. Las torsiones no "exprimen" toxinas mecánicamente. El ejercicio apoya la circulación, pero no es un "detox".',
    systemAction: 'rewrite', // El agente de IA debe reescribir el copy automáticamente
    source: 'Cap. 8 (Liver and Detoxification Q&A)'
  },
  {
    claimCategory: 'Immune Boosting Exaggeration',
    forbiddenKeywords: ['boost immune system', 'cure illness', 'prevent infection via yoga'],
    scientificReality: 'No hay evidencia directa de que el yoga "mejore" la función inmune por encima de la homeostasis normal. Reduce el estrés (que deprime la inmunidad), pero no es una vacuna ni un potenciador directo.',
    systemAction: 'rewrite',
    source: 'Cap. 5 (Lymphatic and Immune Systems Q&A)'
  },
  {
    claimCategory: 'Inversion Blood Flow Myth',
    forbiddenKeywords: ['inversions send blood to brain', 'oxygenate brain via headstand'],
    scientificReality: 'El cerebro tiene "autorregulación" (autoregulation). Mantiene un flujo sanguíneo constante sin importar la gravedad o las inversiones. Las inversiones ayudan al retorno venoso sistémico, no a "oxigenar el cerebro".',
    systemAction: 'block', // Bloquear generación de este claim
    source: 'Cap. 2 (Nervous System Q&A: Autoregulation)'
  },
  {
    claimCategory: 'Fascia Release Pseudoscience',
    forbiddenKeywords: ['melt fascia', 'release fascial adhesions', 'hydrating fascia via stretching'],
    scientificReality: 'El rol de la fascia en la transmisión de fuerza es real, pero la idea de que el estiramiento "derrite" o "libera" adherencias fasciales de forma mecánica es controvertida y carece de evidencia empírica sólida en este contexto.',
    systemAction: 'flag_for_review',
    source: 'Cap. 1 (Fascia and Its Controversies)'
  },
  {
    claimCategory: 'Menstruation Inversion Fear',
    forbiddenKeywords: ['avoid inversions during period', 'reverse menstrual flow', 'endometriosis risk from headstand'],
    scientificReality: 'La orientación física no influye en el flujo menstrual (la gravedad no dicta la shedding del endometrio). La decisión de invertir debe basarse puramente en la comodidad y energía de la usuaria, no en mitos de flujo retrógrado.',
    systemAction: 'rewrite',
    source: 'Cap. 7 (Reproductive System Q&A)'
  },
  {
    claimCategory: 'Nocebo Language',
    forbiddenKeywords: ['you will injure your lower back if', 'this pose destroys your knees', 'unsafe for your spine'],
    scientificReality: 'El lenguaje catastrófico induce el efecto Nocebo, aumentando la percepción de dolor. El cuerpo es adaptable y robusto (Goldilocks principle).',
    systemAction: 'rewrite', // Cambiar a lenguaje de empoderamiento y adaptabilidad
    source: 'Cap. 1 (Empowering Movement / Nocebo Q&A)'
  }
];
```

### Siguiente Paso para el Orquestador de Agentes:
1. **Agente de Backend:** Ingerir los JSON/TS anteriores en la base de datos de `Rules`, `Skills` y `ContentFilters`.
2. **Agente de Visión (Computer Vision):** Asignar la tarea de escanear las páginas originales del libro (Capítulos 1, 3 y 9) para extraer los ángulos articulares de los *Try It Yourself* y actualizar los `commonFaults` con métricas de pose estimation (ej. "Rodilla valga > 15 grados").
3. **Agente de UX:** Diseñar los *prompts* de voz (Text-to-Speech) utilizando los `cueOverride` de la Recomendación 1, asegurando un tono que evite el efecto Nocebo (como dicta la última regla del Guardrail).

---

## Ronda 3 — tras: «Este diagnóstico identifica exactamente las brechas estructurales entre un **resumen de alto nivel** (como el de Bookey) y la **especificaci…»
# Validación Cruzada: Especificación Técnica vs. Knowledge Base

He analizado la especificación propuesta contra el contenido completo del resumen de *The Physiology of Yoga*. A continuación presento la **matriz de validación**, las **correcciones necesarias**, los **parámetros adicionales extraíbles** y las **brechas críticas** que deben resolverse antes de ejecutar el pipeline OCR.

---

## 1. Matriz de Validación: Confirmado vs. Asumido

| Parámetro Propuesto | Estado en Knowledge Base | Veredicto |
|---|---|---|
| Rodilla delantera 90° ± 5° (Revolved High Lunge) | ⚠️ **NO aparece explícitamente** en el texto. Cap. 9 Q&A menciona "Active Revolved High Lunge" como ejemplo de ROM activo vs pasivo, pero sin ángulos. | **Asumido clínicamente** — requiere validación con lámina original |
| Rodilla trasera 175°–180° extensión | ⚠️ **No aparece**. | **Asumido clínicamente** |
| Torsión torácica 30°–45° | ⚠️ **No aparece**. Cap. 9 Q&A indica "twists using their trunk muscles" sin cuantificar grados. | **Asumido clínicamente** |
| Supported Bridge: rodillas 90°, cadera 150°–165° | ⚠️ **No aparece** con ángulos. Cap. 4 Q&A confirma que "Supported Bridge Pose" promueve retorno venoso. | **Asumido clínicamente** — pose confirmada, ángulos no |
| Legs-Up-The-Wall: cadera 90°, lumbar neutra | ⚠️ **No aparece** con ángulos. Cap. 4 Q&A confirma "Legs-Up-the-Wall" para circulación. | **Asumido clínicamente** — pose confirmada, ángulos no |
| Kapalabhati contraindicaciones (glaucoma, hernia, HTA, embarazo, cirugía) | ⚠️ **Sección truncada** en el resumen ("Install Bookey App to Unlock Full Text"). No hay lista explícita. | **Asumido clínicamente** — requiere OCR del Cap. 3 completo |
| Osteoporosis: flexión espinal prohibida, rotaciones end-range prohibidas | ⚠️ Cap. 1 Q&A dice "careful management" y menciona el estudio del 80%, pero **no especifica ángulos límite**. | **Asumido clínicamente** — requiere OCR de tablas del Cap. 1 |
| Estudio osteoporosis: 80% revirtió pérdida ósea | ✅ **Confirmado** — Cap. 1 Q&A: "80% of participants reversing their bone loss" | **Validado** |
| Principio Goldilocks (carga óptima intermedia) | ✅ **Confirmado** — Cap. 1 Q&A: "too little activity can weaken tissues, while too much can cause injury" | **Validado** |
| Tensegridad como concepto de práctica dinámica | ✅ **Confirmado** — Cap. 9: "Focuses on concepts such as tensegrity and strength-building" | **Validado** |
| Props: bricks, straps, cushions | ✅ **Confirmado** — Cap. 9 Q&A: "Props like yoga straps, bricks, and cushions support practitioners" | **Validado** |
| Ujjayi y Kapalabhati como técnicas del Cap. 9 | ✅ **Confirmado** — Cap. 9 Q&A: "Techniques such as ujjayi breathing and kapalabhati are suggested" | **Validado** |
| ROM activo vs pasivo (distinción clave) | ✅ **Confirmado** — Cap. 9 Q&A: "active range of motion refers to the ability to engage muscles to produce movement independently" | **Validado** |
| Diafragma → presión intra-abdominal → estabilidad | ✅ **Confirmado** — Cap. 3: "The diaphragm's connection to core muscles contributes to intra-abdominal pressure, significant for stability" | **Validado** |
| Respiración nasal preferida | ✅ **Confirmado** — Cap. 3 Q&A: "Nose breathing has numerous benefits, including warming and humidifying the air, increasing oxygen uptake" | **Validado** |
| Slow breathing → activación parasimpática | ✅ **Confirmado** — Cap. 3 Q&A: "Slow-breathing practices like pranayama activate a parasympathetic, or calming, effect" | **Validado** |
| Rango libre de dolor como criterio | ✅ **Confirmado** — Cap. 9 Q&A: "Mindful movement and remaining within a pain-free range are essential" | **Validado** |
| Nocebo: lenguaje positivo obligatorio | ✅ **Confirmado** — Cap. 1 Q&A: "Using positive language helps prevent the nocebo effect" | **Validado** |

---

## 2. Correcciones y Refinamientos a la Especificación

### 2.1 Corrección Crítica: Kapalabhati

El JSON propuesto incluye contraindicaciones que **no están en el texto disponible**. Esto es un riesgo de implementación:

```
⚠️ PROBLEMA: Las contraindicaciones listadas (glaucoma, hernia, HTA no controlada,
embarazo, cirugía reciente) son estándar clínico general, pero NO se extraen del libro.
El resumen trunca la sección "Kapalabhati and Breath Dynamics" con "Install Bookey App
to Unlock Full Text".

RIESGO: Si se implementan como "extraídas del libro", se viola la trazabilidad
capítulo/página que exige el sistema.

ACCIÓN REQUERIDA:
- Marcar safety_status como "CLINICAL_DEFAULT_PENDING_BOOK_VALIDATION"
- Ejecutar OCR prioritario sobre Cap. 3, sección "Kapalabhati and Breath Dynamics"
- Hasta entonces, mantener el hard-block como fallback conservador
```

### 2.2 Corrección: Ángulos de Computer Vision

Los ángulos propuestos son **clínicamente razonables** pero no provienen del libro. Para mantener la integridad del sistema:

```typescript
// Marcar el origen de cada parámetro angular
interface AngleParameter {
  value: number;
  tolerance: number;
  source: 'book_extracted' | 'clinical_standard' | 'ocr_pending_validation';
  confidence: number; // 0-1
  requiresValidation: boolean;
}

// Ejemplo: Rodilla delantera en Revolved High Lunge
const frontKneeFlexion: AngleParameter = {
  value: 90,
  tolerance: 5,
  source: 'clinical_standard', // ⚠️ NO extraído del libro
  confidence: 0.85, // Alto por consenso clínico, pero no confirmado por fuente
  requiresValidation: true // OCR debe confirmar si el libro da ángulo distinto
};
```

### 2.3 Adición: Parámetros del Diafragma (Cap. 3)

La especificación actual no incluye el rol del diafragma como estabilizador. El libro lo confirma explícitamente:

```json
{
  "component_id": "DIAPHRAGM_CORE_STABILIZATION",
  "source": "Cap. 3, pp. 100-134",
  "confirmed_facts": [
    "Diaphragm contraction presses abdominal contents → inhalation",
    "Diaphragm relaxation → passive exhalation",
    "Diaphragm connection to core → intra-abdominal pressure → stability",
    "Forced exhalation involves strong abdominal contractions"
  ],
  "cv_relevance": {
    "during_breath_holds": "Intra-abdominal pressure stabilizes torso in challenging transitions",
    "during_dynamic_flow": "Diaphragm-core coupling affects pelvic alignment",
    "fault_detection": "Paradoxical breathing (chest rises, abdomen contracts) indicates poor diaphragm engagement"
  }
}
```

### 2.4 Adición: Criterio de Pain-Free Range como Gate Global

El libro establece esto como **principio transversal**, no solo para osteoporosis:

```json
{
  "rule_id": "GLOBAL_PAIN_FREE_GATE",
  "source": "Cap. 9, pp. 261-329",
  "confirmed_quote_paraphrase": "Mindful movement and remaining within a pain-free range are essential to ensure safety and comfort",
  "scope": "ALL_USERS_ALL_POSES",
  "implementation": {
    "pain_report_threshold": 0,
    "action_on_pain": "IMMEDIATE_MODIFY_OR_STOP",
    "cv_integration": "If pose_estimation detects compensatory patterns + user reports discomfort → trigger modification prompt",
    "nocebo_prevention": "Never frame pain as 'damage'. Use empowerment language per Cap. 1."
  }
}
```

### 2.5 Adición: Ujjayi Breathing como Técnica Confirmada

El Cap. 9 Q&A confirma **ujjayi** junto con kapalabhati. La especificación actual solo menciona kapalabhati:

```json
{
  "technique_id": "PRANAYAMA_UJJAYI",
  "source": "Cap. 9 Q&A",
  "execution_type": "SLOW_CONSTRICTED_BREATHING",
  "safety_status": "GENERAL_SAFE",
  "confirmed_purpose": "Promote focus and energize the practitioner",
  "cv_relevance": {
    "audio_cue": "Audible ocean-like sound indicates correct glottal constriction",
    "visual_cue": "Slow chest/abdomen movement, no shoulder elevation",
    "common_fault": "Forcing constriction → neck tension"
  }
}
```

---

## 3. Parámetros Adicionales Extraíbles del Texto (No Incluidos en la Especificación Actual)

### 3.1 Matriz de Estilos de Práctica (Cap. 9)

La especificación actual no modela los 4 estilos como entidades con parámetros distintos:

| Estilo | Intensidad | Uso de Props | Objetivo Principal | Tipo de ROM | Duración de Posturas |
|---|---|---|---|---|---|
| Strong Dynamic | Alta | Bricks, straps | Fuerza, tensegridad | Activo | Corta-media |
| Slow Hatha | Moderada | Modificaciones | Fuerza + mindfulness | Activo-Pasivo | Larga |
| Chair Yoga | Baja | Silla | Movilidad + fuerza accesible | Activo adaptado | Media |
| Restorative | Muy baja | Props completos | Parasimpático, relajación | Pasivo soportado | Muy larga |

**Impacto en CV:** El modelo de visión debe ajustar tolerancias angulares según el estilo. En Restorative, el ROM pasivo es el objetivo. En Strong Dynamic, se debe detectar ROM activo (activación muscular visible).

### 3.2 Regla de Autorregulación del Usuario (Cap. 9)

```json
{
  "rule_id": "USER_AUTONOMY_OVERRIDE",
  "source": "Cap. 9, pp. 261-329",
  "confirmed_quote_paraphrase": "You always have the option to decrease the size of the movements, slow things down, or rest at any time. You are the authority for your body.",
  "implementation": {
    "ui_requirement": "Botón de pausa/modificación siempre visible durante sesión",
    "cv_behavior": "Si el usuario reduce rango voluntariamente → NO marcar como 'fault'. Solo registrar.",
    "voice_prompt": "Nunca decir 'estás haciendo mal'. Siempre ofrecer opciones."
  }
}
```

### 3.3 Regla de No-Diagnóstico (Transversal)

El libro repite consistentemente que yoga es **apoyo complementario**, no tratamiento:

```json
{
  "rule_id": "NO_DIAGNOSIS_OR_CURE_CLAIMS",
  "scope": "ALL_CONTENT_GENERATION",
  "prohibited_patterns": [
    "yoga cures {condition}",
    "yoga treats {condition} directly",
    "this pose fixes {medical_condition}",
    "yoga replaces {medical_treatment}"
  ],
  "allowed_patterns": [
    "yoga may support {symptom} management",
    "yoga can be a complementary practice for {condition}",
    "evidence suggests yoga may improve quality of life in {condition}"
  ],
  "source_conditions": [
    "Cap. 5: 'no scientifically proven direct links between lifestyle interventions and enhanced immune function'",
    "Cap. 8: 'yoga cannot cure IBD or IBS, but literature suggests it can improve symptoms'",
    "Cap. 5: cancer → 'not a cure but beneficial complementary practice'"
  ]
}
```

### 3.4 Parámetros de Savasana (Cap. 9 Q&A)

La especificación actual no incluye Savasana como estado medible:

```json
{
  "pose_id": "SAVASANA_FINAL_RELAXATION",
  "source": "Cap. 9 Q&A",
  "confirmed_focus": [
    "Deepening breath",
    "Noticing bodily sensations",
    "Allowing mind to settle",
    "Letting go of tension",
    "Setting intentions moving forward"
  ],
  "cv_relevance": {
    "expected_state": "Minimal movement, reduced respiratory rate",
    "fault_detection": "N/A — no faults in Savasana",
    "duration_recommendation": "Minimum 2-3 minutes (derived from '60 minutes of relaxation' context)",
    "transition_rule": "Exit slowly, no abrupt movements (aligns with hypotension rule)"
  }
}
```

### 3.5 Parámetros de Gratitude Meditation (Cap. 2 Q&A)

```json
{
  "practice_id": "GRATITUDE_MEDITATION",
  "source": "Cap. 2 Q&A",
  "confirmed_benefits": [
    "Enhances feelings of appreciation and positivity",
    "Complements physical and mental benefits of yoga",
    "Reinforces mental well-being",
    "Supports neuroplasticity",
    "Improves emotional resilience"
  ],
  "implementation": {
    "position_in_session": "Post-Savasana or standalone",
    "cv_requirement": "None (audio-guided)",
    "metrics": "Self-reported mood before/after"
  }
}
```

---

## 4. Brechas Críticas que Requieren OCR Prioritario

| Prioridad | Sección del Libro | Qué Falta | Impacto si No se Resuelve |
|---|---|---|---|
| 🔴 **P0** | Cap. 3: "Kapalabhati and Breath Dynamics" | Sección completa truncada. Sin mecánica de presión, contraindicaciones ni dosificación. | Motor de seguridad respiratorio opera con datos clínicos genéricos, no del libro. |
| 🔴 **P0** | Cap. 6: "Thyroid Hormones" | Sección truncada. Sin detalles sobre efecto de posturas en tiroides. | Regla de inversión para hipotiroidismo no puede parametrizarse. |
| 🟡 **P1** | Cap. 9: "Key Practices Within Each Style" | Truncado después de "Dynamic Movements". Faltan prácticas de Chair y Restorative. | SkillPaths de Chair y Restorative están incompletos. |
| 🟡 **P1** | Cap. 1: Diagramas de fascia | No se pueden extraer mapeos vectoriales sin las imágenes. | `FasciaStretchMatrix` queda vacía. |
| 🟡 **P1** | Cap. 1: Tabla de progresión osteoporosis | Sin tabla exacta de cargas/ángulos. | `OsteoporosisSupervisedLoading` permanece en hard-block. |
| 🟢 **P2** | Cap. 3: "Try It Yourself" sidebars | Sin pasos exactos de experimentos somáticos. | Onboarding propioceptivo sin contenido del libro. |
| 🟢 **P2** | Cap. 4: Láminas de Supported Bridge / Legs-Up-The-Wall | Sin ángulos ilustrados. | CV usa ángulos clínicos asumidos. |

---

## 5. Arquitectura Final Consolidada

Integrando la especificación propuesta + las adiciones de la knowledge base:

```
┌─────────────────────────────────────────────────────────────────┐
│                    PLAN MAESTRO OS — YOGA MODULE                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ SafetyRules  │  │ SkillPaths   │  │ EvidenceGuardrails   │  │
│  │ Engine       │  │              │  │                      │  │
│  │              │  │ • Breath     │  │ • Detox myth         │  │
│  │ • Pain gate  │  │   Downshift  │  │ • Immune boost       │  │
│  │ • Osteoporosis│ │ • Restorative│  │ • Inversion brain    │  │
│  │ • Hypermobility│ │ • Chair     │  │ • Fascia release     │  │
│  │ • Kapalabhati│  │ • Dynamic    │  │ • Nocebo language    │  │
│  │ • Hypotension│  │ • Savasana   │  │ • No cure claims     │  │
│  │ • Pregnancy  │  │ • Gratitude  │  │ • Lunar cycle myth   │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘  │
│         │                 │                      │              │
│         ▼                 ▼                      ▼              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              CV / Pose Estimation Layer                  │   │
│  │                                                         │   │
│  │  • Angle parameters (book_extracted | clinical_standard) │   │
│  │  • Active vs Passive ROM detection                      │   │
│  │  • Compensatory pattern detection                       │   │
│  │  • Diaphragm breathing proxy (chest/abdomen movement)   │   │
│  │  • Style-aware tolerance adjustment                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              User Profile & Context Layer                │   │
│  │                                                         │   │
│  │  • Conditions: osteoporosis, hypermobility, pregnancy   │   │
│  │  • Cardiovascular: hypertension, hypotension            │   │
│  │  • Respiratory: asthma                                  │   │
│  │  • Reproductive: menstruation, menopause, fertility     │   │
│  │  • Digestive: IBS, IBD                                  │   │
│  │  • Mental health: stress, anxiety, depression           │   │
│  │  • Autonomy flag: user can always modify/rest           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              OCR/Vision Agent Pipeline (Pending)         │   │
│  │                                                         │   │
│  │  🔴 P0: Kapalabhati dynamics (Cap. 3)                   │   │
│  │  🔴 P0: Thyroid section (Cap. 6)                        │   │
│  │  🟡 P1: Key Practices full text (Cap. 9)                │   │
│  │  🟡 P1: Fascia diagrams (Cap. 1)                        │   │
│  │  🟡 P1: Osteoporosis loading table (Cap. 1)             │   │
│  │  🟢 P2: Try It Yourself sidebars (multiple chapters)    │   │
│  │  🟢 P2: Asana alignment plates (Cap. 3, 4, 9)           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Confirmación y Siguiente Paso

La especificación técnica propuesta es **arquitectónicamente sólida** y está **alineada con la knowledge base** en todos los puntos donde el texto proporciona información explícita. Los ángulos de CV y las contraindicaciones de Kapalabhati son **asunciones clínicas razonables** que deben marcarse como `ocr_pending_validation` hasta que el pipeline de visión procese el PDF completo.

**Listo para proceder con:**

1. **Ejecución del pipeline OCR/Visión** sobre el PDF completo, priorizando las secciones P0 (Kapalabhati + Thyroid).
2. **Definición de la UI** para micro-experiencias somáticas de "Try It Yourself".
3. **Ingesta de los contratos actualizados** (con las adiciones de diafragma, ujjayi, Savasana, gratitude meditation y user autonomy) en los agentes de desarrollo.

¿Deseas que proceda con alguno de estos tres pasos, o prefieres que primero se resuelvan las brechas P0 mediante el análisis del PDF completo?
