// rag/anatomy/scripts/meshAliases.ts
// AG-ANATOM ciclo 3 — TAREA 3: alias manuales estructura → nombres de nodo GLB.
//
// Se usan cuando el nombre del GLB no deriva del anatómico por normalización:
// typos del modelo ("Schiatic nerve", "cuteneous"), cabezas/subpartes con orden
// de palabras distinto ("Biceps Femoris Long Head" ↔ "Long head of biceps
// femoris"), estructuras que el GLB representa con otra pieza (tendón → vientre
// muscular; articulación → huesos constituyentes) y enumeraciones (interossei,
// metatarsianos). Los nombres aquí son los CRUDOS del nodo (con espacios/lateralidad);
// remap.ts los resuelve contra el inventario runtime de mesh-names.json.
//
// REGLA: "Circle.NNN"/geometría auxiliar JAMÁS se alias-a (tarea 4 los marca 'aux').

/** Alias por id de estructura de músculo. */
export const MUSCLE_ALIASES: Record<string, string[]> = {
  // cabezas con orden de palabras invertido / partes nombradas distinto
  'mus-biceps-brachii': ['Long head of biceps brachii', 'Short head of biceps brachii'],
  'mus-triceps-brachii': ['Long head of triceps brachii', 'Lateral head of triceps brachii', 'Medial head of triceps brachii'],
  'mus-gastrocnemius': ['Medial head of gastrocnemius', 'Lateral head of gastrocnemius'],
  'mus-biceps-femoris-long-head': ['Long head of biceps femoris'],
  'mus-biceps-femoris-short-head': ['Short head of biceps femoris'],
  // deltoides: el modelo lo divide en partes clavicular/acromial/espinal
  'mus-deltoideus-anterior': ['Clavicular part of deltoid muscle'],
  'mus-deltoideus-medius': ['Acromial part of deltoid muscle'],
  'mus-deltoideus-posterior': ['Spinal part of deltoid muscle'],
  // VMO: porción del vasto medial (el GLB no lo separa)
  'mus-vastus-medialis-obliquus': ['Vastus medialis muscle'],
  // grupos intrínsecos → enumeración de sus piezas
  'mus-thenar-muscles': ['Abductor pollicis brevis', 'Flexor pollicis brevis', 'Deep head of flexor pollicis brevis', 'Superficial head of flexor pollicis brevis', 'Opponens pollicis muscle'],
  'mus-hypothenar-muscles': ['Abductor digiti minimi', 'Flexor digiti minimi brevis of hand', 'Opponens digiti minimi muscle of hand', 'Palmaris brevis muscle'],
  'mus-lumbrical-muscles-of-hand': ['1st lumbrical of hand', '2nd lumbrical of hand', '3rd lumbrical of hand', '4th lumbrical of hand'],
  'mus-palmar-interossei': ['1st palmar interosseus of hand', '2nd palmar interosseus of hand', '3rd palmar interosseus of hand', '4th palmar interosseus of hand'],
  'mus-dorsal-interossei-of-hand': ['1st dorsal interosseus of hand', '2nd dorsal interosseus of hand', '3rd dorsal interosseus of hand', '4th dorsal interosseus of hand'],
  'mus-interossei-of-foot': ['1st Dorsal interossei muscles of foot', '2nd Dorsal interossei muscles of foot', '3rd Dorsal interossei muscles of foot', '4th Dorsal interossei muscles of foot', 'Plantar interossei muscles'],
  // el modelo nombra "of foot" y la estructura no; y adductor minimus viene como overlay
  'mus-abductor-digiti-minimi-foot': ['Abductor digiti minimi of foot'],
  'mus-adductor-minimus': ['Adductor minimus overlay'],
  // typos del modelo / grafías distintas
  'mus-articularis-genu': ['Articularis genus'],
};

/** Alias por id de tendón. Deliberadamente algunos apuntan a vientres musculares
 *  o vainas: el GLB no separa esa pieza y el visor resalta su representación. */
export const TENDON_ALIASES: Record<string, string[]> = {
  'ten-achilles-tendon': ['Calcaneal tendon'],
  'ten-patellar-ligament': ['Quadriceps common tendon and patellar ligament', 'Patella'],
  'ten-quadriceps-tendon': ['Quadriceps common tendon and patellar ligament'],
  'ten-supraspinatus-tendon': ['Supraspinatus muscle'],
  'ten-long-head-of-biceps-tendon': ['Tendon of Long head of biceps brachii'],
  'ten-biceps-tendon': ['Common tendon of biceps brachii'],
  'ten-hamstring-tendons': ['Common tendon of Semitendinosus and Long head of biceps femoris', 'Semimembranosus muscle tendon'],
  'ten-gluteus-medius-tendon': ['Gluteus medius muscle', 'Gluteus minimus muscle'],
  'ten-tibialis-posterior-tendon': ['Tibialis posterior tendon sheath', 'Tibialis posterior muscle'],
  'ten-fibularis-longus-tendon': ['Fibularis longus muscle', 'Fibularis brevis muscle', 'Common tendon sheath of fibularis muscles', 'Plantar tendinous sheath of fibularis longus'],
  'ten-adductor-longus': ['Adductor longus'],
  'ten-flexor-tendons-of-hand': ['Flexor digitorum profundus', 'Flexor digitorum superficialis'],
  'ten-plantar-fascia': ['Plantar aponeurosis'],
  'ten-pes-anserinus': ['Pes anserinus common tendon'],
  'ten-iliopsoas-tendon': ['Iliacus muscle', 'Psoas major'],
  'ten-triceps-tendon': ['Common tendon of triceps brachii'],
  // compartimento fibroso de De Quervain = vainas de APL + EPB
  'ten-de-quervain-s-disease': ['Abductor pollicis longus tendon sheath', 'Extensor pollicis brevis tendon sheath'],
};

/** Alias por id de nervio (typos del modelo incluidos). */
export const NERVE_ALIASES: Record<string, string[]> = {
  'ner-sciatic-nerve': ['Schiatic nerve'], // typo "Schiatic" en lower-limb
  'ner-common-peroneal-nerve': ['Common fibular nerve'], // nomenclatura moderna del GLB
  'ner-lateral-femoral-cutaneous-nerve': ['Lateral femoral cuteneous nerve'], // typo del GLB
  'ner-musculocutaneous-nerve': ['Musculocutaneus nerve'], // typo del GLB
  'ner-posterior-interosseous-nerve': ['Radial nerve (posterior interosseus n)'],
  'ner-pectoral-nerves': ['Lateral pectoral nerve', 'Medial pectoral nerve'],
  'ner-lumbar-nerve': ['Plexus lumbaris'],
};

/** Enumeraciones/sinónimos por id de hueso. */
export const BONE_ALIASES: Record<string, string[]> = {
  'bone-sternum': ['Body of sternum', 'Manubrium of sternum', 'Xiphoid process'],
  'bone-metatarsal-bones': ['First metatarsal bone', 'Second metatarsal bone', 'Third metatarsal bone', 'Fourth metatarsal bone', 'Fifth metatarsal bone'],
  'bone-sacrum': ['Sacrum'],
  'bone-coccyx': ['Coccyx'],
};

/** Articulación → huesos constituyentes (el visor resalta los huesos de la
 *  articulación: los GLB no traen "articulación" como pieza). */
export const JOINT_BONES: Record<string, string[]> = {
  'art-shoulder-joint': ['Humerus', 'Scapula'],
  'art-acromioclavicular-joint': ['Clavicle', 'Scapula', 'Acromioclavicular disc'],
  'art-sternoclavicular-joint': ['Clavicle', 'Body of sternum', 'Manubrium of sternum'],
  'art-elbow-joint': ['Humerus', 'Radius', 'Ulna'],
  'art-radioulnar-articulation': ['Radius', 'Ulna'],
  'art-radioulnar-articulation-art-druj': ['Radius', 'Ulna'],
  'art-wrist-joint': ['Radius', 'Ulna', 'Scaphoid', 'Lunate bone'],
  'art-hand-joint': ['Capitate', 'Hamate', 'Trapezium'],
  'art-cervical-vertebrae': ['Atlas', 'Axis', 'Cervical vertebra'],
  'art-lumbar-vertebrae': ['Lumbar vertebra', 'Sacrum'],
  'art-sacroiliac-joint': ['Sacrum', 'Hip bone'],
  'art-hip-joint': ['Femur', 'Hip bone'],
  'art-knee-joint': ['Femur', 'Tibia', 'Patella'],
  'art-patellofemoral-joint': ['Patella', 'Femur'],
  'art-ankle-joint': ['Talus', 'Tibia', 'Fibula'],
  'art-subtalar-joint': ['Talus', 'Calcaneus', 'Navicular bone'],
  'art-tibiofibular-joint': ['Tibia', 'Fibula'],
  'art-temporomandibular-joint': ['Mandible', 'Temporal bone'],
  'art-scapulothoracic-joint': ['Scapula', 'Rib'],
};
