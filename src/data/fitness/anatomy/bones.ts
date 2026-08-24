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
  modelMeshes: {"colored-skull-base":["Frontal bone"],"exploded-skull":["Frontal bone"],"overview-colored-skull":["Frontal bone"],"overview-skeleton":["Frontal bone"]},
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
  modelMeshes: {"colored-skull-base":["Parietal bone.l","Parietal bone.r"],"exploded-skull":["Parietal bone.l","Parietal bone.r"],"overview-colored-skull":["Parietal bone.l","Parietal bone.r"],"overview-skeleton":["Parietal bone left","Parietal bone right"]},
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
  modelMeshes: {"colored-skull-base":["Temporal bones"],"exploded-skull":["Temporal bones"],"overview-colored-skull":["Temporal bone.r"],"overview-skeleton":["Temporal bone.r"]},
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
  modelMeshes: {"colored-skull-base":["Occipital bone"],"exploded-skull":["Occipital bone"],"overview-colored-skull":["Occipital bone"],"overview-skeleton":["Occipital bone"]},
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
  modelMeshes: {"colored-skull-base":["Sphenoid bone"],"exploded-skull":["Sphenoid bone"],"overview-colored-skull":["Sphenoid bone"],"overview-skeleton":["Sphenoid bone"]},
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
  modelMeshes: {"colored-skull-base":["Ethmoid Bone"],"exploded-skull":["Ethmoid Bone"],"overview-colored-skull":["Ethmoid Bone"],"overview-skeleton":["Ethmoid Bone"]},
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
  modelMeshes: {"colored-skull-base":["Zygomatic bones"],"exploded-skull":["Zygomatic bones"],"overview-colored-skull":["Zygomatic bone.r"],"overview-skeleton":["Zygomatic bone.r"]},
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
  modelMeshes: {"colored-skull-base":["Maxilla bone.r"],"exploded-skull":["Maxilla bone"],"overview-colored-skull":["Maxilla bone.r"],"overview-skeleton":["Maxilla bone.r"]},
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
  modelMeshes: {"colored-skull-base":["Mandible bone"],"exploded-skull":["Mandible bone"],"overview-colored-skull":["Mandible bone"],"overview-skeleton":["Mandible bone"]},
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
  modelMeshes: {"colored-skull-base":["Nasal bone"],"exploded-skull":["Nasal bone"],"overview-colored-skull":["Nasal bone.r"],"overview-skeleton":["Nasal bone.r"]},
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
  modelMeshes: {"overview-skeleton":["Atlas (C1)"],"upper-limb":["Atlas (C1)"]},
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
  modelMeshes: {"overview-skeleton":["Axis (C2)"],"upper-limb":["Axis (C2)"]},
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
  modelMeshes: {"overview-skeleton":["Cervical vertebrae (C3)","Cervical vertebrae (C4)","Cervical vertebrae (C5)","Cervical vertebrae (C6)","Cervical vertebrae (C7)"]},
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
  modelMeshes: {"lower-limb":["Thoracic vertebra (T12)"],"overview-skeleton":["Thoracic vertebrae (T1)","Thoracic vertebrae (T10)","Thoracic vertebrae (T11)","Thoracic vertebrae (T12)","Thoracic vertebrae (T2)","Thoracic vertebrae (T3)","Thoracic vertebrae (T4)","Thoracic vertebrae (T5)","Thoracic vertebrae (T6)","Thoracic vertebrae (T7)","Thoracic vertebrae (T8)","Thoracic vertebrae (T9)"],"upper-limb":["Thoracic vertebra (T1)","Thoracic vertebra (T10)","Thoracic vertebra (T11)","Thoracic vertebra (T12)","Thoracic vertebra (T2)","Thoracic vertebra (T3)","Thoracic vertebra (T4)","Thoracic vertebra (T5)","Thoracic vertebra (T6)","Thoracic vertebra (T7)","Thoracic vertebra (T8)","Thoracic vertebra (T9)"],"vertebrae":["Thoracic vertebra (T7)"]},
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
  modelMeshes: {"lower-limb":["Lumbar vertebra (L1)","Lumbar vertebra (L2)","Lumbar vertebra (L3)","Lumbar vertebra (L4)","Lumbar vertebra (L5)"],"overview-skeleton":["Lumbar vertebrae (L1)","Lumbar vertebrae (L2)","Lumbar vertebrae (L3)","Lumbar vertebrae (L4)","Lumbar vertebrae (L5)"],"upper-limb":["Lumbar vertebra (L1)","Lumbar vertebra (L2)","Lumbar vertebra (L3)","Lumbar vertebra (L4)","Lumbar vertebra (L5)"],"vertebrae":["Lumbar vertebra (L3)"]},
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
  modelMeshes: {"lower-limb":["Sacrospinous ligament.r","Sacrotuberal ligament.r","Sacrum"],"overview-skeleton":["Sacrum"],"upper-limb":["Sacrum"]},
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
  modelMeshes: {"overview-skeleton":["Body of sternum","Manubrium of sternum"],"upper-limb":["Body of sternum","Manubrium of sternum"]},
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
  modelMeshes: {},
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
  modelMeshes: {"overview-skeleton":["Clavicle.r"],"upper-limb":["Clavicle.r","Clavicular head of pectoralis major muscle.r","Clavicular part of deltoid muscle.r"]},
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
  modelMeshes: {"overview-skeleton":["Scapula.r."],"upper-limb":["Scapula.r."]},
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
  modelMeshes: {"overview-skeleton":["Humerus.r"],"upper-limb":["Humerus.r"]},
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
  modelMeshes: {"hand":["Radioscaphocapitate ligament","Radius"],"overview-skeleton":["Radius.r"],"upper-limb":["Radioscaphocapitate ligament","Radius.r"]},
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
  modelMeshes: {"hand":["Ulna","Ulnar artery","Ulnar artery (dorsal carpal br)","Ulnar collateral ligament","Ulnar nerve","Ulnar nerve Communicating br","Ulnar nerve Deep br","Ulnar nerve Dorsal cutaneous br","Ulnar nerve Palmar cutaneous br","Ulnar nerve Superficial br Common palmar digital n","Ulnar nerve Superficial br Proper palmar digital nn","Ulnar veins"],"overview-skeleton":["Ulna.r"],"upper-limb":["Ulna.r","Ulnar artery (dorsal carpal br).r","Ulnar artery.r","Ulnar collateral ligament of elbow.r","Ulnar collateral ligament of wrist.r","Ulnar head of extensor carpi ulnaris.r","Ulnar head of flexor carpi ulnaris.r","Ulnar head of pronator teres.r","Ulnar nerve Communicating br","Ulnar nerve Deep br","Ulnar nerve Dorsal cutaneous br","Ulnar nerve Palmar cutaneous br","Ulnar nerve Superficial br Common palmar digital n","Ulnar nerve Superficial br Proper palmar digital nn"]},
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
  modelMeshes: {"lower-limb":["Patella.r"],"overview-skeleton":["Patella.r"]},
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
  modelMeshes: {"lower-limb":["Hip bone pubic cartilage.r","Hip bone.r"],"overview-skeleton":["Hip bone.r"]},
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
  modelMeshes: {"lower-limb":["Femur.r"],"overview-skeleton":["Femur.r"]},
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
  modelMeshes: {"lower-limb":["Tibia.r","Tibial nerve.r","Tibialis anterior muscle.r","Tibialis anterior tendon sheath.r","Tibialis posterior muscle.r","Tibialis posterior tendon sheath.r"],"overview-skeleton":["Tibia.r"]},
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
  modelMeshes: {"lower-limb":["Fibula.r","Fibular artery.r","Fibular collateral ligament.r","Fibular vein.r","Fibularis brevis muscle.r","Fibularis longus muscle.r","Fibularis tertius muscle.r"],"overview-skeleton":["Fibula.r"]},
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
  modelMeshes: {"lower-limb":["Talus.r"],"overview-skeleton":["Talus.r"]},
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
  modelMeshes: {"lower-limb":["Calcaneocuboid ligament.r","Calcaneofibular ligament.r","Calcaneonavicular ligament.r","Calcaneus.r"],"overview-skeleton":["Calcaneus.r"]},
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
  modelMeshes: {"lower-limb":["Navicular bone.r"],"overview-skeleton":["Navicular bone.r"]},
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
  modelMeshes: {"lower-limb":["Fifth metatarsal bone.r","First metatarsal bone.r","Fourth metatarsal bone.r","Second metatarsal bone.r","Third metatarsal bone.r"],"overview-skeleton":["Fifth metatarsal bone.r","First metatarsal bone.r","Fourth metatarsal bone.r","Second metatarsal bone.r","Third metatarsal bone.r"]},
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
  modelMeshes: {"hand":["Scaphoid"],"overview-skeleton":["Scaphoid.r"],"upper-limb":["Scaphoid.r"]},
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
  modelMeshes: {"hand":["Lunate bone"],"overview-skeleton":["Lunate bone.r"],"upper-limb":["Lunate bone.r"]},
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
  modelMeshes: {"hand":["Hamate"],"overview-skeleton":["Hamate.r"],"upper-limb":["Hamate.r"]},
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
  modelMeshes: {"hand":["Trapezium"],"overview-skeleton":["Trapezium.r"],"upper-limb":["Trapezium.r"]},
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
  modelMeshes: {"hand":["Capitate"],"overview-skeleton":["Capitate.r"],"upper-limb":["Capitate.r"]},
  sourceRefs: [
    {"sourceId":"rag-anatomy-modelos-inventario","note":"Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)"},
    {"sourceId":"TODO-cita","note":"Ficha descriptiva del hueso pendiente — Gray's for Students 4th ed."}
  ],
  },
];
