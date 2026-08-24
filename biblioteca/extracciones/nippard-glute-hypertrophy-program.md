# The Glute Hypertrophy Program — Extracción Completa de Biomecánica y Rutinas

> **sourceId:** `nippard-glute-hypertrophy-program`
> **Título:** The Glute Hypertrophy Program (Jeff Nippard)
> **Publicación:** 2019 · 36 páginas
> **PDF:** `e:\Laboral\_pdf_biblia\Planeacion_Integral\investigacion\Nippard-GluteHypertrophyProgram.pdf`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro/Programa:** The Glute Hypertrophy Program
- **Autor:** Jeff Nippard (B.Sc. Biochemistry)
- **Disciplina:** Hipertrofia de glúteos / Biomecánica de vectores de fuerza / Selección de ejercicios basada en EMG
- **Población objetivo:** Levantadores y atletas que buscan especialización en desarrollo de glúteo mayor, medio y menor
- **Alcance de esta sección:**
  - Anatomía funcional y compartimentación del complejo glúteo (fibras superiores e inferiores del glúteo mayor, glúteo medio y menor) (pp. 24–28).
  - Los 3 vectores biomecánicos de fuerza para el glúteo (**Vector Horizontal / Contracción en Acortamiento $\leftrightarrow$ Vector Vertical / Tensión en Estiramiento $\leftrightarrow$ Vector Lateral / Abducción**) (pp. 29–33).
  - Protocolo de activación neuromuscular previa (Mini-band monster walks, clam shells y glute bridge) (p. 23).
  - Programación semanal de frecuencia 2x a 3x y volumen de 12 a 20 series directas semanales (pp. 7–22).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `trainingPlan`)

```typescript
export type GluteLoadingVector = 'horizontal-peak-shortened-thrust' | 'vertical-peak-lengthened-stretch-squat-rdl' | 'lateral-abduction-kickback';

export interface GluteExerciseVectorProfileContract {
  exerciseName: string;
  vector: GluteLoadingVector;
  targetGluteRegion: ('gluteus-maximus-upper' | 'gluteus-maximus-lower' | 'gluteus-medius' | 'gluteus-minimus')[];
  peakTensionPosition: 'lockout-shortened' | 'deep-hip-flexion-stretched' | 'terminal-abduction';
  meanEmgActivationPercentMVIC: number; // Ej. >100% en hip thrust vs ~60-80% en squat
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `glute-three-vector-hypertrophy-rule`
- **id:** `glute-three-vector-hypertrophy-rule` | **tipo:** biomecánica / selección de ejercicios
- **descripción:** Para maximizar el desarrollo hipertrófico de todas las subdivisiones del complejo glúteo, el microciclo semanal debe combinar obligatoriamente los tres vectores biomecánicos de carga:
  1. **Vector Horizontal / Anteroposterior (Pico de tensión en acortamiento completo):** *Barbell Hip Thrust / Glute Bridge*. Genera la máxima activación EMG del glúteo mayor ($>100\text{--}150\%$ MVIC) al mantener el brazo de momento constante en extensión completa ($0^\circ$).
  2. **Vector Vertical / Axial (Pico de tensión en máximo estiramiento):** *Sentadilla profunda con pies abiertos a $15^\circ\text{--}30^\circ$, Peso Muerto Rumano (RDL) y Zancadas búlgaras*. Genera máxima tensión mecánica y mecanotransducción a grandes longitudes de sarcómero.
  3. **Vector Lateral / Abducción:** *Abducción en polea/máquina a $30^\circ\text{--}45^\circ$ y Cable Kickbacks en diagonal*. Estimula específicamente las fibras superiores del glúteo mayor y el glúteo medio/menor.
- **confianza:** `explicit`
- **capítulo/página:** Exercise Selection, pp. 29–33; Program Variables, pp. 24–27.

### Regla: `glute-training-frequency-and-volume-parameters`
- **id:** `glute-training-frequency-and-volume-parameters` | **tipo:** prescripción de volumen
- **descripción:** Parámetros de dosificación óptima para especialización de glúteos en el programa de Nippard:
  - **Frecuencia Semanal:** **2 a 3 sesiones por semana** (separadas por 48 a 72 horas).
  - **Volumen Semanal:** **12 a 20 series directas efectivas por semana** (RIR 1–2 / RPE 8–9).
  - **Distribución de Carga:** 1/3 series en rangos de fuerza pesada (5–8 reps), 1/3 en hipertrofia moderada (8–12 reps) y 1/3 en bombeo metabólico/oclusión (15–25 reps).
- **confianza:** `explicit`
- **capítulo/página:** Program Variables, pp. 24–28.

---

## 4) Integración en Plan Maestro OS

1. **Biblioteca de Programas (`src/data/schedules/`):**
   - Incorporar el programa de especialización de glúteos de Jeff Nippard como rutina modularizable.
2. **Motor de Selección de Ejercicios:**
   - Clasificar cada ejercicio de tren inferior según su vector de fuerza (`horizontal`, `vertical`, `lateral`) para verificar el balance biomecánico del entrenamiento.
