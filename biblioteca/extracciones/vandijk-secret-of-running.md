# vandijk-secret-of-running — Extracción recuperada de chat

> **sourceId:** `vandijk-secret-of-running` · **origen:** `chat-export-1787415020211` (Extracción de Reglas para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# THE SECRET OF RUNNING — Extracción para Plan Maestro OS

> Extracción estructurada del libro para convertir sus conceptos en reglas, progresiones, metadatos y criterios accionables. No se copian párrafos literales; todo está parafraseado y orientado a implementación. El libro es altamente cuantitativo y se centra en rendimiento en carrera continua, no en fuerza máxima ni calistenia.

---

## 1) Metadatos del libro

- **Título:** *The Secret of Running*
- **Autor(es):** Hans van Dijk y Ron van Megen
- **Año:** 2017
- **Disciplina principal:** Running de resistencia / rendimiento en carrera; física y fisiología del ejercicio; entrenamiento y competición con potencia.
- **Enfoque poblacional:**  
  - Principalmente corredores recreacionales comprometidos y corredores masters.  
  - También analiza atletas de élite y récords mundiales como límite superior del modelo.  
  - Usa un “Marathon Man” estándar: 35 años, 70 kg, maratón 3:30, FTP 3.67 W/kg.
- **Notas de alcance:**  
  - **Cubre:** física de correr, energía, potencia, FTP, VO₂max, economía de carrera, dinámica de carrera, edad, sexo, peso corporal, entrenamiento, frecuencia cardiaca, potencia con Stryd, viento, colinas, altitud, temperatura, maratón, nutrición/fueling, suplementos, mitos de rendimiento.  
  - **No cubre explícitamente:** programación de fuerza, calistenia, movilidad articular estructurada, rehabilitación musculoesquelética específica, diagnóstico clínico, tratamiento de lesiones tendinosas o articulares.  
  - **Ámbito útil para la app:** motor de reglas para entrenamiento de resistencia, pacing, fatiga, entorno, nutrición de carrera, economía de carrera y seguridad ambiental.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `RunningEngineProfile` (opcional):
  - **Descripción:** perfil fisiológico/cuantitativo del corredor para predicción de rendimiento.
  - **Campos sugeridos:**
    - `ftpWkg: number` — potencia funcional por kg para 1 h.
    - `vo2maxMlKgMin: number`
    - `runningEconomyRE: number` — ml O₂/kg/km.
    - `specificEnergyCostC: number` — kJ/kg/km; estándar 0.98.
    - `riegelExponent: number` — por defecto -0.07; puede variar -0.05 a -0.09.
    - `bodyWeightKg: number`
    - `bodyFatPct: number`
    - `ageYears: number`
    - `sex: 'male' | 'female' | ...`
  - **Referencias:** Caps. 7–8 p. 48–55; 12 p. 76–79; 16–20 p. 98–127.

- `PowerDurationCurve` (opcional):
  - **Descripción:** potencia sostenible en función del tiempo basada en Riegel.
  - **Campos sugeridos:**
    - `durationMin: number`
    - `pctOfFtp: number`
    - `fuelMix?: { glycogenPct: number; fatPct: number; anaerobicPct?: number }`
  - **Valores base del libro:** 10 min 113% FTP; 20 min 108%; 40 min 103%; 60 min 100%; 120 min 95%; 240 min 91%; 300 min 89%.
  - **Referencias:** Cap. 16 p. 98–104; Cap. 62 p. 360–365.

- `RunningDynamicsSample` (opcional):
  - **Descripción:** métricas de técnica medibles con reloj/pod.
  - **Campos sugeridos:**
    - `cadenceSpm: number`
    - `strideLengthM: number`
    - `groundContactTimeMs: number`
    - `verticalOscillationCm: number`
    - `flightTimeMs?: number`
    - `specificPowerWkg?: number`
    - `cValueKjKgKm?: number`
  - **Referencias:** Caps. 37–39 p. 212–235; 65 p. 386–395.

- `EnvironmentalCondition` (opcional):
  - **Descripción:** condiciones externas que modifican potencia requerida o riesgo.
  - **Campos sugeridos:**
    - `temperatureC: number`
    - `wetBulbTemperatureC?: number`
    - `relativeHumidityPct?: number`
    - `windSpeedKmh: number`
    - `windDirection?: 'head' | 'tail' | 'cross'`
    - `altitudeM: number`
    - `airPressureMbar?: number`
    - `surfaceType: 'track' | 'asphalt' | 'trail' | 'sand' | 'grass' | 'mixed'`
    - `gradientPct: number`
  - **Referencias:** Caps. 13–15 p. 80–97; 42 p. 244–247; 47–49 p. 276–293; 53–56 p. 310–333.

- `RaceFuelingPlan` (opcional):
  - **Descripción:** estrategia de carbohidratos e hidratación para maratón.
  - **Campos sugeridos:**
    - `carboLoadingDays: 2 | 3`
    - `carbIntakePctOfDiet: number` — objetivo 70%.
    - `expectedWeightGainKg: number` — ideal ≤1 kg.
    - `drinkVolumeMlPer5k: number` — 150 ml.
    - `drinkCarbConcentrationGL: number` — ~70 g/L.
    - `totalCarbIntakeG: number` — ~95 g en maratón según ejemplo.
  - **Referencias:** Caps. 57–60 p. 334–353.

- `HeatStressAssessment` (opcional):
  - **Descripción:** evaluación de riesgo térmico y deshidratación.
  - **Campos sugeridos:**
    - `wetBulbTemperatureC: number`
    - `heatStressIndex: number` — debe ser <1.
    - `sweatRateLh?: number`
    - `maxAllowedFluidLossPctBodyMass: number` — 5%.
    - `coreTempRiseLimitC?: number` — ~1°C.
  - **Referencias:** Cap. 54 p. 316–325.

- `PacingLoadMetrics` (opcional):
  - **Descripción:** métricas de carga y variabilidad de potencia para entrenamiento y carrera.
  - **Campos sugeridos:**
    - `averagePowerW: number`
    - `normalizedPowerW: number`
    - `intensityFactor: number` — NP/FTP.
    - `variabilityIndex: number` — NP/average power.
    - `tss: number`
    - `efficiencyFactor?: number` — NP/HR media.
    - `powerToHrRatioChangePct?: number`
  - **Referencias:** Cap. 52 p. 304–309; 69 p. 410–413.

- `AgeGradingFactor` (opcional):
  - **Descripción:** ajuste de rendimiento por edad y sexo.
  - **Campos sugeridos:**
    - `ageYears: number`
    - `sex: string`
    - `annualDeclinePct: number`
    - `ageGradeFactor?: number`
  - **Referencias:** Caps. 23–25 p. 142–155; 26 p. 156–159; 78 p. 458–461.

- `SurfaceModifier` (opcional):
  - **Descripción:** modificador del costo energético según superficie/recorrido.
  - **Campos sugeridos:**
    - `surfaceType: string`
    - `cModifierPct: number`
  - **Valores:** ideal 0%; curvas/baches +1%; trail/bosque +3%; cross mixto +6%; arena hasta +33%.
  - **Referencias:** Cap. 42 p. 244–247.

- `AltitudePerformanceModifier` (opcional):
  - **Descripción:** reducción de FTP por altitud y adaptación.
  - **Campos sugeridos:**
    - `altitudeKm: number`
    - `acclimatized: boolean`
    - `ftpRetentionPct: number`
    - `formula: 'basset' | 'cerretelli' | 'daniels'`
  - **Referencias:** Cap. 49 p. 288–293; 79 p. 463–464.

### 2.2 Mapeo a tipos existentes

- `FocusId: endurance-performance`
  - El libro lo trata como eje central: FTP, VO₂max, economía de carrera, potencia sostenible, pacing, fatiga, condiciones ambientales.
  - Referencias: Caps. 7–21, 30–31, 52, 63–69.

- `FocusId: fat-loss`
  - Tratado como palanca de rendimiento: perder grasa manteniendo potencia mejora FTP relativo y velocidad.
  - Regla clara: 1% de pérdida de peso ≈ 1% de mejora de velocidad/FTP específico si la potencia absoluta se mantiene.
  - Referencias: Caps. 27–29 p. 160–175.

- `FocusId: injury-prevention`
  - No es libro de lesiones, pero aporta prevención indirecta: progresión 5–10%/mes, descanso, calzado, superficie, clima, sobreentrenamiento, enfermedad, vitamina D.
  - Referencias: Caps. 4 p. 32–35; 43 p. 248–252; 55–56 p. 326–333; 73 p. 434–439.

- `FocusId: thermoregulation / environmental-safety`
  - Muy relevante: temperatura óptima, wet-bulb, sudoración, deshidratación, hipotermia, viento/frío/lluvia.
  - Referencias: Caps. 53–56 p. 310–333.

- `BodyZoneId: cardiovascular`
  - El sistema corazón-pulmón-sangre es el principal limitante del rendimiento aeróbico.
  - Conceptos: VO₂max, stroke volume, RHR, MHR, deriva cardiaca.
  - Referencias: Cap. 3 p. 26–31; 18 p. 114–117; 32 p. 184–189.

- `BodyZoneId: lower-leg / calf / foot`
  - Relevante para economía de carrera, peso de piernas/pies, calzado, pendulum de piernas.
  - El libro asocia pantorrillas delgadas y pies ligeros a mejor economía; peso del zapato impacta más por efecto pendular.
  - Referencias: Caps. 36 p. 208–211; 43 p. 248–252.

- `BodyZoneId: hip`
  - Caderas estrechas/flexibles se asocian a mejor economía; zancada depende en parte de longitud de pierna y ángulo de cadera.
  - Referencias: Caps. 36 p. 209; 38 p. 221.

- `BodyZoneId: skin / thermoregulation`
  - Sudor, radiación, convección, windchill, ropa, aceite protector.
  - Referencias: Caps. 53–56.

- `MovementPattern: running-gait`
  - El libro modela la carrera como suma de resistencias: running resistance, air resistance, climbing resistance.
  - Dinámica: cadencia, longitud de zancada, tiempo de contacto, oscilación vertical, fase de vuelo.
  - Referencias: Caps. 11 p. 68–75; 37–39 p. 212–235.

- `MovementPattern: sprint`
  - Alta dependencia de ATP/CP y anaeróbico; aire y aceleración importan más; temperatura cálida favorece.
  - Referencias: Caps. 45 p. 264–269; 53 p. 312–313; 62 p. 360–365.

- `MovementPattern: uphill-running`
  - La potencia específica W/kg domina; velocidad cae con gradiente; pérdida de tiempo no se recupera totalmente en bajada.
  - Referencias: Caps. 14 p. 86–91; 48 p. 282–287; 50 p. 294–299.

- `MovementPattern: downhill-running`
  - Beneficio menor que el costo uphill; pendientes extremas pueden generar frenado y eficiencia negativa.
  - Referencias: Cap. 14 p. 86–91; 48 p. 282–287.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `running_model_core`

- **Descripción breve:** La potencia disponible del corredor debe igualar la suma de resistencia de carrera, resistencia del aire y resistencia de subida.
- **Tipo:** modelo físico / rendimiento.
- **Métrica principal:** potencia P en W; velocidad v; gradiente i; viento vw.
- **Valores numéricos:**
  - Fórmula principal:  
    `P = c·m·v + 0.5·ρ·cdA·(v + vw)²·v + (i/100)·m·g·v`
  - `c` estándar = 0.98 kJ/kg/km.
  - `cdA` estándar = 0.24 m²; con pacemakers/pack ≈ 0.20 m²; ideal pacers ≈ 0.18 m²; treadmill ≈ 0.01 m².
  - `ρ` estándar ≈ 1.226 kg/m³ a 15°C/1013 mbar.
- **Condiciones de aplicación:** modelado de rendimiento en carrera; útil para predecir velocidad y ajustar por entorno.
- **Capítulos/páginas:** Cap. 11 p. 68–75; 12 p. 76–79; 13 p. 80–85; 14 p. 86–91; 15 p. 92–97.
- **Comentarios/precauciones:**  
  - Para usuarios sin medidor de potencia, estimar FTP desde carrera o VO₂max.  
  - ⚠️ En subidas, el libro usa un “hill factor” para ajustar la potencia de subida; hay inconsistencia menor entre capítulos: Cap. 14 p. 88 usa `45.6 + 1.1622·i`, mientras Cap. 48 p. 282 menciona `45.6 + 1.622·i`. Se recomienda usar el primero por estar en el capítulo dedicado a colinas, pero marcar como revisión.

---

### Regla: `energy_time_relation`

- **Descripción breve:** El tiempo de carrera puede estimarse como energía requerida dividida por potencia sostenible.
- **Tipo:** modelo físico / rendimiento.
- **Métrica principal:** tiempo t; energía E; potencia P.
- **Valores numéricos:**
  - `t = E / P`
  - Ejemplo maratón: E neta ≈ 2961 kJ; P = 235 W ⇒ t ≈ 12600 s = 3:30.
  - La eficiencia metabólica neta se asume ≈ 25%; el gasto bruto es ~4× el trabajo neto.
- **Condiciones de aplicación:** predicciones básicas; ajustar por aire, pendiente, fatiga y duración.
- **Capítulos/páginas:** Cap. 7 p. 48–51; 8 p. 52–55.
- **Comentarios/precauciones:** No usar para esfuerzos <10 min sin considerar anaeróbico.

---

### Regla: `specific_energy_cost_running`

- **Descripción breve:** El costo energético específico estándar de correr es 0.98 kJ/kg/km, equivalente a una economía de carrera de 201 ml O₂/kg/km.
- **Tipo:** economía de carrera / intensidad.
- **Métrica principal:** `c` en kJ/kg/km; `RE` en ml O₂/kg/km.
- **Valores numéricos:**
  - `c` estándar = 0.98 kJ/kg/km.
  - `RE` estándar = 201 ml O₂/kg/km.
  - Conversión: `c = 0.004875 · RE`.
  - Conversión inversa: `RE = c / 0.004875`.
  - Relación potencia-VO₂: `P/m = 0.08125 · VO₂`.
- **Condiciones de aplicación:** corredores promedio en superficie ideal; individuos pueden variar ±10%.
- **Capítulos/páginas:** Cap. 12 p. 76–79; 20 p. 122–125; 36 p. 208–211; 65 p. 386–395.
- **Comentarios/precauciones:** Valores muy bajos (RE ~180) aparecen en élite; no asumir para todos.

---

### Regla: `riegel_power_time_curve`

- **Descripción breve:** La potencia sostenible disminuye con la duración según la fórmula de Riegel.
- **Tipo:** progresión / fatiga / intensidad.
- **Métrica principal:** duración; %FTP.
- **Valores numéricos:**
  - `v2/v1 = (d2/d1)^-0.07` o equivalente en potencia/tiempo.
  - Por defecto: exponente -0.07.
  - Potencia respecto a FTP:
    - 10 min: 113% FTP.
    - 20 min: 108%.
    - 40 min: 103%.
    - 60 min: 100%.
    - 120 min: 95%.
    - 240 min: 91%.
    - 300 min: 89%.
  - FTP = 88% de la potencia asociada a VO₂max/10 min.
- **Condiciones de aplicación:** esfuerzos aeróbicos ≥10 min; para <10 min añadir contribución anaeróbica.
- **Capítulos/páginas:** Cap. 16 p. 98–104; 20 p. 122–125.
- **Comentarios/precauciones:**  
  - Exponente -0.05 para ultra-resistencia excepcional; -0.08/-0.09 para sprinters/poca resistencia a fatiga.

---

### Regla: `ftp_vo2max_relation`

- **Descripción breve:** FTP específico puede estimarse desde VO₂max mediante un factor fijo.
- **Tipo:** estimación fisiológica.
- **Métrica principal:** FTP W/kg; VO₂max ml/kg/min.
- **Valores numéricos:**
  - `FTP = 0.072 · VO₂max`
  - Ejemplo: VO₂max 51 ⇒ FTP ≈ 3.67 W/kg.
- **Condiciones de aplicación:** corredores con fatigue resistance estándar; no válido si RE muy mala o muy buena sin corregir.
- **Capítulos/páginas:** Cap. 20 p. 122–125.
- **Comentarios/precauciones:** Para rendimiento real, mejor usar test de 10 min o potencia.

---

### Regla: `ftp_test_10min`

- **Descripción breve:** El FTP puede estimarse con un test maximal de 10 minutos dividiendo la potencia media por 1.13.
- **Tipo:** test / progresión.
- **Métrica principal:** FTP W/kg.
- **Valores numéricos:**
  - Protocolo:
    - Calentamiento 10–20 min con aceleraciones.
    - 10 min a máximo esfuerzo.
    - Enfriamiento 10 min.
  - `FTP ≈ potencia media específica 10 min / 1.13`
  - Frecuencia sugerida: cada 6–8 semanas.
- **Condiciones de aplicación:** usuarios con power meter; superficie consistente; sin viento fuerte.
- **Capítulos/páginas:** Cap. 66 p. 396–399.
- **Comentarios/precauciones:**  
  - El Critical Power de Stryd no se usa aquí porque el libro indica que su algoritmo/duración no está claro. ⚠️

---

### Regla: `power_training_zones`

- **Descripción breve:** Zonas de entrenamiento basadas en %FTP para desarrollar distintos sistemas energéticos.
- **Tipo:** intensidad.
- **Métrica principal:** %FTP.
- **Valores numéricos:**
  - Zona 0 recuperación: 60–70% FTP.
  - Zona 1 resistencia: 70–80% FTP.
  - Zona 2 tempo endurance: 80–90% FTP.
  - Zona 3 FTP/umbral: 90–100% FTP.
  - Zona 4 VO₂max: 100–110% FTP.
  - Zona 5 capacidad anaeróbica: 110–150% FTP.
  - Zona 6 potencia neuromuscular: >150% FTP.
- **Condiciones de aplicación:** corredores con FTP conocido; ajustar si hay dolor, enfermedad o fatiga alta.
- **Capítulos/páginas:** Cap. 66 p. 397–399.
- **Comentarios/precauciones:** Las zonas por HR del libro son menos precisas que las de potencia; usar potencia como principal si existe.

---

### Regla: `weekly_volume_progression`

- **Descripción breve:** El volumen semanal debe incrementarse gradualmente para evitar lesiones y permitir adaptación.
- **Tipo:** volumen / prevención.
- **Métrica principal:** km/semana o carga semanal.
- **Valores numéricos:**
  - Incremento máximo sugerido: 5–10% por mes.
  - Corredor normal progresa hasta ~50–80 km/semana incluyendo una sesión intensa.
  - Para maratón, el libro sugiere poder alcanzar al menos ~80 km/semana en preparación específica.
  - Una sesión larga semanal de 25–30 km para maratón.
- **Condiciones de aplicación:** corredores de resistencia; especialmente preparación de maratón.
- **Capítulos/páginas:** Cap. 4 p. 33–34; 5 p. 38; 60 p. 349.
- **Comentarios/precauciones:** Si hay dolor persistente o signos de sobreentrenamiento, reducir.

---

### Regla: `hard_easy_alternation`

- **Descripción breve:** Alternar días duros y fáciles para permitir recuperación y supercompensación.
- **Tipo:** descanso / progresión.
- **Métrica principal:** distribución semanal de intensidad.
- **Valores numéricos:**
  - Días duros y fáciles intercalados.
  - Tras sesiones muy duras, puede requerirse recuperación de al menos 2 días.
  - Intervalos intensos: no más de 2 veces/semana como regla práctica.
- **Condiciones de aplicación:** cualquier plan de running; especialmente intervalos/velocidad.
- **Capítulos/páginas:** Cap. 4 p. 32–33; 34 p. 198; 34 p. 201.
- **Comentarios/precauciones:** El exceso de intensidad sin recuperación lleva a sobreentrenamiento.

---

### Regla: `easy_endurance_volume`

- **Descripción breve:** La base aeróbica se construye con carrera fácil y volumen regular.
- **Tipo:** volumen / intensidad.
- **Métrica principal:** sesiones/semana; km; %FTP o %MHR.
- **Valores numéricos:**
  - Ritmo fácil: ~70–80% FTP o ~70% MHR.
  - Volumen diario típico: 10–15 km.
  - Volumen semanal típico: 50–100 km para corredor comprometido.
  - Long run: 25–30 km semanal en preparación de maratón.
- **Condiciones de aplicación:** corredores con base mínima; preparación de resistencia.
- **Capítulos/páginas:** Cap. 5 p. 38; 31 p. 180; 60 p. 349.
- **Comentarios/precauciones:** No usar exclusivamente ritmos fáciles si el objetivo es mejorar rendimiento; falta estímulo intenso.

---

### Regla: `threshold_interval_volume`

- **Descripción breve:** Entrenar umbral/FTP con bloques a intensidad de 1 hora.
- **Tipo:** intensidad / volumen.
- **Métrica principal:** %FTP; duración de bloques.
- **Valores numéricos:**
  - Intensidad: 90–100% FTP; HR ~85–90% MHR.
  - Bloques: 2–5 km o ~3–30 min según zona.
  - Volumen total orientativo: ~10 km en sesión umbral.
  - Frecuencia: ~1 vez/semana.
- **Condiciones de aplicación:** corredores con base aeróbica.
- **Capítulos/páginas:** Cap. 5 p. 39; 31 p. 180; 66 p. 398.
- **Comentarios/precauciones:** No acumular demasiada fatiga; calidad sobre cantidad.

---

### Regla: `vo2max_interval_volume`

- **Descripción breve:** Intervalos largos para mejorar VO₂max.
- **Tipo:** intensidad.
- **Métrica principal:** %FTP/%VO₂max; volumen total.
- **Valores numéricos:**
  - Intensidad: 100–110% FTP; 90–100% VO₂max/MHR.
  - Repeticiones: 800–1200 m o 2–4 min.
  - Volumen total: ~6 km de trabajo intenso.
  - Frecuencia: 1–2 veces/semana.
- **Condiciones de aplicación:** corredores intermedios/avanzados.
- **Capítulos/páginas:** Cap. 5 p. 39; 31 p. 180; 34 p. 199; 66 p. 399.
- **Comentarios/precauciones:** Recuperación suficiente entre repeticiones; HR debe poder bajar antes de repetir.

---

### Regla: `speed_interval_volume`

- **Descripción breve:** Intervalos cortos para velocidad y capacidad anaeróbica.
- **Tipo:** intensidad.
- **Métrica principal:** %FTP; distancia por repetición.
- **Valores numéricos:**
  - Intensidad: 110–150% FTP; velocidad cercana a 1500 m.
  - Repeticiones: 200–400 m.
  - Volumen total: 5–6 km.
  - Frecuencia: 1–2 veces/semana.
- **Condiciones de aplicación:** corredores de pista/media distancia o quienes buscan economía/velocidad.
- **Capítulos/páginas:** Cap. 5 p. 39; 31 p. 181; 66 p. 399.
- **Comentarios/precauciones:** Mayor riesgo si no hay base; evitar en fatiga extrema.

---

### Regla: `hit_running_protocol`

- **Descripción breve:** High Intensity Training como alternativa eficiente de intervalos cortos.
- **Tipo:** intensidad.
- **Métrica principal:** relación trabajo/descanso; duración total.
- **Valores numéricos:**
  - 20 s sprint / 10 s recuperación.
  - Duración total ~30 min.
  - Puede mejorar VO₂max y capacidad anaeróbica en ~6 semanas según el libro.
- **Condiciones de aplicación:** corredores tolerantes a alta intensidad; sin lesión activa.
- **Capítulos/páginas:** Cap. 5 p. 40; 34 p. 199.
- **Comentarios/precauciones:** Muy demandante; no usar diariamente.

---

### Regla: `hill_sprint_training`

- **Descripción breve:** Sprints en cuesta como entrenamiento específico de fuerza/resistencia.
- **Tipo:** fuerza específica / intensidad.
- **Métrica principal:** número de repeticiones; distancia.
- **Valores numéricos:**
  - 10–20 repeticiones de 100 m o 200–400 m cuesta arriba.
  - Recuperación bajando.
  - Puede combinarse con endurance o fartlek.
- **Condiciones de aplicación:** corredores sanos; disponible pendiente.
- **Capítulos/páginas:** Cap. 5 p. 40.
- **Comentarios/precauciones:** Mayor carga en tobillos/piernas; progresar gradualmente.

---

### Regla: `training_intensity_priority`

- **Descripción breve:** La intensidad es el factor más importante para mejorar rendimiento una vez hay base.
- **Tipo:** intensidad / progresión.
- **Métrica principal:** %FTP/%VO₂max.
- **Valores numéricos:**
  - Mejoras típicas de velocidad: 10–20%, máximo ~30%.
  - Tiempo hasta agotamiento puede mejorar hasta ×10.
  - La mayor mejora viene de entrenar cerca o por encima de FTP/VO₂max.
- **Condiciones de aplicación:** corredores con base suficiente; no principiantes absolutos.
- **Capítulos/páginas:** Cap. 5 p. 36; 30 p. 176–177.
- **Comentarios/precauciones:** Mayor intensidad requiere más recuperación.

---

### Regla: `periodization_cycle`

- **Descripción breve:** Planificar por ciclos para evitar estancamiento y permitir pico de forma.
- **Tipo:** progresión / planificación.
- **Métrica principal:** fases de entrenamiento.
- **Valores numéricos:**
  - Fases:
    1. Base: volumen aeróbico, intensidad baja.
    2. Construcción: aumentar velocidad manteniendo volumen.
    3. Pico: reducir volumen, alta intensidad.
    4. Competición: velocidad con bajo volumen.
    5. Transición: recuperación.
  - Mantener un estímulo ~6 semanas antes de cambiar.
- **Condiciones de aplicación:** planes de varios meses.
- **Capítulos/páginas:** Cap. 4 p. 34.
- **Comentarios/precauciones:** No mantener alta intensidad todo el año.

---

### Regla: `reversibility_detraining`

- **Descripción breve:** Las adaptaciones se pierden rápidamente sin entrenamiento.
- **Tipo:** descanso / fatiga.
- **Métrica principal:** semanas sin entrenamiento; pérdida estimada.
- **Valores numéricos:**
  - 1 mes sin entrenar puede perder ~10% de rendimiento.
  - La readaptación es más rápida que la adaptación inicial.
- **Condiciones de aplicación:** pausas por lesión/enfermedad.
- **Capítulos/páginas:** Cap. 4 p. 35.
- **Comentarios/precauciones:** Retomar progresivamente.

---

### Regla: `specificity_running`

- **Descripción breve:** Para mejorar corriendo, la mayor parte del entrenamiento debe ser carrera.
- **Tipo:** especificidad.
- **Métrica principal:** proporción de sesiones de carrera.
- **Valores numéricos:**
  - La gran mayoría del volumen debe ser carrera.
  - Gimnasio/fuerza solo como suplemento, p. ej. core stability.
- **Condiciones de aplicación:** corredores de distancia.
- **Capítulos/páginas:** Cap. 4 p. 34.
- **Comentarios/precauciones:** El libro no desarrolla programación de fuerza; no usar como fuente principal de fuerza.

---

### Regla: `fatigue_resistance_exponent`

- **Descripción breve:** La resistencia a fatiga modifica la caída de potencia con la distancia.
- **Tipo:** fatiga / perfil.
- **Métrica principal:** exponente de Riegel.
- **Valores numéricos:**
  - Normal: -0.07.
  - Mejor resistencia: -0.05.
  - Menor resistencia: -0.09.
  - Impacto en maratón puede ser de ~10 min para un mismo FTP.
- **Condiciones de aplicación:** ajustar predicciones entre distancias.
- **Capítulos/páginas:** Cap. 40 p. 236–239.
- **Comentarios/precauciones:** No asumir el mismo exponente para todos.

---

### Regla: `body_weight_performance_effect`

- **Descripción breve:** La pérdida de grasa mejora FTP específico y velocidad si se mantiene potencia absoluta.
- **Tipo:** composición corporal / rendimiento.
- **Métrica principal:** % cambio de peso; % cambio de rendimiento.
- **Valores numéricos:**
  - 1% de pérdida de peso ≈ 1% de aumento de velocidad/FTP específico.
  - Ejemplo del autor: pérdida de 15% de peso ⇒ mejora de VO₂max/FTP/resultados ~15%.
- **Condiciones de aplicación:** solo si no se compromete masa muscular ni salud.
- **Capítulos/páginas:** Cap. 27 p. 160–163; 29 p. 170–175.
- **Comentarios/precauciones:** No bajar de grasa esencial.

---

### Regla: `body_fat_percentage_limits`

- **Descripción breve:** Rangos de grasa corporal recomendados para rendimiento y salud.
- **Tipo:** composición corporal / seguridad.
- **Métrica principal:** % grasa corporal.
- **Valores numéricos:**
  - Hombres:
    - Grasa esencial: 2–5%.
    - Atletas: 6–13%.
    - Fitness: 14–17%.
    - Promedio: 18–24%.
    - Sobrepeso: >25%.
  - Mujeres:
    - Grasa esencial: 10–15%.
    - Atletas: 14–20%.
    - Fitness: 21–24%.
    - Promedio: 25–31%.
    - Sobrepeso: >32%.
- **Condiciones de aplicación:** usuarios que buscan racing weight.
- **Capítulos/páginas:** Cap. 28 p. 164–168.
- **Comentarios/precauciones:** No perseguir valores esenciales sin supervisión; riesgo de salud/trastornos alimentarios.

---

### Regla: `fat_loss_energy_balance`

- **Descripción breve:** La pérdida de grasa diaria puede calcularse desde el déficit energético.
- **Tipo:** nutrición / composición corporal.
- **Métrica principal:** déficit kJ/día; pérdida g/día.
- **Valores numéricos:**
  - Energía de 1 g de grasa corporal ≈ 37.6 kJ.
  - `fatLossGPerDay = (energyUseKj - energyIntakeKj) / 37.6`
  - Ejemplo: déficit 2300 kJ/día ≈ 60 g/día.
- **Condiciones de aplicación:** control de peso a largo plazo.
- **Capítulos/páginas:** Cap. 29 p. 170–172.
- **Comentarios/precauciones:** El gasto baja al perder peso; el déficit se reduce con el tiempo.

---

### Regla: `age_related_decline`

- **Descripción breve:** El rendimiento disminuye con la edad según rangos observados.
- **Tipo:** edad / progresión.
- **Métrica principal:** % pérdida anual.
- **Valores numéricos:**
  - Hombres:
    - 35–54 años: ~0.8%/año.
    - 55–74 años: ~1.0%/año.
    - >75 años: ≥5%/año.
  - Mujeres:
    - 35–54: ~1.0%/año.
    - 55–74: ~1.6%/año.
    - >75: ~2.9%/año.
  - Pico de rendimiento alrededor de 30 años.
- **Condiciones de aplicación:** age grading, expectativas y ajuste de FTP.
- **Capítulos/páginas:** Cap. 23 p. 142–145; 24 p. 146–149; 25 p. 150–155.
- **Comentarios/precauciones:** Valores estadísticos; individuos excepcionales pueden desviarse.

---

### Regla: `hr_fitness_drift_monitor`

- **Descripción breve:** La relación HR-velocidad sirve para detectar forma, enfermedad o fatiga.
- **Tipo:** fatiga / salud.
- **Métrica principal:** HR a misma velocidad.
- **Valores numéricos:**
  - En forma: HR baja para mismo pace.
  - Enfermedad/resfriado: HR puede subir 13–18 bpm y tardar ~10 días en normalizarse.
  - Calor: HR sube por deriva cardiaca; p. ej. +6 bpm puede implicar ~4.6% menos capacidad si MHR-RHR es 130.
- **Condiciones de aplicación:** entrenamientos estándar, mismo recorrido y condiciones.
- **Capítulos/páginas:** Cap. 33 p. 190–194; 53 p. 311.
- **Comentarios/precauciones:** Excluir datos con viento fuerte, cuestas o calor extremo.

---

### Regla: `max_heart_rate_estimation`

- **Descripción breve:** Fórmulas para estimar MHR si no hay test real.
- **Tipo:** estimación fisiológica.
- **Métrica principal:** MHR bpm.
- **Valores numéricos:**
  - Sedentarios/general: `220 - edad`.
  - Hombres atletas: `205.8 - 0.685 · edad`.
  - Mujeres atletas: `206 - 0.88 · edad`.
- **Condiciones de aplicación:** estimación inicial; mejor usar test supervisado.
- **Capítulos/páginas:** Cap. 32 p. 184–185.
- **Comentarios/precauciones:** Error individual grande; no usar para diagnóstico.

---

### Regla: `vo2max_field_estimates`

- **Descripción breve:** Estimaciones de VO₂max desde HR o Cooper test.
- **Tipo:** estimación fisiológica.
- **Métrica principal:** VO₂max ml/kg/min.
- **Valores numéricos:**
  - Estimación simple: `VO₂max ≈ 15 · (MHR / RHR)`.
  - Cooper test: `VO₂max ≈ (distance12min_m - 505) / 45`.
  - Bike test: `VO₂max ≈ (395 + 11.3 · maxW) / bodyWeightKg`.
- **Condiciones de aplicación:** sin laboratorio; usar como referencia.
- **Capítulos/páginas:** Cap. 18 p. 114–117; 32 p. 186–189.
- **Comentarios/precauciones:** Predicciones optimistas; validar con carrera real.

---

### Regla: `hr_training_zones`

- **Descripción breve:** Zonas de entrenamiento por porcentaje de MHR.
- **Tipo:** intensidad.
- **Métrica principal:** %MHR.
- **Valores numéricos:**
  - Zona 0: 60–70%.
  - Zona 1: 70–75%.
  - Zona 2: 75–80%.
  - Zona 3: 80–85%.
  - Zona 4: 85–100%.
  - Zona 5: 90–100%.
  - Zona 6: 95–100%.
- **Condiciones de aplicación:** si no hay potencia; menos fiable que potencia.
- **Capítulos/páginas:** Cap. 34 p. 196–198.
- **Comentarios/precauciones:** ⚠️ Las zonas HR se solapan; priorizar zonas por FTP si hay power meter.

---

### Regla: `running_watch_vo2_prediction`

- **Descripción breve:** Los relojes pueden estimar VO₂max y tiempos de carrera con utilidad moderada.
- **Tipo:** monitoreo / predicción.
- **Métrica principal:** VO₂max estimado; tiempos predichos.
- **Valores numéricos:**
  - El VO₂max del reloj puede ser útil si MHR está bien configurado.
  - El predictor de carreras tiende a ser optimista, especialmente en distancias largas.
- **Condiciones de aplicación:** usuarios con GPS/HR confiable.
- **Capítulos/páginas:** Cap. 35 p. 204–207.
- **Comentarios/precauciones:** No usar como medida clínica; ajustar con carreras reales.

---

### Regla: `cadence_economy_target`

- **Descripción breve:** Aumentar cadencia puede reducir costo energético de fase de vuelo y mejorar economía.
- **Tipo:** técnica / economía.
- **Métrica principal:** cadencia spm; c value.
- **Valores numéricos:**
  - Objetivo práctico: ≥180 spm.
  - A mayor cadencia, menor flight altitude y menor costo energético de vuelo.
  - Monitorear `c = (P/m) / v`; si c baja, mejora economía.
- **Condiciones de aplicación:** corredores con cadencia baja; cambios graduales.
- **Capítulos/páginas:** Cap. 37 p. 212–219; 39 p. 228–235.
- **Comentarios/precauciones:** No forzar zancada excesiva; riesgo de lesión si se sobre-alarga.

---

### Regla: `stride_length_speed_relation`

- **Descripción breve:** La velocidad depende del producto cadencia × longitud de zancada.
- **Tipo:** técnica / rendimiento.
- **Métrica principal:** velocidad km/h.
- **Valores numéricos:**
  - `speedKmh = strideLengthM · cadenceSpm · 60 / 1000`
  - Para alta velocidad, aumentar ambas variables; en élite la zancada larga es decisiva.
- **Condiciones de aplicación:** análisis de running dynamics.
- **Capítulos/páginas:** Cap. 37 p. 215–219; 38 p. 220–227.
- **Comentarios/precauciones:** Incrementar zancada requiere fuerza/técnica; no overstride.

---

### Regla: `gct_interpretation`

- **Descripción breve:** El ground contact time depende principalmente de velocidad y step length; no debe interpretarse aisladamente.
- **Tipo:** técnica.
- **Métrica principal:** GCT ms.
- **Valores numéricos:**
  - `GCT = stepLengthM / speedKmh · 3600`
  - Ejemplo: step 0.8 m a 12 km/h ⇒ GCT ≈ 240 ms.
  - Garmin marca <208 ms como avanzado, pero en parte equivale a correr >13.8 km/h con step ~0.8 m.
- **Condiciones de aplicación:** análisis de dinámica de carrera.
- **Capítulos/páginas:** Cap. 38 p. 220–227.
- **Comentarios/precauciones:** No intentar reducir GCT artificialmente sin velocidad.

---

### Regla: `surface_cost_modifier`

- **Descripción breve:** El costo energético aumenta según superficie y curvas.
- **Tipo:** entorno / rendimiento.
- **Métrica principal:** modificador de `c`.
- **Valores numéricos:**
  - Superficie ideal: 0%.
  - Recorrido con curvas/baches: +1%.
  - Trail/bosque: +3%.
  - Cross mixto: +6%.
  - Arena: hasta +33%.
- **Condiciones de aplicación:** predicción de tiempos y ajuste de potencia/ritmo.
- **Capítulos/páginas:** Cap. 42 p. 244–247.
- **Comentarios/precauciones:** En trail además hay técnica, desnivel y fatiga muscular.

---

### Regla: `shoe_weight_effect`

- **Descripción breve:** Zapatos más ligeros mejoran economía/rendimiento, pero no a costa de protección.
- **Tipo:** equipamiento / economía.
- **Métrica principal:** gramos por zapato; % rendimiento.
- **Valores numéricos:**
  - Ganancia práctica: 0.25–0.50% por cada 100 g de reducción.
  - Reducción típica de 200 g par puede dar 0.5–1.0%.
  - Por debajo de ~220 g/zapato no se observa ganancia adicional según revisión citada.
- **Condiciones de aplicación:** carreras; no sacrificar amortiguación/lesiones.
- **Capítulos/páginas:** Cap. 43 p. 248–253.
- **Comentarios/precauciones:** En maratón, autores sugieren precaución con voladoras extremas si aumenta riesgo.

---

### Regla: `air_resistance_drafting`

- **Descripción breve:** Correr en grupo/pacemakers reduce resistencia del aire y mejora tiempo.
- **Tipo:** entorno / táctica.
- **Métrica principal:** cdA; tiempo ganado.
- **Valores numéricos:**
  - `cdA` solo: 0.24 m².
  - Con pack/pacers: 0.20 m².
  - Pacers ideales: 0.18 m².
  - Marathon Man 3:30 puede ganar ~47 s en maratón corriendo en grupo.
  - Élite puede ganar ~84 s en maratón con pacers; ~1 s por vuelta de 400 m como regla práctica.
- **Condiciones de aplicación:** carreras rápidas; más relevante a mayor velocidad.
- **Capítulos/páginas:** Cap. 13 p. 80–85; 46 p. 270–275.
- **Comentarios/precauciones:** Mantener posición segura; evitar tropiezos.

---

### Regla: `wind_net_time_loss`

- **Descripción breve:** El viento siempre produce pérdida neta en recorrido ida/vuelta; el beneficio de tailwind es menor que el perjuicio de headwind.
- **Tipo:** entorno / pacing.
- **Métrica principal:** velocidad del viento; tiempo perdido.
- **Valores numéricos:**
  - Ventaja de tailwind ≈ 50% de la desventaja de headwind.
  - Modelo usa `cdA` 50% menor para tailwind: 0.12 vs 0.24.
  - Marathon Man con headwind 36 km/h baja de 13.1 a ~10.0 km/h; tailwind 36 km/h sube solo a ~13.6 km/h.
  - Desde wind force 3 ya hay impacto perceptible.
- **Condiciones de aplicación:** carreras al aire libre, rutas expuestas.
- **Capítulos/páginas:** Cap. 47 p. 276–281; 13 p. 83.
- **Comentarios/precauciones:** Buscar refugio en grupo contra headwind.

---

### Regla: `hill_speed_adjustment`

- **Descripción breve:** La velocidad en subida/bajada debe ajustarse por gradiente y potencia específica.
- **Tipo:** entorno / intensidad.
- **Métrica principal:** gradiente %; velocidad.
- **Valores numéricos:**
  - Marathon Man:
    - 0%: 13.1 km/h.
    - +5%: 10.5 km/h.
    - -5%: 15.8 km/h.
  - Élite:
    - 0%: 21.6 km/h.
    - +5%: 17.7 km/h.
    - -5%: 25.1 km/h.
  - El tiempo perdido subiendo supera al ganado bajando.
- **Condiciones de aplicación:** rutas con colinas; pacing por potencia.
- **Capítulos/páginas:** Cap. 48 p. 282–287.
- **Comentarios/precauciones:** ⚠️ Revisar hill factor por inconsistencia menor.

---

### Regla: `altitude_performance_reduction`

- **Descripción breve:** La altitud reduce potencia aeróbica por menor disponibilidad de oxígeno.
- **Tipo:** entorno / fisiología.
- **Métrica principal:** altitud km; %FTP retenido.
- **Valores numéricos:**
  - Fórmula Basset tras aclimatación:  
    `%FTP = 99.921 - 1.8991·h - 1.1219·h²`, h en km.
  - Antes de aclimatación:  
    `%FTP = 100.352 - 4.307·h - 1.434·h² + 0.1781·h³`
  - Mexico City 2250 m: reducción ≈10% FTP.
  - Marathon Man perdería ~30 min en maratón a esa altitud.
- **Condiciones de aplicación:** carreras en altitud; ajustar FTP.
- **Capítulos/páginas:** Cap. 49 p. 288–293; 79 p. 463–464.
- **Comentarios/precauciones:** Sprinters pueden beneficiarse por menor resistencia del aire.

---

### Regla: `altitude_training_lhtl`

- **Descripción breve:** Live High, Train Low puede mejorar FTP modestamente.
- **Tipo:** adaptación / altitud.
- **Métrica principal:** %FTP; tiempo de exposición.
- **Valores numéricos:**
  - Vivir 2500–3000 m.
  - Entrenar a ~1250 m.
  - Duración ~1 mes.
  - Mejora esperada ~2.5% FTP.
- **Condiciones de aplicación:** atletas con acceso a altitud; no garantiza resultados.
- **Capítulos/páginas:** Cap. 41 p. 240–243.
- **Comentarios/precauciones:** Riesgo de reducir intensidad si se entrena alto.

---

### Regla: `temperature_optimum`

- **Descripción breve:** El rendimiento de resistencia es mejor en frío moderado; el calor degrada rendimiento.
- **Tipo:** entorno / seguridad.
- **Métrica principal:** temperatura; % pérdida.
- **Valores numéricos:**
  - Óptimo maratón élite: ~4–5°C.
  - Óptimo corredores normales: ~7°C.
  - Recreacionales pueden preferir ~15°C.
  - A -5°C: pérdida ~3%.
  - A 25°C: pérdida ~6% élite, hasta ~18% normales.
  - Mujeres: óptimo ligeramente mayor (~9°C) y menor pérdida térmica en algunos datos.
- **Condiciones de aplicación:** predicción de carrera y seguridad.
- **Capítulos/páginas:** Cap. 53 p. 310–315.
- **Comentarios/precauciones:** Usar wet-bulb cuando haya humedad.

---

### Regla: `wet_bulb_heat_safety`

- **Descripción breve:** La temperatura wet-bulb determina riesgo térmico; valores altos son peligrosos.
- **Tipo:** seguridad / entorno.
- **Métrica principal:** Twb °C; HSI.
- **Valores numéricos:**
  - Twb >15°C: condiciones severas.
  - Twb >22°C: condiciones peligrosas.
  - HSI = E/Emax debe ser <1.
  - Con Twb 30°C, HSI puede ser 2–3; riesgo alto de colapso.
- **Condiciones de aplicación:** eventos calurosos/húmedos.
- **Capítulos/páginas:** Cap. 54 p. 316–325.
- **Comentarios/precauciones:** Si HSI ≥1, la app debería sugerir cancelar/reducir intensidad.

---

### Regla: `sweat_loss_limit`

- **Descripción breve:** La pérdida de líquido debe limitarse para evitar deshidratación severa.
- **Tipo:** hidratación / seguridad.
- **Métrica principal:** % pérdida de masa corporal.
- **Valores numéricos:**
  - Pérdida máxima recomendada: ≤5% del peso corporal.
  - Aumento de temperatura rectal límite aproximado: ≤1°C.
  - Sudoración estimada: `S = 0.0016 · E` L/h, donde E es net heat production en W.
- **Condiciones de aplicación:** maratón y calor.
- **Capítulos/páginas:** Cap. 54 p. 322–325; 59 p. 344–347.
- **Comentarios/precauciones:** No forzar hiperhidratación; equilibrio entre sodio/fluidos no detallado por libro.

---

### Regla: `cold_weather_layering`

- **Descripción breve:** En frío/lluvia/viento se debe proteger la capa aislante de aire.
- **Tipo:** seguridad / equipamiento.
- **Métrica principal:** capas de ropa; windchill.
- **Valores numéricos:**
  - Con windchill cercano a 0°C: 2–3 capas.
  - Si velocidad baja a paso de caminar: hasta 4 capas.
  - Lluvia elimina aislamiento: el agua conduce peor que aire; aire aísla ~26× mejor que agua.
  - Aceite protector puede ayudar pero se lava con lluvia.
- **Condiciones de aplicación:** clima frío, viento, lluvia.
- **Capítulos/páginas:** Cap. 56 p. 330–333.
- **Comentarios/precauciones:** Corredores pequeños/delgados son más vulnerables al frío.

---

### Regla: `marathon_energy_deficit`

- **Descripción breve:** El maratón produce déficit de carbohidratos; el riesgo de “muro” depende de peso, ritmo y stores.
- **Tipo:** nutrición / fatiga.
- **Métrica principal:** déficit energético kJ; % fatty acids.
- **Valores numéricos:**
  - Marathon Man 70 kg:
    - Gasto neto ≈ 2895 kJ.
    - Stores utilizables sin ingesta: sangre 21 + hígado 366 + músculo 1308 + ingesta 395 = 2090 kJ.
    - Déficit ≈ 805 kJ = 28%.
  - Con 80 kg: déficit ≈37%.
  - Ritmo al 94% FTP usa ~30% grasas; puede rozar evitar muro.
  - Ritmo demasiado alto reduce % grasas y aumenta riesgo.
- **Condiciones de aplicación:** maratón; no 10K/media.
- **Capítulos/páginas:** Cap. 57 p. 334–338.
- **Comentarios/precauciones:** Ajustar por carbo-loading y bebidas.

---

### Regla: `marathon_initial_pace`

- **Descripción breve:** Empezar demasiado rápido aumenta consumo de glucógeno y riesgo de muro.
- **Tipo:** pacing / nutrición.
- **Métrica principal:** %FTP inicial.
- **Valores numéricos:**
  - Para corredor normal, maratón sostenible ~94% FTP.
  - Si el peso sube y el mismo ritmo implica >100% FTP, el riesgo de muro aumenta mucho.
  - Estrategia recomendada: ritmo uniforme/conservador.
- **Condiciones de aplicación:** maratón.
- **Capítulos/páginas:** Cap. 57 p. 336–338; 60 p. 350–351.
- **Comentarios/precauciones:** No hacer negative split agresivo si no hay entrenamiento/fueling.

---

### Regla: `carbo_loading_protocol`

- **Descripción breve:** Aumentar carbohidratos antes del maratón mejora stores de glucógeno.
- **Tipo:** nutrición / competición.
- **Métrica principal:** % carbohidratos; días; peso ganado.
- **Valores numéricos:**
  - 2–3 días previos: ~70% de calorías de carbohidratos.
  - Reducir entrenamiento/tapering.
  - Stores: hígado ~366→549 kJ; músculo ~1308→2092 kJ.
  - Déficit puede pasar de +28% a -6% en Marathon Man.
  - Ganancia de peso aceptable: ~1 kg; excesiva >2 kg puede perjudicar.
  - Cada gramo de glucógeno fija ~3 g de agua.
- **Condiciones de aplicación:** maratón; no carreras cortas.
- **Capítulos/páginas:** Cap. 58 p. 340–343; 60 p. 349–350.
- **Comentarios/precauciones:** No sobrecomer; probar en entrenamientos.

---

### Regla: `marathon_drink_protocol`

- **Descripción breve:** Ingerir carbohidratos durante maratón reduce déficit energético y deshidratación.
- **Tipo:** nutrición / hidratación.
- **Métrica principal:** ml/5K; g/L carbohidratos.
- **Valores numéricos:**
  - Bebida isotónica ~70 g/L carbohidratos.
  - Beber ~150 ml cada 5K + 150 ml en salida.
  - Total ~1.35 L; ~95 g carbohidratos; ~395 kJ netos.
  - Sin bebida, déficit Marathon Man sube de 28% a 41%.
- **Condiciones de aplicación:** maratón; no necesario en 10K/media salvo calor extremo.
- **Capítulos/páginas:** Cap. 59 p. 344–347.
- **Comentarios/precauciones:** Entrenar bebida en sesiones largas.

---

### Regla: `marathon_tapering`

- **Descripción breve:** Reducir volumen antes del maratón mejora rendimiento manteniendo intensidad ligera.
- **Tipo:** descanso / competición.
- **Métrica principal:** volumen semanal; días.
- **Valores numéricos:**
  - Últimas 2 semanas: reducción sustancial.
  - Ejemplo: semana -3: 100 km; semana -2: 60 km; semana final: ≤30 km.
  - Mantener algo de velocidad/intensidad corta.
  - Mejora estimada ~1.5%.
- **Condiciones de aplicación:** preparación de maratón.
- **Capítulos/páginas:** Cap. 60 p. 349; 58 p. 340.
- **Comentarios/precauciones:** No introducir entrenamientos nuevos.

---

### Regla: `normalized_power_and_tss`

- **Descripción breve:** La carga de entrenamiento debe evaluarse con potencia normalizada, intensidad y duración.
- **Tipo:** carga / fatiga.
- **Métrica principal:** NP, IF, TSS.
- **Valores numéricos:**
  - `NP = ((1/t) · Σ(Pi⁴ · ti))^0.25`
  - `IF = NP / FTP`
  - `TSS = 100 · t_hours · IF²`
  - Clasificación TSS:
    - <50: ligero/recuperación.
    - 50–100: normal diario.
    - 100–150: duro, recuperación próxima día.
    - >150: muy duro, recuperación larga.
- **Condiciones de aplicación:** usuarios con power meter.
- **Capítulos/páginas:** Cap. 52 p. 304–308; 69 p. 411–412.
- **Comentarios/precauciones:** No exceder IF=1 durante >1 h de forma sostenible.

---

### Regla: `race_constant_power_strategy`

- **Descripción breve:** La mejor estrategia es mantener potencia constante, no necesariamente pace constante.
- **Tipo:** pacing.
- **Métrica principal:** potencia; variabilidad.
- **Valores numéricos:**
  - Objetivo: potencia constante; VI cercano a 1.0.
  - En subidas/headwind, permitir que el pace baje.
  - Excepción: usar algo más de potencia en tramos duros si después hay recuperación.
- **Condiciones de aplicación:** carreras con colinas/viento.
- **Capítulos/páginas:** Cap. 52 p. 304–309; 68 p. 406–409.
- **Comentarios/precauciones:** Evitar entrar en zona roja por atacar subidas.

---

### Regla: `efficiency_factor_aerobic_monitor`

- **Descripción breve:** La relación NP/HR y cambios entre mitades indican eficiencia aeróbica.
- **Tipo:** fatiga / aeróbico.
- **Métrica principal:** EF; power-to-HR ratio.
- **Valores numéricos:**
  - `EF = NP / averageHR`.
  - Si HR sube con potencia constante o potencia baja con HR constante, la base aeróbica puede ser insuficiente.
  - Si la segunda mitad empeora ≥5%, marcar necesidad de base aeróbica.
- **Condiciones de aplicación:** entrenamientos aeróbicos estables.
- **Capítulos/páginas:** Cap. 69 p. 412–413; 68 p. 408.
- **Comentarios/precauciones:** Descartar calor, deshidratación, cuestas o enfermedad.

---

### Regla: `running_economy_daily_tracking`

- **Descripción breve:** El power meter permite calcular economía de carrera diaria como `c`.
- **Tipo:** economía / monitoreo.
- **Métrica principal:** c kJ/kg/km.
- **Valores numéricos:**
  - `c = (P/m) / v`, con v en m/s.
  - Objetivo típico: ~0.98 kJ/kg/km.
  - Valores altos indican menor economía.
  - Comparar en mismo recorrido y condiciones.
- **Condiciones de aplicación:** usuarios con Stryd u otro medidor.
- **Capítulos/páginas:** Cap. 65 p. 386–395; 67 p. 400–401.
- **Comentarios/precauciones:** Viento/superficie afectan indirectamente; interpretar tendencias.

---

### Regla: `power_meter_data_smoothing`

- **Descripción breve:** La potencia instantánea varía; usar promedios cortos para feedback usable.
- **Tipo:** monitoreo.
- **Métrica principal:** smoothing 3–10 s.
- **Valores numéricos:**
  - Usar promedio 3 s o 10 s en reloj.
  - Suavizar en análisis post-entrenamiento.
- **Condiciones de aplicación:** entrenamiento en vivo.
- **Capítulos/páginas:** Cap. 69 p. 410.
- **Comentarios/precauciones:** No usar datos crudos para decisiones inmediatas.

---

### Regla: `supplement_caffeine`

- **Descripción breve:** Cafeína puede tener pequeño efecto ergogénico.
- **Tipo:** nutrición / competición.
- **Métrica principal:** mg/kg.
- **Valores numéricos:**
  - Límite recomendado: ~5 mg/kg.
  - Para 60 kg: ≤300 mg.
  - Tomar 2–3 tazas de café fuerte ~2 h antes de carrera.
- **Condiciones de aplicación:** carreras largas; probar tolerancia.
- **Capítulos/páginas:** Cap. 72 p. 430.
- **Comentarios/precauciones:** No exceder si hay sensibilidad; evitar dependencia.

---

### Regla: `vitamin_d_status`

- **Descripción breve:** Mantener vitamina D adecuada por salud ósea y rendimiento.
- **Tipo:** salud / estilo de vida.
- **Métrica principal:** nivel sanguíneo nmol/L; ingesta µg/día.
- **Valores numéricos:**
  - Prevención raquitismo: 25 nmol/L.
  - Prevención stress fractures: 100 nmol/L.
  - Rendimiento deportivo: 125 nmol/L.
  - Suplementación típica: 10–30 µg/día según estación/individuo.
  - Toxicidad: >325 nmol/L.
- **Condiciones de aplicación:** invierno, latitudes norteñas, poca exposición solar.
- **Capítulos/páginas:** Cap. 73 p. 434–439.
- **Comentarios/precauciones:** Medir sangre en grupos de riesgo; no diagnosticar.

---

### Regla: `vitamin_b6_toxicity_guardrail`

- **Descripción breve:** Evitar megadosis de vitamina B6 por riesgo de neuropatía.
- **Tipo:** seguridad / suplementos.
- **Métrica principal:** mg/día.
- **Valores numéricos:**
  - RDI: 1.5 mg/día.
  - Máxima ingesta segura sugerida: 25 mg/día.
  - Síntomas claros con ~500 mg/día; posibles con 50–300 mg/día.
  - Sangre normal: 35–110 nmol/L.
- **Condiciones de aplicación:** usuarios que toman suplementos.
- **Capítulos/páginas:** Cap. 74 p. 440–443.
- **Comentarios/precauciones:** Si hormigueo/quemazón en pies, suspender y consultar profesional.

---

### Regla: `train_illness_guardrail`

- **Descripción breve:** No competir/entrenar intenso con fiebre o enfermedad sistémica.
- **Tipo:** salud / fatiga.
- **Métrica principal:** síntomas; HR anómalo.
- **Valores numéricos:**
  - Tras resfriado, HR puede subir 13–18 bpm; esperar normalización ~10 días.
  - No correr con fiebre/gripe; riesgo cardiaco raro pero grave.
- **Condiciones de aplicación:** enfermedad aguda.
- **Capítulos/páginas:** Cap. 33 p. 192–193; 55 p. 328.
- **Comentarios/precauciones:** La app debe bloquear sesiones intensas si fiebre reportada.

---

### Regla: `clean_ftp_ceiling`

- **Descripción breve:** Límites superiores de FTP para humanos limpios.
- **Tipo:** benchmark / validación.
- **Métrica principal:** FTP W/kg.
- **Valores numéricos:**
  - Hombres: ~6.40 W/kg.
  - Mujeres: ~5.70 W/kg.
  - VO₂max equivalente: ~88.8 ml/kg/min hombres; ~79.2 mujeres.
  - Sub-2h maratón requeriría ~6.48 W/kg, por encima del límite limpio estimado.
- **Condiciones de aplicación:** validación de datos imposibles o sospechosos.
- **Capítulos/páginas:** Cap. 17 p. 106–113; 71 p. 422–426.
- **Comentarios/precauciones:** No acusar dopaje automáticamente; usar como sanity check.

---

### Regla: `performance_index_classification`

- **Descripción breve:** Clasificar rendimiento relativo usando FTP vs élite ajustado por edad.
- **Tipo:** benchmark.
- **Métrica principal:** % performance index.
- **Valores numéricos:**
  - Índice = FTP usuario / FTP máximo esperado para edad.
  - Clasificación general:
    - 100% world class.
    - 90% international.
    - 80% national.
    - 70% regional.
    - 60% recreational.
    - 50% fair.
    - 40% untrained.
    - 30% poor.
    - 20% very poor.
- **Condiciones de aplicación:** comparación justa por edad/sexo.
- **Capítulos/páginas:** Cap. 26 p. 156–159; 19 p. 121.
- **Comentarios/precauciones:** Ajustar por condiciones de carrera.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

> El libro no define progresiones tipo calistenia, pero sí secuencias de desarrollo de rendimiento, técnica y maratón. Se proponen SkillPaths derivados, marcando que son reconstrucciones a partir de sus capítulos.

### SkillPath: `running-aerobic-base`

- **Disciplina:** running de resistencia.
- **Objetivo final:** construir base aeróbica suficiente para tolerar volumen, tempo e intervalos.
- **Requisitos de seguridad previos:**
  - Ausencia de dolor agudo.
  - Poder correr continuo suave sin síntomas.
  - HR recuperable entre esfuerzos.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Carrera fácil regular | 10–15 km/día suave, ~70–80% FTP o 70% MHR | Tolerar 3–5 sesiones/semana sin dolor/fatiga excesiva | Correr demasiado rápido | Cap. 5 p. 38; 31 p. 180 |
| 2 | Long run semanal | Añadir 1 salida larga de 20–30 km en maratón prep | Completar 25–30 km fácil | Long run demasiado rápida | Cap. 5 p. 38; 60 p. 349 |
| 3 | Tempo ligero | Bloques brisk a ~90% FTP/marathon pace | Mantener técnica y HR estable | Exceder intensidad | Cap. 5 p. 39; 31 p. 180 |
| 4 | Introducción a intervalos | Intervalos suaves/relajados cerca de umbral | Recuperación adecuada entre repeticiones | Acumular fatiga | Cap. 34 p. 199 |

---

### SkillPath: `ftp-threshold-development`

- **Disciplina:** running de resistencia / potencia.
- **Objetivo final:** aumentar FTP y capacidad de sostener potencia alta.
- **Requisitos de seguridad previos:**
  - Base aeróbica estable.
  - FTP estimado o test reciente.
  - Sin enfermedad ni dolor.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Test FTP 10 min | 10 min max effort; FTP = power/1.13 | Obtener FTP reproducible | Salir demasiado rápido | Cap. 66 p. 397 |
| 2 | Zona 3 extensiva | Bloques 90–100% FTP, 800–1200 m | Completar volumen con técnica | Exceder 100–110% demasiado pronto | Cap. 66 p. 398 |
| 3 | Zona 4 VO₂max | Intervalos cortos 100–110% FTP | HR/recuperación adecuados | Recuperación insuficiente | Cap. 66 p. 399 |
| 4 | Test de control | Repetir test cada 6–8 semanas | FTP aumenta o se mantiene | No registrar condiciones | Cap. 66 p. 397 |

---

### SkillPath: `running-economy-cadence`

- **Disciplina:** técnica/economía de carrera.
- **Objetivo final:** reducir `c`/RE mejorando cadencia y minimizando movimiento vertical inútil.
- **Requisitos de seguridad previos:**
  - Sin lesión activa de miembro inferior.
  - Capacidad de registrar cadencia y potencia.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Medición basal | Registrar cadencia, stride, c en recorrido estándar | Datos estables | Comparar con condiciones variables | Cap. 65 p. 391–394 |
| 2 | Aumentar cadencia | Subir gradualmente hacia ≥180 spm | Cadencia mantenida sin dolor | Forzar zancada | Cap. 37 p. 212–219; 39 p. 233–235 |
| 3 | Control de oscilación | Mantener oscilación vertical baja y vuelo eficiente | c igual o menor a misma velocidad | Saltar en exceso | Cap. 37–39 |
| 4 | Consolidación | Mantener nueva cadencia en ritmos variados | c reducido en estándar | Volver a patrón viejo con fatiga | Cap. 65 p. 394 |

---

### SkillPath: `marathon-wall-prevention`

- **Disciplina:** maratón / nutrición / pacing.
- **Objetivo final:** terminar maratón evitando déficit severo de glucógeno y deshidratación.
- **Requisitos de seguridad previos:**
  - Poder correr media maratón sin dificultades.
  - Plan de entrenamiento de ~3 meses.
  - Sin enfermedad aguda.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Base y long runs | Volumen regular y long run 25–30 km | Tolerancia aeróbica | Long run demasiado rápida | Cap. 60 p. 349 |
| 2 | Control de peso/ritmo | Ajustar racing weight y ritmo objetivo | FTP/peso coherente con maratón objetivo | Empezar demasiado rápido | Cap. 27 p. 160–163; 57 p. 334–338 |
| 3 | Fueling training | Practicar bebidas/gels en tiradas | Tolerancia digestiva | No probar en entrenamiento | Cap. 59 p. 344–347 |
| 4 | Carbo-load y taper | 70% carbs 2–3 días + taper | Peso ganado ≤1 kg | Sobrecomer | Cap. 58 p. 340–343 |
| 5 | Carrera | Ritmo uniforme, bebida cada 5K | Pace/power planificado | Salir rápido | Cap. 60 p. 350–352 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Carrera en llano / running gait

- **Cues principales:**
  - Cadencia alta, objetivo ≥180 spm.
  - Zancada eficiente, no sobre-alargar.
  - Contacto con el suelo breve y “spring-loaded”.
  - Oscilación vertical contenida.
  - Brazos sincronizados con avance, sin movimiento excesivo.
  - Ligera inclinación adelante, sin colapsar tronco.
  - Empuje orientado hacia adelante, no excesivamente vertical.
- **Errores frecuentes:**
  - Overstriding / zancada excesiva.
  - Talonazo pesado o rear-foot strike ineficiente.
  - Exceso de oscilación vertical.
  - Cadencia baja.
  - Movimiento lateral excesivo.
  - Braceo cruzado o inútil.
- **Variantes seguras y progresiones sugeridas:**
  - Aumentar cadencia en intervalos cortos.
  - Usar metrónomo/app.
  - Pistas o superficie regular para medir economía.
  - Mantener volumen bajo control al cambiar técnica.
- **Indicaciones específicas por zona:**
  - Cambios agresivos de zancada pueden sobrecargar piernas; progresar gradualmente.
  - Si hay dolor, detener cambio técnico y evaluar.
- **Páginas de referencia:** Caps. 36–39 p. 208–235.

---

### Subidas

- **Cues principales:**
  - Mantener potencia constante, no pace constante.
  - Aceptar reducción de velocidad.
  - Zancada más corta y cadencia estable.
  - Tronco ligeramente adelante.
  - Usar brazos para mantener ritmo.
- **Errores frecuentes:**
  - Intentar mantener pace de llano y entrar en zona roja.
  - Alargar zancada excesivamente.
  - Aceleraciones bruscas.
- **Variantes seguras:**
  - Hill sprints cortos con recuperación completa.
  - Subidas progresivas en ritmo.
- **Indicaciones específicas:**
  - Mayor carga en tobillos/gemelos; progresar gradualmente.
- **Páginas de referencia:** Caps. 5 p. 40; 48 p. 282–287.

---

### Bajadas

- **Cues principales:**
  - Controlar frenado, no dejarse caer.
  - Cadencia alta para reducir impacto.
  - Tronco estable, no echarse demasiado atrás.
- **Errores frecuentes:**
  - Frenar excesivamente con piernas.
  - Zancadas largas descontroladas.
- **Variantes seguras:**
  - Bajadas suaves para practicar técnica.
- **Indicaciones específicas:**
  - Pendientes extremas pueden implicar trabajo excéntrico/frenado y daño muscular.
- **Páginas de referencia:** Cap. 14 p. 86–91; 48 p. 282–287.

---

### Sprint / velocidad

- **Cues principales:**
  - Zancada larga y cadencia alta.
  - Empuje potente.
  - Recuperación completa entre esfuerzos.
- **Errores frecuentes:**
  - Volumen excesivo de sprint sin base.
  - Técnica deficiente bajo fatiga.
- **Variantes seguras:**
  - 200–400 m con recuperación amplia.
  - HIT corto solo si hay tolerancia.
- **Indicaciones específicas:**
  - Alta demanda anaeróbica; no usar en enfermedad.
- **Páginas de referencia:** Caps. 5 p. 39–40; 62 p. 360–365.

---

### Carrera con clima frío/lluvia

- **Cues principales:**
  - Proteger capa aislante de aire.
  - Capas ligeras, transpirables.
  - Aceite protector si no llueve fuerte.
- **Errores frecuentes:**
  - Salir con poca ropa por ambición de ritmo.
  - Ignorar windchill.
- **Variantes seguras:**
  - Ajustar objetivo si lluvia/viento/frío.
- **Indicaciones específicas:**
  - Corredores pequeños/delgados más vulnerables.
- **Páginas de referencia:** Cap. 56 p. 330–333.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

> El libro no es de rehabilitación musculoesquelética. La sección se limita a riesgos médicos/ambientales y reglas de seguridad. La app debe marcar estos casos como no diagnósticos y requerir profesional cuando haya red flags.

### Lesión / condición: Sobreentrenamiento / lesión por exceso de carga

- **Zona:** `full-body` / `lower-limb`
- **Etiología resumida:**
  - Estrés repetido sin recuperación suficiente; aumentos rápidos de volumen/intensidad.
- **Signos y síntomas clave:**
  - Fatiga persistente, rendimiento estancado o decreciente, HR anómalo, dolor muscular prolongado, falta de ganas.
- **Stadia / fases:** No definidas formalmente por el libro.
- **Protocolos de tratamiento o rehab:**
  - **Fase preventiva:**
    - Objetivo: adaptar tejido y sistema.
    - Qué se hace: progresión 5–10%/mes, hard/easy, descanso, variación.
    - Qué NO se hace: aumentar demasiado rápido, ignorar dolor persistente.
    - Criterio para avanzar: tolerar carga sin dolor/dolor retrasado severo.
  - **Fase de recuperación:**
    - Objetivo: restaurar capacidad.
    - Qué se hace: reducir carga, recuperación, reentrenamiento gradual.
    - Criterio para volver: HR/ritmo normalizados, ausencia de dolor funcional.
- **Ejercicios de prehab/movilidad específicos:**
  - El libro no prescribe rutinas concretas; menciona core stability y flexibilidad de cadera como deseables.
- **Umbrales de dolor o red flags:**
  - Dolor agudo, persistente o que altera marcha: detener y consultar.
- **Referencias:** Cap. 4 p. 32–35; 33 p. 190–193.

---

### Lesión / condición: Golpe de calor / heat illness

- **Zona:** `thermoregulation`
- **Etiología resumida:**
  - Producción de calor > capacidad de disipación; humedad alta; deshidratación.
- **Signos y síntomas clave:**
  - Fatiga extrema, mareo, reducción de sudoración, temperatura elevada, confusión, colapso.
- **Stadia / fases:** No formalizadas; riesgo progresivo con Twb y HSI.
- **Protocolos:**
  - **Prevención:**
    - Objetivo: mantener HSI <1 y pérdida de peso ≤5%.
    - Qué se hace: ajustar ritmo, hidratación, esponjas, ropa ligera, evitar calor húmedo.
    - Qué NO se hace: mantener ritmo planificado en Twb peligrosa.
    - Criterio para continuar: síntomas ausentes, hidratación posible, condiciones seguras.
  - **Manejo inmediato:**
    - Objetivo: enfriar y rehidratar.
    - Qué se hace: detener esfuerzo, sombra/enfriamiento, líquidos si consciente.
    - Criterio médico: síntomas neurológicos, colapso, no mejora.
- **Red flags:**
  - Twb >22°C, HSI ≥1, confusión, síncope, temperatura alta.
- **Referencias:** Cap. 54 p. 316–325; 55 p. 326–329.

---

### Lesión / condición: Deshidratación

- **Zona:** `thermoregulation`
- **Etiología resumida:**
  - Sudoración excesiva sin reposición adecuada.
- **Signos y síntomas clave:**
  - Pérdida de peso >5%, sed extrema, HR elevado, bajo rendimiento, mareo.
- **Protocolos:**
  - **Prevención:**
    - Beber según plan, no exceder hasta hiperhidratación.
    - Maratón: 150 ml/5K con bebida ~70 g/L.
  - **Criterio de riesgo:**
    - Pérdida >5% peso corporal; aumento de temperatura >1°C.
- **Red flags:**
  - Mareo, confusión, incapacidad de beber.
- **Referencias:** Cap. 54 p. 322–325; 59 p. 344–347.

---

### Lesión / condición: Hipotermia

- **Zona:** `thermoregulation`
- **Etiología resumida:**
  - Frío + viento + lluvia; ropa insuficiente; corredor ligero.
- **Signos y síntomas clave:**
  - Temblores, torpeza, confusión, descenso de rendimiento.
- **Protocolos:**
  - **Prevención:**
    - Windchill; capas; proteger cabeza/manos; aceite.
    - 2–3 capas con windchill ~0°C; 4 si paso lento.
  - **Manejo:**
    - Detener, secar, calentar; buscar ayuda si confusión.
- **Red flags:**
  - Confusión, pérdida de coordinación, temperatura corporal baja.
- **Referencias:** Cap. 56 p. 330–333.

---

### Lesión / condición: Foster collapse / colapso post-finish

- **Zona:** `cardiovascular`
- **Etiología resumida:**
  - Hipotensión postural, HR bajo tras finish, retorno venoso insuficiente; no principalmente deshidratación.
- **Signos y síntomas clave:**
  - Mareo, incapacidad de mantener postura, gateo, casi síncope tras cruzar meta.
- **Protocolos:**
  - **Prevención:**
    - No mantener ritmo excesivo demasiado tiempo; no parar bruscamente tras esfuerzo máximo.
  - **Manejo:**
    - Tumbar al corredor, no ponerlo de pie.
    - Enfriar y dar agua si consciente.
    - No animar a terminar si hay colapso en curso.
- **Red flags:**
  - Pérdida de conciencia, dolor torácico, recuperación lenta; requerir médico.
- **Referencias:** Cap. 55 p. 326–329.

---

### Lesión / condición: Riesgo de stress fracture por déficit de vitamina D

- **Zona:** `bone / lower-limb`
- **Etiología resumida:**
  - Vitamina D insuficiente afecta salud ósea.
- **Signos y síntomas clave:**
  - Dolor óseo localizado, dolor con carga; no diagnosticado por libro.
- **Protocolos:**
  - **Prevención:**
    - Exposición solar prudente.
    - Suplementación 10–30 µg/día según caso.
    - Objetivo sanguíneo 100 nmol/L para stress fractures; 125 para rendimiento.
- **Red flags:**
  - Dolor óseo persistente: profesional.
- **Referencias:** Cap. 73 p. 434–439.

---

### Lesión / condición: Neuropatía por vitamina B6

- **Zona:** `nervous-system / feet`
- **Etiología resumida:**
  - Sobredosis de suplementos de B6.
- **Signos y síntomas clave:**
  - Hormigueo, quemazón en pies/manos.
- **Protocolos:**
  - **Prevención:**
    - No exceder 25 mg/día sin indicación.
    - Evitar megadosis de 50–250 mg por comprimido.
  - **Manejo:**
    - Suspender suplemento; análisis de sangre; síntomas pueden durar meses.
- **Red flags:**
  - Síntomas neurológicos: detener suplemento y consultar.
- **Referencias:** Cap. 74 p. 440–443.

---

### Lesión / condición: Enfermedad viral / fiebre

- **Zona:** `systemic`
- **Etiología resumida:**
  - Infección viral; ejercicio intenso puede aumentar riesgo cardiaco raro.
- **Signos y síntomas clave:**
  - Fiebre, malestar general, HR elevado, debilidad.
- **Protocolos:**
  - **Regla:** no competir ni entrenar intenso con fiebre/gripe.
  - **Retorno:** esperar normalización de HR-pace; ~10 días tras resfriado según ejemplo.
- **Red flags:**
  - Fiebre, dolor torácico, palpitaciones: profesional.
- **Referencias:** Cap. 33 p. 192–193; 55 p. 328.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Sueño

- El libro no da horas exactas de sueño.
- Afirma que correr mejora sueño, bienestar mental, calma y energía.
- **Regla cualitativa:** usar sueño de calidad como indicador de recuperación; si sueño pobre persistente, reducir carga.
- Referencias: Cap. 2 p. 22–25.

### Estrés

- El running se presenta como herramienta para reducir estrés y mejorar estado de ánimo.
- No hay protocolo cuantitativo.
- **Regla cualitativa:** alto estrés percibido debe tratarse como señal para reducir intensidad, similar a fatiga.
- Referencias: Cap. 2 p. 22–25.

### Nutrición

- Dieta saludable:
  - Base de vegetales/frutas.
  - Granos integrales, patatas, avena.
  - Proteína magra moderada.
  - Grasas saludables, limitar saturadas.
  - Evitar snacks, sodas, alcohol excesivo.
- Distribución para endurance:
  - Carbohidratos ~70%, proteínas ~15%, grasas ~15%.
  - Dieta occidental típica: 45/20/35, considerada excesiva en grasa/proteína.
- Pérdida de grasa:
  - Déficit energético sostenido.
  - No depender de suplementos.
- Carbo-loading y fueling solo relevantes para maratón.
- Referencias: Cap. 6 p. 42–45; 58–59 p. 340–347; 72 p. 428–433.

### Entrenar enfermo

- No entrenar intenso con fiebre o gripe.
- Monitorear HR-pace tras enfermedad.
- Esperar normalización antes de competir.
- Referencias: Cap. 33 p. 192–193; 55 p. 328.

### Suplementos

- La mayoría no recomendada por evidencia débil.
- Cafeína: posible beneficio pequeño.
- Vitamina D: útil si déficit/riesgo.
- B6: evitar megadosis.
- Beet juice: evidencia cuestionada; autores no encontraron efecto.
- Referencias: Cap. 72 p. 428–433; 73 p. 434–439; 74 p. 440–443.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal para reglas de entrenamiento de resistencia basadas en FTP, VO₂max, economía de carrera y potencia.
  - Motor de pacing para carreras: potencia constante, normalización, TSS, IF, viento, colinas y superficie.
  - Módulo de seguridad ambiental: temperatura, wet-bulb, deshidratación, hipotermia, viento/frío.
  - Módulo de maratón: energía, muro, carbo-loading, hidratación, tapering.
  - Extensión de perfil de usuario con FTP, VO₂max, RE/c, Riegel exponent, edad, peso y dinámica de carrera.
  - Validación de datos: límites de FTP limpio, predicciones imposibles, edad/grado, rendimiento relativo.

- **Limitaciones:**
  - No usar para diagnosticar lesiones, enfermedades o condiciones médicas.
  - No usar como fuente principal de fuerza, movilidad o rehabilitación musculoesquelética.
  - Muchas fórmulas asumen corredor estándar con `c = 0.98`; usuarios reales pueden desviarse ±10%.
  - Algunas secciones se basan en observaciones o autoexperimentación (p. ej. beet juice, algunos tests de autores).
  - Power meter es necesario para explotar plenamente las reglas de potencia; sin él, usar estimaciones con precaución.
  - El libro trata élite y récords como benchmark; no todos los usuarios deben aspirar a esos rangos.

- **Recomendaciones específicas:**
  1. Crear `rules/running_engine.ts` o similar con:
     - `ftp_test_10min`
     - `power_training_zones`
     - `riegel_power_time_curve`
     - `normalized_power_and_tss`
     - `race_constant_power_strategy`
  2. Crear `rules/environment_running_safety.ts` con:
     - `temperature_optimum`
     - `wet_bulb_heat_safety`
     - `sweat_loss_limit`
     - `cold_weather_layering`
     - `train_illness_guardrail`
  3. Crear `SkillPath` para:
     - `running-aerobic-base`
     - `ftp-threshold-development`
     - `running-economy-cadence`
     - `marathon-wall-prevention`
  4. Añadir campos al perfil de usuario:
     - `ftpWkg`, `vo2maxMlKgMin`, `runningEconomyRE`, `specificEnergyCostC`, `riegelExponent`, `bodyFatPct`, `ageYears`.
  5. Añadir validadores de seguridad:
     - Bloquear intensidad si fiebre reportada.
     - Alertar si Twb >22°C.
     - Alertar si pérdida de peso estimada >5%.
     - Marcar FTP >6.4 hombres / >5.7 mujeres como sospechoso/imposible para clean baseline.
  6. Añadir módulo de maratón:
     - Cálculo de déficit de carbohidratos.
     - Plan de carbo-loading con límite de ganancia de peso ≤1 kg.
     - Recordatorios de bebida cada 5K y práctica en entrenamientos.

---

## Apéndice A: Cobertura capítulo a capítulo

| Cap. | Tema | Información relevante extraída | Páginas |
|---|---|---|---|
| 1 | Beneficios de correr | Salud física/mental; prevención de enfermedad; no reglas numéricas específicas | 18–21 |
| 2 | Running is fun | Bienestar mental, adherencia, sueño, estrés; cualitativo | 22–25 |
| 3 | Sports physiology | Motor humano: músculos, corazón, sangre, pulmones; cuatro sistemas energéticos | 26–31 |
| 4 | Training principles | 9 principios: estrés/recuperación, intensidad, moderación 5–10%/mes, rendimientos decrecientes, especificidad, periodización, reversibilidad, individualidad, mantenimiento | 32–35 |
| 5 | Training plans | Objetivos y modos: endurance, threshold, VO₂max, speed, RE; volúmenes e intensidades | 36–41 |
| 6 | Sports nutrition | Macros, dieta endurance 70/15/15, carbo-loading intro | 42–45 |
| 7 | Energy | Energía neta, `t=E/P`, gasto bruto 4×, grasa 37.6 kJ/g | 48–51 |
| 8 | Power | Potencia media, HP, cálculo de tiempo de carrera | 52–55 |
| 9 | Power requirements I | Stairs/cycling; potencia total vs específica | 56–61 |
| 10 | Power requirements II | Skating/running; velocidad y potencia específica | 62–67 |
| 11 | Running model | `P=Pr+Pa+Pc`; fórmulas de resistencia | 68–75 |
| 12 | Flat course energy cost | `c=0.98`, RE=201; literatura de economía | 76–79 |
| 13 | Air resistance | `cdA=0.24`, headwind/tailwind, pacemakers | 80–85 |
| 14 | Hills | `Pc`, hill factor Minetti, uphill/downhill | 86–91 |
| 15 | Standard conditions | Parámetros estándar, solución cúbica, Marathon Man | 92–97 |
| 16 | Power-time relationship | Riegel -0.07, %FTP, fuel mix | 98–105 |
| 17 | Limits of human power | FTP límite 6.4/5.7; récords; bioquímica | 106–113 |
| 18 | VO₂max | Definición, tests, factores, valores | 114–117 |
| 19 | FTP | Definición, tests, clasificación | 118–121 |
| 20 | FTP–VO₂max | `FTP=0.072·VO₂max` | 122–127 |
| 21 | Impact of FTP | Tablas de tiempos por FTP | 128–135 |
| 22 | World records | FTP de récords, pacers, treadmill | 136–141 |
| 23 | Age | Declive por edad, Sterken | 142–145 |
| 24 | Masters records | Declive 0.8/1.0/5% hombres | 146–149 |
| 25 | Ladies | Rendimiento femenino ~10% menor; declives mujeres | 150–155 |
| 26 | Performance index | FTP relativo por edad y clase | 156–159 |
| 27 | Body weight | 1% peso ≈ 1% rendimiento; ejemplo Hans | 160–163 |
| 28 | BMI/BFP/racing weight | BMI, LBM, BFP ranges | 164–169 |
| 29 | Lose fat/gain fitness | Balance energético, 37.6 kJ/g, colesterol | 170–175 |
| 30 | Impact of training | Mejoras 10–20%, intensidad | 176–179 |
| 31 | Training pace | Paces por FTP: easy/brisk/threshold/interval/speed | 180–183 |
| 32 | Heart rate | MHR/RHR, capacidad cardiaca, estimaciones | 184–189 |
| 33 | HR and pace | Relación HR-pace, enfermedad, calor, viento | 190–195 |
| 34 | Train/race with HR | Zonas HR, intervalos, semana ejemplo | 196–203 |
| 35 | Running watch | VO₂max y predictor; MHR correcto | 204–207 |
| 36 | Running economy | Impacto RE/c; ±10% afecta tiempos | 208–211 |
| 37 | Running style | Dinámica, shuffle/power stride, cadencia/stride | 212–219 |
| 38 | Stride length/cadence | Fórmulas step/flight/GCT | 220–227 |
| 39 | Running dynamics economy | Cadencia alta reduce costo de vuelo | 228–235 |
| 40 | Fatigue resistance | Exponentes -0.05/-0.07/-0.09 | 236–239 |
| 41 | Altitude training | LHTL +2.5% FTP | 240–243 |
| 42 | Running surface | +1/+3/+6%; sand +33% | 244–247 |
| 43 | Race shoes | 0.25–0.5%/100g; 220g límite | 248–253 |
| 44 | No air resistance | Treadmill más rápido; cdA 0.01 | 254–263 |
| 45 | Bolt in Mexico | Altitud/viento/temp en sprint | 264–269 |
| 46 | Pacemakers/pack | cdA 0.20; ahorro tiempo | 270–275 |
| 47 | Wind | Headwind/tailwind; pérdida neta | 276–281 |
| 48 | Hills | Velocidades por gradiente; tiempo neto | 282–287 |
| 49 | Altitude | Basset formulas; Mexico -10% FTP | 288–293 |
| 50 | Alpe d’Huez | Running/cycling FTP; doping suspicion | 294–299 |
| 51 | Alpe vs wind | Equivalencias headwind/gradient | 300–303 |
| 52 | Pace/race strategy | NP, IF, TSS; constant power | 304–309 |
| 53 | Temperature | Óptimos, pérdidas, wet-bulb | 310–315 |
| 54 | Heat dangers | Heat balance, sweat, HSI | 316–325 |
| 55 | Foster collapse | Causa cardiovascular, manejo tumbado | 326–329 |
| 56 | Rain/wind/cold | Windchill, capas, hipotermia | 330–333 |
| 57 | Marathon wall | Déficit carbos, peso/pace | 334–339 |
| 58 | Carbo-loading | 70% carbs, stores, peso | 340–343 |
| 59 | Sports drinks | 70 g/L, 150 ml/5K | 344–347 |
| 60 | Marathon tips | Training, taper, nutrition, race plan | 348–353 |
| 61 | Other sports | Transferencia FTP a cycling/skating/stairs | 354–359 |
| 62 | Max power | Límites energía systems; fuel mix por tiempo | 360–365 |
| 63 | Power meters | Stryd, beneficios | 368–373 |
| 64 | Power meter reliability | Stryd vs VO₂; ratio ~0.078 | 374–385 |
| 65 | Measuring RE | `c=(P/m)/v`; tracking diario | 386–395 |
| 66 | FTP/zones | Test 10 min; zonas %FTP | 396–399 |
| 67 | Train with power | RE, forma, carga, fitness | 400–405 |
| 68 | Race with power | Pacing, análisis | 406–409 |
| 69 | Power meter tips | Smoothing, NP, VI, TSS, IF, EF | 410–413 |
| 70 | Laboratory testing | Threshold test, VO₂max, RQ, RE | 414–419 |
| 71 | Sub-2 marathon | FTP 6.48 requerido; límite 6.40 | 422–427 |
| 72 | Supplements/beet juice | Cafeína, bicarbonato, creatina, etc.; beet dudoso | 428–433 |
| 73 | Vitamin D | Dosis, niveles, riesgo | 434–439 |
| 74 | Vitamin B6 | Toxicidad, 25 mg/día límite | 440–443 |
| 75 | Daniels VDOT | Comparación empírica; limitaciones | 444–449 |
| 76 | Prehistoric man | Evolución endurance; cualitativo | 450–451 |
| 77 | Sprinters/jumpers | Física de salto; no prioritario para app | 452–457 |
| 78 | Ed Whitlock | Age grading, réc masters | 458–461 |
| 79 | Haile Gebrselassie | Caso FTP/altitud; rendimiento edad | 462–469 |

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# THE SECRET OF RUNNING — Extracción maestra consolidada + ejecución de las 6 recomendaciones

> He vuelto a revisar el libro con el texto completo que me has proporcionado. La extracción queda mucho más completa, con datos cuantitativos, fórmulas, tablas, protocolos y límites de seguridad.  
> Además, desarrollo las **6 recomendaciones** que había planteado para convertirlas en módulos accionables para Plan Maestro OS.

---

## 0. Estado de comprensión y lagunas por ayudas visuales

### 0.1 Qué SICO está claro y extraíble

El libro aporta suficiente información textual como para construir:

- Un motor de rendimiento basado en potencia para running.
- Reglas de entrenamiento por FTP, VO₂max, economía de carrera y fatiga.
- Módulos de entorno: viento, colinas, altitud, temperatura, humedad, superficie y calzado.
- Módulo de maratón: energía, muro, carbo-loading, hidratación, tapering y pacing.
- Reglas de seguridad ambiental y médica básica.
- SkillPaths de base aeróbica, FTP, economía/cadencia y preparación de maratón.

### 0.2 Datos que quedan incompletos o ambiguos por falta de figuras/imágenes

Aunque el texto contiene muchas tablas, hay gráficos cuya resolución exacta no puedo verificar sin imagen. Si quieres máxima precisión, conviene que me proporciones las figuras o páginas escaneadas de estos puntos:

| Tema | Capítulo / página | Qué falta o puede requerir verificación visual |
|---|---:|---|
| Age grading de Sterken | Cap. 23, p. 142–145 | Curva exacta de factor edad por año; el texto da tendencias y ejemplos, pero la figura puede contener factores exactos. |
| Fuel mix vs intensidad | Cap. 16, p. 101–103 | Gráfico de mezcla glucógeno/grasa; el texto da valores clave, pero no todos los puntos intermedios. |
| Potencia máxima vs tiempo | Cap. 17 y 62, p. 106–113, 360–365 | Curva completa de límites humanos; el texto da tabla, pero la figura puede mostrar transiciones exactas. |
| Impacto del viento | Cap. 47, p. 276–281 | Curva velocidad vs viento para Marathon Man y élite; hay ejemplos, pero no todos los puntos. |
| Impacto de colinas | Cap. 48, p. 282–287 | Curva velocidad vs gradiente; hay tabla de valores, pero la figura puede tener más puntos. |
| Impacto de altitud | Cap. 49, p. 288–293 | Curvas Basset/Cerretelli/Daniels; el texto da fórmulas, pero la comparación visual podría ajustar qué fórmula priorizar. |
| Temperatura y rendimiento | Cap. 53, p. 310–315 | Curvas de pérdida por wet-bulb en distintas distancias; hay tabla para Marathon Man, pero la figura puede incluir más casos. |
| Heat Stress Index | Cap. 54, p. 316–325 | Figuras de HSI por Twb, FTP y peso; el texto da fórmulas y umbrales, pero no todos los valores gráficos. |
| Stryd vs VO₂ | Cap. 64, p. 374–385 | Gráficos de correlación; el texto da promedios y rangos, pero no todos los puntos individuales. |
| Sub-2h marathon | Cap. 71, p. 422–427 | Gráfico FTP vs maratón; el texto da valores clave, pero la figura podría mostrar sensibilidad exacta. |

### 0.3 Inconsistencias detectadas en el texto

Estas deben quedar marcadas como revisión en la app:

1. **Hill factor / factor de colina**
   - Cap. 14, p. 88: `η = 45.6 + 1.1622·i`
   - Cap. 39, p. 230 y Cap. 48, p. 282: aparece `45.6 + 1.622·i`
   - Además, en Cap. 39, p. 230, la fórmula de costo vertical usa `1.266·i`.
   - **Recomendación:** dejarlo configurable y marcar `⚠️ inconsistency`. Para implementación inicial, usar `45.6 + 1.1622·i` como valor principal por ser el capítulo dedicado a colinas, pero validar con tablas de velocidad en Cap. 48.

2. **Ejemplo del hill factor en Cap. 14**
   - Usa gradiente 7.4% en el ejemplo de Alpe d’Huez, pero luego calcula con `8.1` en la fórmula.
   - Posible errata o ajuste interno del modelo.

3. **Zonas HR en Cap. 34**
   - Las zonas por porcentaje de MHR se solapan parcialmente.
   - **Recomendación:** usar potencia/FTP como fuente principal; HR solo como validación secundaria.

4. **Power-to-HR ratio en Cap. 69**
   - La frase “decrease in the second half of +5% or higher” es confusa.
   - Interpretación: si la relación potencia/HR empeora ≥5% entre primera y segunda mitad de una sesión aeróbica, la base aeróbica es insuficiente.

5. **Tablas OCR**
   - Algunas tablas largas, especialmente Cap. 21, 44, 46 y 62, pueden tener pequeñas desalineaciones. Las he usado solo donde los valores eran consistentes con el texto circundante.

---

# 1. Recomendación 1 — Módulo `running_engine`

Este módulo debe concentrar el modelo físico/fisiológico del corredor.

---

## 1.1 Entidades principales

### `RunningEngineProfile`

Campos sugeridos:

| Campo | Tipo | Descripción | Fuente |
|---|---:|---|---|
| `ftpWkg` | number | Potencia funcional sostenible 1 h, W/kg. | Cap. 19 p. 118–121 |
| `vo2maxMlKgMin` | number | Consumo máximo de oxígeno. | Cap. 18 p. 114–117 |
| `runningEconomyRE` | number | ml O₂/kg/km. | Cap. 36 p. 208 |
| `specificEnergyCostC` | number | kJ/kg/km; estándar 0.98. | Cap. 12 p. 76–77 |
| `riegelExponent` | number | Por defecto -0.07. | Cap. 16 p. 98 |
| `bodyWeightKg` | number | Peso corporal. | Cap. 27 p. 160 |
| `bodyFatPct` | number | Grasa corporal estimada. | Cap. 28 p. 164–168 |
| `ageYears` | number | Edad. | Cap. 23–26 |
| `sex` | enum | Hombre/mujer/otro, para benchmarks. | Cap. 25 |
| `mhrBpm` | number | Frecuencia cardiaca máxima. | Cap. 32 p. 184 |
| `rhrBpm` | number | Frecuencia cardiaca en reposo. | Cap. 32 p. 185 |
| `fatigueResistance` | enum | `low`, `normal`, `high` | Cap. 40 p. 236 |

---

## 1.2 Fórmulas núcleo

### Regla: `running_engine.core_power_balance`

- **Tipo:** modelo físico.
- **Métrica:** potencia W.
- **Fórmula:**
  ```text
  P = Pr + Pa + Pc
  Pr = c·m·v
  Pa = 0.5·ρ·cdA·(v + vw)²·v
  Pc = (i/100)·m·g·v·η
  ```
- **Valores estándar:**
  - `c = 0.98 kJ/kg/km`
  - `m = peso corporal kg`
  - `ρ = 1.226 kg/m³` a 15°C y 1013 mbar
  - `cdA = 0.24 m²` corredor solo
  - `cdA = 0.20 m²` en pack/pacemakers
  - `cdA = 0.18 m²` pacers ideales
  - `cdA = 0.01 m²` treadmill
  - `g = 9.81 m/s²`
  - `η` = hill factor, con advertencia de inconsistencia.
- **Condiciones:** predicción de velocidad y potencia requerida.
- **Referencias:** Cap. 11 p. 68–75; Cap. 13 p. 80–85; Cap. 14 p. 86–91; Cap. 15 p. 92–97.
- **Acción en app:** calcular velocidad objetivo, potencia requerida, ajuste por viento/colinas/altitud.

---

### Regla: `running_engine.energy_time`

- **Tipo:** energía/rendimiento.
- **Fórmula:**
  ```text
  t = E / P
  E = c·m·d
  ```
- **Ejemplo libro:**
  - Maratón Marathon Man:
    - `E = 2961 kJ` neto.
    - `P = 235 W`.
    - `t = 12600 s = 3:30`.
- **Eficiencia metabólica:** 25%; gasto bruto ≈ 4× neto.
- **Referencias:** Cap. 7 p. 48–51; Cap. 8 p. 52–55.
- **Acción:** estimar tiempo y gasto energético.

---

### Regla: `running_engine.specific_energy_cost`

- **Tipo:** economía de carrera.
- **Valores:**
  - `c` estándar = `0.98 kJ/kg/km`.
  - `RE` estándar = `201 ml O₂/kg/km`.
  - Conversión:
    ```text
    c = 0.004875 · RE
    RE = c / 0.004875
    P/m = 0.08125 · VO₂
    ```
- **Rango práctico:**
  - Élite muy eficiente: RE ~180.
  - Promedio: RE ~201.
  - Recreacionales medidos en test: 213–248.
- **Referencias:** Cap. 12 p. 76–79; Cap. 36 p. 208–211; Cap. 64 p. 376–381; Cap. 65 p. 386–395.
- **Acción:** monitorear economía diaria con power meter: `c = (P/m) / v`.

---

### Regla: `running_engine.riegel_power_time_curve`

- **Tipo:** fatiga/potencia.
- **Fórmula:**
  ```text
  v2 / v1 = (d2 / d1)^-0.07
  ```
- **Exponentes:**
  - Normal: `-0.07`
  - Alta resistencia a fatiga: `-0.05`
  - Baja resistencia: `-0.09`
- **Porcentajes de FTP:**

| Duración | %FTP |
|---:|---:|
| 10 min | 113% |
| 20 min | 108% |
| 40 min | 103% |
| 60 min | 100% |
| 120 min | 95% |
| 240 min | 91% |
| 300 min | 89% |

- **Relaciones clave:**
  - FTP = 88% de la potencia asociada a VO₂max/10 min.
  - Maratón élite ≈ 84% del ritmo de VO₂max.
- **Referencias:** Cap. 16 p. 98–104; Cap. 40 p. 236–239.
- **Acción:** predecir tiempos por distancia, ajustar maratón/media, validar perfil de fatiga.

---

### Regla: `running_engine.fuel_mix`

- **Tipo:** metabolismo.
- **Valores clave:**

| Momento/intensidad | Glucógeno | Grasas |
|---|---:|---:|
| VO₂max / 10 min | 90% | 10% |
| FTP / 60 min | 75% | 25% |
| 120 min / 95% FTP | 69% | 31% |
| 240 min / 91% FTP | 64% | 36% |

- **Maratón según ritmo:**

| Resistencia | Ritmo maratón | %FTP | % grasas |
|---|---|---:|---:|
| Excepcional | muy alto | 100% | 26% |
| Buena | alto | 97% | 28% |
| Normal | normal | 94% | 30% |
| Menos buena | conservador | 92% | 32% |
| Limitada | muy conservador | 90% | 34% |

- **Referencias:** Cap. 16 p. 101–103; Cap. 57 p. 335–337.
- **Acción:** calcular riesgo de muro y necesidad de carbohidratos.

---

### Regla: `running_engine.ftp_vo2max_relation`

- **Tipo:** fisiología.
- **Fórmula:**
  ```text
  FTP = 0.072 · VO₂max
  ```
- **Ejemplo:**
  - VO₂max 51 → FTP 3.67 W/kg.
- **Límites limpios:**
  - Hombres: FTP 6.40 W/kg ≈ VO₂max 88.8.
  - Mujeres: FTP 5.70 W/kg ≈ VO₂max 79.2.
- **Referencias:** Cap. 20 p. 122–125; Cap. 17 p. 111–113.
- **Acción:** estimar FTP desde VO₂max y validar datos imposibles.

---

### Regla: `running_engine.ftp_estimation_from_race`

- **Tipo:** test indirecto.
- **Fórmula base sin aire:**
  ```text
  Pr/m = 0.27 · v
  ```
  con `v` en km/h.
- **Corrección por duración:**
  ```text
  correction = (t / 60)^-0.07
  FTP = Pr/m · correction
  ```
- **Ejemplo:**
  - Test 5 min a 15 km/h:
    - `0.27 · 15 = 4.05`
    - corrección `(5/60)^-0.07 = 0.84`
    - FTP ≈ `3.40 W/kg`.
- **Recomendación:** usar test de 10 o 20 min mejor que 5 min.
- **Referencias:** Cap. 19 p. 119–121.
- **Acción:** estimar FTP si no hay power meter.

---

### Regla: `running_engine.ftp_test_10min`

- **Tipo:** test con potencia.
- **Protocolo:**
  1. Calentamiento 10–20 min con aceleraciones.
  2. 10 min a máximo esfuerzo.
  3. Enfriamiento 10 min.
- **Cálculo:**
  ```text
  FTP = potencia media específica 10 min / 1.13
  ```
- **Frecuencia:** cada 6–8 semanas.
- **Referencias:** Cap. 66 p. 396–399.
- **Acción:** actualizar FTP y zonas.

---

### Regla: `running_engine.power_zones`

- **Tipo:** intensidad.
- **Zonas por %FTP:**

| Zona | Objetivo | Forma | %FTP |
|---:|---|---|---:|
| 0 | Recuperación/circulación | Warm-up, recovery | 60–70 |
| 1 | Capacidad aeróbica | Endurance 10–30 km | 70–80 |
| 2 | Tempo endurance | Bloques 3–5 km | 80–90 |
| 3 | FTP/lactato | Intervalos largos 800–1200 m | 90–100 |
| 4 | VO₂max | Intervalos cortos 400–600 m | 100–110 |
| 5 | Capacidad anaeróbica | Speed 200 m | 110–150 |
| 6 | Potencia neuromuscular | Sprints 50–100 m | >150 |

- **Referencias:** Cap. 66 p. 397–399.
- **Acción:** prescribir entrenamientos por potencia.

---

### Regla: `running_engine.hr_zones_secondary`

- **Tipo:** intensidad por HR.
- **Zonas HR:**

| Zona | %MHR |
|---:|---:|
| 0 | 60–70 |
| 1 | 70–75 |
| 2 | 75–80 |
| 3 | 80–85 |
| 4 | 85–100 |
| 5 | 90–100 |
| 6 | 95–100 |

- **Advertencia:** zonas solapadas; usar como secundaria.
- **Referencias:** Cap. 34 p. 196–198.
- **Acción:** fallback si no hay potencia.

---

### Regla: `running_engine.training_paces_by_ftp`

- **Tipo:** ritmo de entrenamiento.
- **Componentes:**
  - Easy: ≤80% FTP pace.
  - Brisk: ~90% FTP pace / maratón.
  - Threshold: ~100% FTP pace.
  - Interval: ~110% FTP pace / 5K.
  - Speed: ~120% FTP pace / 1500m.
- **Tabla completa del libro:**

| FTP | Easy | Brisk | Threshold | Interval | Speed |
|---:|---:|---:|---:|---:|---:|
| 2.00 | 10:23 | 08:40 | 08:16 | 07:30 | 06:52 |
| 2.25 | 09:16 | 07:44 | 07:23 | 06:42 | 06:08 |
| 2.50 | 08:21 | 06:59 | 06:40 | 06:03 | 05:32 |
| 2.75 | 07:37 | 06:22 | 06:05 | 05:31 | 05:03 |
| 3.00 | 06:59 | 05:50 | 05:34 | 05:03 | 04:37 |
| 3.25 | 06:30 | 05:25 | 05:11 | 04:42 | 04:18 |
| 3.50 | 06:03 | 05:03 | 04:49 | 04:23 | 04:00 |
| 3.75 | 05:40 | 04:44 | 04:31 | 04:06 | 03:45 |
| 4.00 | 05:20 | 04:28 | 04:15 | 03:52 | 03:32 |
| 4.25 | 05:03 | 04:13 | 04:01 | 03:39 | 03:20 |
| 4.50 | 04:47 | 04:00 | 03:49 | 03:28 | 03:10 |
| 4.75 | 04:33 | 03:48 | 03:38 | 03:18 | 03:01 |
| 5.00 | 04:21 | 03:38 | 03:28 | 03:09 | 02:53 |
| 5.25 | 04:10 | 03:29 | 03:19 | 03:01 | 02:45 |
| 5.50 | 04:00 | 03:20 | 03:11 | 02:53 | 02:39 |
| 5.75 | 03:51 | 03:12 | 03:04 | 02:47 | 02:33 |
| 6.00 | 03:42 | 03:06 | 02:57 | 02:41 | 02:27 |
| 6.25 | 03:34 | 02:59 | 02:51 | 02:35 | 02:22 |
| 6.50 | 03:27 | 02:53 | 02:45 | 02:30 | 02:17 |

- **Referencia:** Cap. 31 p. 180–182.
- **Acción:** generar ritmos de sesión automáticamente.

---

### Regla: `running_engine.training_distribution`

- **Tipo:** volumen/intensidad.
- **Reglas:**

| Elemento | Prescripción | Ref |
|---|---|---|
| Easy endurance | 10–15 km/día; 50–100 km/semana para comprometidos; HR ~70% MHR; ritmo ~1 min/km más lento que maratón. | Cap. 5 p. 38 |
| Long run | 25–30 km semanal en preparación maratón; 2.5–3 h. | Cap. 5 p. 38; Cap. 60 p. 349 |
| Threshold | Bloques 2–5 km; total 10–20 km; HR 85–90% MHR; no más de 1/semana. | Cap. 5 p. 39 |
| VO₂max intervals | 800–1200 m; total ~6 km; 90–100% MHR/VO₂max; 1–2/semana. | Cap. 5 p. 39; Cap. 31 p. 180 |
| Speed intervals | 200–400 m; total 5–6 km; HR cercana a MHR; 1–2/semana. | Cap. 5 p. 39; Cap. 31 p. 181 |
| HIT | 20 s sprint / 10 s recuperación; ~30 min; puede mejorar VO₂max 13% y anaeróbico 28% en 6 semanas. | Cap. 5 p. 40; Cap. 34 p. 199 |
| Fartlek | ~1 h; intensidad 50–100% MHR. | Cap. 5 p. 40 |
| Hills | 10–20 × 100 m o 200–400 m uphill; recuperación bajando. | Cap. 5 p. 40 |
| Recuperación entre intervalos | HR debe bajar <70% MHR. | Cap. 5 p. 39 |
| Días duros/fáciles | Alternar; tras sesión muy dura ≥2 días recuperación. | Cap. 4 p. 32–33; Cap. 34 p. 198 |
| Máximo intervalos | No más de 2 sesiones intensas/semana. | Cap. 34 p. 198 |

- **Acción:** construir plan semanal y validar carga.

---

### Regla: `running_engine.training_principles`

- **Tipo:** progresión.
- **Valores:**
  - Incremento de carga: 5–10% por mes.
  - Mantener estímulo ~6 semanas antes de cambiar.
  - Progreso típico hasta 50–80 km/semana + 1 sesión intensa.
  - Reversibilidad: 1 mes sin entrenar ≈ -10%.
  - Especificidad: la mayor parte del entrenamiento debe ser correr.
- **Referencias:** Cap. 4 p. 32–35.
- **Acción:** límites de progresión y alertas de sobreentrenamiento.

---

### Regla: `running_engine.body_weight_effect`

- **Tipo:** composición corporal.
- **Regla:**
  - 1% de pérdida de peso ≈ 1% de mejora de velocidad/FTP específico si la potencia absoluta se mantiene.
- **Ejemplo autor:**
  - Hans perdió 15% de peso.
  - VO₂max y FTP subieron ~15%.
  - Rendimiento mejoró ~15%.
- **Límites de grasa corporal:**

| Categoría | Hombres | Mujeres |
|---|---:|---:|
| Grasa esencial | 2–5% | 10–15% |
| Atletas | 6–13% | 14–20% |
| Fitness | 14–17% | 21–24% |
| Promedio | 18–24% | 25–31% |
| Sobrepeso | >25% | >32% |

- **Pérdida de grasa:**
  ```text
  fatLossG/day = (energyUseKj - energyIntakeKj) / 37.6
  ```
- **Referencias:** Cap. 27 p. 160–163; Cap. 28 p. 164–168; Cap. 29 p. 170–175.
- **Acción:** módulo de racing weight con salvaguardas.

---

### Regla: `running_engine.age_and_sex`

- **Tipo:** age grading.
- **Pico:** ~30 años.
- **Declive hombres:**
  - 35–54: 0.8%/año.
  - 55–74: 1.0%/año.
  - >75: ≥5%/año.
- **Declive mujeres:**
  - 35–54: 1.0%/año.
  - 55–74: 1.6%/año.
  - >75: 2.9%/año.
- **Rendimiento femenino:**
  - FTP femenino ~89–90% del masculino.
  - Explicación principal del libro: ~10% más de grasa corporal.
- **Referencias:** Cap. 23 p. 142–145; Cap. 24 p. 146–149; Cap. 25 p. 150–155.
- **Acción:** ajustar expectativas, FTP máximo esperado y performance index.

---

### Regla: `running_engine.performance_index`

- **Tipo:** benchmark.
- **Fórmula:**
  ```text
  performanceIndex = userFTP / ageSexMaxFTP
  ```
- **Clases:**

| Clase | % | FTP hombre | FTP mujer |
|---|---:|---:|---:|
| World class | 100% | 6.4 | 5.7 |
| International | 90% | 5.8 | 5.1 |
| National | 80% | 5.1 | 4.6 |
| Regional | 70% | 4.5 | 4.0 |
| Recreational | 60% | 3.8 | 3.4 |
| Fair | 50% | 3.2 | 2.8 |
| Untrained | 40% | 2.6 | 2.3 |
| Poor | 30% | 1.9 | 1.7 |
| Very poor | 20% | 1.4 | 1.1 |

- **Ejemplos:**
  - Marathon Man 3:30 a 30 años: 3.67/6.40 = 57% → fair.
  - Mismo 3:30 a 60 años: 3.67/5.20 = 71% → regional.
  - Mismo 3:30 a 75 años: ~83% → nacional.
- **Referencias:** Cap. 26 p. 156–159; Cap. 19 p. 121.
- **Acción:** clasificación justa por edad/sexo.

---

### Regla: `running_engine.running_dynamics`

- **Tipo:** técnica.
- **Fórmulas:**
  ```text
  speedKmh = strideLengthM · cadenceSpm · 60 / 1000
  GCTms = stepLengthM / speedKmh · 3600
  flightTimeMs = (60 / cadenceSpm - GCTms / 1000) · 1000
  flightLengthM = flightTimeMs · speedKmh / 3600
  strideLengthM = stepLengthM + flightLengthM
  flightAltitudeM = 0.5 · g · (flightTimeS / 2)²
  ```
- **Objetivos prácticos:**
  - Cadencia ≥180 spm.
  - GCT bajo, pero interpretar sobre todo por velocidad.
  - Oscilación vertical contenida.
- **Hallazgos:**
  - A mayor cadencia, disminuye el costo energético de la fase de vuelo.
  - A mayor velocidad, aumenta stride length y flight time.
  - GCT depende principalmente de velocidad y step length.
- **Referencias:** Cap. 37 p. 212–219; Cap. 38 p. 220–227; Cap. 39 p. 228–235.
- **Acción:** SkillPath de economía de carrera.

---

### Regla: `running_engine.load_metrics`

- **Tipo:** carga.
- **Métricas:**
  ```text
  NP = ((1/t) · Σ(Pi⁴ · ti))^0.25
  IF = NP / FTP
  TSS = 100 · t_hours · IF²
  VI = NP / averagePower
  EF = NP / averageHR
  ```
- **Clasificación TSS:**
  - <50: ligero/recuperación.
  - 50–100: normal diario.
  - 100–150: duro, recuperación próxima día.
  - >150: muy duro, recuperación larga.
- **Clasificación IF:**
  - `<0.75`: fácil/recuperación.
  - `0.75–0.85`: endurance normal.
  - `0.85–0.95`: tempo/maratón.
  - `0.95–1.05`: intervalos cortos/carreras 10–21 km.
  - `1.05–1.15`: velocidad.
  - `>1.15`: pista corta.
- **Referencias:** Cap. 52 p. 304–309; Cap. 69 p. 410–413.
- **Acción:** calcular carga, recuperación y eficiencia.

---

### Regla: `running_engine.clean_human_limits`

- **Tipo:** validación.
- **Valores:**
  - FTP limpio hombres: ~6.40 W/kg.
  - FTP limpio mujeres: ~5.70 W/kg.
  - VO₂max equivalente: ~88.8 / 79.2 ml/kg/min.
  - Sub-2h maratón requeriría ~6.48 W/kg, por encima del límite limpio estimado.
- **Referencias:** Cap. 17 p. 106–113; Cap. 71 p. 422–426.
- **Acción:** sanity check de FTP/VO₂max; no acusar dopaje, solo marcar improbable.

---

# 2. Recomendación 2 — Módulo `environment_running_safety`

Este módulo ajusta rendimiento y aplica límites de seguridad.

---

## 2.1 Aire, viento y drafting

### Regla: `env.air_resistance`

- **Métrica:** `Pa`.
- **Valores:**
  - `cdA` solo: 0.24.
  - Pack: 0.20.
  - Pacers ideales: 0.18.
  - Treadmill: 0.01.
  - Tailwind: usar `cdA = 0.12` porque ventaja es ~50% de la desventaja headwind.
- **Ejemplos:**
  - Marathon Man a 12.06 km/h: Pa ≈ 5 W, ~2% de Pr.
  - Élite/sprint: Pa mucho mayor; Bolt 167 W, ~17% de Pr.
- **Referencias:** Cap. 13 p. 80–85; Cap. 44 p. 254–263; Cap. 45 p. 264–269.

---

### Regla: `env.drafting`

- **Efecto:**
  - Marathon Man 3:30 gana ~47 s en maratón corriendo en pack.
  - Élite maratón gana ~84 s con pacemakers.
  - Regla práctica: ~1 s por vuelta de 400 m en élite.
- **Recomendación:** sugerir correr en grupo si el objetivo es rendimiento.
- **Referencias:** Cap. 46 p. 270–275; Cap. 22 p. 138–140.

---

### Regla: `env.wind`

- **Valores clave:**
  - Headwind 36 km/h: Marathon Man baja de 13.1 a ~10.0 km/h.
  - Tailwind 36 km/h: sube solo a ~13.6 km/h.
  - Tailwind ventaja ≈ 50% de headwind.
  - Desde viento fuerza 3 ya hay impacto perceptible.
  - Élite: reducción de velocidad ≈16% de la velocidad del viento en headwind; tailwind ≈+6%.
- **Regla de tiempo:**
  - En ida/vuelta, el viento siempre produce pérdida neta.
- **Acción:**
  - Ajustar objetivo de potencia/ritmo.
  - Sugerir refugio en grupo.
  - Marcar rutas expuestas como condicionadas.
- **Referencias:** Cap. 47 p. 276–281.

---

## 2.2 Colinas

### Regla: `env.hills`

- **Estrategia:** potencia constante, no pace constante.
- **Velocidades Marathon Man:**

| Gradiente | Velocidad |
|---:|---:|
| 0% | 13.1 km/h |
| +5% | 10.5 km/h |
| -5% | 15.8 km/h |

- **Velocidades élite:**

| Gradiente | Velocidad |
|---:|---:|
| 0% | 21.6 km/h |
| +5% | 17.7 km/h |
| -5% | 25.1 km/h |

- **Reglas:**
  - Se pierde más tiempo subiendo del que se gana bajando.
  - Pendientes extremas negativas pueden implicar frenado y eficiencia negativa.
  - Boston drop 140 m ≈ 2.5 min de ventaja teórica.
- **Advertencia:** hill factor con inconsistencia; usar `hillFactorMode` configurable.
- **Referencias:** Cap. 14 p. 86–91; Cap. 48 p. 282–287.

---

## 2.3 Altitud

### Regla: `env.altitude_performance`

- **Fórmulas Basset:**
  ```text
  Antes de aclimatación:
  %FTP = 100.352 - 4.307·h - 1.434·h² + 0.1781·h³

  Después de aclimatación:
  %FTP = 99.921 - 1.8991·h - 1.1219·h²
  ```
  con `h` en km.
- **Ejemplo Mexico City 2250 m:**
  - FTP retenido ≈90%.
  - Reducción ≈10%.
  - Marathon Man pierde ~30 min en maratón.
- **Aclimatación:**
  - ~1 mes.
  - Hemoglobina puede aumentar 10–15%.
- **Sprint:**
  - Puede beneficiarse por menor resistencia del aire.
- **Referencias:** Cap. 49 p. 288–293.

---

### Regla: `env.altitude_training_lhtl`

- **Protocolo:**
  - Vivir 2500–3000 m.
  - Entrenar ~1250 m.
  - Duración ~1 mes.
- **Efecto esperado:**
  - FTP +2.5%.
- **Ejemplo Marathon Man:**
  - Maratón mejora de 3:30 a ~3:25:07.
- **Referencias:** Cap. 41 p. 240–243.
- **Acción:** opcional para atletas con acceso a altitud; no garantizar resultado.

---

## 2.4 Superficie y calzado

### Regla: `env.surface_modifier`

| Superficie/caso | Modificador de `c` |
|---|---:|
| Ideal: pista/asfalto liso | 0% |
| Curvas/baches | +1% |
| Trail/bosque | +3% |
| Cross mixto | +6% |
| Arena | hasta +33% |

- **Impacto Marathon Man maratón:**
  - Ideal: 3:30:00
  - Bendy: 3:31:58
  - Forest: 3:35:53
  - Cross: 3:41:48
- **Referencias:** Cap. 42 p. 244–247.

---

### Regla: `env.shoe_weight`

- **Ganancia práctica:**
  - 0.25–0.50% por cada 100 g de reducción.
  - Reducción de 200 g en par → 0.5–1.0%.
  - Maratón Marathon Man → 1–2 min.
- **Límite:**
  - Por debajo de ~220 g/zapato no se observa ganancia adicional según revisión citada.
- **Seguridad:**
  - No sacrificar amortiguación/protección.
  - Para maratón, autores sugieren precaución con voladoras extremas si aumenta riesgo.
- **Referencias:** Cap. 43 p. 248–253.

---

## 2.5 Temperatura y humedad

### Regla: `env.temperature_optimum`

- **Óptimos:**
  - Élite maratón: ~4–5°C.
  - Corredores normales: ~7°C.
  - Recreacionales: ~15°C.
  - Mujeres: ~9°C.
- **Pérdidas:**
  - -5°C: ~3% pérdida; élite 2%, normales 4%.
  - 25°C: ~6% élite, hasta ~18% normales.
- **Óptimos por distancia:**

| Distancia | Hombres | Mujeres |
|---:|---:|---:|
| 100 m | 22.1°C | 23.0°C |
| 200 m | 22.6°C | 22.3°C |
| 400 m | 20.8°C | 17.7°C |
| 800 m | 19.0°C | 18.4°C |
| 1500 m | 22.2°C | 19.4°C |
| 5 km | 18.3°C | 17.2°C |
| 10 km | 16.8°C | 19.0°C |
| Media maratón | 14.3°C | 13.4°C |
| Maratón | 9.7°C | 11.0°C |

- **Referencias:** Cap. 53 p. 310–315.

---

### Regla: `env.wet_bulb_safety`

- **Umbrales:**
  - Twb >15°C: condiciones severas.
  - Twb >22°C: condiciones peligrosas.
  - HSI debe ser <1.
  - Twb 30°C puede producir HSI 2–3.
- **Acción:**
  - Si Twb >22: bloquear intensidad alta o carrera.
  - Si Twb >15: advertencia dura, reducir objetivo.
- **Referencias:** Cap. 54 p. 316–325.

---

### Regla: `env.heat_balance`

- **Fórmulas:**
  ```text
  E = H - R - C
  R = 9.1 · (Tskin - Twb)
  C = 12.5 · v^0.6 · (Tskin - Twb)
  S = 0.0016 · E
  ```
  donde:
  - `E` = net heat production W.
  - `H` = heat production W.
  - `R` = radiación W.
  - `C` = convección W.
  - `S` = sudor L/h.
  - `Tskin` estándar 34°C.
- **Límites:**
  - Pérdida de líquido ≤5% peso corporal.
  - Aumento de temperatura rectal ≤1°C.
  - Aproximación: +0.2°C por 1% de peso perdido.
- **Referencias:** Cap. 54 p. 317–325.

---

### Regla: `env.cold_windchill`

- **Fórmula windchill:**
  ```text
  Twc = 13.12 + 0.6215·Ta - 11.37·v^0.16 + 0.3965·Ta·v^0.16
  ```
- **Ropa:**
  - Windchill cercano a 0°C: 2–3 capas.
  - Si velocidad baja a paso de caminar: hasta 4 capas.
  - Lluvia elimina capa aislante; aire aísla ~26× mejor que agua.
- **Población vulnerable:**
  - Corredores pequeños/delgados son más vulnerables al frío.
- **Acción:**
  - Requerir equipo si Twc bajo + lluvia/viento.
- **Referencias:** Cap. 56 p. 330–333.

---

## 2.6 Enfermedad y seguridad médica

### Regla: `env.illness_guardrail`

- **Reglas:**
  - No competir ni entrenar intenso con fiebre/gripe.
  - Tras resfriado, HR puede subir 13–18 bpm; esperar normalización ~10 días.
  - Riesgo raro de arritmia fatal con infección viral.
- **Acción:**
  - Bloquear sesiones intensas si fiebre reportada.
  - Si HR-pace se desvía +13–18 bpm, sugerir recuperación.
- **Referencias:** Cap. 33 p. 192–193; Cap. 55 p. 326–329.

---

# 3. Recomendación 3 — SkillPaths

---

## SkillPath 1: `running-aerobic-base`

### Propósito

Construir base aeróbica suficiente para tolerar volumen, tempo e intervalos.

### Requisitos previos

- Ausencia de dolor agudo.
- Poder correr continuo suave sin síntomas.
- HR recuperable entre esfuerzos.

### Pasos

| Step | Nombre | Descripción | Criterio de avance | Errores | Ref |
|---:|---|---|---|---|---|
| 1 | Easy regular | 3–5 sesiones fáciles/semana; 10–15 km por sesión; HR ~70% MHR. | Tolerar carga sin dolor/fatiga excesiva. | Correr demasiado rápido. | Cap. 5 p. 38 |
| 2 | Long run | Añadir 1 salida larga semanal progresiva. | Completar 20–30 km fácil. | Long run a ritmo maratón. | Cap. 5 p. 38; Cap. 60 p. 349 |
| 3 | Brisk tempo | Bloques suaves a ~90% FTP/marathon pace. | Mantener técnica y HR estable. | Exceder intensidad. | Cap. 5 p. 39; Cap. 31 p. 180 |
| 4 | Introducción a intervalos | Intervalos relajados o threshold suave. | HR baja <70% MHR entre bloques. | Acumular fatiga. | Cap. 34 p. 198–199 |

---

## SkillPath 2: `ftp-threshold-development`

### Propósito

Aumentar FTP y capacidad de sostener potencia alta.

### Requisitos previos

- Base aeróbica estable.
- FTP estimado o test reciente.
- Sin enfermedad ni dolor.

### Pasos

| Step | Nombre | Descripción | Criterio de avance | Errores | Ref |
|---:|---|---|---|---|---|
| 1 | Test FTP 10 min | 10 min max effort; FTP = power/1.13. | FTP reproducible. | Salir demasiado rápido. | Cap. 66 p. 397 |
| 2 | Zona 3 extensiva | Bloques 90–100% FTP, 800–1200 m. | Completar volumen con técnica. | Exceder 100–110% demasiado pronto. | Cap. 66 p. 398 |
| 3 | Zona 4 VO₂max | Intervalos cortos 100–110% FTP. | HR/recuperación adecuados. | Recuperación insuficiente. | Cap. 66 p. 399 |
| 4 | Retest | Repetir test cada 6–8 semanas. | FTP aumenta o se mantiene. | No registrar condiciones. | Cap. 66 p. 397 |

---

## SkillPath 3: `running-economy-cadence`

### Propósito

Reducir `c`/RE mejorando cadencia y minimizando movimiento vertical inútil.

### Requisitos previos

- Sin lesión activa de miembro inferior.
- Capacidad de registrar cadencia y potencia.

### Pasos

| Step | Nombre | Descripción | Criterio de avance | Errores | Ref |
|---:|---|---|---|---|---|
| 1 | Medición basal | Registrar cadencia, stride, GCT, `c` en recorrido estándar. | Datos estables. | Comparar bajo condiciones variables. | Cap. 65 p. 391–394 |
| 2 | Aumentar cadencia | Subir gradualmente hacia ≥180 spm. | Cadencia mantenida sin dolor. | Forzar zancada. | Cap. 37 p. 212–219; Cap. 39 p. 233–235 |
| 3 | Control de vuelo | Mantener oscilación vertical baja y vuelo eficiente. | `c` igual o menor a misma velocidad. | Saltar en exceso. | Cap. 39 p. 228–235 |
| 4 | Consolidación | Mantener nueva cadencia en ritmos variados. | `c` reducido en estándar. | Volver a patrón viejo con fatiga. | Cap. 65 p. 394 |

---

## SkillPath 4: `marathon-wall-prevention`

### Propósito

Terminar maratón evitando déficit severo de glucógeno y deshidratación.

### Requisitos previos

- Poder correr media maratón sin dificultades.
- Plan de preparación de ~3 meses.
- Sin enfermedad aguda.

### Pasos

| Step | Nombre | Descripción | Criterio de avance | Errores | Ref |
|---:|---|---|---|---|---|
| 1 | Base y long runs | Volumen regular; long run 25–30 km. | Tolerancia aeróbica. | Long run demasiado rápida. | Cap. 60 p. 349 |
| 2 | Control de peso/ritmo | Ajustar racing weight y ritmo objetivo. | FTP/peso coherente con maratón. | Empezar demasiado rápido. | Cap. 27 p. 160; Cap. 57 p. 334–338 |
| 3 | Fueling training | Practicar bebidas/gels en tiradas. | Tolerancia digestiva. | No probar en entrenamiento. | Cap. 59 p. 344–347 |
| 4 | Carbo-load y taper | 70% carbs 2–3 días + taper. | Ganancia de peso ≤1 kg. | Sobrecomer. | Cap. 58 p. 340–343 |
| 5 | Carrera | Ritmo/potencia planificado; bebida cada 5K. | Cumplir plan. | Salir rápido. | Cap. 60 p. 350–352 |

---

# 4. Recomendación 4 — Extensión del perfil de usuario

## 4.1 Campos recomendados

### Perfil fisiológico

| Campo | Tipo | Rango/validación | Fuente |
|---|---:|---|---|
| `ftpWkg` | number | 1.0–6.6 | Cap. 19 |
| `vo2maxMlKgMin` | number | 10–95 | Cap. 18 |
| `specificEnergyCostC` | number | 0.80–1.30 | Cap. 64 |
| `runningEconomyRE` | number | 165–270 | Cap. 36/64 |
| `riegelExponent` | number | -0.09 a -0.05 | Cap. 16/40 |
| `mhrBpm` | number | 120–220 | Cap. 32 |
| `rhrBpm` | number | 30–100 | Cap. 32 |
| `lactateThresholdHrBpm` | number | opcional | Cap. 35/70 |
| `fatigueResistance` | enum | low/normal/high | Cap. 40 |

### Composición corporal

| Campo | Tipo | Validación | Fuente |
|---|---:|---|---|
| `bodyWeightKg` | number | 35–200 | Cap. 27 |
| `bodyFatPct` | number | 2–50 | Cap. 28 |
| `leanBodyMassKg` | number | derivado | Cap. 28 |
| `racingWeightTargetKg` | number | no bajar de grasa esencial | Cap. 28 |

### Entrenamiento

| Campo | Tipo | Uso | Fuente |
|---|---:|---|---|
| `weeklyKmTarget` | number | volumen | Cap. 5/60 |
| `longRunKmTarget` | number | maratón | Cap. 5/60 |
| `intervalSessionsPerWeek` | number | máx 2 | Cap. 34 |
| `tssWeekly` | number | carga | Cap. 52 |
| `hrPaceBaseline` | object | monitoreo | Cap. 33 |
| `powerToHrBaseline` | object | eficiencia | Cap. 69 |

### Condiciones y seguridad

| Campo | Tipo | Uso | Fuente |
|---|---:|---|---|
| `heatTolerance` | enum | opcional | Cap. 53/54 |
| `coldTolerance` | enum | opcional | Cap. 56 |
| `altitudeAcclimatized` | boolean | ajuste FTP | Cap. 49 |
| `recentIllness` | boolean | guardrail | Cap. 33/55 |
| `fever` | boolean | bloqueo | Cap. 55 |

---

# 5. Recomendación 5 — Validadores de seguridad

## 5.1 Guardrails médicos y ambientales

| Validador | Trigger | Acción | Severidad | Ref |
|---|---|---|---|---|
| Fiebre/enfermedad | `fever == true` o `recentIllness == true` | Bloquear intensidad; sugerir descanso. | Alta | Cap. 33; 55 |
| HR-pace anómalo | HR +13–18 bpm a mismo pace | Marcar posible enfermedad/fatiga; reducir carga. | Media/alta | Cap. 33 p. 192–193 |
| Twb severa | Twb >15°C | Reducir objetivo; advertencia. | Media | Cap. 54 |
| Twb peligrosa | Twb >22°C | Bloquear intensidad/carrera. | Crítica | Cap. 54 |
| HSI | `HSI >= 1` | Detener o cancelar sesión. | Crítica | Cap. 54 |
| Deshidratación estimada | Pérdida >5% peso | Requerir plan de hidratación o reducir sesión. | Alta | Cap. 54 |
| Frío/lluvia | Windchill bajo + lluvia | Requerir capas; advertir hipotermia. | Media/alta | Cap. 56 |
| TSS excesivo | TSS >150 | Programar recuperación larga. | Media | Cap. 52 |
| FTP improbable | FTP >6.4 hombre / >5.7 mujer | Marcar como dato improbable, no diagnóstico. | Baja | Cap. 17 |
| Grasa corporal esencial | BFP < esencial | Bloquear objetivo de pérdida de peso. | Alta | Cap. 28 |
| Maratón sin base | Sin media maratón + volumen insuficiente | Bloquear plan maratón. | Alta | Cap. 60 |
| Dolor agudo | Reportado por usuario | Detener sesión y sugerir profesional. | Alta | Fuera de libro; regla general de seguridad |

---

## 5.2 Validadores de suplementos y salud

| Validador | Trigger | Acción | Ref |
|---|---|---|---|
| Vitamina B6 | Dosis >25 mg/día | Advertir riesgo de neuropatía. | Cap. 74 |
| Vitamina D | Invierno/poca exposición solar | Sugerir valoración/suplementación prudente. | Cap. 73 |
| Cafeína | >5 mg/kg | Advertir exceso. | Cap. 72 |
| Beet juice/nitratos | Expectativa de mejora grande | Informar evidencia dudosa según autores. | Cap. 72 |

---

# 6. Recomendación 6 — Módulo maratón

Este módulo integra entrenamiento, nutrición, pacing y seguridad.

---

## 6.1 Requisitos para iniciar plan de maratón

| Requisito | Valor | Fuente |
|---|---|---|
| Media maratón | Poder completarla sin dificultades | Cap. 60 p. 349 |
| Preparación | ~3 meses específicos | Cap. 60 p. 349 |
| Frecuencia | Máximo 2–3 maratones/año | Cap. 60 p. 349 |
| Volumen | Objetivo ≥80 km/semana en preparación | Cap. 60 p. 349 |
| Long run | 25–30 km semanal | Cap. 60 p. 349 |

---

## 6.2 Estructura de entrenamiento

### Fase base/construcción

- Volumen regular casi diario, ~1 h/día.
- Long run semanal fácil.
- Incluir:
  - Tempo runs.
  - Climax runs.
  - Hill training.
  - Fartlek.
  - Intervalos.
  - Speed work.
- Carreras cortas periódicas: 3K, 5K, 10K, 15K, media.

**Fuente:** Cap. 60 p. 349.

### Tapering

- Última fase: reducir volumen.
- Ejemplo:
  - Semana -3: 100 km.
  - Semana -2: 60 km.
  - Semana final: ≤30 km.
- Mantener algo de velocidad/intensidad corta.
- Mejora estimada: ~1.5%.

**Fuente:** Cap. 60 p. 349.

---

## 6.3 Cálculo de riesgo de muro

### Energía del maratón

```text
E = c · m · d
```

Para Marathon Man:

```text
E = 0.98 · 70 · 42.195 ≈ 2895 kJ
```

### Stores sin carbo-loading

| Fuente | kJ |
|---|---:|
| Glucosa sangre | 21 |
| Glucógeno hígado | 366 |
| Glucógeno músculo | 1308 |
| Ingesta durante carrera | 395 |
| Total | 2090 |

### Déficit Marathon Man sin carbo-loading

```text
2895 - 2090 = 805 kJ
% déficit = 805 / 2895 ≈ 28%
```

### Con carbo-loading

| Fuente | kJ |
|---|---:|
| Glucosa sangre | 21 |
| Glucógeno hígado | 549 |
| Glucógeno músculo | 2092 |
| Ingesta durante carrera | 395 |
| Total | 3057 |

### Resultado

```text
2895 - 3057 = -162 kJ
```

Es decir, superávit teórico de ~6%.

**Fuentes:** Cap. 57 p. 334–338; Cap. 58 p. 340–343; Cap. 59 p. 344–347.

---

## 6.4 Regla de pacing de maratón

### Ritmo objetivo

- Corredor normal: maratón alrededor de `94% FTP`.
- Si el usuario tiene menor resistencia a fatiga: bajar a 90–92% FTP.
- Si el usuario tiene alta resistencia: puede acercarse a 97–100%, pero aumenta consumo de glucógeno.

### Tabla ritmo/fuel mix

| Resistencia | %FTP | % grasas |
|---|---:|---:|
| Excepcional | 100% | 26% |
| Buena | 97% | 28% |
| Normal | 94% | 30% |
| Menos buena | 92% | 32% |
| Limitada | 90% | 34% |

### Regla de muro

```text
requiredFatPct = energyDeficit / totalEnergyCost · 100
wallRiskHigh = requiredFatPct > expectedFatPct
```

**Fuente:** Cap. 57 p. 335–337.

---

## 6.5 Plan de carbo-loading

| Variable | Prescripción | Fuente |
|---|---|---|
| Duración | 2–3 días antes | Cap. 58 p. 340 |
| Carbohidratos | ~70% de calorías | Cap. 58 p. 340 |
| Proteínas/grasas | Reducir a ~15% cada una | Cap. 58 p. 340 |
| Tapering | Reducir entrenamiento | Cap. 58 p. 340 |
| Ganancia de peso aceptable | ≤1 kg | Cap. 58 p. 341; Cap. 60 p. 350 |
| Desayuno | 3 h antes de carrera | Cap. 58 p. 342; Cap. 60 p. 350 |
| Cafeína opcional | 2 tazas café fuerte ~2 h antes | Cap. 60 p. 350; Cap. 72 p. 430 |

**Advertencia:** cada gramo de glucógeno fija ~3 g de agua; sobrecomer puede perjudicar por peso extra.

---

## 6.6 Plan de hidratación en carrera

| Variable | Prescripción | Fuente |
|---|---|---|
| Bebida | ~70 g/L carbohidratos | Cap. 59 p. 345 |
| Volumen | 150 ml cada 5K | Cap. 59 p. 345 |
| Salida | 150 ml antes de salir | Cap. 59 p. 345 |
| Total aproximado | 1.35 L | Cap. 59 p. 346 |
| Carbohidratos totales | ~95 g | Cap. 59 p. 345 |
| Energía aportada | ~395 kJ | Cap. 59 p. 345 |
| Límite deshidratación | ≤5% peso corporal | Cap. 54 p. 323–325 |
| Calor | Usar esponjas | Cap. 59 p. 346; Cap. 60 p. 351 |

---

## 6.7 Estrategia de carrera

### Antes de la salida

- Llegar temprano pero sin esperar excesivamente.
- Usar ropa vieja desechable si hace frío.
- Beber ~200 ml de sports drink poco antes.
- No hacer calentamiento largo; ahorrar energía.

### Durante

- Empezar relajado.
- No seguir a corredores que salen demasiado rápido.
- Buscar pack para reducir aire.
- Beber 150 ml cada 5K.
- Mantener potencia constante.
- En subidas, aceptar descenso de pace.
- No cambiar plan antes del km 30–35 salvo señales graves.

### Después

- Rehidratar.
- Comer fruta/carbohidratos.
- No permanecer de pie si hay mareo; tumbarse si hay colapso.
- Descansar al menos 4 días antes de retomar entrenamiento.

**Fuentes:** Cap. 60 p. 350–353; Cap. 55 p. 326–329.

---

# 7. Reglas adicionales extraídas que deben quedar en el sistema

## 7.1 Salud general y estilo de vida

| Regla | Detalle | Ref |
|---|---|---|
| Running mejora salud física | Corazón, pulmones, sangre, huesos, metabolismo, composición corporal. | Cap. 1 p. 18–21 |
| Running mejora salud mental | Sueño, calma, concentración, estrés, bienestar. | Cap. 2 p. 22–25 |
| Sueño | El libro no da horas exactas, pero asocia correr con mejor sueño. | Cap. 2 p. 23 |
| Estrés | Correr aumenta resistencia al estrés; cualitativo. | Cap. 2 p. 23 |
| Longevidad | Correr añade ~5 años de vida; cada hora corriendo añade ~2 horas. | Cap. 76 p. 451 |
| Dieta saludable | Base vegetal/frutas, granos integrales, proteína magra, evitar snacks/sodas. | Cap. 6 p. 42–45; Cap. 72 p. 428–429 |
| Dieta endurance | 70% carbs, 15% proteína, 15% grasa. | Cap. 6 p. 44 |

---

## 7.2 Fisiología básica

| Dato | Valor | Ref |
|---|---:|---|
| Stroke volume de atleta | Puede ser ~2× el de sedentario | Cap. 3 p. 27 |
| Flujo sanguíneo ejercicio | De ~5 a ~40 L/min | Cap. 3 p. 27 |
| RHR atletas | <50, a veces <40 bpm | Cap. 3 p. 27 |
| Volumen sangre entrenado | +10% | Cap. 3 p. 27 |
| Ventilación máxima | 180–200 L/min | Cap. 3 p. 28 |
| Músculos respiratorios | Pueden consumir ~10% VO₂max | Cap. 3 p. 28 |
| ATP | ~10 s de esfuerzo máximo | Cap. 3 p. 28 |
| Umbral anaeróbico | ~85–90% MHR | Cap. 3 p. 29 |
| Glucógeno | ~1.5 h; con training/nutrición 2–3 h | Cap. 3 p. 30 |
| Grasas | Reserva para muchos días | Cap. 3 p. 30 |

---

## 7.3 Tests y monitoreo

| Regla | Detalle | Ref |
|---|---|---|
| VO₂max estimación simple | `15 · MHR / RHR` | Cap. 18 p. 115 |
| Cooper test | `(distance12min_m - 505) / 45` | Cap. 18 p. 115 |
| Bike test | `(395 + 11.3 · maxW) / bodyWeightKg` | Cap. 18 p. 115 |
| MHR sedentarios | `220 - edad` | Cap. 32 p. 184 |
| MHR hombres atletas | `205.8 - 0.685 · edad` | Cap. 32 p. 184 |
| MHR mujeres atletas | `206 - 0.88 · edad` | Cap. 32 p. 184 |
| Watch VO₂max | Útil pero sensible a MHR; predictor de carrera optimista | Cap. 35 p. 204–206 |
| Lab threshold test | Pasos 3 min; iniciar ≥5 km/h más lento que 10K; +1 km/h; tras umbral pasos 1 min | Cap. 70 p. 414 |
| RQ | 0.7 grasa; 0.85 mixto; 1.0 glucógeno | Cap. 70 p. 416 |

---

## 7.4 Dinámica de carrera y economía

| Dato | Valor | Ref |
|---|---:|---|
| Cadencia objetivo | ≥180 spm | Cap. 37 p. 212 |
| GCT recomendado Garmin | <208 ms, pero depende mucho de velocidad | Cap. 37 p. 213; Cap. 38 p. 222 |
| Step length común | ~0.8 m | Cap. 38 p. 222 |
| Energía fase de vuelo | Disminuye al aumentar cadencia | Cap. 39 p. 233–235 |
|Stride length | Determinante principal de velocidad alta | Cap. 37 p. 215 |
| Overstriding | Riesgo de lesión; no forzar | Cap. 39 p. 235 |

---

## 7.5 Ejemplos de casos del libro útiles para tests

| Caso | Datos | Uso |
|---|---|---|
| Marathon Man | 70 kg, FTP 3.67, maratón 3:30 | Usuario estándar de prueba |
| Hans weight loss | 67.5 → 57.5 kg, FTP 3.7 → 4.3 | Validar regla peso/FTP |
| Ron Rotterdam | Maratón 3:28:53; pace-to-HR +5.77%; power-to-HR -3.91% | Validar pacing por potencia |
| Kimetto maratón | WR 2:02:57; FTP equivalente ~6.30 | Benchmark élite |
| Bekele 10k | 26:17.53; FTP equivalente ~6.36 | Benchmark VO₂max |
| Bolt 100 m | 9.58; Mexico teórico 9.36; ultimate 9.18 | Módulo sprint/aire |
| Ed Whitlock | 73 años maratón 2:54:48; FTP ~4.50; age-graded ~6.35 | Age grading extremo |
| Haile Great Ethiopian Run | FTP mar 6.37; altitud 5.67; esperado 29:24; real 30:04 | Ajuste altitud + colinas |

---

# 8. Cobertura capítulo a capítulo

A continuación, una tabla compacta para verificar que no se haya quedado fuera información relevante.

| Cap. | Página | Datos clave extraídos |
|---:|---:|---|
| 1 | 18 | Beneficios físicos: corazón, pulmones, músculos, huesos, sangre, metabolismo, prevención de enfermedades. |
| 2 | 22 | Beneficios mentales: sueño, calma, concentración, estrés, endorfinas/serotonina. |
| 3 | 26 | Motor humano: músculos, corazón, sangre, pulmones; 4 sistemas energéticos; stroke volume, RHR, ventilación, ATP, glucólisis, glucógeno aeróbico, grasas. |
| 4 | 32 | 9 principios: estrés/recuperación, intensidad/variación, moderación 5–10%/mes, rendimientos decrecientes, especificidad, periodización, reversibilidad, individualidad, mantenimiento. |
| 5 | 36 | Training goals y modos: endurance, threshold, climax, VO₂max intervals, speed intervals, HIT, fartlek, hills; volúmenes e intensidades. |
| 6 | 42 | Nutrición: dieta occidental 45/20/35; endurance 70/15/15; stores de carbohidratos; carbo-loading intro. |
| 7 | 48 | Energía: `t=E/P`; `E=cmd`; eficiencia 25%; grasa 37.6 kJ/g; maratón quema ~316 g grasa. |
| 8 | 52 | Potencia: media diaria 121 W térmico/30 W mecánico; HP 736 W; ejemplo maratón 235 W. |
| 9 | 56 | Otros deportes: stairs, cycling; potencia total vs específica; Empire State, flat cycling, Alpe cycling. |
| 10 | 62 | Skating y running: velocidad por potencia; fórmula `v=3.67·(P/m)`; FTP 6.4 → 21.35 km/h. |
| 11 | 68 | Running model: `P=Pr+Pa+Pc`; fórmulas de Pr, Pa, Pc; ejemplos Bolt/Marathon Man. |
| 12 | 76 | Coste de carrera: `c=0.98`; RE=201; literatura; tabla velocidad/potencia; Kimetto/Rudisha/Bolt. |
| 13 | 80 | Aire: `cdA=0.24`; fórmulas Pugh/Davies/Léger; tailwind 50%; pacers; tabla Pa por velocidad. |
| 14 | 86 | Colinas: hill factor; Minetti; tabla resistencia subida; ⚠️ coeficiente inconsistente. |
| 15 | 92 | Condiciones estándar; parámetros; tiempos Marathon Man por distancia. |
| 16 | 98 | Riegel -0.07; tabla %FTP; fuel mix; anaeróbico en <10 min; exponentes por fatiga. |
| 17 | 106 | Límites humanos: FTP 6.4/5.7; récords; bioquímica de potencia; women 10% body fat. |
| 18 | 114 | VO₂max: definición, tests, factores, tablas edad/sexo, declive, ejemplos Hans. |
| 19 | 118 | FTP: definición, tests, clasificación, estimación desde carrera, factores. |
| 20 | 122 | FTP/VO₂max: energía por O₂, fórmula `FTP=0.072·VO₂max`, límites. |
| 21 | 128 | FTP → velocidad/tiempos; tablas grandes; Marathon Man; limitaciones 400/800. |
| 22 | 136 | Récords mundiales: FTP equivalentes; pacers; treadmill; Bekele sub2 no probable. |
| 23 | 142 | Edad: pico 30, declive 0.8%, age grading, FTP por edad para Marathon Man. |
| 24 | 146 | Masters records; declive hombres 0.8/1.0/5%; max FTP por edad. |
| 25 | 150 | Mujeres: ratio 89–90%; declives 1.0/1.6/2.9; Ottey outlier. |
| 26 | 156 | Performance index: FTP vs world class; clases; corrección por edad. |
| 27 | 160 | Peso corporal: 1% peso ≈ 1% rendimiento; tabla peso/velocidad; caso Hans. |
| 28 | 164 | BMI, LBM, BFP; rangos hombres/mujeres; racing weight; grasa esencial. |
| 29 | 170 | Pérdida de grasa: balance energético, 37.6 kJ/g, caso Hans, colesterol, fitness. |
| 30 | 176 | Impacto entrenamiento: velocidad +10–20%, max 30; time to exhaustion ×10; intensidad. |
| 31 | 180 | Ritmos de entrenamiento por FTP: easy/brisk/threshold/interval/speed; tabla completa. |
| 32 | 184 | HR: MHR/RHR; capacidad cardiaca; fórmulas VO₂max y FTP desde HR. |
| 33 | 190 | HR-pace: lineal; forma, enfermedad +13–18 bpm 10 días; calor +6 bpm; viento. |
| 34 | 196 | HR zones; intervalos; HIT +13/+28%; recovery 2 días; máx 2 intervalos/semana; semana ejemplo. |
| 35 | 204 | Running watch: VO₂max, race predictor, MHR sensibilidad; predictor optimista. |
| 36 | 208 | RE: impacto ±10%; RE 220/180; tabla tiempos; factores postura/forma. |
| 37 | 212 | Dinámica: shuffle/power stride; cadencia/stride; Garmin color codes; ejemplos Hans/Ron. |
| 38 | 220 | Stride/cadence: fórmulas GCT, flight time/length; tablas por cadencia. |
| 39 | 228 | Economía dinámica: flight altitude, costo de vuelo; cadencia reduce costo. |
| 40 | 236 | Fatiga: exponentes -0.05/-0.07/-0.09; impacto maratón ~10 min. |
| 41 | 240 | Altitude training: LHTH/LHTL/artificial; LHTL +2.5% FTP; tabla impacto. |
| 42 | 244 | Superficie: +1/+3/+6%; sand +33%; tabla tiempos. |
| 43 | 248 | Shoes: 0.25–0.5%/100g; 220g límite; 200g total 0.5–1%; lesión primero. |
| 44 | 254 | No aire: treadmill; 2–9% más rápido; élite ~10 s/km; Marathon Man +6 min. |
| 45 | 264 | Bolt Mexico: presión, temperatura, altitud, cdA, viento; ultimate 9.18. |
| 46 | 270 | Pacemakers/pack: cdA 0.20; Marathon Man 47 s; élite 84 s; 1 s/400m. |
| 47 | 276 | Viento: head/tail; pérdida neta; fuerza 3; Marathon Man y élite; Boston. |
| 48 | 282 | Colinas: velocidades por gradiente; pérdida neta; extremas; Boston 140 m. |
| 49 | 288 | Altitud: presión, oxígeno, Basset, Mexico -10%; Marathon Man +30 min. |
| 50 | 294 | Alpe running: 13.8 km/1020 m/7.4%; records FTP; cycling doping top10. |
| 51 | 300 | Alpe vs viento: Marathon Man 9.2 km/h; headwind 43 km/h equivalente; force 7 tougher. |
| 52 | 304 | Pace strategy: NP, IF, TSS; clasificaciones; potencia constante; excepción tramos duros. |
| 53 | 310 | Temperatura: óptimos; pérdidas; wet-bulb; tabla por distancia; Marathon Man Twb. |
| 54 | 316 | Calor: Twb, heat balance, sweat, HSI, límites 5%/1°C, Atlanta lightweight. |
| 55 | 326 | Foster collapse: causa cardiovascular, tratamiento tumbado, 59% post-finish, no correr con fiebre. |
| 56 | 330 | Lluvia/viento/frío: windchill, capas, aceite, vulnerabilidad pequeños/delgados. |
| 57 | 334 | Maratón I: muro, E=cmd, stores, déficit, fuel mix por pace, peso/pace. |
| 58 | 340 | Maratón II: carbo-loading, stores, peso agua, desayuno. |
| 59 | 344 | Maratón III: sports drinks, 70 g/L, 150 ml/5K, 95g carbs, 1.35 L, solo maratón. |
| 60 | 348 | Maratón IV: training, taper, nutrition, mental, start, during, finish, after. |
| 61 | 354 | Otros deportes con FTP: cycling, skating, stairs; predicciones Marathon Man. |
| 62 | 360 | Máxima potencia: sistemas, fuel mix, límites por tiempo, aceleración sprint. |
| 63 | 368 | Power meters: Stryd, acelerómetros, beneficios. |
| 64 | 374 | Fiabilidad Stryd: 14 runners, RE 228, c 1.06, ratio 0.078, teoría 0.081. |
| 65 | 386 | RE con Stryd: `c=(P/m)/v`; tablas VO₂max/Wkg; tracking diario. |
| 66 | 396 | FTP/zones: Stryd CP unclear; 10-min test; zonas %FTP. |
| 67 | 400 | Train with power: RE, forma, workouts, fitness, coach. |
| 68 | 406 | Race with power: pacing constante; Ron Rotterdam; Nieboer 532W. |
| 69 | 410 | Tips: smoothing, NP, VI, TSS, IF, EF, power-to-HR, VAM. |
| 70 | 414 | Lab testing: threshold protocol, ventilación, CO, RQ, umbrales, RE. |
| 71 | 422 | Sub-2h: FTP 6.48 requerido; límite 6.40; condiciones no autorizadas. |
| 72 | 428 | Suplementos: cafeína, bicarbonato, creatina, glycerol, BCAAs, vitamins, beet juice. |
| 73 | 434 | Vitamina D: RDI, sunlight, sangre 25/100/125, supplement 10–30 µg, toxicity >325. |
| 74 | 440 | B6: RDI 1.5, max 25, neuropatía, blood 35–110, stop pills. |
| 75 | 444 | Daniels VDOT: comparación, fórmula empírica, aire v², RE 191, altitude. |
| 76 | 450 | Prehistoric man: evolución endurance, running adds lifespan. |
| 77 | 452 | Sprinters/jumpers: pole vault, long jump, race walking physics. |
| 78 | 458 | Ed Whitlock: records masters, age grading, FTP age-adjusted. |
| 79 | 462 | Haile: PBs FTP, Great Ethiopian Run altitude, masters forecasts. |

---

# 9. Resultado final de las 6 recomendaciones

Las 6 recomendaciones quedan convertidas en:

1. **`running_engine`**
   - Modelo físico completo.
   - FTP/VO₂max/Riegel/economía.
   - Zonas de potencia.
   - Ritmos de entrenamiento por FTP.
   - Carga TSS/IF/NP.
   - Benchmarks por edad/sexo.

2. **`environment_running_safety`**
   - Ajustes por viento, drafting, colinas, altitud, superficie, zapatos.
   - Seguridad por temperatura, wet-bulb, HSI, sudor, frío/lluvia.
   - Guardrails de enfermedad.

3. **SkillPaths**
   - `running-aerobic-base`
   - `ftp-threshold-development`
   - `running-economy-cadence`
   - `marathon-wall-prevention`

4. **Perfil de usuario extendido**
   - FTP, VO₂max, RE/c, Riegel exponent, peso, grasa, HR, edad, sexo, fatiga, condiciones ambientales, enfermedad.

5. **Validadores de seguridad**
   - Fiebre/enfermedad.
   - HR-pace anómalo.
   - Twb/HSI.
   - Deshidratación.
   - Frío/lluvia.
   - TSS excesivo.
   - FTP improbable.
   - Grasa esencial.
   - Maratón sin base.

6. **Módulo maratón**
   - Requisitos y plan de entrenamiento.
   - Tapering.
   - Cálculo de muro.
   - Carbo-loading.
   - Hidratación.
   - Pacing por potencia.
   - Estrategia de carrera y post-carrera.

---

## 10. Próximo paso recomendado

Para cerrar al 100%, lo más útil sería que me envíes o describas las figuras de:

- Cap. 23 age grading.
- Cap. 47 viento.
- Cap. 48 colinas.
- Cap. 49 altitud.
- Cap. 53 temperatura.
- Cap. 54 HSI.
- Cap. 71 sub-2h.

Con eso puedo convertir las curvas visuales en tablas numéricas exactas y eliminar las marcas `⚠️` de incertidumbre.

---

## Ronda 3 — tras: «¡Perfecto! La lista que presentas identifica con precisión los puntos críticos del libro *The Secret of Running* donde las curvas visuales s…»
# THE SECRET OF RUNNING — Cierre de lagunas + cálculo de curvas continuas

Perfecto. Con los modelos matemáticos que has señalado ya es posible cerrar la mayoría de los puntos que antes dependían de lectura visual de figuras.

He hecho dos cosas:

1. **Consolidar los datos completos** que ya estaban en tablas del libro.
2. **Calcular curvas continuas** cuando el libro da ecuaciones, especialmente:
   - edad / performance index,
   - potencia-tiempo / fuel mix,
   - viento,
   - colinas,
   - altitud,
   - temperatura / wet-bulb,
   - sub-2h marathon.

Cuando he tenido que elegir entre dos coeficientes ligeramente inconsistentes dentro del propio libro, lo he indicado explícitamente.

---

## 0. Supuestos de cálculo usados

Para las curvas generadas numéricamente he usado las condiciones estándar del libro salvo indicación contraria.

### 0.1 Condiciones estándar

| Parámetro | Valor | Fuente |
|---|---:|---|
| `c` | 0.98 kJ/kg/km | Cap. 12 p. 76–79 |
| `RE` equivalente | 201 ml O₂/kg/km | Cap. 12 p. 76–79 |
| `ρ` estándar | 1.226 kg/m³ | Cap. 15 p. 94 |
| `cdA` corredor solo | 0.24 m² | Cap. 13 p. 80–84 |
| `cdA` pack/pacers | 0.20 m² | Cap. 46 p. 270–275 |
| `cdA` pacers ideales | 0.18 m² | Cap. 71 p. 424–425 |
| `cdA` treadmill | 0.01 m² | Cap. 44 p. 254–263 |
| `cdA` tailwind, ajuste práctico | 0.12 m² | Cap. 13 p. 83; Cap. 47 p. 278 |
| Eficiencia metabólica | 25% | Cap. 7 p. 49; Cap. 20 p. 124 |
| Energía por litro O₂ | 19.5 kJ/L | Cap. 20 p. 123–124 |
| FTP límite hombres | 6.40 W/kg | Cap. 17 p. 111–113 |
| FTP límite mujeres | 5.70 W/kg | Cap. 17 p. 111–113 |

### 0.2 Modelo de potencia en carrera

La ecuación base es:

```text
P = Pr + Pa + Pc
```

con:

```text
Pr = c · m · v
Pa = 0.5 · ρ · cdA · (v + vw)² · v
Pc = (i/100) · m · g · v · η/100
```

donde:

- `v` = velocidad del corredor en m/s.
- `vw` = velocidad del viento en m/s; positivo para headwind, negativo para tailwind.
- `i` = gradiente en %.
- `η` = hill factor.
- `g` = 9.81 m/s².

Para trabajar con velocidad en km/h:

```text
Pr[W] = c · m · v_kmh / 3.6
```

Para Marathon Man estándar:

```text
Pr[W] = 0.98 · 70 · v_kmh / 3.6 = 19.0556 · v_kmh
```

---

# 1. Age grading / impacto de la edad

El libro contiene dos representaciones útiles:

1. Una tabla de **Performance Index / FTP máximo por edad**.
2. Una relación de declive anual por tramos, derivada de Sterken y de récords masters.

Ambas son útiles, pero no son perfectamente idénticas. La primera sirve para clasificar rendimiento relativo; la segunda sirve para modelar declive de récords.

---

## 1.1 Performance Index por edad según tabla del libro

Fuente principal: Cap. 26 p. 157–158.

### FTP máximo esperado por edad, hombres

| Edad | FTP máximo esperado | Factor vs 6.40 |
|---:|---:|---:|
| 10 | 4.84 | 0.756 |
| 15 | 5.64 | 0.881 |
| 20 | 6.11 | 0.955 |
| 25 | 6.25 | 0.977 |
| 30 | 6.40 | 1.000 |
| 35 | 6.22 | 0.972 |
| 40 | 6.03 | 0.942 |
| 45 | 5.81 | 0.908 |
| 50 | 5.56 | 0.869 |
| 55 | 5.39 | 0.842 |
| 60 | 5.20 | 0.813 |
| 65 | 4.97 | 0.777 |
| 70 | 4.70 | 0.734 |
| 75 | 4.41 | 0.689 |
| 80 | 4.01 | 0.627 |

### Fórmula de interpolación continua

Para edades intermedias, usar interpolación lineal entre los puntos de 5 años.

Ejemplo de tramos:

```text
30–35:
FTP_age = 6.40 + (age - 30) · (6.22 - 6.40) / 5
FTP_age = 6.40 - 0.036 · (age - 30)

35–40:
FTP_age = 6.22 - 0.038 · (age - 35)

40–45:
FTP_age = 6.03 - 0.044 · (age - 40)

45–50:
FTP_age = 5.81 - 0.050 · (age - 45)

50–55:
FTP_age = 5.56 - 0.034 · (age - 50)

55–60:
FTP_age = 5.39 - 0.038 · (age - 55)

60–65:
FTP_age = 5.20 - 0.046 · (age - 60)

65–70:
FTP_age = 4.97 - 0.054 · (age - 65)

70–75:
FTP_age = 4.70 - 0.058 · (age - 70)

75–80:
FTP_age = 4.41 - 0.080 · (age - 75)
```

### Tabla continua año a año, hombres 30–80

Derivada por interpolación lineal de la tabla anterior.

| Edad | FTP máx esperado |
|---:|---:|
| 30 | 6.400 |
| 31 | 6.364 |
| 32 | 6.328 |
| 33 | 6.292 |
| 34 | 6.256 |
| 35 | 6.220 |
| 36 | 6.182 |
| 37 | 6.144 |
| 38 | 6.106 |
| 39 | 6.068 |
| 40 | 6.030 |
| 41 | 5.986 |
| 42 | 5.942 |
| 43 | 5.898 |
| 44 | 5.854 |
| 45 | 5.810 |
| 46 | 5.760 |
| 47 | 5.710 |
| 48 | 5.660 |
| 49 | 5.610 |
| 50 | 5.560 |
| 51 | 5.526 |
| 52 | 5.492 |
| 53 | 5.458 |
| 54 | 5.424 |
| 55 | 5.390 |
| 56 | 5.352 |
| 57 | 5.314 |
| 58 | 5.276 |
| 59 | 5.238 |
| 60 | 5.200 |
| 61 | 5.154 |
| 62 | 5.108 |
| 63 | 5.062 |
| 64 | 5.016 |
| 65 | 4.970 |
| 66 | 4.916 |
| 67 | 4.862 |
| 68 | 4.808 |
| 69 | 4.754 |
| 70 | 4.700 |
| 71 | 4.642 |
| 72 | 4.584 |
| 73 | 4.526 |
| 74 | 4.468 |
| 75 | 4.410 |
| 76 | 4.330 |
| 77 | 4.250 |
| 78 | 4.170 |
| 79 | 4.090 |
| 80 | 4.010 |

---

## 1.2 Modelo alternativo: declive anual por tramos

Este modelo es más fiel a la descripción textual del declive de rendimiento con edad:

- 35–54 años: ~0.8%/año.
- 55–74 años: ~1.0%/año.
- >75 años: ~5%/año o más.

Fuente: Cap. 23 p. 142–145; Cap. 24 p. 146–149; Cap. 25 p. 150–155.

### Fórmula propuesta

Para hombres, tomando FTP pico = 6.40 W/kg a los 30 años:

```text
age <= 30:
factor = 1.0

31 <= age <= 54:
factor = 0.992^(age - 30)

55 <= age <= 74:
factor = 0.992^24 · 0.99^(age - 54)

age >= 75:
factor = 0.992^24 · 0.99^20 · 0.95^(age - 74)
```

### Valores calculados

| Edad | Factor | FTP equivalente |
|---:|---:|---:|
| 30 | 1.000 | 6.40 |
| 35 | 0.961 | 6.15 |
| 40 | 0.923 | 5.91 |
| 45 | 0.887 | 5.67 |
| 50 | 0.852 | 5.45 |
| 55 | 0.818 | 5.24 |
| 60 | 0.778 | 4.98 |
| 65 | 0.740 | 4.74 |
| 70 | 0.704 | 4.50 |
| 75 | 0.670 | 4.29 |
| 80 | 0.518 | 3.32 |
| 85 | 0.402 | 2.57 |
| 90 | 0.311 | 1.99 |

### Nota importante

La tabla de Performance Index del Cap. 26 no cae tan abruptamente después de 75 años como la curva de récords/declive anual. Por eso recomiendo:

- Usar **tabla Cap. 26** para clasificar usuarios reales por edad.
- Usar **declive por tramos** para predicción de récords o age-grading extremo.

---

## 1.3 Mujeres

El libro no da una tabla completa de performance index femenino por edad equivalente a la masculina, pero sí proporciona declives anuales:

| Tramo | Declive anual mujeres |
|---|---:|
| 35–54 | 1.0% |
| 55–74 | 1.6% |
| >75 | 2.9% |

Fuente: Cap. 25 p. 150–155.

### Fórmula propuesta mujeres

FTP pico femenino = 5.70 W/kg.

```text
age <= 30:
factor = 1.0

31 <= age <= 54:
factor = 0.99^(age - 30)

55 <= age <= 74:
factor = 0.99^24 · 0.984^(age - 54)

age >= 75:
factor = 0.99^24 · 0.984^20 · 0.971^(age - 74)
```

### Valores calculados

| Edad | Factor | FTP equivalente |
|---:|---:|---:|
| 30 | 1.000 | 5.70 |
| 35 | 0.951 | 5.42 |
| 40 | 0.904 | 5.15 |
| 45 | 0.860 | 4.90 |
| 50 | 0.817 | 4.66 |
| 55 | 0.777 | 4.43 |
| 60 | 0.717 | 4.09 |
| 65 | 0.662 | 3.77 |
| 70 | 0.611 | 3.48 |
| 75 | 0.564 | 3.21 |
| 80 | 0.486 | 2.77 |
| 85 | 0.419 | 2.39 |
| 90 | 0.361 | 2.06 |

---

# 2. Curva potencia-tiempo y fuel mix

La relación potencia-tiempo para esfuerzos ≥10 min se rige por Riegel:

```text
P(t) = FTP · (t / 60)^(-0.07)
```

Fuente: Cap. 16 p. 98–104.

Para esfuerzos <10 min, el libro da puntos de potencia máxima derivados de la contribución anaeróbica.

---

## 2.1 Fórmula continua para t >= 10 minutos

```text
P(t) = FTP · (t / 60)^(-0.07)
```

donde:

- `t` en minutos.
- `FTP` en W/kg.
- `P(t)` en W/kg.

### Ejemplos con FTP masculino límite = 6.40 W/kg

| Duración | %FTP | Potencia |
|---:|---:|---:|
| 10 min | 113% | 7.23 W/kg |
| 20 min | 108% | 6.91 W/kg |
| 40 min | 103% | 6.59 W/kg |
| 60 min | 100% | 6.40 W/kg |
| 120 min | 95% | 6.08 W/kg |
| 240 min | 91% | 5.82 W/kg |
| 300 min | 89% | 5.70 W/kg |

---

## 2.2 Puntos de potencia máxima para esfuerzos cortos

Fuente: Cap. 16 p. 103–104; Cap. 62 p. 360–365.

| Duración | Sistema dominante / mezcla | Potencia hombres | Potencia mujeres aprox. |
|---:|---|---:|---:|
| 0 min / burst | ATP puro | 24.64 W/kg | ~21.9 W/kg |
| 1 min | ATP + glucólisis | 12.91 W/kg | ~11.5 W/kg |
| 5 min | glucógeno + glucólisis | 8.02 W/kg | ~7.1 W/kg |
| 10 min | VO₂max | 7.22 W/kg | ~6.4 W/kg |
| 20 min | FTP extendido | 6.90 W/kg | ~6.1 W/kg |
| 40 min | FTP extendido | 6.57 W/kg | ~5.8 W/kg |
| 60 min | FTP | 6.41 W/kg | ~5.7 W/kg |
| 120 min | maratón élite | 6.09 W/kg | ~5.4 W/kg |
| 240 min | ultra / maratón lenta | 5.82 W/kg | ~5.2 W/kg |

---

## 2.3 Fuel mix por duración/intensidad

Fuentes: Cap. 16 p. 101–103; Cap. 57 p. 335–337; Cap. 62 p. 361–363.

### Fuel mix aeróbico/anaeróbico por tiempo

| Tiempo | %FTP | Glucógeno | Grasas | Glucólisis | ATP |
|---:|---:|---:|---:|---:|---:|
| 0 min | 385% | 0% | 0% | 0% | 100% |
| 1 min | ~201% | 50% | 5% | 40% | 10% |
| 5 min | ~125% | 90% | 0% | 10% | 0% |
| 10 min | 113% | 90% | 10% | 0% | 0% |
| 20 min | 108% | 84% | 16% | 0% | 0% |
| 40 min | 103% | 78% | 22% | 0% | 0% |
| 60 min | 100% | 75% | 25% | 0% | 0% |
| 120 min | 95% | 69% | 31% | 0% | 0% |
| 240 min | 91% | 64% | 36% | 0% | 0% |
| 300 min | 89% | 62% | 38% | 0% | 0% |

### Fuel mix específica para maratón según ritmo

Fuente: Cap. 57 p. 336.

| Resistencia | Ritmo maratón | %FTP | % grasas |
|---|---|---:|---:|
| Excepcional | muy alto | 100% | 26% |
| Buena | alto | 97% | 28% |
| Normal | normal | 94% | 30% |
| Menos buena | conservador | 92% | 32% |
| Limitada | muy conservador | 90% | 34% |

---

## 2.4 Regla de implementación

```text
if duration >= 10 min:
    power = ftp * (duration_min / 60)^(-0.07)

else:
    use anchors:
    0 min: 24.64
    1 min: 12.91
    5 min: 8.02
    10 min: 7.22

    interpolate log-log between anchors
```

Para fuel mix:

```text
interpolate linearly between fuel mix anchors:
10, 20, 40, 60, 120, 240, 300 min
```

---

# 3. Curva de viento

El libro da la fórmula completa de resistencia aerodinámica:

```text
Pa = 0.5 · ρ · cdA · (v + vw)² · v
```

Fuente: Cap. 11 p. 72–75; Cap. 13 p. 80–85; Cap. 47 p. 276–281.

Para la curva de headwind he resuelto numéricamente la ecuación de equilibrio para Marathon Man con:

- `FTP = 3.67 W/kg`
- `m = 70 kg`
- `P = 256.9 W`
- `c = 0.98 kJ/kg/km`
- `ρ = 1.226 kg/m³`
- `cdA = 0.24 m²`
- viento frontal positivo.

---

## 3.1 Curva headwind para Marathon Man

| Viento km/h | Viento m/s | Velocidad resultante km/h | Pace min/km | 10K equivalente |
|---:|---:|---:|---:|---:|
| 0 | 0.0 | 13.12 | 4:34 | 45:44 |
| 5 | 1.4 | 12.81 | 4:41 | 46:50 |
| 10 | 2.8 | 12.44 | 4:49 | 48:14 |
| 15 | 4.2 | 12.03 | 4:59 | 49:53 |
| 20 | 5.6 | 11.57 | 5:11 | 51:52 |
| 25 | 6.9 | 11.10 | 5:24 | 54:03 |
| 30 | 8.3 | 10.59 | 5:40 | 56:40 |
| 35 | 9.7 | 10.09 | 5:57 | 59:28 |
| 36 | 10.0 | 9.99 | 6:00 | 60:04 |
| 40 | 11.1 | 9.59 | 6:16 | 62:34 |
| 45 | 12.5 | 9.09 | 6:36 | 66:01 |
| 50 | 13.9 | 8.60 | 6:59 | 69:46 |
| 55 | 15.3 | 8.13 | 7:23 | 73:48 |
| 60 | 16.7 | 7.68 | 7:49 | 78:08 |

### Validación con el libro

El libro indica explícitamente:

- Headwind 36 km/h ⇒ Marathon Man baja de ~13.1 a ~10.0 km/h.
- Wind force 3 ya produce impacto perceptible.
- Wind force 5 es muy significativo.

Fuente: Cap. 47 p. 276–280.

---

## 3.2 Tailwind: anclas y modelo prudente

El libro indica que tailwind produce ventaja, pero mucho menor que headwind. Además, el ajuste usado por los autores es reducir `cdA` a 0.12 en tailwind, no simplemente aplicar una asistencia aerodinámica completa.

Fuente: Cap. 13 p. 83; Cap. 47 p. 278.

### Ancla explícita del libro

| Viento | Velocidad Marathon Man |
|---:|---:|
| Tailwind 36 km/h | ~13.6 km/h |

Fuente: Cap. 47 p. 278.

### Modelo de implementación recomendado

Para tailwind, usar modelo conservador:

```text
if vw < 0:
    cdA_effective = 0.12
    relative_air_speed = max(0, v + vw)
    Pa = 0.5 · ρ · cdA_effective · relative_air_speed² · v
```

Esto evita asumir asistencia negativa completa cuando el viento es más rápido que el corredor, algo que el libro no modela de forma explícita.

### Tabla aproximada tailwind

| Viento tailwind | Velocidad estimada |
|---:|---:|
| 0 | 13.12 km/h |
| -5 | ~13.3 km/h |
| -10 | ~13.4 km/h |
| -20 | ~13.5 km/h |
| -36 | ~13.6 km/h |
| -50 | ~13.6 km/h |

⚠️ La parte de tailwind con viento superior a la velocidad del corredor no está completamente especificada por el libro. La tabla anterior es una aproximación conservadora compatible con el ancla `tailwind 36 km/h → 13.6 km/h`.

---

## 3.3 Regla para élite

El libro da una relación práctica para élite:

- Headwind: reducción de velocidad ≈ 16% de la velocidad del viento.
- Tailwind: aumento de velocidad ≈ 6% de la velocidad del viento.

Fuente: Cap. 47 p. 280.

Ejemplo:

```text
headwind 50 km/h:
speed_loss ≈ 0.16 · 50 = 8.0 km/h

tailwind 50 km/h:
speed_gain ≈ 0.06 · 50 = 3.0 km/h
```

Esto es consistente con el ejemplo del libro:

- Tailwind 50 km/h puede llevar a élite por encima de 25 km/h.

---

# 4. Curva de colinas / gradiente

El libro proporciona la relación de Minetti para el hill factor.

Fuente: Cap. 14 p. 86–91; Cap. 48 p. 282–287.

---

## 4.1 Fórmula continua de colinas

```text
η(i) = 45.6 + 1.622 · i
```

donde:

- `i` = gradiente en %.
- `η` se usa como porcentaje: dividir por 100.

Entonces:

```text
Pc = (i/100) · m · g · v · (45.6 + 1.622·i)/100
```

⚠️ En Cap. 14 p. 88 aparece `45.6 + 1.1622·i`, pero las tablas de velocidad de Cap. 48 se reproducen mejor con `1.622·i`. Para implementación numérica recomiendo usar `1.622·i`.

---

## 4.2 Curva de velocidad vs gradiente para Marathon Man

Fuente: Cap. 48 p. 283.

| Gradiente | Velocidad km/h |
|---:|---:|
| -45% | 6.1 |
| -40% | 7.6 |
| -30% | 12.1 |
| -20% | 17.2 |
| -15% | 18.3 |
| -10% | 17.8 |
| -5% | 15.8 |
| 0% | 13.1 |
| +5% | 10.5 |
| +10% | 8.3 |
| +15% | 6.6 |
| +20% | 5.3 |
| +25% | 4.4 |
| +30% | 3.7 |
| +35% | 3.1 |
| +40% | 2.7 |
| +45% | 2.4 |

### Observaciones

- La velocidad máxima downhill no ocurre en -5%, sino cerca de -15%.
- En pendientes negativas extremas, la velocidad baja por frenado/eficiencia negativa.
- En subidas normales 0–10%, la velocidad cae aproximadamente de forma proporcional al gradiente.

---

## 4.3 Curva de velocidad vs gradiente para élite

Fuente: Cap. 48 p. 286.

| Gradiente | Velocidad élite km/h |
|---:|---:|
| -45% | 10.5 |
| -40% | 13.1 |
| -30% | 20.1 |
| -20% | 26.8 |
| -15% | 28.2 |
| -10% | 27.6 |
| -5% | 25.1 |
| 0% | 21.6 |
| +5% | 17.7 |
| +10% | 14.2 |
| +15% | 11.4 |
| +20% | 9.2 |
| +25% | 7.6 |
| +30% | 6.4 |
| +35% | 5.4 |
| +40% | 4.7 |
| +45% | 4.2 |

---

## 4.4 Ejemplos de pérdida neta de tiempo

Fuente: Cap. 48 p. 284.

### 10K con 5 km subida +5% y 5 km bajada -5%

Para Marathon Man:

| Tramo | Velocidad | Tiempo |
|---|---:|---:|
| Llano 10K | 13.1 km/h | 45:48 |
| 5K +5% | 10.5 km/h | 28:34 |
| 5K -5% | 15.8 km/h | 18:59 |
| Total 10K ondulado | — | 47:33 |

Resultado:

```text
Pérdida neta ≈ 1:45
```

El libro lo expresa como:

- pierde 5:40 subiendo,
- gana 3:55 bajando.

---

## 4.5 Equivalencia viento-colina

Fuente: Cap. 51 p. 300–303.

El libro muestra que headwind puede equivaler a una pendiente.

### Anclas

| Condición | Equivalencia |
|---|---|
| Alpe d’Huez para Marathon Man | velocidad ~9.2 km/h |
| Headwind 43 km/h | velocidad ~9.2 km/h |
| Headwind 25 km/h | resistencia similar a ~4% de gradiente |

Por tanto:

```text
headwind 25 km/h ≈ uphill 4%
headwind 43 km/h ≈ Alpe d’Huez para Marathon Man
headwind force 7 puede ser más duro que Alpe d’Huez
```

---

# 5. Curva de altitud

El libro da fórmulas de Basset para reducción de rendimiento por altitud.

Fuente: Cap. 49 p. 288–293.

---

## 5.1 Fórmulas de Basset

Con `h` en km:

### Antes de aclimatación

```text
%FTP = 100.352 - 4.307·h - 1.434·h² + 0.1781·h³
```

### Después de aclimatación

```text
%FTP = 99.921 - 1.8991·h - 1.1219·h²
```

---

## 5.2 Tabla continua de altitud

He calculado valores cada 500 m. La columna “normalizada” aproxima 100% en nivel del mar.

### Rendimiento retenido tras aclimatación

| Altitud | %FTP tras aclimatación | FTP hombre 6.40 | FTP mujer 5.70 |
|---:|---:|---:|---:|
| 0 m | 100.0% | 6.40 | 5.70 |
| 500 m | 98.7% | 6.32 | 5.63 |
| 1000 m | 96.9% | 6.20 | 5.52 |
| 1500 m | 94.5% | 6.05 | 5.39 |
| 2000 m | 91.6% | 5.86 | 5.22 |
| 2250 m | 90.0% | 5.76 | 5.13 |
| 2500 m | 88.2% | 5.64 | 5.03 |
| 3000 m | 84.1% | 5.38 | 4.80 |
| 3500 m | 79.5% | 5.09 | 4.53 |
| 4000 m | 74.4% | 4.76 | 4.24 |
| 4500 m | 68.7% | 4.39 | 3.92 |
| 5000 m | 62.4% | 3.99 | 3.56 |

### Antes de aclimatación

| Altitud | %FTP antes de aclimatación | FTP hombre 6.40 | FTP mujer 5.70 |
|---:|---:|---:|---:|
| 0 m | 100.0% | 6.40 | 5.70 |
| 500 m | 97.5% | 6.24 | 5.56 |
| 1000 m | 94.4% | 6.04 | 5.38 |
| 1500 m | 90.9% | 5.82 | 5.18 |
| 2000 m | 87.1% | 5.57 | 4.97 |
| 2250 m | 85.1% | 5.45 | 4.85 |
| 2500 m | 83.1% | 5.32 | 4.73 |
| 3000 m | 79.0% | 5.06 | 4.50 |
| 3500 m | 75.0% | 4.80 | 4.27 |
| 4000 m | 71.2% | 4.56 | 4.06 |
| 4500 m | 67.8% | 4.34 | 3.87 |
| 5000 m | 64.9% | 4.15 | 3.70 |

---

## 5.3 Validación con el libro

### Mexico City, 2250 m

El libro indica:

- FTP reducido ~10%.
- Marathon Man pierde ~30 min en maratón.
- En 1968, los tiempos de fondo fueron ~7% más lentos que récords del momento.

Fuente: Cap. 49 p. 288–293.

Cálculo:

```text
FTP retenido = 89.97%
FTP perdido = 10.03%
```

Coincide con el libro.

---

# 6. Curva de temperatura / wet-bulb

El libro proporciona una tabla directa de impacto de temperatura wet-bulb sobre distintos rendimientos de Marathon Man.

Fuente: Cap. 53 p. 310–315.

---

## 6.1 Óptimos térmicos

### Óptimos generales

| Grupo | Temperatura óptima |
|---|---:|
| Élite maratón | ~4–5°C |
| Corredor normal | ~7°C |
| Recreacional | ~15°C |
| Mujeres | ~9°C |

Fuente: Cap. 53 p. 311–312.

### Pérdidas por frío/calor

| Condición | Pérdida de velocidad |
|---|---:|
| -5°C | ~3% |
| 25°C | ~6% élite |
| 25°C | hasta ~18% corredor normal |
| 27°C mujeres | ~13% |

---

## 6.2 Óptimos por distancia

Fuente: Cap. 53 p. 313.

| Distancia | Hombres | Mujeres |
|---:|---:|---:|
| 100 m | 22.1°C | 23.0°C |
| 200 m | 22.6°C | 22.3°C |
| 400 m | 20.8°C | 17.7°C |
| 800 m | 19.0°C | 18.4°C |
| 1500 m | 22.2°C | 19.4°C |
| 5 km | 18.3°C | 17.2°C |
| 10 km | 16.8°C | 19.0°C |
| 21.1 km | 14.3°C | 13.4°C |
| 42.195 km | 9.7°C | 11.0°C |

---

## 6.3 Impacto de wet-bulb en Marathon Man

Fuente: Cap. 53 p. 314.

| Twb °C | Maratón | Media maratón | 15 km | 10 km | 5 km | 3 km |
|---:|---:|---:|---:|---:|---:|---:|
| -6 | 3:37:55 | 1:27:38 | 1:09:33 | 45:02 | 21:26 | 12:25 |
| -1 | 3:31:58 | 1:27:28 | 1:09:28 | 45:00 | 21:26 | 12:25 |
| 4 | 3:30:00 | 1:27:25 | 1:09:26 | 45:00 | 21:26 | 12:24 |
| 9 | 3:32:00 | 1:27:28 | 1:09:28 | 45:00 | 21:26 | 12:25 |
| 14 | 3:38:13 | 1:27:39 | 1:09:33 | 45:02 | 21:27 | 12:25 |
| 19 | 3:49:27 | 1:27:57 | 1:09:42 | 45:05 | 21:28 | 12:25 |
| 24 | 4:07:14 | 1:33:13 | 1:12:12 | 45:58 | 21:35 | 12:26 |

### Interpretación

- El óptimo está alrededor de Twb = 4°C.
- En Twb = 24°C, Marathon Man pierde ~37 min en maratón.
- En 10K, la pérdida es <1 min.
- En media maratón, ~6 min.

---

## 6.4 Fórmula de wet-bulb

El libro da una fórmula empírica para calcular Twb a partir de temperatura y humedad relativa.

Fuente: Cap. 54 p. 316.

```text
Twb = T · arctan(0.151977 · (RH + 8.313659)^0.5)
      + arctan(T + RH)
      - arctan(RH - 1.676331)
      + 0.00391838 · RH^1.5 · arctan(0.023101 · RH)
      - 4.686035
```

donde:

- `T` = temperatura aire °C.
- `RH` = humedad relativa en %.
- `Twb` = temperatura wet-bulb °C.

---

## 6.5 Umbrales de seguridad

Fuente: Cap. 54 p. 316–325.

| Twb | Condición |
|---:|---|
| >15°C | condiciones severas |
| >22°C | condiciones peligrosas |
| 30°C | HSI extremo 2–3; carrera debería cancelarse |

---

# 7. Heat Stress Index y sudoración

Fuente: Cap. 54 p. 316–325.

---

## 7.1 Balance térmico

```text
E = H - R - C
```

donde:

- `E` = producción neta de calor W.
- `H` = calor producido al correr W.
- `R` = pérdida por radiación W.
- `C` = pérdida por convección W.

### Producción de calor

```text
H = P_total - P_mechanical
P_total = P_mechanical / 0.25
H = 0.75 · P_total
```

Para Marathon Man:

```text
FTP mecánico = 3.67 · 70 = 257 W
P_total = 257 / 0.25 = 1028 W
H = 771 W
```

El libro redondea 770 W.

---

## 7.2 Radiación

```text
R = 9.1 · (Tskin - Twb)
```

con `Tskin = 34°C`.

| Twb | R |
|---:|---:|
| 0°C | 309 W |
| 5°C | 264 W |
| 10°C | 218 W |
| 15°C | 173 W |
| 20°C | 127 W |
| 25°C | 82 W |
| 30°C | 36 W |
| 35°C | -9 W |

---

## 7.3 Convección

```text
C = 12.5 · v^0.6 · (Tskin - Twb)
```

donde `v` es velocidad del aire sobre la piel; en ausencia de viento, `v` ≈ velocidad del corredor.

---

## 7.4 Sudoración

```text
S = 0.0016 · E
```

donde:

- `S` = sudor en L/h.
- `E` = net heat production W.

### Límites

| Variable | Límite |
|---|---:|
| Pérdida de peso por sudor | ≤5% |
| Aumento de temperatura rectal | ≤1°C |
| Aproximación | +0.2°C por 1% peso perdido |

Fuente: Cap. 54 p. 322–325.

---

# 8. Sub-2h maratón

Fuente: Cap. 71 p. 422–427.

---

## 8.1 FTP requerido

El libro calcula:

```text
Sub-2h marathon requiere FTP ≈ 6.48 W/kg
```

Comparado con:

| Concepto | FTP |
|---|---:|
| Límite limpio masculino | 6.40 W/kg |
| WR maratón Kimetto | 6.30 W/kg |
| Bekele 10K | 6.36 W/kg |
| Requerido sub-2h | 6.48 W/kg |

---

## 8.2 Rendimiento con FTP conocido

| FTP | Maratón estimada |
|---:|---:|
| 6.30 | 2:02:57 |
| 6.36 | 2:01:57 |
| 6.48 | ~2:00:00 |

Por tanto:

```text
Bekele con 6.36 W/kg no basta para sub-2h oficial.
```

---

## 8.3 Ganancias por condiciones

Fuente: Cap. 71 p. 424–425.

| Condición | Tiempo |
|---|---:|
| WR actual | 2:02:57 |
| Sin pacers, cdA=0.24 | 2:04:21 |
| Pacers ideales, cdA=0.18 | 2:02:18 |
| Baja presión, 953 mbar | 2:02:35 |
| Descenso de 140 m | 2:01:28 |

### Interpretación

- Baja presión: ~22 s de ganancia.
- Pacers ideales adicionales: ~39 s.
- Descenso estilo Boston: ~89 s.
- Tailwind continuo podría producir sub-2h no oficial incluso con viento suave.

---

# 9. Actualización de las 6 recomendaciones con datos completos

Ahora que las curvas están cerradas o modeladas, las 6 recomendaciones quedan así.

---

## Recomendación 1 — `rules/running_engine`

Agregar o actualizar:

### `engine.age_grading_table`

```text
source: Cap. 26
male anchors:
10: 4.84
15: 5.64
20: 6.11
25: 6.25
30: 6.40
35: 6.22
40: 6.03
45: 5.81
50: 5.56
55: 5.39
60: 5.20
65: 4.97
70: 4.70
75: 4.41
80: 4.01

interpolation: linear
```

### `engine.age_decline_records`

```text
male:
31-54: 0.8%/year
55-74: 1.0%/year
>=75: 5.0%/year

female:
31-54: 1.0%/year
55-74: 1.6%/year
>=75: 2.9%/year
```

### `engine.power_time_curve`

```text
for t >= 10 min:
P = FTP * (t/60)^(-0.07)

short anchors:
0 min: 24.64
1 min: 12.91
5 min: 8.02
10 min: 7.22
```

### `engine.fuel_mix_curve`

```text
anchors:
10: 90/10
20: 84/16
40: 78/22
60: 75/25
120: 69/31
240: 64/36
300: 62/38
```

---

## Recomendación 2 — `rules/environment_running_safety`

Agregar:

### `env.headwind_curve`

```text
solve:
P = c·m·v + 0.5·ρ·0.24·(v+vw)^2·v

Marathon Man anchors:
0 -> 13.12
10 -> 12.44
20 -> 11.57
30 -> 10.59
36 -> 9.99
40 -> 9.59
50 -> 8.60
60 -> 7.68
```

### `env.tailwind_curve`

```text
use conservative model:
cdA = 0.12
relative_air_speed = max(0, v+vw)

anchors:
-36 km/h -> ~13.6 km/h
```

### `env.hill_curve`

```text
η = 45.6 + 1.622·i
Pc = (i/100)·m·g·v·η/100

Marathon Man anchors:
-15 -> 18.3
-10 -> 17.8
-5 -> 15.8
0 -> 13.1
5 -> 10.5
10 -> 8.3
15 -> 6.6
20 -> 5.3
```

### `env.altitude_curve`

```text
after acclimatization:
%FTP = 99.921 - 1.8991·h - 1.1219·h²

before acclimatization:
%FTP = 100.352 - 4.307·h - 1.434·h² + 0.1781·h³
```

### `env.temperature_curve`

```text
use wet-bulb anchors from Cap. 53:
-6, -1, 4, 9, 14, 19, 24 °C
```

### `env.heat_guardrails`

```text
Twb > 15: severe
Twb > 22: dangerous
HSI >= 1: block or cancel
sweat loss > 5% body mass: high risk
```

---

## Recomendación 3 — SkillPaths

Añadir datos cuantitativos a los paths existentes.

### `running-aerobic-base`

Añadir:

- Easy pace ≈ 70–80% FTP.
- Long run 25–30 km.
- HR ~70% MHR.
- Volumen 50–100 km/semana para comprometidos.

### `ftp-threshold-development`

Añadir:

- FTP test 10 min: `/1.13`.
- Zona 3: 90–100% FTP.
- Zona 4: 100–110% FTP.
- Retest cada 6–8 semanas.

### `running-economy-cadence`

Añadir:

- Cadencia objetivo ≥180 spm.
- `c = (P/m)/v`.
- Objetivo estándar `c = 0.98`.
- A mayor cadencia, menor costo energético de fase de vuelo.

### `marathon-wall-prevention`

Añadir:

- Déficit energético calculable.
- Fuel mix por ritmo.
- Carbo-loading 70% carbs.
- Bebida 150 ml/5K, 70 g/L.
- Límite sudoración 5%.

---

## Recomendación 4 — Perfil de usuario

Añadir campos:

```text
ftpWkg
vo2maxMlKgMin
specificEnergyCostC
runningEconomyRE
riegelExponent
ageYears
sex
bodyWeightKg
bodyFatPct
altitudeAcclimatized
heatTolerance
coldTolerance
```

Añadir derivados:

```text
ageAdjustedFtp
powerDurationCurve
fuelMixProfile
temperatureRiskProfile
hillProfile
windProfile
```

---

## Recomendación 5 — Validadores de seguridad

Añadir validadores cuantitativos:

| Validador | Trigger | Acción |
|---|---|---|
| Twb severa | Twb >15 | warning duro |
| Twb peligrosa | Twb >22 | bloquear intensidad |
| HSI | HSI >=1 | cancelar/reprogramar |
| Sudoración | pérdida >5% | hidratación obligatoria |
| Frío | windchill bajo + lluvia | equipo obligatorio |
| Viento | headwind >25 km/h | ajustar objetivo |
| Colinas | gradiente >5% | pacing por potencia |
| Altitud | >1500 m | ajustar FTP |
| Enfermedad | fiebre | bloqueo total |
| FTP imposible | >6.4 hombre / >5.7 mujer | flag de validación |

---

## Recomendación 6 — Módulo maratón

Añadir cálculos completos:

### Energía

```text
E = c · m · 42.195
```

### Stores

```text
blood glucose = 21 kJ
liver glycogen = 366 kJ
muscle glycogen = 1308 kJ
intake = 395 kJ
total base = 2090 kJ
```

### Carbo-loading

```text
liver glycogen = 549 kJ
muscle glycogen = 2092 kJ
total loaded = 3057 kJ
```

### Déficit

```text
deficit = E - available_energy
wallRisk = deficit > expectedFatContribution
```

### Hidratación

```text
drink = 150 ml every 5K + 150 ml start
carb concentration = 70 g/L
total carbs ≈ 95 g
total fluid ≈ 1.35 L
```

### Pacing

```text
normal runner marathon pace ≈ 94% FTP
if bodyWeight increases, reduce pace
if Twb high, reduce target
if hills/wind, use constant power
```

---

# 10. Estado final de completitud

## 10.1 Queda cubierto con datos o fórmulas

| Tema | Estado |
|---|---|
| Age grading | Cubierto con tabla + interpolación + declive por tramos |
| Fuel mix | Cubierto con tabla + interpolación |
| Power-time | Cubierto con Riegel + anchors cortos |
| Viento headwind | Cubierto con curva numérica |
| Colinas | Cubierto con fórmula + tablas exactas |
| Altitud | Cubierto con fórmulas Basset |
| Temperatura | Cubierto con tabla wet-bulb |
| Heat stress | Cubierto con fórmulas y umbrales |
| Sub-2h | Cubierto con FTP requerido y condiciones |
| Maratón | Cubierto con energía, fueling, pacing |

---

## 10.2 Puntos que todavía requieren prudencia

### 1. Tailwind exacto

El libro no especifica completamente el modelo cuando el viento de cola supera la velocidad del corredor. He dado:

- ancla explícita `tailwind 36 km/h → 13.6 km/h`,
- modelo conservador recomendado,
- aproximación por reducción de `cdA`.

Pero no hay una tabla continua explícita en el texto.

### 2. Curva original de Sterken

La tabla del Cap. 26 y los declives anuales no son exactamente equivalentes. La app debería tener ambos modos:

- `performance_index_mode`: tabla Cap. 26.
- `record_decline_mode`: declive anual por tramos.

### 3. Hill factor

Hay inconsistencia entre:

- Cap. 14: `45.6 + 1.1622·i`
- Cap. 48: `45.6 + 1.622·i`

La segunda reproduce mejor las tablas de velocidad. Recomiendo usarla como default, pero marcarla como configurable.

### 4. HSI punto a punto

El libro da fórmulas y umbrales, pero no todas las matrices gráficas de HSI por FTP/peso/Twb. Se puede calcular bajo demanda con:

```text
HSI = E / Emax
```

pero `Emax` requiere condiciones de sudoración/humedad.

---

# 11. Resultado final

Con esto, la extracción de *The Secret of Running* queda en estado prácticamente completo para Plan Maestro OS:

- Las reglas principales están cuantificadas.
- Las curvas clave están calculadas o son calculables.
- Las inconsistencias están marcadas.
- Las fórmulas están listas para convertirse en reglas.
- Los límites de seguridad ambiental están definidos.
- El módulo maratón tiene datos completos de energía, fueling y pacing.

Si quieres, en la siguiente pasada puedo convertir todo esto en un único documento final listo para agentes, con formato:

```text
/rules/running_engine.md
/rules/environment_safety.md
/skillpaths/running_paths.md
/modules/marathon_module.md
```

o directamente en especificaciones tipo JSON/TypeScript para el motor de reglas.
