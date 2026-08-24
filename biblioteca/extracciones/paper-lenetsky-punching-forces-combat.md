> **sourceId:** `paper-lenetsky-punching-forces-combat`
> **Origen:** Consolidado desde `chat-1787414900440-papers-combate-lote1.md` · Fecha: 2026-08-22

# Documento 1: Assessment and Contributors of Punching Forces in Combat Sports Athletes — Extracción para Plan Maestro OS

> Extracción parafraseada y estructurada del artículo de revisión. No se copian párrafos extensos; toda la información se resume en lenguaje propio con referencias de página. El artículo es una revisión narrativa (13 estudios incluidos) sobre medición de fuerza de golpeo y sus contribuyentes biomecánicos, con implicaciones para fuerza y acondicionamiento en deportes de combate.

---

## 1) Metadatos del libro

- **Título:** Assessment and Contributors of Punching Forces in Combat Sports Athletes: Implications for Strength and Conditioning
- **Autor(es):** Seth Lenetsky, Nigel Harris, Matt Brughelli (Sport Performance Research Institute New Zealand, AUT University)
- **Año:** 2013 (Strength and Conditioning Journal, Vol. 35, No. 2)
- **Disciplina principal:** Fuerza y acondicionamiento aplicado a deportes de combate (boxeo, karate, artes marciales); biomecánica del golpeo.
- **Enfoque poblacional:** Atletas de combate (boxeadores de nivel novice/intermedio/élite; karatekas); dirigido a profesionales de fuerza y acondicionamiento.
- **Notas de alcance:**
  - Cubre: métodos de medición de fuerza de golpeo (dinamometría), contribuyentes biomecánicos (piernas, tronco, brazo), y recomendaciones de entrenamiento (fuerza, potencia, estabilidad de core, tren superior).
  - NO cubre explícitamente: protocolos de rehabilitación de lesiones, nutrición, sueño, aspectos psicológicos. Es una revisión con evidencia limitada (los autores declaran vacío de investigación en intervenciones de S&C directamente medidas sobre fuerza de golpeo).

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- **`PunchForceProfile` (opcional):**
  - Descripción: Perfil cuantitativo de fuerza de golpeo de un atleta, útil para diagnóstico y seguimiento.
  - Campos sugeridos: `peakForceN`, `meanForceN`, `handDominance` (rear/front), `punchType` (cross/jab/hook), `measurementDevice` (force plate / glove sensor / bag), `setting` (lab/competition), `experienceLevel`.
  - Referencias: p. 1–2 (Tabla 1).

- **`GroundReactionForceDirection` (opcional):**
  - Descripción: Dirección de la fuerza de reacción al suelo dominante en un gesto técnico (vertical vs horizontal vs mixta/rotacional).
  - Campos sugeridos: `verticalComponent`, `horizontalComponent`, `rotationalComponent`, `sportGesture`.
  - Referencias: p. 3–4 (discusión sobre GRF vertical u horizontal en el golpe).

- **`ForceContributorDistribution` (opcional):**
  - Descripción: Distribución porcentual de contribución a la fuerza del golpe por segmento (piernas, tronco, brazo).
  - Campos sugeridos: `legContributionPct`, `trunkContributionPct`, `armContributionPct`, `experienceLevel`.
  - Referencias: p. 3 (datos de Filimonov et al.).

- **`LoadingOrientation` (extensión de ejercicio):**
  - Descripción: Clasificación de ejercicios por orientación de carga: axial (vertical) vs longitudinal (horizontal/anteroposterior).
  - Campos sugeridos: `loadingDirection` (axial | longitudinal | mixed), `planeOfForce`.
  - Referencias: p. 3–4 y Tabla 2.

### 2.2 Mapeo a tipos existentes

- **`FocusId = power`:**
  - El libro trata la potencia de golpeo como objetivo final: producir la mayor potencia total (fuerza × velocidad) en un gesto muy breve. Recomienda conversiones de fuerza máxima a potencia y luego a potencia específica.

- **`FocusId = strength`:**
  - La fuerza máxima se plantea como base necesaria en fase de preparación general, con énfasis en tren inferior y core.

- **`FocusId = core-stability`:**
  - Se enfatiza estabilidad rotacional lumbar (anti-rotación) por encima de movilidad lumbar, para transmitir GRF desde el tren inferior al superior.

- **`BodyZoneId = lumbar`:**
  - El libro indica priorizar estabilidad rotacional lumbar, evitar énfasis excesivo en movilidad lumbar por riesgo de lesión y posible reducción de fuerza de golpeo. Progresión de ejercicios de estabilización de suelo → rodillas → de pie.

- **`BodyZoneId = hip / lower-body`:**
  - Las piernas son consideradas contribuyente primario del golpe efectivo. Mayor contribución de piernas se asocia a mayor fuerza de golpeo y mayor experiencia.

- **`BodyZoneId = shoulder / upper-limb`:**
  - Tren superior descrito como de menor importancia relativa; se recomienda entrenamiento balístico para velocidad de golpeo.

- **`MovementPattern = squat / hinge / lunge`:**
  - Recomendados como patrones axiales para construir fuerza de empuje vertical.

- **`MovementPattern = horizontal-push / sled / throw`:**
  - Recomendados como patrones longitudinales para replicar la dirección horizontal del GRF en el golpe.

- **`MovementPattern = rotational / anti-rotation:**
  - El golpe implica rotación de pelvis, tronco y hombro; el core se entrena para resistir/estabilizar más que para generar movimiento lumbar.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: punch-force-strength-rep-scheme

- Descripción: Para desarrollar fuerza máxima orientada a GRF en combate, usar esquemas de fuerza con descansos largos.
- Tipo: intensidad / volumen / descanso
- Métrica principal: reps, sets, restMinutes
- Valores numéricos:
  - Rango óptimo (fuerza): ≤6 repeticiones, 2–6 series, 2–5 min de descanso.
- Condiciones de aplicación:
  - Fase de preparación general, objetivo fuerza máxima para GRF.
- Capítulos/páginas: Tabla 3, p. 4; texto p. 4–5.
- Comentarios/precauciones:
  - Descansos largos son esenciales para restauración bioenergética y esfuerzos máximos verdaderos (estímulo neuromuscular, no metabólico).

### Regla: punch-force-power-single-effort

- Descripción: Esquema de potencia de esfuerzo único.
- Tipo: intensidad / volumen / descanso
- Métrica principal: reps, sets, restMinutes
- Valores numéricos:
  - 1–2 repeticiones, 3–5 series, 2–5 min descanso.
- Condiciones de aplicación:
  - Fase de conversión a potencia; esfuerzos máximos individuales (ej. saltos, lanzamientos máximos).
- Capítulos/páginas: Tabla 3, p. 4.

### Regla: punch-force-power-multi-effort

- Descripción: Esquema de potencia de esfuerzos múltiples.
- Tipo: intensidad / volumen / descanso
- Métrica principal: reps, sets, restMinutes
- Valores numéricos:
  - 3–5 repeticiones, 3–5 series, 2–5 min descanso.
- Condiciones de aplicación:
  - Fase de potencia, gestos repetidos.
- Capítulos/páginas: Tabla 3, p. 4.

### Regla: avoid-short-rest-for-max-grf

- Descripción: Evitar descansos cortos tipo circuito cuando el objetivo es fuerza/potencia máxima de GRF.
- Tipo: descanso / estilo de entrenamiento
- Métrica principal: restMinutes
- Valores numéricos:
  - Umbral de riesgo: descansos cortos (<2 min) reducen carga utilizable y convierten el estímulo en metabólico.
  - Rango óptimo: 2–5 min entre series.
- Condiciones de aplicación:
  - Solo cuando el objetivo es fuerza/potencia máxima de GRF (no aplica a acondicionamiento metabólico).
- Capítulos/páginas: p. 4–5.
- Comentarios/precauciones:
  - El artículo advierte que mucha literatura de combate recomienda circuitos; esos sirven para acondicionamiento, no para fuerza máxima.

### Regla: punching-force-benchmark-by-level (solo referencia/diagnóstico)

- Descripción: Valores de referencia de fuerza de golpeo trasero (cross) por nivel, útiles para benchmarks y talent ID.
- Tipo: benchmark / diagnóstico (no prescripción)
- Métrica principal: meanForceN / peakForceN
- Valores numéricos (rear hand, media ± SD):
  - Élite: ~4,800 N; Intermedio: ~3,722 N; Novice: ~2,381 N.
  - Front hand: Élite ~2,874 N; Intermedio ~2,283 N; Novice ~1,604 N.
- Condiciones de aplicación:
  - Mediciones de laboratorio con placa de fuerza montada en pared; no extrapolables directamente a competición (valores en ring son menores).
- Capítulos/páginas: Tabla 1, p. 2; texto p. 3.
- Comentarios/precauciones:
  - ⚠️ Valores de competición (~3,554 N pico en peso pesado) fueron sustancialmente menores que laboratorio (~4,800 N); no usar lab como estándar de ring sin ajuste.

### Regla: leg-contribution-heuristic (cualitativa)

- Descripción: A mayor experiencia, mayor contribución de piernas al golpe.
- Tipo: progresión / técnica (cualitativa con datos de referencia)
- Métrica principal: legContributionPct
- Valores numéricos (referencia de un estudio):
  - Experimentados ~38.6%, intermedios ~32.2%, novice ~16.5%.
  - “Knockout artists” ~38.6% vs “players” ~32.8% y “speedsters” ~32.5%.
- Condiciones de aplicación:
  - Solo como guía conceptual; ⚠️ existe conflicto en la literatura (otro estudio encontró mayor relación con velocidad pre-impacto que con fuerza de piernas).
- Capítulos/páginas: p. 3.
- Comentarios/precauciones:
  - No usar como regla causal dura; el debate leg-drive vs hand-velocity sigue abierto.

### Regla: periodization-phase-sequence

- Descripción: Secuencia de periodización lineal para fuerza de golpeo.
- Tipo: progresión / periodización
- Métrica principal: fase de entrenamiento
- Valores numéricos:
  - Fase 1 (preparación general): base de fuerza máxima.
  - Fase 2 (preparación específica): conversión a potencia.
  - Fase 3 (pre-competición): potencia específica del gesto.
- Condiciones de aplicación:
  - Marco comunicativo (los autores aclaran que usan periodización lineal para comunicar, no como recomendación única).
- Capítulos/páginas: p. 4.
- Comentarios/precauciones:
  - El uso de complejos (fuerza casi máxima seguida de golpes) puede aprovechar potenciación post-activación.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

### SkillPath: lumbar-rotational-stability-progression

- Disciplina: Fuerza y acondicionamiento / core para combate
- Objetivo final (parafraseado): Estabilizar la columna lumbar contra fuerzas rotacionales durante todo un combate, transmitiendo GRF del tren inferior al superior.
- Requisitos de seguridad previos: Ausencia de dolor lumbar; evitar énfasis en movilidad lumbar sobre estabilidad (riesgo de lesión y posible pérdida de fuerza).
- Pasos de la progresión:

| Step | Nombre (parafraseado) | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Estabilización en suelo (ej. cuadrupedia prona) | Mantener posición y control anti-movimiento en base estable | Control sin pérdida de alineación | Compensar con movimiento lumbar | p. 5 |
| 2 | Estabilización en rodillas (ej. remo en split stance con cable) | Resistir rotación en postura más alta e inestable | Mantener tronco estable bajo tensión | Rotar o lateralizar tronco | p. 5 |
| 3 | Estabilización de pie (ej. Pallof press) | Anti-rotación de pie, replicando demandas del gesto | Estabilidad completa con carga | Dejar que la carga rote el tronco | p. 5 |

- Nota: La progresión se orienta a resistencia a la fatiga (endurance de la musculatura estabilizadora), no a fuerza máxima. p. 5.

### SkillPath: punching-force-periodization-path

- Disciplina: Fuerza y acondicionamiento para combate
- Objetivo final: Maximizar potencia de golpeo mediante secuenciación fuerza → potencia → potencia específica.
- Pasos de la progresión:

| Step | Nombre (parafraseado) | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Base de fuerza máxima (axial + longitudinal) | Squat y variantes, peso muerto, lunges, hip thrust, sled pesado | Cumplir esquemas ≤6 reps con carga alta | Descansos cortos | p. 4–5, Tabla 2 |
| 2 | Conversión a potencia | Variantes de halterofilia, push press, saltos verticales, lanzamientos horizontales, sled ligero | Ejecución balística con intención máxima | Carga excesiva que reduce velocidad | p. 4–5, Tabla 2 |
| 3 | Potencia específica | Golpes simples/combinados en saco/pad con descansos de potencia; complejos con fuerza casi máxima | Mantener calidad y velocidad por rep | Usarlo como cardio en vez de potencia | p. 4–5 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Familia: Axial loaded movements (squats, deadlifts, lunges, single-leg squat)

- Cues principales:
  - Carga en dirección vertical; intención de empuje contra el suelo.
  - Mantener alineación y base estable.
- Errores frecuentes:
  - Tratarlos como únicos ejercicios de piernas (ignoran componente horizontal del golpe).
- Variantes seguras y progresiones sugeridas:
  - Variantes unilaterales (single-leg squat) para abordar posturas escalonadas del golpe.
- Indicaciones específicas por zona:
  - Base de fuerza general; no replican por sí solos la dirección de GRF del golpe.
- Páginas: p. 3–4, Tabla 2.

### Familia: Longitudinal loaded movements (hip thrust/bridge, heavy sled pulls, pull-throughs)

- Cues principales:
  - Fuerza orientada anteroposterior/horizontal; replicar empuje del golpe.
- Errores frecuentes:
  - Omitirlos por priorizar solo trabajo vertical.
- Variantes seguras y progresiones sugeridas:
  - Sled pesado para fuerza, sled ligero para potencia; saltos horizontales y lanzamientos como variantes de potencia.
- Indicaciones específicas por zona:
  - Complemento necesario a lo axial; ⚠️ la dirección óptima de GRF aún no está resuelta en la literatura (puede ser mixta/rotacional).
- Páginas: p. 3–4, Tabla 2.

### Familia: Weightlifting variations y saltos (clean, snatch, jerk, push press, vertical jumps)

- Cues principales:
  - Intención balística, triple extensión, recepción controlada.
- Errores frecuentes:
  - Técnica deficiente bajo fatiga; usarlos como acondicionamiento.
- Variantes seguras y progresiones sugeridas:
  - Versiones simplificadas o con gomas/cadenas; push press como puente.
- Páginas: Tabla 2, p. 4.

### Familia: Upper-body ballistic (bench press throw, medicine ball throws, clapping push-ups)

- Cues principales:
  - Máxima velocidad de ejecución; carga acorde a curva de potencia.
- Errores frecuentes:
  - Cargas demasiado pesadas que reducen velocidad.
- Variantes seguras y progresiones sugeridas:
  - Medicine ball throws y clapping push-ups como opciones de complejo.
- Páginas: Tabla 4, p. 5.

### Familia: Sport-specific punches (single/combination)

- Cues principales:
  - Intención máxima por golpe; usar descansos de potencia (no acondicionamiento).
  - Integrar drive de piernas y rotación de tronco.
- Errores frecuentes:
  - Usar saco/pad solo como herramienta de cardio.
- Variantes seguras y progresiones sugeridas:
  - Combinar con fuerza casi máxima (complejos) para potenciación post-activación.
- Páginas: p. 4–5, Tabla 2.

### Familia: Core anti-rotation (Pallof press, cable row split stance, prone quadruped)

- Cues principales:
  - Columna neutra; resistir rotación; rigidez controlada.
- Errores frecuentes:
  - Permitir movimiento lumbar; priorizar movilidad sobre estabilidad.
- Variantes seguras y progresiones sugeridas:
  - Progresar de suelo → rodillas → de pie; aumentar duración/tensión para resistencia a la fatiga.
- Páginas: p. 5.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

- ⚠️ El artículo NO es una fuente de rehabilitación ni de manejo de dolor. Menciona el riesgo de lesión lumbar si se enfatiza movilidad sobre estabilidad (p. 5), y menciona estudios de lesión/salud en boxeadores solo como contexto de medición (p. 1–2), pero no ofrece protocolos de rehab.
- Única indicación preventiva utilizable:
  - **Condición:** Dolor lumbar / prevención lumbar en gestos rotacionales.
  - **Zona:** `lumbar`
  - **Recomendación:** Priorizar estabilidad rotacional; evitar movilidad lumbar excesiva bajo carga.
  - **Red flags:** No definidas en el texto; derivar a profesional clínico ante dolor.
  - Referencia: p. 5.

---

## 7) Factores de estilo de vida

- El artículo no aborda sueño, estrés, nutrición ni entrenamiento en enfermedad. No hay reglas extraíbles en este ámbito.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente de esquemas de series/repeticiones/descanso para fuerza y potencia orientados a golpeo.
  - Base para clasificar ejercicios por orientación de carga (axial vs longitudinal).
  - Progresión de estabilidad de core anti-rotación (SkillPath).
  - Benchmarks de fuerza de golpeo por nivel (solo diagnóstico).
- **Limitaciones:**
  - Es revisión narrativa con evidencia limitada y conflicto abierto (leg-drive vs hand-velocity). ⚠️ No tratar la contribución de piernas como regla causal dura.
  - Valores de fuerza son de laboratorio; no asumir equivalencia con competición.
  - No contiene protocolos de rehab ni umbrales de dolor.
- **Recomendaciones específicas:**
  - Crear reglas de fuerza/potencia con descanso 2–5 min y bandas de reps (≤6 fuerza; 1–2 y 3–5 potencia).
  - Añadir tag `loadingOrientation` (axial/longitudinal) a ejercicios de tren inferior.
  - Crear SkillPath `core-anti-rotation-stability` con la progresión suelo → rodillas → de pie.

---
---
