// src/data/fitness/anatomy/joints.ts
// Articulaciones (19).
// GENERADO por rag/anatomy/scripts/build-anatomy-data.mjs — NO editar a mano.
// Regenerar: node rag/anatomy/scripts/build-anatomy-data.mjs

import type { JointEntry } from './types';

export const JOINTS: JointEntry[] = [
  {
  id: `art-shoulder-joint`,
  legacyId: `ART-001`,
  kind: `joint`,
  nameEn: `Shoulder joint`,
  nameEs: `Glenohumeral (Hombro)`,
  synonyms: [
    "Glenohumeral (Hombro)",
    "Articulatio glenohumeralis"
  ],
  zone: `shoulder`,
  modelMeshes: {"overview-skeleton":["Humerusr","Scapular"],"upper-limb":["Humerusr","Scapular"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Shoulder_joint`,
  rehab: [
    "Isométricos de manguito",
    "Control escapular",
    "Eccéntricos de RE/RI"
  ],
  relatedStructures: [
    "mus-supraspinatus",
    "mus-infraspinatus",
    "mus-teres-minor",
    "mus-subscapularis",
    "mus-deltoideus-anterior"
  ],
  jointType: `Enartrosis`,
  bones: `Húmero-Glena`,
  movements: `Flex/ext, abd/add, rot int/ext`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Manguito rotador, labrum, lig. glenohumerales`,
  lesions: `Impingement, luxación, SLAP, capsulitis`,
  riskyUnderLoad: [
    "Press tras nuca",
    "Overhead sin movilidad",
    "Banco máximo sin equilibrio agonista/antagonista"
  ],
  },
  {
  id: `art-acromioclavicular-joint`,
  legacyId: `ART-002`,
  kind: `joint`,
  nameEn: `Acromioclavicular joint`,
  nameEs: `Acromioclavicular`,
  synonyms: [
    "Acromioclavicular",
    "Articulatio acromioclavicularis"
  ],
  zone: `shoulder`,
  modelMeshes: {"overview-skeleton":["Clavicler","Scapular"],"upper-limb":["Acromioclavicular_discr","Clavicler","Scapular"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Acromioclavicular_joint`,
  rehab: [
    "Fortalecimiento escapular",
    "Isométricos"
  ],
  relatedStructures: [
    "mus-trapezius"
  ],
  jointType: `Plana`,
  bones: `Clavícula-Acromion`,
  movements: `Deslizamiento`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Lig. acromioclavicular y coracoclavicular`,
  lesions: `Separación AC, osteólisis distal ('hombro de pesista')`,
  riskyUnderLoad: [
    "Fondos profundos con dolor",
    "Caídas"
  ],
  },
  {
  id: `art-elbow-joint`,
  legacyId: `ART-003`,
  kind: `joint`,
  nameEn: `Elbow joint`,
  nameEs: `Codo`,
  synonyms: [
    "Codo",
    "Articulatio cubiti"
  ],
  zone: `arm`,
  modelMeshes: {"hand":["Radius","Ulna"],"overview-skeleton":["Humerusr","Radiusr","Ulnar"],"upper-limb":["Humerusr","Radiusr","Ulnar"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Elbow_joint`,
  rehab: [
    "Eccéntricos + FlexBar",
    "Descarga progresiva"
  ],
  relatedStructures: [
    "mus-biceps-brachii",
    "mus-triceps-brachii"
  ],
  jointType: `Trocleartrosis`,
  bones: `Húmero-Ulna-Radio`,
  movements: `Flexión/extensión, prono-supinación`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Lig. colaterales, cápsula`,
  lesions: `Epicondilitis, ruptura bíceps distal, osteocondritis`,
  riskyUnderLoad: [
    "Picos de volumen de agarre/tracción",
    "Hiperextensión cargada"
  ],
  },
  {
  id: `art-wrist-joint`,
  legacyId: `ART-004`,
  kind: `joint`,
  nameEn: `Wrist joint`,
  nameEs: `Muñeca (Radiocarpiana)`,
  synonyms: [
    "Muñeca (Radiocarpiana)",
    "Articulatio radiocarpea"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Lunate_bone","Radius","Scaphoid","Ulna"],"overview-skeleton":["Lunate_boner","Radiusr","Scaphoidr","Ulnar"],"upper-limb":["Lunate_boner","Radiusr","Scaphoidr","Ulnar"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Wrist_joint`,
  rehab: [
    "Movilidad + eccéntricos de flexo-extensión"
  ],
  relatedStructures: [
    "mus-pronator-teres",
    "mus-extensor-digitorum"
  ],
  jointType: `Condílea`,
  bones: `Radio-Carpo`,
  movements: `Flex/ext, desviaciones`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Lig. carpianos, TFCC`,
  lesions: `Esguinces, TFCC, ganglión`,
  riskyUnderLoad: [
    "Extensión sostenida cargada (rack frontal)",
    "Caídas"
  ],
  },
  {
  id: `art-cervical-vertebrae`,
  legacyId: `ART-005`,
  kind: `joint`,
  nameEn: `Cervical vertebrae`,
  nameEs: `Columna Cervical`,
  synonyms: [
    "Columna Cervical",
    "Vertebrae cervicales"
  ],
  zone: `cervical`,
  modelMeshes: {"overview-skeleton":["Atlas_(C1)","Axis_(C2)","Cervical_vertebrae_(C3)","Cervical_vertebrae_(C4)","Cervical_vertebrae_(C5)","Cervical_vertebrae_(C6)","Cervical_vertebrae_(C7)"],"upper-limb":["Atlas_(C1)","Axis_(C2)","Cervical_vertebra_(C3)","Cervical_vertebra_(C4)","Cervical_vertebra_(C5)","Cervical_vertebra_(C6)","Cervical_vertebra_(C7)"],"vertebrae":["Cervical_vertebra_(C4)"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Cervical_vertebrae`,
  rehab: [
    "Chin-tuck",
    "Flexores cervicales profundos",
    "Isométricos"
  ],
  relatedStructures: [
    "mus-sternocleidomastoid",
    "mus-suboccipital-muscles"
  ],
  jointType: `Mixta`,
  bones: `C1-C7`,
  movements: `Flex/ext, rotación, inclinación`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Flexores profundos, ligamentos`,
  lesions: `Radiculopatía, hernia, latigazo, forward head`,
  riskyUnderLoad: [
    "Tirones de cuello en abdominales",
    "Hiperextensión cargada"
  ],
  },
  {
  id: `art-lumbar-vertebrae`,
  legacyId: `ART-006`,
  kind: `joint`,
  nameEn: `Lumbar vertebrae`,
  nameEs: `Columna Lumbar`,
  synonyms: [
    "Columna Lumbar",
    "Vertebrae lumbales"
  ],
  zone: `spine`,
  modelMeshes: {"lower-limb":["Lumbar_vertebra_(L1)","Lumbar_vertebra_(L2)","Lumbar_vertebra_(L3)","Lumbar_vertebra_(L4)","Lumbar_vertebra_(L5)","Sacrum"],"overview-skeleton":["Lumbar_vertebrae_(L1)","Lumbar_vertebrae_(L2)","Lumbar_vertebrae_(L3)","Lumbar_vertebrae_(L4)","Lumbar_vertebrae_(L5)","Sacrum"],"upper-limb":["Lumbar_vertebra_(L1)","Lumbar_vertebra_(L2)","Lumbar_vertebra_(L3)","Lumbar_vertebra_(L4)","Lumbar_vertebra_(L5)","Sacrum"],"vertebrae":["Lumbar_vertebra_(L3)"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Lumbar_vertebrae`,
  rehab: [
    "McGill Big-3",
    "Hinge de cadera",
    "Core anti-rotación"
  ],
  relatedStructures: [
    "mus-erector-spinae",
    "mus-transversus-abdominis",
    "mus-diaphragm"
  ],
  jointType: `Mixta`,
  bones: `L1-L5 + sacro`,
  movements: `Flex/ext, flexión lateral`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Core, multífidos, fascia toracolumbar`,
  lesions: `Hernia discal, facetaria, espondilólisis`,
  riskyUnderLoad: [
    "Flexión+rotación cargada",
    "Peso muerto redondeado"
  ],
  },
  {
  id: `art-sacroiliac-joint`,
  legacyId: `ART-007`,
  kind: `joint`,
  nameEn: `Sacroiliac joint`,
  nameEs: `Sacroilíaca`,
  synonyms: [
    "Sacroilíaca",
    "Articulatio sacroiliaca"
  ],
  zone: `hip`,
  zones: [
    "spine"
  ],
  modelMeshes: {"lower-limb":["Hip_boner","Sacrum"],"overview-skeleton":["Hip_boner","Sacrum"],"upper-limb":["Sacrum"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Sacroiliac_joint`,
  rehab: [
    "Glúteo medio",
    "Core",
    "Patrones de hinge"
  ],
  relatedStructures: [
    "mus-gluteus-maximus",
    "mus-gluteus-medius"
  ],
  jointType: `Anfiartrosis`,
  bones: `Sacro-Ilión`,
  movements: `Micromovimientos (nutación)`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Lig. sacroilíacos, glúteos`,
  lesions: `Disfunción/dolor SI`,
  riskyUnderLoad: [
    "Asimetrías cargadas sin control",
    "Giros bruscos con carga"
  ],
  },
  {
  id: `art-hip-joint`,
  legacyId: `ART-008`,
  kind: `joint`,
  nameEn: `Hip joint`,
  nameEs: `Coxofemoral (Cadera)`,
  synonyms: [
    "Coxofemoral (Cadera)",
    "Articulatio coxae"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Femurr","Hip_boner"],"overview-skeleton":["Femurr","Hip_boner"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Hip_joint`,
  rehab: [
    "Fortalecimiento abductores/extensores",
    "Movilidad controlada"
  ],
  relatedStructures: [
    "mus-gluteus-maximus",
    "mus-gluteus-medius",
    "mus-adductor-magnus",
    "mus-psoas-major",
    "mus-piriformis"
  ],
  jointType: `Enartrosis`,
  bones: `Fémur-Acetábulo`,
  movements: `Flex/ext, abd/add, rotaciones`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Labrum, lig. iliofemoral, musculatura`,
  lesions: `Impingement femoroacetabular, labrum, artrosis`,
  riskyUnderLoad: [
    "Flexión profunda cargada sin movilidad",
    "Overstriding al correr"
  ],
  },
  {
  id: `art-knee-joint`,
  legacyId: `ART-009`,
  kind: `joint`,
  nameEn: `Knee joint`,
  nameEs: `Rodilla (Femorotibial)`,
  synonyms: [
    "Rodilla (Femorotibial)",
    "Articulatio genus"
  ],
  zone: `knee`,
  modelMeshes: {"lower-limb":["Femurr","Patellar","Tibiar"],"overview-skeleton":["Femurr","Patellar","Tibiar"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Knee_joint`,
  rehab: [
    "HSR de cuádriceps/isquios",
    "Step-down controlado",
    "Nórdicos"
  ],
  relatedStructures: [
    "mus-rectus-femoris",
    "mus-vastus-lateralis",
    "mus-vastus-medialis-obliquus",
    "mus-biceps-femoris-long-head",
    "art-patellofemoral-joint",
    "art-tibiofibular-joint"
  ],
  jointType: `Trocleartrosis modificada`,
  bones: `Fémur-Tibia`,
  movements: `Flex/ext, rotación leve`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `LCA/LCP, meniscos, cuádriceps, isquios`,
  lesions: `LCA (valgo en pivote), meniscos`,
  riskyUnderLoad: [
    "Valgo en aterrizaje",
    "Profundidad sin control motor",
    "Picos de volumen"
  ],
  },
  {
  id: `art-ankle-joint`,
  legacyId: `ART-010`,
  kind: `joint`,
  nameEn: `Ankle joint`,
  nameEs: `Tobillo (Talocrural)`,
  synonyms: [
    "Tobillo (Talocrural)",
    "Articulatio talocruralis"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Fibular","Talusr","Tibiar"],"overview-skeleton":["Fibular","Talusr","Tibiar"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Ankle_joint`,
  rehab: [
    "Propiocepción en inestable",
    "Fibulares + HSR de sóleo"
  ],
  relatedStructures: [
    "mus-tibialis-anterior",
    "mus-gastrocnemius"
  ],
  jointType: `Trocleartrosis`,
  bones: `Tibia-Peroné-Astrágalo`,
  movements: `Dorsiflexión/flexión plantar`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Lig. laterales, deltoides, fibulares`,
  lesions: `Esguince lateral (inversión), impingement anterior`,
  riskyUnderLoad: [
    "Superficies irregulares fatigado",
    "Aterrizajes"
  ],
  },
  {
  id: `art-subtalar-joint`,
  legacyId: `ART-011`,
  kind: `joint`,
  nameEn: `Subtalar joint`,
  nameEs: `Subtalar + Mediotarsiana`,
  synonyms: [
    "Subtalar + Mediotarsiana",
    "Articulatio talocalcanea"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Calcaneusr","Navicular_boner","Talusr"],"overview-skeleton":["Calcaneusr","Navicular_boner","Talusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Subtalar_joint`,
  rehab: [
    "Short foot",
    "Calzado/ortesis según caso"
  ],
  relatedStructures: [
    "mus-tibialis-posterior",
    "mus-fibularis-longus"
  ],
  jointType: `Planas/condíleas`,
  bones: `Astrágalo-Calcáneo`,
  movements: `Inversión/eversión`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Tibial posterior, lig. plantares`,
  lesions: `Sobre/supinación, disfunción de tibial posterior`,
  riskyUnderLoad: [
    "Calzado inadecuado + volumen"
  ],
  },
  {
  id: `art-scapulothoracic-joint`,
  legacyId: `ART-012`,
  kind: `joint`,
  nameEn: `Scapulothoracic joint`,
  nameEs: `Escapulotorácica`,
  synonyms: [
    "Escapulotorácica",
    "Articulatio scapulothoracica"
  ],
  zone: `shoulder`,
  zones: [
    "back"
  ],
  modelMeshes: {"overview-skeleton":["Rib_(10th)r","Rib_(11th)r","Rib_(12th)r","Rib_(1st)r","Rib_(2nd)r","Rib_(3rd)r","Rib_(4th)r","Rib_(5th)r","Rib_(6th)r","Rib_(7th)r","Rib_(8th)r","Rib_(9th)r","Scapular"],"upper-limb":["Rib_(10th)r","Rib_(11th)r","Rib_(12th)r","Rib_(1st)r","Rib_(2nd)r","Rib_(3rd)r","Rib_(4th)r","Rib_(5th)r","Rib_(6th)r","Rib_(7th)r","Rib_(8th)r","Rib_(9th)r","Scapular"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Scapulothoracic_joint`,
  rehab: [
    "Serrato + trapecio inferior",
    "Push-up plus"
  ],
  relatedStructures: [
    "mus-serratus-anterior",
    "mus-trapezius"
  ],
  jointType: `Funcional`,
  bones: `Escápula-Tórax`,
  movements: `Protracción/retracción, rotaciones`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Serrato anterior, trapecio`,
  lesions: `Discinesia escapular, escápula alada`,
  riskyUnderLoad: [
    "Overhead con movilidad pobre"
  ],
  },
  {
  id: `art-hand-joint`,
  legacyId: `ART-013`,
  kind: `joint`,
  nameEn: `Hand joint`,
  nameEs: `Mano`,
  synonyms: [
    "Mano",
    "Articulationes manus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Capitate","Hamate","Trapezium"],"overview-skeleton":["Capitater","Hamater","Trapeziumr"],"upper-limb":["Capitater","Hamater","Trapeziumr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Hand_joint`,
  rehab: [
    "Grip progresivo con putty/bandas"
  ],
  relatedStructures: [
    "mus-thenar-muscles",
    "mus-palmar-interossei"
  ],
  jointType: `Variadas`,
  bones: `Carpo-Metacarpo-Falanges`,
  movements: `Prensión, pinza`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Intrínsecos, ligamentos`,
  lesions: `Rizartrosis, dedo en resorte, poleas (escalada)`,
  riskyUnderLoad: [
    "Crimp y agarre máximo repetido"
  ],
  },
  {
  id: `art-sternoclavicular-joint`,
  legacyId: `ART-SC`,
  kind: `joint`,
  nameEn: `Sternoclavicular joint`,
  nameEs: `Esternoclavicular`,
  synonyms: [
    "Esternoclavicular",
    "Articulatio sternoclavicularis"
  ],
  zone: `shoulder`,
  modelMeshes: {"overview-skeleton":["Body_of_sternum","Clavicler","Manubrium_of_sternum"],"upper-limb":["Body_of_sternum","Clavicler","Manubrium_of_sternum"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Sternoclavicular_joint`,
  rehab: [
    "Control escapular",
    "Movilidad overhead progresiva",
    "Fortalecimiento de trapecio/serrato"
  ],
  relatedStructures: [
    "mus-trapezius",
    "mus-subclavius",
    "art-acromioclavicular-joint",
    "art-scapulothoracic-joint"
  ],
  jointType: `Silla de montar (sellar)`,
  bones: `Manubrio esternal-Clavícula`,
  movements: `Elevación/depresión, protracción/retracción y rotación de clavícula`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Lig. esternoclavicular, interclavicular y costoclavicular`,
  lesions: `Luxación (trauma alta energía), osteoartritis`,
  riskyUnderLoad: [
    "Caídas sobre el hombro",
    "Overhead pesado sin movilidad clavicular"
  ],
  },
  {
  id: `art-patellofemoral-joint`,
  legacyId: `ART-PAT`,
  kind: `joint`,
  nameEn: `Patellofemoral joint`,
  nameEs: `Femoropatelar`,
  synonyms: [
    "Femoropatelar",
    "Articulatio patellofemoralis"
  ],
  zone: `knee`,
  modelMeshes: {"lower-limb":["Femurr","Patellar"],"overview-skeleton":["Femurr","Patellar"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Patellofemoral_joint`,
  rehab: [
    "Fortalecimiento de VMO (TKE, step-down)",
    "Fortalecimiento de abductores de cadera",
    "Eccéntricos controlados",
    "Taping patelar"
  ],
  relatedStructures: [
    "mus-vastus-medialis-obliquus",
    "mus-vastus-lateralis",
    "art-knee-joint"
  ],
  jointType: `Trochoid modificada (deslizamiento)`,
  bones: `Rótula-Tróclea femoral`,
  movements: `Deslizamiento patelar en flexo-extensión (medial-lateral, sup-inf)`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `VMO, retináculo lateral, lig. patelofemoral medial (MPFL), tróclea`,
  lesions: `Síndrome de Dolor Femoropatelar (SDFP): consulta #1 por dolor de rodilla en gimnasios; condromalacia, inestabilidad patelar`,
  riskyUnderLoad: [
    "Profundidad sin control motor",
    "Valgo dinámico",
    "Picos de volumen",
    "Desbalance VMO vs vasto lateral"
  ],
  },
  {
  id: `art-radioulnar-articulation`,
  legacyId: `ART-PRUJ`,
  kind: `joint`,
  nameEn: `Radioulnar articulation`,
  nameEs: `Radioulnar Proximal`,
  synonyms: [
    "Radioulnar Proximal",
    "Articulatio radioulnaris proximalis"
  ],
  zone: `arm`,
  modelMeshes: {"hand":["Radius","Ulna"],"overview-skeleton":["Radiusr","Ulnar"],"upper-limb":["Radiusr","Ulnar"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Radioulnar_articulation`,
  rehab: [
    "Pronosupinación controlada",
    "Isométricos con agarre neutro"
  ],
  relatedStructures: [
    "art-elbow-joint",
    "art-radioulnar-articulation-art-druj",
    "mus-pronator-teres",
    "mus-supinator"
  ],
  jointType: `Trochoid (pivote)`,
  bones: `Cabeza del radio-Incisura radial de la ulna`,
  movements: `Pronosupinación (junto a DRUJ)`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Ligamento anular, ligamento cuadrado`,
  lesions: `Subluxación de cabeza radial ('pronación dolorosa'), esguince del lig. anular`,
  riskyUnderLoad: [
    "Curl con barra recta con dolor",
    "Pronosupinación forzada bajo carga"
  ],
  },
  {
  id: `art-radioulnar-articulation-art-druj`,
  legacyId: `ART-DRUJ`,
  kind: `joint`,
  nameEn: `Radioulnar articulation`,
  nameEs: `Radioulnar Distal`,
  synonyms: [
    "Radioulnar Distal",
    "Articulatio radioulnaris distalis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Radius","Ulna"],"overview-skeleton":["Radiusr","Ulnar"],"upper-limb":["Radiusr","Ulnar"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Radioulnar_articulation`,
  rehab: [
    "Protocolo TFCC",
    "Isométricos",
    "Modificación de agarre (neutro)"
  ],
  relatedStructures: [
    "art-wrist-joint",
    "art-radioulnar-articulation",
    "mus-pronator-quadratus",
    "mus-supinator"
  ],
  jointType: `Trochoid`,
  bones: `Cabeza de la ulna-Incisura ulnar del radio`,
  movements: `Pronosupinación`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Complejo fibrocartílago triangular (TFCC)`,
  lesions: `Lesión del TFCC, inestabilidad distal`,
  riskyUnderLoad: [
    "Extensión de muñeca sostenida cargada (rack frontal)",
    "Pronación forzada con carga"
  ],
  },
  {
  id: `art-tibiofibular-joint`,
  legacyId: `ART-TFS`,
  kind: `joint`,
  nameEn: `Tibiofibular joint`,
  nameEs: `Tibiofibular Superior`,
  synonyms: [
    "Tibiofibular Superior",
    "Articulatio tibiofibularis"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb":["Fibular","Tibiar"],"overview-skeleton":["Fibular","Tibiar"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Tibiofibular_joint`,
  rehab: [
    "Movilización de cabeza fibular",
    "Fortalecimiento de fibulares e isquios"
  ],
  relatedStructures: [
    "art-knee-joint",
    "mus-popliteus",
    "mus-biceps-femoris-long-head",
    "mus-fibularis-longus"
  ],
  jointType: `Plana`,
  bones: `Cabeza del peroné-Cóndilo lateral de la tibia`,
  movements: `Pequeño deslizamiento durante dorsiflexión del tobillo`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Ligamentos de la cabeza fibular`,
  lesions: `Subluxación/luxación, síndrome tibiofibular proximal`,
  riskyUnderLoad: [
    "Sentadilla profunda con rotación externa excesiva",
    "Trauma directo"
  ],
  },
  {
  id: `art-temporomandibular-joint`,
  legacyId: `ART-ATM`,
  kind: `joint`,
  nameEn: `Temporomandibular joint`,
  nameEs: `Temporomandibular (ATM)`,
  synonyms: [
    "Temporomandibular (ATM)",
    "Articulatio temporomandibularis"
  ],
  zone: `head-jaw`,
  modelMeshes: {"colored-skull-base":["Mandible_bone","Temporal_bones"],"exploded-skull":["Mandible_bone","Temporal_bones"],"overview-colored-skull":["Mandible_bone","Temporal_boner"],"overview-skeleton":["Mandible_bone","Temporal_boner"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Temporomandibular_joint`,
  rehab: [
    "Manejo de ATM",
    "Apertura controlada",
    "Release de masetero/temporal",
    "Férula de descarga"
  ],
  relatedStructures: [
    "mus-masseter",
    "mus-temporalis",
    "mus-lateral-pterygoid",
    "mus-medial-pterygoid"
  ],
  jointType: `Bicondílea`,
  bones: `Cóndilo mandibular-Fosa mandibular del temporal`,
  movements: `Depresión/elevación, protrusión/retrusión, lateralidad`,
  romNote: `ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)`,
  stabilizers: `Ligamento lateral, músculos masticatorios, disco articular`,
  lesions: `Disfunción temporomandibular (DTM), desplazamiento de disco, clics`,
  riskyUnderLoad: [
    "Bruxismo",
    "Apretamiento durante levantamientos máximos"
  ],
  },
];
