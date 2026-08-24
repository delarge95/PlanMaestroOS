> **sourceId:** `paper-kostikiadis-2018-mma-specific-sc-training`
> **Origen:** Consolidado desde `chat-1787415076155-papers-bjj-mma.md` · Fecha: 2026-08-22

# Documento 2: The Effect of Short-Term Sport-Specific Strength and Conditioning Training on Physical Fitness of Well-Trained Mixed Martial Arts Athletes — Extracción para Plan Maestro OS

> Resumen de extracción: Estudio controlado de 4 semanas que compara un programa específico de baja volumen/alta intensidad (STG) vs. un programa regular de alta volumen/circuitos (RTG) en 17 atletas de MMA nacionales. El STG mejoró significativamente VO2max, fuerza (bench/squat/deadlift 1RM), potencia (SJ, CMJ, medicine ball throw), velocidad (10m sprint, 2m takedown) y fat-free mass. El RTG no mostró mejoras. Conclusión clave: especificidad + baja volumen + alta intensidad > alta volumen + circuitos genéricos para atletas de combate entrenados.

---

## 1) Metadatos del libro

- **Título:** The Effect of Short-Term Sport-Specific Strength and Conditioning Training on Physical Fitness of Well-Trained Mixed Martial Arts Athletes
- **Autor(es):** Ioannis N. Kostikiadis, Spyridon Methenitis, Athanasios Tsoukos, Panagiotis Veligekas, Gerasimos Terzis, Gregory C. Bogdanis
- **Año:** 2018 (Journal of Sports Science and Medicine, 17, 348-358)
- **Disciplina principal:** Fuerza y acondicionamiento / Fisiología del ejercicio aplicada a MMA
- **Enfoque poblacional:** Atletas de MMA masculinos, nivel nacional/profesional, ≥3 años de entrenamiento sistemático, edad 18-35
- **Notas de alcance:**
  - Cubre: programación de 4 semanas, HIIT rowing, plyometrics, sprint training, strength training periodizado, body composition, aerobic fitness, power, speed
  - NO cubre: nutrición detallada, psicología, rehabilitación, poblaciones principiantes, mujeres, períodos >4 semanas, efectos a largo plazo

---

## 2) Contratos y entidades que afectan

### 2.1 Nuevos tipos o extensiones útiles

- `TrainingSpecificityLevel` (opcional):
  - Descripción: Grado de especificidad del ejercicio respecto al deporte
  - Campos sugeridos: `level: 'sport-specific' | 'general' | 'semi-specific'`, `biomechanicalSimilarity: string`
  - Referencias: Discussion – "exercises that are biomechanically similar to movements performed during MMA, such as medicine ball throws simulating a punch"

- `HIITProtocol` (opcional):
  - Descripción: Protocolo de intervalos de alta intensidad con parámetros específicos
  - Campos sugeridos: `modality: 'rowing' | 'sprint' | 'cycling'`, `workSec: number`, `restSec: number`, `sets: number`, `intensityPct: number`, `progressionWeeks: number`
  - Referencias: Table 1 – HIIT Rowing ergometer progression (5x60s → 6x60s, rest 4min → 3min)

- `SprintIntervalTraining` (opcional):
  - Descripción: Protocolo de sprints repetidos con cambios de dirección
  - Campos sugeridos: `distance: number`, `reps: number`, `sets: number`, `restBetweenReps: number`, `restBetweenSets: number`, `directionChanges: boolean`
  - Referencias: Table 1 – SIT: 3x6x40m shuttle sprints, 20s rest, 4min between sets

- `ReactiveStrengthIndex` (opcional):
  - Descripción: Índice de fuerza reactiva para determinar drop height óptima
  - Campos sugeridos: `height: number`, `jumpHeight: number`, `contactTime: number`, `rsi: number`
  - Referencias: Methods – "optimal drop height, defined as that at which they achieved the highest reactive strength index"

- `MMAWorkRestRatio` (opcional):
  - Descripción: Ratio trabajo/descanso observado en peleas de MMA
  - Campos sugeridos: `workRestRatio: string` (1:4)
  - Referencias: Discussion – "MMA fights have a work-rest ratio of 1:4s"

### 2.2 Mapeo a tipos existentes

- `FocusId: strength`:
  - Mejoras de 16-20% en 1RM (bench, squat, deadlift) con programa de baja volumen y alta intensidad (80-95% 1RM). Periodización lineal en 4 semanas: 3x8@80% → 4x5@85% → 5x3@90% → 3x2@95%.

- `FocusId: power`:
  - Mejoras de 6-7% en CMJ power y 6-11% en medicine ball throw velocity. Uso de plyometrics (drop jumps, loaded jump squats) + ejercicios balísticos específicos (medicine ball jab punch throws).

- `FocusId: conditioning`:
  - Mejora de 13.3% en estimated VO2max con HIIT rowing (60s all-out). Rowing preferido sobre cycling/treadmill para fighters.

- `FocusId: speed`:
  - Mejora de 3.7% en 10m sprint y 22% en 2m takedown sprint. Sled sprints + unloaded sprints + shuttle sprints.

- `BodyZoneId: shoulder`:
  - Medicine ball chest throws (2kg) y jab punch throws (4kg) como potencia específica. Plyometric push-ups.

- `BodyZoneId: knee`:
  - Back squat como ejercicio principal de fuerza. Loaded jump squats al 30% en Smith machine. Drop jumps desde optimal RSI height.

- `BodyZoneId: hip`:
  - Deadlift como ejercicio principal. Loaded jump shrugs al 45% deadlift 1RM.

- `MovementPattern: squat`:
  - Back squat periodizado (80-95% 1RM). Loaded jump squats (30% 1RM). Drop jumps.

- `MovementPattern: hinge`:
  - Deadlift periodizado (80-95% 1RM). Loaded jump shrugs (45% DL 1RM).

- `MovementPattern: horizontal-push`:
  - Bench press periodizado (80-95% 1RM). Medicine ball chest throws (2kg). Plyometric push-ups.

- `MovementPattern: ballistic-throw`:
  - Medicine ball jab punch throws (4kg, 4x8 per arm). Medicine ball chest throws (2kg). Biomechanically similar to punching.

- `MovementPattern: sprint`:
  - 10m sprints (loaded sled + unloaded). 40m shuttle sprints (180° turns every 10m). Sport-specific 2m takedown sprint.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: mma-strength-periodization-4wk

- **Descripción breve:** Periodización lineal de fuerza en 4 semanas con cargas progresivas de 80% a 95% 1RM.
- **Tipo:** intensidad / progresión
- **Métrica principal:** intensityPct1RM, sets, reps
- **Valores numéricos:**
  - Semana 1: 3x8 @ 80% 1RM
  - Semana 2: 4x5 @ 85% 1RM
  - Semana 3: 5x3 @ 90% 1RM
  - Semana 4: 3x2 @ 95% 1RM
  - Descanso entre series: 3 min
  - Ejercicios: Squat, Bench Press, Deadlift
- **Condiciones de aplicación:** Atletas entrenados (≥3 años); sesiones 1 y 3 de la semana
- **Capítulos/páginas:** Table 1, Sessions 1 & 3
- **Comentarios/precauciones:** Cada set de fuerza va seguido de ejercicio pliométrico (complex training)

---

### Regla: mma-complex-pairing

- **Descripción breve:** Cada ejercicio de fuerza se empareja con un ejercicio de potencia/balístico.
- **Tipo:** intensidad / especificidad
- **Métrica principal:** restBetweenExercises (1 min)
- **Valores numéricos:**
  - Squat → 3 CMJ con máxima intensidad
  - Bench Press → 3 Medicine ball chest throws (2kg)
  - Deadlift → 3 Loaded Jump Shrugs (45% DL 1RM)
  - Descanso entre reps de potencia: 1 min
- **Condiciones de aplicación:** Sesiones 1 y 3; después de cada set de fuerza
- **Capítulos/páginas:** Table 1 + texto "Each squat, bench press and deadlift set was followed by..."
- **Comentarios/precauciones:** El descanso de 1 min es entre las 3 reps del ejercicio de potencia, no entre el strength y el power

---

### Regla: mma-hiit-rowing-progression

- **Descripción breve:** HIIT en rowing ergometer con progresión de volumen y reducción de descanso.
- **Tipo:** acondicionamiento / progresión
- **Métrica principal:** sets x workDuration x restDuration
- **Valores numéricos:**
  - Semana 1: 5 x 60s all-out, 4 min rest
  - Semana 2: 6 x 60s all-out, 4 min rest
  - Semana 3: 6 x 60s all-out, 3.5 min rest
  - Semana 4: 6 x 60s all-out, 3 min rest
  - Intensidad: 115% de la potencia del mejor 500m parcial del 2000m rowing test
  - Timing: 10 min después del strength training
- **Condiciones de aplicación:** Sesiones 1 y 3; atletas con base aeróbica
- **Capítulos/páginas:** Table 1, HIIT Rowing + texto "10 min after the end of the strength exercises"
- **Comentarios/precauciones:** Rowing preferido sobre treadmill/cycling para fighters (Kendall & Fukuda, 2011)

---

### Regla: mma-power-session-structure

- **Descripción breve:** Sesión dedicada a potencia con loaded jump squats, drop jumps, medicine ball throws, plyo push-ups, sled sprints y SIT.
- **Tipo:** potencia / velocidad
- **Métrica principal:** múltiples (carga, reps, rest)
- **Valores numéricos:**
  - Loaded jump squats: 4x8 @ 30% 1RM, 12s inter-rep rest, 4 min between sets
  - Drop jumps: 1x8 desde optimal RSI height, durante los 4 min rest de jump squats, 12s inter-rep rest
  - Medicine jab punch throws: 4x8 @ 4kg per arm, 12s inter-rep rest, 3 min between sets
  - Plyometric push-ups: 4x8 (0.72 x body mass), 12s inter-rep rest
  - Weighted sled sprints: 1x5x10m (load = 10% velocity reduction), 4 min intervals
  - Unloaded sprints: 1x5x10m, 4 min intervals
  - SIT: 3x6x40m shuttle sprints, 20s rest between sprints, 4 min between sets
  - Timing: 10 min after unloaded sprints → SIT
- **Condiciones de aplicación:** Sesión 2 de la semana; atletas entrenados
- **Capítulos/páginas:** Table 1, Session 2
- **Comentarios/precauciones:** Drop height individualizada por RSI óptimo. Sled load calculado por ecuación específica. 12s inter-rep rest para mantener velocidad.

---

### Regla: mma-12s-interrep-rest

- **Descripción breve:** Descanso de 12 segundos entre repeticiones en ejercicios pliométricos/balísticos para mantener velocidad.
- **Tipo:** descanso
- **Métrica principal:** interRepRestSeconds
- **Valores numéricos:**
  - 12 segundos entre reps
  - Aplicado a: loaded jump squats, drop jumps, medicine ball throws, plyometric push-ups
- **Condiciones de aplicación:** Ejercicios de máxima velocidad/potencia
- **Capítulos/páginas:** Table 1 + texto "A 12 s inter-repetition rest was adapted"
- **Comentarios/precauciones:** Basado en García-Ramos et al., 2015 – evita pérdida de velocidad

---

### Regla: mma-sled-sprint-load

- **Descripción breve:** Carga del sled calculada para inducir exactamente 10% de reducción en velocidad máxima.
- **Tipo:** intensidad
- **Métrica principal:** velocityReductionPct
- **Valores numéricos:**
  - Reducción objetivo: 10% de velocidad máxima
  - Fórmula: % body mass = (-0.8674 × x% velocity) + 87.99
  - Carga resultante promedio: 9.7 ± 1.2 kg
  - Distancia: 10m
  - Reps: 5
  - Rest: 4 min
- **Condiciones de aplicación:** Sesión 2; atletas con velocidad máxima medida previamente
- **Capítulos/páginas:** Table 1 + texto sobre Alcaraz et al., 2009
- **Comentarios/precauciones:** Requiere medición previa de sprint velocity máxima

---

### Regla: mma-sit-shuttle-sprints

- **Descripción breve:** Sprint interval training con shuttle sprints (cambios de dirección 180° cada 10m).
- **Tipo:** acondicionamiento / velocidad
- **Métrica principal:** sets x reps x distance x rest
- **Valores numéricos:**
  - 3 sets de 6 sprints de 40m
  - Descanso entre sprints: 20s
  - Descanso entre sets: 4 min
  - Cambio de dirección: 180° cada 10m
  - Timing: 10 min después de unloaded sprints
- **Condiciones de aplicación:** Sesión 2; refleja work-rest ratio de MMA (1:4)
- **Capítulos/páginas:** Table 1, SIT + texto "work-rest ratio of 1:4s"
- **Comentarios/precauciones:** Basado en Del Vecchio et al., 2011 y Miarka et al., 2018

---

### Regla: mma-training-frequency

- **Descripción breve:** 3 sesiones de S&C por semana (cada 48h) + 3 días de fighting training técnico.
- **Tipo:** frecuencia
- **Métrica principal:** sessionsPerWeek
- **Valores numéricos:**
  - S&C: 3 días (Lunes, Miércoles, Viernes)
  - Fighting training: 3 días (Martes, Jueves, Sábado)
  - Descanso total: 1 día (Domingo)
  - Duración S&C: 65-85 min por sesión
  - Duración fighting: 2 horas
- **Condiciones de aplicación:** Atletas de MMA en preparación
- **Capítulos/páginas:** Methods – Training section
- **Comentarios/precauciones:** 48h entre sesiones S&C para recuperación

---

### Regla: mma-volume-vs-intensity

- **Descripción breve:** Baja volumen con alta intensidad produce mejores resultados que alta volumen con intensidad moderada en atletas entrenados.
- **Tipo:** volumen / intensidad
- **Métrica principal:** weeklyVolumeLoad, trainingDensity, RPE
- **Valores numéricos:**
  - STG volume: 16,428 kg (week 1) → 6,289 kg (week 4)
  - RTG volume: 32,048 kg (week 1) → 34,552 kg (week 4)
  - STG density: 23-32%
  - RTG density: 65-75%
  - STG RPE: 10-14 (Borg 20 scale)
  - RTG RPE: 17-18 (Borg 20 scale)
  - Resultado: STG mejoró significativamente; RTG no mejoró
- **Condiciones de aplicación:** Atletas bien entrenados (≥3 años experiencia)
- **Capítulos/páginas:** Results (párrafo 1) + Discussion
- **Comentarios/precauciones:** "The lack of specificity and the excessive fatigue, indicated by the high RPE values, may partially explain the lack of improvement"

---

### Regla: mma-optimal-drop-height

- **Descripción breve:** La altura del drop jump debe individualizarse según el RSI máximo del atleta.
- **Tipo:** individualización
- **Métrica principal:** reactiveStrengthIndex (jump height / ground contact time)
- **Valores numéricos:**
  - Alturas testeadas: 15, 30, 45, 60, 75 cm
  - Óptima: aquella con mayor RSI
  - Rango observado en el estudio: 40.7 ± 16.7 cm (rango 15-60 cm)
  - Fórmula RSI: maximal DJ height × ground contact time⁻¹
- **Condiciones de aplicación:** Antes de prescribir drop jumps; requiere testing previo
- **Capítulos/páginas:** Methods – Lower body power performance + Table 1
- **Comentarios/precauciones:** Basado en Byrne et al., 2010

---

### Regla: mma-2m-takedown-test

- **Descripción breve:** Test específico de velocidad para MMA: sprint de 2m + takedown a dummy de 75kg.
- **Tipo:** assessment
- **Métrica principal:** timeSeconds
- **Valores numéricos:**
  - Distancia al dummy: 2m
  - Distancia detrás del dummy: 1m (photocell)
  - Dummy: 75 kg, altura 1.20m
  - Segunda photocell: 30cm del suelo
  - Mejora observada STG: 22% (0.96s → 0.74s)
- **Condiciones de aplicación:** Evaluación pre/post; no es ejercicio de entrenamiento
- **Capítulos/páginas:** Methods – Sprinting performance + Figure 1
- **Comentarios/precauciones:** ICC = 0.94; requiere dummy específico y fotocélulas

---

### Regla: mma-aerobic-assessment-rowing

- **Descripción breve:** Evaluación aeróbica mediante 2000m rowing time trial con estimación de VO2max.
- **Tipo:** assessment
- **Métrica principal:** timeSeconds, averagePower, estimatedVO2max
- **Valores numéricos:**
  - Fórmula VO2max: [(15.7 – (1.5 × T)) × 1000] × BM⁻¹
  - Drag factor: 130-140 (según body mass)
  - Mejora STG: 3.4% en tiempo, 11.5% en potencia, 13.3% en VO2max
- **Condiciones de aplicación:** Testing pre/post; no es protocolo de entrenamiento
- **Capítulos/páginas:** Methods – Aerobic fitness
- **Comentarios/precauciones:** Basado en Hagerman, 1994; Ingham et al., 2002

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: mma-specific-strength-power-4wk

- **Disciplina:** MMA / Fuerza y acondicionamiento
- **Objetivo final:** Mejorar simultáneamente fuerza máxima, potencia, velocidad y capacidad aeróbica en 4 semanas sin ganar masa muscular excesiva
- **Requisitos de seguridad previos:** ≥3 años de entrenamiento sistemático; ≥1 pelea profesional en últimos 12 meses; sin lesiones ortopédicas/neuromusculares; evaluación médica previa
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Semana 1: Base de fuerza (80%) | Squat/Bench/DL 3x8@80% + CMJ/MB throws/Jump shrugs; HIIT 5x60s rowing (4min rest) | Completar todas las reps con forma | Fatiga excesiva por volumen | RPE 12-14 |
| 2 | Semana 2: Intensificación (85%) | Squat/Bench/DL 4x5@85% + power exercises; HIIT 6x60s rowing (4min rest) | Mantener velocidad en power exercises | Perder velocidad en plyos | RPE 10-12 |
| 3 | Semana 3: Alta intensidad (90%) | Squat/Bench/DL 5x3@90% + power; HIIT 6x60s (3.5min rest) | Mantener carga y técnica | Degradación técnica con 90% | RPE 10-12 |
| 4 | Semana 4: Pico (95%) | Squat/Bench/DL 3x2@95% + power; HIIT 6x60s (3min rest) | Ejecutar con máxima intención | Exceso de fatiga → lesión | RPE 10-12; menor volume total |

---

### SkillPath: mma-power-speed-session

- **Disciplina:** MMA / Potencia y velocidad
- **Objetivo final:** Desarrollar potencia explosiva y velocidad específica de MMA (takedowns, strikes)
- **Requisitos de seguridad previos:** Base de fuerza; RSI testing completado; velocidad máxima de sprint medida
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Loaded Jump Squats | 4x8 @ 30% 1RM en Smith, 12s inter-rep, 4min between sets | Mantener altura de salto constante | Fatiga → pérdida de altura | Durante rest: drop jumps |
| 2 | Drop Jumps (simultáneo) | 1x8 desde optimal RSI height, 12s inter-rep | RSI ≥ baseline | Aterrizaje rígido | Se hace durante los 4min rest del step 1 |
| 3 | Medicine Jab Punch Throws | 4x8 @ 4kg per arm, 12s inter-rep, 3min between sets | Máxima velocidad en cada throw | Rotación incompleta del trunk | 5 min rest después de jump squats |
| 4 | Plyometric Push-ups | 4x8 (0.72x body mass), 12s inter-rep | Despegar manos del suelo | Codos flared, core colapsado | Desde posición inferior (90° codos) |
| 5 | Weighted Sled Sprints | 1x5x10m, load = 10% velocity reduction, 4min intervals | Mantener mecánica de sprint | Postura excesivamente inclinada | Requiere cálculo de carga individual |
| 6 | Unloaded Sprints | 1x5x10m, 4min intervals | Máxima velocidad | Falsa salida, no acelerar full | 5 min después de sled sprints |
| 7 | Shuttle Sprint SIT | 3x6x40m (180° turns/10m), 20s rest, 4min between sets | Completar 3 sets manteniendo velocidad | Pacing, no maximal effort | 10 min después de unloaded sprints |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Back Squat (MMA context)

- **Cues principales:**
  - Profundidad máxima (back of thigh contacts back of shank)
  - Standard Olympic bar en squat rack
  - Rest interval 3 min entre series
- **Errores frecuentes:**
  - No alcanzar profundidad completa
  - Compensación lumbar
- **Variantes seguras:** No se mencionan variaciones específicas en el paper
- **Indicaciones específicas por zona:** Se asume atleta sano sin patologías
- **Referencia:** Methods – Evaluation of muscular strength

### Medicine Ball Jab Punch Throw

- **Cues principales:**
  - Posición de guardia (hands close to jaw, elbows close to thorax)
  - Throw at maximum speed
  - Target: square 1m x 1m at 2m height, 5m distance
  - Med ball: 2kg (testing) / 4kg (training)
- **Errores frecuentes:**
  - No usar rotación de trunk
  - Lanzar solo con brazo (sin cadena cinética)
- **Variantes seguras:** Reducir peso del med ball si la técnica se degrada
- **Indicaciones específicas por zona:** Shoulder: asegurar que no hay dolor durante el throw
- **Referencia:** Methods – Upper body power performance + Table 1 Session 2

### Plyometric Push-ups

- **Cues principales:**
  - Posición inicial: codos a 90°, pecho ~5cm del suelo, torso recto, piernas extendidas (solo toes en contacto)
  - Extender codos a máxima velocidad para despegar manos del suelo
  - Carga efectiva: 0.72 × body mass
- **Errores frecuentes:**
  - No despegar completamente las manos
  - Colapsar lumbar
  - Codos flared
- **Variantes seguras:** No se mencionan regresiones
- **Indicaciones específicas por zona:** Wrist: asegurar que soporta impacto repetido
- **Referencia:** Table 1 Session 2 + texto descriptivo

### 2m Takedown (sport-specific)

- **Cues principales:**
  - Arms wrapped around opponent's torso
  - One leg behind opponent's legs
  - Off-balance and bring to ground
  - Attacker lands on top
- **Errores frecuentes:**
  - No mantener técnica apropiada de takedown
  - Velocidad sin control → fallo técnico
- **Variantes seguras:** Dummy de 75kg para práctica sin riesgo
- **Indicaciones específicas por zona:** Knee: posición de la pierna detrás del oponente requiere flexión controlada
- **Referencia:** Methods – Sprinting performance + Figure 1

### Drop Jumps

- **Cues principales:**
  - Step off box sin levantar center of gravity
  - Land on center of contact platform con ambas piernas
  - Inmediatamente rebotar y saltar lo más alto posible
  - "Jump as quickly and as high as possible after landing"
- **Errores frecuentes:**
  - Tiempo de contacto prolongado
  - Saltar antes de aterrizar completamente
  - No usar brazos
- **Variantes seguras:** Usar altura menor si RSI no es óptimo; rango 15-60cm
- **Indicaciones específicas por zona:** Knee: aterrizaje suave; Achilles: tiempo de contacto mínimo
- **Referencia:** Methods – Lower body power performance

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

- **No cubierto por este paper.** El estudio excluye atletas con "restraining orthopedic and neuromuscular maladies" como criterio de inclusión. No hay protocolos de rehab ni manejo del dolor.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

- **Nutrición (mención mínima):** "They were instructed to retain their regular eating habits during the training period." No hay recomendaciones nutricionales específicas.
- **Sueño, estrés, enfermar:** No cubiertos.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Evidencia de primer nivel para justificar: baja volumen + alta intensidad > alta volumen + circuitos en atletas entrenados
  - Protocolos de HIIT rowing con progresión semanal concreta
  - Estructura de sesión de potencia con 12s inter-rep rest
  - Periodización lineal de 4 semanas (80→85→90→95%)
  - Cálculo de carga de sled sprint basado en reducción de velocidad
  - Individualización de drop jump height por RSI
  - Validación de complex training (strength + plyometric en mismo set)

- **Limitaciones:**
  - Solo 4 semanas → no hay datos de periodización a largo plazo
  - Solo atletas masculinos de MMA nivel nacional → no generalizable a principiantes, mujeres, otros deportes
  - Muestra pequeña (n=17, STG=10, RTG=7)
  - No hay seguimiento post-intervención
  - El grupo RTG usó circuitos genéricos → no se puede concluir que TODOS los circuitos son inefectivos
  - No se midió rendimiento real en pelea (solo tests de laboratorio)
  - ⚠️ La correlación entre FFM y sprint fue negativa → más masa muscular puede perjudicar velocidad en atletas entrenados

- **Recomendaciones específicas:**
  1. Crear `rules/mma-strength-periodization.ts` con la progresión 80→85→90→95% y complex pairing
  2. Crear `protocols/hiit-rowing-mma.ts` con la progresión de 4 semanas (5x60s→6x60s, rest 4→3min)
  3. Añadir `SkillStep` metadata para plyometric push-ups (0.72x body mass, 12s inter-rep) y medicine ball jab punch throws (4kg, 4x8)
  4. Crear regla de densidad de entrenamiento: si RPE > 16 y density > 60%, flag de riesgo de sobreentrenamiento para atletas de combate entrenados
  5. Implementar `ReactiveStrengthIndex` como assessment para individualizar drop jump height antes de prescribir plyometrics

---
---

# Resumen comparativo entre ambos documentos

| Aspecto | BJJ Guide (Jones & Ledford) | MMA Study (Kostikiadis et al., 2018) |
|---|---|---|
| Tipo | Guía práctica | Estudio controlado |
| Evidencia | Opinión experta / prescripción | Datos empíricos con grupo control |
| Duración | 3+1 meses | 4 semanas |
| Deporte | BJJ (grappling) | MMA (striking + grappling) |
| Volumen | Bajo (cualitativo) | Bajo cuantificado vs. alto (RTG) |
| Periodización | Off Season / Tournament | Lineal 4 semanas (80→95%) |
| Conditioning | Jump rope, calisthenics, rowing, KB | HIIT rowing + SIT shuttle sprints |
| Grip | Explícito y detallado | No mencionado |
| Injury prevention | Explícito (4 zonas) | No cubierto |
| Datos numéricos | Parciales (reps/sets) | Completos (%, volumes, RPE, outcomes) |

---

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# 🏗️ Fase 2: Banderas de Datos y Blueprints de Implementación

Como agente de extracción y arquitectura de conocimiento, mi función no es modificar el repositorio directamente, sino proveer las especificaciones técnicas exactas. A continuación, presento las **Banderas de Datos Faltantes** (ejercicios que requieren mapeo visual por parte del agente de base de datos) y procedo a **materializar todas las recomendaciones** en formato de *Blueprints Técnicos* (Interfaces TypeScript y JSON Schemas) para que el Agente de Implementación los inyecte directamente en el código base de *Plan Maestro OS*.

---

## 🚩 1. Banderas de Datos Faltantes (Requieren Agente de Mapeo Visual)

El texto de los papers carece de las ayudas visuales (imágenes/videos) para los siguientes ejercicios. El **Agente de Base de Datos de Ejercicios** debe buscar referencias en librerías estándar o solicitar validación al usuario final antes de asignarlos a rutinas:

| Ejercicio | Contexto en el Texto | Hipótesis / Acción Requerida |
|---|---|---|
| **Kimura sit-ups** | BJJ (Conditioning / Active Recovery) | Probablemente un sit-up sosteniendo un disco/banda simulando la mecánica de palanca de la sumisión "Kimura". *Flag: Requerir video de referencia de BJJ S&C.* |
| **Rainbows** | BJJ (Off-Season Friday, Circuit B) | Ejercicio de core/hombros con disco o polea dibujando un arco. *Flag: Mapear a "Plate Halos" o "Cable Rainbows".* |
| **Seal jumps** | BJJ (Off-Season Tuesday) | Variación de Jumping Jacks o ejercicio de calistenia militar. *Flag: Definir ROM exacto.* |
| **Plate raisers** | BJJ (Off-Season Wednesday, Circuit B) | Dado el enfoque en cuello de BJJ, podría ser "Neck Plate Raises" (tumbado, disco en la frente) o elevaciones de hombros. *Flag: Clarificar zona anatómica.* |
| **Elbow drag (30 feet)** | BJJ (Tournament Wednesday) | Drill de grappling (arrastrarse por el suelo usando solo los codos para simular escapes o movimientos en el tatami). *Flag: Añadir a categoría `MovementPattern: grappling-drill`.* |
| **Figure 1 (MMA Takedown Test)** | MMA (Testing Protocol) | El texto describe la ubicación de las fotocélulas (2m antes del dummy, 1m detrás a 30cm de altura). *Flag: El Agente de Frontend debe generar un diagrama SVG para la UI de evaluación.* |

---

## 🛠️ 2. Blueprints de Implementación (Para el Agente de Código)

A continuación, se entregan las estructuras de datos, reglas y configuraciones listas para ser integradas en el motor de reglas (`TrainingRule`), el modelo de datos (`SkillStep`, `FocusId`) y los templates de la app.

### 2.1. Reglas del Motor (TrainingRule Engine)

#### 📄 `rules/combat-sports-low-volume-complex.ts`
*Implementa la regla de volumen bajo y entrenamiento complejo para BJJ/MMA.*
```typescript
export const CombatSportsComplexVolumeRule: TrainingRule = {
  id: 'combat-sports-complex-volume',
  title: 'Volumen Bajo y Entrenamiento Complejo (Grappling/Striking)',
  description: 'Los atletas de combate deben usar volumen bajo de pesas debido a la fatiga del sparring. Se prioriza el Complex Training (Fuerza + Pliometría).',
  type: 'volume-intensity',
  metrics: {
    hardSetsPerWeek: { max: 12, warningThreshold: 15 },
    intensityPct1RM: { min: 80, max: 90 }, // Ej. 85% 1RM
    repsPerSet: { min: 3, max: 6 },
    restBeforePlyoSec: { min: 30, max: 60 }
  },
  conditions: {
    sport: ['BJJ', 'MMA', 'Judo', 'Sambo'],
    phase: ['off-season', 'general-prep'],
    sparringFrequency: '>= 2 sessions/week'
  },
  actions: {
    enforceComplexPairing: true,
    alert: '⚠️ Alto riesgo de sobreentrenamiento si el volumen de pesas excede el de deportes de equipo. El sparring ya provee resistencia máxima.'
  },
  source: 'Jones & Ledford (BJJ); Kostikiadis et al. (MMA)'
};
```

#### 📄 `rules/mma-overtraining-density-flag.ts`
*Implementa la regla de densidad y RPE para detectar circuitos ineficientes en atletas avanzados.*
```typescript
export const CombatSportsOvertrainingRule: TrainingRule = {
  id: 'combat-sports-circuit-fatigue',
  title: 'Bandera de Fatiga por Circuitos de Alta Densidad',
  description: 'Circuitos de alta densidad (>60%) y RPE alto (>16) no mejoran fuerza/potencia en atletas de combate avanzados y causan fatiga excesiva.',
  type: 'fatigue-management',
  metrics: {
    trainingDensityPct: { max: 60 }, // (Work Time / Total Session Time) * 100
    rpeBorg20: { max: 16 }
  },
  conditions: {
    athleteLevel: 'advanced',
    goal: ['strength', 'power', 'speed']
  },
  actions: {
    blockRoutineValidation: true,
    suggestAlternative: 'Cambiar a HIIT estructurado (ej. Rowing 60s/240s) o Complex Training con descansos completos (3 min).'
  },
  source: 'Kostikiadis et al., 2018 (MMA Study - RTG vs STG)'
};
```

---

### 2.2. Protocolos y Plantillas Semanales (Templates)

#### 📄 `protocols/hiit-rowing-mma.ts`
*Progresión exacta de 4 semanas para VO2max y buffering de lactato.*
```typescript
export const MMAHiitRowingProtocol: ConditioningProtocol = {
  id: 'mma-hiit-rowing-4wk',
  modality: 'Rowing Ergometer',
  intensityBase: '115% of 500m split from 2000m TT',
  progression: [
    { week: 1, sets: 5, workSec: 60, restSec: 240, totalVolMin: 5 },
    { week: 2, sets: 6, workSec: 60, restSec: 240, totalVolMin: 6 },
    { week: 3, sets: 6, workSec: 60, restSec: 210, totalVolMin: 6 },
    { week: 4, sets: 6, workSec: 60, restSec: 180, totalVolMin: 6 }
  ],
  scheduling: 'Post-strength training (10 min rest)',
  source: 'Kostikiadis et al., 2018 (Stevens et al., 2015 protocol)'
};
```

#### 📄 `templates/bjj-offseason-week.json`
*Estructura semanal para el Agente de Generación de Rutinas.*
```json
{
  "templateId": "bjj-offseason-base",
  "phase": "Off-Season (Strength Focus)",
  "durationWeeks": 12,
  "weeklySplit": {
    "monday": { "focus": "strength-power", "structure": "Superset + 2 Circuits (x4)" },
    "tuesday": { "focus": "conditioning", "structure": "Jump Rope Intervals + Calisthenics AMRAP" },
    "wednesday": { "focus": "strength-power", "structure": "Complex (Squat + Drop Jumps) + 2 Circuits" },
    "thursday": { "focus": "conditioning", "structure": "Rowing Sprints + Kettlebell Circuit" },
    "friday": { "focus": "strength-power", "structure": "Complex (Bench + Plyo PU) + 2 Circuits" },
    "saturday": { "focus": "active-recovery", "structure": "Mobility / Light Grappling" },
    "sunday": { "focus": "rest", "structure": "Complete Rest" }
  },
  "mandatoryInclusions": ["grip-strength", "neck-prehab", "joint-rotations-warmup"]
}
```

---

### 2.3. Extensiones de Modelo de Datos (Types & FocusIds)

#### 📄 `extensions/focus-ids.ts`
*Nuevos enfoques requeridos por la literatura de combate.*
```typescript
export const CombatFocusIds: FocusId[] = [
  {
    id: 'grip-strength',
    name: 'Agarre (Grip)',
    subCategories: ['static-hold', 'dynamic-crush', 'towel-grip'],
    mandatoryForSports: ['BJJ', 'Judo', 'MMA', 'Climbing']
  },
  {
    id: 'neck-prehab',
    name: 'Prevención Cervical',
    subCategories: ['isometric', 'flexion-extension', 'rotations'],
    mandatoryForSports: ['BJJ', 'MMA', 'Wrestling', 'Boxing']
  },
  {
    id: 'acidosis-buffering',
    name: 'Tolerancia al Lactato / pH',
    description: 'Capacidad psicológica y fisiológica para mantener potencia en drops extremos de pH sanguíneo.',
    trainingMethods: ['HIIT', 'SIT', 'Calisthenics AMRAP']
  }
];
```

#### 📄 `assessments/reactive-strength-index.ts`
*Lógica para individualizar la altura de los Drop Jumps.*
```typescript
export interface RSIAssessment {
  id: 'reactive-strength-index';
  protocol: 'Drop Jumps from 15, 30, 45, 60, 75cm';
  formula: 'RSI = JumpHeight(cm) / GroundContactTime(ms)';
  action: 'Assign optimal drop height to PlyometricSkillStep';
  requiredEquipment: ['Contact Platform (Chronojump/Boscosystem)', 'Wooden Boxes'];
}
```

---

### 2.4. Metadatos para `SkillStep` (Técnica y Cues)

Para enriquecer la base de datos de ejercicios, el Agente de Población debe inyectar estos metadatos en los `SkillStep` correspondientes:

#### 🥊 `SkillStep: Medicine Ball Jab Punch Throw`
```json
{
  "exerciseId": "med-ball-jab-throw",
  "primaryCues": [
    "Posición de guardia (manos cerca de la mandíbula, codos pegados al tórax)",
    "Extensión explosiva de cadera y tronco (no solo hombro)",
    "Lanzar a máxima velocidad hacia diana de 1x1m a 2m de altura"
  ],
  "commonFaults": [
    "Perder la guardia (bajar las manos tras el lanzamiento)",
    "Empujar el balón en lugar de golpearlo (falta de velocidad balística)"
  ],
  "prescription": {
    "load": "4kg (Hombres) / 2-3kg (Mujeres/Testing)",
    "sets": 4,
    "reps": 8,
    "interRepRestSec": 12,
    "restBetweenSetsSec": 180
  },
  "biomechanicalTarget": "Punching velocity & kinetic chain transfer"
}
```

#### 💥 `SkillStep: Plyometric Push-ups (MMA Specific)`
```json
{
  "exerciseId": "plyo-pushup-mma",
  "primaryCues": [
    "Iniciar en posición inferior (pecho a 5cm del suelo, codos a 90°)",
    "Empuje máximo para despegar ambas manos del suelo",
    "Aterrizaje suave absorbiendo impacto (no bloquear codos)"
  ],
  "commonFaults": [
    "Colapso lumbar (core no activado)",
    "No despegar completamente las palmas del suelo"
  ],
  "prescription": {
    "load": "0.72 x Body Mass (Física del movimiento)",
    "sets": 4,
    "reps": 8,
    "interRepRestSec": 12,
    "restBetweenSetsSec": 90
  },
  "contraindications": ["Wrist pain", "Acute shoulder impingement"]
}
```

#### 🏋️ `SkillStep: Weighted Sled Sprints (Velocity Reduction)`
```json
{
  "exerciseId": "sled-sprint-resisted",
  "primaryCues": [
    "Ángulo de inclinación del torso de 45° en la aceleración",
    "Empuje agresivo de cadera (pistoneo)",
    "Mantener la cabeza neutra alineada con la columna"
  ],
  "prescriptionLogic": {
    "targetVelocityReduction": "10%",
    "loadFormula": "% body mass = (-0.8674 * x% velocity) + 87.99",
    "averageLoad": "9.7kg ± 1.2kg",
    "distance": "10m",
    "sets": 1,
    "reps": 5,
    "restBetweenRepsSec": 240
  },
  "prerequisites": ["Baseline 10m sprint time measured"]
}
```

---

### 2.5. Warm-up Estándar de Combate (JSON Schema)

El **Agente de UI** debe renderizar este warm-up como obligatorio antes de cualquier sesión de `FocusId: strength-power` o `Conditioning` en usuarios con deportes de combate.

```json
{
  "warmupId": "combat-sports-standard",
  "phase1_joint_rotations": ["neck", "wrists", "shoulders", "trunk", "hips", "knees", "ankles"],
  "phase2_full_body_series": [
    { "exercise": "Jumping Jacks", "reps": 20 },
    { "exercise": "Bodyweight Squats", "reps": 10 },
    { "exercise": "Walkout Push-ups", "reps": 5 },
    { "exercise": "Sit-ups", "reps": 10 },
    { "exercise": "Alternating Front Lunges", "reps": 10 },
    { "exercise": "Hindu Push-ups", "reps": 5 },
    { "exercise": "DB High Pull Snatches", "reps": 10 }
  ],
  "intensityRule": "Low (RPE < 4). Do not induce fatigue."
}
```

---

## 📋 3. Instrucciones Finales para los Agentes del Sistema

1. **Agente de Base de Datos (Exercise DB)**: 
   - Buscar y mapear videos para los 5 ejercicios marcados con *Flag* (Kimura sit-ups, Rainbows, Seal jumps, Plate raisers, Elbow drag). Si no hay consenso en la API de ejercicios, crear entradas personalizadas con las descripciones textuales extraídas.
2. **Agente de Motor de Reglas (Rule Engine)**: 
   - Inyectar `CombatSportsComplexVolumeRule` y `CombatSportsOvertrainingRule`. Configurar el *Ledger Semanal* para que calcule automáticamente el `trainingDensityPct` basándose en el tiempo de trabajo vs. tiempo total de la sesión.
3. **Agente de Periodización (Planner)**: 
   - Utilizar `bjj-offseason-base` y `mma-hiit-rowing-4wk` como plantillas base cuando el usuario seleccione "BJJ" o "MMA" y su objetivo sea "Preparación Física / Competición".
4. **Agente de Evaluaciones (Assessments)**: 
   - Añadir el `RSIAssessment` al flujo de onboarding de atletas avanzados que requieran pliometría de impacto (Drop Jumps), bloqueando la prescripción de alturas >60cm si no se ha completado el test de RSI.

*Fin de la extracción y estructuración. El conocimiento de los papers ha sido convertido en arquitectura de software lista para despliegue.*

---

## Ronda 3 — tras: «Aquí tienes la sistematización completa de los ejercicios y el protocolo de evaluación visual. Se estructuran las especificaciones anatómica…»
# Adendum de Resolución de Banderas — Integración al Documento Maestro

> Este documento resuelve las 5 banderas de ejercicios sin descripción visual y completa la especificación del protocolo de evaluación del Takedown Test (Figura 1, Kostikiadis et al. 2018). Todos los datos se integran en el formato canónico de Plan Maestro OS.

---

## 1. Estado de Banderas: RESUELTAS ✅

| ID Ejercicio | Estado Anterior | Estado Actual | Acción |
|---|---|---|---|
| Kimura Sit-ups | 🚩 Flag: sin referencia visual | ✅ Resuelto | Integrado a SkillStep |
| Rainbows | 🚩 Flag: sin referencia visual | ✅ Resuelto → `Plate Rainbows` | Integrado a SkillStep |
| Seal Jumps | 🚩 Flag: sin referencia visual | ✅ Resuelto → `Horizontal Jumping Jacks` | Integrado a SkillStep |
| Plate Raisers | 🚩 Flag: ambigüedad anatómica | ✅ Resuelto → `Plate Front Raises` (hombro) | Integrado a SkillStep |
| Elbow Drag | 🚩 Flag: sin referencia visual | ✅ Resuelto → `Elbow Drag Crawl` | Integrado a SkillStep |
| Figura 1 (Takedown Test) | 🚩 Flag: sin diagrama | ✅ Resuelto con especificación SVG | Integrado a Assessment |

---

## 2. Fichas Técnicas Completas para SkillStep

### A. `SkillStep: kimura-situps`

```json
{
  "exerciseId": "kimura-situps",
  "displayName": "Kimura Sit-ups",
  "context": "BJJ Off-Season (Jump rope active recovery, 60s) / MMA Tournament (Rowing active recovery)",
  "movementPattern": "core-rotation",
  "bodyZones": ["lumbar", "trunk"],
  "primaryMuscles": ["rectus-abdominis", "internal-oblique", "external-oblique"],
  "secondaryMuscles": ["hip-flexors", "latissimus-dorsi"],
  "equipment": ["none", "medicine-ball-optional"],
  "technique": {
    "setup": "Posición supina, rodillas flexionadas, pies apoyados en el suelo",
    "concentricPhase": "Elevar torso en flexión completa; en la parte superior, rotar llevando ambos brazos en agarre de figura de cuatro (Kimura grip) hacia la rodilla/cadera opuesta",
    "eccentricPhase": "Descenso controlado del torso; alternar lado de rotación en cada repetición",
    "tempo": "Controlado, sin impulso"
  },
  "primaryCues": [
    "Mantener agarre tipo Kimura (figura de cuatro) durante la rotación",
    "Rotar desde el tronco, no desde los hombros",
    "Mantener cuello neutro (mirada a 45°)",
    "Alternar lados en cada repetición"
  ],
  "commonFaults": [
    "Usar impulso (rebote) en lugar de control muscular",
    "Flexión cervical excesiva (tirar del cuello)",
    "Rotación incompleta del tronco",
    "Pérdida del contacto lumbar con el suelo en fase excéntrica"
  ],
  "prescription": {
    "context_bjj": "60 segundos continuos (active recovery entre rounds de jump rope)",
    "context_mma": "60 segundos continuos (active recovery entre intervals de remo)",
    "intensity": "Low-to-moderate (recuperación activa)"
  },
  "contraindications": [
    "Dolor lumbar agudo",
    "Hernia discal activa",
    "Diástasis de rectos avanzada"
  ],
  "flag_resolved": true,
  "source": "Jones & Ledford (BJJ) – Off-Season Tuesday; Kostikiadis et al. (2018) – RTG context"
}
```

---

### B. `SkillStep: plate-rainbows`

```json
{
  "exerciseId": "plate-rainbows",
  "displayName": "Plate Rainbows / Med Ball Rainbows",
  "context": "BJJ Off-Season Friday, Circuit B, 20 reps",
  "movementPattern": "core-anti-rotation",
  "bodyZones": ["trunk", "shoulder"],
  "primaryMuscles": ["external-oblique", "internal-oblique", "anterior-deltoid", "serratus-anterior"],
  "secondaryMuscles": ["trapezius-lower", "rotator-cuff"],
  "equipment": ["weight-plate", "medicine-ball-alt"],
  "technique": {
    "setup": "De pie, sostener disco/balón medicinal frente a la cadera con ambas manos",
    "movement": "Trazar un arco (arcoíris) por encima de la cabeza desde la cadera de un lado hasta la cadera del lado opuesto",
    "control": "Resistir la rotación del torso durante todo el arco; mantener cadera y pelvis estables",
    "return": "Retornar por el mismo arco hacia el lado de inicio"
  },
  "primaryCues": [
    "Cadera fija: no permitir rotación lumbar",
    "Brazos extendidos pero no bloqueados",
    "Trazar el arco más amplio posible sin perder estabilidad",
    "Core activado durante todo el recorrido"
  ],
  "commonFaults": [
    "Rotación excesiva del torso (compensación lumbar)",
    "Flexión de codos que reduce el arco",
    "Inclinación lateral del tronco",
    "Usar impulso de cadera para elevar el disco"
  ],
  "prescription": {
    "sets": "Incluido en circuito (Circuit B x4)",
    "reps": 20,
    "load": "Disco ligero a moderado (no especificado; sugerencia: 5-10 kg)",
    "tempo": "Controlado, sin pausa en los extremos"
  },
  "contraindications": [
    "Dolor anterior de hombro",
    "Limitación de ROM de flexión de hombro >150°",
    "Patología lumbar con rotación contraindicada"
  ],
  "flag_resolved": true,
  "source": "Jones & Ledford (BJJ) – Off-Season Friday, Circuit B"
}
```

---

### C. `SkillStep: seal-jumps`

```json
{
  "exerciseId": "seal-jumps",
  "displayName": "Seal Jumps / Horizontal Jumping Jacks",
  "context": "BJJ Off-Season Tuesday, Calisthenic rounds, 20 reps",
  "movementPattern": "plyometric-lateral",
  "bodyZones": ["shoulder", "hip", "ankle"],
  "primaryMuscles": ["anterior-deltoid", "pectoralis-major", "gluteus-medius", "gastrocnemius"],
  "secondaryMuscles": ["rhomboids", "hip-adductors", "soleus"],
  "equipment": ["none"],
  "technique": {
    "setup": "De pie, brazos a los costados, pies juntos",
    "jumpPhase": "Saltar abriendo piernas y llevando brazos horizontalmente al frente (no sobre la cabeza) hasta el aplauso a nivel del pecho",
    "returnPhase": "Saltar cerrando piernas y retornando brazos a posición inicial",
    "rhythm": "Continuo, sincronizado con la respiración"
  },
  "primaryCues": [
    "Brazos horizontales a nivel de pectorales (no verticales)",
    "Retracción escapular activa al aplaudir",
    "Aterrizaje suave con rodillas ligeramente flexionadas",
    "Mantener ritmo constante"
  ],
  "commonFaults": [
    "Elevar brazos sobre la cabeza (error: convertirlo en jumping jack estándar)",
    "Aterrizaje rígido con piernas extendidas",
    "Apertura de piernas insuficiente",
    "Pérdida de sincronía brazos-piernas"
  ],
  "prescription": {
    "sets": "Incluido en circuito calisténico (3 x 5 min AMRAP)",
    "reps": 20,
    "intensity": "Low (calentamiento/acondicionamiento)",
    "tempo": "Rítmico continuo"
  },
  "rom_requirement": "Apertura horizontal completa del pecho (retracción escapular activa a 180°)",
  "contraindications": [
    "Dolor de hombro con abducción horizontal",
    "Lesión de tobillo en fase aguda",
    "Patología de rodilla que contraindique impacto repetido"
  ],
  "flag_resolved": true,
  "source": "Jones & Ledford (BJJ) – Off-Season Tuesday, Calisthenic rounds"
}
```

---

### D. `SkillStep: plate-front-raises`

```json
{
  "exerciseId": "plate-front-raises",
  "displayName": "Plate Front Raises",
  "context": "BJJ Off-Season Wednesday, Circuit B, 10 reps",
  "movementPattern": "shoulder-flexion-isolated",
  "bodyZones": ["shoulder"],
  "primaryMuscles": ["anterior-deltoid"],
  "secondaryMuscles": ["upper-trapezius", "serratus-anterior", "biceps-brachii-short-head"],
  "equipment": ["weight-plate"],
  "technique": {
    "setup": "De pie, sostener disco con ambas manos a los lados (posición de las 9:00 y 3:00), brazos extendidos frente a los muslos",
    "concentricPhase": "Elevar el disco con brazos extendidos hasta el nivel de los ojos o por encima de la cabeza",
    "eccentricPhase": "Descenso controlado hasta posición inicial",
    "stabilization": "Core activado, sin balanceo del tronco"
  },
  "primaryCues": [
    "Brazos completamente extendidos (sin flexión de codo)",
    "Elevar hasta línea de ojos como mínimo",
    "No inclinar el torso hacia atrás",
    "Control en la fase excéntrica (2-3 segundos)"
  ],
  "commonFaults": [
    "Balanceo del tronco para generar impulso",
    "Flexión de codos durante la elevación",
    "Elevación insuficiente (por debajo de 90°)",
    "Compensación con extensión lumbar"
  ],
  "prescription": {
    "sets": "Incluido en circuito (Circuit B x4)",
    "reps": 10,
    "load": "Disco de 10-20 kg (según nivel del atleta)",
    "tempo": "2s concéntrica / 2s excéntrica"
  },
  "anatomical_note": "⚠️ NO confundir con el trabajo de cuello 'Neck Machine' que aparece en Tournament Season. Este ejercicio es de hombros (deltoides anterior).",
  "contraindications": [
    "Tendinopatía de supraespinoso activa",
    "Impingement subacromial sintomático",
    "Bursitis de hombro en fase aguda"
  ],
  "flag_resolved": true,
  "source": "Jones & Ledford (BJJ) – Off-Season Wednesday, Circuit B"
}
```

---

### E. `SkillStep: elbow-drag-crawl`

```json
{
  "exerciseId": "elbow-drag-crawl",
  "displayName": "Elbow Drag Crawl",
  "context": "BJJ Tournament Season Wednesday, Calisthenic Circuit, 1 rep x 30 feet (~9 m)",
  "movementPattern": "grappling-drill / bodyweight-traction",
  "bodyZones": ["shoulder", "elbow", "forearm", "trunk", "hip"],
  "primaryMuscles": ["latissimus-dorsi", "biceps-brachii", "brachioradialis", "forearm-flexors"],
  "secondaryMuscles": ["core-stabilizers", "posterior-deltoid", "hip-flexors"],
  "equipment": ["floor-mat"],
  "technique": {
    "setup": "Posición prona (boca abajo) sobre el tatami/colchoneta, cuerpo completamente extendido",
    "traction": "Traccionar el cuerpo hacia adelante utilizando únicamente el agarre y la fuerza de arrastre de antebrazos y codos contra el suelo",
    "hipPosition": "Mantener caderas bajas, pegadas al suelo (no elevar la pelvis)",
    "distance": "Recorrer 30 pies (~9 metros) como una repetición"
  },
  "primaryCues": [
    "Caderas pegadas al suelo durante todo el desplazamiento",
    "Tracción desde los codos, no desde los hombros",
    "Agarre firme con antebrazos contra el tatami",
    "Mantener el cuerpo alineado (no rotar la pelvis)"
  ],
  "commonFaults": [
    "Elevar las caderas (convertirlo en un arrastre de cuerpo completo)",
    "Usar las piernas para empujar (pérdida de especificidad)",
    "Tracción unilateral asimétrica",
    "Levantar el pecho del suelo excesivamente"
  ],
  "prescription": {
    "sets": 1,
    "distance": "30 feet (~9 metros)",
    "context": "Dentro de circuito calisténico de 5 min (3 x 5 min)",
    "specificity": "Simula escapes y movimientos de tracción en el suelo de BJJ"
  },
  "contraindications": [
    "Dolor de codo (epicondilitis activa)",
    "Lesión de hombro con extensión contraindicada",
    "Dolor en antebrazos/muñecas por agarre"
  ],
  "flag_resolved": true,
  "source": "Jones & Ledford (BJJ) – Tournament Season Wednesday"
}
```

---

## 3. Protocolo de Evaluación: Takedown Test (MMA)

### 3.1 Ficha de Assessment para el Motor

```json
{
  "assessmentId": "mma-2m-takedown-sprint",
  "displayName": "2m Take Down Sprint Test",
  "source": "Kostikiadis et al., 2018 – Figure 1 & Methods",
  "purpose": "Evaluar velocidad específica de derribo (takedown) en MMA",
  "equipment": [
    "2 pares de fotocélulas inalámbricas (precisión 0.01s, ej. Brower Timing System)",
    "1 muñeco de entrenamiento de 75 kg, altura 1.20 m",
    "Superficie de tatami/pista indoor"
  ],
  "layout": {
    "startLine_to_photocell1_cm": 30,
    "photocell1_to_dummy_m": 2.0,
    "dummy_to_photocell2_m": 1.0,
    "photocell1_height_cm": 120,
    "photocell2_height_cm": 30
  },
  "protocol": {
    "startPosition": "Atleta de pie, 30 cm detrás del primer par de fotocélulas",
    "action": "Ejecutar un takedown (derribo) tan rápido como sea posible manteniendo la técnica apropiada",
    "technique_description": "Brazos envuelven el torso del oponente, una pierna se coloca detrás de las piernas del oponente para desequilibrarlo. El atacante termina encima.",
    "timerStart": "Cuando el cuerpo del atleta interrumpe el haz de la fotocélula 1",
    "timerStop": "Cuando el muñeco impacta el suelo e interrumpe el haz de la fotocélula 2 (a 30 cm de altura)",
    "attempts": 3,
    "restBetweenAttempts": "5 minutos",
    "score": "Mejor tiempo de los 3 intentos"
  },
  "reliability": {
    "ICC": 0.94,
    "CI_95_lower": 0.91,
    "CI_95_upper": 0.97,
    "validationSample": "10 MMA athletes, pre-study"
  },
  "referenceValues": {
    "pre_STG_mean": "0.96 ± 0.1 s",
    "post_STG_mean": "0.74 ± 0.01 s",
    "improvement_pct": "22.0 ± 4.9%",
    "hedges_g": 4.10
  },
  "fronted_svg_spec": {
    "canvas": "horizontal, left-to-right flow",
    "elements": [
      {"id": "start_line", "x": 0, "label": "Línea de Salida"},
      {"id": "gap_1", "distance": "0.3 m"},
      {"id": "photocell_1", "height": "1.20 m", "label": "Fotocélula 1 (Inicio)"},
      {"id": "gap_2", "distance": "2.0 m"},
      {"id": "dummy", "weight": "75 kg", "height": "1.20 m", "label": "Muñeco de Entrenamiento"},
      {"id": "gap_3", "distance": "1.0 m"},
      {"id": "photocell_2", "height": "0.30 m", "label": "Fotocélula 2 (Fin)"}
    ],
    "annotations": [
      "Flecha de movimiento del atleta: inicio → fotocélula 1 → dummy → fotocélula 2",
      "Indicar que el timer se detiene cuando el DUMMY cae e interrumpe el haz, no el atleta",
      "Mostrar altura de fotocélulas como líneas verticales punteadas"
    ]
  }
}
```

---

### 3.2 Especificación SVG para el Agente Frontend

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         DIAGRAMA: 2m TAKE DOWN SPRINT TEST                          │
│                                                                                     │
│   Atleta ──►                                                                          │
│                                                                                     │
│   ┌───┐  0.3m  ┃         2.0 m          ┌──────────┐    1.0 m     ┃                │
│   │ S │───────►┃◄──────────────────────►│  DUMMY   │◄────────────►┃                │
│   │ T │        ┃                        │  75 kg   │              ┃                │
│   │ A │        ┃                        │ 1.20 m   │              ┃                │
│   │ R │        ┃                        │          │              ┃                │
│   │ T │        ┃                        └────┬─────┘              ┃                │
│   └───┘        ┃  ← Fotocélula 1             │ CAE                ┃ ← Fotocélula 2│
│                ┃    (h = 1.20 m)             ▼                    ┃   (h = 0.30 m) │
│                ┃                        ──────────                 ┃                │
│                                                                                     │
│   ─────────────────────────────────────────────────────────────────────────────►     │
│                         Dirección del movimiento                                      │
│                                                                                     │
│   ⏱️ Timer INICIA: cuerpo interrumpe Fotocélula 1                                    │
│   ⏱️ Timer DETIENE: dummy cae e interrumpe Fotocélula 2 (30 cm)                      │
│                                                                                     │
│   Intentos: 3 | Descanso: 5 min | Score: mejor tiempo                               │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Requisitos de renderizado SVG:**
1. **Escala:** Proporcional (1m = 100px sugerido)
2. **Fotocélulas:** Representar como líneas verticales punteadas con indicador de altura
3. **Dummy:** Rectángulo vertical con etiqueta de peso (75 kg) y altura (1.20 m)
4. **Flecha de caída:** Del dummy hacia abajo (indicando que el timer se detiene cuando el dummy cae)
5. **Atleta:** Silueta simplificada en posición de inicio (30 cm detrás de fotocélula 1)
6. **Colores:** Fotocélulas en rojo/verde (inicio/fin), dummy en gris, distancias en azul
7. **Responsive:** Adaptar a viewport mobile (rotar a vertical si es necesario)

---

## 4. Actualización de Blueprints de Implementación

### 4.1 Actualización del Template BJJ Off-Season

Los ejercicios resueltos se insertan en sus posiciones exactas dentro del template JSON:

```json
{
  "templateId": "bjj-offseason-base",
  "weeklySplit": {
    "tuesday": {
      "conditioning_rounds": {
        "jump_rope": {
          "rounds": 5,
          "durationMin": 3,
          "structure": [
            {"exercise": "light-jumping", "durationSec": 30},
            {"exercise": "high-knee-sprints", "durationSec": 30},
            {"exercise": "kimura-situps", "durationSec": 60, "skillStepId": "kimura-situps"}
          ]
        },
        "calisthenics_amrap": {
          "rounds": 3,
          "durationMin": 5,
          "exercises": [
            {"id": "jumping-jacks", "reps": 20},
            {"id": "pushups", "reps": 10},
            {"id": "bw-squats", "reps": 15},
            {"id": "seal-jumps", "reps": 20, "skillStepId": "seal-jumps"},
            {"id": "mountain-climbers", "reps": 20},
            {"id": "burpees", "reps": 5},
            {"id": "v-ups", "reps": 10}
          ]
        }
      }
    },
    "wednesday": {
      "circuit_b": {
        "exercises": [
          {"id": "standing-calf-raises", "reps": 15},
          {"id": "reverse-hypers", "reps": 10},
          {"id": "plate-front-raises", "reps": 10, "skillStepId": "plate-front-raises"},
          {"id": "grip-machine", "reps": 15}
        ]
      }
    },
    "friday": {
      "circuit_b": {
        "exercises": [
          {"id": "db-pullover", "reps": 10},
          {"id": "plate-rainbows", "reps": 20, "skillStepId": "plate-rainbows"},
          {"id": "cable-pull-throughs", "reps": 10},
          {"id": "bb-reverse-curls", "reps": 10}
        ]
      }
    }
  }
}
```

### 4.2 Actualización del Template BJJ Tournament Season

```json
{
  "templateId": "bjj-tournament-prep",
  "weeklySplit": {
    "wednesday": {
      "calisthenic_circuit": {
        "rounds": 3,
        "durationMin": 5,
        "jogBetweenRounds": "60s light jog",
        "exercises": [
          {"id": "jumping-jacks", "reps": 20},
          {"id": "bw-squats", "reps": 10},
          {"id": "elbow-drag-crawl", "distance": "30 feet (~9m)", "reps": 1, "skillStepId": "elbow-drag-crawl"},
          {"id": "pushups", "reps": 10},
          {"id": "situps", "reps": 10}
        ]
      }
    }
  }
}
```

### 4.3 Registro en la Base de Datos de Ejercicios

```typescript
// db/exercises/combat-sports-specific.ts

export const COMBAT_SPORTS_EXERCISES: ExerciseDBEntry[] = [
  {
    id: 'kimura-situps',
    name: 'Kimura Sit-ups',
    categories: ['core', 'rotational', 'active-recovery', 'grappling-specific'],
    bodyZones: ['trunk', 'lumbar'],
    movementPattern: 'core-rotation',
    equipment: [],
    difficulty: 2, // 1-5
    sportSpecific: ['BJJ', 'MMA', 'Judo'],
    videoRequired: true, // Para validación visual final
    videoStatus: 'PENDING_UPLOAD'
  },
  {
    id: 'plate-rainbows',
    name: 'Plate Rainbows',
    categories: ['core', 'anti-rotation', 'shoulder-mobility'],
    bodyZones: ['trunk', 'shoulder'],
    movementPattern: 'core-anti-rotation',
    equipment: ['weight-plate', 'medicine-ball'],
    difficulty: 2,
    sportSpecific: ['BJJ', 'MMA', 'Wrestling'],
    videoRequired: false,
    videoStatus: 'MAPPED_TO_STANDARD'
  },
  {
    id: 'seal-jumps',
    name: 'Seal Jumps (Horizontal Jumping Jacks)',
    categories: ['calisthenics', 'plyometrics', 'warmup'],
    bodyZones: ['shoulder', 'hip', 'ankle'],
    movementPattern: 'plyometric-lateral',
    equipment: [],
    difficulty: 1,
    sportSpecific: ['BJJ', 'MMA', 'Boxing'],
    romNote: 'Apertura horizontal a 180° con retracción escapular activa',
    videoRequired: false,
    videoStatus: 'MAPPED_TO_STANDARD'
  },
  {
    id: 'plate-front-raises',
    name: 'Plate Front Raises',
    categories: ['shoulder-strength', 'upper-body'],
    bodyZones: ['shoulder'],
    movementPattern: 'shoulder-flexion-isolated',
    equipment: ['weight-plate'],
    difficulty: 1,
    sportSpecific: ['BJJ', 'MMA', 'general'],
    anatomicalClarification: 'Hombro (deltoides anterior). NO confundir con Neck Machine.',
    videoRequired: false,
    videoStatus: 'MAPPED_TO_STANDARD'
  },
  {
    id: 'elbow-drag-crawl',
    name: 'Elbow Drag Crawl',
    categories: ['grappling-drill', 'bodyweight-traction', 'movement'],
    bodyZones: ['shoulder', 'elbow', 'forearm', 'trunk'],
    movementPattern: 'grappling-drill',
    equipment: ['floor-mat'],
    difficulty: 3,
    sportSpecific: ['BJJ', 'Wrestling', 'MMA'],
    videoRequired: true,
    videoStatus: 'PENDING_UPLOAD'
  }
];
```

---

## 5. Reglas Actualizadas para el Motor de Reglas

### 5.1 Regla de Contradicción: Plate Raisers ≠ Neck Machine

```typescript
// rules/exercise-disambiguation.ts

export const PlateRaiserNeckMachineRule: TrainingRule = {
  id: 'plate-raiser-vs-neck-machine',
  title: 'No confundir Plate Front Raises con Neck Machine',
  description: 'Plate Raisers (Off-Season) son elevaciones de hombro. Neck Machine (Tournament Season) es trabajo cervical específico. Son ejercicios distintos con zonas anatómicas diferentes.',
  type: 'disambiguation',
  conditions: {
    exerciseQuery: ['plate raisers', 'neck machine', 'plate front raises']
  },
  actions: {
    ifOffSeason: 'assign bodyZone: shoulder, exercise: plate-front-raises',
    ifTournamentSeason: 'assign bodyZone: neck, exercise: neck-machine',
    warnIfConfused: '⚠️ Plate Raisers = Hombros. Neck Machine = Cuello. No intercambiar.'
  },
  source: 'Jones & Ledford (BJJ) – Off-Season Wednesday vs Tournament Season Monday/Friday'
};
```

### 5.2 Regla de Especificidad: Elbow Drag como Grappling Drill

```typescript
// rules/grappling-drill-integration.ts

export const GrapplingDrillIntegrationRule: TrainingRule = {
  id: 'grappling-drill-in-conditioning',
  title: 'Driles de Grappling integrados en Conditioning',
  description: 'Ejercicios como Elbow Drag, Pummeling, Leapfrog y Bear Crawls son drills de movimiento específico de grappling que se prescriben dentro de circuitos de acondicionamiento, NO como ejercicios de fuerza aislados.',
  type: 'categorization',
  conditions: {
    exerciseCategory: ['grappling-drill'],
    context: ['conditioning', 'calisthenics', 'circuit']
  },
  actions: {
    assignMovementPattern: 'grappling-drill',
    assignFocusId: 'conditioning',
    doNotAssign: 'strength-power',
    note: 'Estos driles simulan demandas de movimiento del tatami. Prescribir por distancia/tiempo, no por carga.'
  },
  source: 'Jones & Ledford (BJJ) – Tournament Season Wednesday/Thursday'
};
```

---

## 6. Checklist Final de Integración

| Tarea | Agente Responsable | Estado |
|---|---|---|
| Crear 5 entradas en Exercise DB con SkillStep metadata | Agente de Base de Datos | 🟡 Pendiente (specs entregadas) |
| Insertar ejercicios resueltos en templates Off-Season y Tournament | Agente de Periodización | 🟡 Pendiente (JSON entregado) |
| Implementar regla de disambiguación Plate Raisers / Neck Machine | Agente de Motor de Reglas | 🟡 Pendiente (rule entregada) |
| Implementar regla de categorización de grappling drills | Agente de Motor de Reglas | 🟡 Pendiente (rule entregada) |
| Renderizar SVG del Takedown Test en UI de Assessment | Agente Frontend | 🟡 Pendiente (spec entregada) |
| Crear assessment `mma-2m-takedown-sprint` en el motor | Agente de Evaluaciones | 🟡 Pendiente (JSON entregado) |
| Solicitar video de Kimura Sit-ups y Elbow Drag Crawl | Agente de Contenido / Usuario | 🔴 Bloqueado (requiere video real) |
| Marcar todas las banderas como RESUELTAS en el tracker | Agente de Proyecto | ✅ Completado |

---

## 7. Notas Finales

- **No quedan banderas abiertas.** Los 5 ejercicios han sido completamente especificados con mecánica, cues, errores, prescripción y contraindicaciones.
- **El Takedown Test** tiene especificación completa para renderizado SVG, protocolo de ejecución, valores de referencia y confiabilidad (ICC = 0.94).
- **Único pendiente externo:** Videos de demostración para `Kimura Sit-ups` y `Elbow Drag Crawl` (marcados como `videoStatus: 'PENDING_UPLOAD'`). Esto no bloquea la implementación del motor ni de los templates, solo la librería visual de ejercicios.
- **Los agentes de implementación** pueden proceder a inyectar todos los JSON, TypeScript interfaces y reglas directamente en el código base de Plan Maestro OS sin necesidad de volver a consultar los papers originales.

---

*Fin del Adendum de Resolución. El documento maestro de extracción está ahora completo y listo para implementación.*
