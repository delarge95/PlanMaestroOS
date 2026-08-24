# The Fundamentals Hypertrophy Program — Extracción Completa de Anatomía y Programación

> **sourceId:** `nippard-fundamentals-hypertrophy`
> **Título:** The Fundamentals Hypertrophy Program (Jeff Nippard)
> **Publicación:** 2019 · 97 páginas
> **PDF:** `D:\Downloads\JN Training Programs\Nippard-FundamentalsHypertrophyProgram.pdf`
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22

---

## 1) Metadatos

- **Libro/Programa:** The Fundamentals Hypertrophy Program
- **Autor:** Jeff Nippard (B.Sc. Biochemistry)
- **Disciplina:** Hipertrofia natural / Anatomía funcional aplicada / Rutinas fundamentales (Full Body 3x, Upper/Lower 4x, Split 5x)
- **Población objetivo:** Levantadores principiantes e intermedios que buscan construir una base sólida de masa muscular con rigor biomecánico
- **Alcance de esta sección:**
  - Anatomía funcional y biomecánica por grupos musculares principales (Cuádriceps, Isquiotibiales, Glúteos, Pectorales, Dorsales, Deltoides, Brazos) (pp. 9–19).
  - Variables maestras de hipertrofia:
    - Volumen semanal óptimo ($10\text{ a }20\text{ series efectivas/músculo/semana}$) (pp. 20–24).
    - Frecuencia semanal ($2\times\text{ a }3\times\text{ por grupo muscular}$) (pp. 20–24).
    - Proximidad al fallo: RPE 7–9 (RIR 1–3) en compuestos pesados; RPE 8–10 (RIR 0–2) en máquinas/aislamientos (pp. 20–24).
    - Descansos entre series: $2\text{ a }3+\text{ min}$ en compuestos; $60\text{ a }90\text{ s}$ en accesorios (pp. 20–24).
  - Protocolo de calentamiento dinámico y series de aproximación (pp. 25–26).
  - Las 3 opciones de rutinas de 8 semanas:
    - Opción 1: Full Body 3x/semana (pp. 36–55).
    - Opción 2: Upper / Lower 4x/semana (pp. 56–75).
    - Opción 3: Body-Part / PPL 5x/semana (pp. 76–96).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `trainingProgram`)

```typescript
export type NippardFundamentalsSplitChoice = 'full_body_3x' | 'upper_lower_4x' | 'body_part_ppl_5x';

export interface FundamentalsProgramContract {
  programName: 'Jeff Nippard Fundamentals Hypertrophy Program';
  durationWeeks: 8;
  splitChoice: NippardFundamentalsSplitChoice;
  targetWeeklyVolumePerMuscle: [10, 20];
  targetWeeklyFrequencyPerMuscle: [2, 3];
  compoundRirTarget: [1, 3]; // RPE 7 a 9
  isolationRirTarget: [0, 2]; // RPE 8 a 10
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `hypertrophy-fundamental-variables-triad`
- **id:** `hypertrophy-fundamental-variables-triad` | **tipo:** prescripción de hipertrofia
- **descripción:** La tríada fundamental de Nippard para maximizar la síntesis proteica muscular miofibrilar en principiantes e intermedios:
  1. **Volumen Semanal:** **$10\text{ a }20$ series de trabajo efectivas por grupo muscular a la semana**. Volúmenes $<10$ series son sub-óptimos; volúmenes $>20\text{--}22$ series generan "volumen basura" (fatiga desproporcionada sin estímulo adicional).
  2. **Frecuencia Semanal:** **$2\times\text{ a }3\times$ por grupo muscular por semana**, distribuyendo el volumen para mantener la calidad de cada serie (rendimiento y reclutamiento por serie altos).
  3. **Intensidad de Esfuerzo (RIR):** Cada serie debe ejecutarse a **RIR 1–3 (RPE 7–9)** en levantamientos libres axiales, y **RIR 0–2 (RPE 8–10)** en ejercicios guiados o aislamientos, asegurando que las fibras de alto umbral (Tipo IIx/IIa) sean plenamente reclutadas sin comprometer la seguridad articular.
- **confianza:** `explicit`
- **capítulo/página:** FAQ & Key Terms, pp. 8, 20–24.

---

## 4) Integración en Plan Maestro OS

1. **Selector de Programas Principiante/Intermedio (`src/data/schedules/`):**
   - Incorporar las 3 variantes (Full Body 3x, Upper/Lower 4x, Split 5x) como el bloque básico de introducción al entrenamiento resistido.
2. **Motor de Auditoría de Volumen:**
   - Validar que las rutinas creadas en el sistema respeten el rango de 10 a 20 series directas por músculo por semana.
