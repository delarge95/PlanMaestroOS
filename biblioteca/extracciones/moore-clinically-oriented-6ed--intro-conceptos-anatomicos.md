# Clinically Oriented Anatomy (6ª ed.) — Introducción a la Anatomía Clínica (pp. 1–70)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Introduction to Clinically Oriented Anatomy (pp. 1–70)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Anatomía descriptiva, topográfica y clínica / Terminología anatómica internacional (FCAT/IFAA)
- **Población objetivo:** Médicos, fisioterapeutas, kinesiólogos, preparadores físicos y desarrolladores de ontologías anatómicas
- **Alcance de esta sección:**
  - Posición anatómica estándar, planos cardinales (sagital medio, frontal/coronal, transversal/axial) y términos de relación, comparación y movimiento (pp. 4–12).
  - Sistema tegumentario: epidermis, dermis, líneas de tensión cutánea de Langer y retináculos cutáneos (pp. 12–16).
  - Fascias, septos intermusculares, compartimentos fasciales rígidos, bursas y vainas sinoviales tendinosas (pp. 16–19).
  - Sistema esquelético: cartílago hialino/fibrocartílago/elástico, osteogénesis intramembranosa/endocondral, placas epifisarias e inervación perióstica (pp. 19–25).
  - Articulaciones: clasificación estructural sinovial (planas, gínglimo, pivote, condíleas, en silla de montar, esferoideas), fibrosa y cartilaginosa, y la **Ley de Hilton** (pp. 25–29).
  - Sistema muscular: arquitectura fascicular, tipos de contracción (isométrica, concéntrica, excéntrica, tónica), roles musculares (agonista, antagonista, sinergista, fijador) (pp. 29–37).
  - Sistemas cardiovascular (bomba musculovenosa, venas satélites), linfático y nervioso (somático vs autónomo simpático/parasimpático) (pp. 37–65).
  - Modalidades de imagenología médica (Radiografía, TC, US, RM, Medicina Nuclear) (pp. 66–70).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface AnatomicalPlaneDefinition {
  name: 'median-sagittal' | 'paramedian-sagittal' | 'frontal-coronal' | 'transverse-axial';
  axisOfRotation: 'anteroposterior-sagittal-axis' | 'transverse-coronal-axis' | 'longitudinal-vertical-axis';
  permittedMovements: string[];
}

export interface HiltonsLawRuleContract {
  jointId: string;
  innervatingNerveIds: string[];
  musclesCrossingJointInnervatedBySameNerves: string[];
  overlyingSkinCutaneousDistributionInnervatedBySameNerves: string[];
}

export interface FascialCompartmentClinicalContract {
  compartmentName: string;
  investingFascia: string;
  osteofascialBoundaryExtensibility: 'rigid-inextensible';
  clinicalPathology: 'acute-compartment-syndrome';
  criticalIntracompartmentalPressureMMHG: 30; // DeltaP < 30 mmHg respecto a presion diastolica requiere fasciotomia
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `hiltons-law-joint-innervation`
- **id:** `hiltons-law-joint-innervation` | **tipo:** neuroanatomía / dolor articular
- **descripción:** Todo nervio que inerva una articulación sinovial inerva también los músculos que mueven dicha articulación y la piel que cubre las inserciones distales de esos músculos.
- **aplicación clínica:** La irritación o inflamación de una articulación profunda (ej. artrosis de cadera inervada por los nervios femoral, obturador y ciático) puede manifestarse clínicamente como dolor referido a la rodilla o cara medial del muslo, o provocar espasmo reflejo de los músculos periarticulares.
- **confianza:** `explicit`
- **capítulo/página:** Introducción, p. 28.

### Regla: `langers-lines-surgical-incision`
- **id:** `langers-lines-surgical-incision` | **tipo:** anatomía quirúrgica / cicatrización
- **descripción:** Las líneas de escisión o tensión cutánea (Líneas de Langer) corresponden a la orientación paralela predominante de los haces de fibras de colágeno en la dermis reticular.
- **regla de oro:** Las incisiones quirúrgicas paralelas a las líneas de Langer curan con cicatrización mínima y menor tensión mecánica, mientras que las incisiones perpendiculares son traccionadas por las fibras elásticas, ensanchando la herida y predisponiendo a queloides.
- **confianza:** `explicit`
- **capítulo/página:** Introducción, pp. 14–15.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Síndrome Compartimental y Fasciotomía (p. 19):** Las fascias profundas y los septos intermusculares forman compartimentos osteofasciales inextensibles. El edema o hemorragia post-traumática eleva la presión intracompartimental, colapsando los capilares y venas, induciendo isquemia miocitaria aguda y necrosis neuromuscular irreversible en $<6\text{ horas}$ si no se realiza descompresión quirúrgica urgente (fasciotomía).
- **Inervación Ósea y Fracturas (p. 23):** El periostio contiene una densísima red de terminaciones nerviosas sensitivas de dolor somático (nervios periósticos), lo que explica el dolor agudo lancinante e hiperalgesia extrema durante fracturas óseas o punciones periósticas.
- **Bomba Musculovenosa y Várices (p. 42):** La contracción de los músculos esqueléticos comprime las venas profundas dentro de sus compartimentos fasciales, impulsando la sangre hacia el corazón gracias a la orientación unidireccional de las válvulas venosas. La incompetencia valvular produce reflujo, hipertensión venosa y formación de várices.

---

## 5) Integración en Plan Maestro OS

1. **Grafo Anatómico (`anatomyGraph.ts`):**
   - Implementar la Ley de Hilton (`hiltons-law-joint-innervation`) para mapear de manera automatizada las fuentes de dolor referido y la inervación compartida entre articulaciones y grupos musculares.
2. **Sistema de Evaluación Articular:**
   - Incorporar los ejes de rotación y planos cardinales como estándar de referencia espacial para los análisis cinemáticos de ROM.
