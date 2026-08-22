# howse-dance-technique-3ed — Extracción recuperada de chat

> **sourceId:** `howse-dance-technique-3ed` · **origen:** `chat-export-1787414989551` (Extracción Técnica para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Dance Technique & Injury Prevention — Extracción para Plan Maestro OS

> Extracción integral del libro de Justin Howse (3ª edición). Documento técnico orientado a la implementación de reglas de entrenamiento, rehabilitación y validación técnica en un sistema de fitness. Todo el contenido está parafraseado; no se reproduce texto literal del libro.

---

## 1) Metadatos del libro

- **Título:** Dance Technique & Injury Prevention
- **Autor(es):** Justin Howse (con Moira McCormack en la 3ª edición; Shirley Hancock en ediciones anteriores)
- **Año:** 3ª edición 2000 (reimpresión 2005); 1ª edición 1988
- **Disciplina principal:** Medicina deportiva aplicada a la danza clásica (ballet), prevención de lesiones, rehabilitación, anatomía funcional y corrección técnica
- **Enfoque poblacional:** Bailarines de ballet (estudiantes, profesionales, profesores), pero con principios transferibles a cualquier atleta de impacto repetitivo
- **Notas de alcance:**
  - **Cubre:** anatomía/physiología aplicada a ballet, patología de lesiones, causas técnicas de lesión, tratamientos conservadores y quirúrgicos, nutrición, ejercicios de fortalecimiento, y un catálogo exhaustivo de fallos técnicos con sus consecuencias
  - **NO cubre:** programación de periodización de fuerza general, hipertrofia estética, calistenia, nutrición deportiva avanzada (solo da bases), psicología deportiva (solo menciona depresión post-lesión)
  - **Advertencia clave del autor:** "Todas las lesiones de danza son causadas por técnica defectuosa" (Sección 2.3, p. 73). El libro es explícitamente anti-diagnóstico autodirigido: exige evaluación por ortopedista/fisioterapeuta

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- **`TechnicalFault`** (nuevo):
  - Descripción: El libro estructura TODA la patología en torno a fallos técnicos como causa raíz. Se necesita un tipo para modelar fallos técnicos con sus consecuencias en cadena.
  - Campos sugeridos: `faultId`, `name`, `affectedZones: BodyZoneId[]`, `consequences: InjuryRisk[]`, `correctionProtocol`, `severity`
  - Referencias: Sección 5 completa (pp. 178–206)

- **`WeightPlacement`** (nuevo):
  - Descripción: El concepto de "weight back" (peso demasiado atrás) es la causa más frecuente de lesiones según el libro. Modelar como estado postural verificable.
  - Campos sugeridos: `placementState` (correct | weight-back | weight-forward), `lineOfGravity` (descripción de la línea mastoides→hombro→cadera→rodilla→tobillo→borde anterior del talón)
  - Referencias: Sección 5.20 (pp. 205–206)

- **`TissueType`** (extensión):
  - Descripción: El libro diferencia claramente entre tejidos con capacidad regenerativa distinta
  - Campos sugeridos: `regenerationCapacity` (high | limited | none), `healingMethod` (regeneration | scar | combination)
  - Valores: músculo esquelético (regeneración limitada, cicatriz), nervio (sin regeneración), cartílago articular (sin regeneración), hueso (regeneración buena), ligamento/tendón (cicatriz)
  - Referencias: Sección 2.1 (pp. 65–66)

- **`InjuryPhase`** (nuevo):
  - Descripción: El libro distingue agudo/subagudo/crónico con implicaciones de tratamiento radicalmente distintas
  - Campos sugeridos: `phase` (acute | subacute | chronic), `contraindications: Treatment[]`
  - Referencias: Sección 2.1 (pp. 64–65)

- **`ProprioceptionDeficit`** (nuevo):
  - Descripción: Tras lesión articular, los nervios propioceptivos se dañan y producen inestabilidad residual aunque el tejido haya sanado. El libro prescribe reentrenamiento propioceptivo específico (balancing board).
  - Campos sugeridos: `joint: BodyZoneId`, `severity`, `rehabProtocol`
  - Referencias: Sección 3.1 (pp. 106–107)

- **`Eng ram`** (concepto de motor learning):
  - Descripción: Patrones automáticos multi-musculares preprogramados. El libro insiste en que la precisión inicial es crítica y que los "malos hábitos" se convierten en engrams difíciles de corregir.
  - Campos sugeridos: `patternId`, `repetitionsNeeded` (cientos de miles), `accuracyRequirement`
  - Referencias: Sección 1.3 (pp. 19–20)

- **`HypermobilityRisk`** (nuevo):
  - Descripción: La hipermovilidad (swayback knees, pies hipermóviles) es factor de riesgo potente. Requiere más fuerza para controlar, no más flexibilidad.
  - Campos sugeridos: `joints: BodyZoneId[]`, `controlStrengthRequired`
  - Referencias: Secciones 1.11 (pp. 59–60), 2.6 (p. 97), 5.13 (pp. 195–196)

### 2.2 Mapeo a tipos existentes

- **`FocusId: tendon-health`**
  - El libro dedica 4 subsecciones a tendinopatías (Sección 2.2, pp. 70–72 y Sección 3). Distingue tendonitis, tenosinovitis, peritendinitis y lesiones de inserción. Regla crítica: NUNCA inyectar esteroides dentro del tendón; solo peritendinoso y solo en casos crónicos.

- **`FocusId: mobility`**
  - Tratada como inseparable de la fuerza. El libro afirma que un bailarín que "parece tenso" probablemente necesita fortalecimiento, no estiramiento (Sección 2.5, p. 91). El estiramiento solo es efectivo con tejido caliente y nunca sobre músculo débil.

- **`FocusId: hypertrophy`**
  - No es el objetivo del libro. El autor explícitamente desaconseja el desarrollo de volumen excesivo (Sección 2.6, p. 95): el bulk excesivo eleva el centro de gravedad y dificulta el equilibrio. Recomienda low-resistance/high-repetition.

- **`FocusId: posture`**
  - Central en el libro. La postura correcta se define por la línea de gravedad y el equilibrio de grupos musculares. Secciones 1.11 y 5.20 son clave.

- **`BodyZoneId: ankle/foot`**
  - Zona más lesionada. Esguince lateral de tobillo = lesión más común en bailarines (3.1, p. 104). Incluye protocolo completo de rehabilitación con balancing board.

- **`BodyZoneId: knee`**
  - Anterior knee pain como término paraguas (3.30, pp. 129–132). Importancia crítica del vastus medialis (últimos 15° de extensión). Lesiones meniscales por over-turning.

- **`BodyZoneId: lumbar`**
  - Stress fractures del pars interarticularis (3.51, pp. 141–143). Lordosis como fallo técnico con 14 causas (5.6, pp. 184–187).

- **`BodyZoneId: hip`**
  - Turn-out limitado por anatomía ósea (no modificable). Mínimo ~45° de rotación externa para danza clásica (5.8, p. 190). Los aductores son el principal rotador externo funcional.

- **`BodyZoneId: shoulder`**
  - Menos relevante para danza pero incluye problemas de lifting en chicos (3.54, p. 144).

- **`MovementPattern: plié`**
  - Analizado biomecánicamente (1.11, pp. 55–56). Errores: knees forward, rolling, weight back al subir.

- **`MovementPattern: rise/relevé`**
  - Progresión half pointe → three-quarter pointe → full pointe (1.11, pp. 58–59).

- **`MovementPattern: jump/landing`**
  - Fuerzas de 500–700 kg en el aterrizaje (1.3, p. 18). El shock debe absorberse por músculos, no por articulaciones.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `ambient-temperature-minimum`

- La temperatura ambiente de entrenamiento no debe bajar de 68–70°F (20–21°C). Temperaturas bajas aumentan riesgo de desgarros musculares.
- **Tipo:** entorno/seguridad
- **Métrica principal:** ambientTemperature
- **Valores numéricos:**
  - Rango óptimo: ≥ 20–21°C (68–70°F)
  - Umbral de riesgo: < 20°C
- **Condiciones de aplicación:** Cualquier sesión de danza/entrenamiento
- **Capítulos/páginas:** Sección 2.3 (p. 75)
- **Comentarios:** Temperaturas excesivamente altas no causan lesión directa pero provocan deshidratación y pérdida de electrolitos

### Regla: `immediate-ice-application`

- Ante cualquier lesión aguda, aplicar hielo inmediatamente junto con elevación y reposo. Esto puede reducir el tiempo de recuperación a la mitad.
- **Tipo:** primeros auxilios
- **Métrica principal:** timeToIceApplication
- **Valores numéricos:**
  - Rango óptimo: inmediatamente (< 5 min post-lesión)
  - Técnica: compresas de hielo+agua a 0°C (NO hielo directo de congelador a -18°C)
  - Duración por aplicación: mínimo 10 min para enfriar músculo en persona delgada; hasta 30 min en persona con más grasa
  - Revisar piel cada minuto para evitar quemadura por frío
- **Condiciones de aplicación:** Solo trauma agudo. NO usar en espasmo muscular crónico. NO prolongar innecesariamente (vasoconstricción prolongada retarda cicatrización)
- **Capítulos/páginas:** Secciones 2.4 (pp. 78–79), 2.5 (pp. 81–82)
- **Comentarios:** ⚠️ El hielo de congelador doméstico (-18°C) puede causar frostbite. Siempre usar mezcla hielo+agua o barrera de protección.

### Regla: `no-training-through-pain`

- Nunca usar analgésicos (orales o inyectados) para enmascarar dolor y continuar entrenando/rindiendo. El dolor es mecanismo protector.
- **Tipo:** seguridad/dolor
- **Métrica principal:** pain 0–10
- **Valores numéricos:**
  - Umbral: cualquier dolor que interfiera con la ejecución → STOP
  - El libro NO da escala numérica 0–10 explícita, pero establece criterio binario: dolor que altera rendimiento = no continuar
- **Condiciones de aplicación:** Universal para cualquier sesión
- **Capítulos/páginas:** Sección 2.5 (p. 80)
- **Comentarios:** El autor es categórico: actuar bajo analgesia puede convertir una lesión menor en una que arruine la carrera

### Regla: `no-oral-steroids`

- Los esteroides orales (cortisona, prednisona) están contraindicados en lesiones de danza. Suprimen la inflamación necesaria para la cicatrización y alteran el eje hormonal.
- **Tipo:** contraindicación médica
- **Métrica principal:** N/A (regla binaria)
- **Condiciones de aplicación:** Cualquier lesión aguda o crónica en bailarines
- **Capítulos/páginas:** Sección 2.5 (p. 93)
- **Comentarios:** Solo aplicable como regla de "no hacer". El sistema debe flaggear cualquier protocolo que incluya corticoides orales.

### Regla: `steroid-injection-contraindications`

- Las inyecciones de hidrocortisona tienen restricciones estrictas:
  - NUNCA en lesión aguda (detiene cicatrización)
  - NUNCA si hay fractura sospechada (incluida stress fracture)
  - NUNCA dentro del tendón (solo peritendinoso)
  - NUNCA intra-articular en bailarines (solo para artritis en no atletas)
  - MÁXIMO 1 inyección en tendones grandes (Aquiles, rotuliano)
  - SOLO en condiciones crónicas con diagnóstico preciso
- **Tipo:** contraindicación médica
- **Métrica principal:** N/A (regla binaria múltiple)
- **Condiciones de aplicación:** Solo bajo supervisión médica. El sistema debe alertar, no prescribir.
- **Capítulos/páginas:** Sección 2.5 (pp. 92–93)

### Regla: `no-nsaids-in-healing`

- Los antiinflamatorios no esteroideos (AINEs) interfieren con la respuesta inflamatoria necesaria para la cicatrización. Su uso indiscriminado está contraindicado. Solo se justifican si la inflamación es excesiva y con diagnóstico preciso.
- **Tipo:** contraindicación médica
- **Métrica principal:** N/A
- **Condiciones de aplicación:** Fase aguda de cualquier lesión
- **Capítulos/páginas:** Sección 2.5 (p. 92)

### Regla: `stretching-conditions`

- El estiramiento solo es efectivo y seguro bajo estas condiciones:
  - El tejido debe estar caliente (nunca estirar en frío)
  - El estiramiento debe ser sostenido y progresivo (nunca balístico/forzado)
  - NUNCA estirar un músculo débil (fortalecer primero)
  - La dirección del estiramiento debe ser longitudinal a las fibras
  - Debe ir siempre acompañado de fortalecimiento
- **Tipo:** movilidad/seguridad
- **Métrica principal:** tissueTemperature (cualitativo: warm/cold), stretchType (sustained/ballistic)
- **Valores numéricos:** Cualitativos. El libro no da tiempos específicos de hold, pero indica "steady and prolonged" vs "intermittent or short-term"
- **Condiciones de aplicación:** Cualquier protocolo de flexibilidad
- **Capítulos/páginas:** Sección 2.5 (pp. 88–89), Sección 5.8 (p. 192)
- **Comentarios:** El autor condena explícitamente: (a) alguien pisando las rodillas en posición de frog para forzar turnout, (b) meter los pies bajo un piano para "mejorar el pointe"

### Regla: `strengthening-exercise-parameters`

- Para fortalecer músculo: low-resistance/high-repetition es superior a high-resistance/low-repetition.
  - Pesos típicos: 1–4 kg (o 2–5 kg según sección)
  - El músculo debe llevarse hasta la fatiga
  - Trabajar en todo el rango de movimiento (ROM completo)
  - Combinar ejercicios isométricos e isotónicos (la transferencia no es automática entre tipos)
- **Tipo:** volumen/intensidad
- **Métrica principal:** resistance (kg), reps, fatiguePoint, ROM
- **Valores numéricos:**
  - Resistencia: 1–5 kg (cualitativo: "low resistance")
  - Repeticiones: "far greater number" (no da número exacto)
  - Fatiga: criterion-referenced (ejercitar hasta incapacidad de mantener la tarea)
  - ROM: full range obligatorio
- **Condiciones de aplicación:** Rehabilitación y fortalecimiento general
- **Capítulos/páginas:** Sección 2.5 (pp. 90–92)
- **Comentarios:** ⚠️ El libro no da números de series/repeticiones exactos. El criterio de progresión es fatiga, no rep count.

### Regla: `rehabilitation-starts-immediately`

- La rehabilitación comienza inmediatamente tras la lesión, no días o semanas después. El área lesionada se inmoviliza mínimamente; todo lo demás se ejercita.
- **Tipo:** progresión/temporal
- **Métrica principal:** timeToRehabStart
- **Valores numéricos:**
  - Rango óptimo: 0 días (inmediato)
- **Condiciones de aplicación:** Cualquier lesión
- **Capítulos/páginas:** Sección 2.4 (p. 79)

### Regla: `immobilization-recovery-geometric`

- El tiempo de recuperación tras inmovilización NO es lineal sino geométrico: 4 semanas de inmovilización requieren 4–5× más tiempo de recuperación que 2 semanas (no 2×).
- **Tipo:** progresión
- **Métrica principal:** immobilizationWeeks → recoveryMultiplier
- **Valores numéricos:**
  - 2 semanas → baseline
  - 4 semanas → 4–5× baseline
- **Condiciones de aplicación:** Cualquier protocolo que incluya inmovilización
- **Capítulos/páginas:** Sección 2.4 (p. 78)
- **Comentarios:** Regla para calcular expectativas de retorno. El sistema debe penalizar inmovilizaciones prolongadas innecesarias.

### Regla: `muscle-wasting-onset`

- La atrofia muscular comienza a ser detectable en 2–3 días post-lesión/inmovilización. El vastus medialis es el primero en atrofiarse tras lesión de rodilla y el más difícil de recuperar.
- **Tipo:** progresión/temporal
- **Métrica principal:** daysSinceInjury
- **Valores numéricos:**
  - Umbral: 2–3 días → atrofia detectable
- **Capítulos/páginas:** Sección 2.3 (p. 77), Sección 5.11 (p. 194)

### Regla: `pointe-readiness-criteria`

- El inicio del trabajo de pointe NO se basa en edad (el libro rechaza explícitamente "12 años" como criterio). Se basa en:
  - Crecimiento óseo del pie completado
  - Fuerza adecuada en pies y tobillos
  - Control de todas las articulaciones relevantes
  - Turn-out controlado en cadera
  - Estabilidad de tronco
  - Ausencia de hiperlaxitud no controlada
- **Tipo:** progresión/criterio de pase
- **Métrica principal:** readinessChecklist (binaria por ítem)
- **Valores numéricos:** Cualitativos (checklist de sí/no)
- **Condiciones de aplicación:** Solo bailarinas en formación
- **Capítulos/páginas:** Sección 1.11 (pp. 59–60)
- **Comentarios:** ⚠️ El libro advierte que pies hipermóviles son de ALTO RIESGO en pointe si no hay fuerza suficiente. "No hay desventaja en empezar tarde."

### Regla: `turnout-minimum-threshold`

- Para danza clásica, el límite inferior de rotación externa de cadera es ~45°. Menos de esto produce problemas crecientes.
- **Tipo:** movilidad/umbral
- **Métrica principal:** hipExternalRotation (grados)
- **Valores numéricos:**
  - Mínimo funcional: ~45°
  - Ideal: no especificado numéricamente (180° es raro y no funcional)
- **Condiciones de aplicación:** Evaluación de aptitud para ballet
- **Capítulos/páginas:** Sección 5.8 (p. 190)
- **Comentarios:** La medición debe hacerse con cadera EXTENDIDA (posición de trabajo), NO en posición de frog (flexión), que sobreestima la rotación disponible.

### Regla: `no-overturning`

- Los pies NUNCA deben girarse más allá de la rotación externa disponible en la cadera. El over-turning (compensar en rodilla/tobillo/pie) es la causa de una cascada de lesiones.
- **Tipo:** técnica/seguridad
- **Métrica principal:** footTurnoutAngle ≤ hipExternalRotation
- **Valores numéricos:**
  - Regla: footAngle ≤ hipAngle (cualitativo: el pie no excede la cadera)
- **Condiciones de aplicación:** Cualquier ejercicio de turnout
- **Capítulos/páginas:** Secciones 2.3 (p. 74), 5.7 (pp. 187–190)
- **Comentarios:** El autor califica como "culpable" al profesor que exige 180° en pies sin capacidad de cadera. El over-turning solo es posible por fricción pie-suelo (no ocurre en el aire).

### Regla: `stress-fracture-clinical-diagnosis`

- Las stress fractures NO aparecen en rayos X durante las primeras semanas. El diagnóstico debe ser CLÍNICO (dolor localizado, calor, hinchazón, engrosamiento palpable) y el tratamiento (reposo) debe comenzar INMEDIATAMENTE sin esperar confirmación radiológica.
  - Metatarsales: 10–14 días mínimo para ver en X-ray
  - Tibia/pars interarticularis: semanas a meses
- **Tipo:** diagnóstico/temporal
- **Métrica principal:** daysSinceSymptomOnset, clinicalSigns (boolean[])
- **Valores numéricos:**
  - Ventana X-ray negativa: 10–14 días (metatarsales), 1–2+ meses (tibia/spine)
  - Si se ignora: tiempo de recuperación se multiplica ×4 o más
- **Condiciones de aplicación:** Dolor óseo localizado persistente
- **Capítulos/páginas:** Sección 2.2 (p. 70), Sección 3.16 (p. 118), Sección 3.27 (pp. 126–128), Sección 3.51 (p. 142)
- **Comentarios:** Bone scan (gammagrafía) confirma antes. El sistema debe recomendar evaluación médica, no diagnosticar.

### Regla: `lumbar-stress-fracture-immobilization`

- Stress fracture lumbar (pars interarticularis): 4 meses de inmovilización (yeso o corsé en bailarines disciplinados). Durante ese periodo: ejercicios de miembros y barre limitado. Después: 2+ meses de fortalecimiento de tronco antes de retorno progresivo.
- **Tipo:** rehabilitación/temporal
- **Métrica principal:** immobilizationMonths, rehabMonths
- **Valores numéricos:**
  - Inmovilización: 4 meses
  - Rehabilitación post-inmovilización: ≥ 2 meses
  - Retorno a clase completa: gradual tras rehabilitación
- **Condiciones de aplicación:** Solo con diagnóstico confirmado y supervisión médica
- **Capítulos/páginas:** Sección 3.51 (pp. 141–143)

### Regla: `achilles-rupture-surgical-window`

- La rotura completa del tendón de Aquiles requiere reparación quirúrgica dentro de las primeras 24 horas. Inmovilización post-op: ~6 semanas. Retorno a actividad completa: hasta 6 meses.
- **Tipo:** emergencia médica/temporal
- **Métrica principal:** hoursSinceInjury
- **Valores numéricos:**
  - Ventana quirúrgica: ≤ 24 horas (ideal)
  - Inmovilización: ~6 semanas
  - Retorno: hasta 6 meses
- **Condiciones de aplicación:** Solo con diagnóstico médico. El sistema debe derivar a urgencias.
- **Capítulos/páginas:** Sección 3.10 (p. 113)

### Regla: `contrast-bath-protocol`

- Baños de contraste para pies/tobillos:
  - Agua caliente: 40–44°C
  - Agua fría: 15–20°C
  - Secuencia: 10 min caliente → 1 min frío → ciclos de 4 min caliente/1 min frío durante 30 min
  - TERMINAR en frío
- **Tipo:** recuperación
- **Métrica principal:** waterTemp, duration
- **Valores numéricos:**
  - Caliente: 40–44°C
  - Frío: 15–20°C
  - Total: 30 min
  - Secuencia exacta arriba
- **Condiciones de aplicación:** Lesiones subagudas/crónicas de pie y tobillo. Puede hacerlo el bailarín en casa.
- **Capítulos/páginas:** Sección 2.5 (p. 84)

### Regla: `deep-heat-parameters`

- Calor profundo (diatermia, ultrasonido, microondas):
  - Temperatura terapéutica: 40–45°C
  - Duración: 3–30 minutos
  - Solo aplicable por fisioterapeuta cualificado
  - Ultrasonido: máx 4 W/cm², típicamente < 1 W/cm²
  - Contraindicado en: áreas anestésicas, suministro sanguíneo inadecuado, tendencia al sangrado, inflamación aguda, problemas mecánicos agudos (ej. prolapsos discales)
- **Tipo:** recuperación/contraindicación
- **Métrica principal:** tissueTemp, duration
- **Valores numéricos:**
  - Temperatura: 40–45°C
  - Duración: 3–30 min
  - Ultrasonido: < 1–4 W/cm²
- **Capítulos/páginas:** Sección 2.5 (pp. 82–85)
- **Comentarios:** ⚠️ El autor prohíbe explícitamente que el bailarín use estas máquinas por sí mismo. El sistema debe marcarlas como "solo profesional".

### Regla: `nutrition-basics`

- Proteínas: necesarias para reparación. Si la dieta es insuficiente, el cuerpo cataboliza músculo.
  - Calcio: 1200 mg/día (4–5 vasos de leche)
  - Hierro: 18 mg/día (riesgo en mujeres por menstruación)
  - Hidratación: crítica. 1 L de pérdida = 1 kg de peso. La deshidratación causa fatiga precoz, calambres y mayor riesgo de lesión.
  - Amenorrea: bailarinas por debajo de ~45 kg típicamente no menstrúan (umbral citado de investigación americana)
- **Tipo:** estilo de vida/nutrición
- **Métrica principal:** calciumMg, ironMg, hydrationStatus
- **Valores numéricos:**
  - Calcio: 1200 mg/día
  - Hierro: 18 mg/día
  - Umbral amenorrea: ~45 kg
  - Hidratación: 1 L pérdida = 1 kg peso
- **Capítulos/páginas:** Sección 2.7 (pp. 99–103)
- **Comentarios:** El libro enfatiza que las bailarinas tienen "food fads" y restricciones calóricas peligrosas. El sistema debe derivar a nutricionista/dietista titulado.

### Regla: `pre-performance-nutrition`

- Comida pequeña 1.5–3 horas antes de la actuación (carbohidratos complejos: pasta, sándwich, fruta).
  - NO carbohidratos simples justo antes (pico de glucosa → caída reactiva → fatiga a mitad de actuación)
  - Hidratación: sorbos pequeños y frecuentes durante el día, NO medio litro justo antes
  - Evitar: cafeína, alcohol, bebidas cola (diuréticos)
- **Tipo:** nutrición/temporal
- **Métrica principal:** hoursBeforePerformance, mealType
- **Valores numéricos:**
  - Comida: 1.5–3 h antes
  - Tipo: carbohidratos complejos
- **Capítulos/páginas:** Sección 2.7 (pp. 102–103)

### Regla: `exercise-to-fatigue`

- Para ganar fuerza, el músculo DEBE ejercitarse hasta la fatiga. Ejercitar por debajo de la capacidad no produce estímulo de adaptación.
- **Tipo:** intensidad
- **Métrica principal:** fatigueReached (boolean)
- **Valores numéricos:** Cualitativo. El libro define fatiga como "incapacidad de realizar la tarea asignada en la forma asignada".
- **Condiciones de aplicación:** Solo en fase de fortalecimiento, NO en fase aguda de lesión.
- **Capítulos/páginas:** Sección 2.5 (pp. 91–92)

### Regla: `vastus-medialis-priority`

- El vastus medialis (VMO) solo se activa efectivamente en los últimos 15° de extensión de rodilla. Tras cualquier lesión de rodilla, es el primero en atrofiarse y el más difícil de recuperar. Todo protocolo de rodilla DEBE incluir trabajo específico de VMO.
- **Tipo:** rehabilitación/especificidad
- **Métrica principal:** lastDegreesOfExtension (15°)
- **Valores numéricos:**
  - Rango de activación: últimos 15° de extensión
- **Capítulos/páginas:** Sección 1.3 (p. 23), Sección 3.30 (p. 130), Sección 5.11 (p. 194)

### Regla: `knee-rotation-limit`

- La rodilla NO tiene rotación en extensión completa. Solo permite ~15° de rotación con flexión parcial. Rotación forzada con la rodilla extendida o semi-flexionada en carga produce daño meniscal/ligamentoso.
- **Tipo:** seguridad/ROM
- **Métrica principal:** kneeRotationDegrees, kneeFlexionAngle
- **Valores numéricos:**
  - Extensión completa: 0° rotación
  - Flexión parcial: ~15° máx
  - Flexión ≥ 45°: rotación activa significativa
- **Capítulos/páginas:** Sección 1.3 (p. 24), Sección 3.35 (p. 133)

### Regla: `jump-landing-forces`

- Las fuerzas musculares durante el salto pueden alcanzar 500–700 kg (medio a tres cuartos de tonelada). El aterrizaje debe absorberse muscularmente, no articularmente.
- **Tipo:** biomecánica
- **Métrica principal:** landingForce (kg)
- **Valores numéricos:**
  - Fuerza: 500–700 kg
- **Capítulos/páginas:** Sección 1.3 (p. 18)

### Regla: `depression-post-injury-timeline`

- Los bailarines lesionados experimentan un pico de depresión alrededor de las 5 semanas de inactividad. Anticipar y normalizar este fenómeno reduce su impacto.
- **Tipo:** psicológico/temporal
- **Métrica principal:** weeksSinceInjury
- **Valores numéricos:**
  - Pico: ~5 semanas
- **Capítulos/páginas:** Sección 2.3 (pp. 76–77)

### Regla: `engram-repetition-count`

- La formación de un engram (patrón motor automático) requiere cientos de miles a millones de repeticiones precisas. La precisión inicial es crítica: los errores se automatizan también. El aprendizaje debe ser lento al principio.
- **Tipo:** motor learning
- **Métrica principal:** repetitionCount, accuracy
- **Valores numéricos:**
  - Repeticiones: 100,000–1,000,000+ (cualitativo: "hundreds of thousands or millions")
  - Precisión: 100% requerida en fase de aprendizaje
- **Capítulos/páginas:** Sección 1.3 (pp. 19–20)

### Regla: `balance-training-progression`

- El reentrenamiento propioceptivo post-lesión de tobillo sigue progresión estricta:
  1. Sentado (non-weight-bearing) en balancing board
  2. De pie en barre (partial weight-bearing)
  3. De pie libre (full weight-bearing)
- **Tipo:** progresión
- **Métrica principal:** weightBearingLevel
- **Valores numéricos:** 3 niveles ordinales
- **Capítulos/páginas:** Sección 3.1 (pp. 106–107)

### Regla: `no-smoking`

- El tabaco produce monóxido de carbono que se une a la hemoglobina, reduciendo el transporte de oxígeno. El rendimiento disminuye. El sistema debe incluir esto como factor de estilo de vida.
- **Tipo:** estilo de vida
- **Métrica principal:** smokingStatus
- **Capítulos/páginas:** Sección 1.8 (p. 48), Sección 2.6 (p. 96)

### Regla: `hydration-monitoring`

- La deshidratación se monitoriza por peso: 1 L de pérdida = 1 kg. Pesar antes/después de sesiones intensas. Reponer con agua, squash o bebidas carbonatadas (NO cola, té, café, alcohol por ser diuréticos). La sal se repone con dieta normal; las pastillas de sal son innecesarias.
- **Tipo:** estilo de vida/hidratación
- **Métrica principal:** weightLossKg = fluidLossLiters
- **Capítulos/páginas:** Sección 2.7 (p. 101)

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `pointe-work-progression`

- **Disciplina:** Ballet clásico
- **Objetivo final:** Bailar sur la pointe con control, estabilidad y alineación correcta
- **Requisitos de seguridad previos:**
  - Crecimiento óseo del pie completado
  - Fuerza en pies, tobillos, caderas y tronco
  - Control de turn-out en cadera
  - Ausencia de hiperlaxitud no controlada
  - ⚠️ Pies hipermóviles = alto riesgo; requieren fortalecimiento extra ANTES de pointe
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica | Criterio para avanzar | Errores típicos | Notas/págs |
|---|---|---|---|---|---|
| 1 | Rise a demi-pointe | Tronco y pelvis se mueven como unidad, peso sobre los dedos. Empujar desde el suelo con el antepié. Glúteos, aductores, isquios y quads activos | Control estable sin balanceo, sin rolling | Peso atrás, rolling, sickling | 1.11, p. 58 |
| 2 | Rise a trois-quarts pointe | Pasar por demi-pointe hasta tres cuartos de pointe. Músculos de la pantorrilla trabajan más | Control en el rango intermedio, sin caída | Perder alineación, peso atrás | 1.11, p. 58 |
| 3 | Full pointe (sur la pointe) | Base muy pequeña. Transferencia de peso precisa. Control fino de cabeza, tronco y miembros | Estabilidad sin apoyo, sin dolor | Knuckling (dedos doblados), sickling, over-pointed | 1.11, pp. 59–60 |
| 4 | Descenso controlado | Inverso exacto del ascenso: pointe → 3/4 → demi → plano | Control excéntrico completo | Caída, crash, pérdida de alineación | 1.11, p. 59 |

### SkillPath: `ankle-rehab-balancing-board`

- **Disciplina:** Fisioterapia/rehabilitación
- **Objetivo final:** Restaurar propiocepción y estabilidad del tobillo post-lesión
- **Requisitos de seguridad previos:** Fractura excluida por rayos X; dolor controlado
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas/págs |
|---|---|---|---|---|---|
| 1 | Sentado en balancing board | Non-weight-bearing. Aprender colocación correcta del pie y sentir los movimientos del tobillo | Control de movimientos sin dolor | Compensar con rodilla | 3.1, p. 106, Fig 3.4 |
| 2 | En barre con balancing board | Partial weight-bearing. Manos en barre para soporte | Estabilidad parcial sin apoyo completo | Apoyar demasiado peso en manos | 3.1, p. 107, Fig 3.5 |
| 3 | De pie libre en balancing board | Full weight-bearing. Reeducación de reflejos posturales | Equilibrio estable sin soporte | Rodilla en hiperextensión, peso atrás | 3.1, p. 107, Fig 3.6 |

### SkillPath: `plié-technique`

- **Disciplina:** Ballet clásico
- **Objetivo final:** Plié con alineación correcta, sin alteración de pelvis ni columna lumbar
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas/págs |
|---|---|---|---|---|---|
| 1 | Descenso | Flexión de cadera + rodilla + dorsiflexión pasiva de tobillo. Gravedad controlada por quads. Turn-out mantenido por aductores | Rodillas alineadas sobre pies, sin rolling | Rodillas adelante, heels forward, rolling | 1.11, pp. 55–56 |
| 2 | Grand plié | Talones se elevan del suelo. Dorsiflexión pasiva continúa. Intrinsics mantienen postura del pie | Alineación mantenida en todo el rango | Over-turning al subir, peso atrás | 1.11, p. 56 |
| 3 | Ascenso | Contracción activa de quads + extensores de cadera. Empujar el suelo, no solo extender rodillas. Talones bajan ASAP | Peso correcto sobre pies, sin retroceso | Peso atrás, "straightening knees" sin push-down | 1.11, p. 56 |

### SkillPath: `abdominal-strengthening-progression`

- **Disciplina:** Fortalecimiento
- **Objetivo final:** Control y fuerza del core para estabilidad de tronco
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas/págs |
|---|---|---|---|---|---|
| 1 | Sit-ups con rodillas flexionadas | Rectus abdominis. Rodillas flexionadas para evitar lordosis lumbar. Hombros no hacen el trabajo | Control excéntrico (bajada) tan fuerte como concéntrico | Tirar del cuello, lordosis, usar hombros | 4, Figs 4.1–4.3 |
| 2 | Abdominales avanzados | Mayor control y potencia | Sin compensación | — | 4, Figs 4.8–4.9 |
| 3 | Oblicuos con twist | Fibras cruzadas. Twist desde el inicio del movimiento | Alternancia controlada | Rotación incompleta | 4, Figs 4.10–4.11 |
| 4 | Estabilización (dead bug) | Espina y pelvis inmóviles mientras miembros se mueven. Transversus abdominis activo | Sin rocking pélvico, abdomen plano | Arquear lumbar, pelvis tucked | 4, Figs 4.101–4.116 |

### SkillPath: `intrinsic-foot-strengthening`

- **Disciplina:** Ballet/rehabilitación
- **Objetivo final:** Intrinsics fuertes para mantener arcos, evitar clawing y soportar pointe
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas/págs |
|---|---|---|---|---|---|
| 1 | Faradic foot bath | Estimulación eléctrica para "despertar" intrinsics cuando hay pérdida de control consciente | Sentir la contracción correcta | Pasividad total durante estimulación | 2.5, p. 86 |
| 2 | Ejercicios de intrinsics activos | Contraer intrinsics voluntariamente: extender IP mientras flexionar MTP, spread/squeeze toes | Control sin calambre | Clawing (dominancia de flexores largos) | 4, Figs 4.97–4.99, 4.157–4.160 |
| 3 | Con banda elástica | Resistencia para primer dedo y dedos externos | Control contra resistencia | Curling | 4, Figs 4.155–4.156 |

### SkillPath: `hip-turnout-control`

- **Disciplina:** Ballet
- **Objetivo final:** Controlar y mantener el turn-out disponible sin compensación
- **Requisitos previos:** Conocer el límite anatómico individual (medido con cadera extendida, NO en frog)
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas/págs |
|---|---|---|---|---|---|
| 1 | Medición correcta | Evaluar rotación externa con cadera extendida (prono con pierna al borde de camilla) | Conocer límite real | Medir en frog (sobreestima) | 5.8, p. 191, Fig 5.21 |
| 2 | Fortalecer aductores | Principal rotador externo funcional. Ejercicios específicos | Fuerza suficiente para mantener turn-out en centro | Gripping en barre | 5.10, p. 193 |
| 3 | Estiramiento selectivo | Solo tras fortalecimiento. Estirar estructuras específicas en dirección de sus fibras (NO en dirección del turn-out necesariamente) | Mejora gradual sin dolor | Forzar con frog, estirar en frío | 5.8, p. 192 |
| 4 | Integración en movimiento | Mantener turn-out en relevés, saltos, centre work | Sin over-turning, sin rolling | Fricción como mecanismo de turn-out | 5.7, p. 189 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Plié

- **Cues principales:**
  - Rodillas alineadas sobre el centro del pie
  - Pelvis y columna lumbar neutras (ni lordosis ni tucking)
  - Empujar el suelo para subir (no solo extender rodillas)
  - Talones bajan al suelo lo antes posible al subir
  - Sensación de "push yourself up from below"
- **Errores frecuentes:**
  - Rodillas por delante de los pies
  - Rolling del pie (peso en borde medial)
  - Over-turning al subir del plié
  - Peso demasiado atrás al subir
  - Mantener talones elevados innecesariamente (sobrecarga quads)
- **Indicaciones específicas:** Con tibial torsion, la alineación perfecta rodilla-pie puede ser anatómicamente imposible
- **Referencias:** Sección 1.11, pp. 55–56

### Tendu

- **Cues principales:**
  - Tronco y pierna de apoyo colocados correctamente
  - El stretch llega hasta la punta de los dedos (dedos rectos)
  - Peso correcto sobre el pie de apoyo
- **Errores frecuentes:**
  - Dedos curled (intrinsics débiles)
  - Peso atrás → el ejercicio se vuelve inefectivo
  - Pérdida de colocación del tronco
- **Referencias:** Sección 1.11, p. 57

### Rise / Relevé

- **Cues principales:**
  - Tronco y pelvis como unidad, ligeramente adelante
  - Empujar desde el suelo con el antepié
  - Sensación de "lifted up from above" (no pushed up from below)
  - Glúteos, aductores, isquios y quads activos
  - En swayback knees: equilibrio quads/isquios es crítico
- **Errores frecuentes:**
  - Sickling (peso lateral o medial)
  - Rolling
  - Peso atrás
  - Knuckling en pointe
- **Referencias:** Sección 1.11, p. 58

### Pointe

- **Cues principales:**
  - Pasar por demi → 3/4 → full pointe progresivamente
  - Base pequeña = transferencia de peso precisa
  - Fuerza relativa (equilibrio entre grupos), no fuerza bruta
  - Propiocepción innata + entrenamiento
- **Errores frecuentes:**
  - Over-pointed foot (riesgo de daño dorsal del pie/anterior del tobillo)
  - Knuckling (dedos doblados)
  - Sickling
  - Peso adelante de los dedos (centro de gravedad fuera de la base)
- **Referencias:** Sección 1.11, pp. 59–60, Figs 1.78–1.80

### Standing / Posture

- **Cues principales:**
  - Línea de gravedad: mastoides → hombro → cadera → rodilla → tobillo → borde anterior del talón
  - Tronco estabilizado por extensores de espalda + abdominales
  - Pelvis equilibrada por glúteos + flexores de cadera
  - En una pierna: centro de gravedad se desplaza sobre el pie de apoyo sin alterar pelvis/tronco
  - Turn-out: base más estrecha = control postural más fino
- **Errores frecuentes:**
  - Peso atrás (el fallo más importante y frecuente)
  - Hiperextensión de rodillas (swayback) sin control muscular
  - Pelvis desalineada al estar en una pierna
  - Tucking (pelvis metida) o lordosis
- **Referencias:** Sección 1.11, pp. 52–54, Figs 1.70–1.72

### Abdominal exercises

- **Cues principales:**
  - Rodillas flexionadas en sit-ups (evita lordosis lumbar)
  - Abdominales trabajan igual de fuerte en la bajada que en la subida
  - Hombros NO hacen el trabajo principal
  - En ejercicios de estabilización: abdomen plano, lumbar neutra (ni arqueada ni tucked)
  - Respiración: expansión lateral de costillas, sin elevar esternón
- **Errores frecuentes:**
  - Lifting legs straight → lordosis lumbar (contraindicado)
  - Tirar del cuello/cabeza
  - Pelvis excesivamente tucked
  - Transversus abdominis no activado
- **Referencias:** Sección 4, Figs 4.1–4.116

### Back extensor exercises

- **Cues principales:**
  - Escápulas deprimidas (evita tensión cervical)
  - Waist pulled in
  - Glúteos firmes
  - Brazos NO empujan; los extensores de espalda hacen el trabajo
- **Errores frecuentes:**
  - Empujar con brazos
  - Tensión cervical
  - Hiperextensión lumbar excesiva
- **Referencias:** Sección 4, Figs 4.12–4.29

### Quadriceps exercises

- **Cues principales:**
  - Cadera, rodilla y centro del pie alineados
  - Pelvis cuadrada, peso en ambos glúteos
  - Tronco ligeramente reclinado (libera la cadera)
  - Rodilla se flexiona ligeramente sobre un cojín en fase de relajación
  - Vastus medialis debe contraerse firmemente (visible)
- **Errores frecuentes:**
  - Desalineación cadera-rodilla-pie
  - No activar VMO específicamente
- **Referencias:** Sección 4, Figs 4.41–4.49

### Adductor exercises

- **Cues principales:**
  - Pierna superior flexionada a 90° y apoyada (libera la pierna de trabajo)
  - Pelvis cuadrada al suelo (no rotar)
  - Rodilla de la pierna de trabajo mirando adelante
  - Sensación de pierna "lengthened" (no pulled into hip)
  - Abdominales activos
- **Errores frecuentes:**
  - Rotación pélvica
  - Tirar la pierna hacia la cadera
- **Referencias:** Sección 4, Figs 4.50–4.62

### Gluteal exercises

- **Cues principales:**
  - Espalda recta
  - Pierna alineada con el tronco
  - Rodilla mirando adelante
  - Controlar bajada Y subida
  - Sensación de lengthening
- **Errores frecuentes:**
  - Rotación pélvica
  - Usar momentum
- **Referencias:** Sección 4, Figs 4.63–4.79

### Hamstring exercises

- **Cues principales:**
  - Piernas alineadas con tronco
  - Flexionar rodilla sin rotar el muslo
  - Talón alineado con centro del glúteo
  - Glúteos firmes (evita flexión de cadera compensatoria)
- **Errores frecuentes:**
  - Rotación del muslo
  - Cadera flexionada
- **Referencias:** Sección 4, Figs 4.87–4.92

### Proprioception / Balance exercises

- **Cues principales:**
  - Practicar con ojos cerrados para mejorar coordinación
  - Wobble board en paralelo y turn-out
  - En turn-out: rotadores externos trabajan vigorosamente
  - Mantener rodilla sobre el pie, alineación perfecta
- **Errores frecuentes:**
  - Compensar con rodilla o cadera
  - Hiperextensión de rodilla
- **Referencias:** Sección 4, Figs 4.146–4.152

### Stretching (general)

- **Cues principales:**
  - Siempre caliente (post-warm-up o final de clase)
  - Sostenido y progresivo, nunca balístico
  - Dirección longitudinal a las fibras
  - Nunca sobre músculo débil
  - Acompañado siempre de fortalecimiento
- **Errores frecuentes:**
  - Estirar en frío → desgarro
  - Forzar con compañero pisando (frog)
  - Estirar contra las fibras
  - Stretching como sustituto de fortalecimiento
- **Referencias:** Sección 2.5, pp. 88–89

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión: Esguince del ligamento lateral del tobillo

- **Zona:** `ankle`
- **Etiología:** Inversión forzada, frecuentemente con componente rotacional y de plantarflexión. Caída de pointe, mal aterrizaje de salto, o accidente cotidiano.
- **Signos/síntomas:** Dolor lateral, hinchazón, posible equimosis. Excluir: fractura de maléolo lateral, fractura base 5º metatarsiano, rotura completa del ligamento, inestabilidad anterior del astrágalo.
- **Fases de tratamiento:**
  - **Fase 1 (aguda):**
    - Objetivo: Minimizar sangrado/hinchazón, excluir fractura
    - Qué se hace: Non-weight-bearing hasta excluir fractura. Hielo + elevación + reposo. Ultrasonido/interferencial. Ejercicios non-weight-bearing en elevación (pie pointed y neutral para incluir peroneos). Estiramiento de pantorrilla. Faradic foot bath e intrinsics.
    - Qué NO se hace: Continuar bailando sin diagnóstico. Compresión excesiva.
    - Criterio para avanzar: Ausencia de fractura, dolor controlado
  - **Fase 2 (parcial weight-bearing):**
    - Balancing board en barre. Progresión de ejercicios.
  - **Fase 3 (full weight-bearing):**
    - Balancing board libre. Reentrenamiento propioceptivo (daño a terminaciones nerviosas propioceptivas causa inestabilidad residual).
  - **Fase 4 (retorno):**
    - Strengthening completo + corrección técnica
- **Red flags:** Inestabilidad anterior del astrágalo no diagnosticada → inestabilidad crónica permanente. Rotura completa no reparada en 24h → resultados quirúrgicos tardíos muy inferiores.
- **Referencias:** Sección 3.1 (pp. 104–108), Sección 3.2 (pp. 108–109)

### Lesión: Achilles tendonitis

- **Zona:** `ankle/achilles`
- **Etiología:** Over-use por debilidad de otros grupos (pies, gastrocnemius, quads, isquios, glúteos). Swayback knees y weight-back agravan. Falta de trabajo en three-quarter pointe.
- **Signos/síntomas:** Dolor posterior del tobillo, engrosamiento del tendón, posible crepitación.
- **Tratamiento:**
  - Hielo, ultrasonido, interferencial (incluir origen del gastrocnemius encima de la rodilla)
  - Fortalecimiento progresivo → estiramiento
  - Corregir causas: fortalecer grupos débiles, corregir técnica
  - ⚠️ Si tratamiento prolongado falla → buscar causa técnica no detectada
  - Hidrocortisona: solo en casos crónicos muy localizados, UNA inyección, peritendinoso, NUNCA intratendinoso
- **Red flags:** Rotura completa (gap palpable, incapacidad de demi-pointe) → urgencia quirúrgica ≤ 24h
- **Referencias:** Sección 3.9 (pp. 112–113), Sección 3.10 (p. 113)

### Lesión: Stress fractures (metatarsales, tibia, fíbula, lumbar)

- **Zona:** `foot`, `lower-leg`, `lumbar`
- **Etiología:** Estrés repetitivo localizado. Causas técnicas: weight-back, weak feet, over-turning, sickling, hard floors, aumento súbito de carga.
- **Signos/síntomas:** Dolor progresivo con actividad, muy localizado. Calor, hinchazón, engrosamiento palpable (huesos superficiales). X-ray negativo inicialmente.
- **Tratamiento:**
  - **Reposo inmediato** desde el diagnóstico clínico (no esperar X-ray)
  - Interferencial local
  - Ejercicios para todos los demás grupos musculares
  - Corrección técnica obligatoria
  - Nutrición adecuada
  - ⚠️ Contraindicado: hidrocortisona (impide cicatrización ósea), AINEs a dosis plena
- **Tiempos de recuperación:** Variables. Si se ignora → fractura completa → meses/año de recuperación.
- **Referencias:** Secciones 3.16 (pp. 116–118), 3.26 (pp. 125–126), 3.27 (pp. 126–128), 3.51 (pp. 141–143)

### Lesión: Anterior knee pain (paraguas)

- **Zona:** `knee`
- **Subcondiciones:**
  - Tight tensor fasciae latae → lateral tracking patellar
  - Patellar tendonitis (patello-tendinous junction)
  - Osgood-Schlatter (apofisitis tibial en adolescentes)
  - Chondromalacia patellae (reblandecimiento cartílago retropatelar)
- **Etiología común:** Desequilibrio muscular medial/lateral del cuádriceps. Rolling, over-turning, weight-back.
- **Tratamiento:**
  - Corregir desequilibrio muscular (VMO prioritario)
  - Estirar fascia lata ANTES de fortalecer si está tight
  - Faradic para VMO
  - Pesos pequeños (1–2 kg máx)
  - ⚠️ Lateral release surgery: inútil sin corregir desequilibrio muscular. Shaving retropatelar: "desastroso"
- **Referencias:** Sección 3.30 (pp. 129–132)

### Lesión: Lesión meniscal (medial y lateral)

- **Zona:** `knee`
- **Etiología:** Atrapamiento del menisco entre cóndilo femoral y meseta tibial durante rotación con rodilla flexionada. Over-turning, aductores débiles, VMO débil.
- **Tratamiento:**
  - Si no hay locking/giving way → fortalecer + corregir técnica puede evitar cirugía
  - Si hay síntomas mecánicos → artroscopia con meniscectomía parcial (preservar máximo)
  - Post-op: evitar yeso, ejercicios tempranos, corrección técnica exhaustiva
- **Referencias:** Secciones 3.35 (pp. 133–134), 3.36 (pp. 134–135)

### Lesión: Lumbar disc prolapse

- **Zona:** `lumbar`
- **Tratamiento agudo:** Problema ortopédico rutinario.
- **Rehabilitación:** Fortalecimiento de tronco, glúteos y miembros inferiores. Corrección de fallos técnicos.
- **Referencias:** Sección 3.50 (p. 141)

### Lesión: Facet joint strain

- **Zona:** `lumbar`
- **Etiología:** Movimientos descontrolados, asimétricos, especialmente en saltos. Falta de control del turn-out en el aire.
- **Tratamiento:** Reposo, tratamiento local, fortalecimiento de tronco, corrección de asimetrías. Hidrocortisona solo en casos crónicos (con control radiológico).
- **Red flags:** Dolor referido tipo sciática → diferenciar de prolapsos discal.
- **Referencias:** Sección 3.49 (p. 141)

### Lesión: Groin strain

- **Zona:** `hip/groin`
- **Etiología:** Técnica defectuosa + debilidad. Rectus femoris y sartorius más frecuentes. Weight-back, aductores inhibidos.
- **Tratamiento:** Ultrasonido (con área en stretch), interferencial. Ejercicio + corrección técnica EN PARALELO desde el inicio (no secuencial).
- **Red flags:** Dolor persistente → verificar si es referido de espalda. En adolescentes: descartar mononucleosis.
- **Referencias:** Sección 3.40 (pp. 137–138)

### Lesión: Hamstring strains/tears

- **Zona:** `hamstring`
- **Etiología:** Estiramiento en frío, weight-back + sitting in hip, over-turning (isquios mediales sobrecargados, laterales infrautilizados).
- **Tratamiento:** Hielo si hay sangrado, ultrasonido, interferencial. Ejercicio progresivo (aductores, glúteos, quads también). Estiramiento suave solo tras tono muscular restaurado.
- **⚠️ Contraindicado:** Inyecciones de esteroides (convierten condición tratable en difícil)
- **Referencias:** Sección 3.41 (pp. 138–139)

### Lesión: Adductor strains/tears

- **Zona:** `adductor`
- **Etiología:** Splits forzados, abducción súbita. Riesgo de avulsión ósea en origen.
- **Tratamiento:** Hielo + reposo 48h. Ejercicios suaves progresivos. NO pesos iniciales. NO estiramiento temprano si avulsión ósea (riesgo de osificación del hematoma → "rider's bone").
- **Referencias:** Sección 3.39 (pp. 136–137)

### Lesión: Posterior ankle block (os trigonum / large posterior tubercle)

- **Zona:** `ankle`
- **Etiología:** Impingement óseo posterior en plantarflexión completa. El os trigonum puede ser stress fracture del tubérculo posterior.
- **Tratamiento:**
  - Conservador primero: fortalecer intrinsics y grupos de la pierna, interferencial
  - Si falla: cirugía (abordaje MEDIAL, no lateral para evitar daño a peroneos)
  - Post-op: ejercicios tempranos de plantarflexión, movilización activa, vigilar contractura posterior (6+ meses)
- **Referencias:** Sección 3.12 (pp. 114–115), Sección 5.16 (pp. 198–200)

### Lesión: Tibialis posterior tendonitis

- **Zona:** `foot/medial`
- **Etiología:** Weight-bearing incorrecto. Corregir rolling en el tobillo en vez de la cadera. Intrinsics débiles.
- **Tratamiento:** Ultrasonido, interferencial, hielo. Faradic foot bath + intrinsics. Corrección técnica extensa. Lenta resolución.
- **Referencias:** Sección 3.13 (p. 115)

### Lesión: Hallux rigidus

- **Zona:** `first-toe`
- **Etiología:** Probablemente genética, bilateral. Progresiva. Limitación de dorsiflexión → problemas técnicos.
- **Tratamiento:** Tracción suave, ejercicios activos/pasivos, intrinsics. NO forzar three-quarter pointe. Cirugía: silastic replacement (solo profesionales, no estudiantes). ⚠️ Distinguir de stiffness temporal por trauma repetido (no es hallux rigidus verdadero).
- **Referencias:** Sección 3.22 (pp. 123–124)

### Lesión: Sesamoiditis

- **Zona:** `first-toe`
- **Etiología:** Trauma directo (mal aterrizaje), superficie dura prolongada.
- **Tratamiento:** Paciencia (meses). Hielo, ultrasonido, microondas pulsado, interferencial. Felt padding. Hidrocortisona ocasional (resultados decepcionantes). Cirugía: NO (excisión deja dolor residual).
- **Referencias:** Sección 3.20 (pp. 120–121)

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Nutrición

- **Enfoque del libro:** El libro dedica una sección completa (2.7, pp. 99–103) a nutrición. Los puntos clave:
  - Bailarinas tienen alta prevalencia de "food fads" y dietas restrictivas peligrosas
  - Si la ingesta calórica es insuficiente, el cuerpo cataboliza músculo para obtener aminoácidos
  - Grupos alimentarios diarios: 2 porciones carne/pescado/huevos, 4 cereal, 3 lácteos, 4 verdura/fruta
  - Reducir grasa es la forma más eficiente de reducir calorías (grasa = 2× calorías que proteína/carbs por peso)
  - No saltarse comidas; evitar comida grande justo antes de dormir
  - Suplementos vitamínicos: sin evidencia de mejora de rendimiento. Exceso de vitaminas A y D es dañino. B12 inyectado no mejora rendimiento.
  - ⚠️ El libro recomienda derivar a dietista titulado para problemas de peso/alimentación

### Hidratación

- Deshidratación → fatiga precoz, calambres, heat stroke, mayor riesgo de lesión
- Monitorizar por peso (1 L = 1 kg)
- Reponer con agua, squash, bebidas carbonatadas
- Evitar: cola, té, café, alcohol (diuréticos)
- Sal: dieta normal suficiente; pastillas de sal innecesarias

### Estrés / Psicología

- El libro menciona el pico de depresión a las ~5 semanas de lesión (Sección 2.3, pp. 76–77)
- La tensión muscular por estrés/anxiety produce gripping del suelo con los dedos, contribuyendo a anterior compartment syndrome (3.28, p. 128)
- El sistema simpático/adrenalina aumenta frecuencia cardíaca y produce "butterflies" pre-actuación (1.4, p. 35)

### Sueño

- El libro no dedica sección específica al sueño. Solo menciona que bailarinas lesionadas con depresión "sleep badly" (2.3, p. 77). No hay datos cuantitativos.

### Entrenar enfermo

- El libro menciona que la mononucleosis (glandular fever) puede presentarse como groin pain + fatiga en adolescentes (3.40, p. 138)
- Tras enfermedad (ej. influenza), el retorno súbito a trabajo completo puede precipitar síntomas de os trigonum previamente asintomático (3.12, p. 114)
- No hay reglas tipo "above/below the neck"

### Tabaco y alcohol

- Tabaco: CO reduce transporte de O₂ → menor rendimiento. Condenado explícitamente (1.8, p. 48; 2.6, p. 96)
- Alcohol: diurético, causa deshidratación. Efecto depresor/sedante. Un vaso de vino post-actuación para relajar es aceptable (2.7, p. 101)
- Alcohol y tabaco dañan músculo cardíaco y esquelético (2.6, p. 96)

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - **Fuente principal de reglas de prevención de lesiones por técnica defectuosa.** El catálogo de la Sección 5 (5.1–5.20) es el activo más valioso: cada fallo técnico tiene causas, consecuencias y tratamiento. Modelar como `TechnicalFault → InjuryRisk[]` con grafo de dependencias.
  - **Motor de reglas para rehabilitación de bailarines/atletas de impacto.** Los protocolos de esguince de tobillo, stress fractures, tendinopatías y anterior knee pain son detallados y accionables.
  - **Validación de cues técnicos.** Los cues de plié, rise, pointe, standing posture y ejercicios de fortalecimiento (Sección 4) son específicos y pueden poblar `primaryCues` y `commonFaults` directamente.
  - **Reglas de seguridad absolutas** (contraindicaciones de esteroides, no estirar en frío, no estirar músculo débil, no analgesia para rendir) como hard constraints del sistema.
  - **SkillPaths de rehabilitación** (balancing board progression, pointe progression, intrinsic foot progression).

- **Limitaciones:**
  - ⚠️ **El libro es explícitamente médico-clínico.** Muchas decisiones (diagnóstico de fractura, indicación quirúrgica, prescripción de yeso) están fuera del ámbito de un sistema de fitness. El sistema debe usarlo como referencia educativa y para derivación a profesional, NUNCA como herramienta diagnóstica.
  - ⚠️ **Población específica:** bailarines de ballet clásico. Los protocolos de volumen/intensidad no son directamente transferibles a calistenia, powerlifting o fitness general sin adaptación.
  - ⚠️ **Muchas reglas son cualitativas** ("strengthen first, stretch later", "correct the fault"). El libro rara vez da series/repeticiones/porcentajes exactos. El sistema debe implementar estas reglas como heurísticas, no como números exactos.
  - ⚠️ **El libro es de 2000.** Algunos tratamientos (ej. enfoque en interferencial, faradismo) pueden estar parcialmente desactualizados respecto a la práctica actual de fisioterapia deportiva.
  - **No cubre:** programación de fuerza general, hipertrofia, calistenia, movilidad general no relacionada con ballet.

- **Recomendaciones específicas:**
  1. **Crear `rules/technical-faults.ts`** con el catálogo completo de la Sección 5: cada fallo como objeto con `id`, `affectedZones`, `consequences[]`, `correctionExercises[]`, `severity`. El grafo de causalidad (overturning → rolling → medial knee strain → meniscal tear) es el dato más valioso del libro.
  2. **Crear `rules/injury-safety-constraints.ts`** con las contraindicaciones absolutas: no estirar en frío, no estirar músculo débil, no analgesia para rendir, no esteroides orales, no inyección intratendinosa, no AINEs en fase aguda. Estas son hard constraints que el motor de reglas debe verificar siempre.
  3. **Crear `skillPaths/ankle-rehab.ts` y `skillPaths/foot-strengthening.ts`** con las progresiones de balancing board e intrinsics. El libro da criterios de avance claros (non-weight-bearing → partial → full).
  4. **Crear `rules/weight-placement.ts`** con la definición de la línea de gravedad correcta y las 16 causas de weight-back. Este es el fallo técnico más frecuente y con más consecuencias (16 lesiones listadas en Sección 5.20).
  5. **Añadir al modelo de datos:** `TissueRegenerationType` (para ajustar expectativas de recuperación), `ProprioceptionDeficit` (para prescribir balancing board), `TechnicalFaultGraph` (para modelar la cascada de lesiones).

---

## Apéndice: Índice de lesiones cubiertas (Sección 3)

| # | Lesión | Zona | Página |
|---|---|---|---|
| 3.1 | Esguince ligamento lateral tobillo | ankle | 104 |
| 3.2 | Rotura ligamento lateral tobillo | ankle | 108 |
| 3.3 | Esguince ligamento medial tobillo | ankle | 109 |
| 3.4 | Esguinces crónicos tobillo | ankle | 109 |
| 3.5 | Esguince capsular anterior tobillo | ankle | 109 |
| 3.6 | Fractura maléolo lateral | ankle | 109 |
| 3.7 | Fractura maléolo medial | ankle | 110 |
| 3.8 | Fractura osteocondral domo astrágalo | ankle | 111 |
| 3.9 | Achilles tendonitis | ankle | 112 |
| 3.10 | Rotura tendón de Aquiles | ankle | 113 |
| 3.11 | Bursitis tendón de Aquiles | ankle | 113 |
| 3.12 | Os trigonum / tubérculo posterior | ankle | 114 |
| 3.13 | Tibialis posterior tendonitis | foot | 115 |
| 3.14 | Flexor hallucis longus tendonitis | foot | 115 |
| 3.15 | Extensor hallucis longus tendonitis | foot | 116 |
| 3.16 | Stress fractures metatarsales | foot | 116 |
| 3.17 | Osteocondritis cabeza metatarsal | foot | 118 |
| 3.18 | Strain fascia plantar | foot | 119 |
| 3.19 | Strain capsular 1ª MTF | foot | 119 |
| 3.20 | Sesamoiditis | foot | 120 |
| 3.21 | Hallux valgus / bunions | foot | 121 |
| 3.22 | Hallux rigidus | foot | 123 |
| 3.23 | Uña encarnada | foot | 124 |
| 3.24 | Callosidades | foot | 125 |
| 3.25 | Espurs / calcificaciones | various | 125 |
| 3.26 | Stress fracture fíbula | lower-leg | 125 |
| 3.27 | Stress fracture tibia | lower-leg | 126 |
| 3.28 | Síndrome compartimental anterior | lower-leg | 128 |
| 3.29 | Desgarro pantorrilla | lower-leg | 129 |
| 3.30 | Anterior knee pain | knee | 129 |
| 3.31 | Strain capsular rodilla | knee | 132 |
| 3.32 | Lesión ligamento medial rodilla | knee | 132 |
| 3.33 | Lesión ligamento lateral rodilla | knee | 133 |
| 3.34 | Lesión ligamentos cruzados | knee | 133 |
| 3.35 | Lesión menisco medial | knee | 133 |
| 3.36 | Lesión menisco lateral | knee | 134 |
| 3.37 | Rotura tendón quad/rotuliano / fractura rótula | knee | 135 |
| 3.38 | Strain cuádriceps | thigh | 136 |
| 3.39 | Strain aductores | thigh | 136 |
| 3.40 | Groin strain | hip | 137 |
| 3.41 | Strain isquiotibiales | thigh | 138 |
| 3.42 | Clicking hip | hip | 139 |
| 3.43 | Bursitis glútea | hip | 139 |
| 3.44 | Dolor glúteo | hip | 139 |
| 3.45 | Strain sacroilíaco | pelvis | 139 |
| 3.46 | Dolor área sacroilíaca | pelvis | 140 |
| 3.47 | Strain músculos cresta ilíaca | pelvis | 140 |
| 3.48 | Daño ligamento interespinoso | spine | 140 |
| 3.49 | Strain facet joint | spine | 141 |
| 3.50 | Prolapso discal lumbar | spine | 141 |
| 3.51 | Stress fracture vértebras lumbares | spine | 141 |
| 3.52 | Dorsal/upper spinal pain | spine | 143 |
| 3.53 | Tortícolis aguda | neck | 144 |
| 3.54 | Problemas hombro/brazo | shoulder | 144 |

## Apéndice: Índice de fallos técnicos (Sección 5)

| # | Fallo/Variación | Consecuencias principales | Página |
|---|---|---|---|
| 5.1 | Discrepancia nivel hombros | Alteración línea de peso, debilidad asimétrica | 179 |
| 5.2 | Tensión cuello/hombros | Espasmo trapecio/pectoral, dolor torácico | 180 |
| 5.3 | Discrepancia longitud clavículas | Asimetría de peso, tightness unilateral | 181 |
| 5.4 | Escoliosis | Rigidez segmentaria, tensión, dificultad técnica | 182 |
| 5.5 | Cifosis | Lordosis compensatoria, sobrecarga lumbar | 183 |
| 5.6 | Lordosis (14 causas) | Weight-back, lesión lumbar | 184 |
| 5.7 | Over-turning | Cascada: rolling→knee→stress fx→lordosis | 187 |
| 5.8 | Restricción turn-out cadera | Compensación en rodilla/tobillo | 190 |
| 5.9 | Tightness anterior cadera | Lordosis, restricción turn-out | 192 |
| 5.10 | Debilidad aductores | Pérdida turn-out, inestabilidad pélvica | 193 |
| 5.11 | Insuficiencia cuádriceps | Anterior knee pain, riesgo meniscal | 193 |
| 5.12 | Tightness isquiotibiales | Weight-back, riesgo de desgarro | 194 |
| 5.13 | Swayback knees | Weight-back (causa más potente junto con weak feet) | 195 |
| 5.14 | Tightness Aquiles | Limitación plié, tendonitis | 196 |
| 5.15 | Tibial bow | Rolling, sickling, stress fractures | 197 |
| 5.16 | Posterior block ankle | Limitación pointe, impingement | 198 |
| 5.17 | Rolling | Strain medial knee, tendonitis, toe damage | 200 |
| 5.18 | Debilidad intrinsics | Weight-back, clawing, pointe inestable | 201 |
| 5.19 | Variación longitud dedos/metatarsales | Inestabilidad demi-pointe, stress fx | 202 |
| 5.20 | Weight placement incorrecto (16 causas, 16 consecuencias) | El fallo más importante del libro | 205 |

---

*Documento generado para Plan Maestro OS. Toda la información está parafraseada del libro "Dance Technique & Injury Prevention" (3ª ed., Justin Howse, 2000). Las referencias de página corresponden a la edición impresa. El sistema debe usar este contenido como referencia educativa y de reglas de entrenamiento, nunca como herramienta de diagnóstico médico.*

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# Informe de Gaps Visuales + Implementación de las 5 Recomendaciones

---

## PARTE A: Información que NO puedo extraer completamente por ausencia de ayudas visuales

Antes de producir las 5 especificaciones, necesito señalar exactamente qué información del libro queda incompleta o ambigua porque depende de fotografías, diagramas o imágenes que el OCR no captura correctamente:

### ⚠️ Gap 1 — Figura 2.6: Tarjeta de Evaluación Ortopédica (p. 97)

El texto OCR de esta tarjeta está muy degradado. Puedo reconstruir parcialmente los campos, pero **no tengo la estructura exacta ni todos los campos de medición**. Los campos que puedo identificar del texto:

- Name, Company/School, Age, Height, Weight
- Head, Neck (length, range: flexion/extension/lateral flexion/rotation)
- Shoulders (level, line, winging scapulae, elevation R/L)
- Arms (swayback elbows, wrist dorsi-flexion)
- Back (scoliosis, kyphosis, range: flexion/extension/lateral flexion/rotation)
- Pelvis (level, asymmetry)
- Knees (swayback R/L, patellae R/L)
- Legs (length R/L, tibial bows R/L)
- Feet (pointe, metatarsals, big toe posture, lesser toes)
- Intrinsics
- Sub-taloid joint, Mid-tarsal joint, Navicular
- Achilles tendons
- Hamstrings
- Turn-out (frog position, hip rotation flexed R/L, hip rotation extended R/L)

**Lo que falta:** el layout exacto, posibles campos de notas, escalas de medición específicas, y si hay campos adicionales que el OCR no capturó.

> **Acción recomendada:** Si tienes acceso al libro físico o a una imagen de la página 97, envíame la imagen de la tarjeta para completar la estructura.

### ⚠️ Gap 2 — Sección 4: Fotografías de ejercicios (Figs 4.1–4.160)

Los captions de texto describen cada ejercicio con buen detalle, pero **las posiciones exactas del cuerpo, ángulos articulares, colocación de manos/pies, y la diferencia visual entre ejecución correcta e incorrecta están en las 160 fotografías**. Específicamente:

- **Figs 4.1–4.3:** Posición exacta de sit-ups (ángulo de rodillas, posición de manos)
- **Figs 4.101–4.116:** Secuencia de estabilización (dead bug, leg lowering). Los captions dan buena información, pero los ángulos exactos (90° de cadera, 45° de apertura de rodillas) solo se confirman visualmente.
- **Figs 4.120–4.124:** Ejercicios de columna torácica con bandas
- **Figs 4.125–4.128:** Uso de banda elástica para escapular
- **Figs 4.134–4.136:** Ejercicio de glúteos profundos en side-lying
- **Figs 4.146–4.152:** Ejercicios propioceptivos con wobble board y banda
- **Figs 4.155–4.160:** Ejercicios de intrinsics con banda para primer dedo y dedos externos

> **Acción recomendada:** Si puedes enviar imágenes de estas figuras, puedo completar las specs con posiciones exactas. Sin ellas, las specs se basan solo en los captions de texto, que son bastante detallados pero no incluyen ángulos exactos ni posiciones de manos.

### ⚠️ Gap 3 — Figura 3.7: Test de tightness de pantorrilla (p. 108)

El texto describe el test pero la **posición exacta de la mano del examinador** para aplicar dorsiflexión pasiva está en la imagen. El texto dice: "passively dorsi-flexing the foot with the patella in line with the centre of the foot and pressure equally placed beneath the metatarsals with the flat of the hand, taking care not to extend the toes dorsally above neutral."

### ⚠️ Gap 4 — Figura 3.16: Strapping del primer dedo (p. 116)

Se describe como "Six successive steps in strapping a great toe to help keep the interphalangeal joint straight." Los 6 pasos están en imágenes. **No puedo reproducir la técnica de strapping sin las imágenes.**

### ⚠️ Gap 5 — Figura 5.21: Medición de turn-out (p. 191)

El texto describe la posición (prono con pierna al borde de camilla), pero la **posición exacta del examinador y cómo se mide el ángulo** está en la foto.

### ⚠️ Gap 6 — Figuras comparativas correcta/incorrecta

En toda la Sección 5, hay pares de fotos mostrando la técnica correcta vs. la incorrecta (ej. Figs 5.16A/B, 5.23A/B, 5.28A/B). Los captions describen la diferencia, pero **la magnitud visual del error y los ángulos específicos no están disponibles**.

### ⚠️ Gap 7 — Figuras de X-rays

Las figuras 3.1–3.3, 3.9–3.11, 3.17–3.19, 3.21, 3.27–3.31, 3.37–3.38, 5.4, 5.6B, 5.27, 5.29–5.34 muestran radiografías. Para nuestros propósitos (reglas de entrenamiento, no diagnóstico), **los textos descriptivos son suficientes**, pero si el sistema necesitara referencia visual para educación del usuario, necesitaríamos las imágenes.

---

## PARTE B: Implementación de las 5 Recomendaciones

A continuación, las 5 especificaciones completas basadas en toda la información extraída del libro.

---

# Especificación 1: `rules/technical-faults.ts`

## Catálogo completo de fallos técnicos (Sección 5 del libro)

> **Propósito:** Modelar cada fallo técnico como entidad con sus causas, consecuencias en cadena, zonas afectadas, ejercicios correctivos y nivel de severidad. El grafo de causalidad entre fallos es el dato más valioso del libro.

---

### Estructura de datos sugerida

```
TechnicalFault {
  id: string
  name: string
  section: string              // Referencia al libro (ej. "5.7")
  page: number
  affectedZones: BodyZoneId[]
  causes: string[]             // Causas que producen este fallo
  consequences: InjuryRisk[]   // Lesiones/riesgos que este fallo produce
  correctionExercises: string[] // Ejercicios correctivos (ref a Section 4)
  relatedFaults: string[]      // Otros fallos técnicos relacionados
  severity: 'critical' | 'high' | 'medium' | 'low'
  isAnatomical: boolean        // Si es variación anatómica vs. fallo técnico
  isCorrectable: boolean       // Si se puede corregir con entrenamiento
}

InjuryRisk {
  injuryId: string
  name: string
  section: string
  probability: 'high' | 'medium' | 'low'
  mechanism: string            // Cómo el fallo produce la lesión
}
```

---

### Fault 1: `shoulder-level-discrepancy` (Sección 5.1, p. 179)

- **Nombre:** Discrepancia en nivel de hombros
- **Tipo:** Postural / anatómico
- **Corregible:** Parcialmente (si es postural); no (si es estructural)
- **Causas:**
  - Debilidad unilateral → sobrecompensación (hombro débil elevado o descendido)
  - Distribución desigual de peso en parte inferior del cuerpo
  - Escoliosis (especialmente dorsal media/alta)
  - Desigualdad de longitud de piernas
  - Turn-out desigual → oscilación de pelvis
  - Sentarse en una cadera
  - Hábito postural (cargar bolsas pesadas de un lado)
  - Post-lesión: hábito de descargar peso del lado doloroso
- **Zonas afectadas:** `shoulder`, `lumbar`, `hip`, `trunk`
- **Consecuencias:**
  - Alteración de la línea de carga → debilidad e imbalance en tronco bajo, glúteos, isquios, aductores, quads, pierna baja
- **Corrección:**
  - Programa de ejercicios para equilibrar ambos lados
  - Corrección postural constante
  - Si hay causa estructural → derivar a ortopedista
  - Ejercicios: fortalecer y equilibrar tronco bajo, glúteos, isquios, aductores, quads, pierna baja
- **Fallos relacionados:** `scoliosis`, `leg-length-inequality`, `weight-back`
- **Severidad:** medium

---

### Fault 2: `neck-shoulder-tension` (Sección 5.2, p. 180)

- **Nombre:** Tensión alrededor del cuello y hombros
- **Subtipos:**
  - (a) Tensión en fibras superiores del trapecio
  - (b) Tensión en pectorales
- **Causas:**
  - Brazos demasiado atrás (codos detrás de la línea de hombros)
  - Llevar con el codo en vez de la mano
  - Over-turning → tronco superior oscila atrás → brazos compensan más atrás
  - Escápulas fijadas incorrectamente (rotadas alrededor del tórax en vez de estabilizadas)
  - Debilidad e inestabilidad del tronco bajo → tensión compensatoria en cintura escapular
  - Swayback knees empujados atrás → pelvis anterior tilt → lordosis → tronco superior atrás → alteración de fijación escapular
  - Escoliosis → tensión variable durante trabajo
  - Cifosis → tensión compensatoria
- **Zonas afectadas:** `neck`, `shoulder`, `thoracic`, `scapula`
- **Consecuencias:**
  - Espasmo del trapecio
  - Espasmo de pectorales → dolor torácico
  - Dolor referido desde orígenes del trapecio (apófisis espinosas y ligamentos interespinosos)
  - Dificultad con posiciones de cabeza
- **Corrección:**
  - Corregir fallo subyacente
  - Tratamiento inicial de espasmo/dolor: interferencial, ultrasonido, masaje
  - Ejercicios de respiración (especialmente con escoliosis)
  - Corrección desde pies hacia arriba (base correcta primero)
- **Fallos relacionados:** `overturning`, `swayback-knees`, `scoliosis`, `kyphosis`, `weight-back`
- **Severidad:** medium

---

### Fault 3: `clavicle-length-discrepancy` (Sección 5.3, p. 181)

- **Nombre:** Discrepancia en longitud de clavículas
- **Tipo:** Anatómico (generalmente aberración durante crecimiento)
- **Corregible:** No estructuralmente; sí compensable
- **Consecuencias:**
  - Peso desplazado hacia el lado más ancho
  - Desarrollo muscular desigual en tronco y cuello
  - Tightness unilateral (especialmente pectorales)
  - Restricción leve de elevación del brazo del lado estrecho
- **Corrección:**
  - Equilibrar fuerza muscular bilateral
  - Estirar áreas tight simétricamente
- **Severidad:** low

---

### Fault 4: `scoliosis` (Sección 5.4, p. 182)

- **Nombre:** Escoliosis
- **Tipo:** Estructural (curvatura lateral + componente rotacional)
- **Corregible:** Parcialmente (ejercicios pueden reducir componente postural); no estructuralmente sin intervención ortopédica
- **Causas:**
  - Idiopática (la mayoría)
  - Paralítica (raro actualmente)
  - Condiciones neurológicas (raro)
- **Zonas afectadas:** `spine`, `thoracic`, `lumbar`, `ribcage`, `hip`, `hamstrings`
- **Consecuencias:**
  - Rigidez segmentaria → dificultad técnica
  - Peso desplazado hacia el lado aparentemente más corto
  - Groin strains, adductor strains, low back strains frecuentes
  - Hamstrings desiguales (un lado más tight) → riesgo de lesión de isquios
  - Swayback knee en el lado más laxo
  - Dificultad con posiciones de brazos → tensión en cintura escapular
  - Caja torácica asimétrica (lado cóncavo comprimido)
  - Dificultad para centralizar línea de carga
- **Corrección:**
  - Derivar a ortopedista
  - Ejercicios de fortalecimiento (side shift exercises)
  - Estimulador muscular eléctrico nocturno (prescrito por ortopedista)
  - Rehabilitación: empezar por pies y piernas → pelvis → tronco
  - **NO:** manipulaciones osteopáticas/quiroprácticas forzadas
- **Nota del libro:** Escoliosis leve NO es contraindicación para clases de ballet. Puede ser beneficiosa. Pero carrera profesional es difícil si es cosméticamente visible.
- **Severidad:** high (si no se maneja)

---

### Fault 5: `kyphosis` (Sección 5.5, p. 183)

- **Nombre:** Cifosis (curvatura anterior de columna dorsal)
- **Tipo:** Estructural (frecuentemente por Scheuermann) o postural
- **Corregible:** No si es estructural; parcialmente si es postural
- **Causas:**
  - Enfermedad de Scheuermann (osteocondritis de placas de crecimiento → vértebras cuneiformes)
  - Sin causa aparente (idiopática)
  - Postural (exagerable pero no causante)
- **Zonas afectadas:** `thoracic`, `lumbar`, `neck`
- **Consecuencias:**
  - Lordosis compensatoria lumbar (inevitable) → todos los problemas de lordosis
  - Cabeza/cuello en hiperextensión para mirar adelante
  - Pérdida de absorción de shock espinal → lesiones lumbares más frecuentes
  - Estéticamente desfavorable
  - Si es marcada: contraindicación relativa para carrera de interpretación
- **Corrección:**
  - Ejercicios de fortalecimiento de tronco (reducir componente postural)
  - Corrección de posición de peso (parcial, limitada por cifosis fija)
  - Rehabilitación: pies → piernas → pelvis → tronco
- **Fallos relacionados:** `lordosis`, `weight-back`
- **Severidad:** high

---

### Fault 6: `lordosis` (Sección 5.6, p. 184)

- **Nombre:** Lordosis (hiperextensión/ahuecamiento lumbar)
- **Tipo:** Postural (corregible) excepto si se fija por madurez
- **Corregible:** Sí, salvo en casos fijados
- **14 Causas (listadas explícitamente en el libro):**
  1. Cifosis dorsal
  2. Tilt pélvico anterior por tightness en frente de caderas (Sección 5.9)
  3. Debilidad de abdominales
  4. Debilidad de glúteos (3 y 4 generalmente van juntos)
  5. Over-turning de pies respecto a caderas → tilt pélvico anterior
  6. Debilidad de aductores → fallo en mantener turn-out → mismo efecto que 5
  7. Swayback knees → tilt pélvico compensatorio
  8. Tibial bow → carga lateral → dificultad con cara interna del muslo
  9. Debilidad de antepié → peso atrás
  10. Cualquier otro fallo técnico que cause peso atrás
  11. Brazos demasiado atrás → tronco superior atrás → lordosis compensatoria + mentón adelantado
  12. Zapatos tight → curling de dedos → peso atrás
  13. Lordosis natural (desde que camina) → puede fijarse parcialmente con madurez
  14. Hamstrings tight pueden contribuir
- **Zonas afectadas:** `lumbar`, `pelvis`, `trunk`, `hip`, `abdominals`
- **Consecuencias:**
  - Las mismas que weight-back (Sección 5.20): 16 consecuencias
  - Debilidad de abdominales
  - Tilt pélvico anterior
  - Stress fractures lumbares
  - Lesiones de disco
- **Corrección:**
  - Eliminar la causa (debilidad muscular, fallo técnico, línea de carga incorrecta)
  - Fortalecimiento de tronco
  - Equilibrar grupos musculares de miembros inferiores
  - Rehabilitación: pies → piernas → pelvis → tronco
  - **Objetivo:** curva lumbar normal, NO aplanada
- **Severidad:** critical

---

### Fault 7: `overturning` (Sección 5.7, p. 187)

- **Nombre:** Over-turning (pies girados más allá de la rotación externa disponible en cadera)
- **Tipo:** Técnico (el más importante y frecuente según el libro)
- **Corregible:** Sí, con corrección técnica extensa
- **Mecanismo:** Solo posible por fricción pie-suelo. No ocurre en el aire. Rosin aumenta la fricción y facilita el over-turning.
- **Causas:**
  - Limitación anatómica de turn-out en caderas + demanda excesiva del profesor
  - Falta de control muscular del turn-out (aparente restricción)
  - Enseñanza que exige 180° en pies sin capacidad de cadera
- **Zonas afectadas:** `foot`, `ankle`, `knee`, `hip`, `lumbar`, `adductors`, `hamstrings`, `quadriceps`, `calf`, `intrinsics`
- **Consecuencias (12 listadas):**
  1. **Rolling** → strain en primer dedo (valgo), daño capsular/ligamentoso medial, agrava hallux valgus
  2. **Lesiones de 1ª MTF** → valgo strain o rotación del dedo gordo
  3. **Clawing de dedos + debilidad de intrinsics** → peso atrás + fallo muscular
  4. **Stress fractures de tibia y fíbula** → falta de absorción de shock + twist rotacional
  5. **Síndrome compartimental anterior**
  6. **Tibialis posterior tenosinovitis** → intento de corregir rolling en pie/tobillo en vez de cadera
  7. **Lesiones mediales de rodilla** → tears meniscales, sprains ligamento medial (por twist en rodilla)
  8. **Condropatía patelar + tendinitis rotuliana** → tracking lateral de rótula por rotación tibial
  9. **Debilidad de isquios laterales** → rotación desigual → riesgo de lesión meniscal lateral + lesión de isquios
  10. **Debilidad de aductores** → inestabilidad pélvica → lesión de aductores en grands battements
  11. **Lordosis** → pelvis rota adelante para intentar más turn-out
  12. **Groin strains** → over-turning + debilidad muscular asociada
- **Debilidad muscular secuencial (de arriba abajo):**
  - Abdominales → extensores de espalda → latissimus dorsi → glúteos → isquios (especialmente laterales) → aductores y vastus medialis → parte lateral de pantorrilla → intrinsics laterales del pie
- **Corrección:**
  - **Regla fundamental:** Los pies NUNCA deben girarse más allá del turn-out disponible en las caderas
  - Programa extenso de fortalecimiento de todos los grupos debilitados
  - Corrección técnica extensa
  - El profesor que exige 180° en pies sin capacidad de cadera es "culpable" según el libro
- **Nota sobre método ruso:** El libro advierte que las escuelas occidentales que intentan replicar el método ruso de turn-out plano sin la misma selección corporal y preparación están causando lesiones.
- **Severidad:** critical

---

### Fault 8: `restricted-hip-turnout` (Sección 5.8, p. 190)

- **Nombre:** Restricción de turn-out en caderas
- **Tipo:** Anatómico (límite óseo) + muscular (control insuficiente)
- **Corregible:** Parcialmente. El límite óseo es absoluto. La restricción muscular/ligamentosa puede mejorar antes de la pubertad.
- **Umbral crítico:** ~45° de rotación externa para danza clásica. Menos → problemas crecientes.
- **Limitantes (en orden desde dentro hacia fuera):**
  1. Configuración ósea (profundidad del acetábulo + ángulo cabeza/cuello femoral) → **ABSOLUTO, no modificable**
  2. Cápsula y ligamentos (ilio-femoral, isquio-femoral, pubo-femoral) → difícil de estirar post-pubertad
  3. Músculos (generalmente aductores) → pueden estirarse suavemente si están involucrados (raro excepto post-lesión)
- **Error de medición crítico:** La posición de frog (flexión de cadera) SOBREESTIMA el turn-out real. La medición correcta es con cadera EXTENDIDA (posición de trabajo).
- **Método correcto de medición:** Prono, pierna evaluada al borde de la camilla, cadera completamente extendida, otra pierna flexionada fuera. (Fig 5.21)
- **Corrección:**
  - Fortalecer aductores (principal rotador externo funcional)
  - Fortalecer tronco, glúteos, pies
  - Corregir postura y posición de peso
  - Estiramiento suave y progresivo SOLO cuando el fortalecimiento está en marcha
  - NUNCA estirar músculo débil
  - Estirar en dirección longitudinal a las fibras (NO necesariamente en dirección del turn-out)
  - **Prohibido:** Frog con alguien pisando las rodillas
- **Fallos relacionados:** `overturning`
- **Severidad:** high

---

### Fault 9: `tight-hip-flexors` (Sección 5.9, p. 192)

- **Nombre:** Tightness en frente de caderas
- **Tipo:** Muscular/capsular
- **Corregible:** Sí
- **Estructuras que pueden estar tight:**
  - Rectus femoris (superficial)
  - Tensor fasciae latae (superficial)
  - Ilio-psoas (profundo, también rotador interno)
  - Pectineus y adductor brevis
  - Cápsula anterior de cadera
- **Causas:**
  - Lordosis → tilt pélvico anterior → acortamiento progresivo
  - Cualquier fallo que cause rotación anterior de pelvis
  - Hamstrings tight → rodillas ligeramente flexionadas → cadera no se extiende completamente
- **Efectos:**
  1. Lordosis postural + todos sus problemas
  2. Restricción de turn-out (real si ilio-psoas/estructuras limitan rotación externa; aparente si impide acción efectiva de rotadores externos)
- **Corrección:**
  - Primero: ejercitar grupos debilitados (tronco, isquios, aductores, glúteos)
  - Luego: estiramiento suave de áreas tight (tensor fascia lata, hamstrings, quads, aductores)
  - NUNCA estiramiento forzado
- **Severidad:** high

---

### Fault 10: `weak-adductors` (Sección 5.10, p. 193)

- **Nombre:** Debilidad de aductores
- **Tipo:** Muscular
- **Corregible:** Sí
- **Función clave:** Los aductores son el principal rotador externo funcional en posición de pie. Producen Y mantienen el turn-out.
- **Causas:**
  1. Sentarse en la cadera (sitting in the hip)
  2. Rolling
  3. Peso demasiado atrás
  4. Over-turning
  5. Swayback knees
  6. Antepié débil → posición de peso incorrecta
  7. Lordosis
- **Zonas afectadas:** `hip`, `adductors`, `pelvis`, `knee`
- **Consecuencias:**
  - Pérdida de turn-out → over-turning compensatorio
  - Inestabilidad pélvica en una pierna
  - Pelvis oscila al llevar pierna de trabajo → rotación de rodilla de apoyo → over-turning de pie de apoyo
  - Mayor riesgo de lesiones meniscales mediales
  - Lesiones de aductores en grands battements
- **Corrección:**
  - Ejercicios de fortalecimiento de aductores (Sección 4, Figs 4.50–4.62)
  - Estiramiento suave si están tight
  - Corrección técnica obligatoria
- **Severidad:** critical

---

### Fault 11: `quadriceps-insufficiency` (Sección 5.11, p. 193)

- **Nombre:** Insuficiencia del cuádriceps
- **Subtipos:**
  - Debilidad total (todos los grupos)
  - Debilidad relativa vs. otros grupos
  - Debilidad diferencial entre piernas
  - Debilidad intra-complejo (especialmente vastus medialis vs. los otros 3)
- **Causas:**
  1. Swayback knees → fallo en "pull up" → peso atrás → relajación en cápsula posterior → músculos no trabajan
  2. Hamstrings tight → rodillas ligeramente flexionadas → quads trabajan inadecuadamente
  3. Post-lesión de rodilla: atrofia en 2–3 días. VMO es el primero en atrofiarse y el más difícil de recuperar.
- **Datos clave del VMO:**
  - Solo se activa efectivamente en los últimos 15° de extensión
  - Opone el tracking lateral de la rótula
  - Tras cualquier lesión de rodilla: primero en debilitarse, último en recuperarse
- **Consecuencias:**
  1. Anterior knee pain (tracking lateral de rótula)
  2. Mayor riesgo de lesiones de rodilla (meniscal, rotura de tendón quad/rotuliano)
  3. VMO débil → no bloqueo completo de extensión → tighten de isquios laterales
  4. Sobre-desarrollo de pantorrilla (compensación) → Achilles tendonitis, síndrome compartimental anterior, strains de antepié
- **Corrección:**
  - Fortalecimiento con equilibrio medial/lateral
  - Trabajo específico de VMO (últimos 15° de extensión)
  - Equilibrar entre las dos piernas
  - Corrección de fallo técnico subyacente
  - Faradic para VMO si hay inhibición
  - Pesos pequeños (1–2 kg máx)
- **Severidad:** critical

---

### Fault 12: `tight-hamstrings` (Sección 5.12, p. 194)

- **Nombre:** Tightness de isquiotibiales
- **Tipo:** Muscular
- **Corregible:** Sí
- **Causas:**
  1. Naturalmente tight (muchas personas no pueden elevar pierna recta a 90°)
  2. Tightness durante growth spurt (huesos crecen más rápido que tejidos blandos) → se resuelve al terminar el crecimiento
  3. Peso atrás → rotación anterior de pelvis → rodillas ligeramente flexionadas → isquios se debilitan y se acortan (especialmente laterales)
  4. Over-turning → pelvis inclinada adelante → isquios no se utilizan completamente → imbalance medial/lateral
- **Consecuencias:**
  1. Agrava weight-back (círculo vicioso)
  2. Predisposición a lesiones de isquios (pulls, tears)
  3. Tightness desigual (medial vs lateral) → pulls rotacionales en rodilla parcialmente flexionada → daño meniscal
  4. Sobrecarga de pantorrilla → lesiones musculares y problemas de Aquiles
  5. Isquios no usados correctamente → tensor fasciae latae intenta estabilizar pelvis → overwork lateral → tracking lateral de rótula → anterior knee pain
- **Corrección:**
  - Corregir causas subyacentes (peso, técnica)
  - Fortalecer todos los grupos débiles
  - Estirar suavemente áreas tight
  - **Orden crítico:** NO se puede corregir tracking lateral solo con ejercicios de VMO sin primero tratar tightness de isquios y estirar tensor fasciae latae
- **Severidad:** high

---

### Fault 13: `swayback-knees` (Sección 5.13, p. 195)

- **Nombre:** Swayback knees (hiperextensión de rodillas)
- **Tipo:** Anatómico (variación normal en personas con laxitud ligamentosa), agravable por mala técnica
- **Corregible:** No la hiperextensión estructural; sí el control muscular
- **Hiperextensión:** Puede ser de 20° o más
- **Nota del libro:** El ballet probablemente NO causa swayback. Los bailarines con swayback son seleccionados preferentemente porque dan una línea estética agradable. Pero malos profesores pueden agravarlo permitiendo empujar la rodilla atrás en vez de enseñar "pull up".
- **Consecuencias:**
  - **CAUSA MÁS POTENTE de weight-back** (junto con antepié débil)
  - Lordosis postural
  - Línea de brazos demasiado atrás
  - Tendencia a ser respiradores torácicos superiores → tensión en tronco superior
- **Corrección:**
  - Fortalecer: aductores, VMO, isquios, glúteos, pantorrilla profunda, intrinsics del pie
  - Fortalecer tronco: abdominales (fibras transversales y longitudinales), extensores de tronco, latissimus dorsi
  - Corregir lordosis
  - Ejercicios de respiración con expansión lateral
  - **⚠️ Error frecuente:** Tratar solo la región de rodilla, ignorando pies y tronco. El weight-back persiste y el bailarín asume que el tratamiento fue incorrecto cuando en realidad fue insuficiente.
- **Fallos relacionados:** `weight-back`, `lordosis`, `weak-intrinsics`
- **Severidad:** critical

---

### Fault 14: `tight-achilles` (Sección 5.14, p. 196)

- **Nombre:** Tightness de Aquiles/pantorrilla
- **Nota importante:** Cuando los bailarines dicen "tight Achilles tendon", se refieren al complejo gastrocnemius-soleus-Aquiles, no solo al tendón.
- **Diagnóstico diferencial:** Si al flexionar la rodilla (relajando gastrocnemius) la dorsiflexión del tobillo es libre → el tightness es solo del gastrocnemius, no del soleus.
- **Causas:**
  1. Tightness general (permanente, ayuda limitada)
  2. **Tightness aparente (más frecuente):** por técnica defectuosa + debilidad
     - Peso atrás → pantorrilla no trabaja correctamente ni se estira completamente
     - Zapatos cortos → dedos curled → peso atrás
     - Anterior knee pain → quads como freno → pantorrilla infrautilizada → se acorta
  3. Post-lesión: contractura asimétrica → pie tirado a mala posición en plié/fondu
- **Consecuencias:**
  - Achilles tendonitis
  - Achilles bursitis
  - Síndrome compartimental anterior
  - Stress fractures de tibia
  - Limitación de plié
- **Corrección:**
  - Primero fortalecer, luego estirar suavemente
  - Corrección técnica (la más importante de casi cualquier problema)
  - Estiramiento de pantorrilla con pendiente (slope)
  - Interferencial a toda la longitud de la pantorrilla (tobillo hasta origen del gastrocnemius encima de la rodilla)
  - **El tendón de Aquiles NO puede estirarse** (solo el músculo)
- **Severidad:** high

---

### Fault 15: `tibial-bow` (Sección 5.15, p. 197)

- **Nombre:** Tibial bow (curvatura tibial exagerada)
- **Tipo:** Anatómico (variación de crecimiento normal)
- **Corregible:** No estructuralmente; sí compensable
- **Puede afectar:** toda la tibia o (más frecuentemente) el tercio inferior
- **Consecuencias:**
  - Articulación del tobillo ligeramente angulada respecto a la línea central de la pierna
  - Pie rolled al estar plano
  - Mayor dificultad para mantener turn-out sin over-turnar
  - Mayor tendencia a rolling y sickling
  - Stress injuries de tibia y fíbula bajas
  - Problemas de tejidos blandos alrededor de la fíbula baja
  - Pie pointed naturalmente sickled → necesita corrección
  - En demi-pointe: tendencia a sickle hasta corregir
  - En pointe: dificultad para subir correctamente, puede sickle en cualquier dirección
  - Mayor tendencia a stress fractures de 2º metatarsiano
- **Corrección:**
  - Fortalecer aductores, glúteos, isquios (estabilidad en pierna superior)
  - Fortalecer pantorrilla equilibradamente (frecuentemente hay debilidad lateral por overwork medial)
  - Ejercicios de intrinsics
  - Corrección técnica: turn-out primero, luego línea de carga, luego posición del pie
  - **Orden crítico:** NO corregir posición del pie antes de que la pierna superior sea correcta
- **Severidad:** high

---

### Fault 16: `posterior-ankle-block` (Sección 5.16, p. 198)

- **Nombre:** Bloqueo posterior del tobillo
- **Tipo:** Anatómico (os trigonum, tubérculo posterior grande, exostosis del calcáneo, osteofito)
- **Corregible:** No sin cirugía; sí compensable con fortalecimiento
- **Nota clave del libro:** El os trigonum probablemente es una stress fracture del tubérculo posterior grande del astrágalo, no un hueso separado congénito.
- **Mecanismo de síntomas:** La prominencia ósea queda atrapada entre el dorso del calcáneo y el margen articular posterior de la tibia durante la plantarflexión. La cápsula y sinovial se comprimen → dolor → hinchazón → engrosamiento.
- **Síntomas:**
  1. Dolor de Aquiles + malestar posterior del tobillo (aumenta con trabajo, mejora con reposo)
  2. Dolor anterior/anterolateral del tobillo (por esfuerzo de mejorar pointe)
  3. Strains recurrentes de pantorrilla (unión músculo-tendinosa)
  4. Dolor plantar del pie (por esfuerzo de pointe, frecuentemente con curling de dedos)
  5. Raramente: dolor posterior muy localizado
- **Tratamiento:**
  - Conservador primero: fortalecer intrinsics, grupos musculares del tobillo/pie, interferencial
  - Si falla: cirugía (abordaje MEDIAL, no lateral → el lateral daña peroneos)
  - Post-op: ejercicios tempranos de plantarflexión, movilización activa, vigilar contractura posterior (6+ meses)
- **Severidad:** high

---

### Fault 17: `rolling` (Sección 5.17, p. 200)

- **Nombre:** Rolling (colapso medial del pie)
- **Tipo:** Técnico/muscular
- **Corregible:** Sí
- **Causas:**
  1. Intrinsics débiles + músculos de pierna débiles (especialmente durante growth spurt)
  2. Over-turning → rolling inevitable
  3. Enseñanza incorrecta de placement → over-turning → rolling
  4. Fallo en adaptarse a escenario inclinado (raked stage)
- **Consecuencias (8 listadas):**
  1. Turn-out no controlado → peso atrás → músculos de cadera incorrectos → lordosis
  2. Strain en cara medial de rodilla
  3. Función inadecuada de pantorrilla y peroneos → tibialis anterior/posterior más susceptibles → tendonitis (especialmente tibialis posterior)
  4. Daño al ligamento lateral del tobillo (comprimido en pie plano, estirado en rise)
  5. Strain de estructuras del borde medial del pie, arco longitudinal, fascia plantar medial
  6. Peso en primer dedo → sprains capsulares 1ª MTF, sesamoiditis, twist del dedo gordo, valgo strain → agrava hallux valgus
  7. Transferencia de peso incorrecta → stress fractures de metatarsianos (principalmente 2º)
  8. Valgo + flexión IP + hiperextensión MTF del primer dedo → tensión en extensor hallucis longus → tendonitis
- **Corrección:**
  - Identificar y corregir todos los fallos técnicos subyacentes
  - Fortalecimiento de todos los grupos debilitados (desde tronco hacia abajo)
  - **Nota:** Tratamiento relativamente fácil pero muy largo. Es una medida protectora que ahorra mucho tiempo de lesión futuro.
- **Severidad:** critical

---

### Fault 18: `weak-intrinsics` (Sección 5.18, p. 201)

- **Nombre:** Debilidad de músculos intrínsecos del pie
- **Tipo:** Muscular
- **Corregible:** Sí (con faradic foot bath + ejercicios)
- **Función clave:**
  - Mantienen el arco metatarsal transversal
  - Mantienen los dedos rectos cuando el pie está pointed (oponen el clawing de los flexores largos)
  - Distribución correcta del peso
- **Causas de la pérdida de control:**
  - Desde el punto de vista evolutivo, estos músculos están "en camino de salida" porque ya no usamos los pies para agarrar
  - Es fácil perder el control consciente hasta el punto de que no hay continuidad entre cerebro y músculo
  - El faradic machine juega un papel vital para restaurar este control
- **Consecuencias:**
  1. Peso tomado en el talón en vez de distribuido entre antepié y talón → weight-back
  2. En pointe: dedos no pueden mantenerse rectos → clawing → "knuckling" (sobre los nudillos de los dedos)
  3. Peso atrás en pointe → tensión posterior del tobillo → Achilles tendonitis/bursitis, tibialis posterior tendonitis
  4. Un os trigonum pequeño que sería asintomático puede empezar a causar dolor
  5. En saltos/aterrizajes/relevés: transferencia de peso incorrecta → aterrizaje pesado → lesiones de espinilla y rodilla
- **Corrección:**
  - Faradic foot baths
  - Ejercicios de intrinsics (Sección 4, Figs 4.97–4.99, 4.157–4.160)
  - Corrección de técnica y posición de peso
  - Inspeccionar zapatos: no demasiado anchos ni cortos, con soporte adecuado
  - **⚠️ Zapatos con acero en la suela:** agravan la situación porque impiden pasar correctamente por el pie en relevés → debilitan aún más
- **Severidad:** critical

---

### Fault 19: `metatarsal-toe-length-variation` (Sección 5.19, p. 202)

- **Nombre:** Variaciones en longitud de dedos y metatarsianos
- **Tipo:** Anatómico
- **Corregible:** No; compensable
- **Variaciones descritas:**
  - 2º metatarsiano marcadamente más largo que 1º o 3º
  - 1º metatarsiano muy corto
  - Línea oblicua de cabezas metatarsales (acortamiento progresivo hacia el 5º)
  - Dedos largos (2º y/o 3º) incluso con metatarsianos iguales
- **Consecuencias:**
  - Inestabilidad en demi-pointe
  - Foot puede sickle hacia dentro o fuera intentando ganar estabilidad
  - En pointe: problemas locales con dedos (blistering, callosidades)
  - Dificultad para calzar zapatos de pointe
  - Stress fractures del metatarsiano más largo
- **Corrección:**
  - Fortalecer intrinsics y todos los grupos que controlan pie/tobillo
  - Corrección técnica extensa para ajustar posición óptima en demi-pointe y pointe
  - Corregir tendencia a sickle en cualquier dirección
- **Severidad:** high

---

### Fault 20: `weight-back` (Sección 5.20, p. 205)

- **Nombre:** Posición de peso incorrecta (peso demasiado atrás)
- **Tipo:** Técnico (EL FALLO MÁS IMPORTANTE Y FRECUENTE según el libro)
- **Corregible:** Sí, pero requiere identificar y eliminar TODAS las causas
- **Definición de línea de gravedad correcta:** Línea vertical desde apófisis mastoides (detrás de las orejas) → centro del hombro → cadera → rodilla → tobillo → unirse a la planta en el BORDE ANTERIOR DEL TALÓN.
- **Variante opuesta (rara):** Peso demasiado adelante (por los antepiés, talones ligeramente elevados)
- **16 CAUSAS de weight-back:**
  1. Lordosis
  2. Cifosis + columna torácica rígida → lordosis compensatoria → tilt pélvico → peso atrás
  3. Escoliosis → tilt pélvico + rotación pélvica
  4. Tightness en frente de caderas → rotación anterior de pelvis → peso atrás
  5. Músculos de tronco débiles → tensión en espalda alta → tronco superior cae atrás → prominencia de caja torácica anterior + relajación abdominal + respiración torácica superior
  6. Abdominales, glúteos, isquios, aductores débiles (cualquier grupo que estabiliza pelvis) → tilt pélvico
  7. Over-turning → tilt pélvico anterior
  8. Desarrollo muscular inapropiado (por enseñanza defectuosa, pesas excesivas, actividades recreativas inadecuadas)
  9. Falta de control de rodillas hiperextendidas → empujar rodillas atrás → relajación de grupos que controlan pelvis
  10. Tibial bow → rolling en plano, sickling en rise → alteración de línea de carga
  11. Tight pointe → incapacidad de subir correctamente por el pie → peso atrás en saltos y aterrizajes
  12. Rigidez de articulación del primer dedo (hallux rigidus) → peso a lados externos del pie en vez del centro → peso atrás
  13. Línea oblicua de cabezas metatarsales → peso a lado externo → peso atrás
  14. Intrinsics débiles + clawing de dedos → peso atrás en talones
  15. Zapatos tight → clawing de dedos → peso atrás
  16. Growth spurts → disminución generalizada de control muscular
- **16 CONSECUENCIAS de weight-back:**
  1. Low back strains
  2. Stress fractures de pars interarticularis
  3. Groin injuries
  4. Dolor de glúteo
  5. Lesiones de isquios a varios niveles
  6. Lesiones de aductores
  7. Anterior knee pain
  8. Strains de parte posterior de rodilla
  9. Stress fractures de tibia y fíbula
  10. Síndrome compartimental anterior
  11. Lesiones de pantorrilla
  12. Achilles tendonitis
  13. Extensor hallucis longus tendonitis
  14. Stress fractures de metatarsianos
  15. Debilitamiento de intrinsics por falta de uso correcto
  16. Daño en articulaciones del primer dedo
- **Corrección:**
  - Determinar TODAS las causas (frecuentemente múltiples)
  - Corregir y eliminar todas las causas
  - El tratamiento de lesiones secundarias es inútil sin corregir el fallo de peso
- **Severidad:** critical

---

### Grafo de causalidad principal (simplificado)

```
overturning
├── rolling
│   ├── strain 1ª MTF
│   ├── sesamoiditis
│   ├── hallux valgus agravado
│   ├── stress fractures metatarsianos
│   ├── tibialis posterior tenosinovitis
│   ├── extensor hallucis longus tendonitis
│   └── daño ligamento lateral tobillo
├── lesiones mediales de rodilla
│   ├── tear menisco medial
│   └── sprain ligamento medial
├── condropatía patelar / tendinitis rotuliana
├── debilidad isquios laterales → riesgo meniscal lateral
├── debilidad aductores → inestabilidad pélvica
├── lordosis → weight-back → [16 consecuencias]
└── groin strains

weight-back (convergen 16 causas)
└── [16 consecuencias listadas arriba]

swayback-knees ──┐
weak-intrinsics ─┤──→ weight-back
tight-achilles ──┤
lordosis ────────┘
```

---

# Especificación 2: `rules/injury-safety-constraints.ts`

## Contraindicaciones absolutas y hard constraints

> **Propósito:** Reglas binarias que el motor de reglas DEBE verificar siempre. Son restricciones de seguridad no negociables.

---

### Estructura de datos sugerida

```
SafetyConstraint {
  id: string
  name: string
  description: string
  type: 'absolute-contraindication' | 'conditional-contraindication' | 'safety-rule'
  appliesTo: ('exercise' | 'treatment' | 'progression' | 'general')[]
  severity: 'stop' | 'warn' | 'refer'
  source: string  // Referencia al libro
  conditions: string[]  // Cuándo aplica
}
```

---

### Constraint 1: `no-stretching-cold-tissue`

- **Regla:** NUNCA estirar tejido frío
- **Tipo:** absolute-contraindication
- **Aplica a:** exercise, mobility
- **Severidad:** stop
- **Detalle:** El estiramiento solo es efectivo cuando el tejido está caliente. Estirar en frío produce desgarro en vez de elongación. El estiramiento debe hacerse hacia el final de la clase cuando el cuerpo está caliente, nunca al principio ni antes de la clase.
- **Fuente:** Sección 2.5 (p. 82, 88)
- **Implementación:** Si `tissueState === 'cold'` AND `activity === 'stretching'` → BLOCK con mensaje

### Constraint 2: `no-stretching-weak-muscle`

- **Regla:** NUNCA estirar un músculo débil. Fortalecer primero.
- **Tipo:** absolute-contraindication
- **Aplica a:** exercise, mobility
- **Severidad:** stop
- **Detalle:** El estiramiento debe ir siempre acompañado de fortalecimiento. Un músculo débil no puede controlar el rango ganado por el estiramiento. El bailarín que "parece tenso" probablemente necesita fortalecimiento, no estiramiento.
- **Fuente:** Sección 2.5 (p. 88–89), 2.6 (p. 96)
- **Implementación:** Si `muscleStrength < threshold` AND `activity === 'stretching'` → BLOCK. Requiere `strengtheningProgram` activo primero.

### Constraint 3: `no-ballistic-stretching`

- **Regla:** El estiramiento debe ser sostenido y progresivo. NUNCA balístico, con rebotes, ni forzado.
- **Tipo:** absolute-contraindication
- **Aplica a:** exercise, mobility
- **Severidad:** stop
- **Detalle:** Los estiramientos repentinos, forzados, con rebotes (jerking, bouncing) son indeseables y contraproducentes. El estiramiento sostenido y prolongado es mucho más efectivo que el intermitente o de corta duración.
- **Fuente:** Sección 2.5 (p. 82, 88)

### Constraint 4: `no-stretching-across-fibers`

- **Regla:** El estiramiento debe ser en dirección longitudinal a las fibras. Estirar a través de las fibras no logra nada y puede causar desgarro.
- **Tipo:** absolute-contraindication
- **Aplica a:** exercise, mobility
- **Severidad:** stop
- **Fuente:** Sección 2.5 (p. 88)

### Constraint 5: `no-painkillers-to-perform`

- **Regla:** NUNCA usar analgésicos (orales o inyectados) para enmascarar dolor y continuar entrenando/rindiendo.
- **Tipo:** absolute-contraindication
- **Aplica a:** general
- **Severidad:** stop
- **Detalle:** Si el dolor es suficiente para interferir con la ejecución, 9 de cada 10 veces enmascararlo solo oculta una lesión subyacente significativa. Continuar puede convertir una lesión menor en una que arruine la carrera. El dolor es un mecanismo protector.
- **Fuente:** Sección 2.5 (p. 80)

### Constraint 6: `no-oral-steroids`

- **Regla:** Los esteroides orales (cortisona, prednisona) están contraindicados en lesiones de danza.
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Detalle:** Suprimen la inflamación necesaria para la cicatrización. Suprimen la producción natural de esteroides del cuerpo. Alteran el equilibrio hormonal. El uso en bailarines es "imprudente, innecesario y solo puede ser condenado."
- **Fuente:** Sección 2.5 (p. 93)

### Constraint 7: `no-intratendinous-injection`

- **Regla:** NUNCA inyectar esteroides dentro del tendón. Solo peritendinoso.
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Detalle:** La inyección intratendinosa puede causar daño al tendón y rotura subsiguiente. Solo debe inyectarse en los tejidos alrededor del tendón (vaina o peritendinoso).
- **Fuente:** Sección 2.5 (p. 92–93)

### Constraint 8: `no-steroids-acute-injury`

- **Regla:** La hidrocortisona NUNCA debe usarse en lesión aguda.
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Detalle:** Detiene completamente los procesos de cicatrización. Solo se usa en condiciones crónicas con diagnóstico preciso.
- **Fuente:** Sección 2.5 (p. 93)

### Constraint 9: `no-steroids-suspected-fracture`

- **Regla:** La hidrocortisona NUNCA debe usarse si se sospecha fractura (incluida stress fracture).
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Fuente:** Sección 2.5 (p. 93), 3.16 (p. 118)

### Constraint 10: `no-intraarticular-steroids-dancers`

- **Regla:** En bailarines y deportistas, NUNCA inyectar esteroides intra-articulares.
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Detalle:** Las indicaciones para esteroides intra-articulares son para condiciones artríticas, que normalmente no se encuentran en bailarines durante su carrera activa. No debe usarse cuando la articulación se está recuperando de una lesión.
- **Fuente:** Sección 2.5 (p. 93)

### Constraint 11: `max-one-steroid-large-tendon`

- **Regla:** En tendones grandes (Aquiles, rotuliano), MÁXIMO 1 inyección de hidrocortisona, con gran precaución.
- **Tipo:** conditional-contraindication
- **Aplica a:** treatment
- **Severidad:** warn
- **Fuente:** Sección 2.5 (p. 93)

### Constraint 12: `no-nsaids-healing-phase`

- **Regla:** Los AINEs interfieren con la respuesta inflamatoria necesaria para la cicatrización. Su uso indiscriminado está contraindicado.
- **Tipo:** conditional-contraindication
- **Aplica a:** treatment
- **Severidad:** warn
- **Detalle:** Solo se justifican si la inflamación es excesiva y con diagnóstico preciso. El uso sin diagnóstico puede enmascarar un problema subyacente significativo.
- **Fuente:** Sección 2.5 (p. 92)

### Constraint 13: `no-heavy-weights`

- **Regla:** El trabajo con pesas muy pesadas puede producir daño muscular, aumentar desgaste articular, predisponer a osteoartritis, y producir aumento antinatural de volumen muscular. Es menos efectivo que low-resistance/high-repetition.
- **Tipo:** safety-rule
- **Aplica a:** exercise
- **Severidad:** warn
- **Detalle:** El libro recomienda low-resistance/high-repetition (1–5 kg, muchas repeticiones) como superior.
- **Fuente:** Sección 2.5 (p. 90), 2.6 (p. 95)

### Constraint 14: `no-excess-bulk`

- **Regla:** El desarrollo excesivo de volumen muscular es una desventaja para bailarines. Eleva el centro de gravedad, dificulta el equilibrio, y puede interferir con rangos articulares extremos.
- **Tipo:** safety-rule
- **Aplica a:** exercise
- **Severidad:** warn
- **Fuente:** Sección 2.6 (p. 95)

### Constraint 15: `no-prophylactic-manipulation`

- **Regla:** La manipulación profiláctica rutinaria de articulaciones normales no tiene base de evidencia y puede ser dañina a largo plazo (posible osteoartritis prematura).
- **Tipo:** safety-rule
- **Aplica a:** treatment
- **Severidad:** warn
- **Fuente:** Sección 2.5 (p. 87–88)

### Constraint 16: `no-self-administered-deep-heat`

- **Regla:** Las modalidades de calor profundo (ultrasonido, onda corta, microondas) NUNCA deben ser auto-administradas. Solo por fisioterapeuta cualificado.
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Fuente:** Sección 2.5 (p. 83, 85)

### Constraint 17: `no-frog-forced-stretch`

- **Regla:** PROHIBIDO: alguien pisando las rodillas en posición de frog para forzar turn-out.
- **Tipo:** absolute-contraindication
- **Aplica a:** exercise, mobility
- **Severidad:** stop
- **Detalle:** Daña tejidos blandos. El turn-out en frog no tiene relación con el turn-out en posición de trabajo (caderas extendidas).
- **Fuente:** Sección 2.5 (p. 88)

### Constraint 18: `no-piano-pointe-stretch`

- **Regla:** PROHIBIDO: meter los pies bajo un piano o radiador y echarse atrás para "mejorar el pointe."
- **Tipo:** absolute-contraindication
- **Aplica a:** exercise, mobility
- **Severidad:** stop
- **Fuente:** Sección 2.5 (p. 88–89)

### Constraint 19: `no-surgery-without-indication`

- **Regla:** La cirugía solo debe realizarse con indicación específica, diagnóstico preciso, y cuando el tratamiento conservador ha fallado o no está indicado.
- **Tipo:** safety-rule
- **Aplica a:** treatment
- **Severidad:** refer
- **Fuente:** Sección 2.5 (p. 93)

### Constraint 20: `no-spurs-removal-surgery`

- **Regla:** La cirugía para remover espolones o calcificaciones es casi siempre innecesaria. Estas son hallazgos incidentales y parte del proceso de cicatrización.
- **Tipo:** safety-rule
- **Aplica a:** treatment
- **Severidad:** warn
- **Fuente:** Sección 2.5 (p. 93), 3.25 (p. 125)

### Constraint 21: `no-lateral-release-without-muscle-balance`

- **Regla:** El lateral release quirúrgico es inútil sin corregir el desequilibrio muscular medial/lateral. Puede empeorar al paciente.
- **Tipo:** safety-rule
- **Aplica a:** treatment
- **Severidad:** warn
- **Fuente:** Sección 3.30 (p. 130)

### Constraint 22: `no-retropatellar-shaving`

- **Regla:** El shaving de la superficie retropatelar es "desastroso" y empeora las cosas.
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Fuente:** Sección 3.30 (p. 132)

### Constraint 23: `no-kissing-spine-surgery`

- **Regla:** La cirugía para "kissing spine" (excisión de apófisis espinosa + ligamento interespinoso) está contraindicada. El problema es técnico (fallo en pull up). La cirugía causa inestabilidad progresiva.
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Fuente:** Sección 3.48 (p. 140–141)

### Constraint 24: `no-sacroiliac-displacement-diagnosis`

- **Regla:** El diagnóstico de "desplazamiento sacroilíaco" es "absolutamente sin sentido" en bailarines. La articulación sacroilíaca es inmensamente fuerte. El dolor en esa área es referido de la columna lumbar.
- **Tipo:** safety-rule
- **Aplica a:** diagnosis
- **Severidad:** refer
- **Fuente:** Sección 3.45 (p. 139–140)

### Constraint 25: `ice-temperature-safety`

- **Regla:** El hielo de congelador doméstico (-18°C) puede causar frostbite. Siempre usar mezcla hielo+agua (0°C) o barrera protectora. Revisar piel cada minuto.
- **Tipo:** safety-rule
- **Aplica a:** treatment
- **Severidad:** warn
- **Fuente:** Sección 2.5 (p. 81)

### Constraint 26: `no-excessive-cooling`

- **Regla:** Una vez que la hinchazón y el sangrado están minimizados, continuar enfriando no tiene propósito y puede retardar la cicatrización por vasoconstricción prolongada.
- **Tipo:** safety-rule
- **Aplica a:** treatment
- **Severidad:** warn
- **Fuente:** Sección 2.5 (p. 82)

### Constraint 27: `compression-caution`

- **Regla:** La compresión solo es útil hasta que el sangrado local ha cesado. Si se aplica incorrectamente (solo comprime retorno venoso, no arterial), AUMENTA la hinchazón. Si no se puede aplicar correctamente, es mejor evitarla.
- **Tipo:** conditional-contraindication
- **Aplica a:** treatment
- **Severidad:** warn
- **Fuente:** Sección 2.4 (p. 79), 2.5 (p. 80)

### Constraint 28: `no-massage-infection-thrombophlebitis`

- **Regla:** El masaje está contraindicado en infecciones locales y en tromboflebitis (o sospecha de ella).
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Fuente:** Sección 2.5 (p. 87)

### Constraint 29: `no-myositis-ossificans-physio`

- **Regla:** Si se forma hueso dentro del músculo (myositis ossificans), CUALQUIER actividad agrava la situación. La fisioterapia está contraindicada. Solo reposo completo hasta que el hueso madure.
- **Tipo:** absolute-contraindication
- **Aplica a:** treatment
- **Severidad:** stop
- **Fuente:** Sección 2.2 (p. 73)

### Constraint 30: `ambient-temperature-minimum`

- **Regla:** La temperatura ambiente de entrenamiento no debe bajar de 68–70°F (20–21°C).
- **Tipo:** safety-rule
- **Aplica a:** general
- **Severidad:** warn
- **Fuente:** Sección 2.3 (p. 75)

---

# Especificación 3: `skillPaths/ankle-rehab.ts` y `skillPaths/foot-strengthening.ts`

## SkillPath: Ankle Rehabilitation (Balancing Board Progression)

### Estructura de datos

```
SkillPath {
  id: 'ankle-rehab-lateral-ligament'
  discipline: 'physiotherapy'
  targetInjury: 'lateral-ligament-sprain'
  finalGoal: string
  prerequisites: string[]
  steps: SkillStep[]
}
```

### Prerequisites (criterios de entrada)

1. Fractura excluida por rayos X (maléolo lateral y base del 5º metatarsiano)
2. Rotura completa del ligamento excluida (stress X-ray bajo anestesia si necesario)
3. Inestabilidad anterior del astrágalo evaluada (anterior drawer test)
4. Dolor agudo controlado

### Pasos de la progresión

| Step | ID | Nombre | Descripción | Criterio de avance | Contraindicaciones | Ref |
|---|---|---|---|---|---|---|
| 0 | `non-weight-bearing` | Reposo + hielo + elevación | Non-weight-bearing. Hielo + elevación + reposo. Ultrasonido/interferencial. Ejercicios non-weight-bearing en elevación (pie pointed y neutral para incluir peroneos). Estiramiento de pantorrilla. Faradic foot bath + intrinsics. Ejercicios generales para resto del cuerpo. | Ausencia de fractura. Dolor controlado. Hinchazón reducida. | No continuar bailando sin diagnóstico | 3.1, p. 106 |
| 1 | `balancing-board-sitting` | Balancing board sentado | Non-weight-bearing. Sentado con pie sobre balancing board. Aprender colocación correcta del pie y sentir todos los movimientos del tobillo. Ayuda a lograr movilidad y "feel" de movimientos. | Control de movimientos del tobillo sin dolor. Comprensión de la colocación correcta del pie. | — | 3.1, p. 106, Fig 3.4 |
| 2 | `balancing-board-barre` | Balancing board en barre | Partial weight-bearing. De pie frente a la barre con manos apoyando el cuerpo. Pie sobre balancing board. | Estabilidad parcial sin apoyo completo de manos. Sin dolor. | No apoyar demasiado peso en manos | 3.1, p. 107, Fig 3.5 |
| 3 | `balancing-board-free` | Balancing board libre | Full weight-bearing. Sin soporte. Reeducación de reflejos posturales y propioceptivos. El daño a terminaciones nerviosas propioceptivas en ligamentos/cápsula produce inestabilidad residual. | Equilibrio estable sin soporte. Sin sensación de inestabilidad. Rodilla controlada (no hiperextendida). Peso correcto (no atrás). | Rodilla en hiperextensión. Peso atrás en el talón. | 3.1, p. 107, Fig 3.6 |
| 4 | `return-to-class` | Retorno progresivo a clase | Retorno gradual a clase. Corrección técnica obligatoria. Continuar con ejercicios de fortalecimiento. | Sin dolor. Sin hinchazón recurrente. Confianza en la articulación. Técnica corregida. | Retorno prematuro → esguince crónico | 3.1, p. 107 |

### Ejercicios complementarios durante todo el proceso

- **Ejercicios de pantorrilla:** pie pointed (full plantar-flexion) Y pie en neutral (right-angle) para incluir todos los peroneos
- **Estiramiento de pantorrilla:** tender a contractura asimétrica → interferencial a toda la longitud (tobillo hasta origen del gastrocnemius encima de la rodilla)
- **Faradic foot bath + intrinsics:** se atrofian rápidamente post-lesión
- **Slope walking:** en fases finales de rehabilitación (Fig 3.8)
- **Test de tightness:** dorsiflexión pasiva con patela alineada con centro del pie, presión uniforme bajo metatarsianos con la palma de la mano, sin extender los dedos más allá de neutral (Fig 3.7)

### ⚠️ Nota sobre contractura del ligamento lateral

Vigilar contractura del ligamento lateral por cicatrización. Requiere estiramiento muy suave, NO forzado.

### ⚠️ Nota sobre esguince crónico

El esguince crónico requiere mucho más esfuerzo en ejercicios (la debilidad se extiende a grupos musculares más arriba: pierna, tronco). La técnica antes de la lesión puede haber sido defectuosa, y después de la lesión se desarrollan fallos adicionales. Se necesita mucho tiempo de corrección.

---

## SkillPath: Foot Strengthening (Intrinsic Muscles)

### Prerequisites

- Ninguna fractura activa
- Dolor controlado
- Comprensión de la función de los intrinsics (oponen clawing, mantienen arco, dedos rectos en pointe)

### Pasos de la progresión

| Step | ID | Nombre | Descripción | Criterio de avance | Ref |
|---|---|---|---|---|---|
| 1 | `faradic-awareness` | Faradic foot bath | Estimulación eléctrica para "despertar" intrinsics cuando hay pérdida de control consciente. El paciente DEBE trabajar con la corriente (no pasivamente). "Sentir" la contracción correcta. | Poder producir la contracción voluntariamente. Sentir la diferencia entre contracción correcta e incorrecta. | 2.5, p. 86; 4, Figs 4.97–4.99 |
| 2 | `active-intrinsics` | Ejercicios activos de intrinsics | Contraer intrinsics voluntariamente: extender articulaciones IP mientras flexionar MTP. Spread/squeeze toes (abducción/aducción de dedos). Mantener dedos rectos. | Control sin calambre. Sin clawing (dominancia de flexores largos). | 4, Figs 4.97–4.99, 4.157–4.160 |
| 3 | `band-resistance-first-toe` | Con banda: primer dedo | Banda elástica ligera. El primer dedo empuja hacia abajo contra la banda sin curling. Longitud del pie y dedos. | Control contra resistencia. Sin curling. | 4, Figs 4.155–4.156 |
| 4 | `band-resistance-outer-toes` | Con banda: dedos externos | Banda para dedos externos y pie externo. Los dedos externos se alargan mientras apuntan hacia abajo contra la banda. | Control sin curling. Longitud mantenida. | 4, Figs 4.155–4.156 |
| 5 | `spread-squeeze` | Spread y squeeze de dedos | Intentar separar los dedos y luego juntarlos. Se añade a los ejercicios de Figs 4.97–4.99. | Control fino. Sin compensación de flexores largos. | 4, Figs 4.159–4.160 |
| 6 | `first-toe-abduction` | Abducción del primer dedo | Ejercicio para fortalecer la abducción del primer dedo. Protege contra la posición de valgo forzada impuesta por los zapatos de ballet. | Fuerza suficiente para resistir valgo forzado. | 4, Figs 4.159–4.160 |

### Notas importantes

- Los intrinsics se atrofian muy rápidamente tras lesión
- El faradic machine es vital porque estos músculos están "en camino de salida" evolutivamente
- Muchos bailarines tienen su propio faradic machine para mantenimiento regular
- Los zapatos con acero en la suela están contraindicados (impiden pasar correctamente por el pie → debilitan más)
- Los intrinsics son tan importantes como la pantorrilla para pointe

---

## SkillPath: Pointe Work Progression

### Prerequisites (checklist de readiness)

| Criterio | Descripción | Ref |
|---|---|---|
| Crecimiento óseo | Crecimiento del pie completado | 1.11, p. 59 |
| Fuerza de pie/tobillo | Fuerza adecuada en pies y alrededor de tobillos con control completo de todas las articulaciones relevantes | 1.11, p. 60 |
| Turn-out en cadera | Capacidad de mantener turn-out en caderas, estable en ambas piernas y en una pierna | 1.11, p. 60 |
| Estabilidad de tronco | Fuerte y estable en tronco. Sin debilidad o control inadecuado de músculos de tronco/cadera/muslo | 1.11, p. 60 |
| Ausencia de hiperlaxitud no controlada | Pies hipermóviles = ALTO RIESGO. Requieren fortalecimiento extra ANTES de pointe. | 1.11, p. 60 |
| NO basado en edad | El libro rechaza explícitamente "12 años" como criterio | 1.11, p. 59 |

### Pasos de la progresión

| Step | ID | Nombre | Descripción | Criterio de avance | Errores típicos | Ref |
|---|---|---|---|---|---|---|
| 1 | `rise-demi-pointe` | Rise a demi-pointe | Tronco y pelvis como unidad, ligeramente adelante. Empujar desde el suelo con antepié. Sensación de "lifted up from above." Glúteos, aductores, isquios, quads activos. En swayback: equilibrio quads/isquios crítico. | Control estable sin balanceo. Sin rolling. Sin sickling. Peso correcto. | Peso atrás. Rolling. Sickling. | 1.11, p. 58 |
| 2 | `rise-three-quarter` | Rise a trois-quarts pointe | Pasar por demi hasta tres cuartos. Músculos de pantorrilla trabajan más. Este rango debe trabajarse en clase para ganar fuerza. | Control en rango intermedio. Sin caída. Sin dolor. | Perder alineación. Peso atrás. No trabajar este rango en clase → Achilles tendonitis. | 1.11, p. 58; 3.9, p. 112 |
| 3 | `full-pointe` | Sur la pointe | Base muy pequeña. Transferencia de peso precisa. Control fino de cabeza, tronco y miembros. Fuerza relativa (equilibrio entre grupos), no fuerza bruta. Propiocepción innata + entrenamiento. | Estabilidad sin apoyo. Sin dolor. Sin knuckling. Sin over-pointing. | Knuckling (dedos doblados). Over-pointed foot. Sickling. Peso adelante de los dedos. | 1.11, pp. 59–60 |
| 4 | `descent` | Descenso controlado | Inverso exacto: pointe → 3/4 → demi → plano. Control excéntrico completo. | Control en todo el descenso. Sin crash. Sin pérdida de alineación. | Caída. Crash. Pérdida de alineación. | 1.11, p. 59 |

### ⚠️ Advertencia crítica sobre pies hipermóviles

"Gran precaución se requiere con cualquier niño que tenga pies y tobillos hipermóviles. Aunque este pie excesivamente pointed puede verse muy agradable cuando es la pierna de trabajo y el pie está en el aire, es el tipo de pie que está en MAYOR RIESGO una vez que el trabajo de pointe ha comenzado. Si se le permite subir sobre el pie over-pointed, el niño puede sufrir daño duradero a lo largo del dorso del pie y la parte anterior del tobillo. Antes de que un estudiante con este tipo de pie pueda comenzar pointe de forma segura, debe hacer una cantidad considerable de trabajo para fortalecer todos los músculos de los pies y tobillos para que un pie realmente bien controlado se mantenga en la posición correcta y no over-pointed."

---

# Especificación 4: `rules/weight-placement.ts`

## Definición de línea de gravedad correcta y reglas de weight placement

### Línea de gravedad correcta

```
WeightPlacement {
  correct: {
    lineOfGravity: [
      'mastoid-process (detrás de orejas)',
      'centro del hombro',
      'centro de la cadera',
      'centro de la rodilla',
      'centro del tobillo',
      'borde anterior del talón (heel pad)'
    ],
    weightDistribution: 'distribuido entre talón y antepié',
    footContact: 'sentir contacto con el suelo a través de los pies'
  }
}
```

### Regla de verificación

```
IF weightLine passes through posterior to anterior edge of heel pad
THEN status = 'weight-back'
AND trigger assessment of 16 causes
AND flag 16 potential consequences
```

### Regla de corrección

```
FOR EACH cause IN identifiedCauses:
  IF cause.isMuscular:
    prescribe strengthening exercises for weak groups
  IF cause.isTechnical:
    prescribe technical correction
  IF cause.isAnatomical:
    prescribe compensation strategy
  IF cause.isEnvironmental:
    prescribe environmental modification

RULE: Treatment of secondary injuries WITHOUT correcting weight-back fault is USELESS
```

### Regla de prioridad de corrección

```
CORRECTION ORDER (mandatory):
1. Feet and leg muscles (base)
2. Pelvis alignment
3. Trunk
4. Arms/head

WARNING: "Si las piernas y pies no son correctos, todos los intentos de fortalecer y alinear la pelvis y el tronco serán inútiles."
```

### 16 causas de weight-back (para assessment)

| # | Causa | Tipo | Sección |
|---|---|---|---|
| 1 | Lordosis | Postural | 5.6 |
| 2 | Cifosis + columna torácica rígida | Estructural | 5.5 |
| 3 | Escoliosis | Estructural | 5.4 |
| 4 | Tightness en frente de caderas | Muscular | 5.9 |
| 5 | Músculos de tronco débiles | Muscular | 5.20 |
| 6 | Abdominales/glúteos/isquios/aductores débiles | Muscular | 5.20 |
| 7 | Over-turning | Técnico | 5.7 |
| 8 | Desarrollo muscular inapropiado | Técnico | 5.20 |
| 9 | Rodillas hiperextendidas sin control | Muscular | 5.13 |
| 10 | Tibial bow | Anatómico | 5.15 |
| 11 | Tight pointe | Muscular | 5.16 |
| 12 | Rigidez del primer dedo | Anatómico | 3.22 |
| 13 | Línea oblicua de cabezas metatarsales | Anatómico | 5.19 |
| 14 | Intrinsics débiles + clawing | Muscular | 5.18 |
| 15 | Zapatos tight | Ambiental | 5.20 |
| 16 | Growth spurt | Desarrollo | 5.20 |

### 16 consecuencias de weight-back (para risk assessment)

| # | Consecuencia | Sección |
|---|---|---|
| 1 | Low back strains | 5.20 |
| 2 | Stress fractures pars interarticularis | 3.51 |
| 3 | Groin injuries | 3.40 |
| 4 | Buttock pain | 3.44 |
| 5 | Hamstring injuries | 3.41 |
| 6 | Adductor injuries | 3.39 |
| 7 | Anterior knee pain | 3.30 |
| 8 | Strains posterior de rodilla | 3.31 |
| 9 | Stress fractures tibia/fíbula | 3.26, 3.27 |
| 10 | Síndrome compartimental anterior | 3.28 |
| 11 | Lesiones de pantorrilla | 3.29 |
| 12 | Achilles tendonitis | 3.9 |
| 13 | Extensor hallucis longus tendonitis | 3.15 |
| 14 | Stress fractures metatarsianos | 3.16 |
| 15 | Debilitamiento de intrinsics | 5.18 |
| 16 | Daño articulaciones primer dedo | 3.19 |

---

# Especificación 5: Extensiones al modelo de datos

## 5.1 `TissueRegenerationType`

```
TissueRegenerationType {
  tissueType: string
  regenerationMethod: 'regeneration' | 'scar' | 'combination' | 'none'
  regenerationCapacity: 'high' | 'limited' | 'none'
  healingNotes: string
}

Values:
- skeletal_muscle: { method: 'scar', capacity: 'limited', notes: 'Regeneración muy limitada. Cicatriz. La cicatriz puede adherirse, contraerse, limitar movimiento.' }
- cardiac_muscle: { method: 'scar', capacity: 'none', notes: 'Sin regeneración. Cicatriz. Células vecinas asumen función.' }
- nerve: { method: 'none', capacity: 'none', notes: 'Sin regeneración de células nerviosas dañadas. Recuperación solo por células adyacentes asumiendo función.' }
- articular_cartilage: { method: 'scar', capacity: 'none', notes: 'Sin regeneración.' }
- bone: { method: 'regeneration', capacity: 'high', notes: 'Regeneración buena. Osteoblastos/osteoclastos. Remodelación. Mejor en niños.' }
- ligament_tendon: { method: 'scar', capacity: 'limited', notes: 'Cicatriz de colágeno. ~2 semanas para fuerza suficiente. Continúa semanas.' }
- skin: { method: 'regeneration', capacity: 'high', notes: 'Regenera bien.' }
- gi_tract: { method: 'regeneration', capacity: 'high', notes: 'Regenera bien.' }
- liver_kidney: { method: 'regeneration', capacity: 'high', notes: 'Regeneran si daño no es excesivo.' }
```

**Uso en el sistema:** Ajustar expectativas de recuperación. Un desgarro muscular (cicatriz) tiene implicaciones diferentes a una fractura (regeneración). El sistema debe informar al usuario sobre la naturaleza de la cicatrización y sus riesgos (adherencias, contractura, re-lesión).

**Referencia:** Sección 2.1 (pp. 65–67)

---

## 5.2 `ProprioceptionDeficit`

```
ProprioceptionDeficit {
  id: string
  joint: BodyZoneId
  cause: string  // 'ligament-injury' | 'capsule-damage' | 'surgery' | 'prolonged-inactivity'
  severity: 'mild' | 'moderate' | 'severe'
  symptoms: string[]  // 'feeling-of-instability' | 'giving-way' | 'lack-of-confidence'
  rehabProtocol: 'balancing-board-progression'
  progression: ('sitting' | 'barre' | 'free-standing')[]
}
```

**Detalle del libro:** "En el momento de la lesión real siempre hay daño a nervios y terminaciones nerviosas dentro de los ligamentos y cápsula articular. Estas terminaciones nerviosas son responsables de la propiocepción (apreciación de posición articular) y la pérdida o interferencia de esta mejora o es a veces totalmente responsable de la sensación residual de inestabilidad en el tobillo. El bailarín se sentirá inseguro en el tobillo, sospechando que cederá en cualquier momento. Carecerá de confianza en la articulación al intentar bailar."

**Uso en el sistema:** Tras cualquier lesión articular (especialmente tobillo), el sistema debe incluir reentrenamiento propioceptivo en el plan de rehabilitación. El balancing board es la herramienta principal.

**Referencia:** Sección 3.1 (pp. 106–107)

---

## 5.3 `TechnicalFaultGraph`

```
TechnicalFaultGraph {
  nodes: TechnicalFault[]  // Los 20 fallos de la Especificación 1
  edges: CausalEdge[]
}

CausalEdge {
  from: FaultId
  to: FaultId | InjuryId
  mechanism: string  // Descripción de cómo el fallo A produce el fallo B o la lesión C
  strength: 'direct' | 'indirect' | 'contributing'
}
```

**Uso en el sistema:**
1. **Diagnóstico inverso:** Dada una lesión, recorrer el grafo hacia atrás para identificar posibles fallos técnicos causantes.
2. **Prevención:** Dado un fallo técnico identificado, recorrer el grafo hacia adelante para alertar sobre riesgos de lesiones futuras.
3. **Corrección prioritaria:** Identificar el fallo "raíz" más upstream en la cadena causal. Corregir ese primero.
4. **Validación de tratamiento:** Si un tratamiento de lesión no incluye corrección del fallo técnico causante → flag como incompleto.

**Ejemplo de recorrido:**
```
Lesión: Achilles tendonitis
← Causa: over-use de gastrocnemius
← Causa: swayback knees + weight-back
← Causa raíz: weak intrinsics + poor technique
→ Corrección: fortalecer intrinsics + corregir weight placement + corregir técnica
→ Si no se corrige: tratamiento fallará → "siempre hay una causa no detectada, más frecuentemente un fallo técnico"
```

---

## 5.4 `InjuryPhase` (extensión)

```
InjuryPhase {
  phase: 'acute' | 'subacute' | 'chronic'
  treatmentPermissions: {
    ice: boolean
    heat: boolean  // deep heat only
    nsaids: boolean
    steroids: boolean
    exercise: boolean
    stretching: boolean
    massage: boolean
  }
}

acute: {
  ice: true
  heat: false  // deep heat contraindicated; mild superficial may help secondary spasm
  nsaids: false  // interferes with healing
  steroids: false  // stops healing completely
  exercise: true  // but only non-injured areas, immediately
  stretching: false
  massage: false
}

subacute: {
  ice: conditional  // only if swelling persists
  heat: true  // deep heat by physiotherapist
  nsaids: conditional  // only if inflammation excessive + accurate diagnosis
  steroids: false  // still generally contraindicated
  exercise: true  // progressive
  stretching: conditional  // gentle, warm tissue, after strengthening
  massage: conditional
}

chronic: {
  ice: false
  heat: true
  nsaids: conditional
  steroids: conditional  // hydrocortisone local, chronic only, accurate diagnosis
  exercise: true  // full program
  stretching: true  // with strengthening
  massage: true
}
```

**Referencia:** Sección 2.1 (pp. 64–65), 2.5 (pp. 92–93)

---

## 5.5 `Eng ram` / Motor Learning Parameters

```
MotorLearningRule {
  concept: 'engram'
  definition: 'Pre-programmed automatic multi-muscular patterns'
  formationRequirements: {
    repetitionCount: 'hundreds of thousands to millions'
    accuracyRequirement: '100% - every repetition must be identical'
    initialSpeed: 'slow enough to be accurate'
    progression: 'slow → fast only after accuracy established'
  }
  criticalWarnings: [
    'Inaccuracies during learning become "bad habits" which are themselves engrams',
    'Once a faulty engram is established, correction requires re-learning from scratch',
    'Inhibition of unwanted movements is achieved ONLY by accurate repetition, not by conscious effort',
    'Short cuts never lead to satisfactory results'
  ]
  systemImplications: [
    'Exercise instructions must emphasize accuracy over speed in early learning',
    'Progression criteria must include form accuracy, not just reps/weight',
    'Bad form detected early must trigger immediate correction, not gradual correction',
    'The system should track form quality, not just volume'
  ]
}
```

**Referencia:** Sección 1.3 (pp. 19–20), Sección 5 intro (p. 178–179)

---

## 5.6 `RehabilitationTimeline` (extensión para expectations)

```
RehabilitationTimeline {
  immobilizationRecovery: {
    rule: 'geometric, not arithmetic'
    example: '4 weeks immobilization takes 4-5x longer to recover than 2 weeks (not 2x)'
  }
  muscleWastingOnset: '2-3 days post-injury/immobilization'
  vmoPriority: 'First to atrophy, hardest to rebuild, activates only in last 15° extension'
  collagenHealing: '~2 weeks for sufficient strength, continues strengthening for weeks'
  depressionPeak: '~5 weeks post-injury (anticipate and normalize)'
  cardioFitnessDecline: 'Immediate upon cessation of activity'
  stressFractureXrayWindow: {
    metatarsals: '10-14 days minimum'
    tibia: 'several weeks to months'
    lumbar_pars: '1-2 months or longer'
  }
}
```

---

## Notas finales sobre gaps visuales

Para completar las especificaciones de ejercicios (Sección 4) con posiciones exactas, necesito las siguientes imágenes del libro:

| Figura | Contenido | Prioridad |
|---|---|---|
| Fig 2.6 | Tarjeta de evaluación ortopédica completa | **Alta** |
| Figs 4.1–4.3 | Posición de sit-ups (ángulo rodillas, manos) | Media |
| Figs 4.101–4.116 | Secuencia de estabilización completa | **Alta** |
| Figs 4.120–4.124 | Ejercicios torácicos con bandas | Media |
| Figs 4.125–4.128 | Banda elástica para escapular | Media |
| Figs 4.134–4.136 | Glúteos profundos side-lying | Media |
| Figs 4.146–4.152 | Propiocepción con wobble board y banda | **Alta** |
| Figs 4.155–4.160 | Intrinsics con banda | **Alta** |
| Fig 3.7 | Test de tightness de pantorrilla (posición de mano) | Media |
| Fig 3.16 | Strapping del primer dedo (6 pasos) | Media |
| Fig 5.21 | Medición de turn-out (posición exacta) | **Alta** |
| Fig 5.22 | Assessment de tightness de cadera anterior | Media |

Si puedes proporcionar estas imágenes, puedo completar las especificaciones con las posiciones exactas. Sin ellas, las specs se basan en los captions de texto, que son detallados pero no incluyen ángulos articulares exactos ni posiciones de manos.

---

## Ronda 3 — tras: «## Reconstrucción y Especificaciones Técnico-Clínicas de los 7 Gaps  *(Justin Howse — Dance Technique & Injury Prevention)*  ---  ### …»
# Implementación Completa de las 5 Recomendaciones

Integrando la reconstrucción de los 7 gaps con toda la información extraída del libro.

---

## Recomendación 1: `rules/technical-faults.ts`

### Estructura de datos

```typescript
interface TechnicalFault {
  id: string;
  name: string;
  section: string; // "5.7"
  page: number;
  type: 'postural' | 'muscular' | 'anatomical' | 'technical';
  isCorrectable: boolean;
  isAnatomical: boolean;
  severity: 'critical' | 'high' | 'medium' | 'low';
  affectedZones: BodyZoneId[];
  causes: string[];
  consequences: InjuryRisk[];
  correctionProtocol: CorrectionProtocol;
  relatedFaults: string[];
  assessmentMethod?: AssessmentMethod;
  engramImplication?: string;
}

interface InjuryRisk {
  injuryId: string;
  name: string;
  section: string;
  mechanism: string;
  probability: 'high' | 'medium' | 'low';
}

interface CorrectionProtocol {
  exercises: string[]; // refs a Section 4
  technicalCorrections: string[];
  orderOfCorrection: string[]; // "pies → piernas → pelvis → tronco"
  contraindications: string[];
  timeline: string;
}

interface AssessmentMethod {
  positioning: string;
  measurement: string;
  normalRange: string;
  criticalThreshold?: string;
  commonErrors: string[];
  visualAids?: string; // referencia a figuras
}
```

### Catálogo completo (20 fallos)

#### Fault 1: `shoulder-level-discrepancy` (5.1, p.179)

```typescript
{
  id: 'shoulder-level-discrepancy',
  name: 'Discrepancia en nivel de hombros',
  section: '5.1',
  page: 179,
  type: 'postural',
  isCorrectable: true, // parcialmente si es postural
  isAnatomical: false, // puede tener componente anatómico
  severity: 'medium',
  affectedZones: ['shoulder', 'trunk', 'lumbar', 'hip'],
  causes: [
    'Debilidad unilateral → sobrecompensación (hombro débil elevado o descendido)',
    'Distribución desigual de peso en parte inferior del cuerpo',
    'Escoliosis (especialmente dorsal media/alta)',
    'Desigualdad de longitud de piernas',
    'Turn-out desigual → oscilación de pelvis',
    'Sentarse en una cadera',
    'Hábito postural (cargar bolsas pesadas de un lado)',
    'Post-lesión: hábito de descargar peso del lado doloroso'
  ],
  consequences: [
    {
      injuryId: 'weight-placement-alteration',
      name: 'Alteración de línea de carga',
      section: '5.20',
      mechanism: 'Desplazamiento lateral del centro de gravedad',
      probability: 'high'
    }
  ],
  correctionProtocol: {
    exercises: [
      'Fortalecer y equilibrar tronco bajo',
      'Fortalecer glúteos, isquios, aductores, quads, pierna baja',
      'Ejercicios de corrección postural'
    ],
    technicalCorrections: ['Corrección postural constante'],
    orderOfCorrection: ['Identificar causa estructural vs postural', 'Si estructural → derivar ortopedista', 'Si postural → programa de ejercicios bilaterales'],
    contraindications: [],
    timeline: 'Variable según causa'
  },
  relatedFaults: ['scoliosis', 'leg-length-inequality', 'weight-back'],
  assessmentMethod: {
    positioning: 'De pie, vista frontal y posterior',
    measurement: 'Nivel de acromion R vs L',
    normalRange: 'Simétrico (±5mm)',
    commonErrors: ['Confundir postural con estructural', 'No verificar escoliosis subyacente']
  }
}
```

#### Fault 2: `neck-shoulder-tension` (5.2, p.180)

```typescript
{
  id: 'neck-shoulder-tension',
  name: 'Tensión alrededor del cuello y hombros',
  section: '5.2',
  page: 180,
  type: 'technical',
  isCorrectable: true,
  isAnatomical: false,
  severity: 'medium',
  affectedZones: ['neck', 'shoulder', 'thoracic', 'scapula'],
  causes: [
    'Brazos demasiado atrás (codos detrás de línea de hombros)',
    'Llevar con el codo en vez de la mano',
    'Over-turning → tronco superior oscila atrás → brazos compensan',
    'Escápulas fijadas incorrectamente (rotadas en vez de estabilizadas)',
    'Debilidad e inestabilidad del tronco bajo',
    'Swayback knees empujados atrás → pelvis anterior tilt → lordosis → tronco atrás',
    'Escoliosis → tensión variable durante trabajo',
    'Cifosis → tensión compensatoria'
  ],
  consequences: [
    {
      injuryId: 'trapezius-spasm',
      name: 'Espasmo del trapecio',
      section: '5.2',
      mechanism: 'Sobrecarga crónica de fibras superiores',
      probability: 'high'
    },
    {
      injuryId: 'pectoral-spasm',
      name: 'Espasmo de pectorales → dolor torácico',
      section: '5.2',
      mechanism: 'Fijación escapular incorrecta por rotación de escápula',
      probability: 'medium'
    }
  ],
  correctionProtocol: {
    exercises: [
      'Ejercicios de respiración (expansión lateral)',
      'Fortalecimiento de tronco bajo',
      'Corrección desde pies hacia arriba'
    ],
    technicalCorrections: [
      'Corregir posición de brazos (codos no detrás de hombros)',
      'Fijación escapular correcta (latissimus dorsi, no rotación)',
      'Corregir fallo subyacente (overturning, swayback, etc.)'
    ],
    orderOfCorrection: ['Tratamiento de espasmo/dolor (interferencial, ultrasonido, masaje)', 'Identificar y corregir causa subyacente', 'Ejercicios de respiración'],
    contraindications: ['No tratar solo el síntoma sin corregir la causa'],
    timeline: 'Variable. Espasmo agudo: días. Corrección técnica: semanas a meses'
  },
  relatedFaults: ['overturning', 'swayback-knees', 'scoliosis', 'kyphosis', 'weight-back'],
  assessmentMethod: {
    positioning: 'De pie, vista lateral. Observar línea de brazos respecto a hombros',
    measurement: 'Posición de codos respecto a línea de hombros. Tensión palpable en trapecio/pectorales',
    normalRange: 'Codos en línea con o ligeramente delante de hombros',
    commonErrors: ['No verificar si la tensión es compensatoria de fallo inferior']
  }
}
```

#### Fault 3: `clavicle-length-discrepancy` (5.3, p.181)

```typescript
{
  id: 'clavicle-length-discrepancy',
  name: 'Discrepancia en longitud de clavículas',
  section: '5.3',
  page: 181,
  type: 'anatomical',
  isCorrectable: false, // estructuralmente no; compensable
  isAnatomical: true,
  severity: 'low',
  affectedZones: ['shoulder', 'trunk', 'neck'],
  causes: ['Aberración durante crecimiento (generalmente se resuelve)'],
  consequences: [
    {
      injuryId: 'asymmetric-weight',
      name: 'Peso desplazado hacia lado más ancho',
      section: '5.3',
      mechanism: 'Asimetría de base de soporte superior',
      probability: 'medium'
    }
  ],
  correctionProtocol: {
    exercises: ['Equilibrar fuerza muscular bilateral', 'Estirar áreas tight simétricamente'],
    technicalCorrections: ['Conciencia postural de distribución de peso'],
    orderOfCorrection: ['Evaluar si se resuelve con crecimiento', 'Si persiste → compensación con ejercicios'],
    contraindications: [],
    timeline: 'Puede resolverse espontáneamente con madurez'
  },
  relatedFaults: [],
  assessmentMethod: {
    positioning: 'De pie, vista frontal',
    measurement: 'Ancho biacromial. Simetría de hombros',
    normalRange: 'Simétrico',
    commonErrors: []
  }
}
```

#### Fault 4: `scoliosis` (5.4, p.182)

```typescript
{
  id: 'scoliosis',
  name: 'Escoliosis',
  section: '5.4',
  page: 182,
  type: 'anatomical',
  isCorrectable: false, // parcialmente el componente postural
  isAnatomical: true,
  severity: 'high',
  affectedZones: ['spine', 'thoracic', 'lumbar', 'ribcage', 'hip', 'hamstrings'],
  causes: [
    'Idiopática (la mayoría)',
    'Paralítica (raro actualmente)',
    'Condiciones neurológicas (raro)'
  ],
  consequences: [
    {
      injuryId: 'groin-strains',
      name: 'Groin strains frecuentes',
      section: '5.4',
      mechanism: 'Peso desplazado hacia lado aparentemente más corto',
      probability: 'high'
    },
    {
      injuryId: 'adductor-strains',
      name: 'Adductor strains',
      section: '5.4',
      mechanism: 'Inestabilidad pélvica asimétrica',
      probability: 'high'
    },
    {
      injuryId: 'hamstring-injuries',
      name: 'Lesiones de isquios',
      section: '5.4',
      mechanism: 'Hamstrings desiguales (un lado más tight) → pull rotacional',
      probability: 'high'
    },
    {
      injuryId: 'low-back-strains',
      name: 'Low back strains',
      section: '5.4',
      mechanism: 'Rigidez segmentaria + compensación',
      probability: 'high'
    }
  ],
  correctionProtocol: {
    exercises: [
      'Side shift exercises',
      'Fortalecimiento de tronco',
      'Estimulador muscular eléctrico nocturno (prescrito por ortopedista)',
      'Rehabilitación: pies → piernas → pelvis → tronco'
    ],
    technicalCorrections: ['Corrección postural desde base (pies) hacia arriba'],
    orderOfCorrection: ['Derivar a ortopedista', 'Ejercicios de fortalecimiento', 'Corrección técnica'],
    contraindications: ['NO manipulaciones osteopáticas/quiroprácticas forzadas'],
    timeline: 'Largo plazo. Monitoreo continuo'
  },
  relatedFaults: ['shoulder-level-discrepancy', 'leg-length-inequality', 'weight-back'],
  assessmentMethod: {
    positioning: 'De pie, vista posterior. Test de Adam (flexión anterior)',
    measurement: 'Curvatura lateral + componente rotacional. Rx con medición Cobb',
    normalRange: '0° (recta)',
    criticalThreshold: 'Leve: no contraindicación para clases. Severa: contraindicación para carrera profesional',
    commonErrors: ['No detectar escoliosis leve en evaluación inicial']
  },
  engramImplication: 'La rigidez segmentaria dificulta el aprendizaje de patrones de movimiento fluidos. Requiere más repeticiones para automatizar.'
}
```

#### Fault 5: `kyphosis` (5.5, p.183)

```typescript
{
  id: 'kyphosis',
  name: 'Cifosis',
  section: '5.5',
  page: 183,
  type: 'anatomical', // frecuentemente Scheuermann
  isCorrectable: false, // si es estructural
  isAnatomical: true,
  severity: 'high',
  affectedZones: ['thoracic', 'lumbar', 'neck'],
  causes: [
    'Enfermedad de Scheuermann (osteocondritis → vértebras cuneiformes)',
    'Idiopática',
    'Postural (exagerable pero no causante)'
  ],
  consequences: [
    {
      injuryId: 'lordosis-compensatory',
      name: 'Lordosis compensatoria lumbar (inevitable)',
      section: '5.6',
      mechanism: 'La cifosis dorsal fija → la columna lumbar debe hiperextenderse para mantener verticalidad',
      probability: 'high'
    },
    {
      injuryId: 'lumbar-injuries',
      name: 'Lesiones lumbares frecuentes',
      section: '5.5',
      mechanism: 'Pérdida de absorción de shock espinal + sobrecarga lumbar',
      probability: 'high'
    },
    {
      injuryId: 'neck-hyperextension',
      name: 'Hiperextensión cervical para mirar adelante',
      section: '5.5',
      mechanism: 'La cabeza debe compensar la curvatura dorsal',
      probability: 'high'
    }
  ],
  correctionProtocol: {
    exercises: ['Fortalecimiento de tronco (reducir componente postural)'],
    technicalCorrections: ['Corrección de posición de peso (parcial, limitada por cifosis fija)'],
    orderOfCorrection: ['Pies → piernas → pelvis → tronco'],
    contraindications: ['Si es marcada: contraindicación relativa para carrera de interpretación'],
    timeline: 'No corregible si es estructural. Manejo crónico'
  },
  relatedFaults: ['lordosis', 'weight-back', 'neck-shoulder-tension'],
  assessmentMethod: {
    positioning: 'De pie, vista lateral',
    measurement: 'Curvatura torácica. Rx lateral para evaluar Scheuermann',
    normalRange: 'Curvatura torácica normal 20-45°',
    criticalThreshold: 'Si marcada: contraindicación para carrera profesional',
    commonErrors: ['Confundir cifosis postural con estructural']
  }
}
```

#### Fault 6: `lordosis` (5.6, p.184)

```typescript
{
  id: 'lordosis',
  name: 'Lordosis (hiperextensión lumbar)',
  section: '5.6',
  page: 184,
  type: 'postural', // corregible excepto si se fija
  isCorrectable: true, // salvo casos fijados
  isAnatomical: false,
  severity: 'critical',
  affectedZones: ['lumbar', 'pelvis', 'trunk', 'hip', 'abdominals'],
  causes: [
    'Cifosis dorsal (5.5)',
    'Tilt pélvico anterior por tightness en frente de caderas (5.9)',
    'Debilidad de abdominales',
    'Debilidad de glúteos (generalmente con 3)',
    'Over-turning de pies respecto a caderas → tilt pélvico anterior (5.7)',
    'Debilidad de aductores → fallo en mantener turn-out (5.10)',
    'Swayback knees → tilt pélvico compensatorio (5.13)',
    'Tibial bow → carga lateral → dificultad cara interna muslo (5.15)',
    'Debilidad de antepié → peso atrás (5.18)',
    'Cualquier otro fallo que cause peso atrás (5.20)',
    'Brazos demasiado atrás → tronco superior atrás → lordosis compensatoria (5.2)',
    'Zapatos tight → curling de dedos → peso atrás',
    'Lordosis natural desde que camina → puede fijarse parcialmente con madurez',
    'Hamstrings tight pueden contribuir (5.12)'
  ],
  consequences: [
    {
      injuryId: 'weight-back-consequences',
      name: 'Todas las consecuencias de weight-back (16)',
      section: '5.20',
      mechanism: 'La lordosis produce tilt pélvico anterior → peso atrás',
      probability: 'high'
    },
    {
      injuryId: 'lumbar-stress-fractures',
      name: 'Stress fractures de pars interarticularis',
      section: '3.51',
      mechanism: 'Hiperextensión repetitiva + carga asimétrica en un nivel',
      probability: 'high'
    }
  ],
  correctionProtocol: {
    exercises: [
      'Fortalecimiento de tronco (abdominales + extensores)',
      'Equilibrar grupos musculares de miembros inferiores',
      'Rehabilitación: pies → piernas → pelvis → tronco'
    ],
    technicalCorrections: [
      'Eliminar la causa (debilidad muscular, fallo técnico, línea de carga incorrecta)',
      'Objetivo: curva lumbar NORMAL, NO aplanada'
    ],
    orderOfCorrection: ['Identificar todas las causas (frecuentemente múltiples)', 'Corregir desde base hacia arriba', 'Nunca aplanar la curva lumbar (es tan malo como exagerarla)'],
    contraindications: ['No confundir corrección con aplanamiento total de la curva'],
    timeline: 'Semanas a meses según severidad y causas'
  },
  relatedFaults: ['kyphosis', 'weight-back', 'overturning', 'swayback-knees', 'tight-hip-flexors'],
  assessmentMethod: {
    positioning: 'De pie, vista lateral',
    measurement: 'Curvatura lumbar. Test: rodillas al pecho en supino → ¿se aplana la lordosis?',
    normalRange: 'Curvatura lumbar normal presente',
    criticalThreshold: 'Si no se aplana con rodillas al pecho → componente fijado',
    commonErrors: ['No verificar si es postural o fijada', 'Confundir con aplanamiento (tucking)']
  }
}
```

#### Fault 7: `overturning` (5.7, p.187)

```typescript
{
  id: 'overturning',
  name: 'Over-turning (pies girados más allá de la rotación externa de cadera)',
  section: '5.7',
  page: 187,
  type: 'technical',
  isCorrectable: true,
  isAnatomical: false,
  severity: 'critical',
  affectedZones: ['foot', 'ankle', 'knee', 'hip', 'lumbar', 'adductors', 'hamstrings', 'quadriceps', 'calf', 'intrinsics'],
  causes: [
    'Limitación anatómica de turn-out en caderas + demanda excesiva del profesor',
    'Falta de control muscular del turn-out (aparente restricción)',
    'Enseñanza que exige 180° en pies sin capacidad de cadera'
  ],
  consequences: [
    { injuryId: 'rolling', name: 'Rolling → strain 1er dedo, daño capsular medial', section: '5.17', mechanism: 'El pie colapsa medialmente al exceder el rango de cadera', probability: 'high' },
    { injuryId: 'first-mtp-injuries', name: 'Lesiones 1ª MTF (valgo strain, rotación)', section: '3.19', mechanism: 'Rolling + presión medial sobre primer dedo', probability: 'high' },
    { injuryId: 'clawing-intrinsics-weakness', name: 'Clawing + debilidad intrinsics', section: '5.18', mechanism: 'Peso atrás + dedos intentando agarrar el suelo', probability: 'high' },
    { injuryId: 'stress-fractures-tibia-fibula', name: 'Stress fractures tibia y fíbula', section: '3.26-3.27', mechanism: 'Falta de absorción de shock + twist rotacional', probability: 'high' },
    { injuryId: 'anterior-compartment-syndrome', name: 'Síndrome compartimental anterior', section: '3.28', mechanism: 'Sobrecarga de músculos anteriores', probability: 'medium' },
    { injuryId: 'tibialis-posterior-tenosynovitis', name: 'Tibialis posterior tenosinovitis', section: '3.13', mechanism: 'Intento de corregir rolling en pie en vez de cadera', probability: 'high' },
    { injuryId: 'medial-knee-injuries', name: 'Lesiones mediales de rodilla (menisco, ligamento)', section: '3.32-3.35', mechanism: 'Twist en rodilla entre fémur y tibia', probability: 'high' },
    { injuryId: 'chondromalacia-patellar-tendonitis', name: 'Condropatía patelar + tendinitis rotuliana', section: '3.30', mechanism: 'Tracking lateral de rótula por rotación tibial', probability: 'high' },
    { injuryId: 'lateral-hamstring-weakness', name: 'Debilidad isquios laterales → riesgo meniscal', section: '3.41', mechanism: 'Rotación desigual → imbalance medial/lateral', probability: 'high' },
    { injuryId: 'adductor-weakness', name: 'Debilidad aductores → inestabilidad pélvica', section: '5.10', mechanism: 'Aductores no funcionan plenamente en posición over-turned', probability: 'high' },
    { injuryId: 'lordosis', name: 'Lordosis → tilt pélvico anterior', section: '5.6', mechanism: 'Pelvis rota adelante para intentar más turn-out', probability: 'high' },
    { injuryId: 'groin-strains', name: 'Groin strains', section: '3.40', mechanism: 'Over-turning + debilidad muscular asociada', probability: 'high' }
  ],
  correctionProtocol: {
    exercises: [
      'Programa extenso de fortalecimiento de todos los grupos debilitados',
      'Secuencia de debilidad: abdominales → extensores espalda → latissimus → glúteos → isquios (laterales) → aductores + VMO → pantorrilla lateral → intrinsics laterales'
    ],
    technicalCorrections: [
      'REGLA FUNDAMENTAL: Los pies NUNCA deben girarse más allá del turn-out disponible en las caderas',
      'Corrección técnica extensa',
      'El profesor que exige 180° en pies sin capacidad de cadera es "culpable" según el libro'
    ],
    orderOfCorrection: ['Identificar límite anatómico real (medición con cadera extendida)', 'Reducir turn-out a capacidad real', 'Fortalecer grupos debilitados', 'Re-enseñar técnica desde base'],
    contraindications: ['NO usar rosin excesivo (aumenta fricción → facilita over-turning)', 'NO exigir 180° sin capacidad de cadera'],
    timeline: 'Meses. Requiere re-aprendizaje completo de engrams'
  },
  relatedFaults: ['restricted-hip-turnout', 'rolling', 'weight-back', 'lordosis'],
  assessmentMethod: {
    positioning: 'Decúbito prono, pierna evaluada al borde de camilla, cadera extendida. Otra pierna flexionada fuera. (Fig 5.21)',
    measurement: 'Rotación externa pasiva con cadera extendida. Goniómetro: fulcro en rótula, brazo fijo vertical, brazo móvil sobre cresta tibial',
    normalRange: 'Mínimo ~45° para danza clásica',
    criticalThreshold: '<45° → problemas crecientes',
    commonErrors: ['Medir en frog (sobreestima)', 'No estabilizar pelvis', 'Permitir flexión de cadera durante medición']
  },
  engramImplication: 'El over-turning se automatiza como engram defectuoso. Requiere cientos de miles de repeticiones correctas para re-automatizar el patrón correcto.'
}
```

#### Fault 8: `restricted-hip-turnout` (5.8, p.190)

```typescript
{
  id: 'restricted-hip-turnout',
  name: 'Restricción de turn-out en caderas',
  section: '5.8',
  page: 190,
  type: 'anatomical', // límite óseo absoluto + componente muscular
  isCorrectable: false, // límite óseo; parcialmente el componente muscular
  isAnatomical: true,
  severity: 'high',
  affectedZones: ['hip', 'adductors', 'knee', 'foot'],
  causes: [
    'Configuración ósea (profundidad acetábulo + ángulo cabeza/cuello femoral) → ABSOLUTO',
    'Cápsula y ligamentos (ilio-femoral, isquio-femoral, pubo-femoral) → difícil post-pubertad',
    'Músculos (aductores) → pueden estirarse suavemente si están involucrados'
  ],
  consequences: [
    { injuryId: 'overturning', name: 'Over-turning compensatorio', section: '5.7', mechanism: 'El bailarín intenta compensar la restricción en niveles inferiores', probability: 'high' }
  ],
  correctionProtocol: {
    exercises: [
      'Fortalecer aductores (principal rotador externo funcional)',
      'Fortalecer tronco, glúteos, pies',
      'Estiramiento suave y progresivo SOLO tras fortalecimiento'
    ],
    technicalCorrections: [
      'Corregir postura y posición de peso',
      'Trabajar dentro del rango anatómico real'
    ],
    orderOfCorrection: ['Medir límite real (cadera extendida)', 'Fortalecer primero', 'Estirar después (solo si hay componente muscular)', 'NUNCA estirar músculo débil'],
    contraindications: [
      'PROHIBIDO: Frog con alguien pisando las rodillas',
      'NUNCA estirar en frío',
      'NUNCA estirar músculo débil',
      'Estirar en dirección longitudinal a las fibras (no necesariamente en dirección del turn-out)'
    ],
    timeline: 'Componente muscular: semanas a meses. Límite óseo: permanente'
  },
  relatedFaults: ['overturning'],
  assessmentMethod: {
    positioning: 'Decúbito prono, pierna al borde de camilla, cadera completamente extendida (Fig 5.21)',
    measurement: 'Rotación externa pasiva. Rango de rotación interna + externa total. Diferencia entre cadera flexionada y extendida',
    normalRange: 'Mínimo ~45° rotación externa para ballet',
    criticalThreshold: '<45° → problemas crecientes',
    commonErrors: ['Medir en frog (sobreestima)', 'No estabilizar pelvis', 'Medir con cadera parcialmente flexionada']
  }
}
```

#### Fault 9: `tight-hip-flexors` (5.9, p.192)

```typescript
{
  id: 'tight-hip-flexors',
  name: 'Tightness en frente de caderas',
  section: '5.9',
  page: 192,
  type: 'muscular',
  isCorrectable: true,
  isAnatomical: false,
  severity: 'high',
  affectedZones: ['hip', 'lumbar', 'pelvis'],
  causes: [
    'Lordosis → tilt pélvico anterior → acortamiento progresivo',
    'Cualquier fallo que cause rotación anterior de pelvis',
    'Hamstrings tight → rodillas ligeramente flexionadas → cadera no se extiende completamente'
  ],
  consequences: [
    { injuryId: 'lordosis-postural', name: 'Lordosis postural + todos sus problemas', section: '5.6', mechanism: 'Tilt pélvico anterior crónico', probability: 'high' },
    { injuryId: 'turnout-restriction', name: 'Restricción de turn-out (real o aparente)', section: '5.8', mechanism: 'Ilio-psoas limita rotación externa o impide acción efectiva de rotadores externos', probability: 'high' }
  ],
  correctionProtocol: {
    exercises: [
      'Ejercitar grupos debilitados (tronco, isquios, aductores, glúteos)',
      'Estiramiento suave de áreas tight (tensor fascia lata, hamstrings, quads, aductores)'
    ],
    technicalCorrections: ['Corregir postura y alineación pélvica'],
    orderOfCorrection: ['Primero fortalecer', 'Luego estirar suavemente', 'NUNCA estiramiento forzado'],
    contraindications: ['NUNCA estirar músculo débil', 'NUNCA estiramiento forzado'],
    timeline: 'Semanas a meses'
  },
  relatedFaults: ['lordosis', 'overturning', 'tight-hamstrings'],
  assessmentMethod: {
    positioning: 'Decúbito prono, pierna evaluada al borde de camilla (Fig 5.22)',
    measurement: 'Extensión de cadera. ¿Puede la pierna extenderse completamente?',
    normalRange: 'Extensión completa (0° o ligeramente más)',
    criticalThreshold: 'Cualquier limitación de extensión → problema',
    commonErrors: ['No diferenciar qué estructura está tight (rectus femoris, tensor fascia latae, ilio-psoas, cápsula)']
  }
}
```

#### Fault 10: `weak-adductors` (5.10, p.193)

```typescript
{
  id: 'weak-adductors',
  name: 'Debilidad de aductores',
  section: '5.10',
  page: 193,
  type: 'muscular',
  isCorrectable: true,
  isAnatomical: false,
  severity: 'critical',
  affectedZones: ['hip', 'adductors', 'pelvis', 'knee'],
  causes: [
    'Sentarse en la cadera (sitting in the hip)',
    'Rolling',
    'Peso demasiado atrás',
    'Over-turning',
    'Swayback knees',
    'Antepié débil → posición de peso incorrecta',
    'Lordosis'
  ],
  consequences: [
    { injuryId: 'turnout-loss', name: 'Pérdida de turn-out → over-turning compensatorio', section: '5.7', mechanism: 'Los aductores son el principal rotador externo funcional', probability: 'high' },
    { injuryId: 'pelvic-instability', name: 'Inestabilidad pélvica en una pierna', section: '5.10', mechanism: 'Los aductores estabilizan la pelvis en apoyo monopodal', probability: 'high' },
    { injuryId: 'meniscal-injuries', name: 'Mayor riesgo de lesiones meniscales mediales', section: '3.35', mechanism: 'Pelvis oscila → rotación de rodilla de apoyo', probability: 'high' },
    { injuryId: 'adductor-injuries', name: 'Lesiones de aductores en grands battements', section: '3.39', mechanism: 'Debilidad + demanda explosiva', probability: 'high' }
  ],
  correctionProtocol: {
    exercises: [
      'Ejercicios de aductores (Sección 4, Figs 4.50–4.62)',
      'Posición: decúbito lateral, pierna superior flexionada 90° y apoyada',
      'Pelvis cuadrada al suelo (no rotar)',
      'Rodilla de pierna de trabajo mirando adelante',
      'Sensación de pierna "lengthened" (no pulled into hip)',
      'Abdominales activos'
    ],
    technicalCorrections: ['Corrección técnica obligatoria. Todo lo demás es inútil si el fallo técnico permanece'],
    orderOfCorrection: ['Identificar causa de debilidad', 'Fortalecer', 'Corregir técnica simultáneamente'],
    contraindications: ['No usar pesos al inicio si hay lesión aguda'],
    timeline: 'Semanas a meses'
  },
  relatedFaults: ['overturning', 'weight-back', 'swayback-knees'],
  assessmentMethod: {
    positioning: 'Observar turn-out en centro. Verificar si se mantiene sin barre',
    measurement: 'Fuerza de aductores. Capacidad de mantener turn-out sin apoyo',
    normalRange: 'Turn-out mantenido sin compensación',
    commonErrors: ['Gripping en barre enmascara debilidad de aductores']
  }
}
```

*(Continuaré con los Faults 11-20, pero por extensión los resumo en formato compacto)*

#### Faults 11-20 (Formato compacto)

| ID | Nombre | Sección | Severidad | Causas principales | Consecuencias principales |
|---|---|---|---|---|---|
| `quadriceps-insufficiency` | Insuficiencia del cuádriceps | 5.11 | critical | Swayback, hamstrings tight, post-lesión | Anterior knee pain, riesgo meniscal, sobrecarga pantorrilla |
| `tight-hamstrings` | Tightness de isquiotibiales | 5.12 | high | Growth spurt, peso atrás, over-turning | Agrava weight-back, riesgo desgarro, imbalance medial/lateral |
| `swayback-knees` | Swayback knees (hiperextensión) | 5.13 | critical | Laxitud ligamentosa (anatómico) | CAUSA MÁS POTENTE de weight-back, lordosis |
| `tight-achilles` | Tightness de Aquiles/pantorrilla | 5.14 | high | Tightness general, técnica defectuosa + debilidad | Achilles tendonitis, limitación plié, stress fractures |
| `tibial-bow` | Tibial bow | 5.15 | high | Anatómico (variación de crecimiento) | Rolling, sickling, stress injuries, inestabilidad pointe |
| `posterior-ankle-block` | Bloqueo posterior del tobillo | 5.16 | high | Os trigonum, tubérculo posterior grande | Limitación pointe, dolor posterior, strains pantorrilla |
| `rolling` | Rolling (colapso medial del pie) | 5.17 | critical | Intrinsics débiles, over-turning | 8 consecuencias (1ª MTF, rodilla medial, tendonitis, stress fx) |
| `weak-intrinsics` | Debilidad de intrínsecos del pie | 5.18 | critical | Evolutivo, falta de uso correcto | Peso atrás, knuckling, sobrecarga posterior tobillo |
| `metatarsal-toe-length-variation` | Variación longitud dedos/metatarsianos | 5.19 | high | Anatómico | Inestabilidad demi-pointe, stress fx, problemas locales dedos |
| `weight-back` | Posición de peso incorrecta | 5.20 | critical | 16 causas (ver spec 4) | 16 consecuencias (ver spec 4) |

---

## Recomendación 2: `rules/injury-safety-constraints.ts`

### Estructura de datos

```typescript
interface SafetyConstraint {
  id: string;
  name: string;
  description: string;
  type: 'absolute-contraindication' | 'conditional-contraindication' | 'safety-rule';
  appliesTo: ('exercise' | 'treatment' | 'progression' | 'general' | 'assessment')[];
  severity: 'stop' | 'warn' | 'refer';
  conditions: string[];
  source: string;
  implementation: string; // pseudo-código de verificación
}
```

### Catálogo completo (30 constraints)

```typescript
const safetyConstraints: SafetyConstraint[] = [
  {
    id: 'no-stretching-cold-tissue',
    name: 'NUNCA estirar tejido frío',
    description: 'El estiramiento solo es efectivo cuando el tejido está caliente. Estirar en frío produce desgarro.',
    type: 'absolute-contraindication',
    appliesTo: ['exercise', 'mobility'],
    severity: 'stop',
    conditions: ['tissueState === "cold" AND activity === "stretching"'],
    source: 'Sección 2.5 (p. 82, 88)',
    implementation: 'IF tissueTemp < warmThreshold AND exercise.type === "stretch" THEN BLOCK'
  },
  {
    id: 'no-stretching-weak-muscle',
    name: 'NUNCA estirar un músculo débil',
    description: 'Fortalecer primero. Un músculo débil no puede controlar el rango ganado.',
    type: 'absolute-contraindication',
    appliesTo: ['exercise', 'mobility'],
    severity: 'stop',
    conditions: ['muscleStrength < threshold AND activity === "stretching"'],
    source: 'Sección 2.5 (p. 88–89), 2.6 (p. 96)',
    implementation: 'IF muscleStrength < minimumThreshold AND exercise.type === "stretch" THEN BLOCK. Requiere strengtheningProgram activo primero.'
  },
  {
    id: 'no-ballistic-stretching',
    name: 'NUNCA estiramiento balístico/forzado',
    description: 'El estiramiento debe ser sostenido y progresivo. Nunca con rebotes ni forzado.',
    type: 'absolute-contraindication',
    appliesTo: ['exercise', 'mobility'],
    severity: 'stop',
    conditions: ['stretchType === "ballistic" OR stretchType === "forced"'],
    source: 'Sección 2.5 (p. 82, 88)',
    implementation: 'IF stretch.method IN ["ballistic", "bouncing", "forced", "jerking"] THEN BLOCK'
  },
  {
    id: 'no-stretching-across-fibers',
    name: 'NUNCA estirar a través de las fibras',
    description: 'Estirar a través de las fibras no logra nada y puede causar desgarro.',
    type: 'absolute-contraindication',
    appliesTo: ['exercise', 'mobility'],
    severity: 'stop',
    conditions: ['stretchDirection !== "longitudinal-to-fibers"'],
    source: 'Sección 2.5 (p. 88)',
    implementation: 'IF stretch.direction !== "longitudinal" THEN BLOCK'
  },
  {
    id: 'no-painkillers-to-perform',
    name: 'NUNCA usar analgésicos para rendir',
    description: 'Enmascarar dolor para continuar puede convertir lesión menor en carrera-terminante.',
    type: 'absolute-contraindication',
    appliesTo: ['general'],
    severity: 'stop',
    conditions: ['painLevel > 0 AND analgesicTaken === true AND activity === "performance"'],
    source: 'Sección 2.5 (p. 80)',
    implementation: 'IF pain.interferesWithPerformance AND painMasked THEN BLOCK + REFER'
  },
  {
    id: 'no-oral-steroids',
    name: 'NUNCA esteroides orales en bailarines',
    description: 'Suprimen inflamación necesaria para cicatrización. Alteran eje hormonal.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['medication.type === "oral-steroid" AND patient.isDancer === true'],
    source: 'Sección 2.5 (p. 93)',
    implementation: 'ALWAYS BLOCK for dancers'
  },
  {
    id: 'no-intratendinous-injection',
    name: 'NUNCA inyectar esteroides dentro del tendón',
    description: 'Solo peritendinoso. Inyección intratendinosa causa daño y rotura.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['injection.site === "intratendinous"'],
    source: 'Sección 2.5 (p. 92–93)',
    implementation: 'IF injection.target === "tendon" AND injection.depth === "within" THEN BLOCK'
  },
  {
    id: 'no-steroids-acute-injury',
    name: 'NUNCA hidrocortisona en lesión aguda',
    description: 'Detiene completamente los procesos de cicatrización.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['injuryPhase === "acute" AND treatment === "hydrocortisone"'],
    source: 'Sección 2.5 (p. 93)',
    implementation: 'IF injury.phase === "acute" THEN BLOCK steroid injection'
  },
  {
    id: 'no-steroids-suspected-fracture',
    name: 'NUNCA esteroides si se sospecha fractura',
    description: 'Incluida stress fracture. Impide cicatrización ósea.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['fractureSuspected === true AND treatment === "steroid"'],
    source: 'Sección 2.5 (p. 93), 3.16 (p. 118)',
    implementation: 'IF fracture.suspected THEN BLOCK steroid'
  },
  {
    id: 'no-intraarticular-steroids-dancers',
    name: 'NUNCA esteroides intra-articulares en bailarines',
    description: 'Solo para artritis en no atletas. No en recuperación de lesión.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['injection.site === "intra-articular" AND patient.isDancer === true'],
    source: 'Sección 2.5 (p. 93)',
    implementation: 'IF injection.target === "joint" AND patient.isDancer THEN BLOCK'
  },
  {
    id: 'max-one-steroid-large-tendon',
    name: 'MÁXIMO 1 inyección en tendones grandes',
    description: 'Aquiles, rotuliano. Con gran precaución.',
    type: 'conditional-contraindication',
    appliesTo: ['treatment'],
    severity: 'warn',
    conditions: ['tendon IN ["achilles", "patellar"] AND steroidInjectionCount > 1'],
    source: 'Sección 2.5 (p. 93)',
    implementation: 'IF tendon.isLarge AND steroid.count > 1 THEN BLOCK'
  },
  {
    id: 'no-nsaids-healing-phase',
    name: 'AINEs interfieren con cicatrización',
    description: 'Uso indiscriminado contraindicado. Solo con diagnóstico preciso y si inflamación es excesiva.',
    type: 'conditional-contraindication',
    appliesTo: ['treatment'],
    severity: 'warn',
    conditions: ['injuryPhase === "acute" AND medication.type === "NSAID" AND diagnosis.precise === false'],
    source: 'Sección 2.5 (p. 92)',
    implementation: 'IF injury.phase === "acute" AND NSAID.prescribed AND diagnosis.precise === false THEN WARN'
  },
  {
    id: 'no-heavy-weights',
    name: 'Evitar pesas muy pesadas',
    description: 'Low-resistance/high-repetition es superior. Pesas pesadas dañan articulaciones y producen bulk.',
    type: 'safety-rule',
    appliesTo: ['exercise'],
    severity: 'warn',
    conditions: ['resistance > 5kg AND exercise.purpose === "dance-strengthening"'],
    source: 'Sección 2.5 (p. 90), 2.6 (p. 95)',
    implementation: 'IF weight > 5kg AND context === "ballet-strengthening" THEN WARN'
  },
  {
    id: 'no-frog-forced-stretch',
    name: 'PROHIBIDO: Frog con alguien pisando las rodillas',
    description: 'Daña tejidos blandos. Turn-out en frog no tiene relación con turn-out en posición de trabajo.',
    type: 'absolute-contraindication',
    appliesTo: ['exercise', 'mobility'],
    severity: 'stop',
    conditions: ['exercise === "frog-stretch" AND externalForce === true'],
    source: 'Sección 2.5 (p. 88)',
    implementation: 'ALWAYS BLOCK'
  },
  {
    id: 'no-piano-pointe-stretch',
    name: 'PROHIBIDO: Pies bajo piano para "mejorar pointe"',
    description: 'Totalmente inútil y activamente dañino.',
    type: 'absolute-contraindication',
    appliesTo: ['exercise', 'mobility'],
    severity: 'stop',
    conditions: ['exercise === "piano-pointe-stretch"'],
    source: 'Sección 2.5 (p. 88–89)',
    implementation: 'ALWAYS BLOCK'
  },
  {
    id: 'ambient-temperature-minimum',
    name: 'Temperatura ambiente ≥ 20-21°C',
    description: 'Temperaturas bajas aumentan riesgo de desgarros musculares.',
    type: 'safety-rule',
    appliesTo: ['general'],
    severity: 'warn',
    conditions: ['ambientTemperature < 20'],
    source: 'Sección 2.3 (p. 75)',
    implementation: 'IF room.temp < 20°C THEN WARN'
  },
  {
    id: 'no-self-administered-deep-heat',
    name: 'NUNCA auto-administrar calor profundo',
    description: 'Solo por fisioterapeuta cualificado. Ultrasound, SWD, microwave.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['treatment.type IN ["ultrasound", "SWD", "microwave"] AND administeredBy !== "physiotherapist"'],
    source: 'Sección 2.5 (p. 83, 85)',
    implementation: 'IF deepHeat AND selfAdministered THEN BLOCK'
  },
  {
    id: 'no-prophylactic-manipulation',
    name: 'NO manipulación profiláctica rutinaria',
    description: 'Sin base de evidencia. Puede causar osteoartritis prematura.',
    type: 'safety-rule',
    appliesTo: ['treatment'],
    severity: 'warn',
    conditions: ['treatment === "manipulation" AND indication === "prophylactic" AND joint.isNormal === true'],
    source: 'Sección 2.5 (p. 87–88)',
    implementation: 'IF manipulation.routine AND noSpecificIndication THEN WARN'
  },
  {
    id: 'no-massage-infection-thrombophlebitis',
    name: 'NO masaje en infección o tromboflebitis',
    description: 'Contraindicado.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['localInfection === true OR thrombophlebitis === true OR suspectedThrombophlebitis === true'],
    source: 'Sección 2.5 (p. 87)',
    implementation: 'IF infection.local OR thrombophlebitis THEN BLOCK massage'
  },
  {
    id: 'no-myositis-ossificans-physio',
    name: 'NO fisioterapia en myositis ossificans',
    description: 'Cualquier actividad agrava. Solo reposo completo hasta que el hueso madure.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment', 'exercise'],
    severity: 'stop',
    conditions: ['condition === "myositis-ossificans"'],
    source: 'Sección 2.2 (p. 73)',
    implementation: 'IF myositisOssificans THEN BLOCK all physiotherapy AND exercise'
  },
  {
    id: 'no-surgery-without-indication',
    name: 'Cirugía solo con indicación específica',
    description: 'Diagnóstico preciso + tratamiento conservador fallado o no indicado.',
    type: 'safety-rule',
    appliesTo: ['treatment'],
    severity: 'refer',
    conditions: ['surgery.proposed AND conservativeTreatment.tried === false'],
    source: 'Sección 2.5 (p. 93)',
    implementation: 'IF surgery AND NOT conservativeTreatment.completed THEN REFER for second opinion'
  },
  {
    id: 'no-spurs-removal-surgery',
    name: 'NO cirugía para remover espolones',
    description: 'Son hallazgos incidentales, parte del proceso de cicatrización. Rara vez causan síntomas.',
    type: 'safety-rule',
    appliesTo: ['treatment'],
    severity: 'warn',
    conditions: ['surgery.indication === "spur-removal" AND spur.isSymptomatic === false'],
    source: 'Sección 2.5 (p. 93), 3.25 (p. 125)',
    implementation: 'IF surgery.for === "spur" AND spur.asymptomatic THEN BLOCK'
  },
  {
    id: 'no-lateral-release-without-muscle-balance',
    name: 'NO lateral release sin corregir imbalance',
    description: 'Inútil sin corregir desequilibrio muscular. Puede empeorar.',
    type: 'safety-rule',
    appliesTo: ['treatment'],
    severity: 'warn',
    conditions: ['surgery === "lateral-release" AND muscleImbalance.corrected === false'],
    source: 'Sección 3.30 (p. 130)',
    implementation: 'IF lateralRelease AND NOT muscleBalance.corrected THEN WARN'
  },
  {
    id: 'no-retropatellar-shaving',
    name: 'NO shaving retropatelar',
    description: '"Desastroso" - empeora las cosas.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['surgery === "retropatellar-shaving"'],
    source: 'Sección 3.30 (p. 132)',
    implementation: 'ALWAYS BLOCK'
  },
  {
    id: 'no-kissing-spine-surgery',
    name: 'NO cirugía para kissing spine',
    description: 'El problema es técnico (fallo en pull up). Causa inestabilidad progresiva.',
    type: 'absolute-contraindication',
    appliesTo: ['treatment'],
    severity: 'stop',
    conditions: ['surgery === "kissing-spine-excision"'],
    source: 'Sección 3.48 (p. 140–141)',
    implementation: 'ALWAYS BLOCK'
  },
  {
    id: 'no-sacroiliac-displacement-diagnosis',
    name: 'NO diagnóstico de "desplazamiento sacroilíaco"',
    description: '"Absolutamente sin sentido". La articulación es inmensamente fuerte. Dolor es referido de lumbar.',
    type: 'safety-rule',
    appliesTo: ['assessment'],
    severity: 'refer',
    conditions: ['diagnosis === "sacroiliac-displacement" AND patient.isDancer === true'],
    source: 'Sección 3.45 (p. 139–140)',
    implementation: 'IF diagnosis.sacroiliac_displacement THEN REFER for lumbar evaluation'
  },
  {
    id: 'ice-temperature-safety',
    name: 'Hielo de congelador (-18°C) puede causar frostbite',
    description: 'Siempre usar mezcla hielo+agua (0°C) o barrera protectora.',
    type: 'safety-rule',
    appliesTo: ['treatment'],
    severity: 'warn',
    conditions: ['ice.source === "freezer" AND ice.temperature === -18 AND barrier === false'],
    source: 'Sección 2.5 (p. 81)',
    implementation: 'IF ice.temp < 0°C AND noBarrier THEN WARN'
  },
  {
    id: 'no-excessive-cooling',
    name: 'NO enfriamiento excesivo',
    description: 'Una vez minimizada hinchazón, continuar enfriando retarda cicatrización.',
    type: 'safety-rule',
    appliesTo: ['treatment'],
    severity: 'warn',
    conditions: ['swelling.resolved AND cooling.continued'],
    source: 'Sección 2.5 (p. 82)',
    implementation: 'IF swelling === false AND ice.continued THEN WARN'
  },
  {
    id: 'compression-caution',
    name: 'Compresión solo si se aplica correctamente',
    description: 'Si solo comprime retorno venoso (no arterial), AUMENTA hinchazón.',
    type: 'conditional-contraindication',
    appliesTo: ['treatment'],
    severity: 'warn',
    conditions: ['compression.applied AND bleeding.ceased'],
    source: 'Sección 2.4 (p. 79), 2.5 (p. 80)',
    implementation: 'IF compression AND bleeding.stopped THEN REMOVE compression'
  },
  {
    id: 'no-stretching-injured-tissue-early',
    name: 'NO estirar tejido lesionado prematuramente',
    description: 'Post-lesión, el tejido puede responder mal al estiramiento → más contractura.',
    type: 'conditional-contraindication',
    appliesTo: ['exercise', 'mobility'],
    severity: 'warn',
    conditions: ['injury.recent AND tissue.healing AND exercise === "stretching"'],
    source: 'Sección 2.5 (p. 88)',
    implementation: 'IF injury.daysSince < healingThreshold AND stretch THEN WARN. Consultar fisioterapeuta.'
  }
];
```

---

## Recomendación 3: `skillPaths/ankle-rehab.ts` y `skillPaths/foot-strengthening.ts`

### SkillPath: Ankle Rehabilitation

```typescript
const ankleRehabPath: SkillPath = {
  id: 'ankle-rehab-lateral-ligament',
  name: 'Rehabilitación de esguince del ligamento lateral del tobillo',
  discipline: 'physiotherapy',
  targetInjury: 'lateral-ligament-sprain',
  finalGoal: 'Restaurar estabilidad, propiocepción y función completa del tobillo. Retorno a clase sin dolor ni inestabilidad.',
  
  prerequisites: [
    'Fractura excluida por rayos X (maléolo lateral y base 5º metatarsiano)',
    'Rotura completa del ligamento excluida (stress X-ray bajo anestesia si necesario)',
    'Inestabilidad anterior del astrágalo evaluada (anterior drawer test)',
    'Dolor agudo controlado'
  ],

  steps: [
    {
      id: 'step-0-immobilization',
      name: 'Fase aguda: Reposo + hielo + elevación',
      description: 'Non-weight-bearing. Hielo + elevación + reposo. Ultrasonido/interferencial. Ejercicios non-weight-bearing en elevación (pie pointed y neutral para incluir peroneos). Estiramiento de pantorrilla. Faradic foot bath + intrinsics. Ejercicios generales para resto del cuerpo.',
      criteria: ['Ausencia de fractura', 'Dolor controlado', 'Hinchazón reducida'],
      contraindications: ['No continuar bailando sin diagnóstico'],
      duration: 'Días a 1 semana',
      reference: '3.1, p. 106'
    },
    {
      id: 'step-1-balancing-board-sitting',
      name: 'Balancing board sentado',
      description: 'Non-weight-bearing. Sentado con pie sobre balancing board. Aprender colocación correcta del pie y sentir todos los movimientos del tobillo.',
      criteria: ['Control de movimientos del tobillo sin dolor', 'Comprensión de la colocación correcta del pie'],
      contraindications: [],
      duration: '1-2 semanas',
      reference: '3.1, p. 106, Fig 3.4'
    },
    {
      id: 'step-2-balancing-board-barre',
      name: 'Balancing board en barre',
      description: 'Partial weight-bearing. De pie frente a la barre con manos apoyando el cuerpo. Pie sobre balancing board.',
      criteria: ['Estabilidad parcial sin apoyo completo de manos', 'Sin dolor'],
      contraindications: ['No apoyar demasiado peso en manos'],
      duration: '1-2 semanas',
      reference: '3.1, p. 107, Fig 3.5'
    },
    {
      id: 'step-3-balancing-board-free',
      name: 'Balancing board libre',
      description: 'Full weight-bearing. Sin soporte. Reeducación de reflejos posturales y propioceptivos.',
      criteria: ['Equilibrio estable sin soporte', 'Sin sensación de inestabilidad', 'Rodilla controlada (no hiperextendida)', 'Peso correcto (no atrás)'],
      contraindications: ['Rodilla en hiperextensión', 'Peso atrás en el talón'],
      duration: '2-4 semanas',
      reference: '3.1, p. 107, Fig 3.6'
    },
    {
      id: 'step-4-return-to-class',
      name: 'Retorno progresivo a clase',
      description: 'Retorno gradual a clase. Corrección técnica obligatoria. Continuar con ejercicios de fortalecimiento.',
      criteria: ['Sin dolor', 'Sin hinchazón recurrente', 'Confianza en la articulación', 'Técnica corregida'],
      contraindications: ['Retorno prematuro → esguince crónico'],
      duration: 'Semanas a meses',
      reference: '3.1, p. 107'
    }
  ],

  complementaryExercises: [
    {
      name: 'Ejercicios de pantorrilla',
      description: 'Pie pointed (full plantar-flexion) Y pie en neutral (right-angle) para incluir todos los peroneos',
      frequency: 'Diario',
      reference: '3.1, p. 106'
    },
    {
      name: 'Test de tightness de pantorrilla',
      description: 'Dorsiflexión pasiva con patela alineada al centro del pie. Presión uniforme bajo metatarsianos con palma de mano. NO extender dedos más allá de neutral. (Fig 3.7)',
      frequency: 'Evaluación semanal',
      reference: '3.1, p. 108, Fig 3.7'
    },
    {
      name: 'Slope walking',
      description: 'En fases finales de rehabilitación. Estiramiento de Aquiles/pantorrilla en pendiente.',
      frequency: 'Fases finales',
      reference: '3.1, p. 108, Fig 3.8'
    }
  ],

  criticalWarnings: [
    'Vigilar contractura del ligamento lateral por cicatrización. Requiere estiramiento muy suave, NO forzado.',
    'El esguince crónico requiere mucho más esfuerzo en ejercicios. La debilidad se extiende a grupos musculares más arriba.',
    'El daño a terminaciones nerviosas propioceptivas en ligamentos/cápsula produce inestabilidad residual. El balancing board es la herramienta principal de re-educación.'
  ]
};
```

### SkillPath: Foot Strengthening (Intrinsic Muscles)

```typescript
const footStrengtheningPath: SkillPath = {
  id: 'foot-strengthening-intrinsics',
  name: 'Fortalecimiento de músculos intrínsecos del pie',
  discipline: 'ballet/rehabilitation',
  targetInjury: 'weak-intrinsics',
  finalGoal: 'Intrinsics fuertes para mantener arcos, evitar clawing, dedos rectos en pointe, distribución correcta de peso.',

  prerequisites: [
    'Ninguna fractura activa',
    'Dolor controlado',
    'Comprensión de la función de los intrinsics'
  ],

  steps: [
    {
      id: 'step-1-faradic-awareness',
      name: 'Faradic foot bath',
      description: 'Estimulación eléctrica para "despertar" intrinsics cuando hay pérdida de control consciente. El paciente DEBE trabajar con la corriente (no pasivamente). "Sentir" la contracción correcta.',
      criteria: ['Poder producir la contracción voluntariamente', 'Sentir la diferencia entre contracción correcta e incorrecta'],
      contraindications: ['Pasividad total durante estimulación'],
      duration: 'Diario hasta recuperar control',
      reference: '2.5, p. 86; 4, Figs 4.97–4.99'
    },
    {
      id: 'step-2-active-intrinsics',
      name: 'Ejercicios activos de intrinsics',
      description: 'Contraer intrinsics voluntariamente: extender articulaciones IP mientras flexionar MTP. Spread/squeeze toes. Mantener dedos rectos.',
      criteria: ['Control sin calambre', 'Sin clawing (dominancia de flexores largos)'],
      contraindications: [],
      duration: 'Diario',
      reference: '4, Figs 4.97–4.99, 4.157–4.160'
    },
    {
      id: 'step-3-band-resistance-first-toe',
      name: 'Con banda: primer dedo',
      description: 'Banda elástica ligera anclada alrededor del hallux. Realizar flexión de MTP con extensión/alineación recta de IP. Longitud del pie y dedos.',
      criteria: ['Control contra resistencia', 'Sin curling'],
      contraindications: [],
      duration: 'Progresivo',
      reference: '4, Figs 4.155–4.156'
    },
    {
      id: 'step-4-band-resistance-outer-toes',
      name: 'Con banda: dedos externos',
      description: 'Banda para dedos externos y pie externo. Los dedos externos se alargan mientras apuntan hacia abajo contra la banda.',
      criteria: ['Control sin curling', 'Longitud mantenida'],
      contraindications: [],
      duration: 'Progresivo',
      reference: '4, Figs 4.155–4.156'
    },
    {
      id: 'step-5-spread-squeeze',
      name: 'Spread y squeeze de dedos',
      description: 'Intentar separar los dedos y luego juntarlos. Se añade a los ejercicios de Figs 4.97–4.99.',
      criteria: ['Control fino', 'Sin compensación de flexores largos'],
      contraindications: [],
      duration: 'Progresivo',
      reference: '4, Figs 4.159–4.160'
    },
    {
      id: 'step-6-first-toe-abduction',
      name: 'Abducción del primer dedo',
      description: 'Ejercicio para fortalecer la abducción del primer dedo. Protege contra la posición de valgo forzada impuesta por los zapatos de ballet.',
      criteria: ['Fuerza suficiente para resistir valgo forzado'],
      contraindications: [],
      duration: 'Mantenimiento',
      reference: '4, Figs 4.159–4.160'
    }
  ],

  criticalWarnings: [
    'Los intrinsics se atrofian muy rápidamente tras lesión',
    'El faradic machine es vital porque estos músculos están "en camino de salida" evolutivamente',
    'Muchos bailarines tienen su propio faradic machine para mantenimiento regular',
    'Los zapatos con acero en la suela están contraindicados (impiden pasar correctamente por el pie → debilitan más)',
    'Los intrinsics son tan importantes como la pantorrilla para pointe'
  ]
};
```

### SkillPath: Pointe Work Progression

```typescript
const pointeProgressionPath: SkillPath = {
  id: 'pointe-work-progression',
  name: 'Progresión de trabajo de pointe',
  discipline: 'ballet',
  finalGoal: 'Bailar sur la pointe con control, estabilidad y alineación correcta',

  prerequisites: [
    { criterion: 'Crecimiento óseo del pie completado', reference: '1.11, p. 59' },
    { criterion: 'Fuerza en pies y alrededor de tobillos con control completo', reference: '1.11, p. 60' },
    { criterion: 'Capacidad de mantener turn-out en caderas, estable en ambas piernas y en una', reference: '1.11, p. 60' },
    { criterion: 'Fuerte y estable en tronco. Sin debilidad o control inadecuado', reference: '1.11, p. 60' },
    { criterion: 'Ausencia de hiperlaxitud no controlada. Pies hipermóviles = ALTO RIESGO', reference: '1.11, p. 60' },
    { criterion: 'NO basado en edad (el libro rechaza explícitamente "12 años")', reference: '1.11, p. 59' }
  ],

  steps: [
    {
      id: 'step-1-rise-demi-pointe',
      name: 'Rise a demi-pointe',
      description: 'Tronco y pelvis como unidad, ligeramente adelante. Empujar desde el suelo con antepié. Sensación de "lifted up from above." Glúteos, aductores, isquios, quads activos.',
      criteria: ['Control estable sin balanceo', 'Sin rolling', 'Sin sickling', 'Peso correcto'],
      commonErrors: ['Peso atrás', 'Rolling', 'Sickling'],
      reference: '1.11, p. 58'
    },
    {
      id: 'step-2-rise-three-quarter',
      name: 'Rise a trois-quarts pointe',
      description: 'Pasar por demi hasta tres cuartos. Músculos de pantorrilla trabajan más. Este rango debe trabajarse en clase para ganar fuerza.',
      criteria: ['Control en rango intermedio', 'Sin caída', 'Sin dolor'],
      commonErrors: ['Perder alineación', 'Peso atrás', 'No trabajar este rango → Achilles tendonitis'],
      reference: '1.11, p. 58; 3.9, p. 112'
    },
    {
      id: 'step-3-full-pointe',
      name: 'Sur la pointe',
      description: 'Base muy pequeña. Transferencia de peso precisa. Control fino. Fuerza relativa (equilibrio entre grupos), no fuerza bruta. Propiocepción innata + entrenamiento.',
      criteria: ['Estabilidad sin apoyo', 'Sin dolor', 'Sin knuckling', 'Sin over-pointing'],
      commonErrors: ['Knuckling (dedos doblados)', 'Over-pointed foot', 'Sickling', 'Peso adelante de los dedos'],
      reference: '1.11, pp. 59–60'
    },
    {
      id: 'step-4-descent',
      name: 'Descenso controlado',
      description: 'Inverso exacto: pointe → 3/4 → demi → plano. Control excéntrico completo.',
      criteria: ['Control en todo el descenso', 'Sin crash', 'Sin pérdida de alineación'],
      commonErrors: ['Caída', 'Crash', 'Pérdida de alineación'],
      reference: '1.11, p. 59'
    }
  ],

  criticalWarnings: [
    'Gran precaución con pies y tobillos hipermóviles. Aunque el pie excesivamente pointed puede verse agradable en el aire, es el tipo de pie con MAYOR RIESGO en pointe.',
    'Si se permite subir sobre el pie over-pointed, puede causar daño duradero a lo largo del dorso del pie y la parte anterior del tobillo (Fig 1.80).',
    'Antes de comenzar pointe, un estudiante con pies hipermóviles debe hacer una cantidad considerable de trabajo para fortalecer todos los músculos de pies y tobillos.',
    'No hay desventaja en empezar tarde. Bailarinas conocidas no empezaron hasta después de los 16 años.'
  ]
};
```

---

## Recomendación 4: `rules/weight-placement.ts`

```typescript
const weightPlacementRules = {
  id: 'weight-placement',
  name: 'Reglas de posición de peso',
  section: '5.20',
  page: 205,

  definition: {
    correctLineOfGravity: [
      'Apófisis mastoides (detrás de orejas)',
      'Centro del hombro',
      'Centro de la cadera',
      'Centro de la rodilla',
      'Centro del tobillo',
      'Borde anterior del talón (heel pad)'
    ],
    weightDistribution: 'Distribuido entre talón y antepié',
    footContact: 'Sentir contacto con el suelo a través de los pies',
    sensation: 'Empujar hacia abajo en el suelo → sensación de "pushing yourself up from below"',
    reference: 'Sección 1.11, pp. 52-60; Sección 5.20, p. 205'
  },

  assessmentMethod: {
    positioning: 'De pie, vista lateral. Vista frontal para distribución de peso',
    measurement: 'Línea de plomada desde mastoides hasta borde anterior del talón',
    normalRange: 'Línea pasa por todos los puntos definidos',
    criticalThreshold: 'Si la línea pasa posterior al borde anterior del talón → weight-back',
    visualAids: 'Fig 1.70-1.72 (stance correcta/incorrecta), Fig 5.35 (distribución de peso en planta del pie)',
    commonErrors: [
      'No verificar desde vista lateral',
      'Confundir "peso atrás" con "talones elevados" (variante opuesta rara)',
      'No evaluar en movimiento (pliés, rises, saltos)'
    ]
  },

  sixteenCauses: [
    { id: 1, cause: 'Lordosis', type: 'postural', section: '5.6' },
    { id: 2, cause: 'Cifosis + columna torácica rígida', type: 'structural', section: '5.5' },
    { id: 3, cause: 'Escoliosis', type: 'structural', section: '5.4' },
    { id: 4, cause: 'Tightness en frente de caderas', type: 'muscular', section: '5.9' },
    { id: 5, cause: 'Músculos de tronco débiles', type: 'muscular', section: '5.20' },
    { id: 6, cause: 'Abdominales/glúteos/isquios/aductores débiles', type: 'muscular', section: '5.20' },
    { id: 7, cause: 'Over-turning', type: 'technical', section: '5.7' },
    { id: 8, cause: 'Desarrollo muscular inapropiado', type: 'technical', section: '5.20' },
    { id: 9, cause: 'Rodillas hiperextendidas sin control', type: 'muscular', section: '5.13' },
    { id: 10, cause: 'Tibial bow', type: 'anatomical', section: '5.15' },
    { id: 11, cause: 'Tight pointe', type: 'muscular', section: '5.16' },
    { id: 12, cause: 'Rigidez del primer dedo (hallux rigidus)', type: 'anatomical', section: '3.22' },
    { id: 13, cause: 'Línea oblicua de cabezas metatarsales', type: 'anatomical', section: '5.19' },
    { id: 14, cause: 'Intrinsics débiles + clawing', type: 'muscular', section: '5.18' },
    { id: 15, cause: 'Zapatos tight', type: 'environmental', section: '5.20' },
    { id: 16, cause: 'Growth spurt', type: 'developmental', section: '5.20' }
  ],

  sixteenConsequences: [
    { id: 1, consequence: 'Low back strains', section: '3.48-3.49' },
    { id: 2, consequence: 'Stress fractures pars interarticularis', section: '3.51' },
    { id: 3, consequence: 'Groin injuries', section: '3.40' },
    { id: 4, consequence: 'Buttock pain', section: '3.44' },
    { id: 5, consequence: 'Hamstring injuries', section: '3.41' },
    { id: 6, consequence: 'Adductor injuries', section: '3.39' },
    { id: 7, consequence: 'Anterior knee pain', section: '3.30' },
    { id: 8, consequence: 'Strains posterior de rodilla', section: '3.31' },
    { id: 9, consequence: 'Stress fractures tibia/fíbula', section: '3.26-3.27' },
    { id: 10, consequence: 'Síndrome compartimental anterior', section: '3.28' },
    { id: 11, consequence: 'Lesiones de pantorrilla', section: '3.29' },
    { id: 12, consequence: 'Achilles tendonitis', section: '3.9' },
    { id: 13, consequence: 'Extensor hallucis longus tendonitis', section: '3.15' },
    { id: 14, consequence: 'Stress fractures metatarsianos', section: '3.16' },
    { id: 15, consequence: 'Debilitamiento de intrinsics', section: '5.18' },
    { id: 16, consequence: 'Daño articulaciones primer dedo', section: '3.19' }
  ],

  correctionProtocol: {
    principle: 'El tratamiento de lesiones secundarias SIN corregir el fallo de peso es INÚTIL',
    steps: [
      'Determinar TODAS las causas (frecuentemente múltiples)',
      'Corregir y eliminar todas las causas',
      'Programa de ejercicios desde base (pies) hacia arriba',
      'Corrección técnica simultánea',
      'Nunca tratar solo la zona de la lesión'
    ],
    orderOfCorrection: ['Pies y piernas primero', 'Pelvis', 'Tronco', 'Brazos/cabeza'],
    warning: 'Si las piernas y pies no son correctos, todos los intentos de fortalecer y alinear la pelvis y el tronco serán inútiles.',
    reference: 'Sección 5.20, p. 206'
  },

  implementationRules: [
    {
      rule: 'IF weightLine passes posterior to anterior edge of heel pad THEN status = "weight-back"',
      action: 'Trigger assessment of 16 causes. Flag 16 potential consequences.'
    },
    {
      rule: 'IF treatment.prescribed AND technicalFault.weightBack NOT corrected THEN flag treatment as INCOMPLETE',
      action: 'Require technical correction before marking treatment as complete.'
    },
    {
      rule: 'IF injury.recurrent AND weightBack.status === "uncorrected" THEN rootCause = "weight-back"',
      action: 'Prioritize weight placement correction over local treatment.'
    }
  ]
};
```

---

## Recomendación 5: Extensiones al modelo de datos

### 5.1 `TissueRegenerationType`

```typescript
enum TissueRegenerationMethod {
  REGENERATION = 'regeneration',
  SCAR = 'scar',
  COMBINATION = 'combination',
  NONE = 'none'
}

enum RegenerationCapacity {
  HIGH = 'high',
  LIMITED = 'limited',
  NONE = 'none'
}

interface TissueType {
  id: string;
  name: string;
  regenerationMethod: TissueRegenerationMethod;
  regenerationCapacity: RegenerationCapacity;
  healingNotes: string;
  implicationsForRehab: string[];
}

const tissueTypes: TissueType[] = [
  {
    id: 'skeletal-muscle',
    name: 'Músculo esquelético',
    regenerationMethod: 'scar',
    regenerationCapacity: 'limited',
    healingNotes: 'Regeneración muy limitada. Cicatriz. Puede adherirse, contraerse, limitar movimiento.',
    implicationsForRehab: [
      'Cicatriz puede adherirse a estructuras adyacentes',
      'Contractura de cicatriz → limitación de movimiento',
      'Riesgo de re-lesión en zona de cicatriz',
      'Estiramiento suave necesario para prevenir contractura (solo tras tono restaurado)'
    ]
  },
  {
    id: 'cardiac-muscle',
    name: 'Músculo cardíaco',
    regenerationMethod: 'scar',
    regenerationCapacity: 'none',
    healingNotes: 'Sin regeneración. Cicatriz. Células vecinas asumen función.',
    implicationsForRehab: ['No relevante para lesiones de danza']
  },
  {
    id: 'nerve',
    name: 'Nervio',
    regenerationMethod: 'none',
    regenerationCapacity: 'none',
    healingNotes: 'Sin regeneración de células nerviosas dañadas. Recuperación solo por células adyacentes asumiendo función.',
    implicationsForRehab: [
      'Daño a terminaciones propioceptivas en ligamentos/cápsula → inestabilidad residual',
      'Requiere re-entrenamiento propioceptivo (balancing board)'
    ]
  },
  {
    id: 'articular-cartilage',
    name: 'Cartílago articular',
    regenerationMethod: 'scar',
    regenerationCapacity: 'none',
    healingNotes: 'Sin regeneración.',
    implicationsForRehab: ['Daño articular puede limitar movimiento permanentemente']
  },
  {
    id: 'bone',
    name: 'Hueso',
    regenerationMethod: 'regeneration',
    regenerationCapacity: 'high',
    healingNotes: 'Regeneración buena. Osteoblastos/osteoclastos. Remodelación. Mejor en niños.',
    implicationsForRehab: [
      'Stress fractures: X-ray negativo 10-14 días (metatarsales), semanas-meses (tibia/spine)',
      'Diagnóstico clínico debe preceder a confirmación radiológica',
      'Reposo inmediato desde diagnóstico clínico'
    ]
  },
  {
    id: 'ligament-tendon',
    name: 'Ligamento/Tendón',
    regenerationMethod: 'scar',
    regenerationCapacity: 'limited',
    healingNotes: 'Cicatriz de colágeno. ~2 semanas para fuerza suficiente. Continúa semanas.',
    implicationsForRehab: [
      'No inyectar esteroides dentro del tendón',
      'Máximo 1 inyección peritendinosa en tendones grandes',
      'Reparación quirúrgica de rotura completa dentro de 24-48h',
      'Movilización temprana (no yeso prolongado) para evitar atrofia'
    ]
  },
  {
    id: 'skin',
    name: 'Piel',
    regenerationMethod: 'regeneration',
    regenerationCapacity: 'high',
    healingNotes: 'Regenera bien.',
    implicationsForRehab: ['No relevante para reglas de entrenamiento']
  }
];
```

### 5.2 `ProprioceptionDeficit`

```typescript
interface ProprioceptionDeficit {
  id: string;
  joint: BodyZoneId;
  cause: string;
  severity: 'mild' | 'moderate' | 'severe';
  symptoms: string[];
  rehabProtocol: 'balancing-board-progression';
  progression: ('sitting' | 'barre' | 'free-standing')[];
  expectedRecovery: string;
}

const proprioceptionDeficitRules = {
  description: 'Tras lesión articular, las terminaciones nerviosas propioceptivas en ligamentos/cápsula se dañan. Esto produce inestabilidad residual aunque el tejido haya sanado.',
  source: 'Sección 3.1 (pp. 106–107)',
  
  implementationRules: [
    {
      trigger: 'ANY joint injury (especially ankle)',
      action: 'Include proprioceptive retraining in rehab plan',
      tool: 'Balancing board progression (sitting → barre → free-standing)',
      mandatory: true
    },
    {
      trigger: 'Patient reports "feeling of instability" OR "giving way" OR "lack of confidence in joint"',
      action: 'Assess proprioception. If deficient → balancing board program.',
      mandatory: true
    },
    {
      trigger: 'Return to dance after ankle injury',
      action: 'Verify proprioception is adequate before full return. Inadequate proprioception → recurrent sprains.',
      mandatory: true
    }
  ],

  balancingBoardProgression: {
    step1: {
      name: 'Sentado',
      weightBearing: 'none',
      goal: 'Aprender colocación correcta del pie. Sentir movimientos del tobillo.',
      criteria: 'Control de movimientos sin dolor'
    },
    step2: {
      name: 'En barre',
      weightBearing: 'partial',
      goal: 'Estabilidad parcial con soporte de manos.',
      criteria: 'Estabilidad sin apoyo completo de manos'
    },
    step3: {
      name: 'Libre',
      weightBearing: 'full',
      goal: 'Re-educación de reflejos posturales y propioceptivos.',
      criteria: 'Equilibrio estable sin soporte. Rodilla controlada. Peso correcto.'
    }
  }
};
```

### 5.3 `TechnicalFaultGraph`

```typescript
interface CausalEdge {
  from: string; // FaultId or InjuryId
  to: string;   // FaultId or InjuryId
  mechanism: string;
  strength: 'direct' | 'indirect' | 'contributing';
}

const technicalFaultGraph = {
  nodes: ['overturning', 'rolling', 'weight-back', 'lordosis', 'swayback-knees', 'weak-intrinsics', 'weak-adductors', 'restricted-hip-turnout', 'tight-hip-flexors', 'tight-hamstrings', 'tight-achilles', 'tibial-bow', 'posterior-ankle-block', 'kyphosis', 'scoliosis', 'quadriceps-insufficiency'],

  edges: [
    // Over-turning cascade
    { from: 'overturning', to: 'rolling', mechanism: 'Pie colapsa medialmente al exceder rango de cadera', strength: 'direct' },
    { from: 'rolling', to: 'first-mtp-strain', mechanism: 'Presión medial sobre primer dedo', strength: 'direct' },
    { from: 'rolling', to: 'sesamoiditis', mechanism: 'Sobrecarga de sesamoideos', strength: 'direct' },
    { from: 'rolling', to: 'hallux-valgus-aggravation', mechanism: 'Valgo strain repetitivo', strength: 'direct' },
    { from: 'rolling', to: 'metatarsal-stress-fractures', mechanism: 'Transferencia de peso incorrecta', strength: 'direct' },
    { from: 'rolling', to: 'tibialis-posterior-tenosynovitis', mechanism: 'Intento de corregir rolling en pie', strength: 'direct' },
    { from: 'rolling', to: 'extensor-hallucis-longus-tendonitis', mechanism: 'Tensión en EHL por valgo + flexión IP', strength: 'direct' },
    { from: 'rolling', to: 'lateral-ligament-damage', mechanism: 'Ligamento comprimido en plano, estirado en rise', strength: 'direct' },
    { from: 'overturning', to: 'medial-knee-injuries', mechanism: 'Twist en rodilla', strength: 'direct' },
    { from: 'overturning', to: 'chondromalacia-patellar-tendonitis', mechanism: 'Tracking lateral de rótula', strength: 'direct' },
    { from: 'overturning', to: 'lateral-hamstring-weakness', mechanism: 'Rotación desigual', strength: 'direct' },
    { from: 'overturning', to: 'adductor-weakness', mechanism: 'Aductores no funcionan plenamente', strength: 'direct' },
    { from: 'overturning', to: 'lordosis', mechanism: 'Pelvis rota adelante', strength: 'direct' },
    { from: 'overturning', to: 'groin-strains', mechanism: 'Over-turning + debilidad', strength: 'direct' },

    // Weight-back convergence
    { from: 'swayback-knees', to: 'weight-back', mechanism: 'Causa más potente de weight-back', strength: 'direct' },
    { from: 'weak-intrinsics', to: 'weight-back', mechanism: 'Peso en talón en vez de antepié', strength: 'direct' },
    { from: 'tight-achilles', to: 'weight-back', mechanism: 'Peso no puede distribuirse correctamente', strength: 'direct' },
    { from: 'lordosis', to: 'weight-back', mechanism: 'Tilt pélvico anterior', strength: 'direct' },
    { from: 'kyphosis', to: 'lordosis', mechanism: 'Lordosis compensatoria inevitable', strength: 'direct' },
    { from: 'scoliosis', to: 'weight-back', mechanism: 'Peso desplazado lateralmente', strength: 'indirect' },
    { from: 'tibial-bow', to: 'weight-back', mechanism: 'Alteración de línea de carga', strength: 'indirect' },

    // Weight-back divergence (16 consequences)
    { from: 'weight-back', to: 'lumbar-stress-fractures', mechanism: 'Hiperextensión + carga asimétrica', strength: 'direct' },
    { from: 'weight-back', to: 'achilles-tendonitis', mechanism: 'Sobrecarga de gastrocnemius', strength: 'direct' },
    { from: 'weight-back', to: 'anterior-knee-pain', mechanism: 'Quads como freno', strength: 'direct' },
    // ... (all 16 consequences)
  ],

  usageRules: [
    {
      rule: 'Given an injury → traverse graph backwards to identify potential causative faults',
      purpose: 'Root cause analysis'
    },
    {
      rule: 'Given a fault → traverse graph forwards to alert about future injury risks',
      purpose: 'Prevention'
    },
    {
      rule: 'Identify the most upstream "root" fault in the chain. Correct that first.',
      purpose: 'Priority correction'
    },
    {
      rule: 'If treatment does not include correction of causative fault → flag as incomplete',
      purpose: 'Treatment validation'
    }
  ]
};
```

### 5.4 `InjuryPhase`

```typescript
enum InjuryPhase {
  ACUTE = 'acute',
  SUBACUTE = 'subacute',
  CHRONIC = 'chronic'
}

interface PhaseTreatmentPermissions {
  ice: boolean;
  deepHeat: boolean;
  nsaids: boolean;
  steroids: boolean;
  exercise: boolean;
  stretching: boolean;
  massage: boolean;
}

const injuryPhasePermissions: Record<InjuryPhase, PhaseTreatmentPermissions> = {
  [InjuryPhase.ACUTE]: {
    ice: true,
    deepHeat: false, // contraindicated
    nsaids: false, // interferes with healing
    steroids: false, // stops healing completely
    exercise: true, // but only non-injured areas, immediately
    stretching: false,
    massage: false
  },
  [InjuryPhase.SUBACUTE]: {
    ice: true, // conditional: only if swelling persists
    deepHeat: true, // by physiotherapist
    nsaids: true, // conditional: only if inflammation excessive + accurate diagnosis
    steroids: false, // still generally contraindicated
    exercise: true, // progressive
    stretching: true, // conditional: gentle, warm tissue, after strengthening
    massage: true // conditional
  },
  [InjuryPhase.CHRONIC]: {
    ice: false,
    deepHeat: true,
    nsaids: true, // conditional
    steroids: true, // conditional: hydrocortisone local, chronic only, accurate diagnosis
    exercise: true, // full program
    stretching: true, // with strengthening
    massage: true
  }
};
```

### 5.5 `Eng ram` / Motor Learning Parameters

```typescript
const motorLearningRules = {
  concept: 'engram',
  definition: 'Pre-programmed automatic multi-muscular patterns',
  
  formationRequirements: {
    repetitionCount: 'hundreds of thousands to millions',
    accuracyRequirement: '100% - every repetition must be identical',
    initialSpeed: 'slow enough to be accurate',
    progression: 'slow → fast only after accuracy established'
  },
  
  criticalWarnings: [
    'Inaccuracies during learning become "bad habits" which are themselves engrams',
    'Once a faulty engram is established, correction requires re-learning from scratch',
    'Inhibition of unwanted movements is achieved ONLY by accurate repetition, not by conscious effort',
    'Short cuts never lead to satisfactory results'
  ],
  
  systemImplications: [
    'Exercise instructions must emphasize accuracy over speed in early learning',
    'Progression criteria must include form accuracy, not just reps/weight',
    'Bad form detected early must trigger immediate correction, not gradual correction',
    'The system should track form quality, not just volume',
    'Technical correction classes should be part of injury rehabilitation (one-to-one or one-to-two basis)'
  ],
  
  source: 'Sección 1.3 (pp. 19–20), Sección 5 intro (p. 178–179)'
};
```

### 5.6 `RehabilitationTimeline`

```typescript
const rehabilitationTimeline = {
  immobilizationRecovery: {
    rule: 'geometric, not arithmetic',
    example: '4 weeks immobilization takes 4-5x longer to recover than 2 weeks (not 2x)',
    source: 'Sección 2.4 (p. 78)'
  },
  
  muscleWastingOnset: {
    timeline: '2-3 days post-injury/immobilization',
    vmoPriority: 'First to atrophy, hardest to rebuild, activates only in last 15° extension',
    source: 'Sección 2.3 (p. 77), Sección 5.11 (p. 194)'
  },
  
  collagenHealing: {
    timeline: '~2 weeks for sufficient strength, continues strengthening for weeks',
    source: 'Sección 2.1 (pp. 66-67)'
  },
  
  depressionPeak: {
    timeline: '~5 weeks post-injury',
    management: 'Anticipate and normalize. Reassure. If known in advance, warn the dancer.',
    source: 'Sección 2.3 (pp. 76-77)'
  },
  
  cardioFitnessDecline: {
    timeline: 'Immediate upon cessation of activity',
    management: 'Maintain cardio-respiratory fitness through alternative exercises (swimming, cycling, cross-country skiing)',
    source: 'Sección 2.3 (p. 76)'
  },
  
  stressFractureXrayWindow: {
    metatarsals: '10-14 days minimum',
    tibia: 'several weeks to months',
    lumbar_pars: '1-2 months or longer',
    rule: 'Treatment must start from CLINICAL diagnosis, NOT wait for X-ray confirmation',
    source: 'Sección 2.2 (p. 70), 3.16 (p. 118), 3.27 (pp. 126-128), 3.51 (p. 142)'
  },
  
  lumbarStressFractureProtocol: {
    immobilization: '4 months (plaster or corset in compliant dancers)',
    during: 'Exercise limb muscles. Limited barre work (legs low) when pain-free.',
    after: '≥2 months trunk strengthening before gradual return',
    alternative: 'Corset instead of plaster ONLY in 100% compliant dancers under close supervision',
    source: 'Sección 3.51 (pp. 141-143)'
  },
  
  achillesRuptureProtocol: {
    surgicalWindow: '≤24 hours (ideal)',
    immobilization: '~6 weeks',
    returnToFullActivity: 'up to 6 months',
    note: 'Even with good surgical repair, this injury frequently spells the end of an active performing career',
    source: 'Sección 3.10 (p. 113)'
  }
};
```

---

## Resumen de implementación

| # | Entregable | Contenido | Integración |
|---|---|---|---|
| 1 | `rules/technical-faults.ts` | 20 fallos técnicos con causas, consecuencias, corrección, assessment | Motor de reglas + SkillPath + validación de cues |
| 2 | `rules/injury-safety-constraints.ts` | 30 hard constraints (contraindicaciones absolutas y condicionales) | Motor de reglas → verificar SIEMPRE antes de prescribir cualquier ejercicio/tratamiento |
| 3 | `skillPaths/ankle-rehab.ts` + `foot-strengthening.ts` + `pointe-progression.ts` | 3 SkillPaths completos con steps, criteria, warnings | SkillPath/SkillStep del sistema |
| 4 | `rules/weight-placement.ts` | Definición de línea de gravedad, 16 causas, 16 consecuencias, protocolo de corrección | Motor de reglas + assessment + validación de tratamiento |
| 5 | Extensiones de modelo de datos | TissueRegenerationType, ProprioceptionDeficit, TechnicalFaultGraph, InjuryPhase, MotorLearningRules, RehabilitationTimeline | Modelo de datos global del sistema |
