# The Ultimate Guide to Body Recomposition — Extracción Completa de Fisiología y Protocolos

> **sourceId:** `nippard-body-recomposition`
> **Título:** The Ultimate Guide to Body Recomposition (Jeff Nippard & Chris Barakat, MS, ATC, CSCS)
> **Publicación:** 2019 · 268 páginas
> **PDF:** `D:\Downloads\JN Training Programs\Nippard-UltimateGuideToBodyRecomposition.pdf`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** The Ultimate Guide to Body Recomposition
- **Autores:** Jeff Nippard (B.Sc. Biochemistry) & Chris Barakat (M.Sc. Exercise & Nutritional Sciences)
- **Disciplina:** Recomposición corporal / Hipertrofia simultánea con pérdida de grasa / Partición de nutrientes
- **Población objetivo:** Levantadores principiantes, intermedios y avanzados, personas con fenotipo "skinny-fat", entrenadores personales y nutricionistas
- **Alcance de esta sección:**
  - Los 4 perfiles fisiológicos con mayor potencial de recomposición (Principiantes, Desentrenados, Personas con sobrepeso/obesidad, Avanzados con historial sub-óptimo) (pp. 8–18).
  - Bioenergética de la partición de nutrientes: balances energéticos disociados entre el tejido adiposo (balance calórico negativo neto) y el tejido muscular (síntesis de novo estimulada por tensión mecánica y disponibilidad de aminoácidos) (pp. 35–55).
  - Cálculo de calorías para recomposición: mantenimiento $\pm 5\%\text{ a }10\%$ o déficit controlado del $10\%\text{ a }20\%$ (pp. 56–76).
  - Protocolo específico para el dilema "Skinny-Fat" (pp. 85–98).
  - Prescripción de macronutrientes: Proteína ($2.2\text{ a }3.3\text{ g/kg FFM}$ o $1.6\text{ a }2.6\text{ g/kg}$ peso total), Grasas ($20\text{--}30\%$ kcal) y Carbohidratos para rendimiento glucolítico (pp. 99–160).
  - Distribución de comidas y umbral de leucina ($0.40\text{ a }0.55\text{ g/kg/comida}$ en 3 a 5 tomas) (pp. 161–180).
  - Variables de entrenamiento y sueño ($7\text{ a }9\text{ horas/noche}$) (pp. 181–268).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `nutritionRecomposition`)

```typescript
export type RecompCandidateProfile = 'untrained_beginner' | 'detrained_lifter' | 'overweight_obese' | 'skinny_fat' | 'advanced_suboptimal_past';

export interface BodyRecompositionPrescriptionContract {
  candidateProfile: RecompCandidateProfile;
  calorieTargetStrategy: 'eucaloric_maintenance' | 'conservative_deficit_10_to_15_percent' | 'lean_surplus_5_percent';
  dailyProteinGramsPerKgBodyweight: [1.6, 2.6];
  proteinGramsPerKgFFM?: [2.2, 3.3];
  fatPercentageOfTotalCalories: [20, 30];
  mealsPerDayCount: [3, 5];
  proteinPerMealGramsPerKg: [0.40, 0.55];
  weeklyResistanceTrainingVolumeSetsPerMuscle: [10, 20];
  targetSleepHoursPerNight: [7, 9];
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `body-recomposition-caloric-partitioning-rule`
- **id:** `body-recomposition-caloric-partitioning-rule` | **tipo:** bioenergética / nutrición
- **descripción:** La ganancia de masa muscular simultánea a la pérdida de grasa corporal es termodinámicamente viable porque el tejido adiposo y el tejido muscular operan en compartimentos metabólicos diferenciados:
  - La oxidación de lípidos intramusculares y subcutáneos proporciona la energía química (ATP) requerida para la síntesis de nuevas proteínas miofibrilares siempre que exista un estímulo hipertrófico mecánico suficiente y un aporte continuo de aminoácidos esenciales.
- **dosificación calórica:**
  - *Principiantes / Obesos / Skinny-Fat:* Déficit moderado del **$10\%\text{ a }20\%$** respecto al mantenimiento.
  - *Intermedios / Avanzados:* Mantenimiento eucalórico o micro-déficit del **$5\%\text{ a }10\%$**.
- **confianza:** `explicit`
- **capítulo/página:** Ch. 01, pp. 8–18; Ch. 05, pp. 56–76.

### Regla: `recomp-protein-leucine-distribution-target`
- **id:** `recomp-protein-leucine-distribution-target` | **tipo:** prescripción de proteína
- **descripción:** Para maximizar la tasa de síntesis proteica muscular (MPS) durante un déficit o recomposición:
  - **Ingesta Diaria Total:** **$2.2\text{ a }3.3\text{ g/kg de FFM}$** (o **$1.6\text{ a }2.6\text{ g/kg}$ de peso corporal total**).
  - **Distribución por Comida:** **$0.40\text{ a }0.55\text{ g/kg/comida}$** repartidos en **3 a 5 comidas diarias** espaciadas por 3 a 5 horas, garantizando al menos **$2.5\text{ a }3.5\text{ g}$ de leucina** por ingesta para saturar el umbral de activación de mTORC1.
- **confianza:** `explicit`
- **capítulo/página:** Ch. 08, pp. 99–120; Ch. 12, pp. 161–175.

---

## 4) Integración en Plan Maestro OS

1. **Calculadora de Recomposición Corporal (`src/lib/fitness/`):**
   - Implementar el árbol de decisión para perfiles `RecompCandidateProfile` y el cálculo de calorías y macros según `body-recomposition-caloric-partitioning-rule`.
2. **Motor de Crononutrición y Distribución de Comidas:**
   - Incorporar el umbral de leucina de $0.40\text{--}0.55\text{ g/kg/comida}$ en el planificador diario de comidas.
