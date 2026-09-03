# 06 — Motor Determinista e IA Proactiva Anti-Alucinación

> **Documento:** `GeminiAudits/06_MOTOR_DETERMINISTA_E_IA_PROACTIVA_ANTI_ALUCINACION.md`  
> **Objetivo:** Especificación del núcleo de evaluación determinista, bus de eventos, ciclo de vida de sugerencias, prevención matemática de alucinaciones y arquitectura del Worker IA.

---

## 1. El Paradigma Fundamental: Núcleo Determinista + IA como Capa Narrativa

La inmensa mayoría de las aplicaciones modernas que integran Inteligencia Artificial cometen un error de diseño fatal: **le piden al modelo de lenguaje que calcule o decida**.

Los Modelos de Lenguaje Grande (LLMs) son motores probabilísticos de predicción de tokens, no calculadoras lógicas. Cuando se les pide que calculen el volumen semanal de entrenamiento, interpreten un déficit calórico o recomienden un deload, los LLMs sufren de:
1. **Alucinación numérica:** Inventan porcentajes de grasa o pesos de barra que parecen plausibles pero no tienen sustento científico.
2. **Inconsistencia temporal:** Recomiendan 15 series un lunes y 28 series el martes para el mismo objetivo.
3. **Peligro biomédico:** Pueden emitir consejos lesivos sin asumir responsabilidad causal.

### La Regla de Oro Arquitectónica de Plan Maestro OS (§0.1)
> **"Las reglas numéricas viven en código verificable (TypeScript puro, 100% testeable). El LLM solo compone texto explicativo sobre evaluaciones que ya ocurrieron y ya arrojaron un resultado booleano o numérico. NINGÚN número visible en la aplicación puede carecer de trazabilidad directa a un `ruleId`, a una fuente bibliográfica citada (doc/capítulo/página) o a un dato del ledger histórico del usuario."**

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ESTADO REAL DEL USUARIO                         │
│   UserState: sesiones completadas, series, RPE, peso, horas de sueño   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      MOTOR DETERMINISTA EN TYPESCRIPT                  │
│  - Evalúa funciones puras: `appliesWhen(ctx)`                          │
│  - Compara métricas contra rangos óptimos: `optimalRange` vs `real`    │
│  - Emite estado formal: `OK`, `WARNING`, o `VIOLATION`                 │
│  - Asigna cita inmutable: `sourceRef: { docId, chapter, page }`        │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼ (Solo el resultado formal verificado)
┌────────────────────────────────────────────────────────────────────────┐
│                        SUGGESTION ENGINE (Local)                       │
│  - Filtra sugerencias por cooldowns y límites de saturación (máx 3)    │
│  - Presenta la sugerencia estructurada con botón "¿Por qué? (Cita)"    │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │ (Opcional / A petición del usuario)
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     CAPA NARRATIVA IA (Worker Gemini)                  │
│  - Recibe el resultado numérico ya calculado + chunks bibliográficos   │
│  - Redacta una explicación fluida en tono pedagógico                   │
│  - Devuelve un borrador (`AiDraft`) sometido a revisión humana         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Especificación Formal del Motor de Reglas (`DomainRule`)

Cada regla matemática y de entrenamiento del sistema es un objeto fuertemente tipado en `src/lib/rules/`:

```typescript
export type RuleConfidence = 'explicit' | 'inferred' | 'qualitative';
export type EvidenceTier = 'meta-analysis' | 'rct' | 'observational' | 'expert-book' | 'internal-doc';
export type RuleDomain = 'fitness' | 'nutrition' | 'career' | 'clinical' | 'languages';
export type RuleCategory = 'volume' | 'frequency' | 'intensity' | 'pain' | 'progression' | 'rest' | 'recovery';

export interface NumericRange {
  min: number;
  max: number;
}

export interface RuleContext {
  userState: UserState;
  week: {
    totalHardSets: number;
    hardSetsByPattern: Record<string, number>;
    completedSessions: number;
    avgRpe: number;
  };
  todayPain: Array<{ bodyZone: string; severity: number }>;
}

export interface DomainRule {
  id: string;                                   // e.g. "fit:weekly-chest-volume-ceiling"
  domain: RuleDomain;
  type: RuleCategory;
  description: string;
  metric: string;                               // e.g. "Chest Hard Sets / Week"
  
  // Umbrales deterministas
  optimalRange: NumericRange;                  // e.g. { min: 10, max: 20 }
  riskThresholds: {
    warning: NumericRange;                      // Fuera de esto = Warning
    violation: NumericRange;                    // Fuera de esto = Infracción lesiva / sobreentrenamiento
  };
  
  // Evaluación matemática pura
  appliesWhen: (ctx: RuleContext) => boolean;
  resolveValue: (ctx: RuleContext) => number | undefined;
  
  // Evidencia y trazabilidad científica
  confidence: RuleConfidence;
  evidenceTier: EvidenceTier;
  sourceRef: {
    docId: string;                              // e.g. "nippard-fundamentals-hypertrophy"
    chapter?: number;
    page?: number;
  };
  
  messages: {
    optimal: string;
    warning: string;
    violation: string;
  };
}
```

### 2.1 Jerarquía de Resolución de Conflictos (`evidenceTier`)
Si dos libros del RAG discrepan sobre una métrica (por ejemplo, volumen de series semanales), el motor resuelve el conflicto sin ambigüedad aplicando la **Jerarquía de Evidencia Científica**:
$$\text{Meta-Análisis (Tier 1)} > \text{RCT Clínico (Tier 2)} > \text{Estudio Observacional (Tier 3)} > \text{Libro de Experto (Tier 4)}$$
Si persiste la duda entre dos libros del mismo nivel (e.g., Steven Low vs. Jeff Nippard), el motor aplica la **matriz de especialidad por población**:
*   En calistenia y gimnasia: gana **Steven Low** (*Overcoming Gravity*).
*   En hipertrofia con pesas: gana **Jeff Nippard / Mike Israetel**.
*   En tendinopatías: gana **Steven Low** (*Overcoming Tendonitis*).
*   En sentadilla y biomecánica de levantamiento: gana **Aaron Horschig** (*The Squat Bible*).

---

## 3. Arquitectura del EventBus y SuggestionEngine

El usuario no debe tener que abrir un chat para pedir consejo. La inteligencia del sistema es **proactiva por eventos**:

### 3.1 Taxonomía de Eventos del Sistema
El `EventBus` local (`src/lib/events/eventBus.ts`) reacciona a eventos inmutables emitidos por los componentes de la interfaz:
1. `WORKOUT_LOGGED`: Se registró una serie o sesión de ejercicio.
2. `PAIN_SPIKE`: El usuario reportó dolor $\ge 4/10$ en una articulación.
3. `JOB_APPLICATION_SUBMITTED`: Se envió una postulación laboral.
4. `VOCABULARY_CARDS_OVERDUE`: Se vencieron más de 15 tarjetas de repaso espaciado en alemán o inglés.
5. `LOW_ENERGY_REPORTED`: El usuario reportó energía $\le 2/5$ en el check-in matutino.

### 3.2 El Ciclo de Vida de las Sugerencias
Para evitar el "efecto asistente molesto" (nagging), toda sugerencia pasa por una máquina de estados finita:

```
  PROPOSED ─────► SHOWN ─────► ACCEPTED ─────► APPLIED ─────► OUTCOME_TRACKED
                    │
                    ├───────► DISMISSED ("Ahora no") [Entra en cooldown de 72h]
                    │
                    └───────► EXPIRED (No vista en 24h)
```

#### Reglas Anti-Saturación:
*   **Máximo 3 sugerencias activas** en la bandeja de entrada de "Hoy" (`SuggestionInbox.tsx`).
*   **Máximo 1 empujón proactivo (nudge) sonoro o visual al día**.
*   **Cooldowns por tipo:** Si el usuario descarta una sugerencia de reducción de volumen de pecho, el sistema silencia esa regla durante 4 días antes de volver a alertar.

---

## 4. El Guardián Humano: `AiDraftReview`

Cuando se invoca a un modelo de IA (a través del worker de Gemini) para generar un correo a un reclutador, explicar una rutina o redactar un resumen clínico:

1. **La IA nunca aplica cambios directamente a la base de datos.**
2. La IA genera un objeto estricto `AiDraft`:
   ```typescript
   export interface AiDraft {
     id: string;
     domain: 'career' | 'fitness' | 'clinical';
     task: string;
     content: string;
     sourcesUsed: Array<{ docId: string; citation: string }>;
     confidenceScore: number;
     createdAt: string;
   }
   ```
3. El componente `src/components/ai/AiDraftReview.tsx` presenta obligatoriamente al usuario 3 botones:
   *   **Editar:** Permite alterar cualquier palabra del borrador antes de guardarlo.
   *   **Aprobar:** Aplica los cambios al store correspondiente.
   *   **Descartar:** Borra el borrador y registra el motivo para retroalimentación futura.
4. **Cero diagnóstico clínico:** Toda sugerencia que toque síntomas físicos o ansiedad contiene un disclaimer ineludible y un botón de derivación profesional.
