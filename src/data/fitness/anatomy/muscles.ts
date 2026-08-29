// src/data/fitness/anatomy/muscles.ts
// Fichas musculares (146) normalizadas desde las fichas JSON del chat 1787414859303 (AG-BIB) + mapping a meshes GLB.
// GENERADO por rag/anatomy/scripts/build-anatomy-data.mjs — NO editar a mano.
// Regenerar: node rag/anatomy/scripts/build-anatomy-data.mjs

import type { MuscleEntry } from './types';

export const MUSCLES: MuscleEntry[] = [
  {
  id: `mus-masseter`,
  legacyId: `MUS-001`,
  kind: `muscle`,
  nameEn: `Masseter`,
  nameEs: `Masetero`,
  synonyms: [
    "Masetero",
    "Masseter"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Arco cigomático`,
  insertion: `Ángulo y rama mandibular`,
  innervation: `N. maseterino (V3)`,
  action: [
    "Elevación de la mandíbula"
  ],
  actionTags: [
    "elevator",
    "masticator"
  ],
  biomechanicalRole: `Músculo más potente de la masticación (hasta 90kg de fuerza). Activo durante apretamiento mandibular en esfuerzos máximos (Valsalva)`,
  aesthetics: `Define el ángulo mandibular. Hipertrofia maseterina contribuye a mandíbula cuadrada`,
  trainingExercises: [],
  riskExercises: [
    "Bruxismo nocturno",
    "Apretamiento mandibular excesivo durante levantamientos máximos"
  ],
  synergists: [
    "mus-temporalis"
  ],
  antagonists: [
    "mus-lateral-pterygoid"
  ],
  primaryForTraining: false,
  wikiEn: `Masseter_muscle`,
  },
  {
  id: `mus-temporalis`,
  legacyId: `MUS-002`,
  kind: `muscle`,
  nameEn: `Temporalis`,
  nameEs: `Temporal`,
  synonyms: [
    "Temporal",
    "Temporalis"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Fosa temporal (huesos parietal, temporal, frontal y esfenoides), fascia temporal`,
  insertion: `Apófisis coronoides de la mandíbula y borde anterior de la rama mandibular`,
  innervation: `Nervios temporales profundos (V3)`,
  action: [
    "Elevación y retrusión de la mandíbula"
  ],
  actionTags: [
    "elevator",
    "retractor",
    "masticator"
  ],
  biomechanicalRole: `Las fibras posteriores (horizontales) son cruciales para la retrusión mandibular. Sinergista del masetero`,
  aesthetics: `Región temporal (sienes)`,
  trainingExercises: [],
  riskExercises: [
    "Bruxismo",
    "ATM"
  ],
  synergists: [
    "mus-masseter"
  ],
  antagonists: [
    "mus-lateral-pterygoid"
  ],
  primaryForTraining: false,
  wikiEn: `Temporalis_muscle`,
  },
  {
  id: `mus-lateral-pterygoid`,
  legacyId: `MUS-003`,
  kind: `muscle`,
  nameEn: `Lateral Pterygoid`,
  nameEs: `Pterigoideo Lateral`,
  synonyms: [
    "Pterigoideo Lateral",
    "Lateral Pterygoid"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cabeza superior: ala mayor del esfenoides. Cabeza inferior: lámina lateral del proceso pterigoides`,
  insertion: `Cuello de la mandíbula, disco articular y cápsula de la ATM`,
  innervation: `Nervio pterigoideo lateral (V3)`,
  action: [
    "Apertura de la boca",
    "protrusión mandibular",
    "movimientos laterales (contralateral)"
  ],
  actionTags: [
    "protractor",
    "masticator"
  ],
  biomechanicalRole: `ÚNICO músculo de la masticación que ABRE la boca. Crucial para la función del disco articular de la ATM. Disfunción asociada a clics y dolor articular`,
  aesthetics: `Profundo, no visible`,
  trainingExercises: [],
  riskExercises: [
    "Disfunción de ATM",
    "Clics articulares"
  ],
  synergists: [],
  antagonists: [
    "mus-masseter",
    "mus-temporalis"
  ],
  primaryForTraining: false,
  wikiEn: `Lateral_pterygoid_muscle`,
  },
  {
  id: `mus-medial-pterygoid`,
  legacyId: `MUS-004`,
  kind: `muscle`,
  nameEn: `Medial Pterygoid`,
  nameEs: `Pterigoideo Medial`,
  synonyms: [
    "Pterigoideo Medial",
    "Medial Pterygoid"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Fosa pterigoidea del esfenoides, tuberosidad del palatino`,
  insertion: `Cara medial del ángulo de la mandíbula`,
  innervation: `Nervio pterigoideo medial (V3)`,
  action: [
    "Elevación de la mandíbula",
    "protrusión",
    "movimientos laterales (ipsilateral)"
  ],
  actionTags: [
    "elevator",
    "protractor",
    "masticator"
  ],
  biomechanicalRole: `Sinergista del masetero. Forma un 'cabestrillo' con el masetero (inserciones opuestas en el ángulo mandibular)`,
  aesthetics: `Profundo, no visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [
    "mus-masseter"
  ],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Medial_pterygoid_muscle`,
  },
  {
  id: `mus-occipitofrontalis`,
  legacyId: `MUS-005`,
  kind: `muscle`,
  nameEn: `Occipitofrontalis`,
  nameEs: `Occipitofrontal`,
  synonyms: [
    "Occipitofrontal",
    "Occipitofrontalis"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Hueso occipital (vientre occipital) / fascia epicraneal`,
  insertion: `Piel de cejas y galea aponeurótica`,
  innervation: `N. facial (VII)`,
  action: [
    "Eleva cejas y arruga la frente"
  ],
  actionTags: [
    "elevator"
  ],
  biomechanicalRole: `Expresión facial`,
  aesthetics: `Frente`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Occipitofrontalis_muscle`,
  },
  {
  id: `mus-orbicularis-oculi`,
  legacyId: `MUS-006`,
  kind: `muscle`,
  nameEn: `Orbicularis Oculi`,
  nameEs: `Orbicular de los Párpados`,
  synonyms: [
    "Orbicular de los Párpados",
    "Orbicularis Oculi"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Borde medial de la órbita`,
  insertion: `Piel de los párpados`,
  innervation: `N. facial (VII)`,
  action: [
    "Cierre de los ojos"
  ],
  actionTags: [
    "other"
  ],
  biomechanicalRole: `Protección ocular y expresión`,
  aesthetics: `Párpados`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Orbicularis_oculi`,
  },
  {
  id: `mus-orbicularis-oris`,
  legacyId: `MUS-007`,
  kind: `muscle`,
  nameEn: `Orbicularis Oris`,
  nameEs: `Orbicular de la Boca`,
  synonyms: [
    "Orbicular de la Boca",
    "Orbicularis Oris"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Piel y mucosa de los labios`,
  insertion: `Labios (fibras circulares)`,
  innervation: `N. facial (VII)`,
  action: [
    "Cierre de la boca",
    "protrusión de labios"
  ],
  actionTags: [
    "protractor"
  ],
  biomechanicalRole: `Fonación y expresión`,
  aesthetics: `Labios`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Orbicularis_oris`,
  },
  {
  id: `mus-buccinator`,
  legacyId: `MUS-008`,
  kind: `muscle`,
  nameEn: `Buccinator`,
  nameEs: `Buccinador`,
  synonyms: [
    "Buccinador",
    "Buccinator"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis alveolares de maxila/mandíbula y rafe pterigomandibular`,
  insertion: `Comisura de los labios (orbicular de la boca)`,
  innervation: `N. facial (VII)`,
  action: [
    "Compresión de las mejillas (silbar",
    "soplar)"
  ],
  actionTags: [
    "other"
  ],
  biomechanicalRole: `Mantiene el bolo alimenticio entre los dientes`,
  aesthetics: `Mejilla`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Buccinator_muscle`,
  },
  {
  id: `mus-zygomaticus-major`,
  legacyId: `MUS-009`,
  kind: `muscle`,
  nameEn: `Zygomaticus Major`,
  nameEs: `Cigomático Mayor`,
  synonyms: [
    "Cigomático Mayor",
    "Zygomaticus Major"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Hueso cigomático`,
  insertion: `Comisura de la boca (modiolo)`,
  innervation: `N. facial (VII)`,
  action: [
    "Eleva y retrae la comisura (sonrisa)"
  ],
  actionTags: [
    "elevator"
  ],
  biomechanicalRole: `Expresión facial`,
  aesthetics: `Sonrisa`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Zygomaticus_major_muscle`,
  },
  {
  id: `mus-extraocular-muscles`,
  legacyId: `MUS-010`,
  kind: `muscle`,
  nameEn: `Extraocular Muscles`,
  nameEs: `Músculos Extraoculares`,
  synonyms: [
    "Músculos Extraoculares",
    "Extraocular Muscles"
  ],
  zone: `head-jaw`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Ápex orbitario (anillo de Zinn), excepto oblicuo inferior`,
  insertion: `Esclerótica`,
  innervation: `N. oculomotor (III), troclear (IV), abducens (VI)`,
  action: [
    "Movimientos del ojo"
  ],
  actionTags: [
    "other"
  ],
  biomechanicalRole: `Motilidad ocular`,
  aesthetics: `No aplica`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extraocular_muscles`,
  },
  {
  id: `mus-sternocleidomastoid`,
  legacyId: `MUS-011`,
  kind: `muscle`,
  nameEn: `Sternocleidomastoid`,
  nameEs: `Esternocleidomastoideo`,
  synonyms: [
    "Esternocleidomastoideo",
    "Sternocleidomastoid"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Manubrio esternal y clavícula`,
  insertion: `Apófisis mastoides`,
  innervation: `N. accesorio (XI)`,
  action: [
    "Rotación e inclinación unilateral",
    "flexión cervical bilateral"
  ],
  actionTags: [
    "flexor",
    "rotator"
  ],
  biomechanicalRole: `Control cervical dinámico bajo carga (p. ej. deportes de contacto)`,
  aesthetics: `Grosor del cuello`,
  trainingExercises: [
    "Isométricos cervicales",
    "Flexión cervical con carga ligera y progresiva"
  ],
  riskExercises: [
    "Tirones cervicales en crunch mal ejecutado",
    "Puente de cuello sin progresión"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Sternocleidomastoid`,
  },
  {
  id: `mus-platysma`,
  legacyId: `MUS-012`,
  kind: `muscle`,
  nameEn: `Platysma`,
  nameEs: `Platisma`,
  synonyms: [
    "Platisma",
    "Platysma"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Fascia de las regiones pectoral y deltoidea`,
  insertion: `Borde inferior de la mandíbula y piel de cara inferior`,
  innervation: `Rama cervical del facial (VII)`,
  action: [
    "Tracciona la piel del cuello hacia abajo",
    "deprime la mandíbula"
  ],
  actionTags: [
    "depressor",
    "masticator"
  ],
  biomechanicalRole: `Visible en espiración forzada/esfuerzo`,
  aesthetics: `Bandas del cuello`,
  trainingExercises: [],
  riskExercises: [
    "Flacidez cervical con la edad"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Platysma`,
  },
  {
  id: `mus-scalenus-anterior`,
  legacyId: `MUS-013`,
  kind: `muscle`,
  nameEn: `Scalenus Anterior`,
  nameEs: `Escaleno Anterior`,
  synonyms: [
    "Escaleno Anterior",
    "Scalenus Anterior"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tubérculos anteriores de apófisis transversas C3-C6`,
  insertion: `Tubérculo escaleno de la 1ª costilla`,
  innervation: `Ramos anteriores C4-C6`,
  action: [
    "Flexión lateral del cuello",
    "eleva la 1ª costilla (inspiración accesoria)"
  ],
  actionTags: [
    "flexor",
    "elevator",
    "respiratory"
  ],
  biomechanicalRole: `Accesorio respiratorio; relevante en síndrome del desfiladero torácico`,
  aesthetics: `Lateral del cuello`,
  trainingExercises: [
    "Flexión lateral cervical con resistencia"
  ],
  riskExercises: [
    "Hipertrofia que comprime arteria subclavia (desfiladero torácico)"
  ],
  synergists: [
    "mus-scalenus-medius"
  ],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Scalenus_anterior_muscle`,
  },
  {
  id: `mus-scalenus-medius`,
  legacyId: `MUS-014`,
  kind: `muscle`,
  nameEn: `Scalenus Medius`,
  nameEs: `Escaleno Medio`,
  synonyms: [
    "Escaleno Medio",
    "Scalenus Medius"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tubérculos posteriores de transversas C2-C7`,
  insertion: `Cara superior de la 1ª costilla`,
  innervation: `Ramos anteriores C3-C8`,
  action: [
    "Flexión lateral",
    "eleva la 1ª costilla"
  ],
  actionTags: [
    "flexor",
    "elevator"
  ],
  biomechanicalRole: `Accesorio respiratorio y estabilizador cervical`,
  aesthetics: `Lateral del cuello`,
  trainingExercises: [
    "Flexión lateral cervical"
  ],
  riskExercises: [
    "Tensión cervical crónica"
  ],
  synergists: [
    "mus-scalenus-anterior"
  ],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Scalenus_medius_muscle`,
  },
  {
  id: `mus-scalenus-posterior`,
  legacyId: `MUS-015`,
  kind: `muscle`,
  nameEn: `Scalenus Posterior`,
  nameEs: `Escaleno Posterior`,
  synonyms: [
    "Escaleno Posterior",
    "Scalenus Posterior"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tubérculos posteriores de transversas C5-C7`,
  insertion: `Cara externa de la 2ª costilla`,
  innervation: `Ramos anteriores C6-C8`,
  action: [
    "Flexión lateral",
    "eleva la 2ª costilla"
  ],
  actionTags: [
    "flexor",
    "elevator"
  ],
  biomechanicalRole: `Accesorio respiratorio`,
  aesthetics: `Lateral del cuello`,
  trainingExercises: [],
  riskExercises: [
    "Tensión cervical"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Scalenus_posterior_muscle`,
  },
  {
  id: `mus-longus-colli`,
  legacyId: `MUS-016`,
  kind: `muscle`,
  nameEn: `Longus Colli`,
  nameEs: `Largo del Cuello`,
  synonyms: [
    "Largo del Cuello",
    "Longus Colli"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cuerpos de T1-T3 y transversas C3-C5`,
  insertion: `Tubérculo anterior del atlas (C1), cuerpos C2-C4`,
  innervation: `Ramos anteriores C2-C6`,
  action: [
    "Flexión del cuello y rotación contralateral"
  ],
  actionTags: [
    "flexor",
    "rotator"
  ],
  biomechanicalRole: `Estabilizador cervical profundo; clave en rehabilitación de 'cabeza adelantada'`,
  aesthetics: `No visible (profundo)`,
  trainingExercises: [
    "Chin-tuck (flexión craneocervical)",
    "Flexión cervical profunda"
  ],
  riskExercises: [
    "Inhibición en postura de cabeza adelantada"
  ],
  synergists: [
    "mus-longus-capitis"
  ],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Longus_colli_muscle`,
  },
  {
  id: `mus-longus-capitis`,
  legacyId: `MUS-017`,
  kind: `muscle`,
  nameEn: `Longus Capitis`,
  nameEs: `Largo de la Cabeza`,
  synonyms: [
    "Largo de la Cabeza",
    "Longus Capitis"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tubérculos anteriores de transversas C3-C6`,
  insertion: `Porción basilar del hueso occipital`,
  innervation: `Ramos anteriores C1-C4`,
  action: [
    "Flexión de la cabeza"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Flexor cervical profundo`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Chin-tuck"
  ],
  riskExercises: [
    "Inhibición postural"
  ],
  synergists: [
    "mus-longus-colli"
  ],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Longus_capitis_muscle`,
  },
  {
  id: `mus-rectus-capitis-anterior`,
  legacyId: `MUS-018`,
  kind: `muscle`,
  nameEn: `Rectus Capitis Anterior`,
  nameEs: `Recto Anterior de la Cabeza`,
  synonyms: [
    "Recto Anterior de la Cabeza",
    "Rectus Capitis Anterior"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Masa lateral del atlas (C1)`,
  insertion: `Porción basilar del occipital`,
  innervation: `Ramos anteriores C1-C2`,
  action: [
    "Flexión de la cabeza en la articulación atlantooccipital"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Flexor profundo de la cabeza`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Rectus_capitis_anterior_muscle`,
  },
  {
  id: `mus-rectus-capitis-lateralis`,
  legacyId: `MUS-019`,
  kind: `muscle`,
  nameEn: `Rectus Capitis Lateralis`,
  nameEs: `Recto Lateral de la Cabeza`,
  synonyms: [
    "Recto Lateral de la Cabeza",
    "Rectus Capitis Lateralis"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis transversa del atlas`,
  insertion: `Apófisis yugular del occipital`,
  innervation: `Ramos anteriores C1-C2`,
  action: [
    "Flexión lateral de la cabeza"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Estabilización atlantooccipital`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Rectus_capitis_lateralis_muscle`,
  },
  {
  id: `mus-splenius-capitis`,
  legacyId: `MUS-020`,
  kind: `muscle`,
  nameEn: `Splenius Capitis`,
  nameEs: `Esplenio de la Cabeza`,
  synonyms: [
    "Esplenio de la Cabeza",
    "Splenius Capitis"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Ligamento nucal y espinosas C7-T3`,
  insertion: `Apófisis mastoides y línea nucal superior`,
  innervation: `Ramos posteriores cervicales`,
  action: [
    "Extensión",
    "rotación ipsilateral y flexión lateral de la cabeza"
  ],
  actionTags: [
    "flexor",
    "extensor",
    "rotator"
  ],
  biomechanicalRole: `Extensor cervical; activo en posturas de extensión`,
  aesthetics: `Posterior del cuello`,
  trainingExercises: [
    "Extensión cervical con resistencia"
  ],
  riskExercises: [
    "Hiperextensión cervical cargada"
  ],
  synergists: [
    "mus-splenius-cervicis"
  ],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Splenius_capitis_muscle`,
  },
  {
  id: `mus-splenius-cervicis`,
  legacyId: `MUS-021`,
  kind: `muscle`,
  nameEn: `Splenius Cervicis`,
  nameEs: `Esplenio del Cuello`,
  synonyms: [
    "Esplenio del Cuello",
    "Splenius Cervicis"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis espinosas T3-T6`,
  insertion: `Tubérculos posteriores de transversas C1-C3`,
  innervation: `Ramos posteriores cervicales`,
  action: [
    "Extensión y rotación ipsilateral del cuello"
  ],
  actionTags: [
    "extensor",
    "rotator"
  ],
  biomechanicalRole: `Extensor cervical`,
  aesthetics: `Posterior del cuello`,
  trainingExercises: [
    "Extensión cervical"
  ],
  riskExercises: [
    "Hiperextensión cargada"
  ],
  synergists: [
    "mus-splenius-capitis"
  ],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Splenius_cervicis_muscle`,
  },
  {
  id: `mus-suboccipital-muscles`,
  legacyId: `MUS-022`,
  kind: `muscle`,
  nameEn: `Suboccipital Muscles`,
  nameEs: `Suboccipitales`,
  synonyms: [
    "Suboccipitales",
    "Suboccipital Muscles"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Occipital, atlas y axis (según músculo)`,
  insertion: `Occipital, atlas y axis`,
  innervation: `N. suboccipital (C1)`,
  action: [
    "Extensión y rotación fina de la cabeza"
  ],
  actionTags: [
    "extensor",
    "rotator"
  ],
  biomechanicalRole: `Alta densidad de husos → control propioceptivo; implicados en cefalea cervicogénica`,
  aesthetics: `No visible (profundos)`,
  trainingExercises: [
    "Chin-tuck",
    "Release suboccipital"
  ],
  riskExercises: [
    "Extensión sostenida",
    "Postura de cabeza adelantada"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Suboccipital_muscles`,
  },
  {
  id: `mus-suprahyoid-muscles`,
  legacyId: `MUS-023`,
  kind: `muscle`,
  nameEn: `Suprahyoid Muscles`,
  nameEs: `Suprahioideos`,
  synonyms: [
    "Suprahioideos",
    "Suprahyoid Muscles"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Mandíbula y apófisis estiloides`,
  insertion: `Hueso hioides`,
  innervation: `V3, VII, C1-C3`,
  action: [
    "Elevación del hioides",
    "asiste en apertura mandibular"
  ],
  actionTags: [
    "elevator",
    "masticator"
  ],
  biomechanicalRole: `Deglución y sostén hioideo`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Suprahyoid_muscles`,
  },
  {
  id: `mus-infrahyoid-muscles`,
  legacyId: `MUS-024`,
  kind: `muscle`,
  nameEn: `Infrahyoid Muscles`,
  nameEs: `Infrahioideos`,
  synonyms: [
    "Infrahioideos",
    "Infrahyoid Muscles"
  ],
  zone: `cervical`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Esternón, clavícula y escápula`,
  insertion: `Hueso hioides y cartílago tiroides`,
  innervation: `Asa cervical (C1-C3)`,
  action: [
    "Depresión del hioides y la laringe"
  ],
  actionTags: [
    "depressor"
  ],
  biomechanicalRole: `Deglución y fonación`,
  aesthetics: `Anterior del cuello`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Infrahyoid_muscles`,
  },
  {
  id: `mus-diaphragm`,
  legacyId: `MUS-025`,
  kind: `muscle`,
  nameEn: `Diaphragm`,
  nameEs: `Diafragma`,
  synonyms: [
    "Diafragma",
    "Diaphragm"
  ],
  zone: `chest`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Xifoides, costillas 7-12, L1-L3`,
  insertion: `Tendón central`,
  innervation: `N. frénico (C3-C5)`,
  action: [
    "Inspiración",
    "regula presión intraabdominal"
  ],
  actionTags: [
    "respiratory"
  ],
  biomechanicalRole: `'Techo' del core: coordina con transverso y suelo pélvico el brace`,
  aesthetics: `No aplica`,
  trainingExercises: [
    "Respiración diafragmática",
    "Hipopresivos",
    "Dead bug con respiración"
  ],
  riskExercises: [
    "Apneas/Valsalva máximos en hipertensos"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Thoracic_diaphragm`,
  },
  {
  id: `mus-external-intercostals`,
  legacyId: `MUS-026`,
  kind: `muscle`,
  nameEn: `External Intercostals`,
  nameEs: `Intercostales Externos`,
  synonyms: [
    "Intercostales Externos",
    "External Intercostals"
  ],
  zone: `chest`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Borde inferior de costillas 1-11`,
  insertion: `Borde superior de la costilla inferior`,
  innervation: `N. intercostales`,
  action: [
    "Inspiración (elevación de costillas)"
  ],
  actionTags: [
    "elevator",
    "respiratory"
  ],
  biomechanicalRole: `Accesorio respiratorio`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Respiración diafragmática"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `External_intercostal_muscles`,
  },
  {
  id: `mus-internal-intercostals`,
  legacyId: `MUS-027`,
  kind: `muscle`,
  nameEn: `Internal Intercostals`,
  nameEs: `Intercostales Internos`,
  synonyms: [
    "Intercostales Internos",
    "Internal Intercostals"
  ],
  zone: `chest`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Surco costal de costillas 1-11`,
  insertion: `Borde superior de la costilla inferior`,
  innervation: `N. intercostales`,
  action: [
    "Espiración forzada (descenso de costillas)"
  ],
  actionTags: [
    "respiratory"
  ],
  biomechanicalRole: `Estabilización de la pared torácica`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Internal_intercostal_muscles`,
  },
  {
  id: `mus-innermost-intercostals`,
  legacyId: `MUS-028`,
  kind: `muscle`,
  nameEn: `Innermost Intercostals`,
  nameEs: `Intercostales Íntimos`,
  synonyms: [
    "Intercostales Íntimos",
    "Innermost Intercostals"
  ],
  zone: `chest`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Capa profunda entre costillas`,
  insertion: `Costillas adyacentes`,
  innervation: `N. intercostales`,
  action: [
    "Asiste en la acción intercostal/estabilización"
  ],
  actionTags: [
    "stabilizer"
  ],
  biomechanicalRole: `Estabilización torácica`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Innermost_intercostal_muscles`,
  },
  {
  id: `mus-transversus-thoracis`,
  legacyId: `MUS-029`,
  kind: `muscle`,
  nameEn: `Transversus Thoracis`,
  nameEs: `Transverso del Tórax`,
  synonyms: [
    "Transverso del Tórax",
    "Transversus Thoracis"
  ],
  zone: `chest`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara posterior del esternón`,
  insertion: `Cartílagos costales 2-6`,
  innervation: `N. intercostales`,
  action: [
    "Espiración (descenso de costillas)"
  ],
  actionTags: [
    "respiratory"
  ],
  biomechanicalRole: `Accesorio respiratorio`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Transversus_thoracis_muscle`,
  },
  {
  id: `mus-subcostal-muscles`,
  legacyId: `MUS-030`,
  kind: `muscle`,
  nameEn: `Subcostal Muscles`,
  nameEs: `Subcostales`,
  synonyms: [
    "Subcostales",
    "Subcostal Muscles"
  ],
  zone: `chest`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara interna de costillas (pared torácica posterior)`,
  insertion: `Costillas inferiores`,
  innervation: `N. intercostales`,
  action: [
    "Asiste en espiración"
  ],
  actionTags: [
    "respiratory"
  ],
  biomechanicalRole: `Accesorio respiratorio`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Subcostal_muscle`,
  },
  {
  id: `mus-levatores-costarum`,
  legacyId: `MUS-031`,
  kind: `muscle`,
  nameEn: `Levatores Costarum`,
  nameEs: `Elevadores de las Costillas`,
  synonyms: [
    "Elevadores de las Costillas",
    "Levatores Costarum"
  ],
  zone: `chest`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis transversas C7-T11`,
  insertion: `Costilla inferior`,
  innervation: `Ramos posteriores`,
  action: [
    "Elevación de costillas (inspiración asistida)",
    "flexión lateral"
  ],
  actionTags: [
    "flexor",
    "elevator",
    "respiratory"
  ],
  biomechanicalRole: `Accesorio respiratorio`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Levatores_costarum`,
  },
  {
  id: `mus-rectus-abdominis`,
  legacyId: `MUS-032`,
  kind: `muscle`,
  nameEn: `Rectus Abdominis`,
  nameEs: `Recto Abdominal`,
  synonyms: [
    "Recto Abdominal",
    "Rectus Abdominis"
  ],
  zone: `core`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Sínfisis y cresta del pubis`,
  insertion: `Apófisis xifoides y cartílagos costales 5-7`,
  innervation: `N. intercostales T7-T12`,
  action: [
    "Flexión de tronco",
    "retroversión pélvica"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Frenador de extensión lumbar (brace); genera presión intraabdominal con transversos`,
  aesthetics: `'Six-pack' (visibilidad depende de % graso)`,
  trainingExercises: [
    "Crunch",
    "Elevación de piernas",
    "Plancha",
    "Crunch en polea"
  ],
  riskExercises: [
    "Flexión repetida cargada con cadera dominante (psoas)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Rectus_abdominis`,
  },
  {
  id: `mus-external-oblique`,
  legacyId: `MUS-033`,
  kind: `muscle`,
  nameEn: `External Oblique`,
  nameEs: `Oblicuo Externo`,
  synonyms: [
    "Oblicuo Externo",
    "External Oblique"
  ],
  zone: `core`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara externa de costillas 5-12`,
  insertion: `Línea alba, tubérculo púbico y cresta ilíaca anterior`,
  innervation: `T7-T12 e iliohipogástrico`,
  action: [
    "Flexión de tronco",
    "rotación contralateral y flexión lateral",
    "compresión abdominal"
  ],
  actionTags: [
    "flexor",
    "rotator"
  ],
  biomechanicalRole: `Rotación 'manos al bolsillo'; clave en core anti-rotación`,
  aesthetics: `Definición abdominal lateral`,
  trainingExercises: [
    "Russian twist",
    "Leñador (woodchopper)",
    "Crunch oblicuo"
  ],
  riskExercises: [
    "Rotación cargada excesiva"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Abdominal_external_oblique_muscle`,
  },
  {
  id: `mus-internal-oblique`,
  legacyId: `MUS-034`,
  kind: `muscle`,
  nameEn: `Internal Oblique`,
  nameEs: `Oblicuo Interno`,
  synonyms: [
    "Oblicuo Interno",
    "Internal Oblique"
  ],
  zone: `core`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Fascia toracolumbar, cresta ilíaca y ligamento inguinal`,
  insertion: `Línea alba, costillas 10-12 y pubis`,
  innervation: `T10-L1`,
  action: [
    "Flexión de tronco",
    "rotación ipsilateral y flexión lateral"
  ],
  actionTags: [
    "flexor",
    "rotator"
  ],
  biomechanicalRole: `Capa media del core`,
  aesthetics: `Abdomen lateral`,
  trainingExercises: [
    "Woodchopper ipsilateral",
    "Plancha lateral"
  ],
  riskExercises: [
    "Rotación cargada"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Abdominal_internal_oblique_muscle`,
  },
  {
  id: `mus-transversus-abdominis`,
  legacyId: `MUS-035`,
  kind: `muscle`,
  nameEn: `Transversus Abdominis`,
  nameEs: `Transverso Abdominal`,
  synonyms: [
    "Transverso Abdominal",
    "Transversus Abdominis"
  ],
  zone: `core`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cresta ilíaca, fascia toracolumbar, cartílagos costales`,
  insertion: `Línea alba, pubis`,
  innervation: `T7-L1`,
  action: [
    "Compresión abdominal",
    "estabilidad lumbopélvica anticipatoria"
  ],
  actionTags: [
    "stabilizer"
  ],
  biomechanicalRole: `'Cinturón natural': presuriza y estabiliza columna antes del movimiento`,
  aesthetics: `Vientre plano y cintura cerrada`,
  trainingExercises: [
    "Vacío abdominal (stomach vacuum)",
    "Plancha",
    "Dead bug",
    "Pallof press"
  ],
  riskExercises: [
    "Hipoactivación en dolor lumbar; no entrenarlo"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Transverse_abdominal_muscle`,
  },
  {
  id: `mus-pyramidalis`,
  legacyId: `MUS-036`,
  kind: `muscle`,
  nameEn: `Pyramidalis`,
  nameEs: `Piramidal`,
  synonyms: [
    "Piramidal",
    "Pyramidalis"
  ],
  zone: `core`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara anterior del pubis`,
  insertion: `Línea alba`,
  innervation: `T12`,
  action: [
    "Tensa la línea alba"
  ],
  actionTags: [
    "other"
  ],
  biomechanicalRole: `Vestigial (ausente en ~20%)`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Pyramidalis_muscle`,
  },
  {
  id: `mus-quadratus-lumborum`,
  legacyId: `MUS-037`,
  kind: `muscle`,
  nameEn: `Quadratus Lumborum`,
  nameEs: `Cuadrado Lumbar`,
  synonyms: [
    "Cuadrado Lumbar",
    "Quadratus Lumborum"
  ],
  zone: `core`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cresta ilíaca y ligamento iliolumbar`,
  insertion: `Transversas L1-L4 y 12ª costilla`,
  innervation: `T12-L3`,
  action: [
    "Flexión lateral del tronco",
    "deprime la 12ª costilla",
    "elevación pélvica"
  ],
  actionTags: [
    "flexor",
    "elevator",
    "depressor"
  ],
  biomechanicalRole: `Estabilizador en cargas unilaterales (maleta); su tensión se asocia a dolor lumbar`,
  aesthetics: `Fosa lumbar profunda`,
  trainingExercises: [
    "Paseo del granjero con maleta",
    "Plancha lateral",
    "Hike pélvico"
  ],
  riskExercises: [
    "Carga unilateral sin control",
    "Sedestación prolongada"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Quadratus_lumborum_muscle`,
  },
  {
  id: `mus-erector-spinae`,
  legacyId: `MUS-038`,
  kind: `muscle`,
  nameEn: `Erector Spinae`,
  nameEs: `Erector de la Columna`,
  synonyms: [
    "Erector de la Columna",
    "Erector Spinae"
  ],
  zone: `spine`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Sacro, cresta ilíaca, apófisis espinosas`,
  insertion: `Costillas, apófisis transversas/espinosas, cráneo`,
  innervation: `Ramos dorsales de nervios espinales`,
  action: [
    "Extensión y flexión lateral del tronco",
    "control postural"
  ],
  actionTags: [
    "flexor",
    "extensor"
  ],
  biomechanicalRole: `Anti-flexión en sentadilla/peso muerto; soporta momentos de carga lumbar`,
  aesthetics: `'Árbol de navidad' lumbar`,
  trainingExercises: [
    "Hiperextensiones",
    "Buenos días",
    "Peso muerto",
    "Sentadilla",
    "Bird dog"
  ],
  riskExercises: [
    "Flexión lumbar cargada + rotación",
    "Peso muerto con espalda redondeada"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Erector_spinae`,
  },
  {
  id: `mus-semispinalis`,
  legacyId: `MUS-041`,
  kind: `muscle`,
  nameEn: `Semispinalis`,
  nameEs: `Semiespinal`,
  synonyms: [
    "Semiespinal",
    "Semispinalis"
  ],
  zone: `spine`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis transversas`,
  insertion: `Apófisis espinosas cervicales/torácicas y occipital`,
  innervation: `Ramos posteriores`,
  action: [
    "Extensión de columna y cabeza",
    "rotación contralateral"
  ],
  actionTags: [
    "extensor",
    "rotator"
  ],
  biomechanicalRole: `Transversoespinal; estabilizador segmentario`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Extensión espinal controlada"
  ],
  riskExercises: [
    "Hiperextensión cargada"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Semispinalis_muscle`,
  },
  {
  id: `mus-multifidus`,
  legacyId: `MUS-042`,
  kind: `muscle`,
  nameEn: `Multifidus`,
  nameEs: `Multifidus`,
  synonyms: [
    "Multifidus"
  ],
  zone: `spine`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Sacro, cresta ilíaca y transversas`,
  insertion: `Espinosas 2-4 niveles superiores`,
  innervation: `Ramos posteriores`,
  action: [
    "Estabilización segmentaria",
    "extensión y rotación contralateral"
  ],
  actionTags: [
    "extensor",
    "rotator",
    "stabilizer"
  ],
  biomechanicalRole: `Estabilizador segmentario profundo; se atrofia en dolor lumbar crónico`,
  aesthetics: `No visible (profundo)`,
  trainingExercises: [
    "Bird dog",
    "Control motor segmentario lumbar"
  ],
  riskExercises: [
    "Inhibición en dolor lumbar"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Multifidus_muscle`,
  },
  {
  id: `mus-rotatores`,
  legacyId: `MUS-043`,
  kind: `muscle`,
  nameEn: `Rotatores`,
  nameEs: `Rotadores`,
  synonyms: [
    "Rotadores",
    "Rotatores"
  ],
  zone: `spine`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Entre transversas y espinosas adyacentes`,
  insertion: `Espinosas adyacentes`,
  innervation: `Ramos posteriores`,
  action: [
    "Rotación y estabilización segmentaria"
  ],
  actionTags: [
    "rotator",
    "stabilizer"
  ],
  biomechanicalRole: `Estabilizador segmentario corto`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Rotatores_muscle`,
  },
  {
  id: `mus-interspinales`,
  legacyId: `MUS-044`,
  kind: `muscle`,
  nameEn: `Interspinales`,
  nameEs: `Interespinosos`,
  synonyms: [
    "Interespinosos",
    "Interspinales"
  ],
  zone: `spine`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Entre espinosas adyacentes`,
  insertion: `Espinosas adyacentes`,
  innervation: `Ramos posteriores`,
  action: [
    "Asisten en extensión y estabilización"
  ],
  actionTags: [
    "extensor",
    "stabilizer"
  ],
  biomechanicalRole: `Estabilizadores cortos`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Interspinales_muscles`,
  },
  {
  id: `mus-intertransversarii`,
  legacyId: `MUS-045`,
  kind: `muscle`,
  nameEn: `Intertransversarii`,
  nameEs: `Intertransversos`,
  synonyms: [
    "Intertransversos",
    "Intertransversarii"
  ],
  zone: `spine`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Entre transversas adyacentes`,
  insertion: `Transversas adyacentes`,
  innervation: `Ramos posteriores`,
  action: [
    "Flexión lateral y estabilización segmentaria"
  ],
  actionTags: [
    "flexor",
    "stabilizer"
  ],
  biomechanicalRole: `Estabilizadores cortos laterales`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Intertransversarii_muscles`,
  },
  {
  id: `mus-trapezius`,
  legacyId: `MUS-046`,
  kind: `muscle`,
  nameEn: `Trapezius`,
  nameEs: `Trapecio`,
  synonyms: [
    "Trapecio",
    "Trapezius"
  ],
  zone: `back`,
  modelMeshes: {"upper-limb":["Ascending_part_of_Trapezius_muscler","Descending_part_of_Trapezius_muscler","Transverse_part_of_trapezius_muscler","Trapezius_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Protuberancia occipital, ligamento nucal, C7-T12`,
  insertion: `Tercio lateral de clavícula, acromion, espina de la escápula`,
  innervation: `N. accesorio (XI) y ramos C3-C4`,
  action: [
    "Superior: elevación",
    "medio: retracción",
    "inferior: depresión y rotación superior escapular"
  ],
  actionTags: [
    "rotator",
    "elevator",
    "depressor"
  ],
  biomechanicalRole: `Clave del ritmo escapulohumeral en overhead; estabiliza escápula en cargas`,
  aesthetics: `Marco cuello-hombro y densidad de espalda alta`,
  trainingExercises: [
    "Encogimientos",
    "Face pull",
    "Press militar",
    "Remos",
    "Y-raise"
  ],
  riskExercises: [
    "Encogimientos con rotación cervical",
    "Sobrecarga de haz superior vs inferior (discinesia)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Trapezius`,
  },
  {
  id: `mus-rhomboid-major`,
  legacyId: `MUS-047`,
  kind: `muscle`,
  nameEn: `Rhomboid Major`,
  nameEs: `Romboides Mayor`,
  synonyms: [
    "Romboides Mayor",
    "Rhomboid Major"
  ],
  zone: `back`,
  modelMeshes: {"upper-limb":["Rhomboid_major_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis espinosas T2-T5`,
  insertion: `Borde medial de la escápula (bajo la espina)`,
  innervation: `N. dorsal de la escápula (C5)`,
  action: [
    "Retracción",
    "rotación inferior y elevación de la escápula"
  ],
  actionTags: [
    "rotator",
    "elevator"
  ],
  biomechanicalRole: `Postura; contrarresta la protracción escapular`,
  aesthetics: `Densidad de espalda media`,
  trainingExercises: [
    "Remo",
    "Face pull",
    "Retracción escapular"
  ],
  riskExercises: [
    "Debilidad → hombros redondeados"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Rhomboid_major_muscle`,
  },
  {
  id: `mus-rhomboid-minor`,
  legacyId: `MUS-048`,
  kind: `muscle`,
  nameEn: `Rhomboid Minor`,
  nameEs: `Romboides Menor`,
  synonyms: [
    "Romboides Menor",
    "Rhomboid Minor"
  ],
  zone: `back`,
  modelMeshes: {"upper-limb":["Rhomboid_minor_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis espinosas C7-T1`,
  insertion: `Borde medial de la escápula a nivel de la espina`,
  innervation: `N. dorsal de la escápula (C5)`,
  action: [
    "Retracción escapular"
  ],
  actionTags: [
    "other"
  ],
  biomechanicalRole: `Postura escapular`,
  aesthetics: `Espalda media-alta`,
  trainingExercises: [
    "Remo",
    "Retracción escapular"
  ],
  riskExercises: [
    "Debilidad postural"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Rhomboid_minor_muscle`,
  },
  {
  id: `mus-levator-scapulae`,
  legacyId: `MUS-049`,
  kind: `muscle`,
  nameEn: `Levator Scapulae`,
  nameEs: `Elevador de la Escápula`,
  synonyms: [
    "Elevador de la Escápula",
    "Levator Scapulae"
  ],
  zone: `back`,
  modelMeshes: {"upper-limb":["Levator_scapulaer"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tubérculos posteriores de transversas C1-C4`,
  insertion: `Ángulo superior de la escápula`,
  innervation: `N. dorsal de la escápula (C3-C5)`,
  action: [
    "Elevación de la escápula",
    "rotación inferior y flexión lateral cervical"
  ],
  actionTags: [
    "flexor",
    "rotator",
    "elevator"
  ],
  biomechanicalRole: `Muy implicado en tensión y tortícolis`,
  aesthetics: `Cuello lateral`,
  trainingExercises: [
    "Encogimientos",
    "Estiramiento de trapecio/elevador"
  ],
  riskExercises: [
    "Tensión crónica",
    "Tortícolis",
    "Postura de cabeza adelantada"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Levator_scapulae_muscle`,
  },
  {
  id: `mus-latissimus-dorsi`,
  legacyId: `MUS-050`,
  kind: `muscle`,
  nameEn: `Latissimus Dorsi`,
  nameEs: `Dorsal Ancho`,
  synonyms: [
    "Dorsal Ancho",
    "Latissimus Dorsi"
  ],
  zone: `back`,
  modelMeshes: {"upper-limb":["Latissimus_dorsir"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis espinosas T7-L12, fascia toracolumbar, cresta ilíaca, costillas 9-12`,
  insertion: `Surco intertubercular del húmero`,
  innervation: `N. toracodorsal (C6-C8)`,
  action: [
    "Extensión",
    "aducción y rotación interna del húmero"
  ],
  actionTags: [
    "extensor",
    "adductor",
    "rotator"
  ],
  biomechanicalRole: `Motor primario de tracción vertical/horizontal; transfiere fuerza tronco-pelvis vía fascia toracolumbar`,
  aesthetics: `Amplitud en 'V' de la espalda`,
  trainingExercises: [
    "Dominadas",
    "Jalón al pecho",
    "Remos",
    "Pullover",
    "Peso muerto (sinergista)"
  ],
  riskExercises: [
    "Jalón tras nuca (estrés de ART-001)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Latissimus_dorsi`,
  },
  {
  id: `mus-teres-major`,
  legacyId: `MUS-051`,
  kind: `muscle`,
  nameEn: `Teres Major`,
  nameEs: `Redondo Mayor`,
  synonyms: [
    "Redondo Mayor",
    "Teres Major"
  ],
  zone: `back`,
  modelMeshes: {"upper-limb":["Teres_major_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Ángulo inferior de la escápula`,
  insertion: `Labio medial del surco intertubercular del húmero`,
  innervation: `N. subescapular inferior (C5-C7)`,
  action: [
    "Aducción",
    "rotación interna y extensión del húmero"
  ],
  actionTags: [
    "extensor",
    "adductor",
    "rotator"
  ],
  biomechanicalRole: `'Ayudante del dorsal'; activo en jalones y dominadas`,
  aesthetics: `Axila posterior`,
  trainingExercises: [
    "Dominadas",
    "Jalón al pecho",
    "Remo"
  ],
  riskExercises: [
    "Jalón tras nuca"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Teres_major_muscle`,
  },
  {
  id: `mus-pectoralis-major`,
  legacyId: `MUS-052`,
  kind: `muscle`,
  nameEn: `Pectoralis Major`,
  nameEs: `Pectoral Mayor`,
  synonyms: [
    "Pectoral Mayor",
    "Pectoralis Major"
  ],
  zone: `chest`,
  modelMeshes: {"upper-limb":["Abdominal_head_of_pectoralis_major_muscler","Clavicular_head_of_pectoralis_major_muscler","Pectoralis_majorr","Sternocostal_head_of_pectoralis_major_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Clavícula medial, esternón, cartílagos costales 1-6, aponeurosis del oblicuo externo`,
  insertion: `Labio lateral del surco intertubercular del húmero`,
  innervation: `N. pectorales medial y lateral (C5-T1)`,
  action: [
    "Aducción",
    "rotación interna",
    "flexión (clavicular) y extensión (esternocostal) del húmero"
  ],
  actionTags: [
    "flexor",
    "extensor",
    "adductor",
    "rotator"
  ],
  biomechanicalRole: `Motor primario de empuje horizontal; estabiliza el ritmo escapulatoral en press`,
  aesthetics: `Volumen y forma del torso; haz clavicular = 'pecho superior'`,
  trainingExercises: [
    "Press banca plano/inclinado",
    "Flexiones",
    "Cruces en polea",
    "Fondos",
    "Aperturas"
  ],
  riskExercises: [
    "Aperturas profundas con carga excesiva (estiramiento bajo carga)",
    "Press con rebote extremo"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Pectoralis_major`,
  },
  {
  id: `mus-pectoralis-minor`,
  legacyId: `MUS-053`,
  kind: `muscle`,
  nameEn: `Pectoralis Minor`,
  nameEs: `Pectoral Menor`,
  synonyms: [
    "Pectoral Menor",
    "Pectoralis Minor"
  ],
  zone: `chest`,
  modelMeshes: {"upper-limb":["Pectoralis_minor_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Costillas 3-5`,
  insertion: `Apófisis coracoides`,
  innervation: `N. pectoral medial (C8-T1)`,
  action: [
    "Depresión",
    "protracción y rotación inferior de la escápula"
  ],
  actionTags: [
    "rotator",
    "depressor"
  ],
  biomechanicalRole: `Estabilizador escapular; su acortamiento altera el ritmo escapulohumeral y favorece impingement`,
  aesthetics: `No visible (profundo)`,
  trainingExercises: [
    "Estiramiento en marco de puerta",
    "Release con pelota"
  ],
  riskExercises: [
    "Exceso de empuje sin trabajo de retracción escapular"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Pectoralis_minor`,
  },
  {
  id: `mus-subclavius`,
  legacyId: `MUS-054`,
  kind: `muscle`,
  nameEn: `Subclavius`,
  nameEs: `Subclavio`,
  synonyms: [
    "Subclavio",
    "Subclavius"
  ],
  zone: `chest`,
  modelMeshes: {"upper-limb":["Subclavius_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `1ª costilla`,
  insertion: `Surco subclavio de la clavícula`,
  innervation: `N. del subclavio (C5-C6)`,
  action: [
    "Deprime y estabiliza la clavícula"
  ],
  actionTags: [
    "stabilizer",
    "depressor"
  ],
  biomechanicalRole: `Relevante en síndrome del desfiladero torácico`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [
    "Compresión del desfiladero torácico"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Subclavius_muscle`,
  },
  {
  id: `mus-serratus-anterior`,
  legacyId: `MUS-055`,
  kind: `muscle`,
  nameEn: `Serratus Anterior`,
  nameEs: `Serrato Anterior`,
  synonyms: [
    "Serrato Anterior",
    "Serratus Anterior"
  ],
  zone: `back`,
  modelMeshes: {"upper-limb":["Serratus_anterior_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Costillas 1-8/9`,
  insertion: `Borde medial de la escápula`,
  innervation: `N. torácico largo (C5-C7)`,
  action: [
    "Protracción y rotación superior",
    "pega la escápula al tórax"
  ],
  actionTags: [
    "rotator"
  ],
  biomechanicalRole: `Imprescindible en overhead; previene escápula alada`,
  aesthetics: `'Dedos' visibles sobre costillas`,
  trainingExercises: [
    "Push-up plus",
    "Flexión escapular",
    "Press militar",
    "PNF D1"
  ],
  riskExercises: [
    "Lesión del n. torácico largo por tracción (mochilas pesadas, gestos overhead bruscos)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Serratus_anterior`,
  },
  {
  id: `mus-serratus-posterior-superior`,
  legacyId: `MUS-056`,
  kind: `muscle`,
  nameEn: `Serratus Posterior Superior`,
  nameEs: `Serrato Posterior Superior`,
  synonyms: [
    "Serrato Posterior Superior",
    "Serratus Posterior Superior"
  ],
  zone: `back`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis espinosas C7-T3`,
  insertion: `Costillas 2-5`,
  innervation: `N. intercostales`,
  action: [
    "Elevación de costillas (inspiración asistida)"
  ],
  actionTags: [
    "elevator",
    "respiratory"
  ],
  biomechanicalRole: `Accesorio respiratorio`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Serratus_posterior_superior_muscle`,
  },
  {
  id: `mus-serratus-posterior-inferior`,
  legacyId: `MUS-057`,
  kind: `muscle`,
  nameEn: `Serratus Posterior Inferior`,
  nameEs: `Serrato Posterior Inferior`,
  synonyms: [
    "Serrato Posterior Inferior",
    "Serratus Posterior Inferior"
  ],
  zone: `back`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis espinosas T11-L2`,
  insertion: `Costillas 9-12`,
  innervation: `N. intercostales`,
  action: [
    "Descenso de costillas (espiración)",
    "estabiliza la fascia toracolumbar"
  ],
  actionTags: [
    "stabilizer",
    "respiratory"
  ],
  biomechanicalRole: `Accesorio respiratorio y estabilizador toracolumbar`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Serratus_posterior_inferior_muscle`,
  },
  {
  id: `mus-sternalis`,
  legacyId: `MUS-058`,
  kind: `muscle`,
  nameEn: `Sternalis`,
  nameEs: `Esternal`,
  synonyms: [
    "Esternal",
    "Sternalis"
  ],
  zone: `back`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Variante anatómica delante del esternón`,
  insertion: `Esternón / fascia pectoral`,
  innervation: `Variable (pectorales)`,
  action: [
    "Desconocida (vestigial)"
  ],
  actionTags: [
    "other"
  ],
  biomechanicalRole: `Variante presente en ~8%; hallazgo quirúrgico`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Sternalis`,
  },
  {
  id: `mus-supraspinatus`,
  legacyId: `MUS-059`,
  kind: `muscle`,
  nameEn: `Supraspinatus`,
  nameEs: `Supraespinoso`,
  synonyms: [
    "Supraespinoso",
    "Supraspinatus"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Supraspinatus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Fosa supraespinosa`,
  insertion: `Faceta superior del tubérculo mayor`,
  innervation: `N. supraescapular (C5-C6)`,
  action: [
    "Inicia abducción (0-15°)",
    "comprime cabeza humeral"
  ],
  actionTags: [
    "abductor"
  ],
  biomechanicalRole: `Estabilizador dinámico superior; el más lesionado del manguito`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación externa isométrica/eccéntrica con banda",
    "Elevación lateral 0-30° en plano escapular",
    "Control escapular"
  ],
  riskExercises: [
    "Press tras nuca",
    "Upright row alto",
    "'Empty can' cargado",
    "Overhead repetido con discinesia"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Supraspinatus_muscle`,
  },
  {
  id: `mus-infraspinatus`,
  legacyId: `MUS-060`,
  kind: `muscle`,
  nameEn: `Infraspinatus`,
  nameEs: `Infraespinoso`,
  synonyms: [
    "Infraespinoso",
    "Infraspinatus"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Infraspinatus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Fosa infraespinosa`,
  insertion: `Faceta media del tubérculo mayor`,
  innervation: `N. supraescapular (C5-C6)`,
  action: [
    "Rotación externa del hombro y estabilización posterior"
  ],
  actionTags: [
    "rotator",
    "stabilizer"
  ],
  biomechanicalRole: `Decelerador en lanzamientos; clave en rotación externa`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación externa con banda",
    "Rotación externa con mancuerna (90/90)"
  ],
  riskExercises: [
    "Overhead repetido",
    "Lanzamientos"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Infraspinatus_muscle`,
  },
  {
  id: `mus-teres-minor`,
  legacyId: `MUS-061`,
  kind: `muscle`,
  nameEn: `Teres Minor`,
  nameEs: `Redondo Menor`,
  synonyms: [
    "Redondo Menor",
    "Teres Minor"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Teres_minor_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Borde lateral de la escápula`,
  insertion: `Faceta inferior del tubérculo mayor`,
  innervation: `N. axilar (C5-C6)`,
  action: [
    "Rotación externa",
    "asiste en aducción"
  ],
  actionTags: [
    "adductor",
    "rotator"
  ],
  biomechanicalRole: `Estabilizador del manguito`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación externa"
  ],
  riskExercises: [
    "Overhead"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Teres_minor_muscle`,
  },
  {
  id: `mus-subscapularis`,
  legacyId: `MUS-062`,
  kind: `muscle`,
  nameEn: `Subscapularis`,
  nameEs: `Subescapular`,
  synonyms: [
    "Subescapular",
    "Subscapularis"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Subscapularis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Fosa subescapular`,
  insertion: `Tubérculo menor del húmero`,
  innervation: `N. subescapulares superior/inferior`,
  action: [
    "Rotación interna y estabilización anterior del húmero"
  ],
  actionTags: [
    "rotator",
    "stabilizer"
  ],
  biomechanicalRole: `Frena traslación anterior (protege luxación)`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación interna con banda (isométrico→eccéntrico)",
    "Bear hug"
  ],
  riskExercises: [
    "Rotación externa forzada bajo carga (press tras nuca)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Subscapularis`,
  },
  {
  id: `mus-deltoideus-anterior`,
  legacyId: `MUS-063`,
  kind: `muscle`,
  nameEn: `Deltoideus Anterior`,
  nameEs: `Deltoide Anterior`,
  synonyms: [
    "Deltoide Anterior",
    "Deltoideus Anterior"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Clavicular_part_of_deltoid_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tercio lateral de la clavícula`,
  insertion: `Tuberosidad deltoidea del húmero`,
  innervation: `N. axilar (C5-C6)`,
  action: [
    "Flexión de hombro",
    "rotación interna y abducción horizontal"
  ],
  actionTags: [
    "flexor",
    "abductor",
    "rotator"
  ],
  biomechanicalRole: `Muy activo en press banca y overhead. Fibras casi horizontales al plano escapular`,
  aesthetics: `Redondez anterior del hombro`,
  trainingExercises: [
    "Press militar",
    "Press banca",
    "Elevaciones frontales",
    "Arnold press"
  ],
  riskExercises: [
    "Overhead excesivo sin movilidad escapular"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Deltoid_muscle`,
  },
  {
  id: `mus-deltoideus-medius`,
  legacyId: `MUS-064`,
  kind: `muscle`,
  nameEn: `Deltoideus Medius`,
  nameEs: `Deltoide Medio`,
  synonyms: [
    "Deltoide Medio",
    "Deltoideus Medius"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Acromial_part_of_deltoid_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Acromion`,
  insertion: `Tuberosidad deltoidea del húmero`,
  innervation: `N. axilar (C5-C6)`,
  action: [
    "Abducción del hombro (15-90°)"
  ],
  actionTags: [
    "abductor"
  ],
  biomechanicalRole: `Abductor principal; ensancha la silueta`,
  aesthetics: `Amplitura de hombros`,
  trainingExercises: [
    "Elevaciones laterales",
    "Press militar"
  ],
  riskExercises: [
    "Impingement con técnica pobre"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Deltoid_muscle`,
  },
  {
  id: `mus-deltoideus-posterior`,
  legacyId: `MUS-065`,
  kind: `muscle`,
  nameEn: `Deltoideus Posterior`,
  nameEs: `Deltoide Posterior`,
  synonyms: [
    "Deltoide Posterior",
    "Deltoideus Posterior"
  ],
  zone: `shoulder`,
  modelMeshes: {"upper-limb":["Spinal_part_of_deltoid_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Espina de la escápula`,
  insertion: `Tuberosidad deltoidea del húmero`,
  innervation: `N. axilar (C5-C6)`,
  action: [
    "Extensión",
    "abducción horizontal y rotación externa del hombro"
  ],
  actionTags: [
    "extensor",
    "abductor",
    "rotator"
  ],
  biomechanicalRole: `Balance postural; deltoide posterior a menudo infraentrenado`,
  aesthetics: `Redondez posterior del hombro`,
  trainingExercises: [
    "Pájaros",
    "Face pull",
    "Remo al mentón amplio"
  ],
  riskExercises: [
    "Sobreuso en tracción horizontal"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Deltoid_muscle`,
  },
  {
  id: `mus-biceps-brachii`,
  legacyId: `MUS-066`,
  kind: `muscle`,
  nameEn: `Biceps Brachii`,
  nameEs: `Bíceps Braquial`,
  synonyms: [
    "Bíceps Braquial",
    "Biceps Brachii"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Long_head_of_biceps_brachiir","Short_head_of_biceps_brachiir"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tubérculo supraglenoideo (cabeza larga) y coracoides (cabeza corta)`,
  insertion: `Tuberosidad radial y aponeurosis bicipital`,
  innervation: `N. musculocutáneo (C5-C6)`,
  action: [
    "Flexión de codo",
    "supinación",
    "flexión de hombro"
  ],
  actionTags: [
    "flexor",
    "supinator"
  ],
  biomechanicalRole: `Supinador potente y flexor; la cabeza larga estabiliza el hombro`,
  aesthetics: `'Pico' del brazo`,
  trainingExercises: [
    "Curl barra/mancuerna",
    "Chin-up",
    "Curl martillo"
  ],
  riskExercises: [
    "Eccéntricos máximos en frío (ruptura distal)",
    "Overhead repetido con tendinopatía"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Biceps`,
  },
  {
  id: `mus-brachialis`,
  legacyId: `MUS-067`,
  kind: `muscle`,
  nameEn: `Brachialis`,
  nameEs: `Braquial`,
  synonyms: [
    "Braquial",
    "Brachialis"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Brachialis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara anterolateral del húmero distal`,
  insertion: `Apófisis coronoides y tuberosidad de la ulna`,
  innervation: `Musculocutáneo (+ramo radial)`,
  action: [
    "Flexión pura de codo (independiente de supinación)"
  ],
  actionTags: [
    "flexor",
    "supinator"
  ],
  biomechanicalRole: `'Caballo de batalla' de la flexión; empuja el bíceps hacia arriba`,
  aesthetics: `Anchura del brazo visto de frente`,
  trainingExercises: [
    "Curl martillo",
    "Curl inverso"
  ],
  riskExercises: [
    "Sobrecarga de agarre cerrado repetitivo sin descarga"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Brachialis_muscle`,
  },
  {
  id: `mus-coracobrachialis`,
  legacyId: `MUS-068`,
  kind: `muscle`,
  nameEn: `Coracobrachialis`,
  nameEs: `Coracobraquial`,
  synonyms: [
    "Coracobraquial",
    "Coracobrachialis"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Coracobrachialis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Apófisis coracoides`,
  insertion: `Cara medial del cuerpo del húmero`,
  innervation: `N. musculocutáneo (C5-C7)`,
  action: [
    "Flexión y aducción del hombro"
  ],
  actionTags: [
    "flexor",
    "adductor"
  ],
  biomechanicalRole: `Estabilizador anterior del hombro`,
  aesthetics: `Axila anterior`,
  trainingExercises: [
    "Press banca (asiste)",
    "Curl con aducción"
  ],
  riskExercises: [
    "Luxación anterior (compromiso)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Coracobrachialis_muscle`,
  },
  {
  id: `mus-triceps-brachii`,
  legacyId: `MUS-069`,
  kind: `muscle`,
  nameEn: `Triceps Brachii`,
  nameEs: `Tríceps Braquial`,
  synonyms: [
    "Tríceps Braquial",
    "Triceps Brachii"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Lateral_head_of_triceps_brachiir","Long_head_of_triceps_brachiir","Medial_head_of_triceps_brachiir"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tubérculo infraglenoideo (cabeza larga) y cara posterior del húmero`,
  insertion: `Olécranon`,
  innervation: `N. radial (C6-C8)`,
  action: [
    "Extensión de codo",
    "la cabeza larga extiende el hombro"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `~2/3 del volumen del brazo; estabiliza empujes`,
  aesthetics: `Volumen posterior del brazo`,
  trainingExercises: [
    "Press cerrado",
    "Fondos",
    "Extensiones en polea",
    "Rompecráneos"
  ],
  riskExercises: [
    "Extensiones máximas con codo en flexión extrema cargada"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Triceps`,
  },
  {
  id: `mus-anconeus`,
  legacyId: `MUS-070`,
  kind: `muscle`,
  nameEn: `Anconeus`,
  nameEs: `Aconeo`,
  synonyms: [
    "Aconeo",
    "Anconeus"
  ],
  zone: `arm`,
  modelMeshes: {"upper-limb":["Anconeus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo lateral del húmero`,
  insertion: `Cara lateral del olécranon`,
  innervation: `N. radial (C7-C8)`,
  action: [
    "Asiste en extensión de codo",
    "estabiliza la articulación"
  ],
  actionTags: [
    "extensor",
    "stabilizer"
  ],
  biomechanicalRole: `Estabilizador menor del codo`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Extensión de codo"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Anconeus_muscle`,
  },
  {
  id: `mus-pronator-teres`,
  legacyId: `MUS-071`,
  kind: `muscle`,
  nameEn: `Pronator Teres`,
  nameEs: `Pronador Redondo`,
  synonyms: [
    "Pronador Redondo",
    "Pronator Teres"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"upper-limb":["Humeral_head_of_pronator_teresr","Ulnar_head_of_pronator_teresr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo medial (cabeza humeral) y apófisis coronoides (cabeza cubital)`,
  insertion: `Cara lateral del radio (1/3 medio)`,
  innervation: `N. mediano`,
  action: [
    "Pronación y flexión de codo"
  ],
  actionTags: [
    "flexor",
    "pronator"
  ],
  biomechanicalRole: `Pronador principal`,
  aesthetics: `Antebrazo anteromedial`,
  trainingExercises: [
    "Pronación con banda"
  ],
  riskExercises: [
    "Sobreuso"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Pronator_teres`,
  },
  {
  id: `mus-flexor-carpi-radialis`,
  legacyId: `MUS-072`,
  kind: `muscle`,
  nameEn: `Flexor Carpi Radialis`,
  nameEs: `Flexor Radial del Carpo`,
  synonyms: [
    "Flexor Radial del Carpo",
    "Flexor Carpi Radialis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Flexor_carpi_radialis"], "upper-limb": ["Flexor_carpi_radialisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo medial del húmero`,
  insertion: `Base del 2º (y 3º) metacarpiano`,
  innervation: `N. mediano`,
  action: [
    "Flexión de muñeca y desviación radial"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Flexor principal de muñeca`,
  aesthetics: `Antebrazo anterior`,
  trainingExercises: [
    "Curl de muñeca"
  ],
  riskExercises: [
    "Sobreuso de agarre"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_carpi_radialis_muscle`,
  },
  {
  id: `mus-palmaris-longus`,
  legacyId: `MUS-073`,
  kind: `muscle`,
  nameEn: `Palmaris Longus`,
  nameEs: `Palmar Largo`,
  synonyms: [
    "Palmar Largo",
    "Palmaris Longus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Palmaris_longus_muscle"], "upper-limb": ["Palmaris_longus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo medial`,
  insertion: `Aponeurosis palmar`,
  innervation: `N. mediano`,
  action: [
    "Tensa la aponeurosis palmar (flexor débil de muñeca)"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Vestigial (ausente en ~15%); usado como injerto tendinoso`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Palmaris_longus_muscle`,
  },
  {
  id: `mus-flexor-carpi-ulnaris`,
  legacyId: `MUS-074`,
  kind: `muscle`,
  nameEn: `Flexor Carpi Ulnaris`,
  nameEs: `Flexor Cubital del Carpo`,
  synonyms: [
    "Flexor Cubital del Carpo",
    "Flexor Carpi Ulnaris"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"upper-limb":["Humeral_head_of_flexor_carpi_ulnarisr","Ulnar_head_of_flexor_carpi_ulnarisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo medial (cabeza humeral) y olécranon (cabeza cubital)`,
  insertion: `Pisiforme, ganchoso y base del 5º metacarpiano`,
  innervation: `N. ulnar`,
  action: [
    "Flexión de muñeca y desviación cubital"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Flexor cubital; relevante en neuropatía ulnar`,
  aesthetics: `Antebrazo medial`,
  trainingExercises: [
    "Curl de muñeca"
  ],
  riskExercises: [
    "Sobreuso"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_carpi_ulnaris_muscle`,
  },
  {
  id: `mus-flexor-digitorum-superficialis`,
  legacyId: `MUS-075`,
  kind: `muscle`,
  nameEn: `Flexor Digitorum Superficialis`,
  nameEs: `Flexor Superficial de los Dedos`,
  synonyms: [
    "Flexor Superficial de los Dedos",
    "Flexor Digitorum Superficialis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Flexor_digitorum_superficialis_humeral_head"], "upper-limb": ["Flexor_digitorum_superficialis_humero-ulnar_headr", "Flexor_digitorum_superficialis_radial_headr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo medial, radio y cúbito`,
  insertion: `Falanges medias (dedos 2-5)`,
  innervation: `N. mediano`,
  action: [
    "Flexión de articulaciones interfalángicas proximales"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Prensión`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Agarre"
  ],
  riskExercises: [
    "Sobreuso de agarre"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_digitorum_superficialis_muscle`,
  },
  {
  id: `mus-flexor-digitorum-profundus`,
  legacyId: `MUS-076`,
  kind: `muscle`,
  nameEn: `Flexor Digitorum Profundus`,
  nameEs: `Flexor Profundo de los Dedos`,
  synonyms: [
    "Flexor Profundo de los Dedos",
    "Flexor Digitorum Profundus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Flexor_digitorum_profundus"], "upper-limb": ["Flexor_digitorum_profundusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cúbito y membrana interósea`,
  insertion: `Falanges distales (dedos 2-5)`,
  innervation: `Mediano (lateral) y ulnar (medial)`,
  action: [
    "Flexión de articulaciones interfalángicas distales"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Prensión fina`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Agarre"
  ],
  riskExercises: [
    "Sobreuso de agarre"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_digitorum_profundus_muscle`,
  },
  {
  id: `mus-flexor-pollicis-longus`,
  legacyId: `MUS-077`,
  kind: `muscle`,
  nameEn: `Flexor Pollicis Longus`,
  nameEs: `Flexor Largo del Pulgar`,
  synonyms: [
    "Flexor Largo del Pulgar",
    "Flexor Pollicis Longus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Flexor_pollicis_longus"], "upper-limb": ["Flexor_pollicis_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Radio y membrana interósea`,
  insertion: `Falange distal del pulgar`,
  innervation: `N. mediano (interóseo anterior)`,
  action: [
    "Flexión del pulgar"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Pinza del pulgar`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Agarre de pinza"
  ],
  riskExercises: [
    "Sobreuso"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_pollicis_longus_muscle`,
  },
  {
  id: `mus-pronator-quadratus`,
  legacyId: `MUS-078`,
  kind: `muscle`,
  nameEn: `Pronator Quadratus`,
  nameEs: `Pronador Cuadrado`,
  synonyms: [
    "Pronador Cuadrado",
    "Pronator Quadratus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Pronator_quadratus"], "upper-limb": ["Pronator_quadratusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cúbito distal`,
  insertion: `Radio distal`,
  innervation: `N. mediano (interóseo anterior)`,
  action: [
    "Pronación del antebrazo"
  ],
  actionTags: [
    "pronator"
  ],
  biomechanicalRole: `Pronador profundo`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Pronación con banda"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Pronator_quadratus_muscle`,
  },
  {
  id: `mus-brachioradialis`,
  legacyId: `MUS-079`,
  kind: `muscle`,
  nameEn: `Brachioradialis`,
  nameEs: `Braquiorradial`,
  synonyms: [
    "Braquiorradial",
    "Brachioradialis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Brachioradialis_muscle"], "upper-limb": ["Brachioradialis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cresta supracondílea lateral del húmero`,
  insertion: `Apófisis estiloides del radio`,
  innervation: `N. radial`,
  action: [
    "Flexión de codo con antebrazo en posición neutra"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Flexor de codo en posición de martillo`,
  aesthetics: `Antebrazo lateral`,
  trainingExercises: [
    "Curl martillo",
    "Curl en pronación"
  ],
  riskExercises: [
    "Sobreuso"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Brachioradialis`,
  },
  {
  id: `mus-extensor-carpi-radialis-longus`,
  legacyId: `MUS-080`,
  kind: `muscle`,
  nameEn: `Extensor Carpi Radialis Longus`,
  nameEs: `Extensor Radial Largo del Carpo`,
  synonyms: [
    "Extensor Radial Largo del Carpo",
    "Extensor Carpi Radialis Longus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Extensor_carpi_radialis_longus"], "upper-limb": ["Extensor_carpi_radialis_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cresta supracondílea lateral`,
  insertion: `Base del 2º metacarpiano`,
  innervation: `N. radial`,
  action: [
    "Extensión de muñeca y desviación radial"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Extensor radial largo`,
  aesthetics: `Antebrazo posterior`,
  trainingExercises: [
    "Extensión de muñeca"
  ],
  riskExercises: [
    "Epicondilitis (región)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_carpi_radialis_longus_muscle`,
  },
  {
  id: `mus-extensor-carpi-radialis-brevis`,
  legacyId: `MUS-081`,
  kind: `muscle`,
  nameEn: `Extensor Carpi Radialis Brevis`,
  nameEs: `Extensor Radial Corto del Carpo`,
  synonyms: [
    "Extensor Radial Corto del Carpo",
    "Extensor Carpi Radialis Brevis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Extensor_carpi_radialis_brevis"], "upper-limb": ["Extensor_carpi_radialis_brevisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo lateral`,
  insertion: `Base del 3º metacarpiano`,
  innervation: `N. radial (interóseo posterior)`,
  action: [
    "Extensión de muñeca y desviación radial"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Músculo clave en la epicondilitis lateral`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Extensión de muñeca"
  ],
  riskExercises: [
    "Epicondilitis lateral (codo de tenista)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_carpi_radialis_brevis_muscle`,
  },
  {
  id: `mus-extensor-digitorum`,
  legacyId: `MUS-082`,
  kind: `muscle`,
  nameEn: `Extensor Digitorum`,
  nameEs: `Extensor de los Dedos`,
  synonyms: [
    "Extensor de los Dedos",
    "Extensor Digitorum"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Extensor_digitorum"], "upper-limb": ["Extensor_digitorumr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo lateral del húmero`,
  insertion: `Expansión dorsal (dedos 2-5)`,
  innervation: `N. radial (interóseo posterior)`,
  action: [
    "Extensión de muñeca y dedos"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Extensor digital principal`,
  aesthetics: `Antebrazo posterior`,
  trainingExercises: [
    "Extensión de dedos con banda"
  ],
  riskExercises: [
    "Sobreuso"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_digitorum_muscle`,
  },
  {
  id: `mus-extensor-digiti-minimi`,
  legacyId: `MUS-083`,
  kind: `muscle`,
  nameEn: `Extensor Digiti Minimi`,
  nameEs: `Extensor del Meñique`,
  synonyms: [
    "Extensor del Meñique",
    "Extensor Digiti Minimi"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Extensor_digiti_minimi"], "upper-limb": ["Extensor_digiti_minimir"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo lateral`,
  insertion: `Expansión dorsal del 5º dedo`,
  innervation: `N. radial`,
  action: [
    "Extensión del 5º dedo"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Extensor del meñique`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_digiti_minimi_muscle`,
  },
  {
  id: `mus-extensor-carpi-ulnaris`,
  legacyId: `MUS-084`,
  kind: `muscle`,
  nameEn: `Extensor Carpi Ulnaris`,
  nameEs: `Extensor Cubital del Carpo`,
  synonyms: [
    "Extensor Cubital del Carpo",
    "Extensor Carpi Ulnaris"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"upper-limb":["Humeral_head_of_extensor_carpi_ulnarisr","Ulnar_head_of_extensor_carpi_ulnarisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo lateral y cúbito`,
  insertion: `Base del 5º metacarpiano`,
  innervation: `N. radial (interóseo posterior)`,
  action: [
    "Extensión de muñeca y desviación cubital"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Extensor cubital`,
  aesthetics: `Antebrazo posterior medial`,
  trainingExercises: [
    "Extensión de muñeca"
  ],
  riskExercises: [
    "Sobreuso"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_carpi_ulnaris_muscle`,
  },
  {
  id: `mus-supinator`,
  legacyId: `MUS-085`,
  kind: `muscle`,
  nameEn: `Supinator`,
  nameEs: `Supinador`,
  synonyms: [
    "Supinador",
    "Supinator"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"upper-limb":["Supinatorr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Epicóndilo lateral y cresta del supinador del cúbito`,
  insertion: `Radio proximal`,
  innervation: `N. radial (interóseo posterior)`,
  action: [
    "Supinación del antebrazo"
  ],
  actionTags: [
    "supinator"
  ],
  biomechanicalRole: `Supinador principal`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Supinación con banda/mancuerna"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Supinator_muscle`,
  },
  {
  id: `mus-abductor-pollicis-longus`,
  legacyId: `MUS-086`,
  kind: `muscle`,
  nameEn: `Abductor Pollicis Longus`,
  nameEs: `Abductor Largo del Pulgar`,
  synonyms: [
    "Abductor Largo del Pulgar",
    "Abductor Pollicis Longus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Abductor_pollicis_longus"], "upper-limb": ["Abductor_pollicis_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cúbito, radio y membrana interósea`,
  insertion: `Base del 1º metacarpiano`,
  innervation: `N. radial`,
  action: [
    "Abducción del pulgar y desviación radial"
  ],
  actionTags: [
    "abductor"
  ],
  biomechanicalRole: `Implicado en tenosinovitis de De Quervain`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [
    "Tenosinovitis de De Quervain"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Abductor_pollicis_longus_muscle`,
  },
  {
  id: `mus-extensor-pollicis-brevis`,
  legacyId: `MUS-087`,
  kind: `muscle`,
  nameEn: `Extensor Pollicis Brevis`,
  nameEs: `Extensor Corto del Pulgar`,
  synonyms: [
    "Extensor Corto del Pulgar",
    "Extensor Pollicis Brevis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Extensor_pollicis_brevis"], "upper-limb": ["Extensor_pollicis_brevisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Radio y membrana interósea`,
  insertion: `Falange proximal del pulgar`,
  innervation: `N. radial`,
  action: [
    "Extensión del pulgar"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Implicado en De Quervain`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [
    "Tenosinovitis de De Quervain"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_pollicis_brevis_muscle`,
  },
  {
  id: `mus-extensor-pollicis-longus`,
  legacyId: `MUS-088`,
  kind: `muscle`,
  nameEn: `Extensor Pollicis Longus`,
  nameEs: `Extensor Largo del Pulgar`,
  synonyms: [
    "Extensor Largo del Pulgar",
    "Extensor Pollicis Longus"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Extensor_pollicis_longus"], "upper-limb": ["Extensor_pollicis_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cúbito y membrana interósea`,
  insertion: `Falange distal del pulgar`,
  innervation: `N. radial`,
  action: [
    "Extensión del pulgar"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Delimita la tabaquera anatómica`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_pollicis_longus_muscle`,
  },
  {
  id: `mus-extensor-indicis`,
  legacyId: `MUS-089`,
  kind: `muscle`,
  nameEn: `Extensor Indicis`,
  nameEs: `Extensor del Índice`,
  synonyms: [
    "Extensor del Índice",
    "Extensor Indicis"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["Extensor_indicis"], "upper-limb": ["Extensor_indicisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cúbito y membrana interósea`,
  insertion: `Expansión dorsal del índice`,
  innervation: `N. radial`,
  action: [
    "Extensión del índice"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Extensión independiente del índice`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_indicis_muscle`,
  },
  {
  id: `mus-thenar-muscles`,
  legacyId: `MUS-090`,
  kind: `muscle`,
  nameEn: `Thenar Muscles`,
  nameEs: `Eminencia Tenar`,
  synonyms: [
    "Eminencia Tenar",
    "Thenar Muscles"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Abductor_pollicis_brevis","Deep_head_of_flexor_pollicis_brevis","Opponens_pollicis_muscle","Superficial_head_of_flexor_pollicis_brevis"],"upper-limb":["Abductor_pollicis_brevisr","Deep_head_of_flexor_pollicis_brevisr","Opponens_pollicis_muscler","Superficial_head_of_flexor_pollicis_brevisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Huesos carpianos`,
  insertion: `Pulgar`,
  innervation: `N. mediano (rama recurrente), excepto aductor (ulnar)`,
  action: [
    "Oposición",
    "flexión",
    "abducción y aducción del pulgar"
  ],
  actionTags: [
    "flexor",
    "abductor",
    "adductor"
  ],
  biomechanicalRole: `Pinza y prensión; afectados en síndrome del túnel carpiano`,
  aesthetics: `Eminencia tenar`,
  trainingExercises: [
    "Pinza con putty",
    "Oposición con banda"
  ],
  riskExercises: [
    "Síndrome del túnel carpiano (atrofia tenar)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Thenar_muscles`,
  },
  {
  id: `mus-hypothenar-muscles`,
  legacyId: `MUS-091`,
  kind: `muscle`,
  nameEn: `Hypothenar Muscles`,
  nameEs: `Eminencia Hipotenar`,
  synonyms: [
    "Eminencia Hipotenar",
    "Hypothenar Muscles"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["Abductor_digiti_minimi","Flexor_digiti_minimi_brevis_of_hand","Opponens_digiti_minimi_muscle_of_hand","Palmaris_brevis_muscle"],"upper-limb":["Abductor_digiti_minimir","Flexor_digiti_minimi_brevis_of_handr","Opponens_digiti_minimi_muscle_of_handr","Palmaris_brevis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Pisiforme y ganchoso`,
  insertion: `5º dedo`,
  innervation: `N. ulnar`,
  action: [
    "Movimientos del 5º dedo (abducción",
    "flexión",
    "oposición)"
  ],
  actionTags: [
    "flexor",
    "abductor"
  ],
  biomechanicalRole: `Prensión; afectados en neuropatía ulnar`,
  aesthetics: `Eminencia hipotenar`,
  trainingExercises: [],
  riskExercises: [
    "Compresión del canal de Guyon"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Hypothenar_muscles`,
  },
  {
  id: `mus-lumbrical-muscles-of-hand`,
  legacyId: `MUS-092`,
  kind: `muscle`,
  nameEn: `Lumbrical Muscles of Hand`,
  nameEs: `Lumbricales de la Mano`,
  synonyms: [
    "Lumbricales de la Mano",
    "Lumbrical Muscles of Hand"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["1st_lumbrical_of_hand","2nd_lumbrical_of_hand","3rd_lumbrical_of_hand","4th_lumbrical_of_hand"],"upper-limb":["1st_lumbrical_of_handr","2nd_lumbrical_of_handr","3rd_lumbrical_of_handr","4th_lumbrical_of_handr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tendones del flexor digitorum profundus`,
  insertion: `Expansión dorsal (dedos 2-5)`,
  innervation: `Mediano (1-2) y ulnar (3-4)`,
  action: [
    "Flexión MCP + extensión IP ('agarre lumbrical')"
  ],
  actionTags: [
    "flexor",
    "extensor"
  ],
  biomechanicalRole: `Motricidad fina`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Extensión con banda"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Lumbrical_muscles_of_hand`,
  },
  {
  id: `mus-palmar-interossei`,
  legacyId: `MUS-093`,
  kind: `muscle`,
  nameEn: `Palmar Interossei`,
  nameEs: `Interóseos Palmares`,
  synonyms: [
    "Interóseos Palmares",
    "Palmar Interossei"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand": ["1st_palmar_interosseus_of_hand", "2nd_palmar_interosseus_of_hand", "3rd_palmar_interosseus_of_hand"], "upper-limb": ["1st_palmar_interosseus_of_handr", "2nd_palmar_interosseus_of_handr", "3rd_palmar_interosseus_of_handr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Metacarpianos`,
  insertion: `Falanges proximales y expansión dorsal`,
  innervation: `N. ulnar`,
  action: [
    "Aducción de los dedos (PAD)"
  ],
  actionTags: [
    "adductor"
  ],
  biomechanicalRole: `Prensión y estabilidad digital`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Aducción con papel entre dedos"
  ],
  riskExercises: [
    "Atrofia en neuropatía ulnar"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Palmar_interossei`,
  },
  {
  id: `mus-dorsal-interossei-of-hand`,
  legacyId: `MUS-094`,
  kind: `muscle`,
  nameEn: `Dorsal Interossei of Hand`,
  nameEs: `Interóseos Dorsales de la Mano`,
  synonyms: [
    "Interóseos Dorsales de la Mano",
    "Dorsal Interossei of Hand"
  ],
  zone: `forearm-hand`,
  modelMeshes: {"hand":["1st_dorsal_interosseus_of_hand","2nd_dorsal_interosseus_of_hand","3rd_dorsal_interosseus_of_hand","4th_dorsal_interosseus_of_hand"],"upper-limb":["1st_dorsal_interosseus_of_handr","2nd_dorsal_interosseus_of_handr","3rd_dorsal_interosseus_of_handr","4th_dorsal_interosseus_of_handr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Metacarpianos adyacentes`,
  insertion: `Falanges proximales y expansión dorsal`,
  innervation: `N. ulnar`,
  action: [
    "Abducción de los dedos (DAB)"
  ],
  actionTags: [
    "abductor"
  ],
  biomechanicalRole: `Prensión y estabilidad digital`,
  aesthetics: `Dorso de la mano`,
  trainingExercises: [
    "Abducción con banda"
  ],
  riskExercises: [
    "Atrofia en neuropatía ulnar"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Dorsal_interossei_of_hand`,
  },
  {
  id: `mus-psoas-major`,
  legacyId: `MUS-095`,
  kind: `muscle`,
  nameEn: `Psoas Major`,
  nameEs: `Psoas Mayor`,
  synonyms: [
    "Psoas Mayor",
    "Psoas Major"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Psoas_majorr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cuerpos vertebrales T12-L5 y discos intervertebrales`,
  insertion: `Trocanter menor del fémur (junto al ilíaco)`,
  innervation: `Ramos directos del plexo lumbar (L1-L3)`,
  action: [
    "Flexión de cadera",
    "flexión lateral de la columna lumbar"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Principal flexor de cadera; el acortamiento genera hiperlordosis e impingement`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Elevación de piernas",
    "Rodillas al pecho",
    "Sprint"
  ],
  riskExercises: [
    "Sedestación prolongada + falta de extensión (acortamiento)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Psoas_major_muscle`,
  },
  {
  id: `mus-psoas-minor`,
  legacyId: `MUS-096`,
  kind: `muscle`,
  nameEn: `Psoas Minor`,
  nameEs: `Psoas Menor`,
  synonyms: [
    "Psoas Menor",
    "Psoas Minor"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Psoas_minorr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cuerpos T12-L1`,
  insertion: `Línea pectínea del pubis / fascia ilíaca`,
  innervation: `Ramos anteriores L1-L2`,
  action: [
    "Flexión débil del tronco",
    "tensa la fascia ilíaca"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Vestigial (ausente en ~40%)`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Psoas_minor_muscle`,
  },
  {
  id: `mus-iliacus`,
  legacyId: `MUS-097`,
  kind: `muscle`,
  nameEn: `Iliacus`,
  nameEs: `Ilíaco`,
  synonyms: [
    "Ilíaco",
    "Iliacus"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Iliacus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Fosa ilíaca`,
  insertion: `Trocanter menor (junto al psoas)`,
  innervation: `N. femoral (L2-L3)`,
  action: [
    "Flexión de cadera"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Junto al psoas forma el iliopsoas`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Elevación de piernas",
    "Flexión de cadera con banda"
  ],
  riskExercises: [
    "Acortamiento por sedestación"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Iliacus_muscle`,
  },
  {
  id: `mus-sartorius`,
  legacyId: `MUS-098`,
  kind: `muscle`,
  nameEn: `Sartorius`,
  nameEs: `Sartorio`,
  synonyms: [
    "Sartorio",
    "Sartorius"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Sartorius_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Espina ilíaca anterosuperior (EIAS)`,
  insertion: `Pata de ganso (tibia medial)`,
  innervation: `N. femoral (L2-L3)`,
  action: [
    "Flexión",
    "abducción y rotación externa de cadera",
    "flexión de rodilla"
  ],
  actionTags: [
    "flexor",
    "abductor",
    "rotator"
  ],
  biomechanicalRole: `'Músculo del sastre'; el más largo del cuerpo`,
  aesthetics: `Diagonal del muslo`,
  trainingExercises: [
    "Flexión de cadera",
    "Sentadilla profunda"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Sartorius_muscle`,
  },
  {
  id: `mus-pectineus`,
  legacyId: `MUS-099`,
  kind: `muscle`,
  nameEn: `Pectineus`,
  nameEs: `Pectíneo`,
  synonyms: [
    "Pectíneo",
    "Pectineus"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Pectineus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Pecten del pubis`,
  insertion: `Línea pectínea del fémur`,
  innervation: `N. femoral (+ obturador accesorio)`,
  action: [
    "Flexión y aducción de cadera"
  ],
  actionTags: [
    "flexor",
    "adductor"
  ],
  biomechanicalRole: `Región inguinal; implicado en pubalgia`,
  aesthetics: `Ingle`,
  trainingExercises: [
    "Aducción"
  ],
  riskExercises: [
    "Pubalgia / deportes de cambio de dirección"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Pectineus_muscle`,
  },
  {
  id: `mus-gluteus-maximus`,
  legacyId: `MUS-100`,
  kind: `muscle`,
  nameEn: `Gluteus Maximus`,
  nameEs: `Glúteo Mayor`,
  synonyms: [
    "Glúteo Mayor",
    "Gluteus Maximus"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Gluteus_maximus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Ilión, sacro, cóccix, fascia toracolumbar`,
  insertion: `Tuberosidad glútea y tracto iliotibial`,
  innervation: `N. glúteo inferior (L5-S2)`,
  action: [
    "Extensión y rotación externa de cadera"
  ],
  actionTags: [
    "extensor",
    "rotator"
  ],
  biomechanicalRole: `Extensor más potente de cadera; estabiliza pelvis en carga`,
  aesthetics: `Volumen glúteo`,
  trainingExercises: [
    "Hip thrust",
    "Sentadilla",
    "Peso muerto",
    "Puente de glúteo"
  ],
  riskExercises: [
    "Inhibición/amnesia glútea por sedentarismo (compensa lumbar)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Gluteus_maximus`,
  },
  {
  id: `mus-gluteus-medius`,
  legacyId: `MUS-101`,
  kind: `muscle`,
  nameEn: `Gluteus Medius`,
  nameEs: `Glúteo Medio`,
  synonyms: [
    "Glúteo Medio",
    "Gluteus Medius"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Gluteus_medius_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara externa del ilion`,
  insertion: `Trocanter mayor`,
  innervation: `N. glúteo superior (L4-S1)`,
  action: [
    "Abducción de cadera",
    "estabiliza pelvis en apoyo unipodal"
  ],
  actionTags: [
    "abductor",
    "stabilizer"
  ],
  biomechanicalRole: `Evita caída pélvica contralateral (Trendelenburg) al correr/caminar`,
  aesthetics: `Forma superior-lateral del glúteo`,
  trainingExercises: [
    "Abducción lateral con banda",
    "Side plank con abducción",
    "Sentadilla unipodal",
    "Monster walk"
  ],
  riskExercises: [
    "Estiramiento en aducción cruzada bajo carga (TEN-010)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Gluteus_medius`,
  },
  {
  id: `mus-gluteus-minimus`,
  legacyId: `MUS-102`,
  kind: `muscle`,
  nameEn: `Gluteus Minimus`,
  nameEs: `Glúteo Menor`,
  synonyms: [
    "Glúteo Menor",
    "Gluteus Minimus"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Gluteus_minimus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara externa del ilion`,
  insertion: `Trocanter mayor`,
  innervation: `N. glúteo superior (L4-S1)`,
  action: [
    "Abducción y rotación interna de cadera"
  ],
  actionTags: [
    "abductor",
    "rotator"
  ],
  biomechanicalRole: `Estabilizador pélvico; tendinopatía en dolor trocantérico`,
  aesthetics: `Glúteo profundo`,
  trainingExercises: [
    "Abducción de cadera",
    "Side plank"
  ],
  riskExercises: [
    "Estiramiento en aducción cruzada"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Gluteus_minimus_muscle`,
  },
  {
  id: `mus-tensor-fasciae-latae`,
  legacyId: `MUS-103`,
  kind: `muscle`,
  nameEn: `Tensor Fasciae Latae`,
  nameEs: `Tensor de la Fascia Lata`,
  synonyms: [
    "Tensor de la Fascia Lata",
    "Tensor Fasciae Latae"
  ],
  zone: `hip`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cresta ilíaca anterior y EIAS`,
  insertion: `Banda iliotibial → tubérculo de Gerdy`,
  innervation: `N. glúteo superior`,
  action: [
    "Abducción y rotación interna de cadera",
    "tensa la banda iliotibial"
  ],
  actionTags: [
    "abductor",
    "rotator"
  ],
  biomechanicalRole: `ESTABILIZADOR de la pelvis en apoyo unipodal. Implicado en síndrome de fricción de la banda iliotibial ('rodilla del corredor') cuando glúteo medio está débil`,
  aesthetics: `Cadera lateral`,
  trainingExercises: [
    "Abducción de cadera con banda",
    "Monster walk",
    "Sentadilla lateral con banda"
  ],
  riskExercises: [
    "Carrera/ciclismo con glúteo medio débil",
    "Sobreuso"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Tensor_fasciae_latae_muscle`,
  },
  {
  id: `mus-piriformis`,
  legacyId: `MUS-104`,
  kind: `muscle`,
  nameEn: `Piriformis`,
  nameEs: `Piriforme`,
  synonyms: [
    "Piriforme",
    "Piriformis"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Piriformis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara anterior del sacro`,
  insertion: `Trocanter mayor`,
  innervation: `Ramos L5-S2`,
  action: [
    "Rotación externa",
    "abducción con cadera flexionada"
  ],
  actionTags: [
    "flexor",
    "abductor",
    "rotator"
  ],
  biomechanicalRole: `Estabilizador de cadera; el ciático pasa cercano → pseudociática`,
  aesthetics: `No aplica`,
  trainingExercises: [
    "Estiramiento en figura 4",
    "Clamshell",
    "Rotación externa con banda"
  ],
  riskExercises: [
    "Sedestación prolongada + sobreuso (síndrome piramidal)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Piriformis_muscle`,
  },
  {
  id: `mus-obturator-internus`,
  legacyId: `MUS-105`,
  kind: `muscle`,
  nameEn: `Obturator Internus`,
  nameEs: `Obturador Interno`,
  synonyms: [
    "Obturador Interno",
    "Obturator Internus"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Obturator_internusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara interna de la membrana obturatriz`,
  insertion: `Fosa trocantérica (trocanter mayor)`,
  innervation: `N. del obturador interno (L5-S2)`,
  action: [
    "Rotación externa de cadera"
  ],
  actionTags: [
    "rotator"
  ],
  biomechanicalRole: `Rotador profundo`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación externa con banda"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Obturator_internus_muscle`,
  },
  {
  id: `mus-obturator-externus`,
  legacyId: `MUS-106`,
  kind: `muscle`,
  nameEn: `Obturator Externus`,
  nameEs: `Obturador Externo`,
  synonyms: [
    "Obturador Externo",
    "Obturator Externus"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb":["Obturator_externusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara externa de la membrana obturatriz`,
  insertion: `Fosa trocantérica`,
  innervation: `N. obturador`,
  action: [
    "Rotación externa de cadera"
  ],
  actionTags: [
    "rotator"
  ],
  biomechanicalRole: `Rotador profundo`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación externa"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Obturator_externus_muscle`,
  },
  {
  id: `mus-superior-gemellus`,
  legacyId: `MUS-107`,
  kind: `muscle`,
  nameEn: `Superior Gemellus`,
  nameEs: `Gemelo Superior`,
  synonyms: [
    "Gemelo Superior",
    "Superior Gemellus"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Superior_gemellus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Espina isquiática`,
  insertion: `Trocanter mayor (con el tendón del obturador interno)`,
  innervation: `N. del obturador interno`,
  action: [
    "Rotación externa de cadera"
  ],
  actionTags: [
    "rotator"
  ],
  biomechanicalRole: `Rotador profundo`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación externa"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Superior_gemellus_muscle`,
  },
  {
  id: `mus-inferior-gemellus`,
  legacyId: `MUS-108`,
  kind: `muscle`,
  nameEn: `Inferior Gemellus`,
  nameEs: `Gemelo Inferior`,
  synonyms: [
    "Gemelo Inferior",
    "Inferior Gemellus"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Inferior_gemellus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tuberosidad isquiática`,
  insertion: `Trocanter mayor`,
  innervation: `N. del cuadrado femoral`,
  action: [
    "Rotación externa de cadera"
  ],
  actionTags: [
    "rotator"
  ],
  biomechanicalRole: `Rotador profundo`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación externa"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Inferior_gemellus_muscle`,
  },
  {
  id: `mus-quadratus-femoris`,
  legacyId: `MUS-109`,
  kind: `muscle`,
  nameEn: `Quadratus Femoris`,
  nameEs: `Cuadrado Femoral`,
  synonyms: [
    "Cuadrado Femoral",
    "Quadratus Femoris"
  ],
  zone: `hip`,
  modelMeshes: {"lower-limb": ["Quadratus_femoris_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tuberosidad isquiática`,
  insertion: `Cresta intertrocantérica`,
  innervation: `N. del cuadrado femoral (L4-S1)`,
  action: [
    "Rotación externa y estabilización de cadera"
  ],
  actionTags: [
    "rotator",
    "stabilizer"
  ],
  biomechanicalRole: `Rotador profundo; estabilizador de la cabeza femoral`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Rotación externa"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Quadratus_femoris_muscle`,
  },
  {
  id: `mus-rectus-femoris`,
  legacyId: `MUS-110A`,
  kind: `muscle`,
  nameEn: `Rectus Femoris`,
  nameEs: `Recto Femoral`,
  synonyms: [
    "Recto Femoral",
    "Rectus Femoris"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb":["Rectus_femorisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Espina ilíaca anteroinferior (EIAI) y reborde del acetábulo`,
  insertion: `Tuberosidad tibial (vía tendón patelar)`,
  innervation: `Nervio femoral (L2-L4)`,
  action: [
    "Flexión de cadera + extensión de rodilla"
  ],
  actionTags: [
    "flexor",
    "extensor"
  ],
  biomechanicalRole: `ÚNICO biarticular del cuádriceps. PARADOJA DE LOMBARD: en sentadilla apenas cambia de longitud por flexión simultánea de cadera y rodilla. Requiere extensión de rodilla aislada o sissy squat para hipertrofia`,
  aesthetics: `Centro del muslo anterior`,
  trainingExercises: [
    "Extensión de rodilla en máquina",
    "Sissy squat",
    "Elevación de piernas",
    "Sentadilla búlgara (mayor activación)"
  ],
  riskExercises: [
    "Sprint máximo sin calentamiento (desgarro en unión miotendinosa)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Rectus_femoris_muscle`,
  },
  {
  id: `mus-vastus-lateralis`,
  legacyId: `MUS-110B`,
  kind: `muscle`,
  nameEn: `Vastus Lateralis`,
  nameEs: `Vasto Lateral`,
  synonyms: [
    "Vasto Lateral",
    "Vastus Lateralis"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb": ["Vastus_lateralis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Trocánter mayor, línea intertrocantérea, línea áspera y septo intermuscular lateral`,
  insertion: `Tuberosidad tibial (vía tendón patelar)`,
  innervation: `Nervio femoral (L2-L4)`,
  action: [
    "Extensión de rodilla"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Mayor cabeza del cuádriceps. Tracción LATERAL de la rótula. Dominante en sentadilla. Su hipertrofia puede contribuir a dolor femoropatelar si hay desbalance con VMO`,
  aesthetics: `Volumen lateral del muslo`,
  trainingExercises: [
    "Sentadilla",
    "Prensa de piernas",
    "Extensión de rodilla",
    "Sentadilla búlgara"
  ],
  riskExercises: [
    "Picos de volumen sin trabajo de VMO"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Vastus_lateralis_muscle`,
  },
  {
  id: `mus-vastus-medialis-obliquus`,
  legacyId: `MUS-110C`,
  kind: `muscle`,
  nameEn: `Vastus Medialis Obliquus`,
  nameEs: `Vasto Medial Oblicuo (VMO)`,
  synonyms: [
    "Vasto Medial Oblicuo (VMO)",
    "Vastus Medialis Obliquus"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb":["Vastus_medialis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Línea intertrocantérea, línea áspera, septo intermuscular medial y tendón del aductor mayor`,
  insertion: `Tuberosidad tibial (vía tendón patelar)`,
  innervation: `Nervio femoral (L2-L4)`,
  action: [
    "Extensión de rodilla"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `CRÍTICO para tracking patelar. Sus fibras oblicuas (55°) traccionan la rótula MEDIALMENTE, contrarrestando el vasto lateral. Atrofia/inhibición = síndrome de dolor femoropatelar (SDFP). Se activa en los últimos 10-15° de extensión`,
  aesthetics: `'Lágrima' medial del muslo`,
  trainingExercises: [
    "Sentadilla parcial profunda",
    "Extensión de rodilla con énfasis en bloqueo",
    "Step-down controlado",
    "Terminal knee extension (TKE) con banda"
  ],
  riskExercises: [
    "Inhibición refleja por dolor/derrame articular",
    "Picos de volumen sin trabajo específico"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Vastus_medialis_muscle`,
  },
  {
  id: `mus-vastus-intermedius`,
  legacyId: `MUS-110D`,
  kind: `muscle`,
  nameEn: `Vastus Intermedius`,
  nameEs: `Vasto Intermedio`,
  synonyms: [
    "Vasto Intermedio",
    "Vastus Intermedius"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb": ["Vastus_intermedius_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara anterior y lateral del fémur (2/3 superiores)`,
  insertion: `Tuberosidad tibial (vía tendón patelar)`,
  innervation: `Nervio femoral (L2-L4)`,
  action: [
    "Extensión de rodilla"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Profundo al recto femoral. Contribuye significativamente a la extensión`,
  aesthetics: `No visible (profundo al recto femoral)`,
  trainingExercises: [
    "Sentadilla",
    "Prensa",
    "Extensión de rodilla"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Vastus_intermedius_muscle`,
  },
  {
  id: `mus-articularis-genu`,
  legacyId: `MUS-114`,
  kind: `muscle`,
  nameEn: `Articularis Genu`,
  nameEs: `Articular de la Rodilla`,
  synonyms: [
    "Articular de la Rodilla",
    "Articularis Genu"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb":["Articularis_genusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cara anterior del fémur distal`,
  insertion: `Receso suprarrotuliano / membrana sinovial`,
  innervation: `N. femoral`,
  action: [
    "Retracción de la membrana sinovial durante la extensión de rodilla"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Accesorio de la rodilla`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Articularis_genus_muscle`,
  },
  {
  id: `mus-biceps-femoris-long-head`,
  legacyId: `MUS-115A`,
  kind: `muscle`,
  nameEn: `Biceps Femoris Long Head`,
  nameEs: `Bíceps Femoral - Cabeza Larga`,
  synonyms: [
    "Bíceps Femoral - Cabeza Larga",
    "Biceps Femoris Long Head"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb":["Long_head_of_biceps_femorisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tuberosidad isquiática (tendón conjunto con semitendinoso)`,
  insertion: `Cabeza del peroné`,
  innervation: `Porción tibial del nervio ciático (L5-S2)`,
  action: [
    "Flexión de rodilla + extensión de cadera + rotación externa de tibia"
  ],
  actionTags: [
    "flexor",
    "extensor",
    "rotator"
  ],
  biomechanicalRole: `BIARTICULAR. Principal sitio de desgarro en sprint (unión miotendinosa proximal). Altamente reclutado en RDL y peso muerto`,
  aesthetics: `Volumen lateral posterior del muslo`,
  trainingExercises: [
    "Peso muerto rumano",
    "Peso muerto rumano una pierna",
    "Hip thrust",
    "Nordic curl"
  ],
  riskExercises: [
    "Sprint sin progresión (desgarro)",
    "RDL con técnica pobre"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Biceps_femoris_muscle`,
  },
  {
  id: `mus-biceps-femoris-short-head`,
  legacyId: `MUS-115B`,
  kind: `muscle`,
  nameEn: `Biceps Femoris Short Head`,
  nameEs: `Bíceps Femoral - Cabeza Corta`,
  synonyms: [
    "Bíceps Femoral - Cabeza Corta",
    "Biceps Femoris Short Head"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb":["Short_head_of_biceps_femorisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Línea áspera del fémur (1/3 medio-distal)`,
  insertion: `Cabeza del peroné`,
  innervation: `Porción fibular del nervio ciático (L5-S2)`,
  action: [
    "Flexión de rodilla + rotación externa de tibia"
  ],
  actionTags: [
    "flexor",
    "rotator"
  ],
  biomechanicalRole: `MONOARTICULAR (solo cruza rodilla). NO se estimula eficientemente en RDL/peso muerto. Requiere ejercicios de flexión de rodilla aislada`,
  aesthetics: `Lateral posterior del muslo (distal)`,
  trainingExercises: [
    "Leg curl sentado",
    "Leg curl tumbado",
    "Nordic curl",
    "Glute-ham raise"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Biceps_femoris_muscle`,
  },
  {
  id: `mus-semitendinosus`,
  legacyId: `MUS-116`,
  kind: `muscle`,
  nameEn: `Semitendinosus`,
  nameEs: `Semitendinoso`,
  synonyms: [
    "Semitendinoso",
    "Semitendinosus"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb": ["Semitendinosus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tuberosidad isquiática (tendón conjunto con bíceps femoral cabeza larga)`,
  insertion: `Cara medial de la tibia proximal (pata de ganso)`,
  innervation: `Porción tibial del nervio ciático (L5-S2)`,
  action: [
    "Flexión de rodilla + extensión de cadera + rotación interna de tibia"
  ],
  actionTags: [
    "flexor",
    "extensor",
    "rotator"
  ],
  biomechanicalRole: `BIARTICULAR. Su tendón se usa frecuentemente como injerto para reconstrucción del LCA. Contribuye a la pata de ganso`,
  aesthetics: `Medial posterior del muslo`,
  trainingExercises: [
    "RDL",
    "Peso muerto",
    "Nordic curl",
    "Hip thrust"
  ],
  riskExercises: [
    "Desgarro en sprint"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Semitendinosus_muscle`,
  },
  {
  id: `mus-semimembranosus`,
  legacyId: `MUS-117`,
  kind: `muscle`,
  nameEn: `Semimembranosus`,
  nameEs: `Semimembranoso`,
  synonyms: [
    "Semimembranoso",
    "Semimembranosus"
  ],
  zone: `thigh`,
  zones: [
    "knee",
    "hip"
  ],
  modelMeshes: {"lower-limb": ["Semimembranosus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tuberosidad isquiática`,
  insertion: `Cóndilo medial de la tibia (múltiples inserciones)`,
  innervation: `Porción tibial del nervio ciático (L5-S2)`,
  action: [
    "Flexión de rodilla + extensión de cadera + rotación interna de tibia"
  ],
  actionTags: [
    "flexor",
    "extensor",
    "rotator"
  ],
  biomechanicalRole: `BIARTICULAR. El más profundo de los isquios. Estabilizador posteromedial de la rodilla`,
  aesthetics: `Profundo, contribuye al volumen medial`,
  trainingExercises: [
    "RDL",
    "Peso muerto",
    "Nordic curl"
  ],
  riskExercises: [
    "Desgarro en sprint"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Semimembranosus_muscle`,
  },
  {
  id: `mus-adductor-magnus`,
  legacyId: `MUS-118`,
  kind: `muscle`,
  nameEn: `Adductor Magnus`,
  nameEs: `Aductor Mayor`,
  synonyms: [
    "Aductor Mayor",
    "Adductor Magnus"
  ],
  zone: `hip`,
  zones: [
    "thigh"
  ],
  modelMeshes: {"lower-limb":["Adductor_magnusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Rama isquiopubiana y tuberosidad isquiática`,
  insertion: `Línea áspera del fémur y tubérculo aductor`,
  innervation: `N. obturador (porción aductora) y ciático (porción extensora)`,
  action: [
    "Aducción (porción aductora)",
    "extensión de cadera (porción isquiotibial)"
  ],
  actionTags: [
    "extensor",
    "adductor"
  ],
  biomechanicalRole: `El más grande y fuerte de los aductores. La porción isquiotibial asiste en extensión de cadera`,
  aesthetics: `Cara medial del muslo`,
  trainingExercises: [
    "Sentadilla sumo",
    "Peso muerto sumo",
    "Plancha Copenhague"
  ],
  riskExercises: [
    "Desgarro en cambios de dirección"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Adductor_magnus_muscle`,
  },
  {
  id: `mus-adductor-longus`,
  legacyId: `MUS-119`,
  kind: `muscle`,
  nameEn: `Adductor Longus`,
  nameEs: `Aductor Largo`,
  synonyms: [
    "Aductor Largo",
    "Adductor Longus"
  ],
  zone: `hip`,
  zones: [
    "thigh"
  ],
  modelMeshes: {"lower-limb":["Adductor_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cuerpo del pubis`,
  insertion: `Línea áspera del fémur (1/3 medio)`,
  innervation: `N. obturador (L2-L4)`,
  action: [
    "Aducción de cadera"
  ],
  actionTags: [
    "adductor"
  ],
  biomechanicalRole: `Más comúnmente lesionado en deportistas. Sitio típico de pubalgia`,
  aesthetics: `Cara medial del muslo`,
  trainingExercises: [
    "Aducción con máquina",
    "Plancha Copenhague",
    "Sentadilla sumo"
  ],
  riskExercises: [
    "Cambios de dirección",
    "Pubalgia"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Adductor_longus_muscle`,
  },
  {
  id: `mus-adductor-brevis`,
  legacyId: `MUS-120`,
  kind: `muscle`,
  nameEn: `Adductor Brevis`,
  nameEs: `Aductor Corto`,
  synonyms: [
    "Aductor Corto",
    "Adductor Brevis"
  ],
  zone: `hip`,
  zones: [
    "thigh"
  ],
  modelMeshes: {"lower-limb":["Adductor_brevisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cuerpo del pubis`,
  insertion: `Línea áspera del fémur (1/3 proximal)`,
  innervation: `N. obturador (L2-L4)`,
  action: [
    "Aducción de cadera"
  ],
  actionTags: [
    "adductor"
  ],
  biomechanicalRole: `Aductor profundo`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Aducción"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Adductor_brevis_muscle`,
  },
  {
  id: `mus-adductor-minimus`,
  legacyId: `MUS-121`,
  kind: `muscle`,
  nameEn: `Adductor Minimus`,
  nameEs: `Aductor Mínimo`,
  synonyms: [
    "Aductor Mínimo",
    "Adductor Minimus"
  ],
  zone: `hip`,
  zones: [
    "thigh"
  ],
  modelMeshes: {"lower-limb":["Adductor_minimus_overlayr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Rama isquiopubiana`,
  insertion: `Línea áspera del fémur`,
  innervation: `N. obturador`,
  action: [
    "Aducción de cadera"
  ],
  actionTags: [
    "adductor"
  ],
  biomechanicalRole: `Vestigial (presente en ~60%)`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Adductor_minimus_muscle`,
  },
  {
  id: `mus-gracilis`,
  legacyId: `MUS-122`,
  kind: `muscle`,
  nameEn: `Gracilis`,
  nameEs: `Grácil`,
  synonyms: [
    "Grácil",
    "Gracilis"
  ],
  zone: `hip`,
  zones: [
    "thigh"
  ],
  modelMeshes: {"lower-limb": ["Gracilis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Rama púbica inferior`,
  insertion: `Pata de ganso (tibia medial)`,
  innervation: `N. obturador (L2-L3)`,
  action: [
    "Aducción de cadera",
    "flexión de rodilla y rotación interna de tibia"
  ],
  actionTags: [
    "flexor",
    "adductor",
    "rotator"
  ],
  biomechanicalRole: `El más superficial de los aductores. Contribuye a la pata de ganso`,
  aesthetics: `Cara medial del muslo`,
  trainingExercises: [
    "Aducción",
    "Copenhagen plank"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Gracilis_muscle`,
  },
  {
  id: `mus-tibialis-anterior`,
  legacyId: `MUS-123`,
  kind: `muscle`,
  nameEn: `Tibialis Anterior`,
  nameEs: `Tibial Anterior`,
  synonyms: [
    "Tibial Anterior",
    "Tibialis Anterior"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb": ["Tibialis_anterior_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cóndilo lateral y borde anterior de tibia`,
  insertion: `Cuneiforme medial y base del 1er metatarsiano`,
  innervation: `N. fibular profundo (L4-L5)`,
  action: [
    "Dorsiflexión e inversión"
  ],
  actionTags: [
    "flexor",
    "invertor"
  ],
  biomechanicalRole: `Controla el apoyo del pie (evita 'foot slap') y frena en carrera`,
  aesthetics: `No aplica`,
  trainingExercises: [
    "Dorsiflexión con banda",
    "Caminar de talones"
  ],
  riskExercises: [
    "Picos de carrera → periostitis tibial (shin splints)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Tibialis_anterior_muscle`,
  },
  {
  id: `mus-extensor-hallucis-longus`,
  legacyId: `MUS-124`,
  kind: `muscle`,
  nameEn: `Extensor Hallucis Longus`,
  nameEs: `Extensor Largo del Hallux`,
  synonyms: [
    "Extensor Largo del Hallux",
    "Extensor Hallucis Longus"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb":["Extensor_hallucis_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Peroné y membrana interósea`,
  insertion: `Falange distal del hallux`,
  innervation: `N. fibular profundo`,
  action: [
    "Extensión del hallux",
    "asiste en dorsiflexión"
  ],
  actionTags: [
    "flexor",
    "extensor"
  ],
  biomechanicalRole: `Extensor del dedo gordo`,
  aesthetics: `Dorso del pie`,
  trainingExercises: [
    "Extensión del hallux con banda"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_hallucis_longus_muscle`,
  },
  {
  id: `mus-extensor-digitorum-longus`,
  legacyId: `MUS-125`,
  kind: `muscle`,
  nameEn: `Extensor Digitorum Longus`,
  nameEs: `Extensor Largo de los Dedos`,
  synonyms: [
    "Extensor Largo de los Dedos",
    "Extensor Digitorum Longus"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb":["Extensor_digitorum_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cóndilo lateral de la tibia, peroné y membrana interósea`,
  insertion: `Falanges de los dedos 2-5`,
  innervation: `N. fibular profundo`,
  action: [
    "Extensión de los dedos y dorsiflexión"
  ],
  actionTags: [
    "flexor",
    "extensor"
  ],
  biomechanicalRole: `Extensor digital`,
  aesthetics: `Dorso de la pierna`,
  trainingExercises: [
    "Extensión de dedos con banda"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_digitorum_longus_muscle`,
  },
  {
  id: `mus-fibularis-tertius`,
  legacyId: `MUS-126`,
  kind: `muscle`,
  nameEn: `Fibularis Tertius`,
  nameEs: `Fibular Tercero`,
  synonyms: [
    "Fibular Tercero",
    "Fibularis Tertius"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb": ["Fibularis_tertius_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Peroné distal`,
  insertion: `Base del 5º metatarsiano`,
  innervation: `N. fibular profundo`,
  action: [
    "Dorsiflexión y eversión"
  ],
  actionTags: [
    "flexor",
    "evertor"
  ],
  biomechanicalRole: `Variable (puede estar ausente)`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Fibularis_tertius_muscle`,
  },
  {
  id: `mus-fibularis-longus`,
  legacyId: `MUS-127`,
  kind: `muscle`,
  nameEn: `Fibularis Longus`,
  nameEs: `Fibular Largo`,
  synonyms: [
    "Fibular Largo",
    "Fibularis Longus"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb": ["Fibularis_longus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cabeza y cuerpo del peroné`,
  insertion: `Base 5º metatarsiano (corto); 1er metatarsiano/cuneiforme (largo)`,
  innervation: `N. fibular superficial`,
  action: [
    "Eversión y flexión plantar",
    "sostén del arco lateral"
  ],
  actionTags: [
    "flexor",
    "evertor"
  ],
  biomechanicalRole: `Primera defensa contra el esguince en inversión`,
  aesthetics: `No aplica`,
  trainingExercises: [
    "Eversión con banda",
    "Equilibrio en superficies inestables"
  ],
  riskExercises: [
    "Esguinces de repetición (ART-010/011)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Fibularis_longus_muscle`,
  },
  {
  id: `mus-fibularis-brevis`,
  legacyId: `MUS-128`,
  kind: `muscle`,
  nameEn: `Fibularis Brevis`,
  nameEs: `Fibular Corto`,
  synonyms: [
    "Fibular Corto",
    "Fibularis Brevis"
  ],
  zone: `lower-leg`,
  zones: [
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb": ["Fibularis_brevis_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Peroné distal`,
  insertion: `Base del 5º metatarsiano`,
  innervation: `N. fibular superficial`,
  action: [
    "Eversión",
    "asiste en flexión plantar"
  ],
  actionTags: [
    "flexor",
    "evertor"
  ],
  biomechanicalRole: `Estabilizador lateral del tobillo`,
  aesthetics: `Lateral de la pierna`,
  trainingExercises: [
    "Eversión con banda"
  ],
  riskExercises: [
    "Esguinces por inversión"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Fibularis_brevis_muscle`,
  },
  {
  id: `mus-gastrocnemius`,
  legacyId: `MUS-129`,
  kind: `muscle`,
  nameEn: `Gastrocnemius`,
  nameEs: `Gastrocnemio`,
  synonyms: [
    "Gastrocnemio",
    "Gastrocnemius"
  ],
  zone: `lower-leg`,
  zones: [
    "knee",
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb":["Lateral_head_of_gastrocnemiusr","Medial_head_of_gastrocnemiusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cóndilos femorales`,
  insertion: `Calcáneo (vía tendón de Aquiles)`,
  innervation: `N. tibial (S1-S2)`,
  action: [
    "Flexión plantar y flexión de rodilla"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Propulsión y energía elástica en salto/carrera`,
  aesthetics: `Forma del gemelo`,
  trainingExercises: [
    "Elevación de talón de pie",
    "Saltos",
    "Skipping"
  ],
  riskExercises: [
    "Pliometría súbita → tendinopatía de Aquiles (TEN-001)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Gastrocnemius_muscle`,
  },
  {
  id: `mus-soleus`,
  legacyId: `MUS-130`,
  kind: `muscle`,
  nameEn: `Soleus`,
  nameEs: `Sóleo`,
  synonyms: [
    "Sóleo",
    "Soleus"
  ],
  zone: `lower-leg`,
  zones: [
    "knee",
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb": ["Soleus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cabeza del peroné y línea del sóleo (tibia)`,
  insertion: `Calcáneo (Aquiles)`,
  innervation: `N. tibial`,
  action: [
    "Flexión plantar (rodilla flexionada)"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Resistencia postural y retorno venoso ('segundo corazón')`,
  aesthetics: `Anchura profunda de la pantorrilla`,
  trainingExercises: [
    "Elevación de talón sentado",
    "Isométricos con rodilla flexionada"
  ],
  riskExercises: [
    "Volumen de carrera sin adaptación"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: true,
  wikiEn: `Soleus_muscle`,
  },
  {
  id: `mus-plantaris`,
  legacyId: `MUS-131`,
  kind: `muscle`,
  nameEn: `Plantaris`,
  nameEs: `Plantar`,
  synonyms: [
    "Plantar",
    "Plantaris"
  ],
  zone: `lower-leg`,
  zones: [
    "knee",
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb": ["Plantaris_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cresta supracondílea lateral del fémur`,
  insertion: `Calcáneo (con el tendón de Aquiles)`,
  innervation: `N. tibial`,
  action: [
    "Flexión plantar débil y propiocepción"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Vestigial ('nervio del novato'); usado como injerto`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Plantaris_muscle`,
  },
  {
  id: `mus-popliteus`,
  legacyId: `MUS-132`,
  kind: `muscle`,
  nameEn: `Popliteus`,
  nameEs: `Poplíteo`,
  synonyms: [
    "Poplíteo",
    "Popliteus"
  ],
  zone: `lower-leg`,
  zones: [
    "knee",
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb": ["Popliteus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cóndilo lateral del fémur`,
  insertion: `Cara posterior de la tibia (por encima de la línea del sóleo)`,
  innervation: `N. tibial (L4-S1)`,
  action: [
    "'Desbloqueo' de la rodilla (rotación interna de la tibia al inicio de la flexión)"
  ],
  actionTags: [
    "flexor",
    "rotator"
  ],
  biomechanicalRole: `DESBLOQUEADOR articular. Permite la flexión de rodilla desde posición de extensión completa. Crucial en tendinitis poplítea y dolor posterolateral de rodilla`,
  aesthetics: `No visible (profundo en hueco poplíteo)`,
  trainingExercises: [
    "Sentadilla profunda controlada",
    "Ejercicios de propiocepción en rodilla flexionada"
  ],
  riskExercises: [
    "Sentadilla profunda con rotación externa excesiva",
    "Hiperextensión de rodilla repetida"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Popliteus_muscle`,
  },
  {
  id: `mus-flexor-hallucis-longus`,
  legacyId: `MUS-133`,
  kind: `muscle`,
  nameEn: `Flexor Hallucis Longus`,
  nameEs: `Flexor Largo del Hallux`,
  synonyms: [
    "Flexor Largo del Hallux",
    "Flexor Hallucis Longus"
  ],
  zone: `lower-leg`,
  zones: [
    "knee",
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb":["Flexor_hallucis_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Peroné y membrana interósea`,
  insertion: `Falange distal del hallux`,
  innervation: `N. tibial`,
  action: [
    "Flexión del hallux",
    "asiste en flexión plantar"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Clave en la propulsión; 'músculo del bailarín' (tendinopatía del FHL)`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Elevación de talón con dedos"
  ],
  riskExercises: [
    "Tendinopatía del FHL (danza/sprint)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_hallucis_longus_muscle`,
  },
  {
  id: `mus-flexor-digitorum-longus`,
  legacyId: `MUS-134`,
  kind: `muscle`,
  nameEn: `Flexor Digitorum Longus`,
  nameEs: `Flexor Largo de los Dedos`,
  synonyms: [
    "Flexor Largo de los Dedos",
    "Flexor Digitorum Longus"
  ],
  zone: `lower-leg`,
  zones: [
    "knee",
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb":["Flexor_digitorum_longusr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tibia posterior`,
  insertion: `Falanges distales de los dedos 2-5`,
  innervation: `N. tibial`,
  action: [
    "Flexión de los dedos",
    "asiste en flexión plantar e inversión"
  ],
  actionTags: [
    "flexor",
    "invertor"
  ],
  biomechanicalRole: `Flexor digital profundo del pie`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Agarre de dedos con toalla"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_digitorum_longus_muscle`,
  },
  {
  id: `mus-tibialis-posterior`,
  legacyId: `MUS-135`,
  kind: `muscle`,
  nameEn: `Tibialis Posterior`,
  nameEs: `Tibial Posterior`,
  synonyms: [
    "Tibial Posterior",
    "Tibialis Posterior"
  ],
  zone: `lower-leg`,
  zones: [
    "knee",
    "ankle-foot"
  ],
  modelMeshes: {"lower-limb": ["Tibialis_posterior_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tibia y peroné posteriores`,
  insertion: `Navicular y cuneiformes`,
  innervation: `N. tibial`,
  action: [
    "Inversión",
    "flexión plantar",
    "sostén del arco medial"
  ],
  actionTags: [
    "flexor",
    "invertor"
  ],
  biomechanicalRole: `Estabiliza el retropié en la pisada`,
  aesthetics: `No aplica`,
  trainingExercises: [
    "Short foot",
    "Inversión con banda",
    "Elevación de talón con pelota entre talones"
  ],
  riskExercises: [
    "Hiperpronación + volumen → tendinopatía y pie plano adquirido (TEN-011)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Tibialis_posterior_muscle`,
  },
  {
  id: `mus-extensor-hallucis-brevis`,
  legacyId: `MUS-136`,
  kind: `muscle`,
  nameEn: `Extensor Hallucis Brevis`,
  nameEs: `Extensor Corto del Hallux`,
  synonyms: [
    "Extensor Corto del Hallux",
    "Extensor Hallucis Brevis"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Extensor_hallucis_brevisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Calcáneo (seno del tarso)`,
  insertion: `Falange proximal del hallux`,
  innervation: `N. fibular profundo`,
  action: [
    "Extensión del hallux"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Extensor corto del dedo gordo`,
  aesthetics: `Dorso del pie`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_hallucis_brevis_muscle`,
  },
  {
  id: `mus-extensor-digitorum-brevis`,
  legacyId: `MUS-137`,
  kind: `muscle`,
  nameEn: `Extensor Digitorum Brevis`,
  nameEs: `Extensor Corto de los Dedos`,
  synonyms: [
    "Extensor Corto de los Dedos",
    "Extensor Digitorum Brevis"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Extensor_digitorum_brevisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Calcáneo`,
  insertion: `Dedos 2-4`,
  innervation: `N. fibular profundo`,
  action: [
    "Extensión de los dedos"
  ],
  actionTags: [
    "extensor"
  ],
  biomechanicalRole: `Extensor corto digital`,
  aesthetics: `Dorso del pie`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Extensor_digitorum_brevis_muscle`,
  },
  {
  id: `mus-abductor-hallucis`,
  legacyId: `MUS-138`,
  kind: `muscle`,
  nameEn: `Abductor Hallucis`,
  nameEs: `Abductor del Hallux`,
  synonyms: [
    "Abductor del Hallux",
    "Abductor Hallucis"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Abductor_hallucisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tuberosidad del calcáneo y retináculo flexor`,
  insertion: `Falange proximal del hallux (medial)`,
  innervation: `N. plantar medial`,
  action: [
    "Abducción del hallux",
    "soporte del arco"
  ],
  actionTags: [
    "abductor"
  ],
  biomechanicalRole: `Soporte del arco medial; implicado en el túnel tarsiano`,
  aesthetics: `Borde medial del pie`,
  trainingExercises: [
    "Short foot",
    "Abducción del hallux"
  ],
  riskExercises: [
    "Sobrepronación"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Abductor_hallucis_muscle`,
  },
  {
  id: `mus-flexor-digitorum-brevis`,
  legacyId: `MUS-139`,
  kind: `muscle`,
  nameEn: `Flexor Digitorum Brevis`,
  nameEs: `Flexor Corto de los Dedos`,
  synonyms: [
    "Flexor Corto de los Dedos",
    "Flexor Digitorum Brevis"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Flexor_digitorum_brevisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tuberosidad del calcáneo`,
  insertion: `Falanges medias de los dedos 2-5`,
  innervation: `N. plantar medial`,
  action: [
    "Flexión de los dedos",
    "soporte de la fascia plantar"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Flexor digital corto; soporte del arco`,
  aesthetics: `Planta del pie`,
  trainingExercises: [
    "Agarre con toalla",
    "Short foot"
  ],
  riskExercises: [
    "Fascitis plantar (asociado)"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_digitorum_brevis_muscle`,
  },
  {
  id: `mus-abductor-digiti-minimi-foot`,
  legacyId: `MUS-140`,
  kind: `muscle`,
  nameEn: `Abductor Digiti Minimi (Foot)`,
  nameEs: `Abductor del Meñique (Pie)`,
  synonyms: [
    "Abductor del Meñique (Pie)",
    "Abductor Digiti Minimi (Foot)"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Abductor_digiti_minimi_of_footr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tuberosidad del calcáneo`,
  insertion: `Falange proximal del 5º dedo`,
  innervation: `N. plantar lateral`,
  action: [
    "Abducción del 5º dedo"
  ],
  actionTags: [
    "abductor"
  ],
  biomechanicalRole: `Borde lateral del pie`,
  aesthetics: `Borde lateral del pie`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Abductor_digiti_minimi_muscle_of_foot`,
  },
  {
  id: `mus-quadratus-plantae`,
  legacyId: `MUS-141`,
  kind: `muscle`,
  nameEn: `Quadratus Plantae`,
  nameEs: `Cuadrado Plantar`,
  synonyms: [
    "Cuadrado Plantar",
    "Quadratus Plantae"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb": ["Quadratus_plantae_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Calcáneo`,
  insertion: `Tendones del flexor digitorum longus`,
  innervation: `N. plantar lateral`,
  action: [
    "Asiste al FDL en la flexión de los dedos"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Auxiliar del flexor largo`,
  aesthetics: `No visible`,
  trainingExercises: [],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Quadratus_plantae_muscle`,
  },
  {
  id: `mus-lumbrical-muscles-of-foot`,
  legacyId: `MUS-142`,
  kind: `muscle`,
  nameEn: `Lumbrical Muscles of Foot`,
  nameEs: `Lumbricales del Pie`,
  synonyms: [
    "Lumbricales del Pie",
    "Lumbrical Muscles of Foot"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Lumbrical_muscles_of_footr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Tendones del flexor digitorum longus`,
  insertion: `Expansión dorsal de los dedos 2-5`,
  innervation: `N. plantares medial/lateral`,
  action: [
    "Flexión MTF + extensión interfalángica de los dedos"
  ],
  actionTags: [
    "flexor",
    "extensor"
  ],
  biomechanicalRole: `Motricidad fina del pie`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Extensión de dedos con banda"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Lumbrical_muscles_of_foot`,
  },
  {
  id: `mus-flexor-hallucis-brevis`,
  legacyId: `MUS-143`,
  kind: `muscle`,
  nameEn: `Flexor Hallucis Brevis`,
  nameEs: `Flexor Corto del Hallux`,
  synonyms: [
    "Flexor Corto del Hallux",
    "Flexor Hallucis Brevis"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Lateral_head_of_flexor_hallucis_brevisr","Medial_head_of_flexor_hallucis_brevisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Cuboides y cuneiformes`,
  insertion: `Falange proximal del hallux (con sesamoideos)`,
  innervation: `N. plantar medial`,
  action: [
    "Flexión del hallux"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Flexor corto del dedo gordo`,
  aesthetics: `Planta medial`,
  trainingExercises: [
    "Flexión del hallux"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Flexor_hallucis_brevis_muscle`,
  },
  {
  id: `mus-adductor-hallucis`,
  legacyId: `MUS-144`,
  kind: `muscle`,
  nameEn: `Adductor Hallucis`,
  nameEs: `Aductor del Hallux`,
  synonyms: [
    "Aductor del Hallux",
    "Adductor Hallucis"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["Oblique_head_of_adductor_hallucisr","Transverse_head_of_adductor_hallucisr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Metatarsianos (cabezas oblicua y transversa)`,
  insertion: `Falange proximal del hallux (lateral)`,
  innervation: `N. plantar lateral`,
  action: [
    "Aducción del hallux"
  ],
  actionTags: [
    "adductor"
  ],
  biomechanicalRole: `Relevante en hallux valgus (juanetes)`,
  aesthetics: `Planta del pie`,
  trainingExercises: [
    "Aducción del hallux con banda"
  ],
  riskExercises: [
    "Hallux valgus por calzado estrecho"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Adductor_hallucis_muscle`,
  },
  {
  id: `mus-interossei-of-foot`,
  legacyId: `MUS-145`,
  kind: `muscle`,
  nameEn: `Interossei of Foot`,
  nameEs: `Interóseos del Pie`,
  synonyms: [
    "Interóseos del Pie",
    "Interossei of Foot"
  ],
  zone: `ankle-foot`,
  modelMeshes: {"lower-limb":["1st_Dorsal_interossei_muscles_of_footr","2nd_Dorsal_interossei_muscles_of_footr","3rd_Dorsal_interossei_muscles_of_footr","4th_Dorsal_interossei_muscles_of_footr","Plantar_interossei_musclesr"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Metatarsianos`,
  insertion: `Falanges proximales y expansión dorsal`,
  innervation: `N. plantar lateral`,
  action: [
    "Aducción/abducción de los dedos y flexión MTF"
  ],
  actionTags: [
    "flexor",
    "abductor",
    "adductor"
  ],
  biomechanicalRole: `Soporte del arco transverso`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Short foot"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Interossei_of_foot`,
  },
  {
  id: `mus-levator-ani`,
  legacyId: `MUS-146`,
  kind: `muscle`,
  nameEn: `Levator Ani`,
  nameEs: `Elevador del Ano`,
  synonyms: [
    "Elevador del Ano",
    "Levator Ani"
  ],
  zone: `core`,
  modelMeshes: {},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Pubis, espina isquiática y arco tendinoso`,
  insertion: `Cóccix y rafe anococcígeo`,
  innervation: `N. pudendo y ramos S3-S4`,
  action: [
    "Elevación del suelo pélvico",
    "continencia y sostén de vísceras"
  ],
  actionTags: [
    "elevator"
  ],
  biomechanicalRole: `Parte del core profundo; entrenamiento de suelo pélvico`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Ejercicios de Kegel",
    "Respiración hipopresiva"
  ],
  riskExercises: [
    "Presión intraabdominal excesiva sin control"
  ],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Levator_ani`,
  },
  {
  id: `mus-coccygeus`,
  legacyId: `MUS-147`,
  kind: `muscle`,
  nameEn: `Coccygeus`,
  nameEs: `Coccígeo`,
  synonyms: [
    "Coccígeo",
    "Coccygeus"
  ],
  zone: `core`,
  modelMeshes: {"lower-limb":["Coccygeus_muscler"]},
  sourceRefs: [
    {"sourceId":"chat-1787414859303-atlas-anatomico-fichas","pending":true,"note":"Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray's/Moore PENDIENTE (plan-extraccion.md)"}
  ],
  origin: `Espina isquiática`,
  insertion: `Sacro y cóccix`,
  innervation: `Ramos S4-S5`,
  action: [
    "Sostén del suelo pélvico y flexión del cóccix"
  ],
  actionTags: [
    "flexor"
  ],
  biomechanicalRole: `Sostén pélvico`,
  aesthetics: `No visible`,
  trainingExercises: [
    "Kegel"
  ],
  riskExercises: [],
  synergists: [],
  antagonists: [],
  primaryForTraining: false,
  wikiEn: `Coccygeus_muscle`,
  },
];
