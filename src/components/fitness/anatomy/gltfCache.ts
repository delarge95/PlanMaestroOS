// src/components/fitness/anatomy/gltfCache.ts
// AG-ANATOM — cache de modelos GLTF decodificados (compartido entre miniaturas).
// El cache guarda el GLTF ORIGINAL: cada consumidor debe usar cloneScene() para
// obtener su propia copia (clonando también los materiales, porque los clones de
// three comparten material y las mutaciones de uno contaminarían al resto).
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const cache = new Map<string, Promise<GLTF>>();

/** Carga (una vez) y cachea el GLB de anatomía indicado. Decoder Draco self-hosted. */
export function loadAnatomyModel(file: string): Promise<GLTF> {
  let p = cache.get(file);
  if (!p) {
    const loader = new GLTFLoader();
    const draco = new DRACOLoader();
    draco.setDecoderPath('/models/anatomy/draco/');
    loader.setDRACOLoader(draco);
    p = loader.loadAsync(file).finally(() => draco.dispose());
    cache.set(file, p);
    // si falla, no cacheamos el rechazo para permitir reintentos
    p.catch(() => cache.delete(file));
  }
  return p;
}

/** Clona la escena del modelo con materiales propios (mutables sin efectos colaterales). */
export function cloneScene(gltf: GLTF): THREE.Group {
  const root = gltf.scene.clone(true);
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh) {
      m.material = Array.isArray(m.material)
        ? m.material.map((mat) => mat.clone())
        : m.material?.clone();
    }
  });
  return root;
}
