// Genera anatomyHierarchy.ts cubriendo TODAS las 267 estructuras del grafo.
// Organiza por región anatómica → grupo funcional → structureIds.
const fs = require('fs');

// Extraer todos los IDs y sus zonas del grafo
const files = { muscles: 'mus', bones: 'bone', joints: 'art', tendons: 'ten', nerves: 'ner', ligaments: 'lig' };
const all = {};
for (const [file, prefix] of Object.entries(files)) {
  const src = fs.readFileSync(`src/data/fitness/anatomy/${file}.ts`, 'utf8');
  const re = /id:\s*`([a-z]+-[a-z0-9-]+)`[\s\S]*?zone:\s*`([a-z-]+)`/g;
  let m;
  while ((m = re.exec(src)) !== null) all[m[1]] = { zone: m[2], prefix };
}

// Grupos anatómicos: [id_grupo, label, zone, [ids]]
const G = [];
const add = (id, label, zone, ids) => G.push({ id, label, zone, ids: ids.filter(i => all[i]) });

// ── HEAD/JAW ──
add('grp-masticacion','Músculos de la masticación','head-jaw',['mus-masseter','mus-temporalis','mus-lateral-pterygoid','mus-medial-pterygoid']);
add('grp-cara','Músculos faciales','head-jaw',['mus-occipitofrontalis','mus-orbicularis-oculi','mus-orbicularis-oris','mus-buccinator','mus-zygomaticus-major']);
add('grp-ojo','Extraoculares','head-jaw',['mus-extraocular-muscles']);
add('grp-atm','ATM','head-jaw',['art-temporomandibular-joint']);
add('grp-huesos-cara','Huesos del cráneo','head-jaw',['bone-frontal-bone','bone-parietal-bone','bone-temporal-bone','bone-occipital-bone','bone-sphenoid-bone','bone-ethmoid-bone','bone-zygomatic-bone','bone-maxilla','bone-mandible','bone-vomer','bone-nasal-bone']);

// ── CERVICAL ──
add('grp-cervical-anterior','Cervical anterior','cervical',['mus-scalenus-anterior','mus-scalenus-medius','mus-scalenus-posterior','mus-longus-colli','mus-longus-capitis','mus-rectus-capitis-anterior','mus-rectus-capitis-lateralis']);
add('grp-cervical-posterior','Cervical posterior','cervical',['mus-splenius-capitis','mus-splenius-cervicis','mus-suboccipital-muscles']);
add('grp-hyoideos','Supra/infrahióideos','cervical',['mus-suprahyoid-muscles','mus-infrahyoid-muscles']);
add('grp-cuello-otros','Cuello (otros)','cervical',['mus-sternocleidomastoid','mus-platysma']);
add('grp-cervical-art','Articulación cervical','cervical',['art-cervical-vertebrae']);
add('grp-cervical-huesos','Huesos cervicales','cervical',['bone-atlas','bone-axis','bone-cervical-vertebrae']);
add('grp-cervical-ner','Nervios cervicales','cervical',['ner-accessory-nerve','ner-mandibular-nerve']);

// ── TÓRAX ──
add('grp-respiratorios','Respiratorios','chest',['mus-diaphragm','mus-external-intercostals','mus-internal-intercostals','mus-innermost-intercostals']);
add('grp-torax-profundos','Tórax profundos','chest',['mus-transversus-thoracis','mus-subcostal-muscles','mus-levatores-costarum','mus-sternalis','mus-subclavius','mus-serratus-posterior-superior','mus-serratus-posterior-inferior']);

// ── CORE ──
add('grp-core-anterior','Core anterior','core',['mus-rectus-abdominis','mus-pyramidalis']);
add('grp-core-lateral','Core lateral','core',['mus-external-oblique','mus-internal-oblique','mus-transversus-abdominis']);
add('grp-core-posterior','Core posterior','core',['mus-quadratus-lumborum']);
add('grp-suelo-pelvico','Suelo pélvico','core',['mus-levator-ani','mus-coccygeus']);

// ── COLUMNA ──
add('grp-erector-espina','Erectores de la columna','spine',['mus-erector-spinae','mus-semispinalis','mus-multifidus','mus-rotatores','mus-interspinales','mus-intertransversarii']);
add('grp-columna-huesos','Huesos de la columna','spine',['bone-thoracic-vertebra','bone-lumbar-vertebra','bone-sacrum','bone-coccyx']);
add('grp-columna-art','Articulaciones de columna','spine',['art-lumbar-vertebrae','art-sacroiliac-joint']);
add('grp-caja-toracica','Caja torácica','spine',['bone-sternum','bone-rib']);

// ── HOMBRO ──
add('grp-deltoideus','Deltoideus','shoulder',['mus-deltoideus-anterior','mus-deltoideus-medius','mus-deltoideus-posterior']);
add('grp-manguito','Manguito Rotador','shoulder',['mus-supraspinatus','mus-infraspinatus','mus-teres-minor','mus-subscapularis']);
add('grp-hombro-otros','Hombro (otros)','shoulder',['mus-teres-major','mus-pectoralis-minor']);
add('grp-cintura-escapular','Cintura Escapular','shoulder',['mus-trapezius','mus-serratus-anterior','mus-levator-scapulae','mus-rhomboid-major','mus-rhomboid-minor']);
add('grp-hombro-art','Articulaciones del hombro','shoulder',['art-shoulder-joint','art-acromioclavicular-joint','art-sternoclavicular-joint','art-scapulothoracic-joint']);
add('grp-hombro-huesos','Huesos del hombro','shoulder',['bone-clavicle','bone-scapula','bone-humerus']);
add('grp-hombro-ner','Nervios del hombro','shoulder',['ner-axillary-nerve','ner-suprascapular-nerve','ner-long-thoracic-nerve','ner-pectoral-nerves','ner-thoracodorsal-nerve','ner-musculocutaneous-nerve']);
add('grp-hombro-ten','Tendones del hombro','shoulder',['ten-supraspinatus-tendon','ten-long-head-of-biceps-tendon','ten-pectoralis-major-tendon','ten-triceps-tendon']);
add('grp-hombro-lig','Ligamentos del hombro','shoulder',['lig-transverse-humeral-ligament','lig-trapezoid-ligament']);

// ── BRAZO ──
add('grp-biceps','Bíceps Braquial','arm',['mus-biceps-brachii']);
add('grp-triceps','Tríceps Braquial','arm',['mus-triceps-brachii']);
add('grp-brazo-anterior','Brazo anterior','arm',['mus-brachialis','mus-coracobrachialis']);
add('grp-brazo-art','Codo','arm',['art-elbow-joint','art-radioulnar-articulation','art-radioulnar-articulation-art-druj']);
add('grp-brazo-huesos','Huesos del brazo','arm',['bone-radius','bone-ulna']);
add('grp-brazo-ner','Nervios del brazo','arm',['ner-median-nerve','ner-ulnar-nerve','ner-radial-nerve']);
add('grp-brazo-ten','Tendones del brazo','arm',['ten-biceps-tendon','ten-triceps-tendon','ten-common-extensor-tendon','ten-common-flexor-tendon','ten-de-quervain-s-disease']);
add('grp-brazo-lig','Ligamentos del brazo','arm',['lig-ulnar-collateral-ligament-of-elbow']);

// ── ANTEBRAZO/MANO ──
add('grp-ante-flexores','Flexores del antebrazo','forearm-hand',['mus-flexor-carpi-radialis','mus-flexor-carpi-ulnaris','mus-flexor-digitorum-superficialis','mus-flexor-digitorum-profundus','mus-flexor-pollicis-longus','mus-pronator-teres','mus-pronator-quadratus','mus-palmaris-longus']);
add('grp-ante-extensores','Extensores del antebrazo','forearm-hand',['mus-extensor-carpi-radialis-longus','mus-extensor-carpi-radialis-brevis','mus-extensor-carpi-ulnaris','mus-extensor-digitorum','mus-extensor-digiti-minimi','mus-extensor-pollicis-longus','mus-extensor-pollicis-brevis','mus-extensor-indicis','mus-abductor-pollicis-longus','mus-supinator','mus-brachioradialis','mus-anconeus']);
add('grp-mano-intrinsecos','Mano intrínseca','forearm-hand',['mus-thenar-muscles','mus-hypothenar-muscles','mus-lumbrical-muscles-of-hand','mus-palmar-interossei','mus-dorsal-interossei-of-hand']);
add('grp-mano-art','Muñeca y mano','forearm-hand',['art-wrist-joint','art-hand-joint']);
add('grp-mano-huesos','Huesos de la mano','forearm-hand',['bone-scaphoid','bone-lunate-bone','bone-hamate','bone-trapezium','bone-capitate']);
add('grp-mano-ner','Nervios de la mano','forearm-hand',['ner-posterior-interosseous-nerve']);
add('grp-mano-ten','Tendones de la mano','forearm-hand',['ten-flexor-tendons-of-hand']);
add('grp-mano-lig','Ligamentos de la mano','forearm-hand',['lig-flexor-retinaculum-of-wrist','lig-extensor-retinaculum-of-wrist','lig-dorsal-radio-ulnar-ligament','lig-palmar-radio-ulnar-ligament']);

// ── PECHO ──
add('grp-pectoral','Pectoral','chest',['mus-pectoralis-major','mus-pectoralis-minor']);
add('grp-pectoral-ten','Tendón pectoral','chest',['ten-pectoralis-major-tendon']);

// ── ESPALDA ──
add('grp-espalda-sup','Espalda superficial','back',['mus-latissimus-dorsi','mus-trapezius']);

// ── CADERA ──
add('grp-gluteos','Glúteos','hip',['mus-gluteus-maximus','mus-gluteus-medius','mus-gluteus-minimus']);
add('grp-rot-cadera','Rotadores profundos','hip',['mus-piriformis','mus-obturator-internus','mus-superior-gemellus','mus-inferior-gemellus','mus-quadratus-femoris']);
add('grp-cadera-otros','Cadera (otros)','hip',['mus-psoas-minor','mus-obturator-externus']);
add('grp-cadera-art','Cadera','hip',['art-hip-joint']);
add('grp-cadera-huesos','Huesos de la cadera','hip',['bone-hip-bone']);
add('grp-cadera-ner','Nervios de la cadera','hip',['ner-superior-gluteal-nerve','ner-inferior-gluteal-nerve','ner-lateral-femoral-cutaneous-nerve','ner-obturator-nerve','ner-pudendal-nerve']);
add('grp-cadera-lig','Ligamentos de la cadera','hip',['lig-ligament-of-head-of-femur','lig-transverse-acetabular-ligament','lig-sacrospinous-ligament','lig-sacrotuberal-ligament','lig-iliolumbar-ligament']);
add('grp-cadera-ten','Tendones de la cadera','hip',['ten-gluteus-medius-tendon','ten-iliopsoas-tendon']);

// ── MUSLO ──
add('grp-cuadriceps','Cuádriceps','thigh',['mus-rectus-femoris','mus-vastus-medialis-obliquus','mus-vastus-lateralis','mus-vastus-intermedius']);
add('grp-muslo-ant-otros','Muslo anterior (otros)','thigh',['mus-psoas-major','mus-iliacus','mus-sartorius','mus-pectineus','mus-articularis-genu','mus-tensor-fasciae-latae']);
add('grp-isquios','Isquiotibiales','thigh',['mus-biceps-femoris-long-head','mus-biceps-femoris-short-head','mus-semitendinosus','mus-semimembranosus']);
add('grp-aductores','Aductores','thigh',['mus-adductor-magnus','mus-adductor-longus','mus-adductor-brevis','mus-adductor-minimus','mus-gracilis']);
add('grp-muslo-ten','Tendones del muslo','thigh',['ten-hamstring-tendons','ten-adductor-longus','ten-patellar-ligament','ten-quadriceps-tendon','ten-pes-anserinus']);
add('grp-rodilla-art','Rodilla','thigh',['art-knee-joint','art-patellofemoral-joint']);
add('grp-rodilla-lig','Ligamentos de la rodilla','thigh',['lig-anterior-cruciate-ligament','lig-posterior-cruciate-ligament','lig-fibular-collateral-ligament']);
add('grp-rodilla-huesos','Huesos de la rodilla','thigh',['bone-femur','bone-patella']);

// ── PIERNA ──
add('grp-triceps-surae','Tríceps Sural','lower-leg',['mus-gastrocnemius','mus-soleus']);
add('grp-ten-aquiles','Tendón de Aquiles','lower-leg',['ten-achilles-tendon']);
add('grp-pierna-post-prof','Pierna posterior profunda','lower-leg',['mus-tibialis-posterior','mus-flexor-digitorum-longus','mus-flexor-hallucis-longus']);
add('grp-ten-tib-post','Tendón tibial posterior','lower-leg',['ten-tibialis-posterior-tendon']);
add('grp-pierna-ant','Pierna anterior','lower-leg',['mus-tibialis-anterior','mus-extensor-digitorum-longus','mus-extensor-hallucis-longus','mus-fibularis-tertius','mus-plantaris','mus-popliteus']);
add('grp-fibulares','Fibulares','lower-leg',['mus-fibularis-longus','mus-fibularis-brevis']);
add('grp-ten-fib-long','Tendón fibular largo','lower-leg',['ten-fibularis-longus-tendon']);
add('grp-plantar-fascia','Fascia plantar','ankle-foot',['ten-plantar-fascia']);
add('grp-pie-intrinsecos','Pie intrínseco','ankle-foot',['mus-extensor-hallucis-brevis','mus-extensor-digitorum-brevis','mus-abductor-hallucis','mus-flexor-digitorum-brevis','mus-abductor-digiti-minimi-foot','mus-quadratus-plantae','mus-lumbrical-muscles-of-foot','mus-flexor-hallucis-brevis','mus-adductor-hallucis','mus-interossei-of-foot']);
add('grp-tobillo-art','Tobillo','lower-leg',['art-ankle-joint','art-subtalar-joint','art-tibiofibular-joint']);
add('grp-tobillo-huesos','Huesos del tobillo','lower-leg',['bone-talus','bone-calcaneus','bone-fibula','bone-tibia']);
add('grp-pie-huesos','Huesos del pie','ankle-foot',['bone-navicular-bone','bone-metatarsal-bones']);
add('grp-pierna-ner','Nervios de la pierna','lower-leg',['ner-common-peroneal-nerve','ner-tibial-nerve','ner-sciatic-nerve','ner-femoral-nerve','ner-lumbar-nerve']);
add('grp-pie-lig','Ligamentos del pie','ankle-foot',['lig-calcaneofibular-ligament','lig-anterior-talofibular-ligament','lig-anterior-tibiofibular-ligament','lig-flexor-retinaculum-of-ankle','lig-plantar-calcaneonavicular-ligament','lig-long-plantar-ligament']);

// Generar el archivo TS
let ts = `// src/data/fitness/anatomy/anatomyHierarchy.ts
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
`;
for (const g of G) {
  ts += `  { id: '${g.id}', label: '${g.label}', zone: '${g.zone}' as BodyZone, structureIds: [\n`;
  for (const id of g.ids) ts += `    '${id}',\n`;
  ts += `  ]},\n`;
}
ts += `];

export function groupsForStructure(structureId: string): AnatomyGroup[] {
  return ANATOMY_GROUPS.filter((g) => g.structureIds.includes(structureId));
}

export function primaryGroup(structureId: string): AnatomyGroup | undefined {
  const m = groupsForStructure(structureId);
  return m.length ? m.reduce((a, b) => (a.structureIds.length <= b.structureIds.length ? a : b)) : undefined;
}
`;
fs.writeFileSync('src/data/fitness/anatomy/anatomyHierarchy.ts', ts);

// Verificar cobertura
const allIds = new Set(Object.keys(all));
const covered = new Set(G.flatMap(g => g.ids));
const missing = [...allIds].filter(id => !covered.has(id));
console.log('Grupos:', G.length, '| IDs cubiertos:', covered.size, '/', allIds.size, '| Sin cubrir:', missing.length);
if (missing.length) console.log('Sin cubrir:', missing.join(', '));
