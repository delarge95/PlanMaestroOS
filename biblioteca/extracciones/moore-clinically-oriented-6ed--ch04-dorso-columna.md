# Clinically Oriented Anatomy (6ª ed.) — Cap. 4: Dorso y Columna Vertebral (pp. 439–507)

> **sourceId:** `moore-clinically-oriented-6ed`
> **Sección:** Chapter 4 — Back: Vertebrae, Intervertebral Discs, Facet Joints, Intrinsic Muscles & Spinal Cord (pp. 439–507)
> **Extracción:** Asistida por Gemini (Flash) / Plan Maestro OS · Fecha: 2026-08-22
> **Autores:** Keith L. Moore, Arthur F. Dalley II, Anne M. R. Agur

---

## 1) Metadatos

- **Libro:** Clinically Oriented Anatomy
- **Edición y Año:** 6ª edición (2010 / Lippincott Williams & Wilkins)
- **Disciplina:** Anatomía de la columna vertebral / Biomecánica del raquis / Neurología espinal y fisioterapia
- **Alcance de esta sección:**
  - Estructura vertebral segmental: 33 vértebras (7 C, 12 T, 5 L, 5 S, 4 Co), curvaturas primarias (cifosis torácica/sacra) vs secundarias (lordosis cervical/lumbar) (pp. 440–443).
  - Características morfológicas regionales: vértebras cervicales (foramen transverso, uncus), torácicas (fositas costales, carillas coronales) y lumbares (cuerpos arriñonados, carillas sagitales bloqueantes de rotación) (pp. 443–455).
  - Articulaciones: discos intervertebrales (anillo fibroso y núcleo pulposo) y articulaciones cigapofisarias (facetarias) (pp. 464–470).
  - Ligamentos espinales (LLA, LLP, ligamentos amarillos, interespinoso, supraespinoso, ligamento nucal) y ligamentos craneovertebrales (ligamento cruciforme y ligamentos alares de verificación) (pp. 466–472).
  - Músculos extrínsecos e intrínsecos del dorso (plano erector de la columna: iliocostal, longísimo, espinoso; plano transversoespinoso: **multífidos** y rotadores) inervados por **ramos dorsales de los nervios espinales** (pp. 482–495).
  - Triángulo suboccipital (recto posterior mayor, oblicuo superior e inferior; arteria vertebral y nervio suboccipital C1) (pp. 492–495).
  - Conducto vertebral, médula espinal (terminación en cono medular a nivel L1–L2), cauda equina, punción lumbar (interespacio L3/L4 o L4/L5) y meninges (pp. 496–507).

---

## 2) Contratos y entidades

### 2.1 Modelos TypeScript Sugeridos (`DomainModel` / `anatomyGraph`)

```typescript
export interface LumbarSpineBiomechanicsContract {
  facetJointOrientationPlane: 'sagittal-interlocking-resists-axial-rotation';
  permittedMovements: ['flexion', 'extension', 'limited-lateral-bending'];
  prohibitedMovement: 'axial-rotation-limited-to-1-to-2-degrees-per-segment';
  intervertebralDiscPosterolateralHerniationPredisposition: {
    nucleusPulposusEccentricity: 'posterior';
    posteriorLongitudinalLigamentNarrowing: 'tapers-distally-in-lumbar-region';
  };
  spinalCordTerminationLevelAdult: 'L1_L2_intervertebral_disc';
  lumbarPunctureSafeInterspaces: ['L3-L4', 'L4-L5']; // Por debajo del cono medular
}

export interface MultifidusStabilityContract {
  innervation: 'medial-branch-of-posterior-dorsal-ramus';
  spanSegments: [2, 4]; // Cruza de 2 a 4 segmentos vertebrales
  localStabilizerFunction: 'segmental-stiffness-and-proprioceptive-position-sensor';
}
```

---

## 3) Reglas cuantitativas y protocolos

### Regla: `lumbar-facet-joint-rotation-lock`
- **id:** `lumbar-facet-joint-rotation-lock` | **tipo:** biomecánica / prevención de lesiones espinales
- **descripción:** Las carillas articulares cigapofisarias lumbares están orientadas estrictamente en el **plano sagital** (carillas superiores cóncavas orientadas medial y posterolateralmente; inferiores convexas orientadas lateral y anterolateralmente).
- **consecuencia biomecánica:** Permiten libremente la flexión y extensión ($60^\circ\text{ a }75^\circ$ total), pero **bloquean mecánicamente la rotación axial a tan solo $1^\circ\text{ a }2^\circ$ por segmento lumbar** ($\sim 5^\circ\text{ a }10^\circ$ total en todo el raquis lumbar).
- **mecanismo de lesión:** Someter la columna lumbar a torsión rotacional bajo carga axial (ej. rotación de tronco con barra pesada o levantamiento asimétrico) impacta violentamente las carillas articulares contra las láminas, predisponiendo a fractura del istmo (espondilolisis), síndrome facetario agudo y rotura del anillo fibroso por cizallamiento.
- **confianza:** `explicit`
- **capítulo/página:** Cap. 4, pp. 448–452, 470.

### Regla: `posterolateral-disc-herniation-exiting-vs-traversing-root`
- **id:** `posterolateral-disc-herniation-exiting-vs-traversing-root` | **tipo:** neurología clínica / radiculopatía
- **descripción:** Una hernia discal posterolateral típica en la columna lumbar comprime la raíz nerviosa **travesera inferior** (no la raíz saliente):
  - *Hernia discal L4–L5:* La raíz L4 sale por encima a través del foramen intervertebral L4–L5; por lo tanto, la hernia comprime la **raíz espinal L5** (déficit en dorsiflexión del dedo gordo - extensor hallucis longus, y parestesias en dorso del pie).
  - *Hernia discal L5–S1:* Comprime la **raíz espinal S1** (abolición del reflejo aquíleo, pérdida de flexión plantar y parestesias en borde lateral del pie).
- **confianza:** `explicit`
- **capítulo/página:** Cap. 4, pp. 466–470, 498–501.

---

## 4) Cuadros Clínicos Relevantes (Clinical Blue Boxes)

- **Punción Lumbar y Anestesia Epidural (p. 498):** Para extraer LCR o administrar anestesia espinal con seguridad, la aguja se introduce en la línea media en los interespacios **L3/L4 o L4/L5** (identificados palpando la línea bi-ilíaca de Tuffier / Jacoby a la altura de la apófisis espinosa de L4), muy por debajo de la terminación de la médula espinal (cono medular en L1–L2).
- **Espondilolisis y Espondilolistesis (p. 455):** Fractura por estrés bilateral de la pars interarticularis (istmo vertebral) en L5 ("signo del perrito escocés decapitado" en radiografía oblicua), permitiendo el deslizamiento anterior del cuerpo vertebral de L5 sobre S1 (espondilolistesis), estenosando el conducto vertebral y comprimiendo la cauda equina.

---

## 5) Integración en Plan Maestro OS

1. **Grafo Anatómico (`anatomyGraph.ts`):**
   - Integrar la regla `lumbar-facet-joint-rotation-lock` para clasificar cualquier ejercicio con rotación lumbar cargada como de alto riesgo biomecánico en usuarios con antecedentes discales.
2. **Motor de Prehabilitación del Core:**
   - Priorizar la reeducación motora del músculo **Multífido Lumbar** y transverso del abdomen en protocolos de rehabilitación de lumbalgia inespecífica.
