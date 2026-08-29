# Auditoría de Cobertura Anatómica 3D — Ciclo 4 (AG-ANATOM)

> Generado por `rag/anatomy/scripts/cobertura-c4.ts`.
> Cruce entre catálogo de mallas runtime (`meshCatalog.ts`), el grafo (`anatomyGraph.ts`) y el inventario de biblioteca (`LibraryMuscles`).

---

## 1. Resumen Ejecutivo por Modelo GLB

| Modelo | Total Piezas | Aux/Otros (Ocultos) | Piezas Visibles | Piezas con Dueño (Grafo) | Piezas SIN Dueño | % Cobertura Visible |
|---|---|---|---|---|---|---|
| `colored-skull-base` | 30 | 0 | **30** | **29** | 1 | **96.7%** |
| `exploded-skull` | 30 | 0 | **30** | **29** | 1 | **96.7%** |
| `hand` | 235 | 4 | **231** | **223** | 8 | **96.5%** |
| `lower-limb` | 462 | 40 | **422** | **416** | 6 | **98.6%** |
| `overview-colored-skull` | 31 | 0 | **31** | **29** | 2 | **93.5%** |
| `overview-skeleton` | 147 | 0 | **147** | **144** | 3 | **98%** |
| `upper-limb` | 575 | 27 | **548** | **529** | 19 | **96.5%** |
| `vertebrae` | 4 | 0 | **4** | **3** | 1 | **75%** |

> **Criterio de Aceptación Ciclo 4 (Tarea A2):** Llevar las piezas visibles sin dueño al **< 10%** por modelo mediante enriquecimiento del grafo o alias.

---

## 2. Inventario de Piezas Visibles SIN Dueño en el Grafo (por Modelo)

### 🔹 Modelo: `colored-skull-base` (1 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |

### 🔹 Modelo: `exploded-skull` (1 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |

### 🔹 Modelo: `hand` (8 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Adductor_pollicis` | `muscle` | `mus-flexor-pollicis-longus` (Flexor Largo del Pulgar) | 50% |
| `Arteries` | `vessel` | `lig-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 100% |
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Fascia` | `fascia` | `mus-tensor-fasciae-latae` (Tensor de la Fascia Lata) | 100% |
| `Ligaments` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 100% |
| `Muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 100% |
| `Nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 100% |
| `Veins` | `vessel` | `lig-lower-limb-venous-network` (Sistema venoso del miembro inferior (safenas, femoral, poplítea y tibiales)) | 100% |

### 🔹 Modelo: `lower-limb` (6 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Flexor_digiti_minimi_brevis_of_footr` | `muscle` | `mus-extensor-digiti-minimi` (Extensor del Meñique) | 40% |
| `Muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 100% |
| `Nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 100% |
| `Opponens_digiti_minimi_muscle_of_footr` | `muscle` | `mus-extensor-digiti-minimi` (Extensor del Meñique) | 40% |

### 🔹 Modelo: `overview-colored-skull` (2 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Bones_right` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |

### 🔹 Modelo: `overview-skeleton` (3 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Bones_right` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Cartilages_right` | `cartilage` | *Sin candidato claro* | — |

### 🔹 Modelo: `upper-limb` (19 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Arm_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Arm_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Arm_-_muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 50% |
| `Back_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Back_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Forearm_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Forearm_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Forearm_-_muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 50% |
| `Hand_and_wrist_-_bones` | `bone` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 75% |
| `Hand_and_wrist_-_cartilages` | `cartilage` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 50% |
| `Hand_and_wrist_-_muscles` | `muscle` | `mus-lumbrical-muscles-of-hand` (Lumbricales de la Mano) | 50% |
| `Head_and_neck_-_bones` | `bone` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 50% |
| `Head_and_neck_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_bones` | `bone` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_muscles` | `muscle` | *Sin candidato claro* | — |
| `Superficial_transverse_metacarpal_lig` | `bone` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 50% |
| `Thorax_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Thorax_-_cartilages` | `cartilage` | *Sin candidato claro* | — |

### 🔹 Modelo: `vertebrae` (1 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |

---

## 3. Estructuras del Grafo SIN Mallas 3D (`modelMeshes` Vacío)

Total de estructuras en el grafo: **291**
- Estructuras con mallas 3D: **237** (81.4%)
- Estructuras sin mallas 3D: **54** (18.6%)

### Detalle de Estructuras sin Mallas 3D:

| Estructura | Tipo | Zona | Motivo Principal | Pieza Candidata Potencial en GLB |
|---|---|---|---|---|
| `mus-masseter`<br>**Masetero** (*Masseter*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-temporalis`<br>**Temporal** (*Temporalis*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-lateral-pterygoid`<br>**Pterigoideo Lateral** (*Lateral Pterygoid*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-medial-pterygoid`<br>**Pterigoideo Medial** (*Medial Pterygoid*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-occipitofrontalis`<br>**Occipitofrontal** (*Occipitofrontalis*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-orbicularis-oculi`<br>**Orbicular de los Párpados** (*Orbicularis Oculi*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-orbicularis-oris`<br>**Orbicular de la Boca** (*Orbicularis Oris*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-buccinator`<br>**Buccinador** (*Buccinator*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-zygomaticus-major`<br>**Cigomático Mayor** (*Zygomaticus Major*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-extraocular-muscles`<br>**Músculos Extraoculares** (*Extraocular Muscles*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `hand:Muscles` |
| `mus-sternocleidomastoid`<br>**Esternocleidomastoideo** (*Sternocleidomastoid*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-platysma`<br>**Platisma** (*Platysma*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-scalenus-anterior`<br>**Escaleno Anterior** (*Scalenus Anterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-scalenus-medius`<br>**Escaleno Medio** (*Scalenus Medius*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-scalenus-posterior`<br>**Escaleno Posterior** (*Scalenus Posterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-longus-colli`<br>**Largo del Cuello** (*Longus Colli*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-longus-capitis`<br>**Largo de la Cabeza** (*Longus Capitis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-rectus-capitis-anterior`<br>**Recto Anterior de la Cabeza** (*Rectus Capitis Anterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-rectus-capitis-lateralis`<br>**Recto Lateral de la Cabeza** (*Rectus Capitis Lateralis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-splenius-capitis`<br>**Esplenio de la Cabeza** (*Splenius Capitis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-splenius-cervicis`<br>**Esplenio del Cuello** (*Splenius Cervicis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-suboccipital-muscles`<br>**Suboccipitales** (*Suboccipital Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-suprahyoid-muscles`<br>**Suprahioideos** (*Suprahyoid Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-infrahyoid-muscles`<br>**Infrahioideos** (*Infrahyoid Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-diaphragm`<br>**Diafragma** (*Diaphragm*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-external-intercostals`<br>**Intercostales Externos** (*External Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-internal-intercostals`<br>**Intercostales Internos** (*Internal Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-innermost-intercostals`<br>**Intercostales Íntimos** (*Innermost Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-transversus-thoracis`<br>**Transverso del Tórax** (*Transversus Thoracis*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-subcostal-muscles`<br>**Subcostales** (*Subcostal Muscles*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-levatores-costarum`<br>**Elevadores de las Costillas** (*Levatores Costarum*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-rectus-abdominis`<br>**Recto Abdominal** (*Rectus Abdominis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-external-oblique`<br>**Oblicuo Externo** (*External Oblique*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-internal-oblique`<br>**Oblicuo Interno** (*Internal Oblique*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-transversus-abdominis`<br>**Transverso Abdominal** (*Transversus Abdominis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-pyramidalis`<br>**Piramidal** (*Pyramidalis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-quadratus-lumborum`<br>**Cuadrado Lumbar** (*Quadratus Lumborum*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-erector-spinae`<br>**Erector de la Columna** (*Erector Spinae*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-semispinalis`<br>**Semiespinal** (*Semispinalis*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-multifidus`<br>**Multifidus** (*Multifidus*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-rotatores`<br>**Rotadores** (*Rotatores*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-interspinales`<br>**Interespinosos** (*Interspinales*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-intertransversarii`<br>**Intertransversos** (*Intertransversarii*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-serratus-posterior-superior`<br>**Serrato Posterior Superior** (*Serratus Posterior Superior*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-serratus-posterior-inferior`<br>**Serrato Posterior Inferior** (*Serratus Posterior Inferior*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-sternalis`<br>**Esternal** (*Sternalis*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-tensor-fasciae-latae`<br>**Tensor de la Fascia Lata** (*Tensor Fasciae Latae*) | `muscle` | `hip` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-levator-ani`<br>**Elevador del Ano** (*Levator Ani*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `ten-long-head-of-biceps-tendon`<br>**Tendón Cabeza Larga del Bíceps** (*Long head of biceps tendon*) | `tendon` | `shoulder` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Head_and_neck_-_bones` |
| `ten-common-flexor-tendon`<br>**Tendón Common Flexor** (*Common flexor tendon*) | `tendon` | `arm` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `lower-limb:Flexor_digiti_minimi_brevis_of_footr` |
| `ten-pectoralis-major-tendon`<br>**Tendón del Pectoral Mayor** (*Pectoralis major tendon*) | `tendon` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `ner-accessory-nerve`<br>**Nervio Accesorio (XI)** (*Accessory nerve*) | `nerve` | `cervical` | Nervio no modelado en los atlas 3D de extremidades | — |
| `ner-pudendal-nerve`<br>**Nervio Pudendo** (*Pudendal nerve*) | `nerve` | `core` | Nervio no modelado en los atlas 3D de extremidades | — |
| `ner-mandibular-nerve`<br>**Nervio Mandibular (V3)** (*Mandibular nerve*) | `nerve` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |

---

## 4. Plan de Acción Inmediato (Tareas A2 & A3)

1. **Vincular Piezas Visibles con Candidatos Directos (A2):**
   - Incorporar a `bones.ts`, `ligaments.ts`, `tendons.ts`, `muscles.ts` y `nerves.ts` las piezas de tipo `cartilage`, `ligament`, `vessel` y `fascia` con identificación anatómica inequívoca.
   - Preservar la regla de 0 huérfanos (`meshMapping.test.ts` verde).
2. **Depurar Selección Jerárquica y Subgrupos (A3):**
   - Ajustar `resolveClick` y `buildSubgroups` en `composite.ts` para que el descenso y ascenso de nivel respondan exactamente a los casos límite (a), (b), (c).
