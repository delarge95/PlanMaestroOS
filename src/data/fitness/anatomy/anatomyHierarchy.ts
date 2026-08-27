// src/data/fitness/anatomy/anatomyHierarchy.ts
// AG-ANATOM — jerarquía anatómica EXPLÍCITA cubriendo TODAS las 267 estructuras.
// Generado por script — editar con criterio anatómico.
// NIVELES: Región → Grupo anatómico → Estructura → Pieza

import type { BodyZone } from './types';

export interface AnatomyGroup {
  id: string;
  label: string;
  structureIds: string[];
  zone: BodyZone;
}

export const ANATOMY_GROUPS: AnatomyGroup[] = [
  { id: 'grp-masticacion', label: 'Músculos de la masticación', zone: 'head-jaw' as BodyZone, structureIds: [
    'mus-masseter',
    'mus-temporalis',
    'mus-lateral-pterygoid',
    'mus-medial-pterygoid',
  ]},
  { id: 'grp-cara', label: 'Músculos faciales', zone: 'head-jaw' as BodyZone, structureIds: [
    'mus-occipitofrontalis',
    'mus-orbicularis-oculi',
    'mus-orbicularis-oris',
    'mus-buccinator',
    'mus-zygomaticus-major',
  ]},
  { id: 'grp-ojo', label: 'Extraoculares', zone: 'head-jaw' as BodyZone, structureIds: [
    'mus-extraocular-muscles',
  ]},
  { id: 'grp-atm', label: 'ATM', zone: 'head-jaw' as BodyZone, structureIds: [
    'art-temporomandibular-joint',
  ]},
  { id: 'grp-huesos-cara', label: 'Huesos del cráneo', zone: 'head-jaw' as BodyZone, structureIds: [
    'bone-frontal-bone',
    'bone-parietal-bone',
    'bone-temporal-bone',
    'bone-occipital-bone',
    'bone-sphenoid-bone',
    'bone-ethmoid-bone',
    'bone-zygomatic-bone',
    'bone-maxilla',
    'bone-mandible',
    'bone-vomer',
    'bone-nasal-bone',
  ]},
  { id: 'grp-cervical-anterior', label: 'Cervical anterior', zone: 'cervical' as BodyZone, structureIds: [
    'mus-scalenus-anterior',
    'mus-scalenus-medius',
    'mus-scalenus-posterior',
    'mus-longus-colli',
    'mus-longus-capitis',
    'mus-rectus-capitis-anterior',
    'mus-rectus-capitis-lateralis',
  ]},
  { id: 'grp-cervical-posterior', label: 'Cervical posterior', zone: 'cervical' as BodyZone, structureIds: [
    'mus-splenius-capitis',
    'mus-splenius-cervicis',
    'mus-suboccipital-muscles',
  ]},
  { id: 'grp-hyoideos', label: 'Supra/infrahióideos', zone: 'cervical' as BodyZone, structureIds: [
    'mus-suprahyoid-muscles',
    'mus-infrahyoid-muscles',
  ]},
  { id: 'grp-cuello-otros', label: 'Cuello (otros)', zone: 'cervical' as BodyZone, structureIds: [
    'mus-sternocleidomastoid',
    'mus-platysma',
  ]},
  { id: 'grp-cervical-art', label: 'Articulación cervical', zone: 'cervical' as BodyZone, structureIds: [
    'art-cervical-vertebrae',
  ]},
  { id: 'grp-cervical-huesos', label: 'Huesos cervicales', zone: 'cervical' as BodyZone, structureIds: [
    'bone-atlas',
    'bone-axis',
    'bone-cervical-vertebrae',
  ]},
  { id: 'grp-cervical-ner', label: 'Nervios cervicales', zone: 'cervical' as BodyZone, structureIds: [
    'ner-accessory-nerve',
    'ner-mandibular-nerve',
  ]},
  { id: 'grp-respiratorios', label: 'Respiratorios', zone: 'chest' as BodyZone, structureIds: [
    'mus-diaphragm',
    'mus-external-intercostals',
    'mus-internal-intercostals',
    'mus-innermost-intercostals',
  ]},
  { id: 'grp-torax-profundos', label: 'Tórax profundos', zone: 'chest' as BodyZone, structureIds: [
    'mus-transversus-thoracis',
    'mus-subcostal-muscles',
    'mus-levatores-costarum',
    'mus-sternalis',
    'mus-subclavius',
    'mus-serratus-posterior-superior',
    'mus-serratus-posterior-inferior',
  ]},
  { id: 'grp-core-anterior', label: 'Core anterior', zone: 'core' as BodyZone, structureIds: [
    'mus-rectus-abdominis',
    'mus-pyramidalis',
  ]},
  { id: 'grp-core-lateral', label: 'Core lateral', zone: 'core' as BodyZone, structureIds: [
    'mus-external-oblique',
    'mus-internal-oblique',
    'mus-transversus-abdominis',
  ]},
  { id: 'grp-core-posterior', label: 'Core posterior', zone: 'core' as BodyZone, structureIds: [
    'mus-quadratus-lumborum',
  ]},
  { id: 'grp-suelo-pelvico', label: 'Suelo pélvico', zone: 'core' as BodyZone, structureIds: [
    'mus-levator-ani',
    'mus-coccygeus',
  ]},
  { id: 'grp-erector-espina', label: 'Erectores de la columna', zone: 'spine' as BodyZone, structureIds: [
    'mus-erector-spinae',
    'mus-semispinalis',
    'mus-multifidus',
    'mus-rotatores',
    'mus-interspinales',
    'mus-intertransversarii',
  ]},
  { id: 'grp-columna-huesos', label: 'Huesos de la columna', zone: 'spine' as BodyZone, structureIds: [
    'bone-thoracic-vertebra',
    'bone-lumbar-vertebra',
    'bone-sacrum',
    'bone-coccyx',
  ]},
  { id: 'grp-columna-art', label: 'Articulaciones de columna', zone: 'spine' as BodyZone, structureIds: [
    'art-lumbar-vertebrae',
    'art-sacroiliac-joint',
  ]},
  { id: 'grp-caja-toracica', label: 'Caja torácica', zone: 'spine' as BodyZone, structureIds: [
    'bone-sternum',
    'bone-rib',
  ]},
  { id: 'grp-deltoideus', label: 'Deltoideus', zone: 'shoulder' as BodyZone, structureIds: [
    'mus-deltoideus-anterior',
    'mus-deltoideus-medius',
    'mus-deltoideus-posterior',
  ]},
  { id: 'grp-manguito', label: 'Manguito Rotador', zone: 'shoulder' as BodyZone, structureIds: [
    'mus-supraspinatus',
    'mus-infraspinatus',
    'mus-teres-minor',
    'mus-subscapularis',
  ]},
  { id: 'grp-hombro-otros', label: 'Hombro (otros)', zone: 'shoulder' as BodyZone, structureIds: [
    'mus-teres-major',
    'mus-pectoralis-minor',
  ]},
  { id: 'grp-cintura-escapular', label: 'Cintura Escapular', zone: 'shoulder' as BodyZone, structureIds: [
    'mus-trapezius',
    'mus-serratus-anterior',
    'mus-levator-scapulae',
    'mus-rhomboid-major',
    'mus-rhomboid-minor',
  ]},
  { id: 'grp-hombro-art', label: 'Articulaciones del hombro', zone: 'shoulder' as BodyZone, structureIds: [
    'art-shoulder-joint',
    'art-acromioclavicular-joint',
    'art-sternoclavicular-joint',
    'art-scapulothoracic-joint',
  ]},
  { id: 'grp-hombro-huesos', label: 'Huesos del hombro', zone: 'shoulder' as BodyZone, structureIds: [
    'bone-clavicle',
    'bone-scapula',
    'bone-humerus',
  ]},
  { id: 'grp-hombro-ner', label: 'Nervios del hombro', zone: 'shoulder' as BodyZone, structureIds: [
    'ner-axillary-nerve',
    'ner-suprascapular-nerve',
    'ner-long-thoracic-nerve',
    'ner-pectoral-nerves',
    'ner-thoracodorsal-nerve',
    'ner-musculocutaneous-nerve',
  ]},
  { id: 'grp-hombro-ten', label: 'Tendones del hombro', zone: 'shoulder' as BodyZone, structureIds: [
    'ten-supraspinatus-tendon',
    'ten-long-head-of-biceps-tendon',
    'ten-pectoralis-major-tendon',
    'ten-triceps-tendon',
  ]},
  { id: 'grp-hombro-lig', label: 'Ligamentos del hombro', zone: 'shoulder' as BodyZone, structureIds: [
    'lig-transverse-humeral-ligament',
    'lig-trapezoid-ligament',
  ]},
  { id: 'grp-biceps', label: 'Bíceps Braquial', zone: 'arm' as BodyZone, structureIds: [
    'mus-biceps-brachii',
  ]},
  { id: 'grp-triceps', label: 'Tríceps Braquial', zone: 'arm' as BodyZone, structureIds: [
    'mus-triceps-brachii',
  ]},
  { id: 'grp-brazo-anterior', label: 'Brazo anterior', zone: 'arm' as BodyZone, structureIds: [
    'mus-brachialis',
    'mus-coracobrachialis',
  ]},
  { id: 'grp-brazo-art', label: 'Codo', zone: 'arm' as BodyZone, structureIds: [
    'art-elbow-joint',
    'art-radioulnar-articulation',
    'art-radioulnar-articulation-art-druj',
  ]},
  { id: 'grp-brazo-huesos', label: 'Huesos del brazo', zone: 'arm' as BodyZone, structureIds: [
    'bone-radius',
    'bone-ulna',
  ]},
  { id: 'grp-brazo-ner', label: 'Nervios del brazo', zone: 'arm' as BodyZone, structureIds: [
    'ner-median-nerve',
    'ner-ulnar-nerve',
    'ner-radial-nerve',
  ]},
  { id: 'grp-brazo-ten', label: 'Tendones del brazo', zone: 'arm' as BodyZone, structureIds: [
    'ten-biceps-tendon',
    'ten-triceps-tendon',
    'ten-common-extensor-tendon',
    'ten-common-flexor-tendon',
    'ten-de-quervain-s-disease',
  ]},
  { id: 'grp-brazo-lig', label: 'Ligamentos del brazo', zone: 'arm' as BodyZone, structureIds: [
    'lig-ulnar-collateral-ligament-of-elbow',
  ]},
  { id: 'grp-ante-flexores', label: 'Flexores del antebrazo', zone: 'forearm-hand' as BodyZone, structureIds: [
    'mus-flexor-carpi-radialis',
    'mus-flexor-carpi-ulnaris',
    'mus-flexor-digitorum-superficialis',
    'mus-flexor-digitorum-profundus',
    'mus-flexor-pollicis-longus',
    'mus-pronator-teres',
    'mus-pronator-quadratus',
    'mus-palmaris-longus',
  ]},
  { id: 'grp-ante-extensores', label: 'Extensores del antebrazo', zone: 'forearm-hand' as BodyZone, structureIds: [
    'mus-extensor-carpi-radialis-longus',
    'mus-extensor-carpi-radialis-brevis',
    'mus-extensor-carpi-ulnaris',
    'mus-extensor-digitorum',
    'mus-extensor-digiti-minimi',
    'mus-extensor-pollicis-longus',
    'mus-extensor-pollicis-brevis',
    'mus-extensor-indicis',
    'mus-abductor-pollicis-longus',
    'mus-supinator',
    'mus-brachioradialis',
    'mus-anconeus',
  ]},
  { id: 'grp-mano-intrinsecos', label: 'Mano intrínseca', zone: 'forearm-hand' as BodyZone, structureIds: [
    'mus-thenar-muscles',
    'mus-hypothenar-muscles',
    'mus-lumbrical-muscles-of-hand',
    'mus-palmar-interossei',
    'mus-dorsal-interossei-of-hand',
  ]},
  { id: 'grp-mano-art', label: 'Muñeca y mano', zone: 'forearm-hand' as BodyZone, structureIds: [
    'art-wrist-joint',
    'art-hand-joint',
  ]},
  { id: 'grp-mano-huesos', label: 'Huesos de la mano', zone: 'forearm-hand' as BodyZone, structureIds: [
    'bone-scaphoid',
    'bone-lunate-bone',
    'bone-hamate',
    'bone-trapezium',
    'bone-capitate',
  ]},
  { id: 'grp-mano-ner', label: 'Nervios de la mano', zone: 'forearm-hand' as BodyZone, structureIds: [
    'ner-posterior-interosseous-nerve',
  ]},
  { id: 'grp-mano-ten', label: 'Tendones de la mano', zone: 'forearm-hand' as BodyZone, structureIds: [
    'ten-flexor-tendons-of-hand',
  ]},
  { id: 'grp-mano-lig', label: 'Ligamentos de la mano', zone: 'forearm-hand' as BodyZone, structureIds: [
    'lig-flexor-retinaculum-of-wrist',
    'lig-extensor-retinaculum-of-wrist',
    'lig-dorsal-radio-ulnar-ligament',
    'lig-palmar-radio-ulnar-ligament',
  ]},
  { id: 'grp-pectoral', label: 'Pectoral', zone: 'chest' as BodyZone, structureIds: [
    'mus-pectoralis-major',
    'mus-pectoralis-minor',
  ]},
  { id: 'grp-pectoral-ten', label: 'Tendón pectoral', zone: 'chest' as BodyZone, structureIds: [
    'ten-pectoralis-major-tendon',
  ]},
  { id: 'grp-espalda-sup', label: 'Espalda superficial', zone: 'back' as BodyZone, structureIds: [
    'mus-latissimus-dorsi',
    'mus-trapezius',
  ]},
  { id: 'grp-gluteos', label: 'Glúteos', zone: 'hip' as BodyZone, structureIds: [
    'mus-gluteus-maximus',
    'mus-gluteus-medius',
    'mus-gluteus-minimus',
  ]},
  { id: 'grp-rot-cadera', label: 'Rotadores profundos', zone: 'hip' as BodyZone, structureIds: [
    'mus-piriformis',
    'mus-obturator-internus',
    'mus-superior-gemellus',
    'mus-inferior-gemellus',
    'mus-quadratus-femoris',
  ]},
  { id: 'grp-cadera-otros', label: 'Cadera (otros)', zone: 'hip' as BodyZone, structureIds: [
    'mus-psoas-minor',
    'mus-obturator-externus',
  ]},
  { id: 'grp-cadera-art', label: 'Cadera', zone: 'hip' as BodyZone, structureIds: [
    'art-hip-joint',
  ]},
  { id: 'grp-cadera-huesos', label: 'Huesos de la cadera', zone: 'hip' as BodyZone, structureIds: [
    'bone-hip-bone',
  ]},
  { id: 'grp-cadera-ner', label: 'Nervios de la cadera', zone: 'hip' as BodyZone, structureIds: [
    'ner-superior-gluteal-nerve',
    'ner-inferior-gluteal-nerve',
    'ner-lateral-femoral-cutaneous-nerve',
    'ner-obturator-nerve',
    'ner-pudendal-nerve',
  ]},
  { id: 'grp-cadera-lig', label: 'Ligamentos de la cadera', zone: 'hip' as BodyZone, structureIds: [
    'lig-ligament-of-head-of-femur',
    'lig-transverse-acetabular-ligament',
    'lig-sacrospinous-ligament',
    'lig-sacrotuberal-ligament',
    'lig-iliolumbar-ligament',
  ]},
  { id: 'grp-cadera-ten', label: 'Tendones de la cadera', zone: 'hip' as BodyZone, structureIds: [
    'ten-gluteus-medius-tendon',
    'ten-iliopsoas-tendon',
  ]},
  { id: 'grp-cuadriceps', label: 'Cuádriceps', zone: 'thigh' as BodyZone, structureIds: [
    'mus-rectus-femoris',
    'mus-vastus-medialis-obliquus',
    'mus-vastus-lateralis',
    'mus-vastus-intermedius',
  ]},
  { id: 'grp-muslo-ant-otros', label: 'Muslo anterior (otros)', zone: 'thigh' as BodyZone, structureIds: [
    'mus-psoas-major',
    'mus-iliacus',
    'mus-sartorius',
    'mus-pectineus',
    'mus-articularis-genu',
    'mus-tensor-fasciae-latae',
  ]},
  { id: 'grp-isquios', label: 'Isquiotibiales', zone: 'thigh' as BodyZone, structureIds: [
    'mus-biceps-femoris-long-head',
    'mus-biceps-femoris-short-head',
    'mus-semitendinosus',
    'mus-semimembranosus',
  ]},
  { id: 'grp-aductores', label: 'Aductores', zone: 'thigh' as BodyZone, structureIds: [
    'mus-adductor-magnus',
    'mus-adductor-longus',
    'mus-adductor-brevis',
    'mus-adductor-minimus',
    'mus-gracilis',
  ]},
  { id: 'grp-muslo-ten', label: 'Tendones del muslo', zone: 'thigh' as BodyZone, structureIds: [
    'ten-hamstring-tendons',
    'ten-adductor-longus',
    'ten-patellar-ligament',
    'ten-quadriceps-tendon',
    'ten-pes-anserinus',
  ]},
  { id: 'grp-rodilla-art', label: 'Rodilla', zone: 'thigh' as BodyZone, structureIds: [
    'art-knee-joint',
    'art-patellofemoral-joint',
  ]},
  { id: 'grp-rodilla-lig', label: 'Ligamentos de la rodilla', zone: 'thigh' as BodyZone, structureIds: [
    'lig-anterior-cruciate-ligament',
    'lig-posterior-cruciate-ligament',
    'lig-fibular-collateral-ligament',
  ]},
  { id: 'grp-rodilla-huesos', label: 'Huesos de la rodilla', zone: 'thigh' as BodyZone, structureIds: [
    'bone-femur',
    'bone-patella',
  ]},
  { id: 'grp-triceps-surae', label: 'Tríceps Sural', zone: 'lower-leg' as BodyZone, structureIds: [
    'mus-gastrocnemius',
    'mus-soleus',
  ]},
  { id: 'grp-ten-aquiles', label: 'Tendón de Aquiles', zone: 'lower-leg' as BodyZone, structureIds: [
    'ten-achilles-tendon',
  ]},
  { id: 'grp-pierna-post-prof', label: 'Pierna posterior profunda', zone: 'lower-leg' as BodyZone, structureIds: [
    'mus-tibialis-posterior',
    'mus-flexor-digitorum-longus',
    'mus-flexor-hallucis-longus',
  ]},
  { id: 'grp-ten-tib-post', label: 'Tendón tibial posterior', zone: 'lower-leg' as BodyZone, structureIds: [
    'ten-tibialis-posterior-tendon',
  ]},
  { id: 'grp-pierna-ant', label: 'Pierna anterior', zone: 'lower-leg' as BodyZone, structureIds: [
    'mus-tibialis-anterior',
    'mus-extensor-digitorum-longus',
    'mus-extensor-hallucis-longus',
    'mus-fibularis-tertius',
    'mus-plantaris',
    'mus-popliteus',
  ]},
  { id: 'grp-fibulares', label: 'Fibulares', zone: 'lower-leg' as BodyZone, structureIds: [
    'mus-fibularis-longus',
    'mus-fibularis-brevis',
  ]},
  { id: 'grp-ten-fib-long', label: 'Tendón fibular largo', zone: 'lower-leg' as BodyZone, structureIds: [
    'ten-fibularis-longus-tendon',
  ]},
  { id: 'grp-plantar-fascia', label: 'Fascia plantar', zone: 'ankle-foot' as BodyZone, structureIds: [
    'ten-plantar-fascia',
  ]},
  { id: 'grp-pie-intrinsecos', label: 'Pie intrínseco', zone: 'ankle-foot' as BodyZone, structureIds: [
    'mus-extensor-hallucis-brevis',
    'mus-extensor-digitorum-brevis',
    'mus-abductor-hallucis',
    'mus-flexor-digitorum-brevis',
    'mus-abductor-digiti-minimi-foot',
    'mus-quadratus-plantae',
    'mus-lumbrical-muscles-of-foot',
    'mus-flexor-hallucis-brevis',
    'mus-adductor-hallucis',
    'mus-interossei-of-foot',
  ]},
  { id: 'grp-tobillo-art', label: 'Tobillo', zone: 'lower-leg' as BodyZone, structureIds: [
    'art-ankle-joint',
    'art-subtalar-joint',
    'art-tibiofibular-joint',
  ]},
  { id: 'grp-tobillo-huesos', label: 'Huesos del tobillo', zone: 'lower-leg' as BodyZone, structureIds: [
    'bone-talus',
    'bone-calcaneus',
    'bone-fibula',
    'bone-tibia',
  ]},
  { id: 'grp-pie-huesos', label: 'Huesos del pie', zone: 'ankle-foot' as BodyZone, structureIds: [
    'bone-navicular-bone',
    'bone-metatarsal-bones',
  ]},
  { id: 'grp-pierna-ner', label: 'Nervios de la pierna', zone: 'lower-leg' as BodyZone, structureIds: [
    'ner-common-peroneal-nerve',
    'ner-tibial-nerve',
    'ner-sciatic-nerve',
    'ner-femoral-nerve',
    'ner-lumbar-nerve',
  ]},
  { id: 'grp-pie-lig', label: 'Ligamentos del pie', zone: 'ankle-foot' as BodyZone, structureIds: [
    'lig-calcaneofibular-ligament',
    'lig-anterior-talofibular-ligament',
    'lig-anterior-tibiofibular-ligament',
    'lig-flexor-retinaculum-of-ankle',
    'lig-plantar-calcaneonavicular-ligament',
    'lig-long-plantar-ligament',
  ]},
];

export function groupsForStructure(structureId: string): AnatomyGroup[] {
  return ANATOMY_GROUPS.filter((g) => g.structureIds.includes(structureId));
}

export function primaryGroup(structureId: string): AnatomyGroup | undefined {
  const m = groupsForStructure(structureId);
  return m.length ? m.reduce((a, b) => (a.structureIds.length <= b.structureIds.length ? a : b)) : undefined;
}
