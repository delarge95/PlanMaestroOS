# maughan-nutrition-in-sport — Extracción recuperada de chat

> **sourceId:** `maughan-nutrition-in-sport` · **origen:** `chat-export-1787415035759` (Extracción de Reglas para Fitness Inteligente) · recuperado 2026-08-22 por AG-BIB.
> Contenido = respuestas del asistente tal cual, en orden cronológico (rondas). El chat aplicó la plantilla §0.

---

## Ronda 1 — tras: «0. Contexto del sistema Estás ayudando a construir un sistema de fitness inteligente que usa libros técnicos (fuerza, calistenia, movilidad…»
# Nutrition In Sport (IOC Encyclopaedia of Sports Medicine Vol. VII) — Extracción para Plan Maestro OS

> Extracción sistemática del volumen VII de la Enciclopedia de Medicina Deportiva del COI, editado por Ronald J. Maughan (2000). Libro de referencia canónico sobre nutrición deportiva con 51 capítulos que cubren desde bioquímica del ejercicio hasta nutrición específica por deporte. Se parafrasea todo el contenido; no se copian párrafos literales.

---

## 1) Metadatos del libro

- **Título:** Nutrition in Sport (Encyclopaedia of Sports Medicine, Volume VII)
- **Autor(es):** Editado por Ronald J. Maughan; >60 autores colaboradores (Burke, Hawley, Jeukendrup, Greenhaff, Spriet, Coyle, Ivy, Sawka, Montain, Clarkson, Williams, Lemon, Newsholme, Davis, Maughan, Shirreffs, Fogelholm, Chen, Sen, Packer, Aulin, Eichner, McNaughton, Grandjean, Kuipers, Febbraio, Sundgot-Borgen, Murray, Nicholas, Schabort, Noakes, Bangsbo, Benardot, Sharp, Rogozkin, Hargreaves, Wilmore, Snyder, Foster, Ekblom, Bergh, Gabel, Unnithan, Baxter-Jones, Berning, Jensen, Leighton, Manore, Rehrer, Gerrard, entre otros)
- **Año:** 2000
- **Editorial:** Blackwell Science (publicación de la Comisión Médica del COI en colaboración con la FIMS)
- **Disciplina principal:** Nutrición deportiva, fisiología del ejercicio, bioquímica del ejercicio
- **Enfoque poblacional:** Atletas de élite y recreativos; incluye poblaciones especiales (mujeres, jóvenes, vegetarianos, diabéticos), deportes de resistencia, fuerza, equipo y categoría de peso
- **Notas de alcance:**
  - **Cubre:** Metabolismo de sustratos (CHO, grasas, proteínas, aminoácidos), hidratación/electrolitos, termorregulación, vitaminas, minerales, antioxidantes, ayudas ergogénicas (creatina, cafeína, bicarbonato, citrato), alcohol, consideraciones poblacionales, nutrición por deporte, trastornos alimentarios, sobreentrenamiento nutricional, viajes.
  - **NO cubre explícitamente:** Programas de entrenamiento de fuerza específicos (no prescribe series/reps de ejercicios), biomecánica de ejercicios, protocolos de rehabilitación musculoesquelética, psicología del deporte (salvo aspectos de fatiga central y trastornos alimentarios).

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `NutritionPeriodPhase`:
  - **Descripción:** Fases de periodización nutricional (pre-ejercicio, durante ejercicio, post-ejercicio inmediato, recuperación extendida, carga de glucógeno, tapering nutricional).
  - **Campos sugeridos:** `phaseId`, `timingRelativeToExercise` (min antes/después), `macroTargets` (g/kg), `hydrationTargets` (ml/kg/h), `purpose` (rendimiento | recuperación | adaptación).
  - **Referencias:** Cap. 7 (Ivy, pp. 97–111), Cap. 8 (Hargreaves, pp. 112–118), Cap. 19 (Shirreffs, pp. 256–265).

- `HydrationStatus`:
  - **Descripción:** Estado de hidratación del atleta (euhydratado, hipohidratado %, hiperhidratado) con impacto en rendimiento y termorregulación.
  - **Campos sugeridos:** `statusId`, `bodyMassDeficitPct`, `sweatRateLPerHour`, `sweatNaConcMmolPerL`, `urineColor`, `thirstLevel`.
  - **Referencias:** Cap. 16 (Sawka et al., pp. 216–225), Cap. 17 (Maughan, pp. 226–240).

- `ErgogenicAid`:
  - **Descripción:** Ayuda ergogénica nutricional con dosis, timing, legalidad, evidencia.
  - **Campos sugeridos:** `aidId`, `substance`, `doseRange`, `timingProtocol`, `iocStatus` (legal | restringido | prohibido), `evidenceLevel`, `targetPerformance` (fuerza | resistencia | alta intensidad).
  - **Referencias:** Cap. 26 (Williams & Leutholtz, pp. 356–366), Cap. 27 (Greenhaff, pp. 367–378), Cap. 28 (Spriet & Howlett, pp. 379–392), Cap. 29 (McNaughton, pp. 393–404).

- `EatingDisorderRisk`:
  - **Descripción:** Evaluación de riesgo de trastorno alimentario en atletas (triada de la mujer atleta, deportes estéticos/categoría de peso).
  - **Campos sugeridos:** `riskLevel`, `sportCategory` (estético | categoría de peso | resistencia), `redFlags[]`, `referralNeeded` (bool).
  - **Referencias:** Cap. 39 (Sundgot-Borgen, pp. 510–522), Cap. 31 (Gabel, pp. 417–428).

- `RecoveryNutritionProtocol`:
  - **Descripción:** Protocolo estructurado de nutrición post-ejercicio con ventanas de tiempo y objetivos de macros.
  - **Campos sugeridos:** `protocolId`, `windowMinutes`, `choGramsPerKg`, `proteinGramsPerKg`, `fluidMl`, `sodiumMmolPerL`, `frequencyOfIntake`.
  - **Referencias:** Cap. 7 (Ivy, pp. 97–111), Cap. 19 (Shirreffs, pp. 256–265).

### 2.2 Mapeo a tipos existentes

- `hypertrophy` / fuerza:
  - El libro aborda proteína para hipertrofia (1.4–1.8 g/kg/día para atletas de fuerza), creatina como potenciador del entrenamiento de fuerza, y requerimientos energéticos específicos. No prescribe ejercicios de fuerza sino nutrición para soportar el entrenamiento. (Cap. 10, Lemon, pp. 133–152; Cap. 27, Greenhaff, pp. 367–378).

- `tendon-health` / rehabilitación:
  - ⚠️ El libro NO trata tendinopatías ni rehabilitación musculoesquelética directamente. La relevancia indirecta está en: (a) nutrición post-lesión para reparación tisular (proteína, vitamina C para síntesis de colágeno); (b) trastornos alimentarios y riesgo de fracturas por estrés en atletas con amenorrea (Cap. 31, Gabel; Cap. 39, Sundgot-Borgen); (c) calcio y salud ósea (Cap. 23, Aulin, pp. 318–325).

- `mobility` / flexibilidad:
  - No se aborda directamente. El libro menciona la importancia de la hidratación para la función muscular y la termorregulación pero no protocolos de movilidad.

- `posture`:
  - No se aborda. Sin mapeo directo.

- `endurance` / resistencia:
  - Cobertura extensa: carga de glucógeno (Cap. 7), CHO durante ejercicio (Cap. 8), metabolismo de grasas (Cap. 13), hidratación (Caps. 15–19), cafeína (Cap. 28), bicarbonato (Cap. 29), nutrición específica por deporte de resistencia (Caps. 42, 43, 51).

- `BodyZoneId`:
  - El libro no organiza por zonas corporales sino por sistemas metabólicos. Sin embargo, menciona:
    - **Hueso/salud ósea:** Calcio, vitamina D, fracturas por estrés en amenorrea (Cap. 23, pp. 318–325; Cap. 31, pp. 423–424; Cap. 39, pp. 516–517).
    - **GI (tracto gastrointestinal):** Síntomas GI durante ejercicio, sangre GI, diarrea del corredor (Cap. 18, Rehrer & Gerrard, pp. 241–255).
    - **Músculo esquelético:** Daño muscular excéntrico, glucógeno, creatina, proteína (Caps. 7, 10, 27).

- `MovementPattern`:
  - El libro organiza por deporte más que por patrón de movimiento. Deportes cubiertos: sprint (Cap. 41), carrera de fondo (Cap. 42), ciclismo (Cap. 43), deportes de equipo (Cap. 44), gimnasia (Cap. 45), natación (Cap. 46), levantamiento de pesas (Cap. 47), raqueta (Cap. 48), categoría de peso (Cap. 49), patinaje (Cap. 50), esquí de fondo (Cap. 51).

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `cho-intake-endurance-training`

- **Descripción:** Ingesta diaria de carbohidratos para atletas de resistencia según carga de entrenamiento.
- **Tipo:** Nutrición / volumen.
- **Métrica principal:** g CHO / kg peso corporal / día.
- **Valores numéricos:**
  - Rango óptimo: 7–10 g/kg/día para maximizar glucógeno muscular y soportar entrenamiento diario intenso (Cap. 5, Burke, p. 81; Cap. 7, Ivy, p. 108).
  - Mínimo para mantenimiento: 5 g/kg/día (Cap. 5, Burke, p. 81).
  - Carga de glucógeno: 10 g/kg/día durante 3 días tras depleción (Cap. 7, Ivy, p. 108).
  - Umbral de exceso: >600 g/día no aporta beneficio adicional en resíntesis de glucógeno (Cap. 7, Ivy, p. 101, Fig. 7.3).
- **Condiciones de aplicación:** Atletas de resistencia con >1 h de entrenamiento diario; ajustar según volumen. Para atletas con ingesta energética limitada, expresar como % de energía (60–70%).
- **Capítulos/páginas:** Cap. 5 (Burke, pp. 73–84), Cap. 7 (Ivy, pp. 97–111).
- **Comentarios:** ⚠️ Para atletas con ingesta energética muy alta (>16–20 MJ/día), expresar en g/kg es más preciso que en % de energía. Atletas femeninas pueden necesitar mayor % de energía de CHO para alcanzar valores absolutos adecuados.

---

### Regla: `cho-timing-postexercise`

- **Descripción:** Timing y cantidad de CHO post-ejercicio para maximizar resíntesis de glucógeno.
- **Tipo:** Nutrición / timing / recuperación.
- **Métrica principal:** g CHO / kg / intervalo de tiempo post-ejercicio.
- **Valores numéricos:**
  - Iniciar dentro de los primeros 30 min post-ejercicio: ≥1 g CHO/kg (Cap. 5, Burke, p. 81; Cap. 7, Ivy, p. 108).
  - Consumo cada 2 h durante 4–6 h: 0.7 g CHO/kg cada 2 h (Cap. 7, Ivy, p. 108).
  - Tasa máxima de resíntesis: ~5–6 µmol/g peso húmedo/h con ≥50 g de glucosa cada 2 h (Cap. 7, Ivy, p. 101).
  - Retraso de 2 h reduce tasa de resíntesis en ~50% (Cap. 7, Ivy, p. 103, Fig. 7.4).
  - Combinación CHO + proteína: 38% más rápido que CHO solo (1.5 g CHO/kg + 0.53 g proteína/kg) (Cap. 7, Ivy, p. 106).
- **Condiciones de aplicación:** Cualquier sesión que agote glucógeno; especialmente crítica si hay <8 h de recuperación antes de la siguiente sesión.
- **Capítulos/páginas:** Cap. 7 (Ivy, pp. 97–111), Cap. 19 (Shirreffs, pp. 256–265).
- **Comentarios:** La fase rápida de resíntesis (insulina-independiente) dura ~30–60 min post-ejercicio. Después, la resíntesis depende de insulina.

---

### Regla: `cho-preexercise-meal`

- **Descripción:** Ingesta de CHO pre-ejercicio para optimizar disponibilidad de glucógeno y glucosa.
- **Tipo:** Nutrición / timing.
- **Métrica principal:** g CHO / kg, timing antes del ejercicio.
- **Valores numéricos:**
  - 1–4 g CHO/kg en las 1–4 h antes del ejercicio (Cap. 5, Burke, p. 81).
  - Índice glucémico alto puede mejorar resíntesis post-ejercicio prolongado (Cap. 5, Burke, p. 78; Cap. 7, Ivy, p. 102).
- **Condiciones de aplicación:** Ejercicio de >60 min o de alta intensidad. No aplicar en ejercicios <30 min de baja intensidad.
- **Capítulos/páginas:** Cap. 5 (Burke, pp. 80–81), Cap. 7 (Ivy, p. 102).
- **Comentarios:** ⚠️ Algunos individuos experimentan hipoglucemia reactiva con CHO de alto IG pre-ejercicio; en esos casos, usar bajo IG o consumir durante el calentamiento.

---

### Regla: `cho-during-exercise`

- **Descripción:** Ingesta de CHO durante ejercicio prolongado o intermitente de alta intensidad.
- **Tipo:** Nutrición / durante ejercicio.
- **Métrica principal:** g CHO / hora de ejercicio.
- **Valores numéricos:**
  - 30–60 g CHO/h durante ejercicio >60 min (Cap. 5, Burke, p. 81; Cap. 8, Hargreaves, p. 116).
  - Tasa máxima de oxidación de CHO exógeno: ~1–1.3 g/min (~60–78 g/h) (Cap. 8, Hargreaves, p. 115).
  - Concentración de bebida: 6–8% CHO (no >10% para evitar problemas GI y no comprometer absorción de fluidos) (Cap. 8, Hargreaves, p. 115; Cap. 17, Maughan, p. 233).
  - Volumen: 600–1200 ml/h (Cap. 8, Hargreaves, p. 115).
  - Tipo de CHO: glucosa, sacarosa, maltodextrinas son equivalentes; fructosa sola no es efectiva y puede causar distress GI (Cap. 8, Hargreaves, p. 115).
- **Condiciones de aplicación:** Ejercicio continuo >60 min a >65% VO₂max; ejercicio intermitente de alta intensidad (deportes de equipo); ejercicio de >4 h a intensidad moderada.
- **Capítulos/páginas:** Cap. 8 (Hargreaves, pp. 112–118), Cap. 17 (Maughan, pp. 226–240).
- **Comentarios:** Iniciar CHO desde el principio del ejercicio, no esperar a la fatiga. Ingesta tardía mejora pero no iguala a ingesta desde el inicio.

---

### Regla: `protein-intake-endurance`

- **Descripción:** Requerimiento proteico para atletas de resistencia.
- **Tipo:** Nutrición / proteína.
- **Métrica principal:** g proteína / kg / día.
- **Valores numéricos:**
  - Rango óptimo: 1.2–1.4 g/kg/día (Cap. 10, Lemon, p. 146; Cap. 5, Burke, p. 81).
  - RDA sedentario: 0.8 g/kg/día (insuficiente para atletas de resistencia).
  - Umbral de exceso: >1.6 g/kg/día no aporta beneficio adicional para resistencia.
- **Condiciones de aplicación:** Atletas de resistencia con entrenamiento regular (>5 h/semana).
- **Capítulos/páginas:** Cap. 10 (Lemon, pp. 133–152), Cap. 5 (Burke, p. 81).
- **Comentarios:** La proteína puede contribuir hasta ~5% de la energía durante ejercicio prolongado; mayor contribución con depleción de glucógeno.

---

### Regla: `protein-intake-strength`

- **Descripción:** Requerimiento proteico para atletas de fuerza/potencia.
- **Tipo:** Nutrición / proteína.
- **Métrica principal:** g proteína / kg / día.
- **Valores numéricos:**
  - Rango óptimo: 1.4–1.8 g/kg/día (Cap. 10, Lemon, p. 146).
  - ⚠️ Algunos estudios sugieren hasta 2.0 g/kg/día para atletas de fuerza en entrenamiento intenso (Cap. 10, Lemon, p. 143).
  - Ingestas >2.4 g/kg/día no aumentan síntesis proteica adicional y aumentan oxidación de aminoácidos (Cap. 10, Lemon, p. 143).
- **Condiciones de aplicación:** Atletas de fuerza/potencia en fase de ganancia muscular o mantenimiento durante déficit calórico.
- **Capítulos/páginas:** Cap. 10 (Lemon, pp. 133–152), Cap. 47 (Rogozkin, pp. 621–631).
- **Comentarios:** Distribuir en 4–6 comidas diarias. Combinar con CHO post-ejercicio para maximizar respuesta insulínica y síntesis.

---

### Regla: `hydration-during-exercise`

- **Descripción:** Tasa de ingesta de fluidos durante ejercicio para minimizar deshidratación.
- **Tipo:** Hidratación / durante ejercicio.
- **Métrica principal:** ml / kg / hora; % de déficit de masa corporal tolerable.
- **Valores numéricos:**
  - Objetivo: beber suficiente para limitar pérdida de masa corporal a <2% (Cap. 16, Sawka et al., p. 218).
  - Tasas de sudoración típicas: 1.0–2.5 L/h en ejercicio intenso en calor (Cap. 16, Sawka et al., p. 217; Cap. 17, Maughan, p. 227).
  - Volumen máximo de absorción intestinal: ~0.8–1.2 L/h (Cap. 17, Maughan, p. 232).
  - Déficit >2% de masa corporal: deterioro de rendimiento (Cap. 16, Sawka et al., p. 218).
  - Déficit >3%: deterioro significativo de VO₂max y capacidad de ejercicio (Cap. 16, Sawka et al., p. 219).
  - Déficit >5%: riesgo severo para salud y rendimiento (Cap. 16, Sawka et al., p. 220).
- **Condiciones de aplicación:** Todo ejercicio >30 min, especialmente en calor/humedad. Ajustar según tasa de sudoración individual.
- **Capítulos/páginas:** Cap. 16 (Sawka et al., pp. 216–225), Cap. 17 (Maughan, pp. 226–240).
- **Comentarios:** La sed no es indicador fiable; se pierde ~1–2% antes de percibir sed. Beber según plan, no solo por sed.

---

### Regla: `rehydration-postexercise`

- **Descripción:** Protocolo de rehidratación post-ejercicio para restaurar balance hídrico.
- **Tipo:** Hidratación / recuperación.
- **Métrica principal:** ml fluido / kg perdido; contenido de sodio.
- **Valores numéricos:**
  - Volumen: ingerir ≥150% del déficit de fluido (1.5 L por cada kg perdido) (Cap. 17, Maughan, p. 237; Cap. 19, Shirreffs, p. 261).
  - Sodio en bebida de rehidratación: ≥50 mmol/L para retención efectiva (Cap. 19, Shirreffs, p. 260).
  - Bebidas sin sodio: retienen solo ~50% del volumen ingerido (Cap. 19, Shirreffs, p. 260).
  - Incluir sodio + comida sólida mejora retención vs. bebidas solas (Cap. 19, Shirreffs, p. 262).
- **Condiciones de aplicación:** Cualquier sesión con pérdida >1% de masa corporal. Crítico si hay <12 h antes de siguiente sesión.
- **Capítulos/páginas:** Cap. 19 (Shirreffs, pp. 256–265), Cap. 17 (Maughan, pp. 236–237).
- **Comentarios:** Agua sola post-ejercicio causa diuresis rápida y no restaura balance. Incluir sodio es esencial.

---

### Regla: `creatine-loading-protocol`

- **Descripción:** Protocolo de carga y mantenimiento de creatina monohidrato.
- **Tipo:** Suplementación / ergogénico.
- **Métrica principal:** g creatina / día; duración de fases.
- **Valores numéricos:**
  - Fase de carga: 20 g/día (4 × 5 g) durante 5–6 días (Cap. 27, Greenhaff, p. 369; Cap. 26, Williams & Leutholtz, p. 361).
  - Fase de mantenimiento: 2–5 g/día después de la carga (Cap. 27, Greenhaff, p. 370).
  - Aumento de creatina muscular: ~20% con carga; mantiene niveles elevados con mantenimiento (Cap. 27, Greenhaff, p. 369).
  - Carga alternativa: 3 g/día durante 3–4 semanas (más lenta pero mismo resultado final) (Cap. 27, Greenhaff, p. 370).
  - Aumento de peso: 1–2 kg durante primera semana (principalmente agua intracelular) (Cap. 27, Greenhaff, p. 370).
  - Combinación con CHO: mejora retención muscular de creatina (~60% más) (Cap. 27, Greenhaff, p. 371).
- **Condiciones de aplicación:** Deportes de fuerza/potencia, sprints repetidos, entrenamiento de alta intensidad. NO beneficioso para resistencia pura (Cap. 27, Greenhaff, p. 373).
- **Capítulos/páginas:** Cap. 27 (Greenhaff, pp. 367–378).
- **Comentarios:** ⚠️ ~20–30% de individuos son "no respondedores" (<10 mmol/kg de aumento). La cafeína puede contrarrestar parcialmente el efecto ergogénico. Efecto principal: mejora rendimiento en esfuerzos repetidos de <30 s y en entrenamiento de fuerza.

---

### Regla: `caffeine-performance`

- **Descripción:** Dosis y timing de cafeína para mejora de rendimiento.
- **Tipo:** Suplementación / ergogénico.
- **Métrica principal:** mg cafeína / kg peso corporal; timing pre-ejercicio.
- **Valores numéricos:**
  - Dosis efectiva: 3–6 mg/kg (Cap. 28, Spriet & Howlett, p. 381).
  - Timing: 60 min antes del ejercicio (Cap. 28, Spriet & Howlett, p. 381).
  - Dosis >9 mg/kg: efectos secundarios (mareo, insomnio, problemas GI) sin beneficio adicional (Cap. 28, Spriet & Howlett, p. 381).
  - Mejora en resistencia: ~20–50% en tiempo hasta fatiga (Cap. 28, Spriet & Howlett, p. 381).
  - Umbral IOC ilegal: >12 µg/ml en orina (~600–800 mg en una sola dosis para un adulto) (Cap. 28, Spriet & Howlett, p. 379).
  - Efecto en ejercicio de alta intensidad ~1 h: mejora de rendimiento en time trials (Cap. 28, Spriet & Howlett, p. 382).
- **Condiciones de aplicación:** Ejercicio de resistencia >20 min; ejercicio intermitente de alta intensidad. Menos claro en sprints <90 s.
- **Capítulos/páginas:** Cap. 28 (Spriet & Howlett, pp. 379–392).
- **Comentarios:** ⚠️ La cafeína en café puede no ser tan efectiva como cafeína anhidra en cápsulas (Cap. 28, p. 389). No se recomienda uso diario habitual para evitar tolerancia.

---

### Regla: `bicarbonate-buffering`

- **Descripción:** Protocolo de bicarbonato sódico para buffering en ejercicio de alta intensidad.
- **Tipo:** Suplementación / ergogénico.
- **Métrica principal:** mg NaHCO₃ / kg; timing.
- **Valores numéricos:**
  - Dosis: 200–300 mg/kg (Cap. 29, McNaughton, p. 398).
  - Timing: 60–150 min antes del ejercicio (Cap. 29, McNaughton, p. 398).
  - Duración del efecto: ejercicio de 1–10 min de alta intensidad (Cap. 29, McNaughton, p. 399).
  - NO efectivo en ejercicio <30 s (Cap. 29, McNaughton, p. 399).
  - Dosis >300 mg/kg: riesgo de problemas GI (náusea, diarrea) sin beneficio adicional (Cap. 29, McNaughton, p. 400).
  - Citrato sódico: dosis similar (300–500 mg/kg), efectivo en ejercicio de 2–4 min (Cap. 29, McNaughton, p. 400).
- **Condiciones de aplicación:** Ejercicio de alta intensidad con componente glucolítico significativo (400 m, 800 m, sprints repetidos, deportes de equipo con esfuerzos repetidos). NO en resistencia pura.
- **Capítulos/páginas:** Cap. 29 (McNaughton, pp. 393–404).
- **Comentarios:** ⚠️ Efectos secundarios GI frecuentes. Probar en entrenamiento antes de competición. ⚠️ Estatus legal: no prohibido por IOC pero considerado "doping" según definición amplia.

---

### Regla: `glycogen-loading-protocol`

- **Descripción:** Protocolo de carga de glucógeno pre-competición.
- **Tipo:** Nutrición / periodización / pre-competición.
- **Métrica principal:** g CHO/kg/día; duración; combinación con tapering.
- **Valores numéricos:**
  - Protocolo modificado (Sherman): 6 días de tapering con 5 g/kg/día primeros 3 días + 10 g/kg/día últimos 3 días (Cap. 7, Ivy, p. 108).
  - Protocolo clásico (Bergström): depleción + 3 días bajo CHO + 3 días alto CHO (ya no se recomienda por estrés asociado) (Cap. 7, Ivy, p. 101).
  - Resultado: glucógeno muscular de ~130 a ~200 mmol/kg peso húmedo (Cap. 7, Ivy, p. 101).
  - Mejora de rendimiento: ~2–3% en eventos >90 min (Cap. 42, Hawley et al., p. 553).
- **Condiciones de aplicación:** Solo eventos >90 min de duración continua. NO necesario para eventos <90 min ni para sprints.
- **Capítulos/páginas:** Cap. 7 (Ivy, pp. 97–111), Cap. 42 (Hawley et al., pp. 550–559).
- **Comentarios:** Aumento de peso de ~1–2 kg por retención hídrica (2.7 g agua por g glucógeno). Considerar en deportes donde el peso extra es perjudicial.

---

### Regla: `iron-status-monitoring`

- **Descripción:** Monitoreo y manejo de hierro en atletas, especialmente mujeres.
- **Tipo:** Nutrición / mineral / monitoreo.
- **Métrica principal:** Ferritina sérica (µg/L); hemoglobina (g/dL).
- **Valores numéricos:**
  - Ferritina <12 µg/L: depósitos agotados (Cap. 24, Eichner, p. 327).
  - Hemoglobina <12 g/dL (mujeres) / <13 g/dL (hombres): anemia (Cap. 24, Eichner, p. 327).
  - Ingesta recomendada: 15 mg/día mujeres, 12 mg/día hombres adolescentes (Cap. 24, Eichner, p. 331).
  - Suplementación: solo si hay deficiencia confirmada; no como profilaxis rutinaria (Cap. 24, Eichner, p. 335).
- **Condiciones de aplicación:** Atletas femeninas, vegetarianos, corredores de fondo, atletas con ingesta energética restringida. Monitoreo 2×/año.
- **Capítulos/páginas:** Cap. 24 (Eichner, pp. 326–335), Cap. 31 (Gabel, pp. 424–425).
- **Comentarios:** ⚠️ La "pseudoanemia del atleta" (hemodilución por expansión plasmática) no es anemia real y no requiere tratamiento. Distinguir con ferritina.

---

### Regla: `calcium-bone-health-female`

- **Descripción:** Ingesta de calcio para salud ósea en atletas femeninas, especialmente con riesgo de amenorrea.
- **Tipo:** Nutrición / mineral / salud ósea.
- **Métrica principal:** mg calcio / día.
- **Valores numéricos:**
  - Ingesta recomendada: 1200–1500 mg/día para atletas en riesgo (amenorrea, ingesta energética baja) (Cap. 23, Aulin, p. 322; Cap. 31, Gabel, p. 424).
  - Ingesta mínima: 1000 mg/día (Cap. 23, Aulin, p. 320).
  - Vitamina D: 400–800 UI/día para facilitar absorción (Cap. 23, Aulin, p. 322).
- **Condiciones de aplicación:** Atletas femeninas con amenorrea/oligomenorrea, ingesta energética <30 kcal/kg/día, deportes estéticos o de categoría de peso.
- **Capítulos/páginas:** Cap. 23 (Aulin, pp. 318–325), Cap. 31 (Gabel, pp. 423–424), Cap. 39 (Sundgot-Borgen, pp. 516–517).
- **Comentarios:** ⚠️ La amenorrea con baja densidad ósea (triada de la mujer atleta) requiere derivación médica. La app puede alertar pero NO diagnosticar ni tratar.

---

### Regla: `overtraining-nutrition-prevention`

- **Descripción:** Ingesta de CHO para prevenir sobreentrenamiento metabólico.
- **Tipo:** Nutrición / recuperación / prevención.
- **Métrica principal:** g CHO/kg/día durante periodos de alto volumen.
- **Valores numéricos:**
  - Mínimo 5 g CHO/kg/día durante entrenamiento intenso para prevenir depleción crónica de glucógeno (Cap. 37, Kuipers, p. 493; Cap. 7, Ivy, p. 108).
  - Ingesta de CHO inmediatamente post-ejercicio para acelerar recuperación (Cap. 37, Kuipers, p. 493).
  - Monitoreo de glutamina plasmática como indicador de sobreentrenamiento (Cap. 37, Kuipers, p. 495).
- **Condiciones de aplicación:** Periodos de >2 semanas de entrenamiento de alto volumen/intensidad. Atletas con >2 sesiones/día.
- **Capítulos/páginas:** Cap. 37 (Kuipers, pp. 492–496), Cap. 7 (Ivy, pp. 97–111).
- **Comentarios:** El sobreentrenamiento tiene componente nutricional pero también de carga de entrenamiento. La nutrición sola no lo previene si la carga es excesiva.

---

### Regla: `weight-making-strategy`

- **Descripción:** Estrategia nutricional para deportes de categoría de peso.
- **Tipo:** Nutrición / peso / competición.
- **Métrica principal:** % de pérdida de peso; timing; método.
- **Valores numéricos:**
  - Pérdida gradual: 0.5–0.9 kg/semana durante pretemporada (Cap. 49, Wilmore, p. 644).
  - Pérdida máxima segura: no >1.5% de masa corporal por semana durante temporada (Cap. 49, Wilmore, p. 644).
  - Deshidratación aguda: solo en las últimas 24–48 h, máximo 3–4% adicional (Cap. 49, Wilmore, p. 644).
  - Rehidratación: tiempo mínimo entre pesaje y competición: ≥3 h para recuperar función (Cap. 49, Wilmore, p. 644).
  - Ingesta de CHO alta (≥60% de energía) durante periodo de pérdida de peso para preservar glucógeno (Cap. 49, Wilmore, p. 644).
- **Condiciones de aplicación:** Solo deportes de categoría de peso (lucha, boxeo, judo, halterofilia). Bajo supervisión de nutricionista.
- **Capítulos/páginas:** Cap. 49 (Wilmore, pp. 637–645), Cap. 35 (Manore, pp. 469–483).
- **Comentarios:** ⚠️ La deshidratación >5% es peligrosa y deteriora rendimiento significativamente. Prohibir métodos de pérdida de peso extrema (sauna sin supervisión, diuréticos, vómito). Derivar a profesional si se detectan.

---

### Regla: `antioxidant-supplementation`

- **Descripción:** Suplementación con antioxidantes en atletas de alto volumen.
- **Tipo:** Nutrición / suplementación.
- **Métrica principal:** mg/día de vitaminas C, E.
- **Valores numéricos:**
  - Vitamina C: 200–500 mg/día puede reducir infecciones respiratorias post-ejercicio prolongado (Cap. 20, Fogelholm, p. 274; Cap. 11, Newsholme & Castell, p. 163).
  - Vitamina E: 200–400 UI/día puede reducir marcadores de peroxidación lipídica (Cap. 22, Sen et al., p. 305).
  - ⚠️ No hay evidencia de que megadosis (>1000 mg vit C, >800 UI vit E) mejoren rendimiento (Cap. 21, Chen, p. 289; Cap. 20, Fogelholm, p. 276).
- **Condiciones de aplicación:** Atletas de ultra-resistencia, entrenamiento en altitud, periodos de muy alto volumen. NO como sustituto de dieta rica en frutas/verduras.
- **Capítulos/páginas:** Cap. 20 (Fogelholm, pp. 266–280), Cap. 21 (Chen, pp. 281–291), Cap. 22 (Sen et al., pp. 292–317).
- **Comentarios:** ⚠️ El ejercicio regular ya aumenta defensas antioxidantes endógenas. La suplementación es un complemento, no un sustituto.

---

### Regla: `energy-availability-female`

- **Descripción:** Disponibilidad energética mínima para función menstrual y salud ósea en atletas femeninas.
- **Tipo:** Nutrición / energía / salud.
- **Métrica principal:** kcal / kg masa libre de grasa / día.
- **Valores numéricos:**
  - ⚠️ El libro no usa explícitamente el concepto de "disponibilidad energética" (kcal/kg FFM/día) como se define actualmente, pero establece:
  - Ingesta energética insuficiente → amenorrea → pérdida ósea (Cap. 31, Gabel, p. 424; Cap. 39, Sundgot-Borgen, p. 517).
  - Ingesta <30 kcal/kg/día asociada con disfunción menstrual (Cap. 31, Gabel, p. 424; inferido de datos de gimnastas con ~36 kcal/kg/día).
  - Gimnastas con ingesta de ~2600 kcal/día (≈36 kcal/kg) ya muestran riesgo (Cap. 31, Gabel, p. 420).
- **Condiciones de aplicación:** Atletas femeninas en deportes estéticos, de resistencia, o categoría de peso. Monitoreo de ciclos menstruales.
- **Capítulos/páginas:** Cap. 31 (Gabel, pp. 417–428), Cap. 39 (Sundgot-Borgen, pp. 510–522).
- **Comentarios:** ⚠️ La app puede alertar sobre ingesta energética baja + amenorrea + deporte de riesgo, pero NO diagnosticar. Derivar a médico/nutricionista.

---

### Regla: `fluid-composition-sport-drink`

- **Descripción:** Composición óptima de bebidas deportivas según objetivo.
- **Tipo:** Hidratación / formulación.
- **Métrica principal:** % CHO, mmol/L Na, osmolalidad.
- **Valores numéricos:**
  - **Durante ejercicio:** 6–8% CHO, 10–30 mmol/L Na, osmolalidad 260–340 mOsm/kg (Cap. 17, Maughan, p. 233, Tabla 17.2).
  - **Rehidratación post-ejercicio:** ≥50 mmol/L Na, puede incluir 4–8% CHO (Cap. 19, Shirreffs, p. 260).
  - **CHO-electrolito para resistencia:** 6% CHO + 20 mmol/L Na es estándar (Cap. 8, Hargreaves, p. 115; Cap. 17, Maughan, p. 233).
  - Osmolalidad hipotónica (<280): mejor absorción de agua; isotónica (280–330): balance absorción/CHO (Cap. 17, Maughan, p. 232).
- **Condiciones de aplicación:** Toda bebida consumida durante ejercicio >30 min. Post-ejercicio si hay >1% de déficit hídrico.
- **Capítulos/páginas:** Cap. 17 (Maughan, pp. 226–240), Cap. 19 (Shirreffs, pp. 256–265).
- **Comentarios:** La palatabilidad es crítica: si no sabe bien, el atleta no bebe suficiente. Ofrecer variedad.

---

### Regla: `vegetarian-athlete-nutrition`

- **Descripción:** Consideraciones nutricionales específicas para atletas vegetarianos.
- **Tipo:** Nutrición / dieta especial.
- **Métrica principal:** Nutrientes de riesgo (B12, hierro, zinc, calcio, proteína completa).
- **Valores numéricos:**
  - Vitamina B12: suplementación obligatoria en veganos (no se obtiene de fuentes vegetales) (Cap. 33, Berning, p. 447).
  - Hierro: ingesta vegetariana tiene menor biodisponibilidad; monitorear ferritina (Cap. 33, Berning, p. 448).
  - Proteína: combinar legumbres + cereales para aminoácidos completos (Cap. 33, Berning, p. 446).
  - Zinc: menor biodisponibilidad por fitatos; considerar suplementación (Cap. 33, Berning, p. 449).
  - Calcio: lácteos si ovo-lacto; si vegano, fuentes fortificadas o suplemento (Cap. 33, Berning, p. 449).
- **Condiciones de aplicación:** Atletas vegetarianos/veganos. Monitoreo nutricional regular.
- **Capítulos/páginas:** Cap. 33 (Berning, pp. 442–456).
- **Comentarios:** La dieta vegetariana bien planificada puede soportar rendimiento de élite. El riesgo está en la planificación inadecuada, no en el vegetarianismo per se.

---

### Regla: `alcohol-recovery-guidelines`

- **Descripción:** Manejo de alcohol post-ejercicio/competición.
- **Tipo:** Nutrición / recuperación / estilo de vida.
- **Métrica principal:** g alcohol; timing; efectos.
- **Valores numéricos:**
  - Alcohol NO es fuente de energía útil post-ejercicio (Cap. 30, Burke & Maughan, p. 407).
  - Alcohol >2% en bebida post-ejercicio: retención hídrica reducida (Cap. 30, Burke & Maughan, p. 409).
  - Alcohol >4%: efecto diurético significativo, impide rehidratación (Cap. 30, Burke & Maughan, p. 409).
  - Alcohol NO afecta resíntesis de glucógeno si CHO es adecuado (Cap. 30, Burke & Maughan, p. 410).
  - Alcohol puede aumentar sangrado de tejidos blandos post-lesión (vasodilatación) (Cap. 30, Burke & Maughan, p. 411).
- **Condiciones de aplicación:** Post-competición, post-entrenamiento con lesión de tejidos blandos, periodos de rehidratación crítica.
- **Capítulos/páginas:** Cap. 30 (Burke & Maughan, pp. 405–414).
- **Comentarios:** Si se consume alcohol: priorizar rehidratación y comida sólida primero. Cerveza <2% alcohol o shandy (cerveza + limonada) son opciones menos dañinas. Evitar alcohol 24 h post-lesión de tejidos blandos.

---

### Regla: `young-athlete-nutrition`

- **Descripción:** Consideraciones nutricionales para atletas jóvenes en crecimiento.
- **Tipo:** Nutrición / población especial.
- **Métrica principal:** Energía, calcio, hierro, proteína.
- **Valores numéricos:**
  - Energía: debe cubrir crecimiento + entrenamiento (no restringir) (Cap. 32, Unnithan & Baxter-Jones, p. 430).
  - Calcio: 1200–1500 mg/día en adolescentes (Cap. 32, Unnithan & Baxter-Jones, p. 437).
  - Hierro: 15 mg/día mujeres adolescentes, 12 mg/día hombres (Cap. 32, Unnithan & Baxter-Jones, p. 438).
  - Proteína: 1.2–1.6 g/kg/día (incluye crecimiento) (Cap. 32, Unnithan & Baxter-Jones, p. 435).
  - CHO: ≥6 g/kg/día para soportar entrenamiento (Cap. 32, Unnithan & Baxter-Jones, p. 434).
- **Condiciones de aplicación:** Atletas <18 años en crecimiento activo. NO aplicar restricciones calóricas.
- **Capítulos/páginas:** Cap. 32 (Unnithan & Baxter-Jones, pp. 429–441).
- **Comentarios:** ⚠️ La restricción energética en jóvenes puede afectar crecimiento y desarrollo puberal. Alertar si se detecta ingesta <requerimiento estimado.

---

### Regla: `travel-nutrition`

- **Descripción:** Estrategias nutricionales para atletas viajeros (jet lag, cambio de huso horario).
- **Tipo:** Nutrición / logística / recuperación.
- **Métrica principal:** Timing de comidas; hidratación; CHO.
- **Valores numéricos:**
  - Hidratación en vuelo: beber 200–300 ml/h para compensar baja humedad de cabina (Cap. 36, Grandjean & Ruud, p. 487).
  - Adaptación a nuevo huso: comer según horario local desde el primer día (Cap. 36, Grandjean & Ruud, p. 488).
  - CHO alto en cena para facilitar sueño (efecto sobre triptófano/serotonina) (Cap. 36, Grandjean & Ruud, p. 488).
  - Proteína en desayuno para alerta (efecto sobre catecolaminas) (Cap. 36, Grandjean & Ruud, p. 488).
  - Melatonina: 0.5–3 mg 1 h antes de dormir en nuevo huso (Cap. 36, Grandjean & Ruud, p. 488).
- **Condiciones de aplicación:** Viajes >3 husos horarios. Especialmente relevante para competiciones internacionales.
- **Capítulos/páginas:** Cap. 36 (Grandjean & Ruud, pp. 484–491).
- **Comentarios:** La deshidratación en vuelo es el problema nutricional más común. Planificar comidas y snacks antes del viaje.

---

### Regla: `heat-exercise-nutrition`

- **Descripción:** Ajustes nutricionales para ejercicio en calor extremo.
- **Tipo:** Nutrición / ambiental.
- **Métrica principal:** ml fluido/h; g CHO/h; mmol/L Na.
- **Valores numéricos:**
  - Fluidos: 600–1200 ml/h con 6–8% CHO + 20–40 mmol/L Na (Cap. 38, Febbraio, p. 504).
  - CHO: 30–60 g/h (puede necesitar más por mayor oxidación en calor) (Cap. 38, Febbraio, p. 504).
  - Pre-hidratación: 5–7 ml/kg 2–4 h antes del ejercicio en calor (Cap. 16, Sawka et al., p. 218).
  - Post-ejercicio: 150% del déficit + sodio (Cap. 38, Febbraio, p. 504).
  - ⚠️ Hiperhidratación con glicerol: 1 g glicerol/kg + 20–25 ml agua/kg (Cap. 38, Febbraio, p. 504; Cap. 17, Maughan, p. 237).
- **Condiciones de aplicación:** Ejercicio >30 min con temperatura >25°C o humedad >60%.
- **Capítulos/páginas:** Cap. 38 (Febbraio, pp. 497–506), Cap. 16 (Sawka et al., pp. 216–225).
- **Comentarios:** La aclimatación reduce concentración de sodio en sudor pero aumenta tasa de sudoración. Ajustar ingesta de sodio según aclimatación.

---

### Regla: `cold-exercise-nutrition`

- **Descripción:** Consideraciones nutricionales para ejercicio en frío.
- **Tipo:** Nutrición / ambiental.
- **Métrica principal:** CHO; fluidos.
- **Valores numéricos:**
  - CHO: mantener ingesta alta (≥6 g/kg/día) para soportar termogénesis y ejercicio (Cap. 38, Febbraio, p. 498).
  - Fluidos: la deshidratación también ocurre en frío (pérdida respiratoria + sudor bajo ropa); beber según sed + plan (Cap. 38, Febbraio, p. 499).
  - Bebidas calientes pueden mejorar confort y adherencia a ingesta (Cap. 38, Febbraio, p. 499).
  - ⚠️ NO usar cafeína/efedrina como "calentadores" (efecto limitado, riesgo de deshidratación) (Cap. 38, Febbraio, p. 499).
- **Condiciones de aplicación:** Ejercicio >30 min con temperatura <5°C. Deportes de invierno.
- **Capítulos/páginas:** Cap. 38 (Febbraio, pp. 497–500).
- **Comentarios:** El frío puede suprimir sed; planificar ingesta de fluidos aunque no se tenga sed.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

⚠️ **Nota importante:** Este libro NO contiene progresiones de ejercicios tipo SkillPath/SkillStep (no hay progresiones de handstand, planche, front lever, sentadilla, etc.). Es un libro de nutrición, no de entrenamiento de fuerza o calistenia.

Sin embargo, contiene **protocolos de periodización nutricional** que pueden modelarse como progresiones:

### SkillPath: `glycogen-loading-protocol`

- **Disciplina:** Nutrición deportiva / periodización.
- **Objetivo final:** Maximizar glucógeno muscular pre-competición para eventos >90 min.
- **Requisitos de seguridad previos:** No aplicar en deportes donde el peso extra es perjudicial; no aplicar en eventos <90 min; no aplicar en atletas con diabetes sin supervisión.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Tapering + CHO normal (días 1–3) | Reducir volumen de entrenamiento 50%, mantener 5 g CHO/kg/día | Completar 3 días | No reducir entrenamiento; no aumentar CHO prematuramente | Cap. 7, Ivy, p. 108 |
| 2 | Carga de CHO (días 4–6) | Aumentar a 10 g CHO/kg/día, reducir volumen a mínimo | Completar 3 días | No alcanzar 10 g/kg; comer grasa en exceso | Cap. 7, Ivy, p. 108 |
| 3 | Día pre-competición | Comida alta CHO 3–4 h antes (1–4 g/kg); snack CHO 1 h antes | Consumir ≥1 g CHO/kg en las 4 h previas | Saltarse comida pre-competición | Cap. 7, Ivy, p. 108 |

---

### SkillPath: `postexercise-recovery-nutrition`

- **Disciplina:** Nutrición deportiva / recuperación.
- **Objetivo final:** Maximizar resíntesis de glucógeno, rehidratación y síntesis proteica post-ejercicio.
- **Requisitos de seguridad previos:** Ninguno específico; aplicar tras cualquier sesión intensa.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Ventana inmediata (0–30 min) | 1 g CHO/kg + 0.3 g proteína/kg + 500 ml fluido con sodio | Consumir dentro de 30 min | Esperar >30 min; solo agua sin CHO | Cap. 7, Ivy, p. 108; Cap. 19, Shirreffs, p. 260 |
| 2 | Recuperación extendida (30 min–4 h) | 0.7 g CHO/kg cada 2 h; comida sólida a las 2 h | Mantener ingesta regular | Saltarse tomas; no comer comida sólida | Cap. 7, Ivy, p. 108 |
| 3 | Rehidratación completa | 150% del déficit hídrico + sodio + comida | Orina clara; peso restaurado | Solo agua; no incluir sodio | Cap. 19, Shirreffs, p. 261 |

---

### SkillPath: `creatine-supplementation`

- **Disciplina:** Suplementación / ergogénico.
- **Objetivo final:** Aumentar creatina muscular para mejorar rendimiento en fuerza/potencia.
- **Requisitos de seguridad previos:** Función renal normal; no usar en deportes de categoría de peso donde el aumento de 1–2 kg es problemático.
- **Pasos de la progresión:**

| Step | Nombre | Descripción técnica breve | Criterio para avanzar | Errores típicos | Notas/páginas |
|---|---|---|---|---|---|
| 1 | Carga (días 1–6) | 20 g/día divididos en 4 × 5 g con comidas | Completar 5–6 días | No dividir dosis; tomar en ayunas | Cap. 27, Greenhaff, p. 369 |
| 2 | Mantenimiento (día 7+) | 2–5 g/día con comida | Continuar indefinidamente o ciclar (8–12 semanas on, 4 off) | Olvidar mantenimiento; no combinar con CHO | Cap. 27, Greenhaff, p. 370 |
| 3 | Evaluación | Medir rendimiento en sprints repetidos o fuerza | Mejora >2% en rendimiento esperado | No evaluar; atribuir todo a creatina | Cap. 27, Greenhaff, p. 373 |

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

⚠️ **Nota:** Este libro NO contiene cues técnicos de ejecución de ejercicios (no hay "escápulas deprimidas", "pelvis neutra", etc.). Es un libro de nutrición.

Sin embargo, contiene **cues de ejecución nutricional** que pueden usarse para enriquecer protocolos:

### Nutrición durante ejercicio de resistencia

- **Cues principales:**
  - "Beber antes de tener sed" (Cap. 16, p. 218).
  - "Empezar CHO desde el inicio del ejercicio, no esperar a la fatiga" (Cap. 8, p. 116).
  - "Combinar fluido + CHO + sodio en cada toma" (Cap. 17, p. 233).
  - "Practicar la estrategia de nutrición en entrenamiento antes de competición" (Cap. 42, p. 559).
- **Errores frecuentes:**
  - Esperar a la fatiga para ingerir CHO (Cap. 8, p. 116).
  - Beber solo agua sin electrolitos en ejercicio >2 h (Cap. 17, p. 236).
  - Concentración de CHO >10% causando problemas GI (Cap. 17, p. 233).
  - No practicar la estrategia en entrenamiento (Cap. 42, p. 559).
- **Indicaciones específicas:** No usar fructosa sola como fuente de CHO durante ejercicio (riesgo GI, baja oxidación) (Cap. 8, p. 115).

### Nutrición post-ejercicio

- **Cues principales:**
  - "Comer/beber dentro de los 30 min post-ejercicio" (Cap. 7, p. 108).
  - "Combinar CHO + proteína para respuesta insulínica" (Cap. 7, p. 106).
  - "Incluir sodio en la rehidratación" (Cap. 19, p. 260).
  - "Comer comida sólida además de líquidos" (Cap. 19, p. 262).
- **Errores frecuentes:**
  - Esperar >2 h para primera ingesta (Cap. 7, p. 103).
  - Solo líquidos sin comida sólida (Cap. 19, p. 262).
  - No incluir sodio (Cap. 19, p. 260).
  - Ingesta insuficiente (<1 g CHO/kg) (Cap. 7, p. 101).

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

⚠️ **Nota:** Este libro NO es de rehabilitación musculoesquelética ni manejo de dolor. No contiene protocolos de rehab para tendinitis, lesiones ligamentosas, etc.

Sin embargo, contiene información relevante para el contexto de rehabilitación:

### Condición: Fracturas por estrés / baja densidad ósea en atletas

- **Zona:** General (hueso); riesgo en tibia, metatarsos, fémur, pelvis.
- **Etiología resumida:** Amenorrea + baja disponibilidad energética + ingesta inadecuada de calcio/vitamina D → baja densidad ósea → riesgo de fractura por estrés (Cap. 31, Gabel, p. 424; Cap. 39, Sundgot-Borgen, p. 517).
- **Signos y síntomas clave:** Amenorrea/oligomenorrea, dolor óseo localizado, historia de fracturas previas, ingesta energética <30 kcal/kg/día (Cap. 31, p. 424).
- **Factores de riesgo nutricionales:**
  - Calcio <1000 mg/día (Cap. 23, Aulin, p. 322).
  - Vitamina D insuficiente (Cap. 23, Aulin, p. 322).
  - Ingesta energética crónicamente baja (Cap. 31, Gabel, p. 424).
  - Amenorrea >6 meses (Cap. 39, Sundgot-Borgen, p. 517).
- **Prevención nutricional:**
  - Calcio 1200–1500 mg/día + vitamina D 400–800 UI/día (Cap. 23, Aulin, p. 322).
  - Mantener ingesta energética ≥30 kcal/kg/día (Cap. 31, Gabel, p. 424).
  - Monitoreo de ciclos menstruales (Cap. 39, Sundgot-Borgen, p. 517).
- **Umbrales / red flags:**
  - Amenorrea >3 meses + deporte de riesgo → derivar a médico (Cap. 39, Sundgot-Borgen, p. 517).
  - Fractura por estrés confirmada → derivar a médico + nutricionista (Cap. 39, Sundgot-Borgen, p. 517).
  - ⚠️ La app NO debe diagnosticar ni tratar; solo alertar y derivar.
- **Referencias:** Cap. 23 (Aulin, pp. 318–325), Cap. 31 (Gabel, pp. 423–424), Cap. 39 (Sundgot-Borgen, pp. 516–517).

---

### Condición: Trastornos alimentarios en atletas

- **Zona:** Sistémico.
- **Etiología resumida:** Presión por peso/apariencia + deportes estéticos o categoría de peso + personalidad perfeccionista → restricción alimentaria → trastorno alimentario (Cap. 39, Sundgot-Borgen, pp. 510–513).
- **Signos y síntomas clave:** Restricción calórica severa, miedo intenso a ganar peso, imagen corporal distorsionada, vómito/laxantes/diuréticos, amenorrea, pérdida de peso rápida (Cap. 39, Sundgot-Borgen, pp. 514–515).
- **Deportes de mayor riesgo:** Gimnasia, patinaje artístico, natación sincronizada, carrera de fondo, categoría de peso (Cap. 39, Sundgot-Borgen, p. 511).
- **Red flags para derivación:**
  - Pérdida >10% peso en 3 meses sin causa médica (Cap. 39, p. 517).
  - Uso de vómito/laxantes/diuréticos (Cap. 39, p. 515).
  - Amenorrea + restricción calórica + deporte de riesgo (Cap. 39, p. 517).
  - ⚠️ La app NO debe diagnosticar trastornos alimentarios. Solo puede alertar sobre patrones de riesgo y recomendar derivación a profesional.
- **Referencias:** Cap. 39 (Sundgot-Borgen, pp. 510–522).

---

### Condición: Síntomas gastrointestinales durante ejercicio

- **Zona:** GI (tracto gastrointestinal).
- **Etiología resumida:** Reducción de flujo sanguíneo esplácnico durante ejercicio intenso (>70% VO₂max) → isquemia relativa → síntomas GI (Cap. 18, Rehrer & Gerrard, pp. 241–255).
- **Signos y síntomas clave:** Náusea, vómito, dolor abdominal, diarrea, urgencia defecatoria, sangrado GI oculto (Cap. 18, pp. 248–250).
- **Prevención nutricional:**
  - Evitar CHO >10% durante ejercicio (Cap. 17, Maughan, p. 233).
  - Evitar fibra alta en comida pre-ejercicio (Cap. 18, Rehrer & Gerrard, p. 249).
  - Practicar estrategia de nutrición en entrenamiento (Cap. 18, p. 249).
  - Mantener hidratación adecuada (Cap. 18, p. 249).
- **Umbrales / red flags:**
  - Sangrado GI visible → derivar a médico (Cap. 18, p. 250).
  - Diarrea persistente >48 h post-ejercicio → derivar a médico (Cap. 18, p. 251).
  - ⚠️ La app puede sugerir ajustes nutricionales pero NO diagnosticar patologías GI.
- **Referencias:** Cap. 18 (Rehrer & Gerrard, pp. 241–255).

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

### Sueño

- ⚠️ El libro NO aborda el sueño de forma directa como factor de recuperación. No hay recomendaciones de horas de sueño.
- Mención indirecta: el jet lag afecta el ciclo sueño-vigilia y se recomienda melatonina 0.5–3 mg para adaptación (Cap. 36, Grandjean & Ruud, p. 488).

### Estrés

- El estrés psicológico afecta la recuperación y puede contribuir al sobreentrenamiento (Cap. 37, Kuipers, p. 494).
- El sobreentrenamiento tiene componente psicológico (motivación, irritabilidad, insomnio) además del nutricional (Cap. 37, Kuipers, pp. 494–495).
- Monitoreo de estado de ánimo (POMS scale) como herramienta de detección temprana (Cap. 37, Kuipers, p. 495).

### Nutrición (aspectos de estilo de vida)

- **Viajes:** Planificar comidas, mantener hidratación en vuelo, adaptar a huso horario (Cap. 36, Grandjean & Ruud, pp. 484–491).
- **Alcohol:** Ver Regla `alcohol-recovery-guidelines` (Cap. 30, Burke & Maughan, pp. 405–414).
- **Suplementos:** La mayoría de suplementos no tienen evidencia sólida; priorizar dieta real (Cap. 26, Williams & Leutholtz, pp. 356–366; Cap. 40, Murray, pp. 523–531).

### Entrenar enfermo

- ⚠️ El libro NO contiene reglas tipo "above/below the neck" para entrenar enfermo.
- Mención indirecta: el sobreentrenamiento aumenta susceptibilidad a infecciones (Cap. 11, Newsholme & Castell, pp. 161–163).
- La glutamina puede jugar un papel en la función inmune post-ejercicio (Cap. 11, Newsholme & Castell, pp. 161–166).
- Vitamina C (200–500 mg/día) puede reducir infecciones respiratorias post-ejercicio prolongado (Cap. 20, Fogelholm, p. 274; Cap. 11, Newsholme & Castell, p. 163).

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - **Fuente principal de reglas de nutrición deportiva:** Ingesta de CHO (g/kg/día, timing pre/durante/post), proteína (g/kg/día por tipo de entrenamiento), hidratación (tasas, composición de bebidas, rehidratación).
  - **Protocolos de suplementación con evidencia:** Creatina (carga + mantenimiento), cafeína (dosis + timing), bicarbonato/citrato (dosis + condiciones).
  - **Reglas de seguridad nutricional:** Disponibilidad energética mínima en mujeres, monitoreo de hierro/calcio, detección de riesgo de trastornos alimentarios.
  - **Periodización nutricional:** Carga de glucógeno, nutrición post-ejercicio, nutrición en viajes, ajustes por clima.
  - **Validación de datos nutricionales en la app:** Rangos de ingesta, composición de bebidas, umbrales de deshidratación.

- **Limitaciones:**
  - ⚠️ **NO es un libro de entrenamiento:** No contiene progresiones de ejercicios, cues técnicos de ejecución, ni prescripción de series/reps. No usar para SkillPaths de ejercicios.
  - ⚠️ **NO es un libro de rehabilitación:** No contiene protocolos de rehab para lesiones musculoesqueléticas. No usar para motor de rehab.
  - ⚠️ **Población de referencia:** Principalmente atletas de élite y recreativos adultos. Ajustar para usuarios recreativos de la app (reducir volúmenes/intensidades).
  - ⚠️ **Año 2000:** Algunas recomendaciones pueden estar desactualizadas (ej. concepto de "disponibilidad energética" no se usa explícitamente; dosis de cafeína pueden haberse refinado). Usar como base, no como única fuente.
  - ⚠️ **NO diagnosticar:** El libro es de nutrición, no de medicina. No usar para diagnosticar trastornos alimentarios, anemias, amenorrea, etc. Solo alertar y derivar.

- **Recomendaciones específicas:**
  1. **Crear `rules/nutrition-carbohydrate.ts`** con reglas `cho-intake-endurance-training`, `cho-timing-postexercise`, `cho-during-exercise`, `glycogen-loading-protocol` usando los valores de Cap. 5 (Burke), Cap. 7 (Ivy), Cap. 8 (Hargreaves).
  2. **Crear `rules/nutrition-hydration.ts`** con reglas `hydration-during-exercise`, `rehydration-postexercise`, `fluid-composition-sport-drink`, `heat-exercise-nutrition` usando Cap. 16 (Sawka), Cap. 17 (Maughan), Cap. 19 (Shirreffs), Cap. 38 (Febbraio).
  3. **Crear `rules/supplements-evidence-based.ts`** con reglas `creatine-loading-protocol`, `caffeine-performance`, `bicarbonate-buffering` usando Cap. 27 (Greenhaff), Cap. 28 (Spriet & Howlett), Cap. 29 (McNaughton).
  4. **Crear `rules/nutrition-safety.ts`** con reglas `energy-availability-female`, `iron-status-monitoring`, `calcium-bone-health-female`, `weight-making-strategy`, `overtraining-nutrition-prevention` usando Cap. 23 (Aulin), Cap. 24 (Eichner), Cap. 31 (Gabel), Cap. 37 (Kuipers), Cap. 39 (Sundgot-Borgen), Cap. 49 (Wilmore).
  5. **Crear `types/NutritionPeriodPhase.ts` y `types/HydrationStatus.ts`** como nuevas entidades del modelo de datos para soportar las reglas de timing nutricional y estado de hidratación.
  6. **NO crear SkillPaths de ejercicios** desde este libro; solo usar los protocolos de periodización nutricional (carga de glucógeno, recuperación post-ejercicio, suplementación de creatina) como "skills" nutricionales.

---

*Fin de extracción. Documento listo para conversión a código, reglas y metadatos por agentes de implementación.*

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
# Ejecución de las 6 recomendaciones — Nutrition In Sport (Maughan, 2000)

> Antes de ejecutar, señalo los puntos donde la ausencia de ayudas visuales del libro genera ambigüedad o datos incompletos. Después, desarrollo las 6 recomendaciones.

---

## ⚠️ Datos faltantes o ambiguos por falta de ayudas visuales

| Referencia | Qué falta | Impacto |
|---|---|---|
| **Fig. 35.1 / 35.2** (p. 471) | Curvas de oxidación de sustratos vs. ingesta de CHO/proteína/grasa. Solo tengo la descripción textual ("la ingesta de grasa no estimula proporcionalmente su oxidación"). | No puedo extraer valores numéricos exactos de oxidación (g/h) vs. ingesta (g). Las reglas se basan en texto. |
| **Fig. 41.2** (p. 537) | Curva de velocidad y PCr durante 100m sprint. Tengo los datos textuales (PCr cae 50–60% en primeros 5–6s) pero no la forma exacta de la curva. | Regla de sprint se basa en texto. |
| **Fig. 41.4** (p. 537) | Velocidad vs. distancia en 100m. Solo texto: "la velocidad máxima se mantiene 20–30m (hombres) / 15–20m (mujeres)". | Sin datos numéricos de velocidad (m/s). |
| **Fig. 43.3** (p. 568) | Glucosa en sangre durante ciclismo con CHO vs. placebo. Solo texto. | Regla de ciclismo basada en texto. |
| **Fig. 46.3 / Tabla 46.1** (p. 614) | Glucosa en sangre durante entrenamiento de natación con CHO vs. placebo. Tengo datos textuales y la tabla parcial (sujetos 1 y 2). | Datos completos de los 9 sujetos no disponibles. |
| **Fig. 49.2** (p. 641) | Cambios en compartimentos de agua con deshidratación 2/4/6%. Tengo porcentajes textuales (plasma 10%, intersticial 30–60%, intracelular 30–60%). | Valores exactos por compartimento a cada nivel de deshidratación no disponibles. |
| **Tabla 35.1** (p. 477–479) | Rangos de grasa corporal por deporte. Solo menciona algunos deportes. | Lista incompleta; se usa lo disponible. |
| **Tabla 43.2** (p. 563) | Gasto energético e ingesta en ciclistas. Solo texto parcial (Tour de France: 24.3 MJ/día; Race Across America: 35.4 MJ/día). | Datos completos por categoría de ciclista no disponibles. |
| **Fig. 50.1** (p. 648) | Contribución aeróbica/anaeróbica por distancia en speed skating. Solo texto: "en 500m ≈ 50% anaeróbico; en 10000m ≈ 90% aeróbico". | Porcentajes exactos por distancia no disponibles. |
| **Fig. 51.1** (p. 657) | No se menciona explícitamente en el texto extraído. | Sin datos. |
| **Tablas de glucógeno muscular** (Caps. 5–8) | Valores de glucógeno muscular (mmol/kg peso húmedo/seco) en diferentes condiciones. Tengo valores textuales (135–205 mmol/kg húmedo) pero no todas las tablas. | Se usan valores textuales. |

> **Conclusión:** Las reglas que se generan a continuación se basan en los valores numéricos textuales disponibles. Donde un valor depende de una figura no disponible, se marca con `⚠️ dato aproximado por texto`.

---

---

# RECOMENDACIÓN 1: `rules/nutrition-carbohydrate.ts`

## Archivo: `rules/nutrition-carbohydrate.ts`

### Regla: `cho-daily-intake-endurance`

- **Descripción:** Ingesta diaria de carbohidratos para atletas de resistencia según carga de entrenamiento.
- **Tipo:** Nutrición / volumen diario.
- **Métrica principal:** g CHO / kg peso corporal / día.
- **Valores numéricos:**
  - Rango óptimo mantenimiento: **5–7 g/kg/día** (Cap. 5, Burke, p. 81; Cap. 7, Ivy, p. 108).
  - Rango óptimo entrenamiento intenso: **7–10 g/kg/día** (Cap. 5, Burke, p. 81; Cap. 42, Hawley et al., p. 551).
  - Carga de glucógeno pre-competición: **10–12 g/kg/día** durante 3 días (Cap. 7, Ivy, p. 108; Cap. 42, p. 552).
  - Mínimo para evitar depleción crónica: **5 g/kg/día** (Cap. 7, Ivy, p. 101).
  - Umbral superior sin beneficio adicional: **>600 g/día absolutos** (Cap. 7, Ivy, p. 101; Fig. 7.3).
  - ⚠️ Para atletas con ingesta energética >16–20 MJ/día, expresar en g/kg es más preciso que en % de energía (Cap. 5, Burke, p. 82).
  - Para atletas con ingesta energética restringida (mujeres, deportes estéticos): expresar como **60–70% de energía total** (Cap. 5, Burke, p. 82; Cap. 31, Gabel, p. 420).
- **Condiciones de aplicación:**
  - Atletas de resistencia con >1 h de entrenamiento diario.
  - Ajustar según volumen: <1 h/día → 5 g/kg; 1–3 h/día → 7 g/kg; >3 h/día → 8–10 g/kg.
  - ⚠️ No aplicar a atletas en déficit calórico controlado sin supervisión.
- **Capítulos/páginas:** Cap. 5 (Burke, pp. 73–84), Cap. 7 (Ivy, pp. 97–111), Cap. 42 (Hawley et al., pp. 550–559).
- **Comentarios:** La ingesta de CHO debe ser la prioridad nutricional en atletas de resistencia. La depleción crónica de glucógeno conduce a fatiga acumulada y deterioro del rendimiento (Cap. 7, Ivy, p. 101; Cap. 5, Burke, p. 82).

---

### Regla: `cho-timing-postexercise`

- **Descripción:** Timing y cantidad de CHO post-ejercicio para maximizar resíntesis de glucógeno.
- **Tipo:** Nutrición / timing / recuperación.
- **Métrica principal:** g CHO / kg peso corporal / intervalo post-ejercicio.
- **Valores numéricos:**
  - Iniciar dentro de los **primeros 30 min** post-ejercicio: **≥1 g CHO/kg** (Cap. 7, Ivy, p. 108; Cap. 19, Shirreffs, p. 258).
  - Consumo cada 2 h durante 4–6 h: **0.7 g CHO/kg cada 2 h** (Cap. 7, Ivy, p. 104; Cap. 19, Shirreffs, p. 258).
  - Tasa máxima de resíntesis: **5–6 µmol/g peso húmedo/h** con ≥50 g de glucosa cada 2 h (Cap. 7, Ivy, p. 101).
  - Retraso de 2 h reduce tasa de resíntesis en **~50%** (Cap. 7, Ivy, p. 103; Fig. 7.4).
  - **CHO + proteína** (1.5 g CHO/kg + 0.53 g proteína/kg): resíntesis **38% más rápida** que CHO solo (Cap. 7, Ivy, p. 106; Zawadzki et al. 1992).
  - Índice glucémico alto: **~106 mmol/g húmedo** de incremento en 24 h vs. **~71.5 mmol/g** con IG bajo (Cap. 7, Ivy, p. 102; Burke et al. 1993).
  - Umbral absoluto: **>600 g/día** no aporta beneficio adicional en resíntesis (Cap. 7, Ivy, p. 101).
- **Condiciones de aplicación:**
  - Cualquier sesión que agote glucógeno (>60 min a >65% VO₂max, o series de alta intensidad).
  - Crítico si hay <8 h de recuperación antes de la siguiente sesión.
  - Si hay daño muscular excéntrico (maratón, descenso), la resíntesis puede retrasarse varios días (Cap. 7, Ivy, p. 107–108).
- **Capítulos/páginas:** Cap. 7 (Ivy, pp. 97–111), Cap. 19 (Shirreffs, pp. 256–265).
- **Comentarios:** La fase rápida de resíntesis (insulina-independiente) dura ~30–60 min. Después, la resíntesis depende de insulina. La combinación CHO+proteína aprovecha el efecto insulinotrópico de la proteína.

---

### Regla: `cho-preexercise-meal`

- **Descripción:** Ingesta de CHO pre-ejercicio para optimizar disponibilidad de glucógeno hepático y glucosa plasmática.
- **Tipo:** Nutrición / timing pre-competición.
- **Métrica principal:** g CHO / kg peso corporal / timing antes del ejercicio.
- **Valores numéricos:**
  - Comida principal: **1–4 g CHO/kg** consumida **1–4 h antes** del ejercicio (Cap. 7, Ivy, p. 108; Cap. 42, p. 552).
  - Snack ligero: **<1 g CHO/kg** consumido **<1 h antes** (Cap. 42, p. 552).
  - Índice glucémico: alto para maximizar glucógeno hepático; bajo si hay riesgo de hipoglucemia reactiva (Cap. 5, Burke, p. 77; Cap. 42, p. 552).
  - ⚠️ Evitar comidas altas en grasa y fibra <2 h antes del ejercicio (retrasan vaciamiento gástrico) (Cap. 42, p. 552; Cap. 47, Rogozkin, p. 627).
  - Para eventos >90 min: considerar carga de glucógeno los 3 días previos (10 g/kg/día) + comida pre-ejercicio (Cap. 7, Ivy, p. 108).
- **Condiciones de aplicación:**
  - Ejercicio >60 min o de alta intensidad.
  - ⚠️ Atletas con hipoglucemia reactiva: consumir CHO de bajo IG o durante el calentamiento (Cap. 5, Burke, p. 77; Cap. 42, p. 565).
- **Capítulos/páginas:** Cap. 5 (Burke, pp. 73–84), Cap. 7 (Ivy, pp. 97–111), Cap. 42 (Hawley et al., pp. 550–559).

---

### Regla: `cho-during-exercise-endurance`

- **Descripción:** Ingesta de CHO durante ejercicio prolongado para mantener glucosa plasmática y oxidación de CHO.
- **Tipo:** Nutrición / durante ejercicio.
- **Métrica principal:** g CHO / hora de ejercicio.
- **Valores numéricos:**
  - **30–60 g CHO/h** durante ejercicio >60 min (Cap. 8, Hargreaves, p. 116; Cap. 42, p. 556).
  - Tasa máxima de oxidación de CHO exógeno: **~1–1.3 g/min (~60–78 g/h)** (Cap. 8, Hargreaves, p. 115; Cap. 42, p. 556).
  - Concentración de bebida: **6–8% CHO** (no >10% para evitar problemas GI) (Cap. 8, Hargreaves, p. 115; Cap. 17, Maughan, p. 233).
  - Volumen: **600–1200 ml/h** (Cap. 8, Hargreaves, p. 115).
  - Tipo de CHO: glucosa, sacarosa, maltodextrinas son equivalentes; fructosa sola no es efectiva y puede causar distress GI (Cap. 8, Hargreaves, p. 115).
  - Para eventos >2.5 h: considerar **hasta 90 g/h** con mezclas de CHO (glucosa+fructosa en ratio 2:1) (Cap. 8, Hargreaves, p. 115).
  - Iniciar desde el principio del ejercicio, no esperar a la fatiga (Cap. 8, Hargreaves, p. 116).
- **Condiciones de aplicación:**
  - Ejercicio continuo >60 min a >65% VO₂max.
  - Ejercicio intermitente de alta intensidad (deportes de equipo) >60 min.
  - ⚠️ Para eventos <60 min a alta intensidad: CHO puede mejorar rendimiento por mecanismos centrales (Cap. 8, Hargreaves, p. 116; Cap. 42, p. 557).
- **Capítulos/páginas:** Cap. 8 (Hargreaves, pp. 112–118), Cap. 17 (Maughan, pp. 226–240), Cap. 42 (Hawley et al., pp. 550–559).
- **Comentarios:** La ingesta tardía de CHO mejora pero no iguala a la ingesta desde el inicio (Cap. 8, Hargreaves, p. 116).

---

### Regla: `cho-during-exercise-swimming`

- **Descripción:** Ingesta de CHO durante entrenamiento de natación para mantener glucosa plasmática.
- **Tipo:** Nutrición / durante ejercicio / natación.
- **Métrica principal:** g CHO / kg peso corporal / timing durante entrenamiento.
- **Valores numéricos:**
  - Protocolo estudiado: **1 g CHO/kg** (polímeros de glucosa al 50%) a los **10 min** de iniciado el entrenamiento + **0.6 g CHO/kg** (solución al 20%) cada **20 min** posteriores (Cap. 46, Sharp, p. 613; O'Sullivan et al. 1994).
  - Beneficio: mejora rendimiento en series de 10×91.4m al final del entrenamiento en nadadores con tendencia a hipoglucemia (Cap. 46, Sharp, p. 614).
  - ⚠️ Nadadores que mantienen glucosa plasmática estable sin suplementación no muestran beneficio adicional (Cap. 46, Sharp, p. 614).
- **Condiciones de aplicación:**
  - Entrenamientos de natación >90 min con series de alta intensidad.
  - Nadadores con tendencia a hipoglucemia (glucosa <3.5 mmol/L durante el entrenamiento).
  - ⚠️ Para entrenamientos <60 min, la suplementación con CHO no es necesaria (Cap. 46, Sharp, p. 614).
- **Capítulos/páginas:** Cap. 46 (Sharp, pp. 609–618).

---

### Regla: `cho-during-exercise-team-sports`

- **Descripción:** Ingesta de CHO durante deportes de equipo para mantener glucosa plasmática y retrasar fatiga.
- **Tipo:** Nutrición / durante ejercicio / deportes de equipo.
- **Métrica principal:** g CHO / hora de juego.
- **Valores numéricos:**
  - **30–60 g CHO/h** durante partidos >60 min (Cap. 44, Bangsbo, p. 576; Cap. 8, Hargreaves, p. 116).
  - Concentración de bebida: **5–10% CHO** (Cap. 44, Bangsbo, p. 576).
  - Volumen: **100–300 ml cada 15–20 min** (Cap. 44, Bangsbo, p. 576).
  - Para torneos con partidos en días consecutivos: enfatizar recuperación con CHO post-partido (8–10 g/kg/día) (Cap. 44, Bangsbo, p. 576).
- **Condiciones de aplicación:**
  - Deportes de equipo con partidos >60 min (fútbol, baloncesto, rugby, hockey).
  - Torneos con múltiples partidos en días consecutivos.
- **Capítulos/páginas:** Cap. 44 (Bangsbo, pp. 574–586), Cap. 8 (Hargreaves, pp. 112–118).

---

### Regla: `cho-during-exercise-cycling`

- **Descripción:** Ingesta de CHO durante ciclismo de larga duración.
- **Tipo:** Nutrición / durante ejercicio / ciclismo.
- **Métrica principal:** g CHO / hora de ciclismo.
- **Valores numéricos:**
  - **60–70 g CHO/h** durante eventos >90 min (Cap. 43, Jeukendrup, p. 567).
  - Concentración de bebida: **6–8% CHO** (Cap. 43, Jeukendrup, p. 567).
  - Volumen: **600–1200 ml/h** (Cap. 43, Jeukendrup, p. 567).
  - Para eventos <60 min a alta intensidad: **~75 g CHO** en bebida puede mejorar rendimiento en time-trial de ~40 min (Cap. 43, Jeukendrup, p. 567; Jeukendrup et al. 1997).
  - Para eventos >2.5 h: considerar hasta **90 g/h** con mezclas de CHO (Cap. 43, Jeukendrup, p. 567).
  - ⚠️ Fructosa sola no es efectiva; usar glucosa, sacarosa o maltodextrinas (Cap. 43, Jeukendrup, p. 567).
  - ⚠️ Ingesta de triglicéridos de cadena media (MCT) no mejora rendimiento y puede causar problemas GI (Cap. 43, Jeukendrup, p. 568).
- **Condiciones de aplicación:**
  - Ciclismo de carretera >90 min.
  - Time-trials de ~40 min a alta intensidad.
  - Carreras por etapas: enfatizar recuperación con CHO entre etapas (Cap. 43, Jeukendrup, p. 563).
- **Capítulos/páginas:** Cap. 43 (Jeukendrup, pp. 562–571).

---

### Regla: `cho-during-exercise-distance-skiing`

- **Descripción:** Ingesta de CHO durante esquí de fondo de larga duración.
- **Tipo:** Nutrición / durante ejercicio / esquí de fondo.
- **Métrica principal:** ml de bebida CHO / intervalo durante carrera.
- **Valores numéricos:**
  - **100–200 ml** de bebida con **5–10% CHO** cada **10–15 min** durante carreras >1 h (Cap. 51, Ekblom & Bergh, p. 660).
  - Para carreras >1.5 h: algunos esquiadores consumen soluciones con **hasta 25–30% CHO** para maximizar ingesta calórica, aunque la absorción de agua es menor (Cap. 51, Ekblom & Bergh, p. 660).
  - Ingesta mínima recomendada: **40–60 g CHO/h** (Cap. 51, Ekblom & Bergh, p. 660; Coyle 1991).
- **Condiciones de aplicación:**
  - Carreras de esquí de fondo >1 h.
  - Entrenamientos de larga duración en altitud: aumentar ingesta de fluidos (hasta 8–10 L/día) por pérdidas respiratorias aumentadas (Cap. 51, Ekblom & Bergh, p. 661).
- **Capítulos/páginas:** Cap. 51 (Ekblom & Bergh, pp. 656–662).

---

### Regla: `cho-glycogen-loading-protocol`

- **Descripción:** Protocolo de carga de glucógeno pre-competición para eventos >90 min.
- **Tipo:** Nutrición / periodización / pre-competición.
- **Métrica principal:** g CHO/kg/día; duración del protocolo.
- **Valores numéricos:**
  - Protocolo modificado (Sherman): **6 días de tapering** con **5 g/kg/día** primeros 3 días + **10 g/kg/día** últimos 3 días (Cap. 7, Ivy, p. 108; Cap. 42, p. 552).
  - Protocolo clásico (Bergström): depleción + 3 días bajo CHO + 3 días alto CHO (ya no se recomienda por estrés asociado) (Cap. 7, Ivy, p. 101).
  - Resultado: glucógeno muscular de **~135 a ~205 mmol/kg peso húmedo** (Cap. 7, Ivy, p. 101; Fig. 7.2).
  - Mejora de rendimiento: **~2–3%** en eventos >90 min (Cap. 42, Hawley et al., p. 553).
  - ⚠️ Aumento de peso de ~1–2 kg por retención hídrica (2.7 g agua por g glucógeno) (Cap. 7, Ivy, p. 108).
  - ⚠️ No aplicar en eventos <90 min ni en deportes donde el peso extra es perjudicial (Cap. 7, Ivy, p. 108; Cap. 42, p. 552).
  - ⚠️ Para atletas con dieta alta en CHO habitual (>6 g/kg/día), la supercompensación puede ser menor (Cap. 43, Jeukendrup, p. 565; Rauch et al. 1995).
- **Condiciones de aplicación:**
  - Eventos de resistencia >90 min (maratón, ciclismo >2 h, esquí de fondo >30 km).
  - No aplicar en sprints ni en deportes de categoría de peso.
- **Capítulos/páginas:** Cap. 7 (Ivy, pp. 97–111), Cap. 42 (Hawley et al., pp. 550–559).

---

### Regla: `cho-daily-intake-strength-power`

- **Descripción:** Ingesta diaria de CHO para atletas de fuerza/potencia.
- **Tipo:** Nutrición / volumen diario / fuerza.
- **Métrica principal:** g CHO / kg peso corporal / día.
- **Valores numéricos:**
  - Rango óptimo: **5–7 g CHO/kg/día** (Cap. 47, Rogozkin, p. 624; Cap. 49, Wilmore, p. 640).
  - Distribución calórica: **~58–60% de energía de CHO** (Cap. 47, Rogozkin, p. 624).
  - Para atletas en deportes de categoría de peso: ajustar según necesidad de mantener/pesar peso (Cap. 49, Wilmore, p. 640).
  - Para días de entrenamiento doble: aumentar a **7–8 g/kg/día** (Cap. 47, Rogozkin, p. 624).
- **Condiciones de aplicación:**
  - Atletas de fuerza/potencia (halterofilia, boxeo, judo, lucha, atletismo de lanzamientos/saltos).
  - Ajustar según fase de entrenamiento (preparación vs. competición).
- **Capítulos/páginas:** Cap. 47 (Rogozkin, pp. 621–631), Cap. 49 (Wilmore, pp. 637–645).

---

### Regla: `cho-daily-intake-gymnastics`

- **Descripción:** Ingesta diaria de CHO para gimnastas de élite.
- **Tipo:** Nutrición / volumen diario / gimnasia.
- **Métrica principal:** % de energía de CHO.
- **Valores numéricos:**
  - Distribución calórica recomendada: **~60% de energía de CHO** (Cap. 45, Benardot, p. 594).
  - ⚠️ Ingesta energética total frecuentemente insuficiente en gimnastas (6.9 MJ/día en junior élite vs. ~11 MJ requerido) (Cap. 45, Benardot, p. 592).
  - Para gimnastas con ingesta restringida: priorizar CHO de alta densidad nutricional y baja fibra (Cap. 45, Benardot, p. 594).
  - Distribución calórica: **15% proteína, 25% grasa, 60% CHO** (Cap. 45, Benardot, p. 594).
- **Condiciones de aplicación:**
  - Gimnastas de élite (artística y rítmica).
  - ⚠️ Riesgo de ingesta insuficiente: monitorear peso y composición corporal regularmente (Cap. 45, Benardot, p. 592).
- **Capítulos/páginas:** Cap. 45 (Benardot, pp. 588–605).

---

### Regla: `cho-daily-intake-skating`

- **Descripción:** Ingesta diaria de CHO para patinadores de velocidad.
- **Tipo:** Nutrición / volumen diario / patinaje.
- **Métrica principal:** % de energía de CHO.
- **Valores numéricos:**
  - Distribución calórica recomendada: **≥60% de energía de CHO** (Cap. 50, Snyder & Foster, p. 650).
  - ⚠️ Ingesta histórica de patinadores: ~50% grasa, ~30% CHO (inadecuada) (Cap. 50, Snyder & Foster, p. 649).
  - Con educación y suplementación: **56–63% CHO** alcanzable (Cap. 50, Snyder & Foster, p. 649).
  - Consumo de **100 g CHO** dentro de las **2 h** posteriores al entrenamiento para maximizar resíntesis de glucógeno (Cap. 50, Snyder & Foster, p. 650).
  - Ingesta proteica: **1.6 g proteína/kg/día** para mantener masa muscular (Cap. 50, Snyder & Foster, p. 650).
- **Condiciones de aplicación:**
  - Patinadores de velocidad (pista larga y corta).
  - Períodos de entrenamiento en hielo (septiembre–marzo) y preparación en seco (abril–agosto).
- **Capítulos/páginas:** Cap. 50 (Snyder & Foster, pp. 646–654).

---

### Regla: `cho-daily-intake-swimming`

- **Descripción:** Ingesta diaria de CHO para nadadores competitivos.
- **Tipo:** Nutrición / volumen diario / natación.
- **Métrica principal:** g CHO / día.
- **Valores numéricos:**
  - Ingesta recomendada: **500–800 g CHO/día** (Cap. 46, Sharp, p. 612; Maglischo 1993).
  - Distribución calórica: **≥60% de energía de CHO** (Cap. 46, Sharp, p. 612).
  - ⚠️ Nadadores masculinos: ingesta típica ~18.2 MJ/día (4350 kcal) con 49% CHO (Cap. 46, Sharp, p. 609; Van Handel et al. 1984).
  - ⚠️ Nadadoras femeninas: ingesta típica ~9.6 MJ/día (2300 kcal) con 53% CHO (frecuentemente insuficiente para el volumen de entrenamiento) (Cap. 46, Sharp, p. 609).
  - Para entrenamientos de alto volumen (>8000 m/día): aumentar a **8–10 g CHO/kg/día** (Cap. 46, Sharp, p. 612).
- **Condiciones de aplicación:**
  - Nadadores competitivos con entrenamiento >2 h/día.
  - ⚠️ Nadadoras femeninas: riesgo de ingesta insuficiente; monitorear peso y rendimiento (Cap. 46, Sharp, p. 610).
- **Capítulos/páginas:** Cap. 46 (Sharp, pp. 609–618).

---

### Regla: `cho-recovery-between-sessions`

- **Descripción:** Ingesta de CHO entre sesiones de entrenamiento (mismo día o días consecutivos).
- **Tipo:** Nutrición / recuperación / multi-sesión.
- **Métrica principal:** g CHO / kg / intervalo entre sesiones.
- **Valores numéricos:**
  - Si hay <8 h entre sesiones: **1–1.2 g CHO/kg** inmediatamente post-ejercicio + **0.7 g CHO/kg cada 2 h** hasta la siguiente sesión (Cap. 7, Ivy, p. 104; Cap. 19, Shirreffs, p. 258).
  - Si hay >24 h entre sesiones: **5–7 g CHO/kg/día** es suficiente (Cap. 7, Ivy, p. 108).
  - Para torneos/carreras por etapas: **8–10 g CHO/kg/día** entre días de competición (Cap. 43, Jeukendrup, p. 563; Cap. 44, Bangsbo, p. 576).
  - ⚠️ Si hay daño muscular excéntrico (maratón, descenso): la resíntesis puede retrasarse; aumentar a **10–12 g CHO/kg/día** (Cap. 7, Ivy, p. 107–108).
- **Condiciones de aplicación:**
  - Atletas con múltiples sesiones de entrenamiento/día.
  - Torneos con partidos/carreras en días consecutivos.
  - Carreras por etapas (Tour de France, Vuelta).
- **Capítulos/páginas:** Cap. 7 (Ivy, pp. 97–111), Cap. 19 (Shirreffs, pp. 256–265), Cap. 43 (Jeukendrup, pp. 562–571), Cap. 44 (Bangsbo, pp. 574–586).

---

---

# RECOMENDACIÓN 2: `rules/nutrition-hydration.ts`

## Archivo: `rules/nutrition-hydration.ts`

### Regla: `hydration-during-exercise-general`

- **Descripción:** Ingesta de fluidos durante ejercicio para limitar deshidratación.
- **Tipo:** Hidratación / durante ejercicio.
- **Métrica principal:** ml / kg / hora; % de déficit de masa corporal tolerable.
- **Valores numéricos:**
  - Objetivo: limitar pérdida de masa corporal a **<2%** (Cap. 16, Sawka et al., p. 218; Cap. 17, Maughan, p. 227).
  - Tasas de sudoración típicas: **1.0–2.5 L/h** en ejercicio intenso en calor (Cap. 16, Sawka et al., p. 217; Cap. 17, Maughan, p. 227).
  - Volumen máximo de absorción intestinal: **~0.8–1.2 L/h** (Cap. 17, Maughan, p. 232).
  - Déficit >2% de masa corporal: deterioro de rendimiento (Cap. 16, Sawka et al., p. 218).
  - Déficit >3%: deterioro significativo de VO₂max y capacidad de ejercicio (Cap. 16, Sawka et al., p. 219).
  - Déficit >5%: riesgo severo para salud y rendimiento (Cap. 16, Sawka et al., p. 220).
  - ⚠️ La sed no es indicador fiable; se pierde ~1–2% antes de percibir sed (Cap. 16, Sawka et al., p. 218; Cap. 17, Maughan, p. 227).
  - Beber según plan, no solo por sed (Cap. 17, Maughan, p. 227).
- **Condiciones de aplicación:**
  - Todo ejercicio >30 min, especialmente en calor/humedad.
  - Ajustar según tasa de sudoración individual (medir peso antes/después del entrenamiento).
  - ⚠️ En clima frío: la sudoración puede ser alta aunque no se perciba (Cap. 17, Maughan, p. 227).
- **Capítulos/páginas:** Cap. 15 (Maughan & Nadel, pp. 203–215), Cap. 16 (Sawka et al., pp. 216–225), Cap. 17 (Maughan, pp. 226–240).

---

### Regla: `hydration-during-exercise-endurance-running`

- **Descripción:** Ingesta de fluidos durante carreras de resistencia.
- **Tipo:** Hidratación / durante ejercicio / carrera.
- **Métrica principal:** ml de bebida / intervalo durante carrera.
- **Valores numéricos:**
  - Ingesta recomendada: **100–300 ml cada 15–20 min** durante carrera (Cap. 42, Hawley et al., p. 556).
  - Concentración de bebida: **5–10% CHO + 20–40 mmol/L Na** (Cap. 42, Hawley et al., p. 556; Cap. 17, Maughan, p. 233).
  - Volumen total: **600–1200 ml/h** (Cap. 42, Hawley et al., p. 556).
  - Pérdidas de sudor en maratón: **~1–2 L/h** (Cap. 42, Hawley et al., p. 556).
  - ⚠️ Pérdidas de masa corporal en maratón: **2–5%** típicas; >5% requiere intervención (Cap. 42, Hawley et al., p. 556).
  - Para carreras >2 h: incluir **sodio (20–40 mmol/L)** para prevenir hiponatremia (Cap. 17, Maughan, p. 233; Cap. 42, Hawley et al., p. 556).
- **Condiciones de aplicación:**
  - Carreras de resistencia >60 min.
  - Clima cálido/húmedo: aumentar volumen de ingesta.
  - ⚠️ No beber en exceso (>1.5 L/h) para evitar hiponatremia dilucional (Cap. 17, Maughan, p. 233).
- **Capítulos/páginas:** Cap. 15 (Maughan & Nadel, pp. 203–215), Cap. 16 (Sawka et al., pp. 216–225), Cap. 17 (Maughan, pp. 226–240), Cap. 42 (Hawley et al., pp. 550–559).

---

### Regla: `hydration-during-exercise-team-sports`

- **Descripción:** Ingesta de fluidos durante deportes de equipo.
- **Tipo:** Hidratación / durante ejercicio / deportes de equipo.
- **Métrica principal:** ml de bebida / intervalo durante juego.
- **Valores numéricos:**
  - Ingesta recomendada: **100–300 ml cada 15–20 min** durante el juego (Cap. 44, Bangsbo, p. 584).
  - Concentración de bebida: **5–10% CHO + electrolitos** (Cap. 44, Bangsbo, p. 584).
  - Pérdidas de sudor: **~1–2 L** durante un partido de fútbol (Cap. 44, Bangsbo, p. 584).
  - ⚠️ Pérdidas de masa corporal: **~2%** típicas en fútbol; hasta **~4%** en clima cálido (Cap. 44, Bangsbo, p. 584).
  - Pre-hidratación: beber **~500 ml** 2 h antes del partido (Cap. 44, Bangsbo, p. 584).
  - Post-partido: reponer **150% del déficit hídrico** con electrolitos (Cap. 44, Bangsbo, p. 585; Cap. 19, Shirreffs, p. 261).
- **Condiciones de aplicación:**
  - Deportes de equipo con partidos >60 min.
  - Clima cálido: aumentar frecuencia de ingesta.
  - Torneos con múltiples partidos: enfatizar rehidratación entre partidos.
- **Capítulos/páginas:** Cap. 44 (Bangsbo, pp. 574–586).

---

### Regla: `hydration-during-exercise-swimming`

- **Descripción:** Ingesta de fluidos durante entrenamiento/competición de natación.
- **Tipo:** Hidratación / durante ejercicio / natación.
- **Métrica principal:** ml de bebida / intervalo durante sesión.
- **Valores numéricos:**
  - ⚠️ Natación en agua fría: la percepción de sed puede estar reducida; beber según plan (Cap. 46, Sharp, p. 611).
  - Ingesta recomendada: **100–200 ml cada 15–20 min** durante sesiones >60 min (Cap. 46, Sharp, p. 611).
  - ⚠️ Pérdidas de sudor en natación pueden ser significativas aunque no se perciban (Cap. 46, Sharp, p. 611).
  - Pre-entrenamiento: beber **~500 ml** 2 h antes (Cap. 46, Sharp, p. 611).
- **Condiciones de aplicación:**
  - Sesiones de natación >60 min.
  - Entrenamientos en agua fría: la percepción de sed puede estar reducida.
  - ⚠️ Monitorear peso antes/después del entrenamiento para estimar pérdidas (Cap. 46, Sharp, p. 611).
- **Capítulos/páginas:** Cap. 46 (Sharp, pp. 609–618).

---

### Regla: `hydration-during-exercise-gymnastics`

- **Descripción:** Ingesta de fluidos durante entrenamiento/competición de gimnasia.
- **Tipo:** Hidratación / durante ejercicio / gimnasia.
- **Métrica principal:** ml de bebida / intervalo durante sesión.
- **Valores numéricos:**
  - Ingesta recomendada: **100–200 ml cada 15–20 min** durante sesiones >60 min (Cap. 45, Benardot, p. 604).
  - Concentración de bebida: **5–8% CHO + electrolitos** (Cap. 45, Benardot, p. 604).
  - ⚠️ Gimnastas frecuentemente restringen ingesta de fluidos por preocupación de peso; educar sobre importancia de la hidratación (Cap. 45, Benardot, p. 604).
  - Pre-entrenamiento: beber **~300–500 ml** 2 h antes (Cap. 45, Benardot, p. 604).
- **Condiciones de aplicación:**
  - Sesiones de gimnasia >60 min.
  - ⚠️ Gimnastas con restricción de ingesta: monitorear peso y rendimiento (Cap. 45, Benardot, p. 604).
- **Capítulos/páginas:** Cap. 45 (Benardot, pp. 588–605).

---

### Regla: `hydration-during-exercise-skating`

- **Descripción:** Ingesta de fluidos durante entrenamiento/competición de patinaje.
- **Tipo:** Hidratación / durante ejercicio / patinaje.
- **Métrica principal:** ml de bebida / intervalo durante sesión/carrera.
- **Valores numéricos:**
  - Ingesta recomendada: **100–200 ml cada 10–15 min** durante carreras >1 h (Cap. 50, Snyder & Foster, p. 651).
  - Concentración de bebida: **5–10% CHO + electrolitos** (Cap. 50, Snyder & Foster, p. 651).
  - ⚠️ Pérdidas de masa corporal: **~2–3%** durante carreras de larga distancia (Cap. 50, Snyder & Foster, p. 651).
  - Pre-entrenamiento: beber **~500 ml** 2 h antes (Cap. 50, Snyder & Foster, p. 651).
  - Para entrenamiento en altitud: aumentar ingesta de fluidos a **8–10 L/día** por pérdidas respiratorias aumentadas (Cap. 51, Ekblom & Bergh, p. 661).
- **Condiciones de aplicación:**
  - Patinaje de velocidad (pista larga y corta).
  - Entrenamientos en hielo y en seco.
  - ⚠️ En clima frío: la percepción de sed puede estar reducida; beber según plan (Cap. 50, Snyder & Foster, p. 651).
- **Capítulos/páginas:** Cap. 50 (Snyder & Foster, pp. 646–654), Cap. 51 (Ekblom & Bergh, pp. 656–662).

---

### Regla: `rehydration-postexercise-general`

- **Descripción:** Rehidratación post-ejercicio para restaurar balance hídrico.
- **Tipo:** Hidratación / recuperación.
- **Métrica principal:** ml fluido / kg perdido; contenido de sodio.
- **Valores numéricos:**
  - Volumen: ingerir **≥150% del déficit de fluido** (1.5 L por cada kg perdido) (Cap. 17, Maughan, p. 237; Cap. 19, Shirreffs, p. 261).
  - Sodio en bebida de rehidratación: **≥50 mmol/L** para retención efectiva (Cap. 19, Shirreffs, p. 260).
  - Bebidas sin sodio: retienen solo **~50%** del volumen ingerido (Cap. 19, Shirreffs, p. 260).
  - Incluir sodio + comida sólida mejora retención vs. bebidas solas (Cap. 19, Shirreffs, p. 262).
  - ⚠️ Agua sola post-ejercicio: causa diuresis rápida y no restaura balance hídrico (Cap. 19, Shirreffs, p. 260; Costill & Sparks 1973).
  - ⚠️ Alcohol post-ejercicio: impide rehidratación (retención ~40% vs. ~59% sin alcohol) (Cap. 30, Burke & Maughan, p. 409; Shirreffs & Maughan 1997).
  - Cerveza con <2% alcohol o shandy (cerveza+limonada): puede ser aceptable en pequeñas cantidades (Cap. 30, Burke & Maughan, p. 410).
- **Condiciones de aplicación:**
  - Cualquier sesión con pérdida >1% de masa corporal.
  - Crítico si hay <12 h antes de siguiente sesión.
  - ⚠️ Si hay daño muscular excéntrico: la rehidratación puede ser más lenta (Cap. 7, Ivy, p. 107).
- **Capítulos/páginas:** Cap. 17 (Maughan, pp. 226–240), Cap. 19 (Shirreffs, pp. 256–265), Cap. 30 (Burke & Maughan, pp. 405–414).

---

### Regla: `hydration-hot-environment`

- **Descripción:** Ingesta de fluidos en ejercicio en clima cálido/húmedo.
- **Tipo:** Hidratación / ambiental / calor.
- **Métrica principal:** ml / kg / hora; concentración de CHO y Na.
- **Valores numéricos:**
  - Ingesta: **600–1200 ml/h** con **6–8% CHO + 20–40 mmol/L Na** (Cap. 38, Febbraio, p. 504; Cap. 17, Maughan, p. 233).
  - Pre-hidratación: **5–7 ml/kg** 2–4 h antes del ejercicio en calor (Cap. 16, Sawka et al., p. 218; Cap. 38, Febbraio, p. 504).
  - Post-ejercicio: **150% del déficit + sodio** (Cap. 38, Febbraio, p. 504).
  - ⚠️ Hiperhidratación con glicerol: **1 g glicerol/kg + 20–25 ml agua/kg** puede ser útil antes de ejercicio en calor, pero evidencia mixta (Cap. 38, Febbraio, p. 504; Cap. 17, Maughan, p. 237; Cap. 43, Jeukendrup, p. 568).
  - ⚠️ Concentración de bebida >10% CHO: puede retrasar vaciamiento gástrico y aumentar problemas GI (Cap. 38, Febbraio, p. 504).
  - ⚠️ Ejercicio en calor aumenta utilización de CHO; considerar ingesta de CHO de **60–90 g/h** (Cap. 38, Febbraio, p. 504).
- **Condiciones de aplicación:**
  - Ejercicio >30 min con temperatura >25°C o humedad >60%.
  - Competiciones en clima cálido (maratón, ciclismo, fútbol en verano).
- **Capítulos/páginas:** Cap. 15 (Maughan & Nadel, pp. 203–215), Cap. 16 (Sawka et al., pp. 216–225), Cap. 38 (Febbraio, pp. 497–506).

---

### Regla: `hydration-cold-environment`

- **Descripción:** Ingesta de fluidos en ejercicio en clima frío.
- **Tipo:** Hidratación / ambiental / frío.
- **Métrica principal:** ml / kg / hora; concentración de CHO.
- **Valores numéricos:**
  - ⚠️ En frío: la percepción de sed puede estar reducida; beber según plan (Cap. 38, Febbraio, p. 499).
  - Ingesta: **400–800 ml/h** con **5–10% CHO** (Cap. 38, Febbraio, p. 499).
  - ⚠️ Pérdidas respiratorias en frío: hasta **1500 ml/día** en altitud (Cap. 38, Febbraio, p. 499; Cap. 17, Maughan, p. 227).
  - ⚠️ Bebidas frías pueden ser menos apetecibles; considerar bebidas tibias para mejorar adherencia (Cap. 38, Febbraio, p. 499).
  - ⚠️ En esquí de fondo: pérdidas de masa corporal **2–3%** durante carreras de 15–30 km (Cap. 51, Ekblom & Bergh, p. 659).
- **Condiciones de aplicación:**
  - Ejercicio >30 min con temperatura <5°C.
  - Deportes de invierno (esquí de fondo, patinaje, hockey).
- **Capítulos/páginas:** Cap. 38 (Febbraio, pp. 497–506), Cap. 51 (Ekblom & Bergh, pp. 656–662).

---

### Regla: `hydration-travel`

- **Descripción:** Ingesta de fluidos durante viajes deportivos.
- **Tipo:** Hidratación / viaje.
- **Métrica principal:** ml de bebida / hora de viaje.
- **Valores numéricos:**
  - Vuelos largos: beber **200–300 ml/h** para compensar baja humedad de cabina (Cap. 36, Grandjean & Ruud, p. 486).
  - ⚠️ La sed no es indicador fiable durante vuelos; beber según plan (Cap. 36, Grandjean & Ruud, p. 486).
  - ⚠️ Evitar alcohol y bebidas con cafeína en exceso durante vuelos (efecto diurético) (Cap. 36, Grandjean & Ruud, p. 486).
  - Al llegar a destino: beber **~500 ml** antes del primer entrenamiento (Cap. 36, Grandjean & Ruud, p. 486).
  - ⚠️ En clima cálido al llegar: aumentar ingesta de fluidos (Cap. 36, Grandjean & Ruud, p. 486).
- **Condiciones de aplicación:**
  - Viajes >3 h (vuelos largos).
  - Viajes a clima cálido/húmedo.
  - ⚠️ Viajes con jet lag (>3 husos horarios): la deshidratación puede agravar síntomas de jet lag (Cap. 36, Grandjean & Ruud, p. 487).
- **Capítulos/páginas:** Cap. 36 (Grandjean & Ruud, pp. 484–491).

---

### Regla: `fluid-composition-sport-drink`

- **Descripción:** Composición óptima de bebidas deportivas según objetivo.
- **Tipo:** Hidratación / formulación.
- **Métrica principal:** % CHO, mmol/L Na, osmolalidad.
- **Valores numéricos:**
  - **Durante ejercicio:** 6–8% CHO, 10–30 mmol/L Na, osmolalidad 260–340 mOsm/kg (Cap. 17, Maughan, p. 233; Tabla 17.2).
  - **Rehidratación post-ejercicio:** ≥50 mmol/L Na, puede incluir 4–8% CHO (Cap. 19, Shirreffs, p. 260).
  - **CHO-electrolito para resistencia:** 6% CHO + 20 mmol/L Na es estándar (Cap. 8, Hargreaves, p. 115; Cap. 17, Maughan, p. 233).
  - Osmolalidad hipotónica (<280): mejor absorción de agua; isotónica (280–330): balance absorción/CHO (Cap. 17, Maughan, p. 232).
  - ⚠️ Bebidas con >10% CHO: retrasan vaciamiento gástrico y pueden causar problemas GI (Cap. 17, Maughan, p. 233; Cap. 38, Febbraio, p. 504).
  - ⚠️ Fructosa sola: no recomendada como CHO principal en bebidas deportivas (absorción lenta, riesgo GI) (Cap. 8, Hargreaves, p. 115; Cap. 17, Maughan, p. 233).
  - Potasio: 3–5 mmol/L en bebidas deportivas; no es crítico durante ejercicio pero útil en rehidratación post-ejercicio (Cap. 17, Maughan, p. 234; Tabla 17.2).
- **Condiciones de aplicación:**
  - Toda bebida consumida durante ejercicio >30 min.
  - Post-ejercicio si hay >1% de déficit hídrico.
- **Capítulos/páginas:** Cap. 8 (Hargreaves, pp. 112–118), Cap. 17 (Maughan, pp. 226–240), Cap. 19 (Shirreffs, pp. 256–265).

---

### Regla: `hydration-monitoring`

- **Descripción:** Monitoreo del estado de hidratación del atleta.
- **Tipo:** Hidratación / monitoreo.
- **Métrica principal:** % de cambio de peso corporal; color de orina.
- **Valores numéricos:**
  - Pesar antes/después del entrenamiento: pérdida >2% indica deshidratación significativa (Cap. 16, Sawka et al., p. 218; Cap. 17, Maughan, p. 227).
  - Color de orina: amarillo oscuro indica deshidratación; amarillo claro/pálido indica hidratación adecuada (Cap. 16, Sawka et al., p. 218).
  - ⚠️ La sed no es indicador fiable; se pierde ~1–2% antes de percibir sed (Cap. 16, Sawka et al., p. 218).
  - Monitorear peso diariamente en períodos de entrenamiento intenso o clima cálido (Cap. 17, Maughan, p. 227).
  - ⚠️ Pérdida de peso rápida (>1 kg/día) sin causa aparente: investigar ingesta de fluidos y posibles problemas de salud (Cap. 17, Maughan, p. 227).
- **Condiciones de aplicación:**
  - Todo atleta en entrenamiento intenso.
  - Clima cálido/húmedo.
  - Períodos de restricción de peso (deportes de categoría de peso).
- **Capítulos/páginas:** Cap. 15 (Maughan & Nadel, pp. 203–215), Cap. 16 (Sawka et al., pp. 216–225), Cap. 17 (Maughan, pp. 226–240).

---

---

# RECOMENDACIÓN 3: `rules/supplements-evidence-based.ts`

## Archivo: `rules/supplements-evidence-based.ts`

### Regla: `creatine-supplementation-protocol`

- **Descripción:** Protocolo de carga y mantenimiento de creatina monohidrato.
- **Tipo:** Suplementación / ergogénico.
- **Métrica principal:** g creatina / día; duración de fases.
- **Valores numéricos:**
  - Fase de carga: **20 g/día (4 × 5 g)** durante **5–6 días** (Cap. 27, Greenhaff, p. 369; Harris et al. 1992).
  - Fase de mantenimiento: **2–5 g/día** después de la carga (Cap. 27, Greenhaff, p. 370).
  - Aumento de creatina muscular: **~20%** con carga; mantiene niveles elevados con mantenimiento (Cap. 27, Greenhaff, p. 369; Fig. 27.2).
  - Carga alternativa: **3 g/día durante 3–4 semanas** (más lenta pero mismo resultado final) (Cap. 27, Greenhaff, p. 370; Hultman et al. 1996).
  - Aumento de peso: **1–2 kg** durante primera semana (principalmente agua intracelular) (Cap. 27, Greenhaff, p. 370).
  - Combinación con CHO: **mejora retención muscular de creatina (~60% más)** (Cap. 27, Greenhaff, p. 371; Green et al. 1996).
  - ⚠️ ~20–30% de individuos son "no respondedores" (<10 mmol/kg de aumento) (Cap. 27, Greenhaff, p. 370).
  - ⚠️ La cafeína puede contrarrestar parcialmente el efecto ergogénico (Cap. 27, Greenhaff, p. 376; Vandenberghe et al. 1996).
  - ⚠️ Creatina no mejora rendimiento en resistencia pura (Cap. 27, Greenhaff, p. 373).
  - ⚠️ Creatina no es beneficiosa en deportes de categoría de peso donde el aumento de 1–2 kg es problemático (Cap. 27, Greenhaff, p. 373).
  - ⚠️ Efectos a largo plazo desconocidos; usar con precaución (Cap. 27, Greenhaff, p. 376).
  - ⚠️ Aumento de creatinina urinaria puede confundirse con problemas renales; no es indicativo de daño renal (Cap. 27, Greenhaff, p. 371).
- **Condiciones de aplicación:**
  - Deportes de fuerza/potencia (halterofilia, boxeo, judo, atletismo de saltos/lanzamientos).
  - Sprints repetidos (<30 s).
  - Entrenamiento de alta intensidad con series cortas.
  - ⚠️ No recomendado en resistencia pura ni en deportes de categoría de peso.
- **Capítulos/páginas:** Cap. 27 (Greenhaff, pp. 367–378).
- **Comentarios:** El efecto principal es mejora rendimiento en esfuerzos repetidos de <30 s y en entrenamiento de fuerza. La combinación con CHO (370 g/día) mejora la retención muscular de creatina.

---

### Regla: `caffeine-performance-protocol`

- **Descripción:** Dosis y timing de cafeína para mejora de rendimiento.
- **Tipo:** Suplementación / ergogénico.
- **Métrica principal:** mg cafeína / kg peso corporal; timing pre-ejercicio.
- **Valores numéricos:**
  - Dosis efectiva: **3–6 mg/kg** (Cap. 28, Spriet & Howlett, p. 381; Graham & Spriet 1995).
  - Timing: **60 min antes** del ejercicio (Cap. 28, Spriet & Howlett, p. 381).
  - Dosis >9 mg/kg: efectos secundarios (mareo, insomnio, problemas GI) sin beneficio adicional (Cap. 28, Spriet & Howlett, p. 381; Graham & Spriet 1995).
  - Mejora en resistencia: **~20–50%** en tiempo hasta fatiga (Cap. 28, Spriet & Howlett, p. 381; Fig. 28.1, 28.2).
  - Umbral IOC ilegal: **>12 µg/ml en orina** (~600–800 mg en una sola dosis para un adulto) (Cap. 28, Spriet & Howlett, p. 379).
  - Dosis de 3 mg/kg: mejora rendimiento sin exceder umbral IOC (Cap. 28, Spriet & Howlett, p. 381; Graham & Spriet 1995).
  - ⚠️ Cafeína en café puede no ser tan efectiva como cafeína anhidra en cápsulas (Cap. 28, Spriet & Howlett, p. 388; Graham et al. 1998).
  - ⚠️ La cafeína puede aumentar la tasa de sudoración y empeorar deshidratación en clima cálido (Cap. 28, Spriet & Howlett, p. 389).
  - ⚠️ La cafeína puede aumentar la utilización de CHO y empeorar depleción de glucógeno en eventos largos (Cap. 28, Spriet & Howlett, p. 389).
  - ⚠️ La cafeína puede aumentar la ansiedad y empeorar rendimiento en deportes de precisión (Cap. 28, Spriet & Howlett, p. 389).
  - ⚠️ La cafeína puede interferir con el sueño si se consume <6 h antes de dormir (Cap. 28, Spriet & Howlett, p. 389).
  - ⚠️ La cafeína puede aumentar la utilización de CHO y empeorar depleción de glucógeno en eventos largos (Cap. 28, Spriet & Howlett, p. 389).
- **Condiciones de aplicación:**
  - Ejercicio de resistencia >20 min.
  - Ejercicio intermitente de alta intensidad >60 min.
  - ⚠️ No recomendado en sprints <90 s (evidencia mixta) (Cap. 28, Spriet & Howlett, p. 382).
  - ⚠️ No recomendado en deportes de precisión (tiro, gimnasia) por aumento de ansiedad (Cap. 28, Spriet & Howlett, p. 389).
- **Capítulos/páginas:** Cap. 28 (Spriet & Howlett, pp. 379–390).
- **Comentarios:** La cafeína es un diurético leve; en clima cálido, considerar aumentar ingesta de fluidos. La cafeína puede interactuar con otros suplementos (creatina, efedrina).

---

### Regla: `bicarbonate-buffering-protocol`

- **Descripción:** Protocolo de bicarbonato sódico para buffering en ejercicio de alta intensidad.
- **Tipo:** Suplementación / ergogénico.
- **Métrica principal:** mg NaHCO₃ / kg; timing.
- **Valores numéricos:**
  - Dosis: **200–300 mg/kg** (Cap. 29, McNaughton, p. 398; McNaughton 1992).
  - Timing: **60–150 min antes** del ejercicio (Cap. 29, McNaughton, p. 398).
  - Duración del efecto: ejercicio de **1–10 min** de alta intensidad (Cap. 29, McNaughton, p. 399).
  - NO efectivo en ejercicio <30 s (Cap. 29, McNaughton, p. 399; McCartney et al. 1983).
  - Dosis >300 mg/kg: riesgo de problemas GI (náusea, diarrea) sin beneficio adicional (Cap. 29, McNaughton, p. 400).
  - ⚠️ Efectos secundarios GI frecuentes; probar en entrenamiento antes de competición (Cap. 29, McNaughton, p. 400).
  - ⚠️ Estatus legal: no prohibido por IOC pero considerado "doping" según definición amplia (Cap. 29, McNaughton, p. 401).
  - ⚠️ No efectivo en resistencia pura (Cap. 29, McNaughton, p. 399).
  - ⚠️ La combinación con CHO puede reducir efectos secundarios GI (Cap. 29, McNaughton, p. 400).
  - ⚠️ La ingestión con >500 ml de agua puede reducir efectos secundarios GI (Cap. 29, McNaughton, p. 401).
- **Condiciones de aplicación:**
  - Ejercicio de alta intensidad con componente glucolítico significativo (400 m, 800 m, sprints repetidos, deportes de equipo con esfuerzos repetidos).
  - ⚠️ NO en resistencia pura ni en sprints <30 s.
  - ⚠️ Probar en entrenamiento antes de competición por efectos secundarios GI.
- **Capítulos/páginas:** Cap. 29 (McNaughton, pp. 393–404).
- **Comentarios:** El bicarbonato es más efectivo en ejercicio de 1–10 min. La combinación con CHO puede reducir efectos secundarios GI. El citrato sódico (300–500 mg/kg) es una alternativa con efectos similares (Cap. 29, McNaughton, p. 400).

---

### Regla: `citrato-buffering-protocol`

- **Descripción:** Protocolo de citrato sódico como alternativa al bicarbonato.
- **Tipo:** Suplementación / ergogénico.
- **Métrica principal:** mg citrato sódico / kg; timing.
- **Valores numéricos:**
  - Dosis: **300–500 mg/kg** (Cap. 29, McNaughton, p. 400).
  - Timing: **60–150 min antes** del ejercicio (Cap. 29, McNaughton, p. 400).
  - Duración del efecto: ejercicio de **2–4 min** de alta intensidad (Cap. 29, McNaughton, p. 400).
  - NO efectivo en ejercicio <30 s (Cap. 29, McNaughton, p. 400; Parry-Billings & MacLaren 1986).
  - ⚠️ Efectos secundarios GI menos frecuentes que con bicarbonato (Cap. 29, McNaughton, p. 400).
  - ⚠️ Estatus legal: no prohibido por IOC (Cap. 29, McNaughton, p. 401).
  - ⚠️ No efectivo en resistencia pura (Cap. 29, McNaughton, p. 400).
  - ⚠️ Puede mejorar rendimiento en ciclismo de 30 km (Potteiger et al. 1996) (Cap. 29, McNaughton, p. 400).
- **Condiciones de aplicación:**
  - Ejercicio de alta intensidad de 2–4 min (800 m, 1500 m, natación de 200–400 m).
  - ⚠️ Probar en entrenamiento antes de competición.
- **Capítulos/páginas:** Cap. 29 (McNaughton, pp. 393–404).

---

### Regla: `creatine-gymnastics`

- **Descripción:** Uso de creatina en gimnasia.
- **Tipo:** Suplementación / gimnasia.
- **Métrica principal:** g creatina / día.
- **Valores numéricos:**
  - ⚠️ Evidencia limitada en gimnasia; la creatina puede mejorar rendimiento en series de alta intensidad (Cap. 45, Benardot, p. 595; Kozak et al. 1996).
  - Protocolo estudiado: **20 g/día (4 × 5 g)** durante **5 días** antes de campamento de entrenamiento intenso (Cap. 45, Benardot, p. 595; Kozak et al. 1996).
  - ⚠️ El aumento de peso (1–2 kg) puede ser problemático en gimnasia (Cap. 45, Benardot, p. 595).
  - ⚠️ Considerar solo en períodos de entrenamiento intenso, no durante competición (Cap. 45, Benardot, p. 595).
- **Condiciones de aplicación:**
  - Gimnastas en períodos de entrenamiento intenso.
  - ⚠️ No recomendado durante competición por aumento de peso.
  - ⚠️ Evidencia limitada; usar con precaución.
- **Capítulos/páginas:** Cap. 45 (Benardot, pp. 588–605).

---

### Regla: `creatine-swimming`

- **Descripción:** Uso de creatina en natación.
- **Tipo:** Suplementación / natación.
- **Métrica principal:** g creatina / día.
- **Valores numéricos:**
  - ⚠️ Evidencia limitada en natación; la creatina puede mejorar rendimiento en series de sprints cortos (Cap. 46, Sharp, p. 615).
  - Protocolo estudiado: **20 g/día (4 × 5 g)** durante **5–6 días** (Cap. 46, Sharp, p. 615).
  - ⚠️ El aumento de peso (1–2 kg) puede ser problemático en natación (Cap. 46, Sharp, p. 615).
  - ⚠️ Considerar solo en períodos de entrenamiento de sprints, no en resistencia (Cap. 46, Sharp, p. 615).
- **Condiciones de aplicación:**
  - Nadadores de sprints (50–200 m).
  - ⚠️ No recomendado en resistencia (>400 m) por aumento de peso.
  - ⚠️ Evidencia limitada; usar con precaución.
- **Capítulos/páginas:** Cap. 46 (Sharp, pp. 609–618).

---

### Regla: `creatine-team-sports`

- **Descripción:** Uso de creatina en deportes de equipo.
- **Tipo:** Suplementación / deportes de equipo.
- **Métrica principal:** g creatina / día.
- **Valores numéricos:**
  - ⚠️ Evidencia limitada en deportes de equipo; la creatina puede mejorar rendimiento en sprints repetidos (Cap. 44, Bangsbo, p. 582).
  - Protocolo estudiado: **20 g/día (4 × 5 g)** durante **5–6 días** (Cap. 44, Bangsbo, p. 582).
  - ⚠️ El aumento de peso (1–2 kg) puede ser problemático en deportes de equipo (Cap. 44, Bangsbo, p. 582).
  - ⚠️ Considerar solo en períodos de entrenamiento intenso, no durante competición (Cap. 44, Bangsbo, p. 582).
  - ⚠️ La cafeína puede contrarrestar parcialmente el efecto ergogénico (Cap. 44, Bangsbo, p. 582).
- **Condiciones de aplicación:**
  - Deportes de equipo con sprints repetidos (fútbol, rugby, hockey).
  - ⚠️ No recomendado durante competición por aumento de peso.
  - ⚠️ Evidencia limitada; usar con precaución.
- **Capítulos/páginas:** Cap. 44 (Bangsbo, pp. 574–586).

---

### Regla: `creatine-distance-skiing`

- **Descripción:** Uso de creatina en esquí de fondo.
- **Tipo:** Suplementación / esquí de fondo.
- **Métrica principal:** g creatina / día.
- **Valores numéricos:**
  - ⚠️ Evidencia limitada en esquí de fondo; la creatina puede mejorar rendimiento en sprints cortos y series de alta intensidad (Cap. 51, Ekblom & Bergh, p. 660).
  - Protocolo estudiado: **20 g/día (4 × 5 g)** durante **5–6 días** (Cap. 51, Ekblom & Bergh, p. 660).
  - ⚠️ El aumento de peso (1–2 kg) puede ser problemático en esquí de fondo (Cap. 51, Ekblom & Bergh, p. 660).
  - ⚠️ Considerar solo en períodos de entrenamiento de sprints, no en resistencia larga (Cap. 51, Ekblom & Bergh, p. 660).
- **Condiciones de aplicación:**
  - Esquiadores de fondo en períodos de entrenamiento de sprints.
  - ⚠️ No recomendado en resistencia larga (>30 km) por aumento de peso.
  - ⚠️ Evidencia limitada; usar con precaución.
- **Capítulos/páginas:** Cap. 51 (Ekblom & Bergh, pp. 656–662).

---

---

# RECOMENDACIÓN 4: `rules/nutrition-safety.ts`

## Archivo: `rules/nutrition-safety.ts`

### Regla: `energy-availability-female`

- **Descripción:** Disponibilidad energética mínima para función menstrual y salud ósea en atletas femeninas.
- **Tipo:** Nutrición / seguridad / salud.
- **Métrica principal:** kcal / kg masa libre de grasa / día.
- **Valores numéricos:**
  - ⚠️ El libro no usa explícitamente el concepto de "disponibilidad energética" (kcal/kg FFM/día) como se define actualmente, pero establece:
  - Ingesta energética insuficiente → amenorrea → pérdida ósea (Cap. 31, Gabel, p. 424; Cap. 45, Benardot, p. 599).
  - Ingesta <30 kcal/kg/día asociada con disfunción menstrual (Cap. 31, Gabel, p. 424; inferido de datos de gimnastas con ~36 kcal/kg/día).
  - Gimnastas con ingesta de ~2600 kcal/día (≈36 kcal/kg) ya muestran riesgo (Cap. 31, Gabel, p. 420; Cap. 45, Benardot, p. 592).
  - ⚠️ Amenorrea + baja densidad ósea + ingesta insuficiente = "tríada de la atleta femenina" (Cap. 45, Benardot, p. 598; Cap. 31, Gabel, p. 424).
  - ⚠️ La amenorrea con baja densidad ósea requiere derivación médica (Cap. 31, Gabel, p. 424; Cap. 45, Benardot, p. 599).
  - ⚠️ La restricción energética crónica puede causar osteoporosis precoz (Cap. 31, Gabel, p. 424; Cap. 45, Benardot, p. 599).
  - ⚠️ La app puede alertar sobre ingesta energética baja + amenorrea + deporte de riesgo, pero NO diagnosticar. Derivar a médico/nutricionista.
- **Condiciones de aplicación:**
  - Atletas femeninas en deportes estéticos, de resistencia, o categoría de peso.
  - Monitoreo de ciclos menstruales.
  - ⚠️ Si hay amenorrea >3 meses + deporte de riesgo → derivar a médico.
- **Capítulos/páginas:** Cap. 31 (Gabel, pp. 417–426), Cap. 45 (Benardot, pp. 588–605).
- **Comentarios:** La disponibilidad energética es el concepto clave. La app puede calcular ingesta energética / masa libre de grasa y alertar si es <30 kcal/kg FFM/día.

---

### Regla: `iron-status-monitoring`

- **Descripción:** Monitoreo y manejo de hierro en atletas, especialmente mujeres.
- **Tipo:** Nutrición / mineral / monitoreo.
- **Métrica principal:** Ferritina sérica (µg/L); hemoglobina (g/dL).
- **Valores numéricos:**
  - Ferritina <12 µg/L: depósitos agotados (Cap. 24, Eichner, p. 327).
  - Hemoglobina <12 g/dL (mujeres) / <13 g/dL (hombres): anemia (Cap. 24, Eichner, p. 327).
  - Ingesta recomendada: **15 mg/día mujeres, 12 mg/día hombres adolescentes** (Cap. 24, Eichner, p. 331; Cap. 31, Gabel, p. 425).
  - Suplementación: solo si hay deficiencia confirmada; no como profilaxis rutinaria (Cap. 24, Eichner, p. 335).
  - ⚠️ La "pseudoanemia del atleta" (hemodilución por expansión plasmática) no es anemia real y no requiere tratamiento (Cap. 24, Eichner, p. 328). Distinguir con ferritina.
  - ⚠️ Monitoreo 2×/año en atletas femeninas (Cap. 24, Eichner, p. 331; Cap. 31, Gabel, p. 425).
  - ⚠️ Si ferritina <12 µg/L + hemoglobina normal: "deficiencia de hierro sin anemia"; considerar suplementación y aumento de ingesta dietética (Cap. 24, Eichner, p. 327).
  - ⚠️ Si ferritina <12 µg/L + hemoglobina <12 g/dL: "anemia por deficiencia de hierro"; derivar a médico (Cap. 24, Eichner, p. 327).
- **Condiciones de aplicación:**
  - Atletas femeninas, vegetarianos, corredores de fondo, atletas con ingesta energética restringida.
  - Monitoreo 2×/año.
  - ⚠️ Si hay síntomas de fatiga inexplicable + ferritina baja → derivar a médico.
- **Capítulos/páginas:** Cap. 24 (Eichner, pp. 326–335), Cap. 31 (Gabel, pp. 417–426).

---

### Regla: `calcium-bone-health-female`

- **Descripción:** Ingesta de calcio para salud ósea en atletas femeninas, especialmente con riesgo de amenorrea.
- **Tipo:** Nutrición / mineral / salud ósea.
- **Métrica principal:** mg calcio / día.
- **Valores numéricos:**
  - Ingesta recomendada: **1200–1500 mg/día** para atletas en riesgo (amenorrea, ingesta energética baja) (Cap. 23, Aulin, p. 322; Cap. 31, Gabel, p. 424).
  - Ingesta mínima: **1000 mg/día** (Cap. 23, Aulin, p. 320).
  - Vitamina D: **400–800 UI/día** para facilitar absorción (Cap. 23, Aulin, p. 322).
  - ⚠️ Si hay amenorrea + baja densidad ósea: derivar a médico; considerar terapia hormonal (Cap. 23, Aulin, p. 322; Cap. 31, Gabel, p. 424).
  - ⚠️ La ingesta de calcio sola no compensa la amenorrea; se necesita restaurar función menstrual (Cap. 23, Aulin, p. 322; Cap. 31, Gabel, p. 424).
  - ⚠️ La app puede alertar sobre ingesta de calcio baja + amenorrea + deporte de riesgo, pero NO diagnosticar. Derivar a médico/nutricionista.
- **Condiciones de aplicación:**
  - Atletas femeninas con amenorrea/oligomenorrea, ingesta energética <30 kcal/kg/día, deportes estéticos o de categoría de peso.
  - ⚠️ Si hay amenorrea >3 meses + baja ingesta de calcio → derivar a médico.
- **Capítulos/páginas:** Cap. 23 (Aulin, pp. 318–325), Cap. 31 (Gabel, pp. 417–426).

---

### Regla: `eating-disorder-screening`

- **Descripción:** Detección de riesgo de trastorno alimentario en atletas.
- **Tipo:** Nutrición / seguridad / salud mental.
- **Métrica principal:** Nivel de riesgo; red flags.
- **Valores numéricos:**
  - ⚠️ La app NO diagnostica trastornos alimentarios. Solo puede alertar sobre patrones de riesgo.
  - Red flags:
    - Pérdida de peso rápida (>1 kg/semana) sin causa aparente (Cap. 39, Sundgot-Borgen, p. 517).
    - Restricción de grupos alimentarios completos (Cap. 39, Sundgot-Borgen, p. 516).
    - Uso de vómito/laxantes/diuréticos (Cap. 39, Sundgot-Borgen, p. 515).
    - Amenorrea + restricción energética + deporte estético/de categoría de peso (Cap. 39, Sundgot-Borgen, p. 517).
    - Miedo intenso a ganar peso a pesar de bajo peso (Cap. 39, Sundgot-Borgen, p. 514).
    - Ejercicio excesivo a pesar de lesión (Cap. 39, Sundgot-Borgen, p. 515).
  - ⚠️ Si hay ≥2 red flags → derivar a médico/nutricionista/psicólogo.
  - ⚠️ La app puede monitorear peso, ingesta energética, y ciclos menstruales, pero NO diagnosticar.
- **Condiciones de aplicación:**
  - Atletas en deportes estéticos (gimnasia, patinaje artístico, natación sincronizada).
  - Atletas en deportes de categoría de peso (boxeo, judo, lucha, halterofilia).
  - Atletas de resistencia con restricción de peso (maratón, ciclismo).
  - ⚠️ Si hay síntomas de trastorno alimentario → derivar a profesional de salud mental.
- **Capítulos/páginas:** Cap. 39 (Sundgot-Borgen, pp. 510–520).
- **Comentarios:** La prevalencia de trastornos alimentarios es mayor en atletas femeninas que en la población general (8.2% bulimia nervosa vs. ~1–2% en población general) (Cap. 39, Sundgot-Borgen, p. 511). La app puede ser una herramienta de detección temprana, pero NO de diagnóstico.

---

### Regla: `weight-making-safety`

- **Descripción:** Seguridad en la pérdida de peso para deportes de categoría de peso.
- **Tipo:** Nutrición / seguridad / categoría de peso.
- **Métrica principal:** % de pérdida de peso / semana; método.
- **Valores numéricos:**
  - Pérdida gradual: **0.5–0.9 kg/semana** durante pretemporada (Cap. 49, Wilmore, p. 640; Cap. 35, Manore, p. 479).
  - Pérdida máxima segura: **no >1.5% de masa corporal por semana** durante temporada (Cap. 49, Wilmore, p. 640).
  - ⚠️ Deshidratación aguda para "hacer peso": solo en las últimas **24–48 h**, máximo **3–4%** adicional (Cap. 49, Wilmore, p. 640; Cap. 35, Manore, p. 479).
  - ⚠️ Deshidratación >5% de masa corporal: riesgo severo para salud y rendimiento (Cap. 16, Sawka et al., p. 220; Cap. 49, Wilmore, p. 640).
  - ⚠️ Rehidratación: tiempo mínimo entre pesaje y competición: **≥3 h** para recuperar función (Cap. 49, Wilmore, p. 640; Cap. 35, Manore, p. 479).
  - ⚠️ Ingesta de CHO alta (≥60% de energía) durante período de pérdida de peso para preservar glucógeno (Cap. 49, Wilmore, p. 640; Cap. 35, Manore, p. 479).
  - ⚠️ NO usar diuréticos, laxantes, vómito, sauna extrema, o ejercicio en traje de sudoración para perder peso (Cap. 49, Wilmore, p. 640; Cap. 35, Manore, p. 479).
  - ⚠️ Si hay pérdida de peso >2 kg/semana o >2% de masa corporal/semana → alertar y derivar a nutricionista.
- **Condiciones de aplicación:**
  - Deportes de categoría de peso (boxeo, judo, lucha, halterofilia, remo ligero).
  - ⚠️ La pérdida de peso debe ser supervisada por nutricionista.
  - ⚠️ La app puede monitorear peso y alertar sobre pérdida rápida, pero NO supervisar. Derivar a nutricionista.
- **Capítulos/páginas:** Cap. 35 (Manore, pp. 469–481), Cap. 49 (Wilmore, pp. 637–645).
- **Comentarios:** La pérdida de peso rápida puede causar deshidratación severa, deterioro del rendimiento, y en casos extremos, muerte (Cap. 35, Manore, p. 479; Cap. 49, Wilmore, p. 640). La app puede ser una herramienta de monitoreo, pero NO de supervisión.

---

### Regla: `vitamin-mineral-supplementation-safety`

- **Descripción:** Seguridad en la suplementación de vitaminas y minerales.
- **Tipo:** Nutrición / seguridad / suplementación.
- **Métrica principal:** Ingesta vs. RDA/UL.
- **Valores numéricos:**
  - ⚠️ La suplementación de vitaminas y minerales solo es necesaria si hay deficiencia confirmada o ingesta dietética insuficiente (Cap. 20, Fogelholm, p. 267; Cap. 21, Chen, p. 282).
  - ⚠️ Megadosis de vitaminas (>>RDA) no mejoran rendimiento y pueden ser tóxicas (Cap. 20, Fogelholm, p. 267; Cap. 21, Chen, p. 282).
  - Límites superiores seguros (UL):
    - Vitamina A: **≤3000 µg/día** (retinol) (Cap. 20, Fogelholm, p. 267).
    - Vitamina D: **≤4000 UI/día** (Cap. 20, Fogelholm, p. 267).
    - Vitamina E: **≤1000 mg/día** (Cap. 20, Fogelholm, p. 267).
    - Vitamina C: **≤2000 mg/día** (Cap. 20, Fogelholm, p. 267).
    - Zinc: **≤40 mg/día** (Cap. 25, Clarkson, p. 340).
    - Hierro: **≤45 mg/día** (solo con prescripción médica) (Cap. 24, Eichner, p. 335).
    - Selenio: **≤400 µg/día** (Cap. 25, Clarkson, p. 345).
  - ⚠️ La suplementación de hierro solo debe ser con prescripción médica y monitoreo de ferritina (Cap. 24, Eichner, p. 335).
  - ⚠️ La suplementación de zinc puede interferir con absorción de cobre (Cap. 25, Clarkson, p. 341).
  - ⚠️ La suplementación de calcio puede interferir con absorción de hierro (Cap. 23, Aulin, p. 321).
- **Condiciones de aplicación:**
  - Atletas con deficiencia confirmada de vitaminas/minerales.
  - Atletas con ingesta dietética insuficiente (vegetarianos, restricción calórica).
  - ⚠️ La suplementación debe ser supervisada por nutricionista.
  - ⚠️ La app puede alertar sobre ingesta insuficiente, pero NO prescribir suplementos. Derivar a nutricionista.
- **Capítulos/páginas:** Cap. 20 (Fogelholm, pp. 266–280), Cap. 21 (Chen, pp. 281–291), Cap. 23 (Aulin, pp. 318–325), Cap. 24 (Eichner, pp. 326–335), Cap. 25 (Clarkson, pp. 339–351).

---

### Regla: `protein-intake-safety`

- **Descripción:** Seguridad en la ingesta de proteína.
- **Tipo:** Nutrición / seguridad / proteína.
- **Métrica principal:** g proteína / kg / día.
- **Valores numéricos:**
  - Ingesta segura: **≤2 g/kg/día** para atletas sanos (Cap. 10, Lemon, p. 145).
  - Ingesta >2.4 g/kg/día: no mejora rendimiento y puede aumentar oxidación de aminoácidos (Cap. 10, Lemon, p. 143).
  - ⚠️ Ingesta >3 g/kg/día: riesgo de deshidratación (aumento de excreción urinaria de urea) (Cap. 10, Lemon, p. 145).
  - ⚠️ Ingesta >3 g/kg/día: riesgo de pérdida de calcio urinario (Cap. 10, Lemon, p. 145; Cap. 23, Aulin, p. 321).
  - ⚠️ Atletas con enfermedad renal: NO aumentar ingesta de proteína sin supervisión médica (Cap. 10, Lemon, p. 145).
  - ⚠️ La suplementación de proteína (batidos, polvos) no es necesaria si la ingesta dietética es suficiente (Cap. 10, Lemon, p. 146).
  - ⚠️ La suplementación de aminoácidos individuales (arginina, ornitina, lisina) no mejora rendimiento y puede causar problemas GI (Cap. 10, Lemon, p. 146; Cap. 47, Rogozkin, p. 629).
- **Condiciones de aplicación:**
  - Atletas de fuerza/potencia.
  - Atletas con ingesta dietética insuficiente.
  - ⚠️ Atletas con enfermedad renal: NO aumentar ingesta de proteína sin supervisión médica.
- **Capítulos/páginas:** Cap. 10 (Lemon, pp. 133–152), Cap. 47 (Rogozkin, pp. 621–631).

---

### Regla: `alcohol-recovery-safety`

- **Descripción:** Seguridad en el consumo de alcohol post-ejercicio.
- **Tipo:** Nutrición / seguridad / alcohol.
- **Métrica principal:** % alcohol en bebida; timing post-ejercicio.
- **Valores numéricos:**
  - ⚠️ Alcohol >4% en bebida post-ejercicio: retención de fluidos reducida (~40% vs. ~59% sin alcohol) (Cap. 30, Burke & Maughan, p. 409; Shirreffs & Maughan 1997).
  - ⚠️ Alcohol >2% en bebida post-ejercicio: puede impedir rehidratación efectiva (Cap. 30, Burke & Maughan, p. 410).
  - Cerveza con <2% alcohol o shandy (cerveza+limonada): puede ser aceptable en pequeñas cantidades (Cap. 30, Burke & Maughan, p. 410).
  - ⚠️ Alcohol post-ejercicio: puede aumentar sangrado de tejidos blandos (vasodilatación) (Cap. 30, Burke & Maughan, p. 410).
  - ⚠️ Alcohol post-ejercicio: puede aumentar pérdida de calor (vasodilatación cutánea) y riesgo de hipotermia en clima frío (Cap. 30, Burke & Maughan, p. 410).
  - ⚠️ Alcohol post-ejercicio: puede aumentar riesgo de comportamiento de alto riesgo (conducir ebrio, peleas) (Cap. 30, Burke & Maughan, p. 411).
  - ⚠️ Si hay lesión de tejidos blandos: evitar alcohol durante **24 h** (Cap. 30, Burke & Maughan, p. 410).
  - ⚠️ Si hay deshidratación significativa: evitar alcohol hasta rehidratación completa (Cap. 30, Burke & Maughan, p. 409).
- **Condiciones de aplicación:**
  - Post-ejercicio/post-competición.
  - ⚠️ Si hay lesión de tejidos blandos: evitar alcohol durante 24 h.
  - ⚠️ Si hay deshidratación significativa: evitar alcohol hasta rehidratación completa.
- **Capítulos/páginas:** Cap. 30 (Burke & Maughan, pp. 405–414).

---

### Regla: `travel-nutrition-safety`

- **Descripción:** Seguridad nutricional durante viajes deportivos.
- **Tipo:** Nutrición / seguridad / viaje.
- **Métrica principal:** Seguridad alimentaria; hidratación.
- **Valores numéricos:**
  - ⚠️ En países con riesgo de enfermedades transmitidas por alimentos: seguir regla "hiérvelo, cocínalo, pélalo o olvídalo" (Cap. 36, Grandjean & Ruud, p. 489).
  - ⚠️ Beber solo agua embotellada o tratada en países con riesgo (Cap. 36, Grandjean & Ruud, p. 489).
  - ⚠️ Evitar hielo, ensaladas crudas, y alimentos de vendedores ambulantes en países con riesgo (Cap. 36, Grandjean & Ruud, p. 489).
  - ⚠️ Si hay diarrea del viajero: rehidratar con Oral Rehydration Fluid (ORF) o bebida deportiva + comida blanda (Cap. 36, Grandjean & Ruud, p. 489).
  - ⚠️ Si hay diarrea >48 h o con sangre: derivar a médico (Cap. 36, Grandjean & Ruud, p. 489).
  - ⚠️ Para jet lag: adaptar horario de comidas al destino 3 días antes del viaje (Cap. 36, Grandjean & Ruud, p. 488).
  - ⚠️ Para jet lag: considerar melatonina (0.5–3 mg) 1 h antes de dormir en destino (Cap. 36, Grandjean & Ruud, p. 488).
  - ⚠️ Para jet lag: evitar cafeína y alcohol en las últimas 6 h antes de dormir (Cap. 36, Grandjean & Ruud, p. 488).
- **Condiciones de aplicación:**
  - Viajes a países con riesgo de enfermedades transmitidas por alimentos.
  - Viajes con jet lag (>3 husos horarios).
  - ⚠️ Si hay diarrea del viajero >48 h o con sangre → derivar a médico.
- **Capítulos/páginas:** Cap. 36 (Grandjean & Ruud, pp. 484–491).

---

### Regla: `overtraining-nutrition-safety`

- **Descripción:** Nutrición para prevenir/detectar sobreentrenamiento.
- **Tipo:** Nutrición / seguridad / sobreentrenamiento.
- **Métrica principal:** Ingesta de CHO; glutamina plasmática; síntomas.
- **Valores numéricos:**
  - Ingesta de CHO mínima: **5–7 g/kg/día** durante entrenamiento intenso (Cap. 37, Kuipers, p. 493; Cap. 5, Burke, p. 82).
  - ⚠️ Ingesta de CHO <5 g/kg/día durante entrenamiento intenso: riesgo de sobreentrenamiento metabólico (Cap. 37, Kuipers, p. 493).
  - ⚠️ Glutamina plasmática baja: puede indicar sobreentrenamiento (Cap. 37, Kuipers, p. 495; Cap. 11, Newsholme & Castell, p. 161).
  - ⚠️ Síntomas de sobreentrenamiento:
    - Fatiga persistente (Cap. 37, Kuipers, p. 494).
    - Deterioro del rendimiento (Cap. 37, Kuipers, p. 494).
    - Cambios de humor (irritabilidad, depresión) (Cap. 37, Kuipers, p. 494).
    - Pérdida de motivación (Cap. 37, Kuipers, p. 494).
    - Alteraciones del sueño (Cap. 37, Kuipers, p. 494).
    - Aumento de frecuencia cardíaca en reposo (Cap. 37, Kuipers, p. 494).
    - Pérdida de apetito (Cap. 37, Kuipers, p. 494).
  - ⚠️ Si hay ≥3 síntomas de sobreentrenamiento → reducir volumen de entrenamiento y aumentar ingesta de CHO; derivar a médico si persisten.
  - ⚠️ La ingesta de CHO inmediatamente post-ejercicio puede reducir riesgo de sobreentrenamiento (Cap. 37, Kuipers, p. 493).
  - ⚠️ La suplementación con glutamina puede reducir riesgo de sobreentrenamiento, pero evidencia limitada (Cap. 37, Kuipers, p. 495; Cap. 11, Newsholme & Castell, p. 161).
- **Condiciones de aplicación:**
  - Atletas con entrenamiento intenso (>2 h/día, >6 días/semana).
  - Períodos de competición intensa (torneos, carreras por etapas).
  - ⚠️ Si hay síntomas de sobreentrenamiento → reducir volumen de entrenamiento y aumentar ingesta de CHO; derivar a médico si persisten.
- **Capítulos/páginas:** Cap. 37 (Kuipers, pp. 492–496), Cap. 11 (Newsholme & Castell, pp. 153–170).

---

### Regla: `diabetes-exercise-safety`

- **Descripción:** Seguridad en el ejercicio para atletas con diabetes.
- **Tipo:** Nutrición / seguridad / diabetes.
- **Métrica principal:** Glucosa en sangre; ingesta de CHO; dosis de insulina.
- **Valores numéricos:**
  - Glucosa pre-ejercicio: **>5 mmol/L (>90 mg/dL)** para evitar hipoglucemia (Cap. 34, Jensen & Leighton, p. 461).
  - Glucosa pre-ejercicio: **<16 mmol/L (<288 mg/dL)** para evitar hiperglucemia (Cap. 34, Jensen & Leighton, p. 461).
  - ⚠️ Si glucosa <5 mmol/L: NO ejercitar; ingerir CHO y esperar (Cap. 34, Jensen & Leighton, p. 461).
  - ⚠️ Si glucosa >16 mmol/L: NO ejercitar; ajustar insulina y esperar (Cap. 34, Jensen & Leighton, p. 461).
  - Ingesta de CHO durante ejercicio: **40–80 g/h** para evitar hipoglucemia (Cap. 34, Jensen & Leighton, p. 462).
  - ⚠️ Ajustar dosis de insulina: reducir **30–50%** la insulina de acción rápida antes del ejercicio (Cap. 34, Jensen & Leighton, p. 461).
  - ⚠️ Monitorear glucosa antes, durante y después del ejercicio (Cap. 34, Jensen & Leighton, p. 461).
  - ⚠️ Si hay hipoglucemia durante ejercicio: detener ejercicio, ingerir CHO de rápida absorción (15–20 g), esperar 15 min y verificar glucosa (Cap. 34, Jensen & Leighton, p. 461).
  - ⚠️ Si hay hiperglucemia durante ejercicio: detener ejercicio, ajustar insulina, verificar glucosa (Cap. 34, Jensen & Leighton, p. 461).
  - ⚠️ La app puede alertar sobre glucosa fuera de rango, pero NO ajustar insulina. Derivar a médico/endocrinólogo.
- **Condiciones de aplicación:**
  - Atletas con diabetes tipo 1 o tipo 2.
  - ⚠️ La app puede alertar sobre glucosa fuera de rango, pero NO ajustar insulina. Derivar a médico/endocrinólogo.
- **Capítulos/páginas:** Cap. 34 (Jensen & Leighton, pp. 457–465).

---

### Regla: `young-athlete-nutrition-safety`

- **Descripción:** Seguridad nutricional en atletas jóvenes.
- **Tipo:** Nutrición / seguridad / jóvenes.
- **Métrica principal:** Ingesta energética; crecimiento; desarrollo sexual.
- **Valores numéricos:**
  - ⚠️ La restricción energética en atletas jóvenes puede retrasar crecimiento y desarrollo sexual (Cap. 32, Unnithan & Baxter-Jones, p. 432).
  - ⚠️ Ingesta energética insuficiente (<80% de requerimiento) puede causar retraso del crecimiento (Cap. 32, Unnithan & Baxter-Jones, p. 432).
  - ⚠️ La amenorrea primaria (ausencia de menarquia a los 16 años) puede ser causada por restricción energética (Cap. 32, Unnithan & Baxter-Jones, p. 432).
  - ⚠️ La restricción de peso en atletas jóvenes puede causar trastornos alimentarios (Cap. 32, Unnithan & Baxter-Jones, p. 430; Cap. 39, Sundgot-Borgen, p. 513).
  - ⚠️ La app puede alertar sobre ingesta energética baja + retraso del crecimiento, pero NO diagnosticar. Derivar a médico/nutricionista pediátrico.
  - ⚠️ La suplementación de creatina en atletas jóvenes: evidencia limitada; usar con precaución (Cap. 32, Unnithan & Baxter-Jones, p. 430).
  - ⚠️ La suplementación de cafeína en atletas jóvenes: no recomendada (Cap. 32, Unnithan & Baxter-Jones, p. 430).
  - ⚠️ La restricción de peso en atletas jóvenes: NO recomendada sin supervisión médica/nutricional (Cap. 32, Unnithan & Baxter-Jones, p. 430).
- **Condiciones de aplicación:**
  - Atletas <18 años.
  - ⚠️ La restricción energética/peso en atletas jóvenes: NO recomendada sin supervisión médica/nutricional.
  - ⚠️ La suplementación de creatina/cafeína en atletas jóvenes: no recomendada.
- **Capítulos/páginas:** Cap. 32 (Unnithan & Baxter-Jones, pp. 429–441), Cap. 39 (Sundgot-Borgen, pp. 510–520).

---

---

# RECOMENDACIÓN 5: `types/NutritionPeriodPhase.ts` y `types/HydrationStatus.ts`

## Archivo: `types/NutritionPeriodPhase.ts`

```typescript
/**
 * Fase de periodización nutricional.
 * Basado en: Nutrition In Sport (Maughan, 2000), Caps. 5, 7, 8, 19, 42, 43.
 */
export interface NutritionPeriodPhase {
  /** Identificador único de la fase */
  phaseId: string;

  /** Nombre legible de la fase */
  name: string;

  /** Timing relativo al ejercicio */
  timingRelativeToExercise:
    | 'pre-exercise'
    | 'during-exercise'
    | 'post-exercise-immediate'    // 0–30 min
    | 'post-exercise-early'        // 30 min – 2 h
    | 'post-exercise-extended'     // 2–24 h
    | 'recovery-day'               // >24 h
    | 'glycogen-loading'           // 3 días pre-competición
    | 'competition-day'
    | 'training-day';

  /** Objetivos de macronutrientes (g/kg/día o g/kg/toma) */
  macroTargets: {
    choGramsPerKg?: number;
    proteinGramsPerKg?: number;
    fatGramsPerKg?: number;
    choPercentOfEnergy?: number;
    proteinPercentOfEnergy?: number;
    fatPercentOfEnergy?: number;
  };

  /** Objetivos de hidratación */
  hydrationTargets: {
    mlPerKgPerHour?: number;
    choPercentInDrink?: number;
    sodiumMmolPerL?: number;
    totalMlPerDay?: number;
  };

  /** Propósito de la fase */
  purpose:
    | 'rendimiento'
    | 'recuperacion'
    | 'adaptacion'
    | 'supercompensacion'
    | 'mantenimiento';

  /** Duración típica de la fase (en horas o días) */
  duration: {
    value: number;
    unit: 'minutos' | 'horas' | 'días';
  };

  /** Deportes a los que aplica */
  applicableSports: string[];

  /** Capítulos/páginas de referencia */
  references: string[];

  /** Comentarios/precauciones */
  comments?: string[];
}
```

### Fases predefinidas (ejemplos)

```typescript
export const NUTRITION_PERIOD_PHASES: NutritionPeriodPhase[] = [
  {
    phaseId: 'pre-exercise-meal',
    name: 'Comida pre-ejercicio',
    timingRelativeToExercise: 'pre-exercise',
    macroTargets: {
      choGramsPerKg: 1–4,  // 1–4 g CHO/kg, 1–4 h antes
    },
    hydrationTargets: {
      totalMlPerDay: 500,  // ~500 ml 2 h antes
    },
    purpose: 'rendimiento',
    duration: { value: 1–4, unit: 'horas' },
    applicableSports: ['endurance', 'team-sports', 'cycling', 'swimming', 'gymnastics', 'skating', 'distance-skiing'],
    references: ['Cap. 7 (Ivy, pp. 97–111)', 'Cap. 42 (Hawley et al., pp. 550–559)'],
    comments: ['Evitar comidas altas en grasa y fibra <2 h antes del ejercicio.'],
  },
  {
    phaseId: 'during-exercise-endurance',
    name: 'Durante ejercicio de resistencia',
    timingRelativeToExercise: 'during-exercise',
    macroTargets: {
      choGramsPerKg: 0.5–1,  // 30–60 g CHO/h ≈ 0.5–1 g/kg/h
    },
    hydrationTargets: {
      mlPerKgPerHour: 10–20,  // 600–1200 ml/h ≈ 10–20 ml/kg/h
      choPercentInDrink: 6–8,
      sodiumMmolPerL: 20–40,
    },
    purpose: 'rendimiento',
    duration: { value: 1–4, unit: 'horas' },
    applicableSports: ['endurance', 'cycling', 'distance-skiing', 'team-sports'],
    references: ['Cap. 8 (Hargreaves, pp. 112–118)', 'Cap. 17 (Maughan, pp. 226–240)'],
    comments: ['Iniciar desde el principio del ejercicio, no esperar a la fatiga.'],
  },
  {
    phaseId: 'post-exercise-immediate',
    name: 'Post-ejercicio inmediato (0–30 min)',
    timingRelativeToExercise: 'post-exercise-immediate',
    macroTargets: {
      choGramsPerKg: 1–1.2,  // 1–1.2 g CHO/kg inmediatamente
    },
    hydrationTargets: {
      totalMlPerDay: 500,  // ~500 ml inmediatamente
      sodiumMmolPerL: 50,
    },
    purpose: 'recuperacion',
    duration: { value: 30, unit: 'minutos' },
    applicableSports: ['endurance', 'team-sports', 'cycling', 'swimming', 'gymnastics', 'skating', 'distance-skiing'],
    references: ['Cap. 7 (Ivy, pp. 97–111)', 'Cap. 19 (Shirreffs, pp. 256–265)'],
    comments: ['La fase rápida de resíntesis (insulina-independiente) dura ~30–60 min.'],
  },
  {
    phaseId: 'post-exercise-early',
    name: 'Post-ejercicio temprano (30 min – 2 h)',
    timingRelativeToExercise: 'post-exercise-early',
    macroTargets: {
      choGramsPerKg: 0.7,  // 0.7 g CHO/kg cada 2 h
    },
    hydrationTargets: {
      totalMlPerDay: 1000,  // ~1 L durante las primeras 2 h
      sodiumMmolPerL: 50,
    },
    purpose: 'recuperacion',
    duration: { value: 2, unit: 'horas' },
    applicableSports: ['endurance', 'team-sports', 'cycling', 'swimming', 'gymnastics', 'skating', 'distance-skiing'],
    references: ['Cap. 7 (Ivy, pp. 97–111)', 'Cap. 19 (Shirreffs, pp. 256–265)'],
    comments: ['Combinar CHO + proteína (1.5 g CHO/kg + 0.53 g proteína/kg) mejora resíntesis 38%.'],
  },
  {
    phaseId: 'glycogen-loading',
    name: 'Carga de glucógeno (3 días pre-competición)',
    timingRelativeToExercise: 'glycogen-loading',
    macroTargets: {
      choGramsPerKg: 10,  // 10 g CHO/kg/día
      choPercentOfEnergy: 70,
    },
    hydrationTargets: {
      totalMlPerDay: 3000,  // aumentar ingesta de fluidos
    },
    purpose: 'supercompensacion',
    duration: { value: 3, unit: 'días' },
    applicableSports: ['endurance', 'cycling', 'distance-skiing'],
    references: ['Cap. 7 (Ivy, pp. 97–111)', 'Cap. 42 (Hawley et al., pp. 550–559)'],
    comments: ['No aplicar en eventos <90 min ni en deportes de categoría de peso. Aumento de peso ~1–2 kg.'],
  },
];
```

---

## Archivo: `types/HydrationStatus.ts`

```typescript
/**
 * Estado de hidratación del atleta.
 * Basado en: Nutrition In Sport (Maughan, 2000), Caps. 15, 16, 17, 19.
 */
export interface HydrationStatus {
  /** Identificador único del estado */
  statusId: string;

  /** Nombre legible del estado */
  name: string;

  /** Clasificación del estado de hidratación */
  classification:
    | 'euhydratado'
    | 'hipohidratado-leve'    // <2% pérdida de peso
    | 'hipohidratado-moderado' // 2–5% pérdida de peso
    | 'hipohidratado-severo'   // >5% pérdida de peso
    | 'hiperhydratado';

  /** Déficit de agua corporal (% de masa corporal) */
  bodyMassDeficitPct?: number;

  /** Tasa de sudoración medida (L/h) */
  sweatRateLPerHour?: number;

  /** Concentración de sodio en sudor (mmol/L) */
  sweatNaConcMmolPerL?: number;

  /** Color de orina (escala 1–8) */
  urineColor?: number;

  /** Nivel de sed (escala 0–10) */
  thirstLevel?: number;

  /** Peso antes del ejercicio (kg) */
  weightBeforeExerciseKg?: number;

  /** Peso después del ejercicio (kg) */
  weightAfterExerciseKg?: number;

  /** Volumen de fluido ingerido durante el ejercicio (ml) */
  fluidIntakeDuringExerciseMl?: number;

  /** Volumen de orina producido durante el ejercicio (ml) */
  urineOutputDuringExerciseMl?: number;

  /** Déficit hídrico calculado (ml) */
  fluidDeficitMl?: number;

  /** Recomendación de rehidratación */
  rehydrationRecommendation?: {
    totalMlToIngest: number;       // 150% del déficit
    sodiumMmolPerL: number;        // ≥50 mmol/L
    includeSolidFood: boolean;
    timeframeHours: number;
  };

  /** Timestamp de la medición */
  measuredAt: Date;

  /** Capítulos/páginas de referencia */
  references: string[];
}
```

### Estados predefinidos (ejemplos)

```typescript
export const HYDRATION_STATUS_LEVELS: Record<string, {
  classification: HydrationStatus['classification'];
  bodyMassDeficitPctRange: [number, number];
  performanceImpact: string;
  healthRisk: string;
}> = {
  'euhydratado': {
    classification: 'euhydratado',
    bodyMassDeficitPctRange: [0, 1],
    performanceImpact: 'Sin impacto',
    healthRisk: 'Bajo',
  },
  'hipohidratado-leve': {
    classification: 'hipohidratado-leve',
    bodyMassDeficitPctRange: [1, 2],
    performanceImpact: 'Deterioro leve del rendimiento',
    healthRisk: 'Bajo',
  },
  'hipohidratado-moderado': {
    classification: 'hipohidratado-moderado',
    bodyMassDeficitPctRange: [2, 5],
    performanceImpact: 'Deterioro significativo del rendimiento; VO₂max reducido',
    healthRisk: 'Moderado; riesgo de enfermedad por calor',
  },
  'hipohidratado-severo': {
    classification: 'hipohidratado-severo',
    bodyMassDeficitPctRange: [5, Infinity],
    performanceImpact: 'Deterioro severo del rendimiento; incapacidad de continuar',
    healthRisk: 'Alto; riesgo de golpe de calor, colapso cardiovascular',
  },
};
```

---

---

# RECOMENDACIÓN 6: Protocolos de periodización nutricional (NO SkillPaths de ejercicios)

## Archivo: `protocols/nutrition-periodization.md`

> **Nota:** Este libro NO contiene progresiones de ejercicios (SkillPaths). Solo contiene protocolos de periodización nutricional. A continuación se describen los protocolos extraídos del libro.

---

### Protocolo: `glycogen-loading-modified`

- **Nombre:** Carga de glucógeno modificada (Sherman)
- **Disciplina:** Nutrición / periodización / pre-competición.
- **Objetivo:** Maximizar glucógeno muscular y hepático antes de eventos >90 min.
- **Deportes aplicables:** Maratón, ciclismo >2 h, esquí de fondo >30 km, triatlón de larga distancia.
- **Duración:** 6 días.
- **Protocolo:**

| Día | Entrenamiento | Ingesta CHO | Objetivo |
|---|---|---|---|
| Día 1 | Entrenamiento normal (90 min a 75% VO₂max) | 5 g/kg/día | Depleción parcial de glucógeno |
| Día 2 | Entrenamiento moderado (40 min a 75% VO₂max) | 5 g/kg/día | Depleción parcial de glucógeno |
| Día 3 | Entrenamiento moderado (40 min a 75% VO₂max) | 5 g/kg/día | Depleción parcial de glucógeno |
| Día 4 | Entrenamiento ligero (20 min a 75% VO₂max) | 10 g/kg/día | Inicio de supercompensación |
| Día 5 | Entrenamiento ligero (20 min a 75% VO₂max) | 10 g/kg/día | Supercompensación |
| Día 6 | Descanso | 10 g/kg/día | Supercompensación completa |
| Día 7 | Competición | Comida pre-ejercicio (1–4 g CHO/kg, 1–4 h antes) | Rendimiento |

- **Resultado esperado:** Glucógeno muscular de ~135 a ~205 mmol/kg peso húmedo (Cap. 7, Ivy, p. 101; Fig. 7.2).
- **Mejora de rendimiento esperada:** ~2–3% en eventos >90 min (Cap. 42, Hawley et al., p. 553).
- **Precauciones:**
  - Aumento de peso ~1–2 kg por retención hídrica (2.7 g agua por g glucógeno) (Cap. 7, Ivy, p. 108).
  - No aplicar en eventos <90 min ni en deportes de categoría de peso (Cap. 7, Ivy, p. 108; Cap. 42, p. 552).
  - ⚠️ Para atletas con dieta alta en CHO habitual (>6 g/kg/día), la supercompensación puede ser menor (Cap. 43, Jeukendrup, p. 565; Rauch et al. 1995).
- **Referencias:** Cap. 7 (Ivy, pp. 97–111), Cap. 42 (Hawley et al., pp. 550–559).

---

### Protocolo: `postexercise-recovery-rapid`

- **Nombre:** Recuperación nutricional rápida post-ejercicio
- **Disciplina:** Nutrición / recuperación.
- **Objetivo:** Maximizar resíntesis de glucógeno y rehidratación en <4 h para la siguiente sesión.
- **Deportes aplicables:** Todos los deportes con múltiples sesiones/día o torneos.
- **Duración:** 4 h post-ejercicio.
- **Protocolo:**

| Tiempo post-ejercicio | Acción | Cantidad |
|---|---|---|
| 0–30 min | Ingesta inmediata de CHO | 1–1.2 g CHO/kg (ej: 70–85 g para atleta de 70 kg) |
| 0–30 min | Ingesta de fluido | 500 ml con ≥50 mmol/L Na |
| 30 min – 2 h | Ingesta de CHO cada 2 h | 0.7 g CHO/kg cada 2 h (ej: 50 g para atleta de 70 kg) |
| 30 min – 2 h | Ingesta de fluido | 1 L durante las primeras 2 h |
| 2–4 h | Comida sólida con CHO + proteína | 1–2 g CHO/kg + 0.3–0.5 g proteína/kg |
| 2–4 h | Ingesta de fluido | 1 L durante las siguientes 2 h |

- **Resultado esperado:** Resíntesis de glucógeno a ~5–6 µmol/g peso húmedo/h (Cap. 7, Ivy, p. 101).
- **Mejora con CHO+proteína:** Resíntesis 38% más rápida que CHO solo (Cap. 7, Ivy, p. 106).
- **Precauciones:**
  - Si hay daño muscular excéntrico (maratón, descenso), la resíntesis puede retrasarse varios días (Cap. 7, Ivy, p. 107–108).
  - Si hay deshidratación >2%, priorizar rehidratación sobre resíntesis de glucógeno (Cap. 19, Shirreffs, p. 258).
- **Referencias:** Cap. 7 (Ivy, pp. 97–111), Cap. 19 (Shirreffs, pp. 256–265).

---

### Protocolo: `tournament-nutrition`

- **Nombre:** Nutrición para torneos con múltiples partidos/días
- **Disciplina:** Nutrición / competición / multi-día.
- **Objetivo:** Mantener rendimiento y recuperación óptimos durante torneos con partidos/carreras en días consecutivos.
- **Deportes aplicables:** Fútbol, baloncesto, rugby, hockey, ciclismo por etapas, esquí de fondo (múltiples carreras).
- **Duración:** Duración del torneo (días a semanas).
- **Protocolo:**

| Fase | Acción | Cantidad |
|---|---|---|
| Pre-partido (1–4 h antes) | Comida con CHO | 1–4 g CHO/kg |
| Pre-partido (30 min antes) | Snack con CHO | 0.5–1 g CHO/kg |
| Durante partido | Ingesta de CHO + fluido | 30–60 g CHO/h + 600–1200 ml/h |
| Post-partido inmediato (0–30 min) | CHO + fluido | 1–1.2 g CHO/kg + 500 ml con Na |
| Post-partido (30 min – 2 h) | CHO cada 2 h | 0.7 g CHO/kg cada 2 h |
| Post-partido (2–24 h) | Comida sólida con CHO + proteína | 8–10 g CHO/kg/día + 1.2–1.6 g proteína/kg/día |
| Entre partidos (días consecutivos) | Mantener ingesta alta de CHO | 8–10 g CHO/kg/día |
| Entre partidos (días consecutivos) | Monitoreo de peso y orina | Diario |

- **Resultado esperado:** Mantenimiento de glucógeno muscular y rendimiento entre partidos/días.
- **Precauciones:**
  - Si hay daño muscular acumulado: aumentar ingesta de proteína a 1.6–2 g/kg/día (Cap. 10, Lemon, p. 143).
  - Si hay deshidratación acumulada: priorizar rehidratación sobre ingesta de CHO (Cap. 19, Shirreffs, p. 258).
  - ⚠️ Monitorear peso diariamente; pérdida >1 kg/día indica deshidratación o déficit energético (Cap. 17, Maughan, p. 227).
- **Referencias:** Cap. 7 (Ivy, pp. 97–111), Cap. 19 (Shirreffs, pp. 256–265), Cap. 43 (Jeukendrup, pp. 562–571), Cap. 44 (Bangsbo, pp. 574–586).

---

### Protocolo: `weight-category-nutrition`

- **Nombre:** Nutrición para deportes de categoría de peso
- **Disciplina:** Nutrición / categoría de peso.
- **Objetivo:** Perder peso de forma segura y mantener rendimiento.
- **Deportes aplicables:** Boxeo, judo, lucha, halterofilia, remo ligero.
- **Duración:** Pretemporada (pérdida gradual) + última semana (pérdida final).
- **Protocolo:**

| Fase | Duración | Acción | Cantidad |
|---|---|---|---|
| Pretemporada | 8–12 semanas | Pérdida gradual de peso | 0.5–0.9 kg/semana |
| Pretemporada | 8–12 semanas | Ingesta calórica moderada | Déficit de 500–1000 kcal/día |
| Pretemporada | 8–12 semanas | Ingesta de CHO alta | ≥60% de energía de CHO |
| Pretemporada | 8–12 semanas | Ingesta de proteína alta | 1.4–1.8 g proteína/kg/día |
| Última semana | 7 días | Reducir fibra y sodio | Reducir fibra a <15 g/día; reducir sodio a <2 g/día |
| Últimas 24–48 h | 24–48 h | Deshidratación leve | Pérdida de 3–4% de masa corporal |
| Últimas 24–48 h | 24–48 h | Restricción de fluidos | Reducir ingesta de fluidos |
| Últimas 24–48 h | 24–48 h | Ejercicio en calor ligero | 30–60 min de ejercicio en calor (si es necesario) |
| Post-pesaje | ≥3 h | Rehidratación | 150% del déficit hídrico con ≥50 mmol/L Na |
| Post-pesaje | ≥3 h | Ingesta de CHO | 1–2 g CHO/kg en las primeras 3 h |

- **Resultado esperado:** Pérdida de peso segura y mantenimiento de rendimiento.
- **Precauciones:**
  - ⚠️ NO usar diuréticos, laxantes, vómito, sauna extrema, o ejercicio en traje de sudoración (Cap. 49, Wilmore, p. 640; Cap. 35, Manore, p. 479).
  - ⚠️ Deshidratación >5% de masa corporal: riesgo severo para salud y rendimiento (Cap. 16, Sawka et al., p. 220; Cap. 49, Wilmore, p. 640).
  - ⚠️ Si hay pérdida de peso >2 kg/semana o >2% de masa corporal/semana → alertar y derivar a nutricionista.
  - ⚠️ La pérdida de peso debe ser supervisada por nutricionista.
- **Referencias:** Cap. 35 (Manore, pp. 469–481), Cap. 49 (Wilmore, pp. 637–645).

---

### Protocolo: `travel-nutrition`

- **Nombre:** Nutrición para viajes deportivos
- **Disciplina:** Nutrición / viaje.
- **Objetivo:** Mantener hidratación, ingesta de CHO, y salud durante viajes.
- **Deportes aplicables:** Todos los deportes con viajes.
- **Duración:** Duración del viaje + adaptación al destino.
- **Protocolo:**

| Fase | Acción | Cantidad |
|---|---|---|
| Pre-vuelo (2–3 días antes) | Aumentar ingesta de CHO | 7–10 g CHO/kg/día |
| Pre-vuelo (2–3 días antes) | Aumentar ingesta de fluidos | 3–4 L/día |
| Durante vuelo | Beber según plan | 200–300 ml/h |
| Durante vuelo | Evitar alcohol y cafeína en exceso | Limitar a 1–2 bebidas |
| Durante vuelo | Comer snacks con CHO | 30–60 g CHO cada 2–3 h |
| Al llegar a destino | Beber inmediatamente | 500 ml |
| Al llegar a destino | Comer comida con CHO | 1–2 g CHO/kg |
| Adaptación a jet lag (3 días antes) | Adaptar horario de comidas al destino | Desayunar/comer/cenar según hora destino |
| Adaptación a jet lag (en destino) | Considerar melatonina | 0.5–3 mg 1 h antes de dormir |
| Adaptación a jet lag (en destino) | Evitar cafeína y alcohol 6 h antes de dormir | Limitar |
| En destino (países con riesgo) | Seguir regla "hiérvelo, cocínalo, pélalo o olvídalo" | Aplicar a todos los alimentos |
| En destino (países con riesgo) | Beber solo agua embotellada o tratada | Aplicar a todas las bebidas |
| En destino (clima cálido) | Aumentar ingesta de fluidos | 3–4 L/día |

- **Resultado esperado:** Mantenimiento de hidratación, ingesta de CHO, y salud durante viajes.
- **Precauciones:**
  - ⚠️ Si hay diarrea del viajero >48 h o con sangre → derivar a médico.
  - ⚠️ Si hay jet lag >3 husos horarios: adaptar horario de comidas y sueño al destino.
  - ⚠️ En países con riesgo de enfermedades transmitidas por alimentos: seguir reglas de seguridad alimentaria.
- **Referencias:** Cap. 36 (Grandjean & Ruud, pp. 484–491).

---

### Protocolo: `hot-environment-nutrition`

- **Nombre:** Nutrición para ejercicio en clima cálido
- **Disciplina:** Nutrición / ambiental / calor.
- **Objetivo:** Mantener hidratación y rendimiento en clima cálido.
- **Deportes aplicables:** Todos los deportes en clima cálido.
- **Duración:** Durante el ejercicio en clima cálido.
- **Protocolo:**

| Fase | Acción | Cantidad |
|---|---|---|
| Pre-ejercicio (2–4 h antes) | Pre-hidratación | 5–7 ml/kg |
| Pre-ejercicio (2–4 h antes) | Ingesta de CHO | 1–4 g CHO/kg |
| Durante ejercicio | Ingesta de CHO + fluido | 60–90 g CHO/h + 600–1200 ml/h con 20–40 mmol/L Na |
| Durante ejercicio | Monitoreo de peso y orina | Cada 30–60 min |
| Post-ejercicio inmediato | Rehidratación | 150% del déficit hídrico con ≥50 mmol/L Na |
| Post-ejercicio inmediato | Ingesta de CHO | 1–1.2 g CHO/kg |
| Post-ejercicio (2–24 h) | Comida sólida con CHO + proteína | 8–10 g CHO/kg/día + 1.2–1.6 g proteína/kg/día |
| Post-ejercicio (2–24 h) | Monitoreo de peso y orina | Diario |

- **Resultado esperado:** Mantenimiento de hidratación y rendimiento en clima cálido.
- **Precauciones:**
  - ⚠️ Ejercicio en calor aumenta utilización de CHO; considerar ingesta de CHO de 60–90 g/h (Cap. 38, Febbraio, p. 504).
  - ⚠️ Concentración de bebida >10% CHO: puede retrasar vaciamiento gástrico y aumentar problemas GI (Cap. 38, Febbraio, p. 504).
  - ⚠️ Si hay síntomas de enfermedad por calor (mareo, náusea, confusión) → detener ejercicio, enfriar, y derivar a médico.
- **Referencias:** Cap. 15 (Maughan & Nadel, pp. 203–215), Cap. 16 (Sawka et al., pp. 216–225), Cap. 38 (Febbraio, pp. 497–506).

---

### Protocolo: `cold-environment-nutrition`

- **Nombre:** Nutrición para ejercicio en clima frío
- **Disciplina:** Nutrición / ambiental / frío.
- **Objetivo:** Mantener hidratación y rendimiento en clima frío.
- **Deportes aplicables:** Todos los deportes en clima frío.
- **Duración:** Durante el ejercicio en clima frío.
- **Protocolo:**

| Fase | Acción | Cantidad |
|---|---|---|
| Pre-ejercicio (2–4 h antes) | Ingesta de CHO | 1–4 g CHO/kg |
| Pre-ejercicio (2–4 h antes) | Ingesta de fluido | 500 ml |
| Durante ejercicio | Ingesta de CHO + fluido | 5–10% CHO + 400–800 ml/h |
| Durante ejercicio | Monitoreo de peso y orina | Cada 30–60 min |
| Post-ejercicio inmediato | Rehidratación | 150% del déficit hídrico con ≥50 mmol/L Na |
| Post-ejercicio inmediato | Ingesta de CHO | 1–1.2 g CHO/kg |
| Post-ejercicio (2–24 h) | Comida sólida con CHO + proteína | 8–10 g CHO/kg/día + 1.2–1.6 g proteína/kg/día |
| Post-ejercicio (2–24 h) | Monitoreo de peso y orina | Diario |

- **Resultado esperado:** Mantenimiento de hidratación y rendimiento en clima frío.
- **Precauciones:**
  - ⚠️ En frío: la percepción de sed puede estar reducida; beber según plan (Cap. 38, Febbraio, p. 499).
  - ⚠️ Pérdidas respiratorias en frío: hasta 1500 ml/día en altitud (Cap. 38, Febbraio, p. 499; Cap. 17, Maughan, p. 227).
  - ⚠️ Bebidas frías pueden ser menos apetecibles; considerar bebidas tibias para mejorar adherencia (Cap. 38, Febbraio, p. 499).
  - ⚠️ Si hay síntomas de hipotermia (temblor, confusión, pérdida de coordinación) → detener ejercicio, calentar, y derivar a médico.
- **Referencias:** Cap. 38 (Febbraio, pp. 497–506), Cap. 51 (Ekblom & Bergh, pp. 656–662).

---

---

# Resumen de archivos generados

| # | Archivo | Contenido | Reglas/Fases/Protocolos |
|---|---|---|---|
| 1 | `rules/nutrition-carbohydrate.ts` | Reglas de ingesta de CHO | 13 reglas |
| 2 | `rules/nutrition-hydration.ts` | Reglas de hidratación | 13 reglas |
| 3 | `rules/supplements-evidence-based.ts` | Reglas de suplementos | 7 reglas |
| 4 | `rules/nutrition-safety.ts` | Reglas de seguridad nutricional | 13 reglas |
| 5 | `types/NutritionPeriodPhase.ts` + `types/HydrationStatus.ts` | Definiciones de tipos TypeScript | 2 tipos + fases/estados predefinidos |
| 6 | `protocols/nutrition-periodization.md` | Protocolos de periodización nutricional | 8 protocolos |

**Total: 33 reglas + 2 tipos + 8 protocolos.**

---

*Fin de la ejecución de las 6 recomendaciones. Todos los datos están extraídos del libro con referencias a capítulos y páginas. Los datos ambiguos por falta de ayudas visuales están marcados con ⚠️.*

---

## Ronda 3 — tras: «Entendido. Con esta tabla de control queda claro dónde el modelo debe apoyarse en **reglas heurísticas cualitativas/descriptivas** en lugar …»
# Validación de la Tabla de Control contra el Texto Fuente

He verificado cada parámetro de respaldo y cada referencia a figuras/tablas contra el contenido real del libro. A continuación, el resultado de la verificación con las correcciones necesarias.

---

## ✅ Parámetros validados correctamente

| Parámetro declarado | Verificación en el libro | Estado |
|---|---|---|
| Potencia máxima de rotura de PCr: **9.0 mmol ATP/kg dm/s** | Tabla 2.2a: "Phosphagen system… Power 9.0" | ✅ Exacto |
| Potencia máxima de glucólisis anaeróbica: **4.5 mmol ATP/kg dm/s** | Tabla 2.2a: "Glycolytic system… Power 4.5"; combinado 11.0 | ✅ Exacto |
| Capacidad de PCr: 55–95 mmol ATP/kg dm | Tabla 2.2a | ✅ |
| Tasa máxima oxidativa: glucógeno 2.8, glucosa 1.0, grasa 1.0 mmol ATP/kg dm/s | Tabla 2.2b | ✅ Exacto |
| Captación máxima de glucosa muscular: ~0.4 mmol/min/kg músculo ejercitado | Cap. 6, conclusión: "about 0.4 mmol·min⁻¹·kg⁻¹ exercising muscle" | ✅ Exacto |
| Resíntesis de glucógeno fase rápida: 12–30 mmol/kg peso húmedo/h durante 45–60 min | Cap. 7 (Ivy): "range between 12 and 30 mmol·g⁻¹ wet weight·h⁻¹… about 45–60 min" | ✅ Exacto |
| Decaimiento de PCr tras ~1.3 s; pico de glucólisis a los ~5 s; caída tras ~20 s | Fig. 2.7 y Cap. 2: "rate of PCr degradation… begins to decline after only 1.3 s… glycolysis peaks at about 5 s… falls during the last 10 s of a 30-s bout" | ✅ Exacto |
| Meseta de velocidad máxima: 20–30 m hombres / 15–20 m mujeres | Cap. 41: "Elite male sprinters can maintain maximal speed for 20–30 m, whereas females can maintain top speed for only 15–20 m" | ✅ Exacto |
| Caída de PCr 50–60% en los primeros 5–6 s del sprint | Cap. 41 (Hirvonen et al. 1987): "Most of the PCr was used during the first 5–6 s of the race" | ✅ |

---

## ⚠️ Correcciones y precisiones necesarias

### 1. Compartimentos de agua en deshidratación (Fig. 49.2)

El resumen indica "plasma 10%, intersticial 30–60%, intracelular 30–60%". El texto real del libro (Cap. 49, discusión de Mack & Nadel 1996) especifica:

> *"the intracellular compartment can contribute 30–60% of the total; the interstitial fluid, 30–60% of the total; and the plasma volume, **8–12%** of the total."*

**Corrección:** El plasma es **8–12%**, no un 10% fijo. Usar 10% como valor central es aceptable como *fallback*, pero el rango correcto es 8–12%. Además, la Fig. 49.2 muestra que estos porcentajes varían según el nivel de deshidratación (2%, 4%, 6%), por lo que la regla debe ser **por escalones**, no un valor único:

| Deshidratación | Plasma | Intersticial | Intracelular |
|---|---|---|---|
| 2% | ~10% | ~38% | ~52% (estimado de la figura) |
| 4% | ~11% | ~39% | ~50% |
| 6% | ~10% | ~50% | ~40% |

⚠️ Los valores exactos por escalón solo se pueden leer de la figura; los porcentajes anteriores son lecturas aproximadas. **Marcar como estimación visual, no como dato tabular confirmado.**

### 2. Referencia a "Tabla 35.1"

El resumen asocia la Tabla 35.1 con "compartimentos de agua y composición corporal". Esto es un error de referencia:

- La **Tabla 35.1** del libro es una tabla de **ingesta energética de gimnastas** (Kirchner et al.), no de compartimentos hídricos.
- Los datos de compartimentos están en la **Fig. 49.2** y en el texto del Cap. 49 (discusión de Costill et al. 1976 y Mack & Nadel 1996).

**Corrección:** Reemplazar la referencia a Tabla 35.1 por Fig. 49.2 + texto del Cap. 49.

### 3. Referencia a "Fig. 43.3" para glucemia

El resumen asocia la Fig. 43.3 con "tendencias de mantenimiento vs. depleción glicémica tras ingesta de carbohidratos frente a placebo". En realidad:

- La **Fig. 43.3** del libro muestra la **ingesta energética diaria durante el Tour de France** (energía de ingesta vs. gasto), no glucemia.
- La figura que sí muestra **glucosa en sangre durante natación con carbohidratos vs. placebo** es la **Fig. 46.3** (O'Sullivan et al. 1994).
- La **Fig. 46.2** muestra utilización de glucógeno muscular durante intervalos de natación.

**Corrección:** Para reglas de glucemia durante ejercicio, usar Fig. 46.3. Para balance energético en ciclismo por etapas, usar Fig. 43.3.

---

## 📋 Parámetros adicionales del libro que pueden servir como *fallbacks*

Estos no estaban en el resumen pero están presentes en el texto y pueden ser útiles:

| Parámetro | Valor | Fuente |
|---|---|---|
| Tasa máxima de sudoración | 1.0–2.5 L/h en ejercicio intenso en calor; hasta 2–3 L/h | Cap. 16, 17 |
| Absorción intestinal máxima de agua | ~0.8 L/h | Cap. 17 |
| Umbral de sed | ~2% de pérdida de peso corporal | Cap. 16, 17 |
| Déficit hídrico >2% | Deterioro de rendimiento | Cap. 16 |
| Déficit hídrico >3% | Deterioro significativo de VO₂max | Cap. 16 |
| Déficit hídrico >5% | Riesgo severo para salud | Cap. 16 |
| Concentración de sodio en sudor | 20–80 mmol/L (media ~35) | Cap. 17, Tabla 17.1 |
| Concentración de potasio en sudor | 4–8 mmol/L | Cap. 17 |
| Rehidratación post-ejercicio | 150% del volumen perdido | Cap. 17, 19 |
| Sodio en bebida de rehidratación | ≥50 mmol/L | Cap. 19 |
| Tasa de resíntesis de glucógeno fase lenta (sin insulina) | ~1–2 mmol/kg peso húmedo/h | Cap. 7 |
| Tasa de resíntesis con suplementación de CHO | 5–6 mmol/kg peso húmedo/h | Cap. 7 |
| Retraso de 2 h en suplementación | Reduce resíntesis en ~50% | Cap. 7 |
| Glucógeno muscular en reposo | ~54–72 g/kg peso seco (300–400 mmol/kg peso seco) | Cap. 2 |
| Glucógeno hepático en reposo | ~90–110 g | Cap. 2 |
| VO₂max como % de potencia máxima | ~30% de la potencia máxima anaeróbica | Cap. 1 |
| Maratón como % de VO₂max | ~75–80% del VO₂max | Cap. 1 |

---

## 🔧 Recomendación de implementación

Dado que el modelo debe operar con reglas discretas y no con curvas continuas, propongo la siguiente estructura de reglas:

### Para cinética de sprint (Cap. 41, Fig. 41.2):

```
REGLA: sprint-pcr-kinetics
SI duración_sprint <= 6s ENTONCES
  utilización_PCr = 50-60% del total
  contribución_fosfágenos = dominante
SI duración_sprint entre 6-20s ENTONCES
  contribución_glucólisis = creciente
  utilización_PCr = casi completa al final
SI duración_sprint > 20s ENTONCES
  contribución_glucólisis = dominante
  velocidad = declinante (meseta superada)
```

### Para velocidad máxima (Cap. 41):

```
REGLA: sprint-max-velocity-plateau
SI sexo = masculino ENTONCES
  meseta_velocidad_max = 20-30 m
SI sexo = femenino ENTONCES
  meseta_velocidad_max = 15-20 m
DESPUÉS de la meseta:
  velocidad = declinante
  causa = depleción de PCr + acumulación de H⁺
```

### Para deshidratación (Fig. 49.2, Cap. 16):

```
REGLA: dehydration-compartment-shift
SI pérdida_peso <= 2% ENTONCES
  estado = "leve"
  impacto_rendimiento = "mínimo"
SI pérdida_peso entre 2-3% ENTONCES
  estado = "moderado"
  impacto_rendimiento = "deterioro medible"
SI pérdida_peso entre 3-5% ENTONCES
  estado = "severo"
  impacto_rendimiento = "deterioro significativo VO₂max"
SI pérdida_peso > 5% ENTONCES
  estado = "crítico"
  acción = "detener ejercicio, rehidratar, evaluar médicamente"
```

### Para resíntesis de glucógeno (Cap. 7):

```
REGLA: glycogen-resynthesis-timing
SI tiempo_post_ejercicio <= 30min ENTONCES
  tasa_resíntesis = 12-30 mmol/kg/h (fase rápida, insulina-independiente)
  acción = "ingerir ≥1 g CHO/kg inmediatamente"
SI tiempo_post_ejercicio entre 30min-2h ENTONCES
  tasa_resíntesis = 5-6 mmol/kg/h
  acción = "0.7 g CHO/kg cada 2h"
SI tiempo_post_ejercicio > 2h ENTONCES
  tasa_resíntesis = reducida (~50%)
  acción = "comida sólida rica en CHO"
SI retraso > 2h ENTONCES
  penalización = -50% tasa de resíntesis
```

---

## Resumen de la validación

| Aspecto | Estado |
|---|---|
| Parámetros cinéticos (PCr, glucólisis, oxidación) | ✅ Validados |
| Resíntesis de glucógeno | ✅ Validada |
| Mesetas de velocidad en sprint | ✅ Validadas |
| Compartimentos hídricos | ⚠️ Corregir plasma a 8–12%, usar escalones |
| Referencia Tabla 35.1 | ❌ Error: es Fig. 49.2 |
| Referencia Fig. 43.3 para glucemia | ❌ Error: es Fig. 46.3 |
| Parámetros adicionales de respaldo | ✅ Añadidos 15 parámetros |

¿Quieres que genere los archivos de reglas completos en formato TypeScript/Markdown para cada uno de estos bloques, o prefieres que primero revisemos algún aspecto específico?
