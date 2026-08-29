# Auditoría de Cobertura Anatómica 3D — Ciclo 4 (AG-ANATOM)

> Generado por `rag/anatomy/scripts/cobertura-c4.ts`.
> Cruce entre catálogo de mallas runtime (`meshCatalog.ts`), el grafo (`anatomyGraph.ts`) y el inventario de biblioteca (`LibraryMuscles`).

---

## 1. Resumen Ejecutivo por Modelo GLB

| Modelo | Total Piezas | Aux/Otros (Ocultos) | Piezas Visibles | Piezas con Dueño (Grafo) | Piezas SIN Dueño | % Cobertura Visible |
|---|---|---|---|---|---|---|
| `colored-skull-base` | 30 | 0 | **30** | **12** | 18 | **40%** |
| `exploded-skull` | 30 | 0 | **30** | **12** | 18 | **40%** |
| `hand` | 235 | 4 | **231** | **63** | 168 | **27.3%** |
| `lower-limb` | 462 | 40 | **422** | **117** | 305 | **27.7%** |
| `overview-colored-skull` | 31 | 0 | **31** | **12** | 19 | **38.7%** |
| `overview-skeleton` | 147 | 0 | **147** | **75** | 72 | **51%** |
| `upper-limb` | 575 | 27 | **548** | **164** | 384 | **29.9%** |
| `vertebrae` | 4 | 0 | **4** | **3** | 1 | **75%** |

> **Criterio de Aceptación Ciclo 4 (Tarea A2):** Llevar las piezas visibles sin dueño al **< 10%** por modelo mediante enriquecimiento del grafo o alias.

---

## 2. Inventario de Piezas Visibles SIN Dueño en el Grafo (por Modelo)

### 🔹 Modelo: `colored-skull-base` (18 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Inferior_nasal_concha_bones` | `bone` | *Sin candidato claro* | — |
| `Lacrimal_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Lower_canines` | `bone` | *Sin candidato claro* | — |
| `Lower_first_molar_teeth` | `bone` | *Sin candidato claro* | — |
| `Lower_first_premolars` | `bone` | *Sin candidato claro* | — |
| `Lower_lateral_incisors` | `bone` | *Sin candidato claro* | — |
| `Lower_medial_incisors` | `bone` | *Sin candidato claro* | — |
| `Lower_second_molar_teeth` | `bone` | *Sin candidato claro* | — |
| `Lower_second_premolars` | `bone` | *Sin candidato claro* | — |
| `Palatine_bone` | `bone` | `bone-frontal-bone` (Hueso frontal) | 50% |
| `Upper_canines` | `bone` | *Sin candidato claro* | — |
| `Upper_first_molar_teeth` | `bone` | *Sin candidato claro* | — |
| `Upper_first_premolars` | `bone` | *Sin candidato claro* | — |
| `Upper_lateral_incisors` | `bone` | *Sin candidato claro* | — |
| `Upper_medial_incisors` | `bone` | *Sin candidato claro* | — |
| `Upper_second_molar_teeth` | `bone` | *Sin candidato claro* | — |
| `Upper_second_premolars` | `bone` | *Sin candidato claro* | — |

### 🔹 Modelo: `exploded-skull` (18 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Inferior_nasal_concha_bones` | `bone` | *Sin candidato claro* | — |
| `Lacrimal_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Lower_canines` | `bone` | *Sin candidato claro* | — |
| `Lower_first_molar_teeth` | `bone` | *Sin candidato claro* | — |
| `Lower_first_premolar` | `bone` | *Sin candidato claro* | — |
| `Lower_lateral_incisors` | `bone` | *Sin candidato claro* | — |
| `Lower_medial_incisors` | `bone` | *Sin candidato claro* | — |
| `Lower_second_molar_teeth` | `bone` | *Sin candidato claro* | — |
| `Lower_second_premolars` | `bone` | *Sin candidato claro* | — |
| `Palatine_bone` | `bone` | `bone-frontal-bone` (Hueso frontal) | 50% |
| `Upper_canines` | `bone` | *Sin candidato claro* | — |
| `Upper_first_molar_teeth` | `bone` | *Sin candidato claro* | — |
| `Upper_first_premolars` | `bone` | *Sin candidato claro* | — |
| `Upper_lateral_incisors` | `bone` | *Sin candidato claro* | — |
| `Upper_medial_incisors` | `bone` | *Sin candidato claro* | — |
| `Upper_second_molar_teeth` | `bone` | *Sin candidato claro* | — |
| `Upper_second_premolars` | `bone` | *Sin candidato claro* | — |

### 🔹 Modelo: `hand` (168 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `1st_metacarpal_bone` | `bone` | *Sin candidato claro* | — |
| `2nd_metacarpal_bone` | `bone` | *Sin candidato claro* | — |
| `3rd_metacarpal_bone` | `bone` | *Sin candidato claro* | — |
| `4th_metacarpal_bone` | `bone` | *Sin candidato claro* | — |
| `5th_metacarpal_bone` | `bone` | *Sin candidato claro* | — |
| `Adductor_pollicis` | `muscle` | `mus-flexor-pollicis-longus` (Flexor Largo del Pulgar) | 50% |
| `Annular_ligament(A1)_of_1st_finger` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligament(A2)_of_1st_finger` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_2nd_finger_A1-A5` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_3rd_finger_A1-A5` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_4th_finger_A1-A5` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_5th_finger_A1-A5` | `ligament` | *Sin candidato claro* | — |
| `Antebrachial_fascia` | `fascia` | `mus-tensor-fasciae-latae` (Tensor de la Fascia Lata) | 50% |
| `Anterior_interosseous_artery` | `vessel` | *Sin candidato claro* | — |
| `Anterior_interosseous_veins` | `vessel` | *Sin candidato claro* | — |
| `Aponeurosis_palmaris` | `fascia` | `mus-palmaris-longus` (Palmar Largo) | 50% |
| `Arteries` | `vessel` | *Sin candidato claro* | — |
| `Articular_capsule_of_radiocarpal_joint` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_distal_interphalangeal_joints` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_metacarpophalangeal_joints` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_proximal_interphalangeal_joints` | `joint` | *Sin candidato claro* | — |
| `Articular_cartiage_of_ulna_distal_end` | `bone` | *Sin candidato claro* | — |
| `Articular_cartilage_of_capitate_bone​` | `cartilage` | `bone-capitate` (Grande (carpo)) | 50% |
| `Articular_cartilage_of_hamate_bone​` | `cartilage` | `bone-hamate` (Ganchoso) | 50% |
| `Articular_cartilage_of_lunate_bone` | `cartilage` | `bone-lunate-bone` (Semilunar) | 50% |
| `Articular_cartilage_of_pisiform_bone_​` | `cartilage` | *Sin candidato claro* | — |
| `Articular_cartilage_of_radius_distal_end​` | `cartilage` | *Sin candidato claro* | — |
| `Articular_cartilage_of_scaphoid_bone​` | `cartilage` | `bone-scaphoid` (Escafoides (carpo)) | 50% |
| `Articular_cartilage_of_trapezium_bone​` | `cartilage` | `bone-trapezium` (Trapecio (carpo)) | 50% |
| `Articular_cartilage_of_trapezoid_bone​` | `cartilage` | *Sin candidato claro* | — |
| `Articular_cartilage_of_triquetrum_bone` | `cartilage` | *Sin candidato claro* | — |
| `Articular_cartilages_of_distal_phalanges` | `cartilage` | *Sin candidato claro* | — |
| `Articular_cartilages_of_metacarpal_bones` | `cartilage` | *Sin candidato claro* | — |
| `Articular_cartilages_of_middle_phalanges` | `cartilage` | *Sin candidato claro* | — |
| `Articular_cartilages_of_proximal_phalanges` | `cartilage` | *Sin candidato claro* | — |
| `Basilic_vein` | `vessel` | *Sin candidato claro* | — |
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Capitohamate_interosseus_ligament` | `ligament` | *Sin candidato claro* | — |
| `Cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Cephalic_vein` | `vessel` | *Sin candidato claro* | — |
| `Collateral_ligaments_of_distal_phalangeal_joints` | `ligament` | *Sin candidato claro* | — |
| `Collateral_ligaments_of_interphalangeal_joint` | `ligament` | *Sin candidato claro* | — |
| `Collateral_ligaments_of_metacarpal_joints` | `ligament` | *Sin candidato claro* | — |
| `Common_flexor_tendon_sheath` | `tendon` | `ten-common-flexor-tendon` (Tendón Common Flexor) | 75% |
| `Common_palmar_digital_arteries` | `vessel` | *Sin candidato claro* | — |
| `Common_tendon_of_extensor_carpi_ulnaris` | `tendon` | `mus-extensor-carpi-ulnaris` (Extensor Cubital del Carpo) | 60% |
| `Common_tendon_of_flexor_carpi_ulnaris` | `tendon` | `mus-flexor-carpi-ulnaris` (Flexor Cubital del Carpo) | 60% |
| `Cruciform_ligaments_of_2nd_finger` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_or_3rd_finger` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_or_4th_finger` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_or_5th_finger` | `ligament` | *Sin candidato claro* | — |
| `Deep_palmar_arch` | `vessel` | *Sin candidato claro* | — |
| `Deep_transverse_metacarpal_ligament` | `ligament` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 50% |
| `Deep_veins_of_the_arm` | `vessel` | *Sin candidato claro* | — |
| `Deep_venous_palmar_arch` | `vessel` | *Sin candidato claro* | — |
| `Distal_phalanx_of_1st_finger` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_2d_finger` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_3d_finger` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_4th_finger` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_5th_finger` | `bone` | *Sin candidato claro* | — |
| `Dorsal_carpal_arch` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_carpal_network` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_carpometacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_digital_arteries_of_hand` | `vessel` | `mus-dorsal-interossei-of-hand` (Interóseos Dorsales de la Mano) | 50% |
| `Dorsal_digital_veins` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_intercarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_intercarpal_ligaments001` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_metacarpal_artery` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_metacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_metatarsal_veins` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_radiocarpal_ligament` | `ligament` | `lig-dorsal-radio-ulnar-ligament` (Ligamento radio-ulnar dorsal) | 67% |
| `Dorsal_scaphotriquetral_ligament` | `ligament` | `lig-dorsal-radio-ulnar-ligament` (Ligamento radio-ulnar dorsal) | 67% |
| `Dorsal_ulnocarpal_ligament` | `ligament` | `lig-dorsal-radio-ulnar-ligament` (Ligamento radio-ulnar dorsal) | 67% |
| `Dorsal_venous_network_of_hand` | `vessel` | `mus-dorsal-interossei-of-hand` (Interóseos Dorsales de la Mano) | 50% |
| `Dorsalis_indicis` | `vessel` | `mus-extensor-indicis` (Extensor del Índice) | 50% |
| `Dorsalis_pollicis` | `vessel` | `mus-flexor-pollicis-longus` (Flexor Largo del Pulgar) | 50% |
| `Extensor_carpi_radialis_brevis_tendon_sheath` | `tendon` | `mus-extensor-carpi-radialis-brevis` (Extensor Radial Corto del Carpo) | 67% |
| `Extensor_carpi_radialis_longus_tendon_sheath` | `tendon` | `mus-extensor-carpi-radialis-longus` (Extensor Radial Largo del Carpo) | 67% |
| `Extensor_carpi_ulnaris_tendon_sheath` | `tendon` | `mus-extensor-carpi-ulnaris` (Extensor Cubital del Carpo) | 60% |
| `Extensor_digiti_minimi_tendon_sheath` | `tendon` | `mus-extensor-digiti-minimi` (Extensor del Meñique) | 60% |
| `Extensor_digitorum_-_Extensor_indicis_tendon_sheath` | `tendon` | `mus-extensor-digitorum` (Extensor de los Dedos) | 50% |
| `Extensor_hood_of_2nd_finger` | `ligament` | *Sin candidato claro* | — |
| `Extensor_hood_of_3rd_finger` | `ligament` | *Sin candidato claro* | — |
| `Extensor_hood_of_4th_finger` | `ligament` | *Sin candidato claro* | — |
| `Extensor_hood_of_5th_finger` | `ligament` | *Sin candidato claro* | — |
| `Extensor_pollicis_longus_tendon_sheath` | `tendon` | `mus-extensor-pollicis-longus` (Extensor Largo del Pulgar) | 60% |
| `Fascia` | `fascia` | `mus-tensor-fasciae-latae` (Tensor de la Fascia Lata) | 100% |
| `Fibrous_sheath_of_digits_of_hand` | `tendon` | *Sin candidato claro* | — |
| `Fibrous_sheath_of_digits_of_hand_thumb` | `tendon` | *Sin candidato claro* | — |
| `Flexor_carpi_radialis_tendon_sheath` | `tendon` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 60% |
| `Flexor_pollicis_longus_tendon_sheath` | `tendon` | `mus-flexor-pollicis-longus` (Flexor Largo del Pulgar) | 60% |
| `Intercapitular_veins_of_hand` | `vessel` | *Sin candidato claro* | — |
| `Interosseous_metacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Intertendinous_connections_of_extensor_digitorum` | `ligament` | `mus-extensor-digitorum` (Extensor de los Dedos) | 50% |
| `Lateral_band_of_2nd_finger` | `ligament` | *Sin candidato claro* | — |
| `Lateral_band_of_3rd_finger` | `ligament` | *Sin candidato claro* | — |
| `Lateral_band_of_4th_finger` | `ligament` | *Sin candidato claro* | — |
| `Lateral_band_of_5th_finger` | `ligament` | *Sin candidato claro* | — |
| `Ligaments` | `ligament` | *Sin candidato claro* | — |
| `Lunotriquetral_interosseous_ligament` | `ligament` | *Sin candidato claro* | — |
| `Median_antebrachial_vein` | `vessel` | *Sin candidato claro* | — |
| `Middle_phalanx_of_2d_finger` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_3rd_finger` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_4th_finger` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_5th_finger` | `bone` | *Sin candidato claro* | — |
| `Muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 100% |
| `Nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 100% |
| `Oblique_ligament_of_1st_finger` | `ligament` | *Sin candidato claro* | — |
| `Palmal_digital_veins` | `vessel` | *Sin candidato claro* | — |
| `Palmar_capitohamate_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_carpal_branches` | `vessel` | *Sin candidato claro* | — |
| `Palmar_carpometacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Palmar_ligaments_of_distal_phalangeal_joints` | `ligament` | *Sin candidato claro* | — |
| `Palmar_ligaments_of_interphalangeal_joints` | `ligament` | *Sin candidato claro* | — |
| `Palmar_ligaments_of_metacarpophalangeal_joints` | `ligament` | *Sin candidato claro* | — |
| `Palmar_lunotriquetral_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_metacarpal_arteries` | `vessel` | *Sin candidato claro* | — |
| `Palmar_metacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Palmar_metacarpal_veins` | `vessel` | *Sin candidato claro* | — |
| `Palmar_radiocarpal_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_scaphotriquetral_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_trapezoideocapitate_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_ulnocarpal_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_venous_network_of_hand` | `vessel` | *Sin candidato claro* | — |
| `Perforating_arteries_of_hand` | `vessel` | *Sin candidato claro* | — |
| `Pisiform` | `bone` | *Sin candidato claro* | — |
| `Pisohamate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Pisometacarpal_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Pisotriquetral_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Posterior_interosseous_artery` | `vessel` | `ner-posterior-interosseous-nerve` (Nervio Interóseo Posterior (PIN)) | 67% |
| `Posterior_interosseous_veins` | `vessel` | `ner-posterior-interosseous-nerve` (Nervio Interóseo Posterior (PIN)) | 67% |
| `Princeps_pollicis_artery` | `vessel` | *Sin candidato claro* | — |
| `Proper_palmar_digital_arteries` | `vessel` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_1st_finger` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_2d_finger` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_3rd_finger` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_4th_finger` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_5th_finger` | `bone` | *Sin candidato claro* | — |
| `Radial_artery` | `vessel` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 50% |
| `Radial_collateral_ligament` | `ligament` | `lig-fibular-collateral-ligament` (Ligamento colateral lateral (LCL)) | 67% |
| `Radial_veins` | `vessel` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 50% |
| `Radialis_indicis` | `vessel` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 50% |
| `Radiate_carpal_ligament` | `ligament` | *Sin candidato claro* | — |
| `Radioscaphocapitate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Scaphocapitate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Scapholunate_interosseus_ligament` | `ligament` | *Sin candidato claro* | — |
| `Scaphotrapeziotrapezoidal_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Sesamoid_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Superficial_palmar_arch` | `vessel` | *Sin candidato claro* | — |
| `Superficial_palmar_venous_arch` | `vessel` | *Sin candidato claro* | — |
| `Superficial_transverse_metacarpal_ligament` | `ligament` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 50% |
| `Superficial_veins_of_upper_limb` | `vessel` | *Sin candidato claro* | — |
| `Synovial_sheaths_of_fingers` | `tendon` | *Sin candidato claro* | — |
| `Transverse_carpal_ligament` | `ligament` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 67% |
| `Trapeziotrapezoidal_interosseous_ligament` | `ligament` | *Sin candidato claro* | — |
| `Trapezoid` | `bone` | `lig-trapezoid-ligament` (Ligamento trapezoide (coracoclavicular)) | 100% |
| `Trapezoideocapitate_interosseous_ligament` | `ligament` | *Sin candidato claro* | — |
| `Triangular_fibro_cartilage_disc` | `cartilage` | *Sin candidato claro* | — |
| `Triquetrocapitate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Triquetrohamate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Triquetrum` | `bone` | *Sin candidato claro* | — |
| `Ulnar_artery` | `vessel` | `ner-ulnar-nerve` (Nervio Ulnar) | 50% |
| `Ulnar_artery_(dorsal_carpal_br)` | `vessel` | `lig-dorsal-radio-ulnar-ligament` (Ligamento radio-ulnar dorsal) | 50% |
| `Ulnar_collateral_ligament` | `ligament` | `lig-ulnar-collateral-ligament-of-elbow` (Ligamento colateral cubital del codo) | 100% |
| `Ulnar_veins` | `vessel` | `ner-ulnar-nerve` (Nervio Ulnar) | 50% |
| `Ulnopisiform_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Ulnotriquetral_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Veins` | `vessel` | *Sin candidato claro* | — |

### 🔹 Modelo: `lower-limb` (305 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `1th_to_4th_perforating_branches_of_the_deep_femoral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `1th_to_4th_perforating_branches_of_the_deep_femoral_veinr` | `vessel` | *Sin candidato claro* | — |
| `Accessory_saphenous_veinr` | `vessel` | *Sin candidato claro* | — |
| `Accompanying_veins_of_arcuate_and_dorsal_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Accompanying_veins_of_dorsal_digital_metatarsal_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Acetabular_labrumr` | `cartilage` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 50% |
| `Annular_ligaments_of_1st_toe_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_2nd_toe_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_3rd_toe_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_4th_toe_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_5th_toe_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L1_L2` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L2_L3` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L3_L4` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L4_L5` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L5_S1` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T12_L1` | `cartilage` | *Sin candidato claro* | — |
| `Anterior_branch_of_Iliohypogastric_nerver` | `nerve` | *Sin candidato claro* | — |
| `Anterior_femoral_cutaneous_veinr` | `vessel` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 50% |
| `Anterior_horn_of_Lateral_meniscusr` | `cartilage` | *Sin candidato claro* | — |
| `Anterior_horn_of_Medial_meniscusr` | `cartilage` | *Sin candidato claro* | — |
| `Anterior_intermuscular_septum_of_legr` | `fascia` | *Sin candidato claro* | — |
| `Anterior_lateral_malleolar_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Anterior_ligament_of_fibular_headr` | `ligament` | `lig-anterior-cruciate-ligament` (Ligamento cruzado anterior (LCA)) | 50% |
| `Anterior_medial_malleolar_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Anterior_pubic_ligament` | `ligament` | `lig-anterior-cruciate-ligament` (Ligamento cruzado anterior (LCA)) | 67% |
| `Anterior_sacro-iliac_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Anterior_talocalcaneal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Anterior_tibial_arteryr` | `vessel` | `mus-tibialis-anterior` (Tibial Anterior) | 67% |
| `Anterior_tibial_recurrent_arteryr` | `vessel` | `mus-tibialis-anterior` (Tibial Anterior) | 50% |
| `Anterior_tibial_veinr` | `vessel` | `mus-tibialis-anterior` (Tibial Anterior) | 67% |
| `Anterior_tibiotalar_ligament_(Tibiospring_lig)r` | `ligament` | `lig-anterior-cruciate-ligament` (Ligamento cruzado anterior (LCA)) | 60% |
| `Arcuate_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Arcuate_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Art_cart_of_Sesamoid_bonesr` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_calcaneusr_` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_cuboid_boner` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_femur_distal_endr` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_cart_of_femur_headr` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_fibula_proximal_tibiofibular_jointr` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_fibula_talofibular_jointr` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_hip_bone_pubisr_` | `cartilage` | `art-hip-joint` (Coxofemoral (Cadera)) | 40% |
| `Art_cart_of_intermediate_cuneiform_boner` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_lateral_cuneiform_boner` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_medial_cuneiform_boner_` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_navicular_boner` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_patellar` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_sacrococcygeal_joint_on_coccyx` | `cartilage` | `art-shoulder-joint` (Glenohumeral (Hombro)) | 40% |
| `Art_cart_of_sacrococcygeal_joint_on_sacrum` | `cartilage` | `art-shoulder-joint` (Glenohumeral (Hombro)) | 40% |
| `Art_cart_of_sacroiliac_joint_on_hip_bone` | `cartilage` | `art-sacroiliac-joint` (Sacroilíaca) | 50% |
| `Art_cart_of_sacroiliac_joint_on_sacrum` | `cartilage` | `art-sacroiliac-joint` (Sacroilíaca) | 60% |
| `Art_cart_of_talusr_​` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_tibia_distal_endr_` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_cart_of_tibia_proximal_endr` | `cartilage` | `art-radioulnar-articulation` (Radioulnar Proximal) | 40% |
| `Art_cart_of_tibia_proximal_tibiofibular_jointr​` | `cartilage` | *Sin candidato claro* | — |
| `Art_carts_of_distal_phalanges_of_footr` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_carts_of_metatarsal_bonesr` | `bone` | *Sin candidato claro* | — |
| `Art_carts_of_middle_phalanges_of_footr` | `cartilage` | *Sin candidato claro* | — |
| `Art_carts_of_proximal_phalanges_of_footr` | `cartilage` | `art-radioulnar-articulation` (Radioulnar Proximal) | 40% |
| `Arteries` | `vessel` | *Sin candidato claro* | — |
| `Articular_capsule_of_knee_jointr` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_distal_interphalangeal_joints` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_metatarsophalangeal_jointsr` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_proximal_interphalangealr` | `joint` | *Sin candidato claro* | — |
| `Articular_cartilage_of_hip_bone_acetabulumr` | `cartilage` | `bone-hip-bone` (Hueso coxal) | 40% |
| `Ascending_branch_of_lateral_circumflex_femoral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Bifurcatum_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Calcaneocuboid_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Calcaneonavicular_ligamentr` | `ligament` | `lig-plantar-calcaneonavicular-ligament` (Ligamento calcaneonavicular plantar) | 50% |
| `Capsule_of_talocrural_jointr` | `joint` | *Sin candidato claro* | — |
| `Cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Cervical_ligament_(anterior_talocalcaneal_ligament)r` | `ligament` | `lig-anterior-cruciate-ligament` (Ligamento cruzado anterior (LCA)) | 60% |
| `Collateral_ligament_of_proximal_interphalangeal_jointsr` | `ligament` | `lig-fibular-collateral-ligament` (Ligamento colateral lateral (LCL)) | 40% |
| `Collateral_ligaments_of_distal_interphalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Collateral_ligaments_of_metatarsophalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Common_plantar_digital_nervesr` | `nerve` | *Sin candidato claro* | — |
| `Common_tendon_of_biceps_femorisr` | `tendon` | `ten-long-head-of-biceps-tendon` (Tendón Cabeza Larga del Bíceps) | 50% |
| `Communicating_brof_Posterior_tibial_a_and_Femoral_ar` | `bone` | *Sin candidato claro* | — |
| `Cruciform_ligaments_or_1st_toer` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_or_2nd_toer` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_or_3rd_toer` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_or_4th_toer` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_or_5th_toer` | `ligament` | *Sin candidato claro* | — |
| `Crural_fasciar` | `fascia` | *Sin candidato claro* | — |
| `Cuboid_boner` | `bone` | *Sin candidato claro* | — |
| `Cuneometatarsal_interosseus_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Deep_artery_of_the_thighr` | `vessel` | *Sin candidato claro* | — |
| `Deep_branch_of_Lateral_plantar_nerver` | `nerve` | *Sin candidato claro* | — |
| `Deep_branch_of_Medial_plantar_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Deep_femoral_veinr` | `vessel` | *Sin candidato claro* | — |
| `Deep_fibular_nerver` | `nerve` | *Sin candidato claro* | — |
| `Deep_plantar_archr` | `vessel` | *Sin candidato claro* | — |
| `Deep_plantar_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Deep_transverse_metatarsal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Descending_branch_of_lateral_circumflex_femoral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Descending_genicular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Descending_part_of_Iliofemoral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Distal_phalanx_of_fifth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_first_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_fourth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_second_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_third_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Dorsal_calcaneocuboid_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_cuboidonavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_cuneocuboid_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_cuneonavicular_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_digital_arteries_of_footr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_digital_branches_of_deep_fibular_nerver` | `nerve` | *Sin candidato claro* | — |
| `Dorsal_digital_branches_of_superficial_fibular_nerver` | `nerve` | *Sin candidato claro* | — |
| `Dorsal_digital_vein_of_medial_side_of_great_toer` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_digital_veinsr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_intercuneiform_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_metatarsal_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_metatarsal_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_metatarsal_veinsr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_pedis_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_tarsometatarsal_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_venous_arch_of_footr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_venous_network_of_footr` | `vessel` | *Sin candidato claro* | — |
| `Extensor_apparatus_of_1st_toer` | `ligament` | *Sin candidato claro* | — |
| `Extensor_apparatus_of_2nd_toer` | `ligament` | *Sin candidato claro* | — |
| `Extensor_apparatus_of_3rd_toer` | `ligament` | *Sin candidato claro* | — |
| `Extensor_apparatus_of_4th_toer` | `ligament` | *Sin candidato claro* | — |
| `Extensor_apparatus_of_5th_toer` | `ligament` | *Sin candidato claro* | — |
| `Extensor_digitorum_longus-fibularis_tertius_vaginae_tendinumr` | `tendon` | `mus-extensor-digitorum-longus` (Extensor Largo de los Dedos) | 43% |
| `Extensor_digitorum_longus_tendonsr` | `tendon` | `mus-extensor-digitorum-longus` (Extensor Largo de los Dedos) | 75% |
| `Extensor_hallucis_longus_tendon_sheathr` | `tendon` | `mus-extensor-hallucis-longus` (Extensor Largo del Hallux) | 60% |
| `Fascia` | `fascia` | `mus-tensor-fasciae-latae` (Tensor de la Fascia Lata) | 100% |
| `Fascia_latar` | `fascia` | `mus-tensor-fasciae-latae` (Tensor de la Fascia Lata) | 50% |
| `Femoral_arteryr` | `vessel` | `mus-quadratus-femoris` (Cuadrado Femoral) | 50% |
| `Femoral_branch_of_Genitofemoral_nerver` | `nerve` | *Sin candidato claro* | — |
| `Femoral_neck_vesselsr` | `vessel` | *Sin candidato claro* | — |
| `Femoral_veinr` | `vessel` | `mus-quadratus-femoris` (Cuadrado Femoral) | 50% |
| `Fibrous_sheath_of_toesr` | `tendon` | *Sin candidato claro* | — |
| `Fibular_arteryr` | `vessel` | `mus-fibularis-tertius` (Fibular Tercero) | 50% |
| `Fibular_veinr` | `vessel` | `mus-fibularis-tertius` (Fibular Tercero) | 50% |
| `Flexor_digiti_minimi_brevis_of_footr` | `muscle` | `mus-extensor-digiti-minimi` (Extensor del Meñique) | 40% |
| `Flexor_digitorum_longus_tendon_sheathr` | `tendon` | `mus-flexor-digitorum-longus` (Flexor Largo de los Dedos) | 60% |
| `Flexor_hallucis_longus_tendon_sheathr` | `tendon` | `mus-flexor-hallucis-longus` (Flexor Largo del Hallux) | 60% |
| `Genital_branch_of_Genitofemoral_nerver` | `nerve` | *Sin candidato claro* | — |
| `Gluteal_aponeurosisr` | `fascia` | `ner-superior-gluteal-nerve` (Nervio Glúteo Superior) | 50% |
| `Great_saphenous_veinr` | `vessel` | *Sin candidato claro* | — |
| `Hip_joint_capsuler` | `joint` | `art-hip-joint` (Coxofemoral (Cadera)) | 67% |
| `Ilioinguinal_nerver` | `nerve` | *Sin candidato claro* | — |
| `Iliotibial_tractr` | `fascia` | *Sin candidato claro* | — |
| `Inferior_clunial_br_of_post_cutaneous_nerve_of_the_thighr` | `nerve` | *Sin candidato claro* | — |
| `Inferior_extensor_retinaculumr` | `ligament` | *Sin candidato claro* | — |
| `Inferior_fibular_retinaculumr` | `ligament` | *Sin candidato claro* | — |
| `Inferior_lateral_genicular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Inferior_lateral_genicular_veinr` | `vessel` | *Sin candidato claro* | — |
| `Inferior_medial_genicular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Inferior_medial_genicular_veinr` | `vessel` | *Sin candidato claro* | — |
| `Infrapatellar_branch_of_Saphenous_nerver` | `nerve` | *Sin candidato claro* | — |
| `Infrapatellar_fat_padr` | `muscle` | *Sin candidato claro* | — |
| `Intercapitular_veins_of_footr` | `vessel` | *Sin candidato claro* | — |
| `Intercornual_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Intercuneiform_interosseus_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Intermediate_cuneiform_boner` | `bone` | *Sin candidato claro* | — |
| `Interossea__Posterior_sacro-iliac_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Interosseous_membrane_of_legr` | `fascia` | *Sin candidato claro* | — |
| `Interosseus_talocalcaneal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Interpubic_disc` | `cartilage` | *Sin candidato claro* | — |
| `Intersesamoid_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Ishciofemoral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Lateral_branch_of_deep_fibular_nerver` | `nerve` | `lig-fibular-collateral-ligament` (Ligamento colateral lateral (LCL)) | 40% |
| `Lateral_calcaneal_branch_of_fibular_arteryr` | `vessel` | `lig-fibular-collateral-ligament` (Ligamento colateral lateral (LCL)) | 40% |
| `Lateral_calcaneal_nervesr` | `nerve` | *Sin candidato claro* | — |
| `Lateral_circumflex_femoral_arteryr` | `vessel` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 50% |
| `Lateral_circumflex_femoral_veinr` | `vessel` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 50% |
| `Lateral_cuneiform_boner` | `bone` | *Sin candidato claro* | — |
| `Lateral_cutaneous_branch_of_Iliohypogaticus_nerver` | `nerve` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 40% |
| `Lateral_dorsal_cutaneous_nerve_(Sural_n)r` | `nerve` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 60% |
| `Lateral_dorsal_cutaneous_nerver` | `nerve` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 50% |
| `Lateral_femoral_intermuscular_septumr` | `fascia` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 50% |
| `Lateral_malleolar_branches_of_Fibular_arteryr` | `vessel` | `lig-fibular-collateral-ligament` (Ligamento colateral lateral (LCL)) | 40% |
| `Lateral_marginal_veinr` | `vessel` | *Sin candidato claro* | — |
| `Lateral_meniscusr` | `cartilage` | `mus-lateral-pterygoid` (Pterigoideo Lateral) | 50% |
| `Lateral_patellar_retinaculum_(horizontal_part)r` | `ligament` | *Sin candidato claro* | — |
| `Lateral_patellar_retinaculum_(vertical_part)r` | `ligament` | *Sin candidato claro* | — |
| `Lateral_plantar_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Lateral_plantar_cutaneous_nerve_(Sural_n)r` | `nerve` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 60% |
| `Lateral_plantar_nerver` | `nerve` | *Sin candidato claro* | — |
| `Lateral_plantar_veinr` | `vessel` | *Sin candidato claro* | — |
| `Lateral_sural_cutaneous_nerver` | `nerve` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 50% |
| `Lateral_tarsal_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Ligaments` | `ligament` | *Sin candidato claro* | — |
| `Ligaments_of_fibular_headr` | `ligament` | *Sin candidato claro* | — |
| `Medial_branch_of_deep_fibular_nerver` | `nerve` | *Sin candidato claro* | — |
| `Medial_calcaneal_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Medial_circumflex_femoral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Medial_circumflex_femoral_veinr` | `vessel` | *Sin candidato claro* | — |
| `Medial_collatertal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Medial_cuneiform_boner` | `bone` | *Sin candidato claro* | — |
| `Medial_dorsal_cutaneous_nerver` | `nerve` | *Sin candidato claro* | — |
| `Medial_femoral_intermuscular_septumr` | `fascia` | *Sin candidato claro* | — |
| `Medial_malleolar_artery_of_Posterior_tibial_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Medial_marginal_veinr` | `vessel` | *Sin candidato claro* | — |
| `Medial_meniscusr` | `cartilage` | `mus-medial-pterygoid` (Pterigoideo Medial) | 50% |
| `Medial_patellar_retinaculum_(horizontal_part)r` | `ligament` | *Sin candidato claro* | — |
| `Medial_patellar_retinaculum_(vertical_part)r` | `ligament` | *Sin candidato claro* | — |
| `Medial_plantar_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Medial_plantar_nerver` | `nerve` | *Sin candidato claro* | — |
| `Medial_plantar_veinr` | `vessel` | *Sin candidato claro* | — |
| `Medial_sural_cutaneous_nerver` | `nerve` | *Sin candidato claro* | — |
| `Medial_talocalcaneal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Medial_tarsal_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Metatarsal_interosseous_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Middle_genicular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Middle_genicular_veinr` | `vessel` | *Sin candidato claro* | — |
| `Middle_phalanx_of_fifth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_fourth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_second_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_third_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 100% |
| `Muscular_branches_of_the_Femoral_nerver` | `nerve` | *Sin candidato claro* | — |
| `Nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 100% |
| `Oblique_popliteal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Obturator_membraner` | `fascia` | `mus-obturator-internus` (Obturador Interno) | 50% |
| `Opponens_digiti_minimi_muscle_of_footr` | `muscle` | `mus-extensor-digiti-minimi` (Extensor del Meñique) | 40% |
| `Palmar_ligament_of_proximal_interphalangeal_jointsr` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 40% |
| `Palmar_ligaments_of_distal_interphalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Palmar_ligaments_of_metatarsophalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Perforating_br_between_Arcuate_a_and_Deep_plantar_archr` | `vessel` | *Sin candidato claro* | — |
| `Perforating_branches_(Boyd's_veins)r` | `vessel` | *Sin candidato claro* | — |
| `Perforating_branches_(Cockett's_veins)r` | `vessel` | *Sin candidato claro* | — |
| `Perforating_branches_(Dodd's_veins)r` | `vessel` | *Sin candidato claro* | — |
| `Perforating_branches_of_fibular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Plantar_calcaneocuboid_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Plantar_cuboideonavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Plantar_cuneocuboid_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Plantar_cuneonavicular_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Plantar_digital_veinsr` | `vessel` | *Sin candidato claro* | — |
| `Plantar_intercuneiform_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Plantar_metatarsal_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Plantar_metatarsal_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Plantar_metatarsal_veinsr` | `vessel` | *Sin candidato claro* | — |
| `Plantar_tarsometatarsal_ligamentsr` | `ligament` | *Sin candidato claro* | — |
| `Plantar_venous_archr` | `vessel` | *Sin candidato claro* | — |
| `Popliteal_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Popliteal_veinr` | `vessel` | *Sin candidato claro* | — |
| `Posterior_arch_veinsr` | `vessel` | *Sin candidato claro* | — |
| `Posterior_cutaneous_nerve_of_the_thighr` | `nerve` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 40% |
| `Posterior_horn_of_Lateral_meniscusr` | `cartilage` | *Sin candidato claro* | — |
| `Posterior_horn_of_Medial_meniscusr` | `cartilage` | *Sin candidato claro* | — |
| `Posterior_intermuscular_septum_of_legr` | `fascia` | *Sin candidato claro* | — |
| `Posterior_ligament_of_fibular_headr` | `ligament` | `lig-posterior-cruciate-ligament` (Ligamento cruzado posterior (LCP)) | 50% |
| `Posterior_meniscofemoral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Posterior_pubic_ligament` | `ligament` | `lig-posterior-cruciate-ligament` (Ligamento cruzado posterior (LCP)) | 67% |
| `Posterior_talocalcaneal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Posterior_talofibular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Posterior_tibial_arteryr` | `vessel` | `mus-tibialis-posterior` (Tibial Posterior) | 67% |
| `Posterior_tibial_recurrent_arteryr` | `vessel` | `mus-tibialis-posterior` (Tibial Posterior) | 50% |
| `Posterior_tibial_veinr` | `vessel` | `mus-tibialis-posterior` (Tibial Posterior) | 67% |
| `Posterior_tibiofibular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Posterior_tibiotalar_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Proper_plantar_digital_branches_(Lateral_plantar_nerve)r` | `nerve` | *Sin candidato claro* | — |
| `Proper_plantar_digital_branches_(Medial_plantar_nerve)r` | `nerve` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_fifth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_first_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_fourth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_second_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_third_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Pubofemoral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Saphenous_branch_of_Femoralis_nerver` | `nerve` | *Sin candidato claro* | — |
| `Saphenous_nerve_(Medial_crural_cutaneous_branches)r` | `nerve` | *Sin candidato claro* | — |
| `Semimembranosus_bursa_deep_to_tendonr` | `tendon` | *Sin candidato claro* | — |
| `Sesamoid_bones_of_footr` | `bone` | *Sin candidato claro* | — |
| `Small_saphenous_veinr` | `vessel` | *Sin candidato claro* | — |
| `Sup,_Inf,_Ant,_Post,_Pubic_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Superficial_branch_of_Lateral_plantar_nerver` | `nerve` | *Sin candidato claro* | — |
| `Superficial_branch_of_Medial_planter_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_circumflex_iliac_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_circumflex_iliac_veinr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_epigastric_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_epigastric_veinr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_external_pudendal_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_external_pudendal_veinr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_fibular_nerver` | `nerve` | *Sin candidato claro* | — |
| `Superficial_transverse_metatarsal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Superior_clunial_nerve_(posterior_rami)r` | `nerve` | `mus-serratus-posterior-superior` (Serrato Posterior Superior) | 40% |
| `Superior_extensor_retinaculum_of_ankler` | `ligament` | `lig-extensor-retinaculum-of-wrist` (Retináculo extensor de la muñeca) | 50% |
| `Superior_fibular_retinaculumr` | `ligament` | *Sin candidato claro* | — |
| `Superior_lateral_genicular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superior_lateral_genicular_veinr` | `vessel` | *Sin candidato claro* | — |
| `Superior_medial_genicular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superior_medial_genicular_veinr` | `vessel` | *Sin candidato claro* | — |
| `Sural_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Sural_nerver` | `nerve` | *Sin candidato claro* | — |
| `Sural_veinr` | `vessel` | *Sin candidato claro* | — |
| `Symphysis_of_sacrococcygeal_joint` | `joint` | *Sin candidato claro* | — |
| `Synovial_membranes_of_kneer` | `cartilage` | *Sin candidato claro* | — |
| `Synovial_sheaths_of_toesr` | `tendon` | *Sin candidato claro* | — |
| `Talonavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Tensor_fasciae_lataer` | `fascia` | `mus-tensor-fasciae-latae` (Tensor de la Fascia Lata) | 67% |
| `Tibialis_anterior_tendon_sheathr` | `tendon` | `mus-tibialis-anterior` (Tibial Anterior) | 50% |
| `Tibiocalcaneal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Tibionavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Transverse_intermuscular_septum_of_legr` | `fascia` | *Sin candidato claro* | — |
| `Transverse_ligament_of_kneer` | `ligament` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 67% |
| `Transverse_part_of_Iliofemoral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Transverse_tibiofibular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Tributary_veins_of_Great_and_small_saphenous_veinsr` | `vessel` | *Sin candidato claro* | — |
| `Veins` | `vessel` | *Sin candidato claro* | — |
| `Zona_orbicularis_of_hip_jointr` | `joint` | *Sin candidato claro* | — |

### 🔹 Modelo: `overview-colored-skull` (19 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Bones_right` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Inferior_nasal_concha_boner` | `bone` | *Sin candidato claro* | — |
| `Lacrimal_boner` | `bone` | *Sin candidato claro* | — |
| `Lower_caniner` | `bone` | *Sin candidato claro* | — |
| `Lower_first_molar_toothr` | `bone` | *Sin candidato claro* | — |
| `Lower_first_premolarr` | `bone` | *Sin candidato claro* | — |
| `Lower_lateral_incisorr` | `bone` | *Sin candidato claro* | — |
| `Lower_medial_incisorr` | `bone` | *Sin candidato claro* | — |
| `Lower_second_molar_toothr` | `bone` | *Sin candidato claro* | — |
| `Lower_second_premolarr` | `bone` | *Sin candidato claro* | — |
| `Palatine_boner` | `bone` | *Sin candidato claro* | — |
| `Upper_caniner` | `bone` | *Sin candidato claro* | — |
| `Upper_first_molar_toothr` | `bone` | *Sin candidato claro* | — |
| `Upper_first_premolarr` | `bone` | *Sin candidato claro* | — |
| `Upper_lateral_incisorr` | `bone` | *Sin candidato claro* | — |
| `Upper_medial_incisorr` | `bone` | *Sin candidato claro* | — |
| `Upper_second_molar_toothr` | `bone` | *Sin candidato claro* | — |
| `Upper_second_premolarr` | `bone` | *Sin candidato claro* | — |

### 🔹 Modelo: `overview-skeleton` (72 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `1st_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `2nd_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `3rd_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `4th_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `5th_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Bones_right` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Cartilages_right` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_10th_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_1st_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_2nd_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_3rd_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_4th_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_5th_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_6th_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_7th_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_8th_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_9th_ribr` | `cartilage` | *Sin candidato claro* | — |
| `Cuboid_boner` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_1st_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_2d_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_3d_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_4th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_5th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_fifth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_first_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_fourth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_second_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_third_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Inferior_nasal_concha_boner` | `bone` | *Sin candidato claro* | — |
| `Intermediate_cuneiform_boner` | `bone` | *Sin candidato claro* | — |
| `Lacrimal_boner` | `bone` | *Sin candidato claro* | — |
| `Lateral_cuneiform_boner` | `bone` | *Sin candidato claro* | — |
| `Lower_caniner` | `bone` | *Sin candidato claro* | — |
| `Lower_first_molar_toothr` | `bone` | *Sin candidato claro* | — |
| `Lower_first_premolarr` | `bone` | *Sin candidato claro* | — |
| `Lower_lateral_incisorr` | `bone` | *Sin candidato claro* | — |
| `Lower_medial_incisorr` | `bone` | *Sin candidato claro* | — |
| `Lower_second_molar_toothr` | `bone` | *Sin candidato claro* | — |
| `Lower_second_premolarr` | `bone` | *Sin candidato claro* | — |
| `Medial_cuneiform_boner` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_2d_fingerr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_3rd_fingerr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_4th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_5th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_fifth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_fourth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_second_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_third_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Palatine_boner` | `bone` | *Sin candidato claro* | — |
| `Pisiformr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_1st_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_2d_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_3rd_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_4th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_5th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_fifth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_first_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_fourth_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_second_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_third_finger_of_footr` | `bone` | *Sin candidato claro* | — |
| `Sesamoid_bones_of_footr` | `bone` | *Sin candidato claro* | — |
| `Sesamoid_bones_of_handr` | `bone` | *Sin candidato claro* | — |
| `Trapezoidr` | `bone` | *Sin candidato claro* | — |
| `Triquetrumr` | `bone` | *Sin candidato claro* | — |
| `Upper_caniner` | `bone` | *Sin candidato claro* | — |
| `Upper_first_molar_toothr` | `bone` | *Sin candidato claro* | — |
| `Upper_first_premolarr` | `bone` | *Sin candidato claro* | — |
| `Upper_lateral_incisorr` | `bone` | *Sin candidato claro* | — |
| `Upper_medial_incisorr` | `bone` | *Sin candidato claro* | — |
| `Upper_second_molar_toothr` | `bone` | *Sin candidato claro* | — |
| `Upper_second_premolarr` | `bone` | *Sin candidato claro* | — |

### 🔹 Modelo: `upper-limb` (384 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `10th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `10th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `11th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `12th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `1st_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `1st_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `1st_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `2nd_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `2nd_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `2nd_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `3rd_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `3rd_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `3rd_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `4th_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `4th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `4th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `5th_metacarpal_boner` | `bone` | *Sin candidato claro* | — |
| `5th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `5th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `6th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `6th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `7th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `7th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `8th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `8th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `9th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `9th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `Acromioclavicular_capsuler` | `joint` | `art-acromioclavicular-joint` (Acromioclavicular) | 50% |
| `Acromioclavicular_ligamentr` | `ligament` | `art-acromioclavicular-joint` (Acromioclavicular) | 50% |
| `Adductor_pollicisr` | `muscle` | `mus-adductor-magnus` (Aductor Mayor) | 50% |
| `Annular_ligament(A1)_of_1st_fingerr` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligament(A2)_of_1st_fingerr` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_2nd_finger_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_3rd_finger_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_4th_finger_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annular_ligaments_of_5th_finger_A1-A5r` | `ligament` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L1_L20` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L2_L3` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L3_L4` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L4_L5` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_L5_S1` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T10_T11` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T11_T12` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T12_L1` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T1_T2` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T2_T3` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T3_T4` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T4_T5` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T5_T6` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T6_T7` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T7_T8` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T8_T9` | `cartilage` | *Sin candidato claro* | — |
| `Annulus_fibrosus_T9_T10` | `cartilage` | *Sin candidato claro* | — |
| `Antebrachial_fasciar` | `fascia` | *Sin candidato claro* | — |
| `Anterior_circumflex_humeral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Anterior_divisions_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Anterior_interosseous_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Anterior_interosseous_veinsr` | `vessel` | *Sin candidato claro* | — |
| `Anterior_sternoclavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Anterior_ulnar_recurrent_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Aponeurosis_palmarisr` | `fascia` | *Sin candidato claro* | — |
| `Arm_-_arteries` | `vessel` | *Sin candidato claro* | — |
| `Arm_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Arm_-_capsules,_ligaments,_fasciae` | `fascia` | *Sin candidato claro* | — |
| `Arm_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Arm_-_muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 50% |
| `Arm_-_nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 50% |
| `Arm_-_veins` | `vessel` | *Sin candidato claro* | — |
| `Arm_superficial_vein-Basilic_veinr` | `vessel` | *Sin candidato claro* | — |
| `Arm_superficial_vein-Cephalic_veinr` | `vessel` | *Sin candidato claro* | — |
| `Arm_superficial_vein-Median_antebrachial_veinr` | `vessel` | *Sin candidato claro* | — |
| `Arm_superficial_vein-Median_cubital_veinr` | `vessel` | *Sin candidato claro* | — |
| `Art_cart_of_capitate_bone​` | `cartilage` | `bone-capitate` (Grande (carpo)) | 50% |
| `Art_cart_of_hamate_bone​` | `cartilage` | `bone-hamate` (Ganchoso) | 50% |
| `Art_cart_of_humerus_distal_endr​` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_cart_of_humerus_head​r` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_lunate_bone` | `cartilage` | `bone-lunate-bone` (Semilunar) | 50% |
| `Art_cart_of_pisiform_bone_​` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_radius_distal_end​r` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_cart_of_radius_head​r` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_scaphoid_bone​` | `cartilage` | `bone-scaphoid` (Escafoides (carpo)) | 50% |
| `Art_cart_of_trapezium_bone​` | `cartilage` | `bone-trapezium` (Trapecio (carpo)) | 50% |
| `Art_cart_of_trapezoid_bone​` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_triquetrum_bone` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_ulna_(distal_end)r` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_cart_of_ulna_(proximal_end)r` | `cartilage` | `art-radioulnar-articulation` (Radioulnar Proximal) | 40% |
| `Art_carts_of_distal_phalanges` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 50% |
| `Art_carts_of_metacarpal_bones` | `bone` | *Sin candidato claro* | — |
| `Art_carts_of_middle_phalanges` | `cartilage` | *Sin candidato claro* | — |
| `Art_carts_of_proximal_phalanges` | `cartilage` | `art-radioulnar-articulation` (Radioulnar Proximal) | 50% |
| `Articular_capsule_of_elbow_jointr` | `joint` | *Sin candidato claro* | — |
| `Articular_capsule_of_glenohumeral_jointr` | `joint` | *Sin candidato claro* | — |
| `Articular_capsule_of_radiocarpal_joint` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_distal_interphalangeal_joints` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_metacarpophalangeal_joints` | `joint` | *Sin candidato claro* | — |
| `Articular_capsules_of_proximal_interphalangeal_joints` | `joint` | *Sin candidato claro* | — |
| `Articular_cartilage_of_acromioclavicular_joint_on_clavicler` | `cartilage` | `art-acromioclavicular-joint` (Acromioclavicular) | 40% |
| `Articular_cartilage_of_acromioclavicular_joint_on_scapular` | `cartilage` | `art-acromioclavicular-joint` (Acromioclavicular) | 40% |
| `Articular_cartilage_of_glenohumeral_joint_on_scapular` | `cartilage` | `art-shoulder-joint` (Glenohumeral (Hombro)) | 40% |
| `Articular_cartilage_of_sternoclavicular_joint_on_clavicler` | `cartilage` | `art-sternoclavicular-joint` (Esternoclavicular) | 40% |
| `Articular_disc_of_steroclavicular_jointr` | `cartilage` | *Sin candidato claro* | — |
| `Axillary_arteryr` | `vessel` | `ner-axillary-nerve` (Nervio Axilar) | 50% |
| `Axillary_veinr` | `vessel` | `ner-axillary-nerve` (Nervio Axilar) | 50% |
| `Back_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Back_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Bicipital_aponeurosisr` | `fascia` | *Sin candidato claro* | — |
| `Brachial_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Brachial_fasciar` | `fascia` | *Sin candidato claro* | — |
| `Brachiocephalic_arteryr` | `vessel` | *Sin candidato claro* | — |
| `C5_rootr` | `nerve` | *Sin candidato claro* | — |
| `C6_rootr` | `nerve` | *Sin candidato claro* | — |
| `C7_rootr` | `nerve` | *Sin candidato claro* | — |
| `C8_rootr` | `nerve` | *Sin candidato claro* | — |
| `Capitohamate_interosseus_ligament` | `ligament` | *Sin candidato claro* | — |
| `Circumflex_scapular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Collateral_ligaments_of_distal_phalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Collateral_ligaments_of_interphalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Collateral_ligaments_of_metacarpal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Collateral_ligaments_of_metacarpophalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Common_carotid_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Common_flexor_tendon_sheath` | `tendon` | `ten-common-flexor-tendon` (Tendón Common Flexor) | 75% |
| `Common_interosseous_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Common_palmar_digital_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Common_tendon_of_extensor_carpi_ulnarisr` | `tendon` | `ten-common-extensor-tendon` (Tendón Common Extensor) | 60% |
| `Common_tendon_of_flexor_carpi_ulnarisr` | `tendon` | `ten-common-flexor-tendon` (Tendón Common Flexor) | 60% |
| `Conoid_ligament_(part_of_coracoclavicular_ligament)r` | `ligament` | `lig-trapezoid-ligament` (Ligamento trapezoide (coracoclavicular)) | 60% |
| `Coraco-acromial_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Coracoclavicular_ligamentr` | `ligament` | `lig-trapezoid-ligament` (Ligamento trapezoide (coracoclavicular)) | 50% |
| `Coracohumeral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Costal_cart_of_10thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_11thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_12thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_1stribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_2ndribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_3rdribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_4thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_5thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_6thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_7thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_8thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costal_cart_of_9thribr` | `cartilage` | *Sin candidato claro* | — |
| `Costocervical_trunkr` | `vessel` | *Sin candidato claro* | — |
| `Costoclavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_of_2nd_fingerr` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_of_3rd_fingerr` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_of_4th_fingerr` | `ligament` | *Sin candidato claro* | — |
| `Cruciform_ligaments_of_5th_fingerr` | `ligament` | *Sin candidato claro* | — |
| `Deep_artery_of_armr` | `vessel` | *Sin candidato claro* | — |
| `Deep_palmar_archr` | `vessel` | *Sin candidato claro* | — |
| `Deep_transverse_metacarpal_ligament` | `ligament` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 50% |
| `Deep_veins_of_the_armr` | `vessel` | *Sin candidato claro* | — |
| `Deep_venous_palmar_arch` | `vessel` | *Sin candidato claro* | — |
| `Deltoid_muscler` | `muscle` | *Sin candidato claro* | — |
| `Distal_phalanx_of_1st_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_2d_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_3d_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_4th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Distal_phalanx_of_5th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Dorsal_carpal_archr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_carpal_networkr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_carpometacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_digital_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_digital_veins` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_intercarpal_ligament` | `ligament` | `lig-dorsal-radio-ulnar-ligament` (Ligamento radio-ulnar dorsal) | 67% |
| `Dorsal_metacarpal_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_metacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_metatarsal_veins` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_radiocarpal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Dorsal_scaphotriquetral_ligament` | `ligament` | `lig-dorsal-radio-ulnar-ligament` (Ligamento radio-ulnar dorsal) | 67% |
| `Dorsal_scapular_artery_(Deep_br_of_transverse_cervical_a)r` | `vessel` | *Sin candidato claro* | — |
| `Dorsal_scapular_nerver` | `nerve` | *Sin candidato claro* | — |
| `Dorsal_ulnocarpal_ligament` | `ligament` | `lig-dorsal-radio-ulnar-ligament` (Ligamento radio-ulnar dorsal) | 67% |
| `Dorsal_venous_network` | `vessel` | *Sin candidato claro* | — |
| `Dorsalis_indicisr` | `vessel` | *Sin candidato claro* | — |
| `Dorsalis_pollicisr` | `vessel` | *Sin candidato claro* | — |
| `Extensor_carpi_radialis_brevis_tendon_sheath` | `tendon` | `mus-extensor-carpi-radialis-brevis` (Extensor Radial Corto del Carpo) | 67% |
| `Extensor_carpi_radialis_longus_tendon_sheath` | `tendon` | `mus-extensor-carpi-radialis-longus` (Extensor Radial Largo del Carpo) | 67% |
| `Extensor_carpi_ulnaris_tendon_sheath` | `tendon` | `mus-extensor-carpi-ulnaris` (Extensor Cubital del Carpo) | 60% |
| `Extensor_digiti_minimi_tendon_sheath` | `tendon` | `mus-extensor-digiti-minimi` (Extensor del Meñique) | 60% |
| `Extensor_digitorum_-_Extensor_indicis_tendon_sheath` | `tendon` | `mus-extensor-digitorum` (Extensor de los Dedos) | 50% |
| `Extensor_hood_of_2nd_fingerr` | `muscle` | *Sin candidato claro* | — |
| `Extensor_hood_of_3rd_fingerr` | `muscle` | *Sin candidato claro* | — |
| `Extensor_hood_of_4th_fingerr` | `muscle` | *Sin candidato claro* | — |
| `Extensor_hood_of_5th_fingerr` | `muscle` | *Sin candidato claro* | — |
| `Extensor_pollicis_longus_tendon_sheath` | `tendon` | `mus-extensor-pollicis-longus` (Extensor Largo del Pulgar) | 60% |
| `External_jugular_veinr` | `vessel` | *Sin candidato claro* | — |
| `Fibrous_sheath_of_digits_of_hand` | `tendon` | *Sin candidato claro* | — |
| `Fibrous_sheath_of_digits_of_hand_thumb` | `tendon` | *Sin candidato claro* | — |
| `Flexor_carpi_radialis_tendon_sheath` | `tendon` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 60% |
| `Flexor_pollicis_longus_tendon_sheath` | `tendon` | `mus-flexor-pollicis-longus` (Flexor Largo del Pulgar) | 60% |
| `Flexor_retinaculum` | `ligament` | `lig-flexor-retinaculum-of-wrist` (Retináculo flexor de la muñeca) | 100% |
| `Forearm_-_arteries` | `vessel` | *Sin candidato claro* | — |
| `Forearm_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Forearm_-_capsules,_ligaments,_fasciae` | `fascia` | *Sin candidato claro* | — |
| `Forearm_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Forearm_-_muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 50% |
| `Forearm_-_nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 50% |
| `Forearm_-_veins` | `vessel` | *Sin candidato claro* | — |
| `Glenoid_labrumr` | `cartilage` | *Sin candidato claro* | — |
| `Hand_and_wrist_-_arteries` | `vessel` | *Sin candidato claro* | — |
| `Hand_and_wrist_-_bones` | `bone` | *Sin candidato claro* | — |
| `Hand_and_wrist_-_capsules,_ligaments,_fasciae` | `fascia` | *Sin candidato claro* | — |
| `Hand_and_wrist_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Hand_and_wrist_-_muscles` | `muscle` | `mus-lumbrical-muscles-of-hand` (Lumbricales de la Mano) | 50% |
| `Hand_and_wrist_-_nerves` | `nerve` | *Sin candidato claro* | — |
| `Hand_and_wrist_-_veins` | `vessel` | *Sin candidato claro* | — |
| `Head_and_neck_-_arteries` | `vessel` | *Sin candidato claro* | — |
| `Head_and_neck_-_bones` | `bone` | *Sin candidato claro* | — |
| `Head_and_neck_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Head_and_neck_-_nerves` | `nerve` | *Sin candidato claro* | — |
| `Inferior_glenohumeral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Inferior_transverse_scapular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Inferior_trunk_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Inferior_ulnar_collateral_arteryr` | `vessel` | `lig-ulnar-collateral-ligament-of-elbow` (Ligamento colateral cubital del codo) | 50% |
| `Intercapitular_veins` | `vessel` | *Sin candidato claro* | — |
| `Intercarpal_articulationsr` | `joint` | *Sin candidato claro* | — |
| `Interclavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Internal_thoracic_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Interosseous_membrane_of_forearmr` | `fascia` | *Sin candidato claro* | — |
| `Interosseous_metacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Interosseous_recurrent_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Lateral_cord_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Lateral_intermuscular_septum_of_armr` | `fascia` | *Sin candidato claro* | — |
| `Lateral_thoracic_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Lateral_thoracic_veinr` | `vessel` | *Sin candidato claro* | — |
| `Long_head_of_biceps_brachii_tendon_sheathr` | `tendon` | `ten-long-head-of-biceps-tendon` (Tendón Cabeza Larga del Bíceps) | 67% |
| `Lower_subscapular_nerver` | `nerve` | *Sin candidato claro* | — |
| `Lunotriquetral_interosseous_ligament` | `ligament` | *Sin candidato claro* | — |
| `Medial_antebrachial_cutaneous_nerver` | `nerve` | *Sin candidato claro* | — |
| `Medial_brachial_cutaneous_nerver` | `nerve` | *Sin candidato claro* | — |
| `Medial_collateral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Medial_cord_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Medial_intermuscular_septum_of_armr` | `fascia` | *Sin candidato claro* | — |
| `Middle_collateral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Middle_glenohumeral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Middle_phalanx_of_2d_fingerr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_3rd_fingerr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_4th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Middle_phalanx_of_5th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Middle_trunk_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Musculocutaneus_nerve__-_lateral_antebrachial_cutaneous_nerver` | `nerve` | `ner-lateral-femoral-cutaneous-nerve` (N. Cutáneo Femoral Lateral) | 50% |
| `Nucleus_pulposus_C2-T1` | `cartilage` | *Sin candidato claro* | — |
| `Nucleus_pulposus_L1-S1` | `cartilage` | *Sin candidato claro* | — |
| `Nucleus_pulposus_T1-L1` | `cartilage` | *Sin candidato claro* | — |
| `Oblique_head_of_adductor_pollicisr` | `muscle` | *Sin candidato claro* | — |
| `Oblique_ligament_of_1st_fingerr` | `ligament` | *Sin candidato claro* | — |
| `Palmal_digital_veins` | `vessel` | *Sin candidato claro* | — |
| `Palmar_capitohamate_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_carpal_branchesr` | `vessel` | *Sin candidato claro* | — |
| `Palmar_carpometacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Palmar_ligaments_of_distal_phalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Palmar_ligaments_of_interphalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Palmar_ligaments_of_metacarpophalangeal_jointsr` | `ligament` | *Sin candidato claro* | — |
| `Palmar_lunotriquetral_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_metacarpal_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Palmar_metacarpal_ligaments` | `ligament` | *Sin candidato claro* | — |
| `Palmar_metacarpal_veins` | `vessel` | *Sin candidato claro* | — |
| `Palmar_radiocarpal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Palmar_scaphotriquetral_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_trapezoideocapitate_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_ulnocarpal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Palmar_venous_network` | `vessel` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_arteries` | `vessel` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_bones` | `bone` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_capsules,_ligaments,_fasciae` | `fascia` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_muscles` | `muscle` | *Sin candidato claro* | — |
| `Pectoral_girdle_-_nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 67% |
| `Pectoral_girdle_-_veins` | `vessel` | *Sin candidato claro* | — |
| `Perforating_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Pisiformr` | `bone` | *Sin candidato claro* | — |
| `Pisohamate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Pisometacarpal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Pisotriquetral_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Posterior_Sternoclavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Posterior_circumflex_humeral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Posterior_cord_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Posterior_divisions_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Posterior_interosseous_arteryr` | `vessel` | `ner-posterior-interosseous-nerve` (Nervio Interóseo Posterior (PIN)) | 67% |
| `Posterior_interosseous_veinsr` | `vessel` | `ner-posterior-interosseous-nerve` (Nervio Interóseo Posterior (PIN)) | 67% |
| `Posterior_ulnar_recurrent_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Princeps_pollicis_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Proper_palmar_digital_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_1st_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_2d_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_3rd_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_4th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Proximal_phalanx_of_5th_fingerr` | `bone` | *Sin candidato claro* | — |
| `Quadrate_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Radial_annular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Radial_arteryr` | `vessel` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 50% |
| `Radial_collateral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Radial_collateral_ligament_of_elbowr` | `ligament` | `lig-fibular-collateral-ligament` (Ligamento colateral lateral (LCL)) | 50% |
| `Radial_collateral_ligament_of_wristr` | `ligament` | `lig-fibular-collateral-ligament` (Ligamento colateral lateral (LCL)) | 50% |
| `Radial_recrurrent_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Radial_veinsr` | `vessel` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 50% |
| `Radialis_indicisr` | `vessel` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 50% |
| `Radiate_carpal_ligament` | `ligament` | *Sin candidato claro* | — |
| `Radioscaphocapitate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Scaphocapitate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Scapholunate_interosseus_ligament` | `ligament` | *Sin candidato claro* | — |
| `Scaphotrapeziotrapezoidal_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Sesamoid_bones_of_handr` | `bone` | *Sin candidato claro* | — |
| `Sternoclavicular_capsuler` | `joint` | `art-sternoclavicular-joint` (Esternoclavicular) | 50% |
| `Subclavian_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Subclavian_nerver` | `nerve` | *Sin candidato claro* | — |
| `Subclavian_veinr` | `vessel` | *Sin candidato claro* | — |
| `Subscapular_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_branch_of_Transverse_cervical_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_palmar_archr` | `vessel` | *Sin candidato claro* | — |
| `Superficial_palmar_venous_arch` | `vessel` | *Sin candidato claro* | — |
| `Superficial_transverse_metacarpal_lig` | `bone` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 50% |
| `Superficial_veins_of_upper_limbr` | `vessel` | *Sin candidato claro* | — |
| `Superior_glenohumeral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Superior_thoracic_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Superior_transverse_scapular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Superior_trunk_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Superior_ulnar_collateral_arteryr` | `vessel` | `lig-ulnar-collateral-ligament-of-elbow` (Ligamento colateral cubital del codo) | 50% |
| `Suprascapular_arteryr` | `vessel` | `ner-suprascapular-nerve` (Nervio Supraescapular) | 50% |
| `Synovial_sheaths_of_fingers` | `tendon` | *Sin candidato claro* | — |
| `T1_rootr` | `nerve` | *Sin candidato claro* | — |
| `Thickened_part_of_antebrachial_fascia` | `fascia` | *Sin candidato claro* | — |
| `Thoracoacromial_artery_Acromial_brr` | `vessel` | *Sin candidato claro* | — |
| `Thoracoacromial_artery_Deltoid_brr` | `vessel` | *Sin candidato claro* | — |
| `Thoracoacromial_artery_Pectoral_brr` | `vessel` | *Sin candidato claro* | — |
| `Thoracodorsal_arteryr` | `vessel` | `ner-thoracodorsal-nerve` (Nervio Toracodorsal) | 50% |
| `Thorax_-_arteries` | `vessel` | *Sin candidato claro* | — |
| `Thorax_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Thorax_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Thorax_-_nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 50% |
| `Thorax_-_veins` | `vessel` | *Sin candidato claro* | — |
| `Thyrocervical_trunkr` | `vessel` | *Sin candidato claro* | — |
| `Transverse_cervical_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Transverse_head_of_adductor_pollicisr` | `muscle` | *Sin candidato claro* | — |
| `Trapeziotrapezoidal_interosseous_ligament` | `ligament` | *Sin candidato claro* | — |
| `Trapezoideocapitate_interosseous_ligament` | `ligament` | *Sin candidato claro* | — |
| `Trapezoidr` | `bone` | *Sin candidato claro* | — |
| `Triangular_fibro_cartilage_disc` | `cartilage` | *Sin candidato claro* | — |
| `Triquetrocapitate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Triquetrohamate_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Triquetrumr` | `bone` | *Sin candidato claro* | — |
| `Ulnar_artery_(dorsal_carpal_br)r` | `vessel` | `lig-dorsal-radio-ulnar-ligament` (Ligamento radio-ulnar dorsal) | 50% |
| `Ulnar_arteryr` | `vessel` | `ner-ulnar-nerve` (Nervio Ulnar) | 50% |
| `Ulnar_collateral_ligament_of_wristr` | `ligament` | `lig-ulnar-collateral-ligament-of-elbow` (Ligamento colateral cubital del codo) | 75% |
| `Ulnar_veinsr` | `vessel` | `ner-ulnar-nerve` (Nervio Ulnar) | 50% |
| `Ulnopisiform_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Ulnotriquetral_ligament` | `ligament` | `ten-patellar-ligament` (Tendón Patelar) | 50% |
| `Upper_subscapular_nerver` | `nerve` | *Sin candidato claro* | — |
| `Vertebra_C3_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_C4_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_C5_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_C6_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_C7_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_L1_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_L2_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_L3_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_L4_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_L5_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T10_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T11_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T12_art_cart` | `cartilage` | `bone-thoracic-vertebra` (Vértebras torácicas (T1-T12)) | 50% |
| `Vertebra_T1_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T2_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T3_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T4_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T5_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T6_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T7_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T8_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebra_T9_art_cart` | `cartilage` | *Sin candidato claro* | — |
| `Vertebral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `annulus_fibrosus_C2_C3` | `cartilage` | *Sin candidato claro* | — |
| `annulus_fibrosus_C3_C4` | `cartilage` | *Sin candidato claro* | — |
| `annulus_fibrosus_C4_C5` | `cartilage` | *Sin candidato claro* | — |
| `annulus_fibrosus_C5_C6` | `cartilage` | *Sin candidato claro* | — |
| `annulus_fibrosus_C6_C7` | `cartilage` | *Sin candidato claro* | — |
| `annulus_fibrosus_C7_T1` | `cartilage` | *Sin candidato claro* | — |
| `art_cart_of_Atlas__C1` | `cartilage` | *Sin candidato claro* | — |
| `art_cart_of_Axis__C2` | `cartilage` | *Sin candidato claro* | — |
| `art_cart_of_sacrum_art_processr` | `cartilage` | `art-shoulder-joint` (Glenohumeral (Hombro)) | 40% |
| `art_cart_of_sacrum_lumbosacral_joint` | `cartilage` | `art-shoulder-joint` (Glenohumeral (Hombro)) | 40% |
| `art_cart_of_sternoclavicular_joint_on_manubriumr` | `cartilage` | `art-sternoclavicular-joint` (Esternoclavicular) | 60% |
| `art_cart_of_sternocostal_joint_on_manubriumr` | `cartilage` | `art-shoulder-joint` (Glenohumeral (Hombro)) | 40% |
| `art_cart_of_sternocostal_joints_on_sternal_bodyr` | `cartilage` | *Sin candidato claro* | — |

### 🔹 Modelo: `vertebrae` (1 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |

---

## 3. Estructuras del Grafo SIN Mallas 3D (`modelMeshes` Vacío)

Total de estructuras en el grafo: **267**
- Estructuras con mallas 3D: **211** (79.0%)
- Estructuras sin mallas 3D: **56** (21.0%)

### Detalle de Estructuras sin Mallas 3D:

| Estructura | Tipo | Zona | Motivo Principal | Pieza Candidata Potencial en GLB |
|---|---|---|---|---|
| `mus-masseter`<br>**Masetero** (*Masseter*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-temporalis`<br>**Temporal** (*Temporalis*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-lateral-pterygoid`<br>**Pterigoideo Lateral** (*Lateral Pterygoid*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `colored-skull-base:Lower_lateral_incisors` |
| `mus-medial-pterygoid`<br>**Pterigoideo Medial** (*Medial Pterygoid*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `colored-skull-base:Lower_medial_incisors` |
| `mus-occipitofrontalis`<br>**Occipitofrontal** (*Occipitofrontalis*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-orbicularis-oculi`<br>**Orbicular de los Párpados** (*Orbicularis Oculi*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `lower-limb:Zona_orbicularis_of_hip_jointr` |
| `mus-orbicularis-oris`<br>**Orbicular de la Boca** (*Orbicularis Oris*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `lower-limb:Zona_orbicularis_of_hip_jointr` |
| `mus-buccinator`<br>**Buccinador** (*Buccinator*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-zygomaticus-major`<br>**Cigomático Mayor** (*Zygomaticus Major*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-extraocular-muscles`<br>**Músculos Extraoculares** (*Extraocular Muscles*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `hand:Muscles` |
| `mus-sternocleidomastoid`<br>**Esternocleidomastoideo** (*Sternocleidomastoid*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-platysma`<br>**Platisma** (*Platysma*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-scalenus-anterior`<br>**Escaleno Anterior** (*Scalenus Anterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Anterior_interosseous_artery` |
| `mus-scalenus-medius`<br>**Escaleno Medio** (*Scalenus Medius*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-scalenus-posterior`<br>**Escaleno Posterior** (*Scalenus Posterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Posterior_interosseous_artery` |
| `mus-longus-colli`<br>**Largo del Cuello** (*Longus Colli*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Extensor_carpi_radialis_longus_tendon_sheath` |
| `mus-longus-capitis`<br>**Largo de la Cabeza** (*Longus Capitis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Extensor_carpi_radialis_longus_tendon_sheath` |
| `mus-rectus-capitis-anterior`<br>**Recto Anterior de la Cabeza** (*Rectus Capitis Anterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Anterior_interosseous_artery` |
| `mus-rectus-capitis-lateralis`<br>**Recto Lateral de la Cabeza** (*Rectus Capitis Lateralis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-splenius-capitis`<br>**Esplenio de la Cabeza** (*Splenius Capitis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-splenius-cervicis`<br>**Esplenio del Cuello** (*Splenius Cervicis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-suboccipital-muscles`<br>**Suboccipitales** (*Suboccipital Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-suprahyoid-muscles`<br>**Suprahioideos** (*Suprahyoid Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-infrahyoid-muscles`<br>**Infrahioideos** (*Infrahyoid Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-diaphragm`<br>**Diafragma** (*Diaphragm*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-external-intercostals`<br>**Intercostales Externos** (*External Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `lower-limb:Superficial_external_pudendal_arteryr` |
| `mus-internal-intercostals`<br>**Intercostales Internos** (*Internal Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Internal_thoracic_arteryr` |
| `mus-innermost-intercostals`<br>**Intercostales Íntimos** (*Innermost Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-transversus-thoracis`<br>**Transverso del Tórax** (*Transversus Thoracis*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-subcostal-muscles`<br>**Subcostales** (*Subcostal Muscles*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-levatores-costarum`<br>**Elevadores de las Costillas** (*Levatores Costarum*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-rectus-abdominis`<br>**Recto Abdominal** (*Rectus Abdominis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-external-oblique`<br>**Oblicuo Externo** (*External Oblique*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Oblique_ligament_of_1st_finger` |
| `mus-internal-oblique`<br>**Oblicuo Interno** (*Internal Oblique*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Oblique_ligament_of_1st_finger` |
| `mus-transversus-abdominis`<br>**Transverso Abdominal** (*Transversus Abdominis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-pyramidalis`<br>**Piramidal** (*Pyramidalis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-quadratus-lumborum`<br>**Cuadrado Lumbar** (*Quadratus Lumborum*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-erector-spinae`<br>**Erector de la Columna** (*Erector Spinae*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-semispinalis`<br>**Semiespinal** (*Semispinalis*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-multifidus`<br>**Multifidus** (*Multifidus*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-rotatores`<br>**Rotadores** (*Rotatores*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-interspinales`<br>**Interespinosos** (*Interspinales*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-intertransversarii`<br>**Intertransversos** (*Intertransversarii*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-serratus-posterior-superior`<br>**Serrato Posterior Superior** (*Serratus Posterior Superior*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Posterior_interosseous_artery` |
| `mus-serratus-posterior-inferior`<br>**Serrato Posterior Inferior** (*Serratus Posterior Inferior*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `colored-skull-base:Inferior_nasal_concha_bones` |
| `mus-sternalis`<br>**Esternal** (*Sternalis*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-tensor-fasciae-latae`<br>**Tensor de la Fascia Lata** (*Tensor Fasciae Latae*) | `muscle` | `hip` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `lower-limb:Tensor_fasciae_lataer` |
| `mus-levator-ani`<br>**Elevador del Ano** (*Levator Ani*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `ten-long-head-of-biceps-tendon`<br>**Tendón Cabeza Larga del Bíceps** (*Long head of biceps tendon*) | `tendon` | `shoulder` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Common_flexor_tendon_sheath` |
| `ten-common-extensor-tendon`<br>**Tendón Common Extensor** (*Common extensor tendon*) | `tendon` | `arm` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Common_flexor_tendon_sheath` |
| `ten-common-flexor-tendon`<br>**Tendón Common Flexor** (*Common flexor tendon*) | `tendon` | `arm` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Common_flexor_tendon_sheath` |
| `ten-pectoralis-major-tendon`<br>**Tendón del Pectoral Mayor** (*Pectoralis major tendon*) | `tendon` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Common_flexor_tendon_sheath` |
| `ner-accessory-nerve`<br>**Nervio Accesorio (XI)** (*Accessory nerve*) | `nerve` | `cervical` | Nervio no modelado en los atlas 3D de extremidades | `lower-limb:Accessory_saphenous_veinr` |
| `ner-pudendal-nerve`<br>**Nervio Pudendo** (*Pudendal nerve*) | `nerve` | `core` | Nervio no modelado en los atlas 3D de extremidades | `lower-limb:Inferior_clunial_br_of_post_cutaneous_nerve_of_the_thighr` |
| `ner-thoracodorsal-nerve`<br>**Nervio Toracodorsal** (*Thoracodorsal nerve*) | `nerve` | `back` | Nervio no modelado en los atlas 3D de extremidades | `lower-limb:Inferior_clunial_br_of_post_cutaneous_nerve_of_the_thighr` |
| `ner-mandibular-nerve`<br>**Nervio Mandibular (V3)** (*Mandibular nerve*) | `nerve` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `lower-limb:Inferior_clunial_br_of_post_cutaneous_nerve_of_the_thighr` |

---

## 4. Plan de Acción Inmediato (Tareas A2 & A3)

1. **Vincular Piezas Visibles con Candidatos Directos (A2):**
   - Incorporar a `bones.ts`, `ligaments.ts`, `tendons.ts`, `muscles.ts` y `nerves.ts` las piezas de tipo `cartilage`, `ligament`, `vessel` y `fascia` con identificación anatómica inequívoca.
   - Preservar la regla de 0 huérfanos (`meshMapping.test.ts` verde).
2. **Depurar Selección Jerárquica y Subgrupos (A3):**
   - Ajustar `resolveClick` y `buildSubgroups` en `composite.ts` para que el descenso y ascenso de nivel respondan exactamente a los casos límite (a), (b), (c).
