# Daniels' Running Formula (4ª ed.) — Extracción Completa del Sistema VDOT y Zonas

> **sourceId:** `daniels-running-formula-4ed`
> **Título:** Daniels' Running Formula (4ª edición, Jack Daniels, PhD)
> **Editorial:** Human Kinetics, 2021 · 18 Capítulos
> **EPUB:** `D:\Downloads\Libros\Daniels-DanielsRunningFormula_4ed.epub`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro:** Daniels' Running Formula
- **Edición y Año:** 4ª edición (2021 / Human Kinetics)
- **Autor:** Jack Daniels, PhD (Fisiólogo del ejercicio y legendario entrenador olímpico de atletismo)
- **Disciplina:** Fisiología del running / Sistema VDOT de rendimiento / Periodización de 4 fases para medio fondo y fondo (800m a Maratón)
- **Población objetivo:** Corredores de fondo y medio fondo, entrenadores de atletismo, triatletas y programadores de planes de carrera
- **Alcance de esta sección:**
  - Los principios fundamentales del entrenamiento de carrera y leyes de adaptación (Ch 1–2).
  - El **Sistema VDOT**: cuantificación del $\text{VO}_2\text{max}$ funcional basada en marcas de carrera recientes sin requerir ergoespirometría de laboratorio (Ch 3).
  - Las **5 Zonas de Intensidad de Daniels**:
    1. **Easy Pace (E):** $65\%\text{ a }79\%\ \text{HR}_{\text{max}}$ (desarrollo mitocondrial, vascularización capilar, resistencia muscular básica).
    2. **Marathon Pace (M):** $80\%\text{ a }89\%\ \text{HR}_{\text{max}}$ (economía de carrera específica a ritmo de maratón y confianza mental).
    3. **Threshold Pace (T):** $88\%\text{ a }92\%\ \text{HR}_{\text{max}}$ (umbral de lactato, ritmo sostenible de 50 a 60 minutos, carreras continuas de 20 min o cruise intervals).
    4. **Interval Pace (I):** $97\%\text{ a }100\%\ \text{HR}_{\text{max}}$ ($\text{VO}_2\text{max}$, intervalos de 2 a 5 minutos con descanso igual al tiempo de trabajo).
    5. **Repetition Pace (R):** Ritmo submáximo a máximo (economía neuromuscular, velocidad pura y cadencia; recuperación completa entre repeticiones).
  - Estructura de periodización en **4 Fases de 6 semanas** (Fase I: Base aeróbica $\to$ Fase II: Repeticiones y fuerza $\to$ Fase III: Intervalos y umbral $\to$ Fase IV: Tapering y competición) (Ch 11).
  - Planes específicos desde 800m hasta el Maratón (Ch 13–18).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `runningTraining`)

```typescript
export type DanielsPaceZone = 'Easy_E' | 'Marathon_M' | 'Threshold_T' | 'Interval_I' | 'Repetition_R';

export interface VdotProfileContract {
  vdotScore: number; // Ej. 35 a 85
  recentRaceDistanceMeters: number;
  recentRaceTimeSeconds: number;
  calculatedPacesPerKm: {
    easyRangeMinKm: [string, string];
    marathonPaceMinKm: string;
    thresholdPaceMinKm: string;
    intervalPaceMinKm: string;
    repetitionPaceMinKm: string;
  };
}

export interface DanielsWorkoutContract {
  workoutType: 'easy_long_run' | 'cruise_intervals_T' | 'tempo_run_T' | 'vo2max_intervals_I' | 'speed_repetitions_R';
  totalDistanceKm: number;
  intervalDetails?: {
    workDurationOrDistance: string;
    targetZone: DanielsPaceZone;
    recoveryDuration: string;
    repeats: number;
  };
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `daniels-vdot-intensity-zones-prescription`
- **id:** `daniels-vdot-intensity-zones-prescription` | **tipo:** zonas de entrenamiento / atletismo
- **descripción:** Las intensidades de entrenamiento se prescriben de acuerdo a los porcentajes de esfuerzo funcional relativos al VDOT:
  - **Easy (E):** $59\%\text{ a }74\%\ \text{vVO}_2\text{max}$ ($65\%\text{ a }79\%\ \text{HR}_{\text{max}}$). Volumen: 70–80% del kilometraje semanal.
  - **Marathon (M):** $75\%\text{ a }84\%\ \text{vVO}_2\text{max}$ ($80\%\text{ a }89\%\ \text{HR}_{\text{max}}$).
  - **Threshold (T):** $88\%\text{ a }92\%\ \text{HR}_{\text{max}}$. Volumen límite: **máximo 10% del kilometraje semanal** (o 60 minutos en una sola sesión).
  - **Interval (I):** $97\%\text{ a }100\%\ \text{HR}_{\text{max}}$. Duración óptima por intervalo: **3 a 5 minutos**; volumen límite: **máximo 8% del kilometraje semanal** (o 10 km).
  - **Repetition (R):** Ritmo más rápido que I. Duración máxima por repetición: $\le 2\text{ minutos}$ con ratio descanso-trabajo $2:1\text{ a }3:1$. Volumen límite: **máximo 5% del kilometraje semanal** (o 8 km).
- **confianza:** `explicit`
- **capítulo/página:** Ch. 3, VDOT System; Ch. 5–9, Training Intensities.

### Regla: `daniels-ten-percent-mileage-increase-rule`
- **id:** `daniels-ten-percent-mileage-increase-rule` | **tipo:** sobrecarga progresiva en running
- **descripción:** Para prevenir el síndrome de sobreuso y fracturas por estrés en la tibia y metatarsos:
  - El volumen de kilometraje semanal **no debe incrementarse más de 1 milla (1.6 km) por cada sesión de carrera semanal** (ej. si corre 4 días a la semana, el aumento máximo es de $4\text{ millas} \approx 6.4\text{ km}$ tras un bloque estable de 3 semanas al mismo volumen).
- **confianza:** `explicit`
- **capítulo/página:** Ch. 1, Essential Elements of Training.

---

## 4) Integración en Plan Maestro OS

1. **Calculadora VDOT y Conversor de Ritmos (`src/lib/running/`):**
   - Implementar el algoritmo de Daniels para predecir marcas y calcular zonas de ritmo (`E`, `M`, `T`, `I`, `R`) a partir de cualquier tiempo de carrera.
2. **Generador de Planes de 4 Fases para Running:**
   - Incorporar los planes de 24 semanas de Daniels para 5K, 10K, Media Maratón y Maratón.
