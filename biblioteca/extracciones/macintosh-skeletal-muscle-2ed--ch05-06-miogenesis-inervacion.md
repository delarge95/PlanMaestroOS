# Skeletal Muscle: Form and Function (2ª ed.) — Cap. 5 y 6: Miogénesis e Inervación del Músculo (pp. 52–85)

> **sourceId:** `macintosh-skeletal-muscle-2ed`
> **Sección:** Part I: Chapter 5 (Muscle Formation) & Chapter 6 (Development of Muscle Innervation) (pp. 52–85)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Brian R. MacIntosh, Phillip F. Gardiner, Alan J. McComas

---

## 1) Metadatos

- **Libro:** Skeletal Muscle: Form and Function
- **Edición y Año:** 2ª edición (2006 / Human Kinetics)
- **Disciplina:** Embriología molecular / Miogénesis / Neurodesarrollo y sinaptogénesis
- **Alcance de esta sección:**
  - Origen mesodérmico del músculo esquelético: somitas, esclerotomo, dermátomo y miotomo (pp. 52–56).
  - Factores Reguladores Miogénicos (MRF): MyoD, Myf5 (determinación miogénica), Miogenina y MRF4 (diferenciación y fusión celular) (pp. 56–60).
  - Miotubos primarios (embrionarios) vs miotubos secundarios (fetales) y establecimiento de la arquitectura de fascículos (pp. 60–64).
  - Origen y nicho biológico de las células satélite (marcadores Pax3/Pax7) para crecimiento postnatal y reparación (pp. 64–68).
  - Crecimiento axonal, conos de crecimiento y guía axonal por moléculas de señalización (netrinas, semaforinas, efrinas, neurotrofinas) (pp. 71–76).
  - Inervación polineuronal inicial en el recién nacido y el proceso competitivo de **eliminación sináptica** (synapse elimination) hasta establecer la inervación mononeuronal definitiva (pp. 76–84).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export type MyogenicStage = 'mesodermal-stem-cell' | 'myoblast' | 'myotube-primary' | 'myotube-secondary' | 'mature-muscle-fiber';

export interface MyogenicRegulatoryFactorsProfile {
  determinationGenes: ('MyoD' | 'Myf5')[];
  differentiationGenes: ('Myogenin' | 'MRF4')[];
  satelliteCellQuiescentMarkers: ('Pax7' | 'Pax3' | 'CD34' | 'M-Cadherin')[];
  satelliteCellActivatedMarkers: ('MyoD' | 'Ki-67')[];
}

export interface SynapticPruningContract {
  initialState: 'polyneuronal-innervation'; // Multiples axones por fibra
  finalState: 'mononeuronal-innervation';   // Exactamente 1 motoneurona por fibra
  competitionMechanism: 'activity-dependent-retrograde-trophic-competition';
  timeframeHuman: 'early-postnatal-months';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `synapse-elimination-mononeuronal-rule`
- **id:** `synapse-elimination-mononeuronal-rule` | **tipo:** neurobiología del desarrollo
- **descripción:** Durante el desarrollo embrionario tardío y neonatal temprano, cada fibra muscular esquelética está inervada por terminales axonales de 2 a 6 motoneuronas distintas (inervación polineuronal). A través de un proceso competitivo dependiente de la actividad sináptica y de factores tróficos retrógrados, los terminales supernumerarios se retraen hasta que cada fibra muscular madura queda inervada por **exactamente una única motoneurona alfa**.
- **métrica principal:** `innervationRatioPerFiber` (1.0 estricto en músculo adulto sano).
- **consecuencia:** Todas las fibras musculares inervadas por una misma motoneurona pertenecen a una sola unidad motora y comparten exactamente el mismo tipo fenotípico de cadena pesada de miosina (MHC).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 76–83.

### Regla: `mrf-cascade-myogenesis-hierarchy`
- **id:** `mrf-cascade-myogenesis-hierarchy` | **tipo:** biología celular / regeneración
- **descripción:** La miogénesis y la regeneración muscular adulta siguen una jerarquía estricta de factores de transcripción bHLH:
  $$\text{Célula Satélite Quiescente}\ (\text{Pax7}^+) \xrightarrow{\text{MyoD / Myf5}} \text{Mioblasto Activado} \xrightarrow{\text{Miogenina / MRF4}} \text{Miotubo Multinucleado}$$
- **confianza:** `explicit`
- **capítulo/página:** Cap. 5, pp. 56–60, 64–66.

---

## 4) Estructuras anatómicas y del desarrollo

### 1. Los Somitas y el Origen de los Grupos Musculares
- **Paraxial Mesoderm:** Se segmenta cráneo-caudalmente en pares de somitas a ambos lados del tubo neural (p. 53).
- **Dorsomedial y Ventrolateral Lip del Dermomiotomo:**
  - *Músculos Epaxiales (Dorsales / Intrínsecos de la espalda):* Se originan en el labio dorsomedial del somita; inervados por los ramos dorsales de los nervios espinales (p. 54).
  - *Músculos Hipaxiales (Ventrales / Extremidades y pared corporal):* Se originan en el labio ventrolateral y migran hacia las yemas de las extremidades; inervados por los ramos ventrales de los nervios espinales (p. 54).

### 2. El Nicho de las Células Satélite
- **Ubicación anatómica:** Situadas en la periferia de la fibra muscular, intercaladas estrictamente entre la **lámina basal** de la membrana basal y el **sarcolema** de la fibra muscular madura (p. 64).
- **Función:** Representan la reserva de células madre miogénicas unipotentes adultas (~2–7% de los núcleos en el músculo adulto sano). Permanece quiescente en fase $G_0$ hasta que es estimulada por daño mecánico, estiramiento o citoquinas inflamatorias (HGF, FGF, IGF-1) (pp. 64–68).

---

## 5) Integración en Plan Maestro OS

1. **Modelado de Regeneración Muscular:** Incorporar la cascada `mrf-cascade-myogenesis-hierarchy` para estructurar la progresión de ejercicios tras lesiones por distensión miofascial (días 1–3: proliferación de mioblastos; días 4–10: diferenciación y fusión con tensión submáxima progresiva).
2. **Grafo de Conocimiento:** Vincular el linaje ontogénico de los grupos musculares (epaxial vs hipaxial) con la inervación segmentaria en `anatomyGraph.ts`.
