// src/data/fitness/anatomy/nerves.ts
// Nervios (22).
// GENERADO por rag/anatomy/scripts/build-anatomy-data.mjs — NO editar a mano.
// Regenerar: node rag/anatomy/scripts/build-anatomy-data.mjs

import type { NerveEntry } from './types';

export const NERVES: NerveEntry[] = [
  {
  id: `ner-median-nerve`,
  legacyId: `NER-001`,
  kind: `nerve`,
  nameEn: `Median nerve`,
  nameEs: `Nervio Mediano`,
  synonyms: [
    "Nervio Mediano",
    "Nervus medianus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Median_nerve","Median_nerve_Common_palmar_digital_nerve_of_the_thumb","Median_nerve_Common_palmar_digital_nerves","Median_nerve_Palmar_br","Median_nerve_Proper_palmar_digital_nerves","Median_nerve_Proper_palmar_digital_nerves_of_the_thumb","Median_nerve_Recurrent_br"],"upper-limb":["Lateral_root_of_median_nerver","Medial_root_of_median_nerver","Median_nerve_Common_palmar_digital_nerve_of_the_thumb","Median_nerve_Common_palmar_digital_nerves","Median_nerve_Palmar_br","Median_nerve_Proper_palmar_digital_nerves","Median_nerve_Proper_palmar_digital_nerves_of_the_thumb","Median_nerve_Recurrent_br","Median_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Median_nerve`,
  rehab: [
    "Neurodinamia (gliding) del mediano",
    "Ergonomía de muñeca",
    "Fortalecimiento de agarre sin dolor"
  ],
  risks: [
    "Flexo-extensión repetida de muñeca bajo carga",
    "Ciclismo sin cambio de apoyo"
  ],
  entrapmentSite: `Túnel carpiano`,
  innervates: `Flexores del antebrazo (excepto FCU), tenares`,
  symptoms: `Parestesias pulgar/índice/medio`,
  lesionContext: `Compresión por agarre repetido, ciclismo (manillar)`,
  relatedStructures: [
    "art-wrist-joint",
    "mus-flexor-carpi-radialis",
    "mus-thenar-muscles"
  ],
  },
  {
  id: `ner-ulnar-nerve`,
  legacyId: `NER-002`,
  kind: `nerve`,
  nameEn: `Ulnar nerve`,
  nameEs: `Nervio Ulnar`,
  synonyms: [
    "Nervio Ulnar",
    "Nervus ulnaris"
  ],
  zone: `arm`,
  zones: [
    "forearm-hand"
  ],
  modelMeshes: {"hand":["Ulnar_nerve","Ulnar_nerve_Communicating_br","Ulnar_nerve_Deep_br","Ulnar_nerve_Dorsal_cutaneous_br","Ulnar_nerve_Palmar_cutaneous_br","Ulnar_nerve_Superficial_br_Common_palmar_digital_n","Ulnar_nerve_Superficial_br_Proper_palmar_digital_nn"],"upper-limb":["Ulnar_nerve_Communicating_br","Ulnar_nerve_Deep_br","Ulnar_nerve_Dorsal_cutaneous_br","Ulnar_nerve_Palmar_cutaneous_br","Ulnar_nerve_Superficial_br_Common_palmar_digital_n","Ulnar_nerve_Superficial_br_Proper_palmar_digital_nn","Ulnar_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Ulnar_nerve`,
  rehab: [
    "Gliding ulnar",
    "Evitar flexión sostenida",
    "Trabajo de intrínsecos"
  ],
  risks: [
    "Apoyo de codos en tabla/manillar"
  ],
  entrapmentSite: `Túnel cubital y canal de Guyon`,
  innervates: `Intrínsecos de la mano, FCU, FDP medial`,
  symptoms: `Parestesias anular/meñique`,
  lesionContext: `Flexión sostenida de codo (ciclismo, apoyo de codos)`,
  relatedStructures: [
    "art-elbow-joint",
    "art-hand-joint",
    "mus-flexor-carpi-ulnaris",
    "mus-palmar-interossei"
  ],
  },
  {
  id: `ner-radial-nerve`,
  legacyId: `NER-003`,
  kind: `nerve`,
  nameEn: `Radial nerve`,
  nameEs: `Nervio Radial`,
  synonyms: [
    "Nervio Radial",
    "Nervus radialis"
  ],
  zone: `arm`,
  zones: [
    "forearm-hand"
  ],
  modelMeshes: {"hand":["Radial_nerve_Dorsal_digital_nn","Radial_nerve_Superficial_br"],"upper-limb":["Radial_nerve_(deep_branch)r","Radial_nerve_(dorsal_digital_nn)r","Radial_nerve_(inferior_lateral_brachial_cutaneous_n)r","Radial_nerve_(posterior_antebrachial_cutaneous_n)r","Radial_nerve_(posterior_brachial_cutaneous_n)r","Radial_nerve_(posterior_interosseus_n)r","Radial_nerve_(superficial_br)r","Radial_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Radial_nerve`,
  rehab: [
    "Neurodinamia radial",
    "Extensión progresiva"
  ],
  risks: [
    "Compresión directa del brazo en soportes"
  ],
  entrapmentSite: `Canal de torsión humeral`,
  innervates: `Extensores de codo y muñeca/dedos`,
  symptoms: `Muñeca caída, parestesias dorso de la mano`,
  lesionContext: `Compresión del brazo (borde de banco, apoyo)`,
  relatedStructures: [
    "art-elbow-joint",
    "mus-triceps-brachii",
    "mus-extensor-digitorum"
  ],
  },
  {
  id: `ner-axillary-nerve`,
  legacyId: `NER-004`,
  kind: `nerve`,
  nameEn: `Axillary nerve`,
  nameEs: `Nervio Axilar`,
  synonyms: [
    "Nervio Axilar",
    "Nervus axillaris"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Axillary_nerve_-_superior_lateral_br_cutaneous_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Axillary_nerve`,
  rehab: [
    "Pendulares",
    "ROM progresivo",
    "Re-fortalecimiento deltoideo"
  ],
  risks: [
    "Overhead extremo con hombro inestable"
  ],
  entrapmentSite: `Hombro (luxación)`,
  innervates: `Deltoide y redondo menor`,
  symptoms: `Debilidad de abducción, atrofia deltoidea`,
  lesionContext: `Luxación glenohumeral, fractura quirúrgica`,
  relatedStructures: [
    "art-shoulder-joint",
    "mus-deltoideus-anterior"
  ],
  },
  {
  id: `ner-suprascapular-nerve`,
  legacyId: `NER-005`,
  kind: `nerve`,
  nameEn: `Suprascapular nerve`,
  nameEs: `Nervio Supraescapular`,
  synonyms: [
    "Nervio Supraescapular",
    "Nervus suprascapularis"
  ],
  zone: `shoulder`,
  zones: [
    "back"
  ],
  modelMeshes: {"upper-limb":["Suprascapular_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Suprascapular_nerve`,
  rehab: [
    "Control escapular",
    "Isométricos de rotación externa",
    "Estiramiento de cápsula posterior"
  ],
  risks: [
    "Volumen overhead sin movilidad"
  ],
  entrapmentSite: `Escotadura supraescapular`,
  innervates: `Supraespinoso e infraespinoso`,
  symptoms: `Dolor posterior de hombro, atrofia del manguito`,
  lesionContext: `Overhead repetido (vóley, tenis, press)`,
  relatedStructures: [
    "art-shoulder-joint",
    "mus-supraspinatus",
    "mus-infraspinatus"
  ],
  },
  {
  id: `ner-long-thoracic-nerve`,
  legacyId: `NER-006`,
  kind: `nerve`,
  nameEn: `Long thoracic nerve`,
  nameEs: `Nervio Torácico Largo`,
  synonyms: [
    "Nervio Torácico Largo",
    "Nervus thoracicus longus"
  ],
  zone: `chest`,
  zones: [
    "back"
  ],
  modelMeshes: {"upper-limb":["Long_thoracic_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Long_thoracic_nerve`,
  rehab: [
    "Push-up plus",
    "Protracción escapular progresiva"
  ],
  risks: [
    "Overhead con fatiga del serrato"
  ],
  entrapmentSite: `Pared torácica`,
  innervates: `Serrato anterior`,
  symptoms: `Escápula alada`,
  lesionContext: `Tracción (mochilas pesadas, gestos overhead bruscos)`,
  relatedStructures: [
    "art-scapulothoracic-joint",
    "mus-serratus-anterior"
  ],
  },
  {
  id: `ner-accessory-nerve`,
  legacyId: `NER-007`,
  kind: `nerve`,
  nameEn: `Accessory nerve`,
  nameEs: `Nervio Accesorio (XI)`,
  synonyms: [
    "Nervio Accesorio (XI)",
    "Nervus accessorius"
  ],
  zone: `cervical`,
  zones: [
    "back"
  ],
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Accessory_nerve`,
  rehab: [
    "Encogimientos progresivos",
    "Postura escapular"
  ],
  risks: [
    "Cargas cervicales sin progresión"
  ],
  entrapmentSite: `Triángulo posterior del cuello`,
  innervates: `Trapecio y ECM`,
  symptoms: `Caída del hombro, escápula alada lateral`,
  lesionContext: `Tracción/iatrogénica; sobrecarga cervical`,
  relatedStructures: [
    "mus-trapezius",
    "mus-sternocleidomastoid"
  ],
  },
  {
  id: `ner-sciatic-nerve`,
  legacyId: `NER-008`,
  kind: `nerve`,
  nameEn: `Sciatic nerve`,
  nameEs: `Nervio Ciático`,
  synonyms: [
    "Nervio Ciático",
    "Nervus ischiadicus"
  ],
  zone: `hip`,
  zones: [
    "thigh",
    "lower-leg"
  ],
  modelMeshes: {"lower-limb":["Schiatic_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Sciatic_nerve`,
  rehab: [
    "Sliders neurodinámicos",
    "McKenzie",
    "Core y hinge de cadera"
  ],
  risks: [
    "Flexión lumbar cargada + rotación",
    "Sedestación larga"
  ],
  entrapmentSite: `Glúteo → pierna`,
  innervates: `Isquios y toda la pierna/pie`,
  symptoms: `Ciatalgia, parestesias irradiadas`,
  lesionContext: `Hernia discal lumbar cargada; síndrome piramidal`,
  relatedStructures: [
    "art-lumbar-vertebrae",
    "art-hip-joint",
    "mus-biceps-femoris-long-head",
    "mus-piriformis"
  ],
  },
  {
  id: `ner-femoral-nerve`,
  legacyId: `NER-009`,
  kind: `nerve`,
  nameEn: `Femoral nerve`,
  nameEs: `Nervio Femoral`,
  synonyms: [
    "Nervio Femoral",
    "Nervus femoralis"
  ],
  zone: `hip`,
  zones: [
    "thigh"
  ],
  modelMeshes: {"lower-limb":["Anterior_cutaneous_branches_of_Femoral_nerver","Femoral_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Femoral_nerve`,
  rehab: [
    "Fortalecimiento progresivo de cuádriceps"
  ],
  risks: [
    "Trauma directo en cadera anterior"
  ],
  entrapmentSite: `Triángulo femoral`,
  innervates: `Cuádriceps, sartorio, pectíneo`,
  symptoms: `Debilidad de extensión de rodilla`,
  lesionContext: `Hematoma retroperitoneal, cirugía de cadera (raro)`,
  relatedStructures: [
    "art-hip-joint",
    "mus-rectus-femoris"
  ],
  },
  {
  id: `ner-common-peroneal-nerve`,
  legacyId: `NER-010`,
  kind: `nerve`,
  nameEn: `Common peroneal nerve`,
  nameEs: `Nervio Fibular Común`,
  synonyms: [
    "Nervio Fibular Común",
    "Nervus fibularis communis"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb":["Common_fibular_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Common_peroneal_nerve`,
  rehab: [
    "Neurodinamia",
    "Fortalecimiento de dorsiflexores",
    "Ortesis si precisa"
  ],
  risks: [
    "Kneeling prolongado con compresión lateral"
  ],
  entrapmentSite: `Cabeza del peroné`,
  innervates: `Compartimentos anterior y lateral de la pierna`,
  symptoms: `Pie caído`,
  lesionContext: `Compresión (rodillas prolongadas, yesos)`,
  relatedStructures: [
    "art-ankle-joint",
    "mus-tibialis-anterior",
    "mus-fibularis-longus"
  ],
  },
  {
  id: `ner-tibial-nerve`,
  legacyId: `NER-011`,
  kind: `nerve`,
  nameEn: `Tibial nerve`,
  nameEs: `Nervio Tibial`,
  synonyms: [
    "Nervio Tibial",
    "Nervus tibialis"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb":["Medial_calcaneal_branches_of_Tibial_nerver","Tibial_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Tibial_nerve`,
  rehab: [
    "Gliding tibial",
    "Soporte de arco",
    "Short foot"
  ],
  risks: [
    "Sobrepronación + volumen de carrera"
  ],
  entrapmentSite: `Túnel tarsiano`,
  innervates: `Sóleo, tibial posterior, planta del pie`,
  symptoms: `Parestesias plantares`,
  lesionContext: `Hiperpronación, edema`,
  relatedStructures: [
    "art-subtalar-joint",
    "mus-soleus",
    "mus-tibialis-posterior"
  ],
  },
  {
  id: `ner-lateral-femoral-cutaneous-nerve`,
  legacyId: `NER-012`,
  kind: `nerve`,
  nameEn: `Lateral femoral cutaneous nerve`,
  nameEs: `N. Cutáneo Femoral Lateral`,
  synonyms: [
    "N. Cutáneo Femoral Lateral",
    "Nervus cutaneus femoris lateralis"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Lateral_femoral_cuteneous_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Lateral_femoral_cutaneous_nerve`,
  rehab: [
    "Eliminar compresión",
    "Movilidad de cadera"
  ],
  risks: [
    "Cinturones de carga muy apretados y bajos"
  ],
  entrapmentSite: `Ligamento inguinal`,
  innervates: `Sensibilidad muslo lateral`,
  symptoms: `Hormigueo/quemazón muslo lateral`,
  lesionContext: `Compresión por cinturones/cinturillas apretadas (meralgia parestésica)`,
  relatedStructures: [
    "art-hip-joint"
  ],
  },
  {
  id: `ner-lumbar-nerve`,
  legacyId: `NER-013`,
  kind: `nerve`,
  nameEn: `Lumbar nerve`,
  nameEs: `Raíces Lumbares`,
  synonyms: [
    "Raíces Lumbares",
    "Rami ventrales L4-S1"
  ],
  zone: `spine`,
  modelMeshes: {"lower-limb":["Plexus_lumbarisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Lumbar_nerve`,
  rehab: [
    "McKenzie",
    "Core progresivo",
    "Higiene de hinge"
  ],
  risks: [
    "Flexión + rotación cargada",
    "Flexión matinal + carga máxima"
  ],
  entrapmentSite: `Columna lumbar`,
  innervates: `Miembro inferior`,
  symptoms: `Dolor irradiado dermatomal`,
  lesionContext: `Hernia discal con técnica pobre en sentadilla/peso muerto`,
  relatedStructures: [
    "art-lumbar-vertebrae"
  ],
  },
  {
  id: `ner-pudendal-nerve`,
  legacyId: `NER-014`,
  kind: `nerve`,
  nameEn: `Pudendal nerve`,
  nameEs: `Nervio Pudendo`,
  synonyms: [
    "Nervio Pudendo",
    "Nervus pudendus"
  ],
  zone: `core`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Pudendal_nerve`,
  rehab: [
    "Ajuste de sillín",
    "Pausas de pie",
    "Trabajo de suelo pélvico"
  ],
  risks: [
    "Rodajes largos sin cambios de postura"
  ],
  entrapmentSite: `Periné`,
  innervates: `Suelo pélvico`,
  symptoms: `Parestesias perineales`,
  lesionContext: `Compresión por sillín (ciclismo)`,
  relatedStructures: [
    "mus-levator-ani"
  ],
  },
  {
  id: `ner-posterior-interosseous-nerve`,
  legacyId: `NER-PIN`,
  kind: `nerve`,
  nameEn: `Posterior interosseous nerve`,
  nameEs: `Nervio Interóseo Posterior (PIN)`,
  synonyms: [
    "Nervio Interóseo Posterior (PIN)",
    "Ramus profundus nervi radialis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"upper-limb":["Radial_nerve_(deep_branch)r","Radial_nerve_(dorsal_digital_nn)r","Radial_nerve_(inferior_lateral_brachial_cutaneous_n)r","Radial_nerve_(posterior_antebrachial_cutaneous_n)r","Radial_nerve_(posterior_brachial_cutaneous_n)r","Radial_nerve_(posterior_interosseus_n)r","Radial_nerve_(superficial_br)r","Radial_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Posterior_interosseous_nerve`,
  rehab: [
    "Neurodinamia del PIN",
    "Estiramiento del supinador",
    "Modificar agarre y técnica de curl",
    "Isométricos de extensión sin dolor"
  ],
  risks: [
    "Pronosupinación repetida con carga (curl con barra recta)",
    "Raqueta",
    "Sobreuso de agarre"
  ],
  entrapmentSite: `Arcada de Frohse (dentro del supinador)`,
  innervates: `Extensores de muñeca y dedos (ECU, ED, EDM, EPL, EPB, APL, EIP) y supinador`,
  symptoms: `Dolor profundo en antebrazo proximal + debilidad de extensión de dedos/muñeca SIN alteración sensitiva (el PIN es motor)`,
  lesionContext: `Atrapamiento en la arcada de Frohse por hipertrofia del supinador o pronosupinación repetida. SE CONFUNDE con epicondilitis lateral refractaria a tratamiento`,
  relatedStructures: [
    "art-elbow-joint",
    "art-radioulnar-articulation",
    "mus-supinator",
    "mus-extensor-carpi-radialis-brevis"
  ],
  },
  {
  id: `ner-obturator-nerve`,
  legacyId: `NER-OBT`,
  kind: `nerve`,
  nameEn: `Obturator nerve`,
  nameEs: `Nervio Obturador`,
  synonyms: [
    "Nervio Obturador",
    "Nervus obturatorius"
  ],
  zone: `hip`,
  zones: [
    "thigh"
  ],
  modelMeshes: {"lower-limb":["Anterior_branch_of_Obturator_nerver","Cutaneous_br_of_Anterior_br_of_Obturator_nerver","Obturator_nerver","Posterior_branch_of_Obturator_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Obturator_nerve`,
  rehab: [
    "Carga progresiva de aductores (Copenhagen)",
    "Neurodinamia obturadora",
    "Reeducación de cambio de dirección"
  ],
  risks: [
    "Cambios de dirección bruscos",
    "Chuts",
    "Sobreuso de aducción"
  ],
  entrapmentSite: `Canal obturador`,
  innervates: `Aductores (largo, corto, mayor, grácil, obturador externo)`,
  symptoms: `Dolor inguinal irradiado a cara medial del muslo, debilidad de aducción`,
  lesionContext: `Atrapamiento en el canal obturador: causa común de dolor inguinal crónico e inexplicable en atletas (fútbol, hockey)`,
  relatedStructures: [
    "art-hip-joint",
    "mus-adductor-magnus",
    "mus-adductor-longus",
    "mus-adductor-brevis",
    "mus-gracilis"
  ],
  },
  {
  id: `ner-superior-gluteal-nerve`,
  legacyId: `NER-GLS`,
  kind: `nerve`,
  nameEn: `Superior gluteal nerve`,
  nameEs: `Nervio Glúteo Superior`,
  synonyms: [
    "Nervio Glúteo Superior",
    "Nervus gluteus superior"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Superior_gluteal_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Superior_gluteal_nerve`,
  rehab: [
    "Fortalecimiento de abductores (abducción lateral, monster walk)",
    "Reeducación de marcha",
    "Side plank con abducción"
  ],
  risks: [
    "Cirugía de cadera",
    "Inhibición prolongada por sedentarismo"
  ],
  entrapmentSite: `Foramen ciático mayor (sobre piriforme)`,
  innervates: `Glúteo medio, glúteo menor, TFL`,
  symptoms: `Caída pélvica contralateral al apoyar (Trendelenburg), debilidad de abducción, dolor trocantérico`,
  lesionContext: `Atrapamiento en espacio subglúteo o iatrogénica (cirugía de cadera); su inhibición causa 'amnesia glútea' y signo de Trendelenburg`,
  relatedStructures: [
    "mus-gluteus-medius",
    "mus-gluteus-minimus",
    "mus-tensor-fasciae-latae",
    "art-hip-joint"
  ],
  },
  {
  id: `ner-inferior-gluteal-nerve`,
  legacyId: `NER-GLI`,
  kind: `nerve`,
  nameEn: `Inferior gluteal nerve`,
  nameEs: `Nervio Glúteo Inferior`,
  synonyms: [
    "Nervio Glúteo Inferior",
    "Nervus gluteus inferior"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Inferior_gluteal_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Inferior_gluteal_nerve`,
  rehab: [
    "Hip thrust progresivo",
    "Puente de glúteo",
    "Peso muerto ligero progresivo"
  ],
  risks: [
    "Cirugía de cadera",
    "Síndrome piramidal (proximidad)"
  ],
  entrapmentSite: `Foramen ciático mayor (bajo piriforme)`,
  innervates: `Glúteo mayor`,
  symptoms: `Dificultad para subir escaleras, sprint y levantarse (debilidad de extensión de cadera)`,
  lesionContext: `Lesión por cirugía de cadera o trauma; debilidad de extensión de cadera`,
  relatedStructures: [
    "mus-gluteus-maximus",
    "art-hip-joint"
  ],
  },
  {
  id: `ner-musculocutaneous-nerve`,
  legacyId: `NER-MC`,
  kind: `nerve`,
  nameEn: `Musculocutaneous nerve`,
  nameEs: `Nervio Musculocutáneo`,
  synonyms: [
    "Nervio Musculocutáneo",
    "Nervus musculocutaneus"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Musculocutaneus_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Musculocutaneous_nerve`,
  rehab: [
    "Fortalecimiento progresivo de bíceps/braquial",
    "Neurodinamia"
  ],
  risks: [
    "Tracciones pesadas",
    "Hipertrofia del coracobraquial"
  ],
  entrapmentSite: `Perfora el coracobraquial; corre entre bíceps y braquial`,
  innervates: `Coracobraquial, bíceps, braquial; sensitivo: cara lateral del antebrazo`,
  symptoms: `Debilidad de flexión de codo + parestesia en cara lateral del antebrazo`,
  lesionContext: `Tracciones violentas o hipertrofia del coracobraquial que lo comprime`,
  relatedStructures: [
    "mus-biceps-brachii",
    "mus-brachialis",
    "mus-coracobrachialis",
    "art-elbow-joint"
  ],
  },
  {
  id: `ner-thoracodorsal-nerve`,
  legacyId: `NER-TD`,
  kind: `nerve`,
  nameEn: `Thoracodorsal nerve`,
  nameEs: `Nervio Toracodorsal`,
  synonyms: [
    "Nervio Toracodorsal",
    "Nervus thoracodorsalis"
  ],
  zone: `back`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Thoracodorsal_nerve`,
  rehab: [
    "Fortalecimiento progresivo del dorsal (jalón ligero → remo)"
  ],
  risks: [
    "Tracción overhead",
    "Cirugía axilar"
  ],
  entrapmentSite: `Axila, pared torácica lateral`,
  innervates: `Dorsal ancho`,
  symptoms: `Debilidad de aducción/rotación interna del húmero`,
  lesionContext: `Tracción o iatrogénica (cirugía axilar); involucrado en el contexto del Síndrome del Desfiladero Torácico (TOS)`,
  relatedStructures: [
    "mus-latissimus-dorsi",
    "art-shoulder-joint"
  ],
  },
  {
  id: `ner-pectoral-nerves`,
  legacyId: `NER-PEC`,
  kind: `nerve`,
  nameEn: `Pectoral nerves`,
  nameEs: `Nervios Pectorales`,
  synonyms: [
    "Nervios Pectorales",
    "Nervi pectorales medialis et lateralis"
  ],
  zone: `chest`,
  zones: [
    "shoulder"
  ],
  modelMeshes: {"upper-limb":["Lateral_pectoral_nerver","Medial_pectoral_nerver"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Pectoral_nerves`,
  rehab: [
    "Press progresivo",
    "Apertura y movilidad escapular"
  ],
  risks: [
    "TOS",
    "Tracción overhead"
  ],
  entrapmentSite: `Axila (región del pectoral menor)`,
  innervates: `Pectoral mayor y pectoral menor`,
  symptoms: `Debilidad de empuje horizontal`,
  lesionContext: `Compresión en el Síndrome del Desfiladero Torácico (TOS) o tracción`,
  relatedStructures: [
    "mus-pectoralis-major",
    "mus-pectoralis-minor",
    "art-acromioclavicular-joint"
  ],
  },
  {
  id: `ner-mandibular-nerve`,
  legacyId: `NER-V3`,
  kind: `nerve`,
  nameEn: `Mandibular nerve`,
  nameEs: `Nervio Mandibular (V3)`,
  synonyms: [
    "Nervio Mandibular (V3)",
    "Nervus mandibularis"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  wikiEn: `Mandibular_nerve`,
  rehab: [
    "Manejo de ATM",
    "Férula de descarga",
    "Release de masetero"
  ],
  risks: [
    "Bruxismo",
    "Apretamiento durante Valsalva"
  ],
  entrapmentSite: `Fosa infratemporal`,
  innervates: `Músculos de la masticación (masetero, temporal, pterigoideos)`,
  symptoms: `Dolor facial, hipertrofia maseterina, fatiga mandibular`,
  lesionContext: `Sobrecarga por bruxismo y apretamiento en esfuerzos máximos`,
  relatedStructures: [
    "mus-masseter",
    "mus-temporalis",
    "mus-lateral-pterygoid",
    "mus-medial-pterygoid",
    "art-temporomandibular-joint"
  ],
  },
];
