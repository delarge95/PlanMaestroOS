# Clinically Oriented Anatomy (6ª ed.) — Cap. 7: Cabeza y Neuroanatomía Craneal (pp. 820–980)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 7 — Head: Cranium, Face, Scalp, Infratemporal Fossa, TMJ, Meninges & Brain (pp. 820–980)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Neuroanatomía craneal / Cirugía maxilofacial / Biomecánica de la ATM y traumatología craneoencefálica (TCE)
- **Alcance de esta sección:**
  - Cráneo (neurocráneo vs viscerocráneo), Pterion y la arteria meníngea media (pp. 822–841).
  - Cuero cabelludo (capas **SCALP**, zona de peligro en tejido areolar laxo) y músculos de la expresión facial (NC VII) (pp. 842–859).
  - Inervación sensitiva facial por el Nervio Trigémino (NC V: $V_1, V_2, V_3$) y Neuralgia del Trigémino (pp. 849–855).
  - Fosa infratemporal, músculos de la masticación (Masetero, Temporal, Pterigoideo Medial y **Pterigoideo Lateral**) inervados por $V_3$ (pp. 914–928).
  - Articulación Temporomandibular (ATM): disco articular fibrocartilaginoso, biomecánica de apertura/cierre y luxación anterior (pp. 916–924).
  - Meninges craneales, espacios meníngeos (hemorragia epidural, subdural y subaracnoidea) y senos venosos durales (seno cavernoso) (pp. 865–878).
  - Vascularización encefálica y Polígono de Willis (pp. 878–889).
  - Órbita, cavidad oral, lengua y glándulas salivales (pp. 889–980).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface TmjBiomechanicsContract {
  articularDiscCompartments: {
    upperCompartment: 'translation-gliding-protrusion-retrusion';
    lowerCompartment: 'hinge-rotation-opening-closing';
  };
  jawOpenerMuscle: 'lateral-pterygoid-pulls-condyle-and-disc-anteriorly';
  jawClosersElevators: ['masseter', 'temporalis', 'medial-pterygoid'];
  masticationInnervation: 'Mandibular_Nerve_V3';
  tmjDislocationMechanism: 'condyle-slides-anterior-to-articular-tubercle-during-excessive-opening';
}

export interface IntracranialHemorrhageDifferentialContract {
  epiduralHematoma: {
    vessel: 'middle-meningeal-artery-pterion-fracture';
    radiologyCT: 'biconvex-lens-shaped-limited-by-cranial-sutures';
    clinicalCourse: 'lucid-interval-followed-by-rapid-deterioration-and-herniation';
  };
  subduralHematoma: {
    vessel: 'bridging-cortical-veins-dural-sinuses';
    radiologyCT: 'crescent-shaped-crosses-suture-lines';
    clinicalCourse: 'slow-insidious-common-in-elderly';
  };
  subarachnoidHemorrhage: {
    vessel: 'ruptured-saccular-berry-aneurysm-circle-of-willis';
    clinicalPresentation: 'thunderclap-worst-headache-of-life-nuchal-rigidity';
  };
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `pterion-fracture-epidural-hematoma-emergency`
- **id:** `pterion-fracture-epidural-hematoma-emergency` | **tipo:** neurocirugía de urgencia / traumatología
- **descripción:** El **Pterion** es la sutura craneal en forma de "H" en la fosa temporal lateral donde convergen 4 huesos (frontal, parietal, ala mayor del esfenoides y escama del temporal). Es la región ósea más delgada y vulnerable del cráneo.
- **riesgo vital:** Directamente por debajo del pterion discurre la **rama anterior de la arteria meníngea media**. Un traumatismo directo lateral con fractura de pterion produce la rotura de esta arteria, generando un **hematoma epidural arterial hiperagudo**.
- **curso clínico clásico:** Intervalo lúcido inicial (el paciente recupera la conciencia brevemente tras el golpe) seguido de cefalea explosiva, anisocoria ipsilateral por compresión del NC III, hemiparesia contralateral y coma por herniación uncal en $<2\text{ a }6\text{ horas}$ si no se realiza craneotomía descompresiva.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 827–830, 868–872.

### Regla: `tmj-lateral-pterygoid-opening-mechanics`
- **id:** `tmj-lateral-pterygoid-opening-mechanics` | **tipo:** biomecánica articular / función mandibular
- **descripción:** A diferencia de los potentes músculos elevadores que cierran la mandíbula (masetero, temporal, pterigoideo medial), el **músculo pterigoideo lateral** es el único músculo de la masticación que **inicia y ejecuta activamente la apertura y protrusión mandibular**:
  - Su cabeza superior se inserta en el disco articular y cápsula de la ATM; su cabeza inferior en la fosita pterigoidea del cuello de la mandíbula.
  - Al contraerse bilateralmente, tracciona los cóndilos mandibulares y los discos articulares hacia adelante sobre la eminencia articular.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 7, pp. 916–924.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Parálisis Facial de Bell (p. 849):** Inflamación/lesión del **nervio facial (NC VII)** en el foramen estilomastoideo $\to$ parálisis flácida ipsilateral completa de todos los músculos de la mímica facial (imposibilidad para cerrar el ojo ipsilateral por debilidad del *orbicularis oculi*, desaparición del surco nasogeniano, desviación de la comisura bucal hacia el lado sano y acumulación de comida en el carrillo por parálisis del *buccinator*).
- **Zona Peligrosa del Cuero Cabelludo y Triángulo de la Muerte Facial (pp. 843, 856):** El tejido areolar laxo (capa L de SCALP) y el triángulo facial medio (nariz/labio superior) drenan a través de venas emisarias y la vena oftálmica directamente hacia el **seno cavernoso intracraneal**, permitiendo que infecciones cutáneas bacterianas se propaguen al interior del cráneo causando tromboflebitis séptica del seno cavernoso o meningitis.

---

## 5) Integración en Plan Maestro OS

1. **Evaluación de la Articulación Temporomandibular (ATM):**
   - Incorporar `tmj-lateral-pterygoid-opening-mechanics` en los protocolos de screening postural cervical y bruxismo en atletas.
2. **Protocolos de Conmoción Cerebral y Red Flags de TCE (`src/components/clinical/`):**
   - Mapear los signos de hematoma epidural/subaracnoideo y fractura de pterion en los protocolos de seguridad deportiva para deportes de contacto.
