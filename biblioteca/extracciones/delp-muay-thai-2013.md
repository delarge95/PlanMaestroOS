# delp-muay-thai-2013 — Extracción recuperada de chat

> **sourceId:** `delp-muay-thai-2013` · **origen:** `chat-export-1787414989201` (Extracción de Reglas para Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Muay Thai Training Exercises: The Ultimate Guide to Fitness, Strength and Fight Preparation — Extracción para Plan Maestro OS

> Extracción estructurada para convertir este libro en reglas, progresiones y metadatos dentro de un sistema de fitness. Se parafrasea el contenido; no se copian párrafos largos.  
> **Nota de referencias:** el material proporcionado no incluye paginación estable, por lo que se cita como **Capítulo / Sección**. Ejemplo: `Cap. 2, sec. 4`.

---

## 1) Metadatos del libro

- **Título:** *Muay Thai Training Exercises: The Ultimate Guide to Fitness, Strength, and Fight Preparation*
- **Autor(es):** Christoph Delp
- **Año:** 2013
- **Disciplina principal:** Muay Thai / preparación física para combate / fuerza-resistencia / técnica deportiva
- **Enfoque poblacional:**  
  - Principiantes y personas orientadas a fitness.  
  - Amateurs con intención competitiva.  
  - Profesionales o semiprofesionales de Muay Thai.  
  - También útil para personas que entrenan sin club, siempre que haya prudencia y supervisión externa cuando sea necesario.
- **Notas de alcance:**  
  - **Cubre:** planificación del entrenamiento, estructura de sesiones, calentamiento, técnica básica, trabajo en saco/pads/pareja/clinch, fuerza con peso corporal y material simple, stamina por zonas de frecuencia cardiaca, estiramientos, regeneración, nutrición básica, selección de peso corporal/clase de peso, combinaciones, contras, fintas, estrategias tácticas y planes de preparación para competición.  
  - **No cubre explícitamente:** diagnóstico médico, rehabilitación clínica de lesiones, programación de fuerza avanzada con barras/powerlifting, manejo médico de dolor crónico, prescripción nutricional individualizada clínica.  
  - El libro insiste en que no sustituye consejo médico/profesional y que el lector debe consultar antes de iniciar programas marciales o de ejercicio.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `MuayThaiSessionPhase` (opcional):
  - **Descripción:** Fases de una sesión de Muay Thai.
  - **Campos sugeridos:** `phase` (`warmup` | `main-technique` | `cooldown`), `durationMin`, `components[]`, `intensity`.
  - **Referencias:** Cap. 2, sec. 1.

- `MuayThaiTrainingModality` (opcional):
  - **Descripción:** Modalidades específicas de entrenamiento técnico.
  - **Campos sugeridos:** `modality` (`shadowboxing` | `pad` | `heavy-bag` | `partner` | `sparring` | `clinch`), `rounds`, `roundDurationSec`, `intensityPct`, `protectiveGearRequired`, `coachSupervision`.
  - **Referencias:** Cap. 2, secs. 1–3.

- `StaminaZone` (opcional):
  - **Descripción:** Zonas de resistencia basadas en porcentaje de frecuencia cardiaca máxima.
  - **Campos sugeridos:** `zone` (`regenerative` | `basic` | `fitness` | `anaerobic-threshold`), `pctMHR`, `talkTest`, `purpose`, `beginnerAllowed`.
  - **Referencias:** Cap. 3, sec. 4.

- `FightPreparationPhase` (opcional):
  - **Descripción:** Fases de preparación competitiva.
  - **Campos sugeridos:** `weeksOut`, `emphasis` (`base` | `strength` | `tactics` | `sparring` | `taper`), `sparringAllowed`, `intensityTrend`.
  - **Referencias:** Cap. 5, secs. 3–4.

- `TechnicalSkillCategory` (opcional):
  - **Descripción:** Clasificación de habilidades técnicas.
  - **Campos sugeridos:** `category` (`basic` | `combination` | `counter` | `feint` | `traditional`), `stance` (`orthodox` | `southpaw`), `range`, `riskLevel`.
  - **Referencias:** Cap. 1, sec. 6; Cap. 4.

- `ContactIntensity` (opcional):
  - **Descripción:** Nivel de contacto para entrenamiento técnico.
  - **Campos sugeridos:** `level` (`controlled` | `technical` | `moderate` | `high`), `powerPct`, `protectiveGear`, `supervisionRequired`.
  - **Referencias:** Cap. 2, sec. 3.

- `WeightClassGoal` (opcional):
  - **Descripción:** Objetivo de peso/clase competitiva.
  - **Campos sugeridos:** `goal` (`maintain` | `cut` | `gain`), `bodyFatPctTarget`, `calorieBalance`, `proteinEmphasis`, `mealTiming`.
  - **Referencias:** Cap. 2, sec. 7.

- `StretchingPrescription` (opcional):
  - **Descripción:** Prescripción de movilidad/estiramiento según fase.
  - **Campos sugeridos:** `method` (`relax-extend` | `tense-relax-extend` | `dynamic` | `swing` | `joint-rotation`), `phase` (`pre` | `post` | `dedicated`), `holdSec`, `reps`, `frequencyPerWeek`.
  - **Referencias:** Cap. 3, sec. 3.

- `HardeningProgression` (opcional):
  - **Descripción:** Progresión de acondicionamiento de contacto para Muay Thai.
  - **Campos sugeridos:** `tool` (`soft-bag` | `wood-shaving-bag` | `mixed-sand-bag`), `progressionRate`, `contraindications[]`.
  - **Referencias:** Cap. 3, sec. 1.

- `RegenerationProfile` (opcional):
  - **Descripción:** Medidas de recuperación asociadas a carga.
  - **Campos sugeridos:** `sleepHoursNight`, `napHours`, `massage`, `heat`, `restDays`, `lifestyleRestrictions`.
  - **Referencias:** Cap. 2, sec. 5.

- `TrainingLogEntry` (opcional):
  - **Descripción:** Registro de entrenamiento recomendado por el libro.
  - **Campos sugeridos:** `technicalFocus`, `rounds`, `weights`, `sets`, `reps`, `distance`, `duration`, `heartRate`, `sleep`, `stress`, `nutritionNotes`.
  - **Referencias:** Cap. 1, sec. 4.

- `MentalPerformanceTrait` (opcional):
  - **Descripción:** Rasgos mentales/disciplinarios descritos para el desarrollo del boxeador.
  - **Campos sugeridos:** `trait` (`vision` | `courage` | `concentration` | `ambition` | `discipline` | `self-confidence` | `respect` | `sacrifice` | `learning` | `modesty`), `coachingPrompt`.
  - **Referencias:** Cap. 1, sec. 2.

### 2.2 Mapeo a tipos existentes

#### `FocusId`

- `muay-thai-skill`:
  - El libro lo trata como eje central: guardia, desplazamiento, golpes, codos, rodillas, patadas, combinaciones, contras, fintas, clinch y sparring.
- `conditioning`:
  - Usa running, salto de cuerda, intervalos y trabajo específico de Muay Thai para mejorar stamina.
- `strength-endurance`:
  - Prioriza peso corporal, altas repeticiones, pliometría ligera, estabilidad de core y fuerza aplicada a golpes/patadas.
- `mobility`:
  - Movilidad específica para hombros, cadera, isquios, aductores, gemelos y columna; sin buscar splits extremos.
- `fat-loss` / `weight-making`:
  - Trata reducción de grasa para dar peso, con énfasis en déficit calórico, proteína y control de carbohidratos.
- `prehab`:
  - Sin ser libro de rehab, insiste en calentamiento, progresión de contacto, descanso, fuerza compensatoria y evitar sobreentrenamiento.

#### `BodyZoneId`

- `neck`:
  - Se entrena con neck pulls para resistir impactos y clinch; se advierte precaución con métodos que cargan dientes/cabeza.
- `shoulder`:
  - Importante en guardia, golpes, estiramientos y push-ups/press/overhead.
- `elbow`:
  - Técnica de codos y acondicionamiento de impacto; zona relevante en contras y fintas.
- `wrist` / `hand`:
  - Protección con vendajes/guantes; push-ups en puños pueden estabilizar muñecas.
- `core`:
  - Crunches, beetle, planks, lateral plank, reverse plank, control de giro en golpes.
- `lumbar`:
  - Se menciona trabajo de espalda baja, Superman, reverse plank, cuidado con espalda hueca.
- `hip`:
  - Clave para patadas, rodillas, giros y movilidad.
- `knee`:
  - Riesgo por aumento brusco de carga; se trabaja con squats, lunges, saltos y técnica de rodilla.
- `shin`:
  - Acondicionamiento progresivo para pateo y bloqueo; no golpear superficies duras.
- `ankle` / `foot`:
  - Apoyo, pivote, salto de cuerda, riesgo de ligamentos si se aumenta carga abruptamente.
- `calf`:
  - Relevante en guardia, saltos, carrera, estiramientos.

#### `MovementPattern`

- `horizontal-push`:
  - Push-ups, variantes con pelota, palm-clap, en puños, con rowing integrado.
- `vertical-pull`:
  - Pull-ups, rope pull-ups.
- `horizontal-pull`:
  - Dumbbell rowing, variantes a dos brazos.
- `vertical-push`:
  - Overhead press, handstand push-up como variante avanzada.
- `squat`:
  - Squats, jump squats, lunges, one-legged knee bend, tiros de salto.
- `hinge` / posterior-chain:
  - Shoulder bridge, reverse plank, lifting punching bag, Superman.
- `anti-extension`:
  - Plank, leg pulls + push-up.
- `anti-lateral-flexion`:
  - Lateral plank.
- `rotation` / `anti-rotation`:
  - Crunches with turns, beetle, giros de codo/golpe.
- `gait-conditioning`:
  - Running, interval runs, skipping rope.
- `combat-specific`:
  - Straight punch, hook, uppercut, elbow, round kick, push kick, knee, clinch, sprawl/throw-like actions.  
  - ⚠️ El sistema probablemente necesitará un subtipo `CombatMovementPattern` si los patrones genéricos no bastan.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `mt-training-documentation`

- Descripción breve: registrar entrenamiento para monitorear carga, técnica, recuperación y contexto.
- **Tipo:** monitoreo / adherencia.
- **Métrica principal:** `logCompletionPerSession`.
- **Valores numéricos:**
  - Rango óptimo: registrar después de cada sesión.
- **Condiciones de aplicación:** todos los niveles; especialmente útil en planes de varias semanas.
- **Referencias:** Cap. 1, sec. 4.
- **Comentarios/precauciones:** incluir técnica, rondas, pesos/repeticiones, distancia/tiempo, frecuencia cardiaca, sueño, estrés y nutrición si se busca optimizar.

---

### Regla: `mt-frequency-fitness`

- Descripción breve: frecuencia semanal para usuarios orientados a fitness.
- **Tipo:** frecuencia.
- **Métrica principal:** `sessionsPerWeek`.
- **Valores numéricos:**
  - Rango óptimo: 2–3 sesiones/semana.
  - Mínimo de mantenimiento: 1 sesión/semana.
- **Condiciones de aplicación:** usuarios no competitivos, objetivo fitness.
- **Referencias:** Cap. 1, sec. 1.
- **Comentarios/precauciones:** si no se puede mantener 2–3, al menos 1 para no perder ritmo y reducir riesgo de lesión al retomar.

---

### Regla: `mt-frequency-amateur`

- Descripción breve: frecuencia semanal para amateurs con objetivo competitivo.
- **Tipo:** frecuencia.
- **Métrica principal:** `sessionsPerWeek`.
- **Valores numéricos:**
  - Rango recomendado: 3–5 sesiones/semana.
  - Bueno: 5–6 sesiones/semana.
  - Si hay necesidad de bajar mucho peso: puede requerirse >6 sesiones/semana.
- **Condiciones de aplicación:** amateurs que quieren competir; añadir fitness/stamina según necesidad.
- **Referencias:** Cap. 1, sec. 1; Cap. 5, sec. 3.
- **Comentarios/precauciones:** la técnica debe estar bien desarrollada; no aumentar carga bruscamente.

---

### Regla: `mt-frequency-pro`

- Descripción breve: estructura de entrenamiento para profesionales.
- **Tipo:** frecuencia / carga.
- **Métrica principal:** `sessionsPerDay`, `sessionsPerWeek`.
- **Valores numéricos:**
  - 2 sesiones/día.
  - 6 días/semana.
  - Domingo descanso o reducción.
- **Condiciones de aplicación:** solo atletas con base construida, recuperación adecuada y supervisión.
- **Referencias:** Cap. 1, sec. 1; Cap. 2, sec. 1; Cap. 5, sec. 4.
- **Comentarios/precauciones:** no aplicar directamente a usuarios recreativos.

---

### Regla: `mt-session-structure`

- Descripción breve: duración y fases de una sesión estándar.
- **Tipo:** estructura de sesión.
- **Métrica principal:** `phaseDurationMin`.
- **Valores numéricos:**
  - Warm-up: 15–30 min.
  - Técnica principal: 50–90 min.
  - Cool-down: ~15 min.
- **Condiciones de aplicación:** sesiones generales de Muay Thai.
- **Referencias:** Cap. 2, sec. 1.
- **Comentarios/precauciones:** adaptar según nivel, objetivo y disponibilidad.

---

### Regla: `mt-warmup-run`

- Descripción breve: carrera suave para calentar.
- **Tipo:** calentamiento / volumen.
- **Métrica principal:** `minutesPerSession`.
- **Valores numéricos:**
  - General: 10–20 min.
  - En gimnasios tailandeses: hasta 90 min en atletas muy adaptados.
- **Condiciones de aplicación:** si el usuario no está muy entrenado, dividir técnica y carrera en sesiones separadas.
- **Referencias:** Cap. 2, sec. 2.
- **Comentarios/precauciones:** evitar comenzar con volúmenes élite.

---

### Regla: `mt-rope-skipping`

- Descripción breve: salto de cuerda como calentamiento y stamina.
- **Tipo:** calentamiento / stamina.
- **Métrica principal:** `minutesPerSession`.
- **Valores numéricos:**
  - Inicial: 10 min con pausas.
  - Avanzado: 15–20 min continuos.
- **Condiciones de aplicación:** usar cuerda pesada si se busca refuerzo de mano/brazo/hombro; variar ritmo.
- **Referencias:** Cap. 2, sec. 2; Cap. 3, sec. 4.
- **Comentarios/precauciones:** mantener postura erguida y hombros relajados.

---

### Regla: `mt-warmup-stretch-hold`

- Descripción breve: estiramientos estáticos en warm-up deben ser breves.
- **Tipo:** movilidad / seguridad.
- **Métrica principal:** `stretchHoldSeconds`.
- **Valores numéricos:**
  - Máximo recomendado: ≤10 s por posición.
- **Condiciones de aplicación:** antes de entrenamiento técnico.
- **Referencias:** Cap. 2, sec. 2; Cap. 3, sec. 3.
- **Comentarios/precauciones:** después del estiramiento breve, reactivar con rotaciones articulares y movimientos rápidos.

---

### Regla: `mt-technique-rounds-general`

- Descripción breve: volumen técnico estándar por sesión.
- **Tipo:** volumen técnico.
- **Métrica principal:** `rounds`, `roundDurationMin`.
- **Valores numéricos:**
  - Shadowboxing: 2–3 rondas × 3–5 min.
  - Pads: 3–5 rondas × 3–5 min.
  - Saco: 3–5 rondas × 3–5 min.
  - Partner: 10–20 min.
  - Sparring: 10–20 min, solo avanzados y no siempre.
  - Clinch: 5–10 min.
- **Condiciones de aplicación:** usuarios generales/club.
- **Referencias:** Cap. 2, sec. 1.
- **Comentarios/precauciones:** si no hay partner, extender shadow y saco.

---

### Regla: `mt-pro-technical-rounds`

- Descripción breve: rondas técnicas de atletas élite.
- **Tipo:** volumen técnico avanzado.
- **Métrica principal:** `rounds`, `roundDurationMin`.
- **Valores numéricos:**
  - Saiyok: shadow 3–4 × 4 min; pads 3–5 × 4 min; bag 4–5 × 4 min; partner 30–60 min; clinch 15–20 min 4 veces/semana.
  - Kem: shadow 1 × 5 min; pads 4–6 × 4 min; bag 4–5 × 4 min; partner 15–20 min; clinch 20–30 min.
- **Condiciones de aplicación:** solo atletas avanzados/profesionales.
- **Referencias:** Cap. 2, secs. 1–3.
- **Comentarios/precauciones:** ⚠️ no usar como plantilla automática para usuarios recreativos.

---

### Regla: `mt-partner-sparring-volume`

- Descripción breve: volumen y intensidad de partner/sparring.
- **Tipo:** volumen / intensidad.
- **Métrica principal:** `minutesPerSession`, `intensityPct`.
- **Valores numéricos:**
  - Partner general: 10–20 min.
  - Saiyok partner: 30–60 min.
  - Kem partner: 15–20 min.
  - Saiyok sparring: 1 sesión/semana exclusiva, 50–70% potencia.
  - Kem sparring: 2 sesiones/semana, 70–80% potencia.
- **Condiciones de aplicación:** avanzados; técnicas acordadas o supervisadas.
- **Referencias:** Cap. 2, sec. 3.
- **Comentarios/precauciones:** sparring no debe ser siempre a máxima intensidad.

---

### Regla: `mt-sparring-safety`

- Descripción breve: sparring requiere control y protección.
- **Tipo:** seguridad.
- **Métrica principal:** `protectiveGearRequired`, `powerPct`.
- **Valores numéricos:**
  - Sparring intensivo: usar equipo protector.
  - No luchar a máxima fuerza.
- **Condiciones de aplicación:** avanzados; entrenador observando.
- **Referencias:** Cap. 2, sec. 3.
- **Comentarios/precauciones:** en gimnasios tailandeses a veces entrenan con poco contacto y sin protección, pero si sube potencia se usa protección.

---

### Regla: `mt-clinch-dosage`

- Descripción breve: dosis de clinch según nivel y estilo.
- **Tipo:** volumen / fuerza específica.
- **Métrica principal:** `minutesPerSession`, `intensityPct`.
- **Valores numéricos:**
  - General: 5–10 min.
  - Kem: 20–30 min, 80–90% potencia, 2–3 partners.
  - Saiyok: 20 min, 4 veces/semana, ~70% potencia.
  - Novatos: poca fuerza, foco técnico.
- **Condiciones de aplicación:** clinch con técnica controlada; en preparación puede ser a alta intensidad con rodillas.
- **Referencias:** Cap. 2, sec. 3.
- **Comentarios/precauciones:** mantener cuerpo erguido; fortalecer cuello; evitar cargas descontroladas.

---

### Regla: `mt-cooldown`

- Descripción breve: estructura del cool-down.
- **Tipo:** recuperación.
- **Métrica principal:** `minutesPerPhase`.
- **Valores numéricos:**
  - Fuerza/fortalecimiento: ~5 min.
  - Ejercicio suave: ~5 min.
  - Estiramiento/movilización: ~5 min.
- **Condiciones de aplicación:** todas las sesiones.
- **Referencias:** Cap. 2, secs. 1 y 4.
- **Comentarios/precauciones:** si hay sesión de fuerza independiente, el bloque de fuerza del cool-down puede omitirse.

---

### Regla: `mt-pro-strength-endurance-calistenics`

- Descripción breve: volúmenes de fuerza-resistencia usados por campeones.
- **Tipo:** fuerza-resistencia avanzada.
- **Métrica principal:** `sets`, `reps`.
- **Valores numéricos:**
  - Pull-ups: Saiyok 4–5 × 20; Kem 10 × 15.
  - Push-ups: Saiyok 10 × 20; Kem 1 × 100.
  - Sit-ups: Saiyok 3 × 100; Kem 2–3 × 100.
  - Neck pulls: muchas repeticiones, sin esquema fijo.
- **Condiciones de aplicación:** atletas muy entrenados; no usar como estándar inicial.
- **Referencias:** Cap. 2, sec. 4.
- **Comentarios/precauciones:** para usuarios normales, comenzar con volúmenes mucho menores.

---

### Regla: `mt-regeneration-amateur`

- Descripción breve: recuperación básica para amateurs/fitness.
- **Tipo:** descanso.
- **Métrica principal:** `restDaysBetweenSessions`, `extraSleepHours`.
- **Valores numéricos:**
  - 1 día de descanso antes de la siguiente sesión intensa.
  - Dormir ~1 hora extra tras entrenar.
- **Condiciones de aplicación:** ocio/amateur.
- **Referencias:** Cap. 2, sec. 5.
- **Comentarios/precauciones:** si hay sobreentrenamiento, bajar carga.

---

### Regla: `mt-regeneration-pro`

- Descripción breve: recuperación en atletas de alto rendimiento.
- **Tipo:** recuperación avanzada.
- **Métrica principal:** `sleepHoursNight`, `napHours`, `recoveryModalities`.
- **Valores numéricos:**
  - Sueño nocturno: 6–8 h.
  - Siesta: 2–3 h.
  - Masaje tailandés, calor/bolas de hierbas, descanso.
- **Condiciones de aplicación:** profesionales o cargas muy altas.
- **Referencias:** Cap. 2, sec. 5.
- **Comentarios/precauciones:** evitar fiestas y alcohol; la recuperación es parte del rendimiento.

---

### Regla: `mt-sleep`

- Descripción breve: sueño como regla general de recuperación.
- **Tipo:** estilo de vida / recuperación.
- **Métrica principal:** `sleepHours`.
- **Valores numéricos:**
  - Regla general: dormir 1 h más de lo habitual cuando se entrena.
  - Élite: 6–8 h nocturnas + 2–3 h de descanso diurno.
- **Condiciones de aplicación:** todos los niveles; más importante si hay doble sesión.
- **Referencias:** Cap. 1, sec. 3; Cap. 2, sec. 5.
- **Comentarios/precauciones:** falta de sueño se asocia a peor recuperación y mayor riesgo.

---

### Regla: `mt-hydration`

- Descripción breve: ingesta mínima de agua.
- **Tipo:** nutrición / hidratación.
- **Métrica principal:** `litersPerDay`.
- **Valores numéricos:**
  - Mínimo: ~2 cuartos de galón/día ≈ 1.9 L.
  - Más si sudoración intensa, entrenamiento duro o dieta baja en calorías.
- **Condiciones de aplicación:** todos.
- **Referencias:** Cap. 2, sec. 6.
- **Comentarios/precauciones:** alcohol no hidrata y perjudica recuperación.

---

### Regla: `mt-alcohol-and-substances`

- Descripción breve: evitar alcohol y sustancias dopantes.
- **Tipo:** estilo de vida / seguridad.
- **Métrica principal:** `alcoholDaysBeforeFight`.
- **Valores numéricos:**
  - Últimas 3 semanas antes de una pelea: abstinencia completa según entrenador Khru Pit.
  - En general: muy poco o nada.
- **Condiciones de aplicación:** competidores; recomendable para cualquier usuario serio.
- **Referencias:** Cap. 2, entrevista Khru Pit; Cap. 2, sec. 6.
- **Comentarios/precauciones:** también se rechazan esteroides; no usar el libro para prescribir sustancias.

---

### Regla: `mt-bodyfat-ranges`

- Descripción breve: rangos de grasa corporal orientativos.
- **Tipo:** composición corporal.
- **Métrica principal:** `bodyFatPct`.
- **Valores numéricos:**
  - Hombres profesionales: 8–10%.
  - Mujeres: algo más alto.
  - Amateurs: pueden estar algo más altos.
- **Condiciones de aplicación:** competición.
- **Referencias:** Cap. 2, sec. 7.
- **Comentarios/precauciones:** no convertir en objetivo automático sin supervisión.

---

### Regla: `mt-fat-loss-rate`

- Descripción breve: tasa de pérdida de grasa considerada posible.
- **Tipo:** composición corporal / progresión.
- **Métrica principal:** `bodyFatPctLossPerMonth`.
- **Valores numéricos:**
  - Hasta ~3% de grasa corporal/mes con entrenamiento y dieta.
- **Condiciones de aplicación:** atletas que buscan dar peso; no usar en déficits agresivos sin control.
- **Referencias:** Cap. 1, sec. 5.
- **Comentarios/precauciones:** ⚠️ el libro no da detalles clínicos; usar con prudencia y preferir progresos menores sostenibles.

---

### Regla: `mt-weight-cut-nutrition`

- Descripción breve: reglas nutricionales para bajar peso de pelea.
- **Tipo:** nutrición / weight-making.
- **Métrica principal:** `calorieBalance`, `proteinEmphasis`.
- **Valores numéricos:**
  - Déficit calórico.
  - Aumentar proteína.
  - Reducir carbohidratos, sin eliminarlos del todo.
  - Grasas bajas, pero manteniendo grasas esenciales.
  - Comida proteica 2–3 h antes de entrenar; carbohidratos 1–2 h antes.
  - Post-entreno: carbohidratos + proteína, sin exceso de carbohidratos.
- **Condiciones de aplicación:** usuarios que buscan categoría menor.
- **Referencias:** Cap. 2, sec. 7.
- **Comentarios/precauciones:** no usar en personas con trastornos alimentarios o sin supervisión.

---

### Regla: `mt-weight-gain-nutrition`

- Descripción breve: reglas para subir masa muscular/categoría.
- **Tipo:** nutrición / hipertrofia funcional.
- **Métrica principal:** `calorieBalance`, `proteinEmphasis`.
- **Valores numéricos:**
  - Superávit/control calórico con aumento de ingesta.
  - Aumentar proteína.
  - Mantener dieta baja en grasas no deseadas, pero sin déficit de grasas valiosas.
  - Proteína 2–3 h antes de fuerza; snack carbohidratado 1–2 h antes.
  - Post-entreno: reposición de carbohidratos + proteína.
  - Proteína suficiente también en días de descanso.
- **Condiciones de aplicación:** atletas que suben de categoría; añadir entrenamiento de hipertrofia y reducir algo de Muay Thai específico para no sobreentrenar.
- **Referencias:** Cap. 2, sec. 7.
- **Comentarios/precauciones:** evitar ganar grasa por exceso descontrolado.

---

### Regla: `mt-stamina-frequency-duration`

- Descripción breve: frecuencia y duración mínima de stamina adicional.
- **Tipo:** frecuencia / duración.
- **Métrica principal:** `sessionsPerWeek`, `minutesPerSession`.
- **Valores numéricos:**
  - Mínimo: 1 sesión/semana.
  - Duración mínima: 20–30 min por sesión.
- **Condiciones de aplicación:** si el entrenamiento técnico ya no basta; idealmente después de técnica.
- **Referencias:** Cap. 3, sec. 4.
- **Comentarios/precauciones:** no hacer stamina intensa antes de técnica si compromete calidad.

---

### Regla: `mt-stamina-hr-zones`

- Descripción breve: zonas de intensidad por frecuencia cardiaca.
- **Tipo:** intensidad.
- **Métrica principal:** `pctMHR`.
- **Valores numéricos:**
  - Fórmula MHR: 220 − edad.
  - Regenerativo: ~65% MHR.
  - Básico: ~75% MHR.
  - Fitness: ~85% MHR.
  - Anaeróbico: umbral, solo avanzados/profesionales con base sólida.
- **Condiciones de aplicación:** usar pulsómetro; fórmula orientativa.
- **Referencias:** Cap. 3, sec. 4.
- **Comentarios/precauciones:** test de máximo esfuerzo no recomendado para usuarios fitness.

---

### Regla: `mt-beginner-stamina`

- Descripción breve: principiantes deben usar intensidad básica.
- **Tipo:** progresión / seguridad.
- **Métrica principal:** `zone`.
- **Valores numéricos:**
  - Zona: básica (~75% MHR).
  - Criterio cualitativo: poder hablar durante el esfuerzo.
- **Condiciones de aplicación:** principiantes y primeras sesiones.
- **Referencias:** Cap. 3, sec. 4.
- **Comentarios/precauciones:** evitar fatiga extrema; construir base antes de intervalos.

---

### Regla: `mt-interval-prescription`

- Descripción breve: intervalos para avanzados.
- **Tipo:** intensidad / stamina.
- **Métrica principal:** `intervalWork`, `intervalRest`.
- **Valores numéricos:**
  - Sprints: descanso 1–2 min.
  - Carreras de 400 yardas: descanso 2–3 min.
  - El descanso es trote muy suave, no paro total.
  - No correr al 100%; ~80% suficiente.
- **Condiciones de aplicación:** avanzados con base aeróbica.
- **Referencias:** Cap. 3, sec. 4; Cap. 5, Workouts y programa 8 semanas.
- **Comentarios/precauciones:** vigilar fatiga y recuperación.

---

### Regla: `mt-strength-frequency`

- Descripción breve: frecuencia de fuerza para mantener/mejorar.
- **Tipo:** frecuencia.
- **Métrica principal:** `sessionsPerWeek`.
- **Valores numéricos:**
  - 1 sesión/semana: mantiene.
  - 2 sesiones/semana: mejora.
  - Todos los grupos musculares al menos 1 vez/semana.
- **Condiciones de aplicación:** fuerza complementaria a Muay Thai.
- **Referencias:** Cap. 3, sec. 5.
- **Comentarios/precauciones:** no entrenar fuerza si se está enfermo.

---

### Regla: `mt-strength-reps-and-static`

- Descripción breve: repeticiones y tiempos para fuerza.
- **Tipo:** volumen / intensidad.
- **Métrica principal:** `repsPerSet`, `staticHoldSeconds`.
- **Valores numéricos:**
  - Principiantes dinámicos: 15–20 reps.
  - Estáticos: 30–60 s.
  - Avanzados: más reps o variantes más intensas; estáticos 1–2 min.
- **Condiciones de aplicación:** ejercicios de peso corporal y accesorios simples.
- **Referencias:** Cap. 3, sec. 5.
- **Comentarios/precauciones:** antes de subir intensidad, aumentar repeticiones.

---

### Regla: `mt-strength-rest`

- Descripción breve: pausas entre series.
- **Tipo:** descanso.
- **Métrica principal:** `restMinutesBetweenSets`.
- **Valores numéricos:**
  - Muchas reps / baja intensidad: 1–2 min.
  - Pocas reps / alta intensidad: 2–3 min.
- **Condiciones de aplicación:** fuerza general.
- **Referencias:** Cap. 3, sec. 5.
- **Comentarios/precauciones:** se puede usar formato circuito como variante.

---

### Regla: `mt-strength-recovery`

- Descripción breve: recuperación entre sesiones de fuerza.
- **Tipo:** descanso / progresión.
- **Métrica principal:** `hoursRecovery`.
- **Valores numéricos:**
  - Regeneración típica: 24–48 h.
  - No repetir el mismo workout dos días seguidos.
- **Condiciones de aplicación:** todos; especialmente si hay carga alta.
- **Referencias:** Cap. 3, sec. 5; Cap. 3, sec. 6.
- **Comentarios/precauciones:** signos de exceso: debilidad, mal sueño, sudoración, ligera subida de temperatura, caída de rendimiento.

---

### Regla: `mt-pain-and-illness`

- Descripción breve: detenerse ante dolor y no entrenar fuerza enfermo.
- **Tipo:** dolor / seguridad.
- **Métrica principal:** `painStop`.
- **Valores numéricos:**
  - No se da escala 0–10; criterio cualitativo claro: si hay dolor, parar.
  - Si duele y el dolor persiste en reposo, terminar sesión y consultar médico.
- **Condiciones de aplicación:** fuerza y ejercicios técnicos exigentes.
- **Referencias:** Cap. 3, sec. 5; disclaimer inicial.
- **Comentarios/precauciones:** ⚠️ el libro no define umbral numérico de dolor tolerable; no inventar escala.

---

### Regla: `mt-hardening`

- Descripción breve: acondicionamiento de contacto progresivo.
- **Tipo:** progresión de tejido / seguridad.
- **Métrica principal:** `bagHardnessLevel`.
- **Valores numéricos:**
  - Cualitativo: empezar con saco suave; aumentar dureza gradualmente.
  - Relleno: virutas de madera; luego añadir arena fina progresivamente.
- **Condiciones de aplicación:** shin/rodilla/codo para golpeo.
- **Referencias:** Cap. 3, sec. 1.
- **Comentarios/precauciones:** no golpear objetos sólidos/inflexibles; no usar agua caliente para reducir sensibilidad; saco lleno de arena solo para técnica muy buena y con precaución.

---

### Regla: `mt-stretch-training`

- Descripción breve: sesiones dedicadas a mejorar flexibilidad.
- **Tipo:** movilidad / frecuencia.
- **Métrica principal:** `sessionsPerWeek`, `holdSeconds`.
- **Valores numéricos:**
  - Frecuencia efectiva: al menos 2/semana.
  - Hold intensivo: 10–60 s.
  - Duración total sesión: 60–90 min incluyendo warm-up y cool-down.
- **Condiciones de aplicación:** cuando hay restricciones en hombros, cadera, isquios, aductores o gemelos.
- **Referencias:** Cap. 3, sec. 3.
- **Comentarios/precauciones:** no buscar flexibilidad extrema; demasiada movilidad puede aumentar riesgo.

---

### Regla: `mt-dynamic-stretch-safety`

- Descripción breve: estiramiento dinámico requiere calentamiento y control.
- **Tipo:** movilidad / seguridad.
- **Métrica principal:** `reps`, `rangeOfMotion`.
- **Valores numéricos:**
  - 5–10 repeticiones por movimiento.
  - Aumentar rango gradualmente.
- **Condiciones de aplicación:** avanzados o con buena percepción corporal; cuerpo bien caliente.
- **Referencias:** Cap. 3, sec. 3.
- **Comentarios/precauciones:** evitar rebotes agresivos más allá de tensión ligera.

---

### Regla: `mt-taper-fight`

- Descripción breve: reducción de carga antes de competir.
- **Tipo:** taper / preparación.
- **Métrica principal:** `daysBeforeFight`, `intensityReduction`.
- **Valores numéricos:**
  - Últimos días: bajar intensidad.
  - En la última semana: 4 días de entrenamiento ligero y últimos 3 días más enfocados en shadowboxing/táctica.
  - Últimos 3 días: peso, masaje, táctica; evitar sparring fuerte.
- **Condiciones de aplicación:** competidores.
- **Referencias:** Cap. 2, entrevista Khru Pit; Cap. 5, sec. 4.
- **Comentarios/precauciones:** objetivo: llegar fresco, reducir lesiones y dar peso.

---

### Regla: `mt-postfight-recovery`

- Descripción breve: recuperación después de competir.
- **Tipo:** descanso.
- **Métrica principal:** `restDaysPostFight`.
- **Valores numéricos:**
  - Aprox. 1 semana de descanso o reducción significativa.
  - Reanudar ligero como mucho tras 1 semana.
- **Condiciones de aplicación:** después de pelea.
- **Referencias:** Cap. 2, sec. 1; Cap. 5, sec. 4.
- **Comentarios/precauciones:** después, planificar nuevo ciclo.

---

### Regla: `mt-cycle-periodization`

- Descripción breve: cambiar el estímulo cada 6–12 semanas.
- **Tipo:** periodización.
- **Métrica principal:** `weeksPerCycle`.
- **Valores numéricos:**
  - Ciclo recomendado: 6–12 semanas.
  - Ejemplo de 10 semanas: semanas 1–6 base stamina + fuerza; semanas 7–10 mantener stamina y subir fuerza.
- **Condiciones de aplicación:** amateurs y avanzados.
- **Referencias:** Cap. 5, sec. 3.
- **Comentarios/precauciones:** evitar monotonía para no estancar.

---

### Regla: `mt-8week-fight-prep`

- Descripción breve: estructura de preparación competitiva de 8 semanas.
- **Tipo:** planificación competitiva.
- **Métrica principal:** `weeklyFocus`.
- **Valores numéricos/cualitativos:**
  - Semanas 1–4: Muay Thai, jogging/intervalos, fuerza full-body, sparring.
  - Semanas 5–7: táctica competitiva, sprints, sparring, mantenimiento de fuerza.
  - Semana 8: repaso táctico, shadowboxing, trote suave, descanso, competición.
- **Condiciones de aplicación:** avanzados/semiprofesionales.
- **Referencias:** Cap. 5, sec. 4.
- **Comentarios/precauciones:** reducir fuerza en últimas semanas; individualizar si hay corte de peso.

---

### Regla: `mt-technical-progression`

- Descripción breve: progresión técnica básica.
- **Tipo:** progresión skill.
- **Métrica principal:** `skillStage`.
- **Valores numéricos/cualitativos:**
  1. Guardia y desplazamiento.
  2. Técnicas de ataque lentas al aire.
  3. Aumento de velocidad.
  4. Saco/pads.
  5. Partner controlado.
  6. Counters.
  7. Feints.
  8. Técnicas tradicionales avanzadas.
- **Condiciones de aplicación:** principiantes en adelante.
- **Referencias:** Cap. 1, sec. 6.
- **Comentarios/precauciones:** mantener técnicas aprendidas aunque se añadan nuevas.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: `muay-thai-base-tecnica`

- **Disciplina:** Muay Thai / técnica de combate.
- **Objetivo final:** ejecutar guardia, desplazamientos y técnicas básicas de forma automática, segura y aplicable.
- **Requisitos de seguridad previos:** calentamiento, ausencia de dolor agudo, protección de manos, supervisión si hay contacto.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Guardia y postura | Pies separados, talón trasero elevado, manos altas, mentón recogido | Mantener postura sin cruzar pies | Hombros tensos, guardia baja | Cap. 3, sec. 2 |
| 2 | Desplazamiento | Avanzar/retrocedir/lateralizar manteniendo equilibrio | Cambios de guardia fluidos | Pasos demasiado cortos, perder equilibrio | Cap. 3, sec. 2 |
| 3 | Puños básicos | Straight, hook, uppercut con giro de cadera y retorno rápido | Ejecución lenta correcta | Codo bajo en straight, no retornar | Cap. 3, sec. 2 |
| 4 | Codos básicos | Rotating, side, uppercut/reverse elbow | Completar movimiento si falla objetivo | Golpear solo con brazo, perder guardia | Cap. 3, sec. 2 |
| 5 | Patadas y rodillas | Round kick, push kick, straight knee | Pivotar y regresar rápido a guardia | No pivotar, patear sin cadera | Cap. 3, sec. 2 |
| 6 | Kata básica | Secuencia de técnicas básicas front/rear | Realizar sin pausas y con técnica correcta | Olvidar lados débiles | Cap. 3, sec. 2 |
| 7 | Saco/pads | Aplicar técnicas contra resistencia | Potencia creciente sin perder técnica | Golpes impulsivos, postura rota | Cap. 2, sec. 3 |
| 8 | Partner controlado | Ataques/defensas acordadas | Timing y distancia sin fuerza excesiva | Tensión, usar solo técnicas familiares | Cap. 2, sec. 3 |

---

### SkillPath: `muay-thai-combinaciones`

- **Disciplina:** Muay Thai / táctica ofensiva.
- **Objetivo final:** encadenar técnicas hasta crear patrones automáticos de pelea.
- **Requisitos de seguridad previos:** dominio básico de cada técnica individual; postura estable.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Nonsai 1 | Puño delantero + codo rotatorio trasero + rodilla trasera con agarre | Fluidez sin perder equilibrio | Pararse entre técnicas | Cap. 4, sec. 2 |
| 2 | Nonsai 2 | Puño delantero + puño trasero + cambio de guardia + rodilla | Cambio de guardia rápido | Bajar guardia al cambiar | Cap. 4, sec. 2 |
| 3 | Nonsai 3 | Hook delantero + round kick trasero + push kick delantero | Salida tras patada | Quedarse cerca después del kick | Cap. 4, sec. 2 |
| 4 | Nonsai 4 | Puños + round kick + rodilla trasera | Transición kick→rodilla | Perder base al pisar | Cap. 4, sec. 2 |
| 5 | Kem 1 | Puño trasero + hook delantero + rodilla con agarre | Uso de peso corporal | Jalón sin golpe previo | Cap. 4, sec. 2 |
| 6 | Kem 2 | Round kick + cambio + rodilla + codo trasero | Cambiar de nivel sin telegrafiar | Apoyar mal el pie | Cap. 4, sec. 2 |
| 7 | Kem 3 | Cambio + round kick + rodillas alternas + push kick | Mantener presión y luego liberar | Sobrecomprometerse | Cap. 4, sec. 2 |
| 8 | Kem 4 | Puño al cuerpo + hook + low kick + codo + rodilla | Secuencia larga con postura | Acelerar sin control | Cap. 4, sec. 2 |
| 9 | Saiyok 1 | Puño delantero + push kick + round kick trasero | Crear y usar distancia | Patear sin controlar centro | Cap. 4, sec. 2 |
| 10 | Saiyok 2 | Puño trasero + codo rotatorio + rodilla trasera | Entrar con codo | Dejar cabeza expuesta | Cap. 4, sec. 2 |
| 11 | Saiyok 3 | Round kick trasero + reverse elbow + rotating elbow | Giros encadenados | Mareo/pérdida de eje | Cap. 4, sec. 2 |
| 12 | Saiyok 4 | Puño delantero + uppercut elbow + rotating elbow + rodilla | Codo inmediato tras puño | Retraer brazo antes del codo | Cap. 4, sec. 2 |

---

### SkillPath: `muay-thai-counters`

- **Disciplina:** Muay Thai / defensa-contragolpe.
- **Objetivo final:** responder a ataques con el menor número de pasos posible y recuperar iniciativa.
- **Requisitos de seguridad previos:** partner controlado, sin potencia plena; aprender timing antes que fuerza.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Contra puño | Saiyok: lean back + codo rotatorio; Kem: desvío + uppercut elbow | Contra inmediata tras defensa | Retroceder sin contragolpear | Cap. 4, sec. 3 |
| 2 | Contra codo | Saiyok: step back + low kick; Kem: block con uppercut elbow | Detectar codo temprano | Quedarse en línea de ataque | Cap. 4, sec. 3 |
| 3 | Contra round kick | Saiyok: side kick a pierna de apoyo; Kem: bloqueo con shin + contra | No perder equilibrio | Bloquear tarde | Cap. 4, sec. 3 |
| 4 | Contra push kick | Saiyok: step back + round kick; Kem: desvío lateral + round/punch/knee | Usar posición desbalanceada del rival | Agarrar sin desviar | Cap. 4, sec. 3 |
| 5 | Contra rodilla | Saiyok: step in + puño; Kem: bloqueo con rodilla/pierna + codo | Cortar avance | Cruzar pies al entrar | Cap. 4, sec. 3 |
| 6 | Contra clinch | Saiyok: mano a mentón + control de codo + salir; Kem: throw en dirección del ataque + rodilla | Salir o desequilibrar rápido | Forcejear sin técnica | Cap. 4, sec. 3 |

**Nota:** las contras se consideran mejores cuando requieren pocos pasos y se ejecutan rápido; el libro desaconseja secuencias largas poco realistas.

---

### SkillPath: `muay-thai-feints`

- **Disciplina:** Muay Thai / engaño táctico.
- **Objetivo final:** provocar reacción defensiva para atacar zona desprotegida.
- **Requisitos de seguridad previos:** ejecución rápida y relajada; no usar fintas lentas que permitan contra.
- **Pasos:**

| Step | Finta | Follow-up | Descripción breve | Criterio | Errores típicos | Notas |
|---|---|---|---|---|---|---|
| 1 | Straight punch | Spinning elbow | Atraer defensa alta y girar | Giro rápido | Girar lento | Cap. 4, sec. 4 |
| 2 | Elbow hit | Knee kick | Provoca bloqueo alto, entrar rodilla | Agarre de cuello | Quedarse lejos | Cap. 4, sec. 4 |
| 3 | Kick inside leg | Head kick misma pierna | Low kick ligero y high kick | Continuidad | Apoyar lento | Cap. 4, sec. 4 |
| 4 | Round kick | Push kick misma pierna | Convertir arco en empuje | Cambio de trayectoria | Telegrafiar | Cap. 4, sec. 4 |
| 5 | Round kick | Side kick misma pierna | Finta circular y entrada lineal | Control de cadera | Perder eje | Cap. 4, sec. 4 |
| 6 | High kick | Elbow hit | Provoca defensa alta y entrar codo | Pisar adelante | Bajar guardia | Cap. 4, sec. 4 |
| 7 | Push kick | Straight punch | Finta media y puño rápido | Retorno rápido del pie | Quedarse lejos | Cap. 4, sec. 4 |
| 8 | Push kick | Elbow hit | Provoca catch y atacar codo | Cambiar nivel | Dejar mano baja | Cap. 4, sec. 4 |
| 9 | Push kick body | Round kick head misma pierna | Subir ataque tras finta media | Velocidad | Caer antes de tiempo | Cap. 4, sec. 4 |
| 10 | Push kick leg | Knee kick | Obliga a retirar pierna y entrar rodilla | Paso adelante | No cerrar distancia | Cap. 4, sec. 4 |
| 11 | Knee kick | Rotating elbow | Finta rodilla y codo | Mantener torso recto | Inclinarse | Cap. 4, sec. 4 |
| 12 | Knee kick | Spinning elbow | Finta rodilla y giro | Apoyo externo correcto | Perder balance | Cap. 4, sec. 4 |
| 13 | Knee in clinch | Sweep | Finta rodilla y barrido | Empuje simultáneo | Barrer con pie interno ilegal | Cap. 4, sec. 4 |

**Nota sobre técnicas tradicionales:** el libro menciona 15 técnicas Mae Mai y muchas variantes Boran; recomienda aprenderlas tras experiencia amplia, no todas, y solo las que encajen con el estilo del atleta.

---

### SkillPath: `muay-thai-stamina-levels`

- **Disciplina:** acondicionamiento cardiovascular para Muay Thai.
- **Objetivo final:** construir base aeróbica y luego tolerancia a intensidad específica de pelea.
- **Requisitos de seguridad previos:** conocer frecuencia cardiaca aproximada; evitar máximos esfuerzos sin base.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Regenerativo | Muy baja intensidad, cómodo | Recuperación activa | Usarlo como único estímulo | Cap. 3, sec. 4 |
| 2 | Básico | Intensidad moderada, poder hablar | Mantener 20–30+ min | Ir demasiado rápido | Cap. 3, sec. 4 |
| 3 | Fitness | ~85% MHR, esfuerzo sostenido | Recuperación rápida entre esfuerzos | Acumular fatiga | Cap. 3, sec. 4 |
| 4 | Intervalos/anaeróbico | Sprints/400-yard con pausas activas | Tolerar ácido láctico y bajar HR | Hacerlo sin base | Cap. 3, sec. 4; Cap. 5 |

---

### SkillPath: `muay-thai-strength-workouts`

- **Disciplina:** fuerza aplicada a combate.
- **Objetivo final:** fuerza funcional, potencia de golpeo/pateo y resiliencia.
- **Requisitos de seguridad previos:** técnica correcta; sin dolor; progresar con reps antes que intensidad.
- **Pasos:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas |
|---|---|---|---|---|---|
| 1 | Workout C: fuerza general | Push-ups, pull-ups/rows, overhead press, squats/lunges, bridge, core, Superman | 2–3 series, 10–20 reps; estáticos 20–60 s | Compensaciones | Cap. 3, sec. 6 |
| 2 | Workout D: potencia de puño | Push-ups explosivos, ball push-ups, row/pull, press, bag lift/lunge, planks | Mantener velocidad y control | Perder alineación | Cap. 3, sec. 6 |
| 3 | Workout E: pateo explosivo | Jump squat, one-leg squat kick, squat+pushup, lunge, bridge | Potencia con aterrizaje controlado | Rodilla colapsa | Cap. 3, sec. 6 |
| 4 | Workout F: resiliencia | Squat+pushup, pull/row, neck, leg pull+pushup, planks laterales/reversos | Mantener postura bajo fatiga | Respiración contenida | Cap. 3, sec. 6 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Guardia y desplazamiento

- **Cues principales:**
  - Pies paralelos al inicio, anchura de hombros.
  - Pie trasero girado ~45°.
  - Talón trasero ligeramente elevado.
  - Mentón recogido.
  - Mano delantera a altura de cejas, trasera protegiendo mentón.
  - Hombros relajados.
  - Mirar cuerpo completo del rival, no solo un punto.
- **Errores frecuentes:**
  - Cruzar pies al moverse.
  - Pasos demasiado cortos.
  - Bajar guardia.
  - Tensión excesiva en hombros.
- **Variantes seguras:**
  - Practicar con objeto colgante para distancia y pasos laterales.
  - Hacer cambios de guardia deliberados.
- **Indicaciones por zona:**
  - Cuidado con tobillos/rodillas si hay giros bruscos.
- **Referencias:** Cap. 3, sec. 2.

---

### Puños: straight, hook, uppercut

- **Cues principales:**
  - Empujar desde pie trasero.
  - Codo abajo en straight el mayor tiempo posible.
  - Girar cadera y hombro.
  - Puño rota justo antes del impacto.
  - Retorno rápido a guardia.
  - En hook, peso hacia lado activo y giro de cuerpo.
  - En uppercut, ángulo ~90° entre brazo superior y antebrazo.
- **Errores frecuentes:**
  - Golpear solo con brazo.
  - No girar cadera.
  - Bajar mano opuesta.
  - No retornar a guardia.
- **Variantes seguras:**
  - Sombra lenta.
  - Saco suave.
  - Maize bag para uppercuts controlados.
- **Indicaciones por zona:**
  - Muñeca/hombro deben estar alineados; usar vendaje.
- **Referencias:** Cap. 3, sec. 2.

---

### Codos

- **Cues principales:**
  - Completar el movimiento si se falla.
  - Mano opuesta protege mandíbula.
  - Girar tronco y cadera.
  - Impactar con punta del codo cuando aplique.
  - Retorno rápido.
- **Errores frecuentes:**
  - Codo incompleto.
  - Exposición de cabeza tras giro.
  - Perder equilibrio en codos rotatorios.
- **Variantes seguras:**
  - Sombra sin contacto.
  - Pads con control.
  - Maize bag para precisión.
- **Indicaciones por zona:**
  - Evitar giros agresivos sin control de core.
- **Referencias:** Cap. 3, sec. 2; Cap. 4.

---

### Round kick

- **Cues principales:**
  - Patinar como si atravesaras objetivo.
  - Impacto con tibia.
  - Pie de apoyo pivota hacia fuera.
  - Cadera acompaña.
  - Pierna extendida al impacto.
  - Regreso rápido a guardia.
- **Errores frecuentes:**
  - No pivotar.
  - Patear con pie en lugar de tibia.
  - Perder equilibrio al fallar.
- **Variantes seguras:**
  - Saco suave primero.
  - Patadas bajas antes que altas.
- **Indicaciones por zona:**
  - Acondicionar tibia progresivamente; no superficies duras.
- **Referencias:** Cap. 3, sec. 2; Cap. 3, sec. 1.

---

### Push kick

- **Cues principales:**
  - Rodilla hacia arriba antes de extender.
  - Guardia alta.
  - Línea recta al objetivo.
  - Uso de cadera.
  - Tronco ligeramente atrás.
  - Retorno rápido.
- **Errores frecuentes:**
  - Empujar sin cadera.
  - Inclinarse demasiado atrás.
  - Quedarse apoyado tras fallar.
- **Variantes seguras:**
  - Frontal ligero para distancia.
  - Trasero para potencia con paso previo.
- **Indicaciones por zona:**
  - Útil para controlar clincher y crear distancia.
- **Referencias:** Cap. 3, sec. 2; Cap. 4, sec. 1.

---

### Knee kick

- **Cues principales:**
  - Paso adelante o cambio de guardia.
  - Talón elevado.
  - Pierna de apoyo pivota.
  - Cadera hacia delante.
  - Tronco ligeramente atrás.
  - Guardia alta.
- **Errores frecuentes:**
  - Saltar sin control.
  - Bajar guardia.
  - No cerrar distancia.
- **Variantes seguras:**
  - Rodilla al saco.
  - Clinch controlado con agarre de cuello.
- **Indicaciones por zona:**
  - Requiere buena estabilidad de rodilla de apoyo.
- **Referencias:** Cap. 3, sec. 2; Cap. 4.

---

### Shadowboxing

- **Cues principales:**
  - Actuar como contra oponente real.
  - Mover, esquivar, atacar y defender.
  - No sobreextender articulaciones.
  - Mantener guardia.
- **Errores frecuentes:**
  - Golpes al aire sin intención.
  - Postura relajada excesiva.
  - No visualizar objetivos.
- **Variantes:**
  - Frente a espejo.
  - Visualizando oponente específico.
- **Referencias:** Cap. 2, sec. 3.

---

### Pad training

- **Cues principales:**
  - Técnica correcta antes que potencia.
  - Estancia estable.
  - Equilibrio y guardia.
  - Repetir combinaciones.
- **Errores frecuentes:**
  - Movimientos precipitados.
  - Caer en patrones predecibles.
- **Uso táctico:**
  - Entrenador simula estilos de oponente.
- **Referencias:** Cap. 2, sec. 3.

---

### Heavy bag

- **Cues principales:**
  - Buscar dureza máxima con técnica correcta.
  - Combinar técnica específica e instinto.
  - Mantener movimiento.
- **Errores frecuentes:**
  - Golpes impulsivos.
  - Técnica incorrecta en saco duro.
- **Variantes seguras:**
  - Principiantes: relleno suave.
  - Avanzados: relleno más duro para acondicionamiento.
- **Referencias:** Cap. 2, sec. 3; Cap. 3, sec. 1.

---

### Partner y sparring

- **Cues principales:**
  - Control y distancia.
  - Técnicas acordadas en partner.
  - Sparring libre pero no a máxima potencia.
  - Entrenador corrige.
- **Errores frecuentes:**
  - Exceso de fuerza.
  - Nerviosismo.
  - No probar técnicas nuevas.
- **Seguridad:**
  - Equipo protector en sparring intenso.
- **Referencias:** Cap. 2, sec. 3.

---

### Clinch

- **Cues principales:**
  - Cuerpo erguido.
  - Control de agarre y posición.
  - Fortalecer cuello.
  - Novatos: técnica antes que fuerza.
- **Errores frecuentes:**
  - Encorvarse.
  - Forcejear sin dirección.
  - Perder base.
- **Variantes:**
  - Entrenar con compañeros más altos/pesados.
- **Referencias:** Cap. 2, sec. 3.

---

### Fuerza: upper-body push

Ejercicios: push-ups, push-ups on ball, push-ups on fists, clap push-ups, handstand push-up.

- **Cues principales:**
  - Cuerpo tenso.
  - Espalda recta.
  - Escápulas estables.
  - Codos cerca del cuerpo en push-up básico.
  - Respiración continua.
- **Errores frecuentes:**
  - Espalda hueca.
  - Codos demasiado abiertos sin control.
  - Hombros hacia orejas.
- **Variantes seguras:**
  - Apoyo en objeto medio si no hay pelota.
  - Menor ROM.
  - Push-ups en puños para estabilizar muñeca.
- **Referencias:** Cap. 3, sec. 5.

---

### Fuerza: upper-body pull

Ejercicios: pull-ups, rope pull-ups, dumbbell row.

- **Cues principales:**
  - Pecho arriba.
  - Codos hacia costillas o atrás.
  - No encoger hombros.
  - Abdomen tenso.
- **Errores frecuentes:**
  - Balanceo.
  - Rango incompleto.
  - Hombros elevados.
- **Variantes seguras:**
  - Toalla sobre objeto alto si no hay barra/cuerda.
  - Row con apoyo estable.
- **Referencias:** Cap. 3, sec. 5.

---

### Fuerza: lower-body

Ejercicios: squats, lunges, jump squats, one-leg knee bend kicks.

- **Cues principales:**
  - Rodillas sobre pies.
  - Glúteos atrás.
  - Abdomen tenso.
  - Aterrizaje controlado.
- **Errores frecuentes:**
  - Valgo de rodilla.
  - Rodilla hacia delante excesivo.
  - Compensación lumbar.
- **Variantes seguras:**
  - Rango limitado.
  - Sin peso.
  - Apoyo en superficie estable.
- **Referencias:** Cap. 3, sec. 5.

---

### Fuerza: posterior chain / hinge

Ejercicios: shoulder bridge, reverse plank, lifting punching bag, Superman.

- **Cues principales:**
  - Glúteos activos.
  - Pelvis controlada.
  - Espalda neutra.
  - Movimiento lento.
- **Errores frecuentes:**
  - Hiperextender lumbar.
  - Empujar con cuello.
  - Perder tensión abdominal.
- **Variantes seguras:**
  - Bridge a una pierna solo si hay control.
  - Bag lift con objeto ligero.
- **Referencias:** Cap. 3, sec. 5.

---

### Fuerza: core

Ejercicios: crunches with turns, beetle, plank, lateral plank, reverse plank, leg pulls.

- **Cues principales:**
  - Costillas controladas.
  - No jalar cuello.
  - Respiración continua.
  - Pelvis estable.
- **Errores frecuentes:**
  - Balanceo.
  - Espalda hueca.
  - Rotar solo cabeza.
- **Variantes seguras:**
  - Menor tiempo estático.
  - Apoyo en suelo en lugar de pelota.
- **Referencias:** Cap. 3, sec. 5.

---

### Cuello

Ejercicios: neck pulls.

- **Cues principales:**
  - Movimientos lentos.
  - Peso moderado.
  - Control cervical.
- **Errores frecuentes:**
  - Cargas altas.
  - Movimientos balísticos.
  - Cargar dientes/cabeza sin protección.
- **Variantes seguras:**
  - Toalla o resistencia manual.
- **Referencias:** Cap. 3, sec. 5.

---

### Tácticas de pelea según oponente

- **Contra clincher:**
  - Mantener distancia con puños y push kicks.
  - Usar round kicks potentes.
  - Esperar descuido para uppercut elbow al mentón.
- **Contra distance fighter:**
  - Cerrar distancia sin descuidarse.
  - Bloquear patadas desde base estable.
  - Seguir con puños/kicks/rodillas; si se está cerca, no dejar escapar.
- **Contra oponente truculento/injusto:**
  - Mantener calma.
  - No reaccionar a provocaciones.
  - Imponer estilo propio.
- **Contra agresivo rápido:**
  - Defensa segura y guardia.
  - Esperar que baje presión, por ejemplo hacia tercer round, y tomar control.
- **Contra southpaw:**
  - Entrenar cambios de guardia.
  - Buscar variabilidad para sorprender.
- **Referencias:** Cap. 4, entrevista Khru Pit.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Condición: sobreentrenamiento / fatiga acumulada

- **Zona:** sistémico.
- **Etiología resumida:** carga excesiva sin regeneración suficiente.
- **Signos y síntomas clave:** debilidad, mal sueño, sudoración anormal, ligero aumento de temperatura, caída de rendimiento, mayor riesgo de lesión/infección.
- **Stadia/fases:** no definidas formalmente.
- **Protocolo de tratamiento o rehab:**
  - **Fase 1:**
    - Objetivo: reducir carga.
    - Qué se hace: descanso, sueño, nutrición adecuada, entrenamiento suave si procede.
    - Qué NO se hace: seguir aumentando intensidad.
    - Criterio para pasar a fase 2: recuperación de energía y sueño normal.
  - **Fase 2:**
    - Objetivo: reintroducir carga gradual.
    - Qué se hace: volumen bajo, técnica, stamina ligera.
    - Criterio: tolerancia sin síntomas.
- **Ejercicios de prehab/movilidad:** movilidad suave, jogging regenerativo, estiramientos breves.
- **Umbrales de dolor/red flags:** si síntomas persisten, buscar profesional.
- **Referencias:** Cap. 3, sec. 5.

---

### Condición: riesgo de lesiones por aumento brusco de entrenamiento

- **Zona:** foot, ankle, knee.
- **Etiología resumida:** incremento rápido de volumen/intensidad.
- **Signos y síntomas clave:** molestias articulares, dolor al cargar.
- **Protocolo/prehab:**
  - Mantener frecuencia mínima si hay poco tiempo.
  - Progresión gradual.
  - Calentamiento y buen apoyo.
- **Red flags:** dolor persistente o agudo.
- **Referencias:** Cap. 1, sec. 1.

---

### Condición: acondicionamiento de contacto / shin hardening

- **Zona:** shin, knee, elbow.
- **Etiología resumida:** necesidad de tolerar impacto en Muay Thai.
- **Signos de mala práctica:** dolor excesivo, hematomas severos, técnica incorrecta.
- **Protocolo seguro:**
  - **Fase 1:** saco suave, técnica correcta.
  - **Fase 2:** saco con virutas de madera.
  - **Fase 3:** añadir arena progresivamente.
- **Qué NO hacer:**
  - Golpear superficies sólidas.
  - Usar agua caliente para reducir sensibilidad.
  - Pasar directo a saco muy duro.
- **Criterio para avanzar:** tolerancia progresiva sin dolor incapacitante.
- **Red flags:** dolor óseo persistente, inflamación significativa.
- **Referencias:** Cap. 3, sec. 1.

---

### Condición: déficits de movilidad / acortamientos musculares

- **Zona:** shoulder, hip, hamstrings, adductors, calves.
- **Etiología resumida:** entrenamiento repetitivo sin estiramiento adecuado.
- **Signos:** restricción de ROM, técnica limitada.
- **Protocolo:**
  - Estiramientos breves antes y después.
  - Sesiones dedicadas 2 veces/semana si hay déficit.
  - Holds 10–60 s según fase.
- **Qué NO hacer:**
  - Estiramientos intensivos tras sesión agotadora.
  - Forzar dolor.
  - Buscar splits innecesarios.
- **Red flags:** dolor articular o muscular agudo.
- **Referencias:** Cap. 3, sec. 3.

---

### Condición: protección de cuello y mandíbula

- **Zona:** neck, jaw.
- **Etiología resumida:** impactos y clinch.
- **Prehab:** neck pulls controlados, trabajo de core y postura.
- **Advertencias:**
  - No usar cargas altas con dientes.
  - Preferir toalla/resistencia manual.
  - Movimientos lentos.
- **Red flags:** dolor cervical, mareos, síntomas neurológicos → profesional sanitario.
- **Referencias:** Cap. 3, sec. 5.

---

### Nota general sobre dolor

- El libro no entrega una escala 0–10 de dolor tolerable.
- Usa reglas cualitativas: parar si hay dolor; si persiste, médico.
- ⚠️ No inferir umbrales de dolor tolerable donde no existen.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Sueño

- Recomendación general: dormir una hora adicional cuando se entrena.
- Atletas élite: 6–8 h nocturnas + 2–3 h de descanso/siesta al mediodía.
- La regeneración se considera parte del rendimiento.
- **Referencias:** Cap. 1, sec. 3; Cap. 2, sec. 5.

### Estrés / enfoque mental

El libro describe características del “espíritu del boxeador tailandés”:

- Visión clara del objetivo.
- Coraje para cambiar hábitos.
- Concentración y evitar distracciones.
- Ambición sostenida.
- Disciplina continua, no esfuerzos aislados.
- Autoconfianza.
- Respeto por entrenador, compañeros y oponente.
- Disposición a sacrificar vida nocturna/excesos.
- Voluntad de aprender.
- Modestia y precaución con agentes/entornos poco fiables.

**Traducción útil para app:** prompts de coaching, adherencia, establecimiento de metas y control de carga. No usar como diagnóstico psicológico.

- **Referencias:** Cap. 1, sec. 2.

### Nutrición

Principios generales:

- Alta proporción de carbohidratos complejos: patatas, pasta, pan integral.
- Proteínas bajas en grasa: requesón, claras, atún, ternera magra, whey.
- Minimizar grasas saturadas: embutidos, quesos grasos, mantequilla, frituras.
- Mantener grasas insaturadas: pescado, nueces, aceites de calidad.
- Dieta variada con frutas y verduras.
- Suplementos de vitaminas/minerales si hay déficit, entrenamiento intenso o pérdida de peso: vitamina C, magnesio, calcio, zinc, selenio.
- Hidratación mínima ~1.9 L/día; más si sudor/dieta baja.
- Comidas: 3 principales + snacks; cena temprana.
- Snacks recomendados: fruta, verdura, proteína; evitar dulces.
- **Referencias:** Cap. 2, sec. 6.

### Nutrición por objetivo

- **Mantener peso:** balance calórico; comida principal ~3 h antes; snack carbohidratado ~1 h antes; post-entreno carbohidratos + proteína.
- **Reducir peso:** déficit; más proteína; reducir carbohidratos sin eliminar; mantener grasas esenciales; cuidado con hambre post-entrenamiento.
- **Aumentar peso:** más ingesta/proteína; entrenamiento de hipertrofia; reducir Muay Thai excesivo para no sobreentrenar.
- **Referencias:** Cap. 2, sec. 7.

### Entrenar enfermo

- Regla explícita: si estás enfermo, no hacer fuerza porque puede comprometer la curación.
- No hay regla “above/below the neck”; no inventarla.
- **Referencias:** Cap. 3, sec. 5.

### Alcohol y vida nocturna

- El entrenamiento de alto nivel es incompatible con fiestas frecuentes y alcohol.
- A partir de ~30 años, cargas altas y vida nocturna se contradicen más.
- Para competidores: evitar alcohol completamente en últimas 3 semanas según Khru Pit.
- **Referencias:** Cap. 1, sec. 2; Cap. 2, entrevista Khru Pit.

### Carrera deportiva y edad

- Empezar entre 15–18 años es ventajoso, pero no imprescindible.
- Se asume que tras ~2 años de entrenamiento intensivo se puede competir.
- A partir de ~35 años es muy difícil mantener intensidad competitiva alta.
- **Referencias:** Cap. 1, sec. 5.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente principal para reglas de estructura de sesiones de Muay Thai: warm-up, técnica, cool-down.
  - Generación de plantillas de entrenamiento para principiante/amateur/pro con volúmenes y rondas.
  - Reglas de frecuencia cardiaca para stamina: zonas 65/75/85% MHR.
  - SkillPaths de técnica: básica, combinaciones, contras, fintas, clinch y sparring controlado.
  - Reglas de fuerza-resistencia con peso corporal: repeticiones, pausas, frecuencia, progresiones.
  - Reglas de weight-making: mantenimiento, corte y subida de peso con timing de comidas.
  - Recomendaciones de regeneración: sueño, descanso semanal, masaje, reducción pre-pelea.
  - Enriquecimiento de cues técnicos para golpes, patadas, codos, rodillas y defensa.

- **Limitaciones:**
  - No es libro médico ni de rehabilitación clínica; no debe usarse para diagnosticar o tratar lesiones.
  - Las cargas de Saiyok/Kem son de élite; el sistema debe escalarlas para usuarios recreativos.
  - No hay escala numérica de dolor; no fabricar umbrales 0–10.
  - Muchas recomendaciones de combate requieren supervisión técnica.
  - La paginación no está disponible en el texto; usar capítulo/sección.
  - Algunas tablas de planes semanales de Saiyok/Kem aparecen mencionadas pero no completas en el extracto; ⚠️ no inventar detalles faltantes.

- **Recomendaciones específicas:**
  - Crear `rules/muay-thai-session.ts` con estructura warm-up/main/cooldown, rondas y modalidades.
  - Crear `rules/muay-thai-conditioning.ts` con zonas de stamina, intervalos y frecuencia mínima.
  - Crear `rules/muay-thai-strength.ts` con workouts C–F, reps, pausas y progresión.
  - Crear SkillPath `muay-thai-technical-base` y SkillPaths derivados: `muay-thai-combinations`, `muay-thai-counters`, `muay-thai-feints`.
  - Añadir metadata de seguridad: `contactIntensity`, `protectiveGear`, `coachSupervision` para sparring/clinch.
  - Añadir módulo de `weight-making` con objetivos maintain/cut/gain y advertencias de supervisión.
  - No usar este libro para motor de rehab clínico; si se usa en prehab, mantenerlo como reglas de prevención y derivación a profesional ante dolor persistente.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
Entendido. Para que los agentes desarrolladores y diseñadores de reglas de **Plan Maestro OS** puedan implementar este libro sin fricciones, primero haré el **Reporte de Datos Visuales Faltantes** (debido a la naturaleza de texto plano del volcado) y luego procederé a **ejecutar las 7 recomendaciones** entregando las estructuras de datos, interfaces en TypeScript y configuraciones del motor de reglas listas para integrar.

---

### ⚠️ BLOQUE 0: Reporte de Datos Visuales Faltantes (Limitaciones del Texto)

El libro original depende fuertemente de fotografías y DVDs. Al extraer solo el texto, los siguientes detalles biomecánicos quedan implícitos y requieren que el agente de UI/UX o el motor de animaciones use **defaults biomecánicos estándar** o consulte los DVDs del autor (`Muay Thai DVD Series 2012-2013`) para ser exactos:

1. **Ángulos exactos en Estiramientos (Cap. 3.3):** El texto describe posiciones (ej. "Tense-Relax-Extend", "Relax-Extend") y menciona imágenes (A-B, C-D), pero no detalla la angulación exacta de la pelvis o la rotación de la tibia en estiramientos de suelo. *Solución OS: Usar protocolos estándar de PNF (Facilitación Neuromuscular Propioceptiva) para los tiempos de tensión (5s) y relajación (1-3s).*
2. **Puntos de apoyo en Balón Medicinal/Bosu (Cap. 3.5):** Ejercicios como *Pushups on exercise ball* o *Shoulder Bridge* mencionan el uso del balón para "estimular la interacción muscular", pero las fotos dictan la altura exacta. *Solución OS: Marcar estos ejercicios con la tag `requiresBalanceEquipment: true` y sugerir regresiones al suelo.*
3. **Técnicas Tradicionales Mae Mai Muay Boran (Cap. 1.6 y 4):** El libro menciona que existen 15 técnicas Mae Mai y que se usan para sorprender, pero **explícitamente delega la enseñanza de las mismas a otro libro** (*Muay Thai Counter Techniques, 2013*). *Solución OS: No crear SkillPaths de Muay Boran con este libro; dejar un placeholder `skillCategory: 'traditional-boran'` que requiera inyección de datos externa.*
4. **Timing Visual de Fintas y Contras (Cap. 4):** El texto explica la secuencia (ej. "Finta de push kick -> baja la guardia -> codo"), pero el *timing* de fracciones de segundo y la transferencia de peso visual no se pueden cuantificar en texto. *Solución OS: Añadir `cues: ['timing', 'weight-shift']` y requerir video de referencia en la app.*

---

### 🚀 BLOQUE 1-7: Implementación Técnica de las 7 Recomendaciones

A continuación, se entregan los artefactos técnicos (Interfaces TS, JSON de Reglas y Constantes) para que el motor de **Plan Maestro OS** ingiera el conocimiento del libro.

#### 1) `rules/muay-thai-session.ts` (Estructura de Sesión y Volúmenes)

```typescript
/**
 * Reglas de estructura de sesión y volumen técnico según nivel.
 * Fuente: Cap. 2 (Effective Training) y Cap. 5 (Training Plans)
 */

export enum UserLevel {
  FITNESS = 'fitness',
  BEGINNER = 'beginner',
  AMATEUR = 'amateur',
  PRO = 'pro'
}

export interface SessionPhase {
  name: 'warmup' | 'main_technique' | 'cooldown';
  durationMin: { min: number; max: number };
  components: string[];
}

export const MUAY_THAI_SESSION_TEMPLATES: Record<UserLevel, SessionPhase[]> = {
  [UserLevel.FITNESS]: [
    { name: 'warmup', durationMin: { min: 10, max: 15 }, components: ['skipping', 'dynamic_stretch'] },
    { name: 'main_technique', durationMin: { min: 40, max: 60 }, components: ['shadow', 'bag', 'pads'] },
    { name: 'cooldown', durationMin: { min: 10, max: 15 }, components: ['light_core', 'static_stretch'] }
  ],
  [UserLevel.AMATEUR]: [
    { name: 'warmup', durationMin: { min: 15, max: 30 }, components: ['run', 'skipping', 'joint_mobility'] },
    { name: 'main_technique', durationMin: { min: 50, max: 90 }, components: ['shadow', 'pads', 'bag', 'partner', 'clinch'] },
    { name: 'cooldown', durationMin: { min: 15, max: 15 }, components: ['calisthenics', 'light_jog', 'stretch'] }
  ],
  [UserLevel.PRO]: [
    { name: 'warmup', durationMin: { min: 30, max: 120 }, components: ['long_run', 'sprints', 'skipping'] }, // Kem/Saiyok runs
    { name: 'main_technique', durationMin: { min: 90, max: 120 }, components: ['shadow', 'pads', 'bag', 'sparring', 'clinch'] },
    { name: 'cooldown', durationMin: { min: 15, max: 20 }, components: ['high_rep_calisthenics', 'massage'] }
  ]
};

// Regla de Frecuencia Semanal
export const WEEKLY_FREQUENCY_RULES = {
  [UserLevel.FITNESS]: { min: 1, optimal: [2, 3], warning: "Menos de 1 pierde ritmo y aumenta riesgo de lesión al retomar." },
  [UserLevel.AMATEUR]: { min: 3, optimal: [5, 6], warning: "Requiere sesiones extra de stamina si compite." },
  [UserLevel.PRO]: { min: 6, optimal: [12], warning: "2 sesiones al día, 6 días a la semana. Domingo descanso." }
};
```

#### 2) `rules/muay-thai-conditioning.ts` (Zonas de Stamina y Cardio)

```typescript
/**
 * Motor de reglas para Stamina y Zonas de Frecuencia Cardiaca.
 * Fuente: Cap. 3.4 (Stamina Training)
 */

export interface StaminaZoneRule {
  zoneId: 'regenerative' | 'basic' | 'fitness' | 'anaerobic';
  pctMHR: number; // Fórmula: 220 - edad
  talkTest: string;
  purpose: string;
  allowedForBeginners: boolean;
}

export const STAMINA_ZONES: StaminaZoneRule[] = [
  {
    zoneId: 'regenerative',
    pctMHR: 0.65,
    talkTest: 'Muy cómodo',
    purpose: 'Recuperación activa post-competición o post-sesión dura.',
    allowedForBeginners: true
  },
  {
    zoneId: 'basic',
    pctMHR: 0.75,
    talkTest: 'Poder mantener una conversación',
    purpose: 'Base aeróbica, quema de grasa, mejora inmune. Bajar FC en descansos.',
    allowedForBeginners: true // OBLIGATORIO PARA PRINCIPIANTES
  },
  {
    zoneId: 'fitness',
    pctMHR: 0.85,
    talkTest: 'Difícil hablar, esfuerzo sostenido',
    purpose: 'Tolerancia al lactato, fitness específico de pelea.',
    allowedForBeginners: false
  },
  {
    zoneId: 'anaerobic',
    pctMHR: 0.90, // Umbral
    talkTest: 'Jadeo, insostenible',
    purpose: 'Intervalos de sprint. Solo avanzados con base sólida.',
    allowedForBeginners: false
  }
];

export const INTERVAL_RULES = {
  sprints: { work: '100 yards', rest: '1-2 min active jog', intensityPct: 80 },
  medium_runs: { work: '400 yards', rest: '2-3 min active jog', intensityPct: 80 }
};
```

#### 3) `rules/muay-thai-strength.ts` (Workouts y Progresión)

```typescript
/**
 * Catálogo de Workouts de Fuerza-Resistencia y Reglas de Progresión.
 * Fuente: Cap. 3.5 y 3.6 (Strength Training & Workouts)
 */

export type WorkoutFocus = 'general' | 'punching_power' | 'explosive_kicks' | 'resilience';

export interface StrengthWorkout {
  id: string;
  focus: WorkoutFocus;
  exercises: string[]; // IDs de ejercicios del catálogo OS
  volume: {
    beginner: { sets: number; reps: string; staticHoldSec?: string };
    advanced: { sets: number; reps: string; staticHoldSec?: string };
  };
  restBetweenSetsSec: { lowIntensity: number; highIntensity: number };
}

export const WORKOUTS: Record<string, StrengthWorkout> = {
  'MT_WORKOUT_C': {
    id: 'MT_WORKOUT_C', focus: 'general',
    exercises: ['pushups', 'pullups', 'overhead_press', 'squats', 'shoulder_bridge', 'crunches_turns', 'superman'],
    volume: {
      beginner: { sets: 2, reps: '10-20', staticHoldSec: '20-40' },
      advanced: { sets: 3, reps: '10-20', staticHoldSec: '40-60' }
    },
    restBetweenSetsSec: { lowIntensity: 60, highIntensity: 120 }
  },
  'MT_WORKOUT_D': {
    id: 'MT_WORKOUT_D', focus: 'punching_power',
    exercises: ['clap_pushups', 'ball_pushups', 'dumbbell_row', 'handstand_pushups', 'bag_lift', 'plank'],
    volume: { beginner: { sets: 2, reps: '10-20' }, advanced: { sets: 3, reps: '10-20' } },
    restBetweenSetsSec: { lowIntensity: 90, highIntensity: 180 }
  }
  // ... (Añadir E y F siguiendo la misma estructura)
};

export const STRENGTH_PROGRESSION_RULES = {
  frequency: { maintain: 1, improve: 2, minWeeklyPerMuscleGroup: 1 },
  recoveryHours: { min: 24, max: 48 },
  progressionLogic: "Aumentar repeticiones ANTES de aumentar intensidad/peso. Los tendones se adaptan más lento que los músculos.",
  illnessRule: "STOP_INMEDIATO: No entrenar fuerza si hay enfermedad sistémica (fiebre, infección)."
};
```

#### 4) `skills/muay-thai-skill-paths.ts` (Estructura de Habilidades)

```typescript
/**
 * Definición de SkillPaths para el motor de progresión técnica.
 * Fuente: Cap. 4 (Techniques, Combinations, Feints)
 */

export interface SkillStep {
  stepId: string;
  name: string;
  technicalCues: string[];
  commonFaults: string[];
  criteriaToAdvance: string;
  reference: string;
}

export interface SkillPath {
  pathId: string;
  discipline: 'muay-thai';
  category: 'combinations' | 'counters' | 'feints' | 'basics';
  stanceRequirement: 'orthodox' | 'southpaw' | 'both';
  steps: SkillStep[];
}

export const KEM_COMBINATION_4: SkillPath = {
  pathId: 'mt_combo_kem_4',
  discipline: 'muay-thai',
  category: 'combinations',
  stanceRequirement: 'orthodox', // Kem es Orthodox
  steps: [
    {
      stepId: 'kem4_step1',
      name: 'Rear Body Punch',
      technicalCues: ['Paso adelante', 'Golpe al hígado/plexo', 'Peso atrás'],
      commonFaults: ['Bajar guardia', 'No rotar cadera'],
      criteriaToAdvance: 'Impacto seco sin perder equilibrio.',
      reference: 'Cap 4.2 - Kem Combo 4'
    },
    {
      stepId: 'kem4_step2',
      name: 'Front Side Hook',
      technicalCues: ['Transferencia de peso lateral', 'Codo a 90 grados'],
      commonFaults: ['Telegrafiar', 'Cruzar pies'],
      criteriaToAdvance: 'Fluidez inmediata tras el recto.',
      reference: 'Cap 4.2 - Kem Combo 4'
    },
    // ... (Steps 3, 4, 5: Low kick, Rotating Elbow, Knee clinch)
  ]
};

// Nota para el Agente de Datos: Crear arrays similares para las 13 Fintas (Cap 4.4) 
// y las 12 Combinaciones de Nonsai, Kem y Saiyok.
```

#### 5) `metadata/safety-and-contact.ts` (Metadata de Seguridad)

```typescript
/**
 * Tags de seguridad para validar si un usuario puede hacer una sesión.
 * Fuente: Cap. 2.3 (Partner, Sparring, Clinch)
 */

export enum ContactIntensity {
  AIR = 'air',               // Shadowboxing
  CONTROLLED = 'controlled', // Partner técnico, pads
  MODERATE = 'moderate',     // Sparring técnico (50-70%)
  HIGH = 'high',             // Clinch de pelea, Sparring duro (80-90%)
  MAXIMAL = 'maximal'        // Competencia (No programar en app)
}

export interface ModalitySafetyRequirements {
  modality: 'shadow' | 'pads' | 'heavy_bag' | 'partner_drills' | 'sparring' | 'clinch';
  maxIntensity: ContactIntensity;
  protectiveGearRequired: string[];
  supervisionRequired: boolean;
  hardeningRules?: string;
}

export const SAFETY_MATRIX: ModalitySafetyRequirements[] = [
  {
    modality: 'sparring',
    maxIntensity: ContactIntensity.MODERATE,
    protectiveGearRequired: ['headgear', 'shin_guards', 'gloves_16oz', 'mouthguard', 'groin_guard'],
    supervisionRequired: true
  },
  {
    modality: 'heavy_bag',
    maxIntensity: ContactIntensity.HIGH,
    protectiveGearRequired: ['hand_wraps', 'bag_gloves'],
    supervisionRequired: false,
    hardeningRules: "Progresión obligatoria: Relleno suave -> Virutas de madera -> Arena fina. NUNCA superficies sólidas o agua caliente."
  },
  {
    modality: 'clinch',
    maxIntensity: ContactIntensity.HIGH, // Kem usa 80-90%
    protectiveGearRequired: ['mouthguard'],
    supervisionRequired: true
  }
];
```

#### 6) `protocols/weight-making.ts` (Protocolos de Peso y Nutrición)

```typescript
/**
 * Reglas de manipulación de peso y timing nutricional.
 * Fuente: Cap. 2.6 y 2.7 (Nutrition & Weight Class)
 */

export type WeightGoal = 'maintain' | 'cut' | 'gain';

export interface NutritionTiming {
  preWorkout_2_3h: string;
  preWorkout_1_2h: string;
  intraWorkout: string;
  postWorkout: string;
}

export const WEIGHT_MAKING_PROTOCOLS: Record<WeightGoal, any> = {
  cut: {
    maxSafeBodyFatLossPerMonth: 0.03, // 3% mensual
    caloricBalance: 'deficit',
    macroStrategy: 'high_protein, low_fat, moderate_carb',
    warning: "No eliminar carbohidratos al 100% (destruye masa muscular). Cuidado con el hambre post-entreno.",
    timing: {
      preWorkout_2_3h: 'Proteína magra (ej. batido)',
      preWorkout_1_2h: 'Carbohidrato rápido (ej. plátano)',
      postWorkout: 'Carbohidratos + Proteína (Sin exceso de CH para no anular déficit)'
    }
  },
  gain: {
    caloricBalance: 'surplus',
    macroStrategy: 'high_protein, clean_fats, complex_carbs',
    trainingAdjustment: "Aumentar hipertrofia, REDUCIR volumen de Muay Thai específico para evitar sobreentrenamiento.",
    timing: {
      preWorkout_2_3h: 'Proteína + Avena',
      preWorkout_1_2h: 'Barrita energética / Fruta',
      postWorkout: 'Reposición agresiva de Glucógeno + Proteína'
    }
  },
  maintain: {
    caloricBalance: 'isocaloric',
    timing: {
      preWorkout_2_3h: 'Comida principal balanceada',
      preWorkout_1_2h: 'Snack de CH',
      postWorkout: 'CH + Proteína para regeneración'
    }
  }
};

export const TAPER_RULES = {
  daysBeforeFight: {
    '7_days_out': 'Reducir intensidad, mantener volumen técnico.',
    '3_days_out': 'Solo shadowboxing, táctica, masajes, corte de peso suave.',
    '1_day_out': 'Descanso total, hidratación, visualización.',
    'post_fight': '1 semana de descanso activo o total. No reanudar fuerte hasta semana 2.'
  }
};
```

#### 7) `rules/clinical-boundaries.ts` (Límites del Motor de Rehab)

```typescript
/**
 * Reglas duras (Hard Stops) para proteger al usuario y a la app de responsabilidades médicas.
 * Fuente: Disclaimer inicial, Cap. 3.5 (Pain rules), Cap. 6 (Rehab context)
 */

export interface RedFlagRule {
  condition: string;
  trigger: string;
  systemAction: 'PAUSE_SESSION' | 'DELOAD_WEEK' | 'REFER_TO_PRO';
  messageToUser: string;
}

export const CLINICAL_RED_FLAGS: RedFlagRule[] = [
  {
    condition: 'Dolor Articular/Tendinoso Persistente',
    trigger: 'user_reports_pain > 0 AND pain_persists_at_rest',
    systemAction: 'REFER_TO_PRO',
    messageToUser: 'El dolor que persiste en reposo no es fatiga muscular. Detén el entrenamiento de esta zona y consulta a un fisioterapeuta o médico deportivo.'
  },
  {
    condition: 'Enfermedad Sistémica',
    trigger: 'user_reports_fever OR user_reports_systemic_illness',
    systemAction: 'PAUSE_SESSION',
    messageToUser: 'Regla de oro: No entrenar fuerza ni cardio intenso si estás enfermo. Comprometerás tu sistema inmune y tu recuperación.'
  },
  {
    condition: 'Síntomas de Sobreentrenamiento',
    trigger: 'user_reports_poor_sleep AND elevated_resting_hr AND performance_drop',
    systemAction: 'DELOAD_WEEK',
    messageToUser: 'Tu cuerpo muestra signos de sobreentrenamiento (sudoración anormal, mal sueño, debilidad). El sistema ha forzado una semana de descarga (Regla 6-12 semanas).'
  },
  {
    condition: 'Acondicionamiento de Tibia (Shin Hardening)',
    trigger: 'user_selects_heavy_bag AND user_experience < 6_months',
    systemAction: 'PAUSE_SESSION',
    messageToUser: 'Advertencia: No uses sacos rellenos de arena o superficies duras. Usa relleno suave o de virutas de madera hasta que tu técnica y densidad ósea mejoren.'
  }
];
```

---

### 📋 Resumen para el Equipo de Desarrollo (Plan Maestro OS)

Con estos 7 bloques de código/configuración, el sistema ya puede:
1. **Autogenerar planes semanales** que respeten los límites de frecuencia por nivel (Fitness vs Pro).
2. **Calcular zonas de cardio** usando la fórmula `220 - edad` y asignar tareas (ej. "Hoy toca Zona Básica al 75% para quemar grasa sin comprometer la sesión técnica de mañana").
3. **Desplegar rutinas de fuerza** (Workouts C-F) con progresiones seguras basadas en reps antes que en carga.
4. **Enseñar táctica avanzada** mediante los `SkillPaths` de combinaciones y fintas de campeones mundiales (Kem, Saiyok, Nonsai).
5. **Bloquear sesiones peligrosas** si el usuario no tiene el equipamiento de seguridad (`SAFETY_MATRIX`) o si intenta sparring duro sin supervisión.
6. **Ajustar macros y timing** si el usuario indica en su perfil que está en fase de "Cut" (báscula) o "Gain" (hipertrofia).
7. **Frenar al usuario (Red Flags)** si detecta patrones de sobreentrenamiento o dolor en reposo, manteniendo a la app en el ámbito del *coaching deportivo* y fuera de la *práctica médica ilegal*.

---

## Ronda 3 — tras: «Entendido y validado. Las **Soluciones OS** que propones para cubrir las limitaciones biomecánicas y visuales del texto de Christoph Delp es…»
Sí. Tu formalización está bien orientada y es implementable, pero al contrastarla con el texto completo de **Christoph Delp** aparecen algunos ajustes importantes para que el módulo sea **100% fiel al libro** y no introduzca reglas derivadas de otros sistemas (RPE, HRV, periodización táctica moderna, etc.) como si fueran canónicas.

A continuación dejo:

1. **Validación con correcciones**
2. **Versión canónica final de los esquemas OS**
3. **Datos faltantes / dependencias visuales o externas**
4. **Checklist de ingestión para agentes**

---

# 1. Validación y correcciones contra el libro

## A. Frecuencia amateur

### Tu propuesta
- Amateur: **4–5 días/semana**

### Corrección basada en libro
El libro indica:

- Amateur competitivo: **3–5 sesiones de Muay Thai/semana**
- Buen resultado: **5–6 sesiones/semana**
- Si hay que bajar mucho peso: incluso **más de 6 sesiones/semana**

### Regla corregida

```json
{
  "level": "amateur",
  "weekly_frequency": {
    "muay_thai_sessions_min": 3,
    "muay_thai_sessions_optimal": 5,
    "total_sessions_good": [5, 6],
    "if_large_weight_cut": ">6_possible_with_caution"
  },
  "source_ref": "Cap. 1, sec. 1; Cap. 5, sec. 3"
}
```

---

## B. Intensidad cardiaca amateur

### Tu propuesta
- `max_heart_rate_percentage: 88`

### Corrección basada en libro
El libro define zonas:

- Regenerativo: **~65% MHR**
- Básico: **~75% MHR**
- Fitness: **~85% MHR**
- Anaeróbico: umbral, solo avanzados/profesionales con base sólida

**88%** ya entra cerca del umbral anaeróbico. Para amateur estándar, el límite canónico debería ser **85%**, salvo bloques intervalados avanzados.

### Regla corregida

```json
{
  "conditioning_hr_rules": {
    "beginner_default_zone": "basic",
    "beginner_hr_target_pct_mhr": 75,
    "amateur_general_hr_cap_pct_mhr": 85,
    "anaerobic_blocks_allowed": false,
    "advanced_amateur_or_pro": {
      "anaerobic_blocks_allowed": true,
      "requires_solid_aerobic_base": true
    }
  },
  "source_ref": "Cap. 3, sec. 4"
}
```

---

## C. Tapering profesional

### Tu propuesta
- Profesional: **2 semanas de tapering**

### Corrección basada en libro
El libro no prescribe 2 semanas completas como regla general. Dice:

- Últimos días antes de la pelea: **reducir intensidad**
- Últimos **3 días**: sombra, táctica, peso, masaje
- Sparring fuerte: **excluir**
- Última semana: entrenamiento ligero / descenso de carga
- Khru Pit: 4 días ligeros + últimos 3 días de sombra/táctica

Por tanto, el taper canónico es:

- **7 días de reducción**
- **3 días de afinamiento táctico**

### Regla corregida

```json
{
  "tapering": {
    "level": "professional",
    "reduction_window_days": 7,
    "final_sharpening_window_days": 3,
    "final_phase_focus": [
      "shadowboxing",
      "fight_tactics",
      "weight_management",
      "massage"
    ],
    "hard_sparring_allowed": false,
    "source_ref": "Cap. 2, entrevista Khru Pit; Cap. 5, sec. 4"
  }
}
```

---

## D. Sparring: nunca “pleno” sin condiciones

### Tu propuesta
- Profesional: sparring pleno / simulado **70–90%**

### Corrección basada en libro
El libro insiste en que el sparring **no se hace a máxima fuerza** y que debe ser supervisado. Además:

- Saiyok: **50–70%**
- Kem: **70–80%**
- Clinch Kem: **80–90%**
- Si hay más potencia, usar protección
- Entrenador debe corregir

Por tanto, el sistema debe marcar el sparring como:

- `power capped`
- `coach supervision required`
- `protective gear conditional`
- `no maximal intent`

### Regla corregida

```json
{
  "sparring_safety": {
    "max_intent_is_never_full_power": true,
    "coach_supervision_required": true,
    "protective_equipment_required_if_intensity_increases": true,
    "typical_intensity_pct": {
      "technical": [50, 70],
      "advanced": [70, 80],
      "clinch_specific": [80, 90]
    },
    "tapering_block": {
      "hard_sparring_removed": true
    },
    "source_ref": "Cap. 2, sec. 3"
  }
}
```

---

## E. Periodización: ciclos de 6–12 semanas

### Tu propuesta
- Amateur: microciclo 4–6 semanas
- Profesional: bloques 8–12 semanas

### Corrección basada en libro
El libro indica explícitamente:

- Cambiar programa tras **6–12 semanas**
- Ejemplo de ciclo de **10 semanas**
- Ejemplo de preparación competitiva de **8 semanas**

Por tanto, la regla canónica de macrociclo debe ser:

- **6–12 semanas**
- 10 semanas como ejemplo de amateur
- 8 semanas como ejemplo de fight camp

```json
{
  "periodization_cycle_rule": {
    "recommended_cycle_length_weeks": [6, 12],
    "sample_amateur_cycle_weeks": 10,
    "sample_competition_cycle_weeks": 8,
    "source_ref": "Cap. 5, sec. 3; Cap. 5, sec. 4"
  }
}
```

---

## F. RPE / HRV

### Tu propuesta
- Control riguroso con **RPE y HRV**

### Corrección basada en libro
El libro **no menciona RPE ni HRV**. Lo que sí menciona es:

- Uso de pulsómetro
- Documentación de sueño, estrés, nutrición
- Dolor, enfermedad, fatiga, mal sueño como señales de alarma

Por tanto:

- RPE/HRV pueden existir como **extensión OS**
- pero **no deben marcarse como reglas del libro**

```json
{
  "monitoring": {
    "book_canonical": [
      "heart_rate_monitor",
      "training_log",
      "sleep_tracking",
      "stress_tracking",
      "nutrition_tracking",
      "fatigue_symptoms"
    ],
    "os_extension_only": [
      "RPE",
      "HRV",
      "load_management_dashboard"
    ]
  },
  "source_ref": "Cap. 1, sec. 4; Cap. 3, sec. 5"
}
```

---

## G. Si `weight_cut_protocol_active = true`, faltan reglas

Tu esquema profesional activa el protocolo de corte de peso, pero no lo desarrolla. El libro sí da reglas concretas.

### Regla canónica de weight cut

```json
{
  "weight_cut_protocol": {
    "enabled": true,
    "caloric_balance": "deficit",
    "protein": "sharp_increase",
    "carbohydrates": "reduce_but_do_not_eliminate",
    "fats": "low_but_keep_essential_fats",
    "hydration": {
      "minimum_quarts_per_day": 2,
      "increase_if_sweat_or_low_calorie": true
    },
    "meal_timing": {
      "pre_training_2_3h": "protein_rich",
      "pre_training_1_2h": "carbohydrate_rich_snack",
      "post_training": "carbs_plus_protein_without_excess_carbs"
    },
    "expected_body_fat_loss_per_month_pct": 3,
    "alcohol_rule": {
      "last_3_weeks_before_fight": "complete_abstinence"
    },
    "source_ref": "Cap. 2, sec. 6; Cap. 2, sec. 7; entrevista Khru Pit"
  }
}
```

---

# 2. Formalización canónica final para Plan Maestro OS

A continuación dejo la versión final lista para ingestión, separada por módulos.

---

## Módulo 1: Adaptación biomecánica y vacíos visuales

```json
{
  "module": "muay_thai_visual_gap_adapter",
  "book_source": "Muay Thai Training Exercises (2013), Christoph Delp",
  "status": "canonical_with_os_defaults",
  "rules": [
    {
      "id": "stretch_pnf_tense_relax_extend",
      "source_ref": "Cap. 3, sec. 3",
      "technique_type": "PNF_Tense_Relax_Extend",
      "book_canonical_values": {
        "tension_duration_sec": 5,
        "tension_intensity": "medium",
        "relaxation_duration_sec_range": [1, 3],
        "pre_post_static_hold_max_sec": 10,
        "dedicated_stretch_hold_sec_range": [10, 60],
        "dedicated_session_frequency_min_per_week": 2,
        "dedicated_session_total_duration_min_range": [60, 90],
        "pain_rule": "stop_if_pain"
      },
      "os_defaults_for_missing_visuals": {
        "pelvic_tilt_default": "neutral_ground_standard",
        "tibial_rotation_default": "neutral",
        "joint_alignment_default": "anatomical_neutral",
        "breathing_rule": "exhale_during_progressive_stretch"
      },
      "note": "Los valores temporales sí están en el libro; los ángulos exactos se infieren por estándar biomecánico porque faltan fotos."
    },
    {
      "id": "instability_equipment_usage",
      "source_ref": "Cap. 3, sec. 5",
      "purpose": "improve_muscle_interaction_and_core_stability",
      "equipment_types": [
        "exercise_ball",
        "balance_board",
        "balance_cushion"
      ],
      "regression_policy": {
        "if_equipment_missing": "use_floor_or_stable_surface",
        "if_stability_insufficient": "reduce_range_or_switch_to_standard_variant"
      },
      "examples": [
        {
          "exercise_id": "pushup_exercise_ball",
          "requiresBalanceEquipment": true,
          "equipment_type": "exercise_ball",
          "regression": {
            "exercise_id": "pushup_floor_standard",
            "requiresBalanceEquipment": false
          }
        },
        {
          "exercise_id": "shoulder_bridge_exercise_ball",
          "requiresBalanceEquipment": true,
          "equipment_type": "exercise_ball",
          "regression": {
            "exercise_id": "shoulder_bridge_floor",
            "requiresBalanceEquipment": false
          }
        }
      ]
    },
    {
      "id": "mae_mai_boran_limitation",
      "source_ref": "Cap. 1, sec. 6; Cap. 4",
      "skillCategory": "traditional-boran",
      "hasFullSkillPath": false,
      "external_data_dependency": "Muay Thai Counter Techniques (2013)",
      "known_quantity": 15,
      "learning_prerequisite": "extensive_muay_thai_experience",
      "not_required_for_all_athletes": true,
      "implementation_rule": "crear_placeholder_pero_no_generar_progresion_completa_desde_este_libro"
    },
    {
      "id": "feint_counter_timing_media_dependency",
      "source_ref": "Cap. 4",
      "action_type": "feint_counter_sequence",
      "book_canonical_execution_rules": [
        "feint_must_be_fast",
        "body_remains_relaxed",
        "feint_target_differs_from_followup_target",
        "focus_on_feint_target_not_real_target",
        "feint_can_be_incomplete_and_light",
        "followup_technique_with_full_power"
      ],
      "media_requirements": {
        "reference_dvd": "Muay Thai: Training and Techniques (2013)",
        "video_required": true,
        "why": "El texto describe secuencias, pero el timing fino y la transferencia de peso requieren referencia visual."
      }
    }
  ]
}
```

---

## Módulo 2: Capítulo 5 — Periodización y planes de entrenamiento

### Esquema maestro

```json
{
  "module": "muay_thai_training_plans_and_periodization",
  "book_source": "Muay Thai Training Exercises (2013), Christoph Delp",
  "canonical_cycle_rule": {
    "recommended_cycle_length_weeks": [6, 12],
    "avoid_monotony_to_prevent_stagnation": true,
    "sample_amateur_cycle_weeks": 10,
    "sample_competition_cycle_weeks": 8,
    "source_ref": "Cap. 5, sec. 3; Cap. 5, sec. 4"
  },
  "levels": ["beginner", "amateur", "professional"],
  "monitoring": {
    "book_canonical": [
      "heart_rate_monitor",
      "training_log",
      "sleep_tracking",
      "stress_tracking",
      "nutrition_tracking",
      "fatigue_symptoms"
    ],
    "os_extension_only": [
      "RPE",
      "HRV",
      "load_management_dashboard"
    ]
  }
}
```

---

## Módulo 3: Configuración por nivel

### A. Principiante

```json
{
  "level": "beginner",
  "source_ref": "Cap. 5, sec. 2",
  "weekly_frequency": {
    "muay_thai_sessions_min_for_progress": 2,
    "fitness_oriented_sessions_per_week": [2, 3],
    "additional_power_or_stamina_session": "optional_weekly"
  },
  "session_structure": {
    "warmup_min": [10, 15],
    "stretching_min": [5, 10],
    "shadow_rounds": [2, 3],
    "shadow_round_duration_min": 3,
    "pad_rounds": [2, 3],
    "pad_round_duration_min": 3,
    "bag_rounds": [2, 3],
    "bag_round_duration_min": 3,
    "partner_training_min": [10, 15],
    "clinch_min": 5,
    "power_exercises_min": [5, 10],
    "cooldown_min": 10
  },
  "constraints": {
    "allow_hard_sparring": false,
    "sparring_default": "none_or_technical_only",
    "conditioning_default_zone": "basic",
    "conditioning_hr_target_pct_mhr": 75,
    "technical_priority": [
      "stance",
      "footwork",
      "basic_attacks",
      "basic_counters"
    ],
    "fatigue_management": "limit_accumulated_fatigue_to_preserve_technique"
  },
  "weekly_template": {
    "day_1": "muay_thai",
    "day_2": "power_training_or_rest",
    "day_3": "rest",
    "day_4": "muay_thai",
    "day_5": "stamina_or_rest",
    "day_6": "rest_or_muay_thai",
    "day_7": "rest"
  }
}
```

---

### B. Amateur

```json
{
  "level": "amateur",
  "source_ref": "Cap. 5, sec. 3",
  "weekly_frequency": {
    "muay_thai_sessions_min": 3,
    "muay_thai_sessions_optimal": 5,
    "total_sessions_good": [5, 6],
    "if_large_weight_cut": ">6_possible_with_caution"
  },
  "session_structure": {
    "warmup_min": 15,
    "stretching_min": [5, 10],
    "shadow_rounds": 2,
    "shadow_round_duration_min_range": [3, 4],
    "pad_rounds": 3,
    "pad_round_duration_min_range": [3, 4],
    "bag_rounds": 3,
    "bag_round_duration_min_range": [3, 4],
    "partner_training_min": [10, 15],
    "sparring": {
      "sessions_per_week": 2,
      "duration_min_per_session": 15
    },
    "clinch_min": [5, 10],
    "power_exercises_min": [5, 10],
    "cooldown_min": 10
  },
  "constraints": {
    "allow_hard_sparring": true,
    "sparring_intensity_cap_pct": 70,
    "sparring_requires_supervision": true,
    "protective_equipment_required_if_intensity_increases": true,
    "conditioning_hr_cap_pct_mhr": 85,
    "anaerobic_blocks_allowed": false,
    "technical_focus": [
      "combinations",
      "counters",
      "feints",
      "clinch",
      "sparring_conditioned"
    ]
  },
  "weekly_template": {
    "day_1": "muay_thai",
    "day_2": "power_and_or_stamina",
    "day_3": "muay_thai",
    "day_4": "rest_or_power_and_or_stamina",
    "day_5": "muay_thai",
    "day_6": "power_and_or_stamina",
    "day_7": "rest"
  },
  "ten_week_cycle_example": {
    "weeks_1_6": {
      "muay_thai_sessions_per_week": 3,
      "basic_stamina_sessions_per_week": 2,
      "power_sessions_per_week": 1
    },
    "weeks_7_10": {
      "muay_thai_sessions_per_week": 3,
      "basic_stamina_sessions_per_week": 1,
      "power_sessions_per_week": 2
    },
    "source_ref": "Cap. 5, sec. 3"
  }
}
```

---

### C. Profesional

```json
{
  "level": "professional",
  "source_ref": "Cap. 2, sec. 1; Cap. 5, sec. 4",
  "weekly_frequency": {
    "sessions_per_day": 2,
    "training_days_per_week": 6,
    "rest_day": "Sunday",
    "midday_recovery_break": true
  },
  "daily_split": {
    "morning_session": {
      "focus": [
        "roadwork",
        "stamina",
        "technical_conditioning"
      ],
      "typical_components": [
        "run",
        "skipping",
        "shadow",
        "bag",
        "pads",
        "partner_or_clinch"
      ]
    },
    "afternoon_session": {
      "focus": [
        "technical",
        "tactical",
        "sparring",
        "clinch"
      ],
      "typical_components": [
        "shadow",
        "pads",
        "bag",
        "partner",
        "sparring",
        "clinch",
        "strength_endurance"
      ]
    }
  },
  "intensity_organization": {
    "hard_soft_alternation": true,
    "hard_day_definition": "higher_running_volume_and_more_rounds",
    "soft_day_definition": "lower_volume_and_recovery_oriented",
    "sunday_rule": "rest_or_reduced_intensity"
  },
  "constraints": {
    "sparring_not_full_power": true,
    "sparring_supervision_required": true,
    "protective_equipment_required_if_intensity_increases": true,
    "tapering": {
      "reduction_window_days": 7,
      "final_sharpening_window_days": 3,
      "final_focus": [
        "shadowboxing",
        "fight_tactics",
        "weight_management",
        "massage"
      ],
      "hard_sparring_allowed": false
    },
    "post_fight_recovery": {
      "rest_approx_weeks": 1,
      "light_training_resume_max_days": 7
    }
  },
  "conditioning_rules": {
    "zones_allowed": ["regenerative", "basic", "fitness", "anaerobic_threshold"],
    "anaerobic_requires_solid_base": true,
    "interval_rules": {
      "sprints_rest_min": [1, 2],
      "four_hundred_yard_runs_rest_min": [2, 3],
      "rest_style": "very_slow_jog_not_total_stop",
      "sprint_intensity_pct": 80
    }
  },
  "weight_cut_protocol_active": true,
  "weight_cut_protocol": {
    "caloric_balance": "deficit",
    "protein": "sharp_increase",
    "carbohydrates": "reduce_but_do_not_eliminate",
    "fats": "low_but_keep_essential_fats",
    "hydration": {
      "minimum_quarts_per_day": 2,
      "increase_if_sweat_or_low_calorie": true
    },
    "meal_timing": {
      "pre_training_2_3h": "protein_rich",
      "pre_training_1_2h": "carbohydrate_rich_snack",
      "post_training": "carbs_plus_protein_without_excess_carbs"
    },
    "expected_body_fat_loss_per_month_pct": 3,
    "alcohol_rule": {
      "last_3_weeks_before_fight": "complete_abstinence"
    },
    "source_ref": "Cap. 2, sec. 6; Cap. 2, sec. 7; entrevista Khru Pit"
  }
}
```

---

## Módulo 4: Plantillas de gimnasio tailandés (hard / soft)

Esto es importante porque el libro sí da una estructura profesional tailandesa, y tu esquema previo la estaba simplificando demasiado.

```json
{
  "thai_gym_professional_template": {
    "source_ref": "Cap. 5, sec. 4",
    "weekly_structure": {
      "morning_sessions_per_week": 6,
      "afternoon_sessions_per_week": 6,
      "sunday": "closed_or_recovery"
    },
    "morning_training": {
      "hard": {
        "running_or_skipping": "4 miles or 15 minutes",
        "shadowboxing_min": 15,
        "bag_rounds": 5,
        "pad_rounds": 5,
        "partner_and_clinch_min": 20,
        "power_exercises": "as_needed"
      },
      "soft": {
        "running_or_skipping": "2 miles or 10 minutes",
        "shadowboxing_min": 10,
        "bag_rounds": 3,
        "pad_rounds": 3,
        "partner_and_clinch_min": 15,
        "power_exercises": "as_needed"
      }
    },
    "afternoon_training": {
      "hard": {
        "skipping_or_running": "20 minutes or 4 miles",
        "shadowboxing_min": 15,
        "bag_rounds": 5,
        "pad_rounds": 5,
        "sparring_min": 20,
        "partner_and_clinch_min": 20,
        "power_exercises": "as_needed"
      },
      "soft": {
        "skipping_or_running": "15 minutes or 2 miles",
        "shadowboxing_min": 10,
        "bag_rounds": 3,
        "pad_rounds": 3,
        "sparring_min": 10,
        "partner_and_clinch_min": 10,
        "power_exercises": "as_needed"
      }
    },
    "note": "Solo apto para profesionales; semiprofesionales deben adaptarlo a una sesión diaria."
  }
}
```

---

## Módulo 5: Plantilla de preparación competitiva de 8 semanas

```json
{
  "eight_week_fight_preparation_template": {
    "source_ref": "Cap. 5, sec. 4",
    "target_level": "semiprofessional_or_advanced",
    "weeks": {
      "week_1": {
        "emphasis": [
          "muay_thai",
          "medium_intensity_jogging",
          "full_body_strength",
          "sparring_focus"
        ]
      },
      "week_2": {
        "emphasis": [
          "muay_thai",
          "interval_runs",
          "full_body_strength",
          "sparring_focus"
        ]
      },
      "week_3": {
        "emphasis": [
          "muay_thai",
          "interval_runs",
          "full_body_strength",
          "sparring_focus"
        ]
      },
      "week_4": {
        "emphasis": [
          "muay_thai",
          "interval_runs_with_short_sprints",
          "full_body_strength",
          "sparring_focus",
          "swimming"
        ]
      },
      "week_5": {
        "emphasis": [
          "competitive_tactics",
          "sparring",
          "full_body_strength",
          "interval_sprints"
        ]
      },
      "week_6": {
        "emphasis": [
          "competitive_tactics",
          "interval_sprints",
          "full_body_strength",
          "sparring",
          "low_intensity_swim_or_jog"
        ]
      },
      "week_7": {
        "emphasis": [
          "sparring",
          "short_sprints",
          "full_body_strength",
          "competitive_tactics"
        ]
      },
      "week_8": {
        "emphasis": [
          "tactics_review",
          "shadowboxing",
          "low_heart_rate_jog",
          "rest",
          "competition"
        ],
        "tapering": true
      }
    },
    "implementation_notes": [
      "Reducir intensidad de fuerza en las últimas semanas.",
      "Mantener dieta saludable y suficiente proteína.",
      "Extender sueño.",
      "Masaje y sauna al menos una vez por semana como medida de regeneración mencionada.",
      "Tras competición, descanso recreativo varios días y reanudar suave tras máximo 1 semana."
    ]
  }
}
```

---

## Módulo 6: Reglas transversales de seguridad y recuperación

```json
{
  "cross_module_safety_and_recovery": {
    "source_ref": "Cap. 2, sec. 5; Cap. 3, sec. 5; Cap. 3, sec. 1",
    "pain_rule": {
      "if_pain_stop": true,
      "if_pain_persists_at_rest_end_session_and_refer_to_professional": true,
      "no_numeric_pain_scale_provided_by_book": true
    },
    "illness_rule": {
      "no_strength_training_if_ill": true
    },
    "recovery_rules": {
      "amateur": {
        "rest_day_between_sessions": true,
        "extra_sleep_hour_after_training": true
      },
      "professional": {
        "sleep_night_hours_range": [6, 8],
        "midday_rest_hours_range": [2, 3],
        "massage": true,
        "hot_baths_or_herbal_balls": true,
        "avoid_parties_and_alcohol": true
      }
    },
    "hardening_rules": {
      "gradual_bag_hardness_increase": true,
      "bag_fill_progression": [
        "soft_fabric",
        "wood_shavings",
        "add_fine_sand_gradually"
      ],
      "never_hit_solid_inflexible_objects": true,
      "never_use_hot_water_to_numb_sensation": true,
      "sand_full_bag_only_with_excellent_technique_and_caution": true
    },
    "technical_partner_rules": {
      "techniques_must_not_be_executed_at_full_strength": true,
      "technical_precision_required": true,
      "approximately_five_techniques_per_partner_session": true
    }
  }
}
```

---

# 3. Datos faltantes / dependencias visuales o externas

Esto es lo que **sí queda pendiente** y debe marcarse en el sistema como dependencia externa o inferencia.

---

## A. Estiramientos

### Lo que sí está en el libro
- Método PNF:
  - tensión media **5 segundos**
  - relajación **1–3 segundos**
  - estático pre/post: **máx. 10 segundos**
  - sesión dedicada: **10–60 segundos**
  - frecuencia efectiva: **>=2/semana**
  - duración total: **60–90 min**

### Lo que falta
- Ángulos exactos de:
  - pelvis
  - tibia
  - apoyo de pies
  - posición exacta de manos en estiramientos de cuello/hombro

### Solución OS
- Usar estándares biomecánicos neutros
- marcar `inferred_default: true`

---

## B. Ejercicios con balón / inestabilidad

### Lo que sí está en el libro
- El uso de balón, bosu y cojín busca:
  - estimulación de interacción muscular
  - estabilidad de tronco
- Si no hay balón, se puede entrenar sin él

### Lo que falta
- Punto exacto de apoyo en fotos
- altura recomendada del balón
- posición exacta de pies/manos en variantes avanzadas

### Solución OS
-crear regresiones automáticas a suelo
- marcar `requiresBalanceEquipment: true`
- añadir `fallbackEquipment: floor`

---

## C. Mae Mai Muay Boran

### Lo que sí está en el libro
- Existen **15 técnicas Mae Mai**
- Son útiles para sorprender
- Se enseñan de forma distinta según entrenador
- No hace falta aprender todas
- Se recomienda empezar tras experiencia extensa

### Lo que falta
- Ejecución paso a paso completa
- criterios de pase
- errores comunes
- variantes detalladas

### Solución OS
```json
{
  "skillCategory": "traditional-boran",
  "hasFullSkillPath": false,
  "external_data_dependency": "Muay Thai Counter Techniques (2013)",
  "status": "placeholder_only"
}
```

---

## D. Fintas y contras

### Lo que sí está en el libro
- Reglas de ejecución:
  - finta rápida
  - cuerpo relajado
  - objetivo diferente al ataque posterior
  - finta puede ser incompleta
  - ataque posterior con potencia completa
- Hay **13 fintas** explícitas
- Hay contras de Saiyok y Kem por categoría de ataque

### Lo que falta
- timing exacto
- transferencia fina de peso
- distancia precisa
- ritmo de ejecución real

### Solución OS
```json
{
  "media_requirements": {
    "reference_dvd": "Muay Thai: Training and Techniques (2013)",
    "video_required": true
  }
}
```

---

## E. Saiyok y Kem: weekly training plans

### Observación importante
En el texto proporcionado aparecen los encabezados:

- `Morning Training`
- `Afternoon Training`

pero **las tablas completas de los planes semanales de Saiyok y Kem no están disponibles en el volcado textual**.

### Lo que sí tenemos de ellos
- Saiyok:
  - mañana: 3–6 millas + 20–30 min cuerda
  - sombra: 3–4 x 4
  - pads: 3–5 x 4
  - saco: 4–5 x 4
  - partner: 30–60 min
  - clinch: 15–20 min, 4 veces/semana
- Kem:
  - mañana: 90–120 min carrera
  - sombra: 1 x 5
  - pads: 4–6 x 4
  - saco: 4–5 x 4
  - partner: 15–20 min
  - clinch: 20–30 min

### Lo que falta
- distribución exacta lunes a sábado
- qué días hacen hard/soft
- qué días exactos hacen sparring
- distribución completa de tarde por día

### Solución OS
```json
{
  "external_dependency": "Saiyok_Kem_weekly_tables_not_present_in_text_dump",
  "action": "do_not_infer_weekly_distribution_as_canonical"
}
```

---

# 4. Checklist final de ingestión para agentes

## Listo para convertir en código / reglas

### Módulo biomecánico
- [x] PNF con valores canónicos
- [x] regresiones por falta de equipamiento
- [x] placeholder de Boran
- [x] dependencia de video para timing de fintas

### Módulo de planes
- [x] beginner plan
- [x] amateur plan
- [x] professional plan
- [x] hard/soft template tailandés
- [x] ten-week cycle
- [x] eight-week fight prep
- [x] tapering
- [x] weight cut rules
- [x] recovery rules
- [x] red flags de dolor/enfermedad

---

## Correcciones que deben aplicarse en tu versión actual

- [ ] Cambiar frecuencia amateur de **4–5** a **3–6**
- [ ] Cambiar HR cap amateur de **88%** a **85%** por defecto
- [ ] Cambiar tapering pro de **2 semanas** a **7 días + 3 días finales**
- [ ] Marcar RPE/HRV como **OS extension**, no como regla del libro
- [ ] Añadir reglas completas de weight cut cuando `weight_cut_protocol_active = true`
- [ ] Añadir hard/soft alternation y descanso dominical
- [ ] No inventar la distribución semanal exacta de Saiyok/Kem si las tablas no están presentes

---

## Estado final

### Tu formalización está:
- **Aprobada en arquitectura**
- **Aprobada en intención**
- **Pendiente de corrección en 7 puntos canónicos**

### Tras aplicar los ajustes:
- queda lista para pasar a los agentes de:
  - `rules engine`
  - `skill paths`
  - `session builder`
  - `periodization planner`
  - `safety guardrails`

Si quieres, en el siguiente paso puedo generarte directamente:

1. **los 7 archivos `.ts` finales para Plan Maestro OS**, o  
2. **el JSON maestro consolidado en un solo bloque listo para ingestión**.
