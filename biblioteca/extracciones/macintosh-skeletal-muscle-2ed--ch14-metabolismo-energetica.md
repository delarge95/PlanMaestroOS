# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 14: Metabolismo y Bioenergética Muscular (pp. 208–223)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part II: Chapter 14 — Muscle Metabolism: Energy Requirements, ATP Replenishment Systems & Metabolic Flux (pp. 208–223)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Bioenergética muscular / Bioquímica metabólica del ejercicio / Cinética de resíntesis de ATP
- **Alcance de esta sección:**
  - Demanda de ATP por las ATPasas musculares (Miosina ATPasa ~70%, SERCA $\text{Ca}^{2+}$-ATPasa ~20–25%, $\text{Na}^+$-$\text{K}^+$ ATPasa ~5–10%) (pp. 208–210).
  - Sistema de los fosfágenos (ATP-Fosfocreatina y adenilato quinasa/miokinasa) (pp. 210–213).
  - Glucogenólisis y glucólisis rápida: regulación de la glucógeno fosforilasa, PFK-1 y reacción de la lactato deshidrogenasa (LDH) (pp. 213–216).
  - Fosforilación oxidativa mitocondrial (ciclo de Krebs, beta-oxidación de ácidos grasos y cadena de transporte de electrones) (pp. 216–219).
  - Potencia vs Capacidad metabólica y tasas de flujo de generación de ATP por sistema energético (pp. 219–223).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface EnergySystemsKineticsContract {
  intramuscularAtpStoreMmolKgWetWeight: 5.0; // ~5 a 6 mmol/kg
  intramuscularPcrStoreMmolKgWetWeight: 22.0; // ~20 a 25 mmol/kg
  intramuscularGlycogenStoreMmolKgWetWeight: 80.0; // ~70 a 100 mmol/kg (~300-500 mmol/kg dry)
  systemsFluxRatesMmolAtpKgSec: {
    phosphagenPcrSystem: 2.8; // Maxima potencia (~2.5 - 3.2 mmol ATP/kg/s)
    anaerobicGlycolysis: 1.6; // Potencia intermedia (~1.2 - 2.0 mmol ATP/kg/s)
    mitochondrialOxidative: 0.7; // Potencia baja / maxima capacidad (~0.5 - 0.8 mmol ATP/kg/s)
  };
  pcrResynthesisHalfLifeSeconds: 30; // t1/2 ~30 segundos; 100% en 3 a 5 minutos
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `atp-generation-power-vs-capacity-hierarchy`
- **id:** `atp-generation-power-vs-capacity-hierarchy` | **tipo:** bioenergética / sistemas energéticos
- **descripción:** Existe un trade-off biofísico inverso estricto entre la tasa máxima de flujo de producción de ATP (potencia metabólica en mmol ATP/kg/s) y la cantidad total de energía disponible (capacidad metabólica en kJ):
  $$\text{Tasa de Flujo: Fosfocreatina} > \text{Glucólisis} > \text{Fosforilación Oxidativa}$$
  $$\text{Capacidad Total: Fosforilación Oxidativa} > \text{Glucólisis} > \text{Fosfocreatina}$$
- **valores numéricos:** 
  - La reserva celular de ATP ($\sim 5\text{--}6\ \text{mmol/kg}$) se agotaría en **$<1.5\text{ segundos}$** de contracción tetánica máxima sin resíntesis continua.
  - La fosfocreatina (PCr) mantiene el ATP celular constante durante los primeros **5 a 10 segundos** de esfuerzo all-out.
  - La glucólisis alcanza su pico de flujo a los **15 a 30 segundos**.
  - El sistema oxidativo mitocondrial predomina en esfuerzos sostenidos **$>60\text{ a }90\text{ segundos}$**.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 14, pp. 210–222.

### Regla: `pcr-resynthesis-biphasic-kinetics`
- **id:** `pcr-resynthesis-biphasic-kinetics` | **tipo:** fisiología / recuperación entre series
- **descripción:** La resíntesis de fosfocreatina (PCr) post-ejercicio es un proceso puramente dependiente de la fosforilación oxidativa mitocondrial (requiere oxígeno) y sigue una cinética bifásica:
  - Fase rápida: $t_{1/2} \approx 25\text{--}35\text{ segundos}$ ($\sim 50\%$ restaurado a los 30 s; $\sim 70\text{--}75\%$ al 1 min).
  - Fase lenta: recuperación del 95–100% de la reserva inicial toma entre **3 y 5 minutos**.
- **consecuencia:** Intervalos de descanso $<60\text{ s}$ impiden la resíntesis completa de PCr, reduciendo la fuerza y velocidad máxima en series subsiguientes.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 14, pp. 211–213.

---

## 4) Regulación Enzimática del Metabolismo Muscular

### 1. Reacciones de Emergencia Energética
- **Creatina Quinasa (CK):** $\text{PCr} + \text{ADP} + \text{H}^+ \leftrightarrow \text{Creatina} + \text{ATP}$. Al amortiguar el ADP en los primeros segundos, esta reacción consume un protón ($\text{H}^+$), alcalinizando transitoriamente el mioplasma antes de que la glucólisis y la hidrólisis masiva de ATP acidifiquen el medio (p. 210).
- **Adenilato Quinasa (Miokinasa - AK):** $2\text{ ADP} \leftrightarrow \text{ATP} + \text{AMP}$. El incremento resultante de AMP libre ($\text{AMP}_f$) actúa como el más potente activador alostérico intracelular de la proteína quinasa dependiente de AMP (**AMPK**), activando la translocación de transportadores GLUT-4 y la beta-oxidación (p. 211).

### 2. Puntos de Control Alostérico de la Glucólisis
- **Glucógeno Fosforilasa:** Activada alostéricamente por $\text{AMP}$ y estimulada hormonalmente por adrenalina a través de la fosforilasa quinasa (activada por $\text{Ca}^{2+}$ vía subunidad de calmodulina) (p. 214).
- **Fosfofructoquinasa-1 (PFK-1):** Enzima limitante de la glucólisis; activada por $\text{AMP}$, $\text{ADP}$, $\text{P}_i$ y fructosa-2,6-bisfosfato; fuertemente inhibida por altos niveles de ATP y por acidosis ($\text{pH} < 6.5$) (p. 215).
- **Lactato Deshidrogenasa (LDH):** Cataliza la reducción del piruvato a lactato consumiendo $\text{NADH} + \text{H}^+$, lo cual regenera el $\text{NAD}^+$ citosólico imprescindible para que la enzima gliceraldehído-3-fosfato deshidrogenasa (GAPDH) continúe operando y no se detenga la producción de ATP glucolítico (p. 215).

---

## 5) Cues técnicos y aplicaciones al entrenamiento

### Dosificación de Descansos según Objetivo Metabólico
- **Fuerza / Potencia Pura (Sistema Fosfágenos):** Descansos de **3 a 5 minutos** entre series pesadas ($\ge 85\%$ 1RM) para garantizar $\ge 95\%$ de resíntesis mitocondrial de PCr y mantener la tasa de desarrollo de fuerza (RFD).
- **Hipertrofia / Estrés Metabólico (Glucólisis Anaeróbica):** Descansos de **60 a 90 segundos** para inducir acumulación controlada de metabolitos ($\text{P}_i$, $\text{H}^+$, lactato) que potencian la señalización anabólica y el reclutamiento forzado de unidades motoras de alto umbral por fatiga previa.

---

## 6) Integración en Plan Maestro OS

1. **Calculadora de Descansos (`src/lib/fitness/`):**
   - Utilizar `pcr-resynthesis-biphasic-kinetics` para sugerir automáticamente tiempos de descanso dinámicos entre series según el tipo de ejercicio y la intensidad porcentual de 1RM.
2. **Grafo de Conocimiento:** Vincular los tres sistemas energéticos con los sustratos nutricionales correspondientes (fosfocreatina, carbohidratos/glucógeno, ácidos grasos) en la sección de nutrición deportiva.
