# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 15: Fatiga Muscular Central y Periférica (pp. 226–244)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part III: Chapter 15 — Fatigue: Central Fatigue, Peripheral Sites, Excitation-Contraction Coupling Failure & Recovery (pp. 226–244)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Fisiología del ejercicio / Mecanismos de fatiga neuromuscular / Biofísica del acoplamiento E-C
- **Alcance de esta sección:**
  - Definición operativa de Fatiga Muscular (reducción reversible de la capacidad de generar fuerza o potencia inducida por el ejercicio) (pp. 226–227).
  - Fatiga Central: drive cortical, inhibición refleja por aferencias metabólicas Grupo III/IV y técnica de interpolación de sacudida (ITT - Interpolated Twitch Technique) (pp. 227–228).
  - Fatiga Periférica y sus loci anatómicos:
    - Propagación del potencial de acción sarcolémico y acumulación de $\text{K}^+$ en los túbulos T (pp. 228–233).
    - Falla del acoplamiento Excitación-Contracción (E-C coupling failure) (pp. 233–236).
    - Precipitación de fosfato de calcio ($\text{Ca}\text{P}_i$) dentro del retículo sarcoplásmico (p. 235).
    - Efectos directos del fosfato inorgánico libre ($\text{P}_i$) sobre los puentes cruzados y la sensibilidad al $\text{Ca}^{2+}$ (pp. 236–240).
    - Depresión de la fuerza a baja frecuencia (PLFFD / Low-Frequency Fatigue) (pp. 240–241).
  - Cinética y fases de la recuperación post-fatiga (pp. 241–244).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export type FatigueLocus = 'central-supraspinal' | 'central-spinal' | 't-tubule-conduction' | 'ec-coupling-RyR1' | 'cross-bridge-Pi-inhibition' | 'plffd-structural';

export interface VoluntaryActivationContract {
  voluntaryActivationPercentage: number; // VA% = (1 - InterpolatedTwitch / RestingTwitch) * 100
  normalRestingBaselineVA: number; // 95% a 100% en individuos entrenados
  centralFatigueThresholdVA: number; // <85% a 90% indica fatiga central significativa
}

export interface PeripheralFatigueMechanismsContract {
  intracellularPiRestingMM: 3.0;
  intracellularPiFatiguedMM: 30.0; // Aumento x10 que deprime la fuerza del puente cruzado en 30-40%
  myoplasmicPHResting: 7.0;
  myoplasmicPHFatigued: 6.4;
  tTubuleExtracellularPotassiumMM: number; // De 4.0 mM a >10-12 mM en fatiga extrema
  prolongedLowFrequencyForceDepressionHours: number; // Persiste de 24 a 72 horas
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `interpolated-twitch-technique-central-fatigue`
- **id:** `interpolated-twitch-technique-central-fatigue` | **tipo:** neurofisiología / evaluación de fatiga
- **descripción:** La activación voluntaria del pool de motoneuronas se cuantifica aplicando una estimulación eléctrica o magnética supramáxima al nervio motor durante una Contracción Voluntaria Máxima (MVC). Si se evoca una fuerza adicional suplementaria ("interpolated twitch"), indica que el reclutamiento o la frecuencia de descarga del SNC es incompleta (fatiga central).
- **ecuación:**
  $$\text{Activación Voluntaria}\ (\%) = \left( 1 - \frac{\text{Fuerza de la Sacudida Interpolada}}{\text{Fuerza de la Sacudida Potenciada en Reposo}} \right) \times 100$$
- **valores numéricos:** 
  - Sujeto fresco entrenado: **$95\%\text{ a }100\%$** de activación.
  - Fatiga central severa (ej. tras carreras de larga duración o sesiones prolongadas de alto volumen): la activación cae al **$70\%\text{ a }85\%$**.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 15, pp. 227–228.

### Regla: `inorganic-phosphate-primary-peripheral-fatigue-driver`
- **id:** `inorganic-phosphate-primary-peripheral-fatigue-driver` | **tipo:** biofísica / fatiga celular
- **descripción:** Durante el ejercicio de alta intensidad, el fosfato inorgánico libre ($\text{P}_i$) derivado del desdoblamiento de la fosfocreatina y la hidrólisis de ATP se eleva desde $\sim 3\text{ mM}$ hasta $>30\text{ mM}$. El $\text{P}_i$ libre es el **principal causante molecular de la fatiga periférica rápida** a través de tres mecanismos sinérgicos:
  1. Revierte el paso del golpe de fuerza del ciclo de Lymn-Taylor, reduciendo la fuerza unitaria de cada puente cruzado en un **$30\%\text{ a }40\%$**.
  2. Disminuye la sensibilidad de la Troponina C al $\text{Ca}^{2+}$ (desplaza la curva $p\text{Ca}$-tensión a la derecha).
  3. Difunde al interior del retículo sarcoplásmico, precipitándose con el $\text{Ca}^{2+}$ libre ($\text{Ca}\text{P}_i$) y reduciendo la cantidad de calcio disponible para su liberación por los canales RyR1.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 15, pp. 235–240.

### Regla: `prolonged-low-frequency-force-depression-plffd`
- **id:** `prolonged-low-frequency-force-depression-plffd` | **tipo:** fisiología / daño neuromuscular
- **descripción:** Tras sesiones con alto componente excéntrico o fatiga metabólica extrema, se produce una depresión prolongada de la fuerza evocada a bajas frecuencias de estimulación (10–20 Hz) que persiste durante **24 a 72 horas**, a pesar de que la fuerza a altas frecuencias (80–100 Hz) y los metabolitos celulares ($\text{ATP}$, $\text{PCr}$, $\text{pH}$) se hayan normalizado por completo.
- **causa molecular:** Disrupción microestructural de la tríada y proteólisis de proteínas de anclaje (junctofilina) por calpaínas activadas por el $\text{Ca}^{2+}$.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 15, pp. 240–242.

---

## 4) Fases de Recuperación Muscular Post-Fatiga

| Parámetro Fisiológico | Tiempo de Recuperación ($t_{1/2}$) | Tiempo para Restauración 100% | Páginas |
|---|---|---|---|
| **Resíntesis de Fosfocreatina (PCr)** | 30 segundos | 3 a 5 minutos | pp. 241–242 |
| **Normalización del pH y Lactato Intracelular** | 5 a 8 minutos | 20 a 30 minutos | pp. 241–242 |
| **Aclaramiento de Fosfato Inorgánico ($\text{P}_i$)** | 2 a 4 minutos | 10 a 15 minutos | p. 242 |
| **Restauración de la Activación Central (SNC)** | 10 a 20 minutos | 1 a 2 horas (sesiones estándar) | p. 242 |
| **Resíntesis de Glucógeno Muscular** | 5 a 10 horas | 24 a 48 horas (con 7–10 g/kg CHO) | p. 243 |
| **Resolución de la Fatiga de Baja Frecuencia (PLFFD)** | 12 a 24 horas | 48 a 72 horas | pp. 243–244 |

---

## 5) Integración en Plan Maestro OS

1. **Algoritmo de Readiness y Frecuencia Semanal (`src/lib/fitness/`):**
   - Utilizar `prolonged-low-frequency-force-depression-plffd` para calcular el tiempo mínimo de recuperación entre sesiones del mismo patrón muscular (ej. 48–72 h tras sesiones con alto volumen excéntrico o RPE 10).
2. **Motor de Bio-Feedback Clínico:** Vincular la fatiga central evaluada con la modulación de volumen diario del usuario.
