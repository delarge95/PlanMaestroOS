> **sourceId:** `paper-helmer-2015-veterans-sexual-health`
> **Origen:** Consolidado desde `chat-1787414884878-papers-salud-sexual-lote1.md` · Fecha: 2026-08-22

# Perspectives on Sexual Health and Function of Recent Male Combat Veterans of Iraq and Afghanistan — Extracción para Plan Maestro OS

> Resumen de extracción: estudio cualitativo con ocho veteranos de combate hombres que reportaron disfunción sexual. Explora percepciones sobre causas, impacto emocional/relacional y soluciones. Para una app de fitness, aporta señales para intake psicosocial, detección de PTSD/depresión/medicación, comunicación con pareja y derivación clínica. No aporta reglas de entrenamiento físico directo.

---

## 1) Metadatos del libro

- **Título:** *Perspectives on Sexual Health and Function of Recent Male Combat Veterans of Iraq and Afghanistan*  
- **Autor(es):** Drew A. Helmer, Gregory Beaulieu, Catherine Powers, Cheryl Houlette, David Latini, Michael Kauth.  
- **Año:** 2015  
- **Disciplina principal:** Salud de veteranos, medicina sexual, investigación cualitativa, salud mental.  
- **Enfoque poblacional:** Hombres veteranos de Irak/Afganistán, heterosexuales, que cribaron positivo para disfunción sexual en clínica post-despliegue.  
- **Notas de alcance:**  
  - Cubre: percepción de disfunción sexual, causas, impacto personal/relacional, soluciones, relación con proveedores sanitarios.  
  - No cubre: programación de fuerza, movilidad, hipertrofia, calistenia, rehabilitación musculoesquelética.  
  - ⚠️ Muestra pequeña y cualitativa; no generalizable a todas las poblaciones.

---

## 2) Contratos y entidades que afecta

### 2.1 Nuevos tipos o extensiones útiles

- `VeteranSexualHealthConcern`  
  - **Descripción:** Registro de preocupaciones sexuales en veteranos, con contexto de despliegue, salud mental y medicación.  
  - **Campos sugeridos:**  
    - `domains: ('desire' | 'erection' | 'orgasm' | 'ejaculation' | 'distraction')[]`  
    - `deploymentRelated?: boolean`  
    - `ptsdScreenPositive?: boolean`  
    - `depressionScreenPositive?: boolean`  
    - `ssriSnriUse?: boolean`  
    - `relationshipImpact?: boolean`  
  - **Referencias:** pp. 138–142.

- `SexualDysfunctionImpactProfile`  
  - **Descripción:** Impacto de la disfunción sexual en identidad, pareja y relación.  
  - **Campos sugeridos:**  
    - `selfImpact: 'shame' | 'loss-of-masculinity' | 'low-confidence' | 'low-priority' | 'other'`  
    - `partnerImpact?: string`  
    - `relationshipImpact?: string`  
  - **Referencias:** pp. 141–142.

- `HelpSeekingRecord`  
  - **Descripción:** Registro de soluciones intentadas y conversaciones con profesionales.  
  - **Campos sugeridos:**  
    - `solutionsTried: string[]`  
    - `providerDiscussion?: boolean`  
    - `preferredApproach?: string`  
    - `medicationConcerns?: string[]`  
  - **Referencias:** pp. 141–143.

### 2.2 Mapeo a tipos existentes

- `FocusId`: `sexual-health`, `mental-health`, `stress`, `lifestyle`, `veteran-health`.  
- `BodyZoneId`: `sexual-health` o `whole-body`; no hay zona musculoesquelética específica.  
- `MovementPattern`: no aplica.

---

## 3) Reglas cuantitativas y protocolos (para TrainingRule)

### Regla: `optional_asex_screening_for_sexual_dysfunction`

- **Descripción breve:** Si la app incluye cribado clínico opcional de salud sexual en veteranos o usuarios con consentimiento, puede usar criterios tipo ASEX como señal de derivación.  
- **Tipo:** screening / derivación.  
- **Métrica principal:** `ASEX total score` y criterios por ítems.  
- **Valores numéricos:**  
  - ASEX total: 5 a 30.  
  - Positivo citado: total >19.  
  - Alternativas: 3 o más ítems con puntuación ≥3; o cualquier ítem ≥5.  
  - ⚠️ En resultados se menciona total >18 en un punto; usar >19 como criterio conservador y marcar inconsistencia.  
- **Condiciones de aplicación:**  
  - Solo si el usuario consiente un cribado de salud.  
  - No obligatorio en app de fitness.  
- **Capítulos/páginas donde se apoya:** Methods p. 138; Results p. 139.  
- **Comentarios/precauciones:**  
  - Si positivo, sugerir evaluación médica/psicológica.  
  - No diagnosticar disfunción sexual.

---

### Regla: `veteran_deployment_sexual_concern_referral`

- **Descripción breve:** En usuarios veteranos con problemas sexuales y antecedentes de despliegue, PTSD, depresión, medicación psiquiátrica o lesiones, activar derivación biopsicosocial.  
- **Tipo:** derivación clínica.  
- **Métrica principal:** `sexualDysfunction + veteranStatus + mentalHealthOrMedicationFlags`.  
- **Valores numéricos:**  
  - No hay rango numérico; regla booleana/cualitativa.  
- **Condiciones de aplicación:**  
  - Veteranos o usuarios con trauma/estrés significativo.  
- **Capítulos/páginas donde se apoya:** pp. 139–143.  
- **Comentarios/precauciones:**  
  - La disfunción puede relacionarse con PTSD, medicación, alcohol, lesiones, estrés o envejecimiento.  
  - No atribuir automáticamente al entrenamiento.

---

### Regla: `ssri_snri_sexual_side_effect_medication_review`

- **Descripción breve:** Si un usuario reporta uso de SSRI/SNRI y disfunción sexual, la app debe sugerir revisión con prescriptor, nunca suspender medicación.  
- **Tipo:** medicación / estilo de vida.  
- **Métrica principal:** `ssriSnriUse + sexualDysfunction`.  
- **Valores numéricos:**  
  - No aplica; regla booleana.  
- **Condiciones de aplicación:**  
  - Usuarios con medicación psiquiátrica y síntomas sexuales.  
- **Capítulos/páginas donde se apoya:** Discussion pp. 143–144.  
- **Comentarios/precauciones:**  
  - No recomendar cambios de dosis ni sustituciones.  
  - Derivar a profesional médico.

---

### Regla: `partner_communication_support`

- **Descripción breve:** La app puede promover comunicación abierta con la pareja cuando la disfunción sexual afecta la relación, pero sin terapia automatizada.  
- **Tipo:** conducta relacional / apoyo.  
- **Métrica principal:** `relationshipImpact + communicationNeed`.  
- **Valores numéricos:**  
  - No hay valores numéricos; cualitativo.  
- **Condiciones de aplicación:**  
  - Usuarios que reportan impacto relacional.  
- **Capítulos/páginas donde se apoya:** pp. 142–143.  
- **Comentarios/precauciones:**  
  - Puede sugerir recursos educativos o terapia de pareja, pero no reemplazar intervención profesional.

---

## 4) Habilidades y progresiones (para SkillPath / SkillStep)

No se identifican progresiones de ejercicio físico.

- **SkillPath:** no aplica.  
- **Objetivo final:** no aplica.  
- **Pasos:** no aplica.

---

## 5) Técnica, cues y fallos comunes (para enriquecer SkillStep)

No hay cues técnicos de movimiento.

- **Ejercicio / familia:** no aplica.  
- **Cues:** no aplica.

---

## 6) Rehabilitación, prehabilitación y manejo del dolor

### Lesión / condición: Disfunción sexual en veteranos de combate recientes

- **Zona:** `sexual-health`, `mental-health`, `whole-body`.  
- **Etiología resumida:**  
  - Multifactorial: lesiones, PTSD, depresión, medicación psiquiátrica, alcohol, estrés, envejecimiento, experiencias de despliegue y factores relacionales.  
- **Signos y síntomas clave:**  
  - Falta de deseo.  
  - Dificultad para obtener/mantener erección.  
  - Eyaculación precoz o retardada.  
  - Distracción durante actividad sexual.  
  - Malestar emocional, vergüenza o sensación de pérdida de masculinidad.  
- **Stadia / fases:**  
  - No se definen fases clínicas.  
- **Protocolos de tratamiento o rehab:**  
  - El documento sugiere enfoque biopsicosocial: evaluación médica, revisión de medicación, salud mental, comunicación con pareja y abordaje individualizado.  
  - Algunos participantes usaron inhibidores PDE5, con aceptación variable.  
  - Otros probaron vitaminas, remedios herbales, pornografía, juguetes o nuevas posiciones, con eficacia percibida limitada.  
- **Ejercicios de prehab/movilidad específicos:**  
  - No se describen.  
- **Umbrales de dolor o red flags:**  
  - PTSD positivo, depresión, alcohol problemático, malestar relacional severo o ideación suicida/riesgo.  
  - Si hay señales graves de salud mental, derivación urgente.  
- **Referencias:** pp. 138–144.

---

## 7) Factores de estilo de vida (sueño, estrés, nutrición, entrenar enfermo)

- **Sueño:** no se aborda directamente.  
- **Estrés:** factor relevante; relacionado con despliegue, reintegración, PTSD y relación.  
- **Nutrición:** no abordada.  
- **Entrenar enfermo:** no abordado.  
- **Alcohol:** mencionado como posible contribuyente en algunos participantes.  
- **Medicación:** SSRI/SNRI y otros medicamentos pueden contribuir a disfunción sexual.  
- **Comunicación de pareja:** factor protector o área de intervención.

---

## 8) Cómo integrar este libro en Plan Maestro OS

- **Mejor uso:**  
  - Fuente para intake psicosocial en usuarios veteranos o con trauma.  
  - Reglas de derivación cuando hay disfunción sexual + PTSD/depresión/medicación.  
  - Material educativo sobre comunicación con pareja y no medicalización automática desde fitness.

- **Limitaciones:**  
  - Muestra pequeña: 8 hombres.  
  - Todos heterosexuales; no representa mujeres, LGBT u otras identidades.  
  - Cualitativo; no entrega umbrales clínicos ni protocolos de ejercicio.  
  - ⚠️ No usar para prescribir entrenamiento como tratamiento principal de disfunción sexual.

- **Recomendaciones específicas:**  
  - Crear `intake/veteranHealthScreen.ts` con campos opcionales: despliegue, PTSD, depresión, medicación, alcohol, salud sexual.  
  - Añadir `rules/referral/sexualHealth.ts` con lógica de derivación.  
  - Incluir contenido educativo: “si hay disfunción sexual persistente o malestar, consultar profesional; no culpar al entrenamiento”.

---

## Ronda 2 — tras: «Asegurate que no falten datos, si tienes información que no entiendes por falta de las ayudas visuales del libro hazmelo saber para que pued…»
### 1. Reporte de Ayudas Visuales y Datos Faltantes (OCR y Tablas)

Antes de proceder con las especificaciones técnicas para los agentes de código, he revisado el texto extraído de los PDFs en busca de tablas, figuras o datos que no se hayan procesado correctamente por falta de ayudas visuales o errores de OCR (reconocimiento óptico de caracteres). 

Aquí tienes el diagnóstico de lo que "falta" o está roto, y por qué **no bloquea** la extracción para la app de fitness:

1. **Veale et al. (BDD y Tamaño del Pene):**
   - **Problema:** Las **Tablas 2 y 3** (Historia sexual y puntuaciones detalladas del IIEF por grupo) tienen el texto extraído con errores graves de OCR (ej. números separados por espacios como `1 3 .4 6 (1 1 .3 2 )` o filas desalineadas).
   - **Impacto en la App:** **Nulo**. Para el motor de reglas de fitness no necesitamos la media exacta de la cohorte clínica ni los valores *p*. La conclusión accionable ya está extraída: *el grupo con BDD presenta disfunción eréctil severa, maintains de deseo sexual conservado, y recurre a prácticas de riesgo (jelqing, bombas) con tasas de fracaso cercanas al 100%.*
2. **Survey of the Literature (Tat et al. - WSW):**
   - **Problema:** El texto del Survey hace referencia a las **Tablas 1 y 2** del paper original de Tat et al. sobre riesgos en mujeres que tienen sexo con mujeres (WSW), pero esas tablas no están incluidas en el PDF del Survey.
   - **Impacto en la App:** **Menor**. El texto del Survey resume adecuadamente los hallazgos: los principales riesgos son ITS/VIH (por sexo con hombres, trabajo sexual o drogas inyectables) y las barreras son el estigma y la violencia. No necesitamos la tabla original para crear las reglas de derivación preventiva.
3. **Helmer et al. (Veteranos):**
   - **Problema:** La **Tabla 1** (Puntuaciones ASEX individuales de los 8 veteranos) está desordenada visualmente en el texto plano.
   - **Impacto en la App:** **Nulo**. Los totales, los diagnósticos comórbidos (PTSD, depresión, uso de SSRI) y las 8 temáticas cualitativas (impacto en la masculinidad, distracción, culpa) están perfectamente preservados en el texto y en el Apéndice A.

*Conclusión:* No es necesario que me envíes las imágenes de las tablas. La información cualitativa y los umbrales de seguridad están completos.

---

### 2. Especificaciones Técnicas para Agentes de Código (Blueprints)

A continuación, desarrollo las **recomendaciones planteadas** en la extracción anterior, transformándolas en **Contratos de Datos (Data Contracts)** y **Lógica del Motor de Reglas (Rule Engine Blueprints)**. Estos bloques están diseñados para que los agentes de desarrollo los copien directamente a la base de código de `Plan Maestro OS` (TypeScript / JSON).

#### MÓDULO A: Calidad de Evidencia y Salud Sexual (Basado en Paper 1 - Isenberg/Prause)
*Objetivo: Evitar que la app genere alertas falsas o diagnósticos basados en consumo de pornografía, y manejar la disfunción sexual como una señal de derivación, no de entrenamiento.*

**Data Contracts (TypeScript Interfaces)**
```typescript
// types/health/SexualHealth.ts
export interface SexualStimulusExposure {
  hoursPerWeek?: number;
  timeFrame?: 'last-week' | 'average-last-year' | 'unspecified';
  stimulusType?: 'video' | 'photos' | 'mixed' | 'unknown';
  escalationReported?: boolean;
  distressLevel?: 0 | 1 | 2 | 3 | 4 | 5; // 0 = None, 5 = Severe
}

export interface EvidenceQualityFlag {
  metricId: string; // ej. 'porn_hours_per_week'
  issue: 'missing-timeframe' | 'inconsistent-stimulus' | 'unreported-stats' | 'self-reported-bias';
  severity: 'low' | 'medium' | 'high';
  action: 'ignore_for_training_rules' | 'require_clinical_context';
}
```

**Rule Engine Blueprint (JSON/YAML Logic)**
```yaml
rule_id: "sexual_distress_referral"
description: "Si el usuario reporta angustia severa por disfunción sexual, bloquear atribución a fatiga muscular/sobreentrenamiento y sugerir derivación."
conditions:
  - metric: "sexual_distress_level"
    operator: ">="
    value: 4
  - metric: "persistent_erectile_difficulty"
    operator: "=="
    value: true
actions:
  - type: "system_alert"
    message: "Los problemas sexuales persistentes pueden tener causas médicas o psicológicas. Te recomendamos consultar a un profesional de la salud. No intentes compensarlo con más volumen de entrenamiento."
  - type: "tag_user"
    tag: "requires_clinical_evaluation"
```

---

#### MÓDULO B: Imagen Corporal, BDD y Bloqueos de Seguridad (Basado en Paper 2 - Veale)
*Objetivo: Detectar Trastorno Dismórfico Corporal (BDD) y bloquear estrictamente cualquier contenido, rutina o consejo relacionado con "agrandamiento genital" o "jelqing".*

**Data Contracts (TypeScript Interfaces)**
```typescript
// types/health/BodyImage.ts
export interface BodyImageConcern {
  bodyPart: 'genital' | 'muscle_size' | 'body_fat' | 'other';
  preoccupationLevel: 'none' | 'mild' | 'moderate' | 'severe';
  repetitiveBehaviors: ('measuring' | 'comparing' | 'mirror_checking' | 'camouflaging')[];
  avoidancePresent: boolean;
  possibleBDDPattern: boolean; // Calculado por el sistema
}

export interface GenitalAlterationAttempt {
  method: 'jelqing' | 'vacuum_pump' | 'stretching_weights' | 'injections' | 'surgery' | 'pills';
  perceivedSuccess: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; // Escala del paper
  adverseEffectsReported: boolean;
}
```

**Rule Engine Blueprint (JSON/YAML Logic)**
```yaml
rule_id: "block_genital_enhancement_content"
description: "Hard-block a cualquier rutina, skill o consejo que prometa aumento de tamaño genital."
conditions:
  - metric: "user_search_query"
    operator: "contains_any"
    value: ["jelqing", "penis enlargement", "aumentar tamaño pene", "bombas de vacío genitales"]
actions:
  - type: "content_filter"
    action: "block_and_warn"
    warning_message: "Las prácticas como el 'jelqing' o el uso de bombas de vacío sin supervisión urológica no tienen evidencia de eficacia y conllevan alto riesgo de daño tisular, disfunción eréctil y fibrosis. Por tu seguridad, este contenido está bloqueado."
  - type: "log_event"
    event: "safety_trigger_bdd_genital"

rule_id: "bdd_muscle_dysmorphia_referral"
description: "Extensión del paper BDD aplicada a la vigorexia (dismorfia muscular)."
conditions:
  - metric: "body_image_preoccupation"
    operator: "=="
    value: "severe"
  - metric: "repetitive_behaviors"
    operator: "includes"
    value: "mirror_checking"
  - metric: "training_volume"
    operator: ">"
    value: "max_recoverable_volume" # A pesar de estar sobreentrenado, sigue empujando
actions:
  - type: "system_alert"
    message: "Detectamos una preocupación intensa por tu tamaño muscular que está afectando tu bienestar. El entrenamiento no resolverá la dismorfia. Te sugerimos hablar con un profesional de salud mental."
```

---

#### MÓDULO C: Mapa de Evidencia Médica y Salud Preventiva (Basado en Paper 3 - Survey)
*Objetivo: Asegurar que la app no recomiende terapias experimentales (como ondas de choque para disfunción eréctil) y maneje correctamente las banderas de salud preventiva en usuarios LGBTQ+.*

**Data Contracts (TypeScript Interfaces)**
```typescript
// types/health/MedicalEvidence.ts
export type EvidenceLevel = 'preclinical_animal' | 'early_clinical_human' | 'established' | 'experimental_unproven';

export interface MedicalIntervention {
  name: string; // ej. "Low-Intensity Extracorporeal Shockwave Therapy (LIEST)"
  targetCondition: string; // ej. "Erectile Dysfunction"
  evidenceLevel: EvidenceLevel;
  fitnessAppAction: 'ignore' | 'educate_only' | 'refer_to_specialist';
}

export interface PreventiveScreeningNeed {
  populationGroup: 'WSW' | 'MSM' | 'trans_masculine' | 'trans_feminine' | 'general';
  riskFactors: string[]; // ej. ['HPV', 'Anal Cancer', 'Cardiovascular (Hormones)']
  requiresClinicalReferral: boolean;
}
```

**Rule Engine Blueprint (JSON/YAML Logic)**
```yaml
rule_id: "shockwave_therapy_experimental_warning"
description: "Si el usuario pregunta o busca terapias de ondas de choque para disfunción eréctil o tendinopatías no musculoesqueléticas."
conditions:
  - metric: "user_query"
    operator: "matches"
    value: "shockwave.*erectile|ondas.*choque.*disfuncion"
actions:
  - type: "educational_popup"
    content: "La terapia de ondas de choque para la disfunción eréctil sigue siendo considerada experimental con evidencia de baja calidad (estudios pequeños, resultados mixtos vs sham). No sustituye la evaluación urológica."

rule_id: "lgbtq_hormone_cardiovascular_flag"
description: "Usuarios trans en terapia hormonal cruzada tienen riesgos cardiovasculares y metabólicos específicos que el motor de fatiga debe considerar."
conditions:
  - metric: "user_profile.gender_identity"
    operator: "in"
    value: ["trans_masculine", "trans_feminine"]
  - metric: "user_profile.hormone_therapy"
    operator: "=="
    value: true
actions:
  - type: "adjust_recovery_metric"
    adjustment: "increase_cardiovascular_monitoring"
    note: "Monitorear presión arterial y fatiga sistémica más de cerca debido a posibles efectos metabólicos de la terapia hormonal cruzada (Testosterona/Estrógenos)."
```

---

#### MÓDULO D: Intake de Veteranos, Trauma y Medicación (Basado en Paper 4 - Helmer)
*Objetivo: Crear un flujo de intake sensible para usuarios con historial militar, trauma (PTSD) o uso de ISRS (SSRIs), evitando culpar al entrenamiento de la disfunción sexual o la falta de libido.*

**Data Contracts (TypeScript Interfaces)**
```typescript
// types/intake/VeteranAndTrauma.ts
export interface VeteranHealthProfile {
  isVeteran: boolean;
  deploymentHistory?: string[]; // ej. ['OEF', 'OIF', 'OND']
  traumaScreening: {
    ptsdPositive: boolean;
    depressionPositive: boolean;
  };
  medicationFlags: {
    ssri_snri_use: boolean;
    blood_pressure_meds: boolean;
  };
}

export interface SexualDysfunctionImpact {
  domainsAffected: ('desire' | 'erection' | 'orgasm' | 'distraction' | 'pain')[];
  psychosocialImpact: ('shame' | 'loss_of_masculinity' | 'relationship_strain' | 'avoidance')[];
}
```

**Rule Engine Blueprint (JSON/YAML Logic)**
```yaml
rule_id: "ssri_libido_suppression_alert"
description: "Si el usuario reporta pérdida aguda de libido o disfunción sexual y está en el intake con flag de SSRI/SNRI, no sugerir 'deload' o 'cambio de rutina' como causa principal."
conditions:
  - metric: "user_profile.medication_flags.ssri_snri_use"
    operator: "=="
    value: true
  - metric: "weekly_ledger.reported_issues"
    operator: "includes"
    value: "severe_libido_drop"
actions:
  - type: "contextual_insight"
    insight: "Nota: Los medicamentos ISRS/SNRI (usados para depresión/ansiedad/PTSD) tienen una alta tasa de efectos secundarios sexuales (baja de libido, retraso en el orgasmo). Si esto está afectando tu calidad de vida, háblalo con tu médico psiquiatra. No es un fallo de tu programación de entrenamiento."

rule_id: "ptsd_hyperarousal_training_adjustment"
description: "Usuarios con PTSD positivo pueden experimentar hipervigilancia que interfiere con la recuperación del SNC y la concentración en ejercicios complejos (ej. Calistenia avanzada)."
conditions:
  - metric: "user_profile.trauma_screening.ptsdPositive"
    operator: "=="
    value: true
  - metric: "current_skill_path"
    operator: "requires_high_CNS_focus"
    value: true # ej. Handstand, Planche
actions:
  - type: "skill_step_modifier"
    modifier: "add_grounding_cues"
    cue: "Si sientes disociación o hipervigilancia durante la Skill, baja la intensidad, enfócate en la respiración diafragmática y prioriza ejercicios de tierra (grounding) antes de volver a invertidas."
```

---

### Resumen para el Equipo de Desarrollo (Next Steps)

1. **Base de Datos / Schema:** Migrar las interfaces de TypeScript a los esquemas de Prisma/GraphQL o al store local de la app (ej. Supabase / Redux).
2. **Motor de Reglas:** Implementar los archivos `.yaml` en el motor de reglas existente (`TrainingRule` engine), asegurándose de que las acciones de tipo `content_filter` y `system_alert` tengan prioridad sobre las reglas de volumen/hipertrofia.
3. **UI/UX (Onboarding):** Añadir las preguntas del `VeteranHealthProfile` y `BodyImageConcern` en el flujo de *Intake* inicial, marcándolas como **"Opcional / Confidencial"** y explicando que sirven para adaptar las alertas de recuperación y evitar consejos contraproducentes.
4. **Filtro de Contenido:** Configurar el backend para que el `rule_id: "block_genital_enhancement_content"` actúe a nivel de base de datos de ejercicios y artículos, ocultando cualquier tag relacionado con `jelqing` o `penis_pumping`.
