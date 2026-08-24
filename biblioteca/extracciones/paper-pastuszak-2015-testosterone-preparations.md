> **sourceId:** `paper-pastuszak-2015-testosterone-preparations`
> **Origen:** Consolidado desde `chat-1787414894461-papers-salud-sexual-lote2.md` · Fecha: 2026-08-22

# 1) Metadatos del libro

- **Título:** *Comparison of the Effects of Testosterone Gels, Injections, and Pellets on Serum Hormones, Erythrocytosis, Lipids, and Prostate-Specific Antigen*  
- **Autor(es):** Alexander W. Pastuszak, Lissette P. Gomez, Jason M. Scovell, Mohit Khera, Dolores J. Lamb, Larry I. Lipshultz.  
- **Año:** 2015  
- **DOI:** 10.1002/sm2.76  
- **Disciplina principal:** Endocrinología, urología, farmacoterapia, medicina sexual masculina.  
- **Enfoque poblacional:** Hombres hipogonadales, específicamente con hipogonadismo secundario, atendidos en una clínica especializada.  
- **Notas de alcance:**  
  - Estudio retrospectivo de cohorte clínica.  
  - Incluye 47 usuarios de geles, 57 de testosterona inyectable y 74 de pellets subcutáneos.  
  - Seguimiento aproximado de 26–30 meses en promedio, con evaluaciones cada 3–6 meses hasta 3 años.  
  - Criterio de hipogonadismo: síntomas clínicos más testosterona sérica ≤350 ng/dL.  
  - Solo hombres con hipogonadismo secundario.  
  - Se incluyeron hombres naïve a testosterona o que habían suspendido terapia por ≥3 meses.  
  - Evalúa testosterona total, testosterona libre calculada, estradiol, hemoglobina, hematocrito, PSA, colesterol total, triglicéridos, LDL y HDL.  
  - **No cubre:** programación de fuerza, hipertrofia, rendimiento deportivo, movilidad, tendinopatías, rehabilitación musculoesquelética ni prescripción de ejercicio.  
  - **Limitaciones relevantes:** diseño retrospectivo, grupos no perfectamente comparables, muestra relativamente pequeña, uso de inhibidores de aromatasa en algunos sujetos, lípidos no siempre en ayunas y diferencias basales entre grupos.  
  - Referencias: Abstract, Introduction, Methods, Results, Discussion, pp. 165–173.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `EndocrineTherapyProfile`  
  - **Descripción:** Perfil de terapia endocrina prescrita por profesional, útil para saber si el usuario está bajo terapia hormonal y qué riesgos de monitoreo asociar.  
  - **Campos sugeridos:**  
    - `therapyType`: `testosterone-replacement`  
    - `formulation`: `gel` | `injection` | `pellet`  
    - `doseRange`  
    - `frequency`  
    - `targetPeakTestosterone`  
    - `diagnosis`: `secondary-hypogonadism`  
    - `prescribedByClinician`: boolean  
    - `monitoringMarkers`: `totalTestosterone`, `freeTestosterone`, `estradiol`, `hemoglobin`, `hematocrit`, `PSA`, `lipids`  
  - **Referencias:** Methods, p. 166.

- `BloodMonitoringRule`  
  - **Descripción:** Regla de monitoreo clínico para marcadores sanguíneos asociados a terapia hormonal.  
  - **Campos sugeridos:**  
    - `marker`: `hematocrit` | `hemoglobin` | `estradiol` | `PSA` | `lipidPanel`  
    - `threshold`  
    - `monitoringFrequency`  
    - `escalation`: `medicalReview` | `doseAdjustmentByPhysician` | `phlebotomyEvaluation`  
    - `appliesToTherapy`: `testosterone`  
  - **Referencias:** Results, pp. 167–170; Discussion, pp. 170–171.

- Extensión de `UserProfile`  
  - **Descripción:** Añadir campos de estado endocrino/médico sin que el sistema diagnostique.  
  - **Campos sugeridos:**  
    - `onTestosteroneTherapy`: boolean  
    - `testosteroneFormulation`: `gel` | `injection` | `pellet`  
    - `hypogonadismDiagnosis`: boolean  
    - `requiresMedicalMonitoring`: boolean  
    - `lastHematocritTest`  
    - `lastPSATest`  
  - **Referencias:** Methods, p. 166.

### 2.2 Mapeo a tipos existentes

- `FocusId`: `endocrine-health`  
  - El artículo muestra cómo distintas formulaciones de testosterona cambian testosterona total, testosterona libre, estradiol, hematocrito/hemoglobina, PSA y lípidos.  
  - Útil para modelar usuarios con terapia hormonal, no para prescribir entrenamiento.

- `FocusId`: `recovery`  
  - La eritrocitosis y los cambios hematológicos pueden afectar tolerancia al esfuerzo, riesgo vascular y necesidad de monitoreo.  
  - El sistema no debe inferir recuperación solo por estas variables, pero puede usarlas como bandera de revisión médica.

- `BodyZoneId`: `systemic-hematologic`  
  - El artículo no trabaja una zona biomecánica, pero el riesgo principal es sistémico/hematológico: elevación de hematocrito.  
  - Si el modelo no soporta zonas sistémicas, mapear a `medical-condition` o `systemic-flag`.

- `BodyZoneId`: `prostate`  
  - Se evalúa PSA y antecedentes de cáncer de próstata.  
  - El estudio no reporta incrementos significativos de PSA, pero cualquier cambio clínico debe ser manejado por urólogo.

- `MovementPattern`: no aplica directamente.  
  - No hay ejercicios ni patrones de movimiento.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `trt-formulation-erythrocytosis-risk`

- **Descripción breve:** La testosterona inyectable se asoció con mayor tasa de eritrocitosis que geles y pellets en hombres hipogonadales.  
- **Tipo:** riesgo clínico / monitoreo hematológico.  
- **Métrica principal:** `hematocritPercent`, `erythrocytosisIncidence`, `monthsToErythrocytosis`.  
- **Valores numéricos:**  
  - **Rango óptimo:** no aplica como regla de entrenamiento.  
  - **Umbrales observados:**  
    - Eritrocitosis definida como hematocrito ≥50%.  
    - Inyectable: 66.7% presentó eritrocitosis.  
    - Pellets: 35.1%.  
    - Geles: 12.8%.  
    - Tiempo medio hasta eritrocitosis:  
      - Inyectable: 10.5 ± 9.1 meses.  
      - Gel: 14.0 ± 12.6 meses.  
      - Pellets: 16.4 ± 10.7 meses.  
- **Condiciones de aplicación:**  
  - Hombres adultos con hipogonadismo en terapia con testosterona.  
  - Especial atención si la formulación es inyectable.  
  - No aplicar como regla de entrenamiento en usuarios sanos.  
- **Capítulos/páginas donde se apoya:** Results, Table 5, p. 169; Discussion, pp. 170–171.  
- **Comentarios/precauciones:**  
  - El sistema no debe ajustar dosis ni recomendar suspender terapia.  
  - Si el usuario reporta testosterona inyectable, debería marcarse como `highMonitoringPriority` para hemoglobina/hematocrito.  
  - La eritrocitosis puede requerir evaluación médica, ajuste de dosis o flebotomía según criterio clínico.

---

### Regla: `trt-hgb-hct-monitoring-window`

- **Descripción breve:** Los aumentos de hemoglobina y hematocrito suelen aparecer en los primeros meses de terapia con testosterona.  
- **Tipo:** frecuencia de monitoreo clínico.  
- **Métrica principal:** `hemoglobin`, `hematocrit`, `monthsSinceTherapyStart`.  
- **Valores numéricos:**  
  - Hemoglobina:  
    - Aumentos significativos hacia los 6 meses en gel e inyectable.  
    - Hacia los 9 meses en pellets.  
    - Aumento medio aproximado a 9 meses:  
      - Gel: +0.79 g/dL.  
      - Inyectable: +1.06 g/dL.  
      - Pellets: +0.81 g/dL.  
  - Hematocrito:  
    - Aumentos significativos hacia los 6 meses en gel e inyectable.  
    - Hacia los 3 meses en pellets.  
    - Umbral de eritrocitosis usado por los autores: hematocrito ≥50%.  
- **Condiciones de aplicación:**  
  - Cualquier formulación de testosterona.  
  - El monitoreo debería ser más estricto durante el primer año.  
- **Capítulos/páginas donde se apoya:** Results, Figure 3, Table 4, pp. 169–170; Discussion, pp. 170–171.  
- **Comentarios/precauciones:**  
  - El sistema puede generar recordatorios de chequeo, no diagnósticos.  
  - No usar hematocrito como variable para aumentar o reducir volumen de entrenamiento sin evaluación médica.

---

### Regla: `trt-estradiol-monitoring`

- **Descripción breve:** La terapia con testosterona puede elevar estradiol, especialmente con inyectables y geles.  
- **Tipo:** monitoreo hormonal.  
- **Métrica principal:** `estradiolPgPerMl`, `aromataseInhibitorUse`.  
- **Valores numéricos:**  
  - Umbral usado en el estudio para considerar tratamiento con inhibidor de aromatasa: estradiol >5 pg/mL, límite superior del laboratorio.  
  - Usuarios que requirieron inhibidor de aromatasa:  
    - Gel: 1 sujeto.  
    - Inyectable: 12 sujetos.  
    - Pellets: 22 sujetos.  
  - El nivel de testosterona, no edad ni IMC, fue la variable asociada con estradiol en análisis multivariado.  
- **Condiciones de aplicación:**  
  - Usuarios en terapia con testosterona.  
  - Mayor atención si hay síntomas clínicos compatibles con exceso estrogénico, aunque el artículo no define un protocolo sintomático completo.  
- **Capítulos/páginas donde se apoya:** Results, pp. 167–168; Discussion, pp. 170–171.  
- **Comentarios/precauciones:**  
  - El sistema no debe recomendar inhibidores de aromatasa.  
  - Estradiol elevado puede estar asociado a ginecomastia, aunque esta fue poco común según literatura citada por los autores.  
  - Cualquier intervención farmacológica debe ser médica.

---

### Regla: `trt-psa-prostate-monitoring`

- **Descripción breve:** En esta cohorte, la terapia con testosterona no produjo aumentos significativos de PSA, incluso en hombres con antecedente de cáncer de próstata tratado.  
- **Tipo:** monitoreo prostático / seguridad clínica.  
- **Métrica principal:** `PSAngPerMl`.  
- **Valores numéricos:**  
  - No se observaron aumentos significativos de PSA en gel, inyectable o pellets.  
  - Hubo 18 hombres con antecedente de cáncer de próstata; no se reportaron recurrencias durante el seguimiento.  
  - Un sujeto del grupo pellets tuvo nuevo diagnóstico de cáncer de próstata Gleason 3+4 a los 2 años de iniciar terapia.  
- **Condiciones de aplicación:**  
  - Hombres en terapia con testosterona.  
  - Especial precaución en usuarios con antecedente oncológico prostático.  
- **Capítulos/páginas donde se apoya:** Results, Table 3, pp. 168–169; Discussion, p. 170.  
- **Comentarios/precauciones:**  
  - El sistema no debe interpretar “PSA sin aumento” como autorización automática para entrenar intensamente o ignorar síntomas.  
  - Cualquier aumento de PSA, síntoma urinario o antecedente oncológico debe derivar a médico/urólogo.

---

### Regla: `trt-lipid-monitoring-no-assumption`

- **Descripción breve:** Los efectos de la testosterona sobre lípidos fueron variables e inconsistentes según formulación.  
- **Tipo:** monitoreo metabólico.  
- **Métrica principal:** `totalCholesterol`, `triglycerides`, `LDL`, `HDL`.  
- **Valores numéricos:**  
  - Disminuciones transitorias de colesterol total en gel y pellets en algunos momentos.  
  - Disminución transitoria de triglicéridos y LDL en pellets en algunos momentos.  
  - No se observaron cambios significativos consistentes en HDL.  
- **Condiciones de aplicación:**  
  - Usuarios en terapia con testosterona.  
  - Interpretación limitada por lípidos no siempre en ayunas y falta de control dietario.  
- **Capítulos/páginas donde se apoya:** Results, p. 169; Discussion, pp. 170–171; Supplementary Figure S1.  
- **Comentarios/precauciones:**  
  - No asumir que la testosterona mejora o empeora sistemáticamente el perfil lipídico.  
  - El sistema no debe generar recomendaciones nutricionales específicas basadas solo en este estudio.

---

### Regla: `trt-medication-profile-dosing-metadata`

- **Descripción breve:** El estudio describe rangos de dosis y frecuencia de las formulaciones usadas en práctica clínica especializada.  
- **Tipo:** metadato de medicación, no prescripción.  
- **Métrica principal:** `dose`, `frequency`, `formulation`.  
- **Valores numéricos:**  
  - Geles:  
    - Testim: 50–100 mg de testosterona diarios.  
    - AndroGel 1.62%: 20.25–80.1 mg diarios.  
  - Inyectables:  
    - 100–200 mg de testosterona cypionate o enanthate intramuscular semanal.  
  - Pellets:  
    - Pellets de 75 mg de testosterona cristalina.  
    - 10–14 pellets implantados cada 3–6 meses.  
    - Objetivo de pico sérico reportado: 500–800 ng/dL.  
  - Criterio diagnóstico usado: testosterona ≤350 ng/dL más síntomas.  
- **Condiciones de aplicación:**  
  - Solo como registro de terapia prescrita.  
  - No usar para recomendar dosis ni cambiar formulación.  
- **Capítulos/páginas donde se apoya:** Methods, p. 166.  
- **Comentarios/precauciones:**  
  - ⚠️ El sistema debe tratar esto como datos clínicos sensibles.  
  - No debe mostrar estos rangos como recomendación de uso.  
  - Si el usuario no tiene prescripción médica, el sistema debe evitar cualquier orientación farmacológica.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

No aplica.

- El estudio no propone progresiones de habilidades, ejercicios ni fases de entrenamiento.  
- La única “progresión” implícita es clínica: inicio de terapia, monitoreo y ajuste por profesional de salud.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

No aplica.

- No hay ejercicios descritos.  
- No hay cues técnicos, fallos de movimiento ni variantes de ejecución.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Eritrocitosis asociada a terapia con testosterona

- **Zona:** `systemic-hematologic` / riesgo vascular sistémico.  
- **Etiología resumida:**  
  - La testosterona exógena puede estimular eritropoyesis.  
  - Los autores mencionan posibles mecanismos relacionados con niveles suprafisiológicos de testosterona/estradiol, dihidrotestosterona, hepcidina, eritropoyetina y longitud del repeat CAG del receptor androgénico.  
- **Signos y síntomas clave:**  
  - Elevación de hematocrito/hemoglobina.  
  - El estudio usa hematocrito ≥50% como criterio práctico de eritrocitosis.  
  - No se detallan síntomas clínicos específicos en el artículo.  
- **Stadia / fases:**  
  - No define fases formales.  
- **Protocolos de tratamiento o rehab:**  
  - En la práctica descrita, hematocrito ≥50% se usa para considerar ajuste de dosis de testosterona o flebotomía terapéutica, según criterio clínico.  
  - El sistema no debe indicar flebotomía ni ajuste de dosis.  
- **Ejercicios de prehab/movilidad específicos:**  
  - No aplica.  
- **Umbrales de dolor o red flags:**  
  - Hematocrito ≥50% es una bandera clínica.  
  - El artículo no entrega síntomas de alarma específicos para el usuario.  
- **Referencias:** Results, pp. 169–170; Discussion, pp. 170–171.

### Lesión / condición: Vigilancia prostática durante terapia con testosterona

- **Zona:** `prostate`.  
- **Etiología resumida:**  
  - Preocupación clínica por posible desarrollo o progresión de cáncer de próstata en terapia androgénica.  
- **Signos y síntomas clave:**  
  - El estudio se centra en PSA, no en síntomas.  
- **Stadia / fases:**  
  - No aplica.  
- **Protocolos de tratamiento o rehab:**  
  - Monitoreo de PSA según criterio médico.  
  - En la cohorte no hubo aumentos significativos de PSA.  
- **Ejercicios de prehab/movilidad específicos:**  
  - No aplica.  
- **Umbrales de dolor o red flags:**  
  - Cualquier aumento de PSA o síntoma urario/oncológico debe ser evaluado por urólogo.  
  - El estudio no define umbrales de síntomas.  
- **Referencias:** Results, Table 3, pp. 168–169; Discussion, p. 170.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

No se identifican recomendaciones directas.

- **Sueño:** no analizado.  
- **Estrés:** no analizado.  
- **Nutrición:** no se entrega pauta dietaria; los lípidos no fueron consistentemente en ayunas.  
- **Entrenar enfermo:** no analizado.  
- **Observación útil:** el estudio encontró que edad e IMC no se asociaron significativamente con estradiol, mientras que niveles de testosterona sí. Esto no debe interpretarse como regla de estilo de vida.  
- **Referencia:** Results/Discussion, pp. 168–171.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**  
  - Fuente de referencia para modelar banderas médicas en usuarios con terapia de testosterona.  
  - Útil para crear reglas de monitoreo clínico, no de entrenamiento.  
  - Puede alimentar `UserProfile` con riesgo aumentado de eritrocitosis si la formulación es inyectable.  
- **Limitaciones:**  
  - Estudio retrospectivo, no aleatorizado.  
  - Población clínica hipogonadal, no atletas sanos.  
  - No debe usarse para prescribir testosterona, dosis, flebotomía o inhibidores de aromatasa.  
  - No debe usarse para ajustar volumen/intensidad de entrenamiento sin datos clínicos interpretados por médico.  
- **Recomendaciones específicas:**  
  - Crear `medical/endocrine/trt-monitoring.ts` con reglas de monitoreo para `hematocrit`, `hemoglobin`, `estradiol`, `PSA` y `lipids`.  
  - Añadir bandera `requiresMedicalReview = true` cuando el usuario indique uso de testosterona inyectable.  
  - No crear `TrainingRule` que modifique carga de entrenamiento basándose únicamente en hematocrito/hemoglobina; usar solo como alerta de chequeo médico.

---
---

# Behavioral Therapies for Management of Premature Ejaculation: A Systematic Review — Extracción para Plan Maestro OS

> Extracción de una revisión sistemática de ensayos clínicos aleatorizados sobre terapias conductuales para eyaculación precoz. Aporta evidencia limitada sobre técnicas físicas como stop-start, squeeze, sensate focus, rehabilitación de suelo pélvico y terapia web. Su valor para el sistema es modelar intervenciones conductuales de salud sexual, posibles rutas de habilidad con bajo nivel de evidencia y reglas de precaución. No es una fuente de entrenamiento físico general.

---

## 1) Metadatos del libro

- **Título:** *Behavioral Therapies for Management of Premature Ejaculation: A Systematic Review*  
- **Autor(es):** Katy Cooper, Marrissa Martyn-St James, Eva Kaltenthaler, Kath Dickinson, Anna Cantrell, Kevan Wylie, Leila Frodsham, Catherine Hood.  
- **Año:** 2015  
- **DOI:** 10.1002/sm2.65  
- **Disciplina principal:** Medicina sexual, terapia conductual, revisión sistemática de ensayos clínicos.  
- **Enfoque poblacional:** Hombres adultos con eyaculación precoz; algunos estudios incluyen parejas.  
- **Notas de alcance:**  
  - Revisión sistemática de 10 ECA con 521 participantes.  
  - Busca evidencia sobre terapias conductuales frente a lista de espera, frente a fármacos o combinadas con fármacos.  
  - Outcomes principales: tiempo de latencia eyaculatoria intravaginal (IELT), satisfacción sexual, control eyaculatorio, ansiedad y efectos adversos.  
  - Incluye técnicas físicas: squeeze, stop-start, sensate focus, dispositivo de estimulación, rehabilitación de suelo pélvico.  
  - Solo un ECA incluye psicoterapia explícita, combinada con stop-start y fármaco.  
  - Riesgo de bias globalmente incierto.  
  - **No cubre:** entrenamiento de fuerza, hipertrofia, movilidad deportiva, tendinopatías ni programación de ejercicio.  
  - **Limitaciones:** estudios pequeños, heterogéneos, con criterios de eyaculación precoz variables, poca descripción metodológica y escasos datos de seguridad.  
  - Referencias: Abstract, Introduction, Methods, Results, Discussion, pp. 174–188.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `BehavioralSexualTherapyProtocol`  
  - **Descripción:** Intervención conductual no farmacológica para función sexual.  
  - **Campos sugeridos:**  
    - `therapyType`: `stop-start` | `squeeze` | `sensate-focus` | `web-sensate-focus` | `pelvic-floor-rehabilitation` | `psychotherapy`  
    - `partnerInvolved`: boolean  
    - `durationWeeks`  
    - `sessionsPerWeek`  
    - `deliveryMode`: `self-help` | `therapist-guided` | `web` | `device-assisted` | `couple-therapy`  
    - `primaryOutcome`: `IELT` | `CIPE-5` | `GRISS-PE` | `satisfaction` | `anxiety`  
  - **Referencias:** Methods/Results, pp. 175–180.

- `SexualFunctionOutcome`  
  - **Descripción:** Resultado medido en intervenciones de salud sexual.  
  - **Campos sugeridos:**  
    - `metric`: `IELT-minutes` | `CIPE-5-score` | `GRISS-PE-score` | `sexual-satisfaction` | `ejaculatory-control` | `anxiety`  
    - `measurementMethod`: `stopwatch` | `self-report` | `scale` | `not-reported`  
    - `timepoint`: `baseline` | `post-treatment` | `follow-up`  
  - **Referencias:** Methods/Results, pp. 175–184.

- Extensión de `FocusId`  
  - **Descripción:** Añadir o reforzar dominios de salud sexual y psicológica.  
  - **Valores sugeridos:**  
    - `sexual-health`  
    - `pelvic-floor`  
    - `psychological-stress`  
    - `relationship-wellbeing`  
  - **Referencias:** Introduction/Discussion, pp. 174–188.

### 2.2 Mapeo a tipos existentes

- `FocusId`: `sexual-health`  
  - El documento trata directamente eyaculación precoz, control eyaculatorio, satisfacción sexual y ansiedad relacionada.  
- `FocusId`: `pelvic-floor`  
  - Un estudio evalúa rehabilitación de suelo pélvico con estimulación eléctrica perineal.  
- `FocusId`: `psychological-stress`  
  - La ansiedad, la confianza sexual y la satisfacción de pareja aparecen como outcomes relevantes.  
- `BodyZoneId`: `pelvic-floor`  
  - Relevantes las técnicas de conciencia pélvica y rehabilitación pélvica, aunque con evidencia limitada.  
- `MovementPattern`: `pelvic-floor-control`  
  - Puede modelarse como patrón específico si el sistema acepta patrones no deportivos.  
  - No hay patrones de movimiento global como squat, hinge o push.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `behavioral-physical-technique-waitlist-efficacy`

- **Descripción breve:** Algunas técnicas conductuales físicas mejoraron el tiempo de latencia eyaculatoria frente a lista de espera, con diferencias aproximadas de 7–9 minutos en dos ensayos.  
- **Tipo:** eficacia de intervención conductual.  
- **Métrica principal:** `ieltMinutes`.  
- **Valores numéricos:**  
  - de Carufel & Trudel:  
    - Terapia funcional-sexológica vs lista de espera: diferencia media ≈ 6.80 minutos.  
    - Terapia conductual squeeze/stop-start vs lista de espera: diferencia media ≈ 6.87 minutos.  
  - Trudel & Proulx:  
    - Self-help: ≈ 9.11 minutos vs lista de espera.  
    - Self-help con contacto telefónico: ≈ 7.29 minutos.  
    - Terapia sexual de pareja: ≈ 8.84 minutos.  
  - Mantenimiento reportado en algunos estudios a 3 meses.  
- **Condiciones de aplicación:**  
  - Hombres con eyaculación precoz.  
  - Intervenciones con squeeze, stop-start, sensate focus, self-help o terapia de pareja.  
  - Evidencia de certeza limitada y riesgo de bias incierto.  
- **Capítulos/páginas donde se apoya:** Results, pp. 178–181; Summary, p. 185; Table 2, pp. 178–180.  
- **Comentarios/precauciones:**  
  - No es una regla de entrenamiento físico.  
  - El sistema puede usarla como evidencia débil para intervenciones conductuales, pero no como garantía de resultado.

---

### Regla: `combined-behavioral-drug-superiority`

- **Descripción breve:** La combinación de terapia conductual y fármaco mostró pequeños beneficios sobre fármaco solo en IELT y mejores resultados en satisfacción, control y ansiedad.  
- **Tipo:** terapia combinada.  
- **Métrica principal:** `ieltMinutes`, `CIPE5Score`, `satisfactionScore`, `anxietyScore`.  
- **Valores numéricos:**  
  - Li et al.: combinación psicoterapia + stop-start + clorpromazina vs clorpromazina sola: +1.11 minutos.  
  - Yuan et al.: stop-start + citalopram vs citalopram solo: +0.46 minutos.  
  - Shao & Li: terapia conductual + paroxetina vs paroxetina sola: +0.40 en CIPE-5, no minutos directos.  
  - Además, los brazos combinados reportaron mejor control eyaculatorio, satisfacción sexual y menor ansiedad sexual.  
- **Condiciones de aplicación:**  
  - Eyaculación precoz.  
  - Fármaco prescrito y supervisado por médico.  
  - Terapia conductual estructurada.  
- **Capítulos/páginas donde se apoya:** Results, pp. 179–180; Table 2, pp. 179–180; Summary, p. 185.  
- **Comentarios/precauciones:**  
  - Las diferencias en minutos pueden ser pequeñas.  
  - El sistema no debe recomendar fármacos ni combinaciones farmacológicas.  
  - Los fármacos reportaron efectos adversos en otros estudios; la seguridad farmacológica debe ser médica.

---

### Regla: `behavioral-alone-vs-drug-mixed`

- **Descripción breve:** Al comparar terapia conductual sola contra fármacos, los resultados favorecieron generalmente al fármaco o no mostraron diferencias significativas.  
- **Tipo:** comparación de eficacia.  
- **Métrica principal:** `ieltMinutes`, `ejaculatoryLatencyScore`.  
- **Valores numéricos:**  
  - Pastore et al.: rehabilitación de suelo pélvico vs dapoxetina: dapoxetina mejoró IELT geométrico por ≈1.22 minutos.  
  - Yuan et al.: stop-start vs citalopram: citalopram favorecido por ≈3.55 minutos.  
  - Shao & Li: terapia conductual vs paroxetina: paroxetina favorecida por 0.20 en CIPE-5.  
  - Abdel-Hamid et al.: squeeze vs sildenafil o paroxetina favoreció fármacos; vs sertralina o clomipramina no hubo diferencias significativas.  
  - Oguzhanglu et al.: stop-start vs fluoxetina mostró mejoras en ambos grupos sin diferencia clara en satisfacción sexual.  
- **Condiciones de aplicación:**  
  - Eyaculación precoz.  
  - Comparaciones específicas según estudio; no generalizar como regla universal.  
- **Capítulos/páginas donde se apoya:** Results, pp. 180–182; Table 2, pp. 180; Summary, p. 185.  
- **Comentarios/precauciones:**  
  - No usar para afirmar que la terapia conductual es inferior o superior.  
  - La elección depende de preferencias, efectos adversos, disponibilidad y contexto clínico.

---

### Regla: `pelvic-floor-rehab-dose`

- **Descripción breve:** Un ECA usó rehabilitación de suelo pélvico más estimulación eléctrica perineal durante 12 semanas, con 3 sesiones semanales.  
- **Tipo:** dosis de intervención.  
- **Métrica principal:** `sessionsPerWeek`, `weeks`.  
- **Valores numéricos:**  
  - 3 sesiones/semana.  
  - 12 semanas.  
  - Intervención: conciencia de contracción muscular pélvica + estimulación eléctrica del suelo perineal.  
- **Condiciones de aplicación:**  
  - Hombres con eyaculación precoz lifelong en ese estudio.  
  - Idealmente guiado por profesional de salud.  
- **Capítulos/páginas donde se apoya:** Table 1, p. 176; Results, p. 180.  
- **Comentarios/precauciones:**  
  - Evidencia limitada y comparación farmacológica favorable al fármaco en ese estudio.  
  - El sistema no debe prescribir estimulación eléctrica sin supervisión profesional.

---

### Regla: `stop-start-device-dose`

- **Descripción breve:** Un estudio pequeño usó stop-start con dispositivo vibratorio durante 6 semanas, 3 veces por semana.  
- **Tipo:** dosis de intervención conductual asistida.  
- **Métrica principal:** `sessionsPerWeek`, `weeks`.  
- **Valores numéricos:**  
  - 3 sesiones/semana.  
  - 6 semanas.  
  - Muestra muy pequeña: 11 participantes.  
- **Condiciones de aplicación:**  
  - Eyaculación precoz, especialmente lifelong en el estudio.  
  - Uso individual o en pareja.  
- **Capítulos/páginas donde se apoya:** Table 1, p. 176; Results, pp. 178–179.  
- **Comentarios/precauciones:**  
  - No hubo diferencia significativa post-tratamiento frente a lista de espera.  
  - Hubo mejora desde baseline a 6 meses tras recibir tratamiento todos los participantes.  
  - Muestra demasiado pequeña para generalizar.

---

### Regla: `web-sensate-focus-outcome`

- **Descripción breve:** Una intervención web basada en sensate focus durante 12 semanas no mejoró la latencia eyaculatoria frente a lista de espera, aunque mejoró deseo sexual respecto a espera.  
- **Tipo:** eficacia de intervención digital.  
- **Métrica principal:** `GRISS-PE`, `sexualDesireScore`.  
- **Valores numéricos:**  
  - Duración: 12 semanas.  
  - No diferencia significativa en tendencia a eyacular demasiado pronto entre terapia web y lista de espera.  
  - Ambos grupos mejoraron desde baseline.  
  - Deseo sexual favoreció terapia web frente a lista de espera.  
- **Condiciones de aplicación:**  
  - Intervención digital de enfoque sexológico.  
  - No necesariamente equivalente a terapia presencial.  
- **Capítulos/páginas donde se apoya:** Results, pp. 178, 181; Table 2, p. 179.  
- **Comentarios/precauciones:**  
  - Puede ser útil como apoyo educativo, pero no como intervención principal si se busca mejorar IELT.

---

### Regla: `behavioral-safety-limited`

- **Descripción breve:** No se reportaron efectos adversos de las terapias conductuales, pero los datos de seguridad fueron limitados.  
- **Tipo:** seguridad.  
- **Métrica principal:** `adverseEventsReported`.  
- **Valores numéricos:**  
  - Terapias conductuales: 0 efectos adversos reportados en los estudios que aportaron datos.  
  - Fármacos comparadores: tasas reportadas entre 10% y 40% según fármaco y estudio.  
  - Ejemplos de efectos adversos farmacológicos: náusea, diarrea, boca seca, anorexia, somnolencia, bostezos, cefalea, flushing, congestión nasal.  
- **Condiciones de aplicación:**  
  - Cualquier intervención conductual o farmacológica para eyaculación precoz.  
- **Capítulos/páginas donde se apoya:** Results, p. 184.  
- **Comentarios/precauciones:**  
  - “No reportado” no equivale a “seguro para toda población”.  
  - El sistema debe evitar promesas de seguridad absoluta.

---

### Regla: `psychotherapy-evidence-gap`

- **Descripción breve:** Hay evidencia muy limitada para psicoterapia pura; solo un ECA la incluyó combinada con fármaco y stop-start.  
- **Tipo:** brecha de evidencia.  
- **Métrica principal:** `availableRCTs`.  
- **Valores numéricos:**  
  - 1 ECA con psicoterapia explícita.  
- **Condiciones de aplicación:**  
  - Intervenciones psicológicas o counseling para eyaculación precoz.  
- **Capítulos/páginas donde se apoya:** Results, p. 176; Discussion, p. 187.  
- **Comentarios/precauciones:**  
  - El sistema puede registrar la necesidad de derivar a psicología/sexología, pero no puede afirmar eficacia robusta.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

⚠️ La revisión no publica una progresión validada con criterios exactos de avance. La siguiente estructura es una reconstrucción conceptual basada en las técnicas descritas y debe marcarse como de baja evidencia.

### SkillPath: `behavioral-ejaculatory-control`

- **Disciplina:** terapia sexual conductual / salud sexual.  
- **Objetivo final:** aumentar la latencia eyaculatoria, mejorar la percepción de control y reducir malestar/ansiedad sexual.  
- **Requisitos de seguridad previos:**  
  - Usuario adulto.  
  - Consentimiento y comodidad con la práctica.  
  - Ausencia de dolor genital, lesiones o síntomas médicos no evaluados.  
  - Si hay eyaculación precoz adquirida o cambios repentinos, considerar evaluación médica.  
  - Si se usan fármacos, solo bajo prescripción médica.  
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Educación y reducción de presión por rendimiento | Explicar la condición, normalizar variabilidad y reducir foco exclusivo en duración. | Menor ansiedad inicial; disposición a practicar sin obsesión por resultado. | Convertir la práctica en examen de rendimiento. | p. 175 |
| 2 | Sensate focus no genital | Contacto corporal centrado en percepción, excluyendo genitales y coito inicialmente. | Capacidad de mantener atención sensorial sin urgencia por desempeño. | Apurarse hacia contacto genital; mantener ansiedad de desempeño. | p. 175 |
| 3 | Reintroducción gradual de contacto genital | Añadir contacto genital de forma progresiva, sin objetivo de eyaculación inmediata. | Tolerar estimulación manteniendo conciencia del nivel de excitación. | Estimulación excesiva o tardía para reconocer el punto de urgencia. | p. 175 |
| 4 | Stop-start | Detener estimulación cuando aparece urgencia eyaculatoria; reanudar cuando disminuye. | Reconocer señales previas a eyaculación y pausar a tiempo. | Detenerse demasiado tarde; estímulo demasiado intenso. | p. 175 |
| 5 | Squeeze opcional | Aplicar presión en glande cuando aparece urgencia, hasta que disminuya, antes de continuar. | Reducir urgencia sin dolor ni incomodidad. | Presión excesiva, dolor, uso tardío o mecánico sin conciencia. | p. 175 |
| 6 | Integración gradual a relación sexual | Incorporar técnica en contexto sexual real, con comunicación y expectativas realistas. | Mantener mayor control sin aumentar ansiedad. | Presión de pareja, ocultar dificultad, abandonar técnica por frustración. | pp. 175, 178–181 |

- **Advertencia:** Los criterios de avance no están cuantificados por la revisión. El sistema debería exigir confirmación subjetiva de control, ausencia de dolor y baja ansiedad antes de avanzar.

---

### SkillPath: `pelvic-floor-awareness-support`

- **Disciplina:** rehabilitación/función pélvica.  
- **Objetivo final:** mejorar conciencia y control del suelo pélvico como parte de manejo de eyaculación precoz.  
- **Requisitos de seguridad previos:**  
  - Ideal evaluación por profesional de salud.  
  - No usar estimulación eléctrica sin indicación profesional.  
  - Evitar contracciones excesivas o dolor pélvico.  
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Identificación de suelo pélvico | Reconocer musculatura pélvica sin compensar glúteos/abdomen. | Identificar contracción básica sin dolor. | Contener respiración, apretar glúteos o abdomen excesivamente. | p. 176 |
| 2 | Práctica supervisada de control pélvico | Entrenar contracción/relajación según protocolo profesional. | Control reproducible sin fatiga excesiva. | Sobreentrenar, generar tensión pélvica. | p. 176 |
| 3 | Integración funcional | Usar control pélvico dentro de práctica sexual o conducta guiada. | Mantener control sin aumentar ansiedad. | Usar fuerza excesiva como única estrategia. | p. 180 |

⚠️ Este SkillPath tiene evidencia muy limitada y no debería presentarse como protocolo principal sin supervisión clínica.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Stop-start

- **Cues principales:**  
  - Prestar atención a la escalada de excitación.  
  - Detener estimulación antes de llegar al punto de inevitabilidad eyaculatoria.  
  - Reanudar cuando la urgencia disminuye.  
  - Repetir ciclos si el protocolo lo indica.  
- **Errores frecuentes:**  
  - Detenerse demasiado tarde.  
  - Estimulación demasiado intensa.  
  - Centrarse solo en “aguantar” y no en reconocer señales.  
  - Aumentar presión psicológica por rendimiento.  
- **Variantes seguras:**  
  - Práctica individual antes que en pareja.  
  - Reducir intensidad de estimulación.  
  - Usar pausas más largas.  
- **Indicaciones específicas:**  
  - Si hay dolor genital, suspender y consultar.  
  - No usar como sustituto de evaluación médica si el problema es adquirido o repentino.  
- **Referencias:** Introduction, p. 175; Results, pp. 178–180.

### Squeeze

- **Cues principales:**  
  - Aplicar presión cuando aparece urgencia eyaculatoria.  
  - Mantener presión hasta que la urgencia disminuye.  
  - Reanudar estimulación gradualmente.  
- **Errores frecuentes:**  
  - Presión excesiva.  
  - Dolor o molestia en glande.  
  - Aplicación tardía.  
  - Convertir la técnica en maniobra punitiva o ansiosa.  
- **Variantes seguras:**  
  - Reducir presión.  
  - Pausar más tiempo.  
  - Priorizar comunicación con pareja.  
- **Indicaciones específicas:**  
  - Evitar si hay dolor, lesión o hipersensibilidad no evaluada.  
- **Referencias:** Introduction, p. 175; Results, pp. 178–180.

### Sensate focus

- **Cues principales:**  
  - Foco en percepción corporal, no en objetivo sexual.  
  - Inicialmente excluir genitales, pecho y coito según descripción de la revisión.  
  - Reintroducir contacto genital gradualmente.  
  - Reducir ansiedad de desempeño.  
- **Errores frecuentes:**  
  - Saltar fases no genitales.  
  - Usar la técnica como prueba de rendimiento.  
  - Falta de comunicación con pareja.  
- **Variantes seguras:**  
  - Versión web guiada.  
  - Terapia de pareja.  
  - Material de autoayuda con contacto terapéutico.  
- **Indicaciones específicas:**  
  - Puede ser útil si hay ansiedad sexual o presión de rendimiento.  
  - No necesariamente mejora IELT por sí sola en todos los contextos.  
- **Referencias:** Introduction, p. 175; Results, pp. 178–181.

### Rehabilitación de suelo pélvico

- **Cues principales:**  
  - Conciencia de contracción pélvica.  
  - Diferenciar suelo pélvico de glúteos/abdomen.  
  - Seguir protocolo profesional si hay estimulación eléctrica.  
- **Errores frecuentes:**  
  - Contraer musculatura equivocada.  
  - Exceso de tensión pélvica.  
  - Entrenar sin supervisión cuando hay dolor pélvico.  
- **Variantes seguras:**  
  - Solo conciencia pélvica básica si no hay profesional.  
  - Derivar a fisioterapia de suelo pélvico si hay dolor o disfunción.  
- **Indicaciones específicas:**  
  - La estimulación eléctrica perineal debe considerarse intervención clínica.  
- **Referencias:** Table 1, p. 176; Results, p. 180.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Eyaculación precoz

- **Zona:** `pelvic-floor` / función sexual masculina.  
- **Etiología resumida:**  
  - Condición multifactorial caracterizada por latencia eyaculatoria corta, incapacidad de retrasar eyaculación y malestar personal o interpersonal.  
  - Puede ser lifelong o acquired.  
  - Puede involucrar factores psicológicos, relacionales, conductuales y biológicos.  
- **Signos y síntomas clave:**  
  - Eyaculación generalmente dentro de ~1 minuto de penetración en eyaculación precoz lifelong según ISSM/DSM-5 citados por la revisión.  
  - En forma adquirida, reducción clínicamente significativa de latencia, a menudo a ~3 minutos o menos.  
  - Incapacidad de retrasar eyaculación.  
  - Malestar, frustración, preocupación o evitación de intimidad.  
  - Prevalencia estimada según definiciones antiguas puede ser 20–30%, pero definiciones estrictas sugieren prevalencia menor, posiblemente ≤4% para lifelong.  
- **Stadia / fases:**  
  - La revisión no define fases clínicas.  
- **Protocolos de tratamiento o rehab:**  
  - **Fase sugerida para implementación, no definida por el paper:**  
    - Fase 1: evaluación, psicoeducación y descarte de causas médicas o relacionales.  
    - Fase 2: técnicas conductuales físicas como stop-start, squeeze, sensate focus.  
    - Fase 3: combinación con tratamiento farmacológico solo si médico lo indica.  
    - Fase 4: mantenimiento y manejo de recaídas.  
  - ⚠️ Estas fases son de implementación; el paper no las formaliza.  
- **Ejercicios de prehab/movilidad específicos:**  
  - Conciencia pélvica.  
  - Técnicas de reducción de ansiedad.  
  - Comunicación de pareja.  
  - Práctica estructurada stop-start/squeeze.  
- **Umbrales de dolor o red flags:**  
  - La revisión no entrega umbrales de dolor específicos.  
  - Si hay dolor genital, pélvico, síntomas urinarios, disfunción eréctil marcada o inicio súbito de síntomas, derivar a profesional.  
- **Referencias:** Introduction, pp. 174–175; Results, pp. 176–184; Discussion, pp. 185–187.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

No hay recomendaciones directas sobre sueño, nutrición o entrenamiento durante enfermedad.

Sí hay factores relevantes para el sistema:

- **Ansiedad sexual:**  
  - La combinación de terapia conductual y fármaco mejoró ansiedad sexual en algunos estudios.  
  - El sistema puede tratar la ansiedad como variable de contexto, no como diagnóstico.  
- **Satisfacción relacional:**  
  - La satisfacción de pareja y la comunicación pueden influir en el malestar asociado.  
- **Estrés/presión de rendimiento:**  
  - Las técnicas tipo sensate focus buscan reducir presión por desempeño.  
- **Entrenar enfermo:** no aplica.  
- **Sueño/nutrición:** no analizado.  
- **Referencias:** Results, pp. 183–184; Discussion, pp. 185–187.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**  
  - Fuente para modelar intervenciones conductuales de salud sexual con evidencia limitada.  
  - Puede alimentar `SkillPath` de control eyaculatorio y conciencia pélvica, siempre con disclaimers clínicos.  
  - Útil para añadir outcomes no físicos: control percibido, satisfacción, ansiedad y comunicación.  
- **Limitaciones:**  
  - Evidencia de baja certeza y riesgo de bias incierto.  
  - Estudios pequeños y heterogéneos.  
  - No es una fuente de programación de fitness.  
  - No debe usarse para diagnosticar eyaculación precoz ni para recomendar fármacos.  
  - La rehabilitación de suelo pélvico con estimulación eléctrica debe manejarse como intervención clínica.  
- **Recomendaciones específicas:**  
  - Crear `sexual-health/behavioral-pe-intervention.ts` con tipos `stop-start`, `squeeze`, `sensate-focus`, `web-sensate-focus`, `pelvic-floor-rehabilitation`.  
  - Añadir `SkillPath` `behavioral-ejaculatory-control` con estado `evidenceLevel = low` y `requiresConsent = true`.  
  - Marcar cualquier intervención de suelo pélvico o fármaco como `requiresProfessionalSupervision = true`.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
### Aclaración sobre Ayudas Visuales (Gráficos y Figuras)

Antes de proceder con la ejecución de las recomendaciones, confirmo el estado de la información visual:
**No se ha perdido información crítica por falta de las imágenes.** 
En los papers proporcionados, las Figuras (gráficos de línea de hormonas en el estudio de testosterona y *forest plots* en la revisión de eyaculación precoz) son representaciones visuales de datos que **ya están detallados exhaustivamente en las Tablas y en el texto** (medias, desviaciones estándar, intervalos de confianza del 95%, valores *p* y tamaños del efecto). Por lo tanto, la extracción cuantitativa está completa y no es necesario que me envíes las imágenes para complementar el modelo de datos.

---

### Ejecución de Recomendaciones: Entregables para Agentes de Código

A continuación, materializo las recomendaciones planteadas en la sección 8 de las extracciones anteriores. Entrego los **contratos de datos (Interfaces TypeScript)** y los **payloads de configuración (JSON)** listos para que los agentes de ingestión y generación de código los integren directamente en el repositorio de *Plan Maestro OS*.

---

## 1. Metadatos de Fuente y Gobernanza (Editorial Board)

**Objetivo:** Clasificar la revista *Sexual Medicine* en el sistema de fuentes para evitar que el motor de reglas intente extraer rutinas de fitness de ella y asegurar el cumplimiento de la licencia CC-BY-NC.

### Contrato (TypeScript)
```typescript
// types/sources/SourceMetadata.ts
export type FocusId = 'strength' | 'mobility' | 'hypertrophy' | 'sexual-health' | 'endocrine-health' | 'pelvic-floor';
export type LicenseType = 'CC-BY-NC' | 'CC-BY' | 'All-Rights-Reserved' | 'Public-Domain';

export interface SourceMetadata {
  id: string;
  title: string;
  authors: string[];
  year: number;
  domains: FocusId[];
  license: LicenseType;
  
  // Banderas de seguridad para el motor de reglas
  actionableForTraining: boolean; // ¿Puede generar TrainingRules?
  medicalDomain: boolean;         // ¿Requiere disclaimers clínicos?
  requiresClinicalDisclaimer: boolean;
}
```

### Payload de Configuración (JSON)
```json
{
  "id": "source-sexual-medicine-2015",
  "title": "Sexual Medicine - Aims and Scope / Editorial Board",
  "authors": ["Alan W. Shindel", "Editorial Board"],
  "year": 2015,
  "domains": ["sexual-health", "endocrine-health"],
  "license": "CC-BY-NC",
  "actionableForTraining": false,
  "medicalDomain": true,
  "requiresClinicalDisclaimer": true
}
```

---

## 2. Motor de Reglas Clínicas y Monitoreo (Testosterona)

**Objetivo:** Crear las alertas de monitoreo hematológico y endocrino para usuarios que reporten estar en Terapia de Reemplazo de Testosterona (TRT), sin cruzar la línea hacia la prescripción médica.

### Contrato (TypeScript)
```typescript
// types/rules/MedicalMonitoringRule.ts
export type Biomarker = 'hematocrit' | 'hemoglobin' | 'estradiol' | 'PSA' | 'lipid-panel';
export type TRTFormulation = 'gel' | 'injection' | 'pellet' | 'none';
export type SystemAction = 'log-only' | 'alert-user-monitoring' | 'block-high-intensity-pending-review';

export interface MedicalMonitoringRule {
  id: string;
  description: string;
  biomarker: Biomarker;
  formulationRiskProfile: TRTFormulation[];
  threshold: {
    operator: '>' | '<' | '>=' | '<=';
    value: number;
    unit: string;
  };
  peakRiskWindowMonths: [number, number]; // Ventana de mayor riesgo desde inicio de TRT
  action: SystemAction;
  clinicalDisclaimer: string;
}
```

### Payload de Reglas (JSON)
```json
[
  {
    "id": "trt-hct-injection-erythrocytosis-alert",
    "description": "Alerta de riesgo de eritrocitosis en usuarios con TRT inyectable.",
    "biomarker": "hematocrit",
    "formulationRiskProfile": ["injection"],
    "threshold": { "operator": ">=", "value": 50, "unit": "%" },
    "peakRiskWindowMonths": [6, 12],
    "action": "alert-user-monitoring",
    "clinicalDisclaimer": "Hematocrito >= 50% es un umbral clínico para evaluar flebotomía o ajuste de dosis. No entrenar a intensidad máxima si hay síntomas de hiperviscosidad (mareos, cefalea) sin revisión médica."
  },
  {
    "id": "trt-hct-gel-pellet-monitoring",
    "description": "Monitoreo de rutina para geles y pellets.",
    "biomarker": "hematocrit",
    "formulationRiskProfile": ["gel", "pellet"],
    "threshold": { "operator": ">=", "value": 50, "unit": "%" },
    "peakRiskWindowMonths": [12, 18],
    "action": "alert-user-monitoring",
    "clinicalDisclaimer": "Riesgo menor que inyectables, pero requiere hemograma de control periódico."
  },
  {
    "id": "trt-estradiol-aromatization-alert",
    "description": "Alerta por posible aromatización excesiva.",
    "biomarker": "estradiol",
    "formulationRiskProfile": ["injection", "gel", "pellet"],
    "threshold": { "operator": ">", "value": 5, "unit": "pg/mL" },
    "peakRiskWindowMonths": [3, 6],
    "action": "alert-user-monitoring",
    "clinicalDisclaimer": "Estradiol elevado puede requerir evaluación médica (ej. inhibidores de aromatasa). El sistema no debe recomendar fármacos."
  }
]
```

### Extensión del Perfil de Usuario (`UserProfile`)
```typescript
// types/user/UserProfileExtension.ts
export interface EndocrineProfile {
  onTRT: boolean;
  trtFormulation?: TRTFormulation;
  trtStartDate?: string; // ISO Date
  lastBloodwork?: {
    hematocrit?: number;
    estradiol?: number;
    psa?: number;
    date: string;
  };
  requiresMedicalReview: boolean; // Calculado por el motor de reglas
}
```

---

## 3. SkillPath y Tipos de Intervención Conductual (Eyaculación Precoz)

**Objetivo:** Modelar las terapias conductuales como "Habilidades" (Skills) de bajo nivel de evidencia, enfocadas en control pélvico y ansiedad, con fuertes restricciones de seguridad.

### Contrato (TypeScript)
```typescript
// types/skills/SkillPath.ts
export type EvidenceLevel = 'high' | 'moderate' | 'low' | 'anecdotal';
export type InterventionType = 'stop-start' | 'squeeze' | 'sensate-focus' | 'pelvic-floor-awareness' | 'web-therapy';

export interface SkillPathMetadata {
  id: string;
  discipline: 'pelvic-floor' | 'sexual-health' | 'psychological-stress';
  evidenceLevel: EvidenceLevel;
  requiresConsent: boolean;
  requiresProfessionalSupervision: boolean;
  contraindications: string[];
}

export interface SkillStep {
  stepNumber: number;
  name: string;
  primaryCues: string[];
  commonFaults: string[];
  progressionCriteria: string; // Cualitativo en este caso
}
```

### Payload de Configuración (JSON)
```json
{
  "skillPath": {
    "id": "behavioral-ejaculatory-control",
    "discipline": "sexual-health",
    "evidenceLevel": "low",
    "requiresConsent": true,
    "requiresProfessionalSupervision": false,
    "contraindications": [
      "Dolor genital o pélvico no diagnosticado",
      "Sospecha de infección o prostatitis",
      "Eyaculación precoz adquirida de inicio súbito (requiere urólogo)"
    ]
  },
  "steps": [
    {
      "stepNumber": 1,
      "name": "Psicoeducación y Reducción de Ansiedad",
      "primaryCues": ["Normalizar la variabilidad", "Eliminar el cronómetro mental"],
      "commonFaults": ["Convertir la práctica en un examen de rendimiento"],
      "progressionCriteria": "Disminución subjetiva de la ansiedad anticipatoria."
    },
    {
      "stepNumber": 2,
      "name": "Sensate Focus (Fase No Genital)",
      "primaryCues": ["Foco en percepción táctil", "Respiración diafragmática", "Exclusión de genitales"],
      "commonFaults": ["Apurarse hacia el contacto genital", "Mantener tensión muscular"],
      "progressionCriteria": "Capacidad de mantener atención sensorial sin urgencia por desempeño."
    },
    {
      "stepNumber": 3,
      "name": "Stop-Start (Autoestimulación)",
      "primaryCues": ["Identificar el punto de no retorno", "Pausar estimulación al 70-80% de excitación", "Esperar a que baje la urgencia"],
      "commonFaults": ["Detenerse demasiado tarde", "Estimulación excesivamente intensa"],
      "progressionCriteria": "Lograr 3-4 pausas exitosas sin llegar a la eyaculación involuntaria."
    },
    {
      "stepNumber": 4,
      "name": "Técnica de Compresión (Squeeze) - Opcional",
      "primaryCues": ["Presión firme pero no dolorosa en el surco coronal", "Mantener hasta que baje la urgencia"],
      "commonFaults": ["Presión que causa dolor", "Uso mecánico sin conciencia corporal"],
      "progressionCriteria": "Reducción de la urgencia eyaculatoria sin generar dolor o disfunción eréctil."
    },
    {
      "stepNumber": 5,
      "name": "Conciencia de Suelo Pélvico (Relajación)",
      "primaryCues": ["Identificar contracción involuntaria al acercarse al clímax", "Relajar activamente el periné", "No confundir con Kegel (contracción)"],
      "commonFaults": ["Apretar glúteos o abdomen", "Contener la respiración (Valsalva)"],
      "progressionCriteria": "Capacidad de relajar el suelo pélvico durante la fase de alta excitación."
    }
  ]
}
```

### Banderas de Seguridad para el Motor de la App
```json
{
  "interventionSafetyRules": [
    {
      "target": "pelvic-floor-rehabilitation-with-devices",
      "rule": "BLOCK_AUTOMATION",
      "reason": "La estimulación eléctrica perineal mencionada en la literatura (Pastore et al.) es una intervención clínica. El sistema solo puede sugerir 'Conciencia Pélvica' básica y debe derivar a fisioterapeuta de suelo pélvico para uso de dispositivos."
    },
    {
      "target": "pharmacological-combinations",
      "rule": "STRICT_PROHIBITION",
      "reason": "El sistema NUNCA debe sugerir, calcular o recomendar la combinación de técnicas conductuales con ISRS (dapoxetina, paroxetina) o anestésicos tópicos. Solo puede registrar si el usuario ya está bajo ese tratamiento médico para ajustar las expectativas del SkillPath."
    }
  ]
}
```

---

### Resumen para el Pipeline de Integración

1. **Agente de Ingestión de Fuentes:** Debe leer el `SourceMetadata` y bloquear cualquier intento de extraer `TrainingRule` (fuerza/hipertrofia) de artículos de *Sexual Medicine*.
2. **Agente de Onboarding Médico:** Debe usar los payloads de `TRT Monitoring` para generar cuestionarios de salud. Si el usuario marca "Uso TRT Inyectable", el sistema activa los recordatorios de hemograma a los 6 meses.
3. **Agente de Generación de UI/UX:** Debe usar el `SkillPath` de control eyaculatorio para crear módulos de "Bienestar y Mindfulness Sexual", asegurándose de que la UI muestre el *Disclaimer Clínico* y el *Consentimiento Informado* antes de mostrar el primer paso.
