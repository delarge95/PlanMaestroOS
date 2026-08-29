// src/data/fitness/anatomy/ligaments.ts
// Ligamentos (21) identificados por nombre de nodo en los GLB.
// GENERADO por rag/anatomy/scripts/build-anatomy-data.mjs — NO editar a mano.
// Regenerar: node rag/anatomy/scripts/build-anatomy-data.mjs

import type { LigamentEntry } from './types';

export const LIGAMENTS: LigamentEntry[] = [
  {
  id: `lig-anterior-cruciate-ligament`,
  kind: `ligament`,
  nameEn: `Anterior cruciate ligament`,
  nameEs: `Ligamento cruzado anterior (LCA)`,
  synonyms: [
    "Ligamento cruzado anterior (LCA)",
    "Anterior cruciate ligament"
  ],
  zone: `knee`,
  modelMeshes: {"lower-limb":["Anterior_cruciate_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Evita traslación anterior de tibia; riesgo en pivotes/cambios de dirección.`,
  jointId: `art-knee-joint`,
  },
  {
  id: `lig-posterior-cruciate-ligament`,
  kind: `ligament`,
  nameEn: `Posterior cruciate ligament`,
  nameEs: `Ligamento cruzado posterior (LCP)`,
  synonyms: [
    "Ligamento cruzado posterior (LCP)",
    "Posterior cruciate ligament"
  ],
  zone: `knee`,
  modelMeshes: {"lower-limb":["Posterior_cruciate_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-knee-joint`,
  },
  {
  id: `lig-fibular-collateral-ligament`,
  kind: `ligament`,
  nameEn: `Fibular collateral ligament`,
  nameEs: `Ligamento colateral lateral (LCL)`,
  synonyms: [
    "Ligamento colateral lateral (LCL)",
    "Fibular collateral ligament"
  ],
  zone: `knee`,
  modelMeshes: {"lower-limb":["Fibular_collateral_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-knee-joint`,
  },
  {
  id: `lig-calcaneofibular-ligament`,
  kind: `ligament`,
  nameEn: `Calcaneofibular ligament`,
  nameEs: `Ligamento calcaneofibular`,
  synonyms: [
    "Ligamento calcaneofibular",
    "Calcaneofibular ligament"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Calcaneofibular_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Esguince de tobillo en inversión.`,
  jointId: `art-ankle-joint`,
  },
  {
  id: `lig-anterior-talofibular-ligament`,
  kind: `ligament`,
  nameEn: `Anterior talofibular ligament`,
  nameEs: `Ligamento talofibular anterior (ATFL)`,
  synonyms: [
    "Ligamento talofibular anterior (ATFL)",
    "Anterior talofibular ligament"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Anterior_talofibular_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `El más lesionado en esguince de inversión.`,
  jointId: `art-ankle-joint`,
  },
  {
  id: `lig-anterior-tibiofibular-ligament`,
  kind: `ligament`,
  nameEn: `Anterior tibiofibular ligament`,
  nameEs: `Ligamento tibiofibular anterior`,
  synonyms: [
    "Ligamento tibiofibular anterior",
    "Anterior tibiofibular ligament"
  ],
  zone: `lower-leg`,
  modelMeshes: {"lower-limb":["Anterior_tibiofibular_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-tibiofibular-joint`,
  },
  {
  id: `lig-sacrospinous-ligament`,
  kind: `ligament`,
  nameEn: `Sacrospinous ligament`,
  nameEs: `Ligamento sacroespinoso`,
  synonyms: [
    "Ligamento sacroespinoso",
    "Sacrospinous ligament"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Sacrospinous_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-sacroiliac-joint`,
  },
  {
  id: `lig-sacrotuberal-ligament`,
  kind: `ligament`,
  nameEn: `Sacrotuberal ligament`,
  nameEs: `Ligamento sacrotuberal`,
  synonyms: [
    "Ligamento sacrotuberal",
    "Sacrotuberal ligament"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Sacrotuberal_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-sacroiliac-joint`,
  },
  {
  id: `lig-iliolumbar-ligament`,
  kind: `ligament`,
  nameEn: `Iliolumbar ligament`,
  nameEs: `Ligamento iliolumbar`,
  synonyms: [
    "Ligamento iliolumbar",
    "Iliolumbar ligament"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Iliolumbar_ligament_r"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-sacroiliac-joint`,
  },
  {
  id: `lig-ligament-of-head-of-femur`,
  kind: `ligament`,
  nameEn: `Ligament of head of femur`,
  nameEs: `Ligamento de la cabeza del fémur`,
  synonyms: [
    "Ligamento de la cabeza del fémur",
    "Ligament of head of femur"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Ligament_of_head_of_femurr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-hip-joint`,
  },
  {
  id: `lig-transverse-acetabular-ligament`,
  kind: `ligament`,
  nameEn: `Transverse acetabular ligament`,
  nameEs: `Ligamento transverso del acetábulo`,
  synonyms: [
    "Ligamento transverso del acetábulo",
    "Transverse acetabular ligament"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Transverse_acetabular_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-hip-joint`,
  },
  {
  id: `lig-ulnar-collateral-ligament-of-elbow`,
  kind: `ligament`,
  nameEn: `Ulnar collateral ligament of elbow`,
  nameEs: `Ligamento colateral cubital del codo`,
  synonyms: [
    "Ligamento colateral cubital del codo",
    "Ulnar collateral ligament of elbow"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Ulnar_collateral_ligament_of_elbowr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Estrés en lanzamientos (béisbol) y fondos profundos.`,
  jointId: `art-elbow-joint`,
  },
  {
  id: `lig-dorsal-radio-ulnar-ligament`,
  kind: `ligament`,
  nameEn: `Dorsal radio-ulnar ligament`,
  nameEs: `Ligamento radio-ulnar dorsal`,
  synonyms: [
    "Ligamento radio-ulnar dorsal",
    "Dorsal radio-ulnar ligament"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Dorsal_radio-ulnar_ligament", "Dorsal_radiocarpal_ligament", "Dorsal_ulnocarpal_ligament", "Dorsal_intercarpal_ligaments", "Dorsal_intercarpal_ligaments001", "Dorsal_scaphotriquetral_ligament", "Scaphocapitate_ligament", "Scapholunate_interosseus_ligament", "Scaphotrapeziotrapezoidal_ligament", "Capitohamate_interosseus_ligament", "Lunotriquetral_interosseous_ligament", "Trapeziotrapezoidal_interosseous_ligament", "Trapezoideocapitate_interosseous_ligament", "Pisohamate_ligament", "Pisometacarpal_ligament", "Pisotriquetral_ligament"], "upper-limb": ["Dorsal_radio-ulnar_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-radioulnar-articulation-art-druj`,
  },
  {
  id: `lig-palmar-radio-ulnar-ligament`,
  kind: `ligament`,
  nameEn: `Palmar radio-ulnar ligament`,
  nameEs: `Ligamento radio-ulnar palmar`,
  synonyms: [
    "Ligamento radio-ulnar palmar",
    "Palmar radio-ulnar ligament"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Palmar_radio-ulnar_ligament", "Palmar_radiocarpal_ligament", "Palmar_ulnocarpal_ligament", "Radioscaphocapitate_ligament", "Palmar_capitohamate_ligament", "Palmar_lunotriquetral_ligament", "Palmar_scaphotriquetral_ligament", "Palmar_trapezoideocapitate_ligament", "Radiate_carpal_ligament", "Triquetrocapitate_ligament", "Triquetrohamate_ligament", "Ulnopisiform_ligament", "Ulnotriquetral_ligament"], "upper-limb": ["Palmar_radio-ulnar_ligament"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `TFCC — carga en soportes de muñeca.`,
  jointId: `art-radioulnar-articulation-art-druj`,
  },
  {
  id: `lig-transverse-humeral-ligament`,
  kind: `ligament`,
  nameEn: `Transverse humeral ligament`,
  nameEs: `Ligamento humeral transverso`,
  synonyms: [
    "Ligamento humeral transverso",
    "Transverse humeral ligament"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Transverse_humeral_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Túnel del tendón de la cabeza larga del bíceps.`,
  jointId: `art-shoulder-joint`,
  },
  {
  id: `lig-trapezoid-ligament`,
  kind: `ligament`,
  nameEn: `Trapezoid ligament`,
  nameEs: `Ligamento trapezoide (coracoclavicular)`,
  synonyms: [
    "Ligamento trapezoide (coracoclavicular)",
    "Trapezoid ligament"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Trapezoid_ligament_(part_of_coracoclavicular_ligament)r"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Separación AC en caídas sobre el hombro.`,
  jointId: `art-acromioclavicular-joint`,
  },
  {
  id: `lig-flexor-retinaculum-of-wrist`,
  kind: `ligament`,
  nameEn: `Flexor retinaculum of wrist`,
  nameEs: `Retináculo flexor de la muñeca`,
  synonyms: [
    "Retináculo flexor de la muñeca",
    "Flexor retinaculum of wrist"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Flexor_retinaculum_of_wrist", "Transverse_carpal_ligament"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Techo del túnel carpiano (nervio mediano).`,
  jointId: `art-wrist-joint`,
  },
  {
  id: `lig-extensor-retinaculum-of-wrist`,
  kind: `ligament`,
  nameEn: `Extensor retinaculum of wrist`,
  nameEs: `Retináculo extensor de la muñeca`,
  synonyms: [
    "Retináculo extensor de la muñeca",
    "Extensor retinaculum of wrist"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Extensor_retinaculum_of_wrist"], "upper-limb": ["Extensor_retinaculum_of_wrist"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Compartimentos extensores (De Quervain).`,
  jointId: `art-wrist-joint`,
  },
  {
  id: `lig-flexor-retinaculum-of-ankle`,
  kind: `ligament`,
  nameEn: `Flexor retinaculum of ankle`,
  nameEs: `Retináculo flexor del tobillo`,
  synonyms: [
    "Retináculo flexor del tobillo",
    "Flexor retinaculum of ankle"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Flexor_retinaculum_of_ankler"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Túnel tarsiano (nervio tibial).`,
  jointId: `art-ankle-joint`,
  },
  {
  id: `lig-plantar-calcaneonavicular-ligament`,
  kind: `ligament`,
  nameEn: `Plantar calcaneonavicular ligament`,
  nameEs: `Ligamento calcaneonavicular plantar`,
  synonyms: [
    "Ligamento calcaneonavicular plantar",
    "Plantar calcaneonavicular ligament"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Plantar_calcaneonavicular_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  note: `Soporte del arco medial.`,
  jointId: `art-subtalar-joint`,
  },
  {
  id: `lig-long-plantar-ligament`,
  kind: `ligament`,
  nameEn: `Long plantar ligament`,
  nameEs: `Ligamento plantar largo`,
  synonyms: [
    "Ligamento plantar largo",
    "Long plantar ligament"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Long_plantar_ligamentr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ligamento identificado en el modelo GLB; ficha Gray's/Moore pendiente."}
  ],
  jointId: `art-subtalar-joint`,
  },
  {
    id: `lig-digital-apparatus-hand`,
    kind: `ligament`,
    nameEn: `Digital fibrous apparatus of hand (Annular & Cruciform ligaments)`,
    nameEs: `Aparato fibroso digital de la mano (ligamentos anulares y cruciformes)`,
    synonyms: ["Poleas digitales", "Ligamentos anulares de la mano", "Annular ligaments of fingers", "Poleas A1-A5"],
    zone: `forearm-hand`,
    modelMeshes: {"hand": ["Annular_ligament(A1)_of_1st_finger", "Annular_ligament(A2)_of_1st_finger", "Annular_ligaments_of_2nd_finger_A1-A5", "Annular_ligaments_of_3rd_finger_A1-A5", "Annular_ligaments_of_4th_finger_A1-A5", "Annular_ligaments_of_5th_finger_A1-A5", "Cruciform_ligaments_of_2nd_finger", "Cruciform_ligaments_or_3rd_finger", "Cruciform_ligaments_or_4th_finger", "Cruciform_ligaments_or_5th_finger", "Extensor_hood_of_2nd_finger", "Extensor_hood_of_3rd_finger", "Extensor_hood_of_4th_finger", "Extensor_hood_of_5th_finger", "Lateral_band_of_2nd_finger", "Lateral_band_of_3rd_finger", "Lateral_band_of_4th_finger", "Lateral_band_of_5th_finger", "Intertendinous_connections_of_extensor_digitorum", "Oblique_ligament_of_1st_finger"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--codo-muneca", "chapter": 7, "note": "Sistema de poleas anulares (A1-A5) y cruciformes (C1-C3) que previene el efecto cuerda de arco (bowstringing) de los tendones flexores profundos y superficiales."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Polea A1 implicada en dedo en resorte / tenosinovitis estenosante.`,
  },
  {
    id: `lig-collateral-and-palmar-finger-ligaments`,
    kind: `ligament`,
    nameEn: `Collateral and Palmar ligaments of MCP, PIP and DIP joints`,
    nameEs: `Ligamentos colaterales y palmares metacarpofalángicos e interfalángicos`,
    synonyms: ["Ligamentos colaterales de los dedos", "Ligamentos palmares", "Placas volares"],
    zone: `forearm-hand`,
    modelMeshes: {"hand": ["Collateral_ligaments_of_distal_phalangeal_joints", "Collateral_ligaments_of_interphalangeal_joint", "Collateral_ligaments_of_metacarpal_joints", "Palmar_ligaments_of_distal_phalangeal_joints", "Palmar_ligaments_of_interphalangeal_joints", "Palmar_ligaments_of_metacarpophalangeal_joints", "Deep_transverse_metacarpal_ligament", "Superficial_transverse_metacarpal_ligament", "Palmar_metacarpal_ligaments", "Dorsal_metacarpal_ligaments", "Interosseous_metacarpal_ligaments", "Palmar_carpometacarpal_ligaments", "Dorsal_carpometacarpal_ligaments", "Radial_collateral_ligament", "Ulnar_collateral_ligament"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--codo-muneca", "chapter": 7, "note": "Ligamentos colaterales primarios que restringen la desviación varo/valgo en las articulaciones interfalángicas y MCF."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Estabilidad lateral en agarres de pinza y fuerza.`,
  },
  {
    id: `fas-palmar-aponeurosis`,
    kind: `ligament`,
    nameEn: `Palmar aponeurosis & Antebrachial fascia`,
    nameEs: `Aponeurosis palmar y fascia antebraquial`,
    synonyms: ["Aponeurosis palmar", "Fascia palmar", "Fascia antebraquial", "Palmar aponeurosis"],
    zone: `forearm-hand`,
    modelMeshes: {"hand": ["Aponeurosis_palmaris", "Antebrachial_fascia"], "upper-limb": ["Aponeurosis_palmarisr", "Antebrachial_fasciar"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--codo-muneca", "chapter": 7, "note": "Estructura fascial triangular densa en el centro de la palma; protege vasos y nervios subyacentes."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Afectada en contractura de Dupuytren.`,
  },
  {
    id: `ves-hand-arterial-network`,
    kind: `ligament`,
    nameEn: `Arterial network of hand & wrist (Palmar arches & Digital arteries)`,
    nameEs: `Red arterial de la mano y muñeca (arcos palmares y arterias digitales)`,
    synonyms: ["Arterias de la mano", "Arco palmar profundo", "Arco palmar superficial", "Hand arteries"],
    zone: `forearm-hand`,
    modelMeshes: {"hand": ["Radial_artery", "Ulnar_artery", "Deep_palmar_arch", "Superficial_palmar_arch", "Common_palmar_digital_arteries", "Proper_palmar_digital_arteries", "Palmar_metacarpal_arteries", "Dorsal_carpal_arch", "Dorsal_carpal_network", "Dorsal_digital_arteries_of_hand", "Dorsal_metacarpal_artery", "Dorsalis_indicis", "Dorsalis_pollicis", "Perforating_arteries_of_hand", "Princeps_pollicis_artery", "Radialis_indicis", "Anterior_interosseous_artery", "Posterior_interosseous_artery", "Palmar_carpal_branches", "Ulnar_artery_(dorsal_carpal_br)"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--codo-muneca", "chapter": 7, "note": "Anastomosis de las arterias radial y ulnar formando los arcos palmares superficial y profundo."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Irrigación completa de los dígitos y músculos intrínsecos.`,
  },
  {
    id: `ves-hand-venous-network`,
    kind: `ligament`,
    nameEn: `Venous network of hand & upper limb (Cephalic, Basilic & Deep arches)`,
    nameEs: `Red venosa de la mano y miembro superior (cefálica, basílica y arcos)`,
    synonyms: ["Venas de la mano", "Red venosa dorsal", "Basilic vein", "Cephalic vein"],
    zone: `forearm-hand`,
    modelMeshes: {"hand": ["Basilic_vein", "Cephalic_vein", "Median_antebrachial_vein", "Deep_veins_of_the_arm", "Deep_venous_palmar_arch", "Superficial_palmar_venous_arch", "Superficial_veins_of_upper_limb", "Dorsal_venous_network_of_hand", "Palmar_venous_network_of_hand", "Palmar_metacarpal_veins", "Dorsal_digital_veins", "Dorsal_metatarsal_veins", "Palmal_digital_veins", "Radial_veins", "Ulnar_veins", "Anterior_interosseous_veins", "Posterior_interosseous_veins", "Intercapitular_veins_of_hand"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--codo-muneca", "chapter": 7, "note": "Drenaje venoso superficial (red dorsal que origina las venas basílica y cefálica) y profundo."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Drenaje venoso de retorno de la mano.`,
  },
  {
    id: `lig-menisci-and-knee-capsule`,
    kind: `ligament`,
    nameEn: `Menisci and Knee joint capsule`,
    nameEs: `Meniscos y cápsula articular de la rodilla`,
    synonyms: ["Meniscos de la rodilla", "Menisco medial", "Menisco lateral", "Knee menisci"],
    zone: `knee`,
    modelMeshes: {"lower-limb": ["Anterior_cruciate_ligamentr", "Anterior_horn_of_Lateral_meniscusr", "Anterior_horn_of_Medial_meniscusr", "Anterior_tibiofibular_ligamentr", "Articular_capsule_of_knee_jointr", "Deep_Infrapatellar_bursar", "Lateral_meniscusr", "Lateral_patellar_retinaculum_(horizontal_part)r", "Lateral_patellar_retinaculum_(vertical_part)r", "Medial_meniscusr", "Medial_patellar_retinaculum_(horizontal_part)r", "Medial_patellar_retinaculum_(vertical_part)r", "Oblique_popliteal_ligamentr", "Posterior_cruciate_ligamentr", "Posterior_horn_of_Lateral_meniscusr", "Posterior_horn_of_Medial_meniscusr", "Posterior_meniscofemoral_ligamentr", "Posterior_tibiofibular_ligamentr", "Quadriceps_common_tendon_and_patellar_ligament", "Quadriceps_common_tendon_and_patellar_ligamentr", "Subcutaneous_Infrapatellar_bursar", "Subcutaneous_prepatellar_bursar", "Subfascial_prepatellar_bursar", "Subtendinous_prepatellar_bursar", "Suprapatellar_bursa_overlayr", "Synovial_membranes_of_kneer", "Transverse_ligament_of_kneer", "Transverse_tibiofibular_ligamentr"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--rodilla", "chapter": 6, "note": "Meniscos fibrocartilaginosos medial (forma de C) y lateral (forma de O) que aumentan la congruencia femorotibial y absorben impactos."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Menisco medial más vulnerable a lesiones por anclaje al ligamento colateral medial.`,
  },
  {
    id: `lig-hip-capsule-and-labrum`,
    kind: `ligament`,
    nameEn: `Hip joint capsule, Labrum & Pelvic ligaments`,
    nameEs: `Cápsula coxofemoral, labrum acetabular y ligamentos pélvicos`,
    synonyms: ["Labrum acetabular", "Ligamento iliofemoral", "Ligamentos de la cadera", "Hip capsule"],
    zone: `hip-groin`,
    modelMeshes: {"lower-limb": ["Acetabular_labrumr", "Adductor_canalr", "Adductor_hiatusr", "Anterior_intermuscular_septum_of_legr", "Anterior_sacro-iliac_ligamentr", "Descending_part_of_Iliofemoral_ligamentr", "Fascia_latar", "Femoral_canalr", "Iliolumbar_ligament_r", "Iliopectineal_bursar", "Iliotibial_tractr", "Interossea__Posterior_sacro-iliac_ligamentr", "Lateral_femoral_intermuscular_septumr", "Ligament_of_head_of_femurr", "Medial_femoral_intermuscular_septumr", "Posterior_intermuscular_septum_of_legr", "Pubofemoral_ligamentr", "Sacrospinous_ligamentr", "Sacrotuberal_ligamentr", "Sciatic_bursa_of_gluteus_maximus_(Ischiogluteal_bursa)r", "Transverse_acetabular_ligamentr", "Transverse_intermuscular_septum_of_legr", "Transverse_part_of_Iliofemoral_ligamentr"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--cadera-muslo", "chapter": 6, "note": "Ligamento iliofemoral (de Bertin) más fuerte del cuerpo; labrum fibrocartilaginoso que profundiza el acetábulo."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Restringe la hiperextensión coxofemoral.`,
  },
  {
    id: `lig-foot-retinacula-and-tarsal-ligaments`,
    kind: `ligament`,
    nameEn: `Foot retinacula, Tarsal & Intermetatarsal ligaments`,
    nameEs: `Retináculos del pie y ligamentos tarsianos/intermetatarsianos`,
    synonyms: ["Retináculos del pie", "Ligamentos del tarso", "Foot retinacula"],
    zone: `ankle-foot`,
    modelMeshes: {"lower-limb": ["Acetabular_labrumr", "Adductor_canalr", "Adductor_hiatusr", "Annular_ligaments_of_1st_toe_A1-A5r", "Annular_ligaments_of_2nd_toe_A1-A5r", "Annular_ligaments_of_3rd_toe_A1-A5r", "Annular_ligaments_of_4th_toe_A1-A5r", "Annular_ligaments_of_5th_toe_A1-A5r", "Anterior_cruciate_ligamentr", "Anterior_horn_of_Lateral_meniscusr", "Anterior_horn_of_Medial_meniscusr", "Anterior_intermuscular_septum_of_legr", "Anterior_ligament_of_fibular_headr", "Anterior_pubic_ligament", "Anterior_sacro-iliac_ligamentr", "Anterior_talocalcaneal_ligamentr", "Anterior_talofibular_ligamentr", "Anterior_tibiofibular_ligamentr", "Anterior_tibiotalar_ligament_(Tibiospring_lig)r", "Arcuate_ligamentr", "Articular_capsule_of_knee_jointr", "Articular_capsules_of_distal_interphalangeal_joints", "Articular_capsules_of_metatarsophalangeal_jointsr", "Articular_capsules_of_proximal_interphalangealr", "Bifurcatum_ligament", "Bursa_of_piriformisr", "Bursae", "Calcaneal_tendonr", "Calcaneocuboid_ligamentr", "Calcaneofibular_ligamentr", "Calcaneonavicular_ligamentr", "Capsule_of_talocrural_jointr", "Cervical_ligament_(anterior_talocalcaneal_ligament)r", "Collateral_ligament_of_proximal_interphalangeal_jointsr", "Collateral_ligaments_of_distal_interphalangeal_jointsr", "Collateral_ligaments_of_metatarsophalangeal_jointsr", "Common_tendon_of_Semitendinosus_and_Long_head_of_biceps_femoris", "Common_tendon_of_biceps_femorisr", "Common_tendon_sheath_of_fibularis_musclesr", "Communicating_brof_Posterior_tibial_a_and_Femoral_ar", "Cruciform_ligaments_or_1st_toer", "Cruciform_ligaments_or_2nd_toer", "Cruciform_ligaments_or_3rd_toer", "Cruciform_ligaments_or_4th_toer", "Cruciform_ligaments_or_5th_toer", "Crural_fasciar", "Cuneometatarsal_interosseus_ligamentsr", "Deep_Infrapatellar_bursar", "Deep_plantar_archr", "Deep_transverse_metatarsal_ligamentr", "Descending_part_of_Iliofemoral_ligamentr", "Dorsal_calcaneocuboid_ligamentr", "Dorsal_cuboidonavicular_ligamentr", "Dorsal_cuneocuboid_ligamentr", "Dorsal_cuneonavicular_ligamentsr", "Dorsal_intercuneiform_ligamentsr", "Dorsal_metatarsal_ligamentsr", "Dorsal_tarsometatarsal_ligamentsr", "Dorsal_venous_arch_of_footr", "Extensor_apparatus_of_1st_toer", "Extensor_apparatus_of_2nd_toer", "Extensor_apparatus_of_3rd_toer", "Extensor_apparatus_of_4th_toer", "Extensor_apparatus_of_5th_toer", "Extensor_digitorum_longus-fibularis_tertius_vaginae_tendinumr", "Extensor_digitorum_longus_tendonsr", "Extensor_hallucis_longus_tendon_sheathr", "Fascia", "Fascia_latar", "Femoral_canalr", "Fibrous_sheath_of_toesr", "Fibular_collateral_ligamentr", "Flexor_digitorum_longus_tendon_sheathr", "Flexor_hallucis_longus_tendon_sheathr", "Flexor_retinaculum_of_ankler", "Gluteal_aponeurosisr", "Hip_joint_capsuler", "Iliolumbar_ligament_r", "Iliopectineal_bursar", "Iliotibial_tractr", "Inferior_extensor_retinaculumr", "Inferior_fibular_retinaculumr", "Inferior_subtendinous_bursa_of_biceps_femorisr", "Infrapatellar_fat_padr", "Intercornual_ligamentr", "Intercuneiform_interosseus_ligamentsr", "Intermuscular_gluteal_bursaer", "Interossea__Posterior_sacro-iliac_ligamentr", "Interosseous_membrane_of_legr", "Interosseus_talocalcaneal_ligamentr", "Intersesamoid_ligamentr", "Ishciofemoral_ligamentr", "Lateral_femoral_intermuscular_septumr", "Lateral_meniscusr", "Lateral_patellar_retinaculum_(horizontal_part)r", "Lateral_patellar_retinaculum_(vertical_part)r", "Lateral_subtendinous_bursa_of_gastrocnemius_muscler", "Ligament_of_head_of_femurr", "Ligaments", "Ligaments_of_fibular_headr", "Long_plantar_ligamentr", "Medial_collatertal_ligamentr", "Medial_femoral_intermuscular_septumr", "Medial_meniscusr", "Medial_patellar_retinaculum_(horizontal_part)r", "Medial_patellar_retinaculum_(vertical_part)r", "Medial_subtendinous_bursa_of_gastrocnemius_muscler", "Medial_talocalcaneal_ligamentr", "Metatarsal_interosseous_ligamentsr", "Oblique_popliteal_ligamentr", "Obturator_membraner", "Palmar_ligament_of_proximal_interphalangeal_jointsr", "Palmar_ligaments_of_distal_interphalangeal_jointsr", "Palmar_ligaments_of_metatarsophalangeal_jointsr", "Perforating_br_between_Arcuate_a_and_Deep_plantar_archr", "Pes_anserine_bursar", "Pes_anserinus_common_tendonr", "Plantar_aponeurosisr", "Plantar_calcaneocuboid_ligamentr", "Plantar_calcaneonavicular_ligamentr", "Plantar_cuboideonavicular_ligamentr", "Plantar_cuneocuboid_ligamentr", "Plantar_cuneonavicular_ligamentsr", "Plantar_intercuneiform_ligamentsr", "Plantar_metatarsal_ligamentsr", "Plantar_tarsometatarsal_ligamentsr", "Plantar_tendinous_sheath_of_fibularis_longusr", "Plantar_venous_archr", "Posterior_arch_veinsr", "Posterior_cruciate_ligamentr", "Posterior_horn_of_Lateral_meniscusr", "Posterior_horn_of_Medial_meniscusr", "Posterior_intermuscular_septum_of_legr", "Posterior_ligament_of_fibular_headr", "Posterior_meniscofemoral_ligamentr", "Posterior_pubic_ligament", "Posterior_talocalcaneal_ligamentr", "Posterior_talofibular_ligamentr", "Posterior_tibiofibular_ligamentr", "Posterior_tibiotalar_ligamentr", "Pubofemoral_ligamentr", "Quadriceps_common_tendon_and_patellar_ligament", "Quadriceps_common_tendon_and_patellar_ligamentr", "Sacrospinous_ligamentr", "Sacrotuberal_ligamentr", "Sciatic_bursa_of_gluteus_maximus_(Ischiogluteal_bursa)r", "Sciatic_bursa_of_obturator_internusr", "Semimembranosus_bursa_deep_to_tendonr", "Semimembranosus_muscle_tendonr", "Subcutaneous_Infrapatellar_bursar", "Subcutaneous_bursa_of__medial_malleolusr", "Subcutaneous_bursa_of_lateral_malleolusr", "Subcutaneous_bursa_of_tuberosity_of_tibiar", "Subcutaneous_calcaneal_bursar", "Subcutaneous_prepatellar_bursar", "Subcutaneous_trochanteric_bursar", "Subfascial_prepatellar_bursar", "Subtendinous_bursa_of_iliacusr", "Subtendinous_bursa_of_obturator_internusr", "Subtendinous_bursa_of_sartoriusr", "Subtendinous_bursa_of_tibialis_anteriorr", "Subtendinous_calcaneal_bursar", "Subtendinous_prepatellar_bursar", "Sup,_Inf,_Ant,_Post,_Pubic_ligaments", "Superficial_transverse_metatarsal_ligamentr", "Superior_bursa_of_biceps_femorisr", "Superior_extensor_retinaculum_of_ankler", "Superior_fibular_retinaculumr", "Suprapatellar_bursa_overlayr", "Synovial_membranes_of_kneer", "Synovial_sheaths_of_toesr", "Talonavicular_ligamentr", "Tendinous_arch_of_soleusr", "Tensor_fasciae_lataer", "Tibialis_anterior_tendon_sheathr", "Tibialis_posterior_tendon_sheathr", "Tibiocalcaneal_ligamentr", "Tibionavicular_ligamentr", "Transverse_acetabular_ligamentr", "Transverse_intermuscular_septum_of_legr", "Transverse_ligament_of_kneer", "Transverse_part_of_Iliofemoral_ligamentr", "Transverse_tibiofibular_ligamentr", "Trochanteric_bursa_of_gluteus_maximusr", "Trochanteric_bursa_of_gluteus_minimusr", "Trochanteric_bursae_of_gluteus_mediusr"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--tobillo-pie", "chapter": 6, "note": "Retináculos que contienen los tendones extrínsecos y ligamentos que sostienen los arcos longitudinal y transverso del pie."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `El ligamento calcaneonavicular plantar (spring) sostiene la cabeza del astrágalo.`,
  },
  {
    id: `ves-lower-limb-arterial-network`,
    kind: `ligament`,
    nameEn: `Arterial system of lower limb (Femoral, Popliteal, Tibial & Plantar arches)`,
    nameEs: `Sistema arterial del miembro inferior (femoral, poplítea, tibial y arcos)`,
    synonyms: ["Arterias de la pierna", "Arteria femoral", "Arteria tibial", "Lower limb arteries"],
    zone: `hip-groin`,
    modelMeshes: {"lower-limb": ["1th_to_4th_perforating_branches_of_the_deep_femoral_arteryr", "1th_to_4th_perforating_branches_of_the_deep_femoral_veinr", "Accessory_saphenous_veinr", "Accompanying_veins_of_arcuate_and_dorsal_arteriesr", "Accompanying_veins_of_dorsal_digital_metatarsal_arteriesr", "Anterior_cutaneous_branches_of_Femoral_nerver", "Anterior_femoral_cutaneous_veinr", "Anterior_lateral_malleolar_arteryr", "Anterior_medial_malleolar_arteryr", "Anterior_tibial_arteryr", "Anterior_tibial_recurrent_arteryr", "Anterior_tibial_veinr", "Arcuate_arteryr", "Arteries", "Ascending_branch_of_lateral_circumflex_femoral_arteryr", "Deep_artery_of_the_thighr", "Deep_branch_of_Medial_plantar_arteryr", "Deep_femoral_veinr", "Deep_plantar_archr", "Deep_plantar_arteryr", "Descending_branch_of_lateral_circumflex_femoral_arteryr", "Descending_genicular_arteryr", "Dorsal_digital_arteries_of_footr", "Dorsal_digital_branches_of_deep_fibular_nerver", "Dorsal_digital_branches_of_superficial_fibular_nerver", "Dorsal_digital_vein_of_medial_side_of_great_toer", "Dorsal_digital_veinsr", "Dorsal_metatarsal_arteriesr", "Dorsal_metatarsal_veinsr", "Dorsal_pedis_arteryr", "Dorsal_venous_arch_of_footr", "Femoral_arteryr", "Femoral_neck_vesselsr", "Femoral_veinr", "Fibular_arteryr", "Fibular_veinr", "Great_saphenous_veinr", "Inferior_lateral_genicular_arteryr", "Inferior_lateral_genicular_veinr", "Inferior_medial_genicular_arteryr", "Inferior_medial_genicular_veinr", "Infrapatellar_branch_of_Saphenous_nerver", "Intercapitular_veins_of_footr", "Lateral_calcaneal_branch_of_fibular_arteryr", "Lateral_circumflex_femoral_arteryr", "Lateral_circumflex_femoral_veinr", "Lateral_malleolar_branches_of_Fibular_arteryr", "Lateral_marginal_veinr", "Lateral_plantar_arteryr", "Lateral_plantar_veinr", "Lateral_tarsal_arteryr", "Medial_calcaneal_arteryr", "Medial_calcaneal_branches_of_Tibial_nerver", "Medial_circumflex_femoral_arteryr", "Medial_circumflex_femoral_veinr", "Medial_malleolar_artery_of_Posterior_tibial_arteryr", "Medial_marginal_veinr", "Medial_plantar_arteryr", "Medial_plantar_veinr", "Medial_tarsal_arteriesr", "Middle_genicular_arteryr", "Middle_genicular_veinr", "Muscular_branches_of_the_Femoral_nerver", "Perforating_br_between_Arcuate_a_and_Deep_plantar_archr", "Perforating_branches_(Boyd's_veins)r", "Perforating_branches_(Cockett's_veins)r", "Perforating_branches_(Dodd's_veins)r", "Perforating_branches_of_fibular_arteryr", "Plantar_digital_veinsr", "Plantar_metatarsal_arteriesr", "Plantar_metatarsal_veinsr", "Plantar_venous_archr", "Popliteal_arteryr", "Popliteal_veinr", "Posterior_arch_veinsr", "Posterior_tibial_arteryr", "Posterior_tibial_recurrent_arteryr", "Posterior_tibial_veinr", "Proper_plantar_digital_branches_(Lateral_plantar_nerve)r", "Proper_plantar_digital_branches_(Medial_plantar_nerve)r", "Saphenous_branch_of_Femoralis_nerver", "Saphenous_nerve_(Medial_crural_cutaneous_branches)r", "Saphenous_openingr", "Small_saphenous_veinr", "Superficial_branch_of_Medial_planter_arteryr", "Superficial_circumflex_iliac_arteryr", "Superficial_circumflex_iliac_veinr", "Superficial_epigastric_arteryr", "Superficial_epigastric_veinr", "Superficial_external_pudendal_arteryr", "Superficial_external_pudendal_veinr", "Superior_lateral_genicular_arteryr", "Superior_lateral_genicular_veinr", "Superior_medial_genicular_arteryr", "Superior_medial_genicular_veinr", "Sural_arteryr", "Sural_veinr", "Tendinous_arch_of_soleusr", "Tributary_veins_of_Great_and_small_saphenous_veinsr", "Veins"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--cadera-muslo", "chapter": 6, "note": "Árbol arterial mayor del miembro inferior derivado de la arteria ilíaca externa."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Irrigación nutricia muscular y distal.`,
  },
  {
    id: `ves-lower-limb-venous-network`,
    kind: `ligament`,
    nameEn: `Venous system of lower limb (Saphenous, Femoral, Popliteal & Tibial veins)`,
    nameEs: `Sistema venoso del miembro inferior (safenas, femoral, poplítea y tibiales)`,
    synonyms: ["Venas de la pierna", "Vena safena", "Lower limb veins"],
    zone: `ankle-foot`,
    modelMeshes: {"lower-limb": ["1th_to_4th_perforating_branches_of_the_deep_femoral_arteryr", "1th_to_4th_perforating_branches_of_the_deep_femoral_veinr", "Accessory_saphenous_veinr", "Accompanying_veins_of_arcuate_and_dorsal_arteriesr", "Accompanying_veins_of_dorsal_digital_metatarsal_arteriesr", "Anterior_cutaneous_branches_of_Femoral_nerver", "Anterior_femoral_cutaneous_veinr", "Anterior_lateral_malleolar_arteryr", "Anterior_medial_malleolar_arteryr", "Anterior_tibial_arteryr", "Anterior_tibial_recurrent_arteryr", "Anterior_tibial_veinr", "Arcuate_arteryr", "Ascending_branch_of_lateral_circumflex_femoral_arteryr", "Deep_artery_of_the_thighr", "Deep_branch_of_Medial_plantar_arteryr", "Deep_femoral_veinr", "Deep_plantar_archr", "Deep_plantar_arteryr", "Descending_branch_of_lateral_circumflex_femoral_arteryr", "Descending_genicular_arteryr", "Dorsal_digital_branches_of_deep_fibular_nerver", "Dorsal_digital_branches_of_superficial_fibular_nerver", "Dorsal_digital_vein_of_medial_side_of_great_toer", "Dorsal_digital_veinsr", "Dorsal_metatarsal_veinsr", "Dorsal_pedis_arteryr", "Dorsal_venous_arch_of_footr", "Dorsal_venous_network_of_footr", "Femoral_arteryr", "Femoral_neck_vesselsr", "Femoral_veinr", "Fibular_arteryr", "Fibular_veinr", "Great_saphenous_veinr", "Inferior_lateral_genicular_arteryr", "Inferior_lateral_genicular_veinr", "Inferior_medial_genicular_arteryr", "Inferior_medial_genicular_veinr", "Infrapatellar_branch_of_Saphenous_nerver", "Intercapitular_veins_of_footr", "Lateral_calcaneal_branch_of_fibular_arteryr", "Lateral_circumflex_femoral_arteryr", "Lateral_circumflex_femoral_veinr", "Lateral_malleolar_branches_of_Fibular_arteryr", "Lateral_marginal_veinr", "Lateral_plantar_arteryr", "Lateral_plantar_veinr", "Lateral_tarsal_arteryr", "Medial_calcaneal_arteryr", "Medial_calcaneal_branches_of_Tibial_nerver", "Medial_circumflex_femoral_arteryr", "Medial_circumflex_femoral_veinr", "Medial_malleolar_artery_of_Posterior_tibial_arteryr", "Medial_marginal_veinr", "Medial_plantar_arteryr", "Medial_plantar_veinr", "Middle_genicular_arteryr", "Middle_genicular_veinr", "Muscular_branches_of_the_Femoral_nerver", "Perforating_br_between_Arcuate_a_and_Deep_plantar_archr", "Perforating_branches_(Boyd's_veins)r", "Perforating_branches_(Cockett's_veins)r", "Perforating_branches_(Dodd's_veins)r", "Perforating_branches_of_fibular_arteryr", "Plantar_digital_veinsr", "Plantar_metatarsal_veinsr", "Plantar_venous_archr", "Popliteal_arteryr", "Popliteal_veinr", "Posterior_arch_veinsr", "Posterior_tibial_arteryr", "Posterior_tibial_recurrent_arteryr", "Posterior_tibial_veinr", "Proper_plantar_digital_branches_(Lateral_plantar_nerve)r", "Proper_plantar_digital_branches_(Medial_plantar_nerve)r", "Saphenous_branch_of_Femoralis_nerver", "Saphenous_nerve_(Medial_crural_cutaneous_branches)r", "Saphenous_openingr", "Small_saphenous_veinr", "Superficial_branch_of_Medial_planter_arteryr", "Superficial_circumflex_iliac_arteryr", "Superficial_circumflex_iliac_veinr", "Superficial_epigastric_arteryr", "Superficial_epigastric_veinr", "Superficial_external_pudendal_arteryr", "Superficial_external_pudendal_veinr", "Superior_lateral_genicular_arteryr", "Superior_lateral_genicular_veinr", "Superior_medial_genicular_arteryr", "Superior_medial_genicular_veinr", "Sural_arteryr", "Sural_veinr", "Tendinous_arch_of_soleusr", "Tributary_veins_of_Great_and_small_saphenous_veinsr", "Veins"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--cadera-muslo", "chapter": 6, "note": "Sistema venoso superficial (safena mayor y menor) y profundo con válvulas unidireccionales."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Bomba musculovenosa de la pantorrilla como corazón periférico.`,
  },
];