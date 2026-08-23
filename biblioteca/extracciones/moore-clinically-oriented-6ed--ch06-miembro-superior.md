# Clinically Oriented Anatomy (6ª ed.) — Cap. 6: Miembro Superior (pp. 670–819)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 6 — Upper Limb: Shoulder Girdle, Axilla, Brachial Plexus, Arm, Elbow, Forearm, Wrist & Hand (pp. 670–819)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Anatomía del miembro superior / Biomecánica del complejo articular del hombro y mano / Traumatología deportiva y neurología periférica
- **Alcance de esta sección:**
  - Esqueleto del miembro superior: clavícula (fractura en unión de tercios medio y lateral), escápula, húmero, radio, ulna y huesos del carpo (escafoides - riesgo de necrosis avascular; semilunar - luxación; ganchoso) (pp. 673–688).
  - Miomas y dermatomas del miembro superior (C5 abducción hombro $\to$ T1 abducción dedos) (pp. 688–696).
  - Músculos axioapendiculares anteriores/posteriores y Manguito de los Rotadores (**SITS**: Supraespinoso, Infraespinoso, Redondo menor, Subescapular) (pp. 697–713).
  - Axila y el **Plexo Braquial** completo (Raíces C5–T1, Troncos, Divisiones, Fascículos y Ramos terminales) (pp. 713–731).
  - Brazo y Fosa Cubital (paquete neurovascular y aponeurosis bicipital) (pp. 731–744).
  - Antebrazo (compartimentos flexor/pronador y extensor/supinador; epicondilitis medial vs lateral) (pp. 744–770).
  - Mano y Muñeca: **Túnel del Carpo** (10 estructuras: 9 tendones flexores + Nervio Mediano), Canal de Guyon, eminencia tenar/hipotenar, lumbricales e interóseos (DAB/PAD) (pp. 771–792).
  - Complejo articular del hombro (articulaciones esternoclavicular, acromioclavicular, glenohumeral y escapulotorácica), codo (ligamento anular / subluxación de la cabeza del radio) y muñeca (pp. 793–819).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface RotatorCuffBiomechanicsContract {
  supraspinatusFunction: 'initiates-first-15-degrees-of-glenohumeral-abduction-suprascapular-nerve-C5-C6';
  externalRotators: ['infraspinatus', 'teres-minor'];
  internalRotatorAndAnteriorStabilizer: 'subscapularis';
  humeralHeadDepressionDynamicForceCouple: 'rotator-cuff-depresses-humeral-head-counteracting-deltoid-superior-shear';
}

export interface CarpalTunnelAnatomyContract {
  boundarySuperior: 'flexor-retinaculum-transverse-carpal-ligament';
  totalTransitingStructures: 10;
  transitingTendons: ['4_FDS_tendons', '4_FDP_tendons', '1_FPL_tendon'];
  transitingNerve: 'Median_Nerve';
  sparedCutaneousBranch: 'Palmar_cutaneous_branch_of_median_nerve_passes_superficial_to_retinaculum';
}

export interface BrachialPlexusLesionsContract {
  erbDuchenneUpperTrunkC5C6: 'waiters-tip-position-loss-of-abduction-lateral-rotation-flexion';
  klumpkeLowerTrunkC8T1: 'claw-hand-loss-of-intrinsic-hand-muscles-and-Horner-syndrome';
  wingedScapulaLongThoracicNerveC5C7: 'loss-of-serratus-anterior-scapula-protrudes-posteriorly';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `rotator-cuff-force-couple-subacromial-clearance`
- **id:** `rotator-cuff-force-couple-subacromial-clearance` | **tipo:** biomecánica del hombro / prevención de pinzamiento
- **descripción:** Durante la abducción y flexión del brazo, la contracción del músculo deltoides genera un vector de fuerza vertical que tracciona la cabeza del húmero superiormente hacia el arco coracoacromial. El manguito de los rotadores (infraespinoso, subescapular y redondo menor) forma un **par de fuerzas (force couple)** depresor y compresor que tracciona la cabeza humeral hacia abajo y contra la cavidad glenoidea, preservando el espacio subacromial ($>9\text{--}10\text{ mm}$).
- **mecanismo de lesión:** La debilidad o fatiga del manguito permite que el deltoides migre la cabeza humeral hacia arriba, provocando el **síndrome de pinzamiento subacromial** (compresión y desgarro del tendón del supraespinoso y de la bursa subacromial contra el acromion).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 704–707, 796–800.

### Regla: `carpal-tunnel-syndrome-nerve-distribution`
- **id:** `carpal-tunnel-syndrome-nerve-distribution` | **tipo:** neurología periférica / semiología de mano
- **descripción:** La compresión del nervio mediano dentro del túnel carpiano rígido produce parestesias, entumecimiento y dolor en el territorio sensorial digital del nervio mediano: **pulgar, índice, dedo medio y mitad radial del dedo anular**, pero **respeta la piel de la eminencia tenar central** (debido a que el ramo cutáneo palmar del nervio mediano se origina proximalmente y pasa *por encima/superficial* al retináculo flexor). En estadios avanzados se produce atrofia de los músculos tenares (músculos OP, APB, FPB superficial) $\to$ "mano simia" y pérdida de la oposición del pulgar.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 6, pp. 779–782.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Escápula Alada (Winged Scapula, p. 702):** La lesión del **nervio torácico largo de Bell** (C5–C7) durante disecciones axilares o traumatismos paraliza el músculo **serrato anterior**. Al pedir al paciente que empuje contra una pared, el borde medial y el ángulo inferior de la escápula se separan marcadamente de la pared torácica posterior ("ala de ángel"), imposibilitando la abducción completa del brazo por encima de los $90^\circ$.
- **Fractura de Escafoides y Necrosis Avascular (p. 680):** Caída sobre la mano extendida con muñeca en dorsiflexión. El escafoides recibe su irrigación arterial retrógradamente desde su polo distal hacia el proximal; por tanto, una fractura a través de la cintura del escafoides interrumpe el suministro arterial al polo proximal, conduciendo a **osteonecrosis avascular, pseudoartrosis y artrosis radiocarpiana precoz**.
- **Codo de Tenista vs Codo de Golfista (p. 752):**
  - *Epicondilitis lateral (Codo de tenista):* Microdesgarro e inflamación repetitiva del tendón común de los extensores de la muñeca (principalmente *extensor carpi radialis brevis*).
  - *Epicondilitis medial (Codo de golfista):* Microlesión por sobreuso del tendón común de los flexores y pronadores en el epicóndilo medial del húmero.

---

## 5) Integración en Plan Maestro OS

1. **Grafo Anatómico (`anatomyGraph.ts`):**
   - Incorporar la tríada biomecánica del par de fuerzas del hombro (Deltoides vs Manguito rotador) en la selección de ejercicios de empuje y tracción overhead (Press militar, elevaciones laterales).
2. **Motor de Ergonomía y Prehab:**
   - Implementar el protocolo de evaluación de estabilidad de muñeca y prevención del túnel carpiano en levantadores de fuerza y deportistas de raqueta.
