# mitchell-yoga-biomechanics — Extracción recuperada de chat

> **sourceId:** `mitchell-yoga-biomechanics` · **origen:** `chat-export-1787415026087` (Extracción de Reglas para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Yoga Biomechanics: Stretching Redefined — Extracción para Plan Maestro OS

> Extracción orientada a reglas, progresiones y metadatos para un sistema de fitness. Se parafrasea el contenido; no se copian párrafos del libro.  
> **Nota de páginas:** la fuente entregada no siempre muestra paginación continua. Cuando hay una página visible en la extracción, se cita; cuando no, se cita capítulo y sección. Las reglas se redactan para ser implementables, pero varias requieren adaptación contextual y/o supervisión clínica.

---

## 1) Metadatos del libro

- **Título:** *Yoga Biomechanics: Stretching Redefined*
- **Autor(es):** Jules Mitchell
- **Año:** 2019
- **Disciplina principal:** biomecánica aplicada al yoga/asana; mecánica de tejidos, carga tensil, movilidad, adaptación de tendón/ligamento/músculo.
- **Enfoque poblacional:** profesores y practicantes de yoga, educadores de movimiento, población general/recreativa. No está escrito como manual clínico de rehabilitación avanzada ni para atletas de élite.
- **Notas de alcance:**
  - **Cubre:** fuerza/carga como concepto central de biomecánica; tipos de estiramiento; ROM como fenómeno mecánico y sensorial; estrés/deformación; rigidez/compliancia; viscoelasticidad; histología básica de tejidos conectivos; adaptación tisular; lesión como intolerancia a carga; dolor y estructura; flexión espinal, postura, alineación, core; progresiones prácticas para isquiotibiales proximal, cadera anterior y hombro.
  - **No cubre explícitamente:** filosofía yóguica completa, respiración/meditación como intervención principal, programación completa de fuerza, nutrición, sueño, protocolos clínicos de diagnóstico/tratamiento, fascia como sistema aislado con protocolos validados. El libro insiste en que el profesor de yoga no diagnostica ni trata patología.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `TensileLoadPrescription`
  - **Descripción:** modela cualquier “estiramiento” como una carga tensil, no como simple flexibilidad.
  - **Campos sugeridos:** `modality` (`passive-static`, `active-static`, `dynamic`, `ballistic`, `PNF/isometric`, `resistance/eccentric`), `targetTissue` (`muscle`, `tendon`, `ligament`, `jointCapsule`, `myofascial`), `magnitude`, `duration`, `frequency`, `rate`, `direction`, `contractionType`, `painLimit`, `endRangeControl`.
  - **Referencias:** Cap. 2, “Conventional Stretching”; Cap. 5, “Tensile Loading”.

- `LoadParameterSet`
  - **Descripción:** parámetros de carga mecánica para prescripción y reglas.
  - **Campos sugeridos:** `magnitude`, `location`, `direction`, `duration`, `frequency`, `velocity`, `acceleration`.
  - **Referencias:** Cap. 1, “Load Parameters”.

- `TissueCapacityState`
  - **Descripción:** capacidad de un tejido/zona para tolerar carga, integrando estructura, función y dolor.
  - **Campos sugeridos:** `zoneId`, `structureStatus`, `functionStatus`, `painStatus`, `loadToleranceScore`, `lastAggravatingLoad`, `referralRequired`.
  - **Referencias:** Cap. 5, “Capacity”.

- `ViscoelasticEffect`
  - **Descripción:** efectos temporales dependientes del tiempo y la temperatura.
  - **Campos sugeridos:** `creep`, `stressRelaxation`, `hysteresis`, `strainRateSensitivity`, `cycleEffect`, `temperatureEffect`, `temporary` (true).
  - **Referencias:** Cap. 3, “Viscoelastic Phenomena”.

- `CollagenStrainZone`
  - **Descripción:** zonas conceptuales de deformación de colágeno para salvaguardas.
  - **Campos sugeridos:** `toeRegion` (1–2%), `elasticRegion` (3–4%), `yieldPoint` (~4%), `plasticRegion` (4–6%), `ultimateFailure` (~8–10%), `normalMovement` (2–5%).
  - **Referencias:** Cap. 3, “Stress and Strain”.

- `RepairPhase`
  - **Descripción:** fases de reparación tisular para guiar cargas.
  - **Campos sugeridos:** `phaseI-inflammatory` (3–7 días), `phaseII-repair/proliferation` (~4–6 semanas), `phaseIII-remodeling/maturation` (~1–3 años), `loadGuidance`.
  - **Referencias:** Cap. 5, “Biochemistry of Repair”.

- `InsertionalCompressionRisk`
  - **Descripción:** riesgo de compresión insertional del tendón en rangos profundos.
  - **Campos sugeridos:** `tendon`, `compressionSite`, `jointPosition`, `avoidIfSymptomatic`, `progressionStrategy`.
  - **Referencias:** Cap. 5, “Compressive Forces”.

- `HypermobilitySpectrumFlag`
  - **Descripción:** bandera para usuarios con hiperlaxitud; cambia reglas de fin de rango.
  - **Campos sugeridos:** `hypermobilityLikely`, `endRangeControlNeeded`, `coContractionPossible`, `referralForSystemicSymptoms`.
  - **Referencias:** Cap. 5, “Hypermobility”; Apéndice.

- `CoContractionCue`
  - **Descripción:** instrucciones de tensión muscular activa para aumentar capacidad sin perseguir estética.
  - **Campos sugeridos:** `cueText`, `opposingActions`, `targetJoint`, `bailIfCannotMaintain`.
  - **Referencias:** Cap. 6, “Cueing and Kinematics”; Apéndice.

- `EvidenceQualityTag`
  - **Descripción:** etiqueta para separar evidencia fuerte, débil, anecdótica, extrapolada o in vitro.
  - **Campos sugeridos:** `level`, `sourceType`, `extrapolationWarning`, `clinicalSupervisionRequired`.
  - **Referencias:** Cap. 1, “Scientific Literacy”; Cap. 4, “Efficacy vs Effectiveness”.

- `ProgressionGate`
  - **Descripción:** criterios para avanzar/regresar en habilidades y rehab.
  - **Campos sugeridos:** `canHoldDuration`, `painFreeOrAcceptable`, `maintainsSkill`, `noCompensation`, `timeInPhase`.
  - **Referencias:** Apéndice; Cap. 5.

### 2.2 Mapeo a tipos existentes

- `FocusId: mobility`
  - El libro trata movilidad no solo como “tejido corto”, sino como interacción de: tolerancia sensorial, resistencia pasiva al torque, arquitectura muscular, control activo, carga en rangos largos y especificidad. Aconseja no asumir que ROM ganado implica alargamiento permanente.

- `FocusId: tendon-health`
  - Tendencia central: el tendón se adapta a carga tensil alta y progresiva; la compresión insertional puede ser relevante en ciertas posturas; “overstretching” se reformula muchas veces como “underloading” o mala preparación de carga.

- `FocusId: hypertrophy / strength`
  - Contracciones excéntricas e isométricas en rangos largos pueden influir en arquitectura muscular y fuerza en rangos amplios. El estiramiento pasivo por sí solo produce cambios estructurales triviales o inciertos.

- `FocusId: pain-management`
  - Dolor y daño estructural correlacionan pobremente. Capacidad = estructura + función + dolor. El sistema debe evitar reglas basadas solo en imaging o diagnóstico estructural.

- `BodyZoneId: hamstring/proximal-hamstring`
  - Zona central del libro. Riesgo de tendinopatía insertional en flexión profunda de cadera; progresiones con puente isométrico, slides excéntricos/concéntricos, lunges y forward bends activos.

- `BodyZoneId: hip/anterior-hip`
  - Dolor/pinchazo anterior no siempre se resuelve estirando; suele requerir carga de flexores de cadera, trabajo de rotación interna y exposición progresiva a rangos largos.

- `BodyZoneId: shoulder`
  - Carga del complejo hombro-escápula mediante co-contracción, planchas, push-ups, trabajo overhead controlado e inversiones asistidas. El rango debe limitarse por la capacidad de mantener tensión muscular, no por la forma estética.

- `BodyZoneId: lumbar/spine`
  - Desmitifica la columna como “columna frágil”. Admite flexión espinal progresiva; advierte sobre flexión prolongada estática y creep temporal; core stability requiere baja activación para tareas ligeras.

- `BodyZoneId: knee`
  - Tree Pose: no hay regla binaria “evitar rodilla”. Fuerzas laterales existen y pueden ser tolerables/adaptativas, pero el contexto individual manda. Estudios de momentos de fuerza muestran diferencias según apoyo.

- `BodyZoneId: ankle/Achilles`
  - Ejemplo de strain rate, stiffness/compliance y compresión insertional del Aquiles en dorsiflexión.

- `MovementPattern: hinge / forward-fold`
  - No prohibir flexión; dosificar. En isquiotibiales sintomáticos, reducir flexión profunda temporalmente y cargar tensión activa.

- `MovementPattern: squat / stoop`
  - Ni squat lifting ni stoop lifting son universalmente superiores. La capacidad y la magnitud de carga importan más que una técnica única.

- `MovementPattern: horizontal-push / plank / push-up`
  - Push-up como progresión de capacidad de hombro/tren superior; construir volumen antes de variantes avanzadas.

- `MovementPattern: overhead-flexion`
  - Permitir estrategias individuales; no imponer rotación externa/depresión escapular como dogma si el usuario puede mantener control y síntomas seguros.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

> Cuando una regla proviene de literatura citada por el libro, se indica capítulo y página visible cuando existe. Si la extrapolación a yoga no fue validada directamente, se marca con ⚠️.

### Regla: `load-progressive-overload`

- **Descripción breve:** la carga debe aumentar progresivamente respecto a la carga habitual del individuo para estimular adaptación.
- **Tipo:** progresión.
- **Métrica principal:** carga semanal relativa, volumen, RPE, o magnitud de contracción.
- **Valores numéricos:**
  - **Rango óptimo:** aumento gradual; sin porcentaje exacto universal en el libro.
  - **Umbrales de riesgo:** aumentos bruscos/spikes se asocian con mayor riesgo de lesión.
- **Condiciones de aplicación:** todos los tejidos adaptables; especialmente relevante si el objetivo es capacidad, fuerza, tendón o hueso.
- **Capítulos/páginas:** Cap. 1, “Progressive Overload”; Cap. 1, “Load Exposure”.
- **Comentarios/precauciones:** no aplicar progresión rápida en tejidos patológicos sin criterio clínico; el libro enfatiza individualizar.

---

### Regla: `load-variability`

- **Descripción breve:** incluir variación de dirección, ritmo y tipo de carga para reducir estrés repetitivo y preparar tejidos para demandas impredecibles.
- **Tipo:** progresión / prevención.
- **Métrica principal:** número de variantes de carga por semana; direcciones/rates distintos.
- **Valores numéricos:**
  - **Rango óptimo:** cualitativo: “variable y novedoso” sin número exacto.
  - **Umbrales:** exceso de repetición idéntica puede contribuir a intolerancia de carga.
- **Condiciones:** útil en etapas medias/avanzadas; en fase aguda o post-lesión temprana, cargas lentas y sistemáticas.
- **Capítulos/páginas:** Cap. 1, “Variable Loading”.
- **Comentarios:** no confundir variabilidad con aleatoriedad caótica; debe ser progresiva.

---

### Regla: `said-specificity`

- **Descripción breve:** el cuerpo se adapta a demandas impuestas específicas; mejorar en yoga no necesariamente transfiere a rendimiento deportivo específico.
- **Tipo:** progresión / rendimiento.
- **Métrica principal:** coincidencia entre tarea entrenada y tarea objetivo.
- **Valores numéricos:** no aplica.
- **Condiciones:** programación para rendimiento, movilidad funcional o habilidades.
- **Capítulos/páginas:** Cap. 1, “Adaptation”; Cap. 2, “Why We Stretch”; Cap. 2, “Yoga and College Athletes”, p. 70.
- **Comentarios:** evitar conclusiones infladas tipo “yoga mejora cualquier deporte”.

---

### Regla: `rpe-load-monitoring`

- **Descripción breve:** usar RPE (esfuerzo percibido) para integrar carga mecánica y estrés psicosocial.
- **Tipo:** carga / estilo de vida.
- **Métrica principal:** RPE = duración de sesión (minutos) × puntuación de esfuerzo 1–10.
- **Valores numéricos:**
  - **Rango óptimo:** no se da número fijo; comparar perfiles similares y evitar picos.
  - **Umbrales:** cambios bruscos en RPE total pueden indicar riesgo.
- **Condiciones:** comparar solo entre cargas de perfil similar.
- **Capítulos/páginas:** Cap. 1, “Progressive Overload”.
- **Comentarios:** el libro advierte que RPE no captura perfectamente diferencias de riesgo entre cargas distintas.

---

### Regla: `underloading-risk`

- **Descripción breve:** evitar carga no equivale a proteger; la subcarga crónica reduce capacidad y puede aumentar intolerancia posterior.
- **Tipo:** progresión / prevención.
- **Métrica principal:** exposición semanal a carga específica.
- **Valores numéricos:** cualitativo.
- **Condiciones:** especialmente relevante para muñecas, tendones, hueso, isquiotibiales, cadera anterior.
- **Capítulos/páginas:** Cap. 1, “Adaptation”; Cap. 5, “Tensile Loading”.
- **Comentarios:** el libro propone reformular “overstretching” como preocupación por “underloading” cuando no hay mecanismo de alta velocidad/carga extrema.

---

### Regla: `stretch-dose-general`

- **Descripción breve:** para flexibilidad general, dosis modestas pueden ser suficientes.
- **Tipo:** frecuencia/volumen.
- **Métrica principal:** minutos/semana y días/semana de estiramiento.
- **Valores numéricos:**
  - **Rango óptimo:** rutina completa <10 minutos; 2–3 días/semana; estiramientos comunes de 15–60 s.
  - **Umbrales:** no se especifican como peligrosos, pero más duración no siempre es mejor.
- **Condiciones:** población general; objetivos de ROM básico.
- **Capítulos/páginas:** Cap. 2, “Conventional Stretching”.
- **Comentarios:** no usar esta dosis mínima como objetivo de adaptación tendinosa o remodelación profunda.

---

### Regla: `pre-activity-stretch-selection`

- **Descripción breve:** antes de actividad, preferir estiramiento dinámico; estático/PNF mejor después o separado, salvo especificidad deportiva.
- **Tipo:** estilo de sesión / rendimiento.
- **Métrica principal:** tipo de estiramiento pre-actividad.
- **Valores numéricos:**
  - Dinámico: favorecido.
  - Estático/PNF: post-actividad o separado.
- **Condiciones:** deportes de fuerza/potencia o velocidad; excepciones si el deporte requiere ROM estático extremo.
- **Capítulos/páginas:** Cap. 2, “Why We Stretch”.
- **Comentarios:** si el usuario disfruta estiramiento estático breve y no hay rendimiento crítico, no es necesario prohibirlo.

---

### Regla: `static-stretch-duration-performance`

- **Descripción breve:** estiramientos estáticos largos pueden reducir rendimiento agudo, sobre todo fuerza/tareas de rango corto.
- **Tipo:** intensidad/rendimiento.
- **Métrica principal:** duración del estiramiento estático pre-actividad.
- **Valores numéricos:**
  - Estiramientos <60 s: disminución promedio ~1.1% del rendimiento.
  - Estiramientos >60 s: disminución promedio ~4.6%.
  - Estático global: ~3.7% de déficit.
  - PNF: ~4.4% de déficit.
  - Fuerza: ~4.8% déficit; potencia-velocidad: ~1.3% déficit.
  - Tareas de rango corto: estático puede perjudicar ~10.2%; tareas de rango largo: puede mejorar ~2.2%.
- **Condiciones:** rendimiento agudo, fuerza, potencia, velocidad.
- **Capítulos/páginas:** Cap. 2, “Why We Stretch”.
- **Comentarios:** efectos clínicos pueden ser pequeños para recreativos; no necesariamente prohibir.

---

### Regla: `dynamic-stretch-performance`

- **Descripción breve:** el estiramiento dinámico tiende a mejorar levemente el rendimiento agudo.
- **Tipo:** rendimiento.
- **Métrica principal:** uso de dinámico pre-actividad.
- **Valores numéricos:**
  - Mejora promedio ~1.3%.
- **Condiciones:** calentamiento deportivo.
- **Capítulos/páginas:** Cap. 2, “Why We Stretch”.
- **Comentarios:** no extrapolar a prevención absoluta de lesiones.

---

### Regla: `stretch-injury-prevention-limits`

- **Descripción breve:** el estiramiento no previene todas las lesiones; puede reducir levemente lesiones musculares en sprinting, no overuse/all-cause.
- **Tipo:** prevención.
- **Métrica principal:** incidencia de lesiones.
- **Valores numéricos:** cualitativo: leve reducción en lesiones musculares de sprint; sin efecto claro en overuse o todas las causas.
- **Condiciones:** deportes de sprint/velocidad.
- **Capítulos/páginas:** Cap. 2, “Why We Stretch”.
- **Comentarios:** no vender estiramiento como seguro universal contra lesiones.

---

### Regla: `prt-short-term`

- **Descripción breve:** la resistencia pasiva al torque disminuye agudamente tras estiramientos prolongados, pero el efecto puede durar ~1 hora.
- **Tipo:** movilidad aguda.
- **Métrica principal:** resistencia pasiva al torque.
- **Valores numéricos:**
  - Protocolo citado: 5 × 90 s con 30 s entre estiramientos; retorno a baseline ~1 h después.
- **Condiciones:** efectos agudos; no confundir con cambio estructural permanente.
- **Capítulos/páginas:** Cap. 2, “Passive Resistance Torque”.
- **Comentarios:** útil para sesiones de movilidad, pero no como adaptación crónica única.

---

### Regla: `chronic-stretch-prt`

- **Descripción breve:** estiramiento crónico puede reducir resistencia pasiva más allá del efecto agudo.
- **Tipo:** movilidad crónica.
- **Métrica principal:** PRT medida 24 h después.
- **Valores numéricos:**
  - Protocolo citado: 4 semanas, 2 × 60 s, 2 veces/día; reducción medida 24 h tras última sesión.
- **Condiciones:** práctica consistente.
- **Capítulos/páginas:** Cap. 2, “Passive Resistance Torque”.
- **Comentarios:** no se sabe cuánto dura si se suspende.

---

### Regla: `long-hold-prr`

- **Descripción breve:** estiramientos pasivos de 3–5 minutos pueden seguir reduciendo resistencia pasiva más que 1–2 minutos.
- **Tipo:** movilidad / duración.
- **Métrica principal:** minutos por estiramiento.
- **Valores numéricos:**
  - 1 min: no significativamente menor que baseline en el estudio citado.
  - 2–5 min: reducción progresiva.
  - 5 min > 2 min.
- **Condiciones:** estudio en dorsiflexión de tobillo en hombres jóvenes; ⚠️ no extrapolar a todas las articulaciones/poblaciones.
- **Capítulos/páginas:** Cap. 2, “Passive Resistance Torque”.
- **Comentarios:** el libro advierte que estos cambios no equivalen a alargamiento plástico permanente.

---

### Regla: `stretch-tolerance-sensory`

- **Descripción breve:** parte del aumento de ROM proviene de mayor tolerancia sensorial, no solo de tejido más largo.
- **Tipo:** movilidad / dolor.
- **Métrica principal:** ROM máxima tolerable.
- **Valores numéricos:** no numérico.
- **Condiciones:** ROM limitada por sensación de tirantez/dolor sin lesión aguda.
- **Capítulos/páginas:** Cap. 2, “Stretch Tolerance”; Cap. 5, “Injury Classification”.
- **Comentarios:** el sistema no debe interpretar “más ROM” como necesariamente “tejido alargado”.

---

### Regla: `passive-stretch-not-enough-muscle-architecture`

- **Descripción breve:** el estiramiento pasivo solo produce cambios triviales en longitud de fascículos/ángulo de pennación.
- **Tipo:** hipertrofia/arquitectura muscular.
- **Métrica principal:** cambio en arquitectura muscular.
- **Valores numéricos:**
  - Meta-análisis citado: cambios “triviales”.
- **Condiciones:** objetivos de arquitectura muscular o fuerza en rango largo.
- **Capítulos/páginas:** Cap. 2, “Muscle Length”.
- **Comentarios:** si el objetivo es fascículo/longitud funcional, priorizar excéntricos, isométricos en rango largo o cargas altas.

---

### Regla: `high-intensity-passive-stretch-architecture`

- **Descripción breve:** un protocolo pasivo de alta intensidad y larga duración puede aumentar longitud de fascículos, pero es exigente y poco práctico.
- **Tipo:** movilidad/arquitectura.
- **Métrica principal:** duración/intensidad semanal.
- **Valores numéricos:**
  - 450 s (7.5 min) por estiramiento, al máximo tolerable justo antes de dolor.
  - 5 veces/semana durante 8 semanas.
  - Adherencia real ~3.1 sesiones/semana.
  - Resultados: fascículo +13.6%; ángulo -15.1%; ROM +14.2°.
- **Condiciones:** ⚠️ muestra pequeña (n=5 en grupo intervención según resumen), hombres jóvenes; alta incomodidad; no es protocolo general de yoga.
- **Capítulos/páginas:** Cap. 2, Research Summary “High Intensity Stretch”, p. 72.
- **Comentarios:** no automatizar sin supervisión; riesgo de baja adherencia y compensaciones.

---

### Regla: `eccentric-long-fascicle`

- **Descripción breve:** entrenamiento excéntrico de alta magnitud puede aumentar longitud de fascículos y mejorar fuerza en rangos largos.
- **Tipo:** fuerza/movilidad.
- **Métrica principal:** tipo e intensidad de contracción.
- **Valores numéricos:**
  - Nordic hamstring curl: 10 semanas → aumento de longitud de fascículos.
  - Ejercicios de peso corporal tipo yoga pueden fortalecer, pero ⚠️ no siempre suficiente para desplazar curva longitud-tensión.
- **Condiciones:** objetivo de fuerza en rango largo o prevención de isquiotibiales.
- **Capítulos/páginas:** Cap. 2, “Eccentric Contractions”.
- **Comentarios:** la magnitud importa; transiciones suaves de yoga pueden no bastar.

---

### Regla: `isometric-long-length`

- **Descripción breve:** isométricos en posiciones alargadas pueden aumentar longitud de fascículos de forma similar a excéntricos.
- **Tipo:** fuerza/movilidad.
- **Métrica principal:** isométrico en rango largo.
- **Valores numéricos:** no se especifica dosis exacta; el libro sugiere mantener posturas con co-contracción alta.
- **Condiciones:** usuarios que necesitan control activo en fin de rango.
- **Capítulos/páginas:** Cap. 2, “Eccentric Contractions”.
- **Comentarios:** útil en yoga porque muchas posturas son isométricas; debe haber tensión real, no solo forma.

---

### Regla: `tendon-high-load`

- **Descripción breve:** para adaptar stiffness/capacidad de tendón, se requieren cargas relativamente altas.
- **Tipo:** intensidad / tendon-health.
- **Métrica principal:** %1RM o %MVC.
- **Valores numéricos:**
  - Rango mencionado: 60–80% 1RM según literatura.
  - Mínimo preferido citado: ~80% 1RM durante 12 semanas.
  - 55% MVC insuficiente comparado con 90% MVC en isométricos repetidos durante 14 semanas.
- **Condiciones:** tendones sanos o en rehab avanzada con criterio; no en fase aguda sin supervisión.
- **Capítulos/páginas:** Cap. 3, “Stiffness and Compliance”.
- **Comentarios:** en yoga bodyweight puede ser difícil alcanzar 80% 1RM; usar palancas, tempo, unilateral o equipo.

---

### Regla: `tendon-contraction-type`

- **Descripción breve:** tendones responden a concéntrico, isométrico y excéntrico; excéntrico suele producir mayores adaptaciones, pero magnitud importa más.
- **Tipo:** intensidad / modalidad.
- **Métrica principal:** tipo de contracción + magnitud.
- **Valores numéricos:** no hay dosis exacta; priorizar carga suficiente.
- **Condiciones:** programación de tendón.
- **Capítulos/páginas:** Cap. 3, “Stiffness and Compliance”.
- **Comentarios:** no elegir solo excéntrico por dogma; evaluar tolerancia.

---

### Regla: `tendon-variable-loading`

- **Descripción breve:** tendones también responden a variación de ritmo y dirección.
- **Tipo:** progresión / variabilidad.
- **Métrica principal:** variación de rate/dirección.
- **Valores numéricos:** cualitativo.
- **Condiciones:** etapas no agudas.
- **Capítulos/páginas:** Cap. 3, “Stiffness and Compliance”.
- **Comentarios:** combinar con carga alta y específica.

---

### Regla: `tendon-collagen-turnover-recovery`

- **Descripción breve:** tras ejercicio de alta intensidad, hay degradación neta temprana y síntesis posterior; equilibrio alrededor de ~72 h.
- **Tipo:** descanso/recuperación.
- **Métrica principal:** horas entre sesiones de alta carga tendinosa.
- **Valores numéricos:**
  - Síntesis de colágeno pico ~24 h post ejercicio.
  - Degradación pico antes.
  - Equilibrio ~72 h post ejercicio.
- **Condiciones:** sesiones de alta intensidad tendinosa; ⚠️ extrapolado de tendon research, no específico de yoga.
- **Capítulos/páginas:** Cap. 4, “Cells”, p. 130 (research summary).
- **Comentarios:** no convertir en regla rígida; monitorizar síntomas.

---

### Regla: `collagen-strain-safety`

- **Descripción breve:** los tejidos colágenos tienen rangos de deformación limitados; la carga debe mantenerse dentro de capacidad adaptativa.
- **Tipo:** seguridad.
- **Métrica principal:** % strain conceptual.
- **Valores numéricos:**
  - Toe: 1–2%.
  - Elástico: 3–4%.
  - Yield: ~4%.
  - Plástico: 4–6%.
  - Fallo: ~8–10%.
  - Movimiento normal: ~2–5%.
- **Condiciones:** modelo conceptual; no medible sin laboratorio.
- **Capítulos/páginas:** Cap. 3, “Stress and Strain”.
- **Comentarios:** usar para evitar cargas extremas rápidas, no para calcular en app.

---

### Regla: `creep-recovery`

- **Descripción breve:** bajo carga constante, el tejido se deforma más rápido al inicio y luego se recupera tras descargar.
- **Tipo:** movilidad temporal.
- **Métrica principal:** tiempo bajo carga.
- **Valores numéricos:**
  - Mayor deformación en primeros 15–20 s.
- **Condiciones:** estiramientos sostenidos, sedestación prolongada, posturas largas.
- **Capítulos/páginas:** Cap. 3, “Creep and Recovery”.
- **Comentarios:** no interpretar creep como daño ni como alargamiento permanente.

---

### Regla: `stress-relaxation-hold`

- **Descripción breve:** al mantener una longitud constante, la fuerza/resistencia percibida disminuye con el tiempo.
- **Tipo:** movilidad/sensación.
- **Métrica principal:** tiempo en posición.
- **Valores numéricos:** cualitativo; disminución progresiva.
- **Condiciones:** estiramientos estáticos.
- **Capítulos/páginas:** Cap. 3, “Stress Relaxation”.
- **Comentarios:** explica por qué una postura “afloja” sin implicar necesariamente cambio estructural.

---

### Regla: `strain-rate-entry`

- **Descripción breve:** entrar lentamente en un estiramiento puede reducir resistencia; entradas rápidas aumentan resistencia.
- **Tipo:** técnica.
- **Métrica principal:** velocidad de entrada al rango.
- **Valores numéricos:** cualitativo.
- **Condiciones:** movilidad, usuarios sensibles, hiperlaxitud.
- **Capítulos/páginas:** Cap. 3, “Strain Rate Sensitivity”.
- **Comentarios:** no confundir con que lento sea siempre seguro; la magnitud también importa.

---

### Regla: `hysteresis-training`

- **Descripción breve:** el estiramiento estático crónico o muy prolongado puede reducir histéresis y aumentar energía reutilizable, aunque no necesariamente mejora rendimiento deportivo directamente.
- **Tipo:** viscoelasticidad.
- **Métrica principal:** histéresis (% energía perdida).
- **Valores numéricos:**
  - Protocolo: 3 semanas, 3 veces/día, 5 estiramientos de 45 s en gastrocnemio medial.
  - Histéresis bajó de 19.9% a 12.5%.
  - Un estiramiento único de 10 min produjo baja similar.
- **Condiciones:** ⚠️ extrapolación a rendimiento no confirmada.
- **Capítulos/páginas:** Cap. 3, “Hysteresis”.
- **Comentarios:** interesante para economía de movimiento, pero no regla de performance directa.

---

### Regla: `warmup-temperature`

- **Descripción breve:** tejidos calientes ofrecen menos fricción interna y se deforman con menos resistencia; calentar es útil.
- **Tipo:** preparación.
- **Métrica principal:** temperatura/estado de calentamiento.
- **Valores numéricos:** cualitativo.
- **Condiciones:** sesiones de movilidad, yoga, tendones distales fríos.
- **Capítulos/páginas:** Cap. 3, “Temperature”.
- **Comentarios:** hot yoga no está probado como más seguro; hay datos conflictivos de temperatura core.

---

### Regla: `hot-yoga-caution`

- **Descripción breve:** en condiciones muy calurosas/húmedas, la temperatura core puede elevarse; el riesgo térmico depende de intensidad/hidratación/aclimatación.
- **Tipo:** estilo de vida / seguridad.
- **Métrica principal:** temperatura core percibida/síntomas.
- **Valores numéricos:**
  - Un estudio reportó picos promedio ~103.2°F hombres y ~102.0°F mujeres; otro equipo reportó ~100.3°F con medición distinta.
- **Condiciones:** ⚠️ datos conflictivos; no usar como regla de lesión de tejido.
- **Capítulos/páginas:** Cap. 3, Research Summary “Hot Yoga”, p. 107.
- **Comentarios:** priorizar hidratación, aclimatación, reducir intensidad si hay síntomas; derivar si signos de heat illness.

---

### Regla: `bone-impact-yoga-insufficient`

- **Descripción breve:** el yoga Hatha flow produce ground reaction forces menores que correr/saltar; puede ser insuficiente para estímulo óseo robusto.
- **Tipo:** bone-health / intensidad.
- **Métrica principal:** GRF (body weight multiples).
- **Valores numéricos:**
  - Caminar: ~1.0–1.5× peso corporal.
  - Correr: ~2.5–3.5×.
  - Hatha flow yoga: generalmente <2×, comparable a caminar.
- **Condiciones:** objetivo de densidad ósea.
- **Capítulos/páginas:** Cap. 1, “Applied Loads”; Research Summary p. 36.
- **Comentarios:** añadir saltos, carrera, resistencia externa o impacto si el objetivo es hueso, con progresión y supervisión.

---

### Regla: `bone-progressive-high-load`

- **Descripción breve:** hueso puede adaptarse a cargas altas; la subcarga favorece pérdida, la sobrecarga extrema puede fracturar.
- **Tipo:** bone-health.
- **Métrica principal:** magnitud de carga.
- **Valores numéricos:** cualitativo; altas cargas progresivas.
- **Condiciones:** población general o mujeres mayores con osteoporosis solo en contexto supervisado; libro cita heavy lifting como seguro/efectivo en estudio específico.
- **Capítulos/páginas:** Cap. 1, “Optimal Loading”.
- **Comentarios:** no automatizar cargas altas en osteoporosis sin supervisión clínica.

---

### Regla: `hamstring-isometric-capacity`

- **Descripción breve:** para capacidad de isquiotibial proximal, usar isométricos de puente con sostén y descanso largo.
- **Tipo:** rehab/capacidad.
- **Métrica principal:** segundos por repetición, reps, descanso.
- **Valores numéricos:**
  - Hold: 30–45 s.
  - Para aumentar capacidad sustancial: 5 reps.
  - Descanso: 2 min entre reps.
- **Condiciones:** progresión cuando el hold de 30–45 s sea sostenible; puede tardar meses; adaptación completa puede tomar 1–3 años.
- **Capítulos/páginas:** Apéndice, “Modifying Loads for the Proximal Hamstring Tendon”.
- **Comentarios:** si aparecen síntomas, descansar días y regresar a progresión anterior; si persiste, derivar.

---

### Regla: `hamstring-eccentric-slides`

- **Descripción breve:** slides excéntricos de isquiotibiales progresan capacidad con control de pelvis.
- **Tipo:** fuerza/movilidad.
- **Métrica principal:** reps/sets/descanso/tempo.
- **Valores numéricos:**
  - 15 reps con competencia.
  - 3–5 sets para capacidad sustancial.
  - 2 min descanso entre sets.
  - Tempo: 3–5 s hacia rango final.
- **Condiciones:** después de isométricos tolerados.
- **Capítulos/páginas:** Apéndice, “Eccentric Hamstring Slides”.
- **Comentarios:** no dejar que pelvis caiga; no usar en dolor agudo no evaluado.

---

### Regla: `hamstring-concentric-slides`

- **Descripción breve:** slides concéntricos mantienen pelvis elevada al regresar.
- **Tipo:** fuerza.
- **Métrica principal:** reps/sets/descanso.
- **Valores numéricos:**
  - 10–15 reps o fatiga.
  - 3–5 sets.
  - ≥2 min descanso.
- **Condiciones:** después de excéntricos controlados.
- **Capítulos/páginas:** Apéndice, “Concentric Hamstring Slides”.
- **Comentarios:** controlar deslizamiento; evitar colapso lumbar.

---

### Regla: `forward-bend-tension`

- **Descripción breve:** en forward bends, priorizar tensión activa de isquiotibiales y reducir profundidad si no se puede mantener.
- **Tipo:** técnica/progresión.
- **Métrica principal:** capacidad de mantener tensión en rango.
- **Valores numéricos:** cualitativo.
- **Condiciones:** usuarios con isquiotibial proximal sensible o hiperlaxitud.
- **Capítulos/páginas:** Apéndice, “Forward Bends”; Cap. 5, “Compressive Forces”.
- **Comentarios:** la flexión profunda de cadera puede comprimir tendón proximal contra isquion; en síntomas, reducir temporalmente.

---

### Regla: `anterior-hip-resisted-flexion`

- **Descripción breve:** para cadera anterior, usar flexión resistida suave en lugar de solo estirar.
- **Tipo:** rehab/capacidad.
- **Métrica principal:** %MVC estimado.
- **Valores numéricos:**
  - 20–40% MVC.
  - Resistencia relativamente constante en arco de movimiento.
- **Condiciones:** molestias de cadera anterior no agudas; sin diagnóstico médico, mantener conservador.
- **Capítulos/páginas:** Apéndice, “Supine Resistance Work”.
- **Comentarios:** puede hacerse con compañero o props; si dolor persiste, derivar.

---

### Regla: `anterior-hip-short-range-isometrics`

- **Descripción breve:** posturas de rango corto con tensión activa de flexores de cadera mejoran tolerancia.
- **Tipo:** capacidad.
- **Métrica principal:** hold 30–45 s.
- **Valores numéricos:**
  - 30–45 s; múltiples reps según contexto.
- **Condiciones:** Boat, Marichi variation, Standing Marichi, Extended Hand-to-Big-Toe hover.
- **Capítulos/páginas:** Apéndice, “Short Range Postures”.
- **Comentarios:** evitar Boat con rodillas dobladas si no se logra tensión anterior; usar soporte lumbar si es necesario.

---

### Regla: `anterior-hip-internal-rotation`

- **Descripción breve:** combinar flexión con rotación interna activa puede restaurar facilidad en flexión profunda.
- **Tipo:** movilidad/capacidad.
- **Métrica principal:** isométrico de rotación interna.
- **Valores numéricos:** cualitativo; presionar pierna hacia suelo en side sitting.
- **Condiciones:** si hay pinching anterior con flexión profunda y rotación interna limitada.
- **Capítulos/páginas:** Apéndice, “Internal Rotation”.
- **Comentarios:** adaptaciones agudas son efímeras; requiere repetición crónica.

---

### Regla: `anterior-hip-eccentric-lunge`

- **Descripción breve:** lunges excéntricos largos cargan flexores de cadera en rango extendido.
- **Tipo:** fuerza/movilidad.
- **Métrica principal:** sets/reps.
- **Valores numéricos:**
  - 3 sets de 10 reps.
- **Condiciones:** pelvis estable, sin shift vertical/horizontal excesivo.
- **Capítulos/páginas:** Apéndice, “Long Range Postures”.
- **Comentarios:** progresar a Warrior I/splits solo con soporte y control.

---

### Regla: `shoulder-cocontraction-range`

- **Descripción breve:** el rango de flexión de hombro debe limitarse por la capacidad de mantener co-contracción, no por la forma.
- **Tipo:** técnica/capacidad.
- **Métrica principal:** mantenimiento de skill sin compensación.
- **Valores numéricos:** cualitativo.
- **Condiciones:** hombro, overhead, inversiones, plank.
- **Capítulos/páginas:** Apéndice, “Modifying Loads for the Shoulder Complex”.
- **Comentarios:** errores típicos: doblar codos o extender columna para aparentar más ROM.

---

### Regla: `plank-shoulder-hold`

- **Descripción breve:** plank/side plank se usan como isométricos de capacidad de hombro.
- **Tipo:** capacidad.
- **Métrica principal:** segundos.
- **Valores numéricos:**
  - 30–45 s.
- **Condiciones:** regress con manos elevadas; progres con pies elevados/single-leg.
- **Capítulos/páginas:** Apéndice, “Planks”.
- **Comentarios:** para hiperlaxitud, evitar codos hiperextendidos sin tensión muscular.

---

### Regla: `pushup-volume-gate`

- **Descripción breve:** construir push-ups hasta ~3×10 antes de variantes más difíciles.
- **Tipo:** progresión.
- **Métrica principal:** reps/sets.
- **Valores numéricos:**
  - Objetivo: ~3 series de 10 reps.
- **Condiciones:** control excéntrico/concéntrico; sin dolor agravante.
- **Capítulos/páginas:** Apéndice, “Push-Ups”.
- **Comentarios:** si solo logra 1 rep, tiempo bajo tensión insuficiente; usar regresión.

---

### Regla: `headstand-entry-technique`

- **Descripción breve:** entrar en headstand con pike reduce fuerza y flexión cervical vs kick-up/curl.
- **Tipo:** seguridad/técnica.
- **Métrica principal:** carga en cabeza/cuello.
- **Valores numéricos:**
  - Fuerza máxima en corona: ~40–48% peso corporal.
  - 51% superó ~300 N.
  - Pike entry: menor fuerza en entrada/hold.
- **Condiciones:** solo usuarios con capacidad de hombro/core; evitar en patología cervical no evaluada.
- **Capítulos/páginas:** Cap. 6, Research Summary “Headstand Safety”, p. 191.
- **Comentarios:** no usar límites de cadáver como umbral seguro; capacidad adaptativa no considerada.

---

### Regla: `core-bracing-light-load`

- **Descripción breve:** para estabilidad espinal ligera, la activación necesaria es muy baja; no hace falta bracing máximo.
- **Tipo:** técnica/core.
- **Métrica principal:** %MVC.
- **Valores numéricos:**
  - Upright neutral unloaded: ~1.7 ± 0.8% MVC.
  - Con 32 kg: ~2.9 ± 1.4% MVC.
- **Condiciones:** tareas ligeras; bracing mayor para cargas altas/performance.
- **Capítulos/páginas:** Cap. 6, “Core Stability”.
- **Comentarios:** no vender core bracing como protección universal para cualquier movimiento.

---

### Regla: `spinal-flexion-progressive`

- **Descripción breve:** la flexión espinal no debe prohibirse por defecto; se progresa según tolerancia y objetivo.
- **Tipo:** movilidad/prevención.
- **Métrica principal:** exposición gradual a flexión.
- **Valores numéricos:** cualitativo.
- **Condiciones:** espaldas sanas/activas; derivar si hay flexion intolerance clínica.
- **Capítulos/páginas:** Cap. 6, “Spinal Flexion”.
- **Comentarios:** hip hinge sigue siendo útil para alcanzar fin de rango de flexión de pie.

---

### Regla: `prolonged-flexion-creep`

- **Descripción breve:** flexión lumbar sostenida puede generar creep temporal y alterar load sharing.
- **Tipo:** seguridad/temporal.
- **Métrica principal:** minutos en flexión sostenida.
- **Valores numéricos:**
  - Incluso 5–10 min pueden afectar temporalmente.
  - 1 h de sedestación también puede alterar patrón.
- **Condiciones:** antes de tareas con carga o transiciones exigentes.
- **Capítulos/páginas:** Cap. 6, “Spinal Flexion”.
- **Comentarios:** incluir warm-up/recuperación antes de cargas.

---

### Regla: `squat-stoop-choice`

- **Descripción breve:** squat lift y stoop lift no son universalmente superiores; elegir según tarea, preferencia y capacidad.
- **Tipo:** técnica.
- **Métrica principal:** comodidad/capacidad/carga.
- **Valores numéricos:** no aplica.
- **Condiciones:** levantar objetos ligeros; con cargas pesadas, técnica más estricta.
- **Capítulos/páginas:** Cap. 6, “Squatting vs Stooping”.
- **Comentarios:** el entrenamiento de técnica pura no ha demostrado reducir lesiones; capacidad sí importa.

---

### Regla: `hypermobility-end-range-control`

- **Descripción breve:** en hiperlaxitud, evitar fin de rango si no hay co-contracción/control activo.
- **Tipo:** seguridad.
- **Métrica principal:** capacidad de generar tensión muscular en rango.
- **Valores numéricos:** cualitativo.
- **Condiciones:** usuarios hiperlaxos o con inestabilidad percibida.
- **Capítulos/páginas:** Cap. 5, “Hypermobility”; Apéndice.
- **Comentarios:** usar macro-bend, closed chain, bandas, oscilaciones, excéntricos; no diagnosticar síndrome.

---

### Regla: `osteoarthritis-symptom-led`

- **Descripción breve:** en osteoarthritis, la carga puede reducirse para minimizar síntomas; no aplicar progresión agresiva automática.
- **Tipo:** dolor/patología.
- **Métrica principal:** síntomas 0–10 o tolerancia.
- **Valores numéricos:** cualitativo; ajustar día a día.
- **Condiciones:** OA diagnosticada o cartílago degenerativo.
- **Capítulos/páginas:** Apéndice, “Considerations and Contraindications”.
- **Comentarios:** el libro indica que cartílago articular degenerativo tiene poca capacidad adaptativa; derivar a profesional.

---

### Regla: `pain-referral`

- **Descripción breve:** si capacidad disminuye, dolor persiste o hay signos no musculoesqueléticos, derivar.
- **Tipo:** seguridad.
- **Métrica principal:** persistencia de síntomas o pérdida de capacidad.
- **Valores numéricos:** no definido; criterio cualitativo.
- **Condiciones:** cualquier programa.
- **Capítulos/páginas:** Cap. 5, “Capacity”; Apéndice, “Considerations and Contraindications”.
- **Comentarios:** yoga teacher no diagnostica ni trata.

---

### Regla: `imaging-pain-mismatch`

- **Descripción breve:** no usar hallazgos de imaging como regla automática de daño/fragilidad.
- **Tipo:** seguridad/evidencia.
- **Métrica principal:** presencia de anomalías asintomáticas.
- **Valores numéricos:**
  - Estudios citados muestran altas tasas de anomalías en asintomáticos (ej. discos, manguito rotador, labrum).
- **Condiciones:** interpretación de lesiones.
- **Capítulos/páginas:** Cap. 5, “Injury Classification”.
- **Comentarios:** el sistema debe evitar lenguaje catastrófico y restricciones automáticas por diagnóstico estructural.

---

### Regla: `contracture-stretch-limited`

- **Descripción breve:** en contracturas, el estiramiento no produce mejoras clínicamente importantes en movilidad según revisión citada.
- **Tipo:** rehab.
- **Métrica principal:** grados de ROM ganados.
- **Valores numéricos:**
  - Mejoras ~1–2°, máximo ~3°; clínicamente insignificante.
- **Condiciones:** contracturas neurológicas/ortopédicas.
- **Capítulos/páginas:** Cap. 3, Research Summary “Cochrane Review on Stretching”, p. 106.
- **Comentarios:** derivar a manejo clínico; no usar stretching pasivo como solución principal.

---

### Regla: `in-vitro-stretch-research-caution`

- **Descripción breve:** estudios in vitro sugieren baja magnitud (3–6%) y duración larga (3–5 min) favorecen reparación de heridas en tejidos bioingenierizados; no aplicar directamente.
- **Tipo:** investigación.
- **Métrica principal:** % strain y minutos.
- **Valores numéricos:**
  - 3% y 6% mejoraron reparación a 48 h; 12% empeoró.
  - 3–5 min de stretch mejoraron reducción de herida.
- **Condiciones:** ⚠️ solo in vitro; no prescribir para heridas reales.
- **Capítulos/páginas:** Cap. 4, Research Summary “Stretching and Tissue Repair”, p. 130.
- **Comentarios:** útil como hipótesis, no como regla clínica.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `proximal-hamstring-capacity`

- **Disciplina:** yoga + fuerza/movilidad.
- **Objetivo final:** aumentar tolerancia a carga del tendón isquiotibial proximal, permitiendo forward bends y hip flexión con menos síntomas.
- **Requisitos de seguridad previos:** ausencia de dolor agudo severo; si hay tendinopatía diagnosticada, estar en fase tolerante o con alta clínica; no cargar fracturas; monitorizar síntomas.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Isometric Hamstring Bridge | Puente con énfasis en empuje de talón y tracción de isquiotibial hacia isquion; mantener 30–45 s | Mantener 30–45 s con tensión posterior sin dolor agravante | Hiperextensión lumbar; sin activación isquiotibial | Apéndice |
| 2 | Bridge variations | Rotación externa/interna, single-leg, palanca más larga | Mantener skill y tensión en variación elegida | Compensar con glute/lumbar; perder acción | Apéndice |
| 3 | Extended Bridge | Pies más lejos (~10–15 cm incremental) o pies en bloques | Mantener tensión isquiotibial sin dolor | Sobreestirar sin control; pelvis colapsada | Apéndice |
| 4 | Eccentric Hamstring Slides | Deslizar pies hacia extensión con pelvis elevada, 3–5 s | 15 reps controladas | Pelvis cae; movimiento rápido | Apéndice |
| 5 | Concentric Hamstring Slides | Regresar deslizando manteniendo pelvis elevada | 10–15 reps o fatiga controlada | Colapso lumbar; pérdida de tensión | Apéndice |
| 6 | Progressive Lunges | Lunges soportados → unsupported → Warrior I | Tolerar hip flexión con tensión posterior | Entrar en hip flexión profunda demasiado pronto | Apéndice |
| 7 | Active Forward Bends | Forward bends con tensión isquiotibial; profundidad limitada por control | Mantener tensión sin síntomas | Estiramiento pasivo agresivo | Apéndice |

- **Pasos con riesgo de tejido:** Step 6–7 en flexión profunda pueden comprimir insertión proximal; ⚠️ progresar lentamente.

---

### SkillPath: `anterior-hip-capacity`

- **Disciplina:** yoga + movilidad/capacidad.
- **Objetivo final:** mejorar tolerancia de cadera anterior a flexión y extensión cargada, reduciendo pinchazos/molestias.
- **Requisitos de seguridad previos:** descartar patología no mecánica si hay dolor persistente; no forzar rangos con dolor agudo.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Test/retest deep flexion | Knees-to-chest, Child’s Pose o Garland Pose como baseline | Poder comparar antes/después | Interpretar dolor agudo como simple tightness | Apéndice |
| 2 | Supine resisted hip flexion | Flexión resistida suave 20–40% MVC, concéntrico/isométrico/excéntrico | Resistencia constante sin dolor | Resistencia variable; compensación lumbar | Apéndice |
| 3 | Short-range isometrics | Marichi variation, Boat, Standing Marichi, Extended Hand-to-Big-Toe hover | 30–45 s con tensión anterior | Boat doblado sin tensión; flexión lumbar excesiva | Apéndice |
| 4 | Internal rotation | Side sitting, presionar pierna internamente rotada contra suelo | Isométrico tolerable y mejoría en test | Forzar rango más allá de morfología | Apéndice |
| 5 | Kneeling lunge | Lunge con tensión anterior; isométrico/excéntrico/concéntrico | Mantener pelvis estable | Shift pélvico excesivo | Apéndice |
| 6 | Eccentric lunge | Extender cadera posterior manteniendo pelvis fija | 3×10 controladas | Pelvis se mueve; perder tensión | Apéndice |
| 7 | Warrior I / splits regressions | Elevar pie delantero o soportar cadera posterior | Acción/skill sin dolor | Forzar end range | Apéndice |

- **Pasos con riesgo:** Step 5–7 si hay dolor anterior agudo; ⚠️ reducir rango.

---

### SkillPath: `shoulder-complex-capacity`

- **Disciplina:** yoga + fuerza de hombro.
- **Objetivo final:** aumentar capacidad de hombro para plank, overhead, inversiones y soportes sin perseguir estética fija.
- **Requisitos de seguridad previos:** sin dolor agudo no evaluado; para lesiones de manguito, derivar si hay síntomas persistentes.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Action/skill con bloque | Reach desde hombro/tríceps/meñique y desde pulgar/bíceps/pecho; 90–180° flexión | Mantener skill sin dolor | Extensión lumbar; codos doblados | Apéndice |
| 2 | Plank regressions | Manos en pared/silla/bloques/suelo; 30–45 s | 30–45 s con skill | Codos hiperextendidos sin tensión | Apéndice |
| 3 | Plank progressions | Pies elevados, single-leg, hand placement variable | Mantener skill y tensión | Colapso escapular; dolor | Apéndice |
| 4 | Side plank | Regresión en silla/bloque; progresión normal | 30–45 s con control | Hombro comprimido | Apéndice |
| 5 | Push-up progression | Chair push-up → floor → eccentric → full | ~3×10 antes de variantes difíciles | Bajar sin control; rango incompleto | Apéndice |
| 6 | Inversions con prop | Press/pull contra bloque/bolster para co-contracción | Co-contracción sin dolor | Inversión pasiva sin control | Apéndice |

- **Pasos con riesgo:** inversiones si cervical/hombro comprometido; ⚠️ supervisión.

---

### SkillPath: `spinal-flexion-tolerance`

- **Disciplina:** movilidad/yoga.
- **Objetivo final:** tolerar flexión espinal y hinges sin miedo ni síntomas.
- **Requisitos:** sin red flags neurológicas; si radiculopatía o dolor severo, derivar.
- **Pasos sugeridos:**

| Step | Nombre | Descripción | Criterio | Errores | Notas |
|---|---|---|---|---|---|
| 1 | Segmental mobility | Movimiento global y segmentario de columna en posiciones seguras | Movimiento sin amenaza | Rigidez total | Cap. 6 |
| 2 | Loaded flexion breve | Forward folds con calentamiento; evitar >5–10 min estático | Tolerancia sin síntomas | Flexión estática prolongada | Cap. 6 |
| 3 | Hip hinge + spine flexion | Combinar hinge y flexión para alcanzar rango | Control de descenso | hinge o flexión exclusiva | Cap. 6 |
| 4 | Roll-ups/downs | Transiciones controladas | Sin síntomas | Movimiento brusco | Cap. 6 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Hamstring Bridge / Slides / Forward Bends

- **Cues principales:**
  - “Desde la parte posterior de la rodilla, alcanza hacia el talón; mantén y lleva el isquiotibial inferior hacia el isquion.”
  - Sensación de empujar y tirar simultáneamente.
  - Mantener tensión durante entrada, hold y salida.
  - En forward bends: doblar rodillas o reducir hip flexión hasta poder sentir tensión activa.
- **Errores frecuentes:**
  - Hiperextender lumbar en puente.
  - Perder tensión isquiotibial al aumentar palanca.
  - Caer en estiramiento pasivo profundo.
  - En slides, pelvis colapsa o el deslizamiento es rápido.
- **Variantes seguras:**
  - Talones como punto de contacto; superficie deslizante con restricción.
  - Pies más cerca; single-leg solo cuando haya control.
  - Forward bends con manos en bloques o pared.
- **Indicaciones específicas:**
  - Con dolor proximal insertional: reducir hip flexión profunda temporalmente.
  - Hiperlaxitud: oscilar entre rodilla doblada y estirada para mantener tensión.
- **Referencias:** Apéndice, “Modifying Loads for the Proximal Hamstring Tendon”; Cap. 5, “Compressive Forces”.

---

### Lunges / Warrior / Hip Flexion

- **Cues principales:**
  - Front leg: “alarga desde la pantorrilla hacia el talón y desde isquiotibial hacia isquion.”
  - Back leg anterior hip: “alarga desde pliegue de cadera hacia rodilla y hacia hombro.”
  - Sensación de lift de muslo y pecho.
- **Errores frecuentes:**
  - Shift pélvico excesivo.
  - Flexión lumbar compensatoria.
  - Entrar en rango profundo sin capacidad de tensión.
- **Variantes seguras:**
  - Manos en pared/bloques altos/bajos para controlar profundidad.
  - Elevar pie delantero en Warrior I.
  - Soportar cadera posterior en splits/pigeon regressions.
- **Indicaciones:**
  - Si pinching anterior, reducir profundidad y añadir rotación interna/trabajo activo.
- **Referencias:** Apéndice, “Lunges”, “Long Range Postures”.

---

### Anterior Hip Resistance / Boat

- **Cues principales:**
  - “Alarga pliegue de cadera hacia rodilla y hacia hombro; eleva muslo y pecho.”
  - Resistencia constante en flexión supina.
- **Errores frecuentes:**
  - Boat con rodillas dobladas sin tensión anterior.
  - Flexión espinal excesiva para fingir hip flexión.
  - Resistencia inconsistente.
- **Variantes seguras:**
  - Single-leg Boat.
  - Espalda contra pared.
  - Extended Hand-to-Big-Toe hover sin soporte.
- **Indicaciones:**
  - Si no se logra tensión, usar constraints: heels, sliding surface.
- **Referencias:** Apéndice, “Short Range Postures”, “Supine Resistance Work”.

---

### Plank / Push-Up / Inversions

- **Cues principales:**
  - Reach desde hombros/tríceps/meñiques y desde pulgares/bíceps/pecho.
  - Empujar suelo y levantar/alejar para crear co-contracción.
  - En push-up: bajar lento y controlado.
- **Errores frecuentes:**
  - Codos hiperextendidos sin tensión.
  - Extender columna para simular shoulder flexion.
  - Adducción excesiva + flexión de codos en Downward Dog.
  - Invertir sin control.
- **Variantes seguras:**
  - Manos elevadas; chair push-up; eccentric push-up; prop press/pull en inversiones.
- **Indicaciones:**
  - Para hombro sensible, probar elevación escapular leve o rotación interna controlada; si persiste, derivar.
- **Referencias:** Apéndice, “Shoulder Complex”; Cap. 6, “Cueing and Kinematics”.

---

### Spinal Flexion / Hinge / Lifting

- **Cues principales:**
  - Calentar antes de forward bends.
  - Combinar hip hinge y flexión espinal según tarea.
  - Evitar flexión estática prolongada antes de cargas.
- **Errores frecuentes:**
  - Dogma “flat back always”.
  - Mantener flexión sostenida larga y luego cargar.
  - Corregir estética sin evaluar capacidad.
- **Variantes seguras:**
  - Roll-ups suaves; hinges; squat/stoop según confort.
- **Indicaciones:**
  - Flexion intolerance clínica: derivar; no automatizar flexión agresiva.
- **Referencias:** Cap. 6, “Spinal Flexion”, “Squatting vs Stooping”.

---

### Postura / alineación / kinematics

- **Cues principales:**
  - Usar preguntas abiertas de fuerza: “¿qué pasa si presionas talón?”, “¿qué cambia si alcanzas con esfuerzo y a la vez intentas atraer?”
  - Permitir estrategias individuales de overhead.
- **Errores frecuentes:**
  - Corregir alineación como si hubiera una postura perfecta universal.
  - Interpretar variaciones morfológicas como patología.
- **Variantes seguras:**
  - Variabilidad de posturas; cambiar ROM, soporte, dirección.
- **Indicaciones:**
  - No usar kinematics para diagnóstico; ejercicio puede mejorar síntomas sin cambiar cinemática.
- **Referencias:** Cap. 6, “Posture and Alignment”, “Cueing and Kinematics”.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Tendinopatía / patología de tendón (énfasis isquiotibial proximal)

- **Zona:** `hamstring/proximal-hamstring`, también aplicable a `Achilles`, `gluteal`, `quadriceps/patellar`.
- **Etiología resumida:** intolerancia a carga; combinación de estructura, función y dolor. El libro desplaza el foco de “overstretching” hacia subcarga, compresión insertional y exposición mal dosificada.
- **Signos y síntomas clave:** dolor con carga, sensibilidad a forward bends/hip flexión, molestias en transiciones; puede haber dolor sin daño estructural claro.
- **Stadia / fases:** el libro no define una taxonomía clínica detallada en el texto provisto; usa fases de reparación tisular y modelo de capacidad. ⚠️ No inventar etapas clínicas.
- **Protocolos de tratamiento o rehab:**
  - **Fase I (inflamatoria, 3–7 días):**
    - **Objetivo:** proteger, reducir irritación aguda, permitir reparación inicial.
    - **Qué se hace / qué NO se hace:** no cargar agresivamente; movimiento suave si tolerable; ice como analgésico opcional; no diagnóstico por yoga teacher.
    - **Criterio para pasar a fase 2:** síntomas agudos disminuyen, tolerancia a carga ligera.
  - **Fase II (reparación/proliferación, ~4–6 semanas):**
    - **Objetivo:** introducir carga progresiva para alinear colágeno.
    - **Qué se hace / qué NO se hace:** cargas bajas/progresivas; evitar exceso que reactive inflamación.
    - **Criterio para pasar a fase 3:** mejora de función y tolerancia.
  - **Fase III (remodelación, ~1–3 años):**
    - **Objetivo:** aumentar capacidad, stiffness, fuerza en rangos necesarios.
    - **Qué se hace:** isométricos, excéntricos, concéntricos, progresión de palancas, variabilidad.
    - **Criterio:** realizar volumen/frecuencia requeridos sin exacerbar síntomas.
- **Ejercicios de prehab/movilidad específicos:**
  - Hamstring Bridge 30–45 s, 5 reps, 2 min rest.
  - Eccentric slides 15 reps, 3–5 sets, 2 min rest, 3–5 s tempo.
  - Concentric slides 10–15 reps, 3–5 sets.
  - Lunges progresivos y forward bends activos.
- **Umbrales de dolor/red flags:**
  - Dolor agudo severo, incapacidad funcional, síntomas persistentes, pérdida de capacidad → derivar.
  - En dolor insertional, reducir flexión profunda temporalmente.
- **Referencias:** Cap. 5, “Biochemistry of Repair”, “Compressive Forces”; Apéndice.

---

### Lesión / condición: Dolor anterior de cadera / flexor-related

- **Zona:** `hip/anterior-hip`.
- **Etiología resumida:** con frecuencia subcarga de flexores, no solo “flexores cortos”; puede acompañarse de limitada rotación interna.
- **Signos:** pinchazo, tightness, dolor en flexión profunda.
- **Protocolo:**
  - **Fase 1:** test/retest, resisted hip flexion 20–40% MVC, short-range isometrics tolerables.
  - **Fase 2:** internal rotation isométrica, kneeling lunge activo.
  - **Fase 3:** eccentric lunge 3×10, Warrior I/splits con soporte.
- **Red flags:** dolor persistente, bloqueo, síntomas articulares no mecánicos → derivar.
- **Referencias:** Apéndice, “Modifying Loads for the Anterior Hip”.

---

### Lesión / condición: Hombro sensible / capacidad del complejo escapulohumeral

- **Zona:** `shoulder`.
- **Etiología resumida:** intolerancia a carga, control insuficiente, variaciones morfológicas, posible patología de manguito/labrum.
- **Signos:** dolor en overhead, plank, inversiones, push-ups.
- **Protocolo:**
  - **Fase 1:** action/skill con bloque en 90°; plank elevado.
  - **Fase 2:** plank/side plank 30–45 s; push-up regressions.
  - **Fase 3:** push-up 3×10; inversiones con prop si apropiado.
- **Red flags:** dolor nocturno, debilidad marcada, trauma, síntomas persistentes → derivar.
- **Referencias:** Apéndice, “Shoulder Complex”; Cap. 5 ejemplos de Side Plank.

---

### Lesión / condición: Dolor lumbar inespecífico / flexion intolerance

- **Zona:** `lumbar`.
- **Etiología resumida:** multifactorial; el libro enfatiza capacidad, miedo, carga, variabilidad y pobre correlación estructural.
- **Signos:** molestias con flexión, sedestación, transiciones.
- **Protocolo general:**
  - Exposición progresiva a flexión/hinge.
  - Evitar flexión estática prolongada antes de cargas.
  - Core bracing ligero para tareas ligeras; fuerza de core para demandas mayores.
  - No usar TvA/core como cura universal.
- **Red flags:** síntomas neurológicos, trauma, dolor severo → derivar.
- **Referencias:** Cap. 6, “Spinal Flexion”, “Core Stability”; Cap. 5, “Injury Classification”.

---

### Lesión / condición: Osteoarthritis / cartílago degenerativo

- **Zona:** variable (rodilla, cadera, columna).
- **Etiología:** degeneración de cartílago, cambios en hueso subyacente; carga puede ser beneficiosa o sintomática según caso.
- **Manejo:**
  - Minimizar síntomas.
  - Ajustar carga día a día.
  - No forzar progresión agresiva.
  - Derivar a profesional.
- **Referencias:** Cap. 4, “Cells”; Apéndice, “Considerations and Contraindications”.

---

### Condición: Hypermobility spectrum

- **Zona:** global o localizada.
- **Etiología:** variante genética de colágeno; puede incluir laxitud, inestabilidad, dolor, síntomas sistémicos.
- **Manejo:**
  - No diagnosticar.
  - Priorizar co-contracción y control.
  - Evitar end range pasivo si no hay tensión.
  - Usar closed chain, bandas, oscilaciones, excéntricos.
  - Derivar si síntomas sistémicos.
- **Referencias:** Cap. 5, “Hypermobility”; Apéndice.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

- **Sueño:** el libro no ofrece recomendaciones específicas. ⚠️ No usar esta fuente para reglas de sueño.
- **Estrés:**
  - El libro incluye estrés psicológico como variable de carga mediante RPE.
  - Regla sugerida: si RPE elevado por estrés/fatiga, reducir volumen/intensidad y evitar spikes.
  - **Referencia:** Cap. 1, “Progressive Overload”.
- **Nutrición:** no cubre nutrición aplicada, salvo menciones indirectas de calorías/metabolismo. No usar como fuente nutricional.
- **Entrenar enfermo:** no cubre reglas tipo fiebre. Sin embargo:
  - En hot yoga, vigilar síntomas de heat illness.
  - Si enfermedad sistémica o fiebre, sentido común y derivación/no entrenamiento intenso.
- **Calentamiento/temperatura:**
  - Warm-up recomendado; tejidos calientes toleran mejor deformación.
  - Hot yoga: evidencia conflictiva; no asumir seguridad ni riesgo absoluto.
  - **Referencia:** Cap. 3, “Temperature”; p. 107.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal para redefinir “stretching” como `TensileLoadPrescription` y no como simple movilidad pasiva.
  - Reglas de progresión de capacidad para tendón: isométricos, excéntricos, concéntricos, carga alta, variabilidad.
  - SkillPaths para `proximal-hamstring-capacity`, `anterior-hip-capacity`, `shoulder-complex-capacity`.
  - Enriquecimiento de cues técnicos: co-contracción, push/pull, control de rango, preguntas abiertas de fuerza.
  - Salvaguardas de seguridad: no diagnóstico por estructura, no miedo a flexión, no overstretching dogmático, referral flags.
  - Motor de movilidad: distinguir cambios agudos por PRT/creep/tolerance de cambios crónicos por arquitectura/fuerza.

- **Limitaciones:**
  - No usar para diagnosticar tendinopatías, contracturas, OA, hiperlaxitud sistémica ni condiciones médicas.
  - No automatizar protocolos clínicos de fases inflamatorias sin supervisión.
  - Muchas extrapolaciones vienen de deporte/in vitro/cadáver; marcar con `EvidenceQualityTag`.
  - La población es yoga/recreativa; para atletas avanzados puede requerir cargas externas mayores que yoga bodyweight.
  - El libro no da dosis completas para todos los tejidos; no inventar números donde no existen.

- **Recomendaciones específicas:**
  1. Crear `rules/tensile-load.ts` con tipos `TensileLoadPrescription`, `LoadParameterSet`, `ViscoelasticEffect` y reglas de stretching agudo/crónico.
  2. Crear `rules/tendon-capacity.ts` con reglas de carga alta, excéntricos/isométricos, descanso ~72 h contextual, y referral flags.
  3. Añadir SkillPaths:
     - `proximal-hamstring-capacity`
     - `anterior-hip-capacity`
     - `shoulder-complex-capacity`
     - `spinal-flexion-tolerance` (opcional)
  4. Añadir `HypermobilitySpectrumFlag` y modificar reglas de end-range: si flag activo, exigir co-contracción antes de permitir rangos máximos.
  5. Añadir `InsertionalCompressionRisk` para forward bends, Achilles dorsiflexion, gluteal adduction, etc., con regresiones automáticas si hay dolor.
  6. Usar el libro para poblar `primaryCues`, `commonFaults`, `bailTechniques` en pasos de habilidades, especialmente con cues de push/pull y control de pelvis/columna.
  7. No usar imaging ni diagnóstico estructural como trigger automático de restricción; usar `TissueCapacityState` y síntomas funcionales.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# Implementación accionable — *Yoga Biomechanics: Stretching Redefined*

A continuación hago una **auditoría de completitud**, señalo lo que **no puedo verificar sin las ayudas visuales del libro** y luego desarrollo las **7 recomendaciones** como especificación funcional lista para que otro agente la convierta en reglas, metadatos y SkillPaths.

---

## 0. Auditoría de datos y lagunas por ausencia de ayudas visuales

### 0.1 Lo que ya está extraído de forma suficiente

Con el texto disponible, quedan cubiertos los núcleos principales del libro:

- Biomecánica como estudio de fuerza/carga, no solo alineación.
- Parámetros de carga: magnitud, localización, dirección, duración, frecuencia, velocidad, aceleración.
- Principios de adaptación: SAID, sobrecarga progresiva, carga variable, subcarga vs sobrecarga.
- Tipos de estiramiento: balístico, dinámico, estático pasivo, estático activo, PNF/isométrico, estiramiento con resistencia/excéntrico.
- Efectos agudos del estiramiento sobre rendimiento, fuerza, potencia y lesiones.
- Passive Resistance Torque (PRT), creep, stress relaxation, histéresis, strain-rate sensitivity, ciclo de carga y temperatura.
- Estrés/deformación, curva estrés-deformación, regiones de colágeno, stiffness/compliance.
- Histología básica: ECM, colágeno, elastina, ground substance, fibroblastos, mecanotransducción.
- Turnover de colágeno y tiempos de recuperación tendinosa tras carga alta.
- Fases de reparación tisular, grados de lesión, capacidad, dolor y estructura.
- Tendinopatía como intolerancia a carga, modelo de capacidad y “donut analogy”.
- Compresión insertional y su relación con ciertas molestias en yoga.
- Hipermovilidad como espectro, control activo y no diagnóstico por parte del profesor de yoga.
- Seguridad en yoga: eventos adversos en RCTs, lesiones reportadas en imaging, encuestas positivas.
- Perspectivas emergentes: biotensegrity, flexión espinal, squat vs stoop, core stability, postura/alineación, cueing por capacidad.
- Apéndice: progresiones para isquiotibial proximal, cadera anterior y complejo de hombro.

### 0.2 Información que requiere imágenes o descripciones visuales adicionales

Hay datos que **no puedo completar con total precisión** sin las figuras del libro:

| Área afectada | Qué falta sin imágenes | Impacto |
|---|---|---|
| Apéndice, figuras A1–A138 | Setup exacto de posturas, colocación de bloques/sillas/paredes, apoyos, ángulos aproximados, variantes y regresiones visuales | Afecta a medios de instrucción, validación visual de técnica y `SkillStep.mediaRef` |
| Compensaciones de hombro/columna | Ejemplos visuales de flexión de hombro compensada con extensión lumbar, aducción de hombro, flexión de codos | Afecta a detección automática de fallos |
| Chair Pose y morfología | Variaciones visuales según fémures largos/cortos y columna larga/corta | Afecta a reglas de alineación individualizada |
| Forward bend/hinge | Diferencia visual entre flexión lumbar, hinge de cadera y combinación | Afecta a técnica y progresión de columna |
| Curvas estrés-deformación/histéresis | Forma exacta de las curvas en figuras | No bloquea reglas; los valores numéricos clave sí están en texto |
| Compresión insertional | Visualización del tendón comprimiéndose contra el hueso en rangos finales | No bloquea reglas; sí ayudaría a medios educativos |
| Paginación exacta | La extracción muestra pocas páginas visibles; muchas secciones no traen número de página continuo | Afecta a citas exactas por página |

**Recomendación:** si quieres que el sistema genere tarjetas visuales o validación de técnica, necesitaré las figuras del apéndice y, como mínimo, las figuras de técnica/compensación. Sin ellas, puedo dejar criterios verbales y gates de progresión, pero no chequeo visual fino.

---

# 1. Recomendación 1 — Crear módulo `tensile-load`

## 1.1 Entidades principales

### `TensileLoadPrescription`

Representa cualquier “estiramiento” o carga tensil, no solo movilidad pasiva.

Campos sugeridos:

- `id`
- `name`
- `focusIds`: `mobility`, `tendon-health`, `strength`, `hypertrophy`, `pain-management`
- `bodyZoneIds`
- `movementPatternIds`
- `targetTissue`: `muscle`, `tendon`, `ligament`, `jointCapsule`, `myofascial`
- `modality`: `ballistic`, `dynamic`, `static-passive`, `static-active`, `PNF-isometric`, `resistance-eccentric`
- `contractionType`: `none`, `concentric`, `isometric`, `eccentric`
- `loadParameters`: `magnitude`, `location`, `direction`, `duration`, `frequency`, `velocity`, `acceleration`
- `dosage`: `sets`, `reps`, `holdSeconds`, `restSeconds`, `tempo`, `sessionsPerWeek`
- `intendedOutcome`: `acuteROM`, `chronicROM`, `stretchTolerance`, `architecture`, `tendonCapacity`, `performancePrep`
- `temporaryEffect`: true/false
- `evidenceTag`
- `cautions`

### `StretchModality`

| Modalidad | Definición operativa |
|---|---|
| `ballistic` | Rebotes repetidos para entrar en rango |
| `dynamic` | Movimientos lentos y repetitivos que aumentan rango progresivamente |
| `static-passive` | Mantener posición con soporte externo: gravedad, pared, correa, suelo |
| `static-active` | Mantener posición usando musculatura opuesta/agónica sin soporte externo |
| `PNF-isometric` | Contracción isométrica del tejido objetivo en rango final, típicamente seguida de mayor estiramiento pasivo |
| `resistance-eccentric` | Alargamiento controlado contra resistencia; se detiene cuando se pierde control |

Nota importante: una misma postura puede ser activa para una persona y pasiva para otra según la fuente de fuerza.

### `ViscoelasticEffect`

Campos sugeridos:

- `creep`: true
- `stressRelaxation`: true
- `hysteresis`: true
- `strainRateSensitivity`: true
- `cycleEffect`: true
- `temperatureEffect`: true
- `temporary`: true
- `note`: “No interpretar como cambio estructural permanente”

### `EvidenceQualityTag`

Campos sugeridos:

- `level`: `high`, `moderate`, `low`, `in-vitro`, `anecdotal`, `expert-opinion`
- `extrapolationWarning`
- `clinicalSupervisionRequired`
- `temporaryOnly`

---

## 1.2 Reglas del módulo `tensile-load`

### Regla: `stretch-general-dose`

- **Objetivo:** dosis básica de flexibilidad general.
- **Valores:**
  - Rutina completa: `<10 min`.
  - Frecuencia: `2–3 días/semana`.
  - Duraciones comunes por estiramiento: `15–60 s`.
- **Condiciones:** población general, objetivo ROM básico.
- **Acción del sistema:** no prescribir más volumen si el objetivo es solo mantenimiento general.
- **Respaldo:** Cap. 2, “Conventional Stretching”.

---

### Regla: `stretch-modality-classification`

- **Objetivo:** clasificar correctamente una postura como pasiva o activa.
- **Lógica:**
  - Si hay soporte externo o la gravedad sostiene la posición: `static-passive`.
  - Si el usuario debe producir fuerza interna para sostener la posición: `static-active`.
- **Ejemplo del libro:** Seated Forward Bend puede ser pasiva si el tronco descansa sobre piernas; activa si el tronco se sostiene contra gravedad.
- **Acción del sistema:** no etiquetar una postura como “stretch” sin identificar fuente de carga.
- **Respaldo:** Cap. 2, “Conventional Stretching”.

---

### Regla: `pre-activity-stretch-selection`

- **Objetivo:** elegir modalidad de estiramiento antes de actividad.
- **Valores:**
  - Dinámico: preferido antes de actividad.
  - Estático/PNF: mejor después o separado, salvo especificidad deportiva.
- **Acción del sistema:** si hay rendimiento inminente, priorizar dinámico.
- **Respaldo:** Cap. 2, “Why We Stretch”.

---

### Regla: `static-stretch-performance-guard`

- **Objetivo:** limitar déficit agudo de rendimiento por estiramiento estático.
- **Valores:**
  - Estiramientos `<60 s`: disminución promedio de rendimiento ~`1.1%`.
  - Estiramientos `>60 s`: disminución promedio ~`4.6%`.
  - Estático global: ~`3.7%` de déficit.
  - PNF: ~`4.4%` de déficit.
  - Dinámico: mejora ~`1.3%`.
  - Fuerza: déficit ~`4.8%`.
  - Potencia-velocidad: déficit ~`1.3%`.
  - Tareas de rango corto: estático puede perjudicar ~`10.2%`.
  - Tareas de rango largo: estático puede mejorar ~`2.2%`.
- **Condición:** rendimiento máximo en fuerza/potencia/velocidad.
- **Acción del sistema:** evitar estático/PNF largos antes de fuerza/potencia; permitir dinámico.
- **Respaldo:** Cap. 2, “Why We Stretch”.

---

### Regla: `stretch-injury-prevention-limits`

- **Objetivo:** no vender estiramiento como prevención universal de lesiones.
- **Valores cualitativos:**
  - Estático/PNF puede reducir levemente lesiones musculares relacionadas con sprinting.
  - No efecto claro en lesiones de resistencia, overuse o todas las causas.
  - No se observaron efectos adversos agudos.
- **Acción del sistema:** no usar estiramiento como regla de prevención general de lesiones.
- **Respaldo:** Cap. 2, “Why We Stretch”.

---

### Regla: `prt-acute`

- **Objetivo:** modelar reducción aguda de resistencia pasiva.
- **Protocolo citado:**
  - `5 × 90 s` de estiramiento.
  - `30 s` entre estiramientos.
  - La PRT vuelve a baseline aproximadamente `1 h` después.
- **Acción del sistema:** etiquetar efecto como temporal.
- **Respaldo:** Cap. 2, “Passive Resistance Torque”.

---

### Regla: `prt-chronic`

- **Objetivo:** modelar adaptación crónica de resistencia pasiva.
- **Protocolo citado:**
  - `4 semanas`.
  - `2 × 60 s`.
  - `2 veces/día`.
  - Medición final `24 h` después de última dosis.
- **Acción del sistema:** diferenciar efecto agudo vs crónico.
- **Respaldo:** Cap. 2, “Passive Resistance Torque”.

---

### Regla: `long-hold-prr`

- **Objetivo:** reconocer que holds largos pueden seguir reduciendo PRT.
- **Valores:**
  - Holds de `1–5 min`.
  - Tras `1 min`, la reducción aún no era significativa frente a baseline.
  - `4–5 min` redujeron más que `1 min`.
  - `5 min` redujo más que `2 min`.
- **Condición:** estudio en dorsiflexión de tobillo en hombres jóvenes.
- **Acción del sistema:** no extrapolar automáticamente a todas las articulaciones/poblaciones.
- **Respaldo:** Cap. 2, “Passive Resistance Torque”.

---

### Regla: `stretch-tolerance-sensory`

- **Objetivo:** interpretar ROM como combinación de mecánica y tolerancia sensorial.
- **Datos:**
  - Estudios con anestesia muestran mayor ROM cuando disminuye control neural.
  - Anestesia espinal produjo mayor aumento de ROM.
  - En artroscopia de rodilla, ROM pasiva promedio aumentó ~`13.4°` en flexión y ~`3°` en extensión bajo anestesia.
- **Acción del sistema:** no asumir que mayor ROM implica tejido más largo.
- **Respaldo:** Cap. 2, “Stretch Tolerance”.

---

### Regla: `passive-stretch-architecture-limit`

- **Objetivo:** no usar estiramiento pasivo como vía principal para cambiar arquitectura muscular.
- **Valores:**
  - Meta-análisis citado: el estiramiento solo produce cambios “triviales” en longitud de fascículos y ángulo de pennación.
- **Acción del sistema:** si el objetivo es arquitectura muscular, priorizar excéntricos, isométricos en rango largo o carga alta.
- **Respaldo:** Cap. 2, “Muscle Length”.

---

### Regla: `high-intensity-passive-stretch-advanced`

- **Objetivo:** registrar protocolo excepcional de estiramiento pasivo de alta intensidad.
- **Valores:**
  - `450 s` = `7.5 min` por estiramiento.
  - Intensidad: máxima tolerable justo antes de dolor.
  - Ajuste cada `90 s` para profundizar.
  - Frecuencia prescrita: `5 veces/semana` durante `8 semanas`.
  - Adherencia real: ~`3.1 sesiones/semana`.
  - Resultados: longitud de fascículo +`13.6%`; ángulo de fascículo -`15.1%`; ROM +`14.2°`.
- **Advertencia:** muestra pequeña, población joven, incomodidad alta, riesgo de baja adherencia.
- **Acción del sistema:** no usar como protocolo general; solo como referencia avanzada con supervisión.
- **Respaldo:** Cap. 2, Research Summary “High Intensity Stretch”, p. 72.

---

### Regla: `eccentric-long-fascicle`

- **Objetivo:** usar excéntricos de alta magnitud para arquitectura y fuerza en rango largo.
- **Datos:**
  - Nordic hamstring curl durante `10 semanas` aumentó longitud de fascículos.
  - Transiciones con peso corporal pueden fortalecer, pero no siempre desplazan la curva longitud-tensión.
- **Acción del sistema:** exigir magnitud suficiente si el objetivo es arquitectura/fuerza en rango largo.
- **Respaldo:** Cap. 2, “Eccentric Contractions”.

---

### Regla: `isometric-long-length`

- **Objetivo:** reconocer isométricos en rango largo como estímulo de arquitectura.
- **Dato:** entrenamiento isométrico en posición alargada puede aumentar longitud de fascículos.
- **Acción del sistema:** usar posturas isométricas con co-contracción real, no solo forma pasiva.
- **Respaldo:** Cap. 2, “Eccentric Contractions”.

---

### Regla: `contraction-specificity-over-type`

- **Objetivo:** priorizar especificidad e intensidad sobre tipo de contracción.
- **Dato:** el tipo de contracción importa menos que especificidad e intensidad para cambios arquitectónicos.
- **Acción del sistema:** no elegir solo “excéntrico” por defecto; evaluar magnitud, tarea y tolerancia.
- **Respaldo:** Cap. 2, “Eccentric Contractions”.

---

### Regla: `contracture-stretch-limit`

- **Objetivo:** no usar estiramiento pasivo como solución principal en contracturas.
- **Datos:**
  - Cambios de ROM en contracturas neurológicas/ortopédicas ~`1–2°`.
  - Rango máximo observado ~`0–3°`.
  - Conclusión citada: el estiramiento no tiene efectos clínicamente importantes sobre movilidad articular en contractura.
- **Acción del sistema:** derivar a manejo clínico; no prometer reversión estructural.
- **Respaldo:** Cap. 3, Research Summary “Cochrane Review on Stretching”, p. 106.

---

### Regla: `in-vitro-stretch-research-caution`

- **Objetivo:** registrar investigación in vitro sin prescripción directa.
- **Datos:**
  - En tendones bioingenierizados, `3%` y `6%` strain favorecieron cierre de heridas.
  - `12%` empeoró resultados.
  - Duraciones de `3–5 min` fueron más efectivas que `1 min`.
- **Acción del sistema:** etiquetar como hipótesis, no como protocolo clínico.
- **Respaldo:** Cap. 4, Research Summary “Stretching and Tissue Repair”, p. 130.

---

## 1.3 Validaciones del módulo `tensile-load`

El sistema debe validar que:

1. Toda prescripción de movilidad declare si es aguda o crónica.
2. Ningún cambio de ROM se interprete automáticamente como alargamiento estructural.
3. Los protocolos de alta intensidad requieran flag de supervisión.
4. Los efectos viscoelásticos se marquen como temporales.
5. Se distinga entre flexibilidad pasiva y movilidad activa/controlada.

---

# 2. Recomendación 2 — Crear módulo `tendon-capacity`

## 2.1 Entidades principales

### `TissueCapacityState`

Campos sugeridos:

- `bodyZoneId`
- `structureStatus`: `normal`, `suspected-pathic`, `diagnosed-pathic`
- `functionStatus`: `full`, `limited`, `pain-limited`
- `painStatus`: `none`, `mild`, `moderate`, `severe`
- `loadToleranceScore`
- `lastAggravatingLoad`
- `referralRequired`: true/false
- `notes`

Definición base del libro: un tejido está en plena capacidad cuando la persona puede realizar movimientos funcionales al volumen/frecuencia requeridos sin exacerbar síntomas ni causar lesión tisular.

### `TendonAdaptationProfile`

Campos sugeridos:

- `targetTendon`
- `loadMagnitude`
- `contractionTypes`: `isometric`, `concentric`, `eccentric`
- `weeklyFrequency`
- `recoveryWindowHours`
- `compressionRisk`
- `progressionGate`

### `RepairPhase`

| Fase | Duración | Implicación de carga |
|---|---:|---|
| I: inflamatoria | `3–7 días` | Proteger; movilización ligera si se tolera; no carga agresiva |
| II: reparación/proliferación | `~4–6 semanas` | Carga baja/progresiva; exceso puede reactivar inflamación |
| III: remodelación/maduración | `~1–3 años` | Carga progresiva para organizar colágeno; paciencia |

---

## 2.2 Reglas del módulo `tendon-capacity`

### Regla: `tendon-load-magnitude`

- **Objetivo:** establecer carga mínima útil para adaptación tendinosa.
- **Valores:**
  - Rango general citado: `60–80% 1RM`.
  - Mínimo preferido según revisión actual: `~80% 1RM` durante `12 semanas`.
- **Acción del sistema:** marcar cargas ligeras como insuficientes para adaptación tendinosa robusta.
- **Respaldo:** Cap. 3, “Stiffness and Compliance”.

---

### Regla: `tendon-mvc-alternative`

- **Objetivo:** traducir carga a contextos sin 1RM.
- **Datos:**
  - `55% MVC` fue insuficiente comparado con `90% MVC` en isométricos repetidos durante `14 semanas`.
- **Acción del sistema:** en yoga, aumentar magnitud mediante palancas, unilateralidad, tempo, co-contracción o carga externa.
- **Respaldo:** Cap. 3, “Stiffness and Compliance”.

---

### Regla: `tendon-contraction-type`

- **Objetivo:** definir modalidades de contracción válidas.
- **Valores:**
  - Concéntrico, isométrico y excéntrico pueden aumentar stiffness tendinoso.
  - Excéntrico suele producir mayores adaptaciones.
  - Magnitud importa más que tipo de contracción.
- **Acción del sistema:** no restringir a excéntricos; priorizar tolerancia y magnitud.
- **Respaldo:** Cap. 3, “Stiffness and Compliance”.

---

### Regla: `tendon-variable-loading`

- **Objetivo:** añadir variabilidad de carga.
- **Valores:** cualitativo.
  - Tendones responden a variación de ritmo y dirección.
  - Etapas tempranas: carga lenta/sistemática.
  - Etapas tardías: variar rate/dirección.
- **Acción del sistema:** evitar repetición idéntica prolongada sin progresión.
- **Respaldo:** Cap. 1, “Variable Loading”; Cap. 3.

---

### Regla: `collagen-turnover-recovery`

- **Objetivo:** modelar recuperación tras carga tendinosa alta.
- **Datos:**
  - Vida media del colágeno: `300–500 días`.
  - Tras ejercicio de alta intensidad:
    - Síntesis de colágeno pico ~`24 h`.
    - Degradación pico y descenso antes.
    - Degradación neta durante primeras `24 h`.
    - Equilibrio alrededor de `72 h`.
- **Acción del sistema:** sugerir recuperación tras sesiones de alta carga tendinosa, sin regla rígida diaria.
- **Respaldo:** Cap. 4, “Cells”; Research Summary p. 130.

---

### Regla: `progressive-overload-no-spikes`

- **Objetivo:** progresar carga sin picos.
- **Datos:**
  - Spikes de entrenamiento asociados a mayor riesgo de lesión.
  - RPE sugerido: `tiempo × esfuerzo 1–10`.
  - Comparar solo perfiles de carga similares.
- **Acción del sistema:** alertar ante aumentos bruscos de volumen/intensidad.
- **Respaldo:** Cap. 1, “Progressive Overload”.

---

### Regla: `underloading-risk`

- **Objetivo:** evitar que el sistema trate la evitación de carga como solución por defecto.
- **Datos:**
  - La subcarga reduce capacidad.
  - Astronautas pierden fuerza tendinosa y densidad ósea en ~`90 días` sin gravedad.
  - La mejor forma de aumentar capacidad de cargar peso en manos es cargar peso progresivamente.
- **Acción del sistema:** si una zona está subcargada, proponer exposición gradual, no solo descanso.
- **Respaldo:** Cap. 1, “Adaptation”; Cap. 5, “Tensile Loading”.

---

### Regla: `repair-phase-loading`

- **Objetivo:** guiar carga según fase de reparación.
- **Valores:**
  - Fase I: `3–7 días`, protección y movilización tolerable.
  - Fase II: `~4–6 semanas`, carga baja/progresiva.
  - Fase III: `~1–3 años`, carga progresiva para remodelar.
- **Advertencia:** exceso de estrés en fase II puede generar inflamación recurrente/fibrosis persistente.
- **Acción del sistema:** no permitir progresión rápida si hay síntomas agudos.
- **Respaldo:** Cap. 5, “Biochemistry of Repair”.

---

### Regla: `optimal-loading-acute-management`

- **Objetivo:** registrar manejo agudo moderno.
- **Datos:**
  - RICE no tiene evidencia suficiente para aceptarse/rechazarse categóricamente.
  - El libro menciona MEAT y luego POLICE, con carga óptima como elemento central.
  - Hielo puede ser analgésico no farmacológico, pero no necesariamente modifica reparación.
- **Acción del sistema:** no automatizar hielo como tratamiento; sugerir movilización ligera si tolerable y derivar si hay duda.
- **Respaldo:** Cap. 5, “Biochemistry of Repair”.

---

### Regla: `pathic-tendon-loading`

- **Objetivo:** aplicar carga con criterio en tendones patológicos.
- **Concepto:** “donut analogy”.
  - La patología es el agujero.
  - El tejido sano alrededor es el donut.
  - Cargar el tejido sano puede tener efecto protector.
- **Advertencia:** no cargar de forma temeraria.
- **Acción del sistema:** priorizar capacidad y tolerancia, no reposo absoluto.
- **Respaldo:** Cap. 5, “Pathology”; “Biochemistry of Repair”.

---

### Regla: `injury-grade-context`

- **Objetivo:** contextualizar lesiones estructurales.
- **Valores:**
  - Grado I: pocas fibras dañadas.
  - Grado II: desgarro parcial.
  - Grado III: desgarro completo.
  - Rupturas completas poco comunes en tendones sanos.
  - En estudio de rupturas espontáneas, `97%` tenía patología subyacente.
  - `80%` no reportó dolor antes de ruptura.
- **Acción del sistema:** no usar dolor como único proxy de daño estructural.
- **Respaldo:** Cap. 5, “Injury Classification”.

---

### Regla: `pain-exercise-chronic`

- **Objetivo:** manejar dolor durante ejercicio en condiciones crónicas.
- **Datos:**
  - En dolor musculoesquelético crónico, permitir/reproducir síntomas mostró mejor reducción de dolor a corto plazo frente a evitarlos.
  - A largo plazo, no hubo diferencias significativas.
- **Acción del sistema:** no usar esta regla en lesiones agudas, red flags o dolor severo no evaluado.
- **Respaldo:** Cap. 5, Research Summary “Symptoms with Exercise”, p. 158.

---

### Regla: `referral-flags`

- **Objetivo:** derivar fuera del alcance del yoga.
- **Condiciones:**
  - Dolor persistente o progresivo.
  - Capacidad que disminuye con el tiempo.
  - Condiciones no musculoesqueléticas.
  - Fracturas compuestas.
  - Patología diagnosticada que requiere manejo clínico.
  - Síntomas sistémicos.
- **Acción del sistema:** bloquear progresión automática y sugerir profesional de salud.
- **Respaldo:** Apéndice, “Considerations and Contraindications”; Cap. 5.

---

## 2.3 Validaciones del módulo `tendon-capacity`

El sistema debe validar:

1. Ninguna regla de tendón se aplique como diagnóstico.
2. Toda progresión tenga gate por síntomas.
3. Toda carga alta tenga opción de regresión.
4. La compresión insertional se considere cuando haya dolor en rangos finales.
5. La recuperación de ~72 h se use como guía contextual, no absoluta.

---

# 3. Recomendación 3 — Añadir SkillPaths principales

## 3.1 SkillPath: `proximal-hamstring-capacity`

### Objetivo

Aumentar capacidad del tendón isquiotibial proximal para tolerar forward bends, lunges, puentes y cargas en flexión de cadera.

### Requisitos previos

- Ausencia de dolor agudo severo.
- Si hay tendinopatía diagnosticada, estar con alta clínica o en fase tolerante.
- No cargar fracturas ni condiciones médicas no musculoesqueléticas.

### Tabla de progresión

| Step | Nombre | Descripción | Dosis | Criterio para avanzar | Fallos comunes |
|---:|---|---|---|---|---|
| 1 | Isometric Hamstring Bridge | Puente con énfasis en posterior de cadera; acción de empujar y tirar | `30–45 s`; hasta `5 reps` con `2 min` descanso | Mantener tensión isquiotibial sin dolor agravante | Hiperextensión lumbar; sin activación posterior |
| 2 | Bridge rotations | Rotación externa/abducción para bias biceps femoris/glute max; rotación interna/aducción para mediales/adductores | `30–45 s` | Mantener skill y tensión en variación | Perder acción; compensar con lumbar |
| 3 | Bridge constraints | Talones como contacto principal o superficie deslizante con restricción | `30–45 s` | Acceso a tensión posterior, útil en hiperlaxitud | Deslizar sin control; ausencia de tensión |
| 4 | Extended Bridge | Alejar pies de pelvis en incrementos de `10–15 cm`; bloques si hace falta | `30–45 s` | Mantener tensión sin dolor | Sobreestirar; pelvis colapsada |
| 5 | Eccentric Hamstring Slides | Deslizar pies hacia extensión manteniendo pelvis elevada | `15 reps`; `3–5 sets`; `2 min` descanso; tempo `3–5 s` | 15 reps controladas | Pelvis cae; deslizamiento rápido |
| 6 | Concentric Hamstring Slides | Regresar desde extensión manteniendo pelvis elevada | `10–15 reps` o fatiga; `3–5 sets`; `≥2 min` descanso | Control concéntrico sin colapso | Pelvis baja al regresar |
| 7 | Supported Lunges | Introducen flexión de cadera; manos en pared, bloques altos/bajos | Según tolerancia | Tolerar flexión con tensión posterior | Entrar en rango profundo demasiado pronto |
| 8 | Crescent / Warrior I regressions | Mayor demanda de flexión/extensión; usar silla o bloques | Según capacidad | Mantener skill sin síntomas | Compensar con columna |
| 9 | Active Forward Bends | Forward bends con tensión activa; profundidad limitada por control | Cualitativo | Mantener tensión isquiotibial | Caer en estiramiento pasivo profundo |
| 10 | Single-leg / external rotation variations | Warrior III, Triangle, Half Moon con soporte | Cualitativo | Mantener tensión en variación | Perder control pélvico |

### Gates de seguridad

- Progresar solo cuando el hold de `30–45 s` sea sostenible.
- Si aparecen síntomas: descansar unos días y regresar a progresión anterior.
- Si síntomas persisten: derivar.
- Adaptación sustancial puede tardar meses; marco completo `1–3 años`.

### Notas de riesgo

- Los forward bends profundos son potencialmente aggravantes si hay isquiotibial proximal subcargado.
- No eliminar forward bends para siempre; reintroducir con tensión activa y profundidad controlada.
- En hiperlaxitud, oscilar entre rodilla ligeramente doblada y más recta para mantener tensión.

---

## 3.2 SkillPath: `anterior-hip-capacity`

### Objetivo

Mejorar capacidad de cadera anterior para flexión profunda, pinches, lunges y posturas que exigen flexión/extensión de cadera.

### Requisitos previos

- Si hay dolor agudo persistente, derivar.
- No asumir que “cadera anterior apretada” equivale a tejido corto; frecuentemente hay subcarga de flexores.

### Test/retest

Usar una de estas posiciones antes y después:

- Supine Knees-to-Chest.
- Child’s Pose.
- Garland Pose / Deep Squat.

Comparar sensación, facilidad y ROM.

### Tabla de progresión

| Step | Nombre | Descripción | Dosis | Criterio para avanzar | Fallos comunes |
|---:|---|---|---|---|---|
| 1 | Supine resisted hip flexion | Flexión de cadera resistida en supino | `20–40% MVC`; resistencia constante | Concéntrico/isométrico/excéntrico tolerado | Resistencia irregular; compensación lumbar |
| 2 | Marichi variation | Énfasis en cadera anterior de pierna extendida | `30–45 s` | Mantener skill sin flexión espinal excesiva | Colapso espinal; tilt posterior excesivo |
| 3 | Boat Pose straight leg | Single o double leg; espalda contra pared si hace falta | `30–45 s` | Mantener tensión anterior | Bent-knee Boat sin tensión anterior |
| 4 | Standing Marichi | Control activo de flexión de cadera de pie | `30–45 s` | Sin flexión de rodilla de apoyo ni lean back | Fingir ROM con tronco |
| 5 | Extended Hand-to-Big-Toe hover | Pierna suspendida sin soporte | `30–45 s` | Mantener carga anterior | Usar mano como sustituto de fuerza |
| 6 | Internal rotation side sitting | Press isométrico de pierna internamente rotada hacia suelo | Isométrico | Facilidad en flexión mejora | Forzar rango más allá de morfología |
| 7 | Kneeling Lunge | Isométrico/excéntrico/concéntrico para cadera posterior/anterior | Según tolerancia | Mantener acción/skill | Shift pélvico excesivo |
| 8 | Eccentric Lunge | Pelvis fija; extensión de cadera posterior | `3 sets × 10 reps` | Pelvis sin shift vertical/horizontal | Levantar rodilla como objetivo |
| 9 | Warrior I regressions | Elevar pie delantero para reducir extensión lumbar/cadera | Cualitativo | Mantener skill sin dolor | Extensión lumbar compensatoria |
| 10 | Bigger pose regressions | Pigeon/splits con soporte en cadera posterior | Cualitativo | Mantener capacidad en rango | Forzar end range |

### Notas de riesgo

- Si hay pinching anterior en flexión profunda, combinar flexión con trabajo de rotación interna.
- Las adaptaciones agudas de ROM pueden ser efímeras; se requiere repetición crónica.
- No usar Boat con rodillas dobladas como regresión automática si impide sentir tensión anterior.

---

## 3.3 SkillPath: `shoulder-complex-capacity`

### Objetivo

Aumentar capacidad del complejo hombro-escápula para plank, push-up, overhead, inversiones y soportes.

### Requisito previo

- Si hay hombro doloroso no evaluado, progresión conservadora o derivación.

### Tabla de progresión

| Step | Nombre | Descripción | Dosis | Criterio para avanzar | Fallos comunes |
|---:|---|---|---|---|---|
| 1 | Action/skill con bloque | Reach desde hombros/tríceps/meñiques y desde pulgares/bíceps/pecho | `90–180°` flexión | Mantener push/pull sin compensación | Extensión lumbar; codos doblados |
| 2 | Plank regressions | Manos elevadas en pared/silla/bloques | `30–45 s` | Mantener skill | Codos hiperextendidos sin tensión |
| 3 | Plank progressions | Pies elevados, single-leg, hand placement variable | `30–45 s` | Control sin dolor | Colapso escapular |
| 4 | Side plank | Regresión en silla/bloque; progresión normal | `30–45 s` | Mantener acción | Hombro comprimido |
| 5 | Push-up progression | Chair push-up → standard → eccentric → low tricep plank | Construir hasta `~3 sets × 10 reps` | Control excéntrico/concéntrico | Bajar sin control; rango incompleto |
| 6 | Inversions con prop | Press/pull contra bloque/bolster para co-contracción | Según capacidad | Co-contracción sin miedo ni dolor | Inversión pasiva sin control |

### Notas específicas

- El rango de flexión de hombro debe determinarse por la capacidad de mantener skill sin doblar codos ni extender columna.
- En hiperlaxitud, agarrar bloque y doblar/estirar codos puede ayudar a encontrar tensión.
- Si una postura causa molestia, probar variación antes de eliminarla; si persiste, derivar.

---

## 3.4 SkillPath opcional: `spinal-flexion-tolerance`

### Objetivo

Recuperar tolerancia a flexión espinal y forward bends sin miedo ni síntomas.

### Tabla resumida

| Step | Nombre | Descripción | Gate |
|---:|---|---|---|
| 1 | Warm-up | Movimiento global antes de forward bends | Menor resistencia al movimiento |
| 2 | Segmental/global movement | Movilidad espinal en posiciones seguras | Sin síntomas agudos |
| 3 | Hinge + flexion | Combinar hinge de cadera y flexión espinal | Control de descenso |
| 4 | Progressive roll-ups/downs | Transiciones controladas | Sin dolor persistente |

### Reglas de seguridad

- No prohibir flexión espinal por defecto.
- Evitar flexión estática prolongada antes de tareas con carga.
- `5–10 min` de flexión sostenida pueden generar creep temporal.
- `1 h` de sedestación puede alterar patrones de relajación flexora.
- Si hay flexion intolerance clínica, derivar.

---

# 4. Recomendación 4 — Añadir `HypermobilitySpectrumFlag`

## 4.1 Entidad

### `HypermobilitySpectrumFlag`

Campos sugeridos:

- `flagSource`: `self-report`, `clinical-diagnosis`, `screening-tool`, `observed-signs`
- `hypermobilityLikely`: true/false
- `systemicSymptoms`: true/false
- `endRangeControlNeeded`: true/false
- `coContractionPossible`: true/false
- `referralRecommended`: true/false
- `notes`

Advertencia: el libro no entrega un protocolo de screening completo. El sistema no debe diagnosticar hiperlaxitud por sí solo.

## 4.2 Datos clave del libro

- La hiperlaxitud es un espectro.
- Puede presentarse como condición apenas detectable o como trastorno limitante.
- Existen numerosas mutaciones de colágeno; el texto menciona >1000 variantes.
- Puede asociarse a dolor crónico, ansiedad, propiocepción disminuida, moretones excesivos e irritabilidad gastrointestinal.
- Los síntomas sistémicos deben ser derivados a profesional de salud.
- La laxitud articular puede ser localizada o generalizada.
- Una rodilla ocasionalmente hiperextendida y sin síntomas no necesariamente es patológica.

## 4.3 Reglas de implementación

### Regla: `hypermobile-no-diagnosis`

- El sistema no diagnostica síndrome de hiperlaxitud.
- Solo registra flag si existe autodiagnóstico informado, diagnóstico clínico o screening externo.

### Regla: `hypermobile-end-range-control`

- Si `HypermobilitySpectrumFlag = true`:
  - No permitir trabajo pasivo en end range si no hay co-contracción.
  - Priorizar capacidad de generar tensión muscular.
  - Usar macro-bend o reducción de rango, no micro-bend automático sin tensión.

### Regla: `hypermobile-co-contraction-required`

- Toda progresión requiere mantener acción/skill.
- Si el usuario no puede mantener tensión, se regresa el rango.

### Regla: `hypermobile-tools`

Opciones recomendadas:

- Closed chain.
- Bandas o correas para reemplazar tensión interna insuficiente.
- Oscilaciones o movimientos lentos en lugar de holds estáticos largos.
- Excéntricos para mejorar propiocepción.
- Constraints para acceder a tensión, como talones o superficie deslizante.

### Regla: `hypermobile-systemic-referral`

- Si hay síntomas sistémicos, derivar.
- El profesor de yoga no maneja condiciones multisistémicas.

---

# 5. Recomendación 5 — Añadir `InsertionalCompressionRisk`

## 5.1 Entidad

### `InsertionalCompressionRisk`

Campos sugeridos:

- `tendon`
- `compressionSite`
- `jointPosition`
- `associatedMovementPattern`
- `symptomSensitive`: true/false
- `avoidRange`
- `loadWithoutCompressionFirst`
- `eccentricReintroduction`
- `referralIfPersistent`

## 5.2 Tabla de sitios de compresión insertional

| Tendón | Sitio de compresión | Posición articular | Implicación en yoga |
|---|---|---|---|
| Isquiotibial proximal | Tuberosidad isquiática | Flexión de cadera | Forward bends, lunges, flexión profunda |
| Tendón de Aquiles | Calcáneo | Dorsiflexión de tobillo | Estiramientos de pantorrilla, dorsiflexión profunda |
| Gluteus medius | Trocánter mayor | Aducción de cadera | Posiciones que carguen aducción profunda |
| Quadriceps | Cóndilo femoral | Flexión de rodilla | Squats profundos, rodilla flexionada |
| Adductor longus | Rama púbica | Abducción y extensión de cadera | Posiciones de apertura/extensión de cadera |
| Long head of biceps | Surco bicipital | Extensión de hombro | Extensión de hombro cargada |
| Pectoralis major | Tuberosidad humeral | Rotación externa de hombro | Aperturas/rotación externa cargada |
| Supraspinatus | Tuberosidad mayor | Aducción de hombro | Aducción cargada del hombro |

## 5.3 Lógica de implementación

### Regla: `compression-symptom-detector`

Si:

- Usuario reporta dolor en sitio insertional.
- La postura implica compresión en ese sitio.
- El dolor aparece en rango profundo.

Entonces:

1. Reducir temporalmente el rango compresivo.
2. Cargar el tejido en tensión sin compresión primero.
3. Reintroducir compresión lentamente con excéntricos controlados.
4. Derivar si persiste.

### Regla: `hamstring-insertional-compression`

- En dolor de isquiotibial proximal:
  - Evitar temporalmente flexión profunda de cadera.
  - Priorizar puentes, slides y tensión activa.
  - Reintroducir forward bends con profundidad conservadora.

### Regla: `achilles-compression`

- Para cargar Aquiles en tensión sin compresión: plantarflexión.
- Para reintroducir compresión: descenso excéntrico controlado desde bloque hacia dorsiflexión.

### Regla: `warrior-iii-provocation`

- Warrior III puede combinar tensión alta y compresión.
- Si hay tendón sensitivo, usar regresión con soporte y menor rango.

---

# 6. Recomendación 6 — Biblioteca de cues, fallos y técnicas de salida

## 6.1 Cues para isquiotibial proximal

### `primaryCues`

- “Desde la parte posterior de la rodilla, alcanza hacia el talón.”
- “Mantén esa acción y lleva el isquiotibial inferior hacia el isquion.”
- “Empuja y tira simultáneamente.”
- “Mantén la tensión al entrar, sostener y salir.”
- “Relaja durante el descanso.”

### `commonFaults`

- Hiperextender lumbar en puente.
- No sentir tensión isquiotibial.
- Deslizar rápido en slides.
- Dejar caer la pelvis.
- Entrar en forward bend profundo sin tensión activa.
- En hiperlaxitud, quedar en rango final sin control muscular.

### `bailTechniques`

- Reducir profundidad de forward bend.
- Doblar ligeramente rodillas.
- Usar bloques bajo manos.
- Volver a puente isométrico corto.
- Descansar unos días si hay síntomas.
- Derivar si persiste.

---

## 6.2 Cues para cadera anterior

### `primaryCues`

- “Alarga desde el pliegue de cadera hacia la rodilla.”
- “Alarga desde el pliegue de cadera hacia el hombro.”
- “Eleva muslo y pecho.”
- “Mantén la acción al entrar, sostener y salir.”

### `commonFaults`

- Usar flexión espinal para fingir flexión de cadera.
- Tilt posterior excesivo.
- Boat con rodillas dobladas sin tensión anterior.
- Shift pélvico en eccentric lunge.
- Forzar splits/pigeon sin soporte.

### `bailTechniques`

- Apoyar espalda contra pared en Boat.
- Usar silla/bloque para reducir demanda.
- Soportar cadera posterior en pigeon/splits.
- Regresar a supine resisted hip flexion.
- Derivar si hay dolor persistente.

---

## 6.3 Cues para hombro/plank/push-up

### `primaryCues`

- “Reach desde la parte posterior del hombro, tríceps y meñique.”
- “Reach desde pulgar, bíceps y parte interna del hombro.”
- “Empuja el suelo y aléjate de él.”
- “Mantén push/pull al entrar, sostener y salir.”

### `commonFaults`

- Extender columna para simular flexión de hombro.
- Adicionar hombros y doblar codos en Downward Dog.
- Codos hiperextendidos sin tensión muscular.
- Bajar rápido en push-up.
- Invertir sin co-contracción.

### `bailTechniques`

- Elevar manos en pared/silla/bloques.
- Reducir rango de flexión de hombro.
- Usar bloque para press/pull en inversiones.
- Volver a plank corto.
- Derivar si persiste dolor.

---

## 6.4 Cues generales de fuerza/co-contracción

### `primaryCues`

- “Empuja las manos contra el suelo y levanta desde las muñecas.”
- “Abraza los músculos hacia el hueso.”
- “Presiona y tira al mismo tiempo.”
- “Pon el freno al bajar.”
- “Alcanza con esfuerzo mientras intentas atraer.”

### `openEndedForceQuestions`

- “¿Qué pasa más arriba de la pierna cuando presionas el talón?”
- “¿Qué cambia si alcanzas con esfuerzo y a la vez intentas atraer?”
- “¿Puedes mantener tensión en este rango?”
- “¿Dónde desaparece la acción?”

### `commonFaults`

- Corregir estética sin evaluar capacidad.
- Indicar músculos aislados cuando el objetivo es tensión global.
- Asumir que una compensación es patológica.
- Over-bracing para tareas ligeras.
- Mantener posturas estáticas en flexión prolongada antes de cargar.

---

## 6.5 Mapeo a `SkillStep`

Para cada `SkillStep`, poblar:

- `primaryCues`: cues de acción/skill.
- `commonFaults`: fallos observables.
- `bailTechniques`: regresiones inmediatas.
- `progressionGate`: criterio de avance.
- `safetyFlags`: hiperlaxitud, compresión insertional, dolor persistente.
- `mediaRef`: pendiente de figuras A1–A138.

---

# 7. Recomendación 7 — Guardrails clínicos, no imaging y alcance del sistema

## 7.1 Regla: `no-imaging-trigger`

### Datos del libro

El libro reporta altas tasas de hallazgos asintomáticos:

- Hombros asintomáticos: `96%` con alguna anomalía.
- Labral tears de hombro en adultos asintomáticos: `72%` y `55%` según radiólogos.
- Jugadores de hockey asintomáticos: `77%` con hallazgos pélvicos/cadera; solo `20%` de labral tears reportó síntomas en 2 años.
- Columna cervical asintomática: `87.6%` con discos abultados.
- En personas de 20 años: `73.3%` hombres y `78.0%` mujeres con discos abultados cervicales.
- Revisión sistemática: `96%` de personas en sus 80s con degeneración discal; `37%` en sus 20s.

### Implementación

El sistema **no debe**:

- Restringir automáticamente por hallazgos de imaging.
- Usar “disco abultado”, “labral tear”, “rotator cuff tear” como prueba de fragilidad.
- Generar lenguaje catastrófico.

El sistema **sí debe**:

- Evaluar capacidad funcional.
- Evaluar síntomas bajo carga.
- Progresar según tolerancia.
- Derivar si hay pérdida de capacidad o síntomas persistentes.

---

## 7.2 Regla: `scope-of-practice`

### Alcance permitido

El sistema puede:

- Enseñar movimiento.
- Progresar capacidad.
- Ofrecer modificaciones.
- Promover fuerza, movilidad, balance y flexibilidad.
- Gestionar carga.

### Alcance prohibido

El sistema no debe:

- Diagnosticar patologías.
- Tratar enfermedades.
- Interpretar imágenes médicas.
- Prescribir rehabilitación clínica sin supervisión.
- Manejar condiciones sistémicas.
- Reemplazar fisioterapia o medicina.

---

## 7.3 Regla: `referral-red-flags`

Derivar si aparece:

- Dolor persistente o progresivo.
- Capacidad decreciente.
- Dolor agudo severo.
- Sospecha de fractura.
- Fractura compuesta.
- Condición médica no musculoesquelética.
- Síntomas sistémicos.
- Hiperlaxitud con síntomas sistémicos.
- Dolor que no responde a modificaciones conservadoras.

---

## 7.4 Regla: `osteoarthritis-symptom-led`

- En osteoarthritis, la carga puede reducirse para minimizar síntomas.
- El cartílago articular degenerativo tiene poca capacidad adaptativa.
- El sistema debe ajustar carga día a día.
- No aplicar progresión agresiva automática.

---

## 7.5 Regla: `compound-fracture-no-load`

- No cargar fracturas compuestas hasta que estén sanadas y autorizadas por profesional.
- El sistema debe bloquear progresión de fuerza en la zona afectada.

---

## 7.6 Regla: `hot-yoga-caution`

### Datos

- Un estudio reportó temperaturas core promedio de `103.2°F` en hombres y `102.0°F` en mujeres.
- Otro equipo, con medición diferente, reportó promedio de `100.3°F`.
- No hay conclusión clara sobre mayor riesgo de lesión de tejido conectivo.
- La temperatura interna es relativamente estable, pero el riesgo térmico depende de intensidad, hidratación y aclimatación.

### Implementación

- No afirmar que hot yoga es inseguro ni seguro universalmente.
- Recomendar hidratación, aclimatación y reducir intensidad si hay síntomas.
- Derivar si aparecen signos de enfermedad por calor.

---

## 7.7 Regla: `bone-health-yoga-insufficient`

### Datos

- Ground reaction force:
  - Caminar: `1.0–1.5×` peso corporal.
  - Correr: `2.5–3.5×`.
  - Hatha flow yoga: generalmente `<2×`, comparable a caminar.
- Yoga por sí solo puede no entregar estímulo óseo suficiente.
- Heavy lifting puede ser seguro/efectivo en mujeres mayores con osteoporosis en contexto supervisado.

### Implementación

- Si el objetivo es densidad ósea:
  - No presentar yoga como única intervención.
  - Sugerir impacto, carrera, saltos o resistencia externa si procede.
  - Marcar supervisión en osteoporosis.

---

## 7.8 Regla: `headstand-entry-load`

### Datos

- Fuerza máxima en corona de cabeza: `40–48%` del peso corporal.
- `51%` de participantes superó ~`300 N`.
- Pike entry produce menor fuerza en entrada/hold que kick-up o curl-up.
- Los límites de cadáver no representan capacidad adaptativa viva.

### Implementación

- No recomendar headstand a usuarios sin capacidad de hombro/core.
- Preferir pike entry si se practica.
- Bloquear progresión si hay cervical no evaluada o síntomas.

---

## 7.9 Regla: `tree-pose-context`

### Datos

- En adultos mayores:
  - Pie en suelo con soporte de pared redujo momento abductor de rodilla en `54–71%`.
  - Pie debajo de rodilla sin pared produjo `8–20%` mayor momento que caminar.
- No hay respuesta binaria “evitar rodilla”.

### Implementación

- Permitir variantes según capacidad.
- No prohibir apoyo en rodilla por defecto.
- Regresar si hay dolor o baja capacidad.

---

## 7.10 Regla: `posture-not-pathology`

### Datos

- La postura “normal” es una construcción.
- En una muestra asintomática:
  - `85%` hombres y `75%` mujeres presentaban anterior pelvic tilt.
  - Solo `9%` hombres y `18%` mujeres tenían pelvis neutra.
- La morfología afecta alineación; fémures largos/cortos cambian Chair Pose.
- Beneficios de alineación pueden deberse a novedad de carga.
- Beneficios disminuyen cuando la práctica se vuelve muy repetitiva.

### Implementación

- No usar alineación como diagnóstico de patología.
- Permitir variabilidad morfológica.
- Priorizar capacidad, tolerancia y variabilidad de carga.

---

## 7.11 Regla: `core-bracing-light-load`

### Datos

- Estabilidad espinal erguida sin carga requiere ~`1.7 ± 0.8% MVC`.
- Con carga de `32 kg`, ~`2.9 ± 1.4% MVC`.
- Core stabilization no es superior a otros ejercicios para dolor lumbar.
- El timing del transverso abdominal no debe interpretarse como debilidad.

### Implementación

- No exigir bracing máximo para tareas ligeras.
- Usar core strength para demandas mayores, arm balances y cargas altas.
- No vender core como cura universal del dolor lumbar.

---

## 7.12 Regla: `squat-stoop-choice`

### Datos

- Ni squat lift ni stoop lift son universalmente superiores.
- Entrenamiento de técnica no ha demostrado reducir lesiones laborales.
- Fuerza y flexibilidad mostraron más promesa.
- Con cargas pesadas, técnica importa más; en yoga bodyweight, hay más opciones.

### Implementación

- No imponer “siempre squat” o “siempre hinge”.
- Elegir según tarea, preferencia y capacidad.
- Priorizar capacidad de carga.

---

## 7.13 Regla: `scientific-literacy-guardrail`

### Principios

El sistema debe:

- Distinguir evidencia fuerte, débil, in vitro y anecdótica.
- No aceptar “plural de anécdotas = datos”.
- No confundir correlación con causalidad.
- No sobre-generalizar desde una muestra pequeña.
- Distinguir significancia estadística de relevancia clínica.
- Evitar conclusiones infladas.
- Marcar incertidumbre explícitamente.

### Implementación

Cada regla debe tener:

- `evidenceLevel`.
- `extrapolationWarning`.
- `clinicalSupervisionRequired`.
- `temporaryEffect` si corresponde.

---

## 7.14 Regla: `lifestyle-not-covered`

El libro no cubre suficientemente:

- Sueño.
- Nutrición.
- Reglas de entrenamiento con fiebre/enfermedad.

Por tanto:

- No usar este libro como fuente para sueño, nutrición o entrenamiento enfermo.
- Solo usar RPE como integración de estrés psicosocial.

---

# 8. Checklist final de completitud

| Capítulo / sección | Estado | Implementación |
|---|---|---|
| Biomecánica como fuerza | Completo | `LoadParameterSet` |
| Parámetros de carga | Completo | `TensileLoadPrescription` |
| GRF en yoga | Completo | `bone-health-yoga-insufficient` |
| SAID / progresión / variabilidad | Completo | `progressive-overload-no-spikes`, `tendon-variable-loading` |
| RPE | Completo | `progressive-overload-no-spikes` |
| Tipos de estiramiento | Completo | `StretchModality` |
| Rendimiento agudo | Completo | `static-stretch-performance-guard` |
| Lesiones y estiramiento | Completo | `stretch-injury-prevention-limits` |
| PRT agudo/crónico | Completo | `prt-acute`, `prt-chronic` |
| Long holds | Completo | `long-hold-prr` |
| Stretch tolerance | Completo | `stretch-tolerance-sensory` |
| Arquitectura muscular | Completo | `passive-stretch-architecture-limit`, `eccentric-long-fascicle`, `isometric-long-length` |
| Alta intensidad pasiva | Completo con advertencia | `high-intensity-passive-stretch-advanced` |
| Estrés/deformación | Completo | `CollagenStrainZone` |
| Stiffness/compliance | Completo | `tendon-load-magnitude` |
| Viscoelasticidad | Completo | `ViscoelasticEffect` |
| Temperatura/hot yoga | Completo con incertidumbre | `hot-yoga-caution` |
| ECM/colágeno/elastina | Completo | notas en `tendon-capacity` |
| Fibroblastos/mecanotransducción | Completo | principio de carga |
| Turnover de colágeno | Completo | `collagen-turnover-recovery` |
| In vitro stretch repair | Completo con advertencia | `in-vitro-stretch-research-caution` |
| Capacidad | Completo | `TissueCapacityState` |
| Patología tendinosa | Completo | `pathic-tendon-loading` |
| Fases de reparación | Completo | `repair-phase-loading` |
| Grados de lesión | Completo | `injury-grade-context` |
| Dolor/estructura | Completo | `no-imaging-trigger` |
| Seguridad yoga | Completo | `yoga-adverse-context` |
| Tensile loading | Completo | `tensile-load` |
| Compresión insertional | Completo | `InsertionalCompressionRisk` |
| Hipermovilidad | Completo para reglas generales | `HypermobilitySpectrumFlag` |
| Biotensegrity | Completo conceptual | global tension en cueing |
| Flexión espinal | Completo | `spinal-flexion-tolerance` |
| Squat/stoop | Completo | `squat-stoop-choice` |
| Core stability | Completo | `core-bracing-light-load` |
| Postura/alineación | Completo | `posture-not-pathology` |
| Cueing/kinematics | Completo | biblioteca de cues |
| Apéndice isquiotibial | Completo en texto | SkillPath `proximal-hamstring-capacity` |
| Apéndice cadera anterior | Completo en texto | SkillPath `anterior-hip-capacity` |
| Apéndice hombro | Completo en texto | SkillPath `shoulder-complex-capacity` |
| Figuras del apéndice | Pendiente visual | necesita imágenes para media/form-check |
| Paginación exacta | Parcial | usar capítulo/sección; páginas visibles cuando existen |

---

## 9. Próximo paso recomendado para otros agentes

Con esta especificación, el siguiente agente debería:

1. Convertir `tensile-load` en reglas de movilidad con flags agudo/crónico.
2. Convertir `tendon-capacity` en reglas de fuerza/rehab con gates de síntomas.
3. Crear los tres SkillPaths principales con `SkillStep`, `primaryCues`, `commonFaults`, `bailTechniques` y `progressionGate`.
4. Añadir `HypermobilitySpectrumFlag` como modificador global de end-range.
5. Añadir `InsertionalCompressionRisk` como sistema de alertas por zona/postura.
6. Integrar guardrails de no imaging y derivación clínica.
7. Solicitar las figuras del apéndice si se desea validación visual o contenido multimedia.

---

## Ronda 3 — tras: «## Análisis de Brechas Visuales y Mitigación Biomecánica  ---  ### 1. Mitigación Teórica de las Brechas (Basada en el Texto)  Aunque la ause…»
Perfecto. Con tu análisis queda claro que **las figuras no bloquean la implementación de reglas, entidades ni progresiones**, siempre que se sustituyan por **descripciones procedimentales, parámetros mecánicos y referencias estructurales**. A continuación, integro tu mitigación y ejecuto las **7 recomendaciones** como paquete de implementación listo para ser convertido en reglas, metadatos y SkillPaths.

---

# Paquete de implementación final  
## *Yoga Biomechanics: Stretching Redefined* con mitigación de brechas visuales

> Criterio general: usar referencias estructurales `[Capítulo].[Sección]` en lugar de depender de paginación continua.  
> Ejemplo: `YB.Ch2.PassiveResistanceTorque`, `YB.Ch5.CompressiveForces`, `YB.Appendix.ProximalHamstring`.

---

## 0. Estado de brechas visuales y decisión de implementación

### 0.1 Brechas aceptadas como no bloqueantes

| Brecha visual | Mitigación aceptada | Impacto |
|---|---|---|
| Figuras A1–A138 del apéndice | Usar `proceduralKinematicDescription` + cues verbales + `mediaRef: pending-figure` | No bloquea SkillPaths; bloquea solo validación visual fina |
| Curvas estrés-deformación | Implementar `CollagenStrainZone` con valores conceptuales del texto | Útil para educación/salvaguardas, no para cálculo directo en usuario |
| Histéresis | Modelar como `ViscoelasticEffect.hysteresis` con flag de adaptación | No requiere gráfico para reglas básicas |
| Compensaciones hombro/columna | Definir `RelativeAngleFaultRule` con umbrales configurables | No inventar ángulos fijos; calibrar después |
| Chair Pose por morfología | Usar `MorphologyProfile` cualitativo: fémur largo/torso corto, etc. | Reglas de variación, no corrección estética |
| Paginación exacta | Usar `YB.ChX.SectionName` | Evita depender de páginas |

### 0.2 Únicos pendientes reales

1. **Media gráfica** para tarjetas de ejercicio.
2. **Form-check visual** automatizado.
3. **Umbrales angulares exactos** si se desea detección automática de compensaciones.
4. **Páginas exactas** si se requiere citación editorial estricta.

**Decisión:** se puede construir el sistema completo sin imágenes, usando texto, parámetros mecánicos, cues y gates de progresión.

---

# 1. Recomendación 1 — Módulo `tensile-load`

## 1.1 Entidades principales

### `TensileLoadPrescription`

Propósito: representar cualquier “estiramiento” como carga tensil.

Campos sugeridos:

- `id`
- `name`
- `focusIds`: `mobility`, `tendon-health`, `strength`, `hypertrophy`, `pain-management`
- `bodyZoneIds`
- `movementPatternIds`
- `targetTissue`: `muscle`, `tendon`, `ligament`, `jointCapsule`, `myofascial`
- `modality`: `ballistic`, `dynamic`, `static-passive`, `static-active`, `PNF-isometric`, `resistance-eccentric`
- `contractionType`: `none`, `concentric`, `isometric`, `eccentric`
- `loadParameters`
- `dosage`
- `intendedOutcome`
- `temporaryEffect`
- `evidenceTag`
- `cautions`
- `sourceRef`

### `LoadParameterSet`

Campos:

- `magnitude`
- `location`
- `direction`
- `duration`
- `frequency`
- `velocity`
- `acceleration`

Fuente: `YB.Ch1.LoadParameters`.

### `StretchModality`

| Modalidad | Definición operativa |
|---|---|
| `ballistic` | Rebotes repetidos para entrar en rango |
| `dynamic` | Movimientos lentos y repetitivos que aumentan rango progresivamente |
| `static-passive` | La posición se sostiene con soporte externo: gravedad, pared, correa, suelo |
| `static-active` | La posición se sostiene con fuerza muscular interna |
| `PNF-isometric` | Contracción isométrica del tejido objetivo en rango final, seguida usualmente de mayor estiramiento pasivo |
| `resistance-eccentric` | Alargamiento controlado contra resistencia; termina cuando se pierde control |

Fuente: `YB.Ch2.ConventionalStretching`.

### `ViscoelasticEffect`

Campos:

- `creep`
- `stressRelaxation`
- `hysteresis`
- `strainRateSensitivity`
- `cycleEffect`
- `temperatureEffect`
- `temporary`: true
- `educationalOnly`: true

Fuente: `YB.Ch3.ViscoelasticPhenomena`.

### `CollagenStrainZone`

Representación conceptual, no cálculo directo.

| Zona | Rango de deformación | Significado |
|---|---:|---|
| `toeRegion` | 1–2% | Enderezamiento del crimp de colágeno |
| `elasticRegion` | 3–4% | Relación lineal estrés-deformación; comportamiento recuperable |
| `yieldPoint` | ~4% | Transición |
| `plasticRegion` | 4–6% | Microfallos fibrilares posibles; no necesariamente lesión |
| `ultimateFail` | ~8–10% | Fallo estructural |
| `normalMovement` | ~2–5% | Rango habitual de tendones/ligamentos |

Fuente: `YB.Ch3.StressAndStrain`.

### `EvidenceQualityTag`

Campos:

- `level`: `high`, `moderate`, `low`, `in-vitro`, `anecdotal`, `expert-opinion`
- `extrapolationWarning`
- `clinicalSupervisionRequired`
- `temporaryOnly`
- `population`
- `sourceRef`

---

## 1.2 Reglas del módulo `tensile-load`

### Regla: `stretch-general-dose`

- **Objetivo:** flexibilidad general.
- **Valores:**
  - Rutina completa: `<10 min`.
  - Frecuencia: `2–3 días/semana`.
  - Duraciones comunes: `15–60 s` por estiramiento.
- **Condición:** población general, objetivo ROM básico.
- **Acción:** no prescribir más volumen si el objetivo es mantenimiento simple.
- **Fuente:** `YB.Ch2.ConventionalStretching`.

---

### Regla: `stretch-modality-classification`

- **Objetivo:** clasificar correctamente una postura.
- **Lógica:**
  - Si hay soporte externo: `static-passive`.
  - Si el usuario produce fuerza interna para sostener: `static-active`.
- **Ejemplo:** Seated Forward Bend puede ser pasiva o activa según soporte/control.
- **Fuente:** `YB.Ch2.ConventionalStretching`.

---

### Regla: `pre-activity-stretch-selection`

- **Objetivo:** calentamiento deportivo.
- **Valores:**
  - Dinámico: preferido antes de actividad.
  - Estático/PNF: después o separado, salvo especificidad deportiva.
- **Acción:** si hay rendimiento inmediato, priorizar dinámico.
- **Fuente:** `YB.Ch2.WhyWeStretch`.

---

### Regla: `static-stretch-performance-guard`

- **Objetivo:** limitar déficit agudo de rendimiento.
- **Valores:**
  - Estiramientos `<60 s`: caída promedio ~`1.1%`.
  - Estiramientos `>60 s`: caída promedio ~`4.6%`.
  - Estático global: ~`3.7%` de déficit.
  - PNF: ~`4.4%`.
  - Dinámico: mejora ~`1.3%`.
  - Fuerza: déficit ~`4.8%`.
  - Potencia-velocidad: déficit ~`1.3%`.
  - Tareas de rango corto: estático puede perjudicar ~`10.2%`.
  - Tareas de rango largo: estático puede mejorar ~`2.2%`.
- **Acción:** si el objetivo es fuerza/potencia/velocidad, evitar estático/PNF largos antes.
- **Fuente:** `YB.Ch2.WhyWeStretch`.

---

### Regla: `stretch-injury-prevention-limits`

- **Objetivo:** no vender estiramiento como prevención universal.
- **Datos:**
  - Estático/PNF puede reducir levemente lesiones musculares en sprinting.
  - No efecto claro en overuse ni en todas las causas.
  - Sin efectos adversos agudos claros.
- **Acción:** no usar como regla de prevención general.
- **Fuente:** `YB.Ch2.WhyWeStretch`.

---

### Regla: `prt-acute`

- **Objetivo:** efecto agudo sobre resistencia pasiva.
- **Protocolo citado:**
  - `5 × 90 s`.
  - `30 s` entre estiramientos.
  - Retorno a baseline ~`1 h`.
- **Acción:** marcar como efecto temporal.
- **Fuente:** `YB.Ch2.PassiveResistanceTorque`.

---

### Regla: `prt-chronic`

- **Objetivo:** efecto crónico sobre resistencia pasiva.
- **Protocolo citado:**
  - `4 semanas`.
  - `2 × 60 s`.
  - `2 veces/día`.
  - Medición final `24 h` después de la última sesión.
- **Acción:** diferenciar efecto agudo vs crónico.
- **Fuente:** `YB.Ch2.PassiveResistanceTorque`.

---

### Regla: `long-hold-prr`

- **Objetivo:** reconocer que holds largos pueden reducir más la resistencia pasiva.
- **Valores:**
  - `1 min`: aún no significativamente inferior a baseline.
  - `4–5 min`: reducen más que `1 min`.
  - `5 min`: reduce más que `2 min`.
- **Advertencia:** estudio en dorsiflexión de tobillo en hombres jóvenes; no generalizar automáticamente.
- **Fuente:** `YB.Ch2.PassiveResistanceTorque`.

---

### Regla: `stretch-tolerance-sensory`

- **Objetivo:** interpretar ROM como combinación de mecánica y tolerancia sensorial.
- **Datos:**
  - Anestesia espinal produjo mayor aumento de ROM.
  - En artroscopia de rodilla, ROM pasiva aumentó ~`13.4°` en flexión y ~`3°` en extensión bajo anestesia.
- **Acción:** no asumir que mayor ROM implica necesariamente tejido más largo.
- **Fuente:** `YB.Ch2.StretchTolerance`.

---

### Regla: `passive-stretch-architecture-limit`

- **Objetivo:** no usar estiramiento pasivo como vía principal para arquitectura muscular.
- **Dato:** el estiramiento pasivo solo produce cambios triviales en longitud de fascículos/ángulo de pennación.
- **Acción:** priorizar excéntricos, isométricos en rango largo o carga alta si el objetivo es arquitectura.
- **Fuente:** `YB.Ch2.MuscleLength`.

---

### Regla: `high-intensity-passive-stretch-advanced`

- **Objetivo:** registrar protocolo excepcional de estiramiento pasivo de alta intensidad.
- **Valores:**
  - `450 s` = `7.5 min` por estiramiento.
  - Máxima intensidad tolerable justo antes de dolor.
  - Ajuste cada `90 s`.
  - Prescripción: `5 veces/semana` durante `8 semanas`.
  - Adherencia real: ~`3.1 sesiones/semana`.
  - Resultados: longitud de fascículo +`13.6%`; ángulo -`15.1%`; ROM +`14.2°`.
- **Advertencia:** muestra pequeña, hombres jóvenes, alta incomodidad; no usar como protocolo general.
- **Fuente:** `YB.Ch2.ResearchSummary.HighIntensityStretch`, p. 72.

---

### Regla: `eccentric-long-fascicle`

- **Objetivo:** usar excéntricos de alta magnitud para arquitectura y fuerza en rango largo.
- **Datos:**
  - Nordic hamstring curl durante `10 semanas` aumentó longitud de fascículos.
  - Transiciones de peso corporal similares a yoga pueden fortalecer, pero no siempre desplazan la curva longitud-tensión.
- **Acción:** exigir magnitud suficiente.
- **Fuente:** `YB.Ch2.EccentricContractions`.

---

### Regla: `isometric-long-length`

- **Objetivo:** reconocer isométricos en rango largo como estímulo válido.
- **Dato:** isométricos en posición alargada pueden aumentar longitud de fascículos.
- **Acción:** usar posturas isométricas con co-contracción real, no forma pasiva.
- **Fuente:** `YB.Ch2.EccentricContractions`.

---

### Regla: `contraction-specificity-over-type`

- **Objetivo:** priorizar especificidad e intensidad sobre tipo de contracción.
- **Dato:** el tipo de contracción importa menos que especificidad e intensidad para cambios arquitectónicos.
- **Acción:** no elegir excéntrico por dogma; evaluar magnitud, tarea y tolerancia.
- **Fuente:** `YB.Ch2.EccentricContractions`.

---

### Regla: `contracture-stretch-limit`

- **Objetivo:** no usar estiramiento pasivo como solución principal en contracturas.
- **Datos:**
  - Cambios de ROM ~`1–2°`.
  - Máximo observado ~`0–3°`.
  - Conclusión citada: el estiramiento no tiene efectos clínicamente importantes sobre movilidad articular en contractura.
- **Acción:** derivar a manejo clínico; no prometer reversión estructural.
- **Fuente:** `YB.Ch3.ResearchSummary.CochraneReview`, p. 106.

---

### Regla: `in-vitro-stretch-research-caution`

- **Objetivo:** registrar investigación in vitro sin prescripción directa.
- **Datos:**
  - `3%` y `6%` strain favorecieron reparación a las 48 h.
  - `12%` empeoró resultados.
  - Duraciones de `3–5 min` fueron más efectivas que `1 min`.
- **Acción:** etiquetar como hipótesis, no protocolo clínico.
- **Fuente:** `YB.Ch4.ResearchSummary.StretchingTissueRepair`, p. 130.

---

### Regla: `strain-rate-entry`

- **Objetivo:** entrada al rango según velocidad.
- **Dato:** entradas lentas suelen encontrar menos resistencia que entradas rápidas.
- **Acción:** sugerir transiciones lentas en movilidad, usuarios sensibles o hiperlaxitud.
- **Fuente:** `YB.Ch3.StrainRateSensitivity`.

---

### Regla: `warmup-temperature`

- **Objetivo:** calentamiento tisular.
- **Datos:**
  - Tejidos calientes ofrecen menos fricción interna.
  - Hot yoga tiene datos conflictivos de temperatura core.
  - No concluir que hot yoga cause lesión de tejido conectivo.
- **Acción:** recomendar calentamiento; hidratación/aclimatación si hay calor.
- **Fuente:** `YB.Ch3.Temperature`; `YB.Ch3.ResearchSummary.HotYoga`, p. 107.

---

# 2. Recomendación 2 — Módulo `tendon-capacity`

## 2.1 Entidades principales

### `TissueCapacityState`

Campos:

- `bodyZoneId`
- `structureStatus`: `normal`, `suspected-pathic`, `diagnosed-pathic`
- `functionStatus`: `full`, `limited`, `pain-limited`
- `painStatus`: `none`, `mild`, `moderate`, `severe`
- `loadToleranceScore`
- `lastAggravatingLoad`
- `referralRequired`
- `notes`

Definición base: un tejido/persona está en plena capacidad cuando puede realizar movimientos funcionales al volumen/frecuencia requeridos sin exacerbar síntomas ni causar lesión tisular.  
Fuente: `YB.Ch5.Capacity`.

### `TendonAdaptationProfile`

Campos:

- `targetTendon`
- `loadMagnitude`
- `contractionTypes`
- `weeklyFrequency`
- `recoveryWindowHours`
- `compressionRisk`
- `progressionGate`
- `sourceRef`

### `RepairPhase`

| Fase | Duración | Implicación |
|---|---:|---|
| I: inflamatoria | `3–7 días` | Proteger; movilización ligera si tolerable |
| II: reparación/proliferación | `~4–6 semanas` | Carga baja/progresiva; exceso puede reactivar inflamación |
| III: remodelación/maduración | `~1–3 años` | Carga progresiva para organizar colágeno |

Fuente: `YB.Ch5.BiochemistryOfRepair`.

### `ReferralTrigger`

Campos:

- `persistentPain`
- `progressivePain`
- `capacityDecline`
- `nonMusculoskeletalSymptoms`
- `compoundFracture`
- `systemicSymptoms`
- `medicalCondition`

Fuente: `YB.Appendix.ConsiderationsContraindications`.

---

## 2.2 Reglas del módulo `tendon-capacity`

### Regla: `tendon-load-magnitude`

- **Objetivo:** carga mínima útil para adaptación tendinosa.
- **Valores:**
  - Rango general citado: `60–80% 1RM`.
  - Mínimo preferido según revisión actual: `~80% 1RM` durante `12 semanas`.
- **Acción:** marcar cargas ligeras como insuficientes para adaptación robusta.
- **Fuente:** `YB.Ch3.StiffnessAndCompliance`.

---

### Regla: `tendon-mvc-alternative`

- **Objetivo:** traducir carga a contextos sin 1RM.
- **Dato:** `55% MVC` fue insuficiente comparado con `90% MVC` en isométricos repetidos durante `14 semanas`.
- **Acción:** en yoga, aumentar magnitud mediante palancas, unilateralidad, tempo, co-contracción o carga externa.
- **Fuente:** `YB.Ch3.StiffnessAndCompliance`.

---

### Regla: `tendon-contraction-type`

- **Objetivo:** modalidades válidas.
- **Datos:**
  - Concéntrico, isométrico y excéntrico pueden aumentar stiffness.
  - Excéntrico suele producir mayores adaptaciones.
  - Magnitud importa más que tipo.
- **Acción:** no restringir a excéntricos; priorizar tolerancia y magnitud.
- **Fuente:** `YB.Ch3.StiffnessAndCompliance`.

---

### Regla: `tendon-variable-loading`

- **Objetivo:** variabilidad de carga.
- **Dato:** tendones también responden a variación de ritmo y dirección.
- **Acción:** etapas tempranas: carga lenta/sistemática; etapas tardías: variar rate/dirección.
- **Fuente:** `YB.Ch1.VariableLoading`; `YB.Ch3.StiffnessAndCompliance`.

---

### Regla: `collagen-turnover-recovery`

- **Objetivo:** recuperación tras carga alta.
- **Datos:**
  - Vida media del colágeno: `300–500 días`.
  - Tras ejercicio de alta intensidad:
    - Síntesis pico ~`24 h`.
    - Degradación pico y descenso antes.
    - Degradación neta primeras `24 h`.
    - Equilibrio ~`72 h`.
- **Acción:** sugerir recuperación tras sesiones de alta carga tendinosa; no regla rígida diaria.
- **Fuente:** `YB.Ch4.Cells`.

---

### Regla: `progressive-overload-no-spikes`

- **Objetivo:** progresión segura.
- **Datos:**
  - Spikes de entrenamiento asociados a mayor riesgo de lesión.
  - RPE sugerido: `tiempo × esfuerzo 1–10`.
  - Comparar solo perfiles de carga similares.
- **Acción:** alertar ante aumentos bruscos de volumen/intensidad.
- **Fuente:** `YB.Ch1.ProgressiveOverload`.

---

### Regla: `underloading-risk`

- **Objetivo:** evitar que la app trate la evitación de carga como solución por defecto.
- **Datos:**
  - Subcarga reduce capacidad.
  - Astronautas pierden fuerza tendinosa y densidad ósea en ~`90 días` sin gravedad.
  - La mejor forma de aumentar capacidad de cargar peso en manos es cargar peso progresivamente.
- **Acción:** si una zona está subcargada, proponer exposición gradual, no solo descanso.
- **Fuente:** `YB.Ch1.Adaptation`; `YB.Ch5.TensileLoading`.

---

### Regla: `repair-phase-loading`

- **Objetivo:** guiar carga según fase de reparación.
- **Valores:**
  - Fase I: `3–7 días`, protección y movilización tolerable.
  - Fase II: `~4–6 semanas`, carga baja/progresiva.
  - Fase III: `~1–3 años`, carga progresiva.
- **Advertencia:** exceso de estrés en fase II puede generar inflamación recurrente/fibrosis persistente.
- **Acción:** no permitir progresión rápida si hay síntomas agudos.
- **Fuente:** `YB.Ch5.BiochemistryOfRepair`.

---

### Regla: `pathic-tendon-loading`

- **Objetivo:** aplicar carga con criterio en tendones patológicos.
- **Concepto:** “donut analogy”.
  - La patología es el agujero.
  - El tejido sano alrededor es el donut.
  - Cargar el tejido sano puede tener efecto protector.
- **Advertencia:** no cargar de forma temeraria.
- **Acción:** priorizar capacidad y tolerancia, no reposo absoluto.
- **Fuente:** `YB.Ch5.BiochemistryOfRepair`.

---

### Regla: `injury-grade-context`

- **Objetivo:** contextualizar lesiones estructurales.
- **Datos:**
  - Grado I: pocas fibras dañadas.
  - Grado II: desgarro parcial.
  - Grado III: desgarro completo.
  - Rupturas completas poco comunes en tendones sanos.
  - En estudio de rupturas espontáneas, `97%` tenía patología subyacente.
  - `80%` no reportó dolor antes de ruptura.
- **Acción:** no usar dolor como único proxy de daño estructural.
- **Fuente:** `YB.Ch5.InjuryClassification`.

---

### Regla: `pain-exercise-chronic`

- **Objetivo:** manejo de síntomas durante ejercicio en condiciones crónicas.
- **Datos:**
  - En dolor musculoesquelético crónico, permitir/reproducir síntomas mostró mejor reducción de dolor a corto plazo frente a evitarlos.
  - A largo plazo, no hubo diferencias significativas.
- **Acción:** no usar esta regla en lesiones agudas, red flags o dolor severo no evaluado.
- **Fuente:** `YB.Ch5.ResearchSummary.SymptomsWithExercise`, p. 158.

---

### Regla: `referral-flags`

- **Objetivo:** derivar fuera del alcance del yoga.
- **Condiciones:**
  - Dolor persistente o progresivo.
  - Capacidad decreciente.
  - Condiciones no musculoesqueléticas.
  - Fracturas compuestas.
  - Patología diagnosticada que requiere manejo clínico.
  - Síntomas sistémicos.
- **Acción:** bloquear progresión automática y sugerir profesional de salud.
- **Fuente:** `YB.Appendix.ConsiderationsContraindications`.

---

# 3. Recomendación 3 — SkillPaths principales

> Todos los SkillPaths deben incluir:
> - `primaryCues`
> - `commonFaults`
> - `bailTechniques`
> - `progressionGate`
> - `safetyFlags`
> - `mediaRef: pending-figure`
> - `sourceRef`

---

## 3.1 SkillPath: `proximal-hamstring-capacity`

### Objetivo

Aumentar capacidad del tendón isquiotibial proximal para tolerar forward bends, lunges, puentes y cargas en flexión de cadera.

### Requisitos previos

- Ausencia de dolor agudo severo.
- Si hay tendinopatía diagnosticada, estar con alta clínica o en fase tolerante.
- No cargar fracturas.
- Monitorizar síntomas.

### Progresión

| Step | Nombre | Descripción | Dosis | Gate | Fallos comunes |
|---:|---|---|---|---|---|
| 1 | Isometric Hamstring Bridge | Puente con énfasis en posterior de cadera | `30–45 s`; hasta `5 reps` con `2 min` descanso | Mantener tensión posterior sin dolor agravante | Hiperextensión lumbar; sin activación isquiotibial |
| 2 | Bridge variations | Rotación externa/interna, single-leg, palanca más larga | `30–45 s` | Mantener skill y tensión en variación | Compensar con lumbar; perder acción |
| 3 | Bridge constraints | Talones como contacto principal o superficie deslizante con restricción | `30–45 s` | Acceder a tensión posterior, útil en hiperlaxitud | Deslizar sin control |
| 4 | Extended Bridge | Alejar pies de pelvis en incrementos de `10–15 cm`; bloques si hace falta | `30–45 s` | Mantener tensión isquiotibial sin dolor | Sobreestirar; pelvis colapsada |
| 5 | Eccentric Hamstring Slides | Deslizar pies hacia extensión manteniendo pelvis elevada | `15 reps`; `3–5 sets`; `2 min` descanso; tempo `3–5 s` | 15 reps controladas | Pelvis cae; deslizamiento rápido |
| 6 | Concentric Hamstring Slides | Regresar desde extensión manteniendo pelvis elevada | `10–15 reps` o fatiga; `3–5 sets`; `≥2 min` descanso | Control concéntrico sin colapso | Pelvis baja al regresar |
| 7 | Supported Lunges | Introducen flexión de cadera; manos en pared, bloques altos/bajos | Según tolerancia | Tolerar flexión con tensión posterior | Entrar en rango profundo demasiado pronto |
| 8 | Active Forward Bends | Forward bends con tensión activa; profundidad limitada por control | Cualitativo | Mantener tensión isquiotibial | Caer en estiramiento pasivo profundo |

### Criterios de seguridad

- Progresar solo cuando el hold de `30–45 s` sea sostenible.
- Si síntomas aparecen: descansar unos días y regresar a progresión anterior.
- Si síntomas persisten: derivar.
- Adaptación sustancial puede tardar meses; marco completo `1–3 años`.

### Riesgo específico

- Flexión profunda de cadera puede comprimir insertivamente el tendón proximal contra isquion.
- En síntomas, reducir temporalmente flexión profunda y cargar primero en tensión sin compresión.

Fuente: `YB.Appendix.ModifyingLoadsProximalHamstringTendon`.

---

## 3.2 SkillPath: `anterior-hip-capacity`

### Objetivo

Mejorar capacidad de cadera anterior para flexión profunda, pinches, lunges y posturas que exigen flexión/extensión de cadera.

### Test/retest

Usar una de estas posiciones:

- Supine Knees-to-Chest.
- Child’s Pose.
- Garland Pose / Deep Squat.

Comparar sensación, facilidad y ROM.

### Progresión

| Step | Nombre | Descripción | Dosis | Gate | Fallos comunes |
|---:|---|---|---|---|---|
| 1 | Supine resisted hip flexion | Flexión resistida suave en supino | `20–40% MVC`; resistencia constante | Concéntrico/isométrico/excéntrico tolerado | Resistencia irregular; compensación lumbar |
| 2 | Marichi variation | Énfasis en cadera anterior de pierna extendida | `30–45 s` | Mantener acción sin flexión espinal excesiva | Colapso espinal; tilt posterior excesivo |
| 3 | Boat Pose straight leg | Single o double leg; espalda contra pared si hace falta | `30–45 s` | Mantener tensión anterior | Bent-knee Boat sin tensión anterior |
| 4 | Standing Marichi | Control activo de flexión de cadera de pie | `30–45 s` | Sin flexión de rodilla de apoyo ni lean back | Fingir ROM con tronco |
| 5 | Extended Hand-to-Big-Toe hover | Pierna suspendida sin soporte | `30–45 s` | Mantener carga anterior | Usar mano como sustituto de fuerza |
| 6 | Internal rotation side sitting | Press isométrico de pierna internamente rotada hacia suelo | Isométrico | Facilidad en flexión mejora | Forzar rango más allá de morfología |
| 7 | Kneeling Lunge | Isométrico/excéntrico/concéntrico para cadera posterior/anterior | Según tolerancia | Mantener acción/skill | Shift pélvico excesivo |
| 8 | Eccentric Lunge | Pelvis fija; extensión de cadera posterior | `3 sets × 10 reps` | Pelvis sin shift vertical/horizontal | Levantar rodilla como objetivo |
| 9 | Warrior I regressions | Elevar pie delantero para reducir extensión lumbar/cadera | Cualitativo | Mantener acción sin dolor | Extensión lumbar compensatoria |
| 10 | Bigger pose regressions | Pigeon/splits con soporte en cadera posterior | Cualitativo | Mantener capacidad en rango | Forzar end range |

### Notas

- Si hay pinching anterior en flexión profunda, combinar flexión con trabajo de rotación interna.
- Adaptaciones agudas pueden ser efímeras; se requiere repetición crónica.
- Si dolor persiste: derivar.

Fuente: `YB.Appendix.ModifyingLoadsAnteriorHip`.

---

## 3.3 SkillPath: `shoulder-complex-capacity`

### Objetivo

Aumentar capacidad del complejo hombro-escápula para plank, push-up, overhead, inversiones y soportes.

### Progresión

| Step | Nombre | Descripción | Dosis | Gate | Fallos comunes |
|---:|---|---|---|---|---|
| 1 | Action/skill con bloque | Reach desde hombros/tríceps/meñiques y desde pulgares/bíceps/pecho | `90–180°` flexión | Mantener push/pull sin compensación | Extensión lumbar; codos doblados |
| 2 | Plank regressions | Manos elevadas en pared/silla/bloques | `30–45 s` | Mantener skill | Codos hiperextendidos sin tensión |
| 3 | Plank progressions | Pies elevados, single-leg, hand placement variable | `30–45 s` | Control sin dolor | Colapso escapular |
| 4 | Side plank | Regresión en silla/bloque; progresión normal | `30–45 s` | Mantener acción | Hombro comprimido |
| 5 | Push-up progression | Chair push-up → standard → eccentric → low tricep plank | Construir hasta `~3 sets × 10 reps` | Control excéntrico/concéntrico | Bajar sin control; rango incompleto |
| 6 | Inversions con prop | Press/pull contra bloque/bolster para co-contracción | Según capacidad | Co-contracción sin miedo ni dolor | Inversión pasiva sin control |

### Regla de rango

- El rango de flexión de hombro debe determinarse por la capacidad de mantener skill sin doblar codos ni extender columna.
- En hiperlaxitud, agarrar bloque y doblar/estirar codos puede ayudar a encontrar tensión.

### Riesgo específico

- Inversiones y headstand requieren capacidad cervical/escapular.
- Si se practica headstand, entrada en pike reduce fuerza y flexión cervical vs kick-up/curl.

Fuente: `YB.Appendix.ModifyingLoadsShoulderComplex`; `YB.Ch6.ResearchSummary.HeadstandSafety`, p. 191.

---

## 3.4 SkillPath opcional: `spinal-flexion-tolerance`

### Objetivo

Recuperar tolerancia a flexión espinal y forward bends sin miedo ni síntomas.

| Step | Nombre | Descripción | Gate |
|---:|---|---|---|
| 1 | Warm-up | Movimiento global antes de forward bends | Menor resistencia al movimiento |
| 2 | Segmental/global movement | Movilidad espinal en posiciones seguras | Sin síntomas agudos |
| 3 | Hinge + flexion | Combinar hinge de cadera y flexión espinal | Control de descenso |
| 4 | Roll-ups/downs | Transiciones controladas | Sin síntomas persistentes |

### Reglas de seguridad

- No prohibir flexión espinal por defecto.
- Evitar flexión estática prolongada antes de tareas con carga.
- Incluso `5–10 min` de flexión sostenida pueden generar creep temporal.
- `1 h` de sedestación puede alterar patrones de relajación flexora.
- Si hay flexion intolerance clínica: derivar.

Fuente: `YB.Ch6.SpinalFlexion`.

---

# 4. Recomendación 4 — `HypermobilitySpectrumFlag`

## 4.1 Entidad

### `HypermobilitySpectrumFlag`

Campos sugeridos:

- `flagSource`: `self-report`, `clinical-diagnosis`, `screening-tool`, `observed-signs`
- `hypermobilityLikely`: true/false
- `systemicSymptoms`: true/false
- `endRangeControlNeeded`: true/false
- `coContractionPossible`: true/false
- `referralRecommended`: true/false
- `notes`

## 4.2 Datos del libro

- La hiperlaxitud es un espectro.
- Puede presentarse como condición apenas detectable o como trastorno limitante.
- Se mencionan >1000 variantes de mutaciones de colágeno.
- Puede asociarse a dolor crónico, ansiedad, propiocepción disminuida, moretones excesivos e irritabilidad gastrointestinal.
- Los síntomas sistémicos deben ser derivados a profesional de salud.
- La laxitud articular puede ser localizada o generalizada.

Fuente: `YB.Ch4.Collagen`; `YB.Ch5.Hypermobility`.

## 4.3 Reglas

### Regla: `hypermobile-no-diagnosis`

- El sistema no diagnostica síndrome de hiperlaxitud.
- Solo registra flag si existe autodiagnóstico informado, diagnóstico clínico o screening externo.

### Regla: `hypermobile-end-range-control`

Si `HypermobilitySpectrumFlag = true`:

- No permitir trabajo pasivo en end range si no hay co-contracción.
- Priorizar capacidad de generar tensión muscular.
- Usar macro-bend o reducción de rango, no micro-bend automático sin tensión.

### Regla: `hypermobile-co-contraction-required`

- Toda progresión requiere mantener acción/skill.
- Si el usuario no puede mantener tensión, se regresa el rango.

### Regla: `hypermobile-tools`

Opciones recomendadas:

- Closed chain.
- Bandas o correas para reemplazar tensión interna insuficiente.
- Oscilaciones o movimientos lentos en lugar de holds estáticos largos.
- Excéntricos para mejorar propiocepción.
- Constraints para acceder a tensión, como talones o superficie deslizante.

### Regla: `hypermobile-systemic-referral`

- Si hay síntomas sistémicos, derivar.
- El profesor de yoga no maneja condiciones multisistémicas.

---

# 5. Recomendación 5 — `InsertionalCompressionRisk`

## 5.1 Entidad

### `InsertionalCompressionRisk`

Campos:

- `tendon`
- `compressionSite`
- `jointPosition`
- `associatedMovementPattern`
- `symptomSensitive`: true/false
- `avoidRange`
- `loadWithoutCompressionFirst`
- `eccentricReintroduction`
- `referralIfPersistent`
- `sourceRef`

## 5.2 Tabla de sitios de compresión insertional

| Tendón | Sitio de compresión | Posición articular | Contexto yoga | Modificación |
|---|---|---|---|---|
| Isquiotibial proximal | Tuberosidad isquiática | Flexión de cadera | Forward bends, lunges, flexión profunda | Reducir flexión profunda temporalmente; cargar tensión activa; progresar |
| Tendón de Aquiles | Calcáneo | Dorsiflexión de tobillo | Estiramientos de pantorrilla, dorsiflexión profunda | Cargar en plantarflexión; reintroducir excéntrico con talón bajando desde bloque |
| Gluteus medius | Trocánter mayor | Aducción de cadera | Posiciones que carguen aducción profunda | Reducir aducción sintomática; progresar con control |
| Quadriceps | Cóndilo femoral | Flexión de rodilla | Squats profundos, rodilla flexionada | Cargar tensión sin compresión; progresar gradualmente |
| Adductor longus | Rama púbica | Abducción y extensión de cadera | Aperturas/extensión de cadera | Reducir rango provocativo; cargar progresivamente |
| Long head of biceps | Surco bicipital | Extensión de hombro | Extensión de hombro cargada | Modificar extensión; mantener tensión tolerable |
| Pectoralis major | Tuberosidad humeral | Rotación externa de hombro | Aperturas/rotación externa cargada | Reducir rotación externa sintomática |
| Supraspinatus | Tuberosidad mayor | Aducción de hombro | Aducción cargada del hombro | Modificar aducción; priorizar co-contracción |

Fuente: `YB.Ch5.CompressiveForces`.

## 5.3 Lógica de implementación

### Regla: `compression-symptom-detector`

Si:

- Usuario reporta dolor en sitio insertional.
- La postura implica compresión en ese sitio.
- El dolor aparece en rango profundo.

Entonces:

1. Reducir temporalmente el rango compresivo.
2. Cargar el tejido en tensión sin compresión primero.
3. Reintroducir compresión lentamente con excéntricos controlados.
4. Derivar si persiste.

### Regla: `hamstring-insertional-compression`

- En dolor de isquiotibial proximal:
  - Evitar temporalmente flexión profunda de cadera.
  - Priorizar puentes, slides y tensión activa.
  - Reintroducir forward bends con profundidad conservadora.

### Regla: `achilles-compression`

- Para cargar Aquiles en tensión sin compresión: plantarflexión.
- Para reintroducir compresión: descenso excéntrico controlado desde bloque hacia dorsiflexión.

### Regla: `warrior-iii-provocation`

- Warrior III puede combinar compresión y niveles altos de tensión.
- Si hay tendón sensible, usar regresión con soporte y menor rango.

---

# 6. Recomendación 6 — Biblioteca de cues, fallos y técnicas de salida

## 6.1 Isquiotibial proximal / forward bends / slides

### `primaryCues`

- “Desde la parte posterior de la rodilla, alcanza hacia el talón.”
- “Mantén esa acción y lleva el isquiotibial inferior hacia el isquion.”
- “Empuja y tira simultáneamente.”
- “Mantén la tensión al entrar, sostener y salir.”
- “Relaja durante el descanso.”

### `commonFaults`

- Hiperextender lumbar en puente.
- No sentir tensión isquiotibial.
- Deslizar rápido en slides.
- Dejar caer la pelvis.
- Entrar en forward bend profundo sin tensión activa.
- En hiperlaxitud, quedar en rango final sin control muscular.

### `bailTechniques`

- Reducir profundidad de forward bend.
- Doblar ligeramente rodillas.
- Usar bloques bajo manos.
- Volver a puente isométrico corto.
- Descansar unos días si hay síntomas.
- Derivar si persiste.

Fuente: `YB.Appendix.ModifyingLoadsProximalHamstringTendon`.

---

## 6.2 Cadera anterior

### `primaryCues`

- “Alarga desde el pliegue de cadera hacia la rodilla.”
- “Alarga desde el pliegue de cadera hacia el hombro.”
- “Eleva muslo y pecho.”
- “Mantén la acción al entrar, sostener y salir.”

### `commonFaults`

- Usar flexión espinal para fingir flexión de cadera.
- Tilt posterior excesivo.
- Boat con rodillas dobladas sin tensión anterior.
- Shift pélvico en eccentric lunge.
- Forzar splits/pigeon sin soporte.

### `bailTechniques`

- Apoyar espalda contra pared en Boat.
- Usar silla/bloque para reducir demanda.
- Soportar cadera posterior en pigeon/splits.
- Regresar a supine resisted hip flexion.
- Derivar si hay dolor persistente.

Fuente: `YB.Appendix.ModifyingLoadsAnteriorHip`.

---

## 6.3 Hombro / plank / push-up

### `primaryCues`

- “Reach desde la parte posterior del hombro, tríceps y meñique.”
- “Reach desde pulgar, bíceps y parte interna del hombro.”
- “Empuja el suelo y aléjate de él.”
- “Mantén push/pull al entrar, sostener y salir.”

### `commonFaults`

- Extender columna para simular flexión de hombro.
- Adicionar hombros y doblar codos en Downward Dog.
- Codos hiperextendidos sin tensión.
- Bajar rápido en push-up.
- Invertir sin control.

### `bailTechniques`

- Elevar manos en pared/silla/bloques.
- Reducir rango de flexión de hombro.
- Usar bloque para press/pull en inversiones.
- Volver a plank corto.
- Derivar si persiste dolor.

Fuente: `YB.Appendix.ModifyingLoadsShoulderComplex`.

---

## 6.4 Columna / core / hinge

### `primaryCues`

- Calentar antes de forward bends.
- Combinar hip hinge y flexión espinal según tarea.
- Evitar flexión estática prolongada antes de cargas.
- Usar preguntas abiertas de fuerza.

### `commonFaults`

- Dogma “flat back always”.
- Mantener flexión sostenida larga y luego cargar.
- Corregir estética sin evaluar capacidad.
- Over-bracing para tareas ligeras.

### `bailTechniques`

- Roll-ups suaves.
- Hinges.
- Squat/stoop según confort.
- Reducir tiempo de flexión sostenida.
- Derivar si hay flexion intolerance clínica.

Fuente: `YB.Ch6.SpinalFlexion`; `YB.Ch6.CoreStability`.

---

## 6.5 Preguntas abiertas de fuerza

### `openEndedForceQuestions`

- “¿Qué pasa más arriba de la pierna cuando presionas el talón?”
- “¿Qué cambia si alcanzas con esfuerzo y a la vez intentas atraer?”
- “¿Puedes mantener tensión en este rango?”
- “¿Dónde desaparece la acción?”

Fuente: `YB.Ch6.CueingAndKinematics`.

---

# 7. Recomendación 7 — Guardrails clínicos, no imaging y alcance del sistema

## 7.1 Regla: `scope-of-practice`

El sistema puede:

- Enseñar movimiento.
- Progresar capacidad.
- Ofrecer modificaciones.
- Promover fuerza, movilidad, balance y flexibilidad.
- Gestionar carga.

El sistema no debe:

- Diagnosticar patologías.
- Tratar enfermedades.
- Interpretar imágenes médicas.
- Prescribir rehabilitación clínica sin supervisión.
- Manejar condiciones sistémicas.
- Reemplazar fisioterapia o medicina.

Fuente: `YB.Ch1.ScopeOfPractice`; `YB.Appendix.ConsiderationsContraindications`.

---

## 7.2 Regla: `no-imaging-trigger`

### Datos clave

El libro reporta altas tasas de hallazgos asintomáticos:

- Hombros asintomáticos: `96%` con alguna anomalía.
- Labral tears de hombro en adultos asintomáticos: `72%` y `55%` según radiólogos.
- Jugadores de hockey asintomáticos: `77%` con hallazgos pélvicos/cadera; solo `20%` de labral tears reportó síntomas en 2 años.
- Columna cervical asintomática: `87.6%` con discos abultados.
- En personas de 20 años: `73.3%` hombres y `78.0%` mujeres con discos abultados cervicales.
- Revisión sistemática: `96%` de personas en sus 80s con degeneración discal; `37%` en sus 20s.

### Implementación

El sistema **no debe**:

- Restringir automáticamente por hallazgos de imaging.
- Usar “disco abultado”, “labral tear”, “rotator cuff tear” como prueba de fragilidad.
- Generar lenguaje catastrófico.

El sistema **sí debe**:

- Evaluar capacidad funcional.
- Evaluar síntomas bajo carga.
- Progresar según tolerancia.
- Derivar si hay pérdida de capacidad o síntomas persistentes.

Fuente: `YB.Ch5.InjuryClassification`.

---

## 7.3 Regla: `referral-red-flags`

Derivar si aparece:

- Dolor persistente o progresivo.
- Capacidad decreciente.
- Dolor agudo severo.
- Sospecha de fractura.
- Fractura compuesta.
- Condición médica no musculoesquelética.
- Síntomas sistémicos.
- Hiperlaxitud con síntomas sistémicos.
- Dolor que no responde a modificaciones conservadoras.

Fuente: `YB.Appendix.ConsiderationsContraindications`.

---

## 7.4 Regla: `osteoarthritis-symptom-led`

- En osteoarthritis, la carga puede reducirse para minimizar síntomas.
- El cartílago articular degenerativo tiene poca capacidad adaptativa.
- El sistema debe ajustar carga día a día.
- No aplicar progresión agresiva automática.

Fuente: `YB.Ch4.Cells`; `YB.Appendix.ConsiderationsContraindications`.

---

## 7.5 Regla: `compound-fracture-no-load`

- No cargar fracturas compuestas hasta que estén sanadas y autorizadas por profesional.
- Bloquear progresión de fuerza en la zona afectada.

Fuente: `YB.Appendix.ConsiderationsContraindications`.

---

## 7.6 Regla: `hot-yoga-caution`

- No afirmar que hot yoga es inseguro ni seguro universalmente.
- Recomendar hidratación, aclimatación y reducir intensidad si hay síntomas.
- Derivar si aparecen signos de enfermedad por calor.

Datos:

- Un estudio reportó temperaturas core promedio de `103.2°F` en hombres y `102.0°F` en mujeres.
- Otro equipo reportó promedio de `100.3°F` con medición diferente.
- No hay conclusión clara sobre lesión de tejido conectivo.

Fuente: `YB.Ch3.ResearchSummary.HotYoga`, p. 107.

---

## 7.7 Regla: `bone-health-yoga-insufficient`

- Yoga Hatha flow produce ground reaction forces menores que correr/saltar.
- Valores:
  - Caminar: `1.0–1.5×` peso corporal.
  - Correr: `2.5–3.5×`.
  - Hatha flow yoga: generalmente `<2×`.
- Si el objetivo es densidad ósea:
  - No presentar yoga como única intervención.
  - Sugerir impacto, carrera, saltos o resistencia externa si procede.
  - Marcar supervisión en osteoporosis.

Fuente: `YB.Ch1.AppliedLoads`; `YB.Ch1.ResearchSummary.GroundReactionForces`, p. 36.

---

## 7.8 Regla: `headstand-entry-technique`

- Fuerza máxima en corona de cabeza: `40–48%` del peso corporal.
- `51%` de participantes superó ~`300 N`.
- Pike entry produce menor fuerza y menos flexión cervical que kick-up/curl.
- No recomendar headstand a usuarios sin capacidad de hombro/core.
- Bloquear progresión si hay cervical no evaluada o síntomas.

Fuente: `YB.Ch6.ResearchSummary.HeadstandSafety`, p. 191.

---

## 7.9 Regla: `tree-pose-context`

- No hay regla binaria “evitar rodilla”.
- En adultos mayores:
  - Pie en suelo con soporte de pared redujo momento abductor de rodilla en `54–71%`.
  - Pie debajo de rodilla sin pared produjo `8–20%` mayor momento que caminar.
- Permitir variantes según capacidad.
- Regresar si hay dolor o baja capacidad.

Fuente: `YB.Ch1.BiomechanicsOfYoga`.

---

## 7.10 Regla: `core-bracing-light-load`

- Estabilidad espinal erguida sin carga requiere ~`1.7 ± 0.8% MVC`.
- Con carga de `32 kg`, ~`2.9 ± 1.4% MVC`.
- No exigir bracing máximo para tareas ligeras.
- Usar core strength para demandas mayores, arm balances y cargas altas.

Fuente: `YB.Ch6.CoreStability`.

---

## 7.11 Regla: `squat-stoop-choice`

- Ni squat lift ni stoop lift son universalmente superiores.
- Técnica pura no ha demostrado reducir lesiones laborales.
- Fuerza y flexibilidad mostraron más promesa.
- Con cargas pesadas, técnica importa más; en yoga bodyweight, hay más opciones.

Fuente: `YB.Ch6.SquattingVsStooping`.

---

## 7.12 Regla: `posture-not-pathology`

- La postura “normal” es una construcción.
- En muestra asintomática:
  - `85%` hombres y `75%` mujeres presentaban anterior pelvic tilt.
  - Solo `9%` hombres y `18%` mujeres tenían pelvis neutra.
- La morfología afecta alineación.
- No usar alineación como diagnóstico de patología.

Fuente: `YB.Ch6.PostureAndAlignment`.

---

## 7.13 Regla: `scientific-literacy-guardrail`

El sistema debe:

- Distinguir evidencia fuerte, débil, in vitro y anecdótica.
- No aceptar “plural de anécdotas = datos”.
- No confundir correlación con causalidad.
- No sobre-generalizar desde muestras pequeñas.
- Distinguir significancia estadística de relevancia clínica.
- Evitar conclusiones infladas.
- Marcar incertidumbre explícitamente.

Fuente: `YB.Ch1.ScientificLiteracy`; `YB.Ch2.ScientificLiteracy`; `YB.Ch5.ScientificLiteracy`.

---

# Anexo A — Datos maestros cuantitativos para implementación

| Dominio | Dato clave | Valor | Fuente |
|---|---|---:|---|
| Estiramiento general | Rutina completa | `<10 min` | `YB.Ch2.ConventionalStretching` |
| Estiramiento general | Frecuencia | `2–3 días/semana` | `YB.Ch2.ConventionalStretching` |
| Estiramiento general | Duración común | `15–60 s` | `YB.Ch2.ConventionalStretching` |
| Rendimiento | Estático <60 s | `-1.1%` | `YB.Ch2.WhyWeStretch` |
| Rendimiento | Estático >60 s | `-4.6%` | `YB.Ch2.WhyWeStretch` |
| Rendimiento | Estático global | `-3.7%` | `YB.Ch2.WhyWeStretch` |
| Rendimiento | PNF | `-4.4%` | `YB.Ch2.WhyWeStretch` |
| Rendimiento | Dinámico | `+1.3%` | `YB.Ch2.WhyWeStretch` |
| Rendimiento | Fuerza | `-4.8%` | `YB.Ch2.WhyWeStretch` |
| Rendimiento | Potencia-velocidad | `-1.3%` | `YB.Ch2.WhyWeStretch` |
| Rendimiento | Rango corto | `-10.2%` | `YB.Ch2.WhyWeStretch` |
| Rendimiento | Rango largo | `+2.2%` | `YB.Ch2.WhyWeStretch` |
| PRT agudo | Protocolo | `5 × 90 s`, `30 s` descanso | `YB.Ch2.PassiveResistanceTorque` |
| PRT agudo | Duración efecto | ~`1 h` | `YB.Ch2.PassiveResistanceTorque` |
| PRT crónico | Protocolo | `2 × 60 s`, `2/día`, `4 semanas` | `YB.Ch2.PassiveResistanceTorque` |
| PRT largo | Holds | `1–5 min` | `YB.Ch2.PassiveResistanceTorque` |
| PRT largo | 5 min vs 2 min | mayor reducción | `YB.Ch2.PassiveResistanceTorque` |
| Stretch tolerance | Artroscopia rodilla | `+13.4°` flexión, `+3°` extensión | `YB.Ch2.StretchTolerance` |
| Arquitectura | Estiramiento pasivo solo | cambios triviales | `YB.Ch2.MuscleLength` |
| Arquitectura | Alta intensidad pasiva | `450 s`, `5/semana`, `8 semanas` | `YB.Ch2.HighIntensityStretch`, p. 72 |
| Arquitectura | Fascículo | `+13.6%` | `YB.Ch2.HighIntensityStretch`, p. 72 |
| Arquitectura | Ángulo fascículo | `-15.1%` | `YB.Ch2.HighIntensityStretch`, p. 72 |
| Arquitectura | ROM | `+14.2°` | `YB.Ch2.HighIntensityStretch`, p. 72 |
| Arquitectura | Adherencia | `3.1 sesiones/semana` | `YB.Ch2.HighIntensityStretch`, p. 72 |
| Tendón | Rango carga | `60–80% 1RM` | `YB.Ch3.StiffnessAndCompliance` |
| Tendón | Mínimo preferido | `80% 1RM`, `12 semanas` | `YB.Ch3.StiffnessAndCompliance` |
| Tendón | MVC insuficiente | `55% MVC` insuficiente | `YB.Ch3.StiffnessAndCompliance` |
| Tendón | MVC suficiente | `90% MVC`, `14 semanas` | `YB.Ch3.StiffnessAndCompliance` |
| Colágeno | Toe region | `1–2%` | `YB.Ch3.StressAndStrain` |
| Colágeno | Elastic region | `3–4%` | `YB.Ch3.StressAndStrain` |
| Colágeno | Yield point | `~4%` | `YB.Ch3.StressAndStrain` |
| Colágeno | Plastic region | `4–6%` | `YB.Ch3.StressAndStrain` |
| Colágeno | Ultimate fail | `8–10%` | `YB.Ch3.StressAndStrain` |
| Colágeno | Movimiento normal | `2–5%` | `YB.Ch3.StressAndStrain` |
| Histéresis | Entrenamiento | `19.9%` → `12.5%` | `YB.Ch3.Hysteresis` |
| Histéresis | Sesión única | `10 min` similar | `YB.Ch3.Hysteresis` |
| Creep | Mayor deformación | primeros `15–20 s` | `YB.Ch3.CreepAndRecovery` |
| Colágeno | Vida media | `300–500 días` | `YB.Ch4.Cells` |
| Colágeno | Síntesis pico | `~24 h` post ejercicio | `YB.Ch4.Cells` |
| Colágeno | Equilibrio | `~72 h` post ejercicio | `YB.Ch4.Cells` |
| Reparación | Fase I | `3–7 días` | `YB.Ch5.BiochemistryOfRepair` |
| Reparación | Fase II | `~4–6 semanas` | `YB.Ch5.BiochemistryOfRepair` |
| Reparación | Fase III | `1–3 años` | `YB.Ch5.BiochemistryOfRepair` |
| Lesión | Rupturas con patología | `97%` | `YB.Ch5.InjuryClassification` |
| Lesión | Sin dolor previo | `80%` | `YB.Ch5.InjuryClassification` |
| Seguridad yoga | Eventos adversos RCT | `2.2%` | `YB.Ch5.SafetyOfYoga`, p. 161 |
| Seguridad yoga | Eventos graves | `0.6%` | `YB.Ch5.SafetyOfYoga`, p. 161 |
| Seguridad yoga | Comparación con ejercicio | similar, `p=.92` | `YB.Ch5.SafetyOfYoga`, p. 161 |
| Contractura | Cambio ROM | `1–2°` | `YB.Ch3.CochraneReview`, p. 106 |
| Contractura | Máximo | `0–3°` | `YB.Ch3.CochraneReview`, p. 106 |
| In vitro | Strain favorable | `3%`, `6%` | `YB.Ch4.StretchingTissueRepair`, p. 130 |
| In vitro | Strain desfavorable | `12%` | `YB.Ch4.StretchingTissueRepair`, p. 130 |
| In vitro | Duración favorable | `3–5 min` | `YB.Ch4.StretchingTissueRepair`, p. 130 |
| Core | Sin carga | `1.7 ± 0.8% MVC` | `YB.Ch6.CoreStability` |
| Core | Con 32 kg | `2.9 ± 1.4% MVC` | `YB.Ch6.CoreStability` |
| Headstand | Fuerza corona | `40–48%` peso corporal | `YB.Ch6.HeadstandSafety`, p. 191 |
| Headstand | >300 N | `51%` participantes | `YB.Ch6.HeadstandSafety`, p. 191 |
| Tree pose | Reducción momento rodilla | `54–71%` | `YB.Ch1.BiomechanicsOfYoga` |
| Tree pose | Mayor que caminar | `8–20%` | `YB.Ch1.BiomechanicsOfYoga` |
| GRF | Caminar | `1.0–1.5×` | `YB.Ch1.AppliedLoads` |
| GRF | Correr | `2.5–3.5×` | `YB.Ch1.AppliedLoads` |
| GRF | Yoga Hatha flow | `<2×` | `YB.Ch1.GroundReactionForces`, p. 36 |
| Hamstring | Hold isométrico | `30–45 s` | `YB.Appendix.ProximalHamstring` |
| Hamstring | Reps capacidad | `5 reps` | `YB.Appendix.ProximalHamstring` |
| Hamstring | Descanso | `2 min` | `YB.Appendix.ProximalHamstring` |
| Hamstring | Excéntrico reps | `15 reps` | `YB.Appendix.ProximalHamstring` |
| Hamstring | Excéntrico sets | `3–5 sets` | `YB.Appendix.ProximalHamstring` |
| Hamstring | Excéntrico tempo | `3–5 s` | `YB.Appendix.ProximalHamstring` |
| Hamstring | Concéntrico reps | `10–15` o fatiga | `YB.Appendix.ProximalHamstring` |
| Hamstring | Concéntrico sets | `3–5 sets` | `YB.Appendix.ProximalHamstring` |
| Hamstring | Progresión distancia pies | `10–15 cm` | `YB.Appendix.ProximalHamstring` |
| Cadera anterior | Resistencia | `20–40% MVC` | `YB.Appendix.AnteriorHip` |
| Cadera anterior | Eccentric lunge | `3 × 10` | `YB.Appendix.AnteriorHip` |
| Hombro | Plank | `30–45 s` | `YB.Appendix.ShoulderComplex` |
| Hombro | Push-up gate | `~3 × 10` | `YB.Appendix.ShoulderComplex` |

---

# Anexo B — Checklist de completitud

| Área | Estado | Implementación |
|---|---|---|
| Biomecánica como fuerza | Completa | `LoadParameterSet`, guardrails |
| Parámetros de carga | Completa | `TensileLoadPrescription` |
| SAID / progresión / variabilidad | Completa | reglas de carga |
| RPE | Completo | `progressive-overload-no-spikes` |
| Tipos de estiramiento | Completo | `StretchModality` |
| Rendimiento agudo | Completo | `static-stretch-performance-guard` |
| Lesiones y estiramiento | Completo | `stretch-injury-prevention-limits` |
| PRT | Completo | reglas `prt-*` |
| Stretch tolerance | Completo | `stretch-tolerance-sensory` |
| Arquitectura muscular | Completo | reglas excéntricas/isométricas |
| Estrés-deformación | Completo | `CollagenStrainZone` |
| Stiffness/compliance | Completo | reglas tendón |
| Viscoelasticidad | Completa | `ViscoelasticEffect` |
| Histéresis | Completa | flag educativo/adaptativo |
| Temperatura/hot yoga | Completo | `hot-yoga-caution` |
| ECM/colágeno/elastina | Completo | notas en `tendon-capacity` |
| Fibroblastos/mecanotransducción | Completo | principio de carga |
| Turnover colágeno | Completo | `collagen-turnover-recovery` |
| Capacidad | Completa | `TissueCapacityState` |
| Patología tendinosa | Completa | `pathic-tendon-loading` |
| Fases de reparación | Completas | `repair-phase-loading` |
| Grados de lesión | Completos | `injury-grade-context` |
| Dolor/estructura | Completo | `no-imaging-trigger` |
| Seguridad yoga | Completa | guardrails |
| Compresión insertional | Completa | `InsertionalCompressionRisk` |
| Hipermovilidad | Completa para reglas generales | `HypermobilitySpectrumFlag` |
| Biotensegrity | Conceptual | no regla dura; contexto global |
| Flexión espinal | Completa | `spinal-flexion-tolerance` |
| Squat/stoop | Completo | `squat-stoop-choice` |
| Core stability | Completo | `core-bracing-light-load` |
| Postura/alineación | Completo | `posture-not-pathology` |
| Cueing/kinematics | Completo | biblioteca de cues |
| Apéndice isquiotibial | Completo en texto | SkillPath |
| Apéndice cadera anterior | Completo en texto | SkillPath |
| Apéndice hombro | Completo en texto | SkillPath |
| Figuras del apéndice | Pendiente visual | `mediaRef: pending-figure` |
| Paginación exacta | Parcial | usar `YB.ChX.SectionName` |

---

# Anexo C — Siguientes pasos para agentes de implementación

1. **Crear diccionario de entidades**
   - `TensileLoadPrescription`
   - `LoadParameterSet`
   - `StretchModality`
   - `ViscoelasticEffect`
   - `CollagenStrainZone`
   - `EvidenceQualityTag`

2. **Crear motor de reglas de movilidad**
   - Reglas agudas/crónicas de estiramiento.
   - Flags temporal vs adaptativo.
   - Reglas de rendimiento pre-actividad.

3. **Crear motor de capacidad tendinosa**
   - Reglas de carga alta.
   - Reglas de recuperación contextual.
   - Referral triggers.
   - Integración con `InsertionalCompressionRisk`.

4. **Crear SkillPaths**
   - `proximal-hamstring-capacity`
   - `anterior-hip-capacity`
   - `shoulder-complex-capacity`
   - `spinal-flexion-tolerance` (opcional)

5. **Añadir flags globales**
   - `HypermobilitySpectrumFlag`
   - `InsertionalCompressionRisk`
   - `ReferralTrigger`
   - `EvidenceQualityTag`

6. **Poblar metadatos de SkillStep**
   - `primaryCues`
   - `commonFaults`
   - `bailTechniques`
   - `progressionGate`
   - `safetyFlags`
   - `mediaRef: pending-figure`

7. **Implementar guardrails**
   - No diagnóstico.
   - No imaging como trigger.
   - No prescripción clínica automática.
   - Derivación por red flags.
   - Uso educativo de strain zones.
   - No depender de figuras para lógica de negocio.

---

## Cierre

Con este paquete:

- **No hay bloqueantes para reglas de negocio.**
- **No hay bloqueantes para SkillPaths.**
- **No hay bloqueantes para cues/fallos/bail techniques.**
- **Sí hay pendiente visual para media y form-check fino.**
- **La paginación exacta se reemplaza por referencias estructurales.**

El sistema puede avanzar usando el texto como fuente canónica y las figuras como contenido complementario futuro.
