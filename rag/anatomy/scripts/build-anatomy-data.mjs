// rag/anatomy/scripts/build-anatomy-data.mjs
// AG-ANATOM — tarea 3: normaliza las fichas JSON recuperadas (chat 1787414859303)
// + el inventario GLB a los tipos de src/data/fitness/anatomy/types.ts.
// Genera: muscles.ts tendons.ts nerves.ts joints.ts bones.ts ligaments.ts
//         modelCatalog.ts meshIndex.ts
// Uso: node rag/anatomy/scripts/build-anatomy-data.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(process.cwd());
const FICHAS = readFileSync(join(ROOT, 'biblioteca/extracciones/chat-1787414859303-atlas-anatomico-fichas.md'), 'utf8');
const GLB_DIR = join(ROOT, 'public/models/anatomy');

// ── utilidades ────────────────────────────────────────────────────────────────
const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u200b\u200c\ufeff]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const esc = (s) => String(s ?? '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

// ── 1. parsear GLB → node names + mesh names por modelo ──────────────────────
function parseGlb(buf) {
  const total = buf.readUInt32LE(8);
  let off = 12, json = null;
  while (off < total) {
    const cl = buf.readUInt32LE(off), ct = buf.readUInt32LE(off + 4);
    if (ct === 0x4e4f534a) { json = JSON.parse(buf.subarray(off + 8, off + 8 + cl).toString('utf8')); break; }
    off += 8 + cl + ((4 - (cl % 4)) % 4);
  }
  return json;
}
const glbFiles = readdirSync(GLB_DIR).filter((f) => f.endsWith('.glb'));
const MODELS = {}; // key -> {file,sizeMb,nodes:Set,meshes:Set,meshCount}
for (const f of glbFiles) {
  const j = parseGlb(readFileSync(join(GLB_DIR, f)));
  const key = f.replace('.glb', '');
  MODELS[key] = {
    file: `/models/anatomy/${f}`,
    sizeMb: Math.round((readFileSync(join(GLB_DIR, f)).length / 1048576) * 100) / 100,
    nodes: new Set((j.nodes ?? []).map((n) => n.name).filter(Boolean)),
    meshes: new Set((j.meshes ?? []).map((m) => m.name).filter((n) => n && !/^mesh\.\d+$/.test(n))),
    meshCount: (j.meshes ?? []).length,
  };
}

// matching por PREFIJO de secuencia de palabras: evita ruido (p. ej. "Circumflex
// scapular artery" NO matchea "Scapula"). Los casos multi-cabeza van en EXPLICIT_ALIASES.
function matchName(structName, target) {
  const a = norm(structName), b = norm(target);
  if (!a || a.length < 4) return false;
  return b === a || b.startsWith(a + ' ') || b.startsWith(a + '.') || b.startsWith(a);
}
const EXPLICIT_ALIASES = {
  'biceps brachii': ['Long head of biceps brachii', 'Short head of biceps brachii'],
  'triceps brachii': ['Long head of triceps brachii', 'Lateral head of triceps brachii', 'Medial head of triceps brachii'],
  'sciatic nerve': ['Schiatic nerve'], // typo en el modelo lower-limb
  'calcaneal tendon': ['Calcaneal tendon'],
  'patellar ligament': ['Quadriceps common tendon and patellar ligament'],
  'tibial nerve': ['Tibial nerve'],
  'deltoid': ['Deltoid muscle'],
  'tibialis anterior': ['Tibialis anterior muscle'],
  'tibialis posterior': ['Tibialis posterior muscle'],
  'gastrocnemius': ['Medial head of gastrocnemius', 'Lateral head of gastrocnemius'],
  'biceps femoris': ['Long head of biceps femoris', 'Short head of biceps femoris', 'Common tendon of biceps femoris'],
  'flexor digitorum superficialis': ['Flexor digitorum superficialis humeral head', 'Flexor digitorum superficialis ulnar head'],
};
// alias de matching por id legado (tendones: nombres latinos → nodos del modelo)
const TENDON_ALIASES = {
  'TEN-001': ['Calcaneal tendon'],
  'TEN-002': ['Quadriceps common tendon and patellar ligament', 'Patella'],
  'TEN-003': ['Quadriceps common tendon and patellar ligament', 'Quadriceps femoris'],
  'TEN-004': ['Supraspinatus muscle'],
  'TEN-005': ['Tendon of Long head of biceps brachii', 'Long head of biceps brachii'],
  'TEN-006': ['Common tendon of biceps brachii'],
  'TEN-009': ['Common tendon of Semitendinosus and Long head of biceps femoris', 'Semimembranosus muscle tendon'],
  'TEN-010': ['Gluteus medius muscle', 'Gluteus minimus muscle'],
  'TEN-011': ['Tibialis posterior muscle', 'Tibialis posterior tendon sheath'],
  'TEN-012': ['Fibularis longus muscle', 'Fibularis brevis muscle'],
  'TEN-015': ['Plantar ligaments'],
  'TEN-016': ['Sartorius muscle', 'Gracilis muscle', 'Semitendinosus muscle'],
  'TEN-018': ['Common tendon of triceps brachii'],
  'TEN-020': ['Abductor pollicis longus', 'Extensor pollicis brevis'],
};
// articulaciones → huesos constituyentes (el visor resalta los huesos de la articulación)
const JOINT_BONE_ALIASES = {
  'ART-001': ['Humerus', 'Scapula'],
  'ART-002': ['Clavicle', 'Scapula'],
  'ART-SC': ['Clavicle', 'Sternum'],
  'ART-003': ['Humerus', 'Radius', 'Ulna'],
  'ART-PRUJ': ['Radius', 'Ulna'],
  'ART-004': ['Radius', 'Scaphoid', 'Lunate bone'],
  'ART-DRUJ': ['Radius', 'Ulna'],
  'ART-013': ['Capitate', 'Hamate', 'Trapezium'],
  'ART-005': ['Atlas', 'Axis', 'Cervical vertebrae'],
  'ART-006': ['Lumbar vertebra', 'Sacrum'],
  'ART-007': ['Sacrum', 'Hip bone'],
  'ART-008': ['Femur', 'Hip bone'],
  'ART-009': ['Femur', 'Tibia', 'Patella'],
  'ART-PAT': ['Patella', 'Femur'],
  'ART-010': ['Talus', 'Tibia', 'Fibula'],
  'ART-011': ['Talus', 'Calcaneus', 'Navicular bone'],
  'ART-TFS': ['Fibula', 'Tibia'],
  'ART-ATM': ['Mandible', 'Temporal bone'],
};
function findMeshes(nameEn, synonyms = []) {
  const out = {};
  const names = [nameEn, ...synonyms, ...(EXPLICIT_ALIASES[norm(nameEn)] ?? [])];
  for (const [mkey, m] of Object.entries(MODELS)) {
    const hits = new Set();
    for (const query of names) {
      const q = norm(query);
      if (!q || q.length < 4) continue;
      for (const node of m.nodes) if (matchName(query, node)) hits.add(node);
      for (const mesh of m.meshes) if (matchName(query, mesh)) hits.add(mesh);
    }
    if (hits.size) out[mkey] = [...hits].sort();
  }
  return out;
}

// ── 2. extraer fichas JSON del markdown ──────────────────────────────────────
function jsonBlocks(md) {
  return [...md.matchAll(/```json\r?\n([\s\S]*?)```/g)].map((m) => m[1]);
}
const m9 = FICHAS.indexOf('## Mensaje 9');
const tailBlocks = jsonBlocks(FICHAS.slice(m9));
const musclesFichas = JSON.parse(jsonBlocks(FICHAS).filter((b) => { try { const j = JSON.parse(b); return j._meta?.version === '2.0' && Array.isArray(j.fichas) && j.fichas.length > 100; } catch { return false; } })[0]).fichas;
const nervesFichas = JSON.parse(tailBlocks[0]).nervios;
const jointsFichas = JSON.parse(tailBlocks[1]).articulaciones;

// tendones: bloque truncado en el export — objetos línea a línea + TEN-020 rescatado a mano
const tstart = FICHAS.indexOf('ARCHIVO 2: TENDONES COMPLETOS');
const tend = FICHAS.slice(tstart, m9);
const tendonesFichas = [...tend.matchAll(/^[ \t]*(\{"id":"TEN-.*\}),?[ \t]*$/gm)].map((m) => JSON.parse(m[1]));
// TEN-020 quedó cortado en el export ("insercion":"Base del 1…"); visibles: id/nombre/cientifico/musculo/inserción parcial.
tendonesFichas.push({
  id: 'TEN-020', nombre: 'Tendones de De Quervain', cientifico: 'Tendines Mm. Abductoris Pollicis Longi et Extensoris Pollicis Brevis',
  musculo: 'MUS-086, MUS-087', insercion: 'Base del 1er metacarpiano (truncado en el export; verificar contra Gray\'s)',
  lesiones: 'Tenosinovitis de De Quervain', rehab: ['Inmovilización breve + carga progresiva en pulgar', 'Eccéntricos de extensión/abducción de pulgar'],
  riesgo: ['Repetición de pinza + desviación radial de muñeca', 'Agarre fuerte con muñeca desviada'],
  relaciones: { articulaciones: ['ART-004'] }, wiki_en: 'De_quervain%27s_disease',
  _recuperadoParcial: true,
});

// ── 3. tablas de mapeo ────────────────────────────────────────────────────────
const MUSCLE_ZONE = {
  'Head & Mastication': ['head-jaw'], 'Neck & Cervical': ['cervical'], 'Respiratory': ['chest'],
  'Abdominal Group': ['core'], 'Erector Spinae': ['spine'], 'Trapezius & Rhomboids': ['back'],
  'Latissimus Dorsi & Teres Major': ['back'], 'Pectoral Region': ['chest'], 'Scapular & Thoracic': ['back'],
  'Rotator Cuff Group': ['shoulder'], 'Deltoid Group': ['shoulder'], 'Biceps Group': ['arm'],
  'Triceps Brachii Group': ['arm'], 'Forearm Group': ['forearm-hand'], 'Intrinsic Hand': ['forearm-hand'],
  'Hip Flexor Group': ['hip'], 'Gluteal Region': ['hip'], 'Deep Hip Rotators': ['hip'],
  'Quadriceps Femoris': ['thigh', 'knee', 'hip'], 'Hamstring Group': ['thigh', 'knee', 'hip'],
  'Adductor Group': ['hip', 'thigh'], 'Leg Anterior': ['lower-leg', 'ankle-foot'], 'Fibular Group': ['lower-leg', 'ankle-foot'],
  'Calf Group': ['lower-leg', 'knee', 'ankle-foot'], 'Intrinsic Foot': ['ankle-foot'], 'Pelvic Floor': ['core'],
};
const JOINT_ZONE = {
  'ART-001': ['shoulder'], 'ART-002': ['shoulder'], 'ART-SC': ['shoulder'], 'ART-012': ['shoulder', 'back'],
  'ART-003': ['arm'], 'ART-PRUJ': ['arm'], 'ART-004': ['forearm-hand'], 'ART-DRUJ': ['forearm-hand'], 'ART-013': ['forearm-hand'],
  'ART-005': ['cervical'], 'ART-006': ['spine'], 'ART-007': ['hip', 'spine'], 'ART-008': ['hip'],
  'ART-009': ['knee'], 'ART-PAT': ['knee'], 'ART-010': ['ankle-foot'], 'ART-011': ['ankle-foot'], 'ART-TFS': ['lower-leg', 'ankle-foot'],
  'ART-ATM': ['head-jaw'],
};
const TENDON_ZONE = {
  'TEN-001': ['ankle-foot'], 'TEN-002': ['knee'], 'TEN-003': ['knee'], 'TEN-004': ['shoulder'], 'TEN-005': ['shoulder'],
  'TEN-006': ['arm'], 'TEN-007': ['arm'], 'TEN-008': ['arm'], 'TEN-009': ['hip', 'knee'], 'TEN-010': ['hip'],
  'TEN-011': ['ankle-foot'], 'TEN-012': ['ankle-foot'], 'TEN-013': ['hip'], 'TEN-014': ['forearm-hand'], 'TEN-015': ['ankle-foot'],
  'TEN-016': ['knee'], 'TEN-017': ['hip'], 'TEN-018': ['arm'], 'TEN-019': ['chest', 'shoulder'], 'TEN-020': ['forearm-hand'],
};
const NERVE_ZONE = {
  'NER-001': ['forearm-hand'], 'NER-002': ['arm', 'forearm-hand'], 'NER-003': ['arm', 'forearm-hand'], 'NER-004': ['shoulder'],
  'NER-005': ['shoulder', 'back'], 'NER-006': ['chest', 'back'], 'NER-007': ['cervical', 'back'], 'NER-008': ['hip', 'thigh', 'lower-leg'],
  'NER-009': ['hip', 'thigh'], 'NER-010': ['lower-leg', 'ankle-foot'], 'NER-011': ['lower-leg', 'ankle-foot'], 'NER-012': ['hip'],
  'NER-013': ['spine'], 'NER-014': ['core'], 'NER-PIN': ['forearm-hand'], 'NER-OBT': ['hip', 'thigh'],
  'NER-GLS': ['hip'], 'NER-GLI': ['hip'], 'NER-MC': ['arm'], 'NER-TD': ['back'], 'NER-PEC': ['chest', 'shoulder'], 'NER-V3': ['head-jaw'],
};
const ACTION_TAGS = [
  ['flexor', /flexion|flexi|flexo|flexiona|dorsiflex/i], ['extensor', /extensi|extiende|extensor|plantarflex/i],
  ['abductor', /abduce|abducc/i], ['adductor', /aduce|aducc/i], ['rotator', /rota|rotac/i], ['stabilizer', /estabil/i],
  ['elevator', /eleva/i], ['depressor', /deprime|depresi/i], ['protractor', /protru/i], ['retractor', /retru/i],
  ['pronator', /prona/i], ['supinator', /supina/i], ['invertor', /invierte|inversion|invers/i], ['evertor', /evertie|evers/i],
  ['respiratory', /respira|inspira|espira/i], ['masticator', /mastica|mand[ií]b/i],
];

// músculos "primarios de entrenamiento": presentes en la BD de músculos de fitness (READ)
const muscleDataSrc = readFileSync(join(ROOT, 'src/data/fitness/muscleData.ts'), 'utf8');
const TRAINING_NAMES = [...muscleDataSrc.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);

function isPrimaryForTraining(cientifico, nombre) {
  const c = norm(cientifico), n = norm(nombre);
  return TRAINING_NAMES.some((t) => {
    const tn = norm(t);
    return tn.includes(c) || c.includes(tn) || tn.includes(n) || n.includes(tn);
  });
}

// resolver refs legados MUS-xxx → slugs (los ART se resuelvan vía artToSlugFinal más abajo)
const legacyToSlug = new Map(musclesFichas.map((m) => [m.id, 'mus-' + slug(m.cientifico)]));

// ── 4. generar entries ───────────────────────────────────────────────────────
const FICHAS_REF = { sourceId: 'chat-1787414859303-atlas-anatomico-fichas', pending: true, note: 'Fichas JSON recuperadas por AG-BIB (biblioteca/extracciones/); verificación contra Gray\'s/Moore PENDIENTE (plan-extraccion.md)' };
const MODEL_REF = { sourceId: 'rag-anatomy-modelos-inventario', note: 'Inventario GLB tarea 1 (nombres de nodo/mesh del modelo)' };

const KIND_PREFIX = { muscle: 'mus', tendon: 'ten', nerve: 'ner', joint: 'art', bone: 'bone', ligament: 'lig' };
function baseEntry(kind, legacyId, nameEn, nameEs, zones, modelMeshes, extraRefs = []) {
  const [zone, ...rest] = zones;
  return { id: `${KIND_PREFIX[kind]}-${slug(nameEn)}`, legacyId, kind, nameEn, nameEs, synonyms: [], zone, ...(rest.length ? { zones: rest } : {}), modelMeshes, sourceRefs: [FICHAS_REF, ...extraRefs] };
}

const muscles = musclesFichas.map((f) => {
  const e = baseEntry('muscle', f.id, f.cientifico, f.nombre, MUSCLE_ZONE[f.grupo] ?? ['spine'], findMeshes(f.cientifico, [f.nombre]));
  const actionTags = ACTION_TAGS.filter(([, re]) => re.test(f.funcion ?? '')).map(([t]) => t);
  if (!actionTags.length) actionTags.push('other'); // expresión facial etc.
  return {
    ...e,
    synonyms: [f.nombre, f.cientifico].filter((x, i, arr) => x && arr.indexOf(x) === i),
    origin: f.origen ?? '', insertion: f.insercion ?? '', innervation: f.inervacion ?? '',
    action: (f.funcion ?? '').split(/;|,\s(?=[a-záéíóú])/).map((s) => s.trim()).filter(Boolean),
    actionTags,
    biomechanicalRole: f.rol_biomecanico ?? '',
    aesthetics: f.estetica ?? undefined,
    trainingExercises: f.ejercicios ?? [],
    riskExercises: f.ejercicios_riesgo ?? [],
    synergists: (f.relaciones?.sinergistas ?? []).map((l) => legacyToSlug.get(l)).filter(Boolean),
    antagonists: (f.relaciones?.antagonistas ?? []).map((l) => legacyToSlug.get(l)).filter(Boolean),
    primaryForTraining: isPrimaryForTraining(f.cientifico, f.nombre),
    wikiEn: f.wiki_en,
  };
});

const tendons = tendonesFichas.map((f) => {
  const aliases = TENDON_ALIASES[f.id] ?? [];
  const nameEn = f.wiki_en ? f.wiki_en.replace(/_/g, ' ').replace(/%27/g, "'") : f.cientifico;
  const zones = TENDON_ZONE[f.id] ?? ['knee'];
  const id = 'ten-' + slug(nameEn);
  const modelMeshes = aliases.length ? findMeshes(aliases[0], aliases.slice(1)) : findMeshes(f.cientifico, [f.nombre]);
  return { id, legacyId: f.id, kind: 'tendon', nameEn, nameEs: f.nombre, synonyms: [f.nombre, f.cientifico], zone: zones[0], ...(zones.length > 1 ? { zones: zones.slice(1) } : {}), modelMeshes, sourceRefs: [FICHAS_REF], insertion: f.insercion ?? '', muscles: (f.musculo ?? '').split(',').map((s) => legacyToSlug.get(s.trim())).filter(Boolean), injuries: f.lesiones ?? '', rehab: f.rehab ?? [], risks: f.riesgo ?? [], wikiEn: f.wiki_en, ...(f._recuperadoParcial ? { sourceRefs: [FICHAS_REF, { sourceId: 'TODO-cita', note: 'Ficha truncada en el export del chat (TEN-020): campos finales reconstruidos parcialmente — completar con Gray\'s 4th ed.' }] } : {}) };
});

// ids de articulación deterministas (con dedupe PRUJ/DRUJ) — se calculan ANTES para
// que artToSlug resuelva referencias cruzadas de nervios y ligamentos.
const jointIds = new Map();
{
  const seen = new Set();
  for (const f of jointsFichas) {
    const nameEn = f.wiki ? f.wiki.replace(/_/g, ' ') : f.n.replace(/\s*\(.*\)\s*/g, ' ').trim();
    let id = `art-${slug(nameEn)}`;
    if (seen.has(id)) id += '-' + slug(f.id); // PRUJ/DRUJ comparten wiki name
    seen.add(id);
    jointIds.set(f.id, id);
  }
}
const artToSlugFinal = jointIds;

const joints = jointsFichas.map((f) => {
  const nameEn = f.wiki ? f.wiki.replace(/_/g, ' ') : f.n.replace(/\s*\(.*\)\s*/g, ' ').trim();
  // las articulaciones no son meshes: se resaltan sus huesos constituyentes (alias)
  const boneAliases = JOINT_BONE_ALIASES[f.id] ?? [];
  const modelMeshes = boneAliases.length ? findMeshes(boneAliases[0], boneAliases) : {};
  for (const k of Object.keys(modelMeshes)) modelMeshes[k] = [...new Set(modelMeshes[k])].slice(0, 10);
  const e = baseEntry('joint', f.id, nameEn, f.n, JOINT_ZONE[f.id] ?? ['spine'], modelMeshes);
  e.id = artToSlugFinal.get(f.id);
  return { ...e, synonyms: [f.n, f.nombre, f.sci].filter((v, i, a) => v && a.indexOf(v) === i), jointType: f.tipo ?? '', bones: f.huesos ?? '', movements: f.mov ?? '', romNote: 'ROM numérico por eje pendiente — extraer de Norkin/Levangie 6ª ed. (TODO-cita)', stabilizers: f.estab ?? '', lesions: f.les ?? '', rehab: f.reh ?? [], riskyUnderLoad: f.rie ?? [], relatedStructures: (f.rel ?? []).map((l) => artToSlugFinal.get(l) ?? legacyToSlug.get(l)).filter(Boolean), wikiEn: f.wiki };
});

const nerves = nervesFichas.map((f) => {
  const nameEn = (f.wiki ? f.wiki.replace(/_/g, ' ').replace(/%27/g, "'") : (f.cientifico || f.sci || f.n).replace(/^Nervus /, '').replace(/^Nervio /, ''));
  const e = baseEntry('nerve', f.id, nameEn, f.n, NERVE_ZONE[f.id] ?? ['spine'], findMeshes(nameEn, [f.n, f.nombre]));
  return { ...e, synonyms: [f.n, f.nombre, f.cientifico, f.sci].filter((v, i, a) => v && a.indexOf(v) === i), entrapmentSite: f.zona ?? '', innervates: f.inerva ?? '', symptoms: f.sint ?? '', lesionContext: f.lesion ?? '', rehab: f.reh ?? [], risks: f.rie ?? [], relatedStructures: (f.rel ?? []).map((l) => artToSlugFinal.get(l) ?? legacyToSlug.get(l)).filter(Boolean), wikiEn: f.wiki };
});

// ── huesos curados (nombres presentes en los modelos; ficha descriptiva TODO-cita) ──
const BONE_CURATED = [
  ['Frontal bone', 'Hueso frontal', ['colored-skull-base', 'overview-skeleton'], ''],
  ['Parietal bone', 'Hueso parietal', [], ''],
  ['Temporal bone', 'Hueso temporal', ['colored-skull-base', 'overview-skeleton'], ''],
  ['Occipital bone', 'Hueso occipital', ['colored-skull-base', 'overview-skeleton'], ''],
  ['Sphenoid bone', 'Hueso esfenoides', ['colored-skull-base', 'overview-skeleton'], ''],
  ['Ethmoid bone', 'Hueso etmoides', ['colored-skull-base', 'overview-skeleton'], ''],
  ['Zygomatic bone', 'Hueso cigomático', ['colored-skull-base', 'overview-skeleton'], ''],
  ['Maxilla', 'Maxilar', ['colored-skull-base'], ''],
  ['Mandible', 'Mandíbula', ['colored-skull-base', 'overview-skeleton'], 'Inserción del masetero y temporal (masticación).'],
  ['Vomer', 'Vómer', ['colored-skull-base'], ''],
  ['Nasal bone', 'Hueso nasal', ['colored-skull-base'], ''],
  ['Atlas', 'Atlas (C1)', ['overview-skeleton'], 'Soporte craneocervical; rotación con C2.'],
  ['Axis', 'Axis (C2)', ['overview-skeleton'], 'Pivote de rotación cervical.'],
  ['Cervical vertebrae', 'Vértebras cervicales (C3-C7)', ['overview-skeleton'], ''],
  ['Thoracic vertebra', 'Vértebras torácicas (T1-T12)', ['overview-skeleton', 'upper-limb'], ''],
  ['Lumbar vertebra', 'Vértebras lumbares (L1-L5)', ['overview-skeleton', 'upper-limb', 'lower-limb'], 'Carga axial en squat/deadlift.'],
  ['Sacrum', 'Sacro', ['overview-skeleton', 'upper-limb', 'lower-limb'], 'Transmite carga columna→cadera.'],
  ['Coccyx', 'Cóccix', ['overview-skeleton', 'lower-limb'], ''],
  ['Sternum', 'Esternón', ['overview-skeleton'], 'Inserción de pectoral mayor y costillas.'],
  ['Rib', 'Costillas', ['overview-skeleton'], ''],
  ['Clavicle', 'Clavícula', ['overview-skeleton'], 'Pilar del hombro; lesión típica en caídas.'],
  ['Scapula', 'Escápula', ['overview-skeleton'], 'Base del manguito rotador y trapecio.'],
  ['Humerus', 'Húmero', ['overview-skeleton', 'upper-limb'], 'Canal de torsión (nervio radial).'],
  ['Radius', 'Radio', ['overview-skeleton', 'upper-limb', 'hand'], ''],
  ['Ulna', 'Ulna', ['overview-skeleton', 'upper-limb', 'hand'], ''],
  ['Patella', 'Rótula', ['overview-skeleton', 'lower-limb'], 'Polea del aparato extensor.'],
  ['Hip bone', 'Hueso coxal', ['overview-skeleton', 'lower-limb'], 'Acetábulo = cadera.'],
  ['Femur', 'Fémur', ['overview-skeleton', 'lower-limb'], 'Palanca del squat; cuello vulnerable.'],
  ['Tibia', 'Tibia', ['overview-skeleton', 'lower-limb'], 'Soporte de carga principal.'],
  ['Fibula', 'Peroné', ['overview-skeleton', 'lower-limb'], 'Cabeza: nervio fibular común.'],
  ['Talus', 'Astrágalo', ['overview-skeleton', 'lower-limb'], ''],
  ['Calcaneus', 'Calcáneo', ['overview-skeleton', 'lower-limb'], 'Inserción del Aquiles.'],
  ['Navicular bone', 'Escafoides tarsiano', ['overview-skeleton', 'lower-limb'], 'Inserción tibial posterior.'],
  ['Metatarsal bones', 'Metatarsianos', ['overview-skeleton', 'lower-limb'], ''],
  ['Scaphoid', 'Escafoides (carpo)', ['overview-skeleton', 'hand'], ''],
  ['Lunate bone', 'Semilunar', ['overview-skeleton', 'hand'], ''],
  ['Hamate', 'Ganchoso', ['overview-skeleton', 'hand'], ''],
  ['Trapezium', 'Trapecio (carpo)', ['overview-skeleton', 'hand'], 'Canal de Guyon vecino.'],
  ['Capitate', 'Grande (carpo)', ['overview-skeleton', 'hand'], ''],
];
const BONE_EXTRA_SYNONYMS = {
  'Parietal bone': ['Parietal bone.l', 'Parietal bone.r', 'Parietal bone left', 'Parietal bone right'],
  Mandible: ['Mandible bone'], Maxilla: ['Maxilla bone'], Atlas: ['Atlas (C1)'], Axis: ['Axis (C2)'],
  Sternum: ['Body of sternum', 'Manubrium of sternum'], Rib: ['Rib'], Scapula: ['Scapula.r.'],
  'Cervical vertebrae': ['Cervical vertebrae (C3)', 'Cervical vertebrae (C4)', 'Cervical vertebrae (C5)', 'Cervical vertebrae (C6)', 'Cervical vertebrae (C7)'],
  'Thoracic vertebra': ['Thoracic vertebra (T1)', 'Thoracic vertebra (T2)', 'Thoracic vertebra (T3)', 'Thoracic vertebra (T4)', 'Thoracic vertebra (T5)', 'Thoracic vertebra (T6)', 'Thoracic vertebra (T7)', 'Thoracic vertebra (T8)', 'Thoracic vertebra (T9)', 'Thoracic vertebra (T10)', 'Thoracic vertebra (T11)', 'Thoracic vertebra (T12)'],
  'Lumbar vertebra': ['Lumbar vertebra (L1)', 'Lumbar vertebra (L2)', 'Lumbar vertebra (L3)', 'Lumbar vertebra (L4)', 'Lumbar vertebra (L5)'],
  'Metatarsal bones': ['First metatarsal bone', 'Second metatarsal bone', 'Third metatarsal bone', 'Fourth metatarsal bone', 'Fifth metatarsal bone'],
  Radius: ['radius.001'], Ulna: ['ulna.001'],
};
const bones = BONE_CURATED.map(([en, es, prefer, note]) => {
  const modelMeshes = findMeshes(en, [es, ...(BONE_EXTRA_SYNONYMS[en] ?? [])]);
  // dedupe y limitar a nombres presentes realmente
  for (const k of Object.keys(modelMeshes)) {
    modelMeshes[k] = [...new Set(modelMeshes[k])].slice(0, 14);
  }
  return { id: 'bone-' + slug(en), kind: 'bone', nameEn: en, nameEs: es, synonyms: [es, en], zone: zoneForBone(en), modelMeshes, sourceRefs: [MODEL_REF, { sourceId: 'TODO-cita', note: 'Ficha descriptiva del hueso pendiente — Gray\'s for Students 4th ed.' }], ...(note ? { note } : {}) };
});
function zoneForBone(en) {
  const z = { Frontal: 'head-jaw', Parietal: 'head-jaw', Temporal: 'head-jaw', Occipital: 'head-jaw', Sphenoid: 'head-jaw', Ethmoid: 'head-jaw', Zygomatic: 'head-jaw', Maxilla: 'head-jaw', Mandible: 'head-jaw', Vomer: 'head-jaw', 'Nasal bone': 'head-jaw', Atlas: 'cervical', Axis: 'cervical', Cervical: 'cervical', Thoracic: 'spine', Lumbar: 'spine', Sacrum: 'spine', Coccyx: 'spine', Sternum: 'chest', Rib: 'chest', Clavicle: 'shoulder', Scapula: 'shoulder', Humerus: 'arm', Radius: 'forearm-hand', Ulna: 'forearm-hand', Scaphoid: 'forearm-hand', Lunate: 'forearm-hand', Hamate: 'forearm-hand', Trapezium: 'forearm-hand', Capitate: 'forearm-hand', 'Hip bone': 'hip', Femur: 'thigh', Patella: 'knee', Tibia: 'lower-leg', Fibula: 'lower-leg', Talus: 'ankle-foot', Calcaneus: 'ankle-foot', Navicular: 'ankle-foot', Metatarsal: 'ankle-foot' };
  const key = Object.keys(z).find((k) => en.startsWith(k)) ?? 'spine';
  return z[key];
}

// ── ligamentos curados (nodos literales en los modelos) ──────────────────────
const LIGAMENT_CURATED = [
  ['Anterior cruciate ligament', 'Ligamento cruzado anterior (LCA)', 'ART-009', 'knee', 'lower-limb', 'Evita traslación anterior de tibia; riesgo en pivotes/cambios de dirección.'],
  ['Posterior cruciate ligament', 'Ligamento cruzado posterior (LCP)', 'ART-009', 'knee', 'lower-limb', ''],
  ['Fibular collateral ligament', 'Ligamento colateral lateral (LCL)', 'ART-009', 'knee', 'lower-limb', ''],
  ['Calcaneofibular ligament', 'Ligamento calcaneofibular', 'ART-010', 'ankle-foot', 'lower-limb', 'Esguince de tobillo en inversión.'],
  ['Anterior talofibular ligament', 'Ligamento talofibular anterior (ATFL)', 'ART-010', 'ankle-foot', 'lower-limb', 'El más lesionado en esguince de inversión.'],
  ['Anterior tibiofibular ligament', 'Ligamento tibiofibular anterior', 'ART-TFS', 'lower-leg', 'lower-limb', ''],
  ['Sacrospinous ligament', 'Ligamento sacroespinoso', 'ART-007', 'hip', 'lower-limb', ''],
  ['Sacrotuberal ligament', 'Ligamento sacrotuberal', 'ART-007', 'hip', 'lower-limb', ''],
  ['Iliolumbar ligament', 'Ligamento iliolumbar', 'ART-007', 'hip', 'lower-limb', ''],
  ['Ligament of head of femur', 'Ligamento de la cabeza del fémur', 'ART-008', 'hip', 'lower-limb', ''],
  ['Transverse acetabular ligament', 'Ligamento transverso del acetábulo', 'ART-008', 'hip', 'lower-limb', ''],
  ['Ulnar collateral ligament of elbow', 'Ligamento colateral cubital del codo', 'ART-003', 'arm', 'upper-limb', 'Estrés en lanzamientos (béisbol) y fondos profundos.'],
  ['Dorsal radio-ulnar ligament', 'Ligamento radio-ulnar dorsal', 'ART-DRUJ', 'forearm-hand', 'upper-limb', ''],
  ['Palmar radio-ulnar ligament', 'Ligamento radio-ulnar palmar', 'ART-DRUJ', 'forearm-hand', 'upper-limb', 'TFCC — carga en soportes de muñeca.'],
  ['Transverse humeral ligament', 'Ligamento humeral transverso', 'ART-001', 'shoulder', 'upper-limb', 'Túnel del tendón de la cabeza larga del bíceps.'],
  ['Trapezoid ligament', 'Ligamento trapezoide (coracoclavicular)', 'ART-002', 'shoulder', 'upper-limb', 'Separación AC en caídas sobre el hombro.'],
  ['Flexor retinaculum of wrist', 'Retináculo flexor de la muñeca', 'ART-004', 'forearm-hand', 'upper-limb', 'Techo del túnel carpiano (nervio mediano).'],
  ['Extensor retinaculum of wrist', 'Retináculo extensor de la muñeca', 'ART-004', 'forearm-hand', 'upper-limb', 'Compartimentos extensores (De Quervain).'],
  ['Flexor retinaculum of ankle', 'Retináculo flexor del tobillo', 'ART-010', 'ankle-foot', 'lower-limb', 'Túnel tarsiano (nervio tibial).'],
  ['Plantar calcaneonavicular ligament', 'Ligamento calcaneonavicular plantar', 'ART-011', 'ankle-foot', 'lower-limb', 'Soporte del arco medial.'],
  ['Long plantar ligament', 'Ligamento plantar largo', 'ART-011', 'ankle-foot', 'lower-limb', ''],
];
const ligaments = LIGAMENT_CURATED.map(([en, es, artLegacyId, zone, model, note]) => ({
  id: 'lig-' + slug(en), kind: 'ligament', nameEn: en, nameEs: es, synonyms: [es, en], zone,
  modelMeshes: findMeshes(en, [es]), sourceRefs: [MODEL_REF, { sourceId: 'TODO-cita', note: 'Ligamento identificado en el modelo GLB; ficha Gray\'s/Moore pendiente.' }],
  jointId: artToSlugFinal.get(artLegacyId), ...(note ? { note } : {}),
}));
// ── 5. escribir archivos TS ──────────────────────────────────────────────────
function tsArray(arr, indent = '  ') {
  return arr.map((x) => indent + JSON.stringify(x)).join(',\n');
}
function entryToLiteral(e) {
  const lines = [];
  const push = (k, v) => { if (v === undefined || v === null) return; if (typeof v === 'string') lines.push(`  ${k}: \`${esc(v)}\`,`); else if (Array.isArray(v)) { if (v.length) lines.push(`  ${k}: [\n${tsArray(v, '    ')}\n  ],`); else lines.push(`  ${k}: [],`); } else if (typeof v === 'object') { lines.push(`  ${k}: ${JSON.stringify(v)},`); } else lines.push(`  ${k}: ${JSON.stringify(v)},`); };
  push('id', e.id); push('legacyId', e.legacyId); push('kind', e.kind); push('nameEn', e.nameEn); push('nameEs', e.nameEs); push('synonyms', e.synonyms);
  push('zone', e.zone); push('zones', e.zones); push('modelMeshes', e.modelMeshes);
  lines.push(`  sourceRefs: [\n${e.sourceRefs.map((s) => `    ${JSON.stringify(s)}`).join(',\n')}\n  ],`);
  for (const k of ['origin', 'insertion', 'innervation', 'action', 'actionTags', 'biomechanicalRole', 'aesthetics', 'trainingExercises', 'riskExercises', 'synergists', 'antagonists', 'primaryForTraining', 'wikiEn', 'muscles', 'injuries', 'rehab', 'risks', 'entrapmentSite', 'innervates', 'symptoms', 'lesionContext', 'relatedStructures', 'jointType', 'bones', 'movements', 'romNote', 'stabilizers', 'lesions', 'riskyUnderLoad', 'note', 'jointId']) if (e[k] !== undefined) push(k, e[k]);
  return `  {\n${lines.join('\n')}\n  },`;
}
const HEADER = (file, desc) => `// src/data/fitness/anatomy/${file}\n// ${desc}\n// GENERADO por rag/anatomy/scripts/build-anatomy-data.mjs — NO editar a mano.\n// Regenerar: node rag/anatomy/scripts/build-anatomy-data.mjs\n\n`;
const IMPORT_MUSCLE = "import type { MuscleEntry } from './types';\n\n";

writeFileSync(join(ROOT, 'src/data/fitness/anatomy/muscles.ts'), `${HEADER('muscles.ts', `Fichas musculares (${muscles.length}) normalizadas desde las fichas JSON del chat 1787414859303 (AG-BIB) + mapping a meshes GLB.`)}${IMPORT_MUSCLE}export const MUSCLES: MuscleEntry[] = [\n${muscles.map(entryToLiteral).join('\n')}\n];\n`);
writeFileSync(join(ROOT, 'src/data/fitness/anatomy/tendons.ts'), `${HEADER('tendons.ts', `Tendones (${tendons.length}).`)}import type { TendonEntry } from './types';\n\nexport const TENDONS: TendonEntry[] = [\n${tendons.map(entryToLiteral).join('\n')}\n];\n`);
writeFileSync(join(ROOT, 'src/data/fitness/anatomy/nerves.ts'), `${HEADER('nerves.ts', `Nervios (${nerves.length}).`)}import type { NerveEntry } from './types';\n\nexport const NERVES: NerveEntry[] = [\n${nerves.map(entryToLiteral).join('\n')}\n];\n`);
writeFileSync(join(ROOT, 'src/data/fitness/anatomy/joints.ts'), `${HEADER('joints.ts', `Articulaciones (${joints.length}).`)}import type { JointEntry } from './types';\n\nexport const JOINTS: JointEntry[] = [\n${joints.map(entryToLiteral).join('\n')}\n];\n`);
writeFileSync(join(ROOT, 'src/data/fitness/anatomy/bones.ts'), `${HEADER('bones.ts', `Huesos relevantes (${bones.length}) — mapping a modelos GLB del inventario.`)}import type { BoneEntry } from './types';\n\nexport const BONES: BoneEntry[] = [\n${bones.map(entryToLiteral).join('\n')}\n];\n`);
writeFileSync(join(ROOT, 'src/data/fitness/anatomy/ligaments.ts'), `${HEADER('ligaments.ts', `Ligamentos (${ligaments.length}) identificados por nombre de nodo en los GLB.`)}import type { LigamentEntry } from './types';\n\nexport const LIGAMENTS: LigamentEntry[] = [\n${ligaments.map(entryToLiteral).join('\n')}\n];\n`);

// modelCatalog.ts
const MODEL_META = {
  'overview-skeleton': ['Esqueleto completo', 'Vista general del esqueleto: cráneo, columna completa, tórax y extremidades derechas.'],
  vertebrae: ['Vértebras aisladas', 'Vértebras C4, T7 y L3 aisladas para inspección.'],
  'colored-skull-base': ['Cráneo coloreado', 'Cráneo con 29 piezas coloreadas por hueso/diente.'],
  'overview-colored-skull': ['Cráneo (vista general)', 'Variante overview del cráneo coloreado.'],
  'exploded-skull': ['Cráneo explosionado', 'Piezas del cráneo separadas radialmente (ya ven así del archivo).'],
  hand: ['Mano', 'Mano derecha: huesos, músculos intrínsecos y vainas tendinosas.'],
  'upper-limb': ['Miembro superior', 'Brazo derecho completo: huesos, músculos por cabezas, tendones, nervios y ligamentos.'],
  'lower-limb': ['Miembro inferior', 'Pierna derecha completa: cadera, muslo, pierna y pie con músculos, tendones, nervios y ligamentos.'],
};
const cat = Object.entries(MODELS).map(([k, m]) => `  { key: '${k}', file: '${m.file}', label: ${JSON.stringify(MODEL_META[k]?.[0] ?? k)}, sizeMb: ${m.sizeMb}, meshCount: ${m.meshCount},${k === 'exploded-skull' ? ' exploded: true,' : ''} description: ${JSON.stringify(MODEL_META[k]?.[1] ?? '')} },`);
writeFileSync(join(ROOT, 'src/data/fitness/anatomy/modelCatalog.ts'), `${HEADER('modelCatalog.ts', 'Catálogo de modelos GLB (pesos según inventario tarea 1).')}import type { AnatomyModelInfo } from './types';\n\nexport const ANATOMY_MODELS: AnatomyModelInfo[] = [\n${cat.join('\n')}\n];\n`);

// meshIndex.ts (para tests y pre-validación de mapping sin cargar GLB)
const meshIndex = Object.fromEntries(Object.entries(MODELS).map(([k, m]) => [k, { nodes: [...m.nodes].sort(), meshes: [...m.meshes].sort() }]));
writeFileSync(join(ROOT, 'src/data/fitness/anatomy/meshIndex.ts'), `${HEADER('meshIndex.ts', 'Índice de nombres de nodo/mesh por modelo (del inventario GLB).')}export const MESH_INDEX: Record<string, { nodes: string[]; meshes: string[] }> = ${JSON.stringify(meshIndex)};\n`);

// stats
const withMesh = (arr) => arr.filter((e) => Object.keys(e.modelMeshes).length).length;
console.log(`músculos: ${muscles.length} (${withMesh(muscles)} con mapping 3D) — primarios entrenamiento: ${muscles.filter((m) => m.primaryForTraining).length}`);
console.log(`tendones: ${tendons.length} (${withMesh(tendons)} con mapping) · nervios: ${nerves.length} (${withMesh(nerves)}) · articulaciones: ${joints.length} (${withMesh(joints)})`);
console.log(`huesos: ${bones.length} (${withMesh(bones)}) · ligamentos: ${ligaments.length} (${withMesh(ligaments)})`);
