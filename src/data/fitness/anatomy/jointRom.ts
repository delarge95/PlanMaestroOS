// src/data/fitness/anatomy/jointRom.ts
// AG-ANATOM ciclo 4 — pendiente #4 del STATUS: ROM numérico por articulación
// con cita. Valores verificados línea a línea contra la capa de texto del PDF
// (D:\Downloads\Libros\Norkin-JointStructureAndFunction_6ed_2019_textolayer.txt,
// atajo autorizado por la ficha §3.2B) y, donde se indica, contra la extracción
// curada por el usuario (rag/anatomy/fuentes/norkin-joint-structure-6ed--*.md).
//
// Convención de cita: la capa de texto NO conserva páginas estables del PDF →
// locator = capítulo (+ sección), igual que los chunks `njs6-*` del RAG.
// `pending` queda SIN marcar: estos valores sí están verificados contra la fuente.
//
// Este módulo NO se regenera con build-anatomy-data.mjs (el generador
// reconstruiría el mapping del ciclo 3); se consume vía getJointRom().

import type { JointRomEntry } from './types';

/** Fuente primaria: Levangie & Norkin, Joint Structure and Function, 6ª ed (2019). */
const NJS6 = 'njs6-levangie-norkin';
/** Extracción curada por el usuario (registrada en rag/anatomy/manifest.json). */
const NJS6_CURADA = 'norkin-joint-structure-6ed';

const ref = (chapter: number, section?: string) => ({
  sourceId: NJS6,
  locator: `cap. ${chapter}${section ? ` · ${section}` : ''}`,
});

/**
 * ROM por id de articulación del grafo. Articulaciones sin valores numéricos en
 * la fuente (subtalar, patelofemoral, tibiofibular) llevan una entrada
 * cualitativa EXPLÍCITA — nunca un número sin respaldo.
 */
export const JOINT_ROM: Record<string, JointRomEntry[]> = {
  'art-shoulder-joint': [
    { motion: 'Flexión', value: '~120°', condition: 'valor clásico; trabajo 3D reciente: ~97° respecto a la escápula', sourceRefs: [ref(7, 'Joint Motion — flexión/extensión')] },
    { motion: 'Extensión', value: '~50°', sourceRefs: [ref(7, 'Joint Motion — flexión/extensión')] },
    { motion: 'Abducción', value: '90°–120°', condition: 'elevación total del complejo (escápula incluida): 150°–180°', sourceRefs: [ref(7, 'Integrated Function')] },
  ],
  'art-scapulothoracic-joint': [
    { motion: 'Rotación superior', value: '50°–60°', condition: '~20°–30° aportados por la SC (elevación clavicular) + ~20°–30° por la AC', sourceRefs: [ref(7, 'Muscle Function — ritmo escapulohumeral')] },
  ],
  'art-sternoclavicular-joint': [
    { motion: 'Elevación (aporte a la rotación superior escapular)', value: '20°–30°', condition: 'la protracción/retracción no tiene valores numéricos en la fuente', sourceRefs: [ref(7, 'Muscle Function — ritmo escapulohumeral')] },
  ],
  'art-acromioclavicular-joint': [
    { motion: 'Rotación superior', value: '20°–30°', sourceRefs: [ref(7, 'Muscle Function — ritmo escapulohumeral')] },
    { motion: 'Rotación interna/externa y básculas ant/post', value: 'movimiento limitado (sin valores numéricos en la fuente)', sourceRefs: [ref(7, 'AC Joint Motion')] },
  ],
  'art-elbow-joint': [
    { motion: 'Flexión activa', value: '135°–145°', condition: 'con antebrazo supinado; menos en pronación/neutro', sourceRefs: [ref(8, 'Elbow Joint Motion')] },
    { motion: 'Flexión pasiva', value: '150°–160°', sourceRefs: [ref(8, 'Elbow Joint Motion')] },
  ],
  'art-radioulnar-articulation': [
    { motion: 'Pronación/supinación (arco total)', value: '~150°', condition: 'con codo a 90° de flexión: ~90° supinación + ~60° pronación; con codo extendido: ~100° pronación + ~50° supinación', sourceRefs: [ref(8, 'Radioulnar Range of Motion')] },
  ],
  'art-radioulnar-articulation-art-druj': [
    { motion: 'Pronación/supinación (arco total)', value: '~150°', condition: 'arco compartido con la radiocubital proximal; medición con codo a 90°', sourceRefs: [ref(8, 'Radioulnar Range of Motion')] },
  ],
  'art-wrist-joint': [
    { motion: 'ROM funcional (vida diaria)', value: '10° flexión + 35° extensión', condition: 'el ROM total del complejo es variable entre individuos (sin norma única en la fuente); desviaciones máximas con muñeca neutra', sourceRefs: [ref(9, 'Expanded Concepts 9-1 — Functional ROM')] },
  ],
  'art-hand-joint': [
    { motion: 'Flexión metacarpofalángica', value: '~90° (índice) → ~110° (meñique)', condition: 'aumenta de radial a cubital', sourceRefs: [ref(9, 'MCP Range of Motion')] },
    { motion: 'Flexión interfalángica proximal', value: '100°–110° (índice) → 135° (meñique)', sourceRefs: [ref(9, 'Interphalangeal Joints')] },
    { motion: 'Flexión interfalángica distal', value: '~80° (índice) → ~90° (meñique)', sourceRefs: [ref(9, 'Interphalangeal Joints')] },
  ],
  'art-cervical-vertebrae': [
    { motion: 'Flexión/extensión craneovertebral (atlantooccipital)', value: '~15° combinados', condition: 'asentimiento (nodding)', sourceRefs: [ref(4, 'Craniovertebral joints')] },
    { motion: 'Flexión lateral y rotación atlantooccipital', value: '~3° cada una', sourceRefs: [ref(4, 'Craniovertebral joints')] },
    { motion: 'Rotación atlantoaxial', value: '~45° por lado', condition: '~50% de toda la rotación cervical', sourceRefs: [ref(4, 'Atlantoaxial joints')] },
    { motion: 'Flexión/extensión cervical inferior (C3-C7)', value: 'crece de C2-C3 a C5-C6 y decrece en C6-C7 (sin valores globales en la fuente)', condition: 'flexión lateral y rotación acopladas ipsilaterales', sourceRefs: [ref(4, 'Lower cervical segments')] },
  ],
  'art-lumbar-vertebrae': [
    { motion: 'Flexión', value: '52° (SD 9°)', condition: 'desde lordosis neutra', sourceRefs: [ref(4, 'Lumbar region — kinematics')] },
    { motion: 'Extensión', value: '19° (SD 9°)', sourceRefs: [ref(4, 'Lumbar region — kinematics')] },
    { motion: 'Flexión lateral', value: '30° por lado (SD 6°)', sourceRefs: [ref(4, 'Lumbar region — kinematics')] },
    { motion: 'Rotación', value: '32° por lado (±12°)', sourceRefs: [ref(4, 'Lumbar region — kinematics')] },
  ],
  'art-sacroiliac-joint': [
    { motion: 'Rotación', value: '1°–3° (media)', condition: 'movimiento pequeño y controvertido; nutación/counternutation sin grados en la fuente', sourceRefs: [ref(4, 'Sacroiliac joints — kinematics')] },
  ],
  'art-hip-joint': [
    { motion: 'Flexión', value: '~90°', condition: 'con rodilla extendida; ~120° con rodilla flexionada (libera tensión de isquiotibiales)', sourceRefs: [ref(10, 'Hip joint motion')] },
    { motion: 'Extensión', value: '10°–30°', sourceRefs: [ref(10, 'Hip joint motion')] },
    { motion: 'Abducción', value: '45°–50°', sourceRefs: [ref(10, 'Hip joint motion')] },
    { motion: 'Aducción', value: '20°–30°', sourceRefs: [ref(10, 'Hip joint motion')] },
    { motion: 'Rotación medial/lateral', value: '42°–50°', condition: 'con cadera a 90° de flexión', sourceRefs: [ref(10, 'Hip joint motion')] },
    { motion: 'Requisitos de la marcha', value: '30° flex · 10° ext · 5° abd/ad · 5° rot medial/lateral', sourceRefs: [ref(10, 'Hip joint motion')] },
  ],
  'art-knee-joint': [
    { motion: 'Flexión pasiva', value: '130°–140°', sourceRefs: [ref(11, 'Tibiofemoral joint motion')] },
    { motion: 'Flexión en sentadilla profunda', value: 'hasta ~160°', sourceRefs: [ref(11, 'Tibiofemoral joint motion')] },
    { motion: 'Rangos funcionales', value: 'marcha 60°–70° · escaleras ~80° · silla ≥90°', sourceRefs: [ref(11, 'Tibiofemoral joint motion')] },
    { motion: 'Rotación tibial', value: '~8° en extensión completa · ~13° con 20° de flexión', condition: 'más de ~13° = insuficiencia ligamentosa', sourceRefs: [{ sourceId: NJS6_CURADA, locator: 'cap. 11 · cinemática tibiofemoral' }] },
  ],
  'art-patellofemoral-joint': [
    { motion: 'Deslizamiento patelofemoral', value: 'sin ROM clásico en grados', condition: 'el contacto femoropatelar es mínimo en extensión completa y crece con la flexión; en marcha (~20°) la compresión es ~25-50% del peso corporal', sourceRefs: [ref(11, 'Patellofemoral joint')] },
  ],
  'art-ankle-joint': [
    { motion: 'Dorsiflexión', value: '~20°', condition: 'gran variabilidad individual y por técnica de medición', sourceRefs: [ref(12, 'Ankle joint motion')] },
    { motion: 'Flexión plantar', value: '~50°', sourceRefs: [ref(12, 'Ankle joint motion')] },
  ],
  'art-subtalar-joint': [
    { motion: 'Pronación/supinación (movimientos compuestos)', value: 'sin valores numéricos en la fuente', condition: 'eje oblicuo: inclinado ~42° del plano transverso y ~16° medial del eje anteroposterior; pronación = eversión + dorsiflexión + abducción del calcáneo', sourceRefs: [ref(12, 'Subtalar joint — axis and motion')] },
  ],
  'art-tibiofibular-joint': [
    { motion: 'Micromovimientos accesorios', value: 'sin grados propios en la fuente', condition: 'no añade grados de libertad al tobillo pero contribuye a su ROM total (sindesmosis)', sourceRefs: [ref(12, 'Tibiofibular joints')] },
  ],
  'art-temporomandibular-joint': [
    { motion: 'Apertura bucal (depresión mandibular)', value: '40–50 mm', condition: 'la masticación requiere ~18 mm; la fase rotacional aporta 11–25 mm', sourceRefs: [ref(6, 'TM joint motion — mandibular depression')] },
    { motion: 'Excursión lateral', value: '8–11 mm por lado', sourceRefs: [ref(6, 'TM joint motion — lateral excursion')] },
  ],
};

const EMPTY: JointRomEntry[] = [];

/** ROM verificado de una articulación por id ([] si no hay datos citados). */
export function getJointRom(jointId: string): JointRomEntry[] {
  return JOINT_ROM[jointId] ?? EMPTY;
}

/** ids de articulaciones con al menos una entrada de ROM. */
export function jointIdsWithRom(): string[] {
  return Object.keys(JOINT_ROM);
}
