// src/data/fitness/anatomy/tendons.ts
// Tendones (20).
// GENERADO por rag/anatomy/scripts/build-anatomy-data.mjs — NO editar a mano.
// Regenerar: node rag/anatomy/scripts/build-anatomy-data.mjs

import type { TendonEntry } from './types';

export const TENDONS: TendonEntry[] = [
  {
  id: `ten-achilles-tendon`,
  legacyId: `TEN-001`,
  kind: `tendon`,
  nameEn: `Achilles tendon`,
  nameEs: `Tendón de Aquiles`,
  synonyms: [
    "Tendón de Aquiles",
    "Tendo Calcaneus"
  ],
  zone: `ankle-foot`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Calcáneo`,
  wikiEn: `Achilles_tendon`,
  muscles: [
    "mus-gastrocnemius",
    "mus-soleus"
  ],
  injuries: `Tendinopatía media/insertiva, ruptura`,
  rehab: [
    "Eccéntricos de Alfredson",
    "Heavy Slow Resistance",
    "Isométricos de sóleo"
  ],
  risks: [
    "Pliometría súbita",
    "Picos de volumen de carrera",
    "Fluoroquinolonas"
  ],
  },
  {
  id: `ten-patellar-ligament`,
  legacyId: `TEN-002`,
  kind: `tendon`,
  nameEn: `Patellar ligament`,
  nameEs: `Tendón Patelar`,
  synonyms: [
    "Tendón Patelar",
    "Ligamentum Patellae"
  ],
  zone: `knee`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Tuberosidad tibial`,
  wikiEn: `Patellar_ligament`,
  muscles: [
    "mus-vastus-lateralis",
    "mus-vastus-medialis-obliquus",
    "mus-vastus-intermedius"
  ],
  injuries: `Tendinopatía patelar ('rodilla del saltador')`,
  rehab: [
    "Sentadilla declinada excéntrica",
    "Isométricos (Spanish squat)",
    "HSR"
  ],
  risks: [
    "Saltos repetidos",
    "Picos de volumen en rodilla"
  ],
  },
  {
  id: `ten-quadriceps-tendon`,
  legacyId: `TEN-003`,
  kind: `tendon`,
  nameEn: `Quadriceps tendon`,
  nameEs: `Tendón del Cuádriceps`,
  synonyms: [
    "Tendón del Cuádriceps",
    "Tendo Quadricipitalis"
  ],
  zone: `knee`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Base de la rótula`,
  wikiEn: `Quadriceps_tendon`,
  muscles: [
    "mus-rectus-femoris",
    "mus-vastus-lateralis",
    "mus-vastus-medialis-obliquus",
    "mus-vastus-intermedius"
  ],
  injuries: `Tendinopatía, ruptura parcial`,
  rehab: [
    "Prensa parcial excéntrica",
    "Isométricos"
  ],
  risks: [
    "Sentadilla máxima sin adaptación"
  ],
  },
  {
  id: `ten-supraspinatus-tendon`,
  legacyId: `TEN-004`,
  kind: `tendon`,
  nameEn: `Supraspinatus tendon`,
  nameEs: `Tendón del Supraespinoso`,
  synonyms: [
    "Tendón del Supraespinoso",
    "Tendo M. Supraspinati"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Supraspinatus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Tubérculo mayor`,
  wikiEn: `Supraspinatus_tendon`,
  muscles: [
    "mus-supraspinatus"
  ],
  injuries: `Tendinopatía del manguito, impingement, desgarro`,
  rehab: [
    "Rotación externa excéntrica",
    "Isométricos",
    "Control escapular"
  ],
  risks: [
    "Press tras nuca",
    "Upright row alto",
    "Overhead con discinesia"
  ],
  },
  {
  id: `ten-long-head-of-biceps-tendon`,
  legacyId: `TEN-005`,
  kind: `tendon`,
  nameEn: `Long head of biceps tendon`,
  nameEs: `Tendón Cabeza Larga del Bíceps`,
  synonyms: [
    "Tendón Cabeza Larga del Bíceps",
    "Caput Longum Tendinis Bicipitis"
  ],
  zone: `shoulder`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Tubérculo supraglenoideo`,
  wikiEn: `Long_head_of_biceps_tendon`,
  muscles: [
    "mus-biceps-brachii"
  ],
  injuries: `Tendinitis, lesión SLAP`,
  rehab: [
    "Isométricos de flexión",
    "Eccéntricos controlados",
    "Trabajo escapular"
  ],
  risks: [
    "Overhead pesado con mala técnica"
  ],
  },
  {
  id: `ten-biceps-tendon`,
  legacyId: `TEN-006`,
  kind: `tendon`,
  nameEn: `Biceps tendon`,
  nameEs: `Tendón Distal del Bíceps`,
  synonyms: [
    "Tendón Distal del Bíceps",
    "Tendo Bicipitis (Distal)"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Common_tendon_of_biceps_brachiir"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Tuberosidad radial`,
  wikiEn: `Biceps_tendon`,
  muscles: [
    "mus-biceps-brachii"
  ],
  injuries: `Ruptura (eccéntrico súbito)`,
  rehab: [
    "Protocolo post-quirúrgico progresivo excéntrico"
  ],
  risks: [
    "Cargar 'de fin de semana' sin base"
  ],
  },
  {
  id: `ten-common-extensor-tendon`,
  legacyId: `TEN-007`,
  kind: `tendon`,
  nameEn: `Common extensor tendon`,
  nameEs: `Tendón Common Extensor`,
  synonyms: [
    "Tendón Common Extensor",
    "Tendo Communis Extensorius"
  ],
  zone: `arm`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Epicóndilo lateral`,
  wikiEn: `Common_extensor_tendon`,
  muscles: [
    "mus-extensor-carpi-radialis-longus",
    "mus-extensor-carpi-radialis-brevis",
    "mus-extensor-digitorum"
  ],
  injuries: `Epicondilitis lateral (codo de tenista)`,
  rehab: [
    "Eccéntricos de extensión de muñeca",
    "Tyler twist (FlexBar)",
    "Isométricos"
  ],
  risks: [
    "Agarre + extensión repetida",
    "Raqueta",
    "Picos de volumen de tracción"
  ],
  },
  {
  id: `ten-common-flexor-tendon`,
  legacyId: `TEN-008`,
  kind: `tendon`,
  nameEn: `Common flexor tendon`,
  nameEs: `Tendón Common Flexor`,
  synonyms: [
    "Tendón Common Flexor",
    "Tendo Communis Flexorius"
  ],
  zone: `arm`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Epicóndilo medial`,
  wikiEn: `Common_flexor_tendon`,
  muscles: [
    "mus-pronator-teres",
    "mus-flexor-carpi-radialis",
    "mus-palmaris-longus",
    "mus-flexor-carpi-ulnaris"
  ],
  injuries: `Epicondilitis medial (codo de golfista)`,
  rehab: [
    "Eccéntricos de flexión de muñeca"
  ],
  risks: [
    "Lanzamientos",
    "Golf",
    "Grip excesivo"
  ],
  },
  {
  id: `ten-hamstring-tendons`,
  legacyId: `TEN-009`,
  kind: `tendon`,
  nameEn: `Hamstring tendons`,
  nameEs: `Tendón Proximal de Isquios`,
  synonyms: [
    "Tendón Proximal de Isquios",
    "Tendo Mm. Ischiocruralium"
  ],
  zone: `hip`,
  zones: [
    "knee"
  ],
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Tuberosidad isquiática`,
  wikiEn: `Hamstring_tendons`,
  muscles: [
    "mus-biceps-femoris-long-head",
    "mus-semitendinosus",
    "mus-semimembranosus"
  ],
  injuries: `Tendinopatía proximal (dolor al sentarse)`,
  rehab: [
    "Isométricos en posición larga progresiva",
    "RDL ligero excéntrico",
    "Nordic"
  ],
  risks: [
    "Estiramiento cargado en sedestación larga",
    "Sprint máximo sin base"
  ],
  },
  {
  id: `ten-gluteus-medius-tendon`,
  legacyId: `TEN-010`,
  kind: `tendon`,
  nameEn: `Gluteus medius tendon`,
  nameEs: `Tendones del Glúteo Medio/Menor`,
  synonyms: [
    "Tendones del Glúteo Medio/Menor",
    "Tendines Mm. Glutei Medii et Minimi"
  ],
  zone: `hip`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Trocanter mayor`,
  wikiEn: `Gluteus_medius_tendon`,
  muscles: [
    "mus-gluteus-medius",
    "mus-gluteus-minimus"
  ],
  injuries: `Síndrome de dolor trocantérico`,
  rehab: [
    "Abducción isométrica",
    "Abducción lateral progresiva (HSR)"
  ],
  risks: [
    "Estiramiento en aducción cruzada",
    "Correr en superficie peraltada"
  ],
  },
  {
  id: `ten-tibialis-posterior-tendon`,
  legacyId: `TEN-011`,
  kind: `tendon`,
  nameEn: `Tibialis posterior tendon`,
  nameEs: `Tendón del Tibial Posterior`,
  synonyms: [
    "Tendón del Tibial Posterior",
    "Tendo M. Tibialis Posterioris"
  ],
  zone: `ankle-foot`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Navicular`,
  wikiEn: `Tibialis_posterior_tendon`,
  muscles: [
    "mus-tibialis-posterior"
  ],
  injuries: `Tendinopatía, pie plano adquirido`,
  rehab: [
    "Short foot",
    "Inversión con banda",
    "Elevación de talón con soporte de arco"
  ],
  risks: [
    "Hiperpronación + volumen"
  ],
  },
  {
  id: `ten-fibularis-longus-tendon`,
  legacyId: `TEN-012`,
  kind: `tendon`,
  nameEn: `Fibularis longus tendon`,
  nameEs: `Tendones Fibulares`,
  synonyms: [
    "Tendones Fibulares",
    "Tendines Mm. Fibularium"
  ],
  zone: `ankle-foot`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Base 5º metatarsiano y 1er cuneiforme`,
  wikiEn: `Fibularis_longus_tendon`,
  muscles: [
    "mus-fibularis-longus",
    "mus-fibularis-brevis"
  ],
  injuries: `Tendinopatía, subluxación`,
  rehab: [
    "Eversión progresiva",
    "Propiocepción"
  ],
  risks: [
    "Esguinces de repetición en inversión"
  ],
  },
  {
  id: `ten-adductor-longus`,
  legacyId: `TEN-013`,
  kind: `tendon`,
  nameEn: `Adductor longus`,
  nameEs: `Tendón del Aductor Largo`,
  synonyms: [
    "Tendón del Aductor Largo",
    "Tendo M. Adductoris Longi"
  ],
  zone: `hip`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Pubis`,
  wikiEn: `Adductor_longus`,
  muscles: [
    "mus-adductor-longus"
  ],
  injuries: `Pubalgia relacionada con aductores`,
  rehab: [
    "Plancha Copenhague progresiva",
    "Isométricos de aducción"
  ],
  risks: [
    "Cambios de dirección",
    "Chuts"
  ],
  },
  {
  id: `ten-flexor-tendons-of-hand`,
  legacyId: `TEN-014`,
  kind: `tendon`,
  nameEn: `Flexor tendons of hand`,
  nameEs: `Tendones Flexores de Dedos + Poleas`,
  synonyms: [
    "Tendones Flexores de Dedos + Poleas",
    "Tendines Mm. Flexorum Digitorum"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"upper-limb":["Flexor_digitorum_profundusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Falanges`,
  wikiEn: `Flexor_tendons_of_hand`,
  muscles: [
    "mus-flexor-digitorum-superficialis",
    "mus-flexor-digitorum-profundus"
  ],
  injuries: `Tenosinovitis, ruptura de poleas (escalada)`,
  rehab: [
    "Cargas progresivas en suspensión",
    "Isométricos en medio-crimp"
  ],
  risks: [
    "Crimp máximo en escalada",
    "Grip repetido"
  ],
  },
  {
  id: `ten-plantar-fascia`,
  legacyId: `TEN-015`,
  kind: `tendon`,
  nameEn: `Plantar fascia`,
  nameEs: `Fascia Plantar`,
  synonyms: [
    "Fascia Plantar",
    "Fascia Plantaris"
  ],
  zone: `ankle-foot`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Apófisis medial del calcáneo`,
  wikiEn: `Plantar_fascia`,
  muscles: [],
  injuries: `Fascitis plantar`,
  rehab: [
    "Protocolo Rathleff (HSR de elevación de talón con dedos arriba)",
    "Estiramiento de sóleo",
    "Short foot"
  ],
  risks: [
    "Volumen de carrera",
    "Calzado inadecuado"
  ],
  },
  {
  id: `ten-pes-anserinus`,
  legacyId: `TEN-016`,
  kind: `tendon`,
  nameEn: `Pes anserinus`,
  nameEs: `Tendón de la Pata de Ganso`,
  synonyms: [
    "Tendón de la Pata de Ganso",
    "Tendo Pes Anserinus"
  ],
  zone: `knee`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Tibia medial proximal`,
  wikiEn: `Pes_anserinus`,
  muscles: [
    "mus-semitendinosus",
    "mus-gracilis",
    "mus-sartorius"
  ],
  injuries: `Bursitis/tendinitis de pata de ganso (común en corredores)`,
  rehab: [
    "Isométricos de isquios",
    "Estiramiento de isquios y aductores",
    "HSR"
  ],
  risks: [
    "Carrera con valgo de rodilla",
    "Cambios de dirección"
  ],
  },
  {
  id: `ten-iliopsoas-tendon`,
  legacyId: `TEN-017`,
  kind: `tendon`,
  nameEn: `Iliopsoas tendon`,
  nameEs: `Tendón del Psoas-Ilíaco`,
  synonyms: [
    "Tendón del Psoas-Ilíaco",
    "Tendo Iliopsoas"
  ],
  zone: `hip`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Trocanter menor`,
  wikiEn: `Iliopsoas_tendon`,
  muscles: [
    "mus-psoas-major",
    "mus-iliacus"
  ],
  injuries: `Tendinitis del iliopsoas, 'snapping hip' (resalte de cadera)`,
  rehab: [
    "Estiramiento de iliopsoas",
    "Fortalecimiento excéntrico",
    "Liberación miofascial"
  ],
  risks: [
    "Flexión de cadera repetitiva",
    "Sprint",
    "Ciclismo"
  ],
  },
  {
  id: `ten-triceps-tendon`,
  legacyId: `TEN-018`,
  kind: `tendon`,
  nameEn: `Triceps tendon`,
  nameEs: `Tendón Distal del Tríceps`,
  synonyms: [
    "Tendón Distal del Tríceps",
    "Tendo Tricipitis Brachii"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Common_tendon_of_triceps_brachiir"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Olécranon`,
  wikiEn: `Triceps_tendon`,
  muscles: [
    "mus-triceps-brachii"
  ],
  injuries: `Tendinopatía insertiva del tríceps (común en press banca pesado y fondos)`,
  rehab: [
    "Extensiones excéntricas controladas",
    "Isométricos de tríceps"
  ],
  risks: [
    "Press banca pesado",
    "Fondos profundos",
    "Extensiones máximas"
  ],
  },
  {
  id: `ten-pectoralis-major-tendon`,
  legacyId: `TEN-019`,
  kind: `tendon`,
  nameEn: `Pectoralis major tendon`,
  nameEs: `Tendón del Pectoral Mayor`,
  synonyms: [
    "Tendón del Pectoral Mayor",
    "Tendo Pectoralis Major"
  ],
  zone: `chest`,
  zones: [
    "shoulder"
  ],
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  insertion: `Labio lateral del surco intertubercular`,
  wikiEn: `Pectoralis_major_tendon`,
  muscles: [
    "mus-pectoralis-major"
  ],
  injuries: `Desgarro del tendón del pectoral (raro pero grave, común en levantadores de potencia)`,
  rehab: [
    "Protocolo post-quirúrgico progresivo",
    "Rehabilitación escapular"
  ],
  risks: [
    "Press banca con agarre muy abierto",
    "Press banca con rebote excesivo"
  ],
  },
  {
  id: `ten-de-quervain-s-disease`,
  legacyId: `TEN-020`,
  kind: `tendon`,
  nameEn: `De quervain's disease`,
  nameEs: `Tendones de De Quervain`,
  synonyms: [
    "Tendones de De Quervain",
    "Tendines Mm. Abductoris Pollicis Longi et Extensoris Pollicis Brevis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"upper-limb":["Abductor_pollicis_longus_tendon_sheath","Extensor_pollicis_brevis_tendon_sheath"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"},
    {"sourceId":"TODO-cita","note":"Ficha truncada en el export del chat (TEN-020): campos finales reconstruidos parcialmente — completar con Gray's 4th ed."}
  ],
  insertion: `Base del 1er metacarpiano (truncado en el export; verificar contra Gray's)`,
  wikiEn: `De_quervain%27s_disease`,
  muscles: [
    "mus-abductor-pollicis-longus",
    "mus-extensor-pollicis-brevis"
  ],
  injuries: `Tenosinovitis de De Quervain`,
  rehab: [
    "Inmovilización breve + carga progresiva en pulgar",
    "Eccéntricos de extensión/abducción de pulgar"
  ],
  risks: [
    "Repetición de pinza + desviación radial de muñeca",
    "Agarre fuerte con muñeca desviada"
  ],
  },
];
