# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 22: Envejecimiento y Sarcopenia (pp. 322–340)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part III: Chapter 22 — Aging: Sarcopenia, Dynapenia, Motor Unit Loss, Denervation-Reinnervation & Countermeasures (pp. 322–340)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Fisiología del envejecimiento / Gerontología neuromuscular / Sarcopenia y Dinapenia
- **Alcance de esta sección:**
  - Definición y trayectoria cuantitativa de la Sarcopenia (pérdida involuntaria de masa muscular) y Dinapenia (pérdida acelerada de fuerza y potencia) (pp. 322–326).
  - Pérdida progresiva de motoneuronas alfa en el asta ventral de la médula espinal (pérdida del 30–50% a los 70–80 años) con predilección por unidades rápidas Tipo FF (pp. 326–330).
  - Ciclos continuos de desinervación-reinervación colateral: aumento del tamaño de las unidades lentas supervivientes y reagrupamiento por tipo de fibra (Type Grouping) (pp. 330–333).
  - Atrofia selectiva de fibras rápidas Tipo II (reducción del 25–50% en CSA de fibras IIa/IIx con preservación de fibras Tipo I) (pp. 324–326).
  - Mioesteatosis (infiltración grasa intramuscular) y fibrosis conectiva (p. 325).
  - Eficacia de las intervenciones de entrenamiento con sobrecarga progresiva (PRT) y entrenamiento de potencia en adultos mayores (pp. 336–339).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface SarcopeniaAgingTrajectoryContract {
  peakMassAgeDecade: [20, 30];
  onsetOfAcceleratedLossAgeYears: 50;
  post50AnnualLossRates: {
    muscleMassPercentPerYear: [0.8, 1.2]; // ~1.0%/año
    muscleStrengthPercentPerYear: [1.5, 3.0]; // ~2.0%/año
    musclePowerPercentPerYear: [3.0, 4.5]; // ~3.5%/año (la potencia es lo que mas rapido se pierde)
  };
  motoneuronLossPercentageBy80Years: [30, 50]; // Pérdida del 30% al 50% de somas alfa espinales
  selectiveTypeIIFiberAtrophyPercent: [25, 50]; // Atrofia marcada de fibras rapidas
  preservationOfSpecificTensionWithResistanceTraining: boolean;
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `sarcopenia-dynapenia-power-loss-hierarchy`
- **id:** `sarcopenia-dynapenia-power-loss-hierarchy` | **tipo:** envejecimiento / prescripción geriátrica
- **descripción:** A partir de los 50 años de edad, el deterioro neuromuscular sigue una jerarquía de pérdida acelerada:
  $$\text{Pérdida de Potencia Mecánica}\ (\sim 3.5\text{--}4.0\%/\text{año}) > \text{Pérdida de Fuerza Máxima}\ (\sim 2.0\%/\text{año}) > \text{Pérdida de Masa Muscular}\ (\sim 1.0\%/\text{año})$$
- **consecuencia de prescripción:** El entrenamiento de adultos mayores debe incluir no solo ejercicios de hipertrofia o fuerza submáxima, sino prioritariamente **entrenamiento de potencia con intención de máxima velocidad concéntrica** (Power Training al 40–60% 1RM) para preservar las unidades motoras tipo II remanentes y prevenir caídas.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 22, pp. 322–326, 336–338.

---

## 4) Integración en Plan Maestro OS

1. **Calculadora de Prescripción por Edad (`src/lib/fitness/`):**
   - Incorporar `sarcopenia-dynapenia-power-loss-hierarchy` para ajustar automáticamente el volumen y priorizar la velocidad de ejecución en usuarios $>50$ años.
2. **Grafo Anatómico:** Conectar los marcadores de sarcopenia con la evaluación de masa magra y dinamometría en el módulo de salud y longevidad.
