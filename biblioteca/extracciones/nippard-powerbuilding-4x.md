# The Powerbuilding System 4x — Extracción Completa de Programación y Variables

> **sourceId:** `nippard-powerbuilding-4x`
> **Título:** The Powerbuilding System: Intermediate-Advanced 4x/Week (Jeff Nippard)
> **Publicación:** 2020 · 115 páginas
> **PDF:** `e:\Laboral\_pdf_biblia\Planeacion_Integral\investigacion\Nippard-PowerbuildingSystem_4x_2020.pdf`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro/Programa:** The Powerbuilding System (4x/week)
- **Autor:** Jeff Nippard (B.Sc. Biochemistry)
- **Disciplina:** Powerbuilding / Periodización concurrente de fuerza e hipertrofia / Progresión RPE + %1RM
- **Población objetivo:** Levantadores intermedios y avanzados que buscan maximizar simultáneamente 1RM en los "Big 3" (Squat, Bench Press, Deadlift) y volumen de hipertrofia muscular
- **Alcance de esta sección:**
  - Filosofía de periodización híbrida (fuerza en rangos 1–5 reps al 80–90% 1RM + hipertrofia accesoria en rangos 6–15+ reps a RPE 8–10) (pp. 10–15).
  - Estructura de la división 4 días (Upper / Lower / Rest / Upper / Lower / Rest / Rest) (pp. 35–73).
  - Protocolo de calentamiento dinámico y series de aproximación específicas (pp. 31–34).
  - Las 3 fases del macrociclo de 10 semanas (Fase 1: Acumulación de volumen / Fase 2: Intensificación / Fase 3: Tapering y Test de 1RM) (pp. 74–92).
  - Gestión de fatiga: Last Set RPE (LSRPE), RIR, autorregulación y sustitución de ejercicios (pp. 93–108).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `trainingPlan`)

```typescript
export interface PowerbuildingSplitContract {
  programName: 'Jeff Nippard 4x Powerbuilding System';
  splitType: 'Upper_A' | 'Lower_A' | 'Upper_B' | 'Lower_B';
  primaryStrengthLifts: ['Competition_Back_Squat', 'Competition_Bench_Press', 'Conventional_or_Sumo_Deadlift', 'Overhead_Press'];
  periodizationModel: 'daily-undulating-periodization-DUP-with-block-progression';
  macrocycleDurationWeeks: 10;
  deloadWeek: 5;
  testingWeek: 10;
}

export interface SetIntensityPrescriptionContract {
  exerciseId: string;
  targetSets: number;
  targetReps: [number, number];
  intensityType: 'percentage_1RM_and_RPE_hybrid';
  targetPercentage1RM?: number;
  targetRPE: number; // Ej. RPE 7 a 9
  restMinutes: number; // 3 a 5 min en principales; 1.5 a 2 min en accesorios
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `powerbuilding-hybrid-periodization-rule`
- **id:** `powerbuilding-hybrid-periodization-rule` | **tipo:** periodización del entrenamiento
- **descripción:** Cada sesión de entrenamiento comienza con **1 levantamiento compuesto principal de fuerza (Main Lift)** prescrito por `%1RM + objetivo de RPE` en rangos de **1 a 5 repeticiones** (intensidad $75\%\text{ a }90\%$ 1RM, descansos de **3 a 5 minutos** para maximizar reclutamiento neuromuscular y resíntesis de PCr), seguido de **3 a 5 ejercicios accesorios de hipertrofia** en rangos de **8 a 15 repeticiones** a **RPE 8–9 (RIR 1–2)** con descansos de **90 a 120 segundos** para maximizar tensión mecánica y estrés metabólico.
- **confianza:** `explicit`
- **capítulo/página:** Program Explained, pp. 74–80; Training Variables, pp. 93–97.

### Regla: `lsrpe-autoregulation-progression-protocol`
- **id:** `lsrpe-autoregulation-progression-protocol` | **tipo:** autorregulación de sobrecarga
- **descripción:** Se utiliza el **Last Set RPE (LSRPE)** para modular la carga de la semana siguiente:
  - Si el LSRPE real fue **menor al prescrito** (ej. objetivo RPE 8, resultado real RPE 7): incrementar la carga en $+2.5\%\text{ a }+5\%$ la semana siguiente.
  - Si el LSRPE real fue **exactamente el prescrito** (RPE 8): mantener la progresión estándar de $+1\text{--}2.5\%$.
  - Si el LSRPE real fue **mayor al prescrito** (ej. RPE 9.5–10): congelar la carga o reducirla un $-2.5\%$ para disipar fatiga acumulada.
- **confianza:** `explicit`
- **capítulo/página:** Training Variables, pp. 93–96.

---

## 4) Estructura del Split Semanal de 4 Días (pp. 35–73)

- **Día 1: Upper A (Strength Focus):**
  1. *Bench Press Principal:* 3–4 series x 3–5 reps al 77.5–82.5% 1RM (RPE 8).
  2. *Chest-Supported Row (Espalda media):* 3 series x 8–10 reps (RPE 8).
  3. *Overhead Dumbbell Press (Deltoides anterior/medio):* 3 series x 8–10 reps.
  4. *Lat Pulldown o Dominadas con lastre:* 3 series x 10–12 reps.
  5. *Triceps Cable Pressdown / Biceps Incline Curl (Superserie):* 3 series x 12–15 reps.
- **Día 2: Lower A (Squat Focus):**
  1. *Back Squat Principal:* 3 series x 4–6 reps al 75–80% 1RM (RPE 8).
  2. *Romanian Deadlift (Isquiotibiales/Glúteos):* 3 series x 8–10 reps.
  3. *Bulgarian Split Squat:* 2–3 series x 10–12 reps/pierna.
  4. *Standing Calf Raise & Hanging Leg Raise (Core):* 3 series x 12–15 reps.
- **Día 3: Descanso Activo / Movilidad.**
- **Día 4: Upper B (Hypertrophy / Deadlift Accessory Focus):**
  1. *Close-Grip Bench Press o Incline Dumbbell Press:* 3 series x 6–8 reps (RPE 8).
  2. *Barbell Bent-Over Row:* 3 series x 6–8 reps.
  3. *Dumbbell Lateral Raise:* 4 series x 12–15 reps (última serie con rest-pause).
  4. *Cable Flyes & Face Pulls:* 3 series x 12–15 reps.
  5. *Overhead Triceps Extension & Hammer Curls:* 3 series x 10–12 reps.
- **Día 5: Lower B (Deadlift Focus):**
  1. *Conventional o Sumo Deadlift Principal:* 3 series x 3–5 reps al 80–85% 1RM (RPE 8).
  2. *Front Squat o Leg Press:* 3 series x 8–10 reps.
  3. *Lying Hamstring Leg Curl:* 3 series x 10–12 reps (énfasis excéntrico).
  4. *Seated Calf Raise & Cable Woodchoppers (Core):* 3 series x 12–15 reps.
- **Días 6 y 7: Descanso.**

---

## 5) Integración en Plan Maestro OS

1. **Biblioteca de Programas (`src/data/schedules/`):**
   - Incorporar el programa completo de Jeff Nippard Powerbuilding 4x como plantilla oficial intermedia/avanzada.
2. **Motor de Progresión RIR/RPE:**
   - Implementar el algoritmo de ajuste automático de carga basado en `lsrpe-autoregulation-progression-protocol`.
