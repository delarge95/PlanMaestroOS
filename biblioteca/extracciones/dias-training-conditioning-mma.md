# dias-training-conditioning-mma — Extracción recuperada de chat

> **sourceId:** `dias-training-conditioning-mma` · **origen:** `chat-export-1787415002315` (Extracción de Reglas para Plan Maestro OS) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Training and Conditioning for MMA: Programming of Champions — Extracción para Plan Maestro OS

> Documento de extracción sistemática del libro de Dias, Oliveira, Brauer Júnior y Pashkin (Human Kinetics, 2023). Todo el contenido está parafraseado; no se reproduce texto literal extenso. Las referencias se indican como capítulo y página. El libro describe metodologías de preparación física para peleadores de élite (American Top Team, ProSportLab-Rusia) y combina periodización clásica/rusa, diseño de programas, evaluación, nutrición, métodos de entrenamiento y prevención de lesiones.

---

## 1) Metadatos del libro

- **Título:** Training and Conditioning for MMA: Programming of Champions (edición revisada de *Teoria e prática do treinamento para MMA*, Phorte Editora, 2017).
- **Autor(es)/Editores:** Stéfane Beloni Correa Dielle Dias (PhD), Everton Bittar Oliveira (BS), André Geraldo Brauer Júnior (PhD), Pavel Vladimirovich Pashkin (MS). Numerosos colaboradores (médicos, fisioterapeutas, coaches de ATT).
- **Año:** 2023 (Human Kinetics).
- **Disciplina principal:** Fuerza y acondicionamiento (S&C) para deportes de combate / periodización del entrenamiento; secundario: evaluación física, nutrición deportiva, prevención de lesiones.
- **Enfoque poblacional:** Atletas profesionales y amateur de MMA y otras artes marciales (BJJ, judo, wrestling, Muay Thai, boxeo); incluye secciones para mujeres, jóvenes y atletas adaptados. Los protocolos provienen mayormente de élite (UFC, Bellator, ONE, ADCC).
- **Notas de alcance:**
  - **Cubre:** principios de sobrecarga y periodización (clásica, en bloques y adaptada ATT), construcción de macro/meso/microciclos, diseño de programas de fuerza/hipertrofia/potencia/potencia-resistencia/velocidad/agilidad, HIIT, concepto ruso de Seluyanov (hiperplasia de miofibrilas, Isoton, mitocondrias, corazón, método sprint), batería completa de tests de laboratorio y campo con normas, nutrición y ayudas ergogénicas, gran biblioteca de ejercicios con programación semanal (4 semanas), prevención de lesiones por zona y ciencia del estiramiento.
  - **NO cubre (explícita o de facto):** técnica detallada de artes marciales (solo referencias), protocolos clínicos de rehabilitación post-lesión (solo notas de retorno y prevención), farmacología (menciona dopaje solo como advertencia), población clínica/sedentaria (los métodos intensos llevan advertencias de salud).

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `LoadComponents` (sugerido nuevo):
  - Descripción: descomposición de la carga externa en intensidad, volumen y densidad, más la carga interna (respuesta fisiológica/subjetiva).
  - Campos sugeridos: `externalLoad {intensity, volume, density}`, `internalLoad {rpe, hrResponse, lactate, fatigueSigns}`.
  - Refs: Cap. 1 pp. 4–10.

- `RestIntervalType`:
  - Descripción: clasificación del descanso entre series y entre sesiones.
  - Valores: entre series → `ordinary` (recuperación completa, 3–8 min para fuerza/velocidad/potencia), `tense/forced` (recuperación incompleta, ratios trabajo:descanso); entre sesiones → `ordinary`, `strict`, `supercompensatory`.
  - Refs: Cap. 1 pp. 6–8.

- `SessionRPERecord`:
  - Descripción: carga interna de sesión = RPE (0–10) × duración en minutos, en unidades arbitrarias; medido 30 min después de terminar la sesión.
  - Refs: Cap. 1 pp. 9–10.

- `PeriodizationModel` / `MesocycleType` / `MicrocycleType`:
  - Descripción: modelos clásico vs bloques (acumulación–transmutación–realización); mesociclos: incorporación, desarrollo, estabilización, control, recuperación, precompetitivo, competitivo; microciclos con bandas de carga porcentual (ver reglas en §3).
  - Refs: Cap. 1 pp. 14–25.

- `MuscleFiberTarget`:
  - Descripción: objetivo de fibra — `oxidative` (tipo I), `intermediate` (IIa), `glycolytic` (IIx). Muchos métodos del libro se prescriben por tipo de fibra.
  - Refs: Cap. 2 pp. 51–67; Cap. 5 pp. 336–350.

- `TrainingIntentType`:
  - Descripción: `development` (estímulo de capacidad) vs `tonus/maintenance` (mantener). El libro dosifica sets y frecuencia semanal según intent.
  - Refs: Cap. 5 pp. 343–350.

- `IsotonProtocol` (static-dynamic):
  - Descripción: tensión muscular constante, ROM parcial sin relajar, intensidad 30–60% 1RM, superseries 30 s trabajo/30 s pausa.
  - Refs: Cap. 2 pp. 57–59; Cap. 5 pp. 330–336.

- `AssessmentBatteryStage`:
  - Descripción: `diagnostic` (inicio), `formative` (continua, ideal diaria), `summative` (pre-competición, contra benchmarks).
  - Refs: Cap. 3 pp. 74–75.

- `ThresholdMarkers`:
  - Descripción: VT1 (umbral aeróbico), VT2/OBLA (umbral anaeróbico, ~4 mmol/L), VO2max, vVO2max y TLim, potencia aláctica máxima.
  - Refs: Cap. 3 pp. 79–86.

- `BodyCompTarget` (por fase de campamento):
  - Descripción: rangos de % grasa objetivo según momento (inicio/mitad de camp, pesaje, off-season), separado por sexo.
  - Refs: Cap. 3 p. 77.

- `ErgogenicAidProfile`:
  - Descripción: dosis, timing, duración de carga, efectos esperados, riesgos (GI, contaminación), estado antidopaje.
  - Refs: Cap. 4 pp. 121–128.

- `InjuryRiskZone` con `MechanismType`:
  - Descripción: zonas (cabeza/cara, columna, codo/muñeca/mano, hombro, cadera/muslo, rodilla, tobillo/pie) + mecanismo (`contact` vs `non-contact/overuse`).
  - Refs: Cap. 6 pp. 356–369.

- `StretchingMode`:
  - Descripción: `static`, `ballistic`, `PNF` (hold-relax / contract-relax / agonist contraction), `dynamic`; con perfil de riesgo/dolor/practicidad/eficiencia/efectividad ROM.
  - Refs: Cap. 6 pp. 370–373.

- `MovementScreenResult`:
  - Descripción: resultados de Thomas Test (iliopsoas, recto femoral, banda iliotibial) y Overhead Squat Test (rodillas hacia fuera/dentro, inclinación anterior), con ejercicios correctivos asociados.
  - Refs: Cap. 6 pp. 374–382.

### 2.2 Mapeo a tipos existentes

- `FocusId: strength / max-strength`:
  - El libro prescribe cargas 75–90% 1RM con 2–6 RM para fuerza máxima; fase AA previa obligatoria; énfasis en neural al inicio (primeras 6–8 semanas) y luego hipertrofia (Cap. 2 pp. 40–46; Cap. 5 pp. 147–151).
- `FocusId: power`:
  - Cargas 30–60% 1RM, intención explosiva, detener al perder velocidad, descansos 4–5 min, cluster sets; métodos de contraste y aceleración compensatoria (Cap. 2 pp. 46–48; Cap. 5 pp. 210–223).
- `FocusId: hypertrophy`:
  - Trata la hipertrofia como base para fuerza/potencia, con cautela por categorías de peso; discute relación fuerza-hipertrofia no lineal y volúmenes efectivos bajos para peleadores (Cap. 2 pp. 42–46).
- `FocusId: aerobic-capacity / endurance`:
  - Distingue capacidad de fibras oxidativas (VT1), potencia al umbral anaeróbico y VO2max; métodos Isoton, intervalos tipo I/II, 10×10, sprint, orientados a mitocondrias (Cap. 2 pp. 60–67; Cap. 5 pp. 336–350).
- `FocusId: power-endurance`:
  - Definida como capacidad de repetir esfuerzos a % alto de la fuerza máxima; circuitos específicos de 5–6 min simulando rounds (Cap. 5 pp. 224–229, 281–303).
- `FocusId: speed / agility`:
  - Trabajo de 5–15 s a máxima velocidad con descanso completo; 0–40% de carga; agilidad incluye cambio de dirección, maniobrabilidad y componente perceptivo-cognitivo (Cap. 5 pp. 230–238).
- `FocusId: mobility / flexibility`:
  - Flexitest (20 movimientos, escala 0–4), estiramientos estático/dinámico/PNF, Thomas Test y OHS (Cap. 3 pp. 102–107; Cap. 6 pp. 369–382).
- `FocusId: injury-prevention / prehab`:
  - Ejercicios preventivos por zona: cuello, manguito rotador, isquios (Nordic), propiocepción rodilla/tobillo, core lumbar (Cap. 6 pp. 356–369).
- `FocusId: body-composition`:
  - Targets de %BF por fase de campamento; advertencias sobre corte de peso rápido y RED-S (Cap. 3 pp. 75–79; Cap. 4 pp. 112).

- `BodyZoneId: neck`:
  - Fortalecimiento específico (aparato anteroposterior/lateral, Isoton hasta fallo local) para reducir aceleración craneal y riesgo de conmoción (Cap. 5 pp. 260–261; Cap. 6 p. 357).
- `BodyZoneId: shoulder`:
  - Lesiones por grappling (Americana/Kimura) 7.9% en pelea / 16.5% en entrenamiento; prehab con rotaciones con banda, énfasis en manguito rotador y estabilizadores escapulares; retorno tras cirugía artroscópica ~3–4 meses entrenamiento / 6 meses competición (Cap. 6 pp. 361–364).
- `BodyZoneId: elbow / wrist / hand`:
  - Segunda zona más lesionada; armbar como causa común; prevención con fortalecimiento de muñeca (kettlebell invertido, flexión/extensión con EzBar), wraps y técnica (Cap. 6 pp. 359–360).
- `BodyZoneId: lumbar / core`:
  - Dolor lumbar 6.9% de lesiones de entrenamiento; core (local/global/movement systems según NASM); ejercicios puente unilateral, crunch en Swiss ball, plank inestable (Cap. 5 pp. 186–190; Cap. 6 pp. 357–359).
- `BodyZoneId: hip / hamstring`:
  - Isquios 2.2% de lesiones; riesgo por pateo a alta velocidad y alto volumen; Nordic curl excéntrico y curl en Swiss ball como prevención (Cap. 6 pp. 364–365).
- `BodyZoneId: knee`:
  - 13.2% de lesiones de pelea; cadena cerrada con ROM reducido en rehab/prehab; propiocepción (pistol squat en BOSU) (Cap. 6 pp. 366–367).
- `BodyZoneId: ankle / foot`:
  - Sin protección en MMA; fortalecimiento inversión/eversión/dorsiflexión + propiocepción en BOSU + vendaje (Cap. 6 pp. 368–369).

- `MovementPattern: squat`:
  - Back squat como test y ejercicio base; estándar élite masculino >1.6×BW, femenino >1.1×BW; variantes single-leg, Isoton split squat, pistol (Cap. 3 pp. 96–97; Cap. 5 pp. 149, 207, 331).
- `MovementPattern: hinge / deadlift`:
  - Deadlift para potencia de takedown y cadena posterior; cues de core y barra cerca del cuerpo (Cap. 5 pp. 141, 270, 291).
- `MovementPattern: horizontal-push (bench press, push-up)`:
  - Bench press estándar élite masculino >1.2×BW; predictor de rendimiento de golpeo con cargas altas; variantes con banda, Isoton, pliométricas (Cap. 3 p. 95; Cap. 5 pp. 159–160, 220).
- `MovementPattern: horizontal-pull (rows, bench pull)`:
  - Bench pull estándar masculino >1.0×BW; remos para grappling/guardia (Cap. 3 p. 96; Cap. 5 pp. 162–166, 266, 279).
- `MovementPattern: vertical-push / vertical-pull`:
  - Press de hombros, pull-ups/chin-ups (test de resistencia), pull-up con kimono isométrico (Cap. 5 pp. 163, 169–170, 276).
- `MovementPattern: rotation`:
  - ~90% de movimientos de pelea involucran rotación; rotaciones con cable/landmine/medicine ball como prioridad de core (Cap. 5 pp. 188–189, 203, 261).
- `MovementPattern: strike-specific (punch/kick/knee/elbow)`:
  - Ejercicios específicos con bandas y contraste (golpe con banda → golpe libre a máxima velocidad); pirámide de especificidad de Bondarchuk (general→especial→específico) (Cap. 5 pp. 219–223, 304–306).
- `MovementPattern: grappling-specific (sprawl, takedown, clinch, guard pass, submission)`:
  - Sprawls, takedowns con banda, pummeling en máquina, guillotina isométrica, pase de guardia con sobrecarga (Cap. 5 pp. 240, 259, 264, 277).

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `load-intensity-volume-tradeoff`
- Relación inversa entre intensidad y volumen; nunca combinar volumen máximo con intensidad máxima en una sesión.
- **Tipo:** volumen/intensidad. **Métrica:** relación intensidad–volumen.
- **Valores:** cualitativo-estructural (p. ej., a mayor %1RM, menos reps posibles).
- **Condiciones:** toda programación de resistencia.
- **Refs:** Cap. 1 pp. 4–5.
- **Comentarios:** base para todas las prescripciones posteriores.

### Regla: `rest-ratios-endurance`
- Ratios trabajo:descanso según sistema objetivo.
- **Tipo:** descanso. **Métrica:** work:rest ratio.
- **Valores:** resistencia glucolítica 1:3 (ej. 30 s trabajo → ~90 s descanso); aeróbico intensivo 1:0.25–0.5 para trabajos de 30 s–2.5 min; aeróbico extensivo: trabajos de 2.5–10 min con 45–90 s de descanso.
- **Condiciones:** entrenamiento de resistencia con descanso incompleto.
- **Refs:** Cap. 1 p. 7.

### Regla: `recovery-hours-by-quality`
- Tiempo de recuperación entre sesiones según calidad entrenada.
- **Tipo:** descanso/frecuencia. **Métrica:** horas de recuperación.
- **Valores:** velocidad 24–36 h; resistencia aláctica hasta 48 h; fuerza máxima 48 h; velocidad o fuerza 24–48 h; resistencia aeróbica 48–72 h; resistencia glucolítica 48–96 h; técnica/skills ~6 h.
- **Refs:** Cap. 1 Tabla 1.1 p. 7.

### Regla: `session-rpe-monitoring`
- Carga interna = RPE de sesión × duración (min); medir RPE 30 min post-sesión; comparar con carga externa planificada y ajustar.
- **Tipo:** monitoreo. **Métrica:** arbitraryUnits = RPE × minutos.
- **Valores:** escala 1–10; ejemplo 6 × 40 min = 240 UA.
- **Refs:** Cap. 1 pp. 9–10.

### Regla: `microcycle-load-bands`
- Bandas de carga total por tipo de microciclo (% de la carga máxima del pico competitivo).
- **Tipo:** intensidad/volumen. **Métrica:** % de carga máxima.
- **Valores:** estabilizador 40–60%; ordinario 60–80%; shock 80–100%; recuperación 20–40%; precompetitivo/control/competición según calendario.
- **Refs:** Cap. 1 Tabla 1.9 p. 20.

### Regla: `mesocycle-load-bands`
- **Tipo:** intensidad. **Valores:** incorporación 50–70% (3–4 semanas); desarrollo 60–80% (4–6 semanas); recuperación 30–50% (2–4 semanas); estabilización ~2 semanas con volumen moderado reducido; precompetitivo 4–6 semanas antes de la pelea; competitivo en MMA puede durar solo ~2 semanas.
- **Refs:** Cap. 1 pp. 17–19.

### Regla: `block-periodization-durations`
- Duraciones de mesociclos de bloques para atletas que compiten con frecuencia.
- **Tipo:** progresión/estructura. **Valores:** acumulación 2–6 semanas (volumen alto, intensidad moderada); transmutación 2–4 semanas (volumen óptimo, intensidad alta, lo más agotador fisiológicamente); realización 2–3 semanas (tapering, intensidad máxima, descanso).
- **Condiciones:** principalmente atletas experimentados; torneos con varias peleas en <6 meses.
- **Refs:** Cap. 2? no — Cap. 1 pp. 22–25 (Tablas 1.10–1.13).

### Regla: `att-adapted-mesocycle`
- Modelo ATT: intensidad siempre alta; alternar 2 microciclos de fuerza (volumen alto) + 2 de trabajo aeróbico (volumen alto aeróbico, bajo de fuerza); dentro de la semana 2–3 picos de fuerza y 2–3 picos aeróbicos; semana 4 = recuperación activa (alta intensidad, bajo volumen: bajar series de 6–12 a 3 o incluso 1 por grupo muscular).
- **Tipo:** estructura de carga. **Refs:** Cap. 1 pp. 27–29.
- **Comentarios:** evita estado de sobreentrenamiento sin necesidad de microciclo de recuperación cada 3–4 semanas durante el periodo preparatorio.

### Regla: `concurrent-training-order`
- Orden de modalidades combinadas en la misma sesión importa.
- **Tipo:** estructura. **Valores:** aeróbico baja intensidad → fuerza, o flexibilidad → fuerza, o técnica → fuerza = predominio anabólico (salud/preparación); fuerza → aeróbico intenso/prolongado = predominio catabólico (riesgo de pérdida de masa magra).
- **Condiciones:** si hay dos sesiones cercanas, usar “mini snack” (comida ligera, sólida o líquida) entre ambas.
- **Refs:** Cap. 1 pp. 29–31.

### Regla: `macrocycle-phases-att`
- Cinco fases básicas: acondicionamiento inicial/adaptación anatómica → hipertrofia → fuerza → potencia → circuito MMA (potencia-resistencia).
- **Tipo:** progresión. **Valores:** ~4 semanas por fase; ~12 semanas totales + 1 semana final para peso y supercompensación; fases eliminables si el atleta no necesita masa (p. ej., peleadores que cortan mucho peso → se elimina hipertrofia, resultando ~17 semanas de programa con ajuste).
- **Refs:** Cap. 1 pp. 31–33.

### Regla: `sparring-wave-model`
- Volumen de sparring en ondas: semana 1: 5 rounds (1 shadow + 4 sparring); semana 2: 6 rounds (+1 de jiu-jitsu); semana 3: 7 rounds (+2 de jiu-jitsu); reiniciar ciclo.
- **Tipo:** volumen. **Refs:** Cap. 1 pp. 33–34.

### Regla: `session-structure`
- Estructura de sesión: calentamiento 10–20 min elevando HR a 110–130 bpm (umbral aeróbico) + estiramientos; parte principal según plan; cool-down 5–15 min aeróbico a 110–130 bpm para reducir lactato + ~5 min de relajación/estiramiento.
- **Tipo:** estructura/descanso. **Refs:** Cap. 1 pp. 37–38.

### Regla: `aa-phase-params` (adaptación anatómica)
- **Tipo:** fase de progresión. **Métrica:** sets × reps, carga, frecuencia.
- **Valores:** duración 2–4 semanas; cargas ligeras-moderadas; 1–3 series por grupo muscular con 15–20 reps; calentamiento previo 5–15 min; frecuencia 1–3×/semana con ≥1 día de descanso entre sesiones; ejercicios que recluten todos los grupos.
- **Condiciones:** inicio de programa tras periodo de inactividad o baja intensidad; obligatoria antes de fases intensas.
- **Refs:** Cap. 5 pp. 140–141, 147–148.

### Regla: `max-strength-params`
- **Tipo:** intensidad/volumen. **Métrica:** %1RM y RM.
- **Valores:** cargas >60% 1RM mínimo; óptimo 75–90% 1RM; 2–6 RM; 2–6 series; descanso 2–5 min; velocidad de ejecución lenta-moderada; descanso entre días 48 h–7 días.
- **Refs:** Cap. 5 pp. 147–148.

### Regla: `hypertrophy-mechanisms-and-volume`
- **Tipo:** volumen. **Métrica:** series efectivas semanales por grupo muscular.
- **Valores:** para peleadores el volumen no necesita ser alto; 3 series semanales por grupo pueden producir hipertrofia similar a 6 o 12 (Ostrowski 1997); meta-análisis sugiere ≥10 series/semana para hipertrofia máxima (con cautela de extrapolación a peleadores); 4 factores para biosíntesis proteica: aminoácidos, hormonas anabólicas por estrés físico, creatina libre (tiempo bajo tensión 20–50 s / 10–20 reps), iones de hidrógeno (volumen alto + descansos cortos).
- **Refs:** Cap. 2 pp. 42–44, 51–53; Cap. 5 pp. 151–152.
- **⚠️:** el libro presenta tanto evidencia de dosis-respuesta como de volúmenes bajos efectivos; tratar como banda flexible dependiente del contexto de peso del atleta.

### Regla: `hypertrophy-tempo-eccentric-limit`
- Limitar componente excéntrico en peleadores para no interferir con rendimiento (daño muscular, DOMS).
- **Tipo:** técnica/volumen. **Métrica:** tempo.
- **Valores:** tempos sugeridos 1010 o 2010; excéntricos de 3 s producen daño y recuperación de hasta 48 h.
- **Refs:** Cap. 2 pp. 44–45.

### Regla: `hypertrophy-intensity-range`
- La carga no determina la hipertrofia si se llega cerca del fallo; rangos amplios válidos.
- **Tipo:** intensidad. **Valores:** cargas desde ~20–40% hasta 80% 1RM producen hipertrofia similar; en la práctica usar 5–15 RM; proximidad al fallo concéntrico es el factor clave (reclutamiento de unidades motoras).
- **Refs:** Cap. 2 p. 45.

### Regla: `hypertrophy-rest`
- **Tipo:** descanso. **Valores:** si hay acumulación glucolítica, ≥90 s; para rangos 5–8 RM: 3–5 min; para 12–15 RM: 1–2 min suficientes.
- **Refs:** Cap. 2 pp. 45–46.

### Regla: `power-params`
- **Tipo:** intensidad/volumen/descanso. **Valores:** 30–60% 1RM; si se buscan ~6–7 reps máximas usar ~30%; si 1–2 reps usar ~60%; fase concéntrica lo más rápida posible; detener la serie ante primera pérdida de velocidad; 1–3 series por ejercicio, ≤5 series por grupo muscular por sesión, ~10 series semanales por grupo; descanso 4–5 min (resíntesis ATP-PC); método cluster con pausas intra-serie de 10–30 s; evitar ejercicios monoarticulares en máquinas, preferir multiarticulares de pie.
- **Refs:** Cap. 2 pp. 46–48.

### Regla: `hiit-vo2max-intervals`
- **Tipo:** HIIT. **Valores:** intervalos de 2–5 min a máxima intensidad sostenible; recuperación igual al trabajo o hasta HR ~60% del máximo; no más de 2 sesiones/semana, con varios días de recuperación entre ellas. Ejemplo: 5×3 min con 3 min de descanso.
- **Refs:** Cap. 2 p. 49.

### Regla: `hiit-power-intervals-fatigue-stop`
- **Tipo:** HIIT con criterio de parada. **Valores:** intervalos de 15 s a 3 min, ratio 1:1; establecer potencia/velocidad del intervalo 3, restar 5%; si un intervalo posterior cae por debajo de ese umbral, terminar la sesión. Ejemplo: 12×1 min con 1 min de recuperación.
- **Refs:** Cap. 2 p. 49.

### Regla: `hrit-formats`
- **Tipo:** HIIT de resistencia. **Valores:** compound movements (ej. 3×[1 deadlift + 1 hang clean + 1 push press] + descanso 2–4 min); complexes (misma carga, ejercicios encadenados, descanso al final, 2–4 min); clusters (ej. 5×[2 reps + 10 s pausa]); alternativas: hill sprints 10–30 s con recuperación caminando, sled, medicine balls.
- **Refs:** Cap. 2 pp. 49–50.

### Regla: `gmf-hypertrophy-hyperplasia` (fibras glucolíticas, método ruso)
- **Tipo:** intensidad/volumen/descanso/frecuencia. **Valores:** intensidad 60–100% 1RM; duración 20–40 s hasta el fallo + 2 reps forzadas; descanso 5–10 min (5 min activo a HR 110–130) hasta mínima concentración de H+; series: toning 1–3, development 6–10 por grupo muscular; frecuencia: development 1 sesión/semana por grupo, toning 3–7 sesiones/semana; proteína animal 2–3 g/kg.
- **Condiciones:** presión arterial se eleva significativamente (hasta 200–250 mmHg sistólica en levantamientos) → advertido para poblaciones no atletas/hipertensas/mayores.
- **Refs:** Cap. 2 pp. 54–57.

### Regla: `isoton-protocol` (fibras oxidativas)
- **Tipo:** método completo. **Valores:** intensidad 10–60% RM (en Cap. 5 se consolida 30–60% 1RM); ROM parcial bajo tensión constante sin relajar; duración 30–60 s por serie hasta fallo por dolor + 2 forzadas (⚠️ no exceder 60 s por acumulación excesiva de H+); superseries: 30 s trabajo / 30 s descanso × 3–6; descanso entre superseries 30–60 s; descanso activo entre bloques de superseries 5–10 min (o trabajar otro grupo muscular distante); series: toning 1–3, development 4–10; 1–2+ sesiones diarias; repetir por grupo cada 3–7 días (Cap. 2) / 2–5 días (Cap. 5); si se usa volumen máximo, solo 1×/semana por grupo; mejor al final de la sesión y tarde/noche (GH pre-sueño).
- **Refs:** Cap. 2 pp. 57–59; Cap. 5 pp. 330–331.

### Regla: `mitochondrial-hyperplasia-gmf`
- **Tipo:** aeróbico de fibras rápidas. **Valores:** intensidad de contracción 60–100% del máximo; sets de 3–40 s hasta fatiga local; descanso 45 s–5 min (mínima acumulación de H+); series: toning 10, development 20–40; frecuencia: toning 2–3/semana, development 5–7/semana; factores: actividad muscular, proteína ~2 g/kg, hormonas de estrés físico, presencia de oxígeno, mínima concentración de H+.
- **Refs:** Cap. 2 p. 62.

### Regla: `aerobic-training-conditions`
- **Tipo:** aeróbico. **Valores:** intensidad ≤ potencia del umbral anaeróbico en trabajo prolongado; volumen 5–20 min por bloque (más largo puede acidificar); descanso 2–10 min; duración total máx ~60–90 min de trabajo puro (límite por glucógeno); volumen máximo repetible cada 2–3 días (resíntesis de glucógeno).
- **Refs:** Cap. 2 pp. 61–62.

### Regla: `sprint-method`
- Contracciones casi máximas con potencia media ≤ umbral anaeróbico, descansos que garanticen limpieza de metabolitos; mucho más eficiente en tiempo que continuo bajo (~200% más resultados que 40% VO2max continuo); usar solo con atletas muy entrenados y cerca de competición.
- **Tipo:** aeróbico intenso. **Refs:** Cap. 2 pp. 62–64.
- **⚠️ Precaución:** riesgo de sobrecarga cardíaca si los estímulos son muy largos; vigilar en poblaciones de riesgo.

### Regla: `mitochondrial-detraining-window`
- **Tipo:** frecuencia/estilo de vida. **Valores:** ~4–5 semanas de entrenamiento duplican contenido mitocondrial (meseta desde semana 5); 1 semana de inactividad pierde ~50% de la ganancia; 5 semanas de inactividad pierde todo; se requieren ~4 semanas para recuperar lo perdido en la primera semana → no permanecer totalmente inactivo más de 3–4 días.
- **Refs:** Cap. 2 pp. 64–65.

### Regla: `heart-interval-method` (hipertrofia del miocardio)
- **Tipo:** intervalos cardíacos. **Valores:** intensidad por encima de VO2max; duración del ejercicio 60–120 s, manteniendo HR máximo solo 30–60 s (riesgo cardíaco si se excede); descanso 120–180 s hasta HR ~120; total 4–10 min de trabajo, 30–40 aceleraciones; repetir cada 4–7 días tras volumen máximo. Para dilatación ventricular: trabajos a HR 120–150 (máximo stroke volume) hasta horas, en 2–3 sesiones diarias.
- **Refs:** Cap. 2 pp. 67–68.
- **⚠️ Precaución explícita:** cargas diarias inapropiadas producen distrofia miocárdica; supervisión necesaria.

### Regla: `fat-mobilization-intensity`
- Ejercicio intenso hasta fatiga local clara + tensión psicológica es lo más efectivo para movilizar ácidos grasos (catecolaminas activan lipasa); el ejemplo del libro (Lashley) usa <15% del volumen total como aeróbico clásico manteniendo 6–10% BF.
- **Tipo:** composición corporal. **Refs:** Cap. 2 pp. 69–70; Cap. 4 p. 117.

### Regla: `heat-acclimation`
- **Tipo:** ambiente/recuperación. **Valores:** inducir aumento de ~1 °F de temperatura central sin exceder 104 °F (40 °C) (riesgo de heatstroke 103–106 °F); activo: sesiones fáciles en calor, monitorear temperatura; pasivo: hot tub gradual hasta 40 min tras sesión de calidad; sauna/vapor en últimos 10–14 días antes de viajar, solo en días de calidad; estrategias pre-competición: chaleco de hielo, warm-ups cortos, slushies con bebida deportiva.
- **Refs:** Cap. 2 pp. 70–71.

### Regla: `hydration-hot-environment`
- **Tipo:** hidratación. **Valores:** 300–500 mL antes del ejercicio; 100–300 mL cada 15–30 min durante; <1 h solo agua; >1 h añadir sodio, cloruro y carbohidratos; bebidas frías se absorben mejor; ropa ligera que permita evaporación; detenerse ante mareos, calambres, palidez o temperatura >104 °F.
- **Refs:** Cap. 5 pp. 139–140.

### Regla: `assessment-stages`
- **Tipo:** evaluación. **Valores:** diagnóstica al inicio del programa; formativa constante (idealmente diaria); sumativa antes de competición contra benchmarks nacionales/internacionales.
- **Refs:** Cap. 3 pp. 74–75.

### Regla: `bodyfat-camp-targets` (UFC Performance Institute)
- **Tipo:** composición corporal. **Valores (%BF):** inicio de camp: hombres 9–16 / mujeres 16–26; mitad de camp: hombres 7–14 / mujeres 14–24; pesaje/pelea: hombres 5–12 / mujeres 12–22; off-season: hombres <18 / mujeres <28.
- **Refs:** Cap. 3 p. 77.
- **⚠️:** desaconseja prácticas rápidas de corte de peso; riesgo de trastornos alimentarios en deportes con categorías.

### Regla: `skinfold-protocol-quality`
- **Tipo:** evaluación. **Valores:** 3 mediciones por sitio (promediar si dentro de 1 mm), lado derecho, mismo evaluador siempre, calibrador de calidad, recorrido completo de sitios antes de repetir.
- **Refs:** Cap. 3 pp. 76–78.

### Regla: `elite-vo2max-thresholds` (normas MMA)
- **Tipo:** benchmarks. **Valores:** VO2 en umbral anaeróbico: bicicleta 47–50 mL/kg/min, arm ergometer 42–45; potencia en umbral aeróbico: bici 3.6–3.75 W/kg, brazos 2.4–2.6 W/kg; VO2max: bici/treadmill 60–70 mL/kg/min, brazos 50–55; potencia a VO2max: bici 4.6–5.0 W/kg, brazos 3.0–3.3 W/kg; potencia aláctica máxima: bici 16–17 W/kg, brazos 15–16 W/kg.
- **Refs:** Cap. 3 pp. 84–85.

### Regla: `vo2max-classification-goal`
- Mantener VO2max en categoría “Good” todo el año y buscar “Excellent” en fase competitiva (tabla de clasificación por edad/sexo; p. ej. hombres 20–29: Good 43–52, Excellent ≥53 mL/kg/min).
- **Refs:** Cap. 3 pp. 86–87.

### Regla: `leger-test-protocol`
- 20 m shuttle, velocidad inicial 8.5 km/h, +0.5 km/h por minuto; fin cuando falla dos veces el alcance de la línea o abandono; ecuaciones para VO2max según edad (≤18 y >18).
- **Refs:** Cap. 3 p. 86.

### Regla: `sjft-protocol`
- 3 etapas (15 s, 30 s, 30 s) de ippon seoi nage con 10 s de descanso; índice = (HR final + HR 1 min post) / total de lanzamientos; menor = mejor; normas: Excellent ≥29 lanzamientos e índice ≤11.73.
- **Refs:** Cap. 3 p. 88.

### Regla: `fskt-protocol`
- 10 s de máximas patadas bandal tchagui alternando piernas a 90 cm del saco; referencia MMA: 15–20 patadas (valores altos en fase competitiva).
- **Refs:** Cap. 3 p. 88.

### Regla: `fisrf-protocol` (Paiva & Del Vecchio)
- 3 ejercicios de 20 s (tackle a compañero, ground-and-pound en saco, straight punches de pie), 3 secuencias con descansos de 10 s y 20 s; FISRF = promedio(secuencias 2 y 3)/secuencia 1; cercano a 1 = alta resistencia específica; <0.5 bajo, 0.51–0.8 moderado, >0.81 alto.
- **Refs:** Cap. 3 pp. 89–90.

### Regla: `strength-standards-elite-mma`
- **Tipo:** benchmarks de fuerza relativa. **Valores:** bench press: hombres >1.2×BW, mujeres >0.9×BW; bench pull: hombres >1.0×BW, mujeres >0.9×BW; back squat: hombres >1.6×BW, mujeres >1.1×BW.
- **Refs:** Cap. 3 pp. 95–97.

### Regla: `1rm-test-protocol`
- Calentamiento general 3–5 min + series específicas (8–10 reps al 50%, luego 3 al 70%); incrementos 2.5–20 kg; 1RM determinado en ≤4 intentos con pausas de 3–5 min; misma velocidad y ROM en todos los intentos.
- **Refs:** Cap. 3 p. 94.
- Alternativa: test de múltiples repeticiones (7–10 RM) con ecuación de Brzycki: 1RM = (100 × peso) ÷ (102.78 − 2.78 × reps). **Refs:** Cap. 3 pp. 94–95.

### Regla: `velocity-loss-thresholds` (VBT)
- **Tipo:** velocidad/autorregulación. **Valores:** limitar pérdida de velocidad media a 20% en sentadillas y 30% en tren superior (para limitar daño muscular); en ejercicios de potencia (olímpicos, saltos): pérdida ≤10% en la mayoría de sesiones y ≤5% en tapering; para squat jump mantener velocidad pico entre 1.5–2.5 m/s.
- **Refs:** Cap. 3 pp. 100–101.
- Normas MMA: squat jump con dowel: internacional 3.77 m/s vs nacional 3.29 m/s; con 100% BW: 1.86 vs 1.74 m/s.

### Regla: `flexitest-classification`
- 20 movimientos articulares pasivos, escala 0–4 por movimiento (máx 80); clasificación: <20 muy pobre/anquilosis; 21–30 pobre; 31–40 promedio bajo; 41–50 promedio alto; 51–60 considerable; >60 hipermovilidad.
- **Refs:** Cap. 3 pp. 102, 107.

### Regla: `energy-availability-red-s`
- EA = (ingesta − gasto de ejercicio) / masa libre de grasa; EA < 30 kcal/kg FFM/día aumenta riesgos de salud y RED-S (fuerza, coordinación, glucógeno, riesgo de lesión, juicio, concentración, respuesta al entrenamiento).
- **Refs:** Cap. 4 p. 112.

### Regla: `carbohydrate-targets`
- **Tipo:** nutrición. **Valores:** ligero 3–5 g/kg/día; moderado 5–7; alto 6–10; muy alto 8–12. Fueling pre-competición 7–12 g/kg/24 h; refueling rápido (<8 h entre sesiones): 1–1.2 g/kg/h las primeras 4 h.
- **Refs:** Cap. 4 pp. 114–115.

### Regla: `intra-session-carbs`
- En sesiones de 45–75 min de alta intensidad, ingerir carbohidratos de forma escalonada; concentración de la bebida ≤8% (ej. 40 g dextrosa en 500 mL); alternativa mouth rinse 5–10 s si hay intolerancia GI.
- **Refs:** Cap. 4 pp. 114–115.

### Regla: `protein-dosing`
- **Tipo:** nutrición. **Valores:** 1.4–2 g/kg/día para balance positivo (>3 g/kg posible en déficit calórico, no concluyente); porciones cada 3–4 h de 0.25 g/kg (20–40 g) con 0.7–3 g de leucina por dosis; proteína de absorción lenta (caseína) antes de dormir válida.
- **Refs:** Cap. 4 p. 116.

### Regla: `creatine-protocol`
- **Tipo:** suplementación. **Valores:** carga 0.3 g/kg/día (20–30 g/día en 4 tomas, 5–7 días), mantenimiento 3–5 g/día; ingerir con carbohidratos (o CHO+proteína); aumento de peso 1–2 kg (considerar en categorías de peso); lavado de reservas 4–6 semanas; seguro hasta 5 años de uso continuo; permitido en antidopaje.
- **Refs:** Cap. 4 pp. 122–123.

### Regla: `caffeine-dose`
- **Tipo:** suplementación. **Valores:** 3–6 mg/kg; pico sanguíneo 15–45 min; dosis mayores (hasta 9 mg/kg) no mejoran más y aumentan efectos adversos (náusea, insomnio, ansiedad); evidencia mixta en fuerza y en acciones específicas de MMA.
- **Refs:** Cap. 4 pp. 124–125.

### Regla: `beta-alanine-protocol`
- **Tipo:** suplementación. **Valores:** 4–6 g/día (~65 mg/kg/día) dividido en tomas de 0.8–1.6 g cada 3–4 h durante 10–12 semanas; útil en tareas de 0.5–10 min y ejercicios máximos ≥30 s con ~3 min de intervalo (similar a rounds de MMA).
- **Refs:** Cap. 4 p. 125.

### Regla: `sodium-bicarbonate-protocol`
- **Tipo:** suplementación. **Valores:** 0.2–0.4 g/kg entre 60 y 150 min pre-ejercicio; alta incidencia de síntomas GI en bolo único → dividir dosis o coingerir con ~1.5 g/kg de carbohidratos; dosis <0.1 g/kg por 10 días resultó insuficiente en estudio de wrestling.
- **Refs:** Cap. 4 p. 126.

### Regla: `nitrate-protocol`
- 310–560 mg de nitrato (ej. jugo de betabel) 2–3 h pre-ejercicio; menor efecto en atletas muy entrenados; evidencia conflictiva en ejercicios <12 min.
- **Refs:** Cap. 4 p. 127.

### Regla: `hmb-protocol`
- 3 g/día cerca del entrenamiento, mínimo 2 semanas para eficacia; sin efectos adversos reportados.
- **Refs:** Cap. 4 pp. 127–128.

### Regla: `supplement-safety`
- Tasa de contaminación de suplementos reportada 12–58%; ingestión inadvertida de sustancias prohibidas cuenta como dopaje; el staff debe conocer y auditar todo suplemento por fase.
- **Refs:** Cap. 4 p. 128.

### Regla: `outdoor-group-session-params`
- Sesión de playa: swings con kettlebell 2–3×15–20 con 9–18 kg; snatch 2–3×10/lado; lanzamiento de balón medicinal + shuttle 60 m, 2–3 series; wheelbarrow 30 m × 2–3 con 1 min de sombra; sprints 30 m, 2–5 series; fireman’s carry 1–4 series; carrera aeróbica final 15–30 min; frecuencia 1–2×/semana.
- **Refs:** Cap. 5 pp. 136–140.

### Regla: `split-rest-spacing`
- Si se entrenan piernas dos veces por semana, ≥72 h entre sesiones; para tríceps: no más de 4 ejercicios por sesión, no combinar tres variantes (A+B+C) en menos de 10 días.
- **Refs:** Cap. 5 pp. 157, 185.

### Regla: `agonist-antagonist-params`
- Bi-sets de grupos opuestos sin descanso entre ejercicios; fase preparatoria ~6 semanas: 6–12 reps al 65–85% RM; descanso entre bi-sets 1–5 min; 3–6 series.
- **Refs:** Cap. 5 p. 191.

### Regla: `eccentric-overload-params`
- **Tipo:** intensidad. **Valores:** cargas 110–120% del máximo (se requiere spotters); submáximo: subir 1–2 s, bajar 4–6 s; DOMS esperado 24–72 h; cargas máximas solo 1×/semana; empezar con pocas series/reps y progresar; en programas: sets pesados 90–120% con pocas reps y descanso 3–5+ min; no más de 2 sesiones/semana.
- **Refs:** Cap. 5 pp. 194–195, 199.

### Regla: `functional-circuit-density`
- Circuitos funcionales en superseries con 2 min de descanso activo entre bloques; ejecución explosiva; repetir 2×/semana: 1 día de shock (volumen alto) y 1 día de mantenimiento (~50% del volumen de shock) ~48 h después.
- **Refs:** Cap. 5 pp. 200–204.

### Regla: `power-circuit-params`
- En circuitos de potencia: ejercicios de fuerza con 4–10 RM; para velocidad usar 10–40% del máximo; esfuerzos de 5–15 s a máxima velocidad; descansos 1–5 min (recuperación completa); 2–5 series por circuito; frecuencia 1–3×/semana; ubicarse 4–8 semanas antes de la pelea.
- **Refs:** Cap. 5 p. 216.

### Regla: `compensatory-acceleration`
- Aplicar máxima intención de aceleración con 30–90% 1RM; ganancias en 5 semanas; no requiere fuerza máxima previa.
- **Refs:** Cap. 5 pp. 211–212.

### Regla: `contrast-french-contrast-params`
- Contraste: ejercicio pesado seguido de ejercicio ligero/explosivo del mismo patrón (PAP); programas con 8×2–3 al 75–80% + saltos/pliométricos; French contrast: 3 ejercicios en tri-set con 10 s entre ejercicios y 60–90 s entre series; series de trabajo específico 6 reps pesadas + 10 s máximas por lado, progresando de 3 a 6 series en 4 semanas.
- **Refs:** Cap. 5 pp. 214–215, 220–223.

### Regla: `power-endurance-intensity-band`
- **Tipo:** intensidad. **Valores:** 60–80% 1RM o 8–10 reps hasta fallo; la densidad se aumenta reduciendo descansos de 3–5 min hasta 30–60 s solo si la recuperación sigue siendo óptima (técnica y velocidad intactas).
- **Refs:** Cap. 5 p. 224.

### Regla: `power-endurance-triplex`
- Circuitos de triplex (ejercicio olímpico + core 30 s + ejercicio básico): primer ejercicio 2–6 RM, último 10–15 RM; cada combinación dura 5–6 min; 2–4 series; 2×/semana durante 6 semanas, terminando la última sesión pesada 10 días antes de la pelea; finalizar con 10–20 min aeróbico en elíptica.
- **Refs:** Cap. 5 pp. 224–229.

### Regla: `speed-session-params`
- **Tipo:** velocidad. **Valores:** esfuerzos de 5–15 s a máxima velocidad; descanso 1–5 min completo; frecuencia ≥1×/semana; cargas 0–40% del máximo; dentro de la periodización anual, típicamente semanas antes de la pelea; buscar adaptación neural sin aumentar masa magra.
- **Refs:** Cap. 5 pp. 230–231.
- Ejemplos instrumentados: Air300 4–6×5–15 s al 20–40% 1RM de squat, descanso activo 60–90 s; arm ergometer 4–6×15 s por dirección, descanso 60–120 s; VersaClimber 4–6×5–15 s (velocidad) o 20–30 s (resistencia de velocidad), descanso 60–90 s; battle rope 10–15 s + 60–90 s hasta completar 5 min; incline trainer 30–50% de inclinación a 6–8 mph, 5–15 s + 45 s hasta 5 min; tread sled 5–15 s + 45 s hasta 5 min. **Refs:** Cap. 5 pp. 231–234.

### Regla: `agility-session-params`
- Warm-up dinámico 3–10 min; ladder (pasos con guardia alta, opcional con mancuernas); push-up sprint 10–30 m × 4–10; salto + sprawl (+ high kick) 10 series a máxima velocidad; 5-10-5 shuttle 5–10 reps. Entrenar cambio de dirección (acelerar/desacelerar/reacelerar), maniobrabilidad y percepción/decisión.
- **Refs:** Cap. 5 pp. 235–238.

### Regla: `precompetition-circuit-structure`
- Rounds de ~5 min simulando pelea; número de rounds = rounds de la pelea (p. ej., 3 rounds de pelea → 1 warm-up general + 1 específico + 3 de circuito); alternar estaciones superior/inferior para evitar acumulación de acidez; mejor más rounds de 5–6 min que rounds de 6–8 min; terminar con shadow boxing + estiramiento.
- **Refs:** Cap. 5 pp. 238–243.

### Regla: `youth-sensitive-periods`
- **Tipo:** población joven. **Valores (picos de entrenabilidad):** velocidad 7–11 años ambos sexos; velocidad-fuerza: niñas 9–11, niños 13–15; fuerza: niñas 10–11, niños >13 (mayores cambios >16); coordinación: niñas 7–10 y 13–14, niños 10–12; flexibilidad: niñas 7–10 y 14–17, niños 9–10 y 15–16; resistencia: niñas 10–12, niños 14–16.
- **Refs:** Cap. 5 pp. 244–247 (Tabla 5.26).

### Regla: `youth-load-caps`
- Balones medicinales ≤5–10 lb (2–5 kg); llantas ≤200 lb (91 kg); sparring con protección completa máx 2 sesiones/semana, 1–3 rounds, progresión gradual en 3–6 meses; 3–10 peleas amateur (todas victorias) antes del debut profesional; los jóvenes toleran mayor volumen por respuesta hormonal.
- **Refs:** Cap. 5 pp. 247–253.

### Regla: `takedown-training-params`
- Tire flip hasta 500 lb × 6–10; takedowns con banda 5–10 por lado (3–4 series); sledgehammer 16–30 lb, 20 golpes (10 por brazo); ground-and-pound con banda: 15–30 s de trabajo + 1–3 min de recuperación activa; cuello con Isoton hasta fallo local; propiocepción 3×10/lado; guillotina isométrica 2–4×15–30 s/lado; repetir 2×/semana durante 4–6 semanas antes de la pelea.
- **Refs:** Cap. 5 pp. 258–263.

### Regla: `female-circuit-params`
- Guillotina 5–10 reps + 10–20 s isométrico; VertiMax striking series de 3–5 min; pases de guardia 20–50 por lado a máxima velocidad; remos para guardia de pie 4–8 reps con 1–2 s isométrico por fase; squat con agarre de kimono hasta fallo en 45 s–1:30; takedowns con banda 5 por lado; VersaClimber 15 s–1 min; Powermax 360 series de 15–45 s.
- **Refs:** Cap. 5 pp. 263–268.

### Regla: `grappler-wrestler-params`
- Deadlift 80–90% × 4–6 reps × 3–4 series con descanso largo (ante acidez: 45 s–2 min de sombra); seated low row 60–80% × 8–15 × 3–4; plank 20–30 s × 3; sprints de 10–15 s máximos × 5–10 con recuperación activa; trabajo de VO2max 15–60 min/sesión, 3–5×/semana al 70–85% VO2max.
- **Refs:** Cap. 5 pp. 269–272.

### Regla: `bjj-conditioning-params`
- 2–3×/semana; ejercicios individuales 2–4 series de 15–30 s con 1 min de descanso, o circuitos largos de 5–10 min; incluir agarre de kimono (isométricos de pull-up 30 s), takedowns con banda (1–4×20), ippon seoi nage drills, rope climb.
- **Refs:** Cap. 5 pp. 272–280.

### Regla: `outdoor-mma-circuit`
- Rounds de ~5 min con 1 min de descanso entre rounds; estaciones alternadas superior/inferior: battle rope 30 s; empuje de auto 30–50 m; sledgehammer 20 reps con banda de tracción; tire flip con salto × 10 (llanta 300–500 lb); arrastre de auto con cuerda 15 m; pads hasta fin de round; round extra de pads como cool-down técnico. Atletas ligeros: sledgehammer más liviano, auto más pequeño, llanta menor.
- **Refs:** Cap. 5 pp. 281–283.

### Regla: `mma-hiit-round-structure`
- Rounds de 5–6 min con warm-up específico a mitad de carga; arm ergometer (pummeling) 10–30 s por dirección + 1–2 min activo; Powermax 15–30 s + strikes 15–30 s + 1–2 min; Air300 sprints 10–30 s + 1–2 min; bandas de punches 10–30 s máximos + ≥45 s sombra + clinch en polea 10–30 s; VersaClimber 10–20 s rápido + ≥45 s lento; finalizar con 5–10 min de elíptica a HR 130–150. Usar en campamento 4–6 semanas antes de la pelea.
- **Refs:** Cap. 5 pp. 284–287.

### Regla: `band-striking-protocol`
- 5–7 rounds de 5 min; 30 s con banda a velocidad moderada + 1 min sin banda a máxima velocidad con pads; round final solo pads; fuera de competición 1×/semana, en camp 2×/semana; principiantes: 2–5 rounds durante hasta 4 semanas, 1–2×/semana.
- **Refs:** Cap. 5 pp. 304–306.

### Regla: `band-takedown-progression`
- Progresión en 4 semanas: 3×30 reps × 3 días (técnica) → 5×30 reps × 3 días → 3–5×30 s × 3 días (alta velocidad) → 5×10 s × 3 días (velocidad máxima); cambiar/incorporar ejercicios cada 4–6 semanas; tensión de banda progresiva según capacidad.
- **Refs:** Cap. 5 pp. 307–314.

### Regla: `interval-type-1` (mitocondrias en fibras rápidas)
- **Tipo:** intervalo. **Valores:** intensidad 60–80% 1RM; 1 rep + pausa 1–2 s hasta fatiga local; duración 30–120 s; descanso entre series 2–5 min; series: toning 5–10, development 10–20; frecuencia 1–3×/semana.
- **Refs:** Cap. 5 p. 343.

### Regla: `interval-10x10`
- **Tipo:** intervalo ligero. **Valores:** 40–60% 1RM; tempo rápido con pausa entre reps y al final de cada serie; 10 reps por serie; 2–3 ejercicios por circuito (agonista-antagonista o cuerpo completo); 5–10 series (10 óptimo en élite); descanso ≤1 min si es necesario; 1–3 circuitos; descanso entre circuitos 5–15 min; 1–3×/semana; detenerse a las primeras señales de fatiga local.
- **Refs:** Cap. 5 pp. 343–344.

### Regla: `interval-type-2`
- **Tipo:** intervalo pesado. **Valores:** 80–100% 1RM; tempo rápido/explosivo; 1–5 reps; duración 20–30 s hasta fatiga local; descanso 2–5 min; series toning 5–10, development 10–20; solo 1×/semana con volumen máximo o 2× con volumen bajo; método avanzado que requiere spotter.
- **Refs:** Cap. 5 p. 344.

### Regla: `fast-twitch-activation`
- **Tipo:** fuerza máxima neural. **Valores:** 90–100% 1RM; 1–3 reps hasta fallo; descanso 2–5 min; series toning 1–5, development 10–12.
- **Refs:** Cap. 5 p. 347.

### Regla: `high-speed-interval`
- **Tipo:** velocidad-resistencia. **Valores:** 80–100% del máximo; 5 s al 95–100% o 10–15 s al 80–90%; descanso 2–3 min; series toning 5–10, development 10–20.
- **Refs:** Cap. 5 pp. 349–350.

### Regla: `mma-oriented-sparring-load`
- **Tipo:** específico competitivo. **Valores:** intensidad y ritmo competitivos; trabajo 30–120 s hasta fatiga local; descanso 5–10 min; series toning 1–5, development 5–10.
- **Refs:** Cap. 5 p. 350.

### Regla: `peak-days-and-deload`
- **Tipo:** gestión de fatiga. **Valores:** no más de 2 días pesados de desarrollo consecutivos (alternar desarrollo/toning); 2–3 días pico de carga por semana; >4 días pico/semana = alto riesgo de sobreentrenamiento; semana de descarga cada 2–6 semanas con ~30% menos volumen manteniendo intensidad.
- **Refs:** Cap. 5 p. 352.

### Regla: `injury-rate-context` (datos para priorizar prevención)
- Lesiones 22.9–28.6 por 100 peleadores; datos UFC 2017–2020: 80.7% de lesiones en pelea vs 19.3% en entrenamiento (otro estudio: 77.9% en entrenamiento); cabeza/cara 32.5% de lesiones de pelea; mano/muñeca segunda más común; hombro 7.9% pelea / 16.5% entrenamiento; rodilla 13.2% en pelea y la más común fuera de pelea; tobillo/pie 12.3% pelea / 10.7% no pelea; lumbar 6.9% de lesiones de entrenamiento; lesiones de entrenamiento probablemente subreportadas.
- **Refs:** Cap. 6 pp. 356–357, 359–368.

### Regla: `neck-strengthening-concussion`
- Fortalecer cuello (movimientos anteroposterior y lateral, idealmente Isoton hasta fallo local) para reducir aceleración/desaceleración craneal y potencialmente número/frecuencia de conmociones.
- **Refs:** Cap. 6 p. 357; Cap. 5 pp. 260–261.

### Regla: `core-prevention-doses`
- Puente unilateral elevado 3×15–20 por lado; crunch en Swiss ball 3×30 o hasta fallo; plank en Swiss ball (con perturbación del coach) 2–3×45–60 s o hasta fallo.
- **Refs:** Cap. 6 pp. 358–359.

### Regla: `wrist-prevention-doses`
- Kettlebell invertido (estabilización) 3×45–60 s por lado o hasta fatiga; flexión/extensión de muñeca con EzBar o mancuernas 3×15–20.
- **Refs:** Cap. 6 p. 360.

### Regla: `shoulder-prevention-doses`
- Ejercicios de manguito rotador y estabilizadores escapulares con banda/máquina; tras lesión: estiramientos estáticos 30 s–1 min × ≥3; bandas 2–4 series de 30 s (dinámico/isométrico), máquinas 3×15–25; retorno post-artroscopia: entrenamiento 3–4 meses, competición ~6 meses.
- **Refs:** Cap. 6 pp. 361–364.

### Regla: `hamstring-prevention-doses`
- Nordic curl excéntrico 3×6–8 con descenso lento; curl de isquios en Swiss ball 3×12–15 (bilateral/unilateral).
- **Refs:** Cap. 6 pp. 364–365.

### Regla: `knee-prevention-params`
- Cadena cerrada con ROM reducido (squats, lunges, RDL, side lunge, prensa unilateral); cadena abierta (leg curl/extension) importante en prevención pero con restricciones en rehab ACL (fuera del alcance del libro); propiocepción: 30 s o 10 pistol squats en BOSU; añadir superficies inestables, ojos cerrados o movimientos específicos para progresar.
- **Refs:** Cap. 6 pp. 366–367.

### Regla: `ankle-foot-prevention-doses`
- Inversión/eversión/dorsiflexión con banda 3 series hasta fatiga o 20–30 reps; propiocepción en BOSU/disco 3×45–60 s; vendaje funcional como soporte.
- **Refs:** Cap. 6 pp. 368–369.

### Regla: `stretch-prescription`
- **Tipo:** flexibilidad. **Valores:** estático 15–30 s por estiramiento, máx ~4 repeticiones (más series no aportan); PNF contract-relax: llevar a ROM final, 10 s de contracción isométrica contra el partner, 10 s de relajación, nuevo estiramiento más profundo; dinámico 5–10 min pre-entrenamiento/competición; calentamiento siempre antes de estirar; estirar hasta resistencia leve, nunca dolor; evitar balístico sin supervisión y sin calentamiento.
- **Refs:** Cap. 6 pp. 370–373.

### Regla: `stretching-mode-selection`
- Comparación por método (riesgo de lesión: balístico alto, estático bajo, dinámico y PNF medio; efectividad para ROM: PNF excelente; practicidad: estático y dinámico excelentes, PNF pobre por requerir partner; eficiencia energética: estático excelente). Estático más apropiado para cool-down/recuperación activa; dinámico superior para warm-up de rendimiento.
- **Refs:** Cap. 6 pp. 370–373 (Tabla 6.1).

### Regla: `thomas-test-corrections`
- Muslo elevado (paralelo al piso no alcanzado) → acortamiento de iliopsoas → estiramientos de flexores de cadera; rodilla extendida (>80–90° no alcanzado) con muslo paralelo → recto femoral → estiramiento de cuádriceps; ambos → ambos estiramientos; pierna abducida → banda iliotibial. Dosis correctivas: 15–30 s × 2–4 series por pierna.
- **Refs:** Cap. 6 pp. 375–378.

### Regla: `ohs-compensation-corrections`
- Rodillas hacia fuera: fortalecer aductores (squat hold con foam roller o balón medicinal, 2–5 series hasta fatiga ligera, 2–3 días/semana) y estirar TFL, piriforme, bíceps femoral, glúteo menor/medio; rodillas hacia dentro: fortalecer glúteos (máximo/medio/menor) e isquios, estirar aductores, isquios y gastrocnemios + liberación miofascial de pantorrilla (rodar hasta punto de dolor 6–9/10 en RPE, sostener 20–30 s, buscar 1–2 puntos más por pierna); inclinación anterior excesiva: squat con balón de estabilidad contra la pared enfatizando postura y core, 2–4 series con 1 min de descanso.
- **Refs:** Cap. 6 pp. 378–382.
- **⚠️:** el libro indica “2–4 repeticiones” para el squat con balón, lo cual parece un error tipográfico (probablemente 2–4 series de más reps); validar antes de implementar.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `att-macrocycle-phases`
- **Disciplina:** S&C para combate.
- **Objetivo final:** alcanzar peak performance en la fecha de la pelea (supercompensación + peso logrado).
- **Requisitos de seguridad:** evaluación diagnóstica inicial; fase AA completada sin dolor antes de cargas altas.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Acondicionamiento inicial / AA | Ejercicios generales de cuerpo completo, cargas ligeras-moderadas, 15–20 reps | Completar 2–4 semanas sin molestias articulares | Saltarse la fase por prisa | Cap. 1 pp. 31–33; Cap. 5 pp. 140–148 |
| 2 | Hipertrofia (opcional) | Cargas moderadas-altas con volumen alto | Ganancia de masa funcional sin comprometer categoría de peso | Añadir masa que impida dar el peso (elimínese si no aplica) | Cap. 1 pp. 31–33 |
| 3 | Fuerza | Cargas 75–90% 1RM, 2–6 RM | Mantener técnica con cargas máximas relativas | Técnica degradada bajo fatiga | Cap. 5 pp. 147–151 |
| 4 | Potencia | Cargas moderadas con velocidad máxima, contrastes | Velocidad sostenida sin pérdida | Acumular fatiga que reduce velocidad | Cap. 5 pp. 210–223 |
| 5 | Circuito MMA (potencia-resistencia) | Rounds de 5 min mezclando fuerza, pliometría y gestos específicos | Completar rounds manteniendo output | Degradación técnica tardía | Cap. 5 pp. 224–303 |
| 6 | Semana de peso/supercompensación | Tapering, corte de peso controlado | Peso alcanzado con recuperación | Corte agresivo que afecta rendimiento/salud | Cap. 1 pp. 31–33 |

### SkillPath: `surfing-the-curve`
- **Disciplina:** periodización de fuerza-velocidad.
- **Objetivo final:** recorrer la curva fuerza-velocidad de forma ordenada en el año.
- **Pasos (estructura):** comenzar en el centro (acondicionamiento inicial), subir hacia la izquierda (hipertrofia y fuerza con cargas altas), descender hacia la derecha (potencia y velocidad con cargas ligeras y alta velocidad), fase final lista para pelear. Refs: Cap. 1 pp. 32–33.

### SkillPath: `block-periodization-atr`
- **Disciplina:** periodización para calendario denso.
- **Pasos:** Acumulación (2–6 semanas, volumen alto, fuerza básica/resistencia/técnica general) → Transmutación (2–4 semanas, fuerza específica/resistencia específica/técnica específica) → Realización (2–3 semanas, velocidad, entrenamiento competitivo, tapering). Repetir bloques con importancia competitiva creciente. Refs: Cap. 1 pp. 22–25.

### SkillPath: `isoton-method-application`
- **Disciplina:** método ruso static-dynamic.
- **Objetivo final:** hipertrofia de fibras oxidativas y aumento de umbral aeróbico sin carga mecánica alta.
- **Requisitos:** intensidad controlada 30–60% 1RM; no relajar el músculo; supervisión para evitar excesos de acidez.
- **Pasos:**

| Step | Nombre | Descripción | Criterio de avance | Errores | Notas |
|---|---|---|---|---|---|
| 1 | Selección de ejercicio multiarticular | Squat, press, remo, curl, etc. con ROM parcial | Ejecución bajo tensión constante sin pausa | Relajar en los extremos del ROM | Cap. 2 pp. 57–58 |
| 2 | Superset 30/30 | 30 s trabajo + 30 s descanso, 3–6 veces | Ardor controlado, fallo por acidez | Exceder 60 s continuos | Cap. 5 pp. 330–331 |
| 3 | Descanso activo 5–10 min | Caminata u otro grupo muscular | Recuperación de sensación de ardor | Descanso pasivo prolongado | Cap. 5 p. 331 |
| 4 | Progresión semanal | 3→6 superseries, 35%→40% 1RM en 4 semanas | Mantener técnica y tensión | Volumen máximo más de 1×/semana por grupo | Cap. 5 Tabla 5.43 pp. 335–336 |

### SkillPath: `power-method-progression`
- **Disciplina:** potencia.
- **Pasos:** (1) Aceleración compensatoria con intención máxima (30–90% 1RM); (2) Resistencia acomodada con bandas/cadenas; (3) Contraste pesado-ligero (PAP); (4) French contrast (tri-sets con componente específico). Señalado como especialmente beneficioso para atletas con mayor base de fuerza; los métodos avanzados requieren dominio técnico. Refs: Cap. 5 pp. 210–223.

### SkillPath: `exercise-specificity-pyramid` (Bondarchuk adaptado)
- **Disciplina:** transferencia de fuerza a pelea.
- **Estructura:** base = ejercicios generales (bench press, fuerza máxima) → medio = ejercicios especiales (lanzamiento de balón medicinal, potencia) → cima = ejercicios específicos (straight punch, velocidad). Los cinco criterios de correspondencia dinámica: amplitud/dirección del movimiento, región acentuada de producción de fuerza, dinámica del esfuerzo, tasa/tiempo de producción de fuerza máxima, régimen de trabajo muscular. Refs: Cap. 5 pp. 219–220.

### SkillPath: `band-striking-progression`
- **Disciplina:** striking condicionado.
- **Pasos (4 semanas):** rounds con 30 s con banda + 30 s sin banda → progresar a bandas pesadas + 1 min sin banda → patadas 5 con banda + 5/10 sin banda → round final solo pads a máxima velocidad. Refs: Cap. 5 pp. 304–306.

### SkillPath: `band-takedown-progression`
- **Disciplina:** grappling/derribos.
- **Pasos:** técnica 3–5×30 reps × 3 días → alta velocidad 3–5×30 s × 3 días → velocidad máxima 5×10 s × 3 días; técnicas: derribo por espalda, dos manos al oponente, agarre de brazo+torso, lift a hombro (de pie y de rodillas), suplex, variantes de preparación, trips de pierna interna/externa. Refs: Cap. 5 pp. 307–314.

### SkillPath: `youth-to-professional-path`
- **Disciplina:** desarrollo a largo plazo.
- **Pasos:** (1) aprovechamiento de periodos sensibles (velocidad/coordiación temprano); (2) entrenamiento multideportivo (jiu-jitsu, judo, wrestling, Muay Thai, boxeo) ya que MMA profesional solo desde los 18; (3) transición amateur: sparring protegido ≤2×/semana, 3–10 peleas amateur invicto; (4) profesional: mantener invicto temprano; (5) élite: eliminar fases innecesarias de periodización y focalizar en fuerza, potencia-resistencia y circuito MMA. Refs: Cap. 5 pp. 244–253, 352.

### SkillPath: `flexibility-screen-corrective`
- **Disciplina:** movilidad/prehab.
- **Pasos:** (1) Flexitest de 20 movimientos para baseline; (2) Thomas Test para identificar iliopsoas/recto femoral/IT band; (3) Overhead Squat Test para compensaciones dinámicas; (4) prescripción correctiva (fortalecer músculos subactivos + estirar sobreactivos + liberación miofascial); (5) re-test. Refs: Cap. 3 pp. 102–107; Cap. 6 pp. 374–382.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Barbell deadlift
- **Cues:** core contraído, inhalar y sostener la respiración durante el tirón, barra pegada a las espinillas, empujar con piernas y luego extender torso, exhalar al final.
- **Errores:** perder postura/redondear espalda; barra se adelanta; caderas suben antes que pecho.
- **Variantes:** single-leg RDL (con mancuerna contralateral) para equilibrio y coordinación.
- **Refs:** Cap. 5 pp. 141–142, 153–154, 225, 270, 291.

### Back squat
- **Cues:** barra sobre trapecio (~5 cm debajo del tope), agarre cómodo, codos atrás, inhalar profundo para presión intratorácica, core apretado, mirada al frente; pies paralelos al ancho de cadera/hombros; puntas hacia la espina ilíaca anterosuperior (hasta 30° hacia fuera); espinillas perpendiculares al piso; bajar hasta muslos horizontales o ángulo prescrito.
- **Errores:** valgo de rodilla/tobillo (rotación interna), hiperextensión de rodilla al subir, redondear espalda, talones despegados.
- **Precauciones:** en fase de rehabilitación usar ROM reducido y cadena cerrada; variantes Smith/máquina según limitaciones.
- **Refs:** Cap. 3 pp. 96–98; Cap. 5 p. 149; Cap. 6 pp. 366–367.

### Bench press (barbell/dumbbell)
- **Cues:** glúteos, hombros y cabeza firmes en el banco, pies planos (excepción: pies en el banco si hay dolor lumbar), agarre pronado más ancho que hombros, bajar controlado al pecho con contacto breve, empujar y exhalar al final.
- **Errores:** arquear excesivamente la zona lumbar; rebotar la barra; recorrido inconsistente.
- **Variantes seguras:** dumbbell press (mayor estabilización), cable chest press (inestabilidad controlada), close-grip para tríceps/puñetazos (no usar cargas máximas por estrés en codos y deltoides clavicular).
- **Refs:** Cap. 5 pp. 142, 149, 160, 183, 293.

### Pull-up / chin-up
- **Cues:** agarre prono más ancho que hombros, subir hasta que la barbilla pase la barra, bajar controlado a brazos extendidos.
- **Errores (invalidan rep):** movimientos bruscos, balanceo, patear el aire, doblar piernas.
- **Variantes:** agarre neutro con isométrico de 5 s al final; lastre para activación de fibras rápidas; hold isométrico con kimono para agarre.
- **Refs:** Cap. 3 pp. 98–99; Cap. 5 pp. 163, 296, 346; Cap. 5 p. 276.

### Remos (seated row, one-arm dumbbell row, bent-over row, T-bar)
- **Cues:** pecho alto, escápulas juntas al final, codos hacia atrás, core estable; en remo con mancuerna apoyar rodilla y mano en banco para alinear torso; en bent-over mantener espalda plana ~45°.
- **Errores:** usar impulso del torso, abducción/adducción escapular exagerada, no llevar la barra al pecho/banco.
- **Refs:** Cap. 5 pp. 142–143, 162–166, 196, 297.

### Overhead press (seated/standing)
- **Cues:** espalda recta, agarre pronado a nivel de hombros, extender verticalmente, exhalar arriba; core activo especialmente de pie.
- **Errores:** hiperextensión lumbar; press con carga excesiva sin estabilidad.
- **Nota:** en entrenamiento excéntrico, el coach entrega las mancuernas y asiste la fase concéntrica.
- **Refs:** Cap. 5 pp. 169–170, 195, 331.

### Plank / side plank
- **Cues:** apoyo en antebrazos y puntas de pies, glúteos contraídos, espalda recta en toda su longitud; side plank sobre un antebrazo y borde externo del pie.
- **Función:** estabilizar columna para postura de pelea, transferencia de fuerza y absorción de impactos.
- **Refs:** Cap. 5 p. 150.

### Core específico (hanging leg raise, bird dog, V-up, Superman, rotaciones)
- **Cues:** hanging leg raise: cuerpo equilibrado en suspensión, subir rodillas/piernas sin dolor lumbar; bird dog: minimizar movimiento de cadera, elevar pierna solo hasta mantener espalda recta, sostener 1–4 s; V-up: brazos y piernas ligeramente elevados todo el tiempo; Superman: elevar ~15 cm sosteniendo 2–3 s o isométrico 15–30 s; rotaciones con cable: core rígido, brazos extendidos, variar alturas.
- **Errores:** balanceo en suspensión; arquear lumbar; rotar solo brazos sin torso.
- **Nota:** la mayoría de músculos del core tienen más fibras tipo I → recuperación rápida, pueden trabajarse 2–4×/semana.
- **Refs:** Cap. 5 pp. 186–190.

### Kettlebell swing / snatch
- **Cues (swing):** pies paralelos al ancho de hombros, espalda neutra, bisagra de cadera, péndulo entre piernas y extensión explosiva de cadera hasta altura de pecho; terminar con cuerpo extendido y brazos arriba en la variante completa.
- **Cues (snatch):** unilateral, “pecho orgulloso”, cadera explota, kettlebell cerca del cuerpo, girar alrededor del antebrazo y empujar arriba; agarre suelto para no lastimar manos.
- **Errores:** redondear espalda; usar brazos en lugar de cadera.
- **Refs:** Cap. 5 pp. 137–138, 289.

### Medicine ball (slam, throw, overhead lunge)
- **Cues (slam):** core apretado, extensión completa del cuerpo arriba, golpear ~60 cm delante para evitar rebote en cara, atrapar en el rebote.
- **Cues (overhead lunge):** paso de ~90 cm, codos bloqueados arriba, core firme sin deriva lateral, rodilla trasera toca el suelo.
- **Errores:** espalda no plana en el slam; perder estabilidad del hombro en el lunge.
- **Refs:** Cap. 5 pp. 200–201, 216–218, 278, 294.

### Box jump / saltos pliométricos
- **Cues:** triple extensión (cadera, rodilla, tobillo); brazos atrás-arriba; aterrizar suave en la posición de despegue; en saltos de altura reducir la altura del cajón progresivamente (99→81→41 cm).
- **Errores:** aterrizaje ruidoso/colapso; no completar extensión.
- **Refs:** Cap. 5 pp. 202–203, 302.

### Tire flip
- **Cues:** caderas más bajas que hombros, agarre ancho con dedos debajo, pecho contra la llanta, empujar con piernas a 45°, meter rodilla para continuar, voltear manos y empujar; movimiento continuo sin punto de parada.
- **Errores:** detener el impulso (la llanta regresa); tirar con espalda en vez de piernas.
- **Refs:** Cap. 5 pp. 252–253, 282.

### Nordic hamstring curl
- **Cues:** arrodillado con tobillos fijos, caer lento desde las rodillas (no desde las caderas), controlar lo más abajo posible sin manos, regresar.
- **Progresión segura:** empezar con pocas reps y ROM manejable; DOMS esperado.
- **Refs:** Cap. 5 pp. 155–156; Cap. 6 pp. 364–365.

### Suspensión (TRX/anillas)
- **Cues:** posición de plank rígida en todos los ejercicios; modificar dificultad con la distancia al anclaje; escápulas deprimidas y rotadas externamente en remos.
- **Beneficios fisiológicos señalados:** equilibrio, activación de core, baja compresión espinal, movilidad.
- **Refs:** Cap. 5 pp. 204–209.

### Sprawl
- **Cues:** desde carrera o posición de pelea, caderas al suelo, pecho sobre la línea del oponente imaginario, recuperar postura de pelea rápidamente.
- **Uso:** defensa de takedowns; se entrena con comandos aleatorios para estimular atención y tiempo de reacción.
- **Refs:** Cap. 5 pp. 240, 278, 342.

### Estiramientos (técnica por modo)
- **Estático:** movimiento lento y sostenido hasta leve incomodidad, 15–30 s, máx 4 repeticiones.
- **PNF contract-relax:** partner mueve la articulación al ROM final → 10 s de contracción isométrica contra el partner → 10 s de relajación → nuevo estiramiento más profundo.
- **Dinámico:** movimientos lentos, controlados y específicos del deporte, manteniendo equilibrio y propiocepción; 5–10 min antes de sparring/competición.
- **Balístico:** rebotes; alto riesgo; solo con calentamiento y supervisión, y solo si el deporte lo imita.
- **Refs:** Cap. 6 pp. 370–373.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

> ⚠️ El libro es de **prevención** y S&C, no un manual clínico. Los elementos de “rehab” que contiene son ejercicios usados en retornos de lesión (p. ej., caso Thiago Alves) y deben tratarse como material condicionado a supervisión de fisioterapeuta/médico.

### Lesión / condición: Conmoción y traumatismo de cabeza/cara
- **Zona:** `head`.
- **Etiología:** golpes directos/indirectos con aceleración-desaceleración (whiplash); caídas secundarias tras knockout.
- **Signos:** alteraciones visuales, memoria, concentración, atención.
- **Prevención accionable:** fortalecimiento de cuello (Isoton anteroposterior/lateral hasta fallo local); en entrenamiento usar guantes más acolchados y casco (reduce cortes/laceraciones, efecto limitado sobre conmoción); cambios de reglas como factor protector.
- **Red flags:** toda conmoción requiere manejo profesional; el sistema no debe automatizar retorno.
- **Refs:** Cap. 6 p. 357; Cap. 5 pp. 260–261.

### Lesión / condición: Dolor lumbar del atleta
- **Zona:** `lumbar`.
- **Etiología:** déficit de fuerza y control neuromuscular de la columna; gestos repetidos.
- **Protocolo preventivo:** core (sistemas local, global y de movimiento según NASM); puente unilateral 3×15–20/lado; crunch en Swiss ball 3×30; plank con perturbación 2–3×45–60 s; dedicar al lower back tanto tiempo como a abdominales.
- **Refs:** Cap. 6 pp. 357–359; Cap. 5 pp. 186–190.

### Lesión / condición: Lesiones de codo/muñeca/mano (incl. armbar)
- **Zona:** `elbow`, `wrist`, `hand`.
- **Etiología:** llaves articulares, golpeo, múltiples estilos.
- **Prevención:** técnica, hand wraps; fortalecimiento de muñeca (kettlebell invertido 3×45–60 s/lado; flexión/extensión 3×15–20).
- **Refs:** Cap. 6 pp. 359–360.

### Lesión / condición: Inestabilidad de hombro / manguito rotador
- **Zona:** `shoulder`.
- **Etiología:** Americana/Kimura; caídas.
- **Stadia señaladas:** tratamiento conservador (fisioterapia + fortalecimiento de manguito y estabilizadores escapulares; infiltraciones de cortisona en casos crónicos) → cirugía artroscópica si luxación recurrente/laxitud grande.
- **Criterios de retorno señalados:** entrenamiento 3–4 meses post-cirugía; competición ~6 meses.
- **Ejercicios prehab:** rotación externa/interna con banda en aducción, rotación externa abducida, crossbody lateral raises, protracción de hombro con mancuerna, straight-arm pulldown con banda, remo alto sentado (2–4 series de 30 s bandas; 3×15–25 máquinas).
- **Refs:** Cap. 6 pp. 361–364.

### Lesión / condición: Distensión de isquiotibiales
- **Zona:** `hamstring`.
- **Etiología:** pateo a alta velocidad (5.2–14.1 m/s), extensión excesiva de rodilla, alto volumen de pateo.
- **Prevención:** Nordic curl 3×6–8 lento excéntrico (asociado a menor riesgo de distensión); curl en Swiss ball 3×12–15; controlar volumen técnico.
- **Refs:** Cap. 6 pp. 364–365.

### Lesión / condición: Lesiones de rodilla (ACL/PCL/MCL/LCL/menisco)
- **Zona:** `knee`.
- **Etiología:** contacto directo (ej. patada baja) o indirecto (sprain, sobrecarga); desequilibrio muscular posterior-anterior.
- **Prevención:** fuerza de isquios y cuádriceps; cadena cerrada con ROM reducido (squats, lunges, RDL, side lunge, prensa unilateral); propiocepción (pistol squat en BOSU, superficies inestables, ojos cerrados); evitar desequilibrios musculares en la periodización.
- **⚠️ Rehab ACL:** algunos ejercicios de cadena abierta deben evitarse según fase; el libro lo declara fuera de alcance → no automatizar.
- **Refs:** Cap. 6 pp. 366–367; Cap. 1 p. 356.

### Lesión / condición: Lesiones de tobillo/pie
- **Zona:** `ankle`, `foot`.
- **Etiología:** bloqueo de patadas, foot/ankle locks; sin protección.
- **Prevención:** fortalecimiento de inversión/eversión/dorsiflexión 3×20–30 o hasta fatiga; propiocepción en BOSU/disco 3×45–60 s; vendaje/athletic tape.
- **Refs:** Cap. 6 pp. 368–369.

### Manejo del dolor y umbrales
- El libro no usa una escala de dolor 0–10 para entrenamiento general, pero sí: (1) en estiramientos: estirar solo hasta resistencia leve; el dolor indica detenerse y evaluar lesión; (2) en liberación miofascial: sostener en puntos de dolor percibido 6–9/10 durante 20–30 s; (3) en Isoton: el fallo llega por dolor/ardor muscular (quemazón) y se considera el estímulo hormonal buscado, con tope de 60 s.
- **Refs:** Cap. 6 pp. 373, 380; Cap. 5 pp. 330–331.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

- **Sueño:** el libro no dedica sección al sueño ni da horas recomendadas. ⚠️ No inferir reglas de sueño de este libro. Solo indirectamente: GH liberada antes del sueño se usa como justificación para ubicar Isoton al final del día (Cap. 2 p. 58).
- **Estrés:**
  - El estrés psicológico de la competición eleva la carga interna: una misma actividad externa (p. ej., dummy throws vs control fight vs pelea importante) produce HR y lactato crecientes por componente psicológico (Cap. 1 pp. 35–36). Implicación de regla: el sparring con oponentes no familiares/rotados se usa para recrear el estrés de pelea real.
  - El estrés físico intenso libera catecolaminas y hormonas anabólicas, base de los métodos rusos y de la movilización de grasas (Cap. 2 pp. 51–53, 69).
  - RED-S incluye irritabilidad, depresión y juicio alterado (Cap. 4 p. 112).
- **Nutrición:** ver reglas en §3 (`energy-availability-red-s`, `carbohydrate-targets`, `intra-session-carbs`, `protein-dosing` y protocolos de suplementos). Punto distintivo del libro: priorizar ejercicio intenso para movilización de grasa sobre aeróbico prolongado (ejemplo Lashley, Cap. 2 pp. 69–70), y el concepto de “mini snack” entre sesiones dobles para reducir catabolismo (Cap. 1 pp. 30–31).
- **Entrenar enfermo:** no hay reglas tipo “above/below the neck”. Sí hay: (1) advertencia de que cargas altas prolongadas reducen inmunidad y aumentan riesgo de enfermedad (síndrome de adaptación de Selye, fase de agotamiento) (Cap. 1 pp. 26–27; Cap. 2 p. 55); (2) el mesociclo de incorporación se usa tras enfermedad o trauma con cargas 50–70% progresivas (Cap. 1 p. 17).
- **Timing circadiano del entrenamiento:** la capacidad de trabajo se adapta a la hora de entrenamiento; jiu-jitsu/grappling (competiciones matutinas) → entrenar por la mañana; MMA (eventos nocturnos) → entrenar tarde/noche; atletas con doble sesión desarrollan dos picos de rendimiento (Cap. 1 pp. 33–34).
- **Hidratación y calor:** ver `heat-acclimation` y `hydration-hot-environment` en §3.
- **Inactividad:** no estar totalmente inactivo >3–4 días para no perder adaptaciones mitocondriales (Cap. 2 pp. 64–65).

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal para el **motor de periodización**: bandas de carga de micro/mesociclos, modelos clásico/bloques/ATT, reglas de picos semanales (2–3 picos), deload cada 2–6 semanas con −30% de volumen, y gestión development/tonus.
  - Fuente de **reglas de prescripción de fuerza/potencia/resistencia** con rangos concretos (%1RM, RM, descansos, tempo, velocity loss), incluidas las prescripciones rusas por tipo de fibra (Isoton, intervalos tipo I/II, 10×10, high-speed, activación de fibras rápidas) y los protocolos HIIT con criterio de parada por fatiga (−5%).
  - Fuente de **benchmarks de evaluación** para peleadores (VO2max, umbrales, potencia aláctica, standards de fuerza relativa, SJFT, FSKT, FISRF, Flexitest, VBT).
  - Fuente de **biblioteca de prehab por zona** (cuello, hombro, muñeca, isquios, rodilla, tobillo, core lumbar) con dosis de series/reps.
  - Fuente de **protocolos de flexibilidad** (selección de modo según momento, PNF contract-relax, correctivos de Thomas Test y Overhead Squat).

- **Limitaciones:**
  - Población de **élite de combate**: muchas dosis (p. ej. 10–20 series de development, intervalos tipo II, métodos cardíacos) deben escalarse hacia abajo para usuarios recreativos.
  - Varios protocolos requieren **equipo especializado** (Air300, VersaClimber, Hydra-Gym Powermax 360, MV2 VersaPulley, KINEO, Shuttle MVP) → modelar como sustituciones por equipos comunes (bike, rower, bandas, med ball).
  - Los métodos rusos de Seluyanov (hiperplasia, corazón, Isoton avanzado) incluyen **advertencias de salud** (presión arterial, riesgo cardíaco, acidez excesiva): deben marcarse como “requiere supervisión” y no auto-prescribirse.
  - El capítulo de nutrición es **general**; dejar la prescripción dietética fina al stack de nutrición existente y usar aquí solo reglas de disponibilidad energética, CHO/proteína por kg y timing de suplementos.
  - La prevención de lesiones **no es diagnóstico**: conmociones, luxaciones recurrentes y rehab ACL requieren profesional; el sistema solo puede sugerir ejercicios preventivos y red flags.

- **Recomendaciones específicas (siguientes pasos):**
  1. Crear `rules/periodization-combat.ts` con: bandas de carga de microciclos (`microcycle-load-bands`), `peak-days-and-deload`, `att-adapted-mesocycle`, `session-rpe-monitoring` y `recovery-hours-by-quality`.
  2. Crear `rules/fiber-methods.ts` con los métodos por tipo de fibra: `isoton-protocol`, `interval-type-1`, `interval-10x10`, `interval-type-2`, `fast-twitch-activation`, `high-speed-interval`, `mma-oriented-sparring-load`, cada uno con intent `development`/`tonus`.
  3. Añadir SkillPaths: `att-macrocycle-phases`, `power-method-progression`, `band-striking-progression`, `band-takedown-progression`, `flexibility-screen-corrective`; poblar `primaryCues`/`commonFaults` de los ejercicios base (squat, deadlift, bench, pull-up, remo, press, kettlebell swing, med ball, tire flip, Nordic curl, sprawl) con la sección 5.
  4. Crear `rules/prehab-zones.ts` con dosis por zona (§6) y `rules/velocity-loss-thresholds` para autorregulación VBT.
  5. Marcar con flag `requires-supervision`: `heart-interval-method`, `gmf-hypertrophy-hyperplasia`, `interval-type-2`, `eccentric-overload-params` (>100%) y todo retorno post-lesión.

---

### Notas finales de extracción
- ⚠️ El libro combina fuentes clásicas (Matveev, Platonov) y rusas contemporáneas (Seluyanov) con práctica de ATT; cuando hay variaciones entre capítulos (p. ej. Isoton: 10–60% RM en Cap. 2 vs 30–60% 1RM en Cap. 5), se tomó la versión más reciente/consolidada del Cap. 5 y se señaló la diferencia.
- ⚠️ Algunas tablas de ejercicios usan notación “RM” como carga objetivo y otras usan %1RM; ambas se conservaron según el texto.
- ⚠️ En el correctivo de inclinación anterior del OHS, el libro indica “2–4 repeticiones” (probablemente error por “series”); se marcó para validación antes de implementarlo como regla.
- ⚠️ Los datos epidemiológicos de lesiones difieren entre fuentes citadas dentro del propio libro (UFC vs Rainey); se presentan ambas para contexto, sin convertirlas en regla accionable.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# Verificación de completitud + Ejecución de las 5 recomendaciones

## A) Verificación de datos (segunda pasada sobre el texto completo)

Revisé capítulo por capítulo contra mi extracción previa. Estado:

| Capítulo | Estado | Datos verificados/añadidos en esta pasada |
|---|---|---|
| 1. Metodología | ✅ Completo | Añado ahora: tabla de **indicadores de fatiga** (Tabla 1.2), **circuitos de preparación general** (Tabla 1.4: 2–3 series sin descanso entre ejercicios, 60–90 s entre series) y **específica** (Tabla 1.5: 3 rounds de 5 min, 50 s por ejercicio, 1 min de descanso), estructura competitiva MMA (Tabla 1.8: duración 15–25 min, 1–3 peleas/día, descanso 1 min), y el **modelo A adaptado para grassroots** (60–80% de carga todo el año esperando pelea) |
| 2. Diseño de programas | ✅ Completo | Verificados: protocolo GMF (20–40 s al fallo + 2 forzadas), Isoton Cap. 2 (10–60% RM), mitocondrias GMF (3–40 s), corazón (60–120 s con HR máximo solo 30–60 s), LVD (HR 120–150, horas, 2–3 sesiones/día), calor (todas las cifras), detraining mitocondrial |
| 3. Evaluación | ✅ Completo | Añado: **fórmula vVO2max** (VO2max = 2.209 + 3.163 × vVO2max + 0.000525542 × vVO2max²), protocolo TLim, **lista completa de los 20 movimientos del Flexitest**, tabla de referencia de sentadilla (Tabla 3.13: Excellent >150% BW hombres / >110% mujeres), protocolo sprint bicicleta (carga = 0.09 × peso kg; 130–150 rpm) |
| 4. Nutrición | ✅ Completo | Todos los protocolos de suplementos con dosis/timing/estudios de combate verificados |
| 5. Métodos | ✅ Completo | Las ~30 tablas de programas (5.1–5.49) con dosis semanales verificadas; parámetros de todos los métodos de intervalo; mesociclos ejemplo A–D |
| 6. Prevención | ✅ Completo | Dosis de todos los ejercicios preventivos, criterios Thomas Test y OHS, tabla comparativa de estiramientos, tiempos de retorno post-cirugía de hombro |

### ⚠️ Información que NO puedo resolver sin las ayudas visuales

1. **Flexitest — criterios de puntuación 0–4 por movimiento.** Tengo los nombres de los 20 movimientos (dorsiflexión de tobillo, flexión plantar, flexión/extensión de rodilla, flexión/extensión/aducción/abducción de cadera, flexión/extensión/flexión lateral de tronco, flexión/extensión de muñeca, flexión/extensión de codo, los 4 movimientos de hombro…), pero los **mapas angulares de referencia para asignar 0–4 puntos** están en los gráficos de las figuras 3.19 y no en el texto. → Si quieres implementar el scoring automático del Flexitest, necesito esas páginas con los mapas.
2. **Figura 1.19 (modelos A–E de periodización anual).** El texto describe sus características (2–3 picos/año; B y C con transiciones cortas y transición larga de 2–4 semanas solo a fin de año), pero el trazado exacto de las ondas de carga por modelo es visual. Con el texto basta para reglas; no basta para reproducir los gráficos.
3. **Fotos de técnica que el texto solo referencia** (“véase la figura 5.20”, etc.). En casi todos los casos la descripción completa existe en otra sección del mismo libro (las verifiqué y están cubiertas); la pérdida es mínima.
4. **Detalle fino de algunos ángulos en ejercicios con banda** (figuras 5.286–5.315). El texto describe paso a paso cada técnica de derribo con banda de forma bastante completa; si algún coach quiere validar la biomecánica exacta, esas fotos ayudarían.
5. **Interpretación visual del Thomas Test y OHS**: el texto da las reglas (muslo paralelo al piso, rodilla 80–90°, pierna abducida, rodillas hacia dentro/fuera, inclinación anterior), que son suficientes para implementar el screening; las fotos solo afinarían umbrales.

**Conclusión:** salvo el scoring por movimiento del Flexitest, todo el contenido accionable está extraído y es implementable. Procedo con las 5 recomendaciones.

---

## B) Ejecución de las 5 recomendaciones

> Formato: especificaciones listas para que un agente de implementación las convierta en código. Cada regla incluye id, tipo, métrica, parámetros, condiciones, fuente y lógica de validación.

---

### ENTREGABLE 1 — `rules/periodization-combat` (motor de periodización)

#### R-01: `load.intensity-volume-tradeoff`
- **Tipo:** restricción estructural. **Métrica:** intensidad (%1RM o velocidad) × volumen (reps/series/duración).
- **Parámetros:** nunca programar volumen máximo + intensidad máxima en la misma sesión; relación inversa (a mayor %1RM, menos reps posibles; a mayor velocidad/distancia, menos duración).
- **Fuente:** Cap. 1 pp. 4–5.
- **Lógica:** si `session.intensity == MAX && session.volume == MAX` → error de validación.

#### R-02: `rest.work-to-rest-ratios`
- **Tipo:** descanso intra-sesión. **Métrica:** ratio trabajo:descanso.
- **Parámetros:**
  - Resistencia glucolítica → 1:3 (ej. 30 s máx → ≥90 s).
  - Aeróbico intensivo → 1:0.25–0.5 para trabajos de 30 s–2.5 min.
  - Aeróbico extensivo → trabajos de 2.5–10 min con 45–90 s fijos.
  - Fuerza/velocidad/potencia → descanso ordinario 3–4 min, hasta 8 min (recuperación completa).
- **Fuente:** Cap. 1 pp. 6–7.

#### R-03: `rest.session-types`
- **Tipo:** descanso entre sesiones. **Valores:** `ordinary` (capacidad de trabajo vuelve al nivel previo), `strict` (más corto, suma efectos acumulativos), `supercompensatory` (tras serie de strict; capacidad mayor que antes). No usar intervalos más largos que el supercompensatorio (se pierde el efecto).
- **Fuente:** Cap. 1 pp. 7–8.

#### R-04: `recovery.hours-by-quality`
- **Tipo:** frecuencia/descanso. **Métrica:** horas de recuperación requeridas por calidad entrenada.
- **Parámetros:** velocidad 24–36 h · velocidad-resistencia aláctica hasta 48 h · fuerza máxima 48 h · velocidad o fuerza 24–48 h · resistencia aeróbica 48–72 h · resistencia glucolítica 48–96 h · técnica/skills ~6 h.
- **Fuente:** Cap. 1 Tabla 1.1 p. 7.
- **Lógica:** al programar la siguiente sesión de la misma calidad, validar `elapsed >= minHours`.

#### R-05: `monitoring.session-rpe`
- **Tipo:** monitoreo de carga interna. **Métrica:** arbitraryUnits = RPE (1–10) × duración total en minutos (incluye calentamiento, cool-down y pausas de intervalo).
- **Protocolo:** preguntar “¿qué tan intensa fue la sesión?” **30 min después** de terminar (ni antes, ni mucho después). Comparar carga externa planificada vs interna real y ajustar.
- **Fuente:** Cap. 1 pp. 9–10.
- **Ejemplo de validación:** RPE 6 × 40 min = 240 UA.

#### R-06: `monitoring.fatigue-indicators`
- **Tipo:** monitoreo cualitativo (suplemento al RPE cuando no hay instrumentos).
- **Parámetros por nivel de fatiga (ligera / severa / máxima):**
  - Concentración: normal → empeora diferenciación/absorción → atención muy reducida, nerviosismo, reacción lenta.
  - Coordinación: ejecución correcta → más errores, imprecisión, inseguridad → errores graves, descoordinación.
  - Sudoración: poca/media (según ambiente) → abundante en tren superior → abundante en todo el cuerpo.
  - Color de piel: enrojecimiento leve → fuerte → muy fuerte o palidez inusual.
- **Fuente:** Cap. 1 Tabla 1.2 p. 9.
- **Lógica:** si ≥2 signos de fatiga máxima → sugerir detener/reducir sesión.

#### R-07: `periodization.microcycle-load-bands`
- **Tipo:** estructura de carga semanal. **Métrica:** % de la carga total máxima del pico competitivo.
- **Parámetros:** estabilizador 40–60% · ordinario 60–80% · shock 80–100% · precompetitivo según calendario (7–14 días, tapering) · control (batería de tests o competencia control) · competencia (principal) · recuperación 20–40%.
- **Fuente:** Cap. 1 Tabla 1.9 p. 20.

#### R-08: `periodization.mesocycle-load-bands`
- **Parámetros:** incorporación 50–70% durante 3–4 semanas (tras enfermedad/trauma o inicio de temporada; predominio de ejercicios generales, carga progresiva desde bajo) · desarrollo 60–80% durante 4–6 semanas (creciente/decreciente u oscilatorio) · estabilización ~2 semanas (reducir ligeramente, preferentemente volumen; predominio competitivo/especial) · control ~2 semanas (puede incluir competencias menores) · recuperación 30–50% durante 2–4 semanas (transición, tras cargas máximas, o tapering) · precompetitivo 4–6 semanas antes de la pelea (modelar condiciones: altitud, horario, formato) · competitivo 4–6 semanas (en MMA puede ser ~2 semanas).
- **Fuente:** Cap. 1 pp. 17–19.

#### R-09: `periodization.block-atr`
- **Tipo:** modelo de bloques para calendario denso (torneos con varias peleas en <6 meses).
- **Parámetros:** acumulación 2–6 semanas (volumen alto, intensidad moderada: fuerza básica, resistencia básica, técnica general, corrección de errores) → transmutación 2–4 semanas (volumen óptimo, intensidad alta: fuerza específica, resistencia específica, técnica/táctica impredecible; el más agotador fisiológicamente) → realización 2–3 semanas (tapering: intensidad máxima, descanso, competencia). Repetir bloques con importancia competitiva creciente.
- **Condiciones:** solo atletas experimentados.
- **Fuente:** Cap. 1 pp. 22–25.

#### R-10: `periodization.att-adapted-mesocycle`
- **Tipo:** modelo ATT (intensidad siempre alta, volumen ondulado).
- **Parámetros:**
  - Alternar 2 microciclos de fuerza (volumen alto de fuerza) + 2 microciclos aeróbicos (volumen bajo de fuerza, alto aeróbico).
  - Dentro de cada semana: 2–3 picos de fuerza intercalados con 2–3 picos aeróbicos.
  - Combinación básica para principiantes: Lun/Mié/Vie resistencia; Mar/Jue aeróbico por método sprint; Sáb recuperación activa; Dom libre.
  - Semana 4 = recuperación activa: alta intensidad, bajo volumen (reducir series de 6–12 a 3 o incluso 1 por grupo muscular; cambiar formato aeróbico: correr→bicicleta o viceversa).
- **Ventaja declarada:** evita microciclo de recuperación cada 3–4 semanas y evita sobreentrenamiento en periodo preparatorio; los microciclos de recuperación solo son obligatorios al entrar/salir del periodo competitivo.
- **Base:** principio del tamaño (cargas bajas no reclutan fibras rápidas → la intensidad se mantiene alta todo el mesociclo).
- **Fuente:** Cap. 1 pp. 27–29.

#### R-11: `session.concurrent-training-order`
- **Tipo:** estructura de sesión doble/combinada.
- **Parámetros:**
  - Combinaciones anabólicas (salud/preparación): aeróbico baja intensidad → fuerza; flexibilidad → fuerza; técnica → fuerza; terminar con fuerza.
  - Combinaciones catabólicas (pérdida de masa; no recomendadas salvo corte de peso): fuerza → aeróbico intenso; fuerza → aeróbico largo de baja intensidad; aeróbico intenso → flexibilidad.
  - Si hay dos sesiones cercanas: intercalar **mini snack** (líquido o sólido; si el objetivo es perder peso, evitar azúcares y preferir proteína).
- **Fuente:** Cap. 1 pp. 29–31.

#### R-12: `periodization.att-macrocycle-phases`
- **Tipo:** macroestructura anual/de campamento.
- **Parámetros:** 5 fases: acondicionamiento inicial (adaptación anatómica) → hipertrofia → fuerza → potencia → circuito MMA (potencia-resistencia). Duración estándar 4 semanas por fase; total ~12 semanas + 1 semana final para dar el peso y supercompensar. Planificar hacia atrás desde la fecha de la pelea. Eliminar fases según el atleta (p. ej., quien corta mucho peso elimina hipertrofia → ~17 semanas totales con ajuste). Entre peleas: 6–8 sesiones/semana centradas en acondicionamiento inicial + técnica deficiente.
- **Fuente:** Cap. 1 pp. 31–33.

#### R-13: `periodization.sparring-wave`
- **Tipo:** volumen de sparring.
- **Parámetros:** semana 1: 1 round de sombra + 4 de sparring; semana 2: + 1 round de jiu-jitsu (6); semana 3: + 2 rounds de jiu-jitsu (7, pico); reiniciar ciclo 5-6-7. Calentamiento previo ~15 min.
- **Fuente:** Cap. 1 pp. 33–34.

#### R-14: `periodization.weekly-intensity-peaks`
- **Parámetros:** dentro de la semana, 3 picos de intensidad de combate (mar/jue/sáb = sparring); el resto de días cargas moderadas con enfoque técnico. Usar rotación de compañeros/equipos externos para recrear el estrés psicológico de pelea real (el HR y lactato suben por componente psicológico: dummy throws < control fight < pelea importante con la misma actividad externa).
- **Fuente:** Cap. 1 pp. 33–36.

#### R-15: `session.structure`
- **Parámetros:** calentamiento 10–20 min elevando HR a 110–130 bpm (umbral aeróbico) con grupos musculares grandes + estiramientos (10–30 s × 2–4 por articulación); parte principal según plan; cool-down 5–15 min aeróbico a 110–130 bpm + ~5 min de relajación/estiramiento. Calentamiento específico debe parecerse al contenido de la sesión.
- **Fuente:** Cap. 1 pp. 37–38.

#### R-16: `load.peak-days-and-deload`
- **Tipo:** gestión de fatiga crónica.
- **Parámetros:** no más de 2 días pesados de desarrollo consecutivos (alternar development/tonus); 2–3 días pico de carga por semana; >4 días pico/semana = alto riesgo de sobreentrenamiento; semana de descarga cada 2–6 semanas con ~30% menos volumen manteniendo intensidad.
- **Fuente:** Cap. 5 p. 352.

#### R-17: `competition.density`
- **Parámetros:** número óptimo de competencias mayores 3–10/año; en MMA puede ser menor, con intervalos entre competencias normalmente >20 días. Estructura MMA: duración máxima del combate 15–25 min; 1–3 peleas por día de evento; tiempo total de competencia 17–29 min; descanso entre rounds 1 min.
- **Fuente:** Cap. 1 pp. 12–14, 16.

#### R-18: `session.training-time-alignment`
- **Parámetros:** el cuerpo se adapta a la hora de entrenamiento; modelar según horario competitivo: jiu-jitsu/grappling (torneos matutinos) → entrenar por la mañana; MMA (eventos nocturnos) → entrenar tarde/noche. Atletas con doble sesión desarrollan dos picos de rendimiento cerca de sus horas de entrenamiento.
- **Fuente:** Cap. 1 pp. 33–34.

#### R-19: `exercise.mode-selection`
- **Tipo:** clasificación de medios.
- **Parámetros:** generales (base multifacética: flexibilidad, resistencia aeróbica, fuerza general, resistencia muscular localizada) → específicos (modelan componentes de la competencia: resistencia glucolítica, potencia, velocidad de ejecución específica, técnica impredecible) → competitivos (situación de pelea real o simulada). El volumen competitivo debe ser mucho menor que general+específico. Plantillas listas: circuito general (Tabla 1.4: 10 ejercicios, 2–3 series sin pausa entre ejercicios, 60–90 s entre series) y circuito específico (Tabla 1.5: 3 rounds de 5 min, estaciones de 50 s, 1 min entre rounds, alta intensidad).
- **Fuente:** Cap. 1 pp. 10–13.

#### R-20: `periodization.grassroots-waiting-load`
- **Parámetros:** atletas de equipos base/eventos menores sin fecha de pelea: entrenar prácticamente todo el año al 60–80% de la carga máxima (variante adaptada del modelo A), con 6–8 sesiones/semana, esperando contrato; atletas amateur que periodizan pueden usar el modelo A como guía.
- **Fuente:** Cap. 1 p. 26.

---

### ENTREGABLE 2 — `rules/fiber-methods` (métodos rusos y de intervalo por tipo de fibra)

> Convención de dosificación del libro: `tonus` = mantener (más frecuencia, menos volumen); `development` = estimular ganancia (más volumen, menos frecuencia). Todos los métodos incluyen proteína objetivo y condiciones de parada.

#### F-01: `gmf.myofibril-hyperplasia` (fibras glucolíticas — fuerza/hipertrofia)
- **Objetivo:** aumentar miofibrillas, fuerza y velocidad de contracción de fibras rápidas.
- **Intensidad:** 60–100% de 1RM. **Duración:** 20–40 s hasta el fallo + 2 repeticiones forzadas.
- **Descanso:** 5–10 min hasta mínima concentración de H+ (con 5 min de descanso activo a HR 110–130 se acelera el aclaramiento). Con descanso pasivo 5–7 series; con descanso activo 10–15 series.
- **Series:** tonus 1–3 · development 6–10 por grupo muscular (≈12–20 min de trabajo útil).
- **Frecuencia:** development 1 sesión/semana por grupo (repetir tras 7–10 días, tiempo de síntesis de miofibrillas) · tonus 3–7 sesiones/semana (media intensidad, mitad o menos del volumen de development, p. ej. día 4 del microciclo).
- **Nutrición asociada:** proteína animal 2–3 g/kg.
- **Límites:** no usar más de 6 microciclos seguidos (riesgo de sobreentrenamiento); la elevación hormonal persiste 2–3 días y al día 4 vuelve a la normalidad.
- **⚠️ Contraindicaciones:** la presión sistólica puede subir a 200–250 mmHg durante el esfuerzo; advertido para mayores, hipertensos, no atletas y población de salud.
- **Fuente:** Cap. 2 pp. 51–57.

#### F-02: `isoton.protocol` (fibras oxidativas — método estático-dinámico)
- **Objetivo:** hiperplasia de miofibrillas en fibras tipo I; aumenta umbral aeróbico y resistencia sin carga mecánica alta.
- **Ejecución:** ROM parcial bajo tensión constante, sin relajar nunca el músculo, en el rango de mayor esfuerzo (ej. back squat: bajar hasta cadera bajo rodilla, subir solo hasta 100–110° de flexión de rodilla).
- **Intensidad:** 30–60% de 1RM (reclutar solo fibras lentas). ⚠️ El Cap. 2 indica 10–60% RM; se adopta 30–60% del Cap. 5 por ser la versión práctica consolidada.
- **Estructura:** superserie de 30 s de trabajo + 30 s de descanso, repetida 3–6 veces en el mismo ejercicio; la primera serie del superset no va al fallo (~30 s), las siguientes sí (fallo por ardor). Duración por serie 30–45 s; **nunca exceder 60 s** (acumulación excesiva de H+ → daño).
- **Descansos:** entre superseries 30–60 s; entre bloques de superseries 5–10 min de descanso activo o trabajando otro grupo muscular distante.
- **Series:** tonus 1–3 · development 4–10 por grupo.
- **Frecuencia:** 1–2+ sesiones/día; repetir por grupo cada 2–5 días; si se usa volumen máximo, solo 1×/semana por grupo.
- **Timing:** mejor al final de la sesión y al final del día (GH pre-sueño).
- **Progresión de referencia (Tabla 5.43):** 3→6 superseries en 4 semanas, con carga 35%→40% 1RM.
- **Fuente:** Cap. 2 pp. 57–59; Cap. 5 pp. 330–336.

#### F-03: `mitochondrial.gmf-hyperplasia`
- **Objetivo:** mitocondrias en fibras rápidas; capacidad de trabajo.
- **Intensidad de contracción:** 60–100% del máximo. **Duración:** 3–40 s hasta fatiga local (ejemplos: sprint 5–10 s, 10 saltos, 10 push-ups).
- **Descanso:** 45 s–5 min (hasta mínima concentración de H+).
- **Series:** tonus 10 · development 20–40. **Frecuencia:** tonus 2–3/semana · development 5–7/semana.
- **Factores requeridos:** actividad de las fibras, proteína ~2 g/kg, hormonas por estrés físico, presencia de oxígeno, mínima concentración de H+.
- **Fuente:** Cap. 2 p. 62.

#### F-04: `aerobic.base-conditions`
- **Parámetros:** intensidad ≤ potencia del umbral anaeróbico cuando el trabajo es prolongado; volumen 5–20 min por bloque (más largo puede acidificar sangre y fibras intermedias si se supera el umbral); descanso 2–10 min; duración total máx ~60–90 min de trabajo puro (límite por glucógeno); el volumen máximo se repite cada 2–3 días (resíntesis de glucógeno).
- **Fuente:** Cap. 2 pp. 61–62.

#### F-05: `aerobic.sprint-method`
- **Ejecución:** cada contracción casi máxima, pero la potencia media del ejercicio no debe superar la del umbral anaeróbico; descansos organizados que garanticen limpieza de metabolitos. Activa todas o casi todas las fibras.
- **Eficiencia:** resultados ~200% superiores al continuo al 40% de VO2max, en mucho menos tiempo.
- **Condiciones:** solo atletas muy entrenados; cerca de la competición, tras mesociclo preparatorio con métodos menos intensos; progresión recomendada para principiantes: método estándar → método de intervalo → método sprint.
- **⚠️ Riesgo:** no alargar demasiado los estímulos (sobrecarga cardíaca; riesgo de paro cardíaco súbito deportivo).
- **Fuente:** Cap. 2 pp. 62–64.

#### F-06: `aerobic.detraining-window`
- **Parámetros:** ~4–5 semanas de entrenamiento duplican el contenido mitocondrial (meseta desde la semana 5); 1 semana de inactividad pierde ~50% de la ganancia; 5 semanas de inactividad pierde todo; se requieren ~4 semanas para recuperar lo perdido en la primera semana. **Regla:** no permanecer totalmente inactivo más de 3–4 días. Quienes buscan perder peso: priorizar ejercicios intensos y cortos + aeróbico largo de baja intensidad (movilización de ácidos grasos hasta 8×).
- **Fuente:** Cap. 2 pp. 64–65.

#### F-07: `interval.type-1`
- **Objetivo:** potencia de fibras rápidas/glucolíticas, mitocondrias, capacidad aeróbica muscular, potencia en el umbral anaeróbico, resistencia a la fatiga.
- **Intensidad:** 60–80% de 1RM. **Ejecución:** 1 repetición + pausa de 1–2 s, repetir hasta fatiga local. **Duración del trabajo:** 30–120 s.
- **Descanso entre series:** 2–5 min (según tiempo bajo tensión). **Series:** tonus 5–10 · development 10–20. **Frecuencia:** 1–3×/semana.
- **Aplicable con:** ejercicios técnicos/específicos (saco, pads) o de fuerza (power clean, deadlift, box jump bajo, bench pull, bench press, sledgehammer, bodyweight row, pull-up, remos con banda, plyo push-up, rope climb, sprawls).
- **Fuente:** Cap. 5 pp. 336–343.

#### F-08: `interval.10x10`
- **Objetivo:** mitocondrias en fibras rápidas, capacidad aeróbica muscular, resistencia.
- **Intensidad:** 40–60% de 1RM (más ligera que tipo I). **Ejecución:** tempo rápido con pausa entre repeticiones y al final de cada serie; cambiar de ejercicio ante las **primeras señales** de fatiga local (no llevar a fatiga severa).
- **Estructura:** 10 repeticiones por serie; 2–3 ejercicios por circuito (agonista-antagonista o cuerpo completo, p. ej. 10 push-ups + 1 min descanso + 10 bodyweight rows; o circuito plyo push-up + pull-up + low box jump); 5–10 series (10 óptimo en élite); descanso entre series ≤1 min si es necesario; 1–3 circuitos; descanso entre circuitos 5–15 min (estiramientos o trabajo de baja intensidad).
- **Frecuencia:** 1–3×/semana.
- **Fuente:** Cap. 5 pp. 343–344.

#### F-09: `interval.type-2`
- **Objetivo:** igual que tipo I pero con cargas pesadas; mejora biomecánica y fuerza de movimientos deportivos; modela la actividad competitiva.
- **Intensidad:** 80–100% de 1RM. **Tempo:** rápido/explosivo. **Repeticiones:** 1–5. **Duración:** 20–30 s hasta fatiga local.
- **Descanso:** 2–5 min. **Series:** tonus 5–10 · development 10–20.
- **Frecuencia:** solo 1×/semana con volumen máximo, o 2×/semana con volumen bajo.
- **⚠️ Condiciones:** método avanzado; requiere spotter o asistencia del coach.
- **Fuente:** Cap. 5 p. 344.

#### F-10: `fast-twitch.activation`
- **Objetivo:** fuerza absoluta y capacidad de unidades motoras de alto umbral.
- **Intensidad:** 90–100% de 1RM. **Repeticiones:** 1–3 hasta el fallo. **Descanso:** 2–5 min. **Series:** tonus 1–5 · development 10–12.
- **Ejercicios de referencia:** bench press pesado con spotter, power clean, weighted pull-up, back squat, high box jump, leg press.
- **Fuente:** Cap. 5 pp. 344–347.

#### F-11: `high-speed.interval`
- **Objetivo:** velocidad, potencia, resistencia a la fatiga vía umbral anaeróbico.
- **Intensidad:** 80–100% del máximo. **Duración:** 5 s al 95–100% del esfuerzo, o 10–15 s al 80–90%. Ritmo rápido o máximo según ejercicio.
- **Descanso:** 2–3 min. **Series:** tonus 5–10 · development 10–20.
- **Ejercicios de referencia:** medicine ball slam, one-arm medicine ball throw, rope climb, medicine ball overhead throw.
- **Fuente:** Cap. 5 pp. 348–350.

#### F-12: `mma-oriented.training`
- **Objetivo:** mitocondrias en fibras rápidas, potencia en el umbral, minimizar acidez; mejora biomecánica/táctica del sparring.
- **Parámetros:** intensidad y ritmo competitivos; trabajo 30–120 s hasta fatiga local; descanso 5–10 min; series tonus 1–5 · development 5–10.
- **Fuente:** Cap. 5 p. 350.

#### F-13: `heart.interval-method` ⚠️ `requires-supervision`
- **Objetivo:** hipertrofia del miocardio (contracción).
- **Intensidad:** por encima de VO2max. **Duración del ejercicio:** 60–120 s, manteniendo el HR máximo **solo 30–60 s** (más tiempo aumenta riesgo de sobrecarga cardíaca). **Descanso:** 120–180 s hasta HR ~120. **Volumen:** total 4–10 min de trabajo (30–40 aceleraciones; límite ligado a glucógeno, 60–90 min de tiempo puro). **Frecuencia:** repetir 4–7 días después de una sesión de volumen máximo.
- **Evidencia de riesgo:** cargas diarias inapropiadas producen distrofia de fibras del miocardio y de vasos (experimento con ratas: grupo progresivo = más mitocondrias y dilatación potencial; grupo máximo desde el inicio = alteración estructural y sobreentrenamiento).
- **Fuente:** Cap. 2 pp. 67–68.

#### F-14: `heart.dilation-method` ⚠️ `requires-supervision`
- **Objetivo:** dilatación del ventrículo izquierdo (volumen sistólico máximo).
- **Parámetros:** trabajar a HR 120–150 bpm; duración de horas; puede requerir 2–3 sesiones diarias para lograr el estímulo.
- **Fuente:** Cap. 2 p. 68.

#### F-15: `methods.frequency-guidance`
- **Parámetros:** Isoton, 10×10 e intervalo tipo I tienen baja demanda neurológica → pueden incorporarse hasta 3×/semana; los métodos pesados (tipo II, activación de fibras rápidas, GMF hyperplasia) requieren más recuperación (ver frecuencias individuales); split routines solo para deficiencias específicas o off-season, no en campamento.
- **Fuente:** Cap. 5 pp. 352–353.

#### F-16: Plantillas de micro/mesociclo (Tablas 5.44–5.49)
- **Microciclo mitocondrial:** Lun high-speed (development) · Mar 10×10 (tonus) · Mié intervalo I (development) · Jue 10×10 (tonus) · Vie high-speed (development) · Sáb intervalo I (tonus) · Dom descanso.
- **Microciclo velocidad-fuerza:** sustituye 2 días por resistance training (development) e Isoton (development).
- **Mesociclos A–D:** distribuyen tonus/development en 3 semanas alternando intervalo II, 10×10, intervalo I, MMA-oriented, resistance training e Isoton (patrón: semanas 1–2 mayormente tonus con 1 estímulo development el sábado; semana 3 sube a development en intervalo II, intervalo I y MMA-oriented).
- **Fuente:** Cap. 5 pp. 350–352.

---

### ENTREGABLE 3 — SkillPaths + librería de cues

#### SkillPath: `att-macrocycle-phases`
- **Disciplina:** S&C combate. **Objetivo final:** peak performance el día de la pelea (supercompensación + peso logrado). **Requisito previo:** evaluación diagnóstica; AA completada sin dolor.

| Step | Nombre | Descripción | Criterio de avance | Errores típicos | Fuente |
|---|---|---|---|---|---|
| 1 | Adaptación anatómica | Cuerpo completo, cargas ligeras-moderadas, 1–3×15–20 reps, 1–3×/semana | 2–4 semanas sin molestias articulares/tendinosas | Saltarse la fase | Cap. 1 pp. 31–33; Cap. 5 pp. 140–148 |
| 2 | Hipertrofia (opcional) | Cargas moderadas-altas, volumen alto, tempo controlado | Masa funcional ganada sin comprometer categoría | Añadir masa que impida dar el peso → eliminar fase | Cap. 1 pp. 31–33; Cap. 5 pp. 151–152 |
| 3 | Fuerza | 75–90% 1RM, 2–6 RM, 2–6 series, descanso 2–5 min | Técnica estable bajo cargas máximas relativas | Degradación técnica, valgo | Cap. 5 pp. 147–151 |
| 4 | Potencia | 30–60% 1RM con intención máxima, contrastes, pliometría | Velocidad sostenida sin caída | Acumular fatiga que reduce velocidad | Cap. 2 pp. 46–48; Cap. 5 pp. 210–223 |
| 5 | Circuito MMA | Rounds de ~5 min mezclando fuerza, pliometría y gestos específicos | Completar rounds manteniendo output y técnica | Degradación tardía | Cap. 5 pp. 224–303 |
| 6 | Semana de peso | Tapering + corte controlado + supercompensación | Peso alcanzado con recuperación | Corte agresivo | Cap. 1 pp. 31–33 |

- **Variante “surfing the curve”:** iniciar en el centro (acondicionamiento), subir hacia la izquierda (hipertrofia/fuerza con cargas altas), surfear hacia la derecha (potencia/velocidad con cargas ligeras y alta velocidad). Fuente: Cap. 1 pp. 32–33.

#### SkillPath: `power-method-progression`
- **Requisito de entrada:** base de fuerza; los métodos avanzados benefician más a atletas con mayor fuerza máxima.

| Step | Método | Parámetros clave | Criterio de avance | Fuente |
|---|---|---|---|---|
| 1 | Aceleración compensatoria | 30–90% 1RM, intención máxima de acelerar la barra; ganancias en ~5 semanas | Intención máxima estable sin fallo técnico | Cap. 5 pp. 211–212 |
| 2 | Resistencia acomodada (bandas/cadenas) | P. ej. 12→6 × 2–3 reps al 60–80% con bandas ligeras→medias; ejercicios de cadena cerrada | Estabilidad del core bajo tensión variable | Cap. 5 pp. 212–213 |
| 3 | Contraste pesado-ligero (PAP) | P. ej. 8×3 al 75–80% + 8×2–3 saltos/plyo | Potenciación visible en el ejercicio ligero | Cap. 5 pp. 214–215 |
| 4 | French contrast | 3 ejercicios por serie (general→especial→específico), 10 s entre ejercicios, 60–90 s entre series | Dominio técnico de los 3 eslabones | Cap. 5 pp. 221–223 |
| 5 | Contraste específico | 6 reps pesadas + 10 s máximas por lado (progresión 3→6 series en 4 semanas) | Transferencia a gesto de pelea | Cap. 5 Tabla 5.21 |

#### SkillPath: `band-striking-progression`
- **Disciplina:** striking condicionado. **Frecuencia:** 1×/semana fuera de campamento, 2×/semana en campamento; principiantes 2–5 rounds hasta 4 semanas.
- **Estructura del round:** 30 s con banda a velocidad moderada + 1 min sin banda a máxima velocidad con pads (repetir hasta completar 5 min); round final solo pads a máxima potencia/velocidad.

| Semana | Progresión (según Tabla 5.39) |
|---|---|
| 1–2 | Bandas estándar; punches: 30 s banda + 30 s sin banda; rodillas: 30+30 alternando; patadas: 5 con banda + 5 sin banda |
| 3–4 | Bandas pesadas; punches: 30 s banda + 1 min sin banda; rodillas: 30 s + 45 s; patadas: 5 con banda + 10 sin banda; último round de pads a velocidad rápida |

- **Fuente:** Cap. 5 pp. 304–306.

#### SkillPath: `band-takedown-progression`
- **Disciplina:** derribos con banda (método ruso, >20 años de uso). **Técnicas disponibles:** derribo por la espalda, dos manos al oponente, agarre de brazo+torso, lift a hombro (de pie y de rodillas), suplex, preparación de derribo, trips de pierna interna/externa. Trabajar 1–2 técnicas a la vez hasta dominarlas; tensión de banda progresiva según capacidad; cambiar/incorporar ejercicios cada 4–6 semanas.

| Semana | Dosis (según Tabla 5.40) |
|---|---|
| 1 | 3 × 30 reps × 3 días (énfasis en forma correcta) |
| 2 | 5 × 30 reps × 3 días (forma correcta) |
| 3 | 3–5 × 30 s × 3 días (alta velocidad) |
| 4 | 5 × 10 s × 3 días (velocidad máxima) |

- **Fuente:** Cap. 5 pp. 307–314.

#### SkillPath: `flexibility-screen-corrective`
| Step | Acción | Detalle | Fuente |
|---|---|---|---|
| 1 | Flexitest baseline | 20 movimientos pasivos/activos, escala 0–4, movimiento lento hasta resistencia mecánica o incomodidad; clasificar <20 muy pobre → >60 hipermovilidad | Cap. 3 pp. 102–107 |
| 2 | Thomas Test | Supino, glúteos al borde, rodillas al pecho, soltar pierna de prueba; registrar muslo (paralelo o no) y rodilla (80–90° o extendida) y abducción | Cap. 6 pp. 375–378 |
| 3 | Overhead Squat Test | De pie, manos sobre cabeza, descalzo; sentadilla completa; observar rodillas (fuera/dentro) e inclinación anterior | Cap. 6 pp. 378–382 |
| 4 | Prescripción correctiva | Fortalecer músculos subactivos + estirar sobreactivos + liberación miofascial (ver reglas D4) | Cap. 6 pp. 376–382 |
| 5 | Re-test | Comparar contra baseline | Cap. 3 p. 107 |

#### Librería de cues para `SkillStep` (primaryCues / commonFaults / variantes)

**Back squat**
- primaryCues: barra sobre trapecio ~5 cm bajo el tope; codos atrás; inhalar profundo para presión intratorácica; core apretado; mirada al frente; pies paralelos al ancho de cadera/hombros con puntas hacia la espina ilíaca anterosuperior (hasta 30° hacia fuera); espinillas perpendiculares al piso; bajar hasta muslos horizontales o ángulo prescrito.
- commonFaults: redondear espalda; hiperextensión de rodilla al subir; rotación interna de rodillas/tobillos; talones despegados; rebotar abajo.
- variantes/bail: Smith machine, máquina de squat, goblet con mancuerna; en rehabilitación usar ROM reducido y cadena cerrada.
- Fuente: Cap. 3 pp. 96–98; Cap. 5 p. 149.

**Barbell deadlift**
- primaryCues: piernas ligeramente separadas; core contraído; agarre alterno (over-under) algo más ancho que hombros; inhalar y sostener la respiración; barra pegada a las espinillas; empujar con piernas y extender torso cuando la barra pasa las rodillas; exhalar al final.
- commonFaults: perder postura/redondear espalda; barra se adelanta; caderas suben antes que el pecho.
- Fuente: Cap. 5 pp. 141–142.

**Bench press**
- primaryCues: glúteos, hombros y cabeza firmes en el banco; pies planos (excepción: pies en el banco si hay dolor lumbar); agarre pronado más ancho que hombros; bajar controlado al pecho con contacto breve; empujar y exhalar al final.
- commonFaults: arquear excesivamente la lumbar; rebotar la barra; recorrido inconsistente.
- variantes: dumbbell press (mayor estabilización), cable chest press (inestabilidad controlada), close-grip para puñetazos (no usar cargas máximas: estrés en codos y deltoides clavicular).
- Fuente: Cap. 3 p. 95; Cap. 5 pp. 142, 160, 183.

**Pull-up / chin-up**
- primaryCues: agarre prono más ancho que hombros; subir hasta que la barbilla pase la barra; bajar controlado a brazos extendidos.
- commonFaults (invalidan la rep): movimientos bruscos, balanceo, patear el aire, doblar piernas.
- variantes: agarre neutro con isométrico de 5 s al final; lastre para fibras rápidas; hold isométrico con kimono para agarre.
- Fuente: Cap. 3 pp. 98–99; Cap. 5 pp. 163, 296.

**Remos (seated / one-arm dumbbell / bent-over / T-bar)**
- primaryCues: pecho alto; escápulas juntas al final; codos hacia atrás; core estable; en remo con mancuerna apoyar rodilla y mano en banco para alinear torso; en bent-over espalda plana ~45°.
- commonFaults: impulso del torso; abducción/adducción escapular exagerada; no llevar la barra al pecho/banco; cambiar posición de pies/cabeza entre reps.
- Fuente: Cap. 5 pp. 142–143, 162–166, 196, 297.

**Overhead press**
- primaryCues: espalda recta; agarre pronado a nivel de hombros; extender verticalmente; exhalar arriba; core activo especialmente de pie.
- commonFaults: hiperextensión lumbar.
- nota excéntrico: el coach entrega las mancuernas y asiste la fase concéntrica.
- Fuente: Cap. 5 pp. 169–170, 195, 331.

**Kettlebell swing / snatch**
- primaryCues (swing): pies paralelos al ancho de hombros; bisagra de cadera con columna neutra; péndulo entre piernas y extensión explosiva de cadera hasta pecho; terminar con cuerpo extendido en la variante completa.
- primaryCues (snatch): unilateral, “pecho orgulloso”; kettlebell cerca del cuerpo; girar alrededor del antebrazo y empujar arriba; agarre suelto para no lastimar manos.
- commonFaults: redondear espalda; usar brazos en lugar de cadera.
- Fuente: Cap. 5 pp. 137–138.

**Medicine ball slam / throw**
- primaryCues (slam): core apretado; extensión completa del cuerpo arriba; golpear ~60 cm delante para evitar rebote en cara; atrapar en el rebote.
- primaryCues (overhead lunge): paso de ~0.9 m; codos bloqueados arriba; core firme sin deriva lateral; rodilla trasera toca el suelo.
- commonFaults: espalda no plana; perder estabilidad del hombro.
- Fuente: Cap. 5 pp. 200–201, 216–218.

**Box jump**
- primaryCues: triple extensión (cadera, rodilla, tobillo); brazos atrás-arriba; aterrizar suave en la posición de despegue; en saltos de altura reducir la altura del cajón progresivamente (99→81→41 cm).
- commonFaults: aterrizaje ruidoso/colapso; no completar extensión.
- Fuente: Cap. 5 pp. 202–203, 302.

**Tire flip**
- primaryCues: caderas más bajas que hombros; agarre ancho con dedos debajo; pecho contra la llanta; empujar con piernas a 45°; meter rodilla para continuar; voltear manos y empujar; movimiento continuo sin punto de parada.
- commonFaults: detener el impulso (la llanta regresa); tirar con espalda en vez de piernas.
- cargas seguras: jóvenes ≤200 lb (91 kg); adultos hasta 500 lb (227 kg) según nivel.
- Fuente: Cap. 5 pp. 252–253, 282.

**Nordic hamstring curl**
- primaryCues: arrodillado con tobillos fijos; caer lento desde las rodillas (no desde las caderas); controlar lo más abajo posible sin manos; regresar.
- progresión segura: pocas reps al inicio; no bajar más de lo manejable; DOMS esperado.
- Fuente: Cap. 5 pp. 155–156; Cap. 6 pp. 364–365.

**Sprawl**
- primaryCues: desde carrera o posición de pelea, caderas al suelo, pecho sobre la línea del oponente imaginario, recuperar postura de pelea rápidamente; ejecutar ante comando aleatorio para estimular atención y tiempo de reacción.
- Fuente: Cap. 5 pp. 240, 278, 342.

**Plank / side plank**
- primaryCues: apoyo en antebrazos y puntas de pies; glúteos contraídos; espalda recta en toda su longitud; side plank sobre un antebrazo y borde externo del pie.
- función: estabilizar columna para postura de pelea, transferencia de fuerza y absorción de impactos.
- Fuente: Cap. 5 p. 150.

**Landmine core rotation**
- primaryCues: postura de lunge; ambas manos bajo la barra; brazos rectos; arco de cadera a cadera; espalda recta; core y caderas comprometidos; cambiar de pierna por lado.
- justificación: ~90% de los movimientos de pelea dependen de rotación.
- Fuente: Cap. 5 p. 203.

**Estiramientos por modo (cues de ejecución)**
- Estático: lento y sostenido hasta leve incomodidad, 15–30 s, máx 4 reps; mejor para cool-down/recuperación activa.
- PNF contract-relax: partner mueve al ROM final → 10 s de contracción isométrica contra el partner → 10 s de relajación → nuevo estiramiento más profundo.
- Dinámico: movimientos lentos, controlados y específicos del deporte, manteniendo equilibrio y propiocepción; 5–10 min antes de sparring/competición; superior al estático para rendimiento pre-actividad.
- Balístico: rebotes; alto riesgo; solo con calentamiento y supervisión, y solo si el deporte lo imita.
- Reglas de seguridad: calentar antes; nunca dolor (el dolor indica evaluar lesión); respiración normal (no Valsalva); evitar asimetrías; estirar hasta resistencia leve; 15–30 s × 2–4; no todo músculo “apretado” debe estirarse (puede estar sobretrabajado por deficiencia de movimiento).
- Fuente: Cap. 6 pp. 370–373.

---

### ENTREGABLE 4 — `rules/prehab-zones` + `rules/velocity-loss-thresholds`

#### P-00: Contexto epidemiológico (para ponderación de riesgo)
- Lesiones 22.9–28.6 por 100 peleadores. UFC 2017–2020: 80.7% en pelea vs 19.3% en entrenamiento (otra fuente: 77.9% en entrenamiento; probable subregistro). Cabeza/cara 32.5% de lesiones de pelea (3.8% en entrenamiento). Mano/muñeca segunda más común (8.5%/7.8%; 15.2% en competencia vs 10.7% en entrenamiento). Hombro 7.9% pelea / 16.5% entrenamiento. Cadera/muslo 4.6% entrenamiento vs 1.7% competencia; isquios 2.2%. Rodilla 13.2% en pelea y la más común fuera de pelea. Tobillo/pie 12.3% pelea / 10.7% no pelea. Lumbar 6.9% entrenamiento vs 0.8% competencia. Columna 0.58 por 100 en competencia.
- Reglas transversales: evitar desequilibrios musculares en cualquier articulación (p. ej. posterior/anterior de rodilla → riesgo ACL); la fuerza y la resistencia muscular estabilizan articulaciones y se asocian a menor riesgo; la periodización es prevención; priorizar movilidad y activación (cadera y hombro según UFC PI).
- **Fuente:** Cap. 6 pp. 356–357, 359–368.

#### P-01: `neck.concussion-prevention`
- **Zona:** `head`. **Mecanismo:** golpes directos/indirectos con aceleración-desceleración (whiplash); caídas secundarias tras knockout.
- **Prevención accionable:** fortalecimiento de cuello con equipo anteroposterior y lateral, idealmente Isoton hasta fallo local (también trapecio). Reducción esperada: aceleración/desaceleración craneal y potencialmente número/frecuencia de conmociones. En entrenamiento: guantes con más acolchado y casco reducen cortes/laceraciones, pero su efecto sobre conmoción no es significativo.
- **Red flags / gate:** toda conmoción requiere manejo médico profesional; síntomas: alteraciones visuales, memoria, concentración, atención. El sistema NO debe automatizar retorno.
- **Fuente:** Cap. 6 p. 357; Cap. 5 pp. 260–261.

#### P-02: `lumbar.core-prevention`
- **Zona:** `lumbar`. **Etiología:** déficit de fuerza y control neuromuscular de la columna; gestos repetidos.
- **Dosis preventivas:** single-leg elevated bridge 3×15–20 por lado (ajustar al nivel); Swiss ball crunch 3×30 o hasta fallo; Swiss ball plank 2–3×45–60 s o hasta fallo (el coach mueve el balón en distintas direcciones manteniendo posición neutra). Conocimiento de defensa de derribo y técnicas de caída también previene columna/cuello.
- **Nota:** dedicar al lower back el mismo tiempo de entrenamiento que a los abdominales; músculos del core con predominio tipo I → recuperación rápida, pueden trabajarse 2–4×/semana.
- **Fuente:** Cap. 6 pp. 357–359; Cap. 5 pp. 186–190.

#### P-03: `wrist-hand.prevention`
- **Zonas:** `wrist`, `hand`. **Etiología:** llaves articulares (armbar), golpeo, múltiples estilos.
- **Dosis:** kettlebell invertido (estabilización de muñeca, también útil para hombro) 3×45–60 s por lado o hasta fatiga; flexión/extensión de muñeca con EzBar o mancuernas 3×15–20. Además: técnica correcta y hand wraps.
- **Fuente:** Cap. 6 pp. 359–360.

#### P-04: `shoulder.prevention-and-return`
- **Zona:** `shoulder`. **Etiología:** Americana/Kimura; caídas; inestabilidad.
- **Stadia señalado:** tratamiento conservador (fisioterapia + fortalecimiento de manguito rotador y estabilizadores escapulares: trapecio, dorsal, tríceps, romboides; infiltraciones de cortisona solo en casos crónicos) → cirugía artroscópica si luxación recurrente/laxitud grande.
- **Prevención (ejercicios con banda/máquina):** rotación externa en aducción, rotación interna en aducción, rotación externa abducida, crossbody lateral raises, protracción de hombro con mancuerna, straight-arm pulldown con banda, seated high cable row.
- **Dosis post-lesión:** estiramientos estáticos 30 s–1 min × ≥3 por movimiento; bandas 2–4 series de 30 s (dinámico/isométrico, progresión según fisioterapeuta); máquinas 3×15–25.
- **Criterio de retorno señalado:** entrenamiento 3–4 meses post-cirugía; competencia ~6 meses. ⚠️ Gate clínico obligatorio.
- **Fuente:** Cap. 6 pp. 361–364.

#### P-05: `hamstring.prevention`
- **Zona:** `hamstring`. **Etiología:** pateo a alta velocidad (5.2–14.14 m/s), extensión excesiva de rodilla, alto volumen de pateo (también sobrecarga de aductores/iliopsoas).
- **Dosis:** Nordic curl 3×6–8 con descenso lento (asociado a menor riesgo de distensión en soccer/football/rugby); Swiss ball curl 3×12–15 bilateral/unilateral manteniendo alineación de columna. Controlar volumen técnico de pateo.
- **Fuente:** Cap. 6 pp. 364–365.

#### P-06: `knee.prevention`
- **Zona:** `knee`. **Etiología:** contacto directo (patada baja) o indirecto (sprain, sobrecarga); desequilibrio muscular posterior-anterior.
- **Dosis preventivas:** fuerza de isquios y cuádriceps; cadena cerrada con ROM reducido (squats, lunges, RDL, side lunge, prensa unilateral); propiocepción: 30 s o 10 pistol squats en BOSU; progresión con ojos cerrados, superficies distintas o movimientos específicos; los ejercicios de cadena abierta (leg curl/extension) son importantes en prevención.
- **⚠️ Gate clínico:** durante rehabilitación de ACL algunos ejercicios de cadena abierta deben evitarse según fase — el libro lo declara fuera de alcance; no automatizar. El ROM progresa según fase de rehabilitación.
- **Fuente:** Cap. 6 pp. 366–367.

#### P-07: `ankle-foot.prevention`
- **Zona:** `ankle`, `foot`. **Etiología:** bloqueo de patadas, foot/ankle locks; sin protección en MMA.
- **Dosis:** inversión/eversión/dorsiflexión con banda 3 series hasta fatiga o 20–30 reps; propiocepción en BOSU/disco/pad 3×45–60 s (también sirve para estabilidad de rodilla); vendaje funcional como soporte.
- **Fuente:** Cap. 6 pp. 368–369.

#### P-08: `stretching.prescription`
- **Selección por momento:** dinámico pre-actividad (5–10 min); estático o PNF en cool-down/recuperación activa para mejoras de ROM a largo plazo; estático puede ser beneficioso para actividades cortas de alta intensidad dentro de un warm-up comprehensivo; precaución con estático antes de sesiones largas/explosivas (puede disminuir contracción voluntaria máxima).
- **Dosis:** 15–30 s × 2–4 por articulación; más de 4 repeticiones aporta ganancias mínimas.
- **Comparativa (Tabla 6.1):** riesgo de lesión balístico alto / estático bajo / dinámico y PNF medio; efectividad para ROM: PNF excelente; practicidad: estático y dinámico excelentes, PNF pobre (requiere partner); eficiencia energética: estático excelente.
- **Fuente:** Cap. 6 pp. 370–373.

#### P-09: `screen.thomas-test-corrections`
- **Interpretación:** muslo elevado (no alcanza paralelo al piso) → iliopsoas acortado → estiramientos de flexores de cadera; rodilla extendida (no alcanza 80–90°) con muslo paralelo → recto femoral → estiramiento de cuádriceps; ambos → ambos estiramientos; pierna abducida (cae fuera del ancho de hombros) → banda iliotibial/rotadores de cadera.
- **Dosis correctiva:** 15–30 s × 2–4 series por pierna (estiramiento de cuádriceps con core activo para reducir arco lumbar; kneeling lunge con rotación de tronco para flexores + lumbar).
- **Fuente:** Cap. 6 pp. 375–378.

#### P-10: `screen.ohs-corrections`
- **Rodillas hacia fuera:** TFL, piriforme, bíceps femoral, glúteo menor/medio sobreactivos; aductores subactivos → fortalecer aductores (squat hold con foam roller o balón medicinal, 2–5 series hasta fatiga ligera, 2–3 días/semana) + estirar los sobreactivos.
- **Rodillas hacia dentro:** fortalecer glúteos (máximo/medio/menor) e isquios; estirar aductores, isquios y gastrocnemios; liberación miofascial de pantorrilla (rodar hacia la rodilla de forma controlada; sostener 20–30 s en punto de dolor percibido 6–9/10; buscar 1–2 puntos más por pierna).
- **Inclinación anterior excesiva:** squat con balón de estabilidad contra la pared enfatizando postura y core hasta fatiga ligera. ⚠️ El texto indica “series de 2 a 4 repeticiones y 1 min de intervalo” — redacción ambigua; probablemente sean 2–4 series de más repeticiones; validar antes de implementar literalmente.
- **Nota:** la evaluación debe hacerla un profesional para identificar patrones incorrectos y personalizar ejercicios.
- **Fuente:** Cap. 6 pp. 378–382.

#### V-01: `velocity.loss-thresholds` (VBT)
- **Tipo:** autorregulación. **Métricas:** pérdida de velocidad media (ejercicios de fuerza) y velocidad pico (ejercicios de potencia).
- **Umbrales:** limitar pérdida de velocidad media a 20% en sentadillas y 30% en tren superior (para limitar daño muscular y mejorar recuperación); en ejercicios de potencia (olímpicos, saltos, clean/jerk) pérdida ≤10% en la mayoría de sesiones y ≤5% en fases de tapering; para squat jump mantener velocidad pico entre 1.5–2.5 m/s.
- **Normas MMA (squat jump):** con dowel: internacional 3.77 m/s vs nacional 3.29 m/s; +50% BW: 2.50 vs 2.34; +75% BW: 2.15 vs 2.01; +100% BW: 1.86 vs 1.74.
- **Lógica:** si `velocityLoss > threshold` → detener la serie.
- **Fuente:** Cap. 3 pp. 100–101.

---

### ENTREGABLE 5 — Matriz de supervisión y riesgo (flags `requires-supervision` / `clinical-gate`)

| # | Método/regla | Riesgo principal | Flag sugerido | Mitigación | Fuente |
|---|---|---|---|---|---|
| 1 | `heart.interval-method` | Sobrecarga cardíaca; paro cardíaco súbito deportivo si el HR máximo se mantiene >60 s o los estímulos son largos | `requires-supervision` + monitoreo de HR obligatorio | Respetar 30–60 s de HR máximo por intervalo; descanso hasta HR 120; solo tras evaluación; no usar en principiantes | Cap. 2 pp. 63, 67–68 |
| 2 | `heart.dilation-method` | Volumen de horas a HR 120–150 | `requires-supervision` | Solo atletas evaluados; 2–3 sesiones/día bajo plan | Cap. 2 p. 68 |
| 3 | `gmf.myofibril-hyperplasia` | Presión sistólica 200–250 mmHg durante el esfuerzo | `requires-supervision`; excluir hipertensos, mayores, no atletas, población de salud | Descansos activos; no exceder 6 microciclos seguidos | Cap. 2 pp. 56–57 |
| 4 | `interval.type-2` | Cargas 80–100% con tempo explosivo hasta fatiga | `requires-supervision` + spotter | Solo atletas avanzados; volumen máx 1×/semana | Cap. 5 p. 344 |
| 5 | `fast-twitch.activation` | 90–100% 1RM hasta el fallo | `requires-supervision` + spotter | Series tonus 1–5; desarrollo 10–12 solo en élite | Cap. 5 p. 347 |
| 6 | Entrenamiento excéntrico >100% | Cargas 110–120% del máximo; DOMS 24–72 h | `requires-supervision` + 2 spotters | Cargas máximas solo 1×/semana; submáximo: subir 1–2 s, bajar 4–6 s; empezar con pocas series/reps; ≤2 sesiones/semana | Cap. 5 pp. 194–199 |
| 7 | `isoton.protocol` | Acumulación excesiva de H+ si se excede el tiempo | Hard-stop a los 60 s por serie | 30–45 s objetivo; intensidad 30–60% 1RM; descanso activo entre bloques | Cap. 2 p. 58; Cap. 5 p. 330 |
| 8 | `aerobic.sprint-method` | Sobrecarga cardíaca en estímulos largos; solo muy entrenados | `requires-supervision` | Progresión estándar→intervalo→sprint; estímulos cortos | Cap. 2 pp. 63–64 |
| 9 | Aclimatación al calor (activo/pasivo) | Heatstroke 103–106°F (39–41°C) | `requires-supervision` + termómetro | Subir ~1°F sin exceder 104°F; hot tub gradual hasta 40 min; sauna/vapor solo en días de calidad en los últimos 10–14 días; detener ante mareos, calambres, palidez o >104°F y buscar atención médica | Cap. 2 pp. 70–71; Cap. 5 pp. 139–140 |
| 10 | Hidratación en ambiente caluroso | Hipertermia | Reglas de seguridad embebidas | 300–500 mL antes; 100–300 mL cada 15–30 min; <1 h solo agua; >1 h añadir sodio/cloruro/CHO; ropa ligera | Cap. 5 pp. 139–140 |
| 11 | Corte de peso / disponibilidad energética | RED-S; prácticas rápidas inseguras e incluso mortales | `clinical-gate` (nutricionista/médico) | EA < 30 kcal/kg FFM/día = bandera roja; desaconsejar pérdida rápida; targets de %BF por fase (inicio camp H 9–16 / M 16–26; mitad H 7–14 / M 14–24; pesaje H 5–12 / M 12–22; off-season H <18 / M <28) | Cap. 3 pp. 77–78; Cap. 4 p. 112 |
| 12 | Conmoción y lesiones de cabeza | Segundo trauma al caer; síntomas cognitivos | `clinical-gate`; nunca auto-retorno | Manejo profesional; el sistema solo sugiere prevención (cuello) y equipo | Cap. 6 p. 357 |
| 13 | Rehab ACL / cadena abierta en rodilla | Ejercicios a evitar según fase | `clinical-gate` (fisioterapia) | Solo sugerir prevención (cadena cerrada ROM reducido, propiocepción) | Cap. 6 pp. 366–367 |
| 14 | Retorno post-cirugía de hombro | Re-luxación | `clinical-gate` | Entrenamiento 3–4 meses; competencia ~6 meses (criterio del libro, no automatizar) | Cap. 6 p. 361 |
| 15 | Cargas en jóvenes | Sobrecarga de estructuras en desarrollo | Límites duros | Balones medicinales ≤5–10 lb (2–5 kg); llantas ≤200 lb (91 kg); sparring con protección completa máx 2×/semana, 1–3 rounds, progresión en 3–6 meses; respetar periodos sensibles; 3–10 peleas amateur (todas victorias) antes del debut profesional | Cap. 5 pp. 244–253 |
| 16 | Suplementación | Contaminación 12–58%; dopaje inadvertido | `audit-required` | El staff debe conocer y auditar todo suplemento en todas las fases; suspender si no hay evidencia de beneficio o hay riesgo; protocolos con evidencia: creatina (carga 0.3 g/kg/día 5–7 días, mantenimiento 3–5 g/día), cafeína 3–6 mg/kg, β-alanina 4–6 g/día 10–12 semanas, bicarbonato 0.2–0.4 g/kg 60–150 min antes (con tolerancia GI), nitrato 310–560 mg 2–3 h antes, HMB 3 g/día ≥2 semanas | Cap. 4 pp. 121–128 |
| 17 | Uso de hormonas anabólicas (experimento Sarsania) | Dopaje (suspensión 2–4 años); el libro lo cita como evidencia pero lo desaconseja | `do-not-implement` | El sistema recomienda Isoton como alternativa natural para los mismos objetivos | Cap. 2 pp. 66–67 |
| 18 | `session.training-time-alignment` + doble sesión | Fatiga acumulada | Informativo | Modelar por horario competitivo; usar mini snack entre sesiones | Cap. 1 pp. 30–34 |

**Notas finales de implementación:**
1. Los entregables 1, 2 y 4 están listos para convertirse en `rules/*.ts` con el schema existente de `TrainingRule` (métrica + umbrales + condiciones).
2. El entregable 3 alimenta directamente `SkillPath`/`SkillStep` (`steps`, `primaryCues`, `commonFaults`, criterios de avance).
3. El entregable 5 debe implementarse como middleware de validación: cualquier regla con `requires-supervision` o `clinical-gate` no se auto-prescribe; solo se muestra con advertencia y/o se deriva a profesional.
4. Queda pendiente únicamente el scoring por movimiento del Flexitest (mapas 0–4), que requiere las figuras 3.19 del libro para implementarse con fidelidad.

---

## Ronda 3 — tras: «## Diagnóstico y Validación de Dependencias Visuales  Tu análisis es **impecable y sumamente preciso**. Has identificado de forma exacta el …»
# Ejecución de los 5 entregables — Especificaciones listas para implementación

Diagnóstico validado. El Flexitest queda como **módulo de scoring manual guiado** (el coach asigna 0–4 comparando con las figuras del libro) hasta recibir los mapas angulares; todo lo demás se especifica a continuación con parámetros exactos, condiciones y lógica de validación.

---

## ENTREGABLE 1 · `rules/periodization-combat`

> Motor de periodización. Cada regla incluye id, tipo, métrica, parámetros, condiciones, lógica de validación y fuente exacta.

### R-01 · `load.intensity-volume-tradeoff`
- **Tipo:** restricción estructural. **Métrica:** intensidad (%1RM o velocidad) × volumen.
- **Parámetros:** relación inversa; a mayor %1RM menos reps posibles; a mayor velocidad/distancia menos duración. Nunca programar volumen máximo + intensidad máxima en la misma sesión.
- **Lógica:** `if session.intensity == MAX && session.volume == MAX → reject`.
- **Fuente:** Cap. 1, pp. 4–5 (figs. 1.3–1.4).

### R-02 · `rest.work-rest-ratios` (intra-sesión)
- **Tipo:** descanso. **Métrica:** ratio trabajo:descanso.
- **Parámetros:**
  - Resistencia glucolítica → 1:3 (30 s máx → ≥90 s).
  - Aeróbico intensivo → 1:0.25–0.5 para trabajos de 30 s–2:30 (1 min → 15–30 s).
  - Aeróbico extensivo → trabajos de 2:30–10 min con 45–90 s fijos (5 min → ~90 s).
  - Fuerza/velocidad/potencia → descanso ordinario 3–4 min, hasta 8 min (recuperación completa).
- **Fuente:** Cap. 1, pp. 6–7.

### R-03 · `rest.session-types` (entre sesiones)
- **Valores:** `ordinary` (capacidad vuelve al nivel previo) · `strict` (más corto, suma efectos acumulativos) · `supercompensatory` (tras serie de strict; capacidad mayor que antes). No usar intervalos mayores que el supercompensatorio (se pierde el efecto y cae la entrenabilidad).
- **Fuente:** Cap. 1, pp. 7–8 (fig. 1.6).

### R-04 · `recovery.hours-by-quality`
- **Métrica:** horas mínimas antes de repetir la misma calidad.
- **Tabla:** velocidad 24–36 h · velocidad-resistencia aláctica hasta 48 h · fuerza máxima 48 h · velocidad o fuerza 24–48 h · resistencia aeróbica 48–72 h · resistencia glucolítica 48–96 h · técnica/skills ~6 h.
- **Lógica:** `elapsedSinceLast(sameQuality) >= minHours`, si no → warning.
- **Fuente:** Cap. 1, Tabla 1.1, p. 7.

### R-05 · `monitoring.session-rpe`
- **Métrica:** arbitraryUnits = RPE (1–10) × duración total en minutos (incluye calentamiento, cool-down y pausas de intervalo).
- **Protocolo:** preguntar “¿qué tan intensa fue la sesión?” **30 min después** de terminar (ni antes, ni mucho después). Comparar carga externa planificada vs interna real y ajustar.
- **Ejemplo de validación:** RPE 6 × 40 min = 240 UA.
- **Fuente:** Cap. 1, pp. 9–10 (Tabla 1.3, fig. 1.7).

### R-06 · `monitoring.fatigue-indicators`
- **Tipo:** monitoreo cualitativo (suplemento al RPE cuando no hay instrumentos).
- **Señales por nivel (ligera / severa / máxima):** concentración (normal → peor diferenciación/absorción → atención muy reducida, nerviosismo, reacción lenta); coordinación (correcta → más errores/imprecisión/inseguridad → errores graves/descoordinación); sudoración (poca/media → abundante tren superior → abundante todo el cuerpo); color de piel (enrojecimiento leve → fuerte → muy fuerte o palidez inusual).
- **Lógica:** ≥2 signos de fatiga máxima → sugerir detener/reducir sesión.
- **Fuente:** Cap. 1, Tabla 1.2, p. 9.

### R-07 · `periodization.microcycle-load-bands`
- **Métrica:** % de la carga total máxima del pico competitivo.
- **Tabla:** estabilizador 40–60% · ordinario 60–80% · shock 80–100% · precompetitivo según calendario (7–14 días, tapering) · control (batería de tests o competencia control) · competencia (principal) · recuperación 20–40%.
- **Fuente:** Cap. 1, Tabla 1.9, p. 20 (figs. 1.12–1.16).

### R-08 · `periodization.mesocycle-load-bands`
- **Parámetros:** incorporación 50–70%, 3–4 semanas (inicio de temporada o tras enfermedad/trauma; predominio de ejercicios generales, carga progresiva desde bajo) · desarrollo 60–80%, 4–6 semanas (creciente/decreciente u oscilatorio) · estabilización ~2 semanas (reducir ligeramente, preferentemente volumen; predominio competitivo/especial) · control ~2 semanas (puede incluir competencias menores) · recuperación 30–50%, 2–4 semanas (transición, tras cargas máximas o tapering) · precompetitivo 4–6 semanas antes de la pelea (modelar altitud, horario, formato) · competitivo 4–6 semanas (en MMA puede ser ~2 semanas).
- **Fuente:** Cap. 1, pp. 17–19 (figs. 1.9–1.11).

### R-09 · `periodization.block-atr`
- **Condiciones:** solo atletas experimentados; calendarios densos (torneos con varias peleas en <6 meses).
- **Parámetros:** acumulación 2–6 semanas (volumen alto, intensidad moderada: fuerza, resistencia aeróbica, técnica básica, corrección de errores) → transmutación 2–4 semanas (volumen óptimo, intensidad alta: fuerza/resistencia específicas, técnica/táctica impredecible; el más agotador fisiológicamente) → realización 2–3 semanas (intensidad máxima, estado descansado, competencia). Repetir bloques con importancia competitiva creciente.
- **Fuente:** Cap. 1, pp. 22–25 (Tablas 1.10–1.13).

### R-10 · `periodization.att-adapted-mesocycle`
- **Parámetros:**
  - Intensidad siempre alta (principio del tamaño: cargas bajas no reclutan fibras rápidas); el volumen ondula.
  - Alternar 2 microciclos de fuerza (volumen alto de fuerza) + 2 microciclos aeróbicos (volumen bajo de fuerza, alto aeróbico).
  - Dentro de cada semana: 2–3 picos de fuerza intercalados con 2–3 picos aeróbicos.
  - Combinación básica para principiantes: Lun/Mié/Vie resistencia; Mar/Jue aeróbico por método sprint; Sáb recuperación activa; Dom libre.
  - Semana 4 = recuperación activa: alta intensidad, bajo volumen (reducir series de 6–12 a 3 o incluso 1 por grupo; cambiar formato aeróbico: correr↔bicicleta).
  - Los microciclos de recuperación solo son obligatorios al entrar/salir del periodo competitivo.
- **Fuente:** Cap. 1, pp. 27–29 (figs. 1.22–1.24).

### R-11 · `session.concurrent-training-order`
- **Combinaciones anabólicas (salud/preparación):** aeróbico baja intensidad → fuerza; aeróbico alta intensidad → fuerza; técnica → fuerza; aeróbico baja intensidad → flexibilidad; flexibilidad → fuerza; técnica → flexibilidad.
- **Combinaciones catabólicas (pérdida de masa; no recomendadas salvo corte de peso):** aeróbico largo de baja intensidad → flexibilidad; fuerza → flexibilidad; técnica → aeróbico alta intensidad; fuerza → aeróbico alta intensidad; fuerza → aeróbico largo de baja intensidad; aeróbico alta intensidad → flexibilidad.
- **Mini snack:** si hay dos sesiones cercanas, intercalar comida ligera (líquida o sólida); si el objetivo es perder peso, evitar azúcares y preferir proteína.
- **Fuente:** Cap. 1, pp. 29–31 (figs. 1.25–1.26).

### R-12 · `periodization.att-macrocycle-phases`
- **Parámetros:** 5 fases: acondicionamiento inicial (adaptación anatómica) → hipertrofia → fuerza → potencia → circuito MMA (potencia-resistencia). Duración estándar 4 semanas por fase; total ~12 semanas + 1 semana final para dar el peso y supercompensar. Planificar hacia atrás desde la fecha de la pelea. Eliminar fases según el atleta (p. ej., quien corta mucho peso elimina hipertrofia → programa de ~17 semanas). Entre peleas: 6–8 sesiones/semana centradas en acondicionamiento inicial + técnica deficiente.
- **Variante “surf the curve”:** iniciar en el centro (acondicionamiento), subir hacia la izquierda (hipertrofia/fuerza con cargas altas), surfear hacia la derecha (potencia/velocidad con cargas ligeras y alta velocidad).
- **Fuente:** Cap. 1, pp. 31–33 (figs. 1.27–1.28).

### R-13 · `periodization.sparring-wave`
- **Parámetros:** calentamiento previo ~15 min; semana 1: 1 round de sombra + 4 de sparring; semana 2: + 1 round de jiu-jitsu (6); semana 3: + 2 rounds de jiu-jitsu (7, pico); reiniciar ciclo 5-6-7. En semanas posteriores añadir rounds “extra” con posiciones específicas (jiu-jitsu de suelo, wrestling contra la reja).
- **Fuente:** Cap. 1, pp. 33–34 (fig. 1.30).

### R-14 · `periodization.weekly-intensity-peaks`
- **Parámetros:** 3 picos de intensidad de combate por semana (mar/jue/sáb = sparring); el resto de días cargas moderadas con enfoque técnico. Rotar compañeros/traer externos para recrear el estrés psicológico de pelea real (HR y lactato suben por componente psicológico: dummy throws < control fight < pelea importante con la misma actividad externa).
- **Fuente:** Cap. 1, pp. 35–36 (figs. 1.31–1.32).

### R-15 · `monitoring.adaptation-check`
- **Parámetros:** la misma carga externa produce distinta respuesta interna según fase de preparación (ejemplo: 800 m en 3 min → HR 180–190 al inicio vs 140–150 en periodo competitivo). Al confirmar adaptación: aumentar repeticiones de la tarea o reducir el tiempo objetivo (p. ej., 2:45 → 2:30).
- **Fuente:** Cap. 1, pp. 36–37 (figs. 1.33–1.34).

### R-16 · `session.structure`
- **Parámetros:** calentamiento 10–20 min elevando HR a 110–130 bpm (umbral aeróbico) con grupos musculares grandes; estiramientos 10–30 s × 2–4 por articulación (calentar antes, evitar movimientos bruscos, evitar asimetrías); parte principal según plan; cool-down 5–15 min aeróbico a 110–130 bpm + ~5 min de relajación/estiramiento. El calentamiento específico debe parecerse al contenido de la sesión.
- **Fuente:** Cap. 1, pp. 37–38.

### R-17 · `competition.density`
- **Parámetros:** número óptimo de competencias mayores 3–10/año; en MMA puede ser menor, con intervalos entre competencias normalmente >20 días. Estructura MMA: duración máxima del combate 15–25 min; 1–3 peleas por día de evento; tiempo total de competencia 17–29 min; descanso entre rounds 1 min.
- **Fuente:** Cap. 1, pp. 12–14 (Tablas 1.7–1.8).

### R-18 · `session.training-time-alignment`
- **Parámetros:** el cuerpo se adapta a la hora de entrenamiento; modelar según horario competitivo: jiu-jitsu/grappling (torneos matutinos) → entrenar por la mañana; MMA (eventos nocturnos) → entrenar tarde/noche. Atletas con doble sesión desarrollan dos picos de rendimiento cerca de sus horas de entrenamiento.
- **Fuente:** Cap. 1, pp. 33–34 (fig. 1.29).

### R-19 · `exercise.mode-selection`
- **Clasificación:** generales (base multifacética) → específicos (modelan componentes de la competencia) → competitivos (situación de pelea real o simulada). El volumen competitivo debe ser mucho menor que general+específico.
- **Plantilla circuito general (Tabla 1.4):** 10 ejercicios (cuerda 1 min, lunge BW 10, hang clean and push jerk 4–6 @60%, pull-up 8–10, dumbbell hang snatch 4–6, deadlift 6–8 @60%, med ball slam 6–8, med ball throw 6–8, KB swing 10–12, plank 1 min); 2–3 series sin descanso entre ejercicios, 60–90 s entre series.
- **Plantilla circuito específico (Tabla 1.5):** 3 rounds × 5 min, estaciones de 50 s (sombra, takedowns, guard pass, ground and pound, arm lock, triangle, saco de patadas, sprawls, saco de golpes, rodillas en clinch, codos, hip escape, focus mitt, proyecciones, puente isométrico), 1 min entre rounds, alta intensidad.
- **Fuente:** Cap. 1, pp. 10–13.

### R-20 · `periodization.grassroots-waiting-load`
- **Parámetros:** atletas de equipos base/eventos menores sin fecha de pelea: entrenar prácticamente todo el año al 60–80% de la carga máxima (variante adaptada del modelo A), esperando contrato; atletas amateur que periodizan pueden usar el modelo A como guía.
- **Fuente:** Cap. 1, p. 26.

### R-21 · `load.peak-days-and-deload`
- **Parámetros:** no más de 2 días pesados de desarrollo consecutivos (alternar development/tonus); 2–3 días pico de carga por semana; >4 días pico/semana = alto riesgo de sobreentrenamiento; semana de descarga cada 2–6 semanas con ~30% menos volumen manteniendo intensidad.
- **Fuente:** Cap. 5, p. 352.

### R-22 · `overtraining.gas-warning`
- **Parámetros:** tres etapas de respuesta al estrés (alarma → resistencia → agotamiento). El agotamiento llega cuando la recuperación es inadecuada: cae la inmunidad, baja el rendimiento, sube el riesgo de lesión/infección. Se evita respetando R-21 y R-08.
- **Fuente:** Cap. 1, pp. 26–27 (fig. 1.20); Cap. 2, p. 55.

---

## ENTREGABLE 2 · `rules/fiber-methods`

> Métodos por tipo de fibra (concepto ruso de Seluyanov) + HIIT. Convención de dosificación: `tonus` = mantener (más frecuencia, menos volumen); `development` = estimular ganancia (más volumen, menos frecuencia).

### F-01 · `gmf.myofibril-hyperplasia` ⚠️ `requires-supervision`
- **Objetivo:** miofibrillas, fuerza y velocidad de contracción de fibras glucolíticas.
- **Parámetros:** intensidad 60–100% 1RM; 20–40 s hasta el fallo + 2 repeticiones forzadas; descanso 5–10 min hasta mínima concentración de H+ (con 5 min de descanso activo a HR 110–130 se acelera el aclaramiento; 5–7 series con descanso pasivo, 10–15 con activo); series tonus 1–3, development 6–10 por grupo (≈12–20 min de trabajo útil); frecuencia development 1 sesión/semana por grupo (repetir tras 7–10 días, tiempo de síntesis de miofibrillas), tonus 3–7 sesiones/semana (media intensidad, mitad o menos del volumen de development, p. ej. día 4 del microciclo).
- **Nutrición asociada:** proteína animal 2–3 g/kg.
- **Límites:** no usar más de 6 microciclos seguidos (estudio: miofibrillas +7%, mitocondrias −14%; riesgo de agotamiento). La elevación hormonal persiste 2–3 días y al día 4 vuelve a la normalidad.
- **⚠️ Contraindicaciones:** la presión sistólica puede subir a 200–250 mmHg durante el esfuerzo (150–180 en el primer minuto post-elevación); advertido para mayores, hipertensos, no atletas y población de salud.
- **Fuente:** Cap. 2, pp. 51–57.

### F-02 · `isoton.protocol`
- **Objetivo:** hiperplasia de miofibrillas en fibras tipo I; aumenta umbral aeróbico y resistencia sin carga mecánica alta.
- **Ejecución:** ROM parcial bajo tensión constante, sin relajar nunca el músculo, en el rango de mayor esfuerzo (ej. back squat: bajar hasta cadera bajo rodilla, subir solo hasta 100–110° de flexión de rodilla).
- **Parámetros consolidados (Cap. 5, que refina Cap. 2):** intensidad 30–60% 1RM (Cap. 2 indica 10–60% RM; se adopta 30–60% por ser la versión práctica); superserie 30 s trabajo + 30 s descanso × 3–6 en el mismo ejercicio (la primera serie no va al fallo); duración por serie 30–45 s; **hard-stop a los 60 s** (H+ excesivo → daño); entre superseries 30–60 s; entre bloques de superseries 5–10 min de descanso activo o trabajando otro grupo muscular distante; series development 4–10, tonus 1–3; 1–2+ sesiones/día; repetir por grupo cada 2–5 días; si se usa volumen máximo, solo 1×/semana por grupo.
- **Timing:** mejor al final de la sesión y al final del día (GH pre-sueño).
- **Progresión de referencia (Tabla 5.43):** 3→6 superseries en 4 semanas, con carga 35%→40% 1RM.
- **Ejercicios Isoton de referencia:** standing dumbbell press, dumbbell split squat, dumbbell bench press, standing dumbbell curl, triceps pushdown con cuerda, cable crunch, straight-arm lat pulldown, dumbbell front raise, chest-supported rear delt fly.
- **Fuente:** Cap. 2, pp. 57–59; Cap. 5, pp. 330–336 (Tablas 5.43 A/B).

### F-03 · `mitochondrial.gmf-hyperplasia`
- **Objetivo:** mitocondrias en fibras rápidas; capacidad de trabajo.
- **Parámetros:** intensidad de contracción 60–100% del máximo; 3–40 s hasta fatiga local (ejemplos: sprint 5–10 s, 10 saltos, 10 push-ups); descanso 45 s–5 min (hasta mínima concentración de H+); series tonus 10, development 20–40; frecuencia tonus 2–3/semana, development 5–7/semana.
- **Factores requeridos:** actividad de las fibras, proteína ~2 g/kg, hormonas por estrés físico, presencia de oxígeno, mínima concentración de H+.
- **Fuente:** Cap. 2, p. 62.

### F-04 · `aerobic.base-conditions`
- **Parámetros:** intensidad ≤ potencia del umbral anaeróbico cuando el trabajo es prolongado; volumen 5–20 min por bloque (más largo puede acidificar sangre y fibras intermedias si se supera el umbral); descanso 2–10 min; duración total máx ~60–90 min de trabajo puro (límite por glucógeno); el volumen máximo se repite cada 2–3 días (resíntesis de glucógeno).
- **Fuente:** Cap. 2, pp. 61–62.

### F-05 · `aerobic.sprint-method` ⚠️ `requires-supervision`
- **Ejecución:** cada contracción casi máxima, pero la potencia media del ejercicio no debe superar la del umbral anaeróbico; descansos organizados que garanticen limpieza de metabolitos. Activa todas o casi todas las fibras.
- **Condiciones:** solo atletas muy entrenados; cerca de la competición, tras mesociclo preparatorio con métodos menos intensos; progresión recomendada para principiantes: método estándar → método de intervalo → método sprint.
- **Eficiencia:** resultados >200% vs continuo al 40% de VO2max, en mucho menos tiempo.
- **⚠️ Riesgo:** no alargar demasiado los estímulos (sobrecarga cardíaca; riesgo de paro cardíaco súbito deportivo).
- **Fuente:** Cap. 2, pp. 62–64 (fig. 2.3).

### F-06 · `aerobic.detraining-window`
- **Parámetros:** ~4–5 semanas de entrenamiento duplican el contenido mitocondrial (meseta desde la semana 5); 1 semana de inactividad pierde ~50% de la ganancia; 5 semanas de inactividad pierde todo; se requieren ~4 semanas para recuperar lo perdido en la primera semana. **Regla:** no permanecer totalmente inactivo más de 3–4 días. Quienes buscan perder peso: priorizar ejercicios intensos y cortos + aeróbico largo de baja intensidad (movilización de ácidos grasos hasta 8×).
- **Fuente:** Cap. 2, pp. 64–65 (fig. 2.5).

### F-07 · `interval.type-1`
- **Objetivo:** potencia de fibras rápidas/glucolíticas, mitocondrias, capacidad aeróbica muscular, potencia en el umbral anaeróbico, resistencia a la fatiga.
- **Parámetros:** intensidad 60–80% 1RM; 1 repetición + pausa de 1–2 s, repetir hasta fatiga local; duración del trabajo 30–120 s; descanso entre series 2–5 min (según tiempo bajo tensión); series tonus 5–10, development 10–20; frecuencia 1–3×/semana.
- **Aplicable con:** ejercicios técnicos/específicos (saco, pads) o de fuerza (power clean, deadlift, box jump bajo, bench pull, bench press, sledgehammer, bodyweight row, pull-up, remos con banda, plyo push-up, rope climb, sprawls).
- **Fuente:** Cap. 5, p. 343 (ejercicios pp. 336–343).

### F-08 · `interval.10x10`
- **Objetivo:** mitocondrias en fibras rápidas, capacidad aeróbica muscular, resistencia.
- **Parámetros:** intensidad 40–60% 1RM; tempo rápido con pausa entre repeticiones y al final de cada serie; cambiar de ejercicio ante las **primeras señales** de fatiga local (no llevar a fatiga severa); 10 repeticiones por serie; 2–3 ejercicios por circuito (agonista-antagonista o cuerpo completo); 5–10 series (10 óptimo en élite); descanso entre series ≤1 min si es necesario; 1–3 circuitos; descanso entre circuitos 5–15 min (estiramientos o trabajo de baja intensidad); frecuencia 1–3×/semana.
- **Ejemplos:** 10 push-ups + 1 min descanso + 10 bodyweight rows ×10; o circuito plyo push-up + pull-up + low box jump ×10.
- **Fuente:** Cap. 5, pp. 343–344.

### F-09 · `interval.type-2` ⚠️ `requires-supervision`
- **Objetivo:** igual que tipo I pero con cargas pesadas; mejora biomecánica y fuerza de movimientos deportivos; modela la actividad competitiva.
- **Parámetros:** intensidad 80–100% 1RM; tempo rápido/explosivo; 1–5 repeticiones; duración 20–30 s hasta fatiga local; descanso 2–5 min; series tonus 5–10, development 10–20; solo 1×/semana con volumen máximo o 2×/semana con volumen bajo.
- **⚠️ Condiciones:** método avanzado; requiere spotter o asistencia del coach.
- **Fuente:** Cap. 5, p. 344.

### F-10 · `fast-twitch.activation` ⚠️ `requires-supervision`
- **Objetivo:** fuerza absoluta y capacidad de unidades motoras de alto umbral.
- **Parámetros:** intensidad 90–100% 1RM; 1–3 repeticiones hasta el fallo; descanso 2–5 min; series tonus 1–5, development 10–12.
- **Ejercicios de referencia:** bench press pesado con spotter, power clean, weighted pull-up, back squat, high box jump, leg press.
- **Fuente:** Cap. 5, pp. 345–347.

### F-11 · `high-speed.interval`
- **Objetivo:** velocidad, potencia, resistencia a la fatiga vía umbral anaeróbico.
- **Parámetros:** intensidad 80–100% del máximo; duración 5 s al 95–100% del esfuerzo, o 10–15 s al 80–90%; ritmo rápido o máximo según ejercicio; descanso 2–3 min; series tonus 5–10, development 10–20.
- **Ejercicios de referencia:** medicine ball slam, one-arm medicine ball throw, rope climb, medicine ball overhead throw.
- **Fuente:** Cap. 5, pp. 348–350.

### F-12 · `mma-oriented.training`
- **Objetivo:** mitocondrias en fibras rápidas, potencia en el umbral, minimizar acidez; mejora biomecánica/táctica del sparring.
- **Parámetros:** intensidad y ritmo competitivos; trabajo 30–120 s hasta fatiga local; descanso 5–10 min; series tonus 1–5, development 5–10.
- **Fuente:** Cap. 5, p. 350.

### F-13 · `heart.interval-method` ⚠️ `requires-supervision`
- **Objetivo:** hipertrofia del miocardio (contracción).
- **Parámetros:** intensidad por encima de VO2max; duración del ejercicio 60–120 s, manteniendo el HR máximo **solo 30–60 s** (más tiempo aumenta riesgo de sobrecarga cardíaca); descanso 120–180 s hasta HR ~120; volumen total 4–10 min de trabajo (30–40 aceleraciones; límite ligado a glucógeno, 60–90 min de tiempo puro); repetir 4–7 días después de una sesión de volumen máximo.
- **Evidencia de riesgo:** cargas diarias máximas desde el inicio producen distrofia de fibras del miocardio y de vasos (experimento con ratas: grupo progresivo = más mitocondrias y dilatación potencial; grupo máximo = alteración estructural y sobreentrenamiento).
- **Fuente:** Cap. 2, pp. 67–68.

### F-14 · `heart.dilation-method` ⚠️ `requires-supervision`
- **Objetivo:** dilatación del ventrículo izquierdo (volumen sistólico máximo).
- **Parámetros:** trabajar a HR 120–150 bpm; duración de horas; puede requerir 2–3 sesiones diarias para lograr el estímulo.
- **Fuente:** Cap. 2, p. 68.

### F-15 · `hiit.vo2max-intervals`
- **Parámetros:** intervalos de 2–5 min a máxima intensidad sostenible (determinada por test de laboratorio o time trial de 5–6 min); recuperación igual al trabajo o hasta que el atleta esté listo (HR ~60% del máximo); no más de 2 sesiones/semana con varios días de recuperación entre ellas.
- **Ejemplo:** 5 × 3 min a máxima velocidad con 3 min o más de descanso.
- **Fuente:** Cap. 2, p. 49.

### F-16 · `hiit.power-intervals-fatigue-stop`
- **Parámetros:** ratio 1:1; duración 15 s–3 min; intensidad máxima sostenible (watts, velocidad). **Criterio de parada:** registrar la velocidad/potencia del intervalo 3, restar 5%; si un intervalo posterior cae por debajo de ese umbral, terminar la sesión.
- **Ejemplo:** 12 × 1 min con 1 min de recuperación; si el intervalo 3 fue 300 W, el umbral es 285 W; si el intervalo 10 cae a 275 W, fin.
- **Fuente:** Cap. 2, p. 49.

### F-17 · `hiit.high-resistance-formats`
- **Formatos:** compound (2+ ejercicios encadenados, misma carga, descanso al final; ej. 3×[1 deadlift + 1 hang clean + 1 push press] = 9 reps + 2–4 min); complexes (más repeticiones por ejercicio, sin descanso entre ellos; ej. 4+4+4 = 12 reps + 2–4 min); clusters (pausas intra-serie; ej. RDL 5×[2 reps + 10 s]).
- **Alternativas sin barra:** hill sprints 10–30 s con recuperación caminando; drive sled/prowler/tire pulls; medicine balls para tren superior.
- **Fuente:** Cap. 2, pp. 49–50.

### F-18 · `methods.frequency-guidance`
- **Parámetros:** Isoton, 10×10 e intervalo tipo I tienen baja demanda neurológica → pueden incorporarse hasta 3×/semana; los métodos pesados (tipo II, activación de fibras rápidas, GMF hyperplasia) requieren más recuperación (ver frecuencias individuales); split routines solo para deficiencias específicas o off-season, no en campamento.
- **Fuente:** Cap. 5, pp. 352–353.

### F-19 · Plantillas de micro/mesociclo (Tablas 5.44–5.49)
- **Microciclo mitocondrial:** Lun high-speed (development) · Mar 10×10 (tonus) · Mié intervalo I (development) · Jue 10×10 (tonus) · Vie high-speed (development) · Sáb intervalo I (tonus) · Dom descanso.
- **Microciclo velocidad-fuerza:** sustituye 2 días por resistance training (development) e Isoton (development).
- **Mesociclos A–D:** distribuyen tonus/development en 3 semanas alternando intervalo II, 10×10, intervalo I, MMA-oriented, resistance training e Isoton (patrón: semanas 1–2 mayormente tonus con 1 estímulo development el sábado; semana 3 sube a development en intervalo II, intervalo I y MMA-oriented).
- **Fuente:** Cap. 5, pp. 350–352.

---

## ENTREGABLE 3 · SkillPaths + librería de cues

### SP-01 · `att-macrocycle-phases`
- **Disciplina:** S&C combate. **Objetivo final:** peak performance el día de la pelea (supercompensación + peso logrado). **Requisito previo:** evaluación diagnóstica; AA completada sin dolor.

| Step | Nombre | Descripción | Criterio de avance | Error típico | Fuente |
|---|---|---|---|---|---|
| 1 | Adaptación anatómica | Cuerpo completo, cargas ligeras-moderadas, 1–3×15–20 reps, 1–3×/semana | 2–4 semanas sin molestias articulares/tendinosas | Saltarse la fase | Cap. 1 pp. 31–33; Cap. 5 pp. 140–148 |
| 2 | Hipertrofia (opcional) | Cargas moderadas-altas, volumen alto, tempo controlado | Masa funcional ganada sin comprometer categoría | Añadir masa que impida dar el peso → eliminar fase | Cap. 1 pp. 31–33; Cap. 5 pp. 151–152 |
| 3 | Fuerza | 75–90% 1RM, 2–6 RM, 2–6 series, descanso 2–5 min | Técnica estable bajo cargas máximas relativas | Degradación técnica, valgo | Cap. 5 pp. 147–151 |
| 4 | Potencia | 30–60% 1RM con intención máxima, contrastes, pliometría | Velocidad sostenida sin caída | Acumular fatiga que reduce velocidad | Cap. 2 pp. 46–48; Cap. 5 pp. 210–223 |
| 5 | Circuito MMA | Rounds de ~5 min mezclando fuerza, pliometría y gestos específicos | Completar rounds manteniendo output y técnica | Degradación tardía | Cap. 5 pp. 224–303 |
| 6 | Semana de peso | Tapering + corte controlado + supercompensación | Peso alcanzado con recuperación | Corte agresivo | Cap. 1 pp. 31–33 |

### SP-02 · `power-method-progression`
- **Requisito de entrada:** base de fuerza; los métodos avanzados benefician más a atletas con mayor fuerza máxima.

| Step | Método | Parámetros clave | Criterio de avance | Fuente |
|---|---|---|---|---|
| 1 | Aceleración compensatoria | 30–90% 1RM, intención máxima de acelerar la barra; ganancias en ~5 semanas | Intención máxima estable sin fallo técnico | Cap. 5 pp. 211–212 (Tabla 5.17) |
| 2 | Resistencia acomodada (bandas/cadenas) | 12→6 × 2–3 reps al 60–80% con bandas ligeras→medias; ejercicios de cadena cerrada | Estabilidad del core bajo tensión variable | Cap. 5 pp. 212–213 (Tabla 5.18) |
| 3 | Contraste pesado-ligero (PAP) | 8×3 al 75–80% + 8×2–3 saltos/plyo | Potenciación visible en el ejercicio ligero | Cap. 5 pp. 214–215 (Tabla 5.19) |
| 4 | French contrast | 3 ejercicios por serie (general→especial→específico), 10 s entre ejercicios, 60–90 s entre series | Dominio técnico de los 3 eslabones | Cap. 5 pp. 221–223 |
| 5 | Contraste específico | 6 reps pesadas + 10 s máximas por lado (progresión 3→6 series en 4 semanas) | Transferencia a gesto de pelea | Cap. 5 Tabla 5.21 |

### SP-03 · `band-striking-progression`
- **Frecuencia:** 1×/semana fuera de campamento, 2×/semana en campamento; principiantes 2–5 rounds hasta 4 semanas, 1–2×/semana.
- **Estructura del round:** 30 s con banda a velocidad moderada + 1 min sin banda a máxima velocidad con pads (repetir hasta completar 5 min); round final solo pads a máxima potencia/velocidad.

| Semana | Progresión (Tabla 5.39) |
|---|---|
| 1–2 | Bandas estándar; punches: 30 s banda + 30 s sin banda; rodillas: 30+30 alternando; patadas: 5 con banda + 5 sin banda |
| 3–4 | Bandas pesadas; punches: 30 s banda + 1 min sin banda; rodillas: 30 s + 45 s; patadas: 5 con banda + 10 sin banda; último round de pads a velocidad rápida |

- **Fuente:** Cap. 5, pp. 304–306.

### SP-04 · `band-takedown-progression`
- **Disciplina:** derribos con banda (método ruso, >20 años de uso). **Técnicas disponibles:** derribo por la espalda, dos manos al oponente, agarre de brazo+torso, lift a hombro (de pie y de rodillas), suplex, preparación de derribo, trips de pierna interna/externa. Trabajar 1–2 técnicas a la vez hasta dominarlas; tensión de banda progresiva según capacidad; cambiar/incorporar ejercicios cada 4–6 semanas.

| Semana | Dosis (Tabla 5.40) |
|---|---|
| 1 | 3 × 30 reps × 3 días (énfasis en forma correcta) |
| 2 | 5 × 30 reps × 3 días (forma correcta) |
| 3 | 3–5 × 30 s × 3 días (alta velocidad) |
| 4 | 5 × 10 s × 3 días (velocidad máxima) |

- **Fuente:** Cap. 5, pp. 307–314.

### SP-05 · `flexibility-screen-corrective`
| Step | Acción | Detalle | Fuente |
|---|---|---|---|
| 1 | Flexitest baseline | 20 movimientos pasivos/activos, escala 0–4, movimiento lento hasta resistencia mecánica o incomodidad; clasificar <20 muy pobre → >60 hipermovilidad. **Scoring 0–4 manual por el coach comparando con las figuras 3.19a–t** (brecha pendiente) | Cap. 3 pp. 102–107 |
| 2 | Thomas Test | Supino, glúteos al borde, rodillas al pecho, soltar pierna de prueba; registrar muslo (paralelo o no) y rodilla (80–90° o extendida) y abducción | Cap. 6 pp. 375–378 |
| 3 | Overhead Squat Test | De pie, manos sobre cabeza, descalzo; sentadilla completa; observar rodillas (fuera/dentro) e inclinación anterior | Cap. 6 pp. 378–382 |
| 4 | Prescripción correctiva | Fortalecer músculos subactivos + estirar sobreactivos + liberación miofascial (ver reglas D4) | Cap. 6 pp. 376–382 |
| 5 | Re-test | Comparar contra baseline | Cap. 3 p. 107 |

### SP-06 · `youth-to-professional-path`
| Step | Acción | Parámetros | Fuente |
|---|---|---|---|
| 1 | Periodos sensibles | Velocidad 7–11 (sprint 15–60 m o 5–10 s); velocidad-fuerza niñas 9–11/niños 13–15 (saltos, trineo, balón medicinal); fuerza niñas 10–11/niños >13 (>16 máximo) (peso corporal, bandas); coordinación niñas 7–10, 13–14/niños 10–12 (multideporte: jiujitsu desde 5, judo desde 8); flexibilidad niñas 7–10, 14–17/niños 9–10, 15–16 (grupos grandes, isométrico 2–3×30 s al final); resistencia niñas 10–12/niños 14–16 (aeróbico de bajo impacto 15–45 min a intensidad media) | Cap. 5 pp. 244–247 (Tabla 5.26) |
| 2 | Sparring amateur | ≤2 sesiones/semana con protección completa (careta, casco, guantes, bucal), 1–3 rounds; progresión gradual en 3–6 meses | Cap. 5 pp. 247–248 |
| 3 | Carrera amateur | 3–10 peleas amateur (todas victorias) antes del debut profesional; ganar las primeras 5 peleas amateur | Cap. 5 pp. 248, 352 |
| 4 | Debut profesional | Ganar la primera pelea profesional para consolidar estatus | Cap. 5 p. 352 |
| 5 | Élite | Eliminar fases innecesarias; foco en fuerza, potencia-resistencia y circuito MMA | Cap. 5 p. 352 |

### Librería de cues para `SkillStep` (primaryCues / commonFaults / variantes)

**Barbell deadlift**
- primaryCues: piernas ligeramente separadas; core contraído; agarre alterno (over-under) algo más ancho que hombros; inhalar, sostener la respiración, contraer el core y levantar extendiendo piernas dejando que la barra deslice por las espinillas; cuando la barra llega a las rodillas, extender torso y rodillas; exhalar al final.
- commonFaults: perder postura/redondear espalda; barra se adelanta; caderas suben antes que el pecho.
- Fuente: Cap. 5, p. 141–142.

**Back squat**
- primaryCues: barra sobre el trapecio; agarre firme con codos atrás; inhalar profundo para mantener presión intratorácica; core contraído; mirada al frente; retirar la barra, dar dos pasos atrás; pies paralelos al ancho de cadera/hombros; flexionar desde la cadera evitando redondear la espalda; bajar hasta muslos horizontales o ángulo prescrito; extender rodillas y elevar torso para volver.
- commonFaults: redondear espalda; hiperextensión de rodilla al subir; rotación interna de rodillas/tobillos; rebotar abajo.
- variantes/bail: Smith Machine, máquina de squat, goblet con mancuernas (según objetivo y limitaciones).
- Fuente: Cap. 3, pp. 96–98; Cap. 5, p. 149.

**Bench press**
- primaryCues: glúteos, hombros y cabeza firmes en el banco; pies planos en el suelo; agarre prono más ancho que hombros; inhalar y bajar la barra al pecho con movimiento controlado; tras contacto breve, empujar extendiendo brazos y exhalar al final del esfuerzo; devolver la barra a los soportes al terminar.
- commonFaults: arquear excesivamente la lumbar; rebotar la barra; recorrido inconsistente.
- variantes: dumbbell press (mayor ROM y estabilización), cable chest press (inestabilidad controlada), close-grip para puñetazos (no usar cargas máximas: estrés en codos y deltoides clavicular).
- Fuente: Cap. 3, p. 95; Cap. 5, pp. 142, 183.

**Pull-up / chin-up**
- primaryCues: colgarse de la barra con agarre prono más ancho que hombros; inhalar y llevar el pecho al nivel de la barra; exhalar al final; volver a la posición inicial de forma controlada.
- commonFaults (invalidan la rep): movimientos bruscos, balanceo, patear el aire, doblar piernas.
- variantes: agarre neutro con isométrico de 5 s al final; lastre para fibras rápidas; hold isométrico con kimono para agarre.
- Fuente: Cap. 3, pp. 98–99; Cap. 5, pp. 163, 296.

**Remos (seated / one-arm dumbbell / bent-over / T-bar)**
- primaryCues: pecho alto; escápulas juntas al final; codos hacia atrás; core estable; en remo con mancuerna apoyar rodilla y mano en banco para alinear torso; en bent-over espalda plana ~45°.
- commonFaults: impulso del torso; abducción/adducción escapular exagerada; no llevar la barra al pecho/banco; cambiar posición de pies/cabeza entre reps.
- Fuente: Cap. 5, pp. 142–143, 162–166, 196, 297.

**Overhead press (sentado/de pie)**
- primaryCues: espalda recta; agarre prono a nivel de hombros; extender verticalmente; exhalar arriba; core activo especialmente de pie.
- commonFaults: hiperextensión lumbar.
- nota excéntrico: el coach entrega las mancuernas y asiste la fase concéntrica.
- Fuente: Cap. 5, pp. 169–170, 195, 331.

**Kettlebell swing / snatch**
- primaryCues (swing): pies paralelos al ancho de hombros; bisagra de cadera con columna neutra; péndulo entre piernas y extensión explosiva de cadera hasta pecho; terminar con cuerpo extendido y brazos arriba en la variante completa.
- primaryCues (snatch): unilateral, “pecho orgulloso”; kettlebell cerca del cuerpo; girar alrededor del antebrazo y empujar arriba; agarre suelto para no lastimar manos.
- commonFaults: redondear espalda; usar brazos en lugar de cadera.
- Fuente: Cap. 5, pp. 137–138.

**Medicine ball slam / throw**
- primaryCues (slam): core apretado; extensión completa del cuerpo arriba; golpear ~60 cm delante para evitar rebote en cara; atrapar en el rebote.
- primaryCues (overhead lunge): paso de ~0.9 m; codos bloqueados arriba; core firme sin deriva lateral; rodilla trasera toca el suelo.
- commonFaults: espalda no plana; perder estabilidad del hombro.
- Fuente: Cap. 5, pp. 200–201, 216–218.

**Box jump**
- primaryCues: triple extensión (cadera, rodilla, tobillo); brazos atrás-arriba; aterrizar suave en la posición de despegue; en saltos de altura reducir la altura del cajón progresivamente (99→81→41 cm).
- commonFaults: aterrizaje ruidoso/colapso; no completar extensión.
- Fuente: Cap. 5, pp. 202–203, 302.

**Tire flip**
- primaryCues: caderas más bajas que hombros; agarre ancho con dedos debajo; pecho contra la llanta; empujar con piernas a 45°; meter rodilla para continuar; voltear manos y empujar; movimiento continuo sin punto de parada.
- commonFaults: detener el impulso (la llanta regresa); tirar con espalda en vez de piernas.
- cargas seguras: jóvenes ≤200 lb (91 kg); adultos hasta 500 lb (227 kg) según nivel.
- Fuente: Cap. 5, pp. 252–253, 282.

**Nordic hamstring curl**
- primaryCues: arrodillado con tobillos fijos; caer lento desde las rodillas (no desde las caderas); controlar lo más abajo posible sin manos; regresar.
- progresión segura: pocas reps al inicio; no bajar más de lo manejable; DOMS esperado.
- Fuente: Cap. 5, pp. 155–156; Cap. 6, pp. 364–365.

**Sprawl**
- primaryCues: desde carrera o posición de pelea, caderas al suelo, pecho sobre la línea del oponente imaginario, recuperar postura de pelea rápidamente; ejecutar ante comando aleatorio para estimular atención y tiempo de reacción.
- Fuente: Cap. 5, pp. 240, 278, 342.

**Plank / side plank**
- primaryCues: apoyo en antebrazos y puntas de pies; glúteos contraídos; espalda recta en toda su longitud; side plank sobre un antebrazo y borde externo del pie.
- función: estabilizar columna para postura de pelea, transferencia de fuerza y absorción de impactos.
- Fuente: Cap. 5, p. 150.

**Landmine core rotation**
- primaryCues: postura de lunge; ambas manos bajo la barra; brazos rectos; arco de cadera a cadera; espalda recta; core y caderas comprometidos; cambiar de pierna por lado.
- justificación: ~90% de los movimientos de pelea dependen de rotación.
- Fuente: Cap. 5, p. 203.

**Clean pull (3 tirones)**
- primaryCues: posición de deadlift con caderas ligeramente más bajas que en el deadlift tradicional; escápulas juntas, mirada al frente; primer tirón del suelo a justo encima de la rodilla (controlado, barra cerca, hombros delante de la barra); segundo tirón hasta el muslo superior (extensión agresiva de caderas y rodillas, barra en contacto con cuádriceps); tercer tirón con máxima aceleración (triple extensión, encogimiento de hombros, peso hacia los dedos, brazos rectos).
- commonFaults: barra se aleja del cuerpo; tirar con los brazos antes de tiempo; perder el ángulo de caderas/hombros.
- Fuente: Cap. 5, pp. 225–226.

**Bird dog**
- primaryCues: rodillas al ancho de cadera, manos al ancho de hombros; abdominales contraídos; levantar una mano y la rodilla opuesta manteniendo el peso centrado; extender brazo al frente y pierna atrás; elevar la pierna solo hasta mantener la espalda recta; sostener 1–4 s; volver y cambiar de lado; minimizar movimiento de cadera.
- dosis típica: 15–30 s por lado × 2–3 series.
- Fuente: Cap. 5, p. 187.

---

## ENTREGABLE 4 · `rules/prehab-zones` + `rules/velocity-loss-thresholds`

### P-00 · Contexto epidemiológico (ponderación de riesgo)
- Lesiones 22.9–28.6 por 100 peleadores. UFC 2017–2020: 80.7% en pelea vs 19.3% en entrenamiento (otra fuente: 77.9% en entrenamiento; probable subregistro). Cabeza/cara 32.5% de lesiones de pelea (3.8% en entrenamiento). Mano/muñeca segunda más común (8.5%/7.8%; 15.2% en competencia vs 10.7% en entrenamiento). Hombro 7.9% pelea / 16.5% entrenamiento. Cadera/muslo 4.6% entrenamiento vs 1.7% competencia; isquios 2.2%. Rodilla 13.2% en pelea y la más común fuera de pelea. Tobillo/pie 12.3% pelea / 10.7% no pelea. Lumbar 6.9% entrenamiento vs 0.8% competencia. Columna 0.58 por 100 en competencia.
- **Reglas transversales:** evitar desequilibrios musculares en cualquier articulación (p. ej. posterior/anterior de rodilla → riesgo ACL); la fuerza y la resistencia muscular estabilizan articulaciones y se asocian a menor riesgo; la periodización es prevención; priorizar movilidad y activación (cadera y hombro según UFC PI); los cambios de reglas (guantes, prohibición de rodillas a la cara con oponente en el suelo, prohibición de golpes a la columna) protegen al atleta.
- **Fuente:** Cap. 6, pp. 356–357, 359–368.

### P-01 · `neck.concussion-prevention`
- **Zona:** `head`. **Mecanismo:** golpes directos/indirectos con aceleración-desceleración (whiplash); caídas secundarias tras knockout.
- **Prevención accionable:** fortalecimiento de cuello con equipo anteroposterior y lateral, idealmente Isoton hasta fallo local (también trapecio). Reducción esperada: aceleración/desceleración craneal y potencialmente número/frecuencia de conmociones. En entrenamiento: guantes con más acolchado y casco reducen cortes/laceraciones, pero su efecto sobre conmoción no es significativo.
- **Red flags / gate:** toda conmoción requiere manejo médico profesional; síntomas: alteraciones visuales, memoria, concentración, atención. El sistema NO debe automatizar retorno.
- **Fuente:** Cap. 6, p. 357; Cap. 5, pp. 260–261.

### P-02 · `lumbar.core-prevention`
- **Zona:** `lumbar`. **Etiología:** déficit de fuerza y control neuromuscular de la columna; gestos repetidos.
- **Dosis preventivas:** single-leg elevated bridge 3×15–20 por lado (ajustar al nivel); Swiss ball crunch 3×30 o hasta fallo; Swiss ball plank 2–3×45–60 s o hasta fallo (el coach mueve el balón en distintas direcciones manteniendo posición neutra). Conocimiento de defensa de derribo y técnicas de caída también previene columna/cuello.
- **Nota:** dedicar al lower back el mismo tiempo de entrenamiento que a los abdominales; músculos del core con predominio tipo I → recuperación rápida, pueden trabajarse 2–4×/semana.
- **Fuente:** Cap. 6, pp. 357–359; Cap. 5, pp. 186–190.

### P-03 · `wrist-hand.prevention`
- **Zonas:** `wrist`, `hand`. **Etiología:** llaves articulares (armbar), golpeo, múltiples estilos.
- **Dosis:** kettlebell invertido (estabilización de muñeca, también útil para hombro) 3×45–60 s por lado o hasta fatiga; flexión/extensión de muñeca con EzBar o mancuernas 3×15–20. Además: técnica correcta y hand wraps.
- **Fuente:** Cap. 6, pp. 359–360.

### P-04 · `shoulder.prevention-and-return`
- **Zona:** `shoulder`. **Etiología:** Americana/Kimura; caídas; inestabilidad.
- **Stadia señalado:** tratamiento conservador (fisioterapia + fortalecimiento de manguito rotador y estabilizadores escapulares: trapecio, dorsal, tríceps, romboides; infiltraciones de cortisona solo en casos crónicos) → cirugía artroscópica si luxación recurrente/laxitud grande.
- **Prevención (ejercicios con banda/máquina):** rotación externa en aducción, rotación interna en aducción, rotación externa abducida, crossbody lateral raises, protracción de hombro con mancuerna, straight-arm pulldown con banda, seated high cable row.
- **Dosis post-lesión:** estiramientos estáticos 30 s–1 min × ≥3 por movimiento; bandas 2–4 series de 30 s (dinámico/isométrico, progresión según fisioterapeuta); máquinas 3×15–25.
- **Criterio de retorno señalado:** entrenamiento 3–4 meses post-cirugía; competencia ~6 meses. ⚠️ Gate clínico obligatorio.
- **Fuente:** Cap. 6, pp. 361–364.

### P-05 · `hamstring.prevention`
- **Zona:** `hamstring`. **Etiología:** pateo a alta velocidad (5.2–14.14 m/s), extensión excesiva de rodilla, alto volumen de pateo (también sobrecarga de aductores/iliopsoas).
- **Dosis:** Nordic curl 3×6–8 con descenso lento (asociado a menor riesgo de distensión en soccer/football/rugby); Swiss ball curl 3×12–15 bilateral/unilateral manteniendo alineación de columna. Controlar volumen técnico de pateo.
- **Fuente:** Cap. 6, pp. 364–365.

### P-06 · `knee.prevention`
- **Zona:** `knee`. **Etiología:** contacto directo (patada baja) o indirecto (sprain, sobrecarga); desequilibrio muscular posterior-anterior.
- **Dosis preventivas:** fuerza de isquios y cuádriceps; cadena cerrada con ROM reducido (squats, lunges, RDL, side lunge, prensa unilateral); propiocepción: 30 s o 10 pistol squats en BOSU; progresión con ojos cerrados, superficies distintas o movimientos específicos; los ejercicios de cadena abierta (leg curl/extension) son importantes en prevención.
- **⚠️ Gate clínico:** durante rehabilitación de ACL algunos ejercicios de cadena abierta deben evitarse según fase — el libro lo declara fuera de alcance; no automatizar. El ROM progresa según fase de rehabilitación.
- **Fuente:** Cap. 6, pp. 366–367.

### P-07 · `ankle-foot.prevention`
- **Zona:** `ankle`, `foot`. **Etiología:** bloqueo de patadas, foot/ankle locks; sin protección en MMA.
- **Dosis:** inversión/eversión/dorsiflexión con banda 3 series hasta fatiga o 20–30 reps; propiocepción en BOSU/disco/pad 3×45–60 s (también sirve para estabilidad de rodilla); vendaje funcional como soporte.
- **Fuente:** Cap. 6, pp. 368–369.

### P-08 · `stretching.prescription`
- **Selección por momento:** dinámico pre-actividad (5–10 min); estático o PNF en cool-down/recuperación activa para mejoras de ROM a largo plazo; estático puede ser beneficioso para actividades cortas de alta intensidad dentro de un warm-up comprehensivo; precaución con estático antes de sesiones largas/explosivas (puede disminuir contracción voluntaria máxima).
- **Dosis:** 15–30 s × 2–4 por articulación; más de 4 repeticiones aporta ganancias mínimas.
- **Comparativa (Tabla 6.1):** riesgo de lesión balístico alto / estático bajo / dinámico y PNF medio; practicidad: estático y dinámico excelentes, PNF pobre (requiere partner); eficiencia energética: estático excelente; efectividad para ROM: PNF excelente.
- **Reglas de seguridad:** calentar antes; evitar movimientos bruscos; no balístico sin calentamiento y supervisión; estirar antes y después; dinámico pre-actividad; PNF/estático en cool-down para ROM a largo plazo; hasta resistencia leve, nunca dolor; el dolor es señal de preocupación y evaluación; evitar asimetrías; respiración normal (no Valsalva); evaluación por profesional; no todo músculo “apretado” debe estirarse (puede estar sobretrabajado por deficiencia de movimiento).
- **PNF contract-relax (ATT):** partner mueve la articulación al ROM final → 10 s de contracción isométrica contra el partner → 10 s de relajación → nuevo estiramiento más profundo.
- **Fuente:** Cap. 6, pp. 370–373.

### P-09 · `screen.thomas-test-corrections`
- **Interpretación:** muslo elevado (no alcanza paralelo al piso) → iliopsoas acortado → estiramientos de flexores de cadera; rodilla extendida (no alcanza 80–90°) con muslo paralelo → recto femoral → estiramiento de cuádriceps; ambos → ambos estiramientos; pierna abducida (cae fuera del ancho de hombros) → banda iliotibial/rotadores de cadera.
- **Dosis correctiva:** 15–30 s × 2–4 series por pierna (estiramiento de cuádriceps con core activo para reducir arco lumbar; kneeling lunge con rotación de tronco para flexores + lumbar).
- **Fuente:** Cap. 6, pp. 375–378.

### P-10 · `screen.ohs-corrections`
- **Rodillas hacia fuera:** TFL, piriforme, bíceps femoral, glúteo menor/medio sobreactivos; aductores subactivos → fortalecer aductores (squat hold con foam roller o balón medicinal, 2–5 series hasta fatiga ligera, 2–3 días/semana) + estirar los sobreactivos.
- **Rodillas hacia dentro:** fortalecer glúteos (máximo/medio/menor) e isquios; estirar aductores, isquios y gastrocnemios; liberación miofascial de pantorrilla (rodar hacia la rodilla de forma controlada; sostener 20–30 s en punto de dolor percibido 6–9/10; buscar 1–2 puntos más por pierna).
- **Inclinación anterior excesiva:** squat con balón de estabilidad contra la pared enfatizando postura y core hasta fatiga ligera. ⚠️ El texto indica “series de 2 a 4 repeticiones y 1 min de intervalo” — redacción ambigua; probablemente sean 2–4 series de más repeticiones; validar antes de implementar literalmente.
- **Nota:** la evaluación debe hacerla un profesional para identificar patrones incorrectos y personalizar ejercicios.
- **Fuente:** Cap. 6, pp. 378–382.

### V-01 · `velocity.loss-thresholds` (VBT)
- **Métricas:** pérdida de velocidad media (ejercicios de fuerza) y velocidad pico (ejercicios de potencia).
- **Umbrales:** limitar pérdida de velocidad media a 20% en sentadillas y 30% en tren superior (para limitar daño muscular y mejorar recuperación); en ejercicios de potencia (olímpicos, saltos, clean/jerk) pérdida ≤10% en la mayoría de sesiones y ≤5% en fases de tapering; para squat jump mantener velocidad pico entre 1.5–2.5 m/s.
- **Normas MMA (squat jump):** con dowel: internacional 3.77 m/s vs nacional 3.29 m/s; +50% BW: 2.50 vs 2.34; +75% BW: 2.15 vs 2.01; +100% BW: 1.86 vs 1.74.
- **Lógica:** `if velocityLoss > threshold → stopSet`.
- **Fuente:** Cap. 3, pp. 100–101.

---

## ENTREGABLE 5 · Matriz de supervisión y riesgo (flags)

| # | Método/regla | Riesgo principal | Flag sugerido | Mitigación | Fuente |
|---|---|---|---|---|---|
| 1 | `heart.interval-method` | Sobrecarga cardíaca; paro cardíaco súbito deportivo si el HR máximo se mantiene >60 s o los estímulos son largos | `requires-supervision` + monitoreo de HR obligatorio | Respetar 30–60 s de HR máximo por intervalo; descanso hasta HR 120; solo tras evaluación; no usar en principiantes | Cap. 2 pp. 63, 67–68 |
| 2 | `heart.dilation-method` | Volumen de horas a HR 120–150 | `requires-supervision` | Solo atletas evaluados; 2–3 sesiones/día bajo plan | Cap. 2 p. 68 |
| 3 | `gmf.myofibril-hyperplasia` | Presión sistólica 200–250 mmHg durante el esfuerzo | `requires-supervision`; excluir hipertensos, mayores, no atletas, población de salud | Descansos activos; no exceder 6 microciclos seguidos | Cap. 2 pp. 56–57 |
| 4 | `interval.type-2` | Cargas 80–100% con tempo explosivo hasta fatiga | `requires-supervision` + spotter | Solo atletas avanzados; volumen máx 1×/semana | Cap. 5 p. 344 |
| 5 | `fast-twitch.activation` | 90–100% 1RM hasta el fallo | `requires-supervision` + spotter | Series tonus 1–5; desarrollo 10–12 solo en élite | Cap. 5 p. 347 |
| 6 | Entrenamiento excéntrico >100% | Cargas 110–120% del máximo; DOMS 24–72 h | `requires-supervision` + 2 spotters | Cargas máximas solo 1×/semana; submáximo: subir 1–2 s, bajar 4–6 s; empezar con pocas series/reps; ≤2 sesiones/semana | Cap. 5 pp. 194–199 |
| 7 | `isoton.protocol` | Acumulación excesiva de H+ si se excede el tiempo | Hard-stop a los 60 s por serie | 30–45 s objetivo; intensidad 30–60% 1RM; descanso activo entre bloques | Cap. 2 p. 58; Cap. 5 p. 330 |
| 8 | `aerobic.sprint-method` | Sobrecarga cardíaca en estímulos largos; solo muy entrenados | `requires-supervision` | Progresión estándar→intervalo→sprint; estímulos cortos | Cap. 2 pp. 63–64 |
| 9 | Aclimatación al calor (activo/pasivo) | Heatstroke 103–106°F (39–41°C) | `requires-supervision` + termómetro | Subir ~1°F sin exceder 104°F; hot tub gradual hasta 40 min; sauna/vapor solo en días de calidad en los últimos 10–14 días; detener ante mareos, calambres, palidez o >104°F y buscar atención médica | Cap. 2 pp. 70–71; Cap. 5 pp. 139–140 |
| 10 | Hidratación en ambiente caluroso | Hipertermia | Reglas de seguridad embebidas | 300–500 mL antes; 100–300 mL cada 15–30 min; <1 h solo agua; >1 h añadir sodio/cloruro/CHO (solución ≤8%); ropa ligera | Cap. 5 pp. 139–140 |
| 11 | Corte de peso / disponibilidad energética | RED-S; prácticas rápidas inseguras e incluso mortales | `clinical-gate` (nutricionista/médico) | EA < 30 kcal/kg FFM/día = bandera roja; desaconsejar pérdida rápida; targets de %BF por fase (inicio camp H 9–16 / M 16–26; mitad H 7–14 / M 14–24; pesaje H 5–12 / M 12–22; off-season H <18 / M <28) | Cap. 3 pp. 77–78; Cap. 4 p. 112 |
| 12 | Conmoción y lesiones de cabeza | Segundo trauma al caer; síntomas cognitivos | `clinical-gate`; nunca auto-retorno | Manejo profesional; el sistema solo sugiere prevención (cuello) y equipo | Cap. 6 p. 357 |
| 13 | Rehab ACL / cadena abierta en rodilla | Ejercicios a evitar según fase | `clinical-gate` (fisioterapia) | Solo sugerir prevención (cadena cerrada ROM reducido, propiocepción) | Cap. 6 pp. 366–367 |
| 14 | Retorno post-cirugía de hombro | Re-luxación | `clinical-gate` | Entrenamiento 3–4 meses; competencia ~6 meses (criterio del libro, no automatizar) | Cap. 6 p. 361 |
| 15 | Cargas en jóvenes | Sobrecarga de estructuras en desarrollo | Límites duros | Balones medicinales ≤5–10 lb (2–5 kg); llantas ≤200 lb (91 kg); sparring con protección completa máx 2×/semana, 1–3 rounds, progresión en 3–6 meses; respetar periodos sensibles; 3–10 peleas amateur (todas victorias) antes del debut profesional | Cap. 5 pp. 244–253 |
| 16 | Suplementación | Contaminación 12–58%; dopaje inadvertido | `audit-required` | El staff debe conocer y auditar todo suplemento en todas las fases; suspender si no hay evidencia de beneficio o hay riesgo; protocolos con evidencia: creatina (carga 0.3 g/kg/día 5–7 días, mantenimiento 3–5 g/día), cafeína 3–6 mg/kg, β-alanina 4–6 g/día 10–12 semanas, bicarbonato 0.2–0.4 g/kg 60–150 min antes (con tolerancia GI), nitrato 310–560 mg 2–3 h antes, HMB 3 g/día ≥2 semanas | Cap. 4 pp. 121–128 |
| 17 | Uso de hormonas anabólicas (experimento Sarsania) | Dopaje (suspensión 2–4 años); el libro lo cita como evidencia pero lo desaconseja | `do-not-implement` | El sistema recomienda Isoton como alternativa natural para los mismos objetivos | Cap. 2 pp. 66–67 |
| 18 | Infiltraciones de cortisona / cirugía | Procedimientos clínicos | `clinical-only` | Solo referencia informativa; nunca prescribir desde el sistema | Cap. 6 pp. 361–364 |

---

### Notas finales de implementación
1. Los entregables 1, 2 y 4 están listos para convertirse en `rules/*.ts` con el schema existente de `TrainingRule` (métrica + umbrales + condiciones).
2. El entregable 3 alimenta directamente `SkillPath`/`SkillStep` (`steps`, `primaryCues`, `commonFaults`, criterios de avance).
3. El entregable 5 debe implementarse como middleware de validación: cualquier regla con `requires-supervision` o `clinical-gate` no se auto-prescribe; solo se muestra con advertencia y/o se deriva a profesional.
4. Queda pendiente únicamente el scoring por movimiento del Flexitest (mapas 0–4), que requiere las figuras 3.19 del libro para implementarse con fidelidad.
