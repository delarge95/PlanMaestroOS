# clippinger-dance-anatomy-kinesiology-2ed — Extracción recuperada de chat

> **sourceId:** `clippinger-dance-anatomy-kinesiology-2ed` · **origen:** `chat-export-1787415001790` (Extracción Técnica para Sistema de Fitness) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# DANCE ANATOMY AND KINESIOLOGY — Extracción para Plan Maestro OS

> Extracción exhaustiva del libro de Karen Clippinger (2007). Se parafrasean conceptos de anatomía, biomecánica, alineación, progresiones de acondicionamiento y lesiones relevantes para danza. El enfoque es transferible a cualquier sistema de fitness que requiera reglas de alineación, movilidad, fuerza funcional y prehabilitación de extremidad inferior, columna y hombro.

---

## 1) Metadatos del libro

- **Título:** Dance Anatomy and Kinesiology
- **Autor(es):** Karen Clippinger, MSPE
- **Año:** 2007
- **Disciplina principal:** Anatomía aplicada, cinesiología, biomecánica, prevención de lesiones y acondicionamiento específico para danza.
- **Enfoque poblacional:** Bailarines (ballet, moderno, jazz, flamenco, tap, africano), desde estudiantes hasta profesionales. Secundariamente aplicable a atletas de disciplinas con demandas similares (gimnasia, patinaje artístico, artes marciales con componente estético).
- **Notas de alcance:**
  - Cubre: sistema esquelético, muscular, columna (cervical a sacro), cadera, rodilla, tobillo/pie, extremidad superior, análisis de movimiento.
  - Incluye progresiones de acondicionamiento (fuerza y flexibilidad) por región con progresiones numeradas.
  - Incluye lesiones comunes por región con mecanismos y tratamiento general.
  - NO cubre: programación de periodización a largo plazo, nutrición deportiva en profundidad, aspectos psicológicos, entrenamiento cardiovascular/resistencia, ni protocolos médicos de rehabilitación avanzada (remite siempre a profesionales).
  - El libro está orientado a la danza; muchas referencias de ROM y estética son específicas de ballet/jazz/moderno.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- **`AlignmentDeviationId`** (opcional):
  - Descripción: El libro clasifica desviaciones de alineación por región con implicaciones directas en riesgo de lesión y selección de ejercicios. Conviene modelar como un tipo con zona, severidad y efecto biomecánico.
  - Campos sugeridos: `zone` (lumbar|hip|knee|ankle|shoulder), `deviationType` (kyphosis|lordosis|flatBack|scoliosis|genuValgum|genuVarum|genuRecurvatum|pesPlanus|pesCavus|rearfootValgus|rearfootVarum|halluxValgus|rolledShoulders|wingedScapula), `severity` (mild|moderate|severe), `functionalVsStructural` (boolean), `associatedRisk`.
  - Referencias: Cap. 3 pp. 81–106; Cap. 5 pp. 250–254; Cap. 6 pp. 324–331; Cap. 7 pp. 395–397.

- **`KinematicChainType`** (opcional):
  - Descripción: El libro distingue consistentemente entre cadena cinética abierta y cerrada, lo cual afecta la selección de ejercicios y la interpretación de fuerzas articulares.
  - Campos sugeridos: `chainType` (open|closed|mixed), `distalSegmentFixed` (boolean), `implicationForExercise`.
  - Referencias: Cap. 1 pp. 29–31; Cap. 5 pp. 279–281.

- **`MuscleContractionRole`** (opcional):
  - Descripción: El libro clasifica roles musculares más allá de agonista/antagonista: stabilizer, synergist (neutralizer), force couple member.
  - Campos sugeridos: `role` (primeMover|antagonist|synergist|stabilizer|forceCoupleMember), `contextDescription`.
  - Referencias: Cap. 2 pp. 54–56.

- **`SpinalCurvatureId`** (opcional):
  - Descripción: Modelo para las cuatro curvas espinales y sus desviaciones, relevante para cualquier regla de alineación en ejercicios de columna.
  - Campos sugeridos: `region` (cervical|thoracic|lumbar|sacral), `curvatureDirection` (anteriorConvex|posteriorConvex), `deviation` (normal|hyperlordosis|kyphosis|flatBack), `degreeIfKnown`.
  - Referencias: Cap. 3 pp. 81, 93–106.

- **`FootArchType`** (opcional):
  - Descripción: Clasificación del arco plantar relevante para selección de calzado, ortesis y ejercicios de pie.
  - Campos sugeridos: `archType` (normal|pesPlanus|pesCavus), `flexibleVsRigid` (boolean), `associatedRisks`.
  - Referencias: Cap. 6 pp. 324–326.

- **`ImpingementZoneId`** (opcional):
  - Descripción: Zonas de impingement (hombro subacromial, tobillo anterior/posterior) con condiciones de provocación.
  - Campos sugeridos: `location` (subacromial|anteriorAnkle|posteriorAnkle|patellofemoral), `provocationAngle`, `aggravatingMovements`.
  - Referencias: Cap. 6 pp. 368–369; Cap. 7 pp. 455–456.

### 2.2 Mapeo a tipos existentes

- **`FocusId: mobility`**:
  - El libro trata la movilidad articular como requisito funcional con rangos objetivo específicos por articulación (ROM normal vs. ROM de bailarín élite). Distingue entre restricciones óseas, capsulares, ligamentosas y musculares. Propone tests de screening por articulación.

- **`FocusId: hypertrophy`**:
  - Tratamiento secundario. El libro advierte sobre hipertrofia excesiva de cuádriceps en ballet (pp. 271–274) y sugiere estrategias de reclutamiento para minimizarla. La hipertrofia se menciona como efecto colateral del entrenamiento de fuerza, no como objetivo principal.

- **`FocusId: tendon-health`**:
  - Cubre tendinitis aquílea (pp. 363–364), tendinitis del FHL (pp. 364), tendinitis del bíceps (pp. 458–459), epicondilitis lateral (p. 459), y jumper's knee (pp. 291–292). No ofrece protocolos de carga excéntrica cuantificados como libros específicos de tendinopatía.

- **`BodyZoneId: lumbar`**:
  - Lesiones: lumbosacral strain, mechanical low back pain, spondylolysis/spondylolisthesis, facet syndrome, disc herniation (Cap. 3 pp. 147–154). Prehab: core stability, co-contracción abdominales/extensores, control de hiperlordosis. ROM objetivo: flexión 0–80°, extensión 0–30° (p. 143t).

- **`BodyZoneId: hip`**:
  - Lesiones: stress fractures, muscle strains, iliopsoas tendinitis, snapping hip, trochanteric bursitis, piriformis syndrome, sacroiliac dysfunction (Cap. 4 pp. 229–235). Prehab: fuerza de rotadores externos profundos, flexores/extensores, abductores. ROM objetivo para danza: flexión funcional hasta 150°, hiperextensión 27° (élites), rotación externa ~60° (pp. 196, 205, 212).

- **`BodyZoneId: knee`**:
  - Lesiones: MCL, ACL, menisco, patellofemoral pain syndrome, jumper's knee, Osgood-Schlatter (Cap. 5 pp. 286–293). Prehab: equilibrio cuádriceps/isquiosurales, control de valgo, evitar forzar turnout. ROM: flexión 0–135°, extensión 0–10° (p. 281t).

- **`BodyZoneId: ankle`**:
  - Lesiones: sprain lateral (ATFL), impingement anterior/posterior, stress fractures metatarsianos, plantar fasciitis, compartment syndrome (Cap. 6 pp. 359–370). Prehab: fuerza peroneos, propiocepción, dorsiflexión adecuada. ROM: dorsiflexión 0–20°, plantar flexión 0–50° (normal); bailarinas élite: plantar flexión hasta 97–113° (pp. 353t, 354).

- **`BodyZoneId: shoulder`**:
  - Lesiones: impingement, rotator cuff tear, bursitis, adhesive capsulitis, AC sprain (Cap. 7 pp. 453–460). Prehab: fuerza rotator cuff, estabilización escapular, scapulohumeral rhythm. ROM: flexión 0–180°, extensión 0–60°, abducción 0–180°, rotación ext/int 0–90°/0–70° (p. 448t).

- **`MovementPattern: squat`** (plié):
  - Análisis detallado del grand plié como squat profundo con consideraciones de fuerzas patelofemorales, meniscos y PCL. Se recomienda uso juicioso con progresión (Cap. 5 pp. 265–268).

- **`MovementPattern: hinge`**:
  - Descrito como movimiento de jazz/moderno con torso inclinado y rodillas flexionadas (Cap. 5 pp. 267–268). Demanda cuádriceps y coordinación neuromuscular superior al pliés.

- **`MovementPattern: jump`** (saltos):
  - Análisis de preparación (plié), despegue (extensión triple), vuelo y aterrizaje. Fuerzas de aterrizaje: 3–6× peso corporal en grand jeté (p. 497). Cues para aterrizaje suave.

- **`MovementPattern: horizontal-push`** (push-up):
  - Usado como ejercicio de estabilización escapular y fuerza de hombro (Cap. 7 pp. 434t). Variante "push-up plus" para serrato anterior.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `spine_flexion_rom_normal`

- Descripción: ROM normal de flexión espinal (torácica + lumbar combinadas).
- Tipo: movilidad.
- Métrica principal: grados de flexión espinal.
- Valores numéricos:
  - Rango óptimo: 0–80°.
- Condiciones de aplicación: población general; bailarines pueden exceder.
- Capítulos/páginas: Cap. 3, p. 143, tabla 3.6.
- Comentarios: Limitantes principales: ligamentos posteriores, compresión anterior del disco, cápsulas facetarias, extensores espinales.

### Regla: `spine_extension_rom_normal`

- Descripción: ROM normal de extensión espinal.
- Tipo: movilidad.
- Métrica principal: grados de extensión.
- Valores numéricos:
  - Rango óptimo: 0–30°.
  - Bailarinas élite ballet: hasta 79° (rango 60–124°).
  - Bailarines élite ballet masculinos: hasta 65° (rango 45–93°).
- Condiciones de aplicación: valores élite solo informativos; no usar como objetivo para usuarios recreativos.
- Capítulos/páginas: Cap. 3, p. 143t, p. 142.
- Comentarios: ⚠️ La hiperextensión repetitiva es mecanismo de lesión (spondylolysis). Limitar en usuarios sin supervisión.

### Regla: `hip_external_rotation_minimum_ballet`

- Descripción: Rotación externa de cadera mínima sugerida para carrera en ballet clásico.
- Tipo: movilidad / criterio de selección.
- Métrica principal: grados de rotación externa pasiva de cadera.
- Valores numéricos:
  - Mínimo sugerido para ballet a los 15 años: ≥60°.
  - Promedio élite femenina: 52–60°.
  - Promedio élite (medición autora): 59.9°.
- Condiciones de aplicación: solo ballet clásico; otras formas de danza toleran menos. Medición: prono, rodilla 90°, pelvis estabilizada.
- Capítulos/páginas: Cap. 4, pp. 196–197.
- Comentarios: ⚠️ Cribado con valor exacto es desaconsejado por variabilidad. No usar como criterio excluyente automatizado.

### Regla: `hip_flexion_functional_ballet`

- Descripción: Flexión funcional de cadera (pierna al frente con rodilla extendida) en bailarinas élite.
- Tipo: movilidad.
- Métrica principal: grados de flexión de cadera con rodilla extendida.
- Valores numéricos:
  - Normal población general (rodilla extendida): 0–80°.
  - Normal con rodilla flexionada: 0–120°.
  - Promedio élite ballet femenino: 150°.
- Condiciones de aplicación: medición pasiva con pelvis estabilizada o permitiendo tilt posterior leve.
- Capítulos/páginas: Cap. 4, p. 205 (Tests and Measurements 4.4); tabla 6.7 p. 223t.
- Comentarios: La diferencia entre flexión con rodilla flexionada vs. extendida refleja insuficiencia pasiva de isquiosurales.

### Regla: `hip_extension_rom_ballet`

- Descripción: Hiperextensión de cadera en bailarinas élite.
- Tipo: movilidad.
- Métrica principal: grados de hiperextensión de cadera.
- Valores numéricos:
  - Normal población general: 0–15°.
  - Promedio élite ballet femenino: 27° (rango 6–47°).
- Condiciones de aplicación: medición prono/supino con pelvis estabilizada.
- Capítulos/páginas: Cap. 4, p. 212 (Tests and Measurements 4.5); tabla 6.7 p. 223t.
- Comentarios: Limitantes: ligamento iliofemoral, cápsula anterior, flexores de cadera.

### Regla: `ankle_plantarflexion_rom_ballet`

- Descripción: Plantar flexión de tobillo necesaria para demi-pointe/pointe.
- Tipo: movilidad.
- Métrica principal: grados de plantar flexión activa/pasiva.
- Valores numéricos:
  - Normal población general: 0–50°.
  - Promedio élite ballet femenino: 97–113°.
  - Mínimo recomendado para mecánica óptima de pointe: ≥90°.
- Condiciones de aplicación: medición sentado con goniómetro; incluye contribución de articulaciones distales al talocrural.
- Capítulos/páginas: Cap. 6, p. 353t, p. 354–355 (Tests and Measurements 6.3).
- Comentarios: 10–40% del rango proviene de articulaciones distales al talocrural.

### Regla: `ankle_dorsiflexion_rom_normal`

- Descripción: Dorsiflexión de tobillo normal.
- Tipo: movilidad.
- Métrica principal: grados de dorsiflexión.
- Valores numéricos:
  - Normal población general: 0–20°.
  - Bailarinas élite: frecuentemente reducida (<10° en 67% de estudiantes élite en un estudio).
  - Mínimo para marcha normal: 10°.
- Condiciones de aplicación: la reducción de dorsiflexión aumenta riesgo de pronación compensatoria y lesiones.
- Capítulos/páginas: Cap. 6, p. 353t, p. 353.
- Comentarios: ⚠️ Bailarinas tienden a tener dorsiflexión baja por entrenamiento de plantar flexión. Stretching de tríceps sural es prioritario.

### Regla: `knee_flexion_rom_normal`

- Descripción: ROM normal de flexión de rodilla.
- Tipo: movilidad.
- Métrica principal: grados de flexión.
- Valores numéricos:
  - Normal: 0–135°.
  - Extensión: 0–10° (población general); bailarinas frecuentemente hiperextienden.
- Capítulos/páginas: Cap. 5, p. 281t.

### Regla: `shoulder_flexion_rom_normal`

- Descripción: ROM normal de flexión de hombro.
- Tipo: movilidad.
- Métrica principal: grados.
- Valores numéricos:
  - Flexión: 0–180°. Extensión: 0–60°. Abducción: 0–180°.
  - Rotación externa (brazo a 90° abducción): 0–90°. Rotación interna: 0–70°.
- Capítulos/páginas: Cap. 7, p. 448t.

### Regla: `q_angle_normal`

- Descripción: Ángulo Q (cuádriceps) normal y umbral de riesgo patelofemoral.
- Tipo: alineación / riesgo.
- Métrica principal: grados del ángulo Q.
- Valores numéricos:
  - Normal masculino: 8–15°.
  - Normal femenino: 10–19°.
  - Umbral de riesgo: >15° (algunas fuentes), >17° (Hamill), >20° (Caillet).
- Condiciones de aplicación: rodilla extendida, cuádriceps relajado. Ángulo Q aumentado → mayor vector lateral sobre rótula → riesgo de patellofemoral pain.
- Capítulos/páginas: Cap. 5, p. 258.

### Regla: `strength_ratio_quad_hamstring`

- Descripción: Relación de fuerza cuádriceps/isquiosurales.
- Tipo: fuerza / equilibrio muscular.
- Métrica principal: ratio de fuerza.
- Valores numéricos:
  - Cuádriceps normalmente ~3× más fuerte que isquiosurales como antagonistas.
  - Riesgo de adductor strain si adductores <80% de fuerza de abductores (estudio hockey, Tyler et al. citado p. 221).
- Condiciones de aplicación: el desequilibrio excesivo aumenta riesgo de lesión.
- Capítulos/páginas: Cap. 5, p. 274; Cap. 4, p. 221.

### Regla: `abdominal_curl_up_reps`

- Descripción: Repeticiones efectivas para fortalecimiento abdominal.
- Tipo: volumen.
- Métrica principal: repeticiones por serie.
- Valores numéricos:
  - Rango efectivo: 6–12 repeticiones por serie.
  - Si se pueden hacer >12, aumentar dificultad (no reps).
  - 3–5 series con ejercicios variados.
- Condiciones de aplicación: sobrecarga adecuada (fallo muscular cercano); rango de movimiento suficiente (30–45° de flexión espinal).
- Capítulos/páginas: Cap. 3, pp. 124–125, tabla 3.3.

### Regla: `stretch_duration_static`

- Descripción: Duración de estiramiento estático efectivo.
- Tipo: movilidad / frecuencia.
- Métrica principal: segundos por estiramiento, repeticiones.
- Valores numéricos:
  - 3 repeticiones de 30 segundos proporcionan la mayor parte del cambio de longitud.
  - Aplicación lenta, baja fuerza, músculo calentado.
- Condiciones de aplicación: para ganar flexibilidad a largo plazo (elongación plástica). Para potencia (elongación elástica), aplicar estiramiento rápido de alta fuerza inmediatamente antes de contracción concéntrica.
- Capítulos/páginas: Cap. 2, p. 37; Cap. 3, p. 67.

### Regla: `stretch_pnf_contract_relax`

- Descripción: Protocolo PNF contract-relax.
- Tipo: movilidad.
- Métrica principal: segundos de contracción + segundos de estiramiento.
- Valores numéricos:
  - 5–10 s contracción del músculo objetivo → 10–20 s estiramiento.
  - Repetir 3 veces.
- Capítulos/páginas: Cap. 3, p. 67.

### Regla: `recovery_between_strength_sets`

- Descripción: Descanso entre series de fuerza.
- Tipo: descanso.
- Métrica principal: minutos entre series.
- Valores numéricos:
  - 2–3 minutos de recuperación entre series de abdominales o extensores.
  - Hacer series consecutivas sin descanso convierte el ejercicio en resistencia, no fuerza.
- Capítulos/páginas: Cap. 3, pp. 124–125, 132.

### Regla: `grand_plie_depth_caution`

- Descripción: Uso del grand plié (squat profundo) en bailarines.
- Tipo: volumen / progresión.
- Métrica principal: repeticiones consecutivas, profundidad.
- Valores numéricos:
  - Limitar repeticiones consecutivas.
  - Usar con técnica impecable y acondicionamiento adecuado.
  - Para principiantes/recreativos: limitar flexión a ~90° (muslo paralelo).
  - Para bailarines avanzados con rodillas sanas: puede usarse ROM completo con precaución.
- Condiciones de aplicación: sin dolor; progresión desde barra → centro; descenso y ascenso controlados; sin pausa en el fondo.
- Capítulos/páginas: Cap. 5, pp. 265–268.
- Comentarios: ⚠️ En posición de flexión profunda, componente paralelo de isquiosurales genera fuerza de dislocación. Mantener contracción muscular activa.

### Regla: `stretch_shortening_cycle_params`

- Descripción: Parámetros para optimizar el ciclo estiramiento-acortamiento.
- Tipo: intensidad / técnica.
- Métrica principal: magnitud, velocidad, delay.
- Valores numéricos:
  - Magnitud del pre-estiramiento: pequeña (ej. bajar 8–12 pulgadas / 20–30 cm en plié).
  - Aplicación rápida.
  - Delay mínimo: <0.4–1.0 segundo entre fase excéntrica y concéntrica.
  - Sin pausa ni relajación al final del estiramiento.
- Capítulos/páginas: Cap. 2, p. 54.

### Regla: `patellofemoral_compression_force_levels`

- Descripción: Fuerzas de compresión patelofemoral por actividad.
- Tipo: intensidad / riesgo.
- Métrica principal: múltiplos del peso corporal.
- Valores numéricos:
  - Caminar: ~0.5–1.2× PC.
  - Subir escaleras: ~3.3× PC.
  - Squat profundo: ~7.6× PC.
  - Grand jeté landing: ~20× PC.
- Condiciones de aplicación: bailarines con patellofemoral pain deben modificar actividades de alta compresión temporalmente.
- Capítulos/páginas: Cap. 5, pp. 261, 297.

### Regla: `hip_compressive_loads`

- Descripción: Cargas compresivas en cadera por actividad.
- Tipo: intensidad.
- Métrica principal: múltiplos del peso corporal.
- Valores numéricos:
  - Bipedestación (2 pies): ~1/3 PC por cadera.
  - Bipedestación (1 pie): ~85% PC.
  - Caminar/jogging: 3–5.5× PC.
  - Subir escaleras: hasta 7× PC.
- Capítulos/páginas: Cap. 4, p. 194.

### Regla: `ankle_landing_forces_jump`

- Descripción: Fuerzas de aterrizaje en saltos de danza.
- Tipo: intensidad.
- Métrica principal: múltiplos del peso corporal, tiempo.
- Valores numéricos:
  - Grand jeté: ~3–6× PC en fuerza vertical máxima.
  - Saltos grandes: hasta ~20× PC.
  - Aterrizaje suave: menor pico, mayor duración de fuerza.
  - Aterrizaje rígido: mayor pico, menor duración.
- Condiciones de aplicación: usar plié adecuado para aumentar tiempo de deceleración.
- Capítulos/páginas: Cap. 6, p. 497; Cap. 5, p. 261.

### Regla: `pointe_readiness_criteria`

- Descripción: Criterios funcionales para iniciar trabajo de pointe.
- Tipo: progresión / criterio de pase.
- Métrica principal: capacidad funcional.
- Valores numéricos / criterios:
  - Edad mínima sugerida: 10–11 años (varía por fuente).
  - 3–4 años de entrenamiento disciplinado.
  - Plantar flexión en línea con la tibia.
  - Mantener equilibrio en retiré en demi-pointe con alineación correcta (tobillo, rodilla, cadera, pelvis, columna).
  - Capacidad de mantener turnout en retiré.
  - No knuckling ni sickling.
  - Madurez esquelética y mental.
- Condiciones de aplicación: evaluación individual; no automatizar.
- Capítulos/páginas: Cap. 6, pp. 339–340.

### Regla: `calcium_intake_young_dancers`

- Descripción: Ingesta de calcio recomendada para bailarines jóvenes.
- Tipo: estilo de vida / nutrición.
- Métrica principal: mg/día.
- Valores numéricos:
  - 1200–1500 mg/día para edades 11–24 (NIH consensus panel, citado).
  - 300 mg por porción láctea estándar.
- Condiciones de aplicación: especialmente relevante en bailarinas con amenorrea o baja disponibilidad energética (tríada de la atleta).
- Capítulos/páginas: Cap. 1, pp. 7–8, tabla 1.1.

### Regla: `stress_fracture_risk_factors`

- Descripción: Factores de riesgo cuantificables para fractura por estrés.
- Tipo: riesgo.
- Métrica principal: múltiples factores binarios/continuos.
- Valores / condiciones:
  - Femenino + amenorrea (>6 meses) → riesgo de stress fracture 93× (Kadel et al., citado p. 9).
  - Bailar >5 horas/día → riesgo 16× vs. <5 horas.
  - Mujeres jóvenes: riesgo de stress fracture 2× vs. hombres; 70% de fracturas entre 15–19 años.
  - Inicio rápido de entrenamiento: 22–27% de casos en corredores.
- Capítulos/páginas: Cap. 1, pp. 8–9.

### Regla: `back_pain_recovery_timeline`

- Descripción: Recuperación de dolor lumbar.
- Tipo: progresión.
- Métrica principal: tiempo.
- Valores numéricos:
  - 70% mejoran en 3 semanas.
  - 90% en 2 meses.
  - Lumbosacral strain: 2/3 asintomáticos en 2 semanas; 90% en 2 meses.
  - Recurrencia de dolor lumbar: 40–60%.
- Capítulos/páginas: Cap. 3, pp. 149, 152.

### Regla: `stress_fracture_return_timeline`

- Descripción: Tiempo mínimo de recuperación para fractura por estrés.
- Tipo: progresión.
- Métrica principal: semanas/meses.
- Valores numéricos:
  - Mínimo 2 meses, a veces hasta 6 meses antes de volver a clase.
  - Reintroducción gradual; dolor como guía.
  - Si dolor recurre: descansar 1–2 días hasta caminar sin dolor, luego reanudar un nivel por debajo del que provocó dolor.
- Capítulos/páginas: Cap. 4, p. 230; Cap. 6, p. 367.

### Regla: `abdominal_strength_pushup_norms`

- Descripción: Normas de push-up para evaluación de fuerza de hombro.
- Tipo: fuerza / evaluación.
- Métrica principal: repeticiones máximas.
- Valores numéricos (edades 20–29):
  - Hombres (desde pies): excelente ≥36; promedio 22–28.
  - Mujeres (desde rodillas): excelente ≥30; promedio 15–20.
- Capítulos/páginas: Cap. 7, p. 445 (Tests and Measurements 7.1).

### Regla: `hamstring_flexibility_for_floor_sitting`

- Descripción: Flexión de cadera mínima necesaria para sentarse en el suelo con columna neutral.
- Tipo: movilidad.
- Métrica principal: grados de flexión de cadera con rodillas extendidas.
- Valores numéricos:
  - Se requiere >90° de flexión de cadera para mantener pelvis neutral sentado en suelo con piernas extendidas.
  - Si <90°, el bailarín mostrará tilt posterior de pelvis y flexión lumbar compensatoria.
- Condiciones de aplicación: modificar doblando rodillas ligeramente si hay limitación.
- Capítulos/páginas: Cap. 4, p. 223; Cap. 3, p. 115.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `spinal-core-stability`

- Disciplina: danza / fitness general.
- Objetivo final: estabilización neuromuscular lumbopélvica durante movimiento de extremidades.
- Requisitos de seguridad previos: ausencia de dolor lumbar agudo; capacidad de realizar tilt pélvico con control.
- Pasos de la progresión (basado en tabla 3.5, p. 142):

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Pelvic tilt (supino) | Supino, rodillas flexionadas; llevar pubis y costillas hacia otro otro → flatten lumbar contra suelo. Hold 8 cuentas. | Control de tilt sin mover cadera | No involucrar abdominales profundos | Cap. 3, tabla 3.4A, p. 134 |
| 2 | Isometric curl-up | Supino; posterior tilt + curl up hasta escápulas fuera del suelo; manos en muslos para asistir; hold 4 cuentas. | Mantener posición sin caer al soltar manos | Usar impulso; no flexionar columna suficientemente | Cap. 3, tabla 3.4B, p. 134 |
| 3 | Curl-back (excéntrico) | Sentado; curl hacia atrás controladamente; hold 4 cuentas; volver con asistencia si necesario. | Control excéntrico sin colapsar | Extender columna en lugar de flexionar | Cap. 3, tabla 3.4C, p. 134 |
| 4 | Hip lift (posterior tilt) | Supino; posterior tilt → elevar sacro del suelo → thighs hacia hombros. | Elevar pelvis sin flexionar cadera | Usar impulso; hiperextender lumbar | Cap. 3, tabla 3.4E, p. 135 |
| 5 | Inverted "V" (plank → pike) | Plank con pies en balón; posterior tilt → elevar cadera hacia techo. | Control de pelvis durante todo el rango | Arquear lumbar; perder estabilidad | Cap. 3, tabla 3.4F, p. 136 |
| 6 | Leg reach (estabilización) | Apoyado en codos; llevar rodillas al pecho alternando; extender una pierna ~60 cm del suelo; hold. | Mantener pelvis estable; lumbar no arquea | Arquear lumbar; mover pelvis | Cap. 3, tabla 3.4G, p. 136 |
| 7 | Curl-up with rotation | Curl-up completo + rotación derecha/centro/izquierda/centro. | Rotación con columna flexionada; hombros nivelados | Dejar caer un hombro; perder flexión | Cap. 3, tabla 3.4M, p. 140 |
| 8 | Side-up | Decúbito lateral; elevar cabeza, hombros y torso lateralmente. | Control concéntrico y excéntrico | Flexionar columna en lugar de lateroflexión | Cap. 3, tabla 3.4K, p. 139 |

### SkillPath: `ankle-foot-strength-pointe-prep`

- Disciplina: danza / movilidad de tobillo.
- Objetivo final: fuerza y alineación suficiente para demi-pointe/pointe seguro.
- Requisitos de seguridad previos: sin dolor de tobillo; dorsiflexión funcional; alineación de rodilla-pie correcta.
- Pasos de la progresión (basado en tabla 6.5, p. 342):

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Calf raise (2 pies → 1 pie) | Elevarse a demi-pointe lentamente; mantener peso entre 1º y 2º metatarsiano; bajar controlado. | Control excéntrico; sin roll-in/out | Rodar hacia dentro/fuera; no usar stirrup muscles | Cap. 6, tabla 6.6A, p. 343 |
| 2 | Sitting point (banda) | Sentado; plantar flexión contra banda; liderar con metatarsianos, añadir dedos al final. | Control sin inversión/eversión | Invertir/evertir; no usar articulación intertarsal | Cap. 6, tabla 6.6B, p. 344 |
| 3 | Single-leg jumps | Saltos repetitivos 1 pie; mecánica de aterrizaje correcta. | Aterrizaje suave; sin pronación excesiva | Doble heel strike; valgo de rodilla | Cap. 6, tabla 6.6C, p. 345 |
| 4 | Sitting dorsiflexion (peso) | Sentado; dorsiflexión contra peso colgando del pie. | ROM completo sin dolor | No controlar excéntrico | Cap. 6, tabla 6.6D, p. 345 |
| 5 | Sitting big toe up and away (banda) | Inversión + flexión plantar contra banda. | Aislamiento sin mover rodilla | Mover rodilla; no aislar pie | Cap. 6, tabla 6.6F, p. 347 |
| 6 | Sitting little toe up and away (banda) | Eversión + flexión plantar contra banda. | Control sin compensar cadera | Mover cadera en lugar de pie | Cap. 6, tabla 6.6H, p. 348 |
| 7 | Doming | Sentado; presionar dedos contra suelo y elevar arco metatarsiano sin curvar dedos. | Arco elevado con dedos extendidos | Curvar dedos (IP flexión) | Cap. 6, tabla 6.6J, p. 349 |
| 8 | Ankle disk relevé | Ambos pies en disco; relevé manteniendo disco equilibrado. | Estabilidad sin tocar borde con disco | Perder equilibrio; roll-out | Cap. 6, tabla 6.6N, p. 351 |
| 9 | Toe wall climbs | De cara a pared; escalar con dedos de pies hacia arriba. | Fuerza para subir sin knuckling | Knuckling; perder alineación | Cap. 6, fig. 6.42D, p. 341 |

### SkillPath: `shoulder-stability-overhead`

- Disciplina: danza / fitness.
- Objetivo final: estabilidad escapular y fuerza de hombro para movimientos overhead y soporte de peso.
- Requisitos: sin dolor de hombro; ROM de flexión ≥90° sin compensación.
- Pasos de la progresión (basado en tabla 7.10):

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Push-up with elbows in | Plank; flexionar/extender codos cerca del cuerpo; pelvis neutral. | Mantener línea recta tronco; sin winging | Arquear lumbar; scápulas winged | Cap. 7, tabla 7.10A, p. 434 |
| 2 | Front arm raise (mancuerna) | Elevar brazo al frente hasta ~90°; control. | Sin arquear espalda; sin hike de hombro | Compensar con extensión lumbar | Cap. 7, tabla 7.10B, p. 434 |
| 3 | Press-up (soporte en silla) | Sentado en borde; press down → elevar cuerpo; mantener escápulas deprimidas. | Mantener depresión escapular; sin dolor | Hike de hombros; perder aducción | Cap. 7, tabla 7.10C, p. 435 |
| 4 | Sitting row (banda) | Sentado; row con codos → atrás; escápulas ligeramente juntas y abajo. | Escápulas controladas; sin protracción | Encoger hombros; perder retracción | Cap. 7, tabla 7.10D, p. 435 |
| 5 | Side arm raise (mancuerna) | Elevar brazo lateral hasta ~90°; rotación externa progresiva. | Sin hike; sin dolor en arco 60–120° | Compensar con elevación escapular | Cap. 7, tabla 7.10F, p. 437 |
| 6 | Kneeling scarecrow | Prone sobre balón; elevar codos; rotar externamente; reach overhead. | Escápulas down; sin hiperextensión lumbar | Arquear lumbar; perder rotación | Cap. 7, tabla 7.10H, p. 439 |
| 7 | Double-shoulder external rotation (banda) | Sentado; codos 90° al lado; rotación externa contra banda. | Mantener codos al lado; escápulas down | Codos se van adelante; hike | Cap. 7, tabla 7.10I, p. 439 |
| 8 | Kneeling overhead press | Arrodillado en reformer; press overhead con control escapular. | Sin hike; sin rib flare | Protrusión costal; pérdida de estabilidad | Cap. 7, tabla 7.10G, p. 438 |

### SkillPath: `hip-turnout-development`

- Disciplina: danza.
- Objetivo final: maximizar uso funcional de rotación externa de cadera sin forzar rodilla/tobillo.
- Requisitos: sin dolor de cadera/rodilla; ROM pasivo de rotación externa evaluado.
- Pasos de la progresión (basado en Cap. 4, pp. 196–201):

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Supine frog stretch | Supino; rodillas flexionadas, plantas juntas; gravedad abre rodillas. | Sensación de stretch en cadera sin dolor lumbar | Forzar rodillas al suelo; tilt pélvico anterior | Cap. 4, fig. 4.32C, p. 198 |
| 2 | Modified prone frog | Prono; rodillas 90°, pelvis neutral; presionar isquion ligeramente abajo/adelante. | Mantener ASIS en contacto con suelo | Tilt pélvico anterior; forzar pies al suelo | Cap. 4, fig. 4.32A, p. 198 |
| 3 | Prone passé (banda/tubo) | Prono; rodilla 90°; rotar externamente desde cadera; mantener pelvis neutral. | Rotación desde cadera sin mover pelvis | Rotar desde rodilla; pelvis se mueve | Cap. 4, tabla 4.5M, p. 219 |
| 4 | Prone frog (balón) | Prono sobre balón; presionar pies juntos; rotar caderas; elevar rodillas. | Usar DOR inferiores; sin compensar lumbar | Elevar pies primero; twist de rodillas | Cap. 4, tabla 4.5N, p. 220 |
| 5 | Wall plié (DOR focus) | 2ª posición contra pared; dejar caer rodillas → recuperar con DOR bajos. | Recuperar alineación rodilla-pie sin tilt | Dejar rodillas colapsar medialmente | Cap. 4, p. 200 (Concept Demo 4.2) |
| 6 | Standing plié (funcional) | Plié en 1ª/2ª posición; mantener turnout desde cadera; rodillas sobre pies. | Rodillas alineadas; sin pronación | Forzar desde rodilla; perder rotación al subir | Cap. 4, pp. 199–201 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Plié (squat de danza)

- Cues principales:
  - "Guiar la rodilla sobre el segundo dedo del pie"
  - "Mantener rotación desde la cadera, no desde la rodilla"
  - "Pélvis vertical (ASIS y pubis en mismo plano frontal)"
  - "Peso distribuido entre 1º y 2º metatarsianos"
  - "No pausar en el fondo del plié"
  - "Lift out of your knees" (no colgar en ligamentos)
- Errores frecuentes:
  - Rodillas caen medialmente (valgo) → estrés MCL y pronación
  - Tilt pélvico anterior excesivo → hiperlordosis
  - Forzar turnout desde rodilla/tobillo → torsión tibial
  - Pausar en el fondo → perder beneficio de SSC
  - Inclinar torso adelante → mayor demanda de cuádriceps
- Variantes seguras:
  - Reducir profundidad si hay dolor patelofemoral
  - Usar barra para soporte en principiantes
  - Limitar a 90° si hay antecedentes de lesión de menisco/PCL
- Indicaciones específicas:
  - No usar grand plié completo con patellofemoral pain agudo
  - Evitar si hay dolor de menisco con flexión profunda
  - Modificar con bailarinas con dorsiflexión limitada (<10°)
- Páginas: Cap. 5, pp. 265–268; Cap. 4, pp. 199–201.

### Relevé / Calf raise

- Cues principales:
  - "Peso centrado entre 1º y 2º metatarsianos"
  - "Usar stirrup muscles (tibialis posterior, tibialis anterior, peroneus longus) para elevar arco"
  - "No rodar hacia dentro ni hacia fuera"
  - "Mantener rodilla alineada sobre tobillo"
  - "Shift del centro de masa adelante antes de subir"
- Errores frecuentes:
  - Roll-out (inversión) → riesgo de sprain lateral
  - Roll-in (eversión) → estrés medial
  - Sickling (pie se va lateral)
  - No usar articulación intertarsal (solo talocrural)
  - Hiperextender rodilla
- Variantes seguras:
  - Comenzar con 2 pies → 1 pie
  - Usar pared/barra para equilibrio
  - Disco de equilibrio para propiocepción
- Indicaciones específicas:
  - Con dolor aquíleo: reducir rango; evitar plantar flexión máxima
  - Con impingement posterior: limitar rango final
- Páginas: Cap. 6, pp. 336–341; tabla 6.6A, N.

### Arabesque / Back extension

- Cues principales:
  - "Reach the leg out" antes de anterior tilt de pelvis
  - "Lift from the knee" para enfatizar hamstrings
  - "Pull lower abdominals up and in" para limitar shear lumbar
  - "Lift upper back" para distribuir extensión
  - "Maximizar rotación externa de fémur antes de rotar pelvis"
- Errores frecuentes:
  - Tilt pélvico anterior prematuro → hiperlordosis lumbar
  - Rotación pélvica excesiva ("open the hip")
  - No usar co-contracción abdominal → shear L5-S1
  - Arquear solo lumbar sin torácica
- Variantes seguras:
  - Limitar altura de pierna si hay dolor lumbar
  - Usar kneeling arabesque para aislar hamstrings
  - Fortalecer extensores espinales y hamstrings antes de ROM extremo
- Indicaciones específicas:
  - Con spondylolysis: evitar hiperextensión
  - Con disc herniation aguda: evitar extensión; preferir flexión
  - Con hip flexor tightness: stretch primero
- Páginas: Cap. 4, pp. 208–211; Cap. 3, pp. 115–119.

### Front développé / Grand battement

- Cues principales:
  - "Fold the thigh into the chest antes de extender rodilla"
  - "Usar iliopsoas, no solo rectus femoris"
  - "Slight tuck de pelvis para ventaja mecánica del iliopsoas"
  - "Reach the leg out" en lugar de "lift from the knee"
- Errores frecuentes:
  - Arquear lumbar (compensar con extensión espinal)
  - Rectus femoris como único motor → active insufficiency
  - Perder turnout al elevar pierna
  - Anterior tilt pélvico excesivo
- Variantes seguras:
  - Comenzar en elbows (menos demanda de estabilidad)
  - Progresar a torso vertical → standing
  - Usar mano para asistir rango > concéntrico (isométrico/excéntrico)
- Indicaciones específicas:
  - Si hamstring tightness limita: stretch primero
  - Si iliopsoas weak: ejercicios específicos >90° de flexión
- Páginas: Cap. 4, pp. 201–204.

### Side développé / À la seconde

- Cues principales:
  - "Drop the greater trochanter toward sitz bones" (DOR inferiores)
  - "Mantener pelvis level en rango inicial"
  - "Usar iliopsoas + abductores en rango alto"
  - "Rotación externa para evitar impingement del trochanter"
- Errores frecuentes:
  - Hiking de pelvis (lateral tilt prematuro)
  - Sin rotación externa → impingement del trochanter mayor
  - Compensar con inclinación lateral de columna
- Variantes seguras:
  - Side-lying con ankle weight para aislamiento
  - Progresar a standing con asistencia de mano
  - Limitar rango si hay dolor de cadera
- Páginas: Cap. 4, pp. 204–208.

### Push-up / Floor work con soporte de brazos

- Cues principales:
  - "Pelvis neutral; línea recta hombro-cadera-rodilla"
  - "Codos cerca del cuerpo"
  - "Escápulas deprimidas; no winging"
  - "Push-up plus: abducir escápulas al final (serrato anterior)"
- Errores frecuentes:
  - Arquear lumbar (sagging)
  - Hike de hombros (elevación escapular)
  - Codos flare out → estrés de hombro
  - Winging de escápulas
- Variantes seguras:
  - Desde rodillas si fuerza insuficiente
  - Con balón para inestabilidad progresiva
  - Inverted "V" para preparación de handstand
- Páginas: Cap. 7, tabla 7.10A; Cap. 3, fig. 3.42.

### Landing de saltos

- Cues principales:
  - "Land softly: ir a través del pie (toe-heel)"
  - "Usar plié: flexionar cadera, rodilla y tobillo progresivamente"
  - "Rodillas sobre pies; no valgo"
  - "No aterrizar con rodillas rígidas/hiperextendidas"
  - "Distribuir impacto: más cadera y rodilla en saltos altos"
- Errores frecuentes:
  - Flat-foot landing → mayor pico de fuerza
  - Valgo de rodilla → riesgo ACL
  - Rodillas hiperextendidas → riesgo ACL
  - Sin plié → fuerzas no absorbidas
  - Pronación excesiva
- Variantes seguras:
  - Progresar de 2 pies → 1 pie
  - Reducir altura de salto inicialmente
  - Superficie resiliente
- Páginas: Cap. 6, pp. 497–498; Cap. 5, pp. 265–268.

### Running en danza

- Cues principales:
  - "Swing the knee forward on slight diagonal" (no circumducción)
  - "Pull the ground toward you" en foot strike (reducir braking force)
  - "Drive the back leg downward and backward"
  - "Mantener pelvis/tronco controlados"
- Errores frecuentes:
  - Overstriding → braking force excesivo
  - Circunducción de pierna → ineficiencia
  - Tilt pélvico anterior excesivo
  - Excesiva oscilación vertical
- Páginas: Cap. 8, pp. 490–492.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Lumbar hyperlordosis / Mechanical low back pain

- Zona: `lumbar`
- Etiología resumida: desequilibrio entre fuerza abdominal y extensores; tightness de hip flexors y extensores lumbares; postura habitual; growth spurts en adolescentes.
- Signos y síntomas: aumento de curva lumbar; tilt pélvico anterior; dolor lumbar con extensión.
- Protocolos de tratamiento:
  - Fase 1 (reducción de síntomas):
    - Objetivo: reducir dolor e inflamación.
    - Qué se hace: descanso relativo, antiinflamatorios, modalidades (hielo/calor).
    - Qué NO se hace: hiperextensión, carga axial pesada.
    - Criterio para fase 2: dolor controlado con actividad básica.
  - Fase 2 (corrección de desequilibrios):
    - Objetivo: fortalecer abdominales (especialmente inferiores), estirar hip flexors y extensores lumbares.
    - Qué se hace: ejercicios de tabla 3.4 A–F; stretches tabla 3.7 A–B; hip flexor stretches tabla 4.7 A–B.
    - Criterio para fase 3: capacidad de mantener pelvis neutral en bipedestación y plié.
  - Fase 3 (reintegración funcional):
    - Objetivo: patrones de activación correctos en movimiento.
    - Qué se hace: progresión de pliés, relevés, movimientos de danza con énfasis en co-contracción abdominal.
- Ejercicios de prehab:
  - Pelvic tilt, hip lift, curl-up con posterior tilt (frecuencia: 3–5×/semana).
  - Stretching de iliopsoas y erector spinae (diario si hay tightness).
- Umbrales de dolor / red flags:
  - Dolor con radiación a piernas → descartar disc herniation.
  - Dolor nocturno persistente → evaluación médica.
  - Dolor con hiperextensión unilateral → descartar spondylolysis.
- Referencias: Cap. 3, pp. 95–98, 147–149.

### Lesión / condición: Spondylolysis / Spondylolisthesis

- Zona: `lumbar` (L4-L5, L5-S1)
- Etiología resumida: hiperextensión repetitiva (+ rotación/axial loading); común en bailarines, gimnastas, futbolistas. Incidencia en bailarines profesionales: ~32% (vs. 5% población general).
- Signos y síntomas: dolor lumbar con extensión; tenderness sobre spinous process; puede haber radiculopatía y tightness de hamstring unilateral.
- Stadia: Spondylolisthesis graded 1–4 (25%, 50%, 75%, >75% slippage).
- Protocolos:
  - Fase 1: inmovilización con bracing anti-lordótico (si es traumático reciente); descanso de hiperextensión.
  - Fase 2: flexion exercises; abdominal strengthening; evitar extensión.
  - Fase 3: retorno gradual; técnica de co-contracción; evitar j umps/overhead lifting inicialmente.
- Red flags: dolor con extensión unilateral en adolescente → evaluación inmediata; "step-off" palpable → spondylolisthesis.
- Referencias: Cap. 3, pp. 149–150; Cap. 3, p. 152.

### Lesión / condición: Disc herniation

- Zona: `lumbar` (95% en L4-L5 o L5-S1)
- Etiología: flexión/hiperextensión + rotación; degeneración del disco (3ª–4ª década).
- Signos y síntomas: sciatica (dolor radiante posterior/posterolateral del muslo); agravado con coughing, sitting prolongado; puede haber debilidad/entumecimiento.
- Protocolos:
  - Fase aguda: extensión (McKenzie) suele aliviar; flexión suele agravar.
  - NO hacer curl-ups; usar isométricos/estabilización.
  - Posición de alivio: supino con piernas elevadas sobre silla.
  - Retorno gradual; evitar j umps, lifting, flexión completa, flexión+rotación inicialmente.
- Red flags: debilidad progresiva; pérdida de control vesical/intestinal → emergencia.
- Referencias: Cap. 3, pp. 151–152.

### Lesión / condición: Patellofemoral pain syndrome

- Zona: `knee`
- Etiología: malalineación patelar (lateral tracking); debilidad de vastus medialis; aumento de Q angle; tightness de IT band; forced turnout.
- Signos y síntomas: dolor difuso anterior/alrededor de rótula; dolor con flexión (pliés), sitting prolongado, bajar escaleras; debilidad/swelling. Dolor con sitting prolongado es signo distintivo.
- Protocolos:
  - Fase 1: hielo, actividad modificada, antiinflamatorios. Evitar pliés profundos, j umps, floor work.
  - Fase 2: fortalecimiento de cuádriceps (quad sets → straight leg raises → terminal knee extension); bajo dolor.
  - Fase 3: progresión a ROM completo; closed chain exercises; corrección de técnica (turnout, alineación rodilla-pie).
- Ejercicios de prehab:
  - Quad set, straight leg raise, terminal knee extension (tabla 5.3 A–C).
  - Stretching de IT band y hip flexors si indicado.
  - Corrección de forced turnout.
- Red flags: locking/catching → descartar menisco; swelling rápido → evaluar ligamentos.
- Referencias: Cap. 5, pp. 289–291.

### Lesión / condición: Ankle sprain (lateral)

- Zona: `ankle`
- Etiología: inversión + plantar flexión; ATFL más vulnerable en plantar flexión. 85% de sprains son por inversión.
- Signos y síntomas: pop/tearing; dolor lateral; swelling; inestabilidad; dificultad para caminar.
- Stadia: Grade I (parcial ATFL), Grade II (completo ATFL + parcial calcaneofibular), Grade III (ruptura completa del complejo lateral).
- Protocolos:
  - Fase aguda: RICE (Rest, Ice, Compression, Elevation). Protección (taping, air cast, walking boot según severidad).
  - Fase 2: ROM suave; strengthening de peroneos; proprioception.
  - Fase 3: ejercicios funcionales (relevés, single-leg balance, ankle disk); retorno gradual a j umps/turns.
  - Grade III en profesionales: considerar reparación quirúrgica.
- Ejercicios de prehab:
  - Peroneal strengthening (tabla 6.6 H, I).
  - Proprioception: side-to-side on foam roller, ankle disk circles, single-leg balance (tabla 6.6 L–N).
  - Ankle taping para retorno inicial.
- Red flags: incapacidad para caminar; deformidad; dolor medial → descartar deltoid/fractura.
- Referencias: Cap. 6, pp. 360–362.

### Lesión / condición: Achilles tendinitis

- Zona: `ankle`
- Etiología: overuse; tight triceps surae; cavus foot; pronación excesiva; floors duros; fuerza inadecuada de plantar flexores.
- Signos y síntomas: dolor 2–6 cm sobre inserción calcánea; morning stiffness; dolor con resisted plantar flexion y stretching.
- Protocolos:
  - Fase 1: reducir actividad; hielo; antiinflamatorios; heel lift temporal.
  - Fase 2: stretching de triceps surae; eccentric calf raises en step (énfasis en fase excéntrica lenta).
  - Fase 3: retorno gradual a j umps/pointe; corrección de técnica.
- Red flags: dolor agudo súbito con "pop" → ruptura de Aquiles (emergencia quirúrgica en bailarines).
- Referencias: Cap. 6, pp. 363–364.

### Lesión / condición: Iliopsoas tendinitis / Snapping hip

- Zona: `hip`
- Etiología: uso repetitivo en développé/battement; tendón pasa bajo ligamento inguinal; posición de flexión+abducción+rotación externa.
- Signos y síntomas: dolor/crepitus en ingle; snapping al llevar pierna de segunda a primera; dolor con leg raise alto.
- Protocolos:
  - Antiinflamatorios; stretching de hip flexors; corrección de técnica (hiking, turnout insuficiente).
  - Fortalecer iliopsoas y DOR.
- Referencias: Cap. 4, pp. 232–233.

### Lesión / condición: Plantar fasciitis

- Zona: `ankle` (plantar)
- Etiología: j umping repetitivo; pes planus/cavus; tight triceps surae; pronación excesiva.
- Signos y síntomas: dolor en cara plantar del calcáneo (medial/central); morning stiffness ("pies como tablas"); dolor con MTP extension pasiva.
- Protocolos:
  - Hielo, friction massage; heel raises en step (eccentric loading); intrinsic foot strengthening; orthotics/arch support; triceps surae stretching.
  - Modificar actividad; evitar j umps temporalmente.
- Referencias: Cap. 6, p. 362.

### Lesión / condición: Shoulder impingement (subacromial)

- Zona: `shoulder`
- Etiología: pinzamiento de supraspinatus/subacromial bursa bajo arco coracoacromial. Primario (structural narrowing) o secundario (scapular dyskinesis, rotator cuff weakness, posterior capsule tightness).
- Signos y síntomas: dolor con abducción 60–120° (painful arc); dolor con overhead activities; puede haber crepitus.
- Protocolos:
  - Fase 1: evitar overhead y rango doloroso; antiinflamatorios.
  - Fase 2: strengthening de rotator cuff (posición 30° abduction en scapular plane); serrato anterior y lower trapezius.
  - Fase 3: restaurar scapulohumeral rhythm; posterior capsule stretching; retorno progresivo a overhead.
- Ejercicios de prehab:
  - Kneeling scarecrow, double-shoulder external rotation, push-up plus.
  - Stretching de posterior capsule (cross-body stretch).
- Red flags: incapacidad para abducir contra resistencia → descartar rotator cuff tear.
- Referencias: Cap. 7, pp. 455–456.

### Lesión / condición: Stress fractures (metatarsales, tibia, fibula)

- Zona: `ankle` / `hip`
- Etiología: carga repetitiva > capacidad de remodelación; amenorrea; nutrición inadecuada; training errors (aumento rápido de volumen); floors duros.
- Signos y síntomas: dolor gradual localizado; peor con weight bearing; inicialmente mejora con warm-up y vuelve después; point tenderness.
- Protocolos:
  - Descarga (crutches, boot, wooden-soled shoe según sitio/severidad).
  - Mínimo 2 meses antes de retorno; a veces 6 meses.
  - Reintroducción gradual; pain-free como guía.
  - Abordar factores de riesgo: nutrición, amenorrea, training load.
- Red flags: dolor que no mejora con descanso → imaging; dolor con hop/single-leg stance.
- Referencias: Cap. 1, pp. 8–9; Cap. 4, p. 230; Cap. 6, pp. 366–368.

### Lesión / condición: Shin splints / Tibial stress syndrome

- Zona: `ankle` (lower leg)
- Etiología: aumento rápido de carga; cambio de superficie; pronación excesiva; debilidad de dorsiflexores.
- Signos y síntomas: dolor difuso anterior o posteromedial de tibia; inicialmente mejora con warm-up; progresivo si no se trata.
- Protocolos:
  - Reducir actividad (eliminar j umps); hielo; fortalecer dorsiflexores/inverters; corregir pronación; orthotics.
  - Si dolor persiste → descartar stress fracture o compartment syndrome.
- Referencias: Cap. 6, pp. 364–365.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Nutrición y salud ósea

- El libro enfatiza la relación entre disponibilidad energética, amenorrea y densidad ósea (tríada de la atleta).
- Ingesta de calcio: 1200–1500 mg/día para 11–24 años.
- Fumar y cafeína excesiva aumentan riesgo de pérdida ósea.
- Estrogen es protector de densidad ósea; amenorrea atlética → riesgo de osteoporosis precoz y stress fractures.
- ⚠️ No hay protocolo nutricional completo; remitir a stack de nutrición.
- Referencias: Cap. 1, pp. 7–9.

### Sueño / Estrés

- No se aborda directamente en el libro.

### Entrenar enfermo

- No se aborda directamente en el libro.

### Descanso y recuperación

- El libro enfatiza descanso entre series (2–3 min) para ganancia de fuerza vs. resistencia.
- Para tendinitis y overuse: modificación de actividad (no cese completo salvo indicación médica).
- Para stress fractures: cese de impacto; retorno gradual.
- ⚠️ No hay periodización formal.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal de **reglas de alineación y biomecánica** para validación de técnica en ejercicios de extremidad inferior (plié/squat, relevé/calf raise, lunge, jump landing).
  - Fuente de **ROM objetivo y tests de screening** por articulación (hip, knee, ankle, shoulder, spine).
  - Fuente de **progresiones de acondicionamiento** por región (spine core, hip strength/mobility, ankle-foot strength, shoulder stability) con criterios de avance.
  - Fuente de **cues técnicos y errores comunes** para enriquecer `primaryCues` y `commonFaults` en SkillStep.
  - Fuente de **reglas de riesgo** (patellofemoral compression, ankle sprain mechanism, stress fracture risk factors, impingement zones).
  - Fuente de **clasificación de desviaciones de alineación** para modelar `AlignmentDeviationId`.

- **Limitaciones:**
  - Población de bailarines → muchos ROM y criterios estéticos son específicos de danza; ajustar umbrales para usuarios recreativos/fitness general.
  - No hay protocolos de rehabilitación cuantificados con cargas/progresiones exactas (ej. no hay protocolo de carga excéntrica para tendinopatía como en libros de Cook/Purdam).
  - No hay periodización a largo plazo ni programación de mesociclos.
  - Lenguaje anatómico denso → usar como referencia para generar reglas simplificadas, no como texto de usuario final.
  - Las lesiones se describen con fines educativos, no de diagnóstico → **NO usar para diagnóstico automatizado**.

- **Recomendaciones específicas:**
  1. Crear `rules/alignment_validation.ts` con las desviaciones del Cap. 3, 5, 6 (kyphosis, lordosis, genu valgum/varum, pes planus/cavus, rearfoot valgus/varus) como validaciones de técnica en ejercicios.
  2. Crear `SkillPath` para `ankle-foot-strength` (tabla 6.5/6.6 del libro) y `spinal-core-stability` (tabla 3.4/3.5) con los steps y criterios de avance extraídos.
  3. Añadir a `BodyZoneId: knee` y `BodyZoneId: ankle` las reglas de compresión patelofemoral y fuerzas de aterrizaje como guardrails de intensidad en ejercicios de jump/squat.
  4. Crear `rules/rom_screening.ts` con los valores de ROM normal vs. élite por articulación para calibrar objetivos de movilidad del usuario.
  5. Usar los cues de la sección 5 para poblar `primaryCues`, `commonFaults` y `bailTechniques` en los SkillStep de squat, hinge, jump, calf-raise, overhead-press y hip-mobility.

---

*Fin de extracción.*

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# Revisión de integridad + Ejecución de las 5 recomendaciones

---

## A) Información que NO pude verificar por falta de ayudas visuales

Antes de ejecutar las recomendaciones, debo señalar los puntos donde las figuras/tablas del libro contienen datos que el texto plano no reproduce completamente:

| Elemento visual | Qué falta / qué tengo | Impacto |
|---|---|---|
| **Fig. 3.12–3.22** (músculos espinales) | Tengo descripciones textuales completas de inserciones y acciones. Falta la geometría exacta de las líneas de tracción. | Bajo: las acciones están bien descritas en texto. |
| **Tabla 3.4** (ejercicios espinales) | Tengo nombre, descripción, cues y progresiones. Algunas progresiones numeradas podrían estar incompletas en los niveles más avanzados. | Medio: verificar progresiones 3-5 de cada ejercicio. |
| **Tabla 4.5** (ejercicios de cadera) | Igual que arriba. Tengo 16 ejercicios (A–P) con descripciones. | Medio. |
| **Tabla 5.3** (ejercicios de rodilla) | Tengo 10 ejercicios (A–J). Progresiones completas. | Bajo. |
| **Tabla 6.6** (ejercicios tobillo/pie) | Tengo 14 ejercicios (A–N). Progresiones completas. | Bajo. |
| **Tabla 7.10** (ejercicios extremidad superior) | Tengo 15 ejercicios (A–O). | Bajo. |
| **Fig. 5.28, 5.29** (EMG plié) | Tengo la descripción cualitativa (25% vs 125% MVC). No tengo los trazados exactos. | Bajo: los valores clave están en texto. |
| **Fig. 8.10** (fuerza de aterrizaje grand jeté) | Tengo el dato: ~485% peso corporal (≈5×PC). No tengo la curva completa. | Bajo. |
| **Fotos de ejercicios** (todas) | No puedo verificar la posición corporal exacta mostrada. | Medio: las descripciones textuales son suficientes para cues. |
| **Tabla 6.7** (ROM tobillo/pie) | Tengo los valores: PF 0–50°, DF 0–20°. Tengo los factores limitantes. | Completo. |

**Conclusión:** No hay datos numéricos críticos que falten. Las únicas limitaciones son geométricas (ángulos exactos de líneas de tracción en figuras) y algunas progresiones avanzadas de ejercicios que podrían tener un paso adicional no capturado. **Procedo con la ejecución.**

---

## B) Recomendación 1 — `rules/alignment_validation.ts`

Documento de reglas para validar desviaciones de alineación durante la ejecución de ejercicios.

```
ARCHIVO: rules/alignment_validation.ts
FUENTE: Clippinger, Dance Anatomy and Kinesiology (2007)
```

### 1.1 Desviaciones de columna (Cap. 3, pp. 81–106)

| Regla ID | Desviación | BodyZone | Detección | Severidad | Acción del sistema |
|---|---|---|---|---|---|
| `ALIGN_SPINE_LUMBAR_HYPERLORDOSIS` | Hiperlordosis lumbar | `lumbar` | ASIS anterior a sínfisis pubiana en vista lateral; aumento de curva lumbar > normal | `warning` | Activar core stability; evitar hiperextensión; sugerir fortalecimiento abdominal inferior + estiramiento flexores de cadera |
| `ALIGN_SPINE_KYPHOSIS` | Cifosis torácica | `thoracic` | Redondeo excesivo de espalda alta; hombros caídos adelante | `warning` | Fortalecer extensores torácicos; estirar pectorales; evitar flexión espinal prolongada |
| `ALIGN_SPINE_FLAT_BACK` | Espalda plana | `lumbar` | Disminución de curva lumbar; tilt pélvico posterior | `caution` | Evitar ejercicios que reduzcan aún más la curva; considerar fortalecimiento de extensores lumbares bajos |
| `ALIGN_SPINE_SCOLIOSIS` | Escoliosis | `spine` | Curva lateral visible; asimetría de hombros/cadera | `medical_referral` | No automatizar corrección; derivar a profesional; evitar cargas asimétricas |
| `ALIGN_SPINE_FORWARD_HEAD` | Cabeza adelantada | `cervical` | Mentón proyectado anterior a línea de gravedad; lordosis cervical | `warning` | Fortalecer flexores cervicales; estirar extensores cervicales; cue "mentón ligeramente atrás" |
| `ALIGN_SPINE_FATIGUE_POSTURE` | Postura de fatiga | `lumbar` + `hip` | Pelvis desplazada adelante; torso atrás; cadera en hiperextensión; colgar de ligamentos | `warning` | Activar extensores torácicos + flexores de cadera; no colgar de iliofemoral |

### 1.2 Desviaciones de cadera (Cap. 4, pp. 164–181)

| Regla ID | Desviación | BodyZone | Detección | Severidad | Acción |
|---|---|---|---|---|---|
| `ALIGN_HIP_ANTERIOR_TILT` | Tilt pélvico anterior | `hip` | ASIS anterior a sínfisis pubiana > 5° | `warning` | Activar abdominales inferiores; estirar flexores cadera; cue "pubis hacia arriba" |
| `ALIGN_HIP_POSTERIOR_TILT` | Tilt pélvico posterior | `hip` | ASIS posterior a sínfisis pubiana | `caution` | Si excesivo: activar extensores espinales bajos + flexores cadera |
| `ALIGN_HIP_LATERAL_TILT` | Tilt pélvico lateral | `hip` | Una cresta ilíaca más baja que otra | `warning` | Verificar discrepancia de longitud de piernas; fortalecer abductores del lado bajo |
| `ALIGN_HIP_ROTATION` | Rotación pélvica | `hip` | Un ASIS anterior al otro en vista frontal | `warning` | Evaluar escoliosis asociada; trabajo simétrico |
| `ALIGN_HIP_FEMORAL_ANTEVERSION` | Anteversión femoral excesiva | `hip` | In-toeing; rotación interna excesiva; rotación externa limitada | `info` | Adaptar expectativas de turnout; no forzar rotación externa |
| `ALIGN_HIP_FEMORAL_RETROVERSION` | Retroversión femoral | `hip` | Out-toeing; rotación externa excesiva | `info` | Ventaja para turnout; vigilar estabilidad |

### 1.3 Desviaciones de rodilla (Cap. 5, pp. 250–254)

| Regla ID | Desviación | BodyZone | Detección | Severidad | Acción |
|---|---|---|---|---|---|
| `ALIGN_KNEE_GENU_VALGUM` | Genu valgum (rodillas en X) | `knee` | Rodillas mediales a pies en bipedestación; espacio intermaleolar > 9 cm con rodillas juntas | `warning` | Evitar colapso medial; fortalecer abductores cadera + rotadores externos; cue "rodilla sobre 2º dedo" |
| `ALIGN_KNEE_GENU_VARUM` | Genu varum (piernas arqueadas) | `knee` | Espacio intercondíleo con maléolos juntos; ≥ 2 dedos de separación | `info` | Prevalente en bailarines élite (46%); vigilar carga medial |
| `ALIGN_KNEE_GENU_RECURVATUM` | Hiperextensión de rodilla | `knee` | Rodilla se curva posteriormente en bipedestación | `warning` | Limitar hiperextensión en carga; co-contracción isquios+cuádriceps; cue "rodilla recta, no empujada atrás" |
| `ALIGN_KNEE_TIBIAL_TORSION_EXT` | Torsión tibial externa excesiva | `knee` | Pie apunta lateralmente respecto a rodilla con patela al frente | `info` | Puede ser ventaja para turnout; no forzar corrección |

### 1.4 Desviaciones de tobillo/pie (Cap. 6, pp. 324–331)

| Regla ID | Desviación | BodyZone | Detección | Severidad | Acción |
|---|---|---|---|---|---|
| `ALIGN_FOOT_PES_PLANUS` | Pie plano (pes planus) | `ankle` | Arco longitudinal medial ausente/reducido en carga; tubérculo navicular por debajo de línea | `warning` | Fortalecer inverters + intrínsecos; considerar soporte de arco; vigilar pronación excesiva |
| `ALIGN_FOOT_PES_CAVUS` | Pie cavo | `ankle` | Arco excesivamente alto; huella con poca área de contacto | `caution` | Pie rígido → menor absorción; vigilar riesgo de fractura por estrés; estirar tríceps sural |
| `ALIGN_FOOT_REARFOOT_VALGUS` | Valgo de retropié | `ankle` | Calcáneo evertido > 2° respecto a tibia | `warning` | Asociado a pronación excesiva; fortalecer inverters; vigilar shin splints |
| `ALIGN_FOOT_REARFOOT_VARUS` | Varo de retropié | `ankle` | Calcáneo invertido respecto a tibia | `warning` | Asociado a supinación excesiva; mayor riesgo de esguince lateral |
| `ALIGN_FOOT_HALLUX_VALGUS` | Hallux valgus (juanete) | `ankle` | Desviación lateral del hallux; prominencia medial 1º metatarsiano | `info` | Zapato amplio; no forzar; vigilar progresión |
| `ALIGN_FOOT_PRONATION_EXCESS` | Pronación excesiva | `ankle` | Colapso medial del pie en carga; rodilla cae medial | `warning` | Cue "levantar borde interno del pie"; fortalecer tibial posterior + inverters |
| `ALIGN_FOOT_SUPINATION_EXCESS` | Supinación excesiva | `ankle` | Peso excesivo en borde lateral; roll-out | `warning` | Cue "levantar borde externo del pie"; fortalecer everters |

### 1.5 Desviaciones de hombro (Cap. 7, pp. 395–397)

| Regla ID | Desviación | BodyZone | Detección | Severidad | Acción |
|---|---|---|---|---|---|
| `ALIGN_SHOULDER_ROLLED` | Hombros redondeados | `shoulder` | Escápulas abducidas + rotación interna húmero + cifosis | `warning` | Fortalecer aductores escapulares + rotadores externos; estirar pectorales |
| `ALIGN_SHOULDER_WINGED_SCAPULA` | Escápula alada | `shoulder` | Borde medial o ángulo inferior de escápula proyectado posteriormente | `warning` | Fortalecer serrato anterior (push-up plus) + trapecio inferior |
| `ALIGN_SHOULDER_EXCESS_ELEVATION` | Elevación excesiva de escápulas | `shoulder` | Hombros "subidos" hacia orejas durante movimientos de brazos | `caution` | Activar depresores escapulares (trapecio inferior + serrato); cue "escápulas abajo y afuera" |

---

## C) Recomendación 2 — SkillPaths

### SkillPath: `spinal-core-stability`

```
ID: spinal-core-stability
DISCIPLINA: fitness / danza / rehabilitación
OBJETIVO FINAL: Estabilización neuromuscular lumbopélvica durante movimiento de extremidades
FUENTE: Clippinger Cap. 3, Tabla 3.4 (A–N) y Tabla 3.5
```

**Requisitos previos de seguridad:**
- Ausencia de dolor lumbar agudo
- Capacidad de realizar tilt pélvico con control
- Si hay hernia discal: NO flexión espinal; usar estabilización isométrica
- Si hay espondilolisis: NO hiperextensión

| Step | Nombre | Descripción | Criterio de avance | Errores típicos | Fuente |
|---|---|---|---|---|---|
| 1 | Pelvic tilt | Supino, rodillas 90°; llevar pubis y costillas hacia otro; aplanar lumbar contra suelo. Hold 8 cuentas. | Control de tilt sin mover cadera; 6 reps | No involucrar abdominales profundos; mover cadera | Cap. 3, Tabla 3.4A, p. 134 |
| 2 | Isometric curl-up | Supino; posterior tilt + curl hasta escápulas fuera del suelo; manos asisten; hold 4 cuentas. | Mantener posición al soltar manos; 6 reps | Caer al soltar manos; no flexionar columna suficientemente | Cap. 3, Tabla 3.4B, p. 134 |
| 3 | Curl-back (excéntrico) | Sentado; curl hacia atrás controladamente; hold 4 cuentas; volver con asistencia. | Control excéntrico sin colapsar; 6 reps | Extender columna en vez de flexionar; usar impulso | Cap. 3, Tabla 3.4C, p. 134 |
| 4 | Hip lift | Supino; posterior tilt → elevar sacro → thighs hacia hombros. Hold 4 cuentas. | Elevar pelvis sin flexionar cadera; 6 reps | Usar impulso; hiperextender lumbar | Cap. 3, Tabla 3.4E, p. 135 |
| 5 | Inverted "V" (pike con balón) | Plank con pies en balón; posterior tilt → elevar cadera hacia techo. | Control de pelvis; sin arquear lumbar; 4 reps | Arquear lumbar; perder estabilidad; anterior tilt al bajar | Cap. 3, Tabla 3.4F, p. 136 |
| 6 | Leg reach (estabilización) | Apoyado en codos; rodillas al pecho alternando; extender una pierna ~60 cm; hold. | Pelvis estable; lumbar no arquea; 4 reps/lado | Arquear lumbar; mover pelvis; perder hollow | Cap. 3, Tabla 3.4G, p. 136 |
| 7 | Scarecrow (extensión torácica) | Sentado; pull elbows back; rotación externa hombro; reach overhead. Pelvis estable. | Movimiento aislado en espalda alta; sin mover lumbar; 4 reps | Hiperextender lumbar; no aislar torácica | Cap. 3, Tabla 3.4H, p. 137 |
| 8 | Prone single-arm spine arch | Prono sobre antebrazos; reach un brazo adelante; arch espalda. ASIS off floor. | ASIS elevado; arch torácico; 4 reps/lado | Anterior tilt pélvico excesivo; arch solo lumbar | Cap. 3, Tabla 3.4I, p. 138 |
| 9 | Side-up | Decúbito lateral; elevar cabeza, hombros y torso lateralmente. | Control concéntrico y excéntrico; 4 reps/lado | Flexionar columna en vez de lateroflexión; perder alineación | Cap. 3, Tabla 3.4K, p. 139 |
| 10 | Curl-up with rotation | Curl-up completo + rotación derecha/centro/izquierda/centro. | Rotación con columna flexionada; hombros nivelados; 4 reps/lado | Dejar caer un hombro; perder flexión; usar impulso | Cap. 3, Tabla 3.4M, p. 140 |
| 11 | Prone arabesque | Prono; elevar brazos + una pierna; rotar torso hacia brazo elevado. | Rotación con extensión; pelvis estable; 4 reps/lado | Anterior tilt excesivo; no rotar; arquear solo lumbar | Cap. 3, Tabla 3.4N, p. 140 |

**Formato de series y recuperación (Tabla 3.3, p. 128):**
- 6–12 reps por ejercicio (1 serie)
- 3–5 series (generalmente 1 serie de ejercicios diferentes)
- 2–3 minutos de recuperación entre series de abdominales
- Progresión: aumentar rango → añadir rotación → añadir lastre → reducir soporte

**Progresión de dificultad (Tabla 3.5, p. 142):**
- **Nivel I:** Pelvic tilt → Isometric curl-up → Curl-back → Hip lift (6 reps cada uno)
- **Nivel II:** Isometric curl-up (pies más cerca) → Curl-back (brazos low→high fifth) → Hip lift (diagonal) → Curl-up con rotación → Leg reach (4–6 reps/lado)
- **Nivel III:** Curl-up con rotación completa → Curl-back con peso + développé → Side-up con peso → Inverted V con arabesque → Side reach + push-up (4–12 reps)

---

### SkillPath: `ankle-foot-strength-pointe-prep`

```
ID: ankle-foot-strength-pointe-prep
DISCIPLINA: danza / movilidad de tobillo
OBJETIVO FINAL: Fuerza y alineación suficiente para demi-pointe/pointe seguro
FUENTE: Clippinger Cap. 6, Tablas 6.5 y 6.6
```

**Requisitos previos de seguridad:**
- Sin dolor de tobillo activo
- Dorsiflexión funcional (≥10° para marcha; idealmente más para danza)
- Alineación rodilla-pie correcta
- Para pointe: mínimo 10 años + 3–4 años de entrenamiento disciplinado (p. 339)

| Step | Nombre | Descripción | Criterio de avance | Errores típicos | Fuente |
|---|---|---|---|---|---|
| 1 | Calf raise (2→1 pie) | Elevarse a demi-pointe lentamente; peso entre 1º y 2º metatarsiano; bajar controlado. | Control excéntrico; sin roll-in/out; 12 reps | Rodar hacia dentro/fuera; no usar stirrup muscles; doble golpe de talón | Cap. 6, Tabla 6.6A, p. 343 |
| 2 | Sitting point (banda) | Sentado; plantar flexión contra banda; liderar con metatarsianos, añadir dedos al final. | Control sin inversión/eversión; 12 reps | Invertir/evertir; no articular intertarsal; curling de dedos | Cap. 6, Tabla 6.6B, p. 344 |
| 3 | Single-leg jumps | Saltos repetitivos 1 pie; mecánica de aterrizaje correcta. | Aterrizaje suave; sin pronación excesiva; progresar altura | Doble heel strike; valgo de rodilla; aterrizaje rígido | Cap. 6, Tabla 6.6C, p. 345 |
| 4 | Sitting dorsiflexion (peso) | Sentado; dorsiflexión contra peso colgando del pie. | ROM completo sin dolor; 12 reps | No controlar excéntrico; pie no neutro | Cap. 6, Tabla 6.6D, p. 345 |
| 5 | Sitting big toe up and away (banda) | Inversión + flexión plantar contra banda; liderar con hallux. | Aislamiento sin mover rodilla; 12 reps | Mover rodilla; no aislar pie; perder plantar flexión | Cap. 6, Tabla 6.6F, p. 347 |
| 6 | Sitting little toe up and away (banda) | Eversión + flexión plantar contra banda; liderar con 5º dedo. | Control sin compensar cadera; 12 reps | Mover cadera; no aislar pie; perder plantar flexión | Cap. 6, Tabla 6.6H, p. 348 |
| 7 | Doming | Sentado; presionar dedos contra suelo y elevar arco metatarsiano sin curvar dedos. | Arco elevado con dedos extendidos; hold 5s; 12 reps | Curvar dedos (flexión IP); no elevar arco; colapsar MTP | Cap. 6, Tabla 6.6J, p. 349 |
| 8 | Side-to-side (foam roller) | 1 pie en roller; shift peso lateral → evertir/invertir para volver al centro. | Ajustes desde tobillo, no cadera; 8 reps/dirección | Mover desde cadera; no usar peroneos/tibial anterior | Cap. 6, Tabla 6.6L, p. 350 |
| 9 | Ankle disk circles | 1 pie en disco; hacer círculo con borde del disco contactando suelo secuencialmente. | Círculo suave y simétrico; 6 círculos/dirección | Movimiento brusco; no usar todo el ROM | Cap. 6, Tabla 6.6M, p. 350 |
| 10 | Ankle disk relevé | Ambos pies en disco; relevé manteniendo disco equilibrado. | Estabilidad sin tocar borde; hold 4 cuentas; 6 reps | Perder equilibrio; roll-out/in; no mantener peso centrado | Cap. 6, Tabla 6.6N, p. 351 |
| 11 | Toe wall climbs | De cara a pared; escalar con dedos de pies hacia arriba. | Fuerza para subir sin knuckling; 1–4 subidas | Knuckling; perder alineación; no usar FHL | Cap. 6, Fig. 6.42D, p. 341 |
| 12 | Big toe flexion | Sentado; flexionar solo hallux contra resistencia. | Aislamiento; 6 reps | Mover otros dedos; no aislar MTP | Cap. 6, Fig. 6.42C, p. 341 |
| 13 | Toe extensions (banda) | Extender hallux (o todos los dedos) contra banda; mantener MTP estable. | Extensión sin flexión IP; 6 reps | Knuckling; flexión IP compensatoria | Cap. 6, Fig. 6.42A-B, p. 341 |

**Rutina de preparación para pointe (Tabla 6.5, p. 342):**

| Ejercicio | Reps | Propósito |
|---|---|---|
| Demi to pointe (banda) | 6 (todos los dedos) | Fuerza para subir de demi a pointe |
| Big toe flexion | 6 (solo hallux) | Fuerza para subir de demi a pointe |
| Toe extensions (banda) | 6 (hallux) + 6 (todos) | Estabilidad en pointe; prevenir knuckling |
| Sitting big toes up and away | 8–12 | Prevenir roll-in |
| Sitting little toes up and away | 8–12 | Prevenir roll-out |
| Doming | 8–12 | Estabilidad MTP; mantener dedos extendidos |
| Sitting dorsiflexion (banda) | 8–12 | Balance muscular |
| Sitting pointe stretch | 3 × 20s hold | ROM para posicionamiento sobre dedos |
| Toe wall climbs | 1–4 subidas | Fuerza para subir de demi a pointe |
| Fondu forced arch | 6–12 | Stirrup muscles + posicionamiento del empeine |

**⚠️ Nota:** Los ejercicios marcados con * son los más específicos para pointe y deben priorizarse si el tiempo es limitado.

---

### SkillPath: `hip-turnout-development`

```
ID: hip-turnout-development
DISCIPLINA: danza
OBJETIVO FINAL: Maximizar uso funcional de rotación externa de cadera sin forzar rodilla/tobillo
FUENTE: Clippinger Cap. 4, pp. 196–201
```

**Requisitos previos:**
- Sin dolor de cadera/rodilla activo
- ROM pasivo de rotación externa evaluado (prono, rodilla 90°, pelvis estabilizada)
- Mínimo sugerido para ballet clásico a los 15 años: ≥60° (p. 196)

| Step | Nombre | Descripción | Criterio de avance | Errores típicos | Fuente |
|---|---|---|---|---|---|
| 1 | Supine frog stretch | Supino; rodillas flexionadas, plantas juntas; gravedad abre rodillas. | Sensación de stretch en cadera sin dolor lumbar | Forzar rodillas al suelo; anterior tilt pélvico | Cap. 4, Fig. 4.32C, p. 198 |
| 2 | Modified prone frog | Prono; rodillas 90°, pelvis neutral; presionar isquion ligeramente abajo/adelante. | ASIS en contacto con suelo; sin dolor | Anterior tilt; forzar pies al suelo; stress en rodillas | Cap. 4, Fig. 4.32A, p. 198 |
| 3 | Prone passé (banda) | Prono; rodilla 90°; rotar externamente desde cadera; pelvis neutral. | Rotación desde cadera sin mover pelvis; sin twist de rodilla | Rotar desde rodilla; pelvis se mueve; usar glúteo máximo en vez de DOR bajos | Cap. 4, Tabla 4.5M, p. 219 |
| 4 | Prone frog (balón) | Prono sobre balón; presionar pies juntos; rotar caderas; elevar rodillas. | Usar DOR inferiores; sin compensar lumbar | Elevar pies primero; twist de rodillas; no mantener pelvis neutral | Cap. 4, Tabla 4.5N, p. 220 |
| 5 | Wall plié (DOR focus) | 2ª posición contra pared; dejar caer rodillas → recuperar con DOR bajos. | Recuperar alineación rodilla-pie sin tilt; control consciente de DOR | Dejar rodillas colapsar medialmente; no activar DOR; anterior tilt | Cap. 4, p. 200 |
| 6 | Standing plié (funcional) | Plié en 1ª/2ª posición; mantener turnout desde cadera; rodillas sobre pies. | Rodillas alineadas; sin pronación; mantener rotación al subir | Forzar desde rodilla; perder rotación al subir; colapso medial | Cap. 4, pp. 199–201 |

**Criterio de evaluación de turnout (Tests and Measurements 4.3, p. 197):**
- Posición: prono, rodilla 90°, pelvis estabilizada (ASIS en contacto con mesa)
- 0° = pierna apuntando al techo
- 45° = pierna a mitad de camino hacia la mesa
- 90° = teórico (rodilla al lado, pierna plana)
- Promedio élite ballet femenino: 59.9° (medición autora) / 52° (Hamilton et al.)

---

### SkillPath: `shoulder-stability-overhead`

```
ID: shoulder-stability-overhead
DISCIPLINA: danza / fitness
OBJETIVO FINAL: Estabilidad escapular y fuerza de hombro para movimientos overhead y soporte de peso
FUENTE: Clippinger Cap. 7, Tabla 7.10
```

**Requisitos previos:**
- Sin dolor de hombro activo
- ROM de flexión ≥90° sin compensación
- Sin impingement activo (dolor en arco 60–120°)

| Step | Nombre | Descripción | Criterio de avance | Errores típicos | Fuente |
|---|---|---|---|---|---|
| 1 | Push-up with elbows in | Plank; flex/ext codos cerca del cuerpo; pelvis neutral. | Línea recta tronco; sin winging; 8 reps | Arquear lumbar; scápulas winged; codos flare out | Cap. 7, Tabla 7.10A, p. 434 |
| 2 | Front arm raise (mancuerna) | Elevar brazo al frente hasta ~90°; control. | Sin arquear espalda; sin hike de hombro; 8 reps | Compensar con extensión lumbar; elevar escápula | Cap. 7, Tabla 7.10B, p. 434 |
| 3 | Press-up (soporte en silla) | Sentado en borde; press down → elevar cuerpo; escápulas deprimidas. | Mantener depresión escapular; sin dolor; 6 reps | Hike de hombros; perder aducción; rango excesivo | Cap. 7, Tabla 7.10C, p. 435 |
| 4 | Sitting row (banda) | Sentado; row con codos → atrás; escápulas ligeramente juntas y abajo. | Escápulas controladas; sin protracción; 8 reps | Encoger hombros; perder retracción; torso se inclina | Cap. 7, Tabla 7.10D, p. 435 |
| 5 | Side arm raise (mancuerna) | Elevar brazo lateral hasta ~90°; rotación externa progresiva. | Sin hike; sin dolor en arco 60–120°; 8 reps | Compensar con elevación escapular; no rotar externamente | Cap. 7, Tabla 7.10F, p. 437 |
| 6 | Kneeling scarecrow | Prone sobre balón; elevar codos; rotar externamente; reach overhead. | Escápulas down; sin hiperextensión lumbar; 4 reps | Arquear lumbar; perder rotación; elevar hombros | Cap. 7, Tabla 7.10H, p. 439 |
| 7 | Double-shoulder external rotation (banda) | Sentado; codos 90° al lado; rotación externa contra banda. | Mantener codos al lado; escápulas down; 8 reps | Codos se van adelante; hike; torso se mueve | Cap. 7, Tabla 7.10I, p. 439 |
| 8 | Kneeling overhead press | Arrodillado en reformer; press overhead con control escapular. | Sin hike; sin rib flare; 6 reps | Protrusión costal; pérdida de estabilidad; hiperextensión | Cap. 7, Tabla 7.10G, p. 438 |

---

## D) Recomendación 3 — Reglas de compresión y fuerzas (guardrails)

```
ARCHIVO: rules/joint_force_guardrails.ts
FUENTE: Clippinger Caps. 5 y 6
```

### 3.1 Compresión patelofemoral (Cap. 5, pp. 258–262)

| Regla ID | Actividad | Fuerza (×PC) | Umbral | Acción |
|---|---|---|---|---|
| `FORCE_PATELLOFEMORAL_WALK` | Caminar | 0.5–1.2× | `safe` | Sin restricción |
| `FORCE_PATELLOFEMORAL_STAIRS` | Subir escaleras | ~3.3× | `caution` | Vigilar en usuarios con dolor patelofemoral |
| `FORCE_PATELLOFEMORAL_DEEP_SQUAT` | Squat profundo / grand plié | ~7.6× | `warning` | Limitar reps consecutivas; solo con técnica impecable; sin dolor |
| `FORCE_PATELLOFEMORAL_JUMP_LANDING` | Aterrizaje de salto grande | ~20× | `danger` | Requiere plié adecuado; progresión gradual; superficie resiliente |

**Condiciones de aplicación:**
- Si `pain > 3/10` en rodilla → reducir a actividades ≤ 1.2× PC
- Si diagnóstico de `patellofemoral_pain_syndrome` → evitar pliés profundos, lunges, jumps temporalmente (Tabla 5.6, p. 291)
- Movimientos que agravaron patellofemoral en bailarines: plié (65%), jumps (24%), flexión→extensión (20%), turnout (14%), floor work (12%)

### 3.2 Fuerzas de aterrizaje (Cap. 6, p. 359; Cap. 5, p. 261)

| Regla ID | Actividad | Fuerza vertical | Acción |
|---|---|---|---|
| `FORCE_LANDING_WALK` | Caminar | ~5× PC | `safe` |
| `FORCE_LANDING_RUN` | Correr | 9–13× PC | `caution` |
| `FORCE_LANDING_GRAND_JETE` | Grand jeté landing | ~3–6× PC (máx ~485% PC) | `warning` — requiere plié profundo |
| `FORCE_LANDING_LARGE_JUMP` | Saltos grandes | ~20× PC | `danger` — progresión obligatoria |

**Regla de aterrizaje suave:**
- Tipo: `technique`
- Métrica: `landingQuality`
- Condición: `TOE-HEEL` contact pattern (no flat-foot)
- Cues: "ir a través del pie", "usar plié", "rodillas sobre pies"
- Fuerza reducida: flat-foot = ~6× PC vs toe-heel = ~4× PC (Dufek & Bates, 1990, citado p. 497)

### 3.3 Cargas en cadera (Cap. 4, p. 194)

| Regla ID | Actividad | Fuerza | Acción |
|---|---|---|---|
| `FORCE_HIP_BILATERAL_STAND` | Bipedestación 2 pies | ~1/3 PC por cadera | `safe` |
| `FORCE_HIP_SINGLE_LEG_STAND` | Bipedestación 1 pie | ~85% PC | `safe` |
| `FORCE_HIP_WALK_JOG` | Caminar/jogging | 3–5.5× PC | `safe` |
| `FORCE_HIP_STAIRS` | Subir escaleras | hasta 7× PC | `caution` |

### 3.4 Fuerzas espinales (Cap. 3, pp. 106, 118–119)

| Regla ID | Actividad | Fuerza | Acción |
|---|---|---|---|
| `FORCE_SPINE_LEAN_LIFT` | Inclinarse y levantar 77 kg | ~939 kg en disco L5-S1 | `danger` — usar piernas, no espalda |
| `FORCE_SPINE_AEROBIC_HIP_EXT` | Ejercicios aeróbicos de extensión cadera | > que levantar 45 kg | `warning` |
| `FORCE_SPINE_PARTNER_LIFT` | Levantar otro bailarín | Variable; > con distancia al cuerpo | `warning` — mantener partenaire cerca; torso vertical |

### 3.5 Fuerzas en tobillo/pie (Cap. 6, p. 359)

| Regla ID | Actividad | Fuerza | Acción |
|---|---|---|---|
| `FORCE_ANKLE_WALK` | Caminar | ~5× PC | `safe` |
| `FORCE_ANKLE_RUN` | Correr | 9–13× PC | `caution` |
| `FORCE_ANKLE_POINTe` | Pointe work | Concentrada en 1º y 2º dedo | `warning` — progresión gradual; calzado adecuado |

---

## E) Recomendación 4 — `rules/rom_screening.ts`

```
ARCHIVO: rules/rom_screening.ts
FUENTE: Clippinger Caps. 3–7
```

### 4.1 ROM espinal (Cap. 3, Tabla 3.6, p. 143)

| Movimiento | Normal (población general) | Élite ballet femenino | Élite ballet masculino | Factores limitantes principales |
|---|---|---|---|---|
| Flexión (torácica + lumbar) | 0–80° | — | — | Ligamentos posteriores; compresión anterior disco; cápsulas facetarias; extensores espinales |
| Extensión | 0–30° | 79° (rango 60–124°) | 65° (rango 45–93°) | Ligamento longitudinal anterior; compresión posterior disco; cápsulas facetarias; abdominales; apófisis espinosas (torácica); facetarias (lumbar) |
| Lateroflexión | 0–35° | — | — | Ligamentos contralaterales; disco ipsilateral/contralateral; cápsulas facetarias; cuadrado lumbar; oblicuos |
| Rotación | 0–45° | — | — | Ligamentos costovertebrales; tensión anillo fibroso; cápsulas facetarias; oblicuos; extensores; facetarias (lumbar) |

### 4.2 ROM de cadera (Cap. 4, Tabla 4.6, p. 223)

| Movimiento | Normal (población general) | Élite ballet femenino | Factores limitantes principales |
|---|---|---|---|
| Flexión (rodilla flexionada) | 0–120° | 150° (funcional) | Aposición muslo-abdomen; isquiosurales |
| Flexión (rodilla extendida) | 0–80° | 150° (funcional) | Isquiosurales |
| Extensión | 0–15° | 27° (rango 6–47°) | Cápsula anterior; ligamento iliofemoral y pubofemoral; iliopsoas |
| Abducción | 0–45° | — | Cápsula inferior; ligamentos pubofemoral, isquiofemoral, iliofemoral inferior; aductores |
| Aducción | 0–30° | — | Aposición muslos; cápsula superior; ligamentos iliofemoral/ischiofemoral superiores; abductores |
| Rotación externa | 0–45° | 52–60° (promedio élite) | Cápsula anterior; ligamentos iliofemoral y pubofemoral; rotadores internos |
| Rotación interna | 0–40° | — | Cápsula posterior; ligamento isquiofemoral; rotadores externos |

### 4.3 ROM de rodilla (Cap. 5, Tabla 5.4, p. 281)

| Movimiento | Normal | Factores limitantes principales |
|---|---|---|
| Flexión | 0–135° | Aposición posterior muslo-pantorrilla/talón-glúteo; cuádriceps |
| Extensión | 0–10° | Cápsula posterior; cruzados; colaterales; ligamento oblicuo posterior; isquiosurales (si cadera en flexión marcada) |

### 4.4 ROM de tobillo/pie (Cap. 6, Tabla 6.7, p. 353)

| Movimiento | Normal (población general) | Élite ballet femenino | Factores limitantes principales |
|---|---|---|---|
| Plantar flexión | 0–50° | 97–113° | Cápsula anterior; ligamentos talofibular anterior, deltoides anterior; dorsiflexores; oposición ósea posterior |
| Dorsiflexión | 0–20° | Frecuentemente reducida (<10° en 67% de estudiantes élite) | Cápsula posterior; ligamentos talofibular posterior, calcaneofibular, deltoides; plantar flexores; oposición ósea anterior |

### 4.5 ROM de hombro (Cap. 7, Tabla 7.11, p. 448)

| Movimiento | Normal | Factores limitantes principales |
|---|---|---|
| Flexión | 0–180° | Cápsula posterior; ligamento coracohumeral (banda posterior); extensores y rotadores externos |
| Extensión | 0–60° | Cápsula anterior; ligamento coracohumeral (banda anterior); pectoral mayor (clavicular) |
| Abducción | 0–180° | Cápsula inferior; ligamentos glenohumerales (bandas media e inferior); aductores |
| Aducción | 0–45° | Aposición con tronco |
| Rotación externa (brazo a 90° abducción) | 0–90° | Cápsula anterior; ligamentos glenohumerales y coracohumeral; rotadores internos (subescapular, pectoral mayor, teres mayor, dorsal ancho) |
| Rotación externa (brazo al lado) | 0–60° | Ídem |
| Rotación interna (brazo a 90° abducción) | 0–70° | Cápsula posterior; rotadores externos (infraespinoso, teres menor) |
| Rotación interna (brazo al lado) | 0–80° | Ídem |

### 4.6 Q Angle (Cap. 5, p. 258)

| Parámetro | Valor | Condición |
|---|---|---|
| Normal masculino | 8–15° | Rodilla extendida, cuádriceps relajado |
| Normal femenino | 10–19° | Ídem |
| Umbral de riesgo (algunas fuentes) | >15° | Mayor vector lateral sobre rótula |
| Umbral de riesgo (Hamill) | >17° | Ídem |
| Umbral de riesgo (Caillet) | >20° | Ídem |

### 4.7 Test de Trendelenburg (Cap. 4, Tests & Measurements 4.2, p. 191)

| Resultado | Interpretación | Acción |
|---|---|---|
| Negativo | Crestas ilíacas a misma altura en monopodal | Normal |
| Positivo | PSIS/cresta ilíaca más baja en lado no soportado | Debilidad de abductores (glúteo medio); fortalecer |

---

## F) Recomendación 5 — Cues, fallos y bail techniques

```
ARCHIVO: enrichment/cues_and_faults.ts
FUENTE: Clippinger Caps. 3–7, Dance Cues boxes
```

### 5.1 Plié / Squat de danza

| Campo | Contenido |
|---|---|
| **primaryCues** | "Guiar la rodilla sobre el segundo dedo del pie"; "Mantener rotación desde la cadera, no desde la rodilla"; "Pelvis vertical (ASIS y pubis en mismo plano frontal)"; "Peso distribuido entre 1º y 2º metatarsianos"; "No pausar en el fondo del plié"; "Lift out of your knees" (no colgar en ligamentos) |
| **commonFaults** | Rodillas caen medialmente (valgo) → estrés MCL y pronación; Tilt pélvico anterior excesivo → hiperlordosis; Forzar turnout desde rodilla/tobillo → torsión tibial; Pausar en el fondo → perder beneficio de SSC; Inclinar torso adelante → mayor demanda de cuádriceps |
| **bailTechniques** | Reducir profundidad si hay dolor patelofemoral; Usar barra para soporte en principiantes; Limitar a 90° si hay antecedentes de lesión de menisco/PCL; Modificar con bailarinas con dorsiflexión limitada (<10°) |
| **fuente** | Cap. 5, pp. 265–268; Cap. 4, pp. 199–201; Dance Cue 5.1 (p. 266) |

### 5.2 Relevé / Calf raise

| Campo | Contenido |
|---|---|
| **primaryCues** | "Peso centrado entre 1º y 2º metatarsianos"; "Usar stirrup muscles (tibial posterior, tibial anterior, peroneo largo) para elevar arco"; "No rodar hacia dentro ni hacia fuera"; "Mantener rodilla alineada sobre tobillo"; "Shift del centro de masa adelante antes de subir" |
| **commonFaults** | Roll-out (inversión) → riesgo de esguince lateral; Roll-in (eversión) → estrés medial; Sickling; No usar articulación intertarsal (solo talocrural); Hiperextender rodilla |
| **bailTechniques** | Comenzar con 2 pies → 1 pie; Usar pared/barra para equilibrio; Disco de equilibrio para propiocepción |
| **fuente** | Cap. 6, pp. 336–341; Tabla 6.6A, N; Dance Cue 6.3 (p. 352) |

### 5.3 Arabesque / Extensión de espalda

| Campo | Contenido |
|---|---|
| **primaryCues** | "Reach the leg out" antes de anterior tilt de pelvis; "Lift from the knee" para enfatizar hamstrings; "Pull lower abdominals up and in" para limitar shear lumbar; "Lift upper back" para distribuir extensión; "Maximizar rotación externa de fémur antes de rotar pelvis" |
| **commonFaults** | Tilt pélvico anterior prematuro → hiperlordosis; Rotación pélvica excesiva ("open the hip"); No usar co-contracción abdominal → shear L5-S1; Arquear solo lumbar sin torácica |
| **bailTechniques** | Limitar altura de pierna si hay dolor lumbar; Usar kneeling arabesque para aislar hamstrings; Fortalecer extensores espinales y hamstrings antes de ROM extremo |
| **fuente** | Cap. 4, pp. 208–211; Cap. 3, pp. 115–119; Dance Cue 3.3 (p. 118) |

### 5.4 Front développé / Extensión frontal

| Campo | Contenido |
|---|---|
| **primaryCues** | "Fold the thigh into the chest antes de extender rodilla"; "Usar iliopsoas, no solo rectus femoris"; "Slight tuck de pelvis para ventaja mecánica del iliopsoas"; "Reach the leg out" en lugar de "lift from the knee" |
| **commonFaults** | Arquear lumbar (compensar con extensión espinal); Rectus femoris como único motor → active insufficiency; Perder turnout al elevar pierna; Anterior tilt pélvico excesivo |
| **bailTechniques** | Comenzar en elbows (menos demanda de estabilidad); Progresar a torso vertical → standing; Usar mano para asistir rango > concéntrico |
| **fuente** | Cap. 4, pp. 201–204; Concept Demo 4.3 (p. 203) |

### 5.5 Landing de saltos

| Campo | Contenido |
|---|---|
| **primaryCues** | "Land softly: ir a través del pie (toe-heel)"; "Usar plié: flexionar cadera, rodilla y tobillo progresivamente"; "Rodillas sobre pies; no valgo"; "No aterrizar con rodillas rígidas/hiperextendidas"; "Distribuir impacto: más cadera y rodilla en saltos altos" |
| **commonFaults** | Flat-foot landing → mayor pico de fuerza; Valgo de rodilla → riesgo ACL; Rodillas hiperextendidas → riesgo ACL; Sin plié → fuerzas no absorbidas; Pronación excesiva |
| **bailTechniques** | Progresar de 2 pies → 1 pie; Reducir altura de salto inicialmente; Superficie resiliente; Cues específicos: "plié más profundo pero más lento" para decelerar |
| **fuente** | Cap. 6, pp. 359–360; Cap. 5, pp. 265–268; Dance Cue 8.3 (p. 497); Dance Cue 8.4 (p. 498) |

### 5.6 Turnout / Rotación externa

| Campo | Contenido |
|---|---|
| **primaryCues** | "Rotar desde la cadera, no desde la rodilla"; "Bring the greater trochanter back toward the ischium"; "Wrap the back of the thigh inward"; "Use lower deep outward rotators (below gluteus maximus)"; "Guide the knee over the foot" |
| **commonFaults** | "Screwing the knee" (forzar desde rodilla abajo); Desplazar talón adelante cuando rodilla flexiona; Perder rotación al extender rodillas; Anterior tilt pélvico para ganar turnout aparente; Colapso medial de rodillas |
| **bailTechniques** | Enfatizar DOR bajos (cuadrado femoral, obturadores, gemelos); Prone passé con banda; Wall plié con focus DOR; No exceder ROM pasivo disponible |
| **fuente** | Cap. 4, pp. 196–201; Cap. 5, pp. 268–269; Dance Cue 5.2 (p. 269); Concept Demo 4.2 (p. 200) |

### 5.7 Running / Locomoción en danza

| Campo | Contenido |
|---|---|
| **primaryCues** | "Swing the knee forward on slight diagonal" (no circumducción); "Pull the ground toward you" en foot strike (reducir braking force); "Drive the back leg downward and backward"; "Mantener pelvis/tronco controlados" |
| **commonFaults** | Overstriding → braking force excesivo; Circunducción de pierna → ineficiencia; Tilt pélvico anterior excesivo; Excesiva oscilación vertical |
| **bailTechniques** | Reducir velocidad si hay dolor; Superficie blanda; Fortalecer flexores/extensores cadera |
| **fuente** | Cap. 8, pp. 490–492 |

### 5.8 Pointe work

| Campo | Contenido |
|---|---|
| **primaryCues** | "Point from the top of the foot" → articular intertarsal + MTP, no solo talocrural; "Use stirrup muscles to maintain balance"; "Keep weight centered between 1st and 2nd metatarsal heads"; "Do not knuckle or sickle"; "Go through the foot (toe-heel)" |
| **commonFaults** | Knuckling (flexión IP excesiva en pointe); Sickling (inversión excesiva); Roll-out; Peso demasiado en hallux o 5º dedo; No usar stirrup muscles; Anterior tilt pélvico |
| **bailTechniques** | Progresión demi-pointe → pointe; Ejercicios de toe wall climbs; Doming para estabilidad MTP; Toe extensions para prevenir knuckling; Calzado adecuado |
| **fuente** | Cap. 6, pp. 336–340; Dance Cue 6.2 (p. 339); Tabla 6.5 (p. 342) |

### 5.9 Overhead arm movements / Port de bras

| Campo | Contenido |
|---|---|
| **primaryCues** | "Reach the arm down, out, and around as the scapula rotates"; "Keep shoulder blades slightly down and together"; "Hold your shoulder blades down" (no hiking); "External rotation to clear greater tubercle"; "Pull abdominal wall in to avoid rib-leading" |
| **commonFaults** | Elevación excesiva de escápulas (hiking); Pinched shoulders (aducción excesiva); Rib-leading (extensión lumbar compensatoria); Rolled shoulders; Winging de escápulas |
| **bailTechniques** | Fortalecer trapecio inferior + serrato anterior; Push-up plus; Sitting row con énfasis en depresión; Limitar overhead si hay impingement activo |
| **fuente** | Cap. 7, pp. 409–412; Dance Cue 7.1 (p. 397); Dance Cue 7.2 (p. 408); Concept Demo 7.3 (p. 400) |

---

## G) Resumen de entregables producidos

| # | Entregable | Secciones cubiertas | Estado |
|---|---|---|---|
| 1 | `rules/alignment_validation.ts` — 22 reglas de desviación de alineación | Caps. 3, 4, 5, 6, 7 | ✅ Completo |
| 2 | SkillPaths: `spinal-core-stability` (11 steps), `ankle-foot-strength-pointe-prep` (13 steps + rutina pointe), `hip-turnout-development` (6 steps), `shoulder-stability-overhead` (8 steps) | Caps. 3, 4, 6, 7 | ✅ Completo |
| 3 | `rules/joint_force_guardrails.ts` — 18 reglas de fuerza/compresión | Caps. 3, 4, 5, 6 | ✅ Completo |
| 4 | `rules/rom_screening.ts` — ROM normal vs élite para 5 regiones + Q angle + Trendelenburg | Caps. 3, 4, 5, 6, 7 | ✅ Completo |
| 5 | `enrichment/cues_and_faults.ts` — 9 familias de ejercicios con primaryCues, commonFaults, bailTechniques | Caps. 3–8 | ✅ Completo |

**⚠️ Nota final:** Las figuras del libro (fotos de ejercicios, diagramas anatómicos) no están disponibles en el texto extraído. Las descripciones textuales son suficientes para implementar cues y reglas, pero si se desea verificación visual de posiciones corporales exactas, se recomienda consultar las figuras 3.25–3.47, 4.32–4.42, 5.23–5.30, 6.33–6.42, 7.19–7.21 directamente en el PDF.

---

## Ronda 3 — tras: «Aquí tienes la continuación del análisis y auditoría de los elementos visuales y tablas restantes del libro (*Dance Anatomy and Kinesiology*…»
¡Excelente trabajo! La estructuración de esta segunda parte de la auditoría es impecable. Has logrado capturar con mucha precisión la transición que hace el libro en sus capítulos finales (del 4 al 8): pasa de la anatomía descriptiva pura a la **biomecánica aplicada, la pedagogía de la danza y el análisis de movimiento complejo**.

A continuación, te comparto algunas **observaciones de validación basadas en el texto original** para enriquecer tu matriz, y luego te propongo los siguientes pasos lógicos para tu proyecto.

### 🔍 Validaciones y Aportes desde el Texto Base

1. **Tablas de ROM y Factores Limitantes (Tablas 4.6, 5.4, 7.11):**
   * **Validación:** Es muy acertado que marques esto como "Completo" y de alto impacto. El gran valor de Clippinger no es solo dar los grados (ej. Flexión de hombro 0-180°), sino que **detalla los factores limitantes pasivos** (cápsula articular, ligamentos específicos como el coracohumeral, o toques óseos). Esto es fundamental para que un profesor de danza sepa si una restricción es muscular (y por ende, entrenable) o estructural/capsular.
2. **Desviaciones Posturales y Alineación (Figs. 3.23-3.27, 4.14-4.18, 5.16-5.20):**
   * **Validación:** Tienes toda la razón al señalar la falta de "esquemas geométricos puros" (como los vectores de fuerza exactos que verías en un texto de ingeniería biomecánica). Sin embargo, el texto compensa esto brillantemente al conectar estas desviaciones con **compensaciones en la cadena cinética cerrada**. Por ejemplo, cómo el *fatigue posture* (postura de fatiga) o la anteversión pélvica obligan al fémur a rotar internamente, llevando a la rodilla a un *genu valgum* funcional y al pie a la pronación.
3. **El Ángulo Q y el *Tracking* Patelar (Cap. 5):**
   * **Validación:** El impacto es en realidad **Medio/Alto** en el contexto de la danza. El texto profundiza en cómo un Ángulo Q aumentado (común en mujeres por la pelvis más ancha) predispone al síndrome de dolor patelofemoral, especialmente cuando los bailarines "fuerzan" el *turnout* desde la tibia/rodilla en lugar de usar los rotadores externos profundos de la cadera.
4. **Capítulo 8 (Análisis de Movimiento - Tablas 8.1 a 8.4):**
   * **Validación:** Estas tablas son el "broche de oro" del libro. La plantilla metodológica (Tabla 8.3) que obliga al estudiante a desglosar el movimiento por *Fases, Articulación, Plano/Eje, Tipo de Contracción (considerando la gravedad) y Agonistas*, es una herramienta pedagógica insuperable. Los estudios de caso del *Grand Battement* y el *Grand Jeté* (Tabla 8.4 y 8.7) demuestran cómo aplicar la teoría del Ciclo de Estiramiento-Acortamiento (SSC) y las fuerzas de reacción del suelo.

---

### 🚀 Propuesta de Siguientes Pasos para tu Proyecto

Dado que ya tienes el mapeo y la auditoría completa de los recursos visuales, tabulares y conceptuales del libro, podemos proceder a sintetizar esta información en herramientas prácticas. ¿Cuál de estas opciones te gustaría desarrollar a continuación?

**Opción 1: Compilación de "Dance Cues" (Indicaciones Técnicas Anatómicas)**
El libro está lleno de recuadros de *Dance Cues* (ej. *"Lift from under the leg"*, *"Don't stop your plié"*, *"Land softly"*, *"Use your bones, not your muscles"*). Podemos extraerlos, auditar su precisión biomecánica según el texto y clasificarlos en un manual para profesores (ej. Cues para protección articular, Cues para optimización del SSC, Cues para alineación pélvica).

**Opción 2: Creación de "Fichas de Evaluación Práctica" (Checklists de Observación)**
Transformar las descripciones de alineación y desviaciones (ej. *genu valgum*, *lordosis lumbar*, *escápula alada*, *winging* escapular) en rúbricas o *checklists* de observación rápida para usar en el estudio de danza o en auditorías de técnica.

**Opción 3: Diseño de Protocolos de Acondicionamiento Preventivo**
Usar las tablas de ejercicios del libro (Tablas 3.4, 4.5, 5.3, 6.6, 7.10) para armar rutinas de prevención de lesiones específicas basadas en los hallazgos de la auditoría. Por ejemplo:
* *Rutina para la salud del complejo escapular en bailarines de contemporáneo (soporte de peso).*
* *Fortalecimiento del core y glúteo medio para proteger el turnout.*
* *Protocolo de aterrizaje (Pliés) para mitigar fuerzas de impacto.*

**Opción 4: Redacción del Informe Final de Auditoría**
Crear el documento ejecutivo que resuma tu análisis, concluyendo cómo este libro puentea la brecha entre la anatomía clínica y la pedagogía de la danza, destacando sus fortalezas (análisis de movimiento, aplicabilidad) y sus limitaciones (falta de modelos matemáticos/vectoriales complejos).

¿Hacia cuál de estas direcciones te gustaría que enfoquemos el trabajo ahora?
