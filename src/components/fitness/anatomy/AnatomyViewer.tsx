// src/components/fitness/anatomy/AnatomyViewer.tsx
// AG-ANATOM — visor 3D anatómico COMPUESTO (ciclo 7: rediseño de UX/UI).
//
// LAYOUT (teoría UX: proximidad, visibilidad del estado, mínima carga cognitiva):
// - Visor a la IZQUIERDA con barra de herramientas compacta y barra de estado
//   (breadcrumb + acciones) justo debajo — sin scroll para las acciones.
// - Panel DERECHO con pestañas: "Estructuras" (buscador + árbol) y "Ficha"
//   (detalle completo con scroll propio) — la ficha nunca obliga a scrollear
//   la página.
// - SELECCIÓN JERÁRQUICA: 1er click SIEMPRE selecciona el CONJUNTO (estructura
//   entera); clicks siguientes descienden: subconjunto → pieza; click en la
//   misma pieza sube un nivel. Doble click = aislar la unidad actual.
// - FILTROS DE SELECCIÓN (qué tipos son clickeables) separados de las CAPAS
//   visibles; el aislamiento incluye las piezas de los kinds seleccionados
//   cuyo AABB cruza la caja de la unidad (aislamiento espacial).
// - Lista: click = seleccionar + centrar; doble click = seleccionar + aislar.
// - Ocultar/Mostrar es un TOGGLE en el mismo sitio (ficha y barra de estado).
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  Box, RotateCcw, ChevronDown, ChevronUp, Scan, X, Loader2, Crosshair, Eye, EyeOff, Search, Layers as LayersIcon, Focus as FocusIcon,
} from 'lucide-react';
import useIsMobile from '../../ui/useIsMobile';
import {
  ANATOMY_STRUCTURES,
  BODY_ZONE_LABELS_ES,
  anatomyGraphStats,
  getStructureById,
  type AnatomyStructure,
  type BodyZone,
  type StructureKind,
} from '../../../data/fitness/anatomyGraph';
import {
  COMPOSITE_PIECES,
  EXPLODE_PAIRS,
  COMPOSITE_STATS,
  type CompositePiece,
} from '../../../data/fitness/anatomy/compositePlan';
import type { JointEntry } from '../../../data/fitness/anatomy/types';
import { overlayParent, OVERLAY_PARENT } from '../../../data/fitness/anatomy/overlayMarkers';
import {
  DEFAULT_LAYERS,
  FOCUS_LABELS,
  KIND_TINT_STRENGTH,
  LAYER_DEFS,
  buildSubgroups,
  focusFromLegacyModel,
  highlightColor,
  layerDef,
  phaseLabel,
  pieceKey,
  pieceVisible,
  type Aabb,
  resolveClick,
  unitPieceKeys,
  type CompositeFocus,
  type CompositeKind,
  type SelectionPath,
} from './composite';
import { buildOwnerIndex } from './viewerLogic';
import { primaryGroup } from '../../../data/fitness/anatomy/anatomyHierarchy';
import { loadAnatomyModel } from './gltfCache';

const COMPOSITE_MODELS = ['overview-skeleton', 'lower-limb', 'upper-limb', 'hand', 'colored-skull-base'] as const;
const MODEL_LABELS: Record<string, string> = {
  'overview-skeleton': 'Esqueleto base',
  'lower-limb': 'Miembro inferior',
  'upper-limb': 'Miembro superior',
  hand: 'Mano',
  'colored-skull-base': 'Cráneo',
};
const PLAN_BY_KEY = new Map(COMPOSITE_PIECES.map((p) => [pieceKey(p.model, p.name), p]));


/**
 * Loader PROPIO del compuesto (NO gltfCache): el compuesto se apropia de las
 * mallas (las re-parenta a sus grupos) y gltfCache comparte escenas con las
 * miniaturas — mutarlas desde aquí las rompería. Cache local por sesión.
 */
const compositeCache = new Map<string, Promise<THREE.Group>>();
function loadCompositeModel(file: string): Promise<THREE.Group> {
  let p = compositeCache.get(file);
  if (!p) {
    p = (async () => {
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      const { DRACOLoader } = await import('three/examples/jsm/loaders/DRACOLoader.js');
      const loader = new GLTFLoader();
      const draco = new DRACOLoader();
      draco.setDecoderPath('/models/anatomy/draco/');
      loader.setDRACOLoader(draco);
      const gltf = await loader.loadAsync(file);
      draco.dispose();
      return gltf.scene;
    })();
    compositeCache.set(file, p);
    p.catch(() => compositeCache.delete(file));
  }
  return p;
}

const STRUCTURE_KIND_TO_COMPOSITE: Record<StructureKind, CompositeKind> = {
  bone: 'bone',
  muscle: 'muscle',
  tendon: 'tendon',
  ligament: 'ligament',
  nerve: 'nerve',
  joint: 'cartilage',
};

function queryParam(name: string): string | null {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get(name);
}

interface Props {
  initialModel?: string;
  initialStructure?: string;
}

interface PieceEntry {
  mesh: THREE.Mesh;
  piece: CompositePiece;
  key: string;
}

export default function AnatomyViewer({ initialModel, initialStructure }: Props) {
  const isMobile = useIsMobile();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rootRef = useRef<THREE.Group | null>(null);
  const rafRef = useRef<number>(0);
  const stoppedRef = useRef(false);
  const staticModeRef = useRef(false);

  const piecesRef = useRef<Map<string, PieceEntry>>(new Map());
  const structureByPieceRef = useRef<Map<string, string>>(new Map());
  const structurePieceCountRef = useRef<Map<string, number>>(new Map());
  const matOriginalsRef = useRef<Map<THREE.Mesh, THREE.Material | THREE.Material[]>>(new Map());
  const occluderMeshesRef = useRef<THREE.Mesh[]>([]);
  const jointMarkerRef = useRef<THREE.Group | null>(null);
  const explodedRef = useRef<{ group: THREE.Group; offsets: Map<string, THREE.Vector3> } | null>(null);
  const generalSkullRef = useRef<THREE.Group | null>(null);
  /** AABB mundial por pieza — calculado en carga (aislamiento espacial) */
  const aabbRef = useRef<Map<string, Aabb>>(new Map());
  /** grupos (subconjuntos) por estructura — perezoso */
  const groupsByStructureRef = useRef<Map<string, { groups: Map<string, string[]>; groupOf: Map<string, string> }>>(new Map());

  const loadingRef = useRef(true);
  const stateRef = useRef({
    focus: 'full' as CompositeFocus,
    layers: new Set<CompositeKind>(DEFAULT_LAYERS),
    selectable: new Set<CompositeKind>(LAYER_DEFS.map((l) => l.kind)),
    hidden: new Set<string>(),
    isolation: null as { keys: ReadonlySet<string>; label: string } | null,
    path: null as SelectionPath | null,
    colorByKind: true,
    skullVersion: 'colored' as 'colored' | 'general',
    explodeT: 0,
  });

  const [reducedMotion, setReducedMotion] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number; label: string }>({ done: 0, total: COMPOSITE_MODELS.length, label: '' });
  const [loading, setLoading] = useState(true);
  const [hoverName, setHoverName] = useState<string | null>(null);
  const [focus, setFocus] = useState<CompositeFocus>(() => {
    const fromModel = focusFromLegacyModel(initialModel ?? queryParam('model'));
    if (fromModel) return fromModel;
    const sid = initialStructure ?? queryParam('structure');
    const s = sid ? getStructureById(sid) : undefined;
    if (s) {
      for (const m of COMPOSITE_MODELS) if ((s.modelMeshes[m]?.length ?? 0) > 0) return focusFromLegacyModel(m) ?? 'full';
    }
    return 'full';
  });
  const [layers, setLayers] = useState<Set<CompositeKind>>(new Set(DEFAULT_LAYERS));
  const [selectable, setSelectable] = useState<Set<CompositeKind>>(new Set(LAYER_DEFS.map((l) => l.kind)));
  const [colorByKind, setColorByKind] = useState(true);
  const [skullVersion, setSkullVersion] = useState<'colored' | 'general'>('colored');
  const [explodeT, setExplodeT] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(initialStructure ?? queryParam('structure'));
  const [path, setPath] = useState<SelectionPath | null>(null);
  const [isolation, setIsolation] = useState<{ keys: ReadonlySet<string>; label: string } | null>(null);
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [panelTab, setPanelTab] = useState<'arbol' | 'ficha'>('arbol');
  const [panelOpen, setPanelOpen] = useState(!isMobile);
  const [panelQuery, setPanelQuery] = useState('');
  const [filtrosOpen, setFiltrosOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedStructure = selectedId ? getStructureById(selectedId) : undefined;
  const stats = useMemo(() => anatomyGraphStats(), []);

  loadingRef.current = loading;
  stateRef.current = {
    focus, layers, hidden, selectable, isolation,
    path: selectedId && path && path.structureId === selectedId ? path : selectedId ? { structureId: selectedId, groupKey: null, pieceKey: null } : null,
    colorByKind, skullVersion, explodeT,
  };
  if (typeof window !== 'undefined') {
    (window as any).__viewerState = { isolation: !!isolation, loading, path };
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const compositeStructures = useMemo(
    () => ANATOMY_STRUCTURES.filter((s) => COMPOSITE_MODELS.some((m) => (s.modelMeshes[m]?.length ?? 0) > 0)),
    [],
  );

  const layerCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const p of COMPOSITE_PIECES) c[p.kind] = (c[p.kind] ?? 0) + 1;
    return c;
  }, []);

  // ── helpers de grupos (perezosos por estructura) ────────────────────────────
  /**
   * Grupos de una estructura usando la JERARQUÍA ANATÓMICA EXPLÍCITA
   * (anatomyHierarchy.ts). Si la estructura pertenece a un grupo anatómico
   * (p.ej. Deltoideus Medius → grp-deltoideus), los grupos incluyen TODAS
   * las piezas de TODAS las estructuras del grupo → click en cualquier
   * cabeza del deltoide resalta las 3 cabezas juntas.
   * Estructuras sin grupo anatómico → fallback a buildSubgroups por nombre.
   */
  const ensureGroups = useCallback((structureId: string) => {
    let g = groupsByStructureRef.current.get(structureId);
    if (g) return g;
    const grp = primaryGroup(structureId);
    if (grp) {
      // JERARQUÍA ANATÓMICA: los subconjuntos = cada estructura del grupo
      const groups = new Map<string, string[]>();
      const groupOf = new Map<string, string>();
      for (const sId of grp.structureIds) {
        const st = getStructureById(sId);
        if (!st) continue;
        const keys: string[] = [];
        for (const m of COMPOSITE_MODELS) {
          for (const n of st.modelMeshes[m] ?? []) {
            const k = pieceKey(m, n);
            if (piecesRef.current.has(k)) { keys.push(k); groupOf.set(k, sId); }
          }
        }
        if (keys.length) groups.set(sId, keys);
      }
      // INCLUIR PIEZAS PADRE de overlays en el mismo subconjunto:
      // p.ej. Deltoid_muscler (sólido) se añade a cada subconjunto que
      // contenga un overlay del deltoide → el highlight cubre sólido + overlay
      for (const [subKey, keys] of groups) {
        for (const k of [...keys]) {
          const parent = OVERLAY_PARENT[k];
          if (parent && piecesRef.current.has(parent) && !keys.includes(parent)) {
            keys.push(parent);
            groupOf.set(parent, subKey);
          }
        }
      }
      g = { groups, groupOf };
      groupsByStructureRef.current.set(structureId, g);
      return g;
    }
    // FALLBACK: subgrupos derivados del nombre (estructuras sin grupo anatómico)
    const st = getStructureById(structureId);
    const piecesOfStructure = [...structureByPieceRef.current.entries()]
      .filter(([, id]) => id === structureId)
      .map(([k]) => [k, k.split(':').slice(1).join(':')] as [string, string]);
    const groups = buildSubgroups(st?.nameEn ?? '', piecesOfStructure);
    const groupOf = new Map<string, string>();
    for (const [gk, list] of groups) for (const k of list) groupOf.set(k, gk);
    g = { groups, groupOf };
    groupsByStructureRef.current.set(structureId, g);
    return g;
  }, []);

  const selectionPieceKeys = useCallback((): string[] => {
    const p = stateRef.current.path;
    if (!p) return [];
    const g = groupsByStructureRef.current.get(p.structureId);
    if (!g) return [];
    return unitPieceKeys(p, g.groups);
  }, []);

  // ── escena base ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0b0e);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 60);
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
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.8;
    controls.enablePan = true;

    sceneRef.current = scene;
    cameraRef.current = camera;
    controlsRef.current = controls;
    rendererRef.current = renderer;
    rootRef.current = root;

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
    let downX = 0;
    let downY = 0;
    let moved = false;

    const selectedKeysNow = (): Set<string> => {
      const p = stateRef.current.path;
      if (!p) return new Set();
      const groups = groupsByStructureRef.current.get(p.structureId);
      return new Set(groups ? unitPieceKeys(p, groups.groups) : []);
    };

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
          if (o.name && o.userData?.__pieceKey) {
            if (!visibleThrough) break;
            const entry = piecesRef.current.get(String(o.userData.__pieceKey));
            if (entry && !stateRef.current.selectable.has(entry.piece.kind)) break;
            return o;
          }
          o = o.parent;
        }
      }
      return null;
    };

    const onMove = (e: PointerEvent) => {
      if (loadingRef.current) return;
      const hit = pickAt(e.clientX, e.clientY);
      setHoverName(hit ? String(hit.userData.__pieceName ?? hit.name ?? '') : null);
      if (hit !== lastHover) {
        // NO restaurar la pieza si pertenece a la selección actual (borraría el highlight)
        const selKeys = selectedKeysNow();
        if (lastHover) {
          const lastKey = String((lastHover as THREE.Mesh).userData?.__pieceKey ?? '');
          if (!selKeys.has(lastKey)) restorePristine(lastHover as THREE.Mesh);
        }
        lastHover = hit;
        const key = hit ? String(hit.userData.__pieceKey) : null;
        if (hit && key && !selKeys.has(key)) {
          const mat = (hit as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
          if (mat?.emissive) {
            const p = piecesRef.current.get(key);
            mat.emissive.set(p ? highlightColor(p.piece.kind) : 0x0e7fa8);
            mat.emissiveIntensity = 0.25;
          }
        }
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
      if (moved || Math.abs(e.clientX - downX) > 6 || Math.abs(e.clientY - downY) > 6) return;
      const hit = pickAt(e.clientX, e.clientY);
      if (!hit) {
        setSelectedId(null);
        setPath(null);
        return;
      }
      const key = String(hit.userData.__pieceKey);
      const ownerId = structureByPieceRef.current.get(key);
      if (!ownerId) { setSelectedId(null); setPath(null); return; }
      const g = ensureGroups(ownerId);
      const groupKey = g.groupOf.get(key) ?? '(estructura)';
      const next = resolveClick({
        current: stateRef.current.path?.structureId === ownerId ? stateRef.current.path : null,
        clickedPieceKey: key,
        clickedStructureId: ownerId,
        groups: g.groups,
        clickedGroupKey: groupKey,
      });
      setPath(next);
      setSelectedId(ownerId);
      setPanelTab('ficha');
    };
    const onDblClick = (e: MouseEvent) => {
      if (loadingRef.current) return;
      const hit = pickAt(e.clientX, e.clientY);
      if (!hit) { setIsolation(null); return; }
      const key = String(hit.userData.__pieceKey);
      // si ya hay aislamiento activo → re-aislar SOLO la pieza clickeada
      if (stateRef.current.isolation) {
        setIsolation({ keys: new Set([key]), label: phaseLabel(key.split(':').slice(1).join(':')) });
        return;
      }
      // sin aislamiento previo → aislar la estructura completa de la pieza
      const ownerId = structureByPieceRef.current.get(key);
      if (!ownerId) { setIsolation(null); return; }
      const p = { structureId: ownerId, groupKey: null, pieceKey: null };
      const g = ensureGroups(ownerId);
      const keys = unitPieceKeys(p, g.groups);
      const unitLabel = getStructureById(ownerId)?.nameEs ?? '';
      setPath(p);
      setSelectedId(ownerId);
      setIsolation({
        keys: new Set(keys),
        label: unitLabel,
      });
    };
    const onDrag = (e: PointerEvent) => {
      if (Math.abs(e.clientX - downX) > 6 || Math.abs(e.clientY - downY) > 6) moved = true;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointermove', onMove);
    dom.addEventListener('pointerdown', onDown);
    dom.addEventListener('pointermove', onDrag);
    dom.addEventListener('pointerup', onClick);
    dom.addEventListener('dblclick', onDblClick);
    const disposables = [() => {
      dom.removeEventListener('pointermove', onMove);
      dom.removeEventListener('pointerdown', onDown);
      dom.removeEventListener('pointermove', onDrag);
      dom.removeEventListener('pointerup', onClick);
      dom.removeEventListener('dblclick', onDblClick);
    }];

    return () => {
      stoppedRef.current = true;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      for (const d of disposables) d();
      controls.dispose();
      renderer.dispose();
      if (dom.parentElement) dom.parentElement.removeChild(dom);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── loop de render ──────────────────────────────────────────────────────────
  useEffect(() => {
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const ctrl = controlsRef.current;
    if (!renderer || !scene || !camera || !ctrl) return;
    staticModeRef.current = false;
    stoppedRef.current = false;
    ctrl.enabled = true;
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
  }, []);

  // ── clonado de material + estado prístino ───────────────────────────────────
  const cloneMaterials = (mesh: THREE.Mesh) => {
    if (Array.isArray(mesh.material)) mesh.material = mesh.material.map((m) => m.clone());
    else mesh.material = (mesh.material as THREE.Material).clone();
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of mats) {
      const std = m as THREE.MeshStandardMaterial;
      if (std?.color) {
        (std.userData as Record<string, unknown>).__origColor = std.color.clone();
        if (std.emissive) {
          (std.userData as Record<string, unknown>).__origEmissive = std.emissive.clone();
          (std.userData as Record<string, unknown>).__origEmissiveIntensity = std.emissiveIntensity;
        }
      }
    }
  };

  const restorePristine = (mesh: THREE.Mesh) => {
    const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
    if (!mat) return;
    const ud = mat.userData as Record<string, unknown>;
    const oc = ud.__origColor as THREE.Color | undefined;
    const oe = ud.__origEmissive as THREE.Color | undefined;
    const oi = ud.__origEmissiveIntensity as number | undefined;
    if (mat.color && oc) mat.color.copy(oc);
    if (mat.emissive && oe) { mat.emissive.copy(oe); mat.emissiveIntensity = oi ?? 0; }
  };

  // ── carga progresiva del compuesto + AABB por pieza ─────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      piecesRef.current.clear();
      structureByPieceRef.current.clear();
      structurePieceCountRef.current.clear();
      aabbRef.current.clear();
      groupsByStructureRef.current.clear();
      try {
        for (let i = 0; i < COMPOSITE_MODELS.length; i++) {
          const model = COMPOSITE_MODELS[i];
          if (cancelled) return;
          setProgress({ done: i, total: COMPOSITE_MODELS.length, label: MODEL_LABELS[model] });
          const scene = await loadCompositeModel(`/models/anatomy/${model}.glb`);
          if (cancelled || !rootRef.current) return;
          if (!scene) throw new Error(`GLB sin escena: ${model}`);
          const root = rootRef.current;
          const group = new THREE.Group();
          group.name = model;
          const structures = ANATOMY_STRUCTURES.filter((s) => (s.modelMeshes[model]?.length ?? 0) > 0);
          const owners = buildOwnerIndex(structures, model);
          // recolectar primero, re-parentar después (traverse + add = crash)
          const toAdd: THREE.Mesh[] = [];
          scene.traverse((obj) => {
            const mesh = obj as THREE.Mesh;
            if (!mesh.isMesh) return;
            mesh.castShadow = false;
            mesh.receiveShadow = false;
            cloneMaterials(mesh);
            const key = pieceKey(model, obj.name ?? '');
            const piece = PLAN_BY_KEY.get(key);
            mesh.userData.__pieceKey = key;
            mesh.userData.__pieceName = obj.name ?? '';
            if (piece) {
              piecesRef.current.set(key, { mesh, piece, key });
              toAdd.push(mesh);
              // AABB mundial por pieza (aislamiento espacial)
              mesh.updateMatrixWorld(true);
              const b = new THREE.Box3().setFromObject(mesh);
              if (!b.isEmpty()) {
                aabbRef.current.set(key, {
                  min: [b.min.x, b.min.y, b.min.z],
                  max: [b.max.x, b.max.y, b.max.z],
                });
              }
              // pieza oculta por dedup → NO clickeable (interceptaba el ray)
              if (piece.hiddenByDup) mesh.raycast = () => {};
              const ownerId = owners.get(obj.name ?? '') ?? owners.get(key);
              if (ownerId) {
                if (!structureByPieceRef.current.has(key)) structureByPieceRef.current.set(key, ownerId);
                structurePieceCountRef.current.set(ownerId, (structurePieceCountRef.current.get(ownerId) ?? 0) + 1);
              }
            }
          });
          for (const mesh of toAdd) group.add(mesh);
          root.add(group);
        }
        setProgress({ done: COMPOSITE_MODELS.length, total: COMPOSITE_MODELS.length, label: '' });
        const root = rootRef.current;
        const cam = cameraRef.current;
        const ctrl = controlsRef.current;
        if (root && cam && ctrl) {
          const box = new THREE.Box3().setFromObject(root);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          cam.position.set(center.x + maxDim * 0.9, center.y + maxDim * 0.35, center.z + maxDim * 1.5);
          cam.near = maxDim / 200;
          cam.far = maxDim * 20;
          cam.updateProjectionMatrix();
          cam.lookAt(center);
          ctrl.target.copy(center);
          ctrl.maxDistance = maxDim * 6;
          ctrl.minDistance = maxDim * 0.2;
          ctrl.update();
        }
        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          setError(`No se pudo cargar el modelo compuesto. ${(err as Error)?.message ?? ''}`);
          setLoading(false);
        }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // ── visibilidad ─────────────────────────────────────────────────────────────
  const applyVisibility = useCallback(() => {
    const st = stateRef.current;
    for (const { mesh, piece, key } of piecesRef.current.values()) {
      mesh.visible = pieceVisible(piece, {
        focus: st.focus,
        layers: st.layers,
        hidden: st.hidden,
        isolation: st.isolation,
      });
      if (st.focus === 'skull' && st.skullVersion === 'general' && piece.model === 'colored-skull-base' && piece.region === 'skull') {
        mesh.visible = false;
      }
    }
    if (generalSkullRef.current) generalSkullRef.current.visible = st.focus === 'skull' && st.skullVersion === 'general';
    if (explodedRef.current) explodedRef.current.group.visible = st.focus === 'skull' && st.skullVersion === 'colored' && st.explodeT > 0.001;
  }, []);

  // ── oclu­sores ─────────────────────────────────────────────────────────────
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
        : (mesh.material as THREE.Material).clone();
    }
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of mats) {
      const std = m as THREE.MeshStandardMaterial;
      std.transparent = true;
      std.opacity = opacity;
      std.depthWrite = false;
    }
  }, []);

  const resetOccluders = useCallback(() => {
    for (const mesh of occluderMeshesRef.current) setMeshOpacity(mesh, null);
    occluderMeshesRef.current = [];
  }, [setMeshOpacity]);

  const updateOccluders = useCallback(() => {
    resetOccluders();
    const keys = selectionPieceKeys();
    if (!keys.length || stateRef.current.isolation) return;
    const cam = cameraRef.current;
    const root = rootRef.current;
    if (!cam || !root) return;
    const targets: THREE.Mesh[] = [];
    for (const k of keys) {
      const e = piecesRef.current.get(k);
      if (e?.mesh.visible) targets.push(e.mesh);
    }
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
      setMeshOpacity(m, 0.12);
      occluderMeshesRef.current.push(m);
    }
  }, [resetOccluders, setMeshOpacity, selectionPieceKeys]);

  // ── marcador de articulación ────────────────────────────────────────────────
  const removeJointMarker = useCallback(() => {
    const g = jointMarkerRef.current;
    if (!g) return;
    g.removeFromParent();
    g.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        m.geometry.dispose();
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        for (const mat of mats) mat?.dispose();
      }
    });
    jointMarkerRef.current = null;
  }, []);

  const addJointMarker = useCallback((keys: string[]) => {
    const root = rootRef.current;
    if (!root) return;
    const targets: THREE.Object3D[] = [];
    for (const k of keys) {
      const e = piecesRef.current.get(k);
      if (e?.mesh.visible) targets.push(e.mesh);
    }
    if (!targets.length) return;
    const box = new THREE.Box3();
    for (const t of targets) box.expandByObject(t);
    if (box.isEmpty()) return;
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const modelMaxDim = Math.max(...new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3()).toArray()) || 1;
    const r = THREE.MathUtils.clamp(Math.min(size.x, size.y, size.z) * 0.14, modelMaxDim * 0.006, modelMaxDim * 0.035);
    const g = new THREE.Group();
    const core = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), new THREE.MeshBasicMaterial({ color: 0x35d0ff }));
    const halo = new THREE.Mesh(new THREE.SphereGeometry(r * 2.1, 24, 16), new THREE.MeshBasicMaterial({ color: 0x35d0ff, transparent: true, opacity: 0.16, depthWrite: false }));
    core.raycast = () => {};
    halo.raycast = () => {};
    g.add(core, halo);
    g.position.copy(center);
    root.add(g);
    jointMarkerRef.current = g;
  }, []);

  // ── highlight jerárquico: unidad fuerte, contenedor atenuado ────────────────
  useEffect(() => {
    if (loading) return;
    resetOccluders();
    removeJointMarker();
    // restaurar TODO desde el estado prístino + re-aplicar tinte (evita highlight residual)
    const stTint = stateRef.current;
    for (const { mesh, piece } of piecesRef.current.values()) {
      restorePristine(mesh);
      const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
      const orig = mat?.userData?.__origColor as THREE.Color | undefined;
      if (mat?.color && orig && stTint.colorByKind) mat.color.copy(orig).lerp(new THREE.Color(layerDef(piece.kind).color), KIND_TINT_STRENGTH);
    }
    if (!selectedId || !path || path.structureId !== selectedId) return;
    const g = groupsByStructureRef.current.get(selectedId);
    if (!g) return;
    // niveles: unidad seleccionada (fuerte) → contenedor padre (suave) → resto (prístino)
    const unitNames = new Set(unitPieceKeys(path, g.groups));
    let parentNames = new Set<string>();
    if (path.pieceKey && path.groupKey) {
      parentNames = new Set(g.groups.get(path.groupKey) ?? []);
    } else if (path.groupKey) {
      // subconjunto seleccionado: el "padre" es la estructura entera — ya suave
      parentNames = new Set();
    }
    const isJoint = selectedStructure?.kind === 'joint';
    const hc = highlightColor(STRUCTURE_KIND_TO_COMPOSITE[selectedStructure?.kind ?? 'bone']);
    for (const k of unitNames) {
      const e = piecesRef.current.get(k);
      if (!e || !e.mesh.visible) continue;
      const mat = e.mesh.material as THREE.MeshStandardMaterial | undefined;
      if (!mat?.emissive) continue;
      // OVERLAY seleccionado → boost fuerte + opacidad alta para que se vea
      // sobre el músculo sólido que está detrás
      const isOverlayPiece = !!OVERLAY_PARENT[k];
      const isExactPiece = path.pieceKey === k;
      // highlight SUTIL: emissive moderado + shift de color hacia el tipo
      mat.emissive.set(hc);
      mat.emissiveIntensity = isOverlayPiece ? 0.8 : 0.5;
      if (mat.color) mat.color.lerp(new THREE.Color(hc), 0.5);
      // overlay seleccionado → aumentar opacidad para visibilidad clara
      if (isOverlayPiece) {
        mat.transparent = true;
        mat.opacity = isExactPiece ? 0.92 : 0.7;
        mat.depthWrite = true;
      }
    }
    for (const k of parentNames) {
      if (unitNames.has(k)) continue;
      const e = piecesRef.current.get(k);
      if (!e || !e.mesh.visible) continue;
      const mat = e.mesh.material as THREE.MeshStandardMaterial | undefined;
      if (!mat?.emissive) continue;
      mat.emissive.set(hc);
      mat.emissiveIntensity = 0.15;
    }
    if (isJoint) {
      const unitKeys = [...unitNames].map((n) => pieceKey(selectedId, n));
      addJointMarker(unitKeys);
    }
    updateOccluders();
  }, [selectedId, path, loading, selectedStructure?.kind, resetOccluders, removeJointMarker, addJointMarker, updateOccluders]);

  // ── aplicar visibilidad ─────────────────────────────────────────────────────
  useEffect(() => {
    if (loading) return;
    applyVisibility();
  }, [loading, focus, layers, hidden, isolation, selectable, skullVersion, explodeT, applyVisibility]);

  // ── tinte por tipo ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (loading) return;
    for (const { mesh, piece } of piecesRef.current.values()) {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const m of mats) {
        const std = m as THREE.MeshStandardMaterial;
        const orig = std.userData?.__origColor as THREE.Color | undefined;
        if (!std.color || !orig) continue;
        if (colorByKind) std.color.copy(orig).lerp(new THREE.Color(layerDef(piece.kind).color), KIND_TINT_STRENGTH);
        else std.color.copy(orig);
      }
    }
  }, [colorByKind, loading]);

  // ── cráneo: explosionado + vista general ────────────────────────────────────
  useEffect(() => {
    if (loading || focus !== 'skull') return;
    let cancelled = false;
    (async () => {
      try {
        if (skullVersion === 'colored' && !explodedRef.current) {
          setProgress({ done: 0, total: 1, label: 'Cráneo explosionado' });
          const scene = await loadCompositeModel('/models/anatomy/exploded-skull.glb');
          if (cancelled || !scene) return;
          const group = new THREE.Group();
          const offsets = new Map<string, THREE.Vector3>();
          const toAdd: Array<{ mesh: THREE.Mesh; key: string; baseName: string }> = [];
          scene.traverse((obj) => {
            const mesh = obj as THREE.Mesh;
            if (!mesh.isMesh) return;
            cloneMaterials(mesh);
            const baseName = EXPLODE_PAIRS[obj.name ?? ''];
            const baseEntry = baseName ? piecesRef.current.get(pieceKey('colored-skull-base', baseName)) : null;
            if (!baseEntry) { mesh.visible = false; return; }
            const key = pieceKey('exploded-skull', obj.name ?? '');
            toAdd.push({ mesh, key, baseName });
            offsets.set(key, new THREE.Vector3());
          });
          for (const { mesh, key, baseName } of toAdd) {
            const baseEntry = piecesRef.current.get(pieceKey('colored-skull-base', baseName))!;
            const baseCenter = new THREE.Vector3();
            baseEntry.mesh.geometry.computeBoundingBox();
            baseEntry.mesh.geometry.boundingBox!.getCenter(baseCenter);
            baseEntry.mesh.localToWorld(baseCenter);
            const expCenter = new THREE.Vector3();
            mesh.geometry.computeBoundingBox();
            mesh.geometry.boundingBox!.getCenter(expCenter);
            mesh.localToWorld(expCenter);
            mesh.userData.__pieceKey = key;
            mesh.userData.__pieceName = `exploded · ${baseName}`;
            mesh.visible = false;
            offsets.set(key, baseCenter.clone().sub(expCenter));
            group.add(mesh);
            piecesRef.current.set(key, {
              mesh,
              piece: { ...baseEntry.piece, model: 'exploded-skull', name: baseName, hiddenByDup: undefined },
              key,
            });
          }
          rootRef.current?.add(group);
          explodedRef.current = { group, offsets };
          setProgress({ done: 1, total: 1, label: '' });
        }
        if (skullVersion === 'general' && !generalSkullRef.current) {
          setProgress({ done: 0, total: 1, label: 'Cráneo vista general' });
          const scene = await loadCompositeModel('/models/anatomy/overview-colored-skull.glb');
          if (cancelled || !scene) return;
          const group = new THREE.Group();
          const toAdd: THREE.Mesh[] = [];
          scene.traverse((obj) => {
            const mesh = obj as THREE.Mesh;
            if (!mesh.isMesh) return;
            cloneMaterials(mesh);
            const key = pieceKey('overview-colored-skull', obj.name ?? '');
            mesh.userData.__pieceKey = key;
            mesh.userData.__pieceName = obj.name ?? '';
            const piece: CompositePiece = { model: 'overview-colored-skull', name: obj.name ?? '', region: 'skull', kind: 'bone', container: 'Bones' };
            piecesRef.current.set(key, { mesh, piece, key });
            toAdd.push(mesh);
          });
          for (const mesh of toAdd) group.add(mesh);
          rootRef.current?.add(group);
          generalSkullRef.current = group;
          setProgress({ done: 1, total: 1, label: '' });
        }
        applyVisibility();
      } catch (err) {
        if (!cancelled) setError(`No se pudo cargar la variante del cráneo. ${(err as Error)?.message ?? ''}`);
      }
    })();
    return () => { cancelled = true; };
  }, [loading, focus, skullVersion, applyVisibility]);

  // ── slider de explosión ─────────────────────────────────────────────────────
  useEffect(() => {
    if (focus !== 'skull' || skullVersion !== 'colored') return;
    const t = explodeT;
    const baseFade = Math.max(0, Math.min(1, 1 - t * 2));
    const expFade = Math.max(0, Math.min(1, t * 2));
    for (const { mesh, piece } of piecesRef.current.values()) {
      if (piece.model !== 'colored-skull-base' || piece.region !== 'skull') continue;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const m of mats) {
        const std = m as THREE.MeshStandardMaterial;
        std.transparent = baseFade < 0.999;
        std.opacity = baseFade;
        std.depthWrite = baseFade > 0.5;
      }
    }
    const exp = explodedRef.current;
    if (exp) {
      for (const [key, offset] of exp.offsets) {
        const e = piecesRef.current.get(key);
        if (!e) continue;
        e.mesh.position.copy(offset).multiplyScalar(1 - t);
        const mats = Array.isArray(e.mesh.material) ? e.mesh.material : [e.mesh.material];
        for (const m of mats) {
          const std = m as THREE.MeshStandardMaterial;
          std.transparent = expFade < 0.999;
          std.opacity = expFade;
          std.depthWrite = expFade > 0.5;
        }
      }
    }
  }, [explodeT, focus, skullVersion]);

  // ── centrar / auto-encuadre ─────────────────────────────────────────────────
  const frameBox = useCallback((box: THREE.Box3) => {
    const cam = cameraRef.current;
    const ctrl = controlsRef.current;
    if (!cam || !ctrl || box.isEmpty()) return;
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const dir = cam.position.clone().sub(ctrl.target).normalize();
    cam.position.copy(center).add(dir.multiplyScalar(Math.max(maxDim * 2.4, maxDim * 0.5 + 0.25)));
    ctrl.target.copy(center);
    ctrl.update();
    if (staticModeRef.current && rendererRef.current && sceneRef.current) rendererRef.current.render(sceneRef.current, cam);
  }, []);

  const centerOnSelection = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const keys = selectionPieceKeys();
    const box = new THREE.Box3();
    let any = false;
    for (const k of keys) {
      const e = piecesRef.current.get(k);
      if (e?.mesh.visible) { box.expandByObject(e.mesh); any = true; }
    }
    if (!any) box.setFromObject(root);
    frameBox(box);
  }, [frameBox, selectionPieceKeys]);

  useEffect(() => {
    if (loading) return;
    setHoverName(null);
    const root = rootRef.current;
    if (!root) return;
    const box = new THREE.Box3();
    let any = false;
    for (const { mesh } of piecesRef.current.values()) {
      if (mesh.visible) { box.expandByObject(mesh); any = true; }
    }
    if (any) frameBox(box);
  }, [focus, loading, frameBox]);

  // atajos
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if ((e.key === 'f' || e.key === 'F') && selectedId) centerOnSelection();
      else if (e.key === 'Escape' && isolation) setIsolation(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [centerOnSelection, selectedId, isolation]);

  useEffect(() => {
    if (reducedMotion && !loading && rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  }, [reducedMotion, loading]);

  const resetCamera = () => {
    const root = rootRef.current;
    const cam = cameraRef.current;
    const ctrl = controlsRef.current;
    if (!root || !cam || !ctrl) return;
    const box = new THREE.Box3().setFromObject(root);
    frameBox(box);
  };

  // ── acciones ────────────────────────────────────────────────────────────────
  const currentPieceKeys = selectionPieceKeys();
  const unitHidden = currentPieceKeys.length > 0 && currentPieceKeys.every((k) => hidden.has(k));
  const toggleHideCurrent = () => {
    setHidden((prev) => {
      const next = new Set(prev);
      for (const k of currentPieceKeys) {
        if (unitHidden) next.delete(k);
        else next.add(k);
      }
      return next;
    });
  };

  // ── panel: árbol ────────────────────────────────────────────────────────────
  const KIND_ORDER: StructureKind[] = ['muscle', 'tendon', 'ligament', 'nerve', 'joint', 'bone'];
  const KIND_LABELS: Record<StructureKind, string> = {
    muscle: 'Músculos', tendon: 'Tendones', ligament: 'Ligamentos',
    nerve: 'Nervios', joint: 'Articulaciones', bone: 'Huesos',
  };
  const panelTree = useMemo(() => {
    const q = panelQuery.trim().toLowerCase();
    const list = compositeStructures.filter((s) => !q || `${s.nameEs} ${s.nameEn} ${s.synonyms.join(' ')}`.toLowerCase().includes(q));
    const tree: Array<{ kind: StructureKind; groups: Array<{ zone: BodyZone; items: AnatomyStructure[] }> }> = [];
    for (const kind of KIND_ORDER) {
      const ofKind = list.filter((s) => s.kind === kind);
      if (!ofKind.length) continue;
      const byZone = new Map<BodyZone, AnatomyStructure[]>();
      for (const s of ofKind) byZone.set(s.zone, [...(byZone.get(s.zone) ?? []), s]);
      tree.push({
        kind,
        groups: [...byZone.entries()].map(([zone, items]) => ({ zone, items: items.sort((a, b) => a.nameEs.localeCompare(b.nameEs)) })),
      });
    }
    return tree;
  }, [compositeStructures, panelQuery]);

  /** click en la lista: seleccionar + centrar; doble click: + aislar */
  const selectFromPanel = (s: AnatomyStructure, isolate: boolean) => {
    setSelectedId(s.id);
    setPath({ structureId: s.id, groupKey: null, pieceKey: null });
    setPanelTab(isolate ? 'arbol' : 'ficha');
    // centrar tras el re-render de visibilidad
    requestAnimationFrame(() => {
      const keys = (s.modelMeshes[COMPOSITE_MODELS[0]] ?? []).flatMap(() => []);
      void keys;
      const box = new THREE.Box3();
      let any = false;
      for (const m of COMPOSITE_MODELS) {
        for (const n of s.modelMeshes[m] ?? []) {
          const e = piecesRef.current.get(pieceKey(m, n));
          if (e?.mesh.visible) { box.expandByObject(e.mesh); any = true; }
        }
      }
      if (any) frameBox(box);
    });
    if (isolate) {
      requestAnimationFrame(() => {
        const box = new THREE.Box3();
        let any = false;
        for (const m of COMPOSITE_MODELS) {
          for (const n of s.modelMeshes[m] ?? []) {
            const e = piecesRef.current.get(pieceKey(m, n));
            if (e?.mesh.visible) { box.expandByObject(e.mesh); any = true; }
          }
        }
        if (!any) return;
        const size = box.getSize(new THREE.Vector3());
        const margin = Math.max(size.x, size.y, size.z) * 0.12;
        box.expandByVector(new THREE.Vector3(margin, margin, margin));
        setIsolation({
          keys: new Set(
            (s.modelMeshes[COMPOSITE_MODELS[0]] ?? []).length > 0
              ? COMPOSITE_MODELS.flatMap((m) => (s.modelMeshes[m] ?? []).map((n) => pieceKey(m, n)))
              : []
          ),
          label: s.nameEs,
        });
      });
    }
  };

  const hiddenCount = hidden.size;
  const isolationActive = !!isolation;

  const toggleHideFromPanel = (s: AnatomyStructure) => {
    setHidden((prev) => {
      const next = new Set(prev);
      let allHidden = true;
      const keys: string[] = [];
      for (const m of COMPOSITE_MODELS) {
        for (const n of s.modelMeshes[m] ?? []) {
          keys.push(pieceKey(m, n));
          if (!next.has(pieceKey(m, n))) allHidden = false;
        }
      }
      for (const k of keys) {
        if (allHidden) next.delete(k);
        else next.add(k);
      }
      return next;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* CABECERA COMPACTA */}
      <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 14, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: '0.68rem', color: 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Visor anatómico 3D · compuesto
            </span>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              {FOCUS_LABELS[focus]} <span style={{ fontSize: '0.72rem', fontWeight: 500, color: 'var(--text-tertiary)' }}>{COMPOSITE_STATS.total} piezas · 5 modelos</span>
            </h3>
          </div>
          <button type="button" onClick={resetCamera} style={btnStyle} title="Resetear cámara">
            <RotateCcw size={13} /> <span style={{ fontSize: '0.75rem' }}>Cámara</span>
          </button>
        </div>

        {/* FOCUS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, alignItems: 'center' }}>
          <FocusIcon size={12} style={{ color: 'var(--text-tertiary)' }} />
          {(Object.keys(FOCUS_LABELS) as CompositeFocus[]).map((f) => {
            const active = focus === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => { setFocus(f); setSelectedId(null); setPath(null); }}
                style={{
                  background: active ? 'var(--accent, #0a84ff)' : 'rgba(255,255,255,0.03)',
                  color: active ? '#fff' : 'var(--text-primary)',
                  border: `1px solid ${active ? 'var(--accent, #0a84ff)' : 'var(--color-border-subtle, rgba(255,255,255,0.1))'}`,
                  borderRadius: 14, padding: '3px 10px', fontSize: '0.72rem', fontWeight: active ? 700 : 500, cursor: 'pointer',
                }}
              >
                {FOCUS_LABELS[f]}
              </button>
            );
          })}
        </div>

        {/* CRÁNEO: versión + explosión */}
        {focus === 'skull' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: 10, padding: '6px 10px' }}>
            {(['colored', 'general'] as const).map((v) => (
              <button key={v} type="button" onClick={() => setSkullVersion(v)} style={{
                background: skullVersion === v ? 'rgba(53,208,255,0.16)' : 'rgba(255,255,255,0.03)',
                color: skullVersion === v ? '#7fdcff' : 'var(--text-primary)',
                border: `1px solid ${skullVersion === v ? 'rgba(53,208,255,0.55)' : 'var(--color-border-subtle, rgba(255,255,255,0.1))'}`,
                borderRadius: 12, padding: '2px 9px', fontSize: '0.7rem', cursor: 'pointer',
              }}>
                {v === 'colored' ? 'Coloreado' : 'Vista general'}
              </button>
            ))}
            {skullVersion === 'colored' && (
              <label style={{ display: 'flex', alignItems: 'center', gap: 7, flex: 1, minWidth: 200 }}>
                <Box size={12} style={{ color: 'var(--text-tertiary)' }} />
                <span style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Explosión</span>
                <input type="range" min={0} max={1} step={0.01} value={explodeT} onChange={(e) => setExplodeT(Number(e.target.value))} style={{ flex: 1, accentColor: '#35d0ff' }} />
                <span style={{ fontSize: '0.66rem', color: 'var(--text-tertiary)', width: 32 }}>{Math.round(explodeT * 100)}%</span>
              </label>
            )}
          </div>
        )}

        {/* CAPAS Y FILTROS (colapsable) */}
        <div>
          <button type="button" onClick={() => setFiltrosOpen((o) => !o)} style={{ ...btnStyle, width: '100%', justifyContent: 'space-between', padding: '5px 10px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <LayersIcon size={13} /> Capas y filtros
              <span style={{ color: 'var(--text-tertiary)', fontWeight: 500, fontSize: '0.68rem' }}>
                {layers.size}/{LAYER_DEFS.length} visibles · {selectable.size}/{LAYER_DEFS.length} seleccionables
              </span>
            </span>
            {filtrosOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {filtrosOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8, background: 'rgba(255,255,255,0.02)', borderRadius: 10, padding: '8px 10px' }}>
              <div>
                <div style={{ fontSize: '0.64rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 4 }}>
                  Capas visibles · <button type="button" onClick={() => setLayers(new Set(LAYER_DEFS.map((l) => l.kind)))} style={{ color: 'var(--accent, #0a84ff)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.64rem' }}>todas</button> · <button type="button" onClick={() => setLayers(new Set())} style={{ color: 'var(--accent, #0a84ff)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.64rem' }}>ninguna</button> · <label style={{ display: 'inline', color: 'var(--accent, #0a84ff)', cursor: 'pointer', fontSize: '0.64rem' }}><input type="checkbox" checked={colorByKind} onChange={(e) => setColorByKind(e.target.checked)} style={{ accentColor: '#35d0ff' }} /> color por tipo</label>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {LAYER_DEFS.map(({ kind, label, color }) => {
                    const active = layers.has(kind);
                    return (
                      <button key={kind} type="button" onClick={() => setLayers((prev) => { const n = new Set(prev); if (n.has(kind)) n.delete(kind); else n.add(kind); return n; })}
                        title={`${layerCounts[kind] ?? 0} piezas`}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                          background: active ? 'rgba(53,208,255,0.14)' : 'rgba(255,255,255,0.03)',
                          color: active ? '#fff' : 'var(--text-tertiary)',
                          border: `1px solid ${active ? `${hexCss(color)}88` : 'var(--color-border-subtle, rgba(255,255,255,0.1))'}`,
                          borderRadius: 12, padding: '2px 8px', fontSize: '0.68rem', fontWeight: active ? 700 : 500, cursor: 'pointer', opacity: active ? 1 : 0.7,
                        }}>
                        <span style={{ width: 7, height: 7, borderRadius: 99, background: hexCss(color), display: 'inline-block' }} />
                        {label} <span style={{ opacity: 0.6 }}>{layerCounts[kind] ?? 0}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.64rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 4 }}>
                  Selección (clickeable y aislable) · <button type="button" onClick={() => setSelectable(new Set(LAYER_DEFS.map((l) => l.kind)))} style={{ color: 'var(--accent, #0a84ff)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.64rem' }}>todos</button> · <button type="button" onClick={() => setSelectable(new Set())} style={{ color: 'var(--accent, #0a84ff)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.64rem' }}>ninguno</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {LAYER_DEFS.map(({ kind, label, color }) => {
                    const active = selectable.has(kind);
                    return (
                      <button key={kind} type="button" onClick={() => setSelectable((prev) => { const n = new Set(prev); if (n.has(kind)) n.delete(kind); else n.add(kind); return n; })}
                        title={active ? 'Clickeable: sí' : 'Clickeable: no (transparente al click)'}
                        style={{
                          background: active ? 'rgba(255,255,255,0.06)' : 'transparent',
                          color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
                          border: `1px dashed ${active ? hexCss(color) : 'var(--color-border-subtle, rgba(255,255,255,0.15))'}`,
                          borderRadius: 12, padding: '2px 8px', fontSize: '0.68rem', cursor: 'pointer',
                          opacity: active ? 1 : 0.55, textDecoration: active ? 'none' : 'line-through',
                        }}>
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MAIN: visor + panel */}
      <div style={{ display: 'flex', gap: 10, flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch' }}>
        {/* VISOR */}
        <div style={{ position: 'relative', flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div
            ref={mountRef}
            style={{
              width: '100%', height: isMobile ? 340 : 560,
              background: '#0a0b0e', borderRadius: 16, border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
              overflow: 'hidden', touchAction: 'none', cursor: 'grab',
            }}
          />
          {(loading || error) && (
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'rgba(10,11,14,0.72)', borderRadius: 16 }}>
              {error ? (
                <p style={{ color: '#ff8080', fontSize: '0.85rem', padding: '0 20px', textAlign: 'center' }}>{error}</p>
              ) : (
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <Loader2 size={18} />
                  {progress.label ? `Cargando ${progress.label} (${progress.done + 1}/${progress.total})…` : 'Preparando visor…'}
                  <span style={{ display: 'block', width: 180, height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                    <span style={{ display: 'block', height: '100%', width: `${(progress.done / progress.total) * 100}%`, background: '#35d0ff', transition: 'width 0.3s' }} />
                  </span>
                </span>
              )}
            </div>
          )}
          {isolationActive && !loading && (
            <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(10,11,14,0.85)', border: '1px solid rgba(53,208,255,0.5)', borderRadius: 10, padding: '5px 10px', fontSize: '0.72rem', color: '#7fdcff', fontWeight: 700 }}>
              Aislado: {isolation?.label} · doble click fuera = ver todo
            </div>
          )}
          {hiddenCount > 0 && !loading && (
            <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(10,11,14,0.85)', border: '1px solid rgba(255,180,80,0.4)', borderRadius: 10, padding: '5px 10px', fontSize: '0.72rem', color: '#ffc98a', display: 'flex', gap: 6, alignItems: 'center' }}>
              {hiddenCount} oculta{hiddenCount > 1 ? 's' : ''}
              <button type="button" onClick={() => setHidden(new Set())} style={{ background: 'none', border: 'none', color: '#ffc98a', cursor: 'pointer', fontWeight: 700 }}>desocultar</button>
            </div>
          )}
          {reducedMotion && !loading && (
            <div style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(10,11,14,0.8)', borderRadius: 10, padding: '4px 8px', fontSize: '0.68rem', color: 'var(--text-secondary)', display: 'flex', gap: 5, alignItems: 'center' }}>
              <Scan size={11} /> movimiento reducido
            </div>
          )}
          {hoverName && !loading && (
            <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(10,11,14,0.85)', border: '1px solid rgba(53,208,255,0.4)', borderRadius: 10, padding: '4px 9px', fontSize: '0.78rem', color: '#7fdcff', maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {phaseLabel(hoverName)}
            </div>
          )}

          {/* BARRA DE ESTADO: breadcrumb + acciones (sin scroll) */}
          {selectedStructure && !loading && (
            <div style={{ background: 'var(--surface-1, #0d0d0f)', border: '1px solid rgba(53,208,255,0.35)', borderRadius: 12, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', flex: 1, minWidth: 0 }}>
                <button type="button" onClick={() => setPath({ structureId: selectedStructure.id, groupKey: null, pieceKey: null })} style={{ ...crumbStyle, fontWeight: path?.groupKey || path?.pieceKey ? 500 : 800, color: (path?.groupKey || path?.pieceKey) ? 'var(--text-tertiary)' : 'var(--text-primary)', cursor: (path?.groupKey || path?.pieceKey) ? 'pointer' : 'default' }}>
                  {selectedStructure.nameEs}
                </button>
                {path?.groupKey ? (
                  <>
                    <span style={{ color: 'var(--text-tertiary)', fontSize: '0.68rem' }}>›</span>
                    <button type="button" onClick={() => setPath({ ...path, pieceKey: null })} style={{ ...crumbStyle, fontWeight: path.pieceKey ? 500 : 800, color: path.pieceKey ? 'var(--text-tertiary)' : 'var(--text-primary)', cursor: path.pieceKey ? 'pointer' : 'default' }}>
                      {path.groupKey === '(estructura)' ? selectedStructure.nameEs : phaseLabel(path.groupKey)}
                    </button>
                  </>
                ) : null}
                {path?.pieceKey ? (
                  <>
                    <span style={{ color: 'var(--text-tertiary)', fontSize: '0.68rem' }}>›</span>
                    <span style={{ ...crumbStyle, fontWeight: 800, color: 'var(--text-primary)' }}>{phaseLabel(path.pieceKey.split(':').slice(1).join(':'))}</span>
                  </>
                ) : null}
              </div>
              <div style={{ display: 'flex', gap: 5 }}>
                <button type="button" onClick={centerOnSelection} style={{ ...btnStyle, padding: '4px 8px', fontSize: '0.72rem' }} title="Centrar (F)"><Crosshair size={12} /> Centrar</button>
                <button
                  type="button"
                  onClick={() => {
                    if (!currentPieceKeys.length) return;
                    setIsolation({
                      keys: new Set(currentPieceKeys),
                      label: path?.pieceKey ? phaseLabel(path.pieceKey.split(':').slice(1).join(':')) : path?.groupKey ? (path.groupKey === '(estructura)' ? (selectedStructure?.nameEs ?? path.groupKey) : phaseLabel(path.groupKey)) : (selectedStructure?.nameEs ?? ''),
                    });
                  }}
                  style={{ ...btnStyle, padding: '4px 8px', fontSize: '0.72rem', ...(isolationActive ? { borderColor: 'rgba(53,208,255,0.5)', color: '#7fdcff' } : {}) }}
                  title="Aislar la selección (doble click en el modelo también)"
                >
                  {isolationActive ? <EyeOff size={12} /> : <Eye size={12} />} {isolationActive ? 'Ver todo' : 'Aislar'}
                </button>
                <button
                  type="button"
                  onClick={toggleHideCurrent}
                  style={{ ...btnStyle, padding: '4px 8px', fontSize: '0.72rem', ...(unitHidden ? { borderColor: 'rgba(255,180,80,0.5)', color: '#ffc98a' } : {}) }}
                  title={unitHidden ? 'Mostrar esta selección' : 'Ocultar esta selección'}
                >
                  {unitHidden ? <Eye size={12} /> : <EyeOff size={12} />} {unitHidden ? 'Mostrar' : 'Ocultar'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* PANEL DERECHO CON PESTAÑAS */}
        <div style={{ width: isMobile ? '100%' : 350, flexShrink: 0, background: 'var(--surface-1, #0d0d0f)', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: isMobile ? 480 : 700 }}>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))' }}>
            {(['arbol', 'ficha'] as const).map((tab) => (
              <button key={tab} type="button" onClick={() => setPanelTab(tab)} style={{
                flex: 1, padding: '9px 6px', background: panelTab === tab ? 'rgba(53,208,255,0.1)' : 'transparent',
                border: 'none', borderBottom: `2px solid ${panelTab === tab ? 'var(--accent, #0a84ff)' : 'transparent'}`,
                color: panelTab === tab ? 'var(--text-primary)' : 'var(--text-tertiary)',
                fontSize: '0.76rem', fontWeight: panelTab === tab ? 800 : 500, cursor: 'pointer',
              }}>
                {tab === 'arbol' ? `Estructuras (${compositeStructures.length})` : 'Ficha'}
              </button>
            ))}
          </div>

          {panelTab === 'arbol' && panelOpen && (
            <>
              <div style={{ padding: '8px 10px 6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '5px 8px' }}>
                  <Search size={13} style={{ color: 'var(--text-tertiary)' }} />
                  <input
                    value={panelQuery}
                    onChange={(e) => setPanelQuery(e.target.value)}
                    placeholder="Buscar estructura… (click = enfocar · doble click = aislar)"
                    style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: '0.76rem' }}
                  />
                  {panelQuery ? <button type="button" onClick={() => setPanelQuery('')} style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer' }}><X size={12} /></button> : null}
                </div>
              </div>
              <div style={{ flex: 1, overflowY: 'auto', padding: '0 10px 12px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                {panelTree.map(({ kind, groups }) => {
                  const color = hexCss(layerDef(STRUCTURE_KIND_TO_COMPOSITE[kind]).color);
                  return (
                    <details key={kind} open>
                      <summary style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)', listStyle: 'none', padding: '4px 2px' }}>
                        <span style={{ width: 8, height: 8, borderRadius: 99, background: color, display: 'inline-block' }} />
                        {KIND_LABELS[kind]}
                        <span style={{ color: 'var(--text-tertiary)', fontWeight: 500, fontSize: '0.66rem' }}>({groups.reduce((a, g) => a + g.items.length, 0)})</span>
                      </summary>
                      {groups.map(({ zone, items }) => (
                        <details key={zone} style={{ marginLeft: 14 }} open={!panelQuery}>
                          <summary style={{ cursor: 'pointer', fontSize: '0.68rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3px', listStyle: 'none', padding: '3px 0' }}>
                            {BODY_ZONE_LABELS_ES[zone]} ({items.length})
                          </summary>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginLeft: 8 }}>
                            {items.map((s) => {
                              const active = selectedId === s.id;
                              return (
                                <div key={s.id} style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                                  <button
                                    type="button"
                                    onClick={() => { setSelectedId(s.id); setPath({ structureId: s.id, groupKey: null, pieceKey: null }); selectFromPanel(s, false); }}
                                    onDoubleClick={() => { console.info('[lista] dbl'); setSelectedId(s.id); setPath({ structureId: s.id, groupKey: null, pieceKey: null }); selectFromPanel(s, true); setPanelTab('ficha'); }}
                                    style={{
                                      flex: 1, textAlign: 'left', background: active ? 'rgba(53,208,255,0.12)' : 'rgba(255,255,255,0.02)',
                                      border: `1px solid ${active ? 'rgba(53,208,255,0.5)' : 'transparent'}`,
                                      borderRadius: 7, padding: '4px 7px', cursor: 'pointer', color: 'var(--text-primary)',
                                      fontSize: '0.75rem', fontWeight: active ? 700 : 500,
                                    }}
                                    title={`${s.nameEn} — click: enfocar · doble click: aislar`}
                                  >
                                    {s.nameEs}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => toggleHideFromPanel(s)}
                                    title={hiddenCount > 0 ? 'Ocultar/Mostrar' : 'Ocultar'}
                                    style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', padding: 2 }}
                                  >
                                    <EyeOff size={12} />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </details>
                      ))}
                    </details>
                  );
                })}
                {!panelTree.length && <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', padding: '4px 2px' }}>Sin resultados para «{panelQuery}».</p>}
              </div>
            </>
          )}

          {panelTab === 'ficha' && (
            <div style={{ flex: 1, overflowY: 'auto', padding: '12px 14px' }}>
              {selectedStructure ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div>
                      <span style={{ fontSize: '0.66rem', color: hexCss(layerDef(STRUCTURE_KIND_TO_COMPOSITE[selectedStructure.kind]).color), fontWeight: 800, textTransform: 'uppercase' }}>
                        {selectedStructure.kind}
                      </span>
                      <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {path?.pieceKey ? phaseLabel(path.pieceKey.split(':').slice(1).join(':')) : selectedStructure.nameEs}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                        {path?.pieceKey ? `— dentro de ${selectedStructure.nameEs}` : selectedStructure.nameEn}
                      </span>
                    </div>
                    <button type="button" onClick={() => { setSelectedId(null); setPath(null); setPanelTab('arbol'); }} style={{ ...btnStyle, border: 'none' }}><X size={13} /></button>
                  </div>
                  {selectedStructure.kind === 'joint' && (
                    <p style={{ margin: '0 0 6px', fontSize: '0.72rem', color: 'var(--text-tertiary)', lineHeight: 1.4 }}>
                      Marcador cian = localización aproximada de la articulación (centroide de los huesos que la forman).
                    </p>
                  )}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                    <button type="button" onClick={centerOnSelection} style={{ ...btnStyle, padding: '4px 8px', fontSize: '0.72rem' }} title="Centrar (F)">
                      <Crosshair size={12} /> Centrar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (isolation) { setIsolation(null); return; }
                        setIsolation({
                          keys: new Set(currentPieceKeys),
                          label: path?.pieceKey ? phaseLabel(path.pieceKey.split(':').slice(1).join(':')) : (selectedStructure.nameEs ?? ''),
                        });
                      }}
                      style={{ ...btnStyle, padding: '4px 8px', fontSize: '0.72rem', ...(isolationActive ? { borderColor: 'rgba(53,208,255,0.5)', color: '#7fdcff' } : {}) }}
                    >
                      {isolationActive ? <EyeOff size={12} /> : <Eye size={12} />} {isolationActive ? 'Ver todo' : 'Aislar'}
                    </button>
                    <button
                      type="button"
                      onClick={toggleHideCurrent}
                      style={{ ...btnStyle, padding: '4px 8px', fontSize: '0.72rem', ...(unitHidden ? { borderColor: 'rgba(255,180,80,0.5)', color: '#ffc98a' } : {}) }}
                    >
                      {unitHidden ? <Eye size={12} /> : <EyeOff size={12} />} {unitHidden ? 'Mostrar' : 'Ocultar'}
                    </button>
                  </div>
                  <StructureFicha structure={selectedStructure} />
                  <a href={`/app/fitness/library/muscles?structure=${encodeURIComponent(selectedStructure.id)}`} style={{ fontSize: '0.76rem', color: 'var(--accent, #0a84ff)', fontWeight: 600, display: 'inline-block', marginTop: 8 }}>
                    Ver ficha completa en Músculos →
                  </a>
                </>
              ) : (
                <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                  Selecciona una estructura en el modelo, en la lista, o busca arriba.<br /><br />
                  Click = seleccionar (conjunto → subconjunto → pieza) · Doble click = aislar · F centra · Esc libera.
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
        {stats.total} estructuras · {stats.with3dMapping} con mapping 3D · compuesto: {COMPOSITE_STATS.total} piezas de 5 modelos · {stats.pendingCitation} pendientes de verificación bibliográfica ·
        <a href="/app/fitness/library/muscles" style={{ color: 'var(--accent, #0a84ff)', marginLeft: 6 }}>BD de Músculos →</a>
      </p>
    </div>
  );
}

function hexCss(n: number): string {
  return `#${n.toString(16).padStart(6, '0')}`;
}

const crumbStyle: React.CSSProperties = {
  background: 'transparent', border: 'none', padding: 0, fontSize: '0.76rem', lineHeight: 1.3,
};

const btnStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.12))', color: 'var(--text-primary)',
  borderRadius: 8, padding: '5px 9px', cursor: 'pointer', fontSize: '0.76rem', fontWeight: 600,
};

// ── FICHA RICA ──────────────────────────────────────────────────────────────
function Row({ label, value, color }: { label: string; value?: string | string[] | null; color?: string }) {
  if (!value || (Array.isArray(value) && !value.length)) return null;
  return (
    <div>
      <span style={{ fontSize: '0.64rem', color: color ?? 'var(--accent, #0a84ff)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>{label}</span>
      <p style={{ margin: 0, fontSize: '0.79rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{Array.isArray(value) ? value.join(' · ') : value}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, borderTop: '1px solid var(--color-border-subtle, rgba(255,255,255,0.07))', paddingTop: 9 }}>
      <span style={{ fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--text-tertiary)' }}>{title}</span>
      {children}
    </div>
  );
}

function StructureFicha({ structure }: { structure: AnatomyStructure }) {
  const kindColor = hexCss(layerDef(STRUCTURE_KIND_TO_COMPOSITE[structure.kind]).color);
  const nameOf = (id: string) => getStructureById(id)?.nameEs ?? id;
  const s = structure as unknown as Record<string, unknown>;
  const rom = structure.kind === 'joint' ? (structure as JointEntry).rom : undefined;
  const cite = (structure.sourceRefs ?? []).map((r) => `${r.sourceId}${r.locator ? ` · ${r.locator}` : ''}${r.pending ? ' (pendiente)' : ' ✓'}`).join(' | ');
  const zoneLabel = (z: string) => BODY_ZONE_LABELS_ES[z as BodyZone] ?? z;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 9 }}>
        <Row label="Zona" value={zoneLabel(s.zone as string)} color={kindColor} />
        <Row label="Zonas secundarias" value={(s.zones as string[] | undefined)?.map(zoneLabel)} color={kindColor} />
        <Row label="Sinónimos" value={structure.synonyms} color={kindColor} />
      </div>

      {structure.kind === 'muscle' && (
        <>
          <Section title="Anatomía">
            <Row label="Origen" value={s.origin as string} color={kindColor} />
            <Row label="Inserción" value={s.insertion as string} color={kindColor} />
            <Row label="Inervación" value={s.innervation as string} color={kindColor} />
            <Row label="Acción" value={s.action as string[]} color={kindColor} />
            <Row label="Etiquetas" value={(s.actionTags as string[])?.map((t) => `#${t}`)} color={kindColor} />
          </Section>
          <Section title="Función">
            <Row label="Rol biomecánico" value={s.biomechanicalRole as string} color={kindColor} />
            <Row label="Estética" value={s.aesthetics as string} color={kindColor} />
          </Section>
          <Section title="Entrenamiento">
            <Row label="Ejercicios citados" value={s.trainingExercises as string[]} color={kindColor} />
            <Row label="Ejercicios de riesgo" value={s.riskExercises as string[]} color={kindColor} />
            <Row label="Primario en entrenamiento" value={s.primaryForTraining ? 'Sí' : 'No'} color={kindColor} />
          </Section>
          <Section title="Relaciones">
            <Row label="Sinergistas" value={(s.synergists as string[])?.map(nameOf)} color={kindColor} />
            <Row label="Antagonistas" value={(s.antagonists as string[])?.map(nameOf)} color={kindColor} />
          </Section>
        </>
      )}

      {structure.kind === 'joint' && (
        <>
          <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--text-tertiary)', lineHeight: 1.4 }}>
            Marcador cian = localización aproximada (centroide de los huesos que la forman; los GLB no traen la articulación como pieza).
          </p>
          {rom?.length ? (
            <div>
              <span style={{ fontSize: '0.64rem', color: kindColor, fontWeight: 700, textTransform: 'uppercase' }}>ROM verificado (Levangie &amp; Norkin 6ª ed.)</span>
              <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 3 }}>
                {rom.map((r) => (
                  <li key={r.motion} style={{ fontSize: '0.79rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{r.motion}:</strong> {r.value}
                    {r.condition ? ` — ${r.condition}` : ''}
                    <span style={{ fontSize: '0.64rem', color: 'var(--text-tertiary)' }}> ({r.sourceRefs.map((sr) => sr.locator).join('; ')})</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <Section title="Articulación">
            <Row label="Tipo articular" value={s.jointType as string} color={kindColor} />
            <Row label="Huesos" value={s.bones as string} color={kindColor} />
            <Row label="Movimientos" value={s.movements as string} color={kindColor} />
            <Row label="Estabilizadores" value={s.stabilizers as string} color={kindColor} />
          </Section>
          <Section title="Clínica (estructura, no diagnóstico)">
            <Row label="Lesiones" value={s.lesions as string} color={kindColor} />
            <Row label="Rehabilitación" value={s.rehab as string[]} color={kindColor} />
            <Row label="Riesgo bajo carga" value={s.riskyUnderLoad as string[]} color={kindColor} />
            <Row label="Relacionadas" value={(s.relatedStructures as string[])?.map(nameOf)} color={kindColor} />
          </Section>
        </>
      )}

      {structure.kind === 'tendon' && (
        <>
          <Section title="Tendón">
            <Row label="Inserción" value={s.insertion as string} color={kindColor} />
            <Row label="Músculos que lo forman" value={(s.muscles as string[])?.map(nameOf)} color={kindColor} />
          </Section>
          <Section title="Clínica (estructura, no diagnóstico)">
            <Row label="Lesiones típicas" value={s.injuries as string} color={kindColor} />
            <Row label="Rehabilitación" value={s.rehab as string[]} color={kindColor} />
            <Row label="Factores de riesgo" value={s.risks as string[]} color={kindColor} />
          </Section>
        </>
      )}

      {structure.kind === 'nerve' && (
        <>
          <Section title="Nervio">
            <Row label="Inerva / trayecto" value={s.innervates as string} color={kindColor} />
            <Row label="Atrapamiento" value={s.entrapmentSite as string} color={kindColor} />
          </Section>
          <Section title="Clínica (estructura, no diagnóstico)">
            <Row label="Síntomas de afectación" value={s.symptoms as string} color={kindColor} />
            <Row label="Contexto de lesión" value={s.lesionContext as string} color={kindColor} />
            <Row label="Rehabilitación" value={s.rehab as string[]} color={kindColor} />
            <Row label="Factores de riesgo" value={s.risks as string[]} color={kindColor} />
            <Row label="Relacionadas" value={(s.relatedStructures as string[])?.map(nameOf)} color={kindColor} />
          </Section>
        </>
      )}

      {structure.kind === 'ligament' && (
        <Section title="Ligamento">
          <Row label="Estabiliza" value={s.jointId ? nameOf(s.jointId as string) : undefined} color={kindColor} />
          <Row label="Nota" value={s.note as string} color={kindColor} />
        </Section>
      )}

      {structure.kind === 'bone' && (
        <Section title="Hueso">
          <Row label="Nota funcional" value={s.note as string} color={kindColor} />
        </Section>
      )}

      <Section title="Trazabilidad">
        <Row label="Fuentes" value={cite || undefined} color={kindColor} />
        {s.wikiEn ? (
          <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(s.wikiEn as string)}`} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent, #0a84ff)' }}>
            Wikipedia: {s.wikiEn as string} →
          </a>
        ) : null}
      </Section>
    </div>
  );
}
