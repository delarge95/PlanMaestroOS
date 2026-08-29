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
];