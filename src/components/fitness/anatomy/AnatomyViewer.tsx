// src/components/fitness/anatomy/AnatomyViewer.tsx
// AG-ANATOM — visor 3D anatómico (tarea 4, Fase 0 de la ficha §3.2B).
// Three.js puro (sin react-three-fiber): carga diferida por modelo, Draco decoder
// self-hosted (/models/anatomy/draco), OrbitControls, hover/tap pieza → nombre +
// highlight emissive, selección de estructura desde el grafo (query params
// ?model=&structure=), modo "explosionado" cambiando al modelo exploded-skull,
// reset de cámara, panel colapsable, mobile-first (useIsMobile READ de ui/) y
// prefers-reduced-motion → render estático con aviso (una sola pasada).
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Box, RotateCcw, Layers, ChevronDown, ChevronUp, Scan, X, Loader2, Crosshair, Eye, EyeOff } from 'lucide-react';
import useIsMobile from '../../ui/useIsMobile';
import {
  ANATOMY_MODELS,
  anatomyGraphStats,
  getStructuresForModel,
  getStructureById,
  resolveHighlightNames,
} from '../../../data/fitness/anatomyGraph';
import type { AnatomyStructure, StructureKind } from '../../../data/fitness/anatomy/types';

const HIGHLIGHT_COLOR = 0x35d0ff;
const HIGHLIGHT_EMISSIVE = 0x0e7fa8;
/** opacidad de las piezas que tapan la selección (feedback #3: capas ocluidas) */
const OCCLUDER_OPACITY = 0.12;

/** Filtros de categoría del grafo (feedback #4-5). kinds=null → sin filtrar. */
const LAYER_FILTERS: Array<{ key: string; label: string; kinds: StructureKind[] | null }> = [
  { key: 'all', label: 'Todo', kinds: null },
  { key: 'muscle', label: 'Músculos', kinds: ['muscle'] },
  { key: 'connective', label: 'Tendones + ligamentos', kinds: ['tendon', 'ligament'] },
  { key: 'nerve', label: 'Nervios', kinds: ['nerve'] },
  { key: 'skeleton', label: 'Huesos + articulaciones', kinds: ['bone', 'joint'] },
];

function queryParam(name: string): string | null {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get(name);
}

interface Props {
  /** modelo inicial (por defecto el esqueleto general) */
  initialModel?: string;
  /** estructura inicial a resaltar (id del grafo) */
  initialStructure?: string;
}

export default function AnatomyViewer({ initialModel, initialStructure }: Props) {
  const isMobile = useIsMobile();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRootRef = useRef<THREE.Group | null>(null);
  const rafRef = useRef<number>(0);
  const disposablesRef = useRef<Array<{ dispose: () => void }>>([]);
  const namedMeshesRef = useRef<Map<string, THREE.Object3D[]>>(new Map());
  const originalsRef = useRef<Map<THREE.Object3D, { emissive?: THREE.Color; intensity?: number; color?: THREE.Color }>>(new Map());
  // refs espejo para handlers estables del loop de escena
  const stoppedRef = useRef(false);
  const staticModeRef = useRef(false);
  const meshOwnersRef = useRef<Map<string, AnatomyStructure>>(new Map());
  const selectedStructureRef = useRef<AnatomyStructure | undefined>(undefined);
  const layerFilterRef = useRef('all');
  const isolateIdRef = useRef<string | null>(null);
  /** meshes con material clonado para transparencia (occluders) — mesh → original */
  const matOriginalsRef = useRef<Map<THREE.Mesh, THREE.Material | THREE.Material[]>>(new Map());
  const occluderMeshesRef = useRef<THREE.Mesh[]>([]);
  const outlineMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const loadingRef = useRef(true);
  const modelKeyRef = useRef(initialModel ?? 'overview-skeleton');
  const structuresForModelRef = useRef<AnatomyStructure[]>([]);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [modelKey, setModelKey] = useState(initialModel ?? 'overview-skeleton');
  const [loading, setLoading] = useState(true);
  const [hoverName, setHoverName] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(initialStructure ?? queryParam('structure'));
  const [panelOpen, setPanelOpen] = useState(!isMobile);
  const [error, setError] = useState<string | null>(null);
  const [layerFilter, setLayerFilter] = useState('all');
  const [isolateId, setIsolateId] = useState<string | null>(null);

  // modelo inicial desde URL (?model=)
  useEffect(() => {
    const m = initialModel ?? queryParam('model');
    if (m && ANATOMY_MODELS.some((x) => x.key === m)) setModelKey(m);
    const s = initialStructure ?? queryParam('structure');
    if (s) setSelectedId(s);
  }, [initialModel, initialStructure]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const model = useMemo(() => ANATOMY_MODELS.find((m) => m.key === modelKey) ?? ANATOMY_MODELS[0], [modelKey]);
  const structuresForModel = useMemo(() => getStructuresForModel(model.key), [model.key]);
  const selectedStructure = selectedId ? getStructureById(selectedId) : undefined;
  const stats = useMemo(() => anatomyGraphStats(), []);

  // lista lateral acorde al filtro de capas activo (feedback #4)
  const filterKinds = LAYER_FILTERS.find((f) => f.key === layerFilter)?.kinds ?? null;
  const panelStructures = filterKinds
    ? structuresForModel.filter((s) => filterKinds.includes(s.kind))
    : structuresForModel;

  // índice meshName → estructura dueña (para filtros por categoría del grafo)
  useEffect(() => {
    const map = new Map<string, AnatomyStructure>();
    for (const s of structuresForModel) {
      for (const n of s.modelMeshes[model.key] ?? []) map.set(n, s);
    }
    meshOwnersRef.current = map;
  }, [structuresForModel, model.key]);

  // ── highlight de la estructura seleccionada (resalte inequívoco: emissive fuerte + outline) ──
  const applyHighlight = useCallback((objectNames: string[]) => {
    const map = namedMeshesRef.current;
    const want = new Set(objectNames);
    // restaurar anteriores
    for (const [obj, orig] of originalsRef.current) {
      const mesh = obj as THREE.Mesh;
      const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
      if (mat) {
        if (mat.emissive) {
          mat.emissive.copy(orig.emissive ?? new THREE.Color(0x000000));
          mat.emissiveIntensity = orig.intensity ?? 0;
        }
        if (orig.color && mat.color) mat.color.copy(orig.color);
      }
      // quitar outline (hijo del mesh)
      for (let i = mesh.children.length - 1; i >= 0; i--) {
        const c = mesh.children[i];
        if ((c as THREE.Mesh).userData?.isOutline) mesh.remove(c);
      }
    }
    originalsRef.current.clear();
    if (!outlineMatRef.current) {
      outlineMatRef.current = new THREE.MeshBasicMaterial({
        color: HIGHLIGHT_COLOR, side: THREE.BackSide, transparent: true, opacity: 0.9,
      });
    }
    for (const name of want) {
      const objs = map.get(name) ?? [];
      for (const obj of objs) {
        const mesh = obj as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
        if (!mat) continue;
        // mismo objeto puede aparecer por nombre de nodo y de geometry: guardar original solo una vez
        if (!originalsRef.current.has(obj)) {
          originalsRef.current.set(obj, {
            emissive: mat.emissive?.clone(),
            intensity: mat.emissiveIntensity,
            color: mat.color?.clone(),
          });
        }
        if (mat.emissive) {
          mat.emissive = new THREE.Color(HIGHLIGHT_EMISSIVE);
          mat.emissiveIntensity = 2.2;
        }
        if (mat.color) mat.color.lerp(new THREE.Color(HIGHLIGHT_COLOR), 0.5);
        // outline (inverted hull): copia barata de la geometría con caras traseras
        if (mesh.isMesh && !mesh.children.some((c) => (c as THREE.Mesh).userData?.isOutline)) {
          const outline = new THREE.Mesh(mesh.geometry, outlineMatRef.current!);
          outline.userData.isOutline = true;
          outline.scale.setScalar(1.035);
          outline.raycast = () => {}; // no interceptar picks
          mesh.add(outline);
        }
      }
    }
  }, []);

  // ── carga del modelo (diferida por modelo) ─────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setIsolateId(null); // los nombres de mesh cambian con el modelo
    const loader = new GLTFLoader();
    const draco = new DRACOLoader();
    // decoder self-hosted (copiado de three/examples/jsm/libs/draco) — sin CDN externo
    draco.setDecoderPath('/models/anatomy/draco/');
    loader.setDRACOLoader(draco);

    loader.load(
      model.file,
      (gltf) => {
        if (cancelled || !modelRootRef.current) return;
        // restaurar materiales translúcidos (occluders) del modelo saliente
        for (const [mesh, orig] of matOriginalsRef.current) {
          const clone = mesh.material;
          mesh.material = orig;
          const mats = Array.isArray(clone) ? clone : [clone];
          for (const m of mats) m?.dispose();
        }
        matOriginalsRef.current.clear();
        occluderMeshesRef.current = [];
        // limpiar modelo anterior (liberar VRAM: geometrías, materiales y texturas)
        const root = modelRootRef.current;
        root.traverse((o) => {
          const m = o as THREE.Mesh;
          if (!m.isMesh) return;
          m.geometry?.dispose();
          const mats = Array.isArray(m.material) ? m.material : [m.material];
          for (const mat of mats) {
            const std = mat as THREE.MeshStandardMaterial | null;
            if (!std) continue;
            for (const key of Object.keys(std) as Array<keyof THREE.MeshStandardMaterial>) {
              const tex = std[key] as unknown as THREE.Texture | undefined;
              if (tex && (tex as THREE.Texture).isTexture) tex.dispose();
            }
            std.dispose();
          }
        });
        while (root.children.length) {
          const child = root.children[0];
          root.remove(child);
        }
        namedMeshesRef.current.clear();
        originalsRef.current.clear();
        // preparar materiales + índice de nombres (nodo y mesh)
        gltf.scene.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = false;
            mesh.receiveShadow = false;
            const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            for (const m of mats) {
              const std = m as THREE.MeshStandardMaterial;
              if (std) {
                std.side = THREE.FrontSide;
                std.transparent = false;
                std.depthWrite = true;
              }
            }
          }
          const nodeName = obj.name;
          if (nodeName) {
            const arr = namedMeshesRef.current.get(nodeName) ?? [];
            arr.push(obj);
            namedMeshesRef.current.set(nodeName, arr);
          }
          const meshName = (obj as THREE.Mesh).isMesh ? ((obj as THREE.Mesh).geometry?.name ?? '') : '';
          if (meshName) {
            const arr = namedMeshesRef.current.get(meshName) ?? [];
            arr.push(obj);
            namedMeshesRef.current.set(meshName, arr);
          }
        });
        root.add(gltf.scene);
        // encuadre inicial
        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const cam = cameraRef.current;
        if (cam) {
          cam.position.set(center.x + maxDim * 0.9, center.y + maxDim * 0.35, center.z + maxDim * 1.5);
          cam.near = maxDim / 100;
          cam.far = maxDim * 20;
          cam.updateProjectionMatrix();
          cam.lookAt(center);
        }
        const ctrl = controlsRef.current;
        if (ctrl) {
          ctrl.target.copy(center);
          ctrl.maxDistance = maxDim * 6;
          ctrl.minDistance = maxDim * 0.35;
          ctrl.update();
        }
        if (sceneRef.current) {
          const hemi = sceneRef.current.children.find((c) => c instanceof THREE.HemisphereLight) as THREE.HemisphereLight | undefined;
          if (hemi) hemi.position.set(center.x, center.y + maxDim, center.z);
        }
        setLoading(false);
      },
      undefined,
      (err) => {
        if (!cancelled) {
          setError(`No se pudo cargar el modelo (${model.file}). ${(err as Error)?.message ?? ''}`);
          setLoading(false);
        }
      },
    );
    return () => {
      cancelled = true;
      draco.dispose();
    };
  }, [model.file, model.key]);

  // ── escena base (una sola vez) ─────────────────────────────────────────────
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0b0e);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    mount.appendChild(renderer.domElement);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x334, 1.15));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(3, 6, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.5);
    fill.position.set(-4, 2, -3);
    scene.add(fill);
    const root = new THREE.Group();
    scene.add(root);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !reducedMotion;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.8;
    controls.enablePan = true; // feedback usuario: pan (botón derecho / dos dedos)

    sceneRef.current = scene;
    cameraRef.current = camera;
    controlsRef.current = controls;
    rendererRef.current = renderer;
    modelRootRef.current = root;

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let lastHover: THREE.Object3D | null = null;
    let lastHoverEmissive: THREE.Color | null = null;
    let lastHoverIntensity = 0;
    // tap vs drag (seleccionar solo si el puntero no se movió al soltar)
    let downX = 0;
    let downY = 0;
    let moved = false;

    const pickAt = (cx: number, cy: number): THREE.Object3D | null => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((cx - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((cy - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObject(root, true);
      for (const h of hits) {
        let o: THREE.Object3D | null = h.object;
        let visibleThrough = o.visible;
        while (o && o !== root) {
          if (!o.visible) visibleThrough = false;
          if (o.name && !o.name.startsWith('node-')) {
            if (visibleThrough) return o;
            break; // pieza oculta por filtro/aislamiento: probar siguiente hit
          }
          o = o.parent;
        }
      }
      return null;
    };

    const onMove = (e: PointerEvent) => {
      if (loadingRef.current) return;
      const hit = pickAt(e.clientX, e.clientY);
      setHoverName(hit?.name ?? null);
      if (hit !== lastHover) {
        // restaurar anterior
        if (lastHover && lastHoverEmissive) {
          const mat = (lastHover as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
          if (mat?.emissive && !originalsRef.current.has(lastHover)) {
            mat.emissive.copy(lastHoverEmissive);
            mat.emissiveIntensity = lastHoverIntensity;
          }
        }
        lastHover = hit;
        const mat = hit ? (hit as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined : undefined;
        if (hit && mat?.emissive) {
          lastHoverEmissive = mat.emissive.clone();
          lastHoverIntensity = mat.emissiveIntensity;
          if (!originalsRef.current.has(hit)) {
            mat.emissive.set(HIGHLIGHT_EMISSIVE);
            mat.emissiveIntensity = 0.9;
          }
        } else {
          lastHoverEmissive = null;
          lastHoverIntensity = 0;
        }
        // en modo estático (reduced motion) no hay loop: pintar el hover a mano
        if (staticModeRef.current) renderer.render(scene, camera);
      }
    };
    const onDown = (e: PointerEvent) => {
      downX = e.clientX;
      downY = e.clientY;
      moved = false;
    };
    const onClick = (e: PointerEvent) => {
      if (loadingRef.current) return;
      // tap vs drag: solo seleccionar si el puntero no se movió (>6px = rotación)
      if (moved || Math.abs(e.clientX - downX) > 6 || Math.abs(e.clientY - downY) > 6) return;
      const hit = pickAt(e.clientX, e.clientY);
      if (!hit) return;
      // seleccionar estructura del grafo cuyo mapping incluya esta pieza (si existe)
      const match = structuresForModelRef.current.find((s) =>
        (s.modelMeshes[modelKeyRef.current] ?? []).includes(hit.name),
      );
      if (match) {
        setSelectedId(match.id);
        setIsolateId(null); // al cambiar de pieza se sale del aislamiento
      }
      setHoverName(hit.name);
    };
    const onDrag = (e: PointerEvent) => {
      if (Math.abs(e.clientX - downX) > 6 || Math.abs(e.clientY - downY) > 6) moved = true;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointermove', onMove);
    dom.addEventListener('pointerdown', onDown);
    dom.addEventListener('pointermove', onDrag);
    dom.addEventListener('pointerup', onClick);
    disposablesRef.current.push({
      dispose: () => {
        dom.removeEventListener('pointermove', onMove);
        dom.removeEventListener('pointerdown', onDown);
        dom.removeEventListener('pointermove', onDrag);
        dom.removeEventListener('pointerup', onClick);
      },
    });

    // (el loop de render lo posee el efecto de reduced-motion, que reacciona al cambio)

    return () => {
      stoppedRef.current = true;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      for (const d of disposablesRef.current) d.dispose();
      disposablesRef.current = [];
      controls.dispose();
      renderer.dispose();
      if (dom.parentElement) dom.parentElement.removeChild(dom);
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh) m.geometry?.dispose();
      });
      outlineMatRef.current?.dispose();
      outlineMatRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── loop de render: reactivo a prefers-reduced-motion ──────────────────────
  // (el estado puede llegar DESPUÉS del montaje: arrancar/parar el RAF aquí,
  //  no en el efecto de escena que solo corre una vez)
  useEffect(() => {
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const ctrl = controlsRef.current;
    if (!renderer || !scene || !camera || !ctrl) return;
    staticModeRef.current = reducedMotion;
    if (reducedMotion) {
      // una sola pasada estática; OrbitControls deshabilitado
      stoppedRef.current = true;
      cancelAnimationFrame(rafRef.current);
      ctrl.enabled = false;
      ctrl.enableDamping = false;
      renderer.render(scene, camera);
      return () => {};
    }
    stoppedRef.current = false;
    ctrl.enabled = true;
    ctrl.enableDamping = true;
    const loop = () => {
      ctrl.update();
      renderer.render(scene, camera);
      if (!stoppedRef.current) rafRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      stoppedRef.current = true;
      cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  // ── transparencia de capas que tapan la selección (feedback #3) ────────────
  // clone-on-write del material: los GLB comparten material entre meshes y
  // mutar la opacidad contaminaría a piezas no deseadas.
  const setMeshOpacity = useCallback((mesh: THREE.Mesh, opacity: number | null) => {
    if (opacity === null) {
      const orig = matOriginalsRef.current.get(mesh);
      if (orig) {
        const clone = mesh.material;
        mesh.material = orig;
        const mats = Array.isArray(clone) ? clone : [clone];
        for (const m of mats) m?.dispose();
        matOriginalsRef.current.delete(mesh);
      }
      return;
    }
    if (!matOriginalsRef.current.has(mesh)) {
      matOriginalsRef.current.set(mesh, mesh.material);
      mesh.material = Array.isArray(mesh.material)
        ? mesh.material.map((m) => m.clone())
        : mesh.material.clone();
    }
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of mats) {
      const std = m as THREE.MeshStandardMaterial;
      std.transparent = true;
      std.opacity = opacity;
      std.depthWrite = false;
    }
  }, []);

  /** Restaura los materiales clonados de los oclusores actuales. */
  const resetOccluders = useCallback(() => {
    for (const mesh of occluderMeshesRef.current) setMeshOpacity(mesh, null);
    occluderMeshesRef.current = [];
  }, [setMeshOpacity]);

  /** Raycast cámara→pieza: lo que se interpone se vuelve translúcido. */
  const updateOccluders = useCallback(() => {
    resetOccluders();
    const sel = selectedStructureRef.current;
    if (!sel || isolateIdRef.current) return; // aislada = ya solo se ve la pieza
    const root = modelRootRef.current;
    const cam = cameraRef.current;
    if (!root || !cam) return;
    const names = resolveHighlightNames(sel, modelKeyRef.current);
    const targets: THREE.Object3D[] = [];
    for (const n of names) targets.push(...(namedMeshesRef.current.get(n) ?? []));
    if (!targets.length) return;
    const targetSet = new Set(targets);
    const ray = new THREE.Raycaster();
    const occ = new Set<THREE.Mesh>();
    const dir = new THREE.Vector3();
    const center = new THREE.Vector3();
    for (const t of targets.slice(0, 12)) {
      t.getWorldPosition(center);
      dir.copy(center).sub(cam.position);
      const dist = dir.length();
      if (dist < 1e-6) continue;
      dir.normalize();
      ray.set(cam.position, dir);
      ray.far = dist * 0.98;
      for (const h of ray.intersectObject(root, true)) {
        const m = h.object as THREE.Mesh;
        if (!m.isMesh || !m.visible || targetSet.has(m)) continue;
        // descartar antecesor invisible (los rayos de three no comprueban visible)
        let p: THREE.Object3D | null = m;
        let visibleThrough = true;
        while (p && p !== root) {
          if (!p.visible) { visibleThrough = false; break; }
          p = p.parent;
        }
        if (visibleThrough) occ.add(m);
        if (occ.size > 40) break;
      }
    }
    for (const m of occ) {
      setMeshOpacity(m, OCCLUDER_OPACITY);
      occluderMeshesRef.current.push(m);
    }
  }, [setMeshOpacity, resetOccluders]);

  // ── highlight de la estructura seleccionada (se declara tras las utilidades de
  // transparencia porque debe resetear oclusores ANTES de resaltar: los oclusores
  // usan materiales CLONADOS y el resalte sobre un clon se perdería al recomputar) ──
  useEffect(() => {
    if (loading || !selectedStructure) return;
    resetOccluders();
    const names = resolveHighlightNames(selectedStructure, model.key);
    if (names.length) applyHighlight(names);
  }, [selectedStructure, model.key, loading, applyHighlight, resetOccluders]);

  /** Visibilidad por categoría del grafo y aislamiento de pieza (feedback #4-5). */
  const applyVisibility = useCallback(() => {
    const filter = LAYER_FILTERS.find((f) => f.key === layerFilterRef.current) ?? LAYER_FILTERS[0];
    const iso = isolateIdRef.current ? getStructureById(isolateIdRef.current) : undefined;
    const isoNames = iso && iso.modelMeshes[modelKeyRef.current]
      ? new Set(iso.modelMeshes[modelKeyRef.current])
      : null;
    for (const [name, objs] of namedMeshesRef.current) {
      const owner = meshOwnersRef.current.get(name);
      let visible = true;
      if (isoNames) visible = isoNames.has(name);
      else if (filter.kinds) visible = owner ? filter.kinds.includes(owner.kind) : false;
      for (const obj of objs) obj.visible = visible;
    }
    updateOccluders();
  }, [updateOccluders]);

  /** Centrar la cámara en la pieza seleccionada manteniendo la orientación (feedback #2). */
  const centerOnSelection = useCallback(() => {
    const sel = selectedStructureRef.current;
    const cam = cameraRef.current;
    const ctrl = controlsRef.current;
    const root = modelRootRef.current;
    if (!sel || !cam || !ctrl || !root) return;
    const names = resolveHighlightNames(sel, modelKeyRef.current);
    const targets: THREE.Object3D[] = [];
    for (const n of names) targets.push(...(namedMeshesRef.current.get(n) ?? []));
    const box = new THREE.Box3();
    if (targets.length) {
      for (const t of targets) box.expandByObject(t);
    } else {
      box.setFromObject(root);
    }
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const dir = cam.position.clone().sub(ctrl.target).normalize();
    cam.position.copy(center).add(dir.multiplyScalar(Math.max(maxDim * 2.2, maxDim)));
    ctrl.target.copy(center);
    ctrl.update();
    if (staticModeRef.current && rendererRef.current && sceneRef.current) {
      rendererRef.current.render(sceneRef.current, cam);
    }
    updateOccluders();
  }, [updateOccluders]);

  // sincronizar refs espejo (los handlers del canvas leen de aquí)
  loadingRef.current = loading;
  modelKeyRef.current = modelKey;
  structuresForModelRef.current = structuresForModel;
  selectedStructureRef.current = selectedStructure;
  layerFilterRef.current = layerFilter;
  isolateIdRef.current = isolateId;

  // aplicar filtros/aislamiento cuando cambia el modelo o los controles
  useEffect(() => {
    if (loading) return;
    applyVisibility();
  }, [loading, layerFilter, isolateId, structuresForModel, applyVisibility]);

  // re-derivar translucidez al cambiar selección o aislamiento
  useEffect(() => {
    if (loading) return;
    updateOccluders();
  }, [selectedId, isolateId, loading, updateOccluders]);

  // atajos de teclado: F centra la selección · Esc sale del aislamiento (feedback #2/#5)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if ((e.key === 'f' || e.key === 'F') && selectedStructureRef.current) centerOnSelection();
      else if (e.key === 'Escape' && isolateIdRef.current) setIsolateId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [centerOnSelection]);

  // re-render estático cuando termina la carga (reduced motion)
  useEffect(() => {
    if (reducedMotion && !loading && rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  }, [reducedMotion, loading]);

  const resetCamera = () => {
    const root = modelRootRef.current;
    const cam = cameraRef.current;
    const ctrl = controlsRef.current;
    if (!root || !cam || !ctrl) return;
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    cam.position.set(center.x + maxDim * 0.9, center.y + maxDim * 0.35, center.z + maxDim * 1.5);
    cam.lookAt(center);
    ctrl.target.copy(center);
    ctrl.update();
    if (reducedMotion && rendererRef.current && sceneRef.current) {
      rendererRef.current.render(sceneRef.current, cam);
    }
    updateOccluders();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* CABECERA */}
      <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 16, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Visor anatómico 3D
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '2px 0 0', color: 'var(--text-primary)' }}>
              {model.label} <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-tertiary)' }}>{model.sizeMb.toFixed(2)} MB · {model.meshCount} piezas</span>
            </h3>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {modelKey === 'colored-skull-base' && (
              <button type="button" onClick={() => setModelKey('exploded-skull')} style={btnStyle} title="Ver cráneo explosionado">
                <Layers size={14} /> <span style={{ fontSize: '0.78rem' }}>Explosionar</span>
              </button>
            )}
            {modelKey === 'exploded-skull' && (
              <button type="button" onClick={() => setModelKey('colored-skull-base')} style={btnStyle} title="Volver al cráneo armado">
                <Box size={14} /> <span style={{ fontSize: '0.78rem' }}>Armado</span>
              </button>
            )}
            <button type="button" onClick={resetCamera} style={btnStyle} title="Resetear cámara">
              <RotateCcw size={14} /> <span style={{ fontSize: '0.78rem' }}>Cámara</span>
            </button>
          </div>
        </div>
        {/* SELECTOR DE MODELOS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {ANATOMY_MODELS.map((m) => {
            const active = m.key === modelKey;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => { setModelKey(m.key); setSelectedId(null); }}
                style={{
                  background: active ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.03)',
                  color: active ? '#fff' : 'var(--text-primary)',
                  border: `1px solid ${active ? 'var(--accent, #0a84ff)' : 'var(--color-border-subtle, rgba(255,255,255,0.1))'}`,
                  borderRadius: 18, padding: '5px 12px', fontSize: '0.76rem', fontWeight: active ? 700 : 500, cursor: 'pointer',
                }}
              >
                {m.label}
              </button>
            );
          })}
        </div>
        {/* FILTROS POR CATEGORÍA DEL GRAFO (feedback usuario) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.4px', fontWeight: 700 }}>Capas</span>
          {LAYER_FILTERS.map((f) => {
            const active = layerFilter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => { setLayerFilter(f.key); setIsolateId(null); }}
                style={{
                  background: active ? 'rgba(53,208,255,0.16)' : 'rgba(255,255,255,0.03)',
                  color: active ? '#7fdcff' : 'var(--text-primary)',
                  border: `1px solid ${active ? 'rgba(53,208,255,0.55)' : 'var(--color-border-subtle, rgba(255,255,255,0.1))'}`,
                  borderRadius: 16, padding: '4px 11px', fontSize: '0.72rem', fontWeight: active ? 700 : 500, cursor: 'pointer',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
          <div
            ref={mountRef}
            style={{
              width: '100%', height: isMobile ? 340 : 480,
              background: '#0a0b0e', borderRadius: 16, border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
              overflow: 'hidden', touchAction: 'none', cursor: 'grab',
            }}
          />
          {/* overlays */}
          {(loading || error) && (
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'rgba(10,11,14,0.72)', borderRadius: 16 }}>
              {error ? (
                <p style={{ color: '#ff8080', fontSize: '0.85rem', padding: '0 20px', textAlign: 'center' }}>{error}</p>
              ) : (
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <Loader2 size={16} /> Cargando {model.label}…
                </span>
              )}
            </div>
          )}
          {isolateId && !loading && (
            <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(10,11,14,0.85)', border: '1px solid rgba(53,208,255,0.5)', borderRadius: 10, padding: '5px 10px', fontSize: '0.72rem', color: '#7fdcff', fontWeight: 700 }}>
              Pieza aislada · Esc para salir
            </div>
          )}
          {reducedMotion && !loading && (
            <div style={{ position: 'absolute', top: 10, left: 10, right: 10, background: 'rgba(10,11,14,0.8)', borderRadius: 10, padding: '6px 10px', fontSize: '0.74rem', color: 'var(--text-secondary)', display: 'flex', gap: 6, alignItems: 'center' }}>
              <Scan size={13} /> Movimiento reducido activo: render estático (usa el selector y “Cámara” para cambiar de vista).
            </div>
          )}
          {hoverName && !loading && (
            <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(10,11,14,0.85)', border: '1px solid rgba(53,208,255,0.4)', borderRadius: 10, padding: '5px 10px', fontSize: '0.8rem', color: '#7fdcff', maxWidth: '80%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {hoverName}
            </div>
          )}
        </div>

        {/* PANEL LATERAL: estructuras del modelo */}
        <div style={{ width: isMobile ? '100%' : 280, background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 16, overflow: 'hidden', alignSelf: 'flex-start' }}>
          <button
            type="button"
            onClick={() => setPanelOpen((o) => !o)}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Estructuras en este modelo ({panelStructures.length}{filterKinds ? ' filtradas' : ''})</span>
            {panelOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {panelOpen && (
            <div style={{ maxHeight: isMobile ? 220 : 420, overflowY: 'auto', padding: '0 10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {panelStructures.map((s) => {
                const active = selectedId === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => { setSelectedId(active ? null : s.id); setIsolateId(null); }}
                    style={{
                      textAlign: 'left', background: active ? 'rgba(53,208,255,0.12)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${active ? 'rgba(53,208,255,0.5)' : 'transparent'}`,
                      borderRadius: 8, padding: '6px 8px', cursor: 'pointer', color: 'var(--text-primary)',
                      display: 'flex', justifyContent: 'space-between', gap: 6, alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: active ? 700 : 500 }}>{s.nameEs}</span>
                    <span style={{ fontSize: '0.62rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>{s.kind}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* FICHA DE LA ESTRUCTURA SELECCIONADA */}
      {selectedStructure && (
        <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid rgba(53,208,255,0.35)', borderRadius: 16, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase' }}>{selectedStructure.kind}</span>
              <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>{selectedStructure.nameEs} <span style={{ fontWeight: 500, color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{selectedStructure.nameEn}</span></h4>
            </div>
            <button type="button" onClick={() => setSelectedId(null)} style={{ ...btnStyle, border: 'none' }}><X size={14} /></button>
          </div>
          {/* acciones de cámara/capas sobre la pieza (feedback usuario) */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" onClick={centerOnSelection} style={btnStyle} title="Centrar la cámara en esta pieza (F)">
              <Crosshair size={14} /> Centrar <span style={{ opacity: 0.6 }}>(F)</span>
            </button>
            {isolateId === selectedStructure.id ? (
              <button type="button" onClick={() => setIsolateId(null)} style={{ ...btnStyle, borderColor: 'rgba(53,208,255,0.5)', color: '#7fdcff' }} title="Mostrar de nuevo todo el modelo (Esc)">
                <EyeOff size={14} /> Salir del aislamiento
              </button>
            ) : (
              <button type="button" onClick={() => setIsolateId(selectedStructure.id)} style={btnStyle} title="Ocultar todo lo demás">
                <Eye size={14} /> Aislar pieza
              </button>
            )}
          </div>
          {'origin' in selectedStructure && (
            <StructureDetail structure={selectedStructure} />
          )}
          <a href={`/app/fitness/library/muscles?structure=${encodeURIComponent(selectedStructure.id)}`} style={{ fontSize: '0.78rem', color: 'var(--accent, #0a84ff)', fontWeight: 600 }}>
            Ver ficha completa en Músculos →
          </a>
        </div>
      )}

      <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
        {stats.total} estructuras · {stats.with3dMapping} con mapping 3D · {stats.pendingCitation} pendientes de verificación bibliográfica (Gray's/Moore/Norkin — plan Gemini).
      </p>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))', color: 'var(--text-primary)',
  borderRadius: 8, padding: '6px 10px', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600,
};

function StructureDetail({ structure }: { structure: AnatomyStructure }) {
  const row = (label: string, value?: string | string[]) => {
    if (!value || (Array.isArray(value) && !value.length)) return null;
    return (
      <div>
        <span style={{ fontSize: '0.68rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>{label}</span>
        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{Array.isArray(value) ? value.join(' · ') : value}</p>
      </div>
    );
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
      {row('Origen', (structure as any).origin)}
      {row('Inserción', (structure as any).insertion)}
      {row('Inervación', (structure as any).innervation)}
      {row('Acción', (structure as any).action)}
      {row('Zona', structure.zone)}
      {row('Lesiones típicas', (structure as any).injuries)}
      {row('Atrapamiento', (structure as any).entrapmentSite)}
      {row('Huesos', (structure as any).bones)}
    </div>
  );
}
