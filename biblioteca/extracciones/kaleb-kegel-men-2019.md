# kaleb-kegel-men-2019 — Extracción recuperada de chat

> **sourceId:** `kaleb-kegel-men-2019` · **origen:** `chat-export-1787415048024` (Extracción Técnica para Sistema de Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Kegel Exercise for Men: Complete Guide to Prevent Erectile Dysfunction, Urinary Incontinence, Premature Ejaculation and Improve Sexual Performance — Extracción para Plan Maestro OS

> Resumen de extracción para implementación en un sistema de fitness/reglas. Todo el contenido está parafraseado; no se copian párrafos largos del libro.  
> ⚠️ El extracto proporcionado no incluye números de página; por eso las referencias usan únicamente capítulo: `Cap. X, s/p`.

---

## 1) Metadatos del libro

- **Título:** Kegel Exercise for Men: Complete Guide to Prevent Erectile Dysfunction, Urinary Incontinence, Premature Ejaculation and Improve Sexual Performance  
- **Autor(es):** Vincent Kaleb  
- **Año:** 2019  
- **Disciplina principal:** Entrenamiento del suelo pélvico masculino / salud urológica y sexual / fisioterapia básica de suelo pélvico.  
- **Enfoque poblacional:** Hombres adultos, especialmente aquellos interesados en mejorar control urinario, erección, eyaculación y desempeño sexual. También menciona hombres con incontinencia, síntomas urinarios, disfunción eréctil, eyaculación precoz y postoperatorio de prostatectomía radical, aunque sin protocolo clínico detallado.  
- **Notas de alcance:**  
  - **Cubre:** qué son los ejercicios de Kegel, localización del suelo pélvico, técnica básica, frecuencia, beneficios, aplicación para eyaculación precoz, disfunción eréctil, orgasmo, incontinencia urinaria y potencia eyaculatoria.  
  - **No cubre explícitamente:** diagnóstico médico, farmacología, cirugía, salud pélvica femenina, dolor pélvico crónico, escalas de dolor, red flags clínicas, progresión avanzada por carga, criterios objetivos de alta, deloads, nutrición, sueño, manejo de enfermedad o estrés.  
  - El libro tiene un enfoque divulgativo y no entrega un protocolo clínico completo.

### Cobertura por capítulo

| Capítulo | Contenido principal | Dónde se captura en esta extracción |
|---|---|---|
| Cap. 1 | Definición de Kegel, condiciones donde puede ayudar, suelo pélvico, control de esfínteres | Secciones 1, 2, 3 y 6 |
| Cap. 2 | Relación con próstata/uretra, localización del suelo pélvico mediante interrupción del chorro | Secciones 2, 3 y 5 |
| Cap. 3 | Técnica básica, duración de contracciones, posiciones, aislamiento, respiración, frecuencia diaria, integración funcional | Secciones 3, 4 y 5 |
| Cap. 4 | Frecuencia semanal/diaria, sesiones, repeticiones, tiempos de contracción/relajación, posiciones | Secciones 3 y 4 |
| Cap. 5 | Lista de beneficios: eyaculación precoz, disfunción eréctil, orgasmo, incontinencia, fuerza eyaculatoria | Secciones 1, 2 y 6 |
| Cap. 6 | Kegel para eyaculación precoz; estudio con 12 semanas y mejora de tiempo eyaculatorio | Secciones 3 y 6 |
| Cap. 7 | Kegel para disfunción eréctil; expectativa de 4 a 6 semanas | Secciones 3 y 6 |
| Cap. 8 | Mejor orgasmo/clímax; relación entre suelo pélvico, envejecimiento, fuerza eyaculatoria y salud sexual | Secciones 2, 5 y 7 |
| Cap. 9 | Incontinencia urinaria; práctica de varios minutos al día, varias veces al día; postoperatorio prostático | Secciones 3 y 6 |
| Cap. 10 | Potencia eyaculatoria, dureza de erección, control del orgasmo, placer, frecuencia de clímax | Secciones 2, 5 y 6 |

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `PelvicFloorKegelPrescription`  
  - **Descripción:** Prescripción básica de ejercicios de suelo pélvico masculino.  
  - **Campos sugeridos:**  
    - `sessionsPerDay: number`  
    - `repsPerSession: number`  
    - `holdSeconds: number`  
    - `relaxSeconds: number`  
    - `positions: Array<'lying' | 'sitting' | 'standing' | 'walking'>`  
    - `daily: boolean`  
    - `useFunctionalTriggers: boolean`  
    - `avoidTrainingDuringUrination: boolean`  
  - **Referencias de capítulo:** Cap. 3, Cap. 4, Cap. 9, s/p.

- `MaleSexualFunctionOutcome`  
  - **Descripción:** Registro de resultados relacionados con función sexual masculina.  
  - **Campos sugeridos:**  
    - `erectionQualityScore?: number`  
    - `perceivedEjaculatoryControl?: number`  
    - `ejaculationTimeSeconds?: number`  
    - `weeksSinceStart: number`  
    - `goal: 'erection' | 'ejaculation-control' | 'orgasm-force' | 'continence'`  
  - **Referencias de capítulo:** Cap. 6, Cap. 7, Cap. 8, Cap. 10, s/p.

- `UrinaryContinenceLog`  
  - **Descripción:** Registro de escapes urinarios y control de vejiga.  
  - **Campos sugeridos:**  
    - `leakageEpisodes?: number`  
    - `triggers: Array<'cough' | 'sneeze' | 'laugh' | 'heavy-effort' | 'post-void'>`  
    - `postProstateSurgery?: boolean`  
    - `clinicallySupervised?: boolean`  
  - **Referencias de capítulo:** Cap. 3, Cap. 9, s/p.

- `PelvicFloorTechniqueCheck`  
  - **Descripción:** Verificación de ejecución correcta de Kegel.  
  - **Campos sugeridos:**  
    - `isolatedPelvicFloorContraction: boolean`  
    - `breathHolding: boolean`  
    - `abdominalCompensation: boolean`  
    - `thighCompensation: boolean`  
    - `gluteCompensation: boolean`  
    - `completeRelaxation: boolean`  
  - **Referencias de capítulo:** Cap. 3, s/p.

- `ClinicalEscalationFlag`  
  - **Descripción:** Banderas para derivar a profesional clínico; el libro no las define, pero son necesarias para uso seguro.  
  - **Campos sugeridos:**  
    - `pain?: boolean`  
    - `hematuria?: boolean`  
    - `acuteUrinaryRetention?: boolean`  
    - `severeIncontinence?: boolean`  
    - `recentPelvicSurgery?: boolean`  
    - `suddenErectileDysfunction?: boolean`  
  - **Referencias de capítulo:** No definido en el libro; sugerido por seguridad. ⚠️

### 2.2 Mapeo a tipos existentes

- `FocusId: pelvic-floor-training`  
  - Cómo lo trata este libro: es el foco central. Propone contracciones repetidas del suelo pélvico para mejorar control urinario, erección, eyaculación y orgasmo.  
  - Referencias: Cap. 1, Cap. 3, Cap. 5.

- `FocusId: continence`  
  - Cómo lo trata este libro: los Kegels se presentan como apoyo para incontinencia urinaria masculina, debilidad de esfínteres y control de vejiga, incluso después de cirugía prostática.  
  - Referencias: Cap. 1, Cap. 9.

- `FocusId: sexual-function`  
  - Cómo lo trata este libro: los Kegels se asocian con mejor control eyaculatorio, erecciones más firmes, orgasmos más intensos y mayor control del clímax.  
  - Referencias: Cap. 5, Cap. 6, Cap. 7, Cap. 8, Cap. 10.

- `FocusId: post-prostatectomy-rehab`  
  - Cómo lo trata este libro: menciona beneficio después de prostatectomía radical y cirugía prostática, pero sin protocolo clínico detallado.  
  - Referencias: Cap. 1, Cap. 9.  
  - ⚠️ Debe manejarse con supervisión clínica en la app.

- `BodyZoneId: pelvic-floor`  
  - Qué dice el libro: el suelo pélvico se describe como una estructura muscular que va desde el coxis hasta el hueso pélvico; su fortalecimiento mejora función de esfínteres y control urinario/eyaculatorio. El músculo pubococcígeo aparece como clave para erección y eyaculación.  
  - Referencias: Cap. 1, Cap. 6, Cap. 7, Cap. 10.

- `BodyZoneId: bladder-urethra`  
  - Qué dice el libro: la uretra transporta orina fuera del cuerpo; los músculos débiles pueden provocar escapes urinarios. Los Kegels ayudarían a controlar el flujo urinario.  
  - Referencias: Cap. 2, Cap. 9.

- `BodyZoneId: prostate`  
  - Qué dice el libro: describe la próstata como órgano cercano a vejiga/uretra y rodeado de músculos que pueden debilitarse. No propone tratar enfermedades prostáticas, sino mejorar control muscular.  
  - Referencias: Cap. 2.

- `BodyZoneId: genital-sexual`  
  - Qué dice el libro: relaciona suelo pélvico con erección, eyaculación, fuerza del orgasmo y control del clímax.  
  - Referencias: Cap. 6, Cap. 7, Cap. 8, Cap. 10.

- `MovementPattern: pelvic-floor-isometric-contraction`  
  - Comentarios: patrón principal: contraer suelo pélvico durante algunos segundos y luego relajar.  
  - Referencias: Cap. 3, Cap. 4.

- `MovementPattern: pelvic-floor-relaxation`  
  - Comentarios: la relajación se presenta como parte del ciclo; se enfatiza relajar el mismo número de segundos que la contracción.  
  - Referencias: Cap. 3, Cap. 4.

- `MovementPattern: functional-pelvic-bracing`  
  - Comentarios: contraer suelo pélvico antes o durante actividades que aumentan presión abdominal: toser, estornudar, reír, esfuerzo físico.  
  - Referencias: Cap. 3.

- `MovementPattern: voluntary-ejaculatory-control`  
  - Comentarios: contraer suelo pélvico antes de eyacular para retrasar o controlar la eyaculación.  
  - Referencias: Cap. 6, Cap. 10.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

> ⚠️ El libro presenta algunas inconsistencias internas de dosis entre capítulos 3, 4 y 9. Se marcan explícitamente donde aparecen.

### Regla: kegel_daily_adherence

- **Descripción breve:** Los ejercicios de Kegel deben realizarse de forma diaria como parte de la rutina.  
- **Tipo:** frecuencia.  
- **Métrica principal:** `daysPerWeek`.  
- **Valores numéricos:**  
  - **Rango óptimo:** 7 días/semana.  
  - **Umbrales de riesgo/exceso:** no especificados por el libro.  
- **Condiciones de aplicación:**  
  - Aplicable a hombres adultos que buscan continencia, control eyaculatorio, mejora de erección u orgasmo.  
  - El libro lo plantea como práctica cotidiana.  
- **Capítulos/páginas donde se apoya:** Cap. 3, Cap. 4, Cap. 9, s/p.  
- **Comentarios/precauciones:**  
  - No hay guía de descanso, deload o manejo de fatiga.  
  - La app debería permitir pausa/derivación si hay dolor, empeoramiento urinario o síntomas médicos.

---

### Regla: kegel_daily_sessions

- **Descripción breve:** Realizar varias sesiones de Kegel al día.  
- **Tipo:** frecuencia.  
- **Métrica principal:** `sessionsPerDay`.  
- **Valores numéricos:**  
  - **Rango óptimo:** 2 a 3 sesiones/día.  
  - **Umbrales de riesgo/exceso:** no especificados.  
- **Condiciones de aplicación:**  
  - Cap. 4 indica mínimo 2 sesiones diarias, idealmente una por la mañana y otra por la noche.  
  - Cap. 3 indica hacerlo 3 veces al día.  
  - Cap. 9 menciona practicar varios minutos al día, varias veces al día, para incontinencia.  
- **Capítulos/páginas donde se apoya:** Cap. 3, Cap. 4, Cap. 9, s/p.  
- **Comentarios/precauciones:**  
  - ⚠️ Inconsistencia: Cap. 3 sugiere 3 veces/día; Cap. 4 sugiere mínimo 2 sesiones/día.  
  - Para implementación segura, usar `2–3 sesiones/día` como rango configurable.  
  - Empezar por 2 sesiones si el usuario es principiante.

---

### Regla: kegel_reps_per_session

- **Descripción breve:** Cada sesión debe incluir un bloque de contracciones y relajaciones repetidas.  
- **Tipo:** volumen.  
- **Métrica principal:** `repsPerSession`.  
- **Valores numéricos:**  
  - **Rango óptimo:** 10 a 30 repeticiones por sesión.  
  - **Umbrales de riesgo/exceso:** no especificados.  
- **Condiciones de aplicación:**  
  - Cap. 4 indica sesiones de 10 a 30 contracciones/relajaciones.  
  - Cap. 3 menciona al menos 3 series de 10 repeticiones por día, aunque la redacción puede interpretarse como objetivo diario.  
- **Capítulos/páginas donde se apoya:** Cap. 3, Cap. 4, s/p.  
- **Comentarios/precauciones:**  
  - ⚠️ Inconsistencia de interpretación: 3 series de 10 diarias vs. 10–30 repeticiones por sesión.  
  - Implementación sugerida: comenzar con 10 repeticiones por sesión y progresar hacia 20–30 solo si la técnica es correcta y no hay molestias.

---

### Regla: kegel_hold_relax_duration

- **Descripción breve:** Cada contracción debe mantenerse unos segundos y luego relajarse el mismo tiempo.  
- **Tipo:** intensidad / tempo.  
- **Métrica principal:** `holdSeconds`, `relaxSeconds`.  
- **Valores numéricos:**  
  - **Rango óptimo:** contracción de 3 a 5 segundos; relajación de 3 a 5 segundos.  
  - **Umbrales de riesgo/exceso:** no especificados.  
- **Condiciones de aplicación:**  
  - Cap. 3 indica contraer 3 segundos y relajar 3 segundos.  
  - Cap. 4 indica ejercicios de alrededor de 10 segundos, divididos en 5 segundos de contracción y 5 segundos de relajación.  
- **Capítulos/páginas donde se apoya:** Cap. 3, Cap. 4, s/p.  
- **Comentarios/precauciones:**  
  - ⚠️ Inconsistencia: 3s/3s vs. 5s/5s.  
  - Implementación sugerida: principiantes con 3s/3s; progresión a 5s/5s cuando haya control adecuado.  
  - No se deben agregar tiempos máximos si el libro no los especifica.

---

### Regla: kegel_session_duration

- **Descripción breve:** Las sesiones pueden durar varios minutos, especialmente en objetivos de continencia.  
- **Tipo:** volumen / tiempo.  
- **Métrica principal:** `minutesPerSession`.  
- **Valores numéricos:**  
  - **Rango óptimo:** aproximadamente 2 a 5 minutos por sesión, según repeticiones y tempo.  
  - **Valor específico mencionado para continencia:** 5 minutos varias veces al día.  
  - **Umbrales de riesgo/exceso:** no especificados.  
- **Condiciones de aplicación:**  
  - Cap. 4 sugiere 10–30 repeticiones con ciclos de ~10 segundos, lo que equivale aproximadamente a 1.7–5 minutos por sesión.  
  - Cap. 9 indica practicar 5 minutos varias veces al día para incontinencia.  
- **Capítulos/páginas donde se apoya:** Cap. 4, Cap. 9, s/p.  
- **Comentarios/precauciones:**  
  - La cifra de 5 minutos es más explícita en Cap. 9 para incontinencia.  
  - Si el usuario no puede completar 5 minutos, comenzar con menos repeticiones manteniendo técnica.

---

### Regla: kegel_position_progression

- **Descripción breve:** Comenzar en posiciones fáciles y progresar a posiciones más funcionales.  
- **Tipo:** progresión.  
- **Métrica principal:** `positionsMastered`.  
- **Valores numéricos:**  
  - **Rango óptimo:** no numérico.  
  - **Progresión sugerida:** sentado/acostado → sentado → de pie → caminando.  
  - **Distribución avanzada:** 1/3 acostado, 1/3 sentado, 1/3 de pie.  
- **Condiciones de aplicación:**  
  - Cap. 3 indica que al inicio puede ser más fácil sentado, y luego hacerlos sentado, de pie o caminando.  
  - Cap. 4 sugiere dividir repeticiones entre acostado, sentado y de pie cuando se domina el ejercicio.  
- **Capítulos/páginas donde se apoya:** Cap. 3, Cap. 4, s/p.  
- **Comentarios/precauciones:**  
  - El libro no da criterio objetivo exacto para pasar de posición.  
  - Implementación sugerida: avanzar cuando el usuario pueda contraer sin compensar y completar el volumen objetivo.

---

### Regla: kegel_isolation_breathing

- **Descripción breve:** Contraer solo el suelo pélvico y respirar libremente.  
- **Tipo:** técnica / seguridad.  
- **Métrica principal:** `breathHolding`, `accessoryMuscleUse`.  
- **Valores numéricos:**  
  - `breathHolding = false`  
  - `abdominalCompensation = false`  
  - `thighCompensation = false`  
  - `gluteCompensation = false`  
- **Condiciones de aplicación:**  
  - Aplicable a todas las series y sesiones.  
- **Capítulos/páginas donde se apoya:** Cap. 3, s/p.  
- **Comentarios/precauciones:**  
  - No usar abdomen, muslos o glúteos como compensación.  
  - No contener la respiración.  
  - Esta regla debería bloquear progresión de volumen si no se cumple.

---

### Regla: kegel_functional_trigger

- **Descripción breve:** Usar contracciones de suelo pélvico ante eventos que aumentan presión abdominal o tras orinar.  
- **Tipo:** prehabilitación / estilo de vida / control urinario.  
- **Métrica principal:** `triggerContractionEnabled`.  
- **Valores numéricos:**  
  - Cualitativo: activar contracción antes/durante tos, estornudo, risa o esfuerzo físico.  
  - Activar después de orinar para eliminar últimas gotas.  
- **Condiciones de aplicación:**  
  - Especialmente relevante para incontinencia, goteo postmiccional o debilidad pélvica.  
- **Capítulos/páginas donde se apoya:** Cap. 3, s/p.  
- **Comentarios/precauciones:**  
  - No sustituye evaluación médica si hay escapes frecuentes, dolor o síntomas urinarios importantes.

---

### Regla: kegel_identification_method

- **Descripción breve:** Localizar el suelo pélvico mediante la sensación de detener el flujo urinario o imaginar que se detiene.  
- **Tipo:** técnica / identificación.  
- **Métrica principal:** `pelvicFloorIdentified`.  
- **Valores numéricos:**  
  - Booleano: `true` cuando el usuario identifica el músculo correcto.  
- **Condiciones de aplicación:**  
  - Solo fase inicial.  
- **Capítulos/páginas donde se apoya:** Cap. 2, Cap. 3, s/p.  
- **Comentarios/precauciones:**  
  - ⚠️ El libro sugiere intentar detener el flujo urinario varias veces para encontrar el músculo.  
  - Para implementación segura, usar esa maniobra solo como referencia puntual de identificación, no como ejercicio repetido durante la micción.  
  - Una vez identificado, practicar en seco y sin interrumpir la orina.

---

### Regla: kegel_ed_reassessment

- **Descripción breve:** Evaluar mejora de erección después de 4 a 6 semanas de práctica constante.  
- **Tipo:** progresión / reevaluación.  
- **Métrica principal:** `weeksToErectionReassessment`.  
- **Valores numéricos:**  
  - **Rango óptimo:** 4 a 6 semanas.  
  - **Umbral de reevaluación:** si no hay mejora perceptible tras 4–6 semanas, considerar revisión profesional.  
- **Condiciones de aplicación:**  
  - Solo para objetivo de disfunción eréctil leve o mejora de calidad de erección.  
- **Capítulos/páginas donde se apoya:** Cap. 7, s/p.  
- **Comentarios/precauciones:**  
  - El libro presenta esto como expectativa, no como garantía.  
  - La disfunción eréctil puede tener causas médicas; la app no debe diagnosticar.

---

### Regla: kegel_pe_program_duration

- **Descripción breve:** Mantener un programa de suelo pélvico durante 12 semanas para evaluar mejora en eyaculación precoz.  
- **Tipo:** progresión / duración de programa.  
- **Métrica principal:** `programWeeks`, `ejaculationTimeSeconds`.  
- **Valores numéricos:**  
  - **Duración del programa:** 12 semanas.  
  - **Resultado reportado en estudio:** 82% de mejora en participantes que completaron.  
  - **Tiempo eyaculatorio medio inicial:** 32 segundos.  
  - **Tiempo eyaculatorio final reportado:** más de 2 minutos.  
- **Condiciones de aplicación:**  
  - Contexto de eyaculación precoz de toda la vida en el estudio citado.  
  - Participantes habían probado previamente otras opciones sin éxito.  
- **Capítulos/páginas donde se apoya:** Cap. 6, s/p.  
- **Comentarios/precauciones:**  
  - ⚠️ El libro no especifica la dosis exacta usada en el estudio; solo dice entrenamiento pélvico durante 12 semanas.  
  - No debe prometerse el mismo resultado.  
  - Usar como expectativa observacional, no como regla médica.

---

### Regla: kegel_continence_dose

- **Descripción breve:** Para incontinencia, practicar varios minutos al día, varias veces al día.  
- **Tipo:** rehabilitación / frecuencia.  
- **Métrica principal:** `minutesPerSession`, `sessionsPerDay`.  
- **Valores numéricos:**  
  - **Dosis mencionada:** 5 minutos, varias veces al día.  
  - **Umbrales de riesgo/exceso:** no especificados.  
- **Condiciones de aplicación:**  
  - Aplicable a objetivo de control urinario masculino.  
  - En postoperatorio de cirugía prostática, debería requerir supervisión clínica.  
- **Capítulos/páginas donde se apoya:** Cap. 9, s/p.  
- **Comentarios/precauciones:**  
  - El libro afirma que la incontinencia masculina puede ser mejorable/prevenible con control de vejiga, pero no define criterios clínicos.  
  - La app debe evitar afirmaciones absolutas de cura.

---

### Regla: kegel_progression_gate

- **Descripción breve:** No aumentar volumen, duración o posición si no hay aislamiento correcto.  
- **Tipo:** progresión / validación técnica.  
- **Métrica principal:** `canProgress`.  
- **Valores numéricos:**  
  - `canProgress = true` solo si:  
    - `isolatedPelvicFloorContraction = true`  
    - `breathHolding = false`  
    - `abdominalCompensation = false`  
    - `thighCompensation = false`  
    - `gluteCompensation = false`  
- **Condiciones de aplicación:**  
  - Todas las progresiones de Kegel.  
- **Capítulos/páginas donde se apoya:** Cap. 3, s/p.  
- **Comentarios/precauciones:**  
  - El libro no da criterios numéricos de progreso, pero sí enfatiza ejecución correcta.  
  - Esta regla traduce esa idea a criterio implementable.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: male-kegel-foundation

- **Disciplina:** suelo pélvico masculino / salud urológica y sexual.  
- **Objetivo final (parafraseado):** Fortalecer el suelo pélvico para mejorar control urinario, control eyaculatorio, calidad de erección, fuerza del orgasmo y potencia eyaculatoria.  
- **Requisitos de seguridad previos:**  
  - El libro no especifica requisitos formales de seguridad.  
  - Para implementación segura:  
    - No usar como diagnóstico.  
    - Requiere derivación clínica si hay dolor, sangre en orina, retención urinaria, incontinencia severa, disfunción eréctil súbita o postoperatorio reciente.  
    - En postoperatorio de prostatectomía/cirugía prostática, exigir supervisión clínica. ⚠️  
- **Pasos de la progresión:**  
  - ⚠️ El libro no define fases numeradas. La siguiente estructura se deriva de sus capítulos 2, 3, 4, 6, 7 y 9.

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Identificación del suelo pélvico | Reconocer los músculos usados para detener o imaginar detener la orina. | Usuario reporta sensación correcta sin empujar hacia abajo. | Usar abdomen, glúteos o muslos; contener respiración; hacer fuerza abdominal. | Cap. 2–3, s/p. ⚠️ No convertir interrupción de orina en ejercicio repetido. |
| 2 | Contracción-relajación básica | Contraer suelo pélvico 3 segundos y relajar 3 segundos, en posición cómoda. | Puede realizar varias repeticiones manteniendo aislamiento y respiración. | No relajar; apresurar; usar músculos accesorios. | Cap. 3, s/p. |
| 3 | Volumen diario inicial | Realizar 2 sesiones/día de 10 repeticiones con 3s/3s o 5s/5s según nivel. | Completa volumen sin compensaciones y sin empeoramiento de síntomas. | Exceso de series, fatiga, apnea, dolor o molestia. | Cap. 3–4, s/p. ⚠️ Dosis inconsistente; usar rango. |
| 4 | Progresión de posiciones | Practicar sentado, luego de pie y después caminando; repartir entre acostado, sentado y de pie. | Puede ejecutar contracción aislada en distintas posiciones. | Perder control al estar de pie; compensar con piernas o glúteos. | Cap. 3–4, s/p. |
| 5 | Control funcional | Contraer antes/durante tos, estornudo, risa, esfuerzo físico y tras orinar para últimas gotas. | Usuario usa la contracción en situaciones funcionales y reduce escapes/goteo si aplica. | Olvidar activación; usar demasiada fuerza global; apnea. | Cap. 3, s/p. |
| 6 | Control sexual/eyaculatorio | Usar contracción voluntaria para retrasar eyaculación o apoyar control del orgasmo/erección. | Mejora percibida tras 4–6 semanas para erección o 12 semanas para eyaculación precoz. | Contraer demasiado tarde; generar tensión excesiva; usarlo como única intervención. | Cap. 6–7, Cap. 10, s/p. |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Kegel básico masculino

- **Cues principales:**  
  - “Localiza el músculo correcto: como si detuvieras el flujo de orina.”  
  - “Contrae solo el suelo pélvico.”  
  - “Relaja completamente después de cada contracción.”  
  - “Respira libremente; no contengas el aire.”  
  - “Mantén abdomen, muslos y glúteos suaves.”  
  - “Empieza sentado o acostado si te resulta más fácil.”  
- **Errores frecuentes:**  
  - Apretar abdomen.  
  - Apretar muslos.  
  - Apretar glúteos.  
  - Contener la respiración.  
  - No relajar entre repeticiones.  
  - Intentar progresar sin aislar el suelo pélvico.  
  - Usar repetidamente la interrupción del chorro urinario como entrenamiento.  
- **Variantes seguras y progresiones sugeridas:**  
  - Reducir tiempo de contracción a 3 segundos si 5 segundos es difícil.  
  - Reducir repeticiones si hay fatiga o mala técnica.  
  - Practicar primero sentado o acostado.  
  - Pasar a sentado, de pie y caminando cuando haya control.  
  - Repartir repeticiones entre posiciones cuando se domina el ejercicio.  
- **Indicaciones específicas por zona:**  
  - Zona principal: suelo pélvico.  
  - Si hay dolor pélvico, molestia urinaria o síntomas médicos, no automatizar progresión; derivar a profesional.  
  - En postoperatorio prostático, no usar como protocolo autónomo sin supervisión clínica.  
- **Referencias:** Cap. 2, Cap. 3, Cap. 4, s/p.

### Kegel funcional para escapes o presión abdominal

- **Cues principales:**  
  - “Activa el suelo pélvico antes de toser.”  
  - “Activa antes de estornudar.”  
  - “Activa antes de reír.”  
  - “Activa antes de esfuerzos físicos.”  
  - “Después de orinar, contrae suavemente para eliminar últimas gotas.”  
- **Errores frecuentes:**  
  - Activar demasiado tarde.  
  - Hacer fuerza con abdomen.  
  - Contener la respiración durante el esfuerzo.  
  - Convertir el gesto en una maniobra brusca.  
- **Variantes seguras:**  
  - Practicar primero en situaciones de baja intensidad.  
  - Usar recordatorios asociados a rutinas diarias, como cepillarse los dientes o terminar de orinar.  
- **Indicaciones específicas por zona:**  
  - Relevante para vejiga, uretra y control de esfínteres.  
  - Si hay incontinencia severa, dolor o sangre en orina, derivar.  
- **Referencias:** Cap. 3, Cap. 9, s/p.

### Kegel para control eyaculatorio

- **Cues principales:**  
  - “Identifica el músculo que controla el flujo urinario.”  
  - “Entrénalo de forma regular para mejorar control.”  
  - “Contrae antes del momento de eyacular si buscas retrasar.”  
  - “Mantén respiración fluida.”  
- **Errores frecuentes:**  
  - Contraer solo durante el acto sexual sin entrenamiento previo.  
  - Contraer demasiado tarde.  
  - Generar tensión excesiva en abdomen/glúteos.  
  - Esperar resultados inmediatos.  
- **Variantes seguras:**  
  - Entrenar primero en sesiones básicas diarias.  
  - Reevaluar a las 12 semanas para eyaculación precoz.  
  - Combinar con expectativa realista: el libro reporta mejora, pero no garantía universal.  
- **Indicaciones específicas por zona:**  
  - Músculo principal mencionado: pubococcígeo.  
  - Si hay eyaculación precoz severa, dolor, ansiedad importante o problemas de pareja, considerar enfoque multidisciplinar.  
- **Referencias:** Cap. 6, Cap. 10, s/p.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: incontinencia urinaria masculina / debilidad de esfínteres

- **Zona:** `pelvic-floor`, `bladder-urethra`.  
- **Etiología resumida:**  
  - Debilidad del suelo pélvico y de músculos asociados a vejiga/uretra.  
  - Puede relacionarse con cirugía prostática según el libro.  
- **Signos y síntomas clave:**  
  - Escape de orina.  
  - Menor control de vejiga.  
  - Goteo después de orinar.  
  - Pérdidas con tos, estornudo, risa o esfuerzo físico.  
- **Stadia / fases:**  
  - El libro no define fases clínicas.  
- **Protocolos de tratamiento o rehab:**  
  - **Fase 1 — Identificación y técnica básica:**  
    - **Objetivo:** localizar suelo pélvico y contraerlo sin compensaciones.  
    - **Qué se hace:** identificación mediante referencia a detener orina o imaginar detenerla; contracciones suaves sentado/acostado.  
    - **Qué NO se hace:** no convertir interrupción de orina en entrenamiento repetido; no usar abdomen/glúteos; no contener respiración.  
    - **Criterio para pasar a fase 2:** puede aislar el músculo y completar algunas repeticiones con respiración libre.  
  - **Fase 2 — Volumen diario:**  
    - **Objetivo:** construir tolerancia y control.  
    - **Qué se hace:** 2–3 sesiones/día; 10–30 repeticiones por sesión; contracciones de 3–5 segundos con relajación equivalente.  
    - **Qué NO se hace:** no progresar si hay mala técnica o síntomas de alarma.  
    - **Criterio para pasar a fase 3:** completar volumen con técnica correcta.  
  - **Fase 3 — Aplicación funcional:**  
    - **Objetivo:** usar el suelo pélvico en actividades que aumentan presión abdominal.  
    - **Qué se hace:** contraer antes de toser, estornudar, reír, esfuerzos y después de orinar.  
    - **Qué NO se hace:** no confiar solo en ejercicios si hay incontinencia severa.  
    - **Criterio para mantenimiento:** control funcional y reducción percibida de escapes.  
- **Ejercicios de prehab/movilidad específicos:**  
  - Contracción básica de suelo pélvico.  
  - Relajación completa entre contracciones.  
  - Activación funcional antes de presión abdominal.  
  - Activación después de orinar para últimas gotas.  
- **Umbrales de dolor o red flags:**  
  - El libro no define umbrales de dolor ni red flags.  
  - Para implementación segura: detener y derivar si hay dolor, ardor urinario, sangre en orina, fiebre, retención urinaria, empeoramiento brusco o síntomas neurológicos. ⚠️  
- **Referencias:** Cap. 1, Cap. 2, Cap. 3, Cap. 4, Cap. 9, s/p.

---

### Lesión / condición: disfunción eréctil (apoyo mediante suelo pélvico)

- **Zona:** `pelvic-floor`, `genital-sexual`.  
- **Etiología resumida:**  
  - El libro plantea que un suelo pélvico/pubococcígeo débil puede dificultar mantener sangre dentro del pene erecto.  
  - No cubre otras causas médicas comunes.  
- **Signos y síntomas clave:**  
  - Menor calidad de erección.  
  - Dificultad para mantener erección.  
- **Stadia / fases:**  
  - No definidas.  
- **Protocolos de tratamiento o rehab:**  
  - **Fase 1 — Entrenamiento básico:**  
    - **Objetivo:** activar y fortalecer suelo pélvico.  
    - **Qué se hace:** contracciones diarias con buena técnica.  
    - **Qué NO se hace:** no usarlo como único tratamiento si hay disfunción eréctil médica o súbita.  
    - **Criterio para pasar a fase 2:** técnica correcta y adherencia.  
  - **Fase 2 — Consolidación:**  
    - **Objetivo:** mantener dosis diaria durante semanas.  
    - **Qué se hace:** 2–3 sesiones/día, 10–30 repeticiones, 3–5 segundos contracción/relajación.  
    - **Qué NO se hace:** no aumentar volumen si hay dolor o mala técnica.  
    - **Criterio de reevaluación:** 4 a 6 semanas para notar cambios en erección.  
  - **Fase 3 — Integración sexual:**  
    - **Objetivo:** usar control pélvico como apoyo a erección y eyaculación.  
    - **Qué se hace:** aplicar contracción voluntaria según necesidad.  
    - **Qué NO se hace:** no prometer resultado.  
- **Ejercicios de prehab/movilidad específicos:**  
  - Kegel básico.  
  - Kegel en distintas posiciones.  
  - Contracción funcional durante esfuerzo.  
- **Umbrales de dolor o red flags:**  
  - No definidos por el libro.  
  - Derivar si hay disfunción eréctil súbita, dolor pélvico, síntomas urinarios importantes, antecedentes cardiovasculares relevantes o falta de mejora. ⚠️  
- **Referencias:** Cap. 5, Cap. 7, Cap. 10, s/p.

---

### Lesión / condición: eyaculación precoz (apoyo mediante suelo pélvico)

- **Zona:** `pelvic-floor`, `genital-sexual`.  
- **Etiología resumida:**  
  - El libro la relaciona con menor control del músculo pubococcígeo.  
- **Signos y síntomas clave:**  
  - Eyaculación antes de lo deseado.  
  - Baja percepción de control eyaculatorio.  
- **Stadia / fases:**  
  - No definidas.  
- **Protocolos de tratamiento o rehab:**  
  - **Fase 1 — Entrenamiento base:**  
    - **Objetivo:** fortalecer pubococcígeo.  
    - **Qué se hace:** sesiones diarias de Kegel.  
    - **Qué NO se hace:** no depender solo de la contracción durante el sexo sin entrenamiento previo.  
    - **Criterio para pasar a fase 2:** técnica correcta y adherencia.  
  - **Fase 2 — Programa de 12 semanas:**  
    - **Objetivo:** evaluar mejora del tiempo eyaculatorio.  
    - **Qué se hace:** mantener práctica pélvica durante 12 semanas.  
    - **Qué NO se hace:** no garantizar resultados.  
    - **Criterio de reevaluación:** comparar tiempo/percepción tras 12 semanas.  
  - **Fase 3 — Aplicación durante actividad sexual:**  
    - **Objetivo:** contraer antes de eyacular para retrasar.  
    - **Qué se hace:** usar contracción voluntaria cuando se acerca el punto de eyaculación.  
    - **Qué NO se hace:** no usar como sustituto de terapia sexual, psicológica o médica si se necesita.  
- **Ejercicios de prehab/movilidad específicos:**  
  - Kegel básico.  
  - Kegel con control de relajación.  
  - Contracción voluntaria previa a eyaculación.  
- **Umbrales de dolor o red flags:**  
  - No definidos por el libro.  
  - Derivar si hay dolor, disfunción eréctil concurrente, ansiedad severa o ausencia de mejora tras 12 semanas. ⚠️  
- **Referencias:** Cap. 5, Cap. 6, Cap. 10, s/p.

---

### Lesión / condición: postoperatorio de prostatectomía radical / cirugía prostática

- **Zona:** `pelvic-floor`, `prostate`, `bladder-urethra`.  
- **Etiología resumida:**  
  - El libro menciona Kegels como apoyo después de prostatectomía radical y cirugía prostática, especialmente para control urinario.  
- **Signos y síntomas clave:**  
  - Incontinencia o escapes tras cirugía.  
  - Menor control urinario.  
- **Stadia / fases:**  
  - No definidas.  
- **Protocolos de tratamiento o rehab:**  
  - **Fase única descrita por el libro:** práctica regular de Kegels.  
  - **Objetivo:** recuperar/controlar función urinaria.  
  - **Qué se hace:** contracciones regulares, varios minutos al día, varias veces al día.  
  - **Qué NO se hace:** no automatizar protocolo postquirúrgico sin autorización médica.  
- **Ejercicios de prehab/movilidad específicos:**  
  - Kegel básico.  
  - Activación funcional ante presión abdominal.  
- **Umbrales de dolor o red flags:**  
  - No definidos por el libro.  
  - Debe requerir supervisión clínica.  
  - Derivar si hay dolor, sangre en orina, fiebre, retención urinaria o empeoramiento. ⚠️  
- **Referencias:** Cap. 1, Cap. 9, s/p.

---

### Lesión / condición: síntomas urinarios bajos / vejiga hiperactiva mencionada

- **Zona:** `bladder-urethra`, `pelvic-floor`.  
- **Etiología resumida:**  
  - El libro menciona vejiga hiperactiva y síntomas urinarios masculinos como condiciones donde Kegel puede ser útil, pero no desarrolla protocolo.  
- **Signos y síntomas clave:**  
  - No detallados en el libro.  
- **Stadia / fases:**  
  - No definidas.  
- **Protocolos:**  
  - Solo se puede usar la recomendación general de práctica regular de suelo pélvico.  
- **Umbrales de dolor o red flags:**  
  - No definidos.  
- **Referencias:** Cap. 1, s/p.  
- ⚠️ Esta condición queda con información insuficiente; la app no debería crear reglas específicas más allá del Kegel básico sin fuentes clínicas adicionales.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

- **Sueño:**  
  - No cubierto por el libro.  
  - No hay recomendaciones de horas ni relación con rendimiento/lesiones.

- **Estrés:**  
  - No cubierto como factor de recuperación.  
  - El libro menciona de forma general que la salud sexual incluye aspectos psicológicos, emocionales y físicos, pero no da reglas medibles.  
  - Implementación sugerida: tratar como factor cualitativo, no como regla numérica.

- **Nutrición:**  
  - No cubierta.  
  - No hay recomendaciones específicas.

- **Entrenar enfermo:**  
  - No cubierto.  
  - No hay reglas tipo “above/below the neck”, fiebre, infección, etc.

- **Actividad física general:**  
  - El libro menciona que el ejercicio cardiovascular y el entrenamiento muscular son beneficiosos para circulación y resistencia, y que los Kegels complementan áreas pélvicas normalmente descuidadas.  
  - Regla cualitativa posible:  
    - `combinePelvicFloorWithGeneralFitness`  
    - Tipo: estilo de vida / acondicionamiento general.  
    - Métrica: no numérica.  
    - Condición: usuarios que buscan salud sexual o pélvica.  
    - Referencia: Cap. 8, s/p.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**  
  - Fuente básica para crear reglas de iniciación al entrenamiento de suelo pélvico masculino.  
  - Fuente de cues técnicos para `SkillStep` de Kegel masculino.  
  - Fuente para expectativas temporales:  
    - 4–6 semanas para cambios percibidos en erección.  
    - 12 semanas para programa de eyaculación precoz.  
    - Práctica diaria de varios minutos para continencia.  
  - Fuente para integración funcional: contracciones antes de tos, estornudo, risa, esfuerzo y después de orinar.  
  - Fuente para mapear beneficios en `sexual-function`, `continence`, `pelvic-floor-training` y `post-prostatectomy-support`.

- **Limitaciones:**  
  - ⚠️ Dosis inconsistente entre capítulos: 3 sesiones/día vs. mínimo 2 sesiones/día; 3s/3s vs. 5s/5s; series de 10 vs. 10–30 repeticiones por sesión.  
  - El libro no entrega escalas de dolor, criterios de alta, red flags ni fases clínicas.  
  - No especifica protocolo exacto del estudio de eyaculación precoz.  
  - Trata condiciones médicas sensibles: disfunción eréctil, eyaculación precoz, incontinencia, postoperatorio prostático.  
  - No debe usarse para diagnosticar, tratar ni reemplazar intervención médica, urológica o de fisioterapia especializada.  
  - No debería usarse como fuente única para protocolos postquirúrgicos.

- **Recomendaciones específicas:**  
  1. Crear un paquete de reglas `rules/pelvic-floor/male-kegel-basics.ts` con:  
     - `kegel_daily_adherence`  
     - `kegel_daily_sessions`  
     - `kegel_reps_per_session`  
     - `kegel_hold_relax_duration`  
     - `kegel_isolation_breathing`  
     - `kegel_progression_gate`  
  2. Crear un `SkillPath` llamado `male-kegel-foundation` con los 6 pasos descritos, incluyendo `primaryCues`, `commonFaults` y `bailTechniques` basados en aislamiento, respiración y relajación.  
  3. Añadir entidades/tipos:  
     - `PelvicFloorKegelPrescription`  
     - `PelvicFloorTechniqueCheck`  
     - `MaleSexualFunctionOutcome`  
     - `UrinaryContinenceLog`  
     - `ClinicalEscalationFlag`  
  4. Implementar salvaguardas:  
     - No programar interrupción repetida del flujo urinario como ejercicio.  
     - Excluir progresión automática en usuarios con `postProstateSurgery = true` sin `clinicallySupervised = true`.  
     - Bloquear progresión si hay dolor, empeoramiento urinario o flags clínicos.  
  5. Usar los datos del estudio de eyaculación precoz solo como expectativa observacional:  
     - 12 semanas.  
     - 82% de mejora reportada.  
     - Paso de ~32 segundos a >2 minutos en el estudio.  
     - No presentar como resultado garantizado.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
### 1. Análisis de datos faltantes, ayudas visuales y errores de OCR

Antes de generar el código, he realizado una auditoría del texto crudo proporcionado. **No falta ningún dato cuantitativo o protocolo** de los que el libro expone por escrito, pero hay dos aspectos críticos que debes complementar para que la app funcione correctamente a nivel de UI/UX y copywriting:

#### A. Ayudas visuales faltantes (Requeridas para la UI de la App)
El texto extraído no contiene las imágenes anatómicas que suelen acompañar a este tipo de libros. Para que el usuario pueda ejecutar el `SkillPath` correctamente, el equipo de diseño/UI de la app debe proveer o buscar los siguientes recursos visuales:
1. **Diagrama de la "hamaca pélvica" (Pelvic Floor Hammock):** El libro la describe como "formed like a lounger" (con forma de hamaca) desde el coxis hasta el hueso pélvico. Se necesita un gráfico 3D o esquemático para que el usuario entienda la profundidad del músculo.
2. **Aislamiento muscular (Visual Feedback):** El libro advierte *no* usar abdomen, muslos o glúteos. Se necesitan ilustraciones de "Correcto vs. Incorrecto" (ej. abdomen plano vs. abdomen abombado por apnea/valsava).
3. **Respiración diafragmática:** Gráfico que muestre cómo respirar libremente sin bloquear el diafragma mientras se contrae el suelo pélvico.

#### B. Errores de OCR / Traducción automática en el texto base
El texto original que me proporcionaste fue procesado por un OCR o traductor automático que generó "alucinaciones" en el inglés. El agente de copywriting de la app **no debe usar estas frases literales**, sino las corregidas que dejo entre paréntesis:
*   *Texto OCR:* "pubic unresolved issue tailbone" ➔ **Corrección:** *pubic bone to the tailbone* (hueso púbico al coxis).
*   *Texto OCR:* "sniffling, hacking, snickering" ➔ **Corrección:** *sneezing, coughing, laughing* (estornudar, toser, reír).
*   *Texto OCR:* "formed like a lounger" ➔ **Corrección:** *formed like a hammock* (con forma de hamaca).
*   *Texto OCR:* "rocket to a spill" ➔ **Corrección:** *rocket to a spill/dribble* (de un chorro a presión a un goteo).

---

### 2. Ejecución de las 5 Recomendaciones (Entregables para el Agente de Código)

A continuación, genero las estructuras en **TypeScript** listas para ser inyectadas en el repositorio de *Plan Maestro OS*. Estas estructuras asumen que ya tienes un motor de reglas (`TrainingRule`) y un sistema de habilidades (`SkillPath`).

#### Recomendación 1: Paquete de Reglas (`rules/pelvic-floor/male-kegel-basics.ts`)
Este archivo define las reglas cuantitativas que el motor de la app evaluará semanalmente en el *Ledger*.

```typescript
// rules/pelvic-floor/male-kegel-basics.ts
import { TrainingRule, RuleType, Metric } from '@plan-maestro/core';

export const KegelDailyAdherenceRule: TrainingRule = {
  id: 'kegel_daily_adherence',
  type: RuleType.FREQUENCY,
  targetMetric: Metric.DAYS_PER_WEEK,
  optimalRange: { min: 7, max: 7 }, // El libro sugiere práctica diaria
  description: 'Los ejercicios de suelo pélvico requieren consistencia diaria para generar adaptaciones neuromusculares.',
  warningThreshold: 4, // Menos de 4 días a la semana dispara alerta de falta de adherencia
};

export const KegelVolumeRule: TrainingRule = {
  id: 'kegel_session_volume',
  type: RuleType.VOLUME,
  targetMetric: Metric.REPS_PER_SESSION,
  optimalRange: { min: 10, max: 30 },
  description: 'Volumen por sesión para evitar fatiga del pubococcígeo.',
};

export const KegelTempoRule: TrainingRule = {
  id: 'kegel_hold_relax_tempo',
  type: RuleType.TEMPO,
  targetMetric: Metric.ISOMETRIC_HOLD_SECONDS,
  optimalRange: { min: 3, max: 5 }, // 3s a 5s según nivel
  description: 'Tiempo de contracción isométrica seguido de relajación equitativa.',
  conditions: {
    requiresRelaxationMatch: true // El tiempo de relajación debe ser >= al de contracción
  }
};
```

#### Recomendación 2: SkillPath (`skills/male-kegel-foundation.ts`)
Estructura de la progresión técnica con *cues*, fallos y técnicas de rescate (*bail techniques*).

```typescript
// skills/male-kegel-foundation.ts
import { SkillPath, SkillStep, FocusId, BodyZoneId } from '@plan-maestro/core';

export const MaleKegelFoundation: SkillPath = {
  id: 'male-kegel-foundation',
  name: 'Fortalecimiento de Suelo Pélvico Masculino',
  discipline: 'fisioterapia / salud-urológica',
  focus: [FocusId.PELVIC_FLOOR, FocusId.CONTINENCE, FocusId.SEXUAL_FUNCTION],
  bodyZones: [BodyZoneId.PELVIS, BodyZoneId.GENITAL],
  steps: [
    {
      step: 1,
      name: 'Identificación Aislada',
      description: 'Localizar el músculo pubococcígeo (sensación de detener el flujo urinario o retener gases).',
      primaryCues: ['Imagina detener el flujo de orina', 'Mantén el abdomen blando', 'Respira normal'],
      commonFaults: ['Apretar glúteos', 'Apretar muslos', 'Contener la respiración (Maniobra de Valsalva)'],
      bailTechniques: ['Tumbado boca arriba con rodillas flexionadas para reducir gravedad'],
      passCriteria: 'Capacidad de contraer 3 segundos sin activar abdomen o glúteos.'
    },
    {
      step: 2,
      name: 'Resistencia Básica (3s/3s)',
      description: 'Series de contracciones de 3 segundos con 3 segundos de relajación completa.',
      primaryCues: ['Relajación total entre repeticiones', 'Escápulas neutras', 'No empujar hacia abajo'],
      commonFaults: ['Fatiga temprana', 'Sustitución con músculos accesorios'],
      passCriteria: 'Completar 10 repeticiones con técnica perfecta.'
    },
    {
      step: 3,
      name: 'Integración Postural',
      description: 'Transición de tumbado a sentado, y finalmente a de pie.',
      primaryCues: ['Mantén la pelvis neutra al ponerte de pie', 'Activa antes de cambiar de postura'],
      passCriteria: 'Ejecutar 10 reps de pie sin pérdida de aislamiento.'
    },
    {
      step: 4,
      name: 'Control Funcional (The Knack)',
      description: 'Activación refleja antes de aumentar presión intraabdominal.',
      primaryCues: ['Contrae ANTES de toser', 'Contrae ANTES de estornudar', 'Contrae ANTES de levantar peso'],
      passCriteria: 'Automatización del gesto ante estímulos externos.'
    }
  ]
};
```

#### Recomendación 3: Tipos y Entidades (`types/pelvic-floor.ts`)
Interfaces para extender el modelo de datos de la app y trackear resultados específicos de este nicho.

```typescript
// types/pelvic-floor.ts

export interface PelvicFloorKegelPrescription {
  sessionsPerDay: 2 | 3;
  repsPerSession: number;
  holdSeconds: 3 | 5;
  relaxSeconds: 3 | 5;
  positions: ('lying' | 'sitting' | 'standing')[];
  functionalTriggersEnabled: boolean; // "The Knack" (tos/estornudo)
}

export interface MaleSexualFunctionOutcome {
  goal: 'erection-quality' | 'ejaculation-control' | 'orgasm-force';
  weeksSinceStart: number;
  perceivedImprovement: 1 | 2 | 3 | 4 | 5; // Escala Likert subjetiva
  // Datos del estudio PE (solo si el usuario los trackea)
  baselineEjaculationTimeSec?: number; 
  currentEjaculationTimeSec?: number;
}

export interface ClinicalEscalationFlag {
  painDuringContraction: boolean;
  hematuria: boolean; // Sangre en orina
  acuteUrinaryRetention: boolean;
  recentPelvicSurgery: boolean; // ej. Prostatectomía
  suddenErectileDysfunction: boolean;
}
```

#### Recomendación 4: Salvaguardas y Middleware (`guards/pelvic-floor-safeguards.ts`)
Lógica de seguridad para bloquear progresiones o emitir *Red Flags* médicas.

```typescript
// guards/pelvic-floor-safeguards.ts
import { ClinicalEscalationFlag, UserLedger } from '@plan-maestro/core';

export function evaluatePelvicFloorSafety(ledger: UserLedger, flags: ClinicalEscalationFlag): { 
  canProgress: boolean; 
  blockReason?: string; 
  requiresMedicalReferral: boolean; 
} {
  // 1. Red Flags Médicas (Derivación inmediata)
  if (flags.hematuria || flags.acuteUrinaryRetention || flags.suddenErectileDysfunction) {
    return { 
      canProgress: false, 
      blockReason: 'Síntomas de alarma urológica detectados.', 
      requiresMedicalReferral: true 
    };
  }

  // 2. Postoperatorio (Bloqueo sin supervisión)
  if (flags.recentPelvicSurgery && !ledger.hasClinicalSupervision) {
    return { 
      canProgress: false, 
      blockReason: 'El entrenamiento post-prostatectomía requiere autorización de tu fisioterapeuta/urólogo.', 
      requiresMedicalReferral: true 
    };
  }

  // 3. Dolor (El suelo pélvico no debe entrenarse con dolor agudo, podría ser hipertonía)
  if (flags.painDuringContraction) {
    return { 
      canProgress: false, 
      blockReason: 'Dolor durante la contracción. Podría indicar hipertonía pélvica. Suspende y consulta.', 
      requiresMedicalReferral: true 
    };
  }

  // 4. Regla de Oro: NO entrenar interrumpiendo la orina
  if (ledger.reportedUrineStreamTraining) {
    return {
      canProgress: false,
      blockReason: 'Nunca uses la interrupción del chorro de orina como ejercicio repetitivo. Riesgo de infección y disfunción miccional.',
      requiresMedicalReferral: false
    }
  }

  return { canProgress: true, requiresMedicalReferral: false };
}
```

#### Recomendación 5: Metadatos de Expectativas (`metadata/clinical-studies.ts`)
Objeto de solo lectura para mostrar en la UI como "Información basada en evidencia" (manejando las expectativas del estudio de Eyaculación Precoz de 12 semanas sin prometer curas).

```typescript
// metadata/clinical-studies.ts

export const PelvicFloorClinicalExpectations = {
  prematureEjaculation: {
    studyReference: 'Therapeutic Advances in Urology (European Association of Urology)',
    programDurationWeeks: 12,
    successRateReported: '82%',
    baselineMetric: { mean: 32, unit: 'seconds' },
    targetMetric: { mean: 120, unit: 'seconds', operator: '>' }, // > 2 minutos
    uiDisclaimer: 'Los resultados basados en estudios clínicos de 12 semanas son observacionales. La app trackea tu progreso, pero no garantiza resultados médicos universales. Requiere adherencia diaria.'
  },
  erectileDysfunction: {
    studyReference: 'BJU International',
    expectedOnsetOfResults: { min: 4, max: 6, unit: 'weeks' },
    mechanism: 'Mejora del tono del músculo pubococcígeo para retención del flujo sanguíneo venoso.',
    uiDisclaimer: 'Si la disfunción eréctil es de aparición súbita o total, requiere evaluación cardiovascular y urológica previa.'
  },
  urinaryIncontinence: {
    expectedOnsetOfResults: { min: 4, max: 8, unit: 'weeks' },
    mechanism: 'Hipertrofia y mejora del control neuromuscular de los esfínteres.',
    uiDisclaimer: 'Altamente efectivo para incontinencia de esfuerzo (tos/estornudo). Menos efectivo para incontinencia de urgencia sin terapia combinada.'
  }
};
```

---

### 3. Notas de Integración para el Equipo de Desarrollo

1. **UI/UX (Pantalla de Onboarding):** Cuando un usuario seleccione el objetivo `pelvic-floor-training` o `sexual-function`, la app debe mostrar un *tooltip* o modal explicando **cómo identificar el músculo** (usando la metáfora de detener los gases o la orina *solo como prueba de identificación, no como ejercicio*), apoyado por los diagramas que solicitamos en la Sección 1A.
2. **El Motor de Reglas (`TrainingRule`):** La regla `kegel_hold_relax_tempo` debe configurarse en el temporizador de la app (in-app timer) para que vibre o emita un sonido a los 3/5 segundos, indicando la fase de **relajación**. La relajación es tan crítica como la contracción en el suelo pélvico para evitar la hipertonía (espasmo/dolor pélvico crónico).
3. **Manejo del Ledger Semanal:** A diferencia de las rutinas de hipertrofia donde se suman kilos o series, el *Ledger* de suelo pélvico debe trackear `functionalTriggers` (ej. "¿Lograste contraer antes de toser hoy?"). Esto mapea directamente al **Step 4** del `SkillPath`.

---

## Ronda 3 — tras: «Para solventar la falta de elementos gráficos en el texto traducido y permitir que el equipo de UX/UI o diseño de la aplicación construya lo…»
Perfecto. Con los requerimientos gráficos que acabas de compartir, el vacío visual queda cubierto a nivel funcional. A continuación, dejo la **integración técnica y de producto** para que el equipo de UX/UI, diseño y frontend pueda convertirlo en activos reales dentro del `SkillPath` de Plan Maestro OS.

---

# Módulo Visual para `male-kegel-foundation`

> Documento complementario para UX/UI y diseño de activos.  
> Objetivo: hacer visible la anatomía pélvica, el aislamiento muscular correcto, la respiración y los errores comunes, sin depender únicamente del texto del libro.

---

## 1) Integración en el modelo de datos

Se recomienda añadir un tipo `VisualAssetRequirement` dentro del modelo de habilidades para que cada `SkillStep` pueda tener assets asociados.

```typescript
// types/visual-assets.ts

export type VisualAssetType =
  | 'static-illustration'
  | 'animated-illustration'
  | '3d-model'
  | 'lottie-animation'
  | 'svg-diagram'
  | 'ui-feedback';

export type VisualAssetPlacement =
  | 'skill-intro'
  | 'step-instruction'
  | 'timer-screen'
  | 'error-feedback'
  | 'progression-screen';

export interface VisualAssetRequirement {
  id: string;
  stepIds: string[];
  type: VisualAssetType;
  placement: VisualAssetPlacement[];
  purpose: string;
  primaryConcept: string;
  mustShow: string[];
  mustAvoid: string[];
  altText: string;
  accessibilityNotes?: string[];
  clinicalSafetyNotes?: string[];
}
```

---

## 2) Assets visuales obligatorios para el SkillPath

### Asset 1: `pelvic-hammock-anatomy`

```typescript
export const pelvicHammockAnatomy: VisualAssetRequirement = {
  id: 'pelvic-hammock-anatomy',
  stepIds: [
    'male-kegel-step-1-identification',
    'male-kegel-step-2-basic-contraction'
  ],
  type: '3d-model', // o svg animado si no hay 3D
  placement: ['skill-intro', 'step-instruction'],
  purpose:
    'Mostrar la ubicación profunda del suelo pélvico y su forma de hamaca entre pubis y coxis.',
  primaryConcept:
    'El suelo pélvico es una estructura interna en forma de hamaca que sostiene órganos y rodea uretra/recto.',
  mustShow: [
    'Vista sagital/lateral de la pelvis masculina',
    'Sínfisis del pubis como anclaje anterior',
    'Cóccix como anclaje posterior',
    'Banda muscular cóncava en forma de hamaca',
    'Vejiga, uretra y recto como referencias anatómicas',
    'Vector de contracción hacia arriba y hacia adentro'
  ],
  mustAvoid: [
    'Representación sexualizada',
    'Genitales explícitos si no son necesarios',
    'Implicar que la contracción es solo apretar hacia abajo',
    'Mostrar la maniobra de detener la orina como ejercicio repetido'
  ],
  altText:
    'Diagrama sagital de la pelvis masculina mostrando el suelo pélvico como una hamaca entre el pubis y el coxis. Una flecha indica la contracción hacia arriba y hacia adentro.',
  accessibilityNotes: [
    'Incluir versión con texto alternativo y descripción por voz',
    'Usar contraste alto para los puntos de anclaje óseo',
    'Permite reducir la animación si el usuario tiene sensibilidad al movimiento'
  ],
  clinicalSafetyNotes: [
    'La interrupción del flujo urinario solo debe mostrarse como referencia puntual para identificar el músculo, no como ejercicio regular.'
  ]
};
```

---

### Asset 2: `isolation-correct-vs-incorrect`

```typescript
export const isolationCorrectVsIncorrect: VisualAssetRequirement = {
  id: 'isolation-correct-vs-incorrect',
  stepIds: [
    'male-kegel-step-1-identification',
    'male-kegel-step-2-basic-contraction',
    'male-kegel-step-3-daily-volume'
  ],
  type: 'static-illustration',
  placement: ['step-instruction', 'error-feedback'],
  purpose:
    'Enseñar al usuario a contraer solo el suelo pélvico sin activar abdomen, glúteos o muslos.',
  primaryConcept:
    'La contracción correcta aísla el suelo pélvico y mantiene relajados abdomen, glúteos y muslos.',
  mustShow: [
    'Figura masculina neutra sentada o tumbada',
    'Panel izquierdo: ejecución correcta',
    'Panel derecho: ejecución incorrecta',
    'Suelo pélvico resaltado en azul/verde en el panel correcto',
    'Abdomen, glúteos y muslos en gris/neutro en el panel correcto',
    'Abdomen abombado, glúteos apretados y muslos tensos en el panel incorrecto',
    'Icono de respiración fluida en el panel correcto',
    'Icono de apnea/Valsalva tachado en el panel incorrecto'
  ],
  mustAvoid: [
    'Posturas que sugieran esfuerzo extremo',
    'Cara de dolor o tensión excesiva',
    'Flechas que indiquen empujar hacia abajo',
    'Estética sexual o erótica'
  ],
  altText:
    'Comparación visual entre una contracción correcta del suelo pélvico y una incorrecta. La correcta muestra el suelo pélvico activo y abdomen relajado. La incorrecta muestra abdomen empujando, glúteos apretados y respiración bloqueada.',
  accessibilityNotes: [
    'No depender solo del color verde/rojo; usar iconos de check y cruz',
    'Texto visible para usuarios con baja visión'
  ],
  clinicalSafetyNotes: [
    'Si el usuario no puede evitar la maniobra de Valsalva, mostrar recomendación de reducir intensidad o consultar profesional si hay dolor o síntomas urinarios.'
  ]
};
```

---

### Asset 3: `breathing-pacer-diaphragm-pelvic-floor`

```typescript
export const breathingPacerDiaphragmPelvicFloor: VisualAssetRequirement = {
  id: 'breathing-pacer-diaphragm-pelvic-floor',
  stepIds: [
    'male-kegel-step-2-basic-contraction',
    'male-kegel-step-3-daily-volume'
  ],
  type: 'lottie-animation',
  placement: ['timer-screen', 'step-instruction'],
  purpose:
    'Guiar la respiración libre durante la contracción y relajación del suelo pélvico.',
  primaryConcept:
    'El usuario debe respirar libremente. Se recomienda inhalar durante la relajación y exhalar durante la contracción, sin bloquear el aire.',
  mustShow: [
    'Anillo o barra de progreso respiratorio',
    'Fase de inhalación: diafragma descendiendo, suelo pélvico relajándose',
    'Fase de exhalación: suelo pélvico elevándose/contrayéndose',
    'Texto: Inhala / Exhala / Mantén sin bloquear el aire',
    'Temporizador de 3 a 5 segundos por fase',
    'Indicador de relajación completa entre contracciones'
  ],
  mustAvoid: [
    'Indicar que se debe contener la respiración',
    'Sincronización demasiado rígida si el usuario necesita respirar libre',
    'Animación rápida que genere ansiedad o hiperventilación'
  ],
  altText:
    'Animación de respiración que muestra la inhalación con relajación del suelo pélvico y la exhalación con elevación suave del suelo pélvico.',
  accessibilityNotes: [
    'Ofrecer modo sin animación',
    'Permitir control de velocidad',
    'Acompañar con vibración opcional para cambio de fase'
  ],
  clinicalSafetyNotes: [
    'El libro no especifica un patrón respiratorio exacto. Este patrón es una convención segura de UX para evitar apnea y maniobra de Valsalva.'
  ]
};
```

---

### Asset 4: `urine-stream-identification-warning`

```typescript
export const urineStreamIdentificationWarning: VisualAssetRequirement = {
  id: 'urine-stream-identification-warning',
  stepIds: ['male-kegel-step-1-identification'],
  type: 'static-illustration',
  placement: ['step-instruction', 'error-feedback'],
  purpose:
    'Explicar cómo identificar el suelo pélvico sin convertir la interrupción de la orina en entrenamiento.',
  primaryConcept:
    'Detener el flujo urinario solo sirve para reconocer el músculo una o pocas veces. Después, el ejercicio debe hacerse en seco.',
  mustShow: [
    'Icono de gota/orina como referencia de identificación',
    'Texto: Úsalo solo para identificar el músculo',
    'Alerta visual: No entrenes mientras orinas',
    'Ilustración secundaria: práctica sentado/tumbado fuera del baño'
  ],
  mustAvoid: [
    'Sugerir que detener la orina repetidamente es parte del ejercicio',
    'Lenguaje que normalice forzar la micción',
    'Imágenes explícitas de genitales'
  ],
  altText:
    'Advertencia visual indicando que la interrupción del flujo urinario solo debe usarse para identificar el músculo, no como ejercicio repetido.',
  accessibilityNotes: [
    'Icono de advertencia con texto claro',
    'No usar solo color rojo para usuarios con daltonismo'
  ],
  clinicalSafetyNotes: [
    'Si el usuario tiene dolor, dificultad para orinar o retención urinaria, debe derivarse a evaluación profesional.'
  ]
};
```

---

### Asset 5: `position-progression-grid`

```typescript
export const positionProgressionGrid: VisualAssetRequirement = {
  id: 'position-progression-grid',
  stepIds: [
    'male-kegel-step-3-daily-volume',
    'male-kegel-step-4-position-progression'
  ],
  type: 'static-illustration',
  placement: ['progression-screen'],
  purpose:
    'Mostrar la progresión por posiciones: tumbado, sentado y de pie.',
  primaryConcept:
    'La dificultad funcional aumenta al cambiar de posición, pero la técnica debe mantenerse aislada.',
  mustShow: [
    'Tres figuras: tumbado, sentado y de pie',
    'Etiquetas: Nivel 1 tumbado, Nivel 2 sentado, Nivel 3 de pie',
    'Opcional: figura caminando como nivel funcional avanzado',
    'Check de técnica: suelo pélvico activo, abdomen relajado, respiración libre'
  ],
  mustAvoid: [
    'Mostrar posturas complejas o ejercicio accesorio',
    'Implicar carga externa o pesas',
    'Representar dolor o incomodidad'
  ],
  altText:
    'Progresión de posiciones para ejercicios de suelo pélvico: tumbado, sentado y de pie, manteniendo la misma técnica de contracción aislada.',
  accessibilityNotes: [
    'Versión simplificada con iconos de postura',
    'Texto claro de criterios para avanzar de posición'
  ],
  clinicalSafetyNotes: [
    'No avanzar de posición si hay compensación con abdomen, glúteos o muslos.'
  ]
};
```

---

### Asset 6: `functional-trigger-cough-sneeze-laugh-lift`

```typescript
export const functionalTriggerCoughSneezeLaughLift: VisualAssetRequirement = {
  id: 'functional-trigger-cough-sneeze-laugh-lift',
  stepIds: ['male-kegel-step-5-functional-control'],
  type: 'animated-illustration',
  placement: ['step-instruction', 'progression-screen'],
  purpose:
    'Enseñar la activación del suelo pélvico antes de eventos que aumentan presión abdominal.',
  primaryConcept:
    'El suelo pélvico puede activarse de forma preventiva antes de toser, estornudar, reír o levantar peso.',
  mustShow: [
    'Icono de tos',
    'Icono de estornudo',
    'Icono de risa',
    'Icono de esfuerzo físico o levantamiento',
    'Flecha de activación del suelo pélvico antes del evento',
    'Texto: Activa antes, no después'
  ],
  mustAvoid: [
    'Mostrar escape de orina como broma o vergüenza',
    'Estigmatizar la incontinencia',
    'Representar esfuerzo máximo con apnea'
  ],
  altText:
    'Ilustración funcional que muestra cómo contraer el suelo pélvico antes de toser, estornudar, reír o levantar peso.',
  accessibilityNotes: [
    'Iconos simples y reconocibles',
    'Texto alternativo para cada disparador funcional'
  ],
  clinicalSafetyNotes: [
    'Si hay escapes frecuentes, dolor o incontinencia severa, mostrar derivación profesional.'
  ]
};
```

---

## 3) Actualización del `SkillPath` con requerimientos visuales

A continuación, una extensión sugerida del `SkillPath` previamente propuesto.

```typescript
// skills/male-kegel-foundation.ts

import {
  SkillPath,
  SkillStep,
  FocusId,
  BodyZoneId,
  VisualAssetRequirement
} from '@plan-maestro/core';

import {
  pelvicHammockAnatomy,
  isolationCorrectVsIncorrect,
  breathingPacerDiaphragmPelvicFloor,
  urineStreamIdentificationWarning,
  positionProgressionGrid,
  functionalTriggerCoughSneezeLaughLift
} from './visual-assets/male-kegel-assets';

export const MaleKegelFoundation: SkillPath = {
  id: 'male-kegel-foundation',
  name: 'Fortalecimiento de Suelo Pélvico Masculino',
  discipline: 'fisioterapia / salud-urológica',
  focus: [
    FocusId.PELVIC_FLOOR,
    FocusId.CONTINENCE,
    FocusId.SEXUAL_FUNCTION
  ],
  bodyZones: [
    BodyZoneId.PELVIS,
    BodyZoneId.GENITAL
  ],
  visualAssets: [
    pelvicHammockAnatomy,
    isolationCorrectVsIncorrect,
    breathingPacerDiaphragmPelvicFloor,
    urineStreamIdentificationWarning,
    positionProgressionGrid,
    functionalTriggerCoughSneezeLaughLift
  ],
  steps: [
    {
      id: 'male-kegel-step-1-identification',
      step: 1,
      name: 'Identificación Aislada',
      description:
        'Localizar el suelo pélvico usando la referencia de detener mentalmente el flujo urinario o retener gases, sin convertirlo en ejercicio repetido.',
      primaryCues: [
        'Imagina detener el flujo de orina',
        'Siente una elevación interna',
        'Mantén abdomen suave',
        'Respira normal'
      ],
      commonFaults: [
        'Apretar glúteos',
        'Apretar muslos',
        'Empujar abdomen hacia afuera',
        'Contener la respiración',
        'Entrenar mientras orinas'
      ],
      bailTechniques: [
        'Tumbado boca arriba con rodillas flexionadas',
        'Reducir intensidad de contracción',
        'Usar solo imaginación de detener orina sin practicar en el baño'
      ],
      passCriteria:
        'Capacidad de contraer 3 segundos sin activar abdomen, glúteos ni muslos.',
      visualAssetIds: [
        'pelvic-hammock-anatomy',
        'isolation-correct-vs-incorrect',
        'urine-stream-identification-warning'
      ]
    },
    {
      id: 'male-kegel-step-2-basic-contraction',
      step: 2,
      name: 'Contracción-Relajación Básica',
      description:
        'Contraer el suelo pélvico durante 3 segundos y relajar durante 3 segundos, manteniendo respiración libre.',
      primaryCues: [
        'Eleva y recoge hacia adentro/arriba',
        'Relaja completamente después',
        'Inhala al relajar',
        'Exhala al contraer',
        'No bloquees el aire'
      ],
      commonFaults: [
        'No relajar entre repeticiones',
        'Apnea o maniobra de Valsalva',
        'Activar abdomen bajo',
        'Apretar glúteos',
        'Hacer el movimiento demasiado rápido'
      ],
      bailTechniques: [
        'Reducir contracción a 2 segundos si hay fatiga',
        'Aumentar relajación a 4-6 segundos',
        'Practicar tumbado'
      ],
      passCriteria:
        'Completar 10 repeticiones con aislamiento correcto y respiración fluida.',
      visualAssetIds: [
        'isolation-correct-vs-incorrect',
        'breathing-pacer-diaphragm-pelvic-floor'
      ]
    },
    {
      id: 'male-kegel-step-3-daily-volume',
      step: 3,
      name: 'Volumen Diario',
      description:
        'Construir tolerancia con 2-3 sesiones diarias de 10-30 repeticiones, según tolerancia y técnica.',
      primaryCues: [
        'Mantén técnica sobre cantidad',
        'Relajación completa entre reps',
        'Respiración continua',
        'No entrenes con dolor'
      ],
      commonFaults: [
        'Acumular fatiga',
        'Perder aislamiento en las últimas repeticiones',
        'Hacer series rápidas',
        'Compensar con glúteos o abdomen'
      ],
      bailTechniques: [
        'Reducir repeticiones a 10 por sesión',
        'Mantener solo 2 sesiones/día',
        'Volver a posición tumbado'
      ],
      passCriteria:
        'Completar 2-3 sesiones/día durante 7 días manteniendo técnica correcta.',
      visualAssetIds: [
        'isolation-correct-vs-incorrect',
        'breathing-pacer-diaphragm-pelvic-floor',
        'position-progression-grid'
      ]
    },
    {
      id: 'male-kegel-step-4-position-progression',
      step: 4,
      name: 'Progresión de Posiciones',
      description:
        'Practicar en sentado, de pie y eventualmente caminando, manteniendo el aislamiento muscular.',
      primaryCues: [
        'Mantén pelvis neutra',
        'No aprietes glúteos al ponerte de pie',
        'Respira libre',
        'Eleva suavemente sin empujar'
      ],
      commonFaults: [
        'Perder control al estar de pie',
        'Activar piernas o glúteos',
        'Cambiar postura pélvica',
        'Contener la respiración al caminar'
      ],
      bailTechniques: [
        'Regresar a sentado',
        'Reducir tiempo de contracción',
        'Hacer solo 5 repeticiones por posición'
      ],
      passCriteria:
        'Ejecutar 10 repeticiones de pie sin compensación visible o reportada.',
      visualAssetIds: [
        'position-progression-grid',
        'isolation-correct-vs-incorrect'
      ]
    },
    {
      id: 'male-kegel-step-5-functional-control',
      step: 5,
      name: 'Control Funcional',
      description:
        'Activar el suelo pélvico antes de toser, estornudar, reír, levantar peso o después de orinar para controlar últimas gotas.',
      primaryCues: [
        'Activa antes del esfuerzo',
        'No esperes a perder control',
        'Mantén respiración',
        'Relaja después del evento'
      ],
      commonFaults: [
        'Activar demasiado tarde',
        'Hacer apnea durante el esfuerzo',
        'Usar abdomen como principal estabilizador',
        'No relajar después'
      ],
      bailTechniques: [
        'Practicar con tos leve simulada',
        'Usar recordatorios diarios',
        'Volver a sentado si falla el control'
      ],
      passCriteria:
        'El usuario reporta uso funcional del suelo pélvico en situaciones reales y menor percepción de escape/goteo si aplica.',
      visualAssetIds: [
        'functional-trigger-cough-sneeze-laugh-lift',
        'urine-stream-identification-warning'
      ]
    }
  ]
};
```

---

## 4) Especificación para pantallas de la app

### Pantalla 1: Introducción al SkillPath

**Objetivo:** explicar qué es el suelo pélvico sin lenguaje sexualizado y sin promesas médicas.

**Componentes:**

- Título: `Suelo pélvico masculino`
- Subtítulo: `Control urinario, erección y eyaculación desde una base muscular`
- Asset principal: `pelvic-hammock-anatomy`
- Texto breve:

> El suelo pélvico es una capa muscular interna en forma de hamaca. Va desde el pubis hasta el coxis y ayuda a controlar la orina, la eyaculación y parte de la función eréctil.

**CTA:**

```
Empezar identificación
```

**Microcopy de seguridad:**

```
Estos ejercicios son de bajo impacto, pero si tienes dolor, sangre en orina, retención urinaria o cirugía reciente, consulta con un profesional sanitario.
```

---

### Pantalla 2: Identificación muscular

**Objetivo:** enseñar a encontrar el músculo correcto.

**Componentes:**

- Asset: `pelvic-hammock-anatomy`
- Asset secundario: `urine-stream-identification-warning`
- Instrucción principal:

```
Imagina que detienes el flujo de orina o que retienes gases. Esa sensación de elevar y recoger hacia adentro es la contracción del suelo pélvico.
```

- Advertencia destacada:

```
No uses la interrupción de la orina como ejercicio repetido. Úsala solo para identificar el músculo.
```

- Checklist:

```
☐ Abdomen relajado
☐ Glúteos relajados
☐ Muslos relajados
☐ Respiración libre
```

---

### Pantalla 3: Técnica básica con temporizador

**Objetivo:** ejecutar contracciones temporizadas.

**Componentes:**

- Asset: `breathing-pacer-diaphragm-pelvic-floor`
- Timer configurable:
  - `holdSeconds`: 3 o 5
  - `relaxSeconds`: 3 o 5
  - `reps`: 10-30

**Estados del temporizador:**

```
Inhala / Relaja
3... 2... 1...

Exhala / Contrae
3... 2... 1...

Relaja completamente
3... 2... 1...
```

**Feedback en tiempo real:**

Si el usuario marca error:

```
¿Estás apretando abdomen o glúteos?
Reduce la intensidad y vuelve a centrarte solo en el suelo pélvico.
```

Si el usuario marca apnea:

```
No contengas la respiración. Inhala y exhala libremente.
```

---

### Pantalla 4: Feedback Correcto vs Incorrecto

**Objetivo:** corregir compensaciones.

**Layout:**

```
┌──────────────────────────────┬──────────────────────────────┐
│ Correcto                     │ Incorrecto                   │
├──────────────────────────────┼──────────────────────────────┤
│ Suelo pélvico activo         │ Abdomen empuja hacia afuera  │
│ Abdomen relajado             │ Glúteos apretados            │
│ Glúteos relajados            │ Muslos tensos                │
│ Muslos relajados             │ Respiración bloqueada        │
│ Respiración fluida           │ Esfuerzo excesivo            │
└──────────────────────────────┴──────────────────────────────┘
```

**Copy de corrección:**

```
La contracción debe sentirse interna y controlada. No debe verse como un esfuerzo externo.
```

---

### Pantalla 5: Progresión por posiciones

**Objetivo:** mostrar el avance por posición.

**Estados:**

```
Nivel 1: Tumbado
- Menor demanda gravitacional.
- Ideal para identificar el músculo.

Nivel 2: Sentado
- Postura funcional cotidiana.
- Requiere mantener pelvis neutra.

Nivel 3: De pie
- Mayor demanda de control.
- No compensar con glúteos.

Nivel 4: Caminando
- Integración dinámica.
- Solo si la contracción es limpia.
```

**Criterio visual:**

```
✔ Técnica correcta en posición actual
✔ Sin compensación abdominal/glútea
✔ Respiración libre
✔ Sin dolor ni molestia
```

---

### Pantalla 6: Control funcional

**Objetivo:** convertir el Kegel en una herramienta preventiva.

**Disparadores visuales:**

- Toser
- Estornudar
- Reír
- Levantar peso
- Después de orinar

**Copy:**

```
Activa el suelo pélvico antes del aumento de presión, no después de perder control.
```

**Ejemplo interactivo:**

```
1. Vas a toser.
2. Contrae suavemente el suelo pélvico.
3. Mantén respiración libre.
4. Tose.
5. Relaja completamente.
```

---

## 5) Especificación de animación del pacer respiratorio

### Estados del pacer

```typescript
export interface BreathingPacerPhase {
  id: 'inhale' | 'exhale-contract' | 'relax';
  label: string;
  durationSeconds: number;
  diaphragmDirection: 'down' | 'up' | 'neutral';
  pelvicFloorDirection: 'down-relax' | 'up-contract' | 'neutral';
  haptic?: 'light' | 'medium';
  audioCue?: string;
}
```

### Ejemplo de configuración

```typescript
export const kegelBreathingPacerConfig: BreathingPacerPhase[] = [
  {
    id: 'inhale',
    label: 'Inhala y relaja',
    durationSeconds: 3,
    diaphragmDirection: 'down',
    pelvicFloorDirection: 'down-relax',
    haptic: 'light',
    audioCue: 'Inhala suavemente'
  },
  {
    id: 'exhale-contract',
    label: 'Exhala y contrae',
    durationSeconds: 3,
    diaphragmDirection: 'up',
    pelvicFloorDirection: 'up-contract',
    haptic: 'medium',
    audioCue: 'Exhala y eleva el suelo pélvico'
  },
  {
    id: 'relax',
    label: 'Relaja completamente',
    durationSeconds: 3,
    diaphragmDirection: 'neutral',
    pelvicFloorDirection: 'neutral',
    haptic: 'light',
    audioCue: 'Suelta toda la tensión'
  }
];
```

> ⚠️ Nota: el libro no especifica coordinación exacta entre inhalación/exhalación y contracción. Esta configuración es una convención segura para evitar apnea y maniobra de Valsalva.

---

## 6) Criterios de aceptación para QA

### A. Contenido clínico/técnico

- [ ] Ninguna pantalla recomienda detener repetidamente el flujo urinario como ejercicio.
- [ ] La identificación mediante orina aparece solo como referencia puntual.
- [ ] Se menciona explícitamente no contener la respiración.
- [ ] Se menciona no apretar abdomen, glúteos ni muslos.
- [ ] La relajación tiene la misma importancia que la contracción.
- [ ] No se prometen curas absolutas.
- [ ] Postoperatorio prostático requiere flag de supervisión clínica.

### B. UI/UX

- [ ] El asset anatómico muestra pubis y coxis como anclajes.
- [ ] La hamaca pélvica tiene forma cóncava, no plana.
- [ ] El vector de contracción apunta hacia arriba/adentro.
- [ ] El panel incorrecto muestra abdomen empujando, glúteos tensos y apnea.
- [ ] El panel correcto muestra suelo pélvico activo y músculos accesorios relajados.
- [ ] El pacer respiratorio tiene modo lento y modo estándar.
- [ ] Existe alternativa sin animación.
- [ ] Los colores no son la única forma de transmitir correcto/incorrecto.

### C. Accesibilidad

- [ ] Todos los assets tienen `altText`.
- [ ] El texto tiene contraste suficiente.
- [ ] Hay soporte para lectores de pantalla.
- [ ] Las animaciones pueden desactivarse.
- [ ] El temporizador puede usar vibración o audio opcional.
- [ ] El lenguaje es clínico, neutro y no sexualizado.

### D. Seguridad

- [ ] Si `painDuringContraction = true`, se bloquea progresión.
- [ ] Si `hematuria = true`, se muestra derivación profesional.
- [ ] Si `acuteUrinaryRetention = true`, se bloquea el entrenamiento y se deriva.
- [ ] Si `recentPelvicSurgery = true` y no hay supervisión clínica, se bloquea progresión automática.
- [ ] Si `reportedUrineStreamTraining = true`, se muestra advertencia y se corrige el comportamiento.

---

## 7) Checklist final para el equipo de diseño

- [ ] Diagrama sagital de hamaca pélvica creado.
- [ ] Animación de contracción hacia arriba/adentro creada.
- [ ] Ilustración correcto/incorrecto creada.
- [ ] Ilustración de respiración diafragmática creada.
- [ ] Pacer respiratorio implementable en Lottie o componente nativo.
- [ ] Advertencia de no entrenar mientras se orina creada.
- [ ] Grid de progresión por posiciones creado.
- [ ] Ilustración funcional para tos/estornudo/risa/esfuerzo creada.
- [ ] Versión con contraste alto exportada.
- [ ] Versión sin color para daltonismo exportada.
- [ ] Textos alternativos cargados en CMS.
- [ ] Estados de error cargados en el motor de feedback.

---

## 8) Resultado final para implementación

Con estos assets integrados, el `SkillPath` queda listo para:

1. **Enseñar la anatomía** sin depender de texto ambiguo.
2. **Prevenir compensaciones** como apnea, glúteos, abdomen o muslos.
3. **Guiar el tempo** con pacer visual.
4. **Evitar malas prácticas** como entrenar interrumpiendo la orina.
5. **Progresar por posiciones** con criterios visibles.
6. **Conectar el ejercicio con función real**: tos, estornudo, risa, esfuerzo y control de últimas gotas.
7. **Mantener salvaguardas clínicas** para dolor, postoperatorio y síntomas urinarios de alarma.

Con esto, el vacío gráfico del libro queda resuelto a nivel de especificación y puede pasar directamente al equipo de UX/UI para producción de activos.
