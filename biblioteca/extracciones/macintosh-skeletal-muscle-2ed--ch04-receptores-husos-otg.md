# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 4: Receptores Musculares (Husos y OTG) (pp. 42–51)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part I: Chapter 4 — Muscle Receptors: Muscle Spindle, Golgi Tendon Organ & Free Nerve Endings (pp. 42–51)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Neurofisiología sensorial muscular / Propiocepción y control espinal del movimiento
- **Población objetivo:** Especialistas en control motor, biomecánica del reflejo, prehabilitación y prescripción deportiva
- **Alcance de esta sección:**
  - Huso muscular (Muscle Spindle): disposición en paralelo, cápsula conectiva y densidad por grupo muscular (pp. 42–43).
  - Fibras intrafusales: fibras de bolsa nuclear dinámica ($\text{bag}_1$), bolsa nuclear estática ($\text{bag}_2$) y de cadena nuclear (chain) (pp. 43–45).
  - Inervación sensitiva del huso: aferencias primarias Grupo Ia (sensibilidad dinámica a la velocidad de estiramiento + longitud) y secundarias Grupo II (sensibilidad a la longitud estática) (pp. 45–46).
  - Inervación motora fusimotora: motoneuronas gamma ($\gamma$) dinámicas y estáticas, y el principio de coactivación alfa-gamma ($\alpha\text{-}\gamma$) durante la contracción voluntaria (pp. 46–48).
  - Órgano Tendinoso de Golgi (OTG / GTO): disposición en serie en la unión miotendinosa, aferencia Grupo Ib e inhibición autógena (pp. 48–49).
  - Terminaciones nerviosas libres: aferencias mecánicas Grupo III ($A\delta$) y metabólicas/nociceptivas Grupo IV (fibras C amielínicas) en el reflejo presor del ejercicio (pp. 49–50).
  - Integración de propioceptores en la locomoción y control del tono muscular (pp. 50–51).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface MuscleSpindleContract {
  spindleDensityCategory: 'high-fine-control' | 'moderate' | 'low-power';
  spindlesPerGramTissue: number; // Ej. 100+ en suboccipitales/mano vs <5 en gluteos
  primaryAfferentType: 'Group_Ia_annulospiral';
  secondaryAfferentType: 'Group_II_flowerspray';
  fusimotorCoactivationEnabled: boolean; // Coactivacion alfa-gamma activa
}

export interface GolgiTendonOrganContract {
  arrangement: 'in-series-musculotendinous-junction';
  afferentFiberType: 'Group_Ib';
  conductionVelocityMS: number; // 70 a 120 m/s
  monitoredTensionThresholdN: number; // Sensibilidad a la fuerza de 1 sola fibra (~0.1 a 1 mN)
  spinalReflexType: 'autogenic-inhibition-disynaptic';
}

export interface MuscleMetaboreceptorsContract {
  afferentGroup: 'Group_IV_unmyelinated';
  sensedMetabolites: ('H+' | 'lactate' | 'ATP' | 'bradykinin' | 'inorganic-phosphate' | 'potassium');
  reflexEffect: 'exercise-pressor-reflex' | 'sympathetic-vasoconstriction-elevation';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `alpha-gamma-coactivation-spindle-tension`
- **id:** `alpha-gamma-coactivation-spindle-tension` | **tipo:** control motor / propiocepción
- **descripción:** Durante cualquier contracción muscular voluntaria concéntrica, el SNC envía impulsos simultáneos a las motoneuronas alfa ($\alpha$) para acortar las fibras extrafusales y a las motoneuronas gamma ($\gamma$) para acortar los polos de las fibras intrafusales. Esto previene que el huso muscular quede laxo ("silent period") y mantiene la sensibilidad propioceptiva a lo largo de todo el rango de acortamiento.
- **métrica principal:** `spindleDischargeFidelity`
- **valores numéricos:** 
  - Sin coactivación gamma: el acortamiento extrafusal anularía las descargas de las fibras Ia a acortamientos tan pequeños como un ~1–2% de $L_0$.
  - Con coactivación gamma: la aferencia Ia mantiene una frecuencia de disparo constante de 20 a 100 Hz proporcional a la velocidad y posición articular.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 4, pp. 46–48.

### Regla: `gto-tension-sensitivity-and-autogenic-inhibition`
- **id:** `gto-tension-sensitivity-and-autogenic-inhibition` | **tipo:** biomecánica / seguridad neurológica
- **descripción:** El Órgano Tendinoso de Golgi (OTG) está dispuesto estrictamente en serie con 10 a 20 fibras musculares pertenecientes a diferentes unidades motoras. Es extraordinariamente sensible a la contracción activa (umbral de activación <0.1 a 1 mN por fibra), mientras que es relativamente insensible al estiramiento pasivo general.
- **métrica principal:** `gtoActiveForceSensitivityThreshold` (<1 mN activo vs >2–5 N pasivo).
- **mecanismo reflejo:** Aferencias Ib activan interneuronas inhibidoras en la médula espinal que hiperpolarizan el pool de motoneuronas del músculo agonista (inhibición autógena) y facilitan a los antagonistas.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 4, pp. 48–49.

---

## 4) Estructuras anatómicas y receptores

### 1. Arquitectura del Huso Muscular (Muscle Spindle)
- **Disposición:** En paralelo con las fibras extrafusales, encerrado en una cápsula fusiforme de tejido conectivo llena de líquido viscoso (p. 42).
- **Fibras Intrafusales:**
  1. *Fibras de bolsa nuclear dinámica ($\text{bag}_1$):* Núcleos agrupados en la región ecuatorial central. Inervadas por axones aferentes Ia y motoneuronas $\gamma$ dinámicas. Responden a la tasa de cambio de longitud (velocidad de estiramiento) (p. 44).
  2. *Fibras de bolsa nuclear estática ($\text{bag}_2$):* Inervadas por axones Ia y II y motoneuronas $\gamma$ estáticas. Responden a la longitud estática del músculo (p. 44).
  3. *Fibras de cadena nuclear (Nuclear Chain):* Fibras más delgadas con núcleos en hilera simple. Inervadas por axones Ia y II y motoneuronas $\gamma$ estáticas (p. 44).
- **Densidad por Músculo:** Los músculos de control postural fino y manipulación precisa (músculos suboccipitales del cuello, intrínsecos de la mano, extraoculares) poseen la densidad más alta (>50–120 husos/gramo), mientras que los músculos de potencia masiva (glúteo mayor, dorsal ancho, gastrocnemio) poseen menos de 5 husos/gramo (p. 43).

---

### 2. Órgano Tendinoso de Golgi (OTG)
- **Disposición:** En serie en la unión miotendinosa o en las inserciones aponeuróticas. Fibras colágenas trenzadas envueltas por terminaciones ramificadas desnudas del axón Ib (p. 48).
- **Mecanismo de Transducción:** La tensión muscular generada por las fibras extrafusales tensa las trenzas de colágeno, comprimiendo físicamente los terminales Ib y abriendo canales catiónicos mecano-sensibles que generan el potencial generador (p. 48).

---

### 3. Receptores Metabólicos y Nociceptivos (Grupo III y IV)
- **Fibras Grupo III ($A\delta$, mielinizadas finas):** Velocidad 5–30 m/s; mecanorreceptores de presión y deformación intramuscular profunda (p. 49).
- **Fibras Grupo IV (C, amielínicas):** Velocidad 0.5–2.0 m/s; quimiorreceptores y nociceptores sensibles a la acumulación de $\text{H}^+$, lactato, $\text{K}^+$, bradicinina y adenosina. Disparan el **Reflejo Presor del Ejercicio**, elevando la frecuencia cardíaca, la presión arterial media y la vasoconstricción simpática sistémica durante el esfuerzo isquémico o de alta intensidad (pp. 49–50).

---

## 5) Cues técnicos y aplicaciones al entrenamiento

### El Reflejo Miotático en el Ciclo Estiramiento-Acortamiento (CEA / Plyometrics)
- Durante movimientos pliométricos rápidos (ej. salto con contramovimiento o drop jump), el estiramiento violento y rápido de la fase excéntrica dispara las aferencias Ia de los husos musculares, provocando una descarga monosináptica refleja que recluta unidades motoras adicionales en la fase concéntrica inmediata, aumentando la potencia de despegue en un 15–20% por encima de una contracción concéntrica pura.
- **Cue técnico:** En pliometría, el tiempo de contacto con el suelo debe ser mínimo (<200–250 ms) para que el reflejo miotático y la energía elástica de la titina/tendón no se disipen en forma de calor.

---

## 6) Rehab / Prehab y Consideraciones Clínicas

### Técnicas de Estiramiento FNP (Facilitación Neuromuscular Propioceptiva)
- **Mecanismo:** La técnica "Contract-Relax" (contracción isométrica previa del músculo a estirar) activa masivamente las aferencias Ib del Órgano Tendinoso de Golgi, desencadenando la **inhibición autógena** mediada por interneuronas espinales, lo que reduce transitoriamente la resistencia refleja al estiramiento y permite ganar mayor ROM articular inmediato.

---

## 7) Integración en Plan Maestro OS

1. **Motor de Reglas:** Utilizar `gto-tension-sensitivity-and-autogenic-inhibition` para fundamentar la dosificación de tiempos de contracción isométrica previa (5–6 segundos al 50–70% MVC) en protocolos de movilidad asistida.
2. **Grafo Anatómico:** Conectar las propiedades propioceptivas de los husos musculares con los tests de agilidad y equilibrio de la sección de habilidades motoras.
