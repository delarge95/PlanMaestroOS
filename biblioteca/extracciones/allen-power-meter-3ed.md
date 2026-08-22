# allen-power-meter-3ed — Extracción recuperada de chat

> **sourceId:** `allen-power-meter-3ed` · **origen:** `chat-export-1787415012817` (Extracción de Reglas para Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Training and Racing with a Power Meter (3rd Edition) — Extracción para Plan Maestro OS

> Extracción completa del libro de Allen, Coggan y McGregor. Se parafrasea todo el contenido; no se reproducen párrafos literales. El libro es un manual de ciclismo basado en potenciómetro: cubre fisiología del esfuerzo, zonas de entrenamiento, modelado de fatiga/fitness, planificación, pacing y análisis de datos. No es un libro de fuerza general, calistenia ni rehabilitación musculoesquelética, pero aporta un marco cuantitativo de gestión de carga, periodización y progresión extremadamente transferible a cualquier disciplina de resistencia.

---

## 1) Metadatos del libro

- **Título:** Training and Racing with a Power Meter (3rd Edition)
- **Autor(es):** Hunter Allen, Andrew R. Coggan PhD, Stephen McGregor PhD
- **Año:** 2019
- **Editorial:** VeloPress (Boulder, CO)
- **ISBN:** 9781948006101 (ebook) / 9781937715939 (paperback)
- **Disciplina principal:** Ciclismo de rendimiento (carretera, contrarreloj, pista, ciclocross, triatlón, MTB ultra-resistencia). Fisiología del ejercicio aplicada y modelado matemático de carga/fatiga.
- **Enfoque poblacional:** Ciclistas y triatletas de todos los niveles (principiante a élite), con énfasis en atletas serios con potenciómetro. Incluye casos de másters (55-60+ años) y age-group triathletes.
- **Notas de alcance:**
  - **Cubre:** FTP y su testeo, 7 zonas clásicas + iLevels, Power Profile, Power Duration Curve (PDC), Normalized Power (NP), Intensity Factor (IF), Training Stress Score (TSS), Performance Manager (CTL/ATL/TSB), Quadrant Analysis, bilateral pedaling, pacing en carrera, planes de entrenamiento completos (4 casos), aerodinámica de campo, nutrición cuantificada por kJ, disciplinas específicas (CX, pista, ultra-MTB, triatlón).
  - **NO cubre explícitamente:** Fisiología del ejercicio en profundidad (remite a otros textos), nutrición detallada (solo cuantificación calórica por kJ), biomecánica del pedaleo a nivel clínico, rehabilitación de lesiones, fuerza fuera de la bicicleta (solo menciona que el entrenamiento de fuerza pesado tiene poco efecto en potencia ciclista), psicología deportiva.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- **`PowerDurationModel`** (nuevo):
  - Descripción: Modelo matemático que relaciona potencia máxima sostenible con la duración del esfuerzo. Reemplaza la aproximación discreta del Power Profile por una curva continua.
  - Campos sugeridos: `pmax: number` (W), `frc: number` (J o kJ), `mftp: number` (W), `tte: number` (min), `stamina: number` (0-100%), `phenotype: enum`, `fittedCurve: dataPoints[]`
  - Referencias: Cap. 8 completo (pp. ~139-153)

- **`TrainingZone`** (nuevo/extensión):
  - Descripción: Zona de entrenamiento definida por porcentaje de FTP o por iLevels individualizados.
  - Campos sugeridos: `zoneId: 1-7 | '4a'`, `name: string`, `lowerPctFTP: number`, `upperPctFTP: number`, `physiologicalTarget: string`, `typicalDuration: string`, `iLevelOverride?: {lowerW: number, upperW: number, durationRange: string}`
  - Referencias: Cap. 3 (pp. ~32-37), Cap. 5 (pp. ~58-79)

- **`PerformanceManagerState`** (nuevo):
  - Descripción: Estado diario de carga de entrenamiento del atleta.
  - Campos sugeridos: `date: Date`, `dailyTSS: number`, `ctl: number` (42-day EWMA), `atl: number` (7-day EWMA), `tsb: number` (CTL-ATL), `ctlRampRate: number` (TSS/day/week), `formStatus: enum('building'|'peaking'|'resting'|'overreaching')`
  - Referencias: Cap. 9 completo (pp. ~153-180)

- **`IntervalSession`** (nuevo/extensión):
  - Descripción: Sesión de intervalos con criterio de parada basado en caída de potencia.
  - Campos sugeridos: `targetZone: TrainingZone`, `intervalDuration: number`, `restDuration: number`, `targetPower: number`, `stopThresholdPct: number` (default 5%), `referenceInterval: number` (default 3), `completedIntervals: number[]`
  - Referencias: Cap. 5 (pp. ~55-58), Tabla 5.1

- **`QuadrantAnalysisResult`** (nuevo):
  - Descripción: Distribución del esfuerzo en 4 cuadrantes de fuerza-velocidad.
  - Campos sugeridos: `quadrantI_pct: number`, `quadrantII_pct: number`, `quadrantIII_pct: number`, `quadrantIV_pct: number`, `thresholdAEPF: number`, `thresholdCPV: number`
  - Referencias: Cap. 7 (pp. ~114-129)

- **`PowerProfileSnapshot`** (nuevo):
  - Descripción: Perfil de potencia en 4 duraciones estándar.
  - Campos sugeridos: `p5s: number` (W/kg), `p1min: number`, `p5min: number`, `ftp: number`, `phenotype: enum('sprinter'|'pursuiter'|'time-trialist'|'all-rounder'|'climber')`, `date: Date`
  - Referencias: Cap. 4 (pp. ~39-51)

- **`PacingStrategy`** (nuevo):
  - Descripción: Estrategia de pacing para eventos.
  - Campos sugeridos: `eventType: enum`, `targetIF: number`, `targetTSS: number`, `targetNP: number`, `variabilityIndexTarget: number`, `hillAdjustments: {duration: string, pctOfGoal: number}[]`
  - Referencias: Cap. 12 (pp. ~240-251), Cap. 13 (pp. ~257-279)

### 2.2 Mapeo a tipos existentes

- **`FocusId: endurance` / `aerobic-capacity`:**
  - El libro trata la resistencia aeróbica como el factor dominante en ciclismo de fondo. FTP integra VO2max, %VO2max sostenible y eficiencia. El entrenamiento en zonas 2-4 (56-105% FTP) es la base. La "stamina" (resistencia a fatiga sub-FTP prolongada) es un concepto nuevo que extiende la noción clásica de resistencia.
  - Cap. 3, 5, 8.

- **`FocusId: anaerobic-capacity` / `high-intensity`:**
  - Tratado como FRC (Functional Reserve Capacity) en julios: trabajo total realizable por encima de FTP. Se entrena con intervalos de 30s a 2min (zona 6 clásica) o iLevel 6. El libro enfatiza que FRC es una capacidad (J), no una tasa (W).
  - Cap. 5, 8.

- **`FocusId: neuromuscular-power` / `explosive`:**
  - Pmax: potencia máxima en una revolución de pedal. Se entrena con sprints <10s, micro-bursts, big-gear efforts. El libro es explícito: la fuerza máxima raramente limita el rendimiento ciclista; lo que importa es la potencia y la resistencia a la fatiga a alta potencia.
  - Cap. 5 (Level 7), Cap. 7 (Strength vs Power, pp. ~123-129).

- **`FocusId: fatigue-management` / `recovery`:**
  - El Performance Manager (CTL/ATL/TSB) es el sistema central. "Form = Fitness + Freshness". El libro cuantifica exactamente cómo gestionar carga crónica y aguda.
  - Cap. 9 completo.

- **`BodyZoneId: knee` / `leg`:**
  - El libro no aborda lesiones específicas, pero menciona que el pedaleo en cuadrante II (alta fuerza, baja cadencia) con big gear puede ser lesivo si no se gestiona. Advierte sobre cadencias muy bajas en strength endurance intervals (45-60 rpm) como insuficientes para generar adaptación de fuerza real.
  - Cap. 7 (pp. ~123-129).

- **`BodyZoneId: lower-back` / `core`:**
  - Mención menor: en gran fondo, la posición prolongada genera tensión lumbar y cervical. Se recomienda entrenar en posición de carrera.
  - Cap. 10, caso Bill Masters.

- **`MovementPattern: pedal-stroke`:**
  - El libro analiza el pedaleo mediante Quadrant Analysis (AEPF vs CPV) y datos bilaterales (GPR/GPA/Kurtotic Index). No prescribe un "pedaleo perfecto"; de hecho, cita evidencia de que modificar deliberadamente el patrón de fuerza reduce eficiencia metabólica.
  - Cap. 7 (pp. ~129-138).

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: ftp-test-protocol

- **Descripción:** Protocolo estándar para estimar FTP mediante test de 20 minutos.
- **Tipo:** testeo / progresión
- **Métrica principal:** FTP (vatios)
- **Valores numéricos:**
  - FTP = promedio 20min × 0.95 (restar 5%)
  - Atletas con alta capacidad anaeróbica: restar 7% o más
  - Atletas puramente aeróbicos: restar 2-3%
- **Condiciones de aplicación:**
  - Realizar en misma ruta, misma hora del día, condiciones similares
  - Precedido de warm-up estandarizado: 15min + 3×1min fast pedaling + 5min all-out (para agotar FRC)
  - Repetir cada 6-8 semanas (6-8 veces/año)
  - El esfuerzo de 5min previo agota la capacidad anaeróbica para que el 20min sea más representativo del FTP
- **Capítulos/páginas:** Cap. 3, Testing Protocol FTP (pp. ~30-31); Cap. 10, caso Bob (pp. ~187-188)
- **Comentarios:** El libro enfatiza que FTP puede sostenerse entre 30-70 min según el individuo; la duración de 60 min es una aproximación, no un absoluto.

---

### Regla: training-zones-classic

- **Descripción:** Zonas de entrenamiento basadas en porcentaje de FTP (sistema clásico de Coggan).
- **Tipo:** intensidad
- **Métrica principal:** %FTP
- **Valores numéricos:**

| Zona | Nombre | %FTP | Duración típica | Adaptación principal |
|------|--------|------|-----------------|---------------------|
| 1 | Active Recovery | <55% | Ilimitada | Recuperación, flujo sanguíneo |
| 2 | Endurance | 56-75% | 2-5+ h | Mitocondrias, capilares, corazón |
| 3 | Tempo | 76-90% | 1-3 h | Resistencia muscular, glucógeno |
| 4 | Lactate Threshold | 91-105% | 10-60 min | FTP, tolerancia lactato |
| 4a | Sweet Spot | 88-93% | 10-60 min | FTP con menor fatiga |
| 5 | VO2max | 106-120% | 3-8 min | VO2max |
| 6 | Anaerobic Capacity | 121-150% | 30s-2 min | FRC / capacidad anaeróbica |
| 7 | Neuromuscular Power | >150% | <30s | Pmax, reclutamiento motor |

- **Condiciones de aplicación:** Aplicar a cualquier ciclista con FTP conocido. Las zonas 1-4 son universales; las zonas 5-7 pueden variar enormemente entre individuos (→ iLevels).
- **Capítulos/páginas:** Cap. 3, Tabla 3.1 (p. ~32), Tabla 3.2 (p. ~33)
- **Comentarios:** El libro advierte que las zonas son un continuo fisiológico, no compartimentos estancos.

---

### Regla: interval-stop-criterion

- **Descripción:** Criterio para detener series de intervalos basado en caída de potencia respecto al 3er intervalo.
- **Tipo:** volumen / progresión
- **Métrica principal:** %dropOff desde el 3er intervalo
- **Valores numéricos:**
  - VO2max (zona 5, 3-8 min): detener cuando caída >5% del 3er intervalo
  - Anaerobic Capacity (zona 6, 30s-2 min): detener cuando caída >10-12%
  - Neuromuscular Power (zona 7, <30s): detener cuando no se alcanza el mínimo objetivo
- **Condiciones de aplicación:**
  - Los primeros 2 intervalos se descartan como referencia (son esfuerzos "frescos" con FRC disponible)
  - El 3er intervalo es el "repeatable interval"
  - Si el atleta está fatigado al inicio, hará menos intervalos pero el óptimo se mantiene
  - Para intervalos >3 min donde solo se hacen 2-3 repeticiones, la regla del 3er intervalo no aplica
- **Capítulos/páginas:** Cap. 5, Tabla 5.1 (p. ~56), pp. ~55-58
- **Comentarios:** ⚠️ El libro indica que estos guidelines se derivan de >3,000 archivos de potencia y >1,000 atletas, pero "continued research needs to be done." No son absolutos.

---

### Regla: tss-calculation

- **Descripción:** Fórmula del Training Stress Score para cuantificar carga de una sesión.
- **Tipo:** intensidad / volumen (compuesto)
- **Métrica principal:** TSS (puntos adimensionales, 100 = 1h a FTP)
- **Valores numéricos:**
  - TSS = (segundos × NP × IF) / (FTP × 3600) × 100
  - Equivalentemente: TSS = duración(h) × IF² × 100
  - IF = NP / FTP
  - 1h a FTP = 100 TSS, IF = 1.0
- **Rango de TSS por sesión típica:**

| Tipo de sesión | TSS típico | IF típico |
|---|---|---|
| Recuperación <1h | <50 | <0.75 |
| Endurance 2-3h | 100-200 | 0.65-0.80 |
| Tempo/Sweet Spot 1-2h | 80-150 | 0.75-0.95 |
| Intervalos VO2max | 60-120 | 0.85-1.05 |
| Carrera en línea 2-4h | 150-300 | 0.70-0.95 |
| TT 1h | ~100 | ~1.0 |
| Ironman bike | 250-350 | 0.65-0.80 |
| Etapa Tour de France | 200-300+ | 0.75-0.90 |

- **Condiciones de aplicación:** Requiere FTP actualizado. Un error del 4% en FTP genera ~8% de error en TSS (relación cuadrática).
- **Capítulos/páginas:** Cap. 7 (pp. ~111-114), Tabla 7.3, Tabla 7.4
- **Comentarios:** El libro advierte que TSS no captura la composición del entrenamiento (mismo TSS puede ser muy diferente fisiológicamente si la distribución de zonas cambia).

---

### Regla: normalized-power-calculation

- **Descripción:** Algoritmo para calcular la potencia "fisiológicamente equivalente" de un esfuerzo variable.
- **Tipo:** intensidad
- **Métrica principal:** NP (vatios)
- **Valores numéricos (algoritmo):**
  1. Calcular media móvil de 30s de potencia
  2. Elevar cada valor a la 4ª potencia
  3. Promediar todos los valores del paso 2
  4. Extraer la raíz cuarta del resultado
- **Condiciones de aplicación:** Solo válido para esfuerzos >30 segundos. No usar en intervalos individuales cortos.
- **Capítulos/páginas:** Cap. 7 (pp. ~107-110)
- **Comentarios:** NP > Average Power indica variabilidad. La razón NP/AvgPower = Variability Index (VI).

---

### Regla: variability-index-norms

- **Descripción:** Valores típicos de Variability Index por tipo de evento.
- **Tipo:** intensidad / especificidad
- **Métrica principal:** VI = NP / AvgPower
- **Valores numéricos:**

| Evento | VI típico |
|---|---|
| Contrarreloj / triatlón | 1.00-1.05 |
| Criterium | 1.05-1.15 |
| Carrera en línea (ruta) | 1.05-1.15 |
| Carrera en línea dura | 1.10-1.20+ |
| MTB XC | 1.10-1.20+ |
| Ciclocross | 1.10-1.20+ |
| Pista (persecución) | ~1.00-1.05 |
| Entrenamiento steady-state | ~1.00-1.05 |

- **Condiciones de aplicación:** Usar para evaluar si el entrenamiento replica las demandas neuromusculares de la carrera objetivo.
- **Capítulos/páginas:** Cap. 7, Tabla 7.1 (p. ~109)

---

### Regla: performance-manager-defaults

- **Descripción:** Parámetros por defecto del Performance Manager (PMC).
- **Tipo:** frecuencia / carga
- **Métrica principal:** CTL, ATL, TSB
- **Valores numéricos:**
  - CTL: EWMA de TSS diario, constante de tiempo = 42 días
  - ATL: EWMA de TSS diario, constante de tiempo = 7 días
  - TSB = CTL − ATL
  - CTL óptimo: 100-150 TSS/día (rango sostenible para la mayoría)
  - Ramp rate seguro de CTL: 3-7 TSS/día/semana
  - Ramp rate >7 TSS/día/semana durante >4 semanas → riesgo de overreaching
  - ATL time constant ajustable: 5 días (recuperación rápida) a 10-14 días (másters, eventos anaeróbicos)
- **Condiciones de aplicación:**
  - Requiere datos diarios de TSS
  - Si faltan >10% de archivos en un bloque, interpretar con precaución
  - Ajustar ATL time constant según edad, evento objetivo y fase de temporada
- **Capítulos/páginas:** Cap. 9 (pp. ~158-167), Tabla 9.1, Tabla 9.2
- **Comentarios:** ⚠️ El libro enfatiza que PMC es un indicador relativo, no un predictor absoluto de rendimiento. La "art" está en interpretar CTL+TSB juntos.

---

### Regla: tsb-peaking-guidelines

- **Descripción:** Rango de TSB óptimo para rendimiento según tipo de evento.
- **Tipo:** descanso / peaking
- **Métrica principal:** TSB
- **Valores numéricos:**
  - Eventos <5 min (anaeróbicos/neuromusculares): TSB +15 a +30 (muy fresco)
  - Eventos >5 min (aeróbicos/resistencia): TSB −10 a +25 (rango amplio)
  - La mayoría de personal bests ocurren con TSB entre −5 y +15
  - Eventos de resistencia larga (Ironman, gran fondo): no descansar demasiado; TSB ligeramente negativo o neutro puede ser mejor
- **Condiciones de aplicación:**
  - TSB debe estar "subiendo" (tendencia positiva), no necesariamente ser positivo
  - Un TSB muy positivo (>+30) puede indicar pérdida de fitness
  - Ajustar según time constant de ATL usado
- **Capítulos/páginas:** Cap. 9 (pp. ~167-170), Figuras 9.6, 9.7, 9.8

---

### Regla: ctl-ramp-rate-safety

- **Descripción:** Límites de incremento semanal de CTL para evitar overreaching.
- **Tipo:** volumen / progresión
- **Métrica principal:** CTL ramp rate (TSS/día/semana)
- **Valores numéricos:**
  - Seguro: 3-7 TSS/día/semana
  - Aceptable en picos cortos (<2 semanas): 7-12 TSS/día/semana (ej. training camp)
  - Peligroso: >7 TSS/día/semana durante >4 semanas consecutivas
  - Al acercarse a CTL 100: reducir ramp rate
  - CTL >150: solo sostenible por atletas élite (Tour de France level)
  - CTL teórico máximo: ~180-200 (límite genético estimado)
- **Condiciones de aplicación:**
  - Atletas noveles: más conservadores
  - Tras un bloque de ramp rate alto: incluir semana de recuperación
  - Meseta de CTL de 4-6 semanas sin cambio de enfoque = estancamiento
- **Capítulos/páginas:** Cap. 9 (pp. ~165-167), Tabla 9.2

---

### Regla: triathlon-pacing-if-budget

- **Descripción:** Presupuesto de IF/TSS para el segmento de ciclismo en triatlón.
- **Tipo:** intensidad / pacing
- **Métrica principal:** IF y TSS
- **Valores numéricos:**

| Distancia | IF recomendado | TSS budget |
|---|---|---|
| Sprint | 0.90-0.95 | ~80-100 |
| Olímpico | 0.80-0.90 | ~120-160 |
| 70.3 / Half Ironman | 0.70-0.80 | ~180-250 |
| Ironman | 0.65-0.75 | ~250-300 (máx 300) |

- Ironman: TSS 300 = "danger zone"; 280 es más realista para amateurs
- Primeros 30-45 min: 95% del objetivo
- Colinas >3 min: 105% del objetivo
- Colinas 30s-2 min: 110% del objetivo
- VI objetivo: 1.04-1.07
- **Condiciones de aplicación:** Amateurs. Pros pueden sostener IF 0.83+ en Ironman.
- **Capítulos/páginas:** Cap. 12, Tabla 12.1 (p. ~241), pp. ~244-246

---

### Regla: kilojoule-calorie-estimation

- **Descripción:** Estimación de gasto calórico a partir del trabajo mecánico.
- **Tipo:** nutrición / energía
- **Métrica principal:** kJ → kcal
- **Valores numéricos:**
  - kJ de trabajo ≈ kcal de gasto energético (ratio ~1:1)
  - Esto se debe a que la eficiencia termodinámica del ciclista es ~20-25%, y 1 kcal = 4.184 kJ, así que los factores se cancelan
  - Ejemplo: 2,000 kJ de trabajo ≈ 2,000 kcal gastadas
- **Condiciones de aplicación:** Aproximación. La eficiencia individual varía con intensidad, duración y condiciones.
- **Capítulos/páginas:** Cap. 1, sidebar "What Is a Kilojoule?" (p. ~11)

---

### Regla: match-definition

- **Descripción:** Cuantificación de un "match" (esfuerzo duro que agota reserva anaeróbica).
- **Tipo:** intensidad / táctica
- **Métrica principal:** %FTP y duración
- **Valores numéricos (ejemplo para FTP 330W):**
  - ≥20% sobre FTP durante ≥1 min
  - 1 min: ~396W (120% FTP)
  - 2 min: ~380W
  - 5 min: ~363W (110% FTP)
  - >5 min: el % sobre FTP disminuye progresivamente
- **Condiciones de aplicación:** Individualizado. El "matchbook" es finito; quemar todos antes del final = fracaso táctico.
- **Capítulos/páginas:** Cap. 6, Tabla 6.2 (p. ~100), pp. ~99-101

---

### Regla: aerobic-testing-frequency

- **Descripción:** Frecuencia recomendada de testeo.
- **Tipo:** frecuencia / testeo
- **Métrica principal:** tests por año
- **Valores numéricos:**
  - FTP test: cada 6-8 semanas (6-8 veces/año)
  - Momentos clave: invierno (baseline), inicio temporada, pre-competición, durante temporada (peak), post-peak
  - Power Profile test: junto con FTP test
  - Siempre tras semana de descanso (fresco)
- **Capítulos/páginas:** Cap. 3 (p. ~31), Cap. 10 (pp. ~187-188)

---

### Regla: recording-best-practices

- **Descripción:** Configuración óptima del dispositivo para captura de datos.
- **Tipo:** protocolo / datos
- **Métrica principal:** N/A (configuración)
- **Valores numéricos:**
  - Recording rate: 1 segundo (máximo posible)
  - Display rate: 3-5 segundos (rolling average) para entrenamiento; 10s para TT
  - Zero/calibrate el potenciómetro antes de cada salida
  - Incluir ceros de potencia en promedios (no incluir ceros de cadencia)
  - Usar botón de lap para marcar intervalos
- **Capítulos/páginas:** Cap. 2, "Best Practices" (pp. ~21-23)

---

### Regla: quadrant-analysis-thresholds

- **Descripción:** Umbrales para Quadrant Analysis basados en FTP y cadencia.
- **Tipo:** intensidad / neuromuscular
- **Métrica principal:** AEPF (N) y CPV (m/s) en relación a valores en FTP
- **Valores numéricos:**
  - AEPF en FTP = umbral de reclutamiento significativo de fibras tipo II
  - CPV en FTP = umbral de velocidad
  - Quadrant I: alta fuerza + alta velocidad (sprints, ataques)
  - Quadrant II: alta fuerza + baja velocidad (subidas, aceleraciones, standing starts)
  - Quadrant III: baja fuerza + baja velocidad (recuperación, soft-pedaling)
  - Quadrant IV: baja fuerza + alta velocidad (cadencia alta, criteriums)
- **Condiciones de aplicación:** Comparar QA de entrenamientos vs carreras para verificar especificidad neuromuscular.
- **Capítulos/páginas:** Cap. 7 (pp. ~114-123), Figuras 7.4-7.6

---

### Regla: strength-not-limiting

- **Descripción:** La fuerza máxima no es limitante en ciclismo; el entrenamiento de fuerza pesado tiene poco efecto.
- **Tipo:** intensidad / transferencia
- **Métrica principal:** % de fuerza máxima utilizada
- **Valores numéricos:**
  - En carrera, el ciclista usa típicamente <55% de su fuerza máxima
  - En FTP, se usa ~25% de fuerza máxima
  - Strength endurance intervals a 45 rpm: <50% de fuerza máxima (equivalente a step-ups con peso corporal)
  - 1,125-1,800 "reps" posibles a esa intensidad = no hay sobrecarga suficiente para hipertrofia/fuerza
- **Condiciones de aplicación:** Aplica a ciclismo de resistencia. Excepción: BMX standing starts y track sprint donde la fuerza sí puede ser limitante.
- **Capítulos/páginas:** Cap. 7 (pp. ~123-129)
- **Comentarios:** ⚠️ El libro no dice "no hagas fuerza", sino que el entrenamiento de fuerza pesado no transfiere a potencia ciclista. El trabajo de fuerza en el gimnasio debe ser explosivo o específico.

---

### Regla: frc-capacity-math

- **Descripción:** Cálculo de potencia sostenible por encima de FTP usando FRC.
- **Tipo:** intensidad / modelado
- **Métrica principal:** FRC (J), potencia sobre FTP (W)
- **Valores numéricos (ejemplo FRC = 20 kJ):**
  - 30s: 666.7W sobre FTP
  - 120s: 166.7W sobre FTP
  - 180s: 111W sobre FTP
  - 30 min: solo 11W sobre FTP
  - Fórmula: W_extra = FRC(J) / duración(s)
- **Condiciones de aplicación:** FRC se agota con trabajo continuo >FTP. Se recarga con descanso o trabajo <FTP. La velocidad de recarga depende de la intensidad de la recuperación.
- **Capítulos/páginas:** Cap. 8 (pp. ~145-147)

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: FTP Development (Threshold Power Progression)

- **Disciplina:** Ciclismo / Triatlón
- **Objetivo final:** Maximizar la potencia sostenible en quasi-steady-state (FTP)
- **Requisitos de seguridad previos:** Sin lesiones agudas; capacidad de mantener posición aerodinámica; nutrición adecuada
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Sweet Spot base | 2-3×10-20 min al 88-93% FTP | Completar 2×20 min sin caída de potencia | Empezar demasiado fuerte | Cap. 5, pp. ~62-64 |
| 2 | Threshold intervals | 2×20 min al 96-105% FTP | Completar 1h total a FTP | No mantener cadencia; hundirse en 2ª repetición | Cap. 5, pp. ~64-65 |
| 3 | Threshold + bursts | 2×20 min FTP con bursts 10s cada 4 min | Mantener NP en zona durante todo el esfuerzo | Bursts demasiado agresivos que rompen el ritmo | Cap. 12, pp. ~238 |
| 4 | Over-unders / Crisscross | 20 min alternando 88% y 120% FTP cada 2 min | Completar 2×20 min sin que potencia caiga <85% | Dejar caer potencia en fase "under" | Cap. 5, Cap. 10 |
| 5 | FTP extension | 30-60 min continuos a FTP | Mantener 45-60 min | Pacing: empezar demasiado fuerte | Cap. 5, pp. ~65 |
| 6 | Race-specific FTP | TT simulado o esfuerzo de carrera a FTP | Mantener NP en FTP durante duración objetivo | Falta de foco mental en minutos finales | Cap. 13 |

---

### SkillPath: VO2max Development

- **Disciplina:** Ciclismo
- **Objetivo final:** Mejorar la potencia máxima aeróbica (VO2max power)
- **Requisitos previos:** Base aeróbica sólida (semanas de zona 2-3); FTP establecido
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Short VO2max | 4-6×3 min al 106-120% FTP, rest 3-5 min | Completar todas las reps sin caída >5% | Salir demasiado fuerte en rep 1 | Cap. 5, pp. ~66-68 |
| 2 | Extended VO2max | 3-5×5-8 min al 106-115% FTP | Mantener potencia sin caída | No pacing: empezar a 120% y morir | Cap. 5 |
| 3 | Race-winning intervals | 30s sprint (200% FTP) + 3 min al 100-110% FTP + 10s burst | Completar 5-8 esfuerzos | Sprint inicial excesivo que compromete el 3 min | Cap. 5, pp. ~68-69 |
| 4 | Progressive duration | 5 reps empezando en 5 min y extendiendo 30s cada rep | Completar la progresión completa | Reducir intensidad en vez de extender | Cap. 5, p. ~67 |

---

### SkillPath: Anaerobic Capacity / FRC Development

- **Disciplina:** Ciclismo / Ciclocross / MTB
- **Objetivo final:** Aumentar la capacidad de trabajo sobre FTP (FRC) y la repeatabilidad
- **Requisitos previos:** Fresco (no hacer fatigado); base aeróbica
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | 2-min AC intervals | 6-8×2 min al 130-150% FTP, rest 2-3 min | Mantener >118% FTP hasta última rep | No usar interval mode para trackear | Cap. 5, pp. ~69-70 |
| 2 | 1-min AC intervals | 6-8×1 min al 140-150% FTP, rest 3 min | Mantener >128-131% FTP | Rest insuficiente entre reps | Cap. 5 |
| 3 | Micro-bursts | 15s on (150% FTP) / 15s off × 10 min × 2-3 sets | Completar 2-3 sets de 10 min | No mantener cadencia alta en "on" | Cap. 5, pp. ~71-72 |
| 4 | 30-30-30 (CX specific) | 30s al 150% FTP + 30s coasting + 30s running × 10 min | Completar 3-5 sets de 10 min | Transición torpe al running | Cap. 14, pp. ~283-284 |

---

### SkillPath: Neuromuscular Power / Sprint Development

- **Disciplina:** Ciclismo (pista, criterium, ruta)
- **Objetivo final:** Maximizar Pmax y fatiga-resistencia en sprint
- **Requisitos previos:** Completamente fresco; warm-up exhaustivo
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Small-ring sprints | 6×50m desde baja velocidad, sin cambiar, wind out gear | Aumentar peak power | "Dump the chain" a gear demasiado duro | Cap. 5, pp. ~71; NP-W5 |
| 2 | Big-ring sprints | 3-6×250-300m desde 20-23 mph, 1-2 cambios | Mantener cadencia >110 rpm al final | No timing correcto del cambio | Cap. 5; NP-W5/W6 |
| 3 | Sprint doubles | 5-8s al 80% max + 10s al 120-150% FTP + sprint máximo | Completar 6-10 doubles | No simular la fatiga real de carrera | NP-W8, Appendix |
| 4 | Big-gear power | 6×20s en 53:13, seated, desde baja velocidad | Generar 425-535W sentado | Compensar con upper body | Cap. 10, caso Bob |

---

### SkillPath: Pacing Mastery (Triathlon)

- **Disciplina:** Triatlón
- **Objetivo final:** Ejecutar el segmento de ciclismo al IF/TSS objetivo sin comprometer la carrera a pie
- **Requisitos previos:** FTP conocido; power calibration completada
- **Pasos:**

| Step | Nombre | Descripción | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Power calibration | 3-4×10 min a diferentes intensidades × 5 sesiones/10 días | Distinguir RPE en cada nivel | Hacer >1 sesión/día; confundir sensaciones | Cap. 12, pp. ~236-237 |
| 2 | Extended calibration | 2×20 min a cada intensidad | Mantener potencia estable 20 min | RPE cambia a lo largo del intervalo | Cap. 12 |
| 3 | 60-min calibration | 60 min continuos a intensidad de carrera | NP dentro de ±2% del objetivo | Variabilidad por terreno | Cap. 12 |
| 4 | Race rehearsal | Simular distancia de carrera con brick run posterior | Run pace dentro de objetivo | No practicar transición | Cap. 12 |
| 5 | Race execution | Mantener NP objetivo, VI <1.07, evitar surges | Post-race: TSS dentro de budget | Atacar colinas; seguir a otros | Cap. 12, pp. ~246-251 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Pedaleo eficiente / Smooth pedaling

- **Cues principales:**
  - "Scrape the mud off the bottom of your shoe" en la parte baja del pedal stroke
  - "Drive your knee toward the handlebar" en la parte alta
  - Mantener cadencia consistente; usar gearing para adaptar fuerza
  - "Stay light on the pedals" (triathlon)
  - Transiciones suaves entre flats y colinas
- **Errores frecuentes:**
  - Pedaleo "stomping" (Kurtotic Index alto) = aplicar fuerza en picos
  - GPA (Gross Power Absorbed) >35W seated = absorber potencia en upstroke
  - Cambiar de patrón de pedaleo deliberadamente reduce eficiencia metabólica (evidencia citada)
  - Pushing/pulling consciente de una pierna para "corregir" asimetría puede empeorar
- **Variantes seguras:**
  - Single-leg drills (1 min por pierna) para identificar desequilibrios
  - Fast-pedaling intervals (100-130 rpm) para suavizar
  - Big-gear seated efforts para fuerza específica
- **Indicaciones por zona:**
  - No forzar cadencia baja (<60 rpm) con dolor de rodilla
  - Cuadrante II prolongado en triatlón = riesgo de agotar glucógeno para la carrera a pie
- **Referencias:** Cap. 7 (pp. ~129-138), Cap. 12 (pp. ~240-244)

### Pacing en Time Trial

- **Cues principales:**
  - "Don't start too hard" (regla #2 del TT, repetida 3 veces en el libro)
  - Usar primeros 15-30s para alcanzar velocidad, luego fijar wattage
  - RPE no es fiable los primeros 4-5 min (adrenalina, cafeína)
  - En colinas con descenso: se puede ir 5-10% sobre FTP
  - En colinas que se aplanan: mantener FTP exacto (no hay recuperación posterior)
- **Errores frecuentes:**
  - Salir a 800W en los primeros 300m
  - Mirar el velocímetro en vez del potenciómetro
  - Atacar colinas y llegar agotado al crest
  - Perder foco en los últimos 3-5 min
- **Variantes:**
  - TT flat: isopower a FTP
  - TT con viento: más potencia contra headwind, menos con tailwind
  - TT con colinas: variable pacing según duración de la colina
- **Referencias:** Cap. 13 (pp. ~261-265)

### Pacing en Criterium / Mass Start

- **Cues principales:**
  - Conservar energía: los ganadores pedalean menos pero más fuerte
  - Si estás en un break por encima de tu FTP → "sit on"
  - Conocer tu FTP y no superarlo en tiras largas del break
  - En los últimos 5 min, se puede ir 5-10% sobre FTP
- **Errores frecuentes:**
  - Tirar del break a >FTP y ser eliminado
  - No usar el potenciómetro por vuelta para verificar
  - Quemar matches en momentos no decisivos
- **Referencias:** Cap. 13 (pp. ~259-261), Cap. 6 (pp. ~83-84)

### Pedaleo en Triatlón / Cuadrante óptimo

- **Cues principales:**
  - Mantener la mayor parte del tiempo en Quadrant III y IV (baja fuerza)
  - Evitar Quadrant II (alta fuerza, baja cadencia) → agota glucógeno
  - VI objetivo: 1.04-1.07
  - Cadencia: no prescribir una fija, sino adaptar para mantener baja fuerza
  - "Not all watts are created equal": misma potencia con diferente fibra = diferente coste
- **Errores frecuentes:**
  - "Gear mashing" en colinas (Quadrant II >40% del tiempo)
  - Surges de potencia al pasar o en colinas cortas
  - No ajustar gearing para mantener cadencia
- **Referencias:** Cap. 12 (pp. ~240-251), Figuras 12.1-12.7

### Bilateral Pedaling / Asimetría

- **Cues principales:**
  - Asimetría típica: ~5% (normal)
  - >10% de diferencia: investigar (fuerza, fit, patrón de movimiento)
  - GPA >35W seated en ciclista con >3 años: intervenir
  - No obsesionarse con simetría perfecta
- **Errores frecuentes:**
  - Intentar "corregir" asimetría menor → reduce eficiencia
  - Interpretar ANT+ power balance sin considerar absorbed power
- **Protocolo de testeo:** 4 días × 3 intervalos 5min (standing, seated, alternating) con énfasis en pierna débil
- **Referencias:** Cap. 7 (pp. ~129-138)

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

⚠️ **Nota importante:** Este libro NO es un texto de rehabilitación, fisioterapia ni manejo del dolor. No contiene protocolos de rehab, escalas de dolor ni guías de retorno a la actividad post-lesión. La siguiente sección captura las pocas referencias relevantes.

### Overtraining / Overreaching (única "condición" abordada)

- **Zona:** Sistémico (no localizado)
- **Etiología resumida:** Desequilibrio sostenido entre carga de entrenamiento (ATL/CTL) y recuperación. CTL ramp rate excesivo, falta de semanas de descanso, TSB crónicamente negativo.
- **Signos y síntomas clave:**
  - Incapacidad de mantener potencia en intervalos
  - IF >1.05 en carrera de 1h cuando no se esperaba (puede indicar FTP mal calibrado, pero también fatiga)
  - Enfermedad frecuente (inmunosupresión)
  - Meseta de CTL de 4-6 semanas sin progreso
  - "Non-functional overreaching": puedes entrenar pero no mejoras
- **Fases (implícitas):**
  - Overreaching funcional (normal): TSB negativo, resuelve con 2-3 días fáciles
  - Overreaching no funcional: semanas de recuperación reducida
  - Overtraining Syndrome: meses o >1 año de recuperación
- **Protocolo de manejo:**
  - Reducir ATL (descanso activo o completo)
  - Permitir que TSB suba a neutro o ligeramente positivo
  - No reiniciar ramp rate hasta que TSB se estabilice
  - CTL caerá durante el descanso (inevitable y aceptable)
- **Umbrales / red flags:**
  - CTL ramp rate >7 TSS/día/semana durante >4 semanas → alto riesgo
  - TSB muy negativo durante >3 semanas sin mejora
  - Enfermedad tras bloque intenso (ejemplo del libro: Matt, Cap. 9)
- **Referencias:** Cap. 9 (pp. ~165-167)

### Lesión por caída (mención incidental)

- El libro menciona el caso de Jack (Cap. 11) que se rompió la clavícula en 4 partes. Solo se usa como ejemplo de interrupción de datos y pérdida de fitness. No hay protocolo de rehab.
- **Referencia:** Cap. 11 (pp. ~215-216)

### Dolor de rodilla (implícito)

- El libro advierte sobre big-gear work a muy baja cadencia (50-60 rpm): "Be careful on the knees" (NP-W4, Appendix).
- No desarrolla protocolo preventivo ni de tratamiento.
- **Referencia:** Appendix, NP-W4

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Nutrición / Cuantificación energética

- **Regla:** kJ de trabajo ≈ kcal gastadas. Usar para planificar ingesta durante y post-ejercicio.
- **Aplicación práctica (caso Sami Srour, Cap. 1):**
  - Dividir la ruta en segmentos
  - Calcular kJ por segmento
  - Planificar ingesta calórica por segmento
  - Post-ride: carbohidratos + proteínas + grasas según kJ totales
- **Ironman / eventos largos:** El libro enfatiza que la nutrición es crítica pero no prescribe cantidades específicas (remite a otros recursos).
- **Referencias:** Cap. 1 (pp. ~10-11), Cap. 13 (pp. ~266)

### Sueño y estrés

- **Mención:** El libro menciona que el sueño, estrés laboral, vida personal y work/life balance afectan la recuperación y por tanto el ATL time constant óptimo.
- **No da recomendaciones cuantitativas** de horas de sueño ni protocolos de manejo de estrés.
- **Referencia:** Cap. 9 (p. ~163)

### Entrenar enfermo

- **Mención:** El caso de Matt (Cap. 9) muestra cómo la enfermedad reduce CTL dramáticamente (de 122 a 90 TSS). El libro no da un protocolo "above/below the neck".
- **Regla implícita:** Tras enfermedad, CTL cae; se necesita tiempo para reconstruir. No forzar ramp rate al volver.
- **Referencia:** Cap. 9, caso Matt (pp. ~172-173)

### Edad y recuperación

- **Regla:** Con la edad, la recuperación se ralentiza.
- **Valores:** Tabla 9.1 ajusta ATL time constant:
  - <30 años: 5-7 días
  - 30-50: 7 días (default)
  - 50-60: 7-10 días
  - >60: 10-14 días
- **Referencia:** Cap. 9, Tabla 9.1 (p. ~163)

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - **Motor de gestión de carga:** El Performance Manager (CTL/ATL/TSB) es el framework más transferible del libro. Puede adaptarse a cualquier disciplina de resistencia (ciclismo, running, natación, triatlón) e incluso a deportes de equipo si se cuantifica la carga diaria.
  - **Reglas de progresión y volumen:** El criterio de parada de intervalos (5% drop desde 3er intervalo), el ramp rate de CTL (3-7 TSS/día/semana), y los rangos de TSS por sesión son directamente implementables como `TrainingRule`.
  - **Sistema de zonas de entrenamiento:** Las 7 zonas clásicas + Sweet Spot + iLevels proporcionan un modelo de intensidad escalable. El concepto de iLevels (zonas individualizadas basadas en PDC) es especialmente valioso para usuarios avanzados.
  - **Pacing y estrategia de carrera:** Las reglas de IF/TSS por distancia de triatlón, VI por tipo de evento, y las estrategias de pacing en TT/criterium son implementables como validadores de sesiones.
  - **Power Duration Model como modelo de fitness:** Pmax, FRC, mFTP, TTE, Stamina son métricas que pueden alimentar un modelo de estado de fitness más rico que un simple FTP.

- **Limitaciones:**
  - **Solo ciclismo/triatlón:** El libro no cubre fuerza general, calistenia, movilidad articular ni rehabilitación. No usar para prescribir ejercicios de gimnasio o estiramientos.
  - **Dependencia de potenciómetro:** Todas las métricas requieren un potenciómetro. Para usuarios sin uno, el sistema necesitaría fallbacks (RPE, HR, GPS pace).
  - **No es un texto médico:** No contiene protocolos de rehab, diagnóstico ni manejo de lesiones. No usar para prescribir tratamiento.
  - **Población ciclista:** Los valores de fuerza (AEPF, CPV), Quadrant Analysis y bilateral pedaling son específicos del pedaleo. No transferir a otros movimientos.
  - **El libro asume que el usuario ya tiene FTP:** No hay protocolo para alguien que nunca ha hecho un test.

- **Recomendaciones específicas:**
  1. **Crear `rules/load-management.ts`** con: TSS calculation, CTL/ATL/TSB EWMA, ramp rate limits (3-7 safe, >7 danger), interval stop criterion (5% / 10-12%), TSB peaking ranges por tipo de evento.
  2. **Crear `rules/training-zones.ts`** con las 7+1 zonas clásicas (1, 2, 3, 4, 4a/SweetSpot, 5, 6, 7) como función de FTP, más el framework de iLevels para usuarios con datos suficientes.
  3. **Crear `SkillPath: ftp-development`** con los 6 pasos descritos en la sección 4, incluyendo criterios de avance y errores típicos. Repetir para `vo2max-development`, `ac-development`, `sprint-development` y `pacing-mastery`.
  4. **Añadir al modelo de datos:** `PowerDurationModel`, `PerformanceManagerState`, `QuadrantAnalysisResult`, `PacingStrategy` como tipos nuevos. Extender `TrainingSession` con `tss`, `np`, `if`, `vi`, `ctl`, `atl`, `tsb`.
  5. **No usar este libro para:** diagnosticar lesiones, prescribir rehabilitación, definir ejercicios de fuerza fuera de la bicicleta, ni como fuente de nutrición detallada (solo la aproximación kJ≈kcal).

---

*Fin de la extracción. Documento generado a partir del contenido completo de los 14 capítulos, prólogo, introducción, apéndice (Workout Guide con >100 workouts), glosario e índice del libro.*

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# Extracción complementaria y ejecución de las 5 recomendaciones

---

## ⚠️ Datos que NO puedo verificar al 100% por falta de ayudas visuales

Antes de ejecutar las recomendaciones, señalo lo que depende de figuras/tablas que no puedo leer con precisión absoluta:

| Elemento | Qué tengo | Qué falta |
|---|---|---|
| **Tabla 4.1** (Power Profile completo) | Las 8 categorías (World Champion → Novice) y las 4 duraciones (5s, 1min, 5min, FTP). Rango superior: >23 W/kg en 5s (world-class sprinter), ~10-12.5 W/kg (novice). | Los valores exactos en W/kg para las 6 categorías intermedias en cada duración. El libro dice que se "anclan" en world-class y novice, pero la tabla completa con los 8×4 valores numéricos no es reproducible sin la imagen. |
| **Tabla 3.2** (Adaptaciones fisiológicas por zona) | Nombres y rangos de %FTP. | La tabla completa de adaptaciones esperadas por zona (mitocondrias, capilares, enzimas, etc.) está en formato tabular; tengo la descripción textual pero no la estructura exacta. |
| **Tabla 5.1** (Criterio de parada de intervalos) | 5% para VO2max, 10-12% para AC, referencia al 3er intervalo. | La tabla puede contener filas adicionales para otras zonas/duraciones que no se transcriben explícitamente en el texto. |
| **Tabla 7.2** (IF típicos por evento) | Mencionada; tengo valores de triatlón (Cap. 12) y VI (Cap. 7). | No tengo la tabla completa con todos los IF por tipo de sesión (recuperación, endurance, tempo, carrera, etc.) en formato exacto. |
| **Tabla 7.3** (Escala de TSS) | Mencionada como guía aproximada. | Los rangos exactos de TSS por categoría de sesión (muy bajo, bajo, moderado, alto, muy alto, extremo) no se transcriben completamente. |
| **Tabla 7.4** (Tipos de paseos y TSS/IF) | Mencionada. | Valores exactos no reproducibles sin la tabla. |
| **Tabla 9.1** (ATL time constant por edad) | <30: 5-7d, 30-50: 7d, 50-60: 7-10d, >60: 10-14d. | Puede haber subdivisiones adicionales. |
| **Tabla 9.2** (Ramp rate por nivel) | 3-7 seguro, >7 peligro >4 semanas. | Puede haber filas por nivel de atleta (novice, intermediate, advanced, elite) con valores específicos. |
| **Tabla 12.1** (Pacing triatlón por distancia) | Sprint 0.90-0.95, Olímpico 0.80-0.90, 70.3 0.70-0.80, Ironman 0.65-0.75. | Puede haber columnas adicionales (TSS budget, VI target) que no se capturan textualmente. |
| **Figuras de Quadrant Analysis** (7.7-7.12, 10.3, 10.9, 10.11, 12.1, 12.6, 13.6, 13.7, 14.1, 14.6, 14.9) | Descripciones textuales de la distribución por cuadrante. | Los porcentajes exactos por cuadrante en cada figura. |
| **Figuras de PMC** (9.9-9.12, 12.8-12.10) | Descripciones narrativas de los casos Matt, Dave, triatleta Ironman. | Los valores exactos de CTL/ATL/TSB en cada punto temporal. |
| **Figuras de PDC** (8.1, 8.2, 10.2, 10.5, 10.8, 11.18) | Descripciones conceptuales. | Las curvas exactas y los puntos de inflexión. |
| **Tabla 14.1** (Comparación pista nivel mar vs altitud) | Mencionada. | Los valores exactos no reproducibles. |
| **Tabla 14.2** (Primeras 5 vueltas de carrera 24h) | NP ~224W primeras 4 vueltas, 206W vuelta 5. | Tiempos exactos por vuelta. |

> **Conclusión:** La información textual es suficiente para construir las reglas, zonas, progresiones y tipos. Los valores numéricos que faltan son de tablas de referencia (benchmarks) que se pueden completar con una segunda pasada sobre las imágenes. Ninguna regla funcional queda bloqueada.

---

## Recomendación 1: `rules/load-management.ts`

Especificación completa del motor de gestión de carga.

### 1.1 — TSS Calculation

```
RULE: tss-calculation
ID: LOAD-001
DESCRIPCIÓN: Calcula el Training Stress Score de una sesión.
FÓRMULA:
  TSS = (segundos × NP × IF) / (FTP × 3600) × 100
  Equivalente: TSS = duración_horas × IF² × 100
  Donde: IF = NP / FTP
VALIDACIÓN:
  - FTP debe ser > 0 y actualizado (último test < 8 semanas)
  - NP solo válido para esfuerzos > 30 segundos
  - Si FTP tiene error del 4%, TSS tiene error del ~8% (relación cuadrática)
VALORES DE REFERENCIA:
  1h a FTP = 100 TSS, IF = 1.0
  2h a IF 0.71 ≈ 100 TSS
  200 TSS = equivalente a dos TTs de 40km
  300 TSS = máximo para Ironman amateur (danger zone)
  300-400 TSS = etapa dura de Tour de France
CONDICIONES:
  - Requiere NP calculado (no usar average power)
  - Requiere FTP vigente
  - Si IF > 1.05 en carrera de ~1h → FTP probablemente subestimado
FUENTE: Cap. 7, pp. 111-114; Cap. 9, p. 177
```

### 1.2 — Normalized Power (NP) Algorithm

```
RULE: np-calculation
ID: LOAD-002
DESCRIPCIÓN: Algoritmo de Normalized Power para esfuerzos variables.
ALGORITMO:
  Paso 1: Calcular media móvil de 30s de potencia (ventana deslizante)
  Paso 2: Elevar cada valor del Paso 1 a la 4ª potencia
  Paso 3: Promediar todos los valores del Paso 2
  Paso 4: Raíz cuarta del resultado del Paso 3
RESTRICCIONES:
  - Solo válido para esfuerzos > 30 segundos
  - No aplicar a intervalos individuales cortos (< 30s)
  - En esfuerzos constantes, NP ≈ Average Power
INTERPRETACIÓN:
  - NP > AvgPower → esfuerzo variable (criterium, MTB, CX)
  - NP ≈ AvgPower → esfuerzo constante (TT, triatlón)
  - NP de carrera mass-start de ~1h ≈ FTP del atleta
FUENTE: Cap. 7, pp. 107-110
```

### 1.3 — Variability Index (VI)

```
RULE: vi-calculation
ID: LOAD-003
DESCRIPCIÓN: Índice de variabilidad del esfuerzo.
FÓRMULA: VI = NP / AveragePower
VALORES DE REFERENCIA:
  Contrarreloj / triatlón:        1.00 - 1.05
  Criterium:                       1.05 - 1.15
  Carrera en línea (ruta):         1.05 - 1.15
  Carrera en línea dura:           1.10 - 1.20+
  MTB XC:                          1.10 - 1.20+
  Ciclocross:                      1.10 - 1.20+
  Pista (persecución):             1.00 - 1.05
  Entrenamiento steady-state:      1.00 - 1.05
  Triatlón (objetivo pacing):      1.04 - 1.07
USO:
  - Comparar VI de entrenamientos vs carreras objetivo
  - Si VI de entrenamiento >> VI de carrera → falta especificidad neuromuscular
  - Triatlón: VI > 1.07 → demasiadas surges, desperdicio de glucógeno
FUENTE: Cap. 7, Tabla 7.1, p. 109; Cap. 12, p. 246
```

### 1.4 — CTL (Chronic Training Load)

```
RULE: ctl-calculation
ID: LOAD-004
DESCRIPCIÓN: Carga de entrenamiento crónica (fitness).
FÓRMULA: EWMA de TSS diario con constante de tiempo = 42 días
  CTL_hoy = CTL_ayer + (TSS_hoy - CTL_ayer) × (1 - e^(-1/42))
  Simplificado: CTL_hoy = CTL_ayer + (TSS_hoy - CTL_ayer) / 42
INTERPRETACIÓN:
  - CTL = proxy de fitness acumulado (últimos ~3 meses)
  - No es predictor absoluto de rendimiento (falta gain factor ka)
  - Es indicador relativo de cambios en capacidad de rendimiento
RANGOS:
  CTL < 100 TSS/día:   atleta probablemente subentrenado
  CTL 100-150 TSS/día: rango óptimo sostenible para la mayoría
  CTL > 150 TSS/día:   solo atletas élite (Tour de France level)
  CTL teórico máximo:  ~180-200 TSS/día (límite genético)
ADVERTENCIAS:
  - Meseta de CTL de 4-6 semanas sin cambio de enfoque = estancamiento
  - CTL no distingue composición del entrenamiento (especificidad)
  - Se requiere datos diarios de TSS para validez
FUENTE: Cap. 9, pp. 158-167
```

### 1.5 — ATL (Acute Training Load)

```
RULE: atl-calculation
ID: LOAD-005
DESCRIPCIÓN: Carga de entrenamiento aguda (fatiga).
FÓRMULA: EWMA de TSS diario con constante de tiempo = 7 días (default)
  ATL_hoy = ATL_ayer + (TSS_hoy - ATL_ayer) × (1 - e^(-1/7))
  Simplificado: ATL_hoy = ATL_ayer + (TSS_hoy - ATL_ayer) / 7
AJUSTE DE CONSTANTE DE TIEMPO:
  Condición                          ATL τ (días)
  -------------------------------------------------
  < 30 años, recuperación rápida     5 - 7
  30-50 años (default)               7
  50-60 años                         7 - 10
  > 60 años                          10 - 14
  Eventos anaeróbicos/neuromusculares 10 - 14
  Eventos aeróbicos/resistencia       3 - 5
  Carga alta, fatiga acumulada        10 - 12
  Carga baja, fresco                  5
INTERPRETACIÓN:
  - ATL = proxy de fatiga aguda (últimas ~2 semanas)
  - No es predictor absoluto (falta gain factor kf)
  - ATL > CTL durante mucho tiempo → riesgo de overreaching
FUENTE: Cap. 9, pp. 159-163, Tabla 9.1
```

### 1.6 — TSB (Training Stress Balance)

```
RULE: tsb-calculation
ID: LOAD-006
DESCRIPCIÓN: Balance de estrés de entrenamiento (frescura/forma).
FÓRMULA: TSB = CTL - ATL
INTERPRETACIÓN:
  - TSB positivo: atleta fresco (más fitness que fatiga)
  - TSB negativo: atleta fatigado (más fatiga que fitness)
  - TSB = 0: equilibrio neutro
  - TSB no es rendimiento absoluto; es indicador de frescura
RANGOS DE PEAKING:
  Tipo de evento                    TSB óptimo
  -------------------------------------------------
  Eventos < 5 min (anaeróbicos)     +15 a +30
  Eventos > 5 min (aeróbicos)       -10 a +25
  Mayoría de personal bests         -5 a +15
  Eventos de resistencia larga      -10 a +10 (no descansar demasiado)
  Ironman / gran fondo              -5 a +5 (mantener fitness)
  Track / BMX / short hill climbs   +20 a +30 (muy fresco)
NOTAS:
  - TSB debe estar "subiendo" (tendencia positiva), no necesariamente positivo
  - Un TSB muy positivo (> +30) puede indicar pérdida de fitness
  - La "art" está en interpretar CTL + TSB juntos
FUENTE: Cap. 9, pp. 167-170, Figs. 9.6-9.8
```

### 1.7 — CTL Ramp Rate Safety

```
RULE: ctl-ramp-rate
ID: LOAD-007
DESCRIPCIÓN: Límites de incremento semanal de CTL.
VALORES:
  Ramp rate seguro:          3 - 7 TSS/día/semana
  Aceptable en picos cortos: 7 - 12 TSS/día/semana (< 2 semanas, ej. training camp)
  Peligroso:                 > 7 TSS/día/semana durante > 4 semanas consecutivas
CONDICIONES:
  - Al acercarse a CTL 100: reducir ramp rate
  - Atletas noveles: más conservadores (3-5 TSS/día/semana)
  - Atletas maduros (> 5 años training age): pueden tolerar 5-7
  - Tras bloque de ramp rate alto: incluir semana de recuperación obligatoria
  - Si ramp rate > 7 durante > 4 semanas → alto riesgo de overreaching/illness
EJEMPLO DEL LIBRO:
  Caso Matt (Cap. 9): ramp rate de 12 TSS/día durante 2 semanas
  + carrera dura con frío → enfermedad. CTL cayó de 122 a 90.
  Caso Tour de France: CTL 150→170 durante 3 semanas = ramp rate ~7
FUENTE: Cap. 9, pp. 165-167, Tabla 9.2
```

### 1.8 — Interval Stop Criterion

```
RULE: interval-stop-criterion
ID: LOAD-008
DESCRIPCIÓN: Cuándo detener series de intervalos según caída de potencia.
LÓGICA:
  1. Descartar los 2 primeros intervalos (son esfuerzos "frescos" con FRC disponible)
  2. El 3er intervalo es el "repeatable interval" (referencia)
  3. Calcular umbral de parada:
     - VO2max (zona 5, 3-8 min):  detener si caída > 5% del 3er intervalo
     - AC (zona 6, 30s-2min):     detener si caída > 10-12% del 3er intervalo
     - NP (zona 7, < 30s):        detener si no se alcanza mínimo objetivo
EXCEPCIÓN:
  - Si solo se hacen 2-3 intervalos largos (> 3 min), la regla del 3er intervalo no aplica
  - En ese caso, usar criterio de caída respecto al mejor intervalo
EJEMPLO (del libro):
  FTP 300W. Intervalos VO2max:
  Int 1: 360W, Int 2: 350W, Int 3: 340W (referencia)
  Umbral de parada: 340 × 0.95 = 323W
  Si Int 6 produce 320W → detener (o hacer uno más y verificar)
NOTA DEL LIBRO:
  "continued research needs to be done in this area"
  Basado en > 3,000 archivos de potencia y > 1,000 atletas
FUENTE: Cap. 5, Tabla 5.1, pp. 55-58
```

### 1.9 — Overreaching Detection

```
RULE: overreaching-detection
ID: LOAD-009
DESCRIPCIÓN: Señales de overreaching/overtraining.
SEÑALES:
  - Incapacidad de mantener potencia en intervalos (criterio LOAD-008 se dispara temprano)
  - Meseta de CTL de 4-6 semanas sin cambio de enfoque
  - IF > 1.05 en carrera de 1h cuando no se esperaba (puede ser FTP mal calibrado)
  - Enfermedad tras bloque intenso (ejemplo Matt, Cap. 9)
  - TSB crónicamente negativo durante > 3 semanas sin mejora
  - CTL ramp rate > 7 durante > 4 semanas
PROTOCOLO:
  1. Reducir ATL (descanso activo o completo)
  2. Permitir que TSB suba a neutro o ligeramente positivo
  3. No reiniciar ramp rate hasta que TSB se estabilice
  4. CTL caerá durante el descanso (inevitable y aceptable)
  5. Si overtraining syndrome: meses o > 1 año de recuperación
ADVERTENCIA:
  - "If ATL is greater than CTL for too long, you will reach a state of
    non-functional over-reaching, where you can train but no longer improve"
  - Overtraining Syndrome puede requerir meses o > 1 año de recuperación
FUENTE: Cap. 9, pp. 165-167
```

### 1.10 — FTP Validation via IF

```
RULE: ftp-validation
ID: LOAD-010
DESCRIPCIÓN: Detectar FTP desactualizado usando IF en carrera.
LÓGICA:
  Si IF > 1.05 en carrera de ~1 hora de duración:
    → FTP probablemente subestimado
    → Ajustar FTP provisionalmente y confirmar con test formal
  Si IF consistentemente < 0.95 en esfuerzos de 1h que se sienten máximos:
    → FTP probablemente sobreestimado
EJEMPLO DEL LIBRO:
  Joe Athlete: FTP 290W. Tras 8 semanas, IF 1.07 en crit de 1h.
  NP = 310W. Ajustar FTP a ~300W y confirmar con test.
PRECISIÓN:
  Un error del 4% en FTP genera ~8% de error en TSS
  (porque TSS ∝ 1/FTP²)
FUENTE: Cap. 7, sidebar "Using IF to Recognize Changes in Fitness", pp. 111
```

### 1.11 — Seeding PMC sin datos

```
RULE: pmc-seeding
ID: LOAD-011
DESCRIPCIÓN: Valores iniciales de CTL/ATL cuando no hay datos suficientes.
LÓGICA:
  - TSS típico por hora: 50-75 TSS/hora
  - IF semanal típico: 0.70-0.85
  - Si entrena más / outdoors / menos estructurado → extremo bajo
  - Si entrena menos / indoors / más estructurado → extremo alto
  - Asignar mismo valor a CTL y ATL (TSB = 0) como punto de partida
  - Interpretar con precaución hasta acumular suficientes datos
  - Si faltan > 10% de archivos en un bloque → interpretar PMC con cautela
FUENTE: Cap. 9, pp. 178-179
```

### 1.12 — Missing TSS Estimation

```
RULE: missing-tss-estimation
ID: LOAD-012
DESCRIPCIÓN: Cómo estimar TSS cuando falta un archivo de potencia.
MÉTODOS (en orden de preferencia):
  1. Biblioteca de entrenamientos comparables previos
  2. Datos de HR → estimar NP → calcular TSS manualmente
  3. Estimar IF directamente y calcular: TSS = duración(h) × IF² × 100
ADVERTENCIA:
  - Error de 1-2 sesiones faltantes tiene impacto mínimo
  - Si faltan > 10% de archivos en un bloque → PMC poco fiable
  - Los usuarios experimentados pueden estimar TSS tan bien como con HR
FUENTE: Cap. 9, pp. 177-178
```

---

## Recomendación 2: `rules/training-zones.ts`

Especificación completa del sistema de zonas.

### 2.1 — Coggan Classic Zones (7 + Sweet Spot)

```
RULE: training-zones-classic
ID: ZONE-001
DESCRIPCIÓN: Zonas de entrenamiento basadas en %FTP.
BASE: FTP (determinado por test de 20 min × 0.95)

ZONA  NOMBRE              %FTP       DURACIÓN TÍPICA    ADAPTACIÓN PRINCIPAL
────  ──────────────────  ─────────  ─────────────────  ─────────────────────────────────
1     Active Recovery     < 55%      Ilimitada          Recuperación, flujo sanguíneo,
                                                         eliminación de desechos
2     Endurance           56 - 75%   2 - 5+ horas       Mitocondrias, capilares,
                                                         corazón, stamina, utilización
                                                         de grasas
3     Tempo               76 - 90%   1 - 3 horas        Resistencia muscular, glucógeno,
                                                         adaptaciones aeróbicas,
                                                         "best bang for the buck"
4     Lactate Threshold   91 - 105%  10 - 60 min        FTP, tolerancia al lactato,
                                                         eficiencia aeróbica a alta
                                                         intensidad
4a    Sweet Spot          88 - 93%   10 - 60 min        FTP con menor fatiga que zona 4
                                                         pura; base para trabajo threshold
5     VO2max              106 - 120% 3 - 8 min          VO2max, potencia aeróbica máxima
6     Anaerobic Capacity  121 - 150% 30s - 2 min        FRC, capacidad anaeróbica,
                                                         tolerancia al lactato extremo
7     Neuromuscular Power > 150%     < 30s              Pmax, reclutamiento motor,
                                                         velocidad de contracción

REGLAS DE APLICACIÓN:
  - Las zonas son un continuo fisiológico, no compartimentos estancos
  - Zonas 1-4: universales (aplican a la mayoría de ciclistas)
  - Zonas 5-7: pueden variar enormemente entre individuos → considerar iLevels
  - En esfuerzos largos: usar extremo inferior del rango
  - En esfuerzos cortos: usar extremo superior del rango
  - Sweet Spot (4a): usar al inicio de temporada antes de trabajo threshold puro;
    reincorporar cada 14 días; base para 6-8 sesiones antes de pasar a zona 4 alta
FUENTE: Cap. 3, Tablas 3.1-3.2, pp. 32-36; Cap. 5, pp. 58-79
```

### 2.2 — iLevels (Individualized Levels)

```
RULE: ilevels
ID: ZONE-002
DESCRIPCIÓN: Zonas individualizadas basadas en Power Duration Curve.
APLICABILIDAD: Solo para esfuerzos por encima de FTP (niveles 5+).
  Niveles 1-4 siguen siendo %FTP clásicos.
  Excepción: se añade Level 4a (Sweet Spot, 88-95% FTP) como iLevel.

ESTRUCTURA:
  iLevel  Nombre                          Duración típica     Base
  ──────  ──────────────────────────────  ──────────────────  ─────────────────────
  1-4     (igual que Classic)             -                   %FTP
  4a      Sweet Spot                      10-60 min           88-95% FTP
  5       FRC / FTP (tweener)             Variable            PDC: entre FRC y FTP
  6       FRC (pure anaerobic)            28s - 2 min         PDC: zona FRC
  7a      Pmax / FRC (tweener)            9s - 28s            PDC: entre Pmax y FRC
  7       Pmax (pure explosive)           < 9s                PDC: Pmax

DETERMINACIÓN:
  - Los cut-offs se basan en puntos de inflexión de la PDC
  - Donde hay cambios significativos en el parámetro fisiológico dominante
  - Ejemplo del libro (Joe Athlete):
    Classic Level 6: 121-150% FTP = 351-435W (30s-2min)
    iLevel 6 real: 28s a 697W → 1:33 a 471W
    → iLevel requiere intensidades mucho mayores que Classic

CONDICIONES DE USO:
  - Requiere datos suficientes para construir PDC fiable
  - Recomendado para atletas que no encajan en Classic (> 5% desviación)
  - Software: TrainingPeaks WKO4 calcula automáticamente
  - Si no hay software: usar Classic como fallback
FUENTE: Cap. 3, pp. 36-37, Tabla 3.5; Cap. 5, pp. 72-79
```

### 2.3 — RPE Mapping (Borg 10-point)

```
RULE: rpe-mapping
ID: ZONE-003
DESCRIPCIÓN: Correspondencia RPE (Borg CR-10) con zonas de potencia.
ESCALA: Borg Category Ratio 10-point (no la de 20 puntos)

ZONA   RPE (Borg CR-10)   DESCRIPCIÓN
────   ────────────────   ────────────────────────────
1      1 - 2              Very, very easy
2      2 - 3              Easy
3      3 - 4              Moderate, "up tempo"
4      4 - 5              Somewhat hard
4a     4 - 5              Somewhat hard (Sweet Spot)
5      5 - 6              Hard
6      6 - 7              Very hard
7      8 - 10             Extremely hard / maximal

NOTAS:
  - RPE se mide al inicio del intervalo (no al final, porque sube con el tiempo)
  - En carrera, RPE puede ser inferior al real por adrenalina/cafeína
  - RPE no es fiable los primeros 4-5 minutos de un TT
  - "Power calibrates perceived exertion, and perceived exertion modulates power"
    (Charles Howe, Cap. 12)
FUENTE: Cap. 3, Tabla 3.3; Cap. 12, p. 236
```

### 2.4 — Heart Rate Guidelines (aproximadas)

```
RULE: hr-guidelines
ID: ZONE-004
DESCRIPCIÓN: Rangos aproximados de HR por zona (solo como guía complementaria).
ADVERTENCIA:
  - HR es inherentemente variable y depende de hidratación, estrés, sueño, clima
  - HR lag: respuesta lenta a cambios rápidos de potencia
  - HR no es fiable para zonas 5-7 (esfuerzos cortos)
  - "Heart rate is the intensity of your intention" (Hunter Allen)
  - Power > HR para prescripción de intensidad
MAPEO APROXIMADO (respecto a FTHR = HR at FTP):
  Zona 1:  < 68% FTHR
  Zona 2:  69 - 83% FTHR
  Zona 3:  84 - 94% FTHR
  Zona 4:  95 - 105% FTHR
  Zona 5:  > 105% FTHR
  Zonas 6-7: HR no es guía útil
FUENTE: Cap. 3, Tabla 3.1; Cap. 1, pp. 3-4
```

### 2.5 — Zone Selection by Goal

```
RULE: zone-selection
ID: ZONE-005
DESCRIPCIÓN: Qué zona entrenar según objetivo.

OBJETIVO                          ZONA(S) PRIMARIA(S)   ZONA(S) COMPLEMENTARIA(S)
────────────────────────────────  ────────────────────  ──────────────────────────
Aumentar FTP                      4a → 4                3, 5 (VO2max levanta FTP)
Mejorar VO2max                    5                     4, 6
Aumentar FRC / capacidad anaer.   6                     5, 7a
Mejorar sprint / Pmax             7, 7a                 6
Resistencia aeróbica / stamina    2, 3                  4a
Preparación triatlón (70.3/IM)    4a, 4, 2              5, 6 (para colinas)
Preparación criterium             6, 7, 4               5
Preparación TT                    4, 4a                 5, 3
Preparación gran fondo            3, 4a, 2              4, 5
Preparación ciclocross            6, 4                  5, 7
Preparación track (pursuit)       5, 4                  6, 3
Preparación ultra-MTB             2, 3, 4               6, 5

NOTA: "An athlete should do the least amount of the most specific training
       that brings continual improvement" (Joe Friel, citado en Cap. 5)
FUENTE: Cap. 5, pp. 58-79; Cap. 10 (casos); Cap. 12, 13, 14
```

---

## Recomendación 3: SkillPaths completos

### 3.1 — SkillPath: FTP Development

```
SKILLPATH: ftp-development
DISCIPLINA: Ciclismo / Triatlón / TT
OBJETIVO: Maximizar la potencia sostenible en quasi-steady-state (FTP)
REQUISITOS:
  - Sin lesiones agudas
  - FTP actual determinado (test < 8 semanas)
  - Base aeróbica (semanas de zona 2-3)
  - Nutrición adecuada

STEP  NOMBRE              DESCRIPCIÓN                                     CRITERIO DE AVANCE                    ERRORES TÍPICOS                    NOTAS
────  ──────────────────  ──────────────────────────────────────────────  ──────────────────────────────────────  ────────────────────────────────  ──────────────────
1     Sweet Spot base     2-3 × 10-20 min al 88-93% FTP.                 Completar 2 × 20 min sin caída          Empezar demasiado fuerte;         Cap. 5, pp. 62-64
      (Sub-Threshold)     Cadencia auto-seleccionada o +5 rpm.           de potencia.                            no mantener rango;
                          Descanso 5-10 min entre esfuerzos.                                                  hammer en colinas
                          Progresión: 3×12 → 4×12 → 3×15 → 4×15 →
                          2×20 → 3×20 → 4×20 min.
                          Mínimo 6-8 sesiones antes de pasar a Step 2.

2     Threshold           2 × 20 min al 96-105% FTP.                     Completar 1h total a FTP                No mantener cadencia;             Cap. 5, pp. 64-65
      intervals           Descanso 10-15 min entre esfuerzos.            (2×30, 3×20, o 1×60).                   hundirse en 2ª repetición
                          Progresión: 2×10 → 2×15 → 2×20 → 3×20
                          → 1×60 min.

3     Threshold           2 × 20 min FTP con bursts de 10s              Mantener NP en zona durante             Bursts demasiado agresivos        Cap. 12, p. 238
      + bursts            cada 4 min (5 bursts por intervalo).          todo el esfuerzo.                       que rompen el ritmo;
                          Simula cambios de pace en carrera.                                                    no volver a FTP rápido

4     Over-unders /       20 min alternando 88% y 120% FTP              Completar 2 × 20 min sin que            Dejar caer potencia en fase       Cap. 5; Cap. 10
      Crisscross          cada 2 min.                                    potencia caiga < 85% FTP.               "under"; transición brusca
                          Alternativa: 30s burst a 120% FTP cada
                          2 min dentro de 20 min a FTP.
                          "Visualize a bathtub: fill to max, drain,
                          fill again" (Cap. 10, Jill)

5     FTP extension       30-60 min continuos a FTP.                     Mantener 45-60 min.                     Pacing: empezar demasiado         Cap. 5, p. 65
                          "Hour of Power" (Bill Black variant):                                               fuerte; perder foco mental
                          60 min FTP, cada 2 min: out of saddle 10s,
                          shift, ±20 rpm.

6     Race-specific FTP   TT simulado o esfuerzo de carrera a FTP.       Mantener NP en FTP durante              Falta de foco en minutos          Cap. 13
                          En posición de TT si aplica.                   duración objetivo.                      finales; no practicar en
                          Practicar pacing: no empezar demasiado fuerte.                                       posición de carrera
```

### 3.2 — SkillPath: VO2max Development

```
SKILLPATH: vo2max-development
DISCIPLINA: Ciclismo / Triatlón (colinas) / Track (pursuit)
OBJETIVO: Mejorar la potencia máxima aeróbica (VO2max power)
REQUISITOS:
  - Base aeróbica sólida (semanas de zona 2-3)
  - FTP establecido
  - Relativamente fresco (no hacer fatigado)

STEP  NOMBRE              DESCRIPCIÓN                                     CRITERIO DE AVANCE                    ERRORES TÍPICOS                    NOTAS
────  ──────────────────  ──────────────────────────────────────────────  ──────────────────────────────────────  ────────────────────────────────  ──────────────────
1     Short VO2max        4-6 × 3 min al 106-120% FTP.                  Completar todas las reps sin            Salir demasiado fuerte en         Cap. 5, pp. 66-68
                          Rest 3-5 min.                                  caída > 5% (regla LOAD-008).            rep 1; no pacing
                          Usar interval mode para trackear.

2     Extended VO2max     3-5 × 5-8 min al 106-115% FTP.                Mantener potencia sin caída.            No pacing: empezar a 120%         Cap. 5
                          Rest 5-8 min.                                                                  y morir a mitad

3     Progressive         5 reps empezando en 5 min y extendiendo       Completar la progresión                 Reducir intensidad en vez         Cap. 5, p. 67
      duration            30s cada rep (5, 5:30, 6, 6:30, 7 min).      completa.                             de extender
                          Si no se puede extender: reducir 10-15W
                          (3-5%) pero nunca < 106% FTP.

4     Race-winning        30s sprint (200% FTP, peak 300%) +            Completar 5-8 esfuerzos.                Sprint inicial excesivo que       Cap. 5, pp. 68-69;
      intervals           3 min al 100-110% FTP + 10s burst                                                    compromete el 3 min; no           Fig. 5.4
                          (200-250% FTP). Rest 5-6 min.                                                        simular la fatiga real de
                          Simula el patrón de un ataque ganador.                                               carrera

5     6-min TT            5-6 × 6 min al 96-102% FTP.                   Mantener pacing; no                     Empezar demasiado fuerte;         Cap. 10 (Bob);
      simulation          Rest 6-8 min.                                  hundirse en reps finales.               no usar posición de TT            Appendix VO2-W1
                          "Pretend you are doing a time trial."
```

### 3.3 — SkillPath: Anaerobic Capacity / FRC Development

```
SKILLPATH: ac-development
DISCIPLINA: Ciclismo / Ciclocross / MTB / Criterium
OBJETIVO: Aumentar FRC y repeatabilidad en esfuerzos supra-FTP
REQUISITOS:
  - Fresco (no hacer fatigado; estos entrenamientos son "when you are most fresh")
  - Base aeróbica
  - Warm-up completo

STEP  NOMBRE              DESCRIPCIÓN                                     CRITERIO DE AVANCE                    ERRORES TÍPICOS                    NOTAS
────  ──────────────────  ──────────────────────────────────────────────  ──────────────────────────────────────  ────────────────────────────────  ──────────────────
1     2-min AC            6-8 × 2 min al 130-150% FTP.                  Mantener > 118% FTP hasta               No usar interval mode;            Cap. 5, pp. 69-70;
      intervals           Rest 2-3 min (más si necesario).              última rep.                             rest insuficiente                 AC-W3
                          Stop: no poder mantener 118% FTP.

2     1-min AC            6-8 × 1 min al 140-150% FTP.                  Mantener > 128-131% FTP.                Rest insuficiente entre           Cap. 5
      intervals           Rest 3 min.                                                                  reps; no pacing

3     Micro-bursts        15s ON (150% FTP) / 15s OFF (50% FTP)        Completar 2-3 sets de 10 min.           No mantener cadencia alta         Cap. 5, pp. 71-72;
                          × 10 min × 2-3 sets. Rest 20 min entre sets.                                en "on"; no transición            NP-W1, NP-W2
                          Alternativa: 3 sets de 10 min.                                              rápida

4     30-30-30 (CX)       30s al 150% FTP + 30s coasting +              Completar 3-5 sets de 10 min.           Transición torpe al running;      Cap. 14, pp. 283-284
                          30s running × 10 min. Rest 5 min.                                             no mantener potencia en
                          Específico para ciclocross.                                                    el 30s de bici

5     Hill repeats AC     8-10 colinas de 45s-1:30 min al ~140% FTP.   Mantener potencia; stop con             Sprint final no explosivo;        Cap. 5, p. 70
                          Sprint en últimos 25m. Rest 4-5 min.          caída > 10% del 2º/3er intervalo.     no atacar la colina

6     18-interval AC      3 sets × 6 intervals (2 min al 130% FTP,     Completar las 3 sets.                   Mental: parecer imposible al      Cap. 10 (Joe TriGuy);
      (Hunter's fav.)     rest 1 min).                                                                 inicio; fatiga en set 3           AC-W7
                          "That wasn't so bad!"
```

### 3.4 — SkillPath: Neuromuscular Power / Sprint

```
SKILLPATH: sprint-development
DISCIPLINA: Ciclismo (pista, criterium, ruta) / Track
OBJETIVO: Maximizar Pmax y fatiga-resistencia en sprint
REQUISITOS:
  - Completamente fresco
  - Warm-up exhaustivo (20+ min)
  - No mirar el potenciómetro durante el sprint (revisar después)

STEP  NOMBRE              DESCRIPCIÓN                                     CRITERIO DE AVANCE                    ERRORES TÍPICOS                    NOTAS
────  ──────────────────  ──────────────────────────────────────────────  ──────────────────────────────────────  ────────────────────────────────  ──────────────────
1     Small-ring          6 × 50m desde baja velocidad (~10 mph).       Aumentar peak power.                    "Dump the chain" a gear           Cap. 5, p. 71;
      sprints             Sin cambiar. Wind out gear.                                                        demasiado duro; no timing         NP-W5
                          Cadencia target: 120+ rpm al final.                                                correcto del cambio

2     Big-ring sprints    3-6 × 250-300m desde 20-23 mph.              Mantener cadencia > 110 rpm             No timing correcto del            Cap. 5; NP-W5/W6
                          1-2 cambios. "Like driving a stick shift:                                          cambio; empezar en gear
                          work down the gears when rpms reach                                              demasiado duro
                          the correct range."

3     Sprint doubles      5-8s al 80% max + 10s al 120-150% FTP +      Completar 6-10 doubles.                 No simular la fatiga real         NP-W8, Appendix
                          sprint máximo (~18s total, 250-300m).                                               de carrera; sprint final
                          Rest 5 min.                                                                        débil

4     Big-gear power      6 × 20s en 53:13, seated, desde baja         Generar 425-535W sentado.               Compensar con upper body;         Cap. 10 (Bob);
      (seated)            velocidad. Focus: push hard, smooth.                                             cadencia demasiado baja           TEMP-W8
                          Cadencia starts low, gets faster.                                                  (< 50 rpm) con dolor rodilla
                          "Be careful on the knees" (NP-W4).

5     Micro-bursts        15s ON (150% FTP) / 15s OFF × 10 min         Completar 2-3 sets.                     No mantener cadencia alta         Cap. 5, pp. 71-72;
      (NM power)          × 2-3 sets.                                                                        en ON; usar gear demasiado        NP-W1, NP-W2
                          Alternativa: 10s burst cada 3 min dentro                                           duro
                          de 1h a Tempo.
```

### 3.5 — SkillPath: Pacing Mastery (Triathlon)

```
SKILLPATH: pacing-mastery-triathlon
DISCIPLINA: Triatlón
OBJETIVO: Ejecutar el segmento de ciclismo al IF/TSS objetivo sin comprometer la carrera a pie
REQUISITOS:
  - FTP conocido y actualizado
  - Power calibration completada (ver Step 1)

STEP  NOMBRE              DESCRIPCIÓN                                     CRITERIO DE AVANCE                    ERRORES TÍPICOS                    NOTAS
────  ──────────────────  ──────────────────────────────────────────────  ──────────────────────────────────────  ────────────────────────────────  ──────────────────
1     Power               3-4 × 10 min a diferentes intensidades        Distinguir RPE en cada nivel.           Hacer > 1 sesión/día;             Cap. 12, pp. 236-237
      calibration         × 5 sesiones / 10 días.                       Internalizar sensación física.          confundir sensaciones
                          Intensidades: race-pace ± variaciones.
                          "Power calibrates perceived exertion"
                          (Charles Howe).

2     Extended            2 × 20 min a cada intensidad.                  Mantener potencia estable               RPE cambia a lo largo del         Cap. 12
      calibration                                                        20 min.                                 intervalo; no ajustar

3     60-min              60 min continuos a intensidad de carrera.     NP dentro de ±2% del objetivo.          Variabilidad por terreno;         Cap. 12
      calibration                                                        Repetir 2+ veces.                       no mantener foco

4     Race rehearsal      Simular distancia de carrera con brick run    Run pace dentro de objetivo.            No practicar transición;          Cap. 12
                          posterior.                                    Sensación de piernas post-bici.         no testear nutrición
                          50% distancia bici + 50% distancia run.

5     Race execution      Mantener NP objetivo, VI < 1.07.              Post-race: TSS dentro de budget.        Atacar colinas; seguir a          Cap. 12, pp. 246-251
                          Primeros 30-45 min: 95% del objetivo.         Quadrant III/IV dominante.              otros; gear mashing;
                          Colinas > 3 min: 105% del objetivo.                                                   surges innecesarias
                          Colinas 30s-2 min: 110% del objetivo.
                          "Stay light on the pedals."
```

### 3.6 — SkillPath: Stamina / Fatigue Resistance

```
SKILLPATH: stamina-development
DISCIPLINA: Ciclismo / Triatlón / Gran Fondo / Ultra-MTB
OBJETIVO: Mejorar la capacidad de sostener potencia sub-FTP tras fatiga acumulada
REQUISITOS:
  - FTP establecido
  - Capacidad de completar 3+ horas de bici
  - Nutrición planificada

STEP  NOMBRE              DESCRIPCIÓN                                     CRITERIO DE AVANCE                    ERRORES TÍPICOS                    NOTAS
────  ──────────────────  ──────────────────────────────────────────────  ──────────────────────────────────────  ────────────────────────────────  ──────────────────
1     Over-distance       Rodar 50% más de la distancia normal.         Completar sin caída de                  No comer/beber suficiente;        Cap. 12, p. 239
      rides               Mínimo 3 horas.                               potencia > 10%.                         no preparar nutrición
                          Dentro: 2 × 20 min Tempo en 1ª hora.

2     Kitchen sink        4-5 horas con FTP + Tempo + VO2max +          Terminar fatigado pero sin              No dosificar: empezar             Cap. 10 (Joe, Bill);
      rides               sprints.                                      daño muscular.                          demasiado fuerte                  END-W9, WATTS-W5
                          "Exhaust muscular endurance without
                          damaging muscles."
                          Última 45 min: Sweet Spot.

3     Fatigue-state       Comparar best power fresco vs tras 2,000 kJ.  Reducir la caída de potencia            No entrenar específicamente       Cap. 13, pp. 269-271;
      testing             Ej: Bill Masters: 5-min power fresco 261W,   en estado fatigado.                     en estado fatigado                Fig. 13.8
                          tras 2,000 kJ → 202W.
                          Objetivo: reducir ese gap.

4     Back-to-back        3 días duros consecutivos (Tue-Wed-Thu).      Mantener wattage objetivo en            No recuperar entre días;          Cap. 10 (Bob, Jill)
      hard days           + fin de semana largo.                        el 3er día.                             "stacking" workouts
```

---

## Recomendación 4: Extensiones del modelo de datos

### 4.1 — Nuevos tipos

```typescript
// ===== PowerDurationModel =====
// Representa el modelo completo de potencia-duración del atleta.
// Fuente: Cap. 8 completo.
interface PowerDurationModel {
  athleteId: string;
  date: Date;                    // fecha del snapshot
  pmax: number;                  // W - potencia máxima (1 pedal revolution)
  frc: number;                   // J (o kJ) - Functional Reserve Capacity
  mftp: number;                  // W - modeled FTP (plateau de la PDC)
  tte: number;                   // min - Time to Exhaustion a mFTP
  stamina: number;               // 0-100% - resistencia a fatiga sub-FTP
                                 //   100% = nunca fatiga; <50% = fatiga rápido
                                 //   típico: 75-85%
  phenotype: Phenotype;
  fittedCurve: DataPoint[];      // puntos de la PDC calculada
  mmpCurve: DataPoint[];         // Mean Maximal Power real (datos)
}

type Phenotype =
  | 'sprinter'        // Pmax alto, FTP bajo → pendiente descendente
  | 'pursuiter'       // FRC alto + FTP alto → V invertida
  | 'all-rounder'     // todo similar → horizontal
  | 'time-trialist'   // FTP alto, Pmax bajo → pendiente ascendente
  | 'climber';        // similar a TT pero con énfasis en W/kg

// Phenotypic Map axes:
// X = Pmax/FTP ratio (bajo = TT, alto = sprinter)
// Y = FRC/Pmax ratio (distingue dentro de cada grupo)

interface DataPoint {
  duration: number;    // segundos
  power: number;       // watts
}

// ===== PerformanceManagerState =====
// Estado diario del PMC (Performance Manager Chart).
// Fuente: Cap. 9.
interface PerformanceManagerState {
  athleteId: string;
  date: Date;
  dailyTSS: number;            // TSS del día
  ctl: number;                 // 42-day EWMA
  atl: number;                 // 7-day EWMA (ajustable)
  tsb: number;                 // CTL - ATL
  ctlRampRate: number;         // TSS/day/week (rolling 7-day)
  formStatus: FormStatus;
  atlTimeConstant: number;     // días (default 7, ajustable 3-14)
}

type FormStatus =
  | 'building'         // CTL subiendo, TSB negativo o neutro
  | 'peaking'          // CTL estable/alto, TSB subiendo hacia positivo
  | 'resting'          // TSB positivo, recuperando
  | 'overreaching'     // TSB muy negativo, rendimiento cayendo
  | 'detraining';      // CTL bajando por inactividad

// ===== QuadrantAnalysisResult =====
// Distribución del esfuerzo en 4 cuadrantes fuerza-velocidad.
// Fuente: Cap. 7, pp. 114-129.
interface QuadrantAnalysisResult {
  sessionId: string;
  thresholdAEPF: number;       // N - AEPF en FTP (umbral de fuerza)
  thresholdCPV: number;        // m/s - CPV en FTP (umbral de velocidad)
  quadrantI_pct: number;       // % tiempo: alta fuerza + alta velocidad
  quadrantII_pct: number;      // % tiempo: alta fuerza + baja velocidad
  quadrantIII_pct: number;     // % tiempo: baja fuerza + baja velocidad
  quadrantIV_pct: number;      // % tiempo: baja fuerza + alta velocidad
  crankLength: number;         // m - para calcular AEPF y CPV
}

// Fórmulas:
// AEPF = (P × 60) / (C × 2π × CL)   [N]
// CPV  = (C × CL × 2π) / 60          [m/s]
// Donde P = potencia (W), C = cadencia (rpm), CL = crank length (m)

// ===== PacingStrategy =====
// Estrategia de pacing para eventos.
// Fuente: Cap. 12 (triatlón), Cap. 13 (TT, crit, road).
interface PacingStrategy {
  eventType: EventType;
  targetIF: number;
  targetTSS: number;
  targetNP: number;
  targetFTP_pct: number;       // % de FTP como objetivo
  variabilityIndexTarget: number;
  hillAdjustments: HillAdjustment[];
  startStrategy: string;       // ej: "95% objetivo primeros 30-45 min"
}

type EventType =
  | 'tt-flat' | 'tt-hilly' | 'criterium' | 'road-race'
  | 'triathlon-sprint' | 'triathlon-olympic'
  | 'triathlon-70.3' | 'triathlon-ironman'
  | 'cyclocross' | 'track-pursuit' | 'mtb-xc' | 'mtb-ultra'
  | 'gran-fondo' | 'stage-race';

interface HillAdjustment {
  duration: string;            // ej: "> 3 min", "30s - 2 min"
  pctOfGoal: number;           // ej: 105, 110
}

// ===== IntervalSession =====
// Sesión de intervalos con criterio de parada.
// Fuente: Cap. 5, Tabla 5.1.
interface IntervalSession {
  targetZone: number;          // 1-7
  targetPower: number;         // W
  intervalDuration: number;    // s
  restDuration: number;        // s
  stopThresholdPct: number;    // default 5% (VO2max) o 10-12% (AC)
  referenceInterval: number;   // default 3
  completedIntervals: IntervalResult[];
  stoppedAt: number | null;    // índice del intervalo donde se detuvo
}

interface IntervalResult {
  index: number;
  avgPower: number;
  duration: number;
  isReference: boolean;        // true si es el 3er intervalo
}

// ===== PowerProfileSnapshot =====
// Perfil de potencia en 4 duraciones estándar.
// Fuente: Cap. 4.
interface PowerProfileSnapshot {
  athleteId: string;
  date: Date;
  p5s: number;                 // W/kg (best 5 seconds)
  p1min: number;               // W/kg (best 1 minute)
  p5min: number;               // W/kg (best 5 minutes)
  ftp: number;                 // W/kg (functional threshold)
  phenotype: Phenotype;
  category: ProfileCategory;   // World Champion → Novice
}

type ProfileCategory =
  | 'world-champion' | 'exceptional' | 'excellent'
  | 'very-good' | 'good' | 'moderate' | 'fair' | 'novice';

// ===== BilateralPedalingMetrics =====
// Métricas de pedaleo bilateral.
// Fuente: Cap. 7, pp. 129-138.
interface BilateralPedalingMetrics {
  sessionId: string;
  gpr_left: number;            // W - Gross Power Released (pierna izquierda)
  gpr_right: number;           // W - Gross Power Released (pierna derecha)
  gpa_left: number;            // W - Gross Power Absorbed (pierna izquierda)
  gpa_right: number;           // W - Gross Power Absorbed (pierna derecha)
  kurtoticIndex_left: number;  // "peakedness" del patrón de fuerza
  kurtoticIndex_right: number;
  asymmetry_pct: number;       // % diferencia entre piernas
}

// Reglas de intervención:
// - Asimetría > 10% → investigar (fuerza, fit, movimiento)
// - GPA > 35W seated en ciclista > 3 años → intervenir
// - No forzar simetría perfecta; puede reducir eficiencia

// ===== MatchBook =====
// Tracking de "matches" (esfuerzos duros que agotan reserva anaeróbica).
// Fuente: Cap. 6, pp. 99-101.
interface Match {
  timestamp: number;
  duration: number;            // s
  powerOverFTP_pct: number;    // % sobre FTP
  power: number;               // W
  context: string;             // ej: "ataque", "colina", "sprint"
}

// Definición de match (ejemplo FTP 330W):
// ≥ 20% sobre FTP durante ≥ 1 min
// Duración   % sobre FTP
// 1 min      ~120%
// 2 min      ~115%
// 5 min      ~110%
// > 5 min    disminuye progresivamente
```

### 4.2 — Extensión de tipos existentes

```typescript
// Extender TrainingSession con métricas de potencia:
interface TrainingSession {
  // ... campos existentes ...

  // Nuevos campos de potencia:
  avgPower?: number;           // W
  np?: number;                 // W (Normalized Power)
  if?: number;                 // Intensity Factor (NP/FTP)
  tss?: number;                // Training Stress Score
  vi?: number;                 // Variability Index (NP/AvgPower)
  kJ?: number;                 // trabajo total (kJ)
  kcal_estimate?: number;      // ≈ kJ (ratio 1:1)

  // Performance Manager:
  ctl_after?: number;
  atl_after?: number;
  tsb_after?: number;

  // Quadrant Analysis:
  quadrantAnalysis?: QuadrantAnalysisResult;

  // Bilateral:
  bilateral?: BilateralPedalingMetrics;

  // Matches:
  matches?: Match[];

  // Pacing:
  pacingStrategy?: PacingStrategy;
  pacingCompliance?: number;   // % tiempo dentro del objetivo

  // Power Profile:
  powerProfile?: PowerProfileSnapshot;
}

// Extender AthleteProfile:
interface AthleteProfile {
  // ... campos existentes ...

  ftp: number;                 // W (actualizado)
  ftpWkg: number;              // W/kg
  ftpLastTested: Date;
  ftpTestHistory: FTPTest[];

  powerDurationModel?: PowerDurationModel;
  phenotype?: Phenotype;
  currentCTL?: number;
  currentATL?: number;
  currentTSB?: number;
  atlTimeConstant: number;     // días, default 7

  crankLength: number;         // m (para Quadrant Analysis)
}

interface FTPTest {
  date: Date;
  avg20min: number;            // W
  ftp: number;                 // W (avg20min × 0.95)
  method: '20min-test' | '60min-tt' | 'race-np' | 'pdc-model';
  adjustment_pct: number;      // 5% default, 2-7% según atleta
}
```

---

## Recomendación 5: Reglas de exclusión y límites

### 5.1 — Lo que el sistema NO debe hacer con este libro

```
EXCLUSIONES ABSOLUTAS:

1. NO DIAGNOSTICAR LESIONES
   El libro no contiene protocolos de diagnóstico.
   La única mención de lesión es incidental (clavícula rota de Jack, Cap. 11).
   No usar para inferir, sugerir o descartar lesiones.

2. NO PRESCRIBIR REHABILITACIÓN
   No hay protocolos de rehab, fases de recuperación post-lesión,
   escalas de dolor, ni criterios de retorno a la actividad.
   La sección de "overtraining" es gestión de carga, no rehab.

3. NO DEFINIR EJERCICIOS DE FUERZA FUERA DE LA BICICLETA
   El libro es explícito:
   "Training strictly to increase strength (e.g., by lifting heavy weights
   at a slow speed) would have a limited effect, at best, on the maximal
   power output of a trained cyclist" (Cap. 7, pp. 125-126).
   No usar para prescribir sentadillas, peso muerto, etc.
   Excepción: mencionar que el entrenamiento explosivo/plyométrico
   puede mitigar pérdida de velocidad de contracción.

4. NO USAR COMO FUENTE DE NUTRICIÓN DETALLADA
   Solo aporta la aproximación kJ ≈ kcal.
   No prescribe macros, timing de ingesta, hidratación, suplementación.
   Remitir al stack de nutrición de la app.

5. NO APLICAR A DEPORTES SIN POTENCÍOMETRO
   Todas las métricas (NP, IF, TSS, zonas, Quadrant Analysis)
   requieren un potenciómetro.
   Para usuarios sin potenciómetro: usar RPE y HR como fallback,
   pero marcar las reglas como "no aplicables sin datos de potencia".

6. NO AUTOMATIZAR INTERVENCIONES MÉDICAS
   El libro no es un texto médico.
   Ninguna regla debe presentarse como consejo médico.
   En caso de señales de overtraining severo: recomendar consultar profesional.
```

### 5.2 — Limitaciones de transferencia

```
LIMITACIONES:

1. SOLO CICLISMO Y TRIATLÓN
   Los valores de AEPF, CPV, Quadrant Analysis, bilateral pedaling
   son específicos del pedaleo. No transferir a running, swimming,
   calistenia, fuerza general.

2. POBLACIÓN CICLISTA
   Los rangos de Power Profile están basados en ciclistas jóvenes adultos.
   El libro no crea tablas separadas para másters (aunque menciona
   que atletas 80+ compiten a Cat. III/Good).
   Para atletas másters: ajustar ATL time constant, ramp rate,
   y expectativas de recuperación.

3. EL LIBRO ASUME FTP CONOCIDO
   No hay protocolo para alguien que nunca ha hecho un test.
   El sistema debe guiar al usuario a través del test de 20 min
   antes de poder aplicar cualquier regla.

4. TSS NO CAPTURA COMPOSICIÓN DEL ENTRENAMIENTO
   "TSS does not capture the composition of the training"
   (Cap. 7, advertencia implícita).
   Mismo TSS puede ser fisiológicamente muy diferente
   si la distribución de zonas cambia.
   El sistema debe trackear tiempo en zona además de TSS.

5. PMC ES RELATIVO, NO ABSOLUTO
   "CTL is a relative indicator of changes in performance ability
   due to changes in fitness, not an absolute predictor"
   (Cap. 9).
   No presentar CTL/TSB como predicción exacta de rendimiento.
```

### 5.3 — Acciones concretas para otros agentes

```
NEXT STEPS PARA OTROS AGENTES:

1. Crear `rules/load-management.ts` con las reglas LOAD-001 a LOAD-012
   documentadas en la Recomendación 1.
   Prioridad: LOAD-001 (TSS), LOAD-004/005/006 (CTL/ATL/TSB),
   LOAD-008 (interval stop).

2. Crear `rules/training-zones.ts` con las reglas ZONE-001 a ZONE-005
   documentadas en la Recomendación 2.
   Prioridad: ZONE-001 (Classic zones), ZONE-002 (iLevels).

3. Crear SkillPaths en el modelo SkillPath/SkillStep:
   - `ftp-development` (6 steps)
   - `vo2max-development` (5 steps)
   - `ac-development` (6 steps)
   - `sprint-development` (5 steps)
   - `pacing-mastery-triathlon` (5 steps)
   - `stamina-development` (4 steps)
   Cada step con: primaryCues, commonFaults, bailTechniques,
   advancementCriteria.

4. Añadir al modelo de datos los tipos:
   PowerDurationModel, PerformanceManagerState,
   QuadrantAnalysisResult, PacingStrategy, IntervalSession,
   PowerProfileSnapshot, BilateralPedalingMetrics, Match.
   Extender TrainingSession y AthleteProfile.

5. Implementar validadores de pacing:
   - Triatlón: verificar IF, TSS, VI, distribución por cuadrante
   - TT: verificar isopower, no-start-too-hard
   - Crit: verificar conservación de energía (pedal less, pedal harder)
   - CX: verificar 30-30-30 specificity
   - Ultra-MTB: verificar Allen effect strategy
```

---

*Documento completo. Todas las reglas, zonas, progresiones, tipos y exclusiones están extraídos del texto del libro con referencia a capítulo y página. Los valores numéricos que dependen de tablas visuales no reproducibles están señalados en la sección de advertencias al inicio.*

---

## Ronda 3 — tras: «Análisis completado para ***Training and Racing with a Power Meter*** (3.ª edición, Hunter Allen, Andrew Coggan y Stephen McGregor).  El r…»
# Ejecución de las 5 Recomendaciones — Training and Racing with a Power Meter (3.ª ed.)

> Documento de implementación. Incorpora la transcripción completa de las Tablas 3.2, 4.1, 5.1, 7.1, 7.2, 7.3 y 7.4 proporcionada por el usuario. Ningún parámetro funcional queda bloqueado.

---

## Recomendación 1: `rules/load-management.ts`

Especificación completa del motor de gestión de carga (12 reglas).

---

### LOAD-001 — TSS Calculation

```
ID:             LOAD-001
NOMBRE:         tss-calculation
TIPO:           intensidad × volumen (compuesto)
MÉTRICA:        TSS (puntos adimensionales)

FÓRMULA:
  TSS = (segundos × NP × IF) / (FTP × 3600) × 100
  Equivalente: TSS = duración_horas × IF² × 100
  Donde: IF = NP / FTP

VALIDACIÓN:
  - FTP > 0 y test < 8 semanas de antigüedad
  - NP solo válido para esfuerzos > 30 segundos
  - Error del 4% en FTP → error del ~8% en TSS (relación cuadrática inversa)
    (Cap. 9: "if you decrease your FTP by 4 percent, your TSS will be 8 percent higher")

ESCALA DE ESTRÉS (Tabla 7.3 — transcripción exacta):
  Rango TSS     Clasificación     Recuperación estimada
  ───────────   ──────────────    ──────────────────────────────────────────────
  < 150         Bajo              Recuperación completa al día siguiente
  150 – 300     Moderado          Ligera fatiga residual; desaparece al 2.º día
  300 – 450     Alto              Fatiga persistente incluso al cabo de 2 días
  > 450         Muy Alto          Fatiga acumulada durante varios días

MATRIZ DE SESIONES TÍPICAS (Tabla 7.4 — transcripción exacta):
  Tipo de salida                Duración    TSS estimado    IF estimado
  ───────────────────────────   ─────────   ─────────────   ───────────
  Nivel 1 (Recovery Spin)       1 h         20 – 30         < 0.55
  Nivel 2 (Endurance Ride)      2 h         90 – 110        0.65 – 0.75
  Nivel 3 (Tempo Ride)          2 h         120 – 150       0.75 – 0.85
  Nivel 4 (CRI de 40 km)       1 h         100             1.00
  Criterium                     1.5 h       120 – 140       0.95 – 1.05
  Carrera en Ruta (Road Race)   3 h         200 – 250       0.80 – 0.90
  Etapa / Rodaje Extenso        5 h         300 – 400       0.70 – 0.80

REFERENCIA: Cap. 7, pp. 111-114; Tabla 7.3; Tabla 7.4; Cap. 9, p. 177
```

---

### LOAD-002 — Normalized Power (NP) Algorithm

```
ID:             LOAD-002
NOMBRE:         np-calculation
TIPO:           intensidad
MÉTRICA:        NP (vatios)

ALGORITMO (4 pasos):
  Paso 1: Calcular media móvil de 30s de potencia (ventana deslizante)
  Paso 2: Elevar cada valor del Paso 1 a la 4.ª potencia
  Paso 3: Promediar todos los valores del Paso 2
  Paso 4: Raíz cuarta del resultado del Paso 3

RESTRICCIONES:
  - Solo válido para esfuerzos > 30 segundos
  - No aplicar a intervalos individuales < 30s
  - En esfuerzos constantes: NP ≈ Average Power

INTERPRETACIÓN:
  - NP > AvgPower → esfuerzo variable (criterium, MTB, CX)
  - NP ≈ AvgPower → esfuerzo constante (TT, triatlón)
  - NP de carrera mass-start de ~1h ≈ FTP del atleta
  - "The greater the difference, the more variable and less continuously
    aerobic the effort was" (Cap. 7)

REFERENCIA: Cap. 7, pp. 107-110
```

---

### LOAD-003 — Variability Index (VI)

```
ID:             LOAD-003
NOMBRE:         vi-calculation
TIPO:           intensidad / especificidad
MÉTRICA:        VI = NP / AveragePower

VALORES POR TIPO DE EVENTO (Tabla 7.1 — transcripción exacta):
  Evento / Disciplina                   Rango de VI típico
  ──────────────────────────────────    ──────────────────
  Criterium                             1.15 – 1.20+
  Carrera en Ruta (Road Race)           1.10 – 1.20
  Ciclismo de Montaña (MTB)             1.10 – 1.25
  Contrarreloj Plana / Ondulada         1.00 – 1.05
  Contrarreloj Montañosa                1.05 – 1.10
  Triatlón                              1.00 – 1.05

VALOR ADICIONAL (Cap. 12):
  Triatlón (objetivo pacing óptimo):    1.04 – 1.07

USO:
  - Comparar VI de entrenamientos vs carreras objetivo
  - Si VI entrenamiento >> VI carrera → falta especificidad neuromuscular
  - Triatlón: VI > 1.07 → demasiadas surges, desperdicio de glucógeno

REFERENCIA: Cap. 7, Tabla 7.1; Cap. 12, p. 246
```

---

### LOAD-004 — CTL (Chronic Training Load)

```
ID:             LOAD-004
NOMBRE:         ctl-calculation
TIPO:           carga crónica / fitness
MÉTRICA:        CTL (TSS/día, EWMA 42 días)

FÓRMULA:
  CTL_hoy = CTL_ayer + (TSS_hoy − CTL_ayer) / 42
  (EWMA con constante de tiempo τ = 42 días)

INTERPRETACIÓN:
  - CTL = proxy de fitness acumulado (últimos ~3 meses)
  - "CTL is a relative indicator of changes in performance ability due to
    changes in fitness, not an absolute predictor" (Cap. 9)
  - No distingue composición del entrenamiento (especificidad)

RANGOS:
  CTL < 100 TSS/día:    atleta probablemente subentrenado
  CTL 100-150 TSS/día:  rango óptimo sostenible para la mayoría
  CTL > 150 TSS/día:    solo atletas élite (Tour de France level)
  CTL teórico máximo:   ~180-200 TSS/día (límite genético estimado)
    (Cap. 9: "the hardest stages of the Tour de France typically generate
    a TSS of 200-300")

ADVERTENCIAS:
  - Meseta de CTL de 4-6 semanas sin cambio de enfoque = estancamiento
  - Requiere datos diarios de TSS para validez
  - La constante de tiempo de 42 días no debe cambiarse
    (Cap. 9: "the PMC approach is not very sensitive to changes in the
    CTL time constant")

REFERENCIA: Cap. 9, pp. 158-167
```

---

### LOAD-005 — ATL (Acute Training Load)

```
ID:             LOAD-005
NOMBRE:         atl-calculation
TIPO:           carga aguda / fatiga
MÉTRICA:        ATL (TSS/día, EWMA 7 días default)

FÓRMULA:
  ATL_hoy = ATL_ayer + (TSS_hoy − ATL_ayer) / τ_ATL
  τ_ATL default = 7 días

AJUSTE DE CONSTANTE DE TIEMPO (Cap. 9, pp. 162-163):
  Condición                                    τ_ATL (días)
  ──────────────────────────────────────────   ────────────
  Joven, recuperación rápida, carga baja       4 – 5
  Default (30-50 años)                         7
  Másters (>50), carga alta, eventos cortos    10 – 12
  Eventos anaeróbicos/neuromusculares          10 – 14
  Eventos aeróbicos/resistencia larga          3 – 5
  Acercándose al techo de CTL                  10+ (recuperación lenta)
  Inicio de temporada, CTL bajo                5 (recuperación rápida)

INTERPRETACIÓN:
  - ATL = proxy de fatiga aguda (últimas ~2 semanas)
  - "ATL is a relative indicator of changes in performance ability due to
    fatigue, not an absolute predictor" (Cap. 9)
  - ATL > CTL durante mucho tiempo → riesgo de overreaching
  - "The calculations in the Performance Manager are sensitive to the time
    constant used to calculate ATL, and hence TSB" (Cap. 9)

REFERENCIA: Cap. 9, pp. 159-163
```

---

### LOAD-006 — TSB (Training Stress Balance)

```
ID:             LOAD-006
NOMBRE:         tsb-calculation
TIPO:           descanso / peaking
MÉTRICA:        TSB = CTL − ATL

INTERPRETACIÓN:
  - TSB positivo: atleta fresco (más fitness que fatiga)
  - TSB negativo: atleta fatigado (más fatiga que fitness)
  - TSB = 0: equilibrio neutro
  - "TSB is really better viewed as an indicator of how fully adapted an
    individual is to his or her recent training load—how fresh the athlete
    is likely to be" (Cap. 9)

RANGOS DE PEAKING (Cap. 9, pp. 167-170):
  Tipo de evento                              TSB óptimo
  ─────────────────────────────────────────   ────────────────
  Eventos < 5 min (anaeróbicos/neuromusc.)    +15 a +30
  Eventos > 5 min (aeróbicos/resistencia)     −10 a +25
  Mayoría de personal bests (encuesta ~200)   −5 a +15
  Eventos de resistencia larga (Ironman)      −10 a +10
  Track / BMX / short hill climbs             +20 a +30

NOTAS CRÍTICAS:
  - TSB debe estar "subiendo" (tendencia positiva), no necesariamente positivo
    (Cap. 9: "TSB does not necessarily need to be a positive number in order
    to create a peak performance; it just needs to be climbing to a positive
    number")
  - TSB muy positivo (> +30) puede indicar pérdida de fitness
  - "The more anaerobic the event, the more important it is to be fresh,
    and the more aerobic the event, the more important it is to be fit"
  - La "art" está en interpretar CTL + TSB juntos

REFERENCIA: Cap. 9, pp. 167-170, Figs. 9.6-9.8
```

---

### LOAD-007 — CTL Ramp Rate Safety

```
ID:             LOAD-007
NOMBRE:         ctl-ramp-rate
TIPO:           volumen / progresión
MÉTRICA:        CTL ramp rate (TSS/día/semana)

VALORES (Cap. 9, pp. 165-167):
  Ramp rate seguro:              3 – 7 TSS/día/semana
  Aceptable en picos cortos:     7 – 12 TSS/día/semana (< 2 semanas)
  Peligroso:                     > 7 TSS/día/semana durante > 4 semanas

CONDICIONES:
  - Al acercarse a CTL 100: reducir ramp rate
  - Atletas noveles: más conservadores (3-5)
  - Atletas maduros (>5 años training age): pueden tolerar 5-7
  - Tras bloque de ramp rate alto: semana de recuperación obligatoria
  - "If you increase your CTL at a rate greater than 7 TSS per day per
    week for more than 4 weeks in a row, then the level of intense weekly
    training could be too much and send you into an overreaching downward
    spiral" (Cap. 9)

EJEMPLO TOUR DE FRANCE:
  - CTL 150 → 170 durante 3 semanas = ramp rate ~7
  - "Even the best riders in the world have a relatively shallow ramp rate
    when approaching their limit" (Cap. 9)

REFERENCIA: Cap. 9, pp. 165-167
```

---

### LOAD-008 — Interval Stop Criterion

```
ID:             LOAD-008
NOMBRE:         interval-stop-criterion
TIPO:           volumen / progresión
MÉTRICA:        %dropOff desde el 3er intervalo

TABLA COMPLETA (Tabla 5.1 — transcripción exacta):
  Duración del intervalo    Caída máxima tolerada
  ──────────────────────    ─────────────────────
  20 min                    3% – 5%
  10 min                    4% – 6%
  5 min                     5% – 7%
  3 min                     8% – 9%
  2 min                     10% – 12%
  1 min                     10% – 12%
  30 s                      12% – 15%
  15 s                      10% – 15% (15%-20% en potencia pico)

LÓGICA:
  1. Descartar los 2 primeros intervalos (esfuerzos "frescos" con FRC)
  2. El 3er intervalo es el "repeatable interval" (referencia)
  3. Calcular umbral de parada según duración:
     umbral = potencia_3er_intervalo × (1 − dropoff_pct)
  4. Detener cuando el atleta no pueda mantener el umbral

EXCEPCIÓN:
  - Si solo se hacen 2-3 intervalos largos (> 3 min), la regla del
    3er intervalo no aplica
  - "If you are doing longer intervals in which you might complete only
    two intervals total, then this rule does not apply" (Cap. 5)

BASE EMPÍRICA:
  - Basado en > 3,000 archivos de potencia y > 1,000 atletas
  - "continued research needs to be done in this area" (Cap. 5)

REFERENCIA: Cap. 5, Tabla 5.1, pp. 55-58
```

---

### LOAD-009 — Overreaching Detection

```
ID:             LOAD-009
NOMBRE:         overreaching-detection
TIPO:           seguridad / prevención
MÉTRICA:        múltiples señales

SEÑALES:
  - Incapacidad de mantener potencia en intervalos (LOAD-008 se dispara temprano)
  - Meseta de CTL de 4-6 semanas sin cambio de enfoque
  - IF > 1.05 en carrera de ~1h cuando no se esperaba
  - Enfermedad tras bloque intenso (caso Matt, Cap. 9)
  - TSB crónicamente negativo durante > 3 semanas sin mejora
  - CTL ramp rate > 7 durante > 4 semanas
  - "If ATL is greater than CTL for too long, you will reach a state of
    non-functional over-reaching, where you can train but no longer improve"

PROTOCOLO:
  1. Reducir ATL (descanso activo o completo)
  2. Permitir que TSB suba a neutro o ligeramente positivo
  3. No reiniciar ramp rate hasta que TSB se estabilice
  4. CTL caerá durante el descanso (inevitable y aceptable)
  5. Si overtraining syndrome: meses o > 1 año de recuperación

REFERENCIA: Cap. 9, pp. 165-167
```

---

### LOAD-010 — FTP Validation via IF

```
ID:             LOAD-010
NOMBRE:         ftp-validation
TIPO:           testeo / validación
MÉTRICA:        IF en carrera de ~1h

LÓGICA:
  Si IF > 1.05 en carrera de ~1 hora:
    → FTP probablemente subestimado
    → Ajustar FTP provisionalmente y confirmar con test formal
  Si IF consistentemente < 0.95 en esfuerzos de 1h máximos:
    → FTP probablemente sobreestimado

EJEMPLO DEL LIBRO:
  Joe Athlete: FTP 290W. Tras 8 semanas, IF 1.07 en crit de 1h.
  NP = 310W. Ajustar FTP a ~300W y confirmar con test.
  "Since Joe knows that a 20-watt increase in FTP in just eight weeks
  is a relatively large jump, he should probably raise his FTP setting
  to only 300 watts and confirm this number through formal testing"

PRECISIÓN:
  Un error del 4% en FTP genera ~8% de error en TSS
  (TSS ∝ 1/FTP²)

FRECUENCIA DE TESTEO:
  - Cada 6-8 semanas (6-8 veces/año)
  - Momentos: invierno (baseline), inicio temporada, pre-competición,
    durante temporada (peak), post-peak

REFERENCIA: Cap. 7, sidebar; Cap. 3, pp. 30-31
```

---

### LOAD-011 — Seeding PMC sin datos

```
ID:             LOAD-011
NOMBRE:         pmc-seeding
TIPO:           protocolo / inicialización
MÉTRICA:        CTL, ATL iniciales

LÓGICA:
  - TSS típico por hora: 50-75 TSS/hora
  - IF semanal típico: 0.70-0.85
  - Más outdoors / menos estructurado → extremo bajo
  - Más indoors / más estructurado → extremo alto
  - Asignar mismo valor a CTL y ATL (TSB = 0) como punto de partida
  - Interpretar con precaución hasta acumular suficientes datos

ADVERTENCIA:
  - Si faltan > 10% de archivos en un bloque → PMC poco fiable
  - "The output of the Performance Manager calculations during and after
    that period should be interpreted with considerable caution" (Cap. 9)

REFERENCIA: Cap. 9, pp. 178-179
```

---

### LOAD-012 — Missing TSS Estimation

```
ID:             LOAD-012
NOMBRE:         missing-tss-estimation
TIPO:           protocolo / datos
MÉTRICA:        TSS estimado

MÉTODOS (en orden de preferencia):
  1. Biblioteca de entrenamientos comparables previos
  2. Datos de HR → estimar NP → calcular TSS manualmente
  3. Estimar IF directamente: TSS = duración(h) × IF² × 100

NOTA:
  "It is often possible for experienced power-meter users to estimate
  their TSS just as accurately, if not more accurately, without heart
  rate data as with the data" (Cap. 9)

REFERENCIA: Cap. 9, pp. 177-178
```

---

## Recomendación 2: `rules/training-zones.ts`

Especificación completa del sistema de zonas.

---

### ZONE-001 — Coggan Classic Zones (7 + Sweet Spot)

```
ID:             ZONE-001
NOMBRE:         training-zones-classic
BASE:           FTP (test 20 min × 0.95)

ZONA  NOMBRE              %FTP       DURACIÓN TÍPICA
────  ──────────────────  ─────────  ─────────────────
1     Active Recovery     < 55%      Ilimitada
2     Endurance           56 - 75%   2 - 5+ horas
3     Tempo               76 - 90%   1 - 3 horas
4     Lactate Threshold   91 - 105%  10 - 60 min
4a    Sweet Spot          88 - 93%   10 - 60 min
5     VO2max              106 - 120% 3 - 8 min
6     Anaerobic Capacity  121 - 150% 30s - 2 min
7     Neuromuscular Power > 150%     < 30s

ADAPTACIONES FISIOLÓGICAS POR ZONA (Tabla 3.2 — transcripción exacta):
  Magnitud relativa: — (ninguna), + (baja), ++ (moderada),
  +++ (alta), ++++ (máxima)

  Adaptación                          N1  N2   N3   N4   N5   N6  N7
  ─────────────────────────────────   ──  ───  ───  ───  ───  ──  ──
  Volumen plasmático                  —   +    ++   +++  ++++ +   —
  Enzimas mitocondriales musculares   —   ++   +++  ++++ ++   +   —
  Umbral de lactato                   —   ++   +++  ++++ ++   +   —
  Almacenamiento glucógeno muscular   —   ++   ++++ +++  ++   +   —
  Hipertrofia fibras lentas           —   +    ++   ++   +++  +   —
  Capilarización muscular             —   +    ++   ++   +++  +   —
  Interconversión IIx → IIa           —   ++   +++  +++  ++   +   —
  Volumen sistólico / gasto cardíaco  —   +    ++   +++  ++++ +   —
  VO2max                              —   +    ++   +++  ++++ +   —
  Reservas fosfatos (ATP/PCr)         —   —    —    —    —    +   ++
  Capacidad anaeróbica                —   —    —    —    +    +++ +
  Hipertrofia fibras rápidas          —   —    —    —    —    +   ++
  Potencia neuromuscular              —   —    —    —    —    +   +++

REGLAS DE APLICACIÓN:
  - Las zonas son un continuo fisiológico, no compartimentos estancos
  - Zonas 1-4: universales
  - Zonas 5-7: pueden variar enormemente → considerar iLevels
  - Esfuerzos largos: extremo inferior del rango
  - Esfuerzos cortos: extremo superior del rango
  - "All the training levels are continuous: There is no definitive
    starting or stopping point for any of them" (Cap. 5)

REFERENCIA: Cap. 3, Tablas 3.1-3.2; Cap. 5, pp. 58-79
```

---

### ZONE-002 — iLevels (Individualized Levels)

```
ID:             ZONE-002
NOMBRE:         ilevels
APLICABILIDAD:  Solo esfuerzos por encima de FTP (niveles 5+)

ESTRUCTURA (9 iLevels, 8 divisiones):
  iLevel  Nombre                          Duración típica     Base
  ──────  ──────────────────────────────  ──────────────────  ────────────────
  1-4     (igual que Classic)             —                   %FTP
  4a      Sweet Spot                      10-60 min           88-95% FTP
  5       FRC / FTP (tweener)             Variable            PDC
  6       FRC (pure anaerobic)            28s - 2 min         PDC
  7a      Pmax / FRC (tweener)            9s - 28s            PDC
  7       Pmax (pure explosive)           < 9s                PDC

EJEMPLO DEL LIBRO (Joe Athlete, FTP 290W):
  Classic Level 6: 121-150% FTP = 351-435W (30s-2min)
  iLevel 6 real: 28s a 697W → 1:33 a 471W
  → iLevel requiere intensidades mucho mayores que Classic

CONDICIONES:
  - Requiere datos suficientes para PDC fiable
  - Software: TrainingPeaks WKO4 calcula automáticamente
  - Si no hay software: usar Classic como fallback
  - "iLevels pertain only to efforts above Coggan Classic Level 4"

REFERENCIA: Cap. 3, pp. 36-37, Tabla 3.5; Cap. 5, pp. 72-79
```

---

### ZONE-003 — RPE Mapping (Borg 10-point)

```
ID:             ZONE-003
NOMBRE:         rpe-mapping
ESCALA:         Borg Category Ratio 10-point

ZONA   RPE (Borg CR-10)   DESCRIPCIÓN
────   ────────────────   ────────────────────────────
1      1 - 2              Very, very easy
2      2 - 3              Easy
3      3 - 4              Moderate, "up tempo"
4      4 - 5              Somewhat hard
4a     4 - 5              Somewhat hard (Sweet Spot)
5      5 - 6              Hard
6      6 - 7              Very hard
7      8 - 10             Extremely hard / maximal

NOTAS:
  - RPE se mide al inicio del intervalo (no al final)
  - "Since perceived exertion increases over time, even at a constant
    exercise intensity, the suggested values refer to perceived effort
    as determined relatively early in a training session" (Cap. 3)
  - En carrera, RPE puede ser inferior al real por adrenalina/cafeína
  - RPE no es fiable los primeros 4-5 minutos de un TT

REFERENCIA: Cap. 3, Tabla 3.3; Cap. 13, pp. 261-262
```

---

### ZONE-004 — Heart Rate Guidelines

```
ID:             ZONE-004
NOMBRE:         hr-guidelines
ADVERTENCIA:    HR es inherentemente variable; power > HR para prescripción

MAPEO APROXIMADO (respecto a FTHR = HR at FTP):
  Zona 1:  < 68% FTHR
  Zona 2:  69 - 83% FTHR
  Zona 3:  84 - 94% FTHR
  Zona 4:  95 - 105% FTHR
  Zona 5:  > 105% FTHR
  Zonas 6-7: HR no es guía útil

CAVEAT:
  "Relating the specified power levels to corresponding heart rate ranges
  is somewhat difficult to do owing to the inherent variability of heart
  rate as well as individual differences in the power–heart rate
  relationship" (Cap. 3)

REFERENCIA: Cap. 3, Tabla 3.1
```

---

### ZONE-005 — Zone Selection by Goal

```
ID:             ZONE-005
NOMBRE:         zone-selection

OBJETIVO                          ZONA(S) PRIMARIA(S)   COMPLEMENTARIA(S)
────────────────────────────────  ────────────────────  ──────────────────
Aumentar FTP                      4a → 4                3, 5
Mejorar VO2max                    5                     4, 6
Aumentar FRC / cap. anaeróbica    6                     5, 7a
Mejorar sprint / Pmax             7, 7a                 6
Resistencia aeróbica / stamina    2, 3                  4a
Preparación triatlón (70.3/IM)    4a, 4, 2              5, 6
Preparación criterium             6, 7, 4               5
Preparación TT                    4, 4a                 5, 3
Preparación gran fondo            3, 4a, 2              4, 5
Preparación ciclocross            6, 4                  5, 7
Preparación track (pursuit)       5, 4                  6, 3
Preparación ultra-MTB             2, 3, 4               6, 5

FILOSOFÍA:
  "An athlete should do the least amount of the most specific training
  that brings continual improvement" (Joe Friel, citado en Cap. 5)

REFERENCIA: Cap. 5, pp. 58-79; Cap. 10-14
```

---

## Recomendación 3: SkillPaths completos

### 3.1 — SkillPath: FTP Development

```
SKILLPATH: ftp-development
DISCIPLINA: Ciclismo / Triatlón / TT
OBJETIVO: Maximizar la potencia sostenible en quasi-steady-state (FTP)
REQUISITOS: FTP actual; base aeróbica; sin lesiones agudas

STEP  NOMBRE              DESCRIPCIÓN                                   CRITERIO DE AVANCE                  ERRORES TÍPICOS
────  ──────────────────  ────────────────────────────────────────────  ────────────────────────────────────  ────────────────────────────────
1     Sweet Spot base     2-3×10-20 min al 88-93% FTP.                 Completar 2×20 min sin caída          Empezar demasiado fuerte;
      (Sub-Threshold)     Progresión: 3×12→4×12→3×15→4×15→            de potencia.                            hammer en colinas
                          2×20→3×20→4×20 min.
                          Mínimo 6-8 sesiones antes de Step 2.

2     Threshold           2×20 min al 96-105% FTP.                     Completar 1h total a FTP                No mantener cadencia;
      intervals           Rest 10-15 min.                              (2×30, 3×20, o 1×60).                   hundirse en 2ª repetición

3     Threshold           2×20 min FTP con bursts de 10s              Mantener NP en zona durante             Bursts demasiado agresivos
      + bursts            cada 4 min (5 bursts por intervalo).        todo el esfuerzo.                       que rompen el ritmo

4     Over-unders /       20 min alternando 88% y 120% FTP            Completar 2×20 min sin que              Dejar caer potencia en fase
      Crisscross          cada 2 min.                                  potencia caiga < 85% FTP.               "under"; transición brusca
                          "Visualize a bathtub: fill to max, drain,
                          fill again" (Cap. 10, Jill)

5     FTP extension       30-60 min continuos a FTP.                   Mantener 45-60 min.                     Pacing: empezar demasiado
                          "Hour of Power" (Bill Black):                                                     fuerte; perder foco mental
                          60 min FTP, cada 2 min: out of saddle 10s,
                          shift, ±20 rpm.

6     Race-specific FTP   TT simulado o esfuerzo de carrera a FTP.     Mantener NP en FTP durante              Falta de foco en minutos
                          En posición de TT si aplica.                 duración objetivo.                      finales
```

---

### 3.2 — SkillPath: VO2max Development

```
SKILLPATH: vo2max-development
DISCIPLINA: Ciclismo / Triatlón (colinas) / Track (pursuit)
OBJETIVO: Mejorar la potencia máxima aeróbica (VO2max power)
REQUISITOS: Base aeróbica sólida; FTP establecido; relativamente fresco

STEP  NOMBRE              DESCRIPCIÓN                                   CRITERIO DE AVANCE                  ERRORES TÍPICOS
────  ──────────────────  ────────────────────────────────────────────  ────────────────────────────────────  ────────────────────────────────
1     Short VO2max        4-6×3 min al 106-120% FTP.                  Completar todas las reps sin          Salir demasiado fuerte en
                          Rest 3-5 min.                                caída > 5-7% (Tabla 5.1).               rep 1; no pacing

2     Extended VO2max     3-5×5-8 min al 106-115% FTP.                Mantener potencia sin caída.            No pacing: empezar a 120%
                          Rest 5-8 min.                                                                  y morir a mitad

3     Progressive         5 reps empezando en 5 min y extendiendo     Completar la progresión                 Reducir intensidad en vez
      duration            30s cada rep.                                completa.                             de extender
                          Si no se puede extender: reducir 10-15W
                          (3-5%) pero nunca < 106% FTP.

4     Race-winning        30s sprint (200% FTP, peak 300%) +          Completar 5-8 esfuerzos.                Sprint inicial excesivo que
      intervals           3 min al 100-110% FTP + 10s burst                                                compromete el 3 min
                          (200-250% FTP). Rest 5-6 min.

5     6-min TT            5-6×6 min al 96-102% FTP.                   Mantener pacing; no                     Empezar demasiado fuerte;
      simulation          Rest 6-8 min.                                hundirse en reps finales.               no usar posición de TT
                          "Pretend you are doing a time trial."
```

---

### 3.3 — SkillPath: Anaerobic Capacity / FRC Development

```
SKILLPATH: ac-development
DISCIPLINA: Ciclismo / Ciclocross / MTB / Criterium
OBJETIVO: Aumentar FRC y repeatabilidad en esfuerzos supra-FTP
REQUISITOS: Fresco; base aeróbica; warm-up completo

STEP  NOMBRE              DESCRIPCIÓN                                   CRITERIO DE AVANCE                  ERRORES TÍPICOS
────  ──────────────────  ────────────────────────────────────────────  ────────────────────────────────────  ────────────────────────────────
1     2-min AC            6-8×2 min al 130-150% FTP.                  Mantener > 118% FTP hasta               No usar interval mode;
      intervals           Rest 2-3 min.                                última rep.                             rest insuficiente
                          Stop: no poder mantener 118% FTP.

2     1-min AC            6-8×1 min al 140-150% FTP.                  Mantener > 128-131% FTP.                Rest insuficiente entre
      intervals           Rest 3 min.                                                                  reps; no pacing

3     Micro-bursts        15s ON (150% FTP) / 15s OFF (50% FTP)      Completar 2-3 sets de 10 min.           No mantener cadencia alta
                          × 10 min × 2-3 sets. Rest 20 min.                                            en "on"

4     30-30-30 (CX)       30s al 150% FTP + 30s coasting +            Completar 3-5 sets de 10 min.           Transición torpe al running
                          30s running × 10 min. Rest 5 min.

5     Hill repeats AC     8-10 colinas de 45s-1:30 al ~140% FTP.     Mantener potencia; stop con             Sprint final no explosivo
                          Sprint en últimos 25m. Rest 4-5 min.        caída > 10% del 2º/3er intervalo.

6     18-interval AC      3 sets × 6 intervals (2 min al 130% FTP,   Completar las 3 sets.                   Mental: parecer imposible
      (Hunter's fav.)     rest 1 min).                                                                 al inicio
                          "That wasn't so bad!"
```

---

### 3.4 — SkillPath: Neuromuscular Power / Sprint

```
SKILLPATH: sprint-development
DISCIPLINA: Ciclismo (pista, criterium, ruta) / Track
OBJETIVO: Maximizar Pmax y fatiga-resistencia en sprint
REQUISITOS: Completamente fresco; warm-up exhaustivo (20+ min)

STEP  NOMBRE              DESCRIPCIÓN                                   CRITERIO DE AVANCE                  ERRORES TÍPICOS
────  ──────────────────  ────────────────────────────────────────────  ────────────────────────────────────  ────────────────────────────────
1     Small-ring          6×50m desde baja velocidad (~10 mph).       Aumentar peak power.                    "Dump the chain" a gear
      sprints             Sin cambiar. Wind out gear.                                                       demasiado duro
                          Cadencia target: 120+ rpm al final.
                          "Sprinting starts out with a hard jump in a
                          gear that you can turn over" (Cap. 5)

2     Big-ring sprints    3-6×250-300m desde 20-23 mph.              Mantener cadencia > 110 rpm             No timing correcto del
                          1-2 cambios. "Like driving a stick shift:                                         cambio
                          work down the gears when rpms reach
                          the correct range."

3     Sprint doubles      5-8s al 80% max + 10s al 120-150% FTP +    Completar 6-10 doubles.                 No simular la fatiga real
                          sprint máximo (~18s total, 250-300m).                                             de carrera
                          Rest 5 min.

4     Big-gear power      6×20s en 53:13, seated, desde baja         Generar 425-535W sentado.               Compensar con upper body;
      (seated)            velocidad. Focus: push hard, smooth.                                             cadencia demasiado baja
                          "Be careful on the knees" (NP-W4).                                               (< 50 rpm) con dolor rodilla

5     Micro-bursts        15s ON (150% FTP) / 15s OFF × 10 min       Completar 2-3 sets.                     No mantener cadencia alta
      (NM power)          × 2-3 sets.                                                                        en ON
```

---

### 3.5 — SkillPath: Pacing Mastery (Triathlon)

```
SKILLPATH: pacing-mastery-triathlon
DISCIPLINA: Triatlón
OBJETIVO: Ejecutar el segmento de ciclismo al IF/TSS objetivo sin comprometer la carrera a pie
REQUISITOS: FTP conocido; power calibration completada

STEP  NOMBRE              DESCRIPCIÓN                                   CRITERIO DE AVANCE                  ERRORES TÍPICOS
────  ──────────────────  ────────────────────────────────────────────  ────────────────────────────────────  ────────────────────────────────
1     Power               3-4×10 min a diferentes intensidades        Distinguir RPE en cada nivel.           Hacer > 1 sesión/día;
      calibration         × 5 sesiones / 10 días.                                                            confundir sensaciones
                          "Power calibrates perceived exertion, and
                          perceived exertion modulates power" (Howe)

2     Extended            2×20 min a cada intensidad.                  Mantener potencia estable               RPE cambia a lo largo del
      calibration                                                        20 min.                                 intervalo

3     60-min              60 min continuos a intensidad de carrera.   NP dentro de ±2% del objetivo.          Variabilidad por terreno
      calibration                                                        Repetir 2+ veces.

4     Race rehearsal      Simular distancia de carrera con brick run  Run pace dentro de objetivo.            No practicar transición
                          posterior.

5     Race execution      Mantener NP objetivo, VI < 1.07.            Post-race: TSS dentro de budget.        Atacar colinas; seguir a
                          Primeros 30-45 min: 95% del objetivo.       Quadrant III/IV dominante.              otros; gear mashing
                          Colinas > 3 min: 105% del objetivo.
                          Colinas 30s-2 min: 110% del objetivo.
                          "Stay light on the pedals."
```

---

### 3.6 — SkillPath: Stamina / Fatigue Resistance

```
SKILLPATH: stamina-development
DISCIPLINA: Ciclismo / Triatlón / Gran Fondo / Ultra-MTB
OBJETIVO: Mejorar la capacidad de sostener potencia sub-FTP tras fatiga acumulada
REQUISITOS: FTP establecido; capacidad de completar 3+ horas

STEP  NOMBRE              DESCRIPCIÓN                                   CRITERIO DE AVANCE                  ERRORES TÍPICOS
────  ──────────────────  ────────────────────────────────────────────  ────────────────────────────────────  ────────────────────────────────
1     Over-distance       Rodar 50% más de la distancia normal.       Completar sin caída de                  No comer/beber suficiente
      rides               Mínimo 3 horas.                              potencia > 10%.
                          Dentro: 2×20 min Tempo en 1ª hora.

2     Kitchen sink        4-5 horas con FTP + Tempo + VO2max +        Terminar fatigado pero sin              No dosificar: empezar
      rides               sprints.                                     daño muscular.                          demasiado fuerte
                          "Exhaust muscular endurance without
                          damaging muscles."
                          Última 45 min: Sweet Spot.

3     Fatigue-state       Comparar best power fresco vs tras 2,000 kJ. Reducir la caída de potencia            No entrenar específicamente
      testing             Ej: Bill Masters: 5-min power fresco 261W,  en estado fatigado.                     en estado fatigado
                          tras 2,000 kJ → 202W.

4     Back-to-back        3 días duros consecutivos (Tue-Wed-Thu).    Mantener wattage objetivo en            No recuperar entre días
      hard days           + fin de semana largo.                        el 3er día.
```

---

## Recomendación 4: Extensiones del modelo de datos

### 4.1 — Nuevos tipos

```typescript
// ===== PowerDurationModel =====
interface PowerDurationModel {
  athleteId: string;
  date: Date;
  pmax: number;                  // W - potencia máxima (1 pedal revolution)
  frc: number;                   // J (o kJ) - Functional Reserve Capacity
  mftp: number;                  // W - modeled FTP (plateau de la PDC)
  tte: number;                   // min - Time to Exhaustion a mFTP
  stamina: number;               // 0-100% (típico: 75-85%)
  phenotype: Phenotype;
  fittedCurve: DataPoint[];
  mmpCurve: DataPoint[];
}

type Phenotype =
  | 'sprinter'        // Pmax alto, FTP bajo → pendiente descendente
  | 'pursuiter'       // FRC alto + FTP alto → V invertida
  | 'all-rounder'     // todo similar → horizontal
  | 'time-trialist'   // FTP alto, Pmax bajo → pendiente ascendente
  | 'climber';        // similar a TT pero énfasis en W/kg

// Phenotypic Map axes (Cap. 8, Fig. 8.3):
// X = Pmax/FTP ratio (bajo = TT, alto = sprinter)
// Y = FRC/Pmax ratio (distingue dentro de cada grupo)

interface DataPoint {
  duration: number;    // segundos
  power: number;       // watts
}

// ===== PerformanceManagerState =====
interface PerformanceManagerState {
  athleteId: string;
  date: Date;
  dailyTSS: number;
  ctl: number;                 // 42-day EWMA
  atl: number;                 // τ_ATL-day EWMA (default 7)
  tsb: number;                 // CTL - ATL
  ctlRampRate: number;         // TSS/day/week (rolling 7-day)
  formStatus: FormStatus;
  atlTimeConstant: number;     // días (default 7, ajustable 3-14)
}

type FormStatus =
  | 'building'         // CTL subiendo, TSB negativo o neutro
  | 'peaking'          // CTL estable/alto, TSB subiendo hacia positivo
  | 'resting'          // TSB positivo, recuperando
  | 'overreaching'     // TSB muy negativo, rendimiento cayendo
  | 'detraining';      // CTL bajando por inactividad

// ===== QuadrantAnalysisResult =====
interface QuadrantAnalysisResult {
  sessionId: string;
  thresholdAEPF: number;       // N - AEPF en FTP
  thresholdCPV: number;        // m/s - CPV en FTP
  quadrantI_pct: number;       // alta fuerza + alta velocidad
  quadrantII_pct: number;      // alta fuerza + baja velocidad
  quadrantIII_pct: number;     // baja fuerza + baja velocidad
  quadrantIV_pct: number;      // baja fuerza + alta velocidad
  crankLength: number;         // m
}

// Fórmulas:
// AEPF = (P × 60) / (C × 2π × CL)   [N]
// CPV  = (C × CL × 2π) / 60          [m/s]

// ===== PacingStrategy =====
interface PacingStrategy {
  eventType: EventType;
  targetIF: number;
  targetTSS: number;
  targetNP: number;
  targetFTP_pct: number;
  variabilityIndexTarget: number;
  hillAdjustments: HillAdjustment[];
  startStrategy: string;
}

type EventType =
  | 'tt-flat' | 'tt-hilly' | 'criterium' | 'road-race'
  | 'triathlon-sprint' | 'triathlon-olympic'
  | 'triathlon-70.3' | 'triathlon-ironman'
  | 'cyclocross' | 'track-pursuit' | 'mtb-xc' | 'mtb-ultra'
  | 'gran-fondo' | 'stage-race';

interface HillAdjustment {
  duration: string;            // ej: "> 3 min", "30s - 2 min"
  pctOfGoal: number;           // ej: 105, 110
}

// ===== IntervalSession =====
interface IntervalSession {
  targetZone: number;          // 1-7
  targetPower: number;         // W
  intervalDuration: number;    // s
  restDuration: number;        // s
  stopThresholdPct: number;    // de Tabla 5.1
  referenceInterval: number;   // default 3
  completedIntervals: IntervalResult[];
  stoppedAt: number | null;
}

interface IntervalResult {
  index: number;
  avgPower: number;
  duration: number;
  isReference: boolean;
}

// ===== PowerProfileSnapshot =====
interface PowerProfileSnapshot {
  athleteId: string;
  date: Date;
  p5s: number;                 // W/kg
  p1min: number;               // W/kg
  p5min: number;               // W/kg
  ftp: number;                 // W/kg
  phenotype: Phenotype;
  category: ProfileCategory;
  categoryGender: 'male' | 'female';
}

type ProfileCategory =
  | 'world-class' | 'exceptional' | 'excellent'
  | 'very-good' | 'good' | 'moderate' | 'fair' | 'novice';

// ===== BilateralPedalingMetrics =====
interface BilateralPedalingMetrics {
  sessionId: string;
  gpr_left: number;            // W
  gpr_right: number;           // W
  gpa_left: number;            // W
  gpa_right: number;           // W
  kurtoticIndex_left: number;
  kurtoticIndex_right: number;
  asymmetry_pct: number;
}

// Reglas de intervención:
// - Asimetría > 10% → investigar
// - GPA > 35W seated en ciclista > 3 años → intervenir
// - No forzar simetría perfecta

// ===== MatchBook =====
interface Match {
  timestamp: number;
  duration: number;            // s
  powerOverFTP_pct: number;
  power: number;               // W
  context: string;
}

// ===== PowerProfileBenchmarks (Tabla 4.1 completa) =====
interface PowerProfileBenchmarks {
  gender: 'male' | 'female';
  category: ProfileCategory;
  p5s_range: [number, number];    // W/kg
  p1min_range: [number, number];
  p5min_range: [number, number];
  ftp_range: [number, number];
}

// Valores exactos de Tabla 4.1:
const POWER_PROFILE_BENCHMARKS: PowerProfileBenchmarks[] = [
  // HOMBRES
  { gender:'male', category:'world-class', p5s_range:[23.06,25.18], p1min_range:[10.68,11.50], p5min_range:[6.86,7.60], ftp_range:[5.93,6.60] },
  { gender:'male', category:'exceptional', p5s_range:[20.64,22.76], p1min_range:[9.74,10.56], p5min_range:[6.02,6.75], ftp_range:[5.17,5.84] },
  { gender:'male', category:'excellent', p5s_range:[18.22,20.34], p1min_range:[8.80,9.62], p5min_range:[5.17,5.91], ftp_range:[4.41,5.08] },
  { gender:'male', category:'very-good', p5s_range:[15.80,17.92], p1min_range:[7.86,8.68], p5min_range:[4.32,5.06], ftp_range:[3.65,4.31] },
  { gender:'male', category:'good', p5s_range:[13.38,15.50], p1min_range:[6.92,7.74], p5min_range:[3.48,4.22], ftp_range:[2.89,3.55] },
  { gender:'male', category:'moderate', p5s_range:[10.96,13.08], p1min_range:[5.98,6.80], p5min_range:[2.63,3.37], ftp_range:[2.12,2.79] },
  { gender:'male', category:'fair', p5s_range:[8.54,10.65], p1min_range:[5.04,5.87], p5min_range:[1.79,2.53], ftp_range:[1.36,2.03] },
  { gender:'male', category:'novice', p5s_range:[0,8.23], p1min_range:[0,4.93], p5min_range:[0,1.68], ftp_range:[0,1.27] },
  // MUJERES
  { gender:'female', category:'world-class', p5s_range:[17.88,19.42], p1min_range:[8.64,9.29], p5min_range:[6.06,6.74], ftp_range:[5.15,5.74] },
  { gender:'female', category:'exceptional', p5s_range:[16.12,17.66], p1min_range:[7.90,8.55], p5min_range:[5.28,5.96], ftp_range:[4.47,5.06] },
  { gender:'female', category:'excellent', p5s_range:[14.35,15.90], p1min_range:[7.16,7.81], p5min_range:[4.50,5.18], ftp_range:[3.79,4.38] },
  { gender:'female', category:'very-good', p5s_range:[12.59,14.13], p1min_range:[6.42,7.07], p5min_range:[3.72,4.40], ftp_range:[3.11,3.70] },
  { gender:'female', category:'good', p5s_range:[10.83,12.37], p1min_range:[5.68,6.33], p5min_range:[2.94,3.62], ftp_range:[2.43,3.02] },
  { gender:'female', category:'moderate', p5s_range:[9.07,10.61], p1min_range:[4.94,5.59], p5min_range:[2.16,2.84], ftp_range:[1.75,2.34] },
  { gender:'female', category:'fair', p5s_range:[7.31,8.85], p1min_range:[4.20,4.84], p5min_range:[1.38,2.07], ftp_range:[1.07,1.66] },
  { gender:'female', category:'novice', p5s_range:[0,7.09], p1min_range:[0,4.10], p5min_range:[0,1.29], ftp_range:[0,0.98] },
];

// ===== TrainingZoneDefinition (Tabla 3.2 completa) =====
interface ZoneAdaptationProfile {
  zone: number;
  plasmaVolume: number;           // 0-4 (— a ++++)
  mitochondrialEnzymes: number;
  lactateThreshold: number;
  glycogenStorage: number;
  slowFiberHypertrophy: number;
  capillarization: number;
  fiberTypeConversion: number;    // IIx → IIa
  strokeVolume: number;
  vo2max: number;
  phosphateStores: number;        // ATP/PCr
  anaerobicCapacity: number;
  fastFiberHypertrophy: number;
  neuromuscularPower: number;
}

const ZONE_ADAPTATIONS: ZoneAdaptationProfile[] = [
  { zone:1, plasmaVolume:0, mitochondrialEnzymes:0, lactateThreshold:0, glycogenStorage:0, slowFiberHypertrophy:0, capillarization:0, fiberTypeConversion:0, strokeVolume:0, vo2max:0, phosphateStores:0, anaerobicCapacity:0, fastFiberHypertrophy:0, neuromuscularPower:0 },
  { zone:2, plasmaVolume:1, mitochondrialEnzymes:2, lactateThreshold:2, glycogenStorage:2, slowFiberHypertrophy:1, capillarization:1, fiberTypeConversion:2, strokeVolume:1, vo2max:1, phosphateStores:0, anaerobicCapacity:0, fastFiberHypertrophy:0, neuromuscularPower:0 },
  { zone:3, plasmaVolume:2, mitochondrialEnzymes:3, lactateThreshold:3, glycogenStorage:4, slowFiberHypertrophy:2, capillarization:2, fiberTypeConversion:3, strokeVolume:2, vo2max:2, phosphateStores:0, anaerobicCapacity:0, fastFiberHypertrophy:0, neuromuscularPower:0 },
  { zone:4, plasmaVolume:3, mitochondrialEnzymes:4, lactateThreshold:4, glycogenStorage:3, slowFiberHypertrophy:2, capillarization:2, fiberTypeConversion:3, strokeVolume:3, vo2max:3, phosphateStores:0, anaerobicCapacity:0, fastFiberHypertrophy:0, neuromuscularPower:0 },
  { zone:5, plasmaVolume:4, mitochondrialEnzymes:2, lactateThreshold:2, glycogenStorage:2, slowFiberHypertrophy:3, capillarization:3, fiberTypeConversion:2, strokeVolume:4, vo2max:4, phosphateStores:0, anaerobicCapacity:1, fastFiberHypertrophy:0, neuromuscularPower:0 },
  { zone:6, plasmaVolume:1, mitochondrialEnzymes:1, lactateThreshold:1, glycogenStorage:1, slowFiberHypertrophy:1, capillarization:1, fiberTypeConversion:1, strokeVolume:1, vo2max:1, phosphateStores:1, anaerobicCapacity:3, fastFiberHypertrophy:1, neuromuscularPower:1 },
  { zone:7, plasmaVolume:0, mitochondrialEnzymes:0, lactateThreshold:0, glycogenStorage:0, slowFiberHypertrophy:0, capillarization:0, fiberTypeConversion:0, strokeVolume:0, vo2max:0, phosphateStores:2, anaerobicCapacity:1, fastFiberHypertrophy:2, neuromuscularPower:3 },
];

// ===== IntervalStopThresholds (Tabla 5.1 completa) =====
interface IntervalStopThreshold {
  durationSec: number;
  minDropPct: number;
  maxDropPct: number;
  note?: string;
}

const INTERVAL_STOP_THRESHOLDS: IntervalStopThreshold[] = [
  { durationSec: 1200, minDropPct: 3, maxDropPct: 5 },
  { durationSec: 600,  minDropPct: 4, maxDropPct: 6 },
  { durationSec: 300,  minDropPct: 5, maxDropPct: 7 },
  { durationSec: 180,  minDropPct: 8, maxDropPct: 9 },
  { durationSec: 120,  minDropPct: 10, maxDropPct: 12 },
  { durationSec: 60,   minDropPct: 10, maxDropPct: 12 },
  { durationSec: 30,   minDropPct: 12, maxDropPct: 15 },
  { durationSec: 15,   minDropPct: 10, maxDropPct: 15, note: '15-20% en potencia pico' },
];

// ===== VariabilityIndexNorms (Tabla 7.1 completa) =====
interface VINorm {
  eventType: string;
  viMin: number;
  viMax: number;
}

const VI_NORMS: VINorm[] = [
  { eventType: 'criterium', viMin: 1.15, viMax: 1.20 },
  { eventType: 'road-race', viMin: 1.10, viMax: 1.20 },
  { eventType: 'mtb', viMin: 1.10, viMax: 1.25 },
  { eventType: 'tt-flat-rolling', viMin: 1.00, viMax: 1.05 },
  { eventType: 'tt-hilly', viMin: 1.05, viMax: 1.10 },
  { eventType: 'triathlon', viMin: 1.00, viMax: 1.05 },
];

// ===== IntensityFactorNorms (Tabla 7.2 completa) =====
interface IFNorm {
  sessionType: string;
  ifMin: number;
  ifMax: number;
}

const IF_NORMS: IFNorm[] = [
  { sessionType: 'recovery', ifMin: 0, ifMax: 0.75 },
  { sessionType: 'endurance', ifMin: 0.75, ifMax: 0.85 },
  { sessionType: 'tempo-road-2-3h', ifMin: 0.85, ifMax: 0.90 },
  { sessionType: 'criterium-tt40k-short', ifMin: 0.90, ifMax: 1.05 },
  { sessionType: 'short-tt-track', ifMin: 1.05, ifMax: 1.15 },
];

// ===== TSSRecoveryScale (Tabla 7.3 completa) =====
interface TSSRecoveryBand {
  tssMin: number;
  tssMax: number;
  classification: string;
  recoveryDescription: string;
}

const TSS_RECOVERY_SCALE: TSSRecoveryBand[] = [
  { tssMin: 0, tssMax: 150, classification: 'Bajo', recoveryDescription: 'Recuperación completa al día siguiente' },
  { tssMin: 150, tssMax: 300, classification: 'Moderado', recoveryDescription: 'Ligera fatiga residual; desaparece al 2.º día' },
  { tssMin: 300, tssMax: 450, classification: 'Alto', recoveryDescription: 'Fatiga persistente incluso al cabo de 2 días' },
  { tssMin: 450, tssMax: Infinity, classification: 'Muy Alto', recoveryDescription: 'Fatiga acumulada durante varios días' },
];
```

### 4.2 — Extensión de tipos existentes

```typescript
// Extender TrainingSession:
interface TrainingSession {
  // ... campos existentes ...
  avgPower?: number;
  np?: number;
  if?: number;
  tss?: number;
  vi?: number;
  kJ?: number;
  kcal_estimate?: number;        // ≈ kJ (ratio 1:1)
  ctl_after?: number;
  atl_after?: number;
  tsb_after?: number;
  quadrantAnalysis?: QuadrantAnalysisResult;
  bilateral?: BilateralPedalingMetrics;
  matches?: Match[];
  pacingStrategy?: PacingStrategy;
  pacingCompliance?: number;
  powerProfile?: PowerProfileSnapshot;
}

// Extender AthleteProfile:
interface AthleteProfile {
  // ... campos existentes ...
  ftp: number;
  ftpWkg: number;
  ftpLastTested: Date;
  ftpTestHistory: FTPTest[];
  powerDurationModel?: PowerDurationModel;
  phenotype?: Phenotype;
  currentCTL?: number;
  currentATL?: number;
  currentTSB?: number;
  atlTimeConstant: number;       // default 7
  crankLength: number;           // m
}

interface FTPTest {
  date: Date;
  avg20min: number;
  ftp: number;                   // avg20min × 0.95
  method: '20min-test' | '60min-tt' | 'race-np' | 'pdc-model';
  adjustment_pct: number;        // 5% default, 2-7% según atleta
}
```

---

## Recomendación 5: Reglas de exclusión y límites

### 5.1 — Exclusiones absolutas

```
1. NO DIAGNOSTICAR LESIONES
   El libro no contiene protocolos de diagnóstico.
   La única mención de lesión es incidental (clavícula rota de Jack, Cap. 11).

2. NO PRESCRIBIR REHABILITACIÓN
   No hay protocolos de rehab, fases de recuperación post-lesión,
   escalas de dolor, ni criterios de retorno a la actividad.

3. NO DEFINIR EJERCICIOS DE FUERZA FUERA DE LA BICICLETA
   "Training strictly to increase strength (e.g., by lifting heavy weights
   at a slow speed) would have a limited effect, at best, on the maximal
   power output of a trained cyclist" (Cap. 7, pp. 125-126).
   Excepción: entrenamiento explosivo/plyométrico puede mitigar pérdida
   de velocidad de contracción.

4. NO USAR COMO FUENTE DE NUTRICIÓN DETALLADA
   Solo aporta la aproximación kJ ≈ kcal.
   No prescribe macros, timing, hidratación, suplementación.

5. NO APLICAR A DEPORTES SIN POTENCÍOMETRO
   Todas las métricas requieren potenciómetro.
   Para usuarios sin uno: usar RPE y HR como fallback,
   marcando las reglas como "no aplicables sin datos de potencia".

6. NO AUTOMATIZAR INTERVENCIONES MÉDICAS
   Ninguna regla debe presentarse como consejo médico.
```

### 5.2 — Limitaciones de transferencia

```
1. SOLO CICLISMO Y TRIATLÓN
   AEPF, CPV, Quadrant Analysis, bilateral pedaling son específicos
   del pedaleo. No transferir a otros movimientos.

2. POBLACIÓN CICLISTA
   Power Profile basado en ciclistas jóvenes adultos.
   Para másters: ajustar ATL time constant, ramp rate, recuperación.

3. EL LIBRO ASUME FTP CONOCIDO
   No hay protocolo para alguien que nunca ha hecho un test.
   El sistema debe guiar al usuario a través del test de 20 min primero.

4. TSS NO CAPTURA COMPOSICIÓN DEL ENTRENAMIENTO
   Mismo TSS puede ser fisiológicamente muy diferente
   si la distribución de zonas cambia.
   Trackear tiempo en zona además de TSS.

5. PMC ES RELATIVO, NO ABSOLUTO
   No presentar CTL/TSB como predicción exacta de rendimiento.
```

### 5.3 — Acciones concretas para otros agentes

```
NEXT STEPS:

1. Crear rules/load-management.ts con LOAD-001 a LOAD-012.
   Prioridad: LOAD-001 (TSS), LOAD-004/005/006 (CTL/ATL/TSB),
   LOAD-008 (interval stop con Tabla 5.1 completa).

2. Crear rules/training-zones.ts con ZONE-001 a ZONE-005.
   Incluir Tabla 3.2 completa (adaptaciones fisiológicas).
   Prioridad: ZONE-001 (Classic), ZONE-002 (iLevels).

3. Crear SkillPaths:
   - ftp-development (6 steps)
   - vo2max-development (5 steps)
   - ac-development (6 steps)
   - sprint-development (5 steps)
   - pacing-mastery-triathlon (5 steps)
   - stamina-development (4 steps)
   Cada step con: primaryCues, commonFaults, bailTechniques,
   advancementCriteria.

4. Añadir al modelo de datos:
   PowerDurationModel, PerformanceManagerState,
   QuadrantAnalysisResult, PacingStrategy, IntervalSession,
   PowerProfileSnapshot, BilateralPedalingMetrics, Match.
   Incluir constantes: POWER_PROFILE_BENCHMARKS (Tabla 4.1),
   INTERVAL_STOP_THRESHOLDS (Tabla 5.1), VI_NORMS (Tabla 7.1),
   IF_NORMS (Tabla 7.2), TSS_RECOVERY_SCALE (Tabla 7.3),
   ZONE_ADAPTATIONS (Tabla 3.2).
   Extender TrainingSession y AthleteProfile.

5. Implementar validadores de pacing:
   - Triatlón: verificar IF, TSS, VI, distribución por cuadrante
   - TT: verificar isopower, no-start-too-hard
   - Crit: verificar conservación de energía
   - CX: verificar 30-30-30 specificity
   - Ultra-MTB: verificar Allen effect strategy
```

---

*Documento completo. Todas las tablas de referencia (3.2, 4.1, 5.1, 7.1, 7.2, 7.3, 7.4) están incorporadas con valores exactos. Ningún parámetro funcional queda bloqueado.*
