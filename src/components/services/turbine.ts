/**
 * turbine.ts — Turbina real (colección TURBINE de Blender, 1065 nodos,
 * 181k tris) para el slider de nivel de detalle (ciclo 18).
 *
 * Pipeline: Blender → GLB (1.065 nodos) → webp+meshopt SIN prune (nodos
 * preservados para el revelado progresivo) → 1.28 MB.
 *
 * La transición del slider es un "morph" de dos capas:
 *  - capa baja: silueta procedural low-poly (fallback si el GLB falla)
 *  - capa real: piezas del GLB reveladas por estación X (entrada→escape)
 *    con pop-in suave — la silueta queda de boceto interno debajo.
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export const TURBINE_URL = `${import.meta.env.BASE_URL}cotizador/models/turbine.glb`;

let cache: Promise<THREE.Group> | null = null;

/** Carga (una vez) la turbina normalizada: centrada, largo ~2.5 en X. */
export function loadTurbine(): Promise<THREE.Group> {
  if (!cache) {
    cache = new Promise((resolve, reject) => {
      fetch(TURBINE_URL)
        .then(r => {
          if (!r.ok) throw new Error(`GLB ${r.status}`);
          return r.arrayBuffer();
        })
        .then(buf => {
          const loader = new GLTFLoader();
          loader.setMeshoptDecoder(MeshoptDecoder);
          loader.parse(buf, '', gltf => {
            const root = gltf.scene;
            root.updateMatrixWorld(true);
            const box = new THREE.Box3().setFromObject(root);
            const size = box.getSize(new THREE.Vector3());
            const s = 2.5 / Math.max(size.x, size.y, size.z);
            root.scale.setScalar(s);
            root.updateMatrixWorld(true);
            const box2 = new THREE.Box3().setFromObject(root);
            const c = box2.getCenter(new THREE.Vector3());
            root.position.sub(c);
            // orienta el eje largo a X si salio en Y/Z (export yup: el motor
            // se modelo a lo largo de X en Blender -> yup mantiene X)
            if (size.y > size.x && size.y > size.z) root.rotation.z = Math.PI / 2;
            else if (size.z > size.x && size.z > size.y) root.rotation.y = Math.PI / 2;
            resolve(root);
          }, err => reject(err));
        })
        .catch(reject);
    });
  }
  return cache;
}

export interface TurbineBucket { meshes: THREE.Mesh[]; cx: number }

/** Agrupa las meshes por estación a lo largo del eje del motor (X):
 *  ordena por X del centro y reparte en `n` grupos de tamaño similar.
 *  Devuelve n buckets entrada→escape. */
export function bucketByStation(root: THREE.Group, n = 5): TurbineBucket[] {
  const meshes: { m: THREE.Mesh; cx: number }[] = [];
  root.updateMatrixWorld(true);
  root.traverse(o => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    const c = new THREE.Vector3();
    m.getWorldPosition(c);
    meshes.push({ m, cx: c.x });
  });
  meshes.sort((a, b) => a.cx - b.cx);
  const buckets: TurbineBucket[] = Array.from({ length: n }, () => ({ meshes: [], cx: 0 }));
  if (!meshes.length) return buckets;
  const per = meshes.length / n;
  meshes.forEach((e, i) => {
    const b = Math.min(n - 1, Math.floor(i / per));
    buckets[b].meshes.push(e.m);
    buckets[b].cx += e.cx;
  });
  for (const b of buckets) if (b.meshes.length) b.cx /= b.meshes.length;
  return buckets;
}
