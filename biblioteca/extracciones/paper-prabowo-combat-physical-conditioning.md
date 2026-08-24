> **sourceId:** `paper-prabowo-combat-physical-conditioning`
> **Origen:** Consolidado desde `chat-1787414900440-papers-combate-lote1.md` · Fecha: 2026-08-22

# Documento 2: Physical condition preparation of combat sport athletes for fighting simulation in experimental research — Extracción para Plan Maestro OS

> Extracción parafraseada de un estudio cualitativo basado en entrevistas a 10 entrenadores de cinco deportes de combate. El objetivo del estudio es determinar la preparación física ideal antes de simulaciones de combate usadas como pretest en investigación experimental. No es un manual de programación de fuerza; es una fuente de recomendaciones de preparación, tiempos y seguridad.

---

## 1) Metadatos del libro

- **Título:** Physical condition preparation of combat sport athletes for fighting simulation in experimental research: coach perspective analysis
- **Autor(es):** Trisnar Adi Prabowo (Universitas Muhammadiyah Brebes, Indonesia)
- **Año:** 2025 (Pedagogy of Health, 4(1): 70–80)
- **Disciplina principal:** Preparación física / pedagogía del deporte / seguridad e investigación en deportes de combate.
- **Enfoque poblacional:** Atletas de combate con experiencia (karate, judo, taekwondo, boxeo, pencak silat); perspectiva de entrenadores expertos (45–57 años, ~10.5 años como atletas, ~21.3 años como coaches).
- **Notas de alcance:**
  - Cubre: aspectos técnico-tácticos, componentes físicos, preparación mental, estatus del atleta y tiempo ideal de preparación antes de simulación/pretest.
  - NO cubre: programación detallada de fuerza (series/reps/cargas), nutrición, sueño, protocolos de rehabilitación. Es cualitativo (sin ensayos cuantitativos propios).

---

## 2) Contratos y entidades que afectan

### 2.1 Nuevos tipos o extensiones útiles

- **`SimulationReadinessProfile` (opcional):**
  - Descripción: Perfil de preparación requerida antes de una simulación de combate (pretest experimental o sparring controlado).
  - Campos sugeridos: `sport`, `minimumPrepWeeks`, `sessionsPerWeek`, `requiredExperience`, `injuryFreeStatus`, `mentalPrepIncluded`.
  - Referencias: p. 73–75 (Tabla 3 y secciones por deporte).

- **`AthleteEligibilityCriteria` (opcional):**
  - Descripción: Criterios de elegibilidad del atleta para simulaciones (experiencia, cinturón/nivel, ausencia de lesiones, IMC, experiencia competitiva).
  - Campos sugeridos: `minTrainingYears`, `beltOrLevel`, `competitionExperience`, `injuryHistory`, `bmiRange`.
  - Referencias: p. 73–75 (secciones “Athlete Status”).

- **`PrepComponentPriority` (extensión de focus):**
  - Descripción: Orden de prioridad de componentes físicos para preparación de combate (endurance y speed primero, luego strength y agility).
  - Campos sugeridos: `priorityOrder`, `componentType`.
  - Referencias: p. 75–76 (Discussion).

### 2.2 Mapeo a tipos existentes

- **`FocusId = endurance`:**
  - Tratado como componente prioritario (junto con speed) a desarrollar primero en la preparación.

- **`FocusId = speed`:**
  - Segundo componente prioritario; ligado a capacidad de mantener intensidad.

- **`FocusId = strength`:**
  - Integrado tras endurance/speed; orientado a potencia de golpes/patadas y protección contra lesiones.

- **`FocusId = agility`:**
  - Importante para evasión, cambio de dirección y equilibrio; se combina con balance.

- **`FocusId = mental-skills` (si existe o como extensión):**
  - Relajación, visualización, concentración, confianza y manejo de presión son parte integral de la preparación.

- **`BodyZoneId` general:**
  - No hay zonas específicas de lesión; el foco es prevención general mediante fuerza, técnica y acondicionamiento.

- **`MovementPattern` específicos por deporte:**
  - Karate: kihon, combinaciones de ataque/bloqueo/esquiva.
  - Judo: nage-waza (proyecciones) y ne-waza (suelo).
  - Taekwondo: potencia/precisión de patadas y puños.
  - Boxeo: jab, straight, hook, uppercut; footwork y distancia.
  - Pencak silat: golpes, patadas, tijeras, barridos.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: simulation-prep-min-duration

- Descripción: Tiempo mínimo de preparación física antes de una simulación de combate/pretest.
- Tipo: duración / frecuencia
- Métrica principal: prepWeeks, sessionsPerWeek
- Valores numéricos:
  - Rango recomendado global: mínimo 6 semanas.
  - Frecuencia: 3–5 sesiones por semana.
- Condiciones de aplicación:
  - Antes de simulaciones que imiten combate real (pretest experimental); aplica a atletas con experiencia.
- Capítulos/páginas: p. 74 (Conclusion/Results), Tabla 3 p. 73, Discussion p. 76.
- Comentarios/precauciones:
  - El mínimo de 6 semanas se respalda con estudios previos (judo, karate, pencak silat, boxeo). ⚠️ Cada deporte sugiere rangos ligeramente distintos (ver reglas por deporte).

### Regla: prep-duration-karate

- Descripción: Duración sugerida de preparación en karate.
- Tipo: duración
- Métrica principal: prepWeeks
- Valores numéricos: ~6 semanas.
- Condiciones de aplicación: Atletas con nivel cinturón marrón y ~4 años de experiencia.
- Capítulos/páginas: p. 72–73, Tabla 3 p. 73.

### Regla: prep-duration-judo

- Descripción: Duración sugerida de preparación en judo.
- Tipo: duración
- Métrica principal: prepWeeks, sessionsPerWeek
- Valores numéricos: más de 4 semanas; 3–5 días de entrenamiento por semana.
- Condiciones de aplicación: Atletas sin historial de lesiones crónicas.
- Capítulos/páginas: p. 73–74, Tabla 3 p. 73.

### Regla: prep-duration-taekwondo

- Descripción: Duración sugerida de preparación en taekwondo.
- Tipo: duración
- Métrica principal: prepWeeks, sessionsPerWeek
- Valores numéricos: 6–8 semanas; 3–5 sesiones por semana.
- Condiciones de aplicación: Atletas sanos, sin sobrepeso, con experiencia competitiva regional.
- Capítulos/páginas: p. 74, Tabla 3 p. 73.

### Regla: prep-duration-boxing

- Descripción: Duración sugerida de preparación en boxeo.
- Tipo: duración
- Métrica principal: prepWeeks, sessionsPerWeek
- Valores numéricos: mínimo 6 semanas; 3–5 sesiones por semana.
- Condiciones de aplicación: Boxeadores activos, ≥2 años de entrenamiento, experiencia competitiva, IMC normal.
- Capítulos/páginas: p. 74–75, Tabla 3 p. 73.

### Regla: prep-duration-pencak-silat

- Descripción: Duración sugerida de preparación en pencak silat.
- Tipo: duración
- Métrica principal: prepWeeks
- Valores numéricos: ~8 semanas antes de simulación/pretest.
- Condiciones de aplicación: Atletas activos, sin lesión, sanos física y mentalmente, ~2 años de experiencia.
- Capítulos/páginas: p. 75, Tabla 3 p. 73.

### Regla: prep-component-priority-order (cualitativa)

- Descripción: Orden de prioridad de componentes físicos en la preparación.
- Tipo: progresión / priorización
- Métrica principal: orden de componentes
- Valores numéricos:
  - 1º: endurance y speed.
  - 2º: muscle strength y agility (integrados).
- Condiciones de aplicación:
  - Preparación general de combate; cualitativo (no especifica volúmenes ni intensidades).
- Capítulos/páginas: p. 75–76 (Discussion “Aspects of Physical Components”).
- Comentarios/precauciones:
  - ⚠️ No proporciona rangos numéricos de carga, series ni repeticiones.

### Regla: athlete-eligibility-experienced-only

- Descripción: Para simulaciones experimentales o de alto impacto, usar solo atletas con experiencia competitiva y sin lesiones.
- Tipo: elegibilidad / seguridad
- Métrica principal: criterio binario (eligible/no elegible)
- Valores numéricos:
  - Criterios: años mínimos de entrenamiento (2–4 según deporte), experiencia competitiva, ausencia de lesiones, salud física/mental, IMC normal (en boxeo/taekwondo).
- Condiciones de aplicación:
  - Pretests de investigación y simulaciones que imiten combate real.
- Capítulos/páginas: p. 73–75 (Athlete Status), Discussion p. 76.
- Comentarios/precauciones:
  - Reduce riesgo de lesión y variabilidad de datos; no aplica a población principiante general.

### Regla: mental-training-inclusion

- Descripción: Incluir entrenamiento mental (relajación, visualización, concentración) en la preparación.
- Tipo: estilo de vida / psicológico
- Métrica principal: inclusión (cualitativa)
- Valores numéricos: No cuantificado.
- Condiciones de aplicación:
  - Durante el periodo de preparación previo a simulación.
- Capítulos/páginas: p. 72–75 (Mental Aspect por deporte), Discussion p. 76.
- Comentarios/precauciones:
  - Beneficios reportados: foco, confianza, manejo de ansiedad. No hay dosis numérica.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

- El artículo no define progresiones de habilidades con pasos numerados ni fases formales. Presenta componentes de entrenamiento (drills técnicos, intervalos, fuerza de core, agilidad) pero sin secuencia de dificultad explícita.
- ⚠️ No se recomienda generar SkillPaths desde este documento sin datos adicionales.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

### Componente: Technical drill training

- Cues principales:
  - Dominar técnica básica antes de táctica compleja.
  - Practicar distancia, timing y defensa.
- Errores frecuentes:
  - Saltarse fundamentos; no entrenar bajo presión de combate.
- Variantes seguras y progresiones sugeridas:
  - Modelado con compañero; sparring controlado.
- Páginas: p. 72–75, Discussion p. 75.

### Componente: Interval training

- Cues principales:
  - Alternar alta intensidad y recuperación para mejorar capacidad aeróbica/anaeróbica.
- Errores frecuentes:
  - Progresión inadecuada de intensidad/volumen.
- Páginas: p. 76.

### Componente: Core training

- Cues principales:
  - Usar core training como base de fuerza para combate; puede integrarse en circuito.
- Páginas: p. 76.

### Componente: Agility training

- Cues principales:
  - Combinar agilidad con equilibrio; usar conos y escaleras.
- Errores frecuentes:
  - Entrenar agilidad sin componente de estabilidad.
- Páginas: p. 76.

### Componente: Mental training (relajación/visualización)

- Cues principales:
  - Visualizar el combate y las técnicas; controlar respiración; mantener foco.
  - Shadow practice como forma de visualización.
- Errores frecuentes:
  - Ignorar preparación mental hasta el día del combate.
- Páginas: p. 72–75, 76.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

- El artículo NO ofrece protocolos de rehabilitación. Su enfoque es prevención de lesiones mediante preparación adecuada.
- Elementos preventivos extraíbles:
  - **Condición:** Prevención general de lesiones en simulación.
  - **Zona:** general (no específica)
  - **Recomendación:** Fortalecimiento muscular y de ligamentos mediante fuerza y agilidad; dominio técnico para eficiencia de movimiento; selección de atletas sin lesiones crónicas.
  - **Red flags:** No definidas; se asume que atletas con lesiones crónicas deben excluirse de simulaciones.
  - Referencias: p. 76–77 (Implications for Athlete Health and Safety).

---

## 7) Factores de estilo de vida

- El artículo no aborda sueño ni nutrición de forma específica.
- Menciona manejo de estrés/ansiedad mediante entrenamiento mental (ver sección 3, regla `mental-training-inclusion`).
- No hay reglas sobre entrenamiento en enfermedad.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**
  - Fuente de reglas de duración/frecuencia mínima de preparación antes de simulaciones de combate (6 semanas, 3–5 sesiones/semana).
  - Criterios de elegibilidad de atletas para simulaciones intensas.
  - Orden de prioridad de componentes físicos (endurance/speed primero).
  - Recordatorio de incluir preparación mental.
- **Limitaciones:**
  - Cualitativo, basado en opinión de entrenadores; sin datos cuantitativos de carga/series/reps.
  - No apto para prescribir programación detallada de fuerza.
  - Población: atletas experimentados en contexto experimental; no generalizar a principiantes recreativos.
- **Recomendaciones específicas:**
  - Crear regla `simulation-prep-min-duration` con mínimo 6 semanas y 3–5 sesiones/semana.
  - Añadir checklist de elegibilidad (`injuryFree`, `competitionExperience`, `minYearsTraining`) antes de habilitar simulaciones intensas.
  - Marcar este documento como fuente de orientación, no de programación cuantitativa.

---
---
