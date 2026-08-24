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
  modelMeshes: {"upper-limb":["Atlas_(C1)"],"overview-skeleton":["Atlas_(C1)"]},
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
  modelMeshes: {"upper-limb":["Axis_(C2)"],"overview-skeleton":["Axis_(C2)"]},
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
  modelMeshes: {"upper-limb":["Cervical_vertebra_(C3)","Cervical_vertebra_(C4)","Cervical_vertebra_(C5)","Cervical_vertebra_(C6)","Cervical_vertebra_(C7)"],"overview-skeleton":["Cervical_vertebrae_(C3)","Cervical_vertebrae_(C4)","Cervical_vertebrae_(C5)","Cervical_vertebrae_(C6)","Cervical_vertebrae_(C7)"]},
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
  modelMeshes: {"upper-limb":["Thoracic_vertebra_(T1)","Thoracic_vertebra_(T10)","Thoracic_vertebra_(T11)","Thoracic_vertebra_(T12)","Thoracic_vertebra_(T2)","Thoracic_vertebra_(T3)","Thoracic_vertebra_(T4)","Thoracic_vertebra_(T5)","Thoracic_vertebra_(T6)","Thoracic_vertebra_(T7)","Thoracic_vertebra_(T8)","Thoracic_vertebra_(T9)"],"lower-limb":["Thoracic_vertebra_(T12)"],"overview-skeleton":["Thoracic_vertebrae_(T1)","Thoracic_vertebrae_(T10)","Thoracic_vertebrae_(T11)","Thoracic_vertebrae_(T12)","Thoracic_vertebrae_(T2)","Thoracic_vertebrae_(T3)","Thoracic_vertebrae_(T4)","Thoracic_vertebrae_(T5)","Thoracic_vertebrae_(T6)","Thoracic_vertebrae_(T7)","Thoracic_vertebrae_(T8)","Thoracic_vertebrae_(T9)"]},
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
  modelMeshes: {"upper-limb":["Lumbar_vertebra_(L1)","Lumbar_vertebra_(L2)","Lumbar_vertebra_(L3)","Lumbar_vertebra_(L4)","Lumbar_vertebra_(L5)"],"lower-limb":["Lumbar_vertebra_(L1)","Lumbar_vertebra_(L2)","Lumbar_vertebra_(L3)","Lumbar_vertebra_(L4)","Lumbar_vertebra_(L5)"],"overview-skeleton":["Lumbar_vertebrae_(L1)","Lumbar_vertebrae_(L2)","Lumbar_vertebrae_(L3)","Lumbar_vertebrae_(L4)","Lumbar_vertebrae_(L5)"]},
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
  modelMeshes: {"upper-limb":["Sacrum"],"lower-limb":["Sacrum"],"overview-skeleton":["Sacrum"]},
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
  modelMeshes: {"upper-limb":["Body_of_sternum","Manubrium_of_sternum","Xiphoid_process"],"overview-skeleton":["Body_of_sternum","Manubrium_of_sternum"]},
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
  modelMeshes: {"upper-limb":["Rib_(10th)r","Rib_(11th)r","Rib_(12th)r","Rib_(1st)r","Rib_(2nd)r","Rib_(3rd)r","Rib_(4th)r","Rib_(5th)r","Rib_(6th)r","Rib_(7th)r","Rib_(8th)r","Rib_(9th)r"],"overview-skeleton":["Rib_(10th)r","Rib_(11th)r","Rib_(12th)r","Rib_(1st)r","Rib_(2nd)r","Rib_(3rd)r","Rib_(4th)r","Rib_(5th)r","Rib_(6th)r","Rib_(7th)r","Rib_(8th)r","Rib_(9th)r"]},
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
  modelMeshes: {"upper-limb":["Clavicler"],"overview-skeleton":["Clavicler"]},
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
  modelMeshes: {"upper-limb":["Scapular"],"overview-skeleton":["Scapular"]},
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
  modelMeshes: {"upper-limb":["Humerusr"],"overview-skeleton":["Humerusr"]},
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
  modelMeshes: {"upper-limb":["Radiusr"],"hand":["Radius"],"overview-skeleton":["Radiusr"]},
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
  modelMeshes: {"upper-limb":["Ulnar"],"hand":["Ulna"],"overview-skeleton":["Ulnar"]},
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
  modelMeshes: {"upper-limb":["Scaphoidr"],"hand":["Scaphoid"],"overview-skeleton":["Scaphoidr"]},
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
  modelMeshes: {"upper-limb":["Lunate_boner"],"hand":["Lunate_bone"],"overview-skeleton":["Lunate_boner"]},
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
  modelMeshes: {"upper-limb":["Hamater"],"hand":["Hamate"],"overview-skeleton":["Hamater"]},
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
  modelMeshes: {"upper-limb":["Trapeziumr"],"hand":["Trapezium"],"overview-skeleton":["Trapeziumr"]},
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
  modelMeshes: {"upper-limb":["Capitater"],"hand":["Capitate"],"overview-skeleton":["Capitater"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
];
