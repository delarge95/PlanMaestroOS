# Neuromechanics of Human Movement (4ª ed.) — Cap. 5 y 6: Membranas, EMG y Unidades Motoras (pp. 179–248)

> **sourceId:** `enoka-neuromechanics-4ed`
> **Sección:** Part II: Chapter 5 (Excitable Membranes & EMG) & Chapter 6 (Muscle and Motor Units) (pp. 179–248)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autor:** Roger M. Enoka (University of Colorado at Boulder)

---

## 1) Metadatos

- **Libro:** Neuromechanics of Human Movement
- **Edición y Año:** 4ª edición (2008 / Human Kinetics)
- **Disciplina:** Neurofisiología celular / Electromiografía (EMG) / Mecánica de unidades motoras
- **Alcance de esta sección:**
  - Propiedades pasivas de membrana: constante de tiempo ($\tau = R_m \cdot C_m$) y constante de longitud ($\lambda$) (pp. 179–185).
  - Fundamentos de Electromiografía (EMG): potencial de acción de unidad motora (MUAP), EMG de superficie vs intramuscular, procesamiento de señal (filtrado 10–500 Hz, rectificación, RMS) y relación EMG-Fuerza (pp. 185–204).
  - Mecánica de la sacudida (twitch) vs tétanos completo y ratio sacudida-tétanos ($P_t/P_0 \approx 0.15\text{--}0.30$) (pp. 205–218).
  - La propiedad "Catch-like" y los dobletes de descarga (descargas iniciales con intervalo $<10\text{ ms}$) en la tasa de desarrollo de fuerza (RFD) (pp. 218–228).
  - Sincronización de unidades motoras y rotación de unidades motoras durante contracciones submáximas prolongadas (pp. 228–248).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface EmgSignalProcessingContract {
  filterBandpassHz: [10, 500]; // Rango estandar SENIAM para sEMG
  samplingFrequencyMinHz: 1000; // Nyquist >= 1000 Hz
  amplitudeNormalizationMethod: 'percentage_of_maximal_voluntary_isometric_contraction_MVIC';
  emgToForceRelationType: 'linear_in_small_muscles' | 'curvilinear_in_large_limb_muscles';
}

export interface CatchLikePropertyContract {
  doubletDischargeIntervalMS: [5, 10]; // Intervalo inter-espiga de 5 a 10 ms
  forceRiseAccelerationMultiplier: [2.0, 3.0]; // Duplica o triplica la tasa de desarrollo de fuerza inicial (RFD)
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `catch-like-property-doublet-rfd-enhancement`
- **id:** `catch-like-property-doublet-rfd-enhancement` | **tipo:** control motor / tasa de desarrollo de fuerza
- **descripción:** Al inicio de una contracción muscular rápida o balística, la motoneurona descarga frecuentemente un "doblete" (dos potenciales de acción sucesivos separados por un intervalo extremadamente corto de **5 a 10 ms**, equivalente a una frecuencia instantánea de **100 a 200 Hz**).
- **efecto mecánico:** Este doblete satura instantáneamente los sitios de unión de $\text{Ca}^{2+}$ en la Troponina C y tensa rápidamente los elementos elásticos en serie, **duplicando o triplicando la Tasa de Desarrollo de Fuerza (RFD)** y aumentando la fuerza pico de la sacudida tetánica subsiguiente (efecto "catch-like").
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 218–224.

### Regla: `emg-amplitude-force-non-linearity`
- **id:** `emg-amplitude-force-non-linearity` | **tipo:** biomecánica / interpretación de EMG
- **descripción:** En músculos grandes de las extremidades (ej. bíceps braquial, cuádriceps), la relación entre la amplitud rectificada suavizada del EMG (RMS) y la fuerza muscular es **no lineal (curvilínea hacia arriba)** debido al reclutamiento continuo de unidades motoras con potenciales de acción progresivamente más grandes y a la no linealidad de la suma vectorial de los potenciales en la superficie cutánea.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 5, pp. 195–202.

---

## 4) Integración en Plan Maestro OS

1. **Algoritmos de Rate of Force Development (RFD) (`src/lib/fitness/`):**
   - Utilizar `catch-like-property-doublet-rfd-enhancement` para justificar el entrenamiento balístico con intención de máxima aceleración en los primeros 100 ms del movimiento.
2. **Grafo Anatómico:** Conectar las propiedades de firing rate y EMG de los músculos con los perfiles de reclutamiento de cada patrón motor.
