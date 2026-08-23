# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 12 y 13: Unidades Motoras y Reclutamiento de Henneman (pp. 175–207)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part II: Chapter 12 (Motor Units) & Chapter 13 (Motor Unit Recruitment & Size Principle) (pp. 175–207)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Neurofisiología motora / Clasificación de unidades motoras / Principio del tamaño de Henneman
- **Población objetivo:** Científicos del deporte, neurólogos, entrenadores de fuerza y modeladores de control motor
- **Alcance de esta sección:**
  - Definición clásica de Unidad Motora (Sherrington, 1925) y ratio de inervación (pp. 175–177).
  - Clasificación tripartita de Burke: Tipo S (lenta / resistente a la fatiga), Tipo FR (rápida / resistente a la fatiga) y Tipo FF (rápida / fatigable) (pp. 177–188).
  - Propiedades biofísicas de las motoneuronas (resistencia de entrada $R_{\text{in}}$, reobase, hiperpolarización post-potencial AHP, velocidad de conducción) vs propiedades mecánicas de las fibras musculares asociadas (MHC-I, MHC-IIa, MHC-IIx) (pp. 182–192).
  - Principio del Tamaño de Henneman (Henneman's Size Principle, 1965): orden estereotipado de reclutamiento basado en la Ley de Ohm ($\Delta V = I \cdot R_{\text{in}}$) (pp. 195–200).
  - Graduación de la fuerza muscular: Reclutamiento espacial vs Codificación de frecuencia (Rate Coding) y fusión tetánica (pp. 200–207).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export type MotorUnitClassificationType = 'Type_S_Slow' | 'Type_FR_FastResistant' | 'Type_FF_FastFatigable';

export interface MotorUnitProfileContract {
  type: MotorUnitClassificationType;
  myosinHeavyChainIsoform: 'MHC-I' | 'MHC-IIa' | 'MHC-IIx';
  motoneuronSomaSize: 'small' | 'medium' | 'large';
  inputResistanceMOhms: number; // Alto en Tipo S (~5-10 MOhm) vs bajo en Tipo FF (~1-2 MOhm)
  rheobaseCurrentNA: number;    // Bajo en Tipo S (<5 nA) vs alto en Tipo FF (>15-30 nA)
  afterhyperpolarizationDurationMS: number; // 50-100 ms (S) vs 20-30 ms (FF)
  conductionVelocityMS: number; // 50-70 m/s (S) vs 90-120 m/s (FF)
  twitchContractionTimeMS: number; // 80-120 ms (S) vs 20-40 ms (FF)
  fatigueIndexBurke: number;   // >0.75 (S) vs 0.25-0.75 (FR) vs <0.25 (FF)
  recruitmentThresholdPercentageMVC: [number, number]; // [0%, 20%] (S) vs [20%, 60%] (FR) vs [60%, 100%] (FF)
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `henneman-size-principle-recruitment-order`
- **id:** `henneman-size-principle-recruitment-order` | **tipo:** control motor / reclutamiento
- **descripción:** Las unidades motoras se reclutan siempre en un orden jerárquico fijo y predecible desde la más pequeña y lenta (Tipo S / MHC-I) hasta la más grande y rápida (Tipo FF / MHC-IIx) a medida que aumenta la demanda de fuerza voluntaria o la fatiga acumulada.
- **fundamento biofísico (Ley de Ohm):**
  $$\Delta V = I_{\text{sináptica}} \times R_{\text{in}}$$
  Dado que las motoneuronas pequeñas tienen un área de membrana reducida, su resistencia de entrada ($R_{\text{in}}$) es muy alta. Por consiguiente, una misma corriente sináptica excitatoria ($I$) produce una despolarización ($\Delta V$) mucho mayor en la motoneurona pequeña, alcanzando el umbral de disparo antes que las motoneuronas grandes.
- **desreclutamiento:** En la relajación, el desreclutamiento ocurre en orden inverso estricto (las unidades FF se apagan primero).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 13, pp. 195–200.

### Regla: `force-gradation-dual-mechanism`
- **id:** `force-gradation-dual-mechanism` | **tipo:** fisiología / modulación de fuerza
- **descripción:** El incremento de la fuerza voluntaria desde 0% hasta 100% de la Contracción Voluntaria Máxima (MVC) depende de dos mecanismos acoplados:
  1. *Reclutamiento espacial:* Adición de nuevas unidades motoras (cubre predominantemente desde 0% hasta ~60–80% MVC en músculos grandes de las extremidades, o hasta ~30–50% MVC en músculos pequeños de la mano).
  2. *Rate Coding (Frecuencia de descarga):* Aumento de la frecuencia de disparo de las motoneuronas ya activas (desde ~8–12 Hz basales hasta ~30–60 Hz sostenidos, o >100 Hz en descargas fásicas balísticas).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 13, pp. 200–205.

---

## 4) Matriz Comparativa de Unidades Motoras (Clasificación de Burke)

| Propiedad / Característica | Tipo S (Lenta) | Tipo FR (Rápida Resistente) | Tipo FF (Rápida Fatigable) | Páginas |
|---|---|---|---|---|
| **Cadena Pesada de Miosina** | MHC-I (Slow) | MHC-IIa (Fast) | MHC-IIx (Fastest humano) | pp. 177–180 |
| **Tamaño del Soma Neuronal** | Pequeño (30–45 $\mu\text{m}$) | Mediano (45–55 $\mu\text{m}$) | Grande (55–70 $\mu\text{m}$) | p. 182 |
| **Resistencia de Entrada ($R_{\text{in}}$)** | Alta ($\sim 5\text{--}10\ \text{M}\Omega$) | Intermedia ($\sim 3\text{--}5\ \text{M}\Omega$) | Baja ($\sim 1\text{--}2\ \text{M}\Omega$) | p. 183 |
| **Corriente de Reobase** | Muy baja (<5 nA) | Intermedia (5–15 nA) | Alta (>15–30 nA) | p. 183 |
| **Duración del AHP** | Larga (50–100 ms) | Intermedia (30–50 ms) | Corta (20–30 ms) | p. 184 |
| **Velocidad de Conducción Axonal** | 50–70 m/s | 70–90 m/s | 90–120 m/s | p. 184 |
| **Fuerza de la Sacudida (Twitch)** | Pequeña | Media / Alta | Máxima | p. 185 |
| **Tiempo de Contracción ($T_c$)** | Lento (80–120 ms) | Rápido (30–50 ms) | Muy rápido (20–40 ms) | p. 185 |
| **Índice de Fatiga de Burke ($FI$)** | $>0.75$ (Sin fatiga en 2 min) | $0.25\text{--}0.75$ (Resistente) | $<0.25$ (Cae >75% en 2 min) | p. 186 |
| **Contenido de Mioglobina / Capilares** | Muy alto (Color rojo oscuro) | Alto (Color rojo) | Bajo (Color blanco/pálido) | p. 188 |
| **Capacidad Oxidativa Mitocondrial** | Muy alta (SDH, Citrato sintasa) | Alta | Baja | p. 189 |
| **Capacidad Glucolítica** | Baja | Alta (PFK, LDH) | Máxima (LDH, Fosforilasa) | p. 189 |

---

## 5) Cues técnicos y aplicaciones al entrenamiento

### Reclutamiento de Unidades Motoras de Alto Umbral (FF / MHC-IIx)
- Para reclutar y estimular las fibras musculares rápidas tipo IIx (las de mayor potencial de crecimiento hipertrófico y fuerza), el entrenamiento debe cumplir al menos una de dos condiciones fisiológicas:
  1. *Cargas pesadas ($\ge 80\text{--}85\%$ 1RM):* El alto requerimiento de fuerza recluta las unidades FF desde la primera repetición debido al principio del tamaño.
  2. *Cargas ligeras/moderadas llevadas al fallo concéntrico (RIR 0–1 / RPE 9–10):* A medida que las unidades Tipo S y FR se fatigan metabólicamente durante la serie, el SNC se ve obligado a reclutar las unidades FF de alto umbral para mantener la producción de fuerza requerida.

---

## 6) Integración en Plan Maestro OS

1. **Algoritmo de Fatiga y RIR (`src/lib/fitness/`):**
   - Utilizar el Principio de Henneman para fundamentar por qué series con RPE 8–10 con cargas moderadas (10–15 RM) logran reclutamiento completo de unidades motoras equivalentes a cargas pesadas de 3–5 RM.
2. **Grafo de Conocimiento:** Vincular las propiedades biofísicas de las unidades motoras tipo I, IIa y IIx con los tiempos de recuperación metabólica entre series (3–5 min para FF vs 60–90 seg para S).
