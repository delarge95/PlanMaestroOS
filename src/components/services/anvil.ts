/**
 * anvil.ts — Carga del yunque real (yunke.glb) para el modo 'surface' del preview.
 * Reemplaza el morph procedural cubo→esfera (que queda como fallback).
 *
 * Estructura del GLB (verificado parseando el JSON embebido):
 * - 8 meshes. Solo 'ANVIL LOW POLI' (mesh 'Plane.005', 1352 verts) tiene morph
 *   targets: targetNames ['Key 1','Key 2'], pesos iniciales [0,0].
 * - Las otras 7 ('anvil', 'Cylinder.002/003', 'Plane'×4) NO morphean: si se
 *   muestran junto al morph quedan congeladas mientras el yunque cambia → se
 *   OCULTAN (decisión documentada en el reporte del ciclo 5).
 * - Key 1 colapsa la malla a ~±0.09 unidades (blob mínimo); Key 2 a ~1.3
 *   unidades (forma compacta). La base (pesos 0) es el yunque completo ~5u.
 *   Por eso las influencias se limitan (SURFACE_*_MAX) para que el modelo no
 *   "explote" ni colapse dentro del frame.
 *
 * La promesa cachea el parse normalizado (solo lectura) y cada instancia de
 * ModelPreview recibe root.clone(true) — mismo patrón que holybro.ts.
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ANVIL_URL = '/cotizador/models/yunke.glb';
/** Nodo cuya mesh es la que morphea (identificado en el GLB). */
export const ANVIL_MORPH_NODE = 'ANVIL LOW POLI';
/** GLTFLoader sanitiza el nombre del nodo ('ANVIL LOW POLI' → 'ANVIL_LOW_POLI'),
 *  así que el match es por forma normalizada, no por el literal con espacios. */
const ANVIL_MORPH_RE = /^ANVIL[\s_\-]?LOW[\s_\-]?POLI$/i;
/** Nombres de los morph targets del GLB (mesh.extras.targetNames). */
export const ANVIL_KEYS = ['Key 1', 'Key 2'] as const;

/** Influencia máxima por key: Key 2 (compacta, 1.3u) domina el tramo medio y
 *  Key 1 (blob, 0.2u) solo el final — a peso 1 el modelo colapsaría a un punto. */
export const SURFACE_KEY2_MAX = 0.6;
export const SURFACE_KEY1_MAX = 0.35;

let cache: Promise<THREE.Group> | null = null;

function normalize(root: THREE.Group): THREE.Group {
  // marca la mesh del yunque (única visible) y las demás como compartidas
  const morphMeshes: THREE.Mesh[] = [];
  root.traverse(o => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    m.frustumCulled = false;
    m.userData.glbShared = true; // geometrías compartidas entre clones: no dispose en cleanup
    // Solo la mesh con morphs se muestra; las otras piezas de la escena
    // (duplicados sin morph + plano de suelo) estorban — ver cabecera.
    m.visible = ANVIL_MORPH_RE.test(m.name);
    if (m.visible) morphMeshes.push(m);
  });
  const morphMesh = morphMeshes[0] ?? null;
  // La escala se calcula SOLO con la mesh del yunque: la escena incluye un
  // plano de suelo gigante (×9.83) que, si se midiera entera, dejaría el
  // yunque a tamaño de grano (lección de la primera iteración del ciclo 5).
  root.updateMatrixWorld(true);
  const box = morphMesh
    ? new THREE.Box3().setFromObject(morphMesh)
    : new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const s = 2.6 / Math.max(size.x, size.y, size.z);
  root.scale.setScalar(s);
  root.updateMatrixWorld(true);
  const box2 = morphMesh
    ? new THREE.Box3().setFromObject(morphMesh)
    : new THREE.Box3().setFromObject(root);
  const c2 = box2.getCenter(new THREE.Vector3());
  root.position.sub(c2);
  return root;
}

/** Carga (una vez) el yunque normalizado y con las piezas no-morph ocultas. */
export function loadAnvil(): Promise<THREE.Group> {
  if (!cache) {
    cache = new Promise((resolve, reject) => {
      fetch(ANVIL_URL)
        .then(r => {
          if (!r.ok) throw new Error(`GLB ${r.status}`);
          return r.arrayBuffer();
        })
        .then(buf => {
          new GLTFLoader().parse(buf, '', gltf => resolve(normalize(gltf.scene)), err => reject(err));
        })
        .catch(reject);
    });
  }
  return cache;
}

/** Copia independiente por instancia de preview (mismo patrón que holybro). */
export function loadAnvilInstance(): Promise<THREE.Group> {
  return loadAnvil().then(root => root.clone(true));
}

const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };

/**
 * Reparto progresivo del slider superficie t∈[1,5] sobre los dos morph targets:
 * - [1,3]: Key 2 crece 0→SURFACE_KEY2_MAX (el yunque "se compacta", bordes suaves)
 * - [3,5]: Key 1 crece 0→SURFACE_KEY1_MAX (termina escultórico/orgánico)
 * Continuo y bidireccional (las influencias son absolutas, robusto al bajar).
 */
export function surfaceWeights(t: number): [number, number] {
  const x = Math.max(1, Math.min(5, t));
  return [SURFACE_KEY1_MAX * smooth((x - 3) / 2), SURFACE_KEY2_MAX * smooth((x - 1) / 2)];
}

/** Aplica el slider superficie al morph del yunque (por instancia). */
export function applySurfaceMorph(root: THREE.Group, t: number) {
  const [w1, w2] = surfaceWeights(t);
  root.traverse(o => {
    const m = o as THREE.Mesh;
    if (!m.isMesh || !m.morphTargetDictionary || !m.morphTargetInfluences) return;
    const dict = m.morphTargetDictionary;
    if (dict[ANVIL_KEYS[0]] !== undefined) m.morphTargetInfluences[dict[ANVIL_KEYS[0]]] = w1;
    if (dict[ANVIL_KEYS[1]] !== undefined) m.morphTargetInfluences[dict[ANVIL_KEYS[1]]] = w2;
  });
}
