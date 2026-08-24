# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 1: Arquitectura Muscular y Anatomía de la Fibra (pp. 3–21)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part I: Chapter 1 — Muscle Architecture and Muscle Fiber Anatomy (pp. 3–21)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Fisiología muscular / Biomecánica celular / Biofísica del tejido contráctil
- **Población objetivo:** Fisiólogos del ejercicio, biomecánicos, preparadores físicos y desarrolladores de motores fisiológicos de prescripción
- **Alcance de esta sección:**
  - Arquitectura macroscópica: disposición de fibras (paralela, fusiforme, unipennada, bipennada, multipennada), ángulo de penación ($\theta$), longitud de fibra ($L_f$) vs longitud muscular ($L_m$), y Área de Sección Transversal Fisiológica (PCSA) (pp. 4–7).
  - Tejido conectivo muscular (epimisio, perimisio, endomisio) y transmisión lateral de fuerza miofascial (pp. 7–10).
  - Membrana basal, lámina basal, nicho de células satélite y plasmalema (sarcolema) (pp. 10–13).
  - Estructura ultraestructural de las miofibrillas y sarcómero (banda A, banda I, zona H, línea M, disco Z) (pp. 14–16).
  - Proteínas citoesqueléticas gigantes: titina (resorte molecular pasivo), nebulina (regla molecular de la actina), alfa-actinina y complejo distrofina-glicoproteínas (pp. 14–16).
  - Sistema tubular (túbulos T, cisternas terminales del retículo sarcoplásmico, tríadas) (pp. 16–18).
  - Organización multinuclear, teoría del dominio mionuclear y mitocondrias (subsarcolémicas e intermiofibrilares) (pp. 18–20).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface MuscleArchitectureContract {
  muscleId: string;
  architectureType: 'fusiform' | 'parallel' | 'unipennate' | 'bipennate' | 'multipennate';
  pennationAngleDegrees: number; // Ángulo theta en reposo (0° a 30°)
  fiberLengthMM: number; // Lf
  muscleLengthMM: number; // Lm
  fiberToMuscleLengthRatio: number; // Lf / Lm (ej. 0.2 a 0.9)
  physiologicalCrossSectionalAreaCM2: number; // PCSA
  specificTensionKPa: number; // Fuerza isométrica máxima por cm2 de PCSA (~200–250 kPa)
  dominantFiberType: 'Type_I' | 'Type_IIa' | 'Type_IIx' | 'Mixed';
  myonuclearDomainVolumeUM3: number; // ~15.000 a 30.000 um3 por núcleo
}

export interface SarcomereStructureContract {
  restingSarcomereLengthUM: number; // 2.0 a 2.2 um en reposo humano
  optimalLengthRangeUM: [number, number]; // [2.6, 2.8] um para máximo solapamiento
  titinIsoform: 'stiff' | 'compliant'; // Modula la rigidez pasiva
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `pcsa-and-maximal-isometric-force-calculation`
- **id:** `pcsa-and-maximal-isometric-force-calculation` | **tipo:** biomecánica / fuerza máxima
- **descripción:** La fuerza isométrica máxima ($F_0$) que un músculo puede generar es directamente proporcional a su Área de Sección Transversal Fisiológica ($\text{PCSA}$), calculada con el ángulo de penación, y a la tensión específica intrínseca del tejido muscular.
- **ecuación:**
  $$\text{PCSA}\ (\text{cm}^2) = \frac{\text{Masa Muscular}\ (\text{g}) \times \cos(\theta)}{\text{Densidad Muscular}\ (1.056\ \text{g/cm}^3) \times L_f\ (\text{cm})}$$
  $$F_0\ (\text{N}) = \text{PCSA}\ (\text{cm}^2) \times \text{Tensión Específica}\ (200\text{--}250\ \text{kPa})$$
- **valores numéricos:** 
  - Densidad del músculo esquelético de mamífero: $1.056\ \text{g/cm}^3$.
  - Tensión específica fisiológica: $20\text{--}25\ \text{N/cm}^2$ ($200\text{--}250\ \text{kPa}$).
  - Músculos altamente pennados (ej. sóleo, gastrocnemio, deltoides): mayor PCSA, ángulo $\theta \approx 15^\circ\text{--}25^\circ$, optimizados para fuerza/rigidez.
  - Músculos fusiformes/paralelos (ej. sartorio, bíceps braquial): menor PCSA pero $L_f$ larga ($L_f/L_m \approx 0.7\text{--}0.9$), optimizados para alta velocidad de acortamiento y amplio rango articular (ROM).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 1, pp. 4–7.

### Regla: `myonuclear-domain-hypertrophy-ceiling`
- **id:** `myonuclear-domain-hypertrophy-ceiling` | **tipo:** hipertrofia / biología molecular
- **descripción:** Cada mionúcleo en una fibra multinucleada controla la transcripción de un volumen citoplasmático finito ("dominio mionuclear"). El crecimiento muscular inicial puede ocurrir sin donación nuclear, pero la hipertrofia superior a un ~15–20% requiere obligatoriamente la activación y fusión de células satélite para añadir nuevos núcleos.
- **métrica principal:** `myonuclearDomainVolume` (~15.000 a 30.000 $\mu\text{m}^3$).
- **valores numéricos:** 
  - Límite de expansión celular sin nuevos núcleos: +15% a +20% de volumen.
  - La activación de células satélite es inducida por microlesión mecánica o alta tensión tensil excéntrica.
- **condiciones:** Modelos de hipertrofia por sobrecarga progresiva en humanos.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 1, pp. 18–20.

---

## 4) Estructuras anatómicas y ultraestructurales

### 1. El Sarcómero y sus Proteínas Estructurales
- **Banda A (Anisótropa):** Región central oscura que contiene los filamentos gruesos de miosina (longitud constante de ~1.6 $\mu\text{m}$) con o sin filamentos delgados superpuestos (p. 14).
- **Banda I (Isótropa):** Región clara que contiene filamentos delgados de actina sin miosina, bisectada por el disco Z (p. 14).
- **Zona H:** Franja central clara de la banda A con solo filamentos gruesos y sin puentes cruzados (p. 14).
- **Línea M:** Estructura transversal en el centro del sarcómero que ancla los filamentos gruesos; contiene miomesina y creatina quinasa miofibrilar (MM-CK) para regenerar ATP in situ (p. 14).
- **Titina (Titin / Conectina):** La proteína más grande del cuerpo humano (~3.000 kDa / 3 MDa). Se ancla en el disco Z y se extiende hasta la línea M. Actúa como un resorte molecular que mantiene los filamentos gruesos centrados durante la contracción y genera la tensión pasiva del músculo al estirarse más allá de la longitud de reposo (pp. 14–16).
- **Nebulina:** Proteína gigante filamentosa inextensible que corre a lo largo del filamento delgado, actuando como una regla molecular que especifica la longitud exacta de la actina (~1.0 $\mu\text{m}$ en mamíferos) (p. 16).
- **Complejo Distrofina-Glicoproteínas (DGC):** Conecta la actina citoesquelética subsarcolémica con la laminina de la lámina basal externa a través del sarcolema, permitiendo la transmisión lateral de la fuerza contráctil al endomisio (p. 12).

### 2. Tríadas y Acoplamiento Excitación-Contracción
- **Túbulos T (Transversos):** Invaginaciones periódicas tubulares del plasmalema a nivel de las uniones banda A - banda I (o discos Z según especie). Conducen el potencial de acción hacia el interior de la fibra (p. 16).
- **Cisternas Terminales del Retículo Sarcoplásmico (SR):** Almacenes de alta concentración de $\text{Ca}^{2+}$ unidas a calsecuestrina.
- **Tríada:** Estructura funcional compuesta por 1 túbulo T central flanqueado por 2 cisternas terminales del SR. En la interfaz se produce la interacción entre los receptores de dihidropiridina (DHPR / $\text{Ca}_V1.1$, sensores de voltaje en el túbulo T) y los receptores de rianodina (RyR1, canales de liberación de $\text{Ca}^{2+}$ en el SR) (pp. 16–18).

---

## 5) Cues técnicos y aplicaciones al entrenamiento

### Longitud del Fascículo y Arquitectura en Ejercicios Isométricos vs Dinámicos
- Los músculos con fibras largas en paralelo ($L_f$ alta, ej. isquiotibiales - bíceps femoral cabeza larga) son más vulnerables a daño por estiramiento excéntrico a grandes longitudes de sarcómero.
- El entrenamiento de fuerza con rango completo y fases excéntricas controladas induce **sarcomerogénesis en serie** (adición de sarcómeros longitudinales), aumentando $L_f$ y desplazando la curva longitud-tensión hacia la derecha, confiriendo protección contra distensiones musculares (hamstring strain).

---

## 6) Rehab / Prehab y Consideraciones Clínicas

### Distrofia Muscular de Duchenne (DMD)
- **Defecto Genético:** Ausencia total o mutación en la proteína `dystrophin`.
- **Fisiopatología:** Al perderse el puente mecánico entre el citoesqueleto y la matriz extracelular, las fuerzas de cizallamiento durante las contracciones musculares causan micro-rupturas recurrentes en el sarcolema, influjo masivo incontrolado de $\text{Ca}^{2+}$ extracelular, activación de calpaínas proteolíticas, necrosis progresiva de fibras y sustitución por tejido fibroadiposo.

---

## 7) Integración en Plan Maestro OS

1. **Grafo Anatómico:** Parametrizar cada músculo con su `architectureType`, `pennationAngle` y ratio $L_f/L_m$ para predecir si un ejercicio enfatiza reclutamiento de alta velocidad o de máxima tensión isométrica.
2. **Motor de Progresiones:** Utilizar la regla `myonuclear-domain-hypertrophy-ceiling` para modular los ciclos de sobrecarga y periodización del volumen semanal en usuarios avanzados.
