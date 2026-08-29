// src/data/fitness/anatomy/bones.ts
// Huesos relevantes (39) — mapping a modelos GLB del inventario.
// GENERADO por rag/anatomy/scripts/build-anatomy-data.mjs — NO editar a mano.
// Regenerar: node rag/anatomy/scripts/build-anatomy-data.mjs

import type { BoneEntry } from './types';

export const BONES: BoneEntry[] = [
  {
  id: `bone-frontal-bone`,
  kind: `bone`,
  nameEn: `Frontal bone`,
  nameEs: `Hueso frontal`,
  synonyms: [
    "Hueso frontal",
    "Frontal bone"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Frontal_bone"],"exploded-skull":["Frontal_bone"],"overview-colored-skull":["Frontal_bone"],"overview-skeleton":["Frontal_bone"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-parietal-bone`,
  kind: `bone`,
  nameEn: `Parietal bone`,
  nameEs: `Hueso parietal`,
  synonyms: [
    "Hueso parietal",
    "Parietal bone"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Parietal_bonel","Parietal_boner"],"exploded-skull":["Parietal_bonel","Parietal_boner"],"overview-colored-skull":["Parietal_bonel","Parietal_boner"],"overview-skeleton":["Parietal_bone_left","Parietal_bone_right"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-temporal-bone`,
  kind: `bone`,
  nameEn: `Temporal bone`,
  nameEs: `Hueso temporal`,
  synonyms: [
    "Hueso temporal",
    "Temporal bone"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Temporal_bones"],"exploded-skull":["Temporal_bones"],"overview-colored-skull":["Temporal_boner"],"overview-skeleton":["Temporal_boner"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-occipital-bone`,
  kind: `bone`,
  nameEn: `Occipital bone`,
  nameEs: `Hueso occipital`,
  synonyms: [
    "Hueso occipital",
    "Occipital bone"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Occipital_bone"],"exploded-skull":["Occipital_bone"],"overview-colored-skull":["Occipital_bone"],"overview-skeleton":["Occipital_bone"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-sphenoid-bone`,
  kind: `bone`,
  nameEn: `Sphenoid bone`,
  nameEs: `Hueso esfenoides`,
  synonyms: [
    "Hueso esfenoides",
    "Sphenoid bone"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Sphenoid_bone"],"exploded-skull":["Sphenoid_bone"],"overview-colored-skull":["Sphenoid_bone"],"overview-skeleton":["Sphenoid_bone"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-ethmoid-bone`,
  kind: `bone`,
  nameEn: `Ethmoid bone`,
  nameEs: `Hueso etmoides`,
  synonyms: [
    "Hueso etmoides",
    "Ethmoid bone"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Ethmoid_Bone"],"exploded-skull":["Ethmoid_Bone"],"overview-colored-skull":["Ethmoid_Bone"],"overview-skeleton":["Ethmoid_Bone"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-zygomatic-bone`,
  kind: `bone`,
  nameEn: `Zygomatic bone`,
  nameEs: `Hueso cigomático`,
  synonyms: [
    "Hueso cigomático",
    "Zygomatic bone"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Zygomatic_bones"],"exploded-skull":["Zygomatic_bones"],"overview-colored-skull":["Zygomatic_boner"],"overview-skeleton":["Zygomatic_boner"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-maxilla`,
  kind: `bone`,
  nameEn: `Maxilla`,
  nameEs: `Maxilar`,
  synonyms: [
    "Maxilar",
    "Maxilla"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Maxilla_boner"],"exploded-skull":["Maxilla_bone"],"overview-colored-skull":["Maxilla_boner"],"overview-skeleton":["Maxilla_boner"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-mandible`,
  kind: `bone`,
  nameEn: `Mandible`,
  nameEs: `Mandíbula`,
  synonyms: [
    "Mandíbula",
    "Mandible"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Mandible_bone"],"exploded-skull":["Mandible_bone"],"overview-colored-skull":["Mandible_bone"],"overview-skeleton":["Mandible_bone"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Inserción del masetero y temporal (masticación).`,
  },
  {
  id: `bone-vomer`,
  kind: `bone`,
  nameEn: `Vomer`,
  nameEs: `Vómer`,
  synonyms: [
    "Vómer",
    "Vomer"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Vomer"],"exploded-skull":["Vomer"],"overview-colored-skull":["Vomer"],"overview-skeleton":["Vomer"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-nasal-bone`,
  kind: `bone`,
  nameEn: `Nasal bone`,
  nameEs: `Hueso nasal`,
  synonyms: [
    "Hueso nasal",
    "Nasal bone"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Nasal_bone"],"exploded-skull":["Nasal_bone"],"overview-colored-skull":["Nasal_boner"],"overview-skeleton":["Nasal_boner"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-atlas`,
  kind: `bone`,
  nameEn: `Atlas`,
  nameEs: `Atlas (C1)`,
  synonyms: [
    "Atlas (C1)",
    "Atlas"
  ],
  zone: `cervical`,
  modelMeshes: {"overview-skeleton":["Atlas_(C1)"],"upper-limb":["Atlas_(C1)"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Soporte craneocervical; rotación con C2.`,
  },
  {
  id: `bone-axis`,
  kind: `bone`,
  nameEn: `Axis`,
  nameEs: `Axis (C2)`,
  synonyms: [
    "Axis (C2)",
    "Axis"
  ],
  zone: `cervical`,
  modelMeshes: {"overview-skeleton":["Axis_(C2)"],"upper-limb":["Axis_(C2)"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Pivote de rotación cervical.`,
  },
  {
  id: `bone-cervical-vertebrae`,
  kind: `bone`,
  nameEn: `Cervical vertebrae`,
  nameEs: `Vértebras cervicales (C3-C7)`,
  synonyms: [
    "Vértebras cervicales (C3-C7)",
    "Cervical vertebrae"
  ],
  zone: `cervical`,
  modelMeshes: {"overview-skeleton":["Cervical_vertebrae_(C3)","Cervical_vertebrae_(C4)","Cervical_vertebrae_(C5)","Cervical_vertebrae_(C6)","Cervical_vertebrae_(C7)"],"upper-limb":["Cervical_vertebra_(C3)","Cervical_vertebra_(C4)","Cervical_vertebra_(C5)","Cervical_vertebra_(C6)","Cervical_vertebra_(C7)"],"vertebrae":["Cervical_vertebra_(C4)"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-thoracic-vertebra`,
  kind: `bone`,
  nameEn: `Thoracic vertebra`,
  nameEs: `Vértebras torácicas (T1-T12)`,
  synonyms: [
    "Vértebras torácicas (T1-T12)",
    "Thoracic vertebra"
  ],
  zone: `spine`,
  modelMeshes: {"lower-limb":["Thoracic_vertebra_(T12)"],"overview-skeleton":["Thoracic_vertebrae_(T1)","Thoracic_vertebrae_(T10)","Thoracic_vertebrae_(T11)","Thoracic_vertebrae_(T12)","Thoracic_vertebrae_(T2)","Thoracic_vertebrae_(T3)","Thoracic_vertebrae_(T4)","Thoracic_vertebrae_(T5)","Thoracic_vertebrae_(T6)","Thoracic_vertebrae_(T7)","Thoracic_vertebrae_(T8)","Thoracic_vertebrae_(T9)"],"upper-limb":["Thoracic_vertebra_(T1)","Thoracic_vertebra_(T10)","Thoracic_vertebra_(T11)","Thoracic_vertebra_(T12)","Thoracic_vertebra_(T2)","Thoracic_vertebra_(T3)","Thoracic_vertebra_(T4)","Thoracic_vertebra_(T5)","Thoracic_vertebra_(T6)","Thoracic_vertebra_(T7)","Thoracic_vertebra_(T8)","Thoracic_vertebra_(T9)"],"vertebrae":["Thoracic_vertebra_(T7)"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-lumbar-vertebra`,
  kind: `bone`,
  nameEn: `Lumbar vertebra`,
  nameEs: `Vértebras lumbares (L1-L5)`,
  synonyms: [
    "Vértebras lumbares (L1-L5)",
    "Lumbar vertebra"
  ],
  zone: `spine`,
  modelMeshes: {"lower-limb":["Lumbar_vertebra_(L1)","Lumbar_vertebra_(L2)","Lumbar_vertebra_(L3)","Lumbar_vertebra_(L4)","Lumbar_vertebra_(L5)"],"overview-skeleton":["Lumbar_vertebrae_(L1)","Lumbar_vertebrae_(L2)","Lumbar_vertebrae_(L3)","Lumbar_vertebrae_(L4)","Lumbar_vertebrae_(L5)"],"upper-limb":["Lumbar_vertebra_(L1)","Lumbar_vertebra_(L2)","Lumbar_vertebra_(L3)","Lumbar_vertebra_(L4)","Lumbar_vertebra_(L5)"],"vertebrae":["Lumbar_vertebra_(L3)"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Carga axial en squat/deadlift.`,
  },
  {
  id: `bone-sacrum`,
  kind: `bone`,
  nameEn: `Sacrum`,
  nameEs: `Sacro`,
  synonyms: [
    "Sacro",
    "Sacrum"
  ],
  zone: `spine`,
  modelMeshes: {"lower-limb":["Sacrum"],"overview-skeleton":["Sacrum"],"upper-limb":["Sacrum"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Transmite carga columna→cadera.`,
  },
  {
  id: `bone-coccyx`,
  kind: `bone`,
  nameEn: `Coccyx`,
  nameEs: `Cóccix`,
  synonyms: [
    "Cóccix",
    "Coccyx"
  ],
  zone: `spine`,
  modelMeshes: {"lower-limb":["Coccyx"],"overview-skeleton":["Coccyx"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-sternum`,
  kind: `bone`,
  nameEn: `Sternum`,
  nameEs: `Esternón`,
  synonyms: [
    "Esternón",
    "Sternum"
  ],
  zone: `chest`,
  modelMeshes: {"overview-skeleton":["Body_of_sternum","Manubrium_of_sternum"],"upper-limb":["Body_of_sternum","Manubrium_of_sternum","Xiphoid_process"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Inserción de pectoral mayor y costillas.`,
  },
  {
  id: `bone-rib`,
  kind: `bone`,
  nameEn: `Rib`,
  nameEs: `Costillas`,
  synonyms: [
    "Costillas",
    "Rib"
  ],
  zone: `chest`,
  modelMeshes: {"overview-skeleton":["Rib_(10th)r","Rib_(11th)r","Rib_(12th)r","Rib_(1st)r","Rib_(2nd)r","Rib_(3rd)r","Rib_(4th)r","Rib_(5th)r","Rib_(6th)r","Rib_(7th)r","Rib_(8th)r","Rib_(9th)r"],"upper-limb":["Rib_(10th)r","Rib_(11th)r","Rib_(12th)r","Rib_(1st)r","Rib_(2nd)r","Rib_(3rd)r","Rib_(4th)r","Rib_(5th)r","Rib_(6th)r","Rib_(7th)r","Rib_(8th)r","Rib_(9th)r"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-clavicle`,
  kind: `bone`,
  nameEn: `Clavicle`,
  nameEs: `Clavícula`,
  synonyms: [
    "Clavícula",
    "Clavicle"
  ],
  zone: `shoulder`,
  modelMeshes: {"overview-skeleton":["Clavicler"],"upper-limb":["Clavicler"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Pilar del hombro; lesión típica en caídas.`,
  },
  {
  id: `bone-scapula`,
  kind: `bone`,
  nameEn: `Scapula`,
  nameEs: `Escápula`,
  synonyms: [
    "Escápula",
    "Scapula"
  ],
  zone: `shoulder`,
  modelMeshes: {"overview-skeleton":["Scapular"],"upper-limb":["Scapular"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Base del manguito rotador y trapecio.`,
  },
  {
  id: `bone-humerus`,
  kind: `bone`,
  nameEn: `Humerus`,
  nameEs: `Húmero`,
  synonyms: [
    "Húmero",
    "Humerus"
  ],
  zone: `arm`,
  modelMeshes: {"overview-skeleton":["Humerusr"],"upper-limb":["Humerusr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Canal de torsión (nervio radial).`,
  },
  {
  id: `bone-radius`,
  kind: `bone`,
  nameEn: `Radius`,
  nameEs: `Radio`,
  synonyms: [
    "Radio",
    "Radius"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Radius"],"overview-skeleton":["Radiusr"],"upper-limb":["Radiusr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-ulna`,
  kind: `bone`,
  nameEn: `Ulna`,
  nameEs: `Ulna`,
  synonyms: [
    "Ulna",
    "Ulna"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Ulna"],"overview-skeleton":["Ulnar"],"upper-limb":["Ulnar"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-patella`,
  kind: `bone`,
  nameEn: `Patella`,
  nameEs: `Rótula`,
  synonyms: [
    "Rótula",
    "Patella"
  ],
  zone: `knee`,
  modelMeshes: {"lower-limb":["Patellar"],"overview-skeleton":["Patellar"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Polea del aparato extensor.`,
  },
  {
  id: `bone-hip-bone`,
  kind: `bone`,
  nameEn: `Hip bone`,
  nameEs: `Hueso coxal`,
  synonyms: [
    "Hueso coxal",
    "Hip bone"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Hip_boner"],"overview-skeleton":["Hip_boner"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Acetábulo = cadera.`,
  },
  {
  id: `bone-femur`,
  kind: `bone`,
  nameEn: `Femur`,
  nameEs: `Fémur`,
  synonyms: [
    "Fémur",
    "Femur"
  ],
  zone: `thigh`,
  modelMeshes: {"lower-limb":["Femurr"],"overview-skeleton":["Femurr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Palanca del squat; cuello vulnerable.`,
  },
  {
  id: `bone-tibia`,
  kind: `bone`,
  nameEn: `Tibia`,
  nameEs: `Tibia`,
  synonyms: [
    "Tibia",
    "Tibia"
  ],
  zone: `lower-leg`,
  modelMeshes: {"lower-limb":["Tibiar"],"overview-skeleton":["Tibiar"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Soporte de carga principal.`,
  },
  {
  id: `bone-fibula`,
  kind: `bone`,
  nameEn: `Fibula`,
  nameEs: `Peroné`,
  synonyms: [
    "Peroné",
    "Fibula"
  ],
  zone: `lower-leg`,
  modelMeshes: {"lower-limb":["Fibular"],"overview-skeleton":["Fibular"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Cabeza: nervio fibular común.`,
  },
  {
  id: `bone-talus`,
  kind: `bone`,
  nameEn: `Talus`,
  nameEs: `Astrágalo`,
  synonyms: [
    "Astrágalo",
    "Talus"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Talusr"],"overview-skeleton":["Talusr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-calcaneus`,
  kind: `bone`,
  nameEn: `Calcaneus`,
  nameEs: `Calcáneo`,
  synonyms: [
    "Calcáneo",
    "Calcaneus"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Calcaneusr"],"overview-skeleton":["Calcaneusr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Inserción del Aquiles.`,
  },
  {
  id: `bone-navicular-bone`,
  kind: `bone`,
  nameEn: `Navicular bone`,
  nameEs: `Escafoides tarsiano`,
  synonyms: [
    "Escafoides tarsiano",
    "Navicular bone"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Navicular_boner"],"overview-skeleton":["Navicular_boner"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Inserción tibial posterior.`,
  },
  {
  id: `bone-metatarsal-bones`,
  kind: `bone`,
  nameEn: `Metatarsal bones`,
  nameEs: `Metatarsianos`,
  synonyms: [
    "Metatarsianos",
    "Metatarsal bones"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Fifth_metatarsal_boner","First_metatarsal_boner","Fourth_metatarsal_boner","Second_metatarsal_boner","Third_metatarsal_boner"],"overview-skeleton":["Fifth_metatarsal_boner","First_metatarsal_boner","Fourth_metatarsal_boner","Second_metatarsal_boner","Third_metatarsal_boner"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-scaphoid`,
  kind: `bone`,
  nameEn: `Scaphoid`,
  nameEs: `Escafoides (carpo)`,
  synonyms: [
    "Escafoides (carpo)",
    "Scaphoid"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Scaphoid"],"overview-skeleton":["Scaphoidr"],"upper-limb":["Scaphoidr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-lunate-bone`,
  kind: `bone`,
  nameEn: `Lunate bone`,
  nameEs: `Semilunar`,
  synonyms: [
    "Semilunar",
    "Lunate bone"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Lunate_bone"],"overview-skeleton":["Lunate_boner"],"upper-limb":["Lunate_boner"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-hamate`,
  kind: `bone`,
  nameEn: `Hamate`,
  nameEs: `Ganchoso`,
  synonyms: [
    "Ganchoso",
    "Hamate"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Hamate"],"overview-skeleton":["Hamater"],"upper-limb":["Hamater"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
  id: `bone-trapezium`,
  kind: `bone`,
  nameEn: `Trapezium`,
  nameEs: `Trapecio (carpo)`,
  synonyms: [
    "Trapecio (carpo)",
    "Trapezium"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Trapezium"],"overview-skeleton":["Trapeziumr"],"upper-limb":["Trapeziumr"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  note: `Canal de Guyon vecino.`,
  },
  {
  id: `bone-capitate`,
  kind: `bone`,
  nameEn: `Capitate`,
  nameEs: `Grande (carpo)`,
  synonyms: [
    "Grande (carpo)",
    "Capitate"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Capitate"],"overview-skeleton":["Capitater"],"upper-limb":["Capitater"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
  {
    id: `bone-palatine-bone`,
    kind: `bone`,
    nameEn: `Palatine bone`,
    nameEs: `Hueso palatino`,
    synonyms: ["Hueso palatino", "Palatine bone", "Paladar óseo"],
    zone: `head-jaw`,
    modelMeshes: {"colored-skull-base": ["Palatine_bone"], "exploded-skull": ["Palatine_bone"], "overview-colored-skull": ["Palatine_boner"], "overview-skeleton": ["Palatine_boner"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--cabeza-cuello", "chapter": 8, "note": "Hueso par en forma de L que forma la porción posterior del paladar duro y la pared lateral de la cavidad nasal."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Contribuye al suelo de la órbita y pared nasal lateral.`,
  },
  {
    id: `bone-lacrimal-bone`,
    kind: `bone`,
    nameEn: `Lacrimal bone`,
    nameEs: `Hueso lagrimal`,
    synonyms: ["Hueso lagrimal", "Lacrimal bone", "Unguis"],
    zone: `head-jaw`,
    modelMeshes: {"colored-skull-base": ["Lacrimal_bones"], "exploded-skull": ["Lacrimal_bones"], "overview-colored-skull": ["Lacrimal_boner"], "overview-skeleton": ["Lacrimal_boner"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--cabeza-cuello", "chapter": 8, "note": "Hueso facial laminar más pequeño que alberga la fosa del saco lagrimal."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Pared medial de la fosa orbitaria.`,
  },
  {
    id: `bone-inferior-nasal-concha`,
    kind: `bone`,
    nameEn: `Inferior nasal concha`,
    nameEs: `Cornete nasal inferior`,
    synonyms: ["Cornete nasal inferior", "Inferior nasal concha", "Concha nasal inferior"],
    zone: `head-jaw`,
    modelMeshes: {"colored-skull-base": ["Inferior_nasal_concha_bones"], "exploded-skull": ["Inferior_nasal_concha_bones"], "overview-colored-skull": ["Inferior_nasal_concha_boner"], "overview-skeleton": ["Inferior_nasal_concha_boner"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--cabeza-cuello", "chapter": 8, "note": "Hueso par independiente que se proyecta horizontalmente en la cavidad nasal inferior."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Acondicionamiento y turbulencia del flujo aéreo inspiratorio.`,
  },
  {
    id: `bone-maxillary-dentition`,
    kind: `bone`,
    nameEn: `Maxillary dentition (Upper teeth)`,
    nameEs: `Dientes superiores (arcada maxilar)`,
    synonyms: ["Dientes superiores", "Arcada dental superior", "Upper teeth", "Maxillary dentition"],
    zone: `head-jaw`,
    modelMeshes: {"colored-skull-base": ["Upper_canines", "Upper_first_molar_teeth", "Upper_first_premolars", "Upper_lateral_incisors", "Upper_medial_incisors", "Upper_second_molar_teeth", "Upper_second_premolars"], "exploded-skull": ["Upper_canines", "Upper_first_molar_teeth", "Upper_first_premolars", "Upper_lateral_incisors", "Upper_medial_incisors", "Upper_second_molar_teeth", "Upper_second_premolars"], "overview-colored-skull": ["Upper_caniner", "Upper_first_molar_toothr", "Upper_first_premolarr", "Upper_lateral_incisorr", "Upper_medial_incisorr", "Upper_second_molar_toothr", "Upper_second_premolarr"], "overview-skeleton": ["Upper_caniner", "Upper_first_molar_toothr", "Upper_first_premolarr", "Upper_lateral_incisorr", "Upper_medial_incisorr", "Upper_second_molar_toothr", "Upper_second_premolarr"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--cabeza-cuello", "chapter": 8, "note": "Piezas dentarias maxilares articuladas en las cavidades alveolares del maxilar (gonfosis)."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Incisivos, caninos, premolares y molares superiores.`,
  },
  {
    id: `bone-mandibular-dentition`,
    kind: `bone`,
    nameEn: `Mandibular dentition (Lower teeth)`,
    nameEs: `Dientes inferiores (arcada mandibular)`,
    synonyms: ["Dientes inferiores", "Arcada dental mandibular", "Lower teeth", "Mandibular dentition"],
    zone: `head-jaw`,
    modelMeshes: {"colored-skull-base": ["Lower_canines", "Lower_first_molar_teeth", "Lower_first_premolars", "Lower_lateral_incisors", "Lower_medial_incisors", "Lower_second_molar_teeth", "Lower_second_premolars"], "exploded-skull": ["Lower_canines", "Lower_first_molar_teeth", "Lower_first_premolar", "Lower_lateral_incisors", "Lower_medial_incisors", "Lower_second_molar_teeth", "Lower_second_premolars"], "overview-colored-skull": ["Lower_caniner", "Lower_first_molar_toothr", "Lower_first_premolarr", "Lower_lateral_incisorr", "Lower_medial_incisorr", "Lower_second_molar_toothr", "Lower_second_premolarr"], "overview-skeleton": ["Lower_caniner", "Lower_first_molar_toothr", "Lower_first_premolarr", "Lower_lateral_incisorr", "Lower_medial_incisorr", "Lower_second_molar_toothr", "Lower_second_premolarr"]},
    sourceRefs: [
      {"sourceId": "grays-anatomy-students-4ed--cabeza-cuello", "chapter": 8, "note": "Piezas dentarias mandibulares articuladas en el borde alveolar de la mandíbula."},
      {"sourceId": "rag-anatomy-modelos-inventario", "note": "Inventario GLB runtime"},
    ],
    note: `Incisivos, caninos, premolares y molares inferiores.`,
  },
];