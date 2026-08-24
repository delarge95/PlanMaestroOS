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
  modelMeshes: {"hand":["Dorsal_radio-ulnar_ligament"],"upper-limb":["Dorsal_radio-ulnar_ligamentr"]},
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
  modelMeshes: {"hand":["Palmar_radio-ulnar_ligament"],"upper-limb":["Palmar_radio-ulnar_ligament"]},
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
  modelMeshes: {"hand":["Flexor_retinaculum_of_wrist"]},
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
  modelMeshes: {"hand":["Extensor_retinaculum_of_wrist"],"upper-limb":["Extensor_retinaculum_of_wrist"]},
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
];
