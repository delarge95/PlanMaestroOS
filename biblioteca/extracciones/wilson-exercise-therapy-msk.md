# wilson-exercise-therapy-msk — Extracción recuperada de chat

> **sourceId:** `wilson-exercise-therapy-msk` · **origen:** `chat-export-1787414877077` (Extracción de Reglas para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Exercise Therapy in the Management of Musculoskeletal Disorders — Extracción para Plan Maestro OS

> Documento de extracción estructurada del libro editado por Wilson, Gormley y Hussey (2011). Se parafrasea todo el contenido; no se copian párrafos literales. El libro es un texto de fisioterapia basado en evidencia que cubre prescripción de ejercicio terapéutico para trastornos musculoesqueléticos por región anatómica y poblaciones especiales.

---

## 1) Metadatos del libro

- **Título:** Exercise Therapy in the Management of Musculoskeletal Disorders
- **Autor(es)/Editores:** Fiona Wilson, John Gormley, Juliette Hussey (Trinity College Dublin) + múltiples colaboradores por capítulo
- **Año:** 2011 (Wiley-Blackwell)
- **Disciplina principal:** Fisioterapia musculoesquelética / prescripción de ejercicio terapéutico basado en evidencia
- **Enfoque poblacional:** Pacientes con patología musculoesquelética (aguda y crónica), desde sedentarios hasta atletas élite; incluye poblaciones especiales (niños, obesos, pacientes cardíacos/respiratorios, osteoporosis)
- **Notas de alcance:**
  - CUBRE: principios de prescripción (aeróbico, fuerza, ROM, propiocepción), evaluación biomecánica, y protocolos por región (cervical, torácica, lumbar, hombro, codo, muñeca/mano, cadera/pelvis, rodilla, tobillo/pie) + poblaciones especiales.
  - NO CUBRE explícitamente: programación de fuerza para rendimiento deportivo puro, calistenia, powerlifting, periodización avanzada de hipertrofia, nutrición deportiva detallada, psicología del deporte.
  - El enfoque es clínico-terapéutico, no de rendimiento máximo.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `TissueType` (nuevo):
  - Descripción: El libro distingue claramente entre tejidos con diferentes respuestas al ejercicio y tiempos de curación.
  - Campos sugeridos: `tendon`, `ligament`, `muscle`, `bone`, `cartilage`, `disc`, `nerve`, `bursa`, `apophysis`
  - Referencias: Cap. 6 (p. 75), Cap. 8 (p. 114-117), Cap. 16 (p. 242-247)

- `RehabPhase` (nuevo):
  - Descripción: El libro usa consistentemente fases de rehabilitación (early/intermediate/late o protection/strength/return to sport) con criterios de paso explícitos.
  - Campos sugeridos: `phaseName`, `weekRange`, `goals[]`, `criteria[]`, `contraindications[]`
  - Referencias: Cap. 4 (p. 33-46), Cap. 6 (p. 79-88), Cap. 7 (p. 101-106), Cap. 8 (p. 118-125), Cap. 11 (p. 178-182), Cap. 12 (p. 192-204)

- `StabilityDysfunctionType` (nuevo):
  - Descripción: El libro (especialmente caps. 4 y 6) distingue entre disfunción de estabilidad local (músculos profundos) vs. global (músculos superficiales), y entre "give" (hipermovilidad) y restricción.
  - Campos sugeridos: `localVsGlobal`, `direction`, `level`, `compensationPattern`
  - Referencias: Cap. 4 (p. 34-39), Cap. 6 (p. 71-73)

- `ForceClosureStatus` (nuevo):
  - Descripción: Para dolor de cinturón pélvico, el libro distingue entre force closure reducido vs. excesivo, con implicaciones opuestas de tratamiento.
  - Campos sugeridos: `reduced | excessive`, `responseToCompression`, `indicatedApproach`
  - Referencias: Cap. 10 (p. 145-146)

- `BoneHealthStatus` (nuevo):
  - Descripción: Clasificación DXA con T-scores y niveles de riesgo para prescripción segura de ejercicio.
  - Campos sugeridos: `tScore`, `classification (normal|osteopenia|osteoporosis|severe)`, `fractureHistory`, `exerciseContraindications[]`
  - Referencias: Cap. 16 (p. 248-249)

- `ExerciseSessionStructure` (nuevo):
  - Descripción: El libro estructura cada sesión en fases secuenciales obligatorias.
  - Campos sugeridos: `warmUp`, `endurancePhase`, `recreationalActivities`, `coolDown`
  - Referencias: Cap. 2 (p. 8-9)

- `KineticChainType` (nuevo):
  - Descripción: Distinción entre ejercicios en cadena cinética abierta vs. cerrada con implicaciones de seguridad.
  - Campos sugeridos: `open | closed`, `jointStress`, `proprioceptiveDemand`
  - Referencias: Cap. 2 (p. 13-14), Cap. 11 (p. 163-164)

### 2.2 Mapeo a tipos existentes

- **`FocusId: mobility`**
  - El libro dedica secciones completas a ROM/flexibilidad en cada capítulo regional. Enfoque: ROM activo, activo-asistido, pasivo; estiramientos estáticos, PNF y balísticos. Prescripción: 2-3 días/semana, 10-30 seg, 3-4 reps, hasta molestia leve (Cap. 2, p. 16).

- **`FocusId: tendon-health`**
  - Tratado extensamente en tendinopatías: codo (tennis elbow, Cap. 8), rodilla (patellar, Cap. 11), Aquiles (Cap. 12). Protocolos excéntricos con parámetros específicos.

- **`FocusId: hypertrophy`**
  - No es el foco principal. El libro se centra en fuerza funcional y resistencia muscular. La prescripción de fuerza usa %1RM y RM (Cap. 2, p. 14; Cap. 8, p. 118).

- **`FocusId: stability`**
  - Concepto central del libro. Estabilidad segmentaria, core stability, control motor. Distingue entre estabilidad local y global (Cap. 4, 6).

- **`FocusId: proprioception`**
  - Cada capítulo regional incluye propiocepción/balance. El libro lo considera componente obligatorio de toda rehabilitación (Cap. 2, p. 17; Cap. 4, p. 43-46; Cap. 11, p. 161-162; Cap. 12, p. 189-190).

- **`BodyZoneId: cervical`**
  - Disfunción neuromuscular, estabilidad segmentaria, control motor de flexores profundos, propiocepción cervicocefálica. Patologías: espondilosis, WAD, cefalea cervicogénica (Cap. 4, p. 31-52).

- **`BodyZoneId: thoracic`**
  - Hipomovilidad como problema principal, cifosis, escoliosis, espondilitis anquilosante. Énfasis en extensión torácica y rotación axial (Cap. 5, p. 53-66).

- **`BodyZoneId: lumbar`**
  - El capítulo más extenso. Estabilidad, control motor, resistencia de tronco, bracing abdominal. Patologías: discopatía, espondilolisis, estenosis (Cap. 6, p. 67-93).

- **`BodyZoneId: shoulder`**
  - Inestabilidad inherente, manguito rotador, estabilidad escapular. Impingement, inestabilidad, capsulitis adhesiva (Cap. 7, p. 94-112).

- **`BodyZoneId: elbow`**
  - Tennis elbow, inestabilidad UCL, post-fractura/luxación. Protocolo de progresión por fases de curación tisular (Cap. 8, p. 113-128).

- **`BodyZoneId: wrist-hand`**
  - Fracturas, tendinopatías, osteoartritis 1ª CMC, túnel carpiano, Dupuytren (Cap. 9, p. 129-140).

- **`BodyZoneId: hip`**
  - OA de cadera, impingement femoroacetabular, inestabilidad. Énfasis en glúteo medio/máximo en rango interno (Cap. 10, p. 141-158).

- **`BodyZoneId: knee`**
  - OA, PFPS, tendinopatía patelar, ACL, menisco. Protocolos excéntricos, progresión OKC/CKC (Cap. 11, p. 159-186).

- **`BodyZoneId: ankle-foot`**
  - Esguince de inversión, tendinopatía de Aquiles, fascitis plantar, hallux valgus. Protocolo Alfredson (Cap. 12, p. 187-209).

- **`MovementPattern: squat`**
  - Mencionado como ejercicio CKC fundamental. Técnica: rodilla sobre segundo/tercer metatarsiano, pelvis neutra, inicio desde pelvis no tórax (Cap. 2, p. 13-14; Cap. 10, p. 150; Cap. 11, p. 173).

- **`MovementPattern: hinge`**
  - Implícito en extensión de cadera, peso muerto modificado. Énfasis en posición lumbar neutra (Cap. 6, p. 83-88).

- **`MovementPattern: horizontal-push`**
  - Press-up, push-up plus para serrato anterior y subescapular (Cap. 7, p. 98-99).

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: aerobic-minimum-guidelines

- Descripción: Dosis mínima de actividad aeróbica para beneficios en salud musculoesquelética según ACSM (citado en el libro).
- Tipo: volumen/frecuencia
- Métrica principal: minutesPerWeek, sessionsPerWeek, intensityPctHRmax
- Valores numéricos:
  - Opción A: 30 min/día de cardio moderado × 5 días/semana
  - Opción B: 20 min/día de cardio vigoroso × 3 días/semana
  - Complemento: 8-10 ejercicios de fuerza, 8-12 reps cada uno, 2×/semana
  - Intensidad: 55/65%–90% HRmax; promedio 70-80% HRmax
  - HRmax estimada = 220 − edad
- Condiciones: adultos sanos <65 años; pacientes musculoesqueléticos deben adaptar modo (natación, bici si carga articular es problema)
- Capítulos/páginas: Cap. 2, p. 8, 11
- Comentarios: El libro enfatiza que la adherencia a largo plazo es el factor crítico; el modo debe adaptarse a la patología.

---

### Regla: aerobic-progression-deconditioned

- Descripción: Para pacientes muy desacondicionados, comenzar con intensidad/duración/frecuencia bajas y progresar gradualmente.
- Tipo: progresión
- Métrica principal: intensityPctHRmax, minutesPerSession, sessionsPerWeek
- Valores numéricos:
  - Inicio: 40-50% HRmax, 15 min, 3×/semana
  - Progresión hasta: 30 min moderado 5×/semana o 20 min vigoroso 3×/semana
  - Duración de mantenimiento para OA rodilla: objetivo 1 hora la mayoría de días
- Condiciones: pacientes con dolor musculoesquelético activo, sedentarios, post-lesión
- Capítulos/páginas: Cap. 2, p. 12; Cap. 10, p. 147 (Tabla 10.1); Cap. 11, p. 167-168
- Comentarios: Progresión guiada por respuesta del paciente; reevaluar constantemente.

---

### Regla: strength-endurance-ratio

- Descripción: Para salud musculoesquelética, priorizar resistencia muscular sobre fuerza máxima (endurance > strength).
- Tipo: intensidad
- Métrica principal: repsPerSet, loadPct1RM, setsPerWeek
- Valores numéricos:
  - Resistencia: altas repeticiones (15-20 RM), baja carga, 1-3 series, 30-60s descanso
  - Fuerza: 3-8 RM, 3-5 series, 3-5 min descanso
  - Potencia: 1-3 RM, 3-5 series, 5-8 min descanso, tempo explosivo
  - Fuerza general (ACSM): 60-70% 1RM, hasta 15 reps, 2×/semana
- Condiciones: aplicar principio de sobrecarga y especificidad
- Capítulos/páginas: Cap. 2, p. 12-14; Cap. 8, p. 118 (Tabla 8.1)
- Comentarios: McGill (citado Cap. 6, p. 71, 79) enfatiza que para salud lumbar la resistencia es prioritaria; la fuerza no debe ser objetivo primario.

---

### Regla: stretching-prescription

- Descripción: Parámetros de prescripción de flexibilidad según ACSM (citado en el libro).
- Tipo: frecuencia/volumen
- Métrica principal: sessionsPerWeek, holdDuration, repsPerStretch
- Valores numéricos:
  - Tipo: estático o PNF
  - Frecuencia: mínimo 2-3 días/semana
  - Intensidad: hasta molestia leve
  - Duración estático: 10-30 segundos (ideal ≥20-30s)
  - PNF: 6s contracción + 10-30s estiramiento asistido
  - Repeticiones: 3-4 por estiramiento
  - Grupos: principales grupos musculares/tendinosos
- Condiciones: preceder con ROM activo/pasivo; evitar estirar tejidos inestables o recién lesionados sin control
- Capítulos/páginas: Cap. 2, p. 15-16
- Comentarios: El libro señala que la evidencia sobre prevención de lesiones por estiramiento es inconsistente (Thacker 2004, Fradkin 2006, Small 2008).

---

### Regla: cervical-motor-control-dosage

- Descripción: Dosificación de ejercicios de control motor cervical para disfunción de estabilidad.
- Tipo: volumen/frecuencia
- Métrica principal: repsPerSession, sessionsPerDay, holdDuration
- Valores numéricos:
  - Ejercicios de control de "give": 15-20 reps, 2-3×/día
  - Flexores profundos (cranio-cervical flexion): mantener presión 10s × 10 reps
  - Extensores profundos suboccipitales: 10s × 10 reps
  - Estabilizadores globales (rango interno): 10 × 10s holds
  - Progresión: incrementar hold hasta 15s × 2 reps sin fatiga ni sustitución
- Condiciones: sin reproducción de síntomas; sin estrategias de sustitución (dominancia de ECM, escalenos)
- Capítulos/páginas: Cap. 4, p. 34-39
- Comentarios: ⚠️ El libro enfatiza que estos ejercicios requieren supervisión inicial para detectar compensaciones. No apto para automatización sin feedback.

---

### Regla: cranio-cervical-flexion-test-protocol

- Descripción: Protocolo de evaluación/entrenamiento de flexores cervicales profundos con biofeedback de presión.
- Tipo: progresión
- Métrica principal: pressureMMHg, holdDuration, reps
- Valores numéricos:
  - Presión base: 20 mmHg
  - Incrementos: 22 → 24 → 26 mmHg
  - Hold: 5 segundos por nivel
  - Reps: 2 por nivel sin sustitución ni fatiga
  - Rehabilitación: mantener presión alcanzable × 10s × 10 reps
- Condiciones: paciente en supino, cervical neutra con toalla, sin contracción visible de ECM/escalenos/hioides
- Capítulos/páginas: Cap. 4, p. 36
- Comentarios: Requiere equipo (Stabilizer/Pressure Biofeedback Unit). Criterio de éxito: 2 reps sin sustitución.

---

### Regla: lumbar-stability-bracing

- Descripción: Enseñanza de abdominal bracing (co-activación de pared abdominal) como base de estabilidad lumbar.
- Tipo: técnica/progresión
- Métrica principal: N/A (cualitativo)
- Valores numéricos: N/A
- Condiciones:
  - Bracing ≠ hollowing (McGill favorece bracing)
  - La pared abdominal no se succiona ni se empuja; se contrae isométricamente
  - Cue mental: "imagina que te van a dar un puñetazo en el abdomen"
  - Se practica en múltiples posiciones: sentado, de pie, cuatro puntos, funcional
- Capítulos/páginas: Cap. 6, p. 81
- Comentarios: El libro cita a McGill (2001) argumentando que hollowing no mejora estabilidad; bracing co-activa transverso + oblicuos.

---

### Regla: lumbar-endurance-tests

- Descripción: Tests de resistencia de tronco para evaluación inicial y seguimiento.
- Tipo: evaluación
- Métrica principal: holdTimeSeconds
- Valores numéricos:
  - Lateral musculature (side bridge): mantener posición hasta fallo
  - Flexor endurance: sentado en cuña, mantener hasta cambio postural
  - Back extensor: prono sobre camilla con tronco colgando, mantener hasta fallo
- Condiciones: registrar tiempos como baseline; usar para progresión
- Capítulos/páginas: Cap. 6, p. 75-76
- Comentarios: McGill (2002) enfatiza endurance sobre fuerza para salud lumbar.

---

### Regla: lumbar-rehab-phase-structure

- Descripción: Estructura de tres fases para rehabilitación lumbar.
- Tipo: progresión
- Métrica principal: N/A (estructura)
- Valores numéricos:
  - **Fase temprana:** corregir patrones, enseñar posición neutra, bracing, carga mínima, aeróbico bajo (10-30 min caminata)
  - **Fase intermedia:** consolidar + introducir carga para resistencia, aeróbico 20 min en clase / hasta 1h objetivo, ejercicios tipo McGill (side bridge, trunk curl, bird-dog)
  - **Fase tardía/avanzada:** aumentar carga, superficies inestables, rotación, peso libre, preparar para descarga
- Criterios de paso:
  - Fase 1→2: capacidad de mantener neutra en bipedestación con movimientos funcionales simples
  - Fase 2→3: resistencia adecuada, patrón normal consolidado
  - Descarga: programa abreviado mantenible a largo plazo
- Capítulos/páginas: Cap. 6, p. 79-88
- Comentarios: El libro desaconseja programas genéricos; todo debe ser individualizado.

---

### Regla: shoulder-rehab-4-phase

- Descripción: Estructura de 4 fases para rehabilitación de hombro.
- Tipo: progresión
- Métrica principal: N/A (estructura)
- Valores numéricos:
  - **Fase aguda:** ROM pasivo/activo-asistido restringido, isométricos submáximos, estabilización rítmica, axial compression
  - **Fase intermedia:** ROM activo, fortalecimiento con tubing a 0° y 90°, PNF, escápula, axial compression progresado
  - **Fase avanzada:** fortalecimiento agresivo, pliometría (2 manos → 1 mano), superficies inestables, oscilaciones
  - **Retorno a actividad:** intervalo de retorno al deporte, criterios clínicos completos
- Criterios de paso:
  - Aguda→Intermedia: ROM pasivo casi normal, balance muscular suficiente, propiocepción baseline
  - Intermedia→Avanzada: ROM completo, movilidad capsular simétrica, fuerza 4/5, estabilidad dinámica suficiente
  - Avanzada→Retorno: sin dolor, ROM completo, fuerza completa en isocinética, propiocepción adecuada
- Capítulos/páginas: Cap. 7, p. 101-106
- Comentarios: Programa criteria-based, no time-based.

---

### Regla: elbow-rm-prescription

- Descripción: Prescripción basada en RM para codo/antebrazo según objetivo.
- Tipo: intensidad/volumen
- Métrica principal: RM, sets, restInterval
- Valores numéricos:
  - Endurance: 15-20 RM × 1-3 series; 30-60s descanso
  - Fuerza: 3-8 RM × 3-5 series; 3-5 min descanso
  - Potencia: 1-3 RM × 3-5 series; 5-8 min descanso; tempo explosivo
- Condiciones: sin dolor; progresión en incrementos de 0.5-1 kg
- Capítulos/páginas: Cap. 8, p. 118 (Tabla 8.1)
- Comentarios: En fase temprana de tennis elbow, usar carga baja (15-20 RM) porque cargas altas provocan dolor.

---

### Regla: tennis-elbow-exercise-dosage

- Descripción: Dosificación de ejercicio para tennis elbow (epicondilalgia lateral).
- Tipo: volumen/progresión
- Métrica principal: repsPerSet, setsPerSession, sessionsPerWeek, holdDuration
- Valores numéricos:
  - Fase restauración (6-8 semanas): 1-3 series × 15-20 reps, tempo lento (~8s por rep concéntrica+excéntrica)
  - Isométricos si concéntrico/excéntrico provocan dolor
  - Progresión: codo en flexión → codo en extensión (mayor estrés, más funcional)
  - Fase funcional: cargas altas, excéntricos, pliometría si deporte lo requiere
  - Ejercitar antebrazo contralateral máximalmente (efecto cruzado)
  - Visitas semanales mínimas 6-8 semanas para supervisión
- Condiciones: SIN reproducción de dolor del paciente; modificar actividades laborales/deportivas que sobrecarguen
- Capítulos/páginas: Cap. 8, p. 122-125
- Comentarios: El libro enfatiza que la evidencia de Bisset et al. (2006) muestra que fisioterapia (ejercicio + terapia manual) es superior a inyección de corticoide a largo plazo (menos recurrencias a 12 meses).

---

### Regla: hip-oa-walking-programme

- Descripción: Programa progresivo de caminata para OA de cadera.
- Tipo: volumen/progresión
- Métrica principal: minutesPerSession, sessionsPerWeek
- Valores numéricos:
  - Semana 1: 2 días/semana, 25 min total (5 warm-up + 15 walk + warm-down)
  - Semana 2: 3 días/semana, 25 min
  - Semana 3: 3 días/semana, 30 min (20 min walk)
  - Semana 4: 3 días/semana, 40 min (30 min walk)
  - Semana 5: 3 días/semana, 50 min (40 min walk)
  - Semana 6+: 3 días/semana, 60 min (50 min walk)
  - Intensidad: idealmente 50% HRmax
- Condiciones: usar bastón o bastones nórdicos si patrón de marcha alterado; calzado adecuado
- Capítulos/páginas: Cap. 10, p. 147 (Tabla 10.1)
- Comentarios: Progresión de 5 min/semana. Incluir estiramientos de cadera, espalda y hombros en warm-up/cool-down.

---

### Regla: knee-oa-strength-dosage

- Descripción: Dosificación de fortalecimiento para OA de rodilla.
- Tipo: volumen/frecuencia
- Métrica principal: setsPerExercise, repsPerSet, sessionsPerWeek
- Valores numéricos:
  - Baker et al. (2001): 2 series × 12 reps × 3 veces/semana, progresando peso
  - Fase temprana: isométricos, altas reps sin carga, contracciones sostenidas
  - Fase tardía: CKC (squats, lunges, step-ups), carga funcional
- Condiciones: sin exacerbar dolor; adaptar a severidad de OA
- Capítulos/páginas: Cap. 11, p. 162, 170-174
- Comentarios: Cuadriceps weakness es factor de riesgo y hallazgo común (Slemenda 1997).

---

### Regla: patellar-tendinopathy-eccentric-protocol

- Descripción: Protocolo excéntrico para tendinopatía patelar (adaptado de Jonsson & Alfredson 2005).
- Tipo: protocolo de rehab
- Métrica principal: repsPerSet, setsPerDay, daysPerWeek, weeksDuration, loadProgression
- Valores numéricos:
  - Posición: de pie en tabla inclinada 25°, peso en pierna lesionada
  - Ejecución: flexión lenta de rodilla hasta 70°; usar otra pierna para subir (evitar concéntrico)
  - Dosis: 15 reps × 2 veces/día × 7 días/semana
  - Duración: 12 semanas
  - Progresión: tras 4 semanas, añadir jogging suave, aumentar intensidad de ciclismo/natación
  - Sobrecarga: mochila con peso cuando el ejercicio deje de ser doloroso; añadir peso hasta recrear dolor
  - Retorno: después de 8 semanas, retorno gradual a actividad normal
- Condiciones: NO actividad deportiva normal durante primeras 8 semanas; dolor en tendón durante ejercicio es aceptable (el paciente debe ser informado); detener si dolor incapacitante
- Capítulos/páginas: Cap. 11, p. 174-176
- Comentarios: El libro advierte que puede haber dolor muscular inicial. La evidencia de Visnes & Bahr (2007) apoya entrenamiento excéntrico con tabla inclinada.

---

### Regla: achilles-tendinopathy-eccentric-protocol

- Descripción: Protocolo excéntrico de Alfredson para tendinopatía de Aquiles (mid-portion).
- Tipo: protocolo de rehab
- Métrica principal: repsPerSet, setsPerDay, daysPerWeek, weeksDuration
- Valores numéricos:
  - Ejercicio: heel drops sobre borde de escalón, pierna recta (gastrocnemio) y flexionada (sóleo)
  - Dosis: 3 series × 15 reps × 2 veces/día × 7 días/semana
  - Duración: 12 semanas
  - Progresión: añadir peso con mochila cuando sea tolerable
  - NO cargar concéntricamente la pantorrilla afectada; usar pierna contraria para subir
  - Para tendinopatía insercional: no ir más allá de plantígrado (Jonsson et al. 2008)
- Condiciones: se puede realizar descalzo para mejorar alineación; si hay mala biomecánica o superficie dura, usar zapatillas
- Capítulos/páginas: Cap. 12, p. 189, 203-204
- Comentarios: Evidencia fuerte para mid-portion (Alfredson 1998, Mafi 2001, Kingma 2007, Magnussen 2009). Menos robusta para insercional.

---

### Regla: acl-rehab-4-phase

- Descripción: Estructura de 4 fases (16 semanas) para rehabilitación de LCA.
- Tipo: progresión
- Métrica principal: weekRange, loadPct1RM
- Valores numéricos:
  - **Fase 1 (semanas 1-4) – Protección:** ROM, marcha, isométricos de cuádriceps, SLR, squat con balón en pared, step-ups bajos, ciclismo con sillín alto
  - **Fase 2 (semanas 5-8) – Fuerza temprana:** carga al 50-60% 1RM, 3 series × 10 reps × 3×/semana, lunges con peso, hip abduction/adduction, propiocepción en superficies inestables
  - **Fase 3 (semanas 9-12) – Fuerza intensiva:** aumentar carga, mantener 3×10×3/semana, carrera progresiva (recta → colina → diagonal → superficies irregulares)
  - **Fase 4 (semanas 13-16) – Fuerza + retorno:** carga al 80% 1RM (incrementar 10% en semana 15), pliometría (saltos, hops), agilidad, deporte específico
- Criterios de paso:
  - Fase 1→2: ROM completo, marcha normal
  - Fase 2→3: fuerza adecuada, control en ejercicios con peso libre
  - Fase 3→4: fuerza ~80% 1RM, carrera cómoda
  - Retorno deportivo: sin dolor, ROM completo, propiocepción adecuada, fuerza simétrica
- Capítulos/páginas: Cap. 11, p. 178-182
- Comentarios: Basado en Tagesson et al. (2008) y Trees et al. (2007). El libro señala que OKC no es necesariamente peligroso para LCA (Tagesson 2008 encontró mayor fuerza de cuádriceps con OKC sin aumento de traslación tibial).

---

### Regla: ankle-inversion-rehab-progression

- Descripción: Progresión de rehabilitación tras esguince de tobillo por inversión.
- Tipo: progresión
- Métrica principal: N/A (estructura)
- Valores numéricos:
  - **Temprana:** control edema, ROM activo/activo-asistido, reeducación de marcha, isométricos, ciclismo unilateral con pierna sana
  - **Intermedia:** progresión a carga completa, step-up/down, fortalecimiento con Thera-Band, propiocepción (single leg stand → eyes closed → wobble board)
  - **Tardía/funcional:** hopping multidireccional, trampette, shuttle runs, figure-of-eights, pliometría
- Criterios de paso:
  - Sin dolor, ROM completo, fuerza buena, propiocepción adecuada antes de retorno deportivo
  - Rehabilitación inadecuada → alto riesgo de recurrencia (73% según Yeung 1994)
- Capítulos/páginas: Cap. 12, p. 192-201
- Comentarios: El libro enfatiza que la rehabilitación debe ser multicomponente (fuerza + propiocepción + funcional). Wobble boards son útiles pero no son "funcionales" per se; combinar con tareas funcionales.

---

### Regla: osteoporosis-exercise-safety

- Descripción: Reglas de seguridad para ejercicio en osteoporosis establecida.
- Tipo: seguridad/contraindicación
- Métrica principal: N/A (cualitativo)
- Valores numéricos: N/A
- Condiciones de aplicación:
  - Osteoporosis establecida: EVITAR actividad vigorosa, impacto alto, stop-starts súbitos, torsión, flexión abdominal súbita
  - Osteoporosis severa: ejercicio dirigido a hueso puede causar fracturas
  - Frágiles/ancianos: enfocarse en fuerza para movilidad, balance, prevención de caídas
  - Normal/osteopenia leve: impacto dirigido y resistencia son apropiados
  - EJERCICIO SIN nutrición adecuada O sin farmacología apropiada puede ser INEFECTIVO o PELIGROSO
- Capítulos/páginas: Cap. 16, p. 242, 249, 253-254
- Comentarios: ⚠️ El libro es explícito: "in severe osteoporosis certain types of exercise are dangerous and cannot be recommended" (p. 242). Requiere evaluación DXA previa.

---

### Regla: osteoporosis-bone-loading-principles

- Descripción: Principios de carga ósea dirigida (targeted bone loading).
- Tipo: intensidad/especificidad
- Métrica principal: microstrain (cualitativo en aplicación práctica)
- Valores numéricos:
  - >1500-3000 microstrain → induce modelado óseo (formación nueva)
  - 100-300 microstrain → suficiente para reducir activación de remodelado (preservar hueso)
  - <100 microstrain → aumenta activación de BMU, pérdida ósea
  - Práctico: saltos desde 0.3m, 20-30 reps × 3/día, <30 min/día total > 2h caminata
  - Niños: impacto, gimnasia, plyometrics, resistencia <60% 1RM, ≥3 días/semana, 10-20 min
- Condiciones: especificidad de sitio (carga debe ser donde se mide BMD); sobrecarga (estímulo > habitual); reversibilidad (se pierde si se detiene)
- Capítulos/páginas: Cap. 16, p. 251-253
- Comentarios: Natación y ciclismo NO impactan significativamente en BMD. Caminar solo beneficia huesos de miembro inferior, no columna.

---

### Regla: osteoporosis-nutrition-rda

- Descripción: Requerimientos diarios de calcio y vitamina D por grupo etario.
- Tipo: nutrición
- Métrica principal: mg/day (calcio), IU/day (vit D)
- Valores numéricos:
  - Niñas 9-11: Ca 1000 mg, VitD 200 IU
  - Adolescentes 12-18: Ca 1300 mg, VitD 200 IU
  - Mujeres 19-50: Ca 1000 mg, VitD 200 IU
  - Embarazo: Ca 1000-1300 mg, VitD 200 IU
  - Mujeres 51-70: Ca 1300 mg, VitD 400 IU
  - Mujeres >70: Ca 1300 mg, VitD 800 IU
  - Práctico: 500ml leche entera/día (normal) o 1L/día (osteoporosis establecida)
- Capítulos/páginas: Cap. 16, p. 250 (Tabla 16.2)
- Comentarios: El libro enfatiza que sin nutrición adecuada, el ejercicio solo no puede crear hueso sano.

---

### Regla: children-activity-guidelines

- Descripción: Recomendaciones de actividad física para niños en edad escolar.
- Tipo: volumen/frecuencia
- Métrica principal: minutesPerDay
- Valores numéricos:
  - Mínimo (Strong et al. 2005): ≥60 min/día de actividad moderada a vigorosa
  - Evidencia sugiere que puede ser insuficiente (Hussey 2007: casi todos los niños de 7-10 años cumplían 60 min pero 20% tenía sobrepeso)
  - Tudor-Locke 2004: ~120 min/día niñas, ~150 min/día niños (basado en pedómetro)
  - Hueso: impacto + resistencia <60% 1RM, ≥3 días/semana, 10-20 min
- Condiciones: actividad debe ser apropiada para desarrollo, divertida, variada
- Capítulos/páginas: Cap. 13, p. 213-215
- Comentarios: ⚠️ El libro señala que las guías pueden necesitar ser más altas y diferentes por género.

---

### Regla: pelvic-girdle-pain-force-closure

- Descripción: Clasificación y tratamiento de PGP según force closure.
- Tipo: clasificación/decisión
- Métrica principal: N/A (cualitativo)
- Valores numéricos: N/A
- Condiciones:
  - **Force closure REDUCIDO:** dolor por strain en ligamentos laxos; responde bien a ejercicios de estabilización (transverso, suelo pélvico, multífido, glúteo máximo). Común post-parto.
  - **Force closure EXCESIVO:** dolor por carga sostenida excesiva de músculos sobre articulaciones sacroilíacas; se AGRAVA con ejercicios de estabilización. Requiere relajación/estiramiento muscular.
  - Test: respuesta a compresión externa (active straight leg raise)
- Capítulos/páginas: Cap. 10, p. 145-146
- Comentarios: ⚠️ El libro (O'Sullivan & Beales 2007) enfatiza que NO todos los PGP requieren estabilidad. Clasificar antes de prescribir.

---

### Regla: thoracic-spine-rom-priority

- Descripción: Prioridad de movilidad torácica en rehabilitación.
- Tipo: movilidad
- Métrica principal: N/A (cualitativo)
- Valores numéricos: N/A
- Condiciones:
  - Extensión torácica: frecuentemente limitada; prioridad para lograr postura neutra
  - Rotación axial: movimiento más notable; frecuentemente limitada con patología facetaria
  - La hipomovilidad torácica causa demandas excesivas en cervical y lumbar
  - El rib cage aumenta estabilidad un 40% en flexión/extensión, 35% en lateral bending, 31% en rotación axial
- Capítulos/páginas: Cap. 5, p. 56-57
- Comentarios: Usar gym ball, MET equipment para facilitar ROM torácico.

---

### Regla: proprioception-training-principles

- Descripción: Principios generales de entrenamiento propioceptivo aplicables a todas las regiones.
- Tipo: progresión
- Métrica principal: N/A (cualitativo)
- Valores numéricos:
  - Progresión por: base de apoyo (amplia → estrecha → unipodal), superficie (firme → blanda → inestable), ojos (abiertos → cerrados), tarea (estática → dinámica → perturbación inesperada)
  - Cervical: eye follow, gaze stability, joint repositioning (láser)
  - Lumbar: repositioning con electrogoniómetro
  - Rodilla: repositioning a 40°, 60°, 90°
  - Tobillo: single leg stand → eyes closed → wobble board → foam → perturbaciones
  - Diaria si es posible
- Capítulos/páginas: Cap. 2, p. 17; Cap. 4, p. 43-46; Cap. 6, p. 76-77; Cap. 11, p. 170; Cap. 12, p. 198-200
- Comentarios: El libro indica que la propiocepción debe integrarse EN todos los ejercicios, no solo como componente separado.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: cervical-stability-rehab

- Disciplina: fisioterapia / control motor cervical
- Objetivo final: controlar el "give" (movimiento no controlado) y restaurar función de estabilizadores locales y globales cervicales
- Requisitos de seguridad previos: descartar patología seria (VBI, inestabilidad craneovertebral); sin síntomas neurológicos progresivos
- Pasos de la progresión:

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Control del "give" direccional | Enseñar a controlar movimiento en dirección sintomática; mover la restricción | Movimiento familiar, sin síntomas, 15-20 reps | Compensar con otras zonas cervicales | Cap. 4, p. 34-36 |
| 2 | Control de traslación en neutra (flexores profundos) | Cranio-cervical flexion con biofeedback 20→26 mmHg | 2 reps sin sustitución ni fatiga | Dominancia ECM, escalenos; pérdida de neutra | Cap. 4, p. 36 |
| 3 | Control de traslación en neutra (extensores profundos) | Resistir flexión cervical superior con manos; hold 10s×10 | 15s × 2 reps sin fatiga | Extensión cervical superior activa; empujar cabeza | Cap. 4, p. 37 |
| 4 | Estabilizadores globales rango interno | Mantener posiciones de flexión/extensión/rotación contra gravedad | 10×10s holds sin sustitución | Chin poke, elevación escapular, dominancia escalenos | Cap. 4, p. 38-39 |
| 5 | Estabilizadores globales rango externo | Controlar rango completo excéntricamente | Lowering suave sin pérdida de estabilidad | Pérdida de control excéntrico | Cap. 4, p. 38-39 |
| 6 | Extensibilidad de movilizadores globales | Estiramientos de escalenos, levator scapulae, ligamento nuchae | 20-30s hold × 3-5 reps | Estirar zona incorrecta; compensar | Cap. 4, p. 40-43 |
| 7 | Fuerza con resistencia | Thera-Band, sit-fit, pesos; isométricos → concéntricos/excéntricos | 10 reps × 2 sets cada dirección | Truco con momentum; perder neutra | Cap. 4, p. 39-40 |
| 8 | Sensorimotor/propiocepción | Joint position sense, balance, oculomotor | Reposicionamiento preciso; balance 30s sin sway | Jerky eye movements, mareo | Cap. 4, p. 43-46 |

---

### SkillPath: lumbar-stability-progression

- Disciplina: fisioterapia / estabilidad lumbar
- Objetivo final: control motor perfecto, resistencia de musculatura de tronco, estabilidad suficiente para todas las tareas esperadas
- Requisitos de seguridad previos: descartar patología seria; establecer posición neutra; sin dolor radicular progresivo
- Pasos de la progresión:

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Encontrar posición neutra | Pelvis entre tilt anterior y posterior completo; practicar en sentado, de pie, 4 puntos | Mantener neutra sin esfuerzo consciente | Confundir con retroversión completa | Cap. 6, p. 79 |
| 2 | Bracing abdominal | Co-contracción isométrica de pared abdominal sin sucionar ni empujar | Mantener durante actividades simples | Hollowing excesivo; Valsalva | Cap. 6, p. 81 |
| 3 | Posición neutra + movimiento de miembros | En 4 puntos, mover brazo/pierna sin perder neutra | Sin cambio en PBU; sin movimiento lumbar | Compensar con rotación pélvica | Cap. 6, p. 84 |
| 4 | Side bridge (lateral) | Mantener side bridge con spine neutra; progresar de rodillas → pies | Hold time progresivo; sin fatiga | Rotar tronco; ceder en cadera | Cap. 6, p. 84 |
| 5 | Trunk curl (flexores) | Curl-up con una rodilla flexionada; cervical neutra; hombros apenas se elevan | 10 reps sin dolor; sin flexión cervical | Sit-up completo; tirar del cuello | Cap. 6, p. 84 |
| 6 | Bird-dog / trunk extensors | En 4 puntos, extender brazo/pierna contralateral; progresar con distancia | Sin rotación pélvica; 10 reps | Hiperextender lumbar; rotar | Cap. 6, p. 84-85 |
| 7 | Carga + superficies inestables | Añadir pesos, poleas, gym ball, wobble boards | Control mantenido bajo carga | Perder neutra al aumentar carga | Cap. 6, p. 86-88 |
| 8 | Patrones rotacionales + funcionales | Rotación con polea, medicine ball, patrones deportivos | Velocidad + carga sin compensación | Sacrificar posición por velocidad | Cap. 6, p. 88 |

---

### SkillPath: shoulder-dynamic-stabilization

- Disciplina: fisioterapia / rehabilitación de hombro
- Objetivo final: restaurar estabilidad dinámica, neuromuscular control y retorno a función completa
- Requisitos: evaluar estabilidad estática (cápsula, labrum) antes de iniciar; sin contraindicaciones postquirúrgicas
- Pasos:

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | ROM protegido + isométricos | AAROM con L-bar; isométricos submáximos multi-ángulo | Sin dolor; ROM progresando | Forzar ROM; compensar con escápula | Cap. 7, p. 101-102 |
| 2 | Estabilización rítmica | Alternar isométricos con terapeuta; 30° scapular plane → 90-100° → 120° | Co-contracción sin dolor | Compensar con deltoides; elevar hombro | Cap. 7, p. 102 |
| 3 | Axial compression / weight-bearing | Weight shifts en mesa → balón → cuadrupedia | Sin dolor; progresar superficie | Colapsar escápula | Cap. 7, p. 102, 104 |
| 4 | Fortalecimiento rotadores + escápula | Tubing 0° y 90°; full can; prone rowing; push-up plus | Fuerza 4/5; sin sustitución | Dominancia de trapecio superior | Cap. 7, p. 103 |
| 5 | PNF + estabilización avanzada | Patrones diagonales; ojos cerrados; PNF con estabilización | ROM completo; control en end-range | Perder control excéntrico | Cap. 7, p. 103 |
| 6 | Pliometría | Chest pass, overhead throw, wall dribbles (2 manos → 1 mano) | Sin dolor; control en deceleración | Iniciar con 1 mano prematuramente | Cap. 7, p. 105 |
| 7 | Retorno a actividad | Intervalo de lanzamiento/servicio; deporte específico | Criterios clínicos completos | Retorno prematuro | Cap. 7, p. 106 |

---

### SkillPath: acl-rehabilitation

- Disciplina: fisioterapia deportiva
- Objetivo final: retorno seguro a deporte con estabilidad, fuerza y propiocepción simétricas
- Requisitos: confirmación de estabilidad de injerto; ROM completo antes de fase 2
- Pasos:

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Protección (sem 1-4) | ROM, isométricos cuádriceps, SLR, squat con balón, step-ups, ciclismo sillín alto | ROM completo, marcha normal | Evitar extensión completa temprana; perder ROM | Cap. 11, p. 179 |
| 2 | Fuerza temprana (sem 5-8) | 50-60% 1RM × 3×10 × 3/semana; lunges cargados; propiocepción inestable | Fuerza progresiva; control | Valgo de rodilla; compensar | Cap. 11, p. 180 |
| 3 | Fuerza intensiva (sem 9-12) | Aumentar carga; carrera progresiva (recta→colina→diagonal→irregular) | Carrera confortable | Aumentar demasiado rápido | Cap. 11, p. 180-181 |
| 4 | Retorno deportivo (sem 13-16) | 80% 1RM +10% sem 15; pliometría; agilidad; deporte específico | Simetría de fuerza; sin dolor; propiocepción | Retorno prematuro; ignorar déficits | Cap. 11, p. 181-182 |

---

### SkillPath: ankle-inversion-rehab

- Disciplina: fisioterapia / deporte
- Objetivo final: retorno a actividad sin riesgo de recurrencia (73% sin rehab adecuada)
- Requisitos: descartar fractura, lesión osteocondral, subluxación peroneos
- Pasos:

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Control edema + ROM temprano | PRICEM; ROM activo/asistido; alphabet; gait re-ed | Carga parcial tolerada | Inmovilización prolongada innecesaria | Cap. 12, p. 192-193 |
| 2 | Flexibilidad + isométricos | Estiramientos gastrocnemio/sóleo/peroneos; isométricos contra otro pie | ROM mejorando; sin dolor | Estirar en dirección incorrecta | Cap. 12, p. 193-196 |
| 3 | Fortalecimiento + carga | Thera-Band todas direcciones; step-up/down; progresar a hopping | Carga completa sin dolor | Compensar con cadera/trunk | Cap. 12, p. 196-198 |
| 4 | Propiocepción progresiva | Single leg stand → eyes closed → wobble board → foam → perturbaciones | 30s single leg estable | Trendelenburg compensatorio | Cap. 12, p. 198-200 |
| 5 | Funcional/pliometría | Hopping multidireccional, trampette, shuttle runs, figure-8 | Sin dolor; simetría | Retorno prematuro a deporte | Cap. 12, p. 200-201 |

---

## 5) Técnica, cues y fallos comunes

### Squat (general, aplicación lumbar/rodilla/cadera)

- **Cues principales:**
  - Rodilla sobre segundo/tercer metatarsiano (no valgo)
  - Iniciar movimiento desde pelvis, no tórax
  - Mantener lordosis lumbar neutra (no hiperextender ni flexionar)
  - Glúteos activos en ascenso
  - Peso distribuido en todo el pie
  - Pecho arriba, mirada al frente
- **Errores frecuentes:**
  - Valgo de rodilla (rodillas colapsan medialmente)
  - Compensar con flexión/extensión lumbar
  - Iniciar ascenso con tórax en vez de pelvis
  - Talones se elevan
  - Depth insuficiente o excesiva según patología
- **Variantes seguras:**
  - Squat con balón en pared (soporte posterior) para fase temprana
  - Squat con soporte (agarradero) → sin soporte
  - Limitar profundidad a 40° en PFPS
  - Single leg squat solo en fases avanzadas
- **Indicaciones por zona:**
  - PFPS: limitar a 40° inicialmente
  - OA rodilla: progresar según dolor
  - LCA: CKC seguro en primeras 6 semanas (Wright 2008)
  - Lumbar: mantener neutra; evitar carga en flexión
- Páginas: Cap. 2 p. 13-14; Cap. 6 p. 84; Cap. 10 p. 150; Cap. 11 p. 173, 177, 179

---

### Abdominal Bracing

- **Cues principales:**
  - "Imagina que te van a dar un puñetazo en el abdomen"
  - Pared abdominal ni se succiona ni se empuja
  - Contracción isométrica co-activando transverso + oblicuos
  - Mantener respiración normal (no Valsalva)
  - Demostrar con isométricos en otras articulaciones como referencia
- **Errores frecuentes:**
  - Confundir con hollowing (sucionar)
  - Valsalva (apnea)
  - Sobre-activar recto abdominal
  - No mantener durante movimiento funcional
- **Variantes/Progresiones:**
  - Sentado → de pie → 4 puntos → con movimiento de miembros → con carga → funcional
- **Indicaciones:**
  - Base de toda estabilidad lumbar
  - Practicar en MÚLTIPLES posiciones
  - No es un ejercicio en sí, es una estrategia de activación
- Páginas: Cap. 6, p. 81

---

### Heel Drops (Aquiles excéntrico)

- **Cues principales:**
  - Borde de escalón; bajar lentamente
  - NO subir con pierna afectada (usar contralateral)
  - Rodilla recta (gastrocnemio) y flexionada (sóleo) en sesiones separadas
  - Alinear pie; evitar pronación excesiva
  - Progresar con mochila con peso
- **Errores frecuentes:**
  - Cargar concéntricamente la pantorrilla afectada al subir
  - Hacerlo demasiado rápido
  - Compensar con pronación
  - Ir más allá de plantígrado en tendinopatía insercional
- **Variantes seguras:**
  - Descalzo para mejorar alineación (si superficie adecuada)
  - Con zapatillas si biomecánica pobre o superficie dura
  - Bilateral → unilateral
- **Indicaciones:**
  - Dolor durante ejercicio es aceptable (informar al paciente)
  - Detener si dolor incapacitante
  - NO AINEs (la condición no es inflamatoria)
- Páginas: Cap. 12, p. 203-204

---

### Full-Can vs Empty-Can (hombro)

- **Cues principales:**
  - Full-can: elevación en escapular plane con rotación EXTERNA
  - Mantener por debajo de 90° inicialmente
  - Escápula estable, sin shrug
- **Errores frecuentes:**
  - Usar empty-can (rotación interna) → mayor migración superior humeral, más dolor, más deltoides
  - Elevar por encima de 90° prematuramente
  - Compensar con trapecio superior
- **Indicaciones:**
  - Full-can es preferible a empty-can para supraespinoso (menos dolor, menos deltoides, fuerza compresiva)
  - Empty-can NO recomendado en impingement o patología de manguito
- Páginas: Cap. 7, p. 97-98

---

### Single Leg Stand (tobillo/propiocepción)

- **Cues principales:**
  - Rodilla tracking sobre tercer metatarsiano
  - Pelvis nivelada (no Trendelenburg)
  - Arco longitudinal mantenido
  - Progresión: ojos abiertos → cerrados → superficie inestable → tarea dual
- **Errores frecuentes:**
  - "Compensatory Trendelenburg" (shift pélvico excesivo)
  - Rodilla colapsa medialmente → efecto pronatorio
  - Usar dedos para agarrar (clawing)
  - No mantener arco
- **Variantes:**
  - Flat foot → on toes → eyes closed → ball → wobble board → foam
  - Añadir tarea: lanzar pelota, contar
- Páginas: Cap. 12, p. 198-200

---

### Gluteus Medius Retraining (cadera)

- **Cues principales:**
  - Side-lying: rotación externa de cadera sin mover pelvis ni lumbar
  - Inner range hold hasta 10s
  - Standing: mantener pelvis nivelada en frontal plane al levantar pierna contralateral
  - Usar espejo para feedback
  - Palpar glúteo medio para confirmar activación
- **Errores frecuentes:**
  - Dominancia de TFL en vez de glúteo medio
  - Rotar pelvis o lumbar para compensar
  - Usar cuadratus lumborum para elevar pelvis
  - No mantener inner range
- **Progresión:**
  - Side-lying → standing con pie en step → step-down → single leg con carga
  - Ajustar grado de flexión de cadera para aislar glúteo medio vs TFL
- Páginas: Cap. 10, p. 146-150

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Tendinopatía patelar (Jumper's Knee)

- **Zona:** knee (patellar tendon)
- **Etiología resumida:** Sobrecarga repetitiva del tendón patelar; degeneración más que inflamación; asociado a jumping/landing
- **Signos y síntomas:** Dolor localizado en polo inferior de patela/cuerpo del tendón; dolor con jumping, landing; inicialmente mejora con actividad, empeora al parar; puede haber pseudo-locking
- **Protocolo de rehab:**
  - **Fase temprana (0-4 semanas):**
    - Objetivo: reducir dolor, mantener fitness, iniciar excéntricos
    - Qué se hace: warm-up (ciclismo, estiramientos), protocolo excéntrico en tabla 25° (15 reps × 2/día × 7 días/semana), NO deporte normal
    - Qué NO se hace: actividad deportiva normal, concéntrico de cuádriceps pesado
    - Criterio para pasar: 4 semanas completadas; dolor reduciéndose
  - **Fase tardía/funcional (4-12 semanas):**
    - Objetivo: progresar carga, retorno gradual
    - Qué se hace: añadir jogging, aumentar intensidad aeróbica, progresar excéntricos con mochila, estiramientos, retorno gradual a actividad (8 semanas)
    - Criterio: sin dolor en actividades funcionales; fuerza simétrica
- **Ejercicios de prehab:** Estiramientos de cuádriceps e isquiotibiales; alineación biomecánica; eccentric training como warm-up en atletas de riesgo
- **Umbrales de dolor:** Dolor en tendón durante ejercicio es aceptable; detener si incapacitante
- **Referencias:** Cap. 11, p. 174-176

---

### Lesión / condición: Tendinopatía de Aquiles (mid-portion)

- **Zona:** ankle-foot (Achilles tendon)
- **Etiología resumida:** Degeneración sin inflamación; sobrecarga lenta o súbita; asociado a poor biomechanics (pronación), cambio de calzado/entrenamiento, debilidad lumbo-pélvica
- **Signos y síntomas:** Dolor en mid-substance del tendón; rigidez matutina (10-15 min); engrosamiento; dolor con heel drops; dolor al inicio de actividad que mejora con warm-up
- **Stadia:** Mid-portion vs. insercional (diferente pronóstico y protocolo)
- **Protocolo de rehab:**
  - **Fase temprana:**
    - Objetivo: restaurar dorsiflexión, estirar gastrocnemio/sóleo, iniciar excéntricos
    - Qué se hace: ROM exercises, estiramientos, heel drops (3×15 × 2/día × 7 días/semana × 12 semanas), aeróbico non-weight-bearing si dolor
    - Qué NO se hace: AINEs (no es inflamatorio); impacto alto prematuro
    - Criterio para pasar: dolor reduciéndose; ROM mejorando
  - **Fase tardía:**
    - Objetivo: progresar carga, pliometría, retorno
    - Qué se hace: aumentar reps y peso (mochila), pliometría, skipping, trampette, uphill lunges, actividades multidireccionales
    - Criterio: sin dolor en actividades funcionales; fuerza simétrica
- **Ejercicios de prehab:** Estiramientos de pantorrilla; alineación biomecánica; calzado adecuado; ortesis si necesario
- **Umbrales de dolor:** Disconfort durante ejercicio esperado; detener si dolor discapacitante
- **Referencias:** Cap. 12, p. 191-192, 203-204

---

### Lesión / condición: Tennis Elbow (Lateral Epicondylalgia)

- **Zona:** elbow (lateral epicondyle / ECRB)
- **Etiología resumida:** No inflamatoria; cambios neurogénicos (sustancia P, CGRP, glutamato); neovascularización; degeneración/desorganización de colágeno; sobrecarga repetitiva de extensores de muñeca
- **Signos y síntomas:** Dolor lateral de codo con gripping; bilateral deficits en reaction time; wrist posture anormal durante grip; dolor con extensión resistida de muñeca
- **Protocolo de rehab:**
  - **Fase 1 - Restauración de muscle performance (6-8 semanas):**
    - Objetivo: reducir dolor, mejorar pain-free grip strength a ~80% del lado contralateral
    - Qué se hace: ejercicios de antebrazo (flexión/extensión, pronación/supinación, desviación radial/ulnar) con carga baja (15-20 RM), tempo lento (~8s/rep); isométricos si dinámico provoca dolor; codo en flexión → progresar a extensión
    - Qué NO se hace: cargas altas (3-8 RM) que provoquen dolor; actividades que sobrecarguen
    - Criterio para pasar: sin dolor o difícil de exacerbar; grip strength ~80%
  - **Fase 2 - Restauración funcional:**
    - Objetivo: fuerza al 100% (o >110% si dominante); retorno a trabajo/deporte
    - Qué se hace: cargas altas, excéntricos, pliometría si deporte lo requiere; isométricos funcionales sostenidos si trabajo lo requiere
    - Criterio: fuerza simétrica; capacidad laboral/deportiva completa
- **Ejercicios de prehab:** Estiramientos de extensores; corrección de wrist posture durante grip; modificación de tareas laborales
- **Umbrales de dolor:** Ejercicio SIN reproducción de dolor del paciente (principio fundamental)
- **Referencias:** Cap. 8, p. 116-117, 122-125

---

### Lesión / condición: Esguince lateral de tobillo (ATFL)

- **Zona:** ankle (lateral ligament complex)
- **Etiología resumida:** Mecanismo de plantarflexión + inversión; ATFL más común; grados 1-3
- **Signos y síntomas:** Dolor lateral, edema (inmediato o en horas), inestabilidad, miedo a "giving way"
- **Stadia:**
  - Grado 1: sin laxitud
  - Grado 2: laxitud con end-point firme
  - Grado 3: laxitud completa sin end-point (a menudo menos doloroso)
- **Protocolo de rehab:**
  - **Fase temprana:**
    - Objetivo: controlar edema, reducir dolor, restaurar ROM, reeducar marcha
    - Qué se hace: PRICEM; ROM activo/asistido; weight transfer; gait re-education; isométricos; ciclismo unilateral
    - Qué NO se hace: inmovilización prolongada (salvo grado 3 con brace temporal); forzar dorsiflexión
    - Criterio: carga parcial tolerada; ROM mejorando
  - **Fase intermedia:**
    - Objetivo: fuerza, propiocepción, carga completa
    - Qué se hace: Thera-Band todas direcciones; step-up/down; single leg stand progresivo
    - Criterio: carga completa sin dolor; single leg stand estable
  - **Fase tardía/funcional:**
    - Objetivo: retorno a deporte/actividad; prevenir recurrencia
    - Qué se hace: hopping multidireccional, trampette, shuttle runs, figure-8, pliometría; taping/bracing como apoyo psicológico/propioceptivo
    - Criterio: sin dolor; ROM completo; fuerza y propiocepción simétricas
- **Red flags:** Dolor persistente puede indicar: lesión osteocondral del talus, impingement, inestabilidad sindesmótica, fractura oculta
- **Referencias:** Cap. 12, p. 190-191, 192-201

---

### Lesión / condición: OA de rodilla

- **Zona:** knee
- **Etiología resumida:** Degeneración del cartílago; multifactorial (obesidad, debilidad de cuádriceps, laxitud, biomecánica alterada); compartimento medial más afectado
- **Signos y síntomas:** Dolor con carga, rigidez matutina, crepitus, reducción de ROM, debilidad de cuádriceps, posible varo
- **Protocolo de rehab:**
  - **Fase temprana:**
    - Aeróbico: non-weight-bearing (hydrotherapy, cycling con sillín alto); 40-70% HRR según capacidad
    - ROM: activo-asistido, heel slides, CPM si post-quirúrgico, movilización patelar
    - Fuerza: isométricos de cuádriceps → SLR → isotónicos con énfasis en endurance
    - Propiocepción: repositioning con electrogoniómetro a 40°, 60°, 90°
  - **Fase tardía:**
    - Aeróbico: walking programme progresivo (objetivo 1h/día); Nordic walking
    - ROM: funcional (squats, step-ups)
    - Fuerza: CKC (squats, lunges, step-ups, sit-to-stand con peso)
    - Propiocección: superficies inestables, single leg, tareas duales
- **Referencias:** Cap. 11, p. 159-174, 182

---

### Lesión / condición: Dolor lumbar no específico (crónico)

- **Zona:** lumbar
- **Etiología resumida:** Multifactorial; debilidad de endurance de tronco, poor motor control, fear avoidance, deconditioning, factores psicosociales
- **Signos y síntomas:** Dolor con movimiento, limitación funcional, fear avoidance, altered recruitment patterns, reduced proprioception
- **Protocolo de rehab:** (Ver SkillPath lumbar-stability-progression arriba)
  - **Fase temprana:** Corregir postura, enseñar neutra + bracing, stretches selectivos, aeróbico bajo (10-30 min walk)
  - **Fase intermedia:** Endurance de tronco (McGill exercises), aeróbico 20 min → 1h, introducir carga
  - **Fase tardía:** Carga progresiva, superficies inestables, rotación, preparar descarga
- **Red flags:** Patología seria (fractura, infección, tumor, cauda equina) requiere derivación médica inmediata
- **Referencias:** Cap. 6, p. 67-93

---

### Lesión / condición: Osteoporosis

- **Zona:** systemic (spine, hip, wrist predominantemente)
- **Etiología resumida:** Remodelado óseo desequilibrado (resorción > formación); multifactorial (genética, hormonal, nutricional, mecánico, fármacos)
- **Signos y síntomas:** Fractura de bajo trauma (muñeca, cadera, columna); cifosis progresiva; pérdida de altura
- **Clasificación DXA:**
  - Normal: T-score +1 a -1
  - Osteopenia: T-score -1 a -2.5
  - Osteoporosis: T-score ≤ -2.5
  - Severa: T-score ≤ -2.5 + fractura
- **Protocolo de ejercicio por edad:**
  - **Niños/adolescentes:** impacto alto, diversión, 10-20 min, ≥3 días/semana, resistencia <60% 1RM
  - **Adultos (30-50):** impacto (saltos, steps), resistencia training, 12 ejercicios × 3 series × 15 reps
  - **Ancianos con hueso normal:** impacto corto y dirigido
  - **Ancianos con osteoporosis establecida:** ⚠️ EVITAR impacto, torsión, flexión súbita. Enfocarse en: fuerza para movilidad, balance, prevención de caídas, ejercicios posturales (extensión de espalda sentado)
- **Red flags:** Ejercicio sin nutrición adecuada o sin farmacología puede ser inefectivo o peligroso. En osteoporosis severa, targeted bone loading puede causar fracturas.
- **Referencias:** Cap. 16, p. 242-254

---

## 7) Factores de estilo de vida

### Sueño y descanso
- El libro no dedica secciones específicas al sueño. Sin embargo:
  - En el contexto de OA: la rigidez matutina es un síntoma clave que limita función al inicio del día (Cap. 11, p. 165)
  - En tendinopatías: la rigidez matutina (10-15 min en Aquiles) es un marcador clínico (Cap. 12, p. 206)

### Estrés y factores psicosociales
- El libro menciona que el dolor lumbar crónico es un "fenómeno multifacético que incorpora deterioro físico, distress psicológico e interrupción social" (Cap. 4, p. 31; Cap. 6, p. 67)
- Fear avoidance behaviour es identificado como factor que limita función en LBP (Cap. 6, p. 68)
- Gaskell et al. (2007) mostraron que un programa de ejercicio + educación redujo ansiedad y depresión en LBP crónico (Cap. 6, p. 68)
- En obesidad: barreras psicológicas (miedo a caer, vergüenza, low self-efficacy) limitan rehabilitación (Cap. 15, p. 236)

### Nutrición
- Solo se aborda específicamente en el contexto de osteoporosis (Cap. 16, p. 250):
  - Calcio y vitamina D son esenciales para salud ósea
  - Sin nutrición adecuada, el ejercicio solo no puede crear hueso sano
  - Proteína adecuada necesaria para síntesis de colágeno
  - Ingesta calórica suficiente para mantenimiento óseo
  - ⚠️ "Female athletic triad": eating disorder + amenorrea + osteoporosis en gimnastas, bailarinas, corredoras de distancia
- En obesidad: se menciona que la pérdida de peso reduce carga articular (4× reducción de carga en rodilla por cada libra perdida) (Cap. 15, p. 234)

### Entrenar enfermo / con dolor
- El libro no usa reglas tipo "above/below the neck"
- Principio general: el ejercicio debe ser SIN DOLOR para la mayoría de condiciones (especialmente tennis elbow, Cap. 8, p. 123)
- Excepción: tendinopatías (Aquiles, patelar) donde dolor leve durante ejercicio excéntrico es aceptable y esperado
- En OA: actividad dentro de límites de dolor; evitar actividad que exacerbe
- En LBP agudo: mantener actividad dentro de límites de dolor; evitar bed rest (European guidelines, Cap. 6, p. 67)

### Adherencia
- El libro enfatiza repetidamente que la adherencia es el factor más crítico:
  - "La falta de compliance o adherencia a programas de ejercicio es una de las mayores razones de resultados pobres" (Cap. 1, p. 5)
  - Los beneficios del ejercicio para OA desaparecen si no se mantiene el programa (van Baar 2001, Cap. 10, p. 142)
  - La descarga debe incluir un programa abreviado mantenible a largo plazo (Cap. 6, p. 88)
  - El modo de ejercicio debe adaptarse al lifestyle del paciente para adherencia a largo plazo (Cap. 2, p. 10)

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal de reglas para **rehabilitación musculoesquelética por región** (cervical, lumbar, hombro, codo, rodilla, tobillo)
  - Motor de **progresiones de rehab por fases** con criterios de paso explícitos
  - Reglas de **dosificación de ejercicio terapéutico** (RM, frecuencia, duración, intensidad aeróbica)
  - Protocolos específicos de **tendinopatía** (Aquiles excéntrico, patelar excéntrico, tennis elbow)
  - Reglas de **seguridad para osteoporosis** (contraindicaciones de ejercicio)
  - Validación de **cues técnicos** para ejercicios de estabilidad (bracing, squat, heel drops)
  - Estructura de **sesión de ejercicio** (warm-up → endurance → recreational → cool-down)
  - Reglas de **propiocepción progresiva** aplicables a todas las zonas

- **Limitaciones:**
  - ⚠️ Lenguaje muy clínico → NO usar para diagnóstico; solo como referencia de prescripción bajo supervisión profesional
  - El libro es de 2011 → alguna evidencia puede estar actualizada (especialmente en tendinopatías, LCA)
  - Población principal: pacientes con patología → ajustar umbrales para usuarios recreativos sanos
  - NO cubre periodización de fuerza para rendimiento, calistenia, powerlifting
  - Muchas reglas requieren supervisión clínica (no automatizar sin feedback del usuario)
  - Los protocolos de osteoporosis severa son contraindicaciones, no prescripciones

- **Recomendaciones específicas:**
  1. **Crear `rules/tendinopathy_protocols.ts`** con los protocolos excéntricos de Aquiles (Alfredson), patelar (Jonsson/Alfredson) y tennis elbow, incluyendo parámetros exactos (reps, sets, frecuencia, duración, progresión de carga, criterios de dolor aceptable)
  2. **Crear `SkillPath` entries para:** `cervical-stability-rehab`, `lumbar-stability-progression`, `shoulder-dynamic-stabilization`, `acl-rehabilitation`, `ankle-inversion-rehab`, `achilles-tendinopathy-rehab`, `patellar-tendinopathy-rehab`, `hip-oa-management`, `knee-oa-management`, `osteoporosis-safe-exercise`
  3. **Crear `rules/exercise_prescription_basics.ts`** con las reglas ACSM de dosis aeróbica, fuerza, flexibilidad y estructura de sesión; y `rules/osteoporosis_safety.ts` con contraindicaciones de ejercicio por T-score
  4. **Añadir `BodyZoneId` metadata** con lesiones típicas, ROM objetivo, músculos clave y precauciones específicas por zona (extraído de caps. 4-12)
  5. **Crear `rules/pelvic_girdle_pain.ts`** con la clasificación force closure (reducido vs. excesivo) y las implicaciones opuestas de tratamiento, como ejemplo de regla condicional que cambia la prescripción según clasificación

---

*Documento generado para Plan Maestro OS. Toda la información es parafraseada del libro original. Las referencias de página corresponden a la edición impresa de 2011.*

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# Verificación de completitud + Ejecución de las 5 recomendaciones

---

## Verificación: datos que requieren aclaración visual

Al revisar el contenido completo del libro, identifico los siguientes puntos donde la **información textual es suficiente** pero las figuras aportarían precisión adicional:

| Zona/Capítulo | Figura | Qué muestra | Impacto |
|---|---|---|---|
| Cap. 4, p. 34 | Fig 4.2a-c | Demostración visual del "give" cervical inferior en flexión y la corrección con "nodding" | La descripción textual es clara: mover desde arriba, mantener cuello inferior estable |
| Cap. 6, p. 82-88 | Figs 6.17-6.34 | Posiciones exactas de side bridge, trunk curl, bird-dog, prone bridge, rotación con polea | Descripciones textuales completas; posiciones verificables |
| Cap. 7, p. 101-106 | Figs 7.4-7.15 | Posiciones de AAROM, rhythmic stabilisation, push-up on ball, plyometrics | Texto suficiente para reconstruir |
| Cap. 10, p. 146-153 | Figs 10.2-10.15 | Retraining de glúteo medio (side-lying), step-down, squat con alineación rodilla | Texto claro: "rodilla sobre segundo/tercer metatarsiano" |
| Cap. 11, p. 175 | Fig 11.13 | Posición en tabla inclinada 25° para excéntricos patelares | Texto explícito: 25° incline board, flex to 70° |
| Cap. 12, p. 203 | Fig 12.27 | Heel drops con rodilla recta y flexionada | Texto suficiente |
| Cap. 16, p. 246 | Figs 16.1-16.4 | Diagramas de remodelado óseo cortical/trabecular | Concepto claro textualmente |

**Conclusión:** No hay información crítica perdida por falta de imágenes. Todos los parámetros numéricos, progresiones y criterios están en el texto. Procedo con las 5 recomendaciones.

---

---

# RECOMENDACIÓN 1: `rules/tendinopathy_protocols.ts`

## Especificación completa de reglas para tendinopatías

```markdown
# TENDINOPATHY PROTOCOLS — Especificación para implementación

## Fuente: Exercise Therapy in the Management of Musculoskeletal Disorders (Wilson, Gormley, Hussey, 2011)

---

### REGLA 1: achilles-tendinopathy-eccentric (Protocolo Alfredson)

- ID sugerida: `achilles_tendinopathy_eccentric_protocol`
- Tipo: protocolo de rehabilitación / progresión
- Condición: Tendinopatía de Aquiles mid-portion
- Evidencia: Alfredson et al. 1998, Mafi et al. 2001, Kingma et al. 2007, Magnussen et al. 2009
- Referencia libro: Cap. 12, p. 189, 191-192, 203-204

#### Parámetros del ejercicio:

| Parámetro | Valor |
|---|---|
| Posición | De pie sobre borde de escalón |
| Ejecución | Bajar talón lentamente (heel drop) |
| Variante 1 | Rodilla RECTA → trabaja gastrocnemio |
| Variante 2 | Rodilla FLEXIONADA → trabaja sóleo |
| Concéntrico | NO cargar concéntricamente la pierna afectada; usar contralateral para subir |
| Series | 3 |
| Repeticiones | 15 |
| Frecuencia diaria | 2 veces/día |
| Días/semana | 7 días/semana |
| Duración total | 12 semanas |
| Progresión de carga | Mochila con peso cuando el ejercicio deje de provocar dolor; añadir peso hasta recrear dolor |
| Calzado | Descalzo para mejorar alineación (si superficie adecuada); zapatillas si biomecánica pobre o superficie dura |

#### Fases temporales:

| Fase | Semanas | Contenido |
|---|---|---|
| Temprana | 0-4 | Protocolo excéntrico + aeróbico non-weight-bearing + estiramientos |
| Tardía | 4-12 | Aumentar reps, añadir peso (mochila), pliometría, skipping, trampette, uphill lunges |
| Retorno | 12+ | Actividades multidireccionales, figure-of-eights, stop/start |

#### Reglas de dolor:
- Disconfort durante el ejercicio: ESPERADO y aceptable (informar al paciente)
- Detener si dolor INCAPACITANTE
- NO usar AINEs (la condición no es inflamatoria; es degenerativa)
- Rigidez matutina 10-15 min es un marcador clínico

#### Contraindicaciones / precauciones:
- Tendinopatía INSERCIONAL: NO ir más allá de plantígrado (Jonsson et al. 2008)
- Evidencia menos robusta para insercional vs mid-portion
- Evaluar biomecánica del pie (pronación excesiva)
- Evaluar calzado (cambio reciente → factor de riesgo)
- Evaluar debilidad lumbo-pélvica como contribuyente

#### Criterios de derivación:
- Si no mejora en 12 semanas → reevaluar diagnóstico
- Dolor nocturno severo → descartar otra patología

---

### REGLA 2: patellar-tendinopathy-eccentric (Protocolo Jonsson & Alfredson 2005)

- ID sugerida: `patellar_tendinopathy_eccentric_protocol`
- Tipo: protocolo de rehabilitación / progresión
- Condición: Tendinopatía patelar (Jumper's Knee)
- Evidencia: Jonsson & Alfredson 2005, Visnes & Bahr 2007, Purdam et al. 2004
- Referencia libro: Cap. 11, p. 174-176

#### Parámetros del ejercicio:

| Parámetro | Valor |
|---|---|
| Posición | De pie sobre tabla inclinada 25° |
| Ejecución | Flexión lenta de rodilla hasta 70° |
| Peso | Todo el peso corporal en pierna lesionada |
| Concéntrico | NO; usar otra pierna para subir |
| Repeticiones | 15 |
| Frecuencia diaria | 2 veces/día |
| Días/semana | 7 días/semana |
| Duración total | 12 semanas |
| Progresión (post 4 sem) | Jogging suave, aumentar intensidad ciclismo/natación |
| Sobrecarga | Mochila con peso cuando el ejercicio no sea doloroso; añadir hasta recrear dolor |

#### Restricciones:
- NO actividad deportiva normal durante primeras 8 semanas
- Dolor en tendón durante ejercicio: aceptable (informar al paciente)
- Detener si dolor incapacitante
- Puede haber dolor muscular inicial (DOMS)

#### Retorno progresivo (post 8 semanas):
1. Caminar rápido
2. Jogging suave
3. Carrera a medio ritmo
4. Carrera a tres cuartos de ritmo
5. Sprint (adelante, atrás, lateral)
6. Trabajo multidireccional + rotacional
7. Aceleración/desaceleración súbitas
8. Salto y aterrizaje (dos pies → un pie)

#### Diferenciación clínica PFPS vs PT:

| Signo | PFPS | Tendinopatía patelar |
|---|---|---|
| Actividad dolorosa | Correr, escaleras, trabajo excéntrico | Saltar, aterrizar |
| Localización | Difusa en patela | Polo inferior de patela/cuerpo del tendón |
| Crepitus | En casos severos (patela) | En tendón |
| Giving way | Sí (por dolor, debilidad cuádriceps) | No usual |
| VMO | Atrofia; desequilibrio VMO/VL | Atrofia general de cuádriceps |
| Efecto de actividad | ↑ dolor con ↑ actividad | Dolor inicial ↓ con actividad, ↑ al parar |
| Pseudo-locking | Sí | No |

---

### REGLA 3: tennis-elbow-exercise-protocol (Epicondilalgia lateral)

- ID sugerida: `tennis_elbow_exercise_protocol`
- Tipo: protocolo de rehabilitación / progresión
- Condición: Tennis elbow / Lateral epicondylalgia
- Evidencia: Bisset et al. 2006a, Pienimäki et al. 1996/1998, Vicenzino 2003
- Referencia libro: Cap. 8, p. 116-117, 122-125

#### Principio fundamental:
> "El ejercicio debe realizarse SIN reproducción del dolor del paciente"

#### Fase 1: Restauración de performance muscular sin dolor (~6-8 semanas)

| Parámetro | Valor |
|---|---|
| Carga inicial | 15-20 RM (carga baja) |
| Series | 1-3 |
| Tempo | Lento: ~8 segundos por repetición (concéntrico + excéntrico) |
| Ejercicios | Flexión/extensión de muñeca, pronación/supinación, desviación radial/ulnar |
| Posición inicial | Codo en FLEXIÓN (menos provocativo) |
| Progresión | Codo en EXTENSIÓN (mayor estrés, más funcional) |
| Isométricos | Si concéntrico/excéntrico provocan dolor |
| Antebrazo contralateral | Ejercitar MAZIMAMENTE (efecto cruzado: Bonato et al. 1996, Stinear et al. 2001) |
| Supervisión | Visitas semanales mínimas 6-8 semanas |
| Objetivo de grip | ~80% del lado no afectado sin dolor |

#### Fase 2: Restauración funcional

| Parámetro | Valor |
|---|---|
| Carga | Alta (3-5 series de 3-8 RM) |
| Protocolo | Excéntrico-only beneficioso en este punto |
| Potencia | Si trabajo/deporte requiere acciones explosivas: velocidad aumentada |
| Isométricos funcionales | Si trabajo requiere grip sostenido bajo carga pesada |
| Ejemplo funcional | Gripping dynamometer a 40% 1RM + elevar brazo contra carga con polea/tubing |
| Objetivo de grip | 100% del lado no afectado (>110% si dominante) |

#### Modificaciones de actividad:
- Reducir/modificar tareas laborales/deportivas dolorosas
- Agarrar objetos con grip menos fuerte
- Antebrazo en SUPINACIÓN en vez de pronación
- Postura del miembro superior: evitar rotación interna que sobrecargue extensores

#### Nota sobre corticosteroides:
- Bisset et al. 2006a: fisioterapia (ejercicio + terapia manual) superior a inyección de corticoide a largo plazo
- Menos recurrencias, menos consultas médicas, mayor grip strength
- Inyección: beneficio a corto plazo (6 semanas) pero alta recurrencia

---

### REGLA 4: achilles-insertional-modification

- ID sugerida: `achilles_insertional_eccentric_modification`
- Condición: Tendinopatía de Aquiles INSERCIONAL (unión tendón-calcáneo)
- Evidencia: Jonsson et al. 2008
- Referencia libro: Cap. 12, p. 192

#### Modificación crítica:
- NO bajar más allá de PLANTÍGRADO (nivel del suelo)
- El rango excéntrico es limitado comparado con mid-portion
- Pronóstico: más difícil de tratar, tarda más en resolver
- Informar al paciente del diferente pronóstico

---

### REGLA 5: tendinopathy-general-principles

- ID sugerida: `tendinopathy_general_rules`
- Aplicable a: todas las tendinopatías del libro
- Referencia libro: Cap. 8 p. 116-117, Cap. 9 p. 131, Cap. 12 p. 191-192

#### Reglas generales:

1. **NO es inflamación:** El término "tendinitis" es inapropiado. Usar "tendinopatía" o "tendinosis". No hay signos de inflamación (Khan et al. 2002, Nirschl & Pettrone 1979, Kraushaar & Nirschl 1999)

2. **NO usar AINEs rutinariamente:** La condición no es inflamatoria. Excepción: manejo agudo del dolor muy limitado

3. **Cambios neurogénicos:** Sustancia P, CGRP, glutamato elevado en el tendón (Ljung et al. 1999/2004, Alfredson et al. 2000)

4. **Neovascularización:** Presente en tennis elbow (Zeisig et al. 2006)

5. **Ejercicio excéntrico:** Componente principal de rehabilitación
   - Evidencia fuerte para Aquiles mid-portion
   - Evidencia fuerte para patelar (con tabla inclinada)
   - Evidencia limitada/inconclusa para tennis elbow (Woodley et al. 2007)

6. **Flexibilidad primero:** Estiramientos usualmente se reintroducen antes que fortalecimiento

7. **Progresión:** Flexibilidad → Excéntrico → Concéntrico → Pliometría → Funcional

8. **El tendón no tiene sheath sinovial en extensores** (excepto flexores de mano)

---

### REGLA 6: cross-education-effect

- ID sugerida: `cross_education_unilateral_training`
- Aplicable a: rehabilitación unilateral
- Evidencia: Bonato et al. 1996, Stinear et al. 2001
- Referencia libro: Cap. 8, p. 124

#### Regla:
- Durante la rehabilitación de un miembro lesionado, ejercitar el miembro CONTRALATERAL a máxima intensidad
- Esto produce adaptaciones neurales cruzadas al lado afectado
- Mantener fuerza del lado sano previene deterioro bilateral
- Aplicar en: tennis elbow, tendinopatías unilaterales, post-quirúrgico unilateral
```

---

---

# RECOMENDACIÓN 2: SkillPath Entries (Progresiones de Rehabilitación)

## Especificación completa de SkillPaths

```markdown
# SKILLPATH ENTRIES — Especificación para implementación

## Fuente: Exercise Therapy in the Management of Musculoskeletal Disorders (2011)

---

## SkillPath 1: cervical-stability-rehab

- ID: `cervical-stability-rehab`
- Disciplina: fisioterapia / control motor
- Objetivo final: Controlar el "give" (movimiento no controlado) y restaurar estabilidad local y global cervical
- Contraindicaciones previas: Descartar VBI, inestabilidad craneovertebral, síntomas neurológicos progresivos
- Referencia: Cap. 4, p. 31-52

### Steps:

| Step | ID | Nombre | Descripción | Criterio de avance | Errores comunes | Ref |
|---|---|---|---|---|---|---|
| 1 | cervical-control-give | Control del "give" direccional | Enseñar a controlar movimiento en dirección sintomática; mover la restricción; 15-20 reps × 2-3/día | Movimiento familiar, sin síntomas | Compensar con otras zonas; no controlar escápula | Cap.4 p.34-36 |
| 2 | cervical-deep-flexors | Flexores profundos (cranio-cervical flexion) | Con biofeedback de presión: 20→22→24→26 mmHg; hold 5s por nivel; luego 10s × 10 reps | 2 reps sin sustitución ni fatiga; sin ECM/escalenos visibles | Chin poke; dominancia ECM; pérdida de neutra | Cap.4 p.36 |
| 3 | cervical-deep-extensors | Extensores profundos suboccipitales | Resistir flexión cervical superior con manos; hold 10s × 10 reps | 15s × 2 reps sin fatiga | Extensión activa; empujar cabeza contra manos | Cap.4 p.37 |
| 4 | cervical-global-inner | Estabilizadores globales rango interno | Mantener posiciones de flexión/extensión/rotación contra gravedad; 10 × 10s holds | 10×10s sin sustitución | Chin poke; elevación escapular; dominancia escalenos; hyoides | Cap.4 p.38-39 |
| 5 | cervical-global-outer | Estabilizadores globales rango externo | Controlar rango completo excéntricamente; lowering suave | Lowering suave sin pérdida de estabilidad | Pérdida de control excéntrico; sustitución | Cap.4 p.38-39 |
| 6 | cervical-extensibility | Extensibilidad de movilizadores globales | Estiramientos de lig. nuchae (30-120s × 2-3), escalenos (20-30s × 3-5), levator scapulae (20-30s × 3-5) | ROM mejorando; stretch en zona correcta | Estirar zona incorrecta; compensar | Cap.4 p.40-43 |
| 7 | cervical-resistance | Fuerza con resistencia | Thera-Band, sit-fit, pesos; isométricos → concéntricos/excéntricos; 10 reps × 2 sets cada dirección | Sin dolor; sin trick movements | Momentum; perder neutra | Cap.4 p.39-40 |
| 8 | cervical-sensorimotor | Sensorimotor/propiocepción | Joint position sense (láser), balance, oculomotor (eye follow, gaze stability) | Reposicionamiento preciso; balance 30s sin sway | Jerky eye movements; mareo; nausea | Cap.4 p.43-46 |

### Aerobic considerations:
- Evitar breaststroke, remo, ciclismo si hay uncontrolled cervical extension
- Evitar overhead >90° hasta controlar extensión cervical
- Evitar high-impact si hay shear/give
- Mejor opción: static bike con mirror, walking

### Dosage:
- Ejercicios de control: 15-20 reps × 2-3/día
- Holds: 10s × 10 reps (progresar a 15s × 2 reps)
- Stretches: 20-30s × 3-5 reps
- Resistencia: 10 reps × 2 sets

---

## SkillPath 2: lumbar-stability-progression

- ID: `lumbar-stability-progression`
- Disciplina: fisioterapia / estabilidad lumbar
- Objetivo final: Control motor perfecto, resistencia de tronco, estabilidad suficiente para todas las tareas esperadas
- Referencia: Cap. 6, p. 67-93
- Principio rector (McGill 2002): Entrenar para SALUD, no rendimiento. Endurance > Strength.

### Steps:

| Step | ID | Nombre | Descripción | Criterio de avance | Ref |
|---|---|---|---|---|---|
| 1 | lumbar-find-neutral | Encontrar posición neutra | Pelvis entre anterior y posterior tilt completo; practicar en sentado, de pie, 4 puntos | Mantener sin esfuerzo consciente | Cap.6 p.79 |
| 2 | lumbar-bracing | Bracing abdominal | Co-contracción isométrica de pared abdominal; NO sucionar NO empujar; cue: "puñetazo en abdomen" | Mantener durante actividades simples; no Valsalva | Cap.6 p.81 |
| 3 | lumbar-neutral-limb | Neutra + movimiento de miembros | En 4 puntos, mover brazo/pierna sin perder neutra; usar PBU como feedback | Sin cambio en PBU; sin movimiento lumbar | Cap.6 p.84 |
| 4 | lumbar-side-bridge | Side bridge (lateral) | Mantener side bridge con spine neutra; de rodillas → pies | Hold time progresivo; sin fatiga | Cap.6 p.84 |
| 5 | lumbar-trunk-curl | Trunk curl (flexores) | Curl-up con una rodilla flexionada; cervical neutra; hombros apenas se elevan | 10 reps sin dolor; sin flexión cervical | Cap.6 p.84 |
| 6 | lumbar-bird-dog | Bird-dog / trunk extensors | En 4 puntos, extender brazo/pierna contralateral | Sin rotación pélvica; 10 reps | Cap.6 p.84-85 |
| 7 | lumbar-load-unstable | Carga + superficies inestables | Pesos, poleas, gym ball, wobble boards | Control mantenido bajo carga | Cap.6 p.86-88 |
| 8 | lumbar-rotation-functional | Rotación + funcional | Rotación con polea, medicine ball, patrones deportivos | Velocidad + carga sin compensación | Cap.6 p.88 |

### Endurance tests (baseline):

| Test | Posición | Criterio de fallo | Ref |
|---|---|---|---|
| Lateral musculature | Side bridge, spine neutra | No puede mantener posición | Cap.6 p.76 |
| Flexor endurance | Sentado en cuña, rodillas/caderas flexionadas | Postura cambia o se apoya | Cap.6 p.76 |
| Back extensor | Prono sobre camilla, tronco colgando, pies fijos | No puede mantener | Cap.6 p.76 |

### Aerobic progression:
- Early: 10 min walking/día
- Intermediate: 20 min en clase → objetivo 1h
- Late: 30 min moderado × 5 días/semana (mínimo ACSM)

### Flexibility rules:
- NO enfatizar flexibilidad hasta que spine esté estabilizada
- Enfocarse en músculos que impiden pelvis neutra (hamstrings, hip flexors, calf)
- EVITAR movimientos que ya están sobreenfatizados (ej: gimnasta hiperextensible → no extender más)

---

## SkillPath 3: shoulder-dynamic-stabilization

- ID: `shoulder-dynamic-stabilization`
- Disciplina: fisioterapia deportiva
- Objetivo final: Restaurar estabilidad dinámica, neuromuscular control, retorno a función completa
- Referencia: Cap. 7, p. 94-112

### Steps:

| Step | ID | Nombre | Descripción | Criterio de avance | Ref |
|---|---|---|---|---|---|
| 1 | shoulder-acute | Fase aguda | ROM pasivo/AAROM restringido (L-bar); isométricos submáximos multi-ángulo; rhythmic stabilisation 30° scapular plane; axial compression en mesa | Sin dolor; ROM progresando | Cap.7 p.101-102 |
| 2 | shoulder-intermediate | Fase intermedia | ROM activo; tubing 0° y 90°; full can; prone rowing; push-up plus; PNF; escápula; axial compression progresado (ball, quadruped) | ROM completo; fuerza 4/5; estabilidad dinámica suficiente | Cap.7 p.102-104 |
| 3 | shoulder-advanced | Fase avanzada | Fortalecimiento agresivo; pliometría (2 manos → 1 mano); superficies inestables; oscilaciones (Bodyblade); wall dribbles | Sin dolor; ROM completo; fuerza simétrica | Cap.7 p.104-106 |
| 4 | shoulder-return | Retorno a actividad | Intervalo de retorno al deporte; deporte específico; criterios clínicos completos | Isocinética completa; propiocepción adecuada; sin dolor | Cap.7 p.106 |

### EMG-based exercise selection:

| Músculo | Mejor ejercicio | Evidencia | Ref |
|---|---|---|---|
| External rotators | Side-lying ER; ER a 0° abduction (menos strain capsular) | EMG studies | Cap.7 p.96 |
| Supraspinatus | Full-can (scaption con ER) - NO empty-can | Menos dolor, menos deltoides, fuerza compresiva | Cap.7 p.97-98 |
| Subscapularis | Push-up plus; diagonal D2; IR a 90° abduction | Decker 2003, Suenaga 2003 | Cap.7 p.97-98 |
| Serratus anterior | Push-up plus; dynamic hug; serratus punch | Decker 1999, Ekstrom 2003 | Cap.7 p.98-99 |
| Lower trapezius | Prone arm raise in line with lower trap fibers; prone horizontal abduction with ER | Ekstrom 2003, Cools 2007 | Cap.7 p.99 |

### Capsular restraints (for assessment):

| Estructura | Limita | Posición |
|---|---|---|
| Rotator interval, coracohumeral lig, superior GH lig | Flexión, extensión, ER | 0° abduction |
| Middle GH lig | ER end-range | ~45° abduction |
| Anterior inferior GH lig (banda anterior) | ER | 90° abduction |
| Middle inferior GH lig | Abducción + flexión end-range | — |
| Posterior inferior GH lig | IR | 90° abduction |
| Posterior capsule | IR | 0°-45° abduction |

---

## SkillPath 4: acl-rehabilitation

- ID: `acl-rehabilitation`
- Disciplina: fisioterapia deportiva
- Objetivo final: Retorno seguro a deporte con estabilidad, fuerza y propiocepción simétricas
- Referencia: Cap. 11, p. 178-182
- Basado en: Tagesson et al. 2008, Trees et al. 2007

### Steps:

| Step | ID | Semanas | Nombre | Contenido | Criterio de avance | Ref |
|---|---|---|---|---|---|---|
| 1 | acl-phase1 | 1-4 | Protección | ROM (extensión prioritaria), marcha, isométricos cuádriceps, SLR, squat con balón en pared, step-ups bajos, ciclismo sillín alto | ROM completo, marcha normal | Cap.11 p.179 |
| 2 | acl-phase2 | 5-8 | Fuerza temprana | 50-60% 1RM × 3×10 × 3/semana; lunges cargados; hip abd/add; propiocepción en superficies inestables | Fuerza progresiva; control | Cap.11 p.180 |
| 3 | acl-phase3 | 9-12 | Fuerza intensiva | Aumentar carga; carrera progresiva (recta→colina→diagonal→irregular) | Carrera confortable | Cap.11 p.180-181 |
| 4 | acl-phase4 | 13-16 | Retorno deportivo | 80% 1RM +10% sem 15; pliometría; agilidad; deporte específico | Simetría; sin dolor; propiocepción | Cap.11 p.181-182 |

### OKC vs CKC:
- Tagesson 2008: OKC NO aumenta traslación tibial; produce mayor fuerza de cuádriceps
- Wright 2008: CKC seguro en primeras 6 semanas; early weight-bearing seguro
- Ambos OKC y CKC deben incluirse

### Prophylaxis (PEP programme):
- Warm-up + stretching + strengthening + plyometrics + agility
- Evidencia: Mandelbaum 2005, Gilchrist 2008
- Reduce riesgo de LCA en atletas femeninas

---

## SkillPath 5: ankle-inversion-rehab

- ID: `ankle-inversion-rehab`
- Disciplina: fisioterapia / deporte
- Objetivo final: Retorno a actividad sin riesgo de recurrencia (73% sin rehab adecuada - Yeung 1994)
- Referencia: Cap. 12, p. 190-201
- Red flags: Descartar fractura fibular head, osteochondral fracture talus, peroneal subluxation, syndesmotic instability

### Steps:

| Step | ID | Nombre | Contenido | Criterio de avance | Ref |
|---|---|---|---|---|---|
| 1 | ankle-early | Rehabilitación temprana | PRICEM; ROM activo/asistido (alphabet); weight transfer; gait re-ed; isométricos; ciclismo unilateral pierna sana | Carga parcial tolerada | Cap.12 p.192-196 |
| 2 | ankle-strength | Fortalecimiento + carga | Thera-Band todas direcciones; step-up/down; progresar a hopping | Carga completa sin dolor | Cap.12 p.196-198 |
| 3 | ankle-proprio | Propiocepción progresiva | Single leg stand → eyes closed → wobble board → foam → perturbaciones | 30s single leg estable; sin Trendelenburg | Cap.12 p.198-200 |
| 4 | ankle-functional | Funcional/pliometría | Hopping multidireccional, trampette, shuttle runs, figure-8, skipping | Sin dolor; simetría; ROM completo | Cap.12 p.200-201 |

### Single leg stand technique cues:
- Rodilla tracking sobre TERCER metatarsiano
- NO Trendelenburg compensatorio (pelvic shift excesivo)
- NO rodilla colapsa medialmente (→ efecto pronatorio)
- Arco longitudinal mantenido
- Progresión: flat foot → on toes → eyes closed → ball → wobble board → foam

### Grading:
- Grade 1: sin laxitud
- Grade 2: laxitud con end-point firme
- Grade 3: laxitud completa sin end-point (a menudo MENOS doloroso)

---

## SkillPath 6: hip-oa-management

- ID: `hip-oa-management`
- Disciplina: fisioterapia / geriatría
- Objetivo final: Reducir dolor, mejorar función, mantener actividad
- Referencia: Cap. 10, p. 141-158

### Walking programme (Tabla 10.1):

| Semana | Frecuencia | Duración total | Caminata |
|---|---|---|---|
| 1 | 2 días/sem | 25 min | 15 min (idealmente 50% HRmax) |
| 2 | 3 días/sem | 25 min | 15 min |
| 3 | 3 días/sem | 30 min | 20 min |
| 4 | 3 días/sem | 40 min | 30 min |
| 5 | 3 días/sem | 50 min | 40 min |
| 6+ | 3 días/sem | 60 min | 50 min |

Warm-up: 5 min (slow walking, arm circles, trunk rotation, shoulder/chest stretches, side stretch)
Warm-down: slow walking + 3 flexibility exercises (shoulder, hamstring, lower back)
Nota: Usar bastón o bastones nórdicos si patrón de marcha alterado

### Strengthening progression:

| Fase | Ejercicio | Cues | Ref |
|---|---|---|---|
| Early | Co-activation hip into socket | Resistir distracción longitudinal suave | Cap.10 p.146 |
| Early | Gluteus medius side-lying | ER de cadera sin mover pelvis/lumbar; inner range hold hasta 10s | Cap.10 p.147 |
| Early | Gluteus maximus supine | Hip extensión con pierna fuera de cama; CKC; rodilla flexionada | Cap.10 p.147 |
| Early | Hip ER seated con Thera-Band | Spine neutra esencial | Cap.10 p.147 |
| Early | Standing pelvic alignment | Mantener pelvis frontal neutra al levantar pierna contralateral a step | Cap.10 p.148 |
| Late | Hip abduction extended knee | NO drift a flexión/IR (evitar TFL) | Cap.10 p.149 |
| Late | Step-down | Gluteus medius excéntrico; NO usar quadratus lumborum | Cap.10 p.150 |
| Late | Double leg squats | Rodilla sobre middle of arch; iniciar ascenso desde PELVIS no tórax | Cap.10 p.150 |
| Late | Bridging | Desafiar gluteus maximus | Cap.10 p.150 |

---

## SkillPath 7: knee-oa-management

- ID: `knee-oa-management`
- Disciplina: fisioterapia / geriatría
- Referencia: Cap. 11, p. 159-174

### Aerobic:
- Early: Non-weight-bearing (hydrotherapy, cycling con sillín ALTO)
- 40-70% HRR según capacidad
- Late: Walking programme → objetivo 1h mayoría de días; Nordic walking

### ROM:
- Early: AAROM (heel slides, static bike), CPM si post-quirúrgico, mobilización patelar
- Late: Functional ROM (squats, step-ups)

### Strength:
- Early: Isométricos cuádriceps → SLR → isotónicos (alto rep, baja carga)
- Baker 2001: 2 sets × 12 reps × 3/semana progresando peso
- Late: CKC (squats, lunges, step-ups, sit-to-stand con peso)

### Proprioception:
- Repositioning con electrogoniómetro a 40°, 60°, 90°
- Progresión: base amplia → estrecha → unipodal → superficie inestable → tarea dual

---

## SkillPath 8: pfps-management

- ID: `pfps-management`
- Disciplina: fisioterapia
- Referencia: Cap. 11, p. 176-178
- Basado en: Crossley et al. 2002, McConnell 1996

### Early phase (2 semanas):

| Ejercicio | Detalle | Dosis |
|---|---|---|
| Isometric VMO contractions | Sentado, rodilla 90° flexión | — |
| Squats to 40° + isometric gluteal | Combinado | 4 sets × 10 reps |
| Isometric hip abduction vs wall | De pie | 4 sets × 15s hold |
| Stretches | Patellar mobilisation, hamstrings, anterior hip | 3 reps × 30s hold |
| Frecuencia | Todo 2×/día | — |

### Late phase (4 semanas):

| Ejercicio | Detalle | Dosis |
|---|---|---|
| Step-downs | Slow lowering, standing on affected leg, 10cm step → 20cm | 3 sets × 5→10 reps |
| Isometric hip abduction standing | — | 4 sets × 30s hold |

### Aerobic:
- Cycling con sillín ALTO, sin carga, NO backward pedalling
- Rodilla sobre segundo dedo, pie recto en pedal
- Progresión: walking → jogging en líneas rectas → multi-direccional

### Nota sobre taping:
- McConnell 1996 lo recomendó
- Evidencia actual: Ng & Wong 2009 sugiere que puede inhibir VMO
- Decisión clínica individual

---

## SkillPath 9: osteoporosis-safe-exercise

- ID: `osteoporosis-safe-exercise`
- Disciplina: fisioterapia / geriatría
- Referencia: Cap. 16, p. 242-254
- ⚠️ REQUIERE evaluación DXA previa y clasificación médica

### Por nivel de riesgo:

| Población | Ejercicio indicado | Contraindicado |
|---|---|---|
| Normal/osteopenia leve | Impacto dirigido, resistencia training | Nada específico |
| Osteoporosis establecida | Fuerza para movilidad, balance, prevención caídas, extensión de espalda sentado | ⚠️ Actividad vigorosa, impacto alto, stop-starts súbitos, torsión, flexión abdominal súbita |
| Osteoporosis severa | Solo ejercicios posturales seguros, balance suave | ⚠️ Targeted bone loading (riesgo de fractura) |
| Frágiles/ancianos | Fuerza para movilidad, balance, calidad de vida, prevención caídas | Impacto, torsión |
| Niños/adolescentes | Impacto, gimnasia, plyometrics, resistencia <60% 1RM | — |
| Adultos 30-50 | Impacto (saltos, steps), resistencia training | — |

### Targeted bone loading principles:

| Principio | Descripción | Ref |
|---|---|---|
| Especificidad | Carga debe ser donde se mide BMD | Cap.16 p.251 |
| Sobrecarga | Estímulo > habitual | Cap.16 p.251 |
| Reversibilidad | Se pierde si se detiene | Cap.16 p.252 |
| Valores iniciales | Menor BMD → mayor % de mejora | Cap.16 p.252 |
| Retornos decrecientes | Techo biológico individual | Cap.16 p.252 |

### Microstrain thresholds:
- >1500-3000 microstrain → modelado óseo (formación nueva)
- 100-300 microstrain → reduce activación de remodelado (preservar)
- <100 microstrain → aumenta activación BMU, pérdida ósea

### Ejercicio práctico por edad:

| Edad | Tipo | Frecuencia | Duración | Ref |
|---|---|---|---|---|
| Niños | Impacto (jumping, gymnastics, plyometrics) + resistencia <60% 1RM | ≥3 días/sem | 10-20 min | Cap.16 p.252-253 |
| Adultos 30-50 | High-impact jumps/steps + resistencia (12 ejercicios × 3 sets × 15 reps) | Regular | — | Cap.16 p.253 |
| >50 normal | Short duration, high-impact | Regular | — | Cap.16 p.253 |
| >50 osteoporosis | Back extension sentado, balance, strength for mobility | Regular | — | Cap.16 p.253 |

### Practical:
- Jumping: 20-30 reps × 3/día desde 0.3m, <30 min/día total > 2h caminata
- Walking solo beneficia huesos de miembro inferior, NO columna
- Swimming/cycling NO impactan BMD significativamente
- Natación y ciclismo son buenos para salud general pero NO para hueso
```

---

---

# RECOMENDACIÓN 3: `rules/exercise_prescription_basics.ts` + `rules/osteoporosis_safety.ts`

## Especificación completa

```markdown
# EXERCISE PRESCRIPTION BASICS — Especificación

## Fuente: Cap. 2, p. 6-17 + Cap. 16, p. 242-254

---

## A) REGLAS ACSM DE DOSIS AERÓBICA

### Regla: aerobic-minimum-guidelines
- ID: `acsm_aerobic_minimum`
- Población: Adultos sanos <65 años
- Ref: Cap. 2, p. 8

| Opción | Duración | Intensidad | Frecuencia |
|---|---|---|---|
| A | 30 min/día | Moderada | 5 días/semana |
| B | 20 min/día | Vigorosa | 3 días/semana |
| Complemento fuerza | 8-10 ejercicios × 8-12 reps | — | 2×/semana |

### Regla: aerobic-intensity-prescription
- ID: `aerobic_intensity_hrmax`
- Ref: Cap. 2, p. 11

| Parámetro | Valor |
|---|---|
| Rango general | 55/65% – 90% HRmax |
| Promedio | 70-80% HRmax |
| Desacondicionados | 40-50% HRmax inicio |
| Fórmula HRmax | 220 − edad |
| Duración promedio | 20-30 min (excluyendo warm-up/cool-down) |
| Frecuencia óptima | 3-5 sesiones/semana |
| Frecuencia mínima (inicio) | 2 sesiones/semana |

### Regla: aerobic-progression-deconditioned
- ID: `aerobic_progression_deconditioned`
- Ref: Cap. 2, p. 12

| Parámetro | Inicio | Objetivo final |
|---|---|---|
| Intensidad | 40-50% HRmax | 70-80% HRmax |
| Duración | 15 min | 30 min moderado / 20 min vigoroso |
| Frecuencia | 3×/semana | 5×/semana moderado / 3×/semana vigoroso |

### Regla: session-structure
- ID: `exercise_session_structure`
- Ref: Cap. 2, p. 8-9

| Fase | Duración | Contenido |
|---|---|---|
| Warm-up | ~10 min | Low-intensity (deep knee bends, step-ups) + stretches específicos + HR progresivo |
| Endurance | 10-60 min | Aeróbico continuo/intermitente; actividades con grandes grupos musculares |
| Recreational | Variable | Games, skills, challenges (adherencia) |
| Cool-down | ~10 min | Diminishing intensity; HR/BP normalización; lactate removal |

### Regla: warm-up-rules
- ID: `warm_up_rules`
- Ref: Cap. 2, p. 9

- 10 minutos de low-intensity
- Facilitar actividad en grandes articulaciones (hips, knees, shoulders)
- Usar grandes grupos musculares
- Stretches DESPUÉS de actividad (no antes)
- Stretches específicos por paciente (NO genéricos)
- Fase final: HR a target exercise levels

---

## B) REGLAS DE FUERZA/RESISTENCIA

### Regla: strength-endurance-prescription
- ID: `strength_endurance_acsm`
- Ref: Cap. 2, p. 12-14; Cap. 8, p. 118 (Tabla 8.1)

| Objetivo | Carga (RM) | Series | Reps | Descanso | Tempo |
|---|---|---|---|---|---|
| Endurance | 15-20 RM | 1-3 | 15-20 | 30-60s | Lento |
| Fuerza | 3-8 RM | 3-5 | 3-8 | 3-5 min | Controlado |
| Potencia | 1-3 RM | 3-5 | 1-3 | 5-8 min | Explosivo |

### Regla: strength-general-acsm
- ID: `acsm_strength_minimum`
- Ref: Cap. 2, p. 8, 14

- 60-70% 1RM
- Hasta 15 reps
- 2×/semana
- 8-10 ejercicios

### Regla: isometric-basics
- ID: `isometric_prescription`
- Ref: Cap. 2, p. 12-13

- Útil cuando: baja carga, bajo balance/control necesario, ROM limitado, fortalecer en punto específico del arco
- Hold mínimo: 10 segundos
- Puede ser multi-grupo (ej: squat con medicine ball)

### Regla: kinetic-chain-choice
- ID: `okc_vs_ckc_selection`
- Ref: Cap. 2, p. 13-14; Cap. 11, p. 163-164

| Tipo | Ventajas | Desventajas | Cuándo usar |
|---|---|---|---|
| CKC (closed) | Multi-músculo, ↑ propiocepción, menos shear | Más estrés patellofemoral | Seguridad ACL, funcional |
| OKC (open) | Aislamiento, mayor fuerza cuádriceps | Más shear (teórico) | Post-ACL (Tagesson 2008), aislamiento |

### Regla: plyometric-basics
- ID: `plyometric_prescription`
- Ref: Cap. 2, p. 13

- Principio: máxima contracción sigue máximo estiramiento (eccentric → concentric)
- Más adecuado para rehabilitación de atletas (replicar deporte)
- NO para pacientes agudos/desacondicionados
- Ejemplo: high jump → deep squat

---

## C) REGLAS DE FLEXIBILIDAD/ROM

### Regla: stretching-prescription-acsm
- ID: `stretching_acsm_prescription`
- Ref: Cap. 2, p. 15-16

| Parámetro | Valor |
|---|---|
| Tipo | Estático o PNF |
| Frecuencia | Mínimo 2-3 días/semana |
| Intensidad | Hasta molestia leve |
| Duración estático | 10-30 segundos (ideal ≥20-30s) |
| PNF | 6s contracción + 10-30s estiramiento asistido |
| Repeticiones | 3-4 por estiramiento |
| Grupos | Principales grupos musculares/tendinosos |
| Preceder con | ROM activo/pasivo |

### Regla: stretching-types
- ID: `stretching_type_selection`
- Ref: Cap. 2, p. 15-16

| Tipo | Descripción | Seguridad | Uso |
|---|---|---|---|
| Estático | Mover a end-point, hold | Más seguro | General, rehab |
| PNF | Contracción agonista/antagonista antes de stretch; hold-relax | Seguro con terapeuta | Aumentar ROM |
| Balístico | Bouncing con momentum | Menos seguro; puede activar muscle spindle | Atletas (post-estático) |

### Regla: rom-exercise-types
- ID: `rom_exercise_progression`
- Ref: Cap. 2, p. 15

| Tipo | Descripción | Cuándo |
|---|---|---|
| Pasivo | Terapeuta mueve; paciente relajado | Dolor con movimiento activo; evaluación |
| Activo | Paciente mueve a través de ROM completo | Cuando puede mover sin ayuda |
| Activo-asistido | Paciente + ayuda (otra extremidad, stick, poleas) | No alcanza ROM completo activamente |

### Nota sobre evidencia de stretching:
- ⚠️ Evidencia sobre prevención de lesiones por estiramiento es INCONSISTENTE
- Thacker et al. 2004, Fradkin et al. 2006, Small et al. 2008
- No hay consenso claro
- Muchos clínicos y atletas reportan beneficio anecdótico

---

## D) REGLAS DE PROPIOCEPCIÓN/BALANCE

### Regla: proprioception-general-principles
- ID: `proprioception_training_principles`
- Ref: Cap. 2, p. 17; caps regionales

| Progresión | Variables |
|---|---|
| Base de apoyo | Amplia → estrecha → unipodal |
| Superficie | Firme → blanda → inestable (wobble board, foam) |
| Visión | Ojos abiertos → ojos cerrados |
| Tarea | Estática → dinámica → perturbación inesperada |
| Frecuencia | Diaria si es posible |
| Integración | En TODOS los ejercicios, no solo como componente separado |

### Nota:
- Poca literatura sobre dosage específica (frecuencia, intensidad, duración)
- Evidencia emergente de que lesión musculoesquelética compromete propiocepción
- Incluir desde el inicio de rehabilitación

---

## E) REGLAS DE ENTRENAMIENTO (PRINCIPIOS)

### Regla: training-principles
- ID: `training_principles_overload_specificity`
- Ref: Cap. 2, p. 8

| Principio | Descripción |
|---|---|
| Sobrecarga | Para mejorar función, exponer tejido a carga no habitual |
| Especificidad | Efectos son específicos al ejercicio realizado y músculos involucrados |
| Alta rep/baja carga | → Endurance (poca fuerza) |
| Baja rep/alta carga | → Fuerza (poca endurance) |

---

## F) REGLAS DE SEGURIDAD EN OSTEOPOROSIS

### Regla: osteoporosis-exercise-safety
- ID: `osteoporosis_exercise_contraindications`
- Ref: Cap. 16, p. 242, 249, 253-254

#### Contraindicaciones por severidad:

| Condición | Contraindicado | Permitido |
|---|---|---|
| Osteoporosis establecida | Actividad vigorosa, impacto alto, stop-starts súbitos, torsión, flexión abdominal súbita | Fuerza para movilidad, balance, extensión espalda sentado |
| Osteoporosis severa | ⚠️ Targeted bone loading (puede causar fracturas) | Solo ejercicios posturales seguros |
| Frágiles/ancianos | Impacto, torsión | Fuerza para movilidad, balance, prevención caídas |
| Normal/osteopenia leve | Nada específico | Impacto dirigido, resistencia |

#### Regla crítica:
> "In severe osteoporosis certain types of exercise are dangerous and cannot be recommended" (Cap. 16, p. 242)

> "Exercise without attention to diet or without appropriate drug therapy may be ineffective" (Cap. 16, p. 242)

### Regla: osteoporosis-dxa-classification
- ID: `osteoporosis_dxa_classification`
- Ref: Cap. 16, p. 248-249

| Clasificación | T-score |
|---|---|
| Normal | +1 a -1 |
| Osteopenia | -1 a -2.5 |
| Osteoporosis | ≤ -2.5 |
| Osteoporosis severa | ≤ -2.5 + fractura osteoporótica |

#### Regla: fracture risk per SD:
- Riesgo de fractura se DUPLICA por cada 1 SD debajo de la media T-score

### Regla: osteoporosis-nutrition-rda
- ID: `osteoporosis_nutrition_requirements`
- Ref: Cap. 16, p. 250 (Tabla 16.2)

| Grupo etario | Calcio (mg/día) | Vitamina D (IU/día) |
|---|---|---|
| Niñas 9-11 | 1000 | 200 |
| Adolescentes 12-18 | 1300 | 200 |
| Mujeres 19-50 | 1000 | 200 |
| Embarazo | 1000-1300 | 200 |
| Mujeres 51-70 | 1300 | 400 |
| Mujeres >70 | 1300 | 800 |

#### Práctico:
- Normal/osteopenia leve: 500ml leche entera/día
- Osteoporosis establecida: 1L leche/día (o suplemento Ca + VitD)
- Sin nutrición adecuada → ejercicio NO puede crear hueso sano
- "Female athletic triad": eating disorder + amenorrea + osteoporosis (gimnastas, bailarinas, corredoras)

### Regla: osteoporosis-training-principles
- ID: `osteoporosis_bone_training_principles`
- Ref: Cap. 16, p. 251-252

| Principio | Aplicación |
|---|---|
| Especificidad | Impacto en sitio donde se mide BMD |
| Sobrecarga | Estímulo > actividad habitual |
| Reversibilidad | Se pierde si se detiene el programa |
| Valores iniciales | Menor BMD → mayor % mejora posible |
| Retornos decrecientes | Techo biológico individual |
| Disuse | Inmovilización/gravedad cero → pérdida ósea |

### Regla: osteoporosis-exercise-by-age
- ID: `osteoporosis_exercise_by_age_group`
- Ref: Cap. 16, p. 252-253

| Grupo | Ejercicio | Frecuencia | Duración |
|---|---|---|---|
| Niños | Impacto (jumping, gymnastics, plyometrics) + resistencia <60% 1RM; énfasis en FUN | ≥3 días/sem | 10-20 min |
| Adolescentes | Short duration, high-impact, weight-bearing; step aerobics, dance, running | Regular | 30 min/día |
| Adultos 30-50 | High-impact jumping/steps + resistencia (12 ejercicios × 3 sets × 15 reps) | Regular | — |
| >50 normal | Short duration, high-impact | Regular | — |
| >50 osteoporosis | Back extension sentado, balance, strength for mobility, prevent falls | Regular | — |
| >50 severa | ⚠️ Solo postural seguro | Supervisado | — |

### Regla: osteoporosis-ineffective-exercises
- ID: `osteoporosis_ineffective_for_bone`
- Ref: Cap. 16, p. 252

| Actividad | Efecto en BMD |
|---|---|
| Swimming | NO significativo |
| Cycling | NO significativo |
| Walking | Solo huesos de miembro inferior, NO columna |
| Running | Miembro inferior; fuerzas se atenúan hacia axial skeleton |
| Jumping 0.3m × 20-30 × 3/día | MÁS efectivo que 2h walking/cycling |
```

---

---

# RECOMENDACIÓN 4: BodyZoneId Metadata

## Especificación completa de metadatos por zona

```markdown
# BODY ZONE METADATA — Especificación

## Fuente: Caps. 4-12 + 13-16

---

## BodyZoneId: `cervical`

| Campo | Valor |
|---|---|
| Nombre | Columna cervical |
| Capítulos | Cap. 4 (p. 31-52) |
| Lesiones típicas | Spondylosis, WAD, postural syndromes, disc dysfunction, torticollis agudo, nerve root pain, cervicogenic headache/dizziness, brachial plexus injury (stingers) |
| Disfunción principal | Estabilidad/neuromuscular; "give" (movimiento no controlado) |
| Músculos clave locales | Flexores profundos (rectus capitis anterior/lateralis, longus capitis), extensores suboccipitales |
| Músculos clave globales | Longus colli, SCM, escalenos, levator scapulae |
| ROM objetivo | Control del "give" direccional; no forzar ROM |
| Precauciones | Descartar VBI antes de ejercicio; no estirar suboccipitales si neural irritability; evitar high-impact con shear |
| Evaluación clave | Cranio-cervical flexion test (PBU), deep extensor test, joint position sense (láser), standing balance, oculomotor |
| Aerobic | Static bike con mirror, walking; evitar breaststroke, remo, ciclismo con extensión cervical |
| Dosis ejercicios control | 15-20 reps × 2-3/día |
| Dosis holds | 10s × 10 reps → progresar a 15s × 2 reps |
| Dosis stretches | 20-30s × 3-5 reps |
| Dosis resistencia | 10 reps × 2 sets cada dirección |
| Población especial | Ciclistas (lig. nuchae tight), rugby players (stingers) |

---

## BodyZoneId: `thoracic`

| Campo | Valor |
|---|---|
| Nombre | Columna torácica y rib cage |
| Capítulos | Cap. 5 (p. 53-66) |
| Lesiones típicas | Scheuermann's disease, scoliosis, ankylosing spondylitis, osteoporosis (kyphosis), facet joint dysfunction, costovertebral sprain |
| Disfunción principal | HIPOMOVILIDAD (especialmente extensión y rotación axial) |
| Estabilidad | Rib cage añade: 40% flex/ext, 35% lateral bending, 31% rotación axial (Watkins 2005) |
| ROM prioritario | Extensión torácica (frecuentemente limitada); rotación axial |
| Músculos clave | Thoracic extensors, middle/lower trapezius |
| Precauciones | Limitación torácica → demandas excesivas en cervical y lumbar |
| Ejercicios clave | Gym ball para extensión, MET equipment, postural exercises |
| Condiciones crónicas | AS: ejercicio DIARIO de por vida; ROM + extensión + respiración |
| Scoliosis | Ejercicio simétrico NO; enfatizar equilibrio; side flexion hacia convexidad |
| Aerobic | Nordic walking particularmente adecuado (polos facilitan movimiento torácico) |

---

## BodyZoneId: `lumbar`

| Campo | Valor |
|---|---|
| Nombre | Columna lumbar |
| Capítulos | Cap. 6 (p. 67-93) |
| Lesiones típicas | Discopatía (protrusión, hernia), espondilolisis/espondilolistesis, estenosis, facet dysfunction |
| Disfunción principal | Poor motor control, reduced endurance, fear avoidance, deconditioning |
| Músculos clave | Multífido, quadratus lumborum, 3 capas de pared abdominal |
| Concepto central | ENDURANCE > STRENGTH (McGill) |
| Bracing vs hollowing | McGill favorece BRACING (co-activa transverso + oblicuos); hollowing no mejora estabilidad |
| Tests endurance | Side bridge, flexor endurance (wedge), back extensor (prone) |
| Ejercicios clave (McGill Big 3) | Side bridge, trunk curl, bird-dog |
| Aerobic | Walking (inicio 10 min → 30 min); Nordic walking; evitar rowing machines |
| Precauciones | No flexibilidad extrema hasta estabilidad; no sobrecargar movimientos ya hiper-móviles |
| Red flags | Fractura, infección, tumor, cauda equina → derivación médica |
| Psicosocial | Fear avoidance, distress, social interruption → abordar con educación |
| Prevención recurrencia | Programa abreviado mantenible a largo plazo; aerobic + endurance trunk |

---

## BodyZoneId: `shoulder`

| Campo | Valor |
|---|---|
| Nombre | Complejo del hombro |
| Capítulos | Cap. 7 (p. 94-112) |
| Lesiones típicas | Impingement, inestabilidad (multidireccional), capsulitis adhesiva, labral tears (SLAP, Bankart), rotator cuff pathology |
| Disfunción principal | Inestabilidad inherente; poor static stability → demanda de dynamic stabilization |
| Músculos clave | Rotator cuff (4), deltoid, biceps long head, scapulothoracic (serratus anterior, trapezius, rhomboids) |
| Ejercicio clave supraespinoso | Full-can (NO empty-can) |
| Ejercicio clave subescapular | Push-up plus, diagonal D2, IR a 90° |
| Ejercicio clave serrato | Push-up plus, dynamic hug, serratus punch |
| Ejercicio clave lower trap | Prone arm raise in line with fibers, prone horizontal abduction + ER |
| Phases rehab | Aguda → Intermedia → Avanzada → Retorno (criteria-based, no time-based) |
| Pliometría | 2 manos → 1 mano (10-14 días después de iniciar 2 manos) |
| Precauciones | No extender más allá del plano del cuerpo en bench press/row; no full extension en lat pulldown |

---

## BodyZoneId: `elbow`

| Campo | Valor |
|---|---|
| Nombre | Codo y antebrazo |
| Capítulos | Cap. 8 (p. 113-128) |
| Lesiones típicas | Tennis elbow (lateral epicondylalgia), UCL instability, post-fracture/dislocation |
| Disfunción tennis elbow | Neurogénica (sustancia P, CGRP, glutamato); neovascularización; NO inflamatoria |
| ROM normal | Flex 135-145°, Ext 0-5°, Sup 85°, Pron 75° |
| ROM funcional | 30-130° flex/ext, 50° pron/sup |
| UCL | Proporciona 54% resistencia a valgus |
| RM prescription | Endurance: 15-20 RM × 1-3 sets; Fuerza: 3-8 RM × 3-5 sets; Potencia: 1-3 RM × 3-5 sets |
| Precauciones | Ejercicio SIN dolor; progresión codo flexión → extensión |
| Cross-education | Ejercitar antebrazo contralateral máximalmente |

---

## BodyZoneId: `wrist-hand`

| Campo | Valor |
|---|---|
| Nombre | Muñeca y mano |
| Capítulos | Cap. 9 (p. 129-140) |
| Lesiones típicas | Fracturas (Colles', Smith's), tendinopatías, OA 1ª CMC, túnel carpiano, Dupuytren |
| Grip types | Power grip, precision grip, hook grip |
| Rehab phases | Early (passive/mobilisation) → Intermediate (strengthening) → Late (functional) |
| Equipamiento | Therapeutic putty, elastic bands, hand springs, small dumbbells |
| Precauciones | Incluir lumbricals e interossei en strengthening; ROM completo obligatorio |
| Tendinopatías | Flexibilidad primero → excéntrico → concéntrico |
| OA 1ª CMC | Splinting, moist heat (wax baths), gentle exercises |
| Túnel carpiano | Ejercicio NO efectivo en fase sintomática; splint nocturno |

---

## BodyZoneId: `hip`

| Campo | Valor |
|---|---|
| Nombre | Cadera y complejo pélvico |
| Capítulos | Cap. 10 (p. 141-158) |
| Lesiones típicas | OA de cadera, femoro-acetabular impingement (cam/pincer), inestabilidad, labral tears, greater trochanteric pain syndrome |
| Disfunción principal | Debilidad de glúteos (medio y máximo); tightness de TFL/rectus femoris |
| Músculos clave | Gluteus medius (inner range), gluteus maximus, iliopsoas |
| Retraining gluteus medius | Side-lying con ER; ajustar flexión de cadera para evitar TFL |
| Retraining gluteus maximus | Inner range hip extension supine → prone; CKC > OKC |
| Walking programme | Progresivo 6 semanas → 60 min (ver SkillPath 6) |
| PGP | Clasificar force closure (reducido vs excesivo) ANTES de prescribir |
| Precauciones | Gluteus medius NO es el más atrofiado en OA (CT no detecta cambios); pero sí debilitado funcionalmente |

---

## BodyZoneId: `knee`

| Campo | Valor |
|---|---|
| Nombre | Rodilla |
| Capítulos | Cap. 11 (p. 159-186) |
| Lesiones típicas | OA, PFPS, tendinopatía patelar, ACL/PCL/MCL/LCL tears, meniscus injuries |
| Disfunción principal | Debilidad de cuádriceps (factor de riesgo Y hallazgo); VMO inhibition |
| Músculos clave | Cuádriceps (VMO), hamstrings, glúteos |
| OA strength | 2 sets × 12 reps × 3/semana (Baker 2001) |
| Patellar tendinopathy | Excéntrico en tabla 25°, 15 reps × 2/día × 7 días × 12 semanas |
| ACL rehab | 4 fases × 4 semanas (ver SkillPath 4) |
| PFPS | Squats to 40°, VMO retraining, step-downs, hip abduction |
| Proprioception | Repositioning a 40°, 60°, 90° con electrogoniómetro |
| OKC vs CKC | Ambos necesarios; OKC no es peligroso para ACL (Tagesson 2008) |
| Precauciones | Backward pedalling: NO en patellofemoral disorders ni post-ACL |

---

## BodyZoneId: `ankle-foot`

| Campo | Valor |
|---|---|
| Nombre | Tobillo y pie |
| Capítulos | Cap. 12 (p. 187-209) |
| Lesiones típicas | Esguince de inversión (ATFL), tendinopatía de Aquiles, plantar fasciosis, hallux valgus, pes planus |
| Disfunción principal | Deficits propioceptivos post-esguince; debilidad de peroneos; tightness de gastrocnemio/sóleo |
| Músculos clave | Gastrocnemio, sóleo, peroneos, tibialis posterior, intrínsecos del pie |
| Esguince grading | G1: sin laxitud; G2: laxitud + end-point; G3: completa sin end-point |
| Recurrencia | 73% sin rehab adecuada (Yeung 1994) |
| Aquiles protocol | Heel drops 3×15 × 2/día × 7 días × 12 semanas |
| Plantar fasciosis stretch | MTP + ankle dorsiflexion combined (superior a individual) |
| Intrinsic foot exercises | Toe spread, toe spread + dome, towel exercise, pick up objects |
| Precauciones | Wobble boards útiles PERO no son "funcionales" per se; combinar con tareas funcionales |
| Red flags post-inversión | Fractura fibular head, osteochondral talus, peroneal subluxation, syndesmotic instability |

---

## BodyZoneId: `systemic-special-populations`

### Niños (Cap. 13):

| Campo | Valor |
|---|---|
| Actividad mínima | ≥60 min/día moderada a vigorosa (Strong et al. 2005) |
| Posiblemente insuficiente | Tudor-Locke 2004: ~120 min niñas, ~150 min niños |
| Hueso | Impacto + resistencia <60% 1RM, ≥3 días/sem, 10-20 min |
| Lesiones específicas | Osgood-Schlatter (tibial tubercle), Sever's (calcaneal), Scheuermann's, spondylolysis, SUFE, Perthes' |
| Vulnerabilidad | Growth spurt → riesgo de lesión; apophyseal growth plates activas |
| Principio | Soft tissue más fuerte que hueso en inmaduro → avulsiones en vez de sprains |

### Obesidad (Cap. 15):

| Campo | Valor |
|---|---|
| Efectos musculoesqueléticos | ↓ ROM, ↓ balance, ↑ dolor, alteración biomecánica |
| Carga articular | Cada libra perdida → 4× reducción de carga en rodilla (Messier 2005) |
| Adaptaciones de ejercicio | Non-weight-bearing si severo; transiciones asistidas; hydrotherapy |
| Barreras | Fear of falling, vergüenza, low self-efficacy, deconditioning |
| Diabetes | Evitar Valsalva (riesgo vitreous haemorrhage); evitar hipoglucemia |
| Sarcopenic obesity | Riesgo en ancianos con pérdida de peso |

### Cardíaco/Respiratorio (Cap. 14):

| Campo | Valor |
|---|---|
| Respiratorio | Postural correction, ROM torácico/hombro, low resistance high repetition |
| COPD | Cuádriceps 20-30% más débil; proximal > distal en miembro superior |
| Bone health | Riesgo osteoporosis por corticoides, inmovilidad, malnutrición |
| Cardíaco post-cirugía | ROM exercises para prevenir frozen shoulder; stretch cuando esternón estable |
| Heart failure | Quadriceps resistance training 3×/sem × 12 semanas (inicio 35% max) |
| NSAIDs | ⚠️ Pueden exacerbar heart failure (Page & Henry 2000) |
```

---

---

# RECOMENDACIÓN 5: `rules/pelvic_girdle_pain.ts`

## Especificación completa

```markdown
# PELVIC GIRDLE PAIN RULES — Especificación

## Fuente: Cap. 10, p. 144-153

---

## REGLA 1: PGP CLASSIFICATION (Decisión de tratamiento)

- ID: `pgp_force_closure_classification`
- Tipo: clasificación / decisión de tratamiento
- Condición: Pelvic Girdle Pain (mecánico, no inflamatorio)
- Evidencia: O'Sullivan & Beales 2007b,c
- Referencia: Cap. 10, p. 145-146

### Clasificación:

| Subtipo | Disfunción | Respuesta a compresión | Tratamiento indicado |
|---|---|---|---|
| **Force closure REDUCIDO** | Strain en ligamentos laxos + incapacidad de SNC para proporcionar soporte muscular | AYUDA con compresión externa (active straight leg raise test mejora) | Ejercicios de ESTABILIZACIÓN |
| **Force closure EXCESIVO** | Carga sostenida excesiva de músculos sobre articulaciones sacroilíacas | EMPEORA con compresión externa | Relajación/estiramiento muscular; NO estabilización |

### Test de clasificación:
- Active Straight Leg Raise (ASLR):
  - Si mejora con compresión → force closure reducido → estabilización
  - Si empeora con compresión → force closure excesivo → relajación

### ⚠️ REGLA CRÍTICA:
> "It would be a mistake to assume that stabilisation exercises are a necessary requirement in the management of all PGP disorders" (Cap. 10, p. 145)

---

## REGLA 2: PGP REDUCED FORCE CLOSURE - EXERCISE PRESCRIPTION

- ID: `pgp_reduced_force_closure_exercises`
- Condición: PGP con force closure reducido (común post-parto)
- Evidencia: Stuge et al. 2004, Elden et al. 2005, van Wingerden et al. 2004
- Referencia: Cap. 10, p. 145, 152-153

### Músculos target:

| Músculo | Rol | Evidencia |
|---|---|---|
| Transversus abdominis | Co-activación con multífido; estabilidad anterior | Stuge 2004 |
| Pelvic floor | Co-activación con transverso | Stuge 2004 |
| Multífido | Estabilidad posterior segmentaria | Stuge 2004 |
| Gluteus maximus | Force closure posterior; diagonal sling | van Wingerden 2004, Mens 2000 |
| Erector spinae | Aumenta stiffness SIJ | van Wingerden 2004 |
| Biceps femoris | Contribuye a force closure | van Wingerden 2004 |

### Programa:

| Componente | Descripción | Ref |
|---|---|---|
| Transverso + pelvic floor | Supine; low load; co-activación | Cap.10 p.152 |
| Posterior pelvic tilt | Supine; activar abdominales + gluteus maximus | Cap.10 p.152 |
| Standing control | Pelvis bajo tronco; evitar passive sway extension | Cap.10 p.152 |
| Squat | Equal weight-bearing; focus gluteal activation | Cap.10 p.152 |
| Walking pacing | No exceder capacidades; progress gradualmente | Cap.10 p.152 |
| Incline walking | Good gluteal recruitment | Cap.10 p.152 |

### Criterios de progresión:
- ASLR negativo (sin dolor)
- Capacidad de mantener neutra en bipedestación
- Control de walking volume sin flare-up

### Evidencia de eficacia:
- Stuge 2004: Specific stabilising → menor dolor, disability, mejor calidad de vida vs control
- Elden 2005: Stabilising exercises pre-partum reducen PGP más que standard intervention
- ⚠️ Nilsson-Wikmar 2005: No diferencia entre supervised exercise y información solo (posible falta de especificidad)
- ⚠️ Mens 2000: Diagonal sling approach no superior a control; 25% empeoraron con ejercicios (especialmente long lever exercises targeting gluteus maximus)

---

## REGLA 3: PGP EXCESSIVE FORCE CLOSURE - EXERCISE PRESCRIPTION

- ID: `pgp_excessive_force_closure_exercises`
- Condición: PGP con force closure excesivo
- Evidencia: O'Sullivan & Beales 2007b
- Referencia: Cap. 10, p. 145-146, 153

### Tratamiento:

| Componente | Descripción |
|---|---|
| NO estabilización | Los ejercicios de estabilidad AGRAVAN esta condición |
| Relajación muscular | Reducir carga sostenida excesiva |
| Estiramiento | De músculos identificados como overactive |
| Identificar músculos | Individual assessment |

### ⚠️ REGLA CRÍTICA:
> "In this group, PGP is often aggravated by performing stabilising exercises" (Cap. 10, p. 145)

### Diferenciación clínica:

| Feature | Force closure reducido | Force closure excesivo |
|---|---|---|
| Respuesta a ASLR con compresión | Mejora | Empeora |
| Respuesta a stabilising exercises | Mejora | Empeora |
| Común en | Post-parto | Sobrecarga muscular sostenida |
| Approach | Estabilización | Relajación/estiramiento |

---

## REGLA 4: PGP AEROBIC EXERCISE

- ID: `pgp_aerobic_prescription`
- Referencia: Cap. 10, p. 152

### Reglas:
- Considerar capacidad de transferir carga a través de la pelvis
- EVITAR actividades con énfasis en twisting y cambios rápidos de dirección (tennis, squash, netball) hasta que fuerza y dolor mejoren
- Pool/aquatic exercise más apropiado que walking/running si impacto agrava
- Low-impact pool session protocol disponible (Tabla 10.2)

### Pool session protocol (Tabla 10.2):

| Sección | Contenido |
|---|---|
| Warm-up | Walk 1 min forward, 1 min backward, 1 min side step × 2; Stretch hip flexor/quads/buttock/low back/shoulders |
| Main set | 10 squats, 10 lunges, 10 leg swings each side, treading water 1 min, shoulder abd in squat, 10 trunk rotations, horizontal shoulder flex/ext in squat, treading water 1 min |
| Cool-down | Walk 3 min; gentle bicycling/kicking 2 min (focus on relaxation via breathing) |

---

## REGLA 5: PGP STRETCHING

- ID: `pgp_stretching_prescription`
- Referencia: Cap. 10, p. 152-153

### Reglas:
- Stretches incluidos en programas efectivos (Stuge 2004): buttock, hip flexors, quadriceps
- Basado en individual assessment
- Pacientes con force closure EXCESIVO responden mejor a stretching de músculos overactive
- Stretches específicos: ver Cap. 10, p. 152 (Fig 10.13)
- Al estirar hip external rotators: evitar aumentar groin discomfort

---

## REGLA 6: PGP POSTURAL CONTROL

- ID: `pgp_postural_integration`
- Referencia: Cap. 10, p. 152-153

### Regla:
> "The success of any exercise programme hinges on the patient being able to incorporate muscle support into functional situations such as standing and walking"

### Componentes:
- Activación de gluteals + transverse abdominal wall
- Mantener alineación óptima entre pelvis y lumbar spine
- Mirror para feedback
- Practicar en posiciones funcionales (standing, walking, sitting)
- Si se neglecta → resultados decepcionantes

---

## REGLA 7: PGP INFLAMMATORY vs MECHANICAL

- ID: `pgp_inflammatory_vs_mechanical`
- Referencia: Cap. 10, p. 146

### Diferenciación:

| Feature | Mecánico | Inflamatorio |
|---|---|---|
| Ejemplo | PGP post-parto, sobrecarga | Ankylosing spondylitis |
| Treatment | Exercise (según force closure) | Medical + exercise |
| SIJ involvement | Variable | Sacroiliitis bilateral |
| Morning stiffness | <30 min | >30 min, mejora con ejercicio |
| Progresión | Variable | Progresiva, ascending fusion |

### Ankylosing spondylitis (Cap. 5, p. 57; Cap. 10, p. 146):
- Males > Females (3:1)
- Onset: adolescencia a 35 años
- HLA-B27
- Ejercicio: ROM + thoracic extension + chest expansion + postura
- Ejercicio DIARIO de por vida
- Hydrotherapy particularmente beneficiosa

---

## REGLA 8: PGP PREVENTION PRE-PARTUM

- ID: `pgp_prepartum_prevention`
- Referencia: Cap. 10, p. 145

### Evidencia:
- Elden 2005: Stabilising exercises pre-partum reducen PGP
- Haugland 2006: No diferencia a 6/12 meses post-partum
- Elden 2008: No influencia en recovery post-partum
- ⚠️ Evidencia MIXTA; no se puede afirmar que prevenga PGP post-partum con certeza

### Recomendación práctica:
- Ejercicios de estabilización durante embarazo pueden ser beneficiosos
- No garantizan prevención de PGP post-partum
- Supervisión individualizada superior a videotape genérica (Mens 2000)

---

## REGLA 9: PGP PROPRIOCEPTION

- ID: `pgp_proprioception`
- Referencia: Cap. 10, p. 153

### Regla:
- No hay evidencia documentada para propiocepción en PGP
- Sin embargo: re-educar awareness de trunk/pelvis position para mejorar sitting/standing postures
- Mirror para feedback
- Integrar en functional activities

---

## REGLA 10: PGP POOL vs LAND

- ID: `pgp_pool_vs_land_selection`
- Referencia: Cap. 10, p. 152

### Regla de decisión:

| Condición | Modo preferido |
|---|---|
| Impacto agrava dolor | Pool |
| Twisting/direction changes | EVITAR hasta mejora |
| Walking/running painful | Pool |
| Fuerza y dolor mejorados | Progresar a land |
| Post-parto temprano | Pool (low impact) |
```

---

---

# RESUMEN FINAL DE ENTREGABLES

| # | Entregable | Contenido principal | Estado |
|---|---|---|---|
| 1 | `rules/tendinopathy_protocols.ts` | 6 reglas: Aquiles excéntrico, patelar excéntrico, tennis elbow, insercional modificado, principios generales, cross-education | ✅ Completo |
| 2 | SkillPath entries (9 paths) | Cervical, lumbar, shoulder, ACL, ankle, hip OA, knee OA, PFPS, osteoporosis | ✅ Completo |
| 3 | `rules/exercise_prescription_basics.ts` + `rules/osteoporosis_safety.ts` | ACSM aerobic, fuerza, flexibilidad, propiocepción, session structure, training principles + osteoporosis safety, DXA, nutrition, bone loading | ✅ Completo |
| 4 | BodyZoneId metadata | 9 zonas + poblaciones especiales (niños, obesidad, cardíaco/respiratorio) | ✅ Completo |
| 5 | `rules/pelvic_girdle_pain.ts` | 10 reglas: clasificación force closure, ejercicios por subtipo, aerobic, stretching, postural, inflammatory vs mechanical, prevention, proprioception, pool vs land | ✅ Completo |

---

## Notas finales

- **No hay información perdida por falta de imágenes.** Todas las figuras del libro son demostraciones de ejercicios cuya descripción textual es suficiente para reconstruir la técnica.
- **Los parámetros numéricos están todos presentes** en el texto (reps, sets, frecuencia, duración, porcentajes, ángulos).
- **Las referencias de página son exactas** según el contenido proporcionado.
- **⚠️ Única limitación:** Las figuras de progresión de ejercicios (ej: Fig 4.7 circuito de rugby, Fig 6.22-6.34 ejercicios de tronco) muestran posiciones específicas que se describen textualmente pero cuya visualización exacta podría requerir consulta al libro físico. Esto no impide la implementación.
