/**
 * holybro.ts — Carga y utilidades del modelo real HolyBro X500 (GLB del cliente).
 * Se usa en los previews de acabados (finish) y piezas progresivas (assembly).
 * La carga se cachea: un solo fetch para toda la página.
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const HOLYBRO_URL = '/cotizador/models/holybro-x500.glb';

export type FinishKind = 'simple' | 'variado' | 'detallado';

let cache: Promise<THREE.Group> | null = null;

/** Carga (una vez) el X500 normalizado: centrado, escala ~2.6 unidades. */
export function loadHolybro(): Promise<THREE.Group> {
  if (!cache) {
    cache = new Promise((resolve, reject) => {
      fetch(HOLYBRO_URL)
        .then(r => {
          if (!r.ok) throw new Error(`GLB ${r.status}`);
          return r.arrayBuffer();
        })
        .then(buf => {
          new GLTFLoader().parse(buf, '', gltf => {
            const root = gltf.scene;
            // Normaliza: PRIMERO escala, luego recentra (si no, queda fuera de cámara)
            const box = new THREE.Box3().setFromObject(root);
            const size = box.getSize(new THREE.Vector3());
            const s = 2.6 / Math.max(size.x, size.y, size.z);
            root.scale.setScalar(s);
            root.updateMatrixWorld(true);
            const box2 = new THREE.Box3().setFromObject(root);
            const c2 = box2.getCenter(new THREE.Vector3());
            root.position.sub(c2);
            root.traverse(o => {
              const m = o as THREE.Mesh;
              if (m.isMesh) { m.frustumCulled = false; }
            });
            resolve(root);
          }, err => reject(err));
        })
        .catch(reject);
    });
  }
  return cache;
}

const clayMat = () => new THREE.MeshStandardMaterial({ color: 0xd8cfc4, roughness: 0.92, metalness: 0.0 });
const presetMats = () => [
  new THREE.MeshStandardMaterial({ color: 0x2b2b2f, roughness: 0.55, metalness: 0.25 }), // plástico negro
  new THREE.MeshStandardMaterial({ color: 0x8f9297, roughness: 0.35, metalness: 0.85 }), // aluminio
  new THREE.MeshStandardMaterial({ color: 0x14161a, roughness: 0.5, metalness: 0.1 }),  // fibra
  new THREE.MeshStandardMaterial({ color: 0x0071e3, roughness: 0.4, metalness: 0.2 }),  // acento
];

/**
 * Aplica un nivel de acabado al modelo.
 * - simple: clay uniforme (una pieza, un material plano)
 * - variado: presets metal/plástico/fibra/acento sin texturas
 * - detallado: materiales originales del GLB (con texturas baked)
 */
export function applyFinish(root: THREE.Group, kind: FinishKind) {
  root.traverse(o => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    if (kind === 'detallado') {
      if (m.userData.origMat) m.material = m.userData.origMat;
    } else if (kind === 'simple') {
      if (!m.userData.origMat) m.userData.origMat = m.material;
      if (!m.userData.clayMat) m.userData.clayMat = clayMat();
      m.material = m.userData.clayMat;
    } else {
      if (!m.userData.origMat) m.userData.origMat = m.material;
      if (!m.userData.preset) m.userData.preset = presetMats();
      const presets = m.userData.preset as THREE.MeshStandardMaterial[];
      m.material = presets[Math.abs(hash(m.name ?? '')) % presets.length];
    }
  });
}

const hash = (s: string) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7);

/**
 * Grupos de montaje en orden (grandes → pequeñas, según Alexander).
 * Expresiones sobre los nombres de nodo del GLB del X500.
 */
export const HOLYBRO_STEPS: Array<{ match: RegExp; es: string; en: string }> = [
  { match: /DJ-2216-KV880_001|HMX5V-DIGAI-DIANJIZUO-MUJU_001/i, es: 'Motor', en: 'Motor' },
  { match: /propeller(?!_instance)/i, es: 'Hélice', en: 'Propeller' },
  { match: /CARBON-FIBER-TUBE300_001/i, es: 'Tubo del brazo', en: 'Arm tube' },
  { match: /TOP-PLATE|CARBON-FIBER-TUBE|DJ-2216-KV880|HMX5V-DIGAI|propeller_instance|HMX5V-GUAN-DINGWEI/i, es: 'Frame superior (instancias ×4)', en: 'Top frame (×4 instances)' },
  { match: /BOTTOM-PLATE|JIA-GUAN|GUAN-CHENG|JIA-LIANJIE/i, es: 'Frame inferior', en: 'Bottom frame' },
  { match: /PYLONS-X500|MAO-JIAO|JIAO-EVA|HUAN-GUIJIAO|JIAO-LIANJIE/i, es: 'Tren de aterrizaje', en: 'Landing gear' },
  { match: /PIXHAWK|IMU|PCB|GPS|TELEMETRY|XT60|BM06B|TOU-|DIKE-|MIANKE|GAI-GUANGLIU|ZHIJIA-CAMERA|GAN-GPSV5|GPSV5-ZHIJIA|GPS-ZHIJIA|x500v2_gps|x500v2_telemetry/i, es: 'Electrónica', en: 'Electronics' },
  { match: /battery|BATTERY/i, es: 'Batería', en: 'Battery' },
  { match: /PLATFORM-PLAT|X500-TAO/i, es: 'Plataforma superior', en: 'Top platform' },
  { match: /./i, es: 'Tornillería (instancias)', en: 'Hardware (instances)' },
];

/**
 * Marca cada nodo del GLB con su paso de montaje (userData.step) según HOLYBRO_STEPS.
 * Se llama una vez tras la carga.
 */
export function tagAssemblySteps(root: THREE.Group) {
  root.traverse(o => {
    const name = o.name ?? '';
    for (let i = 0; i < HOLYBRO_STEPS.length; i++) {
      if (HOLYBRO_STEPS[i].match.test(name)) { o.userData.step = i; break; }
    }
  });
}

/** Visibilidad progresiva: muestra los pasos 0..n y anima la aparición del último. */
export function revealSteps(root: THREE.Group, n: number) {
  root.traverse(o => {
    if (o.userData.step === undefined) return;
    const visible = (o.userData.step as number) <= n;
    o.visible = visible;
  });
}
