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
| `upper-limb` | 575 | 27 | **548** | **185** | 363 | **33.8%** |
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
| `Arteries` | `vessel` | `ves-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 100% |
| `Bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 100% |
| `Fascia` | `fascia` | `mus-tensor-fasciae-latae` (Tensor de la Fascia Lata) | 100% |
| `Ligaments` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 100% |
| `Muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 100% |
| `Nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 100% |
| `Veins` | `vessel` | `ves-lower-limb-venous-network` (Sistema venoso del miembro inferior (safenas, femoral, poplítea y tibiales)) | 100% |

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

### 🔹 Modelo: `upper-limb` (363 piezas sin dueño)

| Pieza Runtime (GLB) | Tipo (Catalog) | Candidato en Grafo (`anatomyGraph`) | Similitud |
|---|---|---|---|
| `10th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `10th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `11th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `12th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `1st_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `1st_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `2nd_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `2nd_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `3rd_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `3rd_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
| `4th_rib_art_cart_of_headr` | `cartilage` | *Sin candidato claro* | — |
| `4th_rib_art_cart_of_tubercler` | `cartilage` | *Sin candidato claro* | — |
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
| `Annular_ligaments_of_2nd_finger_A1-A5r` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 40% |
| `Annular_ligaments_of_3rd_finger_A1-A5r` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 40% |
| `Annular_ligaments_of_4th_finger_A1-A5r` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 40% |
| `Annular_ligaments_of_5th_finger_A1-A5r` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 40% |
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
| `Anterior_circumflex_humeral_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Anterior_divisions_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Anterior_interosseous_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Anterior_interosseous_veinsr` | `vessel` | *Sin candidato claro* | — |
| `Anterior_sternoclavicular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Anterior_ulnar_recurrent_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Arm_-_arteries` | `vessel` | `ves-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 50% |
| `Arm_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Arm_-_capsules,_ligaments,_fasciae` | `fascia` | *Sin candidato claro* | — |
| `Arm_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Arm_-_muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 50% |
| `Arm_-_nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 50% |
| `Arm_-_veins` | `vessel` | `ves-lower-limb-venous-network` (Sistema venoso del miembro inferior (safenas, femoral, poplítea y tibiales)) | 50% |
| `Arm_superficial_vein-Basilic_veinr` | `vessel` | *Sin candidato claro* | — |
| `Arm_superficial_vein-Cephalic_veinr` | `vessel` | *Sin candidato claro* | — |
| `Arm_superficial_vein-Median_antebrachial_veinr` | `vessel` | *Sin candidato claro* | — |
| `Arm_superficial_vein-Median_cubital_veinr` | `vessel` | *Sin candidato claro* | — |
| `Art_cart_of_capitate_bone​` | `cartilage` | `bone-capitate` (Grande (carpo)) | 50% |
| `Art_cart_of_hamate_bone​` | `cartilage` | `bone-hamate` (Ganchoso) | 50% |
| `Art_cart_of_humerus_distal_endr​` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_cart_of_humerus_head​r` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_lunate_bone` | `cartilage` | `bone-lunate-bone` (Semilunar) | 50% |
| `Art_cart_of_pisiform_bone_​` | `cartilage` | `bone-pisiform-bone` (Hueso pisiforme) | 50% |
| `Art_cart_of_radius_distal_end​r` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_cart_of_radius_head​r` | `cartilage` | *Sin candidato claro* | — |
| `Art_cart_of_scaphoid_bone​` | `cartilage` | `bone-scaphoid` (Escafoides (carpo)) | 50% |
| `Art_cart_of_trapezium_bone​` | `cartilage` | `bone-trapezium` (Trapecio (carpo)) | 50% |
| `Art_cart_of_trapezoid_bone​` | `cartilage` | `bone-trapezoid-bone` (Hueso trapezoide (carpo)) | 50% |
| `Art_cart_of_triquetrum_bone` | `cartilage` | `bone-triquetrum-bone` (Hueso piramidal (carpo)) | 50% |
| `Art_cart_of_ulna_(distal_end)r` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 40% |
| `Art_cart_of_ulna_(proximal_end)r` | `cartilage` | `art-radioulnar-articulation` (Radioulnar Proximal) | 40% |
| `Art_carts_of_distal_phalanges` | `cartilage` | `art-radioulnar-articulation-art-druj` (Radioulnar Distal) | 50% |
| `Art_carts_of_metacarpal_bones` | `bone` | `bone-metacarpal-bones` (Metacarpianos (1.º - 5.º)) | 50% |
| `Art_carts_of_middle_phalanges` | `cartilage` | `bone-phalanges-hand` (Falanges de la mano (proximales, medias, distales)) | 50% |
| `Art_carts_of_proximal_phalanges` | `cartilage` | `art-radioulnar-articulation` (Radioulnar Proximal) | 50% |
| `Articular_capsule_of_elbow_jointr` | `joint` | `lig-menisci-and-knee-capsule` (Meniscos y cápsula articular de la rodilla) | 50% |
| `Articular_capsule_of_glenohumeral_jointr` | `joint` | `lig-menisci-and-knee-capsule` (Meniscos y cápsula articular de la rodilla) | 50% |
| `Articular_capsule_of_radiocarpal_joint` | `joint` | `lig-menisci-and-knee-capsule` (Meniscos y cápsula articular de la rodilla) | 75% |
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
| `Collateral_ligaments_of_distal_phalangeal_jointsr` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 40% |
| `Collateral_ligaments_of_interphalangeal_jointsr` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 50% |
| `Collateral_ligaments_of_metacarpal_jointsr` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 50% |
| `Collateral_ligaments_of_metacarpophalangeal_jointsr` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 50% |
| `Common_carotid_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Common_flexor_tendon_sheath` | `tendon` | `ten-common-flexor-tendon` (Tendón Common Flexor) | 75% |
| `Common_interosseous_arteryr` | `vessel` | *Sin candidato claro* | — |
| `Common_palmar_digital_arteriesr` | `vessel` | `ves-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 50% |
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
| `Cruciform_ligaments_of_2nd_fingerr` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 50% |
| `Cruciform_ligaments_of_3rd_fingerr` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 50% |
| `Cruciform_ligaments_of_4th_fingerr` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 50% |
| `Cruciform_ligaments_of_5th_fingerr` | `ligament` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 50% |
| `Deep_artery_of_armr` | `vessel` | *Sin candidato claro* | — |
| `Deep_palmar_archr` | `vessel` | *Sin candidato claro* | — |
| `Deep_transverse_metacarpal_ligament` | `ligament` | `lig-transverse-acetabular-ligament` (Ligamento transverso del acetábulo) | 50% |
| `Deep_veins_of_the_armr` | `vessel` | *Sin candidato claro* | — |
| `Deep_venous_palmar_arch` | `vessel` | `ves-hand-venous-network` (Red venosa de la mano y miembro superior (cefálica, basílica y arcos)) | 50% |
| `Deltoid_muscler` | `muscle` | *Sin candidato claro* | — |
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
| `Dorsal_venous_network` | `vessel` | `ves-hand-venous-network` (Red venosa de la mano y miembro superior (cefálica, basílica y arcos)) | 67% |
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
| `Fibrous_sheath_of_digits_of_hand` | `tendon` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 50% |
| `Fibrous_sheath_of_digits_of_hand_thumb` | `tendon` | `lig-digital-apparatus-hand` (Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)) | 40% |
| `Flexor_carpi_radialis_tendon_sheath` | `tendon` | `mus-flexor-carpi-radialis` (Flexor Radial del Carpo) | 60% |
| `Flexor_pollicis_longus_tendon_sheath` | `tendon` | `mus-flexor-pollicis-longus` (Flexor Largo del Pulgar) | 60% |
| `Flexor_retinaculum` | `ligament` | `lig-flexor-retinaculum-of-wrist` (Retináculo flexor de la muñeca) | 100% |
| `Forearm_-_arteries` | `vessel` | `ves-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 50% |
| `Forearm_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Forearm_-_capsules,_ligaments,_fasciae` | `fascia` | *Sin candidato claro* | — |
| `Forearm_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Forearm_-_muscles` | `muscle` | `mus-extraocular-muscles` (Músculos Extraoculares) | 50% |
| `Forearm_-_nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 50% |
| `Forearm_-_veins` | `vessel` | `ves-lower-limb-venous-network` (Sistema venoso del miembro inferior (safenas, femoral, poplítea y tibiales)) | 50% |
| `Glenoid_labrumr` | `cartilage` | *Sin candidato claro* | — |
| `Hand_and_wrist_-_arteries` | `vessel` | `ves-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 75% |
| `Hand_and_wrist_-_bones` | `bone` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 75% |
| `Hand_and_wrist_-_capsules,_ligaments,_fasciae` | `fascia` | *Sin candidato claro* | — |
| `Hand_and_wrist_-_cartilages` | `cartilage` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 50% |
| `Hand_and_wrist_-_muscles` | `muscle` | `mus-lumbrical-muscles-of-hand` (Lumbricales de la Mano) | 50% |
| `Hand_and_wrist_-_nerves` | `nerve` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 50% |
| `Hand_and_wrist_-_veins` | `vessel` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 50% |
| `Head_and_neck_-_arteries` | `vessel` | *Sin candidato claro* | — |
| `Head_and_neck_-_bones` | `bone` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 50% |
| `Head_and_neck_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Head_and_neck_-_nerves` | `nerve` | *Sin candidato claro* | — |
| `Inferior_glenohumeral_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Inferior_transverse_scapular_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Inferior_trunk_of_brachial_plexusr` | `nerve` | *Sin candidato claro* | — |
| `Inferior_ulnar_collateral_arteryr` | `vessel` | `lig-ulnar-collateral-ligament-of-elbow` (Ligamento colateral cubital del codo) | 50% |
| `Intercapitular_veins` | `vessel` | `ves-lower-limb-venous-network` (Sistema venoso del miembro inferior (safenas, femoral, poplítea y tibiales)) | 50% |
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
| `Palmar_carpometacarpal_ligaments` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 67% |
| `Palmar_ligaments_of_distal_phalangeal_jointsr` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 40% |
| `Palmar_ligaments_of_interphalangeal_jointsr` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 50% |
| `Palmar_ligaments_of_metacarpophalangeal_jointsr` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 50% |
| `Palmar_lunotriquetral_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_metacarpal_arteriesr` | `vessel` | *Sin candidato claro* | — |
| `Palmar_metacarpal_ligaments` | `ligament` | `lig-collateral-and-palmar-finger-ligaments` (Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos) | 67% |
| `Palmar_metacarpal_veins` | `vessel` | *Sin candidato claro* | — |
| `Palmar_radiocarpal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Palmar_scaphotriquetral_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_trapezoideocapitate_ligament` | `ligament` | `lig-palmar-radio-ulnar-ligament` (Ligamento radio-ulnar palmar) | 67% |
| `Palmar_ulnocarpal_ligamentr` | `ligament` | *Sin candidato claro* | — |
| `Palmar_venous_network` | `vessel` | `ves-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 67% |
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
| `Proper_palmar_digital_arteriesr` | `vessel` | `ves-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 50% |
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
| `Sesamoid_bones_of_handr` | `bone` | `bone-sesamoids` (Huesos sesamoideos (mano y pie)) | 67% |
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
| `Thickened_part_of_antebrachial_fascia` | `fascia` | `fas-palmar-aponeurosis` (Aponeurosis palmar y fascia antebraquial) | 50% |
| `Thoracoacromial_artery_Acromial_brr` | `vessel` | *Sin candidato claro* | — |
| `Thoracoacromial_artery_Deltoid_brr` | `vessel` | *Sin candidato claro* | — |
| `Thoracoacromial_artery_Pectoral_brr` | `vessel` | *Sin candidato claro* | — |
| `Thoracodorsal_arteryr` | `vessel` | `ner-thoracodorsal-nerve` (Nervio Toracodorsal) | 50% |
| `Thorax_-_arteries` | `vessel` | `ves-hand-arterial-network` (Red arterial de la mano y muñeca (arcos palmares y arterias digitales)) | 50% |
| `Thorax_-_bones` | `bone` | `bone-metatarsal-bones` (Metatarsianos) | 50% |
| `Thorax_-_cartilages` | `cartilage` | *Sin candidato claro* | — |
| `Thorax_-_nerves` | `nerve` | `ner-pectoral-nerves` (Nervios Pectorales) | 50% |
| `Thorax_-_veins` | `vessel` | `ves-lower-limb-venous-network` (Sistema venoso del miembro inferior (safenas, femoral, poplítea y tibiales)) | 50% |
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

Total de estructuras en el grafo: **291**
- Estructuras con mallas 3D: **236** (81.1%)
- Estructuras sin mallas 3D: **55** (18.9%)

### Detalle de Estructuras sin Mallas 3D:

| Estructura | Tipo | Zona | Motivo Principal | Pieza Candidata Potencial en GLB |
|---|---|---|---|---|
| `mus-masseter`<br>**Masetero** (*Masseter*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-temporalis`<br>**Temporal** (*Temporalis*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-lateral-pterygoid`<br>**Pterigoideo Lateral** (*Lateral Pterygoid*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `upper-limb:Lateral_cord_of_brachial_plexusr` |
| `mus-medial-pterygoid`<br>**Pterigoideo Medial** (*Medial Pterygoid*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `upper-limb:Medial_antebrachial_cutaneous_nerver` |
| `mus-occipitofrontalis`<br>**Occipitofrontal** (*Occipitofrontalis*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-orbicularis-oculi`<br>**Orbicular de los Párpados** (*Orbicularis Oculi*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-orbicularis-oris`<br>**Orbicular de la Boca** (*Orbicularis Oris*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-buccinator`<br>**Buccinador** (*Buccinator*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-zygomaticus-major`<br>**Cigomático Mayor** (*Zygomaticus Major*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | — |
| `mus-extraocular-muscles`<br>**Músculos Extraoculares** (*Extraocular Muscles*) | `muscle` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `hand:Muscles` |
| `mus-sternocleidomastoid`<br>**Esternocleidomastoideo** (*Sternocleidomastoid*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-platysma`<br>**Platisma** (*Platysma*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-scalenus-anterior`<br>**Escaleno Anterior** (*Scalenus Anterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Anterior_circumflex_humeral_arteryr` |
| `mus-scalenus-medius`<br>**Escaleno Medio** (*Scalenus Medius*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-scalenus-posterior`<br>**Escaleno Posterior** (*Scalenus Posterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Posterior_Sternoclavicular_ligamentr` |
| `mus-longus-colli`<br>**Largo del Cuello** (*Longus Colli*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Extensor_carpi_radialis_longus_tendon_sheath` |
| `mus-longus-capitis`<br>**Largo de la Cabeza** (*Longus Capitis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Extensor_carpi_radialis_longus_tendon_sheath` |
| `mus-rectus-capitis-anterior`<br>**Recto Anterior de la Cabeza** (*Rectus Capitis Anterior*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Anterior_circumflex_humeral_arteryr` |
| `mus-rectus-capitis-lateralis`<br>**Recto Lateral de la Cabeza** (*Rectus Capitis Lateralis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-splenius-capitis`<br>**Esplenio de la Cabeza** (*Splenius Capitis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-splenius-cervicis`<br>**Esplenio del Cuello** (*Splenius Cervicis*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-suboccipital-muscles`<br>**Suboccipitales** (*Suboccipital Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-suprahyoid-muscles`<br>**Suprahioideos** (*Suprahyoid Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-infrahyoid-muscles`<br>**Infrahioideos** (*Infrahyoid Muscles*) | `muscle` | `cervical` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-diaphragm`<br>**Diafragma** (*Diaphragm*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-external-intercostals`<br>**Intercostales Externos** (*External Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:External_jugular_veinr` |
| `mus-internal-intercostals`<br>**Intercostales Internos** (*Internal Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Internal_thoracic_arteryr` |
| `mus-innermost-intercostals`<br>**Intercostales Íntimos** (*Innermost Intercostals*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-transversus-thoracis`<br>**Transverso del Tórax** (*Transversus Thoracis*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-subcostal-muscles`<br>**Subcostales** (*Subcostal Muscles*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `hand:Muscles` |
| `mus-levatores-costarum`<br>**Elevadores de las Costillas** (*Levatores Costarum*) | `muscle` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-rectus-abdominis`<br>**Recto Abdominal** (*Rectus Abdominis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-external-oblique`<br>**Oblicuo Externo** (*External Oblique*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:External_jugular_veinr` |
| `mus-internal-oblique`<br>**Oblicuo Interno** (*Internal Oblique*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Internal_thoracic_arteryr` |
| `mus-transversus-abdominis`<br>**Transverso Abdominal** (*Transversus Abdominis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-pyramidalis`<br>**Piramidal** (*Pyramidalis*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-quadratus-lumborum`<br>**Cuadrado Lumbar** (*Quadratus Lumborum*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-erector-spinae`<br>**Erector de la Columna** (*Erector Spinae*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-semispinalis`<br>**Semiespinal** (*Semispinalis*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-multifidus`<br>**Multifidus** (*Multifidus*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-rotatores`<br>**Rotadores** (*Rotatores*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-interspinales`<br>**Interespinosos** (*Interspinales*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-intertransversarii`<br>**Intertransversos** (*Intertransversarii*) | `muscle` | `spine` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-serratus-posterior-superior`<br>**Serrato Posterior Superior** (*Serratus Posterior Superior*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Posterior_Sternoclavicular_ligamentr` |
| `mus-serratus-posterior-inferior`<br>**Serrato Posterior Inferior** (*Serratus Posterior Inferior*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Inferior_glenohumeral_ligamentr` |
| `mus-sternalis`<br>**Esternal** (*Sternalis*) | `muscle` | `back` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `mus-tensor-fasciae-latae`<br>**Tensor de la Fascia Lata** (*Tensor Fasciae Latae*) | `muscle` | `hip` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Arm_-_capsules,_ligaments,_fasciae` |
| `mus-levator-ani`<br>**Elevador del Ano** (*Levator Ani*) | `muscle` | `core` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | — |
| `ten-long-head-of-biceps-tendon`<br>**Tendón Cabeza Larga del Bíceps** (*Long head of biceps tendon*) | `tendon` | `shoulder` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Common_flexor_tendon_sheath` |
| `ten-common-flexor-tendon`<br>**Tendón Common Flexor** (*Common flexor tendon*) | `tendon` | `arm` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `lower-limb:Flexor_digiti_minimi_brevis_of_footr` |
| `ten-pectoralis-major-tendon`<br>**Tendón del Pectoral Mayor** (*Pectoralis major tendon*) | `tendon` | `chest` | Región sin modelo GLB específico (ej. musculatura de tronco/tórax/cuello) | `upper-limb:Common_flexor_tendon_sheath` |
| `ner-accessory-nerve`<br>**Nervio Accesorio (XI)** (*Accessory nerve*) | `nerve` | `cervical` | Nervio no modelado en los atlas 3D de extremidades | `upper-limb:Musculocutaneus_nerve__-_lateral_antebrachial_cutaneous_nerver` |
| `ner-pudendal-nerve`<br>**Nervio Pudendo** (*Pudendal nerve*) | `nerve` | `core` | Nervio no modelado en los atlas 3D de extremidades | `upper-limb:Musculocutaneus_nerve__-_lateral_antebrachial_cutaneous_nerver` |
| `ner-thoracodorsal-nerve`<br>**Nervio Toracodorsal** (*Thoracodorsal nerve*) | `nerve` | `back` | Nervio no modelado en los atlas 3D de extremidades | `upper-limb:Musculocutaneus_nerve__-_lateral_antebrachial_cutaneous_nerver` |
| `ner-mandibular-nerve`<br>**Nervio Mandibular (V3)** (*Mandibular nerve*) | `nerve` | `head-jaw` | Cráneo/mandíbula (estructuras no desglosadas en malla individual) | `upper-limb:Musculocutaneus_nerve__-_lateral_antebrachial_cutaneous_nerver` |

---

## 4. Plan de Acción Inmediato (Tareas A2 & A3)

1. **Vincular Piezas Visibles con Candidatos Directos (A2):**
   - Incorporar a `bones.ts`, `ligaments.ts`, `tendons.ts`, `muscles.ts` y `nerves.ts` las piezas de tipo `cartilage`, `ligament`, `vessel` y `fascia` con identificación anatómica inequívoca.
   - Preservar la regla de 0 huérfanos (`meshMapping.test.ts` verde).
2. **Depurar Selección Jerárquica y Subgrupos (A3):**
   - Ajustar `resolveClick` y `buildSubgroups` en `composite.ts` para que el descenso y ascenso de nivel respondan exactamente a los casos límite (a), (b), (c).
