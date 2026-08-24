# FUERZA: A Female Guide to Strength & Physique — Extracción Completa

> **sourceId:** `inda-fuerza-female-strength`
> **Título:** FUERZA: A Female Guide to Strength and Physique (Marisa Inda, con prólogo de Chad Wesley Smith)
> **Publicación:** Juggernaut Training Systems, 2017 · 119 páginas
> **PDF:** `D:\Downloads\RP Training programs\Inda-FUERZA-FemaleGuideStrengthPhysique.pdf`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** FUERZA: A Female Guide to Strength and Physique
- **Autora:** Marisa Inda (Campeona Mundial IPF Powerlifting y competidora de Bodybuilding)
- **Disciplina:** Fuerza femenina / Powerlifting / Hipertrofia y desarrollo físico femenino
- **Población objetivo:** Mujeres levantadoras, entrenadores de fuerza y programadores de entrenamiento femenino
- **Alcance de esta sección:**
  - Fundamentos biomecánicos de la sentadilla, press de banca y peso muerto adaptados a la morfología y ángulo Q femenino (pp. 15–48).
  - Integración de fuerza pesada como vehículo primario para la composición corporal estética femenina ("Strength as the Path to Aesthetics") (pp. 49–60).
  - Pautas de calistenia, dominadas y acondicionamiento cardiovascular (pp. 61–74).
  - Nutrición, balance energético y gestión de macros para fuerza y pérdida de grasa (pp. 75–88).
  - Programa estructurado de 12 semanas de Powerlifting + Hipertrofia accesoria (pp. 89–118).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `trainingPlan`)

```typescript
export interface FemaleStrengthCycleContract {
  athleteProfile: 'female_lifter';
  primaryLifts: ['competition_squat', 'competition_bench_press', 'conventional_or_sumo_deadlift'];
  accessoryEmphasis: ('glute_hypertrophy' | 'upper_back_posture' | 'hamstrings_posterior_chain' | 'deltoid_shaping')[];
  cycleDurationWeeks: 12;
  peakingIncluded: boolean;
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `female-neuromuscular-recovery-volume-capacity`
- **id:** `female-neuromuscular-recovery-volume-capacity` | **tipo:** fisiología del entrenamiento femenino
- **descripción:** Debido a una mayor proporción relativa de fibras Tipo I, mayor perfusión capilar y diferencias hormonales (estrógenos protectores de membrana muscular), las mujeres generalmente toleran **mayor volumen relativo de trabajo submáximo ($70\%\text{ a }82.5\%$ 1RM)**, requieren **menores tiempos de descanso entre series (60 a 90 s en accesorios, 2 a 3 min en principales)** y se recuperan más rápidamente entre sesiones de alta frecuencia en comparación con los hombres a una misma intensidad relativa.
- **confianza:** `explicit`
- **capítulo/página:** Strength as the Path to Aesthetics, pp. 49–54; Program Variables, pp. 89–95.

### Regla: `inda-big-three-technical-cues-female-lifters`
- **id:** `inda-big-three-technical-cues-female-lifters` | **tipo:** técnica de levantamiento / cues
- **descripción:** Cues técnicos fundamentales de Marisa Inda:
  - **Sentadilla:** Apertura de pies ligeramente más amplia que el ancho biacromial con rotación externa de $20^\circ\text{--}30^\circ$ para acomodar el ángulo Q pélvico; cue *"spread the floor / push knees out"* para maximizar torque glúteo.
  - **Press de Banca:** Retracción y depresión escapular estricta con arco torácico controlado y *"leg drive"* activo empujando el suelo hacia adelante para estabilizar la caja torácica.
  - **Peso Muerto:** Enfoque en tensión de dorsales anchos (*"bend the bar around your shins"* / *"pack the lats"*) y extensión coordinada de rodilla y cadera sin hiperextender la columna lumbar en el bloqueo.
- **confianza:** `explicit`
- **capítulo/página:** Training the Squat/Bench/Deadlift, pp. 15–48.

---

## 4) Integración en Plan Maestro OS

1. **Plantillas de Entrenamiento Femenino (`src/data/schedules/`):**
   - Incorporar el macrociclo de 12 semanas de Marisa Inda en la librería de programas de fuerza/estética.
2. **Motor de Autorregulación de Volumen:**
   - Calibrar los tiempos de descanso y densidad de series para perfiles femeninos.
